import { Box } from "./collider";
import { Joint, JointPositionConstraint} from "./constraints";
import { RigidBody } from "./RigidBody";
import {vector} from 'math'
export default function(pos = [0,0,0]){
    const body = new RigidBody(new Box(1,2,0.5))
    const leftHand = new RigidBody(new Box(0.5,2,0.5))
    const rightHand = new RigidBody(new Box(0.5,2,0.5))
    const leftLeg = new RigidBody(new Box(0.5,2,0.5))
    const rightLeg = new RigidBody(new Box(0.5,2,0.5))
    const head = new RigidBody(new Box(1,1,1))
    const constraints = [
        new Joint(body, head, [0,1.5,0], [0,-1,0], 0),
        new Joint(body, leftHand, [1,1,0], [0,1,0], 0),
        new Joint(body, rightHand, [-1,1,0], [0,1,0], 0),
        new Joint(body, rightLeg, [-0.5,-1.2,0], [0,1.2,0], 0),
        new Joint(body, leftLeg, [0.5,-1.2,0], [0,1.2,0], 0),
    ]
    const positionConstraints = [
        new JointPositionConstraint(body, head, [0,1.5,0], [0,-1,0], 0.1),
        new JointPositionConstraint(body, leftHand, [1,1,0], [0,1,0],  0.1),
        new JointPositionConstraint(body, rightHand, [-1,1,0], [0,1,0],  0.1),
        new JointPositionConstraint(body, rightLeg, [-0.5,-1.2,0], [0,1.2,0],  0.1),
        new JointPositionConstraint(body, leftLeg, [0.5,-1.2,0], [0,1.2,0],  0.1),
    ]
    //positionConstraints.forEach(c =>c.treshold = 0.1)
    body.translate(pos)
   
    head.translate(vector.sum(pos, [0,2,0]))
    leftHand.translate(vector.sum(pos, [-3,2,0]))
    rightHand.translate(vector.sum(pos, [3,2,0]))
    rightLeg.translate(vector.sum(pos, [2, -2.5,0]))
    leftLeg.translate(vector.sum(pos, [-2, -2.5,0]))
    const bodies = [body, leftHand, rightHand, rightLeg, leftLeg, head]
    bodies.forEach(b=>{
        //b.group = 'ragdoll'
        //b.setMass(10)
    })
    
    
    return [bodies, constraints, positionConstraints]
}