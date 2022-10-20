import { vector, m3 } from "math";

const { dot, cross, normalize, diff, scale, norm, sum } = vector;

class Constraint {
  constructor({body1, body2, n, ra, rb}) {
    this.bias = null;
    this.n = n;
    this.J = null;
    this.invMass1 = null;
    this.JM = null;
    this.body1 = body1;
    this.body2 = body2;
    this.ra = ra;
    this.rb = rb;
  }
  updateEq() {
    const {body1, body2, n, ra, rb}  = this
    this.J = [
      scale(n, -1),
      cross(n, ra),
      n,
      cross(rb, n),
    ];
    const I1 = body1.inverseInertia;
    const I2 =body2.inverseInertia;
    const M1 = body1.inverseMass;
    const M2 = body2.inverseMass;
    this.JM = [
      scale(this.J[0], M1),
      m3.transformPoint(I1, this.J[1]),
      scale(this.J[2], M2),
      m3.transformPoint(I2, this.J[3]),
    ];
    this.effMass =
      M1 + dot(this.JM[0], this.J[1]) + M2 + dot(this.JM[3], this.J[3]);
    
    
    this.relativeVelocity = diff(
      sum(body2.velocity, cross(body2.angularV, rb)),
      sum(body1.velocity, cross(body1.angularV, ra))
      );
    this.relativeVelocityNormalProjection = dot(this.relativeVelocity, n)
  }
  applyResolvingImpulse(lambda) {}
}
const clamp = (v, min, max) => {
  if (v > min) {
    if (v < max) return v;
    else return max;
  }
  return min;
};


class ContactConstraint extends Constraint {
  constructor({raLocal, rbLocal, ra, rb, PA, PB, n, penDepth, body1, body2, i, j}) {
    
    super({ra, rb, n, body1, body2});
    this.ra = ra;
    this.rb = rb;
    this.PA = PA;
    this.PB = PB;
    this.n = n;
    this.penDepth = penDepth;
    this.initialVelProj = null;
    this.effMass = null;
    this.raLocal = raLocal;
    this.rbLocal = rbLocal;
    this.J = null;
    this.accI = 0;
    this.accFI1 = 0;
    this.accFI2 = 0;
    this.i = i
    this.j = j
    this.relativeVelocity = null
    
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
    const {body1, body2, n, ra, rb}  = this
    this.J = [
      scale(n, -1),
      cross(n, ra),
      n,
      cross(rb, n),
    ];
    
    const I1 = body1.inverseInertia;
    const I2 =body2.inverseInertia;
    const M1 = body1.inverseMass;
    const M2 = body2.inverseMass;
    this.JM = [
      scale(this.J[0], M1),
      m3.transformPoint(I1, this.J[1]),
      scale(this.J[2], M2),
      m3.transformPoint(I2, this.J[3]),
    ];
    this.effMass =
      M1 + dot(this.JM[0], this.J[1]) + M2 + dot(this.JM[3], this.J[3]);
    
    
    this.relativeVelocity = diff(
      sum(body2.velocity, cross(body2.angularV, rb)),
      sum(body1.velocity, cross(body1.angularV, ra))
      );
    this.relativeVelocityNormalProjection = dot(this.relativeVelocity, n)
  }
  applyResolvingImpulse(lambda) {
    if (lambda < 0) return;
    const max =  this.effMass * 10
    lambda = Math.min(10 , lambda)
    this.body1.applyImpulse(scale(this.J[0], lambda), this.ra);
    this.body2.applyImpulse(scale(this.J[2], lambda), this.rb);
    this.applyFrictionImpulse(lambda)
  }
  applyFrictionImpulse(lambda){
    
    const {ra, rb, body1, body2, i, j} = this
    
    const fConstraint1 = new Constraint({body1, body2,n : scale(i, -1), ra, rb })
    const fConstraint2 = new Constraint({body1, body2, n : scale(j, -1), ra, rb})

    fConstraint1.updateEq()
    fConstraint2.updateEq()

    let mu = (body1.friction + body1.friction)*10;
    
    let fImpulse1 = (fConstraint1.relativeVelocityNormalProjection - 0.01) / fConstraint1.effMass;
    fImpulse1 = clamp(fImpulse1, -lambda * mu, lambda * mu);

    let fImpulse2 =( fConstraint2.relativeVelocityNormalProjection -0.01)/ fConstraint2.effMass;

    fImpulse2 = clamp(fImpulse2, -lambda * mu, lambda * mu);

    this.accFI1 += fImpulse1;
    this.accFI2 += fImpulse2;
    
    let fVec = sum(
      scale(i, fImpulse1),
      scale(j, fImpulse2)
    );
    
    body1.applyImpulse(scale(fVec, -1), ra);
    body2.applyImpulse(fVec, rb);
  }
  applyResolvingPseudoImpulse(lambda) {
    if (lambda < 0) return;
    const max =  this.effMass * 10
    lambda = Math.min(10, lambda);
    this.body1.applyPseudoImpulse(scale(this.J[0], lambda), this.ra);
    this.body2.applyPseudoImpulse(scale(this.J[2], lambda), this.rb);
  }
  
}
class FrictionConstraint extends Constraint {
  constructor({n, ra, rb, body1, body2}) {
    super(body1, body2);
    this.n = n;
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
export { ContactConstraint, Constraint, Joint };
