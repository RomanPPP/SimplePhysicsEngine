import { RigidBody } from "../src/physics/RigidBody";
import { Box, Cylinder } from "../src/physics/collider";
import { Joint, JointPositionConstraint } from "../src/physics/constraints";
import { vector as vec3, m3 } from "math";

const bias1 = 0.2;
const bias2 = 0.2;
export default class Car {
  constructor(description) {
    const { cabinXYZ, axises, wide, radius } = description;
    this.cabin = new RigidBody(new Box(...cabinXYZ));
    this.cabin.group = "car";
    this.wheels = [];
    this.rotatableWheels = [];
    this.driveWheels = [];
    this.wheelAngle = 0;
    this.torque = 0;
    this.maxWheelAngle = (Math.PI / 2) * 0.5;
    this.torque = 0;
    const cm = this.cabin.collider.Rmatrix;
    const cabin = this.cabin;
    this.maxTorque = 3;
    axises.forEach((axis, i) => {
      const { friction } = axis;
      const wheel = new RigidBody(new Cylinder(radius, wide));
      wheel.group = "car";
      wheel.rotate([0, 0, Math.PI / 2]);
      const oldRotate = wheel.rotate;

      if (friction) wheel.friction = friction;
      wheel.translate(axis.position);
      const len = wheel.collider.height;
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
    this.wheels.forEach(({ wheel, rotatable, joints, axis }) => {
      const len = wheel.collider.height;
      const pos = joints[0].raLocal;
      if (rotatable) return;
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

      wheel.angularV = m3.transformPoint(wheel.collider.Rmatrix, _v);
      wheel.rotate(vec3.scale(vec3.diff(wheel.angularV, v), -deltaTime));
    });
  }
  tick(deltaTime) {
    const { torque } = this;

    if (Math.abs(torque) > 0.01) {
      this.driveWheels.forEach(({ i, axis }) => {
        const { wheel } = this.wheels[i];
        const m = wheel.collider.Rmatrix;
        wheel.addAngularV(
          m3.transformPoint(m, [
            0,
            (1 / 0.016) * deltaTime * torque * axis[0],
            0,
          ])
        );
      });
    }
    //this.correctPositions(deltaTime)
  }
}
