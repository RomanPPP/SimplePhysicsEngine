import { Box } from "./collider";
import { Joint } from "./contact";
import { RigidBody } from "./RigidBody";
import {vector} from 'math'
export default function(pos = [0,0,0]){
    const body = new RigidBody(new Box(2,4,1))
    const leftHand = new RigidBody(new Box(1,3,1))
    const rightHand = new RigidBody(new Box(1,3,1))
    const leftLeg = new RigidBody(new Box(1,3,1))
    const rightLeg = new RigidBody(new Box(1,3,1))
    const head = new RigidBody(new Box(1.5,1.5,1.5))
    const constraints = [
        new Joint([0,2.5,0], [0,-0.7,0], body, head, 0.0, 0.5),
        new Joint([-2,2,0], [0,2,0], body, leftHand, 0.0, 0.5),
        new Joint([2,2,0], [0,2,0], body, rightHand,  0.0,  0.5),
        new Joint([1.7,-2,0], [0,1.5,0], body, rightLeg, 0.0,  0.5),
        new Joint([-1.7,-2,0], [0,1.5,0], body, leftLeg, 0.0,  0.5),
    ]
    body.translate(pos)
    body.setMass(10)
    head.translate(vector.sum(pos, [0,2,0]))
    leftHand.translate(vector.sum(pos, [-3,2,0]))
    rightHand.translate(vector.sum(pos, [3,2,0]))
    rightLeg.translate(vector.sum(pos, [2, -2.5,0]))
    leftLeg.translate(vector.sum(pos, [-2, -2.5,0]))
    return [[body, leftHand, rightHand, rightLeg, leftLeg, head], constraints]
}