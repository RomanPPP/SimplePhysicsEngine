import { vector as vec } from "math";

export default class Island {
  constructor(...constraints) {
    this.constraints = [...constraints];
    this.JMJ = null;
    this.JV = null;
    this.JpV = null;
    this.JMJp = null;
  }
  addConstraint(...args) {
    this.constraints.push(...args);
  }
  generatePseudoVelVector() {}
  generateSystem(deltaTime) {
    const n = this.constraints.length;
    //A = JMJ*, JMJ*x = JV + b
    this.JMJp = new Array(n * n);
    this.JMJ = new Array(n * n);
    this.JV = new Array(n);
    this.JpV = new Array(n);
    for (let i = 0; i < n; i++) {
      const constraint = this.constraints[i];
      const { body1, body2, JM, J } = constraint;
      const k = i * n;
      for (let j = 0; j < n; j++) {
        if (k === j) {
          this.JMJ[k + j] = () => constraint.effMass;
          this.JMJp[k + j] = () =>
            constraint.body1.inverseMass + constraint.body2.inverseMass;
          continue;
        }

        const _constraint = this.constraints[j];

        const _body1 = _constraint.body1;
        const _body2 = _constraint.body2;
        const _J = _constraint.J;
        const fp1 = body1 === _body1 ? () => vec.dot(JM[0], _J[0]) : () => 0;
        const fp2 = body2 === _body2 ? () => vec.dot(JM[2], _J[2]) : () => 0;
        const fp3 = body1 === _body2 ? () => vec.dot(JM[0], _J[2]) : () => 0;
        const fp4 = body2 === _body1 ? () => vec.dot(JM[2], _J[0]) : () => 0;
        const f1 =
          body1 === _body1
            ? () => vec.dot(JM[0], _J[0]) + vec.dot(JM[1], _J[1])
            : () => 0;
        const f2 =
          body2 === _body2
            ? () => vec.dot(JM[2], _J[2]) + vec.dot(JM[3], _J[3])
            : () => 0;
        const f3 =
          body1 === _body2
            ? () => vec.dot(JM[0], _J[2]) + vec.dot(JM[1], _J[3])
            : () => 0;
        const f4 =
          body2 === _body1
            ? () => vec.dot(JM[2], _J[0]) + vec.dot(JM[3], _J[1])
            : () => 0;
        this.JMJ[k + j] = () => f1() + f2() + f3() + f4();
        this.JMJp[k + j] = () => fp1() + fp2() + fp3() + fp4();
      }
      let b = Math.max(0, constraint.penDepth - 0.01) / deltaTime;

      const rv = constraint.relativeVelocityNormalProjection
      /*  vec.dot(J[0], body1.velocity) +
        vec.dot(J[1], body1.angularV) +
        vec.dot(J[2], body2.velocity) +
        vec.dot(J[3], body2.angularV);*/
      this.JV[i] = () => -rv //+ b* 0.125;

      /*this.JpV[i] = () => -vec.dot(J[0], body1.pseudoVelocity) -
                            vec.dot(J[1], body1.pseudoAngularV) -
                            vec.dot(J[2], body2.pseudoVelocity) -
                           vec.dot(J[3], body2.pseudoAngularV) - constraint.bias/deltaTime */
      this.JpV[i] = () => -rv + b *0.125
    }
  }
  getJMJ() {
    return this.JMJ.map((f) => f());
  }
  getJv() {
    return this.JV.map((f) => f());
  }
  getJpV() {
    return this.JpV.map((f) => f());
  }
  getJMJp() {
    return this.JMJp.map((f) => f());
  }
  getUpdatedValues() {
    return [
      this.JMJ.map((f) => f()),
      this.JV.map((f) => f()),
      this.JpV.map((f) => f()),
    ];
  }
  applyResolvingImpulses(lambda) {
    for (let i = 0, n = this.constraints.length; i < n; i++) {
      this.constraints[i].applyResolvingImpulse(lambda[i]);
    }
  }
  applyResolvingPseudoImpulses(lambda) {
    for (let i = 0, n = this.constraints.length; i < n; i++) {
      this.constraints[i].applyResolvingPseudoImpulse(lambda[i]);
    }
  }
}
