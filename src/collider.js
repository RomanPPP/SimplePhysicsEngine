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
    this.pos = [];
    this.scale = [1, 1, 1];
    this.RS = m3.identity();
    this.RSinverse = m3.identity();
    this.pos = [0, 0, 0];
  }
  translate(v) {
    this.pos = sum(this.pos, v);
  }
  rotate(v) {
    this.RSmatrix = m3.xRotate(this.RSmatrix, v[0]);
    this.RSmatrix = m3.yRotate(this.RSmatrix, v[1]);
    this.RSmatrix = m3.zRotate(this.RSmatrix, v[2]);
    this.RmatrixInverse = m3.transpose(this.RSmatrix);
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
  setRSMat3(m) {
    this.RSmatrix = m;
    this.RSmatrixInverse = m3.transpose(m);
  }
  setTRSMat4(m) {
    this.RSmatrix = m4.m4Tom3(m);
    this.pos[0] = m[12];
    this.pos[1] = m[13];
    this.pos[2] = m[14];
  }
  getTRSMat4() {
    const m = m4.m3Tom4(this.RSmatrix);
    m[12] = this.pos[0];
    m[13] = this.pos[1];
    m[14] = this.pos[2];
    m[15] = 1;
    return m;
  }
  localToGlobal(v) {
    let global = m3.transformPoint(this.RSmatrix, v);
    return sum(this.pos, global);
  }
}

class Box {
  constructor(a = 1, b = 1, c = 1) {
    this.min = [-a / 2, -b / 2, -c / 2];
    this.max = [a / 2, b / 2, c / 2];
    this.Rmatrix = m3.identity();
    this.RmatrixInverse = m3.identity();
    this.RS = m3.identity();
    this.pos = [0, 0, 0];
    this.points = [
      [-a/2, -b/2, -c/2],
      [a/2, -b/2, -c/2],
      [a/2, b/2, -c/2],
      [-a/2, b/2, -c/2],
      [-a/2, -b/2, c/2],
      [a/2, -b/2, c/2],
      [a/2, b/2, c/2],
      [-a/2, b/2, c/2],
    ];
    this.indices = [
      [3, 2, 1, 0], // -z
      [4, 5, 6, 7], // +z
      [5, 4, 0, 1], // -y
      [2, 3, 7, 6], // +y
      [0, 4, 7, 3], // -x
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
  translate(t) {
    this.pos = sum(this.pos, t);
  }
  rotate(r) {
    this.Rmatrix = m3.xRotate(this.Rmatrix, r[0]);
    this.Rmatrix = m3.yRotate(this.Rmatrix, r[1]);
    this.Rmatrix = m3.zRotate(this.Rmatrix, r[2]);

    this.RmatrixInverse = m3.transpose(this.Rmatrix);
  }
  setRmatrix(matrix) {
    this.Rmatrix = matrix;
    this.RmatrixInverse = m3.transpose(matrix);
  }
  support(dir) {
    const _dir = m3.transformPoint(this.RmatrixInverse, dir);

    const res = [0, 0, 0];

    res[0] = _dir[0] > 0 ? this.max[0] : this.min[0];
    res[1] = _dir[1] > 0 ? this.max[1] : this.min[1];
    res[2] = _dir[2] > 0 ? this.max[2] : this.min[2];

    const sup = m4.transformPoint(this.getM4(), res);

    return sup;
  }
  getInverseInertiaTensor(mass) {
    const i1 =
      (mass / 12) * (this.max[1] * this.max[1] + this.max[2] * this.max[2]);
    const i2 =
      (mass / 12) * (this.max[0] * this.max[0] + this.max[2] * this.max[2]);
    const i3 =
      (mass / 12) * (this.max[0] * this.max[0] + this.max[1] * this.max[1]);

    const m = new Float32Array([1 / i1, 0, 0, 0, 1 / i2, 0, 0, 0, 1 / i3]);

    return m3.multiply(m3.multiply(this.Rmatrix, m), this.RmatrixInverse);
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
}

export { Box };
