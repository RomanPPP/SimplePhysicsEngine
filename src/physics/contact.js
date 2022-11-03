import { vector, m3 } from "math";

const { dot, cross, normalize, diff, scale, norm, sum, normSq } = vector;
const clamp = (v, min, max) => {
  if (v > min) {
    if (v < max) return v;
    else return max;
  }
  return min;
};
class Constraint{
  constructor(
    body1,
    body2,
    n,
    ra,
    rb,
    raLocal,
    rbLocal,
    biasFactor,
    lambdaMin = -Infinity,
    lambdaMax = Infinity,
    treshold = 0.0001
  ){
    this.biasFactor = biasFactor;
    this.n = n;
    this.J = null;
    
    this.JM = null;
    this.B = null
    this.body1 = body1;
    this.body2 = body2;
    this.ra = ra;
    this.rb = rb;
    this.raLocal = raLocal
    this.rbLocal = rbLocal
    this.treshold = treshold
    this.lambdaAcc = 0
    this.lambdaMin = lambdaMin
    this.lambdaMax = lambdaMax
  }
  updateLeftPart(deltaTime) {
    const { body1, body2, n, ra, rb } = this;
    this.J = [scale(n, -1), cross(n, ra), n, cross(rb, n)];

    const I1 = body1.inverseInertia;
    const I2 = body2.inverseInertia;
    let M1 = body1.inverseMass;
    let M2 = body2.inverseMass;
    this.JM = [
      scale(this.J[0], M1),
      m3.transformPoint(I1, this.J[1]),
      scale(this.J[2], M2),
      m3.transformPoint(I2, this.J[3]),
    ];

    if(body1.static) {
      this.JM[0] = [0,0,0]
      this.JM[1] = [0,0,0]
      this.J[0] = [0,0,0]
      this.J[1] = [0,0,0]
      
    }
    if(body1.static) {
      this.JM[2] = [0,0,0]
      this.JM[3] = [0,0,0]
      this.J[2] = [0,0,0]
      this.J[3] = [0,0,0]
      
    }
    //JMJ* = JB;B = MJ*
    this.B = [
      [...this.JM[0], ...this.JM[1]],
      [...this.JM[2], ...this.JM[3]]
    ]
    this.effMass =
      M1 + dot(this.JM[0], this.J[1]) + M2 + dot(this.JM[3], this.J[3]);

  }
  
}


class ContactConstraint extends Constraint {
  constructor(body1,
    body2,
    n,
    ra,
    rb,
    raLocal,
    rbLocal,
    biasFactor,
    treshold, penDepth, i, j) {
    super(body1,
      body2,
      n,
      ra,
      rb,
      raLocal,
      rbLocal,
      biasFactor,
      null, null,
      treshold,)
    

    
    this.penDepth = penDepth
    this.i = i;
    this.j = j;
    
  }
  updateLeftPart(deltaTime){
    super.updateLeftPart(deltaTime)
    this.lambdaMax = norm(
      sum(
        scale(this.body1.velocity, this.body1.mass),
        scale(this.body2.velocity, this.body2.mass)
      )
    );
    this.lambdaMin = 0
  }
  updateRightPart(deltaTime){
    const {body1, body2, ra, rb, n, penDepth, treshold, biasFactor} = this

 
    const relativeVelocity = diff(
      sum(body2.velocity, cross(body2.angularV, rb)),
      sum(body1.velocity, cross(body1.angularV, ra))
    );

    const relativeVelocityNormalProjection = dot(relativeVelocity, n);
    this.bias = (Math.max(0, penDepth - treshold) / deltaTime) * biasFactor
               - relativeVelocityNormalProjection 
  }
  applyResolvingImpulse(lambda) {
   
    this.body1.applyImpulse(scale(this.J[0], lambda), this.ra);
    this.body2.applyImpulse(scale(this.J[2], lambda), this.rb);
   // this.applyFrictionImpulse(lambda);
  }
  applyFrictionImpulse(lambda) {
    const { ra, rb, body1, body2, i, j } = this;

    const fConstraint1 = new Constraint({
      body1,
      body2,
      n: scale(i, -1),
      ra,
      rb,
    });
    const fConstraint2 = new Constraint({
      body1,
      body2,
      n: scale(j, -1),
      ra,
      rb,
    });

    fConstraint1.updateEq();
    fConstraint2.updateEq();

    let mu = body1.friction + body1.friction;

    let fImpulse1 =
      fConstraint1.relativeVelocityNormalProjection / fConstraint1.effMass;
    fImpulse1 = clamp(fImpulse1, -lambda * mu, lambda * mu);

    let fImpulse2 =
      fConstraint2.relativeVelocityNormalProjection / fConstraint2.effMass;

    fImpulse2 = clamp(fImpulse2, -lambda * mu, lambda * mu);

    this.accFI1 += fImpulse1;
    this.accFI2 += fImpulse2;

    let fVec = sum(scale(i, fImpulse1), scale(j, fImpulse2));

    body1.applyImpulse(scale(fVec, -1), ra);
    body2.applyImpulse(fVec, rb);
  }
  applyResolvingPseudoImpulse(lambda) {
    if (lambda < 0) return;
    const max = this.effMass * 10;
    // lambda = Math.max(Math.min(100, lambda)- 0.1,0)
    this.body1.applyPseudoImpulse(scale(this.J[0], lambda), this.ra);
    this.body2.applyPseudoImpulse(scale(this.J[2], lambda), this.rb);
  }
}

class FrictionConstraint extends Constraint{
  updateRightPart(deltaTime){
    const {body1, body2, ra, rb, n} = this

 
    const relativeVelocity = diff(
      sum(body2.velocity, cross(body2.angularV, rb)),
      sum(body1.velocity, cross(body1.angularV, ra))
    );

    const relativeVelocityNormalProjection = dot(relativeVelocity, n);
    this.bias = - relativeVelocityNormalProjection 
  }
  applyResolvingImpulse(lambda) {
   
    this.body1.applyImpulse(scale(this.J[0], lambda), this.ra);
    this.body2.applyImpulse(scale(this.J[2], lambda), this.rb);
   // this.applyFrictionImpulse(lambda);
  }
}
class Joint extends Constraint {
  constructor(
    localRa,
    localRb,
    body1,
    body2,
    biasFactor = 0,
    pseudoBiasFactor = 0
  ) {
    super({ body1, body2, biasFactor, pseudoBiasFactor });
    this.localRa = localRa;
    this.localRb = localRb;
    this.PA = this.body1.collider.localToGlobal(this.localRa);
    this.PB = this.body2.collider.localToGlobal(this.localRb);
    this.treshold = 0.001;
    this.reducer = 0.5;
    this.maxImpulse = 0.7;
  }
  updateEq() {
    this.PA = this.body1.collider.localToGlobal(this.localRa);
    this.PB = this.body2.collider.localToGlobal(this.localRb);
    const dir = diff(this.PA, this.PB);
    this.n = normalize(dir);

    this.ra = diff(this.PA, this.body1.collider.pos);
    this.rb = diff(this.PB, this.body2.collider.pos);
    this.penDepth = norm(dir);

    this.J = [
      scale(this.n, -1),
      cross(this.n, this.ra),
      scale(this.n, 1),
      cross(this.rb, this.n),
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

    this.relativeVelocity = diff(
      sum(this.body2.velocity, cross(this.body2.angularV, this.rb)),
      sum(this.body1.velocity, cross(this.body1.angularV, this.ra))
    );
    this.relativeVelocityNormalProjection = dot(this.relativeVelocity, this.n);
  }
  applyResolvingImpulse(lambda) {
    const maxLambda = norm(
      sum(
        scale(this.body1.velocity, this.body1.mass),
        scale(this.body2.velocity, this.body2.mass)
      )
    );
    lambda = clamp(lambda, -0.1, 0.1);

    this.body1.applyImpulse(scale(this.J[0], lambda), this.ra);
    this.body2.applyImpulse(scale(this.J[2], lambda), this.rb);
  }
  applyResolvingPseudoImpulse(lambda) {
    const max = this.effMass * 10;
    //lambda = clamp(lambda, -1, 1)
    this.body1.applyPseudoImpulse(scale(this.J[0], lambda), [0, 0, 0]);
    this.body2.applyPseudoImpulse(scale(this.J[2], lambda), [0, 0, 0]);
  }
}
export { ContactConstraint, Constraint, Joint, FrictionConstraint};
