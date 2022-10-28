import Tree from "./tree";

import {
  solveCollision,
  solveContactPositionErr,
  warmStart,
  solvePosition,
} from "./constraints";
import { gjk } from "./gjk";

import Manifold from "./manifold";
import Island from "./island";
import { GaussSeidel } from "./GSsolver";
import { ContactConstraint } from "./contact";

const pairHash = (x, y) =>
  x === Math.max(x, y) ? x * x + x + y : y * y + x + y;

export default class Simulation {
  constructor() {
    this.objects = [];
    this.bvh = new Tree();
    this.collisions = [];
    this.constraints = new Map();
    this.collisionManifolds = new Map();
    this.lastId = 0;
  }
  addObject(object) {
    const aabb = object.getExpandedAABB();

    const leaf = this.bvh.insertLeaf(aabb, object);
    object.BVlink = leaf;
    object.id = this.lastId;
    this.lastId++;
    object.on("update", () => this.updateObjectAABB.call(this, object));

    this.objects.push(object);
  }
  addConstraints(constraints, name) {
    const system = new Island(...constraints);
    system.generateSystem();
    const positionSystem = new Island(...constraints)
    positionSystem.generateSystem()
    this.constraints.set(name, [system, positionSystem])
  
  }
  updateObjectAABB(object) {
    const newAABB = object.getAABB();

    this.bvh.removeLeaf(object.BVlink);
    const leaf = this.bvh.insertLeaf(newAABB, object);
    object.BVlink = leaf;
  }
  removeObject(object) {
    this.bvh.removeLeaf(object.BVlink);
    this.objects = this.objects.filter((el) => el === object);
  }

  updateCollisions() {
    const { collisionManifolds } = this;
    for (const [hash, manifold] of collisionManifolds) {
      manifold.update();
      if (!manifold.keep) collisionManifolds.delete(hash);
    }
    for (let i = 0, n = this.objects.length; i < n; i++) {
      const object = this.objects[i];
      if (object.static) continue;
      const cols = this.bvh.getCollisions(object.BVlink);
      object.BVlink.isChecked = true;
      if (cols.length != 0)
        for (let j = 0, n = cols.length; j < n; j++) {
          const hash = pairHash(object.id, cols[j].id);
          let manifold = this.collisionManifolds.get(hash);
          if (manifold) continue;
          const contacts = gjk(object, cols[j]);

          if (contacts) {
            manifold = new Manifold(...contacts);

            this.collisionManifolds.set(hash, manifold);
          }
        }
    }

    this.bvh.setUnchecked();
  }
  tick(deltaTime) {
    this.updateCollisions();
    let manifolds = this.collisionManifolds
    for (let i = 0, n = this.objects.length; i < n; i++) {
      this.objects[i].integrateForces(deltaTime);
    }
    const system = new Island();
    for (let [key, manifold] of manifolds) {
      const useVelocityBias = manifold.contacts.length < 3
      const contacts = manifold.contacts.map((c) => {
        const constraint =  new ContactConstraint(c)
        if(useVelocityBias){
          constraint.biasFactor = 0.09
        }
        else{
          constraint.pseudoBiasFactor = 0.1
        }
        return constraint
      });

      for (let i = 0, n = contacts.length; i < n; i++) {
        contacts[i].updateEq();
      }
      system.addConstraint(...contacts);
    }

    system.generateSystem(deltaTime);

    
    
    const lambda = GaussSeidel(system.getJMJ(), system.getJV(deltaTime), system.constraints.length, 1e-6);
    system.applyResolvingImpulses(lambda);


    for(const [name, constraints] of this.constraints){
      const system = constraints[0]
      system.constraints.forEach(c => c.updateEq())
    
      const JMJ = system.getJMJ()
      const JV = system.getJV(deltaTime)
      
      const lambda = GaussSeidel(JMJ, JV, system.constraints.length, 1e-6);
    
      system.applyResolvingImpulses(lambda);
    }
    for (let i = 0, n = this.objects.length; i < n; i++) {
      this.objects[i].integrateVelocities(deltaTime);
    }
    this.objects.forEach((object) => object.updateInverseInertia());
    
    const positionSystem = new Island();
    for (const [key,manifold] of manifolds) {
      const contacts = manifold.contacts.map((c) => new ContactConstraint(c));
      contacts.forEach((contact) => contact.updateEq());
      if (contacts.length > 2) {
        positionSystem.addConstraint(...contacts);
      }
    }
    positionSystem.generateSystem(deltaTime);
    const JMJ = positionSystem.getJMJ();
    const JpV = positionSystem.getJpV(deltaTime);
    const pLambda = GaussSeidel(
      JMJ,
      JpV,
      positionSystem.constraints.length,
      1e-6
    );
    positionSystem.applyResolvingPseudoImpulses(pLambda, deltaTime);

    for(const [name, constraints] of this.constraints){
      const system = constraints[1]
      
      system.constraints.forEach(c => c.updateEq())

      const JMJ = system.getJMJp()
      const JpV = system.getJpV(deltaTime)

      
      
        const lambda = GaussSeidel(JMJ, JpV, system.constraints.length, 1e-6);
        system.applyResolvingPseudoImpulses(lambda)
      
      
    }

    for (let i = 0, n = this.objects.length; i < n; i++) {
      this.objects[i].integratePseudoVelocities(deltaTime);
    }
    this.objects.forEach((object) => object.updateInverseInertia());
  }
}
