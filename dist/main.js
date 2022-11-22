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
    getContext() {
      return this.gl;
    }
    getCanvasRect() {
      return this.gl.canvas.getBoundin;
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
/* harmony import */ var math_src_vector_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! math/src/vector.js */ "./node_modules/math/src/vector.js");
/* harmony import */ var math_src_vector_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(math_src_vector_js__WEBPACK_IMPORTED_MODULE_1__);


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
    const normal = (0,math_src_vector_js__WEBPACK_IMPORTED_MODULE_1__.normalize)((0,math_src_vector_js__WEBPACK_IMPORTED_MODULE_1__.cross)((0,math_src_vector_js__WEBPACK_IMPORTED_MODULE_1__.diff)(b, c), (0,math_src_vector_js__WEBPACK_IMPORTED_MODULE_1__.diff)(a, c)));
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
const {Node , TRS}= __webpack_require__(/*! ./src/node */ "./node_modules/math/src/node.js")
const vector = __webpack_require__(/*! ./src/vector */ "./node_modules/math/src/vector.js")

module.exports = {
    AABB, m3, m4, Node, TRS, vector
}

/***/ }),

/***/ "./node_modules/math/src/aabb.js":
/*!***************************************!*\
  !*** ./node_modules/math/src/aabb.js ***!
  \***************************************/
/***/ ((module) => {

class AABB{
    constructor(min, max){
        this.min = min
        this.max = max
    }
}
module.exports = AABB

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
const {norm} = __webpack_require__(/*! ./vector */ "./node_modules/math/src/vector.js")
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

/***/ "./node_modules/math/src/node.js":
/*!***************************************!*\
  !*** ./node_modules/math/src/node.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const m4 = __webpack_require__(/*! ./m4 */ "./node_modules/math/src/m4.js");
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
  constructor(name, trs = new TRS()) {
    this.worldMatrix = m4.identity();
    this.parent = null;
    this.children = [];
    this.trs = trs;
    this.name = name;
    this.parts = [];
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
}

module.exports = { Node, TRS };


/***/ }),

/***/ "./node_modules/math/src/vector.js":
/*!*****************************************!*\
  !*** ./node_modules/math/src/vector.js ***!
  \*****************************************/
/***/ ((module) => {

const dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2]
const cross = (a, b) => {
    const res = [
                            a[1] * b[2] - b[1] * a[2],
                            a[2] * b[0] - b[2] * a[0],
                            a[0] * b[1] - b[0] * a[1]    
                    ]
    if(isNaNvec(a) || isNaNvec(b)){
        console.log(a, b)
        throw new Error('args is NaN : ,')
    }
    return res
}          
const scale = (a, scalar) => [a[0] * scalar, a[1] * scalar, a[2] * scalar]
const sum = (a, b) => [a[0] + b[0], a[1] + b[1], a[2] + b[2]]
const diff = (a, b) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]]
const norm = a => Math.sqrt(a[0] * a[0] + a[1] * a[1] + a[2] * a[2])
const normSq = a => a[0] * a[0] + a[1] * a[1] + a[2] * a[2]
const normalize = a => {
    const length = norm(a)
    if(length === 0) return a
    return [a[0] / length, a[1] / length, a[2] / length]
}
const isNull = a => a[0]*a[0] + a[1] * a[1] + a[2] * a[2] === 0

const isEqual = (a, b) => a[0] == b[0] && a[1] == b[1] && a[2] == b[2]
const chkV = (v) =>{
    if(isNaNvec(v)){
        console.log(v)
        throw new Error('NaN Vec')
    }
}

const findFurthestPoint = (a,b,c) => {
    const AB = normSq(diff(a, b))
    const AC = normSq(diff(a, c))
    const BC = normSq(diff(c, b))
    if(AB < AC){
        if(AB < BC) return c
        return b
    }
    else{
        if(AC < BC) return b
        else return a
    }
}
const distanceFromLine = (a,b,c) =>{
    const ac = diff(c, a)
    const ab = diff(b, a)
    const k = dot(ab,ac) / normSq(ab)
    const h = sum(a, scale(ab, k))
    return normSq(diff(c, h))
}


const isNaNvec = v => isNaN(v[0] + v[1] + v[2]) || (v[0] + v[1] + v[2] === Infinity) || (v[0] + v[1] + v[2] === -Infinity)
const _dot = (a, b) =>{
    if(isNaNvec(a) || isNaNvec(b)){
        console.log(a, b)
        throw new Error('args is NaN : ,')
    }
    return dot(a, b)
}
const _cross = (a, b) =>{
    if(isNaNvec(a) || isNaNvec(b)){
        console.log(a, b)
        throw new Error('args is NaN : ,')
    }
    const res = cross(a, b)  
    if(isNaNvec(res)){
        console.log(a, b)
        throw new Error('get NaN : ,')
    }
    return res 
}
const _sum = (a, b) =>{
    if(isNaNvec(a) || isNaNvec(b)){
        console.log(a, b)
        throw new Error('args is NaN : ,')
    }
    const res = sum(a, b)  
    if(isNaNvec(res)){
        console.log(a, b)
        throw new Error('get NaN : ,')
    }
    return res 
}
const _diff = (a, b) =>{
    if(isNaNvec(a) || isNaNvec(b)){
        console.log(a, b)
        throw new Error('args is NaN : ,')
    }
    const res = diff(a, b)  
    if(isNaNvec(res)){
        console.log(a, b)
        throw new Error('get NaN : ,')
    }
    return res    
}
const _scale = (a, scalar) =>{
    if(isNaNvec(a) || isNaN(scalar)){
        console.log(a, scalar)
        throw new Error('args is NaN : ,')
    }
    const res = scale(a, scalar)  
    if(isNaNvec(res)){
        console.log(a, scalar)
        throw new Error('get NaN : ,')
    }
    return res 
}
const _normalize = a =>{
    if(isNaNvec(a)){
        console.log(a)
        throw new Error('args is NaN : ,')
    }
    const res = normalize(a)  
    if(isNaNvec(res)){
        console.log(a)
        throw new Error('get NaN : ,')
    }
    return res 
}
module.exports = {chkV, dot : _dot, cross : _cross, scale : _scale, sum : _sum, diff : _diff, normalize : _normalize, norm, normSq, isNull, findFurthestPoint, distanceFromLine, isEqual}

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
        //this.rigidBody.rotate([0, -this.deltaRY,0])
        this.deltaRY = 0
        
        const pos = [...this.rigidBody.collider.pos]
        let _m = math__WEBPACK_IMPORTED_MODULE_0__.m4.translation(pos[0], pos[1]+3, pos[2])
        //_m = m4.multiply(_m, m4.m3Tom4(this.rigidBody.collider.Rmatrix))
        _m = math__WEBPACK_IMPORTED_MODULE_0__.m4.xRotate(_m, this.rotationX)
        _m = math__WEBPACK_IMPORTED_MODULE_0__.m4.translate(_m, ...this.camPos)
        this.camMatrix = _m
     
    }
    getAbsoluteCamPos(){
        return math__WEBPACK_IMPORTED_MODULE_0__.vector.sum(this.rigidBody.collider.pos, this.camPos)
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
        this.camPos = math__WEBPACK_IMPORTED_MODULE_0__.vector.sum(this.camPos, math__WEBPACK_IMPORTED_MODULE_0__.m3.transformPoint(m, dir))
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
  }
  logMove({ offsetX, offsetY }) {
    const deltaX = offsetX - this.lastX;
    this.lastX = offsetX;
    const deltaY = offsetY - this.lastY;
    this.lastY = offsetY;
    this.emit("move", [deltaX, deltaY]);
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


const { cross, scale, norm, sum, diff } = math__WEBPACK_IMPORTED_MODULE_1__.vector;
const prec = 0.0001;
const stopTreshold = 0.005
class RigidBody extends _eventEmitter__WEBPACK_IMPORTED_MODULE_0__.EventEmitter {
  constructor(collider) {
    super();
    this.DOF = [1,1,1,1,1,1]
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
    this.oldVelocity = null
    this.group = null
  }
  
  integrateRK4(dt){
    const {acceleration, velocity, angularV} = this
    

    const _translation = scale(sum(velocity, scale(acceleration, 2/3 * dt)), dt)
    const _rotation = scale(angularV, dt)
    const deltaVelocity  = scale(acceleration, dt)

    if (norm(_translation) > stopTreshold) this.translate(_translation);
    
    if (norm(_rotation) > stopTreshold) this.rotate(_rotation);
    this.velocity = sum(velocity, deltaVelocity)
  }
  integratePseudoVelocities(dt) {
    const translation = scale(this.pseudoVelocity, dt);

    const rotation = scale(this.pseudoAngularV, dt );
    if (norm(translation) > stopTreshold) this.translate(translation);

    if (norm(rotation) > stopTreshold) this.rotate(rotation);

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
    const translation = scale(this.velocity , dt);
    if (norm(translation) > stopTreshold) this.translate(translation);
    const rotation = scale(this.angularV, dt );
    if (norm(translation) > stopTreshold) this.rotate(rotation);
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

    this.emit("update");
  }
  rotate(rotation) {
    this.collider.rotate(rotation);

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
  getExpandedAABB() {
    const aabb = this.collider.getAABB();
    const velocity = this.velocity;
    const tr = [prec, prec, prec];
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
    this.DOF = [1,1,1, 0,0,0]
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

const clipSegmentVsSegment = (p1, p2, p3, p4) => {
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
  'segment_segment' : clipSegmentVsSegment,
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


const { scale, sum, diff, dot, normalize } = math__WEBPACK_IMPORTED_MODULE_0__.vector;

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
/* harmony export */   "PositionConstraint": () => (/* binding */ PositionConstraint)
/* harmony export */ });
/* harmony import */ var math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! math */ "./node_modules/math/index.js");
/* harmony import */ var math__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(math__WEBPACK_IMPORTED_MODULE_0__);


const { dot, cross, normalize, diff, scale, norm, sum, normSq } = math__WEBPACK_IMPORTED_MODULE_0__.vector;
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
    this._J = [[...this.J[0], ...this.J[1]], [...this.J[2], ...this.J[3]]]
    this.B = [
      [...this.JM[0], ...this.JM[1]],
      [...this.JM[2], ...this.JM[3]],
    ];
    this.effMass =
      dot(J[0], this.JM[0]) + dot(this.JM[1], this.J[1]) +dot(J[2], this.JM[2]) + dot(this.JM[3], this.J[3]);
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
    this.lambdaMax = norm(
      sum(
        scale(this.body1.velocity, this.body1.mass),
        scale(this.body2.velocity, this.body2.mass)
      )
    ) * 10;
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

class Joint extends Constraint {
  constructor(body1, body2, raLocal, rbLocal, biasFactor = 0) {
    super(body1, body2, null, null, null, raLocal, rbLocal, biasFactor);
    
    
    this.treshold = 0.0001;
    this.reducer = 0.5;
    this.maxImpulse = 0.7;

  }
  updateLeftPart(deltaTime) {
    const {body1, body2, raLocal, rbLocal} = this
    this.PA = body1.collider.localToGlobal(raLocal);
    this.PB = body2.collider.localToGlobal(rbLocal);
    const dir = diff(this.PA, this.PB);
    const n = dir
    this.n = n
    this.ra = diff(this.PA, this.body1.collider.pos);
    this.rb = diff(this.PB, this.body2.collider.pos);
    this.penDepth = norm(dir);

    const J = [scale(this.n, -1), cross(this.n, this.ra), this.n, cross(this.rb, this.n)];

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
    this.J = J
    this.JM = [
      scale(this.J[0], M1),
      math__WEBPACK_IMPORTED_MODULE_0__.m3.transformPoint(I1, this.J[1]),
      scale(this.J[2], M2),
      math__WEBPACK_IMPORTED_MODULE_0__.m3.transformPoint(I2, this.J[3]),
    ];
    this.effMass =
      dot(this.JM[0], J[0]) + dot(this.JM[1], this.J[1]) + dot(this.JM[2], J[2]) + dot(this.JM[3], this.J[3]);
    this.B = [
      [...this.JM[0], ...this.JM[1]],
      [...this.JM[2], ...this.JM[3]],
    ];
    this._J = [[...this.J[0], ...this.J[1]], [...this.J[2], ...this.J[3]]]
    
  }
 
  updateRightPart(deltaTime) {
    const { body1, body2, ra, rb, n, penDepth, treshold, biasFactor } = this;

    const relativeVelocity = diff(
      sum(body2.velocity, cross(body2.angularV, rb)),
      sum(body1.velocity, cross(body1.angularV, ra))
    );

    const relativeVelocityNormalProjection = dot(relativeVelocity, n);
    const fac = penDepth**2 > treshold
    this.bias = (biasFactor  * Math.max(penDepth**2 - treshold, 0)/deltaTime) - relativeVelocityNormalProjection;
    this.bias *= fac
   
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
class JointPositionConstraint extends Joint{
  updateRightPart(deltaTime){
    const { penDepth, treshold, biasFactor } = this;
    
    const fac = penDepth**2 > treshold
    this.bias = (biasFactor  * Math.max(penDepth**2 - treshold, 0)/deltaTime)*fac
  }
  applyResolvingImpulse(lambda){
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



const { dot, cross, normalize, sum, diff, len, scale, isNull, norm } = math__WEBPACK_IMPORTED_MODULE_0__.vector;
const CLIP_BIAS = 0.0005;
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
  const i = math__WEBPACK_IMPORTED_MODULE_0__.vector.normalize(math__WEBPACK_IMPORTED_MODULE_0__.vector.diff(plane[0], projections1[1]));
  const j = math__WEBPACK_IMPORTED_MODULE_0__.vector.cross(plane[1], i);

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


const { distanceFromLine, norm, findFurthestPoint, sum, diff, normSq, dot } =
  math__WEBPACK_IMPORTED_MODULE_0__.vector;

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

/***/ "./src/physics/simulation.js":
/*!***********************************!*\
  !*** ./src/physics/simulation.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Simulation)
/* harmony export */ });
/* harmony import */ var _tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tree */ "./src/physics/tree.js");
/* harmony import */ var math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! math */ "./node_modules/math/index.js");
/* harmony import */ var math__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(math__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _gjk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gjk */ "./src/physics/gjk.js");
/* harmony import */ var _manifold__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./manifold */ "./src/physics/manifold.js");
/* harmony import */ var _system__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./system */ "./src/physics/system.js");
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
    this.bvh = new _tree__WEBPACK_IMPORTED_MODULE_0__["default"]();
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
      const cols = this.bvh.getCollisions(object.BVlink);
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
  }
  tick(deltaTime) {
    this.updateCollisions();
    let manifolds = this.collisionManifolds;
    for (let i = 0, n = this.objects.length; i < n; i++) {
      this.objects[i].integrateForces(deltaTime);
    }
    const system = new _system__WEBPACK_IMPORTED_MODULE_4__["default"]();
    const frictionSystem = new _system__WEBPACK_IMPORTED_MODULE_4__["default"]();
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
          0.00001,
          penDepth,
          i,
          j
        );

        const fConstraint1 = new _constraints__WEBPACK_IMPORTED_MODULE_5__.FrictionConstraint(
          body1,
          body2,
          math__WEBPACK_IMPORTED_MODULE_1__.vector.scale(i, -1),
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
          math__WEBPACK_IMPORTED_MODULE_1__.vector.scale(j, -1),
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
    //this.objects.forEach((object) => object.updateInverseInertia());
    const positionSystem = new _system__WEBPACK_IMPORTED_MODULE_4__["default"]();
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

/***/ "./src/physics/system.js":
/*!*******************************!*\
  !*** ./src/physics/system.js ***!
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

/***/ "./src/physics/tree.js":
/*!*****************************!*\
  !*** ./src/physics/tree.js ***!
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
  }
  setUnchecked() {
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

    while (index) {
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
  getHeight(leaf) {
    const iter = (leaf, level) => {
      if (!leaf) {
        return level;
      }

      let h1 = iter(leaf.child1, level + 1);
      let h2 = iter(leaf.child2, level + 1);
      return h1 > h2 ? h1 : h2;
    };
    return iter(leaf, 1);
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
/*!******************!*\
  !*** ./index.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! math */ "./node_modules/math/index.js");
/* harmony import */ var math__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(math__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var graphics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphics */ "./node_modules/graphics/index.js");
/* harmony import */ var _src_misc_mouseInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/misc/mouseInput */ "./src/misc/mouseInput.js");
/* harmony import */ var _src_misc_keyInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/misc/keyInput */ "./src/misc/keyInput.js");
/* harmony import */ var _shader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shader */ "./shader.js");
/* harmony import */ var _src_physics_simulation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/physics/simulation */ "./src/physics/simulation.js");
/* harmony import */ var _src_physics_RigidBody__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/physics/RigidBody */ "./src/physics/RigidBody.js");
/* harmony import */ var _src_physics_collider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/physics/collider */ "./src/physics/collider.js");
/* harmony import */ var _src_misc_controllable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./src/misc/controllable */ "./src/misc/controllable.js");
/* harmony import */ var _src_physics_constraints__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./src/physics/constraints */ "./src/physics/constraints.js");






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
const sphere = new graphics__WEBPACK_IMPORTED_MODULE_1__.PrimitiveRenderer((0,graphics__WEBPACK_IMPORTED_MODULE_1__.createSphere)(1, 15, 15));
const circle = new graphics__WEBPACK_IMPORTED_MODULE_1__.PrimitiveRenderer((0,graphics__WEBPACK_IMPORTED_MODULE_1__.createCircle)(8, 4));
const cylinder = new graphics__WEBPACK_IMPORTED_MODULE_1__.PrimitiveRenderer((0,graphics__WEBPACK_IMPORTED_MODULE_1__.createTruncatedCone)(1,1,1,8, 1))
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
  .setProgramInfo(pointLightProgramInfo)
  .createGeometryBuffers()
  .setAttributes()
  .setMode(2);
cylinder
  .setContext(context)
  .createVAO()
  .setDrawer(drawer)
  .setProgramInfo(pointLightProgramInfo)
  .createGeometryBuffers()
  .setAttributes()
  .setMode(2);
sphere
  .setContext(context)
  .createVAO()
  .setDrawer(drawer)
  .setProgramInfo(pointLightProgramInfo)
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
  u_lightWorldPosition: [10, 50, 10],
  u_ambientLight: [1, 1, 0.3, 0.11],
  u_reverseLightDirection: [1, 0, 0],
  u_shininess: 300,
};








const g = 9.8;
const sim = new _src_physics_simulation__WEBPACK_IMPORTED_MODULE_5__["default"]();

const floor = { physics: new _src_physics_RigidBody__WEBPACK_IMPORTED_MODULE_6__.RigidBody(new _src_physics_collider__WEBPACK_IMPORTED_MODULE_7__.Box(1000, 6, 1000)), sprite: box };

const cube2 = { physics: new _src_physics_RigidBody__WEBPACK_IMPORTED_MODULE_6__.RigidBody(new _src_physics_collider__WEBPACK_IMPORTED_MODULE_7__.Box(2, 2, 2)), sprite: box };
const cube3 = { physics: new _src_physics_RigidBody__WEBPACK_IMPORTED_MODULE_6__.RigidBody(new _src_physics_collider__WEBPACK_IMPORTED_MODULE_7__.Box(2, 2, 2)), sprite: box };
const cube4 = {
  physics: new _src_physics_RigidBody__WEBPACK_IMPORTED_MODULE_6__.RigidBody(new _src_physics_collider__WEBPACK_IMPORTED_MODULE_7__.Cylinder(1,1, 0.5)),
  sprite: cylinder,
};
cube2.physics.translate([0, 4.7, 0]);
cube4.physics.translate([0, 10, -5]);
cube3.physics.translate([0, 3, 0]);
//cube4.physics.rotate([Math.PI*0.6,Math.PI*0.3,Math.PI*0.3])

cube2.physics.addAcceleration([0, -g, 0]);
cube3.physics.addAcceleration([0, -g, 0]);
cube4.physics.addAcceleration([0, -g * 2, 0]);
cube4.physics.friction = 0;
cube2.physics.setMass(20);
cube3.physics.setMass(20);

sim.addObject(floor.physics);

sim.addObject(cube2.physics);
sim.addObject(cube3.physics);
sim.addObject(cube4.physics);
const objects = [floor, cube2, cube3, cube4];

for (let i = 0; i < 3; i++) {
  const cube = { physics: new _src_physics_RigidBody__WEBPACK_IMPORTED_MODULE_6__.RigidBody(new _src_physics_collider__WEBPACK_IMPORTED_MODULE_7__.Box(2, 2, 2)), sprite: box };
  cube.physics.translate([10, 5 * i + 2.5, i * 0.1]);
  cube.physics.setMass(20);
  cube.physics.addAcceleration([0, -g, 0]);
  sim.addObject(cube.physics);
  objects.push(cube);
}

const chain = [];
for (let i = 0; i < 3; i++) {
  const cube = { physics: new _src_physics_RigidBody__WEBPACK_IMPORTED_MODULE_6__.RigidBody(new _src_physics_collider__WEBPACK_IMPORTED_MODULE_7__.Box(2, 5, 2)), sprite: box };
  cube.physics.translate([20, 5 * i + 15, i * 2]);
  cube.physics.setMass(5);
  cube.physics.addAcceleration([0, -g, 0]);
  cube.physics.friction = 0;
  //cube.physics.group = 1
  if (i > 0) {
    const c = new _src_physics_constraints__WEBPACK_IMPORTED_MODULE_9__.Joint(
      cube.physics,
      objects.at(-1).physics,
      [0, -3, 0],
      [0, 3, 0],
      0.1
    );
    chain.push(c);

    // cube.physics.static = true
  }
  sim.addObject(cube.physics);
  objects.push(cube);
}
sim.addConstraints(chain, "chain");


function createRagdoll(pos = [0,0,0]){
  const body = new _src_physics_RigidBody__WEBPACK_IMPORTED_MODULE_6__.RigidBody(new _src_physics_collider__WEBPACK_IMPORTED_MODULE_7__.Box(1,2,0.5))
  const leftHand = new _src_physics_RigidBody__WEBPACK_IMPORTED_MODULE_6__.RigidBody(new _src_physics_collider__WEBPACK_IMPORTED_MODULE_7__.Box(0.5,2,0.5))
  const rightHand = new _src_physics_RigidBody__WEBPACK_IMPORTED_MODULE_6__.RigidBody(new _src_physics_collider__WEBPACK_IMPORTED_MODULE_7__.Box(0.5,2,0.5))
  const leftLeg = new _src_physics_RigidBody__WEBPACK_IMPORTED_MODULE_6__.RigidBody(new _src_physics_collider__WEBPACK_IMPORTED_MODULE_7__.Box(0.5,2,0.5))
  const rightLeg = new _src_physics_RigidBody__WEBPACK_IMPORTED_MODULE_6__.RigidBody(new _src_physics_collider__WEBPACK_IMPORTED_MODULE_7__.Box(0.5,2,0.5))
  const head = new _src_physics_RigidBody__WEBPACK_IMPORTED_MODULE_6__.RigidBody(new _src_physics_collider__WEBPACK_IMPORTED_MODULE_7__.Box(1,1,1))
  const constraints = [
      new _src_physics_constraints__WEBPACK_IMPORTED_MODULE_9__.Joint(body, head, [0,1.5,0], [0,-1,0], 0),
      new _src_physics_constraints__WEBPACK_IMPORTED_MODULE_9__.Joint(body, leftHand, [1,1,0], [0,1,0], 0),
      new _src_physics_constraints__WEBPACK_IMPORTED_MODULE_9__.Joint(body, rightHand, [-1,1,0], [0,1,0], 0),
      new _src_physics_constraints__WEBPACK_IMPORTED_MODULE_9__.Joint(body, rightLeg, [-0.5,-1.2,0], [0,1.2,0], 0),
      new _src_physics_constraints__WEBPACK_IMPORTED_MODULE_9__.Joint(body, leftLeg, [0.5,-1.2,0], [0,1.2,0], 0),
  ]
  const positionConstraints = [
      new _src_physics_constraints__WEBPACK_IMPORTED_MODULE_9__.JointPositionConstraint(body, head, [0,1.5,0], [0,-1,0], 0.2),
      new _src_physics_constraints__WEBPACK_IMPORTED_MODULE_9__.JointPositionConstraint(body, leftHand, [1,1,0], [0,1,0],  0.2),
      new _src_physics_constraints__WEBPACK_IMPORTED_MODULE_9__.JointPositionConstraint(body, rightHand, [-1,1,0], [0,1,0],  0.2),
      new _src_physics_constraints__WEBPACK_IMPORTED_MODULE_9__.JointPositionConstraint(body, rightLeg, [-0.5,-1.2,0], [0,1.2,0],  0.2),
      new _src_physics_constraints__WEBPACK_IMPORTED_MODULE_9__.JointPositionConstraint(body, leftLeg, [0.5,-1.2,0], [0,1.2,0],  0.2),
  ]
  //positionConstraints.forEach(c =>c.treshold = 0.1)
  body.translate(pos)
 
  head.translate(math__WEBPACK_IMPORTED_MODULE_0__.vector.sum(pos, [0,2,0]))
  leftHand.translate(math__WEBPACK_IMPORTED_MODULE_0__.vector.sum(pos, [-3,2,0]))
  rightHand.translate(math__WEBPACK_IMPORTED_MODULE_0__.vector.sum(pos, [3,2,0]))
  rightLeg.translate(math__WEBPACK_IMPORTED_MODULE_0__.vector.sum(pos, [2, -2.5,0]))
  leftLeg.translate(math__WEBPACK_IMPORTED_MODULE_0__.vector.sum(pos, [-2, -2.5,0]))
  const bodies = [body, leftHand, rightHand, rightLeg, leftLeg, head]
  positionConstraints.forEach(c => c.treshold = 0.05)
  bodies.forEach(b=>{
      //b.group = 'ragdoll'
      //b.setMass(10)
  })
  
  
  return [bodies, constraints, positionConstraints]
}


for (let i = 0; i < 3; i++) {
  const [bodies, constraints, positionConstraints] = createRagdoll([
    6 * i,
    10,
    -10,
  ]);

  bodies.forEach((b) => {
    sim.addObject(b);
    b.addAcceleration([0, -g, 0]);
    // b.group = 'ragdoll' + i
    objects.push({ physics: b, sprite: box });
  });
  sim.addConstraints(constraints, "ragdoll" + i);
  sim.addPositionConstraints(positionConstraints, "ragdol" + i);
}

const platform = new _src_physics_RigidBody__WEBPACK_IMPORTED_MODULE_6__.RigidBody(new _src_physics_collider__WEBPACK_IMPORTED_MODULE_7__.Box());
platform.DOF = [0, 0, 0, 0, 0, 0];
platform.static = true;
sim.addConstraints(
  [new _src_physics_constraints__WEBPACK_IMPORTED_MODULE_9__.Joint(platform, objects.at(-1).physics, [0, -1.5, 0], [0, 2, 0], 0.1)],
  "platform"
);
platform.translate([20, 10, -10]);

floor.physics.setMass(100000000);

floor.physics.translate([0, -3, 0]);

floor.static = true;
floor.DOF = [0, 0, 0, 0, 0, 0];
const player = new _src_misc_controllable__WEBPACK_IMPORTED_MODULE_8__.Controllable(cube4.physics);

player.listenKeyboard(keyInput);
player.listenMouse(mouseInput);

let lastCall = Date.now();
const fps = document.querySelector("#fps");

const loop = () => {
  sim.tick(0.01666);
  player.tick();
  const curentTime = Date.now();
  const delta = curentTime - lastCall;
  fps.textContent = (1 / delta) * 1000;
  lastCall = curentTime;
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
  gl.enable(gl.CULL_FACE);
  gl.enable(gl.DEPTH_TEST);

  const cameraMatrix = player.camMatrix;
  const {translation} = math__WEBPACK_IMPORTED_MODULE_0__.m4.decompose(cameraMatrix)

  objects.forEach((obj) => {
    const u_matrix = obj.physics.collider.getM4();

    const u_viewWorldPosition = translation;
    obj.sprite.draw(
      {...uniforms, u_matrix, u_viewWorldPosition, u_color: [1, 0.5, 0.1, 1] },
      cameraMatrix
    );
  });

  circle
    .draw(
      {
        u_matrix: math__WEBPACK_IMPORTED_MODULE_0__.m4.rotation(Math.PI / 2, 0, 0),
        u_color: [1, 0.5, 0.1, 1],
        u_worldViewPosition: cameraMatrix,
      },
      cameraMatrix
    )
    .draw(
      {
        u_matrix: math__WEBPACK_IMPORTED_MODULE_0__.m4.identity(),
        u_color: [1, 0.5, 0.1, 1],
        u_worldViewPosition: cameraMatrix,
      },
      cameraMatrix
    );
  points.draw(
    {
      u_matrix: math__WEBPACK_IMPORTED_MODULE_0__.m4.identity(),
      u_color: [0, 0.5, 0.1, 1],
      u_worldViewPosition: cameraMatrix,
    },
    cameraMatrix
  );

  for (const [name, constraints] of sim.constraints) {
    constraints.forEach((c) => {
      points.draw(
        {
          u_matrix: math__WEBPACK_IMPORTED_MODULE_0__.m4.translation(...c.PA),
          u_color: [1.0, 0.0, 0.1, 1],
          u_worldViewPosition: cameraMatrix,
        },
        cameraMatrix
      );
      points.draw(
        {
          u_matrix: math__WEBPACK_IMPORTED_MODULE_0__.m4.translation(...c.PB),
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
            u_matrix: math__WEBPACK_IMPORTED_MODULE_0__.m4.translation(...contact.PA),
            u_color: [0.6, 0.6, 0.0, 1],
          },
          cameraMatrix
        )
        .draw(
          {
            u_matrix: math__WEBPACK_IMPORTED_MODULE_0__.m4.translation(...contact.PB),
            u_color: [0.5, 0.1, 0.2, 1],
          },
          cameraMatrix
        );
    });
  }

  gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
  requestAnimationFrame(loop);
};
loop();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsMkNBQTJDO0FBQ3JEO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0EsWUFBWSxnQkFBZ0I7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsMkNBQTJDO0FBQ3JEO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQSxpRUFBZSxLQUFLLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcE9NO0FBQ1k7QUFDZ0I7QUFDQzs7QUFFeEQ7QUFDQTtBQUNBO0FBQ0E7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QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUMzS0E7QUFDQSxPQUFPLE1BQU0sRUFBRSxtQkFBTyxDQUFDLG1EQUFVO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7OztBQUdBOzs7Ozs7Ozs7OztBQ3BsQkEsV0FBVyxtQkFBTyxDQUFDLDJDQUFNO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUI7Ozs7Ozs7Ozs7O0FDakZuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjs7Ozs7Ozs7Ozs7Ozs7OztBQzNIcUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLElBQUksaURBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2RUs7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLG1EQUFpQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLG1EQUFpQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUM2Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvSjdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLE9BQU87QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxRQUFRO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksMEJBQTBCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxtREFBaUI7QUFDdkI7QUFDQSxNQUFNLG1EQUFpQjtBQUN2QjtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksMERBQTBEO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDBCQUEwQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSwwREFBMEQ7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGdDQUFnQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLG1EQUFpQjtBQUN2QjtBQUNBLE1BQU0sbURBQWlCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksMERBQTBEO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksaUNBQWlDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUUU7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5VEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ3dCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCYztBQUNxQjtBQUMzRDtBQUNBLFFBQVEsNkRBQTZELEVBQUUsd0NBQU07QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsNEJBQTRCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsZ0RBQWM7QUFDcEM7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsZ0RBQWM7QUFDcEM7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9waHMvLi9ub2RlX21vZHVsZXMvZ3JhcGhpY3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcGhzLy4vbm9kZV9tb2R1bGVzL2dyYXBoaWNzL3NyYy9CdWZmZXJBdHRyaWJ1dGUuanMiLCJ3ZWJwYWNrOi8vcGhzLy4vbm9kZV9tb2R1bGVzL2dyYXBoaWNzL3NyYy9EcmF3ZXIuanMiLCJ3ZWJwYWNrOi8vcGhzLy4vbm9kZV9tb2R1bGVzL2dyYXBoaWNzL3NyYy9NZXNoUmVuZGVyZXIuanMiLCJ3ZWJwYWNrOi8vcGhzLy4vbm9kZV9tb2R1bGVzL2dyYXBoaWNzL3NyYy9Nb2RlbC5qcyIsIndlYnBhY2s6Ly9waHMvLi9ub2RlX21vZHVsZXMvZ3JhcGhpY3Mvc3JjL1ByaW1pdGl2ZVJlbmRlcmVyLmpzIiwid2VicGFjazovL3Bocy8uL25vZGVfbW9kdWxlcy9ncmFwaGljcy9zcmMvYXR0cmliVHlwZVByb3BzLmpzIiwid2VicGFjazovL3Bocy8uL25vZGVfbW9kdWxlcy9ncmFwaGljcy9zcmMvZW51bXMuanMiLCJ3ZWJwYWNrOi8vcGhzLy4vbm9kZV9tb2R1bGVzL2dyYXBoaWNzL3NyYy9nbENvbnRleFdyYXBwZXIuanMiLCJ3ZWJwYWNrOi8vcGhzLy4vbm9kZV9tb2R1bGVzL2dyYXBoaWNzL3NyYy9nbHRmVXRpbHMuanMiLCJ3ZWJwYWNrOi8vcGhzLy4vbm9kZV9tb2R1bGVzL2dyYXBoaWNzL3NyYy9wcmltaXRpdmVzLmpzIiwid2VicGFjazovL3Bocy8uL25vZGVfbW9kdWxlcy9ncmFwaGljcy9zcmMvcHJvZ3JhbUluZm8uanMiLCJ3ZWJwYWNrOi8vcGhzLy4vbm9kZV9tb2R1bGVzL2dyYXBoaWNzL3NyYy9yZW5kZXIvc2hhZGVycy9kZWZhdWx0L2luZGV4LmpzIiwid2VicGFjazovL3Bocy8uL25vZGVfbW9kdWxlcy9ncmFwaGljcy9zcmMvcmVuZGVyL3NoYWRlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcGhzLy4vbm9kZV9tb2R1bGVzL2dyYXBoaWNzL3NyYy9yZW5kZXIvc2hhZGVycy9wb2ludExpZ2h0L2luZGV4LmpzIiwid2VicGFjazovL3Bocy8uL25vZGVfbW9kdWxlcy9ncmFwaGljcy9zcmMvdGV4dHVyZUluZm8uanMiLCJ3ZWJwYWNrOi8vcGhzLy4vbm9kZV9tb2R1bGVzL21hdGgvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcGhzLy4vbm9kZV9tb2R1bGVzL21hdGgvc3JjL2FhYmIuanMiLCJ3ZWJwYWNrOi8vcGhzLy4vbm9kZV9tb2R1bGVzL21hdGgvc3JjL20zLmpzIiwid2VicGFjazovL3Bocy8uL25vZGVfbW9kdWxlcy9tYXRoL3NyYy9tNC5qcyIsIndlYnBhY2s6Ly9waHMvLi9ub2RlX21vZHVsZXMvbWF0aC9zcmMvbm9kZS5qcyIsIndlYnBhY2s6Ly9waHMvLi9ub2RlX21vZHVsZXMvbWF0aC9zcmMvdmVjdG9yLmpzIiwid2VicGFjazovL3Bocy8uL3NoYWRlci5qcyIsIndlYnBhY2s6Ly9waHMvLi9zcmMvbWlzYy9jb250cm9sbGFibGUuanMiLCJ3ZWJwYWNrOi8vcGhzLy4vc3JjL21pc2Mva2V5SW5wdXQuanMiLCJ3ZWJwYWNrOi8vcGhzLy4vc3JjL21pc2MvbW91c2VJbnB1dC5qcyIsIndlYnBhY2s6Ly9waHMvLi9zcmMvcGh5c2ljcy9SaWdpZEJvZHkuanMiLCJ3ZWJwYWNrOi8vcGhzLy4vc3JjL3BoeXNpY3MvY2xpcHBpbmcuanMiLCJ3ZWJwYWNrOi8vcGhzLy4vc3JjL3BoeXNpY3MvY29sbGlkZXIuanMiLCJ3ZWJwYWNrOi8vcGhzLy4vc3JjL3BoeXNpY3MvY29uc3RyYWludHMuanMiLCJ3ZWJwYWNrOi8vcGhzLy4vc3JjL3BoeXNpY3MvZXZlbnRFbWl0dGVyLmpzIiwid2VicGFjazovL3Bocy8uL3NyYy9waHlzaWNzL2dqay5qcyIsIndlYnBhY2s6Ly9waHMvLi9zcmMvcGh5c2ljcy9tYW5pZm9sZC5qcyIsIndlYnBhY2s6Ly9waHMvLi9zcmMvcGh5c2ljcy9zaW11bGF0aW9uLmpzIiwid2VicGFjazovL3Bocy8uL3NyYy9waHlzaWNzL3N5c3RlbS5qcyIsIndlYnBhY2s6Ly9waHMvLi9zcmMvcGh5c2ljcy90cmVlLmpzIiwid2VicGFjazovL3Bocy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9waHMvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcGhzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9waHMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9waHMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9waHMvLi9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCdWZmZXJJbmZvLCBEeW5hbWljQnVmZmVySW5mbyB9IGZyb20gXCIuL3NyYy9CdWZmZXJBdHRyaWJ1dGVcIjtcbmltcG9ydCB7XG4gIFByaW1pdGl2ZVJlbmRlckluZm9Gcm9tQXJyYXlEYXRhLFxuICBBcnJheURhdGFGcm9tR2x0ZixcbiAgRW50aXR5RGF0YUZyb21HbHRmLFxuICBHTFRGLFxufSBmcm9tIFwiLi9zcmMvZ2x0ZlV0aWxzXCI7XG5pbXBvcnQgeyBNZXNoUmVuZGVyZXIsIFNraW5uZWRNZXNoUmVuZGVyZXIgfSBmcm9tIFwiLi9zcmMvTWVzaFJlbmRlcmVyXCI7XG5pbXBvcnQge1xuICBjcmVhdGVCb3gsXG4gIGNyZWF0ZUNvbmUsXG4gIGNyZWF0ZUNpcmNsZSxcbiAgY3JlYXRlU3BoZXJlLFxuICBjcmVhdGVUcnVuY2F0ZWRDb25lXG59IGZyb20gXCIuL3NyYy9wcmltaXRpdmVzXCI7XG5pbXBvcnQgUHJpbWl0aXZlUmVuZGVyZXIgZnJvbSBcIi4vc3JjL1ByaW1pdGl2ZVJlbmRlcmVyXCI7XG5pbXBvcnQge1xuICBnZXRHTFR5cGVGb3JUeXBlZEFycmF5LFxuICBQcm9ncmFtSW5mbyxcbiAgZXhwYW5kZWRUeXBlZEFycmF5LFxufSBmcm9tIFwiLi9zcmMvcHJvZ3JhbUluZm9cIjtcbmltcG9ydCBEcmF3ZXIgZnJvbSBcIi4vc3JjL0RyYXdlclwiO1xuaW1wb3J0IHtcbiAgVGV4dHVyZUluZm8sXG4gIG1ha2VJbWdGcm9tU3ZnWG1sLFxuICBtYWtlU3RyaXBlSW1nLFxufSBmcm9tIFwiLi9zcmMvdGV4dHVyZUluZm9cIjtcbmltcG9ydCBNb2RlbCBmcm9tIFwiLi9zcmMvTW9kZWxcIjtcbmltcG9ydCB7IGRlZmF1bHRTaGFkZXJzLCBwb2ludExpZ2h0U2hhZGVycyB9IGZyb20gXCIuL3NyYy9yZW5kZXIvc2hhZGVyc1wiO1xuaW1wb3J0IEdMY29udGV4dFdyYXBwZXIgZnJvbSBcIi4vc3JjL2dsQ29udGV4V3JhcHBlclwiO1xuXG5cbmV4cG9ydCB7XG4gIEdMVEYsXG4gIEdMY29udGV4dFdyYXBwZXIsXG4gIFRleHR1cmVJbmZvLFxuICBtYWtlSW1nRnJvbVN2Z1htbCxcbiAgbWFrZVN0cmlwZUltZyxcbiAgTW9kZWwsXG4gIFByaW1pdGl2ZVJlbmRlcmVyLFxuICBFbnRpdHlEYXRhRnJvbUdsdGYsXG4gIFByaW1pdGl2ZVJlbmRlckluZm9Gcm9tQXJyYXlEYXRhLFxuICBBcnJheURhdGFGcm9tR2x0ZixcbiAgTWVzaFJlbmRlcmVyLFxuICBTa2lubmVkTWVzaFJlbmRlcmVyLFxuICBjcmVhdGVCb3gsXG4gIFByb2dyYW1JbmZvLFxuICBEcmF3ZXIsXG4gIGNyZWF0ZUNvbmUsXG4gIGNyZWF0ZUNpcmNsZSxcbiAgZGVmYXVsdFNoYWRlcnMsXG4gIHBvaW50TGlnaHRTaGFkZXJzLFxuICBjcmVhdGVTcGhlcmUsXG4gIGNyZWF0ZVRydW5jYXRlZENvbmVcbn07XG4iLCJpbXBvcnQgeyBnZXRHTFR5cGVGb3JUeXBlZEFycmF5IH0gZnJvbSBcIi4vcHJvZ3JhbUluZm9cIjtcbmltcG9ydCB7IFRZUEVEX0FSUkFZUyB9IGZyb20gXCIuL2VudW1zXCI7XG5jb25zdCBjcmVhdGVJbmRpY2VzQnVmZmVyID0gKGdsLCBpbmRpY2VzKSA9PiB7XG4gIGNvbnN0IGJ1ZmZlciA9IGdsLmNyZWF0ZUJ1ZmZlcigpO1xuICBnbC5iaW5kQnVmZmVyKGdsLkVMRU1FTlRfQVJSQVlfQlVGRkVSLCBidWZmZXIpO1xuICBnbC5idWZmZXJEYXRhKGdsLkVMRU1FTlRfQVJSQVlfQlVGRkVSLCBpbmRpY2VzLCBnbC5TVEFUSUNfRFJBVyk7XG4gIHJldHVybiBidWZmZXI7XG59O1xuY29uc3QgZmxvYXRBdHRyaWJTZXR0ZXIgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIG51bUNvbXBvbmVudHMsXG4gICAgdHlwZSxcbiAgICBsb2NhdGlvbixcbiAgICBudW1BdHRyaWJ1dGVzLFxuICAgIHN0cmlkZSxcbiAgICBvZmZzZXQsXG4gICAgYnVmZmVyLFxuICAgIGdsLFxuICAgIGRpdmlzb3IsXG4gIH0gPSBwcm9wcztcblxuICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgYnVmZmVyKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1BdHRyaWJ1dGVzOyBpKyspIHtcbiAgICBjb25zdCBfb2Zmc2V0ID0gbnVtQ29tcG9uZW50cyAqIGkgKiBUWVBFRF9BUlJBWVNbdHlwZV0uQllURVNfUEVSX0VMRU1FTlQ7XG4gICAgZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkobG9jYXRpb24gKyBpKTtcbiAgICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKFxuICAgICAgbG9jYXRpb24gKyBpLFxuICAgICAgbnVtQ29tcG9uZW50cyxcbiAgICAgIHR5cGUsXG4gICAgICBmYWxzZSxcbiAgICAgIHN0cmlkZSxcbiAgICAgIG9mZnNldCArIF9vZmZzZXRcbiAgICApO1xuXG4gICAgaWYgKGRpdmlzb3IpIGdsLnZlcnRleEF0dHJpYkRpdmlzb3IobG9jYXRpb24gKyBpLCBkaXZpc29yKTtcbiAgfVxufTtcbmNvbnN0IGludEF0dHJpYlNldHRlciA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgbnVtQ29tcG9uZW50cyxcbiAgICB0eXBlLFxuICAgIGxvY2F0aW9uLFxuICAgIG51bUF0dHJpYnV0ZXMsXG4gICAgc3RyaWRlLFxuICAgIG9mZnNldCxcbiAgICBidWZmZXIsXG4gICAgZ2wsXG4gICAgZGl2aXNvcixcbiAgfSA9IHByb3BzO1xuICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgYnVmZmVyKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1BdHRyaWJ1dGVzOyBpKyspIHtcbiAgICBjb25zdCBfb2Zmc2V0ID0gbnVtQ29tcG9uZW50cyAqIGkgKiBUWVBFRF9BUlJBWVNbdHlwZV0uQllURVNfUEVSX0VMRU1FTlQ7XG4gICAgZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkobG9jYXRpb24gKyBpKTtcbiAgICBnbC52ZXJ0ZXhBdHRyaWJJUG9pbnRlcihcbiAgICAgIGxvY2F0aW9uICsgaSxcbiAgICAgIG51bUNvbXBvbmVudHMsXG4gICAgICB0eXBlLFxuICAgICAgZmFsc2UsXG4gICAgICBzdHJpZGUsXG4gICAgICBvZmZzZXQgKyBfb2Zmc2V0XG4gICAgKTtcbiAgICBpZiAoZGl2aXNvcikgZ2wudmVydGV4QXR0cmliRGl2aXNvcihsb2NhdGlvbiArIGksIGRpdmlzb3IpO1xuICB9XG59O1xuY29uc3QgYXR0cmliVHlwZU1hcCA9IHt9O1xuYXR0cmliVHlwZU1hcFsweDE0MDBdID0gaW50QXR0cmliU2V0dGVyO1xuYXR0cmliVHlwZU1hcFsweDE0MDZdID0gZmxvYXRBdHRyaWJTZXR0ZXI7XG5hdHRyaWJUeXBlTWFwWzB4MTQwMV0gPSBpbnRBdHRyaWJTZXR0ZXI7XG5hdHRyaWJUeXBlTWFwWzB4MTQwNF0gPSBpbnRBdHRyaWJTZXR0ZXI7XG5hdHRyaWJUeXBlTWFwWzB4MTQwNV0gPSBpbnRBdHRyaWJTZXR0ZXI7XG5hdHRyaWJUeXBlTWFwWzB4MTQwMl0gPSBpbnRBdHRyaWJTZXR0ZXI7XG5hdHRyaWJUeXBlTWFwWzB4MTQwM10gPSBpbnRBdHRyaWJTZXR0ZXI7XG5cbmNvbnN0IHNldEF0dHJpYnV0ZXMgPSAoZ2wsIGJ1ZmZlckluZm8sIGRpdmlzb3IpID0+IHtcbiAgY29uc3QgeyB0eXBlIH0gPSBidWZmZXJJbmZvO1xuICBjb25zdCBzZXR0ZXIgPSBhdHRyaWJUeXBlTWFwW3R5cGVdO1xuICBzZXR0ZXIoYnVmZmVySW5mbywgZGl2aXNvcik7XG59O1xuY2xhc3MgQnVmZmVyQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKGdsLCB0YXJnZXQgPSAweDg4OTIpIHtcbiAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcbiAgICB0aGlzLmJ1ZmZlciA9IGdsLmNyZWF0ZUJ1ZmZlcigpO1xuICAgIHRoaXMuZ2wgPSBnbDtcbiAgICB0aGlzLmJ1ZmZlckRhdGEgPSAoZGF0YSwgYnl0ZUxlbmd0aCwgdXNhZ2UgPSBnbC5TVEFUSUNfRFJBVykgPT4ge1xuICAgICAgZ2wuYmluZEJ1ZmZlcih0YXJnZXQsIHRoaXMuYnVmZmVyKTtcbiAgICAgIGdsLmJ1ZmZlckRhdGEodGFyZ2V0LCBkYXRhIHx8IGJ5dGVMZW5ndGgsIHVzYWdlKTtcbiAgICB9O1xuICAgIHRoaXMuYnVmZmVyU3ViRGF0YSA9IChkYXRhLCBvZmZzZXQgPSAwKSA9PiB7XG4gICAgICBnbC5iaW5kQnVmZmVyKHRhcmdldCwgdGhpcy5idWZmZXIpO1xuICAgICAgZ2wuYnVmZmVyU3ViRGF0YSh0YXJnZXQsIG9mZnNldCwgZGF0YSk7XG4gICAgfTtcbiAgfVxufVxuY2xhc3MgQXR0cmlidXRlU2V0dGVyIHtcbiAgY29uc3RydWN0b3IoaW5mbykge1xuICAgIHRoaXMuc3RyaWRlID0gaW5mby5zdHJpZGUgfHwgMDtcbiAgICB0aGlzLm51bUNvbXBvbmVudHMgPSBpbmZvLm51bUNvbXBvbmVudHM7XG4gICAgdGhpcy5udW1BdHRyaWJ1dGVzID0gaW5mby5udW1BdHRyaWJ1dGVzIHx8IDE7XG4gICAgdGhpcy5vZmZzZXQgPSBpbmZvLm9mZnNldCB8fCAwO1xuICAgIHRoaXMudHlwZSA9IGluZm8udHlwZTtcbiAgICB0aGlzLmxvY2F0aW9uID0gaW5mby5sb2NhdGlvbjtcbiAgfVxuICBzZXRBdHRyaWJ1dGUoYnVmZmVyQ29udHJvbGxlciwgZGl2aXNvcikge1xuICAgIGNvbnN0IHsgdHlwZSB9ID0gdGhpcztcbiAgICBjb25zdCBzZXR0ZXIgPSBhdHRyaWJUeXBlTWFwW3R5cGVdO1xuICAgIHNldHRlcih0aGlzLCBidWZmZXJDb250cm9sbGVyLCBkaXZpc29yKTtcbiAgfVxufVxuY2xhc3MgQnVmZmVyQXR0cmlidXRlIHtcbiAgY29uc3RydWN0b3IoZ2wsIGluZm8pIHtcbiAgICB0aGlzLmdsID0gZ2w7XG4gICAgdGhpcy5idWZmZXIgPSBnbC5jcmVhdGVCdWZmZXIoKTtcbiAgICB0aGlzLnN0cmlkZSA9IGluZm8uc3RyaWRlIHx8IDA7XG4gICAgdGhpcy5udW1Db21wb25lbnRzID0gaW5mby5udW1Db21wb25lbnRzO1xuICAgIHRoaXMubnVtQXR0cmlidXRlcyA9IGluZm8ubnVtQXR0cmlidXRlcyB8fCAxO1xuICAgIHRoaXMub2Zmc2V0ID0gaW5mby5vZmZzZXQgfHwgMDtcbiAgICB0aGlzLnR5cGUgPSBpbmZvLnR5cGU7XG4gICAgdGhpcy5sb2NhdGlvbiA9IGluZm8ubG9jYXRpb247XG4gICAgdGhpcy5kaXZpc29yID0gaW5mby5kaXZpc29yO1xuICB9XG4gIHNldEF0dHJpYnV0ZSgpIHtcbiAgICBjb25zdCB7IHR5cGUsIGdsIH0gPSB0aGlzO1xuICAgIGNvbnN0IHNldHRlciA9IGF0dHJpYlR5cGVNYXBbdHlwZV07XG4gICAgc2V0dGVyKHRoaXMpO1xuICB9XG4gIGJ1ZmZlckRhdGEoZGF0YSwgYnl0ZUxlbmd0aCwgdXNhZ2UgPSAweDg4ZTQpIHtcbiAgICBjb25zdCB7IGdsLCBidWZmZXIgfSA9IHRoaXM7XG4gICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIGJ1ZmZlcik7XG4gICAgZ2wuYnVmZmVyRGF0YShnbC5BUlJBWV9CVUZGRVIsIGRhdGEgfHwgYnl0ZUxlbmd0aCwgdXNhZ2UpO1xuICB9XG4gIGJ1ZmZlclN1YkRhdGEoZGF0YSwgb2Zmc2V0ID0gMCkge1xuICAgIGNvbnN0IHsgZ2wsIGJ1ZmZlciB9ID0gdGhpcztcbiAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgYnVmZmVyKTtcbiAgICBnbC5idWZmZXJTdWJEYXRhKGdsLkFSUkFZX0JVRkZFUiwgb2Zmc2V0LCBkYXRhKTtcbiAgfVxufVxuXG5leHBvcnQge1xuICBCdWZmZXJBdHRyaWJ1dGUsXG4gIGNyZWF0ZUluZGljZXNCdWZmZXIsXG4gIEF0dHJpYnV0ZVNldHRlcixcbiAgQnVmZmVyQ29udHJvbGxlcixcbn07XG4iLCJpbXBvcnQgeyBtNCB9IGZyb20gXCJtYXRoXCI7XG5cbmNvbnN0IGRlZ1RvUmFkID0gKGQpID0+IChkICogTWF0aC5QSSkgLyAxODA7XG5cbmNvbnN0IGZpZWxkT2ZWaWV3UmFkaWFucyA9IGRlZ1RvUmFkKDkwKTtcblxuY2xhc3MgRHJhd2VyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5jb250ZXh0ID0gbnVsbDtcbiAgICB0aGlzLnByb2plY3Rpb25NYXRyaXggPSBudWxsO1xuICAgIHRoaXMuZmllbGRPZlZpZXdSYWRpYW5zID0gZGVnVG9SYWQoOTApO1xuICB9XG4gIHNldENvbnRleHQoZ2xDb250ZXh0V3JhcHBlcikge1xuICAgIHRoaXMuY29udGV4dCA9IGdsQ29udGV4dFdyYXBwZXI7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgc2V0RmllbGRPZlZpZXcoYW5nbGUpIHtcbiAgICB0aGlzLmZpZWxkT2ZWaWV3UmFkaWFucyA9IGRlZ1RvUmFkKGFuZ2xlKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICB1cGRhdGUzRFByb2plY3Rpb25NYXRyaXgoek5lYXIgPSAwLjAxLCB6RmFyID0gMjAwMCkge1xuICAgIGNvbnN0IHsgZ2wgfSA9IHRoaXMuY29udGV4dDtcbiAgICBjb25zdCBhc3BlY3QgPSBnbC5jYW52YXMuY2xpZW50V2lkdGggLyBnbC5jYW52YXMuY2xpZW50SGVpZ2h0O1xuICAgIHRoaXMucHJvamVjdGlvbk1hdHJpeCA9IG00LnBlcnNwZWN0aXZlKFxuICAgICAgZmllbGRPZlZpZXdSYWRpYW5zLFxuICAgICAgYXNwZWN0LFxuICAgICAgek5lYXIsXG4gICAgICB6RmFyXG4gICAgKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGdldFZpZXdQcm9qZWN0aW9uTWF0cml4KGNhbWVyYU1hdHJpeCkge1xuICAgIGNvbnN0IHsgcHJvamVjdGlvbk1hdHJpeCB9ID0gdGhpcztcbiAgICBjb25zdCB7IGdsIH0gPSB0aGlzLmNvbnRleHQ7XG4gICAgY29uc3Qgdmlld01hdHJpeCA9IG00LmludmVyc2UoY2FtZXJhTWF0cml4KTtcbiAgICByZXR1cm4gbTQubXVsdGlwbHkocHJvamVjdGlvbk1hdHJpeCwgdmlld01hdHJpeCk7XG4gIH1cbiAgZHJhdyhyZW5kZXJJbmZvLCB1bmlmb3JtcywgY2FtZXJhTWF0cml4KSB7XG4gICAgY29uc3Qgdmlld1Byb2plY3Rpb25NYXRyaXggPSB0aGlzLmdldFZpZXdQcm9qZWN0aW9uTWF0cml4KGNhbWVyYU1hdHJpeCk7XG4gICAgY29uc3Qge1xuICAgICAgdmFvLFxuICAgICAgbW9kZSxcbiAgICAgIG9mZnNldCxcbiAgICAgIG51bUVsZW1lbnRzLFxuICAgICAgaW5kaWNlcyxcbiAgICAgIGNvbXBvbmVudFR5cGUsXG4gICAgICBwcm9ncmFtSW5mbyxcbiAgICB9ID0gcmVuZGVySW5mbztcbiAgICBjb25zdCB7IGdsIH0gPSB0aGlzLmNvbnRleHQ7XG5cbiAgICBjb25zdCB1X3dvcmxkVmlld1Byb2plY3Rpb24gPSBtNC5tdWx0aXBseShcbiAgICAgIHZpZXdQcm9qZWN0aW9uTWF0cml4LFxuICAgICAgdW5pZm9ybXMudV9tYXRyaXhcbiAgICApO1xuICBcbiAgICB0aGlzLmNvbnRleHQudXNlUHJvZ3JhbUluZm8ocHJvZ3JhbUluZm8pO1xuICAgIHRoaXMuY29udGV4dFxuICAgICAgLmdldExhc3RVc2VkUHJvZ3JhbUluZm8oKVxuICAgICAgLnNldFVuaWZvcm1zKHsgLi4udW5pZm9ybXMsICB1X3dvcmxkVmlld1Byb2plY3Rpb24gfSk7XG4gICAgaWYgKHZhbykgZ2wuYmluZFZlcnRleEFycmF5KHZhbyk7XG4gICAgaWYgKCFpbmRpY2VzKSB7XG4gICAgICBnbC5kcmF3QXJyYXlzKG1vZGUsIG9mZnNldCwgbnVtRWxlbWVudHMpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBnbC5kcmF3RWxlbWVudHMobW9kZSwgbnVtRWxlbWVudHMsIGNvbXBvbmVudFR5cGUsIG9mZnNldCk7XG4gIH1cbiAgZHJhd0luc3RhbmNlZChyZW5kZXJJbmZvLCB1bmlmb3JtcywgY2FtZXJhTWF0cml4LCBudW1JbnN0YW5jZXMpIHtcbiAgICBjb25zdCB2aWV3UHJvamVjdGlvbk1hdHJpeCA9IHRoaXMuZ2V0Vmlld1Byb2plY3Rpb25NYXRyaXgoY2FtZXJhTWF0cml4KTtcbiAgICBjb25zdCB7IGdsIH0gPSB0aGlzLmNvbnRleHQ7XG4gICAgY29uc3QgeyB2YW8sIG1vZGUsIG9mZnNldCwgbnVtRWxlbWVudHMsIGluZGljZXMsIHByb2dyYW1JbmZvIH0gPSByZW5kZXJJbmZvO1xuICAgIGNvbnN0IHdvcmxkVmlld1Byb2plY3Rpb24gPSBtNC5tdWx0aXBseShcbiAgICAgIHZpZXdQcm9qZWN0aW9uTWF0cml4LFxuICAgICAgdW5pZm9ybXMudV9tYXRyaXhcbiAgICApO1xuICAgIGNvbnN0IHdvcmxkTWF0cml4ID0gdW5pZm9ybXMudV9tYXRyaXg7XG4gICAgdGhpcy5jb250ZXh0LnVzZVByb2dyYW1JbmZvKHByb2dyYW1JbmZvKTtcbiAgICB0aGlzLmNvbnRleHRcbiAgICAgIC5nZXRMYXN0VXNlZFByb2dyYW1JbmZvKClcbiAgICAgIC5zZXRVbmlmb3Jtcyh7IC4uLnVuaWZvcm1zLCB3b3JsZE1hdHJpeCwgd29ybGRWaWV3UHJvamVjdGlvbiB9KTtcbiAgICBnbC5iaW5kVmVydGV4QXJyYXkodmFvKTtcbiAgICBpZiAoIWluZGljZXMpIHtcbiAgICAgIGdsLmRyYXdBcnJheXNJbnN0YW5jZWQobW9kZSwgb2Zmc2V0LCBudW1FbGVtZW50cywgbnVtSW5zdGFuY2VzKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZ2wuZHJhd0VsZW1lbnRzSW5zdGFuY2VkKFxuICAgICAgbW9kZSxcbiAgICAgIG51bUVsZW1lbnRzLFxuICAgICAgZ2wuVU5TSUdORURfU0hPUlQsXG4gICAgICBvZmZzZXQsXG4gICAgICBudW1JbnN0YW5jZXNcbiAgICApO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBEcmF3ZXI7XG4iLCJpbXBvcnQgZ2V0QXR0cmlidXRlUHJvcHNCeVR5cGUgZnJvbSBcIi4vYXR0cmliVHlwZVByb3BzXCI7XG5pbXBvcnQgYXR0cmliVHlwZVByb3BzIGZyb20gXCIuL2F0dHJpYlR5cGVQcm9wc1wiO1xuaW1wb3J0IHsgQnVmZmVyQXR0cmlidXRlIH0gZnJvbSBcIi4vQnVmZmVyQXR0cmlidXRlXCI7XG5jbGFzcyBNZXNoUmVuZGVyZXIge1xuICBjb25zdHJ1Y3Rvcih7IHByaW1pdGl2ZXMsIG5hbWUgfSkge1xuICAgIHRoaXMucHJpbWl0aXZlcyA9IHByaW1pdGl2ZXM7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmNvbnRleHQgPSBudWxsO1xuICAgIHRoaXMuYnVmZmVycyA9IHt9O1xuICB9XG4gIHNldENvbnRleHQoZ2xDb250ZXh0V3JhcHBlcikge1xuICAgIHRoaXMuY29udGV4dCA9IGdsQ29udGV4dFdyYXBwZXI7XG4gICAgZm9yIChsZXQgaSA9IDAsIG4gPSB0aGlzLnByaW1pdGl2ZXMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICB0aGlzLnByaW1pdGl2ZXNbaV0uc2V0Q29udGV4dChnbENvbnRleHRXcmFwcGVyKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgc2V0UHJvZ3JhbUluZm8ocHJvZ3JhbUluZm8pIHtcbiAgICBmb3IgKGxldCBpID0gMCwgbiA9IHRoaXMucHJpbWl0aXZlcy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgIHRoaXMucHJpbWl0aXZlc1tpXS5zZXRQcm9ncmFtSW5mbyhwcm9ncmFtSW5mbyk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIHNldERyYXdlcihkcmF3ZXIpIHtcbiAgICBmb3IgKGxldCBpID0gMCwgbiA9IHRoaXMucHJpbWl0aXZlcy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgIHRoaXMucHJpbWl0aXZlc1tpXS5zZXREcmF3ZXIoZHJhd2VyKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgZHJhdyh1bmlmb3JtcywgY2FtZXJhTWF0cml4KSB7XG4gICAgZm9yIChsZXQgaSA9IDAsIG4gPSB0aGlzLnByaW1pdGl2ZXMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICB0aGlzLnByaW1pdGl2ZXNbaV0uZHJhdyh1bmlmb3JtcywgY2FtZXJhTWF0cml4KTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgZHJhd0luc3RhbmNlZCh1bmlmb3JtcywgY2FtZXJhTWF0cml4LCBudW1JbnN0YW5jZXMpIHtcbiAgICBmb3IgKGxldCBpID0gMCwgbiA9IHRoaXMucHJpbWl0aXZlcy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgIHRoaXMucHJpbWl0aXZlc1tpXS5kcmF3SW5zdGFuY2VkKHVuaWZvcm1zLCBjYW1lcmFNYXRyaXgsIG51bUluc3RhbmNlcyk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIGNyZWF0ZVByaW1pdGl2ZUJ1ZmZlcnMoKSB7XG4gICAgdGhpcy5wcmltaXRpdmVzLmZvckVhY2goKHByaW1pdGl2ZSkgPT4gcHJpbWl0aXZlLmNyZWF0ZUdlb21ldHJ5QnVmZmVycygpKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBjcmVhdGVCdWZmZXJBdHRyaWJEYXRhKG5hbWUsIHR5cGUsIHBhcmFtcykge1xuICAgIGNvbnN0IHsgZ2wgfSA9IHRoaXMuY29udGV4dDtcbiAgICBjb25zdCBhdHRyaWJQcm9wcyA9IGdldEF0dHJpYnV0ZVByb3BzQnlUeXBlKHR5cGUpO1xuICAgIGNvbnN0IGF0dHJpYnV0ZVByb3BzID0geyAuLi5hdHRyaWJQcm9wcywgLi4ucGFyYW1zIH07XG4gICAgY29uc3QgYnVmZmVyQXR0cmliRGF0YSA9IG5ldyBCdWZmZXJBdHRyaWJ1dGUoZ2wsIGF0dHJpYnV0ZVByb3BzKTtcbiAgICB0aGlzLmJ1ZmZlcnMgPSB7IC4uLnRoaXMuYnVmZmVycywgW25hbWVdOiBidWZmZXJBdHRyaWJEYXRhIH07XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgYnVmZmVyRGF0YShidWZmZXJOYW1lLCBkYXRhLCBieXRlTGVuZ3RoKSB7XG4gICAgY29uc3QgYnVmZmVyQXR0cmlidXRlRGVzY3JpcHRvciA9IHRoaXMuYnVmZmVyc1tidWZmZXJOYW1lXTtcblxuICAgIGJ1ZmZlckF0dHJpYnV0ZURlc2NyaXB0b3IuYnVmZmVyRGF0YShkYXRhLCBieXRlTGVuZ3RoKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBidWZmZXJTdWJEYXRhKGJ1ZmZlck5hbWUsIGRhdGEsIG9mZnNldCkge1xuICAgIGNvbnN0IGJ1ZmZlckF0dHJpYnV0ZURlc2NyaXB0b3IgPSB0aGlzLmJ1ZmZlcnNbYnVmZmVyTmFtZV07XG4gICAgYnVmZmVyQXR0cmlidXRlRGVzY3JpcHRvci5idWZmZXJTdWJEYXRhKGRhdGEsIGJ5dGVMZW5ndGgsIG9mZnNldCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgc2V0QXR0cmlidXRlKG5hbWUpIHtcbiAgICBjb25zdCBidWZmZXJBdHRyaWJEYXRhID0gdGhpcy5idWZmZXJzW25hbWVdO1xuICAgIHRoaXMucHJpbWl0aXZlcy5mb3JFYWNoKChwcmltaXRpdmUpID0+XG4gICAgICBwcmltaXRpdmUuc2V0QXR0cmlidXRlKGJ1ZmZlckF0dHJpYkRhdGEpXG4gICAgKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBzZXRQcmltaXRpdmVBdHRyaWJ1dGVzKCkge1xuICAgIGZvciAobGV0IGkgPSAwLCBuID0gdGhpcy5wcmltaXRpdmVzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgdGhpcy5wcmltaXRpdmVzW2ldLnNldEF0dHJpYnV0ZXMoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cbmNsYXNzIFNraW5uZWRNZXNoUmVuZGVyZXIge1xuICBjb25zdHJ1Y3RvcihwcmltaXRpdmVzLCBza2luKSB7XG4gICAgdGhpcy5wcmltaXRpdmVzID0gcHJpbWl0aXZlcztcbiAgICB0aGlzLnNraW4gPSBza2luO1xuICB9XG4gIGRyYXcodW5pZm9ybXMsIGNhbWVyYU1hdHJpeCkge1xuICAgIHRoaXMuc2tpbi51cGRhdGUodW5pZm9ybXMudV9tYXRyaXgpO1xuICAgIGNvbnN0IF91bmlmb3JtcyA9IHtcbiAgICAgIHVfam9pbnRUZXh0dXJlOiB0aGlzLnNraW4uam9pbnRUZXh0dXJlLFxuICAgICAgdV9udW1Kb2ludHM6IHRoaXMuc2tpbi5qb2ludHMubGVuZ3RoLFxuICAgICAgLi4udW5pZm9ybXMsXG4gICAgfTtcbiAgICBmb3IgKGxldCBpID0gMCwgbiA9IHRoaXMucHJpbWl0aXZlcy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgIHRoaXMucHJpbWl0aXZlc1tpXS5kcmF3KF91bmlmb3JtcywgY2FtZXJhTWF0cml4KTtcbiAgICB9XG4gIH1cbn1cbmV4cG9ydCB7IE1lc2hSZW5kZXJlciwgU2tpbm5lZE1lc2hSZW5kZXJlciB9O1xuIiwiXG5cbmNsYXNzIFRSUyB7XG4gIGNvbnN0cnVjdG9yKHRyYW5zbGF0aW9uLCByb3RhdGlvbiwgc2NhbGUpIHtcbiAgICB0aGlzLnRyYW5zbGF0aW9uID0gdHJhbnNsYXRpb247XG4gICAgdGhpcy5yb3RhdGlvbiA9IHJvdGF0aW9uO1xuICAgIHRoaXMuc2NhbGUgPSBzY2FsZTtcbiAgfVxuICBnZXRNYXRyaXgobSkge1xuICAgIGxldCBkc3QgPSBtIHx8IG00LmlkZW50aXR5KCk7XG4gICAgdmFyIHQgPSB0aGlzLnRyYW5zbGF0aW9uO1xuICAgIHZhciByID0gdGhpcy5yb3RhdGlvbjtcbiAgICB2YXIgcyA9IHRoaXMuc2NhbGU7XG4gICAgY29uc3Qgc2luID0gTWF0aC5zaW4oclszXSAvIDIpO1xuICAgIGNvbnN0IGNvcyA9IE1hdGguY29zKHJbM10gLyAyKTtcbiAgICBkc3QgPSBtNC50cmFuc2xhdGUoZHN0LCB0WzBdLCB0WzFdLCB0WzJdKTtcblxuICAgIGRzdCA9IG00Lm11bHRpcGx5KGRzdCwgbTQuZnJvbVF1YXRlcm5pb24ocikpO1xuXG4gICAgZHN0ID0gbTQuc2NhbGUoZHN0LCBzWzBdLCBzWzFdLCBzWzJdKTtcbiAgICByZXR1cm4gZHN0O1xuICB9XG4gIGdldFJNYXRyaXgoKSB7XG4gICAgbGV0IGRzdCA9IG00LmlkZW50aXR5KCk7XG4gICAgdmFyIHIgPSB0aGlzLnJvdGF0aW9uO1xuICAgIGRzdCA9IG00LnhSb3RhdGUoZHN0LCByWzBdKTtcbiAgICBkc3QgPSBtNC55Um90YXRlKGRzdCwgclsxXSk7XG4gICAgZHN0ID0gbTQuelJvdGF0ZShkc3QsIHJbMl0pO1xuICAgIHJldHVybiBkc3Q7XG4gIH1cbiAgZ2V0VFJtYXRyaXgoKSB7XG4gICAgY29uc3QgdCA9IHRoaXMudHJhbnNsYXRpb247XG4gICAgY29uc3QgciA9IHRoaXMucm90YXRpb247XG5cbiAgICBsZXQgbSA9IG00LnRyYW5zbGF0aW9uKCB0WzBdLCB0WzFdLCB0WzJdKTtcblxuICAgIG0gPSBtNC54Um90YXRlKG0sIHJbMF0pO1xuICAgIG0gPSBtNC55Um90YXRlKG0sIHJbMV0pO1xuICAgIG0gPSBtNC56Um90YXRlKG0sIHJbMl0pO1xuICAgIHJldHVybiBtXG4gIH1cbn1cbmNsYXNzIE5vZGUge1xuXG4gIHN0YXRpYyBtYWtlTW9kZWwoZW50aXR5RGVzY3JpcHRpb24sIHJvb3ROb2RlTmR4KSB7XG4gICAgY29uc3QgeyBub2RlcywgbWVzaGVzIH0gPSBlbnRpdHlEZXNjcmlwdGlvbjtcbiAgICBjb25zdCByb290Tm9kZSA9IG5vZGVzW3Jvb3ROb2RlTmR4XTtcbiAgICBjb25zdCBtYWtlTm9kZSA9IChub2RlRGVzY3JpcHRpb24sIG5keCkgPT4ge1xuICAgICAgY29uc3QgdHJzID0gbmV3IFRSUyhcbiAgICAgICAgbm9kZURlc2NyaXB0aW9uLnRyYW5zbGF0aW9uIHx8IFswLCAwLCAwXSxcbiAgICAgICAgbm9kZURlc2NyaXB0aW9uLnJvdGF0aW9uIHx8IFswLCAwLCAwXSxcbiAgICAgICAgbm9kZURlc2NyaXB0aW9uLnNjYWxlIHx8IFsxLCAxLCAxXVxuICAgICAgKTtcbiAgICAgIGNvbnN0IG5vZGUgPSBuZXcgTm9kZShub2RlRGVzY3JpcHRpb24ubmFtZSwgdHJzLCBuZHgpO1xuICAgICAgaWYgKG5vZGVEZXNjcmlwdGlvbi5tZXNoICE9IHVuZGVmaW5lZCkge1xuICAgICAgICBub2RlLnJlbmRlcmVyID0gbWVzaGVzW25vZGVEZXNjcmlwdGlvbi5tZXNoXTtcbiAgICAgIH1cbiAgICAgIGlmIChub2RlRGVzY3JpcHRpb24uY2hpbGRyZW4pIHtcbiAgICAgICAgbm9kZURlc2NyaXB0aW9uLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkTmR4KSA9PiB7XG4gICAgICAgICAgY29uc3QgY2hpbGQgPSBtYWtlTm9kZShub2Rlc1tjaGlsZE5keF0sIGNoaWxkTmR4KTtcbiAgICAgICAgICBjaGlsZC5zZXRQYXJlbnQobm9kZSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfTtcbiAgICByZXR1cm4gbWFrZU5vZGUocm9vdE5vZGUsIHJvb3ROb2RlTmR4KTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKG5hbWUsIHRycyA9IG5ldyBUUlMoKSkge1xuICAgIHRoaXMud29ybGRNYXRyaXggPSBtNC5pZGVudGl0eSgpO1xuICAgIHRoaXMucGFyZW50ID0gbnVsbDtcbiAgICB0aGlzLmNoaWxkcmVuID0gW107XG4gICAgdGhpcy50cnMgPSB0cnM7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnBhcnRzID0gW107XG4gICAgdGhpcy5uZHggPSBuZHg7XG4gICAgdGhpcy5za2luTmR4ID0gbnVsbDtcbiAgICB0aGlzLm9iamVjdHNUb0RyYXcgPSBbXTtcbiAgICB0aGlzLnJlbmRlcmVyID0gbnVsbDtcbiAgfVxuICBzZXRQYXJlbnQocGFyZW50KSB7XG4gICAgaWYgKHRoaXMucGFyZW50KSB7XG4gICAgICBjb25zdCBuZHggPSB0aGlzLnBhcmVudC5jaGlsZHJlbi5pbmRleE9mKHRoaXMpO1xuICAgICAgaWYgKG5keCA+PSAwKSB7XG4gICAgICAgIHRoaXMucGFyZW50LmNoaWxkcmVuLnNwbGljZShuZHgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAocGFyZW50KSB7XG4gICAgICBwYXJlbnQuY2hpbGRyZW4ucHVzaCh0aGlzKTtcbiAgICB9XG4gICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gIH1cbiAgdXBkYXRlV29ybGRNYXRyaXgocGFyZW50V29ybGRNYXRyaXgpIHtcbiAgICBsZXQgbWF0cml4ID0gdGhpcy50cnMuZ2V0TWF0cml4KCk7XG4gICAgaWYgKHBhcmVudFdvcmxkTWF0cml4KSB7XG4gICAgICBtYXRyaXggPSBtNC5tdWx0aXBseShwYXJlbnRXb3JsZE1hdHJpeCwgbWF0cml4KTtcbiAgICB9XG4gICAgdGhpcy53b3JsZE1hdHJpeCA9IG1hdHJpeDtcbiAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICBjaGlsZC51cGRhdGVXb3JsZE1hdHJpeChtYXRyaXgpO1xuICAgIH0pO1xuICB9XG4gIHVwZGF0ZVBhcnRzTGlzdCgpIHtcbiAgICBjb25zdCBpdGVyID0gKG5vZGUsIGFycikgPT4ge1xuICAgICAgYXJyLnB1c2gobm9kZSk7XG4gICAgICBub2RlLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiBpdGVyKGNoaWxkLCBhcnIpKTtcbiAgICB9O1xuICAgIGl0ZXIodGhpcywgdGhpcy5wYXJ0cyk7XG4gIH1cbiAgdXBkYXRlT2JqZWN0c1RvRHJhdygpIHtcbiAgICBjb25zdCBxdWV1ZSA9IFt0aGlzXTtcbiAgICB3aGlsZSAocXVldWUubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3Qgbm9kZSA9IHF1ZXVlLnBvcCgpO1xuICAgICAgY29uc29sZS5sb2cobm9kZSk7XG4gICAgICBpZiAobm9kZS5yZW5kZXJlcikgdGhpcy5vYmplY3RzVG9EcmF3LnB1c2gobm9kZSk7XG4gICAgICBpZiAobm9kZS5jaGlsZHJlbikgcXVldWUucHVzaCguLi5ub2RlLmNoaWxkcmVuKTtcbiAgICB9XG4gIH1cbiAgdHJhdmVyc2UoZm4pIHtcbiAgICBmbih0aGlzKTtcbiAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiBjaGlsZC50cmF2ZXJzZShmbikpO1xuICB9XG4gIGZpbmQobmR4KSB7XG4gICAgbGV0IHJlc3VsdCA9IG51bGw7XG4gICAgY29uc3QgaXRlciA9IChub2RlcykgPT4ge1xuICAgICAgZm9yIChsZXQgbm9kZSBvZiBub2Rlcykge1xuICAgICAgICBpZiAobm9kZS5uZHggPT09IG5keCkgcmVzdWx0ID0gbm9kZTtcbiAgICAgICAgZWxzZSBpdGVyKG5vZGUuY2hpbGRyZW4pO1xuICAgICAgfVxuICAgIH07XG4gICAgaXRlcihbdGhpc10pO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgZmluZEJ5TmFtZShuYW1lKSB7XG4gICAgbGV0IHJlc3VsdCA9IG51bGw7XG4gICAgY29uc3QgaXRlciA9IChub2RlcykgPT4ge1xuICAgICAgZm9yIChsZXQgbm9kZSBvZiBub2Rlcykge1xuICAgICAgICBpZiAobm9kZS5uYW1lID09PSBuYW1lKSByZXN1bHQgPSBub2RlO1xuICAgICAgICBlbHNlIGl0ZXIobm9kZS5jaGlsZHJlbik7XG4gICAgICB9XG4gICAgfTtcbiAgICBpdGVyKFt0aGlzXSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICByZW5kZXIodW5pZm9ybXMsIGNhbWVyYU1hdHJpeCkge1xuICAgIHRoaXMub2JqZWN0c1RvRHJhdy5mb3JFYWNoKChvYmplY3QpID0+IHtcbiAgICAgIG9iamVjdC5yZW5kZXJlci5kcmF3KFxuICAgICAgICB7IC4uLnVuaWZvcm1zLCB1X21hdHJpeDogb2JqZWN0LndvcmxkTWF0cml4IH0sXG4gICAgICAgIGNhbWVyYU1hdHJpeFxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxufVxuXG5cblxuXG5jbGFzcyBNb2RlbCBleHRlbmRzIE5vZGUge1xuICBzdGF0aWMgbWFrZU1vZGVsKGVudGl0eURlc2NyaXB0aW9uLCByb290Tm9kZU5keCkge1xuICAgIGNvbnN0IHsgbm9kZXMsIG1lc2hlcyB9ID0gZW50aXR5RGVzY3JpcHRpb247XG4gICAgY29uc3Qgcm9vdE5vZGUgPSBub2Rlc1tyb290Tm9kZU5keF07XG4gICAgY29uc3QgbWFrZU5vZGUgPSAobm9kZURlc2NyaXB0aW9uLCBuZHgpID0+IHtcbiAgICAgIGNvbnN0IHRycyA9IG5ldyBUUlMoXG4gICAgICAgIG5vZGVEZXNjcmlwdGlvbi50cmFuc2xhdGlvbiB8fCBbMCwgMCwgMF0sXG4gICAgICAgIG5vZGVEZXNjcmlwdGlvbi5yb3RhdGlvbiB8fCBbMCwgMCwgMCwgMF0sXG4gICAgICAgIG5vZGVEZXNjcmlwdGlvbi5zY2FsZSB8fCBbMSwgMSwgMV1cbiAgICAgICk7XG4gICAgICBjb25zdCBub2RlID0gbmV3IEVudGl0eShub2RlRGVzY3JpcHRpb24ubmFtZSwgdHJzLCBuZHgpO1xuICAgICAgaWYgKG5vZGVEZXNjcmlwdGlvbi5tZXNoICE9IHVuZGVmaW5lZCkge1xuICAgICAgICBub2RlLnJlbmRlcmVyID0gbWVzaGVzW25vZGVEZXNjcmlwdGlvbi5tZXNoXTtcbiAgICAgIH1cbiAgICAgIGlmIChub2RlRGVzY3JpcHRpb24uY2hpbGRyZW4pIHtcbiAgICAgICAgbm9kZURlc2NyaXB0aW9uLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkTmR4KSA9PiB7XG4gICAgICAgICAgY29uc3QgY2hpbGQgPSBtYWtlTm9kZShub2Rlc1tjaGlsZE5keF0sIGNoaWxkTmR4KTtcbiAgICAgICAgICBjaGlsZC5zZXRQYXJlbnQobm9kZSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfTtcbiAgICByZXR1cm4gbWFrZU5vZGUocm9vdE5vZGUsIHJvb3ROb2RlTmR4KTtcbiAgfVxuICBjb25zdHJ1Y3RvcihuYW1lLCB0cnMsIG5keCkge1xuICAgIHN1cGVyKG5hbWUsIHRycyk7XG4gICAgdGhpcy5uZHggPSBuZHg7XG4gICAgdGhpcy5waHlzaWNzID0gbnVsbDtcbiAgICB0aGlzLnNraW5OZHggPSBudWxsO1xuICAgIHRoaXMub2JqZWN0c1RvRHJhdyA9IFtdO1xuICAgIHRoaXMucmVuZGVyZXIgPSBudWxsO1xuICB9XG4gIHVwZGF0ZU9iamVjdHNUb0RyYXcoKSB7XG4gICAgY29uc3QgcXVldWUgPSBbdGhpc107XG4gICAgd2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IG5vZGUgPSBxdWV1ZS5wb3AoKTtcbiAgICAgIGNvbnNvbGUubG9nKG5vZGUpO1xuICAgICAgaWYgKG5vZGUucmVuZGVyZXIpIHRoaXMub2JqZWN0c1RvRHJhdy5wdXNoKG5vZGUpO1xuICAgICAgaWYgKG5vZGUuY2hpbGRyZW4pIHF1ZXVlLnB1c2goLi4ubm9kZS5jaGlsZHJlbik7XG4gICAgfVxuICB9XG4gIHRyYXZlcnNlKGZuKSB7XG4gICAgZm4odGhpcyk7XG4gICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4gY2hpbGQudHJhdmVyc2UoZm4pKTtcbiAgfVxuICBmaW5kKG5keCkge1xuICAgIGxldCByZXN1bHQgPSBudWxsO1xuICAgIGNvbnN0IGl0ZXIgPSAobm9kZXMpID0+IHtcbiAgICAgIGZvciAobGV0IG5vZGUgb2Ygbm9kZXMpIHtcbiAgICAgICAgaWYgKG5vZGUubmR4ID09PSBuZHgpIHJlc3VsdCA9IG5vZGU7XG4gICAgICAgIGVsc2UgaXRlcihub2RlLmNoaWxkcmVuKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGl0ZXIoW3RoaXNdKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIGZpbmRCeU5hbWUobmFtZSkge1xuICAgIGxldCByZXN1bHQgPSBudWxsO1xuICAgIGNvbnN0IGl0ZXIgPSAobm9kZXMpID0+IHtcbiAgICAgIGZvciAobGV0IG5vZGUgb2Ygbm9kZXMpIHtcbiAgICAgICAgaWYgKG5vZGUubmFtZSA9PT0gbmFtZSkgcmVzdWx0ID0gbm9kZTtcbiAgICAgICAgZWxzZSBpdGVyKG5vZGUuY2hpbGRyZW4pO1xuICAgICAgfVxuICAgIH07XG4gICAgaXRlcihbdGhpc10pO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgcmVuZGVyKHVuaWZvcm1zLCBjYW1lcmFNYXRyaXgpIHtcbiAgICB0aGlzLm9iamVjdHNUb0RyYXcuZm9yRWFjaCgob2JqZWN0KSA9PiB7XG4gICAgICBvYmplY3QucmVuZGVyZXIuZHJhdyhcbiAgICAgICAgeyAuLi51bmlmb3JtcywgdV9tYXRyaXg6IG9iamVjdC53b3JsZE1hdHJpeCB9LFxuICAgICAgICBjYW1lcmFNYXRyaXhcbiAgICAgICk7XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTW9kZWw7XG4iLCJpbXBvcnQge1xuICBjcmVhdGVJbmRpY2VzQnVmZmVyLFxuICBCdWZmZXJBdHRyaWJ1dGUsXG4gIER5bmFtaWNCdWZmZXJBdHRyaWJEZXNjcmlwdG9yLFxuICBCdWZmZXJDb250cm9sbGVyLFxuICBBdHRyaWJ1dGVTZXR0ZXIsXG59IGZyb20gXCIuL0J1ZmZlckF0dHJpYnV0ZVwiO1xuaW1wb3J0IHsgRUxFTUVOVF9TSVpFIH0gZnJvbSBcIi4vZW51bXNcIjtcbmltcG9ydCB7IGdldEdMVHlwZUZvclR5cGVkQXJyYXkgfSBmcm9tIFwiLi9wcm9ncmFtSW5mb1wiO1xuaW1wb3J0IGdldEF0dHJpYnV0ZVByb3BzQnlUeXBlIGZyb20gXCIuL2F0dHJpYlR5cGVQcm9wc1wiO1xuXG5jbGFzcyBQcmltaXRpdmVSZW5kZXJlciB7XG4gIGNvbnN0cnVjdG9yKGFycmF5RGF0YSkge1xuICAgIHRoaXMuYnVmZmVycyA9IHt9O1xuICAgIHRoaXMucHJvZ3JhbUluZm8gPSBudWxsO1xuICAgIHRoaXMuY29udGV4dCA9IG51bGw7XG4gICAgdGhpcy5kcmF3ZXIgPSBudWxsO1xuICAgIHRoaXMubW9kZSA9IG51bGw7XG4gICAgdGhpcy5vZmZzZXQgPSBudWxsO1xuICAgIHRoaXMubnVtRWxlbWVudHMgPSBudWxsO1xuICAgIHRoaXMudmFvID0gbnVsbDtcbiAgICB0aGlzLmNvbXBvbmVudFR5cGUgPSBudWxsO1xuICAgIHRoaXMuYXJyYXlEYXRhID0gYXJyYXlEYXRhO1xuICAgIGNvbnN0IHtjb21wb25lbnRUeXBlLCBudW1FbGVtZW50cywgbW9kZSB9ID0gYXJyYXlEYXRhO1xuICAgIHRoaXMubnVtRWxlbWVudHMgPSBudW1FbGVtZW50cztcbiAgICB0aGlzLm1vZGUgPSBtb2RlO1xuICAgIHRoaXMuY29tcG9uZW50VHlwZSA9IGNvbXBvbmVudFR5cGUgfHwgNTEyMztcbiAgfVxuICBzZXRDb250ZXh0KGdsQ29udGV4dFdyYXBwZXIpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBnbENvbnRleHRXcmFwcGVyO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIGNyZWF0ZVZBTygpIHtcbiAgICBpZiAodGhpcy52YW8pIHJldHVybjtcbiAgICB0aGlzLnZhbyA9IHRoaXMuY29udGV4dC5nbC5jcmVhdGVWZXJ0ZXhBcnJheSgpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIHNldE1vZGUobW9kZSl7XG4gICAgdGhpcy5tb2RlID0gbW9kZVxuICAgIHJldHVybiB0aGlzXG4gIH1cbiAgY3JlYXRlR2VvbWV0cnlCdWZmZXJzKCkge1xuICAgIGNvbnN0IHsgYXJyYXlEYXRhIH0gPSB0aGlzO1xuICAgIGNvbnN0IHsgZ2wgfSA9IHRoaXMuY29udGV4dDtcbiAgICBjb25zdCB7IGF0dHJpYnV0ZXMsIGluZGljZXMsIGNvbXBvbmVudFR5cGUsIG51bUVsZW1lbnRzLCBtb2RlIH0gPSBhcnJheURhdGE7XG4gICBcblxuICAgIGlmIChhdHRyaWJ1dGVzKSB7XG4gICAgICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKChhdHRyaWJ1dGVOYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICBzdHJpZGUsXG4gICAgICAgICAgdHlwZSxcbiAgICAgICAgICBvZmZzZXQsXG4gICAgICAgICAgbG9jYXRpb24sXG4gICAgICAgICAgbnVtQ29tcG9uZW50cyxcbiAgICAgICAgICBudW1BdHRyaWJ1dGVzLFxuICAgICAgICAgIGRhdGEsXG4gICAgICAgICAgc2l6ZSxcbiAgICAgICAgfSA9IGF0dHJpYnV0ZXNbYXR0cmlidXRlTmFtZV07XG4gICAgICAgIGNvbnN0IGJ1ZmZlckF0dHJpYnV0ZURlc2NyaXB0b3IgPSBuZXcgQnVmZmVyQXR0cmlidXRlKGdsLCB7XG4gICAgICAgICAgc3RyaWRlLFxuICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgb2Zmc2V0LFxuICAgICAgICAgIGxvY2F0aW9uLFxuICAgICAgICAgIG51bUF0dHJpYnV0ZXMsXG4gICAgICAgICAgbnVtQ29tcG9uZW50cyxcbiAgICAgICAgICBzaXplLFxuICAgICAgICB9KTtcbiAgICAgICAgYnVmZmVyQXR0cmlidXRlRGVzY3JpcHRvci5idWZmZXJEYXRhKGRhdGEpO1xuICAgICAgICB0aGlzLmJ1ZmZlcnMgPSB7XG4gICAgICAgICAgLi4udGhpcy5idWZmZXJzLFxuICAgICAgICAgIFthdHRyaWJ1dGVOYW1lXTogYnVmZmVyQXR0cmlidXRlRGVzY3JpcHRvcixcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoaW5kaWNlcykge1xuICAgICAgY29uc3QgaW5kaWNlc0J1ZmZlciA9IGdsLmNyZWF0ZUJ1ZmZlcigpO1xuICAgICAgZ2wuYmluZEJ1ZmZlcihnbC5FTEVNRU5UX0FSUkFZX0JVRkZFUiwgaW5kaWNlc0J1ZmZlcik7XG4gICAgICBnbC5idWZmZXJEYXRhKGdsLkVMRU1FTlRfQVJSQVlfQlVGRkVSLCBpbmRpY2VzLCBnbC5TVEFUSUNfRFJBVyk7XG4gICAgICB0aGlzLmluZGljZXMgPSBpbmRpY2VzQnVmZmVyO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBzZXRBdHRyaWJ1dGVzKCkge1xuICAgIGNvbnN0IHsgZ2wgfSA9IHRoaXMuY29udGV4dDtcblxuICAgIGdsLmJpbmRWZXJ0ZXhBcnJheSh0aGlzLnZhbyk7XG4gICAgZm9yIChjb25zdCBhdHRyaWIgaW4gdGhpcy5idWZmZXJzKSB7XG4gICAgICBjb25zdCBidWZmZXJBdHRyaWJ1dGVEZXNjcmlwdG9yID0gdGhpcy5idWZmZXJzW2F0dHJpYl07XG4gICAgICBidWZmZXJBdHRyaWJ1dGVEZXNjcmlwdG9yLnNldEF0dHJpYnV0ZSgpO1xuICAgIH1cbiAgICBnbC5iaW5kQnVmZmVyKGdsLkVMRU1FTlRfQVJSQVlfQlVGRkVSLCB0aGlzLmluZGljZXMpO1xuICAgIGdsLmJpbmRWZXJ0ZXhBcnJheShudWxsKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIHNldERyYXdlcihkcmF3ZXIpIHtcbiAgICB0aGlzLmRyYXdlciA9IGRyYXdlcjtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBzZXRQcm9ncmFtSW5mbyhwcm9ncmFtSW5mbykge1xuICAgIHRoaXMucHJvZ3JhbUluZm8gPSBwcm9ncmFtSW5mbztcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBjcmVhdGVCdWZmZXJBdHRyaWJEYXRhKG5hbWUsIHR5cGUsIHBhcmFtcykge1xuICAgIGNvbnN0IHsgZ2wgfSA9IHRoaXMuY29udGV4dDtcbiAgICBjb25zdCBhdHRyaWJQcm9wcyA9IGdldEF0dHJpYnV0ZVByb3BzQnlUeXBlKHR5cGUpO1xuICAgIGNvbnN0IGF0dHJpYnV0ZVByb3BzID0geyAuLi5hdHRyaWJQcm9wcywgLi4ucGFyYW1zIH07XG4gICAgY29uc3QgYnVmZmVyQXR0cmliRGF0YSA9IG5ldyBCdWZmZXJBdHRyaWJ1dGUoZ2wsIGF0dHJpYnV0ZVByb3BzKTtcbiAgICB0aGlzLmJ1ZmZlcnMgPSB7IC4uLnRoaXMuYnVmZmVycywgW25hbWVdOiBidWZmZXJBdHRyaWJEYXRhIH07XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgc2V0QnVmZmVyQXR0cmliRGF0YShuYW1lLCBidWZmZXJBdHRyaWJEYXRhKSB7XG4gICAgdGhpcy5idWZmZXJzID0geyAuLi50aGlzLmJ1ZmZlcnMsIFtuYW1lXTogYnVmZmVyQXR0cmliRGF0YSB9O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIHNldE93bkF0dHJpYnV0ZShuYW1lLCBkaXZpc29yKSB7XG4gICAgY29uc3QgeyBnbCB9ID0gdGhpcy5jb250ZXh0O1xuICAgIGNvbnN0IGJ1ZmZlckF0dHJpYkRhdGEgPSB0aGlzLmJ1ZmZlcnNbbmFtZV07XG4gICAgZ2wuYmluZFZlcnRleEFycmF5KHRoaXMudmFvKTtcbiAgICBidWZmZXJBdHRyaWJEYXRhLnNldEF0dHJpYnV0ZShkaXZpc29yKTtcbiAgICBnbC5iaW5kVmVydGV4QXJyYXkobnVsbCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgc2V0QXR0cmlidXRlKGJ1ZmZlckF0dHJpYkRhdGEpIHtcbiAgICBjb25zdCB7IGdsIH0gPSB0aGlzLmNvbnRleHQ7XG4gICAgZ2wuYmluZFZlcnRleEFycmF5KHRoaXMudmFvKTtcbiAgICBidWZmZXJBdHRyaWJEYXRhLnNldEF0dHJpYnV0ZSgpO1xuICAgIGdsLmJpbmRWZXJ0ZXhBcnJheShudWxsKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBidWZmZXJEYXRhKGJ1ZmZlck5hbWUsIGRhdGEsIGJ5dGVMZW5ndGgsIHVzYWdlKSB7XG4gICAgY29uc3QgYnVmZmVyQXR0cmliRGF0YSA9IHRoaXMuYnVmZmVyc1tidWZmZXJOYW1lXTtcbiAgICBidWZmZXJBdHRyaWJEYXRhLmJ1ZmZlckRhdGEoZGF0YSwgYnl0ZUxlbmd0aCwgdXNhZ2UpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIGJ1ZmZlclN1YkRhdGEoYnVmZmVyTmFtZSwgZGF0YSwgb2Zmc2V0KSB7XG4gICAgY29uc3QgYnVmZmVyRGVzYyA9IHRoaXMuYnVmZmVyc1tidWZmZXJOYW1lXTtcbiAgICBidWZmZXJEZXNjLmJ1ZmZlclN1YkRhdGEoZGF0YSwgb2Zmc2V0KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBkcmF3KHVuaWZvcm1zLCBjYW1lcmFNYXRyaXgpIHtcbiAgICB0aGlzLmRyYXdlci5kcmF3KHRoaXMsIHVuaWZvcm1zLCBjYW1lcmFNYXRyaXgpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIGRyYXdJbnN0YW5jZWQodW5pZm9ybXMsIGNhbWVyYU1hdHJpeCwgbnVtSW5zdGFuY2VzKSB7XG4gICAgdGhpcy5kcmF3ZXIuZHJhd0luc3RhbmNlZCh0aGlzLCB1bmlmb3JtcywgY2FtZXJhTWF0cml4LCBudW1JbnN0YW5jZXMpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByaW1pdGl2ZVJlbmRlcmVyO1xuIiwiY29uc3QgcHJvcHMgPSB7XG4gIG1hdDQ6IHtcbiAgICBzdHJpZGU6IDY0LFxuICAgIGJ5dGVMZW5ndGg6IDY0LFxuICAgIHR5cGU6IDB4MTQwNixcbiAgICBudW1BdHRyaWJ1dGVzOiA0LFxuICAgIG51bUNvbXBvbmVudHM6IDQsXG4gIH0sXG4gIHZlYzM6IHtcbiAgICBudW1Db21wb25lbnRzOiAzLFxuICAgIHR5cGU6IDB4MTQwNixcbiAgICBudW1BdHRyaWJ1dGVzOiAxLFxuICB9LFxufTtcbmNvbnN0IGdldEF0dHJpYnV0ZVByb3BzQnlUeXBlID0gKHR5cGUpID0+IHByb3BzW3R5cGVdO1xuZXhwb3J0IGRlZmF1bHQgZ2V0QXR0cmlidXRlUHJvcHNCeVR5cGU7XG4iLCJjb25zdCBUWVBFRF9BUlJBWVMgPSB7XG4gICAgJzUxMjAnOiBJbnQ4QXJyYXksICAgIFxuICAgICc1MTIxJzogVWludDhBcnJheSwgICBcbiAgICAnNTEyMic6IEludDE2QXJyYXksICAgXG4gICAgJzUxMjMnOiBVaW50MTZBcnJheSwgIFxuICAgICc1MTI0JzogSW50MzJBcnJheSwgICBcbiAgICAnNTEyNSc6IFVpbnQzMkFycmF5LCAgXG4gICAgJzUxMjYnOiBGbG9hdDMyQXJyYXksIFxufVxuY29uc3QgTlVNX0NPTVBPTkVOVFMgPSB7XG4gICAgJ1NDQUxBUicgOiAxLFxuICAgICdWRUMyJyA6IDIsXG4gICAgJ1ZFQzMnIDogMyxcbiAgICAnVkVDNCcgOiA0LFxuICAgICdNQVQyJzogNCxcbiAgJ01BVDMnOiA5LFxuICAnTUFUNCc6IDE2LFxufVxuY29uc3QgTE9DQVRJT05TID0ge1xuICAgICdQT1NJVElPTicgOiAwLFxuICAgICdOT1JNQUwnIDogMSxcbiAgICAnV0VJR0hUU18wJyA6IDIsXG4gICAgJ0pPSU5UU18wJyA6IDMsXG4gICAgJ1RFWENPT1JEXzAnIDogNCxcbn1cbmNvbnN0IEVMRU1FTlRfU0laRSA9IHtcbiAgICAweDE0MDYgOiA0XG59XG5leHBvcnQge1xuICAgIExPQ0FUSU9OUywgTlVNX0NPTVBPTkVOVFMsIFRZUEVEX0FSUkFZUywgRUxFTUVOVF9TSVpFXG59IiwiaW1wb3J0IHsgVGV4dHVyZUluZm8gfSBmcm9tIFwiLi90ZXh0dXJlSW5mb1wiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR0xjb250ZXh0V3JhcHBlciB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzX2lkKSB7XG4gICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtjYW52YXNfaWR9YCk7XG4gICAgICBjb25zdCBnbCA9IGNhbnZhcy5nZXRDb250ZXh0KFwid2ViZ2wyXCIpO1xuICBcbiAgICAgIGlmICghZ2wpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gd2ViZ2whXCIpO1xuICAgICAgfVxuICAgICAgdGhpcy5nbCA9IGdsO1xuICAgICAgdGhpcy50ZXh0dXJlcyA9IHt9O1xuICAgICAgdGhpcy5yZW5kZXJDYWNoZSA9IHtcbiAgICAgICAgbGFzdFVzZWRQcm9ncmFtSW5mbzogbnVsbCxcbiAgICAgIH07XG4gICAgICB0aGlzLnByb2dyYW1zID0ge307XG4gICAgfVxuICAgIGdldExhc3RVc2VkUHJvZ3JhbUluZm8oKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJDYWNoZS5sYXN0VXNlZFByb2dyYW1JbmZvO1xuICAgIH1cbiAgICBzZXRMYXN0VXNlZFByb2dyYW0ocHJvZ3JhbUluZm8pIHtcbiAgICAgIHRoaXMucmVuZGVyQ2FjaGUubGFzdFVzZWRQcm9ncmFtSW5mbyA9IHByb2dyYW1JbmZvO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHVzZVByb2dyYW1JbmZvKHByb2dyYW1JbmZvKSB7XG4gICAgICBpZiAocHJvZ3JhbUluZm8gIT0gdGhpcy5nZXRMYXN0VXNlZFByb2dyYW1JbmZvKCkpIHtcbiAgICAgICAgdGhpcy5nbC51c2VQcm9ncmFtKHByb2dyYW1JbmZvLnByb2dyYW0pO1xuICAgICAgICB0aGlzLnNldExhc3RVc2VkUHJvZ3JhbShwcm9ncmFtSW5mbyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgcmVzaXplQ2FudmFzVG9EaXNwbGF5U2l6ZShtdWx0aXBsaWVyID0gMSkge1xuICAgICAgY29uc3QgY2FudmFzID0gdGhpcy5nbC5jYW52YXM7XG4gICAgICBjb25zdCB3aWR0aCA9IChjYW52YXMuY2xpZW50V2lkdGggKiBtdWx0aXBsaWVyKSB8IDA7XG4gICAgICBjb25zdCBoZWlnaHQgPSAoY2FudmFzLmNsaWVudEhlaWdodCAqIG11bHRpcGxpZXIpIHwgMDtcbiAgXG4gICAgICBjYW52YXMud2lkdGggPSB3aWR0aDtcbiAgICAgIGNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgcmVzaXplQ2FudmFzKHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgIGNvbnN0IGNhbnZhcyA9IHRoaXMuZ2wuY2FudmFzO1xuICAgICAgY2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgICBjYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGdldENvbnRleHQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5nbDtcbiAgICB9XG4gICAgZ2V0Q2FudmFzUmVjdCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmdsLmNhbnZhcy5nZXRCb3VuZGluO1xuICAgIH1cbiAgICBjcmVhdGVUZXh0dXJlSW5mbyh0ZXh0dXJlTmFtZSkge1xuICAgICAgY29uc3QgdGV4dHVyZSA9IG5ldyBUZXh0dXJlSW5mbyh0aGlzLmdsKTtcbiAgICAgIHRoaXMudGV4dHVyZXMgPSB7IC4uLnRoaXMudGV4dHVyZXMsIFt0ZXh0dXJlTmFtZV06IHRleHR1cmUgfTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBnZXRUZXh0dXJlKHRleHR1cmVOYW1lKSB7XG4gICAgICByZXR1cm4gdGhpcy50ZXh0dXJlc1t0ZXh0dXJlTmFtZV07XG4gICAgfVxuICAgIHNldFRleHR1cmVVbml0KHRleHR1cmVOYW1lLCB1bml0TnVtKSB7XG4gICAgICBjb25zdCB0ZXh0dXJlID0gdGhpcy5nZXRUZXh0dXJlKHRleHR1cmVOYW1lKS50ZXh0dXJlO1xuICAgICAgc2V0VGV4dHVyZVVuaXRzKHRoaXMuZ2wsIHRleHR1cmUsIHVuaXROdW0pO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9IiwiaW1wb3J0IFByaW1pdGl2ZVJlbmRlcmVyIGZyb20gXCIuL1ByaW1pdGl2ZVJlbmRlcmVyXCI7XG5pbXBvcnQgeyBNZXNoUmVuZGVyZXIgfSBmcm9tIFwiLi9NZXNoUmVuZGVyZXJcIjtcbmltcG9ydCB7IEF0dHJpYnV0ZVNldHRlciwgQnVmZmVyQ29udHJvbGxlciB9IGZyb20gXCIuL0J1ZmZlckF0dHJpYnV0ZVwiO1xuaW1wb3J0IHsgTlVNX0NPTVBPTkVOVFMsIFRZUEVEX0FSUkFZUywgTE9DQVRJT05TIH0gZnJvbSBcIi4vZW51bXNcIjtcblxuY29uc3QgQXJyYXlEYXRhRnJvbUdsdGYgPSAoZ2x0ZiwgYnVmZmVycykgPT4ge1xuICBjb25zdCB7IGJ1ZmZlclZpZXdzLCBhY2Nlc3NvcnMsIG1lc2hlcywgbm9kZXMgfSA9IGdsdGY7XG4gIGNvbnN0IGF0dHJpYkRhdGFGcm9tQWNjZXNzb3IgPSAoYWNjZXNzb3IpID0+IHtcbiAgICBjb25zdCBidWZmZXJWaWV3ID0gYnVmZmVyVmlld3NbYWNjZXNzb3IuYnVmZmVyVmlld107XG4gICAgY29uc3QgeyBjb3VudCwgY29tcG9uZW50VHlwZSwgdHlwZSB9ID0gYWNjZXNzb3I7XG4gICAgY29uc3QgYnl0ZU9mZnNldCA9IGFjY2Vzc29yLmJ5dGVPZmZzZXQgfHwgMDtcbiAgICBjb25zdCB7IGJ5dGVMZW5ndGgsIHRhcmdldCB9ID0gYnVmZmVyVmlldztcbiAgICBjb25zdCBzdHJpZGUgPSBidWZmZXJWaWV3LmJ5dGVTdHJpZGUgfHwgMDtcbiAgICBjb25zdCBidWZmZXJWaWV3Qnl0ZU9mZnNldCA9IGJ1ZmZlclZpZXcuYnl0ZU9mZnNldCB8fCAwO1xuICAgIGNvbnN0IGJ1ZmZlciA9IGJ1ZmZlcnNbYnVmZmVyVmlldy5idWZmZXJdO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGRhdGE6IG5ldyBVaW50OEFycmF5KGJ1ZmZlciwgYnVmZmVyVmlld0J5dGVPZmZzZXQsIGJ5dGVMZW5ndGgpLFxuICAgICAgbnVtQ29tcG9uZW50czogTlVNX0NPTVBPTkVOVFNbdHlwZV0sXG4gICAgICBzdHJpZGUsXG4gICAgICBieXRlTGVuZ3RoLFxuICAgICAgbG9jYXRpb246IG51bGwsXG4gICAgICBjb3VudCxcbiAgICAgIHR5cGU6IGNvbXBvbmVudFR5cGUsXG4gICAgICBvZmZzZXQ6IGJ5dGVPZmZzZXQgfHwgMCxcbiAgICAgIGNvbXBvbmVudFR5cGU6IGFjY2Vzc29yLmNvbXBvbmVudFR5cGUsXG4gICAgfTtcbiAgfTtcbiAgY29uc3QgX21lc2hlcyA9IG1lc2hlcy5tYXAoKG1lc2gpID0+ICh7XG4gICAgcHJpbWl0aXZlczogbWVzaC5wcmltaXRpdmVzLm1hcCgoX3ByaW1pdGl2ZSkgPT4ge1xuICAgICAgY29uc3QgcHJpbWl0aXZlID0ge1xuICAgICAgICBhdHRyaWJ1dGVzOiB7fSxcbiAgICAgICAgbW9kZTogX3ByaW1pdGl2ZS5tb2RlLFxuICAgICAgfTtcbiAgICAgIGlmIChfcHJpbWl0aXZlLmhhc093blByb3BlcnR5KFwiaW5kaWNlc1wiKSkge1xuICAgICAgICBjb25zdCBpbmRpY2VzSW5mbyA9IGF0dHJpYkRhdGFGcm9tQWNjZXNzb3IoXG4gICAgICAgICAgYWNjZXNzb3JzW19wcmltaXRpdmUuaW5kaWNlc11cbiAgICAgICAgKTtcbiAgICAgICAgcHJpbWl0aXZlLmluZGljZXMgPSBpbmRpY2VzSW5mby5kYXRhO1xuICAgICAgICBwcmltaXRpdmUubnVtRWxlbWVudHMgPSBpbmRpY2VzSW5mby5jb3VudDtcbiAgICAgICAgcHJpbWl0aXZlLmNvbXBvbmVudFR5cGUgPSBpbmRpY2VzSW5mby5jb21wb25lbnRUeXBlO1xuICAgICAgfVxuICAgICAgT2JqZWN0LmtleXMoX3ByaW1pdGl2ZS5hdHRyaWJ1dGVzKS5mb3JFYWNoKChhdHRyaWJOYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IGF0dHJpYnV0ZSA9IF9wcmltaXRpdmUuYXR0cmlidXRlc1thdHRyaWJOYW1lXTtcbiAgICAgICAgcHJpbWl0aXZlLmF0dHJpYnV0ZXNbYXR0cmliTmFtZV0gPSBhdHRyaWJEYXRhRnJvbUFjY2Vzc29yKFxuICAgICAgICAgIGFjY2Vzc29yc1thdHRyaWJ1dGVdXG4gICAgICAgICk7XG4gICAgICAgIC8vaWYoYXR0cmliTmFtZSA9PT0gJ0pPSU5UU18wJykgX3ByaW1pdGl2ZS5hdHRyaWJ1dGVzW2F0dHJpYk5hbWVdLmRhdGEgPSBuZXcgVWludDMyQXJyYXkoX3ByaW1pdGl2ZS5hdHRyaWJ1dGVzW2F0dHJpYk5hbWVdLmRhdGEpXG4gICAgICAgIHByaW1pdGl2ZS5hdHRyaWJ1dGVzW2F0dHJpYk5hbWVdLmxvY2F0aW9uID0gTE9DQVRJT05TW2F0dHJpYk5hbWVdO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gcHJpbWl0aXZlO1xuICAgIH0pLFxuICAgIG5hbWU6IG1lc2gubmFtZSxcbiAgfSkpO1xuXG4gIHJldHVybiBfbWVzaGVzLm1hcCgobWVzaCkgPT4ge1xuICAgIGNvbnN0IHByaW1pdGl2ZXMgPSBtZXNoLnByaW1pdGl2ZXMubWFwKFxuICAgICAgKHByaW1pdGl2ZSkgPT4gbmV3IFByaW1pdGl2ZVJlbmRlcmVyKHByaW1pdGl2ZSlcbiAgICApO1xuICAgIGNvbnN0IG5hbWUgPSBtZXNoLm5hbWU7XG5cbiAgICByZXR1cm4gbmV3IE1lc2hSZW5kZXJlcih7IHByaW1pdGl2ZXMsIG5hbWUgfSk7XG4gIH0pO1xufTtcblxuY29uc3QgUHJpbWl0aXZlUmVuZGVySW5mb0Zyb21BcnJheURhdGEgPSAobWVzaGVzKSA9PlxuICBtZXNoZXMubWFwKChtZXNoKSA9PiB7XG4gICAgY29uc3QgcHJpbWl0aXZlcyA9IG1lc2gucHJpbWl0aXZlcy5tYXAoXG4gICAgICAocHJpbWl0aXZlKSA9PiBuZXcgUHJpbWl0aXZlUmVuZGVyZXIocHJpbWl0aXZlKVxuICAgICk7XG4gICAgY29uc3QgbmFtZSA9IG1lc2gubmFtZTtcbiAgICByZXR1cm4gbmV3IE1lc2hSZW5kZXJlcih7IG5hbWUsIHByaW1pdGl2ZXMgfSk7XG4gIH0pO1xuXG5jb25zdCBFbnRpdHlEYXRhRnJvbUdsdGYgPSAoZ2x0ZiwgYnVmZmVycykgPT5cbiAgUHJpbWl0aXZlUmVuZGVySW5mb0Zyb21BcnJheURhdGEoQXJyYXlEYXRhRnJvbUdsdGYoZ2x0ZiwgYnVmZmVycykpO1xuXG5jbGFzcyBHTFRGIHtcbiAgY29uc3RydWN0b3IoZ2x0ZiwgYmluYXJ5QnVmZmVycykge1xuICAgIGNvbnN0IHsgbm9kZXMgfSA9IGdsdGY7XG4gICAgdGhpcy5ub2RlcyA9IG5vZGVzO1xuICAgIHRoaXMubWVzaGVzID0gQXJyYXlEYXRhRnJvbUdsdGYoZ2x0ZiwgYmluYXJ5QnVmZmVycyk7XG4gIH1cbn1cbmV4cG9ydCB7XG4gIEFycmF5RGF0YUZyb21HbHRmLFxuICBQcmltaXRpdmVSZW5kZXJJbmZvRnJvbUFycmF5RGF0YSxcbiAgRW50aXR5RGF0YUZyb21HbHRmLFxuICBHTFRGLFxufTtcbiIsImltcG9ydCB7IGV4cGFuZGVkVHlwZWRBcnJheSB9IGZyb20gXCIuL3Byb2dyYW1JbmZvLmpzXCI7XG5pbXBvcnQgeyBjcm9zcywgZGlmZiwgbm9ybWFsaXplIH0gZnJvbSBcIm1hdGgvc3JjL3ZlY3Rvci5qc1wiO1xuY29uc3QgbGluZWRCb3hJbmRpY2VzID0gbmV3IFVpbnQxNkFycmF5KFtcbiAgMCxcbiAgMSxcbiAgMSxcbiAgMixcbiAgMixcbiAgMyxcbiAgMyxcbiAgMCwgLy8gZnJvbnRcbiAgMCxcbiAgNSxcbiAgNSxcbiAgNCxcbiAgNCxcbiAgMSxcbiAgMSxcbiAgMCwgLy9ib3R0b21cbiAgMCxcbiAgNCxcbiAgNCxcbiAgNyxcbiAgNyxcbiAgMyxcbiAgMyxcbiAgMCwgLy9sZWZ0XG4gIDEsXG4gIDIsXG4gIDIsXG4gIDYsXG4gIDYsXG4gIDUsXG4gIDUsXG4gIDEsIC8vcmlnaHRcbiAgNCxcbiAgNSxcbiAgNSxcbiAgNixcbiAgNixcbiAgNyxcbiAgNyxcbiAgNCwgLy8gYmFja1xuICAyLFxuICA3LFxuICA3LFxuICAzLFxuICAzLFxuICA2LFxuICA2LFxuICAyLCAvLyB0b3Bcbl0pO1xuXG5jb25zdCBDVUJFX0ZBQ0VfSU5ESUNFUyA9IFtcbiAgWzMsIDcsIDUsIDFdLCAvLyByaWdodFxuICBbNiwgMiwgMCwgNF0sIC8vIGxlZnRcbiAgWzYsIDcsIDMsIDJdLCAvLyA/P1xuICBbMCwgMSwgNSwgNF0sIC8vID8/XG4gIFs3LCA2LCA0LCA1XSwgLy8gZnJvbnRcbiAgWzIsIDMsIDEsIDBdLCAvLyBiYWNrXG5dO1xuXG5mdW5jdGlvbiBjcmVhdGVCb3goX2EgPSAxLCBfYiA9IDEsIF9jID0gMSkge1xuICBjb25zdCBhID0gX2EgLyAyLFxuICAgIGIgPSBfYiAvIDIsXG4gICAgYyA9IF9jIC8gMjtcbiAgY29uc3QgY29ybmVyVmVydGljZXMgPSBbXG4gICAgWy1hLCAtYiwgLWNdLFxuICAgIFsrYSwgLWIsIC1jXSxcbiAgICBbLWEsICtiLCAtY10sXG4gICAgWythLCArYiwgLWNdLFxuICAgIFstYSwgLWIsICtjXSxcbiAgICBbK2EsIC1iLCArY10sXG4gICAgWy1hLCArYiwgK2NdLFxuICAgIFsrYSwgK2IsICtjXSxcbiAgXTtcblxuICBjb25zdCBmYWNlTm9ybWFscyA9IFtcbiAgICBbKzEsICswLCArMF0sXG4gICAgWy0xLCArMCwgKzBdLFxuICAgIFsrMCwgKzEsICswXSxcbiAgICBbKzAsIC0xLCArMF0sXG4gICAgWyswLCArMCwgKzFdLFxuICAgIFsrMCwgKzAsIC0xXSxcbiAgXTtcblxuICBjb25zdCB1dkNvb3JkcyA9IFtcbiAgICBbMSwgMF0sXG4gICAgWzAsIDBdLFxuICAgIFswLCAxXSxcbiAgICBbMSwgMV0sXG4gIF07XG4gIGNvbnN0IG51bVZlcnRpY2VzID0gNiAqIDQ7XG4gIGNvbnN0IHBvc2l0aW9ucyA9IGV4cGFuZGVkVHlwZWRBcnJheShuZXcgRmxvYXQzMkFycmF5KG51bVZlcnRpY2VzICogMykpO1xuICBjb25zdCBub3JtYWxzID0gZXhwYW5kZWRUeXBlZEFycmF5KG5ldyBGbG9hdDMyQXJyYXkobnVtVmVydGljZXMgKiAzKSk7XG4gIC8vY29uc3QgdGV4Q29vcmRzID0gd2ViZ2xVdGlscy5jcmVhdGVBdWdtZW50ZWRUeXBlZEFycmF5KDIgLCBudW1WZXJ0aWNlcyk7XG4gIGNvbnN0IGluZGljZXMgPSBleHBhbmRlZFR5cGVkQXJyYXkobmV3IFVpbnQxNkFycmF5KDYgKiAyICogMykpO1xuXG4gIGZvciAobGV0IGYgPSAwOyBmIDwgNjsgKytmKSB7XG4gICAgY29uc3QgZmFjZUluZGljZXMgPSBDVUJFX0ZBQ0VfSU5ESUNFU1tmXTtcbiAgICBmb3IgKGxldCB2ID0gMDsgdiA8IDQ7ICsrdikge1xuICAgICAgY29uc3QgcG9zaXRpb24gPSBjb3JuZXJWZXJ0aWNlc1tmYWNlSW5kaWNlc1t2XV07XG4gICAgICBjb25zdCBub3JtYWwgPSBmYWNlTm9ybWFsc1tmXTtcbiAgICAgIHBvc2l0aW9ucy5wdXNoKHBvc2l0aW9uKTtcbiAgICAgIG5vcm1hbHMucHVzaChub3JtYWwpO1xuICAgIH1cblxuICAgIGNvbnN0IG9mZnNldCA9IDQgKiBmO1xuICAgIGluZGljZXMucHVzaChvZmZzZXQgKyAwLCBvZmZzZXQgKyAxLCBvZmZzZXQgKyAyKTtcbiAgICBpbmRpY2VzLnB1c2gob2Zmc2V0ICsgMCwgb2Zmc2V0ICsgMiwgb2Zmc2V0ICsgMyk7XG4gIH1cbiAgY29uc3QgbGVuID0gcG9zaXRpb25zLmJ5dGVMZW5ndGg7XG4gIGNvbnN0IHRleGNvb3JkID0gbmV3IEZsb2F0MzJBcnJheShbXG4gICAgLy8gRnJvbnRcbiAgICAwLjAsIDAuMCwgMS4wLCAwLjAsIDEuMCwgMS4wLCAwLjAsIDEuMCxcbiAgICAvLyBCYWNrXG4gICAgMC4wLCAwLjAsIDEuMCwgMC4wLCAxLjAsIDEuMCwgMC4wLCAxLjAsXG4gICAgLy8gVG9wXG4gICAgMC4wLCAwLjAsIDEuMCwgMC4wLCAxLjAsIDEuMCwgMC4wLCAxLjAsXG4gICAgLy8gQm90dG9tXG4gICAgMC4wLCAwLjAsIDEuMCwgMC4wLCAxLjAsIDEuMCwgMC4wLCAxLjAsXG4gICAgLy8gUmlnaHRcbiAgICAwLjAsIDAuMCwgMS4wLCAwLjAsIDEuMCwgMS4wLCAwLjAsIDEuMCxcbiAgICAvLyBMZWZ0XG4gICAgMC4wLCAwLjAsIDEuMCwgMC4wLCAxLjAsIDEuMCwgMC4wLCAxLjAsXG4gIF0pO1xuXG4gIGNvbnN0IEFycmF5RGF0YSA9IHtcbiAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICBOT1JNQUw6IHtcbiAgICAgICAgZGF0YTogbm9ybWFscyxcbiAgICAgICAgY291bnQ6IDYgKiA0ICogMyxcbiAgICAgICAgbG9jYXRpb246IDEsXG4gICAgICAgIGJ5dGVMZW5ndGg6IG5vcm1hbHMuYnl0ZUxlbmd0aCxcbiAgICAgICAgc3RyaWRlOiAwLFxuICAgICAgICBvZmZzZXQ6IDAsXG4gICAgICAgIG51bUNvbXBvbmVudHM6IDMsXG4gICAgICAgIHR5cGU6IDUxMjYsXG4gICAgICB9LFxuICAgICAgUE9TSVRJT046IHtcbiAgICAgICAgZGF0YTogcG9zaXRpb25zLFxuICAgICAgICBjb3VudDogNiAqIDQgKiAzLFxuICAgICAgICBsb2NhdGlvbjogMCxcbiAgICAgICAgYnl0ZUxlbmd0aDogcG9zaXRpb25zLmJ5dGVMZW5ndGgsXG4gICAgICAgIHN0cmlkZTogMCxcbiAgICAgICAgb2Zmc2V0OiAwLFxuICAgICAgICBudW1Db21wb25lbnRzOiAzLFxuICAgICAgICB0eXBlOiA1MTI2LFxuICAgICAgfSxcbiAgICAgIFRFWENPT1JEXzA6IHtcbiAgICAgICAgZGF0YTogdGV4Y29vcmQsXG4gICAgICAgIGNvdW50OiA0OCxcbiAgICAgICAgdHlwZTogNTEyNixcbiAgICAgICAgb2Zmc2V0OiAwLFxuICAgICAgICBzdHJpZGU6IDAsXG4gICAgICAgIGJ5dGVMZW5ndGg6IHRleGNvb3JkLmJ5dGVMZW5ndGgsXG4gICAgICAgIGxvY2F0aW9uOiA0LFxuICAgICAgICBudW1Db21wb25lbnRzOiAyLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGluZGljZXM6IGluZGljZXMsXG4gICAgbnVtRWxlbWVudHM6IGluZGljZXMubGVuZ3RoLFxuICAgIGNvbXBvbmVudFR5cGU6IDUxMjMsXG4gICAgbW9kZTogNCxcbiAgfTtcbiAgcmV0dXJuIEFycmF5RGF0YTtcbiAgLypyZXR1cm4ge1xuICAgICAgICAgIGdsdGYgOiB7XG4gICAgICAgICAgICBhY2Nlc3NvcnMgOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYnVmZmVyVmlldyA6IDAsXG4gICAgICAgICAgICAgICAgYnl0ZU9mZnNldCA6IDAsXG4gICAgICAgICAgICAgICAgY291bnQgOjcyLFxuICAgICAgICAgICAgICAgIGNvbXBvbmVudFR5cGUgOiA1MTI2LFxuICAgICAgICAgICAgICAgIHR5cGUgOiAnVkVDMydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGJ1ZmZlclZpZXcgOiAxLFxuICAgICAgICAgICAgICBieXRlT2Zmc2V0IDogMCxcbiAgICAgICAgICAgICAgY291bnQgOiA3MixcbiAgICAgICAgICAgICAgY29tcG9uZW50VHlwZSA6IDUxMjYsXG4gICAgICAgICAgICAgIHR5cGUgOiAnVkVDMydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGJ1ZmZlclZpZXcgOiAyLFxuICAgICAgICAgICAgICBieXRlT2Zmc2V0IDogMCxcbiAgICAgICAgICAgICAgY291bnQgOiAzNixcbiAgICAgICAgICAgICAgY29tcG9uZW50VHlwZSA6IDUxMjMsXG4gICAgICAgICAgICAgIHR5cGUgOiAnU0NBTEFSJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYnVmZmVyVmlldyA6IDMsXG4gICAgICAgICAgICAgIGJ5dGVPZmZzZXQgOiAwLFxuICAgICAgICAgICAgICBjb3VudCA6IDQ4LFxuICAgICAgICAgICAgICBjb21wb25lbnRUeXBlIDogNTEyNixcbiAgICAgICAgICAgICAgdHlwZSA6ICdWRUMyJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICBidWZmZXJWaWV3cyA6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGJ1ZmZlciA6IDAsXG4gICAgICAgICAgICAgICAgYnl0ZUxlbmd0aCA6IHBvc2l0aW9ucy5ieXRlTGVuZ3RoLFxuICAgICAgICAgICAgICAgIGJ5dGVPZmZzZXQgOiAwXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBidWZmZXIgOiAxLFxuICAgICAgICAgICAgICAgIGJ5dGVMZW5ndGggOiBub3JtYWxzLmJ5dGVMZW5ndGgsXG4gICAgICAgICAgICAgICAgYnl0ZU9mZnNldCA6IDBcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGJ1ZmZlciA6IDIsXG4gICAgICAgICAgICAgICAgYnl0ZUxlbmd0aCA6IGluZGljZXMuYnl0ZUxlbmd0aCxcbiAgICAgICAgICAgICAgICBieXRlT2Zmc2V0IDogMFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYnVmZmVyIDogMyxcbiAgICAgICAgICAgICAgICBieXRlTGVuZ3RoIDogdGV4Y29vcmQuYnl0ZUxlbmd0aCxcbiAgICAgICAgICAgICAgICBieXRlT2Zmc2V0IDogMFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgIG1lc2hlcyA6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZSA6ICdDdWJlJyxcbiAgICAgICAgICAgICAgcHJpbWl0aXZlcyA6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzIDoge1xuICAgICAgICAgICAgICAgICAgICBOT1JNQUwgOiAxLFxuICAgICAgICAgICAgICAgICAgICBQT1NJVElPTiA6IDAsXG4gICAgICAgICAgICAgICAgICAgIFRFWENPT1JEXzAgOiAzXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgaW5kaWNlcyA6IDIsXG4gICAgICAgICAgICAgICAgICBtb2RlIDogNFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgbm9kZXMgOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWUgOiBcIkN1YmVcIixcbiAgICAgICAgICAgICAgbWVzaCA6IDAsXG4gICAgICAgICAgICAgIGNoaWxkcmVuIDogWzFdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lIDogJ0N1YmUyJyxcbiAgICAgICAgICAgICAgbWVzaCA6IDAsXG4gICAgICAgICAgICAgIHRyYW5zbGF0aW9uIDogWzEsMSwxXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgYmluYXJ5QnVmZmVycyA6IFtcbiAgICAgICAgICBwb3NpdGlvbnMuYnVmZmVyLCBub3JtYWxzLmJ1ZmZlciwgaW5kaWNlcy5idWZmZXIsIHRleGNvb3JkLmJ1ZmZlclxuICAgICAgICBdXG4gICAgICB9OyovXG59XG5cbmNvbnN0IGNyZWF0ZUNvbmUgPSAocmFkaXVzID0gMiwgaGVpZ2h0ID0gMiwgbnVtQ29ybmVycyA9IDQpID0+IHtcbiAgY29uc3QgdmVydGljZXMgPSBbMCwgLWhlaWdodCAvIDIsIDBdO1xuICBjb25zdCBub3JtYWxzID0gW107XG4gIGNvbnN0IGluZGljZXMgPSBbXTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IG51bUNvcm5lcnMgKyAxOyBpKyspIHtcbiAgICBjb25zdCBhbmdsZSA9ICgyICogaSAqIE1hdGguUEkpIC8gbnVtQ29ybmVycztcbiAgICBjb25zdCB4ID0gTWF0aC5jb3MoYW5nbGUpICogcmFkaXVzO1xuICAgIGNvbnN0IHogPSBNYXRoLnNpbihhbmdsZSkgKiByYWRpdXM7XG4gICAgY29uc3QgeSA9IC1oZWlnaHQgLyAyO1xuICAgIHZlcnRpY2VzLnB1c2goeCwgLWhlaWdodCAvIDIsIHopO1xuICAgIG5vcm1hbHMucHVzaCgwLCAtMSwgMCk7XG4gIH1cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1Db3JuZXJzOyBpKyspIHtcbiAgICBpbmRpY2VzLnB1c2goMCwgaSArIDEsIGkgKyAyKTtcbiAgfVxuICAvL3ZlcnRpY2VzLnB1c2godmVydGljZXNbMV0sIC1oZWlnaHQvMiwgdmVydGljZXNbM10pXG4gIGNvbnN0IG4gPSB2ZXJ0aWNlcy5sZW5ndGggLyAzO1xuICBjb25zdCBzdHJpZGUgPSAzO1xuICBjb25zdCBzdGFydCA9IG47XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1Db3JuZXJzICsgMjsgaSsrKSB7XG4gICAgY29uc3QgYW5nbGUgPSAoMiAqIGkgKiBNYXRoLlBJKSAvIG51bUNvcm5lcnM7XG4gICAgY29uc3QgeCA9IE1hdGguY29zKGFuZ2xlKSAqIHJhZGl1cztcbiAgICBjb25zdCB6ID0gTWF0aC5zaW4oYW5nbGUpICogcmFkaXVzO1xuICAgIGNvbnN0IHkgPSAtaGVpZ2h0IC8gMjtcbiAgICBjb25zdCBhID0gW3ZlcnRpY2VzW2kgKiAzXSwgdmVydGljZXNbaSAqIDMgKyAxXSwgdmVydGljZXNbaSAqIDMgKyAyXV07XG4gICAgY29uc3QgYiA9IFt2ZXJ0aWNlc1tpICogMyArIDNdLCB2ZXJ0aWNlc1tpICogMyArIDRdLCB2ZXJ0aWNlc1tpICogMyArIDVdXTtcbiAgICBjb25zdCBjID0gWzAsIGhlaWdodCAvIDIsIDBdO1xuICAgIGluZGljZXMucHVzaChcbiAgICAgIHN0YXJ0ICsgaSAqIHN0cmlkZSArIDIsXG4gICAgICBzdGFydCArIGkgKiBzdHJpZGUgKyAxLFxuICAgICAgc3RhcnQgKyBpICogc3RyaWRlICsgM1xuICAgICk7XG4gICAgdmVydGljZXMucHVzaCguLi5jLCAuLi5hLCAuLi5iKTtcbiAgICBjb25zdCBub3JtYWwgPSBub3JtYWxpemUoY3Jvc3MoZGlmZihiLCBjKSwgZGlmZihhLCBjKSkpO1xuICAgIG5vcm1hbHMucHVzaCguLi5ub3JtYWwsIC4uLm5vcm1hbCwgLi4ubm9ybWFsKTtcbiAgfVxuXG4gIGNvbnN0IF9ub3JtYWwgPSBuZXcgRmxvYXQzMkFycmF5KG5vcm1hbHMpO1xuICBjb25zdCBfcG9zaXRpb24gPSBuZXcgRmxvYXQzMkFycmF5KHZlcnRpY2VzKTtcbiAgY29uc3QgX2luZGljZXMgPSBuZXcgVWludDE2QXJyYXkoaW5kaWNlcyk7XG4gIGNvbnN0IEFycmF5RGF0YSA9IHtcbiAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICBQT1NJVElPTjoge1xuICAgICAgICBsb2NhdGlvbjogMCxcbiAgICAgICAgY291bnQ6IHZlcnRpY2VzLmxlbmd0aCxcbiAgICAgICAgb2Zmc2V0OiAwLFxuICAgICAgICBzdHJpZGU6IDAsXG4gICAgICAgIG51bUNvbXBvbmVudHM6IDMsXG4gICAgICAgIHR5cGU6IDUxMjYsXG4gICAgICAgIGRhdGE6IF9wb3NpdGlvbixcbiAgICAgICAgYnl0ZUxlbmd0aDogX3Bvc2l0aW9uLmJ5dGVMZW5ndGgsXG4gICAgICB9LFxuICAgICAgTk9STUFMOiB7XG4gICAgICAgIGxvY2F0aW9uOiAxLFxuICAgICAgICBjb3VudDogbm9ybWFscy5sZW5ndGgsXG4gICAgICAgIG51bUNvbXBvbmVudHM6IDMsXG4gICAgICAgIG9mZnNldDogMCxcbiAgICAgICAgc3RyaWRlOiAwLFxuICAgICAgICB0eXBlOiA1MTI2LFxuICAgICAgICBkYXRhOiBfbm9ybWFsLFxuICAgICAgICBieXRlTGVuZ3RoOiBfbm9ybWFsLmJ5dGVMZW5ndGgsXG4gICAgICB9LFxuICAgIH0sXG4gICAgY29tcG9uZW50VHlwZTogNTEyMyxcbiAgICBpbmRpY2VzOiBfaW5kaWNlcyxcbiAgICBudW1FbGVtZW50czogaW5kaWNlcy5sZW5ndGgsXG4gICAgbW9kZTogNCxcbiAgfTtcbiAgcmV0dXJuIEFycmF5RGF0YTtcbn07XG5cbmNvbnN0IGNyZWF0ZUNpcmNsZSA9IChyYWRpdXMsIG51bUNvcm5lcnMpID0+IHtcbiAgY29uc3QgdmVydGljZXMgPSBbMCwgMCwgMF07XG4gIGNvbnN0IG5vcm1hbHMgPSBbXTtcbiAgY29uc3QgaW5kaWNlcyA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtQ29ybmVycyArIDE7IGkrKykge1xuICAgIGNvbnN0IGFuZ2xlID0gKDIgKiBpICogTWF0aC5QSSkgLyBudW1Db3JuZXJzO1xuICAgIGNvbnN0IHggPSBNYXRoLmNvcyhhbmdsZSkgKiByYWRpdXM7XG4gICAgY29uc3QgeiA9IE1hdGguc2luKGFuZ2xlKSAqIHJhZGl1cztcblxuICAgIHZlcnRpY2VzLnB1c2goeCwgMCwgeik7XG4gICAgbm9ybWFscy5wdXNoKDAsIDEsIDApO1xuICB9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtQ29ybmVyczsgaSsrKSB7XG4gICAgaW5kaWNlcy5wdXNoKDAsIGkgKyAxLCBpICsgMik7XG4gIH1cblxuICBjb25zdCBfbm9ybWFsID0gbmV3IEZsb2F0MzJBcnJheShub3JtYWxzKTtcbiAgY29uc3QgX3Bvc2l0aW9uID0gbmV3IEZsb2F0MzJBcnJheSh2ZXJ0aWNlcyk7XG4gIGNvbnN0IF9pbmRpY2VzID0gbmV3IFVpbnQxNkFycmF5KGluZGljZXMpO1xuXG4gIGNvbnN0IEFycmF5RGF0YSA9IHtcbiAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICBQT1NJVElPTjoge1xuICAgICAgICBsb2NhdGlvbjogMCxcbiAgICAgICAgY291bnQ6IHZlcnRpY2VzLmxlbmd0aCxcbiAgICAgICAgb2Zmc2V0OiAwLFxuICAgICAgICBzdHJpZGU6IDAsXG4gICAgICAgIG51bUNvbXBvbmVudHM6IDMsXG4gICAgICAgIHR5cGU6IDUxMjYsXG4gICAgICAgIGRhdGE6IF9wb3NpdGlvbixcbiAgICAgICAgYnl0ZUxlbmd0aDogX3Bvc2l0aW9uLmJ5dGVMZW5ndGgsXG4gICAgICB9LFxuICAgICAgTk9STUFMOiB7XG4gICAgICAgIGxvY2F0aW9uOiAxLFxuICAgICAgICBjb3VudDogbm9ybWFscy5sZW5ndGgsXG4gICAgICAgIG51bUNvbXBvbmVudHM6IDMsXG4gICAgICAgIG9mZnNldDogMCxcbiAgICAgICAgc3RyaWRlOiAwLFxuICAgICAgICB0eXBlOiA1MTI2LFxuICAgICAgICBkYXRhOiBfbm9ybWFsLFxuICAgICAgICBieXRlTGVuZ3RoOiBfbm9ybWFsLmJ5dGVMZW5ndGgsXG4gICAgICB9LFxuICAgIH0sXG4gICAgY29tcG9uZW50VHlwZTogNTEyMyxcbiAgICBpbmRpY2VzOiBfaW5kaWNlcyxcbiAgICBudW1FbGVtZW50czogaW5kaWNlcy5sZW5ndGgsXG4gICAgbW9kZTogNCxcbiAgfTtcbiAgcmV0dXJuIEFycmF5RGF0YTtcbn07XG5cbmNvbnN0IGNyZWF0ZVNwaGVyZSA9IChcbiAgcmFkaXVzLFxuICBzdWJkaXZpc2lvbnNBeGlzLFxuICBzdWJkaXZpc2lvbnNIZWlnaHQsXG4gIG9wdF9zdGFydExhdGl0dWRlSW5SYWRpYW5zLFxuICBvcHRfZW5kTGF0aXR1ZGVJblJhZGlhbnMsXG4gIG9wdF9zdGFydExvbmdpdHVkZUluUmFkaWFucyxcbiAgb3B0X2VuZExvbmdpdHVkZUluUmFkaWFuc1xuKSA9PiB7XG4gIGlmIChzdWJkaXZpc2lvbnNBeGlzIDw9IDAgfHwgc3ViZGl2aXNpb25zSGVpZ2h0IDw9IDApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJzdWJkaXZpc2lvbkF4aXMgYW5kIHN1YmRpdmlzaW9uSGVpZ2h0IG11c3QgYmUgPiAwXCIpO1xuICB9XG5cbiAgb3B0X3N0YXJ0TGF0aXR1ZGVJblJhZGlhbnMgPSBvcHRfc3RhcnRMYXRpdHVkZUluUmFkaWFucyB8fCAwO1xuICBvcHRfZW5kTGF0aXR1ZGVJblJhZGlhbnMgPSBvcHRfZW5kTGF0aXR1ZGVJblJhZGlhbnMgfHwgTWF0aC5QSTtcbiAgb3B0X3N0YXJ0TG9uZ2l0dWRlSW5SYWRpYW5zID0gb3B0X3N0YXJ0TG9uZ2l0dWRlSW5SYWRpYW5zIHx8IDA7XG4gIG9wdF9lbmRMb25naXR1ZGVJblJhZGlhbnMgPSBvcHRfZW5kTG9uZ2l0dWRlSW5SYWRpYW5zIHx8IE1hdGguUEkgKiAyO1xuXG4gIGNvbnN0IGxhdFJhbmdlID0gb3B0X2VuZExhdGl0dWRlSW5SYWRpYW5zIC0gb3B0X3N0YXJ0TGF0aXR1ZGVJblJhZGlhbnM7XG4gIGNvbnN0IGxvbmdSYW5nZSA9IG9wdF9lbmRMb25naXR1ZGVJblJhZGlhbnMgLSBvcHRfc3RhcnRMb25naXR1ZGVJblJhZGlhbnM7XG5cbiAgY29uc3QgcG9zaXRpb25zID0gW107XG4gIGNvbnN0IG5vcm1hbHMgPSBbXTtcbiAgY29uc3QgdGV4Y29vcmRzID0gW107XG5cbiAgZm9yIChsZXQgeSA9IDA7IHkgPD0gc3ViZGl2aXNpb25zSGVpZ2h0OyB5KyspIHtcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8PSBzdWJkaXZpc2lvbnNBeGlzOyB4KyspIHtcbiAgICAgIGNvbnN0IHUgPSB4IC8gc3ViZGl2aXNpb25zQXhpcztcbiAgICAgIGNvbnN0IHYgPSB5IC8gc3ViZGl2aXNpb25zSGVpZ2h0O1xuICAgICAgY29uc3QgdGhldGEgPSBsb25nUmFuZ2UgKiB1ICsgb3B0X3N0YXJ0TG9uZ2l0dWRlSW5SYWRpYW5zO1xuICAgICAgY29uc3QgcGhpID0gbGF0UmFuZ2UgKiB2ICsgb3B0X3N0YXJ0TGF0aXR1ZGVJblJhZGlhbnM7XG4gICAgICBjb25zdCBzaW5UaGV0YSA9IE1hdGguc2luKHRoZXRhKTtcbiAgICAgIGNvbnN0IGNvc1RoZXRhID0gTWF0aC5jb3ModGhldGEpO1xuICAgICAgY29uc3Qgc2luUGhpID0gTWF0aC5zaW4ocGhpKTtcbiAgICAgIGNvbnN0IGNvc1BoaSA9IE1hdGguY29zKHBoaSk7XG4gICAgICBjb25zdCB1eCA9IGNvc1RoZXRhICogc2luUGhpO1xuICAgICAgY29uc3QgdXkgPSBjb3NQaGk7XG4gICAgICBjb25zdCB1eiA9IHNpblRoZXRhICogc2luUGhpO1xuICAgICAgcG9zaXRpb25zLnB1c2gocmFkaXVzICogdXgsIHJhZGl1cyAqIHV5LCByYWRpdXMgKiB1eik7XG4gICAgICBub3JtYWxzLnB1c2godXgsIHV5LCB1eik7XG4gICAgICB0ZXhjb29yZHMucHVzaCgxIC0gdSwgdik7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgbnVtVmVydHNBcm91bmQgPSBzdWJkaXZpc2lvbnNBeGlzICsgMTtcbiAgY29uc3QgaW5kaWNlcyA9IFtdO1xuICBmb3IgKGxldCB4ID0gMDsgeCA8IHN1YmRpdmlzaW9uc0F4aXM7IHgrKykge1xuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgc3ViZGl2aXNpb25zSGVpZ2h0OyB5KyspIHtcbiAgICAgIGluZGljZXMucHVzaChcbiAgICAgICAgKHkgKyAwKSAqIG51bVZlcnRzQXJvdW5kICsgeCxcbiAgICAgICAgKHkgKyAwKSAqIG51bVZlcnRzQXJvdW5kICsgeCArIDEsXG4gICAgICAgICh5ICsgMSkgKiBudW1WZXJ0c0Fyb3VuZCArIHhcbiAgICAgICk7XG4gICAgICBpbmRpY2VzLnB1c2goXG4gICAgICAgICh5ICsgMSkgKiBudW1WZXJ0c0Fyb3VuZCArIHgsXG4gICAgICAgICh5ICsgMCkgKiBudW1WZXJ0c0Fyb3VuZCArIHggKyAxLFxuICAgICAgICAoeSArIDEpICogbnVtVmVydHNBcm91bmQgKyB4ICsgMVxuICAgICAgKTtcbiAgICB9XG4gIH1cbiAgY29uc3QgX3Bvc2l0aW9ucyA9IG5ldyBGbG9hdDMyQXJyYXkocG9zaXRpb25zKTtcbiAgY29uc3QgX25vcm1hbHMgPSBuZXcgRmxvYXQzMkFycmF5KG5vcm1hbHMpO1xuICBjb25zdCBfdGV4Y29vcmRzID0gbmV3IEZsb2F0MzJBcnJheSh0ZXhjb29yZHMpO1xuICBjb25zdCBfaW5kaWNlcyA9IG5ldyBVaW50MTZBcnJheShpbmRpY2VzKTtcblxuICByZXR1cm4ge1xuICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgIFBPU0lUSU9OOiB7XG4gICAgICAgIGxvY2F0aW9uOiAwLFxuICAgICAgICBjb3VudDogcG9zaXRpb25zLmxlbmd0aCxcbiAgICAgICAgb2Zmc2V0OiAwLFxuICAgICAgICBzdHJpZGU6IDAsXG4gICAgICAgIG51bUNvbXBvbmVudHM6IDMsXG4gICAgICAgIHR5cGU6IDUxMjYsXG4gICAgICAgIGRhdGE6IF9wb3NpdGlvbnMsXG4gICAgICAgIGJ5dGVMZW5ndGg6IF9wb3NpdGlvbnMuYnl0ZUxlbmd0aCxcbiAgICAgIH0sXG4gICAgICBOT1JNQUw6IHtcbiAgICAgICAgbG9jYXRpb246IDEsXG4gICAgICAgIGNvdW50OiBub3JtYWxzLmxlbmd0aCxcbiAgICAgICAgbnVtQ29tcG9uZW50czogMyxcbiAgICAgICAgb2Zmc2V0OiAwLFxuICAgICAgICBzdHJpZGU6IDAsXG4gICAgICAgIHR5cGU6IDUxMjYsXG4gICAgICAgIGRhdGE6IF9ub3JtYWxzLFxuICAgICAgICBieXRlTGVuZ3RoOiBfbm9ybWFscy5ieXRlTGVuZ3RoLFxuICAgICAgfSxcbiAgICAgIFRFWENPT1JEXzA6IHtcbiAgICAgICAgZGF0YTogX3RleGNvb3JkcyxcbiAgICAgICAgY291bnQ6IF90ZXhjb29yZHMubGVuZ3RoLFxuICAgICAgICB0eXBlOiA1MTI2LFxuICAgICAgICBvZmZzZXQ6IDAsXG4gICAgICAgIHN0cmlkZTogMCxcbiAgICAgICAgYnl0ZUxlbmd0aDogX3RleGNvb3Jkcy5ieXRlTGVuZ3RoLFxuICAgICAgICBsb2NhdGlvbjogNCxcbiAgICAgICAgbnVtQ29tcG9uZW50czogMixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBjb21wb25lbnRUeXBlOiA1MTIzLFxuICAgIGluZGljZXM6IF9pbmRpY2VzLFxuICAgIG51bUVsZW1lbnRzOiBpbmRpY2VzLmxlbmd0aCxcbiAgICBtb2RlOiA0LFxuICB9O1xufTtcbmNvbnN0IGNyZWF0ZVRydW5jYXRlZENvbmUgPSAoXG4gIGJvdHRvbVJhZGl1cyxcbiAgdG9wUmFkaXVzLFxuICBoZWlnaHQsXG4gIHJhZGlhbFN1YmRpdmlzaW9ucyxcbiAgdmVydGljYWxTdWJkaXZpc2lvbnMsXG4gIG9wdF90b3BDYXAsXG4gIG9wdF9ib3R0b21DYXBcbikgPT4ge1xuICBpZiAocmFkaWFsU3ViZGl2aXNpb25zIDwgMykge1xuICAgIHRocm93IG5ldyBFcnJvcihcInJhZGlhbFN1YmRpdmlzaW9ucyBtdXN0IGJlIDMgb3IgZ3JlYXRlclwiKTtcbiAgfVxuXG4gIGlmICh2ZXJ0aWNhbFN1YmRpdmlzaW9ucyA8IDEpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJ2ZXJ0aWNhbFN1YmRpdmlzaW9ucyBtdXN0IGJlIDEgb3IgZ3JlYXRlclwiKTtcbiAgfVxuXG4gIGNvbnN0IHRvcENhcCA9IG9wdF90b3BDYXAgPT09IHVuZGVmaW5lZCA/IHRydWUgOiBvcHRfdG9wQ2FwO1xuICBjb25zdCBib3R0b21DYXAgPSBvcHRfYm90dG9tQ2FwID09PSB1bmRlZmluZWQgPyB0cnVlIDogb3B0X2JvdHRvbUNhcDtcblxuICBjb25zdCBleHRyYSA9ICh0b3BDYXAgPyAyIDogMCkgKyAoYm90dG9tQ2FwID8gMiA6IDApO1xuXG4gIGNvbnN0IG51bVZlcnRpY2VzID1cbiAgICAocmFkaWFsU3ViZGl2aXNpb25zICsgMSkgKiAodmVydGljYWxTdWJkaXZpc2lvbnMgKyAxICsgZXh0cmEpO1xuICBjb25zdCBwb3NpdGlvbnMgPSBbXTtcbiAgY29uc3Qgbm9ybWFscyA9IFtdO1xuICBjb25zdCB0ZXhjb29yZHMgPSBbXTtcbiAgY29uc3QgaW5kaWNlcyA9IFtdO1xuXG4gIGNvbnN0IHZlcnRzQXJvdW5kRWRnZSA9IHJhZGlhbFN1YmRpdmlzaW9ucyArIDE7XG5cbiAgY29uc3Qgc2xhbnQgPSBNYXRoLmF0YW4yKGJvdHRvbVJhZGl1cyAtIHRvcFJhZGl1cywgaGVpZ2h0KTtcbiAgY29uc3QgY29zU2xhbnQgPSBNYXRoLmNvcyhzbGFudCk7XG4gIGNvbnN0IHNpblNsYW50ID0gTWF0aC5zaW4oc2xhbnQpO1xuXG4gIGNvbnN0IHN0YXJ0ID0gdG9wQ2FwID8gLTIgOiAwO1xuICBjb25zdCBlbmQgPSB2ZXJ0aWNhbFN1YmRpdmlzaW9ucyArIChib3R0b21DYXAgPyAyIDogMCk7XG5cbiAgZm9yIChsZXQgeXkgPSBzdGFydDsgeXkgPD0gZW5kOyArK3l5KSB7XG4gICAgbGV0IHYgPSB5eSAvIHZlcnRpY2FsU3ViZGl2aXNpb25zO1xuICAgIGxldCB5ID0gaGVpZ2h0ICogdjtcbiAgICBsZXQgcmluZ1JhZGl1cztcbiAgICBpZiAoeXkgPCAwKSB7XG4gICAgICB5ID0gMDtcbiAgICAgIHYgPSAxO1xuICAgICAgcmluZ1JhZGl1cyA9IGJvdHRvbVJhZGl1cztcbiAgICB9IGVsc2UgaWYgKHl5ID4gdmVydGljYWxTdWJkaXZpc2lvbnMpIHtcbiAgICAgIHkgPSBoZWlnaHQ7XG4gICAgICB2ID0gMTtcbiAgICAgIHJpbmdSYWRpdXMgPSB0b3BSYWRpdXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJpbmdSYWRpdXMgPVxuICAgICAgICBib3R0b21SYWRpdXMgKyAodG9wUmFkaXVzIC0gYm90dG9tUmFkaXVzKSAqICh5eSAvIHZlcnRpY2FsU3ViZGl2aXNpb25zKTtcbiAgICB9XG4gICAgaWYgKHl5ID09PSAtMiB8fCB5eSA9PT0gdmVydGljYWxTdWJkaXZpc2lvbnMgKyAyKSB7XG4gICAgICByaW5nUmFkaXVzID0gMDtcbiAgICAgIHYgPSAwO1xuICAgIH1cbiAgICB5IC09IGhlaWdodCAvIDI7XG4gICAgZm9yIChsZXQgaWkgPSAwOyBpaSA8IHZlcnRzQXJvdW5kRWRnZTsgKytpaSkge1xuICAgICAgY29uc3Qgc2luID0gTWF0aC5zaW4oKGlpICogTWF0aC5QSSAqIDIpIC8gcmFkaWFsU3ViZGl2aXNpb25zKTtcbiAgICAgIGNvbnN0IGNvcyA9IE1hdGguY29zKChpaSAqIE1hdGguUEkgKiAyKSAvIHJhZGlhbFN1YmRpdmlzaW9ucyk7XG4gICAgICBwb3NpdGlvbnMucHVzaChzaW4gKiByaW5nUmFkaXVzLCB5LCBjb3MgKiByaW5nUmFkaXVzKTtcbiAgICAgIGlmICh5eSA8IDApIHtcbiAgICAgICAgbm9ybWFscy5wdXNoKDAsIC0xLCAwKTtcbiAgICAgIH0gZWxzZSBpZiAoeXkgPiB2ZXJ0aWNhbFN1YmRpdmlzaW9ucykge1xuICAgICAgICBub3JtYWxzLnB1c2goMCwgMSwgMCk7XG4gICAgICB9IGVsc2UgaWYgKHJpbmdSYWRpdXMgPT09IDAuMCkge1xuICAgICAgICBub3JtYWxzLnB1c2goMCwgMCwgMCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBub3JtYWxzLnB1c2goc2luICogY29zU2xhbnQsIHNpblNsYW50LCBjb3MgKiBjb3NTbGFudCk7XG4gICAgICB9XG4gICAgICB0ZXhjb29yZHMucHVzaChpaSAvIHJhZGlhbFN1YmRpdmlzaW9ucywgMSAtIHYpO1xuICAgIH1cbiAgfVxuXG4gIGZvciAobGV0IHl5ID0gMDsgeXkgPCB2ZXJ0aWNhbFN1YmRpdmlzaW9ucyArIGV4dHJhOyArK3l5KSB7XG4gICAgaWYgKFxuICAgICAgKHl5ID09PSAxICYmIHRvcENhcCkgfHxcbiAgICAgICh5eSA9PT0gdmVydGljYWxTdWJkaXZpc2lvbnMgKyBleHRyYSAtIDIgJiYgYm90dG9tQ2FwKVxuICAgICkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGZvciAobGV0IGlpID0gMDsgaWkgPCByYWRpYWxTdWJkaXZpc2lvbnM7ICsraWkpIHtcbiAgICAgIGluZGljZXMucHVzaChcbiAgICAgICAgdmVydHNBcm91bmRFZGdlICogKHl5ICsgMCkgKyAwICsgaWksXG4gICAgICAgIHZlcnRzQXJvdW5kRWRnZSAqICh5eSArIDApICsgMSArIGlpLFxuICAgICAgICB2ZXJ0c0Fyb3VuZEVkZ2UgKiAoeXkgKyAxKSArIDEgKyBpaVxuICAgICAgKTtcbiAgICAgIGluZGljZXMucHVzaChcbiAgICAgICAgdmVydHNBcm91bmRFZGdlICogKHl5ICsgMCkgKyAwICsgaWksXG4gICAgICAgIHZlcnRzQXJvdW5kRWRnZSAqICh5eSArIDEpICsgMSArIGlpLFxuICAgICAgICB2ZXJ0c0Fyb3VuZEVkZ2UgKiAoeXkgKyAxKSArIDAgKyBpaVxuICAgICAgKTtcbiAgICB9XG4gIH1cbiAgY29uc3QgX3Bvc2l0aW9ucyA9IG5ldyBGbG9hdDMyQXJyYXkocG9zaXRpb25zKTtcbiAgY29uc3QgX25vcm1hbHMgPSBuZXcgRmxvYXQzMkFycmF5KG5vcm1hbHMpO1xuICBjb25zdCBfdGV4Y29vcmRzID0gbmV3IEZsb2F0MzJBcnJheSh0ZXhjb29yZHMpO1xuICBjb25zdCBfaW5kaWNlcyA9IG5ldyBVaW50MTZBcnJheShpbmRpY2VzKTtcbiAgcmV0dXJuIHtcbiAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICBQT1NJVElPTjoge1xuICAgICAgICBsb2NhdGlvbjogMCxcbiAgICAgICAgY291bnQ6IHBvc2l0aW9ucy5sZW5ndGgsXG4gICAgICAgIG9mZnNldDogMCxcbiAgICAgICAgc3RyaWRlOiAwLFxuICAgICAgICBudW1Db21wb25lbnRzOiAzLFxuICAgICAgICB0eXBlOiA1MTI2LFxuICAgICAgICBkYXRhOiBfcG9zaXRpb25zLFxuICAgICAgICBieXRlTGVuZ3RoOiBfcG9zaXRpb25zLmJ5dGVMZW5ndGgsXG4gICAgICB9LFxuICAgICAgTk9STUFMOiB7XG4gICAgICAgIGxvY2F0aW9uOiAxLFxuICAgICAgICBjb3VudDogbm9ybWFscy5sZW5ndGgsXG4gICAgICAgIG51bUNvbXBvbmVudHM6IDMsXG4gICAgICAgIG9mZnNldDogMCxcbiAgICAgICAgc3RyaWRlOiAwLFxuICAgICAgICB0eXBlOiA1MTI2LFxuICAgICAgICBkYXRhOiBfbm9ybWFscyxcbiAgICAgICAgYnl0ZUxlbmd0aDogX25vcm1hbHMuYnl0ZUxlbmd0aCxcbiAgICAgIH0sXG4gICAgICBURVhDT09SRF8wOiB7XG4gICAgICAgIGRhdGE6IF90ZXhjb29yZHMsXG4gICAgICAgIGNvdW50OiBfdGV4Y29vcmRzLmxlbmd0aCxcbiAgICAgICAgdHlwZTogNTEyNixcbiAgICAgICAgb2Zmc2V0OiAwLFxuICAgICAgICBzdHJpZGU6IDAsXG4gICAgICAgIGJ5dGVMZW5ndGg6IF90ZXhjb29yZHMuYnl0ZUxlbmd0aCxcbiAgICAgICAgbG9jYXRpb246IDQsXG4gICAgICAgIG51bUNvbXBvbmVudHM6IDIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgY29tcG9uZW50VHlwZTogNTEyMyxcbiAgICBpbmRpY2VzOiBfaW5kaWNlcyxcbiAgICBudW1FbGVtZW50czogaW5kaWNlcy5sZW5ndGgsXG4gICAgbW9kZTogNCxcbiAgfTtcbn07XG5cbmV4cG9ydCB7IGNyZWF0ZUJveCwgY3JlYXRlQ29uZSwgY3JlYXRlQ2lyY2xlLCBjcmVhdGVTcGhlcmUsIGNyZWF0ZVRydW5jYXRlZENvbmV9O1xuIiwiZnVuY3Rpb24gZ2V0R0xUeXBlRm9yVHlwZWRBcnJheShnbCwgdHlwZWRBcnJheSkge1xuICBpZiAodHlwZWRBcnJheSBpbnN0YW5jZW9mIEludDhBcnJheSkge1xuICAgIHJldHVybiBnbC5CWVRFO1xuICB9IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgaWYgKHR5cGVkQXJyYXkgaW5zdGFuY2VvZiBVaW50OEFycmF5KSB7XG4gICAgcmV0dXJuIGdsLlVOU0lHTkVEX0JZVEU7XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICBpZiAodHlwZWRBcnJheSBpbnN0YW5jZW9mIFVpbnQ4Q2xhbXBlZEFycmF5KSB7XG4gICAgcmV0dXJuIGdsLlVOU0lHTkVEX0JZVEU7XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICBpZiAodHlwZWRBcnJheSBpbnN0YW5jZW9mIEludDE2QXJyYXkpIHtcbiAgICByZXR1cm4gZ2wuU0hPUlQ7XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICBpZiAodHlwZWRBcnJheSBpbnN0YW5jZW9mIFVpbnQxNkFycmF5KSB7XG4gICAgcmV0dXJuIGdsLlVOU0lHTkVEX1NIT1JUO1xuICB9IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgaWYgKHR5cGVkQXJyYXkgaW5zdGFuY2VvZiBJbnQzMkFycmF5KSB7XG4gICAgcmV0dXJuIGdsLklOVDtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gIGlmICh0eXBlZEFycmF5IGluc3RhbmNlb2YgVWludDMyQXJyYXkpIHtcbiAgICByZXR1cm4gZ2wuVU5TSUdORURfSU5UO1xuICB9IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgaWYgKHR5cGVkQXJyYXkgaW5zdGFuY2VvZiBGbG9hdDMyQXJyYXkpIHtcbiAgICByZXR1cm4gZ2wuRkxPQVQ7XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICByZXR1cm4gZmFsc2U7XG59XG5mdW5jdGlvbiBleHBhbmRlZFR5cGVkQXJyYXkoYXJyYXkpIHtcbiAgbGV0IGN1cnNvciA9IDA7XG4gIGFycmF5LnB1c2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgZm9yIChsZXQgaWkgPSAwOyBpaSA8IGFyZ3VtZW50cy5sZW5ndGg7ICsraWkpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gYXJndW1lbnRzW2lpXTtcblxuICAgICAgaWYgKFxuICAgICAgICB2YWx1ZSBpbnN0YW5jZW9mIEFycmF5IHx8XG4gICAgICAgICh2YWx1ZS5idWZmZXIgJiYgdmFsdWUuYnVmZmVyIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpXG4gICAgICApIHtcbiAgICAgICAgZm9yIChsZXQgamogPSAwOyBqaiA8IHZhbHVlLmxlbmd0aDsgKytqaikge1xuICAgICAgICAgIGFycmF5W2N1cnNvcisrXSA9IHZhbHVlW2pqXTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXJyYXlbY3Vyc29yKytdID0gdmFsdWU7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBhcnJheTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVW5pZm9ybVNldHRlcnMoZ2wsIHByb2dyYW0pIHtcbiAgY29uc3QgY3JlYXRlVGV4dHVyZVNldHRlciA9IChwcm9ncmFtLCB1bmlmb3JtSW5mbykgPT4ge1xuICAgIGNvbnN0IGxvY2F0aW9uID0gZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIHVuaWZvcm1JbmZvLm5hbWUpO1xuXG4gICAgcmV0dXJuICh0ZXhCbG9ja051bSkgPT4ge1xuICAgICAgZ2wudW5pZm9ybTFpKGxvY2F0aW9uLCB0ZXhCbG9ja051bSk7XG4gICAgfTtcbiAgfTtcbiAgZnVuY3Rpb24gY3JlYXRlVW5pZm9ybVNldHRlcihwcm9ncmFtLCB1bmlmb3JtSW5mbykge1xuICAgIGNvbnN0IGxvY2F0aW9uID0gZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIHVuaWZvcm1JbmZvLm5hbWUpO1xuXG4gICAgY29uc3QgdHlwZSA9IHVuaWZvcm1JbmZvLnR5cGU7XG5cbiAgICBjb25zdCBpc0FycmF5ID1cbiAgICAgIHVuaWZvcm1JbmZvLnNpemUgPiAxICYmIHVuaWZvcm1JbmZvLm5hbWUuc3Vic3RyKC0zKSA9PT0gXCJbMF1cIjtcblxuICAgIGlmICh0eXBlID09PSBnbC5GTE9BVCAmJiBpc0FycmF5KSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgZ2wudW5pZm9ybTFmdihsb2NhdGlvbiwgdik7XG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAodHlwZSA9PT0gZ2wuRkxPQVQpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgICAgICBnbC51bmlmb3JtMWYobG9jYXRpb24sIHYpO1xuICAgICAgfTtcbiAgICB9XG4gICAgaWYgKHR5cGUgPT09IGdsLkZMT0FUX1ZFQzIpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgICAgICBnbC51bmlmb3JtMmZ2KGxvY2F0aW9uLCB2KTtcbiAgICAgIH07XG4gICAgfVxuICAgIGlmICh0eXBlID09PSBnbC5GTE9BVF9WRUMzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgZ2wudW5pZm9ybTNmdihsb2NhdGlvbiwgdik7XG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAodHlwZSA9PT0gZ2wuRkxPQVRfVkVDNCkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIGdsLnVuaWZvcm00ZnYobG9jYXRpb24sIHYpO1xuICAgICAgfTtcbiAgICB9XG4gICAgaWYgKHR5cGUgPT09IGdsLklOVCAmJiBpc0FycmF5KSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgZ2wudW5pZm9ybTFpdihsb2NhdGlvbiwgdik7XG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAodHlwZSA9PT0gZ2wuSU5UKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgZ2wudW5pZm9ybTFpKGxvY2F0aW9uLCB2KTtcbiAgICAgIH07XG4gICAgfVxuICAgIGlmICh0eXBlID09PSBnbC5JTlRfVkVDMikge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIGdsLnVuaWZvcm0yaXYobG9jYXRpb24sIHYpO1xuICAgICAgfTtcbiAgICB9XG4gICAgaWYgKHR5cGUgPT09IGdsLklOVF9WRUMzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgZ2wudW5pZm9ybTNpdihsb2NhdGlvbiwgdik7XG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAodHlwZSA9PT0gZ2wuSU5UX1ZFQzQpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgICAgICBnbC51bmlmb3JtNGl2KGxvY2F0aW9uLCB2KTtcbiAgICAgIH07XG4gICAgfVxuICAgIGlmICh0eXBlID09PSBnbC5CT09MKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgZ2wudW5pZm9ybTFpdihsb2NhdGlvbiwgdik7XG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAodHlwZSA9PT0gZ2wuQk9PTF9WRUMyKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgZ2wudW5pZm9ybTJpdihsb2NhdGlvbiwgdik7XG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAodHlwZSA9PT0gZ2wuQk9PTF9WRUMzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgZ2wudW5pZm9ybTNpdihsb2NhdGlvbiwgdik7XG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAodHlwZSA9PT0gZ2wuQk9PTF9WRUM0KSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgZ2wudW5pZm9ybTRpdihsb2NhdGlvbiwgdik7XG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAodHlwZSA9PT0gZ2wuRkxPQVRfTUFUMikge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIGdsLnVuaWZvcm1NYXRyaXgyZnYobG9jYXRpb24sIGZhbHNlLCB2KTtcbiAgICAgIH07XG4gICAgfVxuICAgIGlmICh0eXBlID09PSBnbC5GTE9BVF9NQVQzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgZ2wudW5pZm9ybU1hdHJpeDNmdihsb2NhdGlvbiwgZmFsc2UsIHYpO1xuICAgICAgfTtcbiAgICB9XG4gICAgaWYgKHR5cGUgPT09IGdsLkZMT0FUX01BVDQpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgICAgICBnbC51bmlmb3JtTWF0cml4NGZ2KGxvY2F0aW9uLCBmYWxzZSwgdik7XG4gICAgICB9O1xuICAgIH1cbiAgfVxuICBjb25zdCB1bmlmb3JtU2V0dGVycyA9IHt9O1xuICBjb25zdCB0ZXh0dXJlU2V0dGVycyA9IHt9O1xuICBjb25zdCBudW1Vbmlmb3JtcyA9IGdsLmdldFByb2dyYW1QYXJhbWV0ZXIocHJvZ3JhbSwgZ2wuQUNUSVZFX1VOSUZPUk1TKTtcblxuICBmb3IgKGxldCBpaSA9IDA7IGlpIDwgbnVtVW5pZm9ybXM7ICsraWkpIHtcbiAgICBjb25zdCB1bmlmb3JtSW5mbyA9IGdsLmdldEFjdGl2ZVVuaWZvcm0ocHJvZ3JhbSwgaWkpO1xuICAgIGlmICghdW5pZm9ybUluZm8pIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBsZXQgbmFtZSA9IHVuaWZvcm1JbmZvLm5hbWU7XG4gICAgaWYgKHVuaWZvcm1JbmZvLnR5cGUgPT09IGdsLlNBTVBMRVJfMkQpIHtcbiAgICAgIHRleHR1cmVTZXR0ZXJzW25hbWVdID0gY3JlYXRlVGV4dHVyZVNldHRlcihwcm9ncmFtLCB1bmlmb3JtSW5mbyk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAobmFtZS5zdWJzdHIoLTMpID09PSBcIlswXVwiKSB7XG4gICAgICBuYW1lID0gbmFtZS5zdWJzdHIoMCwgbmFtZS5sZW5ndGggLSAzKTtcbiAgICB9XG4gICAgaWYgKHVuaWZvcm1JbmZvLnNpemUgPiAxKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHVuaWZvcm1JbmZvLnNpemU7IGkrKykge1xuICAgICAgICBjb25zdCBvYmogPSB7XG4gICAgICAgICAgc2l6ZTogdW5pZm9ybUluZm8uc2l6ZSxcbiAgICAgICAgICB0eXBlOiB1bmlmb3JtSW5mby50eXBlLFxuICAgICAgICAgIG5hbWU6IG5hbWUgKyBgWyR7aX1dYCxcbiAgICAgICAgfTtcbiAgICAgICAgdW5pZm9ybVNldHRlcnNbbmFtZSArIGBbJHtpfV1gXSA9IGNyZWF0ZVVuaWZvcm1TZXR0ZXIocHJvZ3JhbSwgb2JqKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc2V0dGVyID0gY3JlYXRlVW5pZm9ybVNldHRlcihwcm9ncmFtLCB1bmlmb3JtSW5mbyk7XG4gICAgICB1bmlmb3JtU2V0dGVyc1tuYW1lXSA9IHNldHRlcjtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHsgdW5pZm9ybVNldHRlcnMsIHRleHR1cmVTZXR0ZXJzIH07XG59XG5cbmNsYXNzIFByb2dyYW1JbmZvIHtcbiAgY29uc3RydWN0b3IodnMsIGZzKSB7XG4gICAgdGhpcy52cyA9IHZzO1xuICAgIHRoaXMuZnMgPSBmcztcbiAgICB0aGlzLlZBTyA9IG51bGw7XG4gICAgdGhpcy51bmlmb3JtU2V0dGVycyA9IG51bGw7XG4gICAgdGhpcy52ZXJ0ZXhTaGFkZXIgPSBudWxsO1xuICAgIHRoaXMuZnJhZ21lbnRTaGFkZXIgPSBudWxsO1xuICAgIHRoaXMucHJvZ3JhbSA9IG51bGw7XG4gICAgdGhpcy5nbCA9IG51bGw7XG4gIH1cbiAgc2V0Q29udGV4dChnbENvbnRleHRXcmFwcGVyKSB7XG4gICAgdGhpcy5jb250ZXh0ID0gZ2xDb250ZXh0V3JhcHBlcjtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBjcmVhdGVVbmlmb3JtU2V0dGVycygpIHtcbiAgICBjb25zdCB7IGdsIH0gPSB0aGlzLmNvbnRleHQ7XG4gICAgY29uc3QgeyB1bmlmb3JtU2V0dGVycywgdGV4dHVyZVNldHRlcnMgfSA9IGNyZWF0ZVVuaWZvcm1TZXR0ZXJzKFxuICAgICAgZ2wsXG4gICAgICB0aGlzLnByb2dyYW1cbiAgICApO1xuICAgIHRoaXMudGV4dHVyZVNldHRlcnMgPSB0ZXh0dXJlU2V0dGVycztcbiAgICB0aGlzLnVuaWZvcm1TZXR0ZXJzID0gdW5pZm9ybVNldHRlcnM7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgY29tcGlsZVNoYWRlcnMoKSB7XG4gICAgY29uc3QgeyBnbCB9ID0gdGhpcy5jb250ZXh0O1xuICAgIHRoaXMudmVydGV4U2hhZGVyID0gZ2wuY3JlYXRlU2hhZGVyKGdsLlZFUlRFWF9TSEFERVIpO1xuICAgIGdsLnNoYWRlclNvdXJjZSh0aGlzLnZlcnRleFNoYWRlciwgdGhpcy52cyk7XG4gICAgZ2wuY29tcGlsZVNoYWRlcih0aGlzLnZlcnRleFNoYWRlcik7XG4gICAgaWYgKCFnbC5nZXRTaGFkZXJQYXJhbWV0ZXIodGhpcy52ZXJ0ZXhTaGFkZXIsIGdsLkNPTVBJTEVfU1RBVFVTKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGdsLmdldFNoYWRlckluZm9Mb2codGhpcy52ZXJ0ZXhTaGFkZXIpKTtcbiAgICB9XG5cbiAgICB0aGlzLmZyYWdtZW50U2hhZGVyID0gZ2wuY3JlYXRlU2hhZGVyKGdsLkZSQUdNRU5UX1NIQURFUik7XG4gICAgZ2wuc2hhZGVyU291cmNlKHRoaXMuZnJhZ21lbnRTaGFkZXIsIHRoaXMuZnMpO1xuICAgIGdsLmNvbXBpbGVTaGFkZXIodGhpcy5mcmFnbWVudFNoYWRlcik7XG4gICAgaWYgKCFnbC5nZXRTaGFkZXJQYXJhbWV0ZXIodGhpcy5mcmFnbWVudFNoYWRlciwgZ2wuQ09NUElMRV9TVEFUVVMpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoZ2wuZ2V0U2hhZGVySW5mb0xvZyh0aGlzLmZyYWdtZW50U2hhZGVyKSk7XG4gICAgfVxuXG4gICAgdGhpcy5wcm9ncmFtID0gZ2wuY3JlYXRlUHJvZ3JhbSgpO1xuICAgIGdsLmF0dGFjaFNoYWRlcih0aGlzLnByb2dyYW0sIHRoaXMudmVydGV4U2hhZGVyKTtcbiAgICBnbC5hdHRhY2hTaGFkZXIodGhpcy5wcm9ncmFtLCB0aGlzLmZyYWdtZW50U2hhZGVyKTtcbiAgICBnbC5saW5rUHJvZ3JhbSh0aGlzLnByb2dyYW0pO1xuICAgIGlmICghZ2wuZ2V0UHJvZ3JhbVBhcmFtZXRlcih0aGlzLnByb2dyYW0sIGdsLkxJTktfU1RBVFVTKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGdsLmdldFByb2dyYW1JbmZvTG9nKHRoaXMucHJvZ3JhbSkpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBzZXRVbmlmb3Jtcyh1bmlmb3Jtcykge1xuICAgIHRoaXMuY29udGV4dC51c2VQcm9ncmFtSW5mbyh0aGlzKTtcbiAgICBPYmplY3Qua2V5cyh1bmlmb3JtcykuZm9yRWFjaCgobmFtZSkgPT4ge1xuICAgICAgY29uc3Qgc2V0dGVyID0gdGhpcy51bmlmb3JtU2V0dGVyc1tuYW1lXTtcbiAgICAgIGlmIChzZXR0ZXIpIHNldHRlcih1bmlmb3Jtc1tuYW1lXSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgc2V0VGV4dHVyZVVuaWZvcm1Vbml0KG5hbWUsIHVuaXQpIHtcbiAgICB0aGlzLmNvbnRleHQudXNlUHJvZ3JhbUluZm8odGhpcyk7XG4gICAgY29uc3Qgc2V0dGVyID0gdGhpcy50ZXh0dXJlU2V0dGVyc1tuYW1lXTtcbiAgICBpZiAoc2V0dGVyKSBzZXR0ZXIodW5pdCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cblxuZXhwb3J0IHsgZXhwYW5kZWRUeXBlZEFycmF5LCBQcm9ncmFtSW5mbywgZ2V0R0xUeXBlRm9yVHlwZWRBcnJheSB9O1xuIiwiaW1wb3J0IHZlcnQgZnJvbSAnLi92ZXJ0Lmdsc2wnXG5pbXBvcnQgZnJhZyBmcm9tICcuL2ZyYWcuZ2xzbCdcblxuZXhwb3J0IGRlZmF1bHQge3ZlcnQsIGZyYWd9IiwiaW1wb3J0IGRlZmF1bHRTaGFkZXJzIGZyb20gXCIuL2RlZmF1bHRcIjtcbmltcG9ydCBwb2ludExpZ2h0U2hhZGVycyBmcm9tIFwiLi9wb2ludExpZ2h0XCI7XG5cbmV4cG9ydCB7ZGVmYXVsdFNoYWRlcnMsIHBvaW50TGlnaHRTaGFkZXJzfSIsImltcG9ydCB2ZXJ0IGZyb20gJy4vdmVydC5nbHNsJ1xuaW1wb3J0IGZyYWcgZnJvbSAnLi9mcmFnLmdsc2wnXG5cbmV4cG9ydCBkZWZhdWx0IHt2ZXJ0LCBmcmFnfSIsImNvbnN0IHNldENhbnZhc1NpemUgPSAoY3R4LCB3aWR0aCwgaGVpZ2h0KSA9PiB7XG4gIGN0eC5jYW52YXMud2lkdGggPSB3aWR0aDtcbiAgY3R4LmNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG59O1xuXG5jb25zdCBtYWtlVGV4dHVyZSA9IChnbCwgY3R4KSA9PiB7XG4gIGNvbnN0IHRleCA9IGdsLmNyZWF0ZVRleHR1cmUoKTtcbiAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgdGV4KTtcblxuICBnbC50ZXhJbWFnZTJEKFxuICAgIGdsLlRFWFRVUkVfMkQsXG4gICAgMCxcbiAgICBnbC5SR0JBLFxuICAgIGdsLlJHQkEsXG4gICAgZ2wuVU5TSUdORURfQllURSxcbiAgICBjdHguY2FudmFzXG4gICk7XG4gIHJldHVybiB0ZXg7XG59O1xuY29uc3QgbWFrZVN0cmlwZVRleHR1cmUgPSAoZ2wsIG9wdGlvbnMpID0+IHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHZhciB3aWR0aCA9IG9wdGlvbnMud2lkdGggfHwgNDtcbiAgdmFyIGhlaWdodCA9IG9wdGlvbnMuaGVpZ2h0IHx8IDQ7XG4gIHZhciBjb2xvcjEgPSBvcHRpb25zLmNvbG9yMSB8fCBcInJnYmEoMSwwLDAsMC4xKVwiO1xuICB2YXIgY29sb3IyID0gb3B0aW9ucy5jb2xvcjIgfHwgXCJyZ2JhKDEsMSwxLDAuNSlcIjtcbiAgY29uc3QgY3R4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKS5nZXRDb250ZXh0KFwiMmRcIik7XG4gIHNldENhbnZhc1NpemUoY3R4LCB3aWR0aCwgaGVpZ2h0KTtcblxuICBjdHguZmlsbFN0eWxlID0gY29sb3IxO1xuICBjdHguZmlsbFJlY3QoMCwgMCwgd2lkdGgsIGhlaWdodCk7XG4gIGN0eC5maWxsU3R5bGUgPSBjb2xvcjI7XG4gIGN0eC5maWxsUmVjdCgwLCAwLCB3aWR0aCwgaGVpZ2h0IC8gMik7XG5cbiAgcmV0dXJuIG1ha2VUZXh0dXJlKGdsLCBjdHgpO1xufTtcbmNvbnN0IG1ha2VTdHJpcGVJbWcgPSAob3B0aW9ucykgPT4ge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgdmFyIHdpZHRoID0gb3B0aW9ucy53aWR0aCB8fCA0O1xuICB2YXIgaGVpZ2h0ID0gb3B0aW9ucy5oZWlnaHQgfHwgNDtcbiAgdmFyIGNvbG9yMSA9IG9wdGlvbnMuY29sb3IxIHx8IFwicmdiYSgxLDAsMCwwLjUpXCI7XG4gIHZhciBjb2xvcjIgPSBvcHRpb25zLmNvbG9yMiB8fCBcInJnYmEoMCwwLDEsMSlcIjtcbiAgY29uc3QgY3R4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKS5nZXRDb250ZXh0KFwiMmRcIik7XG4gIHNldENhbnZhc1NpemUoY3R4LCB3aWR0aCwgaGVpZ2h0KTtcblxuICBjdHguZmlsbFN0eWxlID0gY29sb3IxO1xuICBjdHguZmlsbFJlY3QoMCwgMCwgd2lkdGgsIGhlaWdodCk7XG4gIGN0eC5maWxsU3R5bGUgPSBjb2xvcjI7XG4gIGN0eC5maWxsUmVjdCgwLCAwLCB3aWR0aCwgaGVpZ2h0IC8gMik7XG5cbiAgcmV0dXJuIGN0eC5jYW52YXM7XG59O1xuY29uc3QgbWFrZUltZ0Zyb21TdmdYbWwgPSAoeG1sLCBvcHRpb25zID0ge30pID0+IHtcbiAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgdmFyIHN2ZzY0ID0gYnRvYSh4bWwpO1xuICB2YXIgYjY0U3RhcnQgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsXCI7XG4gIHZhciBpbWFnZTY0ID0gYjY0U3RhcnQgKyBzdmc2NDtcbiAgaW1nLnNyYyA9IGltYWdlNjQ7XG5cbiAgY29uc3Qgd2lkdGggPSBvcHRpb25zLndpZHRoIHx8IDEwMDtcbiAgY29uc3QgaGVpZ2h0ID0gb3B0aW9ucy5oZWlnaHQgfHwgMTAwO1xuICBjb25zdCB4ID0gb3B0aW9ucy54IHx8IDE7XG4gIGNvbnN0IHkgPSBvcHRpb25zLnkgfHwgNTA7XG5cbiAgY29uc3QgY3R4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKS5nZXRDb250ZXh0KFwiMmRcIik7XG4gIHNldENhbnZhc1NpemUoY3R4LCB3aWR0aCwgaGVpZ2h0KTtcblxuICBjdHguZHJhd0ltYWdlKGltZywgeCwgeSwgd2lkdGgsIGhlaWdodCk7XG4gIGN0eC5maWxsU3R5bGUgPSBcInJnYmEoMCwwLDAsMSlcIjtcbiAgY3R4LmZpbGxSZWN0KDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xuICByZXR1cm4gY3R4LmltZztcbn07XG5jb25zdCBzZXRUZXh0dXJlVW5pdHMgPSAoZ2wsIHRleHR1cmUsIHVuaXROdW0pID0+IHtcbiAgZ2wuYWN0aXZlVGV4dHVyZShnbC5URVhUVVJFMCArIHVuaXROdW0pO1xuICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCB0ZXh0dXJlKTtcbn07XG5cbmNsYXNzIFRleHR1cmVJbmZvIHtcbiAgc3RhdGljIG1ha2VJbWdGcm9tU3ZnWG1sID0gbWFrZUltZ0Zyb21TdmdYbWw7XG4gIGNvbnN0cnVjdG9yKGdsKSB7XG4gICAgdGhpcy50ZXh0dXJlID0gZ2wuY3JlYXRlVGV4dHVyZSgpO1xuICAgIHRoaXMuZ2wgPSBnbFxuICB9XG4gIGZyb21JbWFnZShpbWFnZSl7XG4gICAgY29uc3Qge2dsfSA9IHRoaXNcbiAgICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCB0aGlzLnRleHR1cmUpO1xuICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX1dSQVBfUywgZ2wuQ0xBTVBfVE9fRURHRSk7XG4gICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfV1JBUF9ULCBnbC5DTEFNUF9UT19FREdFKTtcbiAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9NSU5fRklMVEVSLCBnbC5ORUFSRVNUKTtcbiAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9NQUdfRklMVEVSLCBnbC5ORUFSRVNUKTtcbiAgICAgIGdsLnRleEltYWdlMkQoXG4gICAgICAgIGdsLlRFWFRVUkVfMkQsXG4gICAgICAgIDAsXG4gICAgICAgIGdsLlJHQkEsXG4gICAgICAgIGdsLlJHQkEsXG4gICAgICAgIGdsLlVOU0lHTkVEX0JZVEUsXG4gICAgICAgIGltYWdlXG4gICAgICApO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIGdldFRleHR1cmUoKXtcbiAgICByZXR1cm4gdGhpcy50ZXh0dXJlXG4gIH1cbn1cbmV4cG9ydCB7IG1ha2VJbWdGcm9tU3ZnWG1sLCBtYWtlU3RyaXBlSW1nLCBUZXh0dXJlSW5mb307XG4iLCJjb25zdCBBQUJCID0gcmVxdWlyZSgnLi9zcmMvYWFiYicpXG5jb25zdCBtMyA9IHJlcXVpcmUoJy4vc3JjL20zJylcbmNvbnN0IG00ID0gcmVxdWlyZSgnLi9zcmMvbTQnKVxuY29uc3Qge05vZGUgLCBUUlN9PSByZXF1aXJlKCcuL3NyYy9ub2RlJylcbmNvbnN0IHZlY3RvciA9IHJlcXVpcmUoJy4vc3JjL3ZlY3RvcicpXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIEFBQkIsIG0zLCBtNCwgTm9kZSwgVFJTLCB2ZWN0b3Jcbn0iLCJjbGFzcyBBQUJCe1xuICAgIGNvbnN0cnVjdG9yKG1pbiwgbWF4KXtcbiAgICAgICAgdGhpcy5taW4gPSBtaW5cbiAgICAgICAgdGhpcy5tYXggPSBtYXhcbiAgICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IEFBQkIiLCJjb25zdCBtMyA9IHtcbiAgICBtdWx0aXBseSA6IGZ1bmN0aW9uKGIsIGEpIHtcbiAgICAgICAgdmFyIGEwMCA9IGFbMCAqIDMgKyAwXTtcbiAgICAgICAgdmFyIGEwMSA9IGFbMCAqIDMgKyAxXTtcbiAgICAgICAgdmFyIGEwMiA9IGFbMCAqIDMgKyAyXTtcbiAgICAgICAgdmFyIGExMCA9IGFbMSAqIDMgKyAwXTtcbiAgICAgICAgdmFyIGExMSA9IGFbMSAqIDMgKyAxXTtcbiAgICAgICAgdmFyIGExMiA9IGFbMSAqIDMgKyAyXTtcbiAgICAgICAgdmFyIGEyMCA9IGFbMiAqIDMgKyAwXTtcbiAgICAgICAgdmFyIGEyMSA9IGFbMiAqIDMgKyAxXTtcbiAgICAgICAgdmFyIGEyMiA9IGFbMiAqIDMgKyAyXTtcbiAgICAgICAgdmFyIGIwMCA9IGJbMCAqIDMgKyAwXTtcbiAgICAgICAgdmFyIGIwMSA9IGJbMCAqIDMgKyAxXTtcbiAgICAgICAgdmFyIGIwMiA9IGJbMCAqIDMgKyAyXTtcbiAgICAgICAgdmFyIGIxMCA9IGJbMSAqIDMgKyAwXTtcbiAgICAgICAgdmFyIGIxMSA9IGJbMSAqIDMgKyAxXTtcbiAgICAgICAgdmFyIGIxMiA9IGJbMSAqIDMgKyAyXTtcbiAgICAgICAgdmFyIGIyMCA9IGJbMiAqIDMgKyAwXTtcbiAgICAgICAgdmFyIGIyMSA9IGJbMiAqIDMgKyAxXTtcbiAgICAgICAgdmFyIGIyMiA9IGJbMiAqIDMgKyAyXTtcbiAgICBcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICBiMDAgKiBhMDAgKyBiMDEgKiBhMTAgKyBiMDIgKiBhMjAsXG4gICAgICAgICAgYjAwICogYTAxICsgYjAxICogYTExICsgYjAyICogYTIxLFxuICAgICAgICAgIGIwMCAqIGEwMiArIGIwMSAqIGExMiArIGIwMiAqIGEyMixcbiAgICAgICAgICBiMTAgKiBhMDAgKyBiMTEgKiBhMTAgKyBiMTIgKiBhMjAsXG4gICAgICAgICAgYjEwICogYTAxICsgYjExICogYTExICsgYjEyICogYTIxLFxuICAgICAgICAgIGIxMCAqIGEwMiArIGIxMSAqIGExMiArIGIxMiAqIGEyMixcbiAgICAgICAgICBiMjAgKiBhMDAgKyBiMjEgKiBhMTAgKyBiMjIgKiBhMjAsXG4gICAgICAgICAgYjIwICogYTAxICsgYjIxICogYTExICsgYjIyICogYTIxLFxuICAgICAgICAgIGIyMCAqIGEwMiArIGIyMSAqIGExMiArIGIyMiAqIGEyMixcbiAgICAgICAgXTtcbiAgICAgIH0sXG4gICAgICB4Um90YXRpb246IGZ1bmN0aW9uKGFuZ2xlSW5SYWRpYW5zKSB7XG4gICAgICAgIHZhciBjID0gTWF0aC5jb3MoYW5nbGVJblJhZGlhbnMpO1xuICAgICAgICB2YXIgcyA9IE1hdGguc2luKGFuZ2xlSW5SYWRpYW5zKTtcbiAgICAgXG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgMSwgMCwgMCwgXG4gICAgICAgICAgMCwgYywgcywgXG4gICAgICAgICAgMCwgLXMsIGNcbiAgICAgICAgXTtcbiAgICAgIH0sXG4gICAgIFxuICAgICAgeVJvdGF0aW9uOiBmdW5jdGlvbihhbmdsZUluUmFkaWFucykge1xuICAgICAgICB2YXIgYyA9IE1hdGguY29zKGFuZ2xlSW5SYWRpYW5zKTtcbiAgICAgICAgdmFyIHMgPSBNYXRoLnNpbihhbmdsZUluUmFkaWFucyk7XG4gICAgIFxuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgIGMsIDAsIC1zLCBcbiAgICAgICAgICAwLCAxLCAwLCBcbiAgICAgICAgICBzLCAwLCBjXG4gICAgICAgIF07XG4gICAgICB9LFxuICAgICBcbiAgICAgIHpSb3RhdGlvbjogZnVuY3Rpb24oYW5nbGVJblJhZGlhbnMpIHtcbiAgICAgICAgdmFyIGMgPSBNYXRoLmNvcyhhbmdsZUluUmFkaWFucyk7XG4gICAgICAgIHZhciBzID0gTWF0aC5zaW4oYW5nbGVJblJhZGlhbnMpO1xuICAgICBcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgYywgcywgMCwgXG4gICAgICAgICAgLXMsIGMsIDAsXG4gICAgICAgICAgIDAsIDAsIDFcbiAgICAgICAgXTtcbiAgICAgIH0sXG4gICAgICBtM1RvbTQgOiBmdW5jdGlvbihtKXtcbiAgICAgICAgY29uc3QgZHN0ID0gbmV3IEZsb2F0MzJBcnJheSgxNilcbiAgICAgICAgZHN0WyAwXSA9IG1bMF1cbiAgICAgICAgZHN0WyAxXSA9IG1bMV1cbiAgICAgICAgZHN0WyAyXSA9IG1bMl1cbiAgICAgICAgZHN0WyAzXSA9IDBcbiAgICAgICAgZHN0WyA0XSA9IG1bM11cbiAgICAgICAgZHN0WyA1XSA9IG1bNF1cbiAgICAgICAgZHN0WyA2XSA9IG1bNV1cbiAgICAgICAgZHN0WyA3XSA9IDBcbiAgICAgICAgZHN0WyA4XSA9IG1bNl1cbiAgICAgICAgZHN0WyA5XSA9IG1bN11cbiAgICAgICAgZHN0WzEwXSA9IG1bOF1cbiAgICAgICAgZHN0WzExXSA9IDBcbiAgICAgICAgZHN0WzEyXSA9IDBcbiAgICAgICAgZHN0WzEzXSA9IDBcbiAgICAgICAgZHN0WzE0XSA9IDBcbiAgICAgICAgZHN0WzE1XSA9IDFcbiAgICAgICAgcmV0dXJuIGRzdFxuICAgICAgfSxcbiAgICAgIHhSb3RhdGU6IGZ1bmN0aW9uKG0sIGFuZ2xlSW5SYWRpYW5zKSB7XG4gICAgICAgIHJldHVybiBtMy5tdWx0aXBseShtLCBtMy54Um90YXRpb24oYW5nbGVJblJhZGlhbnMpKTtcbiAgICAgIH0sXG4gICAgIFxuICAgICAgeVJvdGF0ZTogZnVuY3Rpb24obSwgYW5nbGVJblJhZGlhbnMpIHtcbiAgICAgICAgcmV0dXJuIG0zLm11bHRpcGx5KG0sIG0zLnlSb3RhdGlvbihhbmdsZUluUmFkaWFucykpO1xuICAgICAgfSxcbiAgICAgXG4gICAgICB6Um90YXRlOiBmdW5jdGlvbihtLCBhbmdsZUluUmFkaWFucykge1xuICAgICAgICByZXR1cm4gbTMubXVsdGlwbHkobSwgbTMuelJvdGF0aW9uKGFuZ2xlSW5SYWRpYW5zKSk7XG4gICAgICB9LFxuICAgICAgdHJhbnNmb3JtUG9pbnQgOiBmdW5jdGlvbihtLCB2LCBkc3QpIHtcbiAgICAgICAgZHN0ID0gZHN0IHx8IG5ldyBGbG9hdDMyQXJyYXkoMyk7XG4gICAgICAgIHZhciB2MCA9IHZbMF07XG4gICAgICAgIHZhciB2MSA9IHZbMV07XG4gICAgICAgIHZhciB2MiA9IHZbMl07XG4gICAgICAgIFxuICAgIFxuICAgICAgICBkc3RbMF0gPSAodjAgKiBtWzAgKiAzICsgMF0gKyB2MSAqIG1bMSAqIDMgKyAwXSArIHYyICogbVsyICogMyArIDBdICApIFxuICAgICAgICBkc3RbMV0gPSAodjAgKiBtWzAgKiAzICsgMV0gKyB2MSAqIG1bMSAqIDMgKyAxXSArIHYyICogbVsyICogMyArIDFdICApIFxuICAgICAgICBkc3RbMl0gPSAodjAgKiBtWzAgKiAzICsgMl0gKyB2MSAqIG1bMSAqIDMgKyAyXSArIHYyICogbVsyICogMyArIDJdICkgXG4gICAgXG4gICAgICAgIHJldHVybiBkc3Q7XG4gICAgICB9LFxuICAgICAgaWRlbnRpdHkgOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAxLCAwLCAwLFxuICAgICAgICAgIDAsIDEsIDAsXG4gICAgICAgICAgMCwgMCwgMSxcbiAgICAgICAgXTtcbiAgICAgIH0sXG4gICAgICB0cmFuc3Bvc2UgOiBmdW5jdGlvbihtKXtcbiAgICAgICAgIFxuICAgICAgICAgIGRzdCA9IG5ldyBGbG9hdDMyQXJyYXkoOSlcbiAgICAgICAgICBkc3RbMF0gPSBtWzBdXG4gICAgICAgICAgZHN0WzFdID0gbVszXVxuICAgICAgICAgIGRzdFsyXSA9IG1bNl1cbiAgICAgICAgICBkc3RbM10gPSBtWzFdXG4gICAgICAgICAgZHN0WzRdID0gbVs0XVxuICAgICAgICAgIGRzdFs1XSA9IG1bN11cbiAgICAgICAgICBkc3RbNl0gPSBtWzJdXG4gICAgICAgICAgZHN0WzddID0gbVs1XVxuICAgICAgICAgIGRzdFs4XSA9IG1bOF1cbiAgICAgICAgICByZXR1cm4gZHN0XG4gICAgICB9LFxuICAgICAgc2NhbGluZyA6IGZ1bmN0aW9uKHN4LHN5LHN6KXtcbiAgICAgICAgcmV0dXJuIG5ldyBGbG9hdDMyQXJyYXkoW1xuICAgICAgICAgICAgICAgICAgICBzeCwgMCwgMCxcbiAgICAgICAgICAgICAgICAgICAgMCwgc3ksIDAsXG4gICAgICAgICAgICAgICAgICAgIDAsICAwLCBzelxuICAgICAgICAgICAgICBdKVxuICAgICAgfSxcbiAgICAgIHNjYWxlIDogZnVuY3Rpb24obSwgc3gsc3ksc3ope1xuICAgICAgICByZXR1cm4gbTMubXVsdGlwbHkobSwgbTMuc2NhbGluZyhzeCwgc3ksIHN6KSlcbiAgICAgIH0sXG4gICAgICAvKlxuICAgICAgMCAxIDJcbiAgICAgIDMgNCA1XG4gICAgICA2IDcgOFxuICAgICAgKi9cbiAgICAgIGludmVyc2UgOiBmdW5jdGlvbihtKXtcbiAgICAgICBjb25zdCBkZXQgPSBtWzBdICogbVs0XSAqIG1bOF0gKyBcbiAgICAgICAgICAgICAgICAgICBtWzJdICogbVszXSAqIG1bN10gK1xuICAgICAgICAgICAgICAgICAgIG1bMV0gKiBtWzVdICogbVs2XSAtXG4gICAgICAgICAgICAgICAgICAgbVsyXSAqIG1bNF0gKiBtWzZdIC1cbiAgICAgICAgICAgICAgICAgICBtWzBdICogbVs1XSAqIG1bN10gLVxuICAgICAgICAgICAgICAgICAgIG1bOF0gKiBtWzNdICogbVsyXSBcbiAgICAgICAgY29uc3QgZHN0ID0gbmV3IEZsb2F0MzJBcnJheSg5KVxuICAgICAgICBkc3RbMF0gPSAobVs0XSAqIG1bOF0gLSBtWzddICogbVs1XSkgLyBkZXRcbiAgICAgICAgZHN0WzFdID0gKG1bM10gKiBtWzhdIC0gbVs2XSAqIG1bNV0pIC8gZGV0XG4gICAgICAgIGRzdFsyXSA9IChtWzNdICogbVs3XSAtIG1bNl0gKiBtWzRdKSAvIGRldFxuICAgICAgICBkc3RbM10gPSAobVsxXSAqIG1bOF0gLSBtWzJdICogbVs3XSkgLyBkZXRcbiAgICAgICAgZHN0WzRdID0gKG1bMF0gKiBtWzhdIC0gbVsyXSAqIG1bNl0pIC8gZGV0XG4gICAgICAgIGRzdFs1XSA9IChtWzBdICogbVs3XSAtIG1bMV0gKiBtWzZdKSAvIGRldFxuICAgICAgICBkc3RbNl0gPSAobVsxXSAqIG1bNV0gLSBtWzJdICogbVs0XSkgLyBkZXRcbiAgICAgICAgZHN0WzddID0gKG1bMF0gKiBtWzVdIC0gbVsyXSAqIG1bM10pIC8gZGV0XG4gICAgICAgIGRzdFs4XSA9IChtWzBdICogbVs0XSAtIG1bMV0gKiBtWzRdKSAvIGRldFxuICAgICAgICBcbiAgICAgIH0sXG4gICAgICB0b1N0cmluZyhtKXtcbiAgICAgICAgcmV0dXJuIG0ucmVkdWNlKChhY2MsZWwsaWR4KSA9PiAoaWR4KSAlIDMgPT09IDAgPyBhY2MgKz0gJ1xcbicgKyBlbCA6IGFjYyArPSAnICcgKyBlbCApXG4gICAgICB9LFxuICAgICAgZG90KHYxLHYyKXtcbiAgICAgICAgcmV0dXJuIHYxWzBdKnYyWzBdICsgdjFbMV0qdjJbMV0gKyB2MVsyXSAqIHYyWzJdXG4gICAgICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IG0zIiwiY29uc3QgTWF0VHlwZSA9IEZsb2F0MzJBcnJheTtcbmNvbnN0IHtub3JtfSA9IHJlcXVpcmUoJy4vdmVjdG9yJylcbmNvbnN0IG00ID0ge1xuICBtdWx0aXBseTogZnVuY3Rpb24gKGEsIGIsIGRzdCkge1xuICAgIGRzdCA9IGRzdCB8fCBuZXcgTWF0VHlwZSgxNik7XG4gICAgdmFyIGEwMCA9IGFbMCAqIDQgKyAwXTtcbiAgICB2YXIgYTAxID0gYVswICogNCArIDFdO1xuICAgIHZhciBhMDIgPSBhWzAgKiA0ICsgMl07XG4gICAgdmFyIGEwMyA9IGFbMCAqIDQgKyAzXTtcbiAgICB2YXIgYTEwID0gYVsxICogNCArIDBdO1xuICAgIHZhciBhMTEgPSBhWzEgKiA0ICsgMV07XG4gICAgdmFyIGExMiA9IGFbMSAqIDQgKyAyXTtcbiAgICB2YXIgYTEzID0gYVsxICogNCArIDNdO1xuICAgIHZhciBhMjAgPSBhWzIgKiA0ICsgMF07XG4gICAgdmFyIGEyMSA9IGFbMiAqIDQgKyAxXTtcbiAgICB2YXIgYTIyID0gYVsyICogNCArIDJdO1xuICAgIHZhciBhMjMgPSBhWzIgKiA0ICsgM107XG4gICAgdmFyIGEzMCA9IGFbMyAqIDQgKyAwXTtcbiAgICB2YXIgYTMxID0gYVszICogNCArIDFdO1xuICAgIHZhciBhMzIgPSBhWzMgKiA0ICsgMl07XG4gICAgdmFyIGEzMyA9IGFbMyAqIDQgKyAzXTtcbiAgICB2YXIgYjAwID0gYlswICogNCArIDBdO1xuICAgIHZhciBiMDEgPSBiWzAgKiA0ICsgMV07XG4gICAgdmFyIGIwMiA9IGJbMCAqIDQgKyAyXTtcbiAgICB2YXIgYjAzID0gYlswICogNCArIDNdO1xuICAgIHZhciBiMTAgPSBiWzEgKiA0ICsgMF07XG4gICAgdmFyIGIxMSA9IGJbMSAqIDQgKyAxXTtcbiAgICB2YXIgYjEyID0gYlsxICogNCArIDJdO1xuICAgIHZhciBiMTMgPSBiWzEgKiA0ICsgM107XG4gICAgdmFyIGIyMCA9IGJbMiAqIDQgKyAwXTtcbiAgICB2YXIgYjIxID0gYlsyICogNCArIDFdO1xuICAgIHZhciBiMjIgPSBiWzIgKiA0ICsgMl07XG4gICAgdmFyIGIyMyA9IGJbMiAqIDQgKyAzXTtcbiAgICB2YXIgYjMwID0gYlszICogNCArIDBdO1xuICAgIHZhciBiMzEgPSBiWzMgKiA0ICsgMV07XG4gICAgdmFyIGIzMiA9IGJbMyAqIDQgKyAyXTtcbiAgICB2YXIgYjMzID0gYlszICogNCArIDNdO1xuICAgIGRzdFswXSA9IGIwMCAqIGEwMCArIGIwMSAqIGExMCArIGIwMiAqIGEyMCArIGIwMyAqIGEzMDtcbiAgICBkc3RbMV0gPSBiMDAgKiBhMDEgKyBiMDEgKiBhMTEgKyBiMDIgKiBhMjEgKyBiMDMgKiBhMzE7XG4gICAgZHN0WzJdID0gYjAwICogYTAyICsgYjAxICogYTEyICsgYjAyICogYTIyICsgYjAzICogYTMyO1xuICAgIGRzdFszXSA9IGIwMCAqIGEwMyArIGIwMSAqIGExMyArIGIwMiAqIGEyMyArIGIwMyAqIGEzMztcbiAgICBkc3RbNF0gPSBiMTAgKiBhMDAgKyBiMTEgKiBhMTAgKyBiMTIgKiBhMjAgKyBiMTMgKiBhMzA7XG4gICAgZHN0WzVdID0gYjEwICogYTAxICsgYjExICogYTExICsgYjEyICogYTIxICsgYjEzICogYTMxO1xuICAgIGRzdFs2XSA9IGIxMCAqIGEwMiArIGIxMSAqIGExMiArIGIxMiAqIGEyMiArIGIxMyAqIGEzMjtcbiAgICBkc3RbN10gPSBiMTAgKiBhMDMgKyBiMTEgKiBhMTMgKyBiMTIgKiBhMjMgKyBiMTMgKiBhMzM7XG4gICAgZHN0WzhdID0gYjIwICogYTAwICsgYjIxICogYTEwICsgYjIyICogYTIwICsgYjIzICogYTMwO1xuICAgIGRzdFs5XSA9IGIyMCAqIGEwMSArIGIyMSAqIGExMSArIGIyMiAqIGEyMSArIGIyMyAqIGEzMTtcbiAgICBkc3RbMTBdID0gYjIwICogYTAyICsgYjIxICogYTEyICsgYjIyICogYTIyICsgYjIzICogYTMyO1xuICAgIGRzdFsxMV0gPSBiMjAgKiBhMDMgKyBiMjEgKiBhMTMgKyBiMjIgKiBhMjMgKyBiMjMgKiBhMzM7XG4gICAgZHN0WzEyXSA9IGIzMCAqIGEwMCArIGIzMSAqIGExMCArIGIzMiAqIGEyMCArIGIzMyAqIGEzMDtcbiAgICBkc3RbMTNdID0gYjMwICogYTAxICsgYjMxICogYTExICsgYjMyICogYTIxICsgYjMzICogYTMxO1xuICAgIGRzdFsxNF0gPSBiMzAgKiBhMDIgKyBiMzEgKiBhMTIgKyBiMzIgKiBhMjIgKyBiMzMgKiBhMzI7XG4gICAgZHN0WzE1XSA9IGIzMCAqIGEwMyArIGIzMSAqIGExMyArIGIzMiAqIGEyMyArIGIzMyAqIGEzMztcbiAgICByZXR1cm4gZHN0O1xuICB9LFxuXG4gIHRyYW5zbGF0aW9uOiBmdW5jdGlvbiAodHgsIHR5LCB0eikge1xuICAgIHJldHVybiBbMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgdHgsIHR5LCB0eiwgMV07XG4gIH0sXG5cbiAgeFJvdGF0aW9uOiBmdW5jdGlvbiAoYW5nbGVJblJhZGlhbnMpIHtcbiAgICB2YXIgYyA9IE1hdGguY29zKGFuZ2xlSW5SYWRpYW5zKTtcbiAgICB2YXIgcyA9IE1hdGguc2luKGFuZ2xlSW5SYWRpYW5zKTtcblxuICAgIHJldHVybiBbMSwgMCwgMCwgMCwgMCwgYywgcywgMCwgMCwgLXMsIGMsIDAsIDAsIDAsIDAsIDFdO1xuICB9LFxuXG4gIHlSb3RhdGlvbjogZnVuY3Rpb24gKGFuZ2xlSW5SYWRpYW5zKSB7XG4gICAgdmFyIGMgPSBNYXRoLmNvcyhhbmdsZUluUmFkaWFucyk7XG4gICAgdmFyIHMgPSBNYXRoLnNpbihhbmdsZUluUmFkaWFucyk7XG5cbiAgICByZXR1cm4gW2MsIDAsIC1zLCAwLCAwLCAxLCAwLCAwLCBzLCAwLCBjLCAwLCAwLCAwLCAwLCAxXTtcbiAgfSxcblxuICB6Um90YXRpb246IGZ1bmN0aW9uIChhbmdsZUluUmFkaWFucykge1xuICAgIHZhciBjID0gTWF0aC5jb3MoYW5nbGVJblJhZGlhbnMpO1xuICAgIHZhciBzID0gTWF0aC5zaW4oYW5nbGVJblJhZGlhbnMpO1xuXG4gICAgcmV0dXJuIFtjLCBzLCAwLCAwLCAtcywgYywgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMV07XG4gIH0sXG5cbiAgc2NhbGluZzogZnVuY3Rpb24gKHN4LCBzeSwgc3opIHtcbiAgICByZXR1cm4gW3N4LCAwLCAwLCAwLCAwLCBzeSwgMCwgMCwgMCwgMCwgc3osIDAsIDAsIDAsIDAsIDFdO1xuICB9LFxuICB0cmFuc2xhdGU6IGZ1bmN0aW9uIChtLCB0eCwgdHksIHR6KSB7XG4gICAgcmV0dXJuIG00Lm11bHRpcGx5KG0sIG00LnRyYW5zbGF0aW9uKHR4LCB0eSwgdHopKTtcbiAgfSxcblxuICB4Um90YXRlOiBmdW5jdGlvbiAobSwgYW5nbGVJblJhZGlhbnMpIHtcbiAgICByZXR1cm4gbTQubXVsdGlwbHkobSwgbTQueFJvdGF0aW9uKGFuZ2xlSW5SYWRpYW5zKSk7XG4gIH0sXG5cbiAgeVJvdGF0ZTogZnVuY3Rpb24gKG0sIGFuZ2xlSW5SYWRpYW5zKSB7XG4gICAgcmV0dXJuIG00Lm11bHRpcGx5KG0sIG00LnlSb3RhdGlvbihhbmdsZUluUmFkaWFucykpO1xuICB9LFxuXG4gIHpSb3RhdGU6IGZ1bmN0aW9uIChtLCBhbmdsZUluUmFkaWFucykge1xuICAgIHJldHVybiBtNC5tdWx0aXBseShtLCBtNC56Um90YXRpb24oYW5nbGVJblJhZGlhbnMpKTtcbiAgfSxcblxuICBzY2FsZTogZnVuY3Rpb24gKG0sIHN4LCBzeSwgc3opIHtcbiAgICByZXR1cm4gbTQubXVsdGlwbHkobSwgbTQuc2NhbGluZyhzeCwgc3ksIHN6KSk7XG4gIH0sXG4gIG1ha2VPcnQ6IGZ1bmN0aW9uICh2KSB7XG4gICAgY29uc3QgbyA9IFswLCAwLCAwXTtcbiAgICBjb25zdCBub3JtID0gTWF0aC5zcXJ0KHZbMF0gKiB2WzBdICsgdlsxXSAqIHZbMV0gKyB2WzJdICogdlsyXSk7XG4gICAgb1swXSA9IHZbMF0gLyBub3JtO1xuICAgIG9bMV0gPSB2WzFdIC8gbm9ybTtcbiAgICBvWzJdID0gdlsyXSAvIG5vcm07XG4gICAgcmV0dXJuIG87XG4gIH0sXG4gIHByb2plY3Rpb246IGZ1bmN0aW9uICh3aWR0aCwgaGVpZ2h0LCBkZXB0aCkge1xuICAgIC8vINCt0YLQsCDQvNCw0YLRgNC40YbQsCDQv9C10YDQtdCy0L7RgNCw0YfQuNCy0LDQtdGCIFksINGH0YLQvtCx0YsgMCDQsdGL0Lsg0L3QsNCy0LXRgNGF0YNcbiAgICByZXR1cm4gW1xuICAgICAgMiAvIHdpZHRoLFxuICAgICAgMCxcbiAgICAgIDAsXG4gICAgICAwLFxuICAgICAgMCxcbiAgICAgIC0yIC8gaGVpZ2h0LFxuICAgICAgMCxcbiAgICAgIDAsXG4gICAgICAwLFxuICAgICAgMCxcbiAgICAgIDIgLyBkZXB0aCxcbiAgICAgIDAsXG4gICAgICAtMSxcbiAgICAgIDEsXG4gICAgICAwLFxuICAgICAgMSxcbiAgICBdO1xuICB9LFxuICBwZXJzcGVjdGl2ZTogZnVuY3Rpb24gKGZpZWxkT2ZWaWV3SW5SYWRpYW5zLCBhc3BlY3QsIG5lYXIsIGZhcikge1xuICAgIHZhciBmID0gTWF0aC50YW4oTWF0aC5QSSAqIDAuNSAtIDAuNSAqIGZpZWxkT2ZWaWV3SW5SYWRpYW5zKTtcbiAgICB2YXIgcmFuZ2VJbnYgPSAxLjAgLyAobmVhciAtIGZhcik7XG5cbiAgICByZXR1cm4gW1xuICAgICAgZiAvIGFzcGVjdCxcbiAgICAgIDAsXG4gICAgICAwLFxuICAgICAgMCxcbiAgICAgIDAsXG4gICAgICBmLFxuICAgICAgMCxcbiAgICAgIDAsXG4gICAgICAwLFxuICAgICAgMCxcbiAgICAgIChuZWFyICsgZmFyKSAqIHJhbmdlSW52LFxuICAgICAgLTEsXG4gICAgICAwLFxuICAgICAgMCxcbiAgICAgIG5lYXIgKiBmYXIgKiByYW5nZUludiAqIDIsXG4gICAgICAwLFxuICAgIF07XG4gIH0sXG4gIGludmVyc2U6IGZ1bmN0aW9uIChtKSB7XG4gICAgdmFyIG0wMCA9IG1bMCAqIDQgKyAwXTtcbiAgICB2YXIgbTAxID0gbVswICogNCArIDFdO1xuICAgIHZhciBtMDIgPSBtWzAgKiA0ICsgMl07XG4gICAgdmFyIG0wMyA9IG1bMCAqIDQgKyAzXTtcbiAgICB2YXIgbTEwID0gbVsxICogNCArIDBdO1xuICAgIHZhciBtMTEgPSBtWzEgKiA0ICsgMV07XG4gICAgdmFyIG0xMiA9IG1bMSAqIDQgKyAyXTtcbiAgICB2YXIgbTEzID0gbVsxICogNCArIDNdO1xuICAgIHZhciBtMjAgPSBtWzIgKiA0ICsgMF07XG4gICAgdmFyIG0yMSA9IG1bMiAqIDQgKyAxXTtcbiAgICB2YXIgbTIyID0gbVsyICogNCArIDJdO1xuICAgIHZhciBtMjMgPSBtWzIgKiA0ICsgM107XG4gICAgdmFyIG0zMCA9IG1bMyAqIDQgKyAwXTtcbiAgICB2YXIgbTMxID0gbVszICogNCArIDFdO1xuICAgIHZhciBtMzIgPSBtWzMgKiA0ICsgMl07XG4gICAgdmFyIG0zMyA9IG1bMyAqIDQgKyAzXTtcbiAgICB2YXIgdG1wXzAgPSBtMjIgKiBtMzM7XG4gICAgdmFyIHRtcF8xID0gbTMyICogbTIzO1xuICAgIHZhciB0bXBfMiA9IG0xMiAqIG0zMztcbiAgICB2YXIgdG1wXzMgPSBtMzIgKiBtMTM7XG4gICAgdmFyIHRtcF80ID0gbTEyICogbTIzO1xuICAgIHZhciB0bXBfNSA9IG0yMiAqIG0xMztcbiAgICB2YXIgdG1wXzYgPSBtMDIgKiBtMzM7XG4gICAgdmFyIHRtcF83ID0gbTMyICogbTAzO1xuICAgIHZhciB0bXBfOCA9IG0wMiAqIG0yMztcbiAgICB2YXIgdG1wXzkgPSBtMjIgKiBtMDM7XG4gICAgdmFyIHRtcF8xMCA9IG0wMiAqIG0xMztcbiAgICB2YXIgdG1wXzExID0gbTEyICogbTAzO1xuICAgIHZhciB0bXBfMTIgPSBtMjAgKiBtMzE7XG4gICAgdmFyIHRtcF8xMyA9IG0zMCAqIG0yMTtcbiAgICB2YXIgdG1wXzE0ID0gbTEwICogbTMxO1xuICAgIHZhciB0bXBfMTUgPSBtMzAgKiBtMTE7XG4gICAgdmFyIHRtcF8xNiA9IG0xMCAqIG0yMTtcbiAgICB2YXIgdG1wXzE3ID0gbTIwICogbTExO1xuICAgIHZhciB0bXBfMTggPSBtMDAgKiBtMzE7XG4gICAgdmFyIHRtcF8xOSA9IG0zMCAqIG0wMTtcbiAgICB2YXIgdG1wXzIwID0gbTAwICogbTIxO1xuICAgIHZhciB0bXBfMjEgPSBtMjAgKiBtMDE7XG4gICAgdmFyIHRtcF8yMiA9IG0wMCAqIG0xMTtcbiAgICB2YXIgdG1wXzIzID0gbTEwICogbTAxO1xuXG4gICAgdmFyIHQwID1cbiAgICAgIHRtcF8wICogbTExICtcbiAgICAgIHRtcF8zICogbTIxICtcbiAgICAgIHRtcF80ICogbTMxIC1cbiAgICAgICh0bXBfMSAqIG0xMSArIHRtcF8yICogbTIxICsgdG1wXzUgKiBtMzEpO1xuICAgIHZhciB0MSA9XG4gICAgICB0bXBfMSAqIG0wMSArXG4gICAgICB0bXBfNiAqIG0yMSArXG4gICAgICB0bXBfOSAqIG0zMSAtXG4gICAgICAodG1wXzAgKiBtMDEgKyB0bXBfNyAqIG0yMSArIHRtcF84ICogbTMxKTtcbiAgICB2YXIgdDIgPVxuICAgICAgdG1wXzIgKiBtMDEgK1xuICAgICAgdG1wXzcgKiBtMTEgK1xuICAgICAgdG1wXzEwICogbTMxIC1cbiAgICAgICh0bXBfMyAqIG0wMSArIHRtcF82ICogbTExICsgdG1wXzExICogbTMxKTtcbiAgICB2YXIgdDMgPVxuICAgICAgdG1wXzUgKiBtMDEgK1xuICAgICAgdG1wXzggKiBtMTEgK1xuICAgICAgdG1wXzExICogbTIxIC1cbiAgICAgICh0bXBfNCAqIG0wMSArIHRtcF85ICogbTExICsgdG1wXzEwICogbTIxKTtcblxuICAgIHZhciBkID0gMS4wIC8gKG0wMCAqIHQwICsgbTEwICogdDEgKyBtMjAgKiB0MiArIG0zMCAqIHQzKTtcblxuICAgIHJldHVybiBbXG4gICAgICBkICogdDAsXG4gICAgICBkICogdDEsXG4gICAgICBkICogdDIsXG4gICAgICBkICogdDMsXG4gICAgICBkICpcbiAgICAgICAgKHRtcF8xICogbTEwICtcbiAgICAgICAgICB0bXBfMiAqIG0yMCArXG4gICAgICAgICAgdG1wXzUgKiBtMzAgLVxuICAgICAgICAgICh0bXBfMCAqIG0xMCArIHRtcF8zICogbTIwICsgdG1wXzQgKiBtMzApKSxcbiAgICAgIGQgKlxuICAgICAgICAodG1wXzAgKiBtMDAgK1xuICAgICAgICAgIHRtcF83ICogbTIwICtcbiAgICAgICAgICB0bXBfOCAqIG0zMCAtXG4gICAgICAgICAgKHRtcF8xICogbTAwICsgdG1wXzYgKiBtMjAgKyB0bXBfOSAqIG0zMCkpLFxuICAgICAgZCAqXG4gICAgICAgICh0bXBfMyAqIG0wMCArXG4gICAgICAgICAgdG1wXzYgKiBtMTAgK1xuICAgICAgICAgIHRtcF8xMSAqIG0zMCAtXG4gICAgICAgICAgKHRtcF8yICogbTAwICsgdG1wXzcgKiBtMTAgKyB0bXBfMTAgKiBtMzApKSxcbiAgICAgIGQgKlxuICAgICAgICAodG1wXzQgKiBtMDAgK1xuICAgICAgICAgIHRtcF85ICogbTEwICtcbiAgICAgICAgICB0bXBfMTAgKiBtMjAgLVxuICAgICAgICAgICh0bXBfNSAqIG0wMCArIHRtcF84ICogbTEwICsgdG1wXzExICogbTIwKSksXG4gICAgICBkICpcbiAgICAgICAgKHRtcF8xMiAqIG0xMyArXG4gICAgICAgICAgdG1wXzE1ICogbTIzICtcbiAgICAgICAgICB0bXBfMTYgKiBtMzMgLVxuICAgICAgICAgICh0bXBfMTMgKiBtMTMgKyB0bXBfMTQgKiBtMjMgKyB0bXBfMTcgKiBtMzMpKSxcbiAgICAgIGQgKlxuICAgICAgICAodG1wXzEzICogbTAzICtcbiAgICAgICAgICB0bXBfMTggKiBtMjMgK1xuICAgICAgICAgIHRtcF8yMSAqIG0zMyAtXG4gICAgICAgICAgKHRtcF8xMiAqIG0wMyArIHRtcF8xOSAqIG0yMyArIHRtcF8yMCAqIG0zMykpLFxuICAgICAgZCAqXG4gICAgICAgICh0bXBfMTQgKiBtMDMgK1xuICAgICAgICAgIHRtcF8xOSAqIG0xMyArXG4gICAgICAgICAgdG1wXzIyICogbTMzIC1cbiAgICAgICAgICAodG1wXzE1ICogbTAzICsgdG1wXzE4ICogbTEzICsgdG1wXzIzICogbTMzKSksXG4gICAgICBkICpcbiAgICAgICAgKHRtcF8xNyAqIG0wMyArXG4gICAgICAgICAgdG1wXzIwICogbTEzICtcbiAgICAgICAgICB0bXBfMjMgKiBtMjMgLVxuICAgICAgICAgICh0bXBfMTYgKiBtMDMgKyB0bXBfMjEgKiBtMTMgKyB0bXBfMjIgKiBtMjMpKSxcbiAgICAgIGQgKlxuICAgICAgICAodG1wXzE0ICogbTIyICtcbiAgICAgICAgICB0bXBfMTcgKiBtMzIgK1xuICAgICAgICAgIHRtcF8xMyAqIG0xMiAtXG4gICAgICAgICAgKHRtcF8xNiAqIG0zMiArIHRtcF8xMiAqIG0xMiArIHRtcF8xNSAqIG0yMikpLFxuICAgICAgZCAqXG4gICAgICAgICh0bXBfMjAgKiBtMzIgK1xuICAgICAgICAgIHRtcF8xMiAqIG0wMiArXG4gICAgICAgICAgdG1wXzE5ICogbTIyIC1cbiAgICAgICAgICAodG1wXzE4ICogbTIyICsgdG1wXzIxICogbTMyICsgdG1wXzEzICogbTAyKSksXG4gICAgICBkICpcbiAgICAgICAgKHRtcF8xOCAqIG0xMiArXG4gICAgICAgICAgdG1wXzIzICogbTMyICtcbiAgICAgICAgICB0bXBfMTUgKiBtMDIgLVxuICAgICAgICAgICh0bXBfMjIgKiBtMzIgKyB0bXBfMTQgKiBtMDIgKyB0bXBfMTkgKiBtMTIpKSxcbiAgICAgIGQgKlxuICAgICAgICAodG1wXzIyICogbTIyICtcbiAgICAgICAgICB0bXBfMTYgKiBtMDIgK1xuICAgICAgICAgIHRtcF8yMSAqIG0xMiAtXG4gICAgICAgICAgKHRtcF8yMCAqIG0xMiArIHRtcF8yMyAqIG0yMiArIHRtcF8xNyAqIG0wMikpLFxuICAgIF07XG4gIH0sXG4gIGxvb2tBdDogZnVuY3Rpb24gKGNhbWVyYVBvc2l0aW9uLCB0YXJnZXQsIHVwKSB7XG4gICAgdmFyIHpBeGlzID0gbm9ybWFsaXplKHN1YnRyYWN0VmVjdG9ycyhjYW1lcmFQb3NpdGlvbiwgdGFyZ2V0KSk7XG4gICAgdmFyIHhBeGlzID0gbm9ybWFsaXplKGNyb3NzKHVwLCB6QXhpcykpO1xuICAgIHZhciB5QXhpcyA9IG5vcm1hbGl6ZShjcm9zcyh6QXhpcywgeEF4aXMpKTtcblxuICAgIHJldHVybiBbXG4gICAgICB4QXhpc1swXSxcbiAgICAgIHhBeGlzWzFdLFxuICAgICAgeEF4aXNbMl0sXG4gICAgICAwLFxuICAgICAgeUF4aXNbMF0sXG4gICAgICB5QXhpc1sxXSxcbiAgICAgIHlBeGlzWzJdLFxuICAgICAgMCxcbiAgICAgIHpBeGlzWzBdLFxuICAgICAgekF4aXNbMV0sXG4gICAgICB6QXhpc1syXSxcbiAgICAgIDAsXG4gICAgICBjYW1lcmFQb3NpdGlvblswXSxcbiAgICAgIGNhbWVyYVBvc2l0aW9uWzFdLFxuICAgICAgY2FtZXJhUG9zaXRpb25bMl0sXG4gICAgICAxLFxuICAgIF07XG4gIH0sXG4gIGNvcHk6IGZ1bmN0aW9uIChzcmMpIHtcbiAgICBjb25zdCBkc3QgPSBuZXcgTWF0VHlwZSgxNik7XG5cbiAgICBkc3RbMF0gPSBzcmNbMF07XG4gICAgZHN0WzFdID0gc3JjWzFdO1xuICAgIGRzdFsyXSA9IHNyY1syXTtcbiAgICBkc3RbM10gPSBzcmNbM107XG4gICAgZHN0WzRdID0gc3JjWzRdO1xuICAgIGRzdFs1XSA9IHNyY1s1XTtcbiAgICBkc3RbNl0gPSBzcmNbNl07XG4gICAgZHN0WzddID0gc3JjWzddO1xuICAgIGRzdFs4XSA9IHNyY1s4XTtcbiAgICBkc3RbOV0gPSBzcmNbOV07XG4gICAgZHN0WzEwXSA9IHNyY1sxMF07XG4gICAgZHN0WzExXSA9IHNyY1sxMV07XG4gICAgZHN0WzEyXSA9IHNyY1sxMl07XG4gICAgZHN0WzEzXSA9IHNyY1sxM107XG4gICAgZHN0WzE0XSA9IHNyY1sxNF07XG4gICAgZHN0WzE1XSA9IHNyY1sxNV07XG5cbiAgICByZXR1cm4gZHN0O1xuICB9LFxuICB2ZWN0b3JTdW06IGZ1bmN0aW9uICh2MSwgdjIpIHtcbiAgICBjb25zdCB2ZWN0b3IgPSBbMCwgMCwgMF07XG4gICAgdmVjdG9yWzBdID0gdjFbMF0gKyB2MlswXTtcbiAgICB2ZWN0b3JbMV0gPSB2MVsxXSArIHYyWzFdO1xuICAgIHZlY3RvclsyXSA9IHYxWzJdICsgdjJbMl07XG4gICAgcmV0dXJuIHZlY3RvcjtcbiAgfSxcbiAgY3Jvc3M6IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIGFbMV0gKiBiWzJdIC0gYVsyXSAqIGJbMV0sXG4gICAgICBhWzJdICogYlswXSAtIGFbMF0gKiBiWzJdLFxuICAgICAgYVswXSAqIGJbMV0gLSBhWzFdICogYlswXSxcbiAgICBdO1xuICB9LFxuICB2ZWN0b3JTY2FsYXJQcm9kdWN0KGEsIHMpIHtcbiAgICBsZXQgdiA9IFswLCAwLCAwXTtcblxuICAgIHZbMF0gPSBhWzBdICogcztcbiAgICB2WzFdID0gYVsxXSAqIHM7XG4gICAgdlsyXSA9IGFbMl0gKiBzO1xuICAgIGlmIChpc05hTih2WzBdKSB8fCBpc05hTih2WzJdKSB8fCBpc05hTih2WzJdKSkgcmV0dXJuIFswLCAwLCAwXTtcbiAgICByZXR1cm4gdjtcbiAgfSxcblxuICBzY2FsYXJQcm9kdWN0OiBmdW5jdGlvbiAodjEsIHYyKSB7XG4gICAgbGV0IGEgPSB2MVswXSAqIHYyWzBdICsgdjFbMV0gKiB2MlsxXSArIHYxWzJdICogdjJbMl07XG5cbiAgICByZXR1cm4gYTtcbiAgfSxcbiAgZG90KHYxLCB2Mikge1xuICAgIHJldHVybiB2MVswXSAqIHYyWzBdICsgdjFbMV0gKiB2MlsxXSArIHYxWzJdICogdjJbMl07XG4gIH0sXG4gIGlzTnVsbFZlY3RvcjogZnVuY3Rpb24gKHYpIHtcbiAgICByZXR1cm4gIXZbMF0gJiYgIXZbMV0gJiYgIXZbMl07XG4gIH0sXG4gIGdldFZlY3Rvckxlbmd0aCh2KSB7XG4gICAgcmV0dXJuIE1hdGguc3FydCh2WzBdICogdlswXSArIHZbMV0gKiB2WzFdICsgdlsyXSAqIHZbMl0pO1xuICB9LFxuICB0cmFuc2Zvcm1Qb2ludDogZnVuY3Rpb24gKG0sIHYsIGRzdCkge1xuICAgIGRzdCA9IGRzdCB8fCBuZXcgTWF0VHlwZSgzKTtcbiAgICB2YXIgdjAgPSB2WzBdO1xuICAgIHZhciB2MSA9IHZbMV07XG4gICAgdmFyIHYyID0gdlsyXTtcbiAgICB2YXIgZCA9XG4gICAgICB2MCAqIG1bMCAqIDQgKyAzXSArIHYxICogbVsxICogNCArIDNdICsgdjIgKiBtWzIgKiA0ICsgM10gKyBtWzMgKiA0ICsgM107XG5cbiAgICBkc3RbMF0gPVxuICAgICAgKHYwICogbVswICogNCArIDBdICtcbiAgICAgICAgdjEgKiBtWzEgKiA0ICsgMF0gK1xuICAgICAgICB2MiAqIG1bMiAqIDQgKyAwXSArXG4gICAgICAgIG1bMyAqIDQgKyAwXSkgL1xuICAgICAgZDtcbiAgICBkc3RbMV0gPVxuICAgICAgKHYwICogbVswICogNCArIDFdICtcbiAgICAgICAgdjEgKiBtWzEgKiA0ICsgMV0gK1xuICAgICAgICB2MiAqIG1bMiAqIDQgKyAxXSArXG4gICAgICAgIG1bMyAqIDQgKyAxXSkgL1xuICAgICAgZDtcbiAgICBkc3RbMl0gPVxuICAgICAgKHYwICogbVswICogNCArIDJdICtcbiAgICAgICAgdjEgKiBtWzEgKiA0ICsgMl0gK1xuICAgICAgICB2MiAqIG1bMiAqIDQgKyAyXSArXG4gICAgICAgIG1bMyAqIDQgKyAyXSkgL1xuICAgICAgZDtcblxuICAgIHJldHVybiBkc3Q7XG4gIH0sXG4gIG5vcm1hbGl6ZTogZnVuY3Rpb24gKHYsIGRzdCkge1xuICAgIGRzdCA9IGRzdCB8fCBuZXcgTWF0VHlwZSgzKTtcbiAgICB2YXIgbGVuZ3RoID0gTWF0aC5zcXJ0KHZbMF0gKiB2WzBdICsgdlsxXSAqIHZbMV0gKyB2WzJdICogdlsyXSk7XG4gICAgLy8gbWFrZSBzdXJlIHdlIGRvbid0IGRpdmlkZSBieSAwLlxuICAgIGlmIChsZW5ndGggPiAwLjAwMDAxKSB7XG4gICAgICBkc3RbMF0gPSB2WzBdIC8gbGVuZ3RoO1xuICAgICAgZHN0WzFdID0gdlsxXSAvIGxlbmd0aDtcbiAgICAgIGRzdFsyXSA9IHZbMl0gLyBsZW5ndGg7XG4gICAgfVxuICAgIHJldHVybiBkc3Q7XG4gIH0sXG4gIGlkZW50aXR5OiBmdW5jdGlvbiAoKSB7XG4gICAgZHN0ID0gbmV3IE1hdFR5cGUoMTYpO1xuICAgIGRzdFswXSA9IDE7XG4gICAgZHN0WzFdID0gMDtcbiAgICBkc3RbMl0gPSAwO1xuICAgIGRzdFszXSA9IDA7XG4gICAgZHN0WzRdID0gMDtcbiAgICBkc3RbNV0gPSAxO1xuICAgIGRzdFs2XSA9IDA7XG4gICAgZHN0WzddID0gMDtcbiAgICBkc3RbOF0gPSAwO1xuICAgIGRzdFs5XSA9IDA7XG4gICAgZHN0WzEwXSA9IDE7XG4gICAgZHN0WzExXSA9IDA7XG4gICAgZHN0WzEyXSA9IDA7XG4gICAgZHN0WzEzXSA9IDA7XG4gICAgZHN0WzE0XSA9IDA7XG4gICAgZHN0WzE1XSA9IDE7XG5cbiAgICByZXR1cm4gZHN0O1xuICB9LFxuICBtM1RvbTQ6IGZ1bmN0aW9uIChtKSB7XG4gICAgY29uc3QgZHN0ID0gbmV3IE1hdFR5cGUoMTYpO1xuICAgIGRzdFswXSA9IG1bMF07XG4gICAgZHN0WzFdID0gbVsxXTtcbiAgICBkc3RbMl0gPSBtWzJdO1xuICAgIGRzdFszXSA9IDA7XG4gICAgZHN0WzRdID0gbVszXTtcbiAgICBkc3RbNV0gPSBtWzRdO1xuICAgIGRzdFs2XSA9IG1bNV07XG4gICAgZHN0WzddID0gMDtcbiAgICBkc3RbOF0gPSBtWzZdO1xuICAgIGRzdFs5XSA9IG1bN107XG4gICAgZHN0WzEwXSA9IG1bOF07XG4gICAgZHN0WzExXSA9IDA7XG4gICAgZHN0WzEyXSA9IDA7XG4gICAgZHN0WzEzXSA9IDA7XG4gICAgZHN0WzE0XSA9IDA7XG4gICAgZHN0WzE1XSA9IDE7XG4gICAgcmV0dXJuIGRzdDtcbiAgfSxcbiAgbTRUb20zOiBmdW5jdGlvbiAobSkge1xuICAgIGNvbnN0IGRzdCA9IG5ldyBNYXRUeXBlKDkpO1xuICAgIGRzdFswXSA9IG1bMF07XG4gICAgZHN0WzFdID0gbVsxXTtcbiAgICBkc3RbMl0gPSBtWzJdO1xuICAgIGRzdFszXSA9IG1bNF07XG4gICAgZHN0WzRdID0gbVs1XTtcbiAgICBkc3RbNV0gPSBtWzZdO1xuICAgIGRzdFs2XSA9IG1bOF07XG4gICAgZHN0WzddID0gbVs5XTtcbiAgICBkc3RbOF0gPSBtWzEwXTtcbiAgICByZXR1cm4gZHN0O1xuICB9LFxuICB0b1N0cmluZyhtKSB7XG4gICAgcmV0dXJuIG0ucmVkdWNlKChhY2MsIGVsLCBpZHgpID0+XG4gICAgICBpZHggJSA0ID09PSAwID8gKGFjYyArPSBcIlxcblwiICsgZWwpIDogKGFjYyArPSBcIiBcIiArIGVsKVxuICAgICk7XG4gIH0sXG4gIHRyYW5zcG9zZTogZnVuY3Rpb24gKG0pIHtcbiAgICByZXR1cm4gW1xuICAgICAgbVswXSxcbiAgICAgIG1bNF0sXG4gICAgICBtWzhdLFxuICAgICAgbVsxMl0sXG4gICAgICBtWzFdLFxuICAgICAgbVs1XSxcbiAgICAgIG1bOV0sXG4gICAgICBtWzEzXSxcbiAgICAgIG1bMl0sXG4gICAgICBtWzZdLFxuICAgICAgbVsxMF0sXG4gICAgICBtWzE0XSxcbiAgICAgIG1bM10sXG4gICAgICBtWzddLFxuICAgICAgbVsxMV0sXG4gICAgICBtWzE1XSxcbiAgICBdO1xuICB9LFxuICBmcm9tUXVhdGVybmlvbjogKHEpID0+IHtcbiAgICBjb25zdCBhMTEgPSAxIC0gMiAqIChxWzFdICogcVsxXSArIHFbMl0gKiBxWzJdKTtcbiAgICBjb25zdCBhMTIgPSAyICogKHFbMF0gKiBxWzFdIC0gcVsyXSAqIHFbM10pO1xuICAgIGNvbnN0IGExMyA9IDIgKiAocVswXSAqIHFbMl0gKyBxWzFdICogcVszXSk7XG4gICAgY29uc3QgYTIxID0gMiAqIChxWzBdICogcVsxXSArIHFbMl0gKiBxWzNdKTtcbiAgICBjb25zdCBhMjIgPSAxIC0gMiAqIChxWzBdICogcVswXSArIHFbMl0gKiBxWzJdKTtcbiAgICBjb25zdCBhMjMgPSAyICogKHFbMV0gKiBxWzJdIC0gcVswXSAqIHFbM10pO1xuICAgIGNvbnN0IGEzMSA9IDIgKiAocVswXSAqIHFbMl0gLSBxWzFdICogcVszXSk7XG4gICAgY29uc3QgYTMyID0gMiAqIChxWzFdICogcVsyXSArIHFbMF0gKiBxWzNdKTtcbiAgICBjb25zdCBhMzMgPSAxIC0gMiAqIChxWzBdICogcVswXSArIHFbMV0gKiBxWzFdKTtcbiAgICByZXR1cm4gW2ExMSwgYTEyLCBhMTMsIDAsIGEyMSwgYTIyLCBhMjMsIDAsIGEzMSwgYTMyLCBhMzMsIDAsIDAsIDAsIDAsIDFdO1xuICB9LFxuICByb3RhdGlvbih4LCB5LCB6KSB7XG4gICAgcmV0dXJuIHRoaXMueFJvdGF0ZSh0aGlzLnlSb3RhdGUodGhpcy56Um90YXRpb24oeiksIHkpLCB4KTtcbiAgfSxcbiAgcm90YXRpb25Gcm9tTm9ybWFsKG4pIHtcbiAgICByZXR1cm4gdGhpcy5yb3RhdGlvbihNYXRoLmFjb3MoblsxXSksIE1hdGguYWNvcyhuWzJdKSwgTWF0aC5hY29zKG5bMF0pKTtcbiAgfSxcbiAgZGV0ZXJtaW5hdGUobSkge1xuICAgIHZhciBtMDAgPSBtWzAgKiA0ICsgMF07XG4gICAgdmFyIG0wMSA9IG1bMCAqIDQgKyAxXTtcbiAgICB2YXIgbTAyID0gbVswICogNCArIDJdO1xuICAgIHZhciBtMDMgPSBtWzAgKiA0ICsgM107XG4gICAgdmFyIG0xMCA9IG1bMSAqIDQgKyAwXTtcbiAgICB2YXIgbTExID0gbVsxICogNCArIDFdO1xuICAgIHZhciBtMTIgPSBtWzEgKiA0ICsgMl07XG4gICAgdmFyIG0xMyA9IG1bMSAqIDQgKyAzXTtcbiAgICB2YXIgbTIwID0gbVsyICogNCArIDBdO1xuICAgIHZhciBtMjEgPSBtWzIgKiA0ICsgMV07XG4gICAgdmFyIG0yMiA9IG1bMiAqIDQgKyAyXTtcbiAgICB2YXIgbTIzID0gbVsyICogNCArIDNdO1xuICAgIHZhciBtMzAgPSBtWzMgKiA0ICsgMF07XG4gICAgdmFyIG0zMSA9IG1bMyAqIDQgKyAxXTtcbiAgICB2YXIgbTMyID0gbVszICogNCArIDJdO1xuICAgIHZhciBtMzMgPSBtWzMgKiA0ICsgM107XG4gICAgdmFyIHRtcF8wICA9IG0yMiAqIG0zMztcbiAgICB2YXIgdG1wXzEgID0gbTMyICogbTIzO1xuICAgIHZhciB0bXBfMiAgPSBtMTIgKiBtMzM7XG4gICAgdmFyIHRtcF8zICA9IG0zMiAqIG0xMztcbiAgICB2YXIgdG1wXzQgID0gbTEyICogbTIzO1xuICAgIHZhciB0bXBfNSAgPSBtMjIgKiBtMTM7XG4gICAgdmFyIHRtcF82ICA9IG0wMiAqIG0zMztcbiAgICB2YXIgdG1wXzcgID0gbTMyICogbTAzO1xuICAgIHZhciB0bXBfOCAgPSBtMDIgKiBtMjM7XG4gICAgdmFyIHRtcF85ICA9IG0yMiAqIG0wMztcbiAgICB2YXIgdG1wXzEwID0gbTAyICogbTEzO1xuICAgIHZhciB0bXBfMTEgPSBtMTIgKiBtMDM7XG5cbiAgICB2YXIgdDAgPSAodG1wXzAgKiBtMTEgKyB0bXBfMyAqIG0yMSArIHRtcF80ICogbTMxKSAtXG4gICAgICAgICh0bXBfMSAqIG0xMSArIHRtcF8yICogbTIxICsgdG1wXzUgKiBtMzEpO1xuICAgIHZhciB0MSA9ICh0bXBfMSAqIG0wMSArIHRtcF82ICogbTIxICsgdG1wXzkgKiBtMzEpIC1cbiAgICAgICAgKHRtcF8wICogbTAxICsgdG1wXzcgKiBtMjEgKyB0bXBfOCAqIG0zMSk7XG4gICAgdmFyIHQyID0gKHRtcF8yICogbTAxICsgdG1wXzcgKiBtMTEgKyB0bXBfMTAgKiBtMzEpIC1cbiAgICAgICAgKHRtcF8zICogbTAxICsgdG1wXzYgKiBtMTEgKyB0bXBfMTEgKiBtMzEpO1xuICAgIHZhciB0MyA9ICh0bXBfNSAqIG0wMSArIHRtcF84ICogbTExICsgdG1wXzExICogbTIxKSAtXG4gICAgICAgICh0bXBfNCAqIG0wMSArIHRtcF85ICogbTExICsgdG1wXzEwICogbTIxKTtcblxuICAgIHJldHVybiAxLjAgLyAobTAwICogdDAgKyBtMTAgKiB0MSArIG0yMCAqIHQyICsgbTMwICogdDMpO1xuICB9LFxuICBcbiAgZGVjb21wb3NlKG1hdCkge1xuICAgIGxldCBzeCA9IG5vcm0obWF0LnNsaWNlKDAsIDMpKTtcbiAgICBjb25zdCBzeSA9IG5vcm0obWF0LnNsaWNlKDQsIDcpKTtcbiAgICBjb25zdCBzeiA9IG5vcm0obWF0LnNsaWNlKDgsIDExKSk7XG5cbiAgICBcbiAgICBjb25zdCBkZXQgPSB0aGlzLmRldGVybWluYXRlKG1hdCk7XG4gICAgaWYgKGRldCA8IDApIHtcbiAgICAgIHN4ID0gLXN4O1xuICAgIH1cbiAgICBjb25zdCB0cmFuc2xhdGlvbiA9IFtdXG4gICAgY29uc3Qgc2NhbGUgPSBbXVxuICAgIGNvbnN0IFJtYXRyaXggPSBbLi4ubWF0XVxuICAgIHRyYW5zbGF0aW9uWzBdID0gbWF0WzEyXTtcbiAgICB0cmFuc2xhdGlvblsxXSA9IG1hdFsxM107XG4gICAgdHJhbnNsYXRpb25bMl0gPSBtYXRbMTRdO1xuXG5cbiAgICBcblxuICAgIGNvbnN0IGludlNYID0gMSAvIHN4O1xuICAgIGNvbnN0IGludlNZID0gMSAvIHN5O1xuICAgIGNvbnN0IGludlNaID0gMSAvIHN6O1xuXG4gICAgUm1hdHJpeFswXSAqPSBpbnZTWDtcbiAgICBSbWF0cml4WzFdICo9IGludlNYO1xuICAgIFJtYXRyaXhbMl0gKj0gaW52U1g7XG5cbiAgICBSbWF0cml4WzRdICo9IGludlNZO1xuICAgIFJtYXRyaXhbNV0gKj0gaW52U1k7XG4gICAgUm1hdHJpeFs2XSAqPSBpbnZTWTtcblxuICAgIFJtYXRyaXhbOF0gKj0gaW52U1o7XG4gICAgUm1hdHJpeFs5XSAqPSBpbnZTWjtcbiAgICBSbWF0cml4WzEwXSAqPSBpbnZTWjtcblxuXG5cbiAgICBzY2FsZVswXSA9IHN4O1xuICAgIHNjYWxlWzFdID0gc3k7XG4gICAgc2NhbGVbMl0gPSBzejtcbiAgICByZXR1cm4ge3RyYW5zbGF0aW9uLCBSbWF0cml4LCBzY2FsZSB9XG4gIH1cbn07XG5cblxubW9kdWxlLmV4cG9ydHMgPSBtNDtcbiIsImNvbnN0IG00ID0gcmVxdWlyZShcIi4vbTRcIik7XG5jbGFzcyBUUlMge1xuICBjb25zdHJ1Y3Rvcih0cmFuc2xhdGlvbiwgcm90YXRpb24sIHNjYWxlKSB7XG4gICAgdGhpcy50cmFuc2xhdGlvbiA9IHRyYW5zbGF0aW9uO1xuICAgIHRoaXMucm90YXRpb24gPSByb3RhdGlvbjtcbiAgICB0aGlzLnNjYWxlID0gc2NhbGU7XG4gIH1cbiAgZ2V0TWF0cml4KG0pIHtcbiAgICBsZXQgZHN0ID0gbSB8fCBtNC5pZGVudGl0eSgpO1xuICAgIHZhciB0ID0gdGhpcy50cmFuc2xhdGlvbjtcbiAgICB2YXIgciA9IHRoaXMucm90YXRpb247XG4gICAgdmFyIHMgPSB0aGlzLnNjYWxlO1xuICAgIGNvbnN0IHNpbiA9IE1hdGguc2luKHJbM10gLyAyKTtcbiAgICBjb25zdCBjb3MgPSBNYXRoLmNvcyhyWzNdIC8gMik7XG4gICAgZHN0ID0gbTQudHJhbnNsYXRlKGRzdCwgdFswXSwgdFsxXSwgdFsyXSk7XG5cbiAgICBkc3QgPSBtNC5tdWx0aXBseShkc3QsIG00LmZyb21RdWF0ZXJuaW9uKHIpKTtcblxuICAgIGRzdCA9IG00LnNjYWxlKGRzdCwgc1swXSwgc1sxXSwgc1syXSk7XG4gICAgcmV0dXJuIGRzdDtcbiAgfVxuICBnZXRSTWF0cml4KCkge1xuICAgIGxldCBkc3QgPSBtNC5pZGVudGl0eSgpO1xuICAgIHZhciByID0gdGhpcy5yb3RhdGlvbjtcbiAgICBkc3QgPSBtNC54Um90YXRlKGRzdCwgclswXSk7XG4gICAgZHN0ID0gbTQueVJvdGF0ZShkc3QsIHJbMV0pO1xuICAgIGRzdCA9IG00LnpSb3RhdGUoZHN0LCByWzJdKTtcbiAgICByZXR1cm4gZHN0O1xuICB9XG4gIGdldFRSbWF0cml4KCkge1xuICAgIGNvbnN0IHQgPSB0aGlzLnRyYW5zbGF0aW9uO1xuICAgIGNvbnN0IHIgPSB0aGlzLnJvdGF0aW9uO1xuXG4gICAgbGV0IG0gPSBtNC50cmFuc2xhdGlvbiggdFswXSwgdFsxXSwgdFsyXSk7XG5cbiAgICBtID0gbTQueFJvdGF0ZShtLCByWzBdKTtcbiAgICBtID0gbTQueVJvdGF0ZShtLCByWzFdKTtcbiAgICBtID0gbTQuelJvdGF0ZShtLCByWzJdKTtcbiAgICByZXR1cm4gbVxuICB9XG59XG5jbGFzcyBOb2RlIHtcbiAgY29uc3RydWN0b3IobmFtZSwgdHJzID0gbmV3IFRSUygpKSB7XG4gICAgdGhpcy53b3JsZE1hdHJpeCA9IG00LmlkZW50aXR5KCk7XG4gICAgdGhpcy5wYXJlbnQgPSBudWxsO1xuICAgIHRoaXMuY2hpbGRyZW4gPSBbXTtcbiAgICB0aGlzLnRycyA9IHRycztcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMucGFydHMgPSBbXTtcbiAgfVxuICBzZXRQYXJlbnQocGFyZW50KSB7XG4gICAgaWYgKHRoaXMucGFyZW50KSB7XG4gICAgICBjb25zdCBuZHggPSB0aGlzLnBhcmVudC5jaGlsZHJlbi5pbmRleE9mKHRoaXMpO1xuICAgICAgaWYgKG5keCA+PSAwKSB7XG4gICAgICAgIHRoaXMucGFyZW50LmNoaWxkcmVuLnNwbGljZShuZHgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAocGFyZW50KSB7XG4gICAgICBwYXJlbnQuY2hpbGRyZW4ucHVzaCh0aGlzKTtcbiAgICB9XG4gICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gIH1cbiAgdXBkYXRlV29ybGRNYXRyaXgocGFyZW50V29ybGRNYXRyaXgpIHtcbiAgICBsZXQgbWF0cml4ID0gdGhpcy50cnMuZ2V0TWF0cml4KCk7XG4gICAgaWYgKHBhcmVudFdvcmxkTWF0cml4KSB7XG4gICAgICBtYXRyaXggPSBtNC5tdWx0aXBseShwYXJlbnRXb3JsZE1hdHJpeCwgbWF0cml4KTtcbiAgICB9XG4gICAgdGhpcy53b3JsZE1hdHJpeCA9IG1hdHJpeDtcbiAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICBjaGlsZC51cGRhdGVXb3JsZE1hdHJpeChtYXRyaXgpO1xuICAgIH0pO1xuICB9XG4gIHVwZGF0ZVBhcnRzTGlzdCgpIHtcbiAgICBjb25zdCBpdGVyID0gKG5vZGUsIGFycikgPT4ge1xuICAgICAgYXJyLnB1c2gobm9kZSk7XG4gICAgICBub2RlLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiBpdGVyKGNoaWxkLCBhcnIpKTtcbiAgICB9O1xuICAgIGl0ZXIodGhpcywgdGhpcy5wYXJ0cyk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7IE5vZGUsIFRSUyB9O1xuIiwiY29uc3QgZG90ID0gKGEsIGIpID0+IGFbMF0gKiBiWzBdICsgYVsxXSAqIGJbMV0gKyBhWzJdICogYlsyXVxuY29uc3QgY3Jvc3MgPSAoYSwgYikgPT4ge1xuICAgIGNvbnN0IHJlcyA9IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhWzFdICogYlsyXSAtIGJbMV0gKiBhWzJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFbMl0gKiBiWzBdIC0gYlsyXSAqIGFbMF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYVswXSAqIGJbMV0gLSBiWzBdICogYVsxXSAgICBcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgIGlmKGlzTmFOdmVjKGEpIHx8IGlzTmFOdmVjKGIpKXtcbiAgICAgICAgY29uc29sZS5sb2coYSwgYilcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdhcmdzIGlzIE5hTiA6ICwnKVxuICAgIH1cbiAgICByZXR1cm4gcmVzXG59ICAgICAgICAgIFxuY29uc3Qgc2NhbGUgPSAoYSwgc2NhbGFyKSA9PiBbYVswXSAqIHNjYWxhciwgYVsxXSAqIHNjYWxhciwgYVsyXSAqIHNjYWxhcl1cbmNvbnN0IHN1bSA9IChhLCBiKSA9PiBbYVswXSArIGJbMF0sIGFbMV0gKyBiWzFdLCBhWzJdICsgYlsyXV1cbmNvbnN0IGRpZmYgPSAoYSwgYikgPT4gW2FbMF0gLSBiWzBdLCBhWzFdIC0gYlsxXSwgYVsyXSAtIGJbMl1dXG5jb25zdCBub3JtID0gYSA9PiBNYXRoLnNxcnQoYVswXSAqIGFbMF0gKyBhWzFdICogYVsxXSArIGFbMl0gKiBhWzJdKVxuY29uc3Qgbm9ybVNxID0gYSA9PiBhWzBdICogYVswXSArIGFbMV0gKiBhWzFdICsgYVsyXSAqIGFbMl1cbmNvbnN0IG5vcm1hbGl6ZSA9IGEgPT4ge1xuICAgIGNvbnN0IGxlbmd0aCA9IG5vcm0oYSlcbiAgICBpZihsZW5ndGggPT09IDApIHJldHVybiBhXG4gICAgcmV0dXJuIFthWzBdIC8gbGVuZ3RoLCBhWzFdIC8gbGVuZ3RoLCBhWzJdIC8gbGVuZ3RoXVxufVxuY29uc3QgaXNOdWxsID0gYSA9PiBhWzBdKmFbMF0gKyBhWzFdICogYVsxXSArIGFbMl0gKiBhWzJdID09PSAwXG5cbmNvbnN0IGlzRXF1YWwgPSAoYSwgYikgPT4gYVswXSA9PSBiWzBdICYmIGFbMV0gPT0gYlsxXSAmJiBhWzJdID09IGJbMl1cbmNvbnN0IGNoa1YgPSAodikgPT57XG4gICAgaWYoaXNOYU52ZWModikpe1xuICAgICAgICBjb25zb2xlLmxvZyh2KVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05hTiBWZWMnKVxuICAgIH1cbn1cblxuY29uc3QgZmluZEZ1cnRoZXN0UG9pbnQgPSAoYSxiLGMpID0+IHtcbiAgICBjb25zdCBBQiA9IG5vcm1TcShkaWZmKGEsIGIpKVxuICAgIGNvbnN0IEFDID0gbm9ybVNxKGRpZmYoYSwgYykpXG4gICAgY29uc3QgQkMgPSBub3JtU3EoZGlmZihjLCBiKSlcbiAgICBpZihBQiA8IEFDKXtcbiAgICAgICAgaWYoQUIgPCBCQykgcmV0dXJuIGNcbiAgICAgICAgcmV0dXJuIGJcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgICAgaWYoQUMgPCBCQykgcmV0dXJuIGJcbiAgICAgICAgZWxzZSByZXR1cm4gYVxuICAgIH1cbn1cbmNvbnN0IGRpc3RhbmNlRnJvbUxpbmUgPSAoYSxiLGMpID0+e1xuICAgIGNvbnN0IGFjID0gZGlmZihjLCBhKVxuICAgIGNvbnN0IGFiID0gZGlmZihiLCBhKVxuICAgIGNvbnN0IGsgPSBkb3QoYWIsYWMpIC8gbm9ybVNxKGFiKVxuICAgIGNvbnN0IGggPSBzdW0oYSwgc2NhbGUoYWIsIGspKVxuICAgIHJldHVybiBub3JtU3EoZGlmZihjLCBoKSlcbn1cblxuXG5jb25zdCBpc05hTnZlYyA9IHYgPT4gaXNOYU4odlswXSArIHZbMV0gKyB2WzJdKSB8fCAodlswXSArIHZbMV0gKyB2WzJdID09PSBJbmZpbml0eSkgfHwgKHZbMF0gKyB2WzFdICsgdlsyXSA9PT0gLUluZmluaXR5KVxuY29uc3QgX2RvdCA9IChhLCBiKSA9PntcbiAgICBpZihpc05hTnZlYyhhKSB8fCBpc05hTnZlYyhiKSl7XG4gICAgICAgIGNvbnNvbGUubG9nKGEsIGIpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignYXJncyBpcyBOYU4gOiAsJylcbiAgICB9XG4gICAgcmV0dXJuIGRvdChhLCBiKVxufVxuY29uc3QgX2Nyb3NzID0gKGEsIGIpID0+e1xuICAgIGlmKGlzTmFOdmVjKGEpIHx8IGlzTmFOdmVjKGIpKXtcbiAgICAgICAgY29uc29sZS5sb2coYSwgYilcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdhcmdzIGlzIE5hTiA6ICwnKVxuICAgIH1cbiAgICBjb25zdCByZXMgPSBjcm9zcyhhLCBiKSAgXG4gICAgaWYoaXNOYU52ZWMocmVzKSl7XG4gICAgICAgIGNvbnNvbGUubG9nKGEsIGIpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignZ2V0IE5hTiA6ICwnKVxuICAgIH1cbiAgICByZXR1cm4gcmVzIFxufVxuY29uc3QgX3N1bSA9IChhLCBiKSA9PntcbiAgICBpZihpc05hTnZlYyhhKSB8fCBpc05hTnZlYyhiKSl7XG4gICAgICAgIGNvbnNvbGUubG9nKGEsIGIpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignYXJncyBpcyBOYU4gOiAsJylcbiAgICB9XG4gICAgY29uc3QgcmVzID0gc3VtKGEsIGIpICBcbiAgICBpZihpc05hTnZlYyhyZXMpKXtcbiAgICAgICAgY29uc29sZS5sb2coYSwgYilcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdnZXQgTmFOIDogLCcpXG4gICAgfVxuICAgIHJldHVybiByZXMgXG59XG5jb25zdCBfZGlmZiA9IChhLCBiKSA9PntcbiAgICBpZihpc05hTnZlYyhhKSB8fCBpc05hTnZlYyhiKSl7XG4gICAgICAgIGNvbnNvbGUubG9nKGEsIGIpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignYXJncyBpcyBOYU4gOiAsJylcbiAgICB9XG4gICAgY29uc3QgcmVzID0gZGlmZihhLCBiKSAgXG4gICAgaWYoaXNOYU52ZWMocmVzKSl7XG4gICAgICAgIGNvbnNvbGUubG9nKGEsIGIpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignZ2V0IE5hTiA6ICwnKVxuICAgIH1cbiAgICByZXR1cm4gcmVzICAgIFxufVxuY29uc3QgX3NjYWxlID0gKGEsIHNjYWxhcikgPT57XG4gICAgaWYoaXNOYU52ZWMoYSkgfHwgaXNOYU4oc2NhbGFyKSl7XG4gICAgICAgIGNvbnNvbGUubG9nKGEsIHNjYWxhcilcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdhcmdzIGlzIE5hTiA6ICwnKVxuICAgIH1cbiAgICBjb25zdCByZXMgPSBzY2FsZShhLCBzY2FsYXIpICBcbiAgICBpZihpc05hTnZlYyhyZXMpKXtcbiAgICAgICAgY29uc29sZS5sb2coYSwgc2NhbGFyKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2dldCBOYU4gOiAsJylcbiAgICB9XG4gICAgcmV0dXJuIHJlcyBcbn1cbmNvbnN0IF9ub3JtYWxpemUgPSBhID0+e1xuICAgIGlmKGlzTmFOdmVjKGEpKXtcbiAgICAgICAgY29uc29sZS5sb2coYSlcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdhcmdzIGlzIE5hTiA6ICwnKVxuICAgIH1cbiAgICBjb25zdCByZXMgPSBub3JtYWxpemUoYSkgIFxuICAgIGlmKGlzTmFOdmVjKHJlcykpe1xuICAgICAgICBjb25zb2xlLmxvZyhhKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2dldCBOYU4gOiAsJylcbiAgICB9XG4gICAgcmV0dXJuIHJlcyBcbn1cbm1vZHVsZS5leHBvcnRzID0ge2Noa1YsIGRvdCA6IF9kb3QsIGNyb3NzIDogX2Nyb3NzLCBzY2FsZSA6IF9zY2FsZSwgc3VtIDogX3N1bSwgZGlmZiA6IF9kaWZmLCBub3JtYWxpemUgOiBfbm9ybWFsaXplLCBub3JtLCBub3JtU3EsIGlzTnVsbCwgZmluZEZ1cnRoZXN0UG9pbnQsIGRpc3RhbmNlRnJvbUxpbmUsIGlzRXF1YWx9IiwiaW1wb3J0IHsgUHJvZ3JhbUluZm8gfSBmcm9tIFwiZ3JhcGhpY3NcIjtcclxuY29uc3QgZ2xzbCA9IHg9PnhcclxuXHJcblxyXG5jb25zdCB2ZXJ0ID0gZ2xzbGAjdmVyc2lvbiAzMDAgZXNcclxuIFxyXG5sYXlvdXQobG9jYXRpb24gPSAwKSBpbiB2ZWM0IGFfcG9zaXRpb247XHJcbmxheW91dChsb2NhdGlvbiA9IDEpIGluIHZlYzMgYV9ub3JtYWw7XHJcblxyXG5cclxuXHJcbnVuaWZvcm0gbWF0NCB3b3JsZE1hdHJpeDtcclxudW5pZm9ybSBtYXQ0IHdvcmxkVmlld1Byb2plY3Rpb247XHJcbnVuaWZvcm0gdmVjMyB1X2xpZ2h0V29ybGRQb3NpdGlvbjtcclxudW5pZm9ybSB2ZWMzIHVfdmlld1dvcmxkUG9zaXRpb247XHJcbnVuaWZvcm0gbWF0NCB3b3JsZEludmVyc2VUcmFuc3Bvc2U7XHJcbm91dCB2ZWMzIHZfbm9ybWFsO1xyXG5vdXQgdmVjMyB2X3N1cmZhY2VUb0xpZ2h0O1xyXG5vdXQgdmVjMyB2X3N1cmZhY2VUb1ZpZXc7XHJcblxyXG52b2lkIG1haW4oKSB7XHJcblxyXG4gICAgdmVjMyBzdXJmYWNlV29ybGRQb3NpdGlvbiA9ICh3b3JsZE1hdHJpeCAqIGFfcG9zaXRpb24pLnh5ejtcclxuICAgIHZfc3VyZmFjZVRvTGlnaHQgPSB1X2xpZ2h0V29ybGRQb3NpdGlvbiAtIHN1cmZhY2VXb3JsZFBvc2l0aW9uO1xyXG4gICAgdl9zdXJmYWNlVG9WaWV3ID0gdV92aWV3V29ybGRQb3NpdGlvbiAtIHN1cmZhY2VXb3JsZFBvc2l0aW9uO1xyXG4gICAgdmVjNCBwb3MgPSB3b3JsZFZpZXdQcm9qZWN0aW9uICogYV9wb3NpdGlvbjtcclxuICAgIGdsX1Bvc2l0aW9uID0gcG9zO1xyXG5cclxuICAgXHJcbiAgICB2X25vcm1hbCA9IG1hdDMod29ybGRJbnZlcnNlVHJhbnNwb3NlKSAqIGFfbm9ybWFsO1xyXG4gICBcclxuICAgICAgXHJcbn1gXHJcbmNvbnN0IGZyYWcgPSBnbHNsYCN2ZXJzaW9uIDMwMCBlc1xyXG5wcmVjaXNpb24gaGlnaHAgZmxvYXQ7XHJcbiBcclxuXHJcblxyXG5pbiB2ZWMzIHZfbm9ybWFsO1xyXG5pbiB2ZWMzIHZfc3VyZmFjZVRvVmlldztcclxuaW4gdmVjMyB2X3N1cmZhY2VUb0xpZ2h0O1xyXG5cclxuXHJcbi8vdW5pZm9ybSBzYW1wbGVyMkQgdV90ZXh0dXJlMTtcclxudW5pZm9ybSBmbG9hdCB1X3NoaW5pbmVzcztcclxudW5pZm9ybSB2ZWM0IHVfY29sb3I7XHJcbnVuaWZvcm0gdmVjNCB1X2FtYmllbnRMaWdodDtcclxub3V0IHZlYzQgb3V0Q29sb3I7XHJcblxyXG5cclxudm9pZCBtYWluKCkge1xyXG4gIFxyXG4gIHZlYzMgc3VyZmFjZVRvTGlnaHREaXJlY3Rpb24gPSBub3JtYWxpemUodl9zdXJmYWNlVG9MaWdodCk7XHJcbiAgdmVjMyBzdXJmYWNlVG9WaWV3RGlyZWN0aW9uID0gbm9ybWFsaXplKHZfc3VyZmFjZVRvVmlldyk7XHJcbiAgdmVjMyBoYWxmVmVjdG9yID0gbm9ybWFsaXplKHN1cmZhY2VUb0xpZ2h0RGlyZWN0aW9uIC0gc3VyZmFjZVRvVmlld0RpcmVjdGlvbik7XHJcblxyXG4gIHZlYzMgbm9ybWFsID0gbm9ybWFsaXplKHZfbm9ybWFsKTtcclxuICBmbG9hdCBsaWdodCA9IGRvdCh2X25vcm1hbCwgc3VyZmFjZVRvTGlnaHREaXJlY3Rpb24pO1xyXG4gIGZsb2F0IHNwZWN1bGFyID0gMC4wO1xyXG4gIGlmIChsaWdodCA+IDAuMCkge1xyXG4gICAgc3BlY3VsYXIgPSBwb3coZG90KG5vcm1hbCwgaGFsZlZlY3RvciksIHVfc2hpbmluZXNzKTtcclxuICB9XHJcbiBcclxuICBvdXRDb2xvciA9ICB1X2NvbG9yO1xyXG4gIG91dENvbG9yLnJnYiAqPSBsaWdodDtcclxuICBcclxuICBvdXRDb2xvciArPSB1X2FtYmllbnRMaWdodCAqIDAuMTtcclxuICBcclxufVxyXG5gXHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgUHJvZ3JhbUluZm8odmVydCwgZnJhZykiLCJpbXBvcnQge20zLCB2ZWN0b3IsIG00fSBmcm9tICdtYXRoJ1xyXG5jb25zdCBLRVlTID0ge1xyXG4gICAgJ3cnIDogJ21vdmVGb3J3YXJkJyxcclxuICAgICdzJyA6ICdtb3ZlQmFja3dhcmQnLFxyXG4gICAgJ2EnIDogJ21vdmVMZWZ0JyxcclxuICAgICdkJyA6ICdtb3ZlUmlnaHQnLFxyXG4gICAgJyAnIDogJ21vdmVVcCdcclxufVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250cm9sbGFibGV7XHJcbiAgICBjb25zdHJ1Y3RvcihyaWdpZEJvZHkpe1xyXG5cclxuICAgICAgICB0aGlzLnJpZ2lkQm9keSA9IHJpZ2lkQm9keVxyXG4gICAgICAgIHRoaXMua2V5SW5wdXQgPSBudWxsXHJcbiAgICAgICAgdGhpcy5tb3VzZUlucHV0ID0gbnVsbFxyXG4gICAgICAgIHRoaXMucm90YXRpb25YID0gMFxyXG4gICAgICAgIHRoaXMucm90YXRpb25ZID0gMFxyXG4gICAgICAgIHRoaXMuZGVsdGFSWSA9IDBcclxuICAgICAgICB0aGlzLmNhbVBvcyA9IFswLDAsMTBdXHJcbiAgICAgICAgdGhpcy5jYW1Sb3QgPSBtMy5pZGVudGl0eSgpXHJcbiAgICAgICAgdGhpcy5qdW1wUmVhZHkgPSB0cnVlXHJcbiAgICB9XHJcbiAgICBsaXN0ZW5Nb3VzZShtb3VzZUlucHV0KXtcclxuICAgICAgICB0aGlzLm1vdXNlSW5wdXQgPSBtb3VzZUlucHV0XHJcbiAgICAgICAgbW91c2VJbnB1dC5vbignbW92ZScsIChbZGVsdGFYLCBkZWx0YVldKT0+e1xyXG4gICAgICAgICAgICB0aGlzLnJvdGF0aW9uWSAtPSBkZWx0YVggKiAwLjAwNTtcclxuICAgICAgICAgICAgdGhpcy5yb3RhdGlvblggLT0gZGVsdGFZICogMC4wMDU7XHJcbiAgICAgICAgICAgIHRoaXMucm90YXRpb25YID0gTWF0aC5tYXgoLU1hdGguUEkvMiwgTWF0aC5taW4oTWF0aC5QSS8yLCB0aGlzLnJvdGF0aW9uWCkpXHJcbiAgICAgICAgICAgIHRoaXMuZGVsdGFSWSA9IGRlbHRhWCAqIDAuMDA1O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgbGlzdGVuS2V5Ym9hcmQoa2V5SW5wdXQpe1xyXG4gICAgICAgIHRoaXMua2V5SW5wdXQgPSBrZXlJbnB1dFxyXG4gICAgfVxyXG4gICAgdGljaygpe1xyXG5cclxuICAgICAgICBmb3IoY29uc3Qga2V5IG9mIHRoaXMua2V5SW5wdXQua2V5cyl7XHJcbiAgICAgICAgICAgIGNvbnN0IGFjdGlvbk5hbWUgPSBLRVlTW2tleV1cclxuICAgICAgICAgICAgaWYoYWN0aW9uTmFtZSl7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhY3Rpb24gPSB0aGlzW2FjdGlvbk5hbWVdLmJpbmQodGhpcylcclxuICAgICAgICAgICAgICAgIGFjdGlvbigpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IG0gPSBtMy55Um90YXRpb24odGhpcy5yb3RhdGlvblkpXHJcbiAgICAgICAgLy90aGlzLnJpZ2lkQm9keS5yb3RhdGUoWzAsIC10aGlzLmRlbHRhUlksMF0pXHJcbiAgICAgICAgdGhpcy5kZWx0YVJZID0gMFxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHBvcyA9IFsuLi50aGlzLnJpZ2lkQm9keS5jb2xsaWRlci5wb3NdXHJcbiAgICAgICAgbGV0IF9tID0gbTQudHJhbnNsYXRpb24ocG9zWzBdLCBwb3NbMV0rMywgcG9zWzJdKVxyXG4gICAgICAgIC8vX20gPSBtNC5tdWx0aXBseShfbSwgbTQubTNUb200KHRoaXMucmlnaWRCb2R5LmNvbGxpZGVyLlJtYXRyaXgpKVxyXG4gICAgICAgIF9tID0gbTQueFJvdGF0ZShfbSwgdGhpcy5yb3RhdGlvblgpXHJcbiAgICAgICAgX20gPSBtNC50cmFuc2xhdGUoX20sIC4uLnRoaXMuY2FtUG9zKVxyXG4gICAgICAgIHRoaXMuY2FtTWF0cml4ID0gX21cclxuICAgICBcclxuICAgIH1cclxuICAgIGdldEFic29sdXRlQ2FtUG9zKCl7XHJcbiAgICAgICAgcmV0dXJuIHZlY3Rvci5zdW0odGhpcy5yaWdpZEJvZHkuY29sbGlkZXIucG9zLCB0aGlzLmNhbVBvcylcclxuICAgIH1cclxuICAgIG1vdmUoZGlyKXtcclxuICAgICAgICBjb25zdCBtID0gbTQueVJvdGF0aW9uKHRoaXMucm90YXRpb25YKVxyXG4gICAgICAgIHRoaXMucmlnaWRCb2R5LmFwcGx5SW1wdWxzZShkaXIsIFswLDAsMF0pXHJcbiAgICB9XHJcbiAgICBtb3ZlRm9yd2FyZCgpe1xyXG4gICAgICAgIHRoaXMubW92ZShbMCwwLCAtMV0pXHJcbiAgICB9XHJcbiAgICBtb3ZlQmFja3dhcmQoKXtcclxuICAgICAgICB0aGlzLm1vdmUoWzAsMCwgMV0pXHJcbiAgICB9XHJcbiAgICBtb3ZlTGVmdCgpe1xyXG4gICAgICAgIHRoaXMubW92ZShbLTEsMCwgMF0pXHJcbiAgICB9XHJcbiAgICBtb3ZlUmlnaHQoKXtcclxuICAgICAgICB0aGlzLm1vdmUoWzEsMCwgMF0pXHJcbiAgICB9XHJcbiAgICBtb3ZlVXAoKXtcclxuICAgICAgICBpZih0aGlzLmp1bXBSZWFkeSl7XHJcbiAgICAgICAgICAgIHRoaXMubW92ZShbMCwxMCwwXSlcclxuICAgICAgICAgICAgdGhpcy5qdW1wUmVhZHkgPSBmYWxzZVxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT50aGlzLmp1bXBSZWFkeSA9IHRydWUsIDEwMDApXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG59XHJcbmNsYXNzIE5vY2xpcHtcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgdGhpcy5rZXlJbnB1dCA9IG51bGxcclxuICAgICAgICB0aGlzLm1vdXNlSW5wdXQgPSBudWxsXHJcbiAgICAgICAgdGhpcy5yb3RhdGlvblggPSAwXHJcbiAgICAgICAgdGhpcy5yb3RhdGlvblkgPSAwXHJcbiAgICAgICAgdGhpcy5kZWx0YVJZID0gMFxyXG4gICAgICAgIHRoaXMuY2FtUG9zID0gWzAsMCwxMF1cclxuICAgICAgICB0aGlzLmNhbVJvdCA9IG0zLmlkZW50aXR5KClcclxuICAgIH1cclxuICAgIGxpc3Rlbk1vdXNlKG1vdXNlSW5wdXQpe1xyXG4gICAgICAgIHRoaXMubW91c2VJbnB1dCA9IG1vdXNlSW5wdXRcclxuICAgICAgICBtb3VzZUlucHV0Lm9uKCdtb3ZlJywgKFtkZWx0YVgsIGRlbHRhWV0pPT57XHJcbiAgICAgICAgICAgIHRoaXMucm90YXRpb25ZIC09IGRlbHRhWCAqIDAuMDA1O1xyXG4gICAgICAgICAgICB0aGlzLnJvdGF0aW9uWCAtPSBkZWx0YVkgKiAwLjAwNTtcclxuICAgICAgICAgICAgdGhpcy5yb3RhdGlvblggPSBNYXRoLm1heCgtTWF0aC5QSS8yLCBNYXRoLm1pbihNYXRoLlBJLzIsIHRoaXMucm90YXRpb25YKSlcclxuICAgICAgICAgICAgdGhpcy5kZWx0YVJZID0gZGVsdGFYICogMC4wMDU7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBsaXN0ZW5LZXlib2FyZChrZXlJbnB1dCl7XHJcbiAgICAgICAgdGhpcy5rZXlJbnB1dCA9IGtleUlucHV0XHJcbiAgICB9XHJcbiAgICB0aWNrKCl7XHJcblxyXG4gICAgICAgIGZvcihjb25zdCBrZXkgb2YgdGhpcy5rZXlJbnB1dC5rZXlzKXtcclxuICAgICAgICAgICAgY29uc3QgYWN0aW9uTmFtZSA9IEtFWVNba2V5XVxyXG4gICAgICAgICAgICBpZihhY3Rpb25OYW1lKXtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFjdGlvbiA9IHRoaXNbYWN0aW9uTmFtZV0uYmluZCh0aGlzKVxyXG4gICAgICAgICAgICAgICAgYWN0aW9uKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5jYW1NYXRyaXggPSBtNC50cmFuc2xhdGlvbiguLi50aGlzLmNhbVBvcylcclxuICAgICAgICB0aGlzLmNhbU1hdHJpeCA9IG00LnhSb3RhdGUobTQueVJvdGF0ZSh0aGlzLmNhbU1hdHJpeCwgdGhpcy5yb3RhdGlvblkpLCB0aGlzLnJvdGF0aW9uWClcclxuICAgICBcclxuICAgIH1cclxuICAgIG1vdmUoZGlyKXtcclxuICAgICAgICBjb25zdCBtID0gbTQubTRUb20zKHRoaXMuY2FtTWF0cml4KVxyXG4gICAgICAgIHRoaXMuY2FtUG9zID0gdmVjdG9yLnN1bSh0aGlzLmNhbVBvcywgbTMudHJhbnNmb3JtUG9pbnQobSwgZGlyKSlcclxuICAgIH1cclxuICAgIG1vdmVGb3J3YXJkKCl7XHJcbiAgICAgICAgdGhpcy5tb3ZlKFswLDAsIC0xXSlcclxuICAgIH1cclxuICAgIG1vdmVCYWNrd2FyZCgpe1xyXG4gICAgICAgIHRoaXMubW92ZShbMCwwLCAxXSlcclxuICAgIH1cclxuICAgIG1vdmVMZWZ0KCl7XHJcbiAgICAgICAgdGhpcy5tb3ZlKFstMSwwLCAwXSlcclxuICAgIH1cclxuICAgIG1vdmVSaWdodCgpe1xyXG4gICAgICAgIHRoaXMubW92ZShbMSwwLCAwXSlcclxuICAgIH1cclxuICAgIG1vdmVVcCgpe1xyXG4gICAgICAgIHRoaXMubW92ZShbMCwxLCAwXSlcclxuICAgIH1cclxufVxyXG5leHBvcnQge05vY2xpcCwgQ29udHJvbGxhYmxlfSIsImltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gXCIuLi9waHlzaWNzL2V2ZW50RW1pdHRlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgS2V5SW5wdXQgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKVxyXG4gICAgdGhpcy5rZXlzID0gbmV3IFNldCgpO1xyXG4gIH1cclxuICBsb2dEb3duKHsga2V5IH0pIHtcclxuICAgIHRoaXMua2V5cy5hZGQoa2V5KTtcclxuICAgIHRoaXMuZW1pdChcImtleWRvd25cIiwgeyBrZXkgfSk7XHJcbiAgfVxyXG4gIGxvZ1VwKHsga2V5IH0pIHtcclxuICAgIHRoaXMua2V5cy5kZWxldGUoa2V5KTtcclxuICAgIHRoaXMuZW1pdChcImtleXVwXCIsIHsga2V5IH0pO1xyXG4gIH1cclxuICBsaXN0ZW4oKSB7XHJcbiAgICBjb25zdCBsb2dEb3duID0gdGhpcy5sb2dEb3duLmJpbmQodGhpcyk7XHJcbiAgICBjb25zdCBsb2dVcCA9IHRoaXMubG9nVXAuYmluZCh0aGlzKTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGxvZ0Rvd24pO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGxvZ1VwKTtcclxuICAgIHRoaXMudW5zdWJzaWNyaWJlID0gKCkgPT4ge1xyXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBsb2dEb3duKTtcclxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGxvZ1VwKTtcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gXCIuLi9waHlzaWNzL2V2ZW50RW1pdHRlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW91c2VJbnB1dCBleHRlbmRzIEV2ZW50RW1pdHRlciB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5sYXN0WCA9IDA7XHJcbiAgICB0aGlzLmxhc3RZID0gMDtcclxuICAgIHRoaXMuZW5hYmxlID0gZmFsc2U7XHJcbiAgfVxyXG4gIGxvZ01vdmUoeyBvZmZzZXRYLCBvZmZzZXRZIH0pIHtcclxuICAgIGNvbnN0IGRlbHRhWCA9IG9mZnNldFggLSB0aGlzLmxhc3RYO1xyXG4gICAgdGhpcy5sYXN0WCA9IG9mZnNldFg7XHJcbiAgICBjb25zdCBkZWx0YVkgPSBvZmZzZXRZIC0gdGhpcy5sYXN0WTtcclxuICAgIHRoaXMubGFzdFkgPSBvZmZzZXRZO1xyXG4gICAgdGhpcy5lbWl0KFwibW92ZVwiLCBbZGVsdGFYLCBkZWx0YVldKTtcclxuICB9XHJcbiAgbGlzdGVuKCkge1xyXG4gICAgY29uc3QgbG9nTW92ZSA9IHRoaXMubG9nTW92ZS5iaW5kKHRoaXMpO1xyXG4gICAgY29uc3QgXyA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIGlmICh0aGlzLmVuYWJsZSkgbG9nTW92ZShlKTtcclxuICAgIH0uYmluZCh0aGlzKTtcclxuICAgIGNvbnN0IGRvd24gPSBmdW5jdGlvbiAoeyBvZmZzZXRYLCBvZmZzZXRZIH0pIHtcclxuICAgICAgdGhpcy5sYXN0WCA9IG9mZnNldFg7XHJcbiAgICAgIHRoaXMubGFzdFkgPSBvZmZzZXRZO1xyXG4gICAgICB0aGlzLmVuYWJsZSA9IHRydWU7XHJcbiAgICB9LmJpbmQodGhpcyk7XHJcbiAgICBjb25zdCB1cCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgdGhpcy5lbmFibGUgPSBmYWxzZTtcclxuICAgIH0uYmluZCh0aGlzKTtcclxuXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIF8pO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBkb3duKTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIHVwKTtcclxuICAgIHRoaXMudW5zdWJzY3JpYmUgPSAoKSA9PiB7XHJcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgXyk7XHJcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgZG93bik7XHJcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIHVwKTtcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gXCIuL2V2ZW50RW1pdHRlclwiO1xyXG5pbXBvcnQgeyBtMywgdmVjdG9yIH0gZnJvbSBcIm1hdGhcIjtcclxuY29uc3QgeyBjcm9zcywgc2NhbGUsIG5vcm0sIHN1bSwgZGlmZiB9ID0gdmVjdG9yO1xyXG5jb25zdCBwcmVjID0gMC4wMDAxO1xyXG5jb25zdCBzdG9wVHJlc2hvbGQgPSAwLjAwNVxyXG5jbGFzcyBSaWdpZEJvZHkgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xyXG4gIGNvbnN0cnVjdG9yKGNvbGxpZGVyKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5ET0YgPSBbMSwxLDEsMSwxLDFdXHJcbiAgICB0aGlzLnN0YXRpYyA9IGZhbHNlO1xyXG4gICAgdGhpcy5jb2xsaWRlciA9IGNvbGxpZGVyO1xyXG4gICAgdGhpcy5tYXNzID0gMTtcclxuICAgIHRoaXMuaW52ZXJzZU1hc3MgPSAxIC8gdGhpcy5tYXNzO1xyXG4gICAgdGhpcy52ZWxvY2l0eSA9IFswLCAwLCAwXTtcclxuICAgIHRoaXMucHNldWRvVmVsb2NpdHkgPSBbMCwgMCwgMF07XHJcbiAgICB0aGlzLnBzZXVkb0FuZ3VsYXJWID0gWzAsIDAsIDBdO1xyXG4gICAgdGhpcy5hY2NlbGVyYXRpb24gPSBbMCwgMCwgMF07XHJcbiAgICB0aGlzLmFuZ3VsYXJWID0gWzAsIDAsIDBdO1xyXG4gICAgdGhpcy5pbnZlcnNlSW5lcnRpYSA9IGNvbGxpZGVyLmdldEludmVyc2VJbmVydGlhVGVuc29yKHRoaXMubWFzcyk7XHJcbiAgICB0aGlzLmlkID0gMTtcclxuICAgIHRoaXMuZnJpY3Rpb24gPSAwLjU7XHJcbiAgICB0aGlzLkJWbGluaztcclxuICAgIHRoaXMub2xkVmVsb2NpdHkgPSBudWxsXHJcbiAgICB0aGlzLmdyb3VwID0gbnVsbFxyXG4gIH1cclxuICBcclxuICBpbnRlZ3JhdGVSSzQoZHQpe1xyXG4gICAgY29uc3Qge2FjY2VsZXJhdGlvbiwgdmVsb2NpdHksIGFuZ3VsYXJWfSA9IHRoaXNcclxuICAgIFxyXG5cclxuICAgIGNvbnN0IF90cmFuc2xhdGlvbiA9IHNjYWxlKHN1bSh2ZWxvY2l0eSwgc2NhbGUoYWNjZWxlcmF0aW9uLCAyLzMgKiBkdCkpLCBkdClcclxuICAgIGNvbnN0IF9yb3RhdGlvbiA9IHNjYWxlKGFuZ3VsYXJWLCBkdClcclxuICAgIGNvbnN0IGRlbHRhVmVsb2NpdHkgID0gc2NhbGUoYWNjZWxlcmF0aW9uLCBkdClcclxuXHJcbiAgICBpZiAobm9ybShfdHJhbnNsYXRpb24pID4gc3RvcFRyZXNob2xkKSB0aGlzLnRyYW5zbGF0ZShfdHJhbnNsYXRpb24pO1xyXG4gICAgXHJcbiAgICBpZiAobm9ybShfcm90YXRpb24pID4gc3RvcFRyZXNob2xkKSB0aGlzLnJvdGF0ZShfcm90YXRpb24pO1xyXG4gICAgdGhpcy52ZWxvY2l0eSA9IHN1bSh2ZWxvY2l0eSwgZGVsdGFWZWxvY2l0eSlcclxuICB9XHJcbiAgaW50ZWdyYXRlUHNldWRvVmVsb2NpdGllcyhkdCkge1xyXG4gICAgY29uc3QgdHJhbnNsYXRpb24gPSBzY2FsZSh0aGlzLnBzZXVkb1ZlbG9jaXR5LCBkdCk7XHJcblxyXG4gICAgY29uc3Qgcm90YXRpb24gPSBzY2FsZSh0aGlzLnBzZXVkb0FuZ3VsYXJWLCBkdCApO1xyXG4gICAgaWYgKG5vcm0odHJhbnNsYXRpb24pID4gc3RvcFRyZXNob2xkKSB0aGlzLnRyYW5zbGF0ZSh0cmFuc2xhdGlvbik7XHJcblxyXG4gICAgaWYgKG5vcm0ocm90YXRpb24pID4gc3RvcFRyZXNob2xkKSB0aGlzLnJvdGF0ZShyb3RhdGlvbik7XHJcblxyXG4gICAgdGhpcy5wc2V1ZG9WZWxvY2l0eSA9IFswLCAwLCAwXTtcclxuICAgIHRoaXMucHNldWRvQW5ndWxhclYgPSBbMCwgMCwgMF07XHJcbiAgfVxyXG4gIGFkZFBzZXVkb1ZlbG9jaXR5KHYpIHtcclxuICAgIHRoaXMucHNldWRvVmVsb2NpdHkgPSBzdW0odGhpcy5wc2V1ZG9WZWxvY2l0eSwgdik7XHJcbiAgfVxyXG4gIGFkZFBzZXVkb0FuZ3VsYXJWKHYpIHtcclxuICAgIHRoaXMucHNldWRvQW5ndWxhclYgPSBzdW0odGhpcy5wc2V1ZG9Bbmd1bGFyViwgdik7XHJcbiAgfVxyXG4gIGludGVncmF0ZVZlbG9jaXRpZXMoZHQpIHtcclxuICAgIGNvbnN0IHRyYW5zbGF0aW9uID0gc2NhbGUodGhpcy52ZWxvY2l0eSAsIGR0KTtcclxuICAgIGlmIChub3JtKHRyYW5zbGF0aW9uKSA+IHN0b3BUcmVzaG9sZCkgdGhpcy50cmFuc2xhdGUodHJhbnNsYXRpb24pO1xyXG4gICAgY29uc3Qgcm90YXRpb24gPSBzY2FsZSh0aGlzLmFuZ3VsYXJWLCBkdCApO1xyXG4gICAgaWYgKG5vcm0odHJhbnNsYXRpb24pID4gc3RvcFRyZXNob2xkKSB0aGlzLnJvdGF0ZShyb3RhdGlvbik7XHJcbiAgfVxyXG4gIGludGVncmF0ZUZvcmNlcyhkdCkge1xyXG4gICAgbGV0IGRlbHRhU3BlZWQgPSBzY2FsZSh0aGlzLmFjY2VsZXJhdGlvbiwgZHQpO1xyXG4gICAgXHJcbiAgICB0aGlzLnZlbG9jaXR5ID0gc3VtKHRoaXMudmVsb2NpdHksIGRlbHRhU3BlZWQpO1xyXG4gIH1cclxuICB1cGRhdGVJbnZlcnNlSW5lcnRpYSgpIHtcclxuICAgIHRoaXMuaW52ZXJzZUluZXJ0aWEgPSB0aGlzLmNvbGxpZGVyLmdldEludmVyc2VJbmVydGlhVGVuc29yKHRoaXMubWFzcyk7XHJcbiAgfVxyXG4gIGdldEl0ZW5zb3IoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jb2xsaWRlci5nZXRJbnZlcnNlSW5lcnRpYVRlbnNvcih0aGlzLm1hc3MpO1xyXG4gIH1cclxuICBzZXRNYXNzKG1hc3MpIHtcclxuICAgIHRoaXMubWFzcyA9IG1hc3M7XHJcbiAgICB0aGlzLmludmVyc2VNYXNzID0gMSAvIHRoaXMubWFzcztcclxuICB9XHJcbiAgdHJhbnNsYXRlKHRyYW5zbGF0aW9uKSB7XHJcbiAgICB0aGlzLmNvbGxpZGVyLnRyYW5zbGF0ZSh0cmFuc2xhdGlvbik7XHJcblxyXG4gICAgdGhpcy5lbWl0KFwidXBkYXRlXCIpO1xyXG4gIH1cclxuICByb3RhdGUocm90YXRpb24pIHtcclxuICAgIHRoaXMuY29sbGlkZXIucm90YXRlKHJvdGF0aW9uKTtcclxuXHJcbiAgICB0aGlzLmVtaXQoXCJ1cGRhdGVcIik7XHJcbiAgfVxyXG5cclxuICBhcHBseUltcHVsc2UoaW1wdWxzZSwgcG9pbnQpIHtcclxuICAgIGlmICh0aGlzLnN0YXRpYykgcmV0dXJuO1xyXG4gICAgdGhpcy52ZWxvY2l0eSA9IHN1bSh0aGlzLnZlbG9jaXR5LCBzY2FsZShpbXB1bHNlLCB0aGlzLmludmVyc2VNYXNzKSk7XHJcbiAgICBjb25zdCBhbmd1bGFySW1wdWxzZSA9IG0zLnRyYW5zZm9ybVBvaW50KFxyXG4gICAgICB0aGlzLmludmVyc2VJbmVydGlhLFxyXG4gICAgICBjcm9zcyhwb2ludCwgaW1wdWxzZSlcclxuICAgICk7XHJcbiAgICB0aGlzLmFuZ3VsYXJWID0gc3VtKHRoaXMuYW5ndWxhclYsIGFuZ3VsYXJJbXB1bHNlKTtcclxuICB9XHJcbiAgYXBwbHlQc2V1ZG9JbXB1bHNlKGltcHVsc2UsIHBvaW50KSB7XHJcbiAgICBpZiAodGhpcy5zdGF0aWMpIHJldHVybjtcclxuICAgIHRoaXMucHNldWRvVmVsb2NpdHkgPSBzdW0oXHJcbiAgICAgIHRoaXMucHNldWRvVmVsb2NpdHksXHJcbiAgICAgIHNjYWxlKGltcHVsc2UsIHRoaXMuaW52ZXJzZU1hc3MpXHJcbiAgICApO1xyXG4gICAgY29uc3QgYW5ndWxhckltcHVsc2UgPSBtMy50cmFuc2Zvcm1Qb2ludChcclxuICAgICAgdGhpcy5pbnZlcnNlSW5lcnRpYSxcclxuICAgICAgY3Jvc3MocG9pbnQsIGltcHVsc2UpXHJcbiAgICApO1xyXG4gICAgdGhpcy5wc2V1ZG9Bbmd1bGFyViA9IHN1bSh0aGlzLnBzZXVkb0FuZ3VsYXJWLCBhbmd1bGFySW1wdWxzZSk7XHJcbiAgfVxyXG4gIGFkZFZlbG9jaXR5KHYpIHtcclxuICBcclxuICAgIFxyXG4gICAgdGhpcy52ZWxvY2l0eSA9IHN1bSh0aGlzLnZlbG9jaXR5LCB2KTtcclxuICB9XHJcbiAgYWRkQW5ndWxhclYodikge1xyXG4gICBcclxuICAgIFxyXG4gICAgdGhpcy5hbmd1bGFyViA9IHN1bSh0aGlzLmFuZ3VsYXJWLCB2KTtcclxuICB9XHJcbiAgYWRkQWNjZWxlcmF0aW9uKHYpIHtcclxuICAgIHRoaXMuYWNjZWxlcmF0aW9uID0gc3VtKHRoaXMuYWNjZWxlcmF0aW9uLCB2KTtcclxuICB9XHJcbiAgZ2V0RXhwYW5kZWRBQUJCKCkge1xyXG4gICAgY29uc3QgYWFiYiA9IHRoaXMuY29sbGlkZXIuZ2V0QUFCQigpO1xyXG4gICAgY29uc3QgdmVsb2NpdHkgPSB0aGlzLnZlbG9jaXR5O1xyXG4gICAgY29uc3QgdHIgPSBbcHJlYywgcHJlYywgcHJlY107XHJcbiAgICBhYWJiLm1pbiA9IGRpZmYoYWFiYi5taW4sIHRyKTtcclxuICAgIGFhYmIubWF4ID0gc3VtKGFhYmIubWF4LCB0cik7XHJcblxyXG4gICAgLyppZih2ZWxvY2l0eVswXSA+IDEwKSBhYWJiLm1heFswXSArPSB2ZWxvY2l0eVswXVxyXG4gICAgICBpZih2ZWxvY2l0eVsxXSA+IDEwKSBhYWJiLm1heFsxXSArPSB2ZWxvY2l0eVsxXVxyXG4gICAgICBpZih2ZWxvY2l0eVsyXSA+IDEwKSBhYWJiLm1heFsyXSArPSB2ZWxvY2l0eVsyXVxyXG4gICAgICBpZih2ZWxvY2l0eVswXSA8IC0xMCkgYWFiYi5taW5bMF0gKz0gdmVsb2NpdHlbMF1cclxuICAgICAgaWYodmVsb2NpdHlbMV0gPCAtMTApIGFhYmIubWluWzFdICs9IHZlbG9jaXR5WzFdXHJcbiAgICAgIGlmKHZlbG9jaXR5WzJdIDwgLTEwKSBhYWJiLm1pblsyXSArPSB2ZWxvY2l0eVsyXSovXHJcbiAgICByZXR1cm4gYWFiYjtcclxuICB9XHJcbiAgZ2V0QUFCQigpIHtcclxuICAgIHJldHVybiB0aGlzLmNvbGxpZGVyLmdldEFBQkIoKTtcclxuICB9XHJcbiAgXHJcbn1cclxuXHJcbmNsYXNzIFBsYXllciBleHRlbmRzIFJpZ2lkQm9keSB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlciguLi5hcmd1bWVudHMpO1xyXG4gICAgdGhpcy5mcmljdGlvbiA9IDAuMztcclxuICAgIHRoaXMuRE9GID0gWzEsMSwxLCAwLDAsMF1cclxuICB9XHJcbiAgYXBwbHlJbXB1bHNlKGltcHVsc2UsIHBvaW50KSB7XHJcbiAgICB0aGlzLnZlbG9jaXR5ID0gc3VtKHRoaXMudmVsb2NpdHksIHNjYWxlKGltcHVsc2UsIHRoaXMuaW52ZXJzZU1hc3MpKTtcclxuICB9XHJcbiAgYXBwbHlQc2V1ZG9JbXB1bHNlKGltcHVsc2UpIHtcclxuICAgIHRoaXMucHNldWRvVmVsb2NpdHkgPSBzdW0oXHJcbiAgICAgIHRoaXMucHNldWRvVmVsb2NpdHksXHJcbiAgICAgIHNjYWxlKGltcHVsc2UsIHRoaXMuaW52ZXJzZU1hc3MpXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5leHBvcnQgeyBSaWdpZEJvZHksIFBsYXllciB9O1xyXG4iLCJjb25zdCBpc0luc2lkZSA9IChwMSwgcDIsIHEpID0+IHtcclxuICBjb25zdCBSID0gKHAyWzBdIC0gcDFbMF0pICogKHFbMV0gLSBwMVsxXSkgLSAocDJbMV0gLSBwMVsxXSkgKiAocVswXSAtIHAxWzBdKTtcclxuICByZXR1cm4gUiA8PSAwICsgMC4wMDE7XHJcbn07XHJcblxyXG5jb25zdCBkb3QgPSAoYSwgYikgPT4gYVswXSAqIGJbMF0gKyBhWzFdICogYlsxXTtcclxuXHJcbmNvbnN0IGlzSW5DbG9ja3dpc2UgPSAocG9pbnRzKSA9PiB7XHJcbiAgaWYgKHBvaW50cy5sZW5ndGggPCAzKSByZXR1cm4gMTtcclxuICBjb25zdCBbcDEsIHAyLCBwM10gPSBwb2ludHM7XHJcbiAgY29uc3QgZGV0ID1cclxuICAgIHAyWzBdICogcDNbMV0gK1xyXG4gICAgcDNbMF0gKiBwMVsxXSArXHJcbiAgICBwMVswXSAqIHAyWzFdIC1cclxuICAgIHAxWzBdICogcDFbMV0gLVxyXG4gICAgcDNbMF0gKiBwMlsxXSAtXHJcbiAgICBwMVswXSAqIHAzWzFdO1xyXG5cclxuICBpZiAoZGV0IDwgMCkgcmV0dXJuIDE7XHJcbiAgcmV0dXJuIC0xO1xyXG59O1xyXG5cclxuY29uc3QgY29tcHV0ZUludGVyc2VjdGlvbiA9IChwMSwgcDIsIHAzLCBwNCkgPT4ge1xyXG4gIGlmIChwMlswXSAtIHAxWzBdID09PSAwKSB7XHJcbiAgICBjb25zdCB4ID0gcDFbMF07XHJcblxyXG4gICAgY29uc3QgbTIgPSAocDRbMV0gLSBwM1sxXSkgLyAocDRbMF0gLSBwM1swXSk7XHJcbiAgICBjb25zdCBiMiA9IHAzWzFdIC0gbTIgKiBwM1swXTtcclxuXHJcbiAgICBjb25zdCB5ID0gbTIgKiB4ICsgYjI7XHJcbiAgICByZXR1cm4gW3gsIHldO1xyXG4gIH1cclxuICBpZiAocDRbMF0gLSBwM1swXSA9PT0gMCkge1xyXG4gICAgY29uc3QgeCA9IHAzWzBdO1xyXG5cclxuICAgIGNvbnN0IG0xID0gKHAyWzFdIC0gcDFbMV0pIC8gKHAyWzBdIC0gcDFbMF0pO1xyXG4gICAgY29uc3QgYjEgPSBwMVsxXSAtIG0xICogcDFbMF07XHJcblxyXG4gICAgY29uc3QgeSA9IG0xICogeCArIGIxO1xyXG5cclxuICAgIHJldHVybiBbeCwgeV07XHJcbiAgfVxyXG4gIGNvbnN0IG0xID0gKHAyWzFdIC0gcDFbMV0pIC8gKHAyWzBdIC0gcDFbMF0pO1xyXG4gIGNvbnN0IGIxID0gcDFbMV0gLSBtMSAqIHAxWzBdO1xyXG5cclxuICBjb25zdCBtMiA9IChwNFsxXSAtIHAzWzFdKSAvIChwNFswXSAtIHAzWzBdKTtcclxuICBjb25zdCBiMiA9IHAzWzFdIC0gbTIgKiBwM1swXTtcclxuXHJcbiAgY29uc3QgeCA9IChiMiAtIGIxKSAvIChtMSAtIG0yKTtcclxuXHJcbiAgY29uc3QgeSA9IG0xICogeCArIGIxO1xyXG5cclxuICByZXR1cm4gW3gsIHldO1xyXG59O1xyXG5cclxuY29uc3QgY2xpcFBvbHlWc1BvbHkgPSAoQSwgQikgPT4ge1xyXG4gIGxldCByZXN1bHQgPSBbLi4uQV07XHJcblxyXG4gIGZvciAobGV0IGkgPSAwLCBuID0gQi5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgIGNvbnN0IG5leHQgPSBbLi4ucmVzdWx0XTtcclxuICAgIHJlc3VsdCA9IFtdO1xyXG4gICAgY29uc3QgYUVkZ2UxID0gQi5hdChpIC0gMSk7XHJcbiAgICBjb25zdCBhRWRnZTIgPSBCLmF0KGkpO1xyXG5cclxuICAgIGZvciAobGV0IGogPSAwLCBfbiA9IG5leHQubGVuZ3RoOyBqIDwgX247IGorKykge1xyXG4gICAgICBjb25zdCBiRWRnZTEgPSBuZXh0LmF0KGogLSAxKTtcclxuICAgICAgY29uc3QgYkVkZ2UyID0gbmV4dC5hdChqKTtcclxuXHJcbiAgICAgIGlmIChpc0luc2lkZShhRWRnZTEsIGFFZGdlMiwgYkVkZ2UyKSkge1xyXG4gICAgICAgIGlmICghaXNJbnNpZGUoYUVkZ2UxLCBhRWRnZTIsIGJFZGdlMSkpIHtcclxuICAgICAgICAgIGNvbnN0IGludGVyc2VjdGlvbiA9IGNvbXB1dGVJbnRlcnNlY3Rpb24oXHJcbiAgICAgICAgICAgIGJFZGdlMSxcclxuICAgICAgICAgICAgYkVkZ2UyLFxyXG4gICAgICAgICAgICBhRWRnZTEsXHJcbiAgICAgICAgICAgIGFFZGdlMlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIHJlc3VsdC5wdXNoKGludGVyc2VjdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlc3VsdC5wdXNoKGJFZGdlMik7XHJcbiAgICAgICAgY29udGludWU7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGlzSW5zaWRlKGFFZGdlMSwgYUVkZ2UyLCBiRWRnZTEpKSB7XHJcbiAgICAgICAgY29uc3QgaW50ZXJzZWN0aW9uID0gY29tcHV0ZUludGVyc2VjdGlvbihcclxuICAgICAgICAgIGJFZGdlMSxcclxuICAgICAgICAgIGJFZGdlMixcclxuICAgICAgICAgIGFFZGdlMSxcclxuICAgICAgICAgIGFFZGdlMlxyXG4gICAgICAgICk7XHJcbiAgICAgICAgcmVzdWx0LnB1c2goaW50ZXJzZWN0aW9uKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG5cclxuY29uc3QgbGVycCA9IChhLCBiLCB0KSA9PiBhICsgKGIgLSBhKSAqIHQ7XHJcblxyXG5jb25zdCBjbGlwU2VnbWVudFZzU2VnbWVudCA9IChwMSwgcDIsIHAzLCBwNCkgPT4ge1xyXG4gIGNvbnN0IHRvcCA9XHJcbiAgICAocDRbMF0gLSBwM1swXSkgKiAocDFbMV0gLSBwM1sxXSkgLSAocDRbMV0gLSBwM1sxXSkgKiAocDFbMF0gLSBwM1swXSk7XHJcbiAgY29uc3QgYm90dG9tID1cclxuICAgIChwNFsxXSAtIHAzWzFdKSAqIChwMlswXSAtIHAxWzBdKSAtIChwNFswXSAtIHAzWzBdKSAqIChwMlsxXSAtIHAxWzFdKTtcclxuICBpZiAoIWJvdHRvbSkgcmV0dXJuIG51bGw7XHJcbiAgY29uc3QgdCA9IHRvcCAvIGJvdHRvbTtcclxuICBpZiAodCA8IDAgfHwgdCA+IDEpIHJldHVybiBudWxsO1xyXG4gIHJldHVybiBbbGVycChwMVswXSwgcDJbMF0sIHQpLCBsZXJwKHAxWzFdLCBwMlsxXSwgdCldO1xyXG59O1xyXG5cclxuY29uc3QgY2xpcFBvaW50VnNQb2x5ID0gKHBvaW50LCB2ZXJ0aWNlcykgPT4ge1xyXG4gIGNvbnN0IHggPSBwb2ludFswXTtcclxuICBjb25zdCB5ID0gcG9pbnRbMV07XHJcblxyXG4gIGxldCBpbnNpZGUgPSBmYWxzZTtcclxuICBmb3IgKGxldCBpID0gMCwgaiA9IHZlcnRpY2VzLmxlbmd0aCAtIDE7IGkgPCB2ZXJ0aWNlcy5sZW5ndGg7IGogPSBpKyspIHtcclxuICAgIGNvbnN0IHhpID0gdmVydGljZXNbaV1bMF0sXHJcbiAgICAgIHlpID0gdmVydGljZXNbaV1bMV07XHJcbiAgICBjb25zdCB4aiA9IHZlcnRpY2VzW2pdWzBdLFxyXG4gICAgICB5aiA9IHZlcnRpY2VzW2pdWzFdO1xyXG5cclxuICAgIGNvbnN0IGludGVyc2VjdCA9XHJcbiAgICAgIHlpID4geSAhPSB5aiA+IHkgJiYgeCA8ICgoeGogLSB4aSkgKiAoeSAtIHlpKSkgLyAoeWogLSB5aSkgKyB4aTtcclxuICAgIGlmIChpbnRlcnNlY3QpIGluc2lkZSA9ICFpbnNpZGU7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gaW5zaWRlO1xyXG59O1xyXG5jb25zdCBjbGlwU2VnbWVudFZzUG9seSA9IChzZWdtZW50LCBwb2x5KSA9PiB7XHJcbiAgY29uc3QgW3AxLCBwMl0gPSBzZWdtZW50O1xyXG4gIGNvbnN0IHBvaW50cyA9IFtdO1xyXG4gIGlmIChjbGlwUG9pbnRWc1BvbHkocDEsIHBvbHkpKSBwb2ludHMucHVzaChwMSk7XHJcbiAgaWYgKGNsaXBQb2ludFZzUG9seShwMiwgcG9seSkpIHBvaW50cy5wdXNoKHAyKTtcclxuICBpZiAocG9pbnRzLmxlbmd0aCA+IDEpIHJldHVybiBwb2ludHM7XHJcbiAgZm9yIChsZXQgaSA9IDAsIG4gPSBwb2x5Lmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgY29uc3QgcTEgPSBwb2x5LmF0KGkgLSAxKTtcclxuICAgIGNvbnN0IHEyID0gcG9seS5hdChpKTtcclxuICAgIGNvbnN0IGludGVyc2VjdGlvbiA9IGNsaXBTZWdtZW50VnNTZWdtZW50KHAxLCBwMiwgcTEsIHEyKTtcclxuICAgIGlmIChpbnRlcnNlY3Rpb24pIHBvaW50cy5wdXNoKGludGVyc2VjdGlvbik7XHJcbiAgfVxyXG4gIHJldHVybiBwb2ludHM7XHJcbn07XHJcblxyXG5cclxuY29uc3QgZmFjZUludGVyc2VjdGlvbnNNYXAgPSB7XHJcbiAgJ3BvbHlfcG9seScgOiBjbGlwUG9seVZzUG9seSxcclxuICAnc2VnbWVudF9wb2x5JyA6IGNsaXBTZWdtZW50VnNQb2x5LFxyXG4gICdwb2x5X3NlZ21lbnQnIDogKHBvbHksIHNlZ21lbnQpID0+IGNsaXBTZWdtZW50VnNQb2x5KHNlZ21lbnQsIHBvbHkpLFxyXG4gICdzZWdtZW50X3NlZ21lbnQnIDogY2xpcFNlZ21lbnRWc1NlZ21lbnQsXHJcbiAgJ3BvaW50X3BvbHknIDogY2xpcFBvaW50VnNQb2x5LFxyXG4gICdwb2x5X3BvaW50JyA6IChwb2x5LCBwb2ludCkgPT4gY2xpcFBvaW50VnNQb2x5KHBvaW50LCBwb2x5KSxcclxufVxyXG5jb25zdCBnZXRGYWNlVHlwZSA9IChmYWNlKSA9PntcclxuICBpZihmYWNlLmxlbmd0aCA+IDIpIHJldHVybiAncG9seSdcclxuICBpZihmYWNlLmxlbmd0aCA9PT0gMikgcmV0dXJuICdzZWdtZW50J1xyXG4gIHJldHVybiAncG9pbnQnXHJcbn1cclxuY29uc3QgY2xpcEZhY2VWc0ZhY2UgPSAoZmFjZTEsIGZhY2UyKSA9PntcclxuICBjb25zdCB0eXBlcyA9IGAke2dldEZhY2VUeXBlKGZhY2UxKX1fJHtnZXRGYWNlVHlwZShmYWNlMil9YFxyXG4gIHJldHVybiBmYWNlSW50ZXJzZWN0aW9uc01hcFt0eXBlc10oZmFjZTEsIGZhY2UyKSBcclxufVxyXG5cclxuZXhwb3J0IHtcclxuICBjbGlwU2VnbWVudFZzU2VnbWVudCxcclxuICBpc0luc2lkZSxcclxuICBjb21wdXRlSW50ZXJzZWN0aW9uLFxyXG4gIGNsaXBQb2x5VnNQb2x5LFxyXG4gIGNsaXBGYWNlVnNGYWNlLFxyXG4gIGlzSW5DbG9ja3dpc2UsXHJcbiAgY2xpcFNlZ21lbnRWc1BvbHksXHJcbiAgY2xpcFBvaW50VnNQb2x5LFxyXG59O1xyXG4iLCJpbXBvcnQgeyB2ZWN0b3IsIG00LCBtMywgQUFCQiB9IGZyb20gXCJtYXRoXCI7XHJcblxyXG5jb25zdCB7IHNjYWxlLCBzdW0sIGRpZmYsIGRvdCwgbm9ybWFsaXplIH0gPSB2ZWN0b3I7XHJcblxyXG5jb25zdCB4QXhpcyA9IFsxLCAwLCAwXTtcclxuY29uc3QgeUF4aXMgPSBbMCwgMSwgMF07XHJcbmNvbnN0IHpBeGlzID0gWzAsIDAsIDFdO1xyXG5jb25zdCB4QXhpc05lZ2F0aXZlID0gc2NhbGUoeEF4aXMsIC0xKTtcclxuY29uc3QgeUF4aXNOZWdhdGl2ZSA9IHNjYWxlKHlBeGlzLCAtMSk7XHJcbmNvbnN0IHpBeGlzTmVnYXRpdmUgPSBzY2FsZSh6QXhpcywgLTEpO1xyXG5cclxuY2xhc3MgQ29sbGlkZXIge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5SbWF0cml4ID0gbTMuaWRlbnRpdHkoKTtcclxuICAgIHRoaXMuUm1hdHJpeEludmVyc2UgPSBtMy5pZGVudGl0eSgpO1xyXG4gICAgdGhpcy5wb3MgPSBbMCwgMCwgMF07XHJcbiAgfVxyXG4gIHRyYW5zbGF0ZSh2KSB7XHJcbiAgICB0aGlzLnBvcyA9IHN1bSh0aGlzLnBvcywgdik7XHJcbiAgfVxyXG4gIHNldFRyYW5zbGF0aW9uKHRyYW5zbGF0aW9uKSB7XHJcbiAgICB0aGlzLnBvcyA9IFsuLi50cmFuc2xhdGlvbl07XHJcbiAgfVxyXG4gIHJvdGF0ZShyKSB7XHJcbiAgICB0aGlzLlJtYXRyaXggPSBtMy54Um90YXRlKHRoaXMuUm1hdHJpeCwgclswXSk7XHJcbiAgICB0aGlzLlJtYXRyaXggPSBtMy55Um90YXRlKHRoaXMuUm1hdHJpeCwgclsxXSk7XHJcbiAgICB0aGlzLlJtYXRyaXggPSBtMy56Um90YXRlKHRoaXMuUm1hdHJpeCwgclsyXSk7XHJcbiAgICB0aGlzLlJtYXRyaXhJbnZlcnNlID0gbTMudHJhbnNwb3NlKHRoaXMuUm1hdHJpeCk7XHJcbiAgfVxyXG4gIHNldFJvdGF0aW9uKHIpIHtcclxuICAgIHRoaXMuUm1hdHJpeCA9IG0zLnhSb3RhdGlvbihyWzBdKTtcclxuICAgIHRoaXMuUm1hdHJpeCA9IG0zLnlSb3RhdGUodGhpcy5SbWF0cml4LCByWzFdKTtcclxuICAgIHRoaXMuUm1hdHJpeCA9IG0zLnpSb3RhdGUodGhpcy5SbWF0cml4LCByWzJdKTtcclxuICAgIHRoaXMuUm1hdHJpeEludmVyc2UgPSBtMy50cmFuc3Bvc2UodGhpcy5SbWF0cml4KTtcclxuICB9XHJcbiAgZ2V0QUFCQigpIHtcclxuICAgIGNvbnN0IG1heFggPSB0aGlzLnN1cHBvcnQoeEF4aXMpWzBdO1xyXG4gICAgY29uc3QgbWF4WSA9IHRoaXMuc3VwcG9ydCh5QXhpcylbMV07XHJcbiAgICBjb25zdCBtYXhaID0gdGhpcy5zdXBwb3J0KHpBeGlzKVsyXTtcclxuXHJcbiAgICBjb25zdCBtaW5YID0gdGhpcy5zdXBwb3J0KHhBeGlzTmVnYXRpdmUpWzBdO1xyXG4gICAgY29uc3QgbWluWSA9IHRoaXMuc3VwcG9ydCh5QXhpc05lZ2F0aXZlKVsxXTtcclxuICAgIGNvbnN0IG1pblogPSB0aGlzLnN1cHBvcnQoekF4aXNOZWdhdGl2ZSlbMl07XHJcbiAgICByZXR1cm4gbmV3IEFBQkIoW21pblgsIG1pblksIG1pblpdLCBbbWF4WCwgbWF4WSwgbWF4Wl0pO1xyXG4gIH1cclxuICBzZXRSbWF0cml4KG1hdHJpeCkge1xyXG4gICAgdGhpcy5SbWF0cml4ID0gWy4uLm1hdHJpeF07XHJcblxyXG4gICAgdGhpcy5SbWF0cml4SW52ZXJzZSA9IG0zLnRyYW5zcG9zZShtYXRyaXgpO1xyXG4gIH1cclxuICBnZXRNNCgpIHtcclxuICAgIGNvbnN0IG0gPSBtNC5tM1RvbTQodGhpcy5SbWF0cml4KTtcclxuICAgIG1bMTJdID0gdGhpcy5wb3NbMF07XHJcbiAgICBtWzEzXSA9IHRoaXMucG9zWzFdO1xyXG4gICAgbVsxNF0gPSB0aGlzLnBvc1syXTtcclxuICAgIG1bMTVdID0gMTtcclxuICAgIHJldHVybiBtO1xyXG4gIH1cclxuICBsb2NhbFRvR2xvYmFsKHYpIHtcclxuICAgIGxldCBnbG9iYWwgPSBtMy50cmFuc2Zvcm1Qb2ludCh0aGlzLlJtYXRyaXgsIHYpO1xyXG4gICAgcmV0dXJuIHN1bSh0aGlzLnBvcywgZ2xvYmFsKTtcclxuICB9XHJcbiAgZ2V0Q2xvc2VzdEZhY2Uobm9ybWFsKSB7fVxyXG4gIGdldEludmVyc2VJbmVydGlhVGVuc29yKG1hc3MpIHtcclxuICAgIHJldHVybiBuZXcgQXJyYXkoOSkuZmlsbCgwKTtcclxuICB9XHJcbn1cclxuXHJcbmNsYXNzIEJveCBleHRlbmRzIENvbGxpZGVyIHtcclxuICBjb25zdHJ1Y3RvcihhID0gMSwgYiA9IDEsIGMgPSAxKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5taW4gPSBbLWEgLyAyLCAtYiAvIDIsIC1jIC8gMl07XHJcbiAgICB0aGlzLm1heCA9IFthIC8gMiwgYiAvIDIsIGMgLyAyXTtcclxuICAgIHRoaXMucG9pbnRzID0gW1xyXG4gICAgICBbLTEgLyAyLCAtMSAvIDIsIC0xIC8gMl0sXHJcbiAgICAgIFsxIC8gMiwgLTEgLyAyLCAtMSAvIDJdLFxyXG4gICAgICBbMSAvIDIsIC0xIC8gMiwgMSAvIDJdLFxyXG4gICAgICBbLTEgLyAyLCAtMSAvIDIsIDEgLyAyXSxcclxuICAgICAgWy0xIC8gMiwgMSAvIDIsIC0xIC8gMl0sXHJcbiAgICAgIFsxIC8gMiwgMSAvIDIsIC0xIC8gMl0sXHJcbiAgICAgIFsxIC8gMiwgMSAvIDIsIDEgLyAyXSxcclxuICAgICAgWy0xIC8gMiwgMSAvIDIsIDEgLyAyXSxcclxuICAgIF07XHJcbiAgICB0aGlzLmluZGljZXMgPSBbXHJcbiAgICAgIFswLCA0LCA1LCAxXSwgLy8gLXpcclxuICAgICAgWzMsIDcsIDYsIDJdLCAvLyArelxyXG4gICAgICBbMCwgMSwgMiwgM10sIC8vIC15XHJcbiAgICAgIFs0LCA1LCA2LCA3XSwgLy8gK3lcclxuICAgICAgWzAsIDMsIDcsIDRdLCAvLyAteFxyXG4gICAgICBbMSwgMiwgNiwgNV0sIC8vICt4XHJcbiAgICBdO1xyXG4gICAgdGhpcy5ub3JtYWxzID0gW1xyXG4gICAgICBbMCwgMCwgLTFdLFxyXG4gICAgICBbMCwgMCwgMV0sXHJcbiAgICAgIFswLCAtMSwgMF0sXHJcbiAgICAgIFswLCAxLCAwXSxcclxuICAgICAgWy0xLCAwLCAwXSxcclxuICAgICAgWzEsIDAsIDBdLFxyXG4gICAgXTtcclxuICB9XHJcblxyXG4gIGdldEFBQkIoKSB7XHJcbiAgICBjb25zdCBtYXhYID0gdGhpcy5zdXBwb3J0KHhBeGlzKVswXTtcclxuICAgIGNvbnN0IG1heFkgPSB0aGlzLnN1cHBvcnQoeUF4aXMpWzFdO1xyXG4gICAgY29uc3QgbWF4WiA9IHRoaXMuc3VwcG9ydCh6QXhpcylbMl07XHJcblxyXG4gICAgY29uc3QgbWluWCA9IHRoaXMuc3VwcG9ydCh4QXhpc05lZ2F0aXZlKVswXTtcclxuICAgIGNvbnN0IG1pblkgPSB0aGlzLnN1cHBvcnQoeUF4aXNOZWdhdGl2ZSlbMV07XHJcbiAgICBjb25zdCBtaW5aID0gdGhpcy5zdXBwb3J0KHpBeGlzTmVnYXRpdmUpWzJdO1xyXG4gICAgcmV0dXJuIG5ldyBBQUJCKFttaW5YLCBtaW5ZLCBtaW5aXSwgW21heFgsIG1heFksIG1heFpdKTtcclxuICB9XHJcblxyXG4gIHN1cHBvcnQoZGlyKSB7XHJcbiAgICBjb25zdCBfZGlyID0gbTMudHJhbnNmb3JtUG9pbnQodGhpcy5SbWF0cml4SW52ZXJzZSwgZGlyKTtcclxuXHJcbiAgICBjb25zdCByZXMgPSBbMCwgMCwgMF07XHJcblxyXG4gICAgcmVzWzBdID0gX2RpclswXSA+IDAgPyB0aGlzLm1heFswXSA6IHRoaXMubWluWzBdO1xyXG4gICAgcmVzWzFdID0gX2RpclsxXSA+IDAgPyB0aGlzLm1heFsxXSA6IHRoaXMubWluWzFdO1xyXG4gICAgcmVzWzJdID0gX2RpclsyXSA+IDAgPyB0aGlzLm1heFsyXSA6IHRoaXMubWluWzJdO1xyXG5cclxuICAgIGNvbnN0IHN1cCA9IG0zLnRyYW5zZm9ybVBvaW50KHRoaXMuUm1hdHJpeCwgcmVzKTtcclxuXHJcbiAgICByZXR1cm4gc3VtKHN1cCwgdGhpcy5wb3MpO1xyXG4gIH1cclxuICBnZXRJbnZlcnNlSW5lcnRpYVRlbnNvcihtYXNzKSB7XHJcbiAgICBjb25zdCBpMSA9XHJcbiAgICAgIChtYXNzIC8gMTIpICogKHRoaXMubWF4WzFdICogdGhpcy5tYXhbMV0gKyB0aGlzLm1heFsyXSAqIHRoaXMubWF4WzJdKTtcclxuICAgIGNvbnN0IGkyID1cclxuICAgICAgKG1hc3MgLyAxMikgKiAodGhpcy5tYXhbMF0gKiB0aGlzLm1heFswXSArIHRoaXMubWF4WzJdICogdGhpcy5tYXhbMl0pO1xyXG4gICAgY29uc3QgaTMgPVxyXG4gICAgICAobWFzcyAvIDEyKSAqICh0aGlzLm1heFswXSAqIHRoaXMubWF4WzBdICsgdGhpcy5tYXhbMV0gKiB0aGlzLm1heFsxXSk7XHJcblxyXG4gICAgY29uc3QgbSA9IG0zLm11bHRpcGx5KFxyXG4gICAgICBtMy5tdWx0aXBseSh0aGlzLlJtYXRyaXgsIFsxIC8gaTEsIDAsIDAsIDAsIDEgLyBpMiwgMCwgMCwgMCwgMSAvIGkzXSksXHJcbiAgICAgIHRoaXMuUm1hdHJpeEludmVyc2VcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIG07XHJcbiAgfVxyXG4gIGdldE00KCkge1xyXG4gICAgY29uc3QgbSA9IG00Lm0zVG9tNCh0aGlzLlJtYXRyaXgpO1xyXG4gICAgbVsxMl0gPSB0aGlzLnBvc1swXTtcclxuICAgIG1bMTNdID0gdGhpcy5wb3NbMV07XHJcbiAgICBtWzE0XSA9IHRoaXMucG9zWzJdO1xyXG4gICAgbVsxNV0gPSAxO1xyXG4gICAgY29uc3Qgc2NhbGUgPSBkaWZmKHRoaXMubWF4LCB0aGlzLm1pbik7XHJcbiAgICByZXR1cm4gbTQuc2NhbGUobSwgLi4uc2NhbGUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q2xvc2VzdEZhY2VCeU5vcm1hbChub3JtYWwpIHtcclxuICAgIGNvbnN0IHsgcG9pbnRzLCBpbmRpY2VzLCBSbWF0cml4IH0gPSB0aGlzO1xyXG4gICAgY29uc3Qgbm9ybWFscyA9IHRoaXMubm9ybWFscy5tYXAoKG4pID0+IG0zLnRyYW5zZm9ybVBvaW50KHRoaXMuUm1hdHJpeCwgbikpO1xyXG4gICAgbGV0IG1pbkRvdCA9IGRvdChub3JtYWwsIG5vcm1hbHNbMF0pO1xyXG4gICAgbGV0IGluZGV4ID0gMDtcclxuICAgIGZvciAobGV0IGkgPSAxLCBuID0gbm9ybWFscy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgLy9jb25zdCBfbm9ybWFsID0gbTMudHJhbnNmb3JtUG9pbnQoUm1hdHJpeCwgbm9ybWFsc1tpXSlcclxuICAgICAgY29uc3QgX2RvdCA9IGRvdChub3JtYWxzW2ldLCBub3JtYWwpO1xyXG4gICAgICBpZiAoX2RvdCA8IG1pbkRvdCkge1xyXG4gICAgICAgIG1pbkRvdCA9IF9kb3Q7XHJcbiAgICAgICAgaW5kZXggPSBpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBmYWNlSW5kaWNlcyA9IGluZGljZXNbaW5kZXhdO1xyXG4gICAgY29uc3QgbSA9IHRoaXMuZ2V0TTQoKTtcclxuICAgIHJldHVybiBbXHJcbiAgICAgIGZhY2VJbmRpY2VzLm1hcCgoaSkgPT4gbTQudHJhbnNmb3JtUG9pbnQobSwgcG9pbnRzW2ldKSksXHJcbiAgICAgIG5vcm1hbHNbaW5kZXhdLFxyXG4gICAgXTtcclxuICB9XHJcbn1cclxuY2xhc3MgU3BoZXJlIGV4dGVuZHMgQ29sbGlkZXIge1xyXG4gIGNvbnN0cnVjdG9yKHJhZGl1cyA9IDEpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLnJhZGl1cyA9IHJhZGl1cztcclxuICAgIHRoaXMudHlwZSA9IFwic3BoZXJlXCI7XHJcbiAgfVxyXG4gIGdldEFBQkIoKSB7XHJcbiAgICBjb25zdCB7IHJhZGl1cyB9ID0gdGhpcztcclxuICAgIHJldHVybiBuZXcgQUFCQihcclxuICAgICAgc3VtKHRoaXMucG9zLCBbLXJhZGl1cywgLXJhZGl1cywgLXJhZGl1c10pLFxyXG4gICAgICBzdW0odGhpcy5wb3MsIFtyYWRpdXMsIHJhZGl1cywgcmFkaXVzXSlcclxuICAgICk7XHJcbiAgfVxyXG4gIHN1cHBvcnQoZGlyKSB7XHJcbiAgICByZXR1cm4gc3VtKHNjYWxlKG5vcm1hbGl6ZShkaXIpLCB0aGlzLnJhZGl1cyksIHRoaXMucG9zKTtcclxuICB9XHJcbiAgZ2V0TTQoKSB7XHJcbiAgICBjb25zdCBtID0gbTQubTNUb200KHRoaXMuUm1hdHJpeCk7XHJcbiAgICBtWzEyXSA9IHRoaXMucG9zWzBdO1xyXG4gICAgbVsxM10gPSB0aGlzLnBvc1sxXTtcclxuICAgIG1bMTRdID0gdGhpcy5wb3NbMl07XHJcbiAgICBtWzE1XSA9IDE7XHJcbiAgICBjb25zdCB7IHJhZGl1cyB9ID0gdGhpcztcclxuICAgIHJldHVybiBtNC5zY2FsZShtLCByYWRpdXMsIHJhZGl1cywgcmFkaXVzKTtcclxuICB9XHJcbiAgZ2V0Q2xvc2VzdEZhY2VCeU5vcm1hbChub3JtYWwpIHtcclxuICAgIGNvbnN0IHJldmVyc2UgPSBzY2FsZShub3JtYWwsIC0xKTtcclxuICAgIHJldHVybiBbW3NjYWxlKHJldmVyc2UsIHRoaXMucmFkaXVzKV0sIHJldmVyc2VdO1xyXG4gIH1cclxuICBnZXRJbnZlcnNlSW5lcnRpYVRlbnNvcihtYXNzKSB7XHJcbiAgICBjb25zdCB7IHJhZGl1cyB9ID0gdGhpcztcclxuICAgIGNvbnN0IG0gPSBbXHJcbiAgICAgICgyICogbWFzcyAqIHJhZGl1cyAqIHJhZGl1cykgLyA1LFxyXG4gICAgICAwLFxyXG4gICAgICAwLFxyXG4gICAgICAwLFxyXG4gICAgICAoMiAqIG1hc3MgKiByYWRpdXMgKiByYWRpdXMpIC8gNSxcclxuICAgICAgMCxcclxuICAgICAgMCxcclxuICAgICAgMCxcclxuICAgICAgKDIgKiBtYXNzICogcmFkaXVzICogcmFkaXVzKSAvIDUsXHJcbiAgICBdO1xyXG4gICAgcmV0dXJuIG07XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBudW1TZWdtZW50cyA9IDY7XHJcbmNvbnN0IHNlZ21lbnRBbmdsZSA9ICgyICogTWF0aC5QSSkgLyBudW1TZWdtZW50cztcclxuY29uc3QgY2lyY2xlUG9pbnRzID0gWy4uLm5ldyBBcnJheShudW1TZWdtZW50cyldLm1hcCgoXywgaSkgPT4gW1xyXG4gIE1hdGguY29zKGkgKiBzZWdtZW50QW5nbGUpLFxyXG4gIDAsXHJcbiAgTWF0aC5zaW4oaSAqIHNlZ21lbnRBbmdsZSksXHJcbl0pO1xyXG5cclxuY2xhc3MgQ3lsaW5kZXIgZXh0ZW5kcyBDb2xsaWRlciB7XHJcbiAgY29uc3RydWN0b3IoIHJhZGl1cywgaGVpZ2h0KSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5yYWRpdXMgPSByYWRpdXM7XHJcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcclxuICB9XHJcbiAgc3VwcG9ydChkaXIpIHtcclxuICAgIGNvbnN0IF9kaXIgPSBtMy50cmFuc2Zvcm1Qb2ludCh0aGlzLlJtYXRyaXhJbnZlcnNlLCBkaXIpOyAvL2ZpbmQgc3VwcG9ydCBpbiBtb2RlbCBzcGFjZVxyXG5cclxuICAgIGNvbnN0IGRpcl94eiA9IFtfZGlyWzBdLCAwLCBfZGlyWzJdXTtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHNjYWxlKG5vcm1hbGl6ZShkaXJfeHopLCB0aGlzLnJhZGl1cyk7XHJcbiAgICByZXN1bHRbMV0gPSBfZGlyWzFdID4gMCA/IHRoaXMuaGVpZ2h0IC8gMiA6IC10aGlzLmhlaWdodCAvIDI7XHJcblxyXG4gICAgcmV0dXJuIHN1bShtMy50cmFuc2Zvcm1Qb2ludCh0aGlzLlJtYXRyaXgsIHJlc3VsdCksIHRoaXMucG9zKTsgLy9jb252ZXJ0IHN1cHBvcnQgdG8gd29ybGQgc3BhY2VcclxuICB9XHJcbiAgZ2V0TTQoKSB7XHJcbiAgICBjb25zdCBtID0gbTQubTNUb200KHRoaXMuUm1hdHJpeCk7XHJcbiAgICBtWzEyXSA9IHRoaXMucG9zWzBdO1xyXG4gICAgbVsxM10gPSB0aGlzLnBvc1sxXTtcclxuICAgIG1bMTRdID0gdGhpcy5wb3NbMl07XHJcbiAgICBtWzE1XSA9IDE7XHJcbiAgICBjb25zdCB7IHJhZGl1cywgaGVpZ2h0IH0gPSB0aGlzO1xyXG4gICAgcmV0dXJuIG00LnNjYWxlKG0sIHJhZGl1cywgaGVpZ2h0LCByYWRpdXMpO1xyXG4gIH1cclxuICBnZXRDbG9zZXN0RmFjZUJ5Tm9ybWFsKG5vcm1hbCkge1xyXG4gICAgY29uc3QgeyByYWRpdXMsIGhlaWdodCwgUm1hdHJpeCwgUm1hdHJpeEludmVyc2UgfSA9IHRoaXM7XHJcbiAgICBjb25zdCBfbm9ybWFsID0gbTMudHJhbnNmb3JtUG9pbnQoUm1hdHJpeEludmVyc2UsIHNjYWxlKG5vcm1hbCwgLTEpKTtcclxuICAgIGNvbnN0IG0gPSB0aGlzLmdldE00KClcclxuICAgIGNvbnN0IGNvcyA9IGRvdChfbm9ybWFsLCBbMCwgMSwgMF0pO1xyXG4gICAgY29uc3Qgc2lnbiA9IE1hdGguc2lnbihjb3MpO1xyXG4gICAgXHJcbiAgICBpZiAoY29zICogc2lnbiA8IDAuNzA3KSB7XHJcbiAgICAgIGNvbnN0IGxvY2FsTm9ybWFsID0gbm9ybWFsaXplKFtfbm9ybWFsWzBdLCAwLCBfbm9ybWFsWzJdXSk7XHJcbiAgICAgIGNvbnN0IGZhY2UgPSBbXHJcbiAgICAgICAgbTQudHJhbnNmb3JtUG9pbnQobSwgW19ub3JtYWxbMF0gLCAwLjUsIF9ub3JtYWxbMl0gXSksXHJcbiAgICAgICAgbTQudHJhbnNmb3JtUG9pbnQobSwgW19ub3JtYWxbMF0sIC0wLjUsIF9ub3JtYWxbMl0gXSlcclxuICAgICAgXTtcclxuXHJcbiAgICAgIHJldHVybiBbZmFjZSwgbTMudHJhbnNmb3JtUG9pbnQoUm1hdHJpeCwgbG9jYWxOb3JtYWwpXVxyXG4gICAgfVxyXG4gICAgY29uc3QgbG9jYWxOb3JtYWwgPSBzY2FsZShbMCwgMSwgMF0sIHNpZ24pO1xyXG4gICAgY29uc3QgZmFjZSA9IGNpcmNsZVBvaW50cy5tYXAocCA9PiBtNC50cmFuc2Zvcm1Qb2ludChtLCBbcFswXSwgc2lnbiAqIDAuNSAgLCBwWzJdIF0pKVxyXG4gICBcclxuICAgIHJldHVybiBbZmFjZSwgbTMudHJhbnNmb3JtUG9pbnQoUm1hdHJpeCwgbG9jYWxOb3JtYWwpXVxyXG4gIH1cclxuICBnZXRJbnZlcnNlSW5lcnRpYVRlbnNvcihtYXNzKSB7XHJcbiAgICBjb25zdCB7IHJhZGl1cywgaGVpZ2h0IH0gPSB0aGlzO1xyXG4gICAgY29uc3QgaTEgPVxyXG4gICAgICBtYXNzIC8gMTIgKiAoMypyYWRpdXMqcmFkaXVzICsgaGVpZ2h0KmhlaWdodClcclxuICAgXHJcbiAgICBjb25zdCBpMyA9XHJcbiAgICAgIG1hc3MvMiAqcmFkaXVzKnJhZGl1c1xyXG5cclxuICAgIGNvbnN0IG0gPSBtMy5tdWx0aXBseShcclxuICAgICAgbTMubXVsdGlwbHkodGhpcy5SbWF0cml4LCBbMS9pMSwgMCwgMCwgMCwgMS9pMSwgMCwgMCwgMCwgMS9pM10pLFxyXG4gICAgICB0aGlzLlJtYXRyaXhJbnZlcnNlXHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiBtO1xyXG4gIH1cclxuICBnZXRBQUJCKCkge1xyXG4gICAgY29uc3QgeyByYWRpdXMsIGhlaWdodCB9ID0gdGhpcztcclxuICAgIHJldHVybiBuZXcgQUFCQihcclxuICAgICAgc3VtKHRoaXMucG9zLCBbLXJhZGl1cywgLWhlaWdodCwgLXJhZGl1c10pLFxyXG4gICAgICBzdW0odGhpcy5wb3MsIFtyYWRpdXMsIGhlaWdodCwgcmFkaXVzXSlcclxuICAgICk7XHJcbiAgfVxyXG59XHJcbmV4cG9ydCB7IEJveCwgU3BoZXJlLCBDeWxpbmRlcn07XHJcbiIsImltcG9ydCB7IHZlY3RvciwgbTMgfSBmcm9tIFwibWF0aFwiO1xyXG5cclxuY29uc3QgeyBkb3QsIGNyb3NzLCBub3JtYWxpemUsIGRpZmYsIHNjYWxlLCBub3JtLCBzdW0sIG5vcm1TcSB9ID0gdmVjdG9yO1xyXG5jb25zdCBjbGFtcCA9ICh2LCBtaW4sIG1heCkgPT4ge1xyXG4gIGlmICh2ID4gbWluKSB7XHJcbiAgICBpZiAodiA8IG1heCkgcmV0dXJuIHY7XHJcbiAgICBlbHNlIHJldHVybiBtYXg7XHJcbiAgfVxyXG4gIHJldHVybiBtaW47XHJcbn07XHJcbmNsYXNzIENvbnN0cmFpbnQge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgYm9keTEsXHJcbiAgICBib2R5MixcclxuICAgIG4sXHJcbiAgICByYSxcclxuICAgIHJiLFxyXG4gICAgcmFMb2NhbCxcclxuICAgIHJiTG9jYWwsXHJcbiAgICBiaWFzRmFjdG9yID0gMCxcclxuICAgIGxhbWJkYU1pbiA9IC1JbmZpbml0eSxcclxuICAgIGxhbWJkYU1heCA9IEluZmluaXR5LFxyXG4gICAgdHJlc2hvbGQgPSAwLjAwMDAwMVxyXG4gICkge1xyXG4gICAgdGhpcy5iaWFzRmFjdG9yID0gYmlhc0ZhY3RvcjtcclxuICAgIHRoaXMubiA9IG47XHJcbiAgICB0aGlzLkogPSBudWxsO1xyXG5cclxuICAgIHRoaXMuSk0gPSBudWxsO1xyXG4gICAgdGhpcy5CID0gbnVsbDtcclxuICAgIHRoaXMuYm9keTEgPSBib2R5MTtcclxuICAgIHRoaXMuYm9keTIgPSBib2R5MjtcclxuICAgIHRoaXMucmEgPSByYTtcclxuICAgIHRoaXMucmIgPSByYjtcclxuICAgIHRoaXMucmFMb2NhbCA9IHJhTG9jYWw7XHJcbiAgICB0aGlzLnJiTG9jYWwgPSByYkxvY2FsO1xyXG4gICAgdGhpcy50cmVzaG9sZCA9IHRyZXNob2xkO1xyXG4gICAgdGhpcy5sYW1iZGFBY2MgPSAwO1xyXG4gICAgdGhpcy5sYW1iZGFNaW4gPSBsYW1iZGFNaW47XHJcbiAgICB0aGlzLmxhbWJkYU1heCA9IGxhbWJkYU1heDtcclxuICB9XHJcbiAgdXBkYXRlTGVmdFBhcnQoZGVsdGFUaW1lKSB7XHJcbiAgICBjb25zdCB7IGJvZHkxLCBib2R5MiwgbiwgcmEsIHJiIH0gPSB0aGlzO1xyXG4gICAgY29uc3QgSiA9IFtzY2FsZShuLCAtMSksIGNyb3NzKG4sIHJhKSwgbiwgY3Jvc3MocmIsIG4pXTtcclxuICAgIGNvbnN0IGRvZjEgPSBib2R5MS5ET0Y7XHJcbiAgICBjb25zdCBkb2YyID0gYm9keTIuRE9GO1xyXG5cclxuICAgIEpbMF1bMF0gKj0gZG9mMVswXTtcclxuICAgIEpbMF1bMV0gKj0gZG9mMVsxXTtcclxuICAgIEpbMF1bMl0gKj0gZG9mMVsyXTtcclxuXHJcbiAgICBKWzFdWzBdICo9IGRvZjFbM107XHJcbiAgICBKWzFdWzFdICo9IGRvZjFbNF07XHJcbiAgICBKWzFdWzJdICo9IGRvZjFbNV07XHJcblxyXG4gICAgSlsyXVswXSAqPSBkb2YyWzBdO1xyXG4gICAgSlsyXVsxXSAqPSBkb2YyWzFdO1xyXG4gICAgSlsyXVsyXSAqPSBkb2YyWzJdO1xyXG5cclxuICAgIEpbM11bMF0gKj0gZG9mMlszXTtcclxuICAgIEpbM11bMV0gKj0gZG9mMls0XTtcclxuICAgIEpbM11bMl0gKj0gZG9mMls1XTtcclxuXHJcbiAgICB0aGlzLkogPSBKO1xyXG5cclxuICAgIGNvbnN0IEkxID0gYm9keTEuaW52ZXJzZUluZXJ0aWE7XHJcbiAgICBjb25zdCBJMiA9IGJvZHkyLmludmVyc2VJbmVydGlhO1xyXG4gICAgbGV0IE0xID0gYm9keTEuaW52ZXJzZU1hc3M7XHJcbiAgICBsZXQgTTIgPSBib2R5Mi5pbnZlcnNlTWFzcztcclxuICAgIHRoaXMuSk0gPSBbXHJcbiAgICAgIHNjYWxlKHRoaXMuSlswXSwgTTEpLFxyXG4gICAgICBtMy50cmFuc2Zvcm1Qb2ludChJMSwgdGhpcy5KWzFdKSxcclxuICAgICAgc2NhbGUodGhpcy5KWzJdLCBNMiksXHJcbiAgICAgIG0zLnRyYW5zZm9ybVBvaW50KEkyLCB0aGlzLkpbM10pLFxyXG4gICAgXTtcclxuXHJcbiAgICBcclxuICAgIC8vSk1KKiA9IEpCO0IgPSBNSipcclxuICAgIHRoaXMuX0ogPSBbWy4uLnRoaXMuSlswXSwgLi4udGhpcy5KWzFdXSwgWy4uLnRoaXMuSlsyXSwgLi4udGhpcy5KWzNdXV1cclxuICAgIHRoaXMuQiA9IFtcclxuICAgICAgWy4uLnRoaXMuSk1bMF0sIC4uLnRoaXMuSk1bMV1dLFxyXG4gICAgICBbLi4udGhpcy5KTVsyXSwgLi4udGhpcy5KTVszXV0sXHJcbiAgICBdO1xyXG4gICAgdGhpcy5lZmZNYXNzID1cclxuICAgICAgZG90KEpbMF0sIHRoaXMuSk1bMF0pICsgZG90KHRoaXMuSk1bMV0sIHRoaXMuSlsxXSkgK2RvdChKWzJdLCB0aGlzLkpNWzJdKSArIGRvdCh0aGlzLkpNWzNdLCB0aGlzLkpbM10pO1xyXG4gIH1cclxufVxyXG5cclxuY2xhc3MgQ29udGFjdENvbnN0cmFpbnQgZXh0ZW5kcyBDb25zdHJhaW50IHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIGJvZHkxLFxyXG4gICAgYm9keTIsXHJcbiAgICBuLFxyXG4gICAgcmEsXHJcbiAgICByYixcclxuICAgIHJhTG9jYWwsXHJcbiAgICByYkxvY2FsLFxyXG4gICAgYmlhc0ZhY3RvcixcclxuICAgIHRyZXNob2xkLFxyXG4gICAgcGVuRGVwdGhcclxuICApIHtcclxuICAgIHN1cGVyKFxyXG4gICAgICBib2R5MSxcclxuICAgICAgYm9keTIsXHJcbiAgICAgIG4sXHJcbiAgICAgIHJhLFxyXG4gICAgICByYixcclxuICAgICAgcmFMb2NhbCxcclxuICAgICAgcmJMb2NhbCxcclxuICAgICAgYmlhc0ZhY3RvcixcclxuICAgICAgbnVsbCxcclxuICAgICAgbnVsbCxcclxuICAgICAgdHJlc2hvbGRcclxuICAgICk7XHJcblxyXG4gICAgdGhpcy5wZW5EZXB0aCA9IHBlbkRlcHRoO1xyXG4gIH1cclxuICB1cGRhdGVMZWZ0UGFydChkZWx0YVRpbWUpIHtcclxuICAgIHN1cGVyLnVwZGF0ZUxlZnRQYXJ0KGRlbHRhVGltZSk7XHJcbiAgICB0aGlzLmxhbWJkYU1heCA9IG5vcm0oXHJcbiAgICAgIHN1bShcclxuICAgICAgICBzY2FsZSh0aGlzLmJvZHkxLnZlbG9jaXR5LCB0aGlzLmJvZHkxLm1hc3MpLFxyXG4gICAgICAgIHNjYWxlKHRoaXMuYm9keTIudmVsb2NpdHksIHRoaXMuYm9keTIubWFzcylcclxuICAgICAgKVxyXG4gICAgKSAqIDEwO1xyXG4gICAgdGhpcy5sYW1iZGFNaW4gPSAwO1xyXG4gIH1cclxuICB1cGRhdGVSaWdodFBhcnQoZGVsdGFUaW1lKSB7XHJcbiAgICBjb25zdCB7IGJvZHkxLCBib2R5MiwgcmEsIHJiLCBuLCBwZW5EZXB0aCwgdHJlc2hvbGQsIGJpYXNGYWN0b3IgfSA9IHRoaXM7XHJcblxyXG4gICAgY29uc3QgcmVsYXRpdmVWZWxvY2l0eSA9IGRpZmYoXHJcbiAgICAgIHN1bShib2R5Mi52ZWxvY2l0eSwgY3Jvc3MoYm9keTIuYW5ndWxhclYsIHJiKSksXHJcbiAgICAgIHN1bShib2R5MS52ZWxvY2l0eSwgY3Jvc3MoYm9keTEuYW5ndWxhclYsIHJhKSlcclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgcmVsYXRpdmVWZWxvY2l0eU5vcm1hbFByb2plY3Rpb24gPSBkb3QocmVsYXRpdmVWZWxvY2l0eSwgbik7XHJcbiAgICB0aGlzLmJpYXMgPVxyXG4gICAgICAoTWF0aC5tYXgoMCwgcGVuRGVwdGggLSB0cmVzaG9sZCkgLyBkZWx0YVRpbWUpICogYmlhc0ZhY3RvciAtXHJcbiAgICAgIHJlbGF0aXZlVmVsb2NpdHlOb3JtYWxQcm9qZWN0aW9uO1xyXG4gIH1cclxuICBhcHBseVJlc29sdmluZ0ltcHVsc2UobGFtYmRhKSB7XHJcbiAgICB0aGlzLmJvZHkxLmFwcGx5SW1wdWxzZShzY2FsZSh0aGlzLkpbMF0sIGxhbWJkYSksIHRoaXMucmEpO1xyXG4gICAgdGhpcy5ib2R5Mi5hcHBseUltcHVsc2Uoc2NhbGUodGhpcy5KWzJdLCBsYW1iZGEpLCB0aGlzLnJiKTtcclxuICB9XHJcbiAgYXBwbHlSZXNvbHZpbmdQc2V1ZG9JbXB1bHNlKGxhbWJkYSkge1xyXG4gICAgaWYgKGxhbWJkYSA8IDApIHJldHVybjtcclxuICAgIGNvbnN0IG1heCA9IHRoaXMuZWZmTWFzcyAqIDEwO1xyXG4gICAgLy8gbGFtYmRhID0gTWF0aC5tYXgoTWF0aC5taW4oMTAwLCBsYW1iZGEpLSAwLjEsMClcclxuICAgIHRoaXMuYm9keTEuYXBwbHlQc2V1ZG9JbXB1bHNlKHNjYWxlKHRoaXMuSlswXSwgbGFtYmRhKSwgdGhpcy5yYSk7XHJcbiAgICB0aGlzLmJvZHkyLmFwcGx5UHNldWRvSW1wdWxzZShzY2FsZSh0aGlzLkpbMl0sIGxhbWJkYSksIHRoaXMucmIpO1xyXG4gIH1cclxufVxyXG5cclxuY2xhc3MgRnJpY3Rpb25Db25zdHJhaW50IGV4dGVuZHMgQ29uc3RyYWludCB7XHJcbiAgdXBkYXRlUmlnaHRQYXJ0KGRlbHRhVGltZSkge1xyXG4gICAgY29uc3QgeyBib2R5MSwgYm9keTIsIHJhLCByYiwgbiB9ID0gdGhpcztcclxuICAgIGNvbnN0IHJlbGF0aXZlVmVsb2NpdHkgPSBkaWZmKFxyXG4gICAgICBzdW0oYm9keTIudmVsb2NpdHksIGNyb3NzKGJvZHkyLmFuZ3VsYXJWLCByYikpLFxyXG4gICAgICBzdW0oYm9keTEudmVsb2NpdHksIGNyb3NzKGJvZHkxLmFuZ3VsYXJWLCByYSkpXHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IHJlbGF0aXZlVmVsb2NpdHlOb3JtYWxQcm9qZWN0aW9uID0gZG90KHJlbGF0aXZlVmVsb2NpdHksIG4pO1xyXG4gICAgdGhpcy5iaWFzID0gLXJlbGF0aXZlVmVsb2NpdHlOb3JtYWxQcm9qZWN0aW9uO1xyXG4gIH1cclxuICBhcHBseVJlc29sdmluZ0ltcHVsc2UobGFtYmRhKSB7XHJcbiAgICB0aGlzLmJvZHkxLmFwcGx5SW1wdWxzZShzY2FsZSh0aGlzLkpbMF0sIGxhbWJkYSksIHRoaXMucmEpO1xyXG4gICAgdGhpcy5ib2R5Mi5hcHBseUltcHVsc2Uoc2NhbGUodGhpcy5KWzJdLCBsYW1iZGEpLCB0aGlzLnJiKTtcclxuICB9XHJcbn1cclxuXHJcbmNsYXNzIFBvc2l0aW9uQ29uc3RyYWludCBleHRlbmRzIENvbnN0cmFpbnQge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgYm9keTEsXHJcbiAgICBib2R5MixcclxuICAgIG4sXHJcbiAgICByYSxcclxuICAgIHJiLFxyXG4gICAgcmFMb2NhbCxcclxuICAgIHJiTG9jYWwsXHJcbiAgICBiaWFzRmFjdG9yLFxyXG4gICAgdHJlc2hvbGQsXHJcbiAgICBwZW5EZXB0aFxyXG4gICkge1xyXG4gICAgc3VwZXIoXHJcbiAgICAgIGJvZHkxLFxyXG4gICAgICBib2R5MixcclxuICAgICAgbixcclxuICAgICAgcmEsXHJcbiAgICAgIHJiLFxyXG4gICAgICByYUxvY2FsLFxyXG4gICAgICByYkxvY2FsLFxyXG4gICAgICBiaWFzRmFjdG9yLFxyXG4gICAgICBudWxsLFxyXG4gICAgICBudWxsLFxyXG4gICAgICB0cmVzaG9sZFxyXG4gICAgKTtcclxuICAgIHRoaXMucGVuRGVwdGggPSBwZW5EZXB0aDtcclxuICB9XHJcbiAgYXBwbHlSZXNvbHZpbmdJbXB1bHNlKGxhbWJkYSkge1xyXG4gICAgdGhpcy5ib2R5MS5hcHBseVBzZXVkb0ltcHVsc2Uoc2NhbGUodGhpcy5KWzBdLCBsYW1iZGEpLCB0aGlzLnJhKTtcclxuICAgIHRoaXMuYm9keTIuYXBwbHlQc2V1ZG9JbXB1bHNlKHNjYWxlKHRoaXMuSlsyXSwgbGFtYmRhKSwgdGhpcy5yYik7XHJcbiAgfVxyXG4gIHVwZGF0ZVJpZ2h0UGFydChkZWx0YVRpbWUpIHtcclxuICAgIGNvbnN0IHsgYm9keTEsIGJvZHkyLCByYSwgcmIsIG4sIHBlbkRlcHRoLCB0cmVzaG9sZCwgYmlhc0ZhY3RvciB9ID0gdGhpcztcclxuXHJcbiAgICB0aGlzLmJpYXMgPSAoTWF0aC5tYXgoMCwgcGVuRGVwdGggLSB0cmVzaG9sZCkgLyBkZWx0YVRpbWUpICogYmlhc0ZhY3RvcjtcclxuICB9XHJcbn1cclxuXHJcbmNsYXNzIEpvaW50IGV4dGVuZHMgQ29uc3RyYWludCB7XHJcbiAgY29uc3RydWN0b3IoYm9keTEsIGJvZHkyLCByYUxvY2FsLCByYkxvY2FsLCBiaWFzRmFjdG9yID0gMCkge1xyXG4gICAgc3VwZXIoYm9keTEsIGJvZHkyLCBudWxsLCBudWxsLCBudWxsLCByYUxvY2FsLCByYkxvY2FsLCBiaWFzRmFjdG9yKTtcclxuICAgIFxyXG4gICAgXHJcbiAgICB0aGlzLnRyZXNob2xkID0gMC4wMDAxO1xyXG4gICAgdGhpcy5yZWR1Y2VyID0gMC41O1xyXG4gICAgdGhpcy5tYXhJbXB1bHNlID0gMC43O1xyXG5cclxuICB9XHJcbiAgdXBkYXRlTGVmdFBhcnQoZGVsdGFUaW1lKSB7XHJcbiAgICBjb25zdCB7Ym9keTEsIGJvZHkyLCByYUxvY2FsLCByYkxvY2FsfSA9IHRoaXNcclxuICAgIHRoaXMuUEEgPSBib2R5MS5jb2xsaWRlci5sb2NhbFRvR2xvYmFsKHJhTG9jYWwpO1xyXG4gICAgdGhpcy5QQiA9IGJvZHkyLmNvbGxpZGVyLmxvY2FsVG9HbG9iYWwocmJMb2NhbCk7XHJcbiAgICBjb25zdCBkaXIgPSBkaWZmKHRoaXMuUEEsIHRoaXMuUEIpO1xyXG4gICAgY29uc3QgbiA9IGRpclxyXG4gICAgdGhpcy5uID0gblxyXG4gICAgdGhpcy5yYSA9IGRpZmYodGhpcy5QQSwgdGhpcy5ib2R5MS5jb2xsaWRlci5wb3MpO1xyXG4gICAgdGhpcy5yYiA9IGRpZmYodGhpcy5QQiwgdGhpcy5ib2R5Mi5jb2xsaWRlci5wb3MpO1xyXG4gICAgdGhpcy5wZW5EZXB0aCA9IG5vcm0oZGlyKTtcclxuXHJcbiAgICBjb25zdCBKID0gW3NjYWxlKHRoaXMubiwgLTEpLCBjcm9zcyh0aGlzLm4sIHRoaXMucmEpLCB0aGlzLm4sIGNyb3NzKHRoaXMucmIsIHRoaXMubildO1xyXG5cclxuICAgIGNvbnN0IGRvZjEgPSBib2R5MS5ET0Y7XHJcbiAgICBjb25zdCBkb2YyID0gYm9keTIuRE9GO1xyXG5cclxuICAgIEpbMF1bMF0gKj0gZG9mMVswXTtcclxuICAgIEpbMF1bMV0gKj0gZG9mMVsxXTtcclxuICAgIEpbMF1bMl0gKj0gZG9mMVsyXTtcclxuXHJcbiAgICBKWzFdWzBdICo9IGRvZjFbM107XHJcbiAgICBKWzFdWzFdICo9IGRvZjFbNF07XHJcbiAgICBKWzFdWzJdICo9IGRvZjFbNV07XHJcblxyXG4gICAgSlsyXVswXSAqPSBkb2YyWzBdO1xyXG4gICAgSlsyXVsxXSAqPSBkb2YyWzFdO1xyXG4gICAgSlsyXVsyXSAqPSBkb2YyWzJdO1xyXG5cclxuICAgIEpbM11bMF0gKj0gZG9mMlszXTtcclxuICAgIEpbM11bMV0gKj0gZG9mMls0XTtcclxuICAgIEpbM11bMl0gKj0gZG9mMls1XTtcclxuICAgIGNvbnN0IEkxID0gYm9keTEuaW52ZXJzZUluZXJ0aWE7XHJcbiAgICBjb25zdCBJMiA9IGJvZHkyLmludmVyc2VJbmVydGlhO1xyXG4gICAgbGV0IE0xID0gYm9keTEuaW52ZXJzZU1hc3M7XHJcbiAgICBsZXQgTTIgPSBib2R5Mi5pbnZlcnNlTWFzcztcclxuICAgIHRoaXMuSiA9IEpcclxuICAgIHRoaXMuSk0gPSBbXHJcbiAgICAgIHNjYWxlKHRoaXMuSlswXSwgTTEpLFxyXG4gICAgICBtMy50cmFuc2Zvcm1Qb2ludChJMSwgdGhpcy5KWzFdKSxcclxuICAgICAgc2NhbGUodGhpcy5KWzJdLCBNMiksXHJcbiAgICAgIG0zLnRyYW5zZm9ybVBvaW50KEkyLCB0aGlzLkpbM10pLFxyXG4gICAgXTtcclxuICAgIHRoaXMuZWZmTWFzcyA9XHJcbiAgICAgIGRvdCh0aGlzLkpNWzBdLCBKWzBdKSArIGRvdCh0aGlzLkpNWzFdLCB0aGlzLkpbMV0pICsgZG90KHRoaXMuSk1bMl0sIEpbMl0pICsgZG90KHRoaXMuSk1bM10sIHRoaXMuSlszXSk7XHJcbiAgICB0aGlzLkIgPSBbXHJcbiAgICAgIFsuLi50aGlzLkpNWzBdLCAuLi50aGlzLkpNWzFdXSxcclxuICAgICAgWy4uLnRoaXMuSk1bMl0sIC4uLnRoaXMuSk1bM11dLFxyXG4gICAgXTtcclxuICAgIHRoaXMuX0ogPSBbWy4uLnRoaXMuSlswXSwgLi4udGhpcy5KWzFdXSwgWy4uLnRoaXMuSlsyXSwgLi4udGhpcy5KWzNdXV1cclxuICAgIFxyXG4gIH1cclxuIFxyXG4gIHVwZGF0ZVJpZ2h0UGFydChkZWx0YVRpbWUpIHtcclxuICAgIGNvbnN0IHsgYm9keTEsIGJvZHkyLCByYSwgcmIsIG4sIHBlbkRlcHRoLCB0cmVzaG9sZCwgYmlhc0ZhY3RvciB9ID0gdGhpcztcclxuXHJcbiAgICBjb25zdCByZWxhdGl2ZVZlbG9jaXR5ID0gZGlmZihcclxuICAgICAgc3VtKGJvZHkyLnZlbG9jaXR5LCBjcm9zcyhib2R5Mi5hbmd1bGFyViwgcmIpKSxcclxuICAgICAgc3VtKGJvZHkxLnZlbG9jaXR5LCBjcm9zcyhib2R5MS5hbmd1bGFyViwgcmEpKVxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCByZWxhdGl2ZVZlbG9jaXR5Tm9ybWFsUHJvamVjdGlvbiA9IGRvdChyZWxhdGl2ZVZlbG9jaXR5LCBuKTtcclxuICAgIGNvbnN0IGZhYyA9IHBlbkRlcHRoKioyID4gdHJlc2hvbGRcclxuICAgIHRoaXMuYmlhcyA9IChiaWFzRmFjdG9yICAqIE1hdGgubWF4KHBlbkRlcHRoKioyIC0gdHJlc2hvbGQsIDApL2RlbHRhVGltZSkgLSByZWxhdGl2ZVZlbG9jaXR5Tm9ybWFsUHJvamVjdGlvbjtcclxuICAgIHRoaXMuYmlhcyAqPSBmYWNcclxuICAgXHJcbiAgfVxyXG4gIGFwcGx5UmVzb2x2aW5nSW1wdWxzZShsYW1iZGEpIHtcclxuICAgXHJcbiAgIFxyXG4gICAgdGhpcy5ib2R5MS5hcHBseUltcHVsc2Uoc2NhbGUodGhpcy5KWzBdLCBsYW1iZGEpLCB0aGlzLnJhKTtcclxuICAgIHRoaXMuYm9keTIuYXBwbHlJbXB1bHNlKHNjYWxlKHRoaXMuSlsyXSwgbGFtYmRhKSwgdGhpcy5yYik7XHJcbiAgfVxyXG4gIGFwcGx5UmVzb2x2aW5nUHNldWRvSW1wdWxzZShsYW1iZGEpIHtcclxuICAgIGNvbnN0IG1heCA9IHRoaXMuZWZmTWFzcyAqIDEwO1xyXG4gICAgLy9sYW1iZGEgPSBjbGFtcChsYW1iZGEsIC0xLCAxKVxyXG4gICAgdGhpcy5ib2R5MS5hcHBseVBzZXVkb0ltcHVsc2Uoc2NhbGUodGhpcy5uLCAtbGFtYmRhKSwgWzAsIDAsIDBdKTtcclxuICAgIHRoaXMuYm9keTIuYXBwbHlQc2V1ZG9JbXB1bHNlKHNjYWxlKHRoaXMubiwgbGFtYmRhKSwgWzAsIDAsIDBdKTtcclxuICB9XHJcbn1cclxuY2xhc3MgSm9pbnRQb3NpdGlvbkNvbnN0cmFpbnQgZXh0ZW5kcyBKb2ludHtcclxuICB1cGRhdGVSaWdodFBhcnQoZGVsdGFUaW1lKXtcclxuICAgIGNvbnN0IHsgcGVuRGVwdGgsIHRyZXNob2xkLCBiaWFzRmFjdG9yIH0gPSB0aGlzO1xyXG4gICAgXHJcbiAgICBjb25zdCBmYWMgPSBwZW5EZXB0aCoqMiA+IHRyZXNob2xkXHJcbiAgICB0aGlzLmJpYXMgPSAoYmlhc0ZhY3RvciAgKiBNYXRoLm1heChwZW5EZXB0aCoqMiAtIHRyZXNob2xkLCAwKS9kZWx0YVRpbWUpKmZhY1xyXG4gIH1cclxuICBhcHBseVJlc29sdmluZ0ltcHVsc2UobGFtYmRhKXtcclxuICAgIC8vaWYobGFtYmRhIDwgMC4xKXJldHVyblxyXG4gICAgdGhpcy5ib2R5MS5hcHBseVBzZXVkb0ltcHVsc2Uoc2NhbGUodGhpcy5KWzBdLCBsYW1iZGEpLCB0aGlzLnJhKTtcclxuICAgIHRoaXMuYm9keTIuYXBwbHlQc2V1ZG9JbXB1bHNlKHNjYWxlKHRoaXMuSlsyXSwgbGFtYmRhKSwgdGhpcy5yYik7XHJcbiAgfVxyXG59XHJcbmV4cG9ydCB7XHJcbiAgQ29udGFjdENvbnN0cmFpbnQsXHJcbiAgQ29uc3RyYWludCxcclxuICBKb2ludCxcclxuICBGcmljdGlvbkNvbnN0cmFpbnQsXHJcbiAgUG9zaXRpb25Db25zdHJhaW50LFxyXG4gIEpvaW50UG9zaXRpb25Db25zdHJhaW50XHJcbn07XHJcbiIsImNsYXNzIEV2ZW50RW1pdHRlciB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmV2ZW50cyA9IHt9O1xyXG4gIH1cclxuICBvbihldmVudE5hbWUsIGZuKSB7XHJcbiAgICBpZiAoIXRoaXMuZXZlbnRzW2V2ZW50TmFtZV0pIHtcclxuICAgICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXSA9IFtdO1xyXG4gICAgfVxyXG4gICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXS5wdXNoKGZuKTtcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gPSB0aGlzLmV2ZW50c1tldmVudE5hbWVdLmZpbHRlcihcclxuICAgICAgICAoZXZlbnRGbikgPT4gZm4gIT09IGV2ZW50Rm5cclxuICAgICAgKTtcclxuICAgIH07XHJcbiAgfVxyXG4gIGVtaXQoZXZlbnROYW1lLCBkYXRhKSB7XHJcbiAgICBpZiAodGhpcy5ldmVudHNbZXZlbnROYW1lXSkge1xyXG4gICAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdLmZvckVhY2goKGZuKSA9PiB7XHJcbiAgICAgICAgZm4uY2FsbChudWxsLCBkYXRhKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbmV4cG9ydCB7IEV2ZW50RW1pdHRlciB9O1xyXG4iLCJpbXBvcnQgeyB2ZWN0b3IsIG0zLCBtNCB9IGZyb20gXCJtYXRoXCI7XHJcbmltcG9ydCB7IGNsaXBGYWNlVnNGYWNlLCBpc0luQ2xvY2t3aXNlIH0gZnJvbSBcIi4vY2xpcHBpbmdcIjtcclxuXHJcbmNvbnN0IHsgZG90LCBjcm9zcywgbm9ybWFsaXplLCBzdW0sIGRpZmYsIGxlbiwgc2NhbGUsIGlzTnVsbCwgbm9ybSB9ID0gdmVjdG9yO1xyXG5jb25zdCBDTElQX0JJQVMgPSAwLjAwMDU7XHJcbmNvbnN0IEdKS19NQVhfSVRFUkFUSU9OU19OVU0gPSA2NDtcclxuY29uc3QgRVBBX0JJQVMgPSAwLjAwMDAxO1xyXG5cclxuY29uc3QgcmF5VnNQbGFuZUludGVyc2VjID0gKHBsYW5lLCBwb2ludCwgZGlyZWN0aW9uKSA9PiB7XHJcbiAgY29uc3QgW29yaWdpbiwgbm9ybWFsXSA9IHBsYW5lO1xyXG4gIGNvbnN0IF9kb3QgPSBkb3Qobm9ybWFsLCBkaXJlY3Rpb24pO1xyXG4gIGNvbnN0IGZyb21Qb2ludFRvT3JpZ2luID0gZGlmZihwb2ludCwgb3JpZ2luKTtcclxuICBjb25zdCBmYWMgPSBkb3QoZnJvbVBvaW50VG9PcmlnaW4sIG5vcm1hbCkgLyBfZG90O1xyXG4gIHJldHVybiBkaWZmKHBvaW50LCBzY2FsZShkaXJlY3Rpb24sIGZhYykpO1xyXG59O1xyXG5jb25zdCBpc1BvaW50QmVoaW5kUGxhbmUgPSAocGxhbmUsIHBvaW50LCBzaWduID0gMSkgPT4ge1xyXG4gIGNvbnN0IFtvcmlnaW4sIG5vcm1hbF0gPSBwbGFuZTtcclxuICByZXR1cm4gZG90KG5vcm1hbCwgZGlmZihwb2ludCwgb3JpZ2luKSkgKiBzaWduID4gMCAtIENMSVBfQklBUztcclxufTtcclxuY29uc3QgcG9pbnRPblBsYW5lUHJvamVjdGlvbiA9IChwbGFuZSwgcG9pbnQpID0+IHtcclxuICBjb25zdCBbb3JpZ2luLCBub3JtYWxdID0gcGxhbmU7XHJcbiAgY29uc3QgZnJvbVBvaW50VG9PcmlnaW4gPSBkaWZmKHBvaW50LCBvcmlnaW4pO1xyXG4gIGNvbnN0IHByb2pBbG9uZ05vcm1hbCA9IGRvdChub3JtYWwsIGZyb21Qb2ludFRvT3JpZ2luKTtcclxuXHJcbiAgcmV0dXJuIGRpZmYocG9pbnQsIHNjYWxlKG5vcm1hbCwgcHJvakFsb25nTm9ybWFsKSk7XHJcbn07XHJcbmNvbnN0IGNsaXBQb2ludHNCZWhpbmRQbGFuZSA9IChwbGFuZSwgcG9pbnRzLCBzaWduID0gMSkgPT4ge1xyXG4gIGNvbnN0IFtvcmlnaW4sIG5vcm1hbF0gPSBwbGFuZTtcclxuXHJcbiAgcmV0dXJuIHBvaW50cy5maWx0ZXIoXHJcbiAgICAocG9pbnQpID0+IGRvdChub3JtYWwsIGRpZmYocG9pbnQsIG9yaWdpbikpICogc2lnbiArIENMSVBfQklBUyA+IDBcclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0MkRjb29yZHNPblBsYW5lID0gKGksIGosIHBvaW50KSA9PiB7XHJcbiAgcmV0dXJuIFtkb3QoaSwgcG9pbnQpLCBkb3QoaiwgcG9pbnQpXTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZV9zaW1wbGV4MyhhLCBiLCBjLCBkLCBzZWFyY2hfZGlyLCBzaW1wX2RpbSkge1xyXG4gIGNvbnN0IG4gPSBjcm9zcyhkaWZmKHRoaXMuYiwgdGhpcy5hKSwgZGlmZih0aGlzLmMsIHRoaXMuYSkpO1xyXG4gIGNvbnN0IEFPID0gc2NhbGUodGhpcy5hLCAtMSk7XHJcblxyXG4gIHRoaXMuc2ltcF9kaW0gPSAyO1xyXG4gIGlmIChkb3QoY3Jvc3MoZGlmZih0aGlzLmIsIHRoaXMuYSksIG4pLCBBTykgPiAwKSB7XHJcbiAgICB0aGlzLmMgPSB0aGlzLmE7XHJcbiAgICB0aGlzLnNlYXJjaF9kaXIgPSBjcm9zcyhcclxuICAgICAgY3Jvc3MoZGlmZih0aGlzLmIsIHRoaXMuYSksIEFPKSxcclxuICAgICAgZGlmZih0aGlzLmIsIHRoaXMuYSlcclxuICAgICk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIGlmIChkb3QoY3Jvc3MobiwgZGlmZih0aGlzLmMsIHRoaXMuYSkpLCBBTykgPiAwKSB7XHJcbiAgICB0aGlzLmIgPSB0aGlzLmE7XHJcbiAgICB0aGlzLnNlYXJjaF9kaXIgPSBjcm9zcyhcclxuICAgICAgY3Jvc3MoZGlmZih0aGlzLmMsIHRoaXMuYSksIEFPKSxcclxuICAgICAgZGlmZih0aGlzLmMsIHRoaXMuYSlcclxuICAgICk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIHRoaXMuc2ltcF9kaW0gPSAzO1xyXG4gIGlmIChkb3QobiwgQU8pID4gMCkge1xyXG4gICAgdGhpcy5kID0gdGhpcy5jO1xyXG4gICAgdGhpcy5jID0gdGhpcy5iO1xyXG4gICAgdGhpcy5iID0gdGhpcy5hO1xyXG4gICAgdGhpcy5zZWFyY2hfZGlyID0gbjtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgdGhpcy5kID0gdGhpcy5iO1xyXG4gIHRoaXMuYiA9IHRoaXMuYTtcclxuICB0aGlzLnNlYXJjaF9kaXIgPSBzY2FsZShuLCAtMSk7XHJcbiAgcmV0dXJuO1xyXG59XHJcbmZ1bmN0aW9uIHVwZGF0ZV9zaW1wbGV4NChhLCBiLCBjLCBkLCBzZWFyY2hfZGlyLCBzaW1wX2RpbSkge1xyXG4gIGNvbnN0IEFCQyA9IGNyb3NzKGRpZmYodGhpcy5iLCB0aGlzLmEpLCBkaWZmKHRoaXMuYywgdGhpcy5hKSk7XHJcbiAgY29uc3QgQUNEID0gY3Jvc3MoZGlmZih0aGlzLmMsIHRoaXMuYSksIGRpZmYodGhpcy5kLCB0aGlzLmEpKTtcclxuICBjb25zdCBBREIgPSBjcm9zcyhkaWZmKHRoaXMuZCwgdGhpcy5hKSwgZGlmZih0aGlzLmIsIHRoaXMuYSkpO1xyXG4gIGNvbnN0IEFPID0gc2NhbGUodGhpcy5hLCAtMSk7XHJcbiAgdGhpcy5zaW1wX2RpbSA9IDM7XHJcblxyXG4gIGlmIChkb3QoQUJDLCBBTykgPiAwKSB7XHJcbiAgICB0aGlzLmQgPSB0aGlzLmM7XHJcbiAgICB0aGlzLmMgPSB0aGlzLmI7XHJcbiAgICB0aGlzLmIgPSB0aGlzLmE7XHJcbiAgICB0aGlzLnNlYXJjaF9kaXIgPSBBQkM7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBpZiAoZG90KEFDRCwgQU8pID4gMCkge1xyXG4gICAgdGhpcy5iID0gdGhpcy5hO1xyXG4gICAgdGhpcy5zZWFyY2hfZGlyID0gQUNEO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgaWYgKGRvdChBREIsIEFPKSA+IDApIHtcclxuICAgIHRoaXMuYyA9IHRoaXMuZDtcclxuICAgIHRoaXMuZCA9IHRoaXMuYjtcclxuICAgIHRoaXMuYiA9IHRoaXMuYTtcclxuICAgIHRoaXMuc2VhcmNoX2RpciA9IEFEQjtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgcmV0dXJuIHRydWU7XHJcbn1cclxuZnVuY3Rpb24gZ2prKGJvZHkxLCBib2R5Mikge1xyXG4gIGNvbnN0IGNvbGwxID0gYm9keTEuY29sbGlkZXI7XHJcbiAgY29uc3QgY29sbDIgPSBib2R5Mi5jb2xsaWRlcjtcclxuICB0aGlzLmEgPSBbMCwgMCwgMF07XHJcbiAgdGhpcy5iID0gWzAsIDAsIDBdO1xyXG4gIHRoaXMuYyA9IFswLCAwLCAwXTtcclxuICB0aGlzLmQgPSBbMCwgMCwgMF07XHJcbiAgdGhpcy5zZWFyY2hfZGlyID0gWzAsIDAsIDBdO1xyXG4gIHRoaXMuc2ltcF9kaW0gPSAwO1xyXG5cclxuICB0aGlzLm9yaWdpbnNNYXAgPSBuZXcgTWFwKCk7XHJcblxyXG4gIGxldCBtdHYgPSBbMCwgMCwgMF07XHJcblxyXG4gIHRoaXMuc2VhcmNoX2RpciA9IGRpZmYoY29sbDEucG9zLCBjb2xsMi5wb3MpO1xyXG4gIGNvbnN0IGNfb3JpZ2luMSA9IGNvbGwxLnN1cHBvcnQoc2NhbGUodGhpcy5zZWFyY2hfZGlyLCAtMSkpO1xyXG4gIGNvbnN0IGNfb3JpZ2luMiA9IGNvbGwyLnN1cHBvcnQodGhpcy5zZWFyY2hfZGlyKTtcclxuICB0aGlzLmMgPSBkaWZmKGNfb3JpZ2luMiwgY19vcmlnaW4xKTtcclxuXHJcbiAgdGhpcy5vcmlnaW5zTWFwLnNldCh0aGlzLmMsIFtjX29yaWdpbjEsIGNfb3JpZ2luMl0pO1xyXG5cclxuICB0aGlzLnNlYXJjaF9kaXIgPSBzY2FsZSh0aGlzLmMsIC0xKTtcclxuXHJcbiAgY29uc3QgYl9vcmlnaW4xID0gY29sbDEuc3VwcG9ydChzY2FsZSh0aGlzLnNlYXJjaF9kaXIsIC0xKSk7XHJcbiAgY29uc3QgYl9vcmlnaW4yID0gY29sbDIuc3VwcG9ydCh0aGlzLnNlYXJjaF9kaXIpO1xyXG4gIHRoaXMuYiA9IGRpZmYoYl9vcmlnaW4yLCBiX29yaWdpbjEpO1xyXG5cclxuICB0aGlzLm9yaWdpbnNNYXAuc2V0KHRoaXMuYiwgW2Jfb3JpZ2luMSwgYl9vcmlnaW4yXSk7XHJcblxyXG4gIGlmIChkb3QodGhpcy5iLCB0aGlzLnNlYXJjaF9kaXIpIDwgMCkge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICB0aGlzLnNlYXJjaF9kaXIgPSBjcm9zcyhcclxuICAgIGNyb3NzKGRpZmYodGhpcy5jLCB0aGlzLmIpLCBzY2FsZSh0aGlzLmIsIC0xKSksXHJcbiAgICBkaWZmKHRoaXMuYywgdGhpcy5iKVxyXG4gICk7XHJcblxyXG4gIGlmIChpc051bGwodGhpcy5zZWFyY2hfZGlyKSkge1xyXG4gICAgdGhpcy5zZWFyY2hfZGlyID0gY3Jvc3MoZGlmZih0aGlzLmMsIHRoaXMuYiksIFsxLCAwLCAwXSk7XHJcblxyXG4gICAgaWYgKGlzTnVsbCh0aGlzLnNlYXJjaF9kaXIpKSB7XHJcbiAgICAgIHRoaXMuc2VhcmNoX2RpciA9IGNyb3NzKGRpZmYodGhpcy5jLCB0aGlzLmIpLCBbMCwgMCwgLTFdKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRoaXMuc2ltcF9kaW0gPSAyO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgR0pLX01BWF9JVEVSQVRJT05TX05VTTsgKytpKSB7XHJcbiAgICBjb25zdCBhX29yaWdpbjEgPSBjb2xsMS5zdXBwb3J0KHNjYWxlKHRoaXMuc2VhcmNoX2RpciwgLTEpKTtcclxuICAgIGNvbnN0IGFfb3JpZ2luMiA9IGNvbGwyLnN1cHBvcnQodGhpcy5zZWFyY2hfZGlyKTtcclxuICAgIHRoaXMuYSA9IGRpZmYoYV9vcmlnaW4yLCBhX29yaWdpbjEpO1xyXG5cclxuICAgIHRoaXMub3JpZ2luc01hcC5zZXQodGhpcy5hLCBbYV9vcmlnaW4xLCBhX29yaWdpbjJdKTtcclxuICAgIGlmIChkb3QodGhpcy5hLCB0aGlzLnNlYXJjaF9kaXIpIDwgMCkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgdGhpcy5zaW1wX2RpbSsrO1xyXG4gICAgaWYgKHRoaXMuc2ltcF9kaW0gPT09IDMpIHtcclxuICAgICAgdXBkYXRlX3NpbXBsZXgzLmFwcGx5KHRoaXMpO1xyXG4gICAgfSBlbHNlIGlmICh1cGRhdGVfc2ltcGxleDQuYXBwbHkodGhpcykpIHtcclxuICAgICAgcmV0dXJuIEVQQSh0aGlzLmEsIHRoaXMuYiwgdGhpcy5jLCB0aGlzLmQsIHRoaXMub3JpZ2luc01hcCwgYm9keTEsIGJvZHkyKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIG51bGw7XHJcbn1cclxuXHJcbmNvbnN0IGJhcmljZW50cmljID0gKGZhY2UsIHBvaW50KSA9PiB7XHJcbiAgbGV0IGExMSA9IGZhY2VbMF1bMF07XHJcbiAgbGV0IGExMiA9IGZhY2VbMV1bMF07XHJcbiAgbGV0IGExMyA9IGZhY2VbMl1bMF07XHJcbiAgbGV0IGIxID0gcG9pbnRbMF07XHJcbiAgbGV0IGEyMSA9IGZhY2VbMF1bMV07XHJcbiAgbGV0IGEyMiA9IGZhY2VbMV1bMV07XHJcbiAgbGV0IGEyMyA9IGZhY2VbMl1bMV07XHJcbiAgbGV0IGIyID0gcG9pbnRbMV07XHJcbiAgbGV0IGEzMSA9IGZhY2VbMF1bMl07XHJcbiAgbGV0IGEzMiA9IGZhY2VbMV1bMl07XHJcbiAgbGV0IGEzMyA9IGZhY2VbMl1bMl07XHJcbiAgbGV0IGIzID0gcG9pbnRbMl07XHJcblxyXG4gIGNvbnN0IGQgPVxyXG4gICAgYTExICogYTIyICogYTMzICtcclxuICAgIGEyMSAqIGEzMiAqIGExMyArXHJcbiAgICBhMTIgKiBhMjMgKiBhMzEgLVxyXG4gICAgYTEzICogYTIyICogYTMxIC1cclxuICAgIGEyMSAqIGExMiAqIGEzMyAtXHJcbiAgICBhMzIgKiBhMjMgKiBhMTE7XHJcblxyXG4gIGNvbnN0IGQxID1cclxuICAgIGIxICogYTIyICogYTMzICtcclxuICAgIGIyICogYTMyICogYTEzICtcclxuICAgIGExMiAqIGEyMyAqIGIzIC1cclxuICAgIGExMyAqIGEyMiAqIGIzIC1cclxuICAgIGIyICogYTEyICogYTMzIC1cclxuICAgIGEzMiAqIGEyMyAqIGIxO1xyXG5cclxuICBjb25zdCBkMiA9XHJcbiAgICBhMTEgKiBiMiAqIGEzMyArXHJcbiAgICBhMjEgKiBiMyAqIGExMyArXHJcbiAgICBiMSAqIGEyMyAqIGEzMSAtXHJcbiAgICBhMTMgKiBiMiAqIGEzMSAtXHJcbiAgICBhMTEgKiBiMyAqIGEyMyAtXHJcbiAgICBhMjEgKiBiMSAqIGEzMztcclxuXHJcbiAgY29uc3QgZDMgPVxyXG4gICAgYTExICogYTIyICogYjMgK1xyXG4gICAgYTIxICogYTMyICogYjEgK1xyXG4gICAgYTEyICogYjIgKiBhMzEgLVxyXG4gICAgYjEgKiBhMjIgKiBhMzEgLVxyXG4gICAgYTIxICogYTEyICogYjMgLVxyXG4gICAgYjIgKiBhMzIgKiBhMTE7XHJcblxyXG4gIHJldHVybiBbZDEgLyBkLCBkMiAvIGQsIGQzIC8gZF07XHJcbn07XHJcbmNvbnN0IG9yaWdpblRvRmFjZVByb2ogPSAoZmFjZSkgPT4ge1xyXG4gIGNvbnN0IG5vcm1hbCA9IGZhY2VbM107XHJcbiAgY29uc3QgcG9pbnQgPSBmYWNlWzBdO1xyXG4gIGNvbnN0IGMgPSAtbm9ybWFsWzBdICogcG9pbnRbMF0gLSBub3JtYWxbMV0gKiBwb2ludFsxXSAtIG5vcm1hbFsyXSAqIHBvaW50WzJdO1xyXG4gIGNvbnN0IHQgPVxyXG4gICAgLWMgL1xyXG4gICAgKG5vcm1hbFswXSAqIG5vcm1hbFswXSArIG5vcm1hbFsxXSAqIG5vcm1hbFsxXSArIG5vcm1hbFsyXSAqIG5vcm1hbFsyXSk7XHJcbiAgcmV0dXJuIFt0ICogbm9ybWFsWzBdLCB0ICogbm9ybWFsWzFdLCB0ICogbm9ybWFsWzJdXTtcclxufTtcclxuXHJcbmNvbnN0IE1BWF9OVU1fRkFDRVMgPSA2NDtcclxuY29uc3QgTUFYX05VTV9MT09TRV9FREdFUyA9IDMyO1xyXG5jb25zdCBFUEFfTUFYX05VTV9JVEVSID0gNjQ7XHJcbmNvbnN0IEVQQSA9IChhLCBiLCBjLCBkLCBvcmlnaW5zTWFwLCBib2R5MSwgYm9keTIpID0+IHtcclxuICBjb25zdCBjb2xsMSA9IGJvZHkxLmNvbGxpZGVyO1xyXG4gIGNvbnN0IGNvbGwyID0gYm9keTIuY29sbGlkZXI7XHJcbiAgY29uc3QgZmFjZXMgPSBbXTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xyXG4gICAgZmFjZXNbaV0gPSBbXTtcclxuICB9XHJcblxyXG4gIGZhY2VzWzBdWzBdID0gYTtcclxuICBmYWNlc1swXVsxXSA9IGI7XHJcbiAgZmFjZXNbMF1bMl0gPSBjO1xyXG4gIGZhY2VzWzBdWzNdID0gbm9ybWFsaXplKGNyb3NzKGRpZmYoYiwgYSksIGRpZmYoYywgYSkpKTtcclxuICBmYWNlc1sxXVswXSA9IGE7XHJcbiAgZmFjZXNbMV1bMV0gPSBjO1xyXG4gIGZhY2VzWzFdWzJdID0gZDtcclxuICBmYWNlc1sxXVszXSA9IG5vcm1hbGl6ZShjcm9zcyhkaWZmKGMsIGEpLCBkaWZmKGQsIGEpKSk7XHJcbiAgZmFjZXNbMl1bMF0gPSBhO1xyXG4gIGZhY2VzWzJdWzFdID0gZDtcclxuICBmYWNlc1syXVsyXSA9IGI7XHJcbiAgZmFjZXNbMl1bM10gPSBub3JtYWxpemUoY3Jvc3MoZGlmZihkLCBhKSwgZGlmZihiLCBhKSkpO1xyXG4gIGZhY2VzWzNdWzBdID0gYjtcclxuICBmYWNlc1szXVsxXSA9IGQ7XHJcbiAgZmFjZXNbM11bMl0gPSBjO1xyXG4gIGZhY2VzWzNdWzNdID0gbm9ybWFsaXplKGNyb3NzKGRpZmYoZCwgYiksIGRpZmYoYywgYikpKTtcclxuXHJcbiAgbGV0IG51bV9mYWNlcyA9IDQ7XHJcbiAgbGV0IGNsb3Nlc3RfZmFjZSA9IG51bGw7XHJcbiAgbGV0IHNlYXJjaF9kaXI7XHJcblxyXG4gIGxldCBwO1xyXG4gIGZvciAobGV0IGl0ZXJhdGlvbiA9IDA7IGl0ZXJhdGlvbiA8IEVQQV9NQVhfTlVNX0lURVI7ICsraXRlcmF0aW9uKSB7XHJcbiAgICBsZXQgbWluX2Rpc3QgPSBkb3QoZmFjZXNbMF1bMF0sIGZhY2VzWzBdWzNdKTtcclxuXHJcbiAgICBjbG9zZXN0X2ZhY2UgPSAwO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1fZmFjZXM7ICsraSkge1xyXG4gICAgICBsZXQgZGlzdCA9IGRvdChmYWNlc1tpXVswXSwgZmFjZXNbaV1bM10pO1xyXG4gICAgICBpZiAoZGlzdCA8IG1pbl9kaXN0KSB7XHJcbiAgICAgICAgbWluX2Rpc3QgPSBkaXN0O1xyXG4gICAgICAgIGNsb3Nlc3RfZmFjZSA9IGk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHNlYXJjaF9kaXIgPSBmYWNlc1tjbG9zZXN0X2ZhY2VdWzNdO1xyXG5cclxuICAgIGNvbnN0IHBfb3JpZ2luMSA9IGNvbGwxLnN1cHBvcnQoc2NhbGUoc2VhcmNoX2RpciwgLTEpKTtcclxuICAgIGNvbnN0IHBfb3JpZ2luMiA9IGNvbGwyLnN1cHBvcnQoc2VhcmNoX2Rpcik7XHJcbiAgICBwID0gZGlmZihwX29yaWdpbjIsIHBfb3JpZ2luMSk7XHJcbiAgICBvcmlnaW5zTWFwLnNldChwLCBbcF9vcmlnaW4xLCBwX29yaWdpbjJdKTtcclxuXHJcbiAgICBpZiAoZG90KHAsIHNlYXJjaF9kaXIpIC0gbWluX2Rpc3QgPCBFUEFfQklBUykge1xyXG4gICAgICBjb25zdCBmYWNlID0gZmFjZXNbY2xvc2VzdF9mYWNlXTtcclxuXHJcbiAgICAgIGNvbnN0IHBvaW50ID0gb3JpZ2luVG9GYWNlUHJvaihmYWNlKTtcclxuXHJcbiAgICAgIGNvbnN0IFtBYSwgQmFdID0gb3JpZ2luc01hcC5nZXQoZmFjZVswXSk7XHJcbiAgICAgIC8vY29uc3QgQWEgPSBmYWNlWzBdLm9hXHJcbiAgICAgIC8vY29uc3QgQmEgPSBmYWNlWzBdLm9iXHJcbiAgICAgIGNvbnN0IFtBYiwgQmJdID0gb3JpZ2luc01hcC5nZXQoZmFjZVsxXSk7XHJcbiAgICAgIC8vY29uc3QgQWIgPSBmYWNlWzFdLm9hXHJcbiAgICAgIC8vY29uc3QgQmIgPSBmYWNlWzFdLm9iXHJcbiAgICAgIGNvbnN0IFtBYywgQmNdID0gb3JpZ2luc01hcC5nZXQoZmFjZVsyXSk7XHJcbiAgICAgIC8vY29uc3QgQWMgPSBmYWNlWzJdLm9hXHJcbiAgICAgIC8vY29uc3QgQmMgPSBmYWNlWzJdLm9iXHJcblxyXG4gICAgICBjb25zdCByZXN1bHQgPSBiYXJpY2VudHJpYyhmYWNlLCBwb2ludCk7XHJcblxyXG4gICAgICBpZiAoaXNOYU4ocmVzdWx0WzBdICsgcmVzdWx0WzFdICsgcmVzdWx0WzJdKSkge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBsZXQgUEEgPSBzdW0oXHJcbiAgICAgICAgc3VtKHNjYWxlKEFhLCByZXN1bHRbMF0pLCBzY2FsZShBYiwgcmVzdWx0WzFdKSksXHJcbiAgICAgICAgc2NhbGUoQWMsIHJlc3VsdFsyXSlcclxuICAgICAgKTtcclxuICAgICAgLy9BYS5tdWx0aXBseShyZXN1bHRbMF0pLmFkZChBYi5tdWx0aXBseShyZXN1bHRbMV0pKS5hZGQoQWMubXVsdGlwbHkocmVzdWx0WzJdKSlcclxuICAgICAgbGV0IFBCID0gc3VtKFxyXG4gICAgICAgIHN1bShzY2FsZShCYSwgcmVzdWx0WzBdKSwgc2NhbGUoQmIsIHJlc3VsdFsxXSkpLFxyXG4gICAgICAgIHNjYWxlKEJjLCByZXN1bHRbMl0pXHJcbiAgICAgICk7XHJcbiAgICAgIC8vQmEubXVsdGlwbHkocmVzdWx0WzBdKS5hZGQoQmIubXVsdGlwbHkocmVzdWx0WzFdKSkuYWRkKEJjLm11bHRpcGx5KHJlc3VsdFsyXSkpXHJcblxyXG4gICAgICAvL2NvbnN0IHJhID0gUEEuc3Vic3RyYWN0KGNvbGwxLnBvcylcclxuXHJcbiAgICAgIGNvbnN0IG4gPSBub3JtYWxpemUoc2NhbGUoZmFjZVszXSwgLWRvdChwLCBzZWFyY2hfZGlyKSkpO1xyXG4gICAgICBpZiAobm9ybShuKSA8IDAuMDEpIHJldHVybiBudWxsO1xyXG4gICAgICBjb25zdCBwZW5EZXB0aCA9IC1kb3QoZGlmZihQQiwgUEEpLCBuKTtcclxuXHJcbiAgICAgIHJldHVybiB7IFBBLCBQQiwgbiwgcGVuRGVwdGggfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBsb29zZV9lZGdlcyA9IFtdO1xyXG4gICAgbGV0IG51bV9sb29zZV9lZGdlcyA9IDA7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bV9mYWNlczsgKytpKSB7XHJcbiAgICAgIGlmIChkb3QoZmFjZXNbaV1bM10sIGRpZmYocCwgZmFjZXNbaV1bMF0pKSA+IDApIHtcclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDM7IGorKykge1xyXG4gICAgICAgICAgbGV0IGN1cnJlbnRfZWRnZSA9IFtmYWNlc1tpXVtqXSwgZmFjZXNbaV1bKGogKyAxKSAlIDNdXTtcclxuICAgICAgICAgIGxldCBmb3VuZF9lZGdlID0gZmFsc2U7XHJcbiAgICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IG51bV9sb29zZV9lZGdlczsgaysrKSB7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICBsb29zZV9lZGdlc1trXVsxXSA9PT0gY3VycmVudF9lZGdlWzBdICYmXHJcbiAgICAgICAgICAgICAgbG9vc2VfZWRnZXNba11bMF0gPT09IGN1cnJlbnRfZWRnZVsxXVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICBsb29zZV9lZGdlc1trXVswXSA9IGxvb3NlX2VkZ2VzW251bV9sb29zZV9lZGdlcyAtIDFdWzBdO1xyXG4gICAgICAgICAgICAgIGxvb3NlX2VkZ2VzW2tdWzFdID0gbG9vc2VfZWRnZXNbbnVtX2xvb3NlX2VkZ2VzIC0gMV1bMV07XHJcbiAgICAgICAgICAgICAgbnVtX2xvb3NlX2VkZ2VzLS07XHJcbiAgICAgICAgICAgICAgZm91bmRfZWRnZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgayA9IG51bV9sb29zZV9lZGdlcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKCFmb3VuZF9lZGdlKSB7XHJcbiAgICAgICAgICAgIGlmIChudW1fbG9vc2VfZWRnZXMgPj0gTUFYX05VTV9MT09TRV9FREdFUykgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBsb29zZV9lZGdlc1tudW1fbG9vc2VfZWRnZXNdID0gW107XHJcbiAgICAgICAgICAgIGxvb3NlX2VkZ2VzW251bV9sb29zZV9lZGdlc11bMF0gPSBjdXJyZW50X2VkZ2VbMF07XHJcbiAgICAgICAgICAgIGxvb3NlX2VkZ2VzW251bV9sb29zZV9lZGdlc11bMV0gPSBjdXJyZW50X2VkZ2VbMV07XHJcbiAgICAgICAgICAgIG51bV9sb29zZV9lZGdlcysrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmYWNlc1tpXVswXSA9IGZhY2VzW251bV9mYWNlcyAtIDFdWzBdO1xyXG4gICAgICAgIGZhY2VzW2ldWzFdID0gZmFjZXNbbnVtX2ZhY2VzIC0gMV1bMV07XHJcbiAgICAgICAgZmFjZXNbaV1bMl0gPSBmYWNlc1tudW1fZmFjZXMgLSAxXVsyXTtcclxuICAgICAgICBmYWNlc1tpXVszXSA9IGZhY2VzW251bV9mYWNlcyAtIDFdWzNdO1xyXG4gICAgICAgIG51bV9mYWNlcy0tO1xyXG4gICAgICAgIGktLTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1fbG9vc2VfZWRnZXM7IGkrKykge1xyXG4gICAgICBpZiAobnVtX2ZhY2VzID49IE1BWF9OVU1fRkFDRVMpIGJyZWFrO1xyXG4gICAgICBmYWNlc1tudW1fZmFjZXNdID0gW107XHJcbiAgICAgIGZhY2VzW251bV9mYWNlc11bMF0gPSBsb29zZV9lZGdlc1tpXVswXTtcclxuICAgICAgZmFjZXNbbnVtX2ZhY2VzXVsxXSA9IGxvb3NlX2VkZ2VzW2ldWzFdO1xyXG4gICAgICBmYWNlc1tudW1fZmFjZXNdWzJdID0gcDtcclxuXHJcbiAgICAgIGZhY2VzW251bV9mYWNlc11bM10gPSBub3JtYWxpemUoXHJcbiAgICAgICAgY3Jvc3MoXHJcbiAgICAgICAgICBkaWZmKGxvb3NlX2VkZ2VzW2ldWzBdLCBsb29zZV9lZGdlc1tpXVsxXSksXHJcbiAgICAgICAgICBkaWZmKGxvb3NlX2VkZ2VzW2ldWzBdLCBwKVxyXG4gICAgICAgIClcclxuICAgICAgKTtcclxuXHJcbiAgICAgIGlmIChkb3QoZmFjZXNbbnVtX2ZhY2VzXVswXSwgZmFjZXNbbnVtX2ZhY2VzXVszXSkgKyAwLjAxIDwgMCkge1xyXG4gICAgICAgIGNvbnN0IHRlbXAgPSBmYWNlc1tudW1fZmFjZXNdWzBdO1xyXG4gICAgICAgIGZhY2VzW251bV9mYWNlc11bMF0gPSBmYWNlc1tudW1fZmFjZXNdWzFdO1xyXG4gICAgICAgIGZhY2VzW251bV9mYWNlc11bMV0gPSB0ZW1wO1xyXG4gICAgICAgIGZhY2VzW251bV9mYWNlc11bM10gPSBzY2FsZShmYWNlc1tudW1fZmFjZXNdWzNdLCAtMSk7XHJcbiAgICAgIH1cclxuICAgICAgbnVtX2ZhY2VzKys7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbnVsbDtcclxufTtcclxuXHJcbmNvbnN0IGdqa1Njb3BlID0ge307XHJcbmNvbnN0IF9namsgPSBnamsuYmluZChnamtTY29wZSk7XHJcblxyXG5jb25zdCBnZXRDb250YWN0TWFuaWZvbGQgPSAoYm9keTEsIGJvZHkyKSA9PiB7XHJcbiAgY29uc3QgY29sbDEgPSBib2R5MS5jb2xsaWRlcjtcclxuICBjb25zdCBjb2xsMiA9IGJvZHkyLmNvbGxpZGVyO1xyXG4gIGNvbnN0IGNvbnRhY3REYXRhID0gX2dqayhib2R5MSwgYm9keTIpO1xyXG4gIGlmICghY29udGFjdERhdGEpIHJldHVybiBudWxsO1xyXG5cclxuICBjb25zdCB7IFBBLCBQQiwgbiB9ID0gY29udGFjdERhdGE7XHJcblxyXG4gIGlmIChjb2xsMS50eXBlID09PSBcInNwaGVyZVwiIHx8IGNvbGwyLnR5cGUgPT09IFwic3BoZXJlXCIpIHtcclxuICAgIGNvbnN0IHJiID0gZGlmZihQQiwgY29sbDIucG9zKTtcclxuICAgIGNvbnN0IHJhID0gZGlmZihQQSwgY29sbDEucG9zKTtcclxuICAgIGNvbnN0IHBlbkRlcHRoID0gLWRvdChkaWZmKFBCLCBQQSksIG4pO1xyXG4gICAgY29uc3QgcmFMb2NhbCA9IG0zLnRyYW5zZm9ybVBvaW50KGNvbGwxLlJtYXRyaXhJbnZlcnNlLCByYSk7XHJcbiAgICBjb25zdCByYkxvY2FsID0gbTMudHJhbnNmb3JtUG9pbnQoY29sbDIuUm1hdHJpeEludmVyc2UsIHJiKTtcclxuICAgIGNvbnN0IGkgPSBbblsxXSArIG5bMl0sblsyXSAtIG5bMF0sIC1uWzBdIC0gblsxXV1cclxuICAgXHJcbiAgICBcclxuICAgIGNvbnN0IGogPSBjcm9zcyhzY2FsZShuLCAtMSksIGkpXHJcbiAgICByZXR1cm4gW1xyXG4gICAgICB7XHJcbiAgICAgICAgcmFMb2NhbCxcclxuICAgICAgICByYkxvY2FsLFxyXG4gICAgICAgIHJhLFxyXG4gICAgICAgIHJiLFxyXG4gICAgICAgIFBBLFxyXG4gICAgICAgIFBCLFxyXG4gICAgICAgIG4sXHJcbiAgICAgICAgcGVuRGVwdGgsXHJcbiAgICAgICAgYm9keTEsXHJcbiAgICAgICAgYm9keTIsXHJcbiAgICAgICAgaSxcclxuICAgICAgICBqLFxyXG4gICAgICB9LFxyXG4gICAgXTtcclxuICB9XHJcbiAgXHJcbiAgY29uc3QgblJldmVyc2UgPSBzY2FsZShuLCAtMSk7XHJcblxyXG4gIGNvbnN0IFtjb250YWN0RmFjZTEsIG5vcm1hbDFdID0gY29sbDEuZ2V0Q2xvc2VzdEZhY2VCeU5vcm1hbChuUmV2ZXJzZSk7XHJcbiAgY29uc3QgW2NvbnRhY3RGYWNlMiwgbm9ybWFsMl0gPSBjb2xsMi5nZXRDbG9zZXN0RmFjZUJ5Tm9ybWFsKG4pO1xyXG4gIGNvbnN0IHBsYW5lID0gW3NjYWxlKHN1bShQQSwgUEIpLCAwLjUpLCBuXTtcclxuICBjb25zdCBwcm9qZWN0aW9uczEgPSBjb250YWN0RmFjZTEubWFwKChwKSA9PlxyXG4gICAgcG9pbnRPblBsYW5lUHJvamVjdGlvbihwbGFuZSwgcClcclxuICApO1xyXG4gIGNvbnN0IHByb2plY3Rpb25zMiA9IGNvbnRhY3RGYWNlMi5tYXAoKHApID0+XHJcbiAgICBwb2ludE9uUGxhbmVQcm9qZWN0aW9uKHBsYW5lLCBwKVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IG9yaWdpbiA9IHBsYW5lWzBdO1xyXG4gIGNvbnN0IGkgPSB2ZWN0b3Iubm9ybWFsaXplKHZlY3Rvci5kaWZmKHBsYW5lWzBdLCBwcm9qZWN0aW9uczFbMV0pKTtcclxuICBjb25zdCBqID0gdmVjdG9yLmNyb3NzKHBsYW5lWzFdLCBpKTtcclxuXHJcbiAgbGV0IF8yZDEgPSBwcm9qZWN0aW9uczEubWFwKChwKSA9PiBnZXQyRGNvb3Jkc09uUGxhbmUoaSwgaiwgZGlmZihwLCBvcmlnaW4pKSk7XHJcbiAgbGV0IF8yZDIgPSBwcm9qZWN0aW9uczIubWFwKChwKSA9PiBnZXQyRGNvb3Jkc09uUGxhbmUoaSwgaiwgZGlmZihwLCBvcmlnaW4pKSk7XHJcblxyXG4gIGNvbnN0IGRpcjEgPSBpc0luQ2xvY2t3aXNlKF8yZDEpO1xyXG4gIGNvbnN0IGRpcjIgPSBpc0luQ2xvY2t3aXNlKF8yZDIpO1xyXG4gIGlmIChkaXIxIDwgMCkgXzJkMSA9IF8yZDEubWFwKChfLCBpKSA9PiBfMmQxLmF0KC1pKSk7XHJcbiAgaWYgKGRpcjIgPCAwKSBfMmQyID0gXzJkMi5tYXAoKF8sIGkpID0+IF8yZDIuYXQoLWkpKTtcclxuICBjb25zdCBjbGlwcGVkID0gY2xpcEZhY2VWc0ZhY2UoXzJkMSwgXzJkMik7XHJcblxyXG4gIGNvbnN0IF8zZCA9IGNsaXBwZWQubWFwKChwKSA9PlxyXG4gICAgc3VtKG9yaWdpbiwgc3VtKHNjYWxlKGksIHBbMF0pLCBzY2FsZShqLCBwWzFdKSkpXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgZmVhdHVyZXMgPSBbXTtcclxuICBfM2QuZm9yRWFjaCgocG9pbnQpID0+IHtcclxuICAgIGNvbnN0IFBBID0gcmF5VnNQbGFuZUludGVyc2VjKFtjb250YWN0RmFjZTFbMF0sIG5vcm1hbDFdLCBwb2ludCwgbik7XHJcbiAgICBpZiAoIWlzUG9pbnRCZWhpbmRQbGFuZShwbGFuZSwgUEEsIDEpKSByZXR1cm47XHJcbiAgICBjb25zdCBQQiA9IHJheVZzUGxhbmVJbnRlcnNlYyhbY29udGFjdEZhY2UyWzBdLCBub3JtYWwyXSwgcG9pbnQsIG4pO1xyXG4gICAgaWYgKCFpc1BvaW50QmVoaW5kUGxhbmUocGxhbmUsIFBCLCAtMSkpIHJldHVybjtcclxuXHJcbiAgICBjb25zdCByYiA9IGRpZmYoUEIsIGNvbGwyLnBvcyk7XHJcbiAgICBjb25zdCByYSA9IGRpZmYoUEEsIGNvbGwxLnBvcyk7XHJcbiAgICBjb25zdCBwZW5EZXB0aCA9IC1kb3QoZGlmZihQQiwgUEEpLCBuKTtcclxuICAgIGNvbnN0IHJhTG9jYWwgPSBtMy50cmFuc2Zvcm1Qb2ludChjb2xsMS5SbWF0cml4SW52ZXJzZSwgcmEpO1xyXG4gICAgY29uc3QgcmJMb2NhbCA9IG0zLnRyYW5zZm9ybVBvaW50KGNvbGwyLlJtYXRyaXhJbnZlcnNlLCByYik7XHJcblxyXG4gICAgZmVhdHVyZXMucHVzaCh7XHJcbiAgICAgIHJhTG9jYWwsXHJcbiAgICAgIHJiTG9jYWwsXHJcbiAgICAgIHJhLFxyXG4gICAgICByYixcclxuICAgICAgUEEsXHJcbiAgICAgIFBCLFxyXG4gICAgICBuLFxyXG4gICAgICBwZW5EZXB0aCxcclxuICAgICAgYm9keTEsXHJcbiAgICAgIGJvZHkyLFxyXG4gICAgICBpLFxyXG4gICAgICBqLFxyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIGlmIChmZWF0dXJlcy5sZW5ndGggPT09IDApIHtcclxuICAgIGNvbnN0IHJiID0gZGlmZihQQiwgY29sbDIucG9zKTtcclxuICAgIGNvbnN0IHJhID0gZGlmZihQQSwgY29sbDEucG9zKTtcclxuICAgIGNvbnN0IHBlbkRlcHRoID0gLWRvdChkaWZmKFBCLCBQQSksIG4pO1xyXG4gICAgY29uc3QgcmFMb2NhbCA9IG0zLnRyYW5zZm9ybVBvaW50KGNvbGwxLlJtYXRyaXhJbnZlcnNlLCByYSk7XHJcbiAgICBjb25zdCByYkxvY2FsID0gbTMudHJhbnNmb3JtUG9pbnQoY29sbDIuUm1hdHJpeEludmVyc2UsIHJiKTtcclxuICAgIGZlYXR1cmVzLnB1c2goe1xyXG4gICAgICByYUxvY2FsLFxyXG4gICAgICByYkxvY2FsLFxyXG4gICAgICByYSxcclxuICAgICAgcmIsXHJcbiAgICAgIFBBLFxyXG4gICAgICBQQixcclxuICAgICAgbixcclxuICAgICAgcGVuRGVwdGgsXHJcbiAgICAgIGJvZHkxLFxyXG4gICAgICBib2R5MixcclxuICAgICAgaSxcclxuICAgICAgaixcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGZlYXR1cmVzO1xyXG59O1xyXG5cclxuZXhwb3J0IHtcclxuICBnZXRDb250YWN0TWFuaWZvbGQgYXMgZ2prLFxyXG4gIHBvaW50T25QbGFuZVByb2plY3Rpb24sXHJcbiAgY2xpcFBvaW50c0JlaGluZFBsYW5lLFxyXG4gIGdldDJEY29vcmRzT25QbGFuZSxcclxuICByYXlWc1BsYW5lSW50ZXJzZWMsXHJcbn07XHJcbiIsImltcG9ydCB7IG0zLCB2ZWN0b3IgfSBmcm9tIFwibWF0aFwiO1xyXG5cclxuY29uc3QgeyBkaXN0YW5jZUZyb21MaW5lLCBub3JtLCBmaW5kRnVydGhlc3RQb2ludCwgc3VtLCBkaWZmLCBub3JtU3EsIGRvdCB9ID1cclxuICB2ZWN0b3I7XHJcblxyXG5jb25zdCBwcmVjID0gMC4wMDA1O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFuaWZvbGQge1xyXG4gIGNvbnN0cnVjdG9yKC4uLmNvbnRhY3RzKSB7XHJcbiAgICB0aGlzLmNvbnRhY3RzID0gY29udGFjdHM7XHJcbiAgICB0aGlzLmtlZXAgPSB0cnVlO1xyXG4gIH1cclxuICB1cGRhdGUoKSB7XHJcbiAgICBjb25zdCBjb250YWN0cyA9IHRoaXMuY29udGFjdHM7XHJcbiAgICBpZiAoY29udGFjdHMubGVuZ3RoIDwgMikge1xyXG4gICAgICB0aGlzLmtlZXAgPSBmYWxzZTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgZm9yIChsZXQgaSA9IDAsIG4gPSBjb250YWN0cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgY29uc3QgY29udGFjdCA9IGNvbnRhY3RzW2ldO1xyXG4gICAgICBjb25zdCBwb3MxID0gY29udGFjdC5ib2R5MS5jb2xsaWRlci5wb3M7XHJcbiAgICAgIGNvbnN0IHBvczIgPSBjb250YWN0LmJvZHkyLmNvbGxpZGVyLnBvcztcclxuICAgICAgY29uc3QgX3JhID0gbTMudHJhbnNmb3JtUG9pbnQoXHJcbiAgICAgICAgY29udGFjdC5ib2R5MS5jb2xsaWRlci5SbWF0cml4LFxyXG4gICAgICAgIGNvbnRhY3QucmFMb2NhbFxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCBfcmIgPSBtMy50cmFuc2Zvcm1Qb2ludChcclxuICAgICAgICBjb250YWN0LmJvZHkyLmNvbGxpZGVyLlJtYXRyaXgsXHJcbiAgICAgICAgY29udGFjdC5yYkxvY2FsXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IF9QQSA9IHN1bShwb3MxLCBfcmEpO1xyXG4gICAgICBjb25zdCBfUEIgPSBzdW0ocG9zMiwgX3JiKTtcclxuICAgICAgY29uc3QgcmFCaWFzID0gZGlmZihjb250YWN0LlBBLCBfUEEpO1xyXG4gICAgICBjb25zdCByYkJpYXMgPSBkaWZmKGNvbnRhY3QuUEIsIF9QQik7XHJcbiAgICAgIC8vY29udGFjdC51cGRhdGVDb250YWN0RGF0YSgpXHJcbiAgICAgIGlmIChub3JtKHJhQmlhcykgPiBwcmVjIHx8IG5vcm0ocmJCaWFzKSA+IHByZWMpIHtcclxuICAgICAgICB0aGlzLmtlZXAgPSBmYWxzZTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnRhY3QuUEEgPSBfUEE7XHJcbiAgICAgIGNvbnRhY3QuUEIgPSBfUEI7XHJcbiAgICAgIGNvbnRhY3QucmEgPSBfcmE7XHJcbiAgICAgIGNvbnRhY3QucmIgPSBfcmI7XHJcbiAgICAgIGNvbnRhY3QucGVuRGVwdGggPSBkb3QoY29udGFjdC5uLCBkaWZmKF9QQiwgX1BBKSk7XHJcbiAgICAgIFxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgVHJlZSBmcm9tIFwiLi90cmVlXCI7XHJcbmltcG9ydCB7IHZlY3RvciB9IGZyb20gXCJtYXRoXCI7XHJcblxyXG5pbXBvcnQgeyBnamsgfSBmcm9tIFwiLi9namtcIjtcclxuXHJcbmltcG9ydCBNYW5pZm9sZCBmcm9tIFwiLi9tYW5pZm9sZFwiO1xyXG5pbXBvcnQgU3lzdGVtIGZyb20gXCIuL3N5c3RlbVwiO1xyXG5cclxuaW1wb3J0IHtcclxuICBDb25zdHJhaW50LFxyXG4gIENvbnRhY3RDb25zdHJhaW50LFxyXG4gIEZyaWN0aW9uQ29uc3RyYWludCxcclxuICBQb3NpdGlvbkNvbnN0cmFpbnQsXHJcbn0gZnJvbSBcIi4vY29uc3RyYWludHNcIjtcclxuXHJcbmNvbnN0IHNhbWVHcm91cCA9IChib2R5MSwgYm9keTIpID0+IHtcclxuICBpZiAoIWJvZHkxLmdyb3VwKSByZXR1cm47XHJcbiAgaWYgKCFib2R5Mi5ncm91cCkgcmV0dXJuO1xyXG4gIHJldHVybiBib2R5MS5ncm91cCA9PT0gYm9keTIuZ3JvdXA7XHJcbn07XHJcbmNvbnN0IHBhaXJIYXNoID0gKHgsIHkpID0+XHJcbiAgeCA9PT0gTWF0aC5tYXgoeCwgeSkgPyB4ICogeCArIHggKyB5IDogeSAqIHkgKyB4ICsgeTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpbXVsYXRpb24ge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5vYmplY3RzID0gW107XHJcbiAgICB0aGlzLmJ2aCA9IG5ldyBUcmVlKCk7XHJcbiAgICB0aGlzLmNvbGxpc2lvbnMgPSBbXTtcclxuICAgIHRoaXMuY29uc3RyYWludHMgPSBuZXcgTWFwKCk7XHJcbiAgICB0aGlzLnBvc2l0aW9uQ29uc3RyYWludHMgPSBuZXcgTWFwKCk7XHJcbiAgICB0aGlzLmNvbGxpc2lvbk1hbmlmb2xkcyA9IG5ldyBNYXAoKTtcclxuICAgIHRoaXMubGFzdElkID0gMTtcclxuICB9XHJcbiAgYWRkT2JqZWN0KG9iamVjdCkge1xyXG4gICAgY29uc3QgYWFiYiA9IG9iamVjdC5nZXRFeHBhbmRlZEFBQkIoKTtcclxuXHJcbiAgICBjb25zdCBsZWFmID0gdGhpcy5idmguaW5zZXJ0TGVhZihhYWJiLCBvYmplY3QpO1xyXG4gICAgb2JqZWN0LkJWbGluayA9IGxlYWY7XHJcbiAgICBvYmplY3QuaWQgPSB0aGlzLmxhc3RJZDtcclxuICAgIHRoaXMubGFzdElkKys7XHJcbiAgICBvYmplY3Qub24oXCJ1cGRhdGVcIiwgKCkgPT4gdGhpcy51cGRhdGVPYmplY3RBQUJCLmNhbGwodGhpcywgb2JqZWN0KSk7XHJcblxyXG4gICAgdGhpcy5vYmplY3RzLnB1c2gob2JqZWN0KTtcclxuICB9XHJcbiAgYWRkQ29uc3RyYWludHMoY29uc3RyYWludHMsIG5hbWUpIHtcclxuICAgIHRoaXMuY29uc3RyYWludHMuc2V0KG5hbWUsIFsuLi5jb25zdHJhaW50c10pXHJcbiAgfVxyXG4gIGFkZFBvc2l0aW9uQ29uc3RyYWludHMoY29uc3RyYWludHMsIG5hbWUpIHtcclxuICAgIHRoaXMucG9zaXRpb25Db25zdHJhaW50cy5zZXQobmFtZSwgWy4uLmNvbnN0cmFpbnRzXSlcclxuICB9XHJcbiAgdXBkYXRlT2JqZWN0QUFCQihvYmplY3QpIHtcclxuICAgIGNvbnN0IG5ld0FBQkIgPSBvYmplY3QuZ2V0QUFCQigpO1xyXG5cclxuICAgIHRoaXMuYnZoLnJlbW92ZUxlYWYob2JqZWN0LkJWbGluayk7XHJcbiAgICBjb25zdCBsZWFmID0gdGhpcy5idmguaW5zZXJ0TGVhZihuZXdBQUJCLCBvYmplY3QpO1xyXG4gICAgb2JqZWN0LkJWbGluayA9IGxlYWY7XHJcbiAgfVxyXG4gIHJlbW92ZU9iamVjdChvYmplY3QpIHtcclxuICAgIHRoaXMuYnZoLnJlbW92ZUxlYWYob2JqZWN0LkJWbGluayk7XHJcbiAgICB0aGlzLm9iamVjdHMgPSB0aGlzLm9iamVjdHMuZmlsdGVyKChlbCkgPT4gZWwgPT09IG9iamVjdCk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVDb2xsaXNpb25zKCkge1xyXG4gICAgY29uc3QgeyBjb2xsaXNpb25NYW5pZm9sZHMgfSA9IHRoaXM7XHJcbiAgICBmb3IgKGNvbnN0IFtoYXNoLCBtYW5pZm9sZF0gb2YgY29sbGlzaW9uTWFuaWZvbGRzKSB7XHJcbiAgICAgIG1hbmlmb2xkLnVwZGF0ZSgpO1xyXG4gICAgICBpZiAoIW1hbmlmb2xkLmtlZXApIGNvbGxpc2lvbk1hbmlmb2xkcy5kZWxldGUoaGFzaCk7XHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCBpID0gMCwgbiA9IHRoaXMub2JqZWN0cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgY29uc3Qgb2JqZWN0ID0gdGhpcy5vYmplY3RzW2ldO1xyXG4gICAgICBpZiAob2JqZWN0LnN0YXRpYykgY29udGludWU7XHJcbiAgICAgIGNvbnN0IGNvbHMgPSB0aGlzLmJ2aC5nZXRDb2xsaXNpb25zKG9iamVjdC5CVmxpbmspO1xyXG4gICAgICBvYmplY3QuQlZsaW5rLmlzQ2hlY2tlZCA9IHRydWU7XHJcbiAgICAgIGlmIChjb2xzLmxlbmd0aCAhPSAwKVxyXG4gICAgICAgIGZvciAobGV0IGogPSAwLCBuID0gY29scy5sZW5ndGg7IGogPCBuOyBqKyspIHtcclxuICAgICAgICAgIGlmIChzYW1lR3JvdXAob2JqZWN0LCBjb2xzW2pdKSkgY29udGludWU7XHJcbiAgICAgICAgICBjb25zdCBoYXNoID0gcGFpckhhc2gob2JqZWN0LmlkLCBjb2xzW2pdLmlkKTtcclxuICAgICAgICAgIGxldCBtYW5pZm9sZCA9IHRoaXMuY29sbGlzaW9uTWFuaWZvbGRzLmdldChoYXNoKTtcclxuICAgICAgICAgIGlmIChtYW5pZm9sZCkgY29udGludWU7XHJcbiAgICAgICAgICBjb25zdCBjb250YWN0cyA9IGdqayhvYmplY3QsIGNvbHNbal0pO1xyXG5cclxuICAgICAgICAgIGlmIChjb250YWN0cykge1xyXG4gICAgICAgICAgICBtYW5pZm9sZCA9IG5ldyBNYW5pZm9sZCguLi5jb250YWN0cyk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmNvbGxpc2lvbk1hbmlmb2xkcy5zZXQoaGFzaCwgbWFuaWZvbGQpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmJ2aC5zZXRVbmNoZWNrZWQoKTtcclxuICB9XHJcbiAgdGljayhkZWx0YVRpbWUpIHtcclxuICAgIHRoaXMudXBkYXRlQ29sbGlzaW9ucygpO1xyXG4gICAgbGV0IG1hbmlmb2xkcyA9IHRoaXMuY29sbGlzaW9uTWFuaWZvbGRzO1xyXG4gICAgZm9yIChsZXQgaSA9IDAsIG4gPSB0aGlzLm9iamVjdHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgIHRoaXMub2JqZWN0c1tpXS5pbnRlZ3JhdGVGb3JjZXMoZGVsdGFUaW1lKTtcclxuICAgIH1cclxuICAgIGNvbnN0IHN5c3RlbSA9IG5ldyBTeXN0ZW0oKTtcclxuICAgIGNvbnN0IGZyaWN0aW9uU3lzdGVtID0gbmV3IFN5c3RlbSgpO1xyXG4gICAgY29uc3QgY29udGFjdENvbnN0cmFpbnRzID0gW107XHJcbiAgICBjb25zdCBmcmljdGlvbkNvbnN0cmFpbnRzID0gW107XHJcbiAgICBmb3IgKGxldCBba2V5LCBtYW5pZm9sZF0gb2YgbWFuaWZvbGRzKSB7XHJcbiAgICAgIGNvbnN0IHVzZVZlbG9jaXR5QmlhcyA9IG1hbmlmb2xkLmNvbnRhY3RzLmxlbmd0aCA8MjtcclxuXHJcbiAgICAgIG1hbmlmb2xkLmNvbnRhY3RzLmZvckVhY2goKGMpID0+IHtcclxuICAgICAgICBjb25zdCB7IGJvZHkxLCBib2R5MiwgcmFMb2NhbCwgcmJMb2NhbCwgcmEsIHJiLCBpLCBqLCBwZW5EZXB0aCwgbiB9ID0gYztcclxuICAgICAgICBjb25zdCBjb25zdHJhaW50ID0gbmV3IENvbnRhY3RDb25zdHJhaW50KFxyXG4gICAgICAgICAgYm9keTEsXHJcbiAgICAgICAgICBib2R5MixcclxuICAgICAgICAgIG4sXHJcbiAgICAgICAgICByYSxcclxuICAgICAgICAgIHJiLFxyXG4gICAgICAgICAgcmFMb2NhbCxcclxuICAgICAgICAgIHJiTG9jYWwsXHJcbiAgICAgICAgICAwLFxyXG4gICAgICAgICAgMC4wMDAwMSxcclxuICAgICAgICAgIHBlbkRlcHRoLFxyXG4gICAgICAgICAgaSxcclxuICAgICAgICAgIGpcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBjb25zdCBmQ29uc3RyYWludDEgPSBuZXcgRnJpY3Rpb25Db25zdHJhaW50KFxyXG4gICAgICAgICAgYm9keTEsXHJcbiAgICAgICAgICBib2R5MixcclxuICAgICAgICAgIHZlY3Rvci5zY2FsZShpLCAtMSksXHJcbiAgICAgICAgICByYSxcclxuICAgICAgICAgIHJiLFxyXG4gICAgICAgICAgcmFMb2NhbCxcclxuICAgICAgICAgIHJiTG9jYWwsXHJcbiAgICAgICAgICAwLFxyXG4gICAgICAgICAgLWJvZHkxLmZyaWN0aW9uIC0gYm9keTIuZnJpY3Rpb24sXHJcbiAgICAgICAgICBib2R5MS5mcmljdGlvbiArIGJvZHkyLmZyaWN0aW9uLFxyXG4gICAgICAgICAgbnVsbFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3QgZkNvbnN0cmFpbnQyID0gbmV3IEZyaWN0aW9uQ29uc3RyYWludChcclxuICAgICAgICAgIGJvZHkxLFxyXG4gICAgICAgICAgYm9keTIsXHJcbiAgICAgICAgICB2ZWN0b3Iuc2NhbGUoaiwgLTEpLFxyXG4gICAgICAgICAgcmEsXHJcbiAgICAgICAgICByYixcclxuICAgICAgICAgIHJhTG9jYWwsXHJcbiAgICAgICAgICByYkxvY2FsLFxyXG4gICAgICAgICAgMCxcclxuICAgICAgICAgIC1ib2R5MS5mcmljdGlvbiAtIGJvZHkyLmZyaWN0aW9uLFxyXG4gICAgICAgICAgYm9keTEuZnJpY3Rpb24gKyBib2R5Mi5mcmljdGlvbixcclxuICAgICAgICAgIG51bGxcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBpZiAoMSkge1xyXG4gICAgICAgICAgY29uc3RyYWludC5iaWFzRmFjdG9yID0gMC4xMjU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnRhY3RDb25zdHJhaW50cy5wdXNoKGNvbnN0cmFpbnQpO1xyXG4gICAgICAgIGZyaWN0aW9uQ29uc3RyYWludHMucHVzaChmQ29uc3RyYWludDEsIGZDb25zdHJhaW50Mik7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgc3lzdGVtLmFkZENvbnN0cmFpbnQoY29udGFjdENvbnN0cmFpbnRzKTtcclxuICAgIGZvcihsZXQgW25hbWUsIGNvbnN0cmFpbnRzXSBvZiB0aGlzLmNvbnN0cmFpbnRzKXtcclxuICAgICAgc3lzdGVtLmFkZENvbnN0cmFpbnQoY29uc3RyYWludHMpXHJcbiAgICB9XHJcblxyXG4gICAgc3lzdGVtLnVwZGF0ZUVxdWF0aW9ucyhkZWx0YVRpbWUpXHJcbiAgICBmcmljdGlvblN5c3RlbS5hZGRDb25zdHJhaW50KGZyaWN0aW9uQ29uc3RyYWludHMpO1xyXG4gIFxyXG4gICAgZnJpY3Rpb25TeXN0ZW0udXBkYXRlRXF1YXRpb25zKGRlbHRhVGltZSlcclxuICAgIHN5c3RlbS5nZW5lcmF0ZVN5c3RlbShkZWx0YVRpbWUpO1xyXG4gICAgY29uc3QgbGFtYmRhID0gc3lzdGVtLnNvbHZlUEdTKGRlbHRhVGltZSk7XHJcbiAgICBjb25zdCBsZW4gPSBmcmljdGlvbkNvbnN0cmFpbnRzLmxlbmd0aC8yXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgIGZyaWN0aW9uQ29uc3RyYWludHNbMiAqIGldLmxhbWJkYU1pbiAqPSBsYW1iZGFbaV07XHJcbiAgICAgIGZyaWN0aW9uQ29uc3RyYWludHNbMiAqIGldLmxhbWJkYU1heCAqPSBsYW1iZGFbaV07XHJcbiAgICAgIGZyaWN0aW9uQ29uc3RyYWludHNbMiAqIGkgKyAxXS5sYW1iZGFNaW4gKj0gbGFtYmRhW2ldO1xyXG4gICAgICBmcmljdGlvbkNvbnN0cmFpbnRzWzIgKiBpICsgMV0ubGFtYmRhTWF4ICo9IGxhbWJkYVtpXTtcclxuICAgIH1cclxuICAgIGZyaWN0aW9uU3lzdGVtLmdlbmVyYXRlU3lzdGVtKGRlbHRhVGltZSk7XHJcbiAgICBmcmljdGlvblN5c3RlbS5zb2x2ZVBHUyhkZWx0YVRpbWUpO1xyXG4gICBcclxuICAgIGZvciAobGV0IGkgPSAwLCBuID0gdGhpcy5vYmplY3RzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICB0aGlzLm9iamVjdHNbaV0uaW50ZWdyYXRlVmVsb2NpdGllcyhkZWx0YVRpbWUpO1xyXG4gICAgfVxyXG4gICAgLy90aGlzLm9iamVjdHMuZm9yRWFjaCgob2JqZWN0KSA9PiBvYmplY3QudXBkYXRlSW52ZXJzZUluZXJ0aWEoKSk7XHJcbiAgICBjb25zdCBwb3NpdGlvblN5c3RlbSA9IG5ldyBTeXN0ZW0oKTtcclxuICAgIGNvbnN0IHBvc2l0aW9uQ29uc3RyYWludHMgPSBbXTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IFtrZXksIG1hbmlmb2xkXSBvZiBtYW5pZm9sZHMpIHtcclxuICAgICAgY29uc3QgeyBjb250YWN0cyB9ID0gbWFuaWZvbGQ7XHJcbiAgICAgIGlmIChjb250YWN0cy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgcG9zaXRpb25Db25zdHJhaW50cy5wdXNoKFxyXG4gICAgICAgICAgLi4uY29udGFjdHMubWFwKChjKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgICBib2R5MSxcclxuICAgICAgICAgICAgICBib2R5MixcclxuICAgICAgICAgICAgICByYUxvY2FsLFxyXG4gICAgICAgICAgICAgIHJiTG9jYWwsXHJcbiAgICAgICAgICAgICAgcmEsXHJcbiAgICAgICAgICAgICAgcmIsXHJcbiAgICAgICAgICAgICAgaSxcclxuICAgICAgICAgICAgICBqLFxyXG4gICAgICAgICAgICAgIHBlbkRlcHRoLFxyXG4gICAgICAgICAgICAgIG4sXHJcbiAgICAgICAgICAgIH0gPSBjO1xyXG4gICAgICAgICAgICBjb25zdCBjb25zdHJhaW50ID0gbmV3IFBvc2l0aW9uQ29uc3RyYWludChcclxuICAgICAgICAgICAgICBib2R5MSxcclxuICAgICAgICAgICAgICBib2R5MixcclxuICAgICAgICAgICAgICBuLFxyXG4gICAgICAgICAgICAgIHJhLFxyXG4gICAgICAgICAgICAgIHJiLFxyXG4gICAgICAgICAgICAgIHJhTG9jYWwsXHJcbiAgICAgICAgICAgICAgcmJMb2NhbCxcclxuICAgICAgICAgICAgICAxLFxyXG4gICAgICAgICAgICAgIDAuMDAwMSxcclxuICAgICAgICAgICAgICBwZW5EZXB0aFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICByZXR1cm4gY29uc3RyYWludFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBwb3NpdGlvblN5c3RlbS5hZGRDb25zdHJhaW50KHBvc2l0aW9uQ29uc3RyYWludHMpXHJcbiAgICBmb3IobGV0IFtuYW1lLCBjb25zdHJhaW50c10gb2YgdGhpcy5wb3NpdGlvbkNvbnN0cmFpbnRzKXtcclxuICAgICAgcG9zaXRpb25TeXN0ZW0uYWRkQ29uc3RyYWludChjb25zdHJhaW50cylcclxuICAgIH1cclxuICAgIHBvc2l0aW9uU3lzdGVtLnVwZGF0ZUVxdWF0aW9ucyhkZWx0YVRpbWUpXHJcbiAgICBwb3NpdGlvblN5c3RlbS5nZW5lcmF0ZVN5c3RlbShkZWx0YVRpbWUpO1xyXG4gICAgXHJcbiAgICBwb3NpdGlvblN5c3RlbS5zb2x2ZVBHUyhkZWx0YVRpbWUpXHJcbiAgICBmb3IgKGxldCBpID0gMCwgbiA9IHRoaXMub2JqZWN0cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgdGhpcy5vYmplY3RzW2ldLmludGVncmF0ZVBzZXVkb1ZlbG9jaXRpZXMoZGVsdGFUaW1lKTtcclxuICAgIH1cclxuICAgIHRoaXMub2JqZWN0cy5mb3JFYWNoKChvYmplY3QpID0+IG9iamVjdC51cGRhdGVJbnZlcnNlSW5lcnRpYSgpKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgdmVjdG9yIGFzIHZlYzMgfSBmcm9tIFwibWF0aFwiO1xyXG5cclxuY29uc3QgdmVjNiA9IHtcclxuICBkb3QoYSwgYil7XHJcbiAgICByZXR1cm4gIGFbMF0gKiBiWzBdICtcclxuICAgIGFbMV0gKiBiWzFdICsgXHJcbiAgICBhWzJdICogYlsyXSArXHJcbiAgICBhWzNdICogYlszXSArXHJcbiAgICBhWzRdICogYls0XSArXHJcbiAgICBhWzVdICogYls1XVxyXG4gICAgIFxyXG4gICAgXHJcbiAgfSxcclxuICBzY2FsZShhLCBmYWMpe1xyXG4gICAgcmV0dXJuIFthWzBdICogZmFjLCBhWzFdICogZmFjLCBhWzJdICogZmFjLCBhWzNdICogZmFjLCBhWzRdKmZhYywgYVs1XSpmYWNdXHJcbiAgfSxcclxuICBzdW0oYSwgYil7XHJcbiAgICByZXR1cm4gW1xyXG4gICAgICBhWzBdICsgYlswXSxcclxuICAgICAgYVsxXSArIGJbMV0sXHJcbiAgICAgIGFbMl0gKyBiWzJdLFxyXG4gICAgICBhWzNdICsgYlszXSxcclxuICAgICAgYVs0XSArIGJbNF0sXHJcbiAgICAgIGFbNV0gKyBiWzVdXHJcbiAgICBdXHJcbiAgfSxcclxuICBmcm9tVmVjMyhhLCBiKXtcclxuICAgIHJldHVybiBbXHJcbiAgICAgIC4uLmEsIC4uLmJcclxuICAgIF1cclxuICB9XHJcblxyXG59XHJcbmNvbnN0IG5vcm0gPSB2ID0+IE1hdGguc3FydCh2LnJlZHVjZSgoYWNjLGVsKSA9PiBhY2MrPWVsKmVsLCAwKSlcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3lzdGVtIHtcclxuICBjb25zdHJ1Y3Rvcihjb25zdHJhaW50cykge1xyXG4gICAgdGhpcy5jb25zdHJhaW50cyA9IFtdO1xyXG5cclxuICAgIFxyXG5cclxuICB9XHJcbiAgYWRkQ29uc3RyYWludChjb25zdHJhaW50cyl7XHJcbiAgICB0aGlzLmNvbnN0cmFpbnRzLnB1c2goLi4uY29uc3RyYWludHMpXHJcbiAgICBcclxuICB9XHJcbiAgZ2VuZXJhdGVCb2R5TWFwcGluZygpe1xyXG4gICAgY29uc3QgY29uc3RyYWludHMgPSB0aGlzLmNvbnN0cmFpbnRzXHJcbiAgICBjb25zdCBuID0gY29uc3RyYWludHMubGVuZ3RoXHJcbiAgICBjb25zdCBib2RpZXNNYXAgPSBuZXcgTWFwKClcclxuICAgIGNvbnN0IEptYXAgPSBbXVxyXG4gICAgbGV0IGNvdW50ZXIgPSAwXHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgbjsgaSsrKXtcclxuICAgICAgY29uc3QgYyA9IGNvbnN0cmFpbnRzW2ldXHJcbiAgICAgIGxldCBib2R5SW5kZXgxID0gYm9kaWVzTWFwLmdldChjLmJvZHkxLmlkKVxyXG4gICAgICBpZihib2R5SW5kZXgxID09PSB1bmRlZmluZWQpe1xyXG4gICAgICAgIGJvZHlJbmRleDEgPSBjb3VudGVyKytcclxuICAgICAgICBib2RpZXNNYXAuc2V0KGMuYm9keTEuaWQsIGJvZHlJbmRleDEpXHJcbiAgICAgIH1cclxuICAgICAgbGV0IGJvZHlJbmRleDIgPSBib2RpZXNNYXAuZ2V0KGMuYm9keTIuaWQpXHJcbiAgICAgIGlmKGJvZHlJbmRleDIgPT09IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgYm9keUluZGV4MiA9IGNvdW50ZXIrK1xyXG4gICAgICAgIGJvZGllc01hcC5zZXQoYy5ib2R5Mi5pZCwgYm9keUluZGV4MilcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgSm1hcC5wdXNoKGJvZHlJbmRleDEsIGJvZHlJbmRleDIpXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHRoaXMuYm9kaWVzTWFwID0gYm9kaWVzTWFwXHJcbiAgICB0aGlzLkptYXAgPSBKbWFwXHJcbiAgfVxyXG4gIGdlbmVyYXRlUHNldWRvVmVsVmVjdG9yKCkge31cclxuICBnZW5lcmF0ZVN5c3RlbShkZWx0YVRpbWUpIHtcclxuICAgXHJcbiAgICAvL051bWVyYXRpbmcgYm9kaWVzXHJcbiAgICB0aGlzLmdlbmVyYXRlQm9keU1hcHBpbmcoKVxyXG5cclxuXHJcbiAgICAvKmZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGNvbnN0cmFpbnQgPSB0aGlzLmNvbnN0cmFpbnRzW2ldO1xyXG4gICAgICBjb25zdCB7IGJvZHkxLCBib2R5MiwgSiB9ID0gY29uc3RyYWludDtcclxuICAgICAgY29uc3QgayA9IGkgKiBuO1xyXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG47IGorKykge1xyXG4gICAgICAgIGlmIChrID09PSBqKSB7XHJcbiAgICAgICAgICB0aGlzLkpNSltrICsgal0gPSAoKSA9PiBjb25zdHJhaW50LmVmZk1hc3M7XHJcbiAgICAgICAgICB0aGlzLkpNSnBbayArIGpdID0gKCkgPT5cclxuICAgICAgICAgICAgY29uc3RyYWludC5ib2R5MS5pbnZlcnNlTWFzcyArIGNvbnN0cmFpbnQuYm9keTIuaW52ZXJzZU1hc3M7XHJcbiAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IF9jb25zdHJhaW50ID0gdGhpcy5jb25zdHJhaW50c1tqXTtcclxuXHJcbiAgICAgICAgY29uc3QgX2JvZHkxID0gX2NvbnN0cmFpbnQuYm9keTE7XHJcbiAgICAgICAgY29uc3QgX2JvZHkyID0gX2NvbnN0cmFpbnQuYm9keTI7XHJcblxyXG4gICAgICAgIGNvbnN0IGZwMSA9XHJcbiAgICAgICAgICBib2R5MSA9PT0gX2JvZHkxXHJcbiAgICAgICAgICAgID8gKCkgPT4gdmVjLmRvdChjb25zdHJhaW50LkpNWzBdLCBfY29uc3RyYWludC5KWzBdKVxyXG4gICAgICAgICAgICA6ICgpID0+IDA7XHJcbiAgICAgICAgY29uc3QgZnAyID1cclxuICAgICAgICAgIGJvZHkyID09PSBfYm9keTJcclxuICAgICAgICAgICAgPyAoKSA9PiB2ZWMuZG90KGNvbnN0cmFpbnQuSk1bMl0sIF9jb25zdHJhaW50LkpbMl0pXHJcbiAgICAgICAgICAgIDogKCkgPT4gMDtcclxuICAgICAgICBjb25zdCBmcDMgPVxyXG4gICAgICAgICAgYm9keTEgPT09IF9ib2R5MlxyXG4gICAgICAgICAgICA/ICgpID0+IHZlYy5kb3QoY29uc3RyYWludC5KTVswXSwgX2NvbnN0cmFpbnQuSlsyXSlcclxuICAgICAgICAgICAgOiAoKSA9PiAwO1xyXG4gICAgICAgIGNvbnN0IGZwNCA9XHJcbiAgICAgICAgICBib2R5MiA9PT0gX2JvZHkxXHJcbiAgICAgICAgICAgID8gKCkgPT4gdmVjLmRvdChjb25zdHJhaW50LkpNWzJdLCBfY29uc3RyYWludC5KWzBdKVxyXG4gICAgICAgICAgICA6ICgpID0+IDA7XHJcbiAgICAgICAgY29uc3QgZjEgPVxyXG4gICAgICAgICAgYm9keTEgPT09IF9ib2R5MVxyXG4gICAgICAgICAgICA/ICgpID0+XHJcbiAgICAgICAgICAgICAgICB2ZWMuZG90KGNvbnN0cmFpbnQuSk1bMF0sIF9jb25zdHJhaW50LkpbMF0pICtcclxuICAgICAgICAgICAgICAgIHZlYy5kb3QoY29uc3RyYWludC5KTVsxXSwgX2NvbnN0cmFpbnQuSlsxXSlcclxuICAgICAgICAgICAgOiAoKSA9PiAwO1xyXG4gICAgICAgIGNvbnN0IGYyID1cclxuICAgICAgICAgIGJvZHkyID09PSBfYm9keTJcclxuICAgICAgICAgICAgPyAoKSA9PlxyXG4gICAgICAgICAgICAgICAgdmVjLmRvdChjb25zdHJhaW50LkpNWzJdLCBfY29uc3RyYWludC5KWzJdKSArXHJcbiAgICAgICAgICAgICAgICB2ZWMuZG90KGNvbnN0cmFpbnQuSk1bM10sIF9jb25zdHJhaW50LkpbM10pXHJcbiAgICAgICAgICAgIDogKCkgPT4gMDtcclxuICAgICAgICBjb25zdCBmMyA9XHJcbiAgICAgICAgICBib2R5MSA9PT0gX2JvZHkyXHJcbiAgICAgICAgICAgID8gKCkgPT5cclxuICAgICAgICAgICAgICAgIHZlYy5kb3QoY29uc3RyYWludC5KTVswXSwgX2NvbnN0cmFpbnQuSlsyXSkgK1xyXG4gICAgICAgICAgICAgICAgdmVjLmRvdChjb25zdHJhaW50LkpNWzFdLCBfY29uc3RyYWludC5KWzNdKVxyXG4gICAgICAgICAgICA6ICgpID0+IDA7XHJcbiAgICAgICAgY29uc3QgZjQgPVxyXG4gICAgICAgICAgYm9keTIgPT09IF9ib2R5MVxyXG4gICAgICAgICAgICA/ICgpID0+XHJcbiAgICAgICAgICAgICAgICB2ZWMuZG90KGNvbnN0cmFpbnQuSk1bMl0sIF9jb25zdHJhaW50LkpbMF0pICtcclxuICAgICAgICAgICAgICAgIHZlYy5kb3QoY29uc3RyYWludC5KTVszXSwgX2NvbnN0cmFpbnQuSlsxXSlcclxuICAgICAgICAgICAgOiAoKSA9PiAwO1xyXG5cclxuICAgICAgICB0aGlzLkpNSltrICsgal0gPSAoKSA9PiBmMSgpICsgZjIoKSArIGYzKCkgKyBmNCgpO1xyXG4gICAgICAgIHRoaXMuSk1KcFtrICsgal0gPSAoKSA9PiBmcDEoKSArIGZwMigpICsgZnAzKCkgKyBmcDQoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgICB2ZWMuZG90KEpbMF0sIGJvZHkxLnZlbG9jaXR5KSArXHJcbiAgICAgICAgdmVjLmRvdChKWzFdLCBib2R5MS5hbmd1bGFyVikgK1xyXG4gICAgICAgIHZlYy5kb3QoSlsyXSwgYm9keTIudmVsb2NpdHkpICtcclxuICAgICAgICB2ZWMuZG90KEpbM10sIGJvZHkyLmFuZ3VsYXJWKTtcclxuICAgICAgdGhpcy5KVltpXSA9IChkZWx0YVRpbWUpID0+XHJcbiAgICAgICAgLWNvbnN0cmFpbnQucmVsYXRpdmVWZWxvY2l0eU5vcm1hbFByb2plY3Rpb24gK1xyXG4gICAgICAgIChNYXRoLm1heCgwLCBjb25zdHJhaW50LnBlbkRlcHRoIC0gY29uc3RyYWludC50cmVzaG9sZCkgLyBkZWx0YVRpbWUpICpcclxuICAgICAgICAgIGNvbnN0cmFpbnQuYmlhc0ZhY3RvcjsgLy8rIGIqIDAuMTI1O1xyXG5cclxuICAgICAgdGhpcy5KcFZbaV0gPSAoKSA9PiAtdmVjLmRvdChKWzBdLCBib2R5MS5wc2V1ZG9WZWxvY2l0eSkgLVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVjLmRvdChKWzFdLCBib2R5MS5wc2V1ZG9Bbmd1bGFyVikgLVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVjLmRvdChKWzJdLCBib2R5Mi5wc2V1ZG9WZWxvY2l0eSkgLVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWMuZG90KEpbM10sIGJvZHkyLnBzZXVkb0FuZ3VsYXJWKSAtIGNvbnN0cmFpbnQuYmlhcy9kZWx0YVRpbWUgXHJcbiAgICAgIHRoaXMuSnBWW2ldID0gKGRlbHRhVGltZSkgPT5cclxuICAgICAgICAoTWF0aC5tYXgoMCwgY29uc3RyYWludC5wZW5EZXB0aCAtIGNvbnN0cmFpbnQudHJlc2hvbGQpIC8gZGVsdGFUaW1lKSAqXHJcbiAgICAgICAgY29uc3RyYWludC5wc2V1ZG9CaWFzRmFjdG9yO1xyXG4gICAgfSovXHJcbiAgfVxyXG4gIC8vSiAqIFZlbFxyXG4gIFxyXG4gIHNvbHZlUEdTKGRlbHRhVGltZSl7XHJcblxyXG4gICAgXHJcbiAgICBjb25zdCB7Sm1hcCwgYm9kaWVzTWFwLCBjb25zdHJhaW50c30gPSB0aGlzXHJcbiAgICBjb25zdCBudW1Cb2RpZXMgPSBib2RpZXNNYXAuc2l6ZVxyXG4gICAgY29uc3QgbiA9IGNvbnN0cmFpbnRzLmxlbmd0aFxyXG4gICAgY29uc3QgZCA9IFtdXHJcbiAgICBcclxuICAgIGNvbnN0IGxhbWJkYTAgPSBuZXcgQXJyYXkobikuZmlsbCgwKVxyXG5cclxuXHJcbiAgICAvL0JKbGFtYmRhXHJcbiAgICBcclxuICAgIGNvbnN0IEJsID0gbmV3IEFycmF5KG51bUJvZGllcykuZmlsbChbMCwwLDAsMCwwLDBdKVxyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IG47IGkrKyl7XHJcbiAgICAgIGNvbnN0IGIxID0gSm1hcFtpICogMiBdXHJcbiAgICAgIGNvbnN0IGIyID0gSm1hcFtpICogMiArIDFdIFxyXG4gICAgXHJcbiAgICAgXHJcbiAgICAgIFxyXG4gICAgICBCbFtiMV0gPSB2ZWM2LnN1bSh2ZWM2LnNjYWxlKGNvbnN0cmFpbnRzW2ldLkJbMF0sIGxhbWJkYTBbaV0pLCBCbFtiMV0pXHJcbiAgICAgIFxyXG4gICAgICBcclxuICAgICAgQmxbYjJdID0gdmVjNi5zdW0odmVjNi5zY2FsZShjb25zdHJhaW50c1tpXS5CWzFdLCBsYW1iZGEwW2ldKSwgQmxbYjJdKVxyXG4gICAgXHJcbiAgICAgIFxyXG4gICAgfVxyXG4gIFxyXG4gICAgLy9QR1NcclxuIFxyXG4gICAgXHJcbiAgICBjb25zdCBsYW1iZGEgPSBbLi4ubGFtYmRhMF1cclxuICAgIGZvcihsZXQgaSA9IDA7IGk8IG47IGkrKyl7XHJcbiAgICAgIGQucHVzaChjb25zdHJhaW50c1tpXS5lZmZNYXNzKVxyXG4gICAgfVxyXG4gICAgbGV0IGZsYWcgPSB0cnVlXHJcbiAgICBsZXQgbnVtSXRlciA9IDE1XHJcblxyXG4gICAgY29uc3QgZGVsdGFMYW1iZGEgPSBuZXcgQXJyYXkobikuZmlsbCgwKVxyXG4gICAgd2hpbGUobnVtSXRlciA+IDAgKXtcclxuICAgICAgZm9yKGxldCBpID0gMDsgaSA8IG47IGkrKyl7XHJcbiAgICAgICAgY29uc3QgYyA9IGNvbnN0cmFpbnRzW2ldXHJcbiAgICAgICAgY29uc3QgSiA9IGMuX0pcclxuICAgICAgICBjb25zdCBiMSA9IEptYXBbaSAqIDIgXVxyXG4gICAgICAgIGNvbnN0IGIyID0gSm1hcFtpICogMiArIDFdXHJcbiAgICAgICBcclxuICAgICAgICBkZWx0YUxhbWJkYVtpXSA9IChjLmJpYXMgLSB2ZWM2LmRvdChKWzBdLCBCbFtiMV0pIC0gdmVjNi5kb3QoSlsxXSwgQmxbYjJdKSkgLyBkW2ldXHJcbiAgICAgICAgXHJcbiAgICAgICAgbGFtYmRhMFtpXSA9IGxhbWJkYVtpXVxyXG4gICAgICAgIGxhbWJkYVtpXSA9IE1hdGgubWF4KGMubGFtYmRhTWluLCBNYXRoLm1pbihsYW1iZGEwW2ldICsgZGVsdGFMYW1iZGFbaV0sIGMubGFtYmRhTWF4KSlcclxuICAgICAgICBcclxuICAgICAgICBkZWx0YUxhbWJkYVtpXSA9IGxhbWJkYVtpXSAtIGxhbWJkYTBbaV1cclxuICAgICAgICBcclxuICAgICAgICBCbFtiMV0gPSB2ZWM2LnN1bShCbFtiMV0sIHZlYzYuc2NhbGUoYy5CWzBdLCBkZWx0YUxhbWJkYVtpXSkpXHJcbiAgICAgICAgQmxbYjJdID0gdmVjNi5zdW0oQmxbYjJdLCB2ZWM2LnNjYWxlKGMuQlsxXSwgZGVsdGFMYW1iZGFbaV0pKVxyXG4gICAgICBcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgbnVtSXRlci0tXHJcbiAgICB9XHJcbiAgIFxyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IG47IGkrKyl7XHJcbiAgICAgIGNvbnN0cmFpbnRzW2ldLmFwcGx5UmVzb2x2aW5nSW1wdWxzZShsYW1iZGFbaV0pXHJcbiAgICB9XHJcbiAgICByZXR1cm4gbGFtYmRhXHJcbiAgfVxyXG4gIHVwZGF0ZUVxdWF0aW9ucyhkZWx0YVRpbWUpe1xyXG4gICAgY29uc3Qge2NvbnN0cmFpbnRzfSA9IHRoaXNcclxuICAgIGNvbnN0IG4gPSBjb25zdHJhaW50cy5sZW5ndGhcclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBuOyBpICsrKXtcclxuICAgICAgY29uc3RyYWludHNbaV0udXBkYXRlTGVmdFBhcnQoZGVsdGFUaW1lKVxyXG4gICAgICBjb25zdHJhaW50c1tpXS51cGRhdGVSaWdodFBhcnQoZGVsdGFUaW1lKVxyXG4gICAgfVxyXG4gIH1cclxuICBhcHBseVJlc29sdmluZ0ltcHVsc2VzKGxhbWJkYSkge1xyXG4gICAgZm9yIChsZXQgaSA9IDAsIG4gPSB0aGlzLmNvbnN0cmFpbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICB0aGlzLmNvbnN0cmFpbnRzW2ldLmFwcGx5UmVzb2x2aW5nSW1wdWxzZShsYW1iZGFbaV0pO1xyXG4gICAgfVxyXG4gIH1cclxuICBhcHBseVJlc29sdmluZ1BzZXVkb0ltcHVsc2VzKGxhbWJkYSkge1xyXG4gICAgZm9yIChsZXQgaSA9IDAsIG4gPSB0aGlzLmNvbnN0cmFpbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICB0aGlzLmNvbnN0cmFpbnRzW2ldLmFwcGx5UmVzb2x2aW5nUHNldWRvSW1wdWxzZShsYW1iZGFbaV0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgQUFCQiB9IGZyb20gXCJtYXRoXCI7XHJcbmNvbnN0IGdldEJvdW5kQWFiYiA9IChhYWJiMSwgYWFiYjIpID0+IHtcclxuICBpZiAoIWFhYmIxIHx8ICFhYWJiMikge1xyXG4gICAgcmV0dXJuIDA7XHJcbiAgfVxyXG4gIGNvbnN0IHgxID0gYWFiYjEubWluWzBdIDwgYWFiYjIubWluWzBdID8gYWFiYjEubWluWzBdIDogYWFiYjIubWluWzBdO1xyXG4gIGNvbnN0IHgyID0gYWFiYjEubWF4WzBdID4gYWFiYjIubWF4WzBdID8gYWFiYjEubWF4WzBdIDogYWFiYjIubWF4WzBdO1xyXG4gIGNvbnN0IHkxID0gYWFiYjEubWluWzFdIDwgYWFiYjIubWluWzFdID8gYWFiYjEubWluWzFdIDogYWFiYjIubWluWzFdO1xyXG4gIGNvbnN0IHkyID0gYWFiYjEubWF4WzFdID4gYWFiYjIubWF4WzFdID8gYWFiYjEubWF4WzFdIDogYWFiYjIubWF4WzFdO1xyXG4gIGNvbnN0IHoxID0gYWFiYjEubWluWzJdIDwgYWFiYjIubWluWzJdID8gYWFiYjEubWluWzJdIDogYWFiYjIubWluWzJdO1xyXG4gIGNvbnN0IHoyID0gYWFiYjEubWF4WzJdID4gYWFiYjIubWF4WzJdID8gYWFiYjEubWF4WzJdIDogYWFiYjIubWF4WzJdO1xyXG4gIHJldHVybiBuZXcgQUFCQihbeDEsIHkxLCB6MV0sIFt4MiwgeTIsIHoyXSk7XHJcbn07XHJcbmNvbnN0IGlzQ29sbGlkZSA9IChhYWJiMSwgYWFiYjIpID0+IHtcclxuICBpZiAoXHJcbiAgICBhYWJiMS5taW5bMF0gPD0gYWFiYjIubWF4WzBdICYmXHJcbiAgICBhYWJiMS5tYXhbMF0gPj0gYWFiYjIubWluWzBdICYmXHJcbiAgICBhYWJiMS5taW5bMV0gPD0gYWFiYjIubWF4WzFdICYmXHJcbiAgICBhYWJiMS5tYXhbMV0gPj0gYWFiYjIubWluWzFdICYmXHJcbiAgICBhYWJiMS5taW5bMl0gPD0gYWFiYjIubWF4WzJdICYmXHJcbiAgICBhYWJiMS5tYXhbMl0gPj0gYWFiYjIubWluWzJdXHJcbiAgKSB7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbiAgcmV0dXJuIGZhbHNlO1xyXG59O1xyXG5jb25zdCBnZXRTaXplID0gKGFhYmIpID0+IHtcclxuICBjb25zdCBhcmVhID1cclxuICAgIE1hdGguYWJzKGFhYmIubWF4WzBdIC0gYWFiYi5taW5bMF0pICpcclxuICAgIE1hdGguYWJzKGFhYmIubWF4WzFdIC0gYWFiYi5taW5bMV0pICpcclxuICAgIE1hdGguYWJzKGFhYmIubWF4WzJdIC0gYWFiYi5taW5bMl0pO1xyXG4gIHJldHVybiBhcmVhO1xyXG59O1xyXG5jbGFzcyBOb2RlIHtcclxuICBjb25zdHJ1Y3RvcihhYWJiLCBpc0xlYWYsIGdhbWVPYmplY3QpIHtcclxuICAgIHRoaXMuYWFiYiA9IGFhYmI7XHJcbiAgICB0aGlzLmlzTGVhZiA9IGlzTGVhZjtcclxuICAgIHRoaXMucGFyZW50ID0gbnVsbDtcclxuXHJcbiAgICB0aGlzLmdhbWVPYmplY3QgPSBnYW1lT2JqZWN0O1xyXG4gICAgdGhpcy5pc0NoZWNrZWQgPSBmYWxzZTtcclxuICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJlZSB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnJvb3QgPSBudWxsO1xyXG4gICAgdGhpcy5sZWFmcyA9IHt9O1xyXG4gICAgdGhpcy51bnVzZWRJbmRleGVzID0gW107XHJcbiAgfVxyXG4gIHNldFVuY2hlY2tlZCgpIHtcclxuICAgIGNvbnN0IHN0YWNrID0gW3RoaXMucm9vdF07XHJcblxyXG4gICAgd2hpbGUgKHN0YWNrLmxlbmd0aCAhPSAwKSB7XHJcbiAgICAgIGNvbnN0IG5vZGUgPSBzdGFjay5wb3AoKTtcclxuICAgICAgaWYgKG5vZGUuaXNMZWFmKSB7XHJcbiAgICAgICAgbm9kZS5pc0NoZWNrZWQgPSBmYWxzZTtcclxuICAgICAgICBjb250aW51ZTtcclxuICAgICAgfVxyXG4gICAgICBpZiAobm9kZS5jaGlsZDEpIHN0YWNrLnB1c2gobm9kZS5jaGlsZDEpO1xyXG4gICAgICBpZiAobm9kZS5jaGlsZDIpIHN0YWNrLnB1c2gobm9kZS5jaGlsZDIpO1xyXG4gICAgfVxyXG4gIH1cclxuICBnZXRCZXN0U2libGluZyhsZWFmKSB7XHJcbiAgICBsZXQgcG90ZW50aWFsID0gdGhpcy5yb290O1xyXG4gICAgd2hpbGUgKCFwb3RlbnRpYWwuaXNMZWFmKSB7XHJcbiAgICAgIGNvbnN0IHNpemUgPSBnZXRTaXplKHBvdGVudGlhbC5hYWJiKTtcclxuICAgICAgY29uc3QgY29tYmluZWRBQUJCID0gZ2V0Qm91bmRBYWJiKHBvdGVudGlhbC5hYWJiLCBsZWFmLmFhYmIpO1xyXG4gICAgICBjb25zdCBjb21iaW5lZFNpemUgPSBnZXRTaXplKGNvbWJpbmVkQUFCQik7XHJcbiAgICAgIGxldCBjb3N0ID0gY29tYmluZWRTaXplO1xyXG4gICAgICBsZXQgaW5oZXJDb3N0ID0gY29tYmluZWRTaXplIC0gc2l6ZTtcclxuXHJcbiAgICAgIGxldCBjb3N0MTtcclxuICAgICAgaWYgKHBvdGVudGlhbC5jaGlsZDEuaXNMZWFmKSB7XHJcbiAgICAgICAgY29zdDEgPSBnZXRTaXplKHBvdGVudGlhbC5jaGlsZDEuYWFiYikgKyBpbmhlckNvc3Q7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29zdDEgPVxyXG4gICAgICAgICAgZ2V0U2l6ZShnZXRCb3VuZEFhYmIobGVhZi5hYWJiLCBwb3RlbnRpYWwuY2hpbGQxLmFhYmIpKSAtXHJcbiAgICAgICAgICBnZXRTaXplKHBvdGVudGlhbC5jaGlsZDEuYWFiYikgK1xyXG4gICAgICAgICAgaW5oZXJDb3N0O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBsZXQgY29zdDI7XHJcbiAgICAgIGlmIChwb3RlbnRpYWwuY2hpbGQyLmlzTGVhZikge1xyXG4gICAgICAgIGNvc3QyID0gZ2V0U2l6ZShwb3RlbnRpYWwuY2hpbGQyLmFhYmIpICsgaW5oZXJDb3N0O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvc3QyID1cclxuICAgICAgICAgIGdldFNpemUoZ2V0Qm91bmRBYWJiKGxlYWYuYWFiYiwgcG90ZW50aWFsLmNoaWxkMi5hYWJiKSkgLVxyXG4gICAgICAgICAgZ2V0U2l6ZShwb3RlbnRpYWwuY2hpbGQyLmFhYmIpICtcclxuICAgICAgICAgIGluaGVyQ29zdDtcclxuICAgICAgfVxyXG4gICAgICBpZiAoY29zdCA8IGNvc3QxICYmIGNvc3QgPCBjb3N0MikgcmV0dXJuIHBvdGVudGlhbDtcclxuICAgICAgaWYgKGNvc3QxIDwgY29zdDIpIHtcclxuICAgICAgICBwb3RlbnRpYWwgPSBwb3RlbnRpYWwuY2hpbGQxO1xyXG4gICAgICB9IGVsc2UgcG90ZW50aWFsID0gcG90ZW50aWFsLmNoaWxkMjtcclxuICAgIH1cclxuICAgIHJldHVybiBwb3RlbnRpYWw7XHJcbiAgfVxyXG4gIGluc2VydExlYWYoYWFiYiwgZ2FtZU9iamVjdCkge1xyXG4gICAgY29uc3QgbGVhZiA9IG5ldyBOb2RlKGFhYmIsIHRydWUsIGdhbWVPYmplY3QpO1xyXG4gICAgaWYgKHRoaXMucm9vdCA9PT0gbnVsbCkge1xyXG4gICAgICB0aGlzLnJvb3QgPSBsZWFmO1xyXG4gICAgICB0aGlzLnJvb3QucGFyZW50ID0gbnVsbDtcclxuICAgICAgcmV0dXJuIGxlYWY7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2libGluZyA9IHRoaXMuZ2V0QmVzdFNpYmxpbmcobGVhZik7XHJcbiAgICBjb25zdCBvbGRQYXJlbnQgPSBzaWJsaW5nLnBhcmVudDtcclxuICAgIGNvbnN0IG5ld1BhcmVudCA9IG5ldyBOb2RlKGxlYWYuYWFiYiwgZmFsc2UpO1xyXG4gICAgbmV3UGFyZW50LnBhcmVudCA9IG9sZFBhcmVudDtcclxuXHJcbiAgICBuZXdQYXJlbnQuYWFiYiA9IGdldEJvdW5kQWFiYihsZWFmLmFhYmIsIHNpYmxpbmcuYWFiYik7XHJcblxyXG4gICAgaWYgKG9sZFBhcmVudCkge1xyXG4gICAgICBpZiAob2xkUGFyZW50LmNoaWxkMSA9PT0gc2libGluZykgb2xkUGFyZW50LmNoaWxkMSA9IG5ld1BhcmVudDtcclxuICAgICAgZWxzZSBvbGRQYXJlbnQuY2hpbGQyID0gbmV3UGFyZW50O1xyXG5cclxuICAgICAgbmV3UGFyZW50LmNoaWxkMSA9IHNpYmxpbmc7XHJcbiAgICAgIG5ld1BhcmVudC5jaGlsZDIgPSBsZWFmO1xyXG5cclxuICAgICAgc2libGluZy5wYXJlbnQgPSBuZXdQYXJlbnQ7XHJcbiAgICAgIGxlYWYucGFyZW50ID0gbmV3UGFyZW50O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbmV3UGFyZW50LmNoaWxkMSA9IHNpYmxpbmc7XHJcbiAgICAgIG5ld1BhcmVudC5jaGlsZDIgPSBsZWFmO1xyXG5cclxuICAgICAgc2libGluZy5wYXJlbnQgPSBuZXdQYXJlbnQ7XHJcbiAgICAgIGxlYWYucGFyZW50ID0gbmV3UGFyZW50O1xyXG4gICAgICB0aGlzLnJvb3QgPSBuZXdQYXJlbnQ7XHJcbiAgICB9XHJcbiAgICBsZXQgaW5kZXggPSBsZWFmLnBhcmVudDtcclxuXHJcbiAgICB3aGlsZSAoaW5kZXgpIHtcclxuICAgICAgaW5kZXggPSB0aGlzLnJlYmFsYW5jZShpbmRleCk7XHJcbiAgICAgIGluZGV4ID0gaW5kZXgucGFyZW50O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGxlYWY7XHJcbiAgfVxyXG4gIGdldENvbGxpc2lvbnMobGVhZikge1xyXG4gICAgY29uc3QgY29scyA9IFtdO1xyXG4gICAgY29uc3QgaXRlciA9IChfbm9kZSkgPT4ge1xyXG4gICAgICBpZiAoIV9ub2RlKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChfbm9kZSA9PT0gbGVhZikge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBpZiAoaXNDb2xsaWRlKGxlYWYuYWFiYiwgX25vZGUuYWFiYikpIHtcclxuICAgICAgICBpZiAoX25vZGUuaXNMZWFmICYmICFfbm9kZS5pc0NoZWNrZWQpIHtcclxuICAgICAgICAgIGNvbHMucHVzaChfbm9kZS5nYW1lT2JqZWN0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaXRlcihfbm9kZS5jaGlsZDEpO1xyXG4gICAgICAgIGl0ZXIoX25vZGUuY2hpbGQyKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBpdGVyKHRoaXMucm9vdCk7XHJcblxyXG4gICAgcmV0dXJuIGNvbHM7XHJcbiAgfVxyXG4gIHJlbW92ZUxlYWYobGVhZikge1xyXG4gICAgaWYgKGxlYWYgPT09IHRoaXMucm9vdCkge1xyXG4gICAgICB0aGlzLnJvb3QgPSBudWxsO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBwYXJlbnQgPSBsZWFmLnBhcmVudDtcclxuICAgIGNvbnN0IGdyYW5kUGFyZW50ID0gcGFyZW50ID8gcGFyZW50LnBhcmVudCA6IG51bGw7XHJcbiAgICBsZXQgc2libGluZztcclxuICAgIGlmIChwYXJlbnQuY2hpbGQxID09PSBsZWFmKSBzaWJsaW5nID0gcGFyZW50LmNoaWxkMjtcclxuICAgIGVsc2Ugc2libGluZyA9IHBhcmVudC5jaGlsZDE7XHJcblxyXG4gICAgaWYgKGdyYW5kUGFyZW50KSB7XHJcbiAgICAgIGlmIChncmFuZFBhcmVudC5jaGlsZDEgPT09IHBhcmVudCkgZ3JhbmRQYXJlbnQuY2hpbGQxID0gc2libGluZztcclxuICAgICAgZWxzZSBncmFuZFBhcmVudC5jaGlsZDIgPSBzaWJsaW5nO1xyXG5cclxuICAgICAgc2libGluZy5wYXJlbnQgPSBncmFuZFBhcmVudDtcclxuXHJcbiAgICAgIGxldCBpbmRleCA9IGdyYW5kUGFyZW50O1xyXG4gICAgICB3aGlsZSAoaW5kZXgpIHtcclxuICAgICAgICBpbmRleCA9IHRoaXMucmViYWxhbmNlKGluZGV4KTtcclxuXHJcbiAgICAgICAgaW5kZXggPSBpbmRleC5wYXJlbnQ7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucm9vdCA9IHNpYmxpbmc7XHJcbiAgICAgIHNpYmxpbmcucGFyZW50ID0gbnVsbDtcclxuICAgIH1cclxuICB9XHJcbiAgcmViYWxhbmNlKGxlYWYpIHtcclxuICAgIGlmICghbGVhZikge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGlmIChsZWFmLmlzTGVhZiB8fCB0aGlzLmdldEhlaWdodChsZWFmKSA8IDIpIHtcclxuICAgICAgbGVhZi5hYWJiID0gZ2V0Qm91bmRBYWJiKGxlYWYuY2hpbGQxLmFhYmIsIGxlYWYuY2hpbGQyLmFhYmIpO1xyXG4gICAgICByZXR1cm4gbGVhZjtcclxuICAgIH1cclxuICAgIGNvbnN0IGNoaWxkMSA9IGxlYWYuY2hpbGQxO1xyXG4gICAgY29uc3QgY2hpbGQyID0gbGVhZi5jaGlsZDI7XHJcbiAgICBjb25zdCBiYWxhbmNlID0gdGhpcy5nZXRIZWlnaHQoY2hpbGQyKSAtIHRoaXMuZ2V0SGVpZ2h0KGNoaWxkMSk7XHJcblxyXG4gICAgaWYgKGJhbGFuY2UgPiAxKSB7XHJcbiAgICAgIGNvbnN0IGNoaWxkMkNoaWxkMSA9IGNoaWxkMi5jaGlsZDE7XHJcbiAgICAgIGNvbnN0IGNoaWxkMkNoaWxkMiA9IGNoaWxkMi5jaGlsZDI7XHJcblxyXG4gICAgICBjaGlsZDIuY2hpbGQxID0gbGVhZjtcclxuICAgICAgY2hpbGQyLnBhcmVudCA9IGxlYWYucGFyZW50O1xyXG4gICAgICBsZWFmLnBhcmVudCA9IGNoaWxkMjtcclxuICAgICAgaWYgKGNoaWxkMi5wYXJlbnQgIT0gbnVsbCkge1xyXG4gICAgICAgIGlmIChjaGlsZDIucGFyZW50LmNoaWxkMSA9PT0gbGVhZikge1xyXG4gICAgICAgICAgY2hpbGQyLnBhcmVudC5jaGlsZDEgPSBjaGlsZDI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNoaWxkMi5wYXJlbnQuY2hpbGQyID0gY2hpbGQyO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHRoaXMucm9vdCA9IGNoaWxkMjtcclxuICAgICAgaWYgKHRoaXMuZ2V0SGVpZ2h0KGNoaWxkMkNoaWxkMSkgPiB0aGlzLmdldEhlaWdodChjaGlsZDJDaGlsZDIpKSB7XHJcbiAgICAgICAgY2hpbGQyLmNoaWxkMiA9IGNoaWxkMkNoaWxkMTtcclxuICAgICAgICBsZWFmLmNoaWxkMiA9IGNoaWxkMkNoaWxkMjtcclxuICAgICAgICBjaGlsZDJDaGlsZDIucGFyZW50ID0gbGVhZjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBsZWFmLmNoaWxkMiA9IGNoaWxkMkNoaWxkMTtcclxuICAgICAgICBjaGlsZDJDaGlsZDEucGFyZW50ID0gbGVhZjtcclxuICAgICAgfVxyXG4gICAgICBsZWFmLmFhYmIgPSBnZXRCb3VuZEFhYmIobGVhZi5jaGlsZDEuYWFiYiwgbGVhZi5jaGlsZDIuYWFiYik7XHJcbiAgICAgIGNoaWxkMi5hYWJiID0gZ2V0Qm91bmRBYWJiKGNoaWxkMi5jaGlsZDEuYWFiYiwgY2hpbGQyLmNoaWxkMi5hYWJiKTtcclxuXHJcbiAgICAgIHJldHVybiBjaGlsZDI7XHJcbiAgICB9XHJcbiAgICBpZiAoYmFsYW5jZSA8IC0xKSB7XHJcbiAgICAgIGNvbnN0IGNoaWxkMUNoaWxkMSA9IGNoaWxkMS5jaGlsZDE7XHJcbiAgICAgIGNvbnN0IGNoaWxkMUNoaWxkMiA9IGNoaWxkMS5jaGlsZDI7XHJcblxyXG4gICAgICBjaGlsZDEuY2hpbGQxID0gbGVhZjtcclxuICAgICAgY2hpbGQxLnBhcmVudCA9IGxlYWYucGFyZW50O1xyXG4gICAgICBsZWFmLnBhcmVudCA9IGNoaWxkMTtcclxuXHJcbiAgICAgIGlmIChjaGlsZDEucGFyZW50ICE9IG51bGwpIHtcclxuICAgICAgICBpZiAoY2hpbGQxLnBhcmVudC5jaGlsZDEgPT09IGxlYWYpIHtcclxuICAgICAgICAgIGNoaWxkMS5wYXJlbnQuY2hpbGQxID0gY2hpbGQxO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjaGlsZDEucGFyZW50LmNoaWxkMiA9IGNoaWxkMTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB0aGlzLnJvb3QgPSBjaGlsZDE7XHJcbiAgICAgIGlmICh0aGlzLmdldEhlaWdodChjaGlsZDFDaGlsZDEpID4gdGhpcy5nZXRIZWlnaHQoY2hpbGQxQ2hpbGQyKSkge1xyXG4gICAgICAgIGNoaWxkMS5jaGlsZDIgPSBjaGlsZDFDaGlsZDE7XHJcbiAgICAgICAgbGVhZi5jaGlsZDEgPSBjaGlsZDFDaGlsZDI7XHJcbiAgICAgICAgY2hpbGQxQ2hpbGQyLnBhcmVudCA9IGxlYWY7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY2hpbGQxLmNoaWxkMiA9IGNoaWxkMUNoaWxkMjtcclxuICAgICAgICBsZWFmLmNoaWxkMSA9IGNoaWxkMUNoaWxkMTtcclxuICAgICAgICBjaGlsZDFDaGlsZDEucGFyZW50ID0gbGVhZjtcclxuICAgICAgfVxyXG4gICAgICBsZWFmLmFhYmIgPSBnZXRCb3VuZEFhYmIobGVhZi5jaGlsZDEuYWFiYiwgbGVhZi5jaGlsZDIuYWFiYik7XHJcbiAgICAgIGNoaWxkMS5hYWJiID0gZ2V0Qm91bmRBYWJiKGNoaWxkMS5jaGlsZDEuYWFiYiwgY2hpbGQxLmNoaWxkMi5hYWJiKTtcclxuXHJcbiAgICAgIHJldHVybiBjaGlsZDE7XHJcbiAgICB9XHJcbiAgICBsZWFmLmFhYmIgPSBnZXRCb3VuZEFhYmIobGVhZi5jaGlsZDEuYWFiYiwgbGVhZi5jaGlsZDIuYWFiYik7XHJcbiAgICByZXR1cm4gbGVhZjtcclxuICB9XHJcbiAgdG9BcnJheShpKSB7XHJcbiAgICBjb25zdCBpdGVyID0gKGxlYWYsIGxldmVsKSA9PiB7XHJcbiAgICAgIGlmICghbGVhZikge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChsZWFmLmlzTGVhZikgcmV0dXJuIGxlYWYub2JqZWN0TGluay5uYW1lO1xyXG4gICAgICBlbHNlIHJldHVybiBbaXRlcihsZWFmLmNoaWxkMSksIGl0ZXIobGVhZi5jaGlsZDIpXTtcclxuICAgIH07XHJcbiAgICBpZiAoIWkpIGkgPSB0aGlzLnJvb3Q7XHJcbiAgICByZXR1cm4gaXRlcihpKTtcclxuICB9XHJcbiAgZ2V0SGVpZ2h0KGxlYWYpIHtcclxuICAgIGNvbnN0IGl0ZXIgPSAobGVhZiwgbGV2ZWwpID0+IHtcclxuICAgICAgaWYgKCFsZWFmKSB7XHJcbiAgICAgICAgcmV0dXJuIGxldmVsO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBsZXQgaDEgPSBpdGVyKGxlYWYuY2hpbGQxLCBsZXZlbCArIDEpO1xyXG4gICAgICBsZXQgaDIgPSBpdGVyKGxlYWYuY2hpbGQyLCBsZXZlbCArIDEpO1xyXG4gICAgICByZXR1cm4gaDEgPiBoMiA/IGgxIDogaDI7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGl0ZXIobGVhZiwgMSk7XHJcbiAgfVxyXG4gIGdldE5vZGVzKCkge1xyXG4gICAgY29uc3QgaXRlciA9IChub2RlLCBhcnIpID0+IHtcclxuICAgICAgYXJyLnB1c2gobm9kZSk7XHJcbiAgICAgIGlmIChub2RlLmNoaWxkMSkgaXRlcihub2RlLmNoaWxkMSwgYXJyKTtcclxuICAgICAgaWYgKG5vZGUuY2hpbGQyKSBpdGVyKG5vZGUuY2hpbGQyLCBhcnIpO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGEgPSBbXTtcclxuICAgIGl0ZXIodGhpcy5yb290LCBhKTtcclxuICAgIHJldHVybiBhO1xyXG4gIH1cclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgbTQsIHZlY3RvciB9IGZyb20gXCJtYXRoXCI7XHJcblxyXG5pbXBvcnQge1xyXG4gIEFycmF5RGF0YUZyb21HbHRmLFxyXG4gIFByaW1pdGl2ZVJlbmRlckluZm9Gcm9tQXJyYXlEYXRhLFxyXG4gIEVudGl0eURhdGFGcm9tR2x0ZixcclxuICBnZXRHbENvbnRleHQsXHJcbiAgcmVzaXplQ2FudmFzVG9EaXNwbGF5U2l6ZSxcclxuICBQcm9ncmFtSW5mbyxcclxuICBNZXNoUmVuZGVyZXIsXHJcbiAgRHJhd2VyLFxyXG4gIGNyZWF0ZUJveCxcclxuICBQcmltaXRpdmVSZW5kZXJlcixcclxuICBUZXh0dXJlLFxyXG4gIG1ha2VJbWdGcm9tU3ZnWG1sLFxyXG4gIG1ha2VTdHJpcGVJbWcsXHJcbiAgRW50aXR5LFxyXG4gIEdMVEYsXHJcbiAgR0xjb250ZXh0V3JhcHBlcixcclxuICBjcmVhdGVDb25lLFxyXG4gIGNyZWF0ZUNpcmNsZSxcclxuICBkZWZhdWx0U2hhZGVycyxcclxuICBwb2ludExpZ2h0U2hhZGVycyxcclxuICBjcmVhdGVTcGhlcmUsXHJcbiAgY3JlYXRlVHJ1bmNhdGVkQ29uZVxyXG59IGZyb20gXCJncmFwaGljc1wiO1xyXG5cclxuaW1wb3J0IE1vdXNlSW5wdXQgZnJvbSBcIi4vc3JjL21pc2MvbW91c2VJbnB1dFwiO1xyXG5pbXBvcnQgS2V5SW5wdXQgZnJvbSBcIi4vc3JjL21pc2Mva2V5SW5wdXRcIjtcclxuY29uc3QgbW91c2VJbnB1dCA9IG5ldyBNb3VzZUlucHV0KCk7XHJcblxyXG5tb3VzZUlucHV0Lmxpc3RlbigpO1xyXG5jb25zdCBrZXlJbnB1dCA9IG5ldyBLZXlJbnB1dCgpO1xyXG5rZXlJbnB1dC5saXN0ZW4oKTtcclxuY29uc3QgY29udGV4dCA9IG5ldyBHTGNvbnRleHRXcmFwcGVyKFwiY2FudmFzXCIpO1xyXG5jb25zdCBnbCA9IGNvbnRleHQuZ2V0Q29udGV4dCgpO1xyXG5jb250ZXh0LnJlc2l6ZUNhbnZhc1RvRGlzcGxheVNpemUoKTtcclxuY29uc3QgZHJhd2VyID0gbmV3IERyYXdlcigpO1xyXG5kcmF3ZXIuc2V0Q29udGV4dChjb250ZXh0KS51cGRhdGUzRFByb2plY3Rpb25NYXRyaXgoKTtcclxuXHJcbmNvbnN0IGRlZmF1bHRQcm9ncmFtSW5mbyA9IG5ldyBQcm9ncmFtSW5mbyhcclxuICBkZWZhdWx0U2hhZGVycy52ZXJ0LFxyXG4gIGRlZmF1bHRTaGFkZXJzLmZyYWdcclxuKTtcclxuY29uc3QgcG9pbnRMaWdodFByb2dyYW1JbmZvID0gbmV3IFByb2dyYW1JbmZvKFxyXG4gIHBvaW50TGlnaHRTaGFkZXJzLnZlcnQsXHJcbiAgcG9pbnRMaWdodFNoYWRlcnMuZnJhZ1xyXG4pO1xyXG5kZWZhdWx0UHJvZ3JhbUluZm8uc2V0Q29udGV4dChjb250ZXh0KS5jb21waWxlU2hhZGVycygpLmNyZWF0ZVVuaWZvcm1TZXR0ZXJzKCk7XHJcbnBvaW50TGlnaHRQcm9ncmFtSW5mb1xyXG4gIC5zZXRDb250ZXh0KGNvbnRleHQpXHJcbiAgLmNvbXBpbGVTaGFkZXJzKClcclxuICAuY3JlYXRlVW5pZm9ybVNldHRlcnMoKTtcclxuaW1wb3J0IHByb2cgZnJvbSBcIi4vc2hhZGVyXCI7XHJcbnByb2cuc2V0Q29udGV4dChjb250ZXh0KS5jb21waWxlU2hhZGVycygpLmNyZWF0ZVVuaWZvcm1TZXR0ZXJzKCk7XHJcbmNvbnN0IGJveCA9IG5ldyBQcmltaXRpdmVSZW5kZXJlcihjcmVhdGVCb3goMSwgMSwgMSkpO1xyXG5jb25zdCBzcGhlcmUgPSBuZXcgUHJpbWl0aXZlUmVuZGVyZXIoY3JlYXRlU3BoZXJlKDEsIDE1LCAxNSkpO1xyXG5jb25zdCBjaXJjbGUgPSBuZXcgUHJpbWl0aXZlUmVuZGVyZXIoY3JlYXRlQ2lyY2xlKDgsIDQpKTtcclxuY29uc3QgY3lsaW5kZXIgPSBuZXcgUHJpbWl0aXZlUmVuZGVyZXIoY3JlYXRlVHJ1bmNhdGVkQ29uZSgxLDEsMSw4LCAxKSlcclxuY29uc3QgcG9pbnRzID0gbmV3IFByaW1pdGl2ZVJlbmRlcmVyKHtcclxuICBtb2RlOiBnbC5QT0lOVFMsXHJcbiAgbnVtRWxlbWVudHM6IDIsXHJcbiAgb2Zmc2V0OiAwLFxyXG59KTtcclxuY29uc3QgbGluZSA9IG5ldyBQcmltaXRpdmVSZW5kZXJlcih7XHJcbiAgbW9kZTogZ2wuTElORVMsXHJcbiAgbnVtRWxlbWVudHM6IDIsXHJcbiAgb2Zmc2V0OiAwLFxyXG59KTtcclxuXHJcbmJveFxyXG4gIC5zZXRDb250ZXh0KGNvbnRleHQpXHJcbiAgLmNyZWF0ZVZBTygpXHJcbiAgLnNldERyYXdlcihkcmF3ZXIpXHJcbiAgLnNldFByb2dyYW1JbmZvKHBvaW50TGlnaHRQcm9ncmFtSW5mbylcclxuICAuY3JlYXRlR2VvbWV0cnlCdWZmZXJzKClcclxuICAuc2V0QXR0cmlidXRlcygpXHJcbiAgLnNldE1vZGUoMik7XHJcbmN5bGluZGVyXHJcbiAgLnNldENvbnRleHQoY29udGV4dClcclxuICAuY3JlYXRlVkFPKClcclxuICAuc2V0RHJhd2VyKGRyYXdlcilcclxuICAuc2V0UHJvZ3JhbUluZm8ocG9pbnRMaWdodFByb2dyYW1JbmZvKVxyXG4gIC5jcmVhdGVHZW9tZXRyeUJ1ZmZlcnMoKVxyXG4gIC5zZXRBdHRyaWJ1dGVzKClcclxuICAuc2V0TW9kZSgyKTtcclxuc3BoZXJlXHJcbiAgLnNldENvbnRleHQoY29udGV4dClcclxuICAuY3JlYXRlVkFPKClcclxuICAuc2V0RHJhd2VyKGRyYXdlcilcclxuICAuc2V0UHJvZ3JhbUluZm8ocG9pbnRMaWdodFByb2dyYW1JbmZvKVxyXG4gIC5jcmVhdGVHZW9tZXRyeUJ1ZmZlcnMoKVxyXG4gIC5zZXRBdHRyaWJ1dGVzKClcclxuICAuc2V0TW9kZSgyKTtcclxuY2lyY2xlXHJcbiAgLnNldENvbnRleHQoY29udGV4dClcclxuICAuY3JlYXRlVkFPKClcclxuICAuc2V0RHJhd2VyKGRyYXdlcilcclxuICAuc2V0UHJvZ3JhbUluZm8oZGVmYXVsdFByb2dyYW1JbmZvKVxyXG4gIC5jcmVhdGVHZW9tZXRyeUJ1ZmZlcnMoKVxyXG4gIC5zZXRBdHRyaWJ1dGVzKClcclxuICAuc2V0TW9kZSgzKTtcclxuXHJcbmxpbmVcclxuICAuc2V0Q29udGV4dChjb250ZXh0KVxyXG4gIC5jcmVhdGVWQU8oKVxyXG4gIC5zZXREcmF3ZXIoZHJhd2VyKVxyXG4gIC5zZXRQcm9ncmFtSW5mbyhkZWZhdWx0UHJvZ3JhbUluZm8pXHJcbiAgLmNyZWF0ZUJ1ZmZlckF0dHJpYkRhdGEoXCJhX3Bvc2l0aW9uXCIsIFwidmVjM1wiLCB7IGxvY2F0aW9uOiAwIH0pXHJcbiAgLnNldE93bkF0dHJpYnV0ZShcImFfcG9zaXRpb25cIilcclxuICAuYnVmZmVyRGF0YShcImFfcG9zaXRpb25cIiwgbmV3IEZsb2F0MzJBcnJheShbMCwgMCwgMCwgMCwgMSwgMF0pKTtcclxuXHJcbnBvaW50c1xyXG4gIC5zZXRDb250ZXh0KGNvbnRleHQpXHJcbiAgLmNyZWF0ZVZBTygpXHJcbiAgLnNldERyYXdlcihkcmF3ZXIpXHJcbiAgLnNldFByb2dyYW1JbmZvKGRlZmF1bHRQcm9ncmFtSW5mbylcclxuICAuY3JlYXRlQnVmZmVyQXR0cmliRGF0YShcImFfcG9zaXRpb25cIiwgXCJ2ZWMzXCIsIHsgbG9jYXRpb246IDAgfSlcclxuICAuc2V0T3duQXR0cmlidXRlKFwiYV9wb3NpdGlvblwiKVxyXG4gIC5idWZmZXJEYXRhKFwiYV9wb3NpdGlvblwiLCBuZXcgRmxvYXQzMkFycmF5KFswLCAwLCAwXSkpO1xyXG5cclxuY29uc3QgdW5pZm9ybXMgPSB7XHJcbiAgdV9saWdodFdvcmxkUG9zaXRpb246IFsxMCwgNTAsIDEwXSxcclxuICB1X2FtYmllbnRMaWdodDogWzEsIDEsIDAuMywgMC4xMV0sXHJcbiAgdV9yZXZlcnNlTGlnaHREaXJlY3Rpb246IFsxLCAwLCAwXSxcclxuICB1X3NoaW5pbmVzczogMzAwLFxyXG59O1xyXG5cclxuaW1wb3J0IFNpbXVsYXRpb24gZnJvbSBcIi4vc3JjL3BoeXNpY3Mvc2ltdWxhdGlvblwiO1xyXG5pbXBvcnQgeyBQbGF5ZXIsIFJpZ2lkQm9keSB9IGZyb20gXCIuL3NyYy9waHlzaWNzL1JpZ2lkQm9keVwiO1xyXG5pbXBvcnQgeyBCb3gsIEN5bGluZGVyLCBTcGhlcmUgfSBmcm9tIFwiLi9zcmMvcGh5c2ljcy9jb2xsaWRlclwiO1xyXG5pbXBvcnQgeyBDb250cm9sbGFibGUsIE5vY2xpcCB9IGZyb20gXCIuL3NyYy9taXNjL2NvbnRyb2xsYWJsZVwiO1xyXG5cclxuaW1wb3J0IHsgSm9pbnQsIEpvaW50UG9zaXRpb25Db25zdHJhaW50IH0gZnJvbSBcIi4vc3JjL3BoeXNpY3MvY29uc3RyYWludHNcIjtcclxuXHJcbmNvbnN0IGcgPSA5Ljg7XHJcbmNvbnN0IHNpbSA9IG5ldyBTaW11bGF0aW9uKCk7XHJcblxyXG5jb25zdCBmbG9vciA9IHsgcGh5c2ljczogbmV3IFJpZ2lkQm9keShuZXcgQm94KDEwMDAsIDYsIDEwMDApKSwgc3ByaXRlOiBib3ggfTtcclxuXHJcbmNvbnN0IGN1YmUyID0geyBwaHlzaWNzOiBuZXcgUmlnaWRCb2R5KG5ldyBCb3goMiwgMiwgMikpLCBzcHJpdGU6IGJveCB9O1xyXG5jb25zdCBjdWJlMyA9IHsgcGh5c2ljczogbmV3IFJpZ2lkQm9keShuZXcgQm94KDIsIDIsIDIpKSwgc3ByaXRlOiBib3ggfTtcclxuY29uc3QgY3ViZTQgPSB7XHJcbiAgcGh5c2ljczogbmV3IFJpZ2lkQm9keShuZXcgQ3lsaW5kZXIoMSwxLCAwLjUpKSxcclxuICBzcHJpdGU6IGN5bGluZGVyLFxyXG59O1xyXG5jdWJlMi5waHlzaWNzLnRyYW5zbGF0ZShbMCwgNC43LCAwXSk7XHJcbmN1YmU0LnBoeXNpY3MudHJhbnNsYXRlKFswLCAxMCwgLTVdKTtcclxuY3ViZTMucGh5c2ljcy50cmFuc2xhdGUoWzAsIDMsIDBdKTtcclxuLy9jdWJlNC5waHlzaWNzLnJvdGF0ZShbTWF0aC5QSSowLjYsTWF0aC5QSSowLjMsTWF0aC5QSSowLjNdKVxyXG5cclxuY3ViZTIucGh5c2ljcy5hZGRBY2NlbGVyYXRpb24oWzAsIC1nLCAwXSk7XHJcbmN1YmUzLnBoeXNpY3MuYWRkQWNjZWxlcmF0aW9uKFswLCAtZywgMF0pO1xyXG5jdWJlNC5waHlzaWNzLmFkZEFjY2VsZXJhdGlvbihbMCwgLWcgKiAyLCAwXSk7XHJcbmN1YmU0LnBoeXNpY3MuZnJpY3Rpb24gPSAwO1xyXG5jdWJlMi5waHlzaWNzLnNldE1hc3MoMjApO1xyXG5jdWJlMy5waHlzaWNzLnNldE1hc3MoMjApO1xyXG5cclxuc2ltLmFkZE9iamVjdChmbG9vci5waHlzaWNzKTtcclxuXHJcbnNpbS5hZGRPYmplY3QoY3ViZTIucGh5c2ljcyk7XHJcbnNpbS5hZGRPYmplY3QoY3ViZTMucGh5c2ljcyk7XHJcbnNpbS5hZGRPYmplY3QoY3ViZTQucGh5c2ljcyk7XHJcbmNvbnN0IG9iamVjdHMgPSBbZmxvb3IsIGN1YmUyLCBjdWJlMywgY3ViZTRdO1xyXG5cclxuZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcclxuICBjb25zdCBjdWJlID0geyBwaHlzaWNzOiBuZXcgUmlnaWRCb2R5KG5ldyBCb3goMiwgMiwgMikpLCBzcHJpdGU6IGJveCB9O1xyXG4gIGN1YmUucGh5c2ljcy50cmFuc2xhdGUoWzEwLCA1ICogaSArIDIuNSwgaSAqIDAuMV0pO1xyXG4gIGN1YmUucGh5c2ljcy5zZXRNYXNzKDIwKTtcclxuICBjdWJlLnBoeXNpY3MuYWRkQWNjZWxlcmF0aW9uKFswLCAtZywgMF0pO1xyXG4gIHNpbS5hZGRPYmplY3QoY3ViZS5waHlzaWNzKTtcclxuICBvYmplY3RzLnB1c2goY3ViZSk7XHJcbn1cclxuXHJcbmNvbnN0IGNoYWluID0gW107XHJcbmZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XHJcbiAgY29uc3QgY3ViZSA9IHsgcGh5c2ljczogbmV3IFJpZ2lkQm9keShuZXcgQm94KDIsIDUsIDIpKSwgc3ByaXRlOiBib3ggfTtcclxuICBjdWJlLnBoeXNpY3MudHJhbnNsYXRlKFsyMCwgNSAqIGkgKyAxNSwgaSAqIDJdKTtcclxuICBjdWJlLnBoeXNpY3Muc2V0TWFzcyg1KTtcclxuICBjdWJlLnBoeXNpY3MuYWRkQWNjZWxlcmF0aW9uKFswLCAtZywgMF0pO1xyXG4gIGN1YmUucGh5c2ljcy5mcmljdGlvbiA9IDA7XHJcbiAgLy9jdWJlLnBoeXNpY3MuZ3JvdXAgPSAxXHJcbiAgaWYgKGkgPiAwKSB7XHJcbiAgICBjb25zdCBjID0gbmV3IEpvaW50KFxyXG4gICAgICBjdWJlLnBoeXNpY3MsXHJcbiAgICAgIG9iamVjdHMuYXQoLTEpLnBoeXNpY3MsXHJcbiAgICAgIFswLCAtMywgMF0sXHJcbiAgICAgIFswLCAzLCAwXSxcclxuICAgICAgMC4xXHJcbiAgICApO1xyXG4gICAgY2hhaW4ucHVzaChjKTtcclxuXHJcbiAgICAvLyBjdWJlLnBoeXNpY3Muc3RhdGljID0gdHJ1ZVxyXG4gIH1cclxuICBzaW0uYWRkT2JqZWN0KGN1YmUucGh5c2ljcyk7XHJcbiAgb2JqZWN0cy5wdXNoKGN1YmUpO1xyXG59XHJcbnNpbS5hZGRDb25zdHJhaW50cyhjaGFpbiwgXCJjaGFpblwiKTtcclxuXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVSYWdkb2xsKHBvcyA9IFswLDAsMF0pe1xyXG4gIGNvbnN0IGJvZHkgPSBuZXcgUmlnaWRCb2R5KG5ldyBCb3goMSwyLDAuNSkpXHJcbiAgY29uc3QgbGVmdEhhbmQgPSBuZXcgUmlnaWRCb2R5KG5ldyBCb3goMC41LDIsMC41KSlcclxuICBjb25zdCByaWdodEhhbmQgPSBuZXcgUmlnaWRCb2R5KG5ldyBCb3goMC41LDIsMC41KSlcclxuICBjb25zdCBsZWZ0TGVnID0gbmV3IFJpZ2lkQm9keShuZXcgQm94KDAuNSwyLDAuNSkpXHJcbiAgY29uc3QgcmlnaHRMZWcgPSBuZXcgUmlnaWRCb2R5KG5ldyBCb3goMC41LDIsMC41KSlcclxuICBjb25zdCBoZWFkID0gbmV3IFJpZ2lkQm9keShuZXcgQm94KDEsMSwxKSlcclxuICBjb25zdCBjb25zdHJhaW50cyA9IFtcclxuICAgICAgbmV3IEpvaW50KGJvZHksIGhlYWQsIFswLDEuNSwwXSwgWzAsLTEsMF0sIDApLFxyXG4gICAgICBuZXcgSm9pbnQoYm9keSwgbGVmdEhhbmQsIFsxLDEsMF0sIFswLDEsMF0sIDApLFxyXG4gICAgICBuZXcgSm9pbnQoYm9keSwgcmlnaHRIYW5kLCBbLTEsMSwwXSwgWzAsMSwwXSwgMCksXHJcbiAgICAgIG5ldyBKb2ludChib2R5LCByaWdodExlZywgWy0wLjUsLTEuMiwwXSwgWzAsMS4yLDBdLCAwKSxcclxuICAgICAgbmV3IEpvaW50KGJvZHksIGxlZnRMZWcsIFswLjUsLTEuMiwwXSwgWzAsMS4yLDBdLCAwKSxcclxuICBdXHJcbiAgY29uc3QgcG9zaXRpb25Db25zdHJhaW50cyA9IFtcclxuICAgICAgbmV3IEpvaW50UG9zaXRpb25Db25zdHJhaW50KGJvZHksIGhlYWQsIFswLDEuNSwwXSwgWzAsLTEsMF0sIDAuMiksXHJcbiAgICAgIG5ldyBKb2ludFBvc2l0aW9uQ29uc3RyYWludChib2R5LCBsZWZ0SGFuZCwgWzEsMSwwXSwgWzAsMSwwXSwgIDAuMiksXHJcbiAgICAgIG5ldyBKb2ludFBvc2l0aW9uQ29uc3RyYWludChib2R5LCByaWdodEhhbmQsIFstMSwxLDBdLCBbMCwxLDBdLCAgMC4yKSxcclxuICAgICAgbmV3IEpvaW50UG9zaXRpb25Db25zdHJhaW50KGJvZHksIHJpZ2h0TGVnLCBbLTAuNSwtMS4yLDBdLCBbMCwxLjIsMF0sICAwLjIpLFxyXG4gICAgICBuZXcgSm9pbnRQb3NpdGlvbkNvbnN0cmFpbnQoYm9keSwgbGVmdExlZywgWzAuNSwtMS4yLDBdLCBbMCwxLjIsMF0sICAwLjIpLFxyXG4gIF1cclxuICAvL3Bvc2l0aW9uQ29uc3RyYWludHMuZm9yRWFjaChjID0+Yy50cmVzaG9sZCA9IDAuMSlcclxuICBib2R5LnRyYW5zbGF0ZShwb3MpXHJcbiBcclxuICBoZWFkLnRyYW5zbGF0ZSh2ZWN0b3Iuc3VtKHBvcywgWzAsMiwwXSkpXHJcbiAgbGVmdEhhbmQudHJhbnNsYXRlKHZlY3Rvci5zdW0ocG9zLCBbLTMsMiwwXSkpXHJcbiAgcmlnaHRIYW5kLnRyYW5zbGF0ZSh2ZWN0b3Iuc3VtKHBvcywgWzMsMiwwXSkpXHJcbiAgcmlnaHRMZWcudHJhbnNsYXRlKHZlY3Rvci5zdW0ocG9zLCBbMiwgLTIuNSwwXSkpXHJcbiAgbGVmdExlZy50cmFuc2xhdGUodmVjdG9yLnN1bShwb3MsIFstMiwgLTIuNSwwXSkpXHJcbiAgY29uc3QgYm9kaWVzID0gW2JvZHksIGxlZnRIYW5kLCByaWdodEhhbmQsIHJpZ2h0TGVnLCBsZWZ0TGVnLCBoZWFkXVxyXG4gIHBvc2l0aW9uQ29uc3RyYWludHMuZm9yRWFjaChjID0+IGMudHJlc2hvbGQgPSAwLjA1KVxyXG4gIGJvZGllcy5mb3JFYWNoKGI9PntcclxuICAgICAgLy9iLmdyb3VwID0gJ3JhZ2RvbGwnXHJcbiAgICAgIC8vYi5zZXRNYXNzKDEwKVxyXG4gIH0pXHJcbiAgXHJcbiAgXHJcbiAgcmV0dXJuIFtib2RpZXMsIGNvbnN0cmFpbnRzLCBwb3NpdGlvbkNvbnN0cmFpbnRzXVxyXG59XHJcblxyXG5cclxuZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcclxuICBjb25zdCBbYm9kaWVzLCBjb25zdHJhaW50cywgcG9zaXRpb25Db25zdHJhaW50c10gPSBjcmVhdGVSYWdkb2xsKFtcclxuICAgIDYgKiBpLFxyXG4gICAgMTAsXHJcbiAgICAtMTAsXHJcbiAgXSk7XHJcblxyXG4gIGJvZGllcy5mb3JFYWNoKChiKSA9PiB7XHJcbiAgICBzaW0uYWRkT2JqZWN0KGIpO1xyXG4gICAgYi5hZGRBY2NlbGVyYXRpb24oWzAsIC1nLCAwXSk7XHJcbiAgICAvLyBiLmdyb3VwID0gJ3JhZ2RvbGwnICsgaVxyXG4gICAgb2JqZWN0cy5wdXNoKHsgcGh5c2ljczogYiwgc3ByaXRlOiBib3ggfSk7XHJcbiAgfSk7XHJcbiAgc2ltLmFkZENvbnN0cmFpbnRzKGNvbnN0cmFpbnRzLCBcInJhZ2RvbGxcIiArIGkpO1xyXG4gIHNpbS5hZGRQb3NpdGlvbkNvbnN0cmFpbnRzKHBvc2l0aW9uQ29uc3RyYWludHMsIFwicmFnZG9sXCIgKyBpKTtcclxufVxyXG5cclxuY29uc3QgcGxhdGZvcm0gPSBuZXcgUmlnaWRCb2R5KG5ldyBCb3goKSk7XHJcbnBsYXRmb3JtLkRPRiA9IFswLCAwLCAwLCAwLCAwLCAwXTtcclxucGxhdGZvcm0uc3RhdGljID0gdHJ1ZTtcclxuc2ltLmFkZENvbnN0cmFpbnRzKFxyXG4gIFtuZXcgSm9pbnQocGxhdGZvcm0sIG9iamVjdHMuYXQoLTEpLnBoeXNpY3MsIFswLCAtMS41LCAwXSwgWzAsIDIsIDBdLCAwLjEpXSxcclxuICBcInBsYXRmb3JtXCJcclxuKTtcclxucGxhdGZvcm0udHJhbnNsYXRlKFsyMCwgMTAsIC0xMF0pO1xyXG5cclxuZmxvb3IucGh5c2ljcy5zZXRNYXNzKDEwMDAwMDAwMCk7XHJcblxyXG5mbG9vci5waHlzaWNzLnRyYW5zbGF0ZShbMCwgLTMsIDBdKTtcclxuXHJcbmZsb29yLnN0YXRpYyA9IHRydWU7XHJcbmZsb29yLkRPRiA9IFswLCAwLCAwLCAwLCAwLCAwXTtcclxuY29uc3QgcGxheWVyID0gbmV3IENvbnRyb2xsYWJsZShjdWJlNC5waHlzaWNzKTtcclxuXHJcbnBsYXllci5saXN0ZW5LZXlib2FyZChrZXlJbnB1dCk7XHJcbnBsYXllci5saXN0ZW5Nb3VzZShtb3VzZUlucHV0KTtcclxuXHJcbmxldCBsYXN0Q2FsbCA9IERhdGUubm93KCk7XHJcbmNvbnN0IGZwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZnBzXCIpO1xyXG5cclxuY29uc3QgbG9vcCA9ICgpID0+IHtcclxuICBzaW0udGljaygwLjAxNjY2KTtcclxuICBwbGF5ZXIudGljaygpO1xyXG4gIGNvbnN0IGN1cmVudFRpbWUgPSBEYXRlLm5vdygpO1xyXG4gIGNvbnN0IGRlbHRhID0gY3VyZW50VGltZSAtIGxhc3RDYWxsO1xyXG4gIGZwcy50ZXh0Q29udGVudCA9ICgxIC8gZGVsdGEpICogMTAwMDtcclxuICBsYXN0Q2FsbCA9IGN1cmVudFRpbWU7XHJcbiAgZ2wuY2xlYXIoZ2wuQ09MT1JfQlVGRkVSX0JJVCB8IGdsLkRFUFRIX0JVRkZFUl9CSVQpO1xyXG4gIGdsLmVuYWJsZShnbC5DVUxMX0ZBQ0UpO1xyXG4gIGdsLmVuYWJsZShnbC5ERVBUSF9URVNUKTtcclxuXHJcbiAgY29uc3QgY2FtZXJhTWF0cml4ID0gcGxheWVyLmNhbU1hdHJpeDtcclxuICBjb25zdCB7dHJhbnNsYXRpb259ID0gbTQuZGVjb21wb3NlKGNhbWVyYU1hdHJpeClcclxuXHJcbiAgb2JqZWN0cy5mb3JFYWNoKChvYmopID0+IHtcclxuICAgIGNvbnN0IHVfbWF0cml4ID0gb2JqLnBoeXNpY3MuY29sbGlkZXIuZ2V0TTQoKTtcclxuXHJcbiAgICBjb25zdCB1X3ZpZXdXb3JsZFBvc2l0aW9uID0gdHJhbnNsYXRpb247XHJcbiAgICBvYmouc3ByaXRlLmRyYXcoXHJcbiAgICAgIHsuLi51bmlmb3JtcywgdV9tYXRyaXgsIHVfdmlld1dvcmxkUG9zaXRpb24sIHVfY29sb3I6IFsxLCAwLjUsIDAuMSwgMV0gfSxcclxuICAgICAgY2FtZXJhTWF0cml4XHJcbiAgICApO1xyXG4gIH0pO1xyXG5cclxuICBjaXJjbGVcclxuICAgIC5kcmF3KFxyXG4gICAgICB7XHJcbiAgICAgICAgdV9tYXRyaXg6IG00LnJvdGF0aW9uKE1hdGguUEkgLyAyLCAwLCAwKSxcclxuICAgICAgICB1X2NvbG9yOiBbMSwgMC41LCAwLjEsIDFdLFxyXG4gICAgICAgIHVfd29ybGRWaWV3UG9zaXRpb246IGNhbWVyYU1hdHJpeCxcclxuICAgICAgfSxcclxuICAgICAgY2FtZXJhTWF0cml4XHJcbiAgICApXHJcbiAgICAuZHJhdyhcclxuICAgICAge1xyXG4gICAgICAgIHVfbWF0cml4OiBtNC5pZGVudGl0eSgpLFxyXG4gICAgICAgIHVfY29sb3I6IFsxLCAwLjUsIDAuMSwgMV0sXHJcbiAgICAgICAgdV93b3JsZFZpZXdQb3NpdGlvbjogY2FtZXJhTWF0cml4LFxyXG4gICAgICB9LFxyXG4gICAgICBjYW1lcmFNYXRyaXhcclxuICAgICk7XHJcbiAgcG9pbnRzLmRyYXcoXHJcbiAgICB7XHJcbiAgICAgIHVfbWF0cml4OiBtNC5pZGVudGl0eSgpLFxyXG4gICAgICB1X2NvbG9yOiBbMCwgMC41LCAwLjEsIDFdLFxyXG4gICAgICB1X3dvcmxkVmlld1Bvc2l0aW9uOiBjYW1lcmFNYXRyaXgsXHJcbiAgICB9LFxyXG4gICAgY2FtZXJhTWF0cml4XHJcbiAgKTtcclxuXHJcbiAgZm9yIChjb25zdCBbbmFtZSwgY29uc3RyYWludHNdIG9mIHNpbS5jb25zdHJhaW50cykge1xyXG4gICAgY29uc3RyYWludHMuZm9yRWFjaCgoYykgPT4ge1xyXG4gICAgICBwb2ludHMuZHJhdyhcclxuICAgICAgICB7XHJcbiAgICAgICAgICB1X21hdHJpeDogbTQudHJhbnNsYXRpb24oLi4uYy5QQSksXHJcbiAgICAgICAgICB1X2NvbG9yOiBbMS4wLCAwLjAsIDAuMSwgMV0sXHJcbiAgICAgICAgICB1X3dvcmxkVmlld1Bvc2l0aW9uOiBjYW1lcmFNYXRyaXgsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjYW1lcmFNYXRyaXhcclxuICAgICAgKTtcclxuICAgICAgcG9pbnRzLmRyYXcoXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdV9tYXRyaXg6IG00LnRyYW5zbGF0aW9uKC4uLmMuUEIpLFxyXG4gICAgICAgICAgdV9jb2xvcjogWzEuMCwgMC4wLCAwLjEsIDFdLFxyXG4gICAgICAgICAgdV93b3JsZFZpZXdQb3NpdGlvbjogY2FtZXJhTWF0cml4LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2FtZXJhTWF0cml4XHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgY29uc3QgbWFuaWZvbGRzID0gc2ltLmNvbGxpc2lvbk1hbmlmb2xkcy52YWx1ZXMoKTtcclxuXHJcbiAgZm9yIChjb25zdCBtYW5pZm9sZCBvZiBtYW5pZm9sZHMpIHtcclxuICAgIG1hbmlmb2xkLmNvbnRhY3RzLmZvckVhY2goKGNvbnRhY3QpID0+IHtcclxuICAgICAgcG9pbnRzXHJcbiAgICAgICAgLmRyYXcoXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHVfbWF0cml4OiBtNC50cmFuc2xhdGlvbiguLi5jb250YWN0LlBBKSxcclxuICAgICAgICAgICAgdV9jb2xvcjogWzAuNiwgMC42LCAwLjAsIDFdLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGNhbWVyYU1hdHJpeFxyXG4gICAgICAgIClcclxuICAgICAgICAuZHJhdyhcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdV9tYXRyaXg6IG00LnRyYW5zbGF0aW9uKC4uLmNvbnRhY3QuUEIpLFxyXG4gICAgICAgICAgICB1X2NvbG9yOiBbMC41LCAwLjEsIDAuMiwgMV0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgY2FtZXJhTWF0cml4XHJcbiAgICAgICAgKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2wudmlld3BvcnQoMCwgMCwgZ2wuY2FudmFzLndpZHRoLCBnbC5jYW52YXMuaGVpZ2h0KTtcclxuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUobG9vcCk7XHJcbn07XHJcbmxvb3AoKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9