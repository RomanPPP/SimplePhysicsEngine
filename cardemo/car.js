import { RigidBody } from "../src/physics/RigidBody";
import { Box, Cylinder } from "../src/physics/collider";
import { Joint, JointPositionConstraint } from "../src/physics/constraints";
import { vector as vec3, m3 } from "math";

const bias1 = 0.2;
const bias2 = 0.5;
let _id =0
export default class Car {
  constructor(description,pos, id) {
    const { cabinXYZ, axises, wide, radius } = description;
    this.cabin = new RigidBody(new Box(...cabinXYZ));
    this.cabin.translate(pos)
    this.cabin.group = `car${id}`;
    this.wheels = [];
    this.rotatableWheels = [];
    this.driveWheels = [];
    this.handBrakeable = []
    this.wheelAngle = 0;
    this.torque = 0;
    this.maxWheelAngle = (Math.PI / 2) * 0.5;
    this.torque = 0;
    this.acceleration = 0.3
    const cm = this.cabin.collider.Rmatrix;
    const cabin = this.cabin;
    this.maxTorque = 4;
    this.handBrake = false
    this.gas = false
    axises.forEach((axis, i) => {
      const { friction } = axis;
      const wheel = new RigidBody(new Cylinder(radius, wide));
      wheel.group = `car${id}`;
      wheel.rotate([0, 0, Math.PI / 2]);
      const oldRotate = wheel.rotate;
      const len = wheel.collider.height;
      if (friction) wheel.friction = friction;
      wheel.translate(vec3.sum(pos, vec3.sum(vec3.scale(axis.vector, len/2),axis.position)));
      
      
      const ra1 = [...axis.position];
      const rb1 = [0, -len / 2, 0];
      const ra2 = vec3.sum(ra1, vec3.scale(axis.vector, len));
      const rb2 = [0, len / 2, 0];
      this.wheels.push({
        wheel,
        axis: axis.vector,
        rotatable: axis.rotatable,
        drive: axis.drive,
        joints: [
          new Joint(this.cabin, wheel, ra1, rb1, bias1),
          new Joint(this.cabin, wheel, ra2, rb2, bias1),
        ],
        positionJoints: [
          new JointPositionConstraint(this.cabin, wheel, ra1, rb1, bias2),

          new JointPositionConstraint(this.cabin, wheel, ra2, rb2, bias2),
        ],
      });
      if (axis.rotatable) this.rotatableWheels.push(i);
      if (axis.handBrake) this.handBrakeable.push(i)
      if (axis.drive) this.driveWheels.push({ i, axis: axis.vector });
    });
  }
  getConstraints() {
    return this.wheels.reduce((arr, wheel) => [...arr, ...wheel.joints], []);
  }
  getPositionConstraints() {
    return this.wheels.reduce(
      (arr, wheel) => [...arr, ...wheel.positionJoints],
      []
    );
  }
  updateWheelRotation() {
    this.rotatableWheels.forEach((i) => {
      const { wheel, joints, positionJoints, axis } = this.wheels[i];
      const len = wheel.collider.height;
      const pos = joints[0].raLocal;
      const cos = Math.cos(this.wheelAngle);
      const sin = Math.sin(this.wheelAngle);
      const rotatedAxis = [cos, 0, sin];
      joints[1].raLocal = vec3.sum(pos, vec3.scale(rotatedAxis, axis[0] * len));
      positionJoints[1].raLocal = vec3.sum(
        pos,
        vec3.scale(rotatedAxis, axis[0] * len)
      );
    });
  }
  rotateWheel(angle) {
    this.wheelAngle += angle;
    this.wheelAngle = Math.max(
      -this.maxWheelAngle,
      Math.min(this.wheelAngle, this.maxWheelAngle)
    );
  }
  setWheelAngle(angle) {
    this.wheelAngle = angle;
  }
  correctPositions(deltaTime) {
    const cm = this.cabin.collider.Rmatrix;
    const cabinV = m3.transformPoint(this.cabin.collider.RmatrixInverse, this.cabin.angularV)
    
    this.wheels.forEach(({ wheel, rotatable, joints, axis }) => {
      const len = wheel.collider.height;
      const pos = joints[0].raLocal;
     
      if (0) {
        const cos = Math.cos(this.wheelAngle);
        const sin = Math.sin(this.wheelAngle);
        const rotatedAxis = [cos, 0, sin];
        wheel.collider.pos = vec3.sum(
          this.cabin.collider.pos,
          vec3.sum(vec3.scale(rotatedAxis, (axis[0] * len) / 2), pos)
        );
        return;
      }
      const m = m3.multiply(m3.zRotation((-axis[0] * Math.PI) / 2), cm);

      const v = m3.transformPoint(
        wheel.collider.RmatrixInverse,
        wheel.angularV
      );
      const _v = [...v];
      _v[0] = 0;
      _v[2] = 0;

      wheel.angularV = m3.transformPoint(wheel.collider.Rmatrix, v)
    });
  }
  applyHandBrake(){
    const cm = this.cabin.collider.Rmatrix;
    this.handBrakeable.forEach(i=>{
      const {wheel} = this.wheels[i]
      const v = m3.transformPoint(wheel.collider.RmatrixInverse, wheel.angularV)
      v[1] = 0
     
      wheel.angularV = m3.transformPoint(wheel.collider.Rmatrix, v)
    })
  }
  tick(deltaTime) {
    this.correctPositions(deltaTime)
    if(this.torque > this.maxTorque){
      this.torque = this.maxTorque
      
    }
    if(this.torque < -this.maxTorque){
      this.torque = -this.maxTorque
    }

    const { torque, handBrake} = this;

    if (this.gas) {
      this.driveWheels.forEach(({ i, axis }) => {
        const { wheel } = this.wheels[i];
        const m = wheel.collider.Rmatrix;
        const adjust = ((torque)**2 + this.maxTorque) * Math.sign(torque)/10
        wheel.angularV = m3.transformPoint(m, [
            0,
          adjust * (axis[0])*20,
            0,
          ])
        
      });
    }
    else this.torque -= Math.sign(this.torque)*this.acceleration/3
    this.gas = 0
  }
  accelerate(deltaTime){
    this.gas = 1
    this.torque += this.acceleration

  }
  decelerate(deltaTime){
    this.gas = 1
    this.torque -= this.acceleration

  }
}
