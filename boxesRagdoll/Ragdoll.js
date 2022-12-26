import { Joint, JointPositionConstraint } from "../src/physics/constraints";
import { RigidBody } from "../src/physics/RigidBody";
import {vec3} from 'math'
import { Box, Cylinder, Sphere} from "../src/physics/collider";
export default class Ragdoll{
    constructor(pos = [0,0,0]){
        
        const body = new RigidBody(new Box(1, 2, 0.5));
        const leftHand = new RigidBody(new Cylinder(0.4, 2, 0.5));
        const rightHand = new RigidBody(new Cylinder(0.4, 2, 0.5));
        const leftLeg = new RigidBody(new Cylinder(0.4, 2, 0.5));
        const rightLeg = new RigidBody(new Cylinder(0.4, 2, 0.5));
        const head = new RigidBody(new Sphere(1, 1, 1));
        const constraints = [
          new Joint(body, head, [0, 1.5, 0], [0, -1, 0], 0),
          new Joint(body, leftHand, [1, 1, 0], [0, 1, 0], 0),
          new Joint(body, rightHand, [-1, 1, 0], [0, 1, 0], 0),
          new Joint(body, rightLeg, [-0.5, -1.2, 0], [0, 1.2, 0], 0),
          new Joint(body, leftLeg, [0.5, -1.2, 0], [0, 1.2, 0], 0),
        ];
        const positionConstraints = [
          new JointPositionConstraint(body, head, [0, 1.5, 0], [0, -1, 0], 0.2),
          new JointPositionConstraint(body, leftHand, [1, 1, 0], [0, 1, 0], 0.2),
          new JointPositionConstraint(body, rightHand, [-1, 1, 0], [0, 1, 0], 0.2),
          new JointPositionConstraint(
            body,
            rightLeg,
            [-0.5, -1.2, 0],
            [0, 1.2, 0],
            0.2
          ),
          new JointPositionConstraint(
            body,
            leftLeg,
            [0.5, -1.2, 0],
            [0, 1.2, 0],
            0.2
          ),
        ];
        //positionConstraints.forEach(c =>c.treshold = 0.1)
        body.translate(pos);
      
        head.translate(vec3.sum(pos, [0, 2, 0]));
        leftHand.translate(vec3.sum(pos, [-3, 2, 0]));
        rightHand.translate(vec3.sum(pos, [3, 2, 0]));
        rightLeg.translate(vec3.sum(pos, [2, -2.5, 0]));
        leftLeg.translate(vec3.sum(pos, [-2, -2.5, 0]));
        positionConstraints.forEach((c) => (c.treshold = 0.05));
        this.parts = {body, leftHand, rightHand, rightLeg, leftLeg, head}
        this.constraints = constraints
        this.positionConstraints = positionConstraints
    }
}