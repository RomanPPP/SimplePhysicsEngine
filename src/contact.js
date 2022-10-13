import { vector, m3 } from "math";

const { dot, cross, normalize, diff, scale, norm, sum } = vector;

class Constraint {
  constructor(body1, body2) {
    this.bias = null;
    this.n = null;
    this.J = null;
    this.invMass1 = null;
    this.JM = null;
    this.body1 = body1;
    this.body2 = body2;
    this.ra = null;
    this.rb = null;
  }
  updateEq() {}
  applyResolvingImpulse(lambda) {}
}
const clamp = (v, min, max) => {
  if (v > min) {
    if (v < max) return v;
    else return max;
  }
  return min;
};

const frictionSolver = (contact, lambda, body1, body2) => {
  contact.relVelocity = sum(body2.velocity, cross(body2.angularV, contact.rb));
  contact.relVelocity = diff(contact.relVelocity, body1.velocity);
  contact.relVelocity = diff(
    contact.relVelocity,
    cross(body1.angularV, contact.ra)
  );

  const mu = (body1.friction + body1.friction);
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
class Contact extends Constraint {
  constructor(raLocal, rbLocal, n, body1, body2) {
    super(body1, body2);
    this.ra = null;
    this.rb = null;
    this.PA = null;
    this.PB = null;
    this.n = n;
    this.penDepth = null;
    this.initialVelProj = null;
    this.effMass = null;
    this.raLocal = raLocal;
    this.rbLocal = rbLocal;
    this.J = null;
    this.accI = 0;
    this.accFI1 = 0;
    this.accFI2 = 0;
    try {
      if (dot(this.n, [1, 0, 0]) < 0.5) {
        this.fDir1 = cross(this.n, [1, 0, 0]);
      } else {
        this.fDir1 = cross(this.n, [0, 0, 1]);
      }
      this.fDir2 = normalize(cross(this.fDir1, this.n));
      this.fDir1 = normalize(this.fDir1);
    } catch (err) {
      console.log(this.n);
      throw new Error();
    }
  }
  _J() {
    return [
      scale(this.n, -1),
      cross(this.n, this.ra),
      this.n,
      cross(this.rb, this.n),
    ];
  }
  updateContactData() {
    const col1 = this.body1.collider;
    const col2 = this.body2.collider;
    const PA = sum(col1.pos, m3.transformPoint(col1.Rmatrix, this.raLocal));
    const PB = sum(col2.pos, m3.transformPoint(col2.Rmatrix, this.rbLocal));

    this.ra = diff(PA, col1.pos);
    this.rb = diff(PB, col2.pos);
    this.penDepth = -dot(diff(PB, PA), this.n);
  }
  updateEq() {
    this.updateContactData();
    this.J = [
      scale(this.n, -1),
      cross(this.n, this.ra),
      this.n,
      cross(this.rb, this.n),
    ];
    const I1 = this.body1.getItensor();
    const I2 = this.body2.getItensor();
    const M1 = this.body1.inverseMass;
    const M2 = this.body2.inverseMass;
    this.JM = [
      scale(this.J[0], M1),
      m3.transformPoint(I1, this.J[1]),
      scale(this.J[2], M2),
      m3.transformPoint(I2, this.J[3]),
    ];
    this.effMass =
      M1 + dot(this.JM[0], this.J[1]) + M2 + dot(this.JM[3], this.J[3]);
    const tJ1 = [
      this.fDir1,
      cross(this.fDir1, this.ra),
      scale(this.fDir1, -1),
      cross(this.rb, this.fDir1),
    ];
    this.fEffMass1 =
      this.body1.inverseMass +
      m3.dot(m3.transformPoint(this.body1.inverseInertia, tJ1[1]), tJ1[1]) +
      this.body2.inverseMass +
      m3.dot(m3.transformPoint(this.body2.inverseInertia, tJ1[3]), tJ1[3]);
    const tJ2 = [
      scale(this.fDir2, -1),
      cross(this.fDir2, this.ra),
      this.fDir2,
      cross(this.fDir2, this.rb),
    ];
    this.fEffMass2 =
      this.body1.inverseMass +
      m3.dot(m3.transformPoint(this.body1.inverseInertia, tJ2[1]), tJ2[1]) +
      this.body2.inverseMass +
      m3.dot(m3.transformPoint(this.body2.inverseInertia, tJ2[3]), tJ2[3]);
    this.bias = this.penDepth;
  }
  applyResolvingImpulse(lambda) {
    if (lambda < 0) return;

    this.body1.applyImpulse(scale(this.J[0], lambda), this.ra);
    this.body2.applyImpulse(scale(this.J[2], lambda), this.rb);
    frictionSolver(this, lambda, this.body1, this.body2)
  }
  applyResolvingPseudoImpulse(lambda) {
    if (lambda < 0) return;
    lambda = Math.min(10, lambda);
    this.body1.applyPseudoImpulse(scale(this.J[0], lambda), this.ra);
    this.body2.applyPseudoImpulse(scale(this.J[2], lambda), this.rb);
  }
  generateFrictionConstraints() {
    let fDir1, fDir2;

    if (dot(this.n, [1, 0, 0]) < 0.5) {
      fDir1 = cross(this.n, [1, 0, 0]);
    } else {
      fDir1 = cross(this.n, [0, 0, 1]);
    }
    fDir2 = normalize(cross(fDir1, this.n));
    fDir1 = normalize(fDir1);

    return [
      new FrictionConstraint(fDir1, this.ra, this.rb, this.body1, this.body2),
      new FrictionConstraint(fDir2, this.ra, this.rb, this.body1, this.body2),
    ];
  }
}
class FrictionConstraint extends Constraint {
  constructor(fDir, ra, rb, body1, body2) {
    super(body1, body2);
    this.fDir = fDir;
    this.ra = ra;
    this.rb = rb;
  }
  updateEq() {
    this.J = [
      this.fDir,
      cross(this.fDir, this.ra),
      scale(this.fDir, -1),
      cross(this.rb, this.fDir),
    ];
    const I1 = this.body1.inverseInertia;
    const I2 = this.body2.inverseInertia;
    const M1 = this.body1.inverseMass;
    const M2 = this.body2.inverseMass;
    this.JM = [
      scale(this.J[0], M1),
      m3.transformPoint(I1, this.J[1]),
      scale(this.J[2], M2),
      m3.transformPoint(I2, this.J[3]),
    ];
    this.effMass =
      M1 + dot(this.JM[0], this.J[1]) + M2 + dot(this.JM[3], this.J[3]);
  }
}
class Joint extends Constraint {
  constructor(localRa, localRb, body1, body2) {
    super(body1, body2);
    this.localRa = localRa;
    this.localRb = localRb;
    this.PA = this.body1.collider.localToGlobal(this.localRa);
    this.PB = this.body2.collider.localToGlobal(this.localRb);
  }
  updateEq() {
    this.PA = this.body1.collider.localToGlobal(this.localRa);
    this.PB = this.body2.collider.localToGlobal(this.localRb);
    this.n = diff(this.PA, this.PB);
    this.ra = diff(this.PA, this.body1.collider.pos);
    this.rb = diff(this.PB, this.body2.collider.pos);
    this.dist = norm(this.n);
    this.J = [
      scale(this.n, 1 / this.dist),
      scale(cross(this.n, this.ra), 1 / this.dist),
      scale(this.n, -1 / this.dist),
      scale(cross(this.rb, this.n), 1 / this.dist),
    ];
    const I1 = this.body1.inverseInertia;
    const I2 = this.body2.inverseInertia;
    const M1 = this.body1.inverseMass;
    const M2 = this.body2.inverseMass;
    this.effMass =
      M1 +
      dot(m3.transformPoint(I1, this.J[1]), this.J[1]) +
      M2 +
      dot(m3.transformPoint(I2, this.J[3]), this.J[3]);
  }
}
export { Contact, Constraint, Joint };
