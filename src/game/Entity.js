import { Entity } from "graphics";
import { m4 } from "math";
export default class Entity {
  constructor() {

    this.ragdollMode = false;
    this.model = null
    this.modelMap = new Map()
    this.collidersMap = new Map()
    this.mainCollider = null

  }
  bindModel(model){
    const { modelMap} = this
    model.traverse(node =>{
      if(node.name) modelMap.set(node.name, node)
    })
    
  }
  updateModelByColliders = () =>{
    const {collidersMap} = this
    const iter = (node,parentWorldMatrix)=>{
      const collider = collidersMap.get(node.name)
      if(collider) node.worldMatrix = collider.getM4()
      else node.worldMatrix = m4.multiply(parentWorldMatrix, node.trs.getMatrix())
      node.children.forEach(child => {
          iter(child, node.worldMatrix)
      });
    }
  }
  bindColliders(colliders){
    const {collidersMap} = this
    colliders.forEach(collider =>{
      if(collider.name) collidersMap.set(collider.name, collider) 
    })
  }
  updateAsModel(){
    this.model.updateWorldMatrix()
    for(const [name, collider] of this.collidersMap){
      const modelNode = this.modelMap.get(name)
      if(modelNode){
        collider.setTRS(modelNode.worldMatrix)
      }
    }
  }
  setRagdoll(state){
    this.ragdollMode = state
  }
  tick(deltaTime){
    if(this.ragdollMode){
      this.updateModelByColliders(this.mainCollider.getM4())
      return
    }
    this.animate(deltaTime)
    this.updateAsModel()

  }
  
}

const animation = (period, callBack) => {
  let time = 0
  return (deltaTime) =>{
    time = period % (time + deltaTime)
    callBack(time)
  }
}
