import Tree from "./tree";
import {vector} from 'math'
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
import { Constraint, ContactConstraint, FrictionConstraint } from "./contact";

const sameGroup = (body1, body2) => {
  if (!body1.group) return;
  if (!body2.group) return;
  return body1.group === body2.group;
};
const pairHash = (x, y) =>
  x === Math.max(x, y) ? x * x + x + y : y * y + x + y;

export default class Simulation {
  constructor() {
    this.objects = [];
    this.bvh = new Tree();
    this.collisions = [];
    this.constraints = new Map();
    this.collisionManifolds = new Map();
    this.lastId = 1;
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
    const positionSystem = new Island(...constraints);
    positionSystem.generateSystem();
    this.constraints.set(name, [system, positionSystem]);
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
          if (sameGroup(object, cols[j])) continue;
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
    let manifolds = this.collisionManifolds;
    for (let i = 0, n = this.objects.length; i < n; i++) {
      this.objects[i].integrateForces(deltaTime);
    }
    const system = new Island();
    const frictionSystem = new Island()
    const contactConstraints = []
    const frictionConstraints = []
    for (let [key, manifold] of manifolds) {
      const useVelocityBias = manifold.contacts.length < 3;
      
      const contacts = manifold.contacts.forEach((c) => {
        const {body1, body2, raLocal, rbLocal, ra, rb, i, j, penDepth, n} = c
        const constraint = new ContactConstraint(body1, body2, n, ra, rb, raLocal, rbLocal, null, null, penDepth, i, j)
        
        const fConstraint1 = new FrictionConstraint(body1, body2, vector.scale(i, -1), ra, rb, raLocal, rbLocal, 0, -body1.friction - body2.friction, body1.friction + body2.friction, null)
        const fConstraint2 = new FrictionConstraint(body1, body2, vector.scale(j, -1), ra, rb, raLocal, rbLocal, 0, -body1.friction - body2.friction, body1.friction + body2.friction, null)
        
        if (1) {
          constraint.biasFactor = 0.12;
        } 
        constraint.updateLeftPart(deltaTime);
        constraint.updateRightPart(deltaTime)
        fConstraint1.updateLeftPart(deltaTime)
        fConstraint2.updateLeftPart(deltaTime)
        fConstraint1.updateRightPart(deltaTime)
        fConstraint2.updateRightPart(deltaTime)
        contactConstraints.push(constraint)
        frictionConstraints.push(fConstraint1, fConstraint2)
      });

      
      
    }
    system.addConstraint(...contactConstraints);
    frictionSystem.addConstraint(...frictionConstraints)
    system.generateSystem(deltaTime);
    /*
    const lambda = GaussSeidel(
      system.getJMJ(),
      system.getJV(deltaTime),
      system.constraints.length,
      1e-12
    );
    system.applyResolvingImpulses(lambda);
    */
    const lambda = system.solvePGS(deltaTime)
    for(let i = 0, n = lambda.length; i < n; i++){
      frictionConstraints[2*i].lambdaMin *= lambda[i]
      frictionConstraints[2*i].lambdaMax *= lambda[i]
      frictionConstraints[2*i + 1].lambdaMin *= lambda[i]
      frictionConstraints[2*i + 1].lambdaMax *= lambda[i]

    }
    frictionSystem.generateSystem(deltaTime)
    frictionSystem.solvePGS(deltaTime)
/*  
    for (const [name, constraints] of this.constraints) {
      const system = constraints[0];
      system.constraints.forEach((c) => c.updateEq());

      const JMJ = system.getJMJ();
      const JV = system.getJV(deltaTime);

      const lambda = GaussSeidel(JMJ, JV, system.constraints.length, 1e-12);

      system.applyResolvingImpulses(lambda);
    }*/
    for (let i = 0, n = this.objects.length; i < n; i++) {
      this.objects[i].integrateVelocities(deltaTime);
    }
/*
    const positionSystem = new Island();
    for (const [key, manifold] of manifolds) {
      const contacts = manifold.contacts.map((c) => new ContactConstraint(c));

      contacts.forEach((contact) => {contact.updateEq()
       
      });
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
      1e-12
    );
    positionSystem.applyResolvingPseudoImpulses(pLambda, deltaTime);

    for (const [name, constraints] of this.constraints) {
      const system = constraints[1];

      system.constraints.forEach((c) => c.updateEq());

      const JMJ = system.getJMJp();
      const JpV = system.getJpV(deltaTime);

      const lambda = GaussSeidel(JMJ, JpV, system.constraints.length, 1e-12);
      system.applyResolvingPseudoImpulses(lambda);
    }

    for (let i = 0, n = this.objects.length; i < n; i++) {
      this.objects[i].integratePseudoVelocities(deltaTime);
    }*/
    this.objects.forEach((object) => object.updateInverseInertia());
  }
}
