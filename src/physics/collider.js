import { vector, m4, m3, AABB } from "math";

const { scale, sum, diff } = vector;

const xAxis = [1, 0, 0];
const yAxis = [0, 1, 0];
const zAxis = [0, 0, 1];
const xAxisNegative = scale(xAxis, -1);
const yAxisNegative = scale(yAxis, -1);
const zAxisNegative = scale(zAxis, -1);

class Collider {
  constructor() {
    this.Rmatrix = m3.identity();
    this.RmatrixInverse = m3.identity();
    this.pos = [0, 0, 0];
  }
  translate(v) {
    this.pos = sum(this.pos, v);
  }
  setTranslation(translation){
    this.pos =[...translation]
  }
  rotate(r) {
    this.Rmatrix = m3.xRotate(this.Rmatrix, r[0]);
    this.Rmatrix = m3.yRotate(this.Rmatrix, r[1]);
    this.Rmatrix = m3.zRotate(this.Rmatrix, r[2]);
    this.RmatrixInverse = m3.transpose(this.Rmatrix);
  }
  setRotation(r){
    this.Rmatrix = m3.xRotation(r[0]);
    this.Rmatrix = m3.yRotate(this.Rmatrix, r[1]);
    this.Rmatrix = m3.zRotate(this.Rmatrix, r[2]);
    this.RmatrixInverse = m3.transpose(this.Rmatrix);
  }
  getAABB() {
    const maxX = this.support(xAxis)[0];
    const maxY = this.support(yAxis)[1];
    const maxZ = this.support(zAxis)[2];

    const minX = this.support(xAxisNegative)[0];
    const minY = this.support(yAxisNegative)[1];
    const minZ = this.support(zAxisNegative)[2];
    return new AABB([minX, minY, minZ], [maxX, maxY, maxZ]);
  }
  setRmatrix(matrix) {
    
    this.Rmatrix = [...matrix];
    
    this.RmatrixInverse = m3.transpose(matrix);
  }
  getM4() {
    const m = m4.m3Tom4(this.Rmatrix);
    m[12] = this.pos[0];
    m[13] = this.pos[1];
    m[14] = this.pos[2];
    m[15] = 1;
    return m;
  }
  localToGlobal(v) {
    let global = m3.transformPoint(this.Rmatrix, v);
    return sum(this.pos, global);
  }
  getClosestFace(normal){

  }
}

class Box extends Collider{
  constructor(a = 1, b = 1, c = 1) {
    super()
    this.min = [-a / 2, -b / 2, -c / 2];
    this.max = [a / 2, b / 2, c / 2];
    this.points = [
      [-1/2, -1/2, -1/2],
      [1/2, -1/2, -1/2],
      [1/2, -1/2, 1/2],
      [-1/2, -1/2, 1/2],
      [-1/2, 1/2, -1/2],
      [1/2, 1/2, -1/2],
      [1/2, 1/2, 1/2],
      [-1/2, 1/2, 1/2],
    ];
    this.indices = [
      [0, 4, 5, 1], // -z
      [3, 7, 6, 2], // +z
      [0, 1, 2, 3], // -y
      [4, 5, 6, 7], // +y
      [0, 3, 7, 4], // -x
      [1, 2, 6, 5], // +x
    ];
    this.normals = [
      [0, 0, -1],
      [0, 0, 1],
      [0, -1, 0],
      [0, 1, 0],
      [-1, 0, 0],
      [1, 0, 0],
    ];
  }
 
  getNormalsGlobal() {
    return this.normals.map((n) => m3.transformPoint(this.Rmatrix, n));
  }
  getAABB() {
    const maxX = this.support(xAxis)[0];
    const maxY = this.support(yAxis)[1];
    const maxZ = this.support(zAxis)[2];

    const minX = this.support(xAxisNegative)[0];
    const minY = this.support(yAxisNegative)[1];
    const minZ = this.support(zAxisNegative)[2];
    return new AABB([minX, minY, minZ], [maxX, maxY, maxZ]);
  }
  
  
 
  support(dir) {
    const _dir = m3.transformPoint(this.RmatrixInverse, dir);

    const res = [0, 0, 0];

    res[0] = _dir[0] > 0 ? this.max[0] : this.min[0];
    res[1] = _dir[1] > 0 ? this.max[1] : this.min[1];
    res[2] = _dir[2] > 0 ? this.max[2] : this.min[2];

    const sup = m3.transformPoint(this.Rmatrix, res);

    return sum(sup, this.pos);
  }
  getInverseInertiaTensor(mass) {
    const i1 =
      (mass / 12) * (this.max[1] * this.max[1] + this.max[2] * this.max[2]);
    const i2 =
      (mass / 12) * (this.max[0] * this.max[0] + this.max[2] * this.max[2]);
    const i3 =
      (mass / 12) * (this.max[0] * this.max[0] + this.max[1] * this.max[1]);

    const m = [1 / i1, 0, 0, 0, 1 / i2, 0, 0, 0, 1 / i3];
    
    return m3.multiply(m3.multiply(this.Rmatrix, m), this.RmatrixInverse);
  }
  getM4() {
    const m = m4.m3Tom4(this.Rmatrix);
    m[12] = this.pos[0];
    m[13] = this.pos[1];
    m[14] = this.pos[2];
    m[15] = 1;
    const scale = diff(this.max, this.min)
    return m4.scale(m, ...scale)
  }
  
  
  get
}

export { Box };
