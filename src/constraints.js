import { vector, m3 } from "math";
import { GaussSeidel } from "./GSsolver";

const { sum, diff, scale, cross, dot, normalize, norm, normSq } = vector;

const tol = 0.01;
const tol2 = 0.00001;
const numIterations = 1;
const numPosIterations = 1;

const clamp = (v, min, max) => {
  if (v > min) {
    if (v < max) return v;
    else return max;
  }
  return min;
};

const getManifoldSystem = (manifold) => {
  const body1 = manifold.body1;
  const body2 = manifold.body2;

  const M1 = body1.inverseMass;
  const I1 = body1.inverseInertia;
  const M2 = body2.inverseMass;
  const I2 = body2.inverseInertia;
  const contacts = manifold.contacts;
  let n = contacts.length;
  let A = [];
  const JV = [];
  for (let i = 0; i < n; i++) {
    const rowNum = i * n;
    const JM = [
      scale(contacts[i].J[0], M1),
      m3.transformPoint(I1, contacts[i].J[1]),
      scale(contacts[i].J[2], M2),
      m3.transformPoint(I2, contacts[i].J[3]),
    ];
    for (let j = 0; j < n; j++) {
      if (i === j) {
        A[rowNum + j] = contacts[i].effMass;
        continue;
      }
      A[rowNum + j] =
        dot(JM[0], contacts[j].J[0]) +
        dot(JM[1], contacts[j].J[1]) +
        dot(JM[2], contacts[j].J[2]) +
        dot(JM[3], contacts[j].J[3]);
    }
    JV.push(
      -dot(contacts[i].J[0], body1.velocity) -
        dot(contacts[i].J[1], body1.angularV) -
        dot(contacts[i].J[2], body2.velocity) -
        dot(contacts[i].J[3], body2.angularV)
    );
  }
  return { A, JV };
};
const blockSolver = (manifold, deltaTime) => {
  const body1 = manifold.body1;
  const body2 = manifold.body2;

  const contacts = manifold.contacts;
  let n = contacts.length;

  const { A, JV } = getManifoldSystem(manifold);
  for (let i = 0; i < n; i++) {
    // JV[i] += Math.max(0,contacts[i].penDepth-tol)/deltaTime * 0.25
  }
  const lambda = GaussSeidel(A, JV, n, 0.000001);

  for (let i = 0; i < n; i++) {
    body1.applyImpulse(scale(contacts[i].J[0], lambda[i]), contacts[i].ra);
    body2.applyImpulse(scale(contacts[i].J[2], lambda[i]), contacts[i].rb);
  }
  return lambda;
};
const frictionSolver = (contact, lambda, body1, body2) => {
  contact.relVelocity = sum(body2.velocity, cross(body2.angularV, contact.rb));
  contact.relVelocity = diff(contact.relVelocity, body1.velocity);
  contact.relVelocity = diff(
    contact.relVelocity,
    cross(body1.angularV, contact.ra)
  );

  const mu = body1.friction + body1.friction;
  let fImpulse1 = -dot(contact.relVelocity, contact.fDir1) / contact.fEffMass1;
  fImpulse1 = clamp(fImpulse1, -lambda * mu, lambda * mu);

  let fImpulse2 = -dot(contact.relVelocity, contact.fDir2) / contact.fEffMass2;
  fImpulse2 = clamp(fImpulse2, -lambda * mu, lambda * mu);

  contact.accFI1 += fImpulse1;
  contact.accFI2 += fImpulse2;

  let fVec = sum(
    scale(contact.fDir1, fImpulse1),
    scale(contact.fDir2, fImpulse2)
  );

  body1.applyImpulse(scale(fVec, -1), contact.ra);
  body2.applyImpulse(fVec, contact.rb);
};
function solveCollision(manifold, deltaTime) {
  const body1 = manifold.body1;
  const body2 = manifold.body2;
  const contacts = manifold.contacts;
  if (contacts.length > 1) {
    const lambda = blockSolver(manifold, deltaTime);
    const n = lambda.length;
    for (let i = 0; i < n; i++) {
      frictionSolver(contacts[i], lambda[i], body1, body2);
    }
    return;
  }
  for (let j = 0; j < numIterations; j++) {
    for (let i = 0, n = manifold.contacts.length; i < n; i++) {
      const contact = manifold.contacts[i];
      const k2 = contact.effMass;

      if (contact.penDepth <= 0) return;

      contact.relVelocity = sum(
        body2.velocity,
        cross(body2.angularV, contact.rb)
      );
      contact.relVelocity = diff(contact.relVelocity, body1.velocity);
      contact.relVelocity = diff(
        contact.relVelocity,
        cross(body1.angularV, contact.ra)
      );
      const Vc = dot(contact.relVelocity, contact.n);
      const restitution = Math.max(Vc - tol2, 0) * 0.1;
      let b = (Math.max(0, contact.penDepth - tol) / deltaTime) * 0.25;

      let lambda = -Vc / contact.effMass;
      let oldAcc = contact.accI;
      contact.accI += lambda;
      if (contact.accI < 0) contact.accI = 0;
      lambda = contact.accI - oldAcc;

      body1.applyImpulse(scale(contact.n, -lambda), contact.ra);
      body2.applyImpulse(scale(contact.n, lambda), contact.rb);
      frictionSolver(contact, lambda, body1, body2);
    }
  }
}

const solveConstraint = (constraint, deltaTime) => {
  const ra = constraint.body1.collider.localToGlobal(constraint.ra);
  const rb = constraint.body2.collider.localToGlobal(constraint.rb);
  const n = constraint.n;

  if (constraint.dist < 0.01) return;
  const normal = scale(constraint.n, 1 / constraint.dist);
  let v1 = sum(
    constraint.body1.velocity,
    cross(constraint.body1.angularV, constraint.ra)
  );
  let v2 = sum(
    constraint.body2.velocity,
    cross(constraint.body2.angularV, constraint.rb)
  );
  let relVelocity = diff(v2, v1);

  const Vc = dot(relVelocity, normal);
  let b = (constraint.dist / deltaTime) * 0.2;
  const softness = 2;
  let lambda = -Vc / constraint.effMass;

  constraint.body1.applyImpulse(scale(normal, -lambda), constraint.ra);
  constraint.body2.applyImpulse(scale(normal, lambda), constraint.rb);
};

const solvePosition = (constraint, deltaTime) => {
  if (constraint.dist < 0.01) return;
  const normal = scale(constraint.n, 1 / constraint.dist);
  let v1 = sum(
    constraint.body1.pseudoVelocity,
    cross(constraint.body1.pseudoAngularV, constraint.ra)
  );
  let v2 = sum(
    constraint.body2.pseudoVelocity,
    cross(constraint.body2.pseudoAngularV, constraint.rb)
  );
  let relVelocity = diff(
    constraint.body2.pseudoVelocity,
    constraint.body1.pseudoVelocity
  );

  const Vc = dot(relVelocity, normal);

  let b = Math.max(0, constraint.dist / deltaTime - 0.01);
  const softness = 2;
  let lambda =
    (b - Vc) / (constraint.body1.inverseMass + constraint.body2.inverseMass);

  if (Math.abs(lambda) < 0.1) return;

  constraint.body1.applyPseudoImpulse(scale(normal, -lambda), [0, 0, 0]);
  constraint.body2.applyPseudoImpulse(scale(normal, lambda), [0, 0, 0]);
};

const solveContactPositionErr = (contact, deltaTime, n) => {
  if (contact.penDepth < 0.01) return;

  let v1 = sum(
    contact.body1.pseudoVelocity,
    cross(contact.body1.pseudoAngularV, contact.ra)
  );
  let v2 = sum(
    contact.body2.pseudoVelocity,
    cross(contact.body2.pseudoAngularV, contact.rb)
  );
  let relVelocity = diff(v2, v1);

  const Vc = dot(relVelocity, contact.n);
  //if(Vc < 0)return

  let b = contact.penDepth / deltaTime / n;
  //if(Vc >= b) return
  let lambda =
    (b - Vc) / (contact.body1.inverseMass + contact.body2.inverseMass);

  contact.penDepth = 0;

  //if(Math.abs(lambda) < 0.1)return

  contact.body1.applyPseudoImpulse(scale(contact.n, -lambda), [0, 0, 0]);
  contact.body2.applyPseudoImpulse(scale(contact.n, lambda), [0, 0, 0]);
};
export { solveCollision, solvePosition, solveContactPositionErr };
