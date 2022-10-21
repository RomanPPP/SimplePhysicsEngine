import { Entity } from "graphics";
import { m4 } from "math";
export default class gEntity extends Entity {
  constructor(...args) {
    super(...args);
    this.collider = null;
    this.ragdollMode = false
  }
  updateWorldMatrix(parentTRWorldMatrix, parentScale) {
    if (parentTRWorldMatrix) {
      let tr = this.trs.getTRmatrix();

      tr = m4.multiply(m, parentTRWorldMatrix);
      let s = m4.scaling(...this.trs.scale)
      if(parentScale) s = m4.scale(s, parentScale)
      if(this.collider) this.collider.setTRmatrix(tr);
        

      this.children.forEach((child) => {
        child.updateWorldMatrix(tr, s)
      });
    }
  }
  updateRagdoll(parentTRWorldMatrix){
    if(this.collider) this.worldMatrix = this.collider.getM4()
    else{
        this.worldMatrix = m4.multiply(this.getTRmatrix(), parentTRWorldMatrix)
    }
    this.children.forEach((child) => {
        child.updateRagdoll(tr, s)
      });
  }
}
