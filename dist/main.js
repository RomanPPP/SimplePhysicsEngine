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
          constraint.biasFactor = 0.1;
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
      manifold.contacts.forEach(c=>manifold.lambdas.push(lambda[++ndx]))
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


    /*for (let i = 0; i < n; i++) {
      const constraint = this.constraints[i];
      const { body1, body2, J } = constraint;
      const k = i * n;
      for (let j = 0; j < n; j++) {
        if (k === j) {
          this.JMJ[k + j] = () => constraint.effMass;
          this.JMJp[k + j] = () =>
            constraint.body1.inverseMass + constraint.body2.inverseMass;
          continue;
        }

        const _constraint = this.constraints[j];

        const _body1 = _constraint.body1;
        const _body2 = _constraint.body2;

        const fp1 =
          body1 === _body1
            ? () => vec.dot(constraint.JM[0], _constraint.J[0])
            : () => 0;
        const fp2 =
          body2 === _body2
            ? () => vec.dot(constraint.JM[2], _constraint.J[2])
            : () => 0;
        const fp3 =
          body1 === _body2
            ? () => vec.dot(constraint.JM[0], _constraint.J[2])
            : () => 0;
        const fp4 =
          body2 === _body1
            ? () => vec.dot(constraint.JM[2], _constraint.J[0])
            : () => 0;
        const f1 =
          body1 === _body1
            ? () =>
                vec.dot(constraint.JM[0], _constraint.J[0]) +
                vec.dot(constraint.JM[1], _constraint.J[1])
            : () => 0;
        const f2 =
          body2 === _body2
            ? () =>
                vec.dot(constraint.JM[2], _constraint.J[2]) +
                vec.dot(constraint.JM[3], _constraint.J[3])
            : () => 0;
        const f3 =
          body1 === _body2
            ? () =>
                vec.dot(constraint.JM[0], _constraint.J[2]) +
                vec.dot(constraint.JM[1], _constraint.J[3])
            : () => 0;
        const f4 =
          body2 === _body1
            ? () =>
                vec.dot(constraint.JM[2], _constraint.J[0]) +
                vec.dot(constraint.JM[3], _constraint.J[1])
            : () => 0;

        this.JMJ[k + j] = () => f1() + f2() + f3() + f4();
        this.JMJp[k + j] = () => fp1() + fp2() + fp3() + fp4();
      }

        vec.dot(J[0], body1.velocity) +
        vec.dot(J[1], body1.angularV) +
        vec.dot(J[2], body2.velocity) +
        vec.dot(J[3], body2.angularV);
      this.JV[i] = (deltaTime) =>
        -constraint.relativeVelocityNormalProjection +
        (Math.max(0, constraint.penDepth - constraint.treshold) / deltaTime) *
          constraint.biasFactor; //+ b* 0.125;

      this.JpV[i] = () => -vec.dot(J[0], body1.pseudoVelocity) -
                            vec.dot(J[1], body1.pseudoAngularV) -
                            vec.dot(J[2], body2.pseudoVelocity) -
                           vec.dot(J[3], body2.pseudoAngularV) - constraint.bias/deltaTime 
      this.JpV[i] = (deltaTime) =>
        (Math.max(0, constraint.penDepth - constraint.treshold) / deltaTime) *
        constraint.pseudoBiasFactor;
    }*/
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
    let numIter = 10

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSwyQ0FBMkM7QUFDckQ7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQSxZQUFZLGdCQUFnQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSwyQ0FBMkM7QUFDckQ7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBLGlFQUFlLEtBQUssRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwT007QUFDWTtBQUNnQjtBQUNDOztBQUV4RDtBQUNBO0FBQ0E7QUFD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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDM0tBO0FBQ0EsT0FBTyxNQUFNLEVBQUUsbUJBQU8sQ0FBQywrQ0FBUTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsV0FBVztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDclRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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WSwwREFBMEQ7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksMEJBQTBCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDBEQUEwRDtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksaUNBQWlDO0FBQzdDO0FBQ0E7QUFDQSxjQUFjLG1EQUFpQjtBQUMvQixjQUFjLG1EQUFpQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sbURBQWlCO0FBQ3ZCO0FBQ0EsTUFBTSxtREFBaUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxlQUFlO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGVBQWU7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGlDQUFpQztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxtREFBaUI7QUFDdkI7QUFDQSxNQUFNLG1EQUFpQjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSwwREFBMEQ7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksaUNBQWlDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFTRTs7Ozs7Ozs7Ozs7Ozs7OztBQ3BaRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDd0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkJZO0FBQ3VCO0FBQzNEO0FBQ0EsUUFBUSx5REFBeUQsRUFBRSxzQ0FBSTtBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQiw0QkFBNEI7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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S0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Bocy8uL25vZGVfbW9kdWxlcy9ncmFwaGljcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9waHMvLi9ub2RlX21vZHVsZXMvZ3JhcGhpY3Mvc3JjL0J1ZmZlckF0dHJpYnV0ZS5qcyIsIndlYnBhY2s6Ly9waHMvLi9ub2RlX21vZHVsZXMvZ3JhcGhpY3Mvc3JjL0RyYXdlci5qcyIsIndlYnBhY2s6Ly9waHMvLi9ub2RlX21vZHVsZXMvZ3JhcGhpY3Mvc3JjL01lc2hSZW5kZXJlci5qcyIsIndlYnBhY2s6Ly9waHMvLi9ub2RlX21vZHVsZXMvZ3JhcGhpY3Mvc3JjL01vZGVsLmpzIiwid2VicGFjazovL3Bocy8uL25vZGVfbW9kdWxlcy9ncmFwaGljcy9zcmMvUHJpbWl0aXZlUmVuZGVyZXIuanMiLCJ3ZWJwYWNrOi8vcGhzLy4vbm9kZV9tb2R1bGVzL2dyYXBoaWNzL3NyYy9hdHRyaWJUeXBlUHJvcHMuanMiLCJ3ZWJwYWNrOi8vcGhzLy4vbm9kZV9tb2R1bGVzL2dyYXBoaWNzL3NyYy9lbnVtcy5qcyIsIndlYnBhY2s6Ly9waHMvLi9ub2RlX21vZHVsZXMvZ3JhcGhpY3Mvc3JjL2dsQ29udGV4V3JhcHBlci5qcyIsIndlYnBhY2s6Ly9waHMvLi9ub2RlX21vZHVsZXMvZ3JhcGhpY3Mvc3JjL2dsdGZVdGlscy5qcyIsIndlYnBhY2s6Ly9waHMvLi9ub2RlX21vZHVsZXMvZ3JhcGhpY3Mvc3JjL3ByaW1pdGl2ZXMuanMiLCJ3ZWJwYWNrOi8vcGhzLy4vbm9kZV9tb2R1bGVzL2dyYXBoaWNzL3NyYy9wcm9ncmFtSW5mby5qcyIsIndlYnBhY2s6Ly9waHMvLi9ub2RlX21vZHVsZXMvZ3JhcGhpY3Mvc3JjL3JlbmRlci9zaGFkZXJzL2RlZmF1bHQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcGhzLy4vbm9kZV9tb2R1bGVzL2dyYXBoaWNzL3NyYy9yZW5kZXIvc2hhZGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly9waHMvLi9ub2RlX21vZHVsZXMvZ3JhcGhpY3Mvc3JjL3JlbmRlci9zaGFkZXJzL3BvaW50TGlnaHQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcGhzLy4vbm9kZV9tb2R1bGVzL2dyYXBoaWNzL3NyYy90ZXh0dXJlSW5mby5qcyIsIndlYnBhY2s6Ly9waHMvLi9ub2RlX21vZHVsZXMvbWF0aC9pbmRleC5qcyIsIndlYnBhY2s6Ly9waHMvLi9ub2RlX21vZHVsZXMvbWF0aC9zcmMvYWFiYi5qcyIsIndlYnBhY2s6Ly9waHMvLi9ub2RlX21vZHVsZXMvbWF0aC9zcmMvbTMuanMiLCJ3ZWJwYWNrOi8vcGhzLy4vbm9kZV9tb2R1bGVzL21hdGgvc3JjL200LmpzIiwid2VicGFjazovL3Bocy8uL25vZGVfbW9kdWxlcy9tYXRoL3NyYy92ZWMzLmpzIiwid2VicGFjazovL3Bocy8uL3JhZ2RvbGxEZW1vL1JhZ2RvbGwuanMiLCJ3ZWJwYWNrOi8vcGhzLy4vc2hhZGVyLmpzIiwid2VicGFjazovL3Bocy8uL3NyYy9taXNjL2NvbnRyb2xsYWJsZS5qcyIsIndlYnBhY2s6Ly9waHMvLi9zcmMvbWlzYy9rZXlJbnB1dC5qcyIsIndlYnBhY2s6Ly9waHMvLi9zcmMvbWlzYy9tb3VzZUlucHV0LmpzIiwid2VicGFjazovL3Bocy8uL3NyYy9waHlzaWNzL1JpZ2lkQm9keS5qcyIsIndlYnBhY2s6Ly9waHMvLi9zcmMvcGh5c2ljcy9TaW11bGF0aW9uLmpzIiwid2VicGFjazovL3Bocy8uL3NyYy9waHlzaWNzL1N5c3RlbS5qcyIsIndlYnBhY2s6Ly9waHMvLi9zcmMvcGh5c2ljcy9UcmVlLmpzIiwid2VicGFjazovL3Bocy8uL3NyYy9waHlzaWNzL2NsaXBwaW5nLmpzIiwid2VicGFjazovL3Bocy8uL3NyYy9waHlzaWNzL2NvbGxpZGVyLmpzIiwid2VicGFjazovL3Bocy8uL3NyYy9waHlzaWNzL2NvbnN0cmFpbnRzLmpzIiwid2VicGFjazovL3Bocy8uL3NyYy9waHlzaWNzL2V2ZW50RW1pdHRlci5qcyIsIndlYnBhY2s6Ly9waHMvLi9zcmMvcGh5c2ljcy9namsuanMiLCJ3ZWJwYWNrOi8vcGhzLy4vc3JjL3BoeXNpY3MvbWFuaWZvbGQuanMiLCJ3ZWJwYWNrOi8vcGhzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Bocy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9waHMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Bocy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Bocy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Bocy8uL3JhZ2RvbGxEZW1vL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJ1ZmZlckluZm8sIER5bmFtaWNCdWZmZXJJbmZvIH0gZnJvbSBcIi4vc3JjL0J1ZmZlckF0dHJpYnV0ZVwiO1xuaW1wb3J0IHtcbiAgUHJpbWl0aXZlUmVuZGVySW5mb0Zyb21BcnJheURhdGEsXG4gIEFycmF5RGF0YUZyb21HbHRmLFxuICBFbnRpdHlEYXRhRnJvbUdsdGYsXG4gIEdMVEYsXG59IGZyb20gXCIuL3NyYy9nbHRmVXRpbHNcIjtcbmltcG9ydCB7IE1lc2hSZW5kZXJlciwgU2tpbm5lZE1lc2hSZW5kZXJlciB9IGZyb20gXCIuL3NyYy9NZXNoUmVuZGVyZXJcIjtcbmltcG9ydCB7XG4gIGNyZWF0ZUJveCxcbiAgY3JlYXRlQ29uZSxcbiAgY3JlYXRlQ2lyY2xlLFxuICBjcmVhdGVTcGhlcmUsXG4gIGNyZWF0ZVRydW5jYXRlZENvbmVcbn0gZnJvbSBcIi4vc3JjL3ByaW1pdGl2ZXNcIjtcbmltcG9ydCBQcmltaXRpdmVSZW5kZXJlciBmcm9tIFwiLi9zcmMvUHJpbWl0aXZlUmVuZGVyZXJcIjtcbmltcG9ydCB7XG4gIGdldEdMVHlwZUZvclR5cGVkQXJyYXksXG4gIFByb2dyYW1JbmZvLFxuICBleHBhbmRlZFR5cGVkQXJyYXksXG59IGZyb20gXCIuL3NyYy9wcm9ncmFtSW5mb1wiO1xuaW1wb3J0IERyYXdlciBmcm9tIFwiLi9zcmMvRHJhd2VyXCI7XG5pbXBvcnQge1xuICBUZXh0dXJlSW5mbyxcbiAgbWFrZUltZ0Zyb21TdmdYbWwsXG4gIG1ha2VTdHJpcGVJbWcsXG59IGZyb20gXCIuL3NyYy90ZXh0dXJlSW5mb1wiO1xuaW1wb3J0IE1vZGVsIGZyb20gXCIuL3NyYy9Nb2RlbFwiO1xuaW1wb3J0IHsgZGVmYXVsdFNoYWRlcnMsIHBvaW50TGlnaHRTaGFkZXJzIH0gZnJvbSBcIi4vc3JjL3JlbmRlci9zaGFkZXJzXCI7XG5pbXBvcnQgR0xjb250ZXh0V3JhcHBlciBmcm9tIFwiLi9zcmMvZ2xDb250ZXhXcmFwcGVyXCI7XG5cblxuZXhwb3J0IHtcbiAgR0xURixcbiAgR0xjb250ZXh0V3JhcHBlcixcbiAgVGV4dHVyZUluZm8sXG4gIG1ha2VJbWdGcm9tU3ZnWG1sLFxuICBtYWtlU3RyaXBlSW1nLFxuICBNb2RlbCxcbiAgUHJpbWl0aXZlUmVuZGVyZXIsXG4gIEVudGl0eURhdGFGcm9tR2x0ZixcbiAgUHJpbWl0aXZlUmVuZGVySW5mb0Zyb21BcnJheURhdGEsXG4gIEFycmF5RGF0YUZyb21HbHRmLFxuICBNZXNoUmVuZGVyZXIsXG4gIFNraW5uZWRNZXNoUmVuZGVyZXIsXG4gIGNyZWF0ZUJveCxcbiAgUHJvZ3JhbUluZm8sXG4gIERyYXdlcixcbiAgY3JlYXRlQ29uZSxcbiAgY3JlYXRlQ2lyY2xlLFxuICBkZWZhdWx0U2hhZGVycyxcbiAgcG9pbnRMaWdodFNoYWRlcnMsXG4gIGNyZWF0ZVNwaGVyZSxcbiAgY3JlYXRlVHJ1bmNhdGVkQ29uZVxufTtcbiIsImltcG9ydCB7IGdldEdMVHlwZUZvclR5cGVkQXJyYXkgfSBmcm9tIFwiLi9wcm9ncmFtSW5mb1wiO1xuaW1wb3J0IHsgVFlQRURfQVJSQVlTIH0gZnJvbSBcIi4vZW51bXNcIjtcbmNvbnN0IGNyZWF0ZUluZGljZXNCdWZmZXIgPSAoZ2wsIGluZGljZXMpID0+IHtcbiAgY29uc3QgYnVmZmVyID0gZ2wuY3JlYXRlQnVmZmVyKCk7XG4gIGdsLmJpbmRCdWZmZXIoZ2wuRUxFTUVOVF9BUlJBWV9CVUZGRVIsIGJ1ZmZlcik7XG4gIGdsLmJ1ZmZlckRhdGEoZ2wuRUxFTUVOVF9BUlJBWV9CVUZGRVIsIGluZGljZXMsIGdsLlNUQVRJQ19EUkFXKTtcbiAgcmV0dXJuIGJ1ZmZlcjtcbn07XG5jb25zdCBmbG9hdEF0dHJpYlNldHRlciA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgbnVtQ29tcG9uZW50cyxcbiAgICB0eXBlLFxuICAgIGxvY2F0aW9uLFxuICAgIG51bUF0dHJpYnV0ZXMsXG4gICAgc3RyaWRlLFxuICAgIG9mZnNldCxcbiAgICBidWZmZXIsXG4gICAgZ2wsXG4gICAgZGl2aXNvcixcbiAgfSA9IHByb3BzO1xuXG4gIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCBidWZmZXIpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG51bUF0dHJpYnV0ZXM7IGkrKykge1xuICAgIGNvbnN0IF9vZmZzZXQgPSBudW1Db21wb25lbnRzICogaSAqIFRZUEVEX0FSUkFZU1t0eXBlXS5CWVRFU19QRVJfRUxFTUVOVDtcbiAgICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheShsb2NhdGlvbiArIGkpO1xuICAgIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIoXG4gICAgICBsb2NhdGlvbiArIGksXG4gICAgICBudW1Db21wb25lbnRzLFxuICAgICAgdHlwZSxcbiAgICAgIGZhbHNlLFxuICAgICAgc3RyaWRlLFxuICAgICAgb2Zmc2V0ICsgX29mZnNldFxuICAgICk7XG5cbiAgICBpZiAoZGl2aXNvcikgZ2wudmVydGV4QXR0cmliRGl2aXNvcihsb2NhdGlvbiArIGksIGRpdmlzb3IpO1xuICB9XG59O1xuY29uc3QgaW50QXR0cmliU2V0dGVyID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBudW1Db21wb25lbnRzLFxuICAgIHR5cGUsXG4gICAgbG9jYXRpb24sXG4gICAgbnVtQXR0cmlidXRlcyxcbiAgICBzdHJpZGUsXG4gICAgb2Zmc2V0LFxuICAgIGJ1ZmZlcixcbiAgICBnbCxcbiAgICBkaXZpc29yLFxuICB9ID0gcHJvcHM7XG4gIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCBidWZmZXIpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG51bUF0dHJpYnV0ZXM7IGkrKykge1xuICAgIGNvbnN0IF9vZmZzZXQgPSBudW1Db21wb25lbnRzICogaSAqIFRZUEVEX0FSUkFZU1t0eXBlXS5CWVRFU19QRVJfRUxFTUVOVDtcbiAgICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheShsb2NhdGlvbiArIGkpO1xuICAgIGdsLnZlcnRleEF0dHJpYklQb2ludGVyKFxuICAgICAgbG9jYXRpb24gKyBpLFxuICAgICAgbnVtQ29tcG9uZW50cyxcbiAgICAgIHR5cGUsXG4gICAgICBmYWxzZSxcbiAgICAgIHN0cmlkZSxcbiAgICAgIG9mZnNldCArIF9vZmZzZXRcbiAgICApO1xuICAgIGlmIChkaXZpc29yKSBnbC52ZXJ0ZXhBdHRyaWJEaXZpc29yKGxvY2F0aW9uICsgaSwgZGl2aXNvcik7XG4gIH1cbn07XG5jb25zdCBhdHRyaWJUeXBlTWFwID0ge307XG5hdHRyaWJUeXBlTWFwWzB4MTQwMF0gPSBpbnRBdHRyaWJTZXR0ZXI7XG5hdHRyaWJUeXBlTWFwWzB4MTQwNl0gPSBmbG9hdEF0dHJpYlNldHRlcjtcbmF0dHJpYlR5cGVNYXBbMHgxNDAxXSA9IGludEF0dHJpYlNldHRlcjtcbmF0dHJpYlR5cGVNYXBbMHgxNDA0XSA9IGludEF0dHJpYlNldHRlcjtcbmF0dHJpYlR5cGVNYXBbMHgxNDA1XSA9IGludEF0dHJpYlNldHRlcjtcbmF0dHJpYlR5cGVNYXBbMHgxNDAyXSA9IGludEF0dHJpYlNldHRlcjtcbmF0dHJpYlR5cGVNYXBbMHgxNDAzXSA9IGludEF0dHJpYlNldHRlcjtcblxuY29uc3Qgc2V0QXR0cmlidXRlcyA9IChnbCwgYnVmZmVySW5mbywgZGl2aXNvcikgPT4ge1xuICBjb25zdCB7IHR5cGUgfSA9IGJ1ZmZlckluZm87XG4gIGNvbnN0IHNldHRlciA9IGF0dHJpYlR5cGVNYXBbdHlwZV07XG4gIHNldHRlcihidWZmZXJJbmZvLCBkaXZpc29yKTtcbn07XG5jbGFzcyBCdWZmZXJDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IoZ2wsIHRhcmdldCA9IDB4ODg5Mikge1xuICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xuICAgIHRoaXMuYnVmZmVyID0gZ2wuY3JlYXRlQnVmZmVyKCk7XG4gICAgdGhpcy5nbCA9IGdsO1xuICAgIHRoaXMuYnVmZmVyRGF0YSA9IChkYXRhLCBieXRlTGVuZ3RoLCB1c2FnZSA9IGdsLlNUQVRJQ19EUkFXKSA9PiB7XG4gICAgICBnbC5iaW5kQnVmZmVyKHRhcmdldCwgdGhpcy5idWZmZXIpO1xuICAgICAgZ2wuYnVmZmVyRGF0YSh0YXJnZXQsIGRhdGEgfHwgYnl0ZUxlbmd0aCwgdXNhZ2UpO1xuICAgIH07XG4gICAgdGhpcy5idWZmZXJTdWJEYXRhID0gKGRhdGEsIG9mZnNldCA9IDApID0+IHtcbiAgICAgIGdsLmJpbmRCdWZmZXIodGFyZ2V0LCB0aGlzLmJ1ZmZlcik7XG4gICAgICBnbC5idWZmZXJTdWJEYXRhKHRhcmdldCwgb2Zmc2V0LCBkYXRhKTtcbiAgICB9O1xuICB9XG59XG5jbGFzcyBBdHRyaWJ1dGVTZXR0ZXIge1xuICBjb25zdHJ1Y3RvcihpbmZvKSB7XG4gICAgdGhpcy5zdHJpZGUgPSBpbmZvLnN0cmlkZSB8fCAwO1xuICAgIHRoaXMubnVtQ29tcG9uZW50cyA9IGluZm8ubnVtQ29tcG9uZW50cztcbiAgICB0aGlzLm51bUF0dHJpYnV0ZXMgPSBpbmZvLm51bUF0dHJpYnV0ZXMgfHwgMTtcbiAgICB0aGlzLm9mZnNldCA9IGluZm8ub2Zmc2V0IHx8IDA7XG4gICAgdGhpcy50eXBlID0gaW5mby50eXBlO1xuICAgIHRoaXMubG9jYXRpb24gPSBpbmZvLmxvY2F0aW9uO1xuICB9XG4gIHNldEF0dHJpYnV0ZShidWZmZXJDb250cm9sbGVyLCBkaXZpc29yKSB7XG4gICAgY29uc3QgeyB0eXBlIH0gPSB0aGlzO1xuICAgIGNvbnN0IHNldHRlciA9IGF0dHJpYlR5cGVNYXBbdHlwZV07XG4gICAgc2V0dGVyKHRoaXMsIGJ1ZmZlckNvbnRyb2xsZXIsIGRpdmlzb3IpO1xuICB9XG59XG5jbGFzcyBCdWZmZXJBdHRyaWJ1dGUge1xuICBjb25zdHJ1Y3RvcihnbCwgaW5mbykge1xuICAgIHRoaXMuZ2wgPSBnbDtcbiAgICB0aGlzLmJ1ZmZlciA9IGdsLmNyZWF0ZUJ1ZmZlcigpO1xuICAgIHRoaXMuc3RyaWRlID0gaW5mby5zdHJpZGUgfHwgMDtcbiAgICB0aGlzLm51bUNvbXBvbmVudHMgPSBpbmZvLm51bUNvbXBvbmVudHM7XG4gICAgdGhpcy5udW1BdHRyaWJ1dGVzID0gaW5mby5udW1BdHRyaWJ1dGVzIHx8IDE7XG4gICAgdGhpcy5vZmZzZXQgPSBpbmZvLm9mZnNldCB8fCAwO1xuICAgIHRoaXMudHlwZSA9IGluZm8udHlwZTtcbiAgICB0aGlzLmxvY2F0aW9uID0gaW5mby5sb2NhdGlvbjtcbiAgICB0aGlzLmRpdmlzb3IgPSBpbmZvLmRpdmlzb3I7XG4gIH1cbiAgc2V0QXR0cmlidXRlKCkge1xuICAgIGNvbnN0IHsgdHlwZSwgZ2wgfSA9IHRoaXM7XG4gICAgY29uc3Qgc2V0dGVyID0gYXR0cmliVHlwZU1hcFt0eXBlXTtcbiAgICBzZXR0ZXIodGhpcyk7XG4gIH1cbiAgYnVmZmVyRGF0YShkYXRhLCBieXRlTGVuZ3RoLCB1c2FnZSA9IDB4ODhlNCkge1xuICAgIGNvbnN0IHsgZ2wsIGJ1ZmZlciB9ID0gdGhpcztcbiAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgYnVmZmVyKTtcbiAgICBnbC5idWZmZXJEYXRhKGdsLkFSUkFZX0JVRkZFUiwgZGF0YSB8fCBieXRlTGVuZ3RoLCB1c2FnZSk7XG4gIH1cbiAgYnVmZmVyU3ViRGF0YShkYXRhLCBvZmZzZXQgPSAwKSB7XG4gICAgY29uc3QgeyBnbCwgYnVmZmVyIH0gPSB0aGlzO1xuICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCBidWZmZXIpO1xuICAgIGdsLmJ1ZmZlclN1YkRhdGEoZ2wuQVJSQVlfQlVGRkVSLCBvZmZzZXQsIGRhdGEpO1xuICB9XG59XG5cbmV4cG9ydCB7XG4gIEJ1ZmZlckF0dHJpYnV0ZSxcbiAgY3JlYXRlSW5kaWNlc0J1ZmZlcixcbiAgQXR0cmlidXRlU2V0dGVyLFxuICBCdWZmZXJDb250cm9sbGVyLFxufTtcbiIsImltcG9ydCB7IG00IH0gZnJvbSBcIm1hdGhcIjtcblxuY29uc3QgZGVnVG9SYWQgPSAoZCkgPT4gKGQgKiBNYXRoLlBJKSAvIDE4MDtcblxuY29uc3QgZmllbGRPZlZpZXdSYWRpYW5zID0gZGVnVG9SYWQoOTApO1xuXG5jbGFzcyBEcmF3ZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBudWxsO1xuICAgIHRoaXMucHJvamVjdGlvbk1hdHJpeCA9IG51bGw7XG4gICAgdGhpcy5maWVsZE9mVmlld1JhZGlhbnMgPSBkZWdUb1JhZCg5MCk7XG4gIH1cbiAgc2V0Q29udGV4dChnbENvbnRleHRXcmFwcGVyKSB7XG4gICAgdGhpcy5jb250ZXh0ID0gZ2xDb250ZXh0V3JhcHBlcjtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBzZXRGaWVsZE9mVmlldyhhbmdsZSkge1xuICAgIHRoaXMuZmllbGRPZlZpZXdSYWRpYW5zID0gZGVnVG9SYWQoYW5nbGUpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIHVwZGF0ZTNEUHJvamVjdGlvbk1hdHJpeCh6TmVhciA9IDAuMDEsIHpGYXIgPSAyMDAwKSB7XG4gICAgY29uc3QgeyBnbCB9ID0gdGhpcy5jb250ZXh0O1xuICAgIGNvbnN0IGFzcGVjdCA9IGdsLmNhbnZhcy5jbGllbnRXaWR0aCAvIGdsLmNhbnZhcy5jbGllbnRIZWlnaHQ7XG4gICAgdGhpcy5wcm9qZWN0aW9uTWF0cml4ID0gbTQucGVyc3BlY3RpdmUoXG4gICAgICBmaWVsZE9mVmlld1JhZGlhbnMsXG4gICAgICBhc3BlY3QsXG4gICAgICB6TmVhcixcbiAgICAgIHpGYXJcbiAgICApO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZ2V0Vmlld1Byb2plY3Rpb25NYXRyaXgoY2FtZXJhTWF0cml4KSB7XG4gICAgY29uc3QgeyBwcm9qZWN0aW9uTWF0cml4IH0gPSB0aGlzO1xuICAgIGNvbnN0IHsgZ2wgfSA9IHRoaXMuY29udGV4dDtcbiAgICBjb25zdCB2aWV3TWF0cml4ID0gbTQuaW52ZXJzZShjYW1lcmFNYXRyaXgpO1xuICAgIHJldHVybiBtNC5tdWx0aXBseShwcm9qZWN0aW9uTWF0cml4LCB2aWV3TWF0cml4KTtcbiAgfVxuICBkcmF3KHJlbmRlckluZm8sIHVuaWZvcm1zLCBjYW1lcmFNYXRyaXgpIHtcbiAgICBjb25zdCB2aWV3UHJvamVjdGlvbk1hdHJpeCA9IHRoaXMuZ2V0Vmlld1Byb2plY3Rpb25NYXRyaXgoY2FtZXJhTWF0cml4KTtcbiAgICBjb25zdCB7XG4gICAgICB2YW8sXG4gICAgICBtb2RlLFxuICAgICAgb2Zmc2V0LFxuICAgICAgbnVtRWxlbWVudHMsXG4gICAgICBpbmRpY2VzLFxuICAgICAgY29tcG9uZW50VHlwZSxcbiAgICAgIHByb2dyYW1JbmZvLFxuICAgIH0gPSByZW5kZXJJbmZvO1xuICAgIGNvbnN0IHsgZ2wgfSA9IHRoaXMuY29udGV4dDtcblxuICAgIGNvbnN0IHVfd29ybGRWaWV3UHJvamVjdGlvbiA9IG00Lm11bHRpcGx5KFxuICAgICAgdmlld1Byb2plY3Rpb25NYXRyaXgsXG4gICAgICB1bmlmb3Jtcy51X21hdHJpeFxuICAgICk7XG4gIFxuICAgIHRoaXMuY29udGV4dC51c2VQcm9ncmFtSW5mbyhwcm9ncmFtSW5mbyk7XG4gICAgdGhpcy5jb250ZXh0XG4gICAgICAuZ2V0TGFzdFVzZWRQcm9ncmFtSW5mbygpXG4gICAgICAuc2V0VW5pZm9ybXMoeyAuLi51bmlmb3JtcywgIHVfd29ybGRWaWV3UHJvamVjdGlvbiB9KTtcbiAgICBpZiAodmFvKSBnbC5iaW5kVmVydGV4QXJyYXkodmFvKTtcbiAgICBpZiAoIWluZGljZXMpIHtcbiAgICAgIGdsLmRyYXdBcnJheXMobW9kZSwgb2Zmc2V0LCBudW1FbGVtZW50cyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGdsLmRyYXdFbGVtZW50cyhtb2RlLCBudW1FbGVtZW50cywgY29tcG9uZW50VHlwZSwgb2Zmc2V0KTtcbiAgfVxuICBkcmF3SW5zdGFuY2VkKHJlbmRlckluZm8sIHVuaWZvcm1zLCBjYW1lcmFNYXRyaXgsIG51bUluc3RhbmNlcykge1xuICAgIGNvbnN0IHZpZXdQcm9qZWN0aW9uTWF0cml4ID0gdGhpcy5nZXRWaWV3UHJvamVjdGlvbk1hdHJpeChjYW1lcmFNYXRyaXgpO1xuICAgIGNvbnN0IHsgZ2wgfSA9IHRoaXMuY29udGV4dDtcbiAgICBjb25zdCB7IHZhbywgbW9kZSwgb2Zmc2V0LCBudW1FbGVtZW50cywgaW5kaWNlcywgcHJvZ3JhbUluZm8gfSA9IHJlbmRlckluZm87XG4gICAgY29uc3Qgd29ybGRWaWV3UHJvamVjdGlvbiA9IG00Lm11bHRpcGx5KFxuICAgICAgdmlld1Byb2plY3Rpb25NYXRyaXgsXG4gICAgICB1bmlmb3Jtcy51X21hdHJpeFxuICAgICk7XG4gICAgY29uc3Qgd29ybGRNYXRyaXggPSB1bmlmb3Jtcy51X21hdHJpeDtcbiAgICB0aGlzLmNvbnRleHQudXNlUHJvZ3JhbUluZm8ocHJvZ3JhbUluZm8pO1xuICAgIHRoaXMuY29udGV4dFxuICAgICAgLmdldExhc3RVc2VkUHJvZ3JhbUluZm8oKVxuICAgICAgLnNldFVuaWZvcm1zKHsgLi4udW5pZm9ybXMsIHdvcmxkTWF0cml4LCB3b3JsZFZpZXdQcm9qZWN0aW9uIH0pO1xuICAgIGdsLmJpbmRWZXJ0ZXhBcnJheSh2YW8pO1xuICAgIGlmICghaW5kaWNlcykge1xuICAgICAgZ2wuZHJhd0FycmF5c0luc3RhbmNlZChtb2RlLCBvZmZzZXQsIG51bUVsZW1lbnRzLCBudW1JbnN0YW5jZXMpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBnbC5kcmF3RWxlbWVudHNJbnN0YW5jZWQoXG4gICAgICBtb2RlLFxuICAgICAgbnVtRWxlbWVudHMsXG4gICAgICBnbC5VTlNJR05FRF9TSE9SVCxcbiAgICAgIG9mZnNldCxcbiAgICAgIG51bUluc3RhbmNlc1xuICAgICk7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IERyYXdlcjtcbiIsImltcG9ydCBnZXRBdHRyaWJ1dGVQcm9wc0J5VHlwZSBmcm9tIFwiLi9hdHRyaWJUeXBlUHJvcHNcIjtcbmltcG9ydCBhdHRyaWJUeXBlUHJvcHMgZnJvbSBcIi4vYXR0cmliVHlwZVByb3BzXCI7XG5pbXBvcnQgeyBCdWZmZXJBdHRyaWJ1dGUgfSBmcm9tIFwiLi9CdWZmZXJBdHRyaWJ1dGVcIjtcbmNsYXNzIE1lc2hSZW5kZXJlciB7XG4gIGNvbnN0cnVjdG9yKHsgcHJpbWl0aXZlcywgbmFtZSB9KSB7XG4gICAgdGhpcy5wcmltaXRpdmVzID0gcHJpbWl0aXZlcztcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuY29udGV4dCA9IG51bGw7XG4gICAgdGhpcy5idWZmZXJzID0ge307XG4gIH1cbiAgc2V0Q29udGV4dChnbENvbnRleHRXcmFwcGVyKSB7XG4gICAgdGhpcy5jb250ZXh0ID0gZ2xDb250ZXh0V3JhcHBlcjtcbiAgICBmb3IgKGxldCBpID0gMCwgbiA9IHRoaXMucHJpbWl0aXZlcy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgIHRoaXMucHJpbWl0aXZlc1tpXS5zZXRDb250ZXh0KGdsQ29udGV4dFdyYXBwZXIpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBzZXRQcm9ncmFtSW5mbyhwcm9ncmFtSW5mbykge1xuICAgIGZvciAobGV0IGkgPSAwLCBuID0gdGhpcy5wcmltaXRpdmVzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgdGhpcy5wcmltaXRpdmVzW2ldLnNldFByb2dyYW1JbmZvKHByb2dyYW1JbmZvKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgc2V0RHJhd2VyKGRyYXdlcikge1xuICAgIGZvciAobGV0IGkgPSAwLCBuID0gdGhpcy5wcmltaXRpdmVzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgdGhpcy5wcmltaXRpdmVzW2ldLnNldERyYXdlcihkcmF3ZXIpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBkcmF3KHVuaWZvcm1zLCBjYW1lcmFNYXRyaXgpIHtcbiAgICBmb3IgKGxldCBpID0gMCwgbiA9IHRoaXMucHJpbWl0aXZlcy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgIHRoaXMucHJpbWl0aXZlc1tpXS5kcmF3KHVuaWZvcm1zLCBjYW1lcmFNYXRyaXgpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBkcmF3SW5zdGFuY2VkKHVuaWZvcm1zLCBjYW1lcmFNYXRyaXgsIG51bUluc3RhbmNlcykge1xuICAgIGZvciAobGV0IGkgPSAwLCBuID0gdGhpcy5wcmltaXRpdmVzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgdGhpcy5wcmltaXRpdmVzW2ldLmRyYXdJbnN0YW5jZWQodW5pZm9ybXMsIGNhbWVyYU1hdHJpeCwgbnVtSW5zdGFuY2VzKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgY3JlYXRlUHJpbWl0aXZlQnVmZmVycygpIHtcbiAgICB0aGlzLnByaW1pdGl2ZXMuZm9yRWFjaCgocHJpbWl0aXZlKSA9PiBwcmltaXRpdmUuY3JlYXRlR2VvbWV0cnlCdWZmZXJzKCkpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIGNyZWF0ZUJ1ZmZlckF0dHJpYkRhdGEobmFtZSwgdHlwZSwgcGFyYW1zKSB7XG4gICAgY29uc3QgeyBnbCB9ID0gdGhpcy5jb250ZXh0O1xuICAgIGNvbnN0IGF0dHJpYlByb3BzID0gZ2V0QXR0cmlidXRlUHJvcHNCeVR5cGUodHlwZSk7XG4gICAgY29uc3QgYXR0cmlidXRlUHJvcHMgPSB7IC4uLmF0dHJpYlByb3BzLCAuLi5wYXJhbXMgfTtcbiAgICBjb25zdCBidWZmZXJBdHRyaWJEYXRhID0gbmV3IEJ1ZmZlckF0dHJpYnV0ZShnbCwgYXR0cmlidXRlUHJvcHMpO1xuICAgIHRoaXMuYnVmZmVycyA9IHsgLi4udGhpcy5idWZmZXJzLCBbbmFtZV06IGJ1ZmZlckF0dHJpYkRhdGEgfTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBidWZmZXJEYXRhKGJ1ZmZlck5hbWUsIGRhdGEsIGJ5dGVMZW5ndGgpIHtcbiAgICBjb25zdCBidWZmZXJBdHRyaWJ1dGVEZXNjcmlwdG9yID0gdGhpcy5idWZmZXJzW2J1ZmZlck5hbWVdO1xuXG4gICAgYnVmZmVyQXR0cmlidXRlRGVzY3JpcHRvci5idWZmZXJEYXRhKGRhdGEsIGJ5dGVMZW5ndGgpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIGJ1ZmZlclN1YkRhdGEoYnVmZmVyTmFtZSwgZGF0YSwgb2Zmc2V0KSB7XG4gICAgY29uc3QgYnVmZmVyQXR0cmlidXRlRGVzY3JpcHRvciA9IHRoaXMuYnVmZmVyc1tidWZmZXJOYW1lXTtcbiAgICBidWZmZXJBdHRyaWJ1dGVEZXNjcmlwdG9yLmJ1ZmZlclN1YkRhdGEoZGF0YSwgYnl0ZUxlbmd0aCwgb2Zmc2V0KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBzZXRBdHRyaWJ1dGUobmFtZSkge1xuICAgIGNvbnN0IGJ1ZmZlckF0dHJpYkRhdGEgPSB0aGlzLmJ1ZmZlcnNbbmFtZV07XG4gICAgdGhpcy5wcmltaXRpdmVzLmZvckVhY2goKHByaW1pdGl2ZSkgPT5cbiAgICAgIHByaW1pdGl2ZS5zZXRBdHRyaWJ1dGUoYnVmZmVyQXR0cmliRGF0YSlcbiAgICApO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIHNldFByaW1pdGl2ZUF0dHJpYnV0ZXMoKSB7XG4gICAgZm9yIChsZXQgaSA9IDAsIG4gPSB0aGlzLnByaW1pdGl2ZXMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICB0aGlzLnByaW1pdGl2ZXNbaV0uc2V0QXR0cmlidXRlcygpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuY2xhc3MgU2tpbm5lZE1lc2hSZW5kZXJlciB7XG4gIGNvbnN0cnVjdG9yKHByaW1pdGl2ZXMsIHNraW4pIHtcbiAgICB0aGlzLnByaW1pdGl2ZXMgPSBwcmltaXRpdmVzO1xuICAgIHRoaXMuc2tpbiA9IHNraW47XG4gIH1cbiAgZHJhdyh1bmlmb3JtcywgY2FtZXJhTWF0cml4KSB7XG4gICAgdGhpcy5za2luLnVwZGF0ZSh1bmlmb3Jtcy51X21hdHJpeCk7XG4gICAgY29uc3QgX3VuaWZvcm1zID0ge1xuICAgICAgdV9qb2ludFRleHR1cmU6IHRoaXMuc2tpbi5qb2ludFRleHR1cmUsXG4gICAgICB1X251bUpvaW50czogdGhpcy5za2luLmpvaW50cy5sZW5ndGgsXG4gICAgICAuLi51bmlmb3JtcyxcbiAgICB9O1xuICAgIGZvciAobGV0IGkgPSAwLCBuID0gdGhpcy5wcmltaXRpdmVzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgdGhpcy5wcmltaXRpdmVzW2ldLmRyYXcoX3VuaWZvcm1zLCBjYW1lcmFNYXRyaXgpO1xuICAgIH1cbiAgfVxufVxuZXhwb3J0IHsgTWVzaFJlbmRlcmVyLCBTa2lubmVkTWVzaFJlbmRlcmVyIH07XG4iLCJcblxuY2xhc3MgVFJTIHtcbiAgY29uc3RydWN0b3IodHJhbnNsYXRpb24sIHJvdGF0aW9uLCBzY2FsZSkge1xuICAgIHRoaXMudHJhbnNsYXRpb24gPSB0cmFuc2xhdGlvbjtcbiAgICB0aGlzLnJvdGF0aW9uID0gcm90YXRpb247XG4gICAgdGhpcy5zY2FsZSA9IHNjYWxlO1xuICB9XG4gIGdldE1hdHJpeChtKSB7XG4gICAgbGV0IGRzdCA9IG0gfHwgbTQuaWRlbnRpdHkoKTtcbiAgICB2YXIgdCA9IHRoaXMudHJhbnNsYXRpb247XG4gICAgdmFyIHIgPSB0aGlzLnJvdGF0aW9uO1xuICAgIHZhciBzID0gdGhpcy5zY2FsZTtcbiAgICBjb25zdCBzaW4gPSBNYXRoLnNpbihyWzNdIC8gMik7XG4gICAgY29uc3QgY29zID0gTWF0aC5jb3MoclszXSAvIDIpO1xuICAgIGRzdCA9IG00LnRyYW5zbGF0ZShkc3QsIHRbMF0sIHRbMV0sIHRbMl0pO1xuXG4gICAgZHN0ID0gbTQubXVsdGlwbHkoZHN0LCBtNC5mcm9tUXVhdGVybmlvbihyKSk7XG5cbiAgICBkc3QgPSBtNC5zY2FsZShkc3QsIHNbMF0sIHNbMV0sIHNbMl0pO1xuICAgIHJldHVybiBkc3Q7XG4gIH1cbiAgZ2V0Uk1hdHJpeCgpIHtcbiAgICBsZXQgZHN0ID0gbTQuaWRlbnRpdHkoKTtcbiAgICB2YXIgciA9IHRoaXMucm90YXRpb247XG4gICAgZHN0ID0gbTQueFJvdGF0ZShkc3QsIHJbMF0pO1xuICAgIGRzdCA9IG00LnlSb3RhdGUoZHN0LCByWzFdKTtcbiAgICBkc3QgPSBtNC56Um90YXRlKGRzdCwgclsyXSk7XG4gICAgcmV0dXJuIGRzdDtcbiAgfVxuICBnZXRUUm1hdHJpeCgpIHtcbiAgICBjb25zdCB0ID0gdGhpcy50cmFuc2xhdGlvbjtcbiAgICBjb25zdCByID0gdGhpcy5yb3RhdGlvbjtcblxuICAgIGxldCBtID0gbTQudHJhbnNsYXRpb24oIHRbMF0sIHRbMV0sIHRbMl0pO1xuXG4gICAgbSA9IG00LnhSb3RhdGUobSwgclswXSk7XG4gICAgbSA9IG00LnlSb3RhdGUobSwgclsxXSk7XG4gICAgbSA9IG00LnpSb3RhdGUobSwgclsyXSk7XG4gICAgcmV0dXJuIG1cbiAgfVxufVxuY2xhc3MgTm9kZSB7XG5cbiAgc3RhdGljIG1ha2VNb2RlbChlbnRpdHlEZXNjcmlwdGlvbiwgcm9vdE5vZGVOZHgpIHtcbiAgICBjb25zdCB7IG5vZGVzLCBtZXNoZXMgfSA9IGVudGl0eURlc2NyaXB0aW9uO1xuICAgIGNvbnN0IHJvb3ROb2RlID0gbm9kZXNbcm9vdE5vZGVOZHhdO1xuICAgIGNvbnN0IG1ha2VOb2RlID0gKG5vZGVEZXNjcmlwdGlvbiwgbmR4KSA9PiB7XG4gICAgICBjb25zdCB0cnMgPSBuZXcgVFJTKFxuICAgICAgICBub2RlRGVzY3JpcHRpb24udHJhbnNsYXRpb24gfHwgWzAsIDAsIDBdLFxuICAgICAgICBub2RlRGVzY3JpcHRpb24ucm90YXRpb24gfHwgWzAsIDAsIDBdLFxuICAgICAgICBub2RlRGVzY3JpcHRpb24uc2NhbGUgfHwgWzEsIDEsIDFdXG4gICAgICApO1xuICAgICAgY29uc3Qgbm9kZSA9IG5ldyBOb2RlKG5vZGVEZXNjcmlwdGlvbi5uYW1lLCB0cnMsIG5keCk7XG4gICAgICBpZiAobm9kZURlc2NyaXB0aW9uLm1lc2ggIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIG5vZGUucmVuZGVyZXIgPSBtZXNoZXNbbm9kZURlc2NyaXB0aW9uLm1lc2hdO1xuICAgICAgfVxuICAgICAgaWYgKG5vZGVEZXNjcmlwdGlvbi5jaGlsZHJlbikge1xuICAgICAgICBub2RlRGVzY3JpcHRpb24uY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGROZHgpID0+IHtcbiAgICAgICAgICBjb25zdCBjaGlsZCA9IG1ha2VOb2RlKG5vZGVzW2NoaWxkTmR4XSwgY2hpbGROZHgpO1xuICAgICAgICAgIGNoaWxkLnNldFBhcmVudChub2RlKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbm9kZTtcbiAgICB9O1xuICAgIHJldHVybiBtYWtlTm9kZShyb290Tm9kZSwgcm9vdE5vZGVOZHgpO1xuICB9XG5cbiAgY29uc3RydWN0b3IobmFtZSwgdHJzID0gbmV3IFRSUygpKSB7XG4gICAgdGhpcy53b3JsZE1hdHJpeCA9IG00LmlkZW50aXR5KCk7XG4gICAgdGhpcy5wYXJlbnQgPSBudWxsO1xuICAgIHRoaXMuY2hpbGRyZW4gPSBbXTtcbiAgICB0aGlzLnRycyA9IHRycztcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMucGFydHMgPSBbXTtcbiAgICB0aGlzLm5keCA9IG5keDtcbiAgICB0aGlzLnNraW5OZHggPSBudWxsO1xuICAgIHRoaXMub2JqZWN0c1RvRHJhdyA9IFtdO1xuICAgIHRoaXMucmVuZGVyZXIgPSBudWxsO1xuICB9XG4gIHNldFBhcmVudChwYXJlbnQpIHtcbiAgICBpZiAodGhpcy5wYXJlbnQpIHtcbiAgICAgIGNvbnN0IG5keCA9IHRoaXMucGFyZW50LmNoaWxkcmVuLmluZGV4T2YodGhpcyk7XG4gICAgICBpZiAobmR4ID49IDApIHtcbiAgICAgICAgdGhpcy5wYXJlbnQuY2hpbGRyZW4uc3BsaWNlKG5keCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChwYXJlbnQpIHtcbiAgICAgIHBhcmVudC5jaGlsZHJlbi5wdXNoKHRoaXMpO1xuICAgIH1cbiAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgfVxuICB1cGRhdGVXb3JsZE1hdHJpeChwYXJlbnRXb3JsZE1hdHJpeCkge1xuICAgIGxldCBtYXRyaXggPSB0aGlzLnRycy5nZXRNYXRyaXgoKTtcbiAgICBpZiAocGFyZW50V29ybGRNYXRyaXgpIHtcbiAgICAgIG1hdHJpeCA9IG00Lm11bHRpcGx5KHBhcmVudFdvcmxkTWF0cml4LCBtYXRyaXgpO1xuICAgIH1cbiAgICB0aGlzLndvcmxkTWF0cml4ID0gbWF0cml4O1xuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIGNoaWxkLnVwZGF0ZVdvcmxkTWF0cml4KG1hdHJpeCk7XG4gICAgfSk7XG4gIH1cbiAgdXBkYXRlUGFydHNMaXN0KCkge1xuICAgIGNvbnN0IGl0ZXIgPSAobm9kZSwgYXJyKSA9PiB7XG4gICAgICBhcnIucHVzaChub2RlKTtcbiAgICAgIG5vZGUuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IGl0ZXIoY2hpbGQsIGFycikpO1xuICAgIH07XG4gICAgaXRlcih0aGlzLCB0aGlzLnBhcnRzKTtcbiAgfVxuICB1cGRhdGVPYmplY3RzVG9EcmF3KCkge1xuICAgIGNvbnN0IHF1ZXVlID0gW3RoaXNdO1xuICAgIHdoaWxlIChxdWV1ZS5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBub2RlID0gcXVldWUucG9wKCk7XG4gICAgICBjb25zb2xlLmxvZyhub2RlKTtcbiAgICAgIGlmIChub2RlLnJlbmRlcmVyKSB0aGlzLm9iamVjdHNUb0RyYXcucHVzaChub2RlKTtcbiAgICAgIGlmIChub2RlLmNoaWxkcmVuKSBxdWV1ZS5wdXNoKC4uLm5vZGUuY2hpbGRyZW4pO1xuICAgIH1cbiAgfVxuICB0cmF2ZXJzZShmbikge1xuICAgIGZuKHRoaXMpO1xuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IGNoaWxkLnRyYXZlcnNlKGZuKSk7XG4gIH1cbiAgZmluZChuZHgpIHtcbiAgICBsZXQgcmVzdWx0ID0gbnVsbDtcbiAgICBjb25zdCBpdGVyID0gKG5vZGVzKSA9PiB7XG4gICAgICBmb3IgKGxldCBub2RlIG9mIG5vZGVzKSB7XG4gICAgICAgIGlmIChub2RlLm5keCA9PT0gbmR4KSByZXN1bHQgPSBub2RlO1xuICAgICAgICBlbHNlIGl0ZXIobm9kZS5jaGlsZHJlbik7XG4gICAgICB9XG4gICAgfTtcbiAgICBpdGVyKFt0aGlzXSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICBmaW5kQnlOYW1lKG5hbWUpIHtcbiAgICBsZXQgcmVzdWx0ID0gbnVsbDtcbiAgICBjb25zdCBpdGVyID0gKG5vZGVzKSA9PiB7XG4gICAgICBmb3IgKGxldCBub2RlIG9mIG5vZGVzKSB7XG4gICAgICAgIGlmIChub2RlLm5hbWUgPT09IG5hbWUpIHJlc3VsdCA9IG5vZGU7XG4gICAgICAgIGVsc2UgaXRlcihub2RlLmNoaWxkcmVuKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGl0ZXIoW3RoaXNdKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIHJlbmRlcih1bmlmb3JtcywgY2FtZXJhTWF0cml4KSB7XG4gICAgdGhpcy5vYmplY3RzVG9EcmF3LmZvckVhY2goKG9iamVjdCkgPT4ge1xuICAgICAgb2JqZWN0LnJlbmRlcmVyLmRyYXcoXG4gICAgICAgIHsgLi4udW5pZm9ybXMsIHVfbWF0cml4OiBvYmplY3Qud29ybGRNYXRyaXggfSxcbiAgICAgICAgY2FtZXJhTWF0cml4XG4gICAgICApO1xuICAgIH0pO1xuICB9XG59XG5cblxuXG5cbmNsYXNzIE1vZGVsIGV4dGVuZHMgTm9kZSB7XG4gIHN0YXRpYyBtYWtlTW9kZWwoZW50aXR5RGVzY3JpcHRpb24sIHJvb3ROb2RlTmR4KSB7XG4gICAgY29uc3QgeyBub2RlcywgbWVzaGVzIH0gPSBlbnRpdHlEZXNjcmlwdGlvbjtcbiAgICBjb25zdCByb290Tm9kZSA9IG5vZGVzW3Jvb3ROb2RlTmR4XTtcbiAgICBjb25zdCBtYWtlTm9kZSA9IChub2RlRGVzY3JpcHRpb24sIG5keCkgPT4ge1xuICAgICAgY29uc3QgdHJzID0gbmV3IFRSUyhcbiAgICAgICAgbm9kZURlc2NyaXB0aW9uLnRyYW5zbGF0aW9uIHx8IFswLCAwLCAwXSxcbiAgICAgICAgbm9kZURlc2NyaXB0aW9uLnJvdGF0aW9uIHx8IFswLCAwLCAwLCAwXSxcbiAgICAgICAgbm9kZURlc2NyaXB0aW9uLnNjYWxlIHx8IFsxLCAxLCAxXVxuICAgICAgKTtcbiAgICAgIGNvbnN0IG5vZGUgPSBuZXcgRW50aXR5KG5vZGVEZXNjcmlwdGlvbi5uYW1lLCB0cnMsIG5keCk7XG4gICAgICBpZiAobm9kZURlc2NyaXB0aW9uLm1lc2ggIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIG5vZGUucmVuZGVyZXIgPSBtZXNoZXNbbm9kZURlc2NyaXB0aW9uLm1lc2hdO1xuICAgICAgfVxuICAgICAgaWYgKG5vZGVEZXNjcmlwdGlvbi5jaGlsZHJlbikge1xuICAgICAgICBub2RlRGVzY3JpcHRpb24uY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGROZHgpID0+IHtcbiAgICAgICAgICBjb25zdCBjaGlsZCA9IG1ha2VOb2RlKG5vZGVzW2NoaWxkTmR4XSwgY2hpbGROZHgpO1xuICAgICAgICAgIGNoaWxkLnNldFBhcmVudChub2RlKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbm9kZTtcbiAgICB9O1xuICAgIHJldHVybiBtYWtlTm9kZShyb290Tm9kZSwgcm9vdE5vZGVOZHgpO1xuICB9XG4gIGNvbnN0cnVjdG9yKG5hbWUsIHRycywgbmR4KSB7XG4gICAgc3VwZXIobmFtZSwgdHJzKTtcbiAgICB0aGlzLm5keCA9IG5keDtcbiAgICB0aGlzLnBoeXNpY3MgPSBudWxsO1xuICAgIHRoaXMuc2tpbk5keCA9IG51bGw7XG4gICAgdGhpcy5vYmplY3RzVG9EcmF3ID0gW107XG4gICAgdGhpcy5yZW5kZXJlciA9IG51bGw7XG4gIH1cbiAgdXBkYXRlT2JqZWN0c1RvRHJhdygpIHtcbiAgICBjb25zdCBxdWV1ZSA9IFt0aGlzXTtcbiAgICB3aGlsZSAocXVldWUubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3Qgbm9kZSA9IHF1ZXVlLnBvcCgpO1xuICAgICAgY29uc29sZS5sb2cobm9kZSk7XG4gICAgICBpZiAobm9kZS5yZW5kZXJlcikgdGhpcy5vYmplY3RzVG9EcmF3LnB1c2gobm9kZSk7XG4gICAgICBpZiAobm9kZS5jaGlsZHJlbikgcXVldWUucHVzaCguLi5ub2RlLmNoaWxkcmVuKTtcbiAgICB9XG4gIH1cbiAgdHJhdmVyc2UoZm4pIHtcbiAgICBmbih0aGlzKTtcbiAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiBjaGlsZC50cmF2ZXJzZShmbikpO1xuICB9XG4gIGZpbmQobmR4KSB7XG4gICAgbGV0IHJlc3VsdCA9IG51bGw7XG4gICAgY29uc3QgaXRlciA9IChub2RlcykgPT4ge1xuICAgICAgZm9yIChsZXQgbm9kZSBvZiBub2Rlcykge1xuICAgICAgICBpZiAobm9kZS5uZHggPT09IG5keCkgcmVzdWx0ID0gbm9kZTtcbiAgICAgICAgZWxzZSBpdGVyKG5vZGUuY2hpbGRyZW4pO1xuICAgICAgfVxuICAgIH07XG4gICAgaXRlcihbdGhpc10pO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgZmluZEJ5TmFtZShuYW1lKSB7XG4gICAgbGV0IHJlc3VsdCA9IG51bGw7XG4gICAgY29uc3QgaXRlciA9IChub2RlcykgPT4ge1xuICAgICAgZm9yIChsZXQgbm9kZSBvZiBub2Rlcykge1xuICAgICAgICBpZiAobm9kZS5uYW1lID09PSBuYW1lKSByZXN1bHQgPSBub2RlO1xuICAgICAgICBlbHNlIGl0ZXIobm9kZS5jaGlsZHJlbik7XG4gICAgICB9XG4gICAgfTtcbiAgICBpdGVyKFt0aGlzXSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICByZW5kZXIodW5pZm9ybXMsIGNhbWVyYU1hdHJpeCkge1xuICAgIHRoaXMub2JqZWN0c1RvRHJhdy5mb3JFYWNoKChvYmplY3QpID0+IHtcbiAgICAgIG9iamVjdC5yZW5kZXJlci5kcmF3KFxuICAgICAgICB7IC4uLnVuaWZvcm1zLCB1X21hdHJpeDogb2JqZWN0LndvcmxkTWF0cml4IH0sXG4gICAgICAgIGNhbWVyYU1hdHJpeFxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNb2RlbDtcbiIsImltcG9ydCB7XG4gIGNyZWF0ZUluZGljZXNCdWZmZXIsXG4gIEJ1ZmZlckF0dHJpYnV0ZSxcbiAgRHluYW1pY0J1ZmZlckF0dHJpYkRlc2NyaXB0b3IsXG4gIEJ1ZmZlckNvbnRyb2xsZXIsXG4gIEF0dHJpYnV0ZVNldHRlcixcbn0gZnJvbSBcIi4vQnVmZmVyQXR0cmlidXRlXCI7XG5pbXBvcnQgeyBFTEVNRU5UX1NJWkUgfSBmcm9tIFwiLi9lbnVtc1wiO1xuaW1wb3J0IHsgZ2V0R0xUeXBlRm9yVHlwZWRBcnJheSB9IGZyb20gXCIuL3Byb2dyYW1JbmZvXCI7XG5pbXBvcnQgZ2V0QXR0cmlidXRlUHJvcHNCeVR5cGUgZnJvbSBcIi4vYXR0cmliVHlwZVByb3BzXCI7XG5cbmNsYXNzIFByaW1pdGl2ZVJlbmRlcmVyIHtcbiAgY29uc3RydWN0b3IoYXJyYXlEYXRhKSB7XG4gICAgdGhpcy5idWZmZXJzID0ge307XG4gICAgdGhpcy5wcm9ncmFtSW5mbyA9IG51bGw7XG4gICAgdGhpcy5jb250ZXh0ID0gbnVsbDtcbiAgICB0aGlzLmRyYXdlciA9IG51bGw7XG4gICAgdGhpcy5tb2RlID0gbnVsbDtcbiAgICB0aGlzLm9mZnNldCA9IG51bGw7XG4gICAgdGhpcy5udW1FbGVtZW50cyA9IG51bGw7XG4gICAgdGhpcy52YW8gPSBudWxsO1xuICAgIHRoaXMuY29tcG9uZW50VHlwZSA9IG51bGw7XG4gICAgdGhpcy5hcnJheURhdGEgPSBhcnJheURhdGE7XG4gICAgY29uc3Qge2NvbXBvbmVudFR5cGUsIG51bUVsZW1lbnRzLCBtb2RlIH0gPSBhcnJheURhdGE7XG4gICAgdGhpcy5udW1FbGVtZW50cyA9IG51bUVsZW1lbnRzO1xuICAgIHRoaXMubW9kZSA9IG1vZGU7XG4gICAgdGhpcy5jb21wb25lbnRUeXBlID0gY29tcG9uZW50VHlwZSB8fCA1MTIzO1xuICB9XG4gIHNldENvbnRleHQoZ2xDb250ZXh0V3JhcHBlcikge1xuICAgIHRoaXMuY29udGV4dCA9IGdsQ29udGV4dFdyYXBwZXI7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgY3JlYXRlVkFPKCkge1xuICAgIGlmICh0aGlzLnZhbykgcmV0dXJuO1xuICAgIHRoaXMudmFvID0gdGhpcy5jb250ZXh0LmdsLmNyZWF0ZVZlcnRleEFycmF5KCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgc2V0TW9kZShtb2RlKXtcbiAgICB0aGlzLm1vZGUgPSBtb2RlXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuICBzZXRJbmRpY2VzKGFycmF5KXtcbiAgICBjb25zdCB7Y29udGV4dCwgdmFvfSA9IHRoaXNcbiAgICBjb25zdCB7Z2x9ID0gY29udGV4dFxuICAgIGdsLmJpbmRWZXJ0ZXhBcnJheSh2YW8pXG4gICAgdGhpcy5udW1FbGVtZW50cyA9IGFycmF5Lmxlbmd0aFxuICAgIGNvbnN0IGluZGljZXNCdWZmZXIgPSBnbC5jcmVhdGVCdWZmZXIoKTtcbiAgICBnbC5iaW5kQnVmZmVyKGdsLkVMRU1FTlRfQVJSQVlfQlVGRkVSLCBpbmRpY2VzQnVmZmVyKTtcbiAgICBnbC5idWZmZXJEYXRhKGdsLkVMRU1FTlRfQVJSQVlfQlVGRkVSLCBuZXcgVWludDE2QXJyYXkoYXJyYXkpLCAgZ2wuU1RBVElDX0RSQVcpO1xuICAgIGdsLmJpbmRWZXJ0ZXhBcnJheShudWxsKVxuICAgIHRoaXMuaW5kaWNlcyA9IGluZGljZXNCdWZmZXI7XG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuICBjcmVhdGVHZW9tZXRyeUJ1ZmZlcnMoKSB7XG4gICAgY29uc3QgeyBhcnJheURhdGEgfSA9IHRoaXM7XG4gICAgY29uc3QgeyBnbCB9ID0gdGhpcy5jb250ZXh0O1xuICAgIGNvbnN0IHsgYXR0cmlidXRlcywgaW5kaWNlcywgY29tcG9uZW50VHlwZSwgbnVtRWxlbWVudHMsIG1vZGUgfSA9IGFycmF5RGF0YTtcbiAgIFxuXG4gICAgaWYgKGF0dHJpYnV0ZXMpIHtcbiAgICAgIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goKGF0dHJpYnV0ZU5hbWUpID0+IHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgIHN0cmlkZSxcbiAgICAgICAgICB0eXBlLFxuICAgICAgICAgIG9mZnNldCxcbiAgICAgICAgICBsb2NhdGlvbixcbiAgICAgICAgICBudW1Db21wb25lbnRzLFxuICAgICAgICAgIG51bUF0dHJpYnV0ZXMsXG4gICAgICAgICAgZGF0YSxcbiAgICAgICAgICBzaXplLFxuICAgICAgICB9ID0gYXR0cmlidXRlc1thdHRyaWJ1dGVOYW1lXTtcbiAgICAgICAgY29uc3QgYnVmZmVyQXR0cmlidXRlRGVzY3JpcHRvciA9IG5ldyBCdWZmZXJBdHRyaWJ1dGUoZ2wsIHtcbiAgICAgICAgICBzdHJpZGUsXG4gICAgICAgICAgdHlwZSxcbiAgICAgICAgICBvZmZzZXQsXG4gICAgICAgICAgbG9jYXRpb24sXG4gICAgICAgICAgbnVtQXR0cmlidXRlcyxcbiAgICAgICAgICBudW1Db21wb25lbnRzLFxuICAgICAgICAgIHNpemUsXG4gICAgICAgIH0pO1xuICAgICAgICBidWZmZXJBdHRyaWJ1dGVEZXNjcmlwdG9yLmJ1ZmZlckRhdGEoZGF0YSk7XG4gICAgICAgIHRoaXMuYnVmZmVycyA9IHtcbiAgICAgICAgICAuLi50aGlzLmJ1ZmZlcnMsXG4gICAgICAgICAgW2F0dHJpYnV0ZU5hbWVdOiBidWZmZXJBdHRyaWJ1dGVEZXNjcmlwdG9yLFxuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChpbmRpY2VzKSB7XG4gICAgICBjb25zdCBpbmRpY2VzQnVmZmVyID0gZ2wuY3JlYXRlQnVmZmVyKCk7XG4gICAgICBnbC5iaW5kQnVmZmVyKGdsLkVMRU1FTlRfQVJSQVlfQlVGRkVSLCBpbmRpY2VzQnVmZmVyKTtcbiAgICAgIGdsLmJ1ZmZlckRhdGEoZ2wuRUxFTUVOVF9BUlJBWV9CVUZGRVIsIGluZGljZXMsIGdsLlNUQVRJQ19EUkFXKTtcbiAgICAgIHRoaXMuaW5kaWNlcyA9IGluZGljZXNCdWZmZXI7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIHNldEF0dHJpYnV0ZXMoKSB7XG4gICAgY29uc3QgeyBnbCB9ID0gdGhpcy5jb250ZXh0O1xuXG4gICAgZ2wuYmluZFZlcnRleEFycmF5KHRoaXMudmFvKTtcbiAgICBmb3IgKGNvbnN0IGF0dHJpYiBpbiB0aGlzLmJ1ZmZlcnMpIHtcbiAgICAgIGNvbnN0IGJ1ZmZlckF0dHJpYnV0ZURlc2NyaXB0b3IgPSB0aGlzLmJ1ZmZlcnNbYXR0cmliXTtcbiAgICAgIGJ1ZmZlckF0dHJpYnV0ZURlc2NyaXB0b3Iuc2V0QXR0cmlidXRlKCk7XG4gICAgfVxuICAgIGdsLmJpbmRCdWZmZXIoZ2wuRUxFTUVOVF9BUlJBWV9CVUZGRVIsIHRoaXMuaW5kaWNlcyk7XG4gICAgZ2wuYmluZFZlcnRleEFycmF5KG51bGwpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgc2V0RHJhd2VyKGRyYXdlcikge1xuICAgIHRoaXMuZHJhd2VyID0gZHJhd2VyO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIHNldFByb2dyYW1JbmZvKHByb2dyYW1JbmZvKSB7XG4gICAgdGhpcy5wcm9ncmFtSW5mbyA9IHByb2dyYW1JbmZvO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIGNyZWF0ZUJ1ZmZlckF0dHJpYkRhdGEobmFtZSwgdHlwZSwgcGFyYW1zKSB7XG4gICAgY29uc3QgeyBnbCB9ID0gdGhpcy5jb250ZXh0O1xuICAgIGNvbnN0IGF0dHJpYlByb3BzID0gZ2V0QXR0cmlidXRlUHJvcHNCeVR5cGUodHlwZSk7XG4gICAgY29uc3QgYXR0cmlidXRlUHJvcHMgPSB7IC4uLmF0dHJpYlByb3BzLCAuLi5wYXJhbXMgfTtcbiAgICBjb25zdCBidWZmZXJBdHRyaWJEYXRhID0gbmV3IEJ1ZmZlckF0dHJpYnV0ZShnbCwgYXR0cmlidXRlUHJvcHMpO1xuICAgIHRoaXMuYnVmZmVycyA9IHsgLi4udGhpcy5idWZmZXJzLCBbbmFtZV06IGJ1ZmZlckF0dHJpYkRhdGEgfTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBzZXRCdWZmZXJBdHRyaWJEYXRhKG5hbWUsIGJ1ZmZlckF0dHJpYkRhdGEpIHtcbiAgICB0aGlzLmJ1ZmZlcnMgPSB7IC4uLnRoaXMuYnVmZmVycywgW25hbWVdOiBidWZmZXJBdHRyaWJEYXRhIH07XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgc2V0T3duQXR0cmlidXRlKG5hbWUsIGRpdmlzb3IpIHtcbiAgICBjb25zdCB7IGdsIH0gPSB0aGlzLmNvbnRleHQ7XG4gICAgY29uc3QgYnVmZmVyQXR0cmliRGF0YSA9IHRoaXMuYnVmZmVyc1tuYW1lXTtcbiAgICBnbC5iaW5kVmVydGV4QXJyYXkodGhpcy52YW8pO1xuICAgIGJ1ZmZlckF0dHJpYkRhdGEuc2V0QXR0cmlidXRlKGRpdmlzb3IpO1xuICAgIGdsLmJpbmRWZXJ0ZXhBcnJheShudWxsKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBzZXRBdHRyaWJ1dGUoYnVmZmVyQXR0cmliRGF0YSkge1xuICAgIGNvbnN0IHsgZ2wgfSA9IHRoaXMuY29udGV4dDtcbiAgICBnbC5iaW5kVmVydGV4QXJyYXkodGhpcy52YW8pO1xuICAgIGJ1ZmZlckF0dHJpYkRhdGEuc2V0QXR0cmlidXRlKCk7XG4gICAgZ2wuYmluZFZlcnRleEFycmF5KG51bGwpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIGJ1ZmZlckRhdGEoYnVmZmVyTmFtZSwgZGF0YSwgYnl0ZUxlbmd0aCwgdXNhZ2UpIHtcbiAgICBjb25zdCBidWZmZXJBdHRyaWJEYXRhID0gdGhpcy5idWZmZXJzW2J1ZmZlck5hbWVdO1xuICAgIGJ1ZmZlckF0dHJpYkRhdGEuYnVmZmVyRGF0YShkYXRhLCBieXRlTGVuZ3RoLCB1c2FnZSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgYnVmZmVyU3ViRGF0YShidWZmZXJOYW1lLCBkYXRhLCBvZmZzZXQpIHtcbiAgICBjb25zdCBidWZmZXJEZXNjID0gdGhpcy5idWZmZXJzW2J1ZmZlck5hbWVdO1xuICAgIGJ1ZmZlckRlc2MuYnVmZmVyU3ViRGF0YShkYXRhLCBvZmZzZXQpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIGRyYXcodW5pZm9ybXMsIGNhbWVyYU1hdHJpeCkge1xuICAgIHRoaXMuZHJhd2VyLmRyYXcodGhpcywgdW5pZm9ybXMsIGNhbWVyYU1hdHJpeCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgZHJhd0luc3RhbmNlZCh1bmlmb3JtcywgY2FtZXJhTWF0cml4LCBudW1JbnN0YW5jZXMpIHtcbiAgICB0aGlzLmRyYXdlci5kcmF3SW5zdGFuY2VkKHRoaXMsIHVuaWZvcm1zLCBjYW1lcmFNYXRyaXgsIG51bUluc3RhbmNlcyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJpbWl0aXZlUmVuZGVyZXI7XG4iLCJjb25zdCBwcm9wcyA9IHtcbiAgbWF0NDoge1xuICAgIHN0cmlkZTogNjQsXG4gICAgYnl0ZUxlbmd0aDogNjQsXG4gICAgdHlwZTogMHgxNDA2LFxuICAgIG51bUF0dHJpYnV0ZXM6IDQsXG4gICAgbnVtQ29tcG9uZW50czogNCxcbiAgfSxcbiAgdmVjMzoge1xuICAgIG51bUNvbXBvbmVudHM6IDMsXG4gICAgdHlwZTogMHgxNDA2LFxuICAgIG51bUF0dHJpYnV0ZXM6IDEsXG4gIH0sXG59O1xuY29uc3QgZ2V0QXR0cmlidXRlUHJvcHNCeVR5cGUgPSAodHlwZSkgPT4gcHJvcHNbdHlwZV07XG5leHBvcnQgZGVmYXVsdCBnZXRBdHRyaWJ1dGVQcm9wc0J5VHlwZTtcbiIsImNvbnN0IFRZUEVEX0FSUkFZUyA9IHtcbiAgICAnNTEyMCc6IEludDhBcnJheSwgICAgXG4gICAgJzUxMjEnOiBVaW50OEFycmF5LCAgIFxuICAgICc1MTIyJzogSW50MTZBcnJheSwgICBcbiAgICAnNTEyMyc6IFVpbnQxNkFycmF5LCAgXG4gICAgJzUxMjQnOiBJbnQzMkFycmF5LCAgIFxuICAgICc1MTI1JzogVWludDMyQXJyYXksICBcbiAgICAnNTEyNic6IEZsb2F0MzJBcnJheSwgXG59XG5jb25zdCBOVU1fQ09NUE9ORU5UUyA9IHtcbiAgICAnU0NBTEFSJyA6IDEsXG4gICAgJ1ZFQzInIDogMixcbiAgICAnVkVDMycgOiAzLFxuICAgICdWRUM0JyA6IDQsXG4gICAgJ01BVDInOiA0LFxuICAnTUFUMyc6IDksXG4gICdNQVQ0JzogMTYsXG59XG5jb25zdCBMT0NBVElPTlMgPSB7XG4gICAgJ1BPU0lUSU9OJyA6IDAsXG4gICAgJ05PUk1BTCcgOiAxLFxuICAgICdXRUlHSFRTXzAnIDogMixcbiAgICAnSk9JTlRTXzAnIDogMyxcbiAgICAnVEVYQ09PUkRfMCcgOiA0LFxufVxuY29uc3QgRUxFTUVOVF9TSVpFID0ge1xuICAgIDB4MTQwNiA6IDRcbn1cbmV4cG9ydCB7XG4gICAgTE9DQVRJT05TLCBOVU1fQ09NUE9ORU5UUywgVFlQRURfQVJSQVlTLCBFTEVNRU5UX1NJWkVcbn0iLCJpbXBvcnQgeyBUZXh0dXJlSW5mbyB9IGZyb20gXCIuL3RleHR1cmVJbmZvXCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHTGNvbnRleHRXcmFwcGVyIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXNfaWQpIHtcbiAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2NhbnZhc19pZH1gKTtcbiAgICAgIGNvbnN0IGdsID0gY2FudmFzLmdldENvbnRleHQoXCJ3ZWJnbDJcIik7XG4gIFxuICAgICAgaWYgKCFnbCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyB3ZWJnbCFcIik7XG4gICAgICB9XG4gICAgICB0aGlzLmdsID0gZ2w7XG4gICAgICB0aGlzLnRleHR1cmVzID0ge307XG4gICAgICB0aGlzLnJlbmRlckNhY2hlID0ge1xuICAgICAgICBsYXN0VXNlZFByb2dyYW1JbmZvOiBudWxsLFxuICAgICAgfTtcbiAgICAgIHRoaXMucHJvZ3JhbXMgPSB7fTtcbiAgICB9XG4gICAgZ2V0TGFzdFVzZWRQcm9ncmFtSW5mbygpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlbmRlckNhY2hlLmxhc3RVc2VkUHJvZ3JhbUluZm87XG4gICAgfVxuICAgIHNldExhc3RVc2VkUHJvZ3JhbShwcm9ncmFtSW5mbykge1xuICAgICAgdGhpcy5yZW5kZXJDYWNoZS5sYXN0VXNlZFByb2dyYW1JbmZvID0gcHJvZ3JhbUluZm87XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgdXNlUHJvZ3JhbUluZm8ocHJvZ3JhbUluZm8pIHtcbiAgICAgIGlmIChwcm9ncmFtSW5mbyAhPSB0aGlzLmdldExhc3RVc2VkUHJvZ3JhbUluZm8oKSkge1xuICAgICAgICB0aGlzLmdsLnVzZVByb2dyYW0ocHJvZ3JhbUluZm8ucHJvZ3JhbSk7XG4gICAgICAgIHRoaXMuc2V0TGFzdFVzZWRQcm9ncmFtKHByb2dyYW1JbmZvKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICByZXNpemVDYW52YXNUb0Rpc3BsYXlTaXplKG11bHRpcGxpZXIgPSAxKSB7XG4gICAgICBjb25zdCBjYW52YXMgPSB0aGlzLmdsLmNhbnZhcztcbiAgICAgIGNvbnN0IHdpZHRoID0gKGNhbnZhcy5jbGllbnRXaWR0aCAqIG11bHRpcGxpZXIpIHwgMDtcbiAgICAgIGNvbnN0IGhlaWdodCA9IChjYW52YXMuY2xpZW50SGVpZ2h0ICogbXVsdGlwbGllcikgfCAwO1xuICBcbiAgICAgIGNhbnZhcy53aWR0aCA9IHdpZHRoO1xuICAgICAgY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgIFxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHJlc2l6ZUNhbnZhcyh3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICBjb25zdCBjYW52YXMgPSB0aGlzLmdsLmNhbnZhcztcbiAgICAgIGNhbnZhcy53aWR0aCA9IHdpZHRoO1xuICAgICAgY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBzZXRWaWV3cG9ydCgpe1xuICAgICAgdGhpcy5nbC52aWV3cG9ydCgwLCAwLCB0aGlzLmdsLmNhbnZhcy53aWR0aCwgIHRoaXMuZ2wuY2FudmFzLmhlaWdodCk7XG4gICAgICByZXR1cm4gdGhpc1xuICAgIH1cbiAgICBnZXRDb250ZXh0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2w7XG4gICAgfVxuICAgIGNyZWF0ZVRleHR1cmVJbmZvKHRleHR1cmVOYW1lKSB7XG4gICAgICBjb25zdCB0ZXh0dXJlID0gbmV3IFRleHR1cmVJbmZvKHRoaXMuZ2wpO1xuICAgICAgdGhpcy50ZXh0dXJlcyA9IHsgLi4udGhpcy50ZXh0dXJlcywgW3RleHR1cmVOYW1lXTogdGV4dHVyZSB9O1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGdldFRleHR1cmUodGV4dHVyZU5hbWUpIHtcbiAgICAgIHJldHVybiB0aGlzLnRleHR1cmVzW3RleHR1cmVOYW1lXTtcbiAgICB9XG4gICAgc2V0VGV4dHVyZVVuaXQodGV4dHVyZU5hbWUsIHVuaXROdW0pIHtcbiAgICAgIGNvbnN0IHRleHR1cmUgPSB0aGlzLmdldFRleHR1cmUodGV4dHVyZU5hbWUpLnRleHR1cmU7XG4gICAgICBzZXRUZXh0dXJlVW5pdHModGhpcy5nbCwgdGV4dHVyZSwgdW5pdE51bSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gIH0iLCJpbXBvcnQgUHJpbWl0aXZlUmVuZGVyZXIgZnJvbSBcIi4vUHJpbWl0aXZlUmVuZGVyZXJcIjtcbmltcG9ydCB7IE1lc2hSZW5kZXJlciB9IGZyb20gXCIuL01lc2hSZW5kZXJlclwiO1xuaW1wb3J0IHsgQXR0cmlidXRlU2V0dGVyLCBCdWZmZXJDb250cm9sbGVyIH0gZnJvbSBcIi4vQnVmZmVyQXR0cmlidXRlXCI7XG5pbXBvcnQgeyBOVU1fQ09NUE9ORU5UUywgVFlQRURfQVJSQVlTLCBMT0NBVElPTlMgfSBmcm9tIFwiLi9lbnVtc1wiO1xuXG5jb25zdCBBcnJheURhdGFGcm9tR2x0ZiA9IChnbHRmLCBidWZmZXJzKSA9PiB7XG4gIGNvbnN0IHsgYnVmZmVyVmlld3MsIGFjY2Vzc29ycywgbWVzaGVzLCBub2RlcyB9ID0gZ2x0ZjtcbiAgY29uc3QgYXR0cmliRGF0YUZyb21BY2Nlc3NvciA9IChhY2Nlc3NvcikgPT4ge1xuICAgIGNvbnN0IGJ1ZmZlclZpZXcgPSBidWZmZXJWaWV3c1thY2Nlc3Nvci5idWZmZXJWaWV3XTtcbiAgICBjb25zdCB7IGNvdW50LCBjb21wb25lbnRUeXBlLCB0eXBlIH0gPSBhY2Nlc3NvcjtcbiAgICBjb25zdCBieXRlT2Zmc2V0ID0gYWNjZXNzb3IuYnl0ZU9mZnNldCB8fCAwO1xuICAgIGNvbnN0IHsgYnl0ZUxlbmd0aCwgdGFyZ2V0IH0gPSBidWZmZXJWaWV3O1xuICAgIGNvbnN0IHN0cmlkZSA9IGJ1ZmZlclZpZXcuYnl0ZVN0cmlkZSB8fCAwO1xuICAgIGNvbnN0IGJ1ZmZlclZpZXdCeXRlT2Zmc2V0ID0gYnVmZmVyVmlldy5ieXRlT2Zmc2V0IHx8IDA7XG4gICAgY29uc3QgYnVmZmVyID0gYnVmZmVyc1tidWZmZXJWaWV3LmJ1ZmZlcl07XG5cbiAgICByZXR1cm4ge1xuICAgICAgZGF0YTogbmV3IFVpbnQ4QXJyYXkoYnVmZmVyLCBidWZmZXJWaWV3Qnl0ZU9mZnNldCwgYnl0ZUxlbmd0aCksXG4gICAgICBudW1Db21wb25lbnRzOiBOVU1fQ09NUE9ORU5UU1t0eXBlXSxcbiAgICAgIHN0cmlkZSxcbiAgICAgIGJ5dGVMZW5ndGgsXG4gICAgICBsb2NhdGlvbjogbnVsbCxcbiAgICAgIGNvdW50LFxuICAgICAgdHlwZTogY29tcG9uZW50VHlwZSxcbiAgICAgIG9mZnNldDogYnl0ZU9mZnNldCB8fCAwLFxuICAgICAgY29tcG9uZW50VHlwZTogYWNjZXNzb3IuY29tcG9uZW50VHlwZSxcbiAgICB9O1xuICB9O1xuICBjb25zdCBfbWVzaGVzID0gbWVzaGVzLm1hcCgobWVzaCkgPT4gKHtcbiAgICBwcmltaXRpdmVzOiBtZXNoLnByaW1pdGl2ZXMubWFwKChfcHJpbWl0aXZlKSA9PiB7XG4gICAgICBjb25zdCBwcmltaXRpdmUgPSB7XG4gICAgICAgIGF0dHJpYnV0ZXM6IHt9LFxuICAgICAgICBtb2RlOiBfcHJpbWl0aXZlLm1vZGUsXG4gICAgICB9O1xuICAgICAgaWYgKF9wcmltaXRpdmUuaGFzT3duUHJvcGVydHkoXCJpbmRpY2VzXCIpKSB7XG4gICAgICAgIGNvbnN0IGluZGljZXNJbmZvID0gYXR0cmliRGF0YUZyb21BY2Nlc3NvcihcbiAgICAgICAgICBhY2Nlc3NvcnNbX3ByaW1pdGl2ZS5pbmRpY2VzXVxuICAgICAgICApO1xuICAgICAgICBwcmltaXRpdmUuaW5kaWNlcyA9IGluZGljZXNJbmZvLmRhdGE7XG4gICAgICAgIHByaW1pdGl2ZS5udW1FbGVtZW50cyA9IGluZGljZXNJbmZvLmNvdW50O1xuICAgICAgICBwcmltaXRpdmUuY29tcG9uZW50VHlwZSA9IGluZGljZXNJbmZvLmNvbXBvbmVudFR5cGU7XG4gICAgICB9XG4gICAgICBPYmplY3Qua2V5cyhfcHJpbWl0aXZlLmF0dHJpYnV0ZXMpLmZvckVhY2goKGF0dHJpYk5hbWUpID0+IHtcbiAgICAgICAgY29uc3QgYXR0cmlidXRlID0gX3ByaW1pdGl2ZS5hdHRyaWJ1dGVzW2F0dHJpYk5hbWVdO1xuICAgICAgICBwcmltaXRpdmUuYXR0cmlidXRlc1thdHRyaWJOYW1lXSA9IGF0dHJpYkRhdGFGcm9tQWNjZXNzb3IoXG4gICAgICAgICAgYWNjZXNzb3JzW2F0dHJpYnV0ZV1cbiAgICAgICAgKTtcbiAgICAgICAgLy9pZihhdHRyaWJOYW1lID09PSAnSk9JTlRTXzAnKSBfcHJpbWl0aXZlLmF0dHJpYnV0ZXNbYXR0cmliTmFtZV0uZGF0YSA9IG5ldyBVaW50MzJBcnJheShfcHJpbWl0aXZlLmF0dHJpYnV0ZXNbYXR0cmliTmFtZV0uZGF0YSlcbiAgICAgICAgcHJpbWl0aXZlLmF0dHJpYnV0ZXNbYXR0cmliTmFtZV0ubG9jYXRpb24gPSBMT0NBVElPTlNbYXR0cmliTmFtZV07XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBwcmltaXRpdmU7XG4gICAgfSksXG4gICAgbmFtZTogbWVzaC5uYW1lLFxuICB9KSk7XG5cbiAgcmV0dXJuIF9tZXNoZXMubWFwKChtZXNoKSA9PiB7XG4gICAgY29uc3QgcHJpbWl0aXZlcyA9IG1lc2gucHJpbWl0aXZlcy5tYXAoXG4gICAgICAocHJpbWl0aXZlKSA9PiBuZXcgUHJpbWl0aXZlUmVuZGVyZXIocHJpbWl0aXZlKVxuICAgICk7XG4gICAgY29uc3QgbmFtZSA9IG1lc2gubmFtZTtcblxuICAgIHJldHVybiBuZXcgTWVzaFJlbmRlcmVyKHsgcHJpbWl0aXZlcywgbmFtZSB9KTtcbiAgfSk7XG59O1xuXG5jb25zdCBQcmltaXRpdmVSZW5kZXJJbmZvRnJvbUFycmF5RGF0YSA9IChtZXNoZXMpID0+XG4gIG1lc2hlcy5tYXAoKG1lc2gpID0+IHtcbiAgICBjb25zdCBwcmltaXRpdmVzID0gbWVzaC5wcmltaXRpdmVzLm1hcChcbiAgICAgIChwcmltaXRpdmUpID0+IG5ldyBQcmltaXRpdmVSZW5kZXJlcihwcmltaXRpdmUpXG4gICAgKTtcbiAgICBjb25zdCBuYW1lID0gbWVzaC5uYW1lO1xuICAgIHJldHVybiBuZXcgTWVzaFJlbmRlcmVyKHsgbmFtZSwgcHJpbWl0aXZlcyB9KTtcbiAgfSk7XG5cbmNvbnN0IEVudGl0eURhdGFGcm9tR2x0ZiA9IChnbHRmLCBidWZmZXJzKSA9PlxuICBQcmltaXRpdmVSZW5kZXJJbmZvRnJvbUFycmF5RGF0YShBcnJheURhdGFGcm9tR2x0ZihnbHRmLCBidWZmZXJzKSk7XG5cbmNsYXNzIEdMVEYge1xuICBjb25zdHJ1Y3RvcihnbHRmLCBiaW5hcnlCdWZmZXJzKSB7XG4gICAgY29uc3QgeyBub2RlcyB9ID0gZ2x0ZjtcbiAgICB0aGlzLm5vZGVzID0gbm9kZXM7XG4gICAgdGhpcy5tZXNoZXMgPSBBcnJheURhdGFGcm9tR2x0ZihnbHRmLCBiaW5hcnlCdWZmZXJzKTtcbiAgfVxufVxuZXhwb3J0IHtcbiAgQXJyYXlEYXRhRnJvbUdsdGYsXG4gIFByaW1pdGl2ZVJlbmRlckluZm9Gcm9tQXJyYXlEYXRhLFxuICBFbnRpdHlEYXRhRnJvbUdsdGYsXG4gIEdMVEYsXG59O1xuIiwiaW1wb3J0IHsgZXhwYW5kZWRUeXBlZEFycmF5IH0gZnJvbSBcIi4vcHJvZ3JhbUluZm8uanNcIjtcblxuaW1wb3J0IHt2ZWMzfSBmcm9tICdtYXRoJ1xuXG5jb25zdCB7IGNyb3NzLCBkaWZmLCBub3JtYWxpemUgfSA9IHZlYzNcblxuY29uc3QgbGluZWRCb3hJbmRpY2VzID0gbmV3IFVpbnQxNkFycmF5KFtcbiAgMCxcbiAgMSxcbiAgMSxcbiAgMixcbiAgMixcbiAgMyxcbiAgMyxcbiAgMCwgLy8gZnJvbnRcbiAgMCxcbiAgNSxcbiAgNSxcbiAgNCxcbiAgNCxcbiAgMSxcbiAgMSxcbiAgMCwgLy9ib3R0b21cbiAgMCxcbiAgNCxcbiAgNCxcbiAgNyxcbiAgNyxcbiAgMyxcbiAgMyxcbiAgMCwgLy9sZWZ0XG4gIDEsXG4gIDIsXG4gIDIsXG4gIDYsXG4gIDYsXG4gIDUsXG4gIDUsXG4gIDEsIC8vcmlnaHRcbiAgNCxcbiAgNSxcbiAgNSxcbiAgNixcbiAgNixcbiAgNyxcbiAgNyxcbiAgNCwgLy8gYmFja1xuICAyLFxuICA3LFxuICA3LFxuICAzLFxuICAzLFxuICA2LFxuICA2LFxuICAyLCAvLyB0b3Bcbl0pO1xuXG5jb25zdCBDVUJFX0ZBQ0VfSU5ESUNFUyA9IFtcbiAgWzMsIDcsIDUsIDFdLCAvLyByaWdodFxuICBbNiwgMiwgMCwgNF0sIC8vIGxlZnRcbiAgWzYsIDcsIDMsIDJdLCAvLyA/P1xuICBbMCwgMSwgNSwgNF0sIC8vID8/XG4gIFs3LCA2LCA0LCA1XSwgLy8gZnJvbnRcbiAgWzIsIDMsIDEsIDBdLCAvLyBiYWNrXG5dO1xuXG5mdW5jdGlvbiBjcmVhdGVCb3goX2EgPSAxLCBfYiA9IDEsIF9jID0gMSkge1xuICBjb25zdCBhID0gX2EgLyAyLFxuICAgIGIgPSBfYiAvIDIsXG4gICAgYyA9IF9jIC8gMjtcbiAgY29uc3QgY29ybmVyVmVydGljZXMgPSBbXG4gICAgWy1hLCAtYiwgLWNdLFxuICAgIFsrYSwgLWIsIC1jXSxcbiAgICBbLWEsICtiLCAtY10sXG4gICAgWythLCArYiwgLWNdLFxuICAgIFstYSwgLWIsICtjXSxcbiAgICBbK2EsIC1iLCArY10sXG4gICAgWy1hLCArYiwgK2NdLFxuICAgIFsrYSwgK2IsICtjXSxcbiAgXTtcblxuICBjb25zdCBmYWNlTm9ybWFscyA9IFtcbiAgICBbKzEsICswLCArMF0sXG4gICAgWy0xLCArMCwgKzBdLFxuICAgIFsrMCwgKzEsICswXSxcbiAgICBbKzAsIC0xLCArMF0sXG4gICAgWyswLCArMCwgKzFdLFxuICAgIFsrMCwgKzAsIC0xXSxcbiAgXTtcblxuICBjb25zdCB1dkNvb3JkcyA9IFtcbiAgICBbMSwgMF0sXG4gICAgWzAsIDBdLFxuICAgIFswLCAxXSxcbiAgICBbMSwgMV0sXG4gIF07XG4gIGNvbnN0IG51bVZlcnRpY2VzID0gNiAqIDQ7XG4gIGNvbnN0IHBvc2l0aW9ucyA9IGV4cGFuZGVkVHlwZWRBcnJheShuZXcgRmxvYXQzMkFycmF5KG51bVZlcnRpY2VzICogMykpO1xuICBjb25zdCBub3JtYWxzID0gZXhwYW5kZWRUeXBlZEFycmF5KG5ldyBGbG9hdDMyQXJyYXkobnVtVmVydGljZXMgKiAzKSk7XG4gIC8vY29uc3QgdGV4Q29vcmRzID0gd2ViZ2xVdGlscy5jcmVhdGVBdWdtZW50ZWRUeXBlZEFycmF5KDIgLCBudW1WZXJ0aWNlcyk7XG4gIGNvbnN0IGluZGljZXMgPSBleHBhbmRlZFR5cGVkQXJyYXkobmV3IFVpbnQxNkFycmF5KDYgKiAyICogMykpO1xuXG4gIGZvciAobGV0IGYgPSAwOyBmIDwgNjsgKytmKSB7XG4gICAgY29uc3QgZmFjZUluZGljZXMgPSBDVUJFX0ZBQ0VfSU5ESUNFU1tmXTtcbiAgICBmb3IgKGxldCB2ID0gMDsgdiA8IDQ7ICsrdikge1xuICAgICAgY29uc3QgcG9zaXRpb24gPSBjb3JuZXJWZXJ0aWNlc1tmYWNlSW5kaWNlc1t2XV07XG4gICAgICBjb25zdCBub3JtYWwgPSBmYWNlTm9ybWFsc1tmXTtcbiAgICAgIHBvc2l0aW9ucy5wdXNoKHBvc2l0aW9uKTtcbiAgICAgIG5vcm1hbHMucHVzaChub3JtYWwpO1xuICAgIH1cblxuICAgIGNvbnN0IG9mZnNldCA9IDQgKiBmO1xuICAgIGluZGljZXMucHVzaChvZmZzZXQgKyAwLCBvZmZzZXQgKyAxLCBvZmZzZXQgKyAyKTtcbiAgICBpbmRpY2VzLnB1c2gob2Zmc2V0ICsgMCwgb2Zmc2V0ICsgMiwgb2Zmc2V0ICsgMyk7XG4gIH1cbiAgY29uc3QgbGVuID0gcG9zaXRpb25zLmJ5dGVMZW5ndGg7XG4gIGNvbnN0IHRleGNvb3JkID0gbmV3IEZsb2F0MzJBcnJheShbXG4gICAgLy8gRnJvbnRcbiAgICAwLjAsIDAuMCwgMS4wLCAwLjAsIDEuMCwgMS4wLCAwLjAsIDEuMCxcbiAgICAvLyBCYWNrXG4gICAgMC4wLCAwLjAsIDEuMCwgMC4wLCAxLjAsIDEuMCwgMC4wLCAxLjAsXG4gICAgLy8gVG9wXG4gICAgMC4wLCAwLjAsIDEuMCwgMC4wLCAxLjAsIDEuMCwgMC4wLCAxLjAsXG4gICAgLy8gQm90dG9tXG4gICAgMC4wLCAwLjAsIDEuMCwgMC4wLCAxLjAsIDEuMCwgMC4wLCAxLjAsXG4gICAgLy8gUmlnaHRcbiAgICAwLjAsIDAuMCwgMS4wLCAwLjAsIDEuMCwgMS4wLCAwLjAsIDEuMCxcbiAgICAvLyBMZWZ0XG4gICAgMC4wLCAwLjAsIDEuMCwgMC4wLCAxLjAsIDEuMCwgMC4wLCAxLjAsXG4gIF0pO1xuXG4gIGNvbnN0IEFycmF5RGF0YSA9IHtcbiAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICBOT1JNQUw6IHtcbiAgICAgICAgZGF0YTogbm9ybWFscyxcbiAgICAgICAgY291bnQ6IDYgKiA0ICogMyxcbiAgICAgICAgbG9jYXRpb246IDEsXG4gICAgICAgIGJ5dGVMZW5ndGg6IG5vcm1hbHMuYnl0ZUxlbmd0aCxcbiAgICAgICAgc3RyaWRlOiAwLFxuICAgICAgICBvZmZzZXQ6IDAsXG4gICAgICAgIG51bUNvbXBvbmVudHM6IDMsXG4gICAgICAgIHR5cGU6IDUxMjYsXG4gICAgICB9LFxuICAgICAgUE9TSVRJT046IHtcbiAgICAgICAgZGF0YTogcG9zaXRpb25zLFxuICAgICAgICBjb3VudDogNiAqIDQgKiAzLFxuICAgICAgICBsb2NhdGlvbjogMCxcbiAgICAgICAgYnl0ZUxlbmd0aDogcG9zaXRpb25zLmJ5dGVMZW5ndGgsXG4gICAgICAgIHN0cmlkZTogMCxcbiAgICAgICAgb2Zmc2V0OiAwLFxuICAgICAgICBudW1Db21wb25lbnRzOiAzLFxuICAgICAgICB0eXBlOiA1MTI2LFxuICAgICAgfSxcbiAgICAgIFRFWENPT1JEXzA6IHtcbiAgICAgICAgZGF0YTogdGV4Y29vcmQsXG4gICAgICAgIGNvdW50OiA0OCxcbiAgICAgICAgdHlwZTogNTEyNixcbiAgICAgICAgb2Zmc2V0OiAwLFxuICAgICAgICBzdHJpZGU6IDAsXG4gICAgICAgIGJ5dGVMZW5ndGg6IHRleGNvb3JkLmJ5dGVMZW5ndGgsXG4gICAgICAgIGxvY2F0aW9uOiA0LFxuICAgICAgICBudW1Db21wb25lbnRzOiAyLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGluZGljZXM6IGluZGljZXMsXG4gICAgbnVtRWxlbWVudHM6IGluZGljZXMubGVuZ3RoLFxuICAgIGNvbXBvbmVudFR5cGU6IDUxMjMsXG4gICAgbW9kZTogNCxcbiAgfTtcbiAgcmV0dXJuIEFycmF5RGF0YTtcbiAgLypyZXR1cm4ge1xuICAgICAgICAgIGdsdGYgOiB7XG4gICAgICAgICAgICBhY2Nlc3NvcnMgOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYnVmZmVyVmlldyA6IDAsXG4gICAgICAgICAgICAgICAgYnl0ZU9mZnNldCA6IDAsXG4gICAgICAgICAgICAgICAgY291bnQgOjcyLFxuICAgICAgICAgICAgICAgIGNvbXBvbmVudFR5cGUgOiA1MTI2LFxuICAgICAgICAgICAgICAgIHR5cGUgOiAnVkVDMydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGJ1ZmZlclZpZXcgOiAxLFxuICAgICAgICAgICAgICBieXRlT2Zmc2V0IDogMCxcbiAgICAgICAgICAgICAgY291bnQgOiA3MixcbiAgICAgICAgICAgICAgY29tcG9uZW50VHlwZSA6IDUxMjYsXG4gICAgICAgICAgICAgIHR5cGUgOiAnVkVDMydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGJ1ZmZlclZpZXcgOiAyLFxuICAgICAgICAgICAgICBieXRlT2Zmc2V0IDogMCxcbiAgICAgICAgICAgICAgY291bnQgOiAzNixcbiAgICAgICAgICAgICAgY29tcG9uZW50VHlwZSA6IDUxMjMsXG4gICAgICAgICAgICAgIHR5cGUgOiAnU0NBTEFSJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYnVmZmVyVmlldyA6IDMsXG4gICAgICAgICAgICAgIGJ5dGVPZmZzZXQgOiAwLFxuICAgICAgICAgICAgICBjb3VudCA6IDQ4LFxuICAgICAgICAgICAgICBjb21wb25lbnRUeXBlIDogNTEyNixcbiAgICAgICAgICAgICAgdHlwZSA6ICdWRUMyJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICBidWZmZXJWaWV3cyA6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGJ1ZmZlciA6IDAsXG4gICAgICAgICAgICAgICAgYnl0ZUxlbmd0aCA6IHBvc2l0aW9ucy5ieXRlTGVuZ3RoLFxuICAgICAgICAgICAgICAgIGJ5dGVPZmZzZXQgOiAwXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBidWZmZXIgOiAxLFxuICAgICAgICAgICAgICAgIGJ5dGVMZW5ndGggOiBub3JtYWxzLmJ5dGVMZW5ndGgsXG4gICAgICAgICAgICAgICAgYnl0ZU9mZnNldCA6IDBcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGJ1ZmZlciA6IDIsXG4gICAgICAgICAgICAgICAgYnl0ZUxlbmd0aCA6IGluZGljZXMuYnl0ZUxlbmd0aCxcbiAgICAgICAgICAgICAgICBieXRlT2Zmc2V0IDogMFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYnVmZmVyIDogMyxcbiAgICAgICAgICAgICAgICBieXRlTGVuZ3RoIDogdGV4Y29vcmQuYnl0ZUxlbmd0aCxcbiAgICAgICAgICAgICAgICBieXRlT2Zmc2V0IDogMFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgIG1lc2hlcyA6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZSA6ICdDdWJlJyxcbiAgICAgICAgICAgICAgcHJpbWl0aXZlcyA6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzIDoge1xuICAgICAgICAgICAgICAgICAgICBOT1JNQUwgOiAxLFxuICAgICAgICAgICAgICAgICAgICBQT1NJVElPTiA6IDAsXG4gICAgICAgICAgICAgICAgICAgIFRFWENPT1JEXzAgOiAzXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgaW5kaWNlcyA6IDIsXG4gICAgICAgICAgICAgICAgICBtb2RlIDogNFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgbm9kZXMgOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWUgOiBcIkN1YmVcIixcbiAgICAgICAgICAgICAgbWVzaCA6IDAsXG4gICAgICAgICAgICAgIGNoaWxkcmVuIDogWzFdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lIDogJ0N1YmUyJyxcbiAgICAgICAgICAgICAgbWVzaCA6IDAsXG4gICAgICAgICAgICAgIHRyYW5zbGF0aW9uIDogWzEsMSwxXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgYmluYXJ5QnVmZmVycyA6IFtcbiAgICAgICAgICBwb3NpdGlvbnMuYnVmZmVyLCBub3JtYWxzLmJ1ZmZlciwgaW5kaWNlcy5idWZmZXIsIHRleGNvb3JkLmJ1ZmZlclxuICAgICAgICBdXG4gICAgICB9OyovXG59XG5cbmNvbnN0IGNyZWF0ZUNvbmUgPSAocmFkaXVzID0gMiwgaGVpZ2h0ID0gMiwgbnVtQ29ybmVycyA9IDQpID0+IHtcbiAgY29uc3QgdmVydGljZXMgPSBbMCwgLWhlaWdodCAvIDIsIDBdO1xuICBjb25zdCBub3JtYWxzID0gW107XG4gIGNvbnN0IGluZGljZXMgPSBbXTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IG51bUNvcm5lcnMgKyAxOyBpKyspIHtcbiAgICBjb25zdCBhbmdsZSA9ICgyICogaSAqIE1hdGguUEkpIC8gbnVtQ29ybmVycztcbiAgICBjb25zdCB4ID0gTWF0aC5jb3MoYW5nbGUpICogcmFkaXVzO1xuICAgIGNvbnN0IHogPSBNYXRoLnNpbihhbmdsZSkgKiByYWRpdXM7XG4gICAgY29uc3QgeSA9IC1oZWlnaHQgLyAyO1xuICAgIHZlcnRpY2VzLnB1c2goeCwgLWhlaWdodCAvIDIsIHopO1xuICAgIG5vcm1hbHMucHVzaCgwLCAtMSwgMCk7XG4gIH1cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1Db3JuZXJzOyBpKyspIHtcbiAgICBpbmRpY2VzLnB1c2goMCwgaSArIDEsIGkgKyAyKTtcbiAgfVxuICAvL3ZlcnRpY2VzLnB1c2godmVydGljZXNbMV0sIC1oZWlnaHQvMiwgdmVydGljZXNbM10pXG4gIGNvbnN0IG4gPSB2ZXJ0aWNlcy5sZW5ndGggLyAzO1xuICBjb25zdCBzdHJpZGUgPSAzO1xuICBjb25zdCBzdGFydCA9IG47XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1Db3JuZXJzICsgMjsgaSsrKSB7XG4gICAgY29uc3QgYW5nbGUgPSAoMiAqIGkgKiBNYXRoLlBJKSAvIG51bUNvcm5lcnM7XG4gICAgY29uc3QgeCA9IE1hdGguY29zKGFuZ2xlKSAqIHJhZGl1cztcbiAgICBjb25zdCB6ID0gTWF0aC5zaW4oYW5nbGUpICogcmFkaXVzO1xuICAgIGNvbnN0IHkgPSAtaGVpZ2h0IC8gMjtcbiAgICBjb25zdCBhID0gW3ZlcnRpY2VzW2kgKiAzXSwgdmVydGljZXNbaSAqIDMgKyAxXSwgdmVydGljZXNbaSAqIDMgKyAyXV07XG4gICAgY29uc3QgYiA9IFt2ZXJ0aWNlc1tpICogMyArIDNdLCB2ZXJ0aWNlc1tpICogMyArIDRdLCB2ZXJ0aWNlc1tpICogMyArIDVdXTtcbiAgICBjb25zdCBjID0gWzAsIGhlaWdodCAvIDIsIDBdO1xuICAgIGluZGljZXMucHVzaChcbiAgICAgIHN0YXJ0ICsgaSAqIHN0cmlkZSArIDIsXG4gICAgICBzdGFydCArIGkgKiBzdHJpZGUgKyAxLFxuICAgICAgc3RhcnQgKyBpICogc3RyaWRlICsgM1xuICAgICk7XG4gICAgdmVydGljZXMucHVzaCguLi5jLCAuLi5hLCAuLi5iKTtcbiAgICBjb25zdCBub3JtYWwgPSBub3JtYWxpemUoY3Jvc3MoZGlmZihiLCBjKSwgZGlmZihhLCBjKSkpO1xuICAgIG5vcm1hbHMucHVzaCguLi5ub3JtYWwsIC4uLm5vcm1hbCwgLi4ubm9ybWFsKTtcbiAgfVxuXG4gIGNvbnN0IF9ub3JtYWwgPSBuZXcgRmxvYXQzMkFycmF5KG5vcm1hbHMpO1xuICBjb25zdCBfcG9zaXRpb24gPSBuZXcgRmxvYXQzMkFycmF5KHZlcnRpY2VzKTtcbiAgY29uc3QgX2luZGljZXMgPSBuZXcgVWludDE2QXJyYXkoaW5kaWNlcyk7XG4gIGNvbnN0IEFycmF5RGF0YSA9IHtcbiAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICBQT1NJVElPTjoge1xuICAgICAgICBsb2NhdGlvbjogMCxcbiAgICAgICAgY291bnQ6IHZlcnRpY2VzLmxlbmd0aCxcbiAgICAgICAgb2Zmc2V0OiAwLFxuICAgICAgICBzdHJpZGU6IDAsXG4gICAgICAgIG51bUNvbXBvbmVudHM6IDMsXG4gICAgICAgIHR5cGU6IDUxMjYsXG4gICAgICAgIGRhdGE6IF9wb3NpdGlvbixcbiAgICAgICAgYnl0ZUxlbmd0aDogX3Bvc2l0aW9uLmJ5dGVMZW5ndGgsXG4gICAgICB9LFxuICAgICAgTk9STUFMOiB7XG4gICAgICAgIGxvY2F0aW9uOiAxLFxuICAgICAgICBjb3VudDogbm9ybWFscy5sZW5ndGgsXG4gICAgICAgIG51bUNvbXBvbmVudHM6IDMsXG4gICAgICAgIG9mZnNldDogMCxcbiAgICAgICAgc3RyaWRlOiAwLFxuICAgICAgICB0eXBlOiA1MTI2LFxuICAgICAgICBkYXRhOiBfbm9ybWFsLFxuICAgICAgICBieXRlTGVuZ3RoOiBfbm9ybWFsLmJ5dGVMZW5ndGgsXG4gICAgICB9LFxuICAgIH0sXG4gICAgY29tcG9uZW50VHlwZTogNTEyMyxcbiAgICBpbmRpY2VzOiBfaW5kaWNlcyxcbiAgICBudW1FbGVtZW50czogaW5kaWNlcy5sZW5ndGgsXG4gICAgbW9kZTogNCxcbiAgfTtcbiAgcmV0dXJuIEFycmF5RGF0YTtcbn07XG5cbmNvbnN0IGNyZWF0ZUNpcmNsZSA9IChyYWRpdXMsIG51bUNvcm5lcnMpID0+IHtcbiAgY29uc3QgdmVydGljZXMgPSBbMCwgMCwgMF07XG4gIGNvbnN0IG5vcm1hbHMgPSBbXTtcbiAgY29uc3QgaW5kaWNlcyA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtQ29ybmVycyArIDE7IGkrKykge1xuICAgIGNvbnN0IGFuZ2xlID0gKDIgKiBpICogTWF0aC5QSSkgLyBudW1Db3JuZXJzO1xuICAgIGNvbnN0IHggPSBNYXRoLmNvcyhhbmdsZSkgKiByYWRpdXM7XG4gICAgY29uc3QgeiA9IE1hdGguc2luKGFuZ2xlKSAqIHJhZGl1cztcblxuICAgIHZlcnRpY2VzLnB1c2goeCwgMCwgeik7XG4gICAgbm9ybWFscy5wdXNoKDAsIDEsIDApO1xuICB9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtQ29ybmVyczsgaSsrKSB7XG4gICAgaW5kaWNlcy5wdXNoKDAsIGkgKyAxLCBpICsgMik7XG4gIH1cblxuICBjb25zdCBfbm9ybWFsID0gbmV3IEZsb2F0MzJBcnJheShub3JtYWxzKTtcbiAgY29uc3QgX3Bvc2l0aW9uID0gbmV3IEZsb2F0MzJBcnJheSh2ZXJ0aWNlcyk7XG4gIGNvbnN0IF9pbmRpY2VzID0gbmV3IFVpbnQxNkFycmF5KGluZGljZXMpO1xuXG4gIGNvbnN0IEFycmF5RGF0YSA9IHtcbiAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICBQT1NJVElPTjoge1xuICAgICAgICBsb2NhdGlvbjogMCxcbiAgICAgICAgY291bnQ6IHZlcnRpY2VzLmxlbmd0aCxcbiAgICAgICAgb2Zmc2V0OiAwLFxuICAgICAgICBzdHJpZGU6IDAsXG4gICAgICAgIG51bUNvbXBvbmVudHM6IDMsXG4gICAgICAgIHR5cGU6IDUxMjYsXG4gICAgICAgIGRhdGE6IF9wb3NpdGlvbixcbiAgICAgICAgYnl0ZUxlbmd0aDogX3Bvc2l0aW9uLmJ5dGVMZW5ndGgsXG4gICAgICB9LFxuICAgICAgTk9STUFMOiB7XG4gICAgICAgIGxvY2F0aW9uOiAxLFxuICAgICAgICBjb3VudDogbm9ybWFscy5sZW5ndGgsXG4gICAgICAgIG51bUNvbXBvbmVudHM6IDMsXG4gICAgICAgIG9mZnNldDogMCxcbiAgICAgICAgc3RyaWRlOiAwLFxuICAgICAgICB0eXBlOiA1MTI2LFxuICAgICAgICBkYXRhOiBfbm9ybWFsLFxuICAgICAgICBieXRlTGVuZ3RoOiBfbm9ybWFsLmJ5dGVMZW5ndGgsXG4gICAgICB9LFxuICAgIH0sXG4gICAgY29tcG9uZW50VHlwZTogNTEyMyxcbiAgICBpbmRpY2VzOiBfaW5kaWNlcyxcbiAgICBudW1FbGVtZW50czogaW5kaWNlcy5sZW5ndGgsXG4gICAgbW9kZTogNCxcbiAgfTtcbiAgcmV0dXJuIEFycmF5RGF0YTtcbn07XG5cbmNvbnN0IGNyZWF0ZVNwaGVyZSA9IChcbiAgcmFkaXVzLFxuICBzdWJkaXZpc2lvbnNBeGlzLFxuICBzdWJkaXZpc2lvbnNIZWlnaHQsXG4gIG9wdF9zdGFydExhdGl0dWRlSW5SYWRpYW5zLFxuICBvcHRfZW5kTGF0aXR1ZGVJblJhZGlhbnMsXG4gIG9wdF9zdGFydExvbmdpdHVkZUluUmFkaWFucyxcbiAgb3B0X2VuZExvbmdpdHVkZUluUmFkaWFuc1xuKSA9PiB7XG4gIGlmIChzdWJkaXZpc2lvbnNBeGlzIDw9IDAgfHwgc3ViZGl2aXNpb25zSGVpZ2h0IDw9IDApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJzdWJkaXZpc2lvbkF4aXMgYW5kIHN1YmRpdmlzaW9uSGVpZ2h0IG11c3QgYmUgPiAwXCIpO1xuICB9XG5cbiAgb3B0X3N0YXJ0TGF0aXR1ZGVJblJhZGlhbnMgPSBvcHRfc3RhcnRMYXRpdHVkZUluUmFkaWFucyB8fCAwO1xuICBvcHRfZW5kTGF0aXR1ZGVJblJhZGlhbnMgPSBvcHRfZW5kTGF0aXR1ZGVJblJhZGlhbnMgfHwgTWF0aC5QSTtcbiAgb3B0X3N0YXJ0TG9uZ2l0dWRlSW5SYWRpYW5zID0gb3B0X3N0YXJ0TG9uZ2l0dWRlSW5SYWRpYW5zIHx8IDA7XG4gIG9wdF9lbmRMb25naXR1ZGVJblJhZGlhbnMgPSBvcHRfZW5kTG9uZ2l0dWRlSW5SYWRpYW5zIHx8IE1hdGguUEkgKiAyO1xuXG4gIGNvbnN0IGxhdFJhbmdlID0gb3B0X2VuZExhdGl0dWRlSW5SYWRpYW5zIC0gb3B0X3N0YXJ0TGF0aXR1ZGVJblJhZGlhbnM7XG4gIGNvbnN0IGxvbmdSYW5nZSA9IG9wdF9lbmRMb25naXR1ZGVJblJhZGlhbnMgLSBvcHRfc3RhcnRMb25naXR1ZGVJblJhZGlhbnM7XG5cbiAgY29uc3QgcG9zaXRpb25zID0gW107XG4gIGNvbnN0IG5vcm1hbHMgPSBbXTtcbiAgY29uc3QgdGV4Y29vcmRzID0gW107XG5cbiAgZm9yIChsZXQgeSA9IDA7IHkgPD0gc3ViZGl2aXNpb25zSGVpZ2h0OyB5KyspIHtcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8PSBzdWJkaXZpc2lvbnNBeGlzOyB4KyspIHtcbiAgICAgIGNvbnN0IHUgPSB4IC8gc3ViZGl2aXNpb25zQXhpcztcbiAgICAgIGNvbnN0IHYgPSB5IC8gc3ViZGl2aXNpb25zSGVpZ2h0O1xuICAgICAgY29uc3QgdGhldGEgPSBsb25nUmFuZ2UgKiB1ICsgb3B0X3N0YXJ0TG9uZ2l0dWRlSW5SYWRpYW5zO1xuICAgICAgY29uc3QgcGhpID0gbGF0UmFuZ2UgKiB2ICsgb3B0X3N0YXJ0TGF0aXR1ZGVJblJhZGlhbnM7XG4gICAgICBjb25zdCBzaW5UaGV0YSA9IE1hdGguc2luKHRoZXRhKTtcbiAgICAgIGNvbnN0IGNvc1RoZXRhID0gTWF0aC5jb3ModGhldGEpO1xuICAgICAgY29uc3Qgc2luUGhpID0gTWF0aC5zaW4ocGhpKTtcbiAgICAgIGNvbnN0IGNvc1BoaSA9IE1hdGguY29zKHBoaSk7XG4gICAgICBjb25zdCB1eCA9IGNvc1RoZXRhICogc2luUGhpO1xuICAgICAgY29uc3QgdXkgPSBjb3NQaGk7XG4gICAgICBjb25zdCB1eiA9IHNpblRoZXRhICogc2luUGhpO1xuICAgICAgcG9zaXRpb25zLnB1c2gocmFkaXVzICogdXgsIHJhZGl1cyAqIHV5LCByYWRpdXMgKiB1eik7XG4gICAgICBub3JtYWxzLnB1c2godXgsIHV5LCB1eik7XG4gICAgICB0ZXhjb29yZHMucHVzaCgxIC0gdSwgdik7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgbnVtVmVydHNBcm91bmQgPSBzdWJkaXZpc2lvbnNBeGlzICsgMTtcbiAgY29uc3QgaW5kaWNlcyA9IFtdO1xuICBmb3IgKGxldCB4ID0gMDsgeCA8IHN1YmRpdmlzaW9uc0F4aXM7IHgrKykge1xuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgc3ViZGl2aXNpb25zSGVpZ2h0OyB5KyspIHtcbiAgICAgIGluZGljZXMucHVzaChcbiAgICAgICAgKHkgKyAwKSAqIG51bVZlcnRzQXJvdW5kICsgeCxcbiAgICAgICAgKHkgKyAwKSAqIG51bVZlcnRzQXJvdW5kICsgeCArIDEsXG4gICAgICAgICh5ICsgMSkgKiBudW1WZXJ0c0Fyb3VuZCArIHhcbiAgICAgICk7XG4gICAgICBpbmRpY2VzLnB1c2goXG4gICAgICAgICh5ICsgMSkgKiBudW1WZXJ0c0Fyb3VuZCArIHgsXG4gICAgICAgICh5ICsgMCkgKiBudW1WZXJ0c0Fyb3VuZCArIHggKyAxLFxuICAgICAgICAoeSArIDEpICogbnVtVmVydHNBcm91bmQgKyB4ICsgMVxuICAgICAgKTtcbiAgICB9XG4gIH1cbiAgY29uc3QgX3Bvc2l0aW9ucyA9IG5ldyBGbG9hdDMyQXJyYXkocG9zaXRpb25zKTtcbiAgY29uc3QgX25vcm1hbHMgPSBuZXcgRmxvYXQzMkFycmF5KG5vcm1hbHMpO1xuICBjb25zdCBfdGV4Y29vcmRzID0gbmV3IEZsb2F0MzJBcnJheSh0ZXhjb29yZHMpO1xuICBjb25zdCBfaW5kaWNlcyA9IG5ldyBVaW50MTZBcnJheShpbmRpY2VzKTtcblxuICByZXR1cm4ge1xuICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgIFBPU0lUSU9OOiB7XG4gICAgICAgIGxvY2F0aW9uOiAwLFxuICAgICAgICBjb3VudDogcG9zaXRpb25zLmxlbmd0aCxcbiAgICAgICAgb2Zmc2V0OiAwLFxuICAgICAgICBzdHJpZGU6IDAsXG4gICAgICAgIG51bUNvbXBvbmVudHM6IDMsXG4gICAgICAgIHR5cGU6IDUxMjYsXG4gICAgICAgIGRhdGE6IF9wb3NpdGlvbnMsXG4gICAgICAgIGJ5dGVMZW5ndGg6IF9wb3NpdGlvbnMuYnl0ZUxlbmd0aCxcbiAgICAgIH0sXG4gICAgICBOT1JNQUw6IHtcbiAgICAgICAgbG9jYXRpb246IDEsXG4gICAgICAgIGNvdW50OiBub3JtYWxzLmxlbmd0aCxcbiAgICAgICAgbnVtQ29tcG9uZW50czogMyxcbiAgICAgICAgb2Zmc2V0OiAwLFxuICAgICAgICBzdHJpZGU6IDAsXG4gICAgICAgIHR5cGU6IDUxMjYsXG4gICAgICAgIGRhdGE6IF9ub3JtYWxzLFxuICAgICAgICBieXRlTGVuZ3RoOiBfbm9ybWFscy5ieXRlTGVuZ3RoLFxuICAgICAgfSxcbiAgICAgIFRFWENPT1JEXzA6IHtcbiAgICAgICAgZGF0YTogX3RleGNvb3JkcyxcbiAgICAgICAgY291bnQ6IF90ZXhjb29yZHMubGVuZ3RoLFxuICAgICAgICB0eXBlOiA1MTI2LFxuICAgICAgICBvZmZzZXQ6IDAsXG4gICAgICAgIHN0cmlkZTogMCxcbiAgICAgICAgYnl0ZUxlbmd0aDogX3RleGNvb3Jkcy5ieXRlTGVuZ3RoLFxuICAgICAgICBsb2NhdGlvbjogNCxcbiAgICAgICAgbnVtQ29tcG9uZW50czogMixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBjb21wb25lbnRUeXBlOiA1MTIzLFxuICAgIGluZGljZXM6IF9pbmRpY2VzLFxuICAgIG51bUVsZW1lbnRzOiBpbmRpY2VzLmxlbmd0aCxcbiAgICBtb2RlOiA0LFxuICB9O1xufTtcbmNvbnN0IGNyZWF0ZVRydW5jYXRlZENvbmUgPSAoXG4gIGJvdHRvbVJhZGl1cyxcbiAgdG9wUmFkaXVzLFxuICBoZWlnaHQsXG4gIHJhZGlhbFN1YmRpdmlzaW9ucyxcbiAgdmVydGljYWxTdWJkaXZpc2lvbnMsXG4gIG9wdF90b3BDYXAsXG4gIG9wdF9ib3R0b21DYXBcbikgPT4ge1xuICBpZiAocmFkaWFsU3ViZGl2aXNpb25zIDwgMykge1xuICAgIHRocm93IG5ldyBFcnJvcihcInJhZGlhbFN1YmRpdmlzaW9ucyBtdXN0IGJlIDMgb3IgZ3JlYXRlclwiKTtcbiAgfVxuXG4gIGlmICh2ZXJ0aWNhbFN1YmRpdmlzaW9ucyA8IDEpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJ2ZXJ0aWNhbFN1YmRpdmlzaW9ucyBtdXN0IGJlIDEgb3IgZ3JlYXRlclwiKTtcbiAgfVxuXG4gIGNvbnN0IHRvcENhcCA9IG9wdF90b3BDYXAgPT09IHVuZGVmaW5lZCA/IHRydWUgOiBvcHRfdG9wQ2FwO1xuICBjb25zdCBib3R0b21DYXAgPSBvcHRfYm90dG9tQ2FwID09PSB1bmRlZmluZWQgPyB0cnVlIDogb3B0X2JvdHRvbUNhcDtcblxuICBjb25zdCBleHRyYSA9ICh0b3BDYXAgPyAyIDogMCkgKyAoYm90dG9tQ2FwID8gMiA6IDApO1xuXG4gIGNvbnN0IG51bVZlcnRpY2VzID1cbiAgICAocmFkaWFsU3ViZGl2aXNpb25zICsgMSkgKiAodmVydGljYWxTdWJkaXZpc2lvbnMgKyAxICsgZXh0cmEpO1xuICBjb25zdCBwb3NpdGlvbnMgPSBbXTtcbiAgY29uc3Qgbm9ybWFscyA9IFtdO1xuICBjb25zdCB0ZXhjb29yZHMgPSBbXTtcbiAgY29uc3QgaW5kaWNlcyA9IFtdO1xuXG4gIGNvbnN0IHZlcnRzQXJvdW5kRWRnZSA9IHJhZGlhbFN1YmRpdmlzaW9ucyArIDE7XG5cbiAgY29uc3Qgc2xhbnQgPSBNYXRoLmF0YW4yKGJvdHRvbVJhZGl1cyAtIHRvcFJhZGl1cywgaGVpZ2h0KTtcbiAgY29uc3QgY29zU2xhbnQgPSBNYXRoLmNvcyhzbGFudCk7XG4gIGNvbnN0IHNpblNsYW50ID0gTWF0aC5zaW4oc2xhbnQpO1xuXG4gIGNvbnN0IHN0YXJ0ID0gdG9wQ2FwID8gLTIgOiAwO1xuICBjb25zdCBlbmQgPSB2ZXJ0aWNhbFN1YmRpdmlzaW9ucyArIChib3R0b21DYXAgPyAyIDogMCk7XG5cbiAgZm9yIChsZXQgeXkgPSBzdGFydDsgeXkgPD0gZW5kOyArK3l5KSB7XG4gICAgbGV0IHYgPSB5eSAvIHZlcnRpY2FsU3ViZGl2aXNpb25zO1xuICAgIGxldCB5ID0gaGVpZ2h0ICogdjtcbiAgICBsZXQgcmluZ1JhZGl1cztcbiAgICBpZiAoeXkgPCAwKSB7XG4gICAgICB5ID0gMDtcbiAgICAgIHYgPSAxO1xuICAgICAgcmluZ1JhZGl1cyA9IGJvdHRvbVJhZGl1cztcbiAgICB9IGVsc2UgaWYgKHl5ID4gdmVydGljYWxTdWJkaXZpc2lvbnMpIHtcbiAgICAgIHkgPSBoZWlnaHQ7XG4gICAgICB2ID0gMTtcbiAgICAgIHJpbmdSYWRpdXMgPSB0b3BSYWRpdXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJpbmdSYWRpdXMgPVxuICAgICAgICBib3R0b21SYWRpdXMgKyAodG9wUmFkaXVzIC0gYm90dG9tUmFkaXVzKSAqICh5eSAvIHZlcnRpY2FsU3ViZGl2aXNpb25zKTtcbiAgICB9XG4gICAgaWYgKHl5ID09PSAtMiB8fCB5eSA9PT0gdmVydGljYWxTdWJkaXZpc2lvbnMgKyAyKSB7XG4gICAgICByaW5nUmFkaXVzID0gMDtcbiAgICAgIHYgPSAwO1xuICAgIH1cbiAgICB5IC09IGhlaWdodCAvIDI7XG4gICAgZm9yIChsZXQgaWkgPSAwOyBpaSA8IHZlcnRzQXJvdW5kRWRnZTsgKytpaSkge1xuICAgICAgY29uc3Qgc2luID0gTWF0aC5zaW4oKGlpICogTWF0aC5QSSAqIDIpIC8gcmFkaWFsU3ViZGl2aXNpb25zKTtcbiAgICAgIGNvbnN0IGNvcyA9IE1hdGguY29zKChpaSAqIE1hdGguUEkgKiAyKSAvIHJhZGlhbFN1YmRpdmlzaW9ucyk7XG4gICAgICBwb3NpdGlvbnMucHVzaChzaW4gKiByaW5nUmFkaXVzLCB5LCBjb3MgKiByaW5nUmFkaXVzKTtcbiAgICAgIGlmICh5eSA8IDApIHtcbiAgICAgICAgbm9ybWFscy5wdXNoKDAsIC0xLCAwKTtcbiAgICAgIH0gZWxzZSBpZiAoeXkgPiB2ZXJ0aWNhbFN1YmRpdmlzaW9ucykge1xuICAgICAgICBub3JtYWxzLnB1c2goMCwgMSwgMCk7XG4gICAgICB9IGVsc2UgaWYgKHJpbmdSYWRpdXMgPT09IDAuMCkge1xuICAgICAgICBub3JtYWxzLnB1c2goMCwgMCwgMCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBub3JtYWxzLnB1c2goc2luICogY29zU2xhbnQsIHNpblNsYW50LCBjb3MgKiBjb3NTbGFudCk7XG4gICAgICB9XG4gICAgICB0ZXhjb29yZHMucHVzaChpaSAvIHJhZGlhbFN1YmRpdmlzaW9ucywgMSAtIHYpO1xuICAgIH1cbiAgfVxuXG4gIGZvciAobGV0IHl5ID0gMDsgeXkgPCB2ZXJ0aWNhbFN1YmRpdmlzaW9ucyArIGV4dHJhOyArK3l5KSB7XG4gICAgaWYgKFxuICAgICAgKHl5ID09PSAxICYmIHRvcENhcCkgfHxcbiAgICAgICh5eSA9PT0gdmVydGljYWxTdWJkaXZpc2lvbnMgKyBleHRyYSAtIDIgJiYgYm90dG9tQ2FwKVxuICAgICkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGZvciAobGV0IGlpID0gMDsgaWkgPCByYWRpYWxTdWJkaXZpc2lvbnM7ICsraWkpIHtcbiAgICAgIGluZGljZXMucHVzaChcbiAgICAgICAgdmVydHNBcm91bmRFZGdlICogKHl5ICsgMCkgKyAwICsgaWksXG4gICAgICAgIHZlcnRzQXJvdW5kRWRnZSAqICh5eSArIDApICsgMSArIGlpLFxuICAgICAgICB2ZXJ0c0Fyb3VuZEVkZ2UgKiAoeXkgKyAxKSArIDEgKyBpaVxuICAgICAgKTtcbiAgICAgIGluZGljZXMucHVzaChcbiAgICAgICAgdmVydHNBcm91bmRFZGdlICogKHl5ICsgMCkgKyAwICsgaWksXG4gICAgICAgIHZlcnRzQXJvdW5kRWRnZSAqICh5eSArIDEpICsgMSArIGlpLFxuICAgICAgICB2ZXJ0c0Fyb3VuZEVkZ2UgKiAoeXkgKyAxKSArIDAgKyBpaVxuICAgICAgKTtcbiAgICB9XG4gIH1cbiAgY29uc3QgX3Bvc2l0aW9ucyA9IG5ldyBGbG9hdDMyQXJyYXkocG9zaXRpb25zKTtcbiAgY29uc3QgX25vcm1hbHMgPSBuZXcgRmxvYXQzMkFycmF5KG5vcm1hbHMpO1xuICBjb25zdCBfdGV4Y29vcmRzID0gbmV3IEZsb2F0MzJBcnJheSh0ZXhjb29yZHMpO1xuICBjb25zdCBfaW5kaWNlcyA9IG5ldyBVaW50MTZBcnJheShpbmRpY2VzKTtcbiAgcmV0dXJuIHtcbiAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICBQT1NJVElPTjoge1xuICAgICAgICBsb2NhdGlvbjogMCxcbiAgICAgICAgY291bnQ6IHBvc2l0aW9ucy5sZW5ndGgsXG4gICAgICAgIG9mZnNldDogMCxcbiAgICAgICAgc3RyaWRlOiAwLFxuICAgICAgICBudW1Db21wb25lbnRzOiAzLFxuICAgICAgICB0eXBlOiA1MTI2LFxuICAgICAgICBkYXRhOiBfcG9zaXRpb25zLFxuICAgICAgICBieXRlTGVuZ3RoOiBfcG9zaXRpb25zLmJ5dGVMZW5ndGgsXG4gICAgICB9LFxuICAgICAgTk9STUFMOiB7XG4gICAgICAgIGxvY2F0aW9uOiAxLFxuICAgICAgICBjb3VudDogbm9ybWFscy5sZW5ndGgsXG4gICAgICAgIG51bUNvbXBvbmVudHM6IDMsXG4gICAgICAgIG9mZnNldDogMCxcbiAgICAgICAgc3RyaWRlOiAwLFxuICAgICAgICB0eXBlOiA1MTI2LFxuICAgICAgICBkYXRhOiBfbm9ybWFscyxcbiAgICAgICAgYnl0ZUxlbmd0aDogX25vcm1hbHMuYnl0ZUxlbmd0aCxcbiAgICAgIH0sXG4gICAgICBURVhDT09SRF8wOiB7XG4gICAgICAgIGRhdGE6IF90ZXhjb29yZHMsXG4gICAgICAgIGNvdW50OiBfdGV4Y29vcmRzLmxlbmd0aCxcbiAgICAgICAgdHlwZTogNTEyNixcbiAgICAgICAgb2Zmc2V0OiAwLFxuICAgICAgICBzdHJpZGU6IDAsXG4gICAgICAgIGJ5dGVMZW5ndGg6IF90ZXhjb29yZHMuYnl0ZUxlbmd0aCxcbiAgICAgICAgbG9jYXRpb246IDQsXG4gICAgICAgIG51bUNvbXBvbmVudHM6IDIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgY29tcG9uZW50VHlwZTogNTEyMyxcbiAgICBpbmRpY2VzOiBfaW5kaWNlcyxcbiAgICBudW1FbGVtZW50czogaW5kaWNlcy5sZW5ndGgsXG4gICAgbW9kZTogNCxcbiAgfTtcbn07XG5cbmV4cG9ydCB7IGNyZWF0ZUJveCwgY3JlYXRlQ29uZSwgY3JlYXRlQ2lyY2xlLCBjcmVhdGVTcGhlcmUsIGNyZWF0ZVRydW5jYXRlZENvbmV9O1xuIiwiZnVuY3Rpb24gZ2V0R0xUeXBlRm9yVHlwZWRBcnJheShnbCwgdHlwZWRBcnJheSkge1xuICBpZiAodHlwZWRBcnJheSBpbnN0YW5jZW9mIEludDhBcnJheSkge1xuICAgIHJldHVybiBnbC5CWVRFO1xuICB9IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgaWYgKHR5cGVkQXJyYXkgaW5zdGFuY2VvZiBVaW50OEFycmF5KSB7XG4gICAgcmV0dXJuIGdsLlVOU0lHTkVEX0JZVEU7XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICBpZiAodHlwZWRBcnJheSBpbnN0YW5jZW9mIFVpbnQ4Q2xhbXBlZEFycmF5KSB7XG4gICAgcmV0dXJuIGdsLlVOU0lHTkVEX0JZVEU7XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICBpZiAodHlwZWRBcnJheSBpbnN0YW5jZW9mIEludDE2QXJyYXkpIHtcbiAgICByZXR1cm4gZ2wuU0hPUlQ7XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICBpZiAodHlwZWRBcnJheSBpbnN0YW5jZW9mIFVpbnQxNkFycmF5KSB7XG4gICAgcmV0dXJuIGdsLlVOU0lHTkVEX1NIT1JUO1xuICB9IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgaWYgKHR5cGVkQXJyYXkgaW5zdGFuY2VvZiBJbnQzMkFycmF5KSB7XG4gICAgcmV0dXJuIGdsLklOVDtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gIGlmICh0eXBlZEFycmF5IGluc3RhbmNlb2YgVWludDMyQXJyYXkpIHtcbiAgICByZXR1cm4gZ2wuVU5TSUdORURfSU5UO1xuICB9IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgaWYgKHR5cGVkQXJyYXkgaW5zdGFuY2VvZiBGbG9hdDMyQXJyYXkpIHtcbiAgICByZXR1cm4gZ2wuRkxPQVQ7XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICByZXR1cm4gZmFsc2U7XG59XG5mdW5jdGlvbiBleHBhbmRlZFR5cGVkQXJyYXkoYXJyYXkpIHtcbiAgbGV0IGN1cnNvciA9IDA7XG4gIGFycmF5LnB1c2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgZm9yIChsZXQgaWkgPSAwOyBpaSA8IGFyZ3VtZW50cy5sZW5ndGg7ICsraWkpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gYXJndW1lbnRzW2lpXTtcblxuICAgICAgaWYgKFxuICAgICAgICB2YWx1ZSBpbnN0YW5jZW9mIEFycmF5IHx8XG4gICAgICAgICh2YWx1ZS5idWZmZXIgJiYgdmFsdWUuYnVmZmVyIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpXG4gICAgICApIHtcbiAgICAgICAgZm9yIChsZXQgamogPSAwOyBqaiA8IHZhbHVlLmxlbmd0aDsgKytqaikge1xuICAgICAgICAgIGFycmF5W2N1cnNvcisrXSA9IHZhbHVlW2pqXTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXJyYXlbY3Vyc29yKytdID0gdmFsdWU7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBhcnJheTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVW5pZm9ybVNldHRlcnMoZ2wsIHByb2dyYW0pIHtcbiAgY29uc3QgY3JlYXRlVGV4dHVyZVNldHRlciA9IChwcm9ncmFtLCB1bmlmb3JtSW5mbykgPT4ge1xuICAgIGNvbnN0IGxvY2F0aW9uID0gZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIHVuaWZvcm1JbmZvLm5hbWUpO1xuXG4gICAgcmV0dXJuICh0ZXhCbG9ja051bSkgPT4ge1xuICAgICAgZ2wudW5pZm9ybTFpKGxvY2F0aW9uLCB0ZXhCbG9ja051bSk7XG4gICAgfTtcbiAgfTtcbiAgZnVuY3Rpb24gY3JlYXRlVW5pZm9ybVNldHRlcihwcm9ncmFtLCB1bmlmb3JtSW5mbykge1xuICAgIGNvbnN0IGxvY2F0aW9uID0gZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIHVuaWZvcm1JbmZvLm5hbWUpO1xuXG4gICAgY29uc3QgdHlwZSA9IHVuaWZvcm1JbmZvLnR5cGU7XG5cbiAgICBjb25zdCBpc0FycmF5ID1cbiAgICAgIHVuaWZvcm1JbmZvLnNpemUgPiAxICYmIHVuaWZvcm1JbmZvLm5hbWUuc3Vic3RyKC0zKSA9PT0gXCJbMF1cIjtcblxuICAgIGlmICh0eXBlID09PSBnbC5GTE9BVCAmJiBpc0FycmF5KSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgZ2wudW5pZm9ybTFmdihsb2NhdGlvbiwgdik7XG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAodHlwZSA9PT0gZ2wuRkxPQVQpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgICAgICBnbC51bmlmb3JtMWYobG9jYXRpb24sIHYpO1xuICAgICAgfTtcbiAgICB9XG4gICAgaWYgKHR5cGUgPT09IGdsLkZMT0FUX1ZFQzIpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgICAgICBnbC51bmlmb3JtMmZ2KGxvY2F0aW9uLCB2KTtcbiAgICAgIH07XG4gICAgfVxuICAgIGlmICh0eXBlID09PSBnbC5GTE9BVF9WRUMzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgZ2wudW5pZm9ybTNmdihsb2NhdGlvbiwgdik7XG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAodHlwZSA9PT0gZ2wuRkxPQVRfVkVDNCkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIGdsLnVuaWZvcm00ZnYobG9jYXRpb24sIHYpO1xuICAgICAgfTtcbiAgICB9XG4gICAgaWYgKHR5cGUgPT09IGdsLklOVCAmJiBpc0FycmF5KSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgZ2wudW5pZm9ybTFpdihsb2NhdGlvbiwgdik7XG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAodHlwZSA9PT0gZ2wuSU5UKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgZ2wudW5pZm9ybTFpKGxvY2F0aW9uLCB2KTtcbiAgICAgIH07XG4gICAgfVxuICAgIGlmICh0eXBlID09PSBnbC5JTlRfVkVDMikge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIGdsLnVuaWZvcm0yaXYobG9jYXRpb24sIHYpO1xuICAgICAgfTtcbiAgICB9XG4gICAgaWYgKHR5cGUgPT09IGdsLklOVF9WRUMzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgZ2wudW5pZm9ybTNpdihsb2NhdGlvbiwgdik7XG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAodHlwZSA9PT0gZ2wuSU5UX1ZFQzQpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgICAgICBnbC51bmlmb3JtNGl2KGxvY2F0aW9uLCB2KTtcbiAgICAgIH07XG4gICAgfVxuICAgIGlmICh0eXBlID09PSBnbC5CT09MKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgZ2wudW5pZm9ybTFpdihsb2NhdGlvbiwgdik7XG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAodHlwZSA9PT0gZ2wuQk9PTF9WRUMyKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgZ2wudW5pZm9ybTJpdihsb2NhdGlvbiwgdik7XG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAodHlwZSA9PT0gZ2wuQk9PTF9WRUMzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgZ2wudW5pZm9ybTNpdihsb2NhdGlvbiwgdik7XG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAodHlwZSA9PT0gZ2wuQk9PTF9WRUM0KSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgZ2wudW5pZm9ybTRpdihsb2NhdGlvbiwgdik7XG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAodHlwZSA9PT0gZ2wuRkxPQVRfTUFUMikge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIGdsLnVuaWZvcm1NYXRyaXgyZnYobG9jYXRpb24sIGZhbHNlLCB2KTtcbiAgICAgIH07XG4gICAgfVxuICAgIGlmICh0eXBlID09PSBnbC5GTE9BVF9NQVQzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgZ2wudW5pZm9ybU1hdHJpeDNmdihsb2NhdGlvbiwgZmFsc2UsIHYpO1xuICAgICAgfTtcbiAgICB9XG4gICAgaWYgKHR5cGUgPT09IGdsLkZMT0FUX01BVDQpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgICAgICBnbC51bmlmb3JtTWF0cml4NGZ2KGxvY2F0aW9uLCBmYWxzZSwgdik7XG4gICAgICB9O1xuICAgIH1cbiAgfVxuICBjb25zdCB1bmlmb3JtU2V0dGVycyA9IHt9O1xuICBjb25zdCB0ZXh0dXJlU2V0dGVycyA9IHt9O1xuICBjb25zdCBudW1Vbmlmb3JtcyA9IGdsLmdldFByb2dyYW1QYXJhbWV0ZXIocHJvZ3JhbSwgZ2wuQUNUSVZFX1VOSUZPUk1TKTtcblxuICBmb3IgKGxldCBpaSA9IDA7IGlpIDwgbnVtVW5pZm9ybXM7ICsraWkpIHtcbiAgICBjb25zdCB1bmlmb3JtSW5mbyA9IGdsLmdldEFjdGl2ZVVuaWZvcm0ocHJvZ3JhbSwgaWkpO1xuICAgIGlmICghdW5pZm9ybUluZm8pIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBsZXQgbmFtZSA9IHVuaWZvcm1JbmZvLm5hbWU7XG4gICAgaWYgKHVuaWZvcm1JbmZvLnR5cGUgPT09IGdsLlNBTVBMRVJfMkQpIHtcbiAgICAgIHRleHR1cmVTZXR0ZXJzW25hbWVdID0gY3JlYXRlVGV4dHVyZVNldHRlcihwcm9ncmFtLCB1bmlmb3JtSW5mbyk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAobmFtZS5zdWJzdHIoLTMpID09PSBcIlswXVwiKSB7XG4gICAgICBuYW1lID0gbmFtZS5zdWJzdHIoMCwgbmFtZS5sZW5ndGggLSAzKTtcbiAgICB9XG4gICAgaWYgKHVuaWZvcm1JbmZvLnNpemUgPiAxKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHVuaWZvcm1JbmZvLnNpemU7IGkrKykge1xuICAgICAgICBjb25zdCBvYmogPSB7XG4gICAgICAgICAgc2l6ZTogdW5pZm9ybUluZm8uc2l6ZSxcbiAgICAgICAgICB0eXBlOiB1bmlmb3JtSW5mby50eXBlLFxuICAgICAgICAgIG5hbWU6IG5hbWUgKyBgWyR7aX1dYCxcbiAgICAgICAgfTtcbiAgICAgICAgdW5pZm9ybVNldHRlcnNbbmFtZSArIGBbJHtpfV1gXSA9IGNyZWF0ZVVuaWZvcm1TZXR0ZXIocHJvZ3JhbSwgb2JqKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc2V0dGVyID0gY3JlYXRlVW5pZm9ybVNldHRlcihwcm9ncmFtLCB1bmlmb3JtSW5mbyk7XG4gICAgICB1bmlmb3JtU2V0dGVyc1tuYW1lXSA9IHNldHRlcjtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHsgdW5pZm9ybVNldHRlcnMsIHRleHR1cmVTZXR0ZXJzIH07XG59XG5cbmNsYXNzIFByb2dyYW1JbmZvIHtcbiAgY29uc3RydWN0b3IodnMsIGZzKSB7XG4gICAgdGhpcy52cyA9IHZzO1xuICAgIHRoaXMuZnMgPSBmcztcbiAgICB0aGlzLlZBTyA9IG51bGw7XG4gICAgdGhpcy51bmlmb3JtU2V0dGVycyA9IG51bGw7XG4gICAgdGhpcy52ZXJ0ZXhTaGFkZXIgPSBudWxsO1xuICAgIHRoaXMuZnJhZ21lbnRTaGFkZXIgPSBudWxsO1xuICAgIHRoaXMucHJvZ3JhbSA9IG51bGw7XG4gICAgdGhpcy5nbCA9IG51bGw7XG4gIH1cbiAgc2V0Q29udGV4dChnbENvbnRleHRXcmFwcGVyKSB7XG4gICAgdGhpcy5jb250ZXh0ID0gZ2xDb250ZXh0V3JhcHBlcjtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBjcmVhdGVVbmlmb3JtU2V0dGVycygpIHtcbiAgICBjb25zdCB7IGdsIH0gPSB0aGlzLmNvbnRleHQ7XG4gICAgY29uc3QgeyB1bmlmb3JtU2V0dGVycywgdGV4dHVyZVNldHRlcnMgfSA9IGNyZWF0ZVVuaWZvcm1TZXR0ZXJzKFxuICAgICAgZ2wsXG4gICAgICB0aGlzLnByb2dyYW1cbiAgICApO1xuICAgIHRoaXMudGV4dHVyZVNldHRlcnMgPSB0ZXh0dXJlU2V0dGVycztcbiAgICB0aGlzLnVuaWZvcm1TZXR0ZXJzID0gdW5pZm9ybVNldHRlcnM7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgY29tcGlsZVNoYWRlcnMoKSB7XG4gICAgY29uc3QgeyBnbCB9ID0gdGhpcy5jb250ZXh0O1xuICAgIHRoaXMudmVydGV4U2hhZGVyID0gZ2wuY3JlYXRlU2hhZGVyKGdsLlZFUlRFWF9TSEFERVIpO1xuICAgIGdsLnNoYWRlclNvdXJjZSh0aGlzLnZlcnRleFNoYWRlciwgdGhpcy52cyk7XG4gICAgZ2wuY29tcGlsZVNoYWRlcih0aGlzLnZlcnRleFNoYWRlcik7XG4gICAgaWYgKCFnbC5nZXRTaGFkZXJQYXJhbWV0ZXIodGhpcy52ZXJ0ZXhTaGFkZXIsIGdsLkNPTVBJTEVfU1RBVFVTKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGdsLmdldFNoYWRlckluZm9Mb2codGhpcy52ZXJ0ZXhTaGFkZXIpKTtcbiAgICB9XG5cbiAgICB0aGlzLmZyYWdtZW50U2hhZGVyID0gZ2wuY3JlYXRlU2hhZGVyKGdsLkZSQUdNRU5UX1NIQURFUik7XG4gICAgZ2wuc2hhZGVyU291cmNlKHRoaXMuZnJhZ21lbnRTaGFkZXIsIHRoaXMuZnMpO1xuICAgIGdsLmNvbXBpbGVTaGFkZXIodGhpcy5mcmFnbWVudFNoYWRlcik7XG4gICAgaWYgKCFnbC5nZXRTaGFkZXJQYXJhbWV0ZXIodGhpcy5mcmFnbWVudFNoYWRlciwgZ2wuQ09NUElMRV9TVEFUVVMpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoZ2wuZ2V0U2hhZGVySW5mb0xvZyh0aGlzLmZyYWdtZW50U2hhZGVyKSk7XG4gICAgfVxuXG4gICAgdGhpcy5wcm9ncmFtID0gZ2wuY3JlYXRlUHJvZ3JhbSgpO1xuICAgIGdsLmF0dGFjaFNoYWRlcih0aGlzLnByb2dyYW0sIHRoaXMudmVydGV4U2hhZGVyKTtcbiAgICBnbC5hdHRhY2hTaGFkZXIodGhpcy5wcm9ncmFtLCB0aGlzLmZyYWdtZW50U2hhZGVyKTtcbiAgICBnbC5saW5rUHJvZ3JhbSh0aGlzLnByb2dyYW0pO1xuICAgIGlmICghZ2wuZ2V0UHJvZ3JhbVBhcmFtZXRlcih0aGlzLnByb2dyYW0sIGdsLkxJTktfU1RBVFVTKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGdsLmdldFByb2dyYW1JbmZvTG9nKHRoaXMucHJvZ3JhbSkpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBzZXRVbmlmb3Jtcyh1bmlmb3Jtcykge1xuICAgIHRoaXMuY29udGV4dC51c2VQcm9ncmFtSW5mbyh0aGlzKTtcbiAgICBPYmplY3Qua2V5cyh1bmlmb3JtcykuZm9yRWFjaCgobmFtZSkgPT4ge1xuICAgICAgY29uc3Qgc2V0dGVyID0gdGhpcy51bmlmb3JtU2V0dGVyc1tuYW1lXTtcbiAgICAgIGlmIChzZXR0ZXIpIHNldHRlcih1bmlmb3Jtc1tuYW1lXSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgc2V0VGV4dHVyZVVuaWZvcm1Vbml0KG5hbWUsIHVuaXQpIHtcbiAgICB0aGlzLmNvbnRleHQudXNlUHJvZ3JhbUluZm8odGhpcyk7XG4gICAgY29uc3Qgc2V0dGVyID0gdGhpcy50ZXh0dXJlU2V0dGVyc1tuYW1lXTtcbiAgICBpZiAoc2V0dGVyKSBzZXR0ZXIodW5pdCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cblxuZXhwb3J0IHsgZXhwYW5kZWRUeXBlZEFycmF5LCBQcm9ncmFtSW5mbywgZ2V0R0xUeXBlRm9yVHlwZWRBcnJheSB9O1xuIiwiaW1wb3J0IHZlcnQgZnJvbSAnLi92ZXJ0Lmdsc2wnXG5pbXBvcnQgZnJhZyBmcm9tICcuL2ZyYWcuZ2xzbCdcblxuZXhwb3J0IGRlZmF1bHQge3ZlcnQsIGZyYWd9IiwiaW1wb3J0IGRlZmF1bHRTaGFkZXJzIGZyb20gXCIuL2RlZmF1bHRcIjtcbmltcG9ydCBwb2ludExpZ2h0U2hhZGVycyBmcm9tIFwiLi9wb2ludExpZ2h0XCI7XG5cbmV4cG9ydCB7ZGVmYXVsdFNoYWRlcnMsIHBvaW50TGlnaHRTaGFkZXJzfSIsImltcG9ydCB2ZXJ0IGZyb20gJy4vdmVydC5nbHNsJ1xuaW1wb3J0IGZyYWcgZnJvbSAnLi9mcmFnLmdsc2wnXG5cbmV4cG9ydCBkZWZhdWx0IHt2ZXJ0LCBmcmFnfSIsImNvbnN0IHNldENhbnZhc1NpemUgPSAoY3R4LCB3aWR0aCwgaGVpZ2h0KSA9PiB7XG4gIGN0eC5jYW52YXMud2lkdGggPSB3aWR0aDtcbiAgY3R4LmNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG59O1xuXG5jb25zdCBtYWtlVGV4dHVyZSA9IChnbCwgY3R4KSA9PiB7XG4gIGNvbnN0IHRleCA9IGdsLmNyZWF0ZVRleHR1cmUoKTtcbiAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgdGV4KTtcblxuICBnbC50ZXhJbWFnZTJEKFxuICAgIGdsLlRFWFRVUkVfMkQsXG4gICAgMCxcbiAgICBnbC5SR0JBLFxuICAgIGdsLlJHQkEsXG4gICAgZ2wuVU5TSUdORURfQllURSxcbiAgICBjdHguY2FudmFzXG4gICk7XG4gIHJldHVybiB0ZXg7XG59O1xuY29uc3QgbWFrZVN0cmlwZVRleHR1cmUgPSAoZ2wsIG9wdGlvbnMpID0+IHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHZhciB3aWR0aCA9IG9wdGlvbnMud2lkdGggfHwgNDtcbiAgdmFyIGhlaWdodCA9IG9wdGlvbnMuaGVpZ2h0IHx8IDQ7XG4gIHZhciBjb2xvcjEgPSBvcHRpb25zLmNvbG9yMSB8fCBcInJnYmEoMSwwLDAsMC4xKVwiO1xuICB2YXIgY29sb3IyID0gb3B0aW9ucy5jb2xvcjIgfHwgXCJyZ2JhKDEsMSwxLDAuNSlcIjtcbiAgY29uc3QgY3R4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKS5nZXRDb250ZXh0KFwiMmRcIik7XG4gIHNldENhbnZhc1NpemUoY3R4LCB3aWR0aCwgaGVpZ2h0KTtcblxuICBjdHguZmlsbFN0eWxlID0gY29sb3IxO1xuICBjdHguZmlsbFJlY3QoMCwgMCwgd2lkdGgsIGhlaWdodCk7XG4gIGN0eC5maWxsU3R5bGUgPSBjb2xvcjI7XG4gIGN0eC5maWxsUmVjdCgwLCAwLCB3aWR0aCwgaGVpZ2h0IC8gMik7XG5cbiAgcmV0dXJuIG1ha2VUZXh0dXJlKGdsLCBjdHgpO1xufTtcbmNvbnN0IG1ha2VTdHJpcGVJbWcgPSAob3B0aW9ucykgPT4ge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgdmFyIHdpZHRoID0gb3B0aW9ucy53aWR0aCB8fCA0O1xuICB2YXIgaGVpZ2h0ID0gb3B0aW9ucy5oZWlnaHQgfHwgNDtcbiAgdmFyIGNvbG9yMSA9IG9wdGlvbnMuY29sb3IxIHx8IFwicmdiYSgxLDAsMCwwLjUpXCI7XG4gIHZhciBjb2xvcjIgPSBvcHRpb25zLmNvbG9yMiB8fCBcInJnYmEoMCwwLDEsMSlcIjtcbiAgY29uc3QgY3R4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKS5nZXRDb250ZXh0KFwiMmRcIik7XG4gIHNldENhbnZhc1NpemUoY3R4LCB3aWR0aCwgaGVpZ2h0KTtcblxuICBjdHguZmlsbFN0eWxlID0gY29sb3IxO1xuICBjdHguZmlsbFJlY3QoMCwgMCwgd2lkdGgsIGhlaWdodCk7XG4gIGN0eC5maWxsU3R5bGUgPSBjb2xvcjI7XG4gIGN0eC5maWxsUmVjdCgwLCAwLCB3aWR0aCwgaGVpZ2h0IC8gMik7XG5cbiAgcmV0dXJuIGN0eC5jYW52YXM7XG59O1xuY29uc3QgbWFrZUltZ0Zyb21TdmdYbWwgPSAoeG1sLCBvcHRpb25zID0ge30pID0+IHtcbiAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgdmFyIHN2ZzY0ID0gYnRvYSh4bWwpO1xuICB2YXIgYjY0U3RhcnQgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsXCI7XG4gIHZhciBpbWFnZTY0ID0gYjY0U3RhcnQgKyBzdmc2NDtcbiAgaW1nLnNyYyA9IGltYWdlNjQ7XG5cbiAgY29uc3Qgd2lkdGggPSBvcHRpb25zLndpZHRoIHx8IDEwMDtcbiAgY29uc3QgaGVpZ2h0ID0gb3B0aW9ucy5oZWlnaHQgfHwgMTAwO1xuICBjb25zdCB4ID0gb3B0aW9ucy54IHx8IDE7XG4gIGNvbnN0IHkgPSBvcHRpb25zLnkgfHwgNTA7XG5cbiAgY29uc3QgY3R4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKS5nZXRDb250ZXh0KFwiMmRcIik7XG4gIHNldENhbnZhc1NpemUoY3R4LCB3aWR0aCwgaGVpZ2h0KTtcblxuICBjdHguZHJhd0ltYWdlKGltZywgeCwgeSwgd2lkdGgsIGhlaWdodCk7XG4gIGN0eC5maWxsU3R5bGUgPSBcInJnYmEoMCwwLDAsMSlcIjtcbiAgY3R4LmZpbGxSZWN0KDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xuICByZXR1cm4gY3R4LmltZztcbn07XG5jb25zdCBzZXRUZXh0dXJlVW5pdHMgPSAoZ2wsIHRleHR1cmUsIHVuaXROdW0pID0+IHtcbiAgZ2wuYWN0aXZlVGV4dHVyZShnbC5URVhUVVJFMCArIHVuaXROdW0pO1xuICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCB0ZXh0dXJlKTtcbn07XG5cbmNsYXNzIFRleHR1cmVJbmZvIHtcbiAgc3RhdGljIG1ha2VJbWdGcm9tU3ZnWG1sID0gbWFrZUltZ0Zyb21TdmdYbWw7XG4gIGNvbnN0cnVjdG9yKGdsKSB7XG4gICAgdGhpcy50ZXh0dXJlID0gZ2wuY3JlYXRlVGV4dHVyZSgpO1xuICAgIHRoaXMuZ2wgPSBnbFxuICB9XG4gIGZyb21JbWFnZShpbWFnZSl7XG4gICAgY29uc3Qge2dsfSA9IHRoaXNcbiAgICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCB0aGlzLnRleHR1cmUpO1xuICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX1dSQVBfUywgZ2wuQ0xBTVBfVE9fRURHRSk7XG4gICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfV1JBUF9ULCBnbC5DTEFNUF9UT19FREdFKTtcbiAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9NSU5fRklMVEVSLCBnbC5ORUFSRVNUKTtcbiAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9NQUdfRklMVEVSLCBnbC5ORUFSRVNUKTtcbiAgICAgIGdsLnRleEltYWdlMkQoXG4gICAgICAgIGdsLlRFWFRVUkVfMkQsXG4gICAgICAgIDAsXG4gICAgICAgIGdsLlJHQkEsXG4gICAgICAgIGdsLlJHQkEsXG4gICAgICAgIGdsLlVOU0lHTkVEX0JZVEUsXG4gICAgICAgIGltYWdlXG4gICAgICApO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIGdldFRleHR1cmUoKXtcbiAgICByZXR1cm4gdGhpcy50ZXh0dXJlXG4gIH1cbn1cbmV4cG9ydCB7IG1ha2VJbWdGcm9tU3ZnWG1sLCBtYWtlU3RyaXBlSW1nLCBUZXh0dXJlSW5mb307XG4iLCJjb25zdCBBQUJCID0gcmVxdWlyZSgnLi9zcmMvYWFiYicpXG5jb25zdCBtMyA9IHJlcXVpcmUoJy4vc3JjL20zJylcbmNvbnN0IG00ID0gcmVxdWlyZSgnLi9zcmMvbTQnKVxuY29uc3QgdmVjMyA9IHJlcXVpcmUoJy4vc3JjL3ZlYzMnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBBQUJCLCBtMywgbTQsIHZlYzNcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IGNsYXNzIEFBQkIge1xuICBjb25zdHJ1Y3RvcihtaW4sIG1heCkge1xuICAgIHRoaXMubWluID0gbWluO1xuICAgIHRoaXMubWF4ID0gbWF4O1xuICB9XG59O1xuIiwiY29uc3QgbTMgPSB7XG4gICAgbXVsdGlwbHkgOiBmdW5jdGlvbihiLCBhKSB7XG4gICAgICAgIHZhciBhMDAgPSBhWzAgKiAzICsgMF07XG4gICAgICAgIHZhciBhMDEgPSBhWzAgKiAzICsgMV07XG4gICAgICAgIHZhciBhMDIgPSBhWzAgKiAzICsgMl07XG4gICAgICAgIHZhciBhMTAgPSBhWzEgKiAzICsgMF07XG4gICAgICAgIHZhciBhMTEgPSBhWzEgKiAzICsgMV07XG4gICAgICAgIHZhciBhMTIgPSBhWzEgKiAzICsgMl07XG4gICAgICAgIHZhciBhMjAgPSBhWzIgKiAzICsgMF07XG4gICAgICAgIHZhciBhMjEgPSBhWzIgKiAzICsgMV07XG4gICAgICAgIHZhciBhMjIgPSBhWzIgKiAzICsgMl07XG4gICAgICAgIHZhciBiMDAgPSBiWzAgKiAzICsgMF07XG4gICAgICAgIHZhciBiMDEgPSBiWzAgKiAzICsgMV07XG4gICAgICAgIHZhciBiMDIgPSBiWzAgKiAzICsgMl07XG4gICAgICAgIHZhciBiMTAgPSBiWzEgKiAzICsgMF07XG4gICAgICAgIHZhciBiMTEgPSBiWzEgKiAzICsgMV07XG4gICAgICAgIHZhciBiMTIgPSBiWzEgKiAzICsgMl07XG4gICAgICAgIHZhciBiMjAgPSBiWzIgKiAzICsgMF07XG4gICAgICAgIHZhciBiMjEgPSBiWzIgKiAzICsgMV07XG4gICAgICAgIHZhciBiMjIgPSBiWzIgKiAzICsgMl07XG4gICAgXG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgYjAwICogYTAwICsgYjAxICogYTEwICsgYjAyICogYTIwLFxuICAgICAgICAgIGIwMCAqIGEwMSArIGIwMSAqIGExMSArIGIwMiAqIGEyMSxcbiAgICAgICAgICBiMDAgKiBhMDIgKyBiMDEgKiBhMTIgKyBiMDIgKiBhMjIsXG4gICAgICAgICAgYjEwICogYTAwICsgYjExICogYTEwICsgYjEyICogYTIwLFxuICAgICAgICAgIGIxMCAqIGEwMSArIGIxMSAqIGExMSArIGIxMiAqIGEyMSxcbiAgICAgICAgICBiMTAgKiBhMDIgKyBiMTEgKiBhMTIgKyBiMTIgKiBhMjIsXG4gICAgICAgICAgYjIwICogYTAwICsgYjIxICogYTEwICsgYjIyICogYTIwLFxuICAgICAgICAgIGIyMCAqIGEwMSArIGIyMSAqIGExMSArIGIyMiAqIGEyMSxcbiAgICAgICAgICBiMjAgKiBhMDIgKyBiMjEgKiBhMTIgKyBiMjIgKiBhMjIsXG4gICAgICAgIF07XG4gICAgICB9LFxuICAgICAgeFJvdGF0aW9uOiBmdW5jdGlvbihhbmdsZUluUmFkaWFucykge1xuICAgICAgICB2YXIgYyA9IE1hdGguY29zKGFuZ2xlSW5SYWRpYW5zKTtcbiAgICAgICAgdmFyIHMgPSBNYXRoLnNpbihhbmdsZUluUmFkaWFucyk7XG4gICAgIFxuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgIDEsIDAsIDAsIFxuICAgICAgICAgIDAsIGMsIHMsIFxuICAgICAgICAgIDAsIC1zLCBjXG4gICAgICAgIF07XG4gICAgICB9LFxuICAgICBcbiAgICAgIHlSb3RhdGlvbjogZnVuY3Rpb24oYW5nbGVJblJhZGlhbnMpIHtcbiAgICAgICAgdmFyIGMgPSBNYXRoLmNvcyhhbmdsZUluUmFkaWFucyk7XG4gICAgICAgIHZhciBzID0gTWF0aC5zaW4oYW5nbGVJblJhZGlhbnMpO1xuICAgICBcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICBjLCAwLCAtcywgXG4gICAgICAgICAgMCwgMSwgMCwgXG4gICAgICAgICAgcywgMCwgY1xuICAgICAgICBdO1xuICAgICAgfSxcbiAgICAgXG4gICAgICB6Um90YXRpb246IGZ1bmN0aW9uKGFuZ2xlSW5SYWRpYW5zKSB7XG4gICAgICAgIHZhciBjID0gTWF0aC5jb3MoYW5nbGVJblJhZGlhbnMpO1xuICAgICAgICB2YXIgcyA9IE1hdGguc2luKGFuZ2xlSW5SYWRpYW5zKTtcbiAgICAgXG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgIGMsIHMsIDAsIFxuICAgICAgICAgIC1zLCBjLCAwLFxuICAgICAgICAgICAwLCAwLCAxXG4gICAgICAgIF07XG4gICAgICB9LFxuICAgICAgbTNUb200IDogZnVuY3Rpb24obSl7XG4gICAgICAgIGNvbnN0IGRzdCA9IG5ldyBGbG9hdDMyQXJyYXkoMTYpXG4gICAgICAgIGRzdFsgMF0gPSBtWzBdXG4gICAgICAgIGRzdFsgMV0gPSBtWzFdXG4gICAgICAgIGRzdFsgMl0gPSBtWzJdXG4gICAgICAgIGRzdFsgM10gPSAwXG4gICAgICAgIGRzdFsgNF0gPSBtWzNdXG4gICAgICAgIGRzdFsgNV0gPSBtWzRdXG4gICAgICAgIGRzdFsgNl0gPSBtWzVdXG4gICAgICAgIGRzdFsgN10gPSAwXG4gICAgICAgIGRzdFsgOF0gPSBtWzZdXG4gICAgICAgIGRzdFsgOV0gPSBtWzddXG4gICAgICAgIGRzdFsxMF0gPSBtWzhdXG4gICAgICAgIGRzdFsxMV0gPSAwXG4gICAgICAgIGRzdFsxMl0gPSAwXG4gICAgICAgIGRzdFsxM10gPSAwXG4gICAgICAgIGRzdFsxNF0gPSAwXG4gICAgICAgIGRzdFsxNV0gPSAxXG4gICAgICAgIHJldHVybiBkc3RcbiAgICAgIH0sXG4gICAgICB4Um90YXRlOiBmdW5jdGlvbihtLCBhbmdsZUluUmFkaWFucykge1xuICAgICAgICByZXR1cm4gbTMubXVsdGlwbHkobSwgbTMueFJvdGF0aW9uKGFuZ2xlSW5SYWRpYW5zKSk7XG4gICAgICB9LFxuICAgICBcbiAgICAgIHlSb3RhdGU6IGZ1bmN0aW9uKG0sIGFuZ2xlSW5SYWRpYW5zKSB7XG4gICAgICAgIHJldHVybiBtMy5tdWx0aXBseShtLCBtMy55Um90YXRpb24oYW5nbGVJblJhZGlhbnMpKTtcbiAgICAgIH0sXG4gICAgIFxuICAgICAgelJvdGF0ZTogZnVuY3Rpb24obSwgYW5nbGVJblJhZGlhbnMpIHtcbiAgICAgICAgcmV0dXJuIG0zLm11bHRpcGx5KG0sIG0zLnpSb3RhdGlvbihhbmdsZUluUmFkaWFucykpO1xuICAgICAgfSxcbiAgICAgIHRyYW5zZm9ybVBvaW50IDogZnVuY3Rpb24obSwgdiwgZHN0KSB7XG4gICAgICAgIGRzdCA9IGRzdCB8fCBuZXcgRmxvYXQzMkFycmF5KDMpO1xuICAgICAgICB2YXIgdjAgPSB2WzBdO1xuICAgICAgICB2YXIgdjEgPSB2WzFdO1xuICAgICAgICB2YXIgdjIgPSB2WzJdO1xuICAgICAgICBcbiAgICBcbiAgICAgICAgZHN0WzBdID0gKHYwICogbVswICogMyArIDBdICsgdjEgKiBtWzEgKiAzICsgMF0gKyB2MiAqIG1bMiAqIDMgKyAwXSAgKSBcbiAgICAgICAgZHN0WzFdID0gKHYwICogbVswICogMyArIDFdICsgdjEgKiBtWzEgKiAzICsgMV0gKyB2MiAqIG1bMiAqIDMgKyAxXSAgKSBcbiAgICAgICAgZHN0WzJdID0gKHYwICogbVswICogMyArIDJdICsgdjEgKiBtWzEgKiAzICsgMl0gKyB2MiAqIG1bMiAqIDMgKyAyXSApIFxuICAgIFxuICAgICAgICByZXR1cm4gZHN0O1xuICAgICAgfSxcbiAgICAgIGlkZW50aXR5IDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgMSwgMCwgMCxcbiAgICAgICAgICAwLCAxLCAwLFxuICAgICAgICAgIDAsIDAsIDEsXG4gICAgICAgIF07XG4gICAgICB9LFxuICAgICAgdHJhbnNwb3NlIDogZnVuY3Rpb24obSl7XG4gICAgICAgICBcbiAgICAgICAgICBkc3QgPSBuZXcgRmxvYXQzMkFycmF5KDkpXG4gICAgICAgICAgZHN0WzBdID0gbVswXVxuICAgICAgICAgIGRzdFsxXSA9IG1bM11cbiAgICAgICAgICBkc3RbMl0gPSBtWzZdXG4gICAgICAgICAgZHN0WzNdID0gbVsxXVxuICAgICAgICAgIGRzdFs0XSA9IG1bNF1cbiAgICAgICAgICBkc3RbNV0gPSBtWzddXG4gICAgICAgICAgZHN0WzZdID0gbVsyXVxuICAgICAgICAgIGRzdFs3XSA9IG1bNV1cbiAgICAgICAgICBkc3RbOF0gPSBtWzhdXG4gICAgICAgICAgcmV0dXJuIGRzdFxuICAgICAgfSxcbiAgICAgIHNjYWxpbmcgOiBmdW5jdGlvbihzeCxzeSxzeil7XG4gICAgICAgIHJldHVybiBuZXcgRmxvYXQzMkFycmF5KFtcbiAgICAgICAgICAgICAgICAgICAgc3gsIDAsIDAsXG4gICAgICAgICAgICAgICAgICAgIDAsIHN5LCAwLFxuICAgICAgICAgICAgICAgICAgICAwLCAgMCwgc3pcbiAgICAgICAgICAgICAgXSlcbiAgICAgIH0sXG4gICAgICBzY2FsZSA6IGZ1bmN0aW9uKG0sIHN4LHN5LHN6KXtcbiAgICAgICAgcmV0dXJuIG0zLm11bHRpcGx5KG0sIG0zLnNjYWxpbmcoc3gsIHN5LCBzeikpXG4gICAgICB9LFxuICAgICAgLypcbiAgICAgIDAgMSAyXG4gICAgICAzIDQgNVxuICAgICAgNiA3IDhcbiAgICAgICovXG4gICAgICBpbnZlcnNlIDogZnVuY3Rpb24obSl7XG4gICAgICAgY29uc3QgZGV0ID0gbVswXSAqIG1bNF0gKiBtWzhdICsgXG4gICAgICAgICAgICAgICAgICAgbVsyXSAqIG1bM10gKiBtWzddICtcbiAgICAgICAgICAgICAgICAgICBtWzFdICogbVs1XSAqIG1bNl0gLVxuICAgICAgICAgICAgICAgICAgIG1bMl0gKiBtWzRdICogbVs2XSAtXG4gICAgICAgICAgICAgICAgICAgbVswXSAqIG1bNV0gKiBtWzddIC1cbiAgICAgICAgICAgICAgICAgICBtWzhdICogbVszXSAqIG1bMl0gXG4gICAgICAgIGNvbnN0IGRzdCA9IG5ldyBGbG9hdDMyQXJyYXkoOSlcbiAgICAgICAgZHN0WzBdID0gKG1bNF0gKiBtWzhdIC0gbVs3XSAqIG1bNV0pIC8gZGV0XG4gICAgICAgIGRzdFsxXSA9IChtWzNdICogbVs4XSAtIG1bNl0gKiBtWzVdKSAvIGRldFxuICAgICAgICBkc3RbMl0gPSAobVszXSAqIG1bN10gLSBtWzZdICogbVs0XSkgLyBkZXRcbiAgICAgICAgZHN0WzNdID0gKG1bMV0gKiBtWzhdIC0gbVsyXSAqIG1bN10pIC8gZGV0XG4gICAgICAgIGRzdFs0XSA9IChtWzBdICogbVs4XSAtIG1bMl0gKiBtWzZdKSAvIGRldFxuICAgICAgICBkc3RbNV0gPSAobVswXSAqIG1bN10gLSBtWzFdICogbVs2XSkgLyBkZXRcbiAgICAgICAgZHN0WzZdID0gKG1bMV0gKiBtWzVdIC0gbVsyXSAqIG1bNF0pIC8gZGV0XG4gICAgICAgIGRzdFs3XSA9IChtWzBdICogbVs1XSAtIG1bMl0gKiBtWzNdKSAvIGRldFxuICAgICAgICBkc3RbOF0gPSAobVswXSAqIG1bNF0gLSBtWzFdICogbVs0XSkgLyBkZXRcbiAgICAgICAgXG4gICAgICB9LFxuICAgICAgdG9TdHJpbmcobSl7XG4gICAgICAgIHJldHVybiBtLnJlZHVjZSgoYWNjLGVsLGlkeCkgPT4gKGlkeCkgJSAzID09PSAwID8gYWNjICs9ICdcXG4nICsgZWwgOiBhY2MgKz0gJyAnICsgZWwgKVxuICAgICAgfSxcbiAgICAgIGRvdCh2MSx2Mil7XG4gICAgICAgIHJldHVybiB2MVswXSp2MlswXSArIHYxWzFdKnYyWzFdICsgdjFbMl0gKiB2MlsyXVxuICAgICAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBtMyIsImNvbnN0IE1hdFR5cGUgPSBGbG9hdDMyQXJyYXk7XG5jb25zdCB7bm9ybX0gPSByZXF1aXJlKCcuL3ZlYzMnKVxuY29uc3QgbTQgPSB7XG4gIG11bHRpcGx5OiBmdW5jdGlvbiAoYSwgYiwgZHN0KSB7XG4gICAgZHN0ID0gZHN0IHx8IG5ldyBNYXRUeXBlKDE2KTtcbiAgICB2YXIgYTAwID0gYVswICogNCArIDBdO1xuICAgIHZhciBhMDEgPSBhWzAgKiA0ICsgMV07XG4gICAgdmFyIGEwMiA9IGFbMCAqIDQgKyAyXTtcbiAgICB2YXIgYTAzID0gYVswICogNCArIDNdO1xuICAgIHZhciBhMTAgPSBhWzEgKiA0ICsgMF07XG4gICAgdmFyIGExMSA9IGFbMSAqIDQgKyAxXTtcbiAgICB2YXIgYTEyID0gYVsxICogNCArIDJdO1xuICAgIHZhciBhMTMgPSBhWzEgKiA0ICsgM107XG4gICAgdmFyIGEyMCA9IGFbMiAqIDQgKyAwXTtcbiAgICB2YXIgYTIxID0gYVsyICogNCArIDFdO1xuICAgIHZhciBhMjIgPSBhWzIgKiA0ICsgMl07XG4gICAgdmFyIGEyMyA9IGFbMiAqIDQgKyAzXTtcbiAgICB2YXIgYTMwID0gYVszICogNCArIDBdO1xuICAgIHZhciBhMzEgPSBhWzMgKiA0ICsgMV07XG4gICAgdmFyIGEzMiA9IGFbMyAqIDQgKyAyXTtcbiAgICB2YXIgYTMzID0gYVszICogNCArIDNdO1xuICAgIHZhciBiMDAgPSBiWzAgKiA0ICsgMF07XG4gICAgdmFyIGIwMSA9IGJbMCAqIDQgKyAxXTtcbiAgICB2YXIgYjAyID0gYlswICogNCArIDJdO1xuICAgIHZhciBiMDMgPSBiWzAgKiA0ICsgM107XG4gICAgdmFyIGIxMCA9IGJbMSAqIDQgKyAwXTtcbiAgICB2YXIgYjExID0gYlsxICogNCArIDFdO1xuICAgIHZhciBiMTIgPSBiWzEgKiA0ICsgMl07XG4gICAgdmFyIGIxMyA9IGJbMSAqIDQgKyAzXTtcbiAgICB2YXIgYjIwID0gYlsyICogNCArIDBdO1xuICAgIHZhciBiMjEgPSBiWzIgKiA0ICsgMV07XG4gICAgdmFyIGIyMiA9IGJbMiAqIDQgKyAyXTtcbiAgICB2YXIgYjIzID0gYlsyICogNCArIDNdO1xuICAgIHZhciBiMzAgPSBiWzMgKiA0ICsgMF07XG4gICAgdmFyIGIzMSA9IGJbMyAqIDQgKyAxXTtcbiAgICB2YXIgYjMyID0gYlszICogNCArIDJdO1xuICAgIHZhciBiMzMgPSBiWzMgKiA0ICsgM107XG4gICAgZHN0WzBdID0gYjAwICogYTAwICsgYjAxICogYTEwICsgYjAyICogYTIwICsgYjAzICogYTMwO1xuICAgIGRzdFsxXSA9IGIwMCAqIGEwMSArIGIwMSAqIGExMSArIGIwMiAqIGEyMSArIGIwMyAqIGEzMTtcbiAgICBkc3RbMl0gPSBiMDAgKiBhMDIgKyBiMDEgKiBhMTIgKyBiMDIgKiBhMjIgKyBiMDMgKiBhMzI7XG4gICAgZHN0WzNdID0gYjAwICogYTAzICsgYjAxICogYTEzICsgYjAyICogYTIzICsgYjAzICogYTMzO1xuICAgIGRzdFs0XSA9IGIxMCAqIGEwMCArIGIxMSAqIGExMCArIGIxMiAqIGEyMCArIGIxMyAqIGEzMDtcbiAgICBkc3RbNV0gPSBiMTAgKiBhMDEgKyBiMTEgKiBhMTEgKyBiMTIgKiBhMjEgKyBiMTMgKiBhMzE7XG4gICAgZHN0WzZdID0gYjEwICogYTAyICsgYjExICogYTEyICsgYjEyICogYTIyICsgYjEzICogYTMyO1xuICAgIGRzdFs3XSA9IGIxMCAqIGEwMyArIGIxMSAqIGExMyArIGIxMiAqIGEyMyArIGIxMyAqIGEzMztcbiAgICBkc3RbOF0gPSBiMjAgKiBhMDAgKyBiMjEgKiBhMTAgKyBiMjIgKiBhMjAgKyBiMjMgKiBhMzA7XG4gICAgZHN0WzldID0gYjIwICogYTAxICsgYjIxICogYTExICsgYjIyICogYTIxICsgYjIzICogYTMxO1xuICAgIGRzdFsxMF0gPSBiMjAgKiBhMDIgKyBiMjEgKiBhMTIgKyBiMjIgKiBhMjIgKyBiMjMgKiBhMzI7XG4gICAgZHN0WzExXSA9IGIyMCAqIGEwMyArIGIyMSAqIGExMyArIGIyMiAqIGEyMyArIGIyMyAqIGEzMztcbiAgICBkc3RbMTJdID0gYjMwICogYTAwICsgYjMxICogYTEwICsgYjMyICogYTIwICsgYjMzICogYTMwO1xuICAgIGRzdFsxM10gPSBiMzAgKiBhMDEgKyBiMzEgKiBhMTEgKyBiMzIgKiBhMjEgKyBiMzMgKiBhMzE7XG4gICAgZHN0WzE0XSA9IGIzMCAqIGEwMiArIGIzMSAqIGExMiArIGIzMiAqIGEyMiArIGIzMyAqIGEzMjtcbiAgICBkc3RbMTVdID0gYjMwICogYTAzICsgYjMxICogYTEzICsgYjMyICogYTIzICsgYjMzICogYTMzO1xuICAgIHJldHVybiBkc3Q7XG4gIH0sXG5cbiAgdHJhbnNsYXRpb246IGZ1bmN0aW9uICh0eCwgdHksIHR6KSB7XG4gICAgcmV0dXJuIFsxLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCB0eCwgdHksIHR6LCAxXTtcbiAgfSxcblxuICB4Um90YXRpb246IGZ1bmN0aW9uIChhbmdsZUluUmFkaWFucykge1xuICAgIHZhciBjID0gTWF0aC5jb3MoYW5nbGVJblJhZGlhbnMpO1xuICAgIHZhciBzID0gTWF0aC5zaW4oYW5nbGVJblJhZGlhbnMpO1xuXG4gICAgcmV0dXJuIFsxLCAwLCAwLCAwLCAwLCBjLCBzLCAwLCAwLCAtcywgYywgMCwgMCwgMCwgMCwgMV07XG4gIH0sXG5cbiAgeVJvdGF0aW9uOiBmdW5jdGlvbiAoYW5nbGVJblJhZGlhbnMpIHtcbiAgICB2YXIgYyA9IE1hdGguY29zKGFuZ2xlSW5SYWRpYW5zKTtcbiAgICB2YXIgcyA9IE1hdGguc2luKGFuZ2xlSW5SYWRpYW5zKTtcblxuICAgIHJldHVybiBbYywgMCwgLXMsIDAsIDAsIDEsIDAsIDAsIHMsIDAsIGMsIDAsIDAsIDAsIDAsIDFdO1xuICB9LFxuXG4gIHpSb3RhdGlvbjogZnVuY3Rpb24gKGFuZ2xlSW5SYWRpYW5zKSB7XG4gICAgdmFyIGMgPSBNYXRoLmNvcyhhbmdsZUluUmFkaWFucyk7XG4gICAgdmFyIHMgPSBNYXRoLnNpbihhbmdsZUluUmFkaWFucyk7XG5cbiAgICByZXR1cm4gW2MsIHMsIDAsIDAsIC1zLCBjLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAxXTtcbiAgfSxcblxuICBzY2FsaW5nOiBmdW5jdGlvbiAoc3gsIHN5LCBzeikge1xuICAgIHJldHVybiBbc3gsIDAsIDAsIDAsIDAsIHN5LCAwLCAwLCAwLCAwLCBzeiwgMCwgMCwgMCwgMCwgMV07XG4gIH0sXG4gIHRyYW5zbGF0ZTogZnVuY3Rpb24gKG0sIHR4LCB0eSwgdHopIHtcbiAgICByZXR1cm4gbTQubXVsdGlwbHkobSwgbTQudHJhbnNsYXRpb24odHgsIHR5LCB0eikpO1xuICB9LFxuXG4gIHhSb3RhdGU6IGZ1bmN0aW9uIChtLCBhbmdsZUluUmFkaWFucykge1xuICAgIHJldHVybiBtNC5tdWx0aXBseShtLCBtNC54Um90YXRpb24oYW5nbGVJblJhZGlhbnMpKTtcbiAgfSxcblxuICB5Um90YXRlOiBmdW5jdGlvbiAobSwgYW5nbGVJblJhZGlhbnMpIHtcbiAgICByZXR1cm4gbTQubXVsdGlwbHkobSwgbTQueVJvdGF0aW9uKGFuZ2xlSW5SYWRpYW5zKSk7XG4gIH0sXG5cbiAgelJvdGF0ZTogZnVuY3Rpb24gKG0sIGFuZ2xlSW5SYWRpYW5zKSB7XG4gICAgcmV0dXJuIG00Lm11bHRpcGx5KG0sIG00LnpSb3RhdGlvbihhbmdsZUluUmFkaWFucykpO1xuICB9LFxuXG4gIHNjYWxlOiBmdW5jdGlvbiAobSwgc3gsIHN5LCBzeikge1xuICAgIHJldHVybiBtNC5tdWx0aXBseShtLCBtNC5zY2FsaW5nKHN4LCBzeSwgc3opKTtcbiAgfSxcbiAgbWFrZU9ydDogZnVuY3Rpb24gKHYpIHtcbiAgICBjb25zdCBvID0gWzAsIDAsIDBdO1xuICAgIGNvbnN0IG5vcm0gPSBNYXRoLnNxcnQodlswXSAqIHZbMF0gKyB2WzFdICogdlsxXSArIHZbMl0gKiB2WzJdKTtcbiAgICBvWzBdID0gdlswXSAvIG5vcm07XG4gICAgb1sxXSA9IHZbMV0gLyBub3JtO1xuICAgIG9bMl0gPSB2WzJdIC8gbm9ybTtcbiAgICByZXR1cm4gbztcbiAgfSxcbiAgcHJvamVjdGlvbjogZnVuY3Rpb24gKHdpZHRoLCBoZWlnaHQsIGRlcHRoKSB7XG4gICAgLy8g0K3RgtCwINC80LDRgtGA0LjRhtCwINC/0LXRgNC10LLQvtGA0LDRh9C40LLQsNC10YIgWSwg0YfRgtC+0LHRiyAwINCx0YvQuyDQvdCw0LLQtdGA0YXRg1xuICAgIHJldHVybiBbXG4gICAgICAyIC8gd2lkdGgsXG4gICAgICAwLFxuICAgICAgMCxcbiAgICAgIDAsXG4gICAgICAwLFxuICAgICAgLTIgLyBoZWlnaHQsXG4gICAgICAwLFxuICAgICAgMCxcbiAgICAgIDAsXG4gICAgICAwLFxuICAgICAgMiAvIGRlcHRoLFxuICAgICAgMCxcbiAgICAgIC0xLFxuICAgICAgMSxcbiAgICAgIDAsXG4gICAgICAxLFxuICAgIF07XG4gIH0sXG4gIHBlcnNwZWN0aXZlOiBmdW5jdGlvbiAoZmllbGRPZlZpZXdJblJhZGlhbnMsIGFzcGVjdCwgbmVhciwgZmFyKSB7XG4gICAgdmFyIGYgPSBNYXRoLnRhbihNYXRoLlBJICogMC41IC0gMC41ICogZmllbGRPZlZpZXdJblJhZGlhbnMpO1xuICAgIHZhciByYW5nZUludiA9IDEuMCAvIChuZWFyIC0gZmFyKTtcblxuICAgIHJldHVybiBbXG4gICAgICBmIC8gYXNwZWN0LFxuICAgICAgMCxcbiAgICAgIDAsXG4gICAgICAwLFxuICAgICAgMCxcbiAgICAgIGYsXG4gICAgICAwLFxuICAgICAgMCxcbiAgICAgIDAsXG4gICAgICAwLFxuICAgICAgKG5lYXIgKyBmYXIpICogcmFuZ2VJbnYsXG4gICAgICAtMSxcbiAgICAgIDAsXG4gICAgICAwLFxuICAgICAgbmVhciAqIGZhciAqIHJhbmdlSW52ICogMixcbiAgICAgIDAsXG4gICAgXTtcbiAgfSxcbiAgaW52ZXJzZTogZnVuY3Rpb24gKG0pIHtcbiAgICB2YXIgbTAwID0gbVswICogNCArIDBdO1xuICAgIHZhciBtMDEgPSBtWzAgKiA0ICsgMV07XG4gICAgdmFyIG0wMiA9IG1bMCAqIDQgKyAyXTtcbiAgICB2YXIgbTAzID0gbVswICogNCArIDNdO1xuICAgIHZhciBtMTAgPSBtWzEgKiA0ICsgMF07XG4gICAgdmFyIG0xMSA9IG1bMSAqIDQgKyAxXTtcbiAgICB2YXIgbTEyID0gbVsxICogNCArIDJdO1xuICAgIHZhciBtMTMgPSBtWzEgKiA0ICsgM107XG4gICAgdmFyIG0yMCA9IG1bMiAqIDQgKyAwXTtcbiAgICB2YXIgbTIxID0gbVsyICogNCArIDFdO1xuICAgIHZhciBtMjIgPSBtWzIgKiA0ICsgMl07XG4gICAgdmFyIG0yMyA9IG1bMiAqIDQgKyAzXTtcbiAgICB2YXIgbTMwID0gbVszICogNCArIDBdO1xuICAgIHZhciBtMzEgPSBtWzMgKiA0ICsgMV07XG4gICAgdmFyIG0zMiA9IG1bMyAqIDQgKyAyXTtcbiAgICB2YXIgbTMzID0gbVszICogNCArIDNdO1xuICAgIHZhciB0bXBfMCA9IG0yMiAqIG0zMztcbiAgICB2YXIgdG1wXzEgPSBtMzIgKiBtMjM7XG4gICAgdmFyIHRtcF8yID0gbTEyICogbTMzO1xuICAgIHZhciB0bXBfMyA9IG0zMiAqIG0xMztcbiAgICB2YXIgdG1wXzQgPSBtMTIgKiBtMjM7XG4gICAgdmFyIHRtcF81ID0gbTIyICogbTEzO1xuICAgIHZhciB0bXBfNiA9IG0wMiAqIG0zMztcbiAgICB2YXIgdG1wXzcgPSBtMzIgKiBtMDM7XG4gICAgdmFyIHRtcF84ID0gbTAyICogbTIzO1xuICAgIHZhciB0bXBfOSA9IG0yMiAqIG0wMztcbiAgICB2YXIgdG1wXzEwID0gbTAyICogbTEzO1xuICAgIHZhciB0bXBfMTEgPSBtMTIgKiBtMDM7XG4gICAgdmFyIHRtcF8xMiA9IG0yMCAqIG0zMTtcbiAgICB2YXIgdG1wXzEzID0gbTMwICogbTIxO1xuICAgIHZhciB0bXBfMTQgPSBtMTAgKiBtMzE7XG4gICAgdmFyIHRtcF8xNSA9IG0zMCAqIG0xMTtcbiAgICB2YXIgdG1wXzE2ID0gbTEwICogbTIxO1xuICAgIHZhciB0bXBfMTcgPSBtMjAgKiBtMTE7XG4gICAgdmFyIHRtcF8xOCA9IG0wMCAqIG0zMTtcbiAgICB2YXIgdG1wXzE5ID0gbTMwICogbTAxO1xuICAgIHZhciB0bXBfMjAgPSBtMDAgKiBtMjE7XG4gICAgdmFyIHRtcF8yMSA9IG0yMCAqIG0wMTtcbiAgICB2YXIgdG1wXzIyID0gbTAwICogbTExO1xuICAgIHZhciB0bXBfMjMgPSBtMTAgKiBtMDE7XG5cbiAgICB2YXIgdDAgPVxuICAgICAgdG1wXzAgKiBtMTEgK1xuICAgICAgdG1wXzMgKiBtMjEgK1xuICAgICAgdG1wXzQgKiBtMzEgLVxuICAgICAgKHRtcF8xICogbTExICsgdG1wXzIgKiBtMjEgKyB0bXBfNSAqIG0zMSk7XG4gICAgdmFyIHQxID1cbiAgICAgIHRtcF8xICogbTAxICtcbiAgICAgIHRtcF82ICogbTIxICtcbiAgICAgIHRtcF85ICogbTMxIC1cbiAgICAgICh0bXBfMCAqIG0wMSArIHRtcF83ICogbTIxICsgdG1wXzggKiBtMzEpO1xuICAgIHZhciB0MiA9XG4gICAgICB0bXBfMiAqIG0wMSArXG4gICAgICB0bXBfNyAqIG0xMSArXG4gICAgICB0bXBfMTAgKiBtMzEgLVxuICAgICAgKHRtcF8zICogbTAxICsgdG1wXzYgKiBtMTEgKyB0bXBfMTEgKiBtMzEpO1xuICAgIHZhciB0MyA9XG4gICAgICB0bXBfNSAqIG0wMSArXG4gICAgICB0bXBfOCAqIG0xMSArXG4gICAgICB0bXBfMTEgKiBtMjEgLVxuICAgICAgKHRtcF80ICogbTAxICsgdG1wXzkgKiBtMTEgKyB0bXBfMTAgKiBtMjEpO1xuXG4gICAgdmFyIGQgPSAxLjAgLyAobTAwICogdDAgKyBtMTAgKiB0MSArIG0yMCAqIHQyICsgbTMwICogdDMpO1xuXG4gICAgcmV0dXJuIFtcbiAgICAgIGQgKiB0MCxcbiAgICAgIGQgKiB0MSxcbiAgICAgIGQgKiB0MixcbiAgICAgIGQgKiB0MyxcbiAgICAgIGQgKlxuICAgICAgICAodG1wXzEgKiBtMTAgK1xuICAgICAgICAgIHRtcF8yICogbTIwICtcbiAgICAgICAgICB0bXBfNSAqIG0zMCAtXG4gICAgICAgICAgKHRtcF8wICogbTEwICsgdG1wXzMgKiBtMjAgKyB0bXBfNCAqIG0zMCkpLFxuICAgICAgZCAqXG4gICAgICAgICh0bXBfMCAqIG0wMCArXG4gICAgICAgICAgdG1wXzcgKiBtMjAgK1xuICAgICAgICAgIHRtcF84ICogbTMwIC1cbiAgICAgICAgICAodG1wXzEgKiBtMDAgKyB0bXBfNiAqIG0yMCArIHRtcF85ICogbTMwKSksXG4gICAgICBkICpcbiAgICAgICAgKHRtcF8zICogbTAwICtcbiAgICAgICAgICB0bXBfNiAqIG0xMCArXG4gICAgICAgICAgdG1wXzExICogbTMwIC1cbiAgICAgICAgICAodG1wXzIgKiBtMDAgKyB0bXBfNyAqIG0xMCArIHRtcF8xMCAqIG0zMCkpLFxuICAgICAgZCAqXG4gICAgICAgICh0bXBfNCAqIG0wMCArXG4gICAgICAgICAgdG1wXzkgKiBtMTAgK1xuICAgICAgICAgIHRtcF8xMCAqIG0yMCAtXG4gICAgICAgICAgKHRtcF81ICogbTAwICsgdG1wXzggKiBtMTAgKyB0bXBfMTEgKiBtMjApKSxcbiAgICAgIGQgKlxuICAgICAgICAodG1wXzEyICogbTEzICtcbiAgICAgICAgICB0bXBfMTUgKiBtMjMgK1xuICAgICAgICAgIHRtcF8xNiAqIG0zMyAtXG4gICAgICAgICAgKHRtcF8xMyAqIG0xMyArIHRtcF8xNCAqIG0yMyArIHRtcF8xNyAqIG0zMykpLFxuICAgICAgZCAqXG4gICAgICAgICh0bXBfMTMgKiBtMDMgK1xuICAgICAgICAgIHRtcF8xOCAqIG0yMyArXG4gICAgICAgICAgdG1wXzIxICogbTMzIC1cbiAgICAgICAgICAodG1wXzEyICogbTAzICsgdG1wXzE5ICogbTIzICsgdG1wXzIwICogbTMzKSksXG4gICAgICBkICpcbiAgICAgICAgKHRtcF8xNCAqIG0wMyArXG4gICAgICAgICAgdG1wXzE5ICogbTEzICtcbiAgICAgICAgICB0bXBfMjIgKiBtMzMgLVxuICAgICAgICAgICh0bXBfMTUgKiBtMDMgKyB0bXBfMTggKiBtMTMgKyB0bXBfMjMgKiBtMzMpKSxcbiAgICAgIGQgKlxuICAgICAgICAodG1wXzE3ICogbTAzICtcbiAgICAgICAgICB0bXBfMjAgKiBtMTMgK1xuICAgICAgICAgIHRtcF8yMyAqIG0yMyAtXG4gICAgICAgICAgKHRtcF8xNiAqIG0wMyArIHRtcF8yMSAqIG0xMyArIHRtcF8yMiAqIG0yMykpLFxuICAgICAgZCAqXG4gICAgICAgICh0bXBfMTQgKiBtMjIgK1xuICAgICAgICAgIHRtcF8xNyAqIG0zMiArXG4gICAgICAgICAgdG1wXzEzICogbTEyIC1cbiAgICAgICAgICAodG1wXzE2ICogbTMyICsgdG1wXzEyICogbTEyICsgdG1wXzE1ICogbTIyKSksXG4gICAgICBkICpcbiAgICAgICAgKHRtcF8yMCAqIG0zMiArXG4gICAgICAgICAgdG1wXzEyICogbTAyICtcbiAgICAgICAgICB0bXBfMTkgKiBtMjIgLVxuICAgICAgICAgICh0bXBfMTggKiBtMjIgKyB0bXBfMjEgKiBtMzIgKyB0bXBfMTMgKiBtMDIpKSxcbiAgICAgIGQgKlxuICAgICAgICAodG1wXzE4ICogbTEyICtcbiAgICAgICAgICB0bXBfMjMgKiBtMzIgK1xuICAgICAgICAgIHRtcF8xNSAqIG0wMiAtXG4gICAgICAgICAgKHRtcF8yMiAqIG0zMiArIHRtcF8xNCAqIG0wMiArIHRtcF8xOSAqIG0xMikpLFxuICAgICAgZCAqXG4gICAgICAgICh0bXBfMjIgKiBtMjIgK1xuICAgICAgICAgIHRtcF8xNiAqIG0wMiArXG4gICAgICAgICAgdG1wXzIxICogbTEyIC1cbiAgICAgICAgICAodG1wXzIwICogbTEyICsgdG1wXzIzICogbTIyICsgdG1wXzE3ICogbTAyKSksXG4gICAgXTtcbiAgfSxcbiAgbG9va0F0OiBmdW5jdGlvbiAoY2FtZXJhUG9zaXRpb24sIHRhcmdldCwgdXApIHtcbiAgICB2YXIgekF4aXMgPSBub3JtYWxpemUoc3VidHJhY3RWZWN0b3JzKGNhbWVyYVBvc2l0aW9uLCB0YXJnZXQpKTtcbiAgICB2YXIgeEF4aXMgPSBub3JtYWxpemUoY3Jvc3ModXAsIHpBeGlzKSk7XG4gICAgdmFyIHlBeGlzID0gbm9ybWFsaXplKGNyb3NzKHpBeGlzLCB4QXhpcykpO1xuXG4gICAgcmV0dXJuIFtcbiAgICAgIHhBeGlzWzBdLFxuICAgICAgeEF4aXNbMV0sXG4gICAgICB4QXhpc1syXSxcbiAgICAgIDAsXG4gICAgICB5QXhpc1swXSxcbiAgICAgIHlBeGlzWzFdLFxuICAgICAgeUF4aXNbMl0sXG4gICAgICAwLFxuICAgICAgekF4aXNbMF0sXG4gICAgICB6QXhpc1sxXSxcbiAgICAgIHpBeGlzWzJdLFxuICAgICAgMCxcbiAgICAgIGNhbWVyYVBvc2l0aW9uWzBdLFxuICAgICAgY2FtZXJhUG9zaXRpb25bMV0sXG4gICAgICBjYW1lcmFQb3NpdGlvblsyXSxcbiAgICAgIDEsXG4gICAgXTtcbiAgfSxcbiAgY29weTogZnVuY3Rpb24gKHNyYykge1xuICAgIGNvbnN0IGRzdCA9IG5ldyBNYXRUeXBlKDE2KTtcblxuICAgIGRzdFswXSA9IHNyY1swXTtcbiAgICBkc3RbMV0gPSBzcmNbMV07XG4gICAgZHN0WzJdID0gc3JjWzJdO1xuICAgIGRzdFszXSA9IHNyY1szXTtcbiAgICBkc3RbNF0gPSBzcmNbNF07XG4gICAgZHN0WzVdID0gc3JjWzVdO1xuICAgIGRzdFs2XSA9IHNyY1s2XTtcbiAgICBkc3RbN10gPSBzcmNbN107XG4gICAgZHN0WzhdID0gc3JjWzhdO1xuICAgIGRzdFs5XSA9IHNyY1s5XTtcbiAgICBkc3RbMTBdID0gc3JjWzEwXTtcbiAgICBkc3RbMTFdID0gc3JjWzExXTtcbiAgICBkc3RbMTJdID0gc3JjWzEyXTtcbiAgICBkc3RbMTNdID0gc3JjWzEzXTtcbiAgICBkc3RbMTRdID0gc3JjWzE0XTtcbiAgICBkc3RbMTVdID0gc3JjWzE1XTtcblxuICAgIHJldHVybiBkc3Q7XG4gIH0sXG4gIHZlY3RvclN1bTogZnVuY3Rpb24gKHYxLCB2Mikge1xuICAgIGNvbnN0IHZlY3RvciA9IFswLCAwLCAwXTtcbiAgICB2ZWN0b3JbMF0gPSB2MVswXSArIHYyWzBdO1xuICAgIHZlY3RvclsxXSA9IHYxWzFdICsgdjJbMV07XG4gICAgdmVjdG9yWzJdID0gdjFbMl0gKyB2MlsyXTtcbiAgICByZXR1cm4gdmVjdG9yO1xuICB9LFxuICBjcm9zczogZnVuY3Rpb24gKGEsIGIpIHtcbiAgICByZXR1cm4gW1xuICAgICAgYVsxXSAqIGJbMl0gLSBhWzJdICogYlsxXSxcbiAgICAgIGFbMl0gKiBiWzBdIC0gYVswXSAqIGJbMl0sXG4gICAgICBhWzBdICogYlsxXSAtIGFbMV0gKiBiWzBdLFxuICAgIF07XG4gIH0sXG4gIHZlY3RvclNjYWxhclByb2R1Y3QoYSwgcykge1xuICAgIGxldCB2ID0gWzAsIDAsIDBdO1xuXG4gICAgdlswXSA9IGFbMF0gKiBzO1xuICAgIHZbMV0gPSBhWzFdICogcztcbiAgICB2WzJdID0gYVsyXSAqIHM7XG4gICAgaWYgKGlzTmFOKHZbMF0pIHx8IGlzTmFOKHZbMl0pIHx8IGlzTmFOKHZbMl0pKSByZXR1cm4gWzAsIDAsIDBdO1xuICAgIHJldHVybiB2O1xuICB9LFxuXG4gIHNjYWxhclByb2R1Y3Q6IGZ1bmN0aW9uICh2MSwgdjIpIHtcbiAgICBsZXQgYSA9IHYxWzBdICogdjJbMF0gKyB2MVsxXSAqIHYyWzFdICsgdjFbMl0gKiB2MlsyXTtcblxuICAgIHJldHVybiBhO1xuICB9LFxuICBkb3QodjEsIHYyKSB7XG4gICAgcmV0dXJuIHYxWzBdICogdjJbMF0gKyB2MVsxXSAqIHYyWzFdICsgdjFbMl0gKiB2MlsyXTtcbiAgfSxcbiAgaXNOdWxsVmVjdG9yOiBmdW5jdGlvbiAodikge1xuICAgIHJldHVybiAhdlswXSAmJiAhdlsxXSAmJiAhdlsyXTtcbiAgfSxcbiAgZ2V0VmVjdG9yTGVuZ3RoKHYpIHtcbiAgICByZXR1cm4gTWF0aC5zcXJ0KHZbMF0gKiB2WzBdICsgdlsxXSAqIHZbMV0gKyB2WzJdICogdlsyXSk7XG4gIH0sXG4gIHRyYW5zZm9ybVBvaW50OiBmdW5jdGlvbiAobSwgdiwgZHN0KSB7XG4gICAgZHN0ID0gZHN0IHx8IG5ldyBNYXRUeXBlKDMpO1xuICAgIHZhciB2MCA9IHZbMF07XG4gICAgdmFyIHYxID0gdlsxXTtcbiAgICB2YXIgdjIgPSB2WzJdO1xuICAgIHZhciBkID1cbiAgICAgIHYwICogbVswICogNCArIDNdICsgdjEgKiBtWzEgKiA0ICsgM10gKyB2MiAqIG1bMiAqIDQgKyAzXSArIG1bMyAqIDQgKyAzXTtcblxuICAgIGRzdFswXSA9XG4gICAgICAodjAgKiBtWzAgKiA0ICsgMF0gK1xuICAgICAgICB2MSAqIG1bMSAqIDQgKyAwXSArXG4gICAgICAgIHYyICogbVsyICogNCArIDBdICtcbiAgICAgICAgbVszICogNCArIDBdKSAvXG4gICAgICBkO1xuICAgIGRzdFsxXSA9XG4gICAgICAodjAgKiBtWzAgKiA0ICsgMV0gK1xuICAgICAgICB2MSAqIG1bMSAqIDQgKyAxXSArXG4gICAgICAgIHYyICogbVsyICogNCArIDFdICtcbiAgICAgICAgbVszICogNCArIDFdKSAvXG4gICAgICBkO1xuICAgIGRzdFsyXSA9XG4gICAgICAodjAgKiBtWzAgKiA0ICsgMl0gK1xuICAgICAgICB2MSAqIG1bMSAqIDQgKyAyXSArXG4gICAgICAgIHYyICogbVsyICogNCArIDJdICtcbiAgICAgICAgbVszICogNCArIDJdKSAvXG4gICAgICBkO1xuXG4gICAgcmV0dXJuIGRzdDtcbiAgfSxcbiAgbm9ybWFsaXplOiBmdW5jdGlvbiAodiwgZHN0KSB7XG4gICAgZHN0ID0gZHN0IHx8IG5ldyBNYXRUeXBlKDMpO1xuICAgIHZhciBsZW5ndGggPSBNYXRoLnNxcnQodlswXSAqIHZbMF0gKyB2WzFdICogdlsxXSArIHZbMl0gKiB2WzJdKTtcbiAgICAvLyBtYWtlIHN1cmUgd2UgZG9uJ3QgZGl2aWRlIGJ5IDAuXG4gICAgaWYgKGxlbmd0aCA+IDAuMDAwMDEpIHtcbiAgICAgIGRzdFswXSA9IHZbMF0gLyBsZW5ndGg7XG4gICAgICBkc3RbMV0gPSB2WzFdIC8gbGVuZ3RoO1xuICAgICAgZHN0WzJdID0gdlsyXSAvIGxlbmd0aDtcbiAgICB9XG4gICAgcmV0dXJuIGRzdDtcbiAgfSxcbiAgaWRlbnRpdHk6IGZ1bmN0aW9uICgpIHtcbiAgICBkc3QgPSBuZXcgTWF0VHlwZSgxNik7XG4gICAgZHN0WzBdID0gMTtcbiAgICBkc3RbMV0gPSAwO1xuICAgIGRzdFsyXSA9IDA7XG4gICAgZHN0WzNdID0gMDtcbiAgICBkc3RbNF0gPSAwO1xuICAgIGRzdFs1XSA9IDE7XG4gICAgZHN0WzZdID0gMDtcbiAgICBkc3RbN10gPSAwO1xuICAgIGRzdFs4XSA9IDA7XG4gICAgZHN0WzldID0gMDtcbiAgICBkc3RbMTBdID0gMTtcbiAgICBkc3RbMTFdID0gMDtcbiAgICBkc3RbMTJdID0gMDtcbiAgICBkc3RbMTNdID0gMDtcbiAgICBkc3RbMTRdID0gMDtcbiAgICBkc3RbMTVdID0gMTtcblxuICAgIHJldHVybiBkc3Q7XG4gIH0sXG4gIG0zVG9tNDogZnVuY3Rpb24gKG0pIHtcbiAgICBjb25zdCBkc3QgPSBuZXcgTWF0VHlwZSgxNik7XG4gICAgZHN0WzBdID0gbVswXTtcbiAgICBkc3RbMV0gPSBtWzFdO1xuICAgIGRzdFsyXSA9IG1bMl07XG4gICAgZHN0WzNdID0gMDtcbiAgICBkc3RbNF0gPSBtWzNdO1xuICAgIGRzdFs1XSA9IG1bNF07XG4gICAgZHN0WzZdID0gbVs1XTtcbiAgICBkc3RbN10gPSAwO1xuICAgIGRzdFs4XSA9IG1bNl07XG4gICAgZHN0WzldID0gbVs3XTtcbiAgICBkc3RbMTBdID0gbVs4XTtcbiAgICBkc3RbMTFdID0gMDtcbiAgICBkc3RbMTJdID0gMDtcbiAgICBkc3RbMTNdID0gMDtcbiAgICBkc3RbMTRdID0gMDtcbiAgICBkc3RbMTVdID0gMTtcbiAgICByZXR1cm4gZHN0O1xuICB9LFxuICBtNFRvbTM6IGZ1bmN0aW9uIChtKSB7XG4gICAgY29uc3QgZHN0ID0gbmV3IE1hdFR5cGUoOSk7XG4gICAgZHN0WzBdID0gbVswXTtcbiAgICBkc3RbMV0gPSBtWzFdO1xuICAgIGRzdFsyXSA9IG1bMl07XG4gICAgZHN0WzNdID0gbVs0XTtcbiAgICBkc3RbNF0gPSBtWzVdO1xuICAgIGRzdFs1XSA9IG1bNl07XG4gICAgZHN0WzZdID0gbVs4XTtcbiAgICBkc3RbN10gPSBtWzldO1xuICAgIGRzdFs4XSA9IG1bMTBdO1xuICAgIHJldHVybiBkc3Q7XG4gIH0sXG4gIHRvU3RyaW5nKG0pIHtcbiAgICByZXR1cm4gbS5yZWR1Y2UoKGFjYywgZWwsIGlkeCkgPT5cbiAgICAgIGlkeCAlIDQgPT09IDAgPyAoYWNjICs9IFwiXFxuXCIgKyBlbCkgOiAoYWNjICs9IFwiIFwiICsgZWwpXG4gICAgKTtcbiAgfSxcbiAgdHJhbnNwb3NlOiBmdW5jdGlvbiAobSkge1xuICAgIHJldHVybiBbXG4gICAgICBtWzBdLFxuICAgICAgbVs0XSxcbiAgICAgIG1bOF0sXG4gICAgICBtWzEyXSxcbiAgICAgIG1bMV0sXG4gICAgICBtWzVdLFxuICAgICAgbVs5XSxcbiAgICAgIG1bMTNdLFxuICAgICAgbVsyXSxcbiAgICAgIG1bNl0sXG4gICAgICBtWzEwXSxcbiAgICAgIG1bMTRdLFxuICAgICAgbVszXSxcbiAgICAgIG1bN10sXG4gICAgICBtWzExXSxcbiAgICAgIG1bMTVdLFxuICAgIF07XG4gIH0sXG4gIGZyb21RdWF0ZXJuaW9uOiAocSkgPT4ge1xuICAgIGNvbnN0IGExMSA9IDEgLSAyICogKHFbMV0gKiBxWzFdICsgcVsyXSAqIHFbMl0pO1xuICAgIGNvbnN0IGExMiA9IDIgKiAocVswXSAqIHFbMV0gLSBxWzJdICogcVszXSk7XG4gICAgY29uc3QgYTEzID0gMiAqIChxWzBdICogcVsyXSArIHFbMV0gKiBxWzNdKTtcbiAgICBjb25zdCBhMjEgPSAyICogKHFbMF0gKiBxWzFdICsgcVsyXSAqIHFbM10pO1xuICAgIGNvbnN0IGEyMiA9IDEgLSAyICogKHFbMF0gKiBxWzBdICsgcVsyXSAqIHFbMl0pO1xuICAgIGNvbnN0IGEyMyA9IDIgKiAocVsxXSAqIHFbMl0gLSBxWzBdICogcVszXSk7XG4gICAgY29uc3QgYTMxID0gMiAqIChxWzBdICogcVsyXSAtIHFbMV0gKiBxWzNdKTtcbiAgICBjb25zdCBhMzIgPSAyICogKHFbMV0gKiBxWzJdICsgcVswXSAqIHFbM10pO1xuICAgIGNvbnN0IGEzMyA9IDEgLSAyICogKHFbMF0gKiBxWzBdICsgcVsxXSAqIHFbMV0pO1xuICAgIHJldHVybiBbYTExLCBhMTIsIGExMywgMCwgYTIxLCBhMjIsIGEyMywgMCwgYTMxLCBhMzIsIGEzMywgMCwgMCwgMCwgMCwgMV07XG4gIH0sXG4gIHJvdGF0aW9uKHgsIHksIHopIHtcbiAgICByZXR1cm4gdGhpcy54Um90YXRlKHRoaXMueVJvdGF0ZSh0aGlzLnpSb3RhdGlvbih6KSwgeSksIHgpO1xuICB9LFxuICByb3RhdGlvbkZyb21Ob3JtYWwobikge1xuICAgIHJldHVybiB0aGlzLnJvdGF0aW9uKE1hdGguYWNvcyhuWzFdKSwgTWF0aC5hY29zKG5bMl0pLCBNYXRoLmFjb3MoblswXSkpO1xuICB9LFxuICBkZXRlcm1pbmF0ZShtKSB7XG4gICAgdmFyIG0wMCA9IG1bMCAqIDQgKyAwXTtcbiAgICB2YXIgbTAxID0gbVswICogNCArIDFdO1xuICAgIHZhciBtMDIgPSBtWzAgKiA0ICsgMl07XG4gICAgdmFyIG0wMyA9IG1bMCAqIDQgKyAzXTtcbiAgICB2YXIgbTEwID0gbVsxICogNCArIDBdO1xuICAgIHZhciBtMTEgPSBtWzEgKiA0ICsgMV07XG4gICAgdmFyIG0xMiA9IG1bMSAqIDQgKyAyXTtcbiAgICB2YXIgbTEzID0gbVsxICogNCArIDNdO1xuICAgIHZhciBtMjAgPSBtWzIgKiA0ICsgMF07XG4gICAgdmFyIG0yMSA9IG1bMiAqIDQgKyAxXTtcbiAgICB2YXIgbTIyID0gbVsyICogNCArIDJdO1xuICAgIHZhciBtMjMgPSBtWzIgKiA0ICsgM107XG4gICAgdmFyIG0zMCA9IG1bMyAqIDQgKyAwXTtcbiAgICB2YXIgbTMxID0gbVszICogNCArIDFdO1xuICAgIHZhciBtMzIgPSBtWzMgKiA0ICsgMl07XG4gICAgdmFyIG0zMyA9IG1bMyAqIDQgKyAzXTtcbiAgICB2YXIgdG1wXzAgID0gbTIyICogbTMzO1xuICAgIHZhciB0bXBfMSAgPSBtMzIgKiBtMjM7XG4gICAgdmFyIHRtcF8yICA9IG0xMiAqIG0zMztcbiAgICB2YXIgdG1wXzMgID0gbTMyICogbTEzO1xuICAgIHZhciB0bXBfNCAgPSBtMTIgKiBtMjM7XG4gICAgdmFyIHRtcF81ICA9IG0yMiAqIG0xMztcbiAgICB2YXIgdG1wXzYgID0gbTAyICogbTMzO1xuICAgIHZhciB0bXBfNyAgPSBtMzIgKiBtMDM7XG4gICAgdmFyIHRtcF84ICA9IG0wMiAqIG0yMztcbiAgICB2YXIgdG1wXzkgID0gbTIyICogbTAzO1xuICAgIHZhciB0bXBfMTAgPSBtMDIgKiBtMTM7XG4gICAgdmFyIHRtcF8xMSA9IG0xMiAqIG0wMztcblxuICAgIHZhciB0MCA9ICh0bXBfMCAqIG0xMSArIHRtcF8zICogbTIxICsgdG1wXzQgKiBtMzEpIC1cbiAgICAgICAgKHRtcF8xICogbTExICsgdG1wXzIgKiBtMjEgKyB0bXBfNSAqIG0zMSk7XG4gICAgdmFyIHQxID0gKHRtcF8xICogbTAxICsgdG1wXzYgKiBtMjEgKyB0bXBfOSAqIG0zMSkgLVxuICAgICAgICAodG1wXzAgKiBtMDEgKyB0bXBfNyAqIG0yMSArIHRtcF84ICogbTMxKTtcbiAgICB2YXIgdDIgPSAodG1wXzIgKiBtMDEgKyB0bXBfNyAqIG0xMSArIHRtcF8xMCAqIG0zMSkgLVxuICAgICAgICAodG1wXzMgKiBtMDEgKyB0bXBfNiAqIG0xMSArIHRtcF8xMSAqIG0zMSk7XG4gICAgdmFyIHQzID0gKHRtcF81ICogbTAxICsgdG1wXzggKiBtMTEgKyB0bXBfMTEgKiBtMjEpIC1cbiAgICAgICAgKHRtcF80ICogbTAxICsgdG1wXzkgKiBtMTEgKyB0bXBfMTAgKiBtMjEpO1xuXG4gICAgcmV0dXJuIDEuMCAvIChtMDAgKiB0MCArIG0xMCAqIHQxICsgbTIwICogdDIgKyBtMzAgKiB0Myk7XG4gIH0sXG4gIFxuICBkZWNvbXBvc2UobWF0KSB7XG4gICAgbGV0IHN4ID0gbm9ybShtYXQuc2xpY2UoMCwgMykpO1xuICAgIGNvbnN0IHN5ID0gbm9ybShtYXQuc2xpY2UoNCwgNykpO1xuICAgIGNvbnN0IHN6ID0gbm9ybShtYXQuc2xpY2UoOCwgMTEpKTtcblxuICAgIFxuICAgIGNvbnN0IGRldCA9IHRoaXMuZGV0ZXJtaW5hdGUobWF0KTtcbiAgICBpZiAoZGV0IDwgMCkge1xuICAgICAgc3ggPSAtc3g7XG4gICAgfVxuICAgIGNvbnN0IHRyYW5zbGF0aW9uID0gW11cbiAgICBjb25zdCBzY2FsZSA9IFtdXG4gICAgY29uc3QgUm1hdHJpeCA9IFsuLi5tYXRdXG4gICAgdHJhbnNsYXRpb25bMF0gPSBtYXRbMTJdO1xuICAgIHRyYW5zbGF0aW9uWzFdID0gbWF0WzEzXTtcbiAgICB0cmFuc2xhdGlvblsyXSA9IG1hdFsxNF07XG5cblxuICAgIFxuXG4gICAgY29uc3QgaW52U1ggPSAxIC8gc3g7XG4gICAgY29uc3QgaW52U1kgPSAxIC8gc3k7XG4gICAgY29uc3QgaW52U1ogPSAxIC8gc3o7XG5cbiAgICBSbWF0cml4WzBdICo9IGludlNYO1xuICAgIFJtYXRyaXhbMV0gKj0gaW52U1g7XG4gICAgUm1hdHJpeFsyXSAqPSBpbnZTWDtcblxuICAgIFJtYXRyaXhbNF0gKj0gaW52U1k7XG4gICAgUm1hdHJpeFs1XSAqPSBpbnZTWTtcbiAgICBSbWF0cml4WzZdICo9IGludlNZO1xuXG4gICAgUm1hdHJpeFs4XSAqPSBpbnZTWjtcbiAgICBSbWF0cml4WzldICo9IGludlNaO1xuICAgIFJtYXRyaXhbMTBdICo9IGludlNaO1xuXG5cblxuICAgIHNjYWxlWzBdID0gc3g7XG4gICAgc2NhbGVbMV0gPSBzeTtcbiAgICBzY2FsZVsyXSA9IHN6O1xuICAgIHJldHVybiB7dHJhbnNsYXRpb24sIFJtYXRyaXgsIHNjYWxlIH1cbiAgfVxufTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IG00O1xuIiwiY29uc3QgZG90ID0gKGEsIGIpID0+IGFbMF0gKiBiWzBdICsgYVsxXSAqIGJbMV0gKyBhWzJdICogYlsyXTtcbmNvbnN0IGNyb3NzID0gKGEsIGIpID0+IFtcbiAgYVsxXSAqIGJbMl0gLSBiWzFdICogYVsyXSxcbiAgYVsyXSAqIGJbMF0gLSBiWzJdICogYVswXSxcbiAgYVswXSAqIGJbMV0gLSBiWzBdICogYVsxXSxcbl07XG5cbmNvbnN0IHNjYWxlID0gKGEsIHNjYWxhcikgPT4gW2FbMF0gKiBzY2FsYXIsIGFbMV0gKiBzY2FsYXIsIGFbMl0gKiBzY2FsYXJdO1xuY29uc3Qgc3VtID0gKGEsIGIpID0+IFthWzBdICsgYlswXSwgYVsxXSArIGJbMV0sIGFbMl0gKyBiWzJdXTtcbmNvbnN0IGRpZmYgPSAoYSwgYikgPT4gW2FbMF0gLSBiWzBdLCBhWzFdIC0gYlsxXSwgYVsyXSAtIGJbMl1dO1xuY29uc3Qgbm9ybSA9IChhKSA9PiBNYXRoLnNxcnQoYVswXSAqIGFbMF0gKyBhWzFdICogYVsxXSArIGFbMl0gKiBhWzJdKTtcbmNvbnN0IG5vcm1TcSA9IChhKSA9PiBhWzBdICogYVswXSArIGFbMV0gKiBhWzFdICsgYVsyXSAqIGFbMl07XG5jb25zdCBub3JtYWxpemUgPSAoYSkgPT4ge1xuICBjb25zdCBsZW5ndGggPSBub3JtKGEpO1xuICBpZiAobGVuZ3RoID09PSAwKSByZXR1cm4gYTtcbiAgcmV0dXJuIFthWzBdIC8gbGVuZ3RoLCBhWzFdIC8gbGVuZ3RoLCBhWzJdIC8gbGVuZ3RoXTtcbn07XG5jb25zdCBpc051bGwgPSAoYSkgPT4gYVswXSAqIGFbMF0gKyBhWzFdICogYVsxXSArIGFbMl0gKiBhWzJdID09PSAwO1xuXG5jb25zdCBpc0VxdWFsID0gKGEsIGIpID0+IGFbMF0gPT0gYlswXSAmJiBhWzFdID09IGJbMV0gJiYgYVsyXSA9PSBiWzJdO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc3VtLFxuICBkaWZmLFxuICBzY2FsZSxcbiAgZG90LFxuICBjcm9zcyxcbiAgbm9ybSxcbiAgbm9ybVNxLFxuICBub3JtYWxpemUsXG4gIGlzRXF1YWwsXG4gIGlzTnVsbCxcbn07XG4iLCJpbXBvcnQgeyBKb2ludCwgSm9pbnRQb3NpdGlvbkNvbnN0cmFpbnQgfSBmcm9tIFwiLi4vc3JjL3BoeXNpY3MvY29uc3RyYWludHNcIjtcclxuaW1wb3J0IHsgUmlnaWRCb2R5IH0gZnJvbSBcIi4uL3NyYy9waHlzaWNzL1JpZ2lkQm9keVwiO1xyXG5pbXBvcnQge3ZlYzN9IGZyb20gJ21hdGgnXHJcbmltcG9ydCB7IEJveCwgQ3lsaW5kZXIsIFNwaGVyZX0gZnJvbSBcIi4uL3NyYy9waHlzaWNzL2NvbGxpZGVyXCI7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJhZ2RvbGx7XHJcbiAgICBjb25zdHJ1Y3Rvcihwb3MgPSBbMCwwLDBdKXtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBib2R5ID0gbmV3IFJpZ2lkQm9keShuZXcgQm94KDEsIDIsIDAuNSkpO1xyXG4gICAgICAgIGNvbnN0IGxlZnRIYW5kID0gbmV3IFJpZ2lkQm9keShuZXcgQ3lsaW5kZXIoMC40LCAyLCAwLjUpKTtcclxuICAgICAgICBjb25zdCByaWdodEhhbmQgPSBuZXcgUmlnaWRCb2R5KG5ldyBDeWxpbmRlcigwLjQsIDIsIDAuNSkpO1xyXG4gICAgICAgIGNvbnN0IGxlZnRMZWcgPSBuZXcgUmlnaWRCb2R5KG5ldyBDeWxpbmRlcigwLjQsIDIsIDAuNSkpO1xyXG4gICAgICAgIGNvbnN0IHJpZ2h0TGVnID0gbmV3IFJpZ2lkQm9keShuZXcgQ3lsaW5kZXIoMC40LCAyLCAwLjUpKTtcclxuICAgICAgICBjb25zdCBoZWFkID0gbmV3IFJpZ2lkQm9keShuZXcgU3BoZXJlKDEsIDEsIDEpKTtcclxuICAgICAgICBjb25zdCBjb25zdHJhaW50cyA9IFtcclxuICAgICAgICAgIG5ldyBKb2ludChib2R5LCBoZWFkLCBbMCwgMS41LCAwXSwgWzAsIC0xLCAwXSwgMCksXHJcbiAgICAgICAgICBuZXcgSm9pbnQoYm9keSwgbGVmdEhhbmQsIFsxLCAxLCAwXSwgWzAsIDEsIDBdLCAwKSxcclxuICAgICAgICAgIG5ldyBKb2ludChib2R5LCByaWdodEhhbmQsIFstMSwgMSwgMF0sIFswLCAxLCAwXSwgMCksXHJcbiAgICAgICAgICBuZXcgSm9pbnQoYm9keSwgcmlnaHRMZWcsIFstMC41LCAtMS4yLCAwXSwgWzAsIDEuMiwgMF0sIDApLFxyXG4gICAgICAgICAgbmV3IEpvaW50KGJvZHksIGxlZnRMZWcsIFswLjUsIC0xLjIsIDBdLCBbMCwgMS4yLCAwXSwgMCksXHJcbiAgICAgICAgXTtcclxuICAgICAgICBjb25zdCBwb3NpdGlvbkNvbnN0cmFpbnRzID0gW1xyXG4gICAgICAgICAgbmV3IEpvaW50UG9zaXRpb25Db25zdHJhaW50KGJvZHksIGhlYWQsIFswLCAxLjUsIDBdLCBbMCwgLTEsIDBdLCAwLjIpLFxyXG4gICAgICAgICAgbmV3IEpvaW50UG9zaXRpb25Db25zdHJhaW50KGJvZHksIGxlZnRIYW5kLCBbMSwgMSwgMF0sIFswLCAxLCAwXSwgMC4yKSxcclxuICAgICAgICAgIG5ldyBKb2ludFBvc2l0aW9uQ29uc3RyYWludChib2R5LCByaWdodEhhbmQsIFstMSwgMSwgMF0sIFswLCAxLCAwXSwgMC4yKSxcclxuICAgICAgICAgIG5ldyBKb2ludFBvc2l0aW9uQ29uc3RyYWludChcclxuICAgICAgICAgICAgYm9keSxcclxuICAgICAgICAgICAgcmlnaHRMZWcsXHJcbiAgICAgICAgICAgIFstMC41LCAtMS4yLCAwXSxcclxuICAgICAgICAgICAgWzAsIDEuMiwgMF0sXHJcbiAgICAgICAgICAgIDAuMlxyXG4gICAgICAgICAgKSxcclxuICAgICAgICAgIG5ldyBKb2ludFBvc2l0aW9uQ29uc3RyYWludChcclxuICAgICAgICAgICAgYm9keSxcclxuICAgICAgICAgICAgbGVmdExlZyxcclxuICAgICAgICAgICAgWzAuNSwgLTEuMiwgMF0sXHJcbiAgICAgICAgICAgIFswLCAxLjIsIDBdLFxyXG4gICAgICAgICAgICAwLjJcclxuICAgICAgICAgICksXHJcbiAgICAgICAgXTtcclxuICAgICAgICAvL3Bvc2l0aW9uQ29uc3RyYWludHMuZm9yRWFjaChjID0+Yy50cmVzaG9sZCA9IDAuMSlcclxuICAgICAgICBib2R5LnRyYW5zbGF0ZShwb3MpO1xyXG4gICAgICBcclxuICAgICAgICBoZWFkLnRyYW5zbGF0ZSh2ZWMzLnN1bShwb3MsIFswLCAyLCAwXSkpO1xyXG4gICAgICAgIGxlZnRIYW5kLnRyYW5zbGF0ZSh2ZWMzLnN1bShwb3MsIFstMywgMiwgMF0pKTtcclxuICAgICAgICByaWdodEhhbmQudHJhbnNsYXRlKHZlYzMuc3VtKHBvcywgWzMsIDIsIDBdKSk7XHJcbiAgICAgICAgcmlnaHRMZWcudHJhbnNsYXRlKHZlYzMuc3VtKHBvcywgWzIsIC0yLjUsIDBdKSk7XHJcbiAgICAgICAgbGVmdExlZy50cmFuc2xhdGUodmVjMy5zdW0ocG9zLCBbLTIsIC0yLjUsIDBdKSk7XHJcbiAgICAgICAgcG9zaXRpb25Db25zdHJhaW50cy5mb3JFYWNoKChjKSA9PiAoYy50cmVzaG9sZCA9IDAuMDUpKTtcclxuICAgICAgICB0aGlzLnBhcnRzID0ge2JvZHksIGxlZnRIYW5kLCByaWdodEhhbmQsIHJpZ2h0TGVnLCBsZWZ0TGVnLCBoZWFkfVxyXG4gICAgICAgIHRoaXMuY29uc3RyYWludHMgPSBjb25zdHJhaW50c1xyXG4gICAgICAgIHRoaXMucG9zaXRpb25Db25zdHJhaW50cyA9IHBvc2l0aW9uQ29uc3RyYWludHNcclxuICAgIH1cclxufSIsImltcG9ydCB7IFByb2dyYW1JbmZvIH0gZnJvbSBcImdyYXBoaWNzXCI7XHJcbmNvbnN0IGdsc2wgPSB4PT54XHJcblxyXG5cclxuY29uc3QgdmVydCA9IGdsc2xgI3ZlcnNpb24gMzAwIGVzXHJcbiBcclxubGF5b3V0KGxvY2F0aW9uID0gMCkgaW4gdmVjNCBhX3Bvc2l0aW9uO1xyXG5sYXlvdXQobG9jYXRpb24gPSAxKSBpbiB2ZWMzIGFfbm9ybWFsO1xyXG5cclxuXHJcblxyXG51bmlmb3JtIG1hdDQgd29ybGRNYXRyaXg7XHJcbnVuaWZvcm0gbWF0NCB3b3JsZFZpZXdQcm9qZWN0aW9uO1xyXG51bmlmb3JtIHZlYzMgdV9saWdodFdvcmxkUG9zaXRpb247XHJcbnVuaWZvcm0gdmVjMyB1X3ZpZXdXb3JsZFBvc2l0aW9uO1xyXG51bmlmb3JtIG1hdDQgd29ybGRJbnZlcnNlVHJhbnNwb3NlO1xyXG5vdXQgdmVjMyB2X25vcm1hbDtcclxub3V0IHZlYzMgdl9zdXJmYWNlVG9MaWdodDtcclxub3V0IHZlYzMgdl9zdXJmYWNlVG9WaWV3O1xyXG5cclxudm9pZCBtYWluKCkge1xyXG5cclxuICAgIHZlYzMgc3VyZmFjZVdvcmxkUG9zaXRpb24gPSAod29ybGRNYXRyaXggKiBhX3Bvc2l0aW9uKS54eXo7XHJcbiAgICB2X3N1cmZhY2VUb0xpZ2h0ID0gdV9saWdodFdvcmxkUG9zaXRpb24gLSBzdXJmYWNlV29ybGRQb3NpdGlvbjtcclxuICAgIHZfc3VyZmFjZVRvVmlldyA9IHVfdmlld1dvcmxkUG9zaXRpb24gLSBzdXJmYWNlV29ybGRQb3NpdGlvbjtcclxuICAgIHZlYzQgcG9zID0gd29ybGRWaWV3UHJvamVjdGlvbiAqIGFfcG9zaXRpb247XHJcbiAgICBnbF9Qb3NpdGlvbiA9IHBvcztcclxuXHJcbiAgIFxyXG4gICAgdl9ub3JtYWwgPSBtYXQzKHdvcmxkSW52ZXJzZVRyYW5zcG9zZSkgKiBhX25vcm1hbDtcclxuICAgXHJcbiAgICAgIFxyXG59YFxyXG5jb25zdCBmcmFnID0gZ2xzbGAjdmVyc2lvbiAzMDAgZXNcclxucHJlY2lzaW9uIGhpZ2hwIGZsb2F0O1xyXG4gXHJcblxyXG5cclxuaW4gdmVjMyB2X25vcm1hbDtcclxuaW4gdmVjMyB2X3N1cmZhY2VUb1ZpZXc7XHJcbmluIHZlYzMgdl9zdXJmYWNlVG9MaWdodDtcclxuXHJcblxyXG4vL3VuaWZvcm0gc2FtcGxlcjJEIHVfdGV4dHVyZTE7XHJcbnVuaWZvcm0gZmxvYXQgdV9zaGluaW5lc3M7XHJcbnVuaWZvcm0gdmVjNCB1X2NvbG9yO1xyXG51bmlmb3JtIHZlYzQgdV9hbWJpZW50TGlnaHQ7XHJcbm91dCB2ZWM0IG91dENvbG9yO1xyXG5cclxuXHJcbnZvaWQgbWFpbigpIHtcclxuICBcclxuICB2ZWMzIHN1cmZhY2VUb0xpZ2h0RGlyZWN0aW9uID0gbm9ybWFsaXplKHZfc3VyZmFjZVRvTGlnaHQpO1xyXG4gIHZlYzMgc3VyZmFjZVRvVmlld0RpcmVjdGlvbiA9IG5vcm1hbGl6ZSh2X3N1cmZhY2VUb1ZpZXcpO1xyXG4gIHZlYzMgaGFsZlZlY3RvciA9IG5vcm1hbGl6ZShzdXJmYWNlVG9MaWdodERpcmVjdGlvbiAtIHN1cmZhY2VUb1ZpZXdEaXJlY3Rpb24pO1xyXG5cclxuICB2ZWMzIG5vcm1hbCA9IG5vcm1hbGl6ZSh2X25vcm1hbCk7XHJcbiAgZmxvYXQgbGlnaHQgPSBkb3Qodl9ub3JtYWwsIHN1cmZhY2VUb0xpZ2h0RGlyZWN0aW9uKTtcclxuICBmbG9hdCBzcGVjdWxhciA9IDAuMDtcclxuICBpZiAobGlnaHQgPiAwLjApIHtcclxuICAgIHNwZWN1bGFyID0gcG93KGRvdChub3JtYWwsIGhhbGZWZWN0b3IpLCB1X3NoaW5pbmVzcyk7XHJcbiAgfVxyXG4gXHJcbiAgb3V0Q29sb3IgPSAgdV9jb2xvcjtcclxuICBvdXRDb2xvci5yZ2IgKj0gbGlnaHQ7XHJcbiAgXHJcbiAgb3V0Q29sb3IgKz0gdV9hbWJpZW50TGlnaHQgKiAwLjE7XHJcbiAgXHJcbn1cclxuYFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IFByb2dyYW1JbmZvKHZlcnQsIGZyYWcpIiwiaW1wb3J0IHttMywgdmVjMywgbTR9IGZyb20gJ21hdGgnXHJcbmNvbnN0IEtFWVMgPSB7XHJcbiAgICAndycgOiAnbW92ZUZvcndhcmQnLFxyXG4gICAgJ3MnIDogJ21vdmVCYWNrd2FyZCcsXHJcbiAgICAnYScgOiAnbW92ZUxlZnQnLFxyXG4gICAgJ2QnIDogJ21vdmVSaWdodCcsXHJcbiAgICAnICcgOiAnbW92ZVVwJ1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250cm9sbGFibGV7XHJcbiAgICBjb25zdHJ1Y3RvcihyaWdpZEJvZHkpe1xyXG5cclxuICAgICAgICB0aGlzLnJpZ2lkQm9keSA9IHJpZ2lkQm9keVxyXG4gICAgICAgIHRoaXMua2V5SW5wdXQgPSBudWxsXHJcbiAgICAgICAgdGhpcy5tb3VzZUlucHV0ID0gbnVsbFxyXG4gICAgICAgIHRoaXMucm90YXRpb25YID0gMFxyXG4gICAgICAgIHRoaXMucm90YXRpb25ZID0gMFxyXG4gICAgICAgIHRoaXMuZGVsdGFSWSA9IDBcclxuICAgICAgICB0aGlzLmNhbVBvcyA9IFswLDAsMTBdXHJcbiAgICAgICAgdGhpcy5jYW1Sb3QgPSBtMy5pZGVudGl0eSgpXHJcbiAgICAgICAgdGhpcy5qdW1wUmVhZHkgPSB0cnVlXHJcbiAgICB9XHJcbiAgICBsaXN0ZW5Nb3VzZShtb3VzZUlucHV0KXtcclxuICAgICAgICB0aGlzLm1vdXNlSW5wdXQgPSBtb3VzZUlucHV0XHJcbiAgICAgICAgbW91c2VJbnB1dC5vbignbW92ZScsIChbZGVsdGFYLCBkZWx0YVldKT0+e1xyXG4gICAgICAgICAgICB0aGlzLnJvdGF0aW9uWSAtPSBkZWx0YVggKiAwLjAwNTtcclxuICAgICAgICAgICAgdGhpcy5yb3RhdGlvblggLT0gZGVsdGFZICogMC4wMDU7XHJcbiAgICAgICAgICAgIHRoaXMucm90YXRpb25YID0gTWF0aC5tYXgoLU1hdGguUEkvMiwgTWF0aC5taW4oTWF0aC5QSS8yLCB0aGlzLnJvdGF0aW9uWCkpXHJcbiAgICAgICAgICAgIHRoaXMuZGVsdGFSWSA9IGRlbHRhWCAqIDAuMDA1O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgbGlzdGVuS2V5Ym9hcmQoa2V5SW5wdXQpe1xyXG4gICAgICAgIHRoaXMua2V5SW5wdXQgPSBrZXlJbnB1dFxyXG4gICAgfVxyXG4gICAgdGljaygpe1xyXG5cclxuICAgICAgICBmb3IoY29uc3Qga2V5IG9mIHRoaXMua2V5SW5wdXQua2V5cyl7XHJcbiAgICAgICAgICAgIGNvbnN0IGFjdGlvbk5hbWUgPSBLRVlTW2tleV1cclxuICAgICAgICAgICAgaWYoYWN0aW9uTmFtZSl7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhY3Rpb24gPSB0aGlzW2FjdGlvbk5hbWVdLmJpbmQodGhpcylcclxuICAgICAgICAgICAgICAgIGFjdGlvbigpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IG0gPSBtMy55Um90YXRpb24odGhpcy5yb3RhdGlvblkpXHJcbiAgICAgICAgdGhpcy5yaWdpZEJvZHkucm90YXRlKFswLCAtdGhpcy5kZWx0YVJZLDBdKVxyXG4gICAgICAgIHRoaXMuZGVsdGFSWSA9IDBcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBwb3MgPSBbLi4udGhpcy5yaWdpZEJvZHkuY29sbGlkZXIucG9zXVxyXG4gICAgICAgIGxldCBfbSA9IG00LnRyYW5zbGF0aW9uKHBvc1swXSwgcG9zWzFdKzMsIHBvc1syXSlcclxuICAgICAgICBfbSA9IG00Lm11bHRpcGx5KF9tLCBtNC5tM1RvbTQodGhpcy5yaWdpZEJvZHkuY29sbGlkZXIuUm1hdHJpeCkpXHJcbiAgICAgICAgX20gPSBtNC54Um90YXRlKF9tLCB0aGlzLnJvdGF0aW9uWClcclxuICAgICAgICBfbSA9IG00LnRyYW5zbGF0ZShfbSwgLi4udGhpcy5jYW1Qb3MpXHJcbiAgICAgICAgdGhpcy5jYW1NYXRyaXggPSBfbVxyXG4gICAgIFxyXG4gICAgfVxyXG4gICAgZ2V0QWJzb2x1dGVDYW1Qb3MoKXtcclxuICAgICAgICByZXR1cm4gdmVjMy5zdW0odGhpcy5yaWdpZEJvZHkuY29sbGlkZXIucG9zLCB0aGlzLmNhbVBvcylcclxuICAgIH1cclxuICAgIG1vdmUoZGlyKXtcclxuICAgICAgICBjb25zdCBtID0gbTQueVJvdGF0aW9uKHRoaXMucm90YXRpb25YKVxyXG4gICAgICAgIHRoaXMucmlnaWRCb2R5LmFwcGx5SW1wdWxzZShkaXIsIFswLDAsMF0pXHJcbiAgICB9XHJcbiAgICBtb3ZlRm9yd2FyZCgpe1xyXG4gICAgICAgIHRoaXMubW92ZShbMCwwLCAtMV0pXHJcbiAgICB9XHJcbiAgICBtb3ZlQmFja3dhcmQoKXtcclxuICAgICAgICB0aGlzLm1vdmUoWzAsMCwgMV0pXHJcbiAgICB9XHJcbiAgICBtb3ZlTGVmdCgpe1xyXG4gICAgICAgIHRoaXMubW92ZShbLTEsMCwgMF0pXHJcbiAgICB9XHJcbiAgICBtb3ZlUmlnaHQoKXtcclxuICAgICAgICB0aGlzLm1vdmUoWzEsMCwgMF0pXHJcbiAgICB9XHJcbiAgICBtb3ZlVXAoKXtcclxuICAgICAgICBpZih0aGlzLmp1bXBSZWFkeSl7XHJcbiAgICAgICAgICAgIHRoaXMubW92ZShbMCwxMCwwXSlcclxuICAgICAgICAgICAgdGhpcy5qdW1wUmVhZHkgPSBmYWxzZVxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT50aGlzLmp1bXBSZWFkeSA9IHRydWUsIDEwMDApXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG59XHJcbmNsYXNzIE5vY2xpcHtcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgdGhpcy5rZXlJbnB1dCA9IG51bGxcclxuICAgICAgICB0aGlzLm1vdXNlSW5wdXQgPSBudWxsXHJcbiAgICAgICAgdGhpcy5yb3RhdGlvblggPSAwXHJcbiAgICAgICAgdGhpcy5yb3RhdGlvblkgPSAwXHJcbiAgICAgICAgdGhpcy5kZWx0YVJZID0gMFxyXG4gICAgICAgIHRoaXMuY2FtUG9zID0gWzAsMCwxMF1cclxuICAgICAgICB0aGlzLmNhbVJvdCA9IG0zLmlkZW50aXR5KClcclxuICAgIH1cclxuICAgIGxpc3Rlbk1vdXNlKG1vdXNlSW5wdXQpe1xyXG4gICAgICAgIHRoaXMubW91c2VJbnB1dCA9IG1vdXNlSW5wdXRcclxuICAgICAgICBtb3VzZUlucHV0Lm9uKCdtb3ZlJywgKFtkZWx0YVgsIGRlbHRhWV0pPT57XHJcbiAgICAgICAgICAgIHRoaXMucm90YXRpb25ZIC09IGRlbHRhWCAqIDAuMDA1O1xyXG4gICAgICAgICAgICB0aGlzLnJvdGF0aW9uWCAtPSBkZWx0YVkgKiAwLjAwNTtcclxuICAgICAgICAgICAgdGhpcy5yb3RhdGlvblggPSBNYXRoLm1heCgtTWF0aC5QSS8yLCBNYXRoLm1pbihNYXRoLlBJLzIsIHRoaXMucm90YXRpb25YKSlcclxuICAgICAgICAgICAgdGhpcy5kZWx0YVJZID0gZGVsdGFYICogMC4wMDU7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBsaXN0ZW5LZXlib2FyZChrZXlJbnB1dCl7XHJcbiAgICAgICAgdGhpcy5rZXlJbnB1dCA9IGtleUlucHV0XHJcbiAgICB9XHJcbiAgICB0aWNrKCl7XHJcblxyXG4gICAgICAgIGZvcihjb25zdCBrZXkgb2YgdGhpcy5rZXlJbnB1dC5rZXlzKXtcclxuICAgICAgICAgICAgY29uc3QgYWN0aW9uTmFtZSA9IEtFWVNba2V5XVxyXG4gICAgICAgICAgICBpZihhY3Rpb25OYW1lKXtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFjdGlvbiA9IHRoaXNbYWN0aW9uTmFtZV0uYmluZCh0aGlzKVxyXG4gICAgICAgICAgICAgICAgYWN0aW9uKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5jYW1NYXRyaXggPSBtNC50cmFuc2xhdGlvbiguLi50aGlzLmNhbVBvcylcclxuICAgICAgICB0aGlzLmNhbU1hdHJpeCA9IG00LnhSb3RhdGUobTQueVJvdGF0ZSh0aGlzLmNhbU1hdHJpeCwgdGhpcy5yb3RhdGlvblkpLCB0aGlzLnJvdGF0aW9uWClcclxuICAgICBcclxuICAgIH1cclxuICAgIG1vdmUoZGlyKXtcclxuICAgICAgICBjb25zdCBtID0gbTQubTRUb20zKHRoaXMuY2FtTWF0cml4KVxyXG4gICAgICAgIHRoaXMuY2FtUG9zID0gdmVjMy5zdW0odGhpcy5jYW1Qb3MsIG0zLnRyYW5zZm9ybVBvaW50KG0sIGRpcikpXHJcbiAgICB9XHJcbiAgICBtb3ZlRm9yd2FyZCgpe1xyXG4gICAgICAgIHRoaXMubW92ZShbMCwwLCAtMV0pXHJcbiAgICB9XHJcbiAgICBtb3ZlQmFja3dhcmQoKXtcclxuICAgICAgICB0aGlzLm1vdmUoWzAsMCwgMV0pXHJcbiAgICB9XHJcbiAgICBtb3ZlTGVmdCgpe1xyXG4gICAgICAgIHRoaXMubW92ZShbLTEsMCwgMF0pXHJcbiAgICB9XHJcbiAgICBtb3ZlUmlnaHQoKXtcclxuICAgICAgICB0aGlzLm1vdmUoWzEsMCwgMF0pXHJcbiAgICB9XHJcbiAgICBtb3ZlVXAoKXtcclxuICAgICAgICB0aGlzLm1vdmUoWzAsMSwgMF0pXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IHtOb2NsaXAsIENvbnRyb2xsYWJsZX0iLCJpbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tIFwiLi4vcGh5c2ljcy9ldmVudEVtaXR0ZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEtleUlucHV0IGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKClcclxuICAgIHRoaXMua2V5cyA9IG5ldyBTZXQoKTtcclxuICB9XHJcbiAgbG9nRG93bih7IGtleSB9KSB7XHJcbiAgICB0aGlzLmtleXMuYWRkKGtleSk7XHJcbiAgICB0aGlzLmVtaXQoXCJrZXlkb3duXCIsIHsga2V5IH0pO1xyXG4gIH1cclxuICBsb2dVcCh7IGtleSB9KSB7XHJcbiAgICB0aGlzLmtleXMuZGVsZXRlKGtleSk7XHJcbiAgICB0aGlzLmVtaXQoXCJrZXl1cFwiLCB7IGtleSB9KTtcclxuICB9XHJcbiAgbGlzdGVuKCkge1xyXG4gICAgY29uc3QgbG9nRG93biA9IHRoaXMubG9nRG93bi5iaW5kKHRoaXMpO1xyXG4gICAgY29uc3QgbG9nVXAgPSB0aGlzLmxvZ1VwLmJpbmQodGhpcyk7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBsb2dEb3duKTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBsb2dVcCk7XHJcbiAgICB0aGlzLnVuc3Vic2ljcmliZSA9ICgpID0+IHtcclxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgbG9nRG93bik7XHJcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBsb2dVcCk7XHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tIFwiLi4vcGh5c2ljcy9ldmVudEVtaXR0ZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vdXNlSW5wdXQgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMubGFzdFggPSAwO1xyXG4gICAgdGhpcy5sYXN0WSA9IDA7XHJcbiAgICB0aGlzLmVuYWJsZSA9IGZhbHNlO1xyXG4gICAgdGhpcy5tb3ZlcyA9IFtdXHJcbiAgfVxyXG4gIGxvZ01vdmUoeyBvZmZzZXRYLCBvZmZzZXRZIH0pIHtcclxuICAgIGNvbnN0IGRlbHRhWCA9IG9mZnNldFggLSB0aGlzLmxhc3RYO1xyXG4gICAgdGhpcy5sYXN0WCA9IG9mZnNldFg7XHJcbiAgICBjb25zdCBkZWx0YVkgPSBvZmZzZXRZIC0gdGhpcy5sYXN0WTtcclxuICAgIHRoaXMubGFzdFkgPSBvZmZzZXRZO1xyXG4gICAgdGhpcy5lbWl0KFwibW92ZVwiLCBbZGVsdGFYLCBkZWx0YVldKTtcclxuICAgIHRoaXMubW92ZXMucHVzaChbZGVsdGFYLCBkZWx0YVldKVxyXG4gIH1cclxuICBsaXN0ZW4oKSB7XHJcbiAgICBjb25zdCBsb2dNb3ZlID0gdGhpcy5sb2dNb3ZlLmJpbmQodGhpcyk7XHJcbiAgICBjb25zdCBfID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgaWYgKHRoaXMuZW5hYmxlKSBsb2dNb3ZlKGUpO1xyXG4gICAgfS5iaW5kKHRoaXMpO1xyXG4gICAgY29uc3QgZG93biA9IGZ1bmN0aW9uICh7IG9mZnNldFgsIG9mZnNldFkgfSkge1xyXG4gICAgICB0aGlzLmxhc3RYID0gb2Zmc2V0WDtcclxuICAgICAgdGhpcy5sYXN0WSA9IG9mZnNldFk7XHJcbiAgICAgIHRoaXMuZW5hYmxlID0gdHJ1ZTtcclxuICAgIH0uYmluZCh0aGlzKTtcclxuICAgIGNvbnN0IHVwID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICB0aGlzLmVuYWJsZSA9IGZhbHNlO1xyXG4gICAgfS5iaW5kKHRoaXMpO1xyXG5cclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgXyk7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGRvd24pO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgdXApO1xyXG4gICAgdGhpcy51bnN1YnNjcmliZSA9ICgpID0+IHtcclxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBfKTtcclxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBkb3duKTtcclxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgdXApO1xyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSBcIi4vZXZlbnRFbWl0dGVyXCI7XHJcbmltcG9ydCB7IG0zLCB2ZWMzIH0gZnJvbSBcIm1hdGhcIjtcclxuY29uc3QgeyBjcm9zcywgc2NhbGUsIG5vcm0sIHN1bSwgZGlmZiwgbm9ybWFsaXplIH0gPSB2ZWMzO1xyXG5jb25zdCBwcmVjID0gMC4wMDAxO1xyXG5jb25zdCBzdG9wVHJlc2hvbGQgPSAwLjAwNTtcclxuY2xhc3MgUmlnaWRCb2R5IGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcclxuICBzdGF0aWMgY29uZmlnID0ge1xyXG4gICAgdHJlc2hvbGQgOiAwLjAwNSxcclxuICAgIHByZWNpc2lvbiA6IDAuMDAwMVxyXG4gIH1cclxuICBzdGF0aWMgc2V0VHJlc2hvbGQodHJlc2hvbGQpe1xyXG4gICAgUmlnaWRCb2R5LmNvbmZpZy50cmVzaG9sZCA9IHRyZXNob2xkXHJcbiAgfVxyXG4gIGNvbnN0cnVjdG9yKGNvbGxpZGVyKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5ET0YgPSBbMSwgMSwgMSwgMSwgMSwgMV07XHJcbiAgICB0aGlzLnN0YXRpYyA9IGZhbHNlO1xyXG4gICAgdGhpcy5jb2xsaWRlciA9IGNvbGxpZGVyO1xyXG4gICAgdGhpcy5tYXNzID0gMTtcclxuICAgIHRoaXMuaW52ZXJzZU1hc3MgPSAxIC8gdGhpcy5tYXNzO1xyXG4gICAgdGhpcy52ZWxvY2l0eSA9IFswLCAwLCAwXTtcclxuICAgIHRoaXMucHNldWRvVmVsb2NpdHkgPSBbMCwgMCwgMF07XHJcbiAgICB0aGlzLnBzZXVkb0FuZ3VsYXJWID0gWzAsIDAsIDBdO1xyXG4gICAgdGhpcy5hY2NlbGVyYXRpb24gPSBbMCwgMCwgMF07XHJcbiAgICB0aGlzLmFuZ3VsYXJWID0gWzAsIDAsIDBdO1xyXG4gICAgdGhpcy5pbnZlcnNlSW5lcnRpYSA9IGNvbGxpZGVyLmdldEludmVyc2VJbmVydGlhVGVuc29yKHRoaXMubWFzcyk7XHJcbiAgICB0aGlzLmlkID0gMTtcclxuICAgIHRoaXMuZnJpY3Rpb24gPSAwLjU7XHJcbiAgICB0aGlzLkJWbGluaztcclxuICAgIHRoaXMub2xkVmVsb2NpdHkgPSBudWxsO1xyXG4gICAgdGhpcy5ncm91cCA9IG51bGw7XHJcbiAgICB0aGlzLm5lZWRUb1VwZGF0ZSA9IGZhbHNlXHJcbiAgfVxyXG5cclxuICBpbnRlZ3JhdGVSSzQoZHQpIHtcclxuICAgIGNvbnN0IHsgYWNjZWxlcmF0aW9uLCB2ZWxvY2l0eSwgYW5ndWxhclYgfSA9IHRoaXM7XHJcbiAgICBjb25zdCB7dHJlc2hvbGR9ID0gUmlnaWRCb2R5LmNvbmZpZ1xyXG4gICAgY29uc3QgX3RyYW5zbGF0aW9uID0gc2NhbGUoXHJcbiAgICAgIHN1bSh2ZWxvY2l0eSwgc2NhbGUoYWNjZWxlcmF0aW9uLCAoMiAvIDMpICogZHQpKSxcclxuICAgICAgZHRcclxuICAgICk7XHJcbiAgICBjb25zdCBfcm90YXRpb24gPSBzY2FsZShhbmd1bGFyViwgZHQpO1xyXG4gICAgY29uc3QgZGVsdGFWZWxvY2l0eSA9IHNjYWxlKGFjY2VsZXJhdGlvbiwgZHQpO1xyXG5cclxuICAgIGlmIChub3JtKF90cmFuc2xhdGlvbikgPiB0cmVzaG9sZCkgdGhpcy50cmFuc2xhdGUoX3RyYW5zbGF0aW9uKTtcclxuXHJcbiAgICBpZiAobm9ybShfcm90YXRpb24pID4gdHJlc2hvbGQpIHRoaXMucm90YXRlKF9yb3RhdGlvbik7XHJcbiAgICB0aGlzLnZlbG9jaXR5ID0gc3VtKHZlbG9jaXR5LCBkZWx0YVZlbG9jaXR5KTtcclxuICB9XHJcbiAgaW50ZWdyYXRlUHNldWRvVmVsb2NpdGllcyhkdCkge1xyXG4gICAgY29uc3Qge3RyZXNob2xkfSA9IFJpZ2lkQm9keS5jb25maWdcclxuICAgIGNvbnN0IHRyYW5zbGF0aW9uID0gc2NhbGUodGhpcy5wc2V1ZG9WZWxvY2l0eSwgZHQpO1xyXG5cclxuICAgIGNvbnN0IHJvdGF0aW9uID0gc2NhbGUodGhpcy5wc2V1ZG9Bbmd1bGFyViwgZHQpO1xyXG4gICAgaWYgKG5vcm0odHJhbnNsYXRpb24pID4gdHJlc2hvbGQpIHRoaXMudHJhbnNsYXRlKHRyYW5zbGF0aW9uKTtcclxuXHJcbiAgICBpZiAobm9ybShyb3RhdGlvbikgPiB0cmVzaG9sZCkgdGhpcy5yb3RhdGUocm90YXRpb24pO1xyXG5cclxuICAgIHRoaXMucHNldWRvVmVsb2NpdHkgPSBbMCwgMCwgMF07XHJcbiAgICB0aGlzLnBzZXVkb0FuZ3VsYXJWID0gWzAsIDAsIDBdO1xyXG4gIH1cclxuICBhZGRQc2V1ZG9WZWxvY2l0eSh2KSB7XHJcbiAgICB0aGlzLnBzZXVkb1ZlbG9jaXR5ID0gc3VtKHRoaXMucHNldWRvVmVsb2NpdHksIHYpO1xyXG4gIH1cclxuICBhZGRQc2V1ZG9Bbmd1bGFyVih2KSB7XHJcbiAgICB0aGlzLnBzZXVkb0FuZ3VsYXJWID0gc3VtKHRoaXMucHNldWRvQW5ndWxhclYsIHYpO1xyXG4gIH1cclxuICBpbnRlZ3JhdGVWZWxvY2l0aWVzKGR0KSB7XHJcbiAgICBjb25zdCB7dHJlc2hvbGR9ID0gUmlnaWRCb2R5LmNvbmZpZ1xyXG4gICAgY29uc3QgdHJhbnNsYXRpb24gPSBzY2FsZSh0aGlzLnZlbG9jaXR5LCBkdCk7XHJcbiAgICBpZiAobm9ybSh0cmFuc2xhdGlvbikgPiB0cmVzaG9sZCkgdGhpcy50cmFuc2xhdGUodHJhbnNsYXRpb24pO1xyXG4gICAgY29uc3Qgcm90YXRpb24gPSBzY2FsZSh0aGlzLmFuZ3VsYXJWLCBkdCk7XHJcbiAgICBpZiAobm9ybShyb3RhdGlvbikgPiB0cmVzaG9sZCkgdGhpcy5yb3RhdGUocm90YXRpb24pO1xyXG4gIH1cclxuICBpbnRlZ3JhdGVGb3JjZXMoZHQpIHtcclxuICAgIGxldCBkZWx0YVNwZWVkID0gc2NhbGUodGhpcy5hY2NlbGVyYXRpb24sIGR0KTtcclxuXHJcbiAgICB0aGlzLnZlbG9jaXR5ID0gc3VtKHRoaXMudmVsb2NpdHksIGRlbHRhU3BlZWQpO1xyXG4gIH1cclxuICB1cGRhdGVJbnZlcnNlSW5lcnRpYSgpIHtcclxuICAgIHRoaXMuaW52ZXJzZUluZXJ0aWEgPSB0aGlzLmNvbGxpZGVyLmdldEludmVyc2VJbmVydGlhVGVuc29yKHRoaXMubWFzcyk7XHJcbiAgfVxyXG4gIGdldEl0ZW5zb3IoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jb2xsaWRlci5nZXRJbnZlcnNlSW5lcnRpYVRlbnNvcih0aGlzLm1hc3MpO1xyXG4gIH1cclxuICBzZXRNYXNzKG1hc3MpIHtcclxuICAgIHRoaXMubWFzcyA9IG1hc3M7XHJcbiAgICB0aGlzLmludmVyc2VNYXNzID0gMSAvIHRoaXMubWFzcztcclxuICB9XHJcbiAgdHJhbnNsYXRlKHRyYW5zbGF0aW9uKSB7XHJcbiAgICB0aGlzLmNvbGxpZGVyLnRyYW5zbGF0ZSh0cmFuc2xhdGlvbik7XHJcblxyXG4gICAgdGhpcy5uZWVkVG9VcGRhdGUgPSB0cnVlXHJcbiAgICB0aGlzLmVtaXQoXCJ1cGRhdGVcIik7XHJcbiAgfVxyXG4gIHJvdGF0ZShyb3RhdGlvbikge1xyXG4gICAgdGhpcy5jb2xsaWRlci5yb3RhdGUocm90YXRpb24pO1xyXG4gICAgdGhpcy5uZWVkVG9VcGRhdGUgPSB0cnVlXHJcbiAgICB0aGlzLmVtaXQoXCJ1cGRhdGVcIik7XHJcbiAgfVxyXG5cclxuICBhcHBseUltcHVsc2UoaW1wdWxzZSwgcG9pbnQpIHtcclxuICAgIGlmICh0aGlzLnN0YXRpYykgcmV0dXJuO1xyXG4gICAgdGhpcy52ZWxvY2l0eSA9IHN1bSh0aGlzLnZlbG9jaXR5LCBzY2FsZShpbXB1bHNlLCB0aGlzLmludmVyc2VNYXNzKSk7XHJcbiAgICBjb25zdCBhbmd1bGFySW1wdWxzZSA9IG0zLnRyYW5zZm9ybVBvaW50KFxyXG4gICAgICB0aGlzLmludmVyc2VJbmVydGlhLFxyXG4gICAgICBjcm9zcyhwb2ludCwgaW1wdWxzZSlcclxuICAgICk7XHJcbiAgICB0aGlzLmFuZ3VsYXJWID0gc3VtKHRoaXMuYW5ndWxhclYsIGFuZ3VsYXJJbXB1bHNlKTtcclxuICB9XHJcbiAgYXBwbHlQc2V1ZG9JbXB1bHNlKGltcHVsc2UsIHBvaW50KSB7XHJcbiAgICBpZiAodGhpcy5zdGF0aWMpIHJldHVybjtcclxuICAgIHRoaXMucHNldWRvVmVsb2NpdHkgPSBzdW0oXHJcbiAgICAgIHRoaXMucHNldWRvVmVsb2NpdHksXHJcbiAgICAgIHNjYWxlKGltcHVsc2UsIHRoaXMuaW52ZXJzZU1hc3MpXHJcbiAgICApO1xyXG4gICAgY29uc3QgYW5ndWxhckltcHVsc2UgPSBtMy50cmFuc2Zvcm1Qb2ludChcclxuICAgICAgdGhpcy5pbnZlcnNlSW5lcnRpYSxcclxuICAgICAgY3Jvc3MocG9pbnQsIGltcHVsc2UpXHJcbiAgICApO1xyXG4gICAgdGhpcy5wc2V1ZG9Bbmd1bGFyViA9IHN1bSh0aGlzLnBzZXVkb0FuZ3VsYXJWLCBhbmd1bGFySW1wdWxzZSk7XHJcbiAgfVxyXG4gIGFkZFZlbG9jaXR5KHYpIHtcclxuICAgIHRoaXMudmVsb2NpdHkgPSBzdW0odGhpcy52ZWxvY2l0eSwgdik7XHJcbiAgfVxyXG4gIGFkZEFuZ3VsYXJWKHYpIHtcclxuICAgIHRoaXMuYW5ndWxhclYgPSBzdW0odGhpcy5hbmd1bGFyViwgdik7XHJcbiAgfVxyXG4gIGFkZEFjY2VsZXJhdGlvbih2KSB7XHJcbiAgICB0aGlzLmFjY2VsZXJhdGlvbiA9IHN1bSh0aGlzLmFjY2VsZXJhdGlvbiwgdik7XHJcbiAgfVxyXG4gIGFwcGx5QW5ndWxhckltcHVsc2UocmFkaXVzLCBheGlzLCB2YWx1ZSkge1xyXG4gICAgY29uc3QgZGlyID0gbm9ybWFsaXplKFtcclxuICAgICAgYXhpc1sxXSArIGF4aXNbMl0sXHJcbiAgICAgIGF4aXNbMl0gLSBheGlzWzBdLFxyXG4gICAgICAtYXhpc1swXSAtIGF4aXNbMV0sXHJcbiAgICBdKTtcclxuICAgIGNvbnN0IHJhZCA9IHZlY3Rvci5jcm9zcyhkaXIsIGF4aXMpO1xyXG4gICAgY29uc3QgZ2xvYmFsRGlyID0gc2NhbGUoZGlyLCB2YWx1ZSk7XHJcbiAgICBjb25zdCBnbG9iYWxSYWQgPSBzY2FsZShyYWQsIHJhZGl1cyk7XHJcblxyXG4gICAgdGhpcy5hcHBseUltcHVsc2UoZ2xvYmFsRGlyLCBnbG9iYWxSYWQpO1xyXG4gIH1cclxuICBnZXRFeHBhbmRlZEFBQkIoKSB7XHJcbiAgICBjb25zdCB7cHJlY2lzaW9ufSA9IFJpZ2lkQm9keS5jb25maWdcclxuICAgIGNvbnN0IGFhYmIgPSB0aGlzLmNvbGxpZGVyLmdldEFBQkIoKTtcclxuICAgIGNvbnN0IHZlbG9jaXR5ID0gdGhpcy52ZWxvY2l0eTtcclxuICAgIGNvbnN0IHRyID0gW3ByZWNpc2lvbiwgcHJlY2lzaW9uLCBwcmVjaXNpb25dO1xyXG4gICAgYWFiYi5taW4gPSBkaWZmKGFhYmIubWluLCB0cik7XHJcbiAgICBhYWJiLm1heCA9IHN1bShhYWJiLm1heCwgdHIpO1xyXG5cclxuICAgIC8qaWYodmVsb2NpdHlbMF0gPiAxMCkgYWFiYi5tYXhbMF0gKz0gdmVsb2NpdHlbMF1cclxuICAgICAgaWYodmVsb2NpdHlbMV0gPiAxMCkgYWFiYi5tYXhbMV0gKz0gdmVsb2NpdHlbMV1cclxuICAgICAgaWYodmVsb2NpdHlbMl0gPiAxMCkgYWFiYi5tYXhbMl0gKz0gdmVsb2NpdHlbMl1cclxuICAgICAgaWYodmVsb2NpdHlbMF0gPCAtMTApIGFhYmIubWluWzBdICs9IHZlbG9jaXR5WzBdXHJcbiAgICAgIGlmKHZlbG9jaXR5WzFdIDwgLTEwKSBhYWJiLm1pblsxXSArPSB2ZWxvY2l0eVsxXVxyXG4gICAgICBpZih2ZWxvY2l0eVsyXSA8IC0xMCkgYWFiYi5taW5bMl0gKz0gdmVsb2NpdHlbMl0qL1xyXG4gICAgcmV0dXJuIGFhYmI7XHJcbiAgfVxyXG4gIGdldEFBQkIoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jb2xsaWRlci5nZXRBQUJCKCk7XHJcbiAgfVxyXG59XHJcblxyXG5jbGFzcyBQbGF5ZXIgZXh0ZW5kcyBSaWdpZEJvZHkge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcclxuICAgIHRoaXMuZnJpY3Rpb24gPSAwLjM7XHJcbiAgICB0aGlzLkRPRiA9IFsxLCAxLCAxLCAwLCAwLCAwXTtcclxuICB9XHJcbiAgYXBwbHlJbXB1bHNlKGltcHVsc2UsIHBvaW50KSB7XHJcbiAgICB0aGlzLnZlbG9jaXR5ID0gc3VtKHRoaXMudmVsb2NpdHksIHNjYWxlKGltcHVsc2UsIHRoaXMuaW52ZXJzZU1hc3MpKTtcclxuICB9XHJcbiAgYXBwbHlQc2V1ZG9JbXB1bHNlKGltcHVsc2UpIHtcclxuICAgIHRoaXMucHNldWRvVmVsb2NpdHkgPSBzdW0oXHJcbiAgICAgIHRoaXMucHNldWRvVmVsb2NpdHksXHJcbiAgICAgIHNjYWxlKGltcHVsc2UsIHRoaXMuaW52ZXJzZU1hc3MpXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5leHBvcnQgeyBSaWdpZEJvZHksIFBsYXllciB9O1xyXG4iLCJpbXBvcnQgVHJlZSBmcm9tIFwiLi9UcmVlXCI7XHJcbmltcG9ydCB7IHZlYzMgfSBmcm9tIFwibWF0aFwiO1xyXG5cclxuaW1wb3J0IHsgZ2prIH0gZnJvbSBcIi4vZ2prXCI7XHJcblxyXG5pbXBvcnQgTWFuaWZvbGQgZnJvbSBcIi4vbWFuaWZvbGRcIjtcclxuaW1wb3J0IFN5c3RlbSBmcm9tIFwiLi9TeXN0ZW1cIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgQ29uc3RyYWludCxcclxuICBDb250YWN0Q29uc3RyYWludCxcclxuICBGcmljdGlvbkNvbnN0cmFpbnQsXHJcbiAgUG9zaXRpb25Db25zdHJhaW50LFxyXG59IGZyb20gXCIuL2NvbnN0cmFpbnRzXCI7XHJcblxyXG5jb25zdCBzYW1lR3JvdXAgPSAoYm9keTEsIGJvZHkyKSA9PiB7XHJcbiAgaWYgKCFib2R5MS5ncm91cCkgcmV0dXJuO1xyXG4gIGlmICghYm9keTIuZ3JvdXApIHJldHVybjtcclxuICByZXR1cm4gYm9keTEuZ3JvdXAgPT09IGJvZHkyLmdyb3VwO1xyXG59O1xyXG5jb25zdCBwYWlySGFzaCA9ICh4LCB5KSA9PlxyXG4gIHggPT09IE1hdGgubWF4KHgsIHkpID8geCAqIHggKyB4ICsgeSA6IHkgKiB5ICsgeCArIHk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaW11bGF0aW9uIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMub2JqZWN0cyA9IFtdO1xyXG4gICAgdGhpcy5idmggPSBuZXcgVHJlZSgpO1xyXG4gICAgdGhpcy5zdGF0aWNCdmggPSBuZXcgVHJlZSgpXHJcbiAgICB0aGlzLmNvbGxpc2lvbnMgPSBbXTtcclxuICAgIHRoaXMuY29uc3RyYWludHMgPSBuZXcgTWFwKCk7XHJcbiAgICB0aGlzLnBvc2l0aW9uQ29uc3RyYWludHMgPSBuZXcgTWFwKCk7XHJcbiAgICB0aGlzLmNvbGxpc2lvbk1hbmlmb2xkcyA9IG5ldyBNYXAoKTtcclxuICAgIHRoaXMubGFzdElkID0gMTtcclxuICB9XHJcbiAgYWRkT2JqZWN0KG9iamVjdCkge1xyXG4gICAgY29uc3QgYWFiYiA9IG9iamVjdC5nZXRFeHBhbmRlZEFBQkIoKTtcclxuXHJcbiAgICBjb25zdCBsZWFmID0gdGhpcy5idmguaW5zZXJ0TGVhZihhYWJiLCBvYmplY3QpO1xyXG4gICAgb2JqZWN0LkJWbGluayA9IGxlYWY7XHJcbiAgICBvYmplY3QuaWQgPSB0aGlzLmxhc3RJZDtcclxuICAgIHRoaXMubGFzdElkKys7XHJcbiAgICBvYmplY3Qub24oXCJ1cGRhdGVcIiwgKCkgPT4gdGhpcy51cGRhdGVPYmplY3RBQUJCLmNhbGwodGhpcywgb2JqZWN0KSk7XHJcblxyXG4gICAgdGhpcy5vYmplY3RzLnB1c2gob2JqZWN0KTtcclxuICB9XHJcbiAgYWRkU3RhdGljT2JqZWN0KG9iamVjdCl7XHJcbiAgICBjb25zdCBhYWJiID0gb2JqZWN0LmdldEV4cGFuZGVkQUFCQigpO1xyXG5cclxuICAgIGNvbnN0IGxlYWYgPSB0aGlzLnN0YXRpY0J2aC5pbnNlcnRMZWFmKGFhYmIsIG9iamVjdCk7XHJcbiAgICBvYmplY3QuQlZsaW5rID0gbGVhZjtcclxuICAgIG9iamVjdC5pZCA9IHRoaXMubGFzdElkO1xyXG4gICAgdGhpcy5sYXN0SWQrKztcclxuICAgIHRoaXMub2JqZWN0cy5wdXNoKG9iamVjdCk7XHJcbiAgICBvYmplY3Qub24oXCJ1cGRhdGVcIiwgKCkgPT4gdGhpcy51cGRhdGVPYmplY3RBQUJCLmNhbGwodGhpcywgb2JqZWN0KSk7XHJcbiAgfVxyXG4gIGFkZENvbnN0cmFpbnRzKGNvbnN0cmFpbnRzLCBuYW1lKSB7XHJcbiAgICB0aGlzLmNvbnN0cmFpbnRzLnNldChuYW1lLCBbLi4uY29uc3RyYWludHNdKVxyXG4gIH1cclxuICBhZGRQb3NpdGlvbkNvbnN0cmFpbnRzKGNvbnN0cmFpbnRzLCBuYW1lKSB7XHJcbiAgICB0aGlzLnBvc2l0aW9uQ29uc3RyYWludHMuc2V0KG5hbWUsIFsuLi5jb25zdHJhaW50c10pXHJcbiAgfVxyXG4gIHVwZGF0ZU9iamVjdEFBQkIob2JqZWN0KSB7XHJcbiAgICBjb25zdCBuZXdBQUJCID0gb2JqZWN0LmdldEFBQkIoKTtcclxuXHJcbiAgICB0aGlzLmJ2aC5yZW1vdmVMZWFmKG9iamVjdC5CVmxpbmspO1xyXG4gICAgY29uc3QgbGVhZiA9IHRoaXMuYnZoLmluc2VydExlYWYobmV3QUFCQiwgb2JqZWN0KTtcclxuICAgIG9iamVjdC5CVmxpbmsgPSBsZWFmO1xyXG4gIH1cclxuICByZW1vdmVPYmplY3Qob2JqZWN0KSB7XHJcbiAgICB0aGlzLmJ2aC5yZW1vdmVMZWFmKG9iamVjdC5CVmxpbmspO1xyXG4gICAgdGhpcy5vYmplY3RzID0gdGhpcy5vYmplY3RzLmZpbHRlcigoZWwpID0+IGVsID09PSBvYmplY3QpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlQ29sbGlzaW9ucygpIHtcclxuICAgIGNvbnN0IHsgY29sbGlzaW9uTWFuaWZvbGRzIH0gPSB0aGlzO1xyXG4gICAgZm9yIChjb25zdCBbaGFzaCwgbWFuaWZvbGRdIG9mIGNvbGxpc2lvbk1hbmlmb2xkcykge1xyXG4gICAgICBtYW5pZm9sZC51cGRhdGUoKTtcclxuICAgICAgaWYgKCFtYW5pZm9sZC5rZWVwKSBjb2xsaXNpb25NYW5pZm9sZHMuZGVsZXRlKGhhc2gpO1xyXG4gICAgfVxyXG4gICAgZm9yIChsZXQgaSA9IDAsIG4gPSB0aGlzLm9iamVjdHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IG9iamVjdCA9IHRoaXMub2JqZWN0c1tpXTtcclxuICAgICAgaWYgKG9iamVjdC5zdGF0aWMpIGNvbnRpbnVlO1xyXG4gICAgICBjb25zdCBpbnRlcnNlY3RzID0gdGhpcy5idmguZ2V0Q29sbGlzaW9ucyhvYmplY3QuQlZsaW5rKTtcclxuICAgICAgY29uc3QgaW50ZXJzZWN0V2l0aFN0YXRpY3MgPSB0aGlzLnN0YXRpY0J2aC5nZXRDb2xsaXNpb25zKG9iamVjdC5CVmxpbmspXHJcbiAgICAgIGNvbnN0IGNvbHMgPSBbLi4uaW50ZXJzZWN0V2l0aFN0YXRpY3MsLi4uaW50ZXJzZWN0c11cclxuICAgICAgb2JqZWN0LkJWbGluay5pc0NoZWNrZWQgPSB0cnVlO1xyXG4gICAgICBpZiAoY29scy5sZW5ndGggIT0gMClcclxuICAgICAgICBmb3IgKGxldCBqID0gMCwgbiA9IGNvbHMubGVuZ3RoOyBqIDwgbjsgaisrKSB7XHJcbiAgICAgICAgICBpZiAoc2FtZUdyb3VwKG9iamVjdCwgY29sc1tqXSkpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgY29uc3QgaGFzaCA9IHBhaXJIYXNoKG9iamVjdC5pZCwgY29sc1tqXS5pZCk7XHJcbiAgICAgICAgICBsZXQgbWFuaWZvbGQgPSB0aGlzLmNvbGxpc2lvbk1hbmlmb2xkcy5nZXQoaGFzaCk7XHJcbiAgICAgICAgICBpZiAobWFuaWZvbGQpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgY29uc3QgY29udGFjdHMgPSBnamsob2JqZWN0LCBjb2xzW2pdKTtcclxuXHJcbiAgICAgICAgICBpZiAoY29udGFjdHMpIHtcclxuICAgICAgICAgICAgbWFuaWZvbGQgPSBuZXcgTWFuaWZvbGQoLi4uY29udGFjdHMpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jb2xsaXNpb25NYW5pZm9sZHMuc2V0KGhhc2gsIG1hbmlmb2xkKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5idmguc2V0VW5jaGVja2VkKCk7XHJcbiAgICB0aGlzLnN0YXRpY0J2aC5zZXRVbmNoZWNrZWQoKVxyXG4gIH1cclxuICB0aWNrKGRlbHRhVGltZSkge1xyXG4gICAgdGhpcy51cGRhdGVDb2xsaXNpb25zKCk7XHJcbiAgICBsZXQgbWFuaWZvbGRzID0gdGhpcy5jb2xsaXNpb25NYW5pZm9sZHM7XHJcbiAgICBmb3IgKGxldCBpID0gMCwgbiA9IHRoaXMub2JqZWN0cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgdGhpcy5vYmplY3RzW2ldLmludGVncmF0ZUZvcmNlcyhkZWx0YVRpbWUpO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgc3lzdGVtID0gbmV3IFN5c3RlbSgpO1xyXG4gICAgY29uc3QgZnJpY3Rpb25TeXN0ZW0gPSBuZXcgU3lzdGVtKCk7XHJcbiAgICBjb25zdCBjb250YWN0Q29uc3RyYWludHMgPSBbXTtcclxuICAgIGNvbnN0IGZyaWN0aW9uQ29uc3RyYWludHMgPSBbXTtcclxuICAgIGZvciAobGV0IFtrZXksIG1hbmlmb2xkXSBvZiBtYW5pZm9sZHMpIHtcclxuICAgICAgY29uc3QgdXNlVmVsb2NpdHlCaWFzID0gbWFuaWZvbGQuY29udGFjdHMubGVuZ3RoIDwyO1xyXG5cclxuICAgICAgbWFuaWZvbGQuY29udGFjdHMuZm9yRWFjaCgoYywgX2kpID0+IHtcclxuICAgICAgICBjb25zdCB7IGJvZHkxLCBib2R5MiwgcmFMb2NhbCwgcmJMb2NhbCwgcmEsIHJiLCBpLCBqLCBwZW5EZXB0aCwgbiB9ID0gYztcclxuICAgICAgICBjb25zdCBjb25zdHJhaW50ID0gbmV3IENvbnRhY3RDb25zdHJhaW50KFxyXG4gICAgICAgICAgYm9keTEsXHJcbiAgICAgICAgICBib2R5MixcclxuICAgICAgICAgIG4sXHJcbiAgICAgICAgICByYSxcclxuICAgICAgICAgIHJiLFxyXG4gICAgICAgICAgcmFMb2NhbCxcclxuICAgICAgICAgIHJiTG9jYWwsXHJcbiAgICAgICAgICAwLFxyXG4gICAgICAgICAgMC4wMDAwNSxcclxuICAgICAgICAgIHBlbkRlcHRoLFxyXG4gICAgICAgICAgaSxcclxuICAgICAgICAgIGpcclxuICAgICAgICApO1xyXG4gICAgICAgIGlmKG1hbmlmb2xkLmxhbWJkYXMpIGNvbnN0cmFpbnQucHJldkxhbWJkYSA9IG1hbmlmb2xkLmxhbWJkYXNbX2ldXHJcbiAgICAgICAgY29uc3QgZkNvbnN0cmFpbnQxID0gbmV3IEZyaWN0aW9uQ29uc3RyYWludChcclxuICAgICAgICAgIGJvZHkxLFxyXG4gICAgICAgICAgYm9keTIsXHJcbiAgICAgICAgICB2ZWMzLnNjYWxlKGksIC0xKSxcclxuICAgICAgICAgIHJhLFxyXG4gICAgICAgICAgcmIsXHJcbiAgICAgICAgICByYUxvY2FsLFxyXG4gICAgICAgICAgcmJMb2NhbCxcclxuICAgICAgICAgIDAsXHJcbiAgICAgICAgICAtYm9keTEuZnJpY3Rpb24gLSBib2R5Mi5mcmljdGlvbixcclxuICAgICAgICAgIGJvZHkxLmZyaWN0aW9uICsgYm9keTIuZnJpY3Rpb24sXHJcbiAgICAgICAgICBudWxsXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zdCBmQ29uc3RyYWludDIgPSBuZXcgRnJpY3Rpb25Db25zdHJhaW50KFxyXG4gICAgICAgICAgYm9keTEsXHJcbiAgICAgICAgICBib2R5MixcclxuICAgICAgICAgIHZlYzMuc2NhbGUoaiwgLTEpLFxyXG4gICAgICAgICAgcmEsXHJcbiAgICAgICAgICByYixcclxuICAgICAgICAgIHJhTG9jYWwsXHJcbiAgICAgICAgICByYkxvY2FsLFxyXG4gICAgICAgICAgMCxcclxuICAgICAgICAgIC1ib2R5MS5mcmljdGlvbiAtIGJvZHkyLmZyaWN0aW9uLFxyXG4gICAgICAgICAgYm9keTEuZnJpY3Rpb24gKyBib2R5Mi5mcmljdGlvbixcclxuICAgICAgICAgIG51bGxcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBpZiAoMSkge1xyXG4gICAgICAgICAgY29uc3RyYWludC5iaWFzRmFjdG9yID0gMC4xO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBjb250YWN0Q29uc3RyYWludHMucHVzaChjb25zdHJhaW50KTtcclxuICAgICAgICBmcmljdGlvbkNvbnN0cmFpbnRzLnB1c2goZkNvbnN0cmFpbnQxLCBmQ29uc3RyYWludDIpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHN5c3RlbS5hZGRDb25zdHJhaW50KGNvbnRhY3RDb25zdHJhaW50cyk7XHJcbiAgICBmb3IobGV0IFtuYW1lLCBjb25zdHJhaW50c10gb2YgdGhpcy5jb25zdHJhaW50cyl7XHJcbiAgICAgIHN5c3RlbS5hZGRDb25zdHJhaW50KGNvbnN0cmFpbnRzKVxyXG4gICAgfVxyXG5cclxuICAgIHN5c3RlbS51cGRhdGVFcXVhdGlvbnMoZGVsdGFUaW1lKVxyXG4gICAgZnJpY3Rpb25TeXN0ZW0uYWRkQ29uc3RyYWludChmcmljdGlvbkNvbnN0cmFpbnRzKTtcclxuICBcclxuICAgIGZyaWN0aW9uU3lzdGVtLnVwZGF0ZUVxdWF0aW9ucyhkZWx0YVRpbWUpXHJcbiAgICBzeXN0ZW0uZ2VuZXJhdGVTeXN0ZW0oZGVsdGFUaW1lKTtcclxuICAgIGNvbnN0IGxhbWJkYSA9IHN5c3RlbS5zb2x2ZVBHUyhkZWx0YVRpbWUpO1xyXG4gICAgY29uc3QgbGVuID0gZnJpY3Rpb25Db25zdHJhaW50cy5sZW5ndGgvMlxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICBmcmljdGlvbkNvbnN0cmFpbnRzWzIgKiBpXS5sYW1iZGFNaW4gKj0gbGFtYmRhW2ldO1xyXG4gICAgICBmcmljdGlvbkNvbnN0cmFpbnRzWzIgKiBpXS5sYW1iZGFNYXggKj0gbGFtYmRhW2ldO1xyXG4gICAgICBmcmljdGlvbkNvbnN0cmFpbnRzWzIgKiBpICsgMV0ubGFtYmRhTWluICo9IGxhbWJkYVtpXTtcclxuICAgICAgZnJpY3Rpb25Db25zdHJhaW50c1syICogaSArIDFdLmxhbWJkYU1heCAqPSBsYW1iZGFbaV07XHJcbiAgICB9XHJcbiAgICBmcmljdGlvblN5c3RlbS5nZW5lcmF0ZVN5c3RlbShkZWx0YVRpbWUpO1xyXG4gICAgZnJpY3Rpb25TeXN0ZW0uc29sdmVQR1MoZGVsdGFUaW1lKTtcclxuICAgXHJcbiAgICBmb3IgKGxldCBpID0gMCwgbiA9IHRoaXMub2JqZWN0cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgdGhpcy5vYmplY3RzW2ldLmludGVncmF0ZVZlbG9jaXRpZXMoZGVsdGFUaW1lKTtcclxuICAgIH1cclxuICAgIHRoaXMub2JqZWN0cy5mb3JFYWNoKChvYmplY3QpID0+IG9iamVjdC51cGRhdGVJbnZlcnNlSW5lcnRpYSgpKTtcclxuICAgIFxyXG4gICAgXHJcbiAgICBsZXQgbmR4ID0gMFxyXG4gICAgZm9yKGNvbnN0IFtrZXksIG1hbmlmb2xkXSBvZiB0aGlzLmNvbGxpc2lvbk1hbmlmb2xkcyl7XHJcbiAgICAgIG1hbmlmb2xkLmxhbWJkYXMgPSBbXVxyXG4gICAgICBtYW5pZm9sZC5jb250YWN0cy5mb3JFYWNoKGM9Pm1hbmlmb2xkLmxhbWJkYXMucHVzaChsYW1iZGFbKytuZHhdKSlcclxuICAgIH0gXHJcbiAgICBjb25zdCBwb3NpdGlvblN5c3RlbSA9IG5ldyBTeXN0ZW0oKTtcclxuICAgIGNvbnN0IHBvc2l0aW9uQ29uc3RyYWludHMgPSBbXTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IFtrZXksIG1hbmlmb2xkXSBvZiBtYW5pZm9sZHMpIHtcclxuICAgICAgY29uc3QgeyBjb250YWN0cyB9ID0gbWFuaWZvbGQ7XHJcbiAgICAgIGlmIChjb250YWN0cy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgcG9zaXRpb25Db25zdHJhaW50cy5wdXNoKFxyXG4gICAgICAgICAgLi4uY29udGFjdHMubWFwKChjKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgICBib2R5MSxcclxuICAgICAgICAgICAgICBib2R5MixcclxuICAgICAgICAgICAgICByYUxvY2FsLFxyXG4gICAgICAgICAgICAgIHJiTG9jYWwsXHJcbiAgICAgICAgICAgICAgcmEsXHJcbiAgICAgICAgICAgICAgcmIsXHJcbiAgICAgICAgICAgICAgaSxcclxuICAgICAgICAgICAgICBqLFxyXG4gICAgICAgICAgICAgIHBlbkRlcHRoLFxyXG4gICAgICAgICAgICAgIG4sXHJcbiAgICAgICAgICAgIH0gPSBjO1xyXG4gICAgICAgICAgICBjb25zdCBjb25zdHJhaW50ID0gbmV3IFBvc2l0aW9uQ29uc3RyYWludChcclxuICAgICAgICAgICAgICBib2R5MSxcclxuICAgICAgICAgICAgICBib2R5MixcclxuICAgICAgICAgICAgICBuLFxyXG4gICAgICAgICAgICAgIHJhLFxyXG4gICAgICAgICAgICAgIHJiLFxyXG4gICAgICAgICAgICAgIHJhTG9jYWwsXHJcbiAgICAgICAgICAgICAgcmJMb2NhbCxcclxuICAgICAgICAgICAgICAwLjEsXHJcbiAgICAgICAgICAgICAgMC4wMDAxLFxyXG4gICAgICAgICAgICAgIHBlbkRlcHRoXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJldHVybiBjb25zdHJhaW50XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHBvc2l0aW9uU3lzdGVtLmFkZENvbnN0cmFpbnQocG9zaXRpb25Db25zdHJhaW50cylcclxuICAgIGZvcihsZXQgW25hbWUsIGNvbnN0cmFpbnRzXSBvZiB0aGlzLnBvc2l0aW9uQ29uc3RyYWludHMpe1xyXG4gICAgICBwb3NpdGlvblN5c3RlbS5hZGRDb25zdHJhaW50KGNvbnN0cmFpbnRzKVxyXG4gICAgfVxyXG4gICAgcG9zaXRpb25TeXN0ZW0udXBkYXRlRXF1YXRpb25zKGRlbHRhVGltZSlcclxuICAgIHBvc2l0aW9uU3lzdGVtLmdlbmVyYXRlU3lzdGVtKGRlbHRhVGltZSk7XHJcbiAgICBcclxuICAgIHBvc2l0aW9uU3lzdGVtLnNvbHZlUEdTKGRlbHRhVGltZSlcclxuICAgIGZvciAobGV0IGkgPSAwLCBuID0gdGhpcy5vYmplY3RzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICB0aGlzLm9iamVjdHNbaV0uaW50ZWdyYXRlUHNldWRvVmVsb2NpdGllcyhkZWx0YVRpbWUpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5vYmplY3RzLmZvckVhY2goKG9iamVjdCkgPT4gb2JqZWN0LnVwZGF0ZUludmVyc2VJbmVydGlhKCkpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyB2ZWMzIH0gZnJvbSBcIm1hdGhcIjtcclxuXHJcbmNvbnN0IHZlYzYgPSB7XHJcbiAgZG90KGEsIGIpe1xyXG4gICAgcmV0dXJuICBhWzBdICogYlswXSArXHJcbiAgICBhWzFdICogYlsxXSArIFxyXG4gICAgYVsyXSAqIGJbMl0gK1xyXG4gICAgYVszXSAqIGJbM10gK1xyXG4gICAgYVs0XSAqIGJbNF0gK1xyXG4gICAgYVs1XSAqIGJbNV1cclxuICAgICBcclxuICAgIFxyXG4gIH0sXHJcbiAgc2NhbGUoYSwgZmFjKXtcclxuICAgIHJldHVybiBbYVswXSAqIGZhYywgYVsxXSAqIGZhYywgYVsyXSAqIGZhYywgYVszXSAqIGZhYywgYVs0XSpmYWMsIGFbNV0qZmFjXVxyXG4gIH0sXHJcbiAgc3VtKGEsIGIpe1xyXG4gICAgcmV0dXJuIFtcclxuICAgICAgYVswXSArIGJbMF0sXHJcbiAgICAgIGFbMV0gKyBiWzFdLFxyXG4gICAgICBhWzJdICsgYlsyXSxcclxuICAgICAgYVszXSArIGJbM10sXHJcbiAgICAgIGFbNF0gKyBiWzRdLFxyXG4gICAgICBhWzVdICsgYls1XVxyXG4gICAgXVxyXG4gIH0sXHJcbiAgZnJvbVZlYzMoYSwgYil7XHJcbiAgICByZXR1cm4gW1xyXG4gICAgICAuLi5hLCAuLi5iXHJcbiAgICBdXHJcbiAgfVxyXG5cclxufVxyXG5jb25zdCBub3JtID0gdiA9PiBNYXRoLnNxcnQodi5yZWR1Y2UoKGFjYyxlbCkgPT4gYWNjKz1lbCplbCwgMCkpXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN5c3RlbSB7XHJcbiAgY29uc3RydWN0b3IoY29uc3RyYWludHMpIHtcclxuICAgIHRoaXMuY29uc3RyYWludHMgPSBbXTtcclxuXHJcbiAgICBcclxuXHJcbiAgfVxyXG4gIGFkZENvbnN0cmFpbnQoY29uc3RyYWludHMpe1xyXG4gICAgdGhpcy5jb25zdHJhaW50cy5wdXNoKC4uLmNvbnN0cmFpbnRzKVxyXG4gICAgXHJcbiAgfVxyXG4gIGdlbmVyYXRlQm9keU1hcHBpbmcoKXtcclxuICAgIGNvbnN0IGNvbnN0cmFpbnRzID0gdGhpcy5jb25zdHJhaW50c1xyXG4gICAgY29uc3QgbiA9IGNvbnN0cmFpbnRzLmxlbmd0aFxyXG4gICAgY29uc3QgYm9kaWVzTWFwID0gbmV3IE1hcCgpXHJcbiAgICBjb25zdCBKbWFwID0gW11cclxuICAgIGxldCBjb3VudGVyID0gMFxyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IG47IGkrKyl7XHJcbiAgICAgIGNvbnN0IGMgPSBjb25zdHJhaW50c1tpXVxyXG4gICAgICBsZXQgYm9keUluZGV4MSA9IGJvZGllc01hcC5nZXQoYy5ib2R5MS5pZClcclxuICAgICAgaWYoYm9keUluZGV4MSA9PT0gdW5kZWZpbmVkKXtcclxuICAgICAgICBib2R5SW5kZXgxID0gY291bnRlcisrXHJcbiAgICAgICAgYm9kaWVzTWFwLnNldChjLmJvZHkxLmlkLCBib2R5SW5kZXgxKVxyXG4gICAgICB9XHJcbiAgICAgIGxldCBib2R5SW5kZXgyID0gYm9kaWVzTWFwLmdldChjLmJvZHkyLmlkKVxyXG4gICAgICBpZihib2R5SW5kZXgyID09PSB1bmRlZmluZWQpe1xyXG4gICAgICAgIGJvZHlJbmRleDIgPSBjb3VudGVyKytcclxuICAgICAgICBib2RpZXNNYXAuc2V0KGMuYm9keTIuaWQsIGJvZHlJbmRleDIpXHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIEptYXAucHVzaChib2R5SW5kZXgxLCBib2R5SW5kZXgyKVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICB0aGlzLmJvZGllc01hcCA9IGJvZGllc01hcFxyXG4gICAgdGhpcy5KbWFwID0gSm1hcFxyXG4gIH1cclxuICBnZW5lcmF0ZVBzZXVkb1ZlbFZlY3RvcigpIHt9XHJcbiAgZ2VuZXJhdGVTeXN0ZW0oZGVsdGFUaW1lKSB7XHJcbiAgIFxyXG4gICAgLy9OdW1lcmF0aW5nIGJvZGllc1xyXG4gICAgdGhpcy5nZW5lcmF0ZUJvZHlNYXBwaW5nKClcclxuXHJcblxyXG4gICAgLypmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xyXG4gICAgICBjb25zdCBjb25zdHJhaW50ID0gdGhpcy5jb25zdHJhaW50c1tpXTtcclxuICAgICAgY29uc3QgeyBib2R5MSwgYm9keTIsIEogfSA9IGNvbnN0cmFpbnQ7XHJcbiAgICAgIGNvbnN0IGsgPSBpICogbjtcclxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBuOyBqKyspIHtcclxuICAgICAgICBpZiAoayA9PT0gaikge1xyXG4gICAgICAgICAgdGhpcy5KTUpbayArIGpdID0gKCkgPT4gY29uc3RyYWludC5lZmZNYXNzO1xyXG4gICAgICAgICAgdGhpcy5KTUpwW2sgKyBqXSA9ICgpID0+XHJcbiAgICAgICAgICAgIGNvbnN0cmFpbnQuYm9keTEuaW52ZXJzZU1hc3MgKyBjb25zdHJhaW50LmJvZHkyLmludmVyc2VNYXNzO1xyXG4gICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBfY29uc3RyYWludCA9IHRoaXMuY29uc3RyYWludHNbal07XHJcblxyXG4gICAgICAgIGNvbnN0IF9ib2R5MSA9IF9jb25zdHJhaW50LmJvZHkxO1xyXG4gICAgICAgIGNvbnN0IF9ib2R5MiA9IF9jb25zdHJhaW50LmJvZHkyO1xyXG5cclxuICAgICAgICBjb25zdCBmcDEgPVxyXG4gICAgICAgICAgYm9keTEgPT09IF9ib2R5MVxyXG4gICAgICAgICAgICA/ICgpID0+IHZlYy5kb3QoY29uc3RyYWludC5KTVswXSwgX2NvbnN0cmFpbnQuSlswXSlcclxuICAgICAgICAgICAgOiAoKSA9PiAwO1xyXG4gICAgICAgIGNvbnN0IGZwMiA9XHJcbiAgICAgICAgICBib2R5MiA9PT0gX2JvZHkyXHJcbiAgICAgICAgICAgID8gKCkgPT4gdmVjLmRvdChjb25zdHJhaW50LkpNWzJdLCBfY29uc3RyYWludC5KWzJdKVxyXG4gICAgICAgICAgICA6ICgpID0+IDA7XHJcbiAgICAgICAgY29uc3QgZnAzID1cclxuICAgICAgICAgIGJvZHkxID09PSBfYm9keTJcclxuICAgICAgICAgICAgPyAoKSA9PiB2ZWMuZG90KGNvbnN0cmFpbnQuSk1bMF0sIF9jb25zdHJhaW50LkpbMl0pXHJcbiAgICAgICAgICAgIDogKCkgPT4gMDtcclxuICAgICAgICBjb25zdCBmcDQgPVxyXG4gICAgICAgICAgYm9keTIgPT09IF9ib2R5MVxyXG4gICAgICAgICAgICA/ICgpID0+IHZlYy5kb3QoY29uc3RyYWludC5KTVsyXSwgX2NvbnN0cmFpbnQuSlswXSlcclxuICAgICAgICAgICAgOiAoKSA9PiAwO1xyXG4gICAgICAgIGNvbnN0IGYxID1cclxuICAgICAgICAgIGJvZHkxID09PSBfYm9keTFcclxuICAgICAgICAgICAgPyAoKSA9PlxyXG4gICAgICAgICAgICAgICAgdmVjLmRvdChjb25zdHJhaW50LkpNWzBdLCBfY29uc3RyYWludC5KWzBdKSArXHJcbiAgICAgICAgICAgICAgICB2ZWMuZG90KGNvbnN0cmFpbnQuSk1bMV0sIF9jb25zdHJhaW50LkpbMV0pXHJcbiAgICAgICAgICAgIDogKCkgPT4gMDtcclxuICAgICAgICBjb25zdCBmMiA9XHJcbiAgICAgICAgICBib2R5MiA9PT0gX2JvZHkyXHJcbiAgICAgICAgICAgID8gKCkgPT5cclxuICAgICAgICAgICAgICAgIHZlYy5kb3QoY29uc3RyYWludC5KTVsyXSwgX2NvbnN0cmFpbnQuSlsyXSkgK1xyXG4gICAgICAgICAgICAgICAgdmVjLmRvdChjb25zdHJhaW50LkpNWzNdLCBfY29uc3RyYWludC5KWzNdKVxyXG4gICAgICAgICAgICA6ICgpID0+IDA7XHJcbiAgICAgICAgY29uc3QgZjMgPVxyXG4gICAgICAgICAgYm9keTEgPT09IF9ib2R5MlxyXG4gICAgICAgICAgICA/ICgpID0+XHJcbiAgICAgICAgICAgICAgICB2ZWMuZG90KGNvbnN0cmFpbnQuSk1bMF0sIF9jb25zdHJhaW50LkpbMl0pICtcclxuICAgICAgICAgICAgICAgIHZlYy5kb3QoY29uc3RyYWludC5KTVsxXSwgX2NvbnN0cmFpbnQuSlszXSlcclxuICAgICAgICAgICAgOiAoKSA9PiAwO1xyXG4gICAgICAgIGNvbnN0IGY0ID1cclxuICAgICAgICAgIGJvZHkyID09PSBfYm9keTFcclxuICAgICAgICAgICAgPyAoKSA9PlxyXG4gICAgICAgICAgICAgICAgdmVjLmRvdChjb25zdHJhaW50LkpNWzJdLCBfY29uc3RyYWludC5KWzBdKSArXHJcbiAgICAgICAgICAgICAgICB2ZWMuZG90KGNvbnN0cmFpbnQuSk1bM10sIF9jb25zdHJhaW50LkpbMV0pXHJcbiAgICAgICAgICAgIDogKCkgPT4gMDtcclxuXHJcbiAgICAgICAgdGhpcy5KTUpbayArIGpdID0gKCkgPT4gZjEoKSArIGYyKCkgKyBmMygpICsgZjQoKTtcclxuICAgICAgICB0aGlzLkpNSnBbayArIGpdID0gKCkgPT4gZnAxKCkgKyBmcDIoKSArIGZwMygpICsgZnA0KCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICAgdmVjLmRvdChKWzBdLCBib2R5MS52ZWxvY2l0eSkgK1xyXG4gICAgICAgIHZlYy5kb3QoSlsxXSwgYm9keTEuYW5ndWxhclYpICtcclxuICAgICAgICB2ZWMuZG90KEpbMl0sIGJvZHkyLnZlbG9jaXR5KSArXHJcbiAgICAgICAgdmVjLmRvdChKWzNdLCBib2R5Mi5hbmd1bGFyVik7XHJcbiAgICAgIHRoaXMuSlZbaV0gPSAoZGVsdGFUaW1lKSA9PlxyXG4gICAgICAgIC1jb25zdHJhaW50LnJlbGF0aXZlVmVsb2NpdHlOb3JtYWxQcm9qZWN0aW9uICtcclxuICAgICAgICAoTWF0aC5tYXgoMCwgY29uc3RyYWludC5wZW5EZXB0aCAtIGNvbnN0cmFpbnQudHJlc2hvbGQpIC8gZGVsdGFUaW1lKSAqXHJcbiAgICAgICAgICBjb25zdHJhaW50LmJpYXNGYWN0b3I7IC8vKyBiKiAwLjEyNTtcclxuXHJcbiAgICAgIHRoaXMuSnBWW2ldID0gKCkgPT4gLXZlYy5kb3QoSlswXSwgYm9keTEucHNldWRvVmVsb2NpdHkpIC1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlYy5kb3QoSlsxXSwgYm9keTEucHNldWRvQW5ndWxhclYpIC1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlYy5kb3QoSlsyXSwgYm9keTIucHNldWRvVmVsb2NpdHkpIC1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVjLmRvdChKWzNdLCBib2R5Mi5wc2V1ZG9Bbmd1bGFyVikgLSBjb25zdHJhaW50LmJpYXMvZGVsdGFUaW1lIFxyXG4gICAgICB0aGlzLkpwVltpXSA9IChkZWx0YVRpbWUpID0+XHJcbiAgICAgICAgKE1hdGgubWF4KDAsIGNvbnN0cmFpbnQucGVuRGVwdGggLSBjb25zdHJhaW50LnRyZXNob2xkKSAvIGRlbHRhVGltZSkgKlxyXG4gICAgICAgIGNvbnN0cmFpbnQucHNldWRvQmlhc0ZhY3RvcjtcclxuICAgIH0qL1xyXG4gIH1cclxuICAvL0ogKiBWZWxcclxuICBcclxuICBzb2x2ZVBHUyhkZWx0YVRpbWUpe1xyXG5cclxuICAgIFxyXG4gICAgY29uc3Qge0ptYXAsIGJvZGllc01hcCwgY29uc3RyYWludHN9ID0gdGhpc1xyXG4gICAgY29uc3QgbnVtQm9kaWVzID0gYm9kaWVzTWFwLnNpemVcclxuICAgIGNvbnN0IG4gPSBjb25zdHJhaW50cy5sZW5ndGhcclxuICAgIGNvbnN0IGQgPSBbXVxyXG4gICAgXHJcbiAgICBjb25zdCBsYW1iZGEwID0gbmV3IEFycmF5KG4pLmZpbGwoMClcclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCAwOyBpKyspe1xyXG4gICAgICBpZihjb25zdHJhaW50c1tpXS5wcmV2TGFtYmRhKSBsYW1iZGEwW2ldID0gY29uc3RyYWludHNbaV0ucHJldkxhbWJkYVxyXG4gICAgfVxyXG5cclxuICAgIC8vQkpsYW1iZGFcclxuICAgIFxyXG4gICAgY29uc3QgQmwgPSBuZXcgQXJyYXkobnVtQm9kaWVzKS5maWxsKFswLDAsMCwwLDAsMF0pXHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgbjsgaSsrKXtcclxuICAgICAgY29uc3QgYjEgPSBKbWFwW2kgKiAyIF1cclxuICAgICAgY29uc3QgYjIgPSBKbWFwW2kgKiAyICsgMV0gXHJcbiAgICBcclxuICAgICBcclxuICAgICAgXHJcbiAgICAgIEJsW2IxXSA9IHZlYzYuc3VtKHZlYzYuc2NhbGUoY29uc3RyYWludHNbaV0uQlswXSwgbGFtYmRhMFtpXSksIEJsW2IxXSlcclxuICAgICAgXHJcbiAgICAgIFxyXG4gICAgICBCbFtiMl0gPSB2ZWM2LnN1bSh2ZWM2LnNjYWxlKGNvbnN0cmFpbnRzW2ldLkJbMV0sIGxhbWJkYTBbaV0pLCBCbFtiMl0pXHJcbiAgICBcclxuICAgICAgXHJcbiAgICB9XHJcbiAgXHJcbiAgICAvL1BHU1xyXG4gXHJcbiAgICBcclxuICAgIGNvbnN0IGxhbWJkYSA9IFsuLi5sYW1iZGEwXVxyXG4gICAgZm9yKGxldCBpID0gMDsgaTwgbjsgaSsrKXtcclxuICAgICAgZC5wdXNoKGNvbnN0cmFpbnRzW2ldLmVmZk1hc3MpXHJcbiAgICB9XHJcbiAgICBsZXQgZmxhZyA9IHRydWVcclxuICAgIGxldCBudW1JdGVyID0gMTBcclxuXHJcbiAgICBjb25zdCBkZWx0YUxhbWJkYSA9IG5ldyBBcnJheShuKS5maWxsKDApXHJcbiAgICB3aGlsZShudW1JdGVyID4gMCApe1xyXG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbjsgaSsrKXtcclxuICAgICAgICBjb25zdCBjID0gY29uc3RyYWludHNbaV1cclxuICAgICAgICBjb25zdCBKID0gYy5fSlxyXG4gICAgICAgIGNvbnN0IGIxID0gSm1hcFtpICogMiBdXHJcbiAgICAgICAgY29uc3QgYjIgPSBKbWFwW2kgKiAyICsgMV1cclxuICAgICAgIFxyXG4gICAgICAgIGRlbHRhTGFtYmRhW2ldID0gKGMuYmlhcyAtIHZlYzYuZG90KEpbMF0sIEJsW2IxXSkgLSB2ZWM2LmRvdChKWzFdLCBCbFtiMl0pKSAvIGRbaV1cclxuICAgICAgICBcclxuICAgICAgICBsYW1iZGEwW2ldID0gbGFtYmRhW2ldXHJcbiAgICAgICAgbGFtYmRhW2ldID0gTWF0aC5tYXgoYy5sYW1iZGFNaW4sIE1hdGgubWluKGxhbWJkYTBbaV0gKyBkZWx0YUxhbWJkYVtpXSwgYy5sYW1iZGFNYXgpKVxyXG4gICAgICAgIFxyXG4gICAgICAgIGRlbHRhTGFtYmRhW2ldID0gbGFtYmRhW2ldIC0gbGFtYmRhMFtpXVxyXG4gICAgICAgIFxyXG4gICAgICAgIEJsW2IxXSA9IHZlYzYuc3VtKEJsW2IxXSwgdmVjNi5zY2FsZShjLkJbMF0sIGRlbHRhTGFtYmRhW2ldKSlcclxuICAgICAgICBCbFtiMl0gPSB2ZWM2LnN1bShCbFtiMl0sIHZlYzYuc2NhbGUoYy5CWzFdLCBkZWx0YUxhbWJkYVtpXSkpXHJcbiAgICAgIFxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBudW1JdGVyLS1cclxuICAgIH1cclxuICAgXHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgbjsgaSsrKXtcclxuICAgICAgY29uc3RyYWludHNbaV0uYXBwbHlSZXNvbHZpbmdJbXB1bHNlKGxhbWJkYVtpXSlcclxuICAgIH1cclxuICAgIHJldHVybiBsYW1iZGFcclxuICB9XHJcbiAgdXBkYXRlRXF1YXRpb25zKGRlbHRhVGltZSl7XHJcbiAgICBjb25zdCB7Y29uc3RyYWludHN9ID0gdGhpc1xyXG4gICAgY29uc3QgbiA9IGNvbnN0cmFpbnRzLmxlbmd0aFxyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IG47IGkgKyspe1xyXG4gICAgICBjb25zdHJhaW50c1tpXS51cGRhdGVMZWZ0UGFydChkZWx0YVRpbWUpXHJcbiAgICAgIGNvbnN0cmFpbnRzW2ldLnVwZGF0ZVJpZ2h0UGFydChkZWx0YVRpbWUpXHJcbiAgICB9XHJcbiAgfVxyXG4gIGFwcGx5UmVzb2x2aW5nSW1wdWxzZXMobGFtYmRhKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMCwgbiA9IHRoaXMuY29uc3RyYWludHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgIHRoaXMuY29uc3RyYWludHNbaV0uYXBwbHlSZXNvbHZpbmdJbXB1bHNlKGxhbWJkYVtpXSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGFwcGx5UmVzb2x2aW5nUHNldWRvSW1wdWxzZXMobGFtYmRhKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMCwgbiA9IHRoaXMuY29uc3RyYWludHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgIHRoaXMuY29uc3RyYWludHNbaV0uYXBwbHlSZXNvbHZpbmdQc2V1ZG9JbXB1bHNlKGxhbWJkYVtpXSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBBQUJCIH0gZnJvbSBcIm1hdGhcIjtcclxuY29uc3QgZ2V0Qm91bmRBYWJiID0gKGFhYmIxLCBhYWJiMikgPT4ge1xyXG4gIGlmICghYWFiYjEgfHwgIWFhYmIyKSB7XHJcbiAgICByZXR1cm4gMDtcclxuICB9XHJcbiAgY29uc3QgeDEgPSBhYWJiMS5taW5bMF0gPCBhYWJiMi5taW5bMF0gPyBhYWJiMS5taW5bMF0gOiBhYWJiMi5taW5bMF07XHJcbiAgY29uc3QgeDIgPSBhYWJiMS5tYXhbMF0gPiBhYWJiMi5tYXhbMF0gPyBhYWJiMS5tYXhbMF0gOiBhYWJiMi5tYXhbMF07XHJcbiAgY29uc3QgeTEgPSBhYWJiMS5taW5bMV0gPCBhYWJiMi5taW5bMV0gPyBhYWJiMS5taW5bMV0gOiBhYWJiMi5taW5bMV07XHJcbiAgY29uc3QgeTIgPSBhYWJiMS5tYXhbMV0gPiBhYWJiMi5tYXhbMV0gPyBhYWJiMS5tYXhbMV0gOiBhYWJiMi5tYXhbMV07XHJcbiAgY29uc3QgejEgPSBhYWJiMS5taW5bMl0gPCBhYWJiMi5taW5bMl0gPyBhYWJiMS5taW5bMl0gOiBhYWJiMi5taW5bMl07XHJcbiAgY29uc3QgejIgPSBhYWJiMS5tYXhbMl0gPiBhYWJiMi5tYXhbMl0gPyBhYWJiMS5tYXhbMl0gOiBhYWJiMi5tYXhbMl07XHJcbiAgcmV0dXJuIG5ldyBBQUJCKFt4MSwgeTEsIHoxXSwgW3gyLCB5MiwgejJdKTtcclxufTtcclxuY29uc3QgaXNDb2xsaWRlID0gKGFhYmIxLCBhYWJiMikgPT4ge1xyXG4gIGlmIChcclxuICAgIGFhYmIxLm1pblswXSA8PSBhYWJiMi5tYXhbMF0gJiZcclxuICAgIGFhYmIxLm1heFswXSA+PSBhYWJiMi5taW5bMF0gJiZcclxuICAgIGFhYmIxLm1pblsxXSA8PSBhYWJiMi5tYXhbMV0gJiZcclxuICAgIGFhYmIxLm1heFsxXSA+PSBhYWJiMi5taW5bMV0gJiZcclxuICAgIGFhYmIxLm1pblsyXSA8PSBhYWJiMi5tYXhbMl0gJiZcclxuICAgIGFhYmIxLm1heFsyXSA+PSBhYWJiMi5taW5bMl1cclxuICApIHtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuICByZXR1cm4gZmFsc2U7XHJcbn07XHJcbmNvbnN0IGdldFNpemUgPSAoYWFiYikgPT4ge1xyXG4gIGNvbnN0IGFyZWEgPVxyXG4gICAgTWF0aC5hYnMoYWFiYi5tYXhbMF0gLSBhYWJiLm1pblswXSkgKlxyXG4gICAgTWF0aC5hYnMoYWFiYi5tYXhbMV0gLSBhYWJiLm1pblsxXSkgKlxyXG4gICAgTWF0aC5hYnMoYWFiYi5tYXhbMl0gLSBhYWJiLm1pblsyXSk7XHJcbiAgcmV0dXJuIGFyZWE7XHJcbn07XHJcbmNsYXNzIE5vZGUge1xyXG4gIGNvbnN0cnVjdG9yKGFhYmIsIGlzTGVhZiwgZ2FtZU9iamVjdCkge1xyXG4gICAgdGhpcy5hYWJiID0gYWFiYjtcclxuICAgIHRoaXMuaXNMZWFmID0gaXNMZWFmO1xyXG4gICAgdGhpcy5wYXJlbnQgPSBudWxsO1xyXG5cclxuICAgIHRoaXMuZ2FtZU9iamVjdCA9IGdhbWVPYmplY3Q7XHJcbiAgICB0aGlzLmlzQ2hlY2tlZCA9IGZhbHNlO1xyXG4gIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmVlIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMucm9vdCA9IG51bGw7XHJcbiAgICB0aGlzLmxlYWZzID0ge307XHJcbiAgICB0aGlzLnVudXNlZEluZGV4ZXMgPSBbXTtcclxuICAgIHRoaXMucmViYWxhbmNlRGVsYXkgPSAzMFxyXG4gIH1cclxuICBzZXRVbmNoZWNrZWQoKSB7XHJcbiAgICBpZighdGhpcy5yb290KXJldHVyblxyXG4gICAgY29uc3Qgc3RhY2sgPSBbdGhpcy5yb290XTtcclxuICAgIFxyXG4gICAgd2hpbGUgKHN0YWNrLmxlbmd0aCAhPSAwKSB7XHJcbiAgICAgIGNvbnN0IG5vZGUgPSBzdGFjay5wb3AoKTtcclxuICAgICAgXHJcbiAgICAgIGlmIChub2RlLmlzTGVhZikge1xyXG4gICAgICAgIG5vZGUuaXNDaGVja2VkID0gZmFsc2U7XHJcbiAgICAgICAgY29udGludWU7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG5vZGUuY2hpbGQxKSBzdGFjay5wdXNoKG5vZGUuY2hpbGQxKTtcclxuICAgICAgaWYgKG5vZGUuY2hpbGQyKSBzdGFjay5wdXNoKG5vZGUuY2hpbGQyKTtcclxuICAgIH1cclxuICB9XHJcbiAgZ2V0QmVzdFNpYmxpbmcobGVhZikge1xyXG4gICAgbGV0IHBvdGVudGlhbCA9IHRoaXMucm9vdDtcclxuICAgIHdoaWxlICghcG90ZW50aWFsLmlzTGVhZikge1xyXG4gICAgICBjb25zdCBzaXplID0gZ2V0U2l6ZShwb3RlbnRpYWwuYWFiYik7XHJcbiAgICAgIGNvbnN0IGNvbWJpbmVkQUFCQiA9IGdldEJvdW5kQWFiYihwb3RlbnRpYWwuYWFiYiwgbGVhZi5hYWJiKTtcclxuICAgICAgY29uc3QgY29tYmluZWRTaXplID0gZ2V0U2l6ZShjb21iaW5lZEFBQkIpO1xyXG4gICAgICBsZXQgY29zdCA9IGNvbWJpbmVkU2l6ZTtcclxuICAgICAgbGV0IGluaGVyQ29zdCA9IGNvbWJpbmVkU2l6ZSAtIHNpemU7XHJcblxyXG4gICAgICBsZXQgY29zdDE7XHJcbiAgICAgIGlmIChwb3RlbnRpYWwuY2hpbGQxLmlzTGVhZikge1xyXG4gICAgICAgIGNvc3QxID0gZ2V0U2l6ZShwb3RlbnRpYWwuY2hpbGQxLmFhYmIpICsgaW5oZXJDb3N0O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvc3QxID1cclxuICAgICAgICAgIGdldFNpemUoZ2V0Qm91bmRBYWJiKGxlYWYuYWFiYiwgcG90ZW50aWFsLmNoaWxkMS5hYWJiKSkgLVxyXG4gICAgICAgICAgZ2V0U2l6ZShwb3RlbnRpYWwuY2hpbGQxLmFhYmIpICtcclxuICAgICAgICAgIGluaGVyQ29zdDtcclxuICAgICAgfVxyXG5cclxuICAgICAgbGV0IGNvc3QyO1xyXG4gICAgICBpZiAocG90ZW50aWFsLmNoaWxkMi5pc0xlYWYpIHtcclxuICAgICAgICBjb3N0MiA9IGdldFNpemUocG90ZW50aWFsLmNoaWxkMi5hYWJiKSArIGluaGVyQ29zdDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb3N0MiA9XHJcbiAgICAgICAgICBnZXRTaXplKGdldEJvdW5kQWFiYihsZWFmLmFhYmIsIHBvdGVudGlhbC5jaGlsZDIuYWFiYikpIC1cclxuICAgICAgICAgIGdldFNpemUocG90ZW50aWFsLmNoaWxkMi5hYWJiKSArXHJcbiAgICAgICAgICBpbmhlckNvc3Q7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGNvc3QgPCBjb3N0MSAmJiBjb3N0IDwgY29zdDIpIHJldHVybiBwb3RlbnRpYWw7XHJcbiAgICAgIGlmIChjb3N0MSA8IGNvc3QyKSB7XHJcbiAgICAgICAgcG90ZW50aWFsID0gcG90ZW50aWFsLmNoaWxkMTtcclxuICAgICAgfSBlbHNlIHBvdGVudGlhbCA9IHBvdGVudGlhbC5jaGlsZDI7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcG90ZW50aWFsO1xyXG4gIH1cclxuICBpbnNlcnRMZWFmKGFhYmIsIGdhbWVPYmplY3QpIHtcclxuICAgIGNvbnN0IGxlYWYgPSBuZXcgTm9kZShhYWJiLCB0cnVlLCBnYW1lT2JqZWN0KTtcclxuICAgIGlmICh0aGlzLnJvb3QgPT09IG51bGwpIHtcclxuICAgICAgdGhpcy5yb290ID0gbGVhZjtcclxuICAgICAgdGhpcy5yb290LnBhcmVudCA9IG51bGw7XHJcbiAgICAgIHJldHVybiBsZWFmO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNpYmxpbmcgPSB0aGlzLmdldEJlc3RTaWJsaW5nKGxlYWYpO1xyXG4gICAgY29uc3Qgb2xkUGFyZW50ID0gc2libGluZy5wYXJlbnQ7XHJcbiAgICBjb25zdCBuZXdQYXJlbnQgPSBuZXcgTm9kZShsZWFmLmFhYmIsIGZhbHNlKTtcclxuICAgIG5ld1BhcmVudC5wYXJlbnQgPSBvbGRQYXJlbnQ7XHJcblxyXG4gICAgbmV3UGFyZW50LmFhYmIgPSBnZXRCb3VuZEFhYmIobGVhZi5hYWJiLCBzaWJsaW5nLmFhYmIpO1xyXG5cclxuICAgIGlmIChvbGRQYXJlbnQpIHtcclxuICAgICAgaWYgKG9sZFBhcmVudC5jaGlsZDEgPT09IHNpYmxpbmcpIG9sZFBhcmVudC5jaGlsZDEgPSBuZXdQYXJlbnQ7XHJcbiAgICAgIGVsc2Ugb2xkUGFyZW50LmNoaWxkMiA9IG5ld1BhcmVudDtcclxuXHJcbiAgICAgIG5ld1BhcmVudC5jaGlsZDEgPSBzaWJsaW5nO1xyXG4gICAgICBuZXdQYXJlbnQuY2hpbGQyID0gbGVhZjtcclxuXHJcbiAgICAgIHNpYmxpbmcucGFyZW50ID0gbmV3UGFyZW50O1xyXG4gICAgICBsZWFmLnBhcmVudCA9IG5ld1BhcmVudDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG5ld1BhcmVudC5jaGlsZDEgPSBzaWJsaW5nO1xyXG4gICAgICBuZXdQYXJlbnQuY2hpbGQyID0gbGVhZjtcclxuXHJcbiAgICAgIHNpYmxpbmcucGFyZW50ID0gbmV3UGFyZW50O1xyXG4gICAgICBsZWFmLnBhcmVudCA9IG5ld1BhcmVudDtcclxuICAgICAgdGhpcy5yb290ID0gbmV3UGFyZW50O1xyXG4gICAgfVxyXG4gICAgbGV0IGluZGV4ID0gbGVhZi5wYXJlbnQ7XHJcbiAgICBcclxuICAgIHdoaWxlIChpbmRleCApIHtcclxuICAgICAgaW5kZXggPSB0aGlzLnJlYmFsYW5jZShpbmRleCk7XHJcbiAgICAgIGluZGV4ID0gaW5kZXgucGFyZW50O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGxlYWY7XHJcbiAgfVxyXG4gIGdldENvbGxpc2lvbnMobGVhZikge1xyXG4gICAgY29uc3QgY29scyA9IFtdO1xyXG4gICAgY29uc3QgaXRlciA9IChfbm9kZSkgPT4ge1xyXG4gICAgICBpZiAoIV9ub2RlKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChfbm9kZSA9PT0gbGVhZikge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBpZiAoaXNDb2xsaWRlKGxlYWYuYWFiYiwgX25vZGUuYWFiYikpIHtcclxuICAgICAgICBpZiAoX25vZGUuaXNMZWFmICYmICFfbm9kZS5pc0NoZWNrZWQpIHtcclxuICAgICAgICAgIGNvbHMucHVzaChfbm9kZS5nYW1lT2JqZWN0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaXRlcihfbm9kZS5jaGlsZDEpO1xyXG4gICAgICAgIGl0ZXIoX25vZGUuY2hpbGQyKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBpdGVyKHRoaXMucm9vdCk7XHJcblxyXG4gICAgcmV0dXJuIGNvbHM7XHJcbiAgfVxyXG4gIHJlbW92ZUxlYWYobGVhZikge1xyXG4gICAgaWYgKGxlYWYgPT09IHRoaXMucm9vdCkge1xyXG4gICAgICB0aGlzLnJvb3QgPSBudWxsO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBwYXJlbnQgPSBsZWFmLnBhcmVudDtcclxuICAgIGNvbnN0IGdyYW5kUGFyZW50ID0gcGFyZW50ID8gcGFyZW50LnBhcmVudCA6IG51bGw7XHJcbiAgICBsZXQgc2libGluZztcclxuICAgIGlmIChwYXJlbnQuY2hpbGQxID09PSBsZWFmKSBzaWJsaW5nID0gcGFyZW50LmNoaWxkMjtcclxuICAgIGVsc2Ugc2libGluZyA9IHBhcmVudC5jaGlsZDE7XHJcblxyXG4gICAgaWYgKGdyYW5kUGFyZW50KSB7XHJcbiAgICAgIGlmIChncmFuZFBhcmVudC5jaGlsZDEgPT09IHBhcmVudCkgZ3JhbmRQYXJlbnQuY2hpbGQxID0gc2libGluZztcclxuICAgICAgZWxzZSBncmFuZFBhcmVudC5jaGlsZDIgPSBzaWJsaW5nO1xyXG5cclxuICAgICAgc2libGluZy5wYXJlbnQgPSBncmFuZFBhcmVudDtcclxuXHJcbiAgICAgIGxldCBpbmRleCA9IGdyYW5kUGFyZW50O1xyXG4gICAgICB3aGlsZSAoaW5kZXgpIHtcclxuICAgICAgICBpbmRleCA9IHRoaXMucmViYWxhbmNlKGluZGV4KTtcclxuXHJcbiAgICAgICAgaW5kZXggPSBpbmRleC5wYXJlbnQ7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucm9vdCA9IHNpYmxpbmc7XHJcbiAgICAgIHNpYmxpbmcucGFyZW50ID0gbnVsbDtcclxuICAgIH1cclxuICB9XHJcbiAgcmViYWxhbmNlKGxlYWYpIHtcclxuICAgIGlmICghbGVhZikge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGlmIChsZWFmLmlzTGVhZiB8fCB0aGlzLmdldEhlaWdodChsZWFmKSA8IDIpIHtcclxuICAgICAgbGVhZi5hYWJiID0gZ2V0Qm91bmRBYWJiKGxlYWYuY2hpbGQxLmFhYmIsIGxlYWYuY2hpbGQyLmFhYmIpO1xyXG4gICAgICByZXR1cm4gbGVhZjtcclxuICAgIH1cclxuICAgIGNvbnN0IGNoaWxkMSA9IGxlYWYuY2hpbGQxO1xyXG4gICAgY29uc3QgY2hpbGQyID0gbGVhZi5jaGlsZDI7XHJcbiAgICBjb25zdCBiYWxhbmNlID0gdGhpcy5nZXRIZWlnaHQoY2hpbGQyKSAtIHRoaXMuZ2V0SGVpZ2h0KGNoaWxkMSk7XHJcblxyXG4gICAgaWYgKGJhbGFuY2UgPiAxKSB7XHJcbiAgICAgIGNvbnN0IGNoaWxkMkNoaWxkMSA9IGNoaWxkMi5jaGlsZDE7XHJcbiAgICAgIGNvbnN0IGNoaWxkMkNoaWxkMiA9IGNoaWxkMi5jaGlsZDI7XHJcblxyXG4gICAgICBjaGlsZDIuY2hpbGQxID0gbGVhZjtcclxuICAgICAgY2hpbGQyLnBhcmVudCA9IGxlYWYucGFyZW50O1xyXG4gICAgICBsZWFmLnBhcmVudCA9IGNoaWxkMjtcclxuICAgICAgaWYgKGNoaWxkMi5wYXJlbnQgIT0gbnVsbCkge1xyXG4gICAgICAgIGlmIChjaGlsZDIucGFyZW50LmNoaWxkMSA9PT0gbGVhZikge1xyXG4gICAgICAgICAgY2hpbGQyLnBhcmVudC5jaGlsZDEgPSBjaGlsZDI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNoaWxkMi5wYXJlbnQuY2hpbGQyID0gY2hpbGQyO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHRoaXMucm9vdCA9IGNoaWxkMjtcclxuICAgICAgaWYgKHRoaXMuZ2V0SGVpZ2h0KGNoaWxkMkNoaWxkMSkgPiB0aGlzLmdldEhlaWdodChjaGlsZDJDaGlsZDIpKSB7XHJcbiAgICAgICAgY2hpbGQyLmNoaWxkMiA9IGNoaWxkMkNoaWxkMTtcclxuICAgICAgICBsZWFmLmNoaWxkMiA9IGNoaWxkMkNoaWxkMjtcclxuICAgICAgICBjaGlsZDJDaGlsZDIucGFyZW50ID0gbGVhZjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBsZWFmLmNoaWxkMiA9IGNoaWxkMkNoaWxkMTtcclxuICAgICAgICBjaGlsZDJDaGlsZDEucGFyZW50ID0gbGVhZjtcclxuICAgICAgfVxyXG4gICAgICBsZWFmLmFhYmIgPSBnZXRCb3VuZEFhYmIobGVhZi5jaGlsZDEuYWFiYiwgbGVhZi5jaGlsZDIuYWFiYik7XHJcbiAgICAgIGNoaWxkMi5hYWJiID0gZ2V0Qm91bmRBYWJiKGNoaWxkMi5jaGlsZDEuYWFiYiwgY2hpbGQyLmNoaWxkMi5hYWJiKTtcclxuXHJcbiAgICAgIHJldHVybiBjaGlsZDI7XHJcbiAgICB9XHJcbiAgICBpZiAoYmFsYW5jZSA8IC0xKSB7XHJcbiAgICAgIGNvbnN0IGNoaWxkMUNoaWxkMSA9IGNoaWxkMS5jaGlsZDE7XHJcbiAgICAgIGNvbnN0IGNoaWxkMUNoaWxkMiA9IGNoaWxkMS5jaGlsZDI7XHJcblxyXG4gICAgICBjaGlsZDEuY2hpbGQxID0gbGVhZjtcclxuICAgICAgY2hpbGQxLnBhcmVudCA9IGxlYWYucGFyZW50O1xyXG4gICAgICBsZWFmLnBhcmVudCA9IGNoaWxkMTtcclxuXHJcbiAgICAgIGlmIChjaGlsZDEucGFyZW50ICE9IG51bGwpIHtcclxuICAgICAgICBpZiAoY2hpbGQxLnBhcmVudC5jaGlsZDEgPT09IGxlYWYpIHtcclxuICAgICAgICAgIGNoaWxkMS5wYXJlbnQuY2hpbGQxID0gY2hpbGQxO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjaGlsZDEucGFyZW50LmNoaWxkMiA9IGNoaWxkMTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB0aGlzLnJvb3QgPSBjaGlsZDE7XHJcbiAgICAgIGlmICh0aGlzLmdldEhlaWdodChjaGlsZDFDaGlsZDEpID4gdGhpcy5nZXRIZWlnaHQoY2hpbGQxQ2hpbGQyKSkge1xyXG4gICAgICAgIGNoaWxkMS5jaGlsZDIgPSBjaGlsZDFDaGlsZDE7XHJcbiAgICAgICAgbGVhZi5jaGlsZDEgPSBjaGlsZDFDaGlsZDI7XHJcbiAgICAgICAgY2hpbGQxQ2hpbGQyLnBhcmVudCA9IGxlYWY7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY2hpbGQxLmNoaWxkMiA9IGNoaWxkMUNoaWxkMjtcclxuICAgICAgICBsZWFmLmNoaWxkMSA9IGNoaWxkMUNoaWxkMTtcclxuICAgICAgICBjaGlsZDFDaGlsZDEucGFyZW50ID0gbGVhZjtcclxuICAgICAgfVxyXG4gICAgICBsZWFmLmFhYmIgPSBnZXRCb3VuZEFhYmIobGVhZi5jaGlsZDEuYWFiYiwgbGVhZi5jaGlsZDIuYWFiYik7XHJcbiAgICAgIGNoaWxkMS5hYWJiID0gZ2V0Qm91bmRBYWJiKGNoaWxkMS5jaGlsZDEuYWFiYiwgY2hpbGQxLmNoaWxkMi5hYWJiKTtcclxuXHJcbiAgICAgIHJldHVybiBjaGlsZDE7XHJcbiAgICB9XHJcbiAgICBsZWFmLmFhYmIgPSBnZXRCb3VuZEFhYmIobGVhZi5jaGlsZDEuYWFiYiwgbGVhZi5jaGlsZDIuYWFiYik7XHJcbiAgICByZXR1cm4gbGVhZjtcclxuICB9XHJcbiAgdG9BcnJheShpKSB7XHJcbiAgICBjb25zdCBpdGVyID0gKGxlYWYsIGxldmVsKSA9PiB7XHJcbiAgICAgIGlmICghbGVhZikge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChsZWFmLmlzTGVhZikgcmV0dXJuIGxlYWYub2JqZWN0TGluay5uYW1lO1xyXG4gICAgICBlbHNlIHJldHVybiBbaXRlcihsZWFmLmNoaWxkMSksIGl0ZXIobGVhZi5jaGlsZDIpXTtcclxuICAgIH07XHJcbiAgICBpZiAoIWkpIGkgPSB0aGlzLnJvb3Q7XHJcbiAgICByZXR1cm4gaXRlcihpKTtcclxuICB9XHJcbiAgLypnZXRIZWlnaHQobGVhZikge1xyXG4gICAgY29uc3QgaXRlciA9IChsZWFmLCBsZXZlbCkgPT4ge1xyXG4gICAgICBpZiAoIWxlYWYpIHtcclxuICAgICAgICByZXR1cm4gbGV2ZWw7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxldCBoMSA9IGl0ZXIobGVhZi5jaGlsZDEsIGxldmVsICsgMSk7XHJcbiAgICAgIGxldCBoMiA9IGl0ZXIobGVhZi5jaGlsZDIsIGxldmVsICsgMSk7XHJcbiAgICAgIHJldHVybiBoMSA+IGgyID8gaDEgOiBoMjtcclxuICAgIH07XHJcbiAgICByZXR1cm4gaXRlcihsZWFmLCAxKTtcclxuICB9Ki9cclxuICBnZXRIZWlnaHQocm9vdCl7XHJcbiAgICBpZighcm9vdCkgcmV0dXJuIDBcclxuICAgIGxldCBoZWlnaHQgPSAwXHJcbiAgICBjb25zdCBxdWV1ZSA9IFtyb290XVxyXG4gICAgd2hpbGUocXVldWUubGVuZ3RoICE9IDApe1xyXG4gICAgICBoZWlnaHQgKz0gMVxyXG4gICAgICBjb25zdCBjb3VudCA9IHF1ZXVlLmxlbmd0aFxyXG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKyl7XHJcbiAgICAgICAgY29uc3QgdG1wID0gcXVldWUucG9wKClcclxuICAgICAgICBpZih0bXAuY2hpbGQxKSBxdWV1ZS5wdXNoKHRtcC5jaGlsZDEpXHJcbiAgICAgICAgaWYodG1wLmNoaWxkMikgcXVldWUucHVzaCh0bXAuY2hpbGQyKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaGVpZ2h0XHJcbiAgfVxyXG4gIGdldE5vZGVzKCkge1xyXG4gICAgY29uc3QgaXRlciA9IChub2RlLCBhcnIpID0+IHtcclxuICAgICAgYXJyLnB1c2gobm9kZSk7XHJcbiAgICAgIGlmIChub2RlLmNoaWxkMSkgaXRlcihub2RlLmNoaWxkMSwgYXJyKTtcclxuICAgICAgaWYgKG5vZGUuY2hpbGQyKSBpdGVyKG5vZGUuY2hpbGQyLCBhcnIpO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGEgPSBbXTtcclxuICAgIGl0ZXIodGhpcy5yb290LCBhKTtcclxuICAgIHJldHVybiBhO1xyXG4gIH1cclxufVxyXG4iLCJjb25zdCBpc0luc2lkZSA9IChwMSwgcDIsIHEpID0+IHtcclxuICBjb25zdCBSID0gKHAyWzBdIC0gcDFbMF0pICogKHFbMV0gLSBwMVsxXSkgLSAocDJbMV0gLSBwMVsxXSkgKiAocVswXSAtIHAxWzBdKTtcclxuICByZXR1cm4gUiA8PSAwICsgMC4wMDE7XHJcbn07XHJcblxyXG5jb25zdCBkb3QgPSAoYSwgYikgPT4gYVswXSAqIGJbMF0gKyBhWzFdICogYlsxXTtcclxuXHJcbmNvbnN0IGlzSW5DbG9ja3dpc2UgPSAocG9pbnRzKSA9PiB7XHJcbiAgaWYgKHBvaW50cy5sZW5ndGggPCAzKSByZXR1cm4gMTtcclxuICBjb25zdCBbcDEsIHAyLCBwM10gPSBwb2ludHM7XHJcbiAgY29uc3QgZGV0ID1cclxuICAgIHAyWzBdICogcDNbMV0gK1xyXG4gICAgcDNbMF0gKiBwMVsxXSArXHJcbiAgICBwMVswXSAqIHAyWzFdIC1cclxuICAgIHAxWzBdICogcDFbMV0gLVxyXG4gICAgcDNbMF0gKiBwMlsxXSAtXHJcbiAgICBwMVswXSAqIHAzWzFdO1xyXG5cclxuICBpZiAoZGV0IDwgMCkgcmV0dXJuIDE7XHJcbiAgcmV0dXJuIC0xO1xyXG59O1xyXG5cclxuY29uc3QgY29tcHV0ZUludGVyc2VjdGlvbiA9IChwMSwgcDIsIHAzLCBwNCkgPT4ge1xyXG4gIGlmIChwMlswXSAtIHAxWzBdID09PSAwKSB7XHJcbiAgICBjb25zdCB4ID0gcDFbMF07XHJcblxyXG4gICAgY29uc3QgbTIgPSAocDRbMV0gLSBwM1sxXSkgLyAocDRbMF0gLSBwM1swXSk7XHJcbiAgICBjb25zdCBiMiA9IHAzWzFdIC0gbTIgKiBwM1swXTtcclxuXHJcbiAgICBjb25zdCB5ID0gbTIgKiB4ICsgYjI7XHJcbiAgICByZXR1cm4gW3gsIHldO1xyXG4gIH1cclxuICBpZiAocDRbMF0gLSBwM1swXSA9PT0gMCkge1xyXG4gICAgY29uc3QgeCA9IHAzWzBdO1xyXG5cclxuICAgIGNvbnN0IG0xID0gKHAyWzFdIC0gcDFbMV0pIC8gKHAyWzBdIC0gcDFbMF0pO1xyXG4gICAgY29uc3QgYjEgPSBwMVsxXSAtIG0xICogcDFbMF07XHJcblxyXG4gICAgY29uc3QgeSA9IG0xICogeCArIGIxO1xyXG5cclxuICAgIHJldHVybiBbeCwgeV07XHJcbiAgfVxyXG4gIGNvbnN0IG0xID0gKHAyWzFdIC0gcDFbMV0pIC8gKHAyWzBdIC0gcDFbMF0pO1xyXG4gIGNvbnN0IGIxID0gcDFbMV0gLSBtMSAqIHAxWzBdO1xyXG5cclxuICBjb25zdCBtMiA9IChwNFsxXSAtIHAzWzFdKSAvIChwNFswXSAtIHAzWzBdKTtcclxuICBjb25zdCBiMiA9IHAzWzFdIC0gbTIgKiBwM1swXTtcclxuXHJcbiAgY29uc3QgeCA9IChiMiAtIGIxKSAvIChtMSAtIG0yKTtcclxuXHJcbiAgY29uc3QgeSA9IG0xICogeCArIGIxO1xyXG5cclxuICByZXR1cm4gW3gsIHldO1xyXG59O1xyXG5cclxuY29uc3QgY2xpcFBvbHlWc1BvbHkgPSAoQSwgQikgPT4ge1xyXG4gIGxldCByZXN1bHQgPSBbLi4uQV07XHJcblxyXG4gIGZvciAobGV0IGkgPSAwLCBuID0gQi5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgIGNvbnN0IG5leHQgPSBbLi4ucmVzdWx0XTtcclxuICAgIHJlc3VsdCA9IFtdO1xyXG4gICAgY29uc3QgYUVkZ2UxID0gQi5hdChpIC0gMSk7XHJcbiAgICBjb25zdCBhRWRnZTIgPSBCLmF0KGkpO1xyXG5cclxuICAgIGZvciAobGV0IGogPSAwLCBfbiA9IG5leHQubGVuZ3RoOyBqIDwgX247IGorKykge1xyXG4gICAgICBjb25zdCBiRWRnZTEgPSBuZXh0LmF0KGogLSAxKTtcclxuICAgICAgY29uc3QgYkVkZ2UyID0gbmV4dC5hdChqKTtcclxuXHJcbiAgICAgIGlmIChpc0luc2lkZShhRWRnZTEsIGFFZGdlMiwgYkVkZ2UyKSkge1xyXG4gICAgICAgIGlmICghaXNJbnNpZGUoYUVkZ2UxLCBhRWRnZTIsIGJFZGdlMSkpIHtcclxuICAgICAgICAgIGNvbnN0IGludGVyc2VjdGlvbiA9IGNvbXB1dGVJbnRlcnNlY3Rpb24oXHJcbiAgICAgICAgICAgIGJFZGdlMSxcclxuICAgICAgICAgICAgYkVkZ2UyLFxyXG4gICAgICAgICAgICBhRWRnZTEsXHJcbiAgICAgICAgICAgIGFFZGdlMlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIHJlc3VsdC5wdXNoKGludGVyc2VjdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlc3VsdC5wdXNoKGJFZGdlMik7XHJcbiAgICAgICAgY29udGludWU7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGlzSW5zaWRlKGFFZGdlMSwgYUVkZ2UyLCBiRWRnZTEpKSB7XHJcbiAgICAgICAgY29uc3QgaW50ZXJzZWN0aW9uID0gY29tcHV0ZUludGVyc2VjdGlvbihcclxuICAgICAgICAgIGJFZGdlMSxcclxuICAgICAgICAgIGJFZGdlMixcclxuICAgICAgICAgIGFFZGdlMSxcclxuICAgICAgICAgIGFFZGdlMlxyXG4gICAgICAgICk7XHJcbiAgICAgICAgcmVzdWx0LnB1c2goaW50ZXJzZWN0aW9uKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG5cclxuY29uc3QgbGVycCA9IChhLCBiLCB0KSA9PiBhICsgKGIgLSBhKSAqIHQ7XHJcblxyXG5jb25zdCBjbGlwU2VnbWVudFZzU2VnbWVudCA9IChzMSwgczIpID0+IHtcclxuICBjb25zdCBbcDEsIHAyXSA9IHMxXHJcbiAgY29uc3QgW3AzLCBwNF0gPSBzMlxyXG4gIGNvbnN0IHRvcCA9XHJcbiAgICAocDRbMF0gLSBwM1swXSkgKiAocDFbMV0gLSBwM1sxXSkgLSAocDRbMV0gLSBwM1sxXSkgKiAocDFbMF0gLSBwM1swXSk7XHJcbiAgY29uc3QgYm90dG9tID1cclxuICAgIChwNFsxXSAtIHAzWzFdKSAqIChwMlswXSAtIHAxWzBdKSAtIChwNFswXSAtIHAzWzBdKSAqIChwMlsxXSAtIHAxWzFdKTtcclxuICBpZiAoIWJvdHRvbSkgcmV0dXJuIG51bGw7XHJcbiAgY29uc3QgdCA9IHRvcCAvIGJvdHRvbTtcclxuICBpZiAodCA8IDAgfHwgdCA+IDEpIHJldHVybiBudWxsO1xyXG4gIHJldHVybiBbbGVycChwMVswXSwgcDJbMF0sIHQpLCBsZXJwKHAxWzFdLCBwMlsxXSwgdCldO1xyXG59O1xyXG5cclxuY29uc3QgY2xpcFBvaW50VnNQb2x5ID0gKHBvaW50LCB2ZXJ0aWNlcykgPT4ge1xyXG4gIGNvbnN0IHggPSBwb2ludFswXTtcclxuICBjb25zdCB5ID0gcG9pbnRbMV07XHJcblxyXG4gIGxldCBpbnNpZGUgPSBmYWxzZTtcclxuICBmb3IgKGxldCBpID0gMCwgaiA9IHZlcnRpY2VzLmxlbmd0aCAtIDE7IGkgPCB2ZXJ0aWNlcy5sZW5ndGg7IGogPSBpKyspIHtcclxuICAgIGNvbnN0IHhpID0gdmVydGljZXNbaV1bMF0sXHJcbiAgICAgIHlpID0gdmVydGljZXNbaV1bMV07XHJcbiAgICBjb25zdCB4aiA9IHZlcnRpY2VzW2pdWzBdLFxyXG4gICAgICB5aiA9IHZlcnRpY2VzW2pdWzFdO1xyXG5cclxuICAgIGNvbnN0IGludGVyc2VjdCA9XHJcbiAgICAgIHlpID4geSAhPSB5aiA+IHkgJiYgeCA8ICgoeGogLSB4aSkgKiAoeSAtIHlpKSkgLyAoeWogLSB5aSkgKyB4aTtcclxuICAgIGlmIChpbnRlcnNlY3QpIGluc2lkZSA9ICFpbnNpZGU7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gaW5zaWRlO1xyXG59O1xyXG5jb25zdCBjbGlwU2VnbWVudFZzUG9seSA9IChzZWdtZW50LCBwb2x5KSA9PiB7XHJcbiAgY29uc3QgW3AxLCBwMl0gPSBzZWdtZW50O1xyXG4gIGNvbnN0IHBvaW50cyA9IFtdO1xyXG4gIGlmIChjbGlwUG9pbnRWc1BvbHkocDEsIHBvbHkpKSBwb2ludHMucHVzaChwMSk7XHJcbiAgaWYgKGNsaXBQb2ludFZzUG9seShwMiwgcG9seSkpIHBvaW50cy5wdXNoKHAyKTtcclxuICBpZiAocG9pbnRzLmxlbmd0aCA+IDEpIHJldHVybiBwb2ludHM7XHJcbiAgZm9yIChsZXQgaSA9IDAsIG4gPSBwb2x5Lmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgY29uc3QgcTEgPSBwb2x5LmF0KGkgLSAxKTtcclxuICAgIGNvbnN0IHEyID0gcG9seS5hdChpKTtcclxuICAgIGNvbnN0IGludGVyc2VjdGlvbiA9IGNsaXBTZWdtZW50VnNTZWdtZW50KHAxLCBwMiwgcTEsIHEyKTtcclxuICAgIGlmIChpbnRlcnNlY3Rpb24pIHBvaW50cy5wdXNoKGludGVyc2VjdGlvbik7XHJcbiAgfVxyXG4gIHJldHVybiBwb2ludHM7XHJcbn07XHJcblxyXG5cclxuY29uc3QgZmFjZUludGVyc2VjdGlvbnNNYXAgPSB7XHJcbiAgJ3BvbHlfcG9seScgOiBjbGlwUG9seVZzUG9seSxcclxuICAnc2VnbWVudF9wb2x5JyA6IGNsaXBTZWdtZW50VnNQb2x5LFxyXG4gICdwb2x5X3NlZ21lbnQnIDogKHBvbHksIHNlZ21lbnQpID0+IGNsaXBTZWdtZW50VnNQb2x5KHNlZ21lbnQsIHBvbHkpLFxyXG4gICdzZWdtZW50X3NlZ21lbnQnIDooczEsIHMyKSA9PiB7XHJcbiAgICBjb25zdCByZXMgPSBjbGlwU2VnbWVudFZzU2VnbWVudChzMSxzMilcclxuICAgIGlmKHJlcykgcmV0dXJuIFtyZXNdXHJcbiAgICByZXR1cm4gW11cclxuICB9LFxyXG4gICdwb2ludF9wb2x5JyA6IGNsaXBQb2ludFZzUG9seSxcclxuICAncG9seV9wb2ludCcgOiAocG9seSwgcG9pbnQpID0+IGNsaXBQb2ludFZzUG9seShwb2ludCwgcG9seSksXHJcbn1cclxuY29uc3QgZ2V0RmFjZVR5cGUgPSAoZmFjZSkgPT57XHJcbiAgaWYoZmFjZS5sZW5ndGggPiAyKSByZXR1cm4gJ3BvbHknXHJcbiAgaWYoZmFjZS5sZW5ndGggPT09IDIpIHJldHVybiAnc2VnbWVudCdcclxuICByZXR1cm4gJ3BvaW50J1xyXG59XHJcbmNvbnN0IGNsaXBGYWNlVnNGYWNlID0gKGZhY2UxLCBmYWNlMikgPT57XHJcbiAgY29uc3QgdHlwZXMgPSBgJHtnZXRGYWNlVHlwZShmYWNlMSl9XyR7Z2V0RmFjZVR5cGUoZmFjZTIpfWBcclxuICByZXR1cm4gZmFjZUludGVyc2VjdGlvbnNNYXBbdHlwZXNdKGZhY2UxLCBmYWNlMikgXHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgY2xpcFNlZ21lbnRWc1NlZ21lbnQsXHJcbiAgaXNJbnNpZGUsXHJcbiAgY29tcHV0ZUludGVyc2VjdGlvbixcclxuICBjbGlwUG9seVZzUG9seSxcclxuICBjbGlwRmFjZVZzRmFjZSxcclxuICBpc0luQ2xvY2t3aXNlLFxyXG4gIGNsaXBTZWdtZW50VnNQb2x5LFxyXG4gIGNsaXBQb2ludFZzUG9seSxcclxufTtcclxuIiwiaW1wb3J0IHsgdmVjMywgbTQsIG0zLCBBQUJCIH0gZnJvbSBcIm1hdGhcIjtcclxuXHJcbmNvbnN0IHsgc2NhbGUsIHN1bSwgZGlmZiwgZG90LCBub3JtYWxpemUgfSA9IHZlYzM7XHJcblxyXG5jb25zdCB4QXhpcyA9IFsxLCAwLCAwXTtcclxuY29uc3QgeUF4aXMgPSBbMCwgMSwgMF07XHJcbmNvbnN0IHpBeGlzID0gWzAsIDAsIDFdO1xyXG5jb25zdCB4QXhpc05lZ2F0aXZlID0gc2NhbGUoeEF4aXMsIC0xKTtcclxuY29uc3QgeUF4aXNOZWdhdGl2ZSA9IHNjYWxlKHlBeGlzLCAtMSk7XHJcbmNvbnN0IHpBeGlzTmVnYXRpdmUgPSBzY2FsZSh6QXhpcywgLTEpO1xyXG5cclxuY2xhc3MgQ29sbGlkZXIge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5SbWF0cml4ID0gbTMuaWRlbnRpdHkoKTtcclxuICAgIHRoaXMuUm1hdHJpeEludmVyc2UgPSBtMy5pZGVudGl0eSgpO1xyXG4gICAgdGhpcy5wb3MgPSBbMCwgMCwgMF07XHJcbiAgfVxyXG4gIHRyYW5zbGF0ZSh2KSB7XHJcbiAgICB0aGlzLnBvcyA9IHN1bSh0aGlzLnBvcywgdik7XHJcbiAgfVxyXG4gIHNldFRyYW5zbGF0aW9uKHRyYW5zbGF0aW9uKSB7XHJcbiAgICB0aGlzLnBvcyA9IFsuLi50cmFuc2xhdGlvbl07XHJcbiAgfVxyXG4gIHJvdGF0ZShyKSB7XHJcbiAgICB0aGlzLlJtYXRyaXggPSBtMy54Um90YXRlKHRoaXMuUm1hdHJpeCwgclswXSk7XHJcbiAgICB0aGlzLlJtYXRyaXggPSBtMy55Um90YXRlKHRoaXMuUm1hdHJpeCwgclsxXSk7XHJcbiAgICB0aGlzLlJtYXRyaXggPSBtMy56Um90YXRlKHRoaXMuUm1hdHJpeCwgclsyXSk7XHJcbiAgICB0aGlzLlJtYXRyaXhJbnZlcnNlID0gbTMudHJhbnNwb3NlKHRoaXMuUm1hdHJpeCk7XHJcbiAgfVxyXG4gIHNldFJvdGF0aW9uKHIpIHtcclxuICAgIHRoaXMuUm1hdHJpeCA9IG0zLnhSb3RhdGlvbihyWzBdKTtcclxuICAgIHRoaXMuUm1hdHJpeCA9IG0zLnlSb3RhdGUodGhpcy5SbWF0cml4LCByWzFdKTtcclxuICAgIHRoaXMuUm1hdHJpeCA9IG0zLnpSb3RhdGUodGhpcy5SbWF0cml4LCByWzJdKTtcclxuICAgIHRoaXMuUm1hdHJpeEludmVyc2UgPSBtMy50cmFuc3Bvc2UodGhpcy5SbWF0cml4KTtcclxuICB9XHJcbiAgZ2V0QUFCQigpIHtcclxuICAgIGNvbnN0IG1heFggPSB0aGlzLnN1cHBvcnQoeEF4aXMpWzBdO1xyXG4gICAgY29uc3QgbWF4WSA9IHRoaXMuc3VwcG9ydCh5QXhpcylbMV07XHJcbiAgICBjb25zdCBtYXhaID0gdGhpcy5zdXBwb3J0KHpBeGlzKVsyXTtcclxuXHJcbiAgICBjb25zdCBtaW5YID0gdGhpcy5zdXBwb3J0KHhBeGlzTmVnYXRpdmUpWzBdO1xyXG4gICAgY29uc3QgbWluWSA9IHRoaXMuc3VwcG9ydCh5QXhpc05lZ2F0aXZlKVsxXTtcclxuICAgIGNvbnN0IG1pblogPSB0aGlzLnN1cHBvcnQoekF4aXNOZWdhdGl2ZSlbMl07XHJcbiAgICByZXR1cm4gbmV3IEFBQkIoW21pblgsIG1pblksIG1pblpdLCBbbWF4WCwgbWF4WSwgbWF4Wl0pO1xyXG4gIH1cclxuICBzZXRSbWF0cml4KG1hdHJpeCkge1xyXG4gICAgdGhpcy5SbWF0cml4ID0gWy4uLm1hdHJpeF07XHJcblxyXG4gICAgdGhpcy5SbWF0cml4SW52ZXJzZSA9IG0zLnRyYW5zcG9zZShtYXRyaXgpO1xyXG4gIH1cclxuICBnZXRNNCgpIHtcclxuICAgIGNvbnN0IG0gPSBtNC5tM1RvbTQodGhpcy5SbWF0cml4KTtcclxuICAgIG1bMTJdID0gdGhpcy5wb3NbMF07XHJcbiAgICBtWzEzXSA9IHRoaXMucG9zWzFdO1xyXG4gICAgbVsxNF0gPSB0aGlzLnBvc1syXTtcclxuICAgIG1bMTVdID0gMTtcclxuICAgIHJldHVybiBtO1xyXG4gIH1cclxuICBsb2NhbFRvR2xvYmFsKHYpIHtcclxuICAgIGxldCBnbG9iYWwgPSBtMy50cmFuc2Zvcm1Qb2ludCh0aGlzLlJtYXRyaXgsIHYpO1xyXG4gICAgcmV0dXJuIHN1bSh0aGlzLnBvcywgZ2xvYmFsKTtcclxuICB9XHJcbiAgZ2V0Q2xvc2VzdEZhY2Uobm9ybWFsKSB7fVxyXG4gIGdldEludmVyc2VJbmVydGlhVGVuc29yKG1hc3MpIHtcclxuICAgIHJldHVybiBuZXcgQXJyYXkoOSkuZmlsbCgwKTtcclxuICB9XHJcbn1cclxuXHJcbmNsYXNzIEJveCBleHRlbmRzIENvbGxpZGVyIHtcclxuICBjb25zdHJ1Y3RvcihhID0gMSwgYiA9IDEsIGMgPSAxKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5taW4gPSBbLWEgLyAyLCAtYiAvIDIsIC1jIC8gMl07XHJcbiAgICB0aGlzLm1heCA9IFthIC8gMiwgYiAvIDIsIGMgLyAyXTtcclxuICAgIHRoaXMucG9pbnRzID0gW1xyXG4gICAgICBbLTEgLyAyLCAtMSAvIDIsIC0xIC8gMl0sXHJcbiAgICAgIFsxIC8gMiwgLTEgLyAyLCAtMSAvIDJdLFxyXG4gICAgICBbMSAvIDIsIC0xIC8gMiwgMSAvIDJdLFxyXG4gICAgICBbLTEgLyAyLCAtMSAvIDIsIDEgLyAyXSxcclxuICAgICAgWy0xIC8gMiwgMSAvIDIsIC0xIC8gMl0sXHJcbiAgICAgIFsxIC8gMiwgMSAvIDIsIC0xIC8gMl0sXHJcbiAgICAgIFsxIC8gMiwgMSAvIDIsIDEgLyAyXSxcclxuICAgICAgWy0xIC8gMiwgMSAvIDIsIDEgLyAyXSxcclxuICAgIF07XHJcbiAgICB0aGlzLmluZGljZXMgPSBbXHJcbiAgICAgIFswLCA0LCA1LCAxXSwgLy8gLXpcclxuICAgICAgWzMsIDcsIDYsIDJdLCAvLyArelxyXG4gICAgICBbMCwgMSwgMiwgM10sIC8vIC15XHJcbiAgICAgIFs0LCA1LCA2LCA3XSwgLy8gK3lcclxuICAgICAgWzAsIDMsIDcsIDRdLCAvLyAteFxyXG4gICAgICBbMSwgMiwgNiwgNV0sIC8vICt4XHJcbiAgICBdO1xyXG4gICAgdGhpcy5ub3JtYWxzID0gW1xyXG4gICAgICBbMCwgMCwgLTFdLFxyXG4gICAgICBbMCwgMCwgMV0sXHJcbiAgICAgIFswLCAtMSwgMF0sXHJcbiAgICAgIFswLCAxLCAwXSxcclxuICAgICAgWy0xLCAwLCAwXSxcclxuICAgICAgWzEsIDAsIDBdLFxyXG4gICAgXTtcclxuICB9XHJcblxyXG4gIGdldEFBQkIoKSB7XHJcbiAgICBjb25zdCBtYXhYID0gdGhpcy5zdXBwb3J0KHhBeGlzKVswXTtcclxuICAgIGNvbnN0IG1heFkgPSB0aGlzLnN1cHBvcnQoeUF4aXMpWzFdO1xyXG4gICAgY29uc3QgbWF4WiA9IHRoaXMuc3VwcG9ydCh6QXhpcylbMl07XHJcblxyXG4gICAgY29uc3QgbWluWCA9IHRoaXMuc3VwcG9ydCh4QXhpc05lZ2F0aXZlKVswXTtcclxuICAgIGNvbnN0IG1pblkgPSB0aGlzLnN1cHBvcnQoeUF4aXNOZWdhdGl2ZSlbMV07XHJcbiAgICBjb25zdCBtaW5aID0gdGhpcy5zdXBwb3J0KHpBeGlzTmVnYXRpdmUpWzJdO1xyXG4gICAgcmV0dXJuIG5ldyBBQUJCKFttaW5YLCBtaW5ZLCBtaW5aXSwgW21heFgsIG1heFksIG1heFpdKTtcclxuICB9XHJcblxyXG4gIHN1cHBvcnQoZGlyKSB7XHJcbiAgICBjb25zdCBfZGlyID0gbTMudHJhbnNmb3JtUG9pbnQodGhpcy5SbWF0cml4SW52ZXJzZSwgZGlyKTtcclxuXHJcbiAgICBjb25zdCByZXMgPSBbMCwgMCwgMF07XHJcblxyXG4gICAgcmVzWzBdID0gX2RpclswXSA+IDAgPyB0aGlzLm1heFswXSA6IHRoaXMubWluWzBdO1xyXG4gICAgcmVzWzFdID0gX2RpclsxXSA+IDAgPyB0aGlzLm1heFsxXSA6IHRoaXMubWluWzFdO1xyXG4gICAgcmVzWzJdID0gX2RpclsyXSA+IDAgPyB0aGlzLm1heFsyXSA6IHRoaXMubWluWzJdO1xyXG5cclxuICAgIGNvbnN0IHN1cCA9IG0zLnRyYW5zZm9ybVBvaW50KHRoaXMuUm1hdHJpeCwgcmVzKTtcclxuXHJcbiAgICByZXR1cm4gc3VtKHN1cCwgdGhpcy5wb3MpO1xyXG4gIH1cclxuICBnZXRJbnZlcnNlSW5lcnRpYVRlbnNvcihtYXNzKSB7XHJcbiAgICBjb25zdCBpMSA9XHJcbiAgICAgIChtYXNzIC8gMTIpICogKHRoaXMubWF4WzFdICogdGhpcy5tYXhbMV0gKyB0aGlzLm1heFsyXSAqIHRoaXMubWF4WzJdKTtcclxuICAgIGNvbnN0IGkyID1cclxuICAgICAgKG1hc3MgLyAxMikgKiAodGhpcy5tYXhbMF0gKiB0aGlzLm1heFswXSArIHRoaXMubWF4WzJdICogdGhpcy5tYXhbMl0pO1xyXG4gICAgY29uc3QgaTMgPVxyXG4gICAgICAobWFzcyAvIDEyKSAqICh0aGlzLm1heFswXSAqIHRoaXMubWF4WzBdICsgdGhpcy5tYXhbMV0gKiB0aGlzLm1heFsxXSk7XHJcblxyXG4gICAgY29uc3QgbSA9IG0zLm11bHRpcGx5KFxyXG4gICAgICBtMy5tdWx0aXBseSh0aGlzLlJtYXRyaXhJbnZlcnNlLCBbMSAvIGkxLCAwLCAwLCAwLCAxIC8gaTIsIDAsIDAsIDAsIDEgLyBpM10pLFxyXG4gICAgICB0aGlzLlJtYXRyaXhcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIG07XHJcbiAgfVxyXG4gIGdldE00KCkge1xyXG4gICAgY29uc3QgbSA9IG00Lm0zVG9tNCh0aGlzLlJtYXRyaXgpO1xyXG4gICAgbVsxMl0gPSB0aGlzLnBvc1swXTtcclxuICAgIG1bMTNdID0gdGhpcy5wb3NbMV07XHJcbiAgICBtWzE0XSA9IHRoaXMucG9zWzJdO1xyXG4gICAgbVsxNV0gPSAxO1xyXG4gICAgY29uc3Qgc2NhbGUgPSBkaWZmKHRoaXMubWF4LCB0aGlzLm1pbik7XHJcbiAgICByZXR1cm4gbTQuc2NhbGUobSwgLi4uc2NhbGUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q2xvc2VzdEZhY2VCeU5vcm1hbChub3JtYWwpIHtcclxuICAgIGNvbnN0IHsgcG9pbnRzLCBpbmRpY2VzLCBSbWF0cml4IH0gPSB0aGlzO1xyXG4gICAgY29uc3Qgbm9ybWFscyA9IHRoaXMubm9ybWFscy5tYXAoKG4pID0+IG0zLnRyYW5zZm9ybVBvaW50KHRoaXMuUm1hdHJpeCwgbikpO1xyXG4gICAgbGV0IG1pbkRvdCA9IGRvdChub3JtYWwsIG5vcm1hbHNbMF0pO1xyXG4gICAgbGV0IGluZGV4ID0gMDtcclxuICAgIGZvciAobGV0IGkgPSAxLCBuID0gbm9ybWFscy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgLy9jb25zdCBfbm9ybWFsID0gbTMudHJhbnNmb3JtUG9pbnQoUm1hdHJpeCwgbm9ybWFsc1tpXSlcclxuICAgICAgY29uc3QgX2RvdCA9IGRvdChub3JtYWxzW2ldLCBub3JtYWwpO1xyXG4gICAgICBpZiAoX2RvdCA8IG1pbkRvdCkge1xyXG4gICAgICAgIG1pbkRvdCA9IF9kb3Q7XHJcbiAgICAgICAgaW5kZXggPSBpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBmYWNlSW5kaWNlcyA9IGluZGljZXNbaW5kZXhdO1xyXG4gICAgY29uc3QgbSA9IHRoaXMuZ2V0TTQoKTtcclxuICAgIHJldHVybiBbXHJcbiAgICAgIGZhY2VJbmRpY2VzLm1hcCgoaSkgPT4gbTQudHJhbnNmb3JtUG9pbnQobSwgcG9pbnRzW2ldKSksXHJcbiAgICAgIG5vcm1hbHNbaW5kZXhdLFxyXG4gICAgXTtcclxuICB9XHJcbn1cclxuY2xhc3MgU3BoZXJlIGV4dGVuZHMgQ29sbGlkZXIge1xyXG4gIGNvbnN0cnVjdG9yKHJhZGl1cyA9IDEpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLnJhZGl1cyA9IHJhZGl1cztcclxuICAgIHRoaXMudHlwZSA9IFwic3BoZXJlXCI7XHJcbiAgfVxyXG4gIGdldEFBQkIoKSB7XHJcbiAgICBjb25zdCB7IHJhZGl1cyB9ID0gdGhpcztcclxuICAgIHJldHVybiBuZXcgQUFCQihcclxuICAgICAgc3VtKHRoaXMucG9zLCBbLXJhZGl1cywgLXJhZGl1cywgLXJhZGl1c10pLFxyXG4gICAgICBzdW0odGhpcy5wb3MsIFtyYWRpdXMsIHJhZGl1cywgcmFkaXVzXSlcclxuICAgICk7XHJcbiAgfVxyXG4gIHN1cHBvcnQoZGlyKSB7XHJcbiAgICByZXR1cm4gc3VtKHNjYWxlKG5vcm1hbGl6ZShkaXIpLCB0aGlzLnJhZGl1cyksIHRoaXMucG9zKTtcclxuICB9XHJcbiAgZ2V0TTQoKSB7XHJcbiAgICBjb25zdCBtID0gbTQubTNUb200KHRoaXMuUm1hdHJpeCk7XHJcbiAgICBtWzEyXSA9IHRoaXMucG9zWzBdO1xyXG4gICAgbVsxM10gPSB0aGlzLnBvc1sxXTtcclxuICAgIG1bMTRdID0gdGhpcy5wb3NbMl07XHJcbiAgICBtWzE1XSA9IDE7XHJcbiAgICBjb25zdCB7IHJhZGl1cyB9ID0gdGhpcztcclxuICAgIHJldHVybiBtNC5zY2FsZShtLCByYWRpdXMsIHJhZGl1cywgcmFkaXVzKTtcclxuICB9XHJcbiAgZ2V0Q2xvc2VzdEZhY2VCeU5vcm1hbChub3JtYWwpIHtcclxuICAgIGNvbnN0IHJldmVyc2UgPSBzY2FsZShub3JtYWwsIC0xKTtcclxuICAgIHJldHVybiBbW3NjYWxlKHJldmVyc2UsIHRoaXMucmFkaXVzKV0sIHJldmVyc2VdO1xyXG4gIH1cclxuICBnZXRJbnZlcnNlSW5lcnRpYVRlbnNvcihtYXNzKSB7XHJcbiAgICBjb25zdCB7IHJhZGl1cyB9ID0gdGhpcztcclxuICAgIGNvbnN0IG0gPSBbXHJcbiAgICAgICgyICogbWFzcyAqIHJhZGl1cyAqIHJhZGl1cykgLyA1LFxyXG4gICAgICAwLFxyXG4gICAgICAwLFxyXG4gICAgICAwLFxyXG4gICAgICAoMiAqIG1hc3MgKiByYWRpdXMgKiByYWRpdXMpIC8gNSxcclxuICAgICAgMCxcclxuICAgICAgMCxcclxuICAgICAgMCxcclxuICAgICAgKDIgKiBtYXNzICogcmFkaXVzICogcmFkaXVzKSAvIDUsXHJcbiAgICBdO1xyXG4gICAgcmV0dXJuIG07XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBudW1TZWdtZW50cyA9IDY7XHJcbmNvbnN0IHNlZ21lbnRBbmdsZSA9ICgyICogTWF0aC5QSSkgLyBudW1TZWdtZW50cztcclxuY29uc3QgY2lyY2xlUG9pbnRzID0gWy4uLm5ldyBBcnJheShudW1TZWdtZW50cyldLm1hcCgoXywgaSkgPT4gW1xyXG4gIE1hdGguY29zKGkgKiBzZWdtZW50QW5nbGUpLFxyXG4gIDAsXHJcbiAgTWF0aC5zaW4oaSAqIHNlZ21lbnRBbmdsZSksXHJcbl0pO1xyXG5cclxuY2xhc3MgQ3lsaW5kZXIgZXh0ZW5kcyBDb2xsaWRlciB7XHJcbiAgY29uc3RydWN0b3IoIHJhZGl1cywgaGVpZ2h0KSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5yYWRpdXMgPSByYWRpdXM7XHJcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcclxuICB9XHJcbiAgc3VwcG9ydChkaXIpIHtcclxuICAgIGNvbnN0IF9kaXIgPSBtMy50cmFuc2Zvcm1Qb2ludCh0aGlzLlJtYXRyaXhJbnZlcnNlLCBkaXIpOyAvL2ZpbmQgc3VwcG9ydCBpbiBtb2RlbCBzcGFjZVxyXG5cclxuICAgIGNvbnN0IGRpcl94eiA9IFtfZGlyWzBdLCAwLCBfZGlyWzJdXTtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHNjYWxlKG5vcm1hbGl6ZShkaXJfeHopLCB0aGlzLnJhZGl1cyk7XHJcbiAgICByZXN1bHRbMV0gPSBfZGlyWzFdID4gMCA/IHRoaXMuaGVpZ2h0IC8gMiA6IC10aGlzLmhlaWdodCAvIDI7XHJcblxyXG4gICAgcmV0dXJuIHN1bShtMy50cmFuc2Zvcm1Qb2ludCh0aGlzLlJtYXRyaXgsIHJlc3VsdCksIHRoaXMucG9zKTsgLy9jb252ZXJ0IHN1cHBvcnQgdG8gd29ybGQgc3BhY2VcclxuICB9XHJcbiAgZ2V0TTQoKSB7XHJcbiAgICBjb25zdCBtID0gbTQubTNUb200KHRoaXMuUm1hdHJpeCk7XHJcbiAgICBtWzEyXSA9IHRoaXMucG9zWzBdO1xyXG4gICAgbVsxM10gPSB0aGlzLnBvc1sxXTtcclxuICAgIG1bMTRdID0gdGhpcy5wb3NbMl07XHJcbiAgICBtWzE1XSA9IDE7XHJcbiAgICBjb25zdCB7IHJhZGl1cywgaGVpZ2h0IH0gPSB0aGlzO1xyXG4gICAgcmV0dXJuIG00LnNjYWxlKG0sIHJhZGl1cywgaGVpZ2h0LCByYWRpdXMpO1xyXG4gIH1cclxuICBnZXRDbG9zZXN0RmFjZUJ5Tm9ybWFsKG5vcm1hbCkge1xyXG4gICAgY29uc3QgeyByYWRpdXMsIGhlaWdodCwgUm1hdHJpeCwgUm1hdHJpeEludmVyc2UgfSA9IHRoaXM7XHJcbiAgICBjb25zdCBfbm9ybWFsID0gbTMudHJhbnNmb3JtUG9pbnQoUm1hdHJpeEludmVyc2UsIHNjYWxlKG5vcm1hbCwgLTEpKTtcclxuICAgIGNvbnN0IG0gPSB0aGlzLmdldE00KClcclxuICAgIGNvbnN0IGNvcyA9IGRvdChfbm9ybWFsLCBbMCwgMSwgMF0pO1xyXG4gICAgY29uc3Qgc2lnbiA9IE1hdGguc2lnbihjb3MpO1xyXG4gICAgXHJcbiAgICBpZiAoY29zICogc2lnbiA8IDAuNzA3KSB7XHJcbiAgICAgIGNvbnN0IGxvY2FsTm9ybWFsID0gbm9ybWFsaXplKFtfbm9ybWFsWzBdLCAwLCBfbm9ybWFsWzJdXSk7XHJcbiAgICAgIGNvbnN0IGZhY2UgPSBbXHJcbiAgICAgICAgbTQudHJhbnNmb3JtUG9pbnQobSwgW19ub3JtYWxbMF0gLCAwLjUsIF9ub3JtYWxbMl0gXSksXHJcbiAgICAgICAgbTQudHJhbnNmb3JtUG9pbnQobSwgW19ub3JtYWxbMF0sIC0wLjUsIF9ub3JtYWxbMl0gXSlcclxuICAgICAgXTtcclxuXHJcbiAgICAgIHJldHVybiBbZmFjZSwgbTMudHJhbnNmb3JtUG9pbnQoUm1hdHJpeCwgbG9jYWxOb3JtYWwpXVxyXG4gICAgfVxyXG4gICAgY29uc3QgbG9jYWxOb3JtYWwgPSBzY2FsZShbMCwgMSwgMF0sIHNpZ24pO1xyXG4gICAgY29uc3QgZmFjZSA9IGNpcmNsZVBvaW50cy5tYXAocCA9PiBtNC50cmFuc2Zvcm1Qb2ludChtLCBbcFswXSwgc2lnbiAqIDAuNSAgLCBwWzJdIF0pKVxyXG4gICBcclxuICAgIHJldHVybiBbZmFjZSwgbTMudHJhbnNmb3JtUG9pbnQoUm1hdHJpeCwgbG9jYWxOb3JtYWwpXVxyXG4gIH1cclxuICBnZXRJbnZlcnNlSW5lcnRpYVRlbnNvcihtYXNzKSB7XHJcbiAgICBjb25zdCB7IHJhZGl1cywgaGVpZ2h0IH0gPSB0aGlzO1xyXG4gICAgY29uc3QgaTEgPVxyXG4gICAgICBtYXNzIC8gMTIgKiAoMypyYWRpdXMqcmFkaXVzICsgaGVpZ2h0KmhlaWdodClcclxuICAgXHJcbiAgICBjb25zdCBpMyA9XHJcbiAgICAgIG1hc3MvMiAqcmFkaXVzKnJhZGl1c1xyXG5cclxuICAgIGNvbnN0IG0gPSBtMy5tdWx0aXBseShcclxuICAgICAgbTMubXVsdGlwbHkodGhpcy5SbWF0cml4LCBbMS9pMSwgMCwgMCwgMCwgMS9pMSwgMCwgMCwgMCwgMS9pM10pLFxyXG4gICAgICB0aGlzLlJtYXRyaXhJbnZlcnNlXHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiBtO1xyXG4gIH1cclxuICBnZXRBQUJCKCkge1xyXG4gICAgY29uc3QgeyByYWRpdXMsIGhlaWdodCB9ID0gdGhpcztcclxuICAgIHJldHVybiBuZXcgQUFCQihcclxuICAgICAgc3VtKHRoaXMucG9zLCBbLXJhZGl1cywgLWhlaWdodCwgLXJhZGl1c10pLFxyXG4gICAgICBzdW0odGhpcy5wb3MsIFtyYWRpdXMsIGhlaWdodCwgcmFkaXVzXSlcclxuICAgICk7XHJcbiAgfVxyXG59XHJcbmV4cG9ydCB7IEJveCwgU3BoZXJlLCBDeWxpbmRlcn07XHJcbiIsImltcG9ydCB7IHZlYzMsIG0zIH0gZnJvbSBcIm1hdGhcIjtcclxuXHJcbmNvbnN0IHsgZG90LCBjcm9zcywgbm9ybWFsaXplLCBkaWZmLCBzY2FsZSwgbm9ybSwgc3VtLCBub3JtU3EgfSA9IHZlYzM7XHJcbmNvbnN0IGNsYW1wID0gKHYsIG1pbiwgbWF4KSA9PiB7XHJcbiAgaWYgKHYgPiBtaW4pIHtcclxuICAgIGlmICh2IDwgbWF4KSByZXR1cm4gdjtcclxuICAgIGVsc2UgcmV0dXJuIG1heDtcclxuICB9XHJcbiAgcmV0dXJuIG1pbjtcclxufTtcclxuY2xhc3MgQ29uc3RyYWludCB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBib2R5MSxcclxuICAgIGJvZHkyLFxyXG4gICAgbixcclxuICAgIHJhLFxyXG4gICAgcmIsXHJcbiAgICByYUxvY2FsLFxyXG4gICAgcmJMb2NhbCxcclxuICAgIGJpYXNGYWN0b3IgPSAwLFxyXG4gICAgbGFtYmRhTWluID0gLUluZmluaXR5LFxyXG4gICAgbGFtYmRhTWF4ID0gSW5maW5pdHksXHJcbiAgICB0cmVzaG9sZCA9IDAuMDAwMDAxXHJcbiAgKSB7XHJcbiAgICB0aGlzLmJpYXNGYWN0b3IgPSBiaWFzRmFjdG9yO1xyXG4gICAgdGhpcy5uID0gbjtcclxuICAgIHRoaXMuSiA9IG51bGw7XHJcblxyXG4gICAgdGhpcy5KTSA9IG51bGw7XHJcbiAgICB0aGlzLkIgPSBudWxsO1xyXG4gICAgdGhpcy5ib2R5MSA9IGJvZHkxO1xyXG4gICAgdGhpcy5ib2R5MiA9IGJvZHkyO1xyXG4gICAgdGhpcy5yYSA9IHJhO1xyXG4gICAgdGhpcy5yYiA9IHJiO1xyXG4gICAgdGhpcy5yYUxvY2FsID0gcmFMb2NhbDtcclxuICAgIHRoaXMucmJMb2NhbCA9IHJiTG9jYWw7XHJcbiAgICB0aGlzLnRyZXNob2xkID0gdHJlc2hvbGQ7XHJcbiAgICB0aGlzLmxhbWJkYUFjYyA9IDA7XHJcbiAgICB0aGlzLmxhbWJkYU1pbiA9IGxhbWJkYU1pbjtcclxuICAgIHRoaXMubGFtYmRhTWF4ID0gbGFtYmRhTWF4O1xyXG4gIH1cclxuICB1cGRhdGVMZWZ0UGFydChkZWx0YVRpbWUpIHtcclxuICAgIGNvbnN0IHsgYm9keTEsIGJvZHkyLCBuLCByYSwgcmIgfSA9IHRoaXM7XHJcbiAgICBjb25zdCBKID0gW3NjYWxlKG4sIC0xKSwgY3Jvc3MobiwgcmEpLCBuLCBjcm9zcyhyYiwgbildO1xyXG4gICAgY29uc3QgZG9mMSA9IGJvZHkxLkRPRjtcclxuICAgIGNvbnN0IGRvZjIgPSBib2R5Mi5ET0Y7XHJcblxyXG4gICAgSlswXVswXSAqPSBkb2YxWzBdO1xyXG4gICAgSlswXVsxXSAqPSBkb2YxWzFdO1xyXG4gICAgSlswXVsyXSAqPSBkb2YxWzJdO1xyXG5cclxuICAgIEpbMV1bMF0gKj0gZG9mMVszXTtcclxuICAgIEpbMV1bMV0gKj0gZG9mMVs0XTtcclxuICAgIEpbMV1bMl0gKj0gZG9mMVs1XTtcclxuXHJcbiAgICBKWzJdWzBdICo9IGRvZjJbMF07XHJcbiAgICBKWzJdWzFdICo9IGRvZjJbMV07XHJcbiAgICBKWzJdWzJdICo9IGRvZjJbMl07XHJcblxyXG4gICAgSlszXVswXSAqPSBkb2YyWzNdO1xyXG4gICAgSlszXVsxXSAqPSBkb2YyWzRdO1xyXG4gICAgSlszXVsyXSAqPSBkb2YyWzVdO1xyXG5cclxuICAgIHRoaXMuSiA9IEo7XHJcblxyXG4gICAgY29uc3QgSTEgPSBib2R5MS5pbnZlcnNlSW5lcnRpYTtcclxuICAgIGNvbnN0IEkyID0gYm9keTIuaW52ZXJzZUluZXJ0aWE7XHJcbiAgICBsZXQgTTEgPSBib2R5MS5pbnZlcnNlTWFzcztcclxuICAgIGxldCBNMiA9IGJvZHkyLmludmVyc2VNYXNzO1xyXG4gICAgdGhpcy5KTSA9IFtcclxuICAgICAgc2NhbGUodGhpcy5KWzBdLCBNMSksXHJcbiAgICAgIG0zLnRyYW5zZm9ybVBvaW50KEkxLCB0aGlzLkpbMV0pLFxyXG4gICAgICBzY2FsZSh0aGlzLkpbMl0sIE0yKSxcclxuICAgICAgbTMudHJhbnNmb3JtUG9pbnQoSTIsIHRoaXMuSlszXSksXHJcbiAgICBdO1xyXG5cclxuICAgIC8vSk1KKiA9IEpCO0IgPSBNSipcclxuICAgIHRoaXMuX0ogPSBbXHJcbiAgICAgIFsuLi50aGlzLkpbMF0sIC4uLnRoaXMuSlsxXV0sXHJcbiAgICAgIFsuLi50aGlzLkpbMl0sIC4uLnRoaXMuSlszXV0sXHJcbiAgICBdO1xyXG4gICAgdGhpcy5CID0gW1xyXG4gICAgICBbLi4udGhpcy5KTVswXSwgLi4udGhpcy5KTVsxXV0sXHJcbiAgICAgIFsuLi50aGlzLkpNWzJdLCAuLi50aGlzLkpNWzNdXSxcclxuICAgIF07XHJcbiAgICB0aGlzLmVmZk1hc3MgPVxyXG4gICAgICBkb3QoSlswXSwgdGhpcy5KTVswXSkgK1xyXG4gICAgICBkb3QodGhpcy5KTVsxXSwgdGhpcy5KWzFdKSArXHJcbiAgICAgIGRvdChKWzJdLCB0aGlzLkpNWzJdKSArXHJcbiAgICAgIGRvdCh0aGlzLkpNWzNdLCB0aGlzLkpbM10pO1xyXG4gIH1cclxuICBhcHBseVJlc29sdmluZ0ltcHVsc2UobGFtYmRhKSB7XHJcbiAgICB0aGlzLmJvZHkxLmFwcGx5SW1wdWxzZShzY2FsZSh0aGlzLkpbMF0sIGxhbWJkYSksIHRoaXMucmEpO1xyXG4gICAgdGhpcy5ib2R5Mi5hcHBseUltcHVsc2Uoc2NhbGUodGhpcy5KWzJdLCBsYW1iZGEpLCB0aGlzLnJiKTtcclxuICB9XHJcbn1cclxuXHJcbmNsYXNzIENvbnRhY3RDb25zdHJhaW50IGV4dGVuZHMgQ29uc3RyYWludCB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBib2R5MSxcclxuICAgIGJvZHkyLFxyXG4gICAgbixcclxuICAgIHJhLFxyXG4gICAgcmIsXHJcbiAgICByYUxvY2FsLFxyXG4gICAgcmJMb2NhbCxcclxuICAgIGJpYXNGYWN0b3IsXHJcbiAgICB0cmVzaG9sZCxcclxuICAgIHBlbkRlcHRoXHJcbiAgKSB7XHJcbiAgICBzdXBlcihcclxuICAgICAgYm9keTEsXHJcbiAgICAgIGJvZHkyLFxyXG4gICAgICBuLFxyXG4gICAgICByYSxcclxuICAgICAgcmIsXHJcbiAgICAgIHJhTG9jYWwsXHJcbiAgICAgIHJiTG9jYWwsXHJcbiAgICAgIGJpYXNGYWN0b3IsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgIHRyZXNob2xkXHJcbiAgICApO1xyXG5cclxuICAgIHRoaXMucGVuRGVwdGggPSBwZW5EZXB0aDtcclxuICB9XHJcbiAgdXBkYXRlTGVmdFBhcnQoZGVsdGFUaW1lKSB7XHJcbiAgICBzdXBlci51cGRhdGVMZWZ0UGFydChkZWx0YVRpbWUpO1xyXG4gICAgdGhpcy5sYW1iZGFNYXggPVxyXG4gICAgICBNYXRoLm1heCgxLG5vcm0oXHJcbiAgICAgICAgc3VtKFxyXG4gICAgICAgICAgc2NhbGUodGhpcy5ib2R5MS52ZWxvY2l0eSwgdGhpcy5ib2R5MS5tYXNzKSxcclxuICAgICAgICAgIHNjYWxlKHRoaXMuYm9keTIudmVsb2NpdHksIHRoaXMuYm9keTIubWFzcylcclxuICAgICAgICApXHJcbiAgICAgICkgKiAxMCk7XHJcbiAgICB0aGlzLmxhbWJkYU1pbiA9IDA7XHJcbiAgfVxyXG4gIHVwZGF0ZVJpZ2h0UGFydChkZWx0YVRpbWUpIHtcclxuICAgIGNvbnN0IHsgYm9keTEsIGJvZHkyLCByYSwgcmIsIG4sIHBlbkRlcHRoLCB0cmVzaG9sZCwgYmlhc0ZhY3RvciB9ID0gdGhpcztcclxuXHJcbiAgICBjb25zdCByZWxhdGl2ZVZlbG9jaXR5ID0gZGlmZihcclxuICAgICAgc3VtKGJvZHkyLnZlbG9jaXR5LCBjcm9zcyhib2R5Mi5hbmd1bGFyViwgcmIpKSxcclxuICAgICAgc3VtKGJvZHkxLnZlbG9jaXR5LCBjcm9zcyhib2R5MS5hbmd1bGFyViwgcmEpKVxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCByZWxhdGl2ZVZlbG9jaXR5Tm9ybWFsUHJvamVjdGlvbiA9IGRvdChyZWxhdGl2ZVZlbG9jaXR5LCBuKTtcclxuICAgIHRoaXMuYmlhcyA9XHJcbiAgICAgIChNYXRoLm1heCgwLCBwZW5EZXB0aCAtIHRyZXNob2xkKSAvIGRlbHRhVGltZSkgKiBiaWFzRmFjdG9yIC1cclxuICAgICAgcmVsYXRpdmVWZWxvY2l0eU5vcm1hbFByb2plY3Rpb247XHJcbiAgfVxyXG4gIGFwcGx5UmVzb2x2aW5nSW1wdWxzZShsYW1iZGEpIHtcclxuICAgIHRoaXMuYm9keTEuYXBwbHlJbXB1bHNlKHNjYWxlKHRoaXMuSlswXSwgbGFtYmRhKSwgdGhpcy5yYSk7XHJcbiAgICB0aGlzLmJvZHkyLmFwcGx5SW1wdWxzZShzY2FsZSh0aGlzLkpbMl0sIGxhbWJkYSksIHRoaXMucmIpO1xyXG4gIH1cclxuICBhcHBseVJlc29sdmluZ1BzZXVkb0ltcHVsc2UobGFtYmRhKSB7XHJcbiAgICBpZiAobGFtYmRhIDwgMCkgcmV0dXJuO1xyXG4gICAgY29uc3QgbWF4ID0gdGhpcy5lZmZNYXNzICogMTA7XHJcbiAgICAvLyBsYW1iZGEgPSBNYXRoLm1heChNYXRoLm1pbigxMDAsIGxhbWJkYSktIDAuMSwwKVxyXG4gICAgdGhpcy5ib2R5MS5hcHBseVBzZXVkb0ltcHVsc2Uoc2NhbGUodGhpcy5KWzBdLCBsYW1iZGEpLCB0aGlzLnJhKTtcclxuICAgIHRoaXMuYm9keTIuYXBwbHlQc2V1ZG9JbXB1bHNlKHNjYWxlKHRoaXMuSlsyXSwgbGFtYmRhKSwgdGhpcy5yYik7XHJcbiAgfVxyXG59XHJcblxyXG5jbGFzcyBGcmljdGlvbkNvbnN0cmFpbnQgZXh0ZW5kcyBDb25zdHJhaW50IHtcclxuICB1cGRhdGVSaWdodFBhcnQoZGVsdGFUaW1lKSB7XHJcbiAgICBjb25zdCB7IGJvZHkxLCBib2R5MiwgcmEsIHJiLCBuIH0gPSB0aGlzO1xyXG4gICAgY29uc3QgcmVsYXRpdmVWZWxvY2l0eSA9IGRpZmYoXHJcbiAgICAgIHN1bShib2R5Mi52ZWxvY2l0eSwgY3Jvc3MoYm9keTIuYW5ndWxhclYsIHJiKSksXHJcbiAgICAgIHN1bShib2R5MS52ZWxvY2l0eSwgY3Jvc3MoYm9keTEuYW5ndWxhclYsIHJhKSlcclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgcmVsYXRpdmVWZWxvY2l0eU5vcm1hbFByb2plY3Rpb24gPSBkb3QocmVsYXRpdmVWZWxvY2l0eSwgbik7XHJcbiAgICB0aGlzLmJpYXMgPSAtcmVsYXRpdmVWZWxvY2l0eU5vcm1hbFByb2plY3Rpb247XHJcbiAgfVxyXG4gIGFwcGx5UmVzb2x2aW5nSW1wdWxzZShsYW1iZGEpIHtcclxuICAgIHRoaXMuYm9keTEuYXBwbHlJbXB1bHNlKHNjYWxlKHRoaXMuSlswXSwgbGFtYmRhKSwgdGhpcy5yYSk7XHJcbiAgICB0aGlzLmJvZHkyLmFwcGx5SW1wdWxzZShzY2FsZSh0aGlzLkpbMl0sIGxhbWJkYSksIHRoaXMucmIpO1xyXG4gIH1cclxufVxyXG5cclxuY2xhc3MgUG9zaXRpb25Db25zdHJhaW50IGV4dGVuZHMgQ29uc3RyYWludCB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBib2R5MSxcclxuICAgIGJvZHkyLFxyXG4gICAgbixcclxuICAgIHJhLFxyXG4gICAgcmIsXHJcbiAgICByYUxvY2FsLFxyXG4gICAgcmJMb2NhbCxcclxuICAgIGJpYXNGYWN0b3IsXHJcbiAgICB0cmVzaG9sZCxcclxuICAgIHBlbkRlcHRoXHJcbiAgKSB7XHJcbiAgICBzdXBlcihcclxuICAgICAgYm9keTEsXHJcbiAgICAgIGJvZHkyLFxyXG4gICAgICBuLFxyXG4gICAgICByYSxcclxuICAgICAgcmIsXHJcbiAgICAgIHJhTG9jYWwsXHJcbiAgICAgIHJiTG9jYWwsXHJcbiAgICAgIGJpYXNGYWN0b3IsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgIHRyZXNob2xkXHJcbiAgICApO1xyXG4gICAgdGhpcy5wZW5EZXB0aCA9IHBlbkRlcHRoO1xyXG4gIH1cclxuICBhcHBseVJlc29sdmluZ0ltcHVsc2UobGFtYmRhKSB7XHJcbiAgICB0aGlzLmJvZHkxLmFwcGx5UHNldWRvSW1wdWxzZShzY2FsZSh0aGlzLkpbMF0sIGxhbWJkYSksIHRoaXMucmEpO1xyXG4gICAgdGhpcy5ib2R5Mi5hcHBseVBzZXVkb0ltcHVsc2Uoc2NhbGUodGhpcy5KWzJdLCBsYW1iZGEpLCB0aGlzLnJiKTtcclxuICB9XHJcbiAgdXBkYXRlUmlnaHRQYXJ0KGRlbHRhVGltZSkge1xyXG4gICAgY29uc3QgeyBib2R5MSwgYm9keTIsIHJhLCByYiwgbiwgcGVuRGVwdGgsIHRyZXNob2xkLCBiaWFzRmFjdG9yIH0gPSB0aGlzO1xyXG5cclxuICAgIHRoaXMuYmlhcyA9IChNYXRoLm1heCgwLCBwZW5EZXB0aCAtIHRyZXNob2xkKSAvIGRlbHRhVGltZSkgKiBiaWFzRmFjdG9yO1xyXG4gIH1cclxufVxyXG5jbGFzcyBSb3RhdGlvbmFsQ29uc3RyYWludCBleHRlbmRzIENvbnN0cmFpbnR7XHJcbiAgY29uc3RydWN0b3IoYm9keTEsIGJvZHkyLCByYUxvY2FsLCByYkxvY2FsKXtcclxuICAgIHN1cGVyKGJvZHkxLCBib2R5MiwgbnVsbCwgbnVsbCwgbnVsbCwgcmFMb2NhbCwgcmJMb2NhbClcclxuICAgXHJcbiAgfVxyXG4gIHVwZGF0ZUxlZnRQYXJ0KGRlbHRhVGltZSkge1xyXG4gICAgY29uc3QgeyBib2R5MSwgYm9keTIsIHJhTG9jYWwsIHJiTG9jYWwgfSA9IHRoaXM7XHJcbiAgICB0aGlzLlBBID0gYm9keTEuY29sbGlkZXIubG9jYWxUb0dsb2JhbChyYUxvY2FsKTtcclxuICAgIHRoaXMuUEIgPSBib2R5Mi5jb2xsaWRlci5sb2NhbFRvR2xvYmFsKHJiTG9jYWwpO1xyXG4gICAgY29uc3QgcyA9IG0zLnRyYW5zZm9ybVBvaW50KGJvZHkxLmNvbGxpZGVyLlJtYXRyaXgsIHJhTG9jYWwpO1xyXG4gICAgY29uc3QgYiA9IG0zLnRyYW5zZm9ybVBvaW50KGJvZHkyLmNvbGxpZGVyLlJtYXRyaXgsIHJiTG9jYWwpO1xyXG5cclxuICAgIFxyXG4gICAgdGhpcy5yYSA9IHM7XHJcbiAgICB0aGlzLnJiID0gYjtcclxuXHJcblxyXG4gICAgY29uc3QgSiA9IFtbMCwgMCwgMF0sIGNyb3NzKHMsIGIpLCBbMCwgMCwgMF0sIGNyb3NzKGIsIHMpXTtcclxuXHJcbiAgICBjb25zdCBkb2YxID0gYm9keTEuRE9GO1xyXG4gICAgY29uc3QgZG9mMiA9IGJvZHkyLkRPRjtcclxuXHJcbiAgICBKWzBdWzBdICo9IGRvZjFbMF07XHJcbiAgICBKWzBdWzFdICo9IGRvZjFbMV07XHJcbiAgICBKWzBdWzJdICo9IGRvZjFbMl07XHJcblxyXG4gICAgSlsxXVswXSAqPSBkb2YxWzNdO1xyXG4gICAgSlsxXVsxXSAqPSBkb2YxWzRdO1xyXG4gICAgSlsxXVsyXSAqPSBkb2YxWzVdO1xyXG5cclxuICAgIEpbMl1bMF0gKj0gZG9mMlswXTtcclxuICAgIEpbMl1bMV0gKj0gZG9mMlsxXTtcclxuICAgIEpbMl1bMl0gKj0gZG9mMlsyXTtcclxuXHJcbiAgICBKWzNdWzBdICo9IGRvZjJbM107XHJcbiAgICBKWzNdWzFdICo9IGRvZjJbNF07XHJcbiAgICBKWzNdWzJdICo9IGRvZjJbNV07XHJcbiAgICBjb25zdCBJMSA9IGJvZHkxLmludmVyc2VJbmVydGlhO1xyXG4gICAgY29uc3QgSTIgPSBib2R5Mi5pbnZlcnNlSW5lcnRpYTtcclxuICAgIHRoaXMuSiA9IEo7XHJcbiAgICB0aGlzLkpNID0gW1xyXG4gICAgICBbMCwgMCwgMF0sXHJcbiAgICAgIG0zLnRyYW5zZm9ybVBvaW50KEkxLCB0aGlzLkpbMV0pLFxyXG4gICAgICBbMCwgMCwgMF0sXHJcbiAgICAgIG0zLnRyYW5zZm9ybVBvaW50KEkyLCB0aGlzLkpbM10pLFxyXG4gICAgXTtcclxuICAgIHRoaXMuZWZmTWFzcyA9IGRvdCh0aGlzLkpNWzFdLCB0aGlzLkpbMV0pICsgZG90KHRoaXMuSk1bM10sIHRoaXMuSlszXSk7XHJcbiAgICB0aGlzLkIgPSBbXHJcbiAgICAgIFswLCAwLCAwLCAuLi50aGlzLkpNWzFdXSxcclxuICAgICAgWzAsIDAsIDAsIC4uLnRoaXMuSk1bM11dLFxyXG4gICAgXTtcclxuICAgIHRoaXMuX0ogPSBbXHJcbiAgICAgIFsuLi50aGlzLkpbMF0sIC4uLnRoaXMuSlsxXV0sXHJcbiAgICAgIFsuLi50aGlzLkpbMl0sIC4uLnRoaXMuSlszXV0sXHJcbiAgICBdO1xyXG4gIH1cclxuICB1cGRhdGVSaWdodFBhcnQoZGVsdGFUaW1lKSB7XHJcbiAgICBjb25zdCB7IGJvZHkxLCBib2R5MiB9ID0gdGhpcztcclxuXHJcbiAgICBcclxuICAgIHRoaXMuYmlhcyA9IC1kb3QodGhpcy5KWzFdLCBib2R5MS5hbmd1bGFyVikgKyBkb3QodGhpcy5KWzNdLCBib2R5Mi5hbmd1bGFyVilcclxuICB9XHJcbiAgYXBwbHlSZXNvbHZpbmdJbXB1bHNlKGxhbWJkYSl7XHJcbiAgICBjb25zdCB7IGJvZHkxLCBib2R5MiB9ID0gdGhpcztcclxuICAgIGJvZHkxLmFkZEFuZ3VsYXJWKHNjYWxlKHRoaXMucmEsIGxhbWJkYSkpXHJcbiAgICBib2R5Mi5hZGRBbmd1bGFyVihzY2FsZSh0aGlzLnJiLCBsYW1iZGEpKVxyXG4gIH1cclxufVxyXG5jbGFzcyBKb2ludCBleHRlbmRzIENvbnN0cmFpbnQge1xyXG4gIGNvbnN0cnVjdG9yKGJvZHkxLCBib2R5MiwgcmFMb2NhbCwgcmJMb2NhbCwgYmlhc0ZhY3RvciA9IDApIHtcclxuICAgIHN1cGVyKGJvZHkxLCBib2R5MiwgbnVsbCwgbnVsbCwgbnVsbCwgcmFMb2NhbCwgcmJMb2NhbCwgYmlhc0ZhY3Rvcik7XHJcblxyXG4gICAgdGhpcy50cmVzaG9sZCA9IDAuMDAwMTtcclxuICAgIHRoaXMucmVkdWNlciA9IDAuNTtcclxuICAgIHRoaXMubWF4SW1wdWxzZSA9IDAuNztcclxuICB9XHJcbiAgdXBkYXRlTGVmdFBhcnQoZGVsdGFUaW1lKSB7XHJcbiAgICBjb25zdCB7IGJvZHkxLCBib2R5MiwgcmFMb2NhbCwgcmJMb2NhbCB9ID0gdGhpcztcclxuICAgIHRoaXMuUEEgPSBib2R5MS5jb2xsaWRlci5sb2NhbFRvR2xvYmFsKHJhTG9jYWwpO1xyXG4gICAgdGhpcy5QQiA9IGJvZHkyLmNvbGxpZGVyLmxvY2FsVG9HbG9iYWwocmJMb2NhbCk7XHJcbiAgICBjb25zdCBkaXIgPSBkaWZmKHRoaXMuUEEsIHRoaXMuUEIpO1xyXG4gICAgY29uc3QgbiA9IGRpcjtcclxuICAgIHRoaXMubiA9IG47XHJcbiAgICB0aGlzLnJhID0gZGlmZih0aGlzLlBBLCB0aGlzLmJvZHkxLmNvbGxpZGVyLnBvcyk7XHJcbiAgICB0aGlzLnJiID0gZGlmZih0aGlzLlBCLCB0aGlzLmJvZHkyLmNvbGxpZGVyLnBvcyk7XHJcbiAgICB0aGlzLnBlbkRlcHRoID0gbm9ybShkaXIpO1xyXG5cclxuICAgIGNvbnN0IEogPSBbXHJcbiAgICAgIHNjYWxlKHRoaXMubiwgLTEpLFxyXG4gICAgICBjcm9zcyh0aGlzLm4sIHRoaXMucmEpLFxyXG4gICAgICB0aGlzLm4sXHJcbiAgICAgIGNyb3NzKHRoaXMucmIsIHRoaXMubiksXHJcbiAgICBdO1xyXG5cclxuICAgIGNvbnN0IGRvZjEgPSBib2R5MS5ET0Y7XHJcbiAgICBjb25zdCBkb2YyID0gYm9keTIuRE9GO1xyXG5cclxuICAgIEpbMF1bMF0gKj0gZG9mMVswXTtcclxuICAgIEpbMF1bMV0gKj0gZG9mMVsxXTtcclxuICAgIEpbMF1bMl0gKj0gZG9mMVsyXTtcclxuXHJcbiAgICBKWzFdWzBdICo9IGRvZjFbM107XHJcbiAgICBKWzFdWzFdICo9IGRvZjFbNF07XHJcbiAgICBKWzFdWzJdICo9IGRvZjFbNV07XHJcblxyXG4gICAgSlsyXVswXSAqPSBkb2YyWzBdO1xyXG4gICAgSlsyXVsxXSAqPSBkb2YyWzFdO1xyXG4gICAgSlsyXVsyXSAqPSBkb2YyWzJdO1xyXG5cclxuICAgIEpbM11bMF0gKj0gZG9mMlszXTtcclxuICAgIEpbM11bMV0gKj0gZG9mMls0XTtcclxuICAgIEpbM11bMl0gKj0gZG9mMls1XTtcclxuICAgIGNvbnN0IEkxID0gYm9keTEuaW52ZXJzZUluZXJ0aWE7XHJcbiAgICBjb25zdCBJMiA9IGJvZHkyLmludmVyc2VJbmVydGlhO1xyXG4gICAgbGV0IE0xID0gYm9keTEuaW52ZXJzZU1hc3M7XHJcbiAgICBsZXQgTTIgPSBib2R5Mi5pbnZlcnNlTWFzcztcclxuICAgIHRoaXMuSiA9IEo7XHJcbiAgICB0aGlzLkpNID0gW1xyXG4gICAgICBzY2FsZSh0aGlzLkpbMF0sIE0xKSxcclxuICAgICAgbTMudHJhbnNmb3JtUG9pbnQoSTEsIHRoaXMuSlsxXSksXHJcbiAgICAgIHNjYWxlKHRoaXMuSlsyXSwgTTIpLFxyXG4gICAgICBtMy50cmFuc2Zvcm1Qb2ludChJMiwgdGhpcy5KWzNdKSxcclxuICAgIF07XHJcbiAgICB0aGlzLmVmZk1hc3MgPVxyXG4gICAgICBkb3QodGhpcy5KTVswXSwgSlswXSkgK1xyXG4gICAgICBkb3QodGhpcy5KTVsxXSwgdGhpcy5KWzFdKSArXHJcbiAgICAgIGRvdCh0aGlzLkpNWzJdLCBKWzJdKSArXHJcbiAgICAgIGRvdCh0aGlzLkpNWzNdLCB0aGlzLkpbM10pO1xyXG4gICAgdGhpcy5CID0gW1xyXG4gICAgICBbLi4udGhpcy5KTVswXSwgLi4udGhpcy5KTVsxXV0sXHJcbiAgICAgIFsuLi50aGlzLkpNWzJdLCAuLi50aGlzLkpNWzNdXSxcclxuICAgIF07XHJcbiAgICB0aGlzLl9KID0gW1xyXG4gICAgICBbLi4udGhpcy5KWzBdLCAuLi50aGlzLkpbMV1dLFxyXG4gICAgICBbLi4udGhpcy5KWzJdLCAuLi50aGlzLkpbM11dLFxyXG4gICAgXTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVJpZ2h0UGFydChkZWx0YVRpbWUpIHtcclxuICAgIGNvbnN0IHsgYm9keTEsIGJvZHkyLCByYSwgcmIsIG4sIHBlbkRlcHRoLCB0cmVzaG9sZCwgYmlhc0ZhY3RvciB9ID0gdGhpcztcclxuXHJcbiAgICBjb25zdCByZWxhdGl2ZVZlbG9jaXR5ID0gZGlmZihcclxuICAgICAgc3VtKGJvZHkyLnZlbG9jaXR5LCBjcm9zcyhib2R5Mi5hbmd1bGFyViwgcmIpKSxcclxuICAgICAgc3VtKGJvZHkxLnZlbG9jaXR5LCBjcm9zcyhib2R5MS5hbmd1bGFyViwgcmEpKVxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCByZWxhdGl2ZVZlbG9jaXR5Tm9ybWFsUHJvamVjdGlvbiA9IGRvdChyZWxhdGl2ZVZlbG9jaXR5LCBuKTtcclxuICAgIGNvbnN0IGZhYyA9IHBlbkRlcHRoICoqIDIgPiB0cmVzaG9sZDtcclxuICAgIHRoaXMuYmlhcyA9XHJcbiAgICAgIChiaWFzRmFjdG9yICogTWF0aC5tYXgocGVuRGVwdGggKiogMiAtIHRyZXNob2xkLCAwKSkgLyBkZWx0YVRpbWUgLVxyXG4gICAgICByZWxhdGl2ZVZlbG9jaXR5Tm9ybWFsUHJvamVjdGlvbjtcclxuICAgIHRoaXMuYmlhcyAqPSBmYWM7XHJcbiAgfVxyXG4gIGFwcGx5UmVzb2x2aW5nSW1wdWxzZShsYW1iZGEpIHtcclxuICAgIHRoaXMuYm9keTEuYXBwbHlJbXB1bHNlKHNjYWxlKHRoaXMuSlswXSwgbGFtYmRhKSwgdGhpcy5yYSk7XHJcbiAgICB0aGlzLmJvZHkyLmFwcGx5SW1wdWxzZShzY2FsZSh0aGlzLkpbMl0sIGxhbWJkYSksIHRoaXMucmIpO1xyXG4gIH1cclxuICBhcHBseVJlc29sdmluZ1BzZXVkb0ltcHVsc2UobGFtYmRhKSB7XHJcbiAgICBjb25zdCBtYXggPSB0aGlzLmVmZk1hc3MgKiAxMDtcclxuICAgIC8vbGFtYmRhID0gY2xhbXAobGFtYmRhLCAtMSwgMSlcclxuICAgIHRoaXMuYm9keTEuYXBwbHlQc2V1ZG9JbXB1bHNlKHNjYWxlKHRoaXMubiwgLWxhbWJkYSksIFswLCAwLCAwXSk7XHJcbiAgICB0aGlzLmJvZHkyLmFwcGx5UHNldWRvSW1wdWxzZShzY2FsZSh0aGlzLm4sIGxhbWJkYSksIFswLCAwLCAwXSk7XHJcbiAgfVxyXG59XHJcbmNsYXNzIEpvaW50UG9zaXRpb25Db25zdHJhaW50IGV4dGVuZHMgSm9pbnQge1xyXG4gIHVwZGF0ZVJpZ2h0UGFydChkZWx0YVRpbWUpIHtcclxuICAgIGNvbnN0IHsgcGVuRGVwdGgsIHRyZXNob2xkLCBiaWFzRmFjdG9yIH0gPSB0aGlzO1xyXG5cclxuICAgIGNvbnN0IGZhYyA9IHBlbkRlcHRoICoqIDIgPiB0cmVzaG9sZDtcclxuICAgIHRoaXMuYmlhcyA9XHJcbiAgICAgICgoYmlhc0ZhY3RvciAqIE1hdGgubWF4KHBlbkRlcHRoICoqIDIgLSB0cmVzaG9sZCwgMCkpIC8gZGVsdGFUaW1lKSAqIGZhYztcclxuICB9XHJcbiAgYXBwbHlSZXNvbHZpbmdJbXB1bHNlKGxhbWJkYSkge1xyXG4gICAgLy9pZihsYW1iZGEgPCAwLjEpcmV0dXJuXHJcbiAgICB0aGlzLmJvZHkxLmFwcGx5UHNldWRvSW1wdWxzZShzY2FsZSh0aGlzLkpbMF0sIGxhbWJkYSksIHRoaXMucmEpO1xyXG4gICAgdGhpcy5ib2R5Mi5hcHBseVBzZXVkb0ltcHVsc2Uoc2NhbGUodGhpcy5KWzJdLCBsYW1iZGEpLCB0aGlzLnJiKTtcclxuICB9XHJcbn1cclxuZXhwb3J0IHtcclxuICBDb250YWN0Q29uc3RyYWludCxcclxuICBDb25zdHJhaW50LFxyXG4gIEpvaW50LFxyXG4gIEZyaWN0aW9uQ29uc3RyYWludCxcclxuICBQb3NpdGlvbkNvbnN0cmFpbnQsXHJcbiAgSm9pbnRQb3NpdGlvbkNvbnN0cmFpbnQsXHJcbiAgUm90YXRpb25hbENvbnN0cmFpbnRcclxufTtcclxuIiwiY2xhc3MgRXZlbnRFbWl0dGVyIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuZXZlbnRzID0ge307XHJcbiAgfVxyXG4gIG9uKGV2ZW50TmFtZSwgZm4pIHtcclxuICAgIGlmICghdGhpcy5ldmVudHNbZXZlbnROYW1lXSkge1xyXG4gICAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdID0gW107XHJcbiAgICB9XHJcbiAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdLnB1c2goZm4pO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXSA9IHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0uZmlsdGVyKFxyXG4gICAgICAgIChldmVudEZuKSA9PiBmbiAhPT0gZXZlbnRGblxyXG4gICAgICApO1xyXG4gICAgfTtcclxuICB9XHJcbiAgZW1pdChldmVudE5hbWUsIGRhdGEpIHtcclxuICAgIGlmICh0aGlzLmV2ZW50c1tldmVudE5hbWVdKSB7XHJcbiAgICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0uZm9yRWFjaCgoZm4pID0+IHtcclxuICAgICAgICBmbi5jYWxsKG51bGwsIGRhdGEpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuZXhwb3J0IHsgRXZlbnRFbWl0dGVyIH07XHJcbiIsImltcG9ydCB7IHZlYzMsIG0zLCBtNCB9IGZyb20gXCJtYXRoXCI7XHJcbmltcG9ydCB7IGNsaXBGYWNlVnNGYWNlLCBpc0luQ2xvY2t3aXNlIH0gZnJvbSBcIi4vY2xpcHBpbmdcIjtcclxuXHJcbmNvbnN0IHsgZG90LCBjcm9zcywgbm9ybWFsaXplLCBzdW0sIGRpZmYsICBzY2FsZSwgaXNOdWxsLCBub3JtIH0gPSB2ZWMzO1xyXG5jb25zdCBDTElQX0JJQVMgPSAwLjE7XHJcbmNvbnN0IEdKS19NQVhfSVRFUkFUSU9OU19OVU0gPSA2NDtcclxuY29uc3QgRVBBX0JJQVMgPSAwLjAwMDAxO1xyXG5cclxuY29uc3QgcmF5VnNQbGFuZUludGVyc2VjID0gKHBsYW5lLCBwb2ludCwgZGlyZWN0aW9uKSA9PiB7XHJcbiAgY29uc3QgW29yaWdpbiwgbm9ybWFsXSA9IHBsYW5lO1xyXG4gIGNvbnN0IF9kb3QgPSBkb3Qobm9ybWFsLCBkaXJlY3Rpb24pO1xyXG4gIGNvbnN0IGZyb21Qb2ludFRvT3JpZ2luID0gZGlmZihwb2ludCwgb3JpZ2luKTtcclxuICBjb25zdCBmYWMgPSBkb3QoZnJvbVBvaW50VG9PcmlnaW4sIG5vcm1hbCkgLyBfZG90O1xyXG4gIHJldHVybiBkaWZmKHBvaW50LCBzY2FsZShkaXJlY3Rpb24sIGZhYykpO1xyXG59O1xyXG5jb25zdCBpc1BvaW50QmVoaW5kUGxhbmUgPSAocGxhbmUsIHBvaW50LCBzaWduID0gMSkgPT4ge1xyXG4gIGNvbnN0IFtvcmlnaW4sIG5vcm1hbF0gPSBwbGFuZTtcclxuICByZXR1cm4gZG90KG5vcm1hbCwgZGlmZihwb2ludCwgb3JpZ2luKSkgKiBzaWduID4gMCAtIENMSVBfQklBUztcclxufTtcclxuY29uc3QgcG9pbnRPblBsYW5lUHJvamVjdGlvbiA9IChwbGFuZSwgcG9pbnQpID0+IHtcclxuICBjb25zdCBbb3JpZ2luLCBub3JtYWxdID0gcGxhbmU7XHJcbiAgY29uc3QgZnJvbVBvaW50VG9PcmlnaW4gPSBkaWZmKHBvaW50LCBvcmlnaW4pO1xyXG4gIGNvbnN0IHByb2pBbG9uZ05vcm1hbCA9IGRvdChub3JtYWwsIGZyb21Qb2ludFRvT3JpZ2luKTtcclxuXHJcbiAgcmV0dXJuIGRpZmYocG9pbnQsIHNjYWxlKG5vcm1hbCwgcHJvakFsb25nTm9ybWFsKSk7XHJcbn07XHJcbmNvbnN0IGNsaXBQb2ludHNCZWhpbmRQbGFuZSA9IChwbGFuZSwgcG9pbnRzLCBzaWduID0gMSkgPT4ge1xyXG4gIGNvbnN0IFtvcmlnaW4sIG5vcm1hbF0gPSBwbGFuZTtcclxuXHJcbiAgcmV0dXJuIHBvaW50cy5maWx0ZXIoXHJcbiAgICAocG9pbnQpID0+IGRvdChub3JtYWwsIGRpZmYocG9pbnQsIG9yaWdpbikpICogc2lnbiArIENMSVBfQklBUyA+IDBcclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0MkRjb29yZHNPblBsYW5lID0gKGksIGosIHBvaW50KSA9PiB7XHJcbiAgcmV0dXJuIFtkb3QoaSwgcG9pbnQpLCBkb3QoaiwgcG9pbnQpXTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZV9zaW1wbGV4MyhhLCBiLCBjLCBkLCBzZWFyY2hfZGlyLCBzaW1wX2RpbSkge1xyXG4gIGNvbnN0IG4gPSBjcm9zcyhkaWZmKHRoaXMuYiwgdGhpcy5hKSwgZGlmZih0aGlzLmMsIHRoaXMuYSkpO1xyXG4gIGNvbnN0IEFPID0gc2NhbGUodGhpcy5hLCAtMSk7XHJcblxyXG4gIHRoaXMuc2ltcF9kaW0gPSAyO1xyXG4gIGlmIChkb3QoY3Jvc3MoZGlmZih0aGlzLmIsIHRoaXMuYSksIG4pLCBBTykgPiAwKSB7XHJcbiAgICB0aGlzLmMgPSB0aGlzLmE7XHJcbiAgICB0aGlzLnNlYXJjaF9kaXIgPSBjcm9zcyhcclxuICAgICAgY3Jvc3MoZGlmZih0aGlzLmIsIHRoaXMuYSksIEFPKSxcclxuICAgICAgZGlmZih0aGlzLmIsIHRoaXMuYSlcclxuICAgICk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIGlmIChkb3QoY3Jvc3MobiwgZGlmZih0aGlzLmMsIHRoaXMuYSkpLCBBTykgPiAwKSB7XHJcbiAgICB0aGlzLmIgPSB0aGlzLmE7XHJcbiAgICB0aGlzLnNlYXJjaF9kaXIgPSBjcm9zcyhcclxuICAgICAgY3Jvc3MoZGlmZih0aGlzLmMsIHRoaXMuYSksIEFPKSxcclxuICAgICAgZGlmZih0aGlzLmMsIHRoaXMuYSlcclxuICAgICk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIHRoaXMuc2ltcF9kaW0gPSAzO1xyXG4gIGlmIChkb3QobiwgQU8pID4gMCkge1xyXG4gICAgdGhpcy5kID0gdGhpcy5jO1xyXG4gICAgdGhpcy5jID0gdGhpcy5iO1xyXG4gICAgdGhpcy5iID0gdGhpcy5hO1xyXG4gICAgdGhpcy5zZWFyY2hfZGlyID0gbjtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgdGhpcy5kID0gdGhpcy5iO1xyXG4gIHRoaXMuYiA9IHRoaXMuYTtcclxuICB0aGlzLnNlYXJjaF9kaXIgPSBzY2FsZShuLCAtMSk7XHJcbiAgcmV0dXJuO1xyXG59XHJcbmZ1bmN0aW9uIHVwZGF0ZV9zaW1wbGV4NChhLCBiLCBjLCBkLCBzZWFyY2hfZGlyLCBzaW1wX2RpbSkge1xyXG4gIGNvbnN0IEFCQyA9IGNyb3NzKGRpZmYodGhpcy5iLCB0aGlzLmEpLCBkaWZmKHRoaXMuYywgdGhpcy5hKSk7XHJcbiAgY29uc3QgQUNEID0gY3Jvc3MoZGlmZih0aGlzLmMsIHRoaXMuYSksIGRpZmYodGhpcy5kLCB0aGlzLmEpKTtcclxuICBjb25zdCBBREIgPSBjcm9zcyhkaWZmKHRoaXMuZCwgdGhpcy5hKSwgZGlmZih0aGlzLmIsIHRoaXMuYSkpO1xyXG4gIGNvbnN0IEFPID0gc2NhbGUodGhpcy5hLCAtMSk7XHJcbiAgdGhpcy5zaW1wX2RpbSA9IDM7XHJcblxyXG4gIGlmIChkb3QoQUJDLCBBTykgPiAwKSB7XHJcbiAgICB0aGlzLmQgPSB0aGlzLmM7XHJcbiAgICB0aGlzLmMgPSB0aGlzLmI7XHJcbiAgICB0aGlzLmIgPSB0aGlzLmE7XHJcbiAgICB0aGlzLnNlYXJjaF9kaXIgPSBBQkM7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBpZiAoZG90KEFDRCwgQU8pID4gMCkge1xyXG4gICAgdGhpcy5iID0gdGhpcy5hO1xyXG4gICAgdGhpcy5zZWFyY2hfZGlyID0gQUNEO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgaWYgKGRvdChBREIsIEFPKSA+IDApIHtcclxuICAgIHRoaXMuYyA9IHRoaXMuZDtcclxuICAgIHRoaXMuZCA9IHRoaXMuYjtcclxuICAgIHRoaXMuYiA9IHRoaXMuYTtcclxuICAgIHRoaXMuc2VhcmNoX2RpciA9IEFEQjtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgcmV0dXJuIHRydWU7XHJcbn1cclxuZnVuY3Rpb24gZ2prKGJvZHkxLCBib2R5Mikge1xyXG4gIGNvbnN0IGNvbGwxID0gYm9keTEuY29sbGlkZXI7XHJcbiAgY29uc3QgY29sbDIgPSBib2R5Mi5jb2xsaWRlcjtcclxuICB0aGlzLmEgPSBbMCwgMCwgMF07XHJcbiAgdGhpcy5iID0gWzAsIDAsIDBdO1xyXG4gIHRoaXMuYyA9IFswLCAwLCAwXTtcclxuICB0aGlzLmQgPSBbMCwgMCwgMF07XHJcbiAgdGhpcy5zZWFyY2hfZGlyID0gWzAsIDAsIDBdO1xyXG4gIHRoaXMuc2ltcF9kaW0gPSAwO1xyXG5cclxuICB0aGlzLm9yaWdpbnNNYXAgPSBuZXcgTWFwKCk7XHJcblxyXG4gIGxldCBtdHYgPSBbMCwgMCwgMF07XHJcblxyXG4gIHRoaXMuc2VhcmNoX2RpciA9IGRpZmYoY29sbDEucG9zLCBjb2xsMi5wb3MpO1xyXG4gIGNvbnN0IGNfb3JpZ2luMSA9IGNvbGwxLnN1cHBvcnQoc2NhbGUodGhpcy5zZWFyY2hfZGlyLCAtMSkpO1xyXG4gIGNvbnN0IGNfb3JpZ2luMiA9IGNvbGwyLnN1cHBvcnQodGhpcy5zZWFyY2hfZGlyKTtcclxuICB0aGlzLmMgPSBkaWZmKGNfb3JpZ2luMiwgY19vcmlnaW4xKTtcclxuXHJcbiAgdGhpcy5vcmlnaW5zTWFwLnNldCh0aGlzLmMsIFtjX29yaWdpbjEsIGNfb3JpZ2luMl0pO1xyXG5cclxuICB0aGlzLnNlYXJjaF9kaXIgPSBzY2FsZSh0aGlzLmMsIC0xKTtcclxuXHJcbiAgY29uc3QgYl9vcmlnaW4xID0gY29sbDEuc3VwcG9ydChzY2FsZSh0aGlzLnNlYXJjaF9kaXIsIC0xKSk7XHJcbiAgY29uc3QgYl9vcmlnaW4yID0gY29sbDIuc3VwcG9ydCh0aGlzLnNlYXJjaF9kaXIpO1xyXG4gIHRoaXMuYiA9IGRpZmYoYl9vcmlnaW4yLCBiX29yaWdpbjEpO1xyXG5cclxuICB0aGlzLm9yaWdpbnNNYXAuc2V0KHRoaXMuYiwgW2Jfb3JpZ2luMSwgYl9vcmlnaW4yXSk7XHJcblxyXG4gIGlmIChkb3QodGhpcy5iLCB0aGlzLnNlYXJjaF9kaXIpIDwgMCkge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICB0aGlzLnNlYXJjaF9kaXIgPSBjcm9zcyhcclxuICAgIGNyb3NzKGRpZmYodGhpcy5jLCB0aGlzLmIpLCBzY2FsZSh0aGlzLmIsIC0xKSksXHJcbiAgICBkaWZmKHRoaXMuYywgdGhpcy5iKVxyXG4gICk7XHJcblxyXG4gIGlmIChpc051bGwodGhpcy5zZWFyY2hfZGlyKSkge1xyXG4gICAgdGhpcy5zZWFyY2hfZGlyID0gY3Jvc3MoZGlmZih0aGlzLmMsIHRoaXMuYiksIFsxLCAwLCAwXSk7XHJcblxyXG4gICAgaWYgKGlzTnVsbCh0aGlzLnNlYXJjaF9kaXIpKSB7XHJcbiAgICAgIHRoaXMuc2VhcmNoX2RpciA9IGNyb3NzKGRpZmYodGhpcy5jLCB0aGlzLmIpLCBbMCwgMCwgLTFdKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRoaXMuc2ltcF9kaW0gPSAyO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgR0pLX01BWF9JVEVSQVRJT05TX05VTTsgKytpKSB7XHJcbiAgICBjb25zdCBhX29yaWdpbjEgPSBjb2xsMS5zdXBwb3J0KHNjYWxlKHRoaXMuc2VhcmNoX2RpciwgLTEpKTtcclxuICAgIGNvbnN0IGFfb3JpZ2luMiA9IGNvbGwyLnN1cHBvcnQodGhpcy5zZWFyY2hfZGlyKTtcclxuICAgIHRoaXMuYSA9IGRpZmYoYV9vcmlnaW4yLCBhX29yaWdpbjEpO1xyXG5cclxuICAgIHRoaXMub3JpZ2luc01hcC5zZXQodGhpcy5hLCBbYV9vcmlnaW4xLCBhX29yaWdpbjJdKTtcclxuICAgIGlmIChkb3QodGhpcy5hLCB0aGlzLnNlYXJjaF9kaXIpIDwgMCkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgdGhpcy5zaW1wX2RpbSsrO1xyXG4gICAgaWYgKHRoaXMuc2ltcF9kaW0gPT09IDMpIHtcclxuICAgICAgdXBkYXRlX3NpbXBsZXgzLmFwcGx5KHRoaXMpO1xyXG4gICAgfSBlbHNlIGlmICh1cGRhdGVfc2ltcGxleDQuYXBwbHkodGhpcykpIHtcclxuICAgICAgcmV0dXJuIEVQQSh0aGlzLmEsIHRoaXMuYiwgdGhpcy5jLCB0aGlzLmQsIHRoaXMub3JpZ2luc01hcCwgYm9keTEsIGJvZHkyKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIG51bGw7XHJcbn1cclxuXHJcbmNvbnN0IGJhcmljZW50cmljID0gKGZhY2UsIHBvaW50KSA9PiB7XHJcbiAgbGV0IGExMSA9IGZhY2VbMF1bMF07XHJcbiAgbGV0IGExMiA9IGZhY2VbMV1bMF07XHJcbiAgbGV0IGExMyA9IGZhY2VbMl1bMF07XHJcbiAgbGV0IGIxID0gcG9pbnRbMF07XHJcbiAgbGV0IGEyMSA9IGZhY2VbMF1bMV07XHJcbiAgbGV0IGEyMiA9IGZhY2VbMV1bMV07XHJcbiAgbGV0IGEyMyA9IGZhY2VbMl1bMV07XHJcbiAgbGV0IGIyID0gcG9pbnRbMV07XHJcbiAgbGV0IGEzMSA9IGZhY2VbMF1bMl07XHJcbiAgbGV0IGEzMiA9IGZhY2VbMV1bMl07XHJcbiAgbGV0IGEzMyA9IGZhY2VbMl1bMl07XHJcbiAgbGV0IGIzID0gcG9pbnRbMl07XHJcblxyXG4gIGNvbnN0IGQgPVxyXG4gICAgYTExICogYTIyICogYTMzICtcclxuICAgIGEyMSAqIGEzMiAqIGExMyArXHJcbiAgICBhMTIgKiBhMjMgKiBhMzEgLVxyXG4gICAgYTEzICogYTIyICogYTMxIC1cclxuICAgIGEyMSAqIGExMiAqIGEzMyAtXHJcbiAgICBhMzIgKiBhMjMgKiBhMTE7XHJcblxyXG4gIGNvbnN0IGQxID1cclxuICAgIGIxICogYTIyICogYTMzICtcclxuICAgIGIyICogYTMyICogYTEzICtcclxuICAgIGExMiAqIGEyMyAqIGIzIC1cclxuICAgIGExMyAqIGEyMiAqIGIzIC1cclxuICAgIGIyICogYTEyICogYTMzIC1cclxuICAgIGEzMiAqIGEyMyAqIGIxO1xyXG5cclxuICBjb25zdCBkMiA9XHJcbiAgICBhMTEgKiBiMiAqIGEzMyArXHJcbiAgICBhMjEgKiBiMyAqIGExMyArXHJcbiAgICBiMSAqIGEyMyAqIGEzMSAtXHJcbiAgICBhMTMgKiBiMiAqIGEzMSAtXHJcbiAgICBhMTEgKiBiMyAqIGEyMyAtXHJcbiAgICBhMjEgKiBiMSAqIGEzMztcclxuXHJcbiAgY29uc3QgZDMgPVxyXG4gICAgYTExICogYTIyICogYjMgK1xyXG4gICAgYTIxICogYTMyICogYjEgK1xyXG4gICAgYTEyICogYjIgKiBhMzEgLVxyXG4gICAgYjEgKiBhMjIgKiBhMzEgLVxyXG4gICAgYTIxICogYTEyICogYjMgLVxyXG4gICAgYjIgKiBhMzIgKiBhMTE7XHJcblxyXG4gIHJldHVybiBbZDEgLyBkLCBkMiAvIGQsIGQzIC8gZF07XHJcbn07XHJcbmNvbnN0IG9yaWdpblRvRmFjZVByb2ogPSAoZmFjZSkgPT4ge1xyXG4gIGNvbnN0IG5vcm1hbCA9IGZhY2VbM107XHJcbiAgY29uc3QgcG9pbnQgPSBmYWNlWzBdO1xyXG4gIGNvbnN0IGMgPSAtbm9ybWFsWzBdICogcG9pbnRbMF0gLSBub3JtYWxbMV0gKiBwb2ludFsxXSAtIG5vcm1hbFsyXSAqIHBvaW50WzJdO1xyXG4gIGNvbnN0IHQgPVxyXG4gICAgLWMgL1xyXG4gICAgKG5vcm1hbFswXSAqIG5vcm1hbFswXSArIG5vcm1hbFsxXSAqIG5vcm1hbFsxXSArIG5vcm1hbFsyXSAqIG5vcm1hbFsyXSk7XHJcbiAgcmV0dXJuIFt0ICogbm9ybWFsWzBdLCB0ICogbm9ybWFsWzFdLCB0ICogbm9ybWFsWzJdXTtcclxufTtcclxuXHJcbmNvbnN0IE1BWF9OVU1fRkFDRVMgPSA2NDtcclxuY29uc3QgTUFYX05VTV9MT09TRV9FREdFUyA9IDMyO1xyXG5jb25zdCBFUEFfTUFYX05VTV9JVEVSID0gNjQ7XHJcbmNvbnN0IEVQQSA9IChhLCBiLCBjLCBkLCBvcmlnaW5zTWFwLCBib2R5MSwgYm9keTIpID0+IHtcclxuICBjb25zdCBjb2xsMSA9IGJvZHkxLmNvbGxpZGVyO1xyXG4gIGNvbnN0IGNvbGwyID0gYm9keTIuY29sbGlkZXI7XHJcbiAgY29uc3QgZmFjZXMgPSBbXTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xyXG4gICAgZmFjZXNbaV0gPSBbXTtcclxuICB9XHJcblxyXG4gIGZhY2VzWzBdWzBdID0gYTtcclxuICBmYWNlc1swXVsxXSA9IGI7XHJcbiAgZmFjZXNbMF1bMl0gPSBjO1xyXG4gIGZhY2VzWzBdWzNdID0gbm9ybWFsaXplKGNyb3NzKGRpZmYoYiwgYSksIGRpZmYoYywgYSkpKTtcclxuICBmYWNlc1sxXVswXSA9IGE7XHJcbiAgZmFjZXNbMV1bMV0gPSBjO1xyXG4gIGZhY2VzWzFdWzJdID0gZDtcclxuICBmYWNlc1sxXVszXSA9IG5vcm1hbGl6ZShjcm9zcyhkaWZmKGMsIGEpLCBkaWZmKGQsIGEpKSk7XHJcbiAgZmFjZXNbMl1bMF0gPSBhO1xyXG4gIGZhY2VzWzJdWzFdID0gZDtcclxuICBmYWNlc1syXVsyXSA9IGI7XHJcbiAgZmFjZXNbMl1bM10gPSBub3JtYWxpemUoY3Jvc3MoZGlmZihkLCBhKSwgZGlmZihiLCBhKSkpO1xyXG4gIGZhY2VzWzNdWzBdID0gYjtcclxuICBmYWNlc1szXVsxXSA9IGQ7XHJcbiAgZmFjZXNbM11bMl0gPSBjO1xyXG4gIGZhY2VzWzNdWzNdID0gbm9ybWFsaXplKGNyb3NzKGRpZmYoZCwgYiksIGRpZmYoYywgYikpKTtcclxuXHJcbiAgbGV0IG51bV9mYWNlcyA9IDQ7XHJcbiAgbGV0IGNsb3Nlc3RfZmFjZSA9IG51bGw7XHJcbiAgbGV0IHNlYXJjaF9kaXI7XHJcblxyXG4gIGxldCBwO1xyXG4gIGZvciAobGV0IGl0ZXJhdGlvbiA9IDA7IGl0ZXJhdGlvbiA8IEVQQV9NQVhfTlVNX0lURVI7ICsraXRlcmF0aW9uKSB7XHJcbiAgICBsZXQgbWluX2Rpc3QgPSBkb3QoZmFjZXNbMF1bMF0sIGZhY2VzWzBdWzNdKTtcclxuXHJcbiAgICBjbG9zZXN0X2ZhY2UgPSAwO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1fZmFjZXM7ICsraSkge1xyXG4gICAgICBsZXQgZGlzdCA9IGRvdChmYWNlc1tpXVswXSwgZmFjZXNbaV1bM10pO1xyXG4gICAgICBpZiAoZGlzdCA8IG1pbl9kaXN0KSB7XHJcbiAgICAgICAgbWluX2Rpc3QgPSBkaXN0O1xyXG4gICAgICAgIGNsb3Nlc3RfZmFjZSA9IGk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHNlYXJjaF9kaXIgPSBmYWNlc1tjbG9zZXN0X2ZhY2VdWzNdO1xyXG5cclxuICAgIGNvbnN0IHBfb3JpZ2luMSA9IGNvbGwxLnN1cHBvcnQoc2NhbGUoc2VhcmNoX2RpciwgLTEpKTtcclxuICAgIGNvbnN0IHBfb3JpZ2luMiA9IGNvbGwyLnN1cHBvcnQoc2VhcmNoX2Rpcik7XHJcbiAgICBwID0gZGlmZihwX29yaWdpbjIsIHBfb3JpZ2luMSk7XHJcbiAgICBvcmlnaW5zTWFwLnNldChwLCBbcF9vcmlnaW4xLCBwX29yaWdpbjJdKTtcclxuXHJcbiAgICBpZiAoZG90KHAsIHNlYXJjaF9kaXIpIC0gbWluX2Rpc3QgPCBFUEFfQklBUykge1xyXG4gICAgICBjb25zdCBmYWNlID0gZmFjZXNbY2xvc2VzdF9mYWNlXTtcclxuXHJcbiAgICAgIGNvbnN0IHBvaW50ID0gb3JpZ2luVG9GYWNlUHJvaihmYWNlKTtcclxuXHJcbiAgICAgIGNvbnN0IFtBYSwgQmFdID0gb3JpZ2luc01hcC5nZXQoZmFjZVswXSk7XHJcbiAgICAgIC8vY29uc3QgQWEgPSBmYWNlWzBdLm9hXHJcbiAgICAgIC8vY29uc3QgQmEgPSBmYWNlWzBdLm9iXHJcbiAgICAgIGNvbnN0IFtBYiwgQmJdID0gb3JpZ2luc01hcC5nZXQoZmFjZVsxXSk7XHJcbiAgICAgIC8vY29uc3QgQWIgPSBmYWNlWzFdLm9hXHJcbiAgICAgIC8vY29uc3QgQmIgPSBmYWNlWzFdLm9iXHJcbiAgICAgIGNvbnN0IFtBYywgQmNdID0gb3JpZ2luc01hcC5nZXQoZmFjZVsyXSk7XHJcbiAgICAgIC8vY29uc3QgQWMgPSBmYWNlWzJdLm9hXHJcbiAgICAgIC8vY29uc3QgQmMgPSBmYWNlWzJdLm9iXHJcblxyXG4gICAgICBjb25zdCByZXN1bHQgPSBiYXJpY2VudHJpYyhmYWNlLCBwb2ludCk7XHJcblxyXG4gICAgICBpZiAoaXNOYU4ocmVzdWx0WzBdICsgcmVzdWx0WzFdICsgcmVzdWx0WzJdKSkge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBsZXQgUEEgPSBzdW0oXHJcbiAgICAgICAgc3VtKHNjYWxlKEFhLCByZXN1bHRbMF0pLCBzY2FsZShBYiwgcmVzdWx0WzFdKSksXHJcbiAgICAgICAgc2NhbGUoQWMsIHJlc3VsdFsyXSlcclxuICAgICAgKTtcclxuICAgICAgLy9BYS5tdWx0aXBseShyZXN1bHRbMF0pLmFkZChBYi5tdWx0aXBseShyZXN1bHRbMV0pKS5hZGQoQWMubXVsdGlwbHkocmVzdWx0WzJdKSlcclxuICAgICAgbGV0IFBCID0gc3VtKFxyXG4gICAgICAgIHN1bShzY2FsZShCYSwgcmVzdWx0WzBdKSwgc2NhbGUoQmIsIHJlc3VsdFsxXSkpLFxyXG4gICAgICAgIHNjYWxlKEJjLCByZXN1bHRbMl0pXHJcbiAgICAgICk7XHJcbiAgICAgIC8vQmEubXVsdGlwbHkocmVzdWx0WzBdKS5hZGQoQmIubXVsdGlwbHkocmVzdWx0WzFdKSkuYWRkKEJjLm11bHRpcGx5KHJlc3VsdFsyXSkpXHJcblxyXG4gICAgICAvL2NvbnN0IHJhID0gUEEuc3Vic3RyYWN0KGNvbGwxLnBvcylcclxuXHJcbiAgICAgIGNvbnN0IG4gPSBub3JtYWxpemUoc2NhbGUoZmFjZVszXSwgLWRvdChwLCBzZWFyY2hfZGlyKSkpO1xyXG4gICAgICBpZiAobm9ybShuKSA8IDAuMDEpIHJldHVybiBudWxsO1xyXG4gICAgICBjb25zdCBwZW5EZXB0aCA9IC1kb3QoZGlmZihQQiwgUEEpLCBuKTtcclxuXHJcbiAgICAgIHJldHVybiB7IFBBLCBQQiwgbiwgcGVuRGVwdGggfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBsb29zZV9lZGdlcyA9IFtdO1xyXG4gICAgbGV0IG51bV9sb29zZV9lZGdlcyA9IDA7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bV9mYWNlczsgKytpKSB7XHJcbiAgICAgIGlmIChkb3QoZmFjZXNbaV1bM10sIGRpZmYocCwgZmFjZXNbaV1bMF0pKSA+IDApIHtcclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDM7IGorKykge1xyXG4gICAgICAgICAgbGV0IGN1cnJlbnRfZWRnZSA9IFtmYWNlc1tpXVtqXSwgZmFjZXNbaV1bKGogKyAxKSAlIDNdXTtcclxuICAgICAgICAgIGxldCBmb3VuZF9lZGdlID0gZmFsc2U7XHJcbiAgICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IG51bV9sb29zZV9lZGdlczsgaysrKSB7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICBsb29zZV9lZGdlc1trXVsxXSA9PT0gY3VycmVudF9lZGdlWzBdICYmXHJcbiAgICAgICAgICAgICAgbG9vc2VfZWRnZXNba11bMF0gPT09IGN1cnJlbnRfZWRnZVsxXVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICBsb29zZV9lZGdlc1trXVswXSA9IGxvb3NlX2VkZ2VzW251bV9sb29zZV9lZGdlcyAtIDFdWzBdO1xyXG4gICAgICAgICAgICAgIGxvb3NlX2VkZ2VzW2tdWzFdID0gbG9vc2VfZWRnZXNbbnVtX2xvb3NlX2VkZ2VzIC0gMV1bMV07XHJcbiAgICAgICAgICAgICAgbnVtX2xvb3NlX2VkZ2VzLS07XHJcbiAgICAgICAgICAgICAgZm91bmRfZWRnZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgayA9IG51bV9sb29zZV9lZGdlcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKCFmb3VuZF9lZGdlKSB7XHJcbiAgICAgICAgICAgIGlmIChudW1fbG9vc2VfZWRnZXMgPj0gTUFYX05VTV9MT09TRV9FREdFUykgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBsb29zZV9lZGdlc1tudW1fbG9vc2VfZWRnZXNdID0gW107XHJcbiAgICAgICAgICAgIGxvb3NlX2VkZ2VzW251bV9sb29zZV9lZGdlc11bMF0gPSBjdXJyZW50X2VkZ2VbMF07XHJcbiAgICAgICAgICAgIGxvb3NlX2VkZ2VzW251bV9sb29zZV9lZGdlc11bMV0gPSBjdXJyZW50X2VkZ2VbMV07XHJcbiAgICAgICAgICAgIG51bV9sb29zZV9lZGdlcysrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmYWNlc1tpXVswXSA9IGZhY2VzW251bV9mYWNlcyAtIDFdWzBdO1xyXG4gICAgICAgIGZhY2VzW2ldWzFdID0gZmFjZXNbbnVtX2ZhY2VzIC0gMV1bMV07XHJcbiAgICAgICAgZmFjZXNbaV1bMl0gPSBmYWNlc1tudW1fZmFjZXMgLSAxXVsyXTtcclxuICAgICAgICBmYWNlc1tpXVszXSA9IGZhY2VzW251bV9mYWNlcyAtIDFdWzNdO1xyXG4gICAgICAgIG51bV9mYWNlcy0tO1xyXG4gICAgICAgIGktLTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1fbG9vc2VfZWRnZXM7IGkrKykge1xyXG4gICAgICBpZiAobnVtX2ZhY2VzID49IE1BWF9OVU1fRkFDRVMpIGJyZWFrO1xyXG4gICAgICBmYWNlc1tudW1fZmFjZXNdID0gW107XHJcbiAgICAgIGZhY2VzW251bV9mYWNlc11bMF0gPSBsb29zZV9lZGdlc1tpXVswXTtcclxuICAgICAgZmFjZXNbbnVtX2ZhY2VzXVsxXSA9IGxvb3NlX2VkZ2VzW2ldWzFdO1xyXG4gICAgICBmYWNlc1tudW1fZmFjZXNdWzJdID0gcDtcclxuXHJcbiAgICAgIGZhY2VzW251bV9mYWNlc11bM10gPSBub3JtYWxpemUoXHJcbiAgICAgICAgY3Jvc3MoXHJcbiAgICAgICAgICBkaWZmKGxvb3NlX2VkZ2VzW2ldWzBdLCBsb29zZV9lZGdlc1tpXVsxXSksXHJcbiAgICAgICAgICBkaWZmKGxvb3NlX2VkZ2VzW2ldWzBdLCBwKVxyXG4gICAgICAgIClcclxuICAgICAgKTtcclxuXHJcbiAgICAgIGlmIChkb3QoZmFjZXNbbnVtX2ZhY2VzXVswXSwgZmFjZXNbbnVtX2ZhY2VzXVszXSkgKyAwLjAxIDwgMCkge1xyXG4gICAgICAgIGNvbnN0IHRlbXAgPSBmYWNlc1tudW1fZmFjZXNdWzBdO1xyXG4gICAgICAgIGZhY2VzW251bV9mYWNlc11bMF0gPSBmYWNlc1tudW1fZmFjZXNdWzFdO1xyXG4gICAgICAgIGZhY2VzW251bV9mYWNlc11bMV0gPSB0ZW1wO1xyXG4gICAgICAgIGZhY2VzW251bV9mYWNlc11bM10gPSBzY2FsZShmYWNlc1tudW1fZmFjZXNdWzNdLCAtMSk7XHJcbiAgICAgIH1cclxuICAgICAgbnVtX2ZhY2VzKys7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbnVsbDtcclxufTtcclxuXHJcbmNvbnN0IGdqa1Njb3BlID0ge307XHJcbmNvbnN0IF9namsgPSBnamsuYmluZChnamtTY29wZSk7XHJcblxyXG5jb25zdCBnZXRDb250YWN0TWFuaWZvbGQgPSAoYm9keTEsIGJvZHkyKSA9PiB7XHJcbiAgY29uc3QgY29sbDEgPSBib2R5MS5jb2xsaWRlcjtcclxuICBjb25zdCBjb2xsMiA9IGJvZHkyLmNvbGxpZGVyO1xyXG4gIGNvbnN0IGNvbnRhY3REYXRhID0gX2dqayhib2R5MSwgYm9keTIpO1xyXG4gIGlmICghY29udGFjdERhdGEpIHJldHVybiBudWxsO1xyXG5cclxuICBjb25zdCB7IFBBLCBQQiwgbiB9ID0gY29udGFjdERhdGE7XHJcblxyXG4gIGlmIChjb2xsMS50eXBlID09PSBcInNwaGVyZVwiIHx8IGNvbGwyLnR5cGUgPT09IFwic3BoZXJlXCIpIHtcclxuICAgIGNvbnN0IHJiID0gZGlmZihQQiwgY29sbDIucG9zKTtcclxuICAgIGNvbnN0IHJhID0gZGlmZihQQSwgY29sbDEucG9zKTtcclxuICAgIGNvbnN0IHBlbkRlcHRoID0gLWRvdChkaWZmKFBCLCBQQSksIG4pO1xyXG4gICAgY29uc3QgcmFMb2NhbCA9IG0zLnRyYW5zZm9ybVBvaW50KGNvbGwxLlJtYXRyaXhJbnZlcnNlLCByYSk7XHJcbiAgICBjb25zdCByYkxvY2FsID0gbTMudHJhbnNmb3JtUG9pbnQoY29sbDIuUm1hdHJpeEludmVyc2UsIHJiKTtcclxuICAgIGNvbnN0IGkgPSBbblsxXSArIG5bMl0sblsyXSAtIG5bMF0sIC1uWzBdIC0gblsxXV1cclxuICAgXHJcbiAgICBcclxuICAgIGNvbnN0IGogPSBjcm9zcyhzY2FsZShuLCAtMSksIGkpXHJcbiAgICByZXR1cm4gW1xyXG4gICAgICB7XHJcbiAgICAgICAgcmFMb2NhbCxcclxuICAgICAgICByYkxvY2FsLFxyXG4gICAgICAgIHJhLFxyXG4gICAgICAgIHJiLFxyXG4gICAgICAgIFBBLFxyXG4gICAgICAgIFBCLFxyXG4gICAgICAgIG4sXHJcbiAgICAgICAgcGVuRGVwdGgsXHJcbiAgICAgICAgYm9keTEsXHJcbiAgICAgICAgYm9keTIsXHJcbiAgICAgICAgaSxcclxuICAgICAgICBqLFxyXG4gICAgICB9LFxyXG4gICAgXTtcclxuICB9XHJcbiAgXHJcbiAgY29uc3QgblJldmVyc2UgPSBzY2FsZShuLCAtMSk7XHJcblxyXG4gIGNvbnN0IFtjb250YWN0RmFjZTEsIG5vcm1hbDFdID0gY29sbDEuZ2V0Q2xvc2VzdEZhY2VCeU5vcm1hbChuUmV2ZXJzZSk7XHJcbiAgY29uc3QgW2NvbnRhY3RGYWNlMiwgbm9ybWFsMl0gPSBjb2xsMi5nZXRDbG9zZXN0RmFjZUJ5Tm9ybWFsKG4pO1xyXG4gIGNvbnN0IHBsYW5lID0gW3NjYWxlKHN1bShQQSwgUEIpLCAwLjUpLCBuXTtcclxuICBjb25zdCBwcm9qZWN0aW9uczEgPSBjb250YWN0RmFjZTEubWFwKChwKSA9PlxyXG4gICAgcG9pbnRPblBsYW5lUHJvamVjdGlvbihwbGFuZSwgcClcclxuICApO1xyXG4gIGNvbnN0IHByb2plY3Rpb25zMiA9IGNvbnRhY3RGYWNlMi5tYXAoKHApID0+XHJcbiAgICBwb2ludE9uUGxhbmVQcm9qZWN0aW9uKHBsYW5lLCBwKVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IG9yaWdpbiA9IHBsYW5lWzBdO1xyXG4gIGNvbnN0IGkgPSBub3JtYWxpemUoIFtuWzFdICsgblsyXSxuWzJdIC0gblswXSwgLW5bMF0gLSBuWzFdXSlcclxuICAgXHJcbiAgICBcclxuICBjb25zdCBqID0gY3Jvc3Moc2NhbGUobiwgLTEpLCBpKVxyXG5cclxuICBsZXQgXzJkMSA9IHByb2plY3Rpb25zMS5tYXAoKHApID0+IGdldDJEY29vcmRzT25QbGFuZShpLCBqLCBkaWZmKHAsIG9yaWdpbikpKTtcclxuICBsZXQgXzJkMiA9IHByb2plY3Rpb25zMi5tYXAoKHApID0+IGdldDJEY29vcmRzT25QbGFuZShpLCBqLCBkaWZmKHAsIG9yaWdpbikpKTtcclxuXHJcbiAgY29uc3QgZGlyMSA9IGlzSW5DbG9ja3dpc2UoXzJkMSk7XHJcbiAgY29uc3QgZGlyMiA9IGlzSW5DbG9ja3dpc2UoXzJkMik7XHJcbiAgaWYgKGRpcjEgPCAwKSBfMmQxID0gXzJkMS5tYXAoKF8sIGkpID0+IF8yZDEuYXQoLWkpKTtcclxuICBpZiAoZGlyMiA8IDApIF8yZDIgPSBfMmQyLm1hcCgoXywgaSkgPT4gXzJkMi5hdCgtaSkpO1xyXG4gIFxyXG4gIGNvbnN0IGNsaXBwZWQgPSBjbGlwRmFjZVZzRmFjZShfMmQxLCBfMmQyKTtcclxuXHJcbiAgY29uc3QgXzNkID0gY2xpcHBlZC5tYXAoKHApID0+XHJcbiAgICBzdW0ob3JpZ2luLCBzdW0oc2NhbGUoaSwgcFswXSksIHNjYWxlKGosIHBbMV0pKSlcclxuICApO1xyXG5cclxuICBjb25zdCBmZWF0dXJlcyA9IFtdO1xyXG4gIF8zZC5mb3JFYWNoKChwb2ludCkgPT4ge1xyXG4gICAgY29uc3QgUEEgPSByYXlWc1BsYW5lSW50ZXJzZWMoW2NvbnRhY3RGYWNlMVswXSwgbm9ybWFsMV0sIHBvaW50LCBuKTtcclxuICAgIGlmICghaXNQb2ludEJlaGluZFBsYW5lKHBsYW5lLCBQQSwgMSkpIHJldHVybjtcclxuICAgIGNvbnN0IFBCID0gcmF5VnNQbGFuZUludGVyc2VjKFtjb250YWN0RmFjZTJbMF0sIG5vcm1hbDJdLCBwb2ludCwgbik7XHJcbiAgICBpZiAoIWlzUG9pbnRCZWhpbmRQbGFuZShwbGFuZSwgUEIsIC0xKSkgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IHJiID0gZGlmZihQQiwgY29sbDIucG9zKTtcclxuICAgIGNvbnN0IHJhID0gZGlmZihQQSwgY29sbDEucG9zKTtcclxuICAgIGNvbnN0IHBlbkRlcHRoID0gLWRvdChkaWZmKFBCLCBQQSksIG4pO1xyXG4gICAgY29uc3QgcmFMb2NhbCA9IG0zLnRyYW5zZm9ybVBvaW50KGNvbGwxLlJtYXRyaXhJbnZlcnNlLCByYSk7XHJcbiAgICBjb25zdCByYkxvY2FsID0gbTMudHJhbnNmb3JtUG9pbnQoY29sbDIuUm1hdHJpeEludmVyc2UsIHJiKTtcclxuXHJcbiAgICBmZWF0dXJlcy5wdXNoKHtcclxuICAgICAgcmFMb2NhbCxcclxuICAgICAgcmJMb2NhbCxcclxuICAgICAgcmEsXHJcbiAgICAgIHJiLFxyXG4gICAgICBQQSxcclxuICAgICAgUEIsXHJcbiAgICAgIG4sXHJcbiAgICAgIHBlbkRlcHRoLFxyXG4gICAgICBib2R5MSxcclxuICAgICAgYm9keTIsXHJcbiAgICAgIGksXHJcbiAgICAgIGosXHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgaWYgKGZlYXR1cmVzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgY29uc3QgcmIgPSBkaWZmKFBCLCBjb2xsMi5wb3MpO1xyXG4gICAgY29uc3QgcmEgPSBkaWZmKFBBLCBjb2xsMS5wb3MpO1xyXG4gICAgY29uc3QgcGVuRGVwdGggPSAtZG90KGRpZmYoUEIsIFBBKSwgbik7XHJcbiAgICBjb25zdCByYUxvY2FsID0gbTMudHJhbnNmb3JtUG9pbnQoY29sbDEuUm1hdHJpeEludmVyc2UsIHJhKTtcclxuICAgIGNvbnN0IHJiTG9jYWwgPSBtMy50cmFuc2Zvcm1Qb2ludChjb2xsMi5SbWF0cml4SW52ZXJzZSwgcmIpO1xyXG4gICAgZmVhdHVyZXMucHVzaCh7XHJcbiAgICAgIHJhTG9jYWwsXHJcbiAgICAgIHJiTG9jYWwsXHJcbiAgICAgIHJhLFxyXG4gICAgICByYixcclxuICAgICAgUEEsXHJcbiAgICAgIFBCLFxyXG4gICAgICBuLFxyXG4gICAgICBwZW5EZXB0aCxcclxuICAgICAgYm9keTEsXHJcbiAgICAgIGJvZHkyLFxyXG4gICAgICBpLFxyXG4gICAgICBqLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZmVhdHVyZXM7XHJcbn07XHJcblxyXG5leHBvcnQge1xyXG4gIGdldENvbnRhY3RNYW5pZm9sZCBhcyBnamssXHJcbiAgcG9pbnRPblBsYW5lUHJvamVjdGlvbixcclxuICBjbGlwUG9pbnRzQmVoaW5kUGxhbmUsXHJcbiAgZ2V0MkRjb29yZHNPblBsYW5lLFxyXG4gIHJheVZzUGxhbmVJbnRlcnNlYyxcclxufTtcclxuIiwiaW1wb3J0IHsgbTMsIHZlYzMgfSBmcm9tIFwibWF0aFwiO1xyXG5cclxuY29uc3QgeyBkaXN0YW5jZUZyb21MaW5lLCBub3JtLCBmaW5kRnVydGhlc3RQb2ludCwgc3VtLCBkaWZmLCBub3JtU3EsIGRvdCB9ID0gdmVjMztcclxuXHJcbmNvbnN0IHByZWMgPSAwLjAwMDU7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYW5pZm9sZCB7XHJcbiAgY29uc3RydWN0b3IoLi4uY29udGFjdHMpIHtcclxuICAgIHRoaXMuY29udGFjdHMgPSBjb250YWN0cztcclxuICAgIHRoaXMua2VlcCA9IHRydWU7XHJcbiAgfVxyXG4gIHVwZGF0ZSgpIHtcclxuICAgIGNvbnN0IGNvbnRhY3RzID0gdGhpcy5jb250YWN0cztcclxuICAgIGlmIChjb250YWN0cy5sZW5ndGggPCAyKSB7XHJcbiAgICAgIHRoaXMua2VlcCA9IGZhbHNlO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCBpID0gMCwgbiA9IGNvbnRhY3RzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICBjb25zdCBjb250YWN0ID0gY29udGFjdHNbaV07XHJcbiAgICAgIGNvbnN0IHBvczEgPSBjb250YWN0LmJvZHkxLmNvbGxpZGVyLnBvcztcclxuICAgICAgY29uc3QgcG9zMiA9IGNvbnRhY3QuYm9keTIuY29sbGlkZXIucG9zO1xyXG4gICAgICBjb25zdCBfcmEgPSBtMy50cmFuc2Zvcm1Qb2ludChcclxuICAgICAgICBjb250YWN0LmJvZHkxLmNvbGxpZGVyLlJtYXRyaXgsXHJcbiAgICAgICAgY29udGFjdC5yYUxvY2FsXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IF9yYiA9IG0zLnRyYW5zZm9ybVBvaW50KFxyXG4gICAgICAgIGNvbnRhY3QuYm9keTIuY29sbGlkZXIuUm1hdHJpeCxcclxuICAgICAgICBjb250YWN0LnJiTG9jYWxcclxuICAgICAgKTtcclxuICAgICAgY29uc3QgX1BBID0gc3VtKHBvczEsIF9yYSk7XHJcbiAgICAgIGNvbnN0IF9QQiA9IHN1bShwb3MyLCBfcmIpO1xyXG4gICAgICBjb25zdCByYUJpYXMgPSBkaWZmKGNvbnRhY3QuUEEsIF9QQSk7XHJcbiAgICAgIGNvbnN0IHJiQmlhcyA9IGRpZmYoY29udGFjdC5QQiwgX1BCKTtcclxuICAgICAgLy9jb250YWN0LnVwZGF0ZUNvbnRhY3REYXRhKClcclxuICAgICAgaWYgKG5vcm0ocmFCaWFzKSA+IHByZWMgfHwgbm9ybShyYkJpYXMpID4gcHJlYykge1xyXG4gICAgICAgIHRoaXMua2VlcCA9IGZhbHNlO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29udGFjdC5QQSA9IF9QQTtcclxuICAgICAgY29udGFjdC5QQiA9IF9QQjtcclxuICAgICAgY29udGFjdC5yYSA9IF9yYTtcclxuICAgICAgY29udGFjdC5yYiA9IF9yYjtcclxuICAgICAgY29udGFjdC5wZW5EZXB0aCA9IGRvdChjb250YWN0Lm4sIGRpZmYoX1BCLCBfUEEpKTtcclxuICAgICAgXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBtNCwgdmVjMywgbTMgfSBmcm9tIFwibWF0aFwiO1xyXG5cclxuaW1wb3J0IHtcclxuICBQcm9ncmFtSW5mbyxcclxuICBEcmF3ZXIsXHJcbiAgY3JlYXRlQm94LFxyXG4gIFByaW1pdGl2ZVJlbmRlcmVyLFxyXG4gIEdMY29udGV4dFdyYXBwZXIsXHJcbiAgY3JlYXRlQ2lyY2xlLFxyXG4gIGRlZmF1bHRTaGFkZXJzLFxyXG4gIHBvaW50TGlnaHRTaGFkZXJzLFxyXG4gIGNyZWF0ZVNwaGVyZSxcclxuICBjcmVhdGVUcnVuY2F0ZWRDb25lLFxyXG59IGZyb20gXCJncmFwaGljc1wiO1xyXG5cclxuaW1wb3J0IE1vdXNlSW5wdXQgZnJvbSBcIi4uL3NyYy9taXNjL21vdXNlSW5wdXRcIjtcclxuaW1wb3J0IEtleUlucHV0IGZyb20gXCIuLi9zcmMvbWlzYy9rZXlJbnB1dFwiO1xyXG5jb25zdCBtb3VzZUlucHV0ID0gbmV3IE1vdXNlSW5wdXQoKTtcclxuXHJcbm1vdXNlSW5wdXQubGlzdGVuKCk7XHJcbmNvbnN0IGtleUlucHV0ID0gbmV3IEtleUlucHV0KCk7XHJcbmtleUlucHV0Lmxpc3RlbigpO1xyXG5jb25zdCBjb250ZXh0ID0gbmV3IEdMY29udGV4dFdyYXBwZXIoXCJjYW52YXNcIik7XHJcbmNvbnN0IGdsID0gY29udGV4dC5nZXRDb250ZXh0KCk7XHJcbmNvbnRleHQucmVzaXplQ2FudmFzVG9EaXNwbGF5U2l6ZSgpO1xyXG5jb25zdCBkcmF3ZXIgPSBuZXcgRHJhd2VyKCk7XHJcbmRyYXdlci5zZXRDb250ZXh0KGNvbnRleHQpLnVwZGF0ZTNEUHJvamVjdGlvbk1hdHJpeCgpO1xyXG5cclxuY29uc3QgZGVmYXVsdFByb2dyYW1JbmZvID0gbmV3IFByb2dyYW1JbmZvKFxyXG4gIGRlZmF1bHRTaGFkZXJzLnZlcnQsXHJcbiAgZGVmYXVsdFNoYWRlcnMuZnJhZ1xyXG4pO1xyXG5jb25zdCBwb2ludExpZ2h0UHJvZ3JhbUluZm8gPSBuZXcgUHJvZ3JhbUluZm8oXHJcbiAgcG9pbnRMaWdodFNoYWRlcnMudmVydCxcclxuICBwb2ludExpZ2h0U2hhZGVycy5mcmFnXHJcbik7XHJcbmRlZmF1bHRQcm9ncmFtSW5mby5zZXRDb250ZXh0KGNvbnRleHQpLmNvbXBpbGVTaGFkZXJzKCkuY3JlYXRlVW5pZm9ybVNldHRlcnMoKTtcclxucG9pbnRMaWdodFByb2dyYW1JbmZvXHJcbiAgLnNldENvbnRleHQoY29udGV4dClcclxuICAuY29tcGlsZVNoYWRlcnMoKVxyXG4gIC5jcmVhdGVVbmlmb3JtU2V0dGVycygpO1xyXG5pbXBvcnQgcHJvZyBmcm9tIFwiLi4vc2hhZGVyXCI7XHJcbnByb2cuc2V0Q29udGV4dChjb250ZXh0KS5jb21waWxlU2hhZGVycygpLmNyZWF0ZVVuaWZvcm1TZXR0ZXJzKCk7XHJcbmNvbnN0IGJveCA9IG5ldyBQcmltaXRpdmVSZW5kZXJlcihjcmVhdGVCb3goMSwgMSwgMSkpO1xyXG5jb25zdCBwYW5lbCA9IG5ldyBQcmltaXRpdmVSZW5kZXJlcihjcmVhdGVCb3goMSwxLDEpKVxyXG5jb25zdCBzcGhlcmUgPSBuZXcgUHJpbWl0aXZlUmVuZGVyZXIoY3JlYXRlU3BoZXJlKDEsIDE1LCAxNSkpO1xyXG5jb25zdCBjaXJjbGUgPSBuZXcgUHJpbWl0aXZlUmVuZGVyZXIoY3JlYXRlQ2lyY2xlKDgsIDQpKTtcclxuY29uc3QgY3lsaW5kZXIgPSBuZXcgUHJpbWl0aXZlUmVuZGVyZXIoY3JlYXRlVHJ1bmNhdGVkQ29uZSgxLCAxLCAxLCA4LCAxKSk7XHJcbmNvbnN0IHBvaW50cyA9IG5ldyBQcmltaXRpdmVSZW5kZXJlcih7XHJcbiAgbW9kZTogZ2wuUE9JTlRTLFxyXG4gIG51bUVsZW1lbnRzOiAyLFxyXG4gIG9mZnNldDogMCxcclxufSk7XHJcbmNvbnN0IGxpbmUgPSBuZXcgUHJpbWl0aXZlUmVuZGVyZXIoe1xyXG4gIG1vZGU6IGdsLkxJTkVTLFxyXG4gIG51bUVsZW1lbnRzOiAyLFxyXG4gIG9mZnNldDogMCxcclxufSk7XHJcblxyXG5ib3hcclxuICAuc2V0Q29udGV4dChjb250ZXh0KVxyXG4gIC5jcmVhdGVWQU8oKVxyXG4gIC5zZXREcmF3ZXIoZHJhd2VyKVxyXG4gIC5zZXRQcm9ncmFtSW5mbyhkZWZhdWx0UHJvZ3JhbUluZm8pXHJcbiAgLmNyZWF0ZUdlb21ldHJ5QnVmZmVycygpXHJcbiAgLnNldEF0dHJpYnV0ZXMoKVxyXG4gIC5zZXRNb2RlKDIpO1xyXG5wYW5lbFxyXG4gIC5zZXRDb250ZXh0KGNvbnRleHQpXHJcbiAgLmNyZWF0ZVZBTygpXHJcbiAgLnNldERyYXdlcihkcmF3ZXIpXHJcbiAgLnNldFByb2dyYW1JbmZvKHBvaW50TGlnaHRQcm9ncmFtSW5mbylcclxuICAuY3JlYXRlR2VvbWV0cnlCdWZmZXJzKClcclxuICAuc2V0QXR0cmlidXRlcygpXHJcbiAgLnNldE1vZGUoNCk7XHJcbmN5bGluZGVyXHJcbiAgLnNldENvbnRleHQoY29udGV4dClcclxuICAuY3JlYXRlVkFPKClcclxuICAuc2V0RHJhd2VyKGRyYXdlcilcclxuICAuc2V0UHJvZ3JhbUluZm8oZGVmYXVsdFByb2dyYW1JbmZvKVxyXG4gIC5jcmVhdGVHZW9tZXRyeUJ1ZmZlcnMoKVxyXG4gIC5zZXRBdHRyaWJ1dGVzKClcclxuICAuc2V0TW9kZSgyKTtcclxuc3BoZXJlXHJcbiAgLnNldENvbnRleHQoY29udGV4dClcclxuICAuY3JlYXRlVkFPKClcclxuICAuc2V0RHJhd2VyKGRyYXdlcilcclxuICAuc2V0UHJvZ3JhbUluZm8oZGVmYXVsdFByb2dyYW1JbmZvKVxyXG4gIC5jcmVhdGVHZW9tZXRyeUJ1ZmZlcnMoKVxyXG4gIC5zZXRBdHRyaWJ1dGVzKClcclxuICAuc2V0TW9kZSgyKTtcclxuY2lyY2xlXHJcbiAgLnNldENvbnRleHQoY29udGV4dClcclxuICAuY3JlYXRlVkFPKClcclxuICAuc2V0RHJhd2VyKGRyYXdlcilcclxuICAuc2V0UHJvZ3JhbUluZm8oZGVmYXVsdFByb2dyYW1JbmZvKVxyXG4gIC5jcmVhdGVHZW9tZXRyeUJ1ZmZlcnMoKVxyXG4gIC5zZXRBdHRyaWJ1dGVzKClcclxuICAuc2V0TW9kZSgzKTtcclxuXHJcbmxpbmVcclxuICAuc2V0Q29udGV4dChjb250ZXh0KVxyXG4gIC5jcmVhdGVWQU8oKVxyXG4gIC5zZXREcmF3ZXIoZHJhd2VyKVxyXG4gIC5zZXRQcm9ncmFtSW5mbyhkZWZhdWx0UHJvZ3JhbUluZm8pXHJcbiAgLmNyZWF0ZUJ1ZmZlckF0dHJpYkRhdGEoXCJhX3Bvc2l0aW9uXCIsIFwidmVjM1wiLCB7IGxvY2F0aW9uOiAwIH0pXHJcbiAgLnNldE93bkF0dHJpYnV0ZShcImFfcG9zaXRpb25cIilcclxuICAuYnVmZmVyRGF0YShcImFfcG9zaXRpb25cIiwgbmV3IEZsb2F0MzJBcnJheShbMCwgMCwgMCwgMCwgMSwgMF0pKTtcclxuXHJcbnBvaW50c1xyXG4gIC5zZXRDb250ZXh0KGNvbnRleHQpXHJcbiAgLmNyZWF0ZVZBTygpXHJcbiAgLnNldERyYXdlcihkcmF3ZXIpXHJcbiAgLnNldFByb2dyYW1JbmZvKGRlZmF1bHRQcm9ncmFtSW5mbylcclxuICAuY3JlYXRlQnVmZmVyQXR0cmliRGF0YShcImFfcG9zaXRpb25cIiwgXCJ2ZWMzXCIsIHsgbG9jYXRpb246IDAgfSlcclxuICAuc2V0T3duQXR0cmlidXRlKFwiYV9wb3NpdGlvblwiKVxyXG4gIC5idWZmZXJEYXRhKFwiYV9wb3NpdGlvblwiLCBuZXcgRmxvYXQzMkFycmF5KFswLCAwLCAwXSkpO1xyXG5cclxuY29uc3QgdW5pZm9ybXMgPSB7XHJcbiAgdV9saWdodFdvcmxkUG9zaXRpb246IFszMCwgNTAsIDMwXSxcclxuICB1X2FtYmllbnRMaWdodDogWzEsIDEsIDAuMywgMC4xMV0sXHJcbiAgdV9yZXZlcnNlTGlnaHREaXJlY3Rpb246IFsxLCAwLCAwXSxcclxuICB1X3NoaW5pbmVzczogMzAwLFxyXG59O1xyXG5cclxuaW1wb3J0IFNpbXVsYXRpb24gZnJvbSBcIi4uL3NyYy9waHlzaWNzL1NpbXVsYXRpb25cIjtcclxuaW1wb3J0IHsgUGxheWVyLCBSaWdpZEJvZHkgfSBmcm9tIFwiLi4vc3JjL3BoeXNpY3MvUmlnaWRCb2R5XCI7XHJcbmltcG9ydCB7IEJveCwgQ3lsaW5kZXIsIFNwaGVyZSB9IGZyb20gXCIuLi9zcmMvcGh5c2ljcy9jb2xsaWRlclwiO1xyXG5pbXBvcnQgeyBDb250cm9sbGFibGUsIE5vY2xpcCB9IGZyb20gXCIuLi9zcmMvbWlzYy9jb250cm9sbGFibGVcIjtcclxuaW1wb3J0IFJhZ2RvbGwgZnJvbSBcIi4vUmFnZG9sbFwiO1xyXG5pbXBvcnQgeyBKb2ludCwgSm9pbnRQb3NpdGlvbkNvbnN0cmFpbnQgfSBmcm9tIFwiLi4vc3JjL3BoeXNpY3MvY29uc3RyYWludHNcIjtcclxuXHJcbmNvbnN0IGcgPSA5Ljg7XHJcbmNvbnN0IHNpbSA9IG5ldyBTaW11bGF0aW9uKCk7XHJcblxyXG5jb25zdCBmbG9vciA9IHsgcGh5c2ljczogbmV3IFJpZ2lkQm9keShuZXcgQm94KDEwMDAsIDYsIDEwMDApKSwgc3ByaXRlOiBib3h9O1xyXG5cclxuY29uc3Qgb2JqZWN0cyA9IFtmbG9vcl07XHJcbmZsb29yLnBoeXNpY3MudHJhbnNsYXRlKFswLC0xODAsMF0pXHJcbmZsb29yLnBoeXNpY3Muc2V0TWFzcygxMDAwMDAwMDAwMDAwKTtcclxuXHJcbi8vZmxvb3IucGh5c2ljcy50cmFuc2xhdGUoWzAsIDAsIDBdKTtcclxuZmxvb3IucGh5c2ljcy5mcmljdGlvbiA9IDEwXHJcbmZsb29yLnBoeXNpY3Muc3RhdGljID0gdHJ1ZTtcclxuZmxvb3IucGh5c2ljcy5ET0YgPSBbMSwgMSwgMSwgMCwgMCwgMF07XHJcbnNpbS5hZGRPYmplY3QoZmxvb3IucGh5c2ljcyk7XHJcblxyXG5cclxuXHJcbmZvcihsZXQgaSA9IDA7IGkgPCA1MDsgaSsrKXtcclxuICBjb25zdCBwbGFuZSA9IHsgcGh5c2ljczogbmV3IFJpZ2lkQm9keShuZXcgQm94KDIsIDIsIDEwMCkpLCBzcHJpdGU6IHBhbmVsIH07XHJcbiAgcGxhbmUucGh5c2ljcy50cmFuc2xhdGUoW2kqMiwgMTAgLSBpKjIgICwwXSk7XHJcbiAgcGxhbmUucGh5c2ljcy5zZXRNYXNzKDIwMDAwMDAwMCk7XHJcbiAgcGxhbmUucGh5c2ljcy5yb3RhdGUoWzAsMCwtMC4yOV0pO1xyXG4gIHBsYW5lLnBoeXNpY3Muc3RhdGljID0gdHJ1ZVxyXG4gIHNpbS5hZGRTdGF0aWNPYmplY3QocGxhbmUucGh5c2ljcyk7XHJcbiAgb2JqZWN0cy5wdXNoKHBsYW5lKTtcclxufVxyXG5mb3IobGV0IGkgPSAwOyBpIDwgNTA7IGkrKyl7XHJcbiAgY29uc3QgcGxhbmUgPSB7IHBoeXNpY3M6IG5ldyBSaWdpZEJvZHkobmV3IEJveCgyLCAyLCAxMDApKSwgc3ByaXRlOiBwYW5lbCB9O1xyXG4gIHBsYW5lLnBoeXNpY3MudHJhbnNsYXRlKFsxNjAgLSBpKjIsIC04MCAtIGkgKiAyICwwXSk7XHJcbiAgcGxhbmUucGh5c2ljcy5zZXRNYXNzKDIwMDAwMDAwMCk7XHJcbiAgcGxhbmUucGh5c2ljcy5yb3RhdGUoWzAsMCwwLjJdKTtcclxuICBwbGFuZS5waHlzaWNzLnN0YXRpYyA9IHRydWVcclxuICBzaW0uYWRkU3RhdGljT2JqZWN0KHBsYW5lLnBoeXNpY3MpO1xyXG4gIG9iamVjdHMucHVzaChwbGFuZSk7XHJcbn1cclxuY29uc3QgcGxhbmUgPSB7IHBoeXNpY3M6IG5ldyBSaWdpZEJvZHkobmV3IEJveCg2LCAyLCAxMDApKSwgc3ByaXRlOiBwYW5lbCB9XHJcbnBsYW5lLnBoeXNpY3MudHJhbnNsYXRlKFsxMDIgLCAtOTAgLDBdKTtcclxuICBwbGFuZS5waHlzaWNzLnNldE1hc3MoMjAwMDAwMDAwKTtcclxuICAvL3BsYW5lLnBoeXNpY3Mucm90YXRlKFswLDAsMC4yXSk7XHJcbiAgcGxhbmUucGh5c2ljcy5zdGF0aWMgPSB0cnVlXHJcbiAgc2ltLmFkZFN0YXRpY09iamVjdChwbGFuZS5waHlzaWNzKTtcclxuICBvYmplY3RzLnB1c2gocGxhbmUpO1xyXG5mb3IgKGxldCBpID0gMDsgaSA8IDE1OyBpKyspIHtcclxuICBjb25zdCBjdWJlID0geyBwaHlzaWNzOiBuZXcgUmlnaWRCb2R5KG5ldyBCb3goMywgMywgMykpLCBzcHJpdGU6IGJveCwgdW5pZm9ybXMgOiB7dV9jb2xvciA6IFswLDAsMSwxXX0gfTtcclxuICBjdWJlLnBoeXNpY3MudHJhbnNsYXRlKFsxMDEsIC04Ny41ICsgMy4wMSAqIChpJTMpLCAtMi41ICsgKGklNSkgKiAzXSk7XHJcbiAgY3ViZS5waHlzaWNzLnNldE1hc3MoMjApO1xyXG4gIGN1YmUucGh5c2ljcy5hZGRBY2NlbGVyYXRpb24oWzAsIC1nLCAwXSk7XHJcbiAgc2ltLmFkZE9iamVjdChjdWJlLnBoeXNpY3MpO1xyXG4gIG9iamVjdHMucHVzaChjdWJlKTtcclxuXHJcbn1cclxuXHJcbmZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XHJcbiAgY29uc3QgeyBwYXJ0cywgY29uc3RyYWludHMsIHBvc2l0aW9uQ29uc3RyYWludHMgfSA9IG5ldyBSYWdkb2xsKFsxMCwgNSArIDMuMDEgKiBpLCAwXSk7XHJcblxyXG4gIGZvciAoY29uc3QgbmFtZSBpbiBwYXJ0cykge1xyXG4gICAgc2ltLmFkZE9iamVjdChwYXJ0c1tuYW1lXSk7XHJcbiAgICBwYXJ0c1tuYW1lXS5hZGRBY2NlbGVyYXRpb24oWzAsIC1nLCAwXSk7XHJcbiAgICBwYXJ0c1tuYW1lXS5hZGRWZWxvY2l0eShbMTAsIDAsIDBdKTtcclxuICAgIHBhcnRzW25hbWVdLnNldE1hc3MoNSlcclxuICAgIC8vcGFydHNbbmFtZV0uZnJpY3Rpb24gPSAxMDtcclxuICAgIGxldCBzcHJpdGUgPSBjeWxpbmRlclxyXG4gICAgaWYobmFtZSA9PT0gJ2hlYWQnKSB7XHJcbiAgICAgIHNwcml0ZSA9IHNwaGVyZVxyXG4gICAgfVxyXG4gICAgaWYobmFtZSA9PT0gJ2JvZHknKSB7XHJcbiAgICAgIHNwcml0ZSA9IGJveFxyXG4gICAgICBcclxuICAgIH1cclxuICAgIG9iamVjdHMucHVzaCh7IHBoeXNpY3M6IHBhcnRzW25hbWVdLCBzcHJpdGUsIHVuaWZvcm1zIDoge3VfY29sb3IgOiBbMCwwLjUsMCwxXX0gfSk7XHJcbiAgfVxyXG4gIHBhcnRzLmhlYWQuc2V0TWFzcygxMClcclxuICBzaW0uYWRkQ29uc3RyYWludHMoY29uc3RyYWludHMsIFwicmFnZG9sbFwiICsgaSk7XHJcbiAgc2ltLmFkZFBvc2l0aW9uQ29uc3RyYWludHMocG9zaXRpb25Db25zdHJhaW50cywgXCJyYWdkb2xcIiArIGkpO1xyXG59XHJcblxyXG5cclxuY29uc3QgcGxheWVyID0gbmV3IE5vY2xpcCgpO1xyXG5wbGF5ZXIuY2FtUG9zID0gWzE0MCwgLTUwLCA1XVxyXG5wbGF5ZXIucm90YXRpb25ZID0gTWF0aC5QSS8yXHJcbnBsYXllci5yb3RhdGlvblggPSAtMC4xICogTWF0aC5QSS8yXHJcbnBsYXllci5saXN0ZW5LZXlib2FyZChrZXlJbnB1dCk7XHJcbnBsYXllci5saXN0ZW5Nb3VzZShtb3VzZUlucHV0KTtcclxuXHJcblJpZ2lkQm9keS5zZXRUcmVzaG9sZCgwLjAwNSk7XHJcblxyXG5sZXQgbGFzdENhbGwgPSBEYXRlLm5vdygpO1xyXG5jb25zdCBmcHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zwc1wiKTtcclxuXHJcbmNvbnN0IGxvb3AgPSAoKSA9PiB7XHJcbiAgc2ltLnRpY2soMC4wMTYpO1xyXG4gIHBsYXllci50aWNrKCk7XHJcbiAgY29uc3QgY3VyZW50VGltZSA9IERhdGUubm93KCk7XHJcbiAgY29uc3QgZGVsdGEgPSBjdXJlbnRUaW1lIC0gbGFzdENhbGw7XHJcbiAgZnBzLnRleHRDb250ZW50ID0gKDEgLyBkZWx0YSkgKiAxMDAwO1xyXG4gIGxhc3RDYWxsID0gY3VyZW50VGltZTtcclxuICBnbC5jbGVhcihnbC5DT0xPUl9CVUZGRVJfQklUIHwgZ2wuREVQVEhfQlVGRkVSX0JJVCk7XHJcbiAgZ2wuZW5hYmxlKGdsLkNVTExfRkFDRSk7XHJcbiAgZ2wuZW5hYmxlKGdsLkRFUFRIX1RFU1QpO1xyXG5cclxuICBjb25zdCBjYW1lcmFNYXRyaXggPSBwbGF5ZXIuY2FtTWF0cml4O1xyXG4gIGNvbnN0IHsgdHJhbnNsYXRpb24gfSA9IG00LmRlY29tcG9zZShjYW1lcmFNYXRyaXgpO1xyXG5cclxuICBvYmplY3RzLmZvckVhY2goKG9iaikgPT4ge1xyXG4gICAgY29uc3QgdV9tYXRyaXggPSBvYmoucGh5c2ljcy5jb2xsaWRlci5nZXRNNCgpO1xyXG5cclxuICAgIGNvbnN0IHVfdmlld1dvcmxkUG9zaXRpb24gPSB0cmFuc2xhdGlvbjtcclxuICAgIGNvbnN0IHNwcml0ZVVuaWZvcm1zID0gb2JqLnVuaWZvcm1zIHx8IHt9XHJcbiAgICBvYmouc3ByaXRlLmRyYXcoXHJcbiAgICAgIHsgLi4udW5pZm9ybXMsIHVfbWF0cml4LCB1X3ZpZXdXb3JsZFBvc2l0aW9uLCB1X2NvbG9yOiBbMSwgMC41LCAwLjEsIDFdLCAuLi5zcHJpdGVVbmlmb3JtcyB9LFxyXG4gICAgICBjYW1lcmFNYXRyaXhcclxuICAgICk7XHJcbiAgfSk7XHJcblxyXG4gIHBvaW50cy5kcmF3KFxyXG4gICAge1xyXG4gICAgICB1X21hdHJpeDogbTQuaWRlbnRpdHkoKSxcclxuICAgICAgdV9jb2xvcjogWzAsIDAuNSwgMC4xLCAxXSxcclxuICAgICAgdV93b3JsZFZpZXdQb3NpdGlvbjogY2FtZXJhTWF0cml4LFxyXG4gICAgfSxcclxuICAgIGNhbWVyYU1hdHJpeFxyXG4gICk7XHJcbi8qXHJcbiAgZm9yIChjb25zdCBbbmFtZSwgY29uc3RyYWludHNdIG9mIHNpbS5jb25zdHJhaW50cykge1xyXG4gICAgY29uc3RyYWludHMuZm9yRWFjaCgoYykgPT4ge1xyXG4gICAgICBwb2ludHMuZHJhdyhcclxuICAgICAgICB7XHJcbiAgICAgICAgICB1X21hdHJpeDogbTQudHJhbnNsYXRpb24oLi4uYy5QQSksXHJcbiAgICAgICAgICB1X2NvbG9yOiBbMS4wLCAwLjAsIDAuMSwgMV0sXHJcbiAgICAgICAgICB1X3dvcmxkVmlld1Bvc2l0aW9uOiBjYW1lcmFNYXRyaXgsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjYW1lcmFNYXRyaXhcclxuICAgICAgKTtcclxuICAgICAgcG9pbnRzLmRyYXcoXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdV9tYXRyaXg6IG00LnRyYW5zbGF0aW9uKC4uLmMuUEIpLFxyXG4gICAgICAgICAgdV9jb2xvcjogWzEuMCwgMC4wLCAwLjEsIDFdLFxyXG4gICAgICAgICAgdV93b3JsZFZpZXdQb3NpdGlvbjogY2FtZXJhTWF0cml4LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2FtZXJhTWF0cml4XHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgY29uc3QgbWFuaWZvbGRzID0gc2ltLmNvbGxpc2lvbk1hbmlmb2xkcy52YWx1ZXMoKTtcclxuXHJcbiAgZm9yIChjb25zdCBtYW5pZm9sZCBvZiBtYW5pZm9sZHMpIHtcclxuICAgIG1hbmlmb2xkLmNvbnRhY3RzLmZvckVhY2goKGNvbnRhY3QpID0+IHtcclxuICAgICAgcG9pbnRzXHJcbiAgICAgICAgLmRyYXcoXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHVfbWF0cml4OiBtNC50cmFuc2xhdGlvbiguLi5jb250YWN0LlBBKSxcclxuICAgICAgICAgICAgdV9jb2xvcjogWzAuNiwgMC42LCAwLjAsIDFdLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGNhbWVyYU1hdHJpeFxyXG4gICAgICAgIClcclxuICAgICAgICAuZHJhdyhcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdV9tYXRyaXg6IG00LnRyYW5zbGF0aW9uKC4uLmNvbnRhY3QuUEIpLFxyXG4gICAgICAgICAgICB1X2NvbG9yOiBbMC41LCAwLjEsIDAuMiwgMV0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgY2FtZXJhTWF0cml4XHJcbiAgICAgICAgKTtcclxuICAgIH0pO1xyXG4gIH1cclxuKi9cclxuICBnbC52aWV3cG9ydCgwLCAwLCBnbC5jYW52YXMud2lkdGgsIGdsLmNhbnZhcy5oZWlnaHQpO1xyXG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZShsb29wKTtcclxufTtcclxubG9vcCgpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=