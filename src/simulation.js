import Tree from "./tree";

import {
  solveCollision,
  solveContactPositionErr,
  warmStart,
  solvePosition,
} from "./constraints";
import {gjk} from "./gjk";

import Manifold from "./manifold";
import Island from "./island";
import { GaussSeidel } from "./GSsolver";
const prec = 0.3;
const pairHash = (x, y) =>
  x === Math.max(x, y) ? x * x + x + y : y * y + x + y;

export default class Simulation {
  constructor() {
    this.objects = [];
    this.bvh = new Tree();
    this.collisions = [];
    this.constrains = [];
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
    const manifolds = this.collisionManifolds.values();

    for (let i = 0, n = this.objects.length; i < n; i++) {
      const object = this.objects[i];
      if (object.static) continue;
      const cols = this.bvh.getCollisions(object.BVlink);
      object.BVlink.isChecked = true;
      if (cols.length != 0)
        for (let j = 0, n = cols.length; j < n; j++) {
          const hash = pairHash(object.id, cols[j].id);
          let manifold = this.collisionManifolds.get(hash);
          //if(manifold && manifold.contacts.length > 4) continue
          const contact = gjk(object, cols[j]);

          if (!contact) {
            if (manifold) this.collisionManifolds.delete(hash);
            continue;
          }

          if (!manifold) {
            manifold = new Manifold(object, cols[j]);
            manifold.contacts = [contact];

            this.collisionManifolds.set(hash, manifold);
          } else manifold.addContact(contact);
        }
    }

    this.bvh.setUnchecked();
  }
  tick(deltaTime) {
    this.updateCollisions();
    let manifolds = this.collisionManifolds.values();
    for (let manifold of manifolds) manifold.update();
/*  
    manifolds = this.collisionManifolds.values();

   
    const system = new Island();
    for (let manifold of manifolds) {
      const contacts = manifold.contacts;
      for (let i = 0, n = contacts.length; i < n; i++) {
        contacts[i].updateEq();
      }
      system.addConstraint(...contacts);
    }

    system.generateSystem(deltaTime);

    for (let i = 0, n = this.objects.length; i < n; i++) {
      this.objects[i].integrateForces(deltaTime);
    }

    const [_JMJ, _JV, _JpV] = system.getUpdatedValues();
    const lambda = GaussSeidel(_JMJ, _JV, system.constraints.length, 1e-7);
    system.applyResolvingImpulses(lambda);

    for (let i = 0, n = this.objects.length; i < n; i++) {
      this.objects[i].integrateVelocities(deltaTime);
    }

    manifolds = this.collisionManifolds.values();
    const positionSystem = new Island();
    for (const manifold of manifolds) {
      const { contacts } = manifold;
      contacts.forEach((contact) => contact.updateEq());
      if (contacts.length > 2) {
        
        positionSystem.addConstraint(...contacts);
      }
    }
    positionSystem.generateSystem(deltaTime);
    const JMJ = positionSystem.getJMJ();
    const JpV = positionSystem.getJpV();
    const pLambda = GaussSeidel(
      JMJ,
      JpV,
      positionSystem.constraints.length,
      1e-7
    );
    positionSystem.applyResolvingPseudoImpulses(pLambda, deltaTime);

    for (let i = 0, n = this.objects.length; i < n; i++) {
      this.objects[i].integratePseudoVelocities(deltaTime);
    }*/
    //for(let i = 0; i<4; i++
    
  }
}
