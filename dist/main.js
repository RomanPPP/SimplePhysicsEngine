/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/graphics/index.js":
/*!****************************************!*\
  !*** ./node_modules/graphics/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArrayDataFromGltf": () => (/* reexport safe */ _src_gltfUtils__WEBPACK_IMPORTED_MODULE_1__.ArrayDataFromGltf),
/* harmony export */   "Drawer": () => (/* reexport safe */ _src_Drawer__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   "EntityDataFromGltf": () => (/* reexport safe */ _src_gltfUtils__WEBPACK_IMPORTED_MODULE_1__.EntityDataFromGltf),
/* harmony export */   "GLTF": () => (/* reexport safe */ _src_gltfUtils__WEBPACK_IMPORTED_MODULE_1__.GLTF),
/* harmony export */   "GLcontextWrapper": () => (/* reexport safe */ _src_glContexWrapper__WEBPACK_IMPORTED_MODULE_10__["default"]),
/* harmony export */   "MeshRenderer": () => (/* reexport safe */ _src_MeshRenderer__WEBPACK_IMPORTED_MODULE_2__.MeshRenderer),
/* harmony export */   "Model": () => (/* reexport safe */ _src_Model__WEBPACK_IMPORTED_MODULE_8__["default"]),
/* harmony export */   "PrimitiveRenderInfoFromArrayData": () => (/* reexport safe */ _src_gltfUtils__WEBPACK_IMPORTED_MODULE_1__.PrimitiveRenderInfoFromArrayData),
/* harmony export */   "PrimitiveRenderer": () => (/* reexport safe */ _src_PrimitiveRenderer__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   "ProgramInfo": () => (/* reexport safe */ _src_programInfo__WEBPACK_IMPORTED_MODULE_5__.ProgramInfo),
/* harmony export */   "SkinnedMeshRenderer": () => (/* reexport safe */ _src_MeshRenderer__WEBPACK_IMPORTED_MODULE_2__.SkinnedMeshRenderer),
/* harmony export */   "TextureInfo": () => (/* reexport safe */ _src_textureInfo__WEBPACK_IMPORTED_MODULE_7__.TextureInfo),
/* harmony export */   "createBox": () => (/* reexport safe */ _src_primitives__WEBPACK_IMPORTED_MODULE_3__.createBox),
/* harmony export */   "createCircle": () => (/* reexport safe */ _src_primitives__WEBPACK_IMPORTED_MODULE_3__.createCircle),
/* harmony export */   "createCone": () => (/* reexport safe */ _src_primitives__WEBPACK_IMPORTED_MODULE_3__.createCone),
/* harmony export */   "createSphere": () => (/* reexport safe */ _src_primitives__WEBPACK_IMPORTED_MODULE_3__.createSphere),
/* harmony export */   "createTruncatedCone": () => (/* reexport safe */ _src_primitives__WEBPACK_IMPORTED_MODULE_3__.createTruncatedCone),
/* harmony export */   "defaultShaders": () => (/* reexport safe */ _src_render_shaders__WEBPACK_IMPORTED_MODULE_9__.defaultShaders),
/* harmony export */   "makeImgFromSvgXml": () => (/* reexport safe */ _src_textureInfo__WEBPACK_IMPORTED_MODULE_7__.makeImgFromSvgXml),
/* harmony export */   "makeStripeImg": () => (/* reexport safe */ _src_textureInfo__WEBPACK_IMPORTED_MODULE_7__.makeStripeImg),
/* harmony export */   "pointLightShaders": () => (/* reexport safe */ _src_render_shaders__WEBPACK_IMPORTED_MODULE_9__.pointLightShaders)
/* harmony export */ });
/* harmony import */ var _src_BufferAttribute__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/BufferAttribute */ "./node_modules/graphics/src/BufferAttribute.js");
/* harmony import */ var _src_gltfUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/gltfUtils */ "./node_modules/graphics/src/gltfUtils.js");
/* harmony import */ var _src_MeshRenderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/MeshRenderer */ "./node_modules/graphics/src/MeshRenderer.js");
/* harmony import */ var _src_primitives__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/primitives */ "./node_modules/graphics/src/primitives.js");
/* harmony import */ var _src_PrimitiveRenderer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/PrimitiveRenderer */ "./node_modules/graphics/src/PrimitiveRenderer.js");
/* harmony import */ var _src_programInfo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/programInfo */ "./node_modules/graphics/src/programInfo.js");
/* harmony import */ var _src_Drawer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/Drawer */ "./node_modules/graphics/src/Drawer.js");
/* harmony import */ var _src_textureInfo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/textureInfo */ "./node_modules/graphics/src/textureInfo.js");
/* harmony import */ var _src_Model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./src/Model */ "./node_modules/graphics/src/Model.js");
/* harmony import */ var _src_render_shaders__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./src/render/shaders */ "./node_modules/graphics/src/render/shaders/index.js");
/* harmony import */ var _src_glContexWrapper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./src/glContexWrapper */ "./node_modules/graphics/src/glContexWrapper.js");
















/***/ }),

/***/ "./node_modules/graphics/src/BufferAttribute.js":
/*!******************************************************!*\
  !*** ./node_modules/graphics/src/BufferAttribute.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AttributeSetter": () => (/* binding */ AttributeSetter),
/* harmony export */   "BufferAttribute": () => (/* binding */ BufferAttribute),
/* harmony export */   "BufferController": () => (/* binding */ BufferController),
/* harmony export */   "createIndicesBuffer": () => (/* binding */ createIndicesBuffer)
/* harmony export */ });
/* harmony import */ var _programInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./programInfo */ "./node_modules/graphics/src/programInfo.js");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enums */ "./node_modules/graphics/src/enums.js");


const createIndicesBuffer = (gl, indices) => {
  const buffer = gl.createBuffer();
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, indices, gl.STATIC_DRAW);
  return buffer;
};
const floatAttribSetter = (props) => {
  const {
    numComponents,
    type,
    location,
    numAttributes,
    stride,
    offset,
    buffer,
    gl,
    divisor,
  } = props;

  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  for (let i = 0; i < numAttributes; i++) {
    const _offset = numComponents * i * _enums__WEBPACK_IMPORTED_MODULE_1__.TYPED_ARRAYS[type].BYTES_PER_ELEMENT;
    gl.enableVertexAttribArray(location + i);
    gl.vertexAttribPointer(
      location + i,
      numComponents,
      type,
      false,
      stride,
      offset + _offset
    );

    if (divisor) gl.vertexAttribDivisor(location + i, divisor);
  }
};
const intAttribSetter = (props) => {
  const {
    numComponents,
    type,
    location,
    numAttributes,
    stride,
    offset,
    buffer,
    gl,
    divisor,
  } = props;
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  for (let i = 0; i < numAttributes; i++) {
    const _offset = numComponents * i * _enums__WEBPACK_IMPORTED_MODULE_1__.TYPED_ARRAYS[type].BYTES_PER_ELEMENT;
    gl.enableVertexAttribArray(location + i);
    gl.vertexAttribIPointer(
      location + i,
      numComponents,
      type,
      false,
      stride,
      offset + _offset
    );
    if (divisor) gl.vertexAttribDivisor(location + i, divisor);
  }
};
const attribTypeMap = {};
attribTypeMap[0x1400] = intAttribSetter;
attribTypeMap[0x1406] = floatAttribSetter;
attribTypeMap[0x1401] = intAttribSetter;
attribTypeMap[0x1404] = intAttribSetter;
attribTypeMap[0x1405] = intAttribSetter;
attribTypeMap[0x1402] = intAttribSetter;
attribTypeMap[0x1403] = intAttribSetter;

const setAttributes = (gl, bufferInfo, divisor) => {
  const { type } = bufferInfo;
  const setter = attribTypeMap[type];
  setter(bufferInfo, divisor);
};
class BufferController {
  constructor(gl, target = 0x8892) {
    this.target = target;
    this.buffer = gl.createBuffer();
    this.gl = gl;
    this.bufferData = (data, byteLength, usage = gl.STATIC_DRAW) => {
      gl.bindBuffer(target, this.buffer);
      gl.bufferData(target, data || byteLength, usage);
    };
    this.bufferSubData = (data, offset = 0) => {
      gl.bindBuffer(target, this.buffer);
      gl.bufferSubData(target, offset, data);
    };
  }
}
class AttributeSetter {
  constructor(info) {
    this.stride = info.stride || 0;
    this.numComponents = info.numComponents;
    this.numAttributes = info.numAttributes || 1;
    this.offset = info.offset || 0;
    this.type = info.type;
    this.location = info.location;
  }
  setAttribute(bufferController, divisor) {
    const { type } = this;
    const setter = attribTypeMap[type];
    setter(this, bufferController, divisor);
  }
}
class BufferAttribute {
  constructor(gl, info) {
    this.gl = gl;
    this.buffer = gl.createBuffer();
    this.stride = info.stride || 0;
    this.numComponents = info.numComponents;
    this.numAttributes = info.numAttributes || 1;
    this.offset = info.offset || 0;
    this.type = info.type;
    this.location = info.location;
    this.divisor = info.divisor;
  }
  setAttribute() {
    const { type, gl } = this;
    const setter = attribTypeMap[type];
    setter(this);
  }
  bufferData(data, byteLength, usage = 0x88e4) {
    const { gl, buffer } = this;
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, data || byteLength, usage);
  }
  bufferSubData(data, offset = 0) {
    const { gl, buffer } = this;
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferSubData(gl.ARRAY_BUFFER, offset, data);
  }
}




/***/ }),

/***/ "./node_modules/graphics/src/Drawer.js":
/*!*********************************************!*\
  !*** ./node_modules/graphics/src/Drawer.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! math */ "./node_modules/math/index.js");
/* harmony import */ var math__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(math__WEBPACK_IMPORTED_MODULE_0__);


const degToRad = (d) => (d * Math.PI) / 180;

const fieldOfViewRadians = degToRad(90);

class Drawer {
  constructor() {
    this.context = null;
    this.projectionMatrix = null;
    this.fieldOfViewRadians = degToRad(90);
  }
  setContext(glContextWrapper) {
    this.context = glContextWrapper;
    return this;
  }
  setFieldOfView(angle) {
    this.fieldOfViewRadians = degToRad(angle);
    return this;
  }
  update3DProjectionMatrix(zNear = 0.01, zFar = 2000) {
    const { gl } = this.context;
    const aspect = gl.canvas.clientWidth / gl.canvas.clientHeight;
    this.projectionMatrix = math__WEBPACK_IMPORTED_MODULE_0__.m4.perspective(
      fieldOfViewRadians,
      aspect,
      zNear,
      zFar
    );
    return this;
  }

  getViewProjectionMatrix(cameraMatrix) {
    const { projectionMatrix } = this;
    const { gl } = this.context;
    const viewMatrix = math__WEBPACK_IMPORTED_MODULE_0__.m4.inverse(cameraMatrix);
    return math__WEBPACK_IMPORTED_MODULE_0__.m4.multiply(projectionMatrix, viewMatrix);
  }
  draw(renderInfo, uniforms, cameraMatrix) {
    const viewProjectionMatrix = this.getViewProjectionMatrix(cameraMatrix);
    const {
      vao,
      mode,
      offset,
      numElements,
      indices,
      componentType,
      programInfo,
    } = renderInfo;
    const { gl } = this.context;

    const u_worldViewProjection = math__WEBPACK_IMPORTED_MODULE_0__.m4.multiply(
      viewProjectionMatrix,
      uniforms.u_matrix
    );
  
    this.context.useProgramInfo(programInfo);
    this.context
      .getLastUsedProgramInfo()
      .setUniforms({ ...uniforms,  u_worldViewProjection });
    if (vao) gl.bindVertexArray(vao);
    if (!indices) {
      gl.drawArrays(mode, offset, numElements);
      return;
    }
    gl.drawElements(mode, numElements, componentType, offset);
  }
  drawInstanced(renderInfo, uniforms, cameraMatrix, numInstances) {
    const viewProjectionMatrix = this.getViewProjectionMatrix(cameraMatrix);
    const { gl } = this.context;
    const { vao, mode, offset, numElements, indices, programInfo } = renderInfo;
    const worldViewProjection = math__WEBPACK_IMPORTED_MODULE_0__.m4.multiply(
      viewProjectionMatrix,
      uniforms.u_matrix
    );
    const worldMatrix = uniforms.u_matrix;
    this.context.useProgramInfo(programInfo);
    this.context
      .getLastUsedProgramInfo()
      .setUniforms({ ...uniforms, worldMatrix, worldViewProjection });
    gl.bindVertexArray(vao);
    if (!indices) {
      gl.drawArraysInstanced(mode, offset, numElements, numInstances);
      return;
    }
    gl.drawElementsInstanced(
      mode,
      numElements,
      gl.UNSIGNED_SHORT,
      offset,
      numInstances
    );
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Drawer);


/***/ }),

/***/ "./node_modules/graphics/src/MeshRenderer.js":
/*!***************************************************!*\
  !*** ./node_modules/graphics/src/MeshRenderer.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MeshRenderer": () => (/* binding */ MeshRenderer),
/* harmony export */   "SkinnedMeshRenderer": () => (/* binding */ SkinnedMeshRenderer)
/* harmony export */ });
/* harmony import */ var _attribTypeProps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attribTypeProps */ "./node_modules/graphics/src/attribTypeProps.js");
/* harmony import */ var _BufferAttribute__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BufferAttribute */ "./node_modules/graphics/src/BufferAttribute.js");



class MeshRenderer {
  constructor({ primitives, name }) {
    this.primitives = primitives;
    this.name = name;
    this.context = null;
    this.buffers = {};
  }
  setContext(glContextWrapper) {
    this.context = glContextWrapper;
    for (let i = 0, n = this.primitives.length; i < n; i++) {
      this.primitives[i].setContext(glContextWrapper);
    }
    return this;
  }
  setProgramInfo(programInfo) {
    for (let i = 0, n = this.primitives.length; i < n; i++) {
      this.primitives[i].setProgramInfo(programInfo);
    }
    return this;
  }
  setDrawer(drawer) {
    for (let i = 0, n = this.primitives.length; i < n; i++) {
      this.primitives[i].setDrawer(drawer);
    }
    return this;
  }
  draw(uniforms, cameraMatrix) {
    for (let i = 0, n = this.primitives.length; i < n; i++) {
      this.primitives[i].draw(uniforms, cameraMatrix);
    }
    return this;
  }
  drawInstanced(uniforms, cameraMatrix, numInstances) {
    for (let i = 0, n = this.primitives.length; i < n; i++) {
      this.primitives[i].drawInstanced(uniforms, cameraMatrix, numInstances);
    }
    return this;
  }
  createPrimitiveBuffers() {
    this.primitives.forEach((primitive) => primitive.createGeometryBuffers());
    return this;
  }
  createBufferAttribData(name, type, params) {
    const { gl } = this.context;
    const attribProps = (0,_attribTypeProps__WEBPACK_IMPORTED_MODULE_0__["default"])(type);
    const attributeProps = { ...attribProps, ...params };
    const bufferAttribData = new _BufferAttribute__WEBPACK_IMPORTED_MODULE_1__.BufferAttribute(gl, attributeProps);
    this.buffers = { ...this.buffers, [name]: bufferAttribData };
    return this;
  }
  bufferData(bufferName, data, byteLength) {
    const bufferAttributeDescriptor = this.buffers[bufferName];

    bufferAttributeDescriptor.bufferData(data, byteLength);
    return this;
  }
  bufferSubData(bufferName, data, offset) {
    const bufferAttributeDescriptor = this.buffers[bufferName];
    bufferAttributeDescriptor.bufferSubData(data, byteLength, offset);
    return this;
  }
  setAttribute(name) {
    const bufferAttribData = this.buffers[name];
    this.primitives.forEach((primitive) =>
      primitive.setAttribute(bufferAttribData)
    );
    return this;
  }
  setPrimitiveAttributes() {
    for (let i = 0, n = this.primitives.length; i < n; i++) {
      this.primitives[i].setAttributes();
    }
    return this;
  }
}
class SkinnedMeshRenderer {
  constructor(primitives, skin) {
    this.primitives = primitives;
    this.skin = skin;
  }
  draw(uniforms, cameraMatrix) {
    this.skin.update(uniforms.u_matrix);
    const _uniforms = {
      u_jointTexture: this.skin.jointTexture,
      u_numJoints: this.skin.joints.length,
      ...uniforms,
    };
    for (let i = 0, n = this.primitives.length; i < n; i++) {
      this.primitives[i].draw(_uniforms, cameraMatrix);
    }
  }
}



/***/ }),

/***/ "./node_modules/graphics/src/Model.js":
/*!********************************************!*\
  !*** ./node_modules/graphics/src/Model.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


class TRS {
  constructor(translation, rotation, scale) {
    this.translation = translation;
    this.rotation = rotation;
    this.scale = scale;
  }
  getMatrix(m) {
    let dst = m || m4.identity();
    var t = this.translation;
    var r = this.rotation;
    var s = this.scale;
    const sin = Math.sin(r[3] / 2);
    const cos = Math.cos(r[3] / 2);
    dst = m4.translate(dst, t[0], t[1], t[2]);

    dst = m4.multiply(dst, m4.fromQuaternion(r));

    dst = m4.scale(dst, s[0], s[1], s[2]);
    return dst;
  }
  getRMatrix() {
    let dst = m4.identity();
    var r = this.rotation;
    dst = m4.xRotate(dst, r[0]);
    dst = m4.yRotate(dst, r[1]);
    dst = m4.zRotate(dst, r[2]);
    return dst;
  }
  getTRmatrix() {
    const t = this.translation;
    const r = this.rotation;

    let m = m4.translation( t[0], t[1], t[2]);

    m = m4.xRotate(m, r[0]);
    m = m4.yRotate(m, r[1]);
    m = m4.zRotate(m, r[2]);
    return m
  }
}
class Node {

  static makeModel(entityDescription, rootNodeNdx) {
    const { nodes, meshes } = entityDescription;
    const rootNode = nodes[rootNodeNdx];
    const makeNode = (nodeDescription, ndx) => {
      const trs = new TRS(
        nodeDescription.translation || [0, 0, 0],
        nodeDescription.rotation || [0, 0, 0],
        nodeDescription.scale || [1, 1, 1]
      );
      const node = new Node(nodeDescription.name, trs, ndx);
      if (nodeDescription.mesh != undefined) {
        node.renderer = meshes[nodeDescription.mesh];
      }
      if (nodeDescription.children) {
        nodeDescription.children.forEach((childNdx) => {
          const child = makeNode(nodes[childNdx], childNdx);
          child.setParent(node);
        });
      }
      return node;
    };
    return makeNode(rootNode, rootNodeNdx);
  }

  constructor(name, trs = new TRS()) {
    this.worldMatrix = m4.identity();
    this.parent = null;
    this.children = [];
    this.trs = trs;
    this.name = name;
    this.parts = [];
    this.ndx = ndx;
    this.skinNdx = null;
    this.objectsToDraw = [];
    this.renderer = null;
  }
  setParent(parent) {
    if (this.parent) {
      const ndx = this.parent.children.indexOf(this);
      if (ndx >= 0) {
        this.parent.children.splice(ndx, 1);
      }
    }
    if (parent) {
      parent.children.push(this);
    }
    this.parent = parent;
  }
  updateWorldMatrix(parentWorldMatrix) {
    let matrix = this.trs.getMatrix();
    if (parentWorldMatrix) {
      matrix = m4.multiply(parentWorldMatrix, matrix);
    }
    this.worldMatrix = matrix;
    this.children.forEach((child) => {
      child.updateWorldMatrix(matrix);
    });
  }
  updatePartsList() {
    const iter = (node, arr) => {
      arr.push(node);
      node.children.forEach((child) => iter(child, arr));
    };
    iter(this, this.parts);
  }
  updateObjectsToDraw() {
    const queue = [this];
    while (queue.length > 0) {
      const node = queue.pop();
      console.log(node);
      if (node.renderer) this.objectsToDraw.push(node);
      if (node.children) queue.push(...node.children);
    }
  }
  traverse(fn) {
    fn(this);
    this.children.forEach((child) => child.traverse(fn));
  }
  find(ndx) {
    let result = null;
    const iter = (nodes) => {
      for (let node of nodes) {
        if (node.ndx === ndx) result = node;
        else iter(node.children);
      }
    };
    iter([this]);
    return result;
  }
  findByName(name) {
    let result = null;
    const iter = (nodes) => {
      for (let node of nodes) {
        if (node.name === name) result = node;
        else iter(node.children);
      }
    };
    iter([this]);
    return result;
  }
  render(uniforms, cameraMatrix) {
    this.objectsToDraw.forEach((object) => {
      object.renderer.draw(
        { ...uniforms, u_matrix: object.worldMatrix },
        cameraMatrix
      );
    });
  }
}




class Model extends Node {
  static makeModel(entityDescription, rootNodeNdx) {
    const { nodes, meshes } = entityDescription;
    const rootNode = nodes[rootNodeNdx];
    const makeNode = (nodeDescription, ndx) => {
      const trs = new TRS(
        nodeDescription.translation || [0, 0, 0],
        nodeDescription.rotation || [0, 0, 0, 0],
        nodeDescription.scale || [1, 1, 1]
      );
      const node = new Entity(nodeDescription.name, trs, ndx);
      if (nodeDescription.mesh != undefined) {
        node.renderer = meshes[nodeDescription.mesh];
      }
      if (nodeDescription.children) {
        nodeDescription.children.forEach((childNdx) => {
          const child = makeNode(nodes[childNdx], childNdx);
          child.setParent(node);
        });
      }
      return node;
    };
    return makeNode(rootNode, rootNodeNdx);
  }
  constructor(name, trs, ndx) {
    super(name, trs);
    this.ndx = ndx;
    this.physics = null;
    this.skinNdx = null;
    this.objectsToDraw = [];
    this.renderer = null;
  }
  updateObjectsToDraw() {
    const queue = [this];
    while (queue.length > 0) {
      const node = queue.pop();
      console.log(node);
      if (node.renderer) this.objectsToDraw.push(node);
      if (node.children) queue.push(...node.children);
    }
  }
  traverse(fn) {
    fn(this);
    this.children.forEach((child) => child.traverse(fn));
  }
  find(ndx) {
    let result = null;
    const iter = (nodes) => {
      for (let node of nodes) {
        if (node.ndx === ndx) result = node;
        else iter(node.children);
      }
    };
    iter([this]);
    return result;
  }
  findByName(name) {
    let result = null;
    const iter = (nodes) => {
      for (let node of nodes) {
        if (node.name === name) result = node;
        else iter(node.children);
      }
    };
    iter([this]);
    return result;
  }
  render(uniforms, cameraMatrix) {
    this.objectsToDraw.forEach((object) => {
      object.renderer.draw(
        { ...uniforms, u_matrix: object.worldMatrix },
        cameraMatrix
      );
    });
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Model);


/***/ }),

/***/ "./node_modules/graphics/src/PrimitiveRenderer.js":
/*!********************************************************!*\
  !*** ./node_modules/graphics/src/PrimitiveRenderer.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BufferAttribute__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BufferAttribute */ "./node_modules/graphics/src/BufferAttribute.js");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enums */ "./node_modules/graphics/src/enums.js");
/* harmony import */ var _programInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./programInfo */ "./node_modules/graphics/src/programInfo.js");
/* harmony import */ var _attribTypeProps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./attribTypeProps */ "./node_modules/graphics/src/attribTypeProps.js");





class PrimitiveRenderer {
  constructor(arrayData) {
    this.buffers = {};
    this.programInfo = null;
    this.context = null;
    this.drawer = null;
    this.mode = null;
    this.offset = null;
    this.numElements = null;
    this.vao = null;
    this.componentType = null;
    this.arrayData = arrayData;
    const {componentType, numElements, mode } = arrayData;
    this.numElements = numElements;
    this.mode = mode;
    this.componentType = componentType || 5123;
  }
  setContext(glContextWrapper) {
    this.context = glContextWrapper;
    return this;
  }
  createVAO() {
    if (this.vao) return;
    this.vao = this.context.gl.createVertexArray();
    return this;
  }
  setMode(mode){
    this.mode = mode
    return this
  }
  setIndices(array){
    const {context, vao} = this
    const {gl} = context
    gl.bindVertexArray(vao)
    this.numElements = array.length
    const indicesBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indicesBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(array),  gl.STATIC_DRAW);
    gl.bindVertexArray(null)
    this.indices = indicesBuffer;
    return this
  }
  createGeometryBuffers() {
    const { arrayData } = this;
    const { gl } = this.context;
    const { attributes, indices, componentType, numElements, mode } = arrayData;
   

    if (attributes) {
      Object.keys(attributes).forEach((attributeName) => {
        const {
          stride,
          type,
          offset,
          location,
          numComponents,
          numAttributes,
          data,
          size,
        } = attributes[attributeName];
        const bufferAttributeDescriptor = new _BufferAttribute__WEBPACK_IMPORTED_MODULE_0__.BufferAttribute(gl, {
          stride,
          type,
          offset,
          location,
          numAttributes,
          numComponents,
          size,
        });
        bufferAttributeDescriptor.bufferData(data);
        this.buffers = {
          ...this.buffers,
          [attributeName]: bufferAttributeDescriptor,
        };
      });
    }
    if (indices) {
      const indicesBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indicesBuffer);
      gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, indices, gl.STATIC_DRAW);
      this.indices = indicesBuffer;
    }
    return this;
  }
  setAttributes() {
    const { gl } = this.context;

    gl.bindVertexArray(this.vao);
    for (const attrib in this.buffers) {
      const bufferAttributeDescriptor = this.buffers[attrib];
      bufferAttributeDescriptor.setAttribute();
    }
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indices);
    gl.bindVertexArray(null);

    return this;
  }
  setDrawer(drawer) {
    this.drawer = drawer;
    return this;
  }
  setProgramInfo(programInfo) {
    this.programInfo = programInfo;
    return this;
  }
  createBufferAttribData(name, type, params) {
    const { gl } = this.context;
    const attribProps = (0,_attribTypeProps__WEBPACK_IMPORTED_MODULE_3__["default"])(type);
    const attributeProps = { ...attribProps, ...params };
    const bufferAttribData = new _BufferAttribute__WEBPACK_IMPORTED_MODULE_0__.BufferAttribute(gl, attributeProps);
    this.buffers = { ...this.buffers, [name]: bufferAttribData };
    return this;
  }
  setBufferAttribData(name, bufferAttribData) {
    this.buffers = { ...this.buffers, [name]: bufferAttribData };
    return this;
  }
  setOwnAttribute(name, divisor) {
    const { gl } = this.context;
    const bufferAttribData = this.buffers[name];
    gl.bindVertexArray(this.vao);
    bufferAttribData.setAttribute(divisor);
    gl.bindVertexArray(null);
    return this;
  }
  setAttribute(bufferAttribData) {
    const { gl } = this.context;
    gl.bindVertexArray(this.vao);
    bufferAttribData.setAttribute();
    gl.bindVertexArray(null);
    return this;
  }
  bufferData(bufferName, data, byteLength, usage) {
    const bufferAttribData = this.buffers[bufferName];
    bufferAttribData.bufferData(data, byteLength, usage);
    return this;
  }
  bufferSubData(bufferName, data, offset) {
    const bufferDesc = this.buffers[bufferName];
    bufferDesc.bufferSubData(data, offset);
    return this;
  }
  draw(uniforms, cameraMatrix) {
    this.drawer.draw(this, uniforms, cameraMatrix);
    return this;
  }
  drawInstanced(uniforms, cameraMatrix, numInstances) {
    this.drawer.drawInstanced(this, uniforms, cameraMatrix, numInstances);
    return this;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PrimitiveRenderer);


/***/ }),

/***/ "./node_modules/graphics/src/attribTypeProps.js":
/*!******************************************************!*\
  !*** ./node_modules/graphics/src/attribTypeProps.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const props = {
  mat4: {
    stride: 64,
    byteLength: 64,
    type: 0x1406,
    numAttributes: 4,
    numComponents: 4,
  },
  vec3: {
    numComponents: 3,
    type: 0x1406,
    numAttributes: 1,
  },
};
const getAttributePropsByType = (type) => props[type];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getAttributePropsByType);


/***/ }),

/***/ "./node_modules/graphics/src/enums.js":
/*!********************************************!*\
  !*** ./node_modules/graphics/src/enums.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ELEMENT_SIZE": () => (/* binding */ ELEMENT_SIZE),
/* harmony export */   "LOCATIONS": () => (/* binding */ LOCATIONS),
/* harmony export */   "NUM_COMPONENTS": () => (/* binding */ NUM_COMPONENTS),
/* harmony export */   "TYPED_ARRAYS": () => (/* binding */ TYPED_ARRAYS)
/* harmony export */ });
const TYPED_ARRAYS = {
    '5120': Int8Array,    
    '5121': Uint8Array,   
    '5122': Int16Array,   
    '5123': Uint16Array,  
    '5124': Int32Array,   
    '5125': Uint32Array,  
    '5126': Float32Array, 
}
const NUM_COMPONENTS = {
    'SCALAR' : 1,
    'VEC2' : 2,
    'VEC3' : 3,
    'VEC4' : 4,
    'MAT2': 4,
  'MAT3': 9,
  'MAT4': 16,
}
const LOCATIONS = {
    'POSITION' : 0,
    'NORMAL' : 1,
    'WEIGHTS_0' : 2,
    'JOINTS_0' : 3,
    'TEXCOORD_0' : 4,
}
const ELEMENT_SIZE = {
    0x1406 : 4
}


/***/ }),

/***/ "./node_modules/graphics/src/glContexWrapper.js":
/*!******************************************************!*\
  !*** ./node_modules/graphics/src/glContexWrapper.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GLcontextWrapper)
/* harmony export */ });
/* harmony import */ var _textureInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./textureInfo */ "./node_modules/graphics/src/textureInfo.js");

class GLcontextWrapper {
    constructor(canvas_id) {
      const canvas = document.querySelector(`#${canvas_id}`);
      const gl = canvas.getContext("webgl2");
  
      if (!gl) {
        throw new Error("No webgl!");
      }
      this.gl = gl;
      this.textures = {};
      this.renderCache = {
        lastUsedProgramInfo: null,
      };
      this.programs = {};
    }
    getLastUsedProgramInfo() {
      return this.renderCache.lastUsedProgramInfo;
    }
    setLastUsedProgram(programInfo) {
      this.renderCache.lastUsedProgramInfo = programInfo;
      return this;
    }
    useProgramInfo(programInfo) {
      if (programInfo != this.getLastUsedProgramInfo()) {
        this.gl.useProgram(programInfo.program);
        this.setLastUsedProgram(programInfo);
      }
      return this;
    }
    resizeCanvasToDisplaySize(multiplier = 1) {
      const canvas = this.gl.canvas;
      const width = (canvas.clientWidth * multiplier) | 0;
      const height = (canvas.clientHeight * multiplier) | 0;
  
      canvas.width = width;
      canvas.height = height;
      
      return this;
    }
    resizeCanvas(width, height) {
      const canvas = this.gl.canvas;
      canvas.width = width;
      canvas.height = height;
      return this;
    }
    setViewport(){
      this.gl.viewport(0, 0, this.gl.canvas.width,  this.gl.canvas.height);
      return this
    }
    getContext() {
      return this.gl;
    }
    createTextureInfo(textureName) {
      const texture = new _textureInfo__WEBPACK_IMPORTED_MODULE_0__.TextureInfo(this.gl);
      this.textures = { ...this.textures, [textureName]: texture };
      return this;
    }
    getTexture(textureName) {
      return this.textures[textureName];
    }
    setTextureUnit(textureName, unitNum) {
      const texture = this.getTexture(textureName).texture;
      setTextureUnits(this.gl, texture, unitNum);
      return this;
    }
  }

/***/ }),

/***/ "./node_modules/graphics/src/gltfUtils.js":
/*!************************************************!*\
  !*** ./node_modules/graphics/src/gltfUtils.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArrayDataFromGltf": () => (/* binding */ ArrayDataFromGltf),
/* harmony export */   "EntityDataFromGltf": () => (/* binding */ EntityDataFromGltf),
/* harmony export */   "GLTF": () => (/* binding */ GLTF),
/* harmony export */   "PrimitiveRenderInfoFromArrayData": () => (/* binding */ PrimitiveRenderInfoFromArrayData)
/* harmony export */ });
/* harmony import */ var _PrimitiveRenderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PrimitiveRenderer */ "./node_modules/graphics/src/PrimitiveRenderer.js");
/* harmony import */ var _MeshRenderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MeshRenderer */ "./node_modules/graphics/src/MeshRenderer.js");
/* harmony import */ var _BufferAttribute__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BufferAttribute */ "./node_modules/graphics/src/BufferAttribute.js");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./enums */ "./node_modules/graphics/src/enums.js");





const ArrayDataFromGltf = (gltf, buffers) => {
  const { bufferViews, accessors, meshes, nodes } = gltf;
  const attribDataFromAccessor = (accessor) => {
    const bufferView = bufferViews[accessor.bufferView];
    const { count, componentType, type } = accessor;
    const byteOffset = accessor.byteOffset || 0;
    const { byteLength, target } = bufferView;
    const stride = bufferView.byteStride || 0;
    const bufferViewByteOffset = bufferView.byteOffset || 0;
    const buffer = buffers[bufferView.buffer];

    return {
      data: new Uint8Array(buffer, bufferViewByteOffset, byteLength),
      numComponents: _enums__WEBPACK_IMPORTED_MODULE_3__.NUM_COMPONENTS[type],
      stride,
      byteLength,
      location: null,
      count,
      type: componentType,
      offset: byteOffset || 0,
      componentType: accessor.componentType,
    };
  };
  const _meshes = meshes.map((mesh) => ({
    primitives: mesh.primitives.map((_primitive) => {
      const primitive = {
        attributes: {},
        mode: _primitive.mode,
      };
      if (_primitive.hasOwnProperty("indices")) {
        const indicesInfo = attribDataFromAccessor(
          accessors[_primitive.indices]
        );
        primitive.indices = indicesInfo.data;
        primitive.numElements = indicesInfo.count;
        primitive.componentType = indicesInfo.componentType;
      }
      Object.keys(_primitive.attributes).forEach((attribName) => {
        const attribute = _primitive.attributes[attribName];
        primitive.attributes[attribName] = attribDataFromAccessor(
          accessors[attribute]
        );
        //if(attribName === 'JOINTS_0') _primitive.attributes[attribName].data = new Uint32Array(_primitive.attributes[attribName].data)
        primitive.attributes[attribName].location = _enums__WEBPACK_IMPORTED_MODULE_3__.LOCATIONS[attribName];
      });
      return primitive;
    }),
    name: mesh.name,
  }));

  return _meshes.map((mesh) => {
    const primitives = mesh.primitives.map(
      (primitive) => new _PrimitiveRenderer__WEBPACK_IMPORTED_MODULE_0__["default"](primitive)
    );
    const name = mesh.name;

    return new _MeshRenderer__WEBPACK_IMPORTED_MODULE_1__.MeshRenderer({ primitives, name });
  });
};

const PrimitiveRenderInfoFromArrayData = (meshes) =>
  meshes.map((mesh) => {
    const primitives = mesh.primitives.map(
      (primitive) => new _PrimitiveRenderer__WEBPACK_IMPORTED_MODULE_0__["default"](primitive)
    );
    const name = mesh.name;
    return new _MeshRenderer__WEBPACK_IMPORTED_MODULE_1__.MeshRenderer({ name, primitives });
  });

const EntityDataFromGltf = (gltf, buffers) =>
  PrimitiveRenderInfoFromArrayData(ArrayDataFromGltf(gltf, buffers));

class GLTF {
  constructor(gltf, binaryBuffers) {
    const { nodes } = gltf;
    this.nodes = nodes;
    this.meshes = ArrayDataFromGltf(gltf, binaryBuffers);
  }
}



/***/ }),

/***/ "./node_modules/graphics/src/primitives.js":
/*!*************************************************!*\
  !*** ./node_modules/graphics/src/primitives.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createBox": () => (/* binding */ createBox),
/* harmony export */   "createCircle": () => (/* binding */ createCircle),
/* harmony export */   "createCone": () => (/* binding */ createCone),
/* harmony export */   "createSphere": () => (/* binding */ createSphere),
/* harmony export */   "createTruncatedCone": () => (/* binding */ createTruncatedCone)
/* harmony export */ });
/* harmony import */ var _programInfo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./programInfo.js */ "./node_modules/graphics/src/programInfo.js");
/* harmony import */ var math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! math */ "./node_modules/math/index.js");
/* harmony import */ var math__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(math__WEBPACK_IMPORTED_MODULE_1__);




const { cross, diff, normalize } = math__WEBPACK_IMPORTED_MODULE_1__.vec3

const linedBoxIndices = new Uint16Array([
  0,
  1,
  1,
  2,
  2,
  3,
  3,
  0, // front
  0,
  5,
  5,
  4,
  4,
  1,
  1,
  0, //bottom
  0,
  4,
  4,
  7,
  7,
  3,
  3,
  0, //left
  1,
  2,
  2,
  6,
  6,
  5,
  5,
  1, //right
  4,
  5,
  5,
  6,
  6,
  7,
  7,
  4, // back
  2,
  7,
  7,
  3,
  3,
  6,
  6,
  2, // top
]);

const CUBE_FACE_INDICES = [
  [3, 7, 5, 1], // right
  [6, 2, 0, 4], // left
  [6, 7, 3, 2], // ??
  [0, 1, 5, 4], // ??
  [7, 6, 4, 5], // front
  [2, 3, 1, 0], // back
];

function createBox(_a = 1, _b = 1, _c = 1) {
  const a = _a / 2,
    b = _b / 2,
    c = _c / 2;
  const cornerVertices = [
    [-a, -b, -c],
    [+a, -b, -c],
    [-a, +b, -c],
    [+a, +b, -c],
    [-a, -b, +c],
    [+a, -b, +c],
    [-a, +b, +c],
    [+a, +b, +c],
  ];

  const faceNormals = [
    [+1, +0, +0],
    [-1, +0, +0],
    [+0, +1, +0],
    [+0, -1, +0],
    [+0, +0, +1],
    [+0, +0, -1],
  ];

  const uvCoords = [
    [1, 0],
    [0, 0],
    [0, 1],
    [1, 1],
  ];
  const numVertices = 6 * 4;
  const positions = (0,_programInfo_js__WEBPACK_IMPORTED_MODULE_0__.expandedTypedArray)(new Float32Array(numVertices * 3));
  const normals = (0,_programInfo_js__WEBPACK_IMPORTED_MODULE_0__.expandedTypedArray)(new Float32Array(numVertices * 3));
  //const texCoords = webglUtils.createAugmentedTypedArray(2 , numVertices);
  const indices = (0,_programInfo_js__WEBPACK_IMPORTED_MODULE_0__.expandedTypedArray)(new Uint16Array(6 * 2 * 3));

  for (let f = 0; f < 6; ++f) {
    const faceIndices = CUBE_FACE_INDICES[f];
    for (let v = 0; v < 4; ++v) {
      const position = cornerVertices[faceIndices[v]];
      const normal = faceNormals[f];
      positions.push(position);
      normals.push(normal);
    }

    const offset = 4 * f;
    indices.push(offset + 0, offset + 1, offset + 2);
    indices.push(offset + 0, offset + 2, offset + 3);
  }
  const len = positions.byteLength;
  const texcoord = new Float32Array([
    // Front
    0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0,
    // Back
    0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0,
    // Top
    0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0,
    // Bottom
    0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0,
    // Right
    0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0,
    // Left
    0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0,
  ]);

  const ArrayData = {
    attributes: {
      NORMAL: {
        data: normals,
        count: 6 * 4 * 3,
        location: 1,
        byteLength: normals.byteLength,
        stride: 0,
        offset: 0,
        numComponents: 3,
        type: 5126,
      },
      POSITION: {
        data: positions,
        count: 6 * 4 * 3,
        location: 0,
        byteLength: positions.byteLength,
        stride: 0,
        offset: 0,
        numComponents: 3,
        type: 5126,
      },
      TEXCOORD_0: {
        data: texcoord,
        count: 48,
        type: 5126,
        offset: 0,
        stride: 0,
        byteLength: texcoord.byteLength,
        location: 4,
        numComponents: 2,
      },
    },
    indices: indices,
    numElements: indices.length,
    componentType: 5123,
    mode: 4,
  };
  return ArrayData;
  /*return {
          gltf : {
            accessors : [
            {
                bufferView : 0,
                byteOffset : 0,
                count :72,
                componentType : 5126,
                type : 'VEC3'
            },
            {
              bufferView : 1,
              byteOffset : 0,
              count : 72,
              componentType : 5126,
              type : 'VEC3'
            },
            {
              bufferView : 2,
              byteOffset : 0,
              count : 36,
              componentType : 5123,
              type : 'SCALAR'
            },
            {
              bufferView : 3,
              byteOffset : 0,
              count : 48,
              componentType : 5126,
              type : 'VEC2'
            }
            ],
          bufferViews : [
              {
                buffer : 0,
                byteLength : positions.byteLength,
                byteOffset : 0
              },
              {
                buffer : 1,
                byteLength : normals.byteLength,
                byteOffset : 0
              },
              {
                buffer : 2,
                byteLength : indices.byteLength,
                byteOffset : 0
              },
              {
                buffer : 3,
                byteLength : texcoord.byteLength,
                byteOffset : 0
              }
            ],
          meshes : [
            {
              name : 'Cube',
              primitives : [
                {
                  attributes : {
                    NORMAL : 1,
                    POSITION : 0,
                    TEXCOORD_0 : 3
                  },
                  indices : 2,
                  mode : 4
                }
              ]
            }
          ],
          nodes : [
            {
              name : "Cube",
              mesh : 0,
              children : [1]
            },
            {
              name : 'Cube2',
              mesh : 0,
              translation : [1,1,1]
            }
          ]
        },
        binaryBuffers : [
          positions.buffer, normals.buffer, indices.buffer, texcoord.buffer
        ]
      };*/
}

const createCone = (radius = 2, height = 2, numCorners = 4) => {
  const vertices = [0, -height / 2, 0];
  const normals = [];
  const indices = [];

  for (let i = 0; i < numCorners + 1; i++) {
    const angle = (2 * i * Math.PI) / numCorners;
    const x = Math.cos(angle) * radius;
    const z = Math.sin(angle) * radius;
    const y = -height / 2;
    vertices.push(x, -height / 2, z);
    normals.push(0, -1, 0);
  }
  for (let i = 0; i < numCorners; i++) {
    indices.push(0, i + 1, i + 2);
  }
  //vertices.push(vertices[1], -height/2, vertices[3])
  const n = vertices.length / 3;
  const stride = 3;
  const start = n;

  for (let i = 0; i < numCorners + 2; i++) {
    const angle = (2 * i * Math.PI) / numCorners;
    const x = Math.cos(angle) * radius;
    const z = Math.sin(angle) * radius;
    const y = -height / 2;
    const a = [vertices[i * 3], vertices[i * 3 + 1], vertices[i * 3 + 2]];
    const b = [vertices[i * 3 + 3], vertices[i * 3 + 4], vertices[i * 3 + 5]];
    const c = [0, height / 2, 0];
    indices.push(
      start + i * stride + 2,
      start + i * stride + 1,
      start + i * stride + 3
    );
    vertices.push(...c, ...a, ...b);
    const normal = normalize(cross(diff(b, c), diff(a, c)));
    normals.push(...normal, ...normal, ...normal);
  }

  const _normal = new Float32Array(normals);
  const _position = new Float32Array(vertices);
  const _indices = new Uint16Array(indices);
  const ArrayData = {
    attributes: {
      POSITION: {
        location: 0,
        count: vertices.length,
        offset: 0,
        stride: 0,
        numComponents: 3,
        type: 5126,
        data: _position,
        byteLength: _position.byteLength,
      },
      NORMAL: {
        location: 1,
        count: normals.length,
        numComponents: 3,
        offset: 0,
        stride: 0,
        type: 5126,
        data: _normal,
        byteLength: _normal.byteLength,
      },
    },
    componentType: 5123,
    indices: _indices,
    numElements: indices.length,
    mode: 4,
  };
  return ArrayData;
};

const createCircle = (radius, numCorners) => {
  const vertices = [0, 0, 0];
  const normals = [];
  const indices = [];

  for (let i = 0; i < numCorners + 1; i++) {
    const angle = (2 * i * Math.PI) / numCorners;
    const x = Math.cos(angle) * radius;
    const z = Math.sin(angle) * radius;

    vertices.push(x, 0, z);
    normals.push(0, 1, 0);
  }
  for (let i = 0; i < numCorners; i++) {
    indices.push(0, i + 1, i + 2);
  }

  const _normal = new Float32Array(normals);
  const _position = new Float32Array(vertices);
  const _indices = new Uint16Array(indices);

  const ArrayData = {
    attributes: {
      POSITION: {
        location: 0,
        count: vertices.length,
        offset: 0,
        stride: 0,
        numComponents: 3,
        type: 5126,
        data: _position,
        byteLength: _position.byteLength,
      },
      NORMAL: {
        location: 1,
        count: normals.length,
        numComponents: 3,
        offset: 0,
        stride: 0,
        type: 5126,
        data: _normal,
        byteLength: _normal.byteLength,
      },
    },
    componentType: 5123,
    indices: _indices,
    numElements: indices.length,
    mode: 4,
  };
  return ArrayData;
};

const createSphere = (
  radius,
  subdivisionsAxis,
  subdivisionsHeight,
  opt_startLatitudeInRadians,
  opt_endLatitudeInRadians,
  opt_startLongitudeInRadians,
  opt_endLongitudeInRadians
) => {
  if (subdivisionsAxis <= 0 || subdivisionsHeight <= 0) {
    throw new Error("subdivisionAxis and subdivisionHeight must be > 0");
  }

  opt_startLatitudeInRadians = opt_startLatitudeInRadians || 0;
  opt_endLatitudeInRadians = opt_endLatitudeInRadians || Math.PI;
  opt_startLongitudeInRadians = opt_startLongitudeInRadians || 0;
  opt_endLongitudeInRadians = opt_endLongitudeInRadians || Math.PI * 2;

  const latRange = opt_endLatitudeInRadians - opt_startLatitudeInRadians;
  const longRange = opt_endLongitudeInRadians - opt_startLongitudeInRadians;

  const positions = [];
  const normals = [];
  const texcoords = [];

  for (let y = 0; y <= subdivisionsHeight; y++) {
    for (let x = 0; x <= subdivisionsAxis; x++) {
      const u = x / subdivisionsAxis;
      const v = y / subdivisionsHeight;
      const theta = longRange * u + opt_startLongitudeInRadians;
      const phi = latRange * v + opt_startLatitudeInRadians;
      const sinTheta = Math.sin(theta);
      const cosTheta = Math.cos(theta);
      const sinPhi = Math.sin(phi);
      const cosPhi = Math.cos(phi);
      const ux = cosTheta * sinPhi;
      const uy = cosPhi;
      const uz = sinTheta * sinPhi;
      positions.push(radius * ux, radius * uy, radius * uz);
      normals.push(ux, uy, uz);
      texcoords.push(1 - u, v);
    }
  }

  const numVertsAround = subdivisionsAxis + 1;
  const indices = [];
  for (let x = 0; x < subdivisionsAxis; x++) {
    for (let y = 0; y < subdivisionsHeight; y++) {
      indices.push(
        (y + 0) * numVertsAround + x,
        (y + 0) * numVertsAround + x + 1,
        (y + 1) * numVertsAround + x
      );
      indices.push(
        (y + 1) * numVertsAround + x,
        (y + 0) * numVertsAround + x + 1,
        (y + 1) * numVertsAround + x + 1
      );
    }
  }
  const _positions = new Float32Array(positions);
  const _normals = new Float32Array(normals);
  const _texcoords = new Float32Array(texcoords);
  const _indices = new Uint16Array(indices);

  return {
    attributes: {
      POSITION: {
        location: 0,
        count: positions.length,
        offset: 0,
        stride: 0,
        numComponents: 3,
        type: 5126,
        data: _positions,
        byteLength: _positions.byteLength,
      },
      NORMAL: {
        location: 1,
        count: normals.length,
        numComponents: 3,
        offset: 0,
        stride: 0,
        type: 5126,
        data: _normals,
        byteLength: _normals.byteLength,
      },
      TEXCOORD_0: {
        data: _texcoords,
        count: _texcoords.length,
        type: 5126,
        offset: 0,
        stride: 0,
        byteLength: _texcoords.byteLength,
        location: 4,
        numComponents: 2,
      },
    },
    componentType: 5123,
    indices: _indices,
    numElements: indices.length,
    mode: 4,
  };
};
const createTruncatedCone = (
  bottomRadius,
  topRadius,
  height,
  radialSubdivisions,
  verticalSubdivisions,
  opt_topCap,
  opt_bottomCap
) => {
  if (radialSubdivisions < 3) {
    throw new Error("radialSubdivisions must be 3 or greater");
  }

  if (verticalSubdivisions < 1) {
    throw new Error("verticalSubdivisions must be 1 or greater");
  }

  const topCap = opt_topCap === undefined ? true : opt_topCap;
  const bottomCap = opt_bottomCap === undefined ? true : opt_bottomCap;

  const extra = (topCap ? 2 : 0) + (bottomCap ? 2 : 0);

  const numVertices =
    (radialSubdivisions + 1) * (verticalSubdivisions + 1 + extra);
  const positions = [];
  const normals = [];
  const texcoords = [];
  const indices = [];

  const vertsAroundEdge = radialSubdivisions + 1;

  const slant = Math.atan2(bottomRadius - topRadius, height);
  const cosSlant = Math.cos(slant);
  const sinSlant = Math.sin(slant);

  const start = topCap ? -2 : 0;
  const end = verticalSubdivisions + (bottomCap ? 2 : 0);

  for (let yy = start; yy <= end; ++yy) {
    let v = yy / verticalSubdivisions;
    let y = height * v;
    let ringRadius;
    if (yy < 0) {
      y = 0;
      v = 1;
      ringRadius = bottomRadius;
    } else if (yy > verticalSubdivisions) {
      y = height;
      v = 1;
      ringRadius = topRadius;
    } else {
      ringRadius =
        bottomRadius + (topRadius - bottomRadius) * (yy / verticalSubdivisions);
    }
    if (yy === -2 || yy === verticalSubdivisions + 2) {
      ringRadius = 0;
      v = 0;
    }
    y -= height / 2;
    for (let ii = 0; ii < vertsAroundEdge; ++ii) {
      const sin = Math.sin((ii * Math.PI * 2) / radialSubdivisions);
      const cos = Math.cos((ii * Math.PI * 2) / radialSubdivisions);
      positions.push(sin * ringRadius, y, cos * ringRadius);
      if (yy < 0) {
        normals.push(0, -1, 0);
      } else if (yy > verticalSubdivisions) {
        normals.push(0, 1, 0);
      } else if (ringRadius === 0.0) {
        normals.push(0, 0, 0);
      } else {
        normals.push(sin * cosSlant, sinSlant, cos * cosSlant);
      }
      texcoords.push(ii / radialSubdivisions, 1 - v);
    }
  }

  for (let yy = 0; yy < verticalSubdivisions + extra; ++yy) {
    if (
      (yy === 1 && topCap) ||
      (yy === verticalSubdivisions + extra - 2 && bottomCap)
    ) {
      continue;
    }
    for (let ii = 0; ii < radialSubdivisions; ++ii) {
      indices.push(
        vertsAroundEdge * (yy + 0) + 0 + ii,
        vertsAroundEdge * (yy + 0) + 1 + ii,
        vertsAroundEdge * (yy + 1) + 1 + ii
      );
      indices.push(
        vertsAroundEdge * (yy + 0) + 0 + ii,
        vertsAroundEdge * (yy + 1) + 1 + ii,
        vertsAroundEdge * (yy + 1) + 0 + ii
      );
    }
  }
  const _positions = new Float32Array(positions);
  const _normals = new Float32Array(normals);
  const _texcoords = new Float32Array(texcoords);
  const _indices = new Uint16Array(indices);
  return {
    attributes: {
      POSITION: {
        location: 0,
        count: positions.length,
        offset: 0,
        stride: 0,
        numComponents: 3,
        type: 5126,
        data: _positions,
        byteLength: _positions.byteLength,
      },
      NORMAL: {
        location: 1,
        count: normals.length,
        numComponents: 3,
        offset: 0,
        stride: 0,
        type: 5126,
        data: _normals,
        byteLength: _normals.byteLength,
      },
      TEXCOORD_0: {
        data: _texcoords,
        count: _texcoords.length,
        type: 5126,
        offset: 0,
        stride: 0,
        byteLength: _texcoords.byteLength,
        location: 4,
        numComponents: 2,
      },
    },
    componentType: 5123,
    indices: _indices,
    numElements: indices.length,
    mode: 4,
  };
};




/***/ }),

/***/ "./node_modules/graphics/src/programInfo.js":
/*!**************************************************!*\
  !*** ./node_modules/graphics/src/programInfo.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProgramInfo": () => (/* binding */ ProgramInfo),
/* harmony export */   "expandedTypedArray": () => (/* binding */ expandedTypedArray),
/* harmony export */   "getGLTypeForTypedArray": () => (/* binding */ getGLTypeForTypedArray)
/* harmony export */ });
function getGLTypeForTypedArray(gl, typedArray) {
  if (typedArray instanceof Int8Array) {
    return gl.BYTE;
  } // eslint-disable-line
  if (typedArray instanceof Uint8Array) {
    return gl.UNSIGNED_BYTE;
  } // eslint-disable-line
  if (typedArray instanceof Uint8ClampedArray) {
    return gl.UNSIGNED_BYTE;
  } // eslint-disable-line
  if (typedArray instanceof Int16Array) {
    return gl.SHORT;
  } // eslint-disable-line
  if (typedArray instanceof Uint16Array) {
    return gl.UNSIGNED_SHORT;
  } // eslint-disable-line
  if (typedArray instanceof Int32Array) {
    return gl.INT;
  } // eslint-disable-line
  if (typedArray instanceof Uint32Array) {
    return gl.UNSIGNED_INT;
  } // eslint-disable-line
  if (typedArray instanceof Float32Array) {
    return gl.FLOAT;
  } // eslint-disable-line
  return false;
}
function expandedTypedArray(array) {
  let cursor = 0;
  array.push = function () {
    for (let ii = 0; ii < arguments.length; ++ii) {
      const value = arguments[ii];

      if (
        value instanceof Array ||
        (value.buffer && value.buffer instanceof ArrayBuffer)
      ) {
        for (let jj = 0; jj < value.length; ++jj) {
          array[cursor++] = value[jj];
        }
      } else {
        array[cursor++] = value;
      }
    }
  };

  return array;
}

function createUniformSetters(gl, program) {
  const createTextureSetter = (program, uniformInfo) => {
    const location = gl.getUniformLocation(program, uniformInfo.name);

    return (texBlockNum) => {
      gl.uniform1i(location, texBlockNum);
    };
  };
  function createUniformSetter(program, uniformInfo) {
    const location = gl.getUniformLocation(program, uniformInfo.name);

    const type = uniformInfo.type;

    const isArray =
      uniformInfo.size > 1 && uniformInfo.name.substr(-3) === "[0]";

    if (type === gl.FLOAT && isArray) {
      return function (v) {
        gl.uniform1fv(location, v);
      };
    }
    if (type === gl.FLOAT) {
      return function (v) {
        gl.uniform1f(location, v);
      };
    }
    if (type === gl.FLOAT_VEC2) {
      return function (v) {
        gl.uniform2fv(location, v);
      };
    }
    if (type === gl.FLOAT_VEC3) {
      return function (v) {
        gl.uniform3fv(location, v);
      };
    }
    if (type === gl.FLOAT_VEC4) {
      return function (v) {
        gl.uniform4fv(location, v);
      };
    }
    if (type === gl.INT && isArray) {
      return function (v) {
        gl.uniform1iv(location, v);
      };
    }
    if (type === gl.INT) {
      return function (v) {
        gl.uniform1i(location, v);
      };
    }
    if (type === gl.INT_VEC2) {
      return function (v) {
        gl.uniform2iv(location, v);
      };
    }
    if (type === gl.INT_VEC3) {
      return function (v) {
        gl.uniform3iv(location, v);
      };
    }
    if (type === gl.INT_VEC4) {
      return function (v) {
        gl.uniform4iv(location, v);
      };
    }
    if (type === gl.BOOL) {
      return function (v) {
        gl.uniform1iv(location, v);
      };
    }
    if (type === gl.BOOL_VEC2) {
      return function (v) {
        gl.uniform2iv(location, v);
      };
    }
    if (type === gl.BOOL_VEC3) {
      return function (v) {
        gl.uniform3iv(location, v);
      };
    }
    if (type === gl.BOOL_VEC4) {
      return function (v) {
        gl.uniform4iv(location, v);
      };
    }
    if (type === gl.FLOAT_MAT2) {
      return function (v) {
        gl.uniformMatrix2fv(location, false, v);
      };
    }
    if (type === gl.FLOAT_MAT3) {
      return function (v) {
        gl.uniformMatrix3fv(location, false, v);
      };
    }
    if (type === gl.FLOAT_MAT4) {
      return function (v) {
        gl.uniformMatrix4fv(location, false, v);
      };
    }
  }
  const uniformSetters = {};
  const textureSetters = {};
  const numUniforms = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);

  for (let ii = 0; ii < numUniforms; ++ii) {
    const uniformInfo = gl.getActiveUniform(program, ii);
    if (!uniformInfo) {
      break;
    }
    let name = uniformInfo.name;
    if (uniformInfo.type === gl.SAMPLER_2D) {
      textureSetters[name] = createTextureSetter(program, uniformInfo);
      continue;
    }

    if (name.substr(-3) === "[0]") {
      name = name.substr(0, name.length - 3);
    }
    if (uniformInfo.size > 1) {
      for (let i = 0; i < uniformInfo.size; i++) {
        const obj = {
          size: uniformInfo.size,
          type: uniformInfo.type,
          name: name + `[${i}]`,
        };
        uniformSetters[name + `[${i}]`] = createUniformSetter(program, obj);
      }
    } else {
      const setter = createUniformSetter(program, uniformInfo);
      uniformSetters[name] = setter;
    }
  }
  return { uniformSetters, textureSetters };
}

class ProgramInfo {
  constructor(vs, fs) {
    this.vs = vs;
    this.fs = fs;
    this.VAO = null;
    this.uniformSetters = null;
    this.vertexShader = null;
    this.fragmentShader = null;
    this.program = null;
    this.gl = null;
  }
  setContext(glContextWrapper) {
    this.context = glContextWrapper;
    return this;
  }
  createUniformSetters() {
    const { gl } = this.context;
    const { uniformSetters, textureSetters } = createUniformSetters(
      gl,
      this.program
    );
    this.textureSetters = textureSetters;
    this.uniformSetters = uniformSetters;
    return this;
  }
  compileShaders() {
    const { gl } = this.context;
    this.vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(this.vertexShader, this.vs);
    gl.compileShader(this.vertexShader);
    if (!gl.getShaderParameter(this.vertexShader, gl.COMPILE_STATUS)) {
      throw new Error(gl.getShaderInfoLog(this.vertexShader));
    }

    this.fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(this.fragmentShader, this.fs);
    gl.compileShader(this.fragmentShader);
    if (!gl.getShaderParameter(this.fragmentShader, gl.COMPILE_STATUS)) {
      throw new Error(gl.getShaderInfoLog(this.fragmentShader));
    }

    this.program = gl.createProgram();
    gl.attachShader(this.program, this.vertexShader);
    gl.attachShader(this.program, this.fragmentShader);
    gl.linkProgram(this.program);
    if (!gl.getProgramParameter(this.program, gl.LINK_STATUS)) {
      throw new Error(gl.getProgramInfoLog(this.program));
    }
    return this;
  }
  setUniforms(uniforms) {
    this.context.useProgramInfo(this);
    Object.keys(uniforms).forEach((name) => {
      const setter = this.uniformSetters[name];
      if (setter) setter(uniforms[name]);
    });
    return this;
  }
  setTextureUniformUnit(name, unit) {
    this.context.useProgramInfo(this);
    const setter = this.textureSetters[name];
    if (setter) setter(unit);
    return this;
  }
}




/***/ }),

/***/ "./node_modules/graphics/src/render/shaders/default/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/graphics/src/render/shaders/default/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vert_glsl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vert.glsl */ "./node_modules/graphics/src/render/shaders/default/vert.glsl");
/* harmony import */ var _frag_glsl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./frag.glsl */ "./node_modules/graphics/src/render/shaders/default/frag.glsl");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({vert: _vert_glsl__WEBPACK_IMPORTED_MODULE_0__, frag: _frag_glsl__WEBPACK_IMPORTED_MODULE_1__});

/***/ }),

/***/ "./node_modules/graphics/src/render/shaders/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/graphics/src/render/shaders/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultShaders": () => (/* reexport safe */ _default__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "pointLightShaders": () => (/* reexport safe */ _pointLight__WEBPACK_IMPORTED_MODULE_1__["default"])
/* harmony export */ });
/* harmony import */ var _default__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./default */ "./node_modules/graphics/src/render/shaders/default/index.js");
/* harmony import */ var _pointLight__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pointLight */ "./node_modules/graphics/src/render/shaders/pointLight/index.js");





/***/ }),

/***/ "./node_modules/graphics/src/render/shaders/pointLight/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/graphics/src/render/shaders/pointLight/index.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vert_glsl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vert.glsl */ "./node_modules/graphics/src/render/shaders/pointLight/vert.glsl");
/* harmony import */ var _frag_glsl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./frag.glsl */ "./node_modules/graphics/src/render/shaders/pointLight/frag.glsl");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({vert: _vert_glsl__WEBPACK_IMPORTED_MODULE_0__, frag: _frag_glsl__WEBPACK_IMPORTED_MODULE_1__});

/***/ }),

/***/ "./node_modules/graphics/src/textureInfo.js":
/*!**************************************************!*\
  !*** ./node_modules/graphics/src/textureInfo.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextureInfo": () => (/* binding */ TextureInfo),
/* harmony export */   "makeImgFromSvgXml": () => (/* binding */ makeImgFromSvgXml),
/* harmony export */   "makeStripeImg": () => (/* binding */ makeStripeImg)
/* harmony export */ });
const setCanvasSize = (ctx, width, height) => {
  ctx.canvas.width = width;
  ctx.canvas.height = height;
};

const makeTexture = (gl, ctx) => {
  const tex = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, tex);

  gl.texImage2D(
    gl.TEXTURE_2D,
    0,
    gl.RGBA,
    gl.RGBA,
    gl.UNSIGNED_BYTE,
    ctx.canvas
  );
  return tex;
};
const makeStripeTexture = (gl, options) => {
  options = options || {};
  var width = options.width || 4;
  var height = options.height || 4;
  var color1 = options.color1 || "rgba(1,0,0,0.1)";
  var color2 = options.color2 || "rgba(1,1,1,0.5)";
  const ctx = document.createElement("canvas").getContext("2d");
  setCanvasSize(ctx, width, height);

  ctx.fillStyle = color1;
  ctx.fillRect(0, 0, width, height);
  ctx.fillStyle = color2;
  ctx.fillRect(0, 0, width, height / 2);

  return makeTexture(gl, ctx);
};
const makeStripeImg = (options) => {
  options = options || {};
  var width = options.width || 4;
  var height = options.height || 4;
  var color1 = options.color1 || "rgba(1,0,0,0.5)";
  var color2 = options.color2 || "rgba(0,0,1,1)";
  const ctx = document.createElement("canvas").getContext("2d");
  setCanvasSize(ctx, width, height);

  ctx.fillStyle = color1;
  ctx.fillRect(0, 0, width, height);
  ctx.fillStyle = color2;
  ctx.fillRect(0, 0, width, height / 2);

  return ctx.canvas;
};
const makeImgFromSvgXml = (xml, options = {}) => {
  const img = document.createElement("img");
  var svg64 = btoa(xml);
  var b64Start = "data:image/svg+xml;base64,";
  var image64 = b64Start + svg64;
  img.src = image64;

  const width = options.width || 100;
  const height = options.height || 100;
  const x = options.x || 1;
  const y = options.y || 50;

  const ctx = document.createElement("canvas").getContext("2d");
  setCanvasSize(ctx, width, height);

  ctx.drawImage(img, x, y, width, height);
  ctx.fillStyle = "rgba(0,0,0,1)";
  ctx.fillRect(0, 0, width, height);
  return ctx.img;
};
const setTextureUnits = (gl, texture, unitNum) => {
  gl.activeTexture(gl.TEXTURE0 + unitNum);
  gl.bindTexture(gl.TEXTURE_2D, texture);
};

class TextureInfo {
  static makeImgFromSvgXml = makeImgFromSvgXml;
  constructor(gl) {
    this.texture = gl.createTexture();
    this.gl = gl
  }
  fromImage(image){
    const {gl} = this
    gl.bindTexture(gl.TEXTURE_2D, this.texture);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
      gl.texImage2D(
        gl.TEXTURE_2D,
        0,
        gl.RGBA,
        gl.RGBA,
        gl.UNSIGNED_BYTE,
        image
      );
    return this;
  }
  getTexture(){
    return this.texture
  }
}



/***/ }),

/***/ "./node_modules/math/index.js":
/*!************************************!*\
  !*** ./node_modules/math/index.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const AABB = __webpack_require__(/*! ./src/aabb */ "./node_modules/math/src/aabb.js")
const m3 = __webpack_require__(/*! ./src/m3 */ "./node_modules/math/src/m3.js")
const m4 = __webpack_require__(/*! ./src/m4 */ "./node_modules/math/src/m4.js")
const vec3 = __webpack_require__(/*! ./src/vec3 */ "./node_modules/math/src/vec3.js")

module.exports = {
    AABB, m3, m4, vec3
}

/***/ }),

/***/ "./node_modules/math/src/aabb.js":
/*!***************************************!*\
  !*** ./node_modules/math/src/aabb.js ***!
  \***************************************/
/***/ ((module) => {

module.exports = class AABB {
  constructor(min, max) {
    this.min = min;
    this.max = max;
  }
};


/***/ }),

/***/ "./node_modules/math/src/m3.js":
/*!*************************************!*\
  !*** ./node_modules/math/src/m3.js ***!
  \*************************************/
/***/ ((module) => {

const m3 = {
    multiply : function(b, a) {
        var a00 = a[0 * 3 + 0];
        var a01 = a[0 * 3 + 1];
        var a02 = a[0 * 3 + 2];
        var a10 = a[1 * 3 + 0];
        var a11 = a[1 * 3 + 1];
        var a12 = a[1 * 3 + 2];
        var a20 = a[2 * 3 + 0];
        var a21 = a[2 * 3 + 1];
        var a22 = a[2 * 3 + 2];
        var b00 = b[0 * 3 + 0];
        var b01 = b[0 * 3 + 1];
        var b02 = b[0 * 3 + 2];
        var b10 = b[1 * 3 + 0];
        var b11 = b[1 * 3 + 1];
        var b12 = b[1 * 3 + 2];
        var b20 = b[2 * 3 + 0];
        var b21 = b[2 * 3 + 1];
        var b22 = b[2 * 3 + 2];
    
        return [
          b00 * a00 + b01 * a10 + b02 * a20,
          b00 * a01 + b01 * a11 + b02 * a21,
          b00 * a02 + b01 * a12 + b02 * a22,
          b10 * a00 + b11 * a10 + b12 * a20,
          b10 * a01 + b11 * a11 + b12 * a21,
          b10 * a02 + b11 * a12 + b12 * a22,
          b20 * a00 + b21 * a10 + b22 * a20,
          b20 * a01 + b21 * a11 + b22 * a21,
          b20 * a02 + b21 * a12 + b22 * a22,
        ];
      },
      xRotation: function(angleInRadians) {
        var c = Math.cos(angleInRadians);
        var s = Math.sin(angleInRadians);
     
        return [
          1, 0, 0, 
          0, c, s, 
          0, -s, c
        ];
      },
     
      yRotation: function(angleInRadians) {
        var c = Math.cos(angleInRadians);
        var s = Math.sin(angleInRadians);
     
        return [
          c, 0, -s, 
          0, 1, 0, 
          s, 0, c
        ];
      },
     
      zRotation: function(angleInRadians) {
        var c = Math.cos(angleInRadians);
        var s = Math.sin(angleInRadians);
     
        return [
           c, s, 0, 
          -s, c, 0,
           0, 0, 1
        ];
      },
      m3Tom4 : function(m){
        const dst = new Float32Array(16)
        dst[ 0] = m[0]
        dst[ 1] = m[1]
        dst[ 2] = m[2]
        dst[ 3] = 0
        dst[ 4] = m[3]
        dst[ 5] = m[4]
        dst[ 6] = m[5]
        dst[ 7] = 0
        dst[ 8] = m[6]
        dst[ 9] = m[7]
        dst[10] = m[8]
        dst[11] = 0
        dst[12] = 0
        dst[13] = 0
        dst[14] = 0
        dst[15] = 1
        return dst
      },
      xRotate: function(m, angleInRadians) {
        return m3.multiply(m, m3.xRotation(angleInRadians));
      },
     
      yRotate: function(m, angleInRadians) {
        return m3.multiply(m, m3.yRotation(angleInRadians));
      },
     
      zRotate: function(m, angleInRadians) {
        return m3.multiply(m, m3.zRotation(angleInRadians));
      },
      transformPoint : function(m, v, dst) {
        dst = dst || new Float32Array(3);
        var v0 = v[0];
        var v1 = v[1];
        var v2 = v[2];
        
    
        dst[0] = (v0 * m[0 * 3 + 0] + v1 * m[1 * 3 + 0] + v2 * m[2 * 3 + 0]  ) 
        dst[1] = (v0 * m[0 * 3 + 1] + v1 * m[1 * 3 + 1] + v2 * m[2 * 3 + 1]  ) 
        dst[2] = (v0 * m[0 * 3 + 2] + v1 * m[1 * 3 + 2] + v2 * m[2 * 3 + 2] ) 
    
        return dst;
      },
      identity : function() {
        return [
          1, 0, 0,
          0, 1, 0,
          0, 0, 1,
        ];
      },
      transpose : function(m){
         
          dst = new Float32Array(9)
          dst[0] = m[0]
          dst[1] = m[3]
          dst[2] = m[6]
          dst[3] = m[1]
          dst[4] = m[4]
          dst[5] = m[7]
          dst[6] = m[2]
          dst[7] = m[5]
          dst[8] = m[8]
          return dst
      },
      scaling : function(sx,sy,sz){
        return new Float32Array([
                    sx, 0, 0,
                    0, sy, 0,
                    0,  0, sz
              ])
      },
      scale : function(m, sx,sy,sz){
        return m3.multiply(m, m3.scaling(sx, sy, sz))
      },
      /*
      0 1 2
      3 4 5
      6 7 8
      */
      inverse : function(m){
       const det = m[0] * m[4] * m[8] + 
                   m[2] * m[3] * m[7] +
                   m[1] * m[5] * m[6] -
                   m[2] * m[4] * m[6] -
                   m[0] * m[5] * m[7] -
                   m[8] * m[3] * m[2] 
        const dst = new Float32Array(9)
        dst[0] = (m[4] * m[8] - m[7] * m[5]) / det
        dst[1] = (m[3] * m[8] - m[6] * m[5]) / det
        dst[2] = (m[3] * m[7] - m[6] * m[4]) / det
        dst[3] = (m[1] * m[8] - m[2] * m[7]) / det
        dst[4] = (m[0] * m[8] - m[2] * m[6]) / det
        dst[5] = (m[0] * m[7] - m[1] * m[6]) / det
        dst[6] = (m[1] * m[5] - m[2] * m[4]) / det
        dst[7] = (m[0] * m[5] - m[2] * m[3]) / det
        dst[8] = (m[0] * m[4] - m[1] * m[4]) / det
        
      },
      toString(m){
        return m.reduce((acc,el,idx) => (idx) % 3 === 0 ? acc += '\n' + el : acc += ' ' + el )
      },
      dot(v1,v2){
        return v1[0]*v2[0] + v1[1]*v2[1] + v1[2] * v2[2]
      }
}
module.exports = m3

/***/ }),

/***/ "./node_modules/math/src/m4.js":
/*!*************************************!*\
  !*** ./node_modules/math/src/m4.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const MatType = Float32Array;
const {norm} = __webpack_require__(/*! ./vec3 */ "./node_modules/math/src/vec3.js")
const m4 = {
  multiply: function (a, b, dst) {
    dst = dst || new MatType(16);
    var a00 = a[0 * 4 + 0];
    var a01 = a[0 * 4 + 1];
    var a02 = a[0 * 4 + 2];
    var a03 = a[0 * 4 + 3];
    var a10 = a[1 * 4 + 0];
    var a11 = a[1 * 4 + 1];
    var a12 = a[1 * 4 + 2];
    var a13 = a[1 * 4 + 3];
    var a20 = a[2 * 4 + 0];
    var a21 = a[2 * 4 + 1];
    var a22 = a[2 * 4 + 2];
    var a23 = a[2 * 4 + 3];
    var a30 = a[3 * 4 + 0];
    var a31 = a[3 * 4 + 1];
    var a32 = a[3 * 4 + 2];
    var a33 = a[3 * 4 + 3];
    var b00 = b[0 * 4 + 0];
    var b01 = b[0 * 4 + 1];
    var b02 = b[0 * 4 + 2];
    var b03 = b[0 * 4 + 3];
    var b10 = b[1 * 4 + 0];
    var b11 = b[1 * 4 + 1];
    var b12 = b[1 * 4 + 2];
    var b13 = b[1 * 4 + 3];
    var b20 = b[2 * 4 + 0];
    var b21 = b[2 * 4 + 1];
    var b22 = b[2 * 4 + 2];
    var b23 = b[2 * 4 + 3];
    var b30 = b[3 * 4 + 0];
    var b31 = b[3 * 4 + 1];
    var b32 = b[3 * 4 + 2];
    var b33 = b[3 * 4 + 3];
    dst[0] = b00 * a00 + b01 * a10 + b02 * a20 + b03 * a30;
    dst[1] = b00 * a01 + b01 * a11 + b02 * a21 + b03 * a31;
    dst[2] = b00 * a02 + b01 * a12 + b02 * a22 + b03 * a32;
    dst[3] = b00 * a03 + b01 * a13 + b02 * a23 + b03 * a33;
    dst[4] = b10 * a00 + b11 * a10 + b12 * a20 + b13 * a30;
    dst[5] = b10 * a01 + b11 * a11 + b12 * a21 + b13 * a31;
    dst[6] = b10 * a02 + b11 * a12 + b12 * a22 + b13 * a32;
    dst[7] = b10 * a03 + b11 * a13 + b12 * a23 + b13 * a33;
    dst[8] = b20 * a00 + b21 * a10 + b22 * a20 + b23 * a30;
    dst[9] = b20 * a01 + b21 * a11 + b22 * a21 + b23 * a31;
    dst[10] = b20 * a02 + b21 * a12 + b22 * a22 + b23 * a32;
    dst[11] = b20 * a03 + b21 * a13 + b22 * a23 + b23 * a33;
    dst[12] = b30 * a00 + b31 * a10 + b32 * a20 + b33 * a30;
    dst[13] = b30 * a01 + b31 * a11 + b32 * a21 + b33 * a31;
    dst[14] = b30 * a02 + b31 * a12 + b32 * a22 + b33 * a32;
    dst[15] = b30 * a03 + b31 * a13 + b32 * a23 + b33 * a33;
    return dst;
  },

  translation: function (tx, ty, tz) {
    return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, tx, ty, tz, 1];
  },

  xRotation: function (angleInRadians) {
    var c = Math.cos(angleInRadians);
    var s = Math.sin(angleInRadians);

    return [1, 0, 0, 0, 0, c, s, 0, 0, -s, c, 0, 0, 0, 0, 1];
  },

  yRotation: function (angleInRadians) {
    var c = Math.cos(angleInRadians);
    var s = Math.sin(angleInRadians);

    return [c, 0, -s, 0, 0, 1, 0, 0, s, 0, c, 0, 0, 0, 0, 1];
  },

  zRotation: function (angleInRadians) {
    var c = Math.cos(angleInRadians);
    var s = Math.sin(angleInRadians);

    return [c, s, 0, 0, -s, c, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
  },

  scaling: function (sx, sy, sz) {
    return [sx, 0, 0, 0, 0, sy, 0, 0, 0, 0, sz, 0, 0, 0, 0, 1];
  },
  translate: function (m, tx, ty, tz) {
    return m4.multiply(m, m4.translation(tx, ty, tz));
  },

  xRotate: function (m, angleInRadians) {
    return m4.multiply(m, m4.xRotation(angleInRadians));
  },

  yRotate: function (m, angleInRadians) {
    return m4.multiply(m, m4.yRotation(angleInRadians));
  },

  zRotate: function (m, angleInRadians) {
    return m4.multiply(m, m4.zRotation(angleInRadians));
  },

  scale: function (m, sx, sy, sz) {
    return m4.multiply(m, m4.scaling(sx, sy, sz));
  },
  makeOrt: function (v) {
    const o = [0, 0, 0];
    const norm = Math.sqrt(v[0] * v[0] + v[1] * v[1] + v[2] * v[2]);
    o[0] = v[0] / norm;
    o[1] = v[1] / norm;
    o[2] = v[2] / norm;
    return o;
  },
  projection: function (width, height, depth) {
    // Эта матрица переворачивает Y, чтобы 0 был наверху
    return [
      2 / width,
      0,
      0,
      0,
      0,
      -2 / height,
      0,
      0,
      0,
      0,
      2 / depth,
      0,
      -1,
      1,
      0,
      1,
    ];
  },
  perspective: function (fieldOfViewInRadians, aspect, near, far) {
    var f = Math.tan(Math.PI * 0.5 - 0.5 * fieldOfViewInRadians);
    var rangeInv = 1.0 / (near - far);

    return [
      f / aspect,
      0,
      0,
      0,
      0,
      f,
      0,
      0,
      0,
      0,
      (near + far) * rangeInv,
      -1,
      0,
      0,
      near * far * rangeInv * 2,
      0,
    ];
  },
  inverse: function (m) {
    var m00 = m[0 * 4 + 0];
    var m01 = m[0 * 4 + 1];
    var m02 = m[0 * 4 + 2];
    var m03 = m[0 * 4 + 3];
    var m10 = m[1 * 4 + 0];
    var m11 = m[1 * 4 + 1];
    var m12 = m[1 * 4 + 2];
    var m13 = m[1 * 4 + 3];
    var m20 = m[2 * 4 + 0];
    var m21 = m[2 * 4 + 1];
    var m22 = m[2 * 4 + 2];
    var m23 = m[2 * 4 + 3];
    var m30 = m[3 * 4 + 0];
    var m31 = m[3 * 4 + 1];
    var m32 = m[3 * 4 + 2];
    var m33 = m[3 * 4 + 3];
    var tmp_0 = m22 * m33;
    var tmp_1 = m32 * m23;
    var tmp_2 = m12 * m33;
    var tmp_3 = m32 * m13;
    var tmp_4 = m12 * m23;
    var tmp_5 = m22 * m13;
    var tmp_6 = m02 * m33;
    var tmp_7 = m32 * m03;
    var tmp_8 = m02 * m23;
    var tmp_9 = m22 * m03;
    var tmp_10 = m02 * m13;
    var tmp_11 = m12 * m03;
    var tmp_12 = m20 * m31;
    var tmp_13 = m30 * m21;
    var tmp_14 = m10 * m31;
    var tmp_15 = m30 * m11;
    var tmp_16 = m10 * m21;
    var tmp_17 = m20 * m11;
    var tmp_18 = m00 * m31;
    var tmp_19 = m30 * m01;
    var tmp_20 = m00 * m21;
    var tmp_21 = m20 * m01;
    var tmp_22 = m00 * m11;
    var tmp_23 = m10 * m01;

    var t0 =
      tmp_0 * m11 +
      tmp_3 * m21 +
      tmp_4 * m31 -
      (tmp_1 * m11 + tmp_2 * m21 + tmp_5 * m31);
    var t1 =
      tmp_1 * m01 +
      tmp_6 * m21 +
      tmp_9 * m31 -
      (tmp_0 * m01 + tmp_7 * m21 + tmp_8 * m31);
    var t2 =
      tmp_2 * m01 +
      tmp_7 * m11 +
      tmp_10 * m31 -
      (tmp_3 * m01 + tmp_6 * m11 + tmp_11 * m31);
    var t3 =
      tmp_5 * m01 +
      tmp_8 * m11 +
      tmp_11 * m21 -
      (tmp_4 * m01 + tmp_9 * m11 + tmp_10 * m21);

    var d = 1.0 / (m00 * t0 + m10 * t1 + m20 * t2 + m30 * t3);

    return [
      d * t0,
      d * t1,
      d * t2,
      d * t3,
      d *
        (tmp_1 * m10 +
          tmp_2 * m20 +
          tmp_5 * m30 -
          (tmp_0 * m10 + tmp_3 * m20 + tmp_4 * m30)),
      d *
        (tmp_0 * m00 +
          tmp_7 * m20 +
          tmp_8 * m30 -
          (tmp_1 * m00 + tmp_6 * m20 + tmp_9 * m30)),
      d *
        (tmp_3 * m00 +
          tmp_6 * m10 +
          tmp_11 * m30 -
          (tmp_2 * m00 + tmp_7 * m10 + tmp_10 * m30)),
      d *
        (tmp_4 * m00 +
          tmp_9 * m10 +
          tmp_10 * m20 -
          (tmp_5 * m00 + tmp_8 * m10 + tmp_11 * m20)),
      d *
        (tmp_12 * m13 +
          tmp_15 * m23 +
          tmp_16 * m33 -
          (tmp_13 * m13 + tmp_14 * m23 + tmp_17 * m33)),
      d *
        (tmp_13 * m03 +
          tmp_18 * m23 +
          tmp_21 * m33 -
          (tmp_12 * m03 + tmp_19 * m23 + tmp_20 * m33)),
      d *
        (tmp_14 * m03 +
          tmp_19 * m13 +
          tmp_22 * m33 -
          (tmp_15 * m03 + tmp_18 * m13 + tmp_23 * m33)),
      d *
        (tmp_17 * m03 +
          tmp_20 * m13 +
          tmp_23 * m23 -
          (tmp_16 * m03 + tmp_21 * m13 + tmp_22 * m23)),
      d *
        (tmp_14 * m22 +
          tmp_17 * m32 +
          tmp_13 * m12 -
          (tmp_16 * m32 + tmp_12 * m12 + tmp_15 * m22)),
      d *
        (tmp_20 * m32 +
          tmp_12 * m02 +
          tmp_19 * m22 -
          (tmp_18 * m22 + tmp_21 * m32 + tmp_13 * m02)),
      d *
        (tmp_18 * m12 +
          tmp_23 * m32 +
          tmp_15 * m02 -
          (tmp_22 * m32 + tmp_14 * m02 + tmp_19 * m12)),
      d *
        (tmp_22 * m22 +
          tmp_16 * m02 +
          tmp_21 * m12 -
          (tmp_20 * m12 + tmp_23 * m22 + tmp_17 * m02)),
    ];
  },
  lookAt: function (cameraPosition, target, up) {
    var zAxis = normalize(subtractVectors(cameraPosition, target));
    var xAxis = normalize(cross(up, zAxis));
    var yAxis = normalize(cross(zAxis, xAxis));

    return [
      xAxis[0],
      xAxis[1],
      xAxis[2],
      0,
      yAxis[0],
      yAxis[1],
      yAxis[2],
      0,
      zAxis[0],
      zAxis[1],
      zAxis[2],
      0,
      cameraPosition[0],
      cameraPosition[1],
      cameraPosition[2],
      1,
    ];
  },
  copy: function (src) {
    const dst = new MatType(16);

    dst[0] = src[0];
    dst[1] = src[1];
    dst[2] = src[2];
    dst[3] = src[3];
    dst[4] = src[4];
    dst[5] = src[5];
    dst[6] = src[6];
    dst[7] = src[7];
    dst[8] = src[8];
    dst[9] = src[9];
    dst[10] = src[10];
    dst[11] = src[11];
    dst[12] = src[12];
    dst[13] = src[13];
    dst[14] = src[14];
    dst[15] = src[15];

    return dst;
  },
  vectorSum: function (v1, v2) {
    const vector = [0, 0, 0];
    vector[0] = v1[0] + v2[0];
    vector[1] = v1[1] + v2[1];
    vector[2] = v1[2] + v2[2];
    return vector;
  },
  cross: function (a, b) {
    return [
      a[1] * b[2] - a[2] * b[1],
      a[2] * b[0] - a[0] * b[2],
      a[0] * b[1] - a[1] * b[0],
    ];
  },
  vectorScalarProduct(a, s) {
    let v = [0, 0, 0];

    v[0] = a[0] * s;
    v[1] = a[1] * s;
    v[2] = a[2] * s;
    if (isNaN(v[0]) || isNaN(v[2]) || isNaN(v[2])) return [0, 0, 0];
    return v;
  },

  scalarProduct: function (v1, v2) {
    let a = v1[0] * v2[0] + v1[1] * v2[1] + v1[2] * v2[2];

    return a;
  },
  dot(v1, v2) {
    return v1[0] * v2[0] + v1[1] * v2[1] + v1[2] * v2[2];
  },
  isNullVector: function (v) {
    return !v[0] && !v[1] && !v[2];
  },
  getVectorLength(v) {
    return Math.sqrt(v[0] * v[0] + v[1] * v[1] + v[2] * v[2]);
  },
  transformPoint: function (m, v, dst) {
    dst = dst || new MatType(3);
    var v0 = v[0];
    var v1 = v[1];
    var v2 = v[2];
    var d =
      v0 * m[0 * 4 + 3] + v1 * m[1 * 4 + 3] + v2 * m[2 * 4 + 3] + m[3 * 4 + 3];

    dst[0] =
      (v0 * m[0 * 4 + 0] +
        v1 * m[1 * 4 + 0] +
        v2 * m[2 * 4 + 0] +
        m[3 * 4 + 0]) /
      d;
    dst[1] =
      (v0 * m[0 * 4 + 1] +
        v1 * m[1 * 4 + 1] +
        v2 * m[2 * 4 + 1] +
        m[3 * 4 + 1]) /
      d;
    dst[2] =
      (v0 * m[0 * 4 + 2] +
        v1 * m[1 * 4 + 2] +
        v2 * m[2 * 4 + 2] +
        m[3 * 4 + 2]) /
      d;

    return dst;
  },
  normalize: function (v, dst) {
    dst = dst || new MatType(3);
    var length = Math.sqrt(v[0] * v[0] + v[1] * v[1] + v[2] * v[2]);
    // make sure we don't divide by 0.
    if (length > 0.00001) {
      dst[0] = v[0] / length;
      dst[1] = v[1] / length;
      dst[2] = v[2] / length;
    }
    return dst;
  },
  identity: function () {
    dst = new MatType(16);
    dst[0] = 1;
    dst[1] = 0;
    dst[2] = 0;
    dst[3] = 0;
    dst[4] = 0;
    dst[5] = 1;
    dst[6] = 0;
    dst[7] = 0;
    dst[8] = 0;
    dst[9] = 0;
    dst[10] = 1;
    dst[11] = 0;
    dst[12] = 0;
    dst[13] = 0;
    dst[14] = 0;
    dst[15] = 1;

    return dst;
  },
  m3Tom4: function (m) {
    const dst = new MatType(16);
    dst[0] = m[0];
    dst[1] = m[1];
    dst[2] = m[2];
    dst[3] = 0;
    dst[4] = m[3];
    dst[5] = m[4];
    dst[6] = m[5];
    dst[7] = 0;
    dst[8] = m[6];
    dst[9] = m[7];
    dst[10] = m[8];
    dst[11] = 0;
    dst[12] = 0;
    dst[13] = 0;
    dst[14] = 0;
    dst[15] = 1;
    return dst;
  },
  m4Tom3: function (m) {
    const dst = new MatType(9);
    dst[0] = m[0];
    dst[1] = m[1];
    dst[2] = m[2];
    dst[3] = m[4];
    dst[4] = m[5];
    dst[5] = m[6];
    dst[6] = m[8];
    dst[7] = m[9];
    dst[8] = m[10];
    return dst;
  },
  toString(m) {
    return m.reduce((acc, el, idx) =>
      idx % 4 === 0 ? (acc += "\n" + el) : (acc += " " + el)
    );
  },
  transpose: function (m) {
    return [
      m[0],
      m[4],
      m[8],
      m[12],
      m[1],
      m[5],
      m[9],
      m[13],
      m[2],
      m[6],
      m[10],
      m[14],
      m[3],
      m[7],
      m[11],
      m[15],
    ];
  },
  fromQuaternion: (q) => {
    const a11 = 1 - 2 * (q[1] * q[1] + q[2] * q[2]);
    const a12 = 2 * (q[0] * q[1] - q[2] * q[3]);
    const a13 = 2 * (q[0] * q[2] + q[1] * q[3]);
    const a21 = 2 * (q[0] * q[1] + q[2] * q[3]);
    const a22 = 1 - 2 * (q[0] * q[0] + q[2] * q[2]);
    const a23 = 2 * (q[1] * q[2] - q[0] * q[3]);
    const a31 = 2 * (q[0] * q[2] - q[1] * q[3]);
    const a32 = 2 * (q[1] * q[2] + q[0] * q[3]);
    const a33 = 1 - 2 * (q[0] * q[0] + q[1] * q[1]);
    return [a11, a12, a13, 0, a21, a22, a23, 0, a31, a32, a33, 0, 0, 0, 0, 1];
  },
  rotation(x, y, z) {
    return this.xRotate(this.yRotate(this.zRotation(z), y), x);
  },
  rotationFromNormal(n) {
    return this.rotation(Math.acos(n[1]), Math.acos(n[2]), Math.acos(n[0]));
  },
  determinate(m) {
    var m00 = m[0 * 4 + 0];
    var m01 = m[0 * 4 + 1];
    var m02 = m[0 * 4 + 2];
    var m03 = m[0 * 4 + 3];
    var m10 = m[1 * 4 + 0];
    var m11 = m[1 * 4 + 1];
    var m12 = m[1 * 4 + 2];
    var m13 = m[1 * 4 + 3];
    var m20 = m[2 * 4 + 0];
    var m21 = m[2 * 4 + 1];
    var m22 = m[2 * 4 + 2];
    var m23 = m[2 * 4 + 3];
    var m30 = m[3 * 4 + 0];
    var m31 = m[3 * 4 + 1];
    var m32 = m[3 * 4 + 2];
    var m33 = m[3 * 4 + 3];
    var tmp_0  = m22 * m33;
    var tmp_1  = m32 * m23;
    var tmp_2  = m12 * m33;
    var tmp_3  = m32 * m13;
    var tmp_4  = m12 * m23;
    var tmp_5  = m22 * m13;
    var tmp_6  = m02 * m33;
    var tmp_7  = m32 * m03;
    var tmp_8  = m02 * m23;
    var tmp_9  = m22 * m03;
    var tmp_10 = m02 * m13;
    var tmp_11 = m12 * m03;

    var t0 = (tmp_0 * m11 + tmp_3 * m21 + tmp_4 * m31) -
        (tmp_1 * m11 + tmp_2 * m21 + tmp_5 * m31);
    var t1 = (tmp_1 * m01 + tmp_6 * m21 + tmp_9 * m31) -
        (tmp_0 * m01 + tmp_7 * m21 + tmp_8 * m31);
    var t2 = (tmp_2 * m01 + tmp_7 * m11 + tmp_10 * m31) -
        (tmp_3 * m01 + tmp_6 * m11 + tmp_11 * m31);
    var t3 = (tmp_5 * m01 + tmp_8 * m11 + tmp_11 * m21) -
        (tmp_4 * m01 + tmp_9 * m11 + tmp_10 * m21);

    return 1.0 / (m00 * t0 + m10 * t1 + m20 * t2 + m30 * t3);
  },
  
  decompose(mat) {
    let sx = norm(mat.slice(0, 3));
    const sy = norm(mat.slice(4, 7));
    const sz = norm(mat.slice(8, 11));

    
    const det = this.determinate(mat);
    if (det < 0) {
      sx = -sx;
    }
    const translation = []
    const scale = []
    const Rmatrix = [...mat]
    translation[0] = mat[12];
    translation[1] = mat[13];
    translation[2] = mat[14];


    

    const invSX = 1 / sx;
    const invSY = 1 / sy;
    const invSZ = 1 / sz;

    Rmatrix[0] *= invSX;
    Rmatrix[1] *= invSX;
    Rmatrix[2] *= invSX;

    Rmatrix[4] *= invSY;
    Rmatrix[5] *= invSY;
    Rmatrix[6] *= invSY;

    Rmatrix[8] *= invSZ;
    Rmatrix[9] *= invSZ;
    Rmatrix[10] *= invSZ;



    scale[0] = sx;
    scale[1] = sy;
    scale[2] = sz;
    return {translation, Rmatrix, scale }
  }
};


module.exports = m4;


/***/ }),

/***/ "./node_modules/math/src/vec3.js":
/*!***************************************!*\
  !*** ./node_modules/math/src/vec3.js ***!
  \***************************************/
/***/ ((module) => {

const dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
const cross = (a, b) => [
  a[1] * b[2] - b[1] * a[2],
  a[2] * b[0] - b[2] * a[0],
  a[0] * b[1] - b[0] * a[1],
];

const scale = (a, scalar) => [a[0] * scalar, a[1] * scalar, a[2] * scalar];
const sum = (a, b) => [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
const diff = (a, b) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
const norm = (a) => Math.sqrt(a[0] * a[0] + a[1] * a[1] + a[2] * a[2]);
const normSq = (a) => a[0] * a[0] + a[1] * a[1] + a[2] * a[2];
const normalize = (a) => {
  const length = norm(a);
  if (length === 0) return a;
  return [a[0] / length, a[1] / length, a[2] / length];
};
const isNull = (a) => a[0] * a[0] + a[1] * a[1] + a[2] * a[2] === 0;

const isEqual = (a, b) => a[0] == b[0] && a[1] == b[1] && a[2] == b[2];

module.exports = {
  sum,
  diff,
  scale,
  dot,
  cross,
  norm,
  normSq,
  normalize,
  isEqual,
  isNull,
};


/***/ }),

/***/ "./ragdollDemo/Ragdoll.js":
/*!********************************!*\
  !*** ./ragdollDemo/Ragdoll.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Ragdoll)
/* harmony export */ });
/* harmony import */ var _src_physics_constraints__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/physics/constraints */ "./src/physics/constraints.js");
/* harmony import */ var _src_physics_RigidBody__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/physics/RigidBody */ "./src/physics/RigidBody.js");
/* harmony import */ var math__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! math */ "./node_modules/math/index.js");
/* harmony import */ var math__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(math__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_physics_collider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/physics/collider */ "./src/physics/collider.js");




class Ragdoll{
    constructor(pos = [0,0,0]){
        
        const body = new _src_physics_RigidBody__WEBPACK_IMPORTED_MODULE_1__.RigidBody(new _src_physics_collider__WEBPACK_IMPORTED_MODULE_3__.Box(1, 2, 0.5));
        const leftHand = new _src_physics_RigidBody__WEBPACK_IMPORTED_MODULE_1__.RigidBody(new _src_physics_collider__WEBPACK_IMPORTED_MODULE_3__.Cylinder(0.4, 2, 0.5));
        const rightHand = new _src_physics_RigidBody__WEBPACK_IMPORTED_MODULE_1__.RigidBody(new _src_physics_collider__WEBPACK_IMPORTED_MODULE_3__.Cylinder(0.4, 2, 0.5));
        const leftLeg = new _src_physics_RigidBody__WEBPACK_IMPORTED_MODULE_1__.RigidBody(new _src_physics_collider__WEBPACK_IMPORTED_MODULE_3__.Cylinder(0.4, 2, 0.5));
        const rightLeg = new _src_physics_RigidBody__WEBPACK_IMPORTED_MODULE_1__.RigidBody(new _src_physics_collider__WEBPACK_IMPORTED_MODULE_3__.Cylinder(0.4, 2, 0.5));
        const head = new _src_physics_RigidBody__WEBPACK_IMPORTED_MODULE_1__.RigidBody(new _src_physics_collider__WEBPACK_IMPORTED_MODULE_3__.Sphere(1, 1, 1));
        const constraints = [
          new _src_physics_constraints__WEBPACK_IMPORTED_MODULE_0__.Joint(body, head, [0, 1.5, 0], [0, -1, 0], 0),
          new _src_physics_constraints__WEBPACK_IMPORTED_MODULE_0__.Joint(body, leftHand, [1, 1, 0], [0, 1, 0], 0),
          new _src_physics_constraints__WEBPACK_IMPORTED_MODULE_0__.Joint(body, rightHand, [-1, 1, 0], [0, 1, 0], 0),
          new _src_physics_constraints__WEBPACK_IMPORTED_MODULE_0__.Joint(body, rightLeg, [-0.5, -1.2, 0], [0, 1.2, 0], 0),
          new _src_physics_constraints__WEBPACK_IMPORTED_MODULE_0__.Joint(body, leftLeg, [0.5, -1.2, 0], [0, 1.2, 0], 0),
        ];
        const positionConstraints = [
          new _src_physics_constraints__WEBPACK_IMPORTED_MODULE_0__.JointPositionConstraint(body, head, [0, 1.5, 0], [0, -1, 0], 0.2),
          new _src_physics_constraints__WEBPACK_IMPORTED_MODULE_0__.JointPositionConstraint(body, leftHand, [1, 1, 0], [0, 1, 0], 0.2),
          new _src_physics_constraints__WEBPACK_IMPORTED_MODULE_0__.JointPositionConstraint(body, rightHand, [-1, 1, 0], [0, 1, 0], 0.2),
          new _src_physics_constraints__WEBPACK_IMPORTED_MODULE_0__.JointPositionConstraint(
            body,
            rightLeg,
            [-0.5, -1.2, 0],
            [0, 1.2, 0],
            0.2
          ),
          new _src_physics_constraints__WEBPACK_IMPORTED_MODULE_0__.JointPositionConstraint(
            body,
            leftLeg,
            [0.5, -1.2, 0],
            [0, 1.2, 0],
            0.2
          ),
        ];
        //positionConstraints.forEach(c =>c.treshold = 0.1)
        body.translate(pos);
      
        head.translate(math__WEBPACK_IMPORTED_MODULE_2__.vec3.sum(pos, [0, 2, 0]));
        leftHand.translate(math__WEBPACK_IMPORTED_MODULE_2__.vec3.sum(pos, [-3, 2, 0]));
        rightHand.translate(math__WEBPACK_IMPORTED_MODULE_2__.vec3.sum(pos, [3, 2, 0]));
        rightLeg.translate(math__WEBPACK_IMPORTED_MODULE_2__.vec3.sum(pos, [2, -2.5, 0]));
        leftLeg.translate(math__WEBPACK_IMPORTED_MODULE_2__.vec3.sum(pos, [-2, -2.5, 0]));
        positionConstraints.forEach((c) => (c.treshold = 0.05));
        this.parts = {body, leftHand, rightHand, rightLeg, leftLeg, head}
        this.constraints = constraints
        this.positionConstraints = positionConstraints
    }
}

/***/ }),

/***/ "./shader.js":
/*!*******************!*\
  !*** ./shader.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var graphics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphics */ "./node_modules/graphics/index.js");

const glsl = x=>x


const vert = glsl`#version 300 es
 
layout(location = 0) in vec4 a_position;
layout(location = 1) in vec3 a_normal;



uniform mat4 worldMatrix;
uniform mat4 worldViewProjection;
uniform vec3 u_lightWorldPosition;
uniform vec3 u_viewWorldPosition;
uniform mat4 worldInverseTranspose;
out vec3 v_normal;
out vec3 v_surfaceToLight;
out vec3 v_surfaceToView;

void main() {

    vec3 surfaceWorldPosition = (worldMatrix * a_position).xyz;
    v_surfaceToLight = u_lightWorldPosition - surfaceWorldPosition;
    v_surfaceToView = u_viewWorldPosition - surfaceWorldPosition;
    vec4 pos = worldViewProjection * a_position;
    gl_Position = pos;

   
    v_normal = mat3(worldInverseTranspose) * a_normal;
   
      
}`
const frag = glsl`#version 300 es
precision highp float;
 


in vec3 v_normal;
in vec3 v_surfaceToView;
in vec3 v_surfaceToLight;


//uniform sampler2D u_texture1;
uniform float u_shininess;
uniform vec4 u_color;
uniform vec4 u_ambientLight;
out vec4 outColor;


void main() {
  
  vec3 surfaceToLightDirection = normalize(v_surfaceToLight);
  vec3 surfaceToViewDirection = normalize(v_surfaceToView);
  vec3 halfVector = normalize(surfaceToLightDirection - surfaceToViewDirection);

  vec3 normal = normalize(v_normal);
  float light = dot(v_normal, surfaceToLightDirection);
  float specular = 0.0;
  if (light > 0.0) {
    specular = pow(dot(normal, halfVector), u_shininess);
  }
 
  outColor =  u_color;
  outColor.rgb *= light;
  
  outColor += u_ambientLight * 0.1;
  
}
`

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new graphics__WEBPACK_IMPORTED_MODULE_0__.ProgramInfo(vert, frag));

/***/ }),

/***/ "./src/misc/controllable.js":
/*!**********************************!*\
  !*** ./src/misc/controllable.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Controllable": () => (/* binding */ Controllable),
/* harmony export */   "Noclip": () => (/* binding */ Noclip),
/* harmony export */   "default": () => (/* binding */ Controllable)
/* harmony export */ });
/* harmony import */ var math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! math */ "./node_modules/math/index.js");
/* harmony import */ var math__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(math__WEBPACK_IMPORTED_MODULE_0__);

const KEYS = {
    'w' : 'moveForward',
    's' : 'moveBackward',
    'a' : 'moveLeft',
    'd' : 'moveRight',
    ' ' : 'moveUp'
}

class Controllable{
    constructor(rigidBody){

        this.rigidBody = rigidBody
        this.keyInput = null
        this.mouseInput = null
        this.rotationX = 0
        this.rotationY = 0
        this.deltaRY = 0
        this.camPos = [0,0,10]
        this.camRot = math__WEBPACK_IMPORTED_MODULE_0__.m3.identity()
        this.jumpReady = true
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
        const m = math__WEBPACK_IMPORTED_MODULE_0__.m3.yRotation(this.rotationY)
        this.rigidBody.rotate([0, -this.deltaRY,0])
        this.deltaRY = 0
        
        const pos = [...this.rigidBody.collider.pos]
        let _m = math__WEBPACK_IMPORTED_MODULE_0__.m4.translation(pos[0], pos[1]+3, pos[2])
        _m = math__WEBPACK_IMPORTED_MODULE_0__.m4.multiply(_m, math__WEBPACK_IMPORTED_MODULE_0__.m4.m3Tom4(this.rigidBody.collider.Rmatrix))
        _m = math__WEBPACK_IMPORTED_MODULE_0__.m4.xRotate(_m, this.rotationX)
        _m = math__WEBPACK_IMPORTED_MODULE_0__.m4.translate(_m, ...this.camPos)
        this.camMatrix = _m
     
    }
    getAbsoluteCamPos(){
        return math__WEBPACK_IMPORTED_MODULE_0__.vec3.sum(this.rigidBody.collider.pos, this.camPos)
    }
    move(dir){
        const m = math__WEBPACK_IMPORTED_MODULE_0__.m4.yRotation(this.rotationX)
        this.rigidBody.applyImpulse(dir, [0,0,0])
    }
    moveForward(){
        this.move([0,0, -1])
    }
    moveBackward(){
        this.move([0,0, 1])
    }
    moveLeft(){
        this.move([-1,0, 0])
    }
    moveRight(){
        this.move([1,0, 0])
    }
    moveUp(){
        if(this.jumpReady){
            this.move([0,10,0])
            this.jumpReady = false
            setTimeout(()=>this.jumpReady = true, 1000)
        }
        
    }
}
class Noclip{
    constructor(){
        this.keyInput = null
        this.mouseInput = null
        this.rotationX = 0
        this.rotationY = 0
        this.deltaRY = 0
        this.camPos = [0,0,10]
        this.camRot = math__WEBPACK_IMPORTED_MODULE_0__.m3.identity()
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
        
        this.camMatrix = math__WEBPACK_IMPORTED_MODULE_0__.m4.translation(...this.camPos)
        this.camMatrix = math__WEBPACK_IMPORTED_MODULE_0__.m4.xRotate(math__WEBPACK_IMPORTED_MODULE_0__.m4.yRotate(this.camMatrix, this.rotationY), this.rotationX)
     
    }
    move(dir){
        const m = math__WEBPACK_IMPORTED_MODULE_0__.m4.m4Tom3(this.camMatrix)
        this.camPos = math__WEBPACK_IMPORTED_MODULE_0__.vec3.sum(this.camPos, math__WEBPACK_IMPORTED_MODULE_0__.m3.transformPoint(m, dir))
    }
    moveForward(){
        this.move([0,0, -1])
    }
    moveBackward(){
        this.move([0,0, 1])
    }
    moveLeft(){
        this.move([-1,0, 0])
    }
    moveRight(){
        this.move([1,0, 0])
    }
    moveUp(){
        this.move([0,1, 0])
    }
}


/***/ }),

/***/ "./src/misc/keyInput.js":
/*!******************************!*\
  !*** ./src/misc/keyInput.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ KeyInput)
/* harmony export */ });
/* harmony import */ var _physics_eventEmitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../physics/eventEmitter */ "./src/physics/eventEmitter.js");


class KeyInput extends _physics_eventEmitter__WEBPACK_IMPORTED_MODULE_0__.EventEmitter {
  constructor() {
    super()
    this.keys = new Set();
  }
  logDown({ key }) {
    this.keys.add(key);
    this.emit("keydown", { key });
  }
  logUp({ key }) {
    this.keys.delete(key);
    this.emit("keyup", { key });
  }
  listen() {
    const logDown = this.logDown.bind(this);
    const logUp = this.logUp.bind(this);
    document.addEventListener("keydown", logDown);
    document.addEventListener("keyup", logUp);
    this.unsubsicribe = () => {
      document.removeEventListener("keydown", logDown);
      document.removeEventListener("keyup", logUp);
    };
  }
}


/***/ }),

/***/ "./src/misc/mouseInput.js":
/*!********************************!*\
  !*** ./src/misc/mouseInput.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MouseInput)
/* harmony export */ });
/* harmony import */ var _physics_eventEmitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../physics/eventEmitter */ "./src/physics/eventEmitter.js");


class MouseInput extends _physics_eventEmitter__WEBPACK_IMPORTED_MODULE_0__.EventEmitter {
  constructor() {
    super();
    this.lastX = 0;
    this.lastY = 0;
    this.enable = false;
    this.moves = []
  }
  logMove({ offsetX, offsetY }) {
    const deltaX = offsetX - this.lastX;
    this.lastX = offsetX;
    const deltaY = offsetY - this.lastY;
    this.lastY = offsetY;
    this.emit("move", [deltaX, deltaY]);
    this.moves.push([deltaX, deltaY])
  }
  listen() {
    const logMove = this.logMove.bind(this);
    const _ = function (e) {
      if (this.enable) logMove(e);
    }.bind(this);
    const down = function ({ offsetX, offsetY }) {
      this.lastX = offsetX;
      this.lastY = offsetY;
      this.enable = true;
    }.bind(this);
    const up = function () {
      this.enable = false;
    }.bind(this);

    document.addEventListener("mousemove", _);
    document.addEventListener("mousedown", down);
    document.addEventListener("mouseup", up);
    this.unsubscribe = () => {
      document.removeEventListener("mousemove", _);
      document.removeEventListener("mousedown", down);
      document.removeEventListener("mouseup", up);
    };
  }
}


/***/ }),

/***/ "./src/physics/RigidBody.js":
/*!**********************************!*\
  !*** ./src/physics/RigidBody.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Player": () => (/* binding */ Player),
/* harmony export */   "RigidBody": () => (/* binding */ RigidBody)
/* harmony export */ });
/* harmony import */ var _eventEmitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eventEmitter */ "./src/physics/eventEmitter.js");
/* harmony import */ var math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! math */ "./node_modules/math/index.js");
/* harmony import */ var math__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(math__WEBPACK_IMPORTED_MODULE_1__);


const { cross, scale, norm, sum, diff, normalize } = math__WEBPACK_IMPORTED_MODULE_1__.vec3;
const prec = 0.0001;
const stopTreshold = 0.005;
class RigidBody extends _eventEmitter__WEBPACK_IMPORTED_MODULE_0__.EventEmitter {
  static config = {
    treshold : 0.005,
    precision : 0.0001
  }
  static setTreshold(treshold){
    RigidBody.config.treshold = treshold
  }
  constructor(collider) {
    super();
    this.DOF = [1, 1, 1, 1, 1, 1];
    this.static = false;
    this.collider = collider;
    this.mass = 1;
    this.inverseMass = 1 / this.mass;
    this.velocity = [0, 0, 0];
    this.pseudoVelocity = [0, 0, 0];
    this.pseudoAngularV = [0, 0, 0];
    this.acceleration = [0, 0, 0];
    this.angularV = [0, 0, 0];
    this.inverseInertia = collider.getInverseInertiaTensor(this.mass);
    this.id = 1;
    this.friction = 0.5;
    this.BVlink;
    this.oldVelocity = null;
    this.group = null;
    this.needToUpdate = false
  }

  integrateRK4(dt) {
    const { acceleration, velocity, angularV } = this;
    const {treshold} = RigidBody.config
    const _translation = scale(
      sum(velocity, scale(acceleration, (2 / 3) * dt)),
      dt
    );
    const _rotation = scale(angularV, dt);
    const deltaVelocity = scale(acceleration, dt);

    if (norm(_translation) > treshold) this.translate(_translation);

    if (norm(_rotation) > treshold) this.rotate(_rotation);
    this.velocity = sum(velocity, deltaVelocity);
  }
  integratePseudoVelocities(dt) {
    const {treshold} = RigidBody.config
    const translation = scale(this.pseudoVelocity, dt);

    const rotation = scale(this.pseudoAngularV, dt);
    if (norm(translation) > treshold) this.translate(translation);

    if (norm(rotation) > treshold) this.rotate(rotation);

    this.pseudoVelocity = [0, 0, 0];
    this.pseudoAngularV = [0, 0, 0];
  }
  addPseudoVelocity(v) {
    this.pseudoVelocity = sum(this.pseudoVelocity, v);
  }
  addPseudoAngularV(v) {
    this.pseudoAngularV = sum(this.pseudoAngularV, v);
  }
  integrateVelocities(dt) {
    const {treshold} = RigidBody.config
    const translation = scale(this.velocity, dt);
    if (norm(translation) > treshold) this.translate(translation);
    const rotation = scale(this.angularV, dt);
    if (norm(rotation) > treshold) this.rotate(rotation);
  }
  integrateForces(dt) {
    let deltaSpeed = scale(this.acceleration, dt);

    this.velocity = sum(this.velocity, deltaSpeed);
  }
  updateInverseInertia() {
    this.inverseInertia = this.collider.getInverseInertiaTensor(this.mass);
  }
  getItensor() {
    return this.collider.getInverseInertiaTensor(this.mass);
  }
  setMass(mass) {
    this.mass = mass;
    this.inverseMass = 1 / this.mass;
  }
  translate(translation) {
    this.collider.translate(translation);

    this.needToUpdate = true
    this.emit("update");
  }
  rotate(rotation) {
    this.collider.rotate(rotation);
    this.needToUpdate = true
    this.emit("update");
  }

  applyImpulse(impulse, point) {
    if (this.static) return;
    this.velocity = sum(this.velocity, scale(impulse, this.inverseMass));
    const angularImpulse = math__WEBPACK_IMPORTED_MODULE_1__.m3.transformPoint(
      this.inverseInertia,
      cross(point, impulse)
    );
    this.angularV = sum(this.angularV, angularImpulse);
  }
  applyPseudoImpulse(impulse, point) {
    if (this.static) return;
    this.pseudoVelocity = sum(
      this.pseudoVelocity,
      scale(impulse, this.inverseMass)
    );
    const angularImpulse = math__WEBPACK_IMPORTED_MODULE_1__.m3.transformPoint(
      this.inverseInertia,
      cross(point, impulse)
    );
    this.pseudoAngularV = sum(this.pseudoAngularV, angularImpulse);
  }
  addVelocity(v) {
    this.velocity = sum(this.velocity, v);
  }
  addAngularV(v) {
    this.angularV = sum(this.angularV, v);
  }
  addAcceleration(v) {
    this.acceleration = sum(this.acceleration, v);
  }
  applyAngularImpulse(radius, axis, value) {
    const dir = normalize([
      axis[1] + axis[2],
      axis[2] - axis[0],
      -axis[0] - axis[1],
    ]);
    const rad = vector.cross(dir, axis);
    const globalDir = scale(dir, value);
    const globalRad = scale(rad, radius);

    this.applyImpulse(globalDir, globalRad);
  }
  getExpandedAABB() {
    const {precision} = RigidBody.config
    const aabb = this.collider.getAABB();
    const velocity = this.velocity;
    const tr = [precision, precision, precision];
    aabb.min = diff(aabb.min, tr);
    aabb.max = sum(aabb.max, tr);

    /*if(velocity[0] > 10) aabb.max[0] += velocity[0]
      if(velocity[1] > 10) aabb.max[1] += velocity[1]
      if(velocity[2] > 10) aabb.max[2] += velocity[2]
      if(velocity[0] < -10) aabb.min[0] += velocity[0]
      if(velocity[1] < -10) aabb.min[1] += velocity[1]
      if(velocity[2] < -10) aabb.min[2] += velocity[2]*/
    return aabb;
  }
  getAABB() {
    return this.collider.getAABB();
  }
}

class Player extends RigidBody {
  constructor() {
    super(...arguments);
    this.friction = 0.3;
    this.DOF = [1, 1, 1, 0, 0, 0];
  }
  applyImpulse(impulse, point) {
    this.velocity = sum(this.velocity, scale(impulse, this.inverseMass));
  }
  applyPseudoImpulse(impulse) {
    this.pseudoVelocity = sum(
      this.pseudoVelocity,
      scale(impulse, this.inverseMass)
    );
  }
}



/***/ }),

/***/ "./src/physics/Simulation.js":
/*!***********************************!*\
  !*** ./src/physics/Simulation.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Simulation)
/* harmony export */ });
/* harmony import */ var _Tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tree */ "./src/physics/Tree.js");
/* harmony import */ var math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! math */ "./node_modules/math/index.js");
/* harmony import */ var math__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(math__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _gjk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gjk */ "./src/physics/gjk.js");
/* harmony import */ var _manifold__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./manifold */ "./src/physics/manifold.js");
/* harmony import */ var _System__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./System */ "./src/physics/System.js");
/* harmony import */ var _constraints__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constraints */ "./src/physics/constraints.js");










const sameGroup = (body1, body2) => {
  if (!body1.group) return;
  if (!body2.group) return;
  return body1.group === body2.group;
};
const pairHash = (x, y) =>
  x === Math.max(x, y) ? x * x + x + y : y * y + x + y;

class Simulation {
  constructor() {
    this.objects = [];
    this.bvh = new _Tree__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this.staticBvh = new _Tree__WEBPACK_IMPORTED_MODULE_0__["default"]()
    this.collisions = [];
    this.constraints = new Map();
    this.positionConstraints = new Map();
    this.collisionManifolds = new Map();
    this.lastId = 1;
  }
  addObject(object) {
    const aabb = object.getExpandedAABB();

    const leaf = this.bvh.insertLeaf(aabb, object);
    object.BVlink = leaf;
    object.id = this.lastId;
    this.lastId++;
    object.on("update", () => this.updateObjectAABB.call(this, object));

    this.objects.push(object);
  }
  addStaticObject(object){
    const aabb = object.getExpandedAABB();

    const leaf = this.staticBvh.insertLeaf(aabb, object);
    object.BVlink = leaf;
    object.id = this.lastId;
    this.lastId++;
    this.objects.push(object);
    object.on("update", () => this.updateObjectAABB.call(this, object));
  }
  addConstraints(constraints, name) {
    this.constraints.set(name, [...constraints])
  }
  addPositionConstraints(constraints, name) {
    this.positionConstraints.set(name, [...constraints])
  }
  updateObjectAABB(object) {
    const newAABB = object.getAABB();

    this.bvh.removeLeaf(object.BVlink);
    const leaf = this.bvh.insertLeaf(newAABB, object);
    object.BVlink = leaf;
  }
  removeObject(object) {
    this.bvh.removeLeaf(object.BVlink);
    this.objects = this.objects.filter((el) => el === object);
  }

  updateCollisions() {
    const { collisionManifolds } = this;
    for (const [hash, manifold] of collisionManifolds) {
      manifold.update();
      if (!manifold.keep) collisionManifolds.delete(hash);
    }
    for (let i = 0, n = this.objects.length; i < n; i++) {
      const object = this.objects[i];
      if (object.static) continue;
      const intersects = this.bvh.getCollisions(object.BVlink);
      const intersectWithStatics = this.staticBvh.getCollisions(object.BVlink)
      const cols = [...intersectWithStatics,...intersects]
      object.BVlink.isChecked = true;
      if (cols.length != 0)
        for (let j = 0, n = cols.length; j < n; j++) {
          if (sameGroup(object, cols[j])) continue;
          const hash = pairHash(object.id, cols[j].id);
          let manifold = this.collisionManifolds.get(hash);
          if (manifold) continue;
          const contacts = (0,_gjk__WEBPACK_IMPORTED_MODULE_2__.gjk)(object, cols[j]);

          if (contacts) {
            manifold = new _manifold__WEBPACK_IMPORTED_MODULE_3__["default"](...contacts);

            this.collisionManifolds.set(hash, manifold);
          }
        }
    }

    this.bvh.setUnchecked();
    this.staticBvh.setUnchecked()
  }
  tick(deltaTime) {
    this.updateCollisions();
    let manifolds = this.collisionManifolds;
    for (let i = 0, n = this.objects.length; i < n; i++) {
      this.objects[i].integrateForces(deltaTime);
    }
    const system = new _System__WEBPACK_IMPORTED_MODULE_4__["default"]();
    const frictionSystem = new _System__WEBPACK_IMPORTED_MODULE_4__["default"]();
    const contactConstraints = [];
    const frictionConstraints = [];
    for (let [key, manifold] of manifolds) {
      const useVelocityBias = manifold.contacts.length <2;

      manifold.contacts.forEach((c, _i) => {
        const { body1, body2, raLocal, rbLocal, ra, rb, i, j, penDepth, n } = c;
        const constraint = new _constraints__WEBPACK_IMPORTED_MODULE_5__.ContactConstraint(
          body1,
          body2,
          n,
          ra,
          rb,
          raLocal,
          rbLocal,
          0,
          0.00005,
          penDepth,
          i,
          j
        );
        if(manifold.lambdas) constraint.prevLambda = manifold.lambdas[_i]
        const fConstraint1 = new _constraints__WEBPACK_IMPORTED_MODULE_5__.FrictionConstraint(
          body1,
          body2,
          math__WEBPACK_IMPORTED_MODULE_1__.vec3.scale(i, -1),
          ra,
          rb,
          raLocal,
          rbLocal,
          0,
          -body1.friction - body2.friction,
          body1.friction + body2.friction,
          null
        );
        const fConstraint2 = new _constraints__WEBPACK_IMPORTED_MODULE_5__.FrictionConstraint(
          body1,
          body2,
          math__WEBPACK_IMPORTED_MODULE_1__.vec3.scale(j, -1),
          ra,
          rb,
          raLocal,
          rbLocal,
          0,
          -body1.friction - body2.friction,
          body1.friction + body2.friction,
          null
        );

        if (true) {
          constraint.biasFactor = 0.125;
        }
        
        contactConstraints.push(constraint);
        frictionConstraints.push(fConstraint1, fConstraint2);
      });
    }
    system.addConstraint(contactConstraints);
    for(let [name, constraints] of this.constraints){
      system.addConstraint(constraints)
    }

    system.updateEquations(deltaTime)
    frictionSystem.addConstraint(frictionConstraints);
  
    frictionSystem.updateEquations(deltaTime)
    system.generateSystem(deltaTime);
    const lambda = system.solvePGS(deltaTime);
    const len = frictionConstraints.length/2
    for (let i = 0; i < len; i++) {
      frictionConstraints[2 * i].lambdaMin *= lambda[i];
      frictionConstraints[2 * i].lambdaMax *= lambda[i];
      frictionConstraints[2 * i + 1].lambdaMin *= lambda[i];
      frictionConstraints[2 * i + 1].lambdaMax *= lambda[i];
    }
    frictionSystem.generateSystem(deltaTime);
    frictionSystem.solvePGS(deltaTime);
   
    for (let i = 0, n = this.objects.length; i < n; i++) {
      this.objects[i].integrateVelocities(deltaTime);
    }
    this.objects.forEach((object) => object.updateInverseInertia());
    
    
    let ndx = 0
    for(const [key, manifold] of this.collisionManifolds){
      manifold.lambdas = []
      manifold.contacts.forEach(c=>{
        manifold.lambdas.push(lambda[ndx])
        ndx++
      })
    } 
    const positionSystem = new _System__WEBPACK_IMPORTED_MODULE_4__["default"]();
    const positionConstraints = [];

    for (const [key, manifold] of manifolds) {
      const { contacts } = manifold;
      if (contacts.length > 1) {
        positionConstraints.push(
          ...contacts.map((c) => {
            const {
              body1,
              body2,
              raLocal,
              rbLocal,
              ra,
              rb,
              i,
              j,
              penDepth,
              n,
            } = c;
            const constraint = new _constraints__WEBPACK_IMPORTED_MODULE_5__.PositionConstraint(
              body1,
              body2,
              n,
              ra,
              rb,
              raLocal,
              rbLocal,
              0.1,
              0.0001,
              penDepth
            );
           
            return constraint
          })
        );
      }
    }
    positionSystem.addConstraint(positionConstraints)
    for(let [name, constraints] of this.positionConstraints){
      positionSystem.addConstraint(constraints)
    }
    positionSystem.updateEquations(deltaTime)
    positionSystem.generateSystem(deltaTime);
    
    positionSystem.solvePGS(deltaTime)
    for (let i = 0, n = this.objects.length; i < n; i++) {
      this.objects[i].integratePseudoVelocities(deltaTime);
    }
    this.objects.forEach((object) => object.updateInverseInertia());
  }
}


/***/ }),

/***/ "./src/physics/System.js":
/*!*******************************!*\
  !*** ./src/physics/System.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ System)
/* harmony export */ });
/* harmony import */ var math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! math */ "./node_modules/math/index.js");
/* harmony import */ var math__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(math__WEBPACK_IMPORTED_MODULE_0__);


const vec6 = {
  dot(a, b){
    return  a[0] * b[0] +
    a[1] * b[1] + 
    a[2] * b[2] +
    a[3] * b[3] +
    a[4] * b[4] +
    a[5] * b[5]
     
    
  },
  scale(a, fac){
    return [a[0] * fac, a[1] * fac, a[2] * fac, a[3] * fac, a[4]*fac, a[5]*fac]
  },
  sum(a, b){
    return [
      a[0] + b[0],
      a[1] + b[1],
      a[2] + b[2],
      a[3] + b[3],
      a[4] + b[4],
      a[5] + b[5]
    ]
  },
  fromVec3(a, b){
    return [
      ...a, ...b
    ]
  }

}
const norm = v => Math.sqrt(v.reduce((acc,el) => acc+=el*el, 0))
class System {
  constructor(constraints) {
    this.constraints = [];

    

  }
  addConstraint(constraints){
    this.constraints.push(...constraints)
    
  }
  generateBodyMapping(){
    const constraints = this.constraints
    const n = constraints.length
    const bodiesMap = new Map()
    const Jmap = []
    let counter = 0
    for(let i = 0; i < n; i++){
      const c = constraints[i]
      let bodyIndex1 = bodiesMap.get(c.body1.id)
      if(bodyIndex1 === undefined){
        bodyIndex1 = counter++
        bodiesMap.set(c.body1.id, bodyIndex1)
      }
      let bodyIndex2 = bodiesMap.get(c.body2.id)
      if(bodyIndex2 === undefined){
        bodyIndex2 = counter++
        bodiesMap.set(c.body2.id, bodyIndex2)
      }
      
      Jmap.push(bodyIndex1, bodyIndex2)
    }
    
    this.bodiesMap = bodiesMap
    this.Jmap = Jmap
  }
  generatePseudoVelVector() {}
  generateSystem(deltaTime) {
   
    //Numerating bodies
    this.generateBodyMapping()


  }
  //J * Vel
  
  solvePGS(deltaTime){

    
    const {Jmap, bodiesMap, constraints} = this
    const numBodies = bodiesMap.size
    const n = constraints.length
    const d = []
    
    const lambda0 = new Array(n).fill(0)
    for(let i = 0; i < 0; i++){
      if(constraints[i].prevLambda) lambda0[i] = constraints[i].prevLambda
    }

    //BJlambda
    
    const Bl = new Array(numBodies).fill([0,0,0,0,0,0])
    for(let i = 0; i < n; i++){
      const b1 = Jmap[i * 2 ]
      const b2 = Jmap[i * 2 + 1] 
    
     
      
      Bl[b1] = vec6.sum(vec6.scale(constraints[i].B[0], lambda0[i]), Bl[b1])
      
      
      Bl[b2] = vec6.sum(vec6.scale(constraints[i].B[1], lambda0[i]), Bl[b2])
    
      
    }
  
    //PGS
 
    
    const lambda = [...lambda0]
    for(let i = 0; i< n; i++){
      d.push(constraints[i].effMass)
    }
    let flag = true
    let numIter = 25

    const deltaLambda = new Array(n).fill(0)
    while(numIter > 0 ){
      for(let i = 0; i < n; i++){
        const c = constraints[i]
        const J = c._J
        const b1 = Jmap[i * 2 ]
        const b2 = Jmap[i * 2 + 1]
       
        deltaLambda[i] = (c.bias - vec6.dot(J[0], Bl[b1]) - vec6.dot(J[1], Bl[b2])) / d[i]
        
        lambda0[i] = lambda[i]
        lambda[i] = Math.max(c.lambdaMin, Math.min(lambda0[i] + deltaLambda[i], c.lambdaMax))
        
        deltaLambda[i] = lambda[i] - lambda0[i]
        
        Bl[b1] = vec6.sum(Bl[b1], vec6.scale(c.B[0], deltaLambda[i]))
        Bl[b2] = vec6.sum(Bl[b2], vec6.scale(c.B[1], deltaLambda[i]))
      
      }
      
      numIter--
    }
   
    for(let i = 0; i < n; i++){
      constraints[i].applyResolvingImpulse(lambda[i])
    }
    return lambda
  }
  updateEquations(deltaTime){
    const {constraints} = this
    const n = constraints.length
    for(let i = 0; i < n; i ++){
      constraints[i].updateLeftPart(deltaTime)
      constraints[i].updateRightPart(deltaTime)
    }
  }
  applyResolvingImpulses(lambda) {
    for (let i = 0, n = this.constraints.length; i < n; i++) {
      this.constraints[i].applyResolvingImpulse(lambda[i]);
    }
  }
  applyResolvingPseudoImpulses(lambda) {
    for (let i = 0, n = this.constraints.length; i < n; i++) {
      this.constraints[i].applyResolvingPseudoImpulse(lambda[i]);
    }
  }

}


/***/ }),

/***/ "./src/physics/Tree.js":
/*!*****************************!*\
  !*** ./src/physics/Tree.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Tree)
/* harmony export */ });
/* harmony import */ var math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! math */ "./node_modules/math/index.js");
/* harmony import */ var math__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(math__WEBPACK_IMPORTED_MODULE_0__);

const getBoundAabb = (aabb1, aabb2) => {
  if (!aabb1 || !aabb2) {
    return 0;
  }
  const x1 = aabb1.min[0] < aabb2.min[0] ? aabb1.min[0] : aabb2.min[0];
  const x2 = aabb1.max[0] > aabb2.max[0] ? aabb1.max[0] : aabb2.max[0];
  const y1 = aabb1.min[1] < aabb2.min[1] ? aabb1.min[1] : aabb2.min[1];
  const y2 = aabb1.max[1] > aabb2.max[1] ? aabb1.max[1] : aabb2.max[1];
  const z1 = aabb1.min[2] < aabb2.min[2] ? aabb1.min[2] : aabb2.min[2];
  const z2 = aabb1.max[2] > aabb2.max[2] ? aabb1.max[2] : aabb2.max[2];
  return new math__WEBPACK_IMPORTED_MODULE_0__.AABB([x1, y1, z1], [x2, y2, z2]);
};
const isCollide = (aabb1, aabb2) => {
  if (
    aabb1.min[0] <= aabb2.max[0] &&
    aabb1.max[0] >= aabb2.min[0] &&
    aabb1.min[1] <= aabb2.max[1] &&
    aabb1.max[1] >= aabb2.min[1] &&
    aabb1.min[2] <= aabb2.max[2] &&
    aabb1.max[2] >= aabb2.min[2]
  ) {
    return true;
  }
  return false;
};
const getSize = (aabb) => {
  const area =
    Math.abs(aabb.max[0] - aabb.min[0]) *
    Math.abs(aabb.max[1] - aabb.min[1]) *
    Math.abs(aabb.max[2] - aabb.min[2]);
  return area;
};
class Node {
  constructor(aabb, isLeaf, gameObject) {
    this.aabb = aabb;
    this.isLeaf = isLeaf;
    this.parent = null;

    this.gameObject = gameObject;
    this.isChecked = false;
  }
}
class Tree {
  constructor() {
    this.root = null;
    this.leafs = {};
    this.unusedIndexes = [];
    this.rebalanceDelay = 30
  }
  setUnchecked() {
    if(!this.root)return
    const stack = [this.root];
    
    while (stack.length != 0) {
      const node = stack.pop();
      
      if (node.isLeaf) {
        node.isChecked = false;
        continue;
      }
      if (node.child1) stack.push(node.child1);
      if (node.child2) stack.push(node.child2);
    }
  }
  getBestSibling(leaf) {
    let potential = this.root;
    while (!potential.isLeaf) {
      const size = getSize(potential.aabb);
      const combinedAABB = getBoundAabb(potential.aabb, leaf.aabb);
      const combinedSize = getSize(combinedAABB);
      let cost = combinedSize;
      let inherCost = combinedSize - size;

      let cost1;
      if (potential.child1.isLeaf) {
        cost1 = getSize(potential.child1.aabb) + inherCost;
      } else {
        cost1 =
          getSize(getBoundAabb(leaf.aabb, potential.child1.aabb)) -
          getSize(potential.child1.aabb) +
          inherCost;
      }

      let cost2;
      if (potential.child2.isLeaf) {
        cost2 = getSize(potential.child2.aabb) + inherCost;
      } else {
        cost2 =
          getSize(getBoundAabb(leaf.aabb, potential.child2.aabb)) -
          getSize(potential.child2.aabb) +
          inherCost;
      }
      if (cost < cost1 && cost < cost2) return potential;
      if (cost1 < cost2) {
        potential = potential.child1;
      } else potential = potential.child2;
    }
    return potential;
  }
  insertLeaf(aabb, gameObject) {
    const leaf = new Node(aabb, true, gameObject);
    if (this.root === null) {
      this.root = leaf;
      this.root.parent = null;
      return leaf;
    }

    const sibling = this.getBestSibling(leaf);
    const oldParent = sibling.parent;
    const newParent = new Node(leaf.aabb, false);
    newParent.parent = oldParent;

    newParent.aabb = getBoundAabb(leaf.aabb, sibling.aabb);

    if (oldParent) {
      if (oldParent.child1 === sibling) oldParent.child1 = newParent;
      else oldParent.child2 = newParent;

      newParent.child1 = sibling;
      newParent.child2 = leaf;

      sibling.parent = newParent;
      leaf.parent = newParent;
    } else {
      newParent.child1 = sibling;
      newParent.child2 = leaf;

      sibling.parent = newParent;
      leaf.parent = newParent;
      this.root = newParent;
    }
    let index = leaf.parent;
    
    while (index ) {
      index = this.rebalance(index);
      index = index.parent;
    }
    return leaf;
  }
  getCollisions(leaf) {
    const cols = [];
    const iter = (_node) => {
      if (!_node) {
        return;
      }
      if (_node === leaf) {
        return;
      }
      if (isCollide(leaf.aabb, _node.aabb)) {
        if (_node.isLeaf && !_node.isChecked) {
          cols.push(_node.gameObject);
        }
        iter(_node.child1);
        iter(_node.child2);
      }
    };

    iter(this.root);

    return cols;
  }
  removeLeaf(leaf) {
    if (leaf === this.root) {
      this.root = null;
      return;
    }
    const parent = leaf.parent;
    const grandParent = parent ? parent.parent : null;
    let sibling;
    if (parent.child1 === leaf) sibling = parent.child2;
    else sibling = parent.child1;

    if (grandParent) {
      if (grandParent.child1 === parent) grandParent.child1 = sibling;
      else grandParent.child2 = sibling;

      sibling.parent = grandParent;

      let index = grandParent;
      while (index) {
        index = this.rebalance(index);

        index = index.parent;
      }
    } else {
      this.root = sibling;
      sibling.parent = null;
    }
  }
  rebalance(leaf) {
    if (!leaf) {
      return null;
    }
    if (leaf.isLeaf || this.getHeight(leaf) < 2) {
      leaf.aabb = getBoundAabb(leaf.child1.aabb, leaf.child2.aabb);
      return leaf;
    }
    const child1 = leaf.child1;
    const child2 = leaf.child2;
    const balance = this.getHeight(child2) - this.getHeight(child1);

    if (balance > 1) {
      const child2Child1 = child2.child1;
      const child2Child2 = child2.child2;

      child2.child1 = leaf;
      child2.parent = leaf.parent;
      leaf.parent = child2;
      if (child2.parent != null) {
        if (child2.parent.child1 === leaf) {
          child2.parent.child1 = child2;
        } else {
          child2.parent.child2 = child2;
        }
      } else this.root = child2;
      if (this.getHeight(child2Child1) > this.getHeight(child2Child2)) {
        child2.child2 = child2Child1;
        leaf.child2 = child2Child2;
        child2Child2.parent = leaf;
      } else {
        leaf.child2 = child2Child1;
        child2Child1.parent = leaf;
      }
      leaf.aabb = getBoundAabb(leaf.child1.aabb, leaf.child2.aabb);
      child2.aabb = getBoundAabb(child2.child1.aabb, child2.child2.aabb);

      return child2;
    }
    if (balance < -1) {
      const child1Child1 = child1.child1;
      const child1Child2 = child1.child2;

      child1.child1 = leaf;
      child1.parent = leaf.parent;
      leaf.parent = child1;

      if (child1.parent != null) {
        if (child1.parent.child1 === leaf) {
          child1.parent.child1 = child1;
        } else {
          child1.parent.child2 = child1;
        }
      } else this.root = child1;
      if (this.getHeight(child1Child1) > this.getHeight(child1Child2)) {
        child1.child2 = child1Child1;
        leaf.child1 = child1Child2;
        child1Child2.parent = leaf;
      } else {
        child1.child2 = child1Child2;
        leaf.child1 = child1Child1;
        child1Child1.parent = leaf;
      }
      leaf.aabb = getBoundAabb(leaf.child1.aabb, leaf.child2.aabb);
      child1.aabb = getBoundAabb(child1.child1.aabb, child1.child2.aabb);

      return child1;
    }
    leaf.aabb = getBoundAabb(leaf.child1.aabb, leaf.child2.aabb);
    return leaf;
  }
  toArray(i) {
    const iter = (leaf, level) => {
      if (!leaf) {
        return null;
      }
      if (leaf.isLeaf) return leaf.objectLink.name;
      else return [iter(leaf.child1), iter(leaf.child2)];
    };
    if (!i) i = this.root;
    return iter(i);
  }
  /*getHeight(leaf) {
    const iter = (leaf, level) => {
      if (!leaf) {
        return level;
      }

      let h1 = iter(leaf.child1, level + 1);
      let h2 = iter(leaf.child2, level + 1);
      return h1 > h2 ? h1 : h2;
    };
    return iter(leaf, 1);
  }*/
  getHeight(root){
    if(!root) return 0
    let height = 0
    const queue = [root]
    while(queue.length != 0){
      height += 1
      const count = queue.length
      for(let i = 0; i < count; i++){
        const tmp = queue.pop()
        if(tmp.child1) queue.push(tmp.child1)
        if(tmp.child2) queue.push(tmp.child2)
      }
    }
    return height
  }
  getNodes() {
    const iter = (node, arr) => {
      arr.push(node);
      if (node.child1) iter(node.child1, arr);
      if (node.child2) iter(node.child2, arr);
    };
    const a = [];
    iter(this.root, a);
    return a;
  }
}


/***/ }),

/***/ "./src/physics/clipping.js":
/*!*********************************!*\
  !*** ./src/physics/clipping.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clipFaceVsFace": () => (/* binding */ clipFaceVsFace),
/* harmony export */   "clipPointVsPoly": () => (/* binding */ clipPointVsPoly),
/* harmony export */   "clipPolyVsPoly": () => (/* binding */ clipPolyVsPoly),
/* harmony export */   "clipSegmentVsPoly": () => (/* binding */ clipSegmentVsPoly),
/* harmony export */   "clipSegmentVsSegment": () => (/* binding */ clipSegmentVsSegment),
/* harmony export */   "computeIntersection": () => (/* binding */ computeIntersection),
/* harmony export */   "isInClockwise": () => (/* binding */ isInClockwise),
/* harmony export */   "isInside": () => (/* binding */ isInside)
/* harmony export */ });
const isInside = (p1, p2, q) => {
  const R = (p2[0] - p1[0]) * (q[1] - p1[1]) - (p2[1] - p1[1]) * (q[0] - p1[0]);
  return R <= 0 + 0.001;
};

const dot = (a, b) => a[0] * b[0] + a[1] * b[1];

const isInClockwise = (points) => {
  if (points.length < 3) return 1;
  const [p1, p2, p3] = points;
  const det =
    p2[0] * p3[1] +
    p3[0] * p1[1] +
    p1[0] * p2[1] -
    p1[0] * p1[1] -
    p3[0] * p2[1] -
    p1[0] * p3[1];

  if (det < 0) return 1;
  return -1;
};

const computeIntersection = (p1, p2, p3, p4) => {
  if (p2[0] - p1[0] === 0) {
    const x = p1[0];

    const m2 = (p4[1] - p3[1]) / (p4[0] - p3[0]);
    const b2 = p3[1] - m2 * p3[0];

    const y = m2 * x + b2;
    return [x, y];
  }
  if (p4[0] - p3[0] === 0) {
    const x = p3[0];

    const m1 = (p2[1] - p1[1]) / (p2[0] - p1[0]);
    const b1 = p1[1] - m1 * p1[0];

    const y = m1 * x + b1;

    return [x, y];
  }
  const m1 = (p2[1] - p1[1]) / (p2[0] - p1[0]);
  const b1 = p1[1] - m1 * p1[0];

  const m2 = (p4[1] - p3[1]) / (p4[0] - p3[0]);
  const b2 = p3[1] - m2 * p3[0];

  const x = (b2 - b1) / (m1 - m2);

  const y = m1 * x + b1;

  return [x, y];
};

const clipPolyVsPoly = (A, B) => {
  let result = [...A];

  for (let i = 0, n = B.length; i < n; i++) {
    const next = [...result];
    result = [];
    const aEdge1 = B.at(i - 1);
    const aEdge2 = B.at(i);

    for (let j = 0, _n = next.length; j < _n; j++) {
      const bEdge1 = next.at(j - 1);
      const bEdge2 = next.at(j);

      if (isInside(aEdge1, aEdge2, bEdge2)) {
        if (!isInside(aEdge1, aEdge2, bEdge1)) {
          const intersection = computeIntersection(
            bEdge1,
            bEdge2,
            aEdge1,
            aEdge2
          );
          result.push(intersection);
        }
        result.push(bEdge2);
        continue;
      }
      if (isInside(aEdge1, aEdge2, bEdge1)) {
        const intersection = computeIntersection(
          bEdge1,
          bEdge2,
          aEdge1,
          aEdge2
        );
        result.push(intersection);
      }
    }
  }
  return result;
};

const lerp = (a, b, t) => a + (b - a) * t;

const clipSegmentVsSegment = (s1, s2) => {
  const [p1, p2] = s1
  const [p3, p4] = s2
  const top =
    (p4[0] - p3[0]) * (p1[1] - p3[1]) - (p4[1] - p3[1]) * (p1[0] - p3[0]);
  const bottom =
    (p4[1] - p3[1]) * (p2[0] - p1[0]) - (p4[0] - p3[0]) * (p2[1] - p1[1]);
  if (!bottom) return null;
  const t = top / bottom;
  if (t < 0 || t > 1) return null;
  return [lerp(p1[0], p2[0], t), lerp(p1[1], p2[1], t)];
};

const clipPointVsPoly = (point, vertices) => {
  const x = point[0];
  const y = point[1];

  let inside = false;
  for (let i = 0, j = vertices.length - 1; i < vertices.length; j = i++) {
    const xi = vertices[i][0],
      yi = vertices[i][1];
    const xj = vertices[j][0],
      yj = vertices[j][1];

    const intersect =
      yi > y != yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi;
    if (intersect) inside = !inside;
  }

  return inside;
};
const clipSegmentVsPoly = (segment, poly) => {
  const [p1, p2] = segment;
  const points = [];
  if (clipPointVsPoly(p1, poly)) points.push(p1);
  if (clipPointVsPoly(p2, poly)) points.push(p2);
  if (points.length > 1) return points;
  for (let i = 0, n = poly.length; i < n; i++) {
    const q1 = poly.at(i - 1);
    const q2 = poly.at(i);
    const intersection = clipSegmentVsSegment(p1, p2, q1, q2);
    if (intersection) points.push(intersection);
  }
  return points;
};


const faceIntersectionsMap = {
  'poly_poly' : clipPolyVsPoly,
  'segment_poly' : clipSegmentVsPoly,
  'poly_segment' : (poly, segment) => clipSegmentVsPoly(segment, poly),
  'segment_segment' :(s1, s2) => {
    const res = clipSegmentVsSegment(s1,s2)
    if(res) return [res]
    return []
  },
  'point_poly' : clipPointVsPoly,
  'poly_point' : (poly, point) => clipPointVsPoly(point, poly),
}
const getFaceType = (face) =>{
  if(face.length > 2) return 'poly'
  if(face.length === 2) return 'segment'
  return 'point'
}
const clipFaceVsFace = (face1, face2) =>{
  const types = `${getFaceType(face1)}_${getFaceType(face2)}`
  return faceIntersectionsMap[types](face1, face2) 
}




/***/ }),

/***/ "./src/physics/collider.js":
/*!*********************************!*\
  !*** ./src/physics/collider.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Box": () => (/* binding */ Box),
/* harmony export */   "Cylinder": () => (/* binding */ Cylinder),
/* harmony export */   "Sphere": () => (/* binding */ Sphere)
/* harmony export */ });
/* harmony import */ var math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! math */ "./node_modules/math/index.js");
/* harmony import */ var math__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(math__WEBPACK_IMPORTED_MODULE_0__);


const { scale, sum, diff, dot, normalize } = math__WEBPACK_IMPORTED_MODULE_0__.vec3;

const xAxis = [1, 0, 0];
const yAxis = [0, 1, 0];
const zAxis = [0, 0, 1];
const xAxisNegative = scale(xAxis, -1);
const yAxisNegative = scale(yAxis, -1);
const zAxisNegative = scale(zAxis, -1);

class Collider {
  constructor() {
    this.Rmatrix = math__WEBPACK_IMPORTED_MODULE_0__.m3.identity();
    this.RmatrixInverse = math__WEBPACK_IMPORTED_MODULE_0__.m3.identity();
    this.pos = [0, 0, 0];
  }
  translate(v) {
    this.pos = sum(this.pos, v);
  }
  setTranslation(translation) {
    this.pos = [...translation];
  }
  rotate(r) {
    this.Rmatrix = math__WEBPACK_IMPORTED_MODULE_0__.m3.xRotate(this.Rmatrix, r[0]);
    this.Rmatrix = math__WEBPACK_IMPORTED_MODULE_0__.m3.yRotate(this.Rmatrix, r[1]);
    this.Rmatrix = math__WEBPACK_IMPORTED_MODULE_0__.m3.zRotate(this.Rmatrix, r[2]);
    this.RmatrixInverse = math__WEBPACK_IMPORTED_MODULE_0__.m3.transpose(this.Rmatrix);
  }
  setRotation(r) {
    this.Rmatrix = math__WEBPACK_IMPORTED_MODULE_0__.m3.xRotation(r[0]);
    this.Rmatrix = math__WEBPACK_IMPORTED_MODULE_0__.m3.yRotate(this.Rmatrix, r[1]);
    this.Rmatrix = math__WEBPACK_IMPORTED_MODULE_0__.m3.zRotate(this.Rmatrix, r[2]);
    this.RmatrixInverse = math__WEBPACK_IMPORTED_MODULE_0__.m3.transpose(this.Rmatrix);
  }
  getAABB() {
    const maxX = this.support(xAxis)[0];
    const maxY = this.support(yAxis)[1];
    const maxZ = this.support(zAxis)[2];

    const minX = this.support(xAxisNegative)[0];
    const minY = this.support(yAxisNegative)[1];
    const minZ = this.support(zAxisNegative)[2];
    return new math__WEBPACK_IMPORTED_MODULE_0__.AABB([minX, minY, minZ], [maxX, maxY, maxZ]);
  }
  setRmatrix(matrix) {
    this.Rmatrix = [...matrix];

    this.RmatrixInverse = math__WEBPACK_IMPORTED_MODULE_0__.m3.transpose(matrix);
  }
  getM4() {
    const m = math__WEBPACK_IMPORTED_MODULE_0__.m4.m3Tom4(this.Rmatrix);
    m[12] = this.pos[0];
    m[13] = this.pos[1];
    m[14] = this.pos[2];
    m[15] = 1;
    return m;
  }
  localToGlobal(v) {
    let global = math__WEBPACK_IMPORTED_MODULE_0__.m3.transformPoint(this.Rmatrix, v);
    return sum(this.pos, global);
  }
  getClosestFace(normal) {}
  getInverseInertiaTensor(mass) {
    return new Array(9).fill(0);
  }
}

class Box extends Collider {
  constructor(a = 1, b = 1, c = 1) {
    super();
    this.min = [-a / 2, -b / 2, -c / 2];
    this.max = [a / 2, b / 2, c / 2];
    this.points = [
      [-1 / 2, -1 / 2, -1 / 2],
      [1 / 2, -1 / 2, -1 / 2],
      [1 / 2, -1 / 2, 1 / 2],
      [-1 / 2, -1 / 2, 1 / 2],
      [-1 / 2, 1 / 2, -1 / 2],
      [1 / 2, 1 / 2, -1 / 2],
      [1 / 2, 1 / 2, 1 / 2],
      [-1 / 2, 1 / 2, 1 / 2],
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

  getAABB() {
    const maxX = this.support(xAxis)[0];
    const maxY = this.support(yAxis)[1];
    const maxZ = this.support(zAxis)[2];

    const minX = this.support(xAxisNegative)[0];
    const minY = this.support(yAxisNegative)[1];
    const minZ = this.support(zAxisNegative)[2];
    return new math__WEBPACK_IMPORTED_MODULE_0__.AABB([minX, minY, minZ], [maxX, maxY, maxZ]);
  }

  support(dir) {
    const _dir = math__WEBPACK_IMPORTED_MODULE_0__.m3.transformPoint(this.RmatrixInverse, dir);

    const res = [0, 0, 0];

    res[0] = _dir[0] > 0 ? this.max[0] : this.min[0];
    res[1] = _dir[1] > 0 ? this.max[1] : this.min[1];
    res[2] = _dir[2] > 0 ? this.max[2] : this.min[2];

    const sup = math__WEBPACK_IMPORTED_MODULE_0__.m3.transformPoint(this.Rmatrix, res);

    return sum(sup, this.pos);
  }
  getInverseInertiaTensor(mass) {
    const i1 =
      (mass / 12) * (this.max[1] * this.max[1] + this.max[2] * this.max[2]);
    const i2 =
      (mass / 12) * (this.max[0] * this.max[0] + this.max[2] * this.max[2]);
    const i3 =
      (mass / 12) * (this.max[0] * this.max[0] + this.max[1] * this.max[1]);

    const m = math__WEBPACK_IMPORTED_MODULE_0__.m3.multiply(
      math__WEBPACK_IMPORTED_MODULE_0__.m3.multiply(this.RmatrixInverse, [1 / i1, 0, 0, 0, 1 / i2, 0, 0, 0, 1 / i3]),
      this.Rmatrix
    );

    return m;
  }
  getM4() {
    const m = math__WEBPACK_IMPORTED_MODULE_0__.m4.m3Tom4(this.Rmatrix);
    m[12] = this.pos[0];
    m[13] = this.pos[1];
    m[14] = this.pos[2];
    m[15] = 1;
    const scale = diff(this.max, this.min);
    return math__WEBPACK_IMPORTED_MODULE_0__.m4.scale(m, ...scale);
  }

  getClosestFaceByNormal(normal) {
    const { points, indices, Rmatrix } = this;
    const normals = this.normals.map((n) => math__WEBPACK_IMPORTED_MODULE_0__.m3.transformPoint(this.Rmatrix, n));
    let minDot = dot(normal, normals[0]);
    let index = 0;
    for (let i = 1, n = normals.length; i < n; i++) {
      //const _normal = m3.transformPoint(Rmatrix, normals[i])
      const _dot = dot(normals[i], normal);
      if (_dot < minDot) {
        minDot = _dot;
        index = i;
      }
    }
    const faceIndices = indices[index];
    const m = this.getM4();
    return [
      faceIndices.map((i) => math__WEBPACK_IMPORTED_MODULE_0__.m4.transformPoint(m, points[i])),
      normals[index],
    ];
  }
}
class Sphere extends Collider {
  constructor(radius = 1) {
    super();
    this.radius = radius;
    this.type = "sphere";
  }
  getAABB() {
    const { radius } = this;
    return new math__WEBPACK_IMPORTED_MODULE_0__.AABB(
      sum(this.pos, [-radius, -radius, -radius]),
      sum(this.pos, [radius, radius, radius])
    );
  }
  support(dir) {
    return sum(scale(normalize(dir), this.radius), this.pos);
  }
  getM4() {
    const m = math__WEBPACK_IMPORTED_MODULE_0__.m4.m3Tom4(this.Rmatrix);
    m[12] = this.pos[0];
    m[13] = this.pos[1];
    m[14] = this.pos[2];
    m[15] = 1;
    const { radius } = this;
    return math__WEBPACK_IMPORTED_MODULE_0__.m4.scale(m, radius, radius, radius);
  }
  getClosestFaceByNormal(normal) {
    const reverse = scale(normal, -1);
    return [[scale(reverse, this.radius)], reverse];
  }
  getInverseInertiaTensor(mass) {
    const { radius } = this;
    const m = [
      (2 * mass * radius * radius) / 5,
      0,
      0,
      0,
      (2 * mass * radius * radius) / 5,
      0,
      0,
      0,
      (2 * mass * radius * radius) / 5,
    ];
    return m;
  }
}

const numSegments = 6;
const segmentAngle = (2 * Math.PI) / numSegments;
const circlePoints = [...new Array(numSegments)].map((_, i) => [
  Math.cos(i * segmentAngle),
  0,
  Math.sin(i * segmentAngle),
]);

class Cylinder extends Collider {
  constructor( radius, height) {
    super();
    this.radius = radius;
    this.height = height;
  }
  support(dir) {
    const _dir = math__WEBPACK_IMPORTED_MODULE_0__.m3.transformPoint(this.RmatrixInverse, dir); //find support in model space

    const dir_xz = [_dir[0], 0, _dir[2]];
    const result = scale(normalize(dir_xz), this.radius);
    result[1] = _dir[1] > 0 ? this.height / 2 : -this.height / 2;

    return sum(math__WEBPACK_IMPORTED_MODULE_0__.m3.transformPoint(this.Rmatrix, result), this.pos); //convert support to world space
  }
  getM4() {
    const m = math__WEBPACK_IMPORTED_MODULE_0__.m4.m3Tom4(this.Rmatrix);
    m[12] = this.pos[0];
    m[13] = this.pos[1];
    m[14] = this.pos[2];
    m[15] = 1;
    const { radius, height } = this;
    return math__WEBPACK_IMPORTED_MODULE_0__.m4.scale(m, radius, height, radius);
  }
  getClosestFaceByNormal(normal) {
    const { radius, height, Rmatrix, RmatrixInverse } = this;
    const _normal = math__WEBPACK_IMPORTED_MODULE_0__.m3.transformPoint(RmatrixInverse, scale(normal, -1));
    const m = this.getM4()
    const cos = dot(_normal, [0, 1, 0]);
    const sign = Math.sign(cos);
    
    if (cos * sign < 0.707) {
      const localNormal = normalize([_normal[0], 0, _normal[2]]);
      const face = [
        math__WEBPACK_IMPORTED_MODULE_0__.m4.transformPoint(m, [_normal[0] , 0.5, _normal[2] ]),
        math__WEBPACK_IMPORTED_MODULE_0__.m4.transformPoint(m, [_normal[0], -0.5, _normal[2] ])
      ];

      return [face, math__WEBPACK_IMPORTED_MODULE_0__.m3.transformPoint(Rmatrix, localNormal)]
    }
    const localNormal = scale([0, 1, 0], sign);
    const face = circlePoints.map(p => math__WEBPACK_IMPORTED_MODULE_0__.m4.transformPoint(m, [p[0], sign * 0.5  , p[2] ]))
   
    return [face, math__WEBPACK_IMPORTED_MODULE_0__.m3.transformPoint(Rmatrix, localNormal)]
  }
  getInverseInertiaTensor(mass) {
    const { radius, height } = this;
    const i1 =
      mass / 12 * (3*radius*radius + height*height)
   
    const i3 =
      mass/2 *radius*radius

    const m = math__WEBPACK_IMPORTED_MODULE_0__.m3.multiply(
      math__WEBPACK_IMPORTED_MODULE_0__.m3.multiply(this.Rmatrix, [1/i1, 0, 0, 0, 1/i1, 0, 0, 0, 1/i3]),
      this.RmatrixInverse
    );

    return m;
  }
  getAABB() {
    const { radius, height } = this;
    return new math__WEBPACK_IMPORTED_MODULE_0__.AABB(
      sum(this.pos, [-radius, -height, -radius]),
      sum(this.pos, [radius, height, radius])
    );
  }
}



/***/ }),

/***/ "./src/physics/constraints.js":
/*!************************************!*\
  !*** ./src/physics/constraints.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Constraint": () => (/* binding */ Constraint),
/* harmony export */   "ContactConstraint": () => (/* binding */ ContactConstraint),
/* harmony export */   "FrictionConstraint": () => (/* binding */ FrictionConstraint),
/* harmony export */   "Joint": () => (/* binding */ Joint),
/* harmony export */   "JointPositionConstraint": () => (/* binding */ JointPositionConstraint),
/* harmony export */   "PositionConstraint": () => (/* binding */ PositionConstraint),
/* harmony export */   "RotationalConstraint": () => (/* binding */ RotationalConstraint)
/* harmony export */ });
/* harmony import */ var math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! math */ "./node_modules/math/index.js");
/* harmony import */ var math__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(math__WEBPACK_IMPORTED_MODULE_0__);


const { dot, cross, normalize, diff, scale, norm, sum, normSq } = math__WEBPACK_IMPORTED_MODULE_0__.vec3;
const clamp = (v, min, max) => {
  if (v > min) {
    if (v < max) return v;
    else return max;
  }
  return min;
};
class Constraint {
  constructor(
    body1,
    body2,
    n,
    ra,
    rb,
    raLocal,
    rbLocal,
    biasFactor = 0,
    lambdaMin = -Infinity,
    lambdaMax = Infinity,
    treshold = 0.000001
  ) {
    this.biasFactor = biasFactor;
    this.n = n;
    this.J = null;

    this.JM = null;
    this.B = null;
    this.body1 = body1;
    this.body2 = body2;
    this.ra = ra;
    this.rb = rb;
    this.raLocal = raLocal;
    this.rbLocal = rbLocal;
    this.treshold = treshold;
    this.lambdaAcc = 0;
    this.lambdaMin = lambdaMin;
    this.lambdaMax = lambdaMax;
    this.prevLambda = 0
  }
  updateLeftPart(deltaTime) {
    const { body1, body2, n, ra, rb } = this;
    const J = [scale(n, -1), cross(n, ra), n, cross(rb, n)];
    const dof1 = body1.DOF;
    const dof2 = body2.DOF;

    J[0][0] *= dof1[0];
    J[0][1] *= dof1[1];
    J[0][2] *= dof1[2];

    J[1][0] *= dof1[3];
    J[1][1] *= dof1[4];
    J[1][2] *= dof1[5];

    J[2][0] *= dof2[0];
    J[2][1] *= dof2[1];
    J[2][2] *= dof2[2];

    J[3][0] *= dof2[3];
    J[3][1] *= dof2[4];
    J[3][2] *= dof2[5];

    this.J = J;

    const I1 = body1.inverseInertia;
    const I2 = body2.inverseInertia;
    let M1 = body1.inverseMass;
    let M2 = body2.inverseMass;
    this.JM = [
      scale(this.J[0], M1),
      math__WEBPACK_IMPORTED_MODULE_0__.m3.transformPoint(I1, this.J[1]),
      scale(this.J[2], M2),
      math__WEBPACK_IMPORTED_MODULE_0__.m3.transformPoint(I2, this.J[3]),
    ];

    //JMJ* = JB;B = MJ*
    this._J = [
      [...this.J[0], ...this.J[1]],
      [...this.J[2], ...this.J[3]],
    ];
    this.B = [
      [...this.JM[0], ...this.JM[1]],
      [...this.JM[2], ...this.JM[3]],
    ];
    this.effMass =
      dot(J[0], this.JM[0]) +
      dot(this.JM[1], this.J[1]) +
      dot(J[2], this.JM[2]) +
      dot(this.JM[3], this.J[3]);
  }
  applyResolvingImpulse(lambda) {
    this.body1.applyImpulse(scale(this.J[0], lambda), this.ra);
    this.body2.applyImpulse(scale(this.J[2], lambda), this.rb);
  }
}

class ContactConstraint extends Constraint {
  constructor(
    body1,
    body2,
    n,
    ra,
    rb,
    raLocal,
    rbLocal,
    biasFactor,
    treshold,
    penDepth
  ) {
    super(
      body1,
      body2,
      n,
      ra,
      rb,
      raLocal,
      rbLocal,
      biasFactor,
      null,
      null,
      treshold
    );

    this.penDepth = penDepth;
  }
  updateLeftPart(deltaTime) {
    super.updateLeftPart(deltaTime);
    this.lambdaMax =
      Math.max(1,norm(
        sum(
          scale(this.body1.velocity, this.body1.mass),
          scale(this.body2.velocity, this.body2.mass)
        )
      ) * 10);
    this.lambdaMin = 0;
  }
  updateRightPart(deltaTime) {
    const { body1, body2, ra, rb, n, penDepth, treshold, biasFactor } = this;

    const relativeVelocity = diff(
      sum(body2.velocity, cross(body2.angularV, rb)),
      sum(body1.velocity, cross(body1.angularV, ra))
    );

    const relativeVelocityNormalProjection = dot(relativeVelocity, n);
    this.bias =
      (Math.max(0, penDepth - treshold) / deltaTime) * biasFactor -
      relativeVelocityNormalProjection;
  }
  applyResolvingImpulse(lambda) {
    this.body1.applyImpulse(scale(this.J[0], lambda), this.ra);
    this.body2.applyImpulse(scale(this.J[2], lambda), this.rb);
  }
  applyResolvingPseudoImpulse(lambda) {
    if (lambda < 0) return;
    const max = this.effMass * 10;
    // lambda = Math.max(Math.min(100, lambda)- 0.1,0)
    this.body1.applyPseudoImpulse(scale(this.J[0], lambda), this.ra);
    this.body2.applyPseudoImpulse(scale(this.J[2], lambda), this.rb);
  }
}

class FrictionConstraint extends Constraint {
  updateRightPart(deltaTime) {
    const { body1, body2, ra, rb, n } = this;
    const relativeVelocity = diff(
      sum(body2.velocity, cross(body2.angularV, rb)),
      sum(body1.velocity, cross(body1.angularV, ra))
    );

    const relativeVelocityNormalProjection = dot(relativeVelocity, n);
    this.bias = -relativeVelocityNormalProjection;
  }
  applyResolvingImpulse(lambda) {
    this.body1.applyImpulse(scale(this.J[0], lambda), this.ra);
    this.body2.applyImpulse(scale(this.J[2], lambda), this.rb);
  }
}

class PositionConstraint extends Constraint {
  constructor(
    body1,
    body2,
    n,
    ra,
    rb,
    raLocal,
    rbLocal,
    biasFactor,
    treshold,
    penDepth
  ) {
    super(
      body1,
      body2,
      n,
      ra,
      rb,
      raLocal,
      rbLocal,
      biasFactor,
      null,
      null,
      treshold
    );
    this.penDepth = penDepth;
  }
  applyResolvingImpulse(lambda) {
    this.body1.applyPseudoImpulse(scale(this.J[0], lambda), this.ra);
    this.body2.applyPseudoImpulse(scale(this.J[2], lambda), this.rb);
  }
  updateRightPart(deltaTime) {
    const { body1, body2, ra, rb, n, penDepth, treshold, biasFactor } = this;

    this.bias = (Math.max(0, penDepth - treshold) / deltaTime) * biasFactor;
  }
}
class RotationalConstraint extends Constraint{
  constructor(body1, body2, raLocal, rbLocal){
    super(body1, body2, null, null, null, raLocal, rbLocal)
   
  }
  updateLeftPart(deltaTime) {
    const { body1, body2, raLocal, rbLocal } = this;
    this.PA = body1.collider.localToGlobal(raLocal);
    this.PB = body2.collider.localToGlobal(rbLocal);
    const s = math__WEBPACK_IMPORTED_MODULE_0__.m3.transformPoint(body1.collider.Rmatrix, raLocal);
    const b = math__WEBPACK_IMPORTED_MODULE_0__.m3.transformPoint(body2.collider.Rmatrix, rbLocal);

    
    this.ra = s;
    this.rb = b;


    const J = [[0, 0, 0], cross(s, b), [0, 0, 0], cross(b, s)];

    const dof1 = body1.DOF;
    const dof2 = body2.DOF;

    J[0][0] *= dof1[0];
    J[0][1] *= dof1[1];
    J[0][2] *= dof1[2];

    J[1][0] *= dof1[3];
    J[1][1] *= dof1[4];
    J[1][2] *= dof1[5];

    J[2][0] *= dof2[0];
    J[2][1] *= dof2[1];
    J[2][2] *= dof2[2];

    J[3][0] *= dof2[3];
    J[3][1] *= dof2[4];
    J[3][2] *= dof2[5];
    const I1 = body1.inverseInertia;
    const I2 = body2.inverseInertia;
    this.J = J;
    this.JM = [
      [0, 0, 0],
      math__WEBPACK_IMPORTED_MODULE_0__.m3.transformPoint(I1, this.J[1]),
      [0, 0, 0],
      math__WEBPACK_IMPORTED_MODULE_0__.m3.transformPoint(I2, this.J[3]),
    ];
    this.effMass = dot(this.JM[1], this.J[1]) + dot(this.JM[3], this.J[3]);
    this.B = [
      [0, 0, 0, ...this.JM[1]],
      [0, 0, 0, ...this.JM[3]],
    ];
    this._J = [
      [...this.J[0], ...this.J[1]],
      [...this.J[2], ...this.J[3]],
    ];
  }
  updateRightPart(deltaTime) {
    const { body1, body2 } = this;

    
    this.bias = -dot(this.J[1], body1.angularV) + dot(this.J[3], body2.angularV)
  }
  applyResolvingImpulse(lambda){
    const { body1, body2 } = this;
    body1.addAngularV(scale(this.ra, lambda))
    body2.addAngularV(scale(this.rb, lambda))
  }
}
class Joint extends Constraint {
  constructor(body1, body2, raLocal, rbLocal, biasFactor = 0) {
    super(body1, body2, null, null, null, raLocal, rbLocal, biasFactor);

    this.treshold = 0.0001;
    this.reducer = 0.5;
    this.maxImpulse = 0.7;
  }
  updateLeftPart(deltaTime) {
    const { body1, body2, raLocal, rbLocal } = this;
    this.PA = body1.collider.localToGlobal(raLocal);
    this.PB = body2.collider.localToGlobal(rbLocal);
    const dir = diff(this.PA, this.PB);
    const n = dir;
    this.n = n;
    this.ra = diff(this.PA, this.body1.collider.pos);
    this.rb = diff(this.PB, this.body2.collider.pos);
    this.penDepth = norm(dir);

    const J = [
      scale(this.n, -1),
      cross(this.n, this.ra),
      this.n,
      cross(this.rb, this.n),
    ];

    const dof1 = body1.DOF;
    const dof2 = body2.DOF;

    J[0][0] *= dof1[0];
    J[0][1] *= dof1[1];
    J[0][2] *= dof1[2];

    J[1][0] *= dof1[3];
    J[1][1] *= dof1[4];
    J[1][2] *= dof1[5];

    J[2][0] *= dof2[0];
    J[2][1] *= dof2[1];
    J[2][2] *= dof2[2];

    J[3][0] *= dof2[3];
    J[3][1] *= dof2[4];
    J[3][2] *= dof2[5];
    const I1 = body1.inverseInertia;
    const I2 = body2.inverseInertia;
    let M1 = body1.inverseMass;
    let M2 = body2.inverseMass;
    this.J = J;
    this.JM = [
      scale(this.J[0], M1),
      math__WEBPACK_IMPORTED_MODULE_0__.m3.transformPoint(I1, this.J[1]),
      scale(this.J[2], M2),
      math__WEBPACK_IMPORTED_MODULE_0__.m3.transformPoint(I2, this.J[3]),
    ];
    this.effMass =
      dot(this.JM[0], J[0]) +
      dot(this.JM[1], this.J[1]) +
      dot(this.JM[2], J[2]) +
      dot(this.JM[3], this.J[3]);
    this.B = [
      [...this.JM[0], ...this.JM[1]],
      [...this.JM[2], ...this.JM[3]],
    ];
    this._J = [
      [...this.J[0], ...this.J[1]],
      [...this.J[2], ...this.J[3]],
    ];
  }

  updateRightPart(deltaTime) {
    const { body1, body2, ra, rb, n, penDepth, treshold, biasFactor } = this;

    const relativeVelocity = diff(
      sum(body2.velocity, cross(body2.angularV, rb)),
      sum(body1.velocity, cross(body1.angularV, ra))
    );

    const relativeVelocityNormalProjection = dot(relativeVelocity, n);
    const fac = penDepth ** 2 > treshold;
    this.bias =
      (biasFactor * Math.max(penDepth ** 2 - treshold, 0)) / deltaTime -
      relativeVelocityNormalProjection;
    this.bias *= fac;
  }
  applyResolvingImpulse(lambda) {
    this.body1.applyImpulse(scale(this.J[0], lambda), this.ra);
    this.body2.applyImpulse(scale(this.J[2], lambda), this.rb);
  }
  applyResolvingPseudoImpulse(lambda) {
    const max = this.effMass * 10;
    //lambda = clamp(lambda, -1, 1)
    this.body1.applyPseudoImpulse(scale(this.n, -lambda), [0, 0, 0]);
    this.body2.applyPseudoImpulse(scale(this.n, lambda), [0, 0, 0]);
  }
}
class JointPositionConstraint extends Joint {
  updateRightPart(deltaTime) {
    const { penDepth, treshold, biasFactor } = this;

    const fac = penDepth ** 2 > treshold;
    this.bias =
      ((biasFactor * Math.max(penDepth ** 2 - treshold, 0)) / deltaTime) * fac;
  }
  applyResolvingImpulse(lambda) {
    //if(lambda < 0.1)return
    this.body1.applyPseudoImpulse(scale(this.J[0], lambda), this.ra);
    this.body2.applyPseudoImpulse(scale(this.J[2], lambda), this.rb);
  }
}



/***/ }),

/***/ "./src/physics/eventEmitter.js":
/*!*************************************!*\
  !*** ./src/physics/eventEmitter.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventEmitter": () => (/* binding */ EventEmitter)
/* harmony export */ });
class EventEmitter {
  constructor() {
    this.events = {};
  }
  on(eventName, fn) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(fn);
    return () => {
      this.events[eventName] = this.events[eventName].filter(
        (eventFn) => fn !== eventFn
      );
    };
  }
  emit(eventName, data) {
    if (this.events[eventName]) {
      this.events[eventName].forEach((fn) => {
        fn.call(null, data);
      });
    }
  }
}



/***/ }),

/***/ "./src/physics/gjk.js":
/*!****************************!*\
  !*** ./src/physics/gjk.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clipPointsBehindPlane": () => (/* binding */ clipPointsBehindPlane),
/* harmony export */   "get2DcoordsOnPlane": () => (/* binding */ get2DcoordsOnPlane),
/* harmony export */   "gjk": () => (/* binding */ getContactManifold),
/* harmony export */   "pointOnPlaneProjection": () => (/* binding */ pointOnPlaneProjection),
/* harmony export */   "rayVsPlaneIntersec": () => (/* binding */ rayVsPlaneIntersec)
/* harmony export */ });
/* harmony import */ var math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! math */ "./node_modules/math/index.js");
/* harmony import */ var math__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(math__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _clipping__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clipping */ "./src/physics/clipping.js");



const { dot, cross, normalize, sum, diff,  scale, isNull, norm } = math__WEBPACK_IMPORTED_MODULE_0__.vec3;
const CLIP_BIAS = 0.1;
const GJK_MAX_ITERATIONS_NUM = 64;
const EPA_BIAS = 0.00001;

const rayVsPlaneIntersec = (plane, point, direction) => {
  const [origin, normal] = plane;
  const _dot = dot(normal, direction);
  const fromPointToOrigin = diff(point, origin);
  const fac = dot(fromPointToOrigin, normal) / _dot;
  return diff(point, scale(direction, fac));
};
const isPointBehindPlane = (plane, point, sign = 1) => {
  const [origin, normal] = plane;
  return dot(normal, diff(point, origin)) * sign > 0 - CLIP_BIAS;
};
const pointOnPlaneProjection = (plane, point) => {
  const [origin, normal] = plane;
  const fromPointToOrigin = diff(point, origin);
  const projAlongNormal = dot(normal, fromPointToOrigin);

  return diff(point, scale(normal, projAlongNormal));
};
const clipPointsBehindPlane = (plane, points, sign = 1) => {
  const [origin, normal] = plane;

  return points.filter(
    (point) => dot(normal, diff(point, origin)) * sign + CLIP_BIAS > 0
  );
};

const get2DcoordsOnPlane = (i, j, point) => {
  return [dot(i, point), dot(j, point)];
};

function update_simplex3(a, b, c, d, search_dir, simp_dim) {
  const n = cross(diff(this.b, this.a), diff(this.c, this.a));
  const AO = scale(this.a, -1);

  this.simp_dim = 2;
  if (dot(cross(diff(this.b, this.a), n), AO) > 0) {
    this.c = this.a;
    this.search_dir = cross(
      cross(diff(this.b, this.a), AO),
      diff(this.b, this.a)
    );
    return;
  }
  if (dot(cross(n, diff(this.c, this.a)), AO) > 0) {
    this.b = this.a;
    this.search_dir = cross(
      cross(diff(this.c, this.a), AO),
      diff(this.c, this.a)
    );
    return;
  }
  this.simp_dim = 3;
  if (dot(n, AO) > 0) {
    this.d = this.c;
    this.c = this.b;
    this.b = this.a;
    this.search_dir = n;
    return;
  }
  this.d = this.b;
  this.b = this.a;
  this.search_dir = scale(n, -1);
  return;
}
function update_simplex4(a, b, c, d, search_dir, simp_dim) {
  const ABC = cross(diff(this.b, this.a), diff(this.c, this.a));
  const ACD = cross(diff(this.c, this.a), diff(this.d, this.a));
  const ADB = cross(diff(this.d, this.a), diff(this.b, this.a));
  const AO = scale(this.a, -1);
  this.simp_dim = 3;

  if (dot(ABC, AO) > 0) {
    this.d = this.c;
    this.c = this.b;
    this.b = this.a;
    this.search_dir = ABC;
    return false;
  }

  if (dot(ACD, AO) > 0) {
    this.b = this.a;
    this.search_dir = ACD;
    return false;
  }

  if (dot(ADB, AO) > 0) {
    this.c = this.d;
    this.d = this.b;
    this.b = this.a;
    this.search_dir = ADB;
    return false;
  }
  return true;
}
function gjk(body1, body2) {
  const coll1 = body1.collider;
  const coll2 = body2.collider;
  this.a = [0, 0, 0];
  this.b = [0, 0, 0];
  this.c = [0, 0, 0];
  this.d = [0, 0, 0];
  this.search_dir = [0, 0, 0];
  this.simp_dim = 0;

  this.originsMap = new Map();

  let mtv = [0, 0, 0];

  this.search_dir = diff(coll1.pos, coll2.pos);
  const c_origin1 = coll1.support(scale(this.search_dir, -1));
  const c_origin2 = coll2.support(this.search_dir);
  this.c = diff(c_origin2, c_origin1);

  this.originsMap.set(this.c, [c_origin1, c_origin2]);

  this.search_dir = scale(this.c, -1);

  const b_origin1 = coll1.support(scale(this.search_dir, -1));
  const b_origin2 = coll2.support(this.search_dir);
  this.b = diff(b_origin2, b_origin1);

  this.originsMap.set(this.b, [b_origin1, b_origin2]);

  if (dot(this.b, this.search_dir) < 0) {
    return null;
  }

  this.search_dir = cross(
    cross(diff(this.c, this.b), scale(this.b, -1)),
    diff(this.c, this.b)
  );

  if (isNull(this.search_dir)) {
    this.search_dir = cross(diff(this.c, this.b), [1, 0, 0]);

    if (isNull(this.search_dir)) {
      this.search_dir = cross(diff(this.c, this.b), [0, 0, -1]);
    }
  }

  this.simp_dim = 2;
  for (let i = 0; i < GJK_MAX_ITERATIONS_NUM; ++i) {
    const a_origin1 = coll1.support(scale(this.search_dir, -1));
    const a_origin2 = coll2.support(this.search_dir);
    this.a = diff(a_origin2, a_origin1);

    this.originsMap.set(this.a, [a_origin1, a_origin2]);
    if (dot(this.a, this.search_dir) < 0) return null;

    this.simp_dim++;
    if (this.simp_dim === 3) {
      update_simplex3.apply(this);
    } else if (update_simplex4.apply(this)) {
      return EPA(this.a, this.b, this.c, this.d, this.originsMap, body1, body2);
    }
  }
  return null;
}

const baricentric = (face, point) => {
  let a11 = face[0][0];
  let a12 = face[1][0];
  let a13 = face[2][0];
  let b1 = point[0];
  let a21 = face[0][1];
  let a22 = face[1][1];
  let a23 = face[2][1];
  let b2 = point[1];
  let a31 = face[0][2];
  let a32 = face[1][2];
  let a33 = face[2][2];
  let b3 = point[2];

  const d =
    a11 * a22 * a33 +
    a21 * a32 * a13 +
    a12 * a23 * a31 -
    a13 * a22 * a31 -
    a21 * a12 * a33 -
    a32 * a23 * a11;

  const d1 =
    b1 * a22 * a33 +
    b2 * a32 * a13 +
    a12 * a23 * b3 -
    a13 * a22 * b3 -
    b2 * a12 * a33 -
    a32 * a23 * b1;

  const d2 =
    a11 * b2 * a33 +
    a21 * b3 * a13 +
    b1 * a23 * a31 -
    a13 * b2 * a31 -
    a11 * b3 * a23 -
    a21 * b1 * a33;

  const d3 =
    a11 * a22 * b3 +
    a21 * a32 * b1 +
    a12 * b2 * a31 -
    b1 * a22 * a31 -
    a21 * a12 * b3 -
    b2 * a32 * a11;

  return [d1 / d, d2 / d, d3 / d];
};
const originToFaceProj = (face) => {
  const normal = face[3];
  const point = face[0];
  const c = -normal[0] * point[0] - normal[1] * point[1] - normal[2] * point[2];
  const t =
    -c /
    (normal[0] * normal[0] + normal[1] * normal[1] + normal[2] * normal[2]);
  return [t * normal[0], t * normal[1], t * normal[2]];
};

const MAX_NUM_FACES = 64;
const MAX_NUM_LOOSE_EDGES = 32;
const EPA_MAX_NUM_ITER = 64;
const EPA = (a, b, c, d, originsMap, body1, body2) => {
  const coll1 = body1.collider;
  const coll2 = body2.collider;
  const faces = [];
  for (let i = 0; i < 4; i++) {
    faces[i] = [];
  }

  faces[0][0] = a;
  faces[0][1] = b;
  faces[0][2] = c;
  faces[0][3] = normalize(cross(diff(b, a), diff(c, a)));
  faces[1][0] = a;
  faces[1][1] = c;
  faces[1][2] = d;
  faces[1][3] = normalize(cross(diff(c, a), diff(d, a)));
  faces[2][0] = a;
  faces[2][1] = d;
  faces[2][2] = b;
  faces[2][3] = normalize(cross(diff(d, a), diff(b, a)));
  faces[3][0] = b;
  faces[3][1] = d;
  faces[3][2] = c;
  faces[3][3] = normalize(cross(diff(d, b), diff(c, b)));

  let num_faces = 4;
  let closest_face = null;
  let search_dir;

  let p;
  for (let iteration = 0; iteration < EPA_MAX_NUM_ITER; ++iteration) {
    let min_dist = dot(faces[0][0], faces[0][3]);

    closest_face = 0;
    for (let i = 0; i < num_faces; ++i) {
      let dist = dot(faces[i][0], faces[i][3]);
      if (dist < min_dist) {
        min_dist = dist;
        closest_face = i;
      }
    }
    search_dir = faces[closest_face][3];

    const p_origin1 = coll1.support(scale(search_dir, -1));
    const p_origin2 = coll2.support(search_dir);
    p = diff(p_origin2, p_origin1);
    originsMap.set(p, [p_origin1, p_origin2]);

    if (dot(p, search_dir) - min_dist < EPA_BIAS) {
      const face = faces[closest_face];

      const point = originToFaceProj(face);

      const [Aa, Ba] = originsMap.get(face[0]);
      //const Aa = face[0].oa
      //const Ba = face[0].ob
      const [Ab, Bb] = originsMap.get(face[1]);
      //const Ab = face[1].oa
      //const Bb = face[1].ob
      const [Ac, Bc] = originsMap.get(face[2]);
      //const Ac = face[2].oa
      //const Bc = face[2].ob

      const result = baricentric(face, point);

      if (isNaN(result[0] + result[1] + result[2])) {
        return null;
      }

      let PA = sum(
        sum(scale(Aa, result[0]), scale(Ab, result[1])),
        scale(Ac, result[2])
      );
      //Aa.multiply(result[0]).add(Ab.multiply(result[1])).add(Ac.multiply(result[2]))
      let PB = sum(
        sum(scale(Ba, result[0]), scale(Bb, result[1])),
        scale(Bc, result[2])
      );
      //Ba.multiply(result[0]).add(Bb.multiply(result[1])).add(Bc.multiply(result[2]))

      //const ra = PA.substract(coll1.pos)

      const n = normalize(scale(face[3], -dot(p, search_dir)));
      if (norm(n) < 0.01) return null;
      const penDepth = -dot(diff(PB, PA), n);

      return { PA, PB, n, penDepth };
    }

    const loose_edges = [];
    let num_loose_edges = 0;
    for (let i = 0; i < num_faces; ++i) {
      if (dot(faces[i][3], diff(p, faces[i][0])) > 0) {
        for (let j = 0; j < 3; j++) {
          let current_edge = [faces[i][j], faces[i][(j + 1) % 3]];
          let found_edge = false;
          for (let k = 0; k < num_loose_edges; k++) {
            if (
              loose_edges[k][1] === current_edge[0] &&
              loose_edges[k][0] === current_edge[1]
            ) {
              loose_edges[k][0] = loose_edges[num_loose_edges - 1][0];
              loose_edges[k][1] = loose_edges[num_loose_edges - 1][1];
              num_loose_edges--;
              found_edge = true;
              k = num_loose_edges;
            }
          }
          if (!found_edge) {
            if (num_loose_edges >= MAX_NUM_LOOSE_EDGES) break;

            loose_edges[num_loose_edges] = [];
            loose_edges[num_loose_edges][0] = current_edge[0];
            loose_edges[num_loose_edges][1] = current_edge[1];
            num_loose_edges++;
          }
        }
        faces[i][0] = faces[num_faces - 1][0];
        faces[i][1] = faces[num_faces - 1][1];
        faces[i][2] = faces[num_faces - 1][2];
        faces[i][3] = faces[num_faces - 1][3];
        num_faces--;
        i--;
      }
    }
    for (let i = 0; i < num_loose_edges; i++) {
      if (num_faces >= MAX_NUM_FACES) break;
      faces[num_faces] = [];
      faces[num_faces][0] = loose_edges[i][0];
      faces[num_faces][1] = loose_edges[i][1];
      faces[num_faces][2] = p;

      faces[num_faces][3] = normalize(
        cross(
          diff(loose_edges[i][0], loose_edges[i][1]),
          diff(loose_edges[i][0], p)
        )
      );

      if (dot(faces[num_faces][0], faces[num_faces][3]) + 0.01 < 0) {
        const temp = faces[num_faces][0];
        faces[num_faces][0] = faces[num_faces][1];
        faces[num_faces][1] = temp;
        faces[num_faces][3] = scale(faces[num_faces][3], -1);
      }
      num_faces++;
    }
  }

  return null;
};

const gjkScope = {};
const _gjk = gjk.bind(gjkScope);

const getContactManifold = (body1, body2) => {
  const coll1 = body1.collider;
  const coll2 = body2.collider;
  const contactData = _gjk(body1, body2);
  if (!contactData) return null;

  const { PA, PB, n } = contactData;

  if (coll1.type === "sphere" || coll2.type === "sphere") {
    const rb = diff(PB, coll2.pos);
    const ra = diff(PA, coll1.pos);
    const penDepth = -dot(diff(PB, PA), n);
    const raLocal = math__WEBPACK_IMPORTED_MODULE_0__.m3.transformPoint(coll1.RmatrixInverse, ra);
    const rbLocal = math__WEBPACK_IMPORTED_MODULE_0__.m3.transformPoint(coll2.RmatrixInverse, rb);
    const i = [n[1] + n[2],n[2] - n[0], -n[0] - n[1]]
   
    
    const j = cross(scale(n, -1), i)
    return [
      {
        raLocal,
        rbLocal,
        ra,
        rb,
        PA,
        PB,
        n,
        penDepth,
        body1,
        body2,
        i,
        j,
      },
    ];
  }
  
  const nReverse = scale(n, -1);

  const [contactFace1, normal1] = coll1.getClosestFaceByNormal(nReverse);
  const [contactFace2, normal2] = coll2.getClosestFaceByNormal(n);
  const plane = [scale(sum(PA, PB), 0.5), n];
  const projections1 = contactFace1.map((p) =>
    pointOnPlaneProjection(plane, p)
  );
  const projections2 = contactFace2.map((p) =>
    pointOnPlaneProjection(plane, p)
  );

  const origin = plane[0];
  const i = normalize( [n[1] + n[2],n[2] - n[0], -n[0] - n[1]])
   
    
  const j = cross(scale(n, -1), i)

  let _2d1 = projections1.map((p) => get2DcoordsOnPlane(i, j, diff(p, origin)));
  let _2d2 = projections2.map((p) => get2DcoordsOnPlane(i, j, diff(p, origin)));

  const dir1 = (0,_clipping__WEBPACK_IMPORTED_MODULE_1__.isInClockwise)(_2d1);
  const dir2 = (0,_clipping__WEBPACK_IMPORTED_MODULE_1__.isInClockwise)(_2d2);
  if (dir1 < 0) _2d1 = _2d1.map((_, i) => _2d1.at(-i));
  if (dir2 < 0) _2d2 = _2d2.map((_, i) => _2d2.at(-i));
  
  const clipped = (0,_clipping__WEBPACK_IMPORTED_MODULE_1__.clipFaceVsFace)(_2d1, _2d2);

  const _3d = clipped.map((p) =>
    sum(origin, sum(scale(i, p[0]), scale(j, p[1])))
  );

  const features = [];
  _3d.forEach((point) => {
    const PA = rayVsPlaneIntersec([contactFace1[0], normal1], point, n);
    if (!isPointBehindPlane(plane, PA, 1)) return;
    const PB = rayVsPlaneIntersec([contactFace2[0], normal2], point, n);
    if (!isPointBehindPlane(plane, PB, -1)) return;

    const rb = diff(PB, coll2.pos);
    const ra = diff(PA, coll1.pos);
    const penDepth = -dot(diff(PB, PA), n);
    const raLocal = math__WEBPACK_IMPORTED_MODULE_0__.m3.transformPoint(coll1.RmatrixInverse, ra);
    const rbLocal = math__WEBPACK_IMPORTED_MODULE_0__.m3.transformPoint(coll2.RmatrixInverse, rb);

    features.push({
      raLocal,
      rbLocal,
      ra,
      rb,
      PA,
      PB,
      n,
      penDepth,
      body1,
      body2,
      i,
      j,
    });
  });

  if (features.length === 0) {
    const rb = diff(PB, coll2.pos);
    const ra = diff(PA, coll1.pos);
    const penDepth = -dot(diff(PB, PA), n);
    const raLocal = math__WEBPACK_IMPORTED_MODULE_0__.m3.transformPoint(coll1.RmatrixInverse, ra);
    const rbLocal = math__WEBPACK_IMPORTED_MODULE_0__.m3.transformPoint(coll2.RmatrixInverse, rb);
    features.push({
      raLocal,
      rbLocal,
      ra,
      rb,
      PA,
      PB,
      n,
      penDepth,
      body1,
      body2,
      i,
      j,
    });
  }

  return features;
};




/***/ }),

/***/ "./src/physics/manifold.js":
/*!*********************************!*\
  !*** ./src/physics/manifold.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Manifold)
/* harmony export */ });
/* harmony import */ var math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! math */ "./node_modules/math/index.js");
/* harmony import */ var math__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(math__WEBPACK_IMPORTED_MODULE_0__);


const { distanceFromLine, norm, findFurthestPoint, sum, diff, normSq, dot } = math__WEBPACK_IMPORTED_MODULE_0__.vec3;

const prec = 0.0005;

class Manifold {
  constructor(...contacts) {
    this.contacts = contacts;
    this.keep = true;
  }
  update() {
    const contacts = this.contacts;
    if (contacts.length < 2) {
      this.keep = false;
      return;
    }
    for (let i = 0, n = contacts.length; i < n; i++) {
      const contact = contacts[i];
      const pos1 = contact.body1.collider.pos;
      const pos2 = contact.body2.collider.pos;
      const _ra = math__WEBPACK_IMPORTED_MODULE_0__.m3.transformPoint(
        contact.body1.collider.Rmatrix,
        contact.raLocal
      );
      const _rb = math__WEBPACK_IMPORTED_MODULE_0__.m3.transformPoint(
        contact.body2.collider.Rmatrix,
        contact.rbLocal
      );
      const _PA = sum(pos1, _ra);
      const _PB = sum(pos2, _rb);
      const raBias = diff(contact.PA, _PA);
      const rbBias = diff(contact.PB, _PB);
      //contact.updateContactData()
      if (norm(raBias) > prec || norm(rbBias) > prec) {
        this.keep = false;
        return;
      }

      contact.PA = _PA;
      contact.PB = _PB;
      contact.ra = _ra;
      contact.rb = _rb;
      contact.penDepth = dot(contact.n, diff(_PB, _PA));
      
    }
  }
}


/***/ }),

/***/ "./node_modules/graphics/src/render/shaders/default/frag.glsl":
/*!********************************************************************!*\
  !*** ./node_modules/graphics/src/render/shaders/default/frag.glsl ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "#version 300 es\nprecision highp float;\n \n\n\nuniform vec4 u_color;\nout vec4 outColor;\nvoid main() {\n  \n  \n  outColor = u_color;\n \n  \n  \n}";

/***/ }),

/***/ "./node_modules/graphics/src/render/shaders/default/vert.glsl":
/*!********************************************************************!*\
  !*** ./node_modules/graphics/src/render/shaders/default/vert.glsl ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "#version 300 es\n\nprecision highp float;\n\nuniform mat4 u_worldViewProjection;\n\n\nlayout(location = 0) in vec4 a_position;\nvoid main() {\n  gl_Position = u_worldViewProjection * a_position;\n  gl_PointSize = 10.0;\n}";

/***/ }),

/***/ "./node_modules/graphics/src/render/shaders/pointLight/frag.glsl":
/*!***********************************************************************!*\
  !*** ./node_modules/graphics/src/render/shaders/pointLight/frag.glsl ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "#version 300 es\nprecision highp float;\n \n\n\n\nin vec3 v_normal;\nin vec3 v_surfaceToView;\nin vec3 v_surfaceToLight;\n\n\n//uniform sampler2D u_texture1;\nuniform float u_shininess;\nuniform vec4 u_color;\nuniform vec4 u_ambientLight;\nout vec4 outColor;\n\n\nvoid main() {\n  \n  vec3 surfaceToLightDirection = normalize(v_surfaceToLight);\n  vec3 surfaceToViewDirection = normalize(v_surfaceToView);\n  vec3 halfVector = normalize(surfaceToLightDirection + surfaceToViewDirection);\n\n  vec3 normal = normalize(v_normal);\n  float light = dot(normal, surfaceToLightDirection);\n  float specular = 0.0;\n  if (light > 0.0) {\n    specular = pow(dot(normal, halfVector), u_shininess);\n  }\n  \n  outColor =  u_color;\n  outColor.rgb *= light;\n  outColor.rgb += specular;\n\n  outColor.rgb += u_ambientLight.rgb *0.3;\n  \n}";

/***/ }),

/***/ "./node_modules/graphics/src/render/shaders/pointLight/vert.glsl":
/*!***********************************************************************!*\
  !*** ./node_modules/graphics/src/render/shaders/pointLight/vert.glsl ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "#version 300 es\n \nlayout(location = 0) in vec4 a_position;\nlayout(location = 1) in vec3 a_normal;\n\n\nuniform mat4 u_matrix;\nuniform mat4 u_worldViewProjection;\nuniform vec3 u_lightWorldPosition;\nuniform vec3 u_viewWorldPosition;\n\nout vec3 v_normal;\nout vec3 v_surfaceToLight;\nout vec3 v_surfaceToView;\nvoid main() {\n    \n    gl_Position = u_worldViewProjection * a_position;\n    \n    vec3 surfaceWorldPosition = (u_matrix * a_position).xyz;\n    \n    v_surfaceToLight = u_lightWorldPosition - surfaceWorldPosition;\n\n    v_normal = mat3(  u_matrix ) * a_normal;\n    \n    v_surfaceToView = u_viewWorldPosition - surfaceWorldPosition;\n      \n}";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!******************************!*\
  !*** ./ragdollDemo/index.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! math */ "./node_modules/math/index.js");
/* harmony import */ var math__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(math__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var graphics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphics */ "./node_modules/graphics/index.js");
/* harmony import */ var _src_misc_mouseInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/misc/mouseInput */ "./src/misc/mouseInput.js");
/* harmony import */ var _src_misc_keyInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/misc/keyInput */ "./src/misc/keyInput.js");
/* harmony import */ var _shader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shader */ "./shader.js");
/* harmony import */ var _src_physics_Simulation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/physics/Simulation */ "./src/physics/Simulation.js");
/* harmony import */ var _src_physics_RigidBody__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/physics/RigidBody */ "./src/physics/RigidBody.js");
/* harmony import */ var _src_physics_collider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/physics/collider */ "./src/physics/collider.js");
/* harmony import */ var _src_misc_controllable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/misc/controllable */ "./src/misc/controllable.js");
/* harmony import */ var _Ragdoll__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Ragdoll */ "./ragdollDemo/Ragdoll.js");
/* harmony import */ var _src_physics_constraints__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../src/physics/constraints */ "./src/physics/constraints.js");






const mouseInput = new _src_misc_mouseInput__WEBPACK_IMPORTED_MODULE_2__["default"]();

mouseInput.listen();
const keyInput = new _src_misc_keyInput__WEBPACK_IMPORTED_MODULE_3__["default"]();
keyInput.listen();
const context = new graphics__WEBPACK_IMPORTED_MODULE_1__.GLcontextWrapper("canvas");
const gl = context.getContext();
context.resizeCanvasToDisplaySize();
const drawer = new graphics__WEBPACK_IMPORTED_MODULE_1__.Drawer();
drawer.setContext(context).update3DProjectionMatrix();

const defaultProgramInfo = new graphics__WEBPACK_IMPORTED_MODULE_1__.ProgramInfo(
  graphics__WEBPACK_IMPORTED_MODULE_1__.defaultShaders.vert,
  graphics__WEBPACK_IMPORTED_MODULE_1__.defaultShaders.frag
);
const pointLightProgramInfo = new graphics__WEBPACK_IMPORTED_MODULE_1__.ProgramInfo(
  graphics__WEBPACK_IMPORTED_MODULE_1__.pointLightShaders.vert,
  graphics__WEBPACK_IMPORTED_MODULE_1__.pointLightShaders.frag
);
defaultProgramInfo.setContext(context).compileShaders().createUniformSetters();
pointLightProgramInfo
  .setContext(context)
  .compileShaders()
  .createUniformSetters();

_shader__WEBPACK_IMPORTED_MODULE_4__["default"].setContext(context).compileShaders().createUniformSetters();
const box = new graphics__WEBPACK_IMPORTED_MODULE_1__.PrimitiveRenderer((0,graphics__WEBPACK_IMPORTED_MODULE_1__.createBox)(1, 1, 1));
const panel = new graphics__WEBPACK_IMPORTED_MODULE_1__.PrimitiveRenderer((0,graphics__WEBPACK_IMPORTED_MODULE_1__.createBox)(1,1,1))
const sphere = new graphics__WEBPACK_IMPORTED_MODULE_1__.PrimitiveRenderer((0,graphics__WEBPACK_IMPORTED_MODULE_1__.createSphere)(1, 15, 15));
const circle = new graphics__WEBPACK_IMPORTED_MODULE_1__.PrimitiveRenderer((0,graphics__WEBPACK_IMPORTED_MODULE_1__.createCircle)(8, 4));
const cylinder = new graphics__WEBPACK_IMPORTED_MODULE_1__.PrimitiveRenderer((0,graphics__WEBPACK_IMPORTED_MODULE_1__.createTruncatedCone)(1, 1, 1, 8, 1));
const points = new graphics__WEBPACK_IMPORTED_MODULE_1__.PrimitiveRenderer({
  mode: gl.POINTS,
  numElements: 2,
  offset: 0,
});
const line = new graphics__WEBPACK_IMPORTED_MODULE_1__.PrimitiveRenderer({
  mode: gl.LINES,
  numElements: 2,
  offset: 0,
});

box
  .setContext(context)
  .createVAO()
  .setDrawer(drawer)
  .setProgramInfo(defaultProgramInfo)
  .createGeometryBuffers()
  .setAttributes()
  .setMode(2);
panel
  .setContext(context)
  .createVAO()
  .setDrawer(drawer)
  .setProgramInfo(pointLightProgramInfo)
  .createGeometryBuffers()
  .setAttributes()
  .setMode(4);
cylinder
  .setContext(context)
  .createVAO()
  .setDrawer(drawer)
  .setProgramInfo(defaultProgramInfo)
  .createGeometryBuffers()
  .setAttributes()
  .setMode(2);
sphere
  .setContext(context)
  .createVAO()
  .setDrawer(drawer)
  .setProgramInfo(defaultProgramInfo)
  .createGeometryBuffers()
  .setAttributes()
  .setMode(2);
circle
  .setContext(context)
  .createVAO()
  .setDrawer(drawer)
  .setProgramInfo(defaultProgramInfo)
  .createGeometryBuffers()
  .setAttributes()
  .setMode(3);

line
  .setContext(context)
  .createVAO()
  .setDrawer(drawer)
  .setProgramInfo(defaultProgramInfo)
  .createBufferAttribData("a_position", "vec3", { location: 0 })
  .setOwnAttribute("a_position")
  .bufferData("a_position", new Float32Array([0, 0, 0, 0, 1, 0]));

points
  .setContext(context)
  .createVAO()
  .setDrawer(drawer)
  .setProgramInfo(defaultProgramInfo)
  .createBufferAttribData("a_position", "vec3", { location: 0 })
  .setOwnAttribute("a_position")
  .bufferData("a_position", new Float32Array([0, 0, 0]));

const uniforms = {
  u_lightWorldPosition: [30, 50, 30],
  u_ambientLight: [1, 1, 0.3, 0.11],
  u_reverseLightDirection: [1, 0, 0],
  u_shininess: 300,
};








const g = 9.8;
const sim = new _src_physics_Simulation__WEBPACK_IMPORTED_MODULE_5__["default"]();

const floor = { physics: new _src_physics_RigidBody__WEBPACK_IMPORTED_MODULE_6__.RigidBody(new _src_physics_collider__WEBPACK_IMPORTED_MODULE_7__.Box(1000, 6, 1000)), sprite: box};

const objects = [floor];
floor.physics.translate([0,-180,0])
floor.physics.setMass(1000000000000);

//floor.physics.translate([0, 0, 0]);
floor.physics.friction = 10
floor.physics.static = true;
floor.physics.DOF = [1, 1, 1, 0, 0, 0];
sim.addObject(floor.physics);



for(let i = 0; i < 50; i++){
  const plane = { physics: new _src_physics_RigidBody__WEBPACK_IMPORTED_MODULE_6__.RigidBody(new _src_physics_collider__WEBPACK_IMPORTED_MODULE_7__.Box(2, 2, 100)), sprite: panel };
  plane.physics.translate([i*2, 10 - i*2  ,0]);
  plane.physics.setMass(200000000);
  plane.physics.rotate([0,0,-0.29]);
  plane.physics.static = true
  sim.addStaticObject(plane.physics);
  objects.push(plane);
}
for(let i = 0; i < 50; i++){
  const plane = { physics: new _src_physics_RigidBody__WEBPACK_IMPORTED_MODULE_6__.RigidBody(new _src_physics_collider__WEBPACK_IMPORTED_MODULE_7__.Box(2, 2, 100)), sprite: panel };
  plane.physics.translate([160 - i*2, -80 - i * 2 ,0]);
  plane.physics.setMass(200000000);
  plane.physics.rotate([0,0,0.2]);
  plane.physics.static = true
  sim.addStaticObject(plane.physics);
  objects.push(plane);
}
const plane = { physics: new _src_physics_RigidBody__WEBPACK_IMPORTED_MODULE_6__.RigidBody(new _src_physics_collider__WEBPACK_IMPORTED_MODULE_7__.Box(6, 2, 100)), sprite: panel }
plane.physics.translate([102 , -90 ,0]);
  plane.physics.setMass(200000000);
  //plane.physics.rotate([0,0,0.2]);
  plane.physics.static = true
  sim.addStaticObject(plane.physics);
  objects.push(plane);
for (let i = 0; i < 15; i++) {
  const cube = { physics: new _src_physics_RigidBody__WEBPACK_IMPORTED_MODULE_6__.RigidBody(new _src_physics_collider__WEBPACK_IMPORTED_MODULE_7__.Box(3, 3, 3)), sprite: box, uniforms : {u_color : [0,0,1,1]} };
  cube.physics.translate([101, -87.5 + 3.01 * (i%3), -2.5 + (i%5) * 3]);
  cube.physics.setMass(20);
  cube.physics.addAcceleration([0, -g, 0]);
  sim.addObject(cube.physics);
  objects.push(cube);

}

for (let i = 0; i < 5; i++) {
  const { parts, constraints, positionConstraints } = new _Ragdoll__WEBPACK_IMPORTED_MODULE_9__["default"]([10, 5 + 3.01 * i, 0]);

  for (const name in parts) {
    sim.addObject(parts[name]);
    parts[name].addAcceleration([0, -g, 0]);
    parts[name].addVelocity([10, 0, 0]);
    parts[name].setMass(5)
    //parts[name].friction = 10;
    let sprite = cylinder
    if(name === 'head') {
      sprite = sphere
    }
    if(name === 'body') {
      sprite = box
      
    }
    objects.push({ physics: parts[name], sprite, uniforms : {u_color : [0,0.5,0,1]} });
  }
  parts.head.setMass(10)
  sim.addConstraints(constraints, "ragdoll" + i);
  sim.addPositionConstraints(positionConstraints, "ragdol" + i);
}


const player = new _src_misc_controllable__WEBPACK_IMPORTED_MODULE_8__.Noclip();
player.camPos = [140, -50, 5]
player.rotationY = Math.PI/2
player.rotationX = -0.1 * Math.PI/2
player.listenKeyboard(keyInput);
player.listenMouse(mouseInput);

_src_physics_RigidBody__WEBPACK_IMPORTED_MODULE_6__.RigidBody.setTreshold(0.005);

let lastCall = Date.now();
const fps = document.querySelector("#fps");

const loop = () => {
  sim.tick(0.016);
  player.tick();
  const curentTime = Date.now();
  const delta = curentTime - lastCall;
  fps.textContent = (1 / delta) * 1000;
  lastCall = curentTime;
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
  gl.enable(gl.CULL_FACE);
  gl.enable(gl.DEPTH_TEST);

  const cameraMatrix = player.camMatrix;
  const { translation } = math__WEBPACK_IMPORTED_MODULE_0__.m4.decompose(cameraMatrix);

  objects.forEach((obj) => {
    const u_matrix = obj.physics.collider.getM4();

    const u_viewWorldPosition = translation;
    const spriteUniforms = obj.uniforms || {}
    obj.sprite.draw(
      { ...uniforms, u_matrix, u_viewWorldPosition, u_color: [1, 0.5, 0.1, 1], ...spriteUniforms },
      cameraMatrix
    );
  });

  points.draw(
    {
      u_matrix: math__WEBPACK_IMPORTED_MODULE_0__.m4.identity(),
      u_color: [0, 0.5, 0.1, 1],
      u_worldViewPosition: cameraMatrix,
    },
    cameraMatrix
  );
/*
  for (const [name, constraints] of sim.constraints) {
    constraints.forEach((c) => {
      points.draw(
        {
          u_matrix: m4.translation(...c.PA),
          u_color: [1.0, 0.0, 0.1, 1],
          u_worldViewPosition: cameraMatrix,
        },
        cameraMatrix
      );
      points.draw(
        {
          u_matrix: m4.translation(...c.PB),
          u_color: [1.0, 0.0, 0.1, 1],
          u_worldViewPosition: cameraMatrix,
        },
        cameraMatrix
      );
    });
  }
  const manifolds = sim.collisionManifolds.values();

  for (const manifold of manifolds) {
    manifold.contacts.forEach((contact) => {
      points
        .draw(
          {
            u_matrix: m4.translation(...contact.PA),
            u_color: [0.6, 0.6, 0.0, 1],
          },
          cameraMatrix
        )
        .draw(
          {
            u_matrix: m4.translation(...contact.PB),
            u_color: [0.5, 0.1, 0.2, 1],
          },
          cameraMatrix
        );
    });
  }
*/
  gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
  requestAnimationFrame(loop);
};
loop();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9tYWluLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFzRTtBQU03QztBQUM4QztBQU83QztBQUM4QjtBQUs3QjtBQUNPO0FBS1A7QUFDSztBQUN5QztBQUNwQjs7O0FBeUJuRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdERxRDtBQUNoQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBLGtCQUFrQixtQkFBbUI7QUFDckMsd0NBQXdDLGdEQUFZO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0Esa0JBQWtCLG1CQUFtQjtBQUNyQyx3Q0FBd0MsZ0RBQVk7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFVBQVUsT0FBTztBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksT0FBTztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxXQUFXO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxhQUFhO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxhQUFhO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBOztBQU9FOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5SXdCOztBQUUxQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLEtBQUs7QUFDakI7QUFDQSw0QkFBNEIsZ0RBQWM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZLG1CQUFtQjtBQUMvQixZQUFZLEtBQUs7QUFDakIsdUJBQXVCLDRDQUFVO0FBQ2pDLFdBQVcsNkNBQVc7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTixZQUFZLEtBQUs7O0FBRWpCLGtDQUFrQyw2Q0FBVztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQ0FBcUM7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxLQUFLO0FBQ2pCLFlBQVksdURBQXVEO0FBQ25FLGdDQUFnQyw2Q0FBVztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwrQ0FBK0M7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLE1BQU0sRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlGa0M7QUFDUjtBQUNJO0FBQ3BEO0FBQ0EsZ0JBQWdCLGtCQUFrQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxPQUFPO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsT0FBTztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELE9BQU87QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxPQUFPO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsT0FBTztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLEtBQUs7QUFDakIsd0JBQXdCLDREQUF1QjtBQUMvQyw2QkFBNkI7QUFDN0IsaUNBQWlDLDZEQUFlO0FBQ2hELHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxPQUFPO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsT0FBTztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUM2Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0Y3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZLGdCQUFnQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSwyQ0FBMkM7QUFDckQ7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQSxZQUFZLGdCQUFnQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSwyQ0FBMkM7QUFDckQ7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBLGlFQUFlLEtBQUssRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwT007QUFDWTtBQUNnQjtBQUNDOztBQUV4RDtBQUNBO0FBQ0E7QUFD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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDM0tBO0FBQ0EsT0FBTyxNQUFNLEVBQUUsbUJBQU8sQ0FBQywrQ0FBUTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixXQUFXO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsT0FBTztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLFFBQVE7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxxQkFBcUI7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLE9BQU87QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsbUJBQW1CLEdBQUcsbUJBQW1CO0FBQzVEO0FBQ0E7QUFDQTtBQVVFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9Ld0M7QUFDMUM7QUFDQSxRQUFRLG1DQUFtQyxFQUFFLHNDQUFJO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDZDQUFXO0FBQzlCLDBCQUEwQiw2Q0FBVztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsNENBQVU7QUFDN0IsbUJBQW1CLDRDQUFVO0FBQzdCLG1CQUFtQiw0Q0FBVTtBQUM3QiwwQkFBMEIsOENBQVk7QUFDdEM7QUFDQTtBQUNBLG1CQUFtQiw4Q0FBWTtBQUMvQixtQkFBbUIsNENBQVU7QUFDN0IsbUJBQW1CLDRDQUFVO0FBQzdCLDBCQUEwQiw4Q0FBWTtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHNDQUFJO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLDhDQUFZO0FBQ3RDO0FBQ0E7QUFDQSxjQUFjLDJDQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLG1EQUFpQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsc0NBQUk7QUFDbkI7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLG1EQUFpQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixtREFBaUI7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsNkNBQVc7QUFDekIsTUFBTSw2Q0FBVztBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLDJDQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLDBDQUFRO0FBQ25CO0FBQ0E7QUFDQTtBQUNBLFlBQVksMkJBQTJCO0FBQ3ZDLDRDQUE0QyxtREFBaUI7QUFDN0Q7QUFDQTtBQUNBLHdDQUF3QyxPQUFPO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLG1EQUFpQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxTQUFTO0FBQ3JCLGVBQWUsc0NBQUk7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsMkNBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLFNBQVM7QUFDckIsV0FBVywwQ0FBUTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLFNBQVM7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLG1EQUFpQiw0QkFBNEI7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbURBQWlCLG1DQUFtQztBQUNuRTtBQUNBO0FBQ0EsY0FBYywyQ0FBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksaUJBQWlCO0FBQzdCLFdBQVcsMENBQVE7QUFDbkI7QUFDQTtBQUNBLFlBQVksMENBQTBDO0FBQ3RELG9CQUFvQixtREFBaUI7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLG1EQUFpQjtBQUN6QixRQUFRLG1EQUFpQjtBQUN6QjtBQUNBO0FBQ0Esb0JBQW9CLG1EQUFpQjtBQUNyQztBQUNBO0FBQ0EsdUNBQXVDLG1EQUFpQjtBQUN4RDtBQUNBLGtCQUFrQixtREFBaUI7QUFDbkM7QUFDQTtBQUNBLFlBQVksaUJBQWlCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsNkNBQVc7QUFDekIsTUFBTSw2Q0FBVztBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGlCQUFpQjtBQUM3QixlQUFlLHNDQUFJO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZ0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JTQTtBQUNoQztBQUNBLFFBQVEsd0RBQXdELEVBQUUsc0NBQUk7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDBCQUEwQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sbURBQWlCO0FBQ3ZCO0FBQ0EsTUFBTSxtREFBaUI7QUFDdkI7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksMERBQTBEO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDBCQUEwQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSwwREFBMEQ7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGlDQUFpQztBQUM3QztBQUNBO0FBQ0EsY0FBYyxtREFBaUI7QUFDL0IsY0FBYyxtREFBaUI7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLG1EQUFpQjtBQUN2QjtBQUNBLE1BQU0sbURBQWlCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksZUFBZTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxlQUFlO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxpQ0FBaUM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sbURBQWlCO0FBQ3ZCO0FBQ0EsTUFBTSxtREFBaUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksMERBQTBEO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGlDQUFpQztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBU0U7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyWkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ3dCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCWTtBQUN1QjtBQUMzRDtBQUNBLFFBQVEseURBQXlELEVBQUUsc0NBQUk7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsNEJBQTRCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsT0FBTztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiw4QkFBOEI7QUFDeEQ7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGVBQWU7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGVBQWU7QUFDbkM7QUFDQSx3QkFBd0IsT0FBTztBQUMvQjtBQUNBO0FBQ0EsMEJBQTBCLHFCQUFxQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixxQkFBcUI7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsWUFBWTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLG1EQUFpQjtBQUNyQyxvQkFBb0IsbURBQWlCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHdEQUFhO0FBQzVCLGVBQWUsd0RBQWE7QUFDNUI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHlEQUFjO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixtREFBaUI7QUFDckMsb0JBQW9CLG1EQUFpQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLG1EQUFpQjtBQUNyQyxvQkFBb0IsbURBQWlCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFPRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL2Y4QjtBQUNoQztBQUNBLFFBQVEsb0VBQW9FLEVBQUUsc0NBQUk7QUFDbEY7QUFDQTtBQUNBO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxPQUFPO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixtREFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLG1EQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDL0NBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOb0M7QUFDcEM7QUFZa0I7QUFDbEI7QUFDZ0Q7QUFDSjtBQUM1Qyx1QkFBdUIsNERBQVU7QUFDakM7QUFDQTtBQUNBLHFCQUFxQiwwREFBUTtBQUM3QjtBQUNBLG9CQUFvQixzREFBZ0I7QUFDcEM7QUFDQTtBQUNBLG1CQUFtQiw0Q0FBTTtBQUN6QjtBQUNBO0FBQ0EsK0JBQStCLGlEQUFXO0FBQzFDLEVBQUUseURBQW1CO0FBQ3JCLEVBQUUseURBQW1CO0FBQ3JCO0FBQ0Esa0NBQWtDLGlEQUFXO0FBQzdDLEVBQUUsNERBQXNCO0FBQ3hCLEVBQUUsNERBQXNCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUM2QjtBQUM3QiwwREFBZTtBQUNmLGdCQUFnQix1REFBaUIsQ0FBQyxtREFBUztBQUMzQyxrQkFBa0IsdURBQWlCLENBQUMsbURBQVM7QUFDN0MsbUJBQW1CLHVEQUFpQixDQUFDLHNEQUFZO0FBQ2pELG1CQUFtQix1REFBaUIsQ0FBQyxzREFBWTtBQUNqRCxxQkFBcUIsdURBQWlCLENBQUMsNkRBQW1CO0FBQzFELG1CQUFtQix1REFBaUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELGlCQUFpQix1REFBaUI7QUFDbEM7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0QsYUFBYTtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELGFBQWE7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDbUQ7QUFDVTtBQUNHO0FBQ0E7QUFDaEM7QUFDNEM7QUFDNUU7QUFDQTtBQUNBLGdCQUFnQiwrREFBVTtBQUMxQjtBQUNBLGdCQUFnQixhQUFhLDZEQUFTLEtBQUssc0RBQUc7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkIsa0JBQWtCLGFBQWEsNkRBQVMsS0FBSyxzREFBRztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixrQkFBa0IsYUFBYSw2REFBUyxLQUFLLHNEQUFHO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGFBQWEsNkRBQVMsS0FBSyxzREFBRztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsUUFBUTtBQUN4QixpQkFBaUIsYUFBYSw2REFBUyxLQUFLLHNEQUFHLHFDQUFxQztBQUNwRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLE9BQU87QUFDdkIsVUFBVSwwQ0FBMEMsTUFBTSxnREFBTztBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsMENBQTBDLHdCQUF3QjtBQUNyRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiwwREFBTTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5RUFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLGNBQWMsRUFBRSw4Q0FBWTtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsMEZBQTBGO0FBQ2xHO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDZDQUFXO0FBQzNCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9waHMvLi9ub2RlX21vZHVsZXMvZ3JhcGhpY3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcGhzLy4vbm9kZV9tb2R1bGVzL2dyYXBoaWNzL3NyYy9CdWZmZXJBdHRyaWJ1dGUuanMiLCJ3ZWJwYWNrOi8vcGhzLy4vbm9kZV9tb2R1bGVzL2dyYXBoaWNzL3NyYy9EcmF3ZXIuanMiLCJ3ZWJwYWNrOi8vcGhzLy4vbm9kZV9tb2R1bGVzL2dyYXBoaWNzL3NyYy9NZXNoUmVuZGVyZXIuanMiLCJ3ZWJwYWNrOi8vcGhzLy4vbm9kZV9tb2R1bGVzL2dyYXBoaWNzL3NyYy9Nb2RlbC5qcyIsIndlYnBhY2s6Ly9waHMvLi9ub2RlX21vZHVsZXMvZ3JhcGhpY3Mvc3JjL1ByaW1pdGl2ZVJlbmRlcmVyLmpzIiwid2VicGFjazovL3Bocy8uL25vZGVfbW9kdWxlcy9ncmFwaGljcy9zcmMvYXR0cmliVHlwZVByb3BzLmpzIiwid2VicGFjazovL3Bocy8uL25vZGVfbW9kdWxlcy9ncmFwaGljcy9zcmMvZW51bXMuanMiLCJ3ZWJwYWNrOi8vcGhzLy4vbm9kZV9tb2R1bGVzL2dyYXBoaWNzL3NyYy9nbENvbnRleFdyYXBwZXIuanMiLCJ3ZWJwYWNrOi8vcGhzLy4vbm9kZV9tb2R1bGVzL2dyYXBoaWNzL3NyYy9nbHRmVXRpbHMuanMiLCJ3ZWJwYWNrOi8vcGhzLy4vbm9kZV9tb2R1bGVzL2dyYXBoaWNzL3NyYy9wcmltaXRpdmVzLmpzIiwid2VicGFjazovL3Bocy8uL25vZGVfbW9kdWxlcy9ncmFwaGljcy9zcmMvcHJvZ3JhbUluZm8uanMiLCJ3ZWJwYWNrOi8vcGhzLy4vbm9kZV9tb2R1bGVzL2dyYXBoaWNzL3NyYy9yZW5kZXIvc2hhZGVycy9kZWZhdWx0L2luZGV4LmpzIiwid2VicGFjazovL3Bocy8uL25vZGVfbW9kdWxlcy9ncmFwaGljcy9zcmMvcmVuZGVyL3NoYWRlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcGhzLy4vbm9kZV9tb2R1bGVzL2dyYXBoaWNzL3NyYy9yZW5kZXIvc2hhZGVycy9wb2ludExpZ2h0L2luZGV4LmpzIiwid2VicGFjazovL3Bocy8uL25vZGVfbW9kdWxlcy9ncmFwaGljcy9zcmMvdGV4dHVyZUluZm8uanMiLCJ3ZWJwYWNrOi8vcGhzLy4vbm9kZV9tb2R1bGVzL21hdGgvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcGhzLy4vbm9kZV9tb2R1bGVzL21hdGgvc3JjL2FhYmIuanMiLCJ3ZWJwYWNrOi8vcGhzLy4vbm9kZV9tb2R1bGVzL21hdGgvc3JjL20zLmpzIiwid2VicGFjazovL3Bocy8uL25vZGVfbW9kdWxlcy9tYXRoL3NyYy9tNC5qcyIsIndlYnBhY2s6Ly9waHMvLi9ub2RlX21vZHVsZXMvbWF0aC9zcmMvdmVjMy5qcyIsIndlYnBhY2s6Ly9waHMvLi9yYWdkb2xsRGVtby9SYWdkb2xsLmpzIiwid2VicGFjazovL3Bocy8uL3NoYWRlci5qcyIsIndlYnBhY2s6Ly9waHMvLi9zcmMvbWlzYy9jb250cm9sbGFibGUuanMiLCJ3ZWJwYWNrOi8vcGhzLy4vc3JjL21pc2Mva2V5SW5wdXQuanMiLCJ3ZWJwYWNrOi8vcGhzLy4vc3JjL21pc2MvbW91c2VJbnB1dC5qcyIsIndlYnBhY2s6Ly9waHMvLi9zcmMvcGh5c2ljcy9SaWdpZEJvZHkuanMiLCJ3ZWJwYWNrOi8vcGhzLy4vc3JjL3BoeXNpY3MvU2ltdWxhdGlvbi5qcyIsIndlYnBhY2s6Ly9waHMvLi9zcmMvcGh5c2ljcy9TeXN0ZW0uanMiLCJ3ZWJwYWNrOi8vcGhzLy4vc3JjL3BoeXNpY3MvVHJlZS5qcyIsIndlYnBhY2s6Ly9waHMvLi9zcmMvcGh5c2ljcy9jbGlwcGluZy5qcyIsIndlYnBhY2s6Ly9waHMvLi9zcmMvcGh5c2ljcy9jb2xsaWRlci5qcyIsIndlYnBhY2s6Ly9waHMvLi9zcmMvcGh5c2ljcy9jb25zdHJhaW50cy5qcyIsIndlYnBhY2s6Ly9waHMvLi9zcmMvcGh5c2ljcy9ldmVudEVtaXR0ZXIuanMiLCJ3ZWJwYWNrOi8vcGhzLy4vc3JjL3BoeXNpY3MvZ2prLmpzIiwid2VicGFjazovL3Bocy8uL3NyYy9waHlzaWNzL21hbmlmb2xkLmpzIiwid2VicGFjazovL3Bocy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9waHMvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcGhzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9waHMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9waHMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9waHMvLi9yYWdkb2xsRGVtby9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCdWZmZXJJbmZvLCBEeW5hbWljQnVmZmVySW5mbyB9IGZyb20gXCIuL3NyYy9CdWZmZXJBdHRyaWJ1dGVcIjtcbmltcG9ydCB7XG4gIFByaW1pdGl2ZVJlbmRlckluZm9Gcm9tQXJyYXlEYXRhLFxuICBBcnJheURhdGFGcm9tR2x0ZixcbiAgRW50aXR5RGF0YUZyb21HbHRmLFxuICBHTFRGLFxufSBmcm9tIFwiLi9zcmMvZ2x0ZlV0aWxzXCI7XG5pbXBvcnQgeyBNZXNoUmVuZGVyZXIsIFNraW5uZWRNZXNoUmVuZGVyZXIgfSBmcm9tIFwiLi9zcmMvTWVzaFJlbmRlcmVyXCI7XG5pbXBvcnQge1xuICBjcmVhdGVCb3gsXG4gIGNyZWF0ZUNvbmUsXG4gIGNyZWF0ZUNpcmNsZSxcbiAgY3JlYXRlU3BoZXJlLFxuICBjcmVhdGVUcnVuY2F0ZWRDb25lXG59IGZyb20gXCIuL3NyYy9wcmltaXRpdmVzXCI7XG5pbXBvcnQgUHJpbWl0aXZlUmVuZGVyZXIgZnJvbSBcIi4vc3JjL1ByaW1pdGl2ZVJlbmRlcmVyXCI7XG5pbXBvcnQge1xuICBnZXRHTFR5cGVGb3JUeXBlZEFycmF5LFxuICBQcm9ncmFtSW5mbyxcbiAgZXhwYW5kZWRUeXBlZEFycmF5LFxufSBmcm9tIFwiLi9zcmMvcHJvZ3JhbUluZm9cIjtcbmltcG9ydCBEcmF3ZXIgZnJvbSBcIi4vc3JjL0RyYXdlclwiO1xuaW1wb3J0IHtcbiAgVGV4dHVyZUluZm8sXG4gIG1ha2VJbWdGcm9tU3ZnWG1sLFxuICBtYWtlU3RyaXBlSW1nLFxufSBmcm9tIFwiLi9zcmMvdGV4dHVyZUluZm9cIjtcbmltcG9ydCBNb2RlbCBmcm9tIFwiLi9zcmMvTW9kZWxcIjtcbmltcG9ydCB7IGRlZmF1bHRTaGFkZXJzLCBwb2ludExpZ2h0U2hhZGVycyB9IGZyb20gXCIuL3NyYy9yZW5kZXIvc2hhZGVyc1wiO1xuaW1wb3J0IEdMY29udGV4dFdyYXBwZXIgZnJvbSBcIi4vc3JjL2dsQ29udGV4V3JhcHBlclwiO1xuXG5cbmV4cG9ydCB7XG4gIEdMVEYsXG4gIEdMY29udGV4dFdyYXBwZXIsXG4gIFRleHR1cmVJbmZvLFxuICBtYWtlSW1nRnJvbVN2Z1htbCxcbiAgbWFrZVN0cmlwZUltZyxcbiAgTW9kZWwsXG4gIFByaW1pdGl2ZVJlbmRlcmVyLFxuICBFbnRpdHlEYXRhRnJvbUdsdGYsXG4gIFByaW1pdGl2ZVJlbmRlckluZm9Gcm9tQXJyYXlEYXRhLFxuICBBcnJheURhdGFGcm9tR2x0ZixcbiAgTWVzaFJlbmRlcmVyLFxuICBTa2lubmVkTWVzaFJlbmRlcmVyLFxuICBjcmVhdGVCb3gsXG4gIFByb2dyYW1JbmZvLFxuICBEcmF3ZXIsXG4gIGNyZWF0ZUNvbmUsXG4gIGNyZWF0ZUNpcmNsZSxcbiAgZGVmYXVsdFNoYWRlcnMsXG4gIHBvaW50TGlnaHRTaGFkZXJzLFxuICBjcmVhdGVTcGhlcmUsXG4gIGNyZWF0ZVRydW5jYXRlZENvbmVcbn07XG4iLCJpbXBvcnQgeyBnZXRHTFR5cGVGb3JUeXBlZEFycmF5IH0gZnJvbSBcIi4vcHJvZ3JhbUluZm9cIjtcbmltcG9ydCB7IFRZUEVEX0FSUkFZUyB9IGZyb20gXCIuL2VudW1zXCI7XG5jb25zdCBjcmVhdGVJbmRpY2VzQnVmZmVyID0gKGdsLCBpbmRpY2VzKSA9PiB7XG4gIGNvbnN0IGJ1ZmZlciA9IGdsLmNyZWF0ZUJ1ZmZlcigpO1xuICBnbC5iaW5kQnVmZmVyKGdsLkVMRU1FTlRfQVJSQVlfQlVGRkVSLCBidWZmZXIpO1xuICBnbC5idWZmZXJEYXRhKGdsLkVMRU1FTlRfQVJSQVlfQlVGRkVSLCBpbmRpY2VzLCBnbC5TVEFUSUNfRFJBVyk7XG4gIHJldHVybiBidWZmZXI7XG59O1xuY29uc3QgZmxvYXRBdHRyaWJTZXR0ZXIgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIG51bUNvbXBvbmVudHMsXG4gICAgdHlwZSxcbiAgICBsb2NhdGlvbixcbiAgICBudW1BdHRyaWJ1dGVzLFxuICAgIHN0cmlkZSxcbiAgICBvZmZzZXQsXG4gICAgYnVmZmVyLFxuICAgIGdsLFxuICAgIGRpdmlzb3IsXG4gIH0gPSBwcm9wcztcblxuICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgYnVmZmVyKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1BdHRyaWJ1dGVzOyBpKyspIHtcbiAgICBjb25zdCBfb2Zmc2V0ID0gbnVtQ29tcG9uZW50cyAqIGkgKiBUWVBFRF9BUlJBWVNbdHlwZV0uQllURVNfUEVSX0VMRU1FTlQ7XG4gICAgZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkobG9jYXRpb24gKyBpKTtcbiAgICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKFxuICAgICAgbG9jYXRpb24gKyBpLFxuICAgICAgbnVtQ29tcG9uZW50cyxcbiAgICAgIHR5cGUsXG4gICAgICBmYWxzZSxcbiAgICAgIHN0cmlkZSxcbiAgICAgIG9mZnNldCArIF9vZmZzZXRcbiAgICApO1xuXG4gICAgaWYgKGRpdmlzb3IpIGdsLnZlcnRleEF0dHJpYkRpdmlzb3IobG9jYXRpb24gKyBpLCBkaXZpc29yKTtcbiAgfVxufTtcbmNvbnN0IGludEF0dHJpYlNldHRlciA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgbnVtQ29tcG9uZW50cyxcbiAgICB0eXBlLFxuICAgIGxvY2F0aW9uLFxuICAgIG51bUF0dHJpYnV0ZXMsXG4gICAgc3RyaWRlLFxuICAgIG9mZnNldCxcbiAgICBidWZmZXIsXG4gICAgZ2wsXG4gICAgZGl2aXNvcixcbiAgfSA9IHByb3BzO1xuICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgYnVmZmVyKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1BdHRyaWJ1dGVzOyBpKyspIHtcbiAgICBjb25zdCBfb2Zmc2V0ID0gbnVtQ29tcG9uZW50cyAqIGkgKiBUWVBFRF9BUlJBWVNbdHlwZV0uQllURVNfUEVSX0VMRU1FTlQ7XG4gICAgZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkobG9jYXRpb24gKyBpKTtcbiAgICBnbC52ZXJ0ZXhBdHRyaWJJUG9pbnRlcihcbiAgICAgIGxvY2F0aW9uICsgaSxcbiAgICAgIG51bUNvbXBvbmVudHMsXG4gICAgICB0eXBlLFxuICAgICAgZmFsc2UsXG4gICAgICBzdHJpZGUsXG4gICAgICBvZmZzZXQgKyBfb2Zmc2V0XG4gICAgKTtcbiAgICBpZiAoZGl2aXNvcikgZ2wudmVydGV4QXR0cmliRGl2aXNvcihsb2NhdGlvbiArIGksIGRpdmlzb3IpO1xuICB9XG59O1xuY29uc3QgYXR0cmliVHlwZU1hcCA9IHt9O1xuYXR0cmliVHlwZU1hcFsweDE0MDBdID0gaW50QXR0cmliU2V0dGVyO1xuYXR0cmliVHlwZU1hcFsweDE0MDZdID0gZmxvYXRBdHRyaWJTZXR0ZXI7XG5hdHRyaWJUeXBlTWFwWzB4MTQwMV0gPSBpbnRBdHRyaWJTZXR0ZXI7XG5hdHRyaWJUeXBlTWFwWzB4MTQwNF0gPSBpbnRBdHRyaWJTZXR0ZXI7XG5hdHRyaWJUeXBlTWFwWzB4MTQwNV0gPSBpbnRBdHRyaWJTZXR0ZXI7XG5hdHRyaWJUeXBlTWFwWzB4MTQwMl0gPSBpbnRBdHRyaWJTZXR0ZXI7XG5hdHRyaWJUeXBlTWFwWzB4MTQwM10gPSBpbnRBdHRyaWJTZXR0ZXI7XG5cbmNvbnN0IHNldEF0dHJpYnV0ZXMgPSAoZ2wsIGJ1ZmZlckluZm8sIGRpdmlzb3IpID0+IHtcbiAgY29uc3QgeyB0eXBlIH0gPSBidWZmZXJJbmZvO1xuICBjb25zdCBzZXR0ZXIgPSBhdHRyaWJUeXBlTWFwW3R5cGVdO1xuICBzZXR0ZXIoYnVmZmVySW5mbywgZGl2aXNvcik7XG59O1xuY2xhc3MgQnVmZmVyQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKGdsLCB0YXJnZXQgPSAweDg4OTIpIHtcbiAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcbiAgICB0aGlzLmJ1ZmZlciA9IGdsLmNyZWF0ZUJ1ZmZlcigpO1xuICAgIHRoaXMuZ2wgPSBnbDtcbiAgICB0aGlzLmJ1ZmZlckRhdGEgPSAoZGF0YSwgYnl0ZUxlbmd0aCwgdXNhZ2UgPSBnbC5TVEFUSUNfRFJBVykgPT4ge1xuICAgICAgZ2wuYmluZEJ1ZmZlcih0YXJnZXQsIHRoaXMuYnVmZmVyKTtcbiAgICAgIGdsLmJ1ZmZlckRhdGEodGFyZ2V0LCBkYXRhIHx8IGJ5dGVMZW5ndGgsIHVzYWdlKTtcbiAgICB9O1xuICAgIHRoaXMuYnVmZmVyU3ViRGF0YSA9IChkYXRhLCBvZmZzZXQgPSAwKSA9PiB7XG4gICAgICBnbC5iaW5kQnVmZmVyKHRhcmdldCwgdGhpcy5idWZmZXIpO1xuICAgICAgZ2wuYnVmZmVyU3ViRGF0YSh0YXJnZXQsIG9mZnNldCwgZGF0YSk7XG4gICAgfTtcbiAgfVxufVxuY2xhc3MgQXR0cmlidXRlU2V0dGVyIHtcbiAgY29uc3RydWN0b3IoaW5mbykge1xuICAgIHRoaXMuc3RyaWRlID0gaW5mby5zdHJpZGUgfHwgMDtcbiAgICB0aGlzLm51bUNvbXBvbmVudHMgPSBpbmZvLm51bUNvbXBvbmVudHM7XG4gICAgdGhpcy5udW1BdHRyaWJ1dGVzID0gaW5mby5udW1BdHRyaWJ1dGVzIHx8IDE7XG4gICAgdGhpcy5vZmZzZXQgPSBpbmZvLm9mZnNldCB8fCAwO1xuICAgIHRoaXMudHlwZSA9IGluZm8udHlwZTtcbiAgICB0aGlzLmxvY2F0aW9uID0gaW5mby5sb2NhdGlvbjtcbiAgfVxuICBzZXRBdHRyaWJ1dGUoYnVmZmVyQ29udHJvbGxlciwgZGl2aXNvcikge1xuICAgIGNvbnN0IHsgdHlwZSB9ID0gdGhpcztcbiAgICBjb25zdCBzZXR0ZXIgPSBhdHRyaWJUeXBlTWFwW3R5cGVdO1xuICAgIHNldHRlcih0aGlzLCBidWZmZXJDb250cm9sbGVyLCBkaXZpc29yKTtcbiAgfVxufVxuY2xhc3MgQnVmZmVyQXR0cmlidXRlIHtcbiAgY29uc3RydWN0b3IoZ2wsIGluZm8pIHtcbiAgICB0aGlzLmdsID0gZ2w7XG4gICAgdGhpcy5idWZmZXIgPSBnbC5jcmVhdGVCdWZmZXIoKTtcbiAgICB0aGlzLnN0cmlkZSA9IGluZm8uc3RyaWRlIHx8IDA7XG4gICAgdGhpcy5udW1Db21wb25lbnRzID0gaW5mby5udW1Db21wb25lbnRzO1xuICAgIHRoaXMubnVtQXR0cmlidXRlcyA9IGluZm8ubnVtQXR0cmlidXRlcyB8fCAxO1xuICAgIHRoaXMub2Zmc2V0ID0gaW5mby5vZmZzZXQgfHwgMDtcbiAgICB0aGlzLnR5cGUgPSBpbmZvLnR5cGU7XG4gICAgdGhpcy5sb2NhdGlvbiA9IGluZm8ubG9jYXRpb247XG4gICAgdGhpcy5kaXZpc29yID0gaW5mby5kaXZpc29yO1xuICB9XG4gIHNldEF0dHJpYnV0ZSgpIHtcbiAgICBjb25zdCB7IHR5cGUsIGdsIH0gPSB0aGlzO1xuICAgIGNvbnN0IHNldHRlciA9IGF0dHJpYlR5cGVNYXBbdHlwZV07XG4gICAgc2V0dGVyKHRoaXMpO1xuICB9XG4gIGJ1ZmZlckRhdGEoZGF0YSwgYnl0ZUxlbmd0aCwgdXNhZ2UgPSAweDg4ZTQpIHtcbiAgICBjb25zdCB7IGdsLCBidWZmZXIgfSA9IHRoaXM7XG4gICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIGJ1ZmZlcik7XG4gICAgZ2wuYnVmZmVyRGF0YShnbC5BUlJBWV9CVUZGRVIsIGRhdGEgfHwgYnl0ZUxlbmd0aCwgdXNhZ2UpO1xuICB9XG4gIGJ1ZmZlclN1YkRhdGEoZGF0YSwgb2Zmc2V0ID0gMCkge1xuICAgIGNvbnN0IHsgZ2wsIGJ1ZmZlciB9ID0gdGhpcztcbiAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgYnVmZmVyKTtcbiAgICBnbC5idWZmZXJTdWJEYXRhKGdsLkFSUkFZX0JVRkZFUiwgb2Zmc2V0LCBkYXRhKTtcbiAgfVxufVxuXG5leHBvcnQge1xuICBCdWZmZXJBdHRyaWJ1dGUsXG4gIGNyZWF0ZUluZGljZXNCdWZmZXIsXG4gIEF0dHJpYnV0ZVNldHRlcixcbiAgQnVmZmVyQ29udHJvbGxlcixcbn07XG4iLCJpbXBvcnQgeyBtNCB9IGZyb20gXCJtYXRoXCI7XG5cbmNvbnN0IGRlZ1RvUmFkID0gKGQpID0+IChkICogTWF0aC5QSSkgLyAxODA7XG5cbmNvbnN0IGZpZWxkT2ZWaWV3UmFkaWFucyA9IGRlZ1RvUmFkKDkwKTtcblxuY2xhc3MgRHJhd2VyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5jb250ZXh0ID0gbnVsbDtcbiAgICB0aGlzLnByb2plY3Rpb25NYXRyaXggPSBudWxsO1xuICAgIHRoaXMuZmllbGRPZlZpZXdSYWRpYW5zID0gZGVnVG9SYWQoOTApO1xuICB9XG4gIHNldENvbnRleHQoZ2xDb250ZXh0V3JhcHBlcikge1xuICAgIHRoaXMuY29udGV4dCA9IGdsQ29udGV4dFdyYXBwZXI7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgc2V0RmllbGRPZlZpZXcoYW5nbGUpIHtcbiAgICB0aGlzLmZpZWxkT2ZWaWV3UmFkaWFucyA9IGRlZ1RvUmFkKGFuZ2xlKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICB1cGRhdGUzRFByb2plY3Rpb25NYXRyaXgoek5lYXIgPSAwLjAxLCB6RmFyID0gMjAwMCkge1xuICAgIGNvbnN0IHsgZ2wgfSA9IHRoaXMuY29udGV4dDtcbiAgICBjb25zdCBhc3BlY3QgPSBnbC5jYW52YXMuY2xpZW50V2lkdGggLyBnbC5jYW52YXMuY2xpZW50SGVpZ2h0O1xuICAgIHRoaXMucHJvamVjdGlvbk1hdHJpeCA9IG00LnBlcnNwZWN0aXZlKFxuICAgICAgZmllbGRPZlZpZXdSYWRpYW5zLFxuICAgICAgYXNwZWN0LFxuICAgICAgek5lYXIsXG4gICAgICB6RmFyXG4gICAgKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGdldFZpZXdQcm9qZWN0aW9uTWF0cml4KGNhbWVyYU1hdHJpeCkge1xuICAgIGNvbnN0IHsgcHJvamVjdGlvbk1hdHJpeCB9ID0gdGhpcztcbiAgICBjb25zdCB7IGdsIH0gPSB0aGlzLmNvbnRleHQ7XG4gICAgY29uc3Qgdmlld01hdHJpeCA9IG00LmludmVyc2UoY2FtZXJhTWF0cml4KTtcbiAgICByZXR1cm4gbTQubXVsdGlwbHkocHJvamVjdGlvbk1hdHJpeCwgdmlld01hdHJpeCk7XG4gIH1cbiAgZHJhdyhyZW5kZXJJbmZvLCB1bmlmb3JtcywgY2FtZXJhTWF0cml4KSB7XG4gICAgY29uc3Qgdmlld1Byb2plY3Rpb25NYXRyaXggPSB0aGlzLmdldFZpZXdQcm9qZWN0aW9uTWF0cml4KGNhbWVyYU1hdHJpeCk7XG4gICAgY29uc3Qge1xuICAgICAgdmFvLFxuICAgICAgbW9kZSxcbiAgICAgIG9mZnNldCxcbiAgICAgIG51bUVsZW1lbnRzLFxuICAgICAgaW5kaWNlcyxcbiAgICAgIGNvbXBvbmVudFR5cGUsXG4gICAgICBwcm9ncmFtSW5mbyxcbiAgICB9ID0gcmVuZGVySW5mbztcbiAgICBjb25zdCB7IGdsIH0gPSB0aGlzLmNvbnRleHQ7XG5cbiAgICBjb25zdCB1X3dvcmxkVmlld1Byb2plY3Rpb24gPSBtNC5tdWx0aXBseShcbiAgICAgIHZpZXdQcm9qZWN0aW9uTWF0cml4LFxuICAgICAgdW5pZm9ybXMudV9tYXRyaXhcbiAgICApO1xuICBcbiAgICB0aGlzLmNvbnRleHQudXNlUHJvZ3JhbUluZm8ocHJvZ3JhbUluZm8pO1xuICAgIHRoaXMuY29udGV4dFxuICAgICAgLmdldExhc3RVc2VkUHJvZ3JhbUluZm8oKVxuICAgICAgLnNldFVuaWZvcm1zKHsgLi4udW5pZm9ybXMsICB1X3dvcmxkVmlld1Byb2plY3Rpb24gfSk7XG4gICAgaWYgKHZhbykgZ2wuYmluZFZlcnRleEFycmF5KHZhbyk7XG4gICAgaWYgKCFpbmRpY2VzKSB7XG4gICAgICBnbC5kcmF3QXJyYXlzKG1vZGUsIG9mZnNldCwgbnVtRWxlbWVudHMpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBnbC5kcmF3RWxlbWVudHMobW9kZSwgbnVtRWxlbWVudHMsIGNvbXBvbmVudFR5cGUsIG9mZnNldCk7XG4gIH1cbiAgZHJhd0luc3RhbmNlZChyZW5kZXJJbmZvLCB1bmlmb3JtcywgY2FtZXJhTWF0cml4LCBudW1JbnN0YW5jZXMpIHtcbiAgICBjb25zdCB2aWV3UHJvamVjdGlvbk1hdHJpeCA9IHRoaXMuZ2V0Vmlld1Byb2plY3Rpb25NYXRyaXgoY2FtZXJhTWF0cml4KTtcbiAgICBjb25zdCB7IGdsIH0gPSB0aGlzLmNvbnRleHQ7XG4gICAgY29uc3QgeyB2YW8sIG1vZGUsIG9mZnNldCwgbnVtRWxlbWVudHMsIGluZGljZXMsIHByb2dyYW1JbmZvIH0gPSByZW5kZXJJbmZvO1xuICAgIGNvbnN0IHdvcmxkVmlld1Byb2plY3Rpb24gPSBtNC5tdWx0aXBseShcbiAgICAgIHZpZXdQcm9qZWN0aW9uTWF0cml4LFxuICAgICAgdW5pZm9ybXMudV9tYXRyaXhcbiAgICApO1xuICAgIGNvbnN0IHdvcmxkTWF0cml4ID0gdW5pZm9ybXMudV9tYXRyaXg7XG4gICAgdGhpcy5jb250ZXh0LnVzZVByb2dyYW1JbmZvKHByb2dyYW1JbmZvKTtcbiAgICB0aGlzLmNvbnRleHRcbiAgICAgIC5nZXRMYXN0VXNlZFByb2dyYW1JbmZvKClcbiAgICAgIC5zZXRVbmlmb3Jtcyh7IC4uLnVuaWZvcm1zLCB3b3JsZE1hdHJpeCwgd29ybGRWaWV3UHJvamVjdGlvbiB9KTtcbiAgICBnbC5iaW5kVmVydGV4QXJyYXkodmFvKTtcbiAgICBpZiAoIWluZGljZXMpIHtcbiAgICAgIGdsLmRyYXdBcnJheXNJbnN0YW5jZWQobW9kZSwgb2Zmc2V0LCBudW1FbGVtZW50cywgbnVtSW5zdGFuY2VzKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZ2wuZHJhd0VsZW1lbnRzSW5zdGFuY2VkKFxuICAgICAgbW9kZSxcbiAgICAgIG51bUVsZW1lbnRzLFxuICAgICAgZ2wuVU5TSUdORURfU0hPUlQsXG4gICAgICBvZmZzZXQsXG4gICAgICBudW1JbnN0YW5jZXNcbiAgICApO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBEcmF3ZXI7XG4iLCJpbXBvcnQgZ2V0QXR0cmlidXRlUHJvcHNCeVR5cGUgZnJvbSBcIi4vYXR0cmliVHlwZVByb3BzXCI7XG5pbXBvcnQgYXR0cmliVHlwZVByb3BzIGZyb20gXCIuL2F0dHJpYlR5cGVQcm9wc1wiO1xuaW1wb3J0IHsgQnVmZmVyQXR0cmlidXRlIH0gZnJvbSBcIi4vQnVmZmVyQXR0cmlidXRlXCI7XG5jbGFzcyBNZXNoUmVuZGVyZXIge1xuICBjb25zdHJ1Y3Rvcih7IHByaW1pdGl2ZXMsIG5hbWUgfSkge1xuICAgIHRoaXMucHJpbWl0aXZlcyA9IHByaW1pdGl2ZXM7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmNvbnRleHQgPSBudWxsO1xuICAgIHRoaXMuYnVmZmVycyA9IHt9O1xuICB9XG4gIHNldENvbnRleHQoZ2xDb250ZXh0V3JhcHBlcikge1xuICAgIHRoaXMuY29udGV4dCA9IGdsQ29udGV4dFdyYXBwZXI7XG4gICAgZm9yIChsZXQgaSA9IDAsIG4gPSB0aGlzLnByaW1pdGl2ZXMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICB0aGlzLnByaW1pdGl2ZXNbaV0uc2V0Q29udGV4dChnbENvbnRleHRXcmFwcGVyKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgc2V0UHJvZ3JhbUluZm8ocHJvZ3JhbUluZm8pIHtcbiAgICBmb3IgKGxldCBpID0gMCwgbiA9IHRoaXMucHJpbWl0aXZlcy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgIHRoaXMucHJpbWl0aXZlc1tpXS5zZXRQcm9ncmFtSW5mbyhwcm9ncmFtSW5mbyk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIHNldERyYXdlcihkcmF3ZXIpIHtcbiAgICBmb3IgKGxldCBpID0gMCwgbiA9IHRoaXMucHJpbWl0aXZlcy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgIHRoaXMucHJpbWl0aXZlc1tpXS5zZXREcmF3ZXIoZHJhd2VyKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgZHJhdyh1bmlmb3JtcywgY2FtZXJhTWF0cml4KSB7XG4gICAgZm9yIChsZXQgaSA9IDAsIG4gPSB0aGlzLnByaW1pdGl2ZXMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICB0aGlzLnByaW1pdGl2ZXNbaV0uZHJhdyh1bmlmb3JtcywgY2FtZXJhTWF0cml4KTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgZHJhd0luc3RhbmNlZCh1bmlmb3JtcywgY2FtZXJhTWF0cml4LCBudW1JbnN0YW5jZXMpIHtcbiAgICBmb3IgKGxldCBpID0gMCwgbiA9IHRoaXMucHJpbWl0aXZlcy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgIHRoaXMucHJpbWl0aXZlc1tpXS5kcmF3SW5zdGFuY2VkKHVuaWZvcm1zLCBjYW1lcmFNYXRyaXgsIG51bUluc3RhbmNlcyk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIGNyZWF0ZVByaW1pdGl2ZUJ1ZmZlcnMoKSB7XG4gICAgdGhpcy5wcmltaXRpdmVzLmZvckVhY2goKHByaW1pdGl2ZSkgPT4gcHJpbWl0aXZlLmNyZWF0ZUdlb21ldHJ5QnVmZmVycygpKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBjcmVhdGVCdWZmZXJBdHRyaWJEYXRhKG5hbWUsIHR5cGUsIHBhcmFtcykge1xuICAgIGNvbnN0IHsgZ2wgfSA9IHRoaXMuY29udGV4dDtcbiAgICBjb25zdCBhdHRyaWJQcm9wcyA9IGdldEF0dHJpYnV0ZVByb3BzQnlUeXBlKHR5cGUpO1xuICAgIGNvbnN0IGF0dHJpYnV0ZVByb3BzID0geyAuLi5hdHRyaWJQcm9wcywgLi4ucGFyYW1zIH07XG4gICAgY29uc3QgYnVmZmVyQXR0cmliRGF0YSA9IG5ldyBCdWZmZXJBdHRyaWJ1dGUoZ2wsIGF0dHJpYnV0ZVByb3BzKTtcbiAgICB0aGlzLmJ1ZmZlcnMgPSB7IC4uLnRoaXMuYnVmZmVycywgW25hbWVdOiBidWZmZXJBdHRyaWJEYXRhIH07XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgYnVmZmVyRGF0YShidWZmZXJOYW1lLCBkYXRhLCBieXRlTGVuZ3RoKSB7XG4gICAgY29uc3QgYnVmZmVyQXR0cmlidXRlRGVzY3JpcHRvciA9IHRoaXMuYnVmZmVyc1tidWZmZXJOYW1lXTtcblxuICAgIGJ1ZmZlckF0dHJpYnV0ZURlc2NyaXB0b3IuYnVmZmVyRGF0YShkYXRhLCBieXRlTGVuZ3RoKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBidWZmZXJTdWJEYXRhKGJ1ZmZlck5hbWUsIGRhdGEsIG9mZnNldCkge1xuICAgIGNvbnN0IGJ1ZmZlckF0dHJpYnV0ZURlc2NyaXB0b3IgPSB0aGlzLmJ1ZmZlcnNbYnVmZmVyTmFtZV07XG4gICAgYnVmZmVyQXR0cmlidXRlRGVzY3JpcHRvci5idWZmZXJTdWJEYXRhKGRhdGEsIGJ5dGVMZW5ndGgsIG9mZnNldCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgc2V0QXR0cmlidXRlKG5hbWUpIHtcbiAgICBjb25zdCBidWZmZXJBdHRyaWJEYXRhID0gdGhpcy5idWZmZXJzW25hbWVdO1xuICAgIHRoaXMucHJpbWl0aXZlcy5mb3JFYWNoKChwcmltaXRpdmUpID0+XG4gICAgICBwcmltaXRpdmUuc2V0QXR0cmlidXRlKGJ1ZmZlckF0dHJpYkRhdGEpXG4gICAgKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBzZXRQcmltaXRpdmVBdHRyaWJ1dGVzKCkge1xuICAgIGZvciAobGV0IGkgPSAwLCBuID0gdGhpcy5wcmltaXRpdmVzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgdGhpcy5wcmltaXRpdmVzW2ldLnNldEF0dHJpYnV0ZXMoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cbmNsYXNzIFNraW5uZWRNZXNoUmVuZGVyZXIge1xuICBjb25zdHJ1Y3RvcihwcmltaXRpdmVzLCBza2luKSB7XG4gICAgdGhpcy5wcmltaXRpdmVzID0gcHJpbWl0aXZlcztcbiAgICB0aGlzLnNraW4gPSBza2luO1xuICB9XG4gIGRyYXcodW5pZm9ybXMsIGNhbWVyYU1hdHJpeCkge1xuICAgIHRoaXMuc2tpbi51cGRhdGUodW5pZm9ybXMudV9tYXRyaXgpO1xuICAgIGNvbnN0IF91bmlmb3JtcyA9IHtcbiAgICAgIHVfam9pbnRUZXh0dXJlOiB0aGlzLnNraW4uam9pbnRUZXh0dXJlLFxuICAgICAgdV9udW1Kb2ludHM6IHRoaXMuc2tpbi5qb2ludHMubGVuZ3RoLFxuICAgICAgLi4udW5pZm9ybXMsXG4gICAgfTtcbiAgICBmb3IgKGxldCBpID0gMCwgbiA9IHRoaXMucHJpbWl0aXZlcy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgIHRoaXMucHJpbWl0aXZlc1tpXS5kcmF3KF91bmlmb3JtcywgY2FtZXJhTWF0cml4KTtcbiAgICB9XG4gIH1cbn1cbmV4cG9ydCB7IE1lc2hSZW5kZXJlciwgU2tpbm5lZE1lc2hSZW5kZXJlciB9O1xuIiwiXG5cbmNsYXNzIFRSUyB7XG4gIGNvbnN0cnVjdG9yKHRyYW5zbGF0aW9uLCByb3RhdGlvbiwgc2NhbGUpIHtcbiAgICB0aGlzLnRyYW5zbGF0aW9uID0gdHJhbnNsYXRpb247XG4gICAgdGhpcy5yb3RhdGlvbiA9IHJvdGF0aW9uO1xuICAgIHRoaXMuc2NhbGUgPSBzY2FsZTtcbiAgfVxuICBnZXRNYXRyaXgobSkge1xuICAgIGxldCBkc3QgPSBtIHx8IG00LmlkZW50aXR5KCk7XG4gICAgdmFyIHQgPSB0aGlzLnRyYW5zbGF0aW9uO1xuICAgIHZhciByID0gdGhpcy5yb3RhdGlvbjtcbiAgICB2YXIgcyA9IHRoaXMuc2NhbGU7XG4gICAgY29uc3Qgc2luID0gTWF0aC5zaW4oclszXSAvIDIpO1xuICAgIGNvbnN0IGNvcyA9IE1hdGguY29zKHJbM10gLyAyKTtcbiAgICBkc3QgPSBtNC50cmFuc2xhdGUoZHN0LCB0WzBdLCB0WzFdLCB0WzJdKTtcblxuICAgIGRzdCA9IG00Lm11bHRpcGx5KGRzdCwgbTQuZnJvbVF1YXRlcm5pb24ocikpO1xuXG4gICAgZHN0ID0gbTQuc2NhbGUoZHN0LCBzWzBdLCBzWzFdLCBzWzJdKTtcbiAgICByZXR1cm4gZHN0O1xuICB9XG4gIGdldFJNYXRyaXgoKSB7XG4gICAgbGV0IGRzdCA9IG00LmlkZW50aXR5KCk7XG4gICAgdmFyIHIgPSB0aGlzLnJvdGF0aW9uO1xuICAgIGRzdCA9IG00LnhSb3RhdGUoZHN0LCByWzBdKTtcbiAgICBkc3QgPSBtNC55Um90YXRlKGRzdCwgclsxXSk7XG4gICAgZHN0ID0gbTQuelJvdGF0ZShkc3QsIHJbMl0pO1xuICAgIHJldHVybiBkc3Q7XG4gIH1cbiAgZ2V0VFJtYXRyaXgoKSB7XG4gICAgY29uc3QgdCA9IHRoaXMudHJhbnNsYXRpb247XG4gICAgY29uc3QgciA9IHRoaXMucm90YXRpb247XG5cbiAgICBsZXQgbSA9IG00LnRyYW5zbGF0aW9uKCB0WzBdLCB0WzFdLCB0WzJdKTtcblxuICAgIG0gPSBtNC54Um90YXRlKG0sIHJbMF0pO1xuICAgIG0gPSBtNC55Um90YXRlKG0sIHJbMV0pO1xuICAgIG0gPSBtNC56Um90YXRlKG0sIHJbMl0pO1xuICAgIHJldHVybiBtXG4gIH1cbn1cbmNsYXNzIE5vZGUge1xuXG4gIHN0YXRpYyBtYWtlTW9kZWwoZW50aXR5RGVzY3JpcHRpb24sIHJvb3ROb2RlTmR4KSB7XG4gICAgY29uc3QgeyBub2RlcywgbWVzaGVzIH0gPSBlbnRpdHlEZXNjcmlwdGlvbjtcbiAgICBjb25zdCByb290Tm9kZSA9IG5vZGVzW3Jvb3ROb2RlTmR4XTtcbiAgICBjb25zdCBtYWtlTm9kZSA9IChub2RlRGVzY3JpcHRpb24sIG5keCkgPT4ge1xuICAgICAgY29uc3QgdHJzID0gbmV3IFRSUyhcbiAgICAgICAgbm9kZURlc2NyaXB0aW9uLnRyYW5zbGF0aW9uIHx8IFswLCAwLCAwXSxcbiAgICAgICAgbm9kZURlc2NyaXB0aW9uLnJvdGF0aW9uIHx8IFswLCAwLCAwXSxcbiAgICAgICAgbm9kZURlc2NyaXB0aW9uLnNjYWxlIHx8IFsxLCAxLCAxXVxuICAgICAgKTtcbiAgICAgIGNvbnN0IG5vZGUgPSBuZXcgTm9kZShub2RlRGVzY3JpcHRpb24ubmFtZSwgdHJzLCBuZHgpO1xuICAgICAgaWYgKG5vZGVEZXNjcmlwdGlvbi5tZXNoICE9IHVuZGVmaW5lZCkge1xuICAgICAgICBub2RlLnJlbmRlcmVyID0gbWVzaGVzW25vZGVEZXNjcmlwdGlvbi5tZXNoXTtcbiAgICAgIH1cbiAgICAgIGlmIChub2RlRGVzY3JpcHRpb24uY2hpbGRyZW4pIHtcbiAgICAgICAgbm9kZURlc2NyaXB0aW9uLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkTmR4KSA9PiB7XG4gICAgICAgICAgY29uc3QgY2hpbGQgPSBtYWtlTm9kZShub2Rlc1tjaGlsZE5keF0sIGNoaWxkTmR4KTtcbiAgICAgICAgICBjaGlsZC5zZXRQYXJlbnQobm9kZSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfTtcbiAgICByZXR1cm4gbWFrZU5vZGUocm9vdE5vZGUsIHJvb3ROb2RlTmR4KTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKG5hbWUsIHRycyA9IG5ldyBUUlMoKSkge1xuICAgIHRoaXMud29ybGRNYXRyaXggPSBtNC5pZGVudGl0eSgpO1xuICAgIHRoaXMucGFyZW50ID0gbnVsbDtcbiAgICB0aGlzLmNoaWxkcmVuID0gW107XG4gICAgdGhpcy50cnMgPSB0cnM7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnBhcnRzID0gW107XG4gICAgdGhpcy5uZHggPSBuZHg7XG4gICAgdGhpcy5za2luTmR4ID0gbnVsbDtcbiAgICB0aGlzLm9iamVjdHNUb0RyYXcgPSBbXTtcbiAgICB0aGlzLnJlbmRlcmVyID0gbnVsbDtcbiAgfVxuICBzZXRQYXJlbnQocGFyZW50KSB7XG4gICAgaWYgKHRoaXMucGFyZW50KSB7XG4gICAgICBjb25zdCBuZHggPSB0aGlzLnBhcmVudC5jaGlsZHJlbi5pbmRleE9mKHRoaXMpO1xuICAgICAgaWYgKG5keCA+PSAwKSB7XG4gICAgICAgIHRoaXMucGFyZW50LmNoaWxkcmVuLnNwbGljZShuZHgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAocGFyZW50KSB7XG4gICAgICBwYXJlbnQuY2hpbGRyZW4ucHVzaCh0aGlzKTtcbiAgICB9XG4gICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gIH1cbiAgdXBkYXRlV29ybGRNYXRyaXgocGFyZW50V29ybGRNYXRyaXgpIHtcbiAgICBsZXQgbWF0cml4ID0gdGhpcy50cnMuZ2V0TWF0cml4KCk7XG4gICAgaWYgKHBhcmVudFdvcmxkTWF0cml4KSB7XG4gICAgICBtYXRyaXggPSBtNC5tdWx0aXBseShwYXJlbnRXb3JsZE1hdHJpeCwgbWF0cml4KTtcbiAgICB9XG4gICAgdGhpcy53b3JsZE1hdHJpeCA9IG1hdHJpeDtcbiAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICBjaGlsZC51cGRhdGVXb3JsZE1hdHJpeChtYXRyaXgpO1xuICAgIH0pO1xuICB9XG4gIHVwZGF0ZVBhcnRzTGlzdCgpIHtcbiAgICBjb25zdCBpdGVyID0gKG5vZGUsIGFycikgPT4ge1xuICAgICAgYXJyLnB1c2gobm9kZSk7XG4gICAgICBub2RlLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiBpdGVyKGNoaWxkLCBhcnIpKTtcbiAgICB9O1xuICAgIGl0ZXIodGhpcywgdGhpcy5wYXJ0cyk7XG4gIH1cbiAgdXBkYXRlT2JqZWN0c1RvRHJhdygpIHtcbiAgICBjb25zdCBxdWV1ZSA9IFt0aGlzXTtcbiAgICB3aGlsZSAocXVldWUubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3Qgbm9kZSA9IHF1ZXVlLnBvcCgpO1xuICAgICAgY29uc29sZS5sb2cobm9kZSk7XG4gICAgICBpZiAobm9kZS5yZW5kZXJlcikgdGhpcy5vYmplY3RzVG9EcmF3LnB1c2gobm9kZSk7XG4gICAgICBpZiAobm9kZS5jaGlsZHJlbikgcXVldWUucHVzaCguLi5ub2RlLmNoaWxkcmVuKTtcbiAgICB9XG4gIH1cbiAgdHJhdmVyc2UoZm4pIHtcbiAgICBmbih0aGlzKTtcbiAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiBjaGlsZC50cmF2ZXJzZShmbikpO1xuICB9XG4gIGZpbmQobmR4KSB7XG4gICAgbGV0IHJlc3VsdCA9IG51bGw7XG4gICAgY29uc3QgaXRlciA9IChub2RlcykgPT4ge1xuICAgICAgZm9yIChsZXQgbm9kZSBvZiBub2Rlcykge1xuICAgICAgICBpZiAobm9kZS5uZHggPT09IG5keCkgcmVzdWx0ID0gbm9kZTtcbiAgICAgICAgZWxzZSBpdGVyKG5vZGUuY2hpbGRyZW4pO1xuICAgICAgfVxuICAgIH07XG4gICAgaXRlcihbdGhpc10pO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgZmluZEJ5TmFtZShuYW1lKSB7XG4gICAgbGV0IHJlc3VsdCA9IG51bGw7XG4gICAgY29uc3QgaXRlciA9IChub2RlcykgPT4ge1xuICAgICAgZm9yIChsZXQgbm9kZSBvZiBub2Rlcykge1xuICAgICAgICBpZiAobm9kZS5uYW1lID09PSBuYW1lKSByZXN1bHQgPSBub2RlO1xuICAgICAgICBlbHNlIGl0ZXIobm9kZS5jaGlsZHJlbik7XG4gICAgICB9XG4gICAgfTtcbiAgICBpdGVyKFt0aGlzXSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICByZW5kZXIodW5pZm9ybXMsIGNhbWVyYU1hdHJpeCkge1xuICAgIHRoaXMub2JqZWN0c1RvRHJhdy5mb3JFYWNoKChvYmplY3QpID0+IHtcbiAgICAgIG9iamVjdC5yZW5kZXJlci5kcmF3KFxuICAgICAgICB7IC4uLnVuaWZvcm1zLCB1X21hdHJpeDogb2JqZWN0LndvcmxkTWF0cml4IH0sXG4gICAgICAgIGNhbWVyYU1hdHJpeFxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxufVxuXG5cblxuXG5jbGFzcyBNb2RlbCBleHRlbmRzIE5vZGUge1xuICBzdGF0aWMgbWFrZU1vZGVsKGVudGl0eURlc2NyaXB0aW9uLCByb290Tm9kZU5keCkge1xuICAgIGNvbnN0IHsgbm9kZXMsIG1lc2hlcyB9ID0gZW50aXR5RGVzY3JpcHRpb247XG4gICAgY29uc3Qgcm9vdE5vZGUgPSBub2Rlc1tyb290Tm9kZU5keF07XG4gICAgY29uc3QgbWFrZU5vZGUgPSAobm9kZURlc2NyaXB0aW9uLCBuZHgpID0+IHtcbiAgICAgIGNvbnN0IHRycyA9IG5ldyBUUlMoXG4gICAgICAgIG5vZGVEZXNjcmlwdGlvbi50cmFuc2xhdGlvbiB8fCBbMCwgMCwgMF0sXG4gICAgICAgIG5vZGVEZXNjcmlwdGlvbi5yb3RhdGlvbiB8fCBbMCwgMCwgMCwgMF0sXG4gICAgICAgIG5vZGVEZXNjcmlwdGlvbi5zY2FsZSB8fCBbMSwgMSwgMV1cbiAgICAgICk7XG4gICAgICBjb25zdCBub2RlID0gbmV3IEVudGl0eShub2RlRGVzY3JpcHRpb24ubmFtZSwgdHJzLCBuZHgpO1xuICAgICAgaWYgKG5vZGVEZXNjcmlwdGlvbi5tZXNoICE9IHVuZGVmaW5lZCkge1xuICAgICAgICBub2RlLnJlbmRlcmVyID0gbWVzaGVzW25vZGVEZXNjcmlwdGlvbi5tZXNoXTtcbiAgICAgIH1cbiAgICAgIGlmIChub2RlRGVzY3JpcHRpb24uY2hpbGRyZW4pIHtcbiAgICAgICAgbm9kZURlc2NyaXB0aW9uLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkTmR4KSA9PiB7XG4gICAgICAgICAgY29uc3QgY2hpbGQgPSBtYWtlTm9kZShub2Rlc1tjaGlsZE5keF0sIGNoaWxkTmR4KTtcbiAgICAgICAgICBjaGlsZC5zZXRQYXJlbnQobm9kZSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfTtcbiAgICByZXR1cm4gbWFrZU5vZGUocm9vdE5vZGUsIHJvb3ROb2RlTmR4KTtcbiAgfVxuICBjb25zdHJ1Y3RvcihuYW1lLCB0cnMsIG5keCkge1xuICAgIHN1cGVyKG5hbWUsIHRycyk7XG4gICAgdGhpcy5uZHggPSBuZHg7XG4gICAgdGhpcy5waHlzaWNzID0gbnVsbDtcbiAgICB0aGlzLnNraW5OZHggPSBudWxsO1xuICAgIHRoaXMub2JqZWN0c1RvRHJhdyA9IFtdO1xuICAgIHRoaXMucmVuZGVyZXIgPSBudWxsO1xuICB9XG4gIHVwZGF0ZU9iamVjdHNUb0RyYXcoKSB7XG4gICAgY29uc3QgcXVldWUgPSBbdGhpc107XG4gICAgd2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IG5vZGUgPSBxdWV1ZS5wb3AoKTtcbiAgICAgIGNvbnNvbGUubG9nKG5vZGUpO1xuICAgICAgaWYgKG5vZGUucmVuZGVyZXIpIHRoaXMub2JqZWN0c1RvRHJhdy5wdXNoKG5vZGUpO1xuICAgICAgaWYgKG5vZGUuY2hpbGRyZW4pIHF1ZXVlLnB1c2goLi4ubm9kZS5jaGlsZHJlbik7XG4gICAgfVxuICB9XG4gIHRyYXZlcnNlKGZuKSB7XG4gICAgZm4odGhpcyk7XG4gICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4gY2hpbGQudHJhdmVyc2UoZm4pKTtcbiAgfVxuICBmaW5kKG5keCkge1xuICAgIGxldCByZXN1bHQgPSBudWxsO1xuICAgIGNvbnN0IGl0ZXIgPSAobm9kZXMpID0+IHtcbiAgICAgIGZvciAobGV0IG5vZGUgb2Ygbm9kZXMpIHtcbiAgICAgICAgaWYgKG5vZGUubmR4ID09PSBuZHgpIHJlc3VsdCA9IG5vZGU7XG4gICAgICAgIGVsc2UgaXRlcihub2RlLmNoaWxkcmVuKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGl0ZXIoW3RoaXNdKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIGZpbmRCeU5hbWUobmFtZSkge1xuICAgIGxldCByZXN1bHQgPSBudWxsO1xuICAgIGNvbnN0IGl0ZXIgPSAobm9kZXMpID0+IHtcbiAgICAgIGZvciAobGV0IG5vZGUgb2Ygbm9kZXMpIHtcbiAgICAgICAgaWYgKG5vZGUubmFtZSA9PT0gbmFtZSkgcmVzdWx0ID0gbm9kZTtcbiAgICAgICAgZWxzZSBpdGVyKG5vZGUuY2hpbGRyZW4pO1xuICAgICAgfVxuICAgIH07XG4gICAgaXRlcihbdGhpc10pO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgcmVuZGVyKHVuaWZvcm1zLCBjYW1lcmFNYXRyaXgpIHtcbiAgICB0aGlzLm9iamVjdHNUb0RyYXcuZm9yRWFjaCgob2JqZWN0KSA9PiB7XG4gICAgICBvYmplY3QucmVuZGVyZXIuZHJhdyhcbiAgICAgICAgeyAuLi51bmlmb3JtcywgdV9tYXRyaXg6IG9iamVjdC53b3JsZE1hdHJpeCB9LFxuICAgICAgICBjYW1lcmFNYXRyaXhcbiAgICAgICk7XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTW9kZWw7XG4iLCJpbXBvcnQge1xuICBjcmVhdGVJbmRpY2VzQnVmZmVyLFxuICBCdWZmZXJBdHRyaWJ1dGUsXG4gIER5bmFtaWNCdWZmZXJBdHRyaWJEZXNjcmlwdG9yLFxuICBCdWZmZXJDb250cm9sbGVyLFxuICBBdHRyaWJ1dGVTZXR0ZXIsXG59IGZyb20gXCIuL0J1ZmZlckF0dHJpYnV0ZVwiO1xuaW1wb3J0IHsgRUxFTUVOVF9TSVpFIH0gZnJvbSBcIi4vZW51bXNcIjtcbmltcG9ydCB7IGdldEdMVHlwZUZvclR5cGVkQXJyYXkgfSBmcm9tIFwiLi9wcm9ncmFtSW5mb1wiO1xuaW1wb3J0IGdldEF0dHJpYnV0ZVByb3BzQnlUeXBlIGZyb20gXCIuL2F0dHJpYlR5cGVQcm9wc1wiO1xuXG5jbGFzcyBQcmltaXRpdmVSZW5kZXJlciB7XG4gIGNvbnN0cnVjdG9yKGFycmF5RGF0YSkge1xuICAgIHRoaXMuYnVmZmVycyA9IHt9O1xuICAgIHRoaXMucHJvZ3JhbUluZm8gPSBudWxsO1xuICAgIHRoaXMuY29udGV4dCA9IG51bGw7XG4gICAgdGhpcy5kcmF3ZXIgPSBudWxsO1xuICAgIHRoaXMubW9kZSA9IG51bGw7XG4gICAgdGhpcy5vZmZzZXQgPSBudWxsO1xuICAgIHRoaXMubnVtRWxlbWVudHMgPSBudWxsO1xuICAgIHRoaXMudmFvID0gbnVsbDtcbiAgICB0aGlzLmNvbXBvbmVudFR5cGUgPSBudWxsO1xuICAgIHRoaXMuYXJyYXlEYXRhID0gYXJyYXlEYXRhO1xuICAgIGNvbnN0IHtjb21wb25lbnRUeXBlLCBudW1FbGVtZW50cywgbW9kZSB9ID0gYXJyYXlEYXRhO1xuICAgIHRoaXMubnVtRWxlbWVudHMgPSBudW1FbGVtZW50cztcbiAgICB0aGlzLm1vZGUgPSBtb2RlO1xuICAgIHRoaXMuY29tcG9uZW50VHlwZSA9IGNvbXBvbmVudFR5cGUgfHwgNTEyMztcbiAgfVxuICBzZXRDb250ZXh0KGdsQ29udGV4dFdyYXBwZXIpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBnbENvbnRleHRXcmFwcGVyO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIGNyZWF0ZVZBTygpIHtcbiAgICBpZiAodGhpcy52YW8pIHJldHVybjtcbiAgICB0aGlzLnZhbyA9IHRoaXMuY29udGV4dC5nbC5jcmVhdGVWZXJ0ZXhBcnJheSgpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIHNldE1vZGUobW9kZSl7XG4gICAgdGhpcy5tb2RlID0gbW9kZVxuICAgIHJldHVybiB0aGlzXG4gIH1cbiAgc2V0SW5kaWNlcyhhcnJheSl7XG4gICAgY29uc3Qge2NvbnRleHQsIHZhb30gPSB0aGlzXG4gICAgY29uc3Qge2dsfSA9IGNvbnRleHRcbiAgICBnbC5iaW5kVmVydGV4QXJyYXkodmFvKVxuICAgIHRoaXMubnVtRWxlbWVudHMgPSBhcnJheS5sZW5ndGhcbiAgICBjb25zdCBpbmRpY2VzQnVmZmVyID0gZ2wuY3JlYXRlQnVmZmVyKCk7XG4gICAgZ2wuYmluZEJ1ZmZlcihnbC5FTEVNRU5UX0FSUkFZX0JVRkZFUiwgaW5kaWNlc0J1ZmZlcik7XG4gICAgZ2wuYnVmZmVyRGF0YShnbC5FTEVNRU5UX0FSUkFZX0JVRkZFUiwgbmV3IFVpbnQxNkFycmF5KGFycmF5KSwgIGdsLlNUQVRJQ19EUkFXKTtcbiAgICBnbC5iaW5kVmVydGV4QXJyYXkobnVsbClcbiAgICB0aGlzLmluZGljZXMgPSBpbmRpY2VzQnVmZmVyO1xuICAgIHJldHVybiB0aGlzXG4gIH1cbiAgY3JlYXRlR2VvbWV0cnlCdWZmZXJzKCkge1xuICAgIGNvbnN0IHsgYXJyYXlEYXRhIH0gPSB0aGlzO1xuICAgIGNvbnN0IHsgZ2wgfSA9IHRoaXMuY29udGV4dDtcbiAgICBjb25zdCB7IGF0dHJpYnV0ZXMsIGluZGljZXMsIGNvbXBvbmVudFR5cGUsIG51bUVsZW1lbnRzLCBtb2RlIH0gPSBhcnJheURhdGE7XG4gICBcblxuICAgIGlmIChhdHRyaWJ1dGVzKSB7XG4gICAgICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKChhdHRyaWJ1dGVOYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICBzdHJpZGUsXG4gICAgICAgICAgdHlwZSxcbiAgICAgICAgICBvZmZzZXQsXG4gICAgICAgICAgbG9jYXRpb24sXG4gICAgICAgICAgbnVtQ29tcG9uZW50cyxcbiAgICAgICAgICBudW1BdHRyaWJ1dGVzLFxuICAgICAgICAgIGRhdGEsXG4gICAgICAgICAgc2l6ZSxcbiAgICAgICAgfSA9IGF0dHJpYnV0ZXNbYXR0cmlidXRlTmFtZV07XG4gICAgICAgIGNvbnN0IGJ1ZmZlckF0dHJpYnV0ZURlc2NyaXB0b3IgPSBuZXcgQnVmZmVyQXR0cmlidXRlKGdsLCB7XG4gICAgICAgICAgc3RyaWRlLFxuICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgb2Zmc2V0LFxuICAgICAgICAgIGxvY2F0aW9uLFxuICAgICAgICAgIG51bUF0dHJpYnV0ZXMsXG4gICAgICAgICAgbnVtQ29tcG9uZW50cyxcbiAgICAgICAgICBzaXplLFxuICAgICAgICB9KTtcbiAgICAgICAgYnVmZmVyQXR0cmlidXRlRGVzY3JpcHRvci5idWZmZXJEYXRhKGRhdGEpO1xuICAgICAgICB0aGlzLmJ1ZmZlcnMgPSB7XG4gICAgICAgICAgLi4udGhpcy5idWZmZXJzLFxuICAgICAgICAgIFthdHRyaWJ1dGVOYW1lXTogYnVmZmVyQXR0cmlidXRlRGVzY3JpcHRvcixcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoaW5kaWNlcykge1xuICAgICAgY29uc3QgaW5kaWNlc0J1ZmZlciA9IGdsLmNyZWF0ZUJ1ZmZlcigpO1xuICAgICAgZ2wuYmluZEJ1ZmZlcihnbC5FTEVNRU5UX0FSUkFZX0JVRkZFUiwgaW5kaWNlc0J1ZmZlcik7XG4gICAgICBnbC5idWZmZXJEYXRhKGdsLkVMRU1FTlRfQVJSQVlfQlVGRkVSLCBpbmRpY2VzLCBnbC5TVEFUSUNfRFJBVyk7XG4gICAgICB0aGlzLmluZGljZXMgPSBpbmRpY2VzQnVmZmVyO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBzZXRBdHRyaWJ1dGVzKCkge1xuICAgIGNvbnN0IHsgZ2wgfSA9IHRoaXMuY29udGV4dDtcblxuICAgIGdsLmJpbmRWZXJ0ZXhBcnJheSh0aGlzLnZhbyk7XG4gICAgZm9yIChjb25zdCBhdHRyaWIgaW4gdGhpcy5idWZmZXJzKSB7XG4gICAgICBjb25zdCBidWZmZXJBdHRyaWJ1dGVEZXNjcmlwdG9yID0gdGhpcy5idWZmZXJzW2F0dHJpYl07XG4gICAgICBidWZmZXJBdHRyaWJ1dGVEZXNjcmlwdG9yLnNldEF0dHJpYnV0ZSgpO1xuICAgIH1cbiAgICBnbC5iaW5kQnVmZmVyKGdsLkVMRU1FTlRfQVJSQVlfQlVGRkVSLCB0aGlzLmluZGljZXMpO1xuICAgIGdsLmJpbmRWZXJ0ZXhBcnJheShudWxsKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIHNldERyYXdlcihkcmF3ZXIpIHtcbiAgICB0aGlzLmRyYXdlciA9IGRyYXdlcjtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBzZXRQcm9ncmFtSW5mbyhwcm9ncmFtSW5mbykge1xuICAgIHRoaXMucHJvZ3JhbUluZm8gPSBwcm9ncmFtSW5mbztcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBjcmVhdGVCdWZmZXJBdHRyaWJEYXRhKG5hbWUsIHR5cGUsIHBhcmFtcykge1xuICAgIGNvbnN0IHsgZ2wgfSA9IHRoaXMuY29udGV4dDtcbiAgICBjb25zdCBhdHRyaWJQcm9wcyA9IGdldEF0dHJpYnV0ZVByb3BzQnlUeXBlKHR5cGUpO1xuICAgIGNvbnN0IGF0dHJpYnV0ZVByb3BzID0geyAuLi5hdHRyaWJQcm9wcywgLi4ucGFyYW1zIH07XG4gICAgY29uc3QgYnVmZmVyQXR0cmliRGF0YSA9IG5ldyBCdWZmZXJBdHRyaWJ1dGUoZ2wsIGF0dHJpYnV0ZVByb3BzKTtcbiAgICB0aGlzLmJ1ZmZlcnMgPSB7IC4uLnRoaXMuYnVmZmVycywgW25hbWVdOiBidWZmZXJBdHRyaWJEYXRhIH07XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgc2V0QnVmZmVyQXR0cmliRGF0YShuYW1lLCBidWZmZXJBdHRyaWJEYXRhKSB7XG4gICAgdGhpcy5idWZmZXJzID0geyAuLi50aGlzLmJ1ZmZlcnMsIFtuYW1lXTogYnVmZmVyQXR0cmliRGF0YSB9O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIHNldE93bkF0dHJpYnV0ZShuYW1lLCBkaXZpc29yKSB7XG4gICAgY29uc3QgeyBnbCB9ID0gdGhpcy5jb250ZXh0O1xuICAgIGNvbnN0IGJ1ZmZlckF0dHJpYkRhdGEgPSB0aGlzLmJ1ZmZlcnNbbmFtZV07XG4gICAgZ2wuYmluZFZlcnRleEFycmF5KHRoaXMudmFvKTtcbiAgICBidWZmZXJBdHRyaWJEYXRhLnNldEF0dHJpYnV0ZShkaXZpc29yKTtcbiAgICBnbC5iaW5kVmVydGV4QXJyYXkobnVsbCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgc2V0QXR0cmlidXRlKGJ1ZmZlckF0dHJpYkRhdGEpIHtcbiAgICBjb25zdCB7IGdsIH0gPSB0aGlzLmNvbnRleHQ7XG4gICAgZ2wuYmluZFZlcnRleEFycmF5KHRoaXMudmFvKTtcbiAgICBidWZmZXJBdHRyaWJEYXRhLnNldEF0dHJpYnV0ZSgpO1xuICAgIGdsLmJpbmRWZXJ0ZXhBcnJheShudWxsKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBidWZmZXJEYXRhKGJ1ZmZlck5hbWUsIGRhdGEsIGJ5dGVMZW5ndGgsIHVzYWdlKSB7XG4gICAgY29uc3QgYnVmZmVyQXR0cmliRGF0YSA9IHRoaXMuYnVmZmVyc1tidWZmZXJOYW1lXTtcbiAgICBidWZmZXJBdHRyaWJEYXRhLmJ1ZmZlckRhdGEoZGF0YSwgYnl0ZUxlbmd0aCwgdXNhZ2UpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIGJ1ZmZlclN1YkRhdGEoYnVmZmVyTmFtZSwgZGF0YSwgb2Zmc2V0KSB7XG4gICAgY29uc3QgYnVmZmVyRGVzYyA9IHRoaXMuYnVmZmVyc1tidWZmZXJOYW1lXTtcbiAgICBidWZmZXJEZXNjLmJ1ZmZlclN1YkRhdGEoZGF0YSwgb2Zmc2V0KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBkcmF3KHVuaWZvcm1zLCBjYW1lcmFNYXRyaXgpIHtcbiAgICB0aGlzLmRyYXdlci5kcmF3KHRoaXMsIHVuaWZvcm1zLCBjYW1lcmFNYXRyaXgpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIGRyYXdJbnN0YW5jZWQodW5pZm9ybXMsIGNhbWVyYU1hdHJpeCwgbnVtSW5zdGFuY2VzKSB7XG4gICAgdGhpcy5kcmF3ZXIuZHJhd0luc3RhbmNlZCh0aGlzLCB1bmlmb3JtcywgY2FtZXJhTWF0cml4LCBudW1JbnN0YW5jZXMpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByaW1pdGl2ZVJlbmRlcmVyO1xuIiwiY29uc3QgcHJvcHMgPSB7XG4gIG1hdDQ6IHtcbiAgICBzdHJpZGU6IDY0LFxuICAgIGJ5dGVMZW5ndGg6IDY0LFxuICAgIHR5cGU6IDB4MTQwNixcbiAgICBudW1BdHRyaWJ1dGVzOiA0LFxuICAgIG51bUNvbXBvbmVudHM6IDQsXG4gIH0sXG4gIHZlYzM6IHtcbiAgICBudW1Db21wb25lbnRzOiAzLFxuICAgIHR5cGU6IDB4MTQwNixcbiAgICBudW1BdHRyaWJ1dGVzOiAxLFxuICB9LFxufTtcbmNvbnN0IGdldEF0dHJpYnV0ZVByb3BzQnlUeXBlID0gKHR5cGUpID0+IHByb3BzW3R5cGVdO1xuZXhwb3J0IGRlZmF1bHQgZ2V0QXR0cmlidXRlUHJvcHNCeVR5cGU7XG4iLCJjb25zdCBUWVBFRF9BUlJBWVMgPSB7XG4gICAgJzUxMjAnOiBJbnQ4QXJyYXksICAgIFxuICAgICc1MTIxJzogVWludDhBcnJheSwgICBcbiAgICAnNTEyMic6IEludDE2QXJyYXksICAgXG4gICAgJzUxMjMnOiBVaW50MTZBcnJheSwgIFxuICAgICc1MTI0JzogSW50MzJBcnJheSwgICBcbiAgICAnNTEyNSc6IFVpbnQzMkFycmF5LCAgXG4gICAgJzUxMjYnOiBGbG9hdDMyQXJyYXksIFxufVxuY29uc3QgTlVNX0NPTVBPTkVOVFMgPSB7XG4gICAgJ1NDQUxBUicgOiAxLFxuICAgICdWRUMyJyA6IDIsXG4gICAgJ1ZFQzMnIDogMyxcbiAgICAnVkVDNCcgOiA0LFxuICAgICdNQVQyJzogNCxcbiAgJ01BVDMnOiA5LFxuICAnTUFUNCc6IDE2LFxufVxuY29uc3QgTE9DQVRJT05TID0ge1xuICAgICdQT1NJVElPTicgOiAwLFxuICAgICdOT1JNQUwnIDogMSxcbiAgICAnV0VJR0hUU18wJyA6IDIsXG4gICAgJ0pPSU5UU18wJyA6IDMsXG4gICAgJ1RFWENPT1JEXzAnIDogNCxcbn1cbmNvbnN0IEVMRU1FTlRfU0laRSA9IHtcbiAgICAweDE0MDYgOiA0XG59XG5leHBvcnQge1xuICAgIExPQ0FUSU9OUywgTlVNX0NPTVBPTkVOVFMsIFRZUEVEX0FSUkFZUywgRUxFTUVOVF9TSVpFXG59IiwiaW1wb3J0IHsgVGV4dHVyZUluZm8gfSBmcm9tIFwiLi90ZXh0dXJlSW5mb1wiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR0xjb250ZXh0V3JhcHBlciB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzX2lkKSB7XG4gICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtjYW52YXNfaWR9YCk7XG4gICAgICBjb25zdCBnbCA9IGNhbnZhcy5nZXRDb250ZXh0KFwid2ViZ2wyXCIpO1xuICBcbiAgICAgIGlmICghZ2wpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gd2ViZ2whXCIpO1xuICAgICAgfVxuICAgICAgdGhpcy5nbCA9IGdsO1xuICAgICAgdGhpcy50ZXh0dXJlcyA9IHt9O1xuICAgICAgdGhpcy5yZW5kZXJDYWNoZSA9IHtcbiAgICAgICAgbGFzdFVzZWRQcm9ncmFtSW5mbzogbnVsbCxcbiAgICAgIH07XG4gICAgICB0aGlzLnByb2dyYW1zID0ge307XG4gICAgfVxuICAgIGdldExhc3RVc2VkUHJvZ3JhbUluZm8oKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJDYWNoZS5sYXN0VXNlZFByb2dyYW1JbmZvO1xuICAgIH1cbiAgICBzZXRMYXN0VXNlZFByb2dyYW0ocHJvZ3JhbUluZm8pIHtcbiAgICAgIHRoaXMucmVuZGVyQ2FjaGUubGFzdFVzZWRQcm9ncmFtSW5mbyA9IHByb2dyYW1JbmZvO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHVzZVByb2dyYW1JbmZvKHByb2dyYW1JbmZvKSB7XG4gICAgICBpZiAocHJvZ3JhbUluZm8gIT0gdGhpcy5nZXRMYXN0VXNlZFByb2dyYW1JbmZvKCkpIHtcbiAgICAgICAgdGhpcy5nbC51c2VQcm9ncmFtKHByb2dyYW1JbmZvLnByb2dyYW0pO1xuICAgICAgICB0aGlzLnNldExhc3RVc2VkUHJvZ3JhbShwcm9ncmFtSW5mbyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgcmVzaXplQ2FudmFzVG9EaXNwbGF5U2l6ZShtdWx0aXBsaWVyID0gMSkge1xuICAgICAgY29uc3QgY2FudmFzID0gdGhpcy5nbC5jYW52YXM7XG4gICAgICBjb25zdCB3aWR0aCA9IChjYW52YXMuY2xpZW50V2lkdGggKiBtdWx0aXBsaWVyKSB8IDA7XG4gICAgICBjb25zdCBoZWlnaHQgPSAoY2FudmFzLmNsaWVudEhlaWdodCAqIG11bHRpcGxpZXIpIHwgMDtcbiAgXG4gICAgICBjYW52YXMud2lkdGggPSB3aWR0aDtcbiAgICAgIGNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICBcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICByZXNpemVDYW52YXMod2lkdGgsIGhlaWdodCkge1xuICAgICAgY29uc3QgY2FudmFzID0gdGhpcy5nbC5jYW52YXM7XG4gICAgICBjYW52YXMud2lkdGggPSB3aWR0aDtcbiAgICAgIGNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgc2V0Vmlld3BvcnQoKXtcbiAgICAgIHRoaXMuZ2wudmlld3BvcnQoMCwgMCwgdGhpcy5nbC5jYW52YXMud2lkdGgsICB0aGlzLmdsLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG4gICAgZ2V0Q29udGV4dCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmdsO1xuICAgIH1cbiAgICBjcmVhdGVUZXh0dXJlSW5mbyh0ZXh0dXJlTmFtZSkge1xuICAgICAgY29uc3QgdGV4dHVyZSA9IG5ldyBUZXh0dXJlSW5mbyh0aGlzLmdsKTtcbiAgICAgIHRoaXMudGV4dHVyZXMgPSB7IC4uLnRoaXMudGV4dHVyZXMsIFt0ZXh0dXJlTmFtZV06IHRleHR1cmUgfTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBnZXRUZXh0dXJlKHRleHR1cmVOYW1lKSB7XG4gICAgICByZXR1cm4gdGhpcy50ZXh0dXJlc1t0ZXh0dXJlTmFtZV07XG4gICAgfVxuICAgIHNldFRleHR1cmVVbml0KHRleHR1cmVOYW1lLCB1bml0TnVtKSB7XG4gICAgICBjb25zdCB0ZXh0dXJlID0gdGhpcy5nZXRUZXh0dXJlKHRleHR1cmVOYW1lKS50ZXh0dXJlO1xuICAgICAgc2V0VGV4dHVyZVVuaXRzKHRoaXMuZ2wsIHRleHR1cmUsIHVuaXROdW0pO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9IiwiaW1wb3J0IFByaW1pdGl2ZVJlbmRlcmVyIGZyb20gXCIuL1ByaW1pdGl2ZVJlbmRlcmVyXCI7XG5pbXBvcnQgeyBNZXNoUmVuZGVyZXIgfSBmcm9tIFwiLi9NZXNoUmVuZGVyZXJcIjtcbmltcG9ydCB7IEF0dHJpYnV0ZVNldHRlciwgQnVmZmVyQ29udHJvbGxlciB9IGZyb20gXCIuL0J1ZmZlckF0dHJpYnV0ZVwiO1xuaW1wb3J0IHsgTlVNX0NPTVBPTkVOVFMsIFRZUEVEX0FSUkFZUywgTE9DQVRJT05TIH0gZnJvbSBcIi4vZW51bXNcIjtcblxuY29uc3QgQXJyYXlEYXRhRnJvbUdsdGYgPSAoZ2x0ZiwgYnVmZmVycykgPT4ge1xuICBjb25zdCB7IGJ1ZmZlclZpZXdzLCBhY2Nlc3NvcnMsIG1lc2hlcywgbm9kZXMgfSA9IGdsdGY7XG4gIGNvbnN0IGF0dHJpYkRhdGFGcm9tQWNjZXNzb3IgPSAoYWNjZXNzb3IpID0+IHtcbiAgICBjb25zdCBidWZmZXJWaWV3ID0gYnVmZmVyVmlld3NbYWNjZXNzb3IuYnVmZmVyVmlld107XG4gICAgY29uc3QgeyBjb3VudCwgY29tcG9uZW50VHlwZSwgdHlwZSB9ID0gYWNjZXNzb3I7XG4gICAgY29uc3QgYnl0ZU9mZnNldCA9IGFjY2Vzc29yLmJ5dGVPZmZzZXQgfHwgMDtcbiAgICBjb25zdCB7IGJ5dGVMZW5ndGgsIHRhcmdldCB9ID0gYnVmZmVyVmlldztcbiAgICBjb25zdCBzdHJpZGUgPSBidWZmZXJWaWV3LmJ5dGVTdHJpZGUgfHwgMDtcbiAgICBjb25zdCBidWZmZXJWaWV3Qnl0ZU9mZnNldCA9IGJ1ZmZlclZpZXcuYnl0ZU9mZnNldCB8fCAwO1xuICAgIGNvbnN0IGJ1ZmZlciA9IGJ1ZmZlcnNbYnVmZmVyVmlldy5idWZmZXJdO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGRhdGE6IG5ldyBVaW50OEFycmF5KGJ1ZmZlciwgYnVmZmVyVmlld0J5dGVPZmZzZXQsIGJ5dGVMZW5ndGgpLFxuICAgICAgbnVtQ29tcG9uZW50czogTlVNX0NPTVBPTkVOVFNbdHlwZV0sXG4gICAgICBzdHJpZGUsXG4gICAgICBieXRlTGVuZ3RoLFxuICAgICAgbG9jYXRpb246IG51bGwsXG4gICAgICBjb3VudCxcbiAgICAgIHR5cGU6IGNvbXBvbmVudFR5cGUsXG4gICAgICBvZmZzZXQ6IGJ5dGVPZmZzZXQgfHwgMCxcbiAgICAgIGNvbXBvbmVudFR5cGU6IGFjY2Vzc29yLmNvbXBvbmVudFR5cGUsXG4gICAgfTtcbiAgfTtcbiAgY29uc3QgX21lc2hlcyA9IG1lc2hlcy5tYXAoKG1lc2gpID0+ICh7XG4gICAgcHJpbWl0aXZlczogbWVzaC5wcmltaXRpdmVzLm1hcCgoX3ByaW1pdGl2ZSkgPT4ge1xuICAgICAgY29uc3QgcHJpbWl0aXZlID0ge1xuICAgICAgICBhdHRyaWJ1dGVzOiB7fSxcbiAgICAgICAgbW9kZTogX3ByaW1pdGl2ZS5tb2RlLFxuICAgICAgfTtcbiAgICAgIGlmIChfcHJpbWl0aXZlLmhhc093blByb3BlcnR5KFwiaW5kaWNlc1wiKSkge1xuICAgICAgICBjb25zdCBpbmRpY2VzSW5mbyA9IGF0dHJpYkRhdGFGcm9tQWNjZXNzb3IoXG4gICAgICAgICAgYWNjZXNzb3JzW19wcmltaXRpdmUuaW5kaWNlc11cbiAgICAgICAgKTtcbiAgICAgICAgcHJpbWl0aXZlLmluZGljZXMgPSBpbmRpY2VzSW5mby5kYXRhO1xuICAgICAgICBwcmltaXRpdmUubnVtRWxlbWVudHMgPSBpbmRpY2VzSW5mby5jb3VudDtcbiAgICAgICAgcHJpbWl0aXZlLmNvbXBvbmVudFR5cGUgPSBpbmRpY2VzSW5mby5jb21wb25lbnRUeXBlO1xuICAgICAgfVxuICAgICAgT2JqZWN0LmtleXMoX3ByaW1pdGl2ZS5hdHRyaWJ1dGVzKS5mb3JFYWNoKChhdHRyaWJOYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IGF0dHJpYnV0ZSA9IF9wcmltaXRpdmUuYXR0cmlidXRlc1thdHRyaWJOYW1lXTtcbiAgICAgICAgcHJpbWl0aXZlLmF0dHJpYnV0ZXNbYXR0cmliTmFtZV0gPSBhdHRyaWJEYXRhRnJvbUFjY2Vzc29yKFxuICAgICAgICAgIGFjY2Vzc29yc1thdHRyaWJ1dGVdXG4gICAgICAgICk7XG4gICAgICAgIC8vaWYoYXR0cmliTmFtZSA9PT0gJ0pPSU5UU18wJykgX3ByaW1pdGl2ZS5hdHRyaWJ1dGVzW2F0dHJpYk5hbWVdLmRhdGEgPSBuZXcgVWludDMyQXJyYXkoX3ByaW1pdGl2ZS5hdHRyaWJ1dGVzW2F0dHJpYk5hbWVdLmRhdGEpXG4gICAgICAgIHByaW1pdGl2ZS5hdHRyaWJ1dGVzW2F0dHJpYk5hbWVdLmxvY2F0aW9uID0gTE9DQVRJT05TW2F0dHJpYk5hbWVdO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gcHJpbWl0aXZlO1xuICAgIH0pLFxuICAgIG5hbWU6IG1lc2gubmFtZSxcbiAgfSkpO1xuXG4gIHJldHVybiBfbWVzaGVzLm1hcCgobWVzaCkgPT4ge1xuICAgIGNvbnN0IHByaW1pdGl2ZXMgPSBtZXNoLnByaW1pdGl2ZXMubWFwKFxuICAgICAgKHByaW1pdGl2ZSkgPT4gbmV3IFByaW1pdGl2ZVJlbmRlcmVyKHByaW1pdGl2ZSlcbiAgICApO1xuICAgIGNvbnN0IG5hbWUgPSBtZXNoLm5hbWU7XG5cbiAgICByZXR1cm4gbmV3IE1lc2hSZW5kZXJlcih7IHByaW1pdGl2ZXMsIG5hbWUgfSk7XG4gIH0pO1xufTtcblxuY29uc3QgUHJpbWl0aXZlUmVuZGVySW5mb0Zyb21BcnJheURhdGEgPSAobWVzaGVzKSA9PlxuICBtZXNoZXMubWFwKChtZXNoKSA9PiB7XG4gICAgY29uc3QgcHJpbWl0aXZlcyA9IG1lc2gucHJpbWl0aXZlcy5tYXAoXG4gICAgICAocHJpbWl0aXZlKSA9PiBuZXcgUHJpbWl0aXZlUmVuZGVyZXIocHJpbWl0aXZlKVxuICAgICk7XG4gICAgY29uc3QgbmFtZSA9IG1lc2gubmFtZTtcbiAgICByZXR1cm4gbmV3IE1lc2hSZW5kZXJlcih7IG5hbWUsIHByaW1pdGl2ZXMgfSk7XG4gIH0pO1xuXG5jb25zdCBFbnRpdHlEYXRhRnJvbUdsdGYgPSAoZ2x0ZiwgYnVmZmVycykgPT5cbiAgUHJpbWl0aXZlUmVuZGVySW5mb0Zyb21BcnJheURhdGEoQXJyYXlEYXRhRnJvbUdsdGYoZ2x0ZiwgYnVmZmVycykpO1xuXG5jbGFzcyBHTFRGIHtcbiAgY29uc3RydWN0b3IoZ2x0ZiwgYmluYXJ5QnVmZmVycykge1xuICAgIGNvbnN0IHsgbm9kZXMgfSA9IGdsdGY7XG4gICAgdGhpcy5ub2RlcyA9IG5vZGVzO1xuICAgIHRoaXMubWVzaGVzID0gQXJyYXlEYXRhRnJvbUdsdGYoZ2x0ZiwgYmluYXJ5QnVmZmVycyk7XG4gIH1cbn1cbmV4cG9ydCB7XG4gIEFycmF5RGF0YUZyb21HbHRmLFxuICBQcmltaXRpdmVSZW5kZXJJbmZvRnJvbUFycmF5RGF0YSxcbiAgRW50aXR5RGF0YUZyb21HbHRmLFxuICBHTFRGLFxufTtcbiIsImltcG9ydCB7IGV4cGFuZGVkVHlwZWRBcnJheSB9IGZyb20gXCIuL3Byb2dyYW1JbmZvLmpzXCI7XG5cbmltcG9ydCB7dmVjM30gZnJvbSAnbWF0aCdcblxuY29uc3QgeyBjcm9zcywgZGlmZiwgbm9ybWFsaXplIH0gPSB2ZWMzXG5cbmNvbnN0IGxpbmVkQm94SW5kaWNlcyA9IG5ldyBVaW50MTZBcnJheShbXG4gIDAsXG4gIDEsXG4gIDEsXG4gIDIsXG4gIDIsXG4gIDMsXG4gIDMsXG4gIDAsIC8vIGZyb250XG4gIDAsXG4gIDUsXG4gIDUsXG4gIDQsXG4gIDQsXG4gIDEsXG4gIDEsXG4gIDAsIC8vYm90dG9tXG4gIDAsXG4gIDQsXG4gIDQsXG4gIDcsXG4gIDcsXG4gIDMsXG4gIDMsXG4gIDAsIC8vbGVmdFxuICAxLFxuICAyLFxuICAyLFxuICA2LFxuICA2LFxuICA1LFxuICA1LFxuICAxLCAvL3JpZ2h0XG4gIDQsXG4gIDUsXG4gIDUsXG4gIDYsXG4gIDYsXG4gIDcsXG4gIDcsXG4gIDQsIC8vIGJhY2tcbiAgMixcbiAgNyxcbiAgNyxcbiAgMyxcbiAgMyxcbiAgNixcbiAgNixcbiAgMiwgLy8gdG9wXG5dKTtcblxuY29uc3QgQ1VCRV9GQUNFX0lORElDRVMgPSBbXG4gIFszLCA3LCA1LCAxXSwgLy8gcmlnaHRcbiAgWzYsIDIsIDAsIDRdLCAvLyBsZWZ0XG4gIFs2LCA3LCAzLCAyXSwgLy8gPz9cbiAgWzAsIDEsIDUsIDRdLCAvLyA/P1xuICBbNywgNiwgNCwgNV0sIC8vIGZyb250XG4gIFsyLCAzLCAxLCAwXSwgLy8gYmFja1xuXTtcblxuZnVuY3Rpb24gY3JlYXRlQm94KF9hID0gMSwgX2IgPSAxLCBfYyA9IDEpIHtcbiAgY29uc3QgYSA9IF9hIC8gMixcbiAgICBiID0gX2IgLyAyLFxuICAgIGMgPSBfYyAvIDI7XG4gIGNvbnN0IGNvcm5lclZlcnRpY2VzID0gW1xuICAgIFstYSwgLWIsIC1jXSxcbiAgICBbK2EsIC1iLCAtY10sXG4gICAgWy1hLCArYiwgLWNdLFxuICAgIFsrYSwgK2IsIC1jXSxcbiAgICBbLWEsIC1iLCArY10sXG4gICAgWythLCAtYiwgK2NdLFxuICAgIFstYSwgK2IsICtjXSxcbiAgICBbK2EsICtiLCArY10sXG4gIF07XG5cbiAgY29uc3QgZmFjZU5vcm1hbHMgPSBbXG4gICAgWysxLCArMCwgKzBdLFxuICAgIFstMSwgKzAsICswXSxcbiAgICBbKzAsICsxLCArMF0sXG4gICAgWyswLCAtMSwgKzBdLFxuICAgIFsrMCwgKzAsICsxXSxcbiAgICBbKzAsICswLCAtMV0sXG4gIF07XG5cbiAgY29uc3QgdXZDb29yZHMgPSBbXG4gICAgWzEsIDBdLFxuICAgIFswLCAwXSxcbiAgICBbMCwgMV0sXG4gICAgWzEsIDFdLFxuICBdO1xuICBjb25zdCBudW1WZXJ0aWNlcyA9IDYgKiA0O1xuICBjb25zdCBwb3NpdGlvbnMgPSBleHBhbmRlZFR5cGVkQXJyYXkobmV3IEZsb2F0MzJBcnJheShudW1WZXJ0aWNlcyAqIDMpKTtcbiAgY29uc3Qgbm9ybWFscyA9IGV4cGFuZGVkVHlwZWRBcnJheShuZXcgRmxvYXQzMkFycmF5KG51bVZlcnRpY2VzICogMykpO1xuICAvL2NvbnN0IHRleENvb3JkcyA9IHdlYmdsVXRpbHMuY3JlYXRlQXVnbWVudGVkVHlwZWRBcnJheSgyICwgbnVtVmVydGljZXMpO1xuICBjb25zdCBpbmRpY2VzID0gZXhwYW5kZWRUeXBlZEFycmF5KG5ldyBVaW50MTZBcnJheSg2ICogMiAqIDMpKTtcblxuICBmb3IgKGxldCBmID0gMDsgZiA8IDY7ICsrZikge1xuICAgIGNvbnN0IGZhY2VJbmRpY2VzID0gQ1VCRV9GQUNFX0lORElDRVNbZl07XG4gICAgZm9yIChsZXQgdiA9IDA7IHYgPCA0OyArK3YpIHtcbiAgICAgIGNvbnN0IHBvc2l0aW9uID0gY29ybmVyVmVydGljZXNbZmFjZUluZGljZXNbdl1dO1xuICAgICAgY29uc3Qgbm9ybWFsID0gZmFjZU5vcm1hbHNbZl07XG4gICAgICBwb3NpdGlvbnMucHVzaChwb3NpdGlvbik7XG4gICAgICBub3JtYWxzLnB1c2gobm9ybWFsKTtcbiAgICB9XG5cbiAgICBjb25zdCBvZmZzZXQgPSA0ICogZjtcbiAgICBpbmRpY2VzLnB1c2gob2Zmc2V0ICsgMCwgb2Zmc2V0ICsgMSwgb2Zmc2V0ICsgMik7XG4gICAgaW5kaWNlcy5wdXNoKG9mZnNldCArIDAsIG9mZnNldCArIDIsIG9mZnNldCArIDMpO1xuICB9XG4gIGNvbnN0IGxlbiA9IHBvc2l0aW9ucy5ieXRlTGVuZ3RoO1xuICBjb25zdCB0ZXhjb29yZCA9IG5ldyBGbG9hdDMyQXJyYXkoW1xuICAgIC8vIEZyb250XG4gICAgMC4wLCAwLjAsIDEuMCwgMC4wLCAxLjAsIDEuMCwgMC4wLCAxLjAsXG4gICAgLy8gQmFja1xuICAgIDAuMCwgMC4wLCAxLjAsIDAuMCwgMS4wLCAxLjAsIDAuMCwgMS4wLFxuICAgIC8vIFRvcFxuICAgIDAuMCwgMC4wLCAxLjAsIDAuMCwgMS4wLCAxLjAsIDAuMCwgMS4wLFxuICAgIC8vIEJvdHRvbVxuICAgIDAuMCwgMC4wLCAxLjAsIDAuMCwgMS4wLCAxLjAsIDAuMCwgMS4wLFxuICAgIC8vIFJpZ2h0XG4gICAgMC4wLCAwLjAsIDEuMCwgMC4wLCAxLjAsIDEuMCwgMC4wLCAxLjAsXG4gICAgLy8gTGVmdFxuICAgIDAuMCwgMC4wLCAxLjAsIDAuMCwgMS4wLCAxLjAsIDAuMCwgMS4wLFxuICBdKTtcblxuICBjb25zdCBBcnJheURhdGEgPSB7XG4gICAgYXR0cmlidXRlczoge1xuICAgICAgTk9STUFMOiB7XG4gICAgICAgIGRhdGE6IG5vcm1hbHMsXG4gICAgICAgIGNvdW50OiA2ICogNCAqIDMsXG4gICAgICAgIGxvY2F0aW9uOiAxLFxuICAgICAgICBieXRlTGVuZ3RoOiBub3JtYWxzLmJ5dGVMZW5ndGgsXG4gICAgICAgIHN0cmlkZTogMCxcbiAgICAgICAgb2Zmc2V0OiAwLFxuICAgICAgICBudW1Db21wb25lbnRzOiAzLFxuICAgICAgICB0eXBlOiA1MTI2LFxuICAgICAgfSxcbiAgICAgIFBPU0lUSU9OOiB7XG4gICAgICAgIGRhdGE6IHBvc2l0aW9ucyxcbiAgICAgICAgY291bnQ6IDYgKiA0ICogMyxcbiAgICAgICAgbG9jYXRpb246IDAsXG4gICAgICAgIGJ5dGVMZW5ndGg6IHBvc2l0aW9ucy5ieXRlTGVuZ3RoLFxuICAgICAgICBzdHJpZGU6IDAsXG4gICAgICAgIG9mZnNldDogMCxcbiAgICAgICAgbnVtQ29tcG9uZW50czogMyxcbiAgICAgICAgdHlwZTogNTEyNixcbiAgICAgIH0sXG4gICAgICBURVhDT09SRF8wOiB7XG4gICAgICAgIGRhdGE6IHRleGNvb3JkLFxuICAgICAgICBjb3VudDogNDgsXG4gICAgICAgIHR5cGU6IDUxMjYsXG4gICAgICAgIG9mZnNldDogMCxcbiAgICAgICAgc3RyaWRlOiAwLFxuICAgICAgICBieXRlTGVuZ3RoOiB0ZXhjb29yZC5ieXRlTGVuZ3RoLFxuICAgICAgICBsb2NhdGlvbjogNCxcbiAgICAgICAgbnVtQ29tcG9uZW50czogMixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBpbmRpY2VzOiBpbmRpY2VzLFxuICAgIG51bUVsZW1lbnRzOiBpbmRpY2VzLmxlbmd0aCxcbiAgICBjb21wb25lbnRUeXBlOiA1MTIzLFxuICAgIG1vZGU6IDQsXG4gIH07XG4gIHJldHVybiBBcnJheURhdGE7XG4gIC8qcmV0dXJuIHtcbiAgICAgICAgICBnbHRmIDoge1xuICAgICAgICAgICAgYWNjZXNzb3JzIDogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGJ1ZmZlclZpZXcgOiAwLFxuICAgICAgICAgICAgICAgIGJ5dGVPZmZzZXQgOiAwLFxuICAgICAgICAgICAgICAgIGNvdW50IDo3MixcbiAgICAgICAgICAgICAgICBjb21wb25lbnRUeXBlIDogNTEyNixcbiAgICAgICAgICAgICAgICB0eXBlIDogJ1ZFQzMnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBidWZmZXJWaWV3IDogMSxcbiAgICAgICAgICAgICAgYnl0ZU9mZnNldCA6IDAsXG4gICAgICAgICAgICAgIGNvdW50IDogNzIsXG4gICAgICAgICAgICAgIGNvbXBvbmVudFR5cGUgOiA1MTI2LFxuICAgICAgICAgICAgICB0eXBlIDogJ1ZFQzMnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBidWZmZXJWaWV3IDogMixcbiAgICAgICAgICAgICAgYnl0ZU9mZnNldCA6IDAsXG4gICAgICAgICAgICAgIGNvdW50IDogMzYsXG4gICAgICAgICAgICAgIGNvbXBvbmVudFR5cGUgOiA1MTIzLFxuICAgICAgICAgICAgICB0eXBlIDogJ1NDQUxBUidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGJ1ZmZlclZpZXcgOiAzLFxuICAgICAgICAgICAgICBieXRlT2Zmc2V0IDogMCxcbiAgICAgICAgICAgICAgY291bnQgOiA0OCxcbiAgICAgICAgICAgICAgY29tcG9uZW50VHlwZSA6IDUxMjYsXG4gICAgICAgICAgICAgIHR5cGUgOiAnVkVDMidcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgYnVmZmVyVmlld3MgOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBidWZmZXIgOiAwLFxuICAgICAgICAgICAgICAgIGJ5dGVMZW5ndGggOiBwb3NpdGlvbnMuYnl0ZUxlbmd0aCxcbiAgICAgICAgICAgICAgICBieXRlT2Zmc2V0IDogMFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYnVmZmVyIDogMSxcbiAgICAgICAgICAgICAgICBieXRlTGVuZ3RoIDogbm9ybWFscy5ieXRlTGVuZ3RoLFxuICAgICAgICAgICAgICAgIGJ5dGVPZmZzZXQgOiAwXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBidWZmZXIgOiAyLFxuICAgICAgICAgICAgICAgIGJ5dGVMZW5ndGggOiBpbmRpY2VzLmJ5dGVMZW5ndGgsXG4gICAgICAgICAgICAgICAgYnl0ZU9mZnNldCA6IDBcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGJ1ZmZlciA6IDMsXG4gICAgICAgICAgICAgICAgYnl0ZUxlbmd0aCA6IHRleGNvb3JkLmJ5dGVMZW5ndGgsXG4gICAgICAgICAgICAgICAgYnl0ZU9mZnNldCA6IDBcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICBtZXNoZXMgOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWUgOiAnQ3ViZScsXG4gICAgICAgICAgICAgIHByaW1pdGl2ZXMgOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgYXR0cmlidXRlcyA6IHtcbiAgICAgICAgICAgICAgICAgICAgTk9STUFMIDogMSxcbiAgICAgICAgICAgICAgICAgICAgUE9TSVRJT04gOiAwLFxuICAgICAgICAgICAgICAgICAgICBURVhDT09SRF8wIDogM1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIGluZGljZXMgOiAyLFxuICAgICAgICAgICAgICAgICAgbW9kZSA6IDRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdLFxuICAgICAgICAgIG5vZGVzIDogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lIDogXCJDdWJlXCIsXG4gICAgICAgICAgICAgIG1lc2ggOiAwLFxuICAgICAgICAgICAgICBjaGlsZHJlbiA6IFsxXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZSA6ICdDdWJlMicsXG4gICAgICAgICAgICAgIG1lc2ggOiAwLFxuICAgICAgICAgICAgICB0cmFuc2xhdGlvbiA6IFsxLDEsMV1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIGJpbmFyeUJ1ZmZlcnMgOiBbXG4gICAgICAgICAgcG9zaXRpb25zLmJ1ZmZlciwgbm9ybWFscy5idWZmZXIsIGluZGljZXMuYnVmZmVyLCB0ZXhjb29yZC5idWZmZXJcbiAgICAgICAgXVxuICAgICAgfTsqL1xufVxuXG5jb25zdCBjcmVhdGVDb25lID0gKHJhZGl1cyA9IDIsIGhlaWdodCA9IDIsIG51bUNvcm5lcnMgPSA0KSA9PiB7XG4gIGNvbnN0IHZlcnRpY2VzID0gWzAsIC1oZWlnaHQgLyAyLCAwXTtcbiAgY29uc3Qgbm9ybWFscyA9IFtdO1xuICBjb25zdCBpbmRpY2VzID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1Db3JuZXJzICsgMTsgaSsrKSB7XG4gICAgY29uc3QgYW5nbGUgPSAoMiAqIGkgKiBNYXRoLlBJKSAvIG51bUNvcm5lcnM7XG4gICAgY29uc3QgeCA9IE1hdGguY29zKGFuZ2xlKSAqIHJhZGl1cztcbiAgICBjb25zdCB6ID0gTWF0aC5zaW4oYW5nbGUpICogcmFkaXVzO1xuICAgIGNvbnN0IHkgPSAtaGVpZ2h0IC8gMjtcbiAgICB2ZXJ0aWNlcy5wdXNoKHgsIC1oZWlnaHQgLyAyLCB6KTtcbiAgICBub3JtYWxzLnB1c2goMCwgLTEsIDApO1xuICB9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtQ29ybmVyczsgaSsrKSB7XG4gICAgaW5kaWNlcy5wdXNoKDAsIGkgKyAxLCBpICsgMik7XG4gIH1cbiAgLy92ZXJ0aWNlcy5wdXNoKHZlcnRpY2VzWzFdLCAtaGVpZ2h0LzIsIHZlcnRpY2VzWzNdKVxuICBjb25zdCBuID0gdmVydGljZXMubGVuZ3RoIC8gMztcbiAgY29uc3Qgc3RyaWRlID0gMztcbiAgY29uc3Qgc3RhcnQgPSBuO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtQ29ybmVycyArIDI7IGkrKykge1xuICAgIGNvbnN0IGFuZ2xlID0gKDIgKiBpICogTWF0aC5QSSkgLyBudW1Db3JuZXJzO1xuICAgIGNvbnN0IHggPSBNYXRoLmNvcyhhbmdsZSkgKiByYWRpdXM7XG4gICAgY29uc3QgeiA9IE1hdGguc2luKGFuZ2xlKSAqIHJhZGl1cztcbiAgICBjb25zdCB5ID0gLWhlaWdodCAvIDI7XG4gICAgY29uc3QgYSA9IFt2ZXJ0aWNlc1tpICogM10sIHZlcnRpY2VzW2kgKiAzICsgMV0sIHZlcnRpY2VzW2kgKiAzICsgMl1dO1xuICAgIGNvbnN0IGIgPSBbdmVydGljZXNbaSAqIDMgKyAzXSwgdmVydGljZXNbaSAqIDMgKyA0XSwgdmVydGljZXNbaSAqIDMgKyA1XV07XG4gICAgY29uc3QgYyA9IFswLCBoZWlnaHQgLyAyLCAwXTtcbiAgICBpbmRpY2VzLnB1c2goXG4gICAgICBzdGFydCArIGkgKiBzdHJpZGUgKyAyLFxuICAgICAgc3RhcnQgKyBpICogc3RyaWRlICsgMSxcbiAgICAgIHN0YXJ0ICsgaSAqIHN0cmlkZSArIDNcbiAgICApO1xuICAgIHZlcnRpY2VzLnB1c2goLi4uYywgLi4uYSwgLi4uYik7XG4gICAgY29uc3Qgbm9ybWFsID0gbm9ybWFsaXplKGNyb3NzKGRpZmYoYiwgYyksIGRpZmYoYSwgYykpKTtcbiAgICBub3JtYWxzLnB1c2goLi4ubm9ybWFsLCAuLi5ub3JtYWwsIC4uLm5vcm1hbCk7XG4gIH1cblxuICBjb25zdCBfbm9ybWFsID0gbmV3IEZsb2F0MzJBcnJheShub3JtYWxzKTtcbiAgY29uc3QgX3Bvc2l0aW9uID0gbmV3IEZsb2F0MzJBcnJheSh2ZXJ0aWNlcyk7XG4gIGNvbnN0IF9pbmRpY2VzID0gbmV3IFVpbnQxNkFycmF5KGluZGljZXMpO1xuICBjb25zdCBBcnJheURhdGEgPSB7XG4gICAgYXR0cmlidXRlczoge1xuICAgICAgUE9TSVRJT046IHtcbiAgICAgICAgbG9jYXRpb246IDAsXG4gICAgICAgIGNvdW50OiB2ZXJ0aWNlcy5sZW5ndGgsXG4gICAgICAgIG9mZnNldDogMCxcbiAgICAgICAgc3RyaWRlOiAwLFxuICAgICAgICBudW1Db21wb25lbnRzOiAzLFxuICAgICAgICB0eXBlOiA1MTI2LFxuICAgICAgICBkYXRhOiBfcG9zaXRpb24sXG4gICAgICAgIGJ5dGVMZW5ndGg6IF9wb3NpdGlvbi5ieXRlTGVuZ3RoLFxuICAgICAgfSxcbiAgICAgIE5PUk1BTDoge1xuICAgICAgICBsb2NhdGlvbjogMSxcbiAgICAgICAgY291bnQ6IG5vcm1hbHMubGVuZ3RoLFxuICAgICAgICBudW1Db21wb25lbnRzOiAzLFxuICAgICAgICBvZmZzZXQ6IDAsXG4gICAgICAgIHN0cmlkZTogMCxcbiAgICAgICAgdHlwZTogNTEyNixcbiAgICAgICAgZGF0YTogX25vcm1hbCxcbiAgICAgICAgYnl0ZUxlbmd0aDogX25vcm1hbC5ieXRlTGVuZ3RoLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGNvbXBvbmVudFR5cGU6IDUxMjMsXG4gICAgaW5kaWNlczogX2luZGljZXMsXG4gICAgbnVtRWxlbWVudHM6IGluZGljZXMubGVuZ3RoLFxuICAgIG1vZGU6IDQsXG4gIH07XG4gIHJldHVybiBBcnJheURhdGE7XG59O1xuXG5jb25zdCBjcmVhdGVDaXJjbGUgPSAocmFkaXVzLCBudW1Db3JuZXJzKSA9PiB7XG4gIGNvbnN0IHZlcnRpY2VzID0gWzAsIDAsIDBdO1xuICBjb25zdCBub3JtYWxzID0gW107XG4gIGNvbnN0IGluZGljZXMgPSBbXTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IG51bUNvcm5lcnMgKyAxOyBpKyspIHtcbiAgICBjb25zdCBhbmdsZSA9ICgyICogaSAqIE1hdGguUEkpIC8gbnVtQ29ybmVycztcbiAgICBjb25zdCB4ID0gTWF0aC5jb3MoYW5nbGUpICogcmFkaXVzO1xuICAgIGNvbnN0IHogPSBNYXRoLnNpbihhbmdsZSkgKiByYWRpdXM7XG5cbiAgICB2ZXJ0aWNlcy5wdXNoKHgsIDAsIHopO1xuICAgIG5vcm1hbHMucHVzaCgwLCAxLCAwKTtcbiAgfVxuICBmb3IgKGxldCBpID0gMDsgaSA8IG51bUNvcm5lcnM7IGkrKykge1xuICAgIGluZGljZXMucHVzaCgwLCBpICsgMSwgaSArIDIpO1xuICB9XG5cbiAgY29uc3QgX25vcm1hbCA9IG5ldyBGbG9hdDMyQXJyYXkobm9ybWFscyk7XG4gIGNvbnN0IF9wb3NpdGlvbiA9IG5ldyBGbG9hdDMyQXJyYXkodmVydGljZXMpO1xuICBjb25zdCBfaW5kaWNlcyA9IG5ldyBVaW50MTZBcnJheShpbmRpY2VzKTtcblxuICBjb25zdCBBcnJheURhdGEgPSB7XG4gICAgYXR0cmlidXRlczoge1xuICAgICAgUE9TSVRJT046IHtcbiAgICAgICAgbG9jYXRpb246IDAsXG4gICAgICAgIGNvdW50OiB2ZXJ0aWNlcy5sZW5ndGgsXG4gICAgICAgIG9mZnNldDogMCxcbiAgICAgICAgc3RyaWRlOiAwLFxuICAgICAgICBudW1Db21wb25lbnRzOiAzLFxuICAgICAgICB0eXBlOiA1MTI2LFxuICAgICAgICBkYXRhOiBfcG9zaXRpb24sXG4gICAgICAgIGJ5dGVMZW5ndGg6IF9wb3NpdGlvbi5ieXRlTGVuZ3RoLFxuICAgICAgfSxcbiAgICAgIE5PUk1BTDoge1xuICAgICAgICBsb2NhdGlvbjogMSxcbiAgICAgICAgY291bnQ6IG5vcm1hbHMubGVuZ3RoLFxuICAgICAgICBudW1Db21wb25lbnRzOiAzLFxuICAgICAgICBvZmZzZXQ6IDAsXG4gICAgICAgIHN0cmlkZTogMCxcbiAgICAgICAgdHlwZTogNTEyNixcbiAgICAgICAgZGF0YTogX25vcm1hbCxcbiAgICAgICAgYnl0ZUxlbmd0aDogX25vcm1hbC5ieXRlTGVuZ3RoLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGNvbXBvbmVudFR5cGU6IDUxMjMsXG4gICAgaW5kaWNlczogX2luZGljZXMsXG4gICAgbnVtRWxlbWVudHM6IGluZGljZXMubGVuZ3RoLFxuICAgIG1vZGU6IDQsXG4gIH07XG4gIHJldHVybiBBcnJheURhdGE7XG59O1xuXG5jb25zdCBjcmVhdGVTcGhlcmUgPSAoXG4gIHJhZGl1cyxcbiAgc3ViZGl2aXNpb25zQXhpcyxcbiAgc3ViZGl2aXNpb25zSGVpZ2h0LFxuICBvcHRfc3RhcnRMYXRpdHVkZUluUmFkaWFucyxcbiAgb3B0X2VuZExhdGl0dWRlSW5SYWRpYW5zLFxuICBvcHRfc3RhcnRMb25naXR1ZGVJblJhZGlhbnMsXG4gIG9wdF9lbmRMb25naXR1ZGVJblJhZGlhbnNcbikgPT4ge1xuICBpZiAoc3ViZGl2aXNpb25zQXhpcyA8PSAwIHx8IHN1YmRpdmlzaW9uc0hlaWdodCA8PSAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwic3ViZGl2aXNpb25BeGlzIGFuZCBzdWJkaXZpc2lvbkhlaWdodCBtdXN0IGJlID4gMFwiKTtcbiAgfVxuXG4gIG9wdF9zdGFydExhdGl0dWRlSW5SYWRpYW5zID0gb3B0X3N0YXJ0TGF0aXR1ZGVJblJhZGlhbnMgfHwgMDtcbiAgb3B0X2VuZExhdGl0dWRlSW5SYWRpYW5zID0gb3B0X2VuZExhdGl0dWRlSW5SYWRpYW5zIHx8IE1hdGguUEk7XG4gIG9wdF9zdGFydExvbmdpdHVkZUluUmFkaWFucyA9IG9wdF9zdGFydExvbmdpdHVkZUluUmFkaWFucyB8fCAwO1xuICBvcHRfZW5kTG9uZ2l0dWRlSW5SYWRpYW5zID0gb3B0X2VuZExvbmdpdHVkZUluUmFkaWFucyB8fCBNYXRoLlBJICogMjtcblxuICBjb25zdCBsYXRSYW5nZSA9IG9wdF9lbmRMYXRpdHVkZUluUmFkaWFucyAtIG9wdF9zdGFydExhdGl0dWRlSW5SYWRpYW5zO1xuICBjb25zdCBsb25nUmFuZ2UgPSBvcHRfZW5kTG9uZ2l0dWRlSW5SYWRpYW5zIC0gb3B0X3N0YXJ0TG9uZ2l0dWRlSW5SYWRpYW5zO1xuXG4gIGNvbnN0IHBvc2l0aW9ucyA9IFtdO1xuICBjb25zdCBub3JtYWxzID0gW107XG4gIGNvbnN0IHRleGNvb3JkcyA9IFtdO1xuXG4gIGZvciAobGV0IHkgPSAwOyB5IDw9IHN1YmRpdmlzaW9uc0hlaWdodDsgeSsrKSB7XG4gICAgZm9yIChsZXQgeCA9IDA7IHggPD0gc3ViZGl2aXNpb25zQXhpczsgeCsrKSB7XG4gICAgICBjb25zdCB1ID0geCAvIHN1YmRpdmlzaW9uc0F4aXM7XG4gICAgICBjb25zdCB2ID0geSAvIHN1YmRpdmlzaW9uc0hlaWdodDtcbiAgICAgIGNvbnN0IHRoZXRhID0gbG9uZ1JhbmdlICogdSArIG9wdF9zdGFydExvbmdpdHVkZUluUmFkaWFucztcbiAgICAgIGNvbnN0IHBoaSA9IGxhdFJhbmdlICogdiArIG9wdF9zdGFydExhdGl0dWRlSW5SYWRpYW5zO1xuICAgICAgY29uc3Qgc2luVGhldGEgPSBNYXRoLnNpbih0aGV0YSk7XG4gICAgICBjb25zdCBjb3NUaGV0YSA9IE1hdGguY29zKHRoZXRhKTtcbiAgICAgIGNvbnN0IHNpblBoaSA9IE1hdGguc2luKHBoaSk7XG4gICAgICBjb25zdCBjb3NQaGkgPSBNYXRoLmNvcyhwaGkpO1xuICAgICAgY29uc3QgdXggPSBjb3NUaGV0YSAqIHNpblBoaTtcbiAgICAgIGNvbnN0IHV5ID0gY29zUGhpO1xuICAgICAgY29uc3QgdXogPSBzaW5UaGV0YSAqIHNpblBoaTtcbiAgICAgIHBvc2l0aW9ucy5wdXNoKHJhZGl1cyAqIHV4LCByYWRpdXMgKiB1eSwgcmFkaXVzICogdXopO1xuICAgICAgbm9ybWFscy5wdXNoKHV4LCB1eSwgdXopO1xuICAgICAgdGV4Y29vcmRzLnB1c2goMSAtIHUsIHYpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IG51bVZlcnRzQXJvdW5kID0gc3ViZGl2aXNpb25zQXhpcyArIDE7XG4gIGNvbnN0IGluZGljZXMgPSBbXTtcbiAgZm9yIChsZXQgeCA9IDA7IHggPCBzdWJkaXZpc2lvbnNBeGlzOyB4KyspIHtcbiAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHN1YmRpdmlzaW9uc0hlaWdodDsgeSsrKSB7XG4gICAgICBpbmRpY2VzLnB1c2goXG4gICAgICAgICh5ICsgMCkgKiBudW1WZXJ0c0Fyb3VuZCArIHgsXG4gICAgICAgICh5ICsgMCkgKiBudW1WZXJ0c0Fyb3VuZCArIHggKyAxLFxuICAgICAgICAoeSArIDEpICogbnVtVmVydHNBcm91bmQgKyB4XG4gICAgICApO1xuICAgICAgaW5kaWNlcy5wdXNoKFxuICAgICAgICAoeSArIDEpICogbnVtVmVydHNBcm91bmQgKyB4LFxuICAgICAgICAoeSArIDApICogbnVtVmVydHNBcm91bmQgKyB4ICsgMSxcbiAgICAgICAgKHkgKyAxKSAqIG51bVZlcnRzQXJvdW5kICsgeCArIDFcbiAgICAgICk7XG4gICAgfVxuICB9XG4gIGNvbnN0IF9wb3NpdGlvbnMgPSBuZXcgRmxvYXQzMkFycmF5KHBvc2l0aW9ucyk7XG4gIGNvbnN0IF9ub3JtYWxzID0gbmV3IEZsb2F0MzJBcnJheShub3JtYWxzKTtcbiAgY29uc3QgX3RleGNvb3JkcyA9IG5ldyBGbG9hdDMyQXJyYXkodGV4Y29vcmRzKTtcbiAgY29uc3QgX2luZGljZXMgPSBuZXcgVWludDE2QXJyYXkoaW5kaWNlcyk7XG5cbiAgcmV0dXJuIHtcbiAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICBQT1NJVElPTjoge1xuICAgICAgICBsb2NhdGlvbjogMCxcbiAgICAgICAgY291bnQ6IHBvc2l0aW9ucy5sZW5ndGgsXG4gICAgICAgIG9mZnNldDogMCxcbiAgICAgICAgc3RyaWRlOiAwLFxuICAgICAgICBudW1Db21wb25lbnRzOiAzLFxuICAgICAgICB0eXBlOiA1MTI2LFxuICAgICAgICBkYXRhOiBfcG9zaXRpb25zLFxuICAgICAgICBieXRlTGVuZ3RoOiBfcG9zaXRpb25zLmJ5dGVMZW5ndGgsXG4gICAgICB9LFxuICAgICAgTk9STUFMOiB7XG4gICAgICAgIGxvY2F0aW9uOiAxLFxuICAgICAgICBjb3VudDogbm9ybWFscy5sZW5ndGgsXG4gICAgICAgIG51bUNvbXBvbmVudHM6IDMsXG4gICAgICAgIG9mZnNldDogMCxcbiAgICAgICAgc3RyaWRlOiAwLFxuICAgICAgICB0eXBlOiA1MTI2LFxuICAgICAgICBkYXRhOiBfbm9ybWFscyxcbiAgICAgICAgYnl0ZUxlbmd0aDogX25vcm1hbHMuYnl0ZUxlbmd0aCxcbiAgICAgIH0sXG4gICAgICBURVhDT09SRF8wOiB7XG4gICAgICAgIGRhdGE6IF90ZXhjb29yZHMsXG4gICAgICAgIGNvdW50OiBfdGV4Y29vcmRzLmxlbmd0aCxcbiAgICAgICAgdHlwZTogNTEyNixcbiAgICAgICAgb2Zmc2V0OiAwLFxuICAgICAgICBzdHJpZGU6IDAsXG4gICAgICAgIGJ5dGVMZW5ndGg6IF90ZXhjb29yZHMuYnl0ZUxlbmd0aCxcbiAgICAgICAgbG9jYXRpb246IDQsXG4gICAgICAgIG51bUNvbXBvbmVudHM6IDIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgY29tcG9uZW50VHlwZTogNTEyMyxcbiAgICBpbmRpY2VzOiBfaW5kaWNlcyxcbiAgICBudW1FbGVtZW50czogaW5kaWNlcy5sZW5ndGgsXG4gICAgbW9kZTogNCxcbiAgfTtcbn07XG5jb25zdCBjcmVhdGVUcnVuY2F0ZWRDb25lID0gKFxuICBib3R0b21SYWRpdXMsXG4gIHRvcFJhZGl1cyxcbiAgaGVpZ2h0LFxuICByYWRpYWxTdWJkaXZpc2lvbnMsXG4gIHZlcnRpY2FsU3ViZGl2aXNpb25zLFxuICBvcHRfdG9wQ2FwLFxuICBvcHRfYm90dG9tQ2FwXG4pID0+IHtcbiAgaWYgKHJhZGlhbFN1YmRpdmlzaW9ucyA8IDMpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJyYWRpYWxTdWJkaXZpc2lvbnMgbXVzdCBiZSAzIG9yIGdyZWF0ZXJcIik7XG4gIH1cblxuICBpZiAodmVydGljYWxTdWJkaXZpc2lvbnMgPCAxKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwidmVydGljYWxTdWJkaXZpc2lvbnMgbXVzdCBiZSAxIG9yIGdyZWF0ZXJcIik7XG4gIH1cblxuICBjb25zdCB0b3BDYXAgPSBvcHRfdG9wQ2FwID09PSB1bmRlZmluZWQgPyB0cnVlIDogb3B0X3RvcENhcDtcbiAgY29uc3QgYm90dG9tQ2FwID0gb3B0X2JvdHRvbUNhcCA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IG9wdF9ib3R0b21DYXA7XG5cbiAgY29uc3QgZXh0cmEgPSAodG9wQ2FwID8gMiA6IDApICsgKGJvdHRvbUNhcCA/IDIgOiAwKTtcblxuICBjb25zdCBudW1WZXJ0aWNlcyA9XG4gICAgKHJhZGlhbFN1YmRpdmlzaW9ucyArIDEpICogKHZlcnRpY2FsU3ViZGl2aXNpb25zICsgMSArIGV4dHJhKTtcbiAgY29uc3QgcG9zaXRpb25zID0gW107XG4gIGNvbnN0IG5vcm1hbHMgPSBbXTtcbiAgY29uc3QgdGV4Y29vcmRzID0gW107XG4gIGNvbnN0IGluZGljZXMgPSBbXTtcblxuICBjb25zdCB2ZXJ0c0Fyb3VuZEVkZ2UgPSByYWRpYWxTdWJkaXZpc2lvbnMgKyAxO1xuXG4gIGNvbnN0IHNsYW50ID0gTWF0aC5hdGFuMihib3R0b21SYWRpdXMgLSB0b3BSYWRpdXMsIGhlaWdodCk7XG4gIGNvbnN0IGNvc1NsYW50ID0gTWF0aC5jb3Moc2xhbnQpO1xuICBjb25zdCBzaW5TbGFudCA9IE1hdGguc2luKHNsYW50KTtcblxuICBjb25zdCBzdGFydCA9IHRvcENhcCA/IC0yIDogMDtcbiAgY29uc3QgZW5kID0gdmVydGljYWxTdWJkaXZpc2lvbnMgKyAoYm90dG9tQ2FwID8gMiA6IDApO1xuXG4gIGZvciAobGV0IHl5ID0gc3RhcnQ7IHl5IDw9IGVuZDsgKyt5eSkge1xuICAgIGxldCB2ID0geXkgLyB2ZXJ0aWNhbFN1YmRpdmlzaW9ucztcbiAgICBsZXQgeSA9IGhlaWdodCAqIHY7XG4gICAgbGV0IHJpbmdSYWRpdXM7XG4gICAgaWYgKHl5IDwgMCkge1xuICAgICAgeSA9IDA7XG4gICAgICB2ID0gMTtcbiAgICAgIHJpbmdSYWRpdXMgPSBib3R0b21SYWRpdXM7XG4gICAgfSBlbHNlIGlmICh5eSA+IHZlcnRpY2FsU3ViZGl2aXNpb25zKSB7XG4gICAgICB5ID0gaGVpZ2h0O1xuICAgICAgdiA9IDE7XG4gICAgICByaW5nUmFkaXVzID0gdG9wUmFkaXVzO1xuICAgIH0gZWxzZSB7XG4gICAgICByaW5nUmFkaXVzID1cbiAgICAgICAgYm90dG9tUmFkaXVzICsgKHRvcFJhZGl1cyAtIGJvdHRvbVJhZGl1cykgKiAoeXkgLyB2ZXJ0aWNhbFN1YmRpdmlzaW9ucyk7XG4gICAgfVxuICAgIGlmICh5eSA9PT0gLTIgfHwgeXkgPT09IHZlcnRpY2FsU3ViZGl2aXNpb25zICsgMikge1xuICAgICAgcmluZ1JhZGl1cyA9IDA7XG4gICAgICB2ID0gMDtcbiAgICB9XG4gICAgeSAtPSBoZWlnaHQgLyAyO1xuICAgIGZvciAobGV0IGlpID0gMDsgaWkgPCB2ZXJ0c0Fyb3VuZEVkZ2U7ICsraWkpIHtcbiAgICAgIGNvbnN0IHNpbiA9IE1hdGguc2luKChpaSAqIE1hdGguUEkgKiAyKSAvIHJhZGlhbFN1YmRpdmlzaW9ucyk7XG4gICAgICBjb25zdCBjb3MgPSBNYXRoLmNvcygoaWkgKiBNYXRoLlBJICogMikgLyByYWRpYWxTdWJkaXZpc2lvbnMpO1xuICAgICAgcG9zaXRpb25zLnB1c2goc2luICogcmluZ1JhZGl1cywgeSwgY29zICogcmluZ1JhZGl1cyk7XG4gICAgICBpZiAoeXkgPCAwKSB7XG4gICAgICAgIG5vcm1hbHMucHVzaCgwLCAtMSwgMCk7XG4gICAgICB9IGVsc2UgaWYgKHl5ID4gdmVydGljYWxTdWJkaXZpc2lvbnMpIHtcbiAgICAgICAgbm9ybWFscy5wdXNoKDAsIDEsIDApO1xuICAgICAgfSBlbHNlIGlmIChyaW5nUmFkaXVzID09PSAwLjApIHtcbiAgICAgICAgbm9ybWFscy5wdXNoKDAsIDAsIDApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbm9ybWFscy5wdXNoKHNpbiAqIGNvc1NsYW50LCBzaW5TbGFudCwgY29zICogY29zU2xhbnQpO1xuICAgICAgfVxuICAgICAgdGV4Y29vcmRzLnB1c2goaWkgLyByYWRpYWxTdWJkaXZpc2lvbnMsIDEgLSB2KTtcbiAgICB9XG4gIH1cblxuICBmb3IgKGxldCB5eSA9IDA7IHl5IDwgdmVydGljYWxTdWJkaXZpc2lvbnMgKyBleHRyYTsgKyt5eSkge1xuICAgIGlmIChcbiAgICAgICh5eSA9PT0gMSAmJiB0b3BDYXApIHx8XG4gICAgICAoeXkgPT09IHZlcnRpY2FsU3ViZGl2aXNpb25zICsgZXh0cmEgLSAyICYmIGJvdHRvbUNhcClcbiAgICApIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBmb3IgKGxldCBpaSA9IDA7IGlpIDwgcmFkaWFsU3ViZGl2aXNpb25zOyArK2lpKSB7XG4gICAgICBpbmRpY2VzLnB1c2goXG4gICAgICAgIHZlcnRzQXJvdW5kRWRnZSAqICh5eSArIDApICsgMCArIGlpLFxuICAgICAgICB2ZXJ0c0Fyb3VuZEVkZ2UgKiAoeXkgKyAwKSArIDEgKyBpaSxcbiAgICAgICAgdmVydHNBcm91bmRFZGdlICogKHl5ICsgMSkgKyAxICsgaWlcbiAgICAgICk7XG4gICAgICBpbmRpY2VzLnB1c2goXG4gICAgICAgIHZlcnRzQXJvdW5kRWRnZSAqICh5eSArIDApICsgMCArIGlpLFxuICAgICAgICB2ZXJ0c0Fyb3VuZEVkZ2UgKiAoeXkgKyAxKSArIDEgKyBpaSxcbiAgICAgICAgdmVydHNBcm91bmRFZGdlICogKHl5ICsgMSkgKyAwICsgaWlcbiAgICAgICk7XG4gICAgfVxuICB9XG4gIGNvbnN0IF9wb3NpdGlvbnMgPSBuZXcgRmxvYXQzMkFycmF5KHBvc2l0aW9ucyk7XG4gIGNvbnN0IF9ub3JtYWxzID0gbmV3IEZsb2F0MzJBcnJheShub3JtYWxzKTtcbiAgY29uc3QgX3RleGNvb3JkcyA9IG5ldyBGbG9hdDMyQXJyYXkodGV4Y29vcmRzKTtcbiAgY29uc3QgX2luZGljZXMgPSBuZXcgVWludDE2QXJyYXkoaW5kaWNlcyk7XG4gIHJldHVybiB7XG4gICAgYXR0cmlidXRlczoge1xuICAgICAgUE9TSVRJT046IHtcbiAgICAgICAgbG9jYXRpb246IDAsXG4gICAgICAgIGNvdW50OiBwb3NpdGlvbnMubGVuZ3RoLFxuICAgICAgICBvZmZzZXQ6IDAsXG4gICAgICAgIHN0cmlkZTogMCxcbiAgICAgICAgbnVtQ29tcG9uZW50czogMyxcbiAgICAgICAgdHlwZTogNTEyNixcbiAgICAgICAgZGF0YTogX3Bvc2l0aW9ucyxcbiAgICAgICAgYnl0ZUxlbmd0aDogX3Bvc2l0aW9ucy5ieXRlTGVuZ3RoLFxuICAgICAgfSxcbiAgICAgIE5PUk1BTDoge1xuICAgICAgICBsb2NhdGlvbjogMSxcbiAgICAgICAgY291bnQ6IG5vcm1hbHMubGVuZ3RoLFxuICAgICAgICBudW1Db21wb25lbnRzOiAzLFxuICAgICAgICBvZmZzZXQ6IDAsXG4gICAgICAgIHN0cmlkZTogMCxcbiAgICAgICAgdHlwZTogNTEyNixcbiAgICAgICAgZGF0YTogX25vcm1hbHMsXG4gICAgICAgIGJ5dGVMZW5ndGg6IF9ub3JtYWxzLmJ5dGVMZW5ndGgsXG4gICAgICB9LFxuICAgICAgVEVYQ09PUkRfMDoge1xuICAgICAgICBkYXRhOiBfdGV4Y29vcmRzLFxuICAgICAgICBjb3VudDogX3RleGNvb3Jkcy5sZW5ndGgsXG4gICAgICAgIHR5cGU6IDUxMjYsXG4gICAgICAgIG9mZnNldDogMCxcbiAgICAgICAgc3RyaWRlOiAwLFxuICAgICAgICBieXRlTGVuZ3RoOiBfdGV4Y29vcmRzLmJ5dGVMZW5ndGgsXG4gICAgICAgIGxvY2F0aW9uOiA0LFxuICAgICAgICBudW1Db21wb25lbnRzOiAyLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGNvbXBvbmVudFR5cGU6IDUxMjMsXG4gICAgaW5kaWNlczogX2luZGljZXMsXG4gICAgbnVtRWxlbWVudHM6IGluZGljZXMubGVuZ3RoLFxuICAgIG1vZGU6IDQsXG4gIH07XG59O1xuXG5leHBvcnQgeyBjcmVhdGVCb3gsIGNyZWF0ZUNvbmUsIGNyZWF0ZUNpcmNsZSwgY3JlYXRlU3BoZXJlLCBjcmVhdGVUcnVuY2F0ZWRDb25lfTtcbiIsImZ1bmN0aW9uIGdldEdMVHlwZUZvclR5cGVkQXJyYXkoZ2wsIHR5cGVkQXJyYXkpIHtcbiAgaWYgKHR5cGVkQXJyYXkgaW5zdGFuY2VvZiBJbnQ4QXJyYXkpIHtcbiAgICByZXR1cm4gZ2wuQllURTtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gIGlmICh0eXBlZEFycmF5IGluc3RhbmNlb2YgVWludDhBcnJheSkge1xuICAgIHJldHVybiBnbC5VTlNJR05FRF9CWVRFO1xuICB9IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgaWYgKHR5cGVkQXJyYXkgaW5zdGFuY2VvZiBVaW50OENsYW1wZWRBcnJheSkge1xuICAgIHJldHVybiBnbC5VTlNJR05FRF9CWVRFO1xuICB9IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgaWYgKHR5cGVkQXJyYXkgaW5zdGFuY2VvZiBJbnQxNkFycmF5KSB7XG4gICAgcmV0dXJuIGdsLlNIT1JUO1xuICB9IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgaWYgKHR5cGVkQXJyYXkgaW5zdGFuY2VvZiBVaW50MTZBcnJheSkge1xuICAgIHJldHVybiBnbC5VTlNJR05FRF9TSE9SVDtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gIGlmICh0eXBlZEFycmF5IGluc3RhbmNlb2YgSW50MzJBcnJheSkge1xuICAgIHJldHVybiBnbC5JTlQ7XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICBpZiAodHlwZWRBcnJheSBpbnN0YW5jZW9mIFVpbnQzMkFycmF5KSB7XG4gICAgcmV0dXJuIGdsLlVOU0lHTkVEX0lOVDtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gIGlmICh0eXBlZEFycmF5IGluc3RhbmNlb2YgRmxvYXQzMkFycmF5KSB7XG4gICAgcmV0dXJuIGdsLkZMT0FUO1xuICB9IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgcmV0dXJuIGZhbHNlO1xufVxuZnVuY3Rpb24gZXhwYW5kZWRUeXBlZEFycmF5KGFycmF5KSB7XG4gIGxldCBjdXJzb3IgPSAwO1xuICBhcnJheS5wdXNoID0gZnVuY3Rpb24gKCkge1xuICAgIGZvciAobGV0IGlpID0gMDsgaWkgPCBhcmd1bWVudHMubGVuZ3RoOyArK2lpKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IGFyZ3VtZW50c1tpaV07XG5cbiAgICAgIGlmIChcbiAgICAgICAgdmFsdWUgaW5zdGFuY2VvZiBBcnJheSB8fFxuICAgICAgICAodmFsdWUuYnVmZmVyICYmIHZhbHVlLmJ1ZmZlciBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKVxuICAgICAgKSB7XG4gICAgICAgIGZvciAobGV0IGpqID0gMDsgamogPCB2YWx1ZS5sZW5ndGg7ICsramopIHtcbiAgICAgICAgICBhcnJheVtjdXJzb3IrK10gPSB2YWx1ZVtqal07XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFycmF5W2N1cnNvcisrXSA9IHZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gYXJyYXk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVVuaWZvcm1TZXR0ZXJzKGdsLCBwcm9ncmFtKSB7XG4gIGNvbnN0IGNyZWF0ZVRleHR1cmVTZXR0ZXIgPSAocHJvZ3JhbSwgdW5pZm9ybUluZm8pID0+IHtcbiAgICBjb25zdCBsb2NhdGlvbiA9IGdsLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCB1bmlmb3JtSW5mby5uYW1lKTtcblxuICAgIHJldHVybiAodGV4QmxvY2tOdW0pID0+IHtcbiAgICAgIGdsLnVuaWZvcm0xaShsb2NhdGlvbiwgdGV4QmxvY2tOdW0pO1xuICAgIH07XG4gIH07XG4gIGZ1bmN0aW9uIGNyZWF0ZVVuaWZvcm1TZXR0ZXIocHJvZ3JhbSwgdW5pZm9ybUluZm8pIHtcbiAgICBjb25zdCBsb2NhdGlvbiA9IGdsLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCB1bmlmb3JtSW5mby5uYW1lKTtcblxuICAgIGNvbnN0IHR5cGUgPSB1bmlmb3JtSW5mby50eXBlO1xuXG4gICAgY29uc3QgaXNBcnJheSA9XG4gICAgICB1bmlmb3JtSW5mby5zaXplID4gMSAmJiB1bmlmb3JtSW5mby5uYW1lLnN1YnN0cigtMykgPT09IFwiWzBdXCI7XG5cbiAgICBpZiAodHlwZSA9PT0gZ2wuRkxPQVQgJiYgaXNBcnJheSkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIGdsLnVuaWZvcm0xZnYobG9jYXRpb24sIHYpO1xuICAgICAgfTtcbiAgICB9XG4gICAgaWYgKHR5cGUgPT09IGdsLkZMT0FUKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgZ2wudW5pZm9ybTFmKGxvY2F0aW9uLCB2KTtcbiAgICAgIH07XG4gICAgfVxuICAgIGlmICh0eXBlID09PSBnbC5GTE9BVF9WRUMyKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgZ2wudW5pZm9ybTJmdihsb2NhdGlvbiwgdik7XG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAodHlwZSA9PT0gZ2wuRkxPQVRfVkVDMykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIGdsLnVuaWZvcm0zZnYobG9jYXRpb24sIHYpO1xuICAgICAgfTtcbiAgICB9XG4gICAgaWYgKHR5cGUgPT09IGdsLkZMT0FUX1ZFQzQpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgICAgICBnbC51bmlmb3JtNGZ2KGxvY2F0aW9uLCB2KTtcbiAgICAgIH07XG4gICAgfVxuICAgIGlmICh0eXBlID09PSBnbC5JTlQgJiYgaXNBcnJheSkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIGdsLnVuaWZvcm0xaXYobG9jYXRpb24sIHYpO1xuICAgICAgfTtcbiAgICB9XG4gICAgaWYgKHR5cGUgPT09IGdsLklOVCkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIGdsLnVuaWZvcm0xaShsb2NhdGlvbiwgdik7XG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAodHlwZSA9PT0gZ2wuSU5UX1ZFQzIpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgICAgICBnbC51bmlmb3JtMml2KGxvY2F0aW9uLCB2KTtcbiAgICAgIH07XG4gICAgfVxuICAgIGlmICh0eXBlID09PSBnbC5JTlRfVkVDMykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIGdsLnVuaWZvcm0zaXYobG9jYXRpb24sIHYpO1xuICAgICAgfTtcbiAgICB9XG4gICAgaWYgKHR5cGUgPT09IGdsLklOVF9WRUM0KSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgZ2wudW5pZm9ybTRpdihsb2NhdGlvbiwgdik7XG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAodHlwZSA9PT0gZ2wuQk9PTCkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIGdsLnVuaWZvcm0xaXYobG9jYXRpb24sIHYpO1xuICAgICAgfTtcbiAgICB9XG4gICAgaWYgKHR5cGUgPT09IGdsLkJPT0xfVkVDMikge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIGdsLnVuaWZvcm0yaXYobG9jYXRpb24sIHYpO1xuICAgICAgfTtcbiAgICB9XG4gICAgaWYgKHR5cGUgPT09IGdsLkJPT0xfVkVDMykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIGdsLnVuaWZvcm0zaXYobG9jYXRpb24sIHYpO1xuICAgICAgfTtcbiAgICB9XG4gICAgaWYgKHR5cGUgPT09IGdsLkJPT0xfVkVDNCkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIGdsLnVuaWZvcm00aXYobG9jYXRpb24sIHYpO1xuICAgICAgfTtcbiAgICB9XG4gICAgaWYgKHR5cGUgPT09IGdsLkZMT0FUX01BVDIpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgICAgICBnbC51bmlmb3JtTWF0cml4MmZ2KGxvY2F0aW9uLCBmYWxzZSwgdik7XG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAodHlwZSA9PT0gZ2wuRkxPQVRfTUFUMykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIGdsLnVuaWZvcm1NYXRyaXgzZnYobG9jYXRpb24sIGZhbHNlLCB2KTtcbiAgICAgIH07XG4gICAgfVxuICAgIGlmICh0eXBlID09PSBnbC5GTE9BVF9NQVQ0KSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgZ2wudW5pZm9ybU1hdHJpeDRmdihsb2NhdGlvbiwgZmFsc2UsIHYpO1xuICAgICAgfTtcbiAgICB9XG4gIH1cbiAgY29uc3QgdW5pZm9ybVNldHRlcnMgPSB7fTtcbiAgY29uc3QgdGV4dHVyZVNldHRlcnMgPSB7fTtcbiAgY29uc3QgbnVtVW5pZm9ybXMgPSBnbC5nZXRQcm9ncmFtUGFyYW1ldGVyKHByb2dyYW0sIGdsLkFDVElWRV9VTklGT1JNUyk7XG5cbiAgZm9yIChsZXQgaWkgPSAwOyBpaSA8IG51bVVuaWZvcm1zOyArK2lpKSB7XG4gICAgY29uc3QgdW5pZm9ybUluZm8gPSBnbC5nZXRBY3RpdmVVbmlmb3JtKHByb2dyYW0sIGlpKTtcbiAgICBpZiAoIXVuaWZvcm1JbmZvKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgbGV0IG5hbWUgPSB1bmlmb3JtSW5mby5uYW1lO1xuICAgIGlmICh1bmlmb3JtSW5mby50eXBlID09PSBnbC5TQU1QTEVSXzJEKSB7XG4gICAgICB0ZXh0dXJlU2V0dGVyc1tuYW1lXSA9IGNyZWF0ZVRleHR1cmVTZXR0ZXIocHJvZ3JhbSwgdW5pZm9ybUluZm8pO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKG5hbWUuc3Vic3RyKC0zKSA9PT0gXCJbMF1cIikge1xuICAgICAgbmFtZSA9IG5hbWUuc3Vic3RyKDAsIG5hbWUubGVuZ3RoIC0gMyk7XG4gICAgfVxuICAgIGlmICh1bmlmb3JtSW5mby5zaXplID4gMSkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB1bmlmb3JtSW5mby5zaXplOyBpKyspIHtcbiAgICAgICAgY29uc3Qgb2JqID0ge1xuICAgICAgICAgIHNpemU6IHVuaWZvcm1JbmZvLnNpemUsXG4gICAgICAgICAgdHlwZTogdW5pZm9ybUluZm8udHlwZSxcbiAgICAgICAgICBuYW1lOiBuYW1lICsgYFske2l9XWAsXG4gICAgICAgIH07XG4gICAgICAgIHVuaWZvcm1TZXR0ZXJzW25hbWUgKyBgWyR7aX1dYF0gPSBjcmVhdGVVbmlmb3JtU2V0dGVyKHByb2dyYW0sIG9iaik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHNldHRlciA9IGNyZWF0ZVVuaWZvcm1TZXR0ZXIocHJvZ3JhbSwgdW5pZm9ybUluZm8pO1xuICAgICAgdW5pZm9ybVNldHRlcnNbbmFtZV0gPSBzZXR0ZXI7XG4gICAgfVxuICB9XG4gIHJldHVybiB7IHVuaWZvcm1TZXR0ZXJzLCB0ZXh0dXJlU2V0dGVycyB9O1xufVxuXG5jbGFzcyBQcm9ncmFtSW5mbyB7XG4gIGNvbnN0cnVjdG9yKHZzLCBmcykge1xuICAgIHRoaXMudnMgPSB2cztcbiAgICB0aGlzLmZzID0gZnM7XG4gICAgdGhpcy5WQU8gPSBudWxsO1xuICAgIHRoaXMudW5pZm9ybVNldHRlcnMgPSBudWxsO1xuICAgIHRoaXMudmVydGV4U2hhZGVyID0gbnVsbDtcbiAgICB0aGlzLmZyYWdtZW50U2hhZGVyID0gbnVsbDtcbiAgICB0aGlzLnByb2dyYW0gPSBudWxsO1xuICAgIHRoaXMuZ2wgPSBudWxsO1xuICB9XG4gIHNldENvbnRleHQoZ2xDb250ZXh0V3JhcHBlcikge1xuICAgIHRoaXMuY29udGV4dCA9IGdsQ29udGV4dFdyYXBwZXI7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgY3JlYXRlVW5pZm9ybVNldHRlcnMoKSB7XG4gICAgY29uc3QgeyBnbCB9ID0gdGhpcy5jb250ZXh0O1xuICAgIGNvbnN0IHsgdW5pZm9ybVNldHRlcnMsIHRleHR1cmVTZXR0ZXJzIH0gPSBjcmVhdGVVbmlmb3JtU2V0dGVycyhcbiAgICAgIGdsLFxuICAgICAgdGhpcy5wcm9ncmFtXG4gICAgKTtcbiAgICB0aGlzLnRleHR1cmVTZXR0ZXJzID0gdGV4dHVyZVNldHRlcnM7XG4gICAgdGhpcy51bmlmb3JtU2V0dGVycyA9IHVuaWZvcm1TZXR0ZXJzO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIGNvbXBpbGVTaGFkZXJzKCkge1xuICAgIGNvbnN0IHsgZ2wgfSA9IHRoaXMuY29udGV4dDtcbiAgICB0aGlzLnZlcnRleFNoYWRlciA9IGdsLmNyZWF0ZVNoYWRlcihnbC5WRVJURVhfU0hBREVSKTtcbiAgICBnbC5zaGFkZXJTb3VyY2UodGhpcy52ZXJ0ZXhTaGFkZXIsIHRoaXMudnMpO1xuICAgIGdsLmNvbXBpbGVTaGFkZXIodGhpcy52ZXJ0ZXhTaGFkZXIpO1xuICAgIGlmICghZ2wuZ2V0U2hhZGVyUGFyYW1ldGVyKHRoaXMudmVydGV4U2hhZGVyLCBnbC5DT01QSUxFX1NUQVRVUykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihnbC5nZXRTaGFkZXJJbmZvTG9nKHRoaXMudmVydGV4U2hhZGVyKSk7XG4gICAgfVxuXG4gICAgdGhpcy5mcmFnbWVudFNoYWRlciA9IGdsLmNyZWF0ZVNoYWRlcihnbC5GUkFHTUVOVF9TSEFERVIpO1xuICAgIGdsLnNoYWRlclNvdXJjZSh0aGlzLmZyYWdtZW50U2hhZGVyLCB0aGlzLmZzKTtcbiAgICBnbC5jb21waWxlU2hhZGVyKHRoaXMuZnJhZ21lbnRTaGFkZXIpO1xuICAgIGlmICghZ2wuZ2V0U2hhZGVyUGFyYW1ldGVyKHRoaXMuZnJhZ21lbnRTaGFkZXIsIGdsLkNPTVBJTEVfU1RBVFVTKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGdsLmdldFNoYWRlckluZm9Mb2codGhpcy5mcmFnbWVudFNoYWRlcikpO1xuICAgIH1cblxuICAgIHRoaXMucHJvZ3JhbSA9IGdsLmNyZWF0ZVByb2dyYW0oKTtcbiAgICBnbC5hdHRhY2hTaGFkZXIodGhpcy5wcm9ncmFtLCB0aGlzLnZlcnRleFNoYWRlcik7XG4gICAgZ2wuYXR0YWNoU2hhZGVyKHRoaXMucHJvZ3JhbSwgdGhpcy5mcmFnbWVudFNoYWRlcik7XG4gICAgZ2wubGlua1Byb2dyYW0odGhpcy5wcm9ncmFtKTtcbiAgICBpZiAoIWdsLmdldFByb2dyYW1QYXJhbWV0ZXIodGhpcy5wcm9ncmFtLCBnbC5MSU5LX1NUQVRVUykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihnbC5nZXRQcm9ncmFtSW5mb0xvZyh0aGlzLnByb2dyYW0pKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgc2V0VW5pZm9ybXModW5pZm9ybXMpIHtcbiAgICB0aGlzLmNvbnRleHQudXNlUHJvZ3JhbUluZm8odGhpcyk7XG4gICAgT2JqZWN0LmtleXModW5pZm9ybXMpLmZvckVhY2goKG5hbWUpID0+IHtcbiAgICAgIGNvbnN0IHNldHRlciA9IHRoaXMudW5pZm9ybVNldHRlcnNbbmFtZV07XG4gICAgICBpZiAoc2V0dGVyKSBzZXR0ZXIodW5pZm9ybXNbbmFtZV0pO1xuICAgIH0pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIHNldFRleHR1cmVVbmlmb3JtVW5pdChuYW1lLCB1bml0KSB7XG4gICAgdGhpcy5jb250ZXh0LnVzZVByb2dyYW1JbmZvKHRoaXMpO1xuICAgIGNvbnN0IHNldHRlciA9IHRoaXMudGV4dHVyZVNldHRlcnNbbmFtZV07XG4gICAgaWYgKHNldHRlcikgc2V0dGVyKHVuaXQpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG5cbmV4cG9ydCB7IGV4cGFuZGVkVHlwZWRBcnJheSwgUHJvZ3JhbUluZm8sIGdldEdMVHlwZUZvclR5cGVkQXJyYXkgfTtcbiIsImltcG9ydCB2ZXJ0IGZyb20gJy4vdmVydC5nbHNsJ1xuaW1wb3J0IGZyYWcgZnJvbSAnLi9mcmFnLmdsc2wnXG5cbmV4cG9ydCBkZWZhdWx0IHt2ZXJ0LCBmcmFnfSIsImltcG9ydCBkZWZhdWx0U2hhZGVycyBmcm9tIFwiLi9kZWZhdWx0XCI7XG5pbXBvcnQgcG9pbnRMaWdodFNoYWRlcnMgZnJvbSBcIi4vcG9pbnRMaWdodFwiO1xuXG5leHBvcnQge2RlZmF1bHRTaGFkZXJzLCBwb2ludExpZ2h0U2hhZGVyc30iLCJpbXBvcnQgdmVydCBmcm9tICcuL3ZlcnQuZ2xzbCdcbmltcG9ydCBmcmFnIGZyb20gJy4vZnJhZy5nbHNsJ1xuXG5leHBvcnQgZGVmYXVsdCB7dmVydCwgZnJhZ30iLCJjb25zdCBzZXRDYW52YXNTaXplID0gKGN0eCwgd2lkdGgsIGhlaWdodCkgPT4ge1xuICBjdHguY2FudmFzLndpZHRoID0gd2lkdGg7XG4gIGN0eC5jYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xufTtcblxuY29uc3QgbWFrZVRleHR1cmUgPSAoZ2wsIGN0eCkgPT4ge1xuICBjb25zdCB0ZXggPSBnbC5jcmVhdGVUZXh0dXJlKCk7XG4gIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIHRleCk7XG5cbiAgZ2wudGV4SW1hZ2UyRChcbiAgICBnbC5URVhUVVJFXzJELFxuICAgIDAsXG4gICAgZ2wuUkdCQSxcbiAgICBnbC5SR0JBLFxuICAgIGdsLlVOU0lHTkVEX0JZVEUsXG4gICAgY3R4LmNhbnZhc1xuICApO1xuICByZXR1cm4gdGV4O1xufTtcbmNvbnN0IG1ha2VTdHJpcGVUZXh0dXJlID0gKGdsLCBvcHRpb25zKSA9PiB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICB2YXIgd2lkdGggPSBvcHRpb25zLndpZHRoIHx8IDQ7XG4gIHZhciBoZWlnaHQgPSBvcHRpb25zLmhlaWdodCB8fCA0O1xuICB2YXIgY29sb3IxID0gb3B0aW9ucy5jb2xvcjEgfHwgXCJyZ2JhKDEsMCwwLDAuMSlcIjtcbiAgdmFyIGNvbG9yMiA9IG9wdGlvbnMuY29sb3IyIHx8IFwicmdiYSgxLDEsMSwwLjUpXCI7XG4gIGNvbnN0IGN0eCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIikuZ2V0Q29udGV4dChcIjJkXCIpO1xuICBzZXRDYW52YXNTaXplKGN0eCwgd2lkdGgsIGhlaWdodCk7XG5cbiAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yMTtcbiAgY3R4LmZpbGxSZWN0KDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xuICBjdHguZmlsbFN0eWxlID0gY29sb3IyO1xuICBjdHguZmlsbFJlY3QoMCwgMCwgd2lkdGgsIGhlaWdodCAvIDIpO1xuXG4gIHJldHVybiBtYWtlVGV4dHVyZShnbCwgY3R4KTtcbn07XG5jb25zdCBtYWtlU3RyaXBlSW1nID0gKG9wdGlvbnMpID0+IHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHZhciB3aWR0aCA9IG9wdGlvbnMud2lkdGggfHwgNDtcbiAgdmFyIGhlaWdodCA9IG9wdGlvbnMuaGVpZ2h0IHx8IDQ7XG4gIHZhciBjb2xvcjEgPSBvcHRpb25zLmNvbG9yMSB8fCBcInJnYmEoMSwwLDAsMC41KVwiO1xuICB2YXIgY29sb3IyID0gb3B0aW9ucy5jb2xvcjIgfHwgXCJyZ2JhKDAsMCwxLDEpXCI7XG4gIGNvbnN0IGN0eCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIikuZ2V0Q29udGV4dChcIjJkXCIpO1xuICBzZXRDYW52YXNTaXplKGN0eCwgd2lkdGgsIGhlaWdodCk7XG5cbiAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yMTtcbiAgY3R4LmZpbGxSZWN0KDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xuICBjdHguZmlsbFN0eWxlID0gY29sb3IyO1xuICBjdHguZmlsbFJlY3QoMCwgMCwgd2lkdGgsIGhlaWdodCAvIDIpO1xuXG4gIHJldHVybiBjdHguY2FudmFzO1xufTtcbmNvbnN0IG1ha2VJbWdGcm9tU3ZnWG1sID0gKHhtbCwgb3B0aW9ucyA9IHt9KSA9PiB7XG4gIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIHZhciBzdmc2NCA9IGJ0b2EoeG1sKTtcbiAgdmFyIGI2NFN0YXJ0ID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFwiO1xuICB2YXIgaW1hZ2U2NCA9IGI2NFN0YXJ0ICsgc3ZnNjQ7XG4gIGltZy5zcmMgPSBpbWFnZTY0O1xuXG4gIGNvbnN0IHdpZHRoID0gb3B0aW9ucy53aWR0aCB8fCAxMDA7XG4gIGNvbnN0IGhlaWdodCA9IG9wdGlvbnMuaGVpZ2h0IHx8IDEwMDtcbiAgY29uc3QgeCA9IG9wdGlvbnMueCB8fCAxO1xuICBjb25zdCB5ID0gb3B0aW9ucy55IHx8IDUwO1xuXG4gIGNvbnN0IGN0eCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIikuZ2V0Q29udGV4dChcIjJkXCIpO1xuICBzZXRDYW52YXNTaXplKGN0eCwgd2lkdGgsIGhlaWdodCk7XG5cbiAgY3R4LmRyYXdJbWFnZShpbWcsIHgsIHksIHdpZHRoLCBoZWlnaHQpO1xuICBjdHguZmlsbFN0eWxlID0gXCJyZ2JhKDAsMCwwLDEpXCI7XG4gIGN0eC5maWxsUmVjdCgwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcbiAgcmV0dXJuIGN0eC5pbWc7XG59O1xuY29uc3Qgc2V0VGV4dHVyZVVuaXRzID0gKGdsLCB0ZXh0dXJlLCB1bml0TnVtKSA9PiB7XG4gIGdsLmFjdGl2ZVRleHR1cmUoZ2wuVEVYVFVSRTAgKyB1bml0TnVtKTtcbiAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgdGV4dHVyZSk7XG59O1xuXG5jbGFzcyBUZXh0dXJlSW5mbyB7XG4gIHN0YXRpYyBtYWtlSW1nRnJvbVN2Z1htbCA9IG1ha2VJbWdGcm9tU3ZnWG1sO1xuICBjb25zdHJ1Y3RvcihnbCkge1xuICAgIHRoaXMudGV4dHVyZSA9IGdsLmNyZWF0ZVRleHR1cmUoKTtcbiAgICB0aGlzLmdsID0gZ2xcbiAgfVxuICBmcm9tSW1hZ2UoaW1hZ2Upe1xuICAgIGNvbnN0IHtnbH0gPSB0aGlzXG4gICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgdGhpcy50ZXh0dXJlKTtcbiAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9XUkFQX1MsIGdsLkNMQU1QX1RPX0VER0UpO1xuICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX1dSQVBfVCwgZ2wuQ0xBTVBfVE9fRURHRSk7XG4gICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfTUlOX0ZJTFRFUiwgZ2wuTkVBUkVTVCk7XG4gICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfTUFHX0ZJTFRFUiwgZ2wuTkVBUkVTVCk7XG4gICAgICBnbC50ZXhJbWFnZTJEKFxuICAgICAgICBnbC5URVhUVVJFXzJELFxuICAgICAgICAwLFxuICAgICAgICBnbC5SR0JBLFxuICAgICAgICBnbC5SR0JBLFxuICAgICAgICBnbC5VTlNJR05FRF9CWVRFLFxuICAgICAgICBpbWFnZVxuICAgICAgKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBnZXRUZXh0dXJlKCl7XG4gICAgcmV0dXJuIHRoaXMudGV4dHVyZVxuICB9XG59XG5leHBvcnQgeyBtYWtlSW1nRnJvbVN2Z1htbCwgbWFrZVN0cmlwZUltZywgVGV4dHVyZUluZm99O1xuIiwiY29uc3QgQUFCQiA9IHJlcXVpcmUoJy4vc3JjL2FhYmInKVxuY29uc3QgbTMgPSByZXF1aXJlKCcuL3NyYy9tMycpXG5jb25zdCBtNCA9IHJlcXVpcmUoJy4vc3JjL200JylcbmNvbnN0IHZlYzMgPSByZXF1aXJlKCcuL3NyYy92ZWMzJylcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgQUFCQiwgbTMsIG00LCB2ZWMzXG59IiwibW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBBQUJCIHtcbiAgY29uc3RydWN0b3IobWluLCBtYXgpIHtcbiAgICB0aGlzLm1pbiA9IG1pbjtcbiAgICB0aGlzLm1heCA9IG1heDtcbiAgfVxufTtcbiIsImNvbnN0IG0zID0ge1xuICAgIG11bHRpcGx5IDogZnVuY3Rpb24oYiwgYSkge1xuICAgICAgICB2YXIgYTAwID0gYVswICogMyArIDBdO1xuICAgICAgICB2YXIgYTAxID0gYVswICogMyArIDFdO1xuICAgICAgICB2YXIgYTAyID0gYVswICogMyArIDJdO1xuICAgICAgICB2YXIgYTEwID0gYVsxICogMyArIDBdO1xuICAgICAgICB2YXIgYTExID0gYVsxICogMyArIDFdO1xuICAgICAgICB2YXIgYTEyID0gYVsxICogMyArIDJdO1xuICAgICAgICB2YXIgYTIwID0gYVsyICogMyArIDBdO1xuICAgICAgICB2YXIgYTIxID0gYVsyICogMyArIDFdO1xuICAgICAgICB2YXIgYTIyID0gYVsyICogMyArIDJdO1xuICAgICAgICB2YXIgYjAwID0gYlswICogMyArIDBdO1xuICAgICAgICB2YXIgYjAxID0gYlswICogMyArIDFdO1xuICAgICAgICB2YXIgYjAyID0gYlswICogMyArIDJdO1xuICAgICAgICB2YXIgYjEwID0gYlsxICogMyArIDBdO1xuICAgICAgICB2YXIgYjExID0gYlsxICogMyArIDFdO1xuICAgICAgICB2YXIgYjEyID0gYlsxICogMyArIDJdO1xuICAgICAgICB2YXIgYjIwID0gYlsyICogMyArIDBdO1xuICAgICAgICB2YXIgYjIxID0gYlsyICogMyArIDFdO1xuICAgICAgICB2YXIgYjIyID0gYlsyICogMyArIDJdO1xuICAgIFxuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgIGIwMCAqIGEwMCArIGIwMSAqIGExMCArIGIwMiAqIGEyMCxcbiAgICAgICAgICBiMDAgKiBhMDEgKyBiMDEgKiBhMTEgKyBiMDIgKiBhMjEsXG4gICAgICAgICAgYjAwICogYTAyICsgYjAxICogYTEyICsgYjAyICogYTIyLFxuICAgICAgICAgIGIxMCAqIGEwMCArIGIxMSAqIGExMCArIGIxMiAqIGEyMCxcbiAgICAgICAgICBiMTAgKiBhMDEgKyBiMTEgKiBhMTEgKyBiMTIgKiBhMjEsXG4gICAgICAgICAgYjEwICogYTAyICsgYjExICogYTEyICsgYjEyICogYTIyLFxuICAgICAgICAgIGIyMCAqIGEwMCArIGIyMSAqIGExMCArIGIyMiAqIGEyMCxcbiAgICAgICAgICBiMjAgKiBhMDEgKyBiMjEgKiBhMTEgKyBiMjIgKiBhMjEsXG4gICAgICAgICAgYjIwICogYTAyICsgYjIxICogYTEyICsgYjIyICogYTIyLFxuICAgICAgICBdO1xuICAgICAgfSxcbiAgICAgIHhSb3RhdGlvbjogZnVuY3Rpb24oYW5nbGVJblJhZGlhbnMpIHtcbiAgICAgICAgdmFyIGMgPSBNYXRoLmNvcyhhbmdsZUluUmFkaWFucyk7XG4gICAgICAgIHZhciBzID0gTWF0aC5zaW4oYW5nbGVJblJhZGlhbnMpO1xuICAgICBcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAxLCAwLCAwLCBcbiAgICAgICAgICAwLCBjLCBzLCBcbiAgICAgICAgICAwLCAtcywgY1xuICAgICAgICBdO1xuICAgICAgfSxcbiAgICAgXG4gICAgICB5Um90YXRpb246IGZ1bmN0aW9uKGFuZ2xlSW5SYWRpYW5zKSB7XG4gICAgICAgIHZhciBjID0gTWF0aC5jb3MoYW5nbGVJblJhZGlhbnMpO1xuICAgICAgICB2YXIgcyA9IE1hdGguc2luKGFuZ2xlSW5SYWRpYW5zKTtcbiAgICAgXG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgYywgMCwgLXMsIFxuICAgICAgICAgIDAsIDEsIDAsIFxuICAgICAgICAgIHMsIDAsIGNcbiAgICAgICAgXTtcbiAgICAgIH0sXG4gICAgIFxuICAgICAgelJvdGF0aW9uOiBmdW5jdGlvbihhbmdsZUluUmFkaWFucykge1xuICAgICAgICB2YXIgYyA9IE1hdGguY29zKGFuZ2xlSW5SYWRpYW5zKTtcbiAgICAgICAgdmFyIHMgPSBNYXRoLnNpbihhbmdsZUluUmFkaWFucyk7XG4gICAgIFxuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICBjLCBzLCAwLCBcbiAgICAgICAgICAtcywgYywgMCxcbiAgICAgICAgICAgMCwgMCwgMVxuICAgICAgICBdO1xuICAgICAgfSxcbiAgICAgIG0zVG9tNCA6IGZ1bmN0aW9uKG0pe1xuICAgICAgICBjb25zdCBkc3QgPSBuZXcgRmxvYXQzMkFycmF5KDE2KVxuICAgICAgICBkc3RbIDBdID0gbVswXVxuICAgICAgICBkc3RbIDFdID0gbVsxXVxuICAgICAgICBkc3RbIDJdID0gbVsyXVxuICAgICAgICBkc3RbIDNdID0gMFxuICAgICAgICBkc3RbIDRdID0gbVszXVxuICAgICAgICBkc3RbIDVdID0gbVs0XVxuICAgICAgICBkc3RbIDZdID0gbVs1XVxuICAgICAgICBkc3RbIDddID0gMFxuICAgICAgICBkc3RbIDhdID0gbVs2XVxuICAgICAgICBkc3RbIDldID0gbVs3XVxuICAgICAgICBkc3RbMTBdID0gbVs4XVxuICAgICAgICBkc3RbMTFdID0gMFxuICAgICAgICBkc3RbMTJdID0gMFxuICAgICAgICBkc3RbMTNdID0gMFxuICAgICAgICBkc3RbMTRdID0gMFxuICAgICAgICBkc3RbMTVdID0gMVxuICAgICAgICByZXR1cm4gZHN0XG4gICAgICB9LFxuICAgICAgeFJvdGF0ZTogZnVuY3Rpb24obSwgYW5nbGVJblJhZGlhbnMpIHtcbiAgICAgICAgcmV0dXJuIG0zLm11bHRpcGx5KG0sIG0zLnhSb3RhdGlvbihhbmdsZUluUmFkaWFucykpO1xuICAgICAgfSxcbiAgICAgXG4gICAgICB5Um90YXRlOiBmdW5jdGlvbihtLCBhbmdsZUluUmFkaWFucykge1xuICAgICAgICByZXR1cm4gbTMubXVsdGlwbHkobSwgbTMueVJvdGF0aW9uKGFuZ2xlSW5SYWRpYW5zKSk7XG4gICAgICB9LFxuICAgICBcbiAgICAgIHpSb3RhdGU6IGZ1bmN0aW9uKG0sIGFuZ2xlSW5SYWRpYW5zKSB7XG4gICAgICAgIHJldHVybiBtMy5tdWx0aXBseShtLCBtMy56Um90YXRpb24oYW5nbGVJblJhZGlhbnMpKTtcbiAgICAgIH0sXG4gICAgICB0cmFuc2Zvcm1Qb2ludCA6IGZ1bmN0aW9uKG0sIHYsIGRzdCkge1xuICAgICAgICBkc3QgPSBkc3QgfHwgbmV3IEZsb2F0MzJBcnJheSgzKTtcbiAgICAgICAgdmFyIHYwID0gdlswXTtcbiAgICAgICAgdmFyIHYxID0gdlsxXTtcbiAgICAgICAgdmFyIHYyID0gdlsyXTtcbiAgICAgICAgXG4gICAgXG4gICAgICAgIGRzdFswXSA9ICh2MCAqIG1bMCAqIDMgKyAwXSArIHYxICogbVsxICogMyArIDBdICsgdjIgKiBtWzIgKiAzICsgMF0gICkgXG4gICAgICAgIGRzdFsxXSA9ICh2MCAqIG1bMCAqIDMgKyAxXSArIHYxICogbVsxICogMyArIDFdICsgdjIgKiBtWzIgKiAzICsgMV0gICkgXG4gICAgICAgIGRzdFsyXSA9ICh2MCAqIG1bMCAqIDMgKyAyXSArIHYxICogbVsxICogMyArIDJdICsgdjIgKiBtWzIgKiAzICsgMl0gKSBcbiAgICBcbiAgICAgICAgcmV0dXJuIGRzdDtcbiAgICAgIH0sXG4gICAgICBpZGVudGl0eSA6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgIDEsIDAsIDAsXG4gICAgICAgICAgMCwgMSwgMCxcbiAgICAgICAgICAwLCAwLCAxLFxuICAgICAgICBdO1xuICAgICAgfSxcbiAgICAgIHRyYW5zcG9zZSA6IGZ1bmN0aW9uKG0pe1xuICAgICAgICAgXG4gICAgICAgICAgZHN0ID0gbmV3IEZsb2F0MzJBcnJheSg5KVxuICAgICAgICAgIGRzdFswXSA9IG1bMF1cbiAgICAgICAgICBkc3RbMV0gPSBtWzNdXG4gICAgICAgICAgZHN0WzJdID0gbVs2XVxuICAgICAgICAgIGRzdFszXSA9IG1bMV1cbiAgICAgICAgICBkc3RbNF0gPSBtWzRdXG4gICAgICAgICAgZHN0WzVdID0gbVs3XVxuICAgICAgICAgIGRzdFs2XSA9IG1bMl1cbiAgICAgICAgICBkc3RbN10gPSBtWzVdXG4gICAgICAgICAgZHN0WzhdID0gbVs4XVxuICAgICAgICAgIHJldHVybiBkc3RcbiAgICAgIH0sXG4gICAgICBzY2FsaW5nIDogZnVuY3Rpb24oc3gsc3ksc3ope1xuICAgICAgICByZXR1cm4gbmV3IEZsb2F0MzJBcnJheShbXG4gICAgICAgICAgICAgICAgICAgIHN4LCAwLCAwLFxuICAgICAgICAgICAgICAgICAgICAwLCBzeSwgMCxcbiAgICAgICAgICAgICAgICAgICAgMCwgIDAsIHN6XG4gICAgICAgICAgICAgIF0pXG4gICAgICB9LFxuICAgICAgc2NhbGUgOiBmdW5jdGlvbihtLCBzeCxzeSxzeil7XG4gICAgICAgIHJldHVybiBtMy5tdWx0aXBseShtLCBtMy5zY2FsaW5nKHN4LCBzeSwgc3opKVxuICAgICAgfSxcbiAgICAgIC8qXG4gICAgICAwIDEgMlxuICAgICAgMyA0IDVcbiAgICAgIDYgNyA4XG4gICAgICAqL1xuICAgICAgaW52ZXJzZSA6IGZ1bmN0aW9uKG0pe1xuICAgICAgIGNvbnN0IGRldCA9IG1bMF0gKiBtWzRdICogbVs4XSArIFxuICAgICAgICAgICAgICAgICAgIG1bMl0gKiBtWzNdICogbVs3XSArXG4gICAgICAgICAgICAgICAgICAgbVsxXSAqIG1bNV0gKiBtWzZdIC1cbiAgICAgICAgICAgICAgICAgICBtWzJdICogbVs0XSAqIG1bNl0gLVxuICAgICAgICAgICAgICAgICAgIG1bMF0gKiBtWzVdICogbVs3XSAtXG4gICAgICAgICAgICAgICAgICAgbVs4XSAqIG1bM10gKiBtWzJdIFxuICAgICAgICBjb25zdCBkc3QgPSBuZXcgRmxvYXQzMkFycmF5KDkpXG4gICAgICAgIGRzdFswXSA9IChtWzRdICogbVs4XSAtIG1bN10gKiBtWzVdKSAvIGRldFxuICAgICAgICBkc3RbMV0gPSAobVszXSAqIG1bOF0gLSBtWzZdICogbVs1XSkgLyBkZXRcbiAgICAgICAgZHN0WzJdID0gKG1bM10gKiBtWzddIC0gbVs2XSAqIG1bNF0pIC8gZGV0XG4gICAgICAgIGRzdFszXSA9IChtWzFdICogbVs4XSAtIG1bMl0gKiBtWzddKSAvIGRldFxuICAgICAgICBkc3RbNF0gPSAobVswXSAqIG1bOF0gLSBtWzJdICogbVs2XSkgLyBkZXRcbiAgICAgICAgZHN0WzVdID0gKG1bMF0gKiBtWzddIC0gbVsxXSAqIG1bNl0pIC8gZGV0XG4gICAgICAgIGRzdFs2XSA9IChtWzFdICogbVs1XSAtIG1bMl0gKiBtWzRdKSAvIGRldFxuICAgICAgICBkc3RbN10gPSAobVswXSAqIG1bNV0gLSBtWzJdICogbVszXSkgLyBkZXRcbiAgICAgICAgZHN0WzhdID0gKG1bMF0gKiBtWzRdIC0gbVsxXSAqIG1bNF0pIC8gZGV0XG4gICAgICAgIFxuICAgICAgfSxcbiAgICAgIHRvU3RyaW5nKG0pe1xuICAgICAgICByZXR1cm4gbS5yZWR1Y2UoKGFjYyxlbCxpZHgpID0+IChpZHgpICUgMyA9PT0gMCA/IGFjYyArPSAnXFxuJyArIGVsIDogYWNjICs9ICcgJyArIGVsIClcbiAgICAgIH0sXG4gICAgICBkb3QodjEsdjIpe1xuICAgICAgICByZXR1cm4gdjFbMF0qdjJbMF0gKyB2MVsxXSp2MlsxXSArIHYxWzJdICogdjJbMl1cbiAgICAgIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gbTMiLCJjb25zdCBNYXRUeXBlID0gRmxvYXQzMkFycmF5O1xuY29uc3Qge25vcm19ID0gcmVxdWlyZSgnLi92ZWMzJylcbmNvbnN0IG00ID0ge1xuICBtdWx0aXBseTogZnVuY3Rpb24gKGEsIGIsIGRzdCkge1xuICAgIGRzdCA9IGRzdCB8fCBuZXcgTWF0VHlwZSgxNik7XG4gICAgdmFyIGEwMCA9IGFbMCAqIDQgKyAwXTtcbiAgICB2YXIgYTAxID0gYVswICogNCArIDFdO1xuICAgIHZhciBhMDIgPSBhWzAgKiA0ICsgMl07XG4gICAgdmFyIGEwMyA9IGFbMCAqIDQgKyAzXTtcbiAgICB2YXIgYTEwID0gYVsxICogNCArIDBdO1xuICAgIHZhciBhMTEgPSBhWzEgKiA0ICsgMV07XG4gICAgdmFyIGExMiA9IGFbMSAqIDQgKyAyXTtcbiAgICB2YXIgYTEzID0gYVsxICogNCArIDNdO1xuICAgIHZhciBhMjAgPSBhWzIgKiA0ICsgMF07XG4gICAgdmFyIGEyMSA9IGFbMiAqIDQgKyAxXTtcbiAgICB2YXIgYTIyID0gYVsyICogNCArIDJdO1xuICAgIHZhciBhMjMgPSBhWzIgKiA0ICsgM107XG4gICAgdmFyIGEzMCA9IGFbMyAqIDQgKyAwXTtcbiAgICB2YXIgYTMxID0gYVszICogNCArIDFdO1xuICAgIHZhciBhMzIgPSBhWzMgKiA0ICsgMl07XG4gICAgdmFyIGEzMyA9IGFbMyAqIDQgKyAzXTtcbiAgICB2YXIgYjAwID0gYlswICogNCArIDBdO1xuICAgIHZhciBiMDEgPSBiWzAgKiA0ICsgMV07XG4gICAgdmFyIGIwMiA9IGJbMCAqIDQgKyAyXTtcbiAgICB2YXIgYjAzID0gYlswICogNCArIDNdO1xuICAgIHZhciBiMTAgPSBiWzEgKiA0ICsgMF07XG4gICAgdmFyIGIxMSA9IGJbMSAqIDQgKyAxXTtcbiAgICB2YXIgYjEyID0gYlsxICogNCArIDJdO1xuICAgIHZhciBiMTMgPSBiWzEgKiA0ICsgM107XG4gICAgdmFyIGIyMCA9IGJbMiAqIDQgKyAwXTtcbiAgICB2YXIgYjIxID0gYlsyICogNCArIDFdO1xuICAgIHZhciBiMjIgPSBiWzIgKiA0ICsgMl07XG4gICAgdmFyIGIyMyA9IGJbMiAqIDQgKyAzXTtcbiAgICB2YXIgYjMwID0gYlszICogNCArIDBdO1xuICAgIHZhciBiMzEgPSBiWzMgKiA0ICsgMV07XG4gICAgdmFyIGIzMiA9IGJbMyAqIDQgKyAyXTtcbiAgICB2YXIgYjMzID0gYlszICogNCArIDNdO1xuICAgIGRzdFswXSA9IGIwMCAqIGEwMCArIGIwMSAqIGExMCArIGIwMiAqIGEyMCArIGIwMyAqIGEzMDtcbiAgICBkc3RbMV0gPSBiMDAgKiBhMDEgKyBiMDEgKiBhMTEgKyBiMDIgKiBhMjEgKyBiMDMgKiBhMzE7XG4gICAgZHN0WzJdID0gYjAwICogYTAyICsgYjAxICogYTEyICsgYjAyICogYTIyICsgYjAzICogYTMyO1xuICAgIGRzdFszXSA9IGIwMCAqIGEwMyArIGIwMSAqIGExMyArIGIwMiAqIGEyMyArIGIwMyAqIGEzMztcbiAgICBkc3RbNF0gPSBiMTAgKiBhMDAgKyBiMTEgKiBhMTAgKyBiMTIgKiBhMjAgKyBiMTMgKiBhMzA7XG4gICAgZHN0WzVdID0gYjEwICogYTAxICsgYjExICogYTExICsgYjEyICogYTIxICsgYjEzICogYTMxO1xuICAgIGRzdFs2XSA9IGIxMCAqIGEwMiArIGIxMSAqIGExMiArIGIxMiAqIGEyMiArIGIxMyAqIGEzMjtcbiAgICBkc3RbN10gPSBiMTAgKiBhMDMgKyBiMTEgKiBhMTMgKyBiMTIgKiBhMjMgKyBiMTMgKiBhMzM7XG4gICAgZHN0WzhdID0gYjIwICogYTAwICsgYjIxICogYTEwICsgYjIyICogYTIwICsgYjIzICogYTMwO1xuICAgIGRzdFs5XSA9IGIyMCAqIGEwMSArIGIyMSAqIGExMSArIGIyMiAqIGEyMSArIGIyMyAqIGEzMTtcbiAgICBkc3RbMTBdID0gYjIwICogYTAyICsgYjIxICogYTEyICsgYjIyICogYTIyICsgYjIzICogYTMyO1xuICAgIGRzdFsxMV0gPSBiMjAgKiBhMDMgKyBiMjEgKiBhMTMgKyBiMjIgKiBhMjMgKyBiMjMgKiBhMzM7XG4gICAgZHN0WzEyXSA9IGIzMCAqIGEwMCArIGIzMSAqIGExMCArIGIzMiAqIGEyMCArIGIzMyAqIGEzMDtcbiAgICBkc3RbMTNdID0gYjMwICogYTAxICsgYjMxICogYTExICsgYjMyICogYTIxICsgYjMzICogYTMxO1xuICAgIGRzdFsxNF0gPSBiMzAgKiBhMDIgKyBiMzEgKiBhMTIgKyBiMzIgKiBhMjIgKyBiMzMgKiBhMzI7XG4gICAgZHN0WzE1XSA9IGIzMCAqIGEwMyArIGIzMSAqIGExMyArIGIzMiAqIGEyMyArIGIzMyAqIGEzMztcbiAgICByZXR1cm4gZHN0O1xuICB9LFxuXG4gIHRyYW5zbGF0aW9uOiBmdW5jdGlvbiAodHgsIHR5LCB0eikge1xuICAgIHJldHVybiBbMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgdHgsIHR5LCB0eiwgMV07XG4gIH0sXG5cbiAgeFJvdGF0aW9uOiBmdW5jdGlvbiAoYW5nbGVJblJhZGlhbnMpIHtcbiAgICB2YXIgYyA9IE1hdGguY29zKGFuZ2xlSW5SYWRpYW5zKTtcbiAgICB2YXIgcyA9IE1hdGguc2luKGFuZ2xlSW5SYWRpYW5zKTtcblxuICAgIHJldHVybiBbMSwgMCwgMCwgMCwgMCwgYywgcywgMCwgMCwgLXMsIGMsIDAsIDAsIDAsIDAsIDFdO1xuICB9LFxuXG4gIHlSb3RhdGlvbjogZnVuY3Rpb24gKGFuZ2xlSW5SYWRpYW5zKSB7XG4gICAgdmFyIGMgPSBNYXRoLmNvcyhhbmdsZUluUmFkaWFucyk7XG4gICAgdmFyIHMgPSBNYXRoLnNpbihhbmdsZUluUmFkaWFucyk7XG5cbiAgICByZXR1cm4gW2MsIDAsIC1zLCAwLCAwLCAxLCAwLCAwLCBzLCAwLCBjLCAwLCAwLCAwLCAwLCAxXTtcbiAgfSxcblxuICB6Um90YXRpb246IGZ1bmN0aW9uIChhbmdsZUluUmFkaWFucykge1xuICAgIHZhciBjID0gTWF0aC5jb3MoYW5nbGVJblJhZGlhbnMpO1xuICAgIHZhciBzID0gTWF0aC5zaW4oYW5nbGVJblJhZGlhbnMpO1xuXG4gICAgcmV0dXJuIFtjLCBzLCAwLCAwLCAtcywgYywgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMV07XG4gIH0sXG5cbiAgc2NhbGluZzogZnVuY3Rpb24gKHN4LCBzeSwgc3opIHtcbiAgICByZXR1cm4gW3N4LCAwLCAwLCAwLCAwLCBzeSwgMCwgMCwgMCwgMCwgc3osIDAsIDAsIDAsIDAsIDFdO1xuICB9LFxuICB0cmFuc2xhdGU6IGZ1bmN0aW9uIChtLCB0eCwgdHksIHR6KSB7XG4gICAgcmV0dXJuIG00Lm11bHRpcGx5KG0sIG00LnRyYW5zbGF0aW9uKHR4LCB0eSwgdHopKTtcbiAgfSxcblxuICB4Um90YXRlOiBmdW5jdGlvbiAobSwgYW5nbGVJblJhZGlhbnMpIHtcbiAgICByZXR1cm4gbTQubXVsdGlwbHkobSwgbTQueFJvdGF0aW9uKGFuZ2xlSW5SYWRpYW5zKSk7XG4gIH0sXG5cbiAgeVJvdGF0ZTogZnVuY3Rpb24gKG0sIGFuZ2xlSW5SYWRpYW5zKSB7XG4gICAgcmV0dXJuIG00Lm11bHRpcGx5KG0sIG00LnlSb3RhdGlvbihhbmdsZUluUmFkaWFucykpO1xuICB9LFxuXG4gIHpSb3RhdGU6IGZ1bmN0aW9uIChtLCBhbmdsZUluUmFkaWFucykge1xuICAgIHJldHVybiBtNC5tdWx0aXBseShtLCBtNC56Um90YXRpb24oYW5nbGVJblJhZGlhbnMpKTtcbiAgfSxcblxuICBzY2FsZTogZnVuY3Rpb24gKG0sIHN4LCBzeSwgc3opIHtcbiAgICByZXR1cm4gbTQubXVsdGlwbHkobSwgbTQuc2NhbGluZyhzeCwgc3ksIHN6KSk7XG4gIH0sXG4gIG1ha2VPcnQ6IGZ1bmN0aW9uICh2KSB7XG4gICAgY29uc3QgbyA9IFswLCAwLCAwXTtcbiAgICBjb25zdCBub3JtID0gTWF0aC5zcXJ0KHZbMF0gKiB2WzBdICsgdlsxXSAqIHZbMV0gKyB2WzJdICogdlsyXSk7XG4gICAgb1swXSA9IHZbMF0gLyBub3JtO1xuICAgIG9bMV0gPSB2WzFdIC8gbm9ybTtcbiAgICBvWzJdID0gdlsyXSAvIG5vcm07XG4gICAgcmV0dXJuIG87XG4gIH0sXG4gIHByb2plY3Rpb246IGZ1bmN0aW9uICh3aWR0aCwgaGVpZ2h0LCBkZXB0aCkge1xuICAgIC8vINCt0YLQsCDQvNCw0YLRgNC40YbQsCDQv9C10YDQtdCy0L7RgNCw0YfQuNCy0LDQtdGCIFksINGH0YLQvtCx0YsgMCDQsdGL0Lsg0L3QsNCy0LXRgNGF0YNcbiAgICByZXR1cm4gW1xuICAgICAgMiAvIHdpZHRoLFxuICAgICAgMCxcbiAgICAgIDAsXG4gICAgICAwLFxuICAgICAgMCxcbiAgICAgIC0yIC8gaGVpZ2h0LFxuICAgICAgMCxcbiAgICAgIDAsXG4gICAgICAwLFxuICAgICAgMCxcbiAgICAgIDIgLyBkZXB0aCxcbiAgICAgIDAsXG4gICAgICAtMSxcbiAgICAgIDEsXG4gICAgICAwLFxuICAgICAgMSxcbiAgICBdO1xuICB9LFxuICBwZXJzcGVjdGl2ZTogZnVuY3Rpb24gKGZpZWxkT2ZWaWV3SW5SYWRpYW5zLCBhc3BlY3QsIG5lYXIsIGZhcikge1xuICAgIHZhciBmID0gTWF0aC50YW4oTWF0aC5QSSAqIDAuNSAtIDAuNSAqIGZpZWxkT2ZWaWV3SW5SYWRpYW5zKTtcbiAgICB2YXIgcmFuZ2VJbnYgPSAxLjAgLyAobmVhciAtIGZhcik7XG5cbiAgICByZXR1cm4gW1xuICAgICAgZiAvIGFzcGVjdCxcbiAgICAgIDAsXG4gICAgICAwLFxuICAgICAgMCxcbiAgICAgIDAsXG4gICAgICBmLFxuICAgICAgMCxcbiAgICAgIDAsXG4gICAgICAwLFxuICAgICAgMCxcbiAgICAgIChuZWFyICsgZmFyKSAqIHJhbmdlSW52LFxuICAgICAgLTEsXG4gICAgICAwLFxuICAgICAgMCxcbiAgICAgIG5lYXIgKiBmYXIgKiByYW5nZUludiAqIDIsXG4gICAgICAwLFxuICAgIF07XG4gIH0sXG4gIGludmVyc2U6IGZ1bmN0aW9uIChtKSB7XG4gICAgdmFyIG0wMCA9IG1bMCAqIDQgKyAwXTtcbiAgICB2YXIgbTAxID0gbVswICogNCArIDFdO1xuICAgIHZhciBtMDIgPSBtWzAgKiA0ICsgMl07XG4gICAgdmFyIG0wMyA9IG1bMCAqIDQgKyAzXTtcbiAgICB2YXIgbTEwID0gbVsxICogNCArIDBdO1xuICAgIHZhciBtMTEgPSBtWzEgKiA0ICsgMV07XG4gICAgdmFyIG0xMiA9IG1bMSAqIDQgKyAyXTtcbiAgICB2YXIgbTEzID0gbVsxICogNCArIDNdO1xuICAgIHZhciBtMjAgPSBtWzIgKiA0ICsgMF07XG4gICAgdmFyIG0yMSA9IG1bMiAqIDQgKyAxXTtcbiAgICB2YXIgbTIyID0gbVsyICogNCArIDJdO1xuICAgIHZhciBtMjMgPSBtWzIgKiA0ICsgM107XG4gICAgdmFyIG0zMCA9IG1bMyAqIDQgKyAwXTtcbiAgICB2YXIgbTMxID0gbVszICogNCArIDFdO1xuICAgIHZhciBtMzIgPSBtWzMgKiA0ICsgMl07XG4gICAgdmFyIG0zMyA9IG1bMyAqIDQgKyAzXTtcbiAgICB2YXIgdG1wXzAgPSBtMjIgKiBtMzM7XG4gICAgdmFyIHRtcF8xID0gbTMyICogbTIzO1xuICAgIHZhciB0bXBfMiA9IG0xMiAqIG0zMztcbiAgICB2YXIgdG1wXzMgPSBtMzIgKiBtMTM7XG4gICAgdmFyIHRtcF80ID0gbTEyICogbTIzO1xuICAgIHZhciB0bXBfNSA9IG0yMiAqIG0xMztcbiAgICB2YXIgdG1wXzYgPSBtMDIgKiBtMzM7XG4gICAgdmFyIHRtcF83ID0gbTMyICogbTAzO1xuICAgIHZhciB0bXBfOCA9IG0wMiAqIG0yMztcbiAgICB2YXIgdG1wXzkgPSBtMjIgKiBtMDM7XG4gICAgdmFyIHRtcF8xMCA9IG0wMiAqIG0xMztcbiAgICB2YXIgdG1wXzExID0gbTEyICogbTAzO1xuICAgIHZhciB0bXBfMTIgPSBtMjAgKiBtMzE7XG4gICAgdmFyIHRtcF8xMyA9IG0zMCAqIG0yMTtcbiAgICB2YXIgdG1wXzE0ID0gbTEwICogbTMxO1xuICAgIHZhciB0bXBfMTUgPSBtMzAgKiBtMTE7XG4gICAgdmFyIHRtcF8xNiA9IG0xMCAqIG0yMTtcbiAgICB2YXIgdG1wXzE3ID0gbTIwICogbTExO1xuICAgIHZhciB0bXBfMTggPSBtMDAgKiBtMzE7XG4gICAgdmFyIHRtcF8xOSA9IG0zMCAqIG0wMTtcbiAgICB2YXIgdG1wXzIwID0gbTAwICogbTIxO1xuICAgIHZhciB0bXBfMjEgPSBtMjAgKiBtMDE7XG4gICAgdmFyIHRtcF8yMiA9IG0wMCAqIG0xMTtcbiAgICB2YXIgdG1wXzIzID0gbTEwICogbTAxO1xuXG4gICAgdmFyIHQwID1cbiAgICAgIHRtcF8wICogbTExICtcbiAgICAgIHRtcF8zICogbTIxICtcbiAgICAgIHRtcF80ICogbTMxIC1cbiAgICAgICh0bXBfMSAqIG0xMSArIHRtcF8yICogbTIxICsgdG1wXzUgKiBtMzEpO1xuICAgIHZhciB0MSA9XG4gICAgICB0bXBfMSAqIG0wMSArXG4gICAgICB0bXBfNiAqIG0yMSArXG4gICAgICB0bXBfOSAqIG0zMSAtXG4gICAgICAodG1wXzAgKiBtMDEgKyB0bXBfNyAqIG0yMSArIHRtcF84ICogbTMxKTtcbiAgICB2YXIgdDIgPVxuICAgICAgdG1wXzIgKiBtMDEgK1xuICAgICAgdG1wXzcgKiBtMTEgK1xuICAgICAgdG1wXzEwICogbTMxIC1cbiAgICAgICh0bXBfMyAqIG0wMSArIHRtcF82ICogbTExICsgdG1wXzExICogbTMxKTtcbiAgICB2YXIgdDMgPVxuICAgICAgdG1wXzUgKiBtMDEgK1xuICAgICAgdG1wXzggKiBtMTEgK1xuICAgICAgdG1wXzExICogbTIxIC1cbiAgICAgICh0bXBfNCAqIG0wMSArIHRtcF85ICogbTExICsgdG1wXzEwICogbTIxKTtcblxuICAgIHZhciBkID0gMS4wIC8gKG0wMCAqIHQwICsgbTEwICogdDEgKyBtMjAgKiB0MiArIG0zMCAqIHQzKTtcblxuICAgIHJldHVybiBbXG4gICAgICBkICogdDAsXG4gICAgICBkICogdDEsXG4gICAgICBkICogdDIsXG4gICAgICBkICogdDMsXG4gICAgICBkICpcbiAgICAgICAgKHRtcF8xICogbTEwICtcbiAgICAgICAgICB0bXBfMiAqIG0yMCArXG4gICAgICAgICAgdG1wXzUgKiBtMzAgLVxuICAgICAgICAgICh0bXBfMCAqIG0xMCArIHRtcF8zICogbTIwICsgdG1wXzQgKiBtMzApKSxcbiAgICAgIGQgKlxuICAgICAgICAodG1wXzAgKiBtMDAgK1xuICAgICAgICAgIHRtcF83ICogbTIwICtcbiAgICAgICAgICB0bXBfOCAqIG0zMCAtXG4gICAgICAgICAgKHRtcF8xICogbTAwICsgdG1wXzYgKiBtMjAgKyB0bXBfOSAqIG0zMCkpLFxuICAgICAgZCAqXG4gICAgICAgICh0bXBfMyAqIG0wMCArXG4gICAgICAgICAgdG1wXzYgKiBtMTAgK1xuICAgICAgICAgIHRtcF8xMSAqIG0zMCAtXG4gICAgICAgICAgKHRtcF8yICogbTAwICsgdG1wXzcgKiBtMTAgKyB0bXBfMTAgKiBtMzApKSxcbiAgICAgIGQgKlxuICAgICAgICAodG1wXzQgKiBtMDAgK1xuICAgICAgICAgIHRtcF85ICogbTEwICtcbiAgICAgICAgICB0bXBfMTAgKiBtMjAgLVxuICAgICAgICAgICh0bXBfNSAqIG0wMCArIHRtcF84ICogbTEwICsgdG1wXzExICogbTIwKSksXG4gICAgICBkICpcbiAgICAgICAgKHRtcF8xMiAqIG0xMyArXG4gICAgICAgICAgdG1wXzE1ICogbTIzICtcbiAgICAgICAgICB0bXBfMTYgKiBtMzMgLVxuICAgICAgICAgICh0bXBfMTMgKiBtMTMgKyB0bXBfMTQgKiBtMjMgKyB0bXBfMTcgKiBtMzMpKSxcbiAgICAgIGQgKlxuICAgICAgICAodG1wXzEzICogbTAzICtcbiAgICAgICAgICB0bXBfMTggKiBtMjMgK1xuICAgICAgICAgIHRtcF8yMSAqIG0zMyAtXG4gICAgICAgICAgKHRtcF8xMiAqIG0wMyArIHRtcF8xOSAqIG0yMyArIHRtcF8yMCAqIG0zMykpLFxuICAgICAgZCAqXG4gICAgICAgICh0bXBfMTQgKiBtMDMgK1xuICAgICAgICAgIHRtcF8xOSAqIG0xMyArXG4gICAgICAgICAgdG1wXzIyICogbTMzIC1cbiAgICAgICAgICAodG1wXzE1ICogbTAzICsgdG1wXzE4ICogbTEzICsgdG1wXzIzICogbTMzKSksXG4gICAgICBkICpcbiAgICAgICAgKHRtcF8xNyAqIG0wMyArXG4gICAgICAgICAgdG1wXzIwICogbTEzICtcbiAgICAgICAgICB0bXBfMjMgKiBtMjMgLVxuICAgICAgICAgICh0bXBfMTYgKiBtMDMgKyB0bXBfMjEgKiBtMTMgKyB0bXBfMjIgKiBtMjMpKSxcbiAgICAgIGQgKlxuICAgICAgICAodG1wXzE0ICogbTIyICtcbiAgICAgICAgICB0bXBfMTcgKiBtMzIgK1xuICAgICAgICAgIHRtcF8xMyAqIG0xMiAtXG4gICAgICAgICAgKHRtcF8xNiAqIG0zMiArIHRtcF8xMiAqIG0xMiArIHRtcF8xNSAqIG0yMikpLFxuICAgICAgZCAqXG4gICAgICAgICh0bXBfMjAgKiBtMzIgK1xuICAgICAgICAgIHRtcF8xMiAqIG0wMiArXG4gICAgICAgICAgdG1wXzE5ICogbTIyIC1cbiAgICAgICAgICAodG1wXzE4ICogbTIyICsgdG1wXzIxICogbTMyICsgdG1wXzEzICogbTAyKSksXG4gICAgICBkICpcbiAgICAgICAgKHRtcF8xOCAqIG0xMiArXG4gICAgICAgICAgdG1wXzIzICogbTMyICtcbiAgICAgICAgICB0bXBfMTUgKiBtMDIgLVxuICAgICAgICAgICh0bXBfMjIgKiBtMzIgKyB0bXBfMTQgKiBtMDIgKyB0bXBfMTkgKiBtMTIpKSxcbiAgICAgIGQgKlxuICAgICAgICAodG1wXzIyICogbTIyICtcbiAgICAgICAgICB0bXBfMTYgKiBtMDIgK1xuICAgICAgICAgIHRtcF8yMSAqIG0xMiAtXG4gICAgICAgICAgKHRtcF8yMCAqIG0xMiArIHRtcF8yMyAqIG0yMiArIHRtcF8xNyAqIG0wMikpLFxuICAgIF07XG4gIH0sXG4gIGxvb2tBdDogZnVuY3Rpb24gKGNhbWVyYVBvc2l0aW9uLCB0YXJnZXQsIHVwKSB7XG4gICAgdmFyIHpBeGlzID0gbm9ybWFsaXplKHN1YnRyYWN0VmVjdG9ycyhjYW1lcmFQb3NpdGlvbiwgdGFyZ2V0KSk7XG4gICAgdmFyIHhBeGlzID0gbm9ybWFsaXplKGNyb3NzKHVwLCB6QXhpcykpO1xuICAgIHZhciB5QXhpcyA9IG5vcm1hbGl6ZShjcm9zcyh6QXhpcywgeEF4aXMpKTtcblxuICAgIHJldHVybiBbXG4gICAgICB4QXhpc1swXSxcbiAgICAgIHhBeGlzWzFdLFxuICAgICAgeEF4aXNbMl0sXG4gICAgICAwLFxuICAgICAgeUF4aXNbMF0sXG4gICAgICB5QXhpc1sxXSxcbiAgICAgIHlBeGlzWzJdLFxuICAgICAgMCxcbiAgICAgIHpBeGlzWzBdLFxuICAgICAgekF4aXNbMV0sXG4gICAgICB6QXhpc1syXSxcbiAgICAgIDAsXG4gICAgICBjYW1lcmFQb3NpdGlvblswXSxcbiAgICAgIGNhbWVyYVBvc2l0aW9uWzFdLFxuICAgICAgY2FtZXJhUG9zaXRpb25bMl0sXG4gICAgICAxLFxuICAgIF07XG4gIH0sXG4gIGNvcHk6IGZ1bmN0aW9uIChzcmMpIHtcbiAgICBjb25zdCBkc3QgPSBuZXcgTWF0VHlwZSgxNik7XG5cbiAgICBkc3RbMF0gPSBzcmNbMF07XG4gICAgZHN0WzFdID0gc3JjWzFdO1xuICAgIGRzdFsyXSA9IHNyY1syXTtcbiAgICBkc3RbM10gPSBzcmNbM107XG4gICAgZHN0WzRdID0gc3JjWzRdO1xuICAgIGRzdFs1XSA9IHNyY1s1XTtcbiAgICBkc3RbNl0gPSBzcmNbNl07XG4gICAgZHN0WzddID0gc3JjWzddO1xuICAgIGRzdFs4XSA9IHNyY1s4XTtcbiAgICBkc3RbOV0gPSBzcmNbOV07XG4gICAgZHN0WzEwXSA9IHNyY1sxMF07XG4gICAgZHN0WzExXSA9IHNyY1sxMV07XG4gICAgZHN0WzEyXSA9IHNyY1sxMl07XG4gICAgZHN0WzEzXSA9IHNyY1sxM107XG4gICAgZHN0WzE0XSA9IHNyY1sxNF07XG4gICAgZHN0WzE1XSA9IHNyY1sxNV07XG5cbiAgICByZXR1cm4gZHN0O1xuICB9LFxuICB2ZWN0b3JTdW06IGZ1bmN0aW9uICh2MSwgdjIpIHtcbiAgICBjb25zdCB2ZWN0b3IgPSBbMCwgMCwgMF07XG4gICAgdmVjdG9yWzBdID0gdjFbMF0gKyB2MlswXTtcbiAgICB2ZWN0b3JbMV0gPSB2MVsxXSArIHYyWzFdO1xuICAgIHZlY3RvclsyXSA9IHYxWzJdICsgdjJbMl07XG4gICAgcmV0dXJuIHZlY3RvcjtcbiAgfSxcbiAgY3Jvc3M6IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIGFbMV0gKiBiWzJdIC0gYVsyXSAqIGJbMV0sXG4gICAgICBhWzJdICogYlswXSAtIGFbMF0gKiBiWzJdLFxuICAgICAgYVswXSAqIGJbMV0gLSBhWzFdICogYlswXSxcbiAgICBdO1xuICB9LFxuICB2ZWN0b3JTY2FsYXJQcm9kdWN0KGEsIHMpIHtcbiAgICBsZXQgdiA9IFswLCAwLCAwXTtcblxuICAgIHZbMF0gPSBhWzBdICogcztcbiAgICB2WzFdID0gYVsxXSAqIHM7XG4gICAgdlsyXSA9IGFbMl0gKiBzO1xuICAgIGlmIChpc05hTih2WzBdKSB8fCBpc05hTih2WzJdKSB8fCBpc05hTih2WzJdKSkgcmV0dXJuIFswLCAwLCAwXTtcbiAgICByZXR1cm4gdjtcbiAgfSxcblxuICBzY2FsYXJQcm9kdWN0OiBmdW5jdGlvbiAodjEsIHYyKSB7XG4gICAgbGV0IGEgPSB2MVswXSAqIHYyWzBdICsgdjFbMV0gKiB2MlsxXSArIHYxWzJdICogdjJbMl07XG5cbiAgICByZXR1cm4gYTtcbiAgfSxcbiAgZG90KHYxLCB2Mikge1xuICAgIHJldHVybiB2MVswXSAqIHYyWzBdICsgdjFbMV0gKiB2MlsxXSArIHYxWzJdICogdjJbMl07XG4gIH0sXG4gIGlzTnVsbFZlY3RvcjogZnVuY3Rpb24gKHYpIHtcbiAgICByZXR1cm4gIXZbMF0gJiYgIXZbMV0gJiYgIXZbMl07XG4gIH0sXG4gIGdldFZlY3Rvckxlbmd0aCh2KSB7XG4gICAgcmV0dXJuIE1hdGguc3FydCh2WzBdICogdlswXSArIHZbMV0gKiB2WzFdICsgdlsyXSAqIHZbMl0pO1xuICB9LFxuICB0cmFuc2Zvcm1Qb2ludDogZnVuY3Rpb24gKG0sIHYsIGRzdCkge1xuICAgIGRzdCA9IGRzdCB8fCBuZXcgTWF0VHlwZSgzKTtcbiAgICB2YXIgdjAgPSB2WzBdO1xuICAgIHZhciB2MSA9IHZbMV07XG4gICAgdmFyIHYyID0gdlsyXTtcbiAgICB2YXIgZCA9XG4gICAgICB2MCAqIG1bMCAqIDQgKyAzXSArIHYxICogbVsxICogNCArIDNdICsgdjIgKiBtWzIgKiA0ICsgM10gKyBtWzMgKiA0ICsgM107XG5cbiAgICBkc3RbMF0gPVxuICAgICAgKHYwICogbVswICogNCArIDBdICtcbiAgICAgICAgdjEgKiBtWzEgKiA0ICsgMF0gK1xuICAgICAgICB2MiAqIG1bMiAqIDQgKyAwXSArXG4gICAgICAgIG1bMyAqIDQgKyAwXSkgL1xuICAgICAgZDtcbiAgICBkc3RbMV0gPVxuICAgICAgKHYwICogbVswICogNCArIDFdICtcbiAgICAgICAgdjEgKiBtWzEgKiA0ICsgMV0gK1xuICAgICAgICB2MiAqIG1bMiAqIDQgKyAxXSArXG4gICAgICAgIG1bMyAqIDQgKyAxXSkgL1xuICAgICAgZDtcbiAgICBkc3RbMl0gPVxuICAgICAgKHYwICogbVswICogNCArIDJdICtcbiAgICAgICAgdjEgKiBtWzEgKiA0ICsgMl0gK1xuICAgICAgICB2MiAqIG1bMiAqIDQgKyAyXSArXG4gICAgICAgIG1bMyAqIDQgKyAyXSkgL1xuICAgICAgZDtcblxuICAgIHJldHVybiBkc3Q7XG4gIH0sXG4gIG5vcm1hbGl6ZTogZnVuY3Rpb24gKHYsIGRzdCkge1xuICAgIGRzdCA9IGRzdCB8fCBuZXcgTWF0VHlwZSgzKTtcbiAgICB2YXIgbGVuZ3RoID0gTWF0aC5zcXJ0KHZbMF0gKiB2WzBdICsgdlsxXSAqIHZbMV0gKyB2WzJdICogdlsyXSk7XG4gICAgLy8gbWFrZSBzdXJlIHdlIGRvbid0IGRpdmlkZSBieSAwLlxuICAgIGlmIChsZW5ndGggPiAwLjAwMDAxKSB7XG4gICAgICBkc3RbMF0gPSB2WzBdIC8gbGVuZ3RoO1xuICAgICAgZHN0WzFdID0gdlsxXSAvIGxlbmd0aDtcbiAgICAgIGRzdFsyXSA9IHZbMl0gLyBsZW5ndGg7XG4gICAgfVxuICAgIHJldHVybiBkc3Q7XG4gIH0sXG4gIGlkZW50aXR5OiBmdW5jdGlvbiAoKSB7XG4gICAgZHN0ID0gbmV3IE1hdFR5cGUoMTYpO1xuICAgIGRzdFswXSA9IDE7XG4gICAgZHN0WzFdID0gMDtcbiAgICBkc3RbMl0gPSAwO1xuICAgIGRzdFszXSA9IDA7XG4gICAgZHN0WzRdID0gMDtcbiAgICBkc3RbNV0gPSAxO1xuICAgIGRzdFs2XSA9IDA7XG4gICAgZHN0WzddID0gMDtcbiAgICBkc3RbOF0gPSAwO1xuICAgIGRzdFs5XSA9IDA7XG4gICAgZHN0WzEwXSA9IDE7XG4gICAgZHN0WzExXSA9IDA7XG4gICAgZHN0WzEyXSA9IDA7XG4gICAgZHN0WzEzXSA9IDA7XG4gICAgZHN0WzE0XSA9IDA7XG4gICAgZHN0WzE1XSA9IDE7XG5cbiAgICByZXR1cm4gZHN0O1xuICB9LFxuICBtM1RvbTQ6IGZ1bmN0aW9uIChtKSB7XG4gICAgY29uc3QgZHN0ID0gbmV3IE1hdFR5cGUoMTYpO1xuICAgIGRzdFswXSA9IG1bMF07XG4gICAgZHN0WzFdID0gbVsxXTtcbiAgICBkc3RbMl0gPSBtWzJdO1xuICAgIGRzdFszXSA9IDA7XG4gICAgZHN0WzRdID0gbVszXTtcbiAgICBkc3RbNV0gPSBtWzRdO1xuICAgIGRzdFs2XSA9IG1bNV07XG4gICAgZHN0WzddID0gMDtcbiAgICBkc3RbOF0gPSBtWzZdO1xuICAgIGRzdFs5XSA9IG1bN107XG4gICAgZHN0WzEwXSA9IG1bOF07XG4gICAgZHN0WzExXSA9IDA7XG4gICAgZHN0WzEyXSA9IDA7XG4gICAgZHN0WzEzXSA9IDA7XG4gICAgZHN0WzE0XSA9IDA7XG4gICAgZHN0WzE1XSA9IDE7XG4gICAgcmV0dXJuIGRzdDtcbiAgfSxcbiAgbTRUb20zOiBmdW5jdGlvbiAobSkge1xuICAgIGNvbnN0IGRzdCA9IG5ldyBNYXRUeXBlKDkpO1xuICAgIGRzdFswXSA9IG1bMF07XG4gICAgZHN0WzFdID0gbVsxXTtcbiAgICBkc3RbMl0gPSBtWzJdO1xuICAgIGRzdFszXSA9IG1bNF07XG4gICAgZHN0WzRdID0gbVs1XTtcbiAgICBkc3RbNV0gPSBtWzZdO1xuICAgIGRzdFs2XSA9IG1bOF07XG4gICAgZHN0WzddID0gbVs5XTtcbiAgICBkc3RbOF0gPSBtWzEwXTtcbiAgICByZXR1cm4gZHN0O1xuICB9LFxuICB0b1N0cmluZyhtKSB7XG4gICAgcmV0dXJuIG0ucmVkdWNlKChhY2MsIGVsLCBpZHgpID0+XG4gICAgICBpZHggJSA0ID09PSAwID8gKGFjYyArPSBcIlxcblwiICsgZWwpIDogKGFjYyArPSBcIiBcIiArIGVsKVxuICAgICk7XG4gIH0sXG4gIHRyYW5zcG9zZTogZnVuY3Rpb24gKG0pIHtcbiAgICByZXR1cm4gW1xuICAgICAgbVswXSxcbiAgICAgIG1bNF0sXG4gICAgICBtWzhdLFxuICAgICAgbVsxMl0sXG4gICAgICBtWzFdLFxuICAgICAgbVs1XSxcbiAgICAgIG1bOV0sXG4gICAgICBtWzEzXSxcbiAgICAgIG1bMl0sXG4gICAgICBtWzZdLFxuICAgICAgbVsxMF0sXG4gICAgICBtWzE0XSxcbiAgICAgIG1bM10sXG4gICAgICBtWzddLFxuICAgICAgbVsxMV0sXG4gICAgICBtWzE1XSxcbiAgICBdO1xuICB9LFxuICBmcm9tUXVhdGVybmlvbjogKHEpID0+IHtcbiAgICBjb25zdCBhMTEgPSAxIC0gMiAqIChxWzFdICogcVsxXSArIHFbMl0gKiBxWzJdKTtcbiAgICBjb25zdCBhMTIgPSAyICogKHFbMF0gKiBxWzFdIC0gcVsyXSAqIHFbM10pO1xuICAgIGNvbnN0IGExMyA9IDIgKiAocVswXSAqIHFbMl0gKyBxWzFdICogcVszXSk7XG4gICAgY29uc3QgYTIxID0gMiAqIChxWzBdICogcVsxXSArIHFbMl0gKiBxWzNdKTtcbiAgICBjb25zdCBhMjIgPSAxIC0gMiAqIChxWzBdICogcVswXSArIHFbMl0gKiBxWzJdKTtcbiAgICBjb25zdCBhMjMgPSAyICogKHFbMV0gKiBxWzJdIC0gcVswXSAqIHFbM10pO1xuICAgIGNvbnN0IGEzMSA9IDIgKiAocVswXSAqIHFbMl0gLSBxWzFdICogcVszXSk7XG4gICAgY29uc3QgYTMyID0gMiAqIChxWzFdICogcVsyXSArIHFbMF0gKiBxWzNdKTtcbiAgICBjb25zdCBhMzMgPSAxIC0gMiAqIChxWzBdICogcVswXSArIHFbMV0gKiBxWzFdKTtcbiAgICByZXR1cm4gW2ExMSwgYTEyLCBhMTMsIDAsIGEyMSwgYTIyLCBhMjMsIDAsIGEzMSwgYTMyLCBhMzMsIDAsIDAsIDAsIDAsIDFdO1xuICB9LFxuICByb3RhdGlvbih4LCB5LCB6KSB7XG4gICAgcmV0dXJuIHRoaXMueFJvdGF0ZSh0aGlzLnlSb3RhdGUodGhpcy56Um90YXRpb24oeiksIHkpLCB4KTtcbiAgfSxcbiAgcm90YXRpb25Gcm9tTm9ybWFsKG4pIHtcbiAgICByZXR1cm4gdGhpcy5yb3RhdGlvbihNYXRoLmFjb3MoblsxXSksIE1hdGguYWNvcyhuWzJdKSwgTWF0aC5hY29zKG5bMF0pKTtcbiAgfSxcbiAgZGV0ZXJtaW5hdGUobSkge1xuICAgIHZhciBtMDAgPSBtWzAgKiA0ICsgMF07XG4gICAgdmFyIG0wMSA9IG1bMCAqIDQgKyAxXTtcbiAgICB2YXIgbTAyID0gbVswICogNCArIDJdO1xuICAgIHZhciBtMDMgPSBtWzAgKiA0ICsgM107XG4gICAgdmFyIG0xMCA9IG1bMSAqIDQgKyAwXTtcbiAgICB2YXIgbTExID0gbVsxICogNCArIDFdO1xuICAgIHZhciBtMTIgPSBtWzEgKiA0ICsgMl07XG4gICAgdmFyIG0xMyA9IG1bMSAqIDQgKyAzXTtcbiAgICB2YXIgbTIwID0gbVsyICogNCArIDBdO1xuICAgIHZhciBtMjEgPSBtWzIgKiA0ICsgMV07XG4gICAgdmFyIG0yMiA9IG1bMiAqIDQgKyAyXTtcbiAgICB2YXIgbTIzID0gbVsyICogNCArIDNdO1xuICAgIHZhciBtMzAgPSBtWzMgKiA0ICsgMF07XG4gICAgdmFyIG0zMSA9IG1bMyAqIDQgKyAxXTtcbiAgICB2YXIgbTMyID0gbVszICogNCArIDJdO1xuICAgIHZhciBtMzMgPSBtWzMgKiA0ICsgM107XG4gICAgdmFyIHRtcF8wICA9IG0yMiAqIG0zMztcbiAgICB2YXIgdG1wXzEgID0gbTMyICogbTIzO1xuICAgIHZhciB0bXBfMiAgPSBtMTIgKiBtMzM7XG4gICAgdmFyIHRtcF8zICA9IG0zMiAqIG0xMztcbiAgICB2YXIgdG1wXzQgID0gbTEyICogbTIzO1xuICAgIHZhciB0bXBfNSAgPSBtMjIgKiBtMTM7XG4gICAgdmFyIHRtcF82ICA9IG0wMiAqIG0zMztcbiAgICB2YXIgdG1wXzcgID0gbTMyICogbTAzO1xuICAgIHZhciB0bXBfOCAgPSBtMDIgKiBtMjM7XG4gICAgdmFyIHRtcF85ICA9IG0yMiAqIG0wMztcbiAgICB2YXIgdG1wXzEwID0gbTAyICogbTEzO1xuICAgIHZhciB0bXBfMTEgPSBtMTIgKiBtMDM7XG5cbiAgICB2YXIgdDAgPSAodG1wXzAgKiBtMTEgKyB0bXBfMyAqIG0yMSArIHRtcF80ICogbTMxKSAtXG4gICAgICAgICh0bXBfMSAqIG0xMSArIHRtcF8yICogbTIxICsgdG1wXzUgKiBtMzEpO1xuICAgIHZhciB0MSA9ICh0bXBfMSAqIG0wMSArIHRtcF82ICogbTIxICsgdG1wXzkgKiBtMzEpIC1cbiAgICAgICAgKHRtcF8wICogbTAxICsgdG1wXzcgKiBtMjEgKyB0bXBfOCAqIG0zMSk7XG4gICAgdmFyIHQyID0gKHRtcF8yICogbTAxICsgdG1wXzcgKiBtMTEgKyB0bXBfMTAgKiBtMzEpIC1cbiAgICAgICAgKHRtcF8zICogbTAxICsgdG1wXzYgKiBtMTEgKyB0bXBfMTEgKiBtMzEpO1xuICAgIHZhciB0MyA9ICh0bXBfNSAqIG0wMSArIHRtcF84ICogbTExICsgdG1wXzExICogbTIxKSAtXG4gICAgICAgICh0bXBfNCAqIG0wMSArIHRtcF85ICogbTExICsgdG1wXzEwICogbTIxKTtcblxuICAgIHJldHVybiAxLjAgLyAobTAwICogdDAgKyBtMTAgKiB0MSArIG0yMCAqIHQyICsgbTMwICogdDMpO1xuICB9LFxuICBcbiAgZGVjb21wb3NlKG1hdCkge1xuICAgIGxldCBzeCA9IG5vcm0obWF0LnNsaWNlKDAsIDMpKTtcbiAgICBjb25zdCBzeSA9IG5vcm0obWF0LnNsaWNlKDQsIDcpKTtcbiAgICBjb25zdCBzeiA9IG5vcm0obWF0LnNsaWNlKDgsIDExKSk7XG5cbiAgICBcbiAgICBjb25zdCBkZXQgPSB0aGlzLmRldGVybWluYXRlKG1hdCk7XG4gICAgaWYgKGRldCA8IDApIHtcbiAgICAgIHN4ID0gLXN4O1xuICAgIH1cbiAgICBjb25zdCB0cmFuc2xhdGlvbiA9IFtdXG4gICAgY29uc3Qgc2NhbGUgPSBbXVxuICAgIGNvbnN0IFJtYXRyaXggPSBbLi4ubWF0XVxuICAgIHRyYW5zbGF0aW9uWzBdID0gbWF0WzEyXTtcbiAgICB0cmFuc2xhdGlvblsxXSA9IG1hdFsxM107XG4gICAgdHJhbnNsYXRpb25bMl0gPSBtYXRbMTRdO1xuXG5cbiAgICBcblxuICAgIGNvbnN0IGludlNYID0gMSAvIHN4O1xuICAgIGNvbnN0IGludlNZID0gMSAvIHN5O1xuICAgIGNvbnN0IGludlNaID0gMSAvIHN6O1xuXG4gICAgUm1hdHJpeFswXSAqPSBpbnZTWDtcbiAgICBSbWF0cml4WzFdICo9IGludlNYO1xuICAgIFJtYXRyaXhbMl0gKj0gaW52U1g7XG5cbiAgICBSbWF0cml4WzRdICo9IGludlNZO1xuICAgIFJtYXRyaXhbNV0gKj0gaW52U1k7XG4gICAgUm1hdHJpeFs2XSAqPSBpbnZTWTtcblxuICAgIFJtYXRyaXhbOF0gKj0gaW52U1o7XG4gICAgUm1hdHJpeFs5XSAqPSBpbnZTWjtcbiAgICBSbWF0cml4WzEwXSAqPSBpbnZTWjtcblxuXG5cbiAgICBzY2FsZVswXSA9IHN4O1xuICAgIHNjYWxlWzFdID0gc3k7XG4gICAgc2NhbGVbMl0gPSBzejtcbiAgICByZXR1cm4ge3RyYW5zbGF0aW9uLCBSbWF0cml4LCBzY2FsZSB9XG4gIH1cbn07XG5cblxubW9kdWxlLmV4cG9ydHMgPSBtNDtcbiIsImNvbnN0IGRvdCA9IChhLCBiKSA9PiBhWzBdICogYlswXSArIGFbMV0gKiBiWzFdICsgYVsyXSAqIGJbMl07XG5jb25zdCBjcm9zcyA9IChhLCBiKSA9PiBbXG4gIGFbMV0gKiBiWzJdIC0gYlsxXSAqIGFbMl0sXG4gIGFbMl0gKiBiWzBdIC0gYlsyXSAqIGFbMF0sXG4gIGFbMF0gKiBiWzFdIC0gYlswXSAqIGFbMV0sXG5dO1xuXG5jb25zdCBzY2FsZSA9IChhLCBzY2FsYXIpID0+IFthWzBdICogc2NhbGFyLCBhWzFdICogc2NhbGFyLCBhWzJdICogc2NhbGFyXTtcbmNvbnN0IHN1bSA9IChhLCBiKSA9PiBbYVswXSArIGJbMF0sIGFbMV0gKyBiWzFdLCBhWzJdICsgYlsyXV07XG5jb25zdCBkaWZmID0gKGEsIGIpID0+IFthWzBdIC0gYlswXSwgYVsxXSAtIGJbMV0sIGFbMl0gLSBiWzJdXTtcbmNvbnN0IG5vcm0gPSAoYSkgPT4gTWF0aC5zcXJ0KGFbMF0gKiBhWzBdICsgYVsxXSAqIGFbMV0gKyBhWzJdICogYVsyXSk7XG5jb25zdCBub3JtU3EgPSAoYSkgPT4gYVswXSAqIGFbMF0gKyBhWzFdICogYVsxXSArIGFbMl0gKiBhWzJdO1xuY29uc3Qgbm9ybWFsaXplID0gKGEpID0+IHtcbiAgY29uc3QgbGVuZ3RoID0gbm9ybShhKTtcbiAgaWYgKGxlbmd0aCA9PT0gMCkgcmV0dXJuIGE7XG4gIHJldHVybiBbYVswXSAvIGxlbmd0aCwgYVsxXSAvIGxlbmd0aCwgYVsyXSAvIGxlbmd0aF07XG59O1xuY29uc3QgaXNOdWxsID0gKGEpID0+IGFbMF0gKiBhWzBdICsgYVsxXSAqIGFbMV0gKyBhWzJdICogYVsyXSA9PT0gMDtcblxuY29uc3QgaXNFcXVhbCA9IChhLCBiKSA9PiBhWzBdID09IGJbMF0gJiYgYVsxXSA9PSBiWzFdICYmIGFbMl0gPT0gYlsyXTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHN1bSxcbiAgZGlmZixcbiAgc2NhbGUsXG4gIGRvdCxcbiAgY3Jvc3MsXG4gIG5vcm0sXG4gIG5vcm1TcSxcbiAgbm9ybWFsaXplLFxuICBpc0VxdWFsLFxuICBpc051bGwsXG59O1xuIiwiaW1wb3J0IHsgSm9pbnQsIEpvaW50UG9zaXRpb25Db25zdHJhaW50IH0gZnJvbSBcIi4uL3NyYy9waHlzaWNzL2NvbnN0cmFpbnRzXCI7XHJcbmltcG9ydCB7IFJpZ2lkQm9keSB9IGZyb20gXCIuLi9zcmMvcGh5c2ljcy9SaWdpZEJvZHlcIjtcclxuaW1wb3J0IHt2ZWMzfSBmcm9tICdtYXRoJ1xyXG5pbXBvcnQgeyBCb3gsIEN5bGluZGVyLCBTcGhlcmV9IGZyb20gXCIuLi9zcmMvcGh5c2ljcy9jb2xsaWRlclwiO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSYWdkb2xse1xyXG4gICAgY29uc3RydWN0b3IocG9zID0gWzAsMCwwXSl7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgYm9keSA9IG5ldyBSaWdpZEJvZHkobmV3IEJveCgxLCAyLCAwLjUpKTtcclxuICAgICAgICBjb25zdCBsZWZ0SGFuZCA9IG5ldyBSaWdpZEJvZHkobmV3IEN5bGluZGVyKDAuNCwgMiwgMC41KSk7XHJcbiAgICAgICAgY29uc3QgcmlnaHRIYW5kID0gbmV3IFJpZ2lkQm9keShuZXcgQ3lsaW5kZXIoMC40LCAyLCAwLjUpKTtcclxuICAgICAgICBjb25zdCBsZWZ0TGVnID0gbmV3IFJpZ2lkQm9keShuZXcgQ3lsaW5kZXIoMC40LCAyLCAwLjUpKTtcclxuICAgICAgICBjb25zdCByaWdodExlZyA9IG5ldyBSaWdpZEJvZHkobmV3IEN5bGluZGVyKDAuNCwgMiwgMC41KSk7XHJcbiAgICAgICAgY29uc3QgaGVhZCA9IG5ldyBSaWdpZEJvZHkobmV3IFNwaGVyZSgxLCAxLCAxKSk7XHJcbiAgICAgICAgY29uc3QgY29uc3RyYWludHMgPSBbXHJcbiAgICAgICAgICBuZXcgSm9pbnQoYm9keSwgaGVhZCwgWzAsIDEuNSwgMF0sIFswLCAtMSwgMF0sIDApLFxyXG4gICAgICAgICAgbmV3IEpvaW50KGJvZHksIGxlZnRIYW5kLCBbMSwgMSwgMF0sIFswLCAxLCAwXSwgMCksXHJcbiAgICAgICAgICBuZXcgSm9pbnQoYm9keSwgcmlnaHRIYW5kLCBbLTEsIDEsIDBdLCBbMCwgMSwgMF0sIDApLFxyXG4gICAgICAgICAgbmV3IEpvaW50KGJvZHksIHJpZ2h0TGVnLCBbLTAuNSwgLTEuMiwgMF0sIFswLCAxLjIsIDBdLCAwKSxcclxuICAgICAgICAgIG5ldyBKb2ludChib2R5LCBsZWZ0TGVnLCBbMC41LCAtMS4yLCAwXSwgWzAsIDEuMiwgMF0sIDApLFxyXG4gICAgICAgIF07XHJcbiAgICAgICAgY29uc3QgcG9zaXRpb25Db25zdHJhaW50cyA9IFtcclxuICAgICAgICAgIG5ldyBKb2ludFBvc2l0aW9uQ29uc3RyYWludChib2R5LCBoZWFkLCBbMCwgMS41LCAwXSwgWzAsIC0xLCAwXSwgMC4yKSxcclxuICAgICAgICAgIG5ldyBKb2ludFBvc2l0aW9uQ29uc3RyYWludChib2R5LCBsZWZ0SGFuZCwgWzEsIDEsIDBdLCBbMCwgMSwgMF0sIDAuMiksXHJcbiAgICAgICAgICBuZXcgSm9pbnRQb3NpdGlvbkNvbnN0cmFpbnQoYm9keSwgcmlnaHRIYW5kLCBbLTEsIDEsIDBdLCBbMCwgMSwgMF0sIDAuMiksXHJcbiAgICAgICAgICBuZXcgSm9pbnRQb3NpdGlvbkNvbnN0cmFpbnQoXHJcbiAgICAgICAgICAgIGJvZHksXHJcbiAgICAgICAgICAgIHJpZ2h0TGVnLFxyXG4gICAgICAgICAgICBbLTAuNSwgLTEuMiwgMF0sXHJcbiAgICAgICAgICAgIFswLCAxLjIsIDBdLFxyXG4gICAgICAgICAgICAwLjJcclxuICAgICAgICAgICksXHJcbiAgICAgICAgICBuZXcgSm9pbnRQb3NpdGlvbkNvbnN0cmFpbnQoXHJcbiAgICAgICAgICAgIGJvZHksXHJcbiAgICAgICAgICAgIGxlZnRMZWcsXHJcbiAgICAgICAgICAgIFswLjUsIC0xLjIsIDBdLFxyXG4gICAgICAgICAgICBbMCwgMS4yLCAwXSxcclxuICAgICAgICAgICAgMC4yXHJcbiAgICAgICAgICApLFxyXG4gICAgICAgIF07XHJcbiAgICAgICAgLy9wb3NpdGlvbkNvbnN0cmFpbnRzLmZvckVhY2goYyA9PmMudHJlc2hvbGQgPSAwLjEpXHJcbiAgICAgICAgYm9keS50cmFuc2xhdGUocG9zKTtcclxuICAgICAgXHJcbiAgICAgICAgaGVhZC50cmFuc2xhdGUodmVjMy5zdW0ocG9zLCBbMCwgMiwgMF0pKTtcclxuICAgICAgICBsZWZ0SGFuZC50cmFuc2xhdGUodmVjMy5zdW0ocG9zLCBbLTMsIDIsIDBdKSk7XHJcbiAgICAgICAgcmlnaHRIYW5kLnRyYW5zbGF0ZSh2ZWMzLnN1bShwb3MsIFszLCAyLCAwXSkpO1xyXG4gICAgICAgIHJpZ2h0TGVnLnRyYW5zbGF0ZSh2ZWMzLnN1bShwb3MsIFsyLCAtMi41LCAwXSkpO1xyXG4gICAgICAgIGxlZnRMZWcudHJhbnNsYXRlKHZlYzMuc3VtKHBvcywgWy0yLCAtMi41LCAwXSkpO1xyXG4gICAgICAgIHBvc2l0aW9uQ29uc3RyYWludHMuZm9yRWFjaCgoYykgPT4gKGMudHJlc2hvbGQgPSAwLjA1KSk7XHJcbiAgICAgICAgdGhpcy5wYXJ0cyA9IHtib2R5LCBsZWZ0SGFuZCwgcmlnaHRIYW5kLCByaWdodExlZywgbGVmdExlZywgaGVhZH1cclxuICAgICAgICB0aGlzLmNvbnN0cmFpbnRzID0gY29uc3RyYWludHNcclxuICAgICAgICB0aGlzLnBvc2l0aW9uQ29uc3RyYWludHMgPSBwb3NpdGlvbkNvbnN0cmFpbnRzXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBQcm9ncmFtSW5mbyB9IGZyb20gXCJncmFwaGljc1wiO1xyXG5jb25zdCBnbHNsID0geD0+eFxyXG5cclxuXHJcbmNvbnN0IHZlcnQgPSBnbHNsYCN2ZXJzaW9uIDMwMCBlc1xyXG4gXHJcbmxheW91dChsb2NhdGlvbiA9IDApIGluIHZlYzQgYV9wb3NpdGlvbjtcclxubGF5b3V0KGxvY2F0aW9uID0gMSkgaW4gdmVjMyBhX25vcm1hbDtcclxuXHJcblxyXG5cclxudW5pZm9ybSBtYXQ0IHdvcmxkTWF0cml4O1xyXG51bmlmb3JtIG1hdDQgd29ybGRWaWV3UHJvamVjdGlvbjtcclxudW5pZm9ybSB2ZWMzIHVfbGlnaHRXb3JsZFBvc2l0aW9uO1xyXG51bmlmb3JtIHZlYzMgdV92aWV3V29ybGRQb3NpdGlvbjtcclxudW5pZm9ybSBtYXQ0IHdvcmxkSW52ZXJzZVRyYW5zcG9zZTtcclxub3V0IHZlYzMgdl9ub3JtYWw7XHJcbm91dCB2ZWMzIHZfc3VyZmFjZVRvTGlnaHQ7XHJcbm91dCB2ZWMzIHZfc3VyZmFjZVRvVmlldztcclxuXHJcbnZvaWQgbWFpbigpIHtcclxuXHJcbiAgICB2ZWMzIHN1cmZhY2VXb3JsZFBvc2l0aW9uID0gKHdvcmxkTWF0cml4ICogYV9wb3NpdGlvbikueHl6O1xyXG4gICAgdl9zdXJmYWNlVG9MaWdodCA9IHVfbGlnaHRXb3JsZFBvc2l0aW9uIC0gc3VyZmFjZVdvcmxkUG9zaXRpb247XHJcbiAgICB2X3N1cmZhY2VUb1ZpZXcgPSB1X3ZpZXdXb3JsZFBvc2l0aW9uIC0gc3VyZmFjZVdvcmxkUG9zaXRpb247XHJcbiAgICB2ZWM0IHBvcyA9IHdvcmxkVmlld1Byb2plY3Rpb24gKiBhX3Bvc2l0aW9uO1xyXG4gICAgZ2xfUG9zaXRpb24gPSBwb3M7XHJcblxyXG4gICBcclxuICAgIHZfbm9ybWFsID0gbWF0Myh3b3JsZEludmVyc2VUcmFuc3Bvc2UpICogYV9ub3JtYWw7XHJcbiAgIFxyXG4gICAgICBcclxufWBcclxuY29uc3QgZnJhZyA9IGdsc2xgI3ZlcnNpb24gMzAwIGVzXHJcbnByZWNpc2lvbiBoaWdocCBmbG9hdDtcclxuIFxyXG5cclxuXHJcbmluIHZlYzMgdl9ub3JtYWw7XHJcbmluIHZlYzMgdl9zdXJmYWNlVG9WaWV3O1xyXG5pbiB2ZWMzIHZfc3VyZmFjZVRvTGlnaHQ7XHJcblxyXG5cclxuLy91bmlmb3JtIHNhbXBsZXIyRCB1X3RleHR1cmUxO1xyXG51bmlmb3JtIGZsb2F0IHVfc2hpbmluZXNzO1xyXG51bmlmb3JtIHZlYzQgdV9jb2xvcjtcclxudW5pZm9ybSB2ZWM0IHVfYW1iaWVudExpZ2h0O1xyXG5vdXQgdmVjNCBvdXRDb2xvcjtcclxuXHJcblxyXG52b2lkIG1haW4oKSB7XHJcbiAgXHJcbiAgdmVjMyBzdXJmYWNlVG9MaWdodERpcmVjdGlvbiA9IG5vcm1hbGl6ZSh2X3N1cmZhY2VUb0xpZ2h0KTtcclxuICB2ZWMzIHN1cmZhY2VUb1ZpZXdEaXJlY3Rpb24gPSBub3JtYWxpemUodl9zdXJmYWNlVG9WaWV3KTtcclxuICB2ZWMzIGhhbGZWZWN0b3IgPSBub3JtYWxpemUoc3VyZmFjZVRvTGlnaHREaXJlY3Rpb24gLSBzdXJmYWNlVG9WaWV3RGlyZWN0aW9uKTtcclxuXHJcbiAgdmVjMyBub3JtYWwgPSBub3JtYWxpemUodl9ub3JtYWwpO1xyXG4gIGZsb2F0IGxpZ2h0ID0gZG90KHZfbm9ybWFsLCBzdXJmYWNlVG9MaWdodERpcmVjdGlvbik7XHJcbiAgZmxvYXQgc3BlY3VsYXIgPSAwLjA7XHJcbiAgaWYgKGxpZ2h0ID4gMC4wKSB7XHJcbiAgICBzcGVjdWxhciA9IHBvdyhkb3Qobm9ybWFsLCBoYWxmVmVjdG9yKSwgdV9zaGluaW5lc3MpO1xyXG4gIH1cclxuIFxyXG4gIG91dENvbG9yID0gIHVfY29sb3I7XHJcbiAgb3V0Q29sb3IucmdiICo9IGxpZ2h0O1xyXG4gIFxyXG4gIG91dENvbG9yICs9IHVfYW1iaWVudExpZ2h0ICogMC4xO1xyXG4gIFxyXG59XHJcbmBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBQcm9ncmFtSW5mbyh2ZXJ0LCBmcmFnKSIsImltcG9ydCB7bTMsIHZlYzMsIG00fSBmcm9tICdtYXRoJ1xyXG5jb25zdCBLRVlTID0ge1xyXG4gICAgJ3cnIDogJ21vdmVGb3J3YXJkJyxcclxuICAgICdzJyA6ICdtb3ZlQmFja3dhcmQnLFxyXG4gICAgJ2EnIDogJ21vdmVMZWZ0JyxcclxuICAgICdkJyA6ICdtb3ZlUmlnaHQnLFxyXG4gICAgJyAnIDogJ21vdmVVcCdcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udHJvbGxhYmxle1xyXG4gICAgY29uc3RydWN0b3IocmlnaWRCb2R5KXtcclxuXHJcbiAgICAgICAgdGhpcy5yaWdpZEJvZHkgPSByaWdpZEJvZHlcclxuICAgICAgICB0aGlzLmtleUlucHV0ID0gbnVsbFxyXG4gICAgICAgIHRoaXMubW91c2VJbnB1dCA9IG51bGxcclxuICAgICAgICB0aGlzLnJvdGF0aW9uWCA9IDBcclxuICAgICAgICB0aGlzLnJvdGF0aW9uWSA9IDBcclxuICAgICAgICB0aGlzLmRlbHRhUlkgPSAwXHJcbiAgICAgICAgdGhpcy5jYW1Qb3MgPSBbMCwwLDEwXVxyXG4gICAgICAgIHRoaXMuY2FtUm90ID0gbTMuaWRlbnRpdHkoKVxyXG4gICAgICAgIHRoaXMuanVtcFJlYWR5ID0gdHJ1ZVxyXG4gICAgfVxyXG4gICAgbGlzdGVuTW91c2UobW91c2VJbnB1dCl7XHJcbiAgICAgICAgdGhpcy5tb3VzZUlucHV0ID0gbW91c2VJbnB1dFxyXG4gICAgICAgIG1vdXNlSW5wdXQub24oJ21vdmUnLCAoW2RlbHRhWCwgZGVsdGFZXSk9PntcclxuICAgICAgICAgICAgdGhpcy5yb3RhdGlvblkgLT0gZGVsdGFYICogMC4wMDU7XHJcbiAgICAgICAgICAgIHRoaXMucm90YXRpb25YIC09IGRlbHRhWSAqIDAuMDA1O1xyXG4gICAgICAgICAgICB0aGlzLnJvdGF0aW9uWCA9IE1hdGgubWF4KC1NYXRoLlBJLzIsIE1hdGgubWluKE1hdGguUEkvMiwgdGhpcy5yb3RhdGlvblgpKVxyXG4gICAgICAgICAgICB0aGlzLmRlbHRhUlkgPSBkZWx0YVggKiAwLjAwNTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGxpc3RlbktleWJvYXJkKGtleUlucHV0KXtcclxuICAgICAgICB0aGlzLmtleUlucHV0ID0ga2V5SW5wdXRcclxuICAgIH1cclxuICAgIHRpY2soKXtcclxuXHJcbiAgICAgICAgZm9yKGNvbnN0IGtleSBvZiB0aGlzLmtleUlucHV0LmtleXMpe1xyXG4gICAgICAgICAgICBjb25zdCBhY3Rpb25OYW1lID0gS0VZU1trZXldXHJcbiAgICAgICAgICAgIGlmKGFjdGlvbk5hbWUpe1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYWN0aW9uID0gdGhpc1thY3Rpb25OYW1lXS5iaW5kKHRoaXMpXHJcbiAgICAgICAgICAgICAgICBhY3Rpb24oKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBtID0gbTMueVJvdGF0aW9uKHRoaXMucm90YXRpb25ZKVxyXG4gICAgICAgIHRoaXMucmlnaWRCb2R5LnJvdGF0ZShbMCwgLXRoaXMuZGVsdGFSWSwwXSlcclxuICAgICAgICB0aGlzLmRlbHRhUlkgPSAwXHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgcG9zID0gWy4uLnRoaXMucmlnaWRCb2R5LmNvbGxpZGVyLnBvc11cclxuICAgICAgICBsZXQgX20gPSBtNC50cmFuc2xhdGlvbihwb3NbMF0sIHBvc1sxXSszLCBwb3NbMl0pXHJcbiAgICAgICAgX20gPSBtNC5tdWx0aXBseShfbSwgbTQubTNUb200KHRoaXMucmlnaWRCb2R5LmNvbGxpZGVyLlJtYXRyaXgpKVxyXG4gICAgICAgIF9tID0gbTQueFJvdGF0ZShfbSwgdGhpcy5yb3RhdGlvblgpXHJcbiAgICAgICAgX20gPSBtNC50cmFuc2xhdGUoX20sIC4uLnRoaXMuY2FtUG9zKVxyXG4gICAgICAgIHRoaXMuY2FtTWF0cml4ID0gX21cclxuICAgICBcclxuICAgIH1cclxuICAgIGdldEFic29sdXRlQ2FtUG9zKCl7XHJcbiAgICAgICAgcmV0dXJuIHZlYzMuc3VtKHRoaXMucmlnaWRCb2R5LmNvbGxpZGVyLnBvcywgdGhpcy5jYW1Qb3MpXHJcbiAgICB9XHJcbiAgICBtb3ZlKGRpcil7XHJcbiAgICAgICAgY29uc3QgbSA9IG00LnlSb3RhdGlvbih0aGlzLnJvdGF0aW9uWClcclxuICAgICAgICB0aGlzLnJpZ2lkQm9keS5hcHBseUltcHVsc2UoZGlyLCBbMCwwLDBdKVxyXG4gICAgfVxyXG4gICAgbW92ZUZvcndhcmQoKXtcclxuICAgICAgICB0aGlzLm1vdmUoWzAsMCwgLTFdKVxyXG4gICAgfVxyXG4gICAgbW92ZUJhY2t3YXJkKCl7XHJcbiAgICAgICAgdGhpcy5tb3ZlKFswLDAsIDFdKVxyXG4gICAgfVxyXG4gICAgbW92ZUxlZnQoKXtcclxuICAgICAgICB0aGlzLm1vdmUoWy0xLDAsIDBdKVxyXG4gICAgfVxyXG4gICAgbW92ZVJpZ2h0KCl7XHJcbiAgICAgICAgdGhpcy5tb3ZlKFsxLDAsIDBdKVxyXG4gICAgfVxyXG4gICAgbW92ZVVwKCl7XHJcbiAgICAgICAgaWYodGhpcy5qdW1wUmVhZHkpe1xyXG4gICAgICAgICAgICB0aGlzLm1vdmUoWzAsMTAsMF0pXHJcbiAgICAgICAgICAgIHRoaXMuanVtcFJlYWR5ID0gZmFsc2VcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+dGhpcy5qdW1wUmVhZHkgPSB0cnVlLCAxMDAwKVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxufVxyXG5jbGFzcyBOb2NsaXB7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHRoaXMua2V5SW5wdXQgPSBudWxsXHJcbiAgICAgICAgdGhpcy5tb3VzZUlucHV0ID0gbnVsbFxyXG4gICAgICAgIHRoaXMucm90YXRpb25YID0gMFxyXG4gICAgICAgIHRoaXMucm90YXRpb25ZID0gMFxyXG4gICAgICAgIHRoaXMuZGVsdGFSWSA9IDBcclxuICAgICAgICB0aGlzLmNhbVBvcyA9IFswLDAsMTBdXHJcbiAgICAgICAgdGhpcy5jYW1Sb3QgPSBtMy5pZGVudGl0eSgpXHJcbiAgICB9XHJcbiAgICBsaXN0ZW5Nb3VzZShtb3VzZUlucHV0KXtcclxuICAgICAgICB0aGlzLm1vdXNlSW5wdXQgPSBtb3VzZUlucHV0XHJcbiAgICAgICAgbW91c2VJbnB1dC5vbignbW92ZScsIChbZGVsdGFYLCBkZWx0YVldKT0+e1xyXG4gICAgICAgICAgICB0aGlzLnJvdGF0aW9uWSAtPSBkZWx0YVggKiAwLjAwNTtcclxuICAgICAgICAgICAgdGhpcy5yb3RhdGlvblggLT0gZGVsdGFZICogMC4wMDU7XHJcbiAgICAgICAgICAgIHRoaXMucm90YXRpb25YID0gTWF0aC5tYXgoLU1hdGguUEkvMiwgTWF0aC5taW4oTWF0aC5QSS8yLCB0aGlzLnJvdGF0aW9uWCkpXHJcbiAgICAgICAgICAgIHRoaXMuZGVsdGFSWSA9IGRlbHRhWCAqIDAuMDA1O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgbGlzdGVuS2V5Ym9hcmQoa2V5SW5wdXQpe1xyXG4gICAgICAgIHRoaXMua2V5SW5wdXQgPSBrZXlJbnB1dFxyXG4gICAgfVxyXG4gICAgdGljaygpe1xyXG5cclxuICAgICAgICBmb3IoY29uc3Qga2V5IG9mIHRoaXMua2V5SW5wdXQua2V5cyl7XHJcbiAgICAgICAgICAgIGNvbnN0IGFjdGlvbk5hbWUgPSBLRVlTW2tleV1cclxuICAgICAgICAgICAgaWYoYWN0aW9uTmFtZSl7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhY3Rpb24gPSB0aGlzW2FjdGlvbk5hbWVdLmJpbmQodGhpcylcclxuICAgICAgICAgICAgICAgIGFjdGlvbigpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuY2FtTWF0cml4ID0gbTQudHJhbnNsYXRpb24oLi4udGhpcy5jYW1Qb3MpXHJcbiAgICAgICAgdGhpcy5jYW1NYXRyaXggPSBtNC54Um90YXRlKG00LnlSb3RhdGUodGhpcy5jYW1NYXRyaXgsIHRoaXMucm90YXRpb25ZKSwgdGhpcy5yb3RhdGlvblgpXHJcbiAgICAgXHJcbiAgICB9XHJcbiAgICBtb3ZlKGRpcil7XHJcbiAgICAgICAgY29uc3QgbSA9IG00Lm00VG9tMyh0aGlzLmNhbU1hdHJpeClcclxuICAgICAgICB0aGlzLmNhbVBvcyA9IHZlYzMuc3VtKHRoaXMuY2FtUG9zLCBtMy50cmFuc2Zvcm1Qb2ludChtLCBkaXIpKVxyXG4gICAgfVxyXG4gICAgbW92ZUZvcndhcmQoKXtcclxuICAgICAgICB0aGlzLm1vdmUoWzAsMCwgLTFdKVxyXG4gICAgfVxyXG4gICAgbW92ZUJhY2t3YXJkKCl7XHJcbiAgICAgICAgdGhpcy5tb3ZlKFswLDAsIDFdKVxyXG4gICAgfVxyXG4gICAgbW92ZUxlZnQoKXtcclxuICAgICAgICB0aGlzLm1vdmUoWy0xLDAsIDBdKVxyXG4gICAgfVxyXG4gICAgbW92ZVJpZ2h0KCl7XHJcbiAgICAgICAgdGhpcy5tb3ZlKFsxLDAsIDBdKVxyXG4gICAgfVxyXG4gICAgbW92ZVVwKCl7XHJcbiAgICAgICAgdGhpcy5tb3ZlKFswLDEsIDBdKVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCB7Tm9jbGlwLCBDb250cm9sbGFibGV9IiwiaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSBcIi4uL3BoeXNpY3MvZXZlbnRFbWl0dGVyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBLZXlJbnB1dCBleHRlbmRzIEV2ZW50RW1pdHRlciB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpXHJcbiAgICB0aGlzLmtleXMgPSBuZXcgU2V0KCk7XHJcbiAgfVxyXG4gIGxvZ0Rvd24oeyBrZXkgfSkge1xyXG4gICAgdGhpcy5rZXlzLmFkZChrZXkpO1xyXG4gICAgdGhpcy5lbWl0KFwia2V5ZG93blwiLCB7IGtleSB9KTtcclxuICB9XHJcbiAgbG9nVXAoeyBrZXkgfSkge1xyXG4gICAgdGhpcy5rZXlzLmRlbGV0ZShrZXkpO1xyXG4gICAgdGhpcy5lbWl0KFwia2V5dXBcIiwgeyBrZXkgfSk7XHJcbiAgfVxyXG4gIGxpc3RlbigpIHtcclxuICAgIGNvbnN0IGxvZ0Rvd24gPSB0aGlzLmxvZ0Rvd24uYmluZCh0aGlzKTtcclxuICAgIGNvbnN0IGxvZ1VwID0gdGhpcy5sb2dVcC5iaW5kKHRoaXMpO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgbG9nRG93bik7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgbG9nVXApO1xyXG4gICAgdGhpcy51bnN1YnNpY3JpYmUgPSAoKSA9PiB7XHJcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGxvZ0Rvd24pO1xyXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgbG9nVXApO1xyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSBcIi4uL3BoeXNpY3MvZXZlbnRFbWl0dGVyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb3VzZUlucHV0IGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLmxhc3RYID0gMDtcclxuICAgIHRoaXMubGFzdFkgPSAwO1xyXG4gICAgdGhpcy5lbmFibGUgPSBmYWxzZTtcclxuICAgIHRoaXMubW92ZXMgPSBbXVxyXG4gIH1cclxuICBsb2dNb3ZlKHsgb2Zmc2V0WCwgb2Zmc2V0WSB9KSB7XHJcbiAgICBjb25zdCBkZWx0YVggPSBvZmZzZXRYIC0gdGhpcy5sYXN0WDtcclxuICAgIHRoaXMubGFzdFggPSBvZmZzZXRYO1xyXG4gICAgY29uc3QgZGVsdGFZID0gb2Zmc2V0WSAtIHRoaXMubGFzdFk7XHJcbiAgICB0aGlzLmxhc3RZID0gb2Zmc2V0WTtcclxuICAgIHRoaXMuZW1pdChcIm1vdmVcIiwgW2RlbHRhWCwgZGVsdGFZXSk7XHJcbiAgICB0aGlzLm1vdmVzLnB1c2goW2RlbHRhWCwgZGVsdGFZXSlcclxuICB9XHJcbiAgbGlzdGVuKCkge1xyXG4gICAgY29uc3QgbG9nTW92ZSA9IHRoaXMubG9nTW92ZS5iaW5kKHRoaXMpO1xyXG4gICAgY29uc3QgXyA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIGlmICh0aGlzLmVuYWJsZSkgbG9nTW92ZShlKTtcclxuICAgIH0uYmluZCh0aGlzKTtcclxuICAgIGNvbnN0IGRvd24gPSBmdW5jdGlvbiAoeyBvZmZzZXRYLCBvZmZzZXRZIH0pIHtcclxuICAgICAgdGhpcy5sYXN0WCA9IG9mZnNldFg7XHJcbiAgICAgIHRoaXMubGFzdFkgPSBvZmZzZXRZO1xyXG4gICAgICB0aGlzLmVuYWJsZSA9IHRydWU7XHJcbiAgICB9LmJpbmQodGhpcyk7XHJcbiAgICBjb25zdCB1cCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgdGhpcy5lbmFibGUgPSBmYWxzZTtcclxuICAgIH0uYmluZCh0aGlzKTtcclxuXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIF8pO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBkb3duKTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIHVwKTtcclxuICAgIHRoaXMudW5zdWJzY3JpYmUgPSAoKSA9PiB7XHJcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgXyk7XHJcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgZG93bik7XHJcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIHVwKTtcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gXCIuL2V2ZW50RW1pdHRlclwiO1xyXG5pbXBvcnQgeyBtMywgdmVjMyB9IGZyb20gXCJtYXRoXCI7XHJcbmNvbnN0IHsgY3Jvc3MsIHNjYWxlLCBub3JtLCBzdW0sIGRpZmYsIG5vcm1hbGl6ZSB9ID0gdmVjMztcclxuY29uc3QgcHJlYyA9IDAuMDAwMTtcclxuY29uc3Qgc3RvcFRyZXNob2xkID0gMC4wMDU7XHJcbmNsYXNzIFJpZ2lkQm9keSBleHRlbmRzIEV2ZW50RW1pdHRlciB7XHJcbiAgc3RhdGljIGNvbmZpZyA9IHtcclxuICAgIHRyZXNob2xkIDogMC4wMDUsXHJcbiAgICBwcmVjaXNpb24gOiAwLjAwMDFcclxuICB9XHJcbiAgc3RhdGljIHNldFRyZXNob2xkKHRyZXNob2xkKXtcclxuICAgIFJpZ2lkQm9keS5jb25maWcudHJlc2hvbGQgPSB0cmVzaG9sZFxyXG4gIH1cclxuICBjb25zdHJ1Y3Rvcihjb2xsaWRlcikge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuRE9GID0gWzEsIDEsIDEsIDEsIDEsIDFdO1xyXG4gICAgdGhpcy5zdGF0aWMgPSBmYWxzZTtcclxuICAgIHRoaXMuY29sbGlkZXIgPSBjb2xsaWRlcjtcclxuICAgIHRoaXMubWFzcyA9IDE7XHJcbiAgICB0aGlzLmludmVyc2VNYXNzID0gMSAvIHRoaXMubWFzcztcclxuICAgIHRoaXMudmVsb2NpdHkgPSBbMCwgMCwgMF07XHJcbiAgICB0aGlzLnBzZXVkb1ZlbG9jaXR5ID0gWzAsIDAsIDBdO1xyXG4gICAgdGhpcy5wc2V1ZG9Bbmd1bGFyViA9IFswLCAwLCAwXTtcclxuICAgIHRoaXMuYWNjZWxlcmF0aW9uID0gWzAsIDAsIDBdO1xyXG4gICAgdGhpcy5hbmd1bGFyViA9IFswLCAwLCAwXTtcclxuICAgIHRoaXMuaW52ZXJzZUluZXJ0aWEgPSBjb2xsaWRlci5nZXRJbnZlcnNlSW5lcnRpYVRlbnNvcih0aGlzLm1hc3MpO1xyXG4gICAgdGhpcy5pZCA9IDE7XHJcbiAgICB0aGlzLmZyaWN0aW9uID0gMC41O1xyXG4gICAgdGhpcy5CVmxpbms7XHJcbiAgICB0aGlzLm9sZFZlbG9jaXR5ID0gbnVsbDtcclxuICAgIHRoaXMuZ3JvdXAgPSBudWxsO1xyXG4gICAgdGhpcy5uZWVkVG9VcGRhdGUgPSBmYWxzZVxyXG4gIH1cclxuXHJcbiAgaW50ZWdyYXRlUks0KGR0KSB7XHJcbiAgICBjb25zdCB7IGFjY2VsZXJhdGlvbiwgdmVsb2NpdHksIGFuZ3VsYXJWIH0gPSB0aGlzO1xyXG4gICAgY29uc3Qge3RyZXNob2xkfSA9IFJpZ2lkQm9keS5jb25maWdcclxuICAgIGNvbnN0IF90cmFuc2xhdGlvbiA9IHNjYWxlKFxyXG4gICAgICBzdW0odmVsb2NpdHksIHNjYWxlKGFjY2VsZXJhdGlvbiwgKDIgLyAzKSAqIGR0KSksXHJcbiAgICAgIGR0XHJcbiAgICApO1xyXG4gICAgY29uc3QgX3JvdGF0aW9uID0gc2NhbGUoYW5ndWxhclYsIGR0KTtcclxuICAgIGNvbnN0IGRlbHRhVmVsb2NpdHkgPSBzY2FsZShhY2NlbGVyYXRpb24sIGR0KTtcclxuXHJcbiAgICBpZiAobm9ybShfdHJhbnNsYXRpb24pID4gdHJlc2hvbGQpIHRoaXMudHJhbnNsYXRlKF90cmFuc2xhdGlvbik7XHJcblxyXG4gICAgaWYgKG5vcm0oX3JvdGF0aW9uKSA+IHRyZXNob2xkKSB0aGlzLnJvdGF0ZShfcm90YXRpb24pO1xyXG4gICAgdGhpcy52ZWxvY2l0eSA9IHN1bSh2ZWxvY2l0eSwgZGVsdGFWZWxvY2l0eSk7XHJcbiAgfVxyXG4gIGludGVncmF0ZVBzZXVkb1ZlbG9jaXRpZXMoZHQpIHtcclxuICAgIGNvbnN0IHt0cmVzaG9sZH0gPSBSaWdpZEJvZHkuY29uZmlnXHJcbiAgICBjb25zdCB0cmFuc2xhdGlvbiA9IHNjYWxlKHRoaXMucHNldWRvVmVsb2NpdHksIGR0KTtcclxuXHJcbiAgICBjb25zdCByb3RhdGlvbiA9IHNjYWxlKHRoaXMucHNldWRvQW5ndWxhclYsIGR0KTtcclxuICAgIGlmIChub3JtKHRyYW5zbGF0aW9uKSA+IHRyZXNob2xkKSB0aGlzLnRyYW5zbGF0ZSh0cmFuc2xhdGlvbik7XHJcblxyXG4gICAgaWYgKG5vcm0ocm90YXRpb24pID4gdHJlc2hvbGQpIHRoaXMucm90YXRlKHJvdGF0aW9uKTtcclxuXHJcbiAgICB0aGlzLnBzZXVkb1ZlbG9jaXR5ID0gWzAsIDAsIDBdO1xyXG4gICAgdGhpcy5wc2V1ZG9Bbmd1bGFyViA9IFswLCAwLCAwXTtcclxuICB9XHJcbiAgYWRkUHNldWRvVmVsb2NpdHkodikge1xyXG4gICAgdGhpcy5wc2V1ZG9WZWxvY2l0eSA9IHN1bSh0aGlzLnBzZXVkb1ZlbG9jaXR5LCB2KTtcclxuICB9XHJcbiAgYWRkUHNldWRvQW5ndWxhclYodikge1xyXG4gICAgdGhpcy5wc2V1ZG9Bbmd1bGFyViA9IHN1bSh0aGlzLnBzZXVkb0FuZ3VsYXJWLCB2KTtcclxuICB9XHJcbiAgaW50ZWdyYXRlVmVsb2NpdGllcyhkdCkge1xyXG4gICAgY29uc3Qge3RyZXNob2xkfSA9IFJpZ2lkQm9keS5jb25maWdcclxuICAgIGNvbnN0IHRyYW5zbGF0aW9uID0gc2NhbGUodGhpcy52ZWxvY2l0eSwgZHQpO1xyXG4gICAgaWYgKG5vcm0odHJhbnNsYXRpb24pID4gdHJlc2hvbGQpIHRoaXMudHJhbnNsYXRlKHRyYW5zbGF0aW9uKTtcclxuICAgIGNvbnN0IHJvdGF0aW9uID0gc2NhbGUodGhpcy5hbmd1bGFyViwgZHQpO1xyXG4gICAgaWYgKG5vcm0ocm90YXRpb24pID4gdHJlc2hvbGQpIHRoaXMucm90YXRlKHJvdGF0aW9uKTtcclxuICB9XHJcbiAgaW50ZWdyYXRlRm9yY2VzKGR0KSB7XHJcbiAgICBsZXQgZGVsdGFTcGVlZCA9IHNjYWxlKHRoaXMuYWNjZWxlcmF0aW9uLCBkdCk7XHJcblxyXG4gICAgdGhpcy52ZWxvY2l0eSA9IHN1bSh0aGlzLnZlbG9jaXR5LCBkZWx0YVNwZWVkKTtcclxuICB9XHJcbiAgdXBkYXRlSW52ZXJzZUluZXJ0aWEoKSB7XHJcbiAgICB0aGlzLmludmVyc2VJbmVydGlhID0gdGhpcy5jb2xsaWRlci5nZXRJbnZlcnNlSW5lcnRpYVRlbnNvcih0aGlzLm1hc3MpO1xyXG4gIH1cclxuICBnZXRJdGVuc29yKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuY29sbGlkZXIuZ2V0SW52ZXJzZUluZXJ0aWFUZW5zb3IodGhpcy5tYXNzKTtcclxuICB9XHJcbiAgc2V0TWFzcyhtYXNzKSB7XHJcbiAgICB0aGlzLm1hc3MgPSBtYXNzO1xyXG4gICAgdGhpcy5pbnZlcnNlTWFzcyA9IDEgLyB0aGlzLm1hc3M7XHJcbiAgfVxyXG4gIHRyYW5zbGF0ZSh0cmFuc2xhdGlvbikge1xyXG4gICAgdGhpcy5jb2xsaWRlci50cmFuc2xhdGUodHJhbnNsYXRpb24pO1xyXG5cclxuICAgIHRoaXMubmVlZFRvVXBkYXRlID0gdHJ1ZVxyXG4gICAgdGhpcy5lbWl0KFwidXBkYXRlXCIpO1xyXG4gIH1cclxuICByb3RhdGUocm90YXRpb24pIHtcclxuICAgIHRoaXMuY29sbGlkZXIucm90YXRlKHJvdGF0aW9uKTtcclxuICAgIHRoaXMubmVlZFRvVXBkYXRlID0gdHJ1ZVxyXG4gICAgdGhpcy5lbWl0KFwidXBkYXRlXCIpO1xyXG4gIH1cclxuXHJcbiAgYXBwbHlJbXB1bHNlKGltcHVsc2UsIHBvaW50KSB7XHJcbiAgICBpZiAodGhpcy5zdGF0aWMpIHJldHVybjtcclxuICAgIHRoaXMudmVsb2NpdHkgPSBzdW0odGhpcy52ZWxvY2l0eSwgc2NhbGUoaW1wdWxzZSwgdGhpcy5pbnZlcnNlTWFzcykpO1xyXG4gICAgY29uc3QgYW5ndWxhckltcHVsc2UgPSBtMy50cmFuc2Zvcm1Qb2ludChcclxuICAgICAgdGhpcy5pbnZlcnNlSW5lcnRpYSxcclxuICAgICAgY3Jvc3MocG9pbnQsIGltcHVsc2UpXHJcbiAgICApO1xyXG4gICAgdGhpcy5hbmd1bGFyViA9IHN1bSh0aGlzLmFuZ3VsYXJWLCBhbmd1bGFySW1wdWxzZSk7XHJcbiAgfVxyXG4gIGFwcGx5UHNldWRvSW1wdWxzZShpbXB1bHNlLCBwb2ludCkge1xyXG4gICAgaWYgKHRoaXMuc3RhdGljKSByZXR1cm47XHJcbiAgICB0aGlzLnBzZXVkb1ZlbG9jaXR5ID0gc3VtKFxyXG4gICAgICB0aGlzLnBzZXVkb1ZlbG9jaXR5LFxyXG4gICAgICBzY2FsZShpbXB1bHNlLCB0aGlzLmludmVyc2VNYXNzKVxyXG4gICAgKTtcclxuICAgIGNvbnN0IGFuZ3VsYXJJbXB1bHNlID0gbTMudHJhbnNmb3JtUG9pbnQoXHJcbiAgICAgIHRoaXMuaW52ZXJzZUluZXJ0aWEsXHJcbiAgICAgIGNyb3NzKHBvaW50LCBpbXB1bHNlKVxyXG4gICAgKTtcclxuICAgIHRoaXMucHNldWRvQW5ndWxhclYgPSBzdW0odGhpcy5wc2V1ZG9Bbmd1bGFyViwgYW5ndWxhckltcHVsc2UpO1xyXG4gIH1cclxuICBhZGRWZWxvY2l0eSh2KSB7XHJcbiAgICB0aGlzLnZlbG9jaXR5ID0gc3VtKHRoaXMudmVsb2NpdHksIHYpO1xyXG4gIH1cclxuICBhZGRBbmd1bGFyVih2KSB7XHJcbiAgICB0aGlzLmFuZ3VsYXJWID0gc3VtKHRoaXMuYW5ndWxhclYsIHYpO1xyXG4gIH1cclxuICBhZGRBY2NlbGVyYXRpb24odikge1xyXG4gICAgdGhpcy5hY2NlbGVyYXRpb24gPSBzdW0odGhpcy5hY2NlbGVyYXRpb24sIHYpO1xyXG4gIH1cclxuICBhcHBseUFuZ3VsYXJJbXB1bHNlKHJhZGl1cywgYXhpcywgdmFsdWUpIHtcclxuICAgIGNvbnN0IGRpciA9IG5vcm1hbGl6ZShbXHJcbiAgICAgIGF4aXNbMV0gKyBheGlzWzJdLFxyXG4gICAgICBheGlzWzJdIC0gYXhpc1swXSxcclxuICAgICAgLWF4aXNbMF0gLSBheGlzWzFdLFxyXG4gICAgXSk7XHJcbiAgICBjb25zdCByYWQgPSB2ZWN0b3IuY3Jvc3MoZGlyLCBheGlzKTtcclxuICAgIGNvbnN0IGdsb2JhbERpciA9IHNjYWxlKGRpciwgdmFsdWUpO1xyXG4gICAgY29uc3QgZ2xvYmFsUmFkID0gc2NhbGUocmFkLCByYWRpdXMpO1xyXG5cclxuICAgIHRoaXMuYXBwbHlJbXB1bHNlKGdsb2JhbERpciwgZ2xvYmFsUmFkKTtcclxuICB9XHJcbiAgZ2V0RXhwYW5kZWRBQUJCKCkge1xyXG4gICAgY29uc3Qge3ByZWNpc2lvbn0gPSBSaWdpZEJvZHkuY29uZmlnXHJcbiAgICBjb25zdCBhYWJiID0gdGhpcy5jb2xsaWRlci5nZXRBQUJCKCk7XHJcbiAgICBjb25zdCB2ZWxvY2l0eSA9IHRoaXMudmVsb2NpdHk7XHJcbiAgICBjb25zdCB0ciA9IFtwcmVjaXNpb24sIHByZWNpc2lvbiwgcHJlY2lzaW9uXTtcclxuICAgIGFhYmIubWluID0gZGlmZihhYWJiLm1pbiwgdHIpO1xyXG4gICAgYWFiYi5tYXggPSBzdW0oYWFiYi5tYXgsIHRyKTtcclxuXHJcbiAgICAvKmlmKHZlbG9jaXR5WzBdID4gMTApIGFhYmIubWF4WzBdICs9IHZlbG9jaXR5WzBdXHJcbiAgICAgIGlmKHZlbG9jaXR5WzFdID4gMTApIGFhYmIubWF4WzFdICs9IHZlbG9jaXR5WzFdXHJcbiAgICAgIGlmKHZlbG9jaXR5WzJdID4gMTApIGFhYmIubWF4WzJdICs9IHZlbG9jaXR5WzJdXHJcbiAgICAgIGlmKHZlbG9jaXR5WzBdIDwgLTEwKSBhYWJiLm1pblswXSArPSB2ZWxvY2l0eVswXVxyXG4gICAgICBpZih2ZWxvY2l0eVsxXSA8IC0xMCkgYWFiYi5taW5bMV0gKz0gdmVsb2NpdHlbMV1cclxuICAgICAgaWYodmVsb2NpdHlbMl0gPCAtMTApIGFhYmIubWluWzJdICs9IHZlbG9jaXR5WzJdKi9cclxuICAgIHJldHVybiBhYWJiO1xyXG4gIH1cclxuICBnZXRBQUJCKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuY29sbGlkZXIuZ2V0QUFCQigpO1xyXG4gIH1cclxufVxyXG5cclxuY2xhc3MgUGxheWVyIGV4dGVuZHMgUmlnaWRCb2R5IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XHJcbiAgICB0aGlzLmZyaWN0aW9uID0gMC4zO1xyXG4gICAgdGhpcy5ET0YgPSBbMSwgMSwgMSwgMCwgMCwgMF07XHJcbiAgfVxyXG4gIGFwcGx5SW1wdWxzZShpbXB1bHNlLCBwb2ludCkge1xyXG4gICAgdGhpcy52ZWxvY2l0eSA9IHN1bSh0aGlzLnZlbG9jaXR5LCBzY2FsZShpbXB1bHNlLCB0aGlzLmludmVyc2VNYXNzKSk7XHJcbiAgfVxyXG4gIGFwcGx5UHNldWRvSW1wdWxzZShpbXB1bHNlKSB7XHJcbiAgICB0aGlzLnBzZXVkb1ZlbG9jaXR5ID0gc3VtKFxyXG4gICAgICB0aGlzLnBzZXVkb1ZlbG9jaXR5LFxyXG4gICAgICBzY2FsZShpbXB1bHNlLCB0aGlzLmludmVyc2VNYXNzKVxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuZXhwb3J0IHsgUmlnaWRCb2R5LCBQbGF5ZXIgfTtcclxuIiwiaW1wb3J0IFRyZWUgZnJvbSBcIi4vVHJlZVwiO1xyXG5pbXBvcnQgeyB2ZWMzIH0gZnJvbSBcIm1hdGhcIjtcclxuXHJcbmltcG9ydCB7IGdqayB9IGZyb20gXCIuL2dqa1wiO1xyXG5cclxuaW1wb3J0IE1hbmlmb2xkIGZyb20gXCIuL21hbmlmb2xkXCI7XHJcbmltcG9ydCBTeXN0ZW0gZnJvbSBcIi4vU3lzdGVtXCI7XHJcblxyXG5pbXBvcnQge1xyXG4gIENvbnN0cmFpbnQsXHJcbiAgQ29udGFjdENvbnN0cmFpbnQsXHJcbiAgRnJpY3Rpb25Db25zdHJhaW50LFxyXG4gIFBvc2l0aW9uQ29uc3RyYWludCxcclxufSBmcm9tIFwiLi9jb25zdHJhaW50c1wiO1xyXG5cclxuY29uc3Qgc2FtZUdyb3VwID0gKGJvZHkxLCBib2R5MikgPT4ge1xyXG4gIGlmICghYm9keTEuZ3JvdXApIHJldHVybjtcclxuICBpZiAoIWJvZHkyLmdyb3VwKSByZXR1cm47XHJcbiAgcmV0dXJuIGJvZHkxLmdyb3VwID09PSBib2R5Mi5ncm91cDtcclxufTtcclxuY29uc3QgcGFpckhhc2ggPSAoeCwgeSkgPT5cclxuICB4ID09PSBNYXRoLm1heCh4LCB5KSA/IHggKiB4ICsgeCArIHkgOiB5ICogeSArIHggKyB5O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2ltdWxhdGlvbiB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLm9iamVjdHMgPSBbXTtcclxuICAgIHRoaXMuYnZoID0gbmV3IFRyZWUoKTtcclxuICAgIHRoaXMuc3RhdGljQnZoID0gbmV3IFRyZWUoKVxyXG4gICAgdGhpcy5jb2xsaXNpb25zID0gW107XHJcbiAgICB0aGlzLmNvbnN0cmFpbnRzID0gbmV3IE1hcCgpO1xyXG4gICAgdGhpcy5wb3NpdGlvbkNvbnN0cmFpbnRzID0gbmV3IE1hcCgpO1xyXG4gICAgdGhpcy5jb2xsaXNpb25NYW5pZm9sZHMgPSBuZXcgTWFwKCk7XHJcbiAgICB0aGlzLmxhc3RJZCA9IDE7XHJcbiAgfVxyXG4gIGFkZE9iamVjdChvYmplY3QpIHtcclxuICAgIGNvbnN0IGFhYmIgPSBvYmplY3QuZ2V0RXhwYW5kZWRBQUJCKCk7XHJcblxyXG4gICAgY29uc3QgbGVhZiA9IHRoaXMuYnZoLmluc2VydExlYWYoYWFiYiwgb2JqZWN0KTtcclxuICAgIG9iamVjdC5CVmxpbmsgPSBsZWFmO1xyXG4gICAgb2JqZWN0LmlkID0gdGhpcy5sYXN0SWQ7XHJcbiAgICB0aGlzLmxhc3RJZCsrO1xyXG4gICAgb2JqZWN0Lm9uKFwidXBkYXRlXCIsICgpID0+IHRoaXMudXBkYXRlT2JqZWN0QUFCQi5jYWxsKHRoaXMsIG9iamVjdCkpO1xyXG5cclxuICAgIHRoaXMub2JqZWN0cy5wdXNoKG9iamVjdCk7XHJcbiAgfVxyXG4gIGFkZFN0YXRpY09iamVjdChvYmplY3Qpe1xyXG4gICAgY29uc3QgYWFiYiA9IG9iamVjdC5nZXRFeHBhbmRlZEFBQkIoKTtcclxuXHJcbiAgICBjb25zdCBsZWFmID0gdGhpcy5zdGF0aWNCdmguaW5zZXJ0TGVhZihhYWJiLCBvYmplY3QpO1xyXG4gICAgb2JqZWN0LkJWbGluayA9IGxlYWY7XHJcbiAgICBvYmplY3QuaWQgPSB0aGlzLmxhc3RJZDtcclxuICAgIHRoaXMubGFzdElkKys7XHJcbiAgICB0aGlzLm9iamVjdHMucHVzaChvYmplY3QpO1xyXG4gICAgb2JqZWN0Lm9uKFwidXBkYXRlXCIsICgpID0+IHRoaXMudXBkYXRlT2JqZWN0QUFCQi5jYWxsKHRoaXMsIG9iamVjdCkpO1xyXG4gIH1cclxuICBhZGRDb25zdHJhaW50cyhjb25zdHJhaW50cywgbmFtZSkge1xyXG4gICAgdGhpcy5jb25zdHJhaW50cy5zZXQobmFtZSwgWy4uLmNvbnN0cmFpbnRzXSlcclxuICB9XHJcbiAgYWRkUG9zaXRpb25Db25zdHJhaW50cyhjb25zdHJhaW50cywgbmFtZSkge1xyXG4gICAgdGhpcy5wb3NpdGlvbkNvbnN0cmFpbnRzLnNldChuYW1lLCBbLi4uY29uc3RyYWludHNdKVxyXG4gIH1cclxuICB1cGRhdGVPYmplY3RBQUJCKG9iamVjdCkge1xyXG4gICAgY29uc3QgbmV3QUFCQiA9IG9iamVjdC5nZXRBQUJCKCk7XHJcblxyXG4gICAgdGhpcy5idmgucmVtb3ZlTGVhZihvYmplY3QuQlZsaW5rKTtcclxuICAgIGNvbnN0IGxlYWYgPSB0aGlzLmJ2aC5pbnNlcnRMZWFmKG5ld0FBQkIsIG9iamVjdCk7XHJcbiAgICBvYmplY3QuQlZsaW5rID0gbGVhZjtcclxuICB9XHJcbiAgcmVtb3ZlT2JqZWN0KG9iamVjdCkge1xyXG4gICAgdGhpcy5idmgucmVtb3ZlTGVhZihvYmplY3QuQlZsaW5rKTtcclxuICAgIHRoaXMub2JqZWN0cyA9IHRoaXMub2JqZWN0cy5maWx0ZXIoKGVsKSA9PiBlbCA9PT0gb2JqZWN0KTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZUNvbGxpc2lvbnMoKSB7XHJcbiAgICBjb25zdCB7IGNvbGxpc2lvbk1hbmlmb2xkcyB9ID0gdGhpcztcclxuICAgIGZvciAoY29uc3QgW2hhc2gsIG1hbmlmb2xkXSBvZiBjb2xsaXNpb25NYW5pZm9sZHMpIHtcclxuICAgICAgbWFuaWZvbGQudXBkYXRlKCk7XHJcbiAgICAgIGlmICghbWFuaWZvbGQua2VlcCkgY29sbGlzaW9uTWFuaWZvbGRzLmRlbGV0ZShoYXNoKTtcclxuICAgIH1cclxuICAgIGZvciAobGV0IGkgPSAwLCBuID0gdGhpcy5vYmplY3RzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICBjb25zdCBvYmplY3QgPSB0aGlzLm9iamVjdHNbaV07XHJcbiAgICAgIGlmIChvYmplY3Quc3RhdGljKSBjb250aW51ZTtcclxuICAgICAgY29uc3QgaW50ZXJzZWN0cyA9IHRoaXMuYnZoLmdldENvbGxpc2lvbnMob2JqZWN0LkJWbGluayk7XHJcbiAgICAgIGNvbnN0IGludGVyc2VjdFdpdGhTdGF0aWNzID0gdGhpcy5zdGF0aWNCdmguZ2V0Q29sbGlzaW9ucyhvYmplY3QuQlZsaW5rKVxyXG4gICAgICBjb25zdCBjb2xzID0gWy4uLmludGVyc2VjdFdpdGhTdGF0aWNzLC4uLmludGVyc2VjdHNdXHJcbiAgICAgIG9iamVjdC5CVmxpbmsuaXNDaGVja2VkID0gdHJ1ZTtcclxuICAgICAgaWYgKGNvbHMubGVuZ3RoICE9IDApXHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDAsIG4gPSBjb2xzLmxlbmd0aDsgaiA8IG47IGorKykge1xyXG4gICAgICAgICAgaWYgKHNhbWVHcm91cChvYmplY3QsIGNvbHNbal0pKSBjb250aW51ZTtcclxuICAgICAgICAgIGNvbnN0IGhhc2ggPSBwYWlySGFzaChvYmplY3QuaWQsIGNvbHNbal0uaWQpO1xyXG4gICAgICAgICAgbGV0IG1hbmlmb2xkID0gdGhpcy5jb2xsaXNpb25NYW5pZm9sZHMuZ2V0KGhhc2gpO1xyXG4gICAgICAgICAgaWYgKG1hbmlmb2xkKSBjb250aW51ZTtcclxuICAgICAgICAgIGNvbnN0IGNvbnRhY3RzID0gZ2prKG9iamVjdCwgY29sc1tqXSk7XHJcblxyXG4gICAgICAgICAgaWYgKGNvbnRhY3RzKSB7XHJcbiAgICAgICAgICAgIG1hbmlmb2xkID0gbmV3IE1hbmlmb2xkKC4uLmNvbnRhY3RzKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY29sbGlzaW9uTWFuaWZvbGRzLnNldChoYXNoLCBtYW5pZm9sZCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuYnZoLnNldFVuY2hlY2tlZCgpO1xyXG4gICAgdGhpcy5zdGF0aWNCdmguc2V0VW5jaGVja2VkKClcclxuICB9XHJcbiAgdGljayhkZWx0YVRpbWUpIHtcclxuICAgIHRoaXMudXBkYXRlQ29sbGlzaW9ucygpO1xyXG4gICAgbGV0IG1hbmlmb2xkcyA9IHRoaXMuY29sbGlzaW9uTWFuaWZvbGRzO1xyXG4gICAgZm9yIChsZXQgaSA9IDAsIG4gPSB0aGlzLm9iamVjdHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgIHRoaXMub2JqZWN0c1tpXS5pbnRlZ3JhdGVGb3JjZXMoZGVsdGFUaW1lKTtcclxuICAgIH1cclxuICAgIGNvbnN0IHN5c3RlbSA9IG5ldyBTeXN0ZW0oKTtcclxuICAgIGNvbnN0IGZyaWN0aW9uU3lzdGVtID0gbmV3IFN5c3RlbSgpO1xyXG4gICAgY29uc3QgY29udGFjdENvbnN0cmFpbnRzID0gW107XHJcbiAgICBjb25zdCBmcmljdGlvbkNvbnN0cmFpbnRzID0gW107XHJcbiAgICBmb3IgKGxldCBba2V5LCBtYW5pZm9sZF0gb2YgbWFuaWZvbGRzKSB7XHJcbiAgICAgIGNvbnN0IHVzZVZlbG9jaXR5QmlhcyA9IG1hbmlmb2xkLmNvbnRhY3RzLmxlbmd0aCA8MjtcclxuXHJcbiAgICAgIG1hbmlmb2xkLmNvbnRhY3RzLmZvckVhY2goKGMsIF9pKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBib2R5MSwgYm9keTIsIHJhTG9jYWwsIHJiTG9jYWwsIHJhLCByYiwgaSwgaiwgcGVuRGVwdGgsIG4gfSA9IGM7XHJcbiAgICAgICAgY29uc3QgY29uc3RyYWludCA9IG5ldyBDb250YWN0Q29uc3RyYWludChcclxuICAgICAgICAgIGJvZHkxLFxyXG4gICAgICAgICAgYm9keTIsXHJcbiAgICAgICAgICBuLFxyXG4gICAgICAgICAgcmEsXHJcbiAgICAgICAgICByYixcclxuICAgICAgICAgIHJhTG9jYWwsXHJcbiAgICAgICAgICByYkxvY2FsLFxyXG4gICAgICAgICAgMCxcclxuICAgICAgICAgIDAuMDAwMDUsXHJcbiAgICAgICAgICBwZW5EZXB0aCxcclxuICAgICAgICAgIGksXHJcbiAgICAgICAgICBqXHJcbiAgICAgICAgKTtcclxuICAgICAgICBpZihtYW5pZm9sZC5sYW1iZGFzKSBjb25zdHJhaW50LnByZXZMYW1iZGEgPSBtYW5pZm9sZC5sYW1iZGFzW19pXVxyXG4gICAgICAgIGNvbnN0IGZDb25zdHJhaW50MSA9IG5ldyBGcmljdGlvbkNvbnN0cmFpbnQoXHJcbiAgICAgICAgICBib2R5MSxcclxuICAgICAgICAgIGJvZHkyLFxyXG4gICAgICAgICAgdmVjMy5zY2FsZShpLCAtMSksXHJcbiAgICAgICAgICByYSxcclxuICAgICAgICAgIHJiLFxyXG4gICAgICAgICAgcmFMb2NhbCxcclxuICAgICAgICAgIHJiTG9jYWwsXHJcbiAgICAgICAgICAwLFxyXG4gICAgICAgICAgLWJvZHkxLmZyaWN0aW9uIC0gYm9keTIuZnJpY3Rpb24sXHJcbiAgICAgICAgICBib2R5MS5mcmljdGlvbiArIGJvZHkyLmZyaWN0aW9uLFxyXG4gICAgICAgICAgbnVsbFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3QgZkNvbnN0cmFpbnQyID0gbmV3IEZyaWN0aW9uQ29uc3RyYWludChcclxuICAgICAgICAgIGJvZHkxLFxyXG4gICAgICAgICAgYm9keTIsXHJcbiAgICAgICAgICB2ZWMzLnNjYWxlKGosIC0xKSxcclxuICAgICAgICAgIHJhLFxyXG4gICAgICAgICAgcmIsXHJcbiAgICAgICAgICByYUxvY2FsLFxyXG4gICAgICAgICAgcmJMb2NhbCxcclxuICAgICAgICAgIDAsXHJcbiAgICAgICAgICAtYm9keTEuZnJpY3Rpb24gLSBib2R5Mi5mcmljdGlvbixcclxuICAgICAgICAgIGJvZHkxLmZyaWN0aW9uICsgYm9keTIuZnJpY3Rpb24sXHJcbiAgICAgICAgICBudWxsXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgaWYgKDEpIHtcclxuICAgICAgICAgIGNvbnN0cmFpbnQuYmlhc0ZhY3RvciA9IDAuMTI1O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBjb250YWN0Q29uc3RyYWludHMucHVzaChjb25zdHJhaW50KTtcclxuICAgICAgICBmcmljdGlvbkNvbnN0cmFpbnRzLnB1c2goZkNvbnN0cmFpbnQxLCBmQ29uc3RyYWludDIpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHN5c3RlbS5hZGRDb25zdHJhaW50KGNvbnRhY3RDb25zdHJhaW50cyk7XHJcbiAgICBmb3IobGV0IFtuYW1lLCBjb25zdHJhaW50c10gb2YgdGhpcy5jb25zdHJhaW50cyl7XHJcbiAgICAgIHN5c3RlbS5hZGRDb25zdHJhaW50KGNvbnN0cmFpbnRzKVxyXG4gICAgfVxyXG5cclxuICAgIHN5c3RlbS51cGRhdGVFcXVhdGlvbnMoZGVsdGFUaW1lKVxyXG4gICAgZnJpY3Rpb25TeXN0ZW0uYWRkQ29uc3RyYWludChmcmljdGlvbkNvbnN0cmFpbnRzKTtcclxuICBcclxuICAgIGZyaWN0aW9uU3lzdGVtLnVwZGF0ZUVxdWF0aW9ucyhkZWx0YVRpbWUpXHJcbiAgICBzeXN0ZW0uZ2VuZXJhdGVTeXN0ZW0oZGVsdGFUaW1lKTtcclxuICAgIGNvbnN0IGxhbWJkYSA9IHN5c3RlbS5zb2x2ZVBHUyhkZWx0YVRpbWUpO1xyXG4gICAgY29uc3QgbGVuID0gZnJpY3Rpb25Db25zdHJhaW50cy5sZW5ndGgvMlxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICBmcmljdGlvbkNvbnN0cmFpbnRzWzIgKiBpXS5sYW1iZGFNaW4gKj0gbGFtYmRhW2ldO1xyXG4gICAgICBmcmljdGlvbkNvbnN0cmFpbnRzWzIgKiBpXS5sYW1iZGFNYXggKj0gbGFtYmRhW2ldO1xyXG4gICAgICBmcmljdGlvbkNvbnN0cmFpbnRzWzIgKiBpICsgMV0ubGFtYmRhTWluICo9IGxhbWJkYVtpXTtcclxuICAgICAgZnJpY3Rpb25Db25zdHJhaW50c1syICogaSArIDFdLmxhbWJkYU1heCAqPSBsYW1iZGFbaV07XHJcbiAgICB9XHJcbiAgICBmcmljdGlvblN5c3RlbS5nZW5lcmF0ZVN5c3RlbShkZWx0YVRpbWUpO1xyXG4gICAgZnJpY3Rpb25TeXN0ZW0uc29sdmVQR1MoZGVsdGFUaW1lKTtcclxuICAgXHJcbiAgICBmb3IgKGxldCBpID0gMCwgbiA9IHRoaXMub2JqZWN0cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgdGhpcy5vYmplY3RzW2ldLmludGVncmF0ZVZlbG9jaXRpZXMoZGVsdGFUaW1lKTtcclxuICAgIH1cclxuICAgIHRoaXMub2JqZWN0cy5mb3JFYWNoKChvYmplY3QpID0+IG9iamVjdC51cGRhdGVJbnZlcnNlSW5lcnRpYSgpKTtcclxuICAgIFxyXG4gICAgXHJcbiAgICBsZXQgbmR4ID0gMFxyXG4gICAgZm9yKGNvbnN0IFtrZXksIG1hbmlmb2xkXSBvZiB0aGlzLmNvbGxpc2lvbk1hbmlmb2xkcyl7XHJcbiAgICAgIG1hbmlmb2xkLmxhbWJkYXMgPSBbXVxyXG4gICAgICBtYW5pZm9sZC5jb250YWN0cy5mb3JFYWNoKGM9PntcclxuICAgICAgICBtYW5pZm9sZC5sYW1iZGFzLnB1c2gobGFtYmRhW25keF0pXHJcbiAgICAgICAgbmR4KytcclxuICAgICAgfSlcclxuICAgIH0gXHJcbiAgICBjb25zdCBwb3NpdGlvblN5c3RlbSA9IG5ldyBTeXN0ZW0oKTtcclxuICAgIGNvbnN0IHBvc2l0aW9uQ29uc3RyYWludHMgPSBbXTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IFtrZXksIG1hbmlmb2xkXSBvZiBtYW5pZm9sZHMpIHtcclxuICAgICAgY29uc3QgeyBjb250YWN0cyB9ID0gbWFuaWZvbGQ7XHJcbiAgICAgIGlmIChjb250YWN0cy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgcG9zaXRpb25Db25zdHJhaW50cy5wdXNoKFxyXG4gICAgICAgICAgLi4uY29udGFjdHMubWFwKChjKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgICBib2R5MSxcclxuICAgICAgICAgICAgICBib2R5MixcclxuICAgICAgICAgICAgICByYUxvY2FsLFxyXG4gICAgICAgICAgICAgIHJiTG9jYWwsXHJcbiAgICAgICAgICAgICAgcmEsXHJcbiAgICAgICAgICAgICAgcmIsXHJcbiAgICAgICAgICAgICAgaSxcclxuICAgICAgICAgICAgICBqLFxyXG4gICAgICAgICAgICAgIHBlbkRlcHRoLFxyXG4gICAgICAgICAgICAgIG4sXHJcbiAgICAgICAgICAgIH0gPSBjO1xyXG4gICAgICAgICAgICBjb25zdCBjb25zdHJhaW50ID0gbmV3IFBvc2l0aW9uQ29uc3RyYWludChcclxuICAgICAgICAgICAgICBib2R5MSxcclxuICAgICAgICAgICAgICBib2R5MixcclxuICAgICAgICAgICAgICBuLFxyXG4gICAgICAgICAgICAgIHJhLFxyXG4gICAgICAgICAgICAgIHJiLFxyXG4gICAgICAgICAgICAgIHJhTG9jYWwsXHJcbiAgICAgICAgICAgICAgcmJMb2NhbCxcclxuICAgICAgICAgICAgICAwLjEsXHJcbiAgICAgICAgICAgICAgMC4wMDAxLFxyXG4gICAgICAgICAgICAgIHBlbkRlcHRoXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJldHVybiBjb25zdHJhaW50XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHBvc2l0aW9uU3lzdGVtLmFkZENvbnN0cmFpbnQocG9zaXRpb25Db25zdHJhaW50cylcclxuICAgIGZvcihsZXQgW25hbWUsIGNvbnN0cmFpbnRzXSBvZiB0aGlzLnBvc2l0aW9uQ29uc3RyYWludHMpe1xyXG4gICAgICBwb3NpdGlvblN5c3RlbS5hZGRDb25zdHJhaW50KGNvbnN0cmFpbnRzKVxyXG4gICAgfVxyXG4gICAgcG9zaXRpb25TeXN0ZW0udXBkYXRlRXF1YXRpb25zKGRlbHRhVGltZSlcclxuICAgIHBvc2l0aW9uU3lzdGVtLmdlbmVyYXRlU3lzdGVtKGRlbHRhVGltZSk7XHJcbiAgICBcclxuICAgIHBvc2l0aW9uU3lzdGVtLnNvbHZlUEdTKGRlbHRhVGltZSlcclxuICAgIGZvciAobGV0IGkgPSAwLCBuID0gdGhpcy5vYmplY3RzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICB0aGlzLm9iamVjdHNbaV0uaW50ZWdyYXRlUHNldWRvVmVsb2NpdGllcyhkZWx0YVRpbWUpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5vYmplY3RzLmZvckVhY2goKG9iamVjdCkgPT4gb2JqZWN0LnVwZGF0ZUludmVyc2VJbmVydGlhKCkpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyB2ZWMzIH0gZnJvbSBcIm1hdGhcIjtcclxuXHJcbmNvbnN0IHZlYzYgPSB7XHJcbiAgZG90KGEsIGIpe1xyXG4gICAgcmV0dXJuICBhWzBdICogYlswXSArXHJcbiAgICBhWzFdICogYlsxXSArIFxyXG4gICAgYVsyXSAqIGJbMl0gK1xyXG4gICAgYVszXSAqIGJbM10gK1xyXG4gICAgYVs0XSAqIGJbNF0gK1xyXG4gICAgYVs1XSAqIGJbNV1cclxuICAgICBcclxuICAgIFxyXG4gIH0sXHJcbiAgc2NhbGUoYSwgZmFjKXtcclxuICAgIHJldHVybiBbYVswXSAqIGZhYywgYVsxXSAqIGZhYywgYVsyXSAqIGZhYywgYVszXSAqIGZhYywgYVs0XSpmYWMsIGFbNV0qZmFjXVxyXG4gIH0sXHJcbiAgc3VtKGEsIGIpe1xyXG4gICAgcmV0dXJuIFtcclxuICAgICAgYVswXSArIGJbMF0sXHJcbiAgICAgIGFbMV0gKyBiWzFdLFxyXG4gICAgICBhWzJdICsgYlsyXSxcclxuICAgICAgYVszXSArIGJbM10sXHJcbiAgICAgIGFbNF0gKyBiWzRdLFxyXG4gICAgICBhWzVdICsgYls1XVxyXG4gICAgXVxyXG4gIH0sXHJcbiAgZnJvbVZlYzMoYSwgYil7XHJcbiAgICByZXR1cm4gW1xyXG4gICAgICAuLi5hLCAuLi5iXHJcbiAgICBdXHJcbiAgfVxyXG5cclxufVxyXG5jb25zdCBub3JtID0gdiA9PiBNYXRoLnNxcnQodi5yZWR1Y2UoKGFjYyxlbCkgPT4gYWNjKz1lbCplbCwgMCkpXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN5c3RlbSB7XHJcbiAgY29uc3RydWN0b3IoY29uc3RyYWludHMpIHtcclxuICAgIHRoaXMuY29uc3RyYWludHMgPSBbXTtcclxuXHJcbiAgICBcclxuXHJcbiAgfVxyXG4gIGFkZENvbnN0cmFpbnQoY29uc3RyYWludHMpe1xyXG4gICAgdGhpcy5jb25zdHJhaW50cy5wdXNoKC4uLmNvbnN0cmFpbnRzKVxyXG4gICAgXHJcbiAgfVxyXG4gIGdlbmVyYXRlQm9keU1hcHBpbmcoKXtcclxuICAgIGNvbnN0IGNvbnN0cmFpbnRzID0gdGhpcy5jb25zdHJhaW50c1xyXG4gICAgY29uc3QgbiA9IGNvbnN0cmFpbnRzLmxlbmd0aFxyXG4gICAgY29uc3QgYm9kaWVzTWFwID0gbmV3IE1hcCgpXHJcbiAgICBjb25zdCBKbWFwID0gW11cclxuICAgIGxldCBjb3VudGVyID0gMFxyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IG47IGkrKyl7XHJcbiAgICAgIGNvbnN0IGMgPSBjb25zdHJhaW50c1tpXVxyXG4gICAgICBsZXQgYm9keUluZGV4MSA9IGJvZGllc01hcC5nZXQoYy5ib2R5MS5pZClcclxuICAgICAgaWYoYm9keUluZGV4MSA9PT0gdW5kZWZpbmVkKXtcclxuICAgICAgICBib2R5SW5kZXgxID0gY291bnRlcisrXHJcbiAgICAgICAgYm9kaWVzTWFwLnNldChjLmJvZHkxLmlkLCBib2R5SW5kZXgxKVxyXG4gICAgICB9XHJcbiAgICAgIGxldCBib2R5SW5kZXgyID0gYm9kaWVzTWFwLmdldChjLmJvZHkyLmlkKVxyXG4gICAgICBpZihib2R5SW5kZXgyID09PSB1bmRlZmluZWQpe1xyXG4gICAgICAgIGJvZHlJbmRleDIgPSBjb3VudGVyKytcclxuICAgICAgICBib2RpZXNNYXAuc2V0KGMuYm9keTIuaWQsIGJvZHlJbmRleDIpXHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIEptYXAucHVzaChib2R5SW5kZXgxLCBib2R5SW5kZXgyKVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICB0aGlzLmJvZGllc01hcCA9IGJvZGllc01hcFxyXG4gICAgdGhpcy5KbWFwID0gSm1hcFxyXG4gIH1cclxuICBnZW5lcmF0ZVBzZXVkb1ZlbFZlY3RvcigpIHt9XHJcbiAgZ2VuZXJhdGVTeXN0ZW0oZGVsdGFUaW1lKSB7XHJcbiAgIFxyXG4gICAgLy9OdW1lcmF0aW5nIGJvZGllc1xyXG4gICAgdGhpcy5nZW5lcmF0ZUJvZHlNYXBwaW5nKClcclxuXHJcblxyXG4gIH1cclxuICAvL0ogKiBWZWxcclxuICBcclxuICBzb2x2ZVBHUyhkZWx0YVRpbWUpe1xyXG5cclxuICAgIFxyXG4gICAgY29uc3Qge0ptYXAsIGJvZGllc01hcCwgY29uc3RyYWludHN9ID0gdGhpc1xyXG4gICAgY29uc3QgbnVtQm9kaWVzID0gYm9kaWVzTWFwLnNpemVcclxuICAgIGNvbnN0IG4gPSBjb25zdHJhaW50cy5sZW5ndGhcclxuICAgIGNvbnN0IGQgPSBbXVxyXG4gICAgXHJcbiAgICBjb25zdCBsYW1iZGEwID0gbmV3IEFycmF5KG4pLmZpbGwoMClcclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCAwOyBpKyspe1xyXG4gICAgICBpZihjb25zdHJhaW50c1tpXS5wcmV2TGFtYmRhKSBsYW1iZGEwW2ldID0gY29uc3RyYWludHNbaV0ucHJldkxhbWJkYVxyXG4gICAgfVxyXG5cclxuICAgIC8vQkpsYW1iZGFcclxuICAgIFxyXG4gICAgY29uc3QgQmwgPSBuZXcgQXJyYXkobnVtQm9kaWVzKS5maWxsKFswLDAsMCwwLDAsMF0pXHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgbjsgaSsrKXtcclxuICAgICAgY29uc3QgYjEgPSBKbWFwW2kgKiAyIF1cclxuICAgICAgY29uc3QgYjIgPSBKbWFwW2kgKiAyICsgMV0gXHJcbiAgICBcclxuICAgICBcclxuICAgICAgXHJcbiAgICAgIEJsW2IxXSA9IHZlYzYuc3VtKHZlYzYuc2NhbGUoY29uc3RyYWludHNbaV0uQlswXSwgbGFtYmRhMFtpXSksIEJsW2IxXSlcclxuICAgICAgXHJcbiAgICAgIFxyXG4gICAgICBCbFtiMl0gPSB2ZWM2LnN1bSh2ZWM2LnNjYWxlKGNvbnN0cmFpbnRzW2ldLkJbMV0sIGxhbWJkYTBbaV0pLCBCbFtiMl0pXHJcbiAgICBcclxuICAgICAgXHJcbiAgICB9XHJcbiAgXHJcbiAgICAvL1BHU1xyXG4gXHJcbiAgICBcclxuICAgIGNvbnN0IGxhbWJkYSA9IFsuLi5sYW1iZGEwXVxyXG4gICAgZm9yKGxldCBpID0gMDsgaTwgbjsgaSsrKXtcclxuICAgICAgZC5wdXNoKGNvbnN0cmFpbnRzW2ldLmVmZk1hc3MpXHJcbiAgICB9XHJcbiAgICBsZXQgZmxhZyA9IHRydWVcclxuICAgIGxldCBudW1JdGVyID0gMjVcclxuXHJcbiAgICBjb25zdCBkZWx0YUxhbWJkYSA9IG5ldyBBcnJheShuKS5maWxsKDApXHJcbiAgICB3aGlsZShudW1JdGVyID4gMCApe1xyXG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbjsgaSsrKXtcclxuICAgICAgICBjb25zdCBjID0gY29uc3RyYWludHNbaV1cclxuICAgICAgICBjb25zdCBKID0gYy5fSlxyXG4gICAgICAgIGNvbnN0IGIxID0gSm1hcFtpICogMiBdXHJcbiAgICAgICAgY29uc3QgYjIgPSBKbWFwW2kgKiAyICsgMV1cclxuICAgICAgIFxyXG4gICAgICAgIGRlbHRhTGFtYmRhW2ldID0gKGMuYmlhcyAtIHZlYzYuZG90KEpbMF0sIEJsW2IxXSkgLSB2ZWM2LmRvdChKWzFdLCBCbFtiMl0pKSAvIGRbaV1cclxuICAgICAgICBcclxuICAgICAgICBsYW1iZGEwW2ldID0gbGFtYmRhW2ldXHJcbiAgICAgICAgbGFtYmRhW2ldID0gTWF0aC5tYXgoYy5sYW1iZGFNaW4sIE1hdGgubWluKGxhbWJkYTBbaV0gKyBkZWx0YUxhbWJkYVtpXSwgYy5sYW1iZGFNYXgpKVxyXG4gICAgICAgIFxyXG4gICAgICAgIGRlbHRhTGFtYmRhW2ldID0gbGFtYmRhW2ldIC0gbGFtYmRhMFtpXVxyXG4gICAgICAgIFxyXG4gICAgICAgIEJsW2IxXSA9IHZlYzYuc3VtKEJsW2IxXSwgdmVjNi5zY2FsZShjLkJbMF0sIGRlbHRhTGFtYmRhW2ldKSlcclxuICAgICAgICBCbFtiMl0gPSB2ZWM2LnN1bShCbFtiMl0sIHZlYzYuc2NhbGUoYy5CWzFdLCBkZWx0YUxhbWJkYVtpXSkpXHJcbiAgICAgIFxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBudW1JdGVyLS1cclxuICAgIH1cclxuICAgXHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgbjsgaSsrKXtcclxuICAgICAgY29uc3RyYWludHNbaV0uYXBwbHlSZXNvbHZpbmdJbXB1bHNlKGxhbWJkYVtpXSlcclxuICAgIH1cclxuICAgIHJldHVybiBsYW1iZGFcclxuICB9XHJcbiAgdXBkYXRlRXF1YXRpb25zKGRlbHRhVGltZSl7XHJcbiAgICBjb25zdCB7Y29uc3RyYWludHN9ID0gdGhpc1xyXG4gICAgY29uc3QgbiA9IGNvbnN0cmFpbnRzLmxlbmd0aFxyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IG47IGkgKyspe1xyXG4gICAgICBjb25zdHJhaW50c1tpXS51cGRhdGVMZWZ0UGFydChkZWx0YVRpbWUpXHJcbiAgICAgIGNvbnN0cmFpbnRzW2ldLnVwZGF0ZVJpZ2h0UGFydChkZWx0YVRpbWUpXHJcbiAgICB9XHJcbiAgfVxyXG4gIGFwcGx5UmVzb2x2aW5nSW1wdWxzZXMobGFtYmRhKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMCwgbiA9IHRoaXMuY29uc3RyYWludHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgIHRoaXMuY29uc3RyYWludHNbaV0uYXBwbHlSZXNvbHZpbmdJbXB1bHNlKGxhbWJkYVtpXSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGFwcGx5UmVzb2x2aW5nUHNldWRvSW1wdWxzZXMobGFtYmRhKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMCwgbiA9IHRoaXMuY29uc3RyYWludHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgIHRoaXMuY29uc3RyYWludHNbaV0uYXBwbHlSZXNvbHZpbmdQc2V1ZG9JbXB1bHNlKGxhbWJkYVtpXSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBBQUJCIH0gZnJvbSBcIm1hdGhcIjtcclxuY29uc3QgZ2V0Qm91bmRBYWJiID0gKGFhYmIxLCBhYWJiMikgPT4ge1xyXG4gIGlmICghYWFiYjEgfHwgIWFhYmIyKSB7XHJcbiAgICByZXR1cm4gMDtcclxuICB9XHJcbiAgY29uc3QgeDEgPSBhYWJiMS5taW5bMF0gPCBhYWJiMi5taW5bMF0gPyBhYWJiMS5taW5bMF0gOiBhYWJiMi5taW5bMF07XHJcbiAgY29uc3QgeDIgPSBhYWJiMS5tYXhbMF0gPiBhYWJiMi5tYXhbMF0gPyBhYWJiMS5tYXhbMF0gOiBhYWJiMi5tYXhbMF07XHJcbiAgY29uc3QgeTEgPSBhYWJiMS5taW5bMV0gPCBhYWJiMi5taW5bMV0gPyBhYWJiMS5taW5bMV0gOiBhYWJiMi5taW5bMV07XHJcbiAgY29uc3QgeTIgPSBhYWJiMS5tYXhbMV0gPiBhYWJiMi5tYXhbMV0gPyBhYWJiMS5tYXhbMV0gOiBhYWJiMi5tYXhbMV07XHJcbiAgY29uc3QgejEgPSBhYWJiMS5taW5bMl0gPCBhYWJiMi5taW5bMl0gPyBhYWJiMS5taW5bMl0gOiBhYWJiMi5taW5bMl07XHJcbiAgY29uc3QgejIgPSBhYWJiMS5tYXhbMl0gPiBhYWJiMi5tYXhbMl0gPyBhYWJiMS5tYXhbMl0gOiBhYWJiMi5tYXhbMl07XHJcbiAgcmV0dXJuIG5ldyBBQUJCKFt4MSwgeTEsIHoxXSwgW3gyLCB5MiwgejJdKTtcclxufTtcclxuY29uc3QgaXNDb2xsaWRlID0gKGFhYmIxLCBhYWJiMikgPT4ge1xyXG4gIGlmIChcclxuICAgIGFhYmIxLm1pblswXSA8PSBhYWJiMi5tYXhbMF0gJiZcclxuICAgIGFhYmIxLm1heFswXSA+PSBhYWJiMi5taW5bMF0gJiZcclxuICAgIGFhYmIxLm1pblsxXSA8PSBhYWJiMi5tYXhbMV0gJiZcclxuICAgIGFhYmIxLm1heFsxXSA+PSBhYWJiMi5taW5bMV0gJiZcclxuICAgIGFhYmIxLm1pblsyXSA8PSBhYWJiMi5tYXhbMl0gJiZcclxuICAgIGFhYmIxLm1heFsyXSA+PSBhYWJiMi5taW5bMl1cclxuICApIHtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuICByZXR1cm4gZmFsc2U7XHJcbn07XHJcbmNvbnN0IGdldFNpemUgPSAoYWFiYikgPT4ge1xyXG4gIGNvbnN0IGFyZWEgPVxyXG4gICAgTWF0aC5hYnMoYWFiYi5tYXhbMF0gLSBhYWJiLm1pblswXSkgKlxyXG4gICAgTWF0aC5hYnMoYWFiYi5tYXhbMV0gLSBhYWJiLm1pblsxXSkgKlxyXG4gICAgTWF0aC5hYnMoYWFiYi5tYXhbMl0gLSBhYWJiLm1pblsyXSk7XHJcbiAgcmV0dXJuIGFyZWE7XHJcbn07XHJcbmNsYXNzIE5vZGUge1xyXG4gIGNvbnN0cnVjdG9yKGFhYmIsIGlzTGVhZiwgZ2FtZU9iamVjdCkge1xyXG4gICAgdGhpcy5hYWJiID0gYWFiYjtcclxuICAgIHRoaXMuaXNMZWFmID0gaXNMZWFmO1xyXG4gICAgdGhpcy5wYXJlbnQgPSBudWxsO1xyXG5cclxuICAgIHRoaXMuZ2FtZU9iamVjdCA9IGdhbWVPYmplY3Q7XHJcbiAgICB0aGlzLmlzQ2hlY2tlZCA9IGZhbHNlO1xyXG4gIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmVlIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMucm9vdCA9IG51bGw7XHJcbiAgICB0aGlzLmxlYWZzID0ge307XHJcbiAgICB0aGlzLnVudXNlZEluZGV4ZXMgPSBbXTtcclxuICAgIHRoaXMucmViYWxhbmNlRGVsYXkgPSAzMFxyXG4gIH1cclxuICBzZXRVbmNoZWNrZWQoKSB7XHJcbiAgICBpZighdGhpcy5yb290KXJldHVyblxyXG4gICAgY29uc3Qgc3RhY2sgPSBbdGhpcy5yb290XTtcclxuICAgIFxyXG4gICAgd2hpbGUgKHN0YWNrLmxlbmd0aCAhPSAwKSB7XHJcbiAgICAgIGNvbnN0IG5vZGUgPSBzdGFjay5wb3AoKTtcclxuICAgICAgXHJcbiAgICAgIGlmIChub2RlLmlzTGVhZikge1xyXG4gICAgICAgIG5vZGUuaXNDaGVja2VkID0gZmFsc2U7XHJcbiAgICAgICAgY29udGludWU7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG5vZGUuY2hpbGQxKSBzdGFjay5wdXNoKG5vZGUuY2hpbGQxKTtcclxuICAgICAgaWYgKG5vZGUuY2hpbGQyKSBzdGFjay5wdXNoKG5vZGUuY2hpbGQyKTtcclxuICAgIH1cclxuICB9XHJcbiAgZ2V0QmVzdFNpYmxpbmcobGVhZikge1xyXG4gICAgbGV0IHBvdGVudGlhbCA9IHRoaXMucm9vdDtcclxuICAgIHdoaWxlICghcG90ZW50aWFsLmlzTGVhZikge1xyXG4gICAgICBjb25zdCBzaXplID0gZ2V0U2l6ZShwb3RlbnRpYWwuYWFiYik7XHJcbiAgICAgIGNvbnN0IGNvbWJpbmVkQUFCQiA9IGdldEJvdW5kQWFiYihwb3RlbnRpYWwuYWFiYiwgbGVhZi5hYWJiKTtcclxuICAgICAgY29uc3QgY29tYmluZWRTaXplID0gZ2V0U2l6ZShjb21iaW5lZEFBQkIpO1xyXG4gICAgICBsZXQgY29zdCA9IGNvbWJpbmVkU2l6ZTtcclxuICAgICAgbGV0IGluaGVyQ29zdCA9IGNvbWJpbmVkU2l6ZSAtIHNpemU7XHJcblxyXG4gICAgICBsZXQgY29zdDE7XHJcbiAgICAgIGlmIChwb3RlbnRpYWwuY2hpbGQxLmlzTGVhZikge1xyXG4gICAgICAgIGNvc3QxID0gZ2V0U2l6ZShwb3RlbnRpYWwuY2hpbGQxLmFhYmIpICsgaW5oZXJDb3N0O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvc3QxID1cclxuICAgICAgICAgIGdldFNpemUoZ2V0Qm91bmRBYWJiKGxlYWYuYWFiYiwgcG90ZW50aWFsLmNoaWxkMS5hYWJiKSkgLVxyXG4gICAgICAgICAgZ2V0U2l6ZShwb3RlbnRpYWwuY2hpbGQxLmFhYmIpICtcclxuICAgICAgICAgIGluaGVyQ29zdDtcclxuICAgICAgfVxyXG5cclxuICAgICAgbGV0IGNvc3QyO1xyXG4gICAgICBpZiAocG90ZW50aWFsLmNoaWxkMi5pc0xlYWYpIHtcclxuICAgICAgICBjb3N0MiA9IGdldFNpemUocG90ZW50aWFsLmNoaWxkMi5hYWJiKSArIGluaGVyQ29zdDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb3N0MiA9XHJcbiAgICAgICAgICBnZXRTaXplKGdldEJvdW5kQWFiYihsZWFmLmFhYmIsIHBvdGVudGlhbC5jaGlsZDIuYWFiYikpIC1cclxuICAgICAgICAgIGdldFNpemUocG90ZW50aWFsLmNoaWxkMi5hYWJiKSArXHJcbiAgICAgICAgICBpbmhlckNvc3Q7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGNvc3QgPCBjb3N0MSAmJiBjb3N0IDwgY29zdDIpIHJldHVybiBwb3RlbnRpYWw7XHJcbiAgICAgIGlmIChjb3N0MSA8IGNvc3QyKSB7XHJcbiAgICAgICAgcG90ZW50aWFsID0gcG90ZW50aWFsLmNoaWxkMTtcclxuICAgICAgfSBlbHNlIHBvdGVudGlhbCA9IHBvdGVudGlhbC5jaGlsZDI7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcG90ZW50aWFsO1xyXG4gIH1cclxuICBpbnNlcnRMZWFmKGFhYmIsIGdhbWVPYmplY3QpIHtcclxuICAgIGNvbnN0IGxlYWYgPSBuZXcgTm9kZShhYWJiLCB0cnVlLCBnYW1lT2JqZWN0KTtcclxuICAgIGlmICh0aGlzLnJvb3QgPT09IG51bGwpIHtcclxuICAgICAgdGhpcy5yb290ID0gbGVhZjtcclxuICAgICAgdGhpcy5yb290LnBhcmVudCA9IG51bGw7XHJcbiAgICAgIHJldHVybiBsZWFmO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNpYmxpbmcgPSB0aGlzLmdldEJlc3RTaWJsaW5nKGxlYWYpO1xyXG4gICAgY29uc3Qgb2xkUGFyZW50ID0gc2libGluZy5wYXJlbnQ7XHJcbiAgICBjb25zdCBuZXdQYXJlbnQgPSBuZXcgTm9kZShsZWFmLmFhYmIsIGZhbHNlKTtcclxuICAgIG5ld1BhcmVudC5wYXJlbnQgPSBvbGRQYXJlbnQ7XHJcblxyXG4gICAgbmV3UGFyZW50LmFhYmIgPSBnZXRCb3VuZEFhYmIobGVhZi5hYWJiLCBzaWJsaW5nLmFhYmIpO1xyXG5cclxuICAgIGlmIChvbGRQYXJlbnQpIHtcclxuICAgICAgaWYgKG9sZFBhcmVudC5jaGlsZDEgPT09IHNpYmxpbmcpIG9sZFBhcmVudC5jaGlsZDEgPSBuZXdQYXJlbnQ7XHJcbiAgICAgIGVsc2Ugb2xkUGFyZW50LmNoaWxkMiA9IG5ld1BhcmVudDtcclxuXHJcbiAgICAgIG5ld1BhcmVudC5jaGlsZDEgPSBzaWJsaW5nO1xyXG4gICAgICBuZXdQYXJlbnQuY2hpbGQyID0gbGVhZjtcclxuXHJcbiAgICAgIHNpYmxpbmcucGFyZW50ID0gbmV3UGFyZW50O1xyXG4gICAgICBsZWFmLnBhcmVudCA9IG5ld1BhcmVudDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG5ld1BhcmVudC5jaGlsZDEgPSBzaWJsaW5nO1xyXG4gICAgICBuZXdQYXJlbnQuY2hpbGQyID0gbGVhZjtcclxuXHJcbiAgICAgIHNpYmxpbmcucGFyZW50ID0gbmV3UGFyZW50O1xyXG4gICAgICBsZWFmLnBhcmVudCA9IG5ld1BhcmVudDtcclxuICAgICAgdGhpcy5yb290ID0gbmV3UGFyZW50O1xyXG4gICAgfVxyXG4gICAgbGV0IGluZGV4ID0gbGVhZi5wYXJlbnQ7XHJcbiAgICBcclxuICAgIHdoaWxlIChpbmRleCApIHtcclxuICAgICAgaW5kZXggPSB0aGlzLnJlYmFsYW5jZShpbmRleCk7XHJcbiAgICAgIGluZGV4ID0gaW5kZXgucGFyZW50O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGxlYWY7XHJcbiAgfVxyXG4gIGdldENvbGxpc2lvbnMobGVhZikge1xyXG4gICAgY29uc3QgY29scyA9IFtdO1xyXG4gICAgY29uc3QgaXRlciA9IChfbm9kZSkgPT4ge1xyXG4gICAgICBpZiAoIV9ub2RlKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChfbm9kZSA9PT0gbGVhZikge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBpZiAoaXNDb2xsaWRlKGxlYWYuYWFiYiwgX25vZGUuYWFiYikpIHtcclxuICAgICAgICBpZiAoX25vZGUuaXNMZWFmICYmICFfbm9kZS5pc0NoZWNrZWQpIHtcclxuICAgICAgICAgIGNvbHMucHVzaChfbm9kZS5nYW1lT2JqZWN0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaXRlcihfbm9kZS5jaGlsZDEpO1xyXG4gICAgICAgIGl0ZXIoX25vZGUuY2hpbGQyKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBpdGVyKHRoaXMucm9vdCk7XHJcblxyXG4gICAgcmV0dXJuIGNvbHM7XHJcbiAgfVxyXG4gIHJlbW92ZUxlYWYobGVhZikge1xyXG4gICAgaWYgKGxlYWYgPT09IHRoaXMucm9vdCkge1xyXG4gICAgICB0aGlzLnJvb3QgPSBudWxsO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBwYXJlbnQgPSBsZWFmLnBhcmVudDtcclxuICAgIGNvbnN0IGdyYW5kUGFyZW50ID0gcGFyZW50ID8gcGFyZW50LnBhcmVudCA6IG51bGw7XHJcbiAgICBsZXQgc2libGluZztcclxuICAgIGlmIChwYXJlbnQuY2hpbGQxID09PSBsZWFmKSBzaWJsaW5nID0gcGFyZW50LmNoaWxkMjtcclxuICAgIGVsc2Ugc2libGluZyA9IHBhcmVudC5jaGlsZDE7XHJcblxyXG4gICAgaWYgKGdyYW5kUGFyZW50KSB7XHJcbiAgICAgIGlmIChncmFuZFBhcmVudC5jaGlsZDEgPT09IHBhcmVudCkgZ3JhbmRQYXJlbnQuY2hpbGQxID0gc2libGluZztcclxuICAgICAgZWxzZSBncmFuZFBhcmVudC5jaGlsZDIgPSBzaWJsaW5nO1xyXG5cclxuICAgICAgc2libGluZy5wYXJlbnQgPSBncmFuZFBhcmVudDtcclxuXHJcbiAgICAgIGxldCBpbmRleCA9IGdyYW5kUGFyZW50O1xyXG4gICAgICB3aGlsZSAoaW5kZXgpIHtcclxuICAgICAgICBpbmRleCA9IHRoaXMucmViYWxhbmNlKGluZGV4KTtcclxuXHJcbiAgICAgICAgaW5kZXggPSBpbmRleC5wYXJlbnQ7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucm9vdCA9IHNpYmxpbmc7XHJcbiAgICAgIHNpYmxpbmcucGFyZW50ID0gbnVsbDtcclxuICAgIH1cclxuICB9XHJcbiAgcmViYWxhbmNlKGxlYWYpIHtcclxuICAgIGlmICghbGVhZikge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGlmIChsZWFmLmlzTGVhZiB8fCB0aGlzLmdldEhlaWdodChsZWFmKSA8IDIpIHtcclxuICAgICAgbGVhZi5hYWJiID0gZ2V0Qm91bmRBYWJiKGxlYWYuY2hpbGQxLmFhYmIsIGxlYWYuY2hpbGQyLmFhYmIpO1xyXG4gICAgICByZXR1cm4gbGVhZjtcclxuICAgIH1cclxuICAgIGNvbnN0IGNoaWxkMSA9IGxlYWYuY2hpbGQxO1xyXG4gICAgY29uc3QgY2hpbGQyID0gbGVhZi5jaGlsZDI7XHJcbiAgICBjb25zdCBiYWxhbmNlID0gdGhpcy5nZXRIZWlnaHQoY2hpbGQyKSAtIHRoaXMuZ2V0SGVpZ2h0KGNoaWxkMSk7XHJcblxyXG4gICAgaWYgKGJhbGFuY2UgPiAxKSB7XHJcbiAgICAgIGNvbnN0IGNoaWxkMkNoaWxkMSA9IGNoaWxkMi5jaGlsZDE7XHJcbiAgICAgIGNvbnN0IGNoaWxkMkNoaWxkMiA9IGNoaWxkMi5jaGlsZDI7XHJcblxyXG4gICAgICBjaGlsZDIuY2hpbGQxID0gbGVhZjtcclxuICAgICAgY2hpbGQyLnBhcmVudCA9IGxlYWYucGFyZW50O1xyXG4gICAgICBsZWFmLnBhcmVudCA9IGNoaWxkMjtcclxuICAgICAgaWYgKGNoaWxkMi5wYXJlbnQgIT0gbnVsbCkge1xyXG4gICAgICAgIGlmIChjaGlsZDIucGFyZW50LmNoaWxkMSA9PT0gbGVhZikge1xyXG4gICAgICAgICAgY2hpbGQyLnBhcmVudC5jaGlsZDEgPSBjaGlsZDI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNoaWxkMi5wYXJlbnQuY2hpbGQyID0gY2hpbGQyO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHRoaXMucm9vdCA9IGNoaWxkMjtcclxuICAgICAgaWYgKHRoaXMuZ2V0SGVpZ2h0KGNoaWxkMkNoaWxkMSkgPiB0aGlzLmdldEhlaWdodChjaGlsZDJDaGlsZDIpKSB7XHJcbiAgICAgICAgY2hpbGQyLmNoaWxkMiA9IGNoaWxkMkNoaWxkMTtcclxuICAgICAgICBsZWFmLmNoaWxkMiA9IGNoaWxkMkNoaWxkMjtcclxuICAgICAgICBjaGlsZDJDaGlsZDIucGFyZW50ID0gbGVhZjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBsZWFmLmNoaWxkMiA9IGNoaWxkMkNoaWxkMTtcclxuICAgICAgICBjaGlsZDJDaGlsZDEucGFyZW50ID0gbGVhZjtcclxuICAgICAgfVxyXG4gICAgICBsZWFmLmFhYmIgPSBnZXRCb3VuZEFhYmIobGVhZi5jaGlsZDEuYWFiYiwgbGVhZi5jaGlsZDIuYWFiYik7XHJcbiAgICAgIGNoaWxkMi5hYWJiID0gZ2V0Qm91bmRBYWJiKGNoaWxkMi5jaGlsZDEuYWFiYiwgY2hpbGQyLmNoaWxkMi5hYWJiKTtcclxuXHJcbiAgICAgIHJldHVybiBjaGlsZDI7XHJcbiAgICB9XHJcbiAgICBpZiAoYmFsYW5jZSA8IC0xKSB7XHJcbiAgICAgIGNvbnN0IGNoaWxkMUNoaWxkMSA9IGNoaWxkMS5jaGlsZDE7XHJcbiAgICAgIGNvbnN0IGNoaWxkMUNoaWxkMiA9IGNoaWxkMS5jaGlsZDI7XHJcblxyXG4gICAgICBjaGlsZDEuY2hpbGQxID0gbGVhZjtcclxuICAgICAgY2hpbGQxLnBhcmVudCA9IGxlYWYucGFyZW50O1xyXG4gICAgICBsZWFmLnBhcmVudCA9IGNoaWxkMTtcclxuXHJcbiAgICAgIGlmIChjaGlsZDEucGFyZW50ICE9IG51bGwpIHtcclxuICAgICAgICBpZiAoY2hpbGQxLnBhcmVudC5jaGlsZDEgPT09IGxlYWYpIHtcclxuICAgICAgICAgIGNoaWxkMS5wYXJlbnQuY2hpbGQxID0gY2hpbGQxO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjaGlsZDEucGFyZW50LmNoaWxkMiA9IGNoaWxkMTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB0aGlzLnJvb3QgPSBjaGlsZDE7XHJcbiAgICAgIGlmICh0aGlzLmdldEhlaWdodChjaGlsZDFDaGlsZDEpID4gdGhpcy5nZXRIZWlnaHQoY2hpbGQxQ2hpbGQyKSkge1xyXG4gICAgICAgIGNoaWxkMS5jaGlsZDIgPSBjaGlsZDFDaGlsZDE7XHJcbiAgICAgICAgbGVhZi5jaGlsZDEgPSBjaGlsZDFDaGlsZDI7XHJcbiAgICAgICAgY2hpbGQxQ2hpbGQyLnBhcmVudCA9IGxlYWY7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY2hpbGQxLmNoaWxkMiA9IGNoaWxkMUNoaWxkMjtcclxuICAgICAgICBsZWFmLmNoaWxkMSA9IGNoaWxkMUNoaWxkMTtcclxuICAgICAgICBjaGlsZDFDaGlsZDEucGFyZW50ID0gbGVhZjtcclxuICAgICAgfVxyXG4gICAgICBsZWFmLmFhYmIgPSBnZXRCb3VuZEFhYmIobGVhZi5jaGlsZDEuYWFiYiwgbGVhZi5jaGlsZDIuYWFiYik7XHJcbiAgICAgIGNoaWxkMS5hYWJiID0gZ2V0Qm91bmRBYWJiKGNoaWxkMS5jaGlsZDEuYWFiYiwgY2hpbGQxLmNoaWxkMi5hYWJiKTtcclxuXHJcbiAgICAgIHJldHVybiBjaGlsZDE7XHJcbiAgICB9XHJcbiAgICBsZWFmLmFhYmIgPSBnZXRCb3VuZEFhYmIobGVhZi5jaGlsZDEuYWFiYiwgbGVhZi5jaGlsZDIuYWFiYik7XHJcbiAgICByZXR1cm4gbGVhZjtcclxuICB9XHJcbiAgdG9BcnJheShpKSB7XHJcbiAgICBjb25zdCBpdGVyID0gKGxlYWYsIGxldmVsKSA9PiB7XHJcbiAgICAgIGlmICghbGVhZikge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChsZWFmLmlzTGVhZikgcmV0dXJuIGxlYWYub2JqZWN0TGluay5uYW1lO1xyXG4gICAgICBlbHNlIHJldHVybiBbaXRlcihsZWFmLmNoaWxkMSksIGl0ZXIobGVhZi5jaGlsZDIpXTtcclxuICAgIH07XHJcbiAgICBpZiAoIWkpIGkgPSB0aGlzLnJvb3Q7XHJcbiAgICByZXR1cm4gaXRlcihpKTtcclxuICB9XHJcbiAgLypnZXRIZWlnaHQobGVhZikge1xyXG4gICAgY29uc3QgaXRlciA9IChsZWFmLCBsZXZlbCkgPT4ge1xyXG4gICAgICBpZiAoIWxlYWYpIHtcclxuICAgICAgICByZXR1cm4gbGV2ZWw7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxldCBoMSA9IGl0ZXIobGVhZi5jaGlsZDEsIGxldmVsICsgMSk7XHJcbiAgICAgIGxldCBoMiA9IGl0ZXIobGVhZi5jaGlsZDIsIGxldmVsICsgMSk7XHJcbiAgICAgIHJldHVybiBoMSA+IGgyID8gaDEgOiBoMjtcclxuICAgIH07XHJcbiAgICByZXR1cm4gaXRlcihsZWFmLCAxKTtcclxuICB9Ki9cclxuICBnZXRIZWlnaHQocm9vdCl7XHJcbiAgICBpZighcm9vdCkgcmV0dXJuIDBcclxuICAgIGxldCBoZWlnaHQgPSAwXHJcbiAgICBjb25zdCBxdWV1ZSA9IFtyb290XVxyXG4gICAgd2hpbGUocXVldWUubGVuZ3RoICE9IDApe1xyXG4gICAgICBoZWlnaHQgKz0gMVxyXG4gICAgICBjb25zdCBjb3VudCA9IHF1ZXVlLmxlbmd0aFxyXG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKyl7XHJcbiAgICAgICAgY29uc3QgdG1wID0gcXVldWUucG9wKClcclxuICAgICAgICBpZih0bXAuY2hpbGQxKSBxdWV1ZS5wdXNoKHRtcC5jaGlsZDEpXHJcbiAgICAgICAgaWYodG1wLmNoaWxkMikgcXVldWUucHVzaCh0bXAuY2hpbGQyKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaGVpZ2h0XHJcbiAgfVxyXG4gIGdldE5vZGVzKCkge1xyXG4gICAgY29uc3QgaXRlciA9IChub2RlLCBhcnIpID0+IHtcclxuICAgICAgYXJyLnB1c2gobm9kZSk7XHJcbiAgICAgIGlmIChub2RlLmNoaWxkMSkgaXRlcihub2RlLmNoaWxkMSwgYXJyKTtcclxuICAgICAgaWYgKG5vZGUuY2hpbGQyKSBpdGVyKG5vZGUuY2hpbGQyLCBhcnIpO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGEgPSBbXTtcclxuICAgIGl0ZXIodGhpcy5yb290LCBhKTtcclxuICAgIHJldHVybiBhO1xyXG4gIH1cclxufVxyXG4iLCJjb25zdCBpc0luc2lkZSA9IChwMSwgcDIsIHEpID0+IHtcclxuICBjb25zdCBSID0gKHAyWzBdIC0gcDFbMF0pICogKHFbMV0gLSBwMVsxXSkgLSAocDJbMV0gLSBwMVsxXSkgKiAocVswXSAtIHAxWzBdKTtcclxuICByZXR1cm4gUiA8PSAwICsgMC4wMDE7XHJcbn07XHJcblxyXG5jb25zdCBkb3QgPSAoYSwgYikgPT4gYVswXSAqIGJbMF0gKyBhWzFdICogYlsxXTtcclxuXHJcbmNvbnN0IGlzSW5DbG9ja3dpc2UgPSAocG9pbnRzKSA9PiB7XHJcbiAgaWYgKHBvaW50cy5sZW5ndGggPCAzKSByZXR1cm4gMTtcclxuICBjb25zdCBbcDEsIHAyLCBwM10gPSBwb2ludHM7XHJcbiAgY29uc3QgZGV0ID1cclxuICAgIHAyWzBdICogcDNbMV0gK1xyXG4gICAgcDNbMF0gKiBwMVsxXSArXHJcbiAgICBwMVswXSAqIHAyWzFdIC1cclxuICAgIHAxWzBdICogcDFbMV0gLVxyXG4gICAgcDNbMF0gKiBwMlsxXSAtXHJcbiAgICBwMVswXSAqIHAzWzFdO1xyXG5cclxuICBpZiAoZGV0IDwgMCkgcmV0dXJuIDE7XHJcbiAgcmV0dXJuIC0xO1xyXG59O1xyXG5cclxuY29uc3QgY29tcHV0ZUludGVyc2VjdGlvbiA9IChwMSwgcDIsIHAzLCBwNCkgPT4ge1xyXG4gIGlmIChwMlswXSAtIHAxWzBdID09PSAwKSB7XHJcbiAgICBjb25zdCB4ID0gcDFbMF07XHJcblxyXG4gICAgY29uc3QgbTIgPSAocDRbMV0gLSBwM1sxXSkgLyAocDRbMF0gLSBwM1swXSk7XHJcbiAgICBjb25zdCBiMiA9IHAzWzFdIC0gbTIgKiBwM1swXTtcclxuXHJcbiAgICBjb25zdCB5ID0gbTIgKiB4ICsgYjI7XHJcbiAgICByZXR1cm4gW3gsIHldO1xyXG4gIH1cclxuICBpZiAocDRbMF0gLSBwM1swXSA9PT0gMCkge1xyXG4gICAgY29uc3QgeCA9IHAzWzBdO1xyXG5cclxuICAgIGNvbnN0IG0xID0gKHAyWzFdIC0gcDFbMV0pIC8gKHAyWzBdIC0gcDFbMF0pO1xyXG4gICAgY29uc3QgYjEgPSBwMVsxXSAtIG0xICogcDFbMF07XHJcblxyXG4gICAgY29uc3QgeSA9IG0xICogeCArIGIxO1xyXG5cclxuICAgIHJldHVybiBbeCwgeV07XHJcbiAgfVxyXG4gIGNvbnN0IG0xID0gKHAyWzFdIC0gcDFbMV0pIC8gKHAyWzBdIC0gcDFbMF0pO1xyXG4gIGNvbnN0IGIxID0gcDFbMV0gLSBtMSAqIHAxWzBdO1xyXG5cclxuICBjb25zdCBtMiA9IChwNFsxXSAtIHAzWzFdKSAvIChwNFswXSAtIHAzWzBdKTtcclxuICBjb25zdCBiMiA9IHAzWzFdIC0gbTIgKiBwM1swXTtcclxuXHJcbiAgY29uc3QgeCA9IChiMiAtIGIxKSAvIChtMSAtIG0yKTtcclxuXHJcbiAgY29uc3QgeSA9IG0xICogeCArIGIxO1xyXG5cclxuICByZXR1cm4gW3gsIHldO1xyXG59O1xyXG5cclxuY29uc3QgY2xpcFBvbHlWc1BvbHkgPSAoQSwgQikgPT4ge1xyXG4gIGxldCByZXN1bHQgPSBbLi4uQV07XHJcblxyXG4gIGZvciAobGV0IGkgPSAwLCBuID0gQi5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgIGNvbnN0IG5leHQgPSBbLi4ucmVzdWx0XTtcclxuICAgIHJlc3VsdCA9IFtdO1xyXG4gICAgY29uc3QgYUVkZ2UxID0gQi5hdChpIC0gMSk7XHJcbiAgICBjb25zdCBhRWRnZTIgPSBCLmF0KGkpO1xyXG5cclxuICAgIGZvciAobGV0IGogPSAwLCBfbiA9IG5leHQubGVuZ3RoOyBqIDwgX247IGorKykge1xyXG4gICAgICBjb25zdCBiRWRnZTEgPSBuZXh0LmF0KGogLSAxKTtcclxuICAgICAgY29uc3QgYkVkZ2UyID0gbmV4dC5hdChqKTtcclxuXHJcbiAgICAgIGlmIChpc0luc2lkZShhRWRnZTEsIGFFZGdlMiwgYkVkZ2UyKSkge1xyXG4gICAgICAgIGlmICghaXNJbnNpZGUoYUVkZ2UxLCBhRWRnZTIsIGJFZGdlMSkpIHtcclxuICAgICAgICAgIGNvbnN0IGludGVyc2VjdGlvbiA9IGNvbXB1dGVJbnRlcnNlY3Rpb24oXHJcbiAgICAgICAgICAgIGJFZGdlMSxcclxuICAgICAgICAgICAgYkVkZ2UyLFxyXG4gICAgICAgICAgICBhRWRnZTEsXHJcbiAgICAgICAgICAgIGFFZGdlMlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIHJlc3VsdC5wdXNoKGludGVyc2VjdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlc3VsdC5wdXNoKGJFZGdlMik7XHJcbiAgICAgICAgY29udGludWU7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGlzSW5zaWRlKGFFZGdlMSwgYUVkZ2UyLCBiRWRnZTEpKSB7XHJcbiAgICAgICAgY29uc3QgaW50ZXJzZWN0aW9uID0gY29tcHV0ZUludGVyc2VjdGlvbihcclxuICAgICAgICAgIGJFZGdlMSxcclxuICAgICAgICAgIGJFZGdlMixcclxuICAgICAgICAgIGFFZGdlMSxcclxuICAgICAgICAgIGFFZGdlMlxyXG4gICAgICAgICk7XHJcbiAgICAgICAgcmVzdWx0LnB1c2goaW50ZXJzZWN0aW9uKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG5cclxuY29uc3QgbGVycCA9IChhLCBiLCB0KSA9PiBhICsgKGIgLSBhKSAqIHQ7XHJcblxyXG5jb25zdCBjbGlwU2VnbWVudFZzU2VnbWVudCA9IChzMSwgczIpID0+IHtcclxuICBjb25zdCBbcDEsIHAyXSA9IHMxXHJcbiAgY29uc3QgW3AzLCBwNF0gPSBzMlxyXG4gIGNvbnN0IHRvcCA9XHJcbiAgICAocDRbMF0gLSBwM1swXSkgKiAocDFbMV0gLSBwM1sxXSkgLSAocDRbMV0gLSBwM1sxXSkgKiAocDFbMF0gLSBwM1swXSk7XHJcbiAgY29uc3QgYm90dG9tID1cclxuICAgIChwNFsxXSAtIHAzWzFdKSAqIChwMlswXSAtIHAxWzBdKSAtIChwNFswXSAtIHAzWzBdKSAqIChwMlsxXSAtIHAxWzFdKTtcclxuICBpZiAoIWJvdHRvbSkgcmV0dXJuIG51bGw7XHJcbiAgY29uc3QgdCA9IHRvcCAvIGJvdHRvbTtcclxuICBpZiAodCA8IDAgfHwgdCA+IDEpIHJldHVybiBudWxsO1xyXG4gIHJldHVybiBbbGVycChwMVswXSwgcDJbMF0sIHQpLCBsZXJwKHAxWzFdLCBwMlsxXSwgdCldO1xyXG59O1xyXG5cclxuY29uc3QgY2xpcFBvaW50VnNQb2x5ID0gKHBvaW50LCB2ZXJ0aWNlcykgPT4ge1xyXG4gIGNvbnN0IHggPSBwb2ludFswXTtcclxuICBjb25zdCB5ID0gcG9pbnRbMV07XHJcblxyXG4gIGxldCBpbnNpZGUgPSBmYWxzZTtcclxuICBmb3IgKGxldCBpID0gMCwgaiA9IHZlcnRpY2VzLmxlbmd0aCAtIDE7IGkgPCB2ZXJ0aWNlcy5sZW5ndGg7IGogPSBpKyspIHtcclxuICAgIGNvbnN0IHhpID0gdmVydGljZXNbaV1bMF0sXHJcbiAgICAgIHlpID0gdmVydGljZXNbaV1bMV07XHJcbiAgICBjb25zdCB4aiA9IHZlcnRpY2VzW2pdWzBdLFxyXG4gICAgICB5aiA9IHZlcnRpY2VzW2pdWzFdO1xyXG5cclxuICAgIGNvbnN0IGludGVyc2VjdCA9XHJcbiAgICAgIHlpID4geSAhPSB5aiA+IHkgJiYgeCA8ICgoeGogLSB4aSkgKiAoeSAtIHlpKSkgLyAoeWogLSB5aSkgKyB4aTtcclxuICAgIGlmIChpbnRlcnNlY3QpIGluc2lkZSA9ICFpbnNpZGU7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gaW5zaWRlO1xyXG59O1xyXG5jb25zdCBjbGlwU2VnbWVudFZzUG9seSA9IChzZWdtZW50LCBwb2x5KSA9PiB7XHJcbiAgY29uc3QgW3AxLCBwMl0gPSBzZWdtZW50O1xyXG4gIGNvbnN0IHBvaW50cyA9IFtdO1xyXG4gIGlmIChjbGlwUG9pbnRWc1BvbHkocDEsIHBvbHkpKSBwb2ludHMucHVzaChwMSk7XHJcbiAgaWYgKGNsaXBQb2ludFZzUG9seShwMiwgcG9seSkpIHBvaW50cy5wdXNoKHAyKTtcclxuICBpZiAocG9pbnRzLmxlbmd0aCA+IDEpIHJldHVybiBwb2ludHM7XHJcbiAgZm9yIChsZXQgaSA9IDAsIG4gPSBwb2x5Lmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgY29uc3QgcTEgPSBwb2x5LmF0KGkgLSAxKTtcclxuICAgIGNvbnN0IHEyID0gcG9seS5hdChpKTtcclxuICAgIGNvbnN0IGludGVyc2VjdGlvbiA9IGNsaXBTZWdtZW50VnNTZWdtZW50KHAxLCBwMiwgcTEsIHEyKTtcclxuICAgIGlmIChpbnRlcnNlY3Rpb24pIHBvaW50cy5wdXNoKGludGVyc2VjdGlvbik7XHJcbiAgfVxyXG4gIHJldHVybiBwb2ludHM7XHJcbn07XHJcblxyXG5cclxuY29uc3QgZmFjZUludGVyc2VjdGlvbnNNYXAgPSB7XHJcbiAgJ3BvbHlfcG9seScgOiBjbGlwUG9seVZzUG9seSxcclxuICAnc2VnbWVudF9wb2x5JyA6IGNsaXBTZWdtZW50VnNQb2x5LFxyXG4gICdwb2x5X3NlZ21lbnQnIDogKHBvbHksIHNlZ21lbnQpID0+IGNsaXBTZWdtZW50VnNQb2x5KHNlZ21lbnQsIHBvbHkpLFxyXG4gICdzZWdtZW50X3NlZ21lbnQnIDooczEsIHMyKSA9PiB7XHJcbiAgICBjb25zdCByZXMgPSBjbGlwU2VnbWVudFZzU2VnbWVudChzMSxzMilcclxuICAgIGlmKHJlcykgcmV0dXJuIFtyZXNdXHJcbiAgICByZXR1cm4gW11cclxuICB9LFxyXG4gICdwb2ludF9wb2x5JyA6IGNsaXBQb2ludFZzUG9seSxcclxuICAncG9seV9wb2ludCcgOiAocG9seSwgcG9pbnQpID0+IGNsaXBQb2ludFZzUG9seShwb2ludCwgcG9seSksXHJcbn1cclxuY29uc3QgZ2V0RmFjZVR5cGUgPSAoZmFjZSkgPT57XHJcbiAgaWYoZmFjZS5sZW5ndGggPiAyKSByZXR1cm4gJ3BvbHknXHJcbiAgaWYoZmFjZS5sZW5ndGggPT09IDIpIHJldHVybiAnc2VnbWVudCdcclxuICByZXR1cm4gJ3BvaW50J1xyXG59XHJcbmNvbnN0IGNsaXBGYWNlVnNGYWNlID0gKGZhY2UxLCBmYWNlMikgPT57XHJcbiAgY29uc3QgdHlwZXMgPSBgJHtnZXRGYWNlVHlwZShmYWNlMSl9XyR7Z2V0RmFjZVR5cGUoZmFjZTIpfWBcclxuICByZXR1cm4gZmFjZUludGVyc2VjdGlvbnNNYXBbdHlwZXNdKGZhY2UxLCBmYWNlMikgXHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgY2xpcFNlZ21lbnRWc1NlZ21lbnQsXHJcbiAgaXNJbnNpZGUsXHJcbiAgY29tcHV0ZUludGVyc2VjdGlvbixcclxuICBjbGlwUG9seVZzUG9seSxcclxuICBjbGlwRmFjZVZzRmFjZSxcclxuICBpc0luQ2xvY2t3aXNlLFxyXG4gIGNsaXBTZWdtZW50VnNQb2x5LFxyXG4gIGNsaXBQb2ludFZzUG9seSxcclxufTtcclxuIiwiaW1wb3J0IHsgdmVjMywgbTQsIG0zLCBBQUJCIH0gZnJvbSBcIm1hdGhcIjtcclxuXHJcbmNvbnN0IHsgc2NhbGUsIHN1bSwgZGlmZiwgZG90LCBub3JtYWxpemUgfSA9IHZlYzM7XHJcblxyXG5jb25zdCB4QXhpcyA9IFsxLCAwLCAwXTtcclxuY29uc3QgeUF4aXMgPSBbMCwgMSwgMF07XHJcbmNvbnN0IHpBeGlzID0gWzAsIDAsIDFdO1xyXG5jb25zdCB4QXhpc05lZ2F0aXZlID0gc2NhbGUoeEF4aXMsIC0xKTtcclxuY29uc3QgeUF4aXNOZWdhdGl2ZSA9IHNjYWxlKHlBeGlzLCAtMSk7XHJcbmNvbnN0IHpBeGlzTmVnYXRpdmUgPSBzY2FsZSh6QXhpcywgLTEpO1xyXG5cclxuY2xhc3MgQ29sbGlkZXIge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5SbWF0cml4ID0gbTMuaWRlbnRpdHkoKTtcclxuICAgIHRoaXMuUm1hdHJpeEludmVyc2UgPSBtMy5pZGVudGl0eSgpO1xyXG4gICAgdGhpcy5wb3MgPSBbMCwgMCwgMF07XHJcbiAgfVxyXG4gIHRyYW5zbGF0ZSh2KSB7XHJcbiAgICB0aGlzLnBvcyA9IHN1bSh0aGlzLnBvcywgdik7XHJcbiAgfVxyXG4gIHNldFRyYW5zbGF0aW9uKHRyYW5zbGF0aW9uKSB7XHJcbiAgICB0aGlzLnBvcyA9IFsuLi50cmFuc2xhdGlvbl07XHJcbiAgfVxyXG4gIHJvdGF0ZShyKSB7XHJcbiAgICB0aGlzLlJtYXRyaXggPSBtMy54Um90YXRlKHRoaXMuUm1hdHJpeCwgclswXSk7XHJcbiAgICB0aGlzLlJtYXRyaXggPSBtMy55Um90YXRlKHRoaXMuUm1hdHJpeCwgclsxXSk7XHJcbiAgICB0aGlzLlJtYXRyaXggPSBtMy56Um90YXRlKHRoaXMuUm1hdHJpeCwgclsyXSk7XHJcbiAgICB0aGlzLlJtYXRyaXhJbnZlcnNlID0gbTMudHJhbnNwb3NlKHRoaXMuUm1hdHJpeCk7XHJcbiAgfVxyXG4gIHNldFJvdGF0aW9uKHIpIHtcclxuICAgIHRoaXMuUm1hdHJpeCA9IG0zLnhSb3RhdGlvbihyWzBdKTtcclxuICAgIHRoaXMuUm1hdHJpeCA9IG0zLnlSb3RhdGUodGhpcy5SbWF0cml4LCByWzFdKTtcclxuICAgIHRoaXMuUm1hdHJpeCA9IG0zLnpSb3RhdGUodGhpcy5SbWF0cml4LCByWzJdKTtcclxuICAgIHRoaXMuUm1hdHJpeEludmVyc2UgPSBtMy50cmFuc3Bvc2UodGhpcy5SbWF0cml4KTtcclxuICB9XHJcbiAgZ2V0QUFCQigpIHtcclxuICAgIGNvbnN0IG1heFggPSB0aGlzLnN1cHBvcnQoeEF4aXMpWzBdO1xyXG4gICAgY29uc3QgbWF4WSA9IHRoaXMuc3VwcG9ydCh5QXhpcylbMV07XHJcbiAgICBjb25zdCBtYXhaID0gdGhpcy5zdXBwb3J0KHpBeGlzKVsyXTtcclxuXHJcbiAgICBjb25zdCBtaW5YID0gdGhpcy5zdXBwb3J0KHhBeGlzTmVnYXRpdmUpWzBdO1xyXG4gICAgY29uc3QgbWluWSA9IHRoaXMuc3VwcG9ydCh5QXhpc05lZ2F0aXZlKVsxXTtcclxuICAgIGNvbnN0IG1pblogPSB0aGlzLnN1cHBvcnQoekF4aXNOZWdhdGl2ZSlbMl07XHJcbiAgICByZXR1cm4gbmV3IEFBQkIoW21pblgsIG1pblksIG1pblpdLCBbbWF4WCwgbWF4WSwgbWF4Wl0pO1xyXG4gIH1cclxuICBzZXRSbWF0cml4KG1hdHJpeCkge1xyXG4gICAgdGhpcy5SbWF0cml4ID0gWy4uLm1hdHJpeF07XHJcblxyXG4gICAgdGhpcy5SbWF0cml4SW52ZXJzZSA9IG0zLnRyYW5zcG9zZShtYXRyaXgpO1xyXG4gIH1cclxuICBnZXRNNCgpIHtcclxuICAgIGNvbnN0IG0gPSBtNC5tM1RvbTQodGhpcy5SbWF0cml4KTtcclxuICAgIG1bMTJdID0gdGhpcy5wb3NbMF07XHJcbiAgICBtWzEzXSA9IHRoaXMucG9zWzFdO1xyXG4gICAgbVsxNF0gPSB0aGlzLnBvc1syXTtcclxuICAgIG1bMTVdID0gMTtcclxuICAgIHJldHVybiBtO1xyXG4gIH1cclxuICBsb2NhbFRvR2xvYmFsKHYpIHtcclxuICAgIGxldCBnbG9iYWwgPSBtMy50cmFuc2Zvcm1Qb2ludCh0aGlzLlJtYXRyaXgsIHYpO1xyXG4gICAgcmV0dXJuIHN1bSh0aGlzLnBvcywgZ2xvYmFsKTtcclxuICB9XHJcbiAgZ2V0Q2xvc2VzdEZhY2Uobm9ybWFsKSB7fVxyXG4gIGdldEludmVyc2VJbmVydGlhVGVuc29yKG1hc3MpIHtcclxuICAgIHJldHVybiBuZXcgQXJyYXkoOSkuZmlsbCgwKTtcclxuICB9XHJcbn1cclxuXHJcbmNsYXNzIEJveCBleHRlbmRzIENvbGxpZGVyIHtcclxuICBjb25zdHJ1Y3RvcihhID0gMSwgYiA9IDEsIGMgPSAxKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5taW4gPSBbLWEgLyAyLCAtYiAvIDIsIC1jIC8gMl07XHJcbiAgICB0aGlzLm1heCA9IFthIC8gMiwgYiAvIDIsIGMgLyAyXTtcclxuICAgIHRoaXMucG9pbnRzID0gW1xyXG4gICAgICBbLTEgLyAyLCAtMSAvIDIsIC0xIC8gMl0sXHJcbiAgICAgIFsxIC8gMiwgLTEgLyAyLCAtMSAvIDJdLFxyXG4gICAgICBbMSAvIDIsIC0xIC8gMiwgMSAvIDJdLFxyXG4gICAgICBbLTEgLyAyLCAtMSAvIDIsIDEgLyAyXSxcclxuICAgICAgWy0xIC8gMiwgMSAvIDIsIC0xIC8gMl0sXHJcbiAgICAgIFsxIC8gMiwgMSAvIDIsIC0xIC8gMl0sXHJcbiAgICAgIFsxIC8gMiwgMSAvIDIsIDEgLyAyXSxcclxuICAgICAgWy0xIC8gMiwgMSAvIDIsIDEgLyAyXSxcclxuICAgIF07XHJcbiAgICB0aGlzLmluZGljZXMgPSBbXHJcbiAgICAgIFswLCA0LCA1LCAxXSwgLy8gLXpcclxuICAgICAgWzMsIDcsIDYsIDJdLCAvLyArelxyXG4gICAgICBbMCwgMSwgMiwgM10sIC8vIC15XHJcbiAgICAgIFs0LCA1LCA2LCA3XSwgLy8gK3lcclxuICAgICAgWzAsIDMsIDcsIDRdLCAvLyAteFxyXG4gICAgICBbMSwgMiwgNiwgNV0sIC8vICt4XHJcbiAgICBdO1xyXG4gICAgdGhpcy5ub3JtYWxzID0gW1xyXG4gICAgICBbMCwgMCwgLTFdLFxyXG4gICAgICBbMCwgMCwgMV0sXHJcbiAgICAgIFswLCAtMSwgMF0sXHJcbiAgICAgIFswLCAxLCAwXSxcclxuICAgICAgWy0xLCAwLCAwXSxcclxuICAgICAgWzEsIDAsIDBdLFxyXG4gICAgXTtcclxuICB9XHJcblxyXG4gIGdldEFBQkIoKSB7XHJcbiAgICBjb25zdCBtYXhYID0gdGhpcy5zdXBwb3J0KHhBeGlzKVswXTtcclxuICAgIGNvbnN0IG1heFkgPSB0aGlzLnN1cHBvcnQoeUF4aXMpWzFdO1xyXG4gICAgY29uc3QgbWF4WiA9IHRoaXMuc3VwcG9ydCh6QXhpcylbMl07XHJcblxyXG4gICAgY29uc3QgbWluWCA9IHRoaXMuc3VwcG9ydCh4QXhpc05lZ2F0aXZlKVswXTtcclxuICAgIGNvbnN0IG1pblkgPSB0aGlzLnN1cHBvcnQoeUF4aXNOZWdhdGl2ZSlbMV07XHJcbiAgICBjb25zdCBtaW5aID0gdGhpcy5zdXBwb3J0KHpBeGlzTmVnYXRpdmUpWzJdO1xyXG4gICAgcmV0dXJuIG5ldyBBQUJCKFttaW5YLCBtaW5ZLCBtaW5aXSwgW21heFgsIG1heFksIG1heFpdKTtcclxuICB9XHJcblxyXG4gIHN1cHBvcnQoZGlyKSB7XHJcbiAgICBjb25zdCBfZGlyID0gbTMudHJhbnNmb3JtUG9pbnQodGhpcy5SbWF0cml4SW52ZXJzZSwgZGlyKTtcclxuXHJcbiAgICBjb25zdCByZXMgPSBbMCwgMCwgMF07XHJcblxyXG4gICAgcmVzWzBdID0gX2RpclswXSA+IDAgPyB0aGlzLm1heFswXSA6IHRoaXMubWluWzBdO1xyXG4gICAgcmVzWzFdID0gX2RpclsxXSA+IDAgPyB0aGlzLm1heFsxXSA6IHRoaXMubWluWzFdO1xyXG4gICAgcmVzWzJdID0gX2RpclsyXSA+IDAgPyB0aGlzLm1heFsyXSA6IHRoaXMubWluWzJdO1xyXG5cclxuICAgIGNvbnN0IHN1cCA9IG0zLnRyYW5zZm9ybVBvaW50KHRoaXMuUm1hdHJpeCwgcmVzKTtcclxuXHJcbiAgICByZXR1cm4gc3VtKHN1cCwgdGhpcy5wb3MpO1xyXG4gIH1cclxuICBnZXRJbnZlcnNlSW5lcnRpYVRlbnNvcihtYXNzKSB7XHJcbiAgICBjb25zdCBpMSA9XHJcbiAgICAgIChtYXNzIC8gMTIpICogKHRoaXMubWF4WzFdICogdGhpcy5tYXhbMV0gKyB0aGlzLm1heFsyXSAqIHRoaXMubWF4WzJdKTtcclxuICAgIGNvbnN0IGkyID1cclxuICAgICAgKG1hc3MgLyAxMikgKiAodGhpcy5tYXhbMF0gKiB0aGlzLm1heFswXSArIHRoaXMubWF4WzJdICogdGhpcy5tYXhbMl0pO1xyXG4gICAgY29uc3QgaTMgPVxyXG4gICAgICAobWFzcyAvIDEyKSAqICh0aGlzLm1heFswXSAqIHRoaXMubWF4WzBdICsgdGhpcy5tYXhbMV0gKiB0aGlzLm1heFsxXSk7XHJcblxyXG4gICAgY29uc3QgbSA9IG0zLm11bHRpcGx5KFxyXG4gICAgICBtMy5tdWx0aXBseSh0aGlzLlJtYXRyaXhJbnZlcnNlLCBbMSAvIGkxLCAwLCAwLCAwLCAxIC8gaTIsIDAsIDAsIDAsIDEgLyBpM10pLFxyXG4gICAgICB0aGlzLlJtYXRyaXhcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIG07XHJcbiAgfVxyXG4gIGdldE00KCkge1xyXG4gICAgY29uc3QgbSA9IG00Lm0zVG9tNCh0aGlzLlJtYXRyaXgpO1xyXG4gICAgbVsxMl0gPSB0aGlzLnBvc1swXTtcclxuICAgIG1bMTNdID0gdGhpcy5wb3NbMV07XHJcbiAgICBtWzE0XSA9IHRoaXMucG9zWzJdO1xyXG4gICAgbVsxNV0gPSAxO1xyXG4gICAgY29uc3Qgc2NhbGUgPSBkaWZmKHRoaXMubWF4LCB0aGlzLm1pbik7XHJcbiAgICByZXR1cm4gbTQuc2NhbGUobSwgLi4uc2NhbGUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q2xvc2VzdEZhY2VCeU5vcm1hbChub3JtYWwpIHtcclxuICAgIGNvbnN0IHsgcG9pbnRzLCBpbmRpY2VzLCBSbWF0cml4IH0gPSB0aGlzO1xyXG4gICAgY29uc3Qgbm9ybWFscyA9IHRoaXMubm9ybWFscy5tYXAoKG4pID0+IG0zLnRyYW5zZm9ybVBvaW50KHRoaXMuUm1hdHJpeCwgbikpO1xyXG4gICAgbGV0IG1pbkRvdCA9IGRvdChub3JtYWwsIG5vcm1hbHNbMF0pO1xyXG4gICAgbGV0IGluZGV4ID0gMDtcclxuICAgIGZvciAobGV0IGkgPSAxLCBuID0gbm9ybWFscy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgLy9jb25zdCBfbm9ybWFsID0gbTMudHJhbnNmb3JtUG9pbnQoUm1hdHJpeCwgbm9ybWFsc1tpXSlcclxuICAgICAgY29uc3QgX2RvdCA9IGRvdChub3JtYWxzW2ldLCBub3JtYWwpO1xyXG4gICAgICBpZiAoX2RvdCA8IG1pbkRvdCkge1xyXG4gICAgICAgIG1pbkRvdCA9IF9kb3Q7XHJcbiAgICAgICAgaW5kZXggPSBpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBmYWNlSW5kaWNlcyA9IGluZGljZXNbaW5kZXhdO1xyXG4gICAgY29uc3QgbSA9IHRoaXMuZ2V0TTQoKTtcclxuICAgIHJldHVybiBbXHJcbiAgICAgIGZhY2VJbmRpY2VzLm1hcCgoaSkgPT4gbTQudHJhbnNmb3JtUG9pbnQobSwgcG9pbnRzW2ldKSksXHJcbiAgICAgIG5vcm1hbHNbaW5kZXhdLFxyXG4gICAgXTtcclxuICB9XHJcbn1cclxuY2xhc3MgU3BoZXJlIGV4dGVuZHMgQ29sbGlkZXIge1xyXG4gIGNvbnN0cnVjdG9yKHJhZGl1cyA9IDEpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLnJhZGl1cyA9IHJhZGl1cztcclxuICAgIHRoaXMudHlwZSA9IFwic3BoZXJlXCI7XHJcbiAgfVxyXG4gIGdldEFBQkIoKSB7XHJcbiAgICBjb25zdCB7IHJhZGl1cyB9ID0gdGhpcztcclxuICAgIHJldHVybiBuZXcgQUFCQihcclxuICAgICAgc3VtKHRoaXMucG9zLCBbLXJhZGl1cywgLXJhZGl1cywgLXJhZGl1c10pLFxyXG4gICAgICBzdW0odGhpcy5wb3MsIFtyYWRpdXMsIHJhZGl1cywgcmFkaXVzXSlcclxuICAgICk7XHJcbiAgfVxyXG4gIHN1cHBvcnQoZGlyKSB7XHJcbiAgICByZXR1cm4gc3VtKHNjYWxlKG5vcm1hbGl6ZShkaXIpLCB0aGlzLnJhZGl1cyksIHRoaXMucG9zKTtcclxuICB9XHJcbiAgZ2V0TTQoKSB7XHJcbiAgICBjb25zdCBtID0gbTQubTNUb200KHRoaXMuUm1hdHJpeCk7XHJcbiAgICBtWzEyXSA9IHRoaXMucG9zWzBdO1xyXG4gICAgbVsxM10gPSB0aGlzLnBvc1sxXTtcclxuICAgIG1bMTRdID0gdGhpcy5wb3NbMl07XHJcbiAgICBtWzE1XSA9IDE7XHJcbiAgICBjb25zdCB7IHJhZGl1cyB9ID0gdGhpcztcclxuICAgIHJldHVybiBtNC5zY2FsZShtLCByYWRpdXMsIHJhZGl1cywgcmFkaXVzKTtcclxuICB9XHJcbiAgZ2V0Q2xvc2VzdEZhY2VCeU5vcm1hbChub3JtYWwpIHtcclxuICAgIGNvbnN0IHJldmVyc2UgPSBzY2FsZShub3JtYWwsIC0xKTtcclxuICAgIHJldHVybiBbW3NjYWxlKHJldmVyc2UsIHRoaXMucmFkaXVzKV0sIHJldmVyc2VdO1xyXG4gIH1cclxuICBnZXRJbnZlcnNlSW5lcnRpYVRlbnNvcihtYXNzKSB7XHJcbiAgICBjb25zdCB7IHJhZGl1cyB9ID0gdGhpcztcclxuICAgIGNvbnN0IG0gPSBbXHJcbiAgICAgICgyICogbWFzcyAqIHJhZGl1cyAqIHJhZGl1cykgLyA1LFxyXG4gICAgICAwLFxyXG4gICAgICAwLFxyXG4gICAgICAwLFxyXG4gICAgICAoMiAqIG1hc3MgKiByYWRpdXMgKiByYWRpdXMpIC8gNSxcclxuICAgICAgMCxcclxuICAgICAgMCxcclxuICAgICAgMCxcclxuICAgICAgKDIgKiBtYXNzICogcmFkaXVzICogcmFkaXVzKSAvIDUsXHJcbiAgICBdO1xyXG4gICAgcmV0dXJuIG07XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBudW1TZWdtZW50cyA9IDY7XHJcbmNvbnN0IHNlZ21lbnRBbmdsZSA9ICgyICogTWF0aC5QSSkgLyBudW1TZWdtZW50cztcclxuY29uc3QgY2lyY2xlUG9pbnRzID0gWy4uLm5ldyBBcnJheShudW1TZWdtZW50cyldLm1hcCgoXywgaSkgPT4gW1xyXG4gIE1hdGguY29zKGkgKiBzZWdtZW50QW5nbGUpLFxyXG4gIDAsXHJcbiAgTWF0aC5zaW4oaSAqIHNlZ21lbnRBbmdsZSksXHJcbl0pO1xyXG5cclxuY2xhc3MgQ3lsaW5kZXIgZXh0ZW5kcyBDb2xsaWRlciB7XHJcbiAgY29uc3RydWN0b3IoIHJhZGl1cywgaGVpZ2h0KSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5yYWRpdXMgPSByYWRpdXM7XHJcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcclxuICB9XHJcbiAgc3VwcG9ydChkaXIpIHtcclxuICAgIGNvbnN0IF9kaXIgPSBtMy50cmFuc2Zvcm1Qb2ludCh0aGlzLlJtYXRyaXhJbnZlcnNlLCBkaXIpOyAvL2ZpbmQgc3VwcG9ydCBpbiBtb2RlbCBzcGFjZVxyXG5cclxuICAgIGNvbnN0IGRpcl94eiA9IFtfZGlyWzBdLCAwLCBfZGlyWzJdXTtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHNjYWxlKG5vcm1hbGl6ZShkaXJfeHopLCB0aGlzLnJhZGl1cyk7XHJcbiAgICByZXN1bHRbMV0gPSBfZGlyWzFdID4gMCA/IHRoaXMuaGVpZ2h0IC8gMiA6IC10aGlzLmhlaWdodCAvIDI7XHJcblxyXG4gICAgcmV0dXJuIHN1bShtMy50cmFuc2Zvcm1Qb2ludCh0aGlzLlJtYXRyaXgsIHJlc3VsdCksIHRoaXMucG9zKTsgLy9jb252ZXJ0IHN1cHBvcnQgdG8gd29ybGQgc3BhY2VcclxuICB9XHJcbiAgZ2V0TTQoKSB7XHJcbiAgICBjb25zdCBtID0gbTQubTNUb200KHRoaXMuUm1hdHJpeCk7XHJcbiAgICBtWzEyXSA9IHRoaXMucG9zWzBdO1xyXG4gICAgbVsxM10gPSB0aGlzLnBvc1sxXTtcclxuICAgIG1bMTRdID0gdGhpcy5wb3NbMl07XHJcbiAgICBtWzE1XSA9IDE7XHJcbiAgICBjb25zdCB7IHJhZGl1cywgaGVpZ2h0IH0gPSB0aGlzO1xyXG4gICAgcmV0dXJuIG00LnNjYWxlKG0sIHJhZGl1cywgaGVpZ2h0LCByYWRpdXMpO1xyXG4gIH1cclxuICBnZXRDbG9zZXN0RmFjZUJ5Tm9ybWFsKG5vcm1hbCkge1xyXG4gICAgY29uc3QgeyByYWRpdXMsIGhlaWdodCwgUm1hdHJpeCwgUm1hdHJpeEludmVyc2UgfSA9IHRoaXM7XHJcbiAgICBjb25zdCBfbm9ybWFsID0gbTMudHJhbnNmb3JtUG9pbnQoUm1hdHJpeEludmVyc2UsIHNjYWxlKG5vcm1hbCwgLTEpKTtcclxuICAgIGNvbnN0IG0gPSB0aGlzLmdldE00KClcclxuICAgIGNvbnN0IGNvcyA9IGRvdChfbm9ybWFsLCBbMCwgMSwgMF0pO1xyXG4gICAgY29uc3Qgc2lnbiA9IE1hdGguc2lnbihjb3MpO1xyXG4gICAgXHJcbiAgICBpZiAoY29zICogc2lnbiA8IDAuNzA3KSB7XHJcbiAgICAgIGNvbnN0IGxvY2FsTm9ybWFsID0gbm9ybWFsaXplKFtfbm9ybWFsWzBdLCAwLCBfbm9ybWFsWzJdXSk7XHJcbiAgICAgIGNvbnN0IGZhY2UgPSBbXHJcbiAgICAgICAgbTQudHJhbnNmb3JtUG9pbnQobSwgW19ub3JtYWxbMF0gLCAwLjUsIF9ub3JtYWxbMl0gXSksXHJcbiAgICAgICAgbTQudHJhbnNmb3JtUG9pbnQobSwgW19ub3JtYWxbMF0sIC0wLjUsIF9ub3JtYWxbMl0gXSlcclxuICAgICAgXTtcclxuXHJcbiAgICAgIHJldHVybiBbZmFjZSwgbTMudHJhbnNmb3JtUG9pbnQoUm1hdHJpeCwgbG9jYWxOb3JtYWwpXVxyXG4gICAgfVxyXG4gICAgY29uc3QgbG9jYWxOb3JtYWwgPSBzY2FsZShbMCwgMSwgMF0sIHNpZ24pO1xyXG4gICAgY29uc3QgZmFjZSA9IGNpcmNsZVBvaW50cy5tYXAocCA9PiBtNC50cmFuc2Zvcm1Qb2ludChtLCBbcFswXSwgc2lnbiAqIDAuNSAgLCBwWzJdIF0pKVxyXG4gICBcclxuICAgIHJldHVybiBbZmFjZSwgbTMudHJhbnNmb3JtUG9pbnQoUm1hdHJpeCwgbG9jYWxOb3JtYWwpXVxyXG4gIH1cclxuICBnZXRJbnZlcnNlSW5lcnRpYVRlbnNvcihtYXNzKSB7XHJcbiAgICBjb25zdCB7IHJhZGl1cywgaGVpZ2h0IH0gPSB0aGlzO1xyXG4gICAgY29uc3QgaTEgPVxyXG4gICAgICBtYXNzIC8gMTIgKiAoMypyYWRpdXMqcmFkaXVzICsgaGVpZ2h0KmhlaWdodClcclxuICAgXHJcbiAgICBjb25zdCBpMyA9XHJcbiAgICAgIG1hc3MvMiAqcmFkaXVzKnJhZGl1c1xyXG5cclxuICAgIGNvbnN0IG0gPSBtMy5tdWx0aXBseShcclxuICAgICAgbTMubXVsdGlwbHkodGhpcy5SbWF0cml4LCBbMS9pMSwgMCwgMCwgMCwgMS9pMSwgMCwgMCwgMCwgMS9pM10pLFxyXG4gICAgICB0aGlzLlJtYXRyaXhJbnZlcnNlXHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiBtO1xyXG4gIH1cclxuICBnZXRBQUJCKCkge1xyXG4gICAgY29uc3QgeyByYWRpdXMsIGhlaWdodCB9ID0gdGhpcztcclxuICAgIHJldHVybiBuZXcgQUFCQihcclxuICAgICAgc3VtKHRoaXMucG9zLCBbLXJhZGl1cywgLWhlaWdodCwgLXJhZGl1c10pLFxyXG4gICAgICBzdW0odGhpcy5wb3MsIFtyYWRpdXMsIGhlaWdodCwgcmFkaXVzXSlcclxuICAgICk7XHJcbiAgfVxyXG59XHJcbmV4cG9ydCB7IEJveCwgU3BoZXJlLCBDeWxpbmRlcn07XHJcbiIsImltcG9ydCB7IHZlYzMsIG0zIH0gZnJvbSBcIm1hdGhcIjtcclxuXHJcbmNvbnN0IHsgZG90LCBjcm9zcywgbm9ybWFsaXplLCBkaWZmLCBzY2FsZSwgbm9ybSwgc3VtLCBub3JtU3EgfSA9IHZlYzM7XHJcbmNvbnN0IGNsYW1wID0gKHYsIG1pbiwgbWF4KSA9PiB7XHJcbiAgaWYgKHYgPiBtaW4pIHtcclxuICAgIGlmICh2IDwgbWF4KSByZXR1cm4gdjtcclxuICAgIGVsc2UgcmV0dXJuIG1heDtcclxuICB9XHJcbiAgcmV0dXJuIG1pbjtcclxufTtcclxuY2xhc3MgQ29uc3RyYWludCB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBib2R5MSxcclxuICAgIGJvZHkyLFxyXG4gICAgbixcclxuICAgIHJhLFxyXG4gICAgcmIsXHJcbiAgICByYUxvY2FsLFxyXG4gICAgcmJMb2NhbCxcclxuICAgIGJpYXNGYWN0b3IgPSAwLFxyXG4gICAgbGFtYmRhTWluID0gLUluZmluaXR5LFxyXG4gICAgbGFtYmRhTWF4ID0gSW5maW5pdHksXHJcbiAgICB0cmVzaG9sZCA9IDAuMDAwMDAxXHJcbiAgKSB7XHJcbiAgICB0aGlzLmJpYXNGYWN0b3IgPSBiaWFzRmFjdG9yO1xyXG4gICAgdGhpcy5uID0gbjtcclxuICAgIHRoaXMuSiA9IG51bGw7XHJcblxyXG4gICAgdGhpcy5KTSA9IG51bGw7XHJcbiAgICB0aGlzLkIgPSBudWxsO1xyXG4gICAgdGhpcy5ib2R5MSA9IGJvZHkxO1xyXG4gICAgdGhpcy5ib2R5MiA9IGJvZHkyO1xyXG4gICAgdGhpcy5yYSA9IHJhO1xyXG4gICAgdGhpcy5yYiA9IHJiO1xyXG4gICAgdGhpcy5yYUxvY2FsID0gcmFMb2NhbDtcclxuICAgIHRoaXMucmJMb2NhbCA9IHJiTG9jYWw7XHJcbiAgICB0aGlzLnRyZXNob2xkID0gdHJlc2hvbGQ7XHJcbiAgICB0aGlzLmxhbWJkYUFjYyA9IDA7XHJcbiAgICB0aGlzLmxhbWJkYU1pbiA9IGxhbWJkYU1pbjtcclxuICAgIHRoaXMubGFtYmRhTWF4ID0gbGFtYmRhTWF4O1xyXG4gICAgdGhpcy5wcmV2TGFtYmRhID0gMFxyXG4gIH1cclxuICB1cGRhdGVMZWZ0UGFydChkZWx0YVRpbWUpIHtcclxuICAgIGNvbnN0IHsgYm9keTEsIGJvZHkyLCBuLCByYSwgcmIgfSA9IHRoaXM7XHJcbiAgICBjb25zdCBKID0gW3NjYWxlKG4sIC0xKSwgY3Jvc3MobiwgcmEpLCBuLCBjcm9zcyhyYiwgbildO1xyXG4gICAgY29uc3QgZG9mMSA9IGJvZHkxLkRPRjtcclxuICAgIGNvbnN0IGRvZjIgPSBib2R5Mi5ET0Y7XHJcblxyXG4gICAgSlswXVswXSAqPSBkb2YxWzBdO1xyXG4gICAgSlswXVsxXSAqPSBkb2YxWzFdO1xyXG4gICAgSlswXVsyXSAqPSBkb2YxWzJdO1xyXG5cclxuICAgIEpbMV1bMF0gKj0gZG9mMVszXTtcclxuICAgIEpbMV1bMV0gKj0gZG9mMVs0XTtcclxuICAgIEpbMV1bMl0gKj0gZG9mMVs1XTtcclxuXHJcbiAgICBKWzJdWzBdICo9IGRvZjJbMF07XHJcbiAgICBKWzJdWzFdICo9IGRvZjJbMV07XHJcbiAgICBKWzJdWzJdICo9IGRvZjJbMl07XHJcblxyXG4gICAgSlszXVswXSAqPSBkb2YyWzNdO1xyXG4gICAgSlszXVsxXSAqPSBkb2YyWzRdO1xyXG4gICAgSlszXVsyXSAqPSBkb2YyWzVdO1xyXG5cclxuICAgIHRoaXMuSiA9IEo7XHJcblxyXG4gICAgY29uc3QgSTEgPSBib2R5MS5pbnZlcnNlSW5lcnRpYTtcclxuICAgIGNvbnN0IEkyID0gYm9keTIuaW52ZXJzZUluZXJ0aWE7XHJcbiAgICBsZXQgTTEgPSBib2R5MS5pbnZlcnNlTWFzcztcclxuICAgIGxldCBNMiA9IGJvZHkyLmludmVyc2VNYXNzO1xyXG4gICAgdGhpcy5KTSA9IFtcclxuICAgICAgc2NhbGUodGhpcy5KWzBdLCBNMSksXHJcbiAgICAgIG0zLnRyYW5zZm9ybVBvaW50KEkxLCB0aGlzLkpbMV0pLFxyXG4gICAgICBzY2FsZSh0aGlzLkpbMl0sIE0yKSxcclxuICAgICAgbTMudHJhbnNmb3JtUG9pbnQoSTIsIHRoaXMuSlszXSksXHJcbiAgICBdO1xyXG5cclxuICAgIC8vSk1KKiA9IEpCO0IgPSBNSipcclxuICAgIHRoaXMuX0ogPSBbXHJcbiAgICAgIFsuLi50aGlzLkpbMF0sIC4uLnRoaXMuSlsxXV0sXHJcbiAgICAgIFsuLi50aGlzLkpbMl0sIC4uLnRoaXMuSlszXV0sXHJcbiAgICBdO1xyXG4gICAgdGhpcy5CID0gW1xyXG4gICAgICBbLi4udGhpcy5KTVswXSwgLi4udGhpcy5KTVsxXV0sXHJcbiAgICAgIFsuLi50aGlzLkpNWzJdLCAuLi50aGlzLkpNWzNdXSxcclxuICAgIF07XHJcbiAgICB0aGlzLmVmZk1hc3MgPVxyXG4gICAgICBkb3QoSlswXSwgdGhpcy5KTVswXSkgK1xyXG4gICAgICBkb3QodGhpcy5KTVsxXSwgdGhpcy5KWzFdKSArXHJcbiAgICAgIGRvdChKWzJdLCB0aGlzLkpNWzJdKSArXHJcbiAgICAgIGRvdCh0aGlzLkpNWzNdLCB0aGlzLkpbM10pO1xyXG4gIH1cclxuICBhcHBseVJlc29sdmluZ0ltcHVsc2UobGFtYmRhKSB7XHJcbiAgICB0aGlzLmJvZHkxLmFwcGx5SW1wdWxzZShzY2FsZSh0aGlzLkpbMF0sIGxhbWJkYSksIHRoaXMucmEpO1xyXG4gICAgdGhpcy5ib2R5Mi5hcHBseUltcHVsc2Uoc2NhbGUodGhpcy5KWzJdLCBsYW1iZGEpLCB0aGlzLnJiKTtcclxuICB9XHJcbn1cclxuXHJcbmNsYXNzIENvbnRhY3RDb25zdHJhaW50IGV4dGVuZHMgQ29uc3RyYWludCB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBib2R5MSxcclxuICAgIGJvZHkyLFxyXG4gICAgbixcclxuICAgIHJhLFxyXG4gICAgcmIsXHJcbiAgICByYUxvY2FsLFxyXG4gICAgcmJMb2NhbCxcclxuICAgIGJpYXNGYWN0b3IsXHJcbiAgICB0cmVzaG9sZCxcclxuICAgIHBlbkRlcHRoXHJcbiAgKSB7XHJcbiAgICBzdXBlcihcclxuICAgICAgYm9keTEsXHJcbiAgICAgIGJvZHkyLFxyXG4gICAgICBuLFxyXG4gICAgICByYSxcclxuICAgICAgcmIsXHJcbiAgICAgIHJhTG9jYWwsXHJcbiAgICAgIHJiTG9jYWwsXHJcbiAgICAgIGJpYXNGYWN0b3IsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgIHRyZXNob2xkXHJcbiAgICApO1xyXG5cclxuICAgIHRoaXMucGVuRGVwdGggPSBwZW5EZXB0aDtcclxuICB9XHJcbiAgdXBkYXRlTGVmdFBhcnQoZGVsdGFUaW1lKSB7XHJcbiAgICBzdXBlci51cGRhdGVMZWZ0UGFydChkZWx0YVRpbWUpO1xyXG4gICAgdGhpcy5sYW1iZGFNYXggPVxyXG4gICAgICBNYXRoLm1heCgxLG5vcm0oXHJcbiAgICAgICAgc3VtKFxyXG4gICAgICAgICAgc2NhbGUodGhpcy5ib2R5MS52ZWxvY2l0eSwgdGhpcy5ib2R5MS5tYXNzKSxcclxuICAgICAgICAgIHNjYWxlKHRoaXMuYm9keTIudmVsb2NpdHksIHRoaXMuYm9keTIubWFzcylcclxuICAgICAgICApXHJcbiAgICAgICkgKiAxMCk7XHJcbiAgICB0aGlzLmxhbWJkYU1pbiA9IDA7XHJcbiAgfVxyXG4gIHVwZGF0ZVJpZ2h0UGFydChkZWx0YVRpbWUpIHtcclxuICAgIGNvbnN0IHsgYm9keTEsIGJvZHkyLCByYSwgcmIsIG4sIHBlbkRlcHRoLCB0cmVzaG9sZCwgYmlhc0ZhY3RvciB9ID0gdGhpcztcclxuXHJcbiAgICBjb25zdCByZWxhdGl2ZVZlbG9jaXR5ID0gZGlmZihcclxuICAgICAgc3VtKGJvZHkyLnZlbG9jaXR5LCBjcm9zcyhib2R5Mi5hbmd1bGFyViwgcmIpKSxcclxuICAgICAgc3VtKGJvZHkxLnZlbG9jaXR5LCBjcm9zcyhib2R5MS5hbmd1bGFyViwgcmEpKVxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCByZWxhdGl2ZVZlbG9jaXR5Tm9ybWFsUHJvamVjdGlvbiA9IGRvdChyZWxhdGl2ZVZlbG9jaXR5LCBuKTtcclxuICAgIHRoaXMuYmlhcyA9XHJcbiAgICAgIChNYXRoLm1heCgwLCBwZW5EZXB0aCAtIHRyZXNob2xkKSAvIGRlbHRhVGltZSkgKiBiaWFzRmFjdG9yIC1cclxuICAgICAgcmVsYXRpdmVWZWxvY2l0eU5vcm1hbFByb2plY3Rpb247XHJcbiAgfVxyXG4gIGFwcGx5UmVzb2x2aW5nSW1wdWxzZShsYW1iZGEpIHtcclxuICAgIHRoaXMuYm9keTEuYXBwbHlJbXB1bHNlKHNjYWxlKHRoaXMuSlswXSwgbGFtYmRhKSwgdGhpcy5yYSk7XHJcbiAgICB0aGlzLmJvZHkyLmFwcGx5SW1wdWxzZShzY2FsZSh0aGlzLkpbMl0sIGxhbWJkYSksIHRoaXMucmIpO1xyXG4gIH1cclxuICBhcHBseVJlc29sdmluZ1BzZXVkb0ltcHVsc2UobGFtYmRhKSB7XHJcbiAgICBpZiAobGFtYmRhIDwgMCkgcmV0dXJuO1xyXG4gICAgY29uc3QgbWF4ID0gdGhpcy5lZmZNYXNzICogMTA7XHJcbiAgICAvLyBsYW1iZGEgPSBNYXRoLm1heChNYXRoLm1pbigxMDAsIGxhbWJkYSktIDAuMSwwKVxyXG4gICAgdGhpcy5ib2R5MS5hcHBseVBzZXVkb0ltcHVsc2Uoc2NhbGUodGhpcy5KWzBdLCBsYW1iZGEpLCB0aGlzLnJhKTtcclxuICAgIHRoaXMuYm9keTIuYXBwbHlQc2V1ZG9JbXB1bHNlKHNjYWxlKHRoaXMuSlsyXSwgbGFtYmRhKSwgdGhpcy5yYik7XHJcbiAgfVxyXG59XHJcblxyXG5jbGFzcyBGcmljdGlvbkNvbnN0cmFpbnQgZXh0ZW5kcyBDb25zdHJhaW50IHtcclxuICB1cGRhdGVSaWdodFBhcnQoZGVsdGFUaW1lKSB7XHJcbiAgICBjb25zdCB7IGJvZHkxLCBib2R5MiwgcmEsIHJiLCBuIH0gPSB0aGlzO1xyXG4gICAgY29uc3QgcmVsYXRpdmVWZWxvY2l0eSA9IGRpZmYoXHJcbiAgICAgIHN1bShib2R5Mi52ZWxvY2l0eSwgY3Jvc3MoYm9keTIuYW5ndWxhclYsIHJiKSksXHJcbiAgICAgIHN1bShib2R5MS52ZWxvY2l0eSwgY3Jvc3MoYm9keTEuYW5ndWxhclYsIHJhKSlcclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgcmVsYXRpdmVWZWxvY2l0eU5vcm1hbFByb2plY3Rpb24gPSBkb3QocmVsYXRpdmVWZWxvY2l0eSwgbik7XHJcbiAgICB0aGlzLmJpYXMgPSAtcmVsYXRpdmVWZWxvY2l0eU5vcm1hbFByb2plY3Rpb247XHJcbiAgfVxyXG4gIGFwcGx5UmVzb2x2aW5nSW1wdWxzZShsYW1iZGEpIHtcclxuICAgIHRoaXMuYm9keTEuYXBwbHlJbXB1bHNlKHNjYWxlKHRoaXMuSlswXSwgbGFtYmRhKSwgdGhpcy5yYSk7XHJcbiAgICB0aGlzLmJvZHkyLmFwcGx5SW1wdWxzZShzY2FsZSh0aGlzLkpbMl0sIGxhbWJkYSksIHRoaXMucmIpO1xyXG4gIH1cclxufVxyXG5cclxuY2xhc3MgUG9zaXRpb25Db25zdHJhaW50IGV4dGVuZHMgQ29uc3RyYWludCB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBib2R5MSxcclxuICAgIGJvZHkyLFxyXG4gICAgbixcclxuICAgIHJhLFxyXG4gICAgcmIsXHJcbiAgICByYUxvY2FsLFxyXG4gICAgcmJMb2NhbCxcclxuICAgIGJpYXNGYWN0b3IsXHJcbiAgICB0cmVzaG9sZCxcclxuICAgIHBlbkRlcHRoXHJcbiAgKSB7XHJcbiAgICBzdXBlcihcclxuICAgICAgYm9keTEsXHJcbiAgICAgIGJvZHkyLFxyXG4gICAgICBuLFxyXG4gICAgICByYSxcclxuICAgICAgcmIsXHJcbiAgICAgIHJhTG9jYWwsXHJcbiAgICAgIHJiTG9jYWwsXHJcbiAgICAgIGJpYXNGYWN0b3IsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgIHRyZXNob2xkXHJcbiAgICApO1xyXG4gICAgdGhpcy5wZW5EZXB0aCA9IHBlbkRlcHRoO1xyXG4gIH1cclxuICBhcHBseVJlc29sdmluZ0ltcHVsc2UobGFtYmRhKSB7XHJcbiAgICB0aGlzLmJvZHkxLmFwcGx5UHNldWRvSW1wdWxzZShzY2FsZSh0aGlzLkpbMF0sIGxhbWJkYSksIHRoaXMucmEpO1xyXG4gICAgdGhpcy5ib2R5Mi5hcHBseVBzZXVkb0ltcHVsc2Uoc2NhbGUodGhpcy5KWzJdLCBsYW1iZGEpLCB0aGlzLnJiKTtcclxuICB9XHJcbiAgdXBkYXRlUmlnaHRQYXJ0KGRlbHRhVGltZSkge1xyXG4gICAgY29uc3QgeyBib2R5MSwgYm9keTIsIHJhLCByYiwgbiwgcGVuRGVwdGgsIHRyZXNob2xkLCBiaWFzRmFjdG9yIH0gPSB0aGlzO1xyXG5cclxuICAgIHRoaXMuYmlhcyA9IChNYXRoLm1heCgwLCBwZW5EZXB0aCAtIHRyZXNob2xkKSAvIGRlbHRhVGltZSkgKiBiaWFzRmFjdG9yO1xyXG4gIH1cclxufVxyXG5jbGFzcyBSb3RhdGlvbmFsQ29uc3RyYWludCBleHRlbmRzIENvbnN0cmFpbnR7XHJcbiAgY29uc3RydWN0b3IoYm9keTEsIGJvZHkyLCByYUxvY2FsLCByYkxvY2FsKXtcclxuICAgIHN1cGVyKGJvZHkxLCBib2R5MiwgbnVsbCwgbnVsbCwgbnVsbCwgcmFMb2NhbCwgcmJMb2NhbClcclxuICAgXHJcbiAgfVxyXG4gIHVwZGF0ZUxlZnRQYXJ0KGRlbHRhVGltZSkge1xyXG4gICAgY29uc3QgeyBib2R5MSwgYm9keTIsIHJhTG9jYWwsIHJiTG9jYWwgfSA9IHRoaXM7XHJcbiAgICB0aGlzLlBBID0gYm9keTEuY29sbGlkZXIubG9jYWxUb0dsb2JhbChyYUxvY2FsKTtcclxuICAgIHRoaXMuUEIgPSBib2R5Mi5jb2xsaWRlci5sb2NhbFRvR2xvYmFsKHJiTG9jYWwpO1xyXG4gICAgY29uc3QgcyA9IG0zLnRyYW5zZm9ybVBvaW50KGJvZHkxLmNvbGxpZGVyLlJtYXRyaXgsIHJhTG9jYWwpO1xyXG4gICAgY29uc3QgYiA9IG0zLnRyYW5zZm9ybVBvaW50KGJvZHkyLmNvbGxpZGVyLlJtYXRyaXgsIHJiTG9jYWwpO1xyXG5cclxuICAgIFxyXG4gICAgdGhpcy5yYSA9IHM7XHJcbiAgICB0aGlzLnJiID0gYjtcclxuXHJcblxyXG4gICAgY29uc3QgSiA9IFtbMCwgMCwgMF0sIGNyb3NzKHMsIGIpLCBbMCwgMCwgMF0sIGNyb3NzKGIsIHMpXTtcclxuXHJcbiAgICBjb25zdCBkb2YxID0gYm9keTEuRE9GO1xyXG4gICAgY29uc3QgZG9mMiA9IGJvZHkyLkRPRjtcclxuXHJcbiAgICBKWzBdWzBdICo9IGRvZjFbMF07XHJcbiAgICBKWzBdWzFdICo9IGRvZjFbMV07XHJcbiAgICBKWzBdWzJdICo9IGRvZjFbMl07XHJcblxyXG4gICAgSlsxXVswXSAqPSBkb2YxWzNdO1xyXG4gICAgSlsxXVsxXSAqPSBkb2YxWzRdO1xyXG4gICAgSlsxXVsyXSAqPSBkb2YxWzVdO1xyXG5cclxuICAgIEpbMl1bMF0gKj0gZG9mMlswXTtcclxuICAgIEpbMl1bMV0gKj0gZG9mMlsxXTtcclxuICAgIEpbMl1bMl0gKj0gZG9mMlsyXTtcclxuXHJcbiAgICBKWzNdWzBdICo9IGRvZjJbM107XHJcbiAgICBKWzNdWzFdICo9IGRvZjJbNF07XHJcbiAgICBKWzNdWzJdICo9IGRvZjJbNV07XHJcbiAgICBjb25zdCBJMSA9IGJvZHkxLmludmVyc2VJbmVydGlhO1xyXG4gICAgY29uc3QgSTIgPSBib2R5Mi5pbnZlcnNlSW5lcnRpYTtcclxuICAgIHRoaXMuSiA9IEo7XHJcbiAgICB0aGlzLkpNID0gW1xyXG4gICAgICBbMCwgMCwgMF0sXHJcbiAgICAgIG0zLnRyYW5zZm9ybVBvaW50KEkxLCB0aGlzLkpbMV0pLFxyXG4gICAgICBbMCwgMCwgMF0sXHJcbiAgICAgIG0zLnRyYW5zZm9ybVBvaW50KEkyLCB0aGlzLkpbM10pLFxyXG4gICAgXTtcclxuICAgIHRoaXMuZWZmTWFzcyA9IGRvdCh0aGlzLkpNWzFdLCB0aGlzLkpbMV0pICsgZG90KHRoaXMuSk1bM10sIHRoaXMuSlszXSk7XHJcbiAgICB0aGlzLkIgPSBbXHJcbiAgICAgIFswLCAwLCAwLCAuLi50aGlzLkpNWzFdXSxcclxuICAgICAgWzAsIDAsIDAsIC4uLnRoaXMuSk1bM11dLFxyXG4gICAgXTtcclxuICAgIHRoaXMuX0ogPSBbXHJcbiAgICAgIFsuLi50aGlzLkpbMF0sIC4uLnRoaXMuSlsxXV0sXHJcbiAgICAgIFsuLi50aGlzLkpbMl0sIC4uLnRoaXMuSlszXV0sXHJcbiAgICBdO1xyXG4gIH1cclxuICB1cGRhdGVSaWdodFBhcnQoZGVsdGFUaW1lKSB7XHJcbiAgICBjb25zdCB7IGJvZHkxLCBib2R5MiB9ID0gdGhpcztcclxuXHJcbiAgICBcclxuICAgIHRoaXMuYmlhcyA9IC1kb3QodGhpcy5KWzFdLCBib2R5MS5hbmd1bGFyVikgKyBkb3QodGhpcy5KWzNdLCBib2R5Mi5hbmd1bGFyVilcclxuICB9XHJcbiAgYXBwbHlSZXNvbHZpbmdJbXB1bHNlKGxhbWJkYSl7XHJcbiAgICBjb25zdCB7IGJvZHkxLCBib2R5MiB9ID0gdGhpcztcclxuICAgIGJvZHkxLmFkZEFuZ3VsYXJWKHNjYWxlKHRoaXMucmEsIGxhbWJkYSkpXHJcbiAgICBib2R5Mi5hZGRBbmd1bGFyVihzY2FsZSh0aGlzLnJiLCBsYW1iZGEpKVxyXG4gIH1cclxufVxyXG5jbGFzcyBKb2ludCBleHRlbmRzIENvbnN0cmFpbnQge1xyXG4gIGNvbnN0cnVjdG9yKGJvZHkxLCBib2R5MiwgcmFMb2NhbCwgcmJMb2NhbCwgYmlhc0ZhY3RvciA9IDApIHtcclxuICAgIHN1cGVyKGJvZHkxLCBib2R5MiwgbnVsbCwgbnVsbCwgbnVsbCwgcmFMb2NhbCwgcmJMb2NhbCwgYmlhc0ZhY3Rvcik7XHJcblxyXG4gICAgdGhpcy50cmVzaG9sZCA9IDAuMDAwMTtcclxuICAgIHRoaXMucmVkdWNlciA9IDAuNTtcclxuICAgIHRoaXMubWF4SW1wdWxzZSA9IDAuNztcclxuICB9XHJcbiAgdXBkYXRlTGVmdFBhcnQoZGVsdGFUaW1lKSB7XHJcbiAgICBjb25zdCB7IGJvZHkxLCBib2R5MiwgcmFMb2NhbCwgcmJMb2NhbCB9ID0gdGhpcztcclxuICAgIHRoaXMuUEEgPSBib2R5MS5jb2xsaWRlci5sb2NhbFRvR2xvYmFsKHJhTG9jYWwpO1xyXG4gICAgdGhpcy5QQiA9IGJvZHkyLmNvbGxpZGVyLmxvY2FsVG9HbG9iYWwocmJMb2NhbCk7XHJcbiAgICBjb25zdCBkaXIgPSBkaWZmKHRoaXMuUEEsIHRoaXMuUEIpO1xyXG4gICAgY29uc3QgbiA9IGRpcjtcclxuICAgIHRoaXMubiA9IG47XHJcbiAgICB0aGlzLnJhID0gZGlmZih0aGlzLlBBLCB0aGlzLmJvZHkxLmNvbGxpZGVyLnBvcyk7XHJcbiAgICB0aGlzLnJiID0gZGlmZih0aGlzLlBCLCB0aGlzLmJvZHkyLmNvbGxpZGVyLnBvcyk7XHJcbiAgICB0aGlzLnBlbkRlcHRoID0gbm9ybShkaXIpO1xyXG5cclxuICAgIGNvbnN0IEogPSBbXHJcbiAgICAgIHNjYWxlKHRoaXMubiwgLTEpLFxyXG4gICAgICBjcm9zcyh0aGlzLm4sIHRoaXMucmEpLFxyXG4gICAgICB0aGlzLm4sXHJcbiAgICAgIGNyb3NzKHRoaXMucmIsIHRoaXMubiksXHJcbiAgICBdO1xyXG5cclxuICAgIGNvbnN0IGRvZjEgPSBib2R5MS5ET0Y7XHJcbiAgICBjb25zdCBkb2YyID0gYm9keTIuRE9GO1xyXG5cclxuICAgIEpbMF1bMF0gKj0gZG9mMVswXTtcclxuICAgIEpbMF1bMV0gKj0gZG9mMVsxXTtcclxuICAgIEpbMF1bMl0gKj0gZG9mMVsyXTtcclxuXHJcbiAgICBKWzFdWzBdICo9IGRvZjFbM107XHJcbiAgICBKWzFdWzFdICo9IGRvZjFbNF07XHJcbiAgICBKWzFdWzJdICo9IGRvZjFbNV07XHJcblxyXG4gICAgSlsyXVswXSAqPSBkb2YyWzBdO1xyXG4gICAgSlsyXVsxXSAqPSBkb2YyWzFdO1xyXG4gICAgSlsyXVsyXSAqPSBkb2YyWzJdO1xyXG5cclxuICAgIEpbM11bMF0gKj0gZG9mMlszXTtcclxuICAgIEpbM11bMV0gKj0gZG9mMls0XTtcclxuICAgIEpbM11bMl0gKj0gZG9mMls1XTtcclxuICAgIGNvbnN0IEkxID0gYm9keTEuaW52ZXJzZUluZXJ0aWE7XHJcbiAgICBjb25zdCBJMiA9IGJvZHkyLmludmVyc2VJbmVydGlhO1xyXG4gICAgbGV0IE0xID0gYm9keTEuaW52ZXJzZU1hc3M7XHJcbiAgICBsZXQgTTIgPSBib2R5Mi5pbnZlcnNlTWFzcztcclxuICAgIHRoaXMuSiA9IEo7XHJcbiAgICB0aGlzLkpNID0gW1xyXG4gICAgICBzY2FsZSh0aGlzLkpbMF0sIE0xKSxcclxuICAgICAgbTMudHJhbnNmb3JtUG9pbnQoSTEsIHRoaXMuSlsxXSksXHJcbiAgICAgIHNjYWxlKHRoaXMuSlsyXSwgTTIpLFxyXG4gICAgICBtMy50cmFuc2Zvcm1Qb2ludChJMiwgdGhpcy5KWzNdKSxcclxuICAgIF07XHJcbiAgICB0aGlzLmVmZk1hc3MgPVxyXG4gICAgICBkb3QodGhpcy5KTVswXSwgSlswXSkgK1xyXG4gICAgICBkb3QodGhpcy5KTVsxXSwgdGhpcy5KWzFdKSArXHJcbiAgICAgIGRvdCh0aGlzLkpNWzJdLCBKWzJdKSArXHJcbiAgICAgIGRvdCh0aGlzLkpNWzNdLCB0aGlzLkpbM10pO1xyXG4gICAgdGhpcy5CID0gW1xyXG4gICAgICBbLi4udGhpcy5KTVswXSwgLi4udGhpcy5KTVsxXV0sXHJcbiAgICAgIFsuLi50aGlzLkpNWzJdLCAuLi50aGlzLkpNWzNdXSxcclxuICAgIF07XHJcbiAgICB0aGlzLl9KID0gW1xyXG4gICAgICBbLi4udGhpcy5KWzBdLCAuLi50aGlzLkpbMV1dLFxyXG4gICAgICBbLi4udGhpcy5KWzJdLCAuLi50aGlzLkpbM11dLFxyXG4gICAgXTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVJpZ2h0UGFydChkZWx0YVRpbWUpIHtcclxuICAgIGNvbnN0IHsgYm9keTEsIGJvZHkyLCByYSwgcmIsIG4sIHBlbkRlcHRoLCB0cmVzaG9sZCwgYmlhc0ZhY3RvciB9ID0gdGhpcztcclxuXHJcbiAgICBjb25zdCByZWxhdGl2ZVZlbG9jaXR5ID0gZGlmZihcclxuICAgICAgc3VtKGJvZHkyLnZlbG9jaXR5LCBjcm9zcyhib2R5Mi5hbmd1bGFyViwgcmIpKSxcclxuICAgICAgc3VtKGJvZHkxLnZlbG9jaXR5LCBjcm9zcyhib2R5MS5hbmd1bGFyViwgcmEpKVxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCByZWxhdGl2ZVZlbG9jaXR5Tm9ybWFsUHJvamVjdGlvbiA9IGRvdChyZWxhdGl2ZVZlbG9jaXR5LCBuKTtcclxuICAgIGNvbnN0IGZhYyA9IHBlbkRlcHRoICoqIDIgPiB0cmVzaG9sZDtcclxuICAgIHRoaXMuYmlhcyA9XHJcbiAgICAgIChiaWFzRmFjdG9yICogTWF0aC5tYXgocGVuRGVwdGggKiogMiAtIHRyZXNob2xkLCAwKSkgLyBkZWx0YVRpbWUgLVxyXG4gICAgICByZWxhdGl2ZVZlbG9jaXR5Tm9ybWFsUHJvamVjdGlvbjtcclxuICAgIHRoaXMuYmlhcyAqPSBmYWM7XHJcbiAgfVxyXG4gIGFwcGx5UmVzb2x2aW5nSW1wdWxzZShsYW1iZGEpIHtcclxuICAgIHRoaXMuYm9keTEuYXBwbHlJbXB1bHNlKHNjYWxlKHRoaXMuSlswXSwgbGFtYmRhKSwgdGhpcy5yYSk7XHJcbiAgICB0aGlzLmJvZHkyLmFwcGx5SW1wdWxzZShzY2FsZSh0aGlzLkpbMl0sIGxhbWJkYSksIHRoaXMucmIpO1xyXG4gIH1cclxuICBhcHBseVJlc29sdmluZ1BzZXVkb0ltcHVsc2UobGFtYmRhKSB7XHJcbiAgICBjb25zdCBtYXggPSB0aGlzLmVmZk1hc3MgKiAxMDtcclxuICAgIC8vbGFtYmRhID0gY2xhbXAobGFtYmRhLCAtMSwgMSlcclxuICAgIHRoaXMuYm9keTEuYXBwbHlQc2V1ZG9JbXB1bHNlKHNjYWxlKHRoaXMubiwgLWxhbWJkYSksIFswLCAwLCAwXSk7XHJcbiAgICB0aGlzLmJvZHkyLmFwcGx5UHNldWRvSW1wdWxzZShzY2FsZSh0aGlzLm4sIGxhbWJkYSksIFswLCAwLCAwXSk7XHJcbiAgfVxyXG59XHJcbmNsYXNzIEpvaW50UG9zaXRpb25Db25zdHJhaW50IGV4dGVuZHMgSm9pbnQge1xyXG4gIHVwZGF0ZVJpZ2h0UGFydChkZWx0YVRpbWUpIHtcclxuICAgIGNvbnN0IHsgcGVuRGVwdGgsIHRyZXNob2xkLCBiaWFzRmFjdG9yIH0gPSB0aGlzO1xyXG5cclxuICAgIGNvbnN0IGZhYyA9IHBlbkRlcHRoICoqIDIgPiB0cmVzaG9sZDtcclxuICAgIHRoaXMuYmlhcyA9XHJcbiAgICAgICgoYmlhc0ZhY3RvciAqIE1hdGgubWF4KHBlbkRlcHRoICoqIDIgLSB0cmVzaG9sZCwgMCkpIC8gZGVsdGFUaW1lKSAqIGZhYztcclxuICB9XHJcbiAgYXBwbHlSZXNvbHZpbmdJbXB1bHNlKGxhbWJkYSkge1xyXG4gICAgLy9pZihsYW1iZGEgPCAwLjEpcmV0dXJuXHJcbiAgICB0aGlzLmJvZHkxLmFwcGx5UHNldWRvSW1wdWxzZShzY2FsZSh0aGlzLkpbMF0sIGxhbWJkYSksIHRoaXMucmEpO1xyXG4gICAgdGhpcy5ib2R5Mi5hcHBseVBzZXVkb0ltcHVsc2Uoc2NhbGUodGhpcy5KWzJdLCBsYW1iZGEpLCB0aGlzLnJiKTtcclxuICB9XHJcbn1cclxuZXhwb3J0IHtcclxuICBDb250YWN0Q29uc3RyYWludCxcclxuICBDb25zdHJhaW50LFxyXG4gIEpvaW50LFxyXG4gIEZyaWN0aW9uQ29uc3RyYWludCxcclxuICBQb3NpdGlvbkNvbnN0cmFpbnQsXHJcbiAgSm9pbnRQb3NpdGlvbkNvbnN0cmFpbnQsXHJcbiAgUm90YXRpb25hbENvbnN0cmFpbnRcclxufTtcclxuIiwiY2xhc3MgRXZlbnRFbWl0dGVyIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuZXZlbnRzID0ge307XHJcbiAgfVxyXG4gIG9uKGV2ZW50TmFtZSwgZm4pIHtcclxuICAgIGlmICghdGhpcy5ldmVudHNbZXZlbnROYW1lXSkge1xyXG4gICAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdID0gW107XHJcbiAgICB9XHJcbiAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdLnB1c2goZm4pO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXSA9IHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0uZmlsdGVyKFxyXG4gICAgICAgIChldmVudEZuKSA9PiBmbiAhPT0gZXZlbnRGblxyXG4gICAgICApO1xyXG4gICAgfTtcclxuICB9XHJcbiAgZW1pdChldmVudE5hbWUsIGRhdGEpIHtcclxuICAgIGlmICh0aGlzLmV2ZW50c1tldmVudE5hbWVdKSB7XHJcbiAgICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0uZm9yRWFjaCgoZm4pID0+IHtcclxuICAgICAgICBmbi5jYWxsKG51bGwsIGRhdGEpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuZXhwb3J0IHsgRXZlbnRFbWl0dGVyIH07XHJcbiIsImltcG9ydCB7IHZlYzMsIG0zLCBtNCB9IGZyb20gXCJtYXRoXCI7XHJcbmltcG9ydCB7IGNsaXBGYWNlVnNGYWNlLCBpc0luQ2xvY2t3aXNlIH0gZnJvbSBcIi4vY2xpcHBpbmdcIjtcclxuXHJcbmNvbnN0IHsgZG90LCBjcm9zcywgbm9ybWFsaXplLCBzdW0sIGRpZmYsICBzY2FsZSwgaXNOdWxsLCBub3JtIH0gPSB2ZWMzO1xyXG5jb25zdCBDTElQX0JJQVMgPSAwLjE7XHJcbmNvbnN0IEdKS19NQVhfSVRFUkFUSU9OU19OVU0gPSA2NDtcclxuY29uc3QgRVBBX0JJQVMgPSAwLjAwMDAxO1xyXG5cclxuY29uc3QgcmF5VnNQbGFuZUludGVyc2VjID0gKHBsYW5lLCBwb2ludCwgZGlyZWN0aW9uKSA9PiB7XHJcbiAgY29uc3QgW29yaWdpbiwgbm9ybWFsXSA9IHBsYW5lO1xyXG4gIGNvbnN0IF9kb3QgPSBkb3Qobm9ybWFsLCBkaXJlY3Rpb24pO1xyXG4gIGNvbnN0IGZyb21Qb2ludFRvT3JpZ2luID0gZGlmZihwb2ludCwgb3JpZ2luKTtcclxuICBjb25zdCBmYWMgPSBkb3QoZnJvbVBvaW50VG9PcmlnaW4sIG5vcm1hbCkgLyBfZG90O1xyXG4gIHJldHVybiBkaWZmKHBvaW50LCBzY2FsZShkaXJlY3Rpb24sIGZhYykpO1xyXG59O1xyXG5jb25zdCBpc1BvaW50QmVoaW5kUGxhbmUgPSAocGxhbmUsIHBvaW50LCBzaWduID0gMSkgPT4ge1xyXG4gIGNvbnN0IFtvcmlnaW4sIG5vcm1hbF0gPSBwbGFuZTtcclxuICByZXR1cm4gZG90KG5vcm1hbCwgZGlmZihwb2ludCwgb3JpZ2luKSkgKiBzaWduID4gMCAtIENMSVBfQklBUztcclxufTtcclxuY29uc3QgcG9pbnRPblBsYW5lUHJvamVjdGlvbiA9IChwbGFuZSwgcG9pbnQpID0+IHtcclxuICBjb25zdCBbb3JpZ2luLCBub3JtYWxdID0gcGxhbmU7XHJcbiAgY29uc3QgZnJvbVBvaW50VG9PcmlnaW4gPSBkaWZmKHBvaW50LCBvcmlnaW4pO1xyXG4gIGNvbnN0IHByb2pBbG9uZ05vcm1hbCA9IGRvdChub3JtYWwsIGZyb21Qb2ludFRvT3JpZ2luKTtcclxuXHJcbiAgcmV0dXJuIGRpZmYocG9pbnQsIHNjYWxlKG5vcm1hbCwgcHJvakFsb25nTm9ybWFsKSk7XHJcbn07XHJcbmNvbnN0IGNsaXBQb2ludHNCZWhpbmRQbGFuZSA9IChwbGFuZSwgcG9pbnRzLCBzaWduID0gMSkgPT4ge1xyXG4gIGNvbnN0IFtvcmlnaW4sIG5vcm1hbF0gPSBwbGFuZTtcclxuXHJcbiAgcmV0dXJuIHBvaW50cy5maWx0ZXIoXHJcbiAgICAocG9pbnQpID0+IGRvdChub3JtYWwsIGRpZmYocG9pbnQsIG9yaWdpbikpICogc2lnbiArIENMSVBfQklBUyA+IDBcclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0MkRjb29yZHNPblBsYW5lID0gKGksIGosIHBvaW50KSA9PiB7XHJcbiAgcmV0dXJuIFtkb3QoaSwgcG9pbnQpLCBkb3QoaiwgcG9pbnQpXTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZV9zaW1wbGV4MyhhLCBiLCBjLCBkLCBzZWFyY2hfZGlyLCBzaW1wX2RpbSkge1xyXG4gIGNvbnN0IG4gPSBjcm9zcyhkaWZmKHRoaXMuYiwgdGhpcy5hKSwgZGlmZih0aGlzLmMsIHRoaXMuYSkpO1xyXG4gIGNvbnN0IEFPID0gc2NhbGUodGhpcy5hLCAtMSk7XHJcblxyXG4gIHRoaXMuc2ltcF9kaW0gPSAyO1xyXG4gIGlmIChkb3QoY3Jvc3MoZGlmZih0aGlzLmIsIHRoaXMuYSksIG4pLCBBTykgPiAwKSB7XHJcbiAgICB0aGlzLmMgPSB0aGlzLmE7XHJcbiAgICB0aGlzLnNlYXJjaF9kaXIgPSBjcm9zcyhcclxuICAgICAgY3Jvc3MoZGlmZih0aGlzLmIsIHRoaXMuYSksIEFPKSxcclxuICAgICAgZGlmZih0aGlzLmIsIHRoaXMuYSlcclxuICAgICk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIGlmIChkb3QoY3Jvc3MobiwgZGlmZih0aGlzLmMsIHRoaXMuYSkpLCBBTykgPiAwKSB7XHJcbiAgICB0aGlzLmIgPSB0aGlzLmE7XHJcbiAgICB0aGlzLnNlYXJjaF9kaXIgPSBjcm9zcyhcclxuICAgICAgY3Jvc3MoZGlmZih0aGlzLmMsIHRoaXMuYSksIEFPKSxcclxuICAgICAgZGlmZih0aGlzLmMsIHRoaXMuYSlcclxuICAgICk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIHRoaXMuc2ltcF9kaW0gPSAzO1xyXG4gIGlmIChkb3QobiwgQU8pID4gMCkge1xyXG4gICAgdGhpcy5kID0gdGhpcy5jO1xyXG4gICAgdGhpcy5jID0gdGhpcy5iO1xyXG4gICAgdGhpcy5iID0gdGhpcy5hO1xyXG4gICAgdGhpcy5zZWFyY2hfZGlyID0gbjtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgdGhpcy5kID0gdGhpcy5iO1xyXG4gIHRoaXMuYiA9IHRoaXMuYTtcclxuICB0aGlzLnNlYXJjaF9kaXIgPSBzY2FsZShuLCAtMSk7XHJcbiAgcmV0dXJuO1xyXG59XHJcbmZ1bmN0aW9uIHVwZGF0ZV9zaW1wbGV4NChhLCBiLCBjLCBkLCBzZWFyY2hfZGlyLCBzaW1wX2RpbSkge1xyXG4gIGNvbnN0IEFCQyA9IGNyb3NzKGRpZmYodGhpcy5iLCB0aGlzLmEpLCBkaWZmKHRoaXMuYywgdGhpcy5hKSk7XHJcbiAgY29uc3QgQUNEID0gY3Jvc3MoZGlmZih0aGlzLmMsIHRoaXMuYSksIGRpZmYodGhpcy5kLCB0aGlzLmEpKTtcclxuICBjb25zdCBBREIgPSBjcm9zcyhkaWZmKHRoaXMuZCwgdGhpcy5hKSwgZGlmZih0aGlzLmIsIHRoaXMuYSkpO1xyXG4gIGNvbnN0IEFPID0gc2NhbGUodGhpcy5hLCAtMSk7XHJcbiAgdGhpcy5zaW1wX2RpbSA9IDM7XHJcblxyXG4gIGlmIChkb3QoQUJDLCBBTykgPiAwKSB7XHJcbiAgICB0aGlzLmQgPSB0aGlzLmM7XHJcbiAgICB0aGlzLmMgPSB0aGlzLmI7XHJcbiAgICB0aGlzLmIgPSB0aGlzLmE7XHJcbiAgICB0aGlzLnNlYXJjaF9kaXIgPSBBQkM7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBpZiAoZG90KEFDRCwgQU8pID4gMCkge1xyXG4gICAgdGhpcy5iID0gdGhpcy5hO1xyXG4gICAgdGhpcy5zZWFyY2hfZGlyID0gQUNEO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgaWYgKGRvdChBREIsIEFPKSA+IDApIHtcclxuICAgIHRoaXMuYyA9IHRoaXMuZDtcclxuICAgIHRoaXMuZCA9IHRoaXMuYjtcclxuICAgIHRoaXMuYiA9IHRoaXMuYTtcclxuICAgIHRoaXMuc2VhcmNoX2RpciA9IEFEQjtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgcmV0dXJuIHRydWU7XHJcbn1cclxuZnVuY3Rpb24gZ2prKGJvZHkxLCBib2R5Mikge1xyXG4gIGNvbnN0IGNvbGwxID0gYm9keTEuY29sbGlkZXI7XHJcbiAgY29uc3QgY29sbDIgPSBib2R5Mi5jb2xsaWRlcjtcclxuICB0aGlzLmEgPSBbMCwgMCwgMF07XHJcbiAgdGhpcy5iID0gWzAsIDAsIDBdO1xyXG4gIHRoaXMuYyA9IFswLCAwLCAwXTtcclxuICB0aGlzLmQgPSBbMCwgMCwgMF07XHJcbiAgdGhpcy5zZWFyY2hfZGlyID0gWzAsIDAsIDBdO1xyXG4gIHRoaXMuc2ltcF9kaW0gPSAwO1xyXG5cclxuICB0aGlzLm9yaWdpbnNNYXAgPSBuZXcgTWFwKCk7XHJcblxyXG4gIGxldCBtdHYgPSBbMCwgMCwgMF07XHJcblxyXG4gIHRoaXMuc2VhcmNoX2RpciA9IGRpZmYoY29sbDEucG9zLCBjb2xsMi5wb3MpO1xyXG4gIGNvbnN0IGNfb3JpZ2luMSA9IGNvbGwxLnN1cHBvcnQoc2NhbGUodGhpcy5zZWFyY2hfZGlyLCAtMSkpO1xyXG4gIGNvbnN0IGNfb3JpZ2luMiA9IGNvbGwyLnN1cHBvcnQodGhpcy5zZWFyY2hfZGlyKTtcclxuICB0aGlzLmMgPSBkaWZmKGNfb3JpZ2luMiwgY19vcmlnaW4xKTtcclxuXHJcbiAgdGhpcy5vcmlnaW5zTWFwLnNldCh0aGlzLmMsIFtjX29yaWdpbjEsIGNfb3JpZ2luMl0pO1xyXG5cclxuICB0aGlzLnNlYXJjaF9kaXIgPSBzY2FsZSh0aGlzLmMsIC0xKTtcclxuXHJcbiAgY29uc3QgYl9vcmlnaW4xID0gY29sbDEuc3VwcG9ydChzY2FsZSh0aGlzLnNlYXJjaF9kaXIsIC0xKSk7XHJcbiAgY29uc3QgYl9vcmlnaW4yID0gY29sbDIuc3VwcG9ydCh0aGlzLnNlYXJjaF9kaXIpO1xyXG4gIHRoaXMuYiA9IGRpZmYoYl9vcmlnaW4yLCBiX29yaWdpbjEpO1xyXG5cclxuICB0aGlzLm9yaWdpbnNNYXAuc2V0KHRoaXMuYiwgW2Jfb3JpZ2luMSwgYl9vcmlnaW4yXSk7XHJcblxyXG4gIGlmIChkb3QodGhpcy5iLCB0aGlzLnNlYXJjaF9kaXIpIDwgMCkge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICB0aGlzLnNlYXJjaF9kaXIgPSBjcm9zcyhcclxuICAgIGNyb3NzKGRpZmYodGhpcy5jLCB0aGlzLmIpLCBzY2FsZSh0aGlzLmIsIC0xKSksXHJcbiAgICBkaWZmKHRoaXMuYywgdGhpcy5iKVxyXG4gICk7XHJcblxyXG4gIGlmIChpc051bGwodGhpcy5zZWFyY2hfZGlyKSkge1xyXG4gICAgdGhpcy5zZWFyY2hfZGlyID0gY3Jvc3MoZGlmZih0aGlzLmMsIHRoaXMuYiksIFsxLCAwLCAwXSk7XHJcblxyXG4gICAgaWYgKGlzTnVsbCh0aGlzLnNlYXJjaF9kaXIpKSB7XHJcbiAgICAgIHRoaXMuc2VhcmNoX2RpciA9IGNyb3NzKGRpZmYodGhpcy5jLCB0aGlzLmIpLCBbMCwgMCwgLTFdKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRoaXMuc2ltcF9kaW0gPSAyO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgR0pLX01BWF9JVEVSQVRJT05TX05VTTsgKytpKSB7XHJcbiAgICBjb25zdCBhX29yaWdpbjEgPSBjb2xsMS5zdXBwb3J0KHNjYWxlKHRoaXMuc2VhcmNoX2RpciwgLTEpKTtcclxuICAgIGNvbnN0IGFfb3JpZ2luMiA9IGNvbGwyLnN1cHBvcnQodGhpcy5zZWFyY2hfZGlyKTtcclxuICAgIHRoaXMuYSA9IGRpZmYoYV9vcmlnaW4yLCBhX29yaWdpbjEpO1xyXG5cclxuICAgIHRoaXMub3JpZ2luc01hcC5zZXQodGhpcy5hLCBbYV9vcmlnaW4xLCBhX29yaWdpbjJdKTtcclxuICAgIGlmIChkb3QodGhpcy5hLCB0aGlzLnNlYXJjaF9kaXIpIDwgMCkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgdGhpcy5zaW1wX2RpbSsrO1xyXG4gICAgaWYgKHRoaXMuc2ltcF9kaW0gPT09IDMpIHtcclxuICAgICAgdXBkYXRlX3NpbXBsZXgzLmFwcGx5KHRoaXMpO1xyXG4gICAgfSBlbHNlIGlmICh1cGRhdGVfc2ltcGxleDQuYXBwbHkodGhpcykpIHtcclxuICAgICAgcmV0dXJuIEVQQSh0aGlzLmEsIHRoaXMuYiwgdGhpcy5jLCB0aGlzLmQsIHRoaXMub3JpZ2luc01hcCwgYm9keTEsIGJvZHkyKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIG51bGw7XHJcbn1cclxuXHJcbmNvbnN0IGJhcmljZW50cmljID0gKGZhY2UsIHBvaW50KSA9PiB7XHJcbiAgbGV0IGExMSA9IGZhY2VbMF1bMF07XHJcbiAgbGV0IGExMiA9IGZhY2VbMV1bMF07XHJcbiAgbGV0IGExMyA9IGZhY2VbMl1bMF07XHJcbiAgbGV0IGIxID0gcG9pbnRbMF07XHJcbiAgbGV0IGEyMSA9IGZhY2VbMF1bMV07XHJcbiAgbGV0IGEyMiA9IGZhY2VbMV1bMV07XHJcbiAgbGV0IGEyMyA9IGZhY2VbMl1bMV07XHJcbiAgbGV0IGIyID0gcG9pbnRbMV07XHJcbiAgbGV0IGEzMSA9IGZhY2VbMF1bMl07XHJcbiAgbGV0IGEzMiA9IGZhY2VbMV1bMl07XHJcbiAgbGV0IGEzMyA9IGZhY2VbMl1bMl07XHJcbiAgbGV0IGIzID0gcG9pbnRbMl07XHJcblxyXG4gIGNvbnN0IGQgPVxyXG4gICAgYTExICogYTIyICogYTMzICtcclxuICAgIGEyMSAqIGEzMiAqIGExMyArXHJcbiAgICBhMTIgKiBhMjMgKiBhMzEgLVxyXG4gICAgYTEzICogYTIyICogYTMxIC1cclxuICAgIGEyMSAqIGExMiAqIGEzMyAtXHJcbiAgICBhMzIgKiBhMjMgKiBhMTE7XHJcblxyXG4gIGNvbnN0IGQxID1cclxuICAgIGIxICogYTIyICogYTMzICtcclxuICAgIGIyICogYTMyICogYTEzICtcclxuICAgIGExMiAqIGEyMyAqIGIzIC1cclxuICAgIGExMyAqIGEyMiAqIGIzIC1cclxuICAgIGIyICogYTEyICogYTMzIC1cclxuICAgIGEzMiAqIGEyMyAqIGIxO1xyXG5cclxuICBjb25zdCBkMiA9XHJcbiAgICBhMTEgKiBiMiAqIGEzMyArXHJcbiAgICBhMjEgKiBiMyAqIGExMyArXHJcbiAgICBiMSAqIGEyMyAqIGEzMSAtXHJcbiAgICBhMTMgKiBiMiAqIGEzMSAtXHJcbiAgICBhMTEgKiBiMyAqIGEyMyAtXHJcbiAgICBhMjEgKiBiMSAqIGEzMztcclxuXHJcbiAgY29uc3QgZDMgPVxyXG4gICAgYTExICogYTIyICogYjMgK1xyXG4gICAgYTIxICogYTMyICogYjEgK1xyXG4gICAgYTEyICogYjIgKiBhMzEgLVxyXG4gICAgYjEgKiBhMjIgKiBhMzEgLVxyXG4gICAgYTIxICogYTEyICogYjMgLVxyXG4gICAgYjIgKiBhMzIgKiBhMTE7XHJcblxyXG4gIHJldHVybiBbZDEgLyBkLCBkMiAvIGQsIGQzIC8gZF07XHJcbn07XHJcbmNvbnN0IG9yaWdpblRvRmFjZVByb2ogPSAoZmFjZSkgPT4ge1xyXG4gIGNvbnN0IG5vcm1hbCA9IGZhY2VbM107XHJcbiAgY29uc3QgcG9pbnQgPSBmYWNlWzBdO1xyXG4gIGNvbnN0IGMgPSAtbm9ybWFsWzBdICogcG9pbnRbMF0gLSBub3JtYWxbMV0gKiBwb2ludFsxXSAtIG5vcm1hbFsyXSAqIHBvaW50WzJdO1xyXG4gIGNvbnN0IHQgPVxyXG4gICAgLWMgL1xyXG4gICAgKG5vcm1hbFswXSAqIG5vcm1hbFswXSArIG5vcm1hbFsxXSAqIG5vcm1hbFsxXSArIG5vcm1hbFsyXSAqIG5vcm1hbFsyXSk7XHJcbiAgcmV0dXJuIFt0ICogbm9ybWFsWzBdLCB0ICogbm9ybWFsWzFdLCB0ICogbm9ybWFsWzJdXTtcclxufTtcclxuXHJcbmNvbnN0IE1BWF9OVU1fRkFDRVMgPSA2NDtcclxuY29uc3QgTUFYX05VTV9MT09TRV9FREdFUyA9IDMyO1xyXG5jb25zdCBFUEFfTUFYX05VTV9JVEVSID0gNjQ7XHJcbmNvbnN0IEVQQSA9IChhLCBiLCBjLCBkLCBvcmlnaW5zTWFwLCBib2R5MSwgYm9keTIpID0+IHtcclxuICBjb25zdCBjb2xsMSA9IGJvZHkxLmNvbGxpZGVyO1xyXG4gIGNvbnN0IGNvbGwyID0gYm9keTIuY29sbGlkZXI7XHJcbiAgY29uc3QgZmFjZXMgPSBbXTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xyXG4gICAgZmFjZXNbaV0gPSBbXTtcclxuICB9XHJcblxyXG4gIGZhY2VzWzBdWzBdID0gYTtcclxuICBmYWNlc1swXVsxXSA9IGI7XHJcbiAgZmFjZXNbMF1bMl0gPSBjO1xyXG4gIGZhY2VzWzBdWzNdID0gbm9ybWFsaXplKGNyb3NzKGRpZmYoYiwgYSksIGRpZmYoYywgYSkpKTtcclxuICBmYWNlc1sxXVswXSA9IGE7XHJcbiAgZmFjZXNbMV1bMV0gPSBjO1xyXG4gIGZhY2VzWzFdWzJdID0gZDtcclxuICBmYWNlc1sxXVszXSA9IG5vcm1hbGl6ZShjcm9zcyhkaWZmKGMsIGEpLCBkaWZmKGQsIGEpKSk7XHJcbiAgZmFjZXNbMl1bMF0gPSBhO1xyXG4gIGZhY2VzWzJdWzFdID0gZDtcclxuICBmYWNlc1syXVsyXSA9IGI7XHJcbiAgZmFjZXNbMl1bM10gPSBub3JtYWxpemUoY3Jvc3MoZGlmZihkLCBhKSwgZGlmZihiLCBhKSkpO1xyXG4gIGZhY2VzWzNdWzBdID0gYjtcclxuICBmYWNlc1szXVsxXSA9IGQ7XHJcbiAgZmFjZXNbM11bMl0gPSBjO1xyXG4gIGZhY2VzWzNdWzNdID0gbm9ybWFsaXplKGNyb3NzKGRpZmYoZCwgYiksIGRpZmYoYywgYikpKTtcclxuXHJcbiAgbGV0IG51bV9mYWNlcyA9IDQ7XHJcbiAgbGV0IGNsb3Nlc3RfZmFjZSA9IG51bGw7XHJcbiAgbGV0IHNlYXJjaF9kaXI7XHJcblxyXG4gIGxldCBwO1xyXG4gIGZvciAobGV0IGl0ZXJhdGlvbiA9IDA7IGl0ZXJhdGlvbiA8IEVQQV9NQVhfTlVNX0lURVI7ICsraXRlcmF0aW9uKSB7XHJcbiAgICBsZXQgbWluX2Rpc3QgPSBkb3QoZmFjZXNbMF1bMF0sIGZhY2VzWzBdWzNdKTtcclxuXHJcbiAgICBjbG9zZXN0X2ZhY2UgPSAwO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1fZmFjZXM7ICsraSkge1xyXG4gICAgICBsZXQgZGlzdCA9IGRvdChmYWNlc1tpXVswXSwgZmFjZXNbaV1bM10pO1xyXG4gICAgICBpZiAoZGlzdCA8IG1pbl9kaXN0KSB7XHJcbiAgICAgICAgbWluX2Rpc3QgPSBkaXN0O1xyXG4gICAgICAgIGNsb3Nlc3RfZmFjZSA9IGk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHNlYXJjaF9kaXIgPSBmYWNlc1tjbG9zZXN0X2ZhY2VdWzNdO1xyXG5cclxuICAgIGNvbnN0IHBfb3JpZ2luMSA9IGNvbGwxLnN1cHBvcnQoc2NhbGUoc2VhcmNoX2RpciwgLTEpKTtcclxuICAgIGNvbnN0IHBfb3JpZ2luMiA9IGNvbGwyLnN1cHBvcnQoc2VhcmNoX2Rpcik7XHJcbiAgICBwID0gZGlmZihwX29yaWdpbjIsIHBfb3JpZ2luMSk7XHJcbiAgICBvcmlnaW5zTWFwLnNldChwLCBbcF9vcmlnaW4xLCBwX29yaWdpbjJdKTtcclxuXHJcbiAgICBpZiAoZG90KHAsIHNlYXJjaF9kaXIpIC0gbWluX2Rpc3QgPCBFUEFfQklBUykge1xyXG4gICAgICBjb25zdCBmYWNlID0gZmFjZXNbY2xvc2VzdF9mYWNlXTtcclxuXHJcbiAgICAgIGNvbnN0IHBvaW50ID0gb3JpZ2luVG9GYWNlUHJvaihmYWNlKTtcclxuXHJcbiAgICAgIGNvbnN0IFtBYSwgQmFdID0gb3JpZ2luc01hcC5nZXQoZmFjZVswXSk7XHJcbiAgICAgIC8vY29uc3QgQWEgPSBmYWNlWzBdLm9hXHJcbiAgICAgIC8vY29uc3QgQmEgPSBmYWNlWzBdLm9iXHJcbiAgICAgIGNvbnN0IFtBYiwgQmJdID0gb3JpZ2luc01hcC5nZXQoZmFjZVsxXSk7XHJcbiAgICAgIC8vY29uc3QgQWIgPSBmYWNlWzFdLm9hXHJcbiAgICAgIC8vY29uc3QgQmIgPSBmYWNlWzFdLm9iXHJcbiAgICAgIGNvbnN0IFtBYywgQmNdID0gb3JpZ2luc01hcC5nZXQoZmFjZVsyXSk7XHJcbiAgICAgIC8vY29uc3QgQWMgPSBmYWNlWzJdLm9hXHJcbiAgICAgIC8vY29uc3QgQmMgPSBmYWNlWzJdLm9iXHJcblxyXG4gICAgICBjb25zdCByZXN1bHQgPSBiYXJpY2VudHJpYyhmYWNlLCBwb2ludCk7XHJcblxyXG4gICAgICBpZiAoaXNOYU4ocmVzdWx0WzBdICsgcmVzdWx0WzFdICsgcmVzdWx0WzJdKSkge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBsZXQgUEEgPSBzdW0oXHJcbiAgICAgICAgc3VtKHNjYWxlKEFhLCByZXN1bHRbMF0pLCBzY2FsZShBYiwgcmVzdWx0WzFdKSksXHJcbiAgICAgICAgc2NhbGUoQWMsIHJlc3VsdFsyXSlcclxuICAgICAgKTtcclxuICAgICAgLy9BYS5tdWx0aXBseShyZXN1bHRbMF0pLmFkZChBYi5tdWx0aXBseShyZXN1bHRbMV0pKS5hZGQoQWMubXVsdGlwbHkocmVzdWx0WzJdKSlcclxuICAgICAgbGV0IFBCID0gc3VtKFxyXG4gICAgICAgIHN1bShzY2FsZShCYSwgcmVzdWx0WzBdKSwgc2NhbGUoQmIsIHJlc3VsdFsxXSkpLFxyXG4gICAgICAgIHNjYWxlKEJjLCByZXN1bHRbMl0pXHJcbiAgICAgICk7XHJcbiAgICAgIC8vQmEubXVsdGlwbHkocmVzdWx0WzBdKS5hZGQoQmIubXVsdGlwbHkocmVzdWx0WzFdKSkuYWRkKEJjLm11bHRpcGx5KHJlc3VsdFsyXSkpXHJcblxyXG4gICAgICAvL2NvbnN0IHJhID0gUEEuc3Vic3RyYWN0KGNvbGwxLnBvcylcclxuXHJcbiAgICAgIGNvbnN0IG4gPSBub3JtYWxpemUoc2NhbGUoZmFjZVszXSwgLWRvdChwLCBzZWFyY2hfZGlyKSkpO1xyXG4gICAgICBpZiAobm9ybShuKSA8IDAuMDEpIHJldHVybiBudWxsO1xyXG4gICAgICBjb25zdCBwZW5EZXB0aCA9IC1kb3QoZGlmZihQQiwgUEEpLCBuKTtcclxuXHJcbiAgICAgIHJldHVybiB7IFBBLCBQQiwgbiwgcGVuRGVwdGggfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBsb29zZV9lZGdlcyA9IFtdO1xyXG4gICAgbGV0IG51bV9sb29zZV9lZGdlcyA9IDA7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bV9mYWNlczsgKytpKSB7XHJcbiAgICAgIGlmIChkb3QoZmFjZXNbaV1bM10sIGRpZmYocCwgZmFjZXNbaV1bMF0pKSA+IDApIHtcclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDM7IGorKykge1xyXG4gICAgICAgICAgbGV0IGN1cnJlbnRfZWRnZSA9IFtmYWNlc1tpXVtqXSwgZmFjZXNbaV1bKGogKyAxKSAlIDNdXTtcclxuICAgICAgICAgIGxldCBmb3VuZF9lZGdlID0gZmFsc2U7XHJcbiAgICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IG51bV9sb29zZV9lZGdlczsgaysrKSB7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICBsb29zZV9lZGdlc1trXVsxXSA9PT0gY3VycmVudF9lZGdlWzBdICYmXHJcbiAgICAgICAgICAgICAgbG9vc2VfZWRnZXNba11bMF0gPT09IGN1cnJlbnRfZWRnZVsxXVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICBsb29zZV9lZGdlc1trXVswXSA9IGxvb3NlX2VkZ2VzW251bV9sb29zZV9lZGdlcyAtIDFdWzBdO1xyXG4gICAgICAgICAgICAgIGxvb3NlX2VkZ2VzW2tdWzFdID0gbG9vc2VfZWRnZXNbbnVtX2xvb3NlX2VkZ2VzIC0gMV1bMV07XHJcbiAgICAgICAgICAgICAgbnVtX2xvb3NlX2VkZ2VzLS07XHJcbiAgICAgICAgICAgICAgZm91bmRfZWRnZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgayA9IG51bV9sb29zZV9lZGdlcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKCFmb3VuZF9lZGdlKSB7XHJcbiAgICAgICAgICAgIGlmIChudW1fbG9vc2VfZWRnZXMgPj0gTUFYX05VTV9MT09TRV9FREdFUykgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBsb29zZV9lZGdlc1tudW1fbG9vc2VfZWRnZXNdID0gW107XHJcbiAgICAgICAgICAgIGxvb3NlX2VkZ2VzW251bV9sb29zZV9lZGdlc11bMF0gPSBjdXJyZW50X2VkZ2VbMF07XHJcbiAgICAgICAgICAgIGxvb3NlX2VkZ2VzW251bV9sb29zZV9lZGdlc11bMV0gPSBjdXJyZW50X2VkZ2VbMV07XHJcbiAgICAgICAgICAgIG51bV9sb29zZV9lZGdlcysrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmYWNlc1tpXVswXSA9IGZhY2VzW251bV9mYWNlcyAtIDFdWzBdO1xyXG4gICAgICAgIGZhY2VzW2ldWzFdID0gZmFjZXNbbnVtX2ZhY2VzIC0gMV1bMV07XHJcbiAgICAgICAgZmFjZXNbaV1bMl0gPSBmYWNlc1tudW1fZmFjZXMgLSAxXVsyXTtcclxuICAgICAgICBmYWNlc1tpXVszXSA9IGZhY2VzW251bV9mYWNlcyAtIDFdWzNdO1xyXG4gICAgICAgIG51bV9mYWNlcy0tO1xyXG4gICAgICAgIGktLTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1fbG9vc2VfZWRnZXM7IGkrKykge1xyXG4gICAgICBpZiAobnVtX2ZhY2VzID49IE1BWF9OVU1fRkFDRVMpIGJyZWFrO1xyXG4gICAgICBmYWNlc1tudW1fZmFjZXNdID0gW107XHJcbiAgICAgIGZhY2VzW251bV9mYWNlc11bMF0gPSBsb29zZV9lZGdlc1tpXVswXTtcclxuICAgICAgZmFjZXNbbnVtX2ZhY2VzXVsxXSA9IGxvb3NlX2VkZ2VzW2ldWzFdO1xyXG4gICAgICBmYWNlc1tudW1fZmFjZXNdWzJdID0gcDtcclxuXHJcbiAgICAgIGZhY2VzW251bV9mYWNlc11bM10gPSBub3JtYWxpemUoXHJcbiAgICAgICAgY3Jvc3MoXHJcbiAgICAgICAgICBkaWZmKGxvb3NlX2VkZ2VzW2ldWzBdLCBsb29zZV9lZGdlc1tpXVsxXSksXHJcbiAgICAgICAgICBkaWZmKGxvb3NlX2VkZ2VzW2ldWzBdLCBwKVxyXG4gICAgICAgIClcclxuICAgICAgKTtcclxuXHJcbiAgICAgIGlmIChkb3QoZmFjZXNbbnVtX2ZhY2VzXVswXSwgZmFjZXNbbnVtX2ZhY2VzXVszXSkgKyAwLjAxIDwgMCkge1xyXG4gICAgICAgIGNvbnN0IHRlbXAgPSBmYWNlc1tudW1fZmFjZXNdWzBdO1xyXG4gICAgICAgIGZhY2VzW251bV9mYWNlc11bMF0gPSBmYWNlc1tudW1fZmFjZXNdWzFdO1xyXG4gICAgICAgIGZhY2VzW251bV9mYWNlc11bMV0gPSB0ZW1wO1xyXG4gICAgICAgIGZhY2VzW251bV9mYWNlc11bM10gPSBzY2FsZShmYWNlc1tudW1fZmFjZXNdWzNdLCAtMSk7XHJcbiAgICAgIH1cclxuICAgICAgbnVtX2ZhY2VzKys7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbnVsbDtcclxufTtcclxuXHJcbmNvbnN0IGdqa1Njb3BlID0ge307XHJcbmNvbnN0IF9namsgPSBnamsuYmluZChnamtTY29wZSk7XHJcblxyXG5jb25zdCBnZXRDb250YWN0TWFuaWZvbGQgPSAoYm9keTEsIGJvZHkyKSA9PiB7XHJcbiAgY29uc3QgY29sbDEgPSBib2R5MS5jb2xsaWRlcjtcclxuICBjb25zdCBjb2xsMiA9IGJvZHkyLmNvbGxpZGVyO1xyXG4gIGNvbnN0IGNvbnRhY3REYXRhID0gX2dqayhib2R5MSwgYm9keTIpO1xyXG4gIGlmICghY29udGFjdERhdGEpIHJldHVybiBudWxsO1xyXG5cclxuICBjb25zdCB7IFBBLCBQQiwgbiB9ID0gY29udGFjdERhdGE7XHJcblxyXG4gIGlmIChjb2xsMS50eXBlID09PSBcInNwaGVyZVwiIHx8IGNvbGwyLnR5cGUgPT09IFwic3BoZXJlXCIpIHtcclxuICAgIGNvbnN0IHJiID0gZGlmZihQQiwgY29sbDIucG9zKTtcclxuICAgIGNvbnN0IHJhID0gZGlmZihQQSwgY29sbDEucG9zKTtcclxuICAgIGNvbnN0IHBlbkRlcHRoID0gLWRvdChkaWZmKFBCLCBQQSksIG4pO1xyXG4gICAgY29uc3QgcmFMb2NhbCA9IG0zLnRyYW5zZm9ybVBvaW50KGNvbGwxLlJtYXRyaXhJbnZlcnNlLCByYSk7XHJcbiAgICBjb25zdCByYkxvY2FsID0gbTMudHJhbnNmb3JtUG9pbnQoY29sbDIuUm1hdHJpeEludmVyc2UsIHJiKTtcclxuICAgIGNvbnN0IGkgPSBbblsxXSArIG5bMl0sblsyXSAtIG5bMF0sIC1uWzBdIC0gblsxXV1cclxuICAgXHJcbiAgICBcclxuICAgIGNvbnN0IGogPSBjcm9zcyhzY2FsZShuLCAtMSksIGkpXHJcbiAgICByZXR1cm4gW1xyXG4gICAgICB7XHJcbiAgICAgICAgcmFMb2NhbCxcclxuICAgICAgICByYkxvY2FsLFxyXG4gICAgICAgIHJhLFxyXG4gICAgICAgIHJiLFxyXG4gICAgICAgIFBBLFxyXG4gICAgICAgIFBCLFxyXG4gICAgICAgIG4sXHJcbiAgICAgICAgcGVuRGVwdGgsXHJcbiAgICAgICAgYm9keTEsXHJcbiAgICAgICAgYm9keTIsXHJcbiAgICAgICAgaSxcclxuICAgICAgICBqLFxyXG4gICAgICB9LFxyXG4gICAgXTtcclxuICB9XHJcbiAgXHJcbiAgY29uc3QgblJldmVyc2UgPSBzY2FsZShuLCAtMSk7XHJcblxyXG4gIGNvbnN0IFtjb250YWN0RmFjZTEsIG5vcm1hbDFdID0gY29sbDEuZ2V0Q2xvc2VzdEZhY2VCeU5vcm1hbChuUmV2ZXJzZSk7XHJcbiAgY29uc3QgW2NvbnRhY3RGYWNlMiwgbm9ybWFsMl0gPSBjb2xsMi5nZXRDbG9zZXN0RmFjZUJ5Tm9ybWFsKG4pO1xyXG4gIGNvbnN0IHBsYW5lID0gW3NjYWxlKHN1bShQQSwgUEIpLCAwLjUpLCBuXTtcclxuICBjb25zdCBwcm9qZWN0aW9uczEgPSBjb250YWN0RmFjZTEubWFwKChwKSA9PlxyXG4gICAgcG9pbnRPblBsYW5lUHJvamVjdGlvbihwbGFuZSwgcClcclxuICApO1xyXG4gIGNvbnN0IHByb2plY3Rpb25zMiA9IGNvbnRhY3RGYWNlMi5tYXAoKHApID0+XHJcbiAgICBwb2ludE9uUGxhbmVQcm9qZWN0aW9uKHBsYW5lLCBwKVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IG9yaWdpbiA9IHBsYW5lWzBdO1xyXG4gIGNvbnN0IGkgPSBub3JtYWxpemUoIFtuWzFdICsgblsyXSxuWzJdIC0gblswXSwgLW5bMF0gLSBuWzFdXSlcclxuICAgXHJcbiAgICBcclxuICBjb25zdCBqID0gY3Jvc3Moc2NhbGUobiwgLTEpLCBpKVxyXG5cclxuICBsZXQgXzJkMSA9IHByb2plY3Rpb25zMS5tYXAoKHApID0+IGdldDJEY29vcmRzT25QbGFuZShpLCBqLCBkaWZmKHAsIG9yaWdpbikpKTtcclxuICBsZXQgXzJkMiA9IHByb2plY3Rpb25zMi5tYXAoKHApID0+IGdldDJEY29vcmRzT25QbGFuZShpLCBqLCBkaWZmKHAsIG9yaWdpbikpKTtcclxuXHJcbiAgY29uc3QgZGlyMSA9IGlzSW5DbG9ja3dpc2UoXzJkMSk7XHJcbiAgY29uc3QgZGlyMiA9IGlzSW5DbG9ja3dpc2UoXzJkMik7XHJcbiAgaWYgKGRpcjEgPCAwKSBfMmQxID0gXzJkMS5tYXAoKF8sIGkpID0+IF8yZDEuYXQoLWkpKTtcclxuICBpZiAoZGlyMiA8IDApIF8yZDIgPSBfMmQyLm1hcCgoXywgaSkgPT4gXzJkMi5hdCgtaSkpO1xyXG4gIFxyXG4gIGNvbnN0IGNsaXBwZWQgPSBjbGlwRmFjZVZzRmFjZShfMmQxLCBfMmQyKTtcclxuXHJcbiAgY29uc3QgXzNkID0gY2xpcHBlZC5tYXAoKHApID0+XHJcbiAgICBzdW0ob3JpZ2luLCBzdW0oc2NhbGUoaSwgcFswXSksIHNjYWxlKGosIHBbMV0pKSlcclxuICApO1xyXG5cclxuICBjb25zdCBmZWF0dXJlcyA9IFtdO1xyXG4gIF8zZC5mb3JFYWNoKChwb2ludCkgPT4ge1xyXG4gICAgY29uc3QgUEEgPSByYXlWc1BsYW5lSW50ZXJzZWMoW2NvbnRhY3RGYWNlMVswXSwgbm9ybWFsMV0sIHBvaW50LCBuKTtcclxuICAgIGlmICghaXNQb2ludEJlaGluZFBsYW5lKHBsYW5lLCBQQSwgMSkpIHJldHVybjtcclxuICAgIGNvbnN0IFBCID0gcmF5VnNQbGFuZUludGVyc2VjKFtjb250YWN0RmFjZTJbMF0sIG5vcm1hbDJdLCBwb2ludCwgbik7XHJcbiAgICBpZiAoIWlzUG9pbnRCZWhpbmRQbGFuZShwbGFuZSwgUEIsIC0xKSkgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IHJiID0gZGlmZihQQiwgY29sbDIucG9zKTtcclxuICAgIGNvbnN0IHJhID0gZGlmZihQQSwgY29sbDEucG9zKTtcclxuICAgIGNvbnN0IHBlbkRlcHRoID0gLWRvdChkaWZmKFBCLCBQQSksIG4pO1xyXG4gICAgY29uc3QgcmFMb2NhbCA9IG0zLnRyYW5zZm9ybVBvaW50KGNvbGwxLlJtYXRyaXhJbnZlcnNlLCByYSk7XHJcbiAgICBjb25zdCByYkxvY2FsID0gbTMudHJhbnNmb3JtUG9pbnQoY29sbDIuUm1hdHJpeEludmVyc2UsIHJiKTtcclxuXHJcbiAgICBmZWF0dXJlcy5wdXNoKHtcclxuICAgICAgcmFMb2NhbCxcclxuICAgICAgcmJMb2NhbCxcclxuICAgICAgcmEsXHJcbiAgICAgIHJiLFxyXG4gICAgICBQQSxcclxuICAgICAgUEIsXHJcbiAgICAgIG4sXHJcbiAgICAgIHBlbkRlcHRoLFxyXG4gICAgICBib2R5MSxcclxuICAgICAgYm9keTIsXHJcbiAgICAgIGksXHJcbiAgICAgIGosXHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgaWYgKGZlYXR1cmVzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgY29uc3QgcmIgPSBkaWZmKFBCLCBjb2xsMi5wb3MpO1xyXG4gICAgY29uc3QgcmEgPSBkaWZmKFBBLCBjb2xsMS5wb3MpO1xyXG4gICAgY29uc3QgcGVuRGVwdGggPSAtZG90KGRpZmYoUEIsIFBBKSwgbik7XHJcbiAgICBjb25zdCByYUxvY2FsID0gbTMudHJhbnNmb3JtUG9pbnQoY29sbDEuUm1hdHJpeEludmVyc2UsIHJhKTtcclxuICAgIGNvbnN0IHJiTG9jYWwgPSBtMy50cmFuc2Zvcm1Qb2ludChjb2xsMi5SbWF0cml4SW52ZXJzZSwgcmIpO1xyXG4gICAgZmVhdHVyZXMucHVzaCh7XHJcbiAgICAgIHJhTG9jYWwsXHJcbiAgICAgIHJiTG9jYWwsXHJcbiAgICAgIHJhLFxyXG4gICAgICByYixcclxuICAgICAgUEEsXHJcbiAgICAgIFBCLFxyXG4gICAgICBuLFxyXG4gICAgICBwZW5EZXB0aCxcclxuICAgICAgYm9keTEsXHJcbiAgICAgIGJvZHkyLFxyXG4gICAgICBpLFxyXG4gICAgICBqLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZmVhdHVyZXM7XHJcbn07XHJcblxyXG5leHBvcnQge1xyXG4gIGdldENvbnRhY3RNYW5pZm9sZCBhcyBnamssXHJcbiAgcG9pbnRPblBsYW5lUHJvamVjdGlvbixcclxuICBjbGlwUG9pbnRzQmVoaW5kUGxhbmUsXHJcbiAgZ2V0MkRjb29yZHNPblBsYW5lLFxyXG4gIHJheVZzUGxhbmVJbnRlcnNlYyxcclxufTtcclxuIiwiaW1wb3J0IHsgbTMsIHZlYzMgfSBmcm9tIFwibWF0aFwiO1xyXG5cclxuY29uc3QgeyBkaXN0YW5jZUZyb21MaW5lLCBub3JtLCBmaW5kRnVydGhlc3RQb2ludCwgc3VtLCBkaWZmLCBub3JtU3EsIGRvdCB9ID0gdmVjMztcclxuXHJcbmNvbnN0IHByZWMgPSAwLjAwMDU7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYW5pZm9sZCB7XHJcbiAgY29uc3RydWN0b3IoLi4uY29udGFjdHMpIHtcclxuICAgIHRoaXMuY29udGFjdHMgPSBjb250YWN0cztcclxuICAgIHRoaXMua2VlcCA9IHRydWU7XHJcbiAgfVxyXG4gIHVwZGF0ZSgpIHtcclxuICAgIGNvbnN0IGNvbnRhY3RzID0gdGhpcy5jb250YWN0cztcclxuICAgIGlmIChjb250YWN0cy5sZW5ndGggPCAyKSB7XHJcbiAgICAgIHRoaXMua2VlcCA9IGZhbHNlO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCBpID0gMCwgbiA9IGNvbnRhY3RzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICBjb25zdCBjb250YWN0ID0gY29udGFjdHNbaV07XHJcbiAgICAgIGNvbnN0IHBvczEgPSBjb250YWN0LmJvZHkxLmNvbGxpZGVyLnBvcztcclxuICAgICAgY29uc3QgcG9zMiA9IGNvbnRhY3QuYm9keTIuY29sbGlkZXIucG9zO1xyXG4gICAgICBjb25zdCBfcmEgPSBtMy50cmFuc2Zvcm1Qb2ludChcclxuICAgICAgICBjb250YWN0LmJvZHkxLmNvbGxpZGVyLlJtYXRyaXgsXHJcbiAgICAgICAgY29udGFjdC5yYUxvY2FsXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IF9yYiA9IG0zLnRyYW5zZm9ybVBvaW50KFxyXG4gICAgICAgIGNvbnRhY3QuYm9keTIuY29sbGlkZXIuUm1hdHJpeCxcclxuICAgICAgICBjb250YWN0LnJiTG9jYWxcclxuICAgICAgKTtcclxuICAgICAgY29uc3QgX1BBID0gc3VtKHBvczEsIF9yYSk7XHJcbiAgICAgIGNvbnN0IF9QQiA9IHN1bShwb3MyLCBfcmIpO1xyXG4gICAgICBjb25zdCByYUJpYXMgPSBkaWZmKGNvbnRhY3QuUEEsIF9QQSk7XHJcbiAgICAgIGNvbnN0IHJiQmlhcyA9IGRpZmYoY29udGFjdC5QQiwgX1BCKTtcclxuICAgICAgLy9jb250YWN0LnVwZGF0ZUNvbnRhY3REYXRhKClcclxuICAgICAgaWYgKG5vcm0ocmFCaWFzKSA+IHByZWMgfHwgbm9ybShyYkJpYXMpID4gcHJlYykge1xyXG4gICAgICAgIHRoaXMua2VlcCA9IGZhbHNlO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29udGFjdC5QQSA9IF9QQTtcclxuICAgICAgY29udGFjdC5QQiA9IF9QQjtcclxuICAgICAgY29udGFjdC5yYSA9IF9yYTtcclxuICAgICAgY29udGFjdC5yYiA9IF9yYjtcclxuICAgICAgY29udGFjdC5wZW5EZXB0aCA9IGRvdChjb250YWN0Lm4sIGRpZmYoX1BCLCBfUEEpKTtcclxuICAgICAgXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBtNCwgdmVjMywgbTMgfSBmcm9tIFwibWF0aFwiO1xyXG5cclxuaW1wb3J0IHtcclxuICBQcm9ncmFtSW5mbyxcclxuICBEcmF3ZXIsXHJcbiAgY3JlYXRlQm94LFxyXG4gIFByaW1pdGl2ZVJlbmRlcmVyLFxyXG4gIEdMY29udGV4dFdyYXBwZXIsXHJcbiAgY3JlYXRlQ2lyY2xlLFxyXG4gIGRlZmF1bHRTaGFkZXJzLFxyXG4gIHBvaW50TGlnaHRTaGFkZXJzLFxyXG4gIGNyZWF0ZVNwaGVyZSxcclxuICBjcmVhdGVUcnVuY2F0ZWRDb25lLFxyXG59IGZyb20gXCJncmFwaGljc1wiO1xyXG5cclxuaW1wb3J0IE1vdXNlSW5wdXQgZnJvbSBcIi4uL3NyYy9taXNjL21vdXNlSW5wdXRcIjtcclxuaW1wb3J0IEtleUlucHV0IGZyb20gXCIuLi9zcmMvbWlzYy9rZXlJbnB1dFwiO1xyXG5jb25zdCBtb3VzZUlucHV0ID0gbmV3IE1vdXNlSW5wdXQoKTtcclxuXHJcbm1vdXNlSW5wdXQubGlzdGVuKCk7XHJcbmNvbnN0IGtleUlucHV0ID0gbmV3IEtleUlucHV0KCk7XHJcbmtleUlucHV0Lmxpc3RlbigpO1xyXG5jb25zdCBjb250ZXh0ID0gbmV3IEdMY29udGV4dFdyYXBwZXIoXCJjYW52YXNcIik7XHJcbmNvbnN0IGdsID0gY29udGV4dC5nZXRDb250ZXh0KCk7XHJcbmNvbnRleHQucmVzaXplQ2FudmFzVG9EaXNwbGF5U2l6ZSgpO1xyXG5jb25zdCBkcmF3ZXIgPSBuZXcgRHJhd2VyKCk7XHJcbmRyYXdlci5zZXRDb250ZXh0KGNvbnRleHQpLnVwZGF0ZTNEUHJvamVjdGlvbk1hdHJpeCgpO1xyXG5cclxuY29uc3QgZGVmYXVsdFByb2dyYW1JbmZvID0gbmV3IFByb2dyYW1JbmZvKFxyXG4gIGRlZmF1bHRTaGFkZXJzLnZlcnQsXHJcbiAgZGVmYXVsdFNoYWRlcnMuZnJhZ1xyXG4pO1xyXG5jb25zdCBwb2ludExpZ2h0UHJvZ3JhbUluZm8gPSBuZXcgUHJvZ3JhbUluZm8oXHJcbiAgcG9pbnRMaWdodFNoYWRlcnMudmVydCxcclxuICBwb2ludExpZ2h0U2hhZGVycy5mcmFnXHJcbik7XHJcbmRlZmF1bHRQcm9ncmFtSW5mby5zZXRDb250ZXh0KGNvbnRleHQpLmNvbXBpbGVTaGFkZXJzKCkuY3JlYXRlVW5pZm9ybVNldHRlcnMoKTtcclxucG9pbnRMaWdodFByb2dyYW1JbmZvXHJcbiAgLnNldENvbnRleHQoY29udGV4dClcclxuICAuY29tcGlsZVNoYWRlcnMoKVxyXG4gIC5jcmVhdGVVbmlmb3JtU2V0dGVycygpO1xyXG5pbXBvcnQgcHJvZyBmcm9tIFwiLi4vc2hhZGVyXCI7XHJcbnByb2cuc2V0Q29udGV4dChjb250ZXh0KS5jb21waWxlU2hhZGVycygpLmNyZWF0ZVVuaWZvcm1TZXR0ZXJzKCk7XHJcbmNvbnN0IGJveCA9IG5ldyBQcmltaXRpdmVSZW5kZXJlcihjcmVhdGVCb3goMSwgMSwgMSkpO1xyXG5jb25zdCBwYW5lbCA9IG5ldyBQcmltaXRpdmVSZW5kZXJlcihjcmVhdGVCb3goMSwxLDEpKVxyXG5jb25zdCBzcGhlcmUgPSBuZXcgUHJpbWl0aXZlUmVuZGVyZXIoY3JlYXRlU3BoZXJlKDEsIDE1LCAxNSkpO1xyXG5jb25zdCBjaXJjbGUgPSBuZXcgUHJpbWl0aXZlUmVuZGVyZXIoY3JlYXRlQ2lyY2xlKDgsIDQpKTtcclxuY29uc3QgY3lsaW5kZXIgPSBuZXcgUHJpbWl0aXZlUmVuZGVyZXIoY3JlYXRlVHJ1bmNhdGVkQ29uZSgxLCAxLCAxLCA4LCAxKSk7XHJcbmNvbnN0IHBvaW50cyA9IG5ldyBQcmltaXRpdmVSZW5kZXJlcih7XHJcbiAgbW9kZTogZ2wuUE9JTlRTLFxyXG4gIG51bUVsZW1lbnRzOiAyLFxyXG4gIG9mZnNldDogMCxcclxufSk7XHJcbmNvbnN0IGxpbmUgPSBuZXcgUHJpbWl0aXZlUmVuZGVyZXIoe1xyXG4gIG1vZGU6IGdsLkxJTkVTLFxyXG4gIG51bUVsZW1lbnRzOiAyLFxyXG4gIG9mZnNldDogMCxcclxufSk7XHJcblxyXG5ib3hcclxuICAuc2V0Q29udGV4dChjb250ZXh0KVxyXG4gIC5jcmVhdGVWQU8oKVxyXG4gIC5zZXREcmF3ZXIoZHJhd2VyKVxyXG4gIC5zZXRQcm9ncmFtSW5mbyhkZWZhdWx0UHJvZ3JhbUluZm8pXHJcbiAgLmNyZWF0ZUdlb21ldHJ5QnVmZmVycygpXHJcbiAgLnNldEF0dHJpYnV0ZXMoKVxyXG4gIC5zZXRNb2RlKDIpO1xyXG5wYW5lbFxyXG4gIC5zZXRDb250ZXh0KGNvbnRleHQpXHJcbiAgLmNyZWF0ZVZBTygpXHJcbiAgLnNldERyYXdlcihkcmF3ZXIpXHJcbiAgLnNldFByb2dyYW1JbmZvKHBvaW50TGlnaHRQcm9ncmFtSW5mbylcclxuICAuY3JlYXRlR2VvbWV0cnlCdWZmZXJzKClcclxuICAuc2V0QXR0cmlidXRlcygpXHJcbiAgLnNldE1vZGUoNCk7XHJcbmN5bGluZGVyXHJcbiAgLnNldENvbnRleHQoY29udGV4dClcclxuICAuY3JlYXRlVkFPKClcclxuICAuc2V0RHJhd2VyKGRyYXdlcilcclxuICAuc2V0UHJvZ3JhbUluZm8oZGVmYXVsdFByb2dyYW1JbmZvKVxyXG4gIC5jcmVhdGVHZW9tZXRyeUJ1ZmZlcnMoKVxyXG4gIC5zZXRBdHRyaWJ1dGVzKClcclxuICAuc2V0TW9kZSgyKTtcclxuc3BoZXJlXHJcbiAgLnNldENvbnRleHQoY29udGV4dClcclxuICAuY3JlYXRlVkFPKClcclxuICAuc2V0RHJhd2VyKGRyYXdlcilcclxuICAuc2V0UHJvZ3JhbUluZm8oZGVmYXVsdFByb2dyYW1JbmZvKVxyXG4gIC5jcmVhdGVHZW9tZXRyeUJ1ZmZlcnMoKVxyXG4gIC5zZXRBdHRyaWJ1dGVzKClcclxuICAuc2V0TW9kZSgyKTtcclxuY2lyY2xlXHJcbiAgLnNldENvbnRleHQoY29udGV4dClcclxuICAuY3JlYXRlVkFPKClcclxuICAuc2V0RHJhd2VyKGRyYXdlcilcclxuICAuc2V0UHJvZ3JhbUluZm8oZGVmYXVsdFByb2dyYW1JbmZvKVxyXG4gIC5jcmVhdGVHZW9tZXRyeUJ1ZmZlcnMoKVxyXG4gIC5zZXRBdHRyaWJ1dGVzKClcclxuICAuc2V0TW9kZSgzKTtcclxuXHJcbmxpbmVcclxuICAuc2V0Q29udGV4dChjb250ZXh0KVxyXG4gIC5jcmVhdGVWQU8oKVxyXG4gIC5zZXREcmF3ZXIoZHJhd2VyKVxyXG4gIC5zZXRQcm9ncmFtSW5mbyhkZWZhdWx0UHJvZ3JhbUluZm8pXHJcbiAgLmNyZWF0ZUJ1ZmZlckF0dHJpYkRhdGEoXCJhX3Bvc2l0aW9uXCIsIFwidmVjM1wiLCB7IGxvY2F0aW9uOiAwIH0pXHJcbiAgLnNldE93bkF0dHJpYnV0ZShcImFfcG9zaXRpb25cIilcclxuICAuYnVmZmVyRGF0YShcImFfcG9zaXRpb25cIiwgbmV3IEZsb2F0MzJBcnJheShbMCwgMCwgMCwgMCwgMSwgMF0pKTtcclxuXHJcbnBvaW50c1xyXG4gIC5zZXRDb250ZXh0KGNvbnRleHQpXHJcbiAgLmNyZWF0ZVZBTygpXHJcbiAgLnNldERyYXdlcihkcmF3ZXIpXHJcbiAgLnNldFByb2dyYW1JbmZvKGRlZmF1bHRQcm9ncmFtSW5mbylcclxuICAuY3JlYXRlQnVmZmVyQXR0cmliRGF0YShcImFfcG9zaXRpb25cIiwgXCJ2ZWMzXCIsIHsgbG9jYXRpb246IDAgfSlcclxuICAuc2V0T3duQXR0cmlidXRlKFwiYV9wb3NpdGlvblwiKVxyXG4gIC5idWZmZXJEYXRhKFwiYV9wb3NpdGlvblwiLCBuZXcgRmxvYXQzMkFycmF5KFswLCAwLCAwXSkpO1xyXG5cclxuY29uc3QgdW5pZm9ybXMgPSB7XHJcbiAgdV9saWdodFdvcmxkUG9zaXRpb246IFszMCwgNTAsIDMwXSxcclxuICB1X2FtYmllbnRMaWdodDogWzEsIDEsIDAuMywgMC4xMV0sXHJcbiAgdV9yZXZlcnNlTGlnaHREaXJlY3Rpb246IFsxLCAwLCAwXSxcclxuICB1X3NoaW5pbmVzczogMzAwLFxyXG59O1xyXG5cclxuaW1wb3J0IFNpbXVsYXRpb24gZnJvbSBcIi4uL3NyYy9waHlzaWNzL1NpbXVsYXRpb25cIjtcclxuaW1wb3J0IHsgUGxheWVyLCBSaWdpZEJvZHkgfSBmcm9tIFwiLi4vc3JjL3BoeXNpY3MvUmlnaWRCb2R5XCI7XHJcbmltcG9ydCB7IEJveCwgQ3lsaW5kZXIsIFNwaGVyZSB9IGZyb20gXCIuLi9zcmMvcGh5c2ljcy9jb2xsaWRlclwiO1xyXG5pbXBvcnQgeyBDb250cm9sbGFibGUsIE5vY2xpcCB9IGZyb20gXCIuLi9zcmMvbWlzYy9jb250cm9sbGFibGVcIjtcclxuaW1wb3J0IFJhZ2RvbGwgZnJvbSBcIi4vUmFnZG9sbFwiO1xyXG5pbXBvcnQgeyBKb2ludCwgSm9pbnRQb3NpdGlvbkNvbnN0cmFpbnQgfSBmcm9tIFwiLi4vc3JjL3BoeXNpY3MvY29uc3RyYWludHNcIjtcclxuXHJcbmNvbnN0IGcgPSA5Ljg7XHJcbmNvbnN0IHNpbSA9IG5ldyBTaW11bGF0aW9uKCk7XHJcblxyXG5jb25zdCBmbG9vciA9IHsgcGh5c2ljczogbmV3IFJpZ2lkQm9keShuZXcgQm94KDEwMDAsIDYsIDEwMDApKSwgc3ByaXRlOiBib3h9O1xyXG5cclxuY29uc3Qgb2JqZWN0cyA9IFtmbG9vcl07XHJcbmZsb29yLnBoeXNpY3MudHJhbnNsYXRlKFswLC0xODAsMF0pXHJcbmZsb29yLnBoeXNpY3Muc2V0TWFzcygxMDAwMDAwMDAwMDAwKTtcclxuXHJcbi8vZmxvb3IucGh5c2ljcy50cmFuc2xhdGUoWzAsIDAsIDBdKTtcclxuZmxvb3IucGh5c2ljcy5mcmljdGlvbiA9IDEwXHJcbmZsb29yLnBoeXNpY3Muc3RhdGljID0gdHJ1ZTtcclxuZmxvb3IucGh5c2ljcy5ET0YgPSBbMSwgMSwgMSwgMCwgMCwgMF07XHJcbnNpbS5hZGRPYmplY3QoZmxvb3IucGh5c2ljcyk7XHJcblxyXG5cclxuXHJcbmZvcihsZXQgaSA9IDA7IGkgPCA1MDsgaSsrKXtcclxuICBjb25zdCBwbGFuZSA9IHsgcGh5c2ljczogbmV3IFJpZ2lkQm9keShuZXcgQm94KDIsIDIsIDEwMCkpLCBzcHJpdGU6IHBhbmVsIH07XHJcbiAgcGxhbmUucGh5c2ljcy50cmFuc2xhdGUoW2kqMiwgMTAgLSBpKjIgICwwXSk7XHJcbiAgcGxhbmUucGh5c2ljcy5zZXRNYXNzKDIwMDAwMDAwMCk7XHJcbiAgcGxhbmUucGh5c2ljcy5yb3RhdGUoWzAsMCwtMC4yOV0pO1xyXG4gIHBsYW5lLnBoeXNpY3Muc3RhdGljID0gdHJ1ZVxyXG4gIHNpbS5hZGRTdGF0aWNPYmplY3QocGxhbmUucGh5c2ljcyk7XHJcbiAgb2JqZWN0cy5wdXNoKHBsYW5lKTtcclxufVxyXG5mb3IobGV0IGkgPSAwOyBpIDwgNTA7IGkrKyl7XHJcbiAgY29uc3QgcGxhbmUgPSB7IHBoeXNpY3M6IG5ldyBSaWdpZEJvZHkobmV3IEJveCgyLCAyLCAxMDApKSwgc3ByaXRlOiBwYW5lbCB9O1xyXG4gIHBsYW5lLnBoeXNpY3MudHJhbnNsYXRlKFsxNjAgLSBpKjIsIC04MCAtIGkgKiAyICwwXSk7XHJcbiAgcGxhbmUucGh5c2ljcy5zZXRNYXNzKDIwMDAwMDAwMCk7XHJcbiAgcGxhbmUucGh5c2ljcy5yb3RhdGUoWzAsMCwwLjJdKTtcclxuICBwbGFuZS5waHlzaWNzLnN0YXRpYyA9IHRydWVcclxuICBzaW0uYWRkU3RhdGljT2JqZWN0KHBsYW5lLnBoeXNpY3MpO1xyXG4gIG9iamVjdHMucHVzaChwbGFuZSk7XHJcbn1cclxuY29uc3QgcGxhbmUgPSB7IHBoeXNpY3M6IG5ldyBSaWdpZEJvZHkobmV3IEJveCg2LCAyLCAxMDApKSwgc3ByaXRlOiBwYW5lbCB9XHJcbnBsYW5lLnBoeXNpY3MudHJhbnNsYXRlKFsxMDIgLCAtOTAgLDBdKTtcclxuICBwbGFuZS5waHlzaWNzLnNldE1hc3MoMjAwMDAwMDAwKTtcclxuICAvL3BsYW5lLnBoeXNpY3Mucm90YXRlKFswLDAsMC4yXSk7XHJcbiAgcGxhbmUucGh5c2ljcy5zdGF0aWMgPSB0cnVlXHJcbiAgc2ltLmFkZFN0YXRpY09iamVjdChwbGFuZS5waHlzaWNzKTtcclxuICBvYmplY3RzLnB1c2gocGxhbmUpO1xyXG5mb3IgKGxldCBpID0gMDsgaSA8IDE1OyBpKyspIHtcclxuICBjb25zdCBjdWJlID0geyBwaHlzaWNzOiBuZXcgUmlnaWRCb2R5KG5ldyBCb3goMywgMywgMykpLCBzcHJpdGU6IGJveCwgdW5pZm9ybXMgOiB7dV9jb2xvciA6IFswLDAsMSwxXX0gfTtcclxuICBjdWJlLnBoeXNpY3MudHJhbnNsYXRlKFsxMDEsIC04Ny41ICsgMy4wMSAqIChpJTMpLCAtMi41ICsgKGklNSkgKiAzXSk7XHJcbiAgY3ViZS5waHlzaWNzLnNldE1hc3MoMjApO1xyXG4gIGN1YmUucGh5c2ljcy5hZGRBY2NlbGVyYXRpb24oWzAsIC1nLCAwXSk7XHJcbiAgc2ltLmFkZE9iamVjdChjdWJlLnBoeXNpY3MpO1xyXG4gIG9iamVjdHMucHVzaChjdWJlKTtcclxuXHJcbn1cclxuXHJcbmZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XHJcbiAgY29uc3QgeyBwYXJ0cywgY29uc3RyYWludHMsIHBvc2l0aW9uQ29uc3RyYWludHMgfSA9IG5ldyBSYWdkb2xsKFsxMCwgNSArIDMuMDEgKiBpLCAwXSk7XHJcblxyXG4gIGZvciAoY29uc3QgbmFtZSBpbiBwYXJ0cykge1xyXG4gICAgc2ltLmFkZE9iamVjdChwYXJ0c1tuYW1lXSk7XHJcbiAgICBwYXJ0c1tuYW1lXS5hZGRBY2NlbGVyYXRpb24oWzAsIC1nLCAwXSk7XHJcbiAgICBwYXJ0c1tuYW1lXS5hZGRWZWxvY2l0eShbMTAsIDAsIDBdKTtcclxuICAgIHBhcnRzW25hbWVdLnNldE1hc3MoNSlcclxuICAgIC8vcGFydHNbbmFtZV0uZnJpY3Rpb24gPSAxMDtcclxuICAgIGxldCBzcHJpdGUgPSBjeWxpbmRlclxyXG4gICAgaWYobmFtZSA9PT0gJ2hlYWQnKSB7XHJcbiAgICAgIHNwcml0ZSA9IHNwaGVyZVxyXG4gICAgfVxyXG4gICAgaWYobmFtZSA9PT0gJ2JvZHknKSB7XHJcbiAgICAgIHNwcml0ZSA9IGJveFxyXG4gICAgICBcclxuICAgIH1cclxuICAgIG9iamVjdHMucHVzaCh7IHBoeXNpY3M6IHBhcnRzW25hbWVdLCBzcHJpdGUsIHVuaWZvcm1zIDoge3VfY29sb3IgOiBbMCwwLjUsMCwxXX0gfSk7XHJcbiAgfVxyXG4gIHBhcnRzLmhlYWQuc2V0TWFzcygxMClcclxuICBzaW0uYWRkQ29uc3RyYWludHMoY29uc3RyYWludHMsIFwicmFnZG9sbFwiICsgaSk7XHJcbiAgc2ltLmFkZFBvc2l0aW9uQ29uc3RyYWludHMocG9zaXRpb25Db25zdHJhaW50cywgXCJyYWdkb2xcIiArIGkpO1xyXG59XHJcblxyXG5cclxuY29uc3QgcGxheWVyID0gbmV3IE5vY2xpcCgpO1xyXG5wbGF5ZXIuY2FtUG9zID0gWzE0MCwgLTUwLCA1XVxyXG5wbGF5ZXIucm90YXRpb25ZID0gTWF0aC5QSS8yXHJcbnBsYXllci5yb3RhdGlvblggPSAtMC4xICogTWF0aC5QSS8yXHJcbnBsYXllci5saXN0ZW5LZXlib2FyZChrZXlJbnB1dCk7XHJcbnBsYXllci5saXN0ZW5Nb3VzZShtb3VzZUlucHV0KTtcclxuXHJcblJpZ2lkQm9keS5zZXRUcmVzaG9sZCgwLjAwNSk7XHJcblxyXG5sZXQgbGFzdENhbGwgPSBEYXRlLm5vdygpO1xyXG5jb25zdCBmcHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zwc1wiKTtcclxuXHJcbmNvbnN0IGxvb3AgPSAoKSA9PiB7XHJcbiAgc2ltLnRpY2soMC4wMTYpO1xyXG4gIHBsYXllci50aWNrKCk7XHJcbiAgY29uc3QgY3VyZW50VGltZSA9IERhdGUubm93KCk7XHJcbiAgY29uc3QgZGVsdGEgPSBjdXJlbnRUaW1lIC0gbGFzdENhbGw7XHJcbiAgZnBzLnRleHRDb250ZW50ID0gKDEgLyBkZWx0YSkgKiAxMDAwO1xyXG4gIGxhc3RDYWxsID0gY3VyZW50VGltZTtcclxuICBnbC5jbGVhcihnbC5DT0xPUl9CVUZGRVJfQklUIHwgZ2wuREVQVEhfQlVGRkVSX0JJVCk7XHJcbiAgZ2wuZW5hYmxlKGdsLkNVTExfRkFDRSk7XHJcbiAgZ2wuZW5hYmxlKGdsLkRFUFRIX1RFU1QpO1xyXG5cclxuICBjb25zdCBjYW1lcmFNYXRyaXggPSBwbGF5ZXIuY2FtTWF0cml4O1xyXG4gIGNvbnN0IHsgdHJhbnNsYXRpb24gfSA9IG00LmRlY29tcG9zZShjYW1lcmFNYXRyaXgpO1xyXG5cclxuICBvYmplY3RzLmZvckVhY2goKG9iaikgPT4ge1xyXG4gICAgY29uc3QgdV9tYXRyaXggPSBvYmoucGh5c2ljcy5jb2xsaWRlci5nZXRNNCgpO1xyXG5cclxuICAgIGNvbnN0IHVfdmlld1dvcmxkUG9zaXRpb24gPSB0cmFuc2xhdGlvbjtcclxuICAgIGNvbnN0IHNwcml0ZVVuaWZvcm1zID0gb2JqLnVuaWZvcm1zIHx8IHt9XHJcbiAgICBvYmouc3ByaXRlLmRyYXcoXHJcbiAgICAgIHsgLi4udW5pZm9ybXMsIHVfbWF0cml4LCB1X3ZpZXdXb3JsZFBvc2l0aW9uLCB1X2NvbG9yOiBbMSwgMC41LCAwLjEsIDFdLCAuLi5zcHJpdGVVbmlmb3JtcyB9LFxyXG4gICAgICBjYW1lcmFNYXRyaXhcclxuICAgICk7XHJcbiAgfSk7XHJcblxyXG4gIHBvaW50cy5kcmF3KFxyXG4gICAge1xyXG4gICAgICB1X21hdHJpeDogbTQuaWRlbnRpdHkoKSxcclxuICAgICAgdV9jb2xvcjogWzAsIDAuNSwgMC4xLCAxXSxcclxuICAgICAgdV93b3JsZFZpZXdQb3NpdGlvbjogY2FtZXJhTWF0cml4LFxyXG4gICAgfSxcclxuICAgIGNhbWVyYU1hdHJpeFxyXG4gICk7XHJcbi8qXHJcbiAgZm9yIChjb25zdCBbbmFtZSwgY29uc3RyYWludHNdIG9mIHNpbS5jb25zdHJhaW50cykge1xyXG4gICAgY29uc3RyYWludHMuZm9yRWFjaCgoYykgPT4ge1xyXG4gICAgICBwb2ludHMuZHJhdyhcclxuICAgICAgICB7XHJcbiAgICAgICAgICB1X21hdHJpeDogbTQudHJhbnNsYXRpb24oLi4uYy5QQSksXHJcbiAgICAgICAgICB1X2NvbG9yOiBbMS4wLCAwLjAsIDAuMSwgMV0sXHJcbiAgICAgICAgICB1X3dvcmxkVmlld1Bvc2l0aW9uOiBjYW1lcmFNYXRyaXgsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjYW1lcmFNYXRyaXhcclxuICAgICAgKTtcclxuICAgICAgcG9pbnRzLmRyYXcoXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdV9tYXRyaXg6IG00LnRyYW5zbGF0aW9uKC4uLmMuUEIpLFxyXG4gICAgICAgICAgdV9jb2xvcjogWzEuMCwgMC4wLCAwLjEsIDFdLFxyXG4gICAgICAgICAgdV93b3JsZFZpZXdQb3NpdGlvbjogY2FtZXJhTWF0cml4LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2FtZXJhTWF0cml4XHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgY29uc3QgbWFuaWZvbGRzID0gc2ltLmNvbGxpc2lvbk1hbmlmb2xkcy52YWx1ZXMoKTtcclxuXHJcbiAgZm9yIChjb25zdCBtYW5pZm9sZCBvZiBtYW5pZm9sZHMpIHtcclxuICAgIG1hbmlmb2xkLmNvbnRhY3RzLmZvckVhY2goKGNvbnRhY3QpID0+IHtcclxuICAgICAgcG9pbnRzXHJcbiAgICAgICAgLmRyYXcoXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHVfbWF0cml4OiBtNC50cmFuc2xhdGlvbiguLi5jb250YWN0LlBBKSxcclxuICAgICAgICAgICAgdV9jb2xvcjogWzAuNiwgMC42LCAwLjAsIDFdLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGNhbWVyYU1hdHJpeFxyXG4gICAgICAgIClcclxuICAgICAgICAuZHJhdyhcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdV9tYXRyaXg6IG00LnRyYW5zbGF0aW9uKC4uLmNvbnRhY3QuUEIpLFxyXG4gICAgICAgICAgICB1X2NvbG9yOiBbMC41LCAwLjEsIDAuMiwgMV0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgY2FtZXJhTWF0cml4XHJcbiAgICAgICAgKTtcclxuICAgIH0pO1xyXG4gIH1cclxuKi9cclxuICBnbC52aWV3cG9ydCgwLCAwLCBnbC5jYW52YXMud2lkdGgsIGdsLmNhbnZhcy5oZWlnaHQpO1xyXG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZShsb29wKTtcclxufTtcclxubG9vcCgpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=