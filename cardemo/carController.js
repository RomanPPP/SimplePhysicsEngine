import MouseInput from "../src/misc/mouseInput";
import KeyInput from "../src/misc/keyInput";
import { m4 } from "math";
const KEYS = {
  a: "rotateLeft",
  d: "rotateRight",
  w: "increaseTorque",
  s: "decreaseTorque",
  " ": "jump",
};

export default class CarController {
  constructor(car) {
    this.car = car;
    this.keyInput = null;
    this.MouseInput = null;
    this.camRotation = [0, 0, 0];
    this.camOffset = [0, 5, 10];
    this.wheelAngle = 0;
    this.torque = 0;
    this.freeWheel = 1;
    this.gas = 0;
    this.jumpReady = true;
  }
  listenMouse(mouseInput) {
    this.mouseInput = mouseInput;
    mouseInput.on("move", ([deltaX, deltaY]) => {
      this.camRotation[0] -= deltaX * 0.005;
      this.camRotation[1] -= Math.max(
        -Math.PI / 2,
        Math.min(Math.PI / 2, deltaY * 0.005)
      );
    });
  }
  listenKeyboard(keyInput) {
    this.keyInput = keyInput;
  }
  tick() {
    this.gas = 0;
    for (const key of this.keyInput.keys) {
      const actionName = KEYS[key];
      if (actionName) {
        const action = this[actionName].bind(this);
        action();
      }
    }

    if (this.freeWheel) {
      const angle = this.car.wheelAngle;

      if (Math.abs(angle) > 0.1) {
        this.car.rotateWheel(-0.1 * Math.sign(angle));
        this.car.updateWheelRotation();
      } else {
        this.car.wheelAngle = 0;
        this.car.updateWheelRotation();
      }
    }
    this.freeWheel = 1;
    if (!this.gas) {
      this.car.torque = 0;
    }
  }
  getCameraMatrix() {
    const { camRotation, camOffset, car } = this;
    return m4.translate(
      m4.xRotate(
        m4.yRotate(m4.translation(...car.cabin.collider.pos), camRotation[0]),
        camRotation[1]
      ),
      ...camOffset
    );
  }
  rotateLeft() {
    this.freeWheel = 0;
    this.car.rotateWheel(-0.1);
    this.car.updateWheelRotation();
  }
  rotateRight() {
    this.freeWheel = 0;
    this.car.rotateWheel(0.1);
    this.car.updateWheelRotation();
  }
  increaseTorque() {
    this.gas = 1;
    this.car.torque += 0.01;
  }
  decreaseTorque() {
    this.gas = 1;
    this.car.torque -= 0.01;
  }
  jump() {
    if (!this.jumpReady) return;
    this.car.cabin.applyImpulse([0, 20, 0], [0, 0, 0]);
    this.jumpReady = false;
    setTimeout(() => (this.jumpReady = true), 1000);
  }
}
