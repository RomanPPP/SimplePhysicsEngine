import {m3, vector, m4} from 'math'
const KEYS = {
    'w' : 'moveForward',
    's' : 'moveBackward'
}
export default class Controllable{
    constructor(rigidBody){

        this.rigidBody = rigidBody
        this.keyInput = null
        this.mouseInput = null
        this.rotationX = 0
        this.rotationY = 0
        this.deltaRY = 0
        this.camPos = [0,0,10]
        this.camRot = m3.identity()
    }
    listenMouse(mouseInput){
        this.mouseInput = mouseInput
        mouseInput.on('move', ([deltaX, deltaY])=>{
            this.rotationY -= deltaX * 0.005;
            this.rotationX -= deltaY * 0.005;
            this.rotationX = Math.max(-Math.PI/2, Math.min(Math.PI/2, this.rotationX))
            this.deltaRY = deltaX * 0.005;
            
        })
    }
    listenKeyboard(keyInput){
        this.keyInput = keyInput
    }
    tick(){

        for(const key of this.keyInput.keys){
            const actionName = KEYS[key]
            if(actionName){
                const action = this[actionName].bind(this)
                action()
            }
            
        }
        const m = m3.yRotation(this.rotationY)
        this.rigidBody.rotate([0, -this.deltaRY,0])
        this.deltaRY = 0
        
        const pos = [...this.rigidBody.collider.pos]
        let _m = m4.translation(pos[0], pos[1]+3, pos[2])
        _m = m4.multiply(_m, m4.m3Tom4(this.rigidBody.collider.Rmatrix))
        _m = m4.xRotate(_m, this.rotationX)
        _m = m4.translate(_m, ...this.camPos)
        this.camMatrix = _m
     
    }
    moveForward(){
        const m = this.rigidBody.collider.Rmatrix
        this.rigidBody.applyImpulse(m3.transformPoint(m, [0,0,-1]))
    }
    moveBackward(){
        const m = this.rigidBody.collider.Rmatrix
        this.rigidBody.applyImpulse(m3.transformPoint(m, [0,0,1]))
    }
}