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

      manifold.contacts.forEach((c) => {
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
          0.005,
          penDepth,
          i,
          j
        );

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
              1,
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
    let numIter = 15

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
      math__WEBPACK_IMPORTED_MODULE_0__.m3.multiply(this.Rmatrix, [1 / i1, 0, 0, 0, 1 / i2, 0, 0, 0, 1 / i3]),
      this.RmatrixInverse
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSwyQ0FBMkM7QUFDckQ7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQSxZQUFZLGdCQUFnQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSwyQ0FBMkM7QUFDckQ7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBLGlFQUFlLEtBQUssRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwT007QUFDWTtBQUNnQjtBQUNDOztBQUV4RDtBQUNBO0FBQ0E7QUFD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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDM0tBO0FBQ0EsT0FBTyxNQUFNLEVBQUUsbUJBQU8sQ0FBQywrQ0FBUTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxPQUFPO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RQNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixPQUFPO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLE9BQU87QUFDN0I7QUFDQSxjQUFjLGtCQUFrQjtBQUNoQztBQUNBLHNCQUFzQixPQUFPO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyw4QkFBOEI7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsT0FBTztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLE1BQU07QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsT0FBTztBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLE9BQU87QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4QjtBQUNBLG1CQUFtQixPQUFPO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsT0FBTztBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxPQUFPO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BQNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLHNDQUFJO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixXQUFXO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsT0FBTztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLFFBQVE7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxxQkFBcUI7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLE9BQU87QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsbUJBQW1CLEdBQUcsbUJBQW1CO0FBQzVEO0FBQ0E7QUFDQTtBQVVFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9Ld0M7QUFDMUM7QUFDQSxRQUFRLG1DQUFtQyxFQUFFLHNDQUFJO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDZDQUFXO0FBQzlCLDBCQUEwQiw2Q0FBVztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsNENBQVU7QUFDN0IsbUJBQW1CLDRDQUFVO0FBQzdCLG1CQUFtQiw0Q0FBVTtBQUM3QiwwQkFBMEIsOENBQVk7QUFDdEM7QUFDQTtBQUNBLG1CQUFtQiw4Q0FBWTtBQUMvQixtQkFBbUIsNENBQVU7QUFDN0IsbUJBQW1CLDRDQUFVO0FBQzdCLDBCQUEwQiw4Q0FBWTtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHNDQUFJO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLDhDQUFZO0FBQ3RDO0FBQ0E7QUFDQSxjQUFjLDJDQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLG1EQUFpQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsc0NBQUk7QUFDbkI7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLG1EQUFpQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixtREFBaUI7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsNkNBQVc7QUFDekIsTUFBTSw2Q0FBVztBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLDJDQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLDBDQUFRO0FBQ25CO0FBQ0E7QUFDQTtBQUNBLFlBQVksMkJBQTJCO0FBQ3ZDLDRDQUE0QyxtREFBaUI7QUFDN0Q7QUFDQTtBQUNBLHdDQUF3QyxPQUFPO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLG1EQUFpQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxTQUFTO0FBQ3JCLGVBQWUsc0NBQUk7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsMkNBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLFNBQVM7QUFDckIsV0FBVywwQ0FBUTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLFNBQVM7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLG1EQUFpQiw0QkFBNEI7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbURBQWlCLG1DQUFtQztBQUNuRTtBQUNBO0FBQ0EsY0FBYywyQ0FBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksaUJBQWlCO0FBQzdCLFdBQVcsMENBQVE7QUFDbkI7QUFDQTtBQUNBLFlBQVksMENBQTBDO0FBQ3RELG9CQUFvQixtREFBaUI7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLG1EQUFpQjtBQUN6QixRQUFRLG1EQUFpQjtBQUN6QjtBQUNBO0FBQ0Esb0JBQW9CLG1EQUFpQjtBQUNyQztBQUNBO0FBQ0EsdUNBQXVDLG1EQUFpQjtBQUN4RDtBQUNBLGtCQUFrQixtREFBaUI7QUFDbkM7QUFDQTtBQUNBLFlBQVksaUJBQWlCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsNkNBQVc7QUFDekIsTUFBTSw2Q0FBVztBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGlCQUFpQjtBQUM3QixlQUFlLHNDQUFJO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZ0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JTQTtBQUNoQztBQUNBLFFBQVEsd0RBQXdELEVBQUUsc0NBQUk7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSwwQkFBMEI7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLG1EQUFpQjtBQUN2QjtBQUNBLE1BQU0sbURBQWlCO0FBQ3ZCO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDBEQUEwRDtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSwwQkFBMEI7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksMERBQTBEO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxpQ0FBaUM7QUFDN0M7QUFDQTtBQUNBLGNBQWMsbURBQWlCO0FBQy9CLGNBQWMsbURBQWlCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxtREFBaUI7QUFDdkI7QUFDQSxNQUFNLG1EQUFpQjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGVBQWU7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksZUFBZTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksaUNBQWlDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLG1EQUFpQjtBQUN2QjtBQUNBLE1BQU0sbURBQWlCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDBEQUEwRDtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxpQ0FBaUM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVNFOzs7Ozs7Ozs7Ozs7Ozs7O0FDcFpGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUN3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2Qlk7QUFDdUI7QUFDM0Q7QUFDQSxRQUFRLHlEQUF5RCxFQUFFLHNDQUFJO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLDRCQUE0QjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGhzLy4vbm9kZV9tb2R1bGVzL2dyYXBoaWNzL2luZGV4LmpzIiwid2VicGFjazovL3Bocy8uL25vZGVfbW9kdWxlcy9ncmFwaGljcy9zcmMvQnVmZmVyQXR0cmlidXRlLmpzIiwid2VicGFjazovL3Bocy8uL25vZGVfbW9kdWxlcy9ncmFwaGljcy9zcmMvRHJhd2VyLmpzIiwid2VicGFjazovL3Bocy8uL25vZGVfbW9kdWxlcy9ncmFwaGljcy9zcmMvTWVzaFJlbmRlcmVyLmpzIiwid2VicGFjazovL3Bocy8uL25vZGVfbW9kdWxlcy9ncmFwaGljcy9zcmMvTW9kZWwuanMiLCJ3ZWJwYWNrOi8vcGhzLy4vbm9kZV9tb2R1bGVzL2dyYXBoaWNzL3NyYy9QcmltaXRpdmVSZW5kZXJlci5qcyIsIndlYnBhY2s6Ly9waHMvLi9ub2RlX21vZHVsZXMvZ3JhcGhpY3Mvc3JjL2F0dHJpYlR5cGVQcm9wcy5qcyIsIndlYnBhY2s6Ly9waHMvLi9ub2RlX21vZHVsZXMvZ3JhcGhpY3Mvc3JjL2VudW1zLmpzIiwid2VicGFjazovL3Bocy8uL25vZGVfbW9kdWxlcy9ncmFwaGljcy9zcmMvZ2xDb250ZXhXcmFwcGVyLmpzIiwid2VicGFjazovL3Bocy8uL25vZGVfbW9kdWxlcy9ncmFwaGljcy9zcmMvZ2x0ZlV0aWxzLmpzIiwid2VicGFjazovL3Bocy8uL25vZGVfbW9kdWxlcy9ncmFwaGljcy9zcmMvcHJpbWl0aXZlcy5qcyIsIndlYnBhY2s6Ly9waHMvLi9ub2RlX21vZHVsZXMvZ3JhcGhpY3Mvc3JjL3Byb2dyYW1JbmZvLmpzIiwid2VicGFjazovL3Bocy8uL25vZGVfbW9kdWxlcy9ncmFwaGljcy9zcmMvcmVuZGVyL3NoYWRlcnMvZGVmYXVsdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9waHMvLi9ub2RlX21vZHVsZXMvZ3JhcGhpY3Mvc3JjL3JlbmRlci9zaGFkZXJzL2luZGV4LmpzIiwid2VicGFjazovL3Bocy8uL25vZGVfbW9kdWxlcy9ncmFwaGljcy9zcmMvcmVuZGVyL3NoYWRlcnMvcG9pbnRMaWdodC9pbmRleC5qcyIsIndlYnBhY2s6Ly9waHMvLi9ub2RlX21vZHVsZXMvZ3JhcGhpY3Mvc3JjL3RleHR1cmVJbmZvLmpzIiwid2VicGFjazovL3Bocy8uL25vZGVfbW9kdWxlcy9tYXRoL2luZGV4LmpzIiwid2VicGFjazovL3Bocy8uL25vZGVfbW9kdWxlcy9tYXRoL3NyYy9hYWJiLmpzIiwid2VicGFjazovL3Bocy8uL25vZGVfbW9kdWxlcy9tYXRoL3NyYy9tMy5qcyIsIndlYnBhY2s6Ly9waHMvLi9ub2RlX21vZHVsZXMvbWF0aC9zcmMvbTQuanMiLCJ3ZWJwYWNrOi8vcGhzLy4vbm9kZV9tb2R1bGVzL21hdGgvc3JjL3ZlYzMuanMiLCJ3ZWJwYWNrOi8vcGhzLy4vcmFnZG9sbERlbW8vUmFnZG9sbC5qcyIsIndlYnBhY2s6Ly9waHMvLi9zaGFkZXIuanMiLCJ3ZWJwYWNrOi8vcGhzLy4vc3JjL21pc2MvY29udHJvbGxhYmxlLmpzIiwid2VicGFjazovL3Bocy8uL3NyYy9taXNjL2tleUlucHV0LmpzIiwid2VicGFjazovL3Bocy8uL3NyYy9taXNjL21vdXNlSW5wdXQuanMiLCJ3ZWJwYWNrOi8vcGhzLy4vc3JjL3BoeXNpY3MvUmlnaWRCb2R5LmpzIiwid2VicGFjazovL3Bocy8uL3NyYy9waHlzaWNzL1NpbXVsYXRpb24uanMiLCJ3ZWJwYWNrOi8vcGhzLy4vc3JjL3BoeXNpY3MvU3lzdGVtLmpzIiwid2VicGFjazovL3Bocy8uL3NyYy9waHlzaWNzL1RyZWUuanMiLCJ3ZWJwYWNrOi8vcGhzLy4vc3JjL3BoeXNpY3MvY2xpcHBpbmcuanMiLCJ3ZWJwYWNrOi8vcGhzLy4vc3JjL3BoeXNpY3MvY29sbGlkZXIuanMiLCJ3ZWJwYWNrOi8vcGhzLy4vc3JjL3BoeXNpY3MvY29uc3RyYWludHMuanMiLCJ3ZWJwYWNrOi8vcGhzLy4vc3JjL3BoeXNpY3MvZXZlbnRFbWl0dGVyLmpzIiwid2VicGFjazovL3Bocy8uL3NyYy9waHlzaWNzL2dqay5qcyIsIndlYnBhY2s6Ly9waHMvLi9zcmMvcGh5c2ljcy9tYW5pZm9sZC5qcyIsIndlYnBhY2s6Ly9waHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcGhzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Bocy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcGhzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcGhzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcGhzLy4vcmFnZG9sbERlbW8vaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnVmZmVySW5mbywgRHluYW1pY0J1ZmZlckluZm8gfSBmcm9tIFwiLi9zcmMvQnVmZmVyQXR0cmlidXRlXCI7XG5pbXBvcnQge1xuICBQcmltaXRpdmVSZW5kZXJJbmZvRnJvbUFycmF5RGF0YSxcbiAgQXJyYXlEYXRhRnJvbUdsdGYsXG4gIEVudGl0eURhdGFGcm9tR2x0ZixcbiAgR0xURixcbn0gZnJvbSBcIi4vc3JjL2dsdGZVdGlsc1wiO1xuaW1wb3J0IHsgTWVzaFJlbmRlcmVyLCBTa2lubmVkTWVzaFJlbmRlcmVyIH0gZnJvbSBcIi4vc3JjL01lc2hSZW5kZXJlclwiO1xuaW1wb3J0IHtcbiAgY3JlYXRlQm94LFxuICBjcmVhdGVDb25lLFxuICBjcmVhdGVDaXJjbGUsXG4gIGNyZWF0ZVNwaGVyZSxcbiAgY3JlYXRlVHJ1bmNhdGVkQ29uZVxufSBmcm9tIFwiLi9zcmMvcHJpbWl0aXZlc1wiO1xuaW1wb3J0IFByaW1pdGl2ZVJlbmRlcmVyIGZyb20gXCIuL3NyYy9QcmltaXRpdmVSZW5kZXJlclwiO1xuaW1wb3J0IHtcbiAgZ2V0R0xUeXBlRm9yVHlwZWRBcnJheSxcbiAgUHJvZ3JhbUluZm8sXG4gIGV4cGFuZGVkVHlwZWRBcnJheSxcbn0gZnJvbSBcIi4vc3JjL3Byb2dyYW1JbmZvXCI7XG5pbXBvcnQgRHJhd2VyIGZyb20gXCIuL3NyYy9EcmF3ZXJcIjtcbmltcG9ydCB7XG4gIFRleHR1cmVJbmZvLFxuICBtYWtlSW1nRnJvbVN2Z1htbCxcbiAgbWFrZVN0cmlwZUltZyxcbn0gZnJvbSBcIi4vc3JjL3RleHR1cmVJbmZvXCI7XG5pbXBvcnQgTW9kZWwgZnJvbSBcIi4vc3JjL01vZGVsXCI7XG5pbXBvcnQgeyBkZWZhdWx0U2hhZGVycywgcG9pbnRMaWdodFNoYWRlcnMgfSBmcm9tIFwiLi9zcmMvcmVuZGVyL3NoYWRlcnNcIjtcbmltcG9ydCBHTGNvbnRleHRXcmFwcGVyIGZyb20gXCIuL3NyYy9nbENvbnRleFdyYXBwZXJcIjtcblxuXG5leHBvcnQge1xuICBHTFRGLFxuICBHTGNvbnRleHRXcmFwcGVyLFxuICBUZXh0dXJlSW5mbyxcbiAgbWFrZUltZ0Zyb21TdmdYbWwsXG4gIG1ha2VTdHJpcGVJbWcsXG4gIE1vZGVsLFxuICBQcmltaXRpdmVSZW5kZXJlcixcbiAgRW50aXR5RGF0YUZyb21HbHRmLFxuICBQcmltaXRpdmVSZW5kZXJJbmZvRnJvbUFycmF5RGF0YSxcbiAgQXJyYXlEYXRhRnJvbUdsdGYsXG4gIE1lc2hSZW5kZXJlcixcbiAgU2tpbm5lZE1lc2hSZW5kZXJlcixcbiAgY3JlYXRlQm94LFxuICBQcm9ncmFtSW5mbyxcbiAgRHJhd2VyLFxuICBjcmVhdGVDb25lLFxuICBjcmVhdGVDaXJjbGUsXG4gIGRlZmF1bHRTaGFkZXJzLFxuICBwb2ludExpZ2h0U2hhZGVycyxcbiAgY3JlYXRlU3BoZXJlLFxuICBjcmVhdGVUcnVuY2F0ZWRDb25lXG59O1xuIiwiaW1wb3J0IHsgZ2V0R0xUeXBlRm9yVHlwZWRBcnJheSB9IGZyb20gXCIuL3Byb2dyYW1JbmZvXCI7XG5pbXBvcnQgeyBUWVBFRF9BUlJBWVMgfSBmcm9tIFwiLi9lbnVtc1wiO1xuY29uc3QgY3JlYXRlSW5kaWNlc0J1ZmZlciA9IChnbCwgaW5kaWNlcykgPT4ge1xuICBjb25zdCBidWZmZXIgPSBnbC5jcmVhdGVCdWZmZXIoKTtcbiAgZ2wuYmluZEJ1ZmZlcihnbC5FTEVNRU5UX0FSUkFZX0JVRkZFUiwgYnVmZmVyKTtcbiAgZ2wuYnVmZmVyRGF0YShnbC5FTEVNRU5UX0FSUkFZX0JVRkZFUiwgaW5kaWNlcywgZ2wuU1RBVElDX0RSQVcpO1xuICByZXR1cm4gYnVmZmVyO1xufTtcbmNvbnN0IGZsb2F0QXR0cmliU2V0dGVyID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBudW1Db21wb25lbnRzLFxuICAgIHR5cGUsXG4gICAgbG9jYXRpb24sXG4gICAgbnVtQXR0cmlidXRlcyxcbiAgICBzdHJpZGUsXG4gICAgb2Zmc2V0LFxuICAgIGJ1ZmZlcixcbiAgICBnbCxcbiAgICBkaXZpc29yLFxuICB9ID0gcHJvcHM7XG5cbiAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIGJ1ZmZlcik7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtQXR0cmlidXRlczsgaSsrKSB7XG4gICAgY29uc3QgX29mZnNldCA9IG51bUNvbXBvbmVudHMgKiBpICogVFlQRURfQVJSQVlTW3R5cGVdLkJZVEVTX1BFUl9FTEVNRU5UO1xuICAgIGdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KGxvY2F0aW9uICsgaSk7XG4gICAgZ2wudmVydGV4QXR0cmliUG9pbnRlcihcbiAgICAgIGxvY2F0aW9uICsgaSxcbiAgICAgIG51bUNvbXBvbmVudHMsXG4gICAgICB0eXBlLFxuICAgICAgZmFsc2UsXG4gICAgICBzdHJpZGUsXG4gICAgICBvZmZzZXQgKyBfb2Zmc2V0XG4gICAgKTtcblxuICAgIGlmIChkaXZpc29yKSBnbC52ZXJ0ZXhBdHRyaWJEaXZpc29yKGxvY2F0aW9uICsgaSwgZGl2aXNvcik7XG4gIH1cbn07XG5jb25zdCBpbnRBdHRyaWJTZXR0ZXIgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIG51bUNvbXBvbmVudHMsXG4gICAgdHlwZSxcbiAgICBsb2NhdGlvbixcbiAgICBudW1BdHRyaWJ1dGVzLFxuICAgIHN0cmlkZSxcbiAgICBvZmZzZXQsXG4gICAgYnVmZmVyLFxuICAgIGdsLFxuICAgIGRpdmlzb3IsXG4gIH0gPSBwcm9wcztcbiAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIGJ1ZmZlcik7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtQXR0cmlidXRlczsgaSsrKSB7XG4gICAgY29uc3QgX29mZnNldCA9IG51bUNvbXBvbmVudHMgKiBpICogVFlQRURfQVJSQVlTW3R5cGVdLkJZVEVTX1BFUl9FTEVNRU5UO1xuICAgIGdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KGxvY2F0aW9uICsgaSk7XG4gICAgZ2wudmVydGV4QXR0cmliSVBvaW50ZXIoXG4gICAgICBsb2NhdGlvbiArIGksXG4gICAgICBudW1Db21wb25lbnRzLFxuICAgICAgdHlwZSxcbiAgICAgIGZhbHNlLFxuICAgICAgc3RyaWRlLFxuICAgICAgb2Zmc2V0ICsgX29mZnNldFxuICAgICk7XG4gICAgaWYgKGRpdmlzb3IpIGdsLnZlcnRleEF0dHJpYkRpdmlzb3IobG9jYXRpb24gKyBpLCBkaXZpc29yKTtcbiAgfVxufTtcbmNvbnN0IGF0dHJpYlR5cGVNYXAgPSB7fTtcbmF0dHJpYlR5cGVNYXBbMHgxNDAwXSA9IGludEF0dHJpYlNldHRlcjtcbmF0dHJpYlR5cGVNYXBbMHgxNDA2XSA9IGZsb2F0QXR0cmliU2V0dGVyO1xuYXR0cmliVHlwZU1hcFsweDE0MDFdID0gaW50QXR0cmliU2V0dGVyO1xuYXR0cmliVHlwZU1hcFsweDE0MDRdID0gaW50QXR0cmliU2V0dGVyO1xuYXR0cmliVHlwZU1hcFsweDE0MDVdID0gaW50QXR0cmliU2V0dGVyO1xuYXR0cmliVHlwZU1hcFsweDE0MDJdID0gaW50QXR0cmliU2V0dGVyO1xuYXR0cmliVHlwZU1hcFsweDE0MDNdID0gaW50QXR0cmliU2V0dGVyO1xuXG5jb25zdCBzZXRBdHRyaWJ1dGVzID0gKGdsLCBidWZmZXJJbmZvLCBkaXZpc29yKSA9PiB7XG4gIGNvbnN0IHsgdHlwZSB9ID0gYnVmZmVySW5mbztcbiAgY29uc3Qgc2V0dGVyID0gYXR0cmliVHlwZU1hcFt0eXBlXTtcbiAgc2V0dGVyKGJ1ZmZlckluZm8sIGRpdmlzb3IpO1xufTtcbmNsYXNzIEJ1ZmZlckNvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvcihnbCwgdGFyZ2V0ID0gMHg4ODkyKSB7XG4gICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XG4gICAgdGhpcy5idWZmZXIgPSBnbC5jcmVhdGVCdWZmZXIoKTtcbiAgICB0aGlzLmdsID0gZ2w7XG4gICAgdGhpcy5idWZmZXJEYXRhID0gKGRhdGEsIGJ5dGVMZW5ndGgsIHVzYWdlID0gZ2wuU1RBVElDX0RSQVcpID0+IHtcbiAgICAgIGdsLmJpbmRCdWZmZXIodGFyZ2V0LCB0aGlzLmJ1ZmZlcik7XG4gICAgICBnbC5idWZmZXJEYXRhKHRhcmdldCwgZGF0YSB8fCBieXRlTGVuZ3RoLCB1c2FnZSk7XG4gICAgfTtcbiAgICB0aGlzLmJ1ZmZlclN1YkRhdGEgPSAoZGF0YSwgb2Zmc2V0ID0gMCkgPT4ge1xuICAgICAgZ2wuYmluZEJ1ZmZlcih0YXJnZXQsIHRoaXMuYnVmZmVyKTtcbiAgICAgIGdsLmJ1ZmZlclN1YkRhdGEodGFyZ2V0LCBvZmZzZXQsIGRhdGEpO1xuICAgIH07XG4gIH1cbn1cbmNsYXNzIEF0dHJpYnV0ZVNldHRlciB7XG4gIGNvbnN0cnVjdG9yKGluZm8pIHtcbiAgICB0aGlzLnN0cmlkZSA9IGluZm8uc3RyaWRlIHx8IDA7XG4gICAgdGhpcy5udW1Db21wb25lbnRzID0gaW5mby5udW1Db21wb25lbnRzO1xuICAgIHRoaXMubnVtQXR0cmlidXRlcyA9IGluZm8ubnVtQXR0cmlidXRlcyB8fCAxO1xuICAgIHRoaXMub2Zmc2V0ID0gaW5mby5vZmZzZXQgfHwgMDtcbiAgICB0aGlzLnR5cGUgPSBpbmZvLnR5cGU7XG4gICAgdGhpcy5sb2NhdGlvbiA9IGluZm8ubG9jYXRpb247XG4gIH1cbiAgc2V0QXR0cmlidXRlKGJ1ZmZlckNvbnRyb2xsZXIsIGRpdmlzb3IpIHtcbiAgICBjb25zdCB7IHR5cGUgfSA9IHRoaXM7XG4gICAgY29uc3Qgc2V0dGVyID0gYXR0cmliVHlwZU1hcFt0eXBlXTtcbiAgICBzZXR0ZXIodGhpcywgYnVmZmVyQ29udHJvbGxlciwgZGl2aXNvcik7XG4gIH1cbn1cbmNsYXNzIEJ1ZmZlckF0dHJpYnV0ZSB7XG4gIGNvbnN0cnVjdG9yKGdsLCBpbmZvKSB7XG4gICAgdGhpcy5nbCA9IGdsO1xuICAgIHRoaXMuYnVmZmVyID0gZ2wuY3JlYXRlQnVmZmVyKCk7XG4gICAgdGhpcy5zdHJpZGUgPSBpbmZvLnN0cmlkZSB8fCAwO1xuICAgIHRoaXMubnVtQ29tcG9uZW50cyA9IGluZm8ubnVtQ29tcG9uZW50cztcbiAgICB0aGlzLm51bUF0dHJpYnV0ZXMgPSBpbmZvLm51bUF0dHJpYnV0ZXMgfHwgMTtcbiAgICB0aGlzLm9mZnNldCA9IGluZm8ub2Zmc2V0IHx8IDA7XG4gICAgdGhpcy50eXBlID0gaW5mby50eXBlO1xuICAgIHRoaXMubG9jYXRpb24gPSBpbmZvLmxvY2F0aW9uO1xuICAgIHRoaXMuZGl2aXNvciA9IGluZm8uZGl2aXNvcjtcbiAgfVxuICBzZXRBdHRyaWJ1dGUoKSB7XG4gICAgY29uc3QgeyB0eXBlLCBnbCB9ID0gdGhpcztcbiAgICBjb25zdCBzZXR0ZXIgPSBhdHRyaWJUeXBlTWFwW3R5cGVdO1xuICAgIHNldHRlcih0aGlzKTtcbiAgfVxuICBidWZmZXJEYXRhKGRhdGEsIGJ5dGVMZW5ndGgsIHVzYWdlID0gMHg4OGU0KSB7XG4gICAgY29uc3QgeyBnbCwgYnVmZmVyIH0gPSB0aGlzO1xuICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCBidWZmZXIpO1xuICAgIGdsLmJ1ZmZlckRhdGEoZ2wuQVJSQVlfQlVGRkVSLCBkYXRhIHx8IGJ5dGVMZW5ndGgsIHVzYWdlKTtcbiAgfVxuICBidWZmZXJTdWJEYXRhKGRhdGEsIG9mZnNldCA9IDApIHtcbiAgICBjb25zdCB7IGdsLCBidWZmZXIgfSA9IHRoaXM7XG4gICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIGJ1ZmZlcik7XG4gICAgZ2wuYnVmZmVyU3ViRGF0YShnbC5BUlJBWV9CVUZGRVIsIG9mZnNldCwgZGF0YSk7XG4gIH1cbn1cblxuZXhwb3J0IHtcbiAgQnVmZmVyQXR0cmlidXRlLFxuICBjcmVhdGVJbmRpY2VzQnVmZmVyLFxuICBBdHRyaWJ1dGVTZXR0ZXIsXG4gIEJ1ZmZlckNvbnRyb2xsZXIsXG59O1xuIiwiaW1wb3J0IHsgbTQgfSBmcm9tIFwibWF0aFwiO1xuXG5jb25zdCBkZWdUb1JhZCA9IChkKSA9PiAoZCAqIE1hdGguUEkpIC8gMTgwO1xuXG5jb25zdCBmaWVsZE9mVmlld1JhZGlhbnMgPSBkZWdUb1JhZCg5MCk7XG5cbmNsYXNzIERyYXdlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuY29udGV4dCA9IG51bGw7XG4gICAgdGhpcy5wcm9qZWN0aW9uTWF0cml4ID0gbnVsbDtcbiAgICB0aGlzLmZpZWxkT2ZWaWV3UmFkaWFucyA9IGRlZ1RvUmFkKDkwKTtcbiAgfVxuICBzZXRDb250ZXh0KGdsQ29udGV4dFdyYXBwZXIpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBnbENvbnRleHRXcmFwcGVyO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIHNldEZpZWxkT2ZWaWV3KGFuZ2xlKSB7XG4gICAgdGhpcy5maWVsZE9mVmlld1JhZGlhbnMgPSBkZWdUb1JhZChhbmdsZSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgdXBkYXRlM0RQcm9qZWN0aW9uTWF0cml4KHpOZWFyID0gMC4wMSwgekZhciA9IDIwMDApIHtcbiAgICBjb25zdCB7IGdsIH0gPSB0aGlzLmNvbnRleHQ7XG4gICAgY29uc3QgYXNwZWN0ID0gZ2wuY2FudmFzLmNsaWVudFdpZHRoIC8gZ2wuY2FudmFzLmNsaWVudEhlaWdodDtcbiAgICB0aGlzLnByb2plY3Rpb25NYXRyaXggPSBtNC5wZXJzcGVjdGl2ZShcbiAgICAgIGZpZWxkT2ZWaWV3UmFkaWFucyxcbiAgICAgIGFzcGVjdCxcbiAgICAgIHpOZWFyLFxuICAgICAgekZhclxuICAgICk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBnZXRWaWV3UHJvamVjdGlvbk1hdHJpeChjYW1lcmFNYXRyaXgpIHtcbiAgICBjb25zdCB7IHByb2plY3Rpb25NYXRyaXggfSA9IHRoaXM7XG4gICAgY29uc3QgeyBnbCB9ID0gdGhpcy5jb250ZXh0O1xuICAgIGNvbnN0IHZpZXdNYXRyaXggPSBtNC5pbnZlcnNlKGNhbWVyYU1hdHJpeCk7XG4gICAgcmV0dXJuIG00Lm11bHRpcGx5KHByb2plY3Rpb25NYXRyaXgsIHZpZXdNYXRyaXgpO1xuICB9XG4gIGRyYXcocmVuZGVySW5mbywgdW5pZm9ybXMsIGNhbWVyYU1hdHJpeCkge1xuICAgIGNvbnN0IHZpZXdQcm9qZWN0aW9uTWF0cml4ID0gdGhpcy5nZXRWaWV3UHJvamVjdGlvbk1hdHJpeChjYW1lcmFNYXRyaXgpO1xuICAgIGNvbnN0IHtcbiAgICAgIHZhbyxcbiAgICAgIG1vZGUsXG4gICAgICBvZmZzZXQsXG4gICAgICBudW1FbGVtZW50cyxcbiAgICAgIGluZGljZXMsXG4gICAgICBjb21wb25lbnRUeXBlLFxuICAgICAgcHJvZ3JhbUluZm8sXG4gICAgfSA9IHJlbmRlckluZm87XG4gICAgY29uc3QgeyBnbCB9ID0gdGhpcy5jb250ZXh0O1xuXG4gICAgY29uc3QgdV93b3JsZFZpZXdQcm9qZWN0aW9uID0gbTQubXVsdGlwbHkoXG4gICAgICB2aWV3UHJvamVjdGlvbk1hdHJpeCxcbiAgICAgIHVuaWZvcm1zLnVfbWF0cml4XG4gICAgKTtcbiAgXG4gICAgdGhpcy5jb250ZXh0LnVzZVByb2dyYW1JbmZvKHByb2dyYW1JbmZvKTtcbiAgICB0aGlzLmNvbnRleHRcbiAgICAgIC5nZXRMYXN0VXNlZFByb2dyYW1JbmZvKClcbiAgICAgIC5zZXRVbmlmb3Jtcyh7IC4uLnVuaWZvcm1zLCAgdV93b3JsZFZpZXdQcm9qZWN0aW9uIH0pO1xuICAgIGlmICh2YW8pIGdsLmJpbmRWZXJ0ZXhBcnJheSh2YW8pO1xuICAgIGlmICghaW5kaWNlcykge1xuICAgICAgZ2wuZHJhd0FycmF5cyhtb2RlLCBvZmZzZXQsIG51bUVsZW1lbnRzKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZ2wuZHJhd0VsZW1lbnRzKG1vZGUsIG51bUVsZW1lbnRzLCBjb21wb25lbnRUeXBlLCBvZmZzZXQpO1xuICB9XG4gIGRyYXdJbnN0YW5jZWQocmVuZGVySW5mbywgdW5pZm9ybXMsIGNhbWVyYU1hdHJpeCwgbnVtSW5zdGFuY2VzKSB7XG4gICAgY29uc3Qgdmlld1Byb2plY3Rpb25NYXRyaXggPSB0aGlzLmdldFZpZXdQcm9qZWN0aW9uTWF0cml4KGNhbWVyYU1hdHJpeCk7XG4gICAgY29uc3QgeyBnbCB9ID0gdGhpcy5jb250ZXh0O1xuICAgIGNvbnN0IHsgdmFvLCBtb2RlLCBvZmZzZXQsIG51bUVsZW1lbnRzLCBpbmRpY2VzLCBwcm9ncmFtSW5mbyB9ID0gcmVuZGVySW5mbztcbiAgICBjb25zdCB3b3JsZFZpZXdQcm9qZWN0aW9uID0gbTQubXVsdGlwbHkoXG4gICAgICB2aWV3UHJvamVjdGlvbk1hdHJpeCxcbiAgICAgIHVuaWZvcm1zLnVfbWF0cml4XG4gICAgKTtcbiAgICBjb25zdCB3b3JsZE1hdHJpeCA9IHVuaWZvcm1zLnVfbWF0cml4O1xuICAgIHRoaXMuY29udGV4dC51c2VQcm9ncmFtSW5mbyhwcm9ncmFtSW5mbyk7XG4gICAgdGhpcy5jb250ZXh0XG4gICAgICAuZ2V0TGFzdFVzZWRQcm9ncmFtSW5mbygpXG4gICAgICAuc2V0VW5pZm9ybXMoeyAuLi51bmlmb3Jtcywgd29ybGRNYXRyaXgsIHdvcmxkVmlld1Byb2plY3Rpb24gfSk7XG4gICAgZ2wuYmluZFZlcnRleEFycmF5KHZhbyk7XG4gICAgaWYgKCFpbmRpY2VzKSB7XG4gICAgICBnbC5kcmF3QXJyYXlzSW5zdGFuY2VkKG1vZGUsIG9mZnNldCwgbnVtRWxlbWVudHMsIG51bUluc3RhbmNlcyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGdsLmRyYXdFbGVtZW50c0luc3RhbmNlZChcbiAgICAgIG1vZGUsXG4gICAgICBudW1FbGVtZW50cyxcbiAgICAgIGdsLlVOU0lHTkVEX1NIT1JULFxuICAgICAgb2Zmc2V0LFxuICAgICAgbnVtSW5zdGFuY2VzXG4gICAgKTtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgRHJhd2VyO1xuIiwiaW1wb3J0IGdldEF0dHJpYnV0ZVByb3BzQnlUeXBlIGZyb20gXCIuL2F0dHJpYlR5cGVQcm9wc1wiO1xuaW1wb3J0IGF0dHJpYlR5cGVQcm9wcyBmcm9tIFwiLi9hdHRyaWJUeXBlUHJvcHNcIjtcbmltcG9ydCB7IEJ1ZmZlckF0dHJpYnV0ZSB9IGZyb20gXCIuL0J1ZmZlckF0dHJpYnV0ZVwiO1xuY2xhc3MgTWVzaFJlbmRlcmVyIHtcbiAgY29uc3RydWN0b3IoeyBwcmltaXRpdmVzLCBuYW1lIH0pIHtcbiAgICB0aGlzLnByaW1pdGl2ZXMgPSBwcmltaXRpdmVzO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5jb250ZXh0ID0gbnVsbDtcbiAgICB0aGlzLmJ1ZmZlcnMgPSB7fTtcbiAgfVxuICBzZXRDb250ZXh0KGdsQ29udGV4dFdyYXBwZXIpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBnbENvbnRleHRXcmFwcGVyO1xuICAgIGZvciAobGV0IGkgPSAwLCBuID0gdGhpcy5wcmltaXRpdmVzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgdGhpcy5wcmltaXRpdmVzW2ldLnNldENvbnRleHQoZ2xDb250ZXh0V3JhcHBlcik7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIHNldFByb2dyYW1JbmZvKHByb2dyYW1JbmZvKSB7XG4gICAgZm9yIChsZXQgaSA9IDAsIG4gPSB0aGlzLnByaW1pdGl2ZXMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICB0aGlzLnByaW1pdGl2ZXNbaV0uc2V0UHJvZ3JhbUluZm8ocHJvZ3JhbUluZm8pO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBzZXREcmF3ZXIoZHJhd2VyKSB7XG4gICAgZm9yIChsZXQgaSA9IDAsIG4gPSB0aGlzLnByaW1pdGl2ZXMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICB0aGlzLnByaW1pdGl2ZXNbaV0uc2V0RHJhd2VyKGRyYXdlcik7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIGRyYXcodW5pZm9ybXMsIGNhbWVyYU1hdHJpeCkge1xuICAgIGZvciAobGV0IGkgPSAwLCBuID0gdGhpcy5wcmltaXRpdmVzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgdGhpcy5wcmltaXRpdmVzW2ldLmRyYXcodW5pZm9ybXMsIGNhbWVyYU1hdHJpeCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIGRyYXdJbnN0YW5jZWQodW5pZm9ybXMsIGNhbWVyYU1hdHJpeCwgbnVtSW5zdGFuY2VzKSB7XG4gICAgZm9yIChsZXQgaSA9IDAsIG4gPSB0aGlzLnByaW1pdGl2ZXMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICB0aGlzLnByaW1pdGl2ZXNbaV0uZHJhd0luc3RhbmNlZCh1bmlmb3JtcywgY2FtZXJhTWF0cml4LCBudW1JbnN0YW5jZXMpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBjcmVhdGVQcmltaXRpdmVCdWZmZXJzKCkge1xuICAgIHRoaXMucHJpbWl0aXZlcy5mb3JFYWNoKChwcmltaXRpdmUpID0+IHByaW1pdGl2ZS5jcmVhdGVHZW9tZXRyeUJ1ZmZlcnMoKSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgY3JlYXRlQnVmZmVyQXR0cmliRGF0YShuYW1lLCB0eXBlLCBwYXJhbXMpIHtcbiAgICBjb25zdCB7IGdsIH0gPSB0aGlzLmNvbnRleHQ7XG4gICAgY29uc3QgYXR0cmliUHJvcHMgPSBnZXRBdHRyaWJ1dGVQcm9wc0J5VHlwZSh0eXBlKTtcbiAgICBjb25zdCBhdHRyaWJ1dGVQcm9wcyA9IHsgLi4uYXR0cmliUHJvcHMsIC4uLnBhcmFtcyB9O1xuICAgIGNvbnN0IGJ1ZmZlckF0dHJpYkRhdGEgPSBuZXcgQnVmZmVyQXR0cmlidXRlKGdsLCBhdHRyaWJ1dGVQcm9wcyk7XG4gICAgdGhpcy5idWZmZXJzID0geyAuLi50aGlzLmJ1ZmZlcnMsIFtuYW1lXTogYnVmZmVyQXR0cmliRGF0YSB9O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIGJ1ZmZlckRhdGEoYnVmZmVyTmFtZSwgZGF0YSwgYnl0ZUxlbmd0aCkge1xuICAgIGNvbnN0IGJ1ZmZlckF0dHJpYnV0ZURlc2NyaXB0b3IgPSB0aGlzLmJ1ZmZlcnNbYnVmZmVyTmFtZV07XG5cbiAgICBidWZmZXJBdHRyaWJ1dGVEZXNjcmlwdG9yLmJ1ZmZlckRhdGEoZGF0YSwgYnl0ZUxlbmd0aCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgYnVmZmVyU3ViRGF0YShidWZmZXJOYW1lLCBkYXRhLCBvZmZzZXQpIHtcbiAgICBjb25zdCBidWZmZXJBdHRyaWJ1dGVEZXNjcmlwdG9yID0gdGhpcy5idWZmZXJzW2J1ZmZlck5hbWVdO1xuICAgIGJ1ZmZlckF0dHJpYnV0ZURlc2NyaXB0b3IuYnVmZmVyU3ViRGF0YShkYXRhLCBieXRlTGVuZ3RoLCBvZmZzZXQpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIHNldEF0dHJpYnV0ZShuYW1lKSB7XG4gICAgY29uc3QgYnVmZmVyQXR0cmliRGF0YSA9IHRoaXMuYnVmZmVyc1tuYW1lXTtcbiAgICB0aGlzLnByaW1pdGl2ZXMuZm9yRWFjaCgocHJpbWl0aXZlKSA9PlxuICAgICAgcHJpbWl0aXZlLnNldEF0dHJpYnV0ZShidWZmZXJBdHRyaWJEYXRhKVxuICAgICk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgc2V0UHJpbWl0aXZlQXR0cmlidXRlcygpIHtcbiAgICBmb3IgKGxldCBpID0gMCwgbiA9IHRoaXMucHJpbWl0aXZlcy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgIHRoaXMucHJpbWl0aXZlc1tpXS5zZXRBdHRyaWJ1dGVzKCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG5jbGFzcyBTa2lubmVkTWVzaFJlbmRlcmVyIHtcbiAgY29uc3RydWN0b3IocHJpbWl0aXZlcywgc2tpbikge1xuICAgIHRoaXMucHJpbWl0aXZlcyA9IHByaW1pdGl2ZXM7XG4gICAgdGhpcy5za2luID0gc2tpbjtcbiAgfVxuICBkcmF3KHVuaWZvcm1zLCBjYW1lcmFNYXRyaXgpIHtcbiAgICB0aGlzLnNraW4udXBkYXRlKHVuaWZvcm1zLnVfbWF0cml4KTtcbiAgICBjb25zdCBfdW5pZm9ybXMgPSB7XG4gICAgICB1X2pvaW50VGV4dHVyZTogdGhpcy5za2luLmpvaW50VGV4dHVyZSxcbiAgICAgIHVfbnVtSm9pbnRzOiB0aGlzLnNraW4uam9pbnRzLmxlbmd0aCxcbiAgICAgIC4uLnVuaWZvcm1zLFxuICAgIH07XG4gICAgZm9yIChsZXQgaSA9IDAsIG4gPSB0aGlzLnByaW1pdGl2ZXMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICB0aGlzLnByaW1pdGl2ZXNbaV0uZHJhdyhfdW5pZm9ybXMsIGNhbWVyYU1hdHJpeCk7XG4gICAgfVxuICB9XG59XG5leHBvcnQgeyBNZXNoUmVuZGVyZXIsIFNraW5uZWRNZXNoUmVuZGVyZXIgfTtcbiIsIlxuXG5jbGFzcyBUUlMge1xuICBjb25zdHJ1Y3Rvcih0cmFuc2xhdGlvbiwgcm90YXRpb24sIHNjYWxlKSB7XG4gICAgdGhpcy50cmFuc2xhdGlvbiA9IHRyYW5zbGF0aW9uO1xuICAgIHRoaXMucm90YXRpb24gPSByb3RhdGlvbjtcbiAgICB0aGlzLnNjYWxlID0gc2NhbGU7XG4gIH1cbiAgZ2V0TWF0cml4KG0pIHtcbiAgICBsZXQgZHN0ID0gbSB8fCBtNC5pZGVudGl0eSgpO1xuICAgIHZhciB0ID0gdGhpcy50cmFuc2xhdGlvbjtcbiAgICB2YXIgciA9IHRoaXMucm90YXRpb247XG4gICAgdmFyIHMgPSB0aGlzLnNjYWxlO1xuICAgIGNvbnN0IHNpbiA9IE1hdGguc2luKHJbM10gLyAyKTtcbiAgICBjb25zdCBjb3MgPSBNYXRoLmNvcyhyWzNdIC8gMik7XG4gICAgZHN0ID0gbTQudHJhbnNsYXRlKGRzdCwgdFswXSwgdFsxXSwgdFsyXSk7XG5cbiAgICBkc3QgPSBtNC5tdWx0aXBseShkc3QsIG00LmZyb21RdWF0ZXJuaW9uKHIpKTtcblxuICAgIGRzdCA9IG00LnNjYWxlKGRzdCwgc1swXSwgc1sxXSwgc1syXSk7XG4gICAgcmV0dXJuIGRzdDtcbiAgfVxuICBnZXRSTWF0cml4KCkge1xuICAgIGxldCBkc3QgPSBtNC5pZGVudGl0eSgpO1xuICAgIHZhciByID0gdGhpcy5yb3RhdGlvbjtcbiAgICBkc3QgPSBtNC54Um90YXRlKGRzdCwgclswXSk7XG4gICAgZHN0ID0gbTQueVJvdGF0ZShkc3QsIHJbMV0pO1xuICAgIGRzdCA9IG00LnpSb3RhdGUoZHN0LCByWzJdKTtcbiAgICByZXR1cm4gZHN0O1xuICB9XG4gIGdldFRSbWF0cml4KCkge1xuICAgIGNvbnN0IHQgPSB0aGlzLnRyYW5zbGF0aW9uO1xuICAgIGNvbnN0IHIgPSB0aGlzLnJvdGF0aW9uO1xuXG4gICAgbGV0IG0gPSBtNC50cmFuc2xhdGlvbiggdFswXSwgdFsxXSwgdFsyXSk7XG5cbiAgICBtID0gbTQueFJvdGF0ZShtLCByWzBdKTtcbiAgICBtID0gbTQueVJvdGF0ZShtLCByWzFdKTtcbiAgICBtID0gbTQuelJvdGF0ZShtLCByWzJdKTtcbiAgICByZXR1cm4gbVxuICB9XG59XG5jbGFzcyBOb2RlIHtcblxuICBzdGF0aWMgbWFrZU1vZGVsKGVudGl0eURlc2NyaXB0aW9uLCByb290Tm9kZU5keCkge1xuICAgIGNvbnN0IHsgbm9kZXMsIG1lc2hlcyB9ID0gZW50aXR5RGVzY3JpcHRpb247XG4gICAgY29uc3Qgcm9vdE5vZGUgPSBub2Rlc1tyb290Tm9kZU5keF07XG4gICAgY29uc3QgbWFrZU5vZGUgPSAobm9kZURlc2NyaXB0aW9uLCBuZHgpID0+IHtcbiAgICAgIGNvbnN0IHRycyA9IG5ldyBUUlMoXG4gICAgICAgIG5vZGVEZXNjcmlwdGlvbi50cmFuc2xhdGlvbiB8fCBbMCwgMCwgMF0sXG4gICAgICAgIG5vZGVEZXNjcmlwdGlvbi5yb3RhdGlvbiB8fCBbMCwgMCwgMF0sXG4gICAgICAgIG5vZGVEZXNjcmlwdGlvbi5zY2FsZSB8fCBbMSwgMSwgMV1cbiAgICAgICk7XG4gICAgICBjb25zdCBub2RlID0gbmV3IE5vZGUobm9kZURlc2NyaXB0aW9uLm5hbWUsIHRycywgbmR4KTtcbiAgICAgIGlmIChub2RlRGVzY3JpcHRpb24ubWVzaCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgbm9kZS5yZW5kZXJlciA9IG1lc2hlc1tub2RlRGVzY3JpcHRpb24ubWVzaF07XG4gICAgICB9XG4gICAgICBpZiAobm9kZURlc2NyaXB0aW9uLmNoaWxkcmVuKSB7XG4gICAgICAgIG5vZGVEZXNjcmlwdGlvbi5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZE5keCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGNoaWxkID0gbWFrZU5vZGUobm9kZXNbY2hpbGROZHhdLCBjaGlsZE5keCk7XG4gICAgICAgICAgY2hpbGQuc2V0UGFyZW50KG5vZGUpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBub2RlO1xuICAgIH07XG4gICAgcmV0dXJuIG1ha2VOb2RlKHJvb3ROb2RlLCByb290Tm9kZU5keCk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihuYW1lLCB0cnMgPSBuZXcgVFJTKCkpIHtcbiAgICB0aGlzLndvcmxkTWF0cml4ID0gbTQuaWRlbnRpdHkoKTtcbiAgICB0aGlzLnBhcmVudCA9IG51bGw7XG4gICAgdGhpcy5jaGlsZHJlbiA9IFtdO1xuICAgIHRoaXMudHJzID0gdHJzO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5wYXJ0cyA9IFtdO1xuICAgIHRoaXMubmR4ID0gbmR4O1xuICAgIHRoaXMuc2tpbk5keCA9IG51bGw7XG4gICAgdGhpcy5vYmplY3RzVG9EcmF3ID0gW107XG4gICAgdGhpcy5yZW5kZXJlciA9IG51bGw7XG4gIH1cbiAgc2V0UGFyZW50KHBhcmVudCkge1xuICAgIGlmICh0aGlzLnBhcmVudCkge1xuICAgICAgY29uc3QgbmR4ID0gdGhpcy5wYXJlbnQuY2hpbGRyZW4uaW5kZXhPZih0aGlzKTtcbiAgICAgIGlmIChuZHggPj0gMCkge1xuICAgICAgICB0aGlzLnBhcmVudC5jaGlsZHJlbi5zcGxpY2UobmR4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHBhcmVudCkge1xuICAgICAgcGFyZW50LmNoaWxkcmVuLnB1c2godGhpcyk7XG4gICAgfVxuICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICB9XG4gIHVwZGF0ZVdvcmxkTWF0cml4KHBhcmVudFdvcmxkTWF0cml4KSB7XG4gICAgbGV0IG1hdHJpeCA9IHRoaXMudHJzLmdldE1hdHJpeCgpO1xuICAgIGlmIChwYXJlbnRXb3JsZE1hdHJpeCkge1xuICAgICAgbWF0cml4ID0gbTQubXVsdGlwbHkocGFyZW50V29ybGRNYXRyaXgsIG1hdHJpeCk7XG4gICAgfVxuICAgIHRoaXMud29ybGRNYXRyaXggPSBtYXRyaXg7XG4gICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgY2hpbGQudXBkYXRlV29ybGRNYXRyaXgobWF0cml4KTtcbiAgICB9KTtcbiAgfVxuICB1cGRhdGVQYXJ0c0xpc3QoKSB7XG4gICAgY29uc3QgaXRlciA9IChub2RlLCBhcnIpID0+IHtcbiAgICAgIGFyci5wdXNoKG5vZGUpO1xuICAgICAgbm9kZS5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4gaXRlcihjaGlsZCwgYXJyKSk7XG4gICAgfTtcbiAgICBpdGVyKHRoaXMsIHRoaXMucGFydHMpO1xuICB9XG4gIHVwZGF0ZU9iamVjdHNUb0RyYXcoKSB7XG4gICAgY29uc3QgcXVldWUgPSBbdGhpc107XG4gICAgd2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IG5vZGUgPSBxdWV1ZS5wb3AoKTtcbiAgICAgIGNvbnNvbGUubG9nKG5vZGUpO1xuICAgICAgaWYgKG5vZGUucmVuZGVyZXIpIHRoaXMub2JqZWN0c1RvRHJhdy5wdXNoKG5vZGUpO1xuICAgICAgaWYgKG5vZGUuY2hpbGRyZW4pIHF1ZXVlLnB1c2goLi4ubm9kZS5jaGlsZHJlbik7XG4gICAgfVxuICB9XG4gIHRyYXZlcnNlKGZuKSB7XG4gICAgZm4odGhpcyk7XG4gICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4gY2hpbGQudHJhdmVyc2UoZm4pKTtcbiAgfVxuICBmaW5kKG5keCkge1xuICAgIGxldCByZXN1bHQgPSBudWxsO1xuICAgIGNvbnN0IGl0ZXIgPSAobm9kZXMpID0+IHtcbiAgICAgIGZvciAobGV0IG5vZGUgb2Ygbm9kZXMpIHtcbiAgICAgICAgaWYgKG5vZGUubmR4ID09PSBuZHgpIHJlc3VsdCA9IG5vZGU7XG4gICAgICAgIGVsc2UgaXRlcihub2RlLmNoaWxkcmVuKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGl0ZXIoW3RoaXNdKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIGZpbmRCeU5hbWUobmFtZSkge1xuICAgIGxldCByZXN1bHQgPSBudWxsO1xuICAgIGNvbnN0IGl0ZXIgPSAobm9kZXMpID0+IHtcbiAgICAgIGZvciAobGV0IG5vZGUgb2Ygbm9kZXMpIHtcbiAgICAgICAgaWYgKG5vZGUubmFtZSA9PT0gbmFtZSkgcmVzdWx0ID0gbm9kZTtcbiAgICAgICAgZWxzZSBpdGVyKG5vZGUuY2hpbGRyZW4pO1xuICAgICAgfVxuICAgIH07XG4gICAgaXRlcihbdGhpc10pO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgcmVuZGVyKHVuaWZvcm1zLCBjYW1lcmFNYXRyaXgpIHtcbiAgICB0aGlzLm9iamVjdHNUb0RyYXcuZm9yRWFjaCgob2JqZWN0KSA9PiB7XG4gICAgICBvYmplY3QucmVuZGVyZXIuZHJhdyhcbiAgICAgICAgeyAuLi51bmlmb3JtcywgdV9tYXRyaXg6IG9iamVjdC53b3JsZE1hdHJpeCB9LFxuICAgICAgICBjYW1lcmFNYXRyaXhcbiAgICAgICk7XG4gICAgfSk7XG4gIH1cbn1cblxuXG5cblxuY2xhc3MgTW9kZWwgZXh0ZW5kcyBOb2RlIHtcbiAgc3RhdGljIG1ha2VNb2RlbChlbnRpdHlEZXNjcmlwdGlvbiwgcm9vdE5vZGVOZHgpIHtcbiAgICBjb25zdCB7IG5vZGVzLCBtZXNoZXMgfSA9IGVudGl0eURlc2NyaXB0aW9uO1xuICAgIGNvbnN0IHJvb3ROb2RlID0gbm9kZXNbcm9vdE5vZGVOZHhdO1xuICAgIGNvbnN0IG1ha2VOb2RlID0gKG5vZGVEZXNjcmlwdGlvbiwgbmR4KSA9PiB7XG4gICAgICBjb25zdCB0cnMgPSBuZXcgVFJTKFxuICAgICAgICBub2RlRGVzY3JpcHRpb24udHJhbnNsYXRpb24gfHwgWzAsIDAsIDBdLFxuICAgICAgICBub2RlRGVzY3JpcHRpb24ucm90YXRpb24gfHwgWzAsIDAsIDAsIDBdLFxuICAgICAgICBub2RlRGVzY3JpcHRpb24uc2NhbGUgfHwgWzEsIDEsIDFdXG4gICAgICApO1xuICAgICAgY29uc3Qgbm9kZSA9IG5ldyBFbnRpdHkobm9kZURlc2NyaXB0aW9uLm5hbWUsIHRycywgbmR4KTtcbiAgICAgIGlmIChub2RlRGVzY3JpcHRpb24ubWVzaCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgbm9kZS5yZW5kZXJlciA9IG1lc2hlc1tub2RlRGVzY3JpcHRpb24ubWVzaF07XG4gICAgICB9XG4gICAgICBpZiAobm9kZURlc2NyaXB0aW9uLmNoaWxkcmVuKSB7XG4gICAgICAgIG5vZGVEZXNjcmlwdGlvbi5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZE5keCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGNoaWxkID0gbWFrZU5vZGUobm9kZXNbY2hpbGROZHhdLCBjaGlsZE5keCk7XG4gICAgICAgICAgY2hpbGQuc2V0UGFyZW50KG5vZGUpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBub2RlO1xuICAgIH07XG4gICAgcmV0dXJuIG1ha2VOb2RlKHJvb3ROb2RlLCByb290Tm9kZU5keCk7XG4gIH1cbiAgY29uc3RydWN0b3IobmFtZSwgdHJzLCBuZHgpIHtcbiAgICBzdXBlcihuYW1lLCB0cnMpO1xuICAgIHRoaXMubmR4ID0gbmR4O1xuICAgIHRoaXMucGh5c2ljcyA9IG51bGw7XG4gICAgdGhpcy5za2luTmR4ID0gbnVsbDtcbiAgICB0aGlzLm9iamVjdHNUb0RyYXcgPSBbXTtcbiAgICB0aGlzLnJlbmRlcmVyID0gbnVsbDtcbiAgfVxuICB1cGRhdGVPYmplY3RzVG9EcmF3KCkge1xuICAgIGNvbnN0IHF1ZXVlID0gW3RoaXNdO1xuICAgIHdoaWxlIChxdWV1ZS5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBub2RlID0gcXVldWUucG9wKCk7XG4gICAgICBjb25zb2xlLmxvZyhub2RlKTtcbiAgICAgIGlmIChub2RlLnJlbmRlcmVyKSB0aGlzLm9iamVjdHNUb0RyYXcucHVzaChub2RlKTtcbiAgICAgIGlmIChub2RlLmNoaWxkcmVuKSBxdWV1ZS5wdXNoKC4uLm5vZGUuY2hpbGRyZW4pO1xuICAgIH1cbiAgfVxuICB0cmF2ZXJzZShmbikge1xuICAgIGZuKHRoaXMpO1xuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IGNoaWxkLnRyYXZlcnNlKGZuKSk7XG4gIH1cbiAgZmluZChuZHgpIHtcbiAgICBsZXQgcmVzdWx0ID0gbnVsbDtcbiAgICBjb25zdCBpdGVyID0gKG5vZGVzKSA9PiB7XG4gICAgICBmb3IgKGxldCBub2RlIG9mIG5vZGVzKSB7XG4gICAgICAgIGlmIChub2RlLm5keCA9PT0gbmR4KSByZXN1bHQgPSBub2RlO1xuICAgICAgICBlbHNlIGl0ZXIobm9kZS5jaGlsZHJlbik7XG4gICAgICB9XG4gICAgfTtcbiAgICBpdGVyKFt0aGlzXSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICBmaW5kQnlOYW1lKG5hbWUpIHtcbiAgICBsZXQgcmVzdWx0ID0gbnVsbDtcbiAgICBjb25zdCBpdGVyID0gKG5vZGVzKSA9PiB7XG4gICAgICBmb3IgKGxldCBub2RlIG9mIG5vZGVzKSB7XG4gICAgICAgIGlmIChub2RlLm5hbWUgPT09IG5hbWUpIHJlc3VsdCA9IG5vZGU7XG4gICAgICAgIGVsc2UgaXRlcihub2RlLmNoaWxkcmVuKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGl0ZXIoW3RoaXNdKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIHJlbmRlcih1bmlmb3JtcywgY2FtZXJhTWF0cml4KSB7XG4gICAgdGhpcy5vYmplY3RzVG9EcmF3LmZvckVhY2goKG9iamVjdCkgPT4ge1xuICAgICAgb2JqZWN0LnJlbmRlcmVyLmRyYXcoXG4gICAgICAgIHsgLi4udW5pZm9ybXMsIHVfbWF0cml4OiBvYmplY3Qud29ybGRNYXRyaXggfSxcbiAgICAgICAgY2FtZXJhTWF0cml4XG4gICAgICApO1xuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vZGVsO1xuIiwiaW1wb3J0IHtcbiAgY3JlYXRlSW5kaWNlc0J1ZmZlcixcbiAgQnVmZmVyQXR0cmlidXRlLFxuICBEeW5hbWljQnVmZmVyQXR0cmliRGVzY3JpcHRvcixcbiAgQnVmZmVyQ29udHJvbGxlcixcbiAgQXR0cmlidXRlU2V0dGVyLFxufSBmcm9tIFwiLi9CdWZmZXJBdHRyaWJ1dGVcIjtcbmltcG9ydCB7IEVMRU1FTlRfU0laRSB9IGZyb20gXCIuL2VudW1zXCI7XG5pbXBvcnQgeyBnZXRHTFR5cGVGb3JUeXBlZEFycmF5IH0gZnJvbSBcIi4vcHJvZ3JhbUluZm9cIjtcbmltcG9ydCBnZXRBdHRyaWJ1dGVQcm9wc0J5VHlwZSBmcm9tIFwiLi9hdHRyaWJUeXBlUHJvcHNcIjtcblxuY2xhc3MgUHJpbWl0aXZlUmVuZGVyZXIge1xuICBjb25zdHJ1Y3RvcihhcnJheURhdGEpIHtcbiAgICB0aGlzLmJ1ZmZlcnMgPSB7fTtcbiAgICB0aGlzLnByb2dyYW1JbmZvID0gbnVsbDtcbiAgICB0aGlzLmNvbnRleHQgPSBudWxsO1xuICAgIHRoaXMuZHJhd2VyID0gbnVsbDtcbiAgICB0aGlzLm1vZGUgPSBudWxsO1xuICAgIHRoaXMub2Zmc2V0ID0gbnVsbDtcbiAgICB0aGlzLm51bUVsZW1lbnRzID0gbnVsbDtcbiAgICB0aGlzLnZhbyA9IG51bGw7XG4gICAgdGhpcy5jb21wb25lbnRUeXBlID0gbnVsbDtcbiAgICB0aGlzLmFycmF5RGF0YSA9IGFycmF5RGF0YTtcbiAgICBjb25zdCB7Y29tcG9uZW50VHlwZSwgbnVtRWxlbWVudHMsIG1vZGUgfSA9IGFycmF5RGF0YTtcbiAgICB0aGlzLm51bUVsZW1lbnRzID0gbnVtRWxlbWVudHM7XG4gICAgdGhpcy5tb2RlID0gbW9kZTtcbiAgICB0aGlzLmNvbXBvbmVudFR5cGUgPSBjb21wb25lbnRUeXBlIHx8IDUxMjM7XG4gIH1cbiAgc2V0Q29udGV4dChnbENvbnRleHRXcmFwcGVyKSB7XG4gICAgdGhpcy5jb250ZXh0ID0gZ2xDb250ZXh0V3JhcHBlcjtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBjcmVhdGVWQU8oKSB7XG4gICAgaWYgKHRoaXMudmFvKSByZXR1cm47XG4gICAgdGhpcy52YW8gPSB0aGlzLmNvbnRleHQuZ2wuY3JlYXRlVmVydGV4QXJyYXkoKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBzZXRNb2RlKG1vZGUpe1xuICAgIHRoaXMubW9kZSA9IG1vZGVcbiAgICByZXR1cm4gdGhpc1xuICB9XG4gIHNldEluZGljZXMoYXJyYXkpe1xuICAgIGNvbnN0IHtjb250ZXh0LCB2YW99ID0gdGhpc1xuICAgIGNvbnN0IHtnbH0gPSBjb250ZXh0XG4gICAgZ2wuYmluZFZlcnRleEFycmF5KHZhbylcbiAgICB0aGlzLm51bUVsZW1lbnRzID0gYXJyYXkubGVuZ3RoXG4gICAgY29uc3QgaW5kaWNlc0J1ZmZlciA9IGdsLmNyZWF0ZUJ1ZmZlcigpO1xuICAgIGdsLmJpbmRCdWZmZXIoZ2wuRUxFTUVOVF9BUlJBWV9CVUZGRVIsIGluZGljZXNCdWZmZXIpO1xuICAgIGdsLmJ1ZmZlckRhdGEoZ2wuRUxFTUVOVF9BUlJBWV9CVUZGRVIsIG5ldyBVaW50MTZBcnJheShhcnJheSksICBnbC5TVEFUSUNfRFJBVyk7XG4gICAgZ2wuYmluZFZlcnRleEFycmF5KG51bGwpXG4gICAgdGhpcy5pbmRpY2VzID0gaW5kaWNlc0J1ZmZlcjtcbiAgICByZXR1cm4gdGhpc1xuICB9XG4gIGNyZWF0ZUdlb21ldHJ5QnVmZmVycygpIHtcbiAgICBjb25zdCB7IGFycmF5RGF0YSB9ID0gdGhpcztcbiAgICBjb25zdCB7IGdsIH0gPSB0aGlzLmNvbnRleHQ7XG4gICAgY29uc3QgeyBhdHRyaWJ1dGVzLCBpbmRpY2VzLCBjb21wb25lbnRUeXBlLCBudW1FbGVtZW50cywgbW9kZSB9ID0gYXJyYXlEYXRhO1xuICAgXG5cbiAgICBpZiAoYXR0cmlidXRlcykge1xuICAgICAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaCgoYXR0cmlidXRlTmFtZSkgPT4ge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgc3RyaWRlLFxuICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgb2Zmc2V0LFxuICAgICAgICAgIGxvY2F0aW9uLFxuICAgICAgICAgIG51bUNvbXBvbmVudHMsXG4gICAgICAgICAgbnVtQXR0cmlidXRlcyxcbiAgICAgICAgICBkYXRhLFxuICAgICAgICAgIHNpemUsXG4gICAgICAgIH0gPSBhdHRyaWJ1dGVzW2F0dHJpYnV0ZU5hbWVdO1xuICAgICAgICBjb25zdCBidWZmZXJBdHRyaWJ1dGVEZXNjcmlwdG9yID0gbmV3IEJ1ZmZlckF0dHJpYnV0ZShnbCwge1xuICAgICAgICAgIHN0cmlkZSxcbiAgICAgICAgICB0eXBlLFxuICAgICAgICAgIG9mZnNldCxcbiAgICAgICAgICBsb2NhdGlvbixcbiAgICAgICAgICBudW1BdHRyaWJ1dGVzLFxuICAgICAgICAgIG51bUNvbXBvbmVudHMsXG4gICAgICAgICAgc2l6ZSxcbiAgICAgICAgfSk7XG4gICAgICAgIGJ1ZmZlckF0dHJpYnV0ZURlc2NyaXB0b3IuYnVmZmVyRGF0YShkYXRhKTtcbiAgICAgICAgdGhpcy5idWZmZXJzID0ge1xuICAgICAgICAgIC4uLnRoaXMuYnVmZmVycyxcbiAgICAgICAgICBbYXR0cmlidXRlTmFtZV06IGJ1ZmZlckF0dHJpYnV0ZURlc2NyaXB0b3IsXG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGluZGljZXMpIHtcbiAgICAgIGNvbnN0IGluZGljZXNCdWZmZXIgPSBnbC5jcmVhdGVCdWZmZXIoKTtcbiAgICAgIGdsLmJpbmRCdWZmZXIoZ2wuRUxFTUVOVF9BUlJBWV9CVUZGRVIsIGluZGljZXNCdWZmZXIpO1xuICAgICAgZ2wuYnVmZmVyRGF0YShnbC5FTEVNRU5UX0FSUkFZX0JVRkZFUiwgaW5kaWNlcywgZ2wuU1RBVElDX0RSQVcpO1xuICAgICAgdGhpcy5pbmRpY2VzID0gaW5kaWNlc0J1ZmZlcjtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgc2V0QXR0cmlidXRlcygpIHtcbiAgICBjb25zdCB7IGdsIH0gPSB0aGlzLmNvbnRleHQ7XG5cbiAgICBnbC5iaW5kVmVydGV4QXJyYXkodGhpcy52YW8pO1xuICAgIGZvciAoY29uc3QgYXR0cmliIGluIHRoaXMuYnVmZmVycykge1xuICAgICAgY29uc3QgYnVmZmVyQXR0cmlidXRlRGVzY3JpcHRvciA9IHRoaXMuYnVmZmVyc1thdHRyaWJdO1xuICAgICAgYnVmZmVyQXR0cmlidXRlRGVzY3JpcHRvci5zZXRBdHRyaWJ1dGUoKTtcbiAgICB9XG4gICAgZ2wuYmluZEJ1ZmZlcihnbC5FTEVNRU5UX0FSUkFZX0JVRkZFUiwgdGhpcy5pbmRpY2VzKTtcbiAgICBnbC5iaW5kVmVydGV4QXJyYXkobnVsbCk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBzZXREcmF3ZXIoZHJhd2VyKSB7XG4gICAgdGhpcy5kcmF3ZXIgPSBkcmF3ZXI7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgc2V0UHJvZ3JhbUluZm8ocHJvZ3JhbUluZm8pIHtcbiAgICB0aGlzLnByb2dyYW1JbmZvID0gcHJvZ3JhbUluZm87XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgY3JlYXRlQnVmZmVyQXR0cmliRGF0YShuYW1lLCB0eXBlLCBwYXJhbXMpIHtcbiAgICBjb25zdCB7IGdsIH0gPSB0aGlzLmNvbnRleHQ7XG4gICAgY29uc3QgYXR0cmliUHJvcHMgPSBnZXRBdHRyaWJ1dGVQcm9wc0J5VHlwZSh0eXBlKTtcbiAgICBjb25zdCBhdHRyaWJ1dGVQcm9wcyA9IHsgLi4uYXR0cmliUHJvcHMsIC4uLnBhcmFtcyB9O1xuICAgIGNvbnN0IGJ1ZmZlckF0dHJpYkRhdGEgPSBuZXcgQnVmZmVyQXR0cmlidXRlKGdsLCBhdHRyaWJ1dGVQcm9wcyk7XG4gICAgdGhpcy5idWZmZXJzID0geyAuLi50aGlzLmJ1ZmZlcnMsIFtuYW1lXTogYnVmZmVyQXR0cmliRGF0YSB9O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIHNldEJ1ZmZlckF0dHJpYkRhdGEobmFtZSwgYnVmZmVyQXR0cmliRGF0YSkge1xuICAgIHRoaXMuYnVmZmVycyA9IHsgLi4udGhpcy5idWZmZXJzLCBbbmFtZV06IGJ1ZmZlckF0dHJpYkRhdGEgfTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBzZXRPd25BdHRyaWJ1dGUobmFtZSwgZGl2aXNvcikge1xuICAgIGNvbnN0IHsgZ2wgfSA9IHRoaXMuY29udGV4dDtcbiAgICBjb25zdCBidWZmZXJBdHRyaWJEYXRhID0gdGhpcy5idWZmZXJzW25hbWVdO1xuICAgIGdsLmJpbmRWZXJ0ZXhBcnJheSh0aGlzLnZhbyk7XG4gICAgYnVmZmVyQXR0cmliRGF0YS5zZXRBdHRyaWJ1dGUoZGl2aXNvcik7XG4gICAgZ2wuYmluZFZlcnRleEFycmF5KG51bGwpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIHNldEF0dHJpYnV0ZShidWZmZXJBdHRyaWJEYXRhKSB7XG4gICAgY29uc3QgeyBnbCB9ID0gdGhpcy5jb250ZXh0O1xuICAgIGdsLmJpbmRWZXJ0ZXhBcnJheSh0aGlzLnZhbyk7XG4gICAgYnVmZmVyQXR0cmliRGF0YS5zZXRBdHRyaWJ1dGUoKTtcbiAgICBnbC5iaW5kVmVydGV4QXJyYXkobnVsbCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgYnVmZmVyRGF0YShidWZmZXJOYW1lLCBkYXRhLCBieXRlTGVuZ3RoLCB1c2FnZSkge1xuICAgIGNvbnN0IGJ1ZmZlckF0dHJpYkRhdGEgPSB0aGlzLmJ1ZmZlcnNbYnVmZmVyTmFtZV07XG4gICAgYnVmZmVyQXR0cmliRGF0YS5idWZmZXJEYXRhKGRhdGEsIGJ5dGVMZW5ndGgsIHVzYWdlKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBidWZmZXJTdWJEYXRhKGJ1ZmZlck5hbWUsIGRhdGEsIG9mZnNldCkge1xuICAgIGNvbnN0IGJ1ZmZlckRlc2MgPSB0aGlzLmJ1ZmZlcnNbYnVmZmVyTmFtZV07XG4gICAgYnVmZmVyRGVzYy5idWZmZXJTdWJEYXRhKGRhdGEsIG9mZnNldCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgZHJhdyh1bmlmb3JtcywgY2FtZXJhTWF0cml4KSB7XG4gICAgdGhpcy5kcmF3ZXIuZHJhdyh0aGlzLCB1bmlmb3JtcywgY2FtZXJhTWF0cml4KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBkcmF3SW5zdGFuY2VkKHVuaWZvcm1zLCBjYW1lcmFNYXRyaXgsIG51bUluc3RhbmNlcykge1xuICAgIHRoaXMuZHJhd2VyLmRyYXdJbnN0YW5jZWQodGhpcywgdW5pZm9ybXMsIGNhbWVyYU1hdHJpeCwgbnVtSW5zdGFuY2VzKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcmltaXRpdmVSZW5kZXJlcjtcbiIsImNvbnN0IHByb3BzID0ge1xuICBtYXQ0OiB7XG4gICAgc3RyaWRlOiA2NCxcbiAgICBieXRlTGVuZ3RoOiA2NCxcbiAgICB0eXBlOiAweDE0MDYsXG4gICAgbnVtQXR0cmlidXRlczogNCxcbiAgICBudW1Db21wb25lbnRzOiA0LFxuICB9LFxuICB2ZWMzOiB7XG4gICAgbnVtQ29tcG9uZW50czogMyxcbiAgICB0eXBlOiAweDE0MDYsXG4gICAgbnVtQXR0cmlidXRlczogMSxcbiAgfSxcbn07XG5jb25zdCBnZXRBdHRyaWJ1dGVQcm9wc0J5VHlwZSA9ICh0eXBlKSA9PiBwcm9wc1t0eXBlXTtcbmV4cG9ydCBkZWZhdWx0IGdldEF0dHJpYnV0ZVByb3BzQnlUeXBlO1xuIiwiY29uc3QgVFlQRURfQVJSQVlTID0ge1xuICAgICc1MTIwJzogSW50OEFycmF5LCAgICBcbiAgICAnNTEyMSc6IFVpbnQ4QXJyYXksICAgXG4gICAgJzUxMjInOiBJbnQxNkFycmF5LCAgIFxuICAgICc1MTIzJzogVWludDE2QXJyYXksICBcbiAgICAnNTEyNCc6IEludDMyQXJyYXksICAgXG4gICAgJzUxMjUnOiBVaW50MzJBcnJheSwgIFxuICAgICc1MTI2JzogRmxvYXQzMkFycmF5LCBcbn1cbmNvbnN0IE5VTV9DT01QT05FTlRTID0ge1xuICAgICdTQ0FMQVInIDogMSxcbiAgICAnVkVDMicgOiAyLFxuICAgICdWRUMzJyA6IDMsXG4gICAgJ1ZFQzQnIDogNCxcbiAgICAnTUFUMic6IDQsXG4gICdNQVQzJzogOSxcbiAgJ01BVDQnOiAxNixcbn1cbmNvbnN0IExPQ0FUSU9OUyA9IHtcbiAgICAnUE9TSVRJT04nIDogMCxcbiAgICAnTk9STUFMJyA6IDEsXG4gICAgJ1dFSUdIVFNfMCcgOiAyLFxuICAgICdKT0lOVFNfMCcgOiAzLFxuICAgICdURVhDT09SRF8wJyA6IDQsXG59XG5jb25zdCBFTEVNRU5UX1NJWkUgPSB7XG4gICAgMHgxNDA2IDogNFxufVxuZXhwb3J0IHtcbiAgICBMT0NBVElPTlMsIE5VTV9DT01QT05FTlRTLCBUWVBFRF9BUlJBWVMsIEVMRU1FTlRfU0laRVxufSIsImltcG9ydCB7IFRleHR1cmVJbmZvIH0gZnJvbSBcIi4vdGV4dHVyZUluZm9cIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdMY29udGV4dFdyYXBwZXIge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhc19pZCkge1xuICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7Y2FudmFzX2lkfWApO1xuICAgICAgY29uc3QgZ2wgPSBjYW52YXMuZ2V0Q29udGV4dChcIndlYmdsMlwiKTtcbiAgXG4gICAgICBpZiAoIWdsKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIHdlYmdsIVwiKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZ2wgPSBnbDtcbiAgICAgIHRoaXMudGV4dHVyZXMgPSB7fTtcbiAgICAgIHRoaXMucmVuZGVyQ2FjaGUgPSB7XG4gICAgICAgIGxhc3RVc2VkUHJvZ3JhbUluZm86IG51bGwsXG4gICAgICB9O1xuICAgICAgdGhpcy5wcm9ncmFtcyA9IHt9O1xuICAgIH1cbiAgICBnZXRMYXN0VXNlZFByb2dyYW1JbmZvKCkge1xuICAgICAgcmV0dXJuIHRoaXMucmVuZGVyQ2FjaGUubGFzdFVzZWRQcm9ncmFtSW5mbztcbiAgICB9XG4gICAgc2V0TGFzdFVzZWRQcm9ncmFtKHByb2dyYW1JbmZvKSB7XG4gICAgICB0aGlzLnJlbmRlckNhY2hlLmxhc3RVc2VkUHJvZ3JhbUluZm8gPSBwcm9ncmFtSW5mbztcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICB1c2VQcm9ncmFtSW5mbyhwcm9ncmFtSW5mbykge1xuICAgICAgaWYgKHByb2dyYW1JbmZvICE9IHRoaXMuZ2V0TGFzdFVzZWRQcm9ncmFtSW5mbygpKSB7XG4gICAgICAgIHRoaXMuZ2wudXNlUHJvZ3JhbShwcm9ncmFtSW5mby5wcm9ncmFtKTtcbiAgICAgICAgdGhpcy5zZXRMYXN0VXNlZFByb2dyYW0ocHJvZ3JhbUluZm8pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHJlc2l6ZUNhbnZhc1RvRGlzcGxheVNpemUobXVsdGlwbGllciA9IDEpIHtcbiAgICAgIGNvbnN0IGNhbnZhcyA9IHRoaXMuZ2wuY2FudmFzO1xuICAgICAgY29uc3Qgd2lkdGggPSAoY2FudmFzLmNsaWVudFdpZHRoICogbXVsdGlwbGllcikgfCAwO1xuICAgICAgY29uc3QgaGVpZ2h0ID0gKGNhbnZhcy5jbGllbnRIZWlnaHQgKiBtdWx0aXBsaWVyKSB8IDA7XG4gIFxuICAgICAgY2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgICBjYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgcmVzaXplQ2FudmFzKHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgIGNvbnN0IGNhbnZhcyA9IHRoaXMuZ2wuY2FudmFzO1xuICAgICAgY2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgICBjYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHNldFZpZXdwb3J0KCl7XG4gICAgICB0aGlzLmdsLnZpZXdwb3J0KDAsIDAsIHRoaXMuZ2wuY2FudmFzLndpZHRoLCAgdGhpcy5nbC5jYW52YXMuaGVpZ2h0KTtcbiAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuICAgIGdldENvbnRleHQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5nbDtcbiAgICB9XG4gICAgY3JlYXRlVGV4dHVyZUluZm8odGV4dHVyZU5hbWUpIHtcbiAgICAgIGNvbnN0IHRleHR1cmUgPSBuZXcgVGV4dHVyZUluZm8odGhpcy5nbCk7XG4gICAgICB0aGlzLnRleHR1cmVzID0geyAuLi50aGlzLnRleHR1cmVzLCBbdGV4dHVyZU5hbWVdOiB0ZXh0dXJlIH07XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZ2V0VGV4dHVyZSh0ZXh0dXJlTmFtZSkge1xuICAgICAgcmV0dXJuIHRoaXMudGV4dHVyZXNbdGV4dHVyZU5hbWVdO1xuICAgIH1cbiAgICBzZXRUZXh0dXJlVW5pdCh0ZXh0dXJlTmFtZSwgdW5pdE51bSkge1xuICAgICAgY29uc3QgdGV4dHVyZSA9IHRoaXMuZ2V0VGV4dHVyZSh0ZXh0dXJlTmFtZSkudGV4dHVyZTtcbiAgICAgIHNldFRleHR1cmVVbml0cyh0aGlzLmdsLCB0ZXh0dXJlLCB1bml0TnVtKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfSIsImltcG9ydCBQcmltaXRpdmVSZW5kZXJlciBmcm9tIFwiLi9QcmltaXRpdmVSZW5kZXJlclwiO1xuaW1wb3J0IHsgTWVzaFJlbmRlcmVyIH0gZnJvbSBcIi4vTWVzaFJlbmRlcmVyXCI7XG5pbXBvcnQgeyBBdHRyaWJ1dGVTZXR0ZXIsIEJ1ZmZlckNvbnRyb2xsZXIgfSBmcm9tIFwiLi9CdWZmZXJBdHRyaWJ1dGVcIjtcbmltcG9ydCB7IE5VTV9DT01QT05FTlRTLCBUWVBFRF9BUlJBWVMsIExPQ0FUSU9OUyB9IGZyb20gXCIuL2VudW1zXCI7XG5cbmNvbnN0IEFycmF5RGF0YUZyb21HbHRmID0gKGdsdGYsIGJ1ZmZlcnMpID0+IHtcbiAgY29uc3QgeyBidWZmZXJWaWV3cywgYWNjZXNzb3JzLCBtZXNoZXMsIG5vZGVzIH0gPSBnbHRmO1xuICBjb25zdCBhdHRyaWJEYXRhRnJvbUFjY2Vzc29yID0gKGFjY2Vzc29yKSA9PiB7XG4gICAgY29uc3QgYnVmZmVyVmlldyA9IGJ1ZmZlclZpZXdzW2FjY2Vzc29yLmJ1ZmZlclZpZXddO1xuICAgIGNvbnN0IHsgY291bnQsIGNvbXBvbmVudFR5cGUsIHR5cGUgfSA9IGFjY2Vzc29yO1xuICAgIGNvbnN0IGJ5dGVPZmZzZXQgPSBhY2Nlc3Nvci5ieXRlT2Zmc2V0IHx8IDA7XG4gICAgY29uc3QgeyBieXRlTGVuZ3RoLCB0YXJnZXQgfSA9IGJ1ZmZlclZpZXc7XG4gICAgY29uc3Qgc3RyaWRlID0gYnVmZmVyVmlldy5ieXRlU3RyaWRlIHx8IDA7XG4gICAgY29uc3QgYnVmZmVyVmlld0J5dGVPZmZzZXQgPSBidWZmZXJWaWV3LmJ5dGVPZmZzZXQgfHwgMDtcbiAgICBjb25zdCBidWZmZXIgPSBidWZmZXJzW2J1ZmZlclZpZXcuYnVmZmVyXTtcblxuICAgIHJldHVybiB7XG4gICAgICBkYXRhOiBuZXcgVWludDhBcnJheShidWZmZXIsIGJ1ZmZlclZpZXdCeXRlT2Zmc2V0LCBieXRlTGVuZ3RoKSxcbiAgICAgIG51bUNvbXBvbmVudHM6IE5VTV9DT01QT05FTlRTW3R5cGVdLFxuICAgICAgc3RyaWRlLFxuICAgICAgYnl0ZUxlbmd0aCxcbiAgICAgIGxvY2F0aW9uOiBudWxsLFxuICAgICAgY291bnQsXG4gICAgICB0eXBlOiBjb21wb25lbnRUeXBlLFxuICAgICAgb2Zmc2V0OiBieXRlT2Zmc2V0IHx8IDAsXG4gICAgICBjb21wb25lbnRUeXBlOiBhY2Nlc3Nvci5jb21wb25lbnRUeXBlLFxuICAgIH07XG4gIH07XG4gIGNvbnN0IF9tZXNoZXMgPSBtZXNoZXMubWFwKChtZXNoKSA9PiAoe1xuICAgIHByaW1pdGl2ZXM6IG1lc2gucHJpbWl0aXZlcy5tYXAoKF9wcmltaXRpdmUpID0+IHtcbiAgICAgIGNvbnN0IHByaW1pdGl2ZSA9IHtcbiAgICAgICAgYXR0cmlidXRlczoge30sXG4gICAgICAgIG1vZGU6IF9wcmltaXRpdmUubW9kZSxcbiAgICAgIH07XG4gICAgICBpZiAoX3ByaW1pdGl2ZS5oYXNPd25Qcm9wZXJ0eShcImluZGljZXNcIikpIHtcbiAgICAgICAgY29uc3QgaW5kaWNlc0luZm8gPSBhdHRyaWJEYXRhRnJvbUFjY2Vzc29yKFxuICAgICAgICAgIGFjY2Vzc29yc1tfcHJpbWl0aXZlLmluZGljZXNdXG4gICAgICAgICk7XG4gICAgICAgIHByaW1pdGl2ZS5pbmRpY2VzID0gaW5kaWNlc0luZm8uZGF0YTtcbiAgICAgICAgcHJpbWl0aXZlLm51bUVsZW1lbnRzID0gaW5kaWNlc0luZm8uY291bnQ7XG4gICAgICAgIHByaW1pdGl2ZS5jb21wb25lbnRUeXBlID0gaW5kaWNlc0luZm8uY29tcG9uZW50VHlwZTtcbiAgICAgIH1cbiAgICAgIE9iamVjdC5rZXlzKF9wcmltaXRpdmUuYXR0cmlidXRlcykuZm9yRWFjaCgoYXR0cmliTmFtZSkgPT4ge1xuICAgICAgICBjb25zdCBhdHRyaWJ1dGUgPSBfcHJpbWl0aXZlLmF0dHJpYnV0ZXNbYXR0cmliTmFtZV07XG4gICAgICAgIHByaW1pdGl2ZS5hdHRyaWJ1dGVzW2F0dHJpYk5hbWVdID0gYXR0cmliRGF0YUZyb21BY2Nlc3NvcihcbiAgICAgICAgICBhY2Nlc3NvcnNbYXR0cmlidXRlXVxuICAgICAgICApO1xuICAgICAgICAvL2lmKGF0dHJpYk5hbWUgPT09ICdKT0lOVFNfMCcpIF9wcmltaXRpdmUuYXR0cmlidXRlc1thdHRyaWJOYW1lXS5kYXRhID0gbmV3IFVpbnQzMkFycmF5KF9wcmltaXRpdmUuYXR0cmlidXRlc1thdHRyaWJOYW1lXS5kYXRhKVxuICAgICAgICBwcmltaXRpdmUuYXR0cmlidXRlc1thdHRyaWJOYW1lXS5sb2NhdGlvbiA9IExPQ0FUSU9OU1thdHRyaWJOYW1lXTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHByaW1pdGl2ZTtcbiAgICB9KSxcbiAgICBuYW1lOiBtZXNoLm5hbWUsXG4gIH0pKTtcblxuICByZXR1cm4gX21lc2hlcy5tYXAoKG1lc2gpID0+IHtcbiAgICBjb25zdCBwcmltaXRpdmVzID0gbWVzaC5wcmltaXRpdmVzLm1hcChcbiAgICAgIChwcmltaXRpdmUpID0+IG5ldyBQcmltaXRpdmVSZW5kZXJlcihwcmltaXRpdmUpXG4gICAgKTtcbiAgICBjb25zdCBuYW1lID0gbWVzaC5uYW1lO1xuXG4gICAgcmV0dXJuIG5ldyBNZXNoUmVuZGVyZXIoeyBwcmltaXRpdmVzLCBuYW1lIH0pO1xuICB9KTtcbn07XG5cbmNvbnN0IFByaW1pdGl2ZVJlbmRlckluZm9Gcm9tQXJyYXlEYXRhID0gKG1lc2hlcykgPT5cbiAgbWVzaGVzLm1hcCgobWVzaCkgPT4ge1xuICAgIGNvbnN0IHByaW1pdGl2ZXMgPSBtZXNoLnByaW1pdGl2ZXMubWFwKFxuICAgICAgKHByaW1pdGl2ZSkgPT4gbmV3IFByaW1pdGl2ZVJlbmRlcmVyKHByaW1pdGl2ZSlcbiAgICApO1xuICAgIGNvbnN0IG5hbWUgPSBtZXNoLm5hbWU7XG4gICAgcmV0dXJuIG5ldyBNZXNoUmVuZGVyZXIoeyBuYW1lLCBwcmltaXRpdmVzIH0pO1xuICB9KTtcblxuY29uc3QgRW50aXR5RGF0YUZyb21HbHRmID0gKGdsdGYsIGJ1ZmZlcnMpID0+XG4gIFByaW1pdGl2ZVJlbmRlckluZm9Gcm9tQXJyYXlEYXRhKEFycmF5RGF0YUZyb21HbHRmKGdsdGYsIGJ1ZmZlcnMpKTtcblxuY2xhc3MgR0xURiB7XG4gIGNvbnN0cnVjdG9yKGdsdGYsIGJpbmFyeUJ1ZmZlcnMpIHtcbiAgICBjb25zdCB7IG5vZGVzIH0gPSBnbHRmO1xuICAgIHRoaXMubm9kZXMgPSBub2RlcztcbiAgICB0aGlzLm1lc2hlcyA9IEFycmF5RGF0YUZyb21HbHRmKGdsdGYsIGJpbmFyeUJ1ZmZlcnMpO1xuICB9XG59XG5leHBvcnQge1xuICBBcnJheURhdGFGcm9tR2x0ZixcbiAgUHJpbWl0aXZlUmVuZGVySW5mb0Zyb21BcnJheURhdGEsXG4gIEVudGl0eURhdGFGcm9tR2x0ZixcbiAgR0xURixcbn07XG4iLCJpbXBvcnQgeyBleHBhbmRlZFR5cGVkQXJyYXkgfSBmcm9tIFwiLi9wcm9ncmFtSW5mby5qc1wiO1xuXG5pbXBvcnQge3ZlYzN9IGZyb20gJ21hdGgnXG5cbmNvbnN0IHsgY3Jvc3MsIGRpZmYsIG5vcm1hbGl6ZSB9ID0gdmVjM1xuXG5jb25zdCBsaW5lZEJveEluZGljZXMgPSBuZXcgVWludDE2QXJyYXkoW1xuICAwLFxuICAxLFxuICAxLFxuICAyLFxuICAyLFxuICAzLFxuICAzLFxuICAwLCAvLyBmcm9udFxuICAwLFxuICA1LFxuICA1LFxuICA0LFxuICA0LFxuICAxLFxuICAxLFxuICAwLCAvL2JvdHRvbVxuICAwLFxuICA0LFxuICA0LFxuICA3LFxuICA3LFxuICAzLFxuICAzLFxuICAwLCAvL2xlZnRcbiAgMSxcbiAgMixcbiAgMixcbiAgNixcbiAgNixcbiAgNSxcbiAgNSxcbiAgMSwgLy9yaWdodFxuICA0LFxuICA1LFxuICA1LFxuICA2LFxuICA2LFxuICA3LFxuICA3LFxuICA0LCAvLyBiYWNrXG4gIDIsXG4gIDcsXG4gIDcsXG4gIDMsXG4gIDMsXG4gIDYsXG4gIDYsXG4gIDIsIC8vIHRvcFxuXSk7XG5cbmNvbnN0IENVQkVfRkFDRV9JTkRJQ0VTID0gW1xuICBbMywgNywgNSwgMV0sIC8vIHJpZ2h0XG4gIFs2LCAyLCAwLCA0XSwgLy8gbGVmdFxuICBbNiwgNywgMywgMl0sIC8vID8/XG4gIFswLCAxLCA1LCA0XSwgLy8gPz9cbiAgWzcsIDYsIDQsIDVdLCAvLyBmcm9udFxuICBbMiwgMywgMSwgMF0sIC8vIGJhY2tcbl07XG5cbmZ1bmN0aW9uIGNyZWF0ZUJveChfYSA9IDEsIF9iID0gMSwgX2MgPSAxKSB7XG4gIGNvbnN0IGEgPSBfYSAvIDIsXG4gICAgYiA9IF9iIC8gMixcbiAgICBjID0gX2MgLyAyO1xuICBjb25zdCBjb3JuZXJWZXJ0aWNlcyA9IFtcbiAgICBbLWEsIC1iLCAtY10sXG4gICAgWythLCAtYiwgLWNdLFxuICAgIFstYSwgK2IsIC1jXSxcbiAgICBbK2EsICtiLCAtY10sXG4gICAgWy1hLCAtYiwgK2NdLFxuICAgIFsrYSwgLWIsICtjXSxcbiAgICBbLWEsICtiLCArY10sXG4gICAgWythLCArYiwgK2NdLFxuICBdO1xuXG4gIGNvbnN0IGZhY2VOb3JtYWxzID0gW1xuICAgIFsrMSwgKzAsICswXSxcbiAgICBbLTEsICswLCArMF0sXG4gICAgWyswLCArMSwgKzBdLFxuICAgIFsrMCwgLTEsICswXSxcbiAgICBbKzAsICswLCArMV0sXG4gICAgWyswLCArMCwgLTFdLFxuICBdO1xuXG4gIGNvbnN0IHV2Q29vcmRzID0gW1xuICAgIFsxLCAwXSxcbiAgICBbMCwgMF0sXG4gICAgWzAsIDFdLFxuICAgIFsxLCAxXSxcbiAgXTtcbiAgY29uc3QgbnVtVmVydGljZXMgPSA2ICogNDtcbiAgY29uc3QgcG9zaXRpb25zID0gZXhwYW5kZWRUeXBlZEFycmF5KG5ldyBGbG9hdDMyQXJyYXkobnVtVmVydGljZXMgKiAzKSk7XG4gIGNvbnN0IG5vcm1hbHMgPSBleHBhbmRlZFR5cGVkQXJyYXkobmV3IEZsb2F0MzJBcnJheShudW1WZXJ0aWNlcyAqIDMpKTtcbiAgLy9jb25zdCB0ZXhDb29yZHMgPSB3ZWJnbFV0aWxzLmNyZWF0ZUF1Z21lbnRlZFR5cGVkQXJyYXkoMiAsIG51bVZlcnRpY2VzKTtcbiAgY29uc3QgaW5kaWNlcyA9IGV4cGFuZGVkVHlwZWRBcnJheShuZXcgVWludDE2QXJyYXkoNiAqIDIgKiAzKSk7XG5cbiAgZm9yIChsZXQgZiA9IDA7IGYgPCA2OyArK2YpIHtcbiAgICBjb25zdCBmYWNlSW5kaWNlcyA9IENVQkVfRkFDRV9JTkRJQ0VTW2ZdO1xuICAgIGZvciAobGV0IHYgPSAwOyB2IDwgNDsgKyt2KSB7XG4gICAgICBjb25zdCBwb3NpdGlvbiA9IGNvcm5lclZlcnRpY2VzW2ZhY2VJbmRpY2VzW3ZdXTtcbiAgICAgIGNvbnN0IG5vcm1hbCA9IGZhY2VOb3JtYWxzW2ZdO1xuICAgICAgcG9zaXRpb25zLnB1c2gocG9zaXRpb24pO1xuICAgICAgbm9ybWFscy5wdXNoKG5vcm1hbCk7XG4gICAgfVxuXG4gICAgY29uc3Qgb2Zmc2V0ID0gNCAqIGY7XG4gICAgaW5kaWNlcy5wdXNoKG9mZnNldCArIDAsIG9mZnNldCArIDEsIG9mZnNldCArIDIpO1xuICAgIGluZGljZXMucHVzaChvZmZzZXQgKyAwLCBvZmZzZXQgKyAyLCBvZmZzZXQgKyAzKTtcbiAgfVxuICBjb25zdCBsZW4gPSBwb3NpdGlvbnMuYnl0ZUxlbmd0aDtcbiAgY29uc3QgdGV4Y29vcmQgPSBuZXcgRmxvYXQzMkFycmF5KFtcbiAgICAvLyBGcm9udFxuICAgIDAuMCwgMC4wLCAxLjAsIDAuMCwgMS4wLCAxLjAsIDAuMCwgMS4wLFxuICAgIC8vIEJhY2tcbiAgICAwLjAsIDAuMCwgMS4wLCAwLjAsIDEuMCwgMS4wLCAwLjAsIDEuMCxcbiAgICAvLyBUb3BcbiAgICAwLjAsIDAuMCwgMS4wLCAwLjAsIDEuMCwgMS4wLCAwLjAsIDEuMCxcbiAgICAvLyBCb3R0b21cbiAgICAwLjAsIDAuMCwgMS4wLCAwLjAsIDEuMCwgMS4wLCAwLjAsIDEuMCxcbiAgICAvLyBSaWdodFxuICAgIDAuMCwgMC4wLCAxLjAsIDAuMCwgMS4wLCAxLjAsIDAuMCwgMS4wLFxuICAgIC8vIExlZnRcbiAgICAwLjAsIDAuMCwgMS4wLCAwLjAsIDEuMCwgMS4wLCAwLjAsIDEuMCxcbiAgXSk7XG5cbiAgY29uc3QgQXJyYXlEYXRhID0ge1xuICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgIE5PUk1BTDoge1xuICAgICAgICBkYXRhOiBub3JtYWxzLFxuICAgICAgICBjb3VudDogNiAqIDQgKiAzLFxuICAgICAgICBsb2NhdGlvbjogMSxcbiAgICAgICAgYnl0ZUxlbmd0aDogbm9ybWFscy5ieXRlTGVuZ3RoLFxuICAgICAgICBzdHJpZGU6IDAsXG4gICAgICAgIG9mZnNldDogMCxcbiAgICAgICAgbnVtQ29tcG9uZW50czogMyxcbiAgICAgICAgdHlwZTogNTEyNixcbiAgICAgIH0sXG4gICAgICBQT1NJVElPTjoge1xuICAgICAgICBkYXRhOiBwb3NpdGlvbnMsXG4gICAgICAgIGNvdW50OiA2ICogNCAqIDMsXG4gICAgICAgIGxvY2F0aW9uOiAwLFxuICAgICAgICBieXRlTGVuZ3RoOiBwb3NpdGlvbnMuYnl0ZUxlbmd0aCxcbiAgICAgICAgc3RyaWRlOiAwLFxuICAgICAgICBvZmZzZXQ6IDAsXG4gICAgICAgIG51bUNvbXBvbmVudHM6IDMsXG4gICAgICAgIHR5cGU6IDUxMjYsXG4gICAgICB9LFxuICAgICAgVEVYQ09PUkRfMDoge1xuICAgICAgICBkYXRhOiB0ZXhjb29yZCxcbiAgICAgICAgY291bnQ6IDQ4LFxuICAgICAgICB0eXBlOiA1MTI2LFxuICAgICAgICBvZmZzZXQ6IDAsXG4gICAgICAgIHN0cmlkZTogMCxcbiAgICAgICAgYnl0ZUxlbmd0aDogdGV4Y29vcmQuYnl0ZUxlbmd0aCxcbiAgICAgICAgbG9jYXRpb246IDQsXG4gICAgICAgIG51bUNvbXBvbmVudHM6IDIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgaW5kaWNlczogaW5kaWNlcyxcbiAgICBudW1FbGVtZW50czogaW5kaWNlcy5sZW5ndGgsXG4gICAgY29tcG9uZW50VHlwZTogNTEyMyxcbiAgICBtb2RlOiA0LFxuICB9O1xuICByZXR1cm4gQXJyYXlEYXRhO1xuICAvKnJldHVybiB7XG4gICAgICAgICAgZ2x0ZiA6IHtcbiAgICAgICAgICAgIGFjY2Vzc29ycyA6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBidWZmZXJWaWV3IDogMCxcbiAgICAgICAgICAgICAgICBieXRlT2Zmc2V0IDogMCxcbiAgICAgICAgICAgICAgICBjb3VudCA6NzIsXG4gICAgICAgICAgICAgICAgY29tcG9uZW50VHlwZSA6IDUxMjYsXG4gICAgICAgICAgICAgICAgdHlwZSA6ICdWRUMzJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYnVmZmVyVmlldyA6IDEsXG4gICAgICAgICAgICAgIGJ5dGVPZmZzZXQgOiAwLFxuICAgICAgICAgICAgICBjb3VudCA6IDcyLFxuICAgICAgICAgICAgICBjb21wb25lbnRUeXBlIDogNTEyNixcbiAgICAgICAgICAgICAgdHlwZSA6ICdWRUMzJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYnVmZmVyVmlldyA6IDIsXG4gICAgICAgICAgICAgIGJ5dGVPZmZzZXQgOiAwLFxuICAgICAgICAgICAgICBjb3VudCA6IDM2LFxuICAgICAgICAgICAgICBjb21wb25lbnRUeXBlIDogNTEyMyxcbiAgICAgICAgICAgICAgdHlwZSA6ICdTQ0FMQVInXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBidWZmZXJWaWV3IDogMyxcbiAgICAgICAgICAgICAgYnl0ZU9mZnNldCA6IDAsXG4gICAgICAgICAgICAgIGNvdW50IDogNDgsXG4gICAgICAgICAgICAgIGNvbXBvbmVudFR5cGUgOiA1MTI2LFxuICAgICAgICAgICAgICB0eXBlIDogJ1ZFQzInXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgIGJ1ZmZlclZpZXdzIDogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYnVmZmVyIDogMCxcbiAgICAgICAgICAgICAgICBieXRlTGVuZ3RoIDogcG9zaXRpb25zLmJ5dGVMZW5ndGgsXG4gICAgICAgICAgICAgICAgYnl0ZU9mZnNldCA6IDBcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGJ1ZmZlciA6IDEsXG4gICAgICAgICAgICAgICAgYnl0ZUxlbmd0aCA6IG5vcm1hbHMuYnl0ZUxlbmd0aCxcbiAgICAgICAgICAgICAgICBieXRlT2Zmc2V0IDogMFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYnVmZmVyIDogMixcbiAgICAgICAgICAgICAgICBieXRlTGVuZ3RoIDogaW5kaWNlcy5ieXRlTGVuZ3RoLFxuICAgICAgICAgICAgICAgIGJ5dGVPZmZzZXQgOiAwXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBidWZmZXIgOiAzLFxuICAgICAgICAgICAgICAgIGJ5dGVMZW5ndGggOiB0ZXhjb29yZC5ieXRlTGVuZ3RoLFxuICAgICAgICAgICAgICAgIGJ5dGVPZmZzZXQgOiAwXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgbWVzaGVzIDogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lIDogJ0N1YmUnLFxuICAgICAgICAgICAgICBwcmltaXRpdmVzIDogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXMgOiB7XG4gICAgICAgICAgICAgICAgICAgIE5PUk1BTCA6IDEsXG4gICAgICAgICAgICAgICAgICAgIFBPU0lUSU9OIDogMCxcbiAgICAgICAgICAgICAgICAgICAgVEVYQ09PUkRfMCA6IDNcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBpbmRpY2VzIDogMixcbiAgICAgICAgICAgICAgICAgIG1vZGUgOiA0XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXSxcbiAgICAgICAgICBub2RlcyA6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZSA6IFwiQ3ViZVwiLFxuICAgICAgICAgICAgICBtZXNoIDogMCxcbiAgICAgICAgICAgICAgY2hpbGRyZW4gOiBbMV1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWUgOiAnQ3ViZTInLFxuICAgICAgICAgICAgICBtZXNoIDogMCxcbiAgICAgICAgICAgICAgdHJhbnNsYXRpb24gOiBbMSwxLDFdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBiaW5hcnlCdWZmZXJzIDogW1xuICAgICAgICAgIHBvc2l0aW9ucy5idWZmZXIsIG5vcm1hbHMuYnVmZmVyLCBpbmRpY2VzLmJ1ZmZlciwgdGV4Y29vcmQuYnVmZmVyXG4gICAgICAgIF1cbiAgICAgIH07Ki9cbn1cblxuY29uc3QgY3JlYXRlQ29uZSA9IChyYWRpdXMgPSAyLCBoZWlnaHQgPSAyLCBudW1Db3JuZXJzID0gNCkgPT4ge1xuICBjb25zdCB2ZXJ0aWNlcyA9IFswLCAtaGVpZ2h0IC8gMiwgMF07XG4gIGNvbnN0IG5vcm1hbHMgPSBbXTtcbiAgY29uc3QgaW5kaWNlcyA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtQ29ybmVycyArIDE7IGkrKykge1xuICAgIGNvbnN0IGFuZ2xlID0gKDIgKiBpICogTWF0aC5QSSkgLyBudW1Db3JuZXJzO1xuICAgIGNvbnN0IHggPSBNYXRoLmNvcyhhbmdsZSkgKiByYWRpdXM7XG4gICAgY29uc3QgeiA9IE1hdGguc2luKGFuZ2xlKSAqIHJhZGl1cztcbiAgICBjb25zdCB5ID0gLWhlaWdodCAvIDI7XG4gICAgdmVydGljZXMucHVzaCh4LCAtaGVpZ2h0IC8gMiwgeik7XG4gICAgbm9ybWFscy5wdXNoKDAsIC0xLCAwKTtcbiAgfVxuICBmb3IgKGxldCBpID0gMDsgaSA8IG51bUNvcm5lcnM7IGkrKykge1xuICAgIGluZGljZXMucHVzaCgwLCBpICsgMSwgaSArIDIpO1xuICB9XG4gIC8vdmVydGljZXMucHVzaCh2ZXJ0aWNlc1sxXSwgLWhlaWdodC8yLCB2ZXJ0aWNlc1szXSlcbiAgY29uc3QgbiA9IHZlcnRpY2VzLmxlbmd0aCAvIDM7XG4gIGNvbnN0IHN0cmlkZSA9IDM7XG4gIGNvbnN0IHN0YXJ0ID0gbjtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IG51bUNvcm5lcnMgKyAyOyBpKyspIHtcbiAgICBjb25zdCBhbmdsZSA9ICgyICogaSAqIE1hdGguUEkpIC8gbnVtQ29ybmVycztcbiAgICBjb25zdCB4ID0gTWF0aC5jb3MoYW5nbGUpICogcmFkaXVzO1xuICAgIGNvbnN0IHogPSBNYXRoLnNpbihhbmdsZSkgKiByYWRpdXM7XG4gICAgY29uc3QgeSA9IC1oZWlnaHQgLyAyO1xuICAgIGNvbnN0IGEgPSBbdmVydGljZXNbaSAqIDNdLCB2ZXJ0aWNlc1tpICogMyArIDFdLCB2ZXJ0aWNlc1tpICogMyArIDJdXTtcbiAgICBjb25zdCBiID0gW3ZlcnRpY2VzW2kgKiAzICsgM10sIHZlcnRpY2VzW2kgKiAzICsgNF0sIHZlcnRpY2VzW2kgKiAzICsgNV1dO1xuICAgIGNvbnN0IGMgPSBbMCwgaGVpZ2h0IC8gMiwgMF07XG4gICAgaW5kaWNlcy5wdXNoKFxuICAgICAgc3RhcnQgKyBpICogc3RyaWRlICsgMixcbiAgICAgIHN0YXJ0ICsgaSAqIHN0cmlkZSArIDEsXG4gICAgICBzdGFydCArIGkgKiBzdHJpZGUgKyAzXG4gICAgKTtcbiAgICB2ZXJ0aWNlcy5wdXNoKC4uLmMsIC4uLmEsIC4uLmIpO1xuICAgIGNvbnN0IG5vcm1hbCA9IG5vcm1hbGl6ZShjcm9zcyhkaWZmKGIsIGMpLCBkaWZmKGEsIGMpKSk7XG4gICAgbm9ybWFscy5wdXNoKC4uLm5vcm1hbCwgLi4ubm9ybWFsLCAuLi5ub3JtYWwpO1xuICB9XG5cbiAgY29uc3QgX25vcm1hbCA9IG5ldyBGbG9hdDMyQXJyYXkobm9ybWFscyk7XG4gIGNvbnN0IF9wb3NpdGlvbiA9IG5ldyBGbG9hdDMyQXJyYXkodmVydGljZXMpO1xuICBjb25zdCBfaW5kaWNlcyA9IG5ldyBVaW50MTZBcnJheShpbmRpY2VzKTtcbiAgY29uc3QgQXJyYXlEYXRhID0ge1xuICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgIFBPU0lUSU9OOiB7XG4gICAgICAgIGxvY2F0aW9uOiAwLFxuICAgICAgICBjb3VudDogdmVydGljZXMubGVuZ3RoLFxuICAgICAgICBvZmZzZXQ6IDAsXG4gICAgICAgIHN0cmlkZTogMCxcbiAgICAgICAgbnVtQ29tcG9uZW50czogMyxcbiAgICAgICAgdHlwZTogNTEyNixcbiAgICAgICAgZGF0YTogX3Bvc2l0aW9uLFxuICAgICAgICBieXRlTGVuZ3RoOiBfcG9zaXRpb24uYnl0ZUxlbmd0aCxcbiAgICAgIH0sXG4gICAgICBOT1JNQUw6IHtcbiAgICAgICAgbG9jYXRpb246IDEsXG4gICAgICAgIGNvdW50OiBub3JtYWxzLmxlbmd0aCxcbiAgICAgICAgbnVtQ29tcG9uZW50czogMyxcbiAgICAgICAgb2Zmc2V0OiAwLFxuICAgICAgICBzdHJpZGU6IDAsXG4gICAgICAgIHR5cGU6IDUxMjYsXG4gICAgICAgIGRhdGE6IF9ub3JtYWwsXG4gICAgICAgIGJ5dGVMZW5ndGg6IF9ub3JtYWwuYnl0ZUxlbmd0aCxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBjb21wb25lbnRUeXBlOiA1MTIzLFxuICAgIGluZGljZXM6IF9pbmRpY2VzLFxuICAgIG51bUVsZW1lbnRzOiBpbmRpY2VzLmxlbmd0aCxcbiAgICBtb2RlOiA0LFxuICB9O1xuICByZXR1cm4gQXJyYXlEYXRhO1xufTtcblxuY29uc3QgY3JlYXRlQ2lyY2xlID0gKHJhZGl1cywgbnVtQ29ybmVycykgPT4ge1xuICBjb25zdCB2ZXJ0aWNlcyA9IFswLCAwLCAwXTtcbiAgY29uc3Qgbm9ybWFscyA9IFtdO1xuICBjb25zdCBpbmRpY2VzID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1Db3JuZXJzICsgMTsgaSsrKSB7XG4gICAgY29uc3QgYW5nbGUgPSAoMiAqIGkgKiBNYXRoLlBJKSAvIG51bUNvcm5lcnM7XG4gICAgY29uc3QgeCA9IE1hdGguY29zKGFuZ2xlKSAqIHJhZGl1cztcbiAgICBjb25zdCB6ID0gTWF0aC5zaW4oYW5nbGUpICogcmFkaXVzO1xuXG4gICAgdmVydGljZXMucHVzaCh4LCAwLCB6KTtcbiAgICBub3JtYWxzLnB1c2goMCwgMSwgMCk7XG4gIH1cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1Db3JuZXJzOyBpKyspIHtcbiAgICBpbmRpY2VzLnB1c2goMCwgaSArIDEsIGkgKyAyKTtcbiAgfVxuXG4gIGNvbnN0IF9ub3JtYWwgPSBuZXcgRmxvYXQzMkFycmF5KG5vcm1hbHMpO1xuICBjb25zdCBfcG9zaXRpb24gPSBuZXcgRmxvYXQzMkFycmF5KHZlcnRpY2VzKTtcbiAgY29uc3QgX2luZGljZXMgPSBuZXcgVWludDE2QXJyYXkoaW5kaWNlcyk7XG5cbiAgY29uc3QgQXJyYXlEYXRhID0ge1xuICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgIFBPU0lUSU9OOiB7XG4gICAgICAgIGxvY2F0aW9uOiAwLFxuICAgICAgICBjb3VudDogdmVydGljZXMubGVuZ3RoLFxuICAgICAgICBvZmZzZXQ6IDAsXG4gICAgICAgIHN0cmlkZTogMCxcbiAgICAgICAgbnVtQ29tcG9uZW50czogMyxcbiAgICAgICAgdHlwZTogNTEyNixcbiAgICAgICAgZGF0YTogX3Bvc2l0aW9uLFxuICAgICAgICBieXRlTGVuZ3RoOiBfcG9zaXRpb24uYnl0ZUxlbmd0aCxcbiAgICAgIH0sXG4gICAgICBOT1JNQUw6IHtcbiAgICAgICAgbG9jYXRpb246IDEsXG4gICAgICAgIGNvdW50OiBub3JtYWxzLmxlbmd0aCxcbiAgICAgICAgbnVtQ29tcG9uZW50czogMyxcbiAgICAgICAgb2Zmc2V0OiAwLFxuICAgICAgICBzdHJpZGU6IDAsXG4gICAgICAgIHR5cGU6IDUxMjYsXG4gICAgICAgIGRhdGE6IF9ub3JtYWwsXG4gICAgICAgIGJ5dGVMZW5ndGg6IF9ub3JtYWwuYnl0ZUxlbmd0aCxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBjb21wb25lbnRUeXBlOiA1MTIzLFxuICAgIGluZGljZXM6IF9pbmRpY2VzLFxuICAgIG51bUVsZW1lbnRzOiBpbmRpY2VzLmxlbmd0aCxcbiAgICBtb2RlOiA0LFxuICB9O1xuICByZXR1cm4gQXJyYXlEYXRhO1xufTtcblxuY29uc3QgY3JlYXRlU3BoZXJlID0gKFxuICByYWRpdXMsXG4gIHN1YmRpdmlzaW9uc0F4aXMsXG4gIHN1YmRpdmlzaW9uc0hlaWdodCxcbiAgb3B0X3N0YXJ0TGF0aXR1ZGVJblJhZGlhbnMsXG4gIG9wdF9lbmRMYXRpdHVkZUluUmFkaWFucyxcbiAgb3B0X3N0YXJ0TG9uZ2l0dWRlSW5SYWRpYW5zLFxuICBvcHRfZW5kTG9uZ2l0dWRlSW5SYWRpYW5zXG4pID0+IHtcbiAgaWYgKHN1YmRpdmlzaW9uc0F4aXMgPD0gMCB8fCBzdWJkaXZpc2lvbnNIZWlnaHQgPD0gMCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcInN1YmRpdmlzaW9uQXhpcyBhbmQgc3ViZGl2aXNpb25IZWlnaHQgbXVzdCBiZSA+IDBcIik7XG4gIH1cblxuICBvcHRfc3RhcnRMYXRpdHVkZUluUmFkaWFucyA9IG9wdF9zdGFydExhdGl0dWRlSW5SYWRpYW5zIHx8IDA7XG4gIG9wdF9lbmRMYXRpdHVkZUluUmFkaWFucyA9IG9wdF9lbmRMYXRpdHVkZUluUmFkaWFucyB8fCBNYXRoLlBJO1xuICBvcHRfc3RhcnRMb25naXR1ZGVJblJhZGlhbnMgPSBvcHRfc3RhcnRMb25naXR1ZGVJblJhZGlhbnMgfHwgMDtcbiAgb3B0X2VuZExvbmdpdHVkZUluUmFkaWFucyA9IG9wdF9lbmRMb25naXR1ZGVJblJhZGlhbnMgfHwgTWF0aC5QSSAqIDI7XG5cbiAgY29uc3QgbGF0UmFuZ2UgPSBvcHRfZW5kTGF0aXR1ZGVJblJhZGlhbnMgLSBvcHRfc3RhcnRMYXRpdHVkZUluUmFkaWFucztcbiAgY29uc3QgbG9uZ1JhbmdlID0gb3B0X2VuZExvbmdpdHVkZUluUmFkaWFucyAtIG9wdF9zdGFydExvbmdpdHVkZUluUmFkaWFucztcblxuICBjb25zdCBwb3NpdGlvbnMgPSBbXTtcbiAgY29uc3Qgbm9ybWFscyA9IFtdO1xuICBjb25zdCB0ZXhjb29yZHMgPSBbXTtcblxuICBmb3IgKGxldCB5ID0gMDsgeSA8PSBzdWJkaXZpc2lvbnNIZWlnaHQ7IHkrKykge1xuICAgIGZvciAobGV0IHggPSAwOyB4IDw9IHN1YmRpdmlzaW9uc0F4aXM7IHgrKykge1xuICAgICAgY29uc3QgdSA9IHggLyBzdWJkaXZpc2lvbnNBeGlzO1xuICAgICAgY29uc3QgdiA9IHkgLyBzdWJkaXZpc2lvbnNIZWlnaHQ7XG4gICAgICBjb25zdCB0aGV0YSA9IGxvbmdSYW5nZSAqIHUgKyBvcHRfc3RhcnRMb25naXR1ZGVJblJhZGlhbnM7XG4gICAgICBjb25zdCBwaGkgPSBsYXRSYW5nZSAqIHYgKyBvcHRfc3RhcnRMYXRpdHVkZUluUmFkaWFucztcbiAgICAgIGNvbnN0IHNpblRoZXRhID0gTWF0aC5zaW4odGhldGEpO1xuICAgICAgY29uc3QgY29zVGhldGEgPSBNYXRoLmNvcyh0aGV0YSk7XG4gICAgICBjb25zdCBzaW5QaGkgPSBNYXRoLnNpbihwaGkpO1xuICAgICAgY29uc3QgY29zUGhpID0gTWF0aC5jb3MocGhpKTtcbiAgICAgIGNvbnN0IHV4ID0gY29zVGhldGEgKiBzaW5QaGk7XG4gICAgICBjb25zdCB1eSA9IGNvc1BoaTtcbiAgICAgIGNvbnN0IHV6ID0gc2luVGhldGEgKiBzaW5QaGk7XG4gICAgICBwb3NpdGlvbnMucHVzaChyYWRpdXMgKiB1eCwgcmFkaXVzICogdXksIHJhZGl1cyAqIHV6KTtcbiAgICAgIG5vcm1hbHMucHVzaCh1eCwgdXksIHV6KTtcbiAgICAgIHRleGNvb3Jkcy5wdXNoKDEgLSB1LCB2KTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBudW1WZXJ0c0Fyb3VuZCA9IHN1YmRpdmlzaW9uc0F4aXMgKyAxO1xuICBjb25zdCBpbmRpY2VzID0gW107XG4gIGZvciAobGV0IHggPSAwOyB4IDwgc3ViZGl2aXNpb25zQXhpczsgeCsrKSB7XG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCBzdWJkaXZpc2lvbnNIZWlnaHQ7IHkrKykge1xuICAgICAgaW5kaWNlcy5wdXNoKFxuICAgICAgICAoeSArIDApICogbnVtVmVydHNBcm91bmQgKyB4LFxuICAgICAgICAoeSArIDApICogbnVtVmVydHNBcm91bmQgKyB4ICsgMSxcbiAgICAgICAgKHkgKyAxKSAqIG51bVZlcnRzQXJvdW5kICsgeFxuICAgICAgKTtcbiAgICAgIGluZGljZXMucHVzaChcbiAgICAgICAgKHkgKyAxKSAqIG51bVZlcnRzQXJvdW5kICsgeCxcbiAgICAgICAgKHkgKyAwKSAqIG51bVZlcnRzQXJvdW5kICsgeCArIDEsXG4gICAgICAgICh5ICsgMSkgKiBudW1WZXJ0c0Fyb3VuZCArIHggKyAxXG4gICAgICApO1xuICAgIH1cbiAgfVxuICBjb25zdCBfcG9zaXRpb25zID0gbmV3IEZsb2F0MzJBcnJheShwb3NpdGlvbnMpO1xuICBjb25zdCBfbm9ybWFscyA9IG5ldyBGbG9hdDMyQXJyYXkobm9ybWFscyk7XG4gIGNvbnN0IF90ZXhjb29yZHMgPSBuZXcgRmxvYXQzMkFycmF5KHRleGNvb3Jkcyk7XG4gIGNvbnN0IF9pbmRpY2VzID0gbmV3IFVpbnQxNkFycmF5KGluZGljZXMpO1xuXG4gIHJldHVybiB7XG4gICAgYXR0cmlidXRlczoge1xuICAgICAgUE9TSVRJT046IHtcbiAgICAgICAgbG9jYXRpb246IDAsXG4gICAgICAgIGNvdW50OiBwb3NpdGlvbnMubGVuZ3RoLFxuICAgICAgICBvZmZzZXQ6IDAsXG4gICAgICAgIHN0cmlkZTogMCxcbiAgICAgICAgbnVtQ29tcG9uZW50czogMyxcbiAgICAgICAgdHlwZTogNTEyNixcbiAgICAgICAgZGF0YTogX3Bvc2l0aW9ucyxcbiAgICAgICAgYnl0ZUxlbmd0aDogX3Bvc2l0aW9ucy5ieXRlTGVuZ3RoLFxuICAgICAgfSxcbiAgICAgIE5PUk1BTDoge1xuICAgICAgICBsb2NhdGlvbjogMSxcbiAgICAgICAgY291bnQ6IG5vcm1hbHMubGVuZ3RoLFxuICAgICAgICBudW1Db21wb25lbnRzOiAzLFxuICAgICAgICBvZmZzZXQ6IDAsXG4gICAgICAgIHN0cmlkZTogMCxcbiAgICAgICAgdHlwZTogNTEyNixcbiAgICAgICAgZGF0YTogX25vcm1hbHMsXG4gICAgICAgIGJ5dGVMZW5ndGg6IF9ub3JtYWxzLmJ5dGVMZW5ndGgsXG4gICAgICB9LFxuICAgICAgVEVYQ09PUkRfMDoge1xuICAgICAgICBkYXRhOiBfdGV4Y29vcmRzLFxuICAgICAgICBjb3VudDogX3RleGNvb3Jkcy5sZW5ndGgsXG4gICAgICAgIHR5cGU6IDUxMjYsXG4gICAgICAgIG9mZnNldDogMCxcbiAgICAgICAgc3RyaWRlOiAwLFxuICAgICAgICBieXRlTGVuZ3RoOiBfdGV4Y29vcmRzLmJ5dGVMZW5ndGgsXG4gICAgICAgIGxvY2F0aW9uOiA0LFxuICAgICAgICBudW1Db21wb25lbnRzOiAyLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGNvbXBvbmVudFR5cGU6IDUxMjMsXG4gICAgaW5kaWNlczogX2luZGljZXMsXG4gICAgbnVtRWxlbWVudHM6IGluZGljZXMubGVuZ3RoLFxuICAgIG1vZGU6IDQsXG4gIH07XG59O1xuY29uc3QgY3JlYXRlVHJ1bmNhdGVkQ29uZSA9IChcbiAgYm90dG9tUmFkaXVzLFxuICB0b3BSYWRpdXMsXG4gIGhlaWdodCxcbiAgcmFkaWFsU3ViZGl2aXNpb25zLFxuICB2ZXJ0aWNhbFN1YmRpdmlzaW9ucyxcbiAgb3B0X3RvcENhcCxcbiAgb3B0X2JvdHRvbUNhcFxuKSA9PiB7XG4gIGlmIChyYWRpYWxTdWJkaXZpc2lvbnMgPCAzKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwicmFkaWFsU3ViZGl2aXNpb25zIG11c3QgYmUgMyBvciBncmVhdGVyXCIpO1xuICB9XG5cbiAgaWYgKHZlcnRpY2FsU3ViZGl2aXNpb25zIDwgMSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcInZlcnRpY2FsU3ViZGl2aXNpb25zIG11c3QgYmUgMSBvciBncmVhdGVyXCIpO1xuICB9XG5cbiAgY29uc3QgdG9wQ2FwID0gb3B0X3RvcENhcCA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IG9wdF90b3BDYXA7XG4gIGNvbnN0IGJvdHRvbUNhcCA9IG9wdF9ib3R0b21DYXAgPT09IHVuZGVmaW5lZCA/IHRydWUgOiBvcHRfYm90dG9tQ2FwO1xuXG4gIGNvbnN0IGV4dHJhID0gKHRvcENhcCA/IDIgOiAwKSArIChib3R0b21DYXAgPyAyIDogMCk7XG5cbiAgY29uc3QgbnVtVmVydGljZXMgPVxuICAgIChyYWRpYWxTdWJkaXZpc2lvbnMgKyAxKSAqICh2ZXJ0aWNhbFN1YmRpdmlzaW9ucyArIDEgKyBleHRyYSk7XG4gIGNvbnN0IHBvc2l0aW9ucyA9IFtdO1xuICBjb25zdCBub3JtYWxzID0gW107XG4gIGNvbnN0IHRleGNvb3JkcyA9IFtdO1xuICBjb25zdCBpbmRpY2VzID0gW107XG5cbiAgY29uc3QgdmVydHNBcm91bmRFZGdlID0gcmFkaWFsU3ViZGl2aXNpb25zICsgMTtcblxuICBjb25zdCBzbGFudCA9IE1hdGguYXRhbjIoYm90dG9tUmFkaXVzIC0gdG9wUmFkaXVzLCBoZWlnaHQpO1xuICBjb25zdCBjb3NTbGFudCA9IE1hdGguY29zKHNsYW50KTtcbiAgY29uc3Qgc2luU2xhbnQgPSBNYXRoLnNpbihzbGFudCk7XG5cbiAgY29uc3Qgc3RhcnQgPSB0b3BDYXAgPyAtMiA6IDA7XG4gIGNvbnN0IGVuZCA9IHZlcnRpY2FsU3ViZGl2aXNpb25zICsgKGJvdHRvbUNhcCA/IDIgOiAwKTtcblxuICBmb3IgKGxldCB5eSA9IHN0YXJ0OyB5eSA8PSBlbmQ7ICsreXkpIHtcbiAgICBsZXQgdiA9IHl5IC8gdmVydGljYWxTdWJkaXZpc2lvbnM7XG4gICAgbGV0IHkgPSBoZWlnaHQgKiB2O1xuICAgIGxldCByaW5nUmFkaXVzO1xuICAgIGlmICh5eSA8IDApIHtcbiAgICAgIHkgPSAwO1xuICAgICAgdiA9IDE7XG4gICAgICByaW5nUmFkaXVzID0gYm90dG9tUmFkaXVzO1xuICAgIH0gZWxzZSBpZiAoeXkgPiB2ZXJ0aWNhbFN1YmRpdmlzaW9ucykge1xuICAgICAgeSA9IGhlaWdodDtcbiAgICAgIHYgPSAxO1xuICAgICAgcmluZ1JhZGl1cyA9IHRvcFJhZGl1cztcbiAgICB9IGVsc2Uge1xuICAgICAgcmluZ1JhZGl1cyA9XG4gICAgICAgIGJvdHRvbVJhZGl1cyArICh0b3BSYWRpdXMgLSBib3R0b21SYWRpdXMpICogKHl5IC8gdmVydGljYWxTdWJkaXZpc2lvbnMpO1xuICAgIH1cbiAgICBpZiAoeXkgPT09IC0yIHx8IHl5ID09PSB2ZXJ0aWNhbFN1YmRpdmlzaW9ucyArIDIpIHtcbiAgICAgIHJpbmdSYWRpdXMgPSAwO1xuICAgICAgdiA9IDA7XG4gICAgfVxuICAgIHkgLT0gaGVpZ2h0IC8gMjtcbiAgICBmb3IgKGxldCBpaSA9IDA7IGlpIDwgdmVydHNBcm91bmRFZGdlOyArK2lpKSB7XG4gICAgICBjb25zdCBzaW4gPSBNYXRoLnNpbigoaWkgKiBNYXRoLlBJICogMikgLyByYWRpYWxTdWJkaXZpc2lvbnMpO1xuICAgICAgY29uc3QgY29zID0gTWF0aC5jb3MoKGlpICogTWF0aC5QSSAqIDIpIC8gcmFkaWFsU3ViZGl2aXNpb25zKTtcbiAgICAgIHBvc2l0aW9ucy5wdXNoKHNpbiAqIHJpbmdSYWRpdXMsIHksIGNvcyAqIHJpbmdSYWRpdXMpO1xuICAgICAgaWYgKHl5IDwgMCkge1xuICAgICAgICBub3JtYWxzLnB1c2goMCwgLTEsIDApO1xuICAgICAgfSBlbHNlIGlmICh5eSA+IHZlcnRpY2FsU3ViZGl2aXNpb25zKSB7XG4gICAgICAgIG5vcm1hbHMucHVzaCgwLCAxLCAwKTtcbiAgICAgIH0gZWxzZSBpZiAocmluZ1JhZGl1cyA9PT0gMC4wKSB7XG4gICAgICAgIG5vcm1hbHMucHVzaCgwLCAwLCAwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5vcm1hbHMucHVzaChzaW4gKiBjb3NTbGFudCwgc2luU2xhbnQsIGNvcyAqIGNvc1NsYW50KTtcbiAgICAgIH1cbiAgICAgIHRleGNvb3Jkcy5wdXNoKGlpIC8gcmFkaWFsU3ViZGl2aXNpb25zLCAxIC0gdik7XG4gICAgfVxuICB9XG5cbiAgZm9yIChsZXQgeXkgPSAwOyB5eSA8IHZlcnRpY2FsU3ViZGl2aXNpb25zICsgZXh0cmE7ICsreXkpIHtcbiAgICBpZiAoXG4gICAgICAoeXkgPT09IDEgJiYgdG9wQ2FwKSB8fFxuICAgICAgKHl5ID09PSB2ZXJ0aWNhbFN1YmRpdmlzaW9ucyArIGV4dHJhIC0gMiAmJiBib3R0b21DYXApXG4gICAgKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgZm9yIChsZXQgaWkgPSAwOyBpaSA8IHJhZGlhbFN1YmRpdmlzaW9uczsgKytpaSkge1xuICAgICAgaW5kaWNlcy5wdXNoKFxuICAgICAgICB2ZXJ0c0Fyb3VuZEVkZ2UgKiAoeXkgKyAwKSArIDAgKyBpaSxcbiAgICAgICAgdmVydHNBcm91bmRFZGdlICogKHl5ICsgMCkgKyAxICsgaWksXG4gICAgICAgIHZlcnRzQXJvdW5kRWRnZSAqICh5eSArIDEpICsgMSArIGlpXG4gICAgICApO1xuICAgICAgaW5kaWNlcy5wdXNoKFxuICAgICAgICB2ZXJ0c0Fyb3VuZEVkZ2UgKiAoeXkgKyAwKSArIDAgKyBpaSxcbiAgICAgICAgdmVydHNBcm91bmRFZGdlICogKHl5ICsgMSkgKyAxICsgaWksXG4gICAgICAgIHZlcnRzQXJvdW5kRWRnZSAqICh5eSArIDEpICsgMCArIGlpXG4gICAgICApO1xuICAgIH1cbiAgfVxuICBjb25zdCBfcG9zaXRpb25zID0gbmV3IEZsb2F0MzJBcnJheShwb3NpdGlvbnMpO1xuICBjb25zdCBfbm9ybWFscyA9IG5ldyBGbG9hdDMyQXJyYXkobm9ybWFscyk7XG4gIGNvbnN0IF90ZXhjb29yZHMgPSBuZXcgRmxvYXQzMkFycmF5KHRleGNvb3Jkcyk7XG4gIGNvbnN0IF9pbmRpY2VzID0gbmV3IFVpbnQxNkFycmF5KGluZGljZXMpO1xuICByZXR1cm4ge1xuICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgIFBPU0lUSU9OOiB7XG4gICAgICAgIGxvY2F0aW9uOiAwLFxuICAgICAgICBjb3VudDogcG9zaXRpb25zLmxlbmd0aCxcbiAgICAgICAgb2Zmc2V0OiAwLFxuICAgICAgICBzdHJpZGU6IDAsXG4gICAgICAgIG51bUNvbXBvbmVudHM6IDMsXG4gICAgICAgIHR5cGU6IDUxMjYsXG4gICAgICAgIGRhdGE6IF9wb3NpdGlvbnMsXG4gICAgICAgIGJ5dGVMZW5ndGg6IF9wb3NpdGlvbnMuYnl0ZUxlbmd0aCxcbiAgICAgIH0sXG4gICAgICBOT1JNQUw6IHtcbiAgICAgICAgbG9jYXRpb246IDEsXG4gICAgICAgIGNvdW50OiBub3JtYWxzLmxlbmd0aCxcbiAgICAgICAgbnVtQ29tcG9uZW50czogMyxcbiAgICAgICAgb2Zmc2V0OiAwLFxuICAgICAgICBzdHJpZGU6IDAsXG4gICAgICAgIHR5cGU6IDUxMjYsXG4gICAgICAgIGRhdGE6IF9ub3JtYWxzLFxuICAgICAgICBieXRlTGVuZ3RoOiBfbm9ybWFscy5ieXRlTGVuZ3RoLFxuICAgICAgfSxcbiAgICAgIFRFWENPT1JEXzA6IHtcbiAgICAgICAgZGF0YTogX3RleGNvb3JkcyxcbiAgICAgICAgY291bnQ6IF90ZXhjb29yZHMubGVuZ3RoLFxuICAgICAgICB0eXBlOiA1MTI2LFxuICAgICAgICBvZmZzZXQ6IDAsXG4gICAgICAgIHN0cmlkZTogMCxcbiAgICAgICAgYnl0ZUxlbmd0aDogX3RleGNvb3Jkcy5ieXRlTGVuZ3RoLFxuICAgICAgICBsb2NhdGlvbjogNCxcbiAgICAgICAgbnVtQ29tcG9uZW50czogMixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBjb21wb25lbnRUeXBlOiA1MTIzLFxuICAgIGluZGljZXM6IF9pbmRpY2VzLFxuICAgIG51bUVsZW1lbnRzOiBpbmRpY2VzLmxlbmd0aCxcbiAgICBtb2RlOiA0LFxuICB9O1xufTtcblxuZXhwb3J0IHsgY3JlYXRlQm94LCBjcmVhdGVDb25lLCBjcmVhdGVDaXJjbGUsIGNyZWF0ZVNwaGVyZSwgY3JlYXRlVHJ1bmNhdGVkQ29uZX07XG4iLCJmdW5jdGlvbiBnZXRHTFR5cGVGb3JUeXBlZEFycmF5KGdsLCB0eXBlZEFycmF5KSB7XG4gIGlmICh0eXBlZEFycmF5IGluc3RhbmNlb2YgSW50OEFycmF5KSB7XG4gICAgcmV0dXJuIGdsLkJZVEU7XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICBpZiAodHlwZWRBcnJheSBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkpIHtcbiAgICByZXR1cm4gZ2wuVU5TSUdORURfQllURTtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gIGlmICh0eXBlZEFycmF5IGluc3RhbmNlb2YgVWludDhDbGFtcGVkQXJyYXkpIHtcbiAgICByZXR1cm4gZ2wuVU5TSUdORURfQllURTtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gIGlmICh0eXBlZEFycmF5IGluc3RhbmNlb2YgSW50MTZBcnJheSkge1xuICAgIHJldHVybiBnbC5TSE9SVDtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gIGlmICh0eXBlZEFycmF5IGluc3RhbmNlb2YgVWludDE2QXJyYXkpIHtcbiAgICByZXR1cm4gZ2wuVU5TSUdORURfU0hPUlQ7XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICBpZiAodHlwZWRBcnJheSBpbnN0YW5jZW9mIEludDMyQXJyYXkpIHtcbiAgICByZXR1cm4gZ2wuSU5UO1xuICB9IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgaWYgKHR5cGVkQXJyYXkgaW5zdGFuY2VvZiBVaW50MzJBcnJheSkge1xuICAgIHJldHVybiBnbC5VTlNJR05FRF9JTlQ7XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICBpZiAodHlwZWRBcnJheSBpbnN0YW5jZW9mIEZsb2F0MzJBcnJheSkge1xuICAgIHJldHVybiBnbC5GTE9BVDtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gIHJldHVybiBmYWxzZTtcbn1cbmZ1bmN0aW9uIGV4cGFuZGVkVHlwZWRBcnJheShhcnJheSkge1xuICBsZXQgY3Vyc29yID0gMDtcbiAgYXJyYXkucHVzaCA9IGZ1bmN0aW9uICgpIHtcbiAgICBmb3IgKGxldCBpaSA9IDA7IGlpIDwgYXJndW1lbnRzLmxlbmd0aDsgKytpaSkge1xuICAgICAgY29uc3QgdmFsdWUgPSBhcmd1bWVudHNbaWldO1xuXG4gICAgICBpZiAoXG4gICAgICAgIHZhbHVlIGluc3RhbmNlb2YgQXJyYXkgfHxcbiAgICAgICAgKHZhbHVlLmJ1ZmZlciAmJiB2YWx1ZS5idWZmZXIgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcilcbiAgICAgICkge1xuICAgICAgICBmb3IgKGxldCBqaiA9IDA7IGpqIDwgdmFsdWUubGVuZ3RoOyArK2pqKSB7XG4gICAgICAgICAgYXJyYXlbY3Vyc29yKytdID0gdmFsdWVbampdO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhcnJheVtjdXJzb3IrK10gPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVVbmlmb3JtU2V0dGVycyhnbCwgcHJvZ3JhbSkge1xuICBjb25zdCBjcmVhdGVUZXh0dXJlU2V0dGVyID0gKHByb2dyYW0sIHVuaWZvcm1JbmZvKSA9PiB7XG4gICAgY29uc3QgbG9jYXRpb24gPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgdW5pZm9ybUluZm8ubmFtZSk7XG5cbiAgICByZXR1cm4gKHRleEJsb2NrTnVtKSA9PiB7XG4gICAgICBnbC51bmlmb3JtMWkobG9jYXRpb24sIHRleEJsb2NrTnVtKTtcbiAgICB9O1xuICB9O1xuICBmdW5jdGlvbiBjcmVhdGVVbmlmb3JtU2V0dGVyKHByb2dyYW0sIHVuaWZvcm1JbmZvKSB7XG4gICAgY29uc3QgbG9jYXRpb24gPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgdW5pZm9ybUluZm8ubmFtZSk7XG5cbiAgICBjb25zdCB0eXBlID0gdW5pZm9ybUluZm8udHlwZTtcblxuICAgIGNvbnN0IGlzQXJyYXkgPVxuICAgICAgdW5pZm9ybUluZm8uc2l6ZSA+IDEgJiYgdW5pZm9ybUluZm8ubmFtZS5zdWJzdHIoLTMpID09PSBcIlswXVwiO1xuXG4gICAgaWYgKHR5cGUgPT09IGdsLkZMT0FUICYmIGlzQXJyYXkpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgICAgICBnbC51bmlmb3JtMWZ2KGxvY2F0aW9uLCB2KTtcbiAgICAgIH07XG4gICAgfVxuICAgIGlmICh0eXBlID09PSBnbC5GTE9BVCkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIGdsLnVuaWZvcm0xZihsb2NhdGlvbiwgdik7XG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAodHlwZSA9PT0gZ2wuRkxPQVRfVkVDMikge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIGdsLnVuaWZvcm0yZnYobG9jYXRpb24sIHYpO1xuICAgICAgfTtcbiAgICB9XG4gICAgaWYgKHR5cGUgPT09IGdsLkZMT0FUX1ZFQzMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgICAgICBnbC51bmlmb3JtM2Z2KGxvY2F0aW9uLCB2KTtcbiAgICAgIH07XG4gICAgfVxuICAgIGlmICh0eXBlID09PSBnbC5GTE9BVF9WRUM0KSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgZ2wudW5pZm9ybTRmdihsb2NhdGlvbiwgdik7XG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAodHlwZSA9PT0gZ2wuSU5UICYmIGlzQXJyYXkpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgICAgICBnbC51bmlmb3JtMWl2KGxvY2F0aW9uLCB2KTtcbiAgICAgIH07XG4gICAgfVxuICAgIGlmICh0eXBlID09PSBnbC5JTlQpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgICAgICBnbC51bmlmb3JtMWkobG9jYXRpb24sIHYpO1xuICAgICAgfTtcbiAgICB9XG4gICAgaWYgKHR5cGUgPT09IGdsLklOVF9WRUMyKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgZ2wudW5pZm9ybTJpdihsb2NhdGlvbiwgdik7XG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAodHlwZSA9PT0gZ2wuSU5UX1ZFQzMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgICAgICBnbC51bmlmb3JtM2l2KGxvY2F0aW9uLCB2KTtcbiAgICAgIH07XG4gICAgfVxuICAgIGlmICh0eXBlID09PSBnbC5JTlRfVkVDNCkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIGdsLnVuaWZvcm00aXYobG9jYXRpb24sIHYpO1xuICAgICAgfTtcbiAgICB9XG4gICAgaWYgKHR5cGUgPT09IGdsLkJPT0wpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgICAgICBnbC51bmlmb3JtMWl2KGxvY2F0aW9uLCB2KTtcbiAgICAgIH07XG4gICAgfVxuICAgIGlmICh0eXBlID09PSBnbC5CT09MX1ZFQzIpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgICAgICBnbC51bmlmb3JtMml2KGxvY2F0aW9uLCB2KTtcbiAgICAgIH07XG4gICAgfVxuICAgIGlmICh0eXBlID09PSBnbC5CT09MX1ZFQzMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgICAgICBnbC51bmlmb3JtM2l2KGxvY2F0aW9uLCB2KTtcbiAgICAgIH07XG4gICAgfVxuICAgIGlmICh0eXBlID09PSBnbC5CT09MX1ZFQzQpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgICAgICBnbC51bmlmb3JtNGl2KGxvY2F0aW9uLCB2KTtcbiAgICAgIH07XG4gICAgfVxuICAgIGlmICh0eXBlID09PSBnbC5GTE9BVF9NQVQyKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgZ2wudW5pZm9ybU1hdHJpeDJmdihsb2NhdGlvbiwgZmFsc2UsIHYpO1xuICAgICAgfTtcbiAgICB9XG4gICAgaWYgKHR5cGUgPT09IGdsLkZMT0FUX01BVDMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgICAgICBnbC51bmlmb3JtTWF0cml4M2Z2KGxvY2F0aW9uLCBmYWxzZSwgdik7XG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAodHlwZSA9PT0gZ2wuRkxPQVRfTUFUNCkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIGdsLnVuaWZvcm1NYXRyaXg0ZnYobG9jYXRpb24sIGZhbHNlLCB2KTtcbiAgICAgIH07XG4gICAgfVxuICB9XG4gIGNvbnN0IHVuaWZvcm1TZXR0ZXJzID0ge307XG4gIGNvbnN0IHRleHR1cmVTZXR0ZXJzID0ge307XG4gIGNvbnN0IG51bVVuaWZvcm1zID0gZ2wuZ2V0UHJvZ3JhbVBhcmFtZXRlcihwcm9ncmFtLCBnbC5BQ1RJVkVfVU5JRk9STVMpO1xuXG4gIGZvciAobGV0IGlpID0gMDsgaWkgPCBudW1Vbmlmb3JtczsgKytpaSkge1xuICAgIGNvbnN0IHVuaWZvcm1JbmZvID0gZ2wuZ2V0QWN0aXZlVW5pZm9ybShwcm9ncmFtLCBpaSk7XG4gICAgaWYgKCF1bmlmb3JtSW5mbykge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGxldCBuYW1lID0gdW5pZm9ybUluZm8ubmFtZTtcbiAgICBpZiAodW5pZm9ybUluZm8udHlwZSA9PT0gZ2wuU0FNUExFUl8yRCkge1xuICAgICAgdGV4dHVyZVNldHRlcnNbbmFtZV0gPSBjcmVhdGVUZXh0dXJlU2V0dGVyKHByb2dyYW0sIHVuaWZvcm1JbmZvKTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmIChuYW1lLnN1YnN0cigtMykgPT09IFwiWzBdXCIpIHtcbiAgICAgIG5hbWUgPSBuYW1lLnN1YnN0cigwLCBuYW1lLmxlbmd0aCAtIDMpO1xuICAgIH1cbiAgICBpZiAodW5pZm9ybUluZm8uc2l6ZSA+IDEpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdW5pZm9ybUluZm8uc2l6ZTsgaSsrKSB7XG4gICAgICAgIGNvbnN0IG9iaiA9IHtcbiAgICAgICAgICBzaXplOiB1bmlmb3JtSW5mby5zaXplLFxuICAgICAgICAgIHR5cGU6IHVuaWZvcm1JbmZvLnR5cGUsXG4gICAgICAgICAgbmFtZTogbmFtZSArIGBbJHtpfV1gLFxuICAgICAgICB9O1xuICAgICAgICB1bmlmb3JtU2V0dGVyc1tuYW1lICsgYFske2l9XWBdID0gY3JlYXRlVW5pZm9ybVNldHRlcihwcm9ncmFtLCBvYmopO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzZXR0ZXIgPSBjcmVhdGVVbmlmb3JtU2V0dGVyKHByb2dyYW0sIHVuaWZvcm1JbmZvKTtcbiAgICAgIHVuaWZvcm1TZXR0ZXJzW25hbWVdID0gc2V0dGVyO1xuICAgIH1cbiAgfVxuICByZXR1cm4geyB1bmlmb3JtU2V0dGVycywgdGV4dHVyZVNldHRlcnMgfTtcbn1cblxuY2xhc3MgUHJvZ3JhbUluZm8ge1xuICBjb25zdHJ1Y3Rvcih2cywgZnMpIHtcbiAgICB0aGlzLnZzID0gdnM7XG4gICAgdGhpcy5mcyA9IGZzO1xuICAgIHRoaXMuVkFPID0gbnVsbDtcbiAgICB0aGlzLnVuaWZvcm1TZXR0ZXJzID0gbnVsbDtcbiAgICB0aGlzLnZlcnRleFNoYWRlciA9IG51bGw7XG4gICAgdGhpcy5mcmFnbWVudFNoYWRlciA9IG51bGw7XG4gICAgdGhpcy5wcm9ncmFtID0gbnVsbDtcbiAgICB0aGlzLmdsID0gbnVsbDtcbiAgfVxuICBzZXRDb250ZXh0KGdsQ29udGV4dFdyYXBwZXIpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBnbENvbnRleHRXcmFwcGVyO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIGNyZWF0ZVVuaWZvcm1TZXR0ZXJzKCkge1xuICAgIGNvbnN0IHsgZ2wgfSA9IHRoaXMuY29udGV4dDtcbiAgICBjb25zdCB7IHVuaWZvcm1TZXR0ZXJzLCB0ZXh0dXJlU2V0dGVycyB9ID0gY3JlYXRlVW5pZm9ybVNldHRlcnMoXG4gICAgICBnbCxcbiAgICAgIHRoaXMucHJvZ3JhbVxuICAgICk7XG4gICAgdGhpcy50ZXh0dXJlU2V0dGVycyA9IHRleHR1cmVTZXR0ZXJzO1xuICAgIHRoaXMudW5pZm9ybVNldHRlcnMgPSB1bmlmb3JtU2V0dGVycztcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBjb21waWxlU2hhZGVycygpIHtcbiAgICBjb25zdCB7IGdsIH0gPSB0aGlzLmNvbnRleHQ7XG4gICAgdGhpcy52ZXJ0ZXhTaGFkZXIgPSBnbC5jcmVhdGVTaGFkZXIoZ2wuVkVSVEVYX1NIQURFUik7XG4gICAgZ2wuc2hhZGVyU291cmNlKHRoaXMudmVydGV4U2hhZGVyLCB0aGlzLnZzKTtcbiAgICBnbC5jb21waWxlU2hhZGVyKHRoaXMudmVydGV4U2hhZGVyKTtcbiAgICBpZiAoIWdsLmdldFNoYWRlclBhcmFtZXRlcih0aGlzLnZlcnRleFNoYWRlciwgZ2wuQ09NUElMRV9TVEFUVVMpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoZ2wuZ2V0U2hhZGVySW5mb0xvZyh0aGlzLnZlcnRleFNoYWRlcikpO1xuICAgIH1cblxuICAgIHRoaXMuZnJhZ21lbnRTaGFkZXIgPSBnbC5jcmVhdGVTaGFkZXIoZ2wuRlJBR01FTlRfU0hBREVSKTtcbiAgICBnbC5zaGFkZXJTb3VyY2UodGhpcy5mcmFnbWVudFNoYWRlciwgdGhpcy5mcyk7XG4gICAgZ2wuY29tcGlsZVNoYWRlcih0aGlzLmZyYWdtZW50U2hhZGVyKTtcbiAgICBpZiAoIWdsLmdldFNoYWRlclBhcmFtZXRlcih0aGlzLmZyYWdtZW50U2hhZGVyLCBnbC5DT01QSUxFX1NUQVRVUykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihnbC5nZXRTaGFkZXJJbmZvTG9nKHRoaXMuZnJhZ21lbnRTaGFkZXIpKTtcbiAgICB9XG5cbiAgICB0aGlzLnByb2dyYW0gPSBnbC5jcmVhdGVQcm9ncmFtKCk7XG4gICAgZ2wuYXR0YWNoU2hhZGVyKHRoaXMucHJvZ3JhbSwgdGhpcy52ZXJ0ZXhTaGFkZXIpO1xuICAgIGdsLmF0dGFjaFNoYWRlcih0aGlzLnByb2dyYW0sIHRoaXMuZnJhZ21lbnRTaGFkZXIpO1xuICAgIGdsLmxpbmtQcm9ncmFtKHRoaXMucHJvZ3JhbSk7XG4gICAgaWYgKCFnbC5nZXRQcm9ncmFtUGFyYW1ldGVyKHRoaXMucHJvZ3JhbSwgZ2wuTElOS19TVEFUVVMpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoZ2wuZ2V0UHJvZ3JhbUluZm9Mb2codGhpcy5wcm9ncmFtKSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIHNldFVuaWZvcm1zKHVuaWZvcm1zKSB7XG4gICAgdGhpcy5jb250ZXh0LnVzZVByb2dyYW1JbmZvKHRoaXMpO1xuICAgIE9iamVjdC5rZXlzKHVuaWZvcm1zKS5mb3JFYWNoKChuYW1lKSA9PiB7XG4gICAgICBjb25zdCBzZXR0ZXIgPSB0aGlzLnVuaWZvcm1TZXR0ZXJzW25hbWVdO1xuICAgICAgaWYgKHNldHRlcikgc2V0dGVyKHVuaWZvcm1zW25hbWVdKTtcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBzZXRUZXh0dXJlVW5pZm9ybVVuaXQobmFtZSwgdW5pdCkge1xuICAgIHRoaXMuY29udGV4dC51c2VQcm9ncmFtSW5mbyh0aGlzKTtcbiAgICBjb25zdCBzZXR0ZXIgPSB0aGlzLnRleHR1cmVTZXR0ZXJzW25hbWVdO1xuICAgIGlmIChzZXR0ZXIpIHNldHRlcih1bml0KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuXG5leHBvcnQgeyBleHBhbmRlZFR5cGVkQXJyYXksIFByb2dyYW1JbmZvLCBnZXRHTFR5cGVGb3JUeXBlZEFycmF5IH07XG4iLCJpbXBvcnQgdmVydCBmcm9tICcuL3ZlcnQuZ2xzbCdcbmltcG9ydCBmcmFnIGZyb20gJy4vZnJhZy5nbHNsJ1xuXG5leHBvcnQgZGVmYXVsdCB7dmVydCwgZnJhZ30iLCJpbXBvcnQgZGVmYXVsdFNoYWRlcnMgZnJvbSBcIi4vZGVmYXVsdFwiO1xuaW1wb3J0IHBvaW50TGlnaHRTaGFkZXJzIGZyb20gXCIuL3BvaW50TGlnaHRcIjtcblxuZXhwb3J0IHtkZWZhdWx0U2hhZGVycywgcG9pbnRMaWdodFNoYWRlcnN9IiwiaW1wb3J0IHZlcnQgZnJvbSAnLi92ZXJ0Lmdsc2wnXG5pbXBvcnQgZnJhZyBmcm9tICcuL2ZyYWcuZ2xzbCdcblxuZXhwb3J0IGRlZmF1bHQge3ZlcnQsIGZyYWd9IiwiY29uc3Qgc2V0Q2FudmFzU2l6ZSA9IChjdHgsIHdpZHRoLCBoZWlnaHQpID0+IHtcbiAgY3R4LmNhbnZhcy53aWR0aCA9IHdpZHRoO1xuICBjdHguY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbn07XG5cbmNvbnN0IG1ha2VUZXh0dXJlID0gKGdsLCBjdHgpID0+IHtcbiAgY29uc3QgdGV4ID0gZ2wuY3JlYXRlVGV4dHVyZSgpO1xuICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCB0ZXgpO1xuXG4gIGdsLnRleEltYWdlMkQoXG4gICAgZ2wuVEVYVFVSRV8yRCxcbiAgICAwLFxuICAgIGdsLlJHQkEsXG4gICAgZ2wuUkdCQSxcbiAgICBnbC5VTlNJR05FRF9CWVRFLFxuICAgIGN0eC5jYW52YXNcbiAgKTtcbiAgcmV0dXJuIHRleDtcbn07XG5jb25zdCBtYWtlU3RyaXBlVGV4dHVyZSA9IChnbCwgb3B0aW9ucykgPT4ge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgdmFyIHdpZHRoID0gb3B0aW9ucy53aWR0aCB8fCA0O1xuICB2YXIgaGVpZ2h0ID0gb3B0aW9ucy5oZWlnaHQgfHwgNDtcbiAgdmFyIGNvbG9yMSA9IG9wdGlvbnMuY29sb3IxIHx8IFwicmdiYSgxLDAsMCwwLjEpXCI7XG4gIHZhciBjb2xvcjIgPSBvcHRpb25zLmNvbG9yMiB8fCBcInJnYmEoMSwxLDEsMC41KVwiO1xuICBjb25zdCBjdHggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpLmdldENvbnRleHQoXCIyZFwiKTtcbiAgc2V0Q2FudmFzU2l6ZShjdHgsIHdpZHRoLCBoZWlnaHQpO1xuXG4gIGN0eC5maWxsU3R5bGUgPSBjb2xvcjE7XG4gIGN0eC5maWxsUmVjdCgwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcbiAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yMjtcbiAgY3R4LmZpbGxSZWN0KDAsIDAsIHdpZHRoLCBoZWlnaHQgLyAyKTtcblxuICByZXR1cm4gbWFrZVRleHR1cmUoZ2wsIGN0eCk7XG59O1xuY29uc3QgbWFrZVN0cmlwZUltZyA9IChvcHRpb25zKSA9PiB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICB2YXIgd2lkdGggPSBvcHRpb25zLndpZHRoIHx8IDQ7XG4gIHZhciBoZWlnaHQgPSBvcHRpb25zLmhlaWdodCB8fCA0O1xuICB2YXIgY29sb3IxID0gb3B0aW9ucy5jb2xvcjEgfHwgXCJyZ2JhKDEsMCwwLDAuNSlcIjtcbiAgdmFyIGNvbG9yMiA9IG9wdGlvbnMuY29sb3IyIHx8IFwicmdiYSgwLDAsMSwxKVwiO1xuICBjb25zdCBjdHggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpLmdldENvbnRleHQoXCIyZFwiKTtcbiAgc2V0Q2FudmFzU2l6ZShjdHgsIHdpZHRoLCBoZWlnaHQpO1xuXG4gIGN0eC5maWxsU3R5bGUgPSBjb2xvcjE7XG4gIGN0eC5maWxsUmVjdCgwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcbiAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yMjtcbiAgY3R4LmZpbGxSZWN0KDAsIDAsIHdpZHRoLCBoZWlnaHQgLyAyKTtcblxuICByZXR1cm4gY3R4LmNhbnZhcztcbn07XG5jb25zdCBtYWtlSW1nRnJvbVN2Z1htbCA9ICh4bWwsIG9wdGlvbnMgPSB7fSkgPT4ge1xuICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICB2YXIgc3ZnNjQgPSBidG9hKHhtbCk7XG4gIHZhciBiNjRTdGFydCA9IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxcIjtcbiAgdmFyIGltYWdlNjQgPSBiNjRTdGFydCArIHN2ZzY0O1xuICBpbWcuc3JjID0gaW1hZ2U2NDtcblxuICBjb25zdCB3aWR0aCA9IG9wdGlvbnMud2lkdGggfHwgMTAwO1xuICBjb25zdCBoZWlnaHQgPSBvcHRpb25zLmhlaWdodCB8fCAxMDA7XG4gIGNvbnN0IHggPSBvcHRpb25zLnggfHwgMTtcbiAgY29uc3QgeSA9IG9wdGlvbnMueSB8fCA1MDtcblxuICBjb25zdCBjdHggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpLmdldENvbnRleHQoXCIyZFwiKTtcbiAgc2V0Q2FudmFzU2l6ZShjdHgsIHdpZHRoLCBoZWlnaHQpO1xuXG4gIGN0eC5kcmF3SW1hZ2UoaW1nLCB4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcbiAgY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgwLDAsMCwxKVwiO1xuICBjdHguZmlsbFJlY3QoMCwgMCwgd2lkdGgsIGhlaWdodCk7XG4gIHJldHVybiBjdHguaW1nO1xufTtcbmNvbnN0IHNldFRleHR1cmVVbml0cyA9IChnbCwgdGV4dHVyZSwgdW5pdE51bSkgPT4ge1xuICBnbC5hY3RpdmVUZXh0dXJlKGdsLlRFWFRVUkUwICsgdW5pdE51bSk7XG4gIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIHRleHR1cmUpO1xufTtcblxuY2xhc3MgVGV4dHVyZUluZm8ge1xuICBzdGF0aWMgbWFrZUltZ0Zyb21TdmdYbWwgPSBtYWtlSW1nRnJvbVN2Z1htbDtcbiAgY29uc3RydWN0b3IoZ2wpIHtcbiAgICB0aGlzLnRleHR1cmUgPSBnbC5jcmVhdGVUZXh0dXJlKCk7XG4gICAgdGhpcy5nbCA9IGdsXG4gIH1cbiAgZnJvbUltYWdlKGltYWdlKXtcbiAgICBjb25zdCB7Z2x9ID0gdGhpc1xuICAgIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIHRoaXMudGV4dHVyZSk7XG4gICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfV1JBUF9TLCBnbC5DTEFNUF9UT19FREdFKTtcbiAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9XUkFQX1QsIGdsLkNMQU1QX1RPX0VER0UpO1xuICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01JTl9GSUxURVIsIGdsLk5FQVJFU1QpO1xuICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01BR19GSUxURVIsIGdsLk5FQVJFU1QpO1xuICAgICAgZ2wudGV4SW1hZ2UyRChcbiAgICAgICAgZ2wuVEVYVFVSRV8yRCxcbiAgICAgICAgMCxcbiAgICAgICAgZ2wuUkdCQSxcbiAgICAgICAgZ2wuUkdCQSxcbiAgICAgICAgZ2wuVU5TSUdORURfQllURSxcbiAgICAgICAgaW1hZ2VcbiAgICAgICk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgZ2V0VGV4dHVyZSgpe1xuICAgIHJldHVybiB0aGlzLnRleHR1cmVcbiAgfVxufVxuZXhwb3J0IHsgbWFrZUltZ0Zyb21TdmdYbWwsIG1ha2VTdHJpcGVJbWcsIFRleHR1cmVJbmZvfTtcbiIsImNvbnN0IEFBQkIgPSByZXF1aXJlKCcuL3NyYy9hYWJiJylcbmNvbnN0IG0zID0gcmVxdWlyZSgnLi9zcmMvbTMnKVxuY29uc3QgbTQgPSByZXF1aXJlKCcuL3NyYy9tNCcpXG5jb25zdCB2ZWMzID0gcmVxdWlyZSgnLi9zcmMvdmVjMycpXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIEFBQkIsIG0zLCBtNCwgdmVjM1xufSIsIm1vZHVsZS5leHBvcnRzID0gY2xhc3MgQUFCQiB7XG4gIGNvbnN0cnVjdG9yKG1pbiwgbWF4KSB7XG4gICAgdGhpcy5taW4gPSBtaW47XG4gICAgdGhpcy5tYXggPSBtYXg7XG4gIH1cbn07XG4iLCJjb25zdCBtMyA9IHtcbiAgICBtdWx0aXBseSA6IGZ1bmN0aW9uKGIsIGEpIHtcbiAgICAgICAgdmFyIGEwMCA9IGFbMCAqIDMgKyAwXTtcbiAgICAgICAgdmFyIGEwMSA9IGFbMCAqIDMgKyAxXTtcbiAgICAgICAgdmFyIGEwMiA9IGFbMCAqIDMgKyAyXTtcbiAgICAgICAgdmFyIGExMCA9IGFbMSAqIDMgKyAwXTtcbiAgICAgICAgdmFyIGExMSA9IGFbMSAqIDMgKyAxXTtcbiAgICAgICAgdmFyIGExMiA9IGFbMSAqIDMgKyAyXTtcbiAgICAgICAgdmFyIGEyMCA9IGFbMiAqIDMgKyAwXTtcbiAgICAgICAgdmFyIGEyMSA9IGFbMiAqIDMgKyAxXTtcbiAgICAgICAgdmFyIGEyMiA9IGFbMiAqIDMgKyAyXTtcbiAgICAgICAgdmFyIGIwMCA9IGJbMCAqIDMgKyAwXTtcbiAgICAgICAgdmFyIGIwMSA9IGJbMCAqIDMgKyAxXTtcbiAgICAgICAgdmFyIGIwMiA9IGJbMCAqIDMgKyAyXTtcbiAgICAgICAgdmFyIGIxMCA9IGJbMSAqIDMgKyAwXTtcbiAgICAgICAgdmFyIGIxMSA9IGJbMSAqIDMgKyAxXTtcbiAgICAgICAgdmFyIGIxMiA9IGJbMSAqIDMgKyAyXTtcbiAgICAgICAgdmFyIGIyMCA9IGJbMiAqIDMgKyAwXTtcbiAgICAgICAgdmFyIGIyMSA9IGJbMiAqIDMgKyAxXTtcbiAgICAgICAgdmFyIGIyMiA9IGJbMiAqIDMgKyAyXTtcbiAgICBcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICBiMDAgKiBhMDAgKyBiMDEgKiBhMTAgKyBiMDIgKiBhMjAsXG4gICAgICAgICAgYjAwICogYTAxICsgYjAxICogYTExICsgYjAyICogYTIxLFxuICAgICAgICAgIGIwMCAqIGEwMiArIGIwMSAqIGExMiArIGIwMiAqIGEyMixcbiAgICAgICAgICBiMTAgKiBhMDAgKyBiMTEgKiBhMTAgKyBiMTIgKiBhMjAsXG4gICAgICAgICAgYjEwICogYTAxICsgYjExICogYTExICsgYjEyICogYTIxLFxuICAgICAgICAgIGIxMCAqIGEwMiArIGIxMSAqIGExMiArIGIxMiAqIGEyMixcbiAgICAgICAgICBiMjAgKiBhMDAgKyBiMjEgKiBhMTAgKyBiMjIgKiBhMjAsXG4gICAgICAgICAgYjIwICogYTAxICsgYjIxICogYTExICsgYjIyICogYTIxLFxuICAgICAgICAgIGIyMCAqIGEwMiArIGIyMSAqIGExMiArIGIyMiAqIGEyMixcbiAgICAgICAgXTtcbiAgICAgIH0sXG4gICAgICB4Um90YXRpb246IGZ1bmN0aW9uKGFuZ2xlSW5SYWRpYW5zKSB7XG4gICAgICAgIHZhciBjID0gTWF0aC5jb3MoYW5nbGVJblJhZGlhbnMpO1xuICAgICAgICB2YXIgcyA9IE1hdGguc2luKGFuZ2xlSW5SYWRpYW5zKTtcbiAgICAgXG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgMSwgMCwgMCwgXG4gICAgICAgICAgMCwgYywgcywgXG4gICAgICAgICAgMCwgLXMsIGNcbiAgICAgICAgXTtcbiAgICAgIH0sXG4gICAgIFxuICAgICAgeVJvdGF0aW9uOiBmdW5jdGlvbihhbmdsZUluUmFkaWFucykge1xuICAgICAgICB2YXIgYyA9IE1hdGguY29zKGFuZ2xlSW5SYWRpYW5zKTtcbiAgICAgICAgdmFyIHMgPSBNYXRoLnNpbihhbmdsZUluUmFkaWFucyk7XG4gICAgIFxuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgIGMsIDAsIC1zLCBcbiAgICAgICAgICAwLCAxLCAwLCBcbiAgICAgICAgICBzLCAwLCBjXG4gICAgICAgIF07XG4gICAgICB9LFxuICAgICBcbiAgICAgIHpSb3RhdGlvbjogZnVuY3Rpb24oYW5nbGVJblJhZGlhbnMpIHtcbiAgICAgICAgdmFyIGMgPSBNYXRoLmNvcyhhbmdsZUluUmFkaWFucyk7XG4gICAgICAgIHZhciBzID0gTWF0aC5zaW4oYW5nbGVJblJhZGlhbnMpO1xuICAgICBcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgYywgcywgMCwgXG4gICAgICAgICAgLXMsIGMsIDAsXG4gICAgICAgICAgIDAsIDAsIDFcbiAgICAgICAgXTtcbiAgICAgIH0sXG4gICAgICBtM1RvbTQgOiBmdW5jdGlvbihtKXtcbiAgICAgICAgY29uc3QgZHN0ID0gbmV3IEZsb2F0MzJBcnJheSgxNilcbiAgICAgICAgZHN0WyAwXSA9IG1bMF1cbiAgICAgICAgZHN0WyAxXSA9IG1bMV1cbiAgICAgICAgZHN0WyAyXSA9IG1bMl1cbiAgICAgICAgZHN0WyAzXSA9IDBcbiAgICAgICAgZHN0WyA0XSA9IG1bM11cbiAgICAgICAgZHN0WyA1XSA9IG1bNF1cbiAgICAgICAgZHN0WyA2XSA9IG1bNV1cbiAgICAgICAgZHN0WyA3XSA9IDBcbiAgICAgICAgZHN0WyA4XSA9IG1bNl1cbiAgICAgICAgZHN0WyA5XSA9IG1bN11cbiAgICAgICAgZHN0WzEwXSA9IG1bOF1cbiAgICAgICAgZHN0WzExXSA9IDBcbiAgICAgICAgZHN0WzEyXSA9IDBcbiAgICAgICAgZHN0WzEzXSA9IDBcbiAgICAgICAgZHN0WzE0XSA9IDBcbiAgICAgICAgZHN0WzE1XSA9IDFcbiAgICAgICAgcmV0dXJuIGRzdFxuICAgICAgfSxcbiAgICAgIHhSb3RhdGU6IGZ1bmN0aW9uKG0sIGFuZ2xlSW5SYWRpYW5zKSB7XG4gICAgICAgIHJldHVybiBtMy5tdWx0aXBseShtLCBtMy54Um90YXRpb24oYW5nbGVJblJhZGlhbnMpKTtcbiAgICAgIH0sXG4gICAgIFxuICAgICAgeVJvdGF0ZTogZnVuY3Rpb24obSwgYW5nbGVJblJhZGlhbnMpIHtcbiAgICAgICAgcmV0dXJuIG0zLm11bHRpcGx5KG0sIG0zLnlSb3RhdGlvbihhbmdsZUluUmFkaWFucykpO1xuICAgICAgfSxcbiAgICAgXG4gICAgICB6Um90YXRlOiBmdW5jdGlvbihtLCBhbmdsZUluUmFkaWFucykge1xuICAgICAgICByZXR1cm4gbTMubXVsdGlwbHkobSwgbTMuelJvdGF0aW9uKGFuZ2xlSW5SYWRpYW5zKSk7XG4gICAgICB9LFxuICAgICAgdHJhbnNmb3JtUG9pbnQgOiBmdW5jdGlvbihtLCB2LCBkc3QpIHtcbiAgICAgICAgZHN0ID0gZHN0IHx8IG5ldyBGbG9hdDMyQXJyYXkoMyk7XG4gICAgICAgIHZhciB2MCA9IHZbMF07XG4gICAgICAgIHZhciB2MSA9IHZbMV07XG4gICAgICAgIHZhciB2MiA9IHZbMl07XG4gICAgICAgIFxuICAgIFxuICAgICAgICBkc3RbMF0gPSAodjAgKiBtWzAgKiAzICsgMF0gKyB2MSAqIG1bMSAqIDMgKyAwXSArIHYyICogbVsyICogMyArIDBdICApIFxuICAgICAgICBkc3RbMV0gPSAodjAgKiBtWzAgKiAzICsgMV0gKyB2MSAqIG1bMSAqIDMgKyAxXSArIHYyICogbVsyICogMyArIDFdICApIFxuICAgICAgICBkc3RbMl0gPSAodjAgKiBtWzAgKiAzICsgMl0gKyB2MSAqIG1bMSAqIDMgKyAyXSArIHYyICogbVsyICogMyArIDJdICkgXG4gICAgXG4gICAgICAgIHJldHVybiBkc3Q7XG4gICAgICB9LFxuICAgICAgaWRlbnRpdHkgOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAxLCAwLCAwLFxuICAgICAgICAgIDAsIDEsIDAsXG4gICAgICAgICAgMCwgMCwgMSxcbiAgICAgICAgXTtcbiAgICAgIH0sXG4gICAgICB0cmFuc3Bvc2UgOiBmdW5jdGlvbihtKXtcbiAgICAgICAgIFxuICAgICAgICAgIGRzdCA9IG5ldyBGbG9hdDMyQXJyYXkoOSlcbiAgICAgICAgICBkc3RbMF0gPSBtWzBdXG4gICAgICAgICAgZHN0WzFdID0gbVszXVxuICAgICAgICAgIGRzdFsyXSA9IG1bNl1cbiAgICAgICAgICBkc3RbM10gPSBtWzFdXG4gICAgICAgICAgZHN0WzRdID0gbVs0XVxuICAgICAgICAgIGRzdFs1XSA9IG1bN11cbiAgICAgICAgICBkc3RbNl0gPSBtWzJdXG4gICAgICAgICAgZHN0WzddID0gbVs1XVxuICAgICAgICAgIGRzdFs4XSA9IG1bOF1cbiAgICAgICAgICByZXR1cm4gZHN0XG4gICAgICB9LFxuICAgICAgc2NhbGluZyA6IGZ1bmN0aW9uKHN4LHN5LHN6KXtcbiAgICAgICAgcmV0dXJuIG5ldyBGbG9hdDMyQXJyYXkoW1xuICAgICAgICAgICAgICAgICAgICBzeCwgMCwgMCxcbiAgICAgICAgICAgICAgICAgICAgMCwgc3ksIDAsXG4gICAgICAgICAgICAgICAgICAgIDAsICAwLCBzelxuICAgICAgICAgICAgICBdKVxuICAgICAgfSxcbiAgICAgIHNjYWxlIDogZnVuY3Rpb24obSwgc3gsc3ksc3ope1xuICAgICAgICByZXR1cm4gbTMubXVsdGlwbHkobSwgbTMuc2NhbGluZyhzeCwgc3ksIHN6KSlcbiAgICAgIH0sXG4gICAgICAvKlxuICAgICAgMCAxIDJcbiAgICAgIDMgNCA1XG4gICAgICA2IDcgOFxuICAgICAgKi9cbiAgICAgIGludmVyc2UgOiBmdW5jdGlvbihtKXtcbiAgICAgICBjb25zdCBkZXQgPSBtWzBdICogbVs0XSAqIG1bOF0gKyBcbiAgICAgICAgICAgICAgICAgICBtWzJdICogbVszXSAqIG1bN10gK1xuICAgICAgICAgICAgICAgICAgIG1bMV0gKiBtWzVdICogbVs2XSAtXG4gICAgICAgICAgICAgICAgICAgbVsyXSAqIG1bNF0gKiBtWzZdIC1cbiAgICAgICAgICAgICAgICAgICBtWzBdICogbVs1XSAqIG1bN10gLVxuICAgICAgICAgICAgICAgICAgIG1bOF0gKiBtWzNdICogbVsyXSBcbiAgICAgICAgY29uc3QgZHN0ID0gbmV3IEZsb2F0MzJBcnJheSg5KVxuICAgICAgICBkc3RbMF0gPSAobVs0XSAqIG1bOF0gLSBtWzddICogbVs1XSkgLyBkZXRcbiAgICAgICAgZHN0WzFdID0gKG1bM10gKiBtWzhdIC0gbVs2XSAqIG1bNV0pIC8gZGV0XG4gICAgICAgIGRzdFsyXSA9IChtWzNdICogbVs3XSAtIG1bNl0gKiBtWzRdKSAvIGRldFxuICAgICAgICBkc3RbM10gPSAobVsxXSAqIG1bOF0gLSBtWzJdICogbVs3XSkgLyBkZXRcbiAgICAgICAgZHN0WzRdID0gKG1bMF0gKiBtWzhdIC0gbVsyXSAqIG1bNl0pIC8gZGV0XG4gICAgICAgIGRzdFs1XSA9IChtWzBdICogbVs3XSAtIG1bMV0gKiBtWzZdKSAvIGRldFxuICAgICAgICBkc3RbNl0gPSAobVsxXSAqIG1bNV0gLSBtWzJdICogbVs0XSkgLyBkZXRcbiAgICAgICAgZHN0WzddID0gKG1bMF0gKiBtWzVdIC0gbVsyXSAqIG1bM10pIC8gZGV0XG4gICAgICAgIGRzdFs4XSA9IChtWzBdICogbVs0XSAtIG1bMV0gKiBtWzRdKSAvIGRldFxuICAgICAgICBcbiAgICAgIH0sXG4gICAgICB0b1N0cmluZyhtKXtcbiAgICAgICAgcmV0dXJuIG0ucmVkdWNlKChhY2MsZWwsaWR4KSA9PiAoaWR4KSAlIDMgPT09IDAgPyBhY2MgKz0gJ1xcbicgKyBlbCA6IGFjYyArPSAnICcgKyBlbCApXG4gICAgICB9LFxuICAgICAgZG90KHYxLHYyKXtcbiAgICAgICAgcmV0dXJuIHYxWzBdKnYyWzBdICsgdjFbMV0qdjJbMV0gKyB2MVsyXSAqIHYyWzJdXG4gICAgICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IG0zIiwiY29uc3QgTWF0VHlwZSA9IEZsb2F0MzJBcnJheTtcbmNvbnN0IHtub3JtfSA9IHJlcXVpcmUoJy4vdmVjMycpXG5jb25zdCBtNCA9IHtcbiAgbXVsdGlwbHk6IGZ1bmN0aW9uIChhLCBiLCBkc3QpIHtcbiAgICBkc3QgPSBkc3QgfHwgbmV3IE1hdFR5cGUoMTYpO1xuICAgIHZhciBhMDAgPSBhWzAgKiA0ICsgMF07XG4gICAgdmFyIGEwMSA9IGFbMCAqIDQgKyAxXTtcbiAgICB2YXIgYTAyID0gYVswICogNCArIDJdO1xuICAgIHZhciBhMDMgPSBhWzAgKiA0ICsgM107XG4gICAgdmFyIGExMCA9IGFbMSAqIDQgKyAwXTtcbiAgICB2YXIgYTExID0gYVsxICogNCArIDFdO1xuICAgIHZhciBhMTIgPSBhWzEgKiA0ICsgMl07XG4gICAgdmFyIGExMyA9IGFbMSAqIDQgKyAzXTtcbiAgICB2YXIgYTIwID0gYVsyICogNCArIDBdO1xuICAgIHZhciBhMjEgPSBhWzIgKiA0ICsgMV07XG4gICAgdmFyIGEyMiA9IGFbMiAqIDQgKyAyXTtcbiAgICB2YXIgYTIzID0gYVsyICogNCArIDNdO1xuICAgIHZhciBhMzAgPSBhWzMgKiA0ICsgMF07XG4gICAgdmFyIGEzMSA9IGFbMyAqIDQgKyAxXTtcbiAgICB2YXIgYTMyID0gYVszICogNCArIDJdO1xuICAgIHZhciBhMzMgPSBhWzMgKiA0ICsgM107XG4gICAgdmFyIGIwMCA9IGJbMCAqIDQgKyAwXTtcbiAgICB2YXIgYjAxID0gYlswICogNCArIDFdO1xuICAgIHZhciBiMDIgPSBiWzAgKiA0ICsgMl07XG4gICAgdmFyIGIwMyA9IGJbMCAqIDQgKyAzXTtcbiAgICB2YXIgYjEwID0gYlsxICogNCArIDBdO1xuICAgIHZhciBiMTEgPSBiWzEgKiA0ICsgMV07XG4gICAgdmFyIGIxMiA9IGJbMSAqIDQgKyAyXTtcbiAgICB2YXIgYjEzID0gYlsxICogNCArIDNdO1xuICAgIHZhciBiMjAgPSBiWzIgKiA0ICsgMF07XG4gICAgdmFyIGIyMSA9IGJbMiAqIDQgKyAxXTtcbiAgICB2YXIgYjIyID0gYlsyICogNCArIDJdO1xuICAgIHZhciBiMjMgPSBiWzIgKiA0ICsgM107XG4gICAgdmFyIGIzMCA9IGJbMyAqIDQgKyAwXTtcbiAgICB2YXIgYjMxID0gYlszICogNCArIDFdO1xuICAgIHZhciBiMzIgPSBiWzMgKiA0ICsgMl07XG4gICAgdmFyIGIzMyA9IGJbMyAqIDQgKyAzXTtcbiAgICBkc3RbMF0gPSBiMDAgKiBhMDAgKyBiMDEgKiBhMTAgKyBiMDIgKiBhMjAgKyBiMDMgKiBhMzA7XG4gICAgZHN0WzFdID0gYjAwICogYTAxICsgYjAxICogYTExICsgYjAyICogYTIxICsgYjAzICogYTMxO1xuICAgIGRzdFsyXSA9IGIwMCAqIGEwMiArIGIwMSAqIGExMiArIGIwMiAqIGEyMiArIGIwMyAqIGEzMjtcbiAgICBkc3RbM10gPSBiMDAgKiBhMDMgKyBiMDEgKiBhMTMgKyBiMDIgKiBhMjMgKyBiMDMgKiBhMzM7XG4gICAgZHN0WzRdID0gYjEwICogYTAwICsgYjExICogYTEwICsgYjEyICogYTIwICsgYjEzICogYTMwO1xuICAgIGRzdFs1XSA9IGIxMCAqIGEwMSArIGIxMSAqIGExMSArIGIxMiAqIGEyMSArIGIxMyAqIGEzMTtcbiAgICBkc3RbNl0gPSBiMTAgKiBhMDIgKyBiMTEgKiBhMTIgKyBiMTIgKiBhMjIgKyBiMTMgKiBhMzI7XG4gICAgZHN0WzddID0gYjEwICogYTAzICsgYjExICogYTEzICsgYjEyICogYTIzICsgYjEzICogYTMzO1xuICAgIGRzdFs4XSA9IGIyMCAqIGEwMCArIGIyMSAqIGExMCArIGIyMiAqIGEyMCArIGIyMyAqIGEzMDtcbiAgICBkc3RbOV0gPSBiMjAgKiBhMDEgKyBiMjEgKiBhMTEgKyBiMjIgKiBhMjEgKyBiMjMgKiBhMzE7XG4gICAgZHN0WzEwXSA9IGIyMCAqIGEwMiArIGIyMSAqIGExMiArIGIyMiAqIGEyMiArIGIyMyAqIGEzMjtcbiAgICBkc3RbMTFdID0gYjIwICogYTAzICsgYjIxICogYTEzICsgYjIyICogYTIzICsgYjIzICogYTMzO1xuICAgIGRzdFsxMl0gPSBiMzAgKiBhMDAgKyBiMzEgKiBhMTAgKyBiMzIgKiBhMjAgKyBiMzMgKiBhMzA7XG4gICAgZHN0WzEzXSA9IGIzMCAqIGEwMSArIGIzMSAqIGExMSArIGIzMiAqIGEyMSArIGIzMyAqIGEzMTtcbiAgICBkc3RbMTRdID0gYjMwICogYTAyICsgYjMxICogYTEyICsgYjMyICogYTIyICsgYjMzICogYTMyO1xuICAgIGRzdFsxNV0gPSBiMzAgKiBhMDMgKyBiMzEgKiBhMTMgKyBiMzIgKiBhMjMgKyBiMzMgKiBhMzM7XG4gICAgcmV0dXJuIGRzdDtcbiAgfSxcblxuICB0cmFuc2xhdGlvbjogZnVuY3Rpb24gKHR4LCB0eSwgdHopIHtcbiAgICByZXR1cm4gWzEsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIHR4LCB0eSwgdHosIDFdO1xuICB9LFxuXG4gIHhSb3RhdGlvbjogZnVuY3Rpb24gKGFuZ2xlSW5SYWRpYW5zKSB7XG4gICAgdmFyIGMgPSBNYXRoLmNvcyhhbmdsZUluUmFkaWFucyk7XG4gICAgdmFyIHMgPSBNYXRoLnNpbihhbmdsZUluUmFkaWFucyk7XG5cbiAgICByZXR1cm4gWzEsIDAsIDAsIDAsIDAsIGMsIHMsIDAsIDAsIC1zLCBjLCAwLCAwLCAwLCAwLCAxXTtcbiAgfSxcblxuICB5Um90YXRpb246IGZ1bmN0aW9uIChhbmdsZUluUmFkaWFucykge1xuICAgIHZhciBjID0gTWF0aC5jb3MoYW5nbGVJblJhZGlhbnMpO1xuICAgIHZhciBzID0gTWF0aC5zaW4oYW5nbGVJblJhZGlhbnMpO1xuXG4gICAgcmV0dXJuIFtjLCAwLCAtcywgMCwgMCwgMSwgMCwgMCwgcywgMCwgYywgMCwgMCwgMCwgMCwgMV07XG4gIH0sXG5cbiAgelJvdGF0aW9uOiBmdW5jdGlvbiAoYW5nbGVJblJhZGlhbnMpIHtcbiAgICB2YXIgYyA9IE1hdGguY29zKGFuZ2xlSW5SYWRpYW5zKTtcbiAgICB2YXIgcyA9IE1hdGguc2luKGFuZ2xlSW5SYWRpYW5zKTtcblxuICAgIHJldHVybiBbYywgcywgMCwgMCwgLXMsIGMsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDFdO1xuICB9LFxuXG4gIHNjYWxpbmc6IGZ1bmN0aW9uIChzeCwgc3ksIHN6KSB7XG4gICAgcmV0dXJuIFtzeCwgMCwgMCwgMCwgMCwgc3ksIDAsIDAsIDAsIDAsIHN6LCAwLCAwLCAwLCAwLCAxXTtcbiAgfSxcbiAgdHJhbnNsYXRlOiBmdW5jdGlvbiAobSwgdHgsIHR5LCB0eikge1xuICAgIHJldHVybiBtNC5tdWx0aXBseShtLCBtNC50cmFuc2xhdGlvbih0eCwgdHksIHR6KSk7XG4gIH0sXG5cbiAgeFJvdGF0ZTogZnVuY3Rpb24gKG0sIGFuZ2xlSW5SYWRpYW5zKSB7XG4gICAgcmV0dXJuIG00Lm11bHRpcGx5KG0sIG00LnhSb3RhdGlvbihhbmdsZUluUmFkaWFucykpO1xuICB9LFxuXG4gIHlSb3RhdGU6IGZ1bmN0aW9uIChtLCBhbmdsZUluUmFkaWFucykge1xuICAgIHJldHVybiBtNC5tdWx0aXBseShtLCBtNC55Um90YXRpb24oYW5nbGVJblJhZGlhbnMpKTtcbiAgfSxcblxuICB6Um90YXRlOiBmdW5jdGlvbiAobSwgYW5nbGVJblJhZGlhbnMpIHtcbiAgICByZXR1cm4gbTQubXVsdGlwbHkobSwgbTQuelJvdGF0aW9uKGFuZ2xlSW5SYWRpYW5zKSk7XG4gIH0sXG5cbiAgc2NhbGU6IGZ1bmN0aW9uIChtLCBzeCwgc3ksIHN6KSB7XG4gICAgcmV0dXJuIG00Lm11bHRpcGx5KG0sIG00LnNjYWxpbmcoc3gsIHN5LCBzeikpO1xuICB9LFxuICBtYWtlT3J0OiBmdW5jdGlvbiAodikge1xuICAgIGNvbnN0IG8gPSBbMCwgMCwgMF07XG4gICAgY29uc3Qgbm9ybSA9IE1hdGguc3FydCh2WzBdICogdlswXSArIHZbMV0gKiB2WzFdICsgdlsyXSAqIHZbMl0pO1xuICAgIG9bMF0gPSB2WzBdIC8gbm9ybTtcbiAgICBvWzFdID0gdlsxXSAvIG5vcm07XG4gICAgb1syXSA9IHZbMl0gLyBub3JtO1xuICAgIHJldHVybiBvO1xuICB9LFxuICBwcm9qZWN0aW9uOiBmdW5jdGlvbiAod2lkdGgsIGhlaWdodCwgZGVwdGgpIHtcbiAgICAvLyDQrdGC0LAg0LzQsNGC0YDQuNGG0LAg0L/QtdGA0LXQstC+0YDQsNGH0LjQstCw0LXRgiBZLCDRh9GC0L7QsdGLIDAg0LHRi9C7INC90LDQstC10YDRhdGDXG4gICAgcmV0dXJuIFtcbiAgICAgIDIgLyB3aWR0aCxcbiAgICAgIDAsXG4gICAgICAwLFxuICAgICAgMCxcbiAgICAgIDAsXG4gICAgICAtMiAvIGhlaWdodCxcbiAgICAgIDAsXG4gICAgICAwLFxuICAgICAgMCxcbiAgICAgIDAsXG4gICAgICAyIC8gZGVwdGgsXG4gICAgICAwLFxuICAgICAgLTEsXG4gICAgICAxLFxuICAgICAgMCxcbiAgICAgIDEsXG4gICAgXTtcbiAgfSxcbiAgcGVyc3BlY3RpdmU6IGZ1bmN0aW9uIChmaWVsZE9mVmlld0luUmFkaWFucywgYXNwZWN0LCBuZWFyLCBmYXIpIHtcbiAgICB2YXIgZiA9IE1hdGgudGFuKE1hdGguUEkgKiAwLjUgLSAwLjUgKiBmaWVsZE9mVmlld0luUmFkaWFucyk7XG4gICAgdmFyIHJhbmdlSW52ID0gMS4wIC8gKG5lYXIgLSBmYXIpO1xuXG4gICAgcmV0dXJuIFtcbiAgICAgIGYgLyBhc3BlY3QsXG4gICAgICAwLFxuICAgICAgMCxcbiAgICAgIDAsXG4gICAgICAwLFxuICAgICAgZixcbiAgICAgIDAsXG4gICAgICAwLFxuICAgICAgMCxcbiAgICAgIDAsXG4gICAgICAobmVhciArIGZhcikgKiByYW5nZUludixcbiAgICAgIC0xLFxuICAgICAgMCxcbiAgICAgIDAsXG4gICAgICBuZWFyICogZmFyICogcmFuZ2VJbnYgKiAyLFxuICAgICAgMCxcbiAgICBdO1xuICB9LFxuICBpbnZlcnNlOiBmdW5jdGlvbiAobSkge1xuICAgIHZhciBtMDAgPSBtWzAgKiA0ICsgMF07XG4gICAgdmFyIG0wMSA9IG1bMCAqIDQgKyAxXTtcbiAgICB2YXIgbTAyID0gbVswICogNCArIDJdO1xuICAgIHZhciBtMDMgPSBtWzAgKiA0ICsgM107XG4gICAgdmFyIG0xMCA9IG1bMSAqIDQgKyAwXTtcbiAgICB2YXIgbTExID0gbVsxICogNCArIDFdO1xuICAgIHZhciBtMTIgPSBtWzEgKiA0ICsgMl07XG4gICAgdmFyIG0xMyA9IG1bMSAqIDQgKyAzXTtcbiAgICB2YXIgbTIwID0gbVsyICogNCArIDBdO1xuICAgIHZhciBtMjEgPSBtWzIgKiA0ICsgMV07XG4gICAgdmFyIG0yMiA9IG1bMiAqIDQgKyAyXTtcbiAgICB2YXIgbTIzID0gbVsyICogNCArIDNdO1xuICAgIHZhciBtMzAgPSBtWzMgKiA0ICsgMF07XG4gICAgdmFyIG0zMSA9IG1bMyAqIDQgKyAxXTtcbiAgICB2YXIgbTMyID0gbVszICogNCArIDJdO1xuICAgIHZhciBtMzMgPSBtWzMgKiA0ICsgM107XG4gICAgdmFyIHRtcF8wID0gbTIyICogbTMzO1xuICAgIHZhciB0bXBfMSA9IG0zMiAqIG0yMztcbiAgICB2YXIgdG1wXzIgPSBtMTIgKiBtMzM7XG4gICAgdmFyIHRtcF8zID0gbTMyICogbTEzO1xuICAgIHZhciB0bXBfNCA9IG0xMiAqIG0yMztcbiAgICB2YXIgdG1wXzUgPSBtMjIgKiBtMTM7XG4gICAgdmFyIHRtcF82ID0gbTAyICogbTMzO1xuICAgIHZhciB0bXBfNyA9IG0zMiAqIG0wMztcbiAgICB2YXIgdG1wXzggPSBtMDIgKiBtMjM7XG4gICAgdmFyIHRtcF85ID0gbTIyICogbTAzO1xuICAgIHZhciB0bXBfMTAgPSBtMDIgKiBtMTM7XG4gICAgdmFyIHRtcF8xMSA9IG0xMiAqIG0wMztcbiAgICB2YXIgdG1wXzEyID0gbTIwICogbTMxO1xuICAgIHZhciB0bXBfMTMgPSBtMzAgKiBtMjE7XG4gICAgdmFyIHRtcF8xNCA9IG0xMCAqIG0zMTtcbiAgICB2YXIgdG1wXzE1ID0gbTMwICogbTExO1xuICAgIHZhciB0bXBfMTYgPSBtMTAgKiBtMjE7XG4gICAgdmFyIHRtcF8xNyA9IG0yMCAqIG0xMTtcbiAgICB2YXIgdG1wXzE4ID0gbTAwICogbTMxO1xuICAgIHZhciB0bXBfMTkgPSBtMzAgKiBtMDE7XG4gICAgdmFyIHRtcF8yMCA9IG0wMCAqIG0yMTtcbiAgICB2YXIgdG1wXzIxID0gbTIwICogbTAxO1xuICAgIHZhciB0bXBfMjIgPSBtMDAgKiBtMTE7XG4gICAgdmFyIHRtcF8yMyA9IG0xMCAqIG0wMTtcblxuICAgIHZhciB0MCA9XG4gICAgICB0bXBfMCAqIG0xMSArXG4gICAgICB0bXBfMyAqIG0yMSArXG4gICAgICB0bXBfNCAqIG0zMSAtXG4gICAgICAodG1wXzEgKiBtMTEgKyB0bXBfMiAqIG0yMSArIHRtcF81ICogbTMxKTtcbiAgICB2YXIgdDEgPVxuICAgICAgdG1wXzEgKiBtMDEgK1xuICAgICAgdG1wXzYgKiBtMjEgK1xuICAgICAgdG1wXzkgKiBtMzEgLVxuICAgICAgKHRtcF8wICogbTAxICsgdG1wXzcgKiBtMjEgKyB0bXBfOCAqIG0zMSk7XG4gICAgdmFyIHQyID1cbiAgICAgIHRtcF8yICogbTAxICtcbiAgICAgIHRtcF83ICogbTExICtcbiAgICAgIHRtcF8xMCAqIG0zMSAtXG4gICAgICAodG1wXzMgKiBtMDEgKyB0bXBfNiAqIG0xMSArIHRtcF8xMSAqIG0zMSk7XG4gICAgdmFyIHQzID1cbiAgICAgIHRtcF81ICogbTAxICtcbiAgICAgIHRtcF84ICogbTExICtcbiAgICAgIHRtcF8xMSAqIG0yMSAtXG4gICAgICAodG1wXzQgKiBtMDEgKyB0bXBfOSAqIG0xMSArIHRtcF8xMCAqIG0yMSk7XG5cbiAgICB2YXIgZCA9IDEuMCAvIChtMDAgKiB0MCArIG0xMCAqIHQxICsgbTIwICogdDIgKyBtMzAgKiB0Myk7XG5cbiAgICByZXR1cm4gW1xuICAgICAgZCAqIHQwLFxuICAgICAgZCAqIHQxLFxuICAgICAgZCAqIHQyLFxuICAgICAgZCAqIHQzLFxuICAgICAgZCAqXG4gICAgICAgICh0bXBfMSAqIG0xMCArXG4gICAgICAgICAgdG1wXzIgKiBtMjAgK1xuICAgICAgICAgIHRtcF81ICogbTMwIC1cbiAgICAgICAgICAodG1wXzAgKiBtMTAgKyB0bXBfMyAqIG0yMCArIHRtcF80ICogbTMwKSksXG4gICAgICBkICpcbiAgICAgICAgKHRtcF8wICogbTAwICtcbiAgICAgICAgICB0bXBfNyAqIG0yMCArXG4gICAgICAgICAgdG1wXzggKiBtMzAgLVxuICAgICAgICAgICh0bXBfMSAqIG0wMCArIHRtcF82ICogbTIwICsgdG1wXzkgKiBtMzApKSxcbiAgICAgIGQgKlxuICAgICAgICAodG1wXzMgKiBtMDAgK1xuICAgICAgICAgIHRtcF82ICogbTEwICtcbiAgICAgICAgICB0bXBfMTEgKiBtMzAgLVxuICAgICAgICAgICh0bXBfMiAqIG0wMCArIHRtcF83ICogbTEwICsgdG1wXzEwICogbTMwKSksXG4gICAgICBkICpcbiAgICAgICAgKHRtcF80ICogbTAwICtcbiAgICAgICAgICB0bXBfOSAqIG0xMCArXG4gICAgICAgICAgdG1wXzEwICogbTIwIC1cbiAgICAgICAgICAodG1wXzUgKiBtMDAgKyB0bXBfOCAqIG0xMCArIHRtcF8xMSAqIG0yMCkpLFxuICAgICAgZCAqXG4gICAgICAgICh0bXBfMTIgKiBtMTMgK1xuICAgICAgICAgIHRtcF8xNSAqIG0yMyArXG4gICAgICAgICAgdG1wXzE2ICogbTMzIC1cbiAgICAgICAgICAodG1wXzEzICogbTEzICsgdG1wXzE0ICogbTIzICsgdG1wXzE3ICogbTMzKSksXG4gICAgICBkICpcbiAgICAgICAgKHRtcF8xMyAqIG0wMyArXG4gICAgICAgICAgdG1wXzE4ICogbTIzICtcbiAgICAgICAgICB0bXBfMjEgKiBtMzMgLVxuICAgICAgICAgICh0bXBfMTIgKiBtMDMgKyB0bXBfMTkgKiBtMjMgKyB0bXBfMjAgKiBtMzMpKSxcbiAgICAgIGQgKlxuICAgICAgICAodG1wXzE0ICogbTAzICtcbiAgICAgICAgICB0bXBfMTkgKiBtMTMgK1xuICAgICAgICAgIHRtcF8yMiAqIG0zMyAtXG4gICAgICAgICAgKHRtcF8xNSAqIG0wMyArIHRtcF8xOCAqIG0xMyArIHRtcF8yMyAqIG0zMykpLFxuICAgICAgZCAqXG4gICAgICAgICh0bXBfMTcgKiBtMDMgK1xuICAgICAgICAgIHRtcF8yMCAqIG0xMyArXG4gICAgICAgICAgdG1wXzIzICogbTIzIC1cbiAgICAgICAgICAodG1wXzE2ICogbTAzICsgdG1wXzIxICogbTEzICsgdG1wXzIyICogbTIzKSksXG4gICAgICBkICpcbiAgICAgICAgKHRtcF8xNCAqIG0yMiArXG4gICAgICAgICAgdG1wXzE3ICogbTMyICtcbiAgICAgICAgICB0bXBfMTMgKiBtMTIgLVxuICAgICAgICAgICh0bXBfMTYgKiBtMzIgKyB0bXBfMTIgKiBtMTIgKyB0bXBfMTUgKiBtMjIpKSxcbiAgICAgIGQgKlxuICAgICAgICAodG1wXzIwICogbTMyICtcbiAgICAgICAgICB0bXBfMTIgKiBtMDIgK1xuICAgICAgICAgIHRtcF8xOSAqIG0yMiAtXG4gICAgICAgICAgKHRtcF8xOCAqIG0yMiArIHRtcF8yMSAqIG0zMiArIHRtcF8xMyAqIG0wMikpLFxuICAgICAgZCAqXG4gICAgICAgICh0bXBfMTggKiBtMTIgK1xuICAgICAgICAgIHRtcF8yMyAqIG0zMiArXG4gICAgICAgICAgdG1wXzE1ICogbTAyIC1cbiAgICAgICAgICAodG1wXzIyICogbTMyICsgdG1wXzE0ICogbTAyICsgdG1wXzE5ICogbTEyKSksXG4gICAgICBkICpcbiAgICAgICAgKHRtcF8yMiAqIG0yMiArXG4gICAgICAgICAgdG1wXzE2ICogbTAyICtcbiAgICAgICAgICB0bXBfMjEgKiBtMTIgLVxuICAgICAgICAgICh0bXBfMjAgKiBtMTIgKyB0bXBfMjMgKiBtMjIgKyB0bXBfMTcgKiBtMDIpKSxcbiAgICBdO1xuICB9LFxuICBsb29rQXQ6IGZ1bmN0aW9uIChjYW1lcmFQb3NpdGlvbiwgdGFyZ2V0LCB1cCkge1xuICAgIHZhciB6QXhpcyA9IG5vcm1hbGl6ZShzdWJ0cmFjdFZlY3RvcnMoY2FtZXJhUG9zaXRpb24sIHRhcmdldCkpO1xuICAgIHZhciB4QXhpcyA9IG5vcm1hbGl6ZShjcm9zcyh1cCwgekF4aXMpKTtcbiAgICB2YXIgeUF4aXMgPSBub3JtYWxpemUoY3Jvc3MoekF4aXMsIHhBeGlzKSk7XG5cbiAgICByZXR1cm4gW1xuICAgICAgeEF4aXNbMF0sXG4gICAgICB4QXhpc1sxXSxcbiAgICAgIHhBeGlzWzJdLFxuICAgICAgMCxcbiAgICAgIHlBeGlzWzBdLFxuICAgICAgeUF4aXNbMV0sXG4gICAgICB5QXhpc1syXSxcbiAgICAgIDAsXG4gICAgICB6QXhpc1swXSxcbiAgICAgIHpBeGlzWzFdLFxuICAgICAgekF4aXNbMl0sXG4gICAgICAwLFxuICAgICAgY2FtZXJhUG9zaXRpb25bMF0sXG4gICAgICBjYW1lcmFQb3NpdGlvblsxXSxcbiAgICAgIGNhbWVyYVBvc2l0aW9uWzJdLFxuICAgICAgMSxcbiAgICBdO1xuICB9LFxuICBjb3B5OiBmdW5jdGlvbiAoc3JjKSB7XG4gICAgY29uc3QgZHN0ID0gbmV3IE1hdFR5cGUoMTYpO1xuXG4gICAgZHN0WzBdID0gc3JjWzBdO1xuICAgIGRzdFsxXSA9IHNyY1sxXTtcbiAgICBkc3RbMl0gPSBzcmNbMl07XG4gICAgZHN0WzNdID0gc3JjWzNdO1xuICAgIGRzdFs0XSA9IHNyY1s0XTtcbiAgICBkc3RbNV0gPSBzcmNbNV07XG4gICAgZHN0WzZdID0gc3JjWzZdO1xuICAgIGRzdFs3XSA9IHNyY1s3XTtcbiAgICBkc3RbOF0gPSBzcmNbOF07XG4gICAgZHN0WzldID0gc3JjWzldO1xuICAgIGRzdFsxMF0gPSBzcmNbMTBdO1xuICAgIGRzdFsxMV0gPSBzcmNbMTFdO1xuICAgIGRzdFsxMl0gPSBzcmNbMTJdO1xuICAgIGRzdFsxM10gPSBzcmNbMTNdO1xuICAgIGRzdFsxNF0gPSBzcmNbMTRdO1xuICAgIGRzdFsxNV0gPSBzcmNbMTVdO1xuXG4gICAgcmV0dXJuIGRzdDtcbiAgfSxcbiAgdmVjdG9yU3VtOiBmdW5jdGlvbiAodjEsIHYyKSB7XG4gICAgY29uc3QgdmVjdG9yID0gWzAsIDAsIDBdO1xuICAgIHZlY3RvclswXSA9IHYxWzBdICsgdjJbMF07XG4gICAgdmVjdG9yWzFdID0gdjFbMV0gKyB2MlsxXTtcbiAgICB2ZWN0b3JbMl0gPSB2MVsyXSArIHYyWzJdO1xuICAgIHJldHVybiB2ZWN0b3I7XG4gIH0sXG4gIGNyb3NzOiBmdW5jdGlvbiAoYSwgYikge1xuICAgIHJldHVybiBbXG4gICAgICBhWzFdICogYlsyXSAtIGFbMl0gKiBiWzFdLFxuICAgICAgYVsyXSAqIGJbMF0gLSBhWzBdICogYlsyXSxcbiAgICAgIGFbMF0gKiBiWzFdIC0gYVsxXSAqIGJbMF0sXG4gICAgXTtcbiAgfSxcbiAgdmVjdG9yU2NhbGFyUHJvZHVjdChhLCBzKSB7XG4gICAgbGV0IHYgPSBbMCwgMCwgMF07XG5cbiAgICB2WzBdID0gYVswXSAqIHM7XG4gICAgdlsxXSA9IGFbMV0gKiBzO1xuICAgIHZbMl0gPSBhWzJdICogcztcbiAgICBpZiAoaXNOYU4odlswXSkgfHwgaXNOYU4odlsyXSkgfHwgaXNOYU4odlsyXSkpIHJldHVybiBbMCwgMCwgMF07XG4gICAgcmV0dXJuIHY7XG4gIH0sXG5cbiAgc2NhbGFyUHJvZHVjdDogZnVuY3Rpb24gKHYxLCB2Mikge1xuICAgIGxldCBhID0gdjFbMF0gKiB2MlswXSArIHYxWzFdICogdjJbMV0gKyB2MVsyXSAqIHYyWzJdO1xuXG4gICAgcmV0dXJuIGE7XG4gIH0sXG4gIGRvdCh2MSwgdjIpIHtcbiAgICByZXR1cm4gdjFbMF0gKiB2MlswXSArIHYxWzFdICogdjJbMV0gKyB2MVsyXSAqIHYyWzJdO1xuICB9LFxuICBpc051bGxWZWN0b3I6IGZ1bmN0aW9uICh2KSB7XG4gICAgcmV0dXJuICF2WzBdICYmICF2WzFdICYmICF2WzJdO1xuICB9LFxuICBnZXRWZWN0b3JMZW5ndGgodikge1xuICAgIHJldHVybiBNYXRoLnNxcnQodlswXSAqIHZbMF0gKyB2WzFdICogdlsxXSArIHZbMl0gKiB2WzJdKTtcbiAgfSxcbiAgdHJhbnNmb3JtUG9pbnQ6IGZ1bmN0aW9uIChtLCB2LCBkc3QpIHtcbiAgICBkc3QgPSBkc3QgfHwgbmV3IE1hdFR5cGUoMyk7XG4gICAgdmFyIHYwID0gdlswXTtcbiAgICB2YXIgdjEgPSB2WzFdO1xuICAgIHZhciB2MiA9IHZbMl07XG4gICAgdmFyIGQgPVxuICAgICAgdjAgKiBtWzAgKiA0ICsgM10gKyB2MSAqIG1bMSAqIDQgKyAzXSArIHYyICogbVsyICogNCArIDNdICsgbVszICogNCArIDNdO1xuXG4gICAgZHN0WzBdID1cbiAgICAgICh2MCAqIG1bMCAqIDQgKyAwXSArXG4gICAgICAgIHYxICogbVsxICogNCArIDBdICtcbiAgICAgICAgdjIgKiBtWzIgKiA0ICsgMF0gK1xuICAgICAgICBtWzMgKiA0ICsgMF0pIC9cbiAgICAgIGQ7XG4gICAgZHN0WzFdID1cbiAgICAgICh2MCAqIG1bMCAqIDQgKyAxXSArXG4gICAgICAgIHYxICogbVsxICogNCArIDFdICtcbiAgICAgICAgdjIgKiBtWzIgKiA0ICsgMV0gK1xuICAgICAgICBtWzMgKiA0ICsgMV0pIC9cbiAgICAgIGQ7XG4gICAgZHN0WzJdID1cbiAgICAgICh2MCAqIG1bMCAqIDQgKyAyXSArXG4gICAgICAgIHYxICogbVsxICogNCArIDJdICtcbiAgICAgICAgdjIgKiBtWzIgKiA0ICsgMl0gK1xuICAgICAgICBtWzMgKiA0ICsgMl0pIC9cbiAgICAgIGQ7XG5cbiAgICByZXR1cm4gZHN0O1xuICB9LFxuICBub3JtYWxpemU6IGZ1bmN0aW9uICh2LCBkc3QpIHtcbiAgICBkc3QgPSBkc3QgfHwgbmV3IE1hdFR5cGUoMyk7XG4gICAgdmFyIGxlbmd0aCA9IE1hdGguc3FydCh2WzBdICogdlswXSArIHZbMV0gKiB2WzFdICsgdlsyXSAqIHZbMl0pO1xuICAgIC8vIG1ha2Ugc3VyZSB3ZSBkb24ndCBkaXZpZGUgYnkgMC5cbiAgICBpZiAobGVuZ3RoID4gMC4wMDAwMSkge1xuICAgICAgZHN0WzBdID0gdlswXSAvIGxlbmd0aDtcbiAgICAgIGRzdFsxXSA9IHZbMV0gLyBsZW5ndGg7XG4gICAgICBkc3RbMl0gPSB2WzJdIC8gbGVuZ3RoO1xuICAgIH1cbiAgICByZXR1cm4gZHN0O1xuICB9LFxuICBpZGVudGl0eTogZnVuY3Rpb24gKCkge1xuICAgIGRzdCA9IG5ldyBNYXRUeXBlKDE2KTtcbiAgICBkc3RbMF0gPSAxO1xuICAgIGRzdFsxXSA9IDA7XG4gICAgZHN0WzJdID0gMDtcbiAgICBkc3RbM10gPSAwO1xuICAgIGRzdFs0XSA9IDA7XG4gICAgZHN0WzVdID0gMTtcbiAgICBkc3RbNl0gPSAwO1xuICAgIGRzdFs3XSA9IDA7XG4gICAgZHN0WzhdID0gMDtcbiAgICBkc3RbOV0gPSAwO1xuICAgIGRzdFsxMF0gPSAxO1xuICAgIGRzdFsxMV0gPSAwO1xuICAgIGRzdFsxMl0gPSAwO1xuICAgIGRzdFsxM10gPSAwO1xuICAgIGRzdFsxNF0gPSAwO1xuICAgIGRzdFsxNV0gPSAxO1xuXG4gICAgcmV0dXJuIGRzdDtcbiAgfSxcbiAgbTNUb200OiBmdW5jdGlvbiAobSkge1xuICAgIGNvbnN0IGRzdCA9IG5ldyBNYXRUeXBlKDE2KTtcbiAgICBkc3RbMF0gPSBtWzBdO1xuICAgIGRzdFsxXSA9IG1bMV07XG4gICAgZHN0WzJdID0gbVsyXTtcbiAgICBkc3RbM10gPSAwO1xuICAgIGRzdFs0XSA9IG1bM107XG4gICAgZHN0WzVdID0gbVs0XTtcbiAgICBkc3RbNl0gPSBtWzVdO1xuICAgIGRzdFs3XSA9IDA7XG4gICAgZHN0WzhdID0gbVs2XTtcbiAgICBkc3RbOV0gPSBtWzddO1xuICAgIGRzdFsxMF0gPSBtWzhdO1xuICAgIGRzdFsxMV0gPSAwO1xuICAgIGRzdFsxMl0gPSAwO1xuICAgIGRzdFsxM10gPSAwO1xuICAgIGRzdFsxNF0gPSAwO1xuICAgIGRzdFsxNV0gPSAxO1xuICAgIHJldHVybiBkc3Q7XG4gIH0sXG4gIG00VG9tMzogZnVuY3Rpb24gKG0pIHtcbiAgICBjb25zdCBkc3QgPSBuZXcgTWF0VHlwZSg5KTtcbiAgICBkc3RbMF0gPSBtWzBdO1xuICAgIGRzdFsxXSA9IG1bMV07XG4gICAgZHN0WzJdID0gbVsyXTtcbiAgICBkc3RbM10gPSBtWzRdO1xuICAgIGRzdFs0XSA9IG1bNV07XG4gICAgZHN0WzVdID0gbVs2XTtcbiAgICBkc3RbNl0gPSBtWzhdO1xuICAgIGRzdFs3XSA9IG1bOV07XG4gICAgZHN0WzhdID0gbVsxMF07XG4gICAgcmV0dXJuIGRzdDtcbiAgfSxcbiAgdG9TdHJpbmcobSkge1xuICAgIHJldHVybiBtLnJlZHVjZSgoYWNjLCBlbCwgaWR4KSA9PlxuICAgICAgaWR4ICUgNCA9PT0gMCA/IChhY2MgKz0gXCJcXG5cIiArIGVsKSA6IChhY2MgKz0gXCIgXCIgKyBlbClcbiAgICApO1xuICB9LFxuICB0cmFuc3Bvc2U6IGZ1bmN0aW9uIChtKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIG1bMF0sXG4gICAgICBtWzRdLFxuICAgICAgbVs4XSxcbiAgICAgIG1bMTJdLFxuICAgICAgbVsxXSxcbiAgICAgIG1bNV0sXG4gICAgICBtWzldLFxuICAgICAgbVsxM10sXG4gICAgICBtWzJdLFxuICAgICAgbVs2XSxcbiAgICAgIG1bMTBdLFxuICAgICAgbVsxNF0sXG4gICAgICBtWzNdLFxuICAgICAgbVs3XSxcbiAgICAgIG1bMTFdLFxuICAgICAgbVsxNV0sXG4gICAgXTtcbiAgfSxcbiAgZnJvbVF1YXRlcm5pb246IChxKSA9PiB7XG4gICAgY29uc3QgYTExID0gMSAtIDIgKiAocVsxXSAqIHFbMV0gKyBxWzJdICogcVsyXSk7XG4gICAgY29uc3QgYTEyID0gMiAqIChxWzBdICogcVsxXSAtIHFbMl0gKiBxWzNdKTtcbiAgICBjb25zdCBhMTMgPSAyICogKHFbMF0gKiBxWzJdICsgcVsxXSAqIHFbM10pO1xuICAgIGNvbnN0IGEyMSA9IDIgKiAocVswXSAqIHFbMV0gKyBxWzJdICogcVszXSk7XG4gICAgY29uc3QgYTIyID0gMSAtIDIgKiAocVswXSAqIHFbMF0gKyBxWzJdICogcVsyXSk7XG4gICAgY29uc3QgYTIzID0gMiAqIChxWzFdICogcVsyXSAtIHFbMF0gKiBxWzNdKTtcbiAgICBjb25zdCBhMzEgPSAyICogKHFbMF0gKiBxWzJdIC0gcVsxXSAqIHFbM10pO1xuICAgIGNvbnN0IGEzMiA9IDIgKiAocVsxXSAqIHFbMl0gKyBxWzBdICogcVszXSk7XG4gICAgY29uc3QgYTMzID0gMSAtIDIgKiAocVswXSAqIHFbMF0gKyBxWzFdICogcVsxXSk7XG4gICAgcmV0dXJuIFthMTEsIGExMiwgYTEzLCAwLCBhMjEsIGEyMiwgYTIzLCAwLCBhMzEsIGEzMiwgYTMzLCAwLCAwLCAwLCAwLCAxXTtcbiAgfSxcbiAgcm90YXRpb24oeCwgeSwgeikge1xuICAgIHJldHVybiB0aGlzLnhSb3RhdGUodGhpcy55Um90YXRlKHRoaXMuelJvdGF0aW9uKHopLCB5KSwgeCk7XG4gIH0sXG4gIHJvdGF0aW9uRnJvbU5vcm1hbChuKSB7XG4gICAgcmV0dXJuIHRoaXMucm90YXRpb24oTWF0aC5hY29zKG5bMV0pLCBNYXRoLmFjb3MoblsyXSksIE1hdGguYWNvcyhuWzBdKSk7XG4gIH0sXG4gIGRldGVybWluYXRlKG0pIHtcbiAgICB2YXIgbTAwID0gbVswICogNCArIDBdO1xuICAgIHZhciBtMDEgPSBtWzAgKiA0ICsgMV07XG4gICAgdmFyIG0wMiA9IG1bMCAqIDQgKyAyXTtcbiAgICB2YXIgbTAzID0gbVswICogNCArIDNdO1xuICAgIHZhciBtMTAgPSBtWzEgKiA0ICsgMF07XG4gICAgdmFyIG0xMSA9IG1bMSAqIDQgKyAxXTtcbiAgICB2YXIgbTEyID0gbVsxICogNCArIDJdO1xuICAgIHZhciBtMTMgPSBtWzEgKiA0ICsgM107XG4gICAgdmFyIG0yMCA9IG1bMiAqIDQgKyAwXTtcbiAgICB2YXIgbTIxID0gbVsyICogNCArIDFdO1xuICAgIHZhciBtMjIgPSBtWzIgKiA0ICsgMl07XG4gICAgdmFyIG0yMyA9IG1bMiAqIDQgKyAzXTtcbiAgICB2YXIgbTMwID0gbVszICogNCArIDBdO1xuICAgIHZhciBtMzEgPSBtWzMgKiA0ICsgMV07XG4gICAgdmFyIG0zMiA9IG1bMyAqIDQgKyAyXTtcbiAgICB2YXIgbTMzID0gbVszICogNCArIDNdO1xuICAgIHZhciB0bXBfMCAgPSBtMjIgKiBtMzM7XG4gICAgdmFyIHRtcF8xICA9IG0zMiAqIG0yMztcbiAgICB2YXIgdG1wXzIgID0gbTEyICogbTMzO1xuICAgIHZhciB0bXBfMyAgPSBtMzIgKiBtMTM7XG4gICAgdmFyIHRtcF80ICA9IG0xMiAqIG0yMztcbiAgICB2YXIgdG1wXzUgID0gbTIyICogbTEzO1xuICAgIHZhciB0bXBfNiAgPSBtMDIgKiBtMzM7XG4gICAgdmFyIHRtcF83ICA9IG0zMiAqIG0wMztcbiAgICB2YXIgdG1wXzggID0gbTAyICogbTIzO1xuICAgIHZhciB0bXBfOSAgPSBtMjIgKiBtMDM7XG4gICAgdmFyIHRtcF8xMCA9IG0wMiAqIG0xMztcbiAgICB2YXIgdG1wXzExID0gbTEyICogbTAzO1xuXG4gICAgdmFyIHQwID0gKHRtcF8wICogbTExICsgdG1wXzMgKiBtMjEgKyB0bXBfNCAqIG0zMSkgLVxuICAgICAgICAodG1wXzEgKiBtMTEgKyB0bXBfMiAqIG0yMSArIHRtcF81ICogbTMxKTtcbiAgICB2YXIgdDEgPSAodG1wXzEgKiBtMDEgKyB0bXBfNiAqIG0yMSArIHRtcF85ICogbTMxKSAtXG4gICAgICAgICh0bXBfMCAqIG0wMSArIHRtcF83ICogbTIxICsgdG1wXzggKiBtMzEpO1xuICAgIHZhciB0MiA9ICh0bXBfMiAqIG0wMSArIHRtcF83ICogbTExICsgdG1wXzEwICogbTMxKSAtXG4gICAgICAgICh0bXBfMyAqIG0wMSArIHRtcF82ICogbTExICsgdG1wXzExICogbTMxKTtcbiAgICB2YXIgdDMgPSAodG1wXzUgKiBtMDEgKyB0bXBfOCAqIG0xMSArIHRtcF8xMSAqIG0yMSkgLVxuICAgICAgICAodG1wXzQgKiBtMDEgKyB0bXBfOSAqIG0xMSArIHRtcF8xMCAqIG0yMSk7XG5cbiAgICByZXR1cm4gMS4wIC8gKG0wMCAqIHQwICsgbTEwICogdDEgKyBtMjAgKiB0MiArIG0zMCAqIHQzKTtcbiAgfSxcbiAgXG4gIGRlY29tcG9zZShtYXQpIHtcbiAgICBsZXQgc3ggPSBub3JtKG1hdC5zbGljZSgwLCAzKSk7XG4gICAgY29uc3Qgc3kgPSBub3JtKG1hdC5zbGljZSg0LCA3KSk7XG4gICAgY29uc3Qgc3ogPSBub3JtKG1hdC5zbGljZSg4LCAxMSkpO1xuXG4gICAgXG4gICAgY29uc3QgZGV0ID0gdGhpcy5kZXRlcm1pbmF0ZShtYXQpO1xuICAgIGlmIChkZXQgPCAwKSB7XG4gICAgICBzeCA9IC1zeDtcbiAgICB9XG4gICAgY29uc3QgdHJhbnNsYXRpb24gPSBbXVxuICAgIGNvbnN0IHNjYWxlID0gW11cbiAgICBjb25zdCBSbWF0cml4ID0gWy4uLm1hdF1cbiAgICB0cmFuc2xhdGlvblswXSA9IG1hdFsxMl07XG4gICAgdHJhbnNsYXRpb25bMV0gPSBtYXRbMTNdO1xuICAgIHRyYW5zbGF0aW9uWzJdID0gbWF0WzE0XTtcblxuXG4gICAgXG5cbiAgICBjb25zdCBpbnZTWCA9IDEgLyBzeDtcbiAgICBjb25zdCBpbnZTWSA9IDEgLyBzeTtcbiAgICBjb25zdCBpbnZTWiA9IDEgLyBzejtcblxuICAgIFJtYXRyaXhbMF0gKj0gaW52U1g7XG4gICAgUm1hdHJpeFsxXSAqPSBpbnZTWDtcbiAgICBSbWF0cml4WzJdICo9IGludlNYO1xuXG4gICAgUm1hdHJpeFs0XSAqPSBpbnZTWTtcbiAgICBSbWF0cml4WzVdICo9IGludlNZO1xuICAgIFJtYXRyaXhbNl0gKj0gaW52U1k7XG5cbiAgICBSbWF0cml4WzhdICo9IGludlNaO1xuICAgIFJtYXRyaXhbOV0gKj0gaW52U1o7XG4gICAgUm1hdHJpeFsxMF0gKj0gaW52U1o7XG5cblxuXG4gICAgc2NhbGVbMF0gPSBzeDtcbiAgICBzY2FsZVsxXSA9IHN5O1xuICAgIHNjYWxlWzJdID0gc3o7XG4gICAgcmV0dXJuIHt0cmFuc2xhdGlvbiwgUm1hdHJpeCwgc2NhbGUgfVxuICB9XG59O1xuXG5cbm1vZHVsZS5leHBvcnRzID0gbTQ7XG4iLCJjb25zdCBkb3QgPSAoYSwgYikgPT4gYVswXSAqIGJbMF0gKyBhWzFdICogYlsxXSArIGFbMl0gKiBiWzJdO1xuY29uc3QgY3Jvc3MgPSAoYSwgYikgPT4gW1xuICBhWzFdICogYlsyXSAtIGJbMV0gKiBhWzJdLFxuICBhWzJdICogYlswXSAtIGJbMl0gKiBhWzBdLFxuICBhWzBdICogYlsxXSAtIGJbMF0gKiBhWzFdLFxuXTtcblxuY29uc3Qgc2NhbGUgPSAoYSwgc2NhbGFyKSA9PiBbYVswXSAqIHNjYWxhciwgYVsxXSAqIHNjYWxhciwgYVsyXSAqIHNjYWxhcl07XG5jb25zdCBzdW0gPSAoYSwgYikgPT4gW2FbMF0gKyBiWzBdLCBhWzFdICsgYlsxXSwgYVsyXSArIGJbMl1dO1xuY29uc3QgZGlmZiA9IChhLCBiKSA9PiBbYVswXSAtIGJbMF0sIGFbMV0gLSBiWzFdLCBhWzJdIC0gYlsyXV07XG5jb25zdCBub3JtID0gKGEpID0+IE1hdGguc3FydChhWzBdICogYVswXSArIGFbMV0gKiBhWzFdICsgYVsyXSAqIGFbMl0pO1xuY29uc3Qgbm9ybVNxID0gKGEpID0+IGFbMF0gKiBhWzBdICsgYVsxXSAqIGFbMV0gKyBhWzJdICogYVsyXTtcbmNvbnN0IG5vcm1hbGl6ZSA9IChhKSA9PiB7XG4gIGNvbnN0IGxlbmd0aCA9IG5vcm0oYSk7XG4gIGlmIChsZW5ndGggPT09IDApIHJldHVybiBhO1xuICByZXR1cm4gW2FbMF0gLyBsZW5ndGgsIGFbMV0gLyBsZW5ndGgsIGFbMl0gLyBsZW5ndGhdO1xufTtcbmNvbnN0IGlzTnVsbCA9IChhKSA9PiBhWzBdICogYVswXSArIGFbMV0gKiBhWzFdICsgYVsyXSAqIGFbMl0gPT09IDA7XG5cbmNvbnN0IGlzRXF1YWwgPSAoYSwgYikgPT4gYVswXSA9PSBiWzBdICYmIGFbMV0gPT0gYlsxXSAmJiBhWzJdID09IGJbMl07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzdW0sXG4gIGRpZmYsXG4gIHNjYWxlLFxuICBkb3QsXG4gIGNyb3NzLFxuICBub3JtLFxuICBub3JtU3EsXG4gIG5vcm1hbGl6ZSxcbiAgaXNFcXVhbCxcbiAgaXNOdWxsLFxufTtcbiIsImltcG9ydCB7IEpvaW50LCBKb2ludFBvc2l0aW9uQ29uc3RyYWludCB9IGZyb20gXCIuLi9zcmMvcGh5c2ljcy9jb25zdHJhaW50c1wiO1xyXG5pbXBvcnQgeyBSaWdpZEJvZHkgfSBmcm9tIFwiLi4vc3JjL3BoeXNpY3MvUmlnaWRCb2R5XCI7XHJcbmltcG9ydCB7dmVjM30gZnJvbSAnbWF0aCdcclxuaW1wb3J0IHsgQm94LCBDeWxpbmRlciwgU3BoZXJlfSBmcm9tIFwiLi4vc3JjL3BoeXNpY3MvY29sbGlkZXJcIjtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmFnZG9sbHtcclxuICAgIGNvbnN0cnVjdG9yKHBvcyA9IFswLDAsMF0pe1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGJvZHkgPSBuZXcgUmlnaWRCb2R5KG5ldyBCb3goMSwgMiwgMC41KSk7XHJcbiAgICAgICAgY29uc3QgbGVmdEhhbmQgPSBuZXcgUmlnaWRCb2R5KG5ldyBDeWxpbmRlcigwLjQsIDIsIDAuNSkpO1xyXG4gICAgICAgIGNvbnN0IHJpZ2h0SGFuZCA9IG5ldyBSaWdpZEJvZHkobmV3IEN5bGluZGVyKDAuNCwgMiwgMC41KSk7XHJcbiAgICAgICAgY29uc3QgbGVmdExlZyA9IG5ldyBSaWdpZEJvZHkobmV3IEN5bGluZGVyKDAuNCwgMiwgMC41KSk7XHJcbiAgICAgICAgY29uc3QgcmlnaHRMZWcgPSBuZXcgUmlnaWRCb2R5KG5ldyBDeWxpbmRlcigwLjQsIDIsIDAuNSkpO1xyXG4gICAgICAgIGNvbnN0IGhlYWQgPSBuZXcgUmlnaWRCb2R5KG5ldyBTcGhlcmUoMSwgMSwgMSkpO1xyXG4gICAgICAgIGNvbnN0IGNvbnN0cmFpbnRzID0gW1xyXG4gICAgICAgICAgbmV3IEpvaW50KGJvZHksIGhlYWQsIFswLCAxLjUsIDBdLCBbMCwgLTEsIDBdLCAwKSxcclxuICAgICAgICAgIG5ldyBKb2ludChib2R5LCBsZWZ0SGFuZCwgWzEsIDEsIDBdLCBbMCwgMSwgMF0sIDApLFxyXG4gICAgICAgICAgbmV3IEpvaW50KGJvZHksIHJpZ2h0SGFuZCwgWy0xLCAxLCAwXSwgWzAsIDEsIDBdLCAwKSxcclxuICAgICAgICAgIG5ldyBKb2ludChib2R5LCByaWdodExlZywgWy0wLjUsIC0xLjIsIDBdLCBbMCwgMS4yLCAwXSwgMCksXHJcbiAgICAgICAgICBuZXcgSm9pbnQoYm9keSwgbGVmdExlZywgWzAuNSwgLTEuMiwgMF0sIFswLCAxLjIsIDBdLCAwKSxcclxuICAgICAgICBdO1xyXG4gICAgICAgIGNvbnN0IHBvc2l0aW9uQ29uc3RyYWludHMgPSBbXHJcbiAgICAgICAgICBuZXcgSm9pbnRQb3NpdGlvbkNvbnN0cmFpbnQoYm9keSwgaGVhZCwgWzAsIDEuNSwgMF0sIFswLCAtMSwgMF0sIDAuMiksXHJcbiAgICAgICAgICBuZXcgSm9pbnRQb3NpdGlvbkNvbnN0cmFpbnQoYm9keSwgbGVmdEhhbmQsIFsxLCAxLCAwXSwgWzAsIDEsIDBdLCAwLjIpLFxyXG4gICAgICAgICAgbmV3IEpvaW50UG9zaXRpb25Db25zdHJhaW50KGJvZHksIHJpZ2h0SGFuZCwgWy0xLCAxLCAwXSwgWzAsIDEsIDBdLCAwLjIpLFxyXG4gICAgICAgICAgbmV3IEpvaW50UG9zaXRpb25Db25zdHJhaW50KFxyXG4gICAgICAgICAgICBib2R5LFxyXG4gICAgICAgICAgICByaWdodExlZyxcclxuICAgICAgICAgICAgWy0wLjUsIC0xLjIsIDBdLFxyXG4gICAgICAgICAgICBbMCwgMS4yLCAwXSxcclxuICAgICAgICAgICAgMC4yXHJcbiAgICAgICAgICApLFxyXG4gICAgICAgICAgbmV3IEpvaW50UG9zaXRpb25Db25zdHJhaW50KFxyXG4gICAgICAgICAgICBib2R5LFxyXG4gICAgICAgICAgICBsZWZ0TGVnLFxyXG4gICAgICAgICAgICBbMC41LCAtMS4yLCAwXSxcclxuICAgICAgICAgICAgWzAsIDEuMiwgMF0sXHJcbiAgICAgICAgICAgIDAuMlxyXG4gICAgICAgICAgKSxcclxuICAgICAgICBdO1xyXG4gICAgICAgIC8vcG9zaXRpb25Db25zdHJhaW50cy5mb3JFYWNoKGMgPT5jLnRyZXNob2xkID0gMC4xKVxyXG4gICAgICAgIGJvZHkudHJhbnNsYXRlKHBvcyk7XHJcbiAgICAgIFxyXG4gICAgICAgIGhlYWQudHJhbnNsYXRlKHZlYzMuc3VtKHBvcywgWzAsIDIsIDBdKSk7XHJcbiAgICAgICAgbGVmdEhhbmQudHJhbnNsYXRlKHZlYzMuc3VtKHBvcywgWy0zLCAyLCAwXSkpO1xyXG4gICAgICAgIHJpZ2h0SGFuZC50cmFuc2xhdGUodmVjMy5zdW0ocG9zLCBbMywgMiwgMF0pKTtcclxuICAgICAgICByaWdodExlZy50cmFuc2xhdGUodmVjMy5zdW0ocG9zLCBbMiwgLTIuNSwgMF0pKTtcclxuICAgICAgICBsZWZ0TGVnLnRyYW5zbGF0ZSh2ZWMzLnN1bShwb3MsIFstMiwgLTIuNSwgMF0pKTtcclxuICAgICAgICBwb3NpdGlvbkNvbnN0cmFpbnRzLmZvckVhY2goKGMpID0+IChjLnRyZXNob2xkID0gMC4wNSkpO1xyXG4gICAgICAgIHRoaXMucGFydHMgPSB7Ym9keSwgbGVmdEhhbmQsIHJpZ2h0SGFuZCwgcmlnaHRMZWcsIGxlZnRMZWcsIGhlYWR9XHJcbiAgICAgICAgdGhpcy5jb25zdHJhaW50cyA9IGNvbnN0cmFpbnRzXHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbkNvbnN0cmFpbnRzID0gcG9zaXRpb25Db25zdHJhaW50c1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgUHJvZ3JhbUluZm8gfSBmcm9tIFwiZ3JhcGhpY3NcIjtcclxuY29uc3QgZ2xzbCA9IHg9PnhcclxuXHJcblxyXG5jb25zdCB2ZXJ0ID0gZ2xzbGAjdmVyc2lvbiAzMDAgZXNcclxuIFxyXG5sYXlvdXQobG9jYXRpb24gPSAwKSBpbiB2ZWM0IGFfcG9zaXRpb247XHJcbmxheW91dChsb2NhdGlvbiA9IDEpIGluIHZlYzMgYV9ub3JtYWw7XHJcblxyXG5cclxuXHJcbnVuaWZvcm0gbWF0NCB3b3JsZE1hdHJpeDtcclxudW5pZm9ybSBtYXQ0IHdvcmxkVmlld1Byb2plY3Rpb247XHJcbnVuaWZvcm0gdmVjMyB1X2xpZ2h0V29ybGRQb3NpdGlvbjtcclxudW5pZm9ybSB2ZWMzIHVfdmlld1dvcmxkUG9zaXRpb247XHJcbnVuaWZvcm0gbWF0NCB3b3JsZEludmVyc2VUcmFuc3Bvc2U7XHJcbm91dCB2ZWMzIHZfbm9ybWFsO1xyXG5vdXQgdmVjMyB2X3N1cmZhY2VUb0xpZ2h0O1xyXG5vdXQgdmVjMyB2X3N1cmZhY2VUb1ZpZXc7XHJcblxyXG52b2lkIG1haW4oKSB7XHJcblxyXG4gICAgdmVjMyBzdXJmYWNlV29ybGRQb3NpdGlvbiA9ICh3b3JsZE1hdHJpeCAqIGFfcG9zaXRpb24pLnh5ejtcclxuICAgIHZfc3VyZmFjZVRvTGlnaHQgPSB1X2xpZ2h0V29ybGRQb3NpdGlvbiAtIHN1cmZhY2VXb3JsZFBvc2l0aW9uO1xyXG4gICAgdl9zdXJmYWNlVG9WaWV3ID0gdV92aWV3V29ybGRQb3NpdGlvbiAtIHN1cmZhY2VXb3JsZFBvc2l0aW9uO1xyXG4gICAgdmVjNCBwb3MgPSB3b3JsZFZpZXdQcm9qZWN0aW9uICogYV9wb3NpdGlvbjtcclxuICAgIGdsX1Bvc2l0aW9uID0gcG9zO1xyXG5cclxuICAgXHJcbiAgICB2X25vcm1hbCA9IG1hdDMod29ybGRJbnZlcnNlVHJhbnNwb3NlKSAqIGFfbm9ybWFsO1xyXG4gICBcclxuICAgICAgXHJcbn1gXHJcbmNvbnN0IGZyYWcgPSBnbHNsYCN2ZXJzaW9uIDMwMCBlc1xyXG5wcmVjaXNpb24gaGlnaHAgZmxvYXQ7XHJcbiBcclxuXHJcblxyXG5pbiB2ZWMzIHZfbm9ybWFsO1xyXG5pbiB2ZWMzIHZfc3VyZmFjZVRvVmlldztcclxuaW4gdmVjMyB2X3N1cmZhY2VUb0xpZ2h0O1xyXG5cclxuXHJcbi8vdW5pZm9ybSBzYW1wbGVyMkQgdV90ZXh0dXJlMTtcclxudW5pZm9ybSBmbG9hdCB1X3NoaW5pbmVzcztcclxudW5pZm9ybSB2ZWM0IHVfY29sb3I7XHJcbnVuaWZvcm0gdmVjNCB1X2FtYmllbnRMaWdodDtcclxub3V0IHZlYzQgb3V0Q29sb3I7XHJcblxyXG5cclxudm9pZCBtYWluKCkge1xyXG4gIFxyXG4gIHZlYzMgc3VyZmFjZVRvTGlnaHREaXJlY3Rpb24gPSBub3JtYWxpemUodl9zdXJmYWNlVG9MaWdodCk7XHJcbiAgdmVjMyBzdXJmYWNlVG9WaWV3RGlyZWN0aW9uID0gbm9ybWFsaXplKHZfc3VyZmFjZVRvVmlldyk7XHJcbiAgdmVjMyBoYWxmVmVjdG9yID0gbm9ybWFsaXplKHN1cmZhY2VUb0xpZ2h0RGlyZWN0aW9uIC0gc3VyZmFjZVRvVmlld0RpcmVjdGlvbik7XHJcblxyXG4gIHZlYzMgbm9ybWFsID0gbm9ybWFsaXplKHZfbm9ybWFsKTtcclxuICBmbG9hdCBsaWdodCA9IGRvdCh2X25vcm1hbCwgc3VyZmFjZVRvTGlnaHREaXJlY3Rpb24pO1xyXG4gIGZsb2F0IHNwZWN1bGFyID0gMC4wO1xyXG4gIGlmIChsaWdodCA+IDAuMCkge1xyXG4gICAgc3BlY3VsYXIgPSBwb3coZG90KG5vcm1hbCwgaGFsZlZlY3RvciksIHVfc2hpbmluZXNzKTtcclxuICB9XHJcbiBcclxuICBvdXRDb2xvciA9ICB1X2NvbG9yO1xyXG4gIG91dENvbG9yLnJnYiAqPSBsaWdodDtcclxuICBcclxuICBvdXRDb2xvciArPSB1X2FtYmllbnRMaWdodCAqIDAuMTtcclxuICBcclxufVxyXG5gXHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgUHJvZ3JhbUluZm8odmVydCwgZnJhZykiLCJpbXBvcnQge20zLCB2ZWMzLCBtNH0gZnJvbSAnbWF0aCdcclxuY29uc3QgS0VZUyA9IHtcclxuICAgICd3JyA6ICdtb3ZlRm9yd2FyZCcsXHJcbiAgICAncycgOiAnbW92ZUJhY2t3YXJkJyxcclxuICAgICdhJyA6ICdtb3ZlTGVmdCcsXHJcbiAgICAnZCcgOiAnbW92ZVJpZ2h0JyxcclxuICAgICcgJyA6ICdtb3ZlVXAnXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRyb2xsYWJsZXtcclxuICAgIGNvbnN0cnVjdG9yKHJpZ2lkQm9keSl7XHJcblxyXG4gICAgICAgIHRoaXMucmlnaWRCb2R5ID0gcmlnaWRCb2R5XHJcbiAgICAgICAgdGhpcy5rZXlJbnB1dCA9IG51bGxcclxuICAgICAgICB0aGlzLm1vdXNlSW5wdXQgPSBudWxsXHJcbiAgICAgICAgdGhpcy5yb3RhdGlvblggPSAwXHJcbiAgICAgICAgdGhpcy5yb3RhdGlvblkgPSAwXHJcbiAgICAgICAgdGhpcy5kZWx0YVJZID0gMFxyXG4gICAgICAgIHRoaXMuY2FtUG9zID0gWzAsMCwxMF1cclxuICAgICAgICB0aGlzLmNhbVJvdCA9IG0zLmlkZW50aXR5KClcclxuICAgICAgICB0aGlzLmp1bXBSZWFkeSA9IHRydWVcclxuICAgIH1cclxuICAgIGxpc3Rlbk1vdXNlKG1vdXNlSW5wdXQpe1xyXG4gICAgICAgIHRoaXMubW91c2VJbnB1dCA9IG1vdXNlSW5wdXRcclxuICAgICAgICBtb3VzZUlucHV0Lm9uKCdtb3ZlJywgKFtkZWx0YVgsIGRlbHRhWV0pPT57XHJcbiAgICAgICAgICAgIHRoaXMucm90YXRpb25ZIC09IGRlbHRhWCAqIDAuMDA1O1xyXG4gICAgICAgICAgICB0aGlzLnJvdGF0aW9uWCAtPSBkZWx0YVkgKiAwLjAwNTtcclxuICAgICAgICAgICAgdGhpcy5yb3RhdGlvblggPSBNYXRoLm1heCgtTWF0aC5QSS8yLCBNYXRoLm1pbihNYXRoLlBJLzIsIHRoaXMucm90YXRpb25YKSlcclxuICAgICAgICAgICAgdGhpcy5kZWx0YVJZID0gZGVsdGFYICogMC4wMDU7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBsaXN0ZW5LZXlib2FyZChrZXlJbnB1dCl7XHJcbiAgICAgICAgdGhpcy5rZXlJbnB1dCA9IGtleUlucHV0XHJcbiAgICB9XHJcbiAgICB0aWNrKCl7XHJcblxyXG4gICAgICAgIGZvcihjb25zdCBrZXkgb2YgdGhpcy5rZXlJbnB1dC5rZXlzKXtcclxuICAgICAgICAgICAgY29uc3QgYWN0aW9uTmFtZSA9IEtFWVNba2V5XVxyXG4gICAgICAgICAgICBpZihhY3Rpb25OYW1lKXtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFjdGlvbiA9IHRoaXNbYWN0aW9uTmFtZV0uYmluZCh0aGlzKVxyXG4gICAgICAgICAgICAgICAgYWN0aW9uKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgbSA9IG0zLnlSb3RhdGlvbih0aGlzLnJvdGF0aW9uWSlcclxuICAgICAgICB0aGlzLnJpZ2lkQm9keS5yb3RhdGUoWzAsIC10aGlzLmRlbHRhUlksMF0pXHJcbiAgICAgICAgdGhpcy5kZWx0YVJZID0gMFxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHBvcyA9IFsuLi50aGlzLnJpZ2lkQm9keS5jb2xsaWRlci5wb3NdXHJcbiAgICAgICAgbGV0IF9tID0gbTQudHJhbnNsYXRpb24ocG9zWzBdLCBwb3NbMV0rMywgcG9zWzJdKVxyXG4gICAgICAgIF9tID0gbTQubXVsdGlwbHkoX20sIG00Lm0zVG9tNCh0aGlzLnJpZ2lkQm9keS5jb2xsaWRlci5SbWF0cml4KSlcclxuICAgICAgICBfbSA9IG00LnhSb3RhdGUoX20sIHRoaXMucm90YXRpb25YKVxyXG4gICAgICAgIF9tID0gbTQudHJhbnNsYXRlKF9tLCAuLi50aGlzLmNhbVBvcylcclxuICAgICAgICB0aGlzLmNhbU1hdHJpeCA9IF9tXHJcbiAgICAgXHJcbiAgICB9XHJcbiAgICBnZXRBYnNvbHV0ZUNhbVBvcygpe1xyXG4gICAgICAgIHJldHVybiB2ZWMzLnN1bSh0aGlzLnJpZ2lkQm9keS5jb2xsaWRlci5wb3MsIHRoaXMuY2FtUG9zKVxyXG4gICAgfVxyXG4gICAgbW92ZShkaXIpe1xyXG4gICAgICAgIGNvbnN0IG0gPSBtNC55Um90YXRpb24odGhpcy5yb3RhdGlvblgpXHJcbiAgICAgICAgdGhpcy5yaWdpZEJvZHkuYXBwbHlJbXB1bHNlKGRpciwgWzAsMCwwXSlcclxuICAgIH1cclxuICAgIG1vdmVGb3J3YXJkKCl7XHJcbiAgICAgICAgdGhpcy5tb3ZlKFswLDAsIC0xXSlcclxuICAgIH1cclxuICAgIG1vdmVCYWNrd2FyZCgpe1xyXG4gICAgICAgIHRoaXMubW92ZShbMCwwLCAxXSlcclxuICAgIH1cclxuICAgIG1vdmVMZWZ0KCl7XHJcbiAgICAgICAgdGhpcy5tb3ZlKFstMSwwLCAwXSlcclxuICAgIH1cclxuICAgIG1vdmVSaWdodCgpe1xyXG4gICAgICAgIHRoaXMubW92ZShbMSwwLCAwXSlcclxuICAgIH1cclxuICAgIG1vdmVVcCgpe1xyXG4gICAgICAgIGlmKHRoaXMuanVtcFJlYWR5KXtcclxuICAgICAgICAgICAgdGhpcy5tb3ZlKFswLDEwLDBdKVxyXG4gICAgICAgICAgICB0aGlzLmp1bXBSZWFkeSA9IGZhbHNlXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PnRoaXMuanVtcFJlYWR5ID0gdHJ1ZSwgMTAwMClcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn1cclxuY2xhc3MgTm9jbGlwe1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICB0aGlzLmtleUlucHV0ID0gbnVsbFxyXG4gICAgICAgIHRoaXMubW91c2VJbnB1dCA9IG51bGxcclxuICAgICAgICB0aGlzLnJvdGF0aW9uWCA9IDBcclxuICAgICAgICB0aGlzLnJvdGF0aW9uWSA9IDBcclxuICAgICAgICB0aGlzLmRlbHRhUlkgPSAwXHJcbiAgICAgICAgdGhpcy5jYW1Qb3MgPSBbMCwwLDEwXVxyXG4gICAgICAgIHRoaXMuY2FtUm90ID0gbTMuaWRlbnRpdHkoKVxyXG4gICAgfVxyXG4gICAgbGlzdGVuTW91c2UobW91c2VJbnB1dCl7XHJcbiAgICAgICAgdGhpcy5tb3VzZUlucHV0ID0gbW91c2VJbnB1dFxyXG4gICAgICAgIG1vdXNlSW5wdXQub24oJ21vdmUnLCAoW2RlbHRhWCwgZGVsdGFZXSk9PntcclxuICAgICAgICAgICAgdGhpcy5yb3RhdGlvblkgLT0gZGVsdGFYICogMC4wMDU7XHJcbiAgICAgICAgICAgIHRoaXMucm90YXRpb25YIC09IGRlbHRhWSAqIDAuMDA1O1xyXG4gICAgICAgICAgICB0aGlzLnJvdGF0aW9uWCA9IE1hdGgubWF4KC1NYXRoLlBJLzIsIE1hdGgubWluKE1hdGguUEkvMiwgdGhpcy5yb3RhdGlvblgpKVxyXG4gICAgICAgICAgICB0aGlzLmRlbHRhUlkgPSBkZWx0YVggKiAwLjAwNTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGxpc3RlbktleWJvYXJkKGtleUlucHV0KXtcclxuICAgICAgICB0aGlzLmtleUlucHV0ID0ga2V5SW5wdXRcclxuICAgIH1cclxuICAgIHRpY2soKXtcclxuXHJcbiAgICAgICAgZm9yKGNvbnN0IGtleSBvZiB0aGlzLmtleUlucHV0LmtleXMpe1xyXG4gICAgICAgICAgICBjb25zdCBhY3Rpb25OYW1lID0gS0VZU1trZXldXHJcbiAgICAgICAgICAgIGlmKGFjdGlvbk5hbWUpe1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYWN0aW9uID0gdGhpc1thY3Rpb25OYW1lXS5iaW5kKHRoaXMpXHJcbiAgICAgICAgICAgICAgICBhY3Rpb24oKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmNhbU1hdHJpeCA9IG00LnRyYW5zbGF0aW9uKC4uLnRoaXMuY2FtUG9zKVxyXG4gICAgICAgIHRoaXMuY2FtTWF0cml4ID0gbTQueFJvdGF0ZShtNC55Um90YXRlKHRoaXMuY2FtTWF0cml4LCB0aGlzLnJvdGF0aW9uWSksIHRoaXMucm90YXRpb25YKVxyXG4gICAgIFxyXG4gICAgfVxyXG4gICAgbW92ZShkaXIpe1xyXG4gICAgICAgIGNvbnN0IG0gPSBtNC5tNFRvbTModGhpcy5jYW1NYXRyaXgpXHJcbiAgICAgICAgdGhpcy5jYW1Qb3MgPSB2ZWMzLnN1bSh0aGlzLmNhbVBvcywgbTMudHJhbnNmb3JtUG9pbnQobSwgZGlyKSlcclxuICAgIH1cclxuICAgIG1vdmVGb3J3YXJkKCl7XHJcbiAgICAgICAgdGhpcy5tb3ZlKFswLDAsIC0xXSlcclxuICAgIH1cclxuICAgIG1vdmVCYWNrd2FyZCgpe1xyXG4gICAgICAgIHRoaXMubW92ZShbMCwwLCAxXSlcclxuICAgIH1cclxuICAgIG1vdmVMZWZ0KCl7XHJcbiAgICAgICAgdGhpcy5tb3ZlKFstMSwwLCAwXSlcclxuICAgIH1cclxuICAgIG1vdmVSaWdodCgpe1xyXG4gICAgICAgIHRoaXMubW92ZShbMSwwLCAwXSlcclxuICAgIH1cclxuICAgIG1vdmVVcCgpe1xyXG4gICAgICAgIHRoaXMubW92ZShbMCwxLCAwXSlcclxuICAgIH1cclxufVxyXG5leHBvcnQge05vY2xpcCwgQ29udHJvbGxhYmxlfSIsImltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gXCIuLi9waHlzaWNzL2V2ZW50RW1pdHRlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgS2V5SW5wdXQgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKVxyXG4gICAgdGhpcy5rZXlzID0gbmV3IFNldCgpO1xyXG4gIH1cclxuICBsb2dEb3duKHsga2V5IH0pIHtcclxuICAgIHRoaXMua2V5cy5hZGQoa2V5KTtcclxuICAgIHRoaXMuZW1pdChcImtleWRvd25cIiwgeyBrZXkgfSk7XHJcbiAgfVxyXG4gIGxvZ1VwKHsga2V5IH0pIHtcclxuICAgIHRoaXMua2V5cy5kZWxldGUoa2V5KTtcclxuICAgIHRoaXMuZW1pdChcImtleXVwXCIsIHsga2V5IH0pO1xyXG4gIH1cclxuICBsaXN0ZW4oKSB7XHJcbiAgICBjb25zdCBsb2dEb3duID0gdGhpcy5sb2dEb3duLmJpbmQodGhpcyk7XHJcbiAgICBjb25zdCBsb2dVcCA9IHRoaXMubG9nVXAuYmluZCh0aGlzKTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGxvZ0Rvd24pO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGxvZ1VwKTtcclxuICAgIHRoaXMudW5zdWJzaWNyaWJlID0gKCkgPT4ge1xyXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBsb2dEb3duKTtcclxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGxvZ1VwKTtcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gXCIuLi9waHlzaWNzL2V2ZW50RW1pdHRlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW91c2VJbnB1dCBleHRlbmRzIEV2ZW50RW1pdHRlciB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5sYXN0WCA9IDA7XHJcbiAgICB0aGlzLmxhc3RZID0gMDtcclxuICAgIHRoaXMuZW5hYmxlID0gZmFsc2U7XHJcbiAgICB0aGlzLm1vdmVzID0gW11cclxuICB9XHJcbiAgbG9nTW92ZSh7IG9mZnNldFgsIG9mZnNldFkgfSkge1xyXG4gICAgY29uc3QgZGVsdGFYID0gb2Zmc2V0WCAtIHRoaXMubGFzdFg7XHJcbiAgICB0aGlzLmxhc3RYID0gb2Zmc2V0WDtcclxuICAgIGNvbnN0IGRlbHRhWSA9IG9mZnNldFkgLSB0aGlzLmxhc3RZO1xyXG4gICAgdGhpcy5sYXN0WSA9IG9mZnNldFk7XHJcbiAgICB0aGlzLmVtaXQoXCJtb3ZlXCIsIFtkZWx0YVgsIGRlbHRhWV0pO1xyXG4gICAgdGhpcy5tb3Zlcy5wdXNoKFtkZWx0YVgsIGRlbHRhWV0pXHJcbiAgfVxyXG4gIGxpc3RlbigpIHtcclxuICAgIGNvbnN0IGxvZ01vdmUgPSB0aGlzLmxvZ01vdmUuYmluZCh0aGlzKTtcclxuICAgIGNvbnN0IF8gPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICBpZiAodGhpcy5lbmFibGUpIGxvZ01vdmUoZSk7XHJcbiAgICB9LmJpbmQodGhpcyk7XHJcbiAgICBjb25zdCBkb3duID0gZnVuY3Rpb24gKHsgb2Zmc2V0WCwgb2Zmc2V0WSB9KSB7XHJcbiAgICAgIHRoaXMubGFzdFggPSBvZmZzZXRYO1xyXG4gICAgICB0aGlzLmxhc3RZID0gb2Zmc2V0WTtcclxuICAgICAgdGhpcy5lbmFibGUgPSB0cnVlO1xyXG4gICAgfS5iaW5kKHRoaXMpO1xyXG4gICAgY29uc3QgdXAgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHRoaXMuZW5hYmxlID0gZmFsc2U7XHJcbiAgICB9LmJpbmQodGhpcyk7XHJcblxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBfKTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgZG93bik7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCB1cCk7XHJcbiAgICB0aGlzLnVuc3Vic2NyaWJlID0gKCkgPT4ge1xyXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIF8pO1xyXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGRvd24pO1xyXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCB1cCk7XHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tIFwiLi9ldmVudEVtaXR0ZXJcIjtcclxuaW1wb3J0IHsgbTMsIHZlYzMgfSBmcm9tIFwibWF0aFwiO1xyXG5jb25zdCB7IGNyb3NzLCBzY2FsZSwgbm9ybSwgc3VtLCBkaWZmLCBub3JtYWxpemUgfSA9IHZlYzM7XHJcbmNvbnN0IHByZWMgPSAwLjAwMDE7XHJcbmNvbnN0IHN0b3BUcmVzaG9sZCA9IDAuMDA1O1xyXG5jbGFzcyBSaWdpZEJvZHkgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xyXG4gIHN0YXRpYyBjb25maWcgPSB7XHJcbiAgICB0cmVzaG9sZCA6IDAuMDA1LFxyXG4gICAgcHJlY2lzaW9uIDogMC4wMDAxXHJcbiAgfVxyXG4gIHN0YXRpYyBzZXRUcmVzaG9sZCh0cmVzaG9sZCl7XHJcbiAgICBSaWdpZEJvZHkuY29uZmlnLnRyZXNob2xkID0gdHJlc2hvbGRcclxuICB9XHJcbiAgY29uc3RydWN0b3IoY29sbGlkZXIpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLkRPRiA9IFsxLCAxLCAxLCAxLCAxLCAxXTtcclxuICAgIHRoaXMuc3RhdGljID0gZmFsc2U7XHJcbiAgICB0aGlzLmNvbGxpZGVyID0gY29sbGlkZXI7XHJcbiAgICB0aGlzLm1hc3MgPSAxO1xyXG4gICAgdGhpcy5pbnZlcnNlTWFzcyA9IDEgLyB0aGlzLm1hc3M7XHJcbiAgICB0aGlzLnZlbG9jaXR5ID0gWzAsIDAsIDBdO1xyXG4gICAgdGhpcy5wc2V1ZG9WZWxvY2l0eSA9IFswLCAwLCAwXTtcclxuICAgIHRoaXMucHNldWRvQW5ndWxhclYgPSBbMCwgMCwgMF07XHJcbiAgICB0aGlzLmFjY2VsZXJhdGlvbiA9IFswLCAwLCAwXTtcclxuICAgIHRoaXMuYW5ndWxhclYgPSBbMCwgMCwgMF07XHJcbiAgICB0aGlzLmludmVyc2VJbmVydGlhID0gY29sbGlkZXIuZ2V0SW52ZXJzZUluZXJ0aWFUZW5zb3IodGhpcy5tYXNzKTtcclxuICAgIHRoaXMuaWQgPSAxO1xyXG4gICAgdGhpcy5mcmljdGlvbiA9IDAuNTtcclxuICAgIHRoaXMuQlZsaW5rO1xyXG4gICAgdGhpcy5vbGRWZWxvY2l0eSA9IG51bGw7XHJcbiAgICB0aGlzLmdyb3VwID0gbnVsbDtcclxuICAgIHRoaXMubmVlZFRvVXBkYXRlID0gZmFsc2VcclxuICB9XHJcblxyXG4gIGludGVncmF0ZVJLNChkdCkge1xyXG4gICAgY29uc3QgeyBhY2NlbGVyYXRpb24sIHZlbG9jaXR5LCBhbmd1bGFyViB9ID0gdGhpcztcclxuICAgIGNvbnN0IHt0cmVzaG9sZH0gPSBSaWdpZEJvZHkuY29uZmlnXHJcbiAgICBjb25zdCBfdHJhbnNsYXRpb24gPSBzY2FsZShcclxuICAgICAgc3VtKHZlbG9jaXR5LCBzY2FsZShhY2NlbGVyYXRpb24sICgyIC8gMykgKiBkdCkpLFxyXG4gICAgICBkdFxyXG4gICAgKTtcclxuICAgIGNvbnN0IF9yb3RhdGlvbiA9IHNjYWxlKGFuZ3VsYXJWLCBkdCk7XHJcbiAgICBjb25zdCBkZWx0YVZlbG9jaXR5ID0gc2NhbGUoYWNjZWxlcmF0aW9uLCBkdCk7XHJcblxyXG4gICAgaWYgKG5vcm0oX3RyYW5zbGF0aW9uKSA+IHRyZXNob2xkKSB0aGlzLnRyYW5zbGF0ZShfdHJhbnNsYXRpb24pO1xyXG5cclxuICAgIGlmIChub3JtKF9yb3RhdGlvbikgPiB0cmVzaG9sZCkgdGhpcy5yb3RhdGUoX3JvdGF0aW9uKTtcclxuICAgIHRoaXMudmVsb2NpdHkgPSBzdW0odmVsb2NpdHksIGRlbHRhVmVsb2NpdHkpO1xyXG4gIH1cclxuICBpbnRlZ3JhdGVQc2V1ZG9WZWxvY2l0aWVzKGR0KSB7XHJcbiAgICBjb25zdCB7dHJlc2hvbGR9ID0gUmlnaWRCb2R5LmNvbmZpZ1xyXG4gICAgY29uc3QgdHJhbnNsYXRpb24gPSBzY2FsZSh0aGlzLnBzZXVkb1ZlbG9jaXR5LCBkdCk7XHJcblxyXG4gICAgY29uc3Qgcm90YXRpb24gPSBzY2FsZSh0aGlzLnBzZXVkb0FuZ3VsYXJWLCBkdCk7XHJcbiAgICBpZiAobm9ybSh0cmFuc2xhdGlvbikgPiB0cmVzaG9sZCkgdGhpcy50cmFuc2xhdGUodHJhbnNsYXRpb24pO1xyXG5cclxuICAgIGlmIChub3JtKHJvdGF0aW9uKSA+IHRyZXNob2xkKSB0aGlzLnJvdGF0ZShyb3RhdGlvbik7XHJcblxyXG4gICAgdGhpcy5wc2V1ZG9WZWxvY2l0eSA9IFswLCAwLCAwXTtcclxuICAgIHRoaXMucHNldWRvQW5ndWxhclYgPSBbMCwgMCwgMF07XHJcbiAgfVxyXG4gIGFkZFBzZXVkb1ZlbG9jaXR5KHYpIHtcclxuICAgIHRoaXMucHNldWRvVmVsb2NpdHkgPSBzdW0odGhpcy5wc2V1ZG9WZWxvY2l0eSwgdik7XHJcbiAgfVxyXG4gIGFkZFBzZXVkb0FuZ3VsYXJWKHYpIHtcclxuICAgIHRoaXMucHNldWRvQW5ndWxhclYgPSBzdW0odGhpcy5wc2V1ZG9Bbmd1bGFyViwgdik7XHJcbiAgfVxyXG4gIGludGVncmF0ZVZlbG9jaXRpZXMoZHQpIHtcclxuICAgIGNvbnN0IHt0cmVzaG9sZH0gPSBSaWdpZEJvZHkuY29uZmlnXHJcbiAgICBjb25zdCB0cmFuc2xhdGlvbiA9IHNjYWxlKHRoaXMudmVsb2NpdHksIGR0KTtcclxuICAgIGlmIChub3JtKHRyYW5zbGF0aW9uKSA+IHRyZXNob2xkKSB0aGlzLnRyYW5zbGF0ZSh0cmFuc2xhdGlvbik7XHJcbiAgICBjb25zdCByb3RhdGlvbiA9IHNjYWxlKHRoaXMuYW5ndWxhclYsIGR0KTtcclxuICAgIGlmIChub3JtKHJvdGF0aW9uKSA+IHRyZXNob2xkKSB0aGlzLnJvdGF0ZShyb3RhdGlvbik7XHJcbiAgfVxyXG4gIGludGVncmF0ZUZvcmNlcyhkdCkge1xyXG4gICAgbGV0IGRlbHRhU3BlZWQgPSBzY2FsZSh0aGlzLmFjY2VsZXJhdGlvbiwgZHQpO1xyXG5cclxuICAgIHRoaXMudmVsb2NpdHkgPSBzdW0odGhpcy52ZWxvY2l0eSwgZGVsdGFTcGVlZCk7XHJcbiAgfVxyXG4gIHVwZGF0ZUludmVyc2VJbmVydGlhKCkge1xyXG4gICAgdGhpcy5pbnZlcnNlSW5lcnRpYSA9IHRoaXMuY29sbGlkZXIuZ2V0SW52ZXJzZUluZXJ0aWFUZW5zb3IodGhpcy5tYXNzKTtcclxuICB9XHJcbiAgZ2V0SXRlbnNvcigpIHtcclxuICAgIHJldHVybiB0aGlzLmNvbGxpZGVyLmdldEludmVyc2VJbmVydGlhVGVuc29yKHRoaXMubWFzcyk7XHJcbiAgfVxyXG4gIHNldE1hc3MobWFzcykge1xyXG4gICAgdGhpcy5tYXNzID0gbWFzcztcclxuICAgIHRoaXMuaW52ZXJzZU1hc3MgPSAxIC8gdGhpcy5tYXNzO1xyXG4gIH1cclxuICB0cmFuc2xhdGUodHJhbnNsYXRpb24pIHtcclxuICAgIHRoaXMuY29sbGlkZXIudHJhbnNsYXRlKHRyYW5zbGF0aW9uKTtcclxuXHJcbiAgICB0aGlzLm5lZWRUb1VwZGF0ZSA9IHRydWVcclxuICAgIHRoaXMuZW1pdChcInVwZGF0ZVwiKTtcclxuICB9XHJcbiAgcm90YXRlKHJvdGF0aW9uKSB7XHJcbiAgICB0aGlzLmNvbGxpZGVyLnJvdGF0ZShyb3RhdGlvbik7XHJcbiAgICB0aGlzLm5lZWRUb1VwZGF0ZSA9IHRydWVcclxuICAgIHRoaXMuZW1pdChcInVwZGF0ZVwiKTtcclxuICB9XHJcblxyXG4gIGFwcGx5SW1wdWxzZShpbXB1bHNlLCBwb2ludCkge1xyXG4gICAgaWYgKHRoaXMuc3RhdGljKSByZXR1cm47XHJcbiAgICB0aGlzLnZlbG9jaXR5ID0gc3VtKHRoaXMudmVsb2NpdHksIHNjYWxlKGltcHVsc2UsIHRoaXMuaW52ZXJzZU1hc3MpKTtcclxuICAgIGNvbnN0IGFuZ3VsYXJJbXB1bHNlID0gbTMudHJhbnNmb3JtUG9pbnQoXHJcbiAgICAgIHRoaXMuaW52ZXJzZUluZXJ0aWEsXHJcbiAgICAgIGNyb3NzKHBvaW50LCBpbXB1bHNlKVxyXG4gICAgKTtcclxuICAgIHRoaXMuYW5ndWxhclYgPSBzdW0odGhpcy5hbmd1bGFyViwgYW5ndWxhckltcHVsc2UpO1xyXG4gIH1cclxuICBhcHBseVBzZXVkb0ltcHVsc2UoaW1wdWxzZSwgcG9pbnQpIHtcclxuICAgIGlmICh0aGlzLnN0YXRpYykgcmV0dXJuO1xyXG4gICAgdGhpcy5wc2V1ZG9WZWxvY2l0eSA9IHN1bShcclxuICAgICAgdGhpcy5wc2V1ZG9WZWxvY2l0eSxcclxuICAgICAgc2NhbGUoaW1wdWxzZSwgdGhpcy5pbnZlcnNlTWFzcylcclxuICAgICk7XHJcbiAgICBjb25zdCBhbmd1bGFySW1wdWxzZSA9IG0zLnRyYW5zZm9ybVBvaW50KFxyXG4gICAgICB0aGlzLmludmVyc2VJbmVydGlhLFxyXG4gICAgICBjcm9zcyhwb2ludCwgaW1wdWxzZSlcclxuICAgICk7XHJcbiAgICB0aGlzLnBzZXVkb0FuZ3VsYXJWID0gc3VtKHRoaXMucHNldWRvQW5ndWxhclYsIGFuZ3VsYXJJbXB1bHNlKTtcclxuICB9XHJcbiAgYWRkVmVsb2NpdHkodikge1xyXG4gICAgdGhpcy52ZWxvY2l0eSA9IHN1bSh0aGlzLnZlbG9jaXR5LCB2KTtcclxuICB9XHJcbiAgYWRkQW5ndWxhclYodikge1xyXG4gICAgdGhpcy5hbmd1bGFyViA9IHN1bSh0aGlzLmFuZ3VsYXJWLCB2KTtcclxuICB9XHJcbiAgYWRkQWNjZWxlcmF0aW9uKHYpIHtcclxuICAgIHRoaXMuYWNjZWxlcmF0aW9uID0gc3VtKHRoaXMuYWNjZWxlcmF0aW9uLCB2KTtcclxuICB9XHJcbiAgYXBwbHlBbmd1bGFySW1wdWxzZShyYWRpdXMsIGF4aXMsIHZhbHVlKSB7XHJcbiAgICBjb25zdCBkaXIgPSBub3JtYWxpemUoW1xyXG4gICAgICBheGlzWzFdICsgYXhpc1syXSxcclxuICAgICAgYXhpc1syXSAtIGF4aXNbMF0sXHJcbiAgICAgIC1heGlzWzBdIC0gYXhpc1sxXSxcclxuICAgIF0pO1xyXG4gICAgY29uc3QgcmFkID0gdmVjdG9yLmNyb3NzKGRpciwgYXhpcyk7XHJcbiAgICBjb25zdCBnbG9iYWxEaXIgPSBzY2FsZShkaXIsIHZhbHVlKTtcclxuICAgIGNvbnN0IGdsb2JhbFJhZCA9IHNjYWxlKHJhZCwgcmFkaXVzKTtcclxuXHJcbiAgICB0aGlzLmFwcGx5SW1wdWxzZShnbG9iYWxEaXIsIGdsb2JhbFJhZCk7XHJcbiAgfVxyXG4gIGdldEV4cGFuZGVkQUFCQigpIHtcclxuICAgIGNvbnN0IHtwcmVjaXNpb259ID0gUmlnaWRCb2R5LmNvbmZpZ1xyXG4gICAgY29uc3QgYWFiYiA9IHRoaXMuY29sbGlkZXIuZ2V0QUFCQigpO1xyXG4gICAgY29uc3QgdmVsb2NpdHkgPSB0aGlzLnZlbG9jaXR5O1xyXG4gICAgY29uc3QgdHIgPSBbcHJlY2lzaW9uLCBwcmVjaXNpb24sIHByZWNpc2lvbl07XHJcbiAgICBhYWJiLm1pbiA9IGRpZmYoYWFiYi5taW4sIHRyKTtcclxuICAgIGFhYmIubWF4ID0gc3VtKGFhYmIubWF4LCB0cik7XHJcblxyXG4gICAgLyppZih2ZWxvY2l0eVswXSA+IDEwKSBhYWJiLm1heFswXSArPSB2ZWxvY2l0eVswXVxyXG4gICAgICBpZih2ZWxvY2l0eVsxXSA+IDEwKSBhYWJiLm1heFsxXSArPSB2ZWxvY2l0eVsxXVxyXG4gICAgICBpZih2ZWxvY2l0eVsyXSA+IDEwKSBhYWJiLm1heFsyXSArPSB2ZWxvY2l0eVsyXVxyXG4gICAgICBpZih2ZWxvY2l0eVswXSA8IC0xMCkgYWFiYi5taW5bMF0gKz0gdmVsb2NpdHlbMF1cclxuICAgICAgaWYodmVsb2NpdHlbMV0gPCAtMTApIGFhYmIubWluWzFdICs9IHZlbG9jaXR5WzFdXHJcbiAgICAgIGlmKHZlbG9jaXR5WzJdIDwgLTEwKSBhYWJiLm1pblsyXSArPSB2ZWxvY2l0eVsyXSovXHJcbiAgICByZXR1cm4gYWFiYjtcclxuICB9XHJcbiAgZ2V0QUFCQigpIHtcclxuICAgIHJldHVybiB0aGlzLmNvbGxpZGVyLmdldEFBQkIoKTtcclxuICB9XHJcbn1cclxuXHJcbmNsYXNzIFBsYXllciBleHRlbmRzIFJpZ2lkQm9keSB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlciguLi5hcmd1bWVudHMpO1xyXG4gICAgdGhpcy5mcmljdGlvbiA9IDAuMztcclxuICAgIHRoaXMuRE9GID0gWzEsIDEsIDEsIDAsIDAsIDBdO1xyXG4gIH1cclxuICBhcHBseUltcHVsc2UoaW1wdWxzZSwgcG9pbnQpIHtcclxuICAgIHRoaXMudmVsb2NpdHkgPSBzdW0odGhpcy52ZWxvY2l0eSwgc2NhbGUoaW1wdWxzZSwgdGhpcy5pbnZlcnNlTWFzcykpO1xyXG4gIH1cclxuICBhcHBseVBzZXVkb0ltcHVsc2UoaW1wdWxzZSkge1xyXG4gICAgdGhpcy5wc2V1ZG9WZWxvY2l0eSA9IHN1bShcclxuICAgICAgdGhpcy5wc2V1ZG9WZWxvY2l0eSxcclxuICAgICAgc2NhbGUoaW1wdWxzZSwgdGhpcy5pbnZlcnNlTWFzcylcclxuICAgICk7XHJcbiAgfVxyXG59XHJcbmV4cG9ydCB7IFJpZ2lkQm9keSwgUGxheWVyIH07XHJcbiIsImltcG9ydCBUcmVlIGZyb20gXCIuL1RyZWVcIjtcclxuaW1wb3J0IHsgdmVjMyB9IGZyb20gXCJtYXRoXCI7XHJcblxyXG5pbXBvcnQgeyBnamsgfSBmcm9tIFwiLi9namtcIjtcclxuXHJcbmltcG9ydCBNYW5pZm9sZCBmcm9tIFwiLi9tYW5pZm9sZFwiO1xyXG5pbXBvcnQgU3lzdGVtIGZyb20gXCIuL1N5c3RlbVwiO1xyXG5cclxuaW1wb3J0IHtcclxuICBDb25zdHJhaW50LFxyXG4gIENvbnRhY3RDb25zdHJhaW50LFxyXG4gIEZyaWN0aW9uQ29uc3RyYWludCxcclxuICBQb3NpdGlvbkNvbnN0cmFpbnQsXHJcbn0gZnJvbSBcIi4vY29uc3RyYWludHNcIjtcclxuXHJcbmNvbnN0IHNhbWVHcm91cCA9IChib2R5MSwgYm9keTIpID0+IHtcclxuICBpZiAoIWJvZHkxLmdyb3VwKSByZXR1cm47XHJcbiAgaWYgKCFib2R5Mi5ncm91cCkgcmV0dXJuO1xyXG4gIHJldHVybiBib2R5MS5ncm91cCA9PT0gYm9keTIuZ3JvdXA7XHJcbn07XHJcbmNvbnN0IHBhaXJIYXNoID0gKHgsIHkpID0+XHJcbiAgeCA9PT0gTWF0aC5tYXgoeCwgeSkgPyB4ICogeCArIHggKyB5IDogeSAqIHkgKyB4ICsgeTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpbXVsYXRpb24ge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5vYmplY3RzID0gW107XHJcbiAgICB0aGlzLmJ2aCA9IG5ldyBUcmVlKCk7XHJcbiAgICB0aGlzLnN0YXRpY0J2aCA9IG5ldyBUcmVlKClcclxuICAgIHRoaXMuY29sbGlzaW9ucyA9IFtdO1xyXG4gICAgdGhpcy5jb25zdHJhaW50cyA9IG5ldyBNYXAoKTtcclxuICAgIHRoaXMucG9zaXRpb25Db25zdHJhaW50cyA9IG5ldyBNYXAoKTtcclxuICAgIHRoaXMuY29sbGlzaW9uTWFuaWZvbGRzID0gbmV3IE1hcCgpO1xyXG4gICAgdGhpcy5sYXN0SWQgPSAxO1xyXG4gIH1cclxuICBhZGRPYmplY3Qob2JqZWN0KSB7XHJcbiAgICBjb25zdCBhYWJiID0gb2JqZWN0LmdldEV4cGFuZGVkQUFCQigpO1xyXG5cclxuICAgIGNvbnN0IGxlYWYgPSB0aGlzLmJ2aC5pbnNlcnRMZWFmKGFhYmIsIG9iamVjdCk7XHJcbiAgICBvYmplY3QuQlZsaW5rID0gbGVhZjtcclxuICAgIG9iamVjdC5pZCA9IHRoaXMubGFzdElkO1xyXG4gICAgdGhpcy5sYXN0SWQrKztcclxuICAgIG9iamVjdC5vbihcInVwZGF0ZVwiLCAoKSA9PiB0aGlzLnVwZGF0ZU9iamVjdEFBQkIuY2FsbCh0aGlzLCBvYmplY3QpKTtcclxuXHJcbiAgICB0aGlzLm9iamVjdHMucHVzaChvYmplY3QpO1xyXG4gIH1cclxuICBhZGRTdGF0aWNPYmplY3Qob2JqZWN0KXtcclxuICAgIGNvbnN0IGFhYmIgPSBvYmplY3QuZ2V0RXhwYW5kZWRBQUJCKCk7XHJcblxyXG4gICAgY29uc3QgbGVhZiA9IHRoaXMuc3RhdGljQnZoLmluc2VydExlYWYoYWFiYiwgb2JqZWN0KTtcclxuICAgIG9iamVjdC5CVmxpbmsgPSBsZWFmO1xyXG4gICAgb2JqZWN0LmlkID0gdGhpcy5sYXN0SWQ7XHJcbiAgICB0aGlzLmxhc3RJZCsrO1xyXG4gICAgdGhpcy5vYmplY3RzLnB1c2gob2JqZWN0KTtcclxuICAgIG9iamVjdC5vbihcInVwZGF0ZVwiLCAoKSA9PiB0aGlzLnVwZGF0ZU9iamVjdEFBQkIuY2FsbCh0aGlzLCBvYmplY3QpKTtcclxuICB9XHJcbiAgYWRkQ29uc3RyYWludHMoY29uc3RyYWludHMsIG5hbWUpIHtcclxuICAgIHRoaXMuY29uc3RyYWludHMuc2V0KG5hbWUsIFsuLi5jb25zdHJhaW50c10pXHJcbiAgfVxyXG4gIGFkZFBvc2l0aW9uQ29uc3RyYWludHMoY29uc3RyYWludHMsIG5hbWUpIHtcclxuICAgIHRoaXMucG9zaXRpb25Db25zdHJhaW50cy5zZXQobmFtZSwgWy4uLmNvbnN0cmFpbnRzXSlcclxuICB9XHJcbiAgdXBkYXRlT2JqZWN0QUFCQihvYmplY3QpIHtcclxuICAgIGNvbnN0IG5ld0FBQkIgPSBvYmplY3QuZ2V0QUFCQigpO1xyXG5cclxuICAgIHRoaXMuYnZoLnJlbW92ZUxlYWYob2JqZWN0LkJWbGluayk7XHJcbiAgICBjb25zdCBsZWFmID0gdGhpcy5idmguaW5zZXJ0TGVhZihuZXdBQUJCLCBvYmplY3QpO1xyXG4gICAgb2JqZWN0LkJWbGluayA9IGxlYWY7XHJcbiAgfVxyXG4gIHJlbW92ZU9iamVjdChvYmplY3QpIHtcclxuICAgIHRoaXMuYnZoLnJlbW92ZUxlYWYob2JqZWN0LkJWbGluayk7XHJcbiAgICB0aGlzLm9iamVjdHMgPSB0aGlzLm9iamVjdHMuZmlsdGVyKChlbCkgPT4gZWwgPT09IG9iamVjdCk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVDb2xsaXNpb25zKCkge1xyXG4gICAgY29uc3QgeyBjb2xsaXNpb25NYW5pZm9sZHMgfSA9IHRoaXM7XHJcbiAgICBmb3IgKGNvbnN0IFtoYXNoLCBtYW5pZm9sZF0gb2YgY29sbGlzaW9uTWFuaWZvbGRzKSB7XHJcbiAgICAgIG1hbmlmb2xkLnVwZGF0ZSgpO1xyXG4gICAgICBpZiAoIW1hbmlmb2xkLmtlZXApIGNvbGxpc2lvbk1hbmlmb2xkcy5kZWxldGUoaGFzaCk7XHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCBpID0gMCwgbiA9IHRoaXMub2JqZWN0cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgY29uc3Qgb2JqZWN0ID0gdGhpcy5vYmplY3RzW2ldO1xyXG4gICAgICBpZiAob2JqZWN0LnN0YXRpYykgY29udGludWU7XHJcbiAgICAgIGNvbnN0IGludGVyc2VjdHMgPSB0aGlzLmJ2aC5nZXRDb2xsaXNpb25zKG9iamVjdC5CVmxpbmspO1xyXG4gICAgICBjb25zdCBpbnRlcnNlY3RXaXRoU3RhdGljcyA9IHRoaXMuc3RhdGljQnZoLmdldENvbGxpc2lvbnMob2JqZWN0LkJWbGluaylcclxuICAgICAgY29uc3QgY29scyA9IFsuLi5pbnRlcnNlY3RXaXRoU3RhdGljcywuLi5pbnRlcnNlY3RzXVxyXG4gICAgICBvYmplY3QuQlZsaW5rLmlzQ2hlY2tlZCA9IHRydWU7XHJcbiAgICAgIGlmIChjb2xzLmxlbmd0aCAhPSAwKVxyXG4gICAgICAgIGZvciAobGV0IGogPSAwLCBuID0gY29scy5sZW5ndGg7IGogPCBuOyBqKyspIHtcclxuICAgICAgICAgIGlmIChzYW1lR3JvdXAob2JqZWN0LCBjb2xzW2pdKSkgY29udGludWU7XHJcbiAgICAgICAgICBjb25zdCBoYXNoID0gcGFpckhhc2gob2JqZWN0LmlkLCBjb2xzW2pdLmlkKTtcclxuICAgICAgICAgIGxldCBtYW5pZm9sZCA9IHRoaXMuY29sbGlzaW9uTWFuaWZvbGRzLmdldChoYXNoKTtcclxuICAgICAgICAgIGlmIChtYW5pZm9sZCkgY29udGludWU7XHJcbiAgICAgICAgICBjb25zdCBjb250YWN0cyA9IGdqayhvYmplY3QsIGNvbHNbal0pO1xyXG5cclxuICAgICAgICAgIGlmIChjb250YWN0cykge1xyXG4gICAgICAgICAgICBtYW5pZm9sZCA9IG5ldyBNYW5pZm9sZCguLi5jb250YWN0cyk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmNvbGxpc2lvbk1hbmlmb2xkcy5zZXQoaGFzaCwgbWFuaWZvbGQpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmJ2aC5zZXRVbmNoZWNrZWQoKTtcclxuICAgIHRoaXMuc3RhdGljQnZoLnNldFVuY2hlY2tlZCgpXHJcbiAgfVxyXG4gIHRpY2soZGVsdGFUaW1lKSB7XHJcbiAgICB0aGlzLnVwZGF0ZUNvbGxpc2lvbnMoKTtcclxuICAgIGxldCBtYW5pZm9sZHMgPSB0aGlzLmNvbGxpc2lvbk1hbmlmb2xkcztcclxuICAgIGZvciAobGV0IGkgPSAwLCBuID0gdGhpcy5vYmplY3RzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICB0aGlzLm9iamVjdHNbaV0uaW50ZWdyYXRlRm9yY2VzKGRlbHRhVGltZSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBzeXN0ZW0gPSBuZXcgU3lzdGVtKCk7XHJcbiAgICBjb25zdCBmcmljdGlvblN5c3RlbSA9IG5ldyBTeXN0ZW0oKTtcclxuICAgIGNvbnN0IGNvbnRhY3RDb25zdHJhaW50cyA9IFtdO1xyXG4gICAgY29uc3QgZnJpY3Rpb25Db25zdHJhaW50cyA9IFtdO1xyXG4gICAgZm9yIChsZXQgW2tleSwgbWFuaWZvbGRdIG9mIG1hbmlmb2xkcykge1xyXG4gICAgICBjb25zdCB1c2VWZWxvY2l0eUJpYXMgPSBtYW5pZm9sZC5jb250YWN0cy5sZW5ndGggPDI7XHJcblxyXG4gICAgICBtYW5pZm9sZC5jb250YWN0cy5mb3JFYWNoKChjKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBib2R5MSwgYm9keTIsIHJhTG9jYWwsIHJiTG9jYWwsIHJhLCByYiwgaSwgaiwgcGVuRGVwdGgsIG4gfSA9IGM7XHJcbiAgICAgICAgY29uc3QgY29uc3RyYWludCA9IG5ldyBDb250YWN0Q29uc3RyYWludChcclxuICAgICAgICAgIGJvZHkxLFxyXG4gICAgICAgICAgYm9keTIsXHJcbiAgICAgICAgICBuLFxyXG4gICAgICAgICAgcmEsXHJcbiAgICAgICAgICByYixcclxuICAgICAgICAgIHJhTG9jYWwsXHJcbiAgICAgICAgICByYkxvY2FsLFxyXG4gICAgICAgICAgMCxcclxuICAgICAgICAgIDAuMDA1LFxyXG4gICAgICAgICAgcGVuRGVwdGgsXHJcbiAgICAgICAgICBpLFxyXG4gICAgICAgICAgalxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGNvbnN0IGZDb25zdHJhaW50MSA9IG5ldyBGcmljdGlvbkNvbnN0cmFpbnQoXHJcbiAgICAgICAgICBib2R5MSxcclxuICAgICAgICAgIGJvZHkyLFxyXG4gICAgICAgICAgdmVjMy5zY2FsZShpLCAtMSksXHJcbiAgICAgICAgICByYSxcclxuICAgICAgICAgIHJiLFxyXG4gICAgICAgICAgcmFMb2NhbCxcclxuICAgICAgICAgIHJiTG9jYWwsXHJcbiAgICAgICAgICAwLFxyXG4gICAgICAgICAgLWJvZHkxLmZyaWN0aW9uIC0gYm9keTIuZnJpY3Rpb24sXHJcbiAgICAgICAgICBib2R5MS5mcmljdGlvbiArIGJvZHkyLmZyaWN0aW9uLFxyXG4gICAgICAgICAgbnVsbFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3QgZkNvbnN0cmFpbnQyID0gbmV3IEZyaWN0aW9uQ29uc3RyYWludChcclxuICAgICAgICAgIGJvZHkxLFxyXG4gICAgICAgICAgYm9keTIsXHJcbiAgICAgICAgICB2ZWMzLnNjYWxlKGosIC0xKSxcclxuICAgICAgICAgIHJhLFxyXG4gICAgICAgICAgcmIsXHJcbiAgICAgICAgICByYUxvY2FsLFxyXG4gICAgICAgICAgcmJMb2NhbCxcclxuICAgICAgICAgIDAsXHJcbiAgICAgICAgICAtYm9keTEuZnJpY3Rpb24gLSBib2R5Mi5mcmljdGlvbixcclxuICAgICAgICAgIGJvZHkxLmZyaWN0aW9uICsgYm9keTIuZnJpY3Rpb24sXHJcbiAgICAgICAgICBudWxsXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgaWYgKDEpIHtcclxuICAgICAgICAgIGNvbnN0cmFpbnQuYmlhc0ZhY3RvciA9IDAuMTI1O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBjb250YWN0Q29uc3RyYWludHMucHVzaChjb25zdHJhaW50KTtcclxuICAgICAgICBmcmljdGlvbkNvbnN0cmFpbnRzLnB1c2goZkNvbnN0cmFpbnQxLCBmQ29uc3RyYWludDIpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHN5c3RlbS5hZGRDb25zdHJhaW50KGNvbnRhY3RDb25zdHJhaW50cyk7XHJcbiAgICBmb3IobGV0IFtuYW1lLCBjb25zdHJhaW50c10gb2YgdGhpcy5jb25zdHJhaW50cyl7XHJcbiAgICAgIHN5c3RlbS5hZGRDb25zdHJhaW50KGNvbnN0cmFpbnRzKVxyXG4gICAgfVxyXG5cclxuICAgIHN5c3RlbS51cGRhdGVFcXVhdGlvbnMoZGVsdGFUaW1lKVxyXG4gICAgZnJpY3Rpb25TeXN0ZW0uYWRkQ29uc3RyYWludChmcmljdGlvbkNvbnN0cmFpbnRzKTtcclxuICBcclxuICAgIGZyaWN0aW9uU3lzdGVtLnVwZGF0ZUVxdWF0aW9ucyhkZWx0YVRpbWUpXHJcbiAgICBzeXN0ZW0uZ2VuZXJhdGVTeXN0ZW0oZGVsdGFUaW1lKTtcclxuICAgIGNvbnN0IGxhbWJkYSA9IHN5c3RlbS5zb2x2ZVBHUyhkZWx0YVRpbWUpO1xyXG4gICAgY29uc3QgbGVuID0gZnJpY3Rpb25Db25zdHJhaW50cy5sZW5ndGgvMlxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICBmcmljdGlvbkNvbnN0cmFpbnRzWzIgKiBpXS5sYW1iZGFNaW4gKj0gbGFtYmRhW2ldO1xyXG4gICAgICBmcmljdGlvbkNvbnN0cmFpbnRzWzIgKiBpXS5sYW1iZGFNYXggKj0gbGFtYmRhW2ldO1xyXG4gICAgICBmcmljdGlvbkNvbnN0cmFpbnRzWzIgKiBpICsgMV0ubGFtYmRhTWluICo9IGxhbWJkYVtpXTtcclxuICAgICAgZnJpY3Rpb25Db25zdHJhaW50c1syICogaSArIDFdLmxhbWJkYU1heCAqPSBsYW1iZGFbaV07XHJcbiAgICB9XHJcbiAgICBmcmljdGlvblN5c3RlbS5nZW5lcmF0ZVN5c3RlbShkZWx0YVRpbWUpO1xyXG4gICAgZnJpY3Rpb25TeXN0ZW0uc29sdmVQR1MoZGVsdGFUaW1lKTtcclxuICAgXHJcbiAgICBmb3IgKGxldCBpID0gMCwgbiA9IHRoaXMub2JqZWN0cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgdGhpcy5vYmplY3RzW2ldLmludGVncmF0ZVZlbG9jaXRpZXMoZGVsdGFUaW1lKTtcclxuICAgIH1cclxuICAgIHRoaXMub2JqZWN0cy5mb3JFYWNoKChvYmplY3QpID0+IG9iamVjdC51cGRhdGVJbnZlcnNlSW5lcnRpYSgpKTtcclxuICAgIGNvbnN0IHBvc2l0aW9uU3lzdGVtID0gbmV3IFN5c3RlbSgpO1xyXG4gICAgY29uc3QgcG9zaXRpb25Db25zdHJhaW50cyA9IFtdO1xyXG5cclxuICAgIGZvciAoY29uc3QgW2tleSwgbWFuaWZvbGRdIG9mIG1hbmlmb2xkcykge1xyXG4gICAgICBjb25zdCB7IGNvbnRhY3RzIH0gPSBtYW5pZm9sZDtcclxuICAgICAgaWYgKGNvbnRhY3RzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICBwb3NpdGlvbkNvbnN0cmFpbnRzLnB1c2goXHJcbiAgICAgICAgICAuLi5jb250YWN0cy5tYXAoKGMpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICAgIGJvZHkxLFxyXG4gICAgICAgICAgICAgIGJvZHkyLFxyXG4gICAgICAgICAgICAgIHJhTG9jYWwsXHJcbiAgICAgICAgICAgICAgcmJMb2NhbCxcclxuICAgICAgICAgICAgICByYSxcclxuICAgICAgICAgICAgICByYixcclxuICAgICAgICAgICAgICBpLFxyXG4gICAgICAgICAgICAgIGosXHJcbiAgICAgICAgICAgICAgcGVuRGVwdGgsXHJcbiAgICAgICAgICAgICAgbixcclxuICAgICAgICAgICAgfSA9IGM7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbnN0cmFpbnQgPSBuZXcgUG9zaXRpb25Db25zdHJhaW50KFxyXG4gICAgICAgICAgICAgIGJvZHkxLFxyXG4gICAgICAgICAgICAgIGJvZHkyLFxyXG4gICAgICAgICAgICAgIG4sXHJcbiAgICAgICAgICAgICAgcmEsXHJcbiAgICAgICAgICAgICAgcmIsXHJcbiAgICAgICAgICAgICAgcmFMb2NhbCxcclxuICAgICAgICAgICAgICByYkxvY2FsLFxyXG4gICAgICAgICAgICAgIDEsXHJcbiAgICAgICAgICAgICAgMC4wMDAxLFxyXG4gICAgICAgICAgICAgIHBlbkRlcHRoXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJldHVybiBjb25zdHJhaW50XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHBvc2l0aW9uU3lzdGVtLmFkZENvbnN0cmFpbnQocG9zaXRpb25Db25zdHJhaW50cylcclxuICAgIGZvcihsZXQgW25hbWUsIGNvbnN0cmFpbnRzXSBvZiB0aGlzLnBvc2l0aW9uQ29uc3RyYWludHMpe1xyXG4gICAgICBwb3NpdGlvblN5c3RlbS5hZGRDb25zdHJhaW50KGNvbnN0cmFpbnRzKVxyXG4gICAgfVxyXG4gICAgcG9zaXRpb25TeXN0ZW0udXBkYXRlRXF1YXRpb25zKGRlbHRhVGltZSlcclxuICAgIHBvc2l0aW9uU3lzdGVtLmdlbmVyYXRlU3lzdGVtKGRlbHRhVGltZSk7XHJcbiAgICBcclxuICAgIHBvc2l0aW9uU3lzdGVtLnNvbHZlUEdTKGRlbHRhVGltZSlcclxuICAgIGZvciAobGV0IGkgPSAwLCBuID0gdGhpcy5vYmplY3RzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICB0aGlzLm9iamVjdHNbaV0uaW50ZWdyYXRlUHNldWRvVmVsb2NpdGllcyhkZWx0YVRpbWUpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5vYmplY3RzLmZvckVhY2goKG9iamVjdCkgPT4gb2JqZWN0LnVwZGF0ZUludmVyc2VJbmVydGlhKCkpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyB2ZWMzIH0gZnJvbSBcIm1hdGhcIjtcclxuXHJcbmNvbnN0IHZlYzYgPSB7XHJcbiAgZG90KGEsIGIpe1xyXG4gICAgcmV0dXJuICBhWzBdICogYlswXSArXHJcbiAgICBhWzFdICogYlsxXSArIFxyXG4gICAgYVsyXSAqIGJbMl0gK1xyXG4gICAgYVszXSAqIGJbM10gK1xyXG4gICAgYVs0XSAqIGJbNF0gK1xyXG4gICAgYVs1XSAqIGJbNV1cclxuICAgICBcclxuICAgIFxyXG4gIH0sXHJcbiAgc2NhbGUoYSwgZmFjKXtcclxuICAgIHJldHVybiBbYVswXSAqIGZhYywgYVsxXSAqIGZhYywgYVsyXSAqIGZhYywgYVszXSAqIGZhYywgYVs0XSpmYWMsIGFbNV0qZmFjXVxyXG4gIH0sXHJcbiAgc3VtKGEsIGIpe1xyXG4gICAgcmV0dXJuIFtcclxuICAgICAgYVswXSArIGJbMF0sXHJcbiAgICAgIGFbMV0gKyBiWzFdLFxyXG4gICAgICBhWzJdICsgYlsyXSxcclxuICAgICAgYVszXSArIGJbM10sXHJcbiAgICAgIGFbNF0gKyBiWzRdLFxyXG4gICAgICBhWzVdICsgYls1XVxyXG4gICAgXVxyXG4gIH0sXHJcbiAgZnJvbVZlYzMoYSwgYil7XHJcbiAgICByZXR1cm4gW1xyXG4gICAgICAuLi5hLCAuLi5iXHJcbiAgICBdXHJcbiAgfVxyXG5cclxufVxyXG5jb25zdCBub3JtID0gdiA9PiBNYXRoLnNxcnQodi5yZWR1Y2UoKGFjYyxlbCkgPT4gYWNjKz1lbCplbCwgMCkpXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN5c3RlbSB7XHJcbiAgY29uc3RydWN0b3IoY29uc3RyYWludHMpIHtcclxuICAgIHRoaXMuY29uc3RyYWludHMgPSBbXTtcclxuXHJcbiAgICBcclxuXHJcbiAgfVxyXG4gIGFkZENvbnN0cmFpbnQoY29uc3RyYWludHMpe1xyXG4gICAgdGhpcy5jb25zdHJhaW50cy5wdXNoKC4uLmNvbnN0cmFpbnRzKVxyXG4gICAgXHJcbiAgfVxyXG4gIGdlbmVyYXRlQm9keU1hcHBpbmcoKXtcclxuICAgIGNvbnN0IGNvbnN0cmFpbnRzID0gdGhpcy5jb25zdHJhaW50c1xyXG4gICAgY29uc3QgbiA9IGNvbnN0cmFpbnRzLmxlbmd0aFxyXG4gICAgY29uc3QgYm9kaWVzTWFwID0gbmV3IE1hcCgpXHJcbiAgICBjb25zdCBKbWFwID0gW11cclxuICAgIGxldCBjb3VudGVyID0gMFxyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IG47IGkrKyl7XHJcbiAgICAgIGNvbnN0IGMgPSBjb25zdHJhaW50c1tpXVxyXG4gICAgICBsZXQgYm9keUluZGV4MSA9IGJvZGllc01hcC5nZXQoYy5ib2R5MS5pZClcclxuICAgICAgaWYoYm9keUluZGV4MSA9PT0gdW5kZWZpbmVkKXtcclxuICAgICAgICBib2R5SW5kZXgxID0gY291bnRlcisrXHJcbiAgICAgICAgYm9kaWVzTWFwLnNldChjLmJvZHkxLmlkLCBib2R5SW5kZXgxKVxyXG4gICAgICB9XHJcbiAgICAgIGxldCBib2R5SW5kZXgyID0gYm9kaWVzTWFwLmdldChjLmJvZHkyLmlkKVxyXG4gICAgICBpZihib2R5SW5kZXgyID09PSB1bmRlZmluZWQpe1xyXG4gICAgICAgIGJvZHlJbmRleDIgPSBjb3VudGVyKytcclxuICAgICAgICBib2RpZXNNYXAuc2V0KGMuYm9keTIuaWQsIGJvZHlJbmRleDIpXHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIEptYXAucHVzaChib2R5SW5kZXgxLCBib2R5SW5kZXgyKVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICB0aGlzLmJvZGllc01hcCA9IGJvZGllc01hcFxyXG4gICAgdGhpcy5KbWFwID0gSm1hcFxyXG4gIH1cclxuICBnZW5lcmF0ZVBzZXVkb1ZlbFZlY3RvcigpIHt9XHJcbiAgZ2VuZXJhdGVTeXN0ZW0oZGVsdGFUaW1lKSB7XHJcbiAgIFxyXG4gICAgLy9OdW1lcmF0aW5nIGJvZGllc1xyXG4gICAgdGhpcy5nZW5lcmF0ZUJvZHlNYXBwaW5nKClcclxuXHJcblxyXG4gICAgLypmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xyXG4gICAgICBjb25zdCBjb25zdHJhaW50ID0gdGhpcy5jb25zdHJhaW50c1tpXTtcclxuICAgICAgY29uc3QgeyBib2R5MSwgYm9keTIsIEogfSA9IGNvbnN0cmFpbnQ7XHJcbiAgICAgIGNvbnN0IGsgPSBpICogbjtcclxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBuOyBqKyspIHtcclxuICAgICAgICBpZiAoayA9PT0gaikge1xyXG4gICAgICAgICAgdGhpcy5KTUpbayArIGpdID0gKCkgPT4gY29uc3RyYWludC5lZmZNYXNzO1xyXG4gICAgICAgICAgdGhpcy5KTUpwW2sgKyBqXSA9ICgpID0+XHJcbiAgICAgICAgICAgIGNvbnN0cmFpbnQuYm9keTEuaW52ZXJzZU1hc3MgKyBjb25zdHJhaW50LmJvZHkyLmludmVyc2VNYXNzO1xyXG4gICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBfY29uc3RyYWludCA9IHRoaXMuY29uc3RyYWludHNbal07XHJcblxyXG4gICAgICAgIGNvbnN0IF9ib2R5MSA9IF9jb25zdHJhaW50LmJvZHkxO1xyXG4gICAgICAgIGNvbnN0IF9ib2R5MiA9IF9jb25zdHJhaW50LmJvZHkyO1xyXG5cclxuICAgICAgICBjb25zdCBmcDEgPVxyXG4gICAgICAgICAgYm9keTEgPT09IF9ib2R5MVxyXG4gICAgICAgICAgICA/ICgpID0+IHZlYy5kb3QoY29uc3RyYWludC5KTVswXSwgX2NvbnN0cmFpbnQuSlswXSlcclxuICAgICAgICAgICAgOiAoKSA9PiAwO1xyXG4gICAgICAgIGNvbnN0IGZwMiA9XHJcbiAgICAgICAgICBib2R5MiA9PT0gX2JvZHkyXHJcbiAgICAgICAgICAgID8gKCkgPT4gdmVjLmRvdChjb25zdHJhaW50LkpNWzJdLCBfY29uc3RyYWludC5KWzJdKVxyXG4gICAgICAgICAgICA6ICgpID0+IDA7XHJcbiAgICAgICAgY29uc3QgZnAzID1cclxuICAgICAgICAgIGJvZHkxID09PSBfYm9keTJcclxuICAgICAgICAgICAgPyAoKSA9PiB2ZWMuZG90KGNvbnN0cmFpbnQuSk1bMF0sIF9jb25zdHJhaW50LkpbMl0pXHJcbiAgICAgICAgICAgIDogKCkgPT4gMDtcclxuICAgICAgICBjb25zdCBmcDQgPVxyXG4gICAgICAgICAgYm9keTIgPT09IF9ib2R5MVxyXG4gICAgICAgICAgICA/ICgpID0+IHZlYy5kb3QoY29uc3RyYWludC5KTVsyXSwgX2NvbnN0cmFpbnQuSlswXSlcclxuICAgICAgICAgICAgOiAoKSA9PiAwO1xyXG4gICAgICAgIGNvbnN0IGYxID1cclxuICAgICAgICAgIGJvZHkxID09PSBfYm9keTFcclxuICAgICAgICAgICAgPyAoKSA9PlxyXG4gICAgICAgICAgICAgICAgdmVjLmRvdChjb25zdHJhaW50LkpNWzBdLCBfY29uc3RyYWludC5KWzBdKSArXHJcbiAgICAgICAgICAgICAgICB2ZWMuZG90KGNvbnN0cmFpbnQuSk1bMV0sIF9jb25zdHJhaW50LkpbMV0pXHJcbiAgICAgICAgICAgIDogKCkgPT4gMDtcclxuICAgICAgICBjb25zdCBmMiA9XHJcbiAgICAgICAgICBib2R5MiA9PT0gX2JvZHkyXHJcbiAgICAgICAgICAgID8gKCkgPT5cclxuICAgICAgICAgICAgICAgIHZlYy5kb3QoY29uc3RyYWludC5KTVsyXSwgX2NvbnN0cmFpbnQuSlsyXSkgK1xyXG4gICAgICAgICAgICAgICAgdmVjLmRvdChjb25zdHJhaW50LkpNWzNdLCBfY29uc3RyYWludC5KWzNdKVxyXG4gICAgICAgICAgICA6ICgpID0+IDA7XHJcbiAgICAgICAgY29uc3QgZjMgPVxyXG4gICAgICAgICAgYm9keTEgPT09IF9ib2R5MlxyXG4gICAgICAgICAgICA/ICgpID0+XHJcbiAgICAgICAgICAgICAgICB2ZWMuZG90KGNvbnN0cmFpbnQuSk1bMF0sIF9jb25zdHJhaW50LkpbMl0pICtcclxuICAgICAgICAgICAgICAgIHZlYy5kb3QoY29uc3RyYWludC5KTVsxXSwgX2NvbnN0cmFpbnQuSlszXSlcclxuICAgICAgICAgICAgOiAoKSA9PiAwO1xyXG4gICAgICAgIGNvbnN0IGY0ID1cclxuICAgICAgICAgIGJvZHkyID09PSBfYm9keTFcclxuICAgICAgICAgICAgPyAoKSA9PlxyXG4gICAgICAgICAgICAgICAgdmVjLmRvdChjb25zdHJhaW50LkpNWzJdLCBfY29uc3RyYWludC5KWzBdKSArXHJcbiAgICAgICAgICAgICAgICB2ZWMuZG90KGNvbnN0cmFpbnQuSk1bM10sIF9jb25zdHJhaW50LkpbMV0pXHJcbiAgICAgICAgICAgIDogKCkgPT4gMDtcclxuXHJcbiAgICAgICAgdGhpcy5KTUpbayArIGpdID0gKCkgPT4gZjEoKSArIGYyKCkgKyBmMygpICsgZjQoKTtcclxuICAgICAgICB0aGlzLkpNSnBbayArIGpdID0gKCkgPT4gZnAxKCkgKyBmcDIoKSArIGZwMygpICsgZnA0KCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICAgdmVjLmRvdChKWzBdLCBib2R5MS52ZWxvY2l0eSkgK1xyXG4gICAgICAgIHZlYy5kb3QoSlsxXSwgYm9keTEuYW5ndWxhclYpICtcclxuICAgICAgICB2ZWMuZG90KEpbMl0sIGJvZHkyLnZlbG9jaXR5KSArXHJcbiAgICAgICAgdmVjLmRvdChKWzNdLCBib2R5Mi5hbmd1bGFyVik7XHJcbiAgICAgIHRoaXMuSlZbaV0gPSAoZGVsdGFUaW1lKSA9PlxyXG4gICAgICAgIC1jb25zdHJhaW50LnJlbGF0aXZlVmVsb2NpdHlOb3JtYWxQcm9qZWN0aW9uICtcclxuICAgICAgICAoTWF0aC5tYXgoMCwgY29uc3RyYWludC5wZW5EZXB0aCAtIGNvbnN0cmFpbnQudHJlc2hvbGQpIC8gZGVsdGFUaW1lKSAqXHJcbiAgICAgICAgICBjb25zdHJhaW50LmJpYXNGYWN0b3I7IC8vKyBiKiAwLjEyNTtcclxuXHJcbiAgICAgIHRoaXMuSnBWW2ldID0gKCkgPT4gLXZlYy5kb3QoSlswXSwgYm9keTEucHNldWRvVmVsb2NpdHkpIC1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlYy5kb3QoSlsxXSwgYm9keTEucHNldWRvQW5ndWxhclYpIC1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlYy5kb3QoSlsyXSwgYm9keTIucHNldWRvVmVsb2NpdHkpIC1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVjLmRvdChKWzNdLCBib2R5Mi5wc2V1ZG9Bbmd1bGFyVikgLSBjb25zdHJhaW50LmJpYXMvZGVsdGFUaW1lIFxyXG4gICAgICB0aGlzLkpwVltpXSA9IChkZWx0YVRpbWUpID0+XHJcbiAgICAgICAgKE1hdGgubWF4KDAsIGNvbnN0cmFpbnQucGVuRGVwdGggLSBjb25zdHJhaW50LnRyZXNob2xkKSAvIGRlbHRhVGltZSkgKlxyXG4gICAgICAgIGNvbnN0cmFpbnQucHNldWRvQmlhc0ZhY3RvcjtcclxuICAgIH0qL1xyXG4gIH1cclxuICAvL0ogKiBWZWxcclxuICBcclxuICBzb2x2ZVBHUyhkZWx0YVRpbWUpe1xyXG5cclxuICAgIFxyXG4gICAgY29uc3Qge0ptYXAsIGJvZGllc01hcCwgY29uc3RyYWludHN9ID0gdGhpc1xyXG4gICAgY29uc3QgbnVtQm9kaWVzID0gYm9kaWVzTWFwLnNpemVcclxuICAgIGNvbnN0IG4gPSBjb25zdHJhaW50cy5sZW5ndGhcclxuICAgIGNvbnN0IGQgPSBbXVxyXG4gICAgXHJcbiAgICBjb25zdCBsYW1iZGEwID0gbmV3IEFycmF5KG4pLmZpbGwoMClcclxuXHJcblxyXG4gICAgLy9CSmxhbWJkYVxyXG4gICAgXHJcbiAgICBjb25zdCBCbCA9IG5ldyBBcnJheShudW1Cb2RpZXMpLmZpbGwoWzAsMCwwLDAsMCwwXSlcclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBuOyBpKyspe1xyXG4gICAgICBjb25zdCBiMSA9IEptYXBbaSAqIDIgXVxyXG4gICAgICBjb25zdCBiMiA9IEptYXBbaSAqIDIgKyAxXSBcclxuICAgIFxyXG4gICAgIFxyXG4gICAgICBcclxuICAgICAgQmxbYjFdID0gdmVjNi5zdW0odmVjNi5zY2FsZShjb25zdHJhaW50c1tpXS5CWzBdLCBsYW1iZGEwW2ldKSwgQmxbYjFdKVxyXG4gICAgICBcclxuICAgICAgXHJcbiAgICAgIEJsW2IyXSA9IHZlYzYuc3VtKHZlYzYuc2NhbGUoY29uc3RyYWludHNbaV0uQlsxXSwgbGFtYmRhMFtpXSksIEJsW2IyXSlcclxuICAgIFxyXG4gICAgICBcclxuICAgIH1cclxuICBcclxuICAgIC8vUEdTXHJcbiBcclxuICAgIFxyXG4gICAgY29uc3QgbGFtYmRhID0gWy4uLmxhbWJkYTBdXHJcbiAgICBmb3IobGV0IGkgPSAwOyBpPCBuOyBpKyspe1xyXG4gICAgICBkLnB1c2goY29uc3RyYWludHNbaV0uZWZmTWFzcylcclxuICAgIH1cclxuICAgIGxldCBmbGFnID0gdHJ1ZVxyXG4gICAgbGV0IG51bUl0ZXIgPSAxNVxyXG5cclxuICAgIGNvbnN0IGRlbHRhTGFtYmRhID0gbmV3IEFycmF5KG4pLmZpbGwoMClcclxuICAgIHdoaWxlKG51bUl0ZXIgPiAwICl7XHJcbiAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBuOyBpKyspe1xyXG4gICAgICAgIGNvbnN0IGMgPSBjb25zdHJhaW50c1tpXVxyXG4gICAgICAgIGNvbnN0IEogPSBjLl9KXHJcbiAgICAgICAgY29uc3QgYjEgPSBKbWFwW2kgKiAyIF1cclxuICAgICAgICBjb25zdCBiMiA9IEptYXBbaSAqIDIgKyAxXVxyXG4gICAgICAgXHJcbiAgICAgICAgZGVsdGFMYW1iZGFbaV0gPSAoYy5iaWFzIC0gdmVjNi5kb3QoSlswXSwgQmxbYjFdKSAtIHZlYzYuZG90KEpbMV0sIEJsW2IyXSkpIC8gZFtpXVxyXG4gICAgICAgIFxyXG4gICAgICAgIGxhbWJkYTBbaV0gPSBsYW1iZGFbaV1cclxuICAgICAgICBsYW1iZGFbaV0gPSBNYXRoLm1heChjLmxhbWJkYU1pbiwgTWF0aC5taW4obGFtYmRhMFtpXSArIGRlbHRhTGFtYmRhW2ldLCBjLmxhbWJkYU1heCkpXHJcbiAgICAgICAgXHJcbiAgICAgICAgZGVsdGFMYW1iZGFbaV0gPSBsYW1iZGFbaV0gLSBsYW1iZGEwW2ldXHJcbiAgICAgICAgXHJcbiAgICAgICAgQmxbYjFdID0gdmVjNi5zdW0oQmxbYjFdLCB2ZWM2LnNjYWxlKGMuQlswXSwgZGVsdGFMYW1iZGFbaV0pKVxyXG4gICAgICAgIEJsW2IyXSA9IHZlYzYuc3VtKEJsW2IyXSwgdmVjNi5zY2FsZShjLkJbMV0sIGRlbHRhTGFtYmRhW2ldKSlcclxuICAgICAgXHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIG51bUl0ZXItLVxyXG4gICAgfVxyXG4gICBcclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBuOyBpKyspe1xyXG4gICAgICBjb25zdHJhaW50c1tpXS5hcHBseVJlc29sdmluZ0ltcHVsc2UobGFtYmRhW2ldKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGxhbWJkYVxyXG4gIH1cclxuICB1cGRhdGVFcXVhdGlvbnMoZGVsdGFUaW1lKXtcclxuICAgIGNvbnN0IHtjb25zdHJhaW50c30gPSB0aGlzXHJcbiAgICBjb25zdCBuID0gY29uc3RyYWludHMubGVuZ3RoXHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgbjsgaSArKyl7XHJcbiAgICAgIGNvbnN0cmFpbnRzW2ldLnVwZGF0ZUxlZnRQYXJ0KGRlbHRhVGltZSlcclxuICAgICAgY29uc3RyYWludHNbaV0udXBkYXRlUmlnaHRQYXJ0KGRlbHRhVGltZSlcclxuICAgIH1cclxuICB9XHJcbiAgYXBwbHlSZXNvbHZpbmdJbXB1bHNlcyhsYW1iZGEpIHtcclxuICAgIGZvciAobGV0IGkgPSAwLCBuID0gdGhpcy5jb25zdHJhaW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgdGhpcy5jb25zdHJhaW50c1tpXS5hcHBseVJlc29sdmluZ0ltcHVsc2UobGFtYmRhW2ldKTtcclxuICAgIH1cclxuICB9XHJcbiAgYXBwbHlSZXNvbHZpbmdQc2V1ZG9JbXB1bHNlcyhsYW1iZGEpIHtcclxuICAgIGZvciAobGV0IGkgPSAwLCBuID0gdGhpcy5jb25zdHJhaW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgdGhpcy5jb25zdHJhaW50c1tpXS5hcHBseVJlc29sdmluZ1BzZXVkb0ltcHVsc2UobGFtYmRhW2ldKTtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcbiIsImltcG9ydCB7IEFBQkIgfSBmcm9tIFwibWF0aFwiO1xyXG5jb25zdCBnZXRCb3VuZEFhYmIgPSAoYWFiYjEsIGFhYmIyKSA9PiB7XHJcbiAgaWYgKCFhYWJiMSB8fCAhYWFiYjIpIHtcclxuICAgIHJldHVybiAwO1xyXG4gIH1cclxuICBjb25zdCB4MSA9IGFhYmIxLm1pblswXSA8IGFhYmIyLm1pblswXSA/IGFhYmIxLm1pblswXSA6IGFhYmIyLm1pblswXTtcclxuICBjb25zdCB4MiA9IGFhYmIxLm1heFswXSA+IGFhYmIyLm1heFswXSA/IGFhYmIxLm1heFswXSA6IGFhYmIyLm1heFswXTtcclxuICBjb25zdCB5MSA9IGFhYmIxLm1pblsxXSA8IGFhYmIyLm1pblsxXSA/IGFhYmIxLm1pblsxXSA6IGFhYmIyLm1pblsxXTtcclxuICBjb25zdCB5MiA9IGFhYmIxLm1heFsxXSA+IGFhYmIyLm1heFsxXSA/IGFhYmIxLm1heFsxXSA6IGFhYmIyLm1heFsxXTtcclxuICBjb25zdCB6MSA9IGFhYmIxLm1pblsyXSA8IGFhYmIyLm1pblsyXSA/IGFhYmIxLm1pblsyXSA6IGFhYmIyLm1pblsyXTtcclxuICBjb25zdCB6MiA9IGFhYmIxLm1heFsyXSA+IGFhYmIyLm1heFsyXSA/IGFhYmIxLm1heFsyXSA6IGFhYmIyLm1heFsyXTtcclxuICByZXR1cm4gbmV3IEFBQkIoW3gxLCB5MSwgejFdLCBbeDIsIHkyLCB6Ml0pO1xyXG59O1xyXG5jb25zdCBpc0NvbGxpZGUgPSAoYWFiYjEsIGFhYmIyKSA9PiB7XHJcbiAgaWYgKFxyXG4gICAgYWFiYjEubWluWzBdIDw9IGFhYmIyLm1heFswXSAmJlxyXG4gICAgYWFiYjEubWF4WzBdID49IGFhYmIyLm1pblswXSAmJlxyXG4gICAgYWFiYjEubWluWzFdIDw9IGFhYmIyLm1heFsxXSAmJlxyXG4gICAgYWFiYjEubWF4WzFdID49IGFhYmIyLm1pblsxXSAmJlxyXG4gICAgYWFiYjEubWluWzJdIDw9IGFhYmIyLm1heFsyXSAmJlxyXG4gICAgYWFiYjEubWF4WzJdID49IGFhYmIyLm1pblsyXVxyXG4gICkge1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG4gIHJldHVybiBmYWxzZTtcclxufTtcclxuY29uc3QgZ2V0U2l6ZSA9IChhYWJiKSA9PiB7XHJcbiAgY29uc3QgYXJlYSA9XHJcbiAgICBNYXRoLmFicyhhYWJiLm1heFswXSAtIGFhYmIubWluWzBdKSAqXHJcbiAgICBNYXRoLmFicyhhYWJiLm1heFsxXSAtIGFhYmIubWluWzFdKSAqXHJcbiAgICBNYXRoLmFicyhhYWJiLm1heFsyXSAtIGFhYmIubWluWzJdKTtcclxuICByZXR1cm4gYXJlYTtcclxufTtcclxuY2xhc3MgTm9kZSB7XHJcbiAgY29uc3RydWN0b3IoYWFiYiwgaXNMZWFmLCBnYW1lT2JqZWN0KSB7XHJcbiAgICB0aGlzLmFhYmIgPSBhYWJiO1xyXG4gICAgdGhpcy5pc0xlYWYgPSBpc0xlYWY7XHJcbiAgICB0aGlzLnBhcmVudCA9IG51bGw7XHJcblxyXG4gICAgdGhpcy5nYW1lT2JqZWN0ID0gZ2FtZU9iamVjdDtcclxuICAgIHRoaXMuaXNDaGVja2VkID0gZmFsc2U7XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyZWUge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5yb290ID0gbnVsbDtcclxuICAgIHRoaXMubGVhZnMgPSB7fTtcclxuICAgIHRoaXMudW51c2VkSW5kZXhlcyA9IFtdO1xyXG4gICAgdGhpcy5yZWJhbGFuY2VEZWxheSA9IDMwXHJcbiAgfVxyXG4gIHNldFVuY2hlY2tlZCgpIHtcclxuICAgIGlmKCF0aGlzLnJvb3QpcmV0dXJuXHJcbiAgICBjb25zdCBzdGFjayA9IFt0aGlzLnJvb3RdO1xyXG4gICAgXHJcbiAgICB3aGlsZSAoc3RhY2subGVuZ3RoICE9IDApIHtcclxuICAgICAgY29uc3Qgbm9kZSA9IHN0YWNrLnBvcCgpO1xyXG4gICAgICBcclxuICAgICAgaWYgKG5vZGUuaXNMZWFmKSB7XHJcbiAgICAgICAgbm9kZS5pc0NoZWNrZWQgPSBmYWxzZTtcclxuICAgICAgICBjb250aW51ZTtcclxuICAgICAgfVxyXG4gICAgICBpZiAobm9kZS5jaGlsZDEpIHN0YWNrLnB1c2gobm9kZS5jaGlsZDEpO1xyXG4gICAgICBpZiAobm9kZS5jaGlsZDIpIHN0YWNrLnB1c2gobm9kZS5jaGlsZDIpO1xyXG4gICAgfVxyXG4gIH1cclxuICBnZXRCZXN0U2libGluZyhsZWFmKSB7XHJcbiAgICBsZXQgcG90ZW50aWFsID0gdGhpcy5yb290O1xyXG4gICAgd2hpbGUgKCFwb3RlbnRpYWwuaXNMZWFmKSB7XHJcbiAgICAgIGNvbnN0IHNpemUgPSBnZXRTaXplKHBvdGVudGlhbC5hYWJiKTtcclxuICAgICAgY29uc3QgY29tYmluZWRBQUJCID0gZ2V0Qm91bmRBYWJiKHBvdGVudGlhbC5hYWJiLCBsZWFmLmFhYmIpO1xyXG4gICAgICBjb25zdCBjb21iaW5lZFNpemUgPSBnZXRTaXplKGNvbWJpbmVkQUFCQik7XHJcbiAgICAgIGxldCBjb3N0ID0gY29tYmluZWRTaXplO1xyXG4gICAgICBsZXQgaW5oZXJDb3N0ID0gY29tYmluZWRTaXplIC0gc2l6ZTtcclxuXHJcbiAgICAgIGxldCBjb3N0MTtcclxuICAgICAgaWYgKHBvdGVudGlhbC5jaGlsZDEuaXNMZWFmKSB7XHJcbiAgICAgICAgY29zdDEgPSBnZXRTaXplKHBvdGVudGlhbC5jaGlsZDEuYWFiYikgKyBpbmhlckNvc3Q7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29zdDEgPVxyXG4gICAgICAgICAgZ2V0U2l6ZShnZXRCb3VuZEFhYmIobGVhZi5hYWJiLCBwb3RlbnRpYWwuY2hpbGQxLmFhYmIpKSAtXHJcbiAgICAgICAgICBnZXRTaXplKHBvdGVudGlhbC5jaGlsZDEuYWFiYikgK1xyXG4gICAgICAgICAgaW5oZXJDb3N0O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBsZXQgY29zdDI7XHJcbiAgICAgIGlmIChwb3RlbnRpYWwuY2hpbGQyLmlzTGVhZikge1xyXG4gICAgICAgIGNvc3QyID0gZ2V0U2l6ZShwb3RlbnRpYWwuY2hpbGQyLmFhYmIpICsgaW5oZXJDb3N0O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvc3QyID1cclxuICAgICAgICAgIGdldFNpemUoZ2V0Qm91bmRBYWJiKGxlYWYuYWFiYiwgcG90ZW50aWFsLmNoaWxkMi5hYWJiKSkgLVxyXG4gICAgICAgICAgZ2V0U2l6ZShwb3RlbnRpYWwuY2hpbGQyLmFhYmIpICtcclxuICAgICAgICAgIGluaGVyQ29zdDtcclxuICAgICAgfVxyXG4gICAgICBpZiAoY29zdCA8IGNvc3QxICYmIGNvc3QgPCBjb3N0MikgcmV0dXJuIHBvdGVudGlhbDtcclxuICAgICAgaWYgKGNvc3QxIDwgY29zdDIpIHtcclxuICAgICAgICBwb3RlbnRpYWwgPSBwb3RlbnRpYWwuY2hpbGQxO1xyXG4gICAgICB9IGVsc2UgcG90ZW50aWFsID0gcG90ZW50aWFsLmNoaWxkMjtcclxuICAgIH1cclxuICAgIHJldHVybiBwb3RlbnRpYWw7XHJcbiAgfVxyXG4gIGluc2VydExlYWYoYWFiYiwgZ2FtZU9iamVjdCkge1xyXG4gICAgY29uc3QgbGVhZiA9IG5ldyBOb2RlKGFhYmIsIHRydWUsIGdhbWVPYmplY3QpO1xyXG4gICAgaWYgKHRoaXMucm9vdCA9PT0gbnVsbCkge1xyXG4gICAgICB0aGlzLnJvb3QgPSBsZWFmO1xyXG4gICAgICB0aGlzLnJvb3QucGFyZW50ID0gbnVsbDtcclxuICAgICAgcmV0dXJuIGxlYWY7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2libGluZyA9IHRoaXMuZ2V0QmVzdFNpYmxpbmcobGVhZik7XHJcbiAgICBjb25zdCBvbGRQYXJlbnQgPSBzaWJsaW5nLnBhcmVudDtcclxuICAgIGNvbnN0IG5ld1BhcmVudCA9IG5ldyBOb2RlKGxlYWYuYWFiYiwgZmFsc2UpO1xyXG4gICAgbmV3UGFyZW50LnBhcmVudCA9IG9sZFBhcmVudDtcclxuXHJcbiAgICBuZXdQYXJlbnQuYWFiYiA9IGdldEJvdW5kQWFiYihsZWFmLmFhYmIsIHNpYmxpbmcuYWFiYik7XHJcblxyXG4gICAgaWYgKG9sZFBhcmVudCkge1xyXG4gICAgICBpZiAob2xkUGFyZW50LmNoaWxkMSA9PT0gc2libGluZykgb2xkUGFyZW50LmNoaWxkMSA9IG5ld1BhcmVudDtcclxuICAgICAgZWxzZSBvbGRQYXJlbnQuY2hpbGQyID0gbmV3UGFyZW50O1xyXG5cclxuICAgICAgbmV3UGFyZW50LmNoaWxkMSA9IHNpYmxpbmc7XHJcbiAgICAgIG5ld1BhcmVudC5jaGlsZDIgPSBsZWFmO1xyXG5cclxuICAgICAgc2libGluZy5wYXJlbnQgPSBuZXdQYXJlbnQ7XHJcbiAgICAgIGxlYWYucGFyZW50ID0gbmV3UGFyZW50O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbmV3UGFyZW50LmNoaWxkMSA9IHNpYmxpbmc7XHJcbiAgICAgIG5ld1BhcmVudC5jaGlsZDIgPSBsZWFmO1xyXG5cclxuICAgICAgc2libGluZy5wYXJlbnQgPSBuZXdQYXJlbnQ7XHJcbiAgICAgIGxlYWYucGFyZW50ID0gbmV3UGFyZW50O1xyXG4gICAgICB0aGlzLnJvb3QgPSBuZXdQYXJlbnQ7XHJcbiAgICB9XHJcbiAgICBsZXQgaW5kZXggPSBsZWFmLnBhcmVudDtcclxuICAgIFxyXG4gICAgd2hpbGUgKGluZGV4ICkge1xyXG4gICAgICBpbmRleCA9IHRoaXMucmViYWxhbmNlKGluZGV4KTtcclxuICAgICAgaW5kZXggPSBpbmRleC5wYXJlbnQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbGVhZjtcclxuICB9XHJcbiAgZ2V0Q29sbGlzaW9ucyhsZWFmKSB7XHJcbiAgICBjb25zdCBjb2xzID0gW107XHJcbiAgICBjb25zdCBpdGVyID0gKF9ub2RlKSA9PiB7XHJcbiAgICAgIGlmICghX25vZGUpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgaWYgKF9ub2RlID09PSBsZWFmKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChpc0NvbGxpZGUobGVhZi5hYWJiLCBfbm9kZS5hYWJiKSkge1xyXG4gICAgICAgIGlmIChfbm9kZS5pc0xlYWYgJiYgIV9ub2RlLmlzQ2hlY2tlZCkge1xyXG4gICAgICAgICAgY29scy5wdXNoKF9ub2RlLmdhbWVPYmplY3QpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpdGVyKF9ub2RlLmNoaWxkMSk7XHJcbiAgICAgICAgaXRlcihfbm9kZS5jaGlsZDIpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGl0ZXIodGhpcy5yb290KTtcclxuXHJcbiAgICByZXR1cm4gY29scztcclxuICB9XHJcbiAgcmVtb3ZlTGVhZihsZWFmKSB7XHJcbiAgICBpZiAobGVhZiA9PT0gdGhpcy5yb290KSB7XHJcbiAgICAgIHRoaXMucm9vdCA9IG51bGw7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IHBhcmVudCA9IGxlYWYucGFyZW50O1xyXG4gICAgY29uc3QgZ3JhbmRQYXJlbnQgPSBwYXJlbnQgPyBwYXJlbnQucGFyZW50IDogbnVsbDtcclxuICAgIGxldCBzaWJsaW5nO1xyXG4gICAgaWYgKHBhcmVudC5jaGlsZDEgPT09IGxlYWYpIHNpYmxpbmcgPSBwYXJlbnQuY2hpbGQyO1xyXG4gICAgZWxzZSBzaWJsaW5nID0gcGFyZW50LmNoaWxkMTtcclxuXHJcbiAgICBpZiAoZ3JhbmRQYXJlbnQpIHtcclxuICAgICAgaWYgKGdyYW5kUGFyZW50LmNoaWxkMSA9PT0gcGFyZW50KSBncmFuZFBhcmVudC5jaGlsZDEgPSBzaWJsaW5nO1xyXG4gICAgICBlbHNlIGdyYW5kUGFyZW50LmNoaWxkMiA9IHNpYmxpbmc7XHJcblxyXG4gICAgICBzaWJsaW5nLnBhcmVudCA9IGdyYW5kUGFyZW50O1xyXG5cclxuICAgICAgbGV0IGluZGV4ID0gZ3JhbmRQYXJlbnQ7XHJcbiAgICAgIHdoaWxlIChpbmRleCkge1xyXG4gICAgICAgIGluZGV4ID0gdGhpcy5yZWJhbGFuY2UoaW5kZXgpO1xyXG5cclxuICAgICAgICBpbmRleCA9IGluZGV4LnBhcmVudDtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5yb290ID0gc2libGluZztcclxuICAgICAgc2libGluZy5wYXJlbnQgPSBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxuICByZWJhbGFuY2UobGVhZikge1xyXG4gICAgaWYgKCFsZWFmKSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgaWYgKGxlYWYuaXNMZWFmIHx8IHRoaXMuZ2V0SGVpZ2h0KGxlYWYpIDwgMikge1xyXG4gICAgICBsZWFmLmFhYmIgPSBnZXRCb3VuZEFhYmIobGVhZi5jaGlsZDEuYWFiYiwgbGVhZi5jaGlsZDIuYWFiYik7XHJcbiAgICAgIHJldHVybiBsZWFmO1xyXG4gICAgfVxyXG4gICAgY29uc3QgY2hpbGQxID0gbGVhZi5jaGlsZDE7XHJcbiAgICBjb25zdCBjaGlsZDIgPSBsZWFmLmNoaWxkMjtcclxuICAgIGNvbnN0IGJhbGFuY2UgPSB0aGlzLmdldEhlaWdodChjaGlsZDIpIC0gdGhpcy5nZXRIZWlnaHQoY2hpbGQxKTtcclxuXHJcbiAgICBpZiAoYmFsYW5jZSA+IDEpIHtcclxuICAgICAgY29uc3QgY2hpbGQyQ2hpbGQxID0gY2hpbGQyLmNoaWxkMTtcclxuICAgICAgY29uc3QgY2hpbGQyQ2hpbGQyID0gY2hpbGQyLmNoaWxkMjtcclxuXHJcbiAgICAgIGNoaWxkMi5jaGlsZDEgPSBsZWFmO1xyXG4gICAgICBjaGlsZDIucGFyZW50ID0gbGVhZi5wYXJlbnQ7XHJcbiAgICAgIGxlYWYucGFyZW50ID0gY2hpbGQyO1xyXG4gICAgICBpZiAoY2hpbGQyLnBhcmVudCAhPSBudWxsKSB7XHJcbiAgICAgICAgaWYgKGNoaWxkMi5wYXJlbnQuY2hpbGQxID09PSBsZWFmKSB7XHJcbiAgICAgICAgICBjaGlsZDIucGFyZW50LmNoaWxkMSA9IGNoaWxkMjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY2hpbGQyLnBhcmVudC5jaGlsZDIgPSBjaGlsZDI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2UgdGhpcy5yb290ID0gY2hpbGQyO1xyXG4gICAgICBpZiAodGhpcy5nZXRIZWlnaHQoY2hpbGQyQ2hpbGQxKSA+IHRoaXMuZ2V0SGVpZ2h0KGNoaWxkMkNoaWxkMikpIHtcclxuICAgICAgICBjaGlsZDIuY2hpbGQyID0gY2hpbGQyQ2hpbGQxO1xyXG4gICAgICAgIGxlYWYuY2hpbGQyID0gY2hpbGQyQ2hpbGQyO1xyXG4gICAgICAgIGNoaWxkMkNoaWxkMi5wYXJlbnQgPSBsZWFmO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxlYWYuY2hpbGQyID0gY2hpbGQyQ2hpbGQxO1xyXG4gICAgICAgIGNoaWxkMkNoaWxkMS5wYXJlbnQgPSBsZWFmO1xyXG4gICAgICB9XHJcbiAgICAgIGxlYWYuYWFiYiA9IGdldEJvdW5kQWFiYihsZWFmLmNoaWxkMS5hYWJiLCBsZWFmLmNoaWxkMi5hYWJiKTtcclxuICAgICAgY2hpbGQyLmFhYmIgPSBnZXRCb3VuZEFhYmIoY2hpbGQyLmNoaWxkMS5hYWJiLCBjaGlsZDIuY2hpbGQyLmFhYmIpO1xyXG5cclxuICAgICAgcmV0dXJuIGNoaWxkMjtcclxuICAgIH1cclxuICAgIGlmIChiYWxhbmNlIDwgLTEpIHtcclxuICAgICAgY29uc3QgY2hpbGQxQ2hpbGQxID0gY2hpbGQxLmNoaWxkMTtcclxuICAgICAgY29uc3QgY2hpbGQxQ2hpbGQyID0gY2hpbGQxLmNoaWxkMjtcclxuXHJcbiAgICAgIGNoaWxkMS5jaGlsZDEgPSBsZWFmO1xyXG4gICAgICBjaGlsZDEucGFyZW50ID0gbGVhZi5wYXJlbnQ7XHJcbiAgICAgIGxlYWYucGFyZW50ID0gY2hpbGQxO1xyXG5cclxuICAgICAgaWYgKGNoaWxkMS5wYXJlbnQgIT0gbnVsbCkge1xyXG4gICAgICAgIGlmIChjaGlsZDEucGFyZW50LmNoaWxkMSA9PT0gbGVhZikge1xyXG4gICAgICAgICAgY2hpbGQxLnBhcmVudC5jaGlsZDEgPSBjaGlsZDE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNoaWxkMS5wYXJlbnQuY2hpbGQyID0gY2hpbGQxO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHRoaXMucm9vdCA9IGNoaWxkMTtcclxuICAgICAgaWYgKHRoaXMuZ2V0SGVpZ2h0KGNoaWxkMUNoaWxkMSkgPiB0aGlzLmdldEhlaWdodChjaGlsZDFDaGlsZDIpKSB7XHJcbiAgICAgICAgY2hpbGQxLmNoaWxkMiA9IGNoaWxkMUNoaWxkMTtcclxuICAgICAgICBsZWFmLmNoaWxkMSA9IGNoaWxkMUNoaWxkMjtcclxuICAgICAgICBjaGlsZDFDaGlsZDIucGFyZW50ID0gbGVhZjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjaGlsZDEuY2hpbGQyID0gY2hpbGQxQ2hpbGQyO1xyXG4gICAgICAgIGxlYWYuY2hpbGQxID0gY2hpbGQxQ2hpbGQxO1xyXG4gICAgICAgIGNoaWxkMUNoaWxkMS5wYXJlbnQgPSBsZWFmO1xyXG4gICAgICB9XHJcbiAgICAgIGxlYWYuYWFiYiA9IGdldEJvdW5kQWFiYihsZWFmLmNoaWxkMS5hYWJiLCBsZWFmLmNoaWxkMi5hYWJiKTtcclxuICAgICAgY2hpbGQxLmFhYmIgPSBnZXRCb3VuZEFhYmIoY2hpbGQxLmNoaWxkMS5hYWJiLCBjaGlsZDEuY2hpbGQyLmFhYmIpO1xyXG5cclxuICAgICAgcmV0dXJuIGNoaWxkMTtcclxuICAgIH1cclxuICAgIGxlYWYuYWFiYiA9IGdldEJvdW5kQWFiYihsZWFmLmNoaWxkMS5hYWJiLCBsZWFmLmNoaWxkMi5hYWJiKTtcclxuICAgIHJldHVybiBsZWFmO1xyXG4gIH1cclxuICB0b0FycmF5KGkpIHtcclxuICAgIGNvbnN0IGl0ZXIgPSAobGVhZiwgbGV2ZWwpID0+IHtcclxuICAgICAgaWYgKCFsZWFmKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGxlYWYuaXNMZWFmKSByZXR1cm4gbGVhZi5vYmplY3RMaW5rLm5hbWU7XHJcbiAgICAgIGVsc2UgcmV0dXJuIFtpdGVyKGxlYWYuY2hpbGQxKSwgaXRlcihsZWFmLmNoaWxkMildO1xyXG4gICAgfTtcclxuICAgIGlmICghaSkgaSA9IHRoaXMucm9vdDtcclxuICAgIHJldHVybiBpdGVyKGkpO1xyXG4gIH1cclxuICAvKmdldEhlaWdodChsZWFmKSB7XHJcbiAgICBjb25zdCBpdGVyID0gKGxlYWYsIGxldmVsKSA9PiB7XHJcbiAgICAgIGlmICghbGVhZikge1xyXG4gICAgICAgIHJldHVybiBsZXZlbDtcclxuICAgICAgfVxyXG5cclxuICAgICAgbGV0IGgxID0gaXRlcihsZWFmLmNoaWxkMSwgbGV2ZWwgKyAxKTtcclxuICAgICAgbGV0IGgyID0gaXRlcihsZWFmLmNoaWxkMiwgbGV2ZWwgKyAxKTtcclxuICAgICAgcmV0dXJuIGgxID4gaDIgPyBoMSA6IGgyO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBpdGVyKGxlYWYsIDEpO1xyXG4gIH0qL1xyXG4gIGdldEhlaWdodChyb290KXtcclxuICAgIGlmKCFyb290KSByZXR1cm4gMFxyXG4gICAgbGV0IGhlaWdodCA9IDBcclxuICAgIGNvbnN0IHF1ZXVlID0gW3Jvb3RdXHJcbiAgICB3aGlsZShxdWV1ZS5sZW5ndGggIT0gMCl7XHJcbiAgICAgIGhlaWdodCArPSAxXHJcbiAgICAgIGNvbnN0IGNvdW50ID0gcXVldWUubGVuZ3RoXHJcbiAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKXtcclxuICAgICAgICBjb25zdCB0bXAgPSBxdWV1ZS5wb3AoKVxyXG4gICAgICAgIGlmKHRtcC5jaGlsZDEpIHF1ZXVlLnB1c2godG1wLmNoaWxkMSlcclxuICAgICAgICBpZih0bXAuY2hpbGQyKSBxdWV1ZS5wdXNoKHRtcC5jaGlsZDIpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBoZWlnaHRcclxuICB9XHJcbiAgZ2V0Tm9kZXMoKSB7XHJcbiAgICBjb25zdCBpdGVyID0gKG5vZGUsIGFycikgPT4ge1xyXG4gICAgICBhcnIucHVzaChub2RlKTtcclxuICAgICAgaWYgKG5vZGUuY2hpbGQxKSBpdGVyKG5vZGUuY2hpbGQxLCBhcnIpO1xyXG4gICAgICBpZiAobm9kZS5jaGlsZDIpIGl0ZXIobm9kZS5jaGlsZDIsIGFycik7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgYSA9IFtdO1xyXG4gICAgaXRlcih0aGlzLnJvb3QsIGEpO1xyXG4gICAgcmV0dXJuIGE7XHJcbiAgfVxyXG59XHJcbiIsImNvbnN0IGlzSW5zaWRlID0gKHAxLCBwMiwgcSkgPT4ge1xyXG4gIGNvbnN0IFIgPSAocDJbMF0gLSBwMVswXSkgKiAocVsxXSAtIHAxWzFdKSAtIChwMlsxXSAtIHAxWzFdKSAqIChxWzBdIC0gcDFbMF0pO1xyXG4gIHJldHVybiBSIDw9IDAgKyAwLjAwMTtcclxufTtcclxuXHJcbmNvbnN0IGRvdCA9IChhLCBiKSA9PiBhWzBdICogYlswXSArIGFbMV0gKiBiWzFdO1xyXG5cclxuY29uc3QgaXNJbkNsb2Nrd2lzZSA9IChwb2ludHMpID0+IHtcclxuICBpZiAocG9pbnRzLmxlbmd0aCA8IDMpIHJldHVybiAxO1xyXG4gIGNvbnN0IFtwMSwgcDIsIHAzXSA9IHBvaW50cztcclxuICBjb25zdCBkZXQgPVxyXG4gICAgcDJbMF0gKiBwM1sxXSArXHJcbiAgICBwM1swXSAqIHAxWzFdICtcclxuICAgIHAxWzBdICogcDJbMV0gLVxyXG4gICAgcDFbMF0gKiBwMVsxXSAtXHJcbiAgICBwM1swXSAqIHAyWzFdIC1cclxuICAgIHAxWzBdICogcDNbMV07XHJcblxyXG4gIGlmIChkZXQgPCAwKSByZXR1cm4gMTtcclxuICByZXR1cm4gLTE7XHJcbn07XHJcblxyXG5jb25zdCBjb21wdXRlSW50ZXJzZWN0aW9uID0gKHAxLCBwMiwgcDMsIHA0KSA9PiB7XHJcbiAgaWYgKHAyWzBdIC0gcDFbMF0gPT09IDApIHtcclxuICAgIGNvbnN0IHggPSBwMVswXTtcclxuXHJcbiAgICBjb25zdCBtMiA9IChwNFsxXSAtIHAzWzFdKSAvIChwNFswXSAtIHAzWzBdKTtcclxuICAgIGNvbnN0IGIyID0gcDNbMV0gLSBtMiAqIHAzWzBdO1xyXG5cclxuICAgIGNvbnN0IHkgPSBtMiAqIHggKyBiMjtcclxuICAgIHJldHVybiBbeCwgeV07XHJcbiAgfVxyXG4gIGlmIChwNFswXSAtIHAzWzBdID09PSAwKSB7XHJcbiAgICBjb25zdCB4ID0gcDNbMF07XHJcblxyXG4gICAgY29uc3QgbTEgPSAocDJbMV0gLSBwMVsxXSkgLyAocDJbMF0gLSBwMVswXSk7XHJcbiAgICBjb25zdCBiMSA9IHAxWzFdIC0gbTEgKiBwMVswXTtcclxuXHJcbiAgICBjb25zdCB5ID0gbTEgKiB4ICsgYjE7XHJcblxyXG4gICAgcmV0dXJuIFt4LCB5XTtcclxuICB9XHJcbiAgY29uc3QgbTEgPSAocDJbMV0gLSBwMVsxXSkgLyAocDJbMF0gLSBwMVswXSk7XHJcbiAgY29uc3QgYjEgPSBwMVsxXSAtIG0xICogcDFbMF07XHJcblxyXG4gIGNvbnN0IG0yID0gKHA0WzFdIC0gcDNbMV0pIC8gKHA0WzBdIC0gcDNbMF0pO1xyXG4gIGNvbnN0IGIyID0gcDNbMV0gLSBtMiAqIHAzWzBdO1xyXG5cclxuICBjb25zdCB4ID0gKGIyIC0gYjEpIC8gKG0xIC0gbTIpO1xyXG5cclxuICBjb25zdCB5ID0gbTEgKiB4ICsgYjE7XHJcblxyXG4gIHJldHVybiBbeCwgeV07XHJcbn07XHJcblxyXG5jb25zdCBjbGlwUG9seVZzUG9seSA9IChBLCBCKSA9PiB7XHJcbiAgbGV0IHJlc3VsdCA9IFsuLi5BXTtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDAsIG4gPSBCLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgY29uc3QgbmV4dCA9IFsuLi5yZXN1bHRdO1xyXG4gICAgcmVzdWx0ID0gW107XHJcbiAgICBjb25zdCBhRWRnZTEgPSBCLmF0KGkgLSAxKTtcclxuICAgIGNvbnN0IGFFZGdlMiA9IEIuYXQoaSk7XHJcblxyXG4gICAgZm9yIChsZXQgaiA9IDAsIF9uID0gbmV4dC5sZW5ndGg7IGogPCBfbjsgaisrKSB7XHJcbiAgICAgIGNvbnN0IGJFZGdlMSA9IG5leHQuYXQoaiAtIDEpO1xyXG4gICAgICBjb25zdCBiRWRnZTIgPSBuZXh0LmF0KGopO1xyXG5cclxuICAgICAgaWYgKGlzSW5zaWRlKGFFZGdlMSwgYUVkZ2UyLCBiRWRnZTIpKSB7XHJcbiAgICAgICAgaWYgKCFpc0luc2lkZShhRWRnZTEsIGFFZGdlMiwgYkVkZ2UxKSkge1xyXG4gICAgICAgICAgY29uc3QgaW50ZXJzZWN0aW9uID0gY29tcHV0ZUludGVyc2VjdGlvbihcclxuICAgICAgICAgICAgYkVkZ2UxLFxyXG4gICAgICAgICAgICBiRWRnZTIsXHJcbiAgICAgICAgICAgIGFFZGdlMSxcclxuICAgICAgICAgICAgYUVkZ2UyXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgcmVzdWx0LnB1c2goaW50ZXJzZWN0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmVzdWx0LnB1c2goYkVkZ2UyKTtcclxuICAgICAgICBjb250aW51ZTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoaXNJbnNpZGUoYUVkZ2UxLCBhRWRnZTIsIGJFZGdlMSkpIHtcclxuICAgICAgICBjb25zdCBpbnRlcnNlY3Rpb24gPSBjb21wdXRlSW50ZXJzZWN0aW9uKFxyXG4gICAgICAgICAgYkVkZ2UxLFxyXG4gICAgICAgICAgYkVkZ2UyLFxyXG4gICAgICAgICAgYUVkZ2UxLFxyXG4gICAgICAgICAgYUVkZ2UyXHJcbiAgICAgICAgKTtcclxuICAgICAgICByZXN1bHQucHVzaChpbnRlcnNlY3Rpb24pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiByZXN1bHQ7XHJcbn07XHJcblxyXG5jb25zdCBsZXJwID0gKGEsIGIsIHQpID0+IGEgKyAoYiAtIGEpICogdDtcclxuXHJcbmNvbnN0IGNsaXBTZWdtZW50VnNTZWdtZW50ID0gKHMxLCBzMikgPT4ge1xyXG4gIGNvbnN0IFtwMSwgcDJdID0gczFcclxuICBjb25zdCBbcDMsIHA0XSA9IHMyXHJcbiAgY29uc3QgdG9wID1cclxuICAgIChwNFswXSAtIHAzWzBdKSAqIChwMVsxXSAtIHAzWzFdKSAtIChwNFsxXSAtIHAzWzFdKSAqIChwMVswXSAtIHAzWzBdKTtcclxuICBjb25zdCBib3R0b20gPVxyXG4gICAgKHA0WzFdIC0gcDNbMV0pICogKHAyWzBdIC0gcDFbMF0pIC0gKHA0WzBdIC0gcDNbMF0pICogKHAyWzFdIC0gcDFbMV0pO1xyXG4gIGlmICghYm90dG9tKSByZXR1cm4gbnVsbDtcclxuICBjb25zdCB0ID0gdG9wIC8gYm90dG9tO1xyXG4gIGlmICh0IDwgMCB8fCB0ID4gMSkgcmV0dXJuIG51bGw7XHJcbiAgcmV0dXJuIFtsZXJwKHAxWzBdLCBwMlswXSwgdCksIGxlcnAocDFbMV0sIHAyWzFdLCB0KV07XHJcbn07XHJcblxyXG5jb25zdCBjbGlwUG9pbnRWc1BvbHkgPSAocG9pbnQsIHZlcnRpY2VzKSA9PiB7XHJcbiAgY29uc3QgeCA9IHBvaW50WzBdO1xyXG4gIGNvbnN0IHkgPSBwb2ludFsxXTtcclxuXHJcbiAgbGV0IGluc2lkZSA9IGZhbHNlO1xyXG4gIGZvciAobGV0IGkgPSAwLCBqID0gdmVydGljZXMubGVuZ3RoIC0gMTsgaSA8IHZlcnRpY2VzLmxlbmd0aDsgaiA9IGkrKykge1xyXG4gICAgY29uc3QgeGkgPSB2ZXJ0aWNlc1tpXVswXSxcclxuICAgICAgeWkgPSB2ZXJ0aWNlc1tpXVsxXTtcclxuICAgIGNvbnN0IHhqID0gdmVydGljZXNbal1bMF0sXHJcbiAgICAgIHlqID0gdmVydGljZXNbal1bMV07XHJcblxyXG4gICAgY29uc3QgaW50ZXJzZWN0ID1cclxuICAgICAgeWkgPiB5ICE9IHlqID4geSAmJiB4IDwgKCh4aiAtIHhpKSAqICh5IC0geWkpKSAvICh5aiAtIHlpKSArIHhpO1xyXG4gICAgaWYgKGludGVyc2VjdCkgaW5zaWRlID0gIWluc2lkZTtcclxuICB9XHJcblxyXG4gIHJldHVybiBpbnNpZGU7XHJcbn07XHJcbmNvbnN0IGNsaXBTZWdtZW50VnNQb2x5ID0gKHNlZ21lbnQsIHBvbHkpID0+IHtcclxuICBjb25zdCBbcDEsIHAyXSA9IHNlZ21lbnQ7XHJcbiAgY29uc3QgcG9pbnRzID0gW107XHJcbiAgaWYgKGNsaXBQb2ludFZzUG9seShwMSwgcG9seSkpIHBvaW50cy5wdXNoKHAxKTtcclxuICBpZiAoY2xpcFBvaW50VnNQb2x5KHAyLCBwb2x5KSkgcG9pbnRzLnB1c2gocDIpO1xyXG4gIGlmIChwb2ludHMubGVuZ3RoID4gMSkgcmV0dXJuIHBvaW50cztcclxuICBmb3IgKGxldCBpID0gMCwgbiA9IHBvbHkubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICBjb25zdCBxMSA9IHBvbHkuYXQoaSAtIDEpO1xyXG4gICAgY29uc3QgcTIgPSBwb2x5LmF0KGkpO1xyXG4gICAgY29uc3QgaW50ZXJzZWN0aW9uID0gY2xpcFNlZ21lbnRWc1NlZ21lbnQocDEsIHAyLCBxMSwgcTIpO1xyXG4gICAgaWYgKGludGVyc2VjdGlvbikgcG9pbnRzLnB1c2goaW50ZXJzZWN0aW9uKTtcclxuICB9XHJcbiAgcmV0dXJuIHBvaW50cztcclxufTtcclxuXHJcblxyXG5jb25zdCBmYWNlSW50ZXJzZWN0aW9uc01hcCA9IHtcclxuICAncG9seV9wb2x5JyA6IGNsaXBQb2x5VnNQb2x5LFxyXG4gICdzZWdtZW50X3BvbHknIDogY2xpcFNlZ21lbnRWc1BvbHksXHJcbiAgJ3BvbHlfc2VnbWVudCcgOiAocG9seSwgc2VnbWVudCkgPT4gY2xpcFNlZ21lbnRWc1BvbHkoc2VnbWVudCwgcG9seSksXHJcbiAgJ3NlZ21lbnRfc2VnbWVudCcgOihzMSwgczIpID0+IHtcclxuICAgIGNvbnN0IHJlcyA9IGNsaXBTZWdtZW50VnNTZWdtZW50KHMxLHMyKVxyXG4gICAgaWYocmVzKSByZXR1cm4gW3Jlc11cclxuICAgIHJldHVybiBbXVxyXG4gIH0sXHJcbiAgJ3BvaW50X3BvbHknIDogY2xpcFBvaW50VnNQb2x5LFxyXG4gICdwb2x5X3BvaW50JyA6IChwb2x5LCBwb2ludCkgPT4gY2xpcFBvaW50VnNQb2x5KHBvaW50LCBwb2x5KSxcclxufVxyXG5jb25zdCBnZXRGYWNlVHlwZSA9IChmYWNlKSA9PntcclxuICBpZihmYWNlLmxlbmd0aCA+IDIpIHJldHVybiAncG9seSdcclxuICBpZihmYWNlLmxlbmd0aCA9PT0gMikgcmV0dXJuICdzZWdtZW50J1xyXG4gIHJldHVybiAncG9pbnQnXHJcbn1cclxuY29uc3QgY2xpcEZhY2VWc0ZhY2UgPSAoZmFjZTEsIGZhY2UyKSA9PntcclxuICBjb25zdCB0eXBlcyA9IGAke2dldEZhY2VUeXBlKGZhY2UxKX1fJHtnZXRGYWNlVHlwZShmYWNlMil9YFxyXG4gIHJldHVybiBmYWNlSW50ZXJzZWN0aW9uc01hcFt0eXBlc10oZmFjZTEsIGZhY2UyKSBcclxufVxyXG5cclxuZXhwb3J0IHtcclxuICBjbGlwU2VnbWVudFZzU2VnbWVudCxcclxuICBpc0luc2lkZSxcclxuICBjb21wdXRlSW50ZXJzZWN0aW9uLFxyXG4gIGNsaXBQb2x5VnNQb2x5LFxyXG4gIGNsaXBGYWNlVnNGYWNlLFxyXG4gIGlzSW5DbG9ja3dpc2UsXHJcbiAgY2xpcFNlZ21lbnRWc1BvbHksXHJcbiAgY2xpcFBvaW50VnNQb2x5LFxyXG59O1xyXG4iLCJpbXBvcnQgeyB2ZWMzLCBtNCwgbTMsIEFBQkIgfSBmcm9tIFwibWF0aFwiO1xyXG5cclxuY29uc3QgeyBzY2FsZSwgc3VtLCBkaWZmLCBkb3QsIG5vcm1hbGl6ZSB9ID0gdmVjMztcclxuXHJcbmNvbnN0IHhBeGlzID0gWzEsIDAsIDBdO1xyXG5jb25zdCB5QXhpcyA9IFswLCAxLCAwXTtcclxuY29uc3QgekF4aXMgPSBbMCwgMCwgMV07XHJcbmNvbnN0IHhBeGlzTmVnYXRpdmUgPSBzY2FsZSh4QXhpcywgLTEpO1xyXG5jb25zdCB5QXhpc05lZ2F0aXZlID0gc2NhbGUoeUF4aXMsIC0xKTtcclxuY29uc3QgekF4aXNOZWdhdGl2ZSA9IHNjYWxlKHpBeGlzLCAtMSk7XHJcblxyXG5jbGFzcyBDb2xsaWRlciB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLlJtYXRyaXggPSBtMy5pZGVudGl0eSgpO1xyXG4gICAgdGhpcy5SbWF0cml4SW52ZXJzZSA9IG0zLmlkZW50aXR5KCk7XHJcbiAgICB0aGlzLnBvcyA9IFswLCAwLCAwXTtcclxuICB9XHJcbiAgdHJhbnNsYXRlKHYpIHtcclxuICAgIHRoaXMucG9zID0gc3VtKHRoaXMucG9zLCB2KTtcclxuICB9XHJcbiAgc2V0VHJhbnNsYXRpb24odHJhbnNsYXRpb24pIHtcclxuICAgIHRoaXMucG9zID0gWy4uLnRyYW5zbGF0aW9uXTtcclxuICB9XHJcbiAgcm90YXRlKHIpIHtcclxuICAgIHRoaXMuUm1hdHJpeCA9IG0zLnhSb3RhdGUodGhpcy5SbWF0cml4LCByWzBdKTtcclxuICAgIHRoaXMuUm1hdHJpeCA9IG0zLnlSb3RhdGUodGhpcy5SbWF0cml4LCByWzFdKTtcclxuICAgIHRoaXMuUm1hdHJpeCA9IG0zLnpSb3RhdGUodGhpcy5SbWF0cml4LCByWzJdKTtcclxuICAgIHRoaXMuUm1hdHJpeEludmVyc2UgPSBtMy50cmFuc3Bvc2UodGhpcy5SbWF0cml4KTtcclxuICB9XHJcbiAgc2V0Um90YXRpb24ocikge1xyXG4gICAgdGhpcy5SbWF0cml4ID0gbTMueFJvdGF0aW9uKHJbMF0pO1xyXG4gICAgdGhpcy5SbWF0cml4ID0gbTMueVJvdGF0ZSh0aGlzLlJtYXRyaXgsIHJbMV0pO1xyXG4gICAgdGhpcy5SbWF0cml4ID0gbTMuelJvdGF0ZSh0aGlzLlJtYXRyaXgsIHJbMl0pO1xyXG4gICAgdGhpcy5SbWF0cml4SW52ZXJzZSA9IG0zLnRyYW5zcG9zZSh0aGlzLlJtYXRyaXgpO1xyXG4gIH1cclxuICBnZXRBQUJCKCkge1xyXG4gICAgY29uc3QgbWF4WCA9IHRoaXMuc3VwcG9ydCh4QXhpcylbMF07XHJcbiAgICBjb25zdCBtYXhZID0gdGhpcy5zdXBwb3J0KHlBeGlzKVsxXTtcclxuICAgIGNvbnN0IG1heFogPSB0aGlzLnN1cHBvcnQoekF4aXMpWzJdO1xyXG5cclxuICAgIGNvbnN0IG1pblggPSB0aGlzLnN1cHBvcnQoeEF4aXNOZWdhdGl2ZSlbMF07XHJcbiAgICBjb25zdCBtaW5ZID0gdGhpcy5zdXBwb3J0KHlBeGlzTmVnYXRpdmUpWzFdO1xyXG4gICAgY29uc3QgbWluWiA9IHRoaXMuc3VwcG9ydCh6QXhpc05lZ2F0aXZlKVsyXTtcclxuICAgIHJldHVybiBuZXcgQUFCQihbbWluWCwgbWluWSwgbWluWl0sIFttYXhYLCBtYXhZLCBtYXhaXSk7XHJcbiAgfVxyXG4gIHNldFJtYXRyaXgobWF0cml4KSB7XHJcbiAgICB0aGlzLlJtYXRyaXggPSBbLi4ubWF0cml4XTtcclxuXHJcbiAgICB0aGlzLlJtYXRyaXhJbnZlcnNlID0gbTMudHJhbnNwb3NlKG1hdHJpeCk7XHJcbiAgfVxyXG4gIGdldE00KCkge1xyXG4gICAgY29uc3QgbSA9IG00Lm0zVG9tNCh0aGlzLlJtYXRyaXgpO1xyXG4gICAgbVsxMl0gPSB0aGlzLnBvc1swXTtcclxuICAgIG1bMTNdID0gdGhpcy5wb3NbMV07XHJcbiAgICBtWzE0XSA9IHRoaXMucG9zWzJdO1xyXG4gICAgbVsxNV0gPSAxO1xyXG4gICAgcmV0dXJuIG07XHJcbiAgfVxyXG4gIGxvY2FsVG9HbG9iYWwodikge1xyXG4gICAgbGV0IGdsb2JhbCA9IG0zLnRyYW5zZm9ybVBvaW50KHRoaXMuUm1hdHJpeCwgdik7XHJcbiAgICByZXR1cm4gc3VtKHRoaXMucG9zLCBnbG9iYWwpO1xyXG4gIH1cclxuICBnZXRDbG9zZXN0RmFjZShub3JtYWwpIHt9XHJcbiAgZ2V0SW52ZXJzZUluZXJ0aWFUZW5zb3IobWFzcykge1xyXG4gICAgcmV0dXJuIG5ldyBBcnJheSg5KS5maWxsKDApO1xyXG4gIH1cclxufVxyXG5cclxuY2xhc3MgQm94IGV4dGVuZHMgQ29sbGlkZXIge1xyXG4gIGNvbnN0cnVjdG9yKGEgPSAxLCBiID0gMSwgYyA9IDEpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLm1pbiA9IFstYSAvIDIsIC1iIC8gMiwgLWMgLyAyXTtcclxuICAgIHRoaXMubWF4ID0gW2EgLyAyLCBiIC8gMiwgYyAvIDJdO1xyXG4gICAgdGhpcy5wb2ludHMgPSBbXHJcbiAgICAgIFstMSAvIDIsIC0xIC8gMiwgLTEgLyAyXSxcclxuICAgICAgWzEgLyAyLCAtMSAvIDIsIC0xIC8gMl0sXHJcbiAgICAgIFsxIC8gMiwgLTEgLyAyLCAxIC8gMl0sXHJcbiAgICAgIFstMSAvIDIsIC0xIC8gMiwgMSAvIDJdLFxyXG4gICAgICBbLTEgLyAyLCAxIC8gMiwgLTEgLyAyXSxcclxuICAgICAgWzEgLyAyLCAxIC8gMiwgLTEgLyAyXSxcclxuICAgICAgWzEgLyAyLCAxIC8gMiwgMSAvIDJdLFxyXG4gICAgICBbLTEgLyAyLCAxIC8gMiwgMSAvIDJdLFxyXG4gICAgXTtcclxuICAgIHRoaXMuaW5kaWNlcyA9IFtcclxuICAgICAgWzAsIDQsIDUsIDFdLCAvLyAtelxyXG4gICAgICBbMywgNywgNiwgMl0sIC8vICt6XHJcbiAgICAgIFswLCAxLCAyLCAzXSwgLy8gLXlcclxuICAgICAgWzQsIDUsIDYsIDddLCAvLyAreVxyXG4gICAgICBbMCwgMywgNywgNF0sIC8vIC14XHJcbiAgICAgIFsxLCAyLCA2LCA1XSwgLy8gK3hcclxuICAgIF07XHJcbiAgICB0aGlzLm5vcm1hbHMgPSBbXHJcbiAgICAgIFswLCAwLCAtMV0sXHJcbiAgICAgIFswLCAwLCAxXSxcclxuICAgICAgWzAsIC0xLCAwXSxcclxuICAgICAgWzAsIDEsIDBdLFxyXG4gICAgICBbLTEsIDAsIDBdLFxyXG4gICAgICBbMSwgMCwgMF0sXHJcbiAgICBdO1xyXG4gIH1cclxuXHJcbiAgZ2V0QUFCQigpIHtcclxuICAgIGNvbnN0IG1heFggPSB0aGlzLnN1cHBvcnQoeEF4aXMpWzBdO1xyXG4gICAgY29uc3QgbWF4WSA9IHRoaXMuc3VwcG9ydCh5QXhpcylbMV07XHJcbiAgICBjb25zdCBtYXhaID0gdGhpcy5zdXBwb3J0KHpBeGlzKVsyXTtcclxuXHJcbiAgICBjb25zdCBtaW5YID0gdGhpcy5zdXBwb3J0KHhBeGlzTmVnYXRpdmUpWzBdO1xyXG4gICAgY29uc3QgbWluWSA9IHRoaXMuc3VwcG9ydCh5QXhpc05lZ2F0aXZlKVsxXTtcclxuICAgIGNvbnN0IG1pblogPSB0aGlzLnN1cHBvcnQoekF4aXNOZWdhdGl2ZSlbMl07XHJcbiAgICByZXR1cm4gbmV3IEFBQkIoW21pblgsIG1pblksIG1pblpdLCBbbWF4WCwgbWF4WSwgbWF4Wl0pO1xyXG4gIH1cclxuXHJcbiAgc3VwcG9ydChkaXIpIHtcclxuICAgIGNvbnN0IF9kaXIgPSBtMy50cmFuc2Zvcm1Qb2ludCh0aGlzLlJtYXRyaXhJbnZlcnNlLCBkaXIpO1xyXG5cclxuICAgIGNvbnN0IHJlcyA9IFswLCAwLCAwXTtcclxuXHJcbiAgICByZXNbMF0gPSBfZGlyWzBdID4gMCA/IHRoaXMubWF4WzBdIDogdGhpcy5taW5bMF07XHJcbiAgICByZXNbMV0gPSBfZGlyWzFdID4gMCA/IHRoaXMubWF4WzFdIDogdGhpcy5taW5bMV07XHJcbiAgICByZXNbMl0gPSBfZGlyWzJdID4gMCA/IHRoaXMubWF4WzJdIDogdGhpcy5taW5bMl07XHJcblxyXG4gICAgY29uc3Qgc3VwID0gbTMudHJhbnNmb3JtUG9pbnQodGhpcy5SbWF0cml4LCByZXMpO1xyXG5cclxuICAgIHJldHVybiBzdW0oc3VwLCB0aGlzLnBvcyk7XHJcbiAgfVxyXG4gIGdldEludmVyc2VJbmVydGlhVGVuc29yKG1hc3MpIHtcclxuICAgIGNvbnN0IGkxID1cclxuICAgICAgKG1hc3MgLyAxMikgKiAodGhpcy5tYXhbMV0gKiB0aGlzLm1heFsxXSArIHRoaXMubWF4WzJdICogdGhpcy5tYXhbMl0pO1xyXG4gICAgY29uc3QgaTIgPVxyXG4gICAgICAobWFzcyAvIDEyKSAqICh0aGlzLm1heFswXSAqIHRoaXMubWF4WzBdICsgdGhpcy5tYXhbMl0gKiB0aGlzLm1heFsyXSk7XHJcbiAgICBjb25zdCBpMyA9XHJcbiAgICAgIChtYXNzIC8gMTIpICogKHRoaXMubWF4WzBdICogdGhpcy5tYXhbMF0gKyB0aGlzLm1heFsxXSAqIHRoaXMubWF4WzFdKTtcclxuXHJcbiAgICBjb25zdCBtID0gbTMubXVsdGlwbHkoXHJcbiAgICAgIG0zLm11bHRpcGx5KHRoaXMuUm1hdHJpeCwgWzEgLyBpMSwgMCwgMCwgMCwgMSAvIGkyLCAwLCAwLCAwLCAxIC8gaTNdKSxcclxuICAgICAgdGhpcy5SbWF0cml4SW52ZXJzZVxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gbTtcclxuICB9XHJcbiAgZ2V0TTQoKSB7XHJcbiAgICBjb25zdCBtID0gbTQubTNUb200KHRoaXMuUm1hdHJpeCk7XHJcbiAgICBtWzEyXSA9IHRoaXMucG9zWzBdO1xyXG4gICAgbVsxM10gPSB0aGlzLnBvc1sxXTtcclxuICAgIG1bMTRdID0gdGhpcy5wb3NbMl07XHJcbiAgICBtWzE1XSA9IDE7XHJcbiAgICBjb25zdCBzY2FsZSA9IGRpZmYodGhpcy5tYXgsIHRoaXMubWluKTtcclxuICAgIHJldHVybiBtNC5zY2FsZShtLCAuLi5zY2FsZSk7XHJcbiAgfVxyXG5cclxuICBnZXRDbG9zZXN0RmFjZUJ5Tm9ybWFsKG5vcm1hbCkge1xyXG4gICAgY29uc3QgeyBwb2ludHMsIGluZGljZXMsIFJtYXRyaXggfSA9IHRoaXM7XHJcbiAgICBjb25zdCBub3JtYWxzID0gdGhpcy5ub3JtYWxzLm1hcCgobikgPT4gbTMudHJhbnNmb3JtUG9pbnQodGhpcy5SbWF0cml4LCBuKSk7XHJcbiAgICBsZXQgbWluRG90ID0gZG90KG5vcm1hbCwgbm9ybWFsc1swXSk7XHJcbiAgICBsZXQgaW5kZXggPSAwO1xyXG4gICAgZm9yIChsZXQgaSA9IDEsIG4gPSBub3JtYWxzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAvL2NvbnN0IF9ub3JtYWwgPSBtMy50cmFuc2Zvcm1Qb2ludChSbWF0cml4LCBub3JtYWxzW2ldKVxyXG4gICAgICBjb25zdCBfZG90ID0gZG90KG5vcm1hbHNbaV0sIG5vcm1hbCk7XHJcbiAgICAgIGlmIChfZG90IDwgbWluRG90KSB7XHJcbiAgICAgICAgbWluRG90ID0gX2RvdDtcclxuICAgICAgICBpbmRleCA9IGk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IGZhY2VJbmRpY2VzID0gaW5kaWNlc1tpbmRleF07XHJcbiAgICBjb25zdCBtID0gdGhpcy5nZXRNNCgpO1xyXG4gICAgcmV0dXJuIFtcclxuICAgICAgZmFjZUluZGljZXMubWFwKChpKSA9PiBtNC50cmFuc2Zvcm1Qb2ludChtLCBwb2ludHNbaV0pKSxcclxuICAgICAgbm9ybWFsc1tpbmRleF0sXHJcbiAgICBdO1xyXG4gIH1cclxufVxyXG5jbGFzcyBTcGhlcmUgZXh0ZW5kcyBDb2xsaWRlciB7XHJcbiAgY29uc3RydWN0b3IocmFkaXVzID0gMSkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMucmFkaXVzID0gcmFkaXVzO1xyXG4gICAgdGhpcy50eXBlID0gXCJzcGhlcmVcIjtcclxuICB9XHJcbiAgZ2V0QUFCQigpIHtcclxuICAgIGNvbnN0IHsgcmFkaXVzIH0gPSB0aGlzO1xyXG4gICAgcmV0dXJuIG5ldyBBQUJCKFxyXG4gICAgICBzdW0odGhpcy5wb3MsIFstcmFkaXVzLCAtcmFkaXVzLCAtcmFkaXVzXSksXHJcbiAgICAgIHN1bSh0aGlzLnBvcywgW3JhZGl1cywgcmFkaXVzLCByYWRpdXNdKVxyXG4gICAgKTtcclxuICB9XHJcbiAgc3VwcG9ydChkaXIpIHtcclxuICAgIHJldHVybiBzdW0oc2NhbGUobm9ybWFsaXplKGRpciksIHRoaXMucmFkaXVzKSwgdGhpcy5wb3MpO1xyXG4gIH1cclxuICBnZXRNNCgpIHtcclxuICAgIGNvbnN0IG0gPSBtNC5tM1RvbTQodGhpcy5SbWF0cml4KTtcclxuICAgIG1bMTJdID0gdGhpcy5wb3NbMF07XHJcbiAgICBtWzEzXSA9IHRoaXMucG9zWzFdO1xyXG4gICAgbVsxNF0gPSB0aGlzLnBvc1syXTtcclxuICAgIG1bMTVdID0gMTtcclxuICAgIGNvbnN0IHsgcmFkaXVzIH0gPSB0aGlzO1xyXG4gICAgcmV0dXJuIG00LnNjYWxlKG0sIHJhZGl1cywgcmFkaXVzLCByYWRpdXMpO1xyXG4gIH1cclxuICBnZXRDbG9zZXN0RmFjZUJ5Tm9ybWFsKG5vcm1hbCkge1xyXG4gICAgY29uc3QgcmV2ZXJzZSA9IHNjYWxlKG5vcm1hbCwgLTEpO1xyXG4gICAgcmV0dXJuIFtbc2NhbGUocmV2ZXJzZSwgdGhpcy5yYWRpdXMpXSwgcmV2ZXJzZV07XHJcbiAgfVxyXG4gIGdldEludmVyc2VJbmVydGlhVGVuc29yKG1hc3MpIHtcclxuICAgIGNvbnN0IHsgcmFkaXVzIH0gPSB0aGlzO1xyXG4gICAgY29uc3QgbSA9IFtcclxuICAgICAgKDIgKiBtYXNzICogcmFkaXVzICogcmFkaXVzKSAvIDUsXHJcbiAgICAgIDAsXHJcbiAgICAgIDAsXHJcbiAgICAgIDAsXHJcbiAgICAgICgyICogbWFzcyAqIHJhZGl1cyAqIHJhZGl1cykgLyA1LFxyXG4gICAgICAwLFxyXG4gICAgICAwLFxyXG4gICAgICAwLFxyXG4gICAgICAoMiAqIG1hc3MgKiByYWRpdXMgKiByYWRpdXMpIC8gNSxcclxuICAgIF07XHJcbiAgICByZXR1cm4gbTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IG51bVNlZ21lbnRzID0gNjtcclxuY29uc3Qgc2VnbWVudEFuZ2xlID0gKDIgKiBNYXRoLlBJKSAvIG51bVNlZ21lbnRzO1xyXG5jb25zdCBjaXJjbGVQb2ludHMgPSBbLi4ubmV3IEFycmF5KG51bVNlZ21lbnRzKV0ubWFwKChfLCBpKSA9PiBbXHJcbiAgTWF0aC5jb3MoaSAqIHNlZ21lbnRBbmdsZSksXHJcbiAgMCxcclxuICBNYXRoLnNpbihpICogc2VnbWVudEFuZ2xlKSxcclxuXSk7XHJcblxyXG5jbGFzcyBDeWxpbmRlciBleHRlbmRzIENvbGxpZGVyIHtcclxuICBjb25zdHJ1Y3RvciggcmFkaXVzLCBoZWlnaHQpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLnJhZGl1cyA9IHJhZGl1cztcclxuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gIH1cclxuICBzdXBwb3J0KGRpcikge1xyXG4gICAgY29uc3QgX2RpciA9IG0zLnRyYW5zZm9ybVBvaW50KHRoaXMuUm1hdHJpeEludmVyc2UsIGRpcik7IC8vZmluZCBzdXBwb3J0IGluIG1vZGVsIHNwYWNlXHJcblxyXG4gICAgY29uc3QgZGlyX3h6ID0gW19kaXJbMF0sIDAsIF9kaXJbMl1dO1xyXG4gICAgY29uc3QgcmVzdWx0ID0gc2NhbGUobm9ybWFsaXplKGRpcl94eiksIHRoaXMucmFkaXVzKTtcclxuICAgIHJlc3VsdFsxXSA9IF9kaXJbMV0gPiAwID8gdGhpcy5oZWlnaHQgLyAyIDogLXRoaXMuaGVpZ2h0IC8gMjtcclxuXHJcbiAgICByZXR1cm4gc3VtKG0zLnRyYW5zZm9ybVBvaW50KHRoaXMuUm1hdHJpeCwgcmVzdWx0KSwgdGhpcy5wb3MpOyAvL2NvbnZlcnQgc3VwcG9ydCB0byB3b3JsZCBzcGFjZVxyXG4gIH1cclxuICBnZXRNNCgpIHtcclxuICAgIGNvbnN0IG0gPSBtNC5tM1RvbTQodGhpcy5SbWF0cml4KTtcclxuICAgIG1bMTJdID0gdGhpcy5wb3NbMF07XHJcbiAgICBtWzEzXSA9IHRoaXMucG9zWzFdO1xyXG4gICAgbVsxNF0gPSB0aGlzLnBvc1syXTtcclxuICAgIG1bMTVdID0gMTtcclxuICAgIGNvbnN0IHsgcmFkaXVzLCBoZWlnaHQgfSA9IHRoaXM7XHJcbiAgICByZXR1cm4gbTQuc2NhbGUobSwgcmFkaXVzLCBoZWlnaHQsIHJhZGl1cyk7XHJcbiAgfVxyXG4gIGdldENsb3Nlc3RGYWNlQnlOb3JtYWwobm9ybWFsKSB7XHJcbiAgICBjb25zdCB7IHJhZGl1cywgaGVpZ2h0LCBSbWF0cml4LCBSbWF0cml4SW52ZXJzZSB9ID0gdGhpcztcclxuICAgIGNvbnN0IF9ub3JtYWwgPSBtMy50cmFuc2Zvcm1Qb2ludChSbWF0cml4SW52ZXJzZSwgc2NhbGUobm9ybWFsLCAtMSkpO1xyXG4gICAgY29uc3QgbSA9IHRoaXMuZ2V0TTQoKVxyXG4gICAgY29uc3QgY29zID0gZG90KF9ub3JtYWwsIFswLCAxLCAwXSk7XHJcbiAgICBjb25zdCBzaWduID0gTWF0aC5zaWduKGNvcyk7XHJcbiAgICBcclxuICAgIGlmIChjb3MgKiBzaWduIDwgMC43MDcpIHtcclxuICAgICAgY29uc3QgbG9jYWxOb3JtYWwgPSBub3JtYWxpemUoW19ub3JtYWxbMF0sIDAsIF9ub3JtYWxbMl1dKTtcclxuICAgICAgY29uc3QgZmFjZSA9IFtcclxuICAgICAgICBtNC50cmFuc2Zvcm1Qb2ludChtLCBbX25vcm1hbFswXSAsIDAuNSwgX25vcm1hbFsyXSBdKSxcclxuICAgICAgICBtNC50cmFuc2Zvcm1Qb2ludChtLCBbX25vcm1hbFswXSwgLTAuNSwgX25vcm1hbFsyXSBdKVxyXG4gICAgICBdO1xyXG5cclxuICAgICAgcmV0dXJuIFtmYWNlLCBtMy50cmFuc2Zvcm1Qb2ludChSbWF0cml4LCBsb2NhbE5vcm1hbCldXHJcbiAgICB9XHJcbiAgICBjb25zdCBsb2NhbE5vcm1hbCA9IHNjYWxlKFswLCAxLCAwXSwgc2lnbik7XHJcbiAgICBjb25zdCBmYWNlID0gY2lyY2xlUG9pbnRzLm1hcChwID0+IG00LnRyYW5zZm9ybVBvaW50KG0sIFtwWzBdLCBzaWduICogMC41ICAsIHBbMl0gXSkpXHJcbiAgIFxyXG4gICAgcmV0dXJuIFtmYWNlLCBtMy50cmFuc2Zvcm1Qb2ludChSbWF0cml4LCBsb2NhbE5vcm1hbCldXHJcbiAgfVxyXG4gIGdldEludmVyc2VJbmVydGlhVGVuc29yKG1hc3MpIHtcclxuICAgIGNvbnN0IHsgcmFkaXVzLCBoZWlnaHQgfSA9IHRoaXM7XHJcbiAgICBjb25zdCBpMSA9XHJcbiAgICAgIG1hc3MgLyAxMiAqICgzKnJhZGl1cypyYWRpdXMgKyBoZWlnaHQqaGVpZ2h0KVxyXG4gICBcclxuICAgIGNvbnN0IGkzID1cclxuICAgICAgbWFzcy8yICpyYWRpdXMqcmFkaXVzXHJcblxyXG4gICAgY29uc3QgbSA9IG0zLm11bHRpcGx5KFxyXG4gICAgICBtMy5tdWx0aXBseSh0aGlzLlJtYXRyaXgsIFsxL2kxLCAwLCAwLCAwLCAxL2kxLCAwLCAwLCAwLCAxL2kzXSksXHJcbiAgICAgIHRoaXMuUm1hdHJpeEludmVyc2VcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIG07XHJcbiAgfVxyXG4gIGdldEFBQkIoKSB7XHJcbiAgICBjb25zdCB7IHJhZGl1cywgaGVpZ2h0IH0gPSB0aGlzO1xyXG4gICAgcmV0dXJuIG5ldyBBQUJCKFxyXG4gICAgICBzdW0odGhpcy5wb3MsIFstcmFkaXVzLCAtaGVpZ2h0LCAtcmFkaXVzXSksXHJcbiAgICAgIHN1bSh0aGlzLnBvcywgW3JhZGl1cywgaGVpZ2h0LCByYWRpdXNdKVxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuZXhwb3J0IHsgQm94LCBTcGhlcmUsIEN5bGluZGVyfTtcclxuIiwiaW1wb3J0IHsgdmVjMywgbTMgfSBmcm9tIFwibWF0aFwiO1xyXG5cclxuY29uc3QgeyBkb3QsIGNyb3NzLCBub3JtYWxpemUsIGRpZmYsIHNjYWxlLCBub3JtLCBzdW0sIG5vcm1TcSB9ID0gdmVjMztcclxuY29uc3QgY2xhbXAgPSAodiwgbWluLCBtYXgpID0+IHtcclxuICBpZiAodiA+IG1pbikge1xyXG4gICAgaWYgKHYgPCBtYXgpIHJldHVybiB2O1xyXG4gICAgZWxzZSByZXR1cm4gbWF4O1xyXG4gIH1cclxuICByZXR1cm4gbWluO1xyXG59O1xyXG5jbGFzcyBDb25zdHJhaW50IHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIGJvZHkxLFxyXG4gICAgYm9keTIsXHJcbiAgICBuLFxyXG4gICAgcmEsXHJcbiAgICByYixcclxuICAgIHJhTG9jYWwsXHJcbiAgICByYkxvY2FsLFxyXG4gICAgYmlhc0ZhY3RvciA9IDAsXHJcbiAgICBsYW1iZGFNaW4gPSAtSW5maW5pdHksXHJcbiAgICBsYW1iZGFNYXggPSBJbmZpbml0eSxcclxuICAgIHRyZXNob2xkID0gMC4wMDAwMDFcclxuICApIHtcclxuICAgIHRoaXMuYmlhc0ZhY3RvciA9IGJpYXNGYWN0b3I7XHJcbiAgICB0aGlzLm4gPSBuO1xyXG4gICAgdGhpcy5KID0gbnVsbDtcclxuXHJcbiAgICB0aGlzLkpNID0gbnVsbDtcclxuICAgIHRoaXMuQiA9IG51bGw7XHJcbiAgICB0aGlzLmJvZHkxID0gYm9keTE7XHJcbiAgICB0aGlzLmJvZHkyID0gYm9keTI7XHJcbiAgICB0aGlzLnJhID0gcmE7XHJcbiAgICB0aGlzLnJiID0gcmI7XHJcbiAgICB0aGlzLnJhTG9jYWwgPSByYUxvY2FsO1xyXG4gICAgdGhpcy5yYkxvY2FsID0gcmJMb2NhbDtcclxuICAgIHRoaXMudHJlc2hvbGQgPSB0cmVzaG9sZDtcclxuICAgIHRoaXMubGFtYmRhQWNjID0gMDtcclxuICAgIHRoaXMubGFtYmRhTWluID0gbGFtYmRhTWluO1xyXG4gICAgdGhpcy5sYW1iZGFNYXggPSBsYW1iZGFNYXg7XHJcbiAgfVxyXG4gIHVwZGF0ZUxlZnRQYXJ0KGRlbHRhVGltZSkge1xyXG4gICAgY29uc3QgeyBib2R5MSwgYm9keTIsIG4sIHJhLCByYiB9ID0gdGhpcztcclxuICAgIGNvbnN0IEogPSBbc2NhbGUobiwgLTEpLCBjcm9zcyhuLCByYSksIG4sIGNyb3NzKHJiLCBuKV07XHJcbiAgICBjb25zdCBkb2YxID0gYm9keTEuRE9GO1xyXG4gICAgY29uc3QgZG9mMiA9IGJvZHkyLkRPRjtcclxuXHJcbiAgICBKWzBdWzBdICo9IGRvZjFbMF07XHJcbiAgICBKWzBdWzFdICo9IGRvZjFbMV07XHJcbiAgICBKWzBdWzJdICo9IGRvZjFbMl07XHJcblxyXG4gICAgSlsxXVswXSAqPSBkb2YxWzNdO1xyXG4gICAgSlsxXVsxXSAqPSBkb2YxWzRdO1xyXG4gICAgSlsxXVsyXSAqPSBkb2YxWzVdO1xyXG5cclxuICAgIEpbMl1bMF0gKj0gZG9mMlswXTtcclxuICAgIEpbMl1bMV0gKj0gZG9mMlsxXTtcclxuICAgIEpbMl1bMl0gKj0gZG9mMlsyXTtcclxuXHJcbiAgICBKWzNdWzBdICo9IGRvZjJbM107XHJcbiAgICBKWzNdWzFdICo9IGRvZjJbNF07XHJcbiAgICBKWzNdWzJdICo9IGRvZjJbNV07XHJcblxyXG4gICAgdGhpcy5KID0gSjtcclxuXHJcbiAgICBjb25zdCBJMSA9IGJvZHkxLmludmVyc2VJbmVydGlhO1xyXG4gICAgY29uc3QgSTIgPSBib2R5Mi5pbnZlcnNlSW5lcnRpYTtcclxuICAgIGxldCBNMSA9IGJvZHkxLmludmVyc2VNYXNzO1xyXG4gICAgbGV0IE0yID0gYm9keTIuaW52ZXJzZU1hc3M7XHJcbiAgICB0aGlzLkpNID0gW1xyXG4gICAgICBzY2FsZSh0aGlzLkpbMF0sIE0xKSxcclxuICAgICAgbTMudHJhbnNmb3JtUG9pbnQoSTEsIHRoaXMuSlsxXSksXHJcbiAgICAgIHNjYWxlKHRoaXMuSlsyXSwgTTIpLFxyXG4gICAgICBtMy50cmFuc2Zvcm1Qb2ludChJMiwgdGhpcy5KWzNdKSxcclxuICAgIF07XHJcblxyXG4gICAgLy9KTUoqID0gSkI7QiA9IE1KKlxyXG4gICAgdGhpcy5fSiA9IFtcclxuICAgICAgWy4uLnRoaXMuSlswXSwgLi4udGhpcy5KWzFdXSxcclxuICAgICAgWy4uLnRoaXMuSlsyXSwgLi4udGhpcy5KWzNdXSxcclxuICAgIF07XHJcbiAgICB0aGlzLkIgPSBbXHJcbiAgICAgIFsuLi50aGlzLkpNWzBdLCAuLi50aGlzLkpNWzFdXSxcclxuICAgICAgWy4uLnRoaXMuSk1bMl0sIC4uLnRoaXMuSk1bM11dLFxyXG4gICAgXTtcclxuICAgIHRoaXMuZWZmTWFzcyA9XHJcbiAgICAgIGRvdChKWzBdLCB0aGlzLkpNWzBdKSArXHJcbiAgICAgIGRvdCh0aGlzLkpNWzFdLCB0aGlzLkpbMV0pICtcclxuICAgICAgZG90KEpbMl0sIHRoaXMuSk1bMl0pICtcclxuICAgICAgZG90KHRoaXMuSk1bM10sIHRoaXMuSlszXSk7XHJcbiAgfVxyXG4gIGFwcGx5UmVzb2x2aW5nSW1wdWxzZShsYW1iZGEpIHtcclxuICAgIHRoaXMuYm9keTEuYXBwbHlJbXB1bHNlKHNjYWxlKHRoaXMuSlswXSwgbGFtYmRhKSwgdGhpcy5yYSk7XHJcbiAgICB0aGlzLmJvZHkyLmFwcGx5SW1wdWxzZShzY2FsZSh0aGlzLkpbMl0sIGxhbWJkYSksIHRoaXMucmIpO1xyXG4gIH1cclxufVxyXG5cclxuY2xhc3MgQ29udGFjdENvbnN0cmFpbnQgZXh0ZW5kcyBDb25zdHJhaW50IHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIGJvZHkxLFxyXG4gICAgYm9keTIsXHJcbiAgICBuLFxyXG4gICAgcmEsXHJcbiAgICByYixcclxuICAgIHJhTG9jYWwsXHJcbiAgICByYkxvY2FsLFxyXG4gICAgYmlhc0ZhY3RvcixcclxuICAgIHRyZXNob2xkLFxyXG4gICAgcGVuRGVwdGhcclxuICApIHtcclxuICAgIHN1cGVyKFxyXG4gICAgICBib2R5MSxcclxuICAgICAgYm9keTIsXHJcbiAgICAgIG4sXHJcbiAgICAgIHJhLFxyXG4gICAgICByYixcclxuICAgICAgcmFMb2NhbCxcclxuICAgICAgcmJMb2NhbCxcclxuICAgICAgYmlhc0ZhY3RvcixcclxuICAgICAgbnVsbCxcclxuICAgICAgbnVsbCxcclxuICAgICAgdHJlc2hvbGRcclxuICAgICk7XHJcblxyXG4gICAgdGhpcy5wZW5EZXB0aCA9IHBlbkRlcHRoO1xyXG4gIH1cclxuICB1cGRhdGVMZWZ0UGFydChkZWx0YVRpbWUpIHtcclxuICAgIHN1cGVyLnVwZGF0ZUxlZnRQYXJ0KGRlbHRhVGltZSk7XHJcbiAgICB0aGlzLmxhbWJkYU1heCA9XHJcbiAgICAgIE1hdGgubWF4KDEsbm9ybShcclxuICAgICAgICBzdW0oXHJcbiAgICAgICAgICBzY2FsZSh0aGlzLmJvZHkxLnZlbG9jaXR5LCB0aGlzLmJvZHkxLm1hc3MpLFxyXG4gICAgICAgICAgc2NhbGUodGhpcy5ib2R5Mi52ZWxvY2l0eSwgdGhpcy5ib2R5Mi5tYXNzKVxyXG4gICAgICAgIClcclxuICAgICAgKSAqIDEwKTtcclxuICAgIHRoaXMubGFtYmRhTWluID0gMDtcclxuICB9XHJcbiAgdXBkYXRlUmlnaHRQYXJ0KGRlbHRhVGltZSkge1xyXG4gICAgY29uc3QgeyBib2R5MSwgYm9keTIsIHJhLCByYiwgbiwgcGVuRGVwdGgsIHRyZXNob2xkLCBiaWFzRmFjdG9yIH0gPSB0aGlzO1xyXG5cclxuICAgIGNvbnN0IHJlbGF0aXZlVmVsb2NpdHkgPSBkaWZmKFxyXG4gICAgICBzdW0oYm9keTIudmVsb2NpdHksIGNyb3NzKGJvZHkyLmFuZ3VsYXJWLCByYikpLFxyXG4gICAgICBzdW0oYm9keTEudmVsb2NpdHksIGNyb3NzKGJvZHkxLmFuZ3VsYXJWLCByYSkpXHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IHJlbGF0aXZlVmVsb2NpdHlOb3JtYWxQcm9qZWN0aW9uID0gZG90KHJlbGF0aXZlVmVsb2NpdHksIG4pO1xyXG4gICAgdGhpcy5iaWFzID1cclxuICAgICAgKE1hdGgubWF4KDAsIHBlbkRlcHRoIC0gdHJlc2hvbGQpIC8gZGVsdGFUaW1lKSAqIGJpYXNGYWN0b3IgLVxyXG4gICAgICByZWxhdGl2ZVZlbG9jaXR5Tm9ybWFsUHJvamVjdGlvbjtcclxuICB9XHJcbiAgYXBwbHlSZXNvbHZpbmdJbXB1bHNlKGxhbWJkYSkge1xyXG4gICAgdGhpcy5ib2R5MS5hcHBseUltcHVsc2Uoc2NhbGUodGhpcy5KWzBdLCBsYW1iZGEpLCB0aGlzLnJhKTtcclxuICAgIHRoaXMuYm9keTIuYXBwbHlJbXB1bHNlKHNjYWxlKHRoaXMuSlsyXSwgbGFtYmRhKSwgdGhpcy5yYik7XHJcbiAgfVxyXG4gIGFwcGx5UmVzb2x2aW5nUHNldWRvSW1wdWxzZShsYW1iZGEpIHtcclxuICAgIGlmIChsYW1iZGEgPCAwKSByZXR1cm47XHJcbiAgICBjb25zdCBtYXggPSB0aGlzLmVmZk1hc3MgKiAxMDtcclxuICAgIC8vIGxhbWJkYSA9IE1hdGgubWF4KE1hdGgubWluKDEwMCwgbGFtYmRhKS0gMC4xLDApXHJcbiAgICB0aGlzLmJvZHkxLmFwcGx5UHNldWRvSW1wdWxzZShzY2FsZSh0aGlzLkpbMF0sIGxhbWJkYSksIHRoaXMucmEpO1xyXG4gICAgdGhpcy5ib2R5Mi5hcHBseVBzZXVkb0ltcHVsc2Uoc2NhbGUodGhpcy5KWzJdLCBsYW1iZGEpLCB0aGlzLnJiKTtcclxuICB9XHJcbn1cclxuXHJcbmNsYXNzIEZyaWN0aW9uQ29uc3RyYWludCBleHRlbmRzIENvbnN0cmFpbnQge1xyXG4gIHVwZGF0ZVJpZ2h0UGFydChkZWx0YVRpbWUpIHtcclxuICAgIGNvbnN0IHsgYm9keTEsIGJvZHkyLCByYSwgcmIsIG4gfSA9IHRoaXM7XHJcbiAgICBjb25zdCByZWxhdGl2ZVZlbG9jaXR5ID0gZGlmZihcclxuICAgICAgc3VtKGJvZHkyLnZlbG9jaXR5LCBjcm9zcyhib2R5Mi5hbmd1bGFyViwgcmIpKSxcclxuICAgICAgc3VtKGJvZHkxLnZlbG9jaXR5LCBjcm9zcyhib2R5MS5hbmd1bGFyViwgcmEpKVxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCByZWxhdGl2ZVZlbG9jaXR5Tm9ybWFsUHJvamVjdGlvbiA9IGRvdChyZWxhdGl2ZVZlbG9jaXR5LCBuKTtcclxuICAgIHRoaXMuYmlhcyA9IC1yZWxhdGl2ZVZlbG9jaXR5Tm9ybWFsUHJvamVjdGlvbjtcclxuICB9XHJcbiAgYXBwbHlSZXNvbHZpbmdJbXB1bHNlKGxhbWJkYSkge1xyXG4gICAgdGhpcy5ib2R5MS5hcHBseUltcHVsc2Uoc2NhbGUodGhpcy5KWzBdLCBsYW1iZGEpLCB0aGlzLnJhKTtcclxuICAgIHRoaXMuYm9keTIuYXBwbHlJbXB1bHNlKHNjYWxlKHRoaXMuSlsyXSwgbGFtYmRhKSwgdGhpcy5yYik7XHJcbiAgfVxyXG59XHJcblxyXG5jbGFzcyBQb3NpdGlvbkNvbnN0cmFpbnQgZXh0ZW5kcyBDb25zdHJhaW50IHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIGJvZHkxLFxyXG4gICAgYm9keTIsXHJcbiAgICBuLFxyXG4gICAgcmEsXHJcbiAgICByYixcclxuICAgIHJhTG9jYWwsXHJcbiAgICByYkxvY2FsLFxyXG4gICAgYmlhc0ZhY3RvcixcclxuICAgIHRyZXNob2xkLFxyXG4gICAgcGVuRGVwdGhcclxuICApIHtcclxuICAgIHN1cGVyKFxyXG4gICAgICBib2R5MSxcclxuICAgICAgYm9keTIsXHJcbiAgICAgIG4sXHJcbiAgICAgIHJhLFxyXG4gICAgICByYixcclxuICAgICAgcmFMb2NhbCxcclxuICAgICAgcmJMb2NhbCxcclxuICAgICAgYmlhc0ZhY3RvcixcclxuICAgICAgbnVsbCxcclxuICAgICAgbnVsbCxcclxuICAgICAgdHJlc2hvbGRcclxuICAgICk7XHJcbiAgICB0aGlzLnBlbkRlcHRoID0gcGVuRGVwdGg7XHJcbiAgfVxyXG4gIGFwcGx5UmVzb2x2aW5nSW1wdWxzZShsYW1iZGEpIHtcclxuICAgIHRoaXMuYm9keTEuYXBwbHlQc2V1ZG9JbXB1bHNlKHNjYWxlKHRoaXMuSlswXSwgbGFtYmRhKSwgdGhpcy5yYSk7XHJcbiAgICB0aGlzLmJvZHkyLmFwcGx5UHNldWRvSW1wdWxzZShzY2FsZSh0aGlzLkpbMl0sIGxhbWJkYSksIHRoaXMucmIpO1xyXG4gIH1cclxuICB1cGRhdGVSaWdodFBhcnQoZGVsdGFUaW1lKSB7XHJcbiAgICBjb25zdCB7IGJvZHkxLCBib2R5MiwgcmEsIHJiLCBuLCBwZW5EZXB0aCwgdHJlc2hvbGQsIGJpYXNGYWN0b3IgfSA9IHRoaXM7XHJcblxyXG4gICAgdGhpcy5iaWFzID0gKE1hdGgubWF4KDAsIHBlbkRlcHRoIC0gdHJlc2hvbGQpIC8gZGVsdGFUaW1lKSAqIGJpYXNGYWN0b3I7XHJcbiAgfVxyXG59XHJcbmNsYXNzIFJvdGF0aW9uYWxDb25zdHJhaW50IGV4dGVuZHMgQ29uc3RyYWludHtcclxuICBjb25zdHJ1Y3Rvcihib2R5MSwgYm9keTIsIHJhTG9jYWwsIHJiTG9jYWwpe1xyXG4gICAgc3VwZXIoYm9keTEsIGJvZHkyLCBudWxsLCBudWxsLCBudWxsLCByYUxvY2FsLCByYkxvY2FsKVxyXG4gICBcclxuICB9XHJcbiAgdXBkYXRlTGVmdFBhcnQoZGVsdGFUaW1lKSB7XHJcbiAgICBjb25zdCB7IGJvZHkxLCBib2R5MiwgcmFMb2NhbCwgcmJMb2NhbCB9ID0gdGhpcztcclxuICAgIHRoaXMuUEEgPSBib2R5MS5jb2xsaWRlci5sb2NhbFRvR2xvYmFsKHJhTG9jYWwpO1xyXG4gICAgdGhpcy5QQiA9IGJvZHkyLmNvbGxpZGVyLmxvY2FsVG9HbG9iYWwocmJMb2NhbCk7XHJcbiAgICBjb25zdCBzID0gbTMudHJhbnNmb3JtUG9pbnQoYm9keTEuY29sbGlkZXIuUm1hdHJpeCwgcmFMb2NhbCk7XHJcbiAgICBjb25zdCBiID0gbTMudHJhbnNmb3JtUG9pbnQoYm9keTIuY29sbGlkZXIuUm1hdHJpeCwgcmJMb2NhbCk7XHJcblxyXG4gICAgXHJcbiAgICB0aGlzLnJhID0gcztcclxuICAgIHRoaXMucmIgPSBiO1xyXG5cclxuXHJcbiAgICBjb25zdCBKID0gW1swLCAwLCAwXSwgY3Jvc3MocywgYiksIFswLCAwLCAwXSwgY3Jvc3MoYiwgcyldO1xyXG5cclxuICAgIGNvbnN0IGRvZjEgPSBib2R5MS5ET0Y7XHJcbiAgICBjb25zdCBkb2YyID0gYm9keTIuRE9GO1xyXG5cclxuICAgIEpbMF1bMF0gKj0gZG9mMVswXTtcclxuICAgIEpbMF1bMV0gKj0gZG9mMVsxXTtcclxuICAgIEpbMF1bMl0gKj0gZG9mMVsyXTtcclxuXHJcbiAgICBKWzFdWzBdICo9IGRvZjFbM107XHJcbiAgICBKWzFdWzFdICo9IGRvZjFbNF07XHJcbiAgICBKWzFdWzJdICo9IGRvZjFbNV07XHJcblxyXG4gICAgSlsyXVswXSAqPSBkb2YyWzBdO1xyXG4gICAgSlsyXVsxXSAqPSBkb2YyWzFdO1xyXG4gICAgSlsyXVsyXSAqPSBkb2YyWzJdO1xyXG5cclxuICAgIEpbM11bMF0gKj0gZG9mMlszXTtcclxuICAgIEpbM11bMV0gKj0gZG9mMls0XTtcclxuICAgIEpbM11bMl0gKj0gZG9mMls1XTtcclxuICAgIGNvbnN0IEkxID0gYm9keTEuaW52ZXJzZUluZXJ0aWE7XHJcbiAgICBjb25zdCBJMiA9IGJvZHkyLmludmVyc2VJbmVydGlhO1xyXG4gICAgdGhpcy5KID0gSjtcclxuICAgIHRoaXMuSk0gPSBbXHJcbiAgICAgIFswLCAwLCAwXSxcclxuICAgICAgbTMudHJhbnNmb3JtUG9pbnQoSTEsIHRoaXMuSlsxXSksXHJcbiAgICAgIFswLCAwLCAwXSxcclxuICAgICAgbTMudHJhbnNmb3JtUG9pbnQoSTIsIHRoaXMuSlszXSksXHJcbiAgICBdO1xyXG4gICAgdGhpcy5lZmZNYXNzID0gZG90KHRoaXMuSk1bMV0sIHRoaXMuSlsxXSkgKyBkb3QodGhpcy5KTVszXSwgdGhpcy5KWzNdKTtcclxuICAgIHRoaXMuQiA9IFtcclxuICAgICAgWzAsIDAsIDAsIC4uLnRoaXMuSk1bMV1dLFxyXG4gICAgICBbMCwgMCwgMCwgLi4udGhpcy5KTVszXV0sXHJcbiAgICBdO1xyXG4gICAgdGhpcy5fSiA9IFtcclxuICAgICAgWy4uLnRoaXMuSlswXSwgLi4udGhpcy5KWzFdXSxcclxuICAgICAgWy4uLnRoaXMuSlsyXSwgLi4udGhpcy5KWzNdXSxcclxuICAgIF07XHJcbiAgfVxyXG4gIHVwZGF0ZVJpZ2h0UGFydChkZWx0YVRpbWUpIHtcclxuICAgIGNvbnN0IHsgYm9keTEsIGJvZHkyIH0gPSB0aGlzO1xyXG5cclxuICAgIFxyXG4gICAgdGhpcy5iaWFzID0gLWRvdCh0aGlzLkpbMV0sIGJvZHkxLmFuZ3VsYXJWKSArIGRvdCh0aGlzLkpbM10sIGJvZHkyLmFuZ3VsYXJWKVxyXG4gIH1cclxuICBhcHBseVJlc29sdmluZ0ltcHVsc2UobGFtYmRhKXtcclxuICAgIGNvbnN0IHsgYm9keTEsIGJvZHkyIH0gPSB0aGlzO1xyXG4gICAgYm9keTEuYWRkQW5ndWxhclYoc2NhbGUodGhpcy5yYSwgbGFtYmRhKSlcclxuICAgIGJvZHkyLmFkZEFuZ3VsYXJWKHNjYWxlKHRoaXMucmIsIGxhbWJkYSkpXHJcbiAgfVxyXG59XHJcbmNsYXNzIEpvaW50IGV4dGVuZHMgQ29uc3RyYWludCB7XHJcbiAgY29uc3RydWN0b3IoYm9keTEsIGJvZHkyLCByYUxvY2FsLCByYkxvY2FsLCBiaWFzRmFjdG9yID0gMCkge1xyXG4gICAgc3VwZXIoYm9keTEsIGJvZHkyLCBudWxsLCBudWxsLCBudWxsLCByYUxvY2FsLCByYkxvY2FsLCBiaWFzRmFjdG9yKTtcclxuXHJcbiAgICB0aGlzLnRyZXNob2xkID0gMC4wMDAxO1xyXG4gICAgdGhpcy5yZWR1Y2VyID0gMC41O1xyXG4gICAgdGhpcy5tYXhJbXB1bHNlID0gMC43O1xyXG4gIH1cclxuICB1cGRhdGVMZWZ0UGFydChkZWx0YVRpbWUpIHtcclxuICAgIGNvbnN0IHsgYm9keTEsIGJvZHkyLCByYUxvY2FsLCByYkxvY2FsIH0gPSB0aGlzO1xyXG4gICAgdGhpcy5QQSA9IGJvZHkxLmNvbGxpZGVyLmxvY2FsVG9HbG9iYWwocmFMb2NhbCk7XHJcbiAgICB0aGlzLlBCID0gYm9keTIuY29sbGlkZXIubG9jYWxUb0dsb2JhbChyYkxvY2FsKTtcclxuICAgIGNvbnN0IGRpciA9IGRpZmYodGhpcy5QQSwgdGhpcy5QQik7XHJcbiAgICBjb25zdCBuID0gZGlyO1xyXG4gICAgdGhpcy5uID0gbjtcclxuICAgIHRoaXMucmEgPSBkaWZmKHRoaXMuUEEsIHRoaXMuYm9keTEuY29sbGlkZXIucG9zKTtcclxuICAgIHRoaXMucmIgPSBkaWZmKHRoaXMuUEIsIHRoaXMuYm9keTIuY29sbGlkZXIucG9zKTtcclxuICAgIHRoaXMucGVuRGVwdGggPSBub3JtKGRpcik7XHJcblxyXG4gICAgY29uc3QgSiA9IFtcclxuICAgICAgc2NhbGUodGhpcy5uLCAtMSksXHJcbiAgICAgIGNyb3NzKHRoaXMubiwgdGhpcy5yYSksXHJcbiAgICAgIHRoaXMubixcclxuICAgICAgY3Jvc3ModGhpcy5yYiwgdGhpcy5uKSxcclxuICAgIF07XHJcblxyXG4gICAgY29uc3QgZG9mMSA9IGJvZHkxLkRPRjtcclxuICAgIGNvbnN0IGRvZjIgPSBib2R5Mi5ET0Y7XHJcblxyXG4gICAgSlswXVswXSAqPSBkb2YxWzBdO1xyXG4gICAgSlswXVsxXSAqPSBkb2YxWzFdO1xyXG4gICAgSlswXVsyXSAqPSBkb2YxWzJdO1xyXG5cclxuICAgIEpbMV1bMF0gKj0gZG9mMVszXTtcclxuICAgIEpbMV1bMV0gKj0gZG9mMVs0XTtcclxuICAgIEpbMV1bMl0gKj0gZG9mMVs1XTtcclxuXHJcbiAgICBKWzJdWzBdICo9IGRvZjJbMF07XHJcbiAgICBKWzJdWzFdICo9IGRvZjJbMV07XHJcbiAgICBKWzJdWzJdICo9IGRvZjJbMl07XHJcblxyXG4gICAgSlszXVswXSAqPSBkb2YyWzNdO1xyXG4gICAgSlszXVsxXSAqPSBkb2YyWzRdO1xyXG4gICAgSlszXVsyXSAqPSBkb2YyWzVdO1xyXG4gICAgY29uc3QgSTEgPSBib2R5MS5pbnZlcnNlSW5lcnRpYTtcclxuICAgIGNvbnN0IEkyID0gYm9keTIuaW52ZXJzZUluZXJ0aWE7XHJcbiAgICBsZXQgTTEgPSBib2R5MS5pbnZlcnNlTWFzcztcclxuICAgIGxldCBNMiA9IGJvZHkyLmludmVyc2VNYXNzO1xyXG4gICAgdGhpcy5KID0gSjtcclxuICAgIHRoaXMuSk0gPSBbXHJcbiAgICAgIHNjYWxlKHRoaXMuSlswXSwgTTEpLFxyXG4gICAgICBtMy50cmFuc2Zvcm1Qb2ludChJMSwgdGhpcy5KWzFdKSxcclxuICAgICAgc2NhbGUodGhpcy5KWzJdLCBNMiksXHJcbiAgICAgIG0zLnRyYW5zZm9ybVBvaW50KEkyLCB0aGlzLkpbM10pLFxyXG4gICAgXTtcclxuICAgIHRoaXMuZWZmTWFzcyA9XHJcbiAgICAgIGRvdCh0aGlzLkpNWzBdLCBKWzBdKSArXHJcbiAgICAgIGRvdCh0aGlzLkpNWzFdLCB0aGlzLkpbMV0pICtcclxuICAgICAgZG90KHRoaXMuSk1bMl0sIEpbMl0pICtcclxuICAgICAgZG90KHRoaXMuSk1bM10sIHRoaXMuSlszXSk7XHJcbiAgICB0aGlzLkIgPSBbXHJcbiAgICAgIFsuLi50aGlzLkpNWzBdLCAuLi50aGlzLkpNWzFdXSxcclxuICAgICAgWy4uLnRoaXMuSk1bMl0sIC4uLnRoaXMuSk1bM11dLFxyXG4gICAgXTtcclxuICAgIHRoaXMuX0ogPSBbXHJcbiAgICAgIFsuLi50aGlzLkpbMF0sIC4uLnRoaXMuSlsxXV0sXHJcbiAgICAgIFsuLi50aGlzLkpbMl0sIC4uLnRoaXMuSlszXV0sXHJcbiAgICBdO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlUmlnaHRQYXJ0KGRlbHRhVGltZSkge1xyXG4gICAgY29uc3QgeyBib2R5MSwgYm9keTIsIHJhLCByYiwgbiwgcGVuRGVwdGgsIHRyZXNob2xkLCBiaWFzRmFjdG9yIH0gPSB0aGlzO1xyXG5cclxuICAgIGNvbnN0IHJlbGF0aXZlVmVsb2NpdHkgPSBkaWZmKFxyXG4gICAgICBzdW0oYm9keTIudmVsb2NpdHksIGNyb3NzKGJvZHkyLmFuZ3VsYXJWLCByYikpLFxyXG4gICAgICBzdW0oYm9keTEudmVsb2NpdHksIGNyb3NzKGJvZHkxLmFuZ3VsYXJWLCByYSkpXHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IHJlbGF0aXZlVmVsb2NpdHlOb3JtYWxQcm9qZWN0aW9uID0gZG90KHJlbGF0aXZlVmVsb2NpdHksIG4pO1xyXG4gICAgY29uc3QgZmFjID0gcGVuRGVwdGggKiogMiA+IHRyZXNob2xkO1xyXG4gICAgdGhpcy5iaWFzID1cclxuICAgICAgKGJpYXNGYWN0b3IgKiBNYXRoLm1heChwZW5EZXB0aCAqKiAyIC0gdHJlc2hvbGQsIDApKSAvIGRlbHRhVGltZSAtXHJcbiAgICAgIHJlbGF0aXZlVmVsb2NpdHlOb3JtYWxQcm9qZWN0aW9uO1xyXG4gICAgdGhpcy5iaWFzICo9IGZhYztcclxuICB9XHJcbiAgYXBwbHlSZXNvbHZpbmdJbXB1bHNlKGxhbWJkYSkge1xyXG4gICAgdGhpcy5ib2R5MS5hcHBseUltcHVsc2Uoc2NhbGUodGhpcy5KWzBdLCBsYW1iZGEpLCB0aGlzLnJhKTtcclxuICAgIHRoaXMuYm9keTIuYXBwbHlJbXB1bHNlKHNjYWxlKHRoaXMuSlsyXSwgbGFtYmRhKSwgdGhpcy5yYik7XHJcbiAgfVxyXG4gIGFwcGx5UmVzb2x2aW5nUHNldWRvSW1wdWxzZShsYW1iZGEpIHtcclxuICAgIGNvbnN0IG1heCA9IHRoaXMuZWZmTWFzcyAqIDEwO1xyXG4gICAgLy9sYW1iZGEgPSBjbGFtcChsYW1iZGEsIC0xLCAxKVxyXG4gICAgdGhpcy5ib2R5MS5hcHBseVBzZXVkb0ltcHVsc2Uoc2NhbGUodGhpcy5uLCAtbGFtYmRhKSwgWzAsIDAsIDBdKTtcclxuICAgIHRoaXMuYm9keTIuYXBwbHlQc2V1ZG9JbXB1bHNlKHNjYWxlKHRoaXMubiwgbGFtYmRhKSwgWzAsIDAsIDBdKTtcclxuICB9XHJcbn1cclxuY2xhc3MgSm9pbnRQb3NpdGlvbkNvbnN0cmFpbnQgZXh0ZW5kcyBKb2ludCB7XHJcbiAgdXBkYXRlUmlnaHRQYXJ0KGRlbHRhVGltZSkge1xyXG4gICAgY29uc3QgeyBwZW5EZXB0aCwgdHJlc2hvbGQsIGJpYXNGYWN0b3IgfSA9IHRoaXM7XHJcblxyXG4gICAgY29uc3QgZmFjID0gcGVuRGVwdGggKiogMiA+IHRyZXNob2xkO1xyXG4gICAgdGhpcy5iaWFzID1cclxuICAgICAgKChiaWFzRmFjdG9yICogTWF0aC5tYXgocGVuRGVwdGggKiogMiAtIHRyZXNob2xkLCAwKSkgLyBkZWx0YVRpbWUpICogZmFjO1xyXG4gIH1cclxuICBhcHBseVJlc29sdmluZ0ltcHVsc2UobGFtYmRhKSB7XHJcbiAgICAvL2lmKGxhbWJkYSA8IDAuMSlyZXR1cm5cclxuICAgIHRoaXMuYm9keTEuYXBwbHlQc2V1ZG9JbXB1bHNlKHNjYWxlKHRoaXMuSlswXSwgbGFtYmRhKSwgdGhpcy5yYSk7XHJcbiAgICB0aGlzLmJvZHkyLmFwcGx5UHNldWRvSW1wdWxzZShzY2FsZSh0aGlzLkpbMl0sIGxhbWJkYSksIHRoaXMucmIpO1xyXG4gIH1cclxufVxyXG5leHBvcnQge1xyXG4gIENvbnRhY3RDb25zdHJhaW50LFxyXG4gIENvbnN0cmFpbnQsXHJcbiAgSm9pbnQsXHJcbiAgRnJpY3Rpb25Db25zdHJhaW50LFxyXG4gIFBvc2l0aW9uQ29uc3RyYWludCxcclxuICBKb2ludFBvc2l0aW9uQ29uc3RyYWludCxcclxuICBSb3RhdGlvbmFsQ29uc3RyYWludFxyXG59O1xyXG4iLCJjbGFzcyBFdmVudEVtaXR0ZXIge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5ldmVudHMgPSB7fTtcclxuICB9XHJcbiAgb24oZXZlbnROYW1lLCBmbikge1xyXG4gICAgaWYgKCF0aGlzLmV2ZW50c1tldmVudE5hbWVdKSB7XHJcbiAgICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gPSBbXTtcclxuICAgIH1cclxuICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0ucHVzaChmbik7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdID0gdGhpcy5ldmVudHNbZXZlbnROYW1lXS5maWx0ZXIoXHJcbiAgICAgICAgKGV2ZW50Rm4pID0+IGZuICE9PSBldmVudEZuXHJcbiAgICAgICk7XHJcbiAgICB9O1xyXG4gIH1cclxuICBlbWl0KGV2ZW50TmFtZSwgZGF0YSkge1xyXG4gICAgaWYgKHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0pIHtcclxuICAgICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXS5mb3JFYWNoKChmbikgPT4ge1xyXG4gICAgICAgIGZuLmNhbGwobnVsbCwgZGF0YSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5leHBvcnQgeyBFdmVudEVtaXR0ZXIgfTtcclxuIiwiaW1wb3J0IHsgdmVjMywgbTMsIG00IH0gZnJvbSBcIm1hdGhcIjtcclxuaW1wb3J0IHsgY2xpcEZhY2VWc0ZhY2UsIGlzSW5DbG9ja3dpc2UgfSBmcm9tIFwiLi9jbGlwcGluZ1wiO1xyXG5cclxuY29uc3QgeyBkb3QsIGNyb3NzLCBub3JtYWxpemUsIHN1bSwgZGlmZiwgIHNjYWxlLCBpc051bGwsIG5vcm0gfSA9IHZlYzM7XHJcbmNvbnN0IENMSVBfQklBUyA9IDAuMTtcclxuY29uc3QgR0pLX01BWF9JVEVSQVRJT05TX05VTSA9IDY0O1xyXG5jb25zdCBFUEFfQklBUyA9IDAuMDAwMDE7XHJcblxyXG5jb25zdCByYXlWc1BsYW5lSW50ZXJzZWMgPSAocGxhbmUsIHBvaW50LCBkaXJlY3Rpb24pID0+IHtcclxuICBjb25zdCBbb3JpZ2luLCBub3JtYWxdID0gcGxhbmU7XHJcbiAgY29uc3QgX2RvdCA9IGRvdChub3JtYWwsIGRpcmVjdGlvbik7XHJcbiAgY29uc3QgZnJvbVBvaW50VG9PcmlnaW4gPSBkaWZmKHBvaW50LCBvcmlnaW4pO1xyXG4gIGNvbnN0IGZhYyA9IGRvdChmcm9tUG9pbnRUb09yaWdpbiwgbm9ybWFsKSAvIF9kb3Q7XHJcbiAgcmV0dXJuIGRpZmYocG9pbnQsIHNjYWxlKGRpcmVjdGlvbiwgZmFjKSk7XHJcbn07XHJcbmNvbnN0IGlzUG9pbnRCZWhpbmRQbGFuZSA9IChwbGFuZSwgcG9pbnQsIHNpZ24gPSAxKSA9PiB7XHJcbiAgY29uc3QgW29yaWdpbiwgbm9ybWFsXSA9IHBsYW5lO1xyXG4gIHJldHVybiBkb3Qobm9ybWFsLCBkaWZmKHBvaW50LCBvcmlnaW4pKSAqIHNpZ24gPiAwIC0gQ0xJUF9CSUFTO1xyXG59O1xyXG5jb25zdCBwb2ludE9uUGxhbmVQcm9qZWN0aW9uID0gKHBsYW5lLCBwb2ludCkgPT4ge1xyXG4gIGNvbnN0IFtvcmlnaW4sIG5vcm1hbF0gPSBwbGFuZTtcclxuICBjb25zdCBmcm9tUG9pbnRUb09yaWdpbiA9IGRpZmYocG9pbnQsIG9yaWdpbik7XHJcbiAgY29uc3QgcHJvakFsb25nTm9ybWFsID0gZG90KG5vcm1hbCwgZnJvbVBvaW50VG9PcmlnaW4pO1xyXG5cclxuICByZXR1cm4gZGlmZihwb2ludCwgc2NhbGUobm9ybWFsLCBwcm9qQWxvbmdOb3JtYWwpKTtcclxufTtcclxuY29uc3QgY2xpcFBvaW50c0JlaGluZFBsYW5lID0gKHBsYW5lLCBwb2ludHMsIHNpZ24gPSAxKSA9PiB7XHJcbiAgY29uc3QgW29yaWdpbiwgbm9ybWFsXSA9IHBsYW5lO1xyXG5cclxuICByZXR1cm4gcG9pbnRzLmZpbHRlcihcclxuICAgIChwb2ludCkgPT4gZG90KG5vcm1hbCwgZGlmZihwb2ludCwgb3JpZ2luKSkgKiBzaWduICsgQ0xJUF9CSUFTID4gMFxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBnZXQyRGNvb3Jkc09uUGxhbmUgPSAoaSwgaiwgcG9pbnQpID0+IHtcclxuICByZXR1cm4gW2RvdChpLCBwb2ludCksIGRvdChqLCBwb2ludCldO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gdXBkYXRlX3NpbXBsZXgzKGEsIGIsIGMsIGQsIHNlYXJjaF9kaXIsIHNpbXBfZGltKSB7XHJcbiAgY29uc3QgbiA9IGNyb3NzKGRpZmYodGhpcy5iLCB0aGlzLmEpLCBkaWZmKHRoaXMuYywgdGhpcy5hKSk7XHJcbiAgY29uc3QgQU8gPSBzY2FsZSh0aGlzLmEsIC0xKTtcclxuXHJcbiAgdGhpcy5zaW1wX2RpbSA9IDI7XHJcbiAgaWYgKGRvdChjcm9zcyhkaWZmKHRoaXMuYiwgdGhpcy5hKSwgbiksIEFPKSA+IDApIHtcclxuICAgIHRoaXMuYyA9IHRoaXMuYTtcclxuICAgIHRoaXMuc2VhcmNoX2RpciA9IGNyb3NzKFxyXG4gICAgICBjcm9zcyhkaWZmKHRoaXMuYiwgdGhpcy5hKSwgQU8pLFxyXG4gICAgICBkaWZmKHRoaXMuYiwgdGhpcy5hKVxyXG4gICAgKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgaWYgKGRvdChjcm9zcyhuLCBkaWZmKHRoaXMuYywgdGhpcy5hKSksIEFPKSA+IDApIHtcclxuICAgIHRoaXMuYiA9IHRoaXMuYTtcclxuICAgIHRoaXMuc2VhcmNoX2RpciA9IGNyb3NzKFxyXG4gICAgICBjcm9zcyhkaWZmKHRoaXMuYywgdGhpcy5hKSwgQU8pLFxyXG4gICAgICBkaWZmKHRoaXMuYywgdGhpcy5hKVxyXG4gICAgKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgdGhpcy5zaW1wX2RpbSA9IDM7XHJcbiAgaWYgKGRvdChuLCBBTykgPiAwKSB7XHJcbiAgICB0aGlzLmQgPSB0aGlzLmM7XHJcbiAgICB0aGlzLmMgPSB0aGlzLmI7XHJcbiAgICB0aGlzLmIgPSB0aGlzLmE7XHJcbiAgICB0aGlzLnNlYXJjaF9kaXIgPSBuO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICB0aGlzLmQgPSB0aGlzLmI7XHJcbiAgdGhpcy5iID0gdGhpcy5hO1xyXG4gIHRoaXMuc2VhcmNoX2RpciA9IHNjYWxlKG4sIC0xKTtcclxuICByZXR1cm47XHJcbn1cclxuZnVuY3Rpb24gdXBkYXRlX3NpbXBsZXg0KGEsIGIsIGMsIGQsIHNlYXJjaF9kaXIsIHNpbXBfZGltKSB7XHJcbiAgY29uc3QgQUJDID0gY3Jvc3MoZGlmZih0aGlzLmIsIHRoaXMuYSksIGRpZmYodGhpcy5jLCB0aGlzLmEpKTtcclxuICBjb25zdCBBQ0QgPSBjcm9zcyhkaWZmKHRoaXMuYywgdGhpcy5hKSwgZGlmZih0aGlzLmQsIHRoaXMuYSkpO1xyXG4gIGNvbnN0IEFEQiA9IGNyb3NzKGRpZmYodGhpcy5kLCB0aGlzLmEpLCBkaWZmKHRoaXMuYiwgdGhpcy5hKSk7XHJcbiAgY29uc3QgQU8gPSBzY2FsZSh0aGlzLmEsIC0xKTtcclxuICB0aGlzLnNpbXBfZGltID0gMztcclxuXHJcbiAgaWYgKGRvdChBQkMsIEFPKSA+IDApIHtcclxuICAgIHRoaXMuZCA9IHRoaXMuYztcclxuICAgIHRoaXMuYyA9IHRoaXMuYjtcclxuICAgIHRoaXMuYiA9IHRoaXMuYTtcclxuICAgIHRoaXMuc2VhcmNoX2RpciA9IEFCQztcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIGlmIChkb3QoQUNELCBBTykgPiAwKSB7XHJcbiAgICB0aGlzLmIgPSB0aGlzLmE7XHJcbiAgICB0aGlzLnNlYXJjaF9kaXIgPSBBQ0Q7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBpZiAoZG90KEFEQiwgQU8pID4gMCkge1xyXG4gICAgdGhpcy5jID0gdGhpcy5kO1xyXG4gICAgdGhpcy5kID0gdGhpcy5iO1xyXG4gICAgdGhpcy5iID0gdGhpcy5hO1xyXG4gICAgdGhpcy5zZWFyY2hfZGlyID0gQURCO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICByZXR1cm4gdHJ1ZTtcclxufVxyXG5mdW5jdGlvbiBnamsoYm9keTEsIGJvZHkyKSB7XHJcbiAgY29uc3QgY29sbDEgPSBib2R5MS5jb2xsaWRlcjtcclxuICBjb25zdCBjb2xsMiA9IGJvZHkyLmNvbGxpZGVyO1xyXG4gIHRoaXMuYSA9IFswLCAwLCAwXTtcclxuICB0aGlzLmIgPSBbMCwgMCwgMF07XHJcbiAgdGhpcy5jID0gWzAsIDAsIDBdO1xyXG4gIHRoaXMuZCA9IFswLCAwLCAwXTtcclxuICB0aGlzLnNlYXJjaF9kaXIgPSBbMCwgMCwgMF07XHJcbiAgdGhpcy5zaW1wX2RpbSA9IDA7XHJcblxyXG4gIHRoaXMub3JpZ2luc01hcCA9IG5ldyBNYXAoKTtcclxuXHJcbiAgbGV0IG10diA9IFswLCAwLCAwXTtcclxuXHJcbiAgdGhpcy5zZWFyY2hfZGlyID0gZGlmZihjb2xsMS5wb3MsIGNvbGwyLnBvcyk7XHJcbiAgY29uc3QgY19vcmlnaW4xID0gY29sbDEuc3VwcG9ydChzY2FsZSh0aGlzLnNlYXJjaF9kaXIsIC0xKSk7XHJcbiAgY29uc3QgY19vcmlnaW4yID0gY29sbDIuc3VwcG9ydCh0aGlzLnNlYXJjaF9kaXIpO1xyXG4gIHRoaXMuYyA9IGRpZmYoY19vcmlnaW4yLCBjX29yaWdpbjEpO1xyXG5cclxuICB0aGlzLm9yaWdpbnNNYXAuc2V0KHRoaXMuYywgW2Nfb3JpZ2luMSwgY19vcmlnaW4yXSk7XHJcblxyXG4gIHRoaXMuc2VhcmNoX2RpciA9IHNjYWxlKHRoaXMuYywgLTEpO1xyXG5cclxuICBjb25zdCBiX29yaWdpbjEgPSBjb2xsMS5zdXBwb3J0KHNjYWxlKHRoaXMuc2VhcmNoX2RpciwgLTEpKTtcclxuICBjb25zdCBiX29yaWdpbjIgPSBjb2xsMi5zdXBwb3J0KHRoaXMuc2VhcmNoX2Rpcik7XHJcbiAgdGhpcy5iID0gZGlmZihiX29yaWdpbjIsIGJfb3JpZ2luMSk7XHJcblxyXG4gIHRoaXMub3JpZ2luc01hcC5zZXQodGhpcy5iLCBbYl9vcmlnaW4xLCBiX29yaWdpbjJdKTtcclxuXHJcbiAgaWYgKGRvdCh0aGlzLmIsIHRoaXMuc2VhcmNoX2RpcikgPCAwKSB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIHRoaXMuc2VhcmNoX2RpciA9IGNyb3NzKFxyXG4gICAgY3Jvc3MoZGlmZih0aGlzLmMsIHRoaXMuYiksIHNjYWxlKHRoaXMuYiwgLTEpKSxcclxuICAgIGRpZmYodGhpcy5jLCB0aGlzLmIpXHJcbiAgKTtcclxuXHJcbiAgaWYgKGlzTnVsbCh0aGlzLnNlYXJjaF9kaXIpKSB7XHJcbiAgICB0aGlzLnNlYXJjaF9kaXIgPSBjcm9zcyhkaWZmKHRoaXMuYywgdGhpcy5iKSwgWzEsIDAsIDBdKTtcclxuXHJcbiAgICBpZiAoaXNOdWxsKHRoaXMuc2VhcmNoX2RpcikpIHtcclxuICAgICAgdGhpcy5zZWFyY2hfZGlyID0gY3Jvc3MoZGlmZih0aGlzLmMsIHRoaXMuYiksIFswLCAwLCAtMV0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdGhpcy5zaW1wX2RpbSA9IDI7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBHSktfTUFYX0lURVJBVElPTlNfTlVNOyArK2kpIHtcclxuICAgIGNvbnN0IGFfb3JpZ2luMSA9IGNvbGwxLnN1cHBvcnQoc2NhbGUodGhpcy5zZWFyY2hfZGlyLCAtMSkpO1xyXG4gICAgY29uc3QgYV9vcmlnaW4yID0gY29sbDIuc3VwcG9ydCh0aGlzLnNlYXJjaF9kaXIpO1xyXG4gICAgdGhpcy5hID0gZGlmZihhX29yaWdpbjIsIGFfb3JpZ2luMSk7XHJcblxyXG4gICAgdGhpcy5vcmlnaW5zTWFwLnNldCh0aGlzLmEsIFthX29yaWdpbjEsIGFfb3JpZ2luMl0pO1xyXG4gICAgaWYgKGRvdCh0aGlzLmEsIHRoaXMuc2VhcmNoX2RpcikgPCAwKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICB0aGlzLnNpbXBfZGltKys7XHJcbiAgICBpZiAodGhpcy5zaW1wX2RpbSA9PT0gMykge1xyXG4gICAgICB1cGRhdGVfc2ltcGxleDMuYXBwbHkodGhpcyk7XHJcbiAgICB9IGVsc2UgaWYgKHVwZGF0ZV9zaW1wbGV4NC5hcHBseSh0aGlzKSkge1xyXG4gICAgICByZXR1cm4gRVBBKHRoaXMuYSwgdGhpcy5iLCB0aGlzLmMsIHRoaXMuZCwgdGhpcy5vcmlnaW5zTWFwLCBib2R5MSwgYm9keTIpO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gbnVsbDtcclxufVxyXG5cclxuY29uc3QgYmFyaWNlbnRyaWMgPSAoZmFjZSwgcG9pbnQpID0+IHtcclxuICBsZXQgYTExID0gZmFjZVswXVswXTtcclxuICBsZXQgYTEyID0gZmFjZVsxXVswXTtcclxuICBsZXQgYTEzID0gZmFjZVsyXVswXTtcclxuICBsZXQgYjEgPSBwb2ludFswXTtcclxuICBsZXQgYTIxID0gZmFjZVswXVsxXTtcclxuICBsZXQgYTIyID0gZmFjZVsxXVsxXTtcclxuICBsZXQgYTIzID0gZmFjZVsyXVsxXTtcclxuICBsZXQgYjIgPSBwb2ludFsxXTtcclxuICBsZXQgYTMxID0gZmFjZVswXVsyXTtcclxuICBsZXQgYTMyID0gZmFjZVsxXVsyXTtcclxuICBsZXQgYTMzID0gZmFjZVsyXVsyXTtcclxuICBsZXQgYjMgPSBwb2ludFsyXTtcclxuXHJcbiAgY29uc3QgZCA9XHJcbiAgICBhMTEgKiBhMjIgKiBhMzMgK1xyXG4gICAgYTIxICogYTMyICogYTEzICtcclxuICAgIGExMiAqIGEyMyAqIGEzMSAtXHJcbiAgICBhMTMgKiBhMjIgKiBhMzEgLVxyXG4gICAgYTIxICogYTEyICogYTMzIC1cclxuICAgIGEzMiAqIGEyMyAqIGExMTtcclxuXHJcbiAgY29uc3QgZDEgPVxyXG4gICAgYjEgKiBhMjIgKiBhMzMgK1xyXG4gICAgYjIgKiBhMzIgKiBhMTMgK1xyXG4gICAgYTEyICogYTIzICogYjMgLVxyXG4gICAgYTEzICogYTIyICogYjMgLVxyXG4gICAgYjIgKiBhMTIgKiBhMzMgLVxyXG4gICAgYTMyICogYTIzICogYjE7XHJcblxyXG4gIGNvbnN0IGQyID1cclxuICAgIGExMSAqIGIyICogYTMzICtcclxuICAgIGEyMSAqIGIzICogYTEzICtcclxuICAgIGIxICogYTIzICogYTMxIC1cclxuICAgIGExMyAqIGIyICogYTMxIC1cclxuICAgIGExMSAqIGIzICogYTIzIC1cclxuICAgIGEyMSAqIGIxICogYTMzO1xyXG5cclxuICBjb25zdCBkMyA9XHJcbiAgICBhMTEgKiBhMjIgKiBiMyArXHJcbiAgICBhMjEgKiBhMzIgKiBiMSArXHJcbiAgICBhMTIgKiBiMiAqIGEzMSAtXHJcbiAgICBiMSAqIGEyMiAqIGEzMSAtXHJcbiAgICBhMjEgKiBhMTIgKiBiMyAtXHJcbiAgICBiMiAqIGEzMiAqIGExMTtcclxuXHJcbiAgcmV0dXJuIFtkMSAvIGQsIGQyIC8gZCwgZDMgLyBkXTtcclxufTtcclxuY29uc3Qgb3JpZ2luVG9GYWNlUHJvaiA9IChmYWNlKSA9PiB7XHJcbiAgY29uc3Qgbm9ybWFsID0gZmFjZVszXTtcclxuICBjb25zdCBwb2ludCA9IGZhY2VbMF07XHJcbiAgY29uc3QgYyA9IC1ub3JtYWxbMF0gKiBwb2ludFswXSAtIG5vcm1hbFsxXSAqIHBvaW50WzFdIC0gbm9ybWFsWzJdICogcG9pbnRbMl07XHJcbiAgY29uc3QgdCA9XHJcbiAgICAtYyAvXHJcbiAgICAobm9ybWFsWzBdICogbm9ybWFsWzBdICsgbm9ybWFsWzFdICogbm9ybWFsWzFdICsgbm9ybWFsWzJdICogbm9ybWFsWzJdKTtcclxuICByZXR1cm4gW3QgKiBub3JtYWxbMF0sIHQgKiBub3JtYWxbMV0sIHQgKiBub3JtYWxbMl1dO1xyXG59O1xyXG5cclxuY29uc3QgTUFYX05VTV9GQUNFUyA9IDY0O1xyXG5jb25zdCBNQVhfTlVNX0xPT1NFX0VER0VTID0gMzI7XHJcbmNvbnN0IEVQQV9NQVhfTlVNX0lURVIgPSA2NDtcclxuY29uc3QgRVBBID0gKGEsIGIsIGMsIGQsIG9yaWdpbnNNYXAsIGJvZHkxLCBib2R5MikgPT4ge1xyXG4gIGNvbnN0IGNvbGwxID0gYm9keTEuY29sbGlkZXI7XHJcbiAgY29uc3QgY29sbDIgPSBib2R5Mi5jb2xsaWRlcjtcclxuICBjb25zdCBmYWNlcyA9IFtdO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XHJcbiAgICBmYWNlc1tpXSA9IFtdO1xyXG4gIH1cclxuXHJcbiAgZmFjZXNbMF1bMF0gPSBhO1xyXG4gIGZhY2VzWzBdWzFdID0gYjtcclxuICBmYWNlc1swXVsyXSA9IGM7XHJcbiAgZmFjZXNbMF1bM10gPSBub3JtYWxpemUoY3Jvc3MoZGlmZihiLCBhKSwgZGlmZihjLCBhKSkpO1xyXG4gIGZhY2VzWzFdWzBdID0gYTtcclxuICBmYWNlc1sxXVsxXSA9IGM7XHJcbiAgZmFjZXNbMV1bMl0gPSBkO1xyXG4gIGZhY2VzWzFdWzNdID0gbm9ybWFsaXplKGNyb3NzKGRpZmYoYywgYSksIGRpZmYoZCwgYSkpKTtcclxuICBmYWNlc1syXVswXSA9IGE7XHJcbiAgZmFjZXNbMl1bMV0gPSBkO1xyXG4gIGZhY2VzWzJdWzJdID0gYjtcclxuICBmYWNlc1syXVszXSA9IG5vcm1hbGl6ZShjcm9zcyhkaWZmKGQsIGEpLCBkaWZmKGIsIGEpKSk7XHJcbiAgZmFjZXNbM11bMF0gPSBiO1xyXG4gIGZhY2VzWzNdWzFdID0gZDtcclxuICBmYWNlc1szXVsyXSA9IGM7XHJcbiAgZmFjZXNbM11bM10gPSBub3JtYWxpemUoY3Jvc3MoZGlmZihkLCBiKSwgZGlmZihjLCBiKSkpO1xyXG5cclxuICBsZXQgbnVtX2ZhY2VzID0gNDtcclxuICBsZXQgY2xvc2VzdF9mYWNlID0gbnVsbDtcclxuICBsZXQgc2VhcmNoX2RpcjtcclxuXHJcbiAgbGV0IHA7XHJcbiAgZm9yIChsZXQgaXRlcmF0aW9uID0gMDsgaXRlcmF0aW9uIDwgRVBBX01BWF9OVU1fSVRFUjsgKytpdGVyYXRpb24pIHtcclxuICAgIGxldCBtaW5fZGlzdCA9IGRvdChmYWNlc1swXVswXSwgZmFjZXNbMF1bM10pO1xyXG5cclxuICAgIGNsb3Nlc3RfZmFjZSA9IDA7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bV9mYWNlczsgKytpKSB7XHJcbiAgICAgIGxldCBkaXN0ID0gZG90KGZhY2VzW2ldWzBdLCBmYWNlc1tpXVszXSk7XHJcbiAgICAgIGlmIChkaXN0IDwgbWluX2Rpc3QpIHtcclxuICAgICAgICBtaW5fZGlzdCA9IGRpc3Q7XHJcbiAgICAgICAgY2xvc2VzdF9mYWNlID0gaTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2VhcmNoX2RpciA9IGZhY2VzW2Nsb3Nlc3RfZmFjZV1bM107XHJcblxyXG4gICAgY29uc3QgcF9vcmlnaW4xID0gY29sbDEuc3VwcG9ydChzY2FsZShzZWFyY2hfZGlyLCAtMSkpO1xyXG4gICAgY29uc3QgcF9vcmlnaW4yID0gY29sbDIuc3VwcG9ydChzZWFyY2hfZGlyKTtcclxuICAgIHAgPSBkaWZmKHBfb3JpZ2luMiwgcF9vcmlnaW4xKTtcclxuICAgIG9yaWdpbnNNYXAuc2V0KHAsIFtwX29yaWdpbjEsIHBfb3JpZ2luMl0pO1xyXG5cclxuICAgIGlmIChkb3QocCwgc2VhcmNoX2RpcikgLSBtaW5fZGlzdCA8IEVQQV9CSUFTKSB7XHJcbiAgICAgIGNvbnN0IGZhY2UgPSBmYWNlc1tjbG9zZXN0X2ZhY2VdO1xyXG5cclxuICAgICAgY29uc3QgcG9pbnQgPSBvcmlnaW5Ub0ZhY2VQcm9qKGZhY2UpO1xyXG5cclxuICAgICAgY29uc3QgW0FhLCBCYV0gPSBvcmlnaW5zTWFwLmdldChmYWNlWzBdKTtcclxuICAgICAgLy9jb25zdCBBYSA9IGZhY2VbMF0ub2FcclxuICAgICAgLy9jb25zdCBCYSA9IGZhY2VbMF0ub2JcclxuICAgICAgY29uc3QgW0FiLCBCYl0gPSBvcmlnaW5zTWFwLmdldChmYWNlWzFdKTtcclxuICAgICAgLy9jb25zdCBBYiA9IGZhY2VbMV0ub2FcclxuICAgICAgLy9jb25zdCBCYiA9IGZhY2VbMV0ub2JcclxuICAgICAgY29uc3QgW0FjLCBCY10gPSBvcmlnaW5zTWFwLmdldChmYWNlWzJdKTtcclxuICAgICAgLy9jb25zdCBBYyA9IGZhY2VbMl0ub2FcclxuICAgICAgLy9jb25zdCBCYyA9IGZhY2VbMl0ub2JcclxuXHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGJhcmljZW50cmljKGZhY2UsIHBvaW50KTtcclxuXHJcbiAgICAgIGlmIChpc05hTihyZXN1bHRbMF0gKyByZXN1bHRbMV0gKyByZXN1bHRbMl0pKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxldCBQQSA9IHN1bShcclxuICAgICAgICBzdW0oc2NhbGUoQWEsIHJlc3VsdFswXSksIHNjYWxlKEFiLCByZXN1bHRbMV0pKSxcclxuICAgICAgICBzY2FsZShBYywgcmVzdWx0WzJdKVxyXG4gICAgICApO1xyXG4gICAgICAvL0FhLm11bHRpcGx5KHJlc3VsdFswXSkuYWRkKEFiLm11bHRpcGx5KHJlc3VsdFsxXSkpLmFkZChBYy5tdWx0aXBseShyZXN1bHRbMl0pKVxyXG4gICAgICBsZXQgUEIgPSBzdW0oXHJcbiAgICAgICAgc3VtKHNjYWxlKEJhLCByZXN1bHRbMF0pLCBzY2FsZShCYiwgcmVzdWx0WzFdKSksXHJcbiAgICAgICAgc2NhbGUoQmMsIHJlc3VsdFsyXSlcclxuICAgICAgKTtcclxuICAgICAgLy9CYS5tdWx0aXBseShyZXN1bHRbMF0pLmFkZChCYi5tdWx0aXBseShyZXN1bHRbMV0pKS5hZGQoQmMubXVsdGlwbHkocmVzdWx0WzJdKSlcclxuXHJcbiAgICAgIC8vY29uc3QgcmEgPSBQQS5zdWJzdHJhY3QoY29sbDEucG9zKVxyXG5cclxuICAgICAgY29uc3QgbiA9IG5vcm1hbGl6ZShzY2FsZShmYWNlWzNdLCAtZG90KHAsIHNlYXJjaF9kaXIpKSk7XHJcbiAgICAgIGlmIChub3JtKG4pIDwgMC4wMSkgcmV0dXJuIG51bGw7XHJcbiAgICAgIGNvbnN0IHBlbkRlcHRoID0gLWRvdChkaWZmKFBCLCBQQSksIG4pO1xyXG5cclxuICAgICAgcmV0dXJuIHsgUEEsIFBCLCBuLCBwZW5EZXB0aCB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGxvb3NlX2VkZ2VzID0gW107XHJcbiAgICBsZXQgbnVtX2xvb3NlX2VkZ2VzID0gMDtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtX2ZhY2VzOyArK2kpIHtcclxuICAgICAgaWYgKGRvdChmYWNlc1tpXVszXSwgZGlmZihwLCBmYWNlc1tpXVswXSkpID4gMCkge1xyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMzsgaisrKSB7XHJcbiAgICAgICAgICBsZXQgY3VycmVudF9lZGdlID0gW2ZhY2VzW2ldW2pdLCBmYWNlc1tpXVsoaiArIDEpICUgM11dO1xyXG4gICAgICAgICAgbGV0IGZvdW5kX2VkZ2UgPSBmYWxzZTtcclxuICAgICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgbnVtX2xvb3NlX2VkZ2VzOyBrKyspIHtcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgIGxvb3NlX2VkZ2VzW2tdWzFdID09PSBjdXJyZW50X2VkZ2VbMF0gJiZcclxuICAgICAgICAgICAgICBsb29zZV9lZGdlc1trXVswXSA9PT0gY3VycmVudF9lZGdlWzFdXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgIGxvb3NlX2VkZ2VzW2tdWzBdID0gbG9vc2VfZWRnZXNbbnVtX2xvb3NlX2VkZ2VzIC0gMV1bMF07XHJcbiAgICAgICAgICAgICAgbG9vc2VfZWRnZXNba11bMV0gPSBsb29zZV9lZGdlc1tudW1fbG9vc2VfZWRnZXMgLSAxXVsxXTtcclxuICAgICAgICAgICAgICBudW1fbG9vc2VfZWRnZXMtLTtcclxuICAgICAgICAgICAgICBmb3VuZF9lZGdlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICBrID0gbnVtX2xvb3NlX2VkZ2VzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoIWZvdW5kX2VkZ2UpIHtcclxuICAgICAgICAgICAgaWYgKG51bV9sb29zZV9lZGdlcyA+PSBNQVhfTlVNX0xPT1NFX0VER0VTKSBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGxvb3NlX2VkZ2VzW251bV9sb29zZV9lZGdlc10gPSBbXTtcclxuICAgICAgICAgICAgbG9vc2VfZWRnZXNbbnVtX2xvb3NlX2VkZ2VzXVswXSA9IGN1cnJlbnRfZWRnZVswXTtcclxuICAgICAgICAgICAgbG9vc2VfZWRnZXNbbnVtX2xvb3NlX2VkZ2VzXVsxXSA9IGN1cnJlbnRfZWRnZVsxXTtcclxuICAgICAgICAgICAgbnVtX2xvb3NlX2VkZ2VzKys7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZhY2VzW2ldWzBdID0gZmFjZXNbbnVtX2ZhY2VzIC0gMV1bMF07XHJcbiAgICAgICAgZmFjZXNbaV1bMV0gPSBmYWNlc1tudW1fZmFjZXMgLSAxXVsxXTtcclxuICAgICAgICBmYWNlc1tpXVsyXSA9IGZhY2VzW251bV9mYWNlcyAtIDFdWzJdO1xyXG4gICAgICAgIGZhY2VzW2ldWzNdID0gZmFjZXNbbnVtX2ZhY2VzIC0gMV1bM107XHJcbiAgICAgICAgbnVtX2ZhY2VzLS07XHJcbiAgICAgICAgaS0tO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bV9sb29zZV9lZGdlczsgaSsrKSB7XHJcbiAgICAgIGlmIChudW1fZmFjZXMgPj0gTUFYX05VTV9GQUNFUykgYnJlYWs7XHJcbiAgICAgIGZhY2VzW251bV9mYWNlc10gPSBbXTtcclxuICAgICAgZmFjZXNbbnVtX2ZhY2VzXVswXSA9IGxvb3NlX2VkZ2VzW2ldWzBdO1xyXG4gICAgICBmYWNlc1tudW1fZmFjZXNdWzFdID0gbG9vc2VfZWRnZXNbaV1bMV07XHJcbiAgICAgIGZhY2VzW251bV9mYWNlc11bMl0gPSBwO1xyXG5cclxuICAgICAgZmFjZXNbbnVtX2ZhY2VzXVszXSA9IG5vcm1hbGl6ZShcclxuICAgICAgICBjcm9zcyhcclxuICAgICAgICAgIGRpZmYobG9vc2VfZWRnZXNbaV1bMF0sIGxvb3NlX2VkZ2VzW2ldWzFdKSxcclxuICAgICAgICAgIGRpZmYobG9vc2VfZWRnZXNbaV1bMF0sIHApXHJcbiAgICAgICAgKVxyXG4gICAgICApO1xyXG5cclxuICAgICAgaWYgKGRvdChmYWNlc1tudW1fZmFjZXNdWzBdLCBmYWNlc1tudW1fZmFjZXNdWzNdKSArIDAuMDEgPCAwKSB7XHJcbiAgICAgICAgY29uc3QgdGVtcCA9IGZhY2VzW251bV9mYWNlc11bMF07XHJcbiAgICAgICAgZmFjZXNbbnVtX2ZhY2VzXVswXSA9IGZhY2VzW251bV9mYWNlc11bMV07XHJcbiAgICAgICAgZmFjZXNbbnVtX2ZhY2VzXVsxXSA9IHRlbXA7XHJcbiAgICAgICAgZmFjZXNbbnVtX2ZhY2VzXVszXSA9IHNjYWxlKGZhY2VzW251bV9mYWNlc11bM10sIC0xKTtcclxuICAgICAgfVxyXG4gICAgICBudW1fZmFjZXMrKztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBudWxsO1xyXG59O1xyXG5cclxuY29uc3QgZ2prU2NvcGUgPSB7fTtcclxuY29uc3QgX2dqayA9IGdqay5iaW5kKGdqa1Njb3BlKTtcclxuXHJcbmNvbnN0IGdldENvbnRhY3RNYW5pZm9sZCA9IChib2R5MSwgYm9keTIpID0+IHtcclxuICBjb25zdCBjb2xsMSA9IGJvZHkxLmNvbGxpZGVyO1xyXG4gIGNvbnN0IGNvbGwyID0gYm9keTIuY29sbGlkZXI7XHJcbiAgY29uc3QgY29udGFjdERhdGEgPSBfZ2prKGJvZHkxLCBib2R5Mik7XHJcbiAgaWYgKCFjb250YWN0RGF0YSkgcmV0dXJuIG51bGw7XHJcblxyXG4gIGNvbnN0IHsgUEEsIFBCLCBuIH0gPSBjb250YWN0RGF0YTtcclxuXHJcbiAgaWYgKGNvbGwxLnR5cGUgPT09IFwic3BoZXJlXCIgfHwgY29sbDIudHlwZSA9PT0gXCJzcGhlcmVcIikge1xyXG4gICAgY29uc3QgcmIgPSBkaWZmKFBCLCBjb2xsMi5wb3MpO1xyXG4gICAgY29uc3QgcmEgPSBkaWZmKFBBLCBjb2xsMS5wb3MpO1xyXG4gICAgY29uc3QgcGVuRGVwdGggPSAtZG90KGRpZmYoUEIsIFBBKSwgbik7XHJcbiAgICBjb25zdCByYUxvY2FsID0gbTMudHJhbnNmb3JtUG9pbnQoY29sbDEuUm1hdHJpeEludmVyc2UsIHJhKTtcclxuICAgIGNvbnN0IHJiTG9jYWwgPSBtMy50cmFuc2Zvcm1Qb2ludChjb2xsMi5SbWF0cml4SW52ZXJzZSwgcmIpO1xyXG4gICAgY29uc3QgaSA9IFtuWzFdICsgblsyXSxuWzJdIC0gblswXSwgLW5bMF0gLSBuWzFdXVxyXG4gICBcclxuICAgIFxyXG4gICAgY29uc3QgaiA9IGNyb3NzKHNjYWxlKG4sIC0xKSwgaSlcclxuICAgIHJldHVybiBbXHJcbiAgICAgIHtcclxuICAgICAgICByYUxvY2FsLFxyXG4gICAgICAgIHJiTG9jYWwsXHJcbiAgICAgICAgcmEsXHJcbiAgICAgICAgcmIsXHJcbiAgICAgICAgUEEsXHJcbiAgICAgICAgUEIsXHJcbiAgICAgICAgbixcclxuICAgICAgICBwZW5EZXB0aCxcclxuICAgICAgICBib2R5MSxcclxuICAgICAgICBib2R5MixcclxuICAgICAgICBpLFxyXG4gICAgICAgIGosXHJcbiAgICAgIH0sXHJcbiAgICBdO1xyXG4gIH1cclxuICBcclxuICBjb25zdCBuUmV2ZXJzZSA9IHNjYWxlKG4sIC0xKTtcclxuXHJcbiAgY29uc3QgW2NvbnRhY3RGYWNlMSwgbm9ybWFsMV0gPSBjb2xsMS5nZXRDbG9zZXN0RmFjZUJ5Tm9ybWFsKG5SZXZlcnNlKTtcclxuICBjb25zdCBbY29udGFjdEZhY2UyLCBub3JtYWwyXSA9IGNvbGwyLmdldENsb3Nlc3RGYWNlQnlOb3JtYWwobik7XHJcbiAgY29uc3QgcGxhbmUgPSBbc2NhbGUoc3VtKFBBLCBQQiksIDAuNSksIG5dO1xyXG4gIGNvbnN0IHByb2plY3Rpb25zMSA9IGNvbnRhY3RGYWNlMS5tYXAoKHApID0+XHJcbiAgICBwb2ludE9uUGxhbmVQcm9qZWN0aW9uKHBsYW5lLCBwKVxyXG4gICk7XHJcbiAgY29uc3QgcHJvamVjdGlvbnMyID0gY29udGFjdEZhY2UyLm1hcCgocCkgPT5cclxuICAgIHBvaW50T25QbGFuZVByb2plY3Rpb24ocGxhbmUsIHApXHJcbiAgKTtcclxuXHJcbiAgY29uc3Qgb3JpZ2luID0gcGxhbmVbMF07XHJcbiAgY29uc3QgaSA9IG5vcm1hbGl6ZSggW25bMV0gKyBuWzJdLG5bMl0gLSBuWzBdLCAtblswXSAtIG5bMV1dKVxyXG4gICBcclxuICAgIFxyXG4gIGNvbnN0IGogPSBjcm9zcyhzY2FsZShuLCAtMSksIGkpXHJcblxyXG4gIGxldCBfMmQxID0gcHJvamVjdGlvbnMxLm1hcCgocCkgPT4gZ2V0MkRjb29yZHNPblBsYW5lKGksIGosIGRpZmYocCwgb3JpZ2luKSkpO1xyXG4gIGxldCBfMmQyID0gcHJvamVjdGlvbnMyLm1hcCgocCkgPT4gZ2V0MkRjb29yZHNPblBsYW5lKGksIGosIGRpZmYocCwgb3JpZ2luKSkpO1xyXG5cclxuICBjb25zdCBkaXIxID0gaXNJbkNsb2Nrd2lzZShfMmQxKTtcclxuICBjb25zdCBkaXIyID0gaXNJbkNsb2Nrd2lzZShfMmQyKTtcclxuICBpZiAoZGlyMSA8IDApIF8yZDEgPSBfMmQxLm1hcCgoXywgaSkgPT4gXzJkMS5hdCgtaSkpO1xyXG4gIGlmIChkaXIyIDwgMCkgXzJkMiA9IF8yZDIubWFwKChfLCBpKSA9PiBfMmQyLmF0KC1pKSk7XHJcbiAgXHJcbiAgY29uc3QgY2xpcHBlZCA9IGNsaXBGYWNlVnNGYWNlKF8yZDEsIF8yZDIpO1xyXG5cclxuICBjb25zdCBfM2QgPSBjbGlwcGVkLm1hcCgocCkgPT5cclxuICAgIHN1bShvcmlnaW4sIHN1bShzY2FsZShpLCBwWzBdKSwgc2NhbGUoaiwgcFsxXSkpKVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGZlYXR1cmVzID0gW107XHJcbiAgXzNkLmZvckVhY2goKHBvaW50KSA9PiB7XHJcbiAgICBjb25zdCBQQSA9IHJheVZzUGxhbmVJbnRlcnNlYyhbY29udGFjdEZhY2UxWzBdLCBub3JtYWwxXSwgcG9pbnQsIG4pO1xyXG4gICAgaWYgKCFpc1BvaW50QmVoaW5kUGxhbmUocGxhbmUsIFBBLCAxKSkgcmV0dXJuO1xyXG4gICAgY29uc3QgUEIgPSByYXlWc1BsYW5lSW50ZXJzZWMoW2NvbnRhY3RGYWNlMlswXSwgbm9ybWFsMl0sIHBvaW50LCBuKTtcclxuICAgIGlmICghaXNQb2ludEJlaGluZFBsYW5lKHBsYW5lLCBQQiwgLTEpKSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgcmIgPSBkaWZmKFBCLCBjb2xsMi5wb3MpO1xyXG4gICAgY29uc3QgcmEgPSBkaWZmKFBBLCBjb2xsMS5wb3MpO1xyXG4gICAgY29uc3QgcGVuRGVwdGggPSAtZG90KGRpZmYoUEIsIFBBKSwgbik7XHJcbiAgICBjb25zdCByYUxvY2FsID0gbTMudHJhbnNmb3JtUG9pbnQoY29sbDEuUm1hdHJpeEludmVyc2UsIHJhKTtcclxuICAgIGNvbnN0IHJiTG9jYWwgPSBtMy50cmFuc2Zvcm1Qb2ludChjb2xsMi5SbWF0cml4SW52ZXJzZSwgcmIpO1xyXG5cclxuICAgIGZlYXR1cmVzLnB1c2goe1xyXG4gICAgICByYUxvY2FsLFxyXG4gICAgICByYkxvY2FsLFxyXG4gICAgICByYSxcclxuICAgICAgcmIsXHJcbiAgICAgIFBBLFxyXG4gICAgICBQQixcclxuICAgICAgbixcclxuICAgICAgcGVuRGVwdGgsXHJcbiAgICAgIGJvZHkxLFxyXG4gICAgICBib2R5MixcclxuICAgICAgaSxcclxuICAgICAgaixcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICBpZiAoZmVhdHVyZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICBjb25zdCByYiA9IGRpZmYoUEIsIGNvbGwyLnBvcyk7XHJcbiAgICBjb25zdCByYSA9IGRpZmYoUEEsIGNvbGwxLnBvcyk7XHJcbiAgICBjb25zdCBwZW5EZXB0aCA9IC1kb3QoZGlmZihQQiwgUEEpLCBuKTtcclxuICAgIGNvbnN0IHJhTG9jYWwgPSBtMy50cmFuc2Zvcm1Qb2ludChjb2xsMS5SbWF0cml4SW52ZXJzZSwgcmEpO1xyXG4gICAgY29uc3QgcmJMb2NhbCA9IG0zLnRyYW5zZm9ybVBvaW50KGNvbGwyLlJtYXRyaXhJbnZlcnNlLCByYik7XHJcbiAgICBmZWF0dXJlcy5wdXNoKHtcclxuICAgICAgcmFMb2NhbCxcclxuICAgICAgcmJMb2NhbCxcclxuICAgICAgcmEsXHJcbiAgICAgIHJiLFxyXG4gICAgICBQQSxcclxuICAgICAgUEIsXHJcbiAgICAgIG4sXHJcbiAgICAgIHBlbkRlcHRoLFxyXG4gICAgICBib2R5MSxcclxuICAgICAgYm9keTIsXHJcbiAgICAgIGksXHJcbiAgICAgIGosXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJldHVybiBmZWF0dXJlcztcclxufTtcclxuXHJcbmV4cG9ydCB7XHJcbiAgZ2V0Q29udGFjdE1hbmlmb2xkIGFzIGdqayxcclxuICBwb2ludE9uUGxhbmVQcm9qZWN0aW9uLFxyXG4gIGNsaXBQb2ludHNCZWhpbmRQbGFuZSxcclxuICBnZXQyRGNvb3Jkc09uUGxhbmUsXHJcbiAgcmF5VnNQbGFuZUludGVyc2VjLFxyXG59O1xyXG4iLCJpbXBvcnQgeyBtMywgdmVjMyB9IGZyb20gXCJtYXRoXCI7XHJcblxyXG5jb25zdCB7IGRpc3RhbmNlRnJvbUxpbmUsIG5vcm0sIGZpbmRGdXJ0aGVzdFBvaW50LCBzdW0sIGRpZmYsIG5vcm1TcSwgZG90IH0gPSB2ZWMzO1xyXG5cclxuY29uc3QgcHJlYyA9IDAuMDAwNTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hbmlmb2xkIHtcclxuICBjb25zdHJ1Y3RvciguLi5jb250YWN0cykge1xyXG4gICAgdGhpcy5jb250YWN0cyA9IGNvbnRhY3RzO1xyXG4gICAgdGhpcy5rZWVwID0gdHJ1ZTtcclxuICB9XHJcbiAgdXBkYXRlKCkge1xyXG4gICAgY29uc3QgY29udGFjdHMgPSB0aGlzLmNvbnRhY3RzO1xyXG4gICAgaWYgKGNvbnRhY3RzLmxlbmd0aCA8IDIpIHtcclxuICAgICAgdGhpcy5rZWVwID0gZmFsc2U7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGZvciAobGV0IGkgPSAwLCBuID0gY29udGFjdHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGNvbnRhY3QgPSBjb250YWN0c1tpXTtcclxuICAgICAgY29uc3QgcG9zMSA9IGNvbnRhY3QuYm9keTEuY29sbGlkZXIucG9zO1xyXG4gICAgICBjb25zdCBwb3MyID0gY29udGFjdC5ib2R5Mi5jb2xsaWRlci5wb3M7XHJcbiAgICAgIGNvbnN0IF9yYSA9IG0zLnRyYW5zZm9ybVBvaW50KFxyXG4gICAgICAgIGNvbnRhY3QuYm9keTEuY29sbGlkZXIuUm1hdHJpeCxcclxuICAgICAgICBjb250YWN0LnJhTG9jYWxcclxuICAgICAgKTtcclxuICAgICAgY29uc3QgX3JiID0gbTMudHJhbnNmb3JtUG9pbnQoXHJcbiAgICAgICAgY29udGFjdC5ib2R5Mi5jb2xsaWRlci5SbWF0cml4LFxyXG4gICAgICAgIGNvbnRhY3QucmJMb2NhbFxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCBfUEEgPSBzdW0ocG9zMSwgX3JhKTtcclxuICAgICAgY29uc3QgX1BCID0gc3VtKHBvczIsIF9yYik7XHJcbiAgICAgIGNvbnN0IHJhQmlhcyA9IGRpZmYoY29udGFjdC5QQSwgX1BBKTtcclxuICAgICAgY29uc3QgcmJCaWFzID0gZGlmZihjb250YWN0LlBCLCBfUEIpO1xyXG4gICAgICAvL2NvbnRhY3QudXBkYXRlQ29udGFjdERhdGEoKVxyXG4gICAgICBpZiAobm9ybShyYUJpYXMpID4gcHJlYyB8fCBub3JtKHJiQmlhcykgPiBwcmVjKSB7XHJcbiAgICAgICAgdGhpcy5rZWVwID0gZmFsc2U7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb250YWN0LlBBID0gX1BBO1xyXG4gICAgICBjb250YWN0LlBCID0gX1BCO1xyXG4gICAgICBjb250YWN0LnJhID0gX3JhO1xyXG4gICAgICBjb250YWN0LnJiID0gX3JiO1xyXG4gICAgICBjb250YWN0LnBlbkRlcHRoID0gZG90KGNvbnRhY3QubiwgZGlmZihfUEIsIF9QQSkpO1xyXG4gICAgICBcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IG00LCB2ZWMzLCBtMyB9IGZyb20gXCJtYXRoXCI7XHJcblxyXG5pbXBvcnQge1xyXG4gIFByb2dyYW1JbmZvLFxyXG4gIERyYXdlcixcclxuICBjcmVhdGVCb3gsXHJcbiAgUHJpbWl0aXZlUmVuZGVyZXIsXHJcbiAgR0xjb250ZXh0V3JhcHBlcixcclxuICBjcmVhdGVDaXJjbGUsXHJcbiAgZGVmYXVsdFNoYWRlcnMsXHJcbiAgcG9pbnRMaWdodFNoYWRlcnMsXHJcbiAgY3JlYXRlU3BoZXJlLFxyXG4gIGNyZWF0ZVRydW5jYXRlZENvbmUsXHJcbn0gZnJvbSBcImdyYXBoaWNzXCI7XHJcblxyXG5pbXBvcnQgTW91c2VJbnB1dCBmcm9tIFwiLi4vc3JjL21pc2MvbW91c2VJbnB1dFwiO1xyXG5pbXBvcnQgS2V5SW5wdXQgZnJvbSBcIi4uL3NyYy9taXNjL2tleUlucHV0XCI7XHJcbmNvbnN0IG1vdXNlSW5wdXQgPSBuZXcgTW91c2VJbnB1dCgpO1xyXG5cclxubW91c2VJbnB1dC5saXN0ZW4oKTtcclxuY29uc3Qga2V5SW5wdXQgPSBuZXcgS2V5SW5wdXQoKTtcclxua2V5SW5wdXQubGlzdGVuKCk7XHJcbmNvbnN0IGNvbnRleHQgPSBuZXcgR0xjb250ZXh0V3JhcHBlcihcImNhbnZhc1wiKTtcclxuY29uc3QgZ2wgPSBjb250ZXh0LmdldENvbnRleHQoKTtcclxuY29udGV4dC5yZXNpemVDYW52YXNUb0Rpc3BsYXlTaXplKCk7XHJcbmNvbnN0IGRyYXdlciA9IG5ldyBEcmF3ZXIoKTtcclxuZHJhd2VyLnNldENvbnRleHQoY29udGV4dCkudXBkYXRlM0RQcm9qZWN0aW9uTWF0cml4KCk7XHJcblxyXG5jb25zdCBkZWZhdWx0UHJvZ3JhbUluZm8gPSBuZXcgUHJvZ3JhbUluZm8oXHJcbiAgZGVmYXVsdFNoYWRlcnMudmVydCxcclxuICBkZWZhdWx0U2hhZGVycy5mcmFnXHJcbik7XHJcbmNvbnN0IHBvaW50TGlnaHRQcm9ncmFtSW5mbyA9IG5ldyBQcm9ncmFtSW5mbyhcclxuICBwb2ludExpZ2h0U2hhZGVycy52ZXJ0LFxyXG4gIHBvaW50TGlnaHRTaGFkZXJzLmZyYWdcclxuKTtcclxuZGVmYXVsdFByb2dyYW1JbmZvLnNldENvbnRleHQoY29udGV4dCkuY29tcGlsZVNoYWRlcnMoKS5jcmVhdGVVbmlmb3JtU2V0dGVycygpO1xyXG5wb2ludExpZ2h0UHJvZ3JhbUluZm9cclxuICAuc2V0Q29udGV4dChjb250ZXh0KVxyXG4gIC5jb21waWxlU2hhZGVycygpXHJcbiAgLmNyZWF0ZVVuaWZvcm1TZXR0ZXJzKCk7XHJcbmltcG9ydCBwcm9nIGZyb20gXCIuLi9zaGFkZXJcIjtcclxucHJvZy5zZXRDb250ZXh0KGNvbnRleHQpLmNvbXBpbGVTaGFkZXJzKCkuY3JlYXRlVW5pZm9ybVNldHRlcnMoKTtcclxuY29uc3QgYm94ID0gbmV3IFByaW1pdGl2ZVJlbmRlcmVyKGNyZWF0ZUJveCgxLCAxLCAxKSk7XHJcbmNvbnN0IHBhbmVsID0gbmV3IFByaW1pdGl2ZVJlbmRlcmVyKGNyZWF0ZUJveCgxLDEsMSkpXHJcbmNvbnN0IHNwaGVyZSA9IG5ldyBQcmltaXRpdmVSZW5kZXJlcihjcmVhdGVTcGhlcmUoMSwgMTUsIDE1KSk7XHJcbmNvbnN0IGNpcmNsZSA9IG5ldyBQcmltaXRpdmVSZW5kZXJlcihjcmVhdGVDaXJjbGUoOCwgNCkpO1xyXG5jb25zdCBjeWxpbmRlciA9IG5ldyBQcmltaXRpdmVSZW5kZXJlcihjcmVhdGVUcnVuY2F0ZWRDb25lKDEsIDEsIDEsIDgsIDEpKTtcclxuY29uc3QgcG9pbnRzID0gbmV3IFByaW1pdGl2ZVJlbmRlcmVyKHtcclxuICBtb2RlOiBnbC5QT0lOVFMsXHJcbiAgbnVtRWxlbWVudHM6IDIsXHJcbiAgb2Zmc2V0OiAwLFxyXG59KTtcclxuY29uc3QgbGluZSA9IG5ldyBQcmltaXRpdmVSZW5kZXJlcih7XHJcbiAgbW9kZTogZ2wuTElORVMsXHJcbiAgbnVtRWxlbWVudHM6IDIsXHJcbiAgb2Zmc2V0OiAwLFxyXG59KTtcclxuXHJcbmJveFxyXG4gIC5zZXRDb250ZXh0KGNvbnRleHQpXHJcbiAgLmNyZWF0ZVZBTygpXHJcbiAgLnNldERyYXdlcihkcmF3ZXIpXHJcbiAgLnNldFByb2dyYW1JbmZvKGRlZmF1bHRQcm9ncmFtSW5mbylcclxuICAuY3JlYXRlR2VvbWV0cnlCdWZmZXJzKClcclxuICAuc2V0QXR0cmlidXRlcygpXHJcbiAgLnNldE1vZGUoMik7XHJcbnBhbmVsXHJcbiAgLnNldENvbnRleHQoY29udGV4dClcclxuICAuY3JlYXRlVkFPKClcclxuICAuc2V0RHJhd2VyKGRyYXdlcilcclxuICAuc2V0UHJvZ3JhbUluZm8ocG9pbnRMaWdodFByb2dyYW1JbmZvKVxyXG4gIC5jcmVhdGVHZW9tZXRyeUJ1ZmZlcnMoKVxyXG4gIC5zZXRBdHRyaWJ1dGVzKClcclxuICAuc2V0TW9kZSg0KTtcclxuY3lsaW5kZXJcclxuICAuc2V0Q29udGV4dChjb250ZXh0KVxyXG4gIC5jcmVhdGVWQU8oKVxyXG4gIC5zZXREcmF3ZXIoZHJhd2VyKVxyXG4gIC5zZXRQcm9ncmFtSW5mbyhkZWZhdWx0UHJvZ3JhbUluZm8pXHJcbiAgLmNyZWF0ZUdlb21ldHJ5QnVmZmVycygpXHJcbiAgLnNldEF0dHJpYnV0ZXMoKVxyXG4gIC5zZXRNb2RlKDIpO1xyXG5zcGhlcmVcclxuICAuc2V0Q29udGV4dChjb250ZXh0KVxyXG4gIC5jcmVhdGVWQU8oKVxyXG4gIC5zZXREcmF3ZXIoZHJhd2VyKVxyXG4gIC5zZXRQcm9ncmFtSW5mbyhkZWZhdWx0UHJvZ3JhbUluZm8pXHJcbiAgLmNyZWF0ZUdlb21ldHJ5QnVmZmVycygpXHJcbiAgLnNldEF0dHJpYnV0ZXMoKVxyXG4gIC5zZXRNb2RlKDIpO1xyXG5jaXJjbGVcclxuICAuc2V0Q29udGV4dChjb250ZXh0KVxyXG4gIC5jcmVhdGVWQU8oKVxyXG4gIC5zZXREcmF3ZXIoZHJhd2VyKVxyXG4gIC5zZXRQcm9ncmFtSW5mbyhkZWZhdWx0UHJvZ3JhbUluZm8pXHJcbiAgLmNyZWF0ZUdlb21ldHJ5QnVmZmVycygpXHJcbiAgLnNldEF0dHJpYnV0ZXMoKVxyXG4gIC5zZXRNb2RlKDMpO1xyXG5cclxubGluZVxyXG4gIC5zZXRDb250ZXh0KGNvbnRleHQpXHJcbiAgLmNyZWF0ZVZBTygpXHJcbiAgLnNldERyYXdlcihkcmF3ZXIpXHJcbiAgLnNldFByb2dyYW1JbmZvKGRlZmF1bHRQcm9ncmFtSW5mbylcclxuICAuY3JlYXRlQnVmZmVyQXR0cmliRGF0YShcImFfcG9zaXRpb25cIiwgXCJ2ZWMzXCIsIHsgbG9jYXRpb246IDAgfSlcclxuICAuc2V0T3duQXR0cmlidXRlKFwiYV9wb3NpdGlvblwiKVxyXG4gIC5idWZmZXJEYXRhKFwiYV9wb3NpdGlvblwiLCBuZXcgRmxvYXQzMkFycmF5KFswLCAwLCAwLCAwLCAxLCAwXSkpO1xyXG5cclxucG9pbnRzXHJcbiAgLnNldENvbnRleHQoY29udGV4dClcclxuICAuY3JlYXRlVkFPKClcclxuICAuc2V0RHJhd2VyKGRyYXdlcilcclxuICAuc2V0UHJvZ3JhbUluZm8oZGVmYXVsdFByb2dyYW1JbmZvKVxyXG4gIC5jcmVhdGVCdWZmZXJBdHRyaWJEYXRhKFwiYV9wb3NpdGlvblwiLCBcInZlYzNcIiwgeyBsb2NhdGlvbjogMCB9KVxyXG4gIC5zZXRPd25BdHRyaWJ1dGUoXCJhX3Bvc2l0aW9uXCIpXHJcbiAgLmJ1ZmZlckRhdGEoXCJhX3Bvc2l0aW9uXCIsIG5ldyBGbG9hdDMyQXJyYXkoWzAsIDAsIDBdKSk7XHJcblxyXG5jb25zdCB1bmlmb3JtcyA9IHtcclxuICB1X2xpZ2h0V29ybGRQb3NpdGlvbjogWzMwLCA1MCwgMzBdLFxyXG4gIHVfYW1iaWVudExpZ2h0OiBbMSwgMSwgMC4zLCAwLjExXSxcclxuICB1X3JldmVyc2VMaWdodERpcmVjdGlvbjogWzEsIDAsIDBdLFxyXG4gIHVfc2hpbmluZXNzOiAzMDAsXHJcbn07XHJcblxyXG5pbXBvcnQgU2ltdWxhdGlvbiBmcm9tIFwiLi4vc3JjL3BoeXNpY3MvU2ltdWxhdGlvblwiO1xyXG5pbXBvcnQgeyBQbGF5ZXIsIFJpZ2lkQm9keSB9IGZyb20gXCIuLi9zcmMvcGh5c2ljcy9SaWdpZEJvZHlcIjtcclxuaW1wb3J0IHsgQm94LCBDeWxpbmRlciwgU3BoZXJlIH0gZnJvbSBcIi4uL3NyYy9waHlzaWNzL2NvbGxpZGVyXCI7XHJcbmltcG9ydCB7IENvbnRyb2xsYWJsZSwgTm9jbGlwIH0gZnJvbSBcIi4uL3NyYy9taXNjL2NvbnRyb2xsYWJsZVwiO1xyXG5pbXBvcnQgUmFnZG9sbCBmcm9tIFwiLi9SYWdkb2xsXCI7XHJcbmltcG9ydCB7IEpvaW50LCBKb2ludFBvc2l0aW9uQ29uc3RyYWludCB9IGZyb20gXCIuLi9zcmMvcGh5c2ljcy9jb25zdHJhaW50c1wiO1xyXG5cclxuY29uc3QgZyA9IDkuODtcclxuY29uc3Qgc2ltID0gbmV3IFNpbXVsYXRpb24oKTtcclxuXHJcbmNvbnN0IGZsb29yID0geyBwaHlzaWNzOiBuZXcgUmlnaWRCb2R5KG5ldyBCb3goMTAwMCwgNiwgMTAwMCkpLCBzcHJpdGU6IGJveH07XHJcblxyXG5jb25zdCBvYmplY3RzID0gW2Zsb29yXTtcclxuZmxvb3IucGh5c2ljcy50cmFuc2xhdGUoWzAsLTE4MCwwXSlcclxuZmxvb3IucGh5c2ljcy5zZXRNYXNzKDEwMDAwMDAwMDAwMDApO1xyXG5cclxuLy9mbG9vci5waHlzaWNzLnRyYW5zbGF0ZShbMCwgMCwgMF0pO1xyXG5mbG9vci5waHlzaWNzLmZyaWN0aW9uID0gMTBcclxuZmxvb3IucGh5c2ljcy5zdGF0aWMgPSB0cnVlO1xyXG5mbG9vci5waHlzaWNzLkRPRiA9IFsxLCAxLCAxLCAwLCAwLCAwXTtcclxuc2ltLmFkZE9iamVjdChmbG9vci5waHlzaWNzKTtcclxuXHJcblxyXG5cclxuZm9yKGxldCBpID0gMDsgaSA8IDUwOyBpKyspe1xyXG4gIGNvbnN0IHBsYW5lID0geyBwaHlzaWNzOiBuZXcgUmlnaWRCb2R5KG5ldyBCb3goMiwgMiwgMTAwKSksIHNwcml0ZTogcGFuZWwgfTtcclxuICBwbGFuZS5waHlzaWNzLnRyYW5zbGF0ZShbaSoyLCAxMCAtIGkqMiAgLDBdKTtcclxuICBwbGFuZS5waHlzaWNzLnNldE1hc3MoMjAwMDAwMDAwKTtcclxuICBwbGFuZS5waHlzaWNzLnJvdGF0ZShbMCwwLC0wLjI5XSk7XHJcbiAgcGxhbmUucGh5c2ljcy5zdGF0aWMgPSB0cnVlXHJcbiAgc2ltLmFkZFN0YXRpY09iamVjdChwbGFuZS5waHlzaWNzKTtcclxuICBvYmplY3RzLnB1c2gocGxhbmUpO1xyXG59XHJcbmZvcihsZXQgaSA9IDA7IGkgPCA1MDsgaSsrKXtcclxuICBjb25zdCBwbGFuZSA9IHsgcGh5c2ljczogbmV3IFJpZ2lkQm9keShuZXcgQm94KDIsIDIsIDEwMCkpLCBzcHJpdGU6IHBhbmVsIH07XHJcbiAgcGxhbmUucGh5c2ljcy50cmFuc2xhdGUoWzE2MCAtIGkqMiwgLTgwIC0gaSAqIDIgLDBdKTtcclxuICBwbGFuZS5waHlzaWNzLnNldE1hc3MoMjAwMDAwMDAwKTtcclxuICBwbGFuZS5waHlzaWNzLnJvdGF0ZShbMCwwLDAuMl0pO1xyXG4gIHBsYW5lLnBoeXNpY3Muc3RhdGljID0gdHJ1ZVxyXG4gIHNpbS5hZGRTdGF0aWNPYmplY3QocGxhbmUucGh5c2ljcyk7XHJcbiAgb2JqZWN0cy5wdXNoKHBsYW5lKTtcclxufVxyXG5jb25zdCBwbGFuZSA9IHsgcGh5c2ljczogbmV3IFJpZ2lkQm9keShuZXcgQm94KDYsIDIsIDEwMCkpLCBzcHJpdGU6IHBhbmVsIH1cclxucGxhbmUucGh5c2ljcy50cmFuc2xhdGUoWzEwMiAsIC05MCAsMF0pO1xyXG4gIHBsYW5lLnBoeXNpY3Muc2V0TWFzcygyMDAwMDAwMDApO1xyXG4gIC8vcGxhbmUucGh5c2ljcy5yb3RhdGUoWzAsMCwwLjJdKTtcclxuICBwbGFuZS5waHlzaWNzLnN0YXRpYyA9IHRydWVcclxuICBzaW0uYWRkU3RhdGljT2JqZWN0KHBsYW5lLnBoeXNpY3MpO1xyXG4gIG9iamVjdHMucHVzaChwbGFuZSk7XHJcbmZvciAobGV0IGkgPSAwOyBpIDwgMTU7IGkrKykge1xyXG4gIGNvbnN0IGN1YmUgPSB7IHBoeXNpY3M6IG5ldyBSaWdpZEJvZHkobmV3IEJveCgzLCAzLCAzKSksIHNwcml0ZTogYm94LCB1bmlmb3JtcyA6IHt1X2NvbG9yIDogWzAsMCwxLDFdfSB9O1xyXG4gIGN1YmUucGh5c2ljcy50cmFuc2xhdGUoWzEwMSwgLTg3LjUgKyAzLjAxICogKGklMyksIC0yLjUgKyAoaSU1KSAqIDNdKTtcclxuICBjdWJlLnBoeXNpY3Muc2V0TWFzcygyMCk7XHJcbiAgY3ViZS5waHlzaWNzLmFkZEFjY2VsZXJhdGlvbihbMCwgLWcsIDBdKTtcclxuICBzaW0uYWRkT2JqZWN0KGN1YmUucGh5c2ljcyk7XHJcbiAgb2JqZWN0cy5wdXNoKGN1YmUpO1xyXG5cclxufVxyXG5cclxuZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcclxuICBjb25zdCB7IHBhcnRzLCBjb25zdHJhaW50cywgcG9zaXRpb25Db25zdHJhaW50cyB9ID0gbmV3IFJhZ2RvbGwoWzEwLCA1ICsgMy4wMSAqIGksIDBdKTtcclxuXHJcbiAgZm9yIChjb25zdCBuYW1lIGluIHBhcnRzKSB7XHJcbiAgICBzaW0uYWRkT2JqZWN0KHBhcnRzW25hbWVdKTtcclxuICAgIHBhcnRzW25hbWVdLmFkZEFjY2VsZXJhdGlvbihbMCwgLWcsIDBdKTtcclxuICAgIHBhcnRzW25hbWVdLmFkZFZlbG9jaXR5KFsxMCwgMCwgMF0pO1xyXG4gICAgcGFydHNbbmFtZV0uc2V0TWFzcyg1KVxyXG4gICAgLy9wYXJ0c1tuYW1lXS5mcmljdGlvbiA9IDEwO1xyXG4gICAgbGV0IHNwcml0ZSA9IGN5bGluZGVyXHJcbiAgICBpZihuYW1lID09PSAnaGVhZCcpIHtcclxuICAgICAgc3ByaXRlID0gc3BoZXJlXHJcbiAgICB9XHJcbiAgICBpZihuYW1lID09PSAnYm9keScpIHtcclxuICAgICAgc3ByaXRlID0gYm94XHJcbiAgICAgIFxyXG4gICAgfVxyXG4gICAgb2JqZWN0cy5wdXNoKHsgcGh5c2ljczogcGFydHNbbmFtZV0sIHNwcml0ZSwgdW5pZm9ybXMgOiB7dV9jb2xvciA6IFswLDAuNSwwLDFdfSB9KTtcclxuICB9XHJcbiAgcGFydHMuaGVhZC5zZXRNYXNzKDEwKVxyXG4gIHNpbS5hZGRDb25zdHJhaW50cyhjb25zdHJhaW50cywgXCJyYWdkb2xsXCIgKyBpKTtcclxuICBzaW0uYWRkUG9zaXRpb25Db25zdHJhaW50cyhwb3NpdGlvbkNvbnN0cmFpbnRzLCBcInJhZ2RvbFwiICsgaSk7XHJcbn1cclxuXHJcblxyXG5jb25zdCBwbGF5ZXIgPSBuZXcgTm9jbGlwKCk7XHJcbnBsYXllci5jYW1Qb3MgPSBbMTQwLCAtNTAsIDVdXHJcbnBsYXllci5yb3RhdGlvblkgPSBNYXRoLlBJLzJcclxucGxheWVyLnJvdGF0aW9uWCA9IC0wLjEgKiBNYXRoLlBJLzJcclxucGxheWVyLmxpc3RlbktleWJvYXJkKGtleUlucHV0KTtcclxucGxheWVyLmxpc3Rlbk1vdXNlKG1vdXNlSW5wdXQpO1xyXG5cclxuUmlnaWRCb2R5LnNldFRyZXNob2xkKDAuMDA1KTtcclxuXHJcbmxldCBsYXN0Q2FsbCA9IERhdGUubm93KCk7XHJcbmNvbnN0IGZwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZnBzXCIpO1xyXG5cclxuY29uc3QgbG9vcCA9ICgpID0+IHtcclxuICBzaW0udGljaygwLjAxNik7XHJcbiAgcGxheWVyLnRpY2soKTtcclxuICBjb25zdCBjdXJlbnRUaW1lID0gRGF0ZS5ub3coKTtcclxuICBjb25zdCBkZWx0YSA9IGN1cmVudFRpbWUgLSBsYXN0Q2FsbDtcclxuICBmcHMudGV4dENvbnRlbnQgPSAoMSAvIGRlbHRhKSAqIDEwMDA7XHJcbiAgbGFzdENhbGwgPSBjdXJlbnRUaW1lO1xyXG4gIGdsLmNsZWFyKGdsLkNPTE9SX0JVRkZFUl9CSVQgfCBnbC5ERVBUSF9CVUZGRVJfQklUKTtcclxuICBnbC5lbmFibGUoZ2wuQ1VMTF9GQUNFKTtcclxuICBnbC5lbmFibGUoZ2wuREVQVEhfVEVTVCk7XHJcblxyXG4gIGNvbnN0IGNhbWVyYU1hdHJpeCA9IHBsYXllci5jYW1NYXRyaXg7XHJcbiAgY29uc3QgeyB0cmFuc2xhdGlvbiB9ID0gbTQuZGVjb21wb3NlKGNhbWVyYU1hdHJpeCk7XHJcblxyXG4gIG9iamVjdHMuZm9yRWFjaCgob2JqKSA9PiB7XHJcbiAgICBjb25zdCB1X21hdHJpeCA9IG9iai5waHlzaWNzLmNvbGxpZGVyLmdldE00KCk7XHJcblxyXG4gICAgY29uc3QgdV92aWV3V29ybGRQb3NpdGlvbiA9IHRyYW5zbGF0aW9uO1xyXG4gICAgY29uc3Qgc3ByaXRlVW5pZm9ybXMgPSBvYmoudW5pZm9ybXMgfHwge31cclxuICAgIG9iai5zcHJpdGUuZHJhdyhcclxuICAgICAgeyAuLi51bmlmb3JtcywgdV9tYXRyaXgsIHVfdmlld1dvcmxkUG9zaXRpb24sIHVfY29sb3I6IFsxLCAwLjUsIDAuMSwgMV0sIC4uLnNwcml0ZVVuaWZvcm1zIH0sXHJcbiAgICAgIGNhbWVyYU1hdHJpeFxyXG4gICAgKTtcclxuICB9KTtcclxuXHJcbiAgcG9pbnRzLmRyYXcoXHJcbiAgICB7XHJcbiAgICAgIHVfbWF0cml4OiBtNC5pZGVudGl0eSgpLFxyXG4gICAgICB1X2NvbG9yOiBbMCwgMC41LCAwLjEsIDFdLFxyXG4gICAgICB1X3dvcmxkVmlld1Bvc2l0aW9uOiBjYW1lcmFNYXRyaXgsXHJcbiAgICB9LFxyXG4gICAgY2FtZXJhTWF0cml4XHJcbiAgKTtcclxuLypcclxuICBmb3IgKGNvbnN0IFtuYW1lLCBjb25zdHJhaW50c10gb2Ygc2ltLmNvbnN0cmFpbnRzKSB7XHJcbiAgICBjb25zdHJhaW50cy5mb3JFYWNoKChjKSA9PiB7XHJcbiAgICAgIHBvaW50cy5kcmF3KFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHVfbWF0cml4OiBtNC50cmFuc2xhdGlvbiguLi5jLlBBKSxcclxuICAgICAgICAgIHVfY29sb3I6IFsxLjAsIDAuMCwgMC4xLCAxXSxcclxuICAgICAgICAgIHVfd29ybGRWaWV3UG9zaXRpb246IGNhbWVyYU1hdHJpeCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNhbWVyYU1hdHJpeFxyXG4gICAgICApO1xyXG4gICAgICBwb2ludHMuZHJhdyhcclxuICAgICAgICB7XHJcbiAgICAgICAgICB1X21hdHJpeDogbTQudHJhbnNsYXRpb24oLi4uYy5QQiksXHJcbiAgICAgICAgICB1X2NvbG9yOiBbMS4wLCAwLjAsIDAuMSwgMV0sXHJcbiAgICAgICAgICB1X3dvcmxkVmlld1Bvc2l0aW9uOiBjYW1lcmFNYXRyaXgsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjYW1lcmFNYXRyaXhcclxuICAgICAgKTtcclxuICAgIH0pO1xyXG4gIH1cclxuICBjb25zdCBtYW5pZm9sZHMgPSBzaW0uY29sbGlzaW9uTWFuaWZvbGRzLnZhbHVlcygpO1xyXG5cclxuICBmb3IgKGNvbnN0IG1hbmlmb2xkIG9mIG1hbmlmb2xkcykge1xyXG4gICAgbWFuaWZvbGQuY29udGFjdHMuZm9yRWFjaCgoY29udGFjdCkgPT4ge1xyXG4gICAgICBwb2ludHNcclxuICAgICAgICAuZHJhdyhcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdV9tYXRyaXg6IG00LnRyYW5zbGF0aW9uKC4uLmNvbnRhY3QuUEEpLFxyXG4gICAgICAgICAgICB1X2NvbG9yOiBbMC42LCAwLjYsIDAuMCwgMV0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgY2FtZXJhTWF0cml4XHJcbiAgICAgICAgKVxyXG4gICAgICAgIC5kcmF3KFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB1X21hdHJpeDogbTQudHJhbnNsYXRpb24oLi4uY29udGFjdC5QQiksXHJcbiAgICAgICAgICAgIHVfY29sb3I6IFswLjUsIDAuMSwgMC4yLCAxXSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBjYW1lcmFNYXRyaXhcclxuICAgICAgICApO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4qL1xyXG4gIGdsLnZpZXdwb3J0KDAsIDAsIGdsLmNhbnZhcy53aWR0aCwgZ2wuY2FudmFzLmhlaWdodCk7XHJcbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGxvb3ApO1xyXG59O1xyXG5sb29wKCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==