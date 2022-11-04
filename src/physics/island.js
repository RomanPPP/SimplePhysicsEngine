import { vector as vec } from "math";

const vec6 = {
  dot(a, b){
    return  a[0] * b[0] +
    a[1] * b[1] + 
    a[2] * b[2] +
    a[3] * b[3] +
    a[4] * b[4] +
    a[5] * b[5]
     
    
  },
  scale(a, fac){
    return a.map(e => e * fac)
  },
  sum(a, b){
    return [
      a[0] + b[0],
      a[1] + b[1],
      a[2] + b[2],
      a[3] + b[3],
      a[4] + b[4],
      a[5] + b[5]
    ]
  },
  fromVec3(a, b){
    return [
      ...a, ...b
    ]
  }

}

export default class Island {
  constructor(...constraints) {
    this.constraints = [...constraints];
    this.size = this.constraints.length
    

  }
  addConstraint(...args) {
    this.constraints.push(...args);
  }
  generateBodyMapping(){
    const constraints = this.constraints
    const bodiesMap = new Map()
    const Jmap = []
    let counter = 0
    constraints.forEach(c=>{
      let bodyIndex1 = bodiesMap.get(c.body1.id)
      if(bodyIndex1 === undefined){
        bodyIndex1 = counter++
        bodiesMap.set(c.body1.id, bodyIndex1)
      }
      let bodyIndex2 = bodiesMap.get(c.body2.id)
      if(bodyIndex2 === undefined){
        bodyIndex2 = counter++
        bodiesMap.set(c.body2.id, bodyIndex2)
      }
      
      Jmap.push(bodyIndex1, bodyIndex2)
    }) 
    this.bodiesMap = bodiesMap
    this.Jmap = Jmap
  }
  generatePseudoVelVector() {}
  generateSystem(deltaTime) {
    const n = this.constraints.length;
    const constraints = this.constraints
    //A = JMJ*, JMJ*x = JV + b
    this.JMJp = new Array(n * n);
    this.JMJ = new Array(n * n);
    this.JV = new Array(n);
    this.JpV = new Array(n);

    //Numerating bodies
    this.generateBodyMapping()
    /*for (let i = 0; i < n; i++) {
      const constraint = this.constraints[i];
      const { body1, body2, J } = constraint;
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

        const fp1 =
          body1 === _body1
            ? () => vec.dot(constraint.JM[0], _constraint.J[0])
            : () => 0;
        const fp2 =
          body2 === _body2
            ? () => vec.dot(constraint.JM[2], _constraint.J[2])
            : () => 0;
        const fp3 =
          body1 === _body2
            ? () => vec.dot(constraint.JM[0], _constraint.J[2])
            : () => 0;
        const fp4 =
          body2 === _body1
            ? () => vec.dot(constraint.JM[2], _constraint.J[0])
            : () => 0;
        const f1 =
          body1 === _body1
            ? () =>
                vec.dot(constraint.JM[0], _constraint.J[0]) +
                vec.dot(constraint.JM[1], _constraint.J[1])
            : () => 0;
        const f2 =
          body2 === _body2
            ? () =>
                vec.dot(constraint.JM[2], _constraint.J[2]) +
                vec.dot(constraint.JM[3], _constraint.J[3])
            : () => 0;
        const f3 =
          body1 === _body2
            ? () =>
                vec.dot(constraint.JM[0], _constraint.J[2]) +
                vec.dot(constraint.JM[1], _constraint.J[3])
            : () => 0;
        const f4 =
          body2 === _body1
            ? () =>
                vec.dot(constraint.JM[2], _constraint.J[0]) +
                vec.dot(constraint.JM[3], _constraint.J[1])
            : () => 0;

        this.JMJ[k + j] = () => f1() + f2() + f3() + f4();
        this.JMJp[k + j] = () => fp1() + fp2() + fp3() + fp4();
      }

        vec.dot(J[0], body1.velocity) +
        vec.dot(J[1], body1.angularV) +
        vec.dot(J[2], body2.velocity) +
        vec.dot(J[3], body2.angularV);
      this.JV[i] = (deltaTime) =>
        -constraint.relativeVelocityNormalProjection +
        (Math.max(0, constraint.penDepth - constraint.treshold) / deltaTime) *
          constraint.biasFactor; //+ b* 0.125;

      this.JpV[i] = () => -vec.dot(J[0], body1.pseudoVelocity) -
                            vec.dot(J[1], body1.pseudoAngularV) -
                            vec.dot(J[2], body2.pseudoVelocity) -
                           vec.dot(J[3], body2.pseudoAngularV) - constraint.bias/deltaTime 
      this.JpV[i] = (deltaTime) =>
        (Math.max(0, constraint.penDepth - constraint.treshold) / deltaTime) *
        constraint.pseudoBiasFactor;
    }*/
  }
  //J * Vel
  
  solvePGS(deltaTime){

    
    const {Jmap, bodiesMap, constraints} = this
    const numBodies = bodiesMap.size
    const n = constraints.length
    const d = []
    
    const lambda0 = new Array(n).fill(0)


    //BJlambda
    
    const Bl = new Array(numBodies).fill([0,0,0,0,0,0])
    for(let i = 0; i < n; i++){
      const b1 = Jmap[i * 2 ]
      const b2 = Jmap[i * 2 + 1] 
    
      const x = vec6.scale(constraints[i].B[0], lambda0[i])
      
      const y = vec6.sum(x, Bl[b1])
      
      Bl[b1] = vec6.sum(vec6.scale(constraints[i].B[0], lambda0[i]), Bl[b1])
      
      
      Bl[b2] = vec6.sum(vec6.scale(constraints[i].B[1], lambda0[i]), Bl[b2])
    
      
    }
  
    //PGS
 
    
    const lambda = [...lambda0]
    for(let i = 0; i< n; i++){
      d.push(constraints[i].effMass)
    }
    let flag = true
    let numIter = 20
    while(numIter > 0 ){
      for(let i = 0; i < n; i++){
        const c = constraints[i]
        const J1 = [...c.J[0], ...c.J[1]]
        const J2 = [...c.J[2], ...c.J[3]]
        const b1 = Jmap[i * 2 ]
        const b2 = Jmap[i * 2 + 1]
       
        let deltaLambda = (c.bias - vec6.dot(J1, Bl[b1]) - vec6.dot(J2, Bl[b2])) / d[i]
        
        lambda0[i] = lambda[i]
        lambda[i] = Math.max(c.lambdaMin, Math.min(lambda0[i] + deltaLambda, c.lambdaMax))
        
        deltaLambda = lambda[i] - lambda0[i]
        
        Bl[b1] = vec6.sum(Bl[b1], vec6.scale(c.B[0], deltaLambda))
        Bl[b2] = vec6.sum(Bl[b2], vec6.scale(c.B[1], deltaLambda))
      
      }
      
      numIter--
    }
    
    for(let i = 0; i < n; i++){
      constraints[i].applyResolvingImpulse(lambda[i])
    }
    return lambda
  }
  getJMJ() {
    return this.JMJ.map((f) => f());
  }
  getJV(deltaTime) {
    return this.JV.map((f) => f(deltaTime));
  }
  getJpV(deltaTime) {
    return this.JpV.map((f) => f(deltaTime));
  }
  getJMJp() {
    return this.JMJp.map((f) => f());
  }
  getUpdatedValues(deltaTime) {
    return [
      this.JMJ.map((f) => f()),
      this.JV.map((f) => f()),
      this.JpV.map((f) => f(deltaTime)),
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
