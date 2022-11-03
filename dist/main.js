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
/* harmony export */   "Entity": () => (/* reexport safe */ _src_entity__WEBPACK_IMPORTED_MODULE_8__["default"]),
/* harmony export */   "EntityDataFromGltf": () => (/* reexport safe */ _src_gltfUtils__WEBPACK_IMPORTED_MODULE_1__.EntityDataFromGltf),
/* harmony export */   "GLTF": () => (/* reexport safe */ _src_gltfUtils__WEBPACK_IMPORTED_MODULE_1__.GLTF),
/* harmony export */   "GLcontextWrapper": () => (/* binding */ GLcontextWrapper),
/* harmony export */   "MeshRenderer": () => (/* reexport safe */ _src_MeshRenderer__WEBPACK_IMPORTED_MODULE_2__.MeshRenderer),
/* harmony export */   "PrimitiveRenderInfoFromArrayData": () => (/* reexport safe */ _src_gltfUtils__WEBPACK_IMPORTED_MODULE_1__.PrimitiveRenderInfoFromArrayData),
/* harmony export */   "PrimitiveRenderer": () => (/* reexport safe */ _src_PrimitiveRenderer__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   "ProgramInfo": () => (/* reexport safe */ _src_programInfo__WEBPACK_IMPORTED_MODULE_5__.ProgramInfo),
/* harmony export */   "SkinnedMeshRenderer": () => (/* reexport safe */ _src_MeshRenderer__WEBPACK_IMPORTED_MODULE_2__.SkinnedMeshRenderer),
/* harmony export */   "Texture": () => (/* reexport safe */ _src_textureUtils__WEBPACK_IMPORTED_MODULE_7__.Texture),
/* harmony export */   "createBox": () => (/* reexport safe */ _src_primitives__WEBPACK_IMPORTED_MODULE_3__.createBox),
/* harmony export */   "createCircle": () => (/* reexport safe */ _src_primitives__WEBPACK_IMPORTED_MODULE_3__.createCircle),
/* harmony export */   "createCone": () => (/* reexport safe */ _src_primitives__WEBPACK_IMPORTED_MODULE_3__.createCone),
/* harmony export */   "defaultProgram": () => (/* reexport safe */ _src_render_shaders__WEBPACK_IMPORTED_MODULE_9__.defaultProgram),
/* harmony export */   "lightingProgram": () => (/* reexport safe */ _src_render_shaders__WEBPACK_IMPORTED_MODULE_9__.lightingProgram),
/* harmony export */   "makeImgFromSvgXml": () => (/* reexport safe */ _src_textureUtils__WEBPACK_IMPORTED_MODULE_7__.makeImgFromSvgXml),
/* harmony export */   "makeStripeImg": () => (/* reexport safe */ _src_textureUtils__WEBPACK_IMPORTED_MODULE_7__.makeStripeImg)
/* harmony export */ });
/* harmony import */ var _src_BufferAttribute__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/BufferAttribute */ "./node_modules/graphics/src/BufferAttribute.js");
/* harmony import */ var _src_gltfUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/gltfUtils */ "./node_modules/graphics/src/gltfUtils.js");
/* harmony import */ var _src_MeshRenderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/MeshRenderer */ "./node_modules/graphics/src/MeshRenderer.js");
/* harmony import */ var _src_primitives__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/primitives */ "./node_modules/graphics/src/primitives.js");
/* harmony import */ var _src_PrimitiveRenderer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/PrimitiveRenderer */ "./node_modules/graphics/src/PrimitiveRenderer.js");
/* harmony import */ var _src_programInfo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/programInfo */ "./node_modules/graphics/src/programInfo.js");
/* harmony import */ var _src_Drawer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/Drawer */ "./node_modules/graphics/src/Drawer.js");
/* harmony import */ var _src_textureUtils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/textureUtils */ "./node_modules/graphics/src/textureUtils.js");
/* harmony import */ var _src_entity__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./src/entity */ "./node_modules/graphics/src/entity.js");
/* harmony import */ var _src_render_shaders__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./src/render/shaders */ "./node_modules/graphics/src/render/shaders/index.js");










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
  createTexture(textureName) {
    const texture = new _src_textureUtils__WEBPACK_IMPORTED_MODULE_7__.Texture(this.gl);
    this.textures = { ...this.textures, [textureName]: texture };
    return this;
  }
  getTexture(textureName) {
    return this.textures[textureName];
  }
  setTextureUnit(textureName, unitNum) {
    const texture = this.getTexture(textureName).texture;
    (0,_src_textureUtils__WEBPACK_IMPORTED_MODULE_7__.setTextureUnits)(this.gl, texture, unitNum);
    return this;
  }
}




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

    const worldViewProjection = math__WEBPACK_IMPORTED_MODULE_0__.m4.multiply(
      viewProjectionMatrix,
      uniforms.u_matrix
    );
    const worldMatrix = uniforms.u_matrix;
    this.context.useProgramInfo(programInfo);
    this.context
      .getLastUsedProgramInfo()
      .setUniforms({ ...uniforms, worldMatrix, worldViewProjection });
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

/***/ "./node_modules/graphics/src/entity.js":
/*!*********************************************!*\
  !*** ./node_modules/graphics/src/entity.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! math */ "./node_modules/math/index.js");
/* harmony import */ var math__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(math__WEBPACK_IMPORTED_MODULE_0__);


class Entity extends math__WEBPACK_IMPORTED_MODULE_0__.Node {
  static makeEntity(entityDescription, rootNodeNdx) {
    const { nodes, meshes } = entityDescription;
    const rootNode = nodes[rootNodeNdx];
    const makeNode = (nodeDescription, ndx) => {
      const trs = new math__WEBPACK_IMPORTED_MODULE_0__.TRS(
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Entity);


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
    const { nodes, meshes, skins } = gltf;
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
/* harmony export */   "createCone": () => (/* binding */ createCone)
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

/***/ "./node_modules/graphics/src/render/shaders/Default.js":
/*!*************************************************************!*\
  !*** ./node_modules/graphics/src/render/shaders/Default.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _glsl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./glsl */ "./node_modules/graphics/src/render/shaders/glsl.js");
/* harmony import */ var _programInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../programInfo */ "./node_modules/graphics/src/programInfo.js");


const vert = _glsl__WEBPACK_IMPORTED_MODULE_0__["default"]`#version 300 es

precision highp float;

uniform mat4 worldViewProjection;


layout(location = 0) in vec4 a_position;
void main() {
  gl_Position = worldViewProjection * a_position;
  gl_PointSize = 10.0;
}`;
const frag = _glsl__WEBPACK_IMPORTED_MODULE_0__["default"]`#version 300 es
precision highp float;
 


uniform vec4 u_color;
out vec4 outColor;
void main() {
  
  
  outColor = u_color;
 
  
  
}
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new _programInfo__WEBPACK_IMPORTED_MODULE_1__.ProgramInfo(vert, frag));


/***/ }),

/***/ "./node_modules/graphics/src/render/shaders/Lighting.js":
/*!**************************************************************!*\
  !*** ./node_modules/graphics/src/render/shaders/Lighting.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _glsl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./glsl */ "./node_modules/graphics/src/render/shaders/glsl.js");
/* harmony import */ var _programInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../programInfo */ "./node_modules/graphics/src/programInfo.js");



const vert = _glsl__WEBPACK_IMPORTED_MODULE_0__["default"]`#version 300 es
 
layout(location = 0) in vec4 a_position;
layout(location = 1) in vec3 a_normal;

layout(location = 4) in vec2 a_texcoord;
layout(location = 5) in mat4 i_matrix;

uniform mat4 worldMatrix;
uniform mat4 worldViewProjection;
uniform vec3 u_lightWorldPosition;
uniform vec3 u_viewWorldPosition;

out vec3 v_normal;
out vec2 v_texcoord;
out vec3 v_surfaceToLight;
out vec3 v_surfaceToView;

void main() {

    vec3 surfaceWorldPosition = (worldMatrix * a_position).xyz;
    v_surfaceToLight = u_lightWorldPosition - surfaceWorldPosition;

    vec4 pos =   worldViewProjection * a_position  ;
    gl_Position = pos;

    v_texcoord = a_texcoord;
    v_normal = mat3(   worldMatrix ) * a_normal;
    v_surfaceToView = u_viewWorldPosition - surfaceWorldPosition;
      
}`
const frag = _glsl__WEBPACK_IMPORTED_MODULE_0__["default"]`#version 300 es
precision highp float;
 

in vec2 v_texcoord;

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
  vec3 halfVector = normalize(surfaceToLightDirection + surfaceToViewDirection);

  vec3 normal = normalize(v_normal);
  float light = dot(v_normal, surfaceToLightDirection);
  float specular = 0.0;
  if (light > 0.0) {
    specular = pow(dot(normal, halfVector), u_shininess);
  }

  outColor =  u_color;
  outColor.rgb *= light;
  outColor.rgb += u_ambientLight.rgb *0.3;
  
}
`

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new _programInfo__WEBPACK_IMPORTED_MODULE_1__.ProgramInfo(vert, frag));

/***/ }),

/***/ "./node_modules/graphics/src/render/shaders/glsl.js":
/*!**********************************************************!*\
  !*** ./node_modules/graphics/src/render/shaders/glsl.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const glsl = x => x
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (glsl);

/***/ }),

/***/ "./node_modules/graphics/src/render/shaders/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/graphics/src/render/shaders/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultProgram": () => (/* reexport safe */ _Default__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "lightingProgram": () => (/* reexport safe */ _Lighting__WEBPACK_IMPORTED_MODULE_1__["default"])
/* harmony export */ });
/* harmony import */ var _Default__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Default */ "./node_modules/graphics/src/render/shaders/Default.js");
/* harmony import */ var _Lighting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Lighting */ "./node_modules/graphics/src/render/shaders/Lighting.js");





/***/ }),

/***/ "./node_modules/graphics/src/textureUtils.js":
/*!***************************************************!*\
  !*** ./node_modules/graphics/src/textureUtils.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Texture": () => (/* binding */ Texture),
/* harmony export */   "makeImgFromSvgXml": () => (/* binding */ makeImgFromSvgXml),
/* harmony export */   "makeStripeImg": () => (/* binding */ makeStripeImg),
/* harmony export */   "setTextureUnits": () => (/* binding */ setTextureUnits)
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

class Texture {
  static makeImgFromSvgXml = makeImgFromSvgXml;
  constructor(gl) {
    this.texture = gl.createTexture();
    this.fromImage = (image) => {
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
    };
    this.getTexture = () => this.texture;
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

/***/ "./src/game/controllable.js":
/*!**********************************!*\
  !*** ./src/game/controllable.js ***!
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
    'd' : 'moveRight'
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
    move(dir){
        const m = this.rigidBody.collider.Rmatrix
        this.rigidBody.applyImpulse(math__WEBPACK_IMPORTED_MODULE_0__.m3.transformPoint(m, dir), [0,0,0])
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
}


/***/ }),

/***/ "./src/game/keylogger.js":
/*!*******************************!*\
  !*** ./src/game/keylogger.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Keylogger)
/* harmony export */ });
class Keylogger {
  constructor() {
    this.keys = new Set();
  }
  logDown({ key }) {
    this.keys.add(key);
  }
  logUp({ key }) {
    this.keys.delete(key);
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

/***/ "./src/game/mouse.js":
/*!***************************!*\
  !*** ./src/game/mouse.js ***!
  \***************************/
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

/***/ "./src/physics/GSsolver.js":
/*!*********************************!*\
  !*** ./src/physics/GSsolver.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GaussSeidel": () => (/* binding */ GaussSeidel)
/* harmony export */ });
let distSq = (x, y) => {
  return x.map((e, i) => e - y[i]).reduce((acc, e) => (acc += e ** 2), 0);
};

const GaussSeidel = (A, b, n, eps) => {
  let x = new Array(n).fill(0);
  let conv = false,
    maxIter = 64;
  let x_new = [];
  while (!conv && maxIter > 0) {
    maxIter--;
    x_new = [...x];
    for (let i = 0; i < n; i++) {
      let s = 0;
      for (let j = 0; j < i; j++) {
        s += A[i * n + j] * x_new[j];
      }
      for (let j = i + 1; j < n; j++) {
        s += A[i * n + j] * x[j];
      }
      x_new[i] = (b[i] - s) / A[i * n + i];
    }

    conv = distSq(x, x_new) < eps;
    x = [...x_new];
  }
  return x_new;
};



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


const { cross, scale, norm, sum, diff, chkV } = math__WEBPACK_IMPORTED_MODULE_1__.vector;
const prec = 0.0001;
const stopTreshold = 0.005;
class RigidBody extends _eventEmitter__WEBPACK_IMPORTED_MODULE_0__.EventEmitter {
  constructor(collider) {
    super();
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
  integrate(dt) {
    const { acceleration, velocity, translation } = this;

    this.translate(scale(this.velocity, dt));
    const rotation = scale(this.angularV, dt );
    if (norm(rotation) > stopTreshold) this.rotate(rotation);
    let deltaSpeed = scale(this.acceleration, dt);
    this.velocity = sum(this.velocity, deltaSpeed);
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
    this.intVelocity = sum(this.velocity,scale(this.acceleration, 3/3 *dt))
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
    this.velocity = sum(this.velocity, scale(impulse, this.inverseMass));
    const angularImpulse = math__WEBPACK_IMPORTED_MODULE_1__.m3.transformPoint(
      this.inverseInertia,
      cross(point, impulse)
    );
    this.angularV = sum(this.angularV, angularImpulse);
  }
  applyPseudoImpulse(impulse, point) {
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
    chkV(v);
    if (this.static) return;
    this.velocity = sum(this.velocity, v);
  }
  addAngularV(v) {
    chkV(v);
    if (this.static) return;
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
    this.friction = 0.0;
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
/* harmony export */   "clip": () => (/* binding */ clip),
/* harmony export */   "computeIntersection": () => (/* binding */ computeIntersection),
/* harmony export */   "isInClockwise": () => (/* binding */ isInClockwise),
/* harmony export */   "isInside": () => (/* binding */ isInside)
/* harmony export */ });
const isInside = (p1, p2, q) => {
  const R = (p2[0] - p1[0]) * (q[1] - p1[1]) - (p2[1] - p1[1]) * (q[0] - p1[0]);
  return R <= 0 + 0.001;
};

const dot = (a, b) => a[0] * b[0] + a[1] * b[1];

const isInClockwise = (p1, p2, p3) => {
  const det =
    p2[0] * p3[1] +
    p3[0] * p1[1] +
    p1[0] * p2[1] -
    p1[0] * p1[1] -
    p3[0] * p2[1] -
    p1[0] * p3[1];

  if(det < 0) return 1
  return -1
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

const clip = (A, B) => {
  let result = [...A];

  for (let i = 0, n = B.length; i < n; i ++) {
    const next = [...result];
    result = [];
    const aEdge1 = B.at((i - 1) );
    const aEdge2 = B.at(i );

    for (let j = 0, _n = next.length; j < _n; j++) {
      const bEdge1 = next.at((j - 1));
      const bEdge2 = next.at(j );

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




/***/ }),

/***/ "./src/physics/collider.js":
/*!*********************************!*\
  !*** ./src/physics/collider.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Box": () => (/* binding */ Box)
/* harmony export */ });
/* harmony import */ var math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! math */ "./node_modules/math/index.js");
/* harmony import */ var math__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(math__WEBPACK_IMPORTED_MODULE_0__);


const { scale, sum, diff } = math__WEBPACK_IMPORTED_MODULE_0__.vector;

const xAxis = [1, 0, 0];
const yAxis = [0, 1, 0];
const zAxis = [0, 0, 1];
const xAxisNegative = scale(xAxis, -1);
const yAxisNegative = scale(yAxis, -1);
const zAxisNegative = scale(zAxis, -1);

class Collider {
  constructor() {
    this.Rmatrix = math__WEBPACK_IMPORTED_MODULE_0__.m3.identity();
    this.pos = [];
    this.scale = [1, 1, 1];
    this.RS = math__WEBPACK_IMPORTED_MODULE_0__.m3.identity();
    this.RSinverse = math__WEBPACK_IMPORTED_MODULE_0__.m3.identity();
    this.pos = [0, 0, 0];
  }
  translate(v) {
    this.pos = sum(this.pos, v);
  }
  rotate(v) {
    this.RSmatrix = math__WEBPACK_IMPORTED_MODULE_0__.m3.xRotate(this.RSmatrix, v[0]);
    this.RSmatrix = math__WEBPACK_IMPORTED_MODULE_0__.m3.yRotate(this.RSmatrix, v[1]);
    this.RSmatrix = math__WEBPACK_IMPORTED_MODULE_0__.m3.zRotate(this.RSmatrix, v[2]);
    this.RmatrixInverse = math__WEBPACK_IMPORTED_MODULE_0__.m3.transpose(this.RSmatrix);
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
  setRSMat3(m) {
    this.RSmatrix = m;
    this.RSmatrixInverse = math__WEBPACK_IMPORTED_MODULE_0__.m3.transpose(m);
  }
  setTRSMat4(m) {
    this.RSmatrix = math__WEBPACK_IMPORTED_MODULE_0__.m4.m4Tom3(m);
    this.pos[0] = m[12];
    this.pos[1] = m[13];
    this.pos[2] = m[14];
  }
  getTRSMat4() {
    const m = math__WEBPACK_IMPORTED_MODULE_0__.m4.m3Tom4(this.RSmatrix);
    m[12] = this.pos[0];
    m[13] = this.pos[1];
    m[14] = this.pos[2];
    m[15] = 1;
    return m;
  }
  localToGlobal(v) {
    let global = math__WEBPACK_IMPORTED_MODULE_0__.m3.transformPoint(this.RSmatrix, v);
    return sum(this.pos, global);
  }
}

class Box {
  constructor(a = 1, b = 1, c = 1) {
    this.min = [-a / 2, -b / 2, -c / 2];
    this.max = [a / 2, b / 2, c / 2];
    this.Rmatrix = math__WEBPACK_IMPORTED_MODULE_0__.m3.identity();
    this.RmatrixInverse = math__WEBPACK_IMPORTED_MODULE_0__.m3.identity();
    this.RS = math__WEBPACK_IMPORTED_MODULE_0__.m3.identity();
    this.TRS = math__WEBPACK_IMPORTED_MODULE_0__.m4.identity()
    this.pos = [0, 0, 0];
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
  setScale(scale){
    const [a, b, c] = scale
    this.min = [-a / 2, -b / 2, -c / 2];
    this.max = [a / 2, b / 2, c / 2];
  }
  setTranslation(translation){
    
    this.pos =[...translation]
    console.log(this.pos)
  }
  getNormalsGlobal() {
    return this.normals.map((n) => math__WEBPACK_IMPORTED_MODULE_0__.m3.transformPoint(this.Rmatrix, n));
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
  translate(t) {
    this.pos = sum(this.pos, t);
  }
  rotate(r) {
    this.Rmatrix = math__WEBPACK_IMPORTED_MODULE_0__.m3.xRotate(this.Rmatrix, r[0]);
    this.Rmatrix = math__WEBPACK_IMPORTED_MODULE_0__.m3.yRotate(this.Rmatrix, r[1]);
    this.Rmatrix = math__WEBPACK_IMPORTED_MODULE_0__.m3.zRotate(this.Rmatrix, r[2]);

    this.RmatrixInverse = math__WEBPACK_IMPORTED_MODULE_0__.m3.transpose(this.Rmatrix);
  }
  setRmatrix(matrix) {
    console.log(this.Rmatrix)
    this.Rmatrix = [...matrix];
    console.log(this.Rmatrix)
    this.RmatrixInverse = math__WEBPACK_IMPORTED_MODULE_0__.m3.transpose(matrix);
  }
  setTRMatrix(m){
    const rm = math__WEBPACK_IMPORTED_MODULE_0__.m4.m4Tom3(m)
    this.setRmatrix(m)
    const pos = [m[12], m[13], m[14]]
    this.translate(pos)
  }
  setTRS(m){
    const {translation, Rmatrix, scale } = math__WEBPACK_IMPORTED_MODULE_0__.m4.decompose(m)
    this.setTranslation(translation)
    this.setRmatrix(math__WEBPACK_IMPORTED_MODULE_0__.m4.m4Tom3(Rmatrix))
    this.setScale(scale)
    console.log(translation, Rmatrix, scale )
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

    const m = new Float32Array([1 / i1, 0, 0, 0, 1 / i2, 0, 0, 0, 1 / i3]);

    return math__WEBPACK_IMPORTED_MODULE_0__.m3.multiply(math__WEBPACK_IMPORTED_MODULE_0__.m3.multiply(this.Rmatrix, m), this.RmatrixInverse);
  }
  getM4() {
    const m = math__WEBPACK_IMPORTED_MODULE_0__.m4.m3Tom4(this.Rmatrix);
    m[12] = this.pos[0];
    m[13] = this.pos[1];
    m[14] = this.pos[2];
    m[15] = 1;
    const scale = diff(this.max, this.min)
    return math__WEBPACK_IMPORTED_MODULE_0__.m4.scale(m, ...scale)
  }
  
  localToGlobal(v) {
    let global = math__WEBPACK_IMPORTED_MODULE_0__.m3.transformPoint(this.Rmatrix, v);
    return sum(this.pos, global);
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
/* harmony export */   "solveCollision": () => (/* binding */ solveCollision),
/* harmony export */   "solveContactPositionErr": () => (/* binding */ solveContactPositionErr),
/* harmony export */   "solvePosition": () => (/* binding */ solvePosition)
/* harmony export */ });
/* harmony import */ var math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! math */ "./node_modules/math/index.js");
/* harmony import */ var math__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(math__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _GSsolver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GSsolver */ "./src/physics/GSsolver.js");



const { sum, diff, scale, cross, dot, normalize, norm, normSq } = math__WEBPACK_IMPORTED_MODULE_0__.vector;

const tol = 0.01;
const tol2 = 0.00001;
const numIterations = 1;
const numPosIterations = 1;

const clamp = (v, min, max) => {
  if (v > min) {
    if (v < max) return v;
    else return max;
  }
  return min;
};

const getManifoldSystem = (manifold) => {
  const body1 = manifold.body1;
  const body2 = manifold.body2;

  const M1 = body1.inverseMass;
  const I1 = body1.inverseInertia;
  const M2 = body2.inverseMass;
  const I2 = body2.inverseInertia;
  const contacts = manifold.contacts;
  let n = contacts.length;
  let A = [];
  const JV = [];
  for (let i = 0; i < n; i++) {
    const rowNum = i * n;
    const JM = [
      scale(contacts[i].J[0], M1),
      math__WEBPACK_IMPORTED_MODULE_0__.m3.transformPoint(I1, contacts[i].J[1]),
      scale(contacts[i].J[2], M2),
      math__WEBPACK_IMPORTED_MODULE_0__.m3.transformPoint(I2, contacts[i].J[3]),
    ];
    for (let j = 0; j < n; j++) {
      if (i === j) {
        A[rowNum + j] = contacts[i].effMass;
        continue;
      }
      A[rowNum + j] =
        dot(JM[0], contacts[j].J[0]) +
        dot(JM[1], contacts[j].J[1]) +
        dot(JM[2], contacts[j].J[2]) +
        dot(JM[3], contacts[j].J[3]);
    }
    JV.push(
      -dot(contacts[i].J[0], body1.velocity) -
        dot(contacts[i].J[1], body1.angularV) -
        dot(contacts[i].J[2], body2.velocity) -
        dot(contacts[i].J[3], body2.angularV)
    );
  }
  return { A, JV };
};
const blockSolver = (manifold, deltaTime) => {
  const body1 = manifold.body1;
  const body2 = manifold.body2;

  const contacts = manifold.contacts;
  let n = contacts.length;

  const { A, JV } = getManifoldSystem(manifold);
  for (let i = 0; i < n; i++) {
    // JV[i] += Math.max(0,contacts[i].penDepth-tol)/deltaTime * 0.25
  }
  const lambda = (0,_GSsolver__WEBPACK_IMPORTED_MODULE_1__.GaussSeidel)(A, JV, n, 0.000001);

  for (let i = 0; i < n; i++) {
    body1.applyImpulse(scale(contacts[i].J[0], lambda[i]), contacts[i].ra);
    body2.applyImpulse(scale(contacts[i].J[2], lambda[i]), contacts[i].rb);
  }
  return lambda;
};
const frictionSolver = (contact, lambda, body1, body2) => {
  contact.relVelocity = sum(body2.velocity, cross(body2.angularV, contact.rb));
  contact.relVelocity = diff(contact.relVelocity, body1.velocity);
  contact.relVelocity = diff(
    contact.relVelocity,
    cross(body1.angularV, contact.ra)
  );

  const mu = body1.friction + body1.friction;
  let fImpulse1 = -dot(contact.relVelocity, contact.fDir1) / contact.fEffMass1;
  fImpulse1 = clamp(fImpulse1, -lambda * mu, lambda * mu);

  let fImpulse2 = -dot(contact.relVelocity, contact.fDir2) / contact.fEffMass2;
  fImpulse2 = clamp(fImpulse2, -lambda * mu, lambda * mu);

  contact.accFI1 += fImpulse1;
  contact.accFI2 += fImpulse2;

  let fVec = sum(
    scale(contact.fDir1, fImpulse1),
    scale(contact.fDir2, fImpulse2)
  );

  body1.applyImpulse(scale(fVec, -1), contact.ra);
  body2.applyImpulse(fVec, contact.rb);
};
function solveCollision(manifold, deltaTime) {
  const body1 = manifold.body1;
  const body2 = manifold.body2;
  const contacts = manifold.contacts;
  if (contacts.length > 1) {
    const lambda = blockSolver(manifold, deltaTime);
    const n = lambda.length;
    for (let i = 0; i < n; i++) {
      frictionSolver(contacts[i], lambda[i], body1, body2);
    }
    return;
  }
  for (let j = 0; j < numIterations; j++) {
    for (let i = 0, n = manifold.contacts.length; i < n; i++) {
      const contact = manifold.contacts[i];
      const k2 = contact.effMass;

      if (contact.penDepth <= 0) return;

      contact.relVelocity = sum(
        body2.velocity,
        cross(body2.angularV, contact.rb)
      );
      contact.relVelocity = diff(contact.relVelocity, body1.velocity);
      contact.relVelocity = diff(
        contact.relVelocity,
        cross(body1.angularV, contact.ra)
      );
      const Vc = dot(contact.relVelocity, contact.n);
      const restitution = Math.max(Vc - tol2, 0) * 0.1;
      let b = (Math.max(0, contact.penDepth - tol) / deltaTime) * 0.25;

      let lambda = -Vc / contact.effMass;
      let oldAcc = contact.accI;
      contact.accI += lambda;
      if (contact.accI < 0) contact.accI = 0;
      lambda = contact.accI - oldAcc;

      body1.applyImpulse(scale(contact.n, -lambda), contact.ra);
      body2.applyImpulse(scale(contact.n, lambda), contact.rb);
      frictionSolver(contact, lambda, body1, body2);
    }
  }
}

const solveConstraint = (constraint, deltaTime) => {
  const ra = constraint.body1.collider.localToGlobal(constraint.ra);
  const rb = constraint.body2.collider.localToGlobal(constraint.rb);
  const n = constraint.n;

  if (constraint.dist < 0.01) return;
  const normal = scale(constraint.n, 1 / constraint.dist);
  let v1 = sum(
    constraint.body1.velocity,
    cross(constraint.body1.angularV, constraint.ra)
  );
  let v2 = sum(
    constraint.body2.velocity,
    cross(constraint.body2.angularV, constraint.rb)
  );
  let relVelocity = diff(v2, v1);

  const Vc = dot(relVelocity, normal);
  let b = (constraint.dist / deltaTime) * 0.2;
  const softness = 2;
  let lambda = -Vc / constraint.effMass;

  constraint.body1.applyImpulse(scale(normal, -lambda), constraint.ra);
  constraint.body2.applyImpulse(scale(normal, lambda), constraint.rb);
};

const solvePosition = (constraint, deltaTime) => {
  if (constraint.dist < 0.01) return;
  const normal = scale(constraint.n, 1 / constraint.dist);
  let v1 = sum(
    constraint.body1.pseudoVelocity,
    cross(constraint.body1.pseudoAngularV, constraint.ra)
  );
  let v2 = sum(
    constraint.body2.pseudoVelocity,
    cross(constraint.body2.pseudoAngularV, constraint.rb)
  );
  let relVelocity = diff(
    constraint.body2.pseudoVelocity,
    constraint.body1.pseudoVelocity
  );

  const Vc = dot(relVelocity, normal);

  let b = Math.max(0, constraint.dist / deltaTime - 0.01);
  const softness = 2;
  let lambda =
    (b - Vc) / (constraint.body1.inverseMass + constraint.body2.inverseMass);

  if (Math.abs(lambda) < 0.1) return;

  constraint.body1.applyPseudoImpulse(scale(normal, -lambda), [0, 0, 0]);
  constraint.body2.applyPseudoImpulse(scale(normal, lambda), [0, 0, 0]);
};

const solveContactPositionErr = (contact, deltaTime, n) => {
  if (contact.penDepth < 0.01) return;

  let v1 = sum(
    contact.body1.pseudoVelocity,
    cross(contact.body1.pseudoAngularV, contact.ra)
  );
  let v2 = sum(
    contact.body2.pseudoVelocity,
    cross(contact.body2.pseudoAngularV, contact.rb)
  );
  let relVelocity = diff(v2, v1);

  const Vc = dot(relVelocity, contact.n);
  //if(Vc < 0)return

  let b = contact.penDepth / deltaTime / n;
  //if(Vc >= b) return
  let lambda =
    (b - Vc) / (contact.body1.inverseMass + contact.body2.inverseMass);

  contact.penDepth = 0;

  //if(Math.abs(lambda) < 0.1)return

  contact.body1.applyPseudoImpulse(scale(contact.n, -lambda), [0, 0, 0]);
  contact.body2.applyPseudoImpulse(scale(contact.n, lambda), [0, 0, 0]);
};



/***/ }),

/***/ "./src/physics/contact.js":
/*!********************************!*\
  !*** ./src/physics/contact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Constraint": () => (/* binding */ Constraint),
/* harmony export */   "ContactConstraint": () => (/* binding */ ContactConstraint),
/* harmony export */   "FrictionConstraint": () => (/* binding */ FrictionConstraint),
/* harmony export */   "Joint": () => (/* binding */ Joint),
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
class Constraint{
  constructor(
    body1,
    body2,
    n,
    ra,
    rb,
    raLocal,
    rbLocal,
    biasFactor,
    lambdaMin = -Infinity,
    lambdaMax = Infinity,
    treshold = 0.0001
  ){
    this.biasFactor = biasFactor;
    this.n = n;
    this.J = null;
    
    this.JM = null;
    this.B = null
    this.body1 = body1;
    this.body2 = body2;
    this.ra = ra;
    this.rb = rb;
    this.raLocal = raLocal
    this.rbLocal = rbLocal
    this.treshold = treshold
    this.lambdaAcc = 0
    this.lambdaMin = lambdaMin
    this.lambdaMax = lambdaMax
  }
  updateLeftPart(deltaTime) {
    const { body1, body2, n, ra, rb } = this;
    this.J = [scale(n, -1), cross(n, ra), n, cross(rb, n)];

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

    if(body1.static) {
      this.JM[0] = [0,0,0]
      this.JM[1] = [0,0,0]
      this.J[0] = [0,0,0]
      this.J[1] = [0,0,0]
      
    }
    if(body1.static) {
      this.JM[2] = [0,0,0]
      this.JM[3] = [0,0,0]
      this.J[2] = [0,0,0]
      this.J[3] = [0,0,0]
      
    }
    //JMJ* = JB;B = MJ*
    this.B = [
      [...this.JM[0], ...this.JM[1]],
      [...this.JM[2], ...this.JM[3]]
    ]
    this.effMass =
      M1 + dot(this.JM[0], this.J[1]) + M2 + dot(this.JM[3], this.J[3]);

  }
  
}


class ContactConstraint extends Constraint {
  constructor(body1,
    body2,
    n,
    ra,
    rb,
    raLocal,
    rbLocal,
    biasFactor,
    treshold, penDepth) {
    super(body1,
      body2,
      n,
      ra,
      rb,
      raLocal,
      rbLocal,
      biasFactor,
      null, null,
      treshold,)
    

    
    this.penDepth = penDepth
   
    
  }
  updateLeftPart(deltaTime){
    super.updateLeftPart(deltaTime)
    this.lambdaMax = norm(
      diff(
        scale(this.body1.velocity, this.body1.mass),
        scale(this.body2.velocity, this.body2.mass)
      )
    )*0.5
    this.lambdaMin = 0
  }
  updateRightPart(deltaTime){
    const {body1, body2, ra, rb, n, penDepth, treshold, biasFactor} = this

 
    const relativeVelocity = diff(
      sum(body2.velocity, cross(body2.angularV, rb)),
      sum(body1.velocity, cross(body1.angularV, ra))
    );

    const relativeVelocityNormalProjection = dot(relativeVelocity, n);
    this.bias = (Math.max(0, penDepth - treshold) / deltaTime) * biasFactor
               - relativeVelocityNormalProjection 
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

class FrictionConstraint extends Constraint{
  updateRightPart(deltaTime){
    const {body1, body2, ra, rb, n} = this 
    const relativeVelocity = diff(
      sum(body2.velocity, cross(body2.angularV, rb)),
      sum(body1.velocity, cross(body1.angularV, ra))
    );

    const relativeVelocityNormalProjection = dot(relativeVelocity, n);
    this.bias = - relativeVelocityNormalProjection 
  }
  applyResolvingImpulse(lambda) {
   
    this.body1.applyImpulse(scale(this.J[0], lambda), this.ra);
    this.body2.applyImpulse(scale(this.J[2], lambda), this.rb);
  }
}

class PositionConstraint extends Constraint{
  constructor(body1, body2, n, ra, rb, raLocal, rbLocal, biasFactor, treshold, penDepth){
    super(body1, body2, n, ra, rb, raLocal, rbLocal, biasFactor, null, null, treshold)
    this.penDepth = penDepth
  }
  applyResolvingImpulse(lambda){
    this.body1.applyPseudoImpulse(scale(this.J[0], lambda), this.ra)
    this.body2.applyPseudoImpulse(scale(this.J[2], lambda), this.rb)
  }
  updateRightPart(deltaTime){
    const {body1, body2, ra, rb, n, penDepth, treshold, biasFactor} = this

 
    this.bias = (Math.max(0, penDepth - treshold) / deltaTime) * biasFactor
             
  }
}

class Joint extends Constraint {
  constructor(
    localRa,
    localRb,
    body1,
    body2,
    biasFactor = 0,
    pseudoBiasFactor = 0
  ) {
    super({ body1, body2, biasFactor, pseudoBiasFactor });
    this.localRa = localRa;
    this.localRb = localRb;
    this.PA = this.body1.collider.localToGlobal(this.localRa);
    this.PB = this.body2.collider.localToGlobal(this.localRb);
    this.treshold = 0.001;
    this.reducer = 0.5;
    this.maxImpulse = 0.7;
  }
  updateEq() {
    this.PA = this.body1.collider.localToGlobal(this.localRa);
    this.PB = this.body2.collider.localToGlobal(this.localRb);
    const dir = diff(this.PA, this.PB);
    this.n = normalize(dir);

    this.ra = diff(this.PA, this.body1.collider.pos);
    this.rb = diff(this.PB, this.body2.collider.pos);
    this.penDepth = norm(dir);

    this.J = [
      scale(this.n, -1),
      cross(this.n, this.ra),
      scale(this.n, 1),
      cross(this.rb, this.n),
    ];
    const I1 = this.body1.inverseInertia;
    const I2 = this.body2.inverseInertia;
    const M1 = this.body1.inverseMass;
    const M2 = this.body2.inverseMass;
    this.JM = [
      scale(this.J[0], M1),
      math__WEBPACK_IMPORTED_MODULE_0__.m3.transformPoint(I1, this.J[1]),
      scale(this.J[2], M2),
      math__WEBPACK_IMPORTED_MODULE_0__.m3.transformPoint(I2, this.J[3]),
    ];
    this.effMass =
      M1 + dot(this.JM[0], this.J[1]) + M2 + dot(this.JM[3], this.J[3]);

    this.relativeVelocity = diff(
      sum(this.body2.velocity, cross(this.body2.angularV, this.rb)),
      sum(this.body1.velocity, cross(this.body1.angularV, this.ra))
    );
    this.relativeVelocityNormalProjection = dot(this.relativeVelocity, this.n);
  }
  applyResolvingImpulse(lambda) {
    const maxLambda = norm(
      sum(
        scale(this.body1.velocity, this.body1.mass),
        scale(this.body2.velocity, this.body2.mass)
      )
    );
    lambda = clamp(lambda, -0.1, 0.1);

    this.body1.applyImpulse(scale(this.J[0], lambda), this.ra);
    this.body2.applyImpulse(scale(this.J[2], lambda), this.rb);
  }
  applyResolvingPseudoImpulse(lambda) {
    const max = this.effMass * 10;
    //lambda = clamp(lambda, -1, 1)
    this.body1.applyPseudoImpulse(scale(this.J[0], lambda), [0, 0, 0]);
    this.body2.applyPseudoImpulse(scale(this.J[2], lambda), [0, 0, 0]);
  }
}



/***/ }),

/***/ "./src/physics/createRagdoll.js":
/*!**************************************!*\
  !*** ./src/physics/createRagdoll.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _collider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./collider */ "./src/physics/collider.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact */ "./src/physics/contact.js");
/* harmony import */ var _RigidBody__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RigidBody */ "./src/physics/RigidBody.js");
/* harmony import */ var math__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! math */ "./node_modules/math/index.js");
/* harmony import */ var math__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(math__WEBPACK_IMPORTED_MODULE_3__);




/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(pos = [0,0,0]){
    const body = new _RigidBody__WEBPACK_IMPORTED_MODULE_2__.RigidBody(new _collider__WEBPACK_IMPORTED_MODULE_0__.Box(1,4,1))
    const leftHand = new _RigidBody__WEBPACK_IMPORTED_MODULE_2__.RigidBody(new _collider__WEBPACK_IMPORTED_MODULE_0__.Box(1,3,1))
    const rightHand = new _RigidBody__WEBPACK_IMPORTED_MODULE_2__.RigidBody(new _collider__WEBPACK_IMPORTED_MODULE_0__.Box(1,3,1))
    const leftLeg = new _RigidBody__WEBPACK_IMPORTED_MODULE_2__.RigidBody(new _collider__WEBPACK_IMPORTED_MODULE_0__.Box(1,3,1))
    const rightLeg = new _RigidBody__WEBPACK_IMPORTED_MODULE_2__.RigidBody(new _collider__WEBPACK_IMPORTED_MODULE_0__.Box(1,3,1))
    const head = new _RigidBody__WEBPACK_IMPORTED_MODULE_2__.RigidBody(new _collider__WEBPACK_IMPORTED_MODULE_0__.Box(1.5,1.5,1.5))
    const constraints = [
        new _contact__WEBPACK_IMPORTED_MODULE_1__.Joint([0,2.5,0], [0,-1,0], body, head, 0.1,  0.1),
        new _contact__WEBPACK_IMPORTED_MODULE_1__.Joint([-2,2,0], [0,2,0], body, leftHand, 0.1,  0.1),
        new _contact__WEBPACK_IMPORTED_MODULE_1__.Joint([2,2,0], [0,2,0], body, rightHand,  0.1,  0.1),
        new _contact__WEBPACK_IMPORTED_MODULE_1__.Joint([1.7,-2,0], [0,1.5,0], body, rightLeg, 0.1,  0.1),
        new _contact__WEBPACK_IMPORTED_MODULE_1__.Joint([-1.7,-2,0], [0,1.5,0], body, leftLeg, 0.1,  0.11),
    ]
    body.translate(pos)
   
    head.translate(math__WEBPACK_IMPORTED_MODULE_3__.vector.sum(pos, [0,2,0]))
    leftHand.translate(math__WEBPACK_IMPORTED_MODULE_3__.vector.sum(pos, [-3,2,0]))
    rightHand.translate(math__WEBPACK_IMPORTED_MODULE_3__.vector.sum(pos, [3,2,0]))
    rightLeg.translate(math__WEBPACK_IMPORTED_MODULE_3__.vector.sum(pos, [2, -2.5,0]))
    leftLeg.translate(math__WEBPACK_IMPORTED_MODULE_3__.vector.sum(pos, [-2, -2.5,0]))
    const bodies = [body, leftHand, rightHand, rightLeg, leftLeg, head]
    bodies.forEach(b=>b.setMass(20))
    
    
    return [bodies, constraints]
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
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./src/physics/contact.js");



const { dot, cross, normalize, sum, diff, len, scale, isNull, norm } = math__WEBPACK_IMPORTED_MODULE_0__.vector;
const clipBias = 0.05;
const GJK_MAX_ITERATIONS_NUM = 64;

const findClosestFace = (collider, normal) => {
  const normals = collider.getNormalsGlobal();
  let minDot = dot(normal, normals[0]);
  let index = 0;
  for (let i = 1, n = normals.length; i < n; i++) {
    const _dot = dot(normals[i], normal);
    if (_dot < minDot) {
      minDot = _dot;
      index = i;
    }
  }
  const faceIndices = collider.indices[index];
  const m = collider.getM4();
  return [
    faceIndices.map((i) => math__WEBPACK_IMPORTED_MODULE_0__.m4.transformPoint(m, collider.points[i])),
    normals[index],
  ];
};
const rayVsPlaneIntersec = (plane, point, direction) => {
  const [origin, normal] = plane;
  const _dot = dot(normal, direction);
  const fromPointToOrigin = diff(point, origin);
  const fac = dot(fromPointToOrigin, normal) / _dot;
  return diff(point, scale(direction, fac));
};
const isPointBehindPlane = (plane, point, sign = 1) => {
  const [origin, normal] = plane;
  return dot(normal, diff(point, origin)) * sign > 0 - clipBias;
};
const pointOnPlaneProjection = (plane, point) => {
  const [origin, normal] = plane;
  const fromPointToOrigin = diff(point, origin);
  const projAlongNormal = dot(normal, fromPointToOrigin);

  return diff(point, scale(normal, projAlongNormal));
};
const clipPointsBehindPlane = (plane, points, sign = 1) => {
  const [origin, normal] = plane;

  return points.filter((point) => dot(normal, diff(point, origin)) * sign > 0);
};

const get2DcoordsOnPlane = (i, j, point) => {
  return [dot(i, point), dot(j, point)];
};

const sutherlandHodgman = (S, C) => {};

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

const TOLERANCE = 0.001;
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

    if (dot(p, search_dir) - min_dist < 0.00001) {
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
        console.log("no conv");
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
  console.log("no conv");
  return null;
};

const _gjk = gjk.bind({});

const getContactManifold = (body1, body2) => {
  const coll1 = body1.collider;
  const coll2 = body2.collider;
  const contactData = _gjk(body1, body2);
  if (contactData) {
    const { PA, PB, n } = contactData;
    const nReverse = scale(n, -1);

    const [contactFace1, normal1] = findClosestFace(coll1, nReverse);
    const [contactFace2, normal2] = findClosestFace(coll2, n);
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

    let _2d1 = projections1.map((p) =>
      get2DcoordsOnPlane(i, j, diff(p, origin))
    );
    let _2d2 = projections2.map((p) =>
      get2DcoordsOnPlane(i, j, diff(p, origin))
    );

    const dir1 = (0,_clipping__WEBPACK_IMPORTED_MODULE_1__.isInClockwise)(_2d1[0], _2d1[1], _2d1[2]);
    const dir2 = (0,_clipping__WEBPACK_IMPORTED_MODULE_1__.isInClockwise)(_2d2[0], _2d2[1], _2d2[2]);
    if (dir1 < 0) _2d1 = _2d1.map((_, i) => _2d1.at(-i));
    if (dir2 < 0) _2d2 = _2d2.map((_, i) => _2d2.at(-i));
    const clipped = (0,_clipping__WEBPACK_IMPORTED_MODULE_1__.clip)(_2d1, _2d2);
   
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
  }
  return null;
};




/***/ }),

/***/ "./src/physics/island.js":
/*!*******************************!*\
  !*** ./src/physics/island.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Island)
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
    return a.map(e => e * fac)
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

class Island {
  constructor(...constraints) {
    this.constraints = [...constraints];
    this.size = this.constraints.length
    

  }
  addConstraint(...args) {
    this.constraints.push(...args);
  }
  generateBodyMapping(){
    const constraints = this.constraints
    const bodiesMap = new Map()
    const Jmap = []
    let counter = 0
    constraints.forEach(c=>{
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
    }) 
    this.bodiesMap = bodiesMap
    this.Jmap = Jmap
  }
  generatePseudoVelVector() {}
  generateSystem(deltaTime) {
    const n = this.constraints.length;
    const constraints = this.constraints
    //A = JMJ*, JMJ*x = JV + b
    this.JMJp = new Array(n * n);
    this.JMJ = new Array(n * n);
    this.JV = new Array(n);
    this.JpV = new Array(n);

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
    let numIter = 10
    const lambda0 = new Array(n).fill(0)


    //BJlambda
    
    const Bl = new Array(numBodies).fill([0,0,0,0,0,0])
    for(let i = 0; i < n; i++){
      const b1 = Jmap[i * 2 ]
      const b2 = Jmap[i * 2 + 1] 
    
      const x = vec6.scale(constraints[i].B[0], lambda0[i])
      
      const y = vec6.sum(x, Bl[b1])
      
      Bl[b1] = vec6.sum(vec6.scale(constraints[i].B[0], lambda0[i]), Bl[b1])
      
      
      Bl[b2] = vec6.sum(vec6.scale(constraints[i].B[1], lambda0[i]), Bl[b2])
    
      
    }
  
    //PGS
 
    
    const lambda = [...lambda0]
    for(let i = 0; i< n; i++){
      d.push(constraints[i].effMass)
    }

    while(numIter > 0){
      for(let i = 0; i < n; i++){
        const c = constraints[i]
        const J1 = [...c.J[0], ...c.J[1]]
        const J2 = [...c.J[2], ...c.J[3]]
        const b1 = Jmap[i * 2 ]
        const b2 = Jmap[i * 2 + 1]
       
        let deltaLambda = (c.bias - vec6.dot(J1, Bl[b1]) - vec6.dot(J2, Bl[b2])) / d[i]
        
        lambda0[i] = lambda[i]
        lambda[i] = Math.max(c.lambdaMin, Math.min(lambda0[i] + deltaLambda, c.lambdaMax))
        
        deltaLambda = lambda[i] - lambda0[i]
        
        Bl[b1] = vec6.sum(Bl[b1], vec6.scale(c.B[0], deltaLambda))
        Bl[b2] = vec6.sum(Bl[b2], vec6.scale(c.B[1], deltaLambda))
      
      }
      numIter--
    }
    
    for(let i = 0; i < n; i++){
      constraints[i].applyResolvingImpulse(lambda[i])
    }
    return lambda
  }
  getJMJ() {
    return this.JMJ.map((f) => f());
  }
  getJV(deltaTime) {
    return this.JV.map((f) => f(deltaTime));
  }
  getJpV(deltaTime) {
    return this.JpV.map((f) => f(deltaTime));
  }
  getJMJp() {
    return this.JMJp.map((f) => f());
  }
  getUpdatedValues(deltaTime) {
    return [
      this.JMJ.map((f) => f()),
      this.JV.map((f) => f()),
      this.JpV.map((f) => f(deltaTime)),
    ];
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
/* harmony import */ var _constraints__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constraints */ "./src/physics/constraints.js");
/* harmony import */ var _gjk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gjk */ "./src/physics/gjk.js");
/* harmony import */ var _manifold__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./manifold */ "./src/physics/manifold.js");
/* harmony import */ var _island__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./island */ "./src/physics/island.js");
/* harmony import */ var _GSsolver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./GSsolver */ "./src/physics/GSsolver.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contact */ "./src/physics/contact.js");










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
    const system = new _island__WEBPACK_IMPORTED_MODULE_5__["default"](...constraints);
    system.generateSystem();
    const positionSystem = new _island__WEBPACK_IMPORTED_MODULE_5__["default"](...constraints);
    positionSystem.generateSystem();
    this.constraints.set(name, [system, positionSystem]);
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
          const contacts = (0,_gjk__WEBPACK_IMPORTED_MODULE_3__.gjk)(object, cols[j]);

          if (contacts) {
            manifold = new _manifold__WEBPACK_IMPORTED_MODULE_4__["default"](...contacts);

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
    const system = new _island__WEBPACK_IMPORTED_MODULE_5__["default"]();
    const frictionSystem = new _island__WEBPACK_IMPORTED_MODULE_5__["default"]();
    const contactConstraints = [];
    const frictionConstraints = [];
    for (let [key, manifold] of manifolds) {
      const useVelocityBias = manifold.contacts.length < 3;

      manifold.contacts.forEach((c) => {
        const { body1, body2, raLocal, rbLocal, ra, rb, i, j, penDepth, n } = c;
        const constraint = new _contact__WEBPACK_IMPORTED_MODULE_7__.ContactConstraint(
          body1,
          body2,
          n,
          ra,
          rb,
          raLocal,
          rbLocal,
          null,
          null,
          penDepth,
          i,
          j
        );

        const fConstraint1 = new _contact__WEBPACK_IMPORTED_MODULE_7__.FrictionConstraint(
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
        const fConstraint2 = new _contact__WEBPACK_IMPORTED_MODULE_7__.FrictionConstraint(
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
          constraint.biasFactor = 0.12;
        }
        constraint.updateLeftPart(deltaTime);
        constraint.updateRightPart(deltaTime);
        fConstraint1.updateLeftPart(deltaTime);
        fConstraint2.updateLeftPart(deltaTime);
        fConstraint1.updateRightPart(deltaTime);
        fConstraint2.updateRightPart(deltaTime);
        contactConstraints.push(constraint);
        frictionConstraints.push(fConstraint1, fConstraint2);
      });
    }
    system.addConstraint(...contactConstraints);
    frictionSystem.addConstraint(...frictionConstraints);
    system.generateSystem(deltaTime);
    const lambda = system.solvePGS(deltaTime);
    for (let i = 0, n = lambda.length; i < n; i++) {
      frictionConstraints[2 * i].lambdaMin *= lambda[i];
      frictionConstraints[2 * i].lambdaMax *= lambda[i];
      frictionConstraints[2 * i + 1].lambdaMin *= lambda[i];
      frictionConstraints[2 * i + 1].lambdaMax *= lambda[i];
    }
    frictionSystem.generateSystem(deltaTime);
    frictionSystem.solvePGS(deltaTime);
    /*  
    for (const [name, constraints] of this.constraints) {
      const system = constraints[0];
      system.constraints.forEach((c) => c.updateEq());

      const JMJ = system.getJMJ();
      const JV = system.getJV(deltaTime);

      const lambda = GaussSeidel(JMJ, JV, system.constraints.length, 1e-12);

      system.applyResolvingImpulses(lambda);
    }*/
    for (let i = 0, n = this.objects.length; i < n; i++) {
      this.objects[i].integrateVelocities(deltaTime);
    }
    this.objects.forEach((object) => object.updateInverseInertia());
    const positionSystem = new _island__WEBPACK_IMPORTED_MODULE_5__["default"]();
    const positionConstraints = [];

    for (const [key, manifold] of manifolds) {
      const { contacts } = manifold;
      if (contacts.length > 2) {
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
            const constraint = new _contact__WEBPACK_IMPORTED_MODULE_7__.PositionConstraint(
              body1,
              body2,
              n,
              ra,
              rb,
              raLocal,
              rbLocal,
              0.12,
              0.001,
              penDepth
            );
            constraint.updateLeftPart(deltaTime)
            constraint.updateRightPart(deltaTime)
            return constraint
          })
        );
      }
    }
    positionSystem.addConstraint(...positionConstraints)
    positionSystem.generateSystem(deltaTime);
    
    positionSystem.solvePGS(deltaTime)
    for (let i = 0, n = this.objects.length; i < n; i++) {
      this.objects[i].integratePseudoVelocities(deltaTime);
    }
    this.objects.forEach((object) => object.updateInverseInertia());
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
/* harmony import */ var _src_game_mouse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/game/mouse */ "./src/game/mouse.js");
/* harmony import */ var _src_game_keylogger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/game/keylogger */ "./src/game/keylogger.js");
/* harmony import */ var _src_physics_simulation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/physics/simulation */ "./src/physics/simulation.js");
/* harmony import */ var _src_physics_RigidBody__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/physics/RigidBody */ "./src/physics/RigidBody.js");
/* harmony import */ var _src_physics_collider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/physics/collider */ "./src/physics/collider.js");
/* harmony import */ var _src_game_controllable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/game/controllable */ "./src/game/controllable.js");
/* harmony import */ var _src_physics_contact__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./src/physics/contact */ "./src/physics/contact.js");
/* harmony import */ var _src_physics_createRagdoll__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./src/physics/createRagdoll */ "./src/physics/createRagdoll.js");







const mouseInput = new _src_game_mouse__WEBPACK_IMPORTED_MODULE_2__["default"]()

mouseInput.listen() 
const keyInput = new _src_game_keylogger__WEBPACK_IMPORTED_MODULE_3__["default"]()
keyInput.listen()
const context = new graphics__WEBPACK_IMPORTED_MODULE_1__.GLcontextWrapper("canvas");
const gl = context.getContext();
context.resizeCanvasToDisplaySize();
const drawer = new graphics__WEBPACK_IMPORTED_MODULE_1__.Drawer();
drawer.setContext(context).update3DProjectionMatrix();

graphics__WEBPACK_IMPORTED_MODULE_1__.defaultProgram.setContext(context).compileShaders().createUniformSetters();

const box = new graphics__WEBPACK_IMPORTED_MODULE_1__.PrimitiveRenderer((0,graphics__WEBPACK_IMPORTED_MODULE_1__.createBox)(1, 1, 1));

const circle = new graphics__WEBPACK_IMPORTED_MODULE_1__.PrimitiveRenderer((0,graphics__WEBPACK_IMPORTED_MODULE_1__.createCircle)(8, 4));

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
  .setProgramInfo(graphics__WEBPACK_IMPORTED_MODULE_1__.defaultProgram)
  .createGeometryBuffers()
  .setAttributes()
  .setMode(2);

circle
  .setContext(context)
  .createVAO()
  .setDrawer(drawer)
  .setProgramInfo(graphics__WEBPACK_IMPORTED_MODULE_1__.defaultProgram)
  .createGeometryBuffers()
  .setAttributes()
  .setMode(3);

line
  .setContext(context)
  .createVAO()
  .setDrawer(drawer)
  .setProgramInfo(graphics__WEBPACK_IMPORTED_MODULE_1__.defaultProgram)
  .createBufferAttribData("a_position", "vec3", { location: 0 })
  .setOwnAttribute("a_position")
  .bufferData("a_position", new Float32Array([0, 0, 0, 0, 1, 0]));

points
  .setContext(context)
  .createVAO()
  .setDrawer(drawer)
  .setProgramInfo(graphics__WEBPACK_IMPORTED_MODULE_1__.defaultProgram)
  .createBufferAttribData("a_position", "vec3", { location: 0 })
  .setOwnAttribute("a_position")
  .bufferData("a_position", new Float32Array([0, 0, 0]));

/*
const uniforms = {
  u_lightWorldPosition: [0, 0, 10],
  u_ambientLight: [1, 1, 0.3, 0.11],
  u_reverseLightDirection: [1, 0, 0],
  u_shininess: 300,
};
*/













const sim = new _src_physics_simulation__WEBPACK_IMPORTED_MODULE_4__["default"]();

const floor = { physics: new _src_physics_RigidBody__WEBPACK_IMPORTED_MODULE_5__.RigidBody(new _src_physics_collider__WEBPACK_IMPORTED_MODULE_6__.Box(1000, 6, 1000)), sprite: box };

const cube2 = { physics: new _src_physics_RigidBody__WEBPACK_IMPORTED_MODULE_5__.RigidBody(new _src_physics_collider__WEBPACK_IMPORTED_MODULE_6__.Box(2, 2, 2)), sprite: box };
const cube3 = { physics: new _src_physics_RigidBody__WEBPACK_IMPORTED_MODULE_5__.RigidBody(new _src_physics_collider__WEBPACK_IMPORTED_MODULE_6__.Box(2, 2, 2)), sprite: box };
const cube4 = { physics: new _src_physics_RigidBody__WEBPACK_IMPORTED_MODULE_5__.Player(new _src_physics_collider__WEBPACK_IMPORTED_MODULE_6__.Box(2, 2, 2)), sprite: box };
cube2.physics.translate([0, 4.7, 0]);
cube4.physics.translate([0, 10, -5]);
cube3.physics.translate([0, 3, 0]);
//cube.physics.rotate([Math.PI*0.6,Math.PI*0.3,Math.PI*0.3])

cube2.physics.addAcceleration([0, -9.8, 0]);
cube3.physics.addAcceleration([0, -9.8, 0]);
cube4.physics.addAcceleration([0, -9.8, 0]);

cube2.physics.setMass(20)
cube3.physics.setMass(20)
sim.addObject(floor.physics);

sim.addObject(cube2.physics);
sim.addObject(cube3.physics);
sim.addObject(cube4.physics);
const objects = [floor,  cube2, cube3, cube4];


for(let i = 0; i < 5; i++){
  const cube = { physics: new _src_physics_RigidBody__WEBPACK_IMPORTED_MODULE_5__.RigidBody(new _src_physics_collider__WEBPACK_IMPORTED_MODULE_6__.Box(10, 5, 15)), sprite: box };
  cube.physics.translate([10, 5 * i +15 , 0])
  cube.physics.setMass(5);
  cube.physics.addAcceleration([0, -9.8, 0])
  sim.addObject(cube.physics);
  objects.push(cube)
}

floor.physics.setMass(100000000);



floor.physics.translate([0, -3, 0]);
//floor.physics.rotate([0.0,0,0])
//floor.static = true

const player = new _src_game_controllable__WEBPACK_IMPORTED_MODULE_7__.Controllable(cube4.physics)

player.listenKeyboard(keyInput)
player.listenMouse(mouseInput)


/*
const [bodies, constraints] = createRagdoll([0,25,0])
bodies.forEach(b=>{
  b.addAcceleration([0,-9.8,0])
 
  sim.addObject(b)
}) 
//sim.addConstraints(constraints, 'ragdoll')
//sim.addConstraints([new Joint([0,20,0], [0,0,0],floor.physics,bodies[0],0.1, 0.0)], 'name')
objects.push(...bodies.map(b=> ({physics : b, sprite : box})))
*/
let lastCall = Date.now();
const fps = document.querySelector("#fps");
document.addEventListener('keypress', (e) => {if(e.key === 'p')sim.tick(0.015)})
let i = 0
const loop = () => {
  sim.tick(0.015);
  player.tick()
  const curentTime = Date.now();
  const delta = curentTime - lastCall;
  fps.textContent = (1 / delta) * 1000;
  lastCall = curentTime;
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
  gl.enable(gl.CULL_FACE);
  gl.enable(gl.DEPTH_TEST);
  
  const cameraMatrix = player.camMatrix
  
  i += 0.001;
  
  
  const manifolds = sim.collisionManifolds.values();
  
  for (const manifold of manifolds) {
   
    
    manifold.contacts.forEach((contact) => {
      
      points
        .draw({
          u_matrix: math__WEBPACK_IMPORTED_MODULE_0__.m4.translation(...contact.PA),
          u_color: [0.6, 0.6, 0.0, 1],
        }, cameraMatrix)
        .draw({
          u_matrix: math__WEBPACK_IMPORTED_MODULE_0__.m4.translation(...contact.PB),
          u_color: [0.5, 0.1, 0.2, 1],
        }, cameraMatrix);
        

       
        

       

        
        
    });
  }
  
  objects.forEach((obj) => {
    const scale = math__WEBPACK_IMPORTED_MODULE_0__.vector.diff(
      obj.physics.collider.max,
      obj.physics.collider.min
    );
    const u_matrix = obj.physics.collider.getM4()
    obj.sprite.draw({ u_color: [1, 0, 1, 1], u_matrix }, cameraMatrix);
  });
  
  
  circle.draw(
    {
      u_matrix: math__WEBPACK_IMPORTED_MODULE_0__.m4.rotation(Math.PI/2,0,0),
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
  )
 
    
  gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
  requestAnimationFrame(loop)
};
loop();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsdUJBQXVCO0FBQzVDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLG1CQUFtQjtBQUM1QztBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLGtCQUFrQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0Isc0JBQXNCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixFQUFF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QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzNLQTtBQUNBLE9BQU8sTUFBTSxFQUFFLG1CQUFPLENBQUMsbURBQVU7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7O0FBR0E7Ozs7Ozs7Ozs7O0FDcGxCQSxXQUFXLG1CQUFPLENBQUMsMkNBQU07QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1CQUFtQjs7Ozs7Ozs7Ozs7QUNqRm5CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzZCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEs3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLE9BQU87QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxRQUFRO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUM4RDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0ZsQjtBQUM1QztBQUNBLFFBQVEsbUJBQW1CLEVBQUUsd0NBQU07QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsNkNBQVc7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Q3pCO0FBQ0E7QUFDQSxpQkFBaUIsc0RBQVc7QUFDNUI7QUFDQSxrQkFBa0IsT0FBTztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsbUJBQW1CO0FBQ3JDLGtEQUFrRCxPQUFPO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNrRTs7Ozs7Ozs7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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLDRCQUE0QjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsT0FBTztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiw4QkFBOEI7QUFDeEQ7QUFDQTtBQUNBO0FBQ0Esb0JBQW9C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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxPQUFPO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xQNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLHNDQUFJO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQ25TQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7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Q0FBaUM7QUFDdkQsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDZDQUFXO0FBQzNCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsNkNBQVc7QUFDM0I7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiw2Q0FBVztBQUMzQjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9waHMvLi9ub2RlX21vZHVsZXMvZ3JhcGhpY3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcGhzLy4vbm9kZV9tb2R1bGVzL2dyYXBoaWNzL3NyYy9CdWZmZXJBdHRyaWJ1dGUuanMiLCJ3ZWJwYWNrOi8vcGhzLy4vbm9kZV9tb2R1bGVzL2dyYXBoaWNzL3NyYy9EcmF3ZXIuanMiLCJ3ZWJwYWNrOi8vcGhzLy4vbm9kZV9tb2R1bGVzL2dyYXBoaWNzL3NyYy9NZXNoUmVuZGVyZXIuanMiLCJ3ZWJwYWNrOi8vcGhzLy4vbm9kZV9tb2R1bGVzL2dyYXBoaWNzL3NyYy9QcmltaXRpdmVSZW5kZXJlci5qcyIsIndlYnBhY2s6Ly9waHMvLi9ub2RlX21vZHVsZXMvZ3JhcGhpY3Mvc3JjL2F0dHJpYlR5cGVQcm9wcy5qcyIsIndlYnBhY2s6Ly9waHMvLi9ub2RlX21vZHVsZXMvZ3JhcGhpY3Mvc3JjL2VudGl0eS5qcyIsIndlYnBhY2s6Ly9waHMvLi9ub2RlX21vZHVsZXMvZ3JhcGhpY3Mvc3JjL2VudW1zLmpzIiwid2VicGFjazovL3Bocy8uL25vZGVfbW9kdWxlcy9ncmFwaGljcy9zcmMvZ2x0ZlV0aWxzLmpzIiwid2VicGFjazovL3Bocy8uL25vZGVfbW9kdWxlcy9ncmFwaGljcy9zcmMvcHJpbWl0aXZlcy5qcyIsIndlYnBhY2s6Ly9waHMvLi9ub2RlX21vZHVsZXMvZ3JhcGhpY3Mvc3JjL3Byb2dyYW1JbmZvLmpzIiwid2VicGFjazovL3Bocy8uL25vZGVfbW9kdWxlcy9ncmFwaGljcy9zcmMvcmVuZGVyL3NoYWRlcnMvRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly9waHMvLi9ub2RlX21vZHVsZXMvZ3JhcGhpY3Mvc3JjL3JlbmRlci9zaGFkZXJzL0xpZ2h0aW5nLmpzIiwid2VicGFjazovL3Bocy8uL25vZGVfbW9kdWxlcy9ncmFwaGljcy9zcmMvcmVuZGVyL3NoYWRlcnMvZ2xzbC5qcyIsIndlYnBhY2s6Ly9waHMvLi9ub2RlX21vZHVsZXMvZ3JhcGhpY3Mvc3JjL3JlbmRlci9zaGFkZXJzL2luZGV4LmpzIiwid2VicGFjazovL3Bocy8uL25vZGVfbW9kdWxlcy9ncmFwaGljcy9zcmMvdGV4dHVyZVV0aWxzLmpzIiwid2VicGFjazovL3Bocy8uL25vZGVfbW9kdWxlcy9tYXRoL2luZGV4LmpzIiwid2VicGFjazovL3Bocy8uL25vZGVfbW9kdWxlcy9tYXRoL3NyYy9hYWJiLmpzIiwid2VicGFjazovL3Bocy8uL25vZGVfbW9kdWxlcy9tYXRoL3NyYy9tMy5qcyIsIndlYnBhY2s6Ly9waHMvLi9ub2RlX21vZHVsZXMvbWF0aC9zcmMvbTQuanMiLCJ3ZWJwYWNrOi8vcGhzLy4vbm9kZV9tb2R1bGVzL21hdGgvc3JjL25vZGUuanMiLCJ3ZWJwYWNrOi8vcGhzLy4vbm9kZV9tb2R1bGVzL21hdGgvc3JjL3ZlY3Rvci5qcyIsIndlYnBhY2s6Ly9waHMvLi9zcmMvZ2FtZS9jb250cm9sbGFibGUuanMiLCJ3ZWJwYWNrOi8vcGhzLy4vc3JjL2dhbWUva2V5bG9nZ2VyLmpzIiwid2VicGFjazovL3Bocy8uL3NyYy9nYW1lL21vdXNlLmpzIiwid2VicGFjazovL3Bocy8uL3NyYy9waHlzaWNzL0dTc29sdmVyLmpzIiwid2VicGFjazovL3Bocy8uL3NyYy9waHlzaWNzL1JpZ2lkQm9keS5qcyIsIndlYnBhY2s6Ly9waHMvLi9zcmMvcGh5c2ljcy9jbGlwcGluZy5qcyIsIndlYnBhY2s6Ly9waHMvLi9zcmMvcGh5c2ljcy9jb2xsaWRlci5qcyIsIndlYnBhY2s6Ly9waHMvLi9zcmMvcGh5c2ljcy9jb25zdHJhaW50cy5qcyIsIndlYnBhY2s6Ly9waHMvLi9zcmMvcGh5c2ljcy9jb250YWN0LmpzIiwid2VicGFjazovL3Bocy8uL3NyYy9waHlzaWNzL2NyZWF0ZVJhZ2RvbGwuanMiLCJ3ZWJwYWNrOi8vcGhzLy4vc3JjL3BoeXNpY3MvZXZlbnRFbWl0dGVyLmpzIiwid2VicGFjazovL3Bocy8uL3NyYy9waHlzaWNzL2dqay5qcyIsIndlYnBhY2s6Ly9waHMvLi9zcmMvcGh5c2ljcy9pc2xhbmQuanMiLCJ3ZWJwYWNrOi8vcGhzLy4vc3JjL3BoeXNpY3MvbWFuaWZvbGQuanMiLCJ3ZWJwYWNrOi8vcGhzLy4vc3JjL3BoeXNpY3Mvc2ltdWxhdGlvbi5qcyIsIndlYnBhY2s6Ly9waHMvLi9zcmMvcGh5c2ljcy90cmVlLmpzIiwid2VicGFjazovL3Bocy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9waHMvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcGhzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9waHMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9waHMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9waHMvLi9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCdWZmZXJJbmZvLCBEeW5hbWljQnVmZmVySW5mbyB9IGZyb20gXCIuL3NyYy9CdWZmZXJBdHRyaWJ1dGVcIjtcbmltcG9ydCB7XG4gIFByaW1pdGl2ZVJlbmRlckluZm9Gcm9tQXJyYXlEYXRhLFxuICBBcnJheURhdGFGcm9tR2x0ZixcbiAgRW50aXR5RGF0YUZyb21HbHRmLFxuICBHTFRGLFxufSBmcm9tIFwiLi9zcmMvZ2x0ZlV0aWxzXCI7XG5pbXBvcnQgeyBNZXNoUmVuZGVyZXIsIFNraW5uZWRNZXNoUmVuZGVyZXIgfSBmcm9tIFwiLi9zcmMvTWVzaFJlbmRlcmVyXCI7XG5pbXBvcnQgeyBjcmVhdGVCb3gsIGNyZWF0ZUNvbmUsIGNyZWF0ZUNpcmNsZSB9IGZyb20gXCIuL3NyYy9wcmltaXRpdmVzXCI7XG5pbXBvcnQgUHJpbWl0aXZlUmVuZGVyZXIgZnJvbSBcIi4vc3JjL1ByaW1pdGl2ZVJlbmRlcmVyXCI7XG5pbXBvcnQge1xuICBnZXRHTFR5cGVGb3JUeXBlZEFycmF5LFxuICBQcm9ncmFtSW5mbyxcbiAgZXhwYW5kZWRUeXBlZEFycmF5LFxufSBmcm9tIFwiLi9zcmMvcHJvZ3JhbUluZm9cIjtcbmltcG9ydCBEcmF3ZXIgZnJvbSBcIi4vc3JjL0RyYXdlclwiO1xuaW1wb3J0IHtcbiAgVGV4dHVyZSxcbiAgbWFrZUltZ0Zyb21TdmdYbWwsXG4gIG1ha2VTdHJpcGVJbWcsXG4gIHNldFRleHR1cmVVbml0cyxcbn0gZnJvbSBcIi4vc3JjL3RleHR1cmVVdGlsc1wiO1xuaW1wb3J0IEVudGl0eSBmcm9tIFwiLi9zcmMvZW50aXR5XCI7XG5pbXBvcnQgeyBsaWdodGluZ1Byb2dyYW0sIGRlZmF1bHRQcm9ncmFtIH0gZnJvbSBcIi4vc3JjL3JlbmRlci9zaGFkZXJzXCI7XG5jbGFzcyBHTGNvbnRleHRXcmFwcGVyIHtcbiAgY29uc3RydWN0b3IoY2FudmFzX2lkKSB7XG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7Y2FudmFzX2lkfWApO1xuICAgIGNvbnN0IGdsID0gY2FudmFzLmdldENvbnRleHQoXCJ3ZWJnbDJcIik7XG5cbiAgICBpZiAoIWdsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyB3ZWJnbCFcIik7XG4gICAgfVxuICAgIHRoaXMuZ2wgPSBnbDtcbiAgICB0aGlzLnRleHR1cmVzID0ge307XG4gICAgdGhpcy5yZW5kZXJDYWNoZSA9IHtcbiAgICAgIGxhc3RVc2VkUHJvZ3JhbUluZm86IG51bGwsXG4gICAgfTtcbiAgICB0aGlzLnByb2dyYW1zID0ge307XG4gIH1cbiAgZ2V0TGFzdFVzZWRQcm9ncmFtSW5mbygpIHtcbiAgICByZXR1cm4gdGhpcy5yZW5kZXJDYWNoZS5sYXN0VXNlZFByb2dyYW1JbmZvO1xuICB9XG4gIHNldExhc3RVc2VkUHJvZ3JhbShwcm9ncmFtSW5mbykge1xuICAgIHRoaXMucmVuZGVyQ2FjaGUubGFzdFVzZWRQcm9ncmFtSW5mbyA9IHByb2dyYW1JbmZvO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIHVzZVByb2dyYW1JbmZvKHByb2dyYW1JbmZvKSB7XG4gICAgaWYgKHByb2dyYW1JbmZvICE9IHRoaXMuZ2V0TGFzdFVzZWRQcm9ncmFtSW5mbygpKSB7XG4gICAgICB0aGlzLmdsLnVzZVByb2dyYW0ocHJvZ3JhbUluZm8ucHJvZ3JhbSk7XG4gICAgICB0aGlzLnNldExhc3RVc2VkUHJvZ3JhbShwcm9ncmFtSW5mbyk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIHJlc2l6ZUNhbnZhc1RvRGlzcGxheVNpemUobXVsdGlwbGllciA9IDEpIHtcbiAgICBjb25zdCBjYW52YXMgPSB0aGlzLmdsLmNhbnZhcztcbiAgICBjb25zdCB3aWR0aCA9IChjYW52YXMuY2xpZW50V2lkdGggKiBtdWx0aXBsaWVyKSB8IDA7XG4gICAgY29uc3QgaGVpZ2h0ID0gKGNhbnZhcy5jbGllbnRIZWlnaHQgKiBtdWx0aXBsaWVyKSB8IDA7XG5cbiAgICBjYW52YXMud2lkdGggPSB3aWR0aDtcbiAgICBjYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIHJlc2l6ZUNhbnZhcyh3aWR0aCwgaGVpZ2h0KSB7XG4gICAgY29uc3QgY2FudmFzID0gdGhpcy5nbC5jYW52YXM7XG4gICAgY2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBnZXRDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmdsO1xuICB9XG4gIGdldENhbnZhc1JlY3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2wuY2FudmFzLmdldEJvdW5kaW47XG4gIH1cbiAgY3JlYXRlVGV4dHVyZSh0ZXh0dXJlTmFtZSkge1xuICAgIGNvbnN0IHRleHR1cmUgPSBuZXcgVGV4dHVyZSh0aGlzLmdsKTtcbiAgICB0aGlzLnRleHR1cmVzID0geyAuLi50aGlzLnRleHR1cmVzLCBbdGV4dHVyZU5hbWVdOiB0ZXh0dXJlIH07XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgZ2V0VGV4dHVyZSh0ZXh0dXJlTmFtZSkge1xuICAgIHJldHVybiB0aGlzLnRleHR1cmVzW3RleHR1cmVOYW1lXTtcbiAgfVxuICBzZXRUZXh0dXJlVW5pdCh0ZXh0dXJlTmFtZSwgdW5pdE51bSkge1xuICAgIGNvbnN0IHRleHR1cmUgPSB0aGlzLmdldFRleHR1cmUodGV4dHVyZU5hbWUpLnRleHR1cmU7XG4gICAgc2V0VGV4dHVyZVVuaXRzKHRoaXMuZ2wsIHRleHR1cmUsIHVuaXROdW0pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG5cbmV4cG9ydCB7XG4gIEdMVEYsXG4gIEdMY29udGV4dFdyYXBwZXIsXG4gIFRleHR1cmUsXG4gIG1ha2VJbWdGcm9tU3ZnWG1sLFxuICBtYWtlU3RyaXBlSW1nLFxuICBFbnRpdHksXG4gIFByaW1pdGl2ZVJlbmRlcmVyLFxuICBFbnRpdHlEYXRhRnJvbUdsdGYsXG4gIFByaW1pdGl2ZVJlbmRlckluZm9Gcm9tQXJyYXlEYXRhLFxuICBBcnJheURhdGFGcm9tR2x0ZixcbiAgTWVzaFJlbmRlcmVyLFxuICBTa2lubmVkTWVzaFJlbmRlcmVyLFxuICBjcmVhdGVCb3gsXG4gIFByb2dyYW1JbmZvLFxuICBEcmF3ZXIsXG4gIGNyZWF0ZUNvbmUsXG4gIGNyZWF0ZUNpcmNsZSxcbiAgbGlnaHRpbmdQcm9ncmFtLFxuICBkZWZhdWx0UHJvZ3JhbSxcbn07XG4iLCJpbXBvcnQgeyBnZXRHTFR5cGVGb3JUeXBlZEFycmF5IH0gZnJvbSBcIi4vcHJvZ3JhbUluZm9cIjtcbmltcG9ydCB7IFRZUEVEX0FSUkFZUyB9IGZyb20gXCIuL2VudW1zXCI7XG5jb25zdCBjcmVhdGVJbmRpY2VzQnVmZmVyID0gKGdsLCBpbmRpY2VzKSA9PiB7XG4gIGNvbnN0IGJ1ZmZlciA9IGdsLmNyZWF0ZUJ1ZmZlcigpO1xuICBnbC5iaW5kQnVmZmVyKGdsLkVMRU1FTlRfQVJSQVlfQlVGRkVSLCBidWZmZXIpO1xuICBnbC5idWZmZXJEYXRhKGdsLkVMRU1FTlRfQVJSQVlfQlVGRkVSLCBpbmRpY2VzLCBnbC5TVEFUSUNfRFJBVyk7XG4gIHJldHVybiBidWZmZXI7XG59O1xuY29uc3QgZmxvYXRBdHRyaWJTZXR0ZXIgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIG51bUNvbXBvbmVudHMsXG4gICAgdHlwZSxcbiAgICBsb2NhdGlvbixcbiAgICBudW1BdHRyaWJ1dGVzLFxuICAgIHN0cmlkZSxcbiAgICBvZmZzZXQsXG4gICAgYnVmZmVyLFxuICAgIGdsLFxuICAgIGRpdmlzb3IsXG4gIH0gPSBwcm9wcztcblxuICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgYnVmZmVyKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1BdHRyaWJ1dGVzOyBpKyspIHtcbiAgICBjb25zdCBfb2Zmc2V0ID0gbnVtQ29tcG9uZW50cyAqIGkgKiBUWVBFRF9BUlJBWVNbdHlwZV0uQllURVNfUEVSX0VMRU1FTlQ7XG4gICAgZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkobG9jYXRpb24gKyBpKTtcbiAgICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKFxuICAgICAgbG9jYXRpb24gKyBpLFxuICAgICAgbnVtQ29tcG9uZW50cyxcbiAgICAgIHR5cGUsXG4gICAgICBmYWxzZSxcbiAgICAgIHN0cmlkZSxcbiAgICAgIG9mZnNldCArIF9vZmZzZXRcbiAgICApO1xuXG4gICAgaWYgKGRpdmlzb3IpIGdsLnZlcnRleEF0dHJpYkRpdmlzb3IobG9jYXRpb24gKyBpLCBkaXZpc29yKTtcbiAgfVxufTtcbmNvbnN0IGludEF0dHJpYlNldHRlciA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgbnVtQ29tcG9uZW50cyxcbiAgICB0eXBlLFxuICAgIGxvY2F0aW9uLFxuICAgIG51bUF0dHJpYnV0ZXMsXG4gICAgc3RyaWRlLFxuICAgIG9mZnNldCxcbiAgICBidWZmZXIsXG4gICAgZ2wsXG4gICAgZGl2aXNvcixcbiAgfSA9IHByb3BzO1xuICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgYnVmZmVyKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1BdHRyaWJ1dGVzOyBpKyspIHtcbiAgICBjb25zdCBfb2Zmc2V0ID0gbnVtQ29tcG9uZW50cyAqIGkgKiBUWVBFRF9BUlJBWVNbdHlwZV0uQllURVNfUEVSX0VMRU1FTlQ7XG4gICAgZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkobG9jYXRpb24gKyBpKTtcbiAgICBnbC52ZXJ0ZXhBdHRyaWJJUG9pbnRlcihcbiAgICAgIGxvY2F0aW9uICsgaSxcbiAgICAgIG51bUNvbXBvbmVudHMsXG4gICAgICB0eXBlLFxuICAgICAgZmFsc2UsXG4gICAgICBzdHJpZGUsXG4gICAgICBvZmZzZXQgKyBfb2Zmc2V0XG4gICAgKTtcbiAgICBpZiAoZGl2aXNvcikgZ2wudmVydGV4QXR0cmliRGl2aXNvcihsb2NhdGlvbiArIGksIGRpdmlzb3IpO1xuICB9XG59O1xuY29uc3QgYXR0cmliVHlwZU1hcCA9IHt9O1xuYXR0cmliVHlwZU1hcFsweDE0MDBdID0gaW50QXR0cmliU2V0dGVyO1xuYXR0cmliVHlwZU1hcFsweDE0MDZdID0gZmxvYXRBdHRyaWJTZXR0ZXI7XG5hdHRyaWJUeXBlTWFwWzB4MTQwMV0gPSBpbnRBdHRyaWJTZXR0ZXI7XG5hdHRyaWJUeXBlTWFwWzB4MTQwNF0gPSBpbnRBdHRyaWJTZXR0ZXI7XG5hdHRyaWJUeXBlTWFwWzB4MTQwNV0gPSBpbnRBdHRyaWJTZXR0ZXI7XG5hdHRyaWJUeXBlTWFwWzB4MTQwMl0gPSBpbnRBdHRyaWJTZXR0ZXI7XG5hdHRyaWJUeXBlTWFwWzB4MTQwM10gPSBpbnRBdHRyaWJTZXR0ZXI7XG5cbmNvbnN0IHNldEF0dHJpYnV0ZXMgPSAoZ2wsIGJ1ZmZlckluZm8sIGRpdmlzb3IpID0+IHtcbiAgY29uc3QgeyB0eXBlIH0gPSBidWZmZXJJbmZvO1xuICBjb25zdCBzZXR0ZXIgPSBhdHRyaWJUeXBlTWFwW3R5cGVdO1xuICBzZXR0ZXIoYnVmZmVySW5mbywgZGl2aXNvcik7XG59O1xuY2xhc3MgQnVmZmVyQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKGdsLCB0YXJnZXQgPSAweDg4OTIpIHtcbiAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcbiAgICB0aGlzLmJ1ZmZlciA9IGdsLmNyZWF0ZUJ1ZmZlcigpO1xuICAgIHRoaXMuZ2wgPSBnbDtcbiAgICB0aGlzLmJ1ZmZlckRhdGEgPSAoZGF0YSwgYnl0ZUxlbmd0aCwgdXNhZ2UgPSBnbC5TVEFUSUNfRFJBVykgPT4ge1xuICAgICAgZ2wuYmluZEJ1ZmZlcih0YXJnZXQsIHRoaXMuYnVmZmVyKTtcbiAgICAgIGdsLmJ1ZmZlckRhdGEodGFyZ2V0LCBkYXRhIHx8IGJ5dGVMZW5ndGgsIHVzYWdlKTtcbiAgICB9O1xuICAgIHRoaXMuYnVmZmVyU3ViRGF0YSA9IChkYXRhLCBvZmZzZXQgPSAwKSA9PiB7XG4gICAgICBnbC5iaW5kQnVmZmVyKHRhcmdldCwgdGhpcy5idWZmZXIpO1xuICAgICAgZ2wuYnVmZmVyU3ViRGF0YSh0YXJnZXQsIG9mZnNldCwgZGF0YSk7XG4gICAgfTtcbiAgfVxufVxuY2xhc3MgQXR0cmlidXRlU2V0dGVyIHtcbiAgY29uc3RydWN0b3IoaW5mbykge1xuICAgIHRoaXMuc3RyaWRlID0gaW5mby5zdHJpZGUgfHwgMDtcbiAgICB0aGlzLm51bUNvbXBvbmVudHMgPSBpbmZvLm51bUNvbXBvbmVudHM7XG4gICAgdGhpcy5udW1BdHRyaWJ1dGVzID0gaW5mby5udW1BdHRyaWJ1dGVzIHx8IDE7XG4gICAgdGhpcy5vZmZzZXQgPSBpbmZvLm9mZnNldCB8fCAwO1xuICAgIHRoaXMudHlwZSA9IGluZm8udHlwZTtcbiAgICB0aGlzLmxvY2F0aW9uID0gaW5mby5sb2NhdGlvbjtcbiAgfVxuICBzZXRBdHRyaWJ1dGUoYnVmZmVyQ29udHJvbGxlciwgZGl2aXNvcikge1xuICAgIGNvbnN0IHsgdHlwZSB9ID0gdGhpcztcbiAgICBjb25zdCBzZXR0ZXIgPSBhdHRyaWJUeXBlTWFwW3R5cGVdO1xuICAgIHNldHRlcih0aGlzLCBidWZmZXJDb250cm9sbGVyLCBkaXZpc29yKTtcbiAgfVxufVxuY2xhc3MgQnVmZmVyQXR0cmlidXRlIHtcbiAgY29uc3RydWN0b3IoZ2wsIGluZm8pIHtcbiAgICB0aGlzLmdsID0gZ2w7XG4gICAgdGhpcy5idWZmZXIgPSBnbC5jcmVhdGVCdWZmZXIoKTtcbiAgICB0aGlzLnN0cmlkZSA9IGluZm8uc3RyaWRlIHx8IDA7XG4gICAgdGhpcy5udW1Db21wb25lbnRzID0gaW5mby5udW1Db21wb25lbnRzO1xuICAgIHRoaXMubnVtQXR0cmlidXRlcyA9IGluZm8ubnVtQXR0cmlidXRlcyB8fCAxO1xuICAgIHRoaXMub2Zmc2V0ID0gaW5mby5vZmZzZXQgfHwgMDtcbiAgICB0aGlzLnR5cGUgPSBpbmZvLnR5cGU7XG4gICAgdGhpcy5sb2NhdGlvbiA9IGluZm8ubG9jYXRpb247XG4gICAgdGhpcy5kaXZpc29yID0gaW5mby5kaXZpc29yO1xuICB9XG4gIHNldEF0dHJpYnV0ZSgpIHtcbiAgICBjb25zdCB7IHR5cGUsIGdsIH0gPSB0aGlzO1xuICAgIGNvbnN0IHNldHRlciA9IGF0dHJpYlR5cGVNYXBbdHlwZV07XG4gICAgc2V0dGVyKHRoaXMpO1xuICB9XG4gIGJ1ZmZlckRhdGEoZGF0YSwgYnl0ZUxlbmd0aCwgdXNhZ2UgPSAweDg4ZTQpIHtcbiAgICBjb25zdCB7IGdsLCBidWZmZXIgfSA9IHRoaXM7XG4gICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIGJ1ZmZlcik7XG4gICAgZ2wuYnVmZmVyRGF0YShnbC5BUlJBWV9CVUZGRVIsIGRhdGEgfHwgYnl0ZUxlbmd0aCwgdXNhZ2UpO1xuICB9XG4gIGJ1ZmZlclN1YkRhdGEoZGF0YSwgb2Zmc2V0ID0gMCkge1xuICAgIGNvbnN0IHsgZ2wsIGJ1ZmZlciB9ID0gdGhpcztcbiAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgYnVmZmVyKTtcbiAgICBnbC5idWZmZXJTdWJEYXRhKGdsLkFSUkFZX0JVRkZFUiwgb2Zmc2V0LCBkYXRhKTtcbiAgfVxufVxuXG5leHBvcnQge1xuICBCdWZmZXJBdHRyaWJ1dGUsXG4gIGNyZWF0ZUluZGljZXNCdWZmZXIsXG4gIEF0dHJpYnV0ZVNldHRlcixcbiAgQnVmZmVyQ29udHJvbGxlcixcbn07XG4iLCJpbXBvcnQgeyBtNCB9IGZyb20gXCJtYXRoXCI7XG5cbmNvbnN0IGRlZ1RvUmFkID0gKGQpID0+IChkICogTWF0aC5QSSkgLyAxODA7XG5cbmNvbnN0IGZpZWxkT2ZWaWV3UmFkaWFucyA9IGRlZ1RvUmFkKDkwKTtcblxuY2xhc3MgRHJhd2VyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5jb250ZXh0ID0gbnVsbDtcbiAgICB0aGlzLnByb2plY3Rpb25NYXRyaXggPSBudWxsO1xuICAgIHRoaXMuZmllbGRPZlZpZXdSYWRpYW5zID0gZGVnVG9SYWQoOTApO1xuICB9XG4gIHNldENvbnRleHQoZ2xDb250ZXh0V3JhcHBlcikge1xuICAgIHRoaXMuY29udGV4dCA9IGdsQ29udGV4dFdyYXBwZXI7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgc2V0RmllbGRPZlZpZXcoYW5nbGUpIHtcbiAgICB0aGlzLmZpZWxkT2ZWaWV3UmFkaWFucyA9IGRlZ1RvUmFkKGFuZ2xlKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICB1cGRhdGUzRFByb2plY3Rpb25NYXRyaXgoek5lYXIgPSAwLjAxLCB6RmFyID0gMjAwMCkge1xuICAgIGNvbnN0IHsgZ2wgfSA9IHRoaXMuY29udGV4dDtcbiAgICBjb25zdCBhc3BlY3QgPSBnbC5jYW52YXMuY2xpZW50V2lkdGggLyBnbC5jYW52YXMuY2xpZW50SGVpZ2h0O1xuICAgIHRoaXMucHJvamVjdGlvbk1hdHJpeCA9IG00LnBlcnNwZWN0aXZlKFxuICAgICAgZmllbGRPZlZpZXdSYWRpYW5zLFxuICAgICAgYXNwZWN0LFxuICAgICAgek5lYXIsXG4gICAgICB6RmFyXG4gICAgKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGdldFZpZXdQcm9qZWN0aW9uTWF0cml4KGNhbWVyYU1hdHJpeCkge1xuICAgIGNvbnN0IHsgcHJvamVjdGlvbk1hdHJpeCB9ID0gdGhpcztcbiAgICBjb25zdCB7IGdsIH0gPSB0aGlzLmNvbnRleHQ7XG4gICAgY29uc3Qgdmlld01hdHJpeCA9IG00LmludmVyc2UoY2FtZXJhTWF0cml4KTtcbiAgICByZXR1cm4gbTQubXVsdGlwbHkocHJvamVjdGlvbk1hdHJpeCwgdmlld01hdHJpeCk7XG4gIH1cbiAgZHJhdyhyZW5kZXJJbmZvLCB1bmlmb3JtcywgY2FtZXJhTWF0cml4KSB7XG4gICAgY29uc3Qgdmlld1Byb2plY3Rpb25NYXRyaXggPSB0aGlzLmdldFZpZXdQcm9qZWN0aW9uTWF0cml4KGNhbWVyYU1hdHJpeCk7XG4gICAgY29uc3Qge1xuICAgICAgdmFvLFxuICAgICAgbW9kZSxcbiAgICAgIG9mZnNldCxcbiAgICAgIG51bUVsZW1lbnRzLFxuICAgICAgaW5kaWNlcyxcbiAgICAgIGNvbXBvbmVudFR5cGUsXG4gICAgICBwcm9ncmFtSW5mbyxcbiAgICB9ID0gcmVuZGVySW5mbztcbiAgICBjb25zdCB7IGdsIH0gPSB0aGlzLmNvbnRleHQ7XG5cbiAgICBjb25zdCB3b3JsZFZpZXdQcm9qZWN0aW9uID0gbTQubXVsdGlwbHkoXG4gICAgICB2aWV3UHJvamVjdGlvbk1hdHJpeCxcbiAgICAgIHVuaWZvcm1zLnVfbWF0cml4XG4gICAgKTtcbiAgICBjb25zdCB3b3JsZE1hdHJpeCA9IHVuaWZvcm1zLnVfbWF0cml4O1xuICAgIHRoaXMuY29udGV4dC51c2VQcm9ncmFtSW5mbyhwcm9ncmFtSW5mbyk7XG4gICAgdGhpcy5jb250ZXh0XG4gICAgICAuZ2V0TGFzdFVzZWRQcm9ncmFtSW5mbygpXG4gICAgICAuc2V0VW5pZm9ybXMoeyAuLi51bmlmb3Jtcywgd29ybGRNYXRyaXgsIHdvcmxkVmlld1Byb2plY3Rpb24gfSk7XG4gICAgaWYgKHZhbykgZ2wuYmluZFZlcnRleEFycmF5KHZhbyk7XG4gICAgaWYgKCFpbmRpY2VzKSB7XG4gICAgICBnbC5kcmF3QXJyYXlzKG1vZGUsIG9mZnNldCwgbnVtRWxlbWVudHMpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBnbC5kcmF3RWxlbWVudHMobW9kZSwgbnVtRWxlbWVudHMsIGNvbXBvbmVudFR5cGUsIG9mZnNldCk7XG4gIH1cbiAgZHJhd0luc3RhbmNlZChyZW5kZXJJbmZvLCB1bmlmb3JtcywgY2FtZXJhTWF0cml4LCBudW1JbnN0YW5jZXMpIHtcbiAgICBjb25zdCB2aWV3UHJvamVjdGlvbk1hdHJpeCA9IHRoaXMuZ2V0Vmlld1Byb2plY3Rpb25NYXRyaXgoY2FtZXJhTWF0cml4KTtcbiAgICBjb25zdCB7IGdsIH0gPSB0aGlzLmNvbnRleHQ7XG4gICAgY29uc3QgeyB2YW8sIG1vZGUsIG9mZnNldCwgbnVtRWxlbWVudHMsIGluZGljZXMsIHByb2dyYW1JbmZvIH0gPSByZW5kZXJJbmZvO1xuICAgIGNvbnN0IHdvcmxkVmlld1Byb2plY3Rpb24gPSBtNC5tdWx0aXBseShcbiAgICAgIHZpZXdQcm9qZWN0aW9uTWF0cml4LFxuICAgICAgdW5pZm9ybXMudV9tYXRyaXhcbiAgICApO1xuICAgIGNvbnN0IHdvcmxkTWF0cml4ID0gdW5pZm9ybXMudV9tYXRyaXg7XG4gICAgdGhpcy5jb250ZXh0LnVzZVByb2dyYW1JbmZvKHByb2dyYW1JbmZvKTtcbiAgICB0aGlzLmNvbnRleHRcbiAgICAgIC5nZXRMYXN0VXNlZFByb2dyYW1JbmZvKClcbiAgICAgIC5zZXRVbmlmb3Jtcyh7IC4uLnVuaWZvcm1zLCB3b3JsZE1hdHJpeCwgd29ybGRWaWV3UHJvamVjdGlvbiB9KTtcbiAgICBnbC5iaW5kVmVydGV4QXJyYXkodmFvKTtcbiAgICBpZiAoIWluZGljZXMpIHtcbiAgICAgIGdsLmRyYXdBcnJheXNJbnN0YW5jZWQobW9kZSwgb2Zmc2V0LCBudW1FbGVtZW50cywgbnVtSW5zdGFuY2VzKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZ2wuZHJhd0VsZW1lbnRzSW5zdGFuY2VkKFxuICAgICAgbW9kZSxcbiAgICAgIG51bUVsZW1lbnRzLFxuICAgICAgZ2wuVU5TSUdORURfU0hPUlQsXG4gICAgICBvZmZzZXQsXG4gICAgICBudW1JbnN0YW5jZXNcbiAgICApO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBEcmF3ZXI7XG4iLCJpbXBvcnQgZ2V0QXR0cmlidXRlUHJvcHNCeVR5cGUgZnJvbSBcIi4vYXR0cmliVHlwZVByb3BzXCI7XG5pbXBvcnQgYXR0cmliVHlwZVByb3BzIGZyb20gXCIuL2F0dHJpYlR5cGVQcm9wc1wiO1xuaW1wb3J0IHsgQnVmZmVyQXR0cmlidXRlIH0gZnJvbSBcIi4vQnVmZmVyQXR0cmlidXRlXCI7XG5jbGFzcyBNZXNoUmVuZGVyZXIge1xuICBjb25zdHJ1Y3Rvcih7IHByaW1pdGl2ZXMsIG5hbWUgfSkge1xuICAgIHRoaXMucHJpbWl0aXZlcyA9IHByaW1pdGl2ZXM7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmNvbnRleHQgPSBudWxsO1xuICAgIHRoaXMuYnVmZmVycyA9IHt9O1xuICB9XG4gIHNldENvbnRleHQoZ2xDb250ZXh0V3JhcHBlcikge1xuICAgIHRoaXMuY29udGV4dCA9IGdsQ29udGV4dFdyYXBwZXI7XG4gICAgZm9yIChsZXQgaSA9IDAsIG4gPSB0aGlzLnByaW1pdGl2ZXMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICB0aGlzLnByaW1pdGl2ZXNbaV0uc2V0Q29udGV4dChnbENvbnRleHRXcmFwcGVyKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgc2V0UHJvZ3JhbUluZm8ocHJvZ3JhbUluZm8pIHtcbiAgICBmb3IgKGxldCBpID0gMCwgbiA9IHRoaXMucHJpbWl0aXZlcy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgIHRoaXMucHJpbWl0aXZlc1tpXS5zZXRQcm9ncmFtSW5mbyhwcm9ncmFtSW5mbyk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIHNldERyYXdlcihkcmF3ZXIpIHtcbiAgICBmb3IgKGxldCBpID0gMCwgbiA9IHRoaXMucHJpbWl0aXZlcy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgIHRoaXMucHJpbWl0aXZlc1tpXS5zZXREcmF3ZXIoZHJhd2VyKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgZHJhdyh1bmlmb3JtcywgY2FtZXJhTWF0cml4KSB7XG4gICAgZm9yIChsZXQgaSA9IDAsIG4gPSB0aGlzLnByaW1pdGl2ZXMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICB0aGlzLnByaW1pdGl2ZXNbaV0uZHJhdyh1bmlmb3JtcywgY2FtZXJhTWF0cml4KTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgZHJhd0luc3RhbmNlZCh1bmlmb3JtcywgY2FtZXJhTWF0cml4LCBudW1JbnN0YW5jZXMpIHtcbiAgICBmb3IgKGxldCBpID0gMCwgbiA9IHRoaXMucHJpbWl0aXZlcy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgIHRoaXMucHJpbWl0aXZlc1tpXS5kcmF3SW5zdGFuY2VkKHVuaWZvcm1zLCBjYW1lcmFNYXRyaXgsIG51bUluc3RhbmNlcyk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIGNyZWF0ZVByaW1pdGl2ZUJ1ZmZlcnMoKSB7XG4gICAgdGhpcy5wcmltaXRpdmVzLmZvckVhY2goKHByaW1pdGl2ZSkgPT4gcHJpbWl0aXZlLmNyZWF0ZUdlb21ldHJ5QnVmZmVycygpKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBjcmVhdGVCdWZmZXJBdHRyaWJEYXRhKG5hbWUsIHR5cGUsIHBhcmFtcykge1xuICAgIGNvbnN0IHsgZ2wgfSA9IHRoaXMuY29udGV4dDtcbiAgICBjb25zdCBhdHRyaWJQcm9wcyA9IGdldEF0dHJpYnV0ZVByb3BzQnlUeXBlKHR5cGUpO1xuICAgIGNvbnN0IGF0dHJpYnV0ZVByb3BzID0geyAuLi5hdHRyaWJQcm9wcywgLi4ucGFyYW1zIH07XG4gICAgY29uc3QgYnVmZmVyQXR0cmliRGF0YSA9IG5ldyBCdWZmZXJBdHRyaWJ1dGUoZ2wsIGF0dHJpYnV0ZVByb3BzKTtcbiAgICB0aGlzLmJ1ZmZlcnMgPSB7IC4uLnRoaXMuYnVmZmVycywgW25hbWVdOiBidWZmZXJBdHRyaWJEYXRhIH07XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgYnVmZmVyRGF0YShidWZmZXJOYW1lLCBkYXRhLCBieXRlTGVuZ3RoKSB7XG4gICAgY29uc3QgYnVmZmVyQXR0cmlidXRlRGVzY3JpcHRvciA9IHRoaXMuYnVmZmVyc1tidWZmZXJOYW1lXTtcblxuICAgIGJ1ZmZlckF0dHJpYnV0ZURlc2NyaXB0b3IuYnVmZmVyRGF0YShkYXRhLCBieXRlTGVuZ3RoKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBidWZmZXJTdWJEYXRhKGJ1ZmZlck5hbWUsIGRhdGEsIG9mZnNldCkge1xuICAgIGNvbnN0IGJ1ZmZlckF0dHJpYnV0ZURlc2NyaXB0b3IgPSB0aGlzLmJ1ZmZlcnNbYnVmZmVyTmFtZV07XG4gICAgYnVmZmVyQXR0cmlidXRlRGVzY3JpcHRvci5idWZmZXJTdWJEYXRhKGRhdGEsIGJ5dGVMZW5ndGgsIG9mZnNldCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgc2V0QXR0cmlidXRlKG5hbWUpIHtcbiAgICBjb25zdCBidWZmZXJBdHRyaWJEYXRhID0gdGhpcy5idWZmZXJzW25hbWVdO1xuICAgIHRoaXMucHJpbWl0aXZlcy5mb3JFYWNoKChwcmltaXRpdmUpID0+XG4gICAgICBwcmltaXRpdmUuc2V0QXR0cmlidXRlKGJ1ZmZlckF0dHJpYkRhdGEpXG4gICAgKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBzZXRQcmltaXRpdmVBdHRyaWJ1dGVzKCkge1xuICAgIGZvciAobGV0IGkgPSAwLCBuID0gdGhpcy5wcmltaXRpdmVzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgdGhpcy5wcmltaXRpdmVzW2ldLnNldEF0dHJpYnV0ZXMoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cbmNsYXNzIFNraW5uZWRNZXNoUmVuZGVyZXIge1xuICBjb25zdHJ1Y3RvcihwcmltaXRpdmVzLCBza2luKSB7XG4gICAgdGhpcy5wcmltaXRpdmVzID0gcHJpbWl0aXZlcztcbiAgICB0aGlzLnNraW4gPSBza2luO1xuICB9XG4gIGRyYXcodW5pZm9ybXMsIGNhbWVyYU1hdHJpeCkge1xuICAgIHRoaXMuc2tpbi51cGRhdGUodW5pZm9ybXMudV9tYXRyaXgpO1xuICAgIGNvbnN0IF91bmlmb3JtcyA9IHtcbiAgICAgIHVfam9pbnRUZXh0dXJlOiB0aGlzLnNraW4uam9pbnRUZXh0dXJlLFxuICAgICAgdV9udW1Kb2ludHM6IHRoaXMuc2tpbi5qb2ludHMubGVuZ3RoLFxuICAgICAgLi4udW5pZm9ybXMsXG4gICAgfTtcbiAgICBmb3IgKGxldCBpID0gMCwgbiA9IHRoaXMucHJpbWl0aXZlcy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgIHRoaXMucHJpbWl0aXZlc1tpXS5kcmF3KF91bmlmb3JtcywgY2FtZXJhTWF0cml4KTtcbiAgICB9XG4gIH1cbn1cbmV4cG9ydCB7IE1lc2hSZW5kZXJlciwgU2tpbm5lZE1lc2hSZW5kZXJlciB9O1xuIiwiaW1wb3J0IHtcbiAgY3JlYXRlSW5kaWNlc0J1ZmZlcixcbiAgQnVmZmVyQXR0cmlidXRlLFxuICBEeW5hbWljQnVmZmVyQXR0cmliRGVzY3JpcHRvcixcbiAgQnVmZmVyQ29udHJvbGxlcixcbiAgQXR0cmlidXRlU2V0dGVyLFxufSBmcm9tIFwiLi9CdWZmZXJBdHRyaWJ1dGVcIjtcbmltcG9ydCB7IEVMRU1FTlRfU0laRSB9IGZyb20gXCIuL2VudW1zXCI7XG5pbXBvcnQgeyBnZXRHTFR5cGVGb3JUeXBlZEFycmF5IH0gZnJvbSBcIi4vcHJvZ3JhbUluZm9cIjtcbmltcG9ydCBnZXRBdHRyaWJ1dGVQcm9wc0J5VHlwZSBmcm9tIFwiLi9hdHRyaWJUeXBlUHJvcHNcIjtcblxuY2xhc3MgUHJpbWl0aXZlUmVuZGVyZXIge1xuICBjb25zdHJ1Y3RvcihhcnJheURhdGEpIHtcbiAgICB0aGlzLmJ1ZmZlcnMgPSB7fTtcbiAgICB0aGlzLnByb2dyYW1JbmZvID0gbnVsbDtcbiAgICB0aGlzLmNvbnRleHQgPSBudWxsO1xuICAgIHRoaXMuZHJhd2VyID0gbnVsbDtcbiAgICB0aGlzLm1vZGUgPSBudWxsO1xuICAgIHRoaXMub2Zmc2V0ID0gbnVsbDtcbiAgICB0aGlzLm51bUVsZW1lbnRzID0gbnVsbDtcbiAgICB0aGlzLnZhbyA9IG51bGw7XG4gICAgdGhpcy5jb21wb25lbnRUeXBlID0gbnVsbDtcbiAgICB0aGlzLmFycmF5RGF0YSA9IGFycmF5RGF0YTtcbiAgICBjb25zdCB7Y29tcG9uZW50VHlwZSwgbnVtRWxlbWVudHMsIG1vZGUgfSA9IGFycmF5RGF0YTtcbiAgICB0aGlzLm51bUVsZW1lbnRzID0gbnVtRWxlbWVudHM7XG4gICAgdGhpcy5tb2RlID0gbW9kZTtcbiAgICB0aGlzLmNvbXBvbmVudFR5cGUgPSBjb21wb25lbnRUeXBlIHx8IDUxMjM7XG4gIH1cbiAgc2V0Q29udGV4dChnbENvbnRleHRXcmFwcGVyKSB7XG4gICAgdGhpcy5jb250ZXh0ID0gZ2xDb250ZXh0V3JhcHBlcjtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBjcmVhdGVWQU8oKSB7XG4gICAgaWYgKHRoaXMudmFvKSByZXR1cm47XG4gICAgdGhpcy52YW8gPSB0aGlzLmNvbnRleHQuZ2wuY3JlYXRlVmVydGV4QXJyYXkoKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBzZXRNb2RlKG1vZGUpe1xuICAgIHRoaXMubW9kZSA9IG1vZGVcbiAgICByZXR1cm4gdGhpc1xuICB9XG4gIGNyZWF0ZUdlb21ldHJ5QnVmZmVycygpIHtcbiAgICBjb25zdCB7IGFycmF5RGF0YSB9ID0gdGhpcztcbiAgICBjb25zdCB7IGdsIH0gPSB0aGlzLmNvbnRleHQ7XG4gICAgY29uc3QgeyBhdHRyaWJ1dGVzLCBpbmRpY2VzLCBjb21wb25lbnRUeXBlLCBudW1FbGVtZW50cywgbW9kZSB9ID0gYXJyYXlEYXRhO1xuICAgXG5cbiAgICBpZiAoYXR0cmlidXRlcykge1xuICAgICAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaCgoYXR0cmlidXRlTmFtZSkgPT4ge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgc3RyaWRlLFxuICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgb2Zmc2V0LFxuICAgICAgICAgIGxvY2F0aW9uLFxuICAgICAgICAgIG51bUNvbXBvbmVudHMsXG4gICAgICAgICAgbnVtQXR0cmlidXRlcyxcbiAgICAgICAgICBkYXRhLFxuICAgICAgICAgIHNpemUsXG4gICAgICAgIH0gPSBhdHRyaWJ1dGVzW2F0dHJpYnV0ZU5hbWVdO1xuICAgICAgICBjb25zdCBidWZmZXJBdHRyaWJ1dGVEZXNjcmlwdG9yID0gbmV3IEJ1ZmZlckF0dHJpYnV0ZShnbCwge1xuICAgICAgICAgIHN0cmlkZSxcbiAgICAgICAgICB0eXBlLFxuICAgICAgICAgIG9mZnNldCxcbiAgICAgICAgICBsb2NhdGlvbixcbiAgICAgICAgICBudW1BdHRyaWJ1dGVzLFxuICAgICAgICAgIG51bUNvbXBvbmVudHMsXG4gICAgICAgICAgc2l6ZSxcbiAgICAgICAgfSk7XG4gICAgICAgIGJ1ZmZlckF0dHJpYnV0ZURlc2NyaXB0b3IuYnVmZmVyRGF0YShkYXRhKTtcbiAgICAgICAgdGhpcy5idWZmZXJzID0ge1xuICAgICAgICAgIC4uLnRoaXMuYnVmZmVycyxcbiAgICAgICAgICBbYXR0cmlidXRlTmFtZV06IGJ1ZmZlckF0dHJpYnV0ZURlc2NyaXB0b3IsXG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGluZGljZXMpIHtcbiAgICAgIGNvbnN0IGluZGljZXNCdWZmZXIgPSBnbC5jcmVhdGVCdWZmZXIoKTtcbiAgICAgIGdsLmJpbmRCdWZmZXIoZ2wuRUxFTUVOVF9BUlJBWV9CVUZGRVIsIGluZGljZXNCdWZmZXIpO1xuICAgICAgZ2wuYnVmZmVyRGF0YShnbC5FTEVNRU5UX0FSUkFZX0JVRkZFUiwgaW5kaWNlcywgZ2wuU1RBVElDX0RSQVcpO1xuICAgICAgdGhpcy5pbmRpY2VzID0gaW5kaWNlc0J1ZmZlcjtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgc2V0QXR0cmlidXRlcygpIHtcbiAgICBjb25zdCB7IGdsIH0gPSB0aGlzLmNvbnRleHQ7XG5cbiAgICBnbC5iaW5kVmVydGV4QXJyYXkodGhpcy52YW8pO1xuICAgIGZvciAoY29uc3QgYXR0cmliIGluIHRoaXMuYnVmZmVycykge1xuICAgICAgY29uc3QgYnVmZmVyQXR0cmlidXRlRGVzY3JpcHRvciA9IHRoaXMuYnVmZmVyc1thdHRyaWJdO1xuICAgICAgYnVmZmVyQXR0cmlidXRlRGVzY3JpcHRvci5zZXRBdHRyaWJ1dGUoKTtcbiAgICB9XG4gICAgZ2wuYmluZEJ1ZmZlcihnbC5FTEVNRU5UX0FSUkFZX0JVRkZFUiwgdGhpcy5pbmRpY2VzKTtcbiAgICBnbC5iaW5kVmVydGV4QXJyYXkobnVsbCk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBzZXREcmF3ZXIoZHJhd2VyKSB7XG4gICAgdGhpcy5kcmF3ZXIgPSBkcmF3ZXI7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgc2V0UHJvZ3JhbUluZm8ocHJvZ3JhbUluZm8pIHtcbiAgICB0aGlzLnByb2dyYW1JbmZvID0gcHJvZ3JhbUluZm87XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgY3JlYXRlQnVmZmVyQXR0cmliRGF0YShuYW1lLCB0eXBlLCBwYXJhbXMpIHtcbiAgICBjb25zdCB7IGdsIH0gPSB0aGlzLmNvbnRleHQ7XG4gICAgY29uc3QgYXR0cmliUHJvcHMgPSBnZXRBdHRyaWJ1dGVQcm9wc0J5VHlwZSh0eXBlKTtcbiAgICBjb25zdCBhdHRyaWJ1dGVQcm9wcyA9IHsgLi4uYXR0cmliUHJvcHMsIC4uLnBhcmFtcyB9O1xuICAgIGNvbnN0IGJ1ZmZlckF0dHJpYkRhdGEgPSBuZXcgQnVmZmVyQXR0cmlidXRlKGdsLCBhdHRyaWJ1dGVQcm9wcyk7XG4gICAgdGhpcy5idWZmZXJzID0geyAuLi50aGlzLmJ1ZmZlcnMsIFtuYW1lXTogYnVmZmVyQXR0cmliRGF0YSB9O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIHNldEJ1ZmZlckF0dHJpYkRhdGEobmFtZSwgYnVmZmVyQXR0cmliRGF0YSkge1xuICAgIHRoaXMuYnVmZmVycyA9IHsgLi4udGhpcy5idWZmZXJzLCBbbmFtZV06IGJ1ZmZlckF0dHJpYkRhdGEgfTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBzZXRPd25BdHRyaWJ1dGUobmFtZSwgZGl2aXNvcikge1xuICAgIGNvbnN0IHsgZ2wgfSA9IHRoaXMuY29udGV4dDtcbiAgICBjb25zdCBidWZmZXJBdHRyaWJEYXRhID0gdGhpcy5idWZmZXJzW25hbWVdO1xuICAgIGdsLmJpbmRWZXJ0ZXhBcnJheSh0aGlzLnZhbyk7XG4gICAgYnVmZmVyQXR0cmliRGF0YS5zZXRBdHRyaWJ1dGUoZGl2aXNvcik7XG4gICAgZ2wuYmluZFZlcnRleEFycmF5KG51bGwpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIHNldEF0dHJpYnV0ZShidWZmZXJBdHRyaWJEYXRhKSB7XG4gICAgY29uc3QgeyBnbCB9ID0gdGhpcy5jb250ZXh0O1xuICAgIGdsLmJpbmRWZXJ0ZXhBcnJheSh0aGlzLnZhbyk7XG4gICAgYnVmZmVyQXR0cmliRGF0YS5zZXRBdHRyaWJ1dGUoKTtcbiAgICBnbC5iaW5kVmVydGV4QXJyYXkobnVsbCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgYnVmZmVyRGF0YShidWZmZXJOYW1lLCBkYXRhLCBieXRlTGVuZ3RoLCB1c2FnZSkge1xuICAgIGNvbnN0IGJ1ZmZlckF0dHJpYkRhdGEgPSB0aGlzLmJ1ZmZlcnNbYnVmZmVyTmFtZV07XG4gICAgYnVmZmVyQXR0cmliRGF0YS5idWZmZXJEYXRhKGRhdGEsIGJ5dGVMZW5ndGgsIHVzYWdlKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBidWZmZXJTdWJEYXRhKGJ1ZmZlck5hbWUsIGRhdGEsIG9mZnNldCkge1xuICAgIGNvbnN0IGJ1ZmZlckRlc2MgPSB0aGlzLmJ1ZmZlcnNbYnVmZmVyTmFtZV07XG4gICAgYnVmZmVyRGVzYy5idWZmZXJTdWJEYXRhKGRhdGEsIG9mZnNldCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgZHJhdyh1bmlmb3JtcywgY2FtZXJhTWF0cml4KSB7XG4gICAgdGhpcy5kcmF3ZXIuZHJhdyh0aGlzLCB1bmlmb3JtcywgY2FtZXJhTWF0cml4KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBkcmF3SW5zdGFuY2VkKHVuaWZvcm1zLCBjYW1lcmFNYXRyaXgsIG51bUluc3RhbmNlcykge1xuICAgIHRoaXMuZHJhd2VyLmRyYXdJbnN0YW5jZWQodGhpcywgdW5pZm9ybXMsIGNhbWVyYU1hdHJpeCwgbnVtSW5zdGFuY2VzKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcmltaXRpdmVSZW5kZXJlcjtcbiIsImNvbnN0IHByb3BzID0ge1xuICBtYXQ0OiB7XG4gICAgc3RyaWRlOiA2NCxcbiAgICBieXRlTGVuZ3RoOiA2NCxcbiAgICB0eXBlOiAweDE0MDYsXG4gICAgbnVtQXR0cmlidXRlczogNCxcbiAgICBudW1Db21wb25lbnRzOiA0LFxuICB9LFxuICB2ZWMzOiB7XG4gICAgbnVtQ29tcG9uZW50czogMyxcbiAgICB0eXBlOiAweDE0MDYsXG4gICAgbnVtQXR0cmlidXRlczogMSxcbiAgfSxcbn07XG5jb25zdCBnZXRBdHRyaWJ1dGVQcm9wc0J5VHlwZSA9ICh0eXBlKSA9PiBwcm9wc1t0eXBlXTtcbmV4cG9ydCBkZWZhdWx0IGdldEF0dHJpYnV0ZVByb3BzQnlUeXBlO1xuIiwiaW1wb3J0IHsgTm9kZSwgVFJTIH0gZnJvbSBcIm1hdGhcIjtcblxuY2xhc3MgRW50aXR5IGV4dGVuZHMgTm9kZSB7XG4gIHN0YXRpYyBtYWtlRW50aXR5KGVudGl0eURlc2NyaXB0aW9uLCByb290Tm9kZU5keCkge1xuICAgIGNvbnN0IHsgbm9kZXMsIG1lc2hlcyB9ID0gZW50aXR5RGVzY3JpcHRpb247XG4gICAgY29uc3Qgcm9vdE5vZGUgPSBub2Rlc1tyb290Tm9kZU5keF07XG4gICAgY29uc3QgbWFrZU5vZGUgPSAobm9kZURlc2NyaXB0aW9uLCBuZHgpID0+IHtcbiAgICAgIGNvbnN0IHRycyA9IG5ldyBUUlMoXG4gICAgICAgIG5vZGVEZXNjcmlwdGlvbi50cmFuc2xhdGlvbiB8fCBbMCwgMCwgMF0sXG4gICAgICAgIG5vZGVEZXNjcmlwdGlvbi5yb3RhdGlvbiB8fCBbMCwgMCwgMCwgMF0sXG4gICAgICAgIG5vZGVEZXNjcmlwdGlvbi5zY2FsZSB8fCBbMSwgMSwgMV1cbiAgICAgICk7XG4gICAgICBjb25zdCBub2RlID0gbmV3IEVudGl0eShub2RlRGVzY3JpcHRpb24ubmFtZSwgdHJzLCBuZHgpO1xuICAgICAgaWYgKG5vZGVEZXNjcmlwdGlvbi5tZXNoICE9IHVuZGVmaW5lZCkge1xuICAgICAgICBub2RlLnJlbmRlcmVyID0gbWVzaGVzW25vZGVEZXNjcmlwdGlvbi5tZXNoXTtcbiAgICAgIH1cbiAgICAgIGlmIChub2RlRGVzY3JpcHRpb24uY2hpbGRyZW4pIHtcbiAgICAgICAgbm9kZURlc2NyaXB0aW9uLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkTmR4KSA9PiB7XG4gICAgICAgICAgY29uc3QgY2hpbGQgPSBtYWtlTm9kZShub2Rlc1tjaGlsZE5keF0sIGNoaWxkTmR4KTtcbiAgICAgICAgICBjaGlsZC5zZXRQYXJlbnQobm9kZSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfTtcbiAgICByZXR1cm4gbWFrZU5vZGUocm9vdE5vZGUsIHJvb3ROb2RlTmR4KTtcbiAgfVxuICBjb25zdHJ1Y3RvcihuYW1lLCB0cnMsIG5keCkge1xuICAgIHN1cGVyKG5hbWUsIHRycyk7XG4gICAgdGhpcy5uZHggPSBuZHg7XG4gICAgdGhpcy5waHlzaWNzID0gbnVsbDtcbiAgICB0aGlzLnNraW5OZHggPSBudWxsO1xuICAgIHRoaXMub2JqZWN0c1RvRHJhdyA9IFtdO1xuICAgIHRoaXMucmVuZGVyZXIgPSBudWxsO1xuICB9XG4gIHVwZGF0ZU9iamVjdHNUb0RyYXcoKSB7XG4gICAgY29uc3QgcXVldWUgPSBbdGhpc107XG4gICAgd2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IG5vZGUgPSBxdWV1ZS5wb3AoKTtcbiAgICAgIGNvbnNvbGUubG9nKG5vZGUpO1xuICAgICAgaWYgKG5vZGUucmVuZGVyZXIpIHRoaXMub2JqZWN0c1RvRHJhdy5wdXNoKG5vZGUpO1xuICAgICAgaWYgKG5vZGUuY2hpbGRyZW4pIHF1ZXVlLnB1c2goLi4ubm9kZS5jaGlsZHJlbik7XG4gICAgfVxuICB9XG4gIHRyYXZlcnNlKGZuKSB7XG4gICAgZm4odGhpcyk7XG4gICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4gY2hpbGQudHJhdmVyc2UoZm4pKTtcbiAgfVxuICBmaW5kKG5keCkge1xuICAgIGxldCByZXN1bHQgPSBudWxsO1xuICAgIGNvbnN0IGl0ZXIgPSAobm9kZXMpID0+IHtcbiAgICAgIGZvciAobGV0IG5vZGUgb2Ygbm9kZXMpIHtcbiAgICAgICAgaWYgKG5vZGUubmR4ID09PSBuZHgpIHJlc3VsdCA9IG5vZGU7XG4gICAgICAgIGVsc2UgaXRlcihub2RlLmNoaWxkcmVuKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGl0ZXIoW3RoaXNdKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIGZpbmRCeU5hbWUobmFtZSkge1xuICAgIGxldCByZXN1bHQgPSBudWxsO1xuICAgIGNvbnN0IGl0ZXIgPSAobm9kZXMpID0+IHtcbiAgICAgIGZvciAobGV0IG5vZGUgb2Ygbm9kZXMpIHtcbiAgICAgICAgaWYgKG5vZGUubmFtZSA9PT0gbmFtZSkgcmVzdWx0ID0gbm9kZTtcbiAgICAgICAgZWxzZSBpdGVyKG5vZGUuY2hpbGRyZW4pO1xuICAgICAgfVxuICAgIH07XG4gICAgaXRlcihbdGhpc10pO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgcmVuZGVyKHVuaWZvcm1zLCBjYW1lcmFNYXRyaXgpIHtcbiAgICB0aGlzLm9iamVjdHNUb0RyYXcuZm9yRWFjaCgob2JqZWN0KSA9PiB7XG4gICAgICBvYmplY3QucmVuZGVyZXIuZHJhdyhcbiAgICAgICAgeyAuLi51bmlmb3JtcywgdV9tYXRyaXg6IG9iamVjdC53b3JsZE1hdHJpeCB9LFxuICAgICAgICBjYW1lcmFNYXRyaXhcbiAgICAgICk7XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRW50aXR5O1xuIiwiY29uc3QgVFlQRURfQVJSQVlTID0ge1xuICAgICc1MTIwJzogSW50OEFycmF5LCAgICBcbiAgICAnNTEyMSc6IFVpbnQ4QXJyYXksICAgXG4gICAgJzUxMjInOiBJbnQxNkFycmF5LCAgIFxuICAgICc1MTIzJzogVWludDE2QXJyYXksICBcbiAgICAnNTEyNCc6IEludDMyQXJyYXksICAgXG4gICAgJzUxMjUnOiBVaW50MzJBcnJheSwgIFxuICAgICc1MTI2JzogRmxvYXQzMkFycmF5LCBcbn1cbmNvbnN0IE5VTV9DT01QT05FTlRTID0ge1xuICAgICdTQ0FMQVInIDogMSxcbiAgICAnVkVDMicgOiAyLFxuICAgICdWRUMzJyA6IDMsXG4gICAgJ1ZFQzQnIDogNCxcbiAgICAnTUFUMic6IDQsXG4gICdNQVQzJzogOSxcbiAgJ01BVDQnOiAxNixcbn1cbmNvbnN0IExPQ0FUSU9OUyA9IHtcbiAgICAnUE9TSVRJT04nIDogMCxcbiAgICAnTk9STUFMJyA6IDEsXG4gICAgJ1dFSUdIVFNfMCcgOiAyLFxuICAgICdKT0lOVFNfMCcgOiAzLFxuICAgICdURVhDT09SRF8wJyA6IDQsXG59XG5jb25zdCBFTEVNRU5UX1NJWkUgPSB7XG4gICAgMHgxNDA2IDogNFxufVxuZXhwb3J0IHtcbiAgICBMT0NBVElPTlMsIE5VTV9DT01QT05FTlRTLCBUWVBFRF9BUlJBWVMsIEVMRU1FTlRfU0laRVxufSIsImltcG9ydCBQcmltaXRpdmVSZW5kZXJlciBmcm9tIFwiLi9QcmltaXRpdmVSZW5kZXJlclwiO1xuaW1wb3J0IHsgTWVzaFJlbmRlcmVyIH0gZnJvbSBcIi4vTWVzaFJlbmRlcmVyXCI7XG5pbXBvcnQgeyBBdHRyaWJ1dGVTZXR0ZXIsIEJ1ZmZlckNvbnRyb2xsZXIgfSBmcm9tIFwiLi9CdWZmZXJBdHRyaWJ1dGVcIjtcbmltcG9ydCB7IE5VTV9DT01QT05FTlRTLCBUWVBFRF9BUlJBWVMsIExPQ0FUSU9OUyB9IGZyb20gXCIuL2VudW1zXCI7XG5cbmNvbnN0IEFycmF5RGF0YUZyb21HbHRmID0gKGdsdGYsIGJ1ZmZlcnMpID0+IHtcbiAgY29uc3QgeyBidWZmZXJWaWV3cywgYWNjZXNzb3JzLCBtZXNoZXMsIG5vZGVzIH0gPSBnbHRmO1xuICBjb25zdCBhdHRyaWJEYXRhRnJvbUFjY2Vzc29yID0gKGFjY2Vzc29yKSA9PiB7XG4gICAgY29uc3QgYnVmZmVyVmlldyA9IGJ1ZmZlclZpZXdzW2FjY2Vzc29yLmJ1ZmZlclZpZXddO1xuICAgIGNvbnN0IHsgY291bnQsIGNvbXBvbmVudFR5cGUsIHR5cGUgfSA9IGFjY2Vzc29yO1xuICAgIGNvbnN0IGJ5dGVPZmZzZXQgPSBhY2Nlc3Nvci5ieXRlT2Zmc2V0IHx8IDA7XG4gICAgY29uc3QgeyBieXRlTGVuZ3RoLCB0YXJnZXQgfSA9IGJ1ZmZlclZpZXc7XG4gICAgY29uc3Qgc3RyaWRlID0gYnVmZmVyVmlldy5ieXRlU3RyaWRlIHx8IDA7XG4gICAgY29uc3QgYnVmZmVyVmlld0J5dGVPZmZzZXQgPSBidWZmZXJWaWV3LmJ5dGVPZmZzZXQgfHwgMDtcbiAgICBjb25zdCBidWZmZXIgPSBidWZmZXJzW2J1ZmZlclZpZXcuYnVmZmVyXTtcblxuICAgIHJldHVybiB7XG4gICAgICBkYXRhOiBuZXcgVWludDhBcnJheShidWZmZXIsIGJ1ZmZlclZpZXdCeXRlT2Zmc2V0LCBieXRlTGVuZ3RoKSxcbiAgICAgIG51bUNvbXBvbmVudHM6IE5VTV9DT01QT05FTlRTW3R5cGVdLFxuICAgICAgc3RyaWRlLFxuICAgICAgYnl0ZUxlbmd0aCxcbiAgICAgIGxvY2F0aW9uOiBudWxsLFxuICAgICAgY291bnQsXG4gICAgICB0eXBlOiBjb21wb25lbnRUeXBlLFxuICAgICAgb2Zmc2V0OiBieXRlT2Zmc2V0IHx8IDAsXG4gICAgICBjb21wb25lbnRUeXBlOiBhY2Nlc3Nvci5jb21wb25lbnRUeXBlLFxuICAgIH07XG4gIH07XG4gIGNvbnN0IF9tZXNoZXMgPSBtZXNoZXMubWFwKChtZXNoKSA9PiAoe1xuICAgIHByaW1pdGl2ZXM6IG1lc2gucHJpbWl0aXZlcy5tYXAoKF9wcmltaXRpdmUpID0+IHtcbiAgICAgIGNvbnN0IHByaW1pdGl2ZSA9IHtcbiAgICAgICAgYXR0cmlidXRlczoge30sXG4gICAgICAgIG1vZGU6IF9wcmltaXRpdmUubW9kZSxcbiAgICAgIH07XG4gICAgICBpZiAoX3ByaW1pdGl2ZS5oYXNPd25Qcm9wZXJ0eShcImluZGljZXNcIikpIHtcbiAgICAgICAgY29uc3QgaW5kaWNlc0luZm8gPSBhdHRyaWJEYXRhRnJvbUFjY2Vzc29yKFxuICAgICAgICAgIGFjY2Vzc29yc1tfcHJpbWl0aXZlLmluZGljZXNdXG4gICAgICAgICk7XG4gICAgICAgIHByaW1pdGl2ZS5pbmRpY2VzID0gaW5kaWNlc0luZm8uZGF0YTtcbiAgICAgICAgcHJpbWl0aXZlLm51bUVsZW1lbnRzID0gaW5kaWNlc0luZm8uY291bnQ7XG4gICAgICAgIHByaW1pdGl2ZS5jb21wb25lbnRUeXBlID0gaW5kaWNlc0luZm8uY29tcG9uZW50VHlwZTtcbiAgICAgIH1cbiAgICAgIE9iamVjdC5rZXlzKF9wcmltaXRpdmUuYXR0cmlidXRlcykuZm9yRWFjaCgoYXR0cmliTmFtZSkgPT4ge1xuICAgICAgICBjb25zdCBhdHRyaWJ1dGUgPSBfcHJpbWl0aXZlLmF0dHJpYnV0ZXNbYXR0cmliTmFtZV07XG4gICAgICAgIHByaW1pdGl2ZS5hdHRyaWJ1dGVzW2F0dHJpYk5hbWVdID0gYXR0cmliRGF0YUZyb21BY2Nlc3NvcihcbiAgICAgICAgICBhY2Nlc3NvcnNbYXR0cmlidXRlXVxuICAgICAgICApO1xuICAgICAgICAvL2lmKGF0dHJpYk5hbWUgPT09ICdKT0lOVFNfMCcpIF9wcmltaXRpdmUuYXR0cmlidXRlc1thdHRyaWJOYW1lXS5kYXRhID0gbmV3IFVpbnQzMkFycmF5KF9wcmltaXRpdmUuYXR0cmlidXRlc1thdHRyaWJOYW1lXS5kYXRhKVxuICAgICAgICBwcmltaXRpdmUuYXR0cmlidXRlc1thdHRyaWJOYW1lXS5sb2NhdGlvbiA9IExPQ0FUSU9OU1thdHRyaWJOYW1lXTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHByaW1pdGl2ZTtcbiAgICB9KSxcbiAgICBuYW1lOiBtZXNoLm5hbWUsXG4gIH0pKTtcblxuICByZXR1cm4gX21lc2hlcy5tYXAoKG1lc2gpID0+IHtcbiAgICBjb25zdCBwcmltaXRpdmVzID0gbWVzaC5wcmltaXRpdmVzLm1hcChcbiAgICAgIChwcmltaXRpdmUpID0+IG5ldyBQcmltaXRpdmVSZW5kZXJlcihwcmltaXRpdmUpXG4gICAgKTtcbiAgICBjb25zdCBuYW1lID0gbWVzaC5uYW1lO1xuXG4gICAgcmV0dXJuIG5ldyBNZXNoUmVuZGVyZXIoeyBwcmltaXRpdmVzLCBuYW1lIH0pO1xuICB9KTtcbn07XG5cbmNvbnN0IFByaW1pdGl2ZVJlbmRlckluZm9Gcm9tQXJyYXlEYXRhID0gKG1lc2hlcykgPT5cbiAgbWVzaGVzLm1hcCgobWVzaCkgPT4ge1xuICAgIGNvbnN0IHByaW1pdGl2ZXMgPSBtZXNoLnByaW1pdGl2ZXMubWFwKFxuICAgICAgKHByaW1pdGl2ZSkgPT4gbmV3IFByaW1pdGl2ZVJlbmRlcmVyKHByaW1pdGl2ZSlcbiAgICApO1xuICAgIGNvbnN0IG5hbWUgPSBtZXNoLm5hbWU7XG4gICAgcmV0dXJuIG5ldyBNZXNoUmVuZGVyZXIoeyBuYW1lLCBwcmltaXRpdmVzIH0pO1xuICB9KTtcblxuY29uc3QgRW50aXR5RGF0YUZyb21HbHRmID0gKGdsdGYsIGJ1ZmZlcnMpID0+XG4gIFByaW1pdGl2ZVJlbmRlckluZm9Gcm9tQXJyYXlEYXRhKEFycmF5RGF0YUZyb21HbHRmKGdsdGYsIGJ1ZmZlcnMpKTtcblxuY2xhc3MgR0xURiB7XG4gIGNvbnN0cnVjdG9yKGdsdGYsIGJpbmFyeUJ1ZmZlcnMpIHtcbiAgICBjb25zdCB7IG5vZGVzLCBtZXNoZXMsIHNraW5zIH0gPSBnbHRmO1xuICAgIHRoaXMubm9kZXMgPSBub2RlcztcbiAgICB0aGlzLm1lc2hlcyA9IEFycmF5RGF0YUZyb21HbHRmKGdsdGYsIGJpbmFyeUJ1ZmZlcnMpO1xuICB9XG59XG5leHBvcnQge1xuICBBcnJheURhdGFGcm9tR2x0ZixcbiAgUHJpbWl0aXZlUmVuZGVySW5mb0Zyb21BcnJheURhdGEsXG4gIEVudGl0eURhdGFGcm9tR2x0ZixcbiAgR0xURixcbn07XG4iLCJpbXBvcnQgeyBleHBhbmRlZFR5cGVkQXJyYXkgfSBmcm9tIFwiLi9wcm9ncmFtSW5mby5qc1wiO1xuaW1wb3J0IHsgY3Jvc3MsIGRpZmYsIG5vcm1hbGl6ZSB9IGZyb20gXCJtYXRoL3NyYy92ZWN0b3IuanNcIjtcbmNvbnN0IGxpbmVkQm94SW5kaWNlcyA9IG5ldyBVaW50MTZBcnJheShbXG4gIDAsXG4gIDEsXG4gIDEsXG4gIDIsXG4gIDIsXG4gIDMsXG4gIDMsXG4gIDAsIC8vIGZyb250XG4gIDAsXG4gIDUsXG4gIDUsXG4gIDQsXG4gIDQsXG4gIDEsXG4gIDEsXG4gIDAsIC8vYm90dG9tXG4gIDAsXG4gIDQsXG4gIDQsXG4gIDcsXG4gIDcsXG4gIDMsXG4gIDMsXG4gIDAsIC8vbGVmdFxuICAxLFxuICAyLFxuICAyLFxuICA2LFxuICA2LFxuICA1LFxuICA1LFxuICAxLCAvL3JpZ2h0XG4gIDQsXG4gIDUsXG4gIDUsXG4gIDYsXG4gIDYsXG4gIDcsXG4gIDcsXG4gIDQsIC8vIGJhY2tcbiAgMixcbiAgNyxcbiAgNyxcbiAgMyxcbiAgMyxcbiAgNixcbiAgNixcbiAgMiwgLy8gdG9wXG5dKTtcblxuY29uc3QgQ1VCRV9GQUNFX0lORElDRVMgPSBbXG4gIFszLCA3LCA1LCAxXSwgLy8gcmlnaHRcbiAgWzYsIDIsIDAsIDRdLCAvLyBsZWZ0XG4gIFs2LCA3LCAzLCAyXSwgLy8gPz9cbiAgWzAsIDEsIDUsIDRdLCAvLyA/P1xuICBbNywgNiwgNCwgNV0sIC8vIGZyb250XG4gIFsyLCAzLCAxLCAwXSwgLy8gYmFja1xuXTtcblxuZnVuY3Rpb24gY3JlYXRlQm94KF9hID0gMSwgX2IgPSAxLCBfYyA9IDEpIHtcbiAgY29uc3QgYSA9IF9hIC8gMixcbiAgICBiID0gX2IgLyAyLFxuICAgIGMgPSBfYyAvIDI7XG4gIGNvbnN0IGNvcm5lclZlcnRpY2VzID0gW1xuICAgIFstYSwgLWIsIC1jXSxcbiAgICBbK2EsIC1iLCAtY10sXG4gICAgWy1hLCArYiwgLWNdLFxuICAgIFsrYSwgK2IsIC1jXSxcbiAgICBbLWEsIC1iLCArY10sXG4gICAgWythLCAtYiwgK2NdLFxuICAgIFstYSwgK2IsICtjXSxcbiAgICBbK2EsICtiLCArY10sXG4gIF07XG5cbiAgY29uc3QgZmFjZU5vcm1hbHMgPSBbXG4gICAgWysxLCArMCwgKzBdLFxuICAgIFstMSwgKzAsICswXSxcbiAgICBbKzAsICsxLCArMF0sXG4gICAgWyswLCAtMSwgKzBdLFxuICAgIFsrMCwgKzAsICsxXSxcbiAgICBbKzAsICswLCAtMV0sXG4gIF07XG5cbiAgY29uc3QgdXZDb29yZHMgPSBbXG4gICAgWzEsIDBdLFxuICAgIFswLCAwXSxcbiAgICBbMCwgMV0sXG4gICAgWzEsIDFdLFxuICBdO1xuICBjb25zdCBudW1WZXJ0aWNlcyA9IDYgKiA0O1xuICBjb25zdCBwb3NpdGlvbnMgPSBleHBhbmRlZFR5cGVkQXJyYXkobmV3IEZsb2F0MzJBcnJheShudW1WZXJ0aWNlcyAqIDMpKTtcbiAgY29uc3Qgbm9ybWFscyA9IGV4cGFuZGVkVHlwZWRBcnJheShuZXcgRmxvYXQzMkFycmF5KG51bVZlcnRpY2VzICogMykpO1xuICAvL2NvbnN0IHRleENvb3JkcyA9IHdlYmdsVXRpbHMuY3JlYXRlQXVnbWVudGVkVHlwZWRBcnJheSgyICwgbnVtVmVydGljZXMpO1xuICBjb25zdCBpbmRpY2VzID0gZXhwYW5kZWRUeXBlZEFycmF5KG5ldyBVaW50MTZBcnJheSg2ICogMiAqIDMpKTtcblxuICBmb3IgKGxldCBmID0gMDsgZiA8IDY7ICsrZikge1xuICAgIGNvbnN0IGZhY2VJbmRpY2VzID0gQ1VCRV9GQUNFX0lORElDRVNbZl07XG4gICAgZm9yIChsZXQgdiA9IDA7IHYgPCA0OyArK3YpIHtcbiAgICAgIGNvbnN0IHBvc2l0aW9uID0gY29ybmVyVmVydGljZXNbZmFjZUluZGljZXNbdl1dO1xuICAgICAgY29uc3Qgbm9ybWFsID0gZmFjZU5vcm1hbHNbZl07XG4gICAgICBwb3NpdGlvbnMucHVzaChwb3NpdGlvbik7XG4gICAgICBub3JtYWxzLnB1c2gobm9ybWFsKTtcbiAgICB9XG5cbiAgICBjb25zdCBvZmZzZXQgPSA0ICogZjtcbiAgICBpbmRpY2VzLnB1c2gob2Zmc2V0ICsgMCwgb2Zmc2V0ICsgMSwgb2Zmc2V0ICsgMik7XG4gICAgaW5kaWNlcy5wdXNoKG9mZnNldCArIDAsIG9mZnNldCArIDIsIG9mZnNldCArIDMpO1xuICB9XG4gIGNvbnN0IGxlbiA9IHBvc2l0aW9ucy5ieXRlTGVuZ3RoO1xuICBjb25zdCB0ZXhjb29yZCA9IG5ldyBGbG9hdDMyQXJyYXkoW1xuICAgIC8vIEZyb250XG4gICAgMC4wLCAwLjAsIDEuMCwgMC4wLCAxLjAsIDEuMCwgMC4wLCAxLjAsXG4gICAgLy8gQmFja1xuICAgIDAuMCwgMC4wLCAxLjAsIDAuMCwgMS4wLCAxLjAsIDAuMCwgMS4wLFxuICAgIC8vIFRvcFxuICAgIDAuMCwgMC4wLCAxLjAsIDAuMCwgMS4wLCAxLjAsIDAuMCwgMS4wLFxuICAgIC8vIEJvdHRvbVxuICAgIDAuMCwgMC4wLCAxLjAsIDAuMCwgMS4wLCAxLjAsIDAuMCwgMS4wLFxuICAgIC8vIFJpZ2h0XG4gICAgMC4wLCAwLjAsIDEuMCwgMC4wLCAxLjAsIDEuMCwgMC4wLCAxLjAsXG4gICAgLy8gTGVmdFxuICAgIDAuMCwgMC4wLCAxLjAsIDAuMCwgMS4wLCAxLjAsIDAuMCwgMS4wLFxuICBdKTtcblxuICBjb25zdCBBcnJheURhdGEgPSB7XG4gICAgYXR0cmlidXRlczoge1xuICAgICAgTk9STUFMOiB7XG4gICAgICAgIGRhdGE6IG5vcm1hbHMsXG4gICAgICAgIGNvdW50OiA2ICogNCAqIDMsXG4gICAgICAgIGxvY2F0aW9uOiAxLFxuICAgICAgICBieXRlTGVuZ3RoOiBub3JtYWxzLmJ5dGVMZW5ndGgsXG4gICAgICAgIHN0cmlkZTogMCxcbiAgICAgICAgb2Zmc2V0OiAwLFxuICAgICAgICBudW1Db21wb25lbnRzOiAzLFxuICAgICAgICB0eXBlOiA1MTI2LFxuICAgICAgfSxcbiAgICAgIFBPU0lUSU9OOiB7XG4gICAgICAgIGRhdGE6IHBvc2l0aW9ucyxcbiAgICAgICAgY291bnQ6IDYgKiA0ICogMyxcbiAgICAgICAgbG9jYXRpb246IDAsXG4gICAgICAgIGJ5dGVMZW5ndGg6IHBvc2l0aW9ucy5ieXRlTGVuZ3RoLFxuICAgICAgICBzdHJpZGU6IDAsXG4gICAgICAgIG9mZnNldDogMCxcbiAgICAgICAgbnVtQ29tcG9uZW50czogMyxcbiAgICAgICAgdHlwZTogNTEyNixcbiAgICAgIH0sXG4gICAgICBURVhDT09SRF8wOiB7XG4gICAgICAgIGRhdGE6IHRleGNvb3JkLFxuICAgICAgICBjb3VudDogNDgsXG4gICAgICAgIHR5cGU6IDUxMjYsXG4gICAgICAgIG9mZnNldDogMCxcbiAgICAgICAgc3RyaWRlOiAwLFxuICAgICAgICBieXRlTGVuZ3RoOiB0ZXhjb29yZC5ieXRlTGVuZ3RoLFxuICAgICAgICBsb2NhdGlvbjogNCxcbiAgICAgICAgbnVtQ29tcG9uZW50czogMixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBpbmRpY2VzOiBpbmRpY2VzLFxuICAgIG51bUVsZW1lbnRzOiBpbmRpY2VzLmxlbmd0aCxcbiAgICBjb21wb25lbnRUeXBlOiA1MTIzLFxuICAgIG1vZGU6IDQsXG4gIH07XG4gIHJldHVybiBBcnJheURhdGE7XG4gIC8qcmV0dXJuIHtcbiAgICAgICAgICBnbHRmIDoge1xuICAgICAgICAgICAgYWNjZXNzb3JzIDogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGJ1ZmZlclZpZXcgOiAwLFxuICAgICAgICAgICAgICAgIGJ5dGVPZmZzZXQgOiAwLFxuICAgICAgICAgICAgICAgIGNvdW50IDo3MixcbiAgICAgICAgICAgICAgICBjb21wb25lbnRUeXBlIDogNTEyNixcbiAgICAgICAgICAgICAgICB0eXBlIDogJ1ZFQzMnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBidWZmZXJWaWV3IDogMSxcbiAgICAgICAgICAgICAgYnl0ZU9mZnNldCA6IDAsXG4gICAgICAgICAgICAgIGNvdW50IDogNzIsXG4gICAgICAgICAgICAgIGNvbXBvbmVudFR5cGUgOiA1MTI2LFxuICAgICAgICAgICAgICB0eXBlIDogJ1ZFQzMnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBidWZmZXJWaWV3IDogMixcbiAgICAgICAgICAgICAgYnl0ZU9mZnNldCA6IDAsXG4gICAgICAgICAgICAgIGNvdW50IDogMzYsXG4gICAgICAgICAgICAgIGNvbXBvbmVudFR5cGUgOiA1MTIzLFxuICAgICAgICAgICAgICB0eXBlIDogJ1NDQUxBUidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGJ1ZmZlclZpZXcgOiAzLFxuICAgICAgICAgICAgICBieXRlT2Zmc2V0IDogMCxcbiAgICAgICAgICAgICAgY291bnQgOiA0OCxcbiAgICAgICAgICAgICAgY29tcG9uZW50VHlwZSA6IDUxMjYsXG4gICAgICAgICAgICAgIHR5cGUgOiAnVkVDMidcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgYnVmZmVyVmlld3MgOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBidWZmZXIgOiAwLFxuICAgICAgICAgICAgICAgIGJ5dGVMZW5ndGggOiBwb3NpdGlvbnMuYnl0ZUxlbmd0aCxcbiAgICAgICAgICAgICAgICBieXRlT2Zmc2V0IDogMFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYnVmZmVyIDogMSxcbiAgICAgICAgICAgICAgICBieXRlTGVuZ3RoIDogbm9ybWFscy5ieXRlTGVuZ3RoLFxuICAgICAgICAgICAgICAgIGJ5dGVPZmZzZXQgOiAwXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBidWZmZXIgOiAyLFxuICAgICAgICAgICAgICAgIGJ5dGVMZW5ndGggOiBpbmRpY2VzLmJ5dGVMZW5ndGgsXG4gICAgICAgICAgICAgICAgYnl0ZU9mZnNldCA6IDBcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGJ1ZmZlciA6IDMsXG4gICAgICAgICAgICAgICAgYnl0ZUxlbmd0aCA6IHRleGNvb3JkLmJ5dGVMZW5ndGgsXG4gICAgICAgICAgICAgICAgYnl0ZU9mZnNldCA6IDBcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICBtZXNoZXMgOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWUgOiAnQ3ViZScsXG4gICAgICAgICAgICAgIHByaW1pdGl2ZXMgOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgYXR0cmlidXRlcyA6IHtcbiAgICAgICAgICAgICAgICAgICAgTk9STUFMIDogMSxcbiAgICAgICAgICAgICAgICAgICAgUE9TSVRJT04gOiAwLFxuICAgICAgICAgICAgICAgICAgICBURVhDT09SRF8wIDogM1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIGluZGljZXMgOiAyLFxuICAgICAgICAgICAgICAgICAgbW9kZSA6IDRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdLFxuICAgICAgICAgIG5vZGVzIDogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lIDogXCJDdWJlXCIsXG4gICAgICAgICAgICAgIG1lc2ggOiAwLFxuICAgICAgICAgICAgICBjaGlsZHJlbiA6IFsxXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZSA6ICdDdWJlMicsXG4gICAgICAgICAgICAgIG1lc2ggOiAwLFxuICAgICAgICAgICAgICB0cmFuc2xhdGlvbiA6IFsxLDEsMV1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIGJpbmFyeUJ1ZmZlcnMgOiBbXG4gICAgICAgICAgcG9zaXRpb25zLmJ1ZmZlciwgbm9ybWFscy5idWZmZXIsIGluZGljZXMuYnVmZmVyLCB0ZXhjb29yZC5idWZmZXJcbiAgICAgICAgXVxuICAgICAgfTsqL1xufVxuXG5jb25zdCBjcmVhdGVDb25lID0gKHJhZGl1cyA9IDIsIGhlaWdodCA9IDIsIG51bUNvcm5lcnMgPSA0KSA9PiB7XG4gIGNvbnN0IHZlcnRpY2VzID0gWzAsIC1oZWlnaHQgLyAyLCAwXTtcbiAgY29uc3Qgbm9ybWFscyA9IFtdO1xuICBjb25zdCBpbmRpY2VzID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1Db3JuZXJzICsgMTsgaSsrKSB7XG4gICAgY29uc3QgYW5nbGUgPSAoMiAqIGkgKiBNYXRoLlBJKSAvIG51bUNvcm5lcnM7XG4gICAgY29uc3QgeCA9IE1hdGguY29zKGFuZ2xlKSAqIHJhZGl1cztcbiAgICBjb25zdCB6ID0gTWF0aC5zaW4oYW5nbGUpICogcmFkaXVzO1xuICAgIGNvbnN0IHkgPSAtaGVpZ2h0IC8gMjtcbiAgICB2ZXJ0aWNlcy5wdXNoKHgsIC1oZWlnaHQgLyAyLCB6KTtcbiAgICBub3JtYWxzLnB1c2goMCwgLTEsIDApO1xuICB9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtQ29ybmVyczsgaSsrKSB7XG4gICAgaW5kaWNlcy5wdXNoKDAsIGkgKyAxLCBpICsgMik7XG4gIH1cbiAgLy92ZXJ0aWNlcy5wdXNoKHZlcnRpY2VzWzFdLCAtaGVpZ2h0LzIsIHZlcnRpY2VzWzNdKVxuICBjb25zdCBuID0gdmVydGljZXMubGVuZ3RoIC8gMztcbiAgY29uc3Qgc3RyaWRlID0gMztcbiAgY29uc3Qgc3RhcnQgPSBuO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtQ29ybmVycyArIDI7IGkrKykge1xuICAgIGNvbnN0IGFuZ2xlID0gKDIgKiBpICogTWF0aC5QSSkgLyBudW1Db3JuZXJzO1xuICAgIGNvbnN0IHggPSBNYXRoLmNvcyhhbmdsZSkgKiByYWRpdXM7XG4gICAgY29uc3QgeiA9IE1hdGguc2luKGFuZ2xlKSAqIHJhZGl1cztcbiAgICBjb25zdCB5ID0gLWhlaWdodCAvIDI7XG4gICAgY29uc3QgYSA9IFt2ZXJ0aWNlc1tpICogM10sIHZlcnRpY2VzW2kgKiAzICsgMV0sIHZlcnRpY2VzW2kgKiAzICsgMl1dO1xuICAgIGNvbnN0IGIgPSBbdmVydGljZXNbaSAqIDMgKyAzXSwgdmVydGljZXNbaSAqIDMgKyA0XSwgdmVydGljZXNbaSAqIDMgKyA1XV07XG4gICAgY29uc3QgYyA9IFswLCBoZWlnaHQgLyAyLCAwXTtcbiAgICBpbmRpY2VzLnB1c2goXG4gICAgICBzdGFydCArIGkgKiBzdHJpZGUgKyAyLFxuICAgICAgc3RhcnQgKyBpICogc3RyaWRlICsgMSxcbiAgICAgIHN0YXJ0ICsgaSAqIHN0cmlkZSArIDNcbiAgICApO1xuICAgIHZlcnRpY2VzLnB1c2goLi4uYywgLi4uYSwgLi4uYik7XG4gICAgY29uc3Qgbm9ybWFsID0gbm9ybWFsaXplKGNyb3NzKGRpZmYoYiwgYyksIGRpZmYoYSwgYykpKTtcbiAgICBub3JtYWxzLnB1c2goLi4ubm9ybWFsLCAuLi5ub3JtYWwsIC4uLm5vcm1hbCk7XG4gIH1cblxuICBjb25zdCBfbm9ybWFsID0gbmV3IEZsb2F0MzJBcnJheShub3JtYWxzKTtcbiAgY29uc3QgX3Bvc2l0aW9uID0gbmV3IEZsb2F0MzJBcnJheSh2ZXJ0aWNlcyk7XG4gIGNvbnN0IF9pbmRpY2VzID0gbmV3IFVpbnQxNkFycmF5KGluZGljZXMpO1xuICBjb25zdCBBcnJheURhdGEgPSB7XG4gICAgYXR0cmlidXRlczoge1xuICAgICAgUE9TSVRJT046IHtcbiAgICAgICAgbG9jYXRpb246IDAsXG4gICAgICAgIGNvdW50OiB2ZXJ0aWNlcy5sZW5ndGgsXG4gICAgICAgIG9mZnNldDogMCxcbiAgICAgICAgc3RyaWRlOiAwLFxuICAgICAgICBudW1Db21wb25lbnRzOiAzLFxuICAgICAgICB0eXBlOiA1MTI2LFxuICAgICAgICBkYXRhOiBfcG9zaXRpb24sXG4gICAgICAgIGJ5dGVMZW5ndGg6IF9wb3NpdGlvbi5ieXRlTGVuZ3RoLFxuICAgICAgfSxcbiAgICAgIE5PUk1BTDoge1xuICAgICAgICBsb2NhdGlvbjogMSxcbiAgICAgICAgY291bnQ6IG5vcm1hbHMubGVuZ3RoLFxuICAgICAgICBudW1Db21wb25lbnRzOiAzLFxuICAgICAgICBvZmZzZXQ6IDAsXG4gICAgICAgIHN0cmlkZTogMCxcbiAgICAgICAgdHlwZTogNTEyNixcbiAgICAgICAgZGF0YTogX25vcm1hbCxcbiAgICAgICAgYnl0ZUxlbmd0aDogX25vcm1hbC5ieXRlTGVuZ3RoLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGNvbXBvbmVudFR5cGU6IDUxMjMsXG4gICAgaW5kaWNlczogX2luZGljZXMsXG4gICAgbnVtRWxlbWVudHM6IGluZGljZXMubGVuZ3RoLFxuICAgIG1vZGU6IDQsXG4gIH07XG4gIHJldHVybiBBcnJheURhdGE7XG59O1xuXG5jb25zdCBjcmVhdGVDaXJjbGUgPSAocmFkaXVzLCBudW1Db3JuZXJzKSA9PiB7XG4gIGNvbnN0IHZlcnRpY2VzID0gWzAsIDAsIDBdO1xuICBjb25zdCBub3JtYWxzID0gW107XG4gIGNvbnN0IGluZGljZXMgPSBbXTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IG51bUNvcm5lcnMgKyAxOyBpKyspIHtcbiAgICBjb25zdCBhbmdsZSA9ICgyICogaSAqIE1hdGguUEkpIC8gbnVtQ29ybmVycztcbiAgICBjb25zdCB4ID0gTWF0aC5jb3MoYW5nbGUpICogcmFkaXVzO1xuICAgIGNvbnN0IHogPSBNYXRoLnNpbihhbmdsZSkgKiByYWRpdXM7XG4gICBcbiAgICB2ZXJ0aWNlcy5wdXNoKHgsIDAsIHopO1xuICAgIG5vcm1hbHMucHVzaCgwLCAxLCAwKTtcbiAgfVxuICBmb3IgKGxldCBpID0gMDsgaSA8IG51bUNvcm5lcnM7IGkrKykge1xuICAgIGluZGljZXMucHVzaCgwLCBpICsgMSwgaSArIDIpO1xuICB9XG5cbiAgY29uc3QgX25vcm1hbCA9IG5ldyBGbG9hdDMyQXJyYXkobm9ybWFscyk7XG4gIGNvbnN0IF9wb3NpdGlvbiA9IG5ldyBGbG9hdDMyQXJyYXkodmVydGljZXMpO1xuICBjb25zdCBfaW5kaWNlcyA9IG5ldyBVaW50MTZBcnJheShpbmRpY2VzKTtcblxuICBjb25zdCBBcnJheURhdGEgPSB7XG4gICAgYXR0cmlidXRlczoge1xuICAgICAgUE9TSVRJT046IHtcbiAgICAgICAgbG9jYXRpb246IDAsXG4gICAgICAgIGNvdW50OiB2ZXJ0aWNlcy5sZW5ndGgsXG4gICAgICAgIG9mZnNldDogMCxcbiAgICAgICAgc3RyaWRlOiAwLFxuICAgICAgICBudW1Db21wb25lbnRzOiAzLFxuICAgICAgICB0eXBlOiA1MTI2LFxuICAgICAgICBkYXRhOiBfcG9zaXRpb24sXG4gICAgICAgIGJ5dGVMZW5ndGg6IF9wb3NpdGlvbi5ieXRlTGVuZ3RoLFxuICAgICAgfSxcbiAgICAgIE5PUk1BTDoge1xuICAgICAgICBsb2NhdGlvbjogMSxcbiAgICAgICAgY291bnQ6IG5vcm1hbHMubGVuZ3RoLFxuICAgICAgICBudW1Db21wb25lbnRzOiAzLFxuICAgICAgICBvZmZzZXQ6IDAsXG4gICAgICAgIHN0cmlkZTogMCxcbiAgICAgICAgdHlwZTogNTEyNixcbiAgICAgICAgZGF0YTogX25vcm1hbCxcbiAgICAgICAgYnl0ZUxlbmd0aDogX25vcm1hbC5ieXRlTGVuZ3RoLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGNvbXBvbmVudFR5cGU6IDUxMjMsXG4gICAgaW5kaWNlczogX2luZGljZXMsXG4gICAgbnVtRWxlbWVudHM6IGluZGljZXMubGVuZ3RoLFxuICAgIG1vZGU6IDQsXG4gIH07XG4gIHJldHVybiBBcnJheURhdGE7XG59O1xuXG5leHBvcnQgeyBjcmVhdGVCb3gsIGNyZWF0ZUNvbmUsIGNyZWF0ZUNpcmNsZX07XG4iLCJmdW5jdGlvbiBnZXRHTFR5cGVGb3JUeXBlZEFycmF5KGdsLCB0eXBlZEFycmF5KSB7XG4gIGlmICh0eXBlZEFycmF5IGluc3RhbmNlb2YgSW50OEFycmF5KSB7XG4gICAgcmV0dXJuIGdsLkJZVEU7XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICBpZiAodHlwZWRBcnJheSBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkpIHtcbiAgICByZXR1cm4gZ2wuVU5TSUdORURfQllURTtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gIGlmICh0eXBlZEFycmF5IGluc3RhbmNlb2YgVWludDhDbGFtcGVkQXJyYXkpIHtcbiAgICByZXR1cm4gZ2wuVU5TSUdORURfQllURTtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gIGlmICh0eXBlZEFycmF5IGluc3RhbmNlb2YgSW50MTZBcnJheSkge1xuICAgIHJldHVybiBnbC5TSE9SVDtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gIGlmICh0eXBlZEFycmF5IGluc3RhbmNlb2YgVWludDE2QXJyYXkpIHtcbiAgICByZXR1cm4gZ2wuVU5TSUdORURfU0hPUlQ7XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICBpZiAodHlwZWRBcnJheSBpbnN0YW5jZW9mIEludDMyQXJyYXkpIHtcbiAgICByZXR1cm4gZ2wuSU5UO1xuICB9IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgaWYgKHR5cGVkQXJyYXkgaW5zdGFuY2VvZiBVaW50MzJBcnJheSkge1xuICAgIHJldHVybiBnbC5VTlNJR05FRF9JTlQ7XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICBpZiAodHlwZWRBcnJheSBpbnN0YW5jZW9mIEZsb2F0MzJBcnJheSkge1xuICAgIHJldHVybiBnbC5GTE9BVDtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gIHJldHVybiBmYWxzZTtcbn1cbmZ1bmN0aW9uIGV4cGFuZGVkVHlwZWRBcnJheShhcnJheSkge1xuICBsZXQgY3Vyc29yID0gMDtcbiAgYXJyYXkucHVzaCA9IGZ1bmN0aW9uICgpIHtcbiAgICBmb3IgKGxldCBpaSA9IDA7IGlpIDwgYXJndW1lbnRzLmxlbmd0aDsgKytpaSkge1xuICAgICAgY29uc3QgdmFsdWUgPSBhcmd1bWVudHNbaWldO1xuXG4gICAgICBpZiAoXG4gICAgICAgIHZhbHVlIGluc3RhbmNlb2YgQXJyYXkgfHxcbiAgICAgICAgKHZhbHVlLmJ1ZmZlciAmJiB2YWx1ZS5idWZmZXIgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcilcbiAgICAgICkge1xuICAgICAgICBmb3IgKGxldCBqaiA9IDA7IGpqIDwgdmFsdWUubGVuZ3RoOyArK2pqKSB7XG4gICAgICAgICAgYXJyYXlbY3Vyc29yKytdID0gdmFsdWVbampdO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhcnJheVtjdXJzb3IrK10gPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVVbmlmb3JtU2V0dGVycyhnbCwgcHJvZ3JhbSkge1xuICBjb25zdCBjcmVhdGVUZXh0dXJlU2V0dGVyID0gKHByb2dyYW0sIHVuaWZvcm1JbmZvKSA9PiB7XG4gICAgY29uc3QgbG9jYXRpb24gPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgdW5pZm9ybUluZm8ubmFtZSk7XG5cbiAgICByZXR1cm4gKHRleEJsb2NrTnVtKSA9PiB7XG4gICAgICBnbC51bmlmb3JtMWkobG9jYXRpb24sIHRleEJsb2NrTnVtKTtcbiAgICB9O1xuICB9O1xuICBmdW5jdGlvbiBjcmVhdGVVbmlmb3JtU2V0dGVyKHByb2dyYW0sIHVuaWZvcm1JbmZvKSB7XG4gICAgY29uc3QgbG9jYXRpb24gPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgdW5pZm9ybUluZm8ubmFtZSk7XG5cbiAgICBjb25zdCB0eXBlID0gdW5pZm9ybUluZm8udHlwZTtcblxuICAgIGNvbnN0IGlzQXJyYXkgPVxuICAgICAgdW5pZm9ybUluZm8uc2l6ZSA+IDEgJiYgdW5pZm9ybUluZm8ubmFtZS5zdWJzdHIoLTMpID09PSBcIlswXVwiO1xuXG4gICAgaWYgKHR5cGUgPT09IGdsLkZMT0FUICYmIGlzQXJyYXkpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgICAgICBnbC51bmlmb3JtMWZ2KGxvY2F0aW9uLCB2KTtcbiAgICAgIH07XG4gICAgfVxuICAgIGlmICh0eXBlID09PSBnbC5GTE9BVCkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIGdsLnVuaWZvcm0xZihsb2NhdGlvbiwgdik7XG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAodHlwZSA9PT0gZ2wuRkxPQVRfVkVDMikge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIGdsLnVuaWZvcm0yZnYobG9jYXRpb24sIHYpO1xuICAgICAgfTtcbiAgICB9XG4gICAgaWYgKHR5cGUgPT09IGdsLkZMT0FUX1ZFQzMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgICAgICBnbC51bmlmb3JtM2Z2KGxvY2F0aW9uLCB2KTtcbiAgICAgIH07XG4gICAgfVxuICAgIGlmICh0eXBlID09PSBnbC5GTE9BVF9WRUM0KSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgZ2wudW5pZm9ybTRmdihsb2NhdGlvbiwgdik7XG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAodHlwZSA9PT0gZ2wuSU5UICYmIGlzQXJyYXkpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgICAgICBnbC51bmlmb3JtMWl2KGxvY2F0aW9uLCB2KTtcbiAgICAgIH07XG4gICAgfVxuICAgIGlmICh0eXBlID09PSBnbC5JTlQpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgICAgICBnbC51bmlmb3JtMWkobG9jYXRpb24sIHYpO1xuICAgICAgfTtcbiAgICB9XG4gICAgaWYgKHR5cGUgPT09IGdsLklOVF9WRUMyKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgZ2wudW5pZm9ybTJpdihsb2NhdGlvbiwgdik7XG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAodHlwZSA9PT0gZ2wuSU5UX1ZFQzMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgICAgICBnbC51bmlmb3JtM2l2KGxvY2F0aW9uLCB2KTtcbiAgICAgIH07XG4gICAgfVxuICAgIGlmICh0eXBlID09PSBnbC5JTlRfVkVDNCkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIGdsLnVuaWZvcm00aXYobG9jYXRpb24sIHYpO1xuICAgICAgfTtcbiAgICB9XG4gICAgaWYgKHR5cGUgPT09IGdsLkJPT0wpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgICAgICBnbC51bmlmb3JtMWl2KGxvY2F0aW9uLCB2KTtcbiAgICAgIH07XG4gICAgfVxuICAgIGlmICh0eXBlID09PSBnbC5CT09MX1ZFQzIpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgICAgICBnbC51bmlmb3JtMml2KGxvY2F0aW9uLCB2KTtcbiAgICAgIH07XG4gICAgfVxuICAgIGlmICh0eXBlID09PSBnbC5CT09MX1ZFQzMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgICAgICBnbC51bmlmb3JtM2l2KGxvY2F0aW9uLCB2KTtcbiAgICAgIH07XG4gICAgfVxuICAgIGlmICh0eXBlID09PSBnbC5CT09MX1ZFQzQpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgICAgICBnbC51bmlmb3JtNGl2KGxvY2F0aW9uLCB2KTtcbiAgICAgIH07XG4gICAgfVxuICAgIGlmICh0eXBlID09PSBnbC5GTE9BVF9NQVQyKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgZ2wudW5pZm9ybU1hdHJpeDJmdihsb2NhdGlvbiwgZmFsc2UsIHYpO1xuICAgICAgfTtcbiAgICB9XG4gICAgaWYgKHR5cGUgPT09IGdsLkZMT0FUX01BVDMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgICAgICBnbC51bmlmb3JtTWF0cml4M2Z2KGxvY2F0aW9uLCBmYWxzZSwgdik7XG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAodHlwZSA9PT0gZ2wuRkxPQVRfTUFUNCkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIGdsLnVuaWZvcm1NYXRyaXg0ZnYobG9jYXRpb24sIGZhbHNlLCB2KTtcbiAgICAgIH07XG4gICAgfVxuICB9XG4gIGNvbnN0IHVuaWZvcm1TZXR0ZXJzID0ge307XG4gIGNvbnN0IHRleHR1cmVTZXR0ZXJzID0ge307XG4gIGNvbnN0IG51bVVuaWZvcm1zID0gZ2wuZ2V0UHJvZ3JhbVBhcmFtZXRlcihwcm9ncmFtLCBnbC5BQ1RJVkVfVU5JRk9STVMpO1xuXG4gIGZvciAobGV0IGlpID0gMDsgaWkgPCBudW1Vbmlmb3JtczsgKytpaSkge1xuICAgIGNvbnN0IHVuaWZvcm1JbmZvID0gZ2wuZ2V0QWN0aXZlVW5pZm9ybShwcm9ncmFtLCBpaSk7XG4gICAgaWYgKCF1bmlmb3JtSW5mbykge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGxldCBuYW1lID0gdW5pZm9ybUluZm8ubmFtZTtcbiAgICBpZiAodW5pZm9ybUluZm8udHlwZSA9PT0gZ2wuU0FNUExFUl8yRCkge1xuICAgICAgdGV4dHVyZVNldHRlcnNbbmFtZV0gPSBjcmVhdGVUZXh0dXJlU2V0dGVyKHByb2dyYW0sIHVuaWZvcm1JbmZvKTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmIChuYW1lLnN1YnN0cigtMykgPT09IFwiWzBdXCIpIHtcbiAgICAgIG5hbWUgPSBuYW1lLnN1YnN0cigwLCBuYW1lLmxlbmd0aCAtIDMpO1xuICAgIH1cbiAgICBpZiAodW5pZm9ybUluZm8uc2l6ZSA+IDEpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdW5pZm9ybUluZm8uc2l6ZTsgaSsrKSB7XG4gICAgICAgIGNvbnN0IG9iaiA9IHtcbiAgICAgICAgICBzaXplOiB1bmlmb3JtSW5mby5zaXplLFxuICAgICAgICAgIHR5cGU6IHVuaWZvcm1JbmZvLnR5cGUsXG4gICAgICAgICAgbmFtZTogbmFtZSArIGBbJHtpfV1gLFxuICAgICAgICB9O1xuICAgICAgICB1bmlmb3JtU2V0dGVyc1tuYW1lICsgYFske2l9XWBdID0gY3JlYXRlVW5pZm9ybVNldHRlcihwcm9ncmFtLCBvYmopO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzZXR0ZXIgPSBjcmVhdGVVbmlmb3JtU2V0dGVyKHByb2dyYW0sIHVuaWZvcm1JbmZvKTtcbiAgICAgIHVuaWZvcm1TZXR0ZXJzW25hbWVdID0gc2V0dGVyO1xuICAgIH1cbiAgfVxuICByZXR1cm4geyB1bmlmb3JtU2V0dGVycywgdGV4dHVyZVNldHRlcnMgfTtcbn1cblxuY2xhc3MgUHJvZ3JhbUluZm8ge1xuICBjb25zdHJ1Y3Rvcih2cywgZnMpIHtcbiAgICB0aGlzLnZzID0gdnM7XG4gICAgdGhpcy5mcyA9IGZzO1xuICAgIHRoaXMuVkFPID0gbnVsbDtcbiAgICB0aGlzLnVuaWZvcm1TZXR0ZXJzID0gbnVsbDtcbiAgICB0aGlzLnZlcnRleFNoYWRlciA9IG51bGw7XG4gICAgdGhpcy5mcmFnbWVudFNoYWRlciA9IG51bGw7XG4gICAgdGhpcy5wcm9ncmFtID0gbnVsbDtcbiAgICB0aGlzLmdsID0gbnVsbDtcbiAgfVxuICBzZXRDb250ZXh0KGdsQ29udGV4dFdyYXBwZXIpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBnbENvbnRleHRXcmFwcGVyO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIGNyZWF0ZVVuaWZvcm1TZXR0ZXJzKCkge1xuICAgIGNvbnN0IHsgZ2wgfSA9IHRoaXMuY29udGV4dDtcbiAgICBjb25zdCB7IHVuaWZvcm1TZXR0ZXJzLCB0ZXh0dXJlU2V0dGVycyB9ID0gY3JlYXRlVW5pZm9ybVNldHRlcnMoXG4gICAgICBnbCxcbiAgICAgIHRoaXMucHJvZ3JhbVxuICAgICk7XG4gICAgdGhpcy50ZXh0dXJlU2V0dGVycyA9IHRleHR1cmVTZXR0ZXJzO1xuICAgIHRoaXMudW5pZm9ybVNldHRlcnMgPSB1bmlmb3JtU2V0dGVycztcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBjb21waWxlU2hhZGVycygpIHtcbiAgICBjb25zdCB7IGdsIH0gPSB0aGlzLmNvbnRleHQ7XG4gICAgdGhpcy52ZXJ0ZXhTaGFkZXIgPSBnbC5jcmVhdGVTaGFkZXIoZ2wuVkVSVEVYX1NIQURFUik7XG4gICAgZ2wuc2hhZGVyU291cmNlKHRoaXMudmVydGV4U2hhZGVyLCB0aGlzLnZzKTtcbiAgICBnbC5jb21waWxlU2hhZGVyKHRoaXMudmVydGV4U2hhZGVyKTtcbiAgICBpZiAoIWdsLmdldFNoYWRlclBhcmFtZXRlcih0aGlzLnZlcnRleFNoYWRlciwgZ2wuQ09NUElMRV9TVEFUVVMpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoZ2wuZ2V0U2hhZGVySW5mb0xvZyh0aGlzLnZlcnRleFNoYWRlcikpO1xuICAgIH1cblxuICAgIHRoaXMuZnJhZ21lbnRTaGFkZXIgPSBnbC5jcmVhdGVTaGFkZXIoZ2wuRlJBR01FTlRfU0hBREVSKTtcbiAgICBnbC5zaGFkZXJTb3VyY2UodGhpcy5mcmFnbWVudFNoYWRlciwgdGhpcy5mcyk7XG4gICAgZ2wuY29tcGlsZVNoYWRlcih0aGlzLmZyYWdtZW50U2hhZGVyKTtcbiAgICBpZiAoIWdsLmdldFNoYWRlclBhcmFtZXRlcih0aGlzLmZyYWdtZW50U2hhZGVyLCBnbC5DT01QSUxFX1NUQVRVUykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihnbC5nZXRTaGFkZXJJbmZvTG9nKHRoaXMuZnJhZ21lbnRTaGFkZXIpKTtcbiAgICB9XG5cbiAgICB0aGlzLnByb2dyYW0gPSBnbC5jcmVhdGVQcm9ncmFtKCk7XG4gICAgZ2wuYXR0YWNoU2hhZGVyKHRoaXMucHJvZ3JhbSwgdGhpcy52ZXJ0ZXhTaGFkZXIpO1xuICAgIGdsLmF0dGFjaFNoYWRlcih0aGlzLnByb2dyYW0sIHRoaXMuZnJhZ21lbnRTaGFkZXIpO1xuICAgIGdsLmxpbmtQcm9ncmFtKHRoaXMucHJvZ3JhbSk7XG4gICAgaWYgKCFnbC5nZXRQcm9ncmFtUGFyYW1ldGVyKHRoaXMucHJvZ3JhbSwgZ2wuTElOS19TVEFUVVMpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoZ2wuZ2V0UHJvZ3JhbUluZm9Mb2codGhpcy5wcm9ncmFtKSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIHNldFVuaWZvcm1zKHVuaWZvcm1zKSB7XG4gICAgdGhpcy5jb250ZXh0LnVzZVByb2dyYW1JbmZvKHRoaXMpO1xuICAgIE9iamVjdC5rZXlzKHVuaWZvcm1zKS5mb3JFYWNoKChuYW1lKSA9PiB7XG4gICAgICBjb25zdCBzZXR0ZXIgPSB0aGlzLnVuaWZvcm1TZXR0ZXJzW25hbWVdO1xuICAgICAgaWYgKHNldHRlcikgc2V0dGVyKHVuaWZvcm1zW25hbWVdKTtcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBzZXRUZXh0dXJlVW5pZm9ybVVuaXQobmFtZSwgdW5pdCkge1xuICAgIHRoaXMuY29udGV4dC51c2VQcm9ncmFtSW5mbyh0aGlzKTtcbiAgICBjb25zdCBzZXR0ZXIgPSB0aGlzLnRleHR1cmVTZXR0ZXJzW25hbWVdO1xuICAgIGlmIChzZXR0ZXIpIHNldHRlcih1bml0KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuXG5leHBvcnQgeyBleHBhbmRlZFR5cGVkQXJyYXksIFByb2dyYW1JbmZvLCBnZXRHTFR5cGVGb3JUeXBlZEFycmF5IH07XG4iLCJpbXBvcnQgZ2xzbCBmcm9tIFwiLi9nbHNsXCI7XG5pbXBvcnQgeyBQcm9ncmFtSW5mbyB9IGZyb20gXCIuLi8uLi9wcm9ncmFtSW5mb1wiO1xuY29uc3QgdmVydCA9IGdsc2xgI3ZlcnNpb24gMzAwIGVzXG5cbnByZWNpc2lvbiBoaWdocCBmbG9hdDtcblxudW5pZm9ybSBtYXQ0IHdvcmxkVmlld1Byb2plY3Rpb247XG5cblxubGF5b3V0KGxvY2F0aW9uID0gMCkgaW4gdmVjNCBhX3Bvc2l0aW9uO1xudm9pZCBtYWluKCkge1xuICBnbF9Qb3NpdGlvbiA9IHdvcmxkVmlld1Byb2plY3Rpb24gKiBhX3Bvc2l0aW9uO1xuICBnbF9Qb2ludFNpemUgPSAxMC4wO1xufWA7XG5jb25zdCBmcmFnID0gZ2xzbGAjdmVyc2lvbiAzMDAgZXNcbnByZWNpc2lvbiBoaWdocCBmbG9hdDtcbiBcblxuXG51bmlmb3JtIHZlYzQgdV9jb2xvcjtcbm91dCB2ZWM0IG91dENvbG9yO1xudm9pZCBtYWluKCkge1xuICBcbiAgXG4gIG91dENvbG9yID0gdV9jb2xvcjtcbiBcbiAgXG4gIFxufVxuYDtcbmV4cG9ydCBkZWZhdWx0IG5ldyBQcm9ncmFtSW5mbyh2ZXJ0LCBmcmFnKTtcbiIsIlxuaW1wb3J0IGdsc2wgZnJvbSBcIi4vZ2xzbFwiXG5pbXBvcnQgeyBQcm9ncmFtSW5mbyB9IGZyb20gXCIuLi8uLi9wcm9ncmFtSW5mb1wiXG5jb25zdCB2ZXJ0ID0gZ2xzbGAjdmVyc2lvbiAzMDAgZXNcbiBcbmxheW91dChsb2NhdGlvbiA9IDApIGluIHZlYzQgYV9wb3NpdGlvbjtcbmxheW91dChsb2NhdGlvbiA9IDEpIGluIHZlYzMgYV9ub3JtYWw7XG5cbmxheW91dChsb2NhdGlvbiA9IDQpIGluIHZlYzIgYV90ZXhjb29yZDtcbmxheW91dChsb2NhdGlvbiA9IDUpIGluIG1hdDQgaV9tYXRyaXg7XG5cbnVuaWZvcm0gbWF0NCB3b3JsZE1hdHJpeDtcbnVuaWZvcm0gbWF0NCB3b3JsZFZpZXdQcm9qZWN0aW9uO1xudW5pZm9ybSB2ZWMzIHVfbGlnaHRXb3JsZFBvc2l0aW9uO1xudW5pZm9ybSB2ZWMzIHVfdmlld1dvcmxkUG9zaXRpb247XG5cbm91dCB2ZWMzIHZfbm9ybWFsO1xub3V0IHZlYzIgdl90ZXhjb29yZDtcbm91dCB2ZWMzIHZfc3VyZmFjZVRvTGlnaHQ7XG5vdXQgdmVjMyB2X3N1cmZhY2VUb1ZpZXc7XG5cbnZvaWQgbWFpbigpIHtcblxuICAgIHZlYzMgc3VyZmFjZVdvcmxkUG9zaXRpb24gPSAod29ybGRNYXRyaXggKiBhX3Bvc2l0aW9uKS54eXo7XG4gICAgdl9zdXJmYWNlVG9MaWdodCA9IHVfbGlnaHRXb3JsZFBvc2l0aW9uIC0gc3VyZmFjZVdvcmxkUG9zaXRpb247XG5cbiAgICB2ZWM0IHBvcyA9ICAgd29ybGRWaWV3UHJvamVjdGlvbiAqIGFfcG9zaXRpb24gIDtcbiAgICBnbF9Qb3NpdGlvbiA9IHBvcztcblxuICAgIHZfdGV4Y29vcmQgPSBhX3RleGNvb3JkO1xuICAgIHZfbm9ybWFsID0gbWF0MyggICB3b3JsZE1hdHJpeCApICogYV9ub3JtYWw7XG4gICAgdl9zdXJmYWNlVG9WaWV3ID0gdV92aWV3V29ybGRQb3NpdGlvbiAtIHN1cmZhY2VXb3JsZFBvc2l0aW9uO1xuICAgICAgXG59YFxuY29uc3QgZnJhZyA9IGdsc2xgI3ZlcnNpb24gMzAwIGVzXG5wcmVjaXNpb24gaGlnaHAgZmxvYXQ7XG4gXG5cbmluIHZlYzIgdl90ZXhjb29yZDtcblxuaW4gdmVjMyB2X25vcm1hbDtcbmluIHZlYzMgdl9zdXJmYWNlVG9WaWV3O1xuaW4gdmVjMyB2X3N1cmZhY2VUb0xpZ2h0O1xuXG5cbi8vdW5pZm9ybSBzYW1wbGVyMkQgdV90ZXh0dXJlMTtcbnVuaWZvcm0gZmxvYXQgdV9zaGluaW5lc3M7XG51bmlmb3JtIHZlYzQgdV9jb2xvcjtcbnVuaWZvcm0gdmVjNCB1X2FtYmllbnRMaWdodDtcbm91dCB2ZWM0IG91dENvbG9yO1xuXG5cbnZvaWQgbWFpbigpIHtcbiAgXG4gIHZlYzMgc3VyZmFjZVRvTGlnaHREaXJlY3Rpb24gPSBub3JtYWxpemUodl9zdXJmYWNlVG9MaWdodCk7XG4gIHZlYzMgc3VyZmFjZVRvVmlld0RpcmVjdGlvbiA9IG5vcm1hbGl6ZSh2X3N1cmZhY2VUb1ZpZXcpO1xuICB2ZWMzIGhhbGZWZWN0b3IgPSBub3JtYWxpemUoc3VyZmFjZVRvTGlnaHREaXJlY3Rpb24gKyBzdXJmYWNlVG9WaWV3RGlyZWN0aW9uKTtcblxuICB2ZWMzIG5vcm1hbCA9IG5vcm1hbGl6ZSh2X25vcm1hbCk7XG4gIGZsb2F0IGxpZ2h0ID0gZG90KHZfbm9ybWFsLCBzdXJmYWNlVG9MaWdodERpcmVjdGlvbik7XG4gIGZsb2F0IHNwZWN1bGFyID0gMC4wO1xuICBpZiAobGlnaHQgPiAwLjApIHtcbiAgICBzcGVjdWxhciA9IHBvdyhkb3Qobm9ybWFsLCBoYWxmVmVjdG9yKSwgdV9zaGluaW5lc3MpO1xuICB9XG5cbiAgb3V0Q29sb3IgPSAgdV9jb2xvcjtcbiAgb3V0Q29sb3IucmdiICo9IGxpZ2h0O1xuICBvdXRDb2xvci5yZ2IgKz0gdV9hbWJpZW50TGlnaHQucmdiICowLjM7XG4gIFxufVxuYFxuXG5leHBvcnQgZGVmYXVsdCBuZXcgUHJvZ3JhbUluZm8odmVydCwgZnJhZykiLCJjb25zdCBnbHNsID0geCA9PiB4XG5leHBvcnQgZGVmYXVsdCBnbHNsIiwiaW1wb3J0IGRlZmF1bHRQcm9ncmFtIGZyb20gXCIuL0RlZmF1bHRcIjtcbmltcG9ydCBsaWdodGluZ1Byb2dyYW0gZnJvbSBcIi4vTGlnaHRpbmdcIjtcblxuZXhwb3J0IHtkZWZhdWx0UHJvZ3JhbSwgbGlnaHRpbmdQcm9ncmFtfSIsImNvbnN0IHNldENhbnZhc1NpemUgPSAoY3R4LCB3aWR0aCwgaGVpZ2h0KSA9PiB7XG4gIGN0eC5jYW52YXMud2lkdGggPSB3aWR0aDtcbiAgY3R4LmNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG59O1xuXG5jb25zdCBtYWtlVGV4dHVyZSA9IChnbCwgY3R4KSA9PiB7XG4gIGNvbnN0IHRleCA9IGdsLmNyZWF0ZVRleHR1cmUoKTtcbiAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgdGV4KTtcblxuICBnbC50ZXhJbWFnZTJEKFxuICAgIGdsLlRFWFRVUkVfMkQsXG4gICAgMCxcbiAgICBnbC5SR0JBLFxuICAgIGdsLlJHQkEsXG4gICAgZ2wuVU5TSUdORURfQllURSxcbiAgICBjdHguY2FudmFzXG4gICk7XG4gIHJldHVybiB0ZXg7XG59O1xuY29uc3QgbWFrZVN0cmlwZVRleHR1cmUgPSAoZ2wsIG9wdGlvbnMpID0+IHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHZhciB3aWR0aCA9IG9wdGlvbnMud2lkdGggfHwgNDtcbiAgdmFyIGhlaWdodCA9IG9wdGlvbnMuaGVpZ2h0IHx8IDQ7XG4gIHZhciBjb2xvcjEgPSBvcHRpb25zLmNvbG9yMSB8fCBcInJnYmEoMSwwLDAsMC4xKVwiO1xuICB2YXIgY29sb3IyID0gb3B0aW9ucy5jb2xvcjIgfHwgXCJyZ2JhKDEsMSwxLDAuNSlcIjtcbiAgY29uc3QgY3R4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKS5nZXRDb250ZXh0KFwiMmRcIik7XG4gIHNldENhbnZhc1NpemUoY3R4LCB3aWR0aCwgaGVpZ2h0KTtcblxuICBjdHguZmlsbFN0eWxlID0gY29sb3IxO1xuICBjdHguZmlsbFJlY3QoMCwgMCwgd2lkdGgsIGhlaWdodCk7XG4gIGN0eC5maWxsU3R5bGUgPSBjb2xvcjI7XG4gIGN0eC5maWxsUmVjdCgwLCAwLCB3aWR0aCwgaGVpZ2h0IC8gMik7XG5cbiAgcmV0dXJuIG1ha2VUZXh0dXJlKGdsLCBjdHgpO1xufTtcbmNvbnN0IG1ha2VTdHJpcGVJbWcgPSAob3B0aW9ucykgPT4ge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgdmFyIHdpZHRoID0gb3B0aW9ucy53aWR0aCB8fCA0O1xuICB2YXIgaGVpZ2h0ID0gb3B0aW9ucy5oZWlnaHQgfHwgNDtcbiAgdmFyIGNvbG9yMSA9IG9wdGlvbnMuY29sb3IxIHx8IFwicmdiYSgxLDAsMCwwLjUpXCI7XG4gIHZhciBjb2xvcjIgPSBvcHRpb25zLmNvbG9yMiB8fCBcInJnYmEoMCwwLDEsMSlcIjtcbiAgY29uc3QgY3R4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKS5nZXRDb250ZXh0KFwiMmRcIik7XG4gIHNldENhbnZhc1NpemUoY3R4LCB3aWR0aCwgaGVpZ2h0KTtcblxuICBjdHguZmlsbFN0eWxlID0gY29sb3IxO1xuICBjdHguZmlsbFJlY3QoMCwgMCwgd2lkdGgsIGhlaWdodCk7XG4gIGN0eC5maWxsU3R5bGUgPSBjb2xvcjI7XG4gIGN0eC5maWxsUmVjdCgwLCAwLCB3aWR0aCwgaGVpZ2h0IC8gMik7XG5cbiAgcmV0dXJuIGN0eC5jYW52YXM7XG59O1xuY29uc3QgbWFrZUltZ0Zyb21TdmdYbWwgPSAoeG1sLCBvcHRpb25zID0ge30pID0+IHtcbiAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgdmFyIHN2ZzY0ID0gYnRvYSh4bWwpO1xuICB2YXIgYjY0U3RhcnQgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsXCI7XG4gIHZhciBpbWFnZTY0ID0gYjY0U3RhcnQgKyBzdmc2NDtcbiAgaW1nLnNyYyA9IGltYWdlNjQ7XG5cbiAgY29uc3Qgd2lkdGggPSBvcHRpb25zLndpZHRoIHx8IDEwMDtcbiAgY29uc3QgaGVpZ2h0ID0gb3B0aW9ucy5oZWlnaHQgfHwgMTAwO1xuICBjb25zdCB4ID0gb3B0aW9ucy54IHx8IDE7XG4gIGNvbnN0IHkgPSBvcHRpb25zLnkgfHwgNTA7XG5cbiAgY29uc3QgY3R4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKS5nZXRDb250ZXh0KFwiMmRcIik7XG4gIHNldENhbnZhc1NpemUoY3R4LCB3aWR0aCwgaGVpZ2h0KTtcblxuICBjdHguZHJhd0ltYWdlKGltZywgeCwgeSwgd2lkdGgsIGhlaWdodCk7XG4gIGN0eC5maWxsU3R5bGUgPSBcInJnYmEoMCwwLDAsMSlcIjtcbiAgY3R4LmZpbGxSZWN0KDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xuICByZXR1cm4gY3R4LmltZztcbn07XG5jb25zdCBzZXRUZXh0dXJlVW5pdHMgPSAoZ2wsIHRleHR1cmUsIHVuaXROdW0pID0+IHtcbiAgZ2wuYWN0aXZlVGV4dHVyZShnbC5URVhUVVJFMCArIHVuaXROdW0pO1xuICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCB0ZXh0dXJlKTtcbn07XG5cbmNsYXNzIFRleHR1cmUge1xuICBzdGF0aWMgbWFrZUltZ0Zyb21TdmdYbWwgPSBtYWtlSW1nRnJvbVN2Z1htbDtcbiAgY29uc3RydWN0b3IoZ2wpIHtcbiAgICB0aGlzLnRleHR1cmUgPSBnbC5jcmVhdGVUZXh0dXJlKCk7XG4gICAgdGhpcy5mcm9tSW1hZ2UgPSAoaW1hZ2UpID0+IHtcbiAgICAgIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIHRoaXMudGV4dHVyZSk7XG4gICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfV1JBUF9TLCBnbC5DTEFNUF9UT19FREdFKTtcbiAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9XUkFQX1QsIGdsLkNMQU1QX1RPX0VER0UpO1xuICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01JTl9GSUxURVIsIGdsLk5FQVJFU1QpO1xuICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01BR19GSUxURVIsIGdsLk5FQVJFU1QpO1xuICAgICAgZ2wudGV4SW1hZ2UyRChcbiAgICAgICAgZ2wuVEVYVFVSRV8yRCxcbiAgICAgICAgMCxcbiAgICAgICAgZ2wuUkdCQSxcbiAgICAgICAgZ2wuUkdCQSxcbiAgICAgICAgZ2wuVU5TSUdORURfQllURSxcbiAgICAgICAgaW1hZ2VcbiAgICAgICk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIHRoaXMuZ2V0VGV4dHVyZSA9ICgpID0+IHRoaXMudGV4dHVyZTtcbiAgfVxufVxuZXhwb3J0IHsgbWFrZUltZ0Zyb21TdmdYbWwsIG1ha2VTdHJpcGVJbWcsIFRleHR1cmUsIHNldFRleHR1cmVVbml0cyB9O1xuIiwiY29uc3QgQUFCQiA9IHJlcXVpcmUoJy4vc3JjL2FhYmInKVxuY29uc3QgbTMgPSByZXF1aXJlKCcuL3NyYy9tMycpXG5jb25zdCBtNCA9IHJlcXVpcmUoJy4vc3JjL200JylcbmNvbnN0IHtOb2RlICwgVFJTfT0gcmVxdWlyZSgnLi9zcmMvbm9kZScpXG5jb25zdCB2ZWN0b3IgPSByZXF1aXJlKCcuL3NyYy92ZWN0b3InKVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBBQUJCLCBtMywgbTQsIE5vZGUsIFRSUywgdmVjdG9yXG59IiwiY2xhc3MgQUFCQntcbiAgICBjb25zdHJ1Y3RvcihtaW4sIG1heCl7XG4gICAgICAgIHRoaXMubWluID0gbWluXG4gICAgICAgIHRoaXMubWF4ID0gbWF4XG4gICAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBBQUJCIiwiY29uc3QgbTMgPSB7XG4gICAgbXVsdGlwbHkgOiBmdW5jdGlvbihiLCBhKSB7XG4gICAgICAgIHZhciBhMDAgPSBhWzAgKiAzICsgMF07XG4gICAgICAgIHZhciBhMDEgPSBhWzAgKiAzICsgMV07XG4gICAgICAgIHZhciBhMDIgPSBhWzAgKiAzICsgMl07XG4gICAgICAgIHZhciBhMTAgPSBhWzEgKiAzICsgMF07XG4gICAgICAgIHZhciBhMTEgPSBhWzEgKiAzICsgMV07XG4gICAgICAgIHZhciBhMTIgPSBhWzEgKiAzICsgMl07XG4gICAgICAgIHZhciBhMjAgPSBhWzIgKiAzICsgMF07XG4gICAgICAgIHZhciBhMjEgPSBhWzIgKiAzICsgMV07XG4gICAgICAgIHZhciBhMjIgPSBhWzIgKiAzICsgMl07XG4gICAgICAgIHZhciBiMDAgPSBiWzAgKiAzICsgMF07XG4gICAgICAgIHZhciBiMDEgPSBiWzAgKiAzICsgMV07XG4gICAgICAgIHZhciBiMDIgPSBiWzAgKiAzICsgMl07XG4gICAgICAgIHZhciBiMTAgPSBiWzEgKiAzICsgMF07XG4gICAgICAgIHZhciBiMTEgPSBiWzEgKiAzICsgMV07XG4gICAgICAgIHZhciBiMTIgPSBiWzEgKiAzICsgMl07XG4gICAgICAgIHZhciBiMjAgPSBiWzIgKiAzICsgMF07XG4gICAgICAgIHZhciBiMjEgPSBiWzIgKiAzICsgMV07XG4gICAgICAgIHZhciBiMjIgPSBiWzIgKiAzICsgMl07XG4gICAgXG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgYjAwICogYTAwICsgYjAxICogYTEwICsgYjAyICogYTIwLFxuICAgICAgICAgIGIwMCAqIGEwMSArIGIwMSAqIGExMSArIGIwMiAqIGEyMSxcbiAgICAgICAgICBiMDAgKiBhMDIgKyBiMDEgKiBhMTIgKyBiMDIgKiBhMjIsXG4gICAgICAgICAgYjEwICogYTAwICsgYjExICogYTEwICsgYjEyICogYTIwLFxuICAgICAgICAgIGIxMCAqIGEwMSArIGIxMSAqIGExMSArIGIxMiAqIGEyMSxcbiAgICAgICAgICBiMTAgKiBhMDIgKyBiMTEgKiBhMTIgKyBiMTIgKiBhMjIsXG4gICAgICAgICAgYjIwICogYTAwICsgYjIxICogYTEwICsgYjIyICogYTIwLFxuICAgICAgICAgIGIyMCAqIGEwMSArIGIyMSAqIGExMSArIGIyMiAqIGEyMSxcbiAgICAgICAgICBiMjAgKiBhMDIgKyBiMjEgKiBhMTIgKyBiMjIgKiBhMjIsXG4gICAgICAgIF07XG4gICAgICB9LFxuICAgICAgeFJvdGF0aW9uOiBmdW5jdGlvbihhbmdsZUluUmFkaWFucykge1xuICAgICAgICB2YXIgYyA9IE1hdGguY29zKGFuZ2xlSW5SYWRpYW5zKTtcbiAgICAgICAgdmFyIHMgPSBNYXRoLnNpbihhbmdsZUluUmFkaWFucyk7XG4gICAgIFxuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgIDEsIDAsIDAsIFxuICAgICAgICAgIDAsIGMsIHMsIFxuICAgICAgICAgIDAsIC1zLCBjXG4gICAgICAgIF07XG4gICAgICB9LFxuICAgICBcbiAgICAgIHlSb3RhdGlvbjogZnVuY3Rpb24oYW5nbGVJblJhZGlhbnMpIHtcbiAgICAgICAgdmFyIGMgPSBNYXRoLmNvcyhhbmdsZUluUmFkaWFucyk7XG4gICAgICAgIHZhciBzID0gTWF0aC5zaW4oYW5nbGVJblJhZGlhbnMpO1xuICAgICBcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICBjLCAwLCAtcywgXG4gICAgICAgICAgMCwgMSwgMCwgXG4gICAgICAgICAgcywgMCwgY1xuICAgICAgICBdO1xuICAgICAgfSxcbiAgICAgXG4gICAgICB6Um90YXRpb246IGZ1bmN0aW9uKGFuZ2xlSW5SYWRpYW5zKSB7XG4gICAgICAgIHZhciBjID0gTWF0aC5jb3MoYW5nbGVJblJhZGlhbnMpO1xuICAgICAgICB2YXIgcyA9IE1hdGguc2luKGFuZ2xlSW5SYWRpYW5zKTtcbiAgICAgXG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgIGMsIHMsIDAsIFxuICAgICAgICAgIC1zLCBjLCAwLFxuICAgICAgICAgICAwLCAwLCAxXG4gICAgICAgIF07XG4gICAgICB9LFxuICAgICAgbTNUb200IDogZnVuY3Rpb24obSl7XG4gICAgICAgIGNvbnN0IGRzdCA9IG5ldyBGbG9hdDMyQXJyYXkoMTYpXG4gICAgICAgIGRzdFsgMF0gPSBtWzBdXG4gICAgICAgIGRzdFsgMV0gPSBtWzFdXG4gICAgICAgIGRzdFsgMl0gPSBtWzJdXG4gICAgICAgIGRzdFsgM10gPSAwXG4gICAgICAgIGRzdFsgNF0gPSBtWzNdXG4gICAgICAgIGRzdFsgNV0gPSBtWzRdXG4gICAgICAgIGRzdFsgNl0gPSBtWzVdXG4gICAgICAgIGRzdFsgN10gPSAwXG4gICAgICAgIGRzdFsgOF0gPSBtWzZdXG4gICAgICAgIGRzdFsgOV0gPSBtWzddXG4gICAgICAgIGRzdFsxMF0gPSBtWzhdXG4gICAgICAgIGRzdFsxMV0gPSAwXG4gICAgICAgIGRzdFsxMl0gPSAwXG4gICAgICAgIGRzdFsxM10gPSAwXG4gICAgICAgIGRzdFsxNF0gPSAwXG4gICAgICAgIGRzdFsxNV0gPSAxXG4gICAgICAgIHJldHVybiBkc3RcbiAgICAgIH0sXG4gICAgICB4Um90YXRlOiBmdW5jdGlvbihtLCBhbmdsZUluUmFkaWFucykge1xuICAgICAgICByZXR1cm4gbTMubXVsdGlwbHkobSwgbTMueFJvdGF0aW9uKGFuZ2xlSW5SYWRpYW5zKSk7XG4gICAgICB9LFxuICAgICBcbiAgICAgIHlSb3RhdGU6IGZ1bmN0aW9uKG0sIGFuZ2xlSW5SYWRpYW5zKSB7XG4gICAgICAgIHJldHVybiBtMy5tdWx0aXBseShtLCBtMy55Um90YXRpb24oYW5nbGVJblJhZGlhbnMpKTtcbiAgICAgIH0sXG4gICAgIFxuICAgICAgelJvdGF0ZTogZnVuY3Rpb24obSwgYW5nbGVJblJhZGlhbnMpIHtcbiAgICAgICAgcmV0dXJuIG0zLm11bHRpcGx5KG0sIG0zLnpSb3RhdGlvbihhbmdsZUluUmFkaWFucykpO1xuICAgICAgfSxcbiAgICAgIHRyYW5zZm9ybVBvaW50IDogZnVuY3Rpb24obSwgdiwgZHN0KSB7XG4gICAgICAgIGRzdCA9IGRzdCB8fCBuZXcgRmxvYXQzMkFycmF5KDMpO1xuICAgICAgICB2YXIgdjAgPSB2WzBdO1xuICAgICAgICB2YXIgdjEgPSB2WzFdO1xuICAgICAgICB2YXIgdjIgPSB2WzJdO1xuICAgICAgICBcbiAgICBcbiAgICAgICAgZHN0WzBdID0gKHYwICogbVswICogMyArIDBdICsgdjEgKiBtWzEgKiAzICsgMF0gKyB2MiAqIG1bMiAqIDMgKyAwXSAgKSBcbiAgICAgICAgZHN0WzFdID0gKHYwICogbVswICogMyArIDFdICsgdjEgKiBtWzEgKiAzICsgMV0gKyB2MiAqIG1bMiAqIDMgKyAxXSAgKSBcbiAgICAgICAgZHN0WzJdID0gKHYwICogbVswICogMyArIDJdICsgdjEgKiBtWzEgKiAzICsgMl0gKyB2MiAqIG1bMiAqIDMgKyAyXSApIFxuICAgIFxuICAgICAgICByZXR1cm4gZHN0O1xuICAgICAgfSxcbiAgICAgIGlkZW50aXR5IDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgMSwgMCwgMCxcbiAgICAgICAgICAwLCAxLCAwLFxuICAgICAgICAgIDAsIDAsIDEsXG4gICAgICAgIF07XG4gICAgICB9LFxuICAgICAgdHJhbnNwb3NlIDogZnVuY3Rpb24obSl7XG4gICAgICAgICBcbiAgICAgICAgICBkc3QgPSBuZXcgRmxvYXQzMkFycmF5KDkpXG4gICAgICAgICAgZHN0WzBdID0gbVswXVxuICAgICAgICAgIGRzdFsxXSA9IG1bM11cbiAgICAgICAgICBkc3RbMl0gPSBtWzZdXG4gICAgICAgICAgZHN0WzNdID0gbVsxXVxuICAgICAgICAgIGRzdFs0XSA9IG1bNF1cbiAgICAgICAgICBkc3RbNV0gPSBtWzddXG4gICAgICAgICAgZHN0WzZdID0gbVsyXVxuICAgICAgICAgIGRzdFs3XSA9IG1bNV1cbiAgICAgICAgICBkc3RbOF0gPSBtWzhdXG4gICAgICAgICAgcmV0dXJuIGRzdFxuICAgICAgfSxcbiAgICAgIHNjYWxpbmcgOiBmdW5jdGlvbihzeCxzeSxzeil7XG4gICAgICAgIHJldHVybiBuZXcgRmxvYXQzMkFycmF5KFtcbiAgICAgICAgICAgICAgICAgICAgc3gsIDAsIDAsXG4gICAgICAgICAgICAgICAgICAgIDAsIHN5LCAwLFxuICAgICAgICAgICAgICAgICAgICAwLCAgMCwgc3pcbiAgICAgICAgICAgICAgXSlcbiAgICAgIH0sXG4gICAgICBzY2FsZSA6IGZ1bmN0aW9uKG0sIHN4LHN5LHN6KXtcbiAgICAgICAgcmV0dXJuIG0zLm11bHRpcGx5KG0sIG0zLnNjYWxpbmcoc3gsIHN5LCBzeikpXG4gICAgICB9LFxuICAgICAgLypcbiAgICAgIDAgMSAyXG4gICAgICAzIDQgNVxuICAgICAgNiA3IDhcbiAgICAgICovXG4gICAgICBpbnZlcnNlIDogZnVuY3Rpb24obSl7XG4gICAgICAgY29uc3QgZGV0ID0gbVswXSAqIG1bNF0gKiBtWzhdICsgXG4gICAgICAgICAgICAgICAgICAgbVsyXSAqIG1bM10gKiBtWzddICtcbiAgICAgICAgICAgICAgICAgICBtWzFdICogbVs1XSAqIG1bNl0gLVxuICAgICAgICAgICAgICAgICAgIG1bMl0gKiBtWzRdICogbVs2XSAtXG4gICAgICAgICAgICAgICAgICAgbVswXSAqIG1bNV0gKiBtWzddIC1cbiAgICAgICAgICAgICAgICAgICBtWzhdICogbVszXSAqIG1bMl0gXG4gICAgICAgIGNvbnN0IGRzdCA9IG5ldyBGbG9hdDMyQXJyYXkoOSlcbiAgICAgICAgZHN0WzBdID0gKG1bNF0gKiBtWzhdIC0gbVs3XSAqIG1bNV0pIC8gZGV0XG4gICAgICAgIGRzdFsxXSA9IChtWzNdICogbVs4XSAtIG1bNl0gKiBtWzVdKSAvIGRldFxuICAgICAgICBkc3RbMl0gPSAobVszXSAqIG1bN10gLSBtWzZdICogbVs0XSkgLyBkZXRcbiAgICAgICAgZHN0WzNdID0gKG1bMV0gKiBtWzhdIC0gbVsyXSAqIG1bN10pIC8gZGV0XG4gICAgICAgIGRzdFs0XSA9IChtWzBdICogbVs4XSAtIG1bMl0gKiBtWzZdKSAvIGRldFxuICAgICAgICBkc3RbNV0gPSAobVswXSAqIG1bN10gLSBtWzFdICogbVs2XSkgLyBkZXRcbiAgICAgICAgZHN0WzZdID0gKG1bMV0gKiBtWzVdIC0gbVsyXSAqIG1bNF0pIC8gZGV0XG4gICAgICAgIGRzdFs3XSA9IChtWzBdICogbVs1XSAtIG1bMl0gKiBtWzNdKSAvIGRldFxuICAgICAgICBkc3RbOF0gPSAobVswXSAqIG1bNF0gLSBtWzFdICogbVs0XSkgLyBkZXRcbiAgICAgICAgXG4gICAgICB9LFxuICAgICAgdG9TdHJpbmcobSl7XG4gICAgICAgIHJldHVybiBtLnJlZHVjZSgoYWNjLGVsLGlkeCkgPT4gKGlkeCkgJSAzID09PSAwID8gYWNjICs9ICdcXG4nICsgZWwgOiBhY2MgKz0gJyAnICsgZWwgKVxuICAgICAgfSxcbiAgICAgIGRvdCh2MSx2Mil7XG4gICAgICAgIHJldHVybiB2MVswXSp2MlswXSArIHYxWzFdKnYyWzFdICsgdjFbMl0gKiB2MlsyXVxuICAgICAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBtMyIsImNvbnN0IE1hdFR5cGUgPSBGbG9hdDMyQXJyYXk7XG5jb25zdCB7bm9ybX0gPSByZXF1aXJlKCcuL3ZlY3RvcicpXG5jb25zdCBtNCA9IHtcbiAgbXVsdGlwbHk6IGZ1bmN0aW9uIChhLCBiLCBkc3QpIHtcbiAgICBkc3QgPSBkc3QgfHwgbmV3IE1hdFR5cGUoMTYpO1xuICAgIHZhciBhMDAgPSBhWzAgKiA0ICsgMF07XG4gICAgdmFyIGEwMSA9IGFbMCAqIDQgKyAxXTtcbiAgICB2YXIgYTAyID0gYVswICogNCArIDJdO1xuICAgIHZhciBhMDMgPSBhWzAgKiA0ICsgM107XG4gICAgdmFyIGExMCA9IGFbMSAqIDQgKyAwXTtcbiAgICB2YXIgYTExID0gYVsxICogNCArIDFdO1xuICAgIHZhciBhMTIgPSBhWzEgKiA0ICsgMl07XG4gICAgdmFyIGExMyA9IGFbMSAqIDQgKyAzXTtcbiAgICB2YXIgYTIwID0gYVsyICogNCArIDBdO1xuICAgIHZhciBhMjEgPSBhWzIgKiA0ICsgMV07XG4gICAgdmFyIGEyMiA9IGFbMiAqIDQgKyAyXTtcbiAgICB2YXIgYTIzID0gYVsyICogNCArIDNdO1xuICAgIHZhciBhMzAgPSBhWzMgKiA0ICsgMF07XG4gICAgdmFyIGEzMSA9IGFbMyAqIDQgKyAxXTtcbiAgICB2YXIgYTMyID0gYVszICogNCArIDJdO1xuICAgIHZhciBhMzMgPSBhWzMgKiA0ICsgM107XG4gICAgdmFyIGIwMCA9IGJbMCAqIDQgKyAwXTtcbiAgICB2YXIgYjAxID0gYlswICogNCArIDFdO1xuICAgIHZhciBiMDIgPSBiWzAgKiA0ICsgMl07XG4gICAgdmFyIGIwMyA9IGJbMCAqIDQgKyAzXTtcbiAgICB2YXIgYjEwID0gYlsxICogNCArIDBdO1xuICAgIHZhciBiMTEgPSBiWzEgKiA0ICsgMV07XG4gICAgdmFyIGIxMiA9IGJbMSAqIDQgKyAyXTtcbiAgICB2YXIgYjEzID0gYlsxICogNCArIDNdO1xuICAgIHZhciBiMjAgPSBiWzIgKiA0ICsgMF07XG4gICAgdmFyIGIyMSA9IGJbMiAqIDQgKyAxXTtcbiAgICB2YXIgYjIyID0gYlsyICogNCArIDJdO1xuICAgIHZhciBiMjMgPSBiWzIgKiA0ICsgM107XG4gICAgdmFyIGIzMCA9IGJbMyAqIDQgKyAwXTtcbiAgICB2YXIgYjMxID0gYlszICogNCArIDFdO1xuICAgIHZhciBiMzIgPSBiWzMgKiA0ICsgMl07XG4gICAgdmFyIGIzMyA9IGJbMyAqIDQgKyAzXTtcbiAgICBkc3RbMF0gPSBiMDAgKiBhMDAgKyBiMDEgKiBhMTAgKyBiMDIgKiBhMjAgKyBiMDMgKiBhMzA7XG4gICAgZHN0WzFdID0gYjAwICogYTAxICsgYjAxICogYTExICsgYjAyICogYTIxICsgYjAzICogYTMxO1xuICAgIGRzdFsyXSA9IGIwMCAqIGEwMiArIGIwMSAqIGExMiArIGIwMiAqIGEyMiArIGIwMyAqIGEzMjtcbiAgICBkc3RbM10gPSBiMDAgKiBhMDMgKyBiMDEgKiBhMTMgKyBiMDIgKiBhMjMgKyBiMDMgKiBhMzM7XG4gICAgZHN0WzRdID0gYjEwICogYTAwICsgYjExICogYTEwICsgYjEyICogYTIwICsgYjEzICogYTMwO1xuICAgIGRzdFs1XSA9IGIxMCAqIGEwMSArIGIxMSAqIGExMSArIGIxMiAqIGEyMSArIGIxMyAqIGEzMTtcbiAgICBkc3RbNl0gPSBiMTAgKiBhMDIgKyBiMTEgKiBhMTIgKyBiMTIgKiBhMjIgKyBiMTMgKiBhMzI7XG4gICAgZHN0WzddID0gYjEwICogYTAzICsgYjExICogYTEzICsgYjEyICogYTIzICsgYjEzICogYTMzO1xuICAgIGRzdFs4XSA9IGIyMCAqIGEwMCArIGIyMSAqIGExMCArIGIyMiAqIGEyMCArIGIyMyAqIGEzMDtcbiAgICBkc3RbOV0gPSBiMjAgKiBhMDEgKyBiMjEgKiBhMTEgKyBiMjIgKiBhMjEgKyBiMjMgKiBhMzE7XG4gICAgZHN0WzEwXSA9IGIyMCAqIGEwMiArIGIyMSAqIGExMiArIGIyMiAqIGEyMiArIGIyMyAqIGEzMjtcbiAgICBkc3RbMTFdID0gYjIwICogYTAzICsgYjIxICogYTEzICsgYjIyICogYTIzICsgYjIzICogYTMzO1xuICAgIGRzdFsxMl0gPSBiMzAgKiBhMDAgKyBiMzEgKiBhMTAgKyBiMzIgKiBhMjAgKyBiMzMgKiBhMzA7XG4gICAgZHN0WzEzXSA9IGIzMCAqIGEwMSArIGIzMSAqIGExMSArIGIzMiAqIGEyMSArIGIzMyAqIGEzMTtcbiAgICBkc3RbMTRdID0gYjMwICogYTAyICsgYjMxICogYTEyICsgYjMyICogYTIyICsgYjMzICogYTMyO1xuICAgIGRzdFsxNV0gPSBiMzAgKiBhMDMgKyBiMzEgKiBhMTMgKyBiMzIgKiBhMjMgKyBiMzMgKiBhMzM7XG4gICAgcmV0dXJuIGRzdDtcbiAgfSxcblxuICB0cmFuc2xhdGlvbjogZnVuY3Rpb24gKHR4LCB0eSwgdHopIHtcbiAgICByZXR1cm4gWzEsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIHR4LCB0eSwgdHosIDFdO1xuICB9LFxuXG4gIHhSb3RhdGlvbjogZnVuY3Rpb24gKGFuZ2xlSW5SYWRpYW5zKSB7XG4gICAgdmFyIGMgPSBNYXRoLmNvcyhhbmdsZUluUmFkaWFucyk7XG4gICAgdmFyIHMgPSBNYXRoLnNpbihhbmdsZUluUmFkaWFucyk7XG5cbiAgICByZXR1cm4gWzEsIDAsIDAsIDAsIDAsIGMsIHMsIDAsIDAsIC1zLCBjLCAwLCAwLCAwLCAwLCAxXTtcbiAgfSxcblxuICB5Um90YXRpb246IGZ1bmN0aW9uIChhbmdsZUluUmFkaWFucykge1xuICAgIHZhciBjID0gTWF0aC5jb3MoYW5nbGVJblJhZGlhbnMpO1xuICAgIHZhciBzID0gTWF0aC5zaW4oYW5nbGVJblJhZGlhbnMpO1xuXG4gICAgcmV0dXJuIFtjLCAwLCAtcywgMCwgMCwgMSwgMCwgMCwgcywgMCwgYywgMCwgMCwgMCwgMCwgMV07XG4gIH0sXG5cbiAgelJvdGF0aW9uOiBmdW5jdGlvbiAoYW5nbGVJblJhZGlhbnMpIHtcbiAgICB2YXIgYyA9IE1hdGguY29zKGFuZ2xlSW5SYWRpYW5zKTtcbiAgICB2YXIgcyA9IE1hdGguc2luKGFuZ2xlSW5SYWRpYW5zKTtcblxuICAgIHJldHVybiBbYywgcywgMCwgMCwgLXMsIGMsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDFdO1xuICB9LFxuXG4gIHNjYWxpbmc6IGZ1bmN0aW9uIChzeCwgc3ksIHN6KSB7XG4gICAgcmV0dXJuIFtzeCwgMCwgMCwgMCwgMCwgc3ksIDAsIDAsIDAsIDAsIHN6LCAwLCAwLCAwLCAwLCAxXTtcbiAgfSxcbiAgdHJhbnNsYXRlOiBmdW5jdGlvbiAobSwgdHgsIHR5LCB0eikge1xuICAgIHJldHVybiBtNC5tdWx0aXBseShtLCBtNC50cmFuc2xhdGlvbih0eCwgdHksIHR6KSk7XG4gIH0sXG5cbiAgeFJvdGF0ZTogZnVuY3Rpb24gKG0sIGFuZ2xlSW5SYWRpYW5zKSB7XG4gICAgcmV0dXJuIG00Lm11bHRpcGx5KG0sIG00LnhSb3RhdGlvbihhbmdsZUluUmFkaWFucykpO1xuICB9LFxuXG4gIHlSb3RhdGU6IGZ1bmN0aW9uIChtLCBhbmdsZUluUmFkaWFucykge1xuICAgIHJldHVybiBtNC5tdWx0aXBseShtLCBtNC55Um90YXRpb24oYW5nbGVJblJhZGlhbnMpKTtcbiAgfSxcblxuICB6Um90YXRlOiBmdW5jdGlvbiAobSwgYW5nbGVJblJhZGlhbnMpIHtcbiAgICByZXR1cm4gbTQubXVsdGlwbHkobSwgbTQuelJvdGF0aW9uKGFuZ2xlSW5SYWRpYW5zKSk7XG4gIH0sXG5cbiAgc2NhbGU6IGZ1bmN0aW9uIChtLCBzeCwgc3ksIHN6KSB7XG4gICAgcmV0dXJuIG00Lm11bHRpcGx5KG0sIG00LnNjYWxpbmcoc3gsIHN5LCBzeikpO1xuICB9LFxuICBtYWtlT3J0OiBmdW5jdGlvbiAodikge1xuICAgIGNvbnN0IG8gPSBbMCwgMCwgMF07XG4gICAgY29uc3Qgbm9ybSA9IE1hdGguc3FydCh2WzBdICogdlswXSArIHZbMV0gKiB2WzFdICsgdlsyXSAqIHZbMl0pO1xuICAgIG9bMF0gPSB2WzBdIC8gbm9ybTtcbiAgICBvWzFdID0gdlsxXSAvIG5vcm07XG4gICAgb1syXSA9IHZbMl0gLyBub3JtO1xuICAgIHJldHVybiBvO1xuICB9LFxuICBwcm9qZWN0aW9uOiBmdW5jdGlvbiAod2lkdGgsIGhlaWdodCwgZGVwdGgpIHtcbiAgICAvLyDQrdGC0LAg0LzQsNGC0YDQuNGG0LAg0L/QtdGA0LXQstC+0YDQsNGH0LjQstCw0LXRgiBZLCDRh9GC0L7QsdGLIDAg0LHRi9C7INC90LDQstC10YDRhdGDXG4gICAgcmV0dXJuIFtcbiAgICAgIDIgLyB3aWR0aCxcbiAgICAgIDAsXG4gICAgICAwLFxuICAgICAgMCxcbiAgICAgIDAsXG4gICAgICAtMiAvIGhlaWdodCxcbiAgICAgIDAsXG4gICAgICAwLFxuICAgICAgMCxcbiAgICAgIDAsXG4gICAgICAyIC8gZGVwdGgsXG4gICAgICAwLFxuICAgICAgLTEsXG4gICAgICAxLFxuICAgICAgMCxcbiAgICAgIDEsXG4gICAgXTtcbiAgfSxcbiAgcGVyc3BlY3RpdmU6IGZ1bmN0aW9uIChmaWVsZE9mVmlld0luUmFkaWFucywgYXNwZWN0LCBuZWFyLCBmYXIpIHtcbiAgICB2YXIgZiA9IE1hdGgudGFuKE1hdGguUEkgKiAwLjUgLSAwLjUgKiBmaWVsZE9mVmlld0luUmFkaWFucyk7XG4gICAgdmFyIHJhbmdlSW52ID0gMS4wIC8gKG5lYXIgLSBmYXIpO1xuXG4gICAgcmV0dXJuIFtcbiAgICAgIGYgLyBhc3BlY3QsXG4gICAgICAwLFxuICAgICAgMCxcbiAgICAgIDAsXG4gICAgICAwLFxuICAgICAgZixcbiAgICAgIDAsXG4gICAgICAwLFxuICAgICAgMCxcbiAgICAgIDAsXG4gICAgICAobmVhciArIGZhcikgKiByYW5nZUludixcbiAgICAgIC0xLFxuICAgICAgMCxcbiAgICAgIDAsXG4gICAgICBuZWFyICogZmFyICogcmFuZ2VJbnYgKiAyLFxuICAgICAgMCxcbiAgICBdO1xuICB9LFxuICBpbnZlcnNlOiBmdW5jdGlvbiAobSkge1xuICAgIHZhciBtMDAgPSBtWzAgKiA0ICsgMF07XG4gICAgdmFyIG0wMSA9IG1bMCAqIDQgKyAxXTtcbiAgICB2YXIgbTAyID0gbVswICogNCArIDJdO1xuICAgIHZhciBtMDMgPSBtWzAgKiA0ICsgM107XG4gICAgdmFyIG0xMCA9IG1bMSAqIDQgKyAwXTtcbiAgICB2YXIgbTExID0gbVsxICogNCArIDFdO1xuICAgIHZhciBtMTIgPSBtWzEgKiA0ICsgMl07XG4gICAgdmFyIG0xMyA9IG1bMSAqIDQgKyAzXTtcbiAgICB2YXIgbTIwID0gbVsyICogNCArIDBdO1xuICAgIHZhciBtMjEgPSBtWzIgKiA0ICsgMV07XG4gICAgdmFyIG0yMiA9IG1bMiAqIDQgKyAyXTtcbiAgICB2YXIgbTIzID0gbVsyICogNCArIDNdO1xuICAgIHZhciBtMzAgPSBtWzMgKiA0ICsgMF07XG4gICAgdmFyIG0zMSA9IG1bMyAqIDQgKyAxXTtcbiAgICB2YXIgbTMyID0gbVszICogNCArIDJdO1xuICAgIHZhciBtMzMgPSBtWzMgKiA0ICsgM107XG4gICAgdmFyIHRtcF8wID0gbTIyICogbTMzO1xuICAgIHZhciB0bXBfMSA9IG0zMiAqIG0yMztcbiAgICB2YXIgdG1wXzIgPSBtMTIgKiBtMzM7XG4gICAgdmFyIHRtcF8zID0gbTMyICogbTEzO1xuICAgIHZhciB0bXBfNCA9IG0xMiAqIG0yMztcbiAgICB2YXIgdG1wXzUgPSBtMjIgKiBtMTM7XG4gICAgdmFyIHRtcF82ID0gbTAyICogbTMzO1xuICAgIHZhciB0bXBfNyA9IG0zMiAqIG0wMztcbiAgICB2YXIgdG1wXzggPSBtMDIgKiBtMjM7XG4gICAgdmFyIHRtcF85ID0gbTIyICogbTAzO1xuICAgIHZhciB0bXBfMTAgPSBtMDIgKiBtMTM7XG4gICAgdmFyIHRtcF8xMSA9IG0xMiAqIG0wMztcbiAgICB2YXIgdG1wXzEyID0gbTIwICogbTMxO1xuICAgIHZhciB0bXBfMTMgPSBtMzAgKiBtMjE7XG4gICAgdmFyIHRtcF8xNCA9IG0xMCAqIG0zMTtcbiAgICB2YXIgdG1wXzE1ID0gbTMwICogbTExO1xuICAgIHZhciB0bXBfMTYgPSBtMTAgKiBtMjE7XG4gICAgdmFyIHRtcF8xNyA9IG0yMCAqIG0xMTtcbiAgICB2YXIgdG1wXzE4ID0gbTAwICogbTMxO1xuICAgIHZhciB0bXBfMTkgPSBtMzAgKiBtMDE7XG4gICAgdmFyIHRtcF8yMCA9IG0wMCAqIG0yMTtcbiAgICB2YXIgdG1wXzIxID0gbTIwICogbTAxO1xuICAgIHZhciB0bXBfMjIgPSBtMDAgKiBtMTE7XG4gICAgdmFyIHRtcF8yMyA9IG0xMCAqIG0wMTtcblxuICAgIHZhciB0MCA9XG4gICAgICB0bXBfMCAqIG0xMSArXG4gICAgICB0bXBfMyAqIG0yMSArXG4gICAgICB0bXBfNCAqIG0zMSAtXG4gICAgICAodG1wXzEgKiBtMTEgKyB0bXBfMiAqIG0yMSArIHRtcF81ICogbTMxKTtcbiAgICB2YXIgdDEgPVxuICAgICAgdG1wXzEgKiBtMDEgK1xuICAgICAgdG1wXzYgKiBtMjEgK1xuICAgICAgdG1wXzkgKiBtMzEgLVxuICAgICAgKHRtcF8wICogbTAxICsgdG1wXzcgKiBtMjEgKyB0bXBfOCAqIG0zMSk7XG4gICAgdmFyIHQyID1cbiAgICAgIHRtcF8yICogbTAxICtcbiAgICAgIHRtcF83ICogbTExICtcbiAgICAgIHRtcF8xMCAqIG0zMSAtXG4gICAgICAodG1wXzMgKiBtMDEgKyB0bXBfNiAqIG0xMSArIHRtcF8xMSAqIG0zMSk7XG4gICAgdmFyIHQzID1cbiAgICAgIHRtcF81ICogbTAxICtcbiAgICAgIHRtcF84ICogbTExICtcbiAgICAgIHRtcF8xMSAqIG0yMSAtXG4gICAgICAodG1wXzQgKiBtMDEgKyB0bXBfOSAqIG0xMSArIHRtcF8xMCAqIG0yMSk7XG5cbiAgICB2YXIgZCA9IDEuMCAvIChtMDAgKiB0MCArIG0xMCAqIHQxICsgbTIwICogdDIgKyBtMzAgKiB0Myk7XG5cbiAgICByZXR1cm4gW1xuICAgICAgZCAqIHQwLFxuICAgICAgZCAqIHQxLFxuICAgICAgZCAqIHQyLFxuICAgICAgZCAqIHQzLFxuICAgICAgZCAqXG4gICAgICAgICh0bXBfMSAqIG0xMCArXG4gICAgICAgICAgdG1wXzIgKiBtMjAgK1xuICAgICAgICAgIHRtcF81ICogbTMwIC1cbiAgICAgICAgICAodG1wXzAgKiBtMTAgKyB0bXBfMyAqIG0yMCArIHRtcF80ICogbTMwKSksXG4gICAgICBkICpcbiAgICAgICAgKHRtcF8wICogbTAwICtcbiAgICAgICAgICB0bXBfNyAqIG0yMCArXG4gICAgICAgICAgdG1wXzggKiBtMzAgLVxuICAgICAgICAgICh0bXBfMSAqIG0wMCArIHRtcF82ICogbTIwICsgdG1wXzkgKiBtMzApKSxcbiAgICAgIGQgKlxuICAgICAgICAodG1wXzMgKiBtMDAgK1xuICAgICAgICAgIHRtcF82ICogbTEwICtcbiAgICAgICAgICB0bXBfMTEgKiBtMzAgLVxuICAgICAgICAgICh0bXBfMiAqIG0wMCArIHRtcF83ICogbTEwICsgdG1wXzEwICogbTMwKSksXG4gICAgICBkICpcbiAgICAgICAgKHRtcF80ICogbTAwICtcbiAgICAgICAgICB0bXBfOSAqIG0xMCArXG4gICAgICAgICAgdG1wXzEwICogbTIwIC1cbiAgICAgICAgICAodG1wXzUgKiBtMDAgKyB0bXBfOCAqIG0xMCArIHRtcF8xMSAqIG0yMCkpLFxuICAgICAgZCAqXG4gICAgICAgICh0bXBfMTIgKiBtMTMgK1xuICAgICAgICAgIHRtcF8xNSAqIG0yMyArXG4gICAgICAgICAgdG1wXzE2ICogbTMzIC1cbiAgICAgICAgICAodG1wXzEzICogbTEzICsgdG1wXzE0ICogbTIzICsgdG1wXzE3ICogbTMzKSksXG4gICAgICBkICpcbiAgICAgICAgKHRtcF8xMyAqIG0wMyArXG4gICAgICAgICAgdG1wXzE4ICogbTIzICtcbiAgICAgICAgICB0bXBfMjEgKiBtMzMgLVxuICAgICAgICAgICh0bXBfMTIgKiBtMDMgKyB0bXBfMTkgKiBtMjMgKyB0bXBfMjAgKiBtMzMpKSxcbiAgICAgIGQgKlxuICAgICAgICAodG1wXzE0ICogbTAzICtcbiAgICAgICAgICB0bXBfMTkgKiBtMTMgK1xuICAgICAgICAgIHRtcF8yMiAqIG0zMyAtXG4gICAgICAgICAgKHRtcF8xNSAqIG0wMyArIHRtcF8xOCAqIG0xMyArIHRtcF8yMyAqIG0zMykpLFxuICAgICAgZCAqXG4gICAgICAgICh0bXBfMTcgKiBtMDMgK1xuICAgICAgICAgIHRtcF8yMCAqIG0xMyArXG4gICAgICAgICAgdG1wXzIzICogbTIzIC1cbiAgICAgICAgICAodG1wXzE2ICogbTAzICsgdG1wXzIxICogbTEzICsgdG1wXzIyICogbTIzKSksXG4gICAgICBkICpcbiAgICAgICAgKHRtcF8xNCAqIG0yMiArXG4gICAgICAgICAgdG1wXzE3ICogbTMyICtcbiAgICAgICAgICB0bXBfMTMgKiBtMTIgLVxuICAgICAgICAgICh0bXBfMTYgKiBtMzIgKyB0bXBfMTIgKiBtMTIgKyB0bXBfMTUgKiBtMjIpKSxcbiAgICAgIGQgKlxuICAgICAgICAodG1wXzIwICogbTMyICtcbiAgICAgICAgICB0bXBfMTIgKiBtMDIgK1xuICAgICAgICAgIHRtcF8xOSAqIG0yMiAtXG4gICAgICAgICAgKHRtcF8xOCAqIG0yMiArIHRtcF8yMSAqIG0zMiArIHRtcF8xMyAqIG0wMikpLFxuICAgICAgZCAqXG4gICAgICAgICh0bXBfMTggKiBtMTIgK1xuICAgICAgICAgIHRtcF8yMyAqIG0zMiArXG4gICAgICAgICAgdG1wXzE1ICogbTAyIC1cbiAgICAgICAgICAodG1wXzIyICogbTMyICsgdG1wXzE0ICogbTAyICsgdG1wXzE5ICogbTEyKSksXG4gICAgICBkICpcbiAgICAgICAgKHRtcF8yMiAqIG0yMiArXG4gICAgICAgICAgdG1wXzE2ICogbTAyICtcbiAgICAgICAgICB0bXBfMjEgKiBtMTIgLVxuICAgICAgICAgICh0bXBfMjAgKiBtMTIgKyB0bXBfMjMgKiBtMjIgKyB0bXBfMTcgKiBtMDIpKSxcbiAgICBdO1xuICB9LFxuICBsb29rQXQ6IGZ1bmN0aW9uIChjYW1lcmFQb3NpdGlvbiwgdGFyZ2V0LCB1cCkge1xuICAgIHZhciB6QXhpcyA9IG5vcm1hbGl6ZShzdWJ0cmFjdFZlY3RvcnMoY2FtZXJhUG9zaXRpb24sIHRhcmdldCkpO1xuICAgIHZhciB4QXhpcyA9IG5vcm1hbGl6ZShjcm9zcyh1cCwgekF4aXMpKTtcbiAgICB2YXIgeUF4aXMgPSBub3JtYWxpemUoY3Jvc3MoekF4aXMsIHhBeGlzKSk7XG5cbiAgICByZXR1cm4gW1xuICAgICAgeEF4aXNbMF0sXG4gICAgICB4QXhpc1sxXSxcbiAgICAgIHhBeGlzWzJdLFxuICAgICAgMCxcbiAgICAgIHlBeGlzWzBdLFxuICAgICAgeUF4aXNbMV0sXG4gICAgICB5QXhpc1syXSxcbiAgICAgIDAsXG4gICAgICB6QXhpc1swXSxcbiAgICAgIHpBeGlzWzFdLFxuICAgICAgekF4aXNbMl0sXG4gICAgICAwLFxuICAgICAgY2FtZXJhUG9zaXRpb25bMF0sXG4gICAgICBjYW1lcmFQb3NpdGlvblsxXSxcbiAgICAgIGNhbWVyYVBvc2l0aW9uWzJdLFxuICAgICAgMSxcbiAgICBdO1xuICB9LFxuICBjb3B5OiBmdW5jdGlvbiAoc3JjKSB7XG4gICAgY29uc3QgZHN0ID0gbmV3IE1hdFR5cGUoMTYpO1xuXG4gICAgZHN0WzBdID0gc3JjWzBdO1xuICAgIGRzdFsxXSA9IHNyY1sxXTtcbiAgICBkc3RbMl0gPSBzcmNbMl07XG4gICAgZHN0WzNdID0gc3JjWzNdO1xuICAgIGRzdFs0XSA9IHNyY1s0XTtcbiAgICBkc3RbNV0gPSBzcmNbNV07XG4gICAgZHN0WzZdID0gc3JjWzZdO1xuICAgIGRzdFs3XSA9IHNyY1s3XTtcbiAgICBkc3RbOF0gPSBzcmNbOF07XG4gICAgZHN0WzldID0gc3JjWzldO1xuICAgIGRzdFsxMF0gPSBzcmNbMTBdO1xuICAgIGRzdFsxMV0gPSBzcmNbMTFdO1xuICAgIGRzdFsxMl0gPSBzcmNbMTJdO1xuICAgIGRzdFsxM10gPSBzcmNbMTNdO1xuICAgIGRzdFsxNF0gPSBzcmNbMTRdO1xuICAgIGRzdFsxNV0gPSBzcmNbMTVdO1xuXG4gICAgcmV0dXJuIGRzdDtcbiAgfSxcbiAgdmVjdG9yU3VtOiBmdW5jdGlvbiAodjEsIHYyKSB7XG4gICAgY29uc3QgdmVjdG9yID0gWzAsIDAsIDBdO1xuICAgIHZlY3RvclswXSA9IHYxWzBdICsgdjJbMF07XG4gICAgdmVjdG9yWzFdID0gdjFbMV0gKyB2MlsxXTtcbiAgICB2ZWN0b3JbMl0gPSB2MVsyXSArIHYyWzJdO1xuICAgIHJldHVybiB2ZWN0b3I7XG4gIH0sXG4gIGNyb3NzOiBmdW5jdGlvbiAoYSwgYikge1xuICAgIHJldHVybiBbXG4gICAgICBhWzFdICogYlsyXSAtIGFbMl0gKiBiWzFdLFxuICAgICAgYVsyXSAqIGJbMF0gLSBhWzBdICogYlsyXSxcbiAgICAgIGFbMF0gKiBiWzFdIC0gYVsxXSAqIGJbMF0sXG4gICAgXTtcbiAgfSxcbiAgdmVjdG9yU2NhbGFyUHJvZHVjdChhLCBzKSB7XG4gICAgbGV0IHYgPSBbMCwgMCwgMF07XG5cbiAgICB2WzBdID0gYVswXSAqIHM7XG4gICAgdlsxXSA9IGFbMV0gKiBzO1xuICAgIHZbMl0gPSBhWzJdICogcztcbiAgICBpZiAoaXNOYU4odlswXSkgfHwgaXNOYU4odlsyXSkgfHwgaXNOYU4odlsyXSkpIHJldHVybiBbMCwgMCwgMF07XG4gICAgcmV0dXJuIHY7XG4gIH0sXG5cbiAgc2NhbGFyUHJvZHVjdDogZnVuY3Rpb24gKHYxLCB2Mikge1xuICAgIGxldCBhID0gdjFbMF0gKiB2MlswXSArIHYxWzFdICogdjJbMV0gKyB2MVsyXSAqIHYyWzJdO1xuXG4gICAgcmV0dXJuIGE7XG4gIH0sXG4gIGRvdCh2MSwgdjIpIHtcbiAgICByZXR1cm4gdjFbMF0gKiB2MlswXSArIHYxWzFdICogdjJbMV0gKyB2MVsyXSAqIHYyWzJdO1xuICB9LFxuICBpc051bGxWZWN0b3I6IGZ1bmN0aW9uICh2KSB7XG4gICAgcmV0dXJuICF2WzBdICYmICF2WzFdICYmICF2WzJdO1xuICB9LFxuICBnZXRWZWN0b3JMZW5ndGgodikge1xuICAgIHJldHVybiBNYXRoLnNxcnQodlswXSAqIHZbMF0gKyB2WzFdICogdlsxXSArIHZbMl0gKiB2WzJdKTtcbiAgfSxcbiAgdHJhbnNmb3JtUG9pbnQ6IGZ1bmN0aW9uIChtLCB2LCBkc3QpIHtcbiAgICBkc3QgPSBkc3QgfHwgbmV3IE1hdFR5cGUoMyk7XG4gICAgdmFyIHYwID0gdlswXTtcbiAgICB2YXIgdjEgPSB2WzFdO1xuICAgIHZhciB2MiA9IHZbMl07XG4gICAgdmFyIGQgPVxuICAgICAgdjAgKiBtWzAgKiA0ICsgM10gKyB2MSAqIG1bMSAqIDQgKyAzXSArIHYyICogbVsyICogNCArIDNdICsgbVszICogNCArIDNdO1xuXG4gICAgZHN0WzBdID1cbiAgICAgICh2MCAqIG1bMCAqIDQgKyAwXSArXG4gICAgICAgIHYxICogbVsxICogNCArIDBdICtcbiAgICAgICAgdjIgKiBtWzIgKiA0ICsgMF0gK1xuICAgICAgICBtWzMgKiA0ICsgMF0pIC9cbiAgICAgIGQ7XG4gICAgZHN0WzFdID1cbiAgICAgICh2MCAqIG1bMCAqIDQgKyAxXSArXG4gICAgICAgIHYxICogbVsxICogNCArIDFdICtcbiAgICAgICAgdjIgKiBtWzIgKiA0ICsgMV0gK1xuICAgICAgICBtWzMgKiA0ICsgMV0pIC9cbiAgICAgIGQ7XG4gICAgZHN0WzJdID1cbiAgICAgICh2MCAqIG1bMCAqIDQgKyAyXSArXG4gICAgICAgIHYxICogbVsxICogNCArIDJdICtcbiAgICAgICAgdjIgKiBtWzIgKiA0ICsgMl0gK1xuICAgICAgICBtWzMgKiA0ICsgMl0pIC9cbiAgICAgIGQ7XG5cbiAgICByZXR1cm4gZHN0O1xuICB9LFxuICBub3JtYWxpemU6IGZ1bmN0aW9uICh2LCBkc3QpIHtcbiAgICBkc3QgPSBkc3QgfHwgbmV3IE1hdFR5cGUoMyk7XG4gICAgdmFyIGxlbmd0aCA9IE1hdGguc3FydCh2WzBdICogdlswXSArIHZbMV0gKiB2WzFdICsgdlsyXSAqIHZbMl0pO1xuICAgIC8vIG1ha2Ugc3VyZSB3ZSBkb24ndCBkaXZpZGUgYnkgMC5cbiAgICBpZiAobGVuZ3RoID4gMC4wMDAwMSkge1xuICAgICAgZHN0WzBdID0gdlswXSAvIGxlbmd0aDtcbiAgICAgIGRzdFsxXSA9IHZbMV0gLyBsZW5ndGg7XG4gICAgICBkc3RbMl0gPSB2WzJdIC8gbGVuZ3RoO1xuICAgIH1cbiAgICByZXR1cm4gZHN0O1xuICB9LFxuICBpZGVudGl0eTogZnVuY3Rpb24gKCkge1xuICAgIGRzdCA9IG5ldyBNYXRUeXBlKDE2KTtcbiAgICBkc3RbMF0gPSAxO1xuICAgIGRzdFsxXSA9IDA7XG4gICAgZHN0WzJdID0gMDtcbiAgICBkc3RbM10gPSAwO1xuICAgIGRzdFs0XSA9IDA7XG4gICAgZHN0WzVdID0gMTtcbiAgICBkc3RbNl0gPSAwO1xuICAgIGRzdFs3XSA9IDA7XG4gICAgZHN0WzhdID0gMDtcbiAgICBkc3RbOV0gPSAwO1xuICAgIGRzdFsxMF0gPSAxO1xuICAgIGRzdFsxMV0gPSAwO1xuICAgIGRzdFsxMl0gPSAwO1xuICAgIGRzdFsxM10gPSAwO1xuICAgIGRzdFsxNF0gPSAwO1xuICAgIGRzdFsxNV0gPSAxO1xuXG4gICAgcmV0dXJuIGRzdDtcbiAgfSxcbiAgbTNUb200OiBmdW5jdGlvbiAobSkge1xuICAgIGNvbnN0IGRzdCA9IG5ldyBNYXRUeXBlKDE2KTtcbiAgICBkc3RbMF0gPSBtWzBdO1xuICAgIGRzdFsxXSA9IG1bMV07XG4gICAgZHN0WzJdID0gbVsyXTtcbiAgICBkc3RbM10gPSAwO1xuICAgIGRzdFs0XSA9IG1bM107XG4gICAgZHN0WzVdID0gbVs0XTtcbiAgICBkc3RbNl0gPSBtWzVdO1xuICAgIGRzdFs3XSA9IDA7XG4gICAgZHN0WzhdID0gbVs2XTtcbiAgICBkc3RbOV0gPSBtWzddO1xuICAgIGRzdFsxMF0gPSBtWzhdO1xuICAgIGRzdFsxMV0gPSAwO1xuICAgIGRzdFsxMl0gPSAwO1xuICAgIGRzdFsxM10gPSAwO1xuICAgIGRzdFsxNF0gPSAwO1xuICAgIGRzdFsxNV0gPSAxO1xuICAgIHJldHVybiBkc3Q7XG4gIH0sXG4gIG00VG9tMzogZnVuY3Rpb24gKG0pIHtcbiAgICBjb25zdCBkc3QgPSBuZXcgTWF0VHlwZSg5KTtcbiAgICBkc3RbMF0gPSBtWzBdO1xuICAgIGRzdFsxXSA9IG1bMV07XG4gICAgZHN0WzJdID0gbVsyXTtcbiAgICBkc3RbM10gPSBtWzRdO1xuICAgIGRzdFs0XSA9IG1bNV07XG4gICAgZHN0WzVdID0gbVs2XTtcbiAgICBkc3RbNl0gPSBtWzhdO1xuICAgIGRzdFs3XSA9IG1bOV07XG4gICAgZHN0WzhdID0gbVsxMF07XG4gICAgcmV0dXJuIGRzdDtcbiAgfSxcbiAgdG9TdHJpbmcobSkge1xuICAgIHJldHVybiBtLnJlZHVjZSgoYWNjLCBlbCwgaWR4KSA9PlxuICAgICAgaWR4ICUgNCA9PT0gMCA/IChhY2MgKz0gXCJcXG5cIiArIGVsKSA6IChhY2MgKz0gXCIgXCIgKyBlbClcbiAgICApO1xuICB9LFxuICB0cmFuc3Bvc2U6IGZ1bmN0aW9uIChtKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIG1bMF0sXG4gICAgICBtWzRdLFxuICAgICAgbVs4XSxcbiAgICAgIG1bMTJdLFxuICAgICAgbVsxXSxcbiAgICAgIG1bNV0sXG4gICAgICBtWzldLFxuICAgICAgbVsxM10sXG4gICAgICBtWzJdLFxuICAgICAgbVs2XSxcbiAgICAgIG1bMTBdLFxuICAgICAgbVsxNF0sXG4gICAgICBtWzNdLFxuICAgICAgbVs3XSxcbiAgICAgIG1bMTFdLFxuICAgICAgbVsxNV0sXG4gICAgXTtcbiAgfSxcbiAgZnJvbVF1YXRlcm5pb246IChxKSA9PiB7XG4gICAgY29uc3QgYTExID0gMSAtIDIgKiAocVsxXSAqIHFbMV0gKyBxWzJdICogcVsyXSk7XG4gICAgY29uc3QgYTEyID0gMiAqIChxWzBdICogcVsxXSAtIHFbMl0gKiBxWzNdKTtcbiAgICBjb25zdCBhMTMgPSAyICogKHFbMF0gKiBxWzJdICsgcVsxXSAqIHFbM10pO1xuICAgIGNvbnN0IGEyMSA9IDIgKiAocVswXSAqIHFbMV0gKyBxWzJdICogcVszXSk7XG4gICAgY29uc3QgYTIyID0gMSAtIDIgKiAocVswXSAqIHFbMF0gKyBxWzJdICogcVsyXSk7XG4gICAgY29uc3QgYTIzID0gMiAqIChxWzFdICogcVsyXSAtIHFbMF0gKiBxWzNdKTtcbiAgICBjb25zdCBhMzEgPSAyICogKHFbMF0gKiBxWzJdIC0gcVsxXSAqIHFbM10pO1xuICAgIGNvbnN0IGEzMiA9IDIgKiAocVsxXSAqIHFbMl0gKyBxWzBdICogcVszXSk7XG4gICAgY29uc3QgYTMzID0gMSAtIDIgKiAocVswXSAqIHFbMF0gKyBxWzFdICogcVsxXSk7XG4gICAgcmV0dXJuIFthMTEsIGExMiwgYTEzLCAwLCBhMjEsIGEyMiwgYTIzLCAwLCBhMzEsIGEzMiwgYTMzLCAwLCAwLCAwLCAwLCAxXTtcbiAgfSxcbiAgcm90YXRpb24oeCwgeSwgeikge1xuICAgIHJldHVybiB0aGlzLnhSb3RhdGUodGhpcy55Um90YXRlKHRoaXMuelJvdGF0aW9uKHopLCB5KSwgeCk7XG4gIH0sXG4gIHJvdGF0aW9uRnJvbU5vcm1hbChuKSB7XG4gICAgcmV0dXJuIHRoaXMucm90YXRpb24oTWF0aC5hY29zKG5bMV0pLCBNYXRoLmFjb3MoblsyXSksIE1hdGguYWNvcyhuWzBdKSk7XG4gIH0sXG4gIGRldGVybWluYXRlKG0pIHtcbiAgICB2YXIgbTAwID0gbVswICogNCArIDBdO1xuICAgIHZhciBtMDEgPSBtWzAgKiA0ICsgMV07XG4gICAgdmFyIG0wMiA9IG1bMCAqIDQgKyAyXTtcbiAgICB2YXIgbTAzID0gbVswICogNCArIDNdO1xuICAgIHZhciBtMTAgPSBtWzEgKiA0ICsgMF07XG4gICAgdmFyIG0xMSA9IG1bMSAqIDQgKyAxXTtcbiAgICB2YXIgbTEyID0gbVsxICogNCArIDJdO1xuICAgIHZhciBtMTMgPSBtWzEgKiA0ICsgM107XG4gICAgdmFyIG0yMCA9IG1bMiAqIDQgKyAwXTtcbiAgICB2YXIgbTIxID0gbVsyICogNCArIDFdO1xuICAgIHZhciBtMjIgPSBtWzIgKiA0ICsgMl07XG4gICAgdmFyIG0yMyA9IG1bMiAqIDQgKyAzXTtcbiAgICB2YXIgbTMwID0gbVszICogNCArIDBdO1xuICAgIHZhciBtMzEgPSBtWzMgKiA0ICsgMV07XG4gICAgdmFyIG0zMiA9IG1bMyAqIDQgKyAyXTtcbiAgICB2YXIgbTMzID0gbVszICogNCArIDNdO1xuICAgIHZhciB0bXBfMCAgPSBtMjIgKiBtMzM7XG4gICAgdmFyIHRtcF8xICA9IG0zMiAqIG0yMztcbiAgICB2YXIgdG1wXzIgID0gbTEyICogbTMzO1xuICAgIHZhciB0bXBfMyAgPSBtMzIgKiBtMTM7XG4gICAgdmFyIHRtcF80ICA9IG0xMiAqIG0yMztcbiAgICB2YXIgdG1wXzUgID0gbTIyICogbTEzO1xuICAgIHZhciB0bXBfNiAgPSBtMDIgKiBtMzM7XG4gICAgdmFyIHRtcF83ICA9IG0zMiAqIG0wMztcbiAgICB2YXIgdG1wXzggID0gbTAyICogbTIzO1xuICAgIHZhciB0bXBfOSAgPSBtMjIgKiBtMDM7XG4gICAgdmFyIHRtcF8xMCA9IG0wMiAqIG0xMztcbiAgICB2YXIgdG1wXzExID0gbTEyICogbTAzO1xuXG4gICAgdmFyIHQwID0gKHRtcF8wICogbTExICsgdG1wXzMgKiBtMjEgKyB0bXBfNCAqIG0zMSkgLVxuICAgICAgICAodG1wXzEgKiBtMTEgKyB0bXBfMiAqIG0yMSArIHRtcF81ICogbTMxKTtcbiAgICB2YXIgdDEgPSAodG1wXzEgKiBtMDEgKyB0bXBfNiAqIG0yMSArIHRtcF85ICogbTMxKSAtXG4gICAgICAgICh0bXBfMCAqIG0wMSArIHRtcF83ICogbTIxICsgdG1wXzggKiBtMzEpO1xuICAgIHZhciB0MiA9ICh0bXBfMiAqIG0wMSArIHRtcF83ICogbTExICsgdG1wXzEwICogbTMxKSAtXG4gICAgICAgICh0bXBfMyAqIG0wMSArIHRtcF82ICogbTExICsgdG1wXzExICogbTMxKTtcbiAgICB2YXIgdDMgPSAodG1wXzUgKiBtMDEgKyB0bXBfOCAqIG0xMSArIHRtcF8xMSAqIG0yMSkgLVxuICAgICAgICAodG1wXzQgKiBtMDEgKyB0bXBfOSAqIG0xMSArIHRtcF8xMCAqIG0yMSk7XG5cbiAgICByZXR1cm4gMS4wIC8gKG0wMCAqIHQwICsgbTEwICogdDEgKyBtMjAgKiB0MiArIG0zMCAqIHQzKTtcbiAgfSxcbiAgXG4gIGRlY29tcG9zZShtYXQpIHtcbiAgICBsZXQgc3ggPSBub3JtKG1hdC5zbGljZSgwLCAzKSk7XG4gICAgY29uc3Qgc3kgPSBub3JtKG1hdC5zbGljZSg0LCA3KSk7XG4gICAgY29uc3Qgc3ogPSBub3JtKG1hdC5zbGljZSg4LCAxMSkpO1xuXG4gICAgXG4gICAgY29uc3QgZGV0ID0gdGhpcy5kZXRlcm1pbmF0ZShtYXQpO1xuICAgIGlmIChkZXQgPCAwKSB7XG4gICAgICBzeCA9IC1zeDtcbiAgICB9XG4gICAgY29uc3QgdHJhbnNsYXRpb24gPSBbXVxuICAgIGNvbnN0IHNjYWxlID0gW11cbiAgICBjb25zdCBSbWF0cml4ID0gWy4uLm1hdF1cbiAgICB0cmFuc2xhdGlvblswXSA9IG1hdFsxMl07XG4gICAgdHJhbnNsYXRpb25bMV0gPSBtYXRbMTNdO1xuICAgIHRyYW5zbGF0aW9uWzJdID0gbWF0WzE0XTtcblxuXG4gICAgXG5cbiAgICBjb25zdCBpbnZTWCA9IDEgLyBzeDtcbiAgICBjb25zdCBpbnZTWSA9IDEgLyBzeTtcbiAgICBjb25zdCBpbnZTWiA9IDEgLyBzejtcblxuICAgIFJtYXRyaXhbMF0gKj0gaW52U1g7XG4gICAgUm1hdHJpeFsxXSAqPSBpbnZTWDtcbiAgICBSbWF0cml4WzJdICo9IGludlNYO1xuXG4gICAgUm1hdHJpeFs0XSAqPSBpbnZTWTtcbiAgICBSbWF0cml4WzVdICo9IGludlNZO1xuICAgIFJtYXRyaXhbNl0gKj0gaW52U1k7XG5cbiAgICBSbWF0cml4WzhdICo9IGludlNaO1xuICAgIFJtYXRyaXhbOV0gKj0gaW52U1o7XG4gICAgUm1hdHJpeFsxMF0gKj0gaW52U1o7XG5cblxuXG4gICAgc2NhbGVbMF0gPSBzeDtcbiAgICBzY2FsZVsxXSA9IHN5O1xuICAgIHNjYWxlWzJdID0gc3o7XG4gICAgcmV0dXJuIHt0cmFuc2xhdGlvbiwgUm1hdHJpeCwgc2NhbGUgfVxuICB9XG59O1xuXG5cbm1vZHVsZS5leHBvcnRzID0gbTQ7XG4iLCJjb25zdCBtNCA9IHJlcXVpcmUoXCIuL200XCIpO1xuY2xhc3MgVFJTIHtcbiAgY29uc3RydWN0b3IodHJhbnNsYXRpb24sIHJvdGF0aW9uLCBzY2FsZSkge1xuICAgIHRoaXMudHJhbnNsYXRpb24gPSB0cmFuc2xhdGlvbjtcbiAgICB0aGlzLnJvdGF0aW9uID0gcm90YXRpb247XG4gICAgdGhpcy5zY2FsZSA9IHNjYWxlO1xuICB9XG4gIGdldE1hdHJpeChtKSB7XG4gICAgbGV0IGRzdCA9IG0gfHwgbTQuaWRlbnRpdHkoKTtcbiAgICB2YXIgdCA9IHRoaXMudHJhbnNsYXRpb247XG4gICAgdmFyIHIgPSB0aGlzLnJvdGF0aW9uO1xuICAgIHZhciBzID0gdGhpcy5zY2FsZTtcbiAgICBjb25zdCBzaW4gPSBNYXRoLnNpbihyWzNdIC8gMik7XG4gICAgY29uc3QgY29zID0gTWF0aC5jb3MoclszXSAvIDIpO1xuICAgIGRzdCA9IG00LnRyYW5zbGF0ZShkc3QsIHRbMF0sIHRbMV0sIHRbMl0pO1xuXG4gICAgZHN0ID0gbTQubXVsdGlwbHkoZHN0LCBtNC5mcm9tUXVhdGVybmlvbihyKSk7XG5cbiAgICBkc3QgPSBtNC5zY2FsZShkc3QsIHNbMF0sIHNbMV0sIHNbMl0pO1xuICAgIHJldHVybiBkc3Q7XG4gIH1cbiAgZ2V0Uk1hdHJpeCgpIHtcbiAgICBsZXQgZHN0ID0gbTQuaWRlbnRpdHkoKTtcbiAgICB2YXIgciA9IHRoaXMucm90YXRpb247XG4gICAgZHN0ID0gbTQueFJvdGF0ZShkc3QsIHJbMF0pO1xuICAgIGRzdCA9IG00LnlSb3RhdGUoZHN0LCByWzFdKTtcbiAgICBkc3QgPSBtNC56Um90YXRlKGRzdCwgclsyXSk7XG4gICAgcmV0dXJuIGRzdDtcbiAgfVxuICBnZXRUUm1hdHJpeCgpIHtcbiAgICBjb25zdCB0ID0gdGhpcy50cmFuc2xhdGlvbjtcbiAgICBjb25zdCByID0gdGhpcy5yb3RhdGlvbjtcblxuICAgIGxldCBtID0gbTQudHJhbnNsYXRpb24oIHRbMF0sIHRbMV0sIHRbMl0pO1xuXG4gICAgbSA9IG00LnhSb3RhdGUobSwgclswXSk7XG4gICAgbSA9IG00LnlSb3RhdGUobSwgclsxXSk7XG4gICAgbSA9IG00LnpSb3RhdGUobSwgclsyXSk7XG4gICAgcmV0dXJuIG1cbiAgfVxufVxuY2xhc3MgTm9kZSB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIHRycyA9IG5ldyBUUlMoKSkge1xuICAgIHRoaXMud29ybGRNYXRyaXggPSBtNC5pZGVudGl0eSgpO1xuICAgIHRoaXMucGFyZW50ID0gbnVsbDtcbiAgICB0aGlzLmNoaWxkcmVuID0gW107XG4gICAgdGhpcy50cnMgPSB0cnM7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnBhcnRzID0gW107XG4gIH1cbiAgc2V0UGFyZW50KHBhcmVudCkge1xuICAgIGlmICh0aGlzLnBhcmVudCkge1xuICAgICAgY29uc3QgbmR4ID0gdGhpcy5wYXJlbnQuY2hpbGRyZW4uaW5kZXhPZih0aGlzKTtcbiAgICAgIGlmIChuZHggPj0gMCkge1xuICAgICAgICB0aGlzLnBhcmVudC5jaGlsZHJlbi5zcGxpY2UobmR4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHBhcmVudCkge1xuICAgICAgcGFyZW50LmNoaWxkcmVuLnB1c2godGhpcyk7XG4gICAgfVxuICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICB9XG4gIHVwZGF0ZVdvcmxkTWF0cml4KHBhcmVudFdvcmxkTWF0cml4KSB7XG4gICAgbGV0IG1hdHJpeCA9IHRoaXMudHJzLmdldE1hdHJpeCgpO1xuICAgIGlmIChwYXJlbnRXb3JsZE1hdHJpeCkge1xuICAgICAgbWF0cml4ID0gbTQubXVsdGlwbHkocGFyZW50V29ybGRNYXRyaXgsIG1hdHJpeCk7XG4gICAgfVxuICAgIHRoaXMud29ybGRNYXRyaXggPSBtYXRyaXg7XG4gICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgY2hpbGQudXBkYXRlV29ybGRNYXRyaXgobWF0cml4KTtcbiAgICB9KTtcbiAgfVxuICB1cGRhdGVQYXJ0c0xpc3QoKSB7XG4gICAgY29uc3QgaXRlciA9IChub2RlLCBhcnIpID0+IHtcbiAgICAgIGFyci5wdXNoKG5vZGUpO1xuICAgICAgbm9kZS5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4gaXRlcihjaGlsZCwgYXJyKSk7XG4gICAgfTtcbiAgICBpdGVyKHRoaXMsIHRoaXMucGFydHMpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0geyBOb2RlLCBUUlMgfTtcbiIsImNvbnN0IGRvdCA9IChhLCBiKSA9PiBhWzBdICogYlswXSArIGFbMV0gKiBiWzFdICsgYVsyXSAqIGJbMl1cbmNvbnN0IGNyb3NzID0gKGEsIGIpID0+IHtcbiAgICBjb25zdCByZXMgPSBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYVsxXSAqIGJbMl0gLSBiWzFdICogYVsyXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhWzJdICogYlswXSAtIGJbMl0gKiBhWzBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFbMF0gKiBiWzFdIC0gYlswXSAqIGFbMV0gICAgXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICBpZihpc05hTnZlYyhhKSB8fCBpc05hTnZlYyhiKSl7XG4gICAgICAgIGNvbnNvbGUubG9nKGEsIGIpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignYXJncyBpcyBOYU4gOiAsJylcbiAgICB9XG4gICAgcmV0dXJuIHJlc1xufSAgICAgICAgICBcbmNvbnN0IHNjYWxlID0gKGEsIHNjYWxhcikgPT4gW2FbMF0gKiBzY2FsYXIsIGFbMV0gKiBzY2FsYXIsIGFbMl0gKiBzY2FsYXJdXG5jb25zdCBzdW0gPSAoYSwgYikgPT4gW2FbMF0gKyBiWzBdLCBhWzFdICsgYlsxXSwgYVsyXSArIGJbMl1dXG5jb25zdCBkaWZmID0gKGEsIGIpID0+IFthWzBdIC0gYlswXSwgYVsxXSAtIGJbMV0sIGFbMl0gLSBiWzJdXVxuY29uc3Qgbm9ybSA9IGEgPT4gTWF0aC5zcXJ0KGFbMF0gKiBhWzBdICsgYVsxXSAqIGFbMV0gKyBhWzJdICogYVsyXSlcbmNvbnN0IG5vcm1TcSA9IGEgPT4gYVswXSAqIGFbMF0gKyBhWzFdICogYVsxXSArIGFbMl0gKiBhWzJdXG5jb25zdCBub3JtYWxpemUgPSBhID0+IHtcbiAgICBjb25zdCBsZW5ndGggPSBub3JtKGEpXG4gICAgaWYobGVuZ3RoID09PSAwKSByZXR1cm4gYVxuICAgIHJldHVybiBbYVswXSAvIGxlbmd0aCwgYVsxXSAvIGxlbmd0aCwgYVsyXSAvIGxlbmd0aF1cbn1cbmNvbnN0IGlzTnVsbCA9IGEgPT4gYVswXSphWzBdICsgYVsxXSAqIGFbMV0gKyBhWzJdICogYVsyXSA9PT0gMFxuXG5jb25zdCBpc0VxdWFsID0gKGEsIGIpID0+IGFbMF0gPT0gYlswXSAmJiBhWzFdID09IGJbMV0gJiYgYVsyXSA9PSBiWzJdXG5jb25zdCBjaGtWID0gKHYpID0+e1xuICAgIGlmKGlzTmFOdmVjKHYpKXtcbiAgICAgICAgY29uc29sZS5sb2codilcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOYU4gVmVjJylcbiAgICB9XG59XG5cbmNvbnN0IGZpbmRGdXJ0aGVzdFBvaW50ID0gKGEsYixjKSA9PiB7XG4gICAgY29uc3QgQUIgPSBub3JtU3EoZGlmZihhLCBiKSlcbiAgICBjb25zdCBBQyA9IG5vcm1TcShkaWZmKGEsIGMpKVxuICAgIGNvbnN0IEJDID0gbm9ybVNxKGRpZmYoYywgYikpXG4gICAgaWYoQUIgPCBBQyl7XG4gICAgICAgIGlmKEFCIDwgQkMpIHJldHVybiBjXG4gICAgICAgIHJldHVybiBiXG4gICAgfVxuICAgIGVsc2V7XG4gICAgICAgIGlmKEFDIDwgQkMpIHJldHVybiBiXG4gICAgICAgIGVsc2UgcmV0dXJuIGFcbiAgICB9XG59XG5jb25zdCBkaXN0YW5jZUZyb21MaW5lID0gKGEsYixjKSA9PntcbiAgICBjb25zdCBhYyA9IGRpZmYoYywgYSlcbiAgICBjb25zdCBhYiA9IGRpZmYoYiwgYSlcbiAgICBjb25zdCBrID0gZG90KGFiLGFjKSAvIG5vcm1TcShhYilcbiAgICBjb25zdCBoID0gc3VtKGEsIHNjYWxlKGFiLCBrKSlcbiAgICByZXR1cm4gbm9ybVNxKGRpZmYoYywgaCkpXG59XG5cblxuY29uc3QgaXNOYU52ZWMgPSB2ID0+IGlzTmFOKHZbMF0gKyB2WzFdICsgdlsyXSkgfHwgKHZbMF0gKyB2WzFdICsgdlsyXSA9PT0gSW5maW5pdHkpIHx8ICh2WzBdICsgdlsxXSArIHZbMl0gPT09IC1JbmZpbml0eSlcbmNvbnN0IF9kb3QgPSAoYSwgYikgPT57XG4gICAgaWYoaXNOYU52ZWMoYSkgfHwgaXNOYU52ZWMoYikpe1xuICAgICAgICBjb25zb2xlLmxvZyhhLCBiKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2FyZ3MgaXMgTmFOIDogLCcpXG4gICAgfVxuICAgIHJldHVybiBkb3QoYSwgYilcbn1cbmNvbnN0IF9jcm9zcyA9IChhLCBiKSA9PntcbiAgICBpZihpc05hTnZlYyhhKSB8fCBpc05hTnZlYyhiKSl7XG4gICAgICAgIGNvbnNvbGUubG9nKGEsIGIpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignYXJncyBpcyBOYU4gOiAsJylcbiAgICB9XG4gICAgY29uc3QgcmVzID0gY3Jvc3MoYSwgYikgIFxuICAgIGlmKGlzTmFOdmVjKHJlcykpe1xuICAgICAgICBjb25zb2xlLmxvZyhhLCBiKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2dldCBOYU4gOiAsJylcbiAgICB9XG4gICAgcmV0dXJuIHJlcyBcbn1cbmNvbnN0IF9zdW0gPSAoYSwgYikgPT57XG4gICAgaWYoaXNOYU52ZWMoYSkgfHwgaXNOYU52ZWMoYikpe1xuICAgICAgICBjb25zb2xlLmxvZyhhLCBiKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2FyZ3MgaXMgTmFOIDogLCcpXG4gICAgfVxuICAgIGNvbnN0IHJlcyA9IHN1bShhLCBiKSAgXG4gICAgaWYoaXNOYU52ZWMocmVzKSl7XG4gICAgICAgIGNvbnNvbGUubG9nKGEsIGIpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignZ2V0IE5hTiA6ICwnKVxuICAgIH1cbiAgICByZXR1cm4gcmVzIFxufVxuY29uc3QgX2RpZmYgPSAoYSwgYikgPT57XG4gICAgaWYoaXNOYU52ZWMoYSkgfHwgaXNOYU52ZWMoYikpe1xuICAgICAgICBjb25zb2xlLmxvZyhhLCBiKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2FyZ3MgaXMgTmFOIDogLCcpXG4gICAgfVxuICAgIGNvbnN0IHJlcyA9IGRpZmYoYSwgYikgIFxuICAgIGlmKGlzTmFOdmVjKHJlcykpe1xuICAgICAgICBjb25zb2xlLmxvZyhhLCBiKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2dldCBOYU4gOiAsJylcbiAgICB9XG4gICAgcmV0dXJuIHJlcyAgICBcbn1cbmNvbnN0IF9zY2FsZSA9IChhLCBzY2FsYXIpID0+e1xuICAgIGlmKGlzTmFOdmVjKGEpIHx8IGlzTmFOKHNjYWxhcikpe1xuICAgICAgICBjb25zb2xlLmxvZyhhLCBzY2FsYXIpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignYXJncyBpcyBOYU4gOiAsJylcbiAgICB9XG4gICAgY29uc3QgcmVzID0gc2NhbGUoYSwgc2NhbGFyKSAgXG4gICAgaWYoaXNOYU52ZWMocmVzKSl7XG4gICAgICAgIGNvbnNvbGUubG9nKGEsIHNjYWxhcilcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdnZXQgTmFOIDogLCcpXG4gICAgfVxuICAgIHJldHVybiByZXMgXG59XG5jb25zdCBfbm9ybWFsaXplID0gYSA9PntcbiAgICBpZihpc05hTnZlYyhhKSl7XG4gICAgICAgIGNvbnNvbGUubG9nKGEpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignYXJncyBpcyBOYU4gOiAsJylcbiAgICB9XG4gICAgY29uc3QgcmVzID0gbm9ybWFsaXplKGEpICBcbiAgICBpZihpc05hTnZlYyhyZXMpKXtcbiAgICAgICAgY29uc29sZS5sb2coYSlcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdnZXQgTmFOIDogLCcpXG4gICAgfVxuICAgIHJldHVybiByZXMgXG59XG5tb2R1bGUuZXhwb3J0cyA9IHtjaGtWLCBkb3QgOiBfZG90LCBjcm9zcyA6IF9jcm9zcywgc2NhbGUgOiBfc2NhbGUsIHN1bSA6IF9zdW0sIGRpZmYgOiBfZGlmZiwgbm9ybWFsaXplIDogX25vcm1hbGl6ZSwgbm9ybSwgbm9ybVNxLCBpc051bGwsIGZpbmRGdXJ0aGVzdFBvaW50LCBkaXN0YW5jZUZyb21MaW5lLCBpc0VxdWFsfSIsImltcG9ydCB7bTMsIHZlY3RvciwgbTR9IGZyb20gJ21hdGgnXHJcbmNvbnN0IEtFWVMgPSB7XHJcbiAgICAndycgOiAnbW92ZUZvcndhcmQnLFxyXG4gICAgJ3MnIDogJ21vdmVCYWNrd2FyZCcsXHJcbiAgICAnYScgOiAnbW92ZUxlZnQnLFxyXG4gICAgJ2QnIDogJ21vdmVSaWdodCdcclxufVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250cm9sbGFibGV7XHJcbiAgICBjb25zdHJ1Y3RvcihyaWdpZEJvZHkpe1xyXG5cclxuICAgICAgICB0aGlzLnJpZ2lkQm9keSA9IHJpZ2lkQm9keVxyXG4gICAgICAgIHRoaXMua2V5SW5wdXQgPSBudWxsXHJcbiAgICAgICAgdGhpcy5tb3VzZUlucHV0ID0gbnVsbFxyXG4gICAgICAgIHRoaXMucm90YXRpb25YID0gMFxyXG4gICAgICAgIHRoaXMucm90YXRpb25ZID0gMFxyXG4gICAgICAgIHRoaXMuZGVsdGFSWSA9IDBcclxuICAgICAgICB0aGlzLmNhbVBvcyA9IFswLDAsMTBdXHJcbiAgICAgICAgdGhpcy5jYW1Sb3QgPSBtMy5pZGVudGl0eSgpXHJcbiAgICB9XHJcbiAgICBsaXN0ZW5Nb3VzZShtb3VzZUlucHV0KXtcclxuICAgICAgICB0aGlzLm1vdXNlSW5wdXQgPSBtb3VzZUlucHV0XHJcbiAgICAgICAgbW91c2VJbnB1dC5vbignbW92ZScsIChbZGVsdGFYLCBkZWx0YVldKT0+e1xyXG4gICAgICAgICAgICB0aGlzLnJvdGF0aW9uWSAtPSBkZWx0YVggKiAwLjAwNTtcclxuICAgICAgICAgICAgdGhpcy5yb3RhdGlvblggLT0gZGVsdGFZICogMC4wMDU7XHJcbiAgICAgICAgICAgIHRoaXMucm90YXRpb25YID0gTWF0aC5tYXgoLU1hdGguUEkvMiwgTWF0aC5taW4oTWF0aC5QSS8yLCB0aGlzLnJvdGF0aW9uWCkpXHJcbiAgICAgICAgICAgIHRoaXMuZGVsdGFSWSA9IGRlbHRhWCAqIDAuMDA1O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgbGlzdGVuS2V5Ym9hcmQoa2V5SW5wdXQpe1xyXG4gICAgICAgIHRoaXMua2V5SW5wdXQgPSBrZXlJbnB1dFxyXG4gICAgfVxyXG4gICAgdGljaygpe1xyXG5cclxuICAgICAgICBmb3IoY29uc3Qga2V5IG9mIHRoaXMua2V5SW5wdXQua2V5cyl7XHJcbiAgICAgICAgICAgIGNvbnN0IGFjdGlvbk5hbWUgPSBLRVlTW2tleV1cclxuICAgICAgICAgICAgaWYoYWN0aW9uTmFtZSl7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhY3Rpb24gPSB0aGlzW2FjdGlvbk5hbWVdLmJpbmQodGhpcylcclxuICAgICAgICAgICAgICAgIGFjdGlvbigpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IG0gPSBtMy55Um90YXRpb24odGhpcy5yb3RhdGlvblkpXHJcbiAgICAgICAgdGhpcy5yaWdpZEJvZHkucm90YXRlKFswLCAtdGhpcy5kZWx0YVJZLDBdKVxyXG4gICAgICAgIHRoaXMuZGVsdGFSWSA9IDBcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBwb3MgPSBbLi4udGhpcy5yaWdpZEJvZHkuY29sbGlkZXIucG9zXVxyXG4gICAgICAgIGxldCBfbSA9IG00LnRyYW5zbGF0aW9uKHBvc1swXSwgcG9zWzFdKzMsIHBvc1syXSlcclxuICAgICAgICBfbSA9IG00Lm11bHRpcGx5KF9tLCBtNC5tM1RvbTQodGhpcy5yaWdpZEJvZHkuY29sbGlkZXIuUm1hdHJpeCkpXHJcbiAgICAgICAgX20gPSBtNC54Um90YXRlKF9tLCB0aGlzLnJvdGF0aW9uWClcclxuICAgICAgICBfbSA9IG00LnRyYW5zbGF0ZShfbSwgLi4udGhpcy5jYW1Qb3MpXHJcbiAgICAgICAgdGhpcy5jYW1NYXRyaXggPSBfbVxyXG4gICAgIFxyXG4gICAgfVxyXG4gICAgbW92ZShkaXIpe1xyXG4gICAgICAgIGNvbnN0IG0gPSB0aGlzLnJpZ2lkQm9keS5jb2xsaWRlci5SbWF0cml4XHJcbiAgICAgICAgdGhpcy5yaWdpZEJvZHkuYXBwbHlJbXB1bHNlKG0zLnRyYW5zZm9ybVBvaW50KG0sIGRpciksIFswLDAsMF0pXHJcbiAgICB9XHJcbiAgICBtb3ZlRm9yd2FyZCgpe1xyXG4gICAgICAgIHRoaXMubW92ZShbMCwwLCAtMV0pXHJcbiAgICB9XHJcbiAgICBtb3ZlQmFja3dhcmQoKXtcclxuICAgICAgICB0aGlzLm1vdmUoWzAsMCwgMV0pXHJcbiAgICB9XHJcbiAgICBtb3ZlTGVmdCgpe1xyXG4gICAgICAgIHRoaXMubW92ZShbLTEsMCwgMF0pXHJcbiAgICB9XHJcbiAgICBtb3ZlUmlnaHQoKXtcclxuICAgICAgICB0aGlzLm1vdmUoWzEsMCwgMF0pXHJcbiAgICB9XHJcbn1cclxuY2xhc3MgTm9jbGlwe1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICB0aGlzLmtleUlucHV0ID0gbnVsbFxyXG4gICAgICAgIHRoaXMubW91c2VJbnB1dCA9IG51bGxcclxuICAgICAgICB0aGlzLnJvdGF0aW9uWCA9IDBcclxuICAgICAgICB0aGlzLnJvdGF0aW9uWSA9IDBcclxuICAgICAgICB0aGlzLmRlbHRhUlkgPSAwXHJcbiAgICAgICAgdGhpcy5jYW1Qb3MgPSBbMCwwLDEwXVxyXG4gICAgICAgIHRoaXMuY2FtUm90ID0gbTMuaWRlbnRpdHkoKVxyXG4gICAgfVxyXG4gICAgbGlzdGVuTW91c2UobW91c2VJbnB1dCl7XHJcbiAgICAgICAgdGhpcy5tb3VzZUlucHV0ID0gbW91c2VJbnB1dFxyXG4gICAgICAgIG1vdXNlSW5wdXQub24oJ21vdmUnLCAoW2RlbHRhWCwgZGVsdGFZXSk9PntcclxuICAgICAgICAgICAgdGhpcy5yb3RhdGlvblkgLT0gZGVsdGFYICogMC4wMDU7XHJcbiAgICAgICAgICAgIHRoaXMucm90YXRpb25YIC09IGRlbHRhWSAqIDAuMDA1O1xyXG4gICAgICAgICAgICB0aGlzLnJvdGF0aW9uWCA9IE1hdGgubWF4KC1NYXRoLlBJLzIsIE1hdGgubWluKE1hdGguUEkvMiwgdGhpcy5yb3RhdGlvblgpKVxyXG4gICAgICAgICAgICB0aGlzLmRlbHRhUlkgPSBkZWx0YVggKiAwLjAwNTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGxpc3RlbktleWJvYXJkKGtleUlucHV0KXtcclxuICAgICAgICB0aGlzLmtleUlucHV0ID0ga2V5SW5wdXRcclxuICAgIH1cclxuICAgIHRpY2soKXtcclxuXHJcbiAgICAgICAgZm9yKGNvbnN0IGtleSBvZiB0aGlzLmtleUlucHV0LmtleXMpe1xyXG4gICAgICAgICAgICBjb25zdCBhY3Rpb25OYW1lID0gS0VZU1trZXldXHJcbiAgICAgICAgICAgIGlmKGFjdGlvbk5hbWUpe1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYWN0aW9uID0gdGhpc1thY3Rpb25OYW1lXS5iaW5kKHRoaXMpXHJcbiAgICAgICAgICAgICAgICBhY3Rpb24oKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmNhbU1hdHJpeCA9IG00LnRyYW5zbGF0aW9uKC4uLnRoaXMuY2FtUG9zKVxyXG4gICAgICAgIHRoaXMuY2FtTWF0cml4ID0gbTQueFJvdGF0ZShtNC55Um90YXRlKHRoaXMuY2FtTWF0cml4LCB0aGlzLnJvdGF0aW9uWSksIHRoaXMucm90YXRpb25YKVxyXG4gICAgIFxyXG4gICAgfVxyXG4gICAgbW92ZShkaXIpe1xyXG4gICAgICAgIGNvbnN0IG0gPSBtNC5tNFRvbTModGhpcy5jYW1NYXRyaXgpXHJcbiAgICAgICAgdGhpcy5jYW1Qb3MgPSB2ZWN0b3Iuc3VtKHRoaXMuY2FtUG9zLCBtMy50cmFuc2Zvcm1Qb2ludChtLCBkaXIpKVxyXG4gICAgfVxyXG4gICAgbW92ZUZvcndhcmQoKXtcclxuICAgICAgICB0aGlzLm1vdmUoWzAsMCwgLTFdKVxyXG4gICAgfVxyXG4gICAgbW92ZUJhY2t3YXJkKCl7XHJcbiAgICAgICAgdGhpcy5tb3ZlKFswLDAsIDFdKVxyXG4gICAgfVxyXG4gICAgbW92ZUxlZnQoKXtcclxuICAgICAgICB0aGlzLm1vdmUoWy0xLDAsIDBdKVxyXG4gICAgfVxyXG4gICAgbW92ZVJpZ2h0KCl7XHJcbiAgICAgICAgdGhpcy5tb3ZlKFsxLDAsIDBdKVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCB7Tm9jbGlwLCBDb250cm9sbGFibGV9IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgS2V5bG9nZ2VyIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMua2V5cyA9IG5ldyBTZXQoKTtcclxuICB9XHJcbiAgbG9nRG93bih7IGtleSB9KSB7XHJcbiAgICB0aGlzLmtleXMuYWRkKGtleSk7XHJcbiAgfVxyXG4gIGxvZ1VwKHsga2V5IH0pIHtcclxuICAgIHRoaXMua2V5cy5kZWxldGUoa2V5KTtcclxuICB9XHJcbiAgbGlzdGVuKCkge1xyXG4gICAgY29uc3QgbG9nRG93biA9IHRoaXMubG9nRG93bi5iaW5kKHRoaXMpO1xyXG4gICAgY29uc3QgbG9nVXAgPSB0aGlzLmxvZ1VwLmJpbmQodGhpcyk7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBsb2dEb3duKTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBsb2dVcCk7XHJcbiAgICB0aGlzLnVuc3Vic2ljcmliZSA9ICgpID0+IHtcclxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgbG9nRG93bik7XHJcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBsb2dVcCk7XHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tIFwiLi4vcGh5c2ljcy9ldmVudEVtaXR0ZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vdXNlSW5wdXQgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMubGFzdFggPSAwO1xyXG4gICAgdGhpcy5sYXN0WSA9IDA7XHJcbiAgICB0aGlzLmVuYWJsZSA9IGZhbHNlO1xyXG4gIH1cclxuICBsb2dNb3ZlKHsgb2Zmc2V0WCwgb2Zmc2V0WSB9KSB7XHJcbiAgICBjb25zdCBkZWx0YVggPSBvZmZzZXRYIC0gdGhpcy5sYXN0WDtcclxuICAgIHRoaXMubGFzdFggPSBvZmZzZXRYO1xyXG4gICAgY29uc3QgZGVsdGFZID0gb2Zmc2V0WSAtIHRoaXMubGFzdFk7XHJcbiAgICB0aGlzLmxhc3RZID0gb2Zmc2V0WTtcclxuICAgIHRoaXMuZW1pdChcIm1vdmVcIiwgW2RlbHRhWCwgZGVsdGFZXSk7XHJcbiAgfVxyXG4gIGxpc3RlbigpIHtcclxuICAgIGNvbnN0IGxvZ01vdmUgPSB0aGlzLmxvZ01vdmUuYmluZCh0aGlzKTtcclxuICAgIGNvbnN0IF8gPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICBpZiAodGhpcy5lbmFibGUpIGxvZ01vdmUoZSk7XHJcbiAgICB9LmJpbmQodGhpcyk7XHJcbiAgICBjb25zdCBkb3duID0gZnVuY3Rpb24gKHsgb2Zmc2V0WCwgb2Zmc2V0WSB9KSB7XHJcbiAgICAgIHRoaXMubGFzdFggPSBvZmZzZXRYO1xyXG4gICAgICB0aGlzLmxhc3RZID0gb2Zmc2V0WTtcclxuICAgICAgdGhpcy5lbmFibGUgPSB0cnVlO1xyXG4gICAgfS5iaW5kKHRoaXMpO1xyXG4gICAgY29uc3QgdXAgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHRoaXMuZW5hYmxlID0gZmFsc2U7XHJcbiAgICB9LmJpbmQodGhpcyk7XHJcblxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBfKTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgZG93bik7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCB1cCk7XHJcbiAgICB0aGlzLnVuc3Vic2NyaWJlID0gKCkgPT4ge1xyXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIF8pO1xyXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGRvd24pO1xyXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCB1cCk7XHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iLCJsZXQgZGlzdFNxID0gKHgsIHkpID0+IHtcclxuICByZXR1cm4geC5tYXAoKGUsIGkpID0+IGUgLSB5W2ldKS5yZWR1Y2UoKGFjYywgZSkgPT4gKGFjYyArPSBlICoqIDIpLCAwKTtcclxufTtcclxuXHJcbmNvbnN0IEdhdXNzU2VpZGVsID0gKEEsIGIsIG4sIGVwcykgPT4ge1xyXG4gIGxldCB4ID0gbmV3IEFycmF5KG4pLmZpbGwoMCk7XHJcbiAgbGV0IGNvbnYgPSBmYWxzZSxcclxuICAgIG1heEl0ZXIgPSA2NDtcclxuICBsZXQgeF9uZXcgPSBbXTtcclxuICB3aGlsZSAoIWNvbnYgJiYgbWF4SXRlciA+IDApIHtcclxuICAgIG1heEl0ZXItLTtcclxuICAgIHhfbmV3ID0gWy4uLnhdO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHtcclxuICAgICAgbGV0IHMgPSAwO1xyXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGk7IGorKykge1xyXG4gICAgICAgIHMgKz0gQVtpICogbiArIGpdICogeF9uZXdbal07XHJcbiAgICAgIH1cclxuICAgICAgZm9yIChsZXQgaiA9IGkgKyAxOyBqIDwgbjsgaisrKSB7XHJcbiAgICAgICAgcyArPSBBW2kgKiBuICsgal0gKiB4W2pdO1xyXG4gICAgICB9XHJcbiAgICAgIHhfbmV3W2ldID0gKGJbaV0gLSBzKSAvIEFbaSAqIG4gKyBpXTtcclxuICAgIH1cclxuXHJcbiAgICBjb252ID0gZGlzdFNxKHgsIHhfbmV3KSA8IGVwcztcclxuICAgIHggPSBbLi4ueF9uZXddO1xyXG4gIH1cclxuICByZXR1cm4geF9uZXc7XHJcbn07XHJcbmV4cG9ydCB7IEdhdXNzU2VpZGVsIH07XHJcbiIsImltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gXCIuL2V2ZW50RW1pdHRlclwiO1xyXG5pbXBvcnQgeyBtMywgdmVjdG9yIH0gZnJvbSBcIm1hdGhcIjtcclxuY29uc3QgeyBjcm9zcywgc2NhbGUsIG5vcm0sIHN1bSwgZGlmZiwgY2hrViB9ID0gdmVjdG9yO1xyXG5jb25zdCBwcmVjID0gMC4wMDAxO1xyXG5jb25zdCBzdG9wVHJlc2hvbGQgPSAwLjAwNTtcclxuY2xhc3MgUmlnaWRCb2R5IGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcclxuICBjb25zdHJ1Y3Rvcihjb2xsaWRlcikge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuc3RhdGljID0gZmFsc2U7XHJcbiAgICB0aGlzLmNvbGxpZGVyID0gY29sbGlkZXI7XHJcbiAgICB0aGlzLm1hc3MgPSAxO1xyXG4gICAgdGhpcy5pbnZlcnNlTWFzcyA9IDEgLyB0aGlzLm1hc3M7XHJcbiAgICB0aGlzLnZlbG9jaXR5ID0gWzAsIDAsIDBdO1xyXG4gICAgdGhpcy5wc2V1ZG9WZWxvY2l0eSA9IFswLCAwLCAwXTtcclxuICAgIHRoaXMucHNldWRvQW5ndWxhclYgPSBbMCwgMCwgMF07XHJcbiAgICB0aGlzLmFjY2VsZXJhdGlvbiA9IFswLCAwLCAwXTtcclxuICAgIHRoaXMuYW5ndWxhclYgPSBbMCwgMCwgMF07XHJcbiAgICB0aGlzLmludmVyc2VJbmVydGlhID0gY29sbGlkZXIuZ2V0SW52ZXJzZUluZXJ0aWFUZW5zb3IodGhpcy5tYXNzKTtcclxuICAgIHRoaXMuaWQgPSAxO1xyXG4gICAgdGhpcy5mcmljdGlvbiA9IDAuNTtcclxuICAgIHRoaXMuQlZsaW5rO1xyXG4gICAgdGhpcy5vbGRWZWxvY2l0eSA9IG51bGxcclxuICAgIHRoaXMuZ3JvdXAgPSBudWxsXHJcbiAgfVxyXG4gIGludGVncmF0ZShkdCkge1xyXG4gICAgY29uc3QgeyBhY2NlbGVyYXRpb24sIHZlbG9jaXR5LCB0cmFuc2xhdGlvbiB9ID0gdGhpcztcclxuXHJcbiAgICB0aGlzLnRyYW5zbGF0ZShzY2FsZSh0aGlzLnZlbG9jaXR5LCBkdCkpO1xyXG4gICAgY29uc3Qgcm90YXRpb24gPSBzY2FsZSh0aGlzLmFuZ3VsYXJWLCBkdCApO1xyXG4gICAgaWYgKG5vcm0ocm90YXRpb24pID4gc3RvcFRyZXNob2xkKSB0aGlzLnJvdGF0ZShyb3RhdGlvbik7XHJcbiAgICBsZXQgZGVsdGFTcGVlZCA9IHNjYWxlKHRoaXMuYWNjZWxlcmF0aW9uLCBkdCk7XHJcbiAgICB0aGlzLnZlbG9jaXR5ID0gc3VtKHRoaXMudmVsb2NpdHksIGRlbHRhU3BlZWQpO1xyXG4gIH1cclxuICBpbnRlZ3JhdGVSSzQoZHQpe1xyXG4gICAgY29uc3Qge2FjY2VsZXJhdGlvbiwgdmVsb2NpdHksIGFuZ3VsYXJWfSA9IHRoaXNcclxuICAgIFxyXG5cclxuICAgIGNvbnN0IF90cmFuc2xhdGlvbiA9IHNjYWxlKHN1bSh2ZWxvY2l0eSwgc2NhbGUoYWNjZWxlcmF0aW9uLCAyLzMgKiBkdCkpLCBkdClcclxuICAgIGNvbnN0IF9yb3RhdGlvbiA9IHNjYWxlKGFuZ3VsYXJWLCBkdClcclxuICAgIGNvbnN0IGRlbHRhVmVsb2NpdHkgID0gc2NhbGUoYWNjZWxlcmF0aW9uLCBkdClcclxuXHJcbiAgICBpZiAobm9ybShfdHJhbnNsYXRpb24pID4gc3RvcFRyZXNob2xkKSB0aGlzLnRyYW5zbGF0ZShfdHJhbnNsYXRpb24pO1xyXG4gICAgXHJcbiAgICBpZiAobm9ybShfcm90YXRpb24pID4gc3RvcFRyZXNob2xkKSB0aGlzLnJvdGF0ZShfcm90YXRpb24pO1xyXG4gICAgdGhpcy52ZWxvY2l0eSA9IHN1bSh2ZWxvY2l0eSwgZGVsdGFWZWxvY2l0eSlcclxuICB9XHJcbiAgaW50ZWdyYXRlUHNldWRvVmVsb2NpdGllcyhkdCkge1xyXG4gICAgY29uc3QgdHJhbnNsYXRpb24gPSBzY2FsZSh0aGlzLnBzZXVkb1ZlbG9jaXR5LCBkdCk7XHJcblxyXG4gICAgY29uc3Qgcm90YXRpb24gPSBzY2FsZSh0aGlzLnBzZXVkb0FuZ3VsYXJWLCBkdCApO1xyXG4gICAgaWYgKG5vcm0odHJhbnNsYXRpb24pID4gc3RvcFRyZXNob2xkKSB0aGlzLnRyYW5zbGF0ZSh0cmFuc2xhdGlvbik7XHJcblxyXG4gICAgaWYgKG5vcm0ocm90YXRpb24pID4gc3RvcFRyZXNob2xkKSB0aGlzLnJvdGF0ZShyb3RhdGlvbik7XHJcblxyXG4gICAgdGhpcy5wc2V1ZG9WZWxvY2l0eSA9IFswLCAwLCAwXTtcclxuICAgIHRoaXMucHNldWRvQW5ndWxhclYgPSBbMCwgMCwgMF07XHJcbiAgfVxyXG4gIGFkZFBzZXVkb1ZlbG9jaXR5KHYpIHtcclxuICAgIHRoaXMucHNldWRvVmVsb2NpdHkgPSBzdW0odGhpcy5wc2V1ZG9WZWxvY2l0eSwgdik7XHJcbiAgfVxyXG4gIGFkZFBzZXVkb0FuZ3VsYXJWKHYpIHtcclxuICAgIHRoaXMucHNldWRvQW5ndWxhclYgPSBzdW0odGhpcy5wc2V1ZG9Bbmd1bGFyViwgdik7XHJcbiAgfVxyXG4gIGludGVncmF0ZVZlbG9jaXRpZXMoZHQpIHtcclxuICAgIGNvbnN0IHRyYW5zbGF0aW9uID0gc2NhbGUodGhpcy52ZWxvY2l0eSAsIGR0KTtcclxuICAgIGlmIChub3JtKHRyYW5zbGF0aW9uKSA+IHN0b3BUcmVzaG9sZCkgdGhpcy50cmFuc2xhdGUodHJhbnNsYXRpb24pO1xyXG4gICAgY29uc3Qgcm90YXRpb24gPSBzY2FsZSh0aGlzLmFuZ3VsYXJWLCBkdCApO1xyXG4gICAgaWYgKG5vcm0odHJhbnNsYXRpb24pID4gc3RvcFRyZXNob2xkKSB0aGlzLnJvdGF0ZShyb3RhdGlvbik7XHJcbiAgfVxyXG4gIGludGVncmF0ZUZvcmNlcyhkdCkge1xyXG4gICAgbGV0IGRlbHRhU3BlZWQgPSBzY2FsZSh0aGlzLmFjY2VsZXJhdGlvbiwgZHQpO1xyXG4gICAgdGhpcy5pbnRWZWxvY2l0eSA9IHN1bSh0aGlzLnZlbG9jaXR5LHNjYWxlKHRoaXMuYWNjZWxlcmF0aW9uLCAzLzMgKmR0KSlcclxuICAgIHRoaXMudmVsb2NpdHkgPSBzdW0odGhpcy52ZWxvY2l0eSwgZGVsdGFTcGVlZCk7XHJcbiAgfVxyXG4gIHVwZGF0ZUludmVyc2VJbmVydGlhKCkge1xyXG4gICAgdGhpcy5pbnZlcnNlSW5lcnRpYSA9IHRoaXMuY29sbGlkZXIuZ2V0SW52ZXJzZUluZXJ0aWFUZW5zb3IodGhpcy5tYXNzKTtcclxuICB9XHJcbiAgZ2V0SXRlbnNvcigpIHtcclxuICAgIHJldHVybiB0aGlzLmNvbGxpZGVyLmdldEludmVyc2VJbmVydGlhVGVuc29yKHRoaXMubWFzcyk7XHJcbiAgfVxyXG4gIHNldE1hc3MobWFzcykge1xyXG4gICAgdGhpcy5tYXNzID0gbWFzcztcclxuICAgIHRoaXMuaW52ZXJzZU1hc3MgPSAxIC8gdGhpcy5tYXNzO1xyXG4gIH1cclxuICB0cmFuc2xhdGUodHJhbnNsYXRpb24pIHtcclxuICAgIHRoaXMuY29sbGlkZXIudHJhbnNsYXRlKHRyYW5zbGF0aW9uKTtcclxuXHJcbiAgICB0aGlzLmVtaXQoXCJ1cGRhdGVcIik7XHJcbiAgfVxyXG4gIHJvdGF0ZShyb3RhdGlvbikge1xyXG4gICAgdGhpcy5jb2xsaWRlci5yb3RhdGUocm90YXRpb24pO1xyXG5cclxuICAgIHRoaXMuZW1pdChcInVwZGF0ZVwiKTtcclxuICB9XHJcblxyXG4gIGFwcGx5SW1wdWxzZShpbXB1bHNlLCBwb2ludCkge1xyXG4gICAgdGhpcy52ZWxvY2l0eSA9IHN1bSh0aGlzLnZlbG9jaXR5LCBzY2FsZShpbXB1bHNlLCB0aGlzLmludmVyc2VNYXNzKSk7XHJcbiAgICBjb25zdCBhbmd1bGFySW1wdWxzZSA9IG0zLnRyYW5zZm9ybVBvaW50KFxyXG4gICAgICB0aGlzLmludmVyc2VJbmVydGlhLFxyXG4gICAgICBjcm9zcyhwb2ludCwgaW1wdWxzZSlcclxuICAgICk7XHJcbiAgICB0aGlzLmFuZ3VsYXJWID0gc3VtKHRoaXMuYW5ndWxhclYsIGFuZ3VsYXJJbXB1bHNlKTtcclxuICB9XHJcbiAgYXBwbHlQc2V1ZG9JbXB1bHNlKGltcHVsc2UsIHBvaW50KSB7XHJcbiAgICB0aGlzLnBzZXVkb1ZlbG9jaXR5ID0gc3VtKFxyXG4gICAgICB0aGlzLnBzZXVkb1ZlbG9jaXR5LFxyXG4gICAgICBzY2FsZShpbXB1bHNlLCB0aGlzLmludmVyc2VNYXNzKVxyXG4gICAgKTtcclxuICAgIGNvbnN0IGFuZ3VsYXJJbXB1bHNlID0gbTMudHJhbnNmb3JtUG9pbnQoXHJcbiAgICAgIHRoaXMuaW52ZXJzZUluZXJ0aWEsXHJcbiAgICAgIGNyb3NzKHBvaW50LCBpbXB1bHNlKVxyXG4gICAgKTtcclxuICAgIHRoaXMucHNldWRvQW5ndWxhclYgPSBzdW0odGhpcy5wc2V1ZG9Bbmd1bGFyViwgYW5ndWxhckltcHVsc2UpO1xyXG4gIH1cclxuICBhZGRWZWxvY2l0eSh2KSB7XHJcbiAgICBjaGtWKHYpO1xyXG4gICAgaWYgKHRoaXMuc3RhdGljKSByZXR1cm47XHJcbiAgICB0aGlzLnZlbG9jaXR5ID0gc3VtKHRoaXMudmVsb2NpdHksIHYpO1xyXG4gIH1cclxuICBhZGRBbmd1bGFyVih2KSB7XHJcbiAgICBjaGtWKHYpO1xyXG4gICAgaWYgKHRoaXMuc3RhdGljKSByZXR1cm47XHJcbiAgICB0aGlzLmFuZ3VsYXJWID0gc3VtKHRoaXMuYW5ndWxhclYsIHYpO1xyXG4gIH1cclxuICBhZGRBY2NlbGVyYXRpb24odikge1xyXG4gICAgdGhpcy5hY2NlbGVyYXRpb24gPSBzdW0odGhpcy5hY2NlbGVyYXRpb24sIHYpO1xyXG4gIH1cclxuICBnZXRFeHBhbmRlZEFBQkIoKSB7XHJcbiAgICBjb25zdCBhYWJiID0gdGhpcy5jb2xsaWRlci5nZXRBQUJCKCk7XHJcbiAgICBjb25zdCB2ZWxvY2l0eSA9IHRoaXMudmVsb2NpdHk7XHJcbiAgICBjb25zdCB0ciA9IFtwcmVjLCBwcmVjLCBwcmVjXTtcclxuICAgIGFhYmIubWluID0gZGlmZihhYWJiLm1pbiwgdHIpO1xyXG4gICAgYWFiYi5tYXggPSBzdW0oYWFiYi5tYXgsIHRyKTtcclxuXHJcbiAgICAvKmlmKHZlbG9jaXR5WzBdID4gMTApIGFhYmIubWF4WzBdICs9IHZlbG9jaXR5WzBdXHJcbiAgICAgIGlmKHZlbG9jaXR5WzFdID4gMTApIGFhYmIubWF4WzFdICs9IHZlbG9jaXR5WzFdXHJcbiAgICAgIGlmKHZlbG9jaXR5WzJdID4gMTApIGFhYmIubWF4WzJdICs9IHZlbG9jaXR5WzJdXHJcbiAgICAgIGlmKHZlbG9jaXR5WzBdIDwgLTEwKSBhYWJiLm1pblswXSArPSB2ZWxvY2l0eVswXVxyXG4gICAgICBpZih2ZWxvY2l0eVsxXSA8IC0xMCkgYWFiYi5taW5bMV0gKz0gdmVsb2NpdHlbMV1cclxuICAgICAgaWYodmVsb2NpdHlbMl0gPCAtMTApIGFhYmIubWluWzJdICs9IHZlbG9jaXR5WzJdKi9cclxuICAgIHJldHVybiBhYWJiO1xyXG4gIH1cclxuICBnZXRBQUJCKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuY29sbGlkZXIuZ2V0QUFCQigpO1xyXG4gIH1cclxufVxyXG5cclxuY2xhc3MgUGxheWVyIGV4dGVuZHMgUmlnaWRCb2R5IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XHJcbiAgICB0aGlzLmZyaWN0aW9uID0gMC4wO1xyXG4gIH1cclxuICBhcHBseUltcHVsc2UoaW1wdWxzZSwgcG9pbnQpIHtcclxuICAgIHRoaXMudmVsb2NpdHkgPSBzdW0odGhpcy52ZWxvY2l0eSwgc2NhbGUoaW1wdWxzZSwgdGhpcy5pbnZlcnNlTWFzcykpO1xyXG4gIH1cclxuICBhcHBseVBzZXVkb0ltcHVsc2UoaW1wdWxzZSkge1xyXG4gICAgdGhpcy5wc2V1ZG9WZWxvY2l0eSA9IHN1bShcclxuICAgICAgdGhpcy5wc2V1ZG9WZWxvY2l0eSxcclxuICAgICAgc2NhbGUoaW1wdWxzZSwgdGhpcy5pbnZlcnNlTWFzcylcclxuICAgICk7XHJcbiAgfVxyXG59XHJcbmV4cG9ydCB7IFJpZ2lkQm9keSwgUGxheWVyIH07XHJcbiIsImNvbnN0IGlzSW5zaWRlID0gKHAxLCBwMiwgcSkgPT4ge1xyXG4gIGNvbnN0IFIgPSAocDJbMF0gLSBwMVswXSkgKiAocVsxXSAtIHAxWzFdKSAtIChwMlsxXSAtIHAxWzFdKSAqIChxWzBdIC0gcDFbMF0pO1xyXG4gIHJldHVybiBSIDw9IDAgKyAwLjAwMTtcclxufTtcclxuXHJcbmNvbnN0IGRvdCA9IChhLCBiKSA9PiBhWzBdICogYlswXSArIGFbMV0gKiBiWzFdO1xyXG5cclxuY29uc3QgaXNJbkNsb2Nrd2lzZSA9IChwMSwgcDIsIHAzKSA9PiB7XHJcbiAgY29uc3QgZGV0ID1cclxuICAgIHAyWzBdICogcDNbMV0gK1xyXG4gICAgcDNbMF0gKiBwMVsxXSArXHJcbiAgICBwMVswXSAqIHAyWzFdIC1cclxuICAgIHAxWzBdICogcDFbMV0gLVxyXG4gICAgcDNbMF0gKiBwMlsxXSAtXHJcbiAgICBwMVswXSAqIHAzWzFdO1xyXG5cclxuICBpZihkZXQgPCAwKSByZXR1cm4gMVxyXG4gIHJldHVybiAtMVxyXG59O1xyXG5cclxuY29uc3QgY29tcHV0ZUludGVyc2VjdGlvbiA9IChwMSwgcDIsIHAzLCBwNCkgPT4ge1xyXG4gIGlmIChwMlswXSAtIHAxWzBdID09PSAwKSB7XHJcbiAgICBjb25zdCB4ID0gcDFbMF07XHJcblxyXG4gICAgY29uc3QgbTIgPSAocDRbMV0gLSBwM1sxXSkgLyAocDRbMF0gLSBwM1swXSk7XHJcbiAgICBjb25zdCBiMiA9IHAzWzFdIC0gbTIgKiBwM1swXTtcclxuXHJcbiAgICBjb25zdCB5ID0gbTIgKiB4ICsgYjI7XHJcbiAgICByZXR1cm4gW3gsIHldO1xyXG4gIH1cclxuICBpZiAocDRbMF0gLSBwM1swXSA9PT0gMCkge1xyXG4gICAgY29uc3QgeCA9IHAzWzBdO1xyXG5cclxuICAgIGNvbnN0IG0xID0gKHAyWzFdIC0gcDFbMV0pIC8gKHAyWzBdIC0gcDFbMF0pO1xyXG4gICAgY29uc3QgYjEgPSBwMVsxXSAtIG0xICogcDFbMF07XHJcblxyXG4gICAgY29uc3QgeSA9IG0xICogeCArIGIxO1xyXG5cclxuICAgIHJldHVybiBbeCwgeV07XHJcbiAgfVxyXG4gIGNvbnN0IG0xID0gKHAyWzFdIC0gcDFbMV0pIC8gKHAyWzBdIC0gcDFbMF0pO1xyXG4gIGNvbnN0IGIxID0gcDFbMV0gLSBtMSAqIHAxWzBdO1xyXG5cclxuICBjb25zdCBtMiA9IChwNFsxXSAtIHAzWzFdKSAvIChwNFswXSAtIHAzWzBdKTtcclxuICBjb25zdCBiMiA9IHAzWzFdIC0gbTIgKiBwM1swXTtcclxuXHJcbiAgY29uc3QgeCA9IChiMiAtIGIxKSAvIChtMSAtIG0yKTtcclxuXHJcbiAgY29uc3QgeSA9IG0xICogeCArIGIxO1xyXG5cclxuICByZXR1cm4gW3gsIHldO1xyXG59O1xyXG5cclxuY29uc3QgY2xpcCA9IChBLCBCKSA9PiB7XHJcbiAgbGV0IHJlc3VsdCA9IFsuLi5BXTtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDAsIG4gPSBCLmxlbmd0aDsgaSA8IG47IGkgKyspIHtcclxuICAgIGNvbnN0IG5leHQgPSBbLi4ucmVzdWx0XTtcclxuICAgIHJlc3VsdCA9IFtdO1xyXG4gICAgY29uc3QgYUVkZ2UxID0gQi5hdCgoaSAtIDEpICk7XHJcbiAgICBjb25zdCBhRWRnZTIgPSBCLmF0KGkgKTtcclxuXHJcbiAgICBmb3IgKGxldCBqID0gMCwgX24gPSBuZXh0Lmxlbmd0aDsgaiA8IF9uOyBqKyspIHtcclxuICAgICAgY29uc3QgYkVkZ2UxID0gbmV4dC5hdCgoaiAtIDEpKTtcclxuICAgICAgY29uc3QgYkVkZ2UyID0gbmV4dC5hdChqICk7XHJcblxyXG4gICAgICBpZiAoaXNJbnNpZGUoYUVkZ2UxLCBhRWRnZTIsIGJFZGdlMikpIHtcclxuICAgICAgICBpZiAoIWlzSW5zaWRlKGFFZGdlMSwgYUVkZ2UyLCBiRWRnZTEpKSB7XHJcbiAgICAgICAgICBjb25zdCBpbnRlcnNlY3Rpb24gPSBjb21wdXRlSW50ZXJzZWN0aW9uKFxyXG4gICAgICAgICAgICBiRWRnZTEsXHJcbiAgICAgICAgICAgIGJFZGdlMixcclxuICAgICAgICAgICAgYUVkZ2UxLFxyXG4gICAgICAgICAgICBhRWRnZTJcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICByZXN1bHQucHVzaChpbnRlcnNlY3Rpb24pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXN1bHQucHVzaChiRWRnZTIpO1xyXG4gICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChpc0luc2lkZShhRWRnZTEsIGFFZGdlMiwgYkVkZ2UxKSkge1xyXG4gICAgICAgIGNvbnN0IGludGVyc2VjdGlvbiA9IGNvbXB1dGVJbnRlcnNlY3Rpb24oXHJcbiAgICAgICAgICBiRWRnZTEsXHJcbiAgICAgICAgICBiRWRnZTIsXHJcbiAgICAgICAgICBhRWRnZTEsXHJcbiAgICAgICAgICBhRWRnZTJcclxuICAgICAgICApO1xyXG4gICAgICAgIHJlc3VsdC5wdXNoKGludGVyc2VjdGlvbik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxuXHJcbmV4cG9ydCB7IGlzSW5zaWRlLCBjb21wdXRlSW50ZXJzZWN0aW9uLCBjbGlwLCBpc0luQ2xvY2t3aXNlIH07XHJcbiIsImltcG9ydCB7IHZlY3RvciwgbTQsIG0zLCBBQUJCIH0gZnJvbSBcIm1hdGhcIjtcclxuXHJcbmNvbnN0IHsgc2NhbGUsIHN1bSwgZGlmZiB9ID0gdmVjdG9yO1xyXG5cclxuY29uc3QgeEF4aXMgPSBbMSwgMCwgMF07XHJcbmNvbnN0IHlBeGlzID0gWzAsIDEsIDBdO1xyXG5jb25zdCB6QXhpcyA9IFswLCAwLCAxXTtcclxuY29uc3QgeEF4aXNOZWdhdGl2ZSA9IHNjYWxlKHhBeGlzLCAtMSk7XHJcbmNvbnN0IHlBeGlzTmVnYXRpdmUgPSBzY2FsZSh5QXhpcywgLTEpO1xyXG5jb25zdCB6QXhpc05lZ2F0aXZlID0gc2NhbGUoekF4aXMsIC0xKTtcclxuXHJcbmNsYXNzIENvbGxpZGVyIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuUm1hdHJpeCA9IG0zLmlkZW50aXR5KCk7XHJcbiAgICB0aGlzLnBvcyA9IFtdO1xyXG4gICAgdGhpcy5zY2FsZSA9IFsxLCAxLCAxXTtcclxuICAgIHRoaXMuUlMgPSBtMy5pZGVudGl0eSgpO1xyXG4gICAgdGhpcy5SU2ludmVyc2UgPSBtMy5pZGVudGl0eSgpO1xyXG4gICAgdGhpcy5wb3MgPSBbMCwgMCwgMF07XHJcbiAgfVxyXG4gIHRyYW5zbGF0ZSh2KSB7XHJcbiAgICB0aGlzLnBvcyA9IHN1bSh0aGlzLnBvcywgdik7XHJcbiAgfVxyXG4gIHJvdGF0ZSh2KSB7XHJcbiAgICB0aGlzLlJTbWF0cml4ID0gbTMueFJvdGF0ZSh0aGlzLlJTbWF0cml4LCB2WzBdKTtcclxuICAgIHRoaXMuUlNtYXRyaXggPSBtMy55Um90YXRlKHRoaXMuUlNtYXRyaXgsIHZbMV0pO1xyXG4gICAgdGhpcy5SU21hdHJpeCA9IG0zLnpSb3RhdGUodGhpcy5SU21hdHJpeCwgdlsyXSk7XHJcbiAgICB0aGlzLlJtYXRyaXhJbnZlcnNlID0gbTMudHJhbnNwb3NlKHRoaXMuUlNtYXRyaXgpO1xyXG4gIH1cclxuICBnZXRBQUJCKCkge1xyXG4gICAgY29uc3QgbWF4WCA9IHRoaXMuc3VwcG9ydCh4QXhpcylbMF07XHJcbiAgICBjb25zdCBtYXhZID0gdGhpcy5zdXBwb3J0KHlBeGlzKVsxXTtcclxuICAgIGNvbnN0IG1heFogPSB0aGlzLnN1cHBvcnQoekF4aXMpWzJdO1xyXG5cclxuICAgIGNvbnN0IG1pblggPSB0aGlzLnN1cHBvcnQoeEF4aXNOZWdhdGl2ZSlbMF07XHJcbiAgICBjb25zdCBtaW5ZID0gdGhpcy5zdXBwb3J0KHlBeGlzTmVnYXRpdmUpWzFdO1xyXG4gICAgY29uc3QgbWluWiA9IHRoaXMuc3VwcG9ydCh6QXhpc05lZ2F0aXZlKVsyXTtcclxuICAgIHJldHVybiBuZXcgQUFCQihbbWluWCwgbWluWSwgbWluWl0sIFttYXhYLCBtYXhZLCBtYXhaXSk7XHJcbiAgfVxyXG4gIHNldFJTTWF0MyhtKSB7XHJcbiAgICB0aGlzLlJTbWF0cml4ID0gbTtcclxuICAgIHRoaXMuUlNtYXRyaXhJbnZlcnNlID0gbTMudHJhbnNwb3NlKG0pO1xyXG4gIH1cclxuICBzZXRUUlNNYXQ0KG0pIHtcclxuICAgIHRoaXMuUlNtYXRyaXggPSBtNC5tNFRvbTMobSk7XHJcbiAgICB0aGlzLnBvc1swXSA9IG1bMTJdO1xyXG4gICAgdGhpcy5wb3NbMV0gPSBtWzEzXTtcclxuICAgIHRoaXMucG9zWzJdID0gbVsxNF07XHJcbiAgfVxyXG4gIGdldFRSU01hdDQoKSB7XHJcbiAgICBjb25zdCBtID0gbTQubTNUb200KHRoaXMuUlNtYXRyaXgpO1xyXG4gICAgbVsxMl0gPSB0aGlzLnBvc1swXTtcclxuICAgIG1bMTNdID0gdGhpcy5wb3NbMV07XHJcbiAgICBtWzE0XSA9IHRoaXMucG9zWzJdO1xyXG4gICAgbVsxNV0gPSAxO1xyXG4gICAgcmV0dXJuIG07XHJcbiAgfVxyXG4gIGxvY2FsVG9HbG9iYWwodikge1xyXG4gICAgbGV0IGdsb2JhbCA9IG0zLnRyYW5zZm9ybVBvaW50KHRoaXMuUlNtYXRyaXgsIHYpO1xyXG4gICAgcmV0dXJuIHN1bSh0aGlzLnBvcywgZ2xvYmFsKTtcclxuICB9XHJcbn1cclxuXHJcbmNsYXNzIEJveCB7XHJcbiAgY29uc3RydWN0b3IoYSA9IDEsIGIgPSAxLCBjID0gMSkge1xyXG4gICAgdGhpcy5taW4gPSBbLWEgLyAyLCAtYiAvIDIsIC1jIC8gMl07XHJcbiAgICB0aGlzLm1heCA9IFthIC8gMiwgYiAvIDIsIGMgLyAyXTtcclxuICAgIHRoaXMuUm1hdHJpeCA9IG0zLmlkZW50aXR5KCk7XHJcbiAgICB0aGlzLlJtYXRyaXhJbnZlcnNlID0gbTMuaWRlbnRpdHkoKTtcclxuICAgIHRoaXMuUlMgPSBtMy5pZGVudGl0eSgpO1xyXG4gICAgdGhpcy5UUlMgPSBtNC5pZGVudGl0eSgpXHJcbiAgICB0aGlzLnBvcyA9IFswLCAwLCAwXTtcclxuICAgIHRoaXMucG9pbnRzID0gW1xyXG4gICAgICBbLTEvMiwgLTEvMiwgLTEvMl0sXHJcbiAgICAgIFsxLzIsIC0xLzIsIC0xLzJdLFxyXG4gICAgICBbMS8yLCAtMS8yLCAxLzJdLFxyXG4gICAgICBbLTEvMiwgLTEvMiwgMS8yXSxcclxuICAgICAgWy0xLzIsIDEvMiwgLTEvMl0sXHJcbiAgICAgIFsxLzIsIDEvMiwgLTEvMl0sXHJcbiAgICAgIFsxLzIsIDEvMiwgMS8yXSxcclxuICAgICAgWy0xLzIsIDEvMiwgMS8yXSxcclxuICAgIF07XHJcbiAgICB0aGlzLmluZGljZXMgPSBbXHJcbiAgICAgIFswLCA0LCA1LCAxXSwgLy8gLXpcclxuICAgICAgWzMsIDcsIDYsIDJdLCAvLyArelxyXG4gICAgICBbMCwgMSwgMiwgM10sIC8vIC15XHJcbiAgICAgIFs0LCA1LCA2LCA3XSwgLy8gK3lcclxuICAgICAgWzAsIDMsIDcsIDRdLCAvLyAteFxyXG4gICAgICBbMSwgMiwgNiwgNV0sIC8vICt4XHJcbiAgICBdO1xyXG4gICAgdGhpcy5ub3JtYWxzID0gW1xyXG4gICAgICBbMCwgMCwgLTFdLFxyXG4gICAgICBbMCwgMCwgMV0sXHJcbiAgICAgIFswLCAtMSwgMF0sXHJcbiAgICAgIFswLCAxLCAwXSxcclxuICAgICAgWy0xLCAwLCAwXSxcclxuICAgICAgWzEsIDAsIDBdLFxyXG4gICAgXTtcclxuICB9XHJcbiAgc2V0U2NhbGUoc2NhbGUpe1xyXG4gICAgY29uc3QgW2EsIGIsIGNdID0gc2NhbGVcclxuICAgIHRoaXMubWluID0gWy1hIC8gMiwgLWIgLyAyLCAtYyAvIDJdO1xyXG4gICAgdGhpcy5tYXggPSBbYSAvIDIsIGIgLyAyLCBjIC8gMl07XHJcbiAgfVxyXG4gIHNldFRyYW5zbGF0aW9uKHRyYW5zbGF0aW9uKXtcclxuICAgIFxyXG4gICAgdGhpcy5wb3MgPVsuLi50cmFuc2xhdGlvbl1cclxuICAgIGNvbnNvbGUubG9nKHRoaXMucG9zKVxyXG4gIH1cclxuICBnZXROb3JtYWxzR2xvYmFsKCkge1xyXG4gICAgcmV0dXJuIHRoaXMubm9ybWFscy5tYXAoKG4pID0+IG0zLnRyYW5zZm9ybVBvaW50KHRoaXMuUm1hdHJpeCwgbikpO1xyXG4gIH1cclxuICBnZXRBQUJCKCkge1xyXG4gICAgY29uc3QgbWF4WCA9IHRoaXMuc3VwcG9ydCh4QXhpcylbMF07XHJcbiAgICBjb25zdCBtYXhZID0gdGhpcy5zdXBwb3J0KHlBeGlzKVsxXTtcclxuICAgIGNvbnN0IG1heFogPSB0aGlzLnN1cHBvcnQoekF4aXMpWzJdO1xyXG5cclxuICAgIGNvbnN0IG1pblggPSB0aGlzLnN1cHBvcnQoeEF4aXNOZWdhdGl2ZSlbMF07XHJcbiAgICBjb25zdCBtaW5ZID0gdGhpcy5zdXBwb3J0KHlBeGlzTmVnYXRpdmUpWzFdO1xyXG4gICAgY29uc3QgbWluWiA9IHRoaXMuc3VwcG9ydCh6QXhpc05lZ2F0aXZlKVsyXTtcclxuICAgIHJldHVybiBuZXcgQUFCQihbbWluWCwgbWluWSwgbWluWl0sIFttYXhYLCBtYXhZLCBtYXhaXSk7XHJcbiAgfVxyXG4gIHRyYW5zbGF0ZSh0KSB7XHJcbiAgICB0aGlzLnBvcyA9IHN1bSh0aGlzLnBvcywgdCk7XHJcbiAgfVxyXG4gIHJvdGF0ZShyKSB7XHJcbiAgICB0aGlzLlJtYXRyaXggPSBtMy54Um90YXRlKHRoaXMuUm1hdHJpeCwgclswXSk7XHJcbiAgICB0aGlzLlJtYXRyaXggPSBtMy55Um90YXRlKHRoaXMuUm1hdHJpeCwgclsxXSk7XHJcbiAgICB0aGlzLlJtYXRyaXggPSBtMy56Um90YXRlKHRoaXMuUm1hdHJpeCwgclsyXSk7XHJcblxyXG4gICAgdGhpcy5SbWF0cml4SW52ZXJzZSA9IG0zLnRyYW5zcG9zZSh0aGlzLlJtYXRyaXgpO1xyXG4gIH1cclxuICBzZXRSbWF0cml4KG1hdHJpeCkge1xyXG4gICAgY29uc29sZS5sb2codGhpcy5SbWF0cml4KVxyXG4gICAgdGhpcy5SbWF0cml4ID0gWy4uLm1hdHJpeF07XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLlJtYXRyaXgpXHJcbiAgICB0aGlzLlJtYXRyaXhJbnZlcnNlID0gbTMudHJhbnNwb3NlKG1hdHJpeCk7XHJcbiAgfVxyXG4gIHNldFRSTWF0cml4KG0pe1xyXG4gICAgY29uc3Qgcm0gPSBtNC5tNFRvbTMobSlcclxuICAgIHRoaXMuc2V0Um1hdHJpeChtKVxyXG4gICAgY29uc3QgcG9zID0gW21bMTJdLCBtWzEzXSwgbVsxNF1dXHJcbiAgICB0aGlzLnRyYW5zbGF0ZShwb3MpXHJcbiAgfVxyXG4gIHNldFRSUyhtKXtcclxuICAgIGNvbnN0IHt0cmFuc2xhdGlvbiwgUm1hdHJpeCwgc2NhbGUgfSA9IG00LmRlY29tcG9zZShtKVxyXG4gICAgdGhpcy5zZXRUcmFuc2xhdGlvbih0cmFuc2xhdGlvbilcclxuICAgIHRoaXMuc2V0Um1hdHJpeChtNC5tNFRvbTMoUm1hdHJpeCkpXHJcbiAgICB0aGlzLnNldFNjYWxlKHNjYWxlKVxyXG4gICAgY29uc29sZS5sb2codHJhbnNsYXRpb24sIFJtYXRyaXgsIHNjYWxlIClcclxuICB9XHJcbiAgc3VwcG9ydChkaXIpIHtcclxuICAgIGNvbnN0IF9kaXIgPSBtMy50cmFuc2Zvcm1Qb2ludCh0aGlzLlJtYXRyaXhJbnZlcnNlLCBkaXIpO1xyXG5cclxuICAgIGNvbnN0IHJlcyA9IFswLCAwLCAwXTtcclxuXHJcbiAgICByZXNbMF0gPSBfZGlyWzBdID4gMCA/IHRoaXMubWF4WzBdIDogdGhpcy5taW5bMF07XHJcbiAgICByZXNbMV0gPSBfZGlyWzFdID4gMCA/IHRoaXMubWF4WzFdIDogdGhpcy5taW5bMV07XHJcbiAgICByZXNbMl0gPSBfZGlyWzJdID4gMCA/IHRoaXMubWF4WzJdIDogdGhpcy5taW5bMl07XHJcblxyXG4gICAgY29uc3Qgc3VwID0gbTMudHJhbnNmb3JtUG9pbnQodGhpcy5SbWF0cml4LCByZXMpO1xyXG5cclxuICAgIHJldHVybiBzdW0oc3VwLCB0aGlzLnBvcyk7XHJcbiAgfVxyXG4gIGdldEludmVyc2VJbmVydGlhVGVuc29yKG1hc3MpIHtcclxuICAgIGNvbnN0IGkxID1cclxuICAgICAgKG1hc3MgLyAxMikgKiAodGhpcy5tYXhbMV0gKiB0aGlzLm1heFsxXSArIHRoaXMubWF4WzJdICogdGhpcy5tYXhbMl0pO1xyXG4gICAgY29uc3QgaTIgPVxyXG4gICAgICAobWFzcyAvIDEyKSAqICh0aGlzLm1heFswXSAqIHRoaXMubWF4WzBdICsgdGhpcy5tYXhbMl0gKiB0aGlzLm1heFsyXSk7XHJcbiAgICBjb25zdCBpMyA9XHJcbiAgICAgIChtYXNzIC8gMTIpICogKHRoaXMubWF4WzBdICogdGhpcy5tYXhbMF0gKyB0aGlzLm1heFsxXSAqIHRoaXMubWF4WzFdKTtcclxuXHJcbiAgICBjb25zdCBtID0gbmV3IEZsb2F0MzJBcnJheShbMSAvIGkxLCAwLCAwLCAwLCAxIC8gaTIsIDAsIDAsIDAsIDEgLyBpM10pO1xyXG5cclxuICAgIHJldHVybiBtMy5tdWx0aXBseShtMy5tdWx0aXBseSh0aGlzLlJtYXRyaXgsIG0pLCB0aGlzLlJtYXRyaXhJbnZlcnNlKTtcclxuICB9XHJcbiAgZ2V0TTQoKSB7XHJcbiAgICBjb25zdCBtID0gbTQubTNUb200KHRoaXMuUm1hdHJpeCk7XHJcbiAgICBtWzEyXSA9IHRoaXMucG9zWzBdO1xyXG4gICAgbVsxM10gPSB0aGlzLnBvc1sxXTtcclxuICAgIG1bMTRdID0gdGhpcy5wb3NbMl07XHJcbiAgICBtWzE1XSA9IDE7XHJcbiAgICBjb25zdCBzY2FsZSA9IGRpZmYodGhpcy5tYXgsIHRoaXMubWluKVxyXG4gICAgcmV0dXJuIG00LnNjYWxlKG0sIC4uLnNjYWxlKVxyXG4gIH1cclxuICBcclxuICBsb2NhbFRvR2xvYmFsKHYpIHtcclxuICAgIGxldCBnbG9iYWwgPSBtMy50cmFuc2Zvcm1Qb2ludCh0aGlzLlJtYXRyaXgsIHYpO1xyXG4gICAgcmV0dXJuIHN1bSh0aGlzLnBvcywgZ2xvYmFsKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IEJveCB9O1xyXG4iLCJpbXBvcnQgeyB2ZWN0b3IsIG0zIH0gZnJvbSBcIm1hdGhcIjtcclxuaW1wb3J0IHsgR2F1c3NTZWlkZWwgfSBmcm9tIFwiLi9HU3NvbHZlclwiO1xyXG5cclxuY29uc3QgeyBzdW0sIGRpZmYsIHNjYWxlLCBjcm9zcywgZG90LCBub3JtYWxpemUsIG5vcm0sIG5vcm1TcSB9ID0gdmVjdG9yO1xyXG5cclxuY29uc3QgdG9sID0gMC4wMTtcclxuY29uc3QgdG9sMiA9IDAuMDAwMDE7XHJcbmNvbnN0IG51bUl0ZXJhdGlvbnMgPSAxO1xyXG5jb25zdCBudW1Qb3NJdGVyYXRpb25zID0gMTtcclxuXHJcbmNvbnN0IGNsYW1wID0gKHYsIG1pbiwgbWF4KSA9PiB7XHJcbiAgaWYgKHYgPiBtaW4pIHtcclxuICAgIGlmICh2IDwgbWF4KSByZXR1cm4gdjtcclxuICAgIGVsc2UgcmV0dXJuIG1heDtcclxuICB9XHJcbiAgcmV0dXJuIG1pbjtcclxufTtcclxuXHJcbmNvbnN0IGdldE1hbmlmb2xkU3lzdGVtID0gKG1hbmlmb2xkKSA9PiB7XHJcbiAgY29uc3QgYm9keTEgPSBtYW5pZm9sZC5ib2R5MTtcclxuICBjb25zdCBib2R5MiA9IG1hbmlmb2xkLmJvZHkyO1xyXG5cclxuICBjb25zdCBNMSA9IGJvZHkxLmludmVyc2VNYXNzO1xyXG4gIGNvbnN0IEkxID0gYm9keTEuaW52ZXJzZUluZXJ0aWE7XHJcbiAgY29uc3QgTTIgPSBib2R5Mi5pbnZlcnNlTWFzcztcclxuICBjb25zdCBJMiA9IGJvZHkyLmludmVyc2VJbmVydGlhO1xyXG4gIGNvbnN0IGNvbnRhY3RzID0gbWFuaWZvbGQuY29udGFjdHM7XHJcbiAgbGV0IG4gPSBjb250YWN0cy5sZW5ndGg7XHJcbiAgbGV0IEEgPSBbXTtcclxuICBjb25zdCBKViA9IFtdO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XHJcbiAgICBjb25zdCByb3dOdW0gPSBpICogbjtcclxuICAgIGNvbnN0IEpNID0gW1xyXG4gICAgICBzY2FsZShjb250YWN0c1tpXS5KWzBdLCBNMSksXHJcbiAgICAgIG0zLnRyYW5zZm9ybVBvaW50KEkxLCBjb250YWN0c1tpXS5KWzFdKSxcclxuICAgICAgc2NhbGUoY29udGFjdHNbaV0uSlsyXSwgTTIpLFxyXG4gICAgICBtMy50cmFuc2Zvcm1Qb2ludChJMiwgY29udGFjdHNbaV0uSlszXSksXHJcbiAgICBdO1xyXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBuOyBqKyspIHtcclxuICAgICAgaWYgKGkgPT09IGopIHtcclxuICAgICAgICBBW3Jvd051bSArIGpdID0gY29udGFjdHNbaV0uZWZmTWFzcztcclxuICAgICAgICBjb250aW51ZTtcclxuICAgICAgfVxyXG4gICAgICBBW3Jvd051bSArIGpdID1cclxuICAgICAgICBkb3QoSk1bMF0sIGNvbnRhY3RzW2pdLkpbMF0pICtcclxuICAgICAgICBkb3QoSk1bMV0sIGNvbnRhY3RzW2pdLkpbMV0pICtcclxuICAgICAgICBkb3QoSk1bMl0sIGNvbnRhY3RzW2pdLkpbMl0pICtcclxuICAgICAgICBkb3QoSk1bM10sIGNvbnRhY3RzW2pdLkpbM10pO1xyXG4gICAgfVxyXG4gICAgSlYucHVzaChcclxuICAgICAgLWRvdChjb250YWN0c1tpXS5KWzBdLCBib2R5MS52ZWxvY2l0eSkgLVxyXG4gICAgICAgIGRvdChjb250YWN0c1tpXS5KWzFdLCBib2R5MS5hbmd1bGFyVikgLVxyXG4gICAgICAgIGRvdChjb250YWN0c1tpXS5KWzJdLCBib2R5Mi52ZWxvY2l0eSkgLVxyXG4gICAgICAgIGRvdChjb250YWN0c1tpXS5KWzNdLCBib2R5Mi5hbmd1bGFyVilcclxuICAgICk7XHJcbiAgfVxyXG4gIHJldHVybiB7IEEsIEpWIH07XHJcbn07XHJcbmNvbnN0IGJsb2NrU29sdmVyID0gKG1hbmlmb2xkLCBkZWx0YVRpbWUpID0+IHtcclxuICBjb25zdCBib2R5MSA9IG1hbmlmb2xkLmJvZHkxO1xyXG4gIGNvbnN0IGJvZHkyID0gbWFuaWZvbGQuYm9keTI7XHJcblxyXG4gIGNvbnN0IGNvbnRhY3RzID0gbWFuaWZvbGQuY29udGFjdHM7XHJcbiAgbGV0IG4gPSBjb250YWN0cy5sZW5ndGg7XHJcblxyXG4gIGNvbnN0IHsgQSwgSlYgfSA9IGdldE1hbmlmb2xkU3lzdGVtKG1hbmlmb2xkKTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xyXG4gICAgLy8gSlZbaV0gKz0gTWF0aC5tYXgoMCxjb250YWN0c1tpXS5wZW5EZXB0aC10b2wpL2RlbHRhVGltZSAqIDAuMjVcclxuICB9XHJcbiAgY29uc3QgbGFtYmRhID0gR2F1c3NTZWlkZWwoQSwgSlYsIG4sIDAuMDAwMDAxKTtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHtcclxuICAgIGJvZHkxLmFwcGx5SW1wdWxzZShzY2FsZShjb250YWN0c1tpXS5KWzBdLCBsYW1iZGFbaV0pLCBjb250YWN0c1tpXS5yYSk7XHJcbiAgICBib2R5Mi5hcHBseUltcHVsc2Uoc2NhbGUoY29udGFjdHNbaV0uSlsyXSwgbGFtYmRhW2ldKSwgY29udGFjdHNbaV0ucmIpO1xyXG4gIH1cclxuICByZXR1cm4gbGFtYmRhO1xyXG59O1xyXG5jb25zdCBmcmljdGlvblNvbHZlciA9IChjb250YWN0LCBsYW1iZGEsIGJvZHkxLCBib2R5MikgPT4ge1xyXG4gIGNvbnRhY3QucmVsVmVsb2NpdHkgPSBzdW0oYm9keTIudmVsb2NpdHksIGNyb3NzKGJvZHkyLmFuZ3VsYXJWLCBjb250YWN0LnJiKSk7XHJcbiAgY29udGFjdC5yZWxWZWxvY2l0eSA9IGRpZmYoY29udGFjdC5yZWxWZWxvY2l0eSwgYm9keTEudmVsb2NpdHkpO1xyXG4gIGNvbnRhY3QucmVsVmVsb2NpdHkgPSBkaWZmKFxyXG4gICAgY29udGFjdC5yZWxWZWxvY2l0eSxcclxuICAgIGNyb3NzKGJvZHkxLmFuZ3VsYXJWLCBjb250YWN0LnJhKVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IG11ID0gYm9keTEuZnJpY3Rpb24gKyBib2R5MS5mcmljdGlvbjtcclxuICBsZXQgZkltcHVsc2UxID0gLWRvdChjb250YWN0LnJlbFZlbG9jaXR5LCBjb250YWN0LmZEaXIxKSAvIGNvbnRhY3QuZkVmZk1hc3MxO1xyXG4gIGZJbXB1bHNlMSA9IGNsYW1wKGZJbXB1bHNlMSwgLWxhbWJkYSAqIG11LCBsYW1iZGEgKiBtdSk7XHJcblxyXG4gIGxldCBmSW1wdWxzZTIgPSAtZG90KGNvbnRhY3QucmVsVmVsb2NpdHksIGNvbnRhY3QuZkRpcjIpIC8gY29udGFjdC5mRWZmTWFzczI7XHJcbiAgZkltcHVsc2UyID0gY2xhbXAoZkltcHVsc2UyLCAtbGFtYmRhICogbXUsIGxhbWJkYSAqIG11KTtcclxuXHJcbiAgY29udGFjdC5hY2NGSTEgKz0gZkltcHVsc2UxO1xyXG4gIGNvbnRhY3QuYWNjRkkyICs9IGZJbXB1bHNlMjtcclxuXHJcbiAgbGV0IGZWZWMgPSBzdW0oXHJcbiAgICBzY2FsZShjb250YWN0LmZEaXIxLCBmSW1wdWxzZTEpLFxyXG4gICAgc2NhbGUoY29udGFjdC5mRGlyMiwgZkltcHVsc2UyKVxyXG4gICk7XHJcblxyXG4gIGJvZHkxLmFwcGx5SW1wdWxzZShzY2FsZShmVmVjLCAtMSksIGNvbnRhY3QucmEpO1xyXG4gIGJvZHkyLmFwcGx5SW1wdWxzZShmVmVjLCBjb250YWN0LnJiKTtcclxufTtcclxuZnVuY3Rpb24gc29sdmVDb2xsaXNpb24obWFuaWZvbGQsIGRlbHRhVGltZSkge1xyXG4gIGNvbnN0IGJvZHkxID0gbWFuaWZvbGQuYm9keTE7XHJcbiAgY29uc3QgYm9keTIgPSBtYW5pZm9sZC5ib2R5MjtcclxuICBjb25zdCBjb250YWN0cyA9IG1hbmlmb2xkLmNvbnRhY3RzO1xyXG4gIGlmIChjb250YWN0cy5sZW5ndGggPiAxKSB7XHJcbiAgICBjb25zdCBsYW1iZGEgPSBibG9ja1NvbHZlcihtYW5pZm9sZCwgZGVsdGFUaW1lKTtcclxuICAgIGNvbnN0IG4gPSBsYW1iZGEubGVuZ3RoO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHtcclxuICAgICAgZnJpY3Rpb25Tb2x2ZXIoY29udGFjdHNbaV0sIGxhbWJkYVtpXSwgYm9keTEsIGJvZHkyKTtcclxuICAgIH1cclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgZm9yIChsZXQgaiA9IDA7IGogPCBudW1JdGVyYXRpb25zOyBqKyspIHtcclxuICAgIGZvciAobGV0IGkgPSAwLCBuID0gbWFuaWZvbGQuY29udGFjdHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGNvbnRhY3QgPSBtYW5pZm9sZC5jb250YWN0c1tpXTtcclxuICAgICAgY29uc3QgazIgPSBjb250YWN0LmVmZk1hc3M7XHJcblxyXG4gICAgICBpZiAoY29udGFjdC5wZW5EZXB0aCA8PSAwKSByZXR1cm47XHJcblxyXG4gICAgICBjb250YWN0LnJlbFZlbG9jaXR5ID0gc3VtKFxyXG4gICAgICAgIGJvZHkyLnZlbG9jaXR5LFxyXG4gICAgICAgIGNyb3NzKGJvZHkyLmFuZ3VsYXJWLCBjb250YWN0LnJiKVxyXG4gICAgICApO1xyXG4gICAgICBjb250YWN0LnJlbFZlbG9jaXR5ID0gZGlmZihjb250YWN0LnJlbFZlbG9jaXR5LCBib2R5MS52ZWxvY2l0eSk7XHJcbiAgICAgIGNvbnRhY3QucmVsVmVsb2NpdHkgPSBkaWZmKFxyXG4gICAgICAgIGNvbnRhY3QucmVsVmVsb2NpdHksXHJcbiAgICAgICAgY3Jvc3MoYm9keTEuYW5ndWxhclYsIGNvbnRhY3QucmEpXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IFZjID0gZG90KGNvbnRhY3QucmVsVmVsb2NpdHksIGNvbnRhY3Qubik7XHJcbiAgICAgIGNvbnN0IHJlc3RpdHV0aW9uID0gTWF0aC5tYXgoVmMgLSB0b2wyLCAwKSAqIDAuMTtcclxuICAgICAgbGV0IGIgPSAoTWF0aC5tYXgoMCwgY29udGFjdC5wZW5EZXB0aCAtIHRvbCkgLyBkZWx0YVRpbWUpICogMC4yNTtcclxuXHJcbiAgICAgIGxldCBsYW1iZGEgPSAtVmMgLyBjb250YWN0LmVmZk1hc3M7XHJcbiAgICAgIGxldCBvbGRBY2MgPSBjb250YWN0LmFjY0k7XHJcbiAgICAgIGNvbnRhY3QuYWNjSSArPSBsYW1iZGE7XHJcbiAgICAgIGlmIChjb250YWN0LmFjY0kgPCAwKSBjb250YWN0LmFjY0kgPSAwO1xyXG4gICAgICBsYW1iZGEgPSBjb250YWN0LmFjY0kgLSBvbGRBY2M7XHJcblxyXG4gICAgICBib2R5MS5hcHBseUltcHVsc2Uoc2NhbGUoY29udGFjdC5uLCAtbGFtYmRhKSwgY29udGFjdC5yYSk7XHJcbiAgICAgIGJvZHkyLmFwcGx5SW1wdWxzZShzY2FsZShjb250YWN0Lm4sIGxhbWJkYSksIGNvbnRhY3QucmIpO1xyXG4gICAgICBmcmljdGlvblNvbHZlcihjb250YWN0LCBsYW1iZGEsIGJvZHkxLCBib2R5Mik7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBzb2x2ZUNvbnN0cmFpbnQgPSAoY29uc3RyYWludCwgZGVsdGFUaW1lKSA9PiB7XHJcbiAgY29uc3QgcmEgPSBjb25zdHJhaW50LmJvZHkxLmNvbGxpZGVyLmxvY2FsVG9HbG9iYWwoY29uc3RyYWludC5yYSk7XHJcbiAgY29uc3QgcmIgPSBjb25zdHJhaW50LmJvZHkyLmNvbGxpZGVyLmxvY2FsVG9HbG9iYWwoY29uc3RyYWludC5yYik7XHJcbiAgY29uc3QgbiA9IGNvbnN0cmFpbnQubjtcclxuXHJcbiAgaWYgKGNvbnN0cmFpbnQuZGlzdCA8IDAuMDEpIHJldHVybjtcclxuICBjb25zdCBub3JtYWwgPSBzY2FsZShjb25zdHJhaW50Lm4sIDEgLyBjb25zdHJhaW50LmRpc3QpO1xyXG4gIGxldCB2MSA9IHN1bShcclxuICAgIGNvbnN0cmFpbnQuYm9keTEudmVsb2NpdHksXHJcbiAgICBjcm9zcyhjb25zdHJhaW50LmJvZHkxLmFuZ3VsYXJWLCBjb25zdHJhaW50LnJhKVxyXG4gICk7XHJcbiAgbGV0IHYyID0gc3VtKFxyXG4gICAgY29uc3RyYWludC5ib2R5Mi52ZWxvY2l0eSxcclxuICAgIGNyb3NzKGNvbnN0cmFpbnQuYm9keTIuYW5ndWxhclYsIGNvbnN0cmFpbnQucmIpXHJcbiAgKTtcclxuICBsZXQgcmVsVmVsb2NpdHkgPSBkaWZmKHYyLCB2MSk7XHJcblxyXG4gIGNvbnN0IFZjID0gZG90KHJlbFZlbG9jaXR5LCBub3JtYWwpO1xyXG4gIGxldCBiID0gKGNvbnN0cmFpbnQuZGlzdCAvIGRlbHRhVGltZSkgKiAwLjI7XHJcbiAgY29uc3Qgc29mdG5lc3MgPSAyO1xyXG4gIGxldCBsYW1iZGEgPSAtVmMgLyBjb25zdHJhaW50LmVmZk1hc3M7XHJcblxyXG4gIGNvbnN0cmFpbnQuYm9keTEuYXBwbHlJbXB1bHNlKHNjYWxlKG5vcm1hbCwgLWxhbWJkYSksIGNvbnN0cmFpbnQucmEpO1xyXG4gIGNvbnN0cmFpbnQuYm9keTIuYXBwbHlJbXB1bHNlKHNjYWxlKG5vcm1hbCwgbGFtYmRhKSwgY29uc3RyYWludC5yYik7XHJcbn07XHJcblxyXG5jb25zdCBzb2x2ZVBvc2l0aW9uID0gKGNvbnN0cmFpbnQsIGRlbHRhVGltZSkgPT4ge1xyXG4gIGlmIChjb25zdHJhaW50LmRpc3QgPCAwLjAxKSByZXR1cm47XHJcbiAgY29uc3Qgbm9ybWFsID0gc2NhbGUoY29uc3RyYWludC5uLCAxIC8gY29uc3RyYWludC5kaXN0KTtcclxuICBsZXQgdjEgPSBzdW0oXHJcbiAgICBjb25zdHJhaW50LmJvZHkxLnBzZXVkb1ZlbG9jaXR5LFxyXG4gICAgY3Jvc3MoY29uc3RyYWludC5ib2R5MS5wc2V1ZG9Bbmd1bGFyViwgY29uc3RyYWludC5yYSlcclxuICApO1xyXG4gIGxldCB2MiA9IHN1bShcclxuICAgIGNvbnN0cmFpbnQuYm9keTIucHNldWRvVmVsb2NpdHksXHJcbiAgICBjcm9zcyhjb25zdHJhaW50LmJvZHkyLnBzZXVkb0FuZ3VsYXJWLCBjb25zdHJhaW50LnJiKVxyXG4gICk7XHJcbiAgbGV0IHJlbFZlbG9jaXR5ID0gZGlmZihcclxuICAgIGNvbnN0cmFpbnQuYm9keTIucHNldWRvVmVsb2NpdHksXHJcbiAgICBjb25zdHJhaW50LmJvZHkxLnBzZXVkb1ZlbG9jaXR5XHJcbiAgKTtcclxuXHJcbiAgY29uc3QgVmMgPSBkb3QocmVsVmVsb2NpdHksIG5vcm1hbCk7XHJcblxyXG4gIGxldCBiID0gTWF0aC5tYXgoMCwgY29uc3RyYWludC5kaXN0IC8gZGVsdGFUaW1lIC0gMC4wMSk7XHJcbiAgY29uc3Qgc29mdG5lc3MgPSAyO1xyXG4gIGxldCBsYW1iZGEgPVxyXG4gICAgKGIgLSBWYykgLyAoY29uc3RyYWludC5ib2R5MS5pbnZlcnNlTWFzcyArIGNvbnN0cmFpbnQuYm9keTIuaW52ZXJzZU1hc3MpO1xyXG5cclxuICBpZiAoTWF0aC5hYnMobGFtYmRhKSA8IDAuMSkgcmV0dXJuO1xyXG5cclxuICBjb25zdHJhaW50LmJvZHkxLmFwcGx5UHNldWRvSW1wdWxzZShzY2FsZShub3JtYWwsIC1sYW1iZGEpLCBbMCwgMCwgMF0pO1xyXG4gIGNvbnN0cmFpbnQuYm9keTIuYXBwbHlQc2V1ZG9JbXB1bHNlKHNjYWxlKG5vcm1hbCwgbGFtYmRhKSwgWzAsIDAsIDBdKTtcclxufTtcclxuXHJcbmNvbnN0IHNvbHZlQ29udGFjdFBvc2l0aW9uRXJyID0gKGNvbnRhY3QsIGRlbHRhVGltZSwgbikgPT4ge1xyXG4gIGlmIChjb250YWN0LnBlbkRlcHRoIDwgMC4wMSkgcmV0dXJuO1xyXG5cclxuICBsZXQgdjEgPSBzdW0oXHJcbiAgICBjb250YWN0LmJvZHkxLnBzZXVkb1ZlbG9jaXR5LFxyXG4gICAgY3Jvc3MoY29udGFjdC5ib2R5MS5wc2V1ZG9Bbmd1bGFyViwgY29udGFjdC5yYSlcclxuICApO1xyXG4gIGxldCB2MiA9IHN1bShcclxuICAgIGNvbnRhY3QuYm9keTIucHNldWRvVmVsb2NpdHksXHJcbiAgICBjcm9zcyhjb250YWN0LmJvZHkyLnBzZXVkb0FuZ3VsYXJWLCBjb250YWN0LnJiKVxyXG4gICk7XHJcbiAgbGV0IHJlbFZlbG9jaXR5ID0gZGlmZih2MiwgdjEpO1xyXG5cclxuICBjb25zdCBWYyA9IGRvdChyZWxWZWxvY2l0eSwgY29udGFjdC5uKTtcclxuICAvL2lmKFZjIDwgMClyZXR1cm5cclxuXHJcbiAgbGV0IGIgPSBjb250YWN0LnBlbkRlcHRoIC8gZGVsdGFUaW1lIC8gbjtcclxuICAvL2lmKFZjID49IGIpIHJldHVyblxyXG4gIGxldCBsYW1iZGEgPVxyXG4gICAgKGIgLSBWYykgLyAoY29udGFjdC5ib2R5MS5pbnZlcnNlTWFzcyArIGNvbnRhY3QuYm9keTIuaW52ZXJzZU1hc3MpO1xyXG5cclxuICBjb250YWN0LnBlbkRlcHRoID0gMDtcclxuXHJcbiAgLy9pZihNYXRoLmFicyhsYW1iZGEpIDwgMC4xKXJldHVyblxyXG5cclxuICBjb250YWN0LmJvZHkxLmFwcGx5UHNldWRvSW1wdWxzZShzY2FsZShjb250YWN0Lm4sIC1sYW1iZGEpLCBbMCwgMCwgMF0pO1xyXG4gIGNvbnRhY3QuYm9keTIuYXBwbHlQc2V1ZG9JbXB1bHNlKHNjYWxlKGNvbnRhY3QubiwgbGFtYmRhKSwgWzAsIDAsIDBdKTtcclxufTtcclxuZXhwb3J0IHsgc29sdmVDb2xsaXNpb24sIHNvbHZlUG9zaXRpb24sIHNvbHZlQ29udGFjdFBvc2l0aW9uRXJyIH07XHJcbiIsImltcG9ydCB7IHZlY3RvciwgbTMgfSBmcm9tIFwibWF0aFwiO1xyXG5cclxuY29uc3QgeyBkb3QsIGNyb3NzLCBub3JtYWxpemUsIGRpZmYsIHNjYWxlLCBub3JtLCBzdW0sIG5vcm1TcSB9ID0gdmVjdG9yO1xyXG5jb25zdCBjbGFtcCA9ICh2LCBtaW4sIG1heCkgPT4ge1xyXG4gIGlmICh2ID4gbWluKSB7XHJcbiAgICBpZiAodiA8IG1heCkgcmV0dXJuIHY7XHJcbiAgICBlbHNlIHJldHVybiBtYXg7XHJcbiAgfVxyXG4gIHJldHVybiBtaW47XHJcbn07XHJcbmNsYXNzIENvbnN0cmFpbnR7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBib2R5MSxcclxuICAgIGJvZHkyLFxyXG4gICAgbixcclxuICAgIHJhLFxyXG4gICAgcmIsXHJcbiAgICByYUxvY2FsLFxyXG4gICAgcmJMb2NhbCxcclxuICAgIGJpYXNGYWN0b3IsXHJcbiAgICBsYW1iZGFNaW4gPSAtSW5maW5pdHksXHJcbiAgICBsYW1iZGFNYXggPSBJbmZpbml0eSxcclxuICAgIHRyZXNob2xkID0gMC4wMDAxXHJcbiAgKXtcclxuICAgIHRoaXMuYmlhc0ZhY3RvciA9IGJpYXNGYWN0b3I7XHJcbiAgICB0aGlzLm4gPSBuO1xyXG4gICAgdGhpcy5KID0gbnVsbDtcclxuICAgIFxyXG4gICAgdGhpcy5KTSA9IG51bGw7XHJcbiAgICB0aGlzLkIgPSBudWxsXHJcbiAgICB0aGlzLmJvZHkxID0gYm9keTE7XHJcbiAgICB0aGlzLmJvZHkyID0gYm9keTI7XHJcbiAgICB0aGlzLnJhID0gcmE7XHJcbiAgICB0aGlzLnJiID0gcmI7XHJcbiAgICB0aGlzLnJhTG9jYWwgPSByYUxvY2FsXHJcbiAgICB0aGlzLnJiTG9jYWwgPSByYkxvY2FsXHJcbiAgICB0aGlzLnRyZXNob2xkID0gdHJlc2hvbGRcclxuICAgIHRoaXMubGFtYmRhQWNjID0gMFxyXG4gICAgdGhpcy5sYW1iZGFNaW4gPSBsYW1iZGFNaW5cclxuICAgIHRoaXMubGFtYmRhTWF4ID0gbGFtYmRhTWF4XHJcbiAgfVxyXG4gIHVwZGF0ZUxlZnRQYXJ0KGRlbHRhVGltZSkge1xyXG4gICAgY29uc3QgeyBib2R5MSwgYm9keTIsIG4sIHJhLCByYiB9ID0gdGhpcztcclxuICAgIHRoaXMuSiA9IFtzY2FsZShuLCAtMSksIGNyb3NzKG4sIHJhKSwgbiwgY3Jvc3MocmIsIG4pXTtcclxuXHJcbiAgICBjb25zdCBJMSA9IGJvZHkxLmludmVyc2VJbmVydGlhO1xyXG4gICAgY29uc3QgSTIgPSBib2R5Mi5pbnZlcnNlSW5lcnRpYTtcclxuICAgIGxldCBNMSA9IGJvZHkxLmludmVyc2VNYXNzO1xyXG4gICAgbGV0IE0yID0gYm9keTIuaW52ZXJzZU1hc3M7XHJcbiAgICB0aGlzLkpNID0gW1xyXG4gICAgICBzY2FsZSh0aGlzLkpbMF0sIE0xKSxcclxuICAgICAgbTMudHJhbnNmb3JtUG9pbnQoSTEsIHRoaXMuSlsxXSksXHJcbiAgICAgIHNjYWxlKHRoaXMuSlsyXSwgTTIpLFxyXG4gICAgICBtMy50cmFuc2Zvcm1Qb2ludChJMiwgdGhpcy5KWzNdKSxcclxuICAgIF07XHJcblxyXG4gICAgaWYoYm9keTEuc3RhdGljKSB7XHJcbiAgICAgIHRoaXMuSk1bMF0gPSBbMCwwLDBdXHJcbiAgICAgIHRoaXMuSk1bMV0gPSBbMCwwLDBdXHJcbiAgICAgIHRoaXMuSlswXSA9IFswLDAsMF1cclxuICAgICAgdGhpcy5KWzFdID0gWzAsMCwwXVxyXG4gICAgICBcclxuICAgIH1cclxuICAgIGlmKGJvZHkxLnN0YXRpYykge1xyXG4gICAgICB0aGlzLkpNWzJdID0gWzAsMCwwXVxyXG4gICAgICB0aGlzLkpNWzNdID0gWzAsMCwwXVxyXG4gICAgICB0aGlzLkpbMl0gPSBbMCwwLDBdXHJcbiAgICAgIHRoaXMuSlszXSA9IFswLDAsMF1cclxuICAgICAgXHJcbiAgICB9XHJcbiAgICAvL0pNSiogPSBKQjtCID0gTUoqXHJcbiAgICB0aGlzLkIgPSBbXHJcbiAgICAgIFsuLi50aGlzLkpNWzBdLCAuLi50aGlzLkpNWzFdXSxcclxuICAgICAgWy4uLnRoaXMuSk1bMl0sIC4uLnRoaXMuSk1bM11dXHJcbiAgICBdXHJcbiAgICB0aGlzLmVmZk1hc3MgPVxyXG4gICAgICBNMSArIGRvdCh0aGlzLkpNWzBdLCB0aGlzLkpbMV0pICsgTTIgKyBkb3QodGhpcy5KTVszXSwgdGhpcy5KWzNdKTtcclxuXHJcbiAgfVxyXG4gIFxyXG59XHJcblxyXG5cclxuY2xhc3MgQ29udGFjdENvbnN0cmFpbnQgZXh0ZW5kcyBDb25zdHJhaW50IHtcclxuICBjb25zdHJ1Y3Rvcihib2R5MSxcclxuICAgIGJvZHkyLFxyXG4gICAgbixcclxuICAgIHJhLFxyXG4gICAgcmIsXHJcbiAgICByYUxvY2FsLFxyXG4gICAgcmJMb2NhbCxcclxuICAgIGJpYXNGYWN0b3IsXHJcbiAgICB0cmVzaG9sZCwgcGVuRGVwdGgpIHtcclxuICAgIHN1cGVyKGJvZHkxLFxyXG4gICAgICBib2R5MixcclxuICAgICAgbixcclxuICAgICAgcmEsXHJcbiAgICAgIHJiLFxyXG4gICAgICByYUxvY2FsLFxyXG4gICAgICByYkxvY2FsLFxyXG4gICAgICBiaWFzRmFjdG9yLFxyXG4gICAgICBudWxsLCBudWxsLFxyXG4gICAgICB0cmVzaG9sZCwpXHJcbiAgICBcclxuXHJcbiAgICBcclxuICAgIHRoaXMucGVuRGVwdGggPSBwZW5EZXB0aFxyXG4gICBcclxuICAgIFxyXG4gIH1cclxuICB1cGRhdGVMZWZ0UGFydChkZWx0YVRpbWUpe1xyXG4gICAgc3VwZXIudXBkYXRlTGVmdFBhcnQoZGVsdGFUaW1lKVxyXG4gICAgdGhpcy5sYW1iZGFNYXggPSBub3JtKFxyXG4gICAgICBkaWZmKFxyXG4gICAgICAgIHNjYWxlKHRoaXMuYm9keTEudmVsb2NpdHksIHRoaXMuYm9keTEubWFzcyksXHJcbiAgICAgICAgc2NhbGUodGhpcy5ib2R5Mi52ZWxvY2l0eSwgdGhpcy5ib2R5Mi5tYXNzKVxyXG4gICAgICApXHJcbiAgICApKjAuNVxyXG4gICAgdGhpcy5sYW1iZGFNaW4gPSAwXHJcbiAgfVxyXG4gIHVwZGF0ZVJpZ2h0UGFydChkZWx0YVRpbWUpe1xyXG4gICAgY29uc3Qge2JvZHkxLCBib2R5MiwgcmEsIHJiLCBuLCBwZW5EZXB0aCwgdHJlc2hvbGQsIGJpYXNGYWN0b3J9ID0gdGhpc1xyXG5cclxuIFxyXG4gICAgY29uc3QgcmVsYXRpdmVWZWxvY2l0eSA9IGRpZmYoXHJcbiAgICAgIHN1bShib2R5Mi52ZWxvY2l0eSwgY3Jvc3MoYm9keTIuYW5ndWxhclYsIHJiKSksXHJcbiAgICAgIHN1bShib2R5MS52ZWxvY2l0eSwgY3Jvc3MoYm9keTEuYW5ndWxhclYsIHJhKSlcclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgcmVsYXRpdmVWZWxvY2l0eU5vcm1hbFByb2plY3Rpb24gPSBkb3QocmVsYXRpdmVWZWxvY2l0eSwgbik7XHJcbiAgICB0aGlzLmJpYXMgPSAoTWF0aC5tYXgoMCwgcGVuRGVwdGggLSB0cmVzaG9sZCkgLyBkZWx0YVRpbWUpICogYmlhc0ZhY3RvclxyXG4gICAgICAgICAgICAgICAtIHJlbGF0aXZlVmVsb2NpdHlOb3JtYWxQcm9qZWN0aW9uIFxyXG4gIH1cclxuICBhcHBseVJlc29sdmluZ0ltcHVsc2UobGFtYmRhKSB7XHJcbiAgIFxyXG4gICAgdGhpcy5ib2R5MS5hcHBseUltcHVsc2Uoc2NhbGUodGhpcy5KWzBdLCBsYW1iZGEpLCB0aGlzLnJhKTtcclxuICAgIHRoaXMuYm9keTIuYXBwbHlJbXB1bHNlKHNjYWxlKHRoaXMuSlsyXSwgbGFtYmRhKSwgdGhpcy5yYik7XHJcbiBcclxuICB9XHJcbiAgYXBwbHlSZXNvbHZpbmdQc2V1ZG9JbXB1bHNlKGxhbWJkYSkge1xyXG4gICAgaWYgKGxhbWJkYSA8IDApIHJldHVybjtcclxuICAgIGNvbnN0IG1heCA9IHRoaXMuZWZmTWFzcyAqIDEwO1xyXG4gICAgLy8gbGFtYmRhID0gTWF0aC5tYXgoTWF0aC5taW4oMTAwLCBsYW1iZGEpLSAwLjEsMClcclxuICAgIHRoaXMuYm9keTEuYXBwbHlQc2V1ZG9JbXB1bHNlKHNjYWxlKHRoaXMuSlswXSwgbGFtYmRhKSwgdGhpcy5yYSk7XHJcbiAgICB0aGlzLmJvZHkyLmFwcGx5UHNldWRvSW1wdWxzZShzY2FsZSh0aGlzLkpbMl0sIGxhbWJkYSksIHRoaXMucmIpO1xyXG4gIH1cclxufVxyXG5cclxuY2xhc3MgRnJpY3Rpb25Db25zdHJhaW50IGV4dGVuZHMgQ29uc3RyYWludHtcclxuICB1cGRhdGVSaWdodFBhcnQoZGVsdGFUaW1lKXtcclxuICAgIGNvbnN0IHtib2R5MSwgYm9keTIsIHJhLCByYiwgbn0gPSB0aGlzIFxyXG4gICAgY29uc3QgcmVsYXRpdmVWZWxvY2l0eSA9IGRpZmYoXHJcbiAgICAgIHN1bShib2R5Mi52ZWxvY2l0eSwgY3Jvc3MoYm9keTIuYW5ndWxhclYsIHJiKSksXHJcbiAgICAgIHN1bShib2R5MS52ZWxvY2l0eSwgY3Jvc3MoYm9keTEuYW5ndWxhclYsIHJhKSlcclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgcmVsYXRpdmVWZWxvY2l0eU5vcm1hbFByb2plY3Rpb24gPSBkb3QocmVsYXRpdmVWZWxvY2l0eSwgbik7XHJcbiAgICB0aGlzLmJpYXMgPSAtIHJlbGF0aXZlVmVsb2NpdHlOb3JtYWxQcm9qZWN0aW9uIFxyXG4gIH1cclxuICBhcHBseVJlc29sdmluZ0ltcHVsc2UobGFtYmRhKSB7XHJcbiAgIFxyXG4gICAgdGhpcy5ib2R5MS5hcHBseUltcHVsc2Uoc2NhbGUodGhpcy5KWzBdLCBsYW1iZGEpLCB0aGlzLnJhKTtcclxuICAgIHRoaXMuYm9keTIuYXBwbHlJbXB1bHNlKHNjYWxlKHRoaXMuSlsyXSwgbGFtYmRhKSwgdGhpcy5yYik7XHJcbiAgfVxyXG59XHJcblxyXG5jbGFzcyBQb3NpdGlvbkNvbnN0cmFpbnQgZXh0ZW5kcyBDb25zdHJhaW50e1xyXG4gIGNvbnN0cnVjdG9yKGJvZHkxLCBib2R5MiwgbiwgcmEsIHJiLCByYUxvY2FsLCByYkxvY2FsLCBiaWFzRmFjdG9yLCB0cmVzaG9sZCwgcGVuRGVwdGgpe1xyXG4gICAgc3VwZXIoYm9keTEsIGJvZHkyLCBuLCByYSwgcmIsIHJhTG9jYWwsIHJiTG9jYWwsIGJpYXNGYWN0b3IsIG51bGwsIG51bGwsIHRyZXNob2xkKVxyXG4gICAgdGhpcy5wZW5EZXB0aCA9IHBlbkRlcHRoXHJcbiAgfVxyXG4gIGFwcGx5UmVzb2x2aW5nSW1wdWxzZShsYW1iZGEpe1xyXG4gICAgdGhpcy5ib2R5MS5hcHBseVBzZXVkb0ltcHVsc2Uoc2NhbGUodGhpcy5KWzBdLCBsYW1iZGEpLCB0aGlzLnJhKVxyXG4gICAgdGhpcy5ib2R5Mi5hcHBseVBzZXVkb0ltcHVsc2Uoc2NhbGUodGhpcy5KWzJdLCBsYW1iZGEpLCB0aGlzLnJiKVxyXG4gIH1cclxuICB1cGRhdGVSaWdodFBhcnQoZGVsdGFUaW1lKXtcclxuICAgIGNvbnN0IHtib2R5MSwgYm9keTIsIHJhLCByYiwgbiwgcGVuRGVwdGgsIHRyZXNob2xkLCBiaWFzRmFjdG9yfSA9IHRoaXNcclxuXHJcbiBcclxuICAgIHRoaXMuYmlhcyA9IChNYXRoLm1heCgwLCBwZW5EZXB0aCAtIHRyZXNob2xkKSAvIGRlbHRhVGltZSkgKiBiaWFzRmFjdG9yXHJcbiAgICAgICAgICAgICBcclxuICB9XHJcbn1cclxuXHJcbmNsYXNzIEpvaW50IGV4dGVuZHMgQ29uc3RyYWludCB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBsb2NhbFJhLFxyXG4gICAgbG9jYWxSYixcclxuICAgIGJvZHkxLFxyXG4gICAgYm9keTIsXHJcbiAgICBiaWFzRmFjdG9yID0gMCxcclxuICAgIHBzZXVkb0JpYXNGYWN0b3IgPSAwXHJcbiAgKSB7XHJcbiAgICBzdXBlcih7IGJvZHkxLCBib2R5MiwgYmlhc0ZhY3RvciwgcHNldWRvQmlhc0ZhY3RvciB9KTtcclxuICAgIHRoaXMubG9jYWxSYSA9IGxvY2FsUmE7XHJcbiAgICB0aGlzLmxvY2FsUmIgPSBsb2NhbFJiO1xyXG4gICAgdGhpcy5QQSA9IHRoaXMuYm9keTEuY29sbGlkZXIubG9jYWxUb0dsb2JhbCh0aGlzLmxvY2FsUmEpO1xyXG4gICAgdGhpcy5QQiA9IHRoaXMuYm9keTIuY29sbGlkZXIubG9jYWxUb0dsb2JhbCh0aGlzLmxvY2FsUmIpO1xyXG4gICAgdGhpcy50cmVzaG9sZCA9IDAuMDAxO1xyXG4gICAgdGhpcy5yZWR1Y2VyID0gMC41O1xyXG4gICAgdGhpcy5tYXhJbXB1bHNlID0gMC43O1xyXG4gIH1cclxuICB1cGRhdGVFcSgpIHtcclxuICAgIHRoaXMuUEEgPSB0aGlzLmJvZHkxLmNvbGxpZGVyLmxvY2FsVG9HbG9iYWwodGhpcy5sb2NhbFJhKTtcclxuICAgIHRoaXMuUEIgPSB0aGlzLmJvZHkyLmNvbGxpZGVyLmxvY2FsVG9HbG9iYWwodGhpcy5sb2NhbFJiKTtcclxuICAgIGNvbnN0IGRpciA9IGRpZmYodGhpcy5QQSwgdGhpcy5QQik7XHJcbiAgICB0aGlzLm4gPSBub3JtYWxpemUoZGlyKTtcclxuXHJcbiAgICB0aGlzLnJhID0gZGlmZih0aGlzLlBBLCB0aGlzLmJvZHkxLmNvbGxpZGVyLnBvcyk7XHJcbiAgICB0aGlzLnJiID0gZGlmZih0aGlzLlBCLCB0aGlzLmJvZHkyLmNvbGxpZGVyLnBvcyk7XHJcbiAgICB0aGlzLnBlbkRlcHRoID0gbm9ybShkaXIpO1xyXG5cclxuICAgIHRoaXMuSiA9IFtcclxuICAgICAgc2NhbGUodGhpcy5uLCAtMSksXHJcbiAgICAgIGNyb3NzKHRoaXMubiwgdGhpcy5yYSksXHJcbiAgICAgIHNjYWxlKHRoaXMubiwgMSksXHJcbiAgICAgIGNyb3NzKHRoaXMucmIsIHRoaXMubiksXHJcbiAgICBdO1xyXG4gICAgY29uc3QgSTEgPSB0aGlzLmJvZHkxLmludmVyc2VJbmVydGlhO1xyXG4gICAgY29uc3QgSTIgPSB0aGlzLmJvZHkyLmludmVyc2VJbmVydGlhO1xyXG4gICAgY29uc3QgTTEgPSB0aGlzLmJvZHkxLmludmVyc2VNYXNzO1xyXG4gICAgY29uc3QgTTIgPSB0aGlzLmJvZHkyLmludmVyc2VNYXNzO1xyXG4gICAgdGhpcy5KTSA9IFtcclxuICAgICAgc2NhbGUodGhpcy5KWzBdLCBNMSksXHJcbiAgICAgIG0zLnRyYW5zZm9ybVBvaW50KEkxLCB0aGlzLkpbMV0pLFxyXG4gICAgICBzY2FsZSh0aGlzLkpbMl0sIE0yKSxcclxuICAgICAgbTMudHJhbnNmb3JtUG9pbnQoSTIsIHRoaXMuSlszXSksXHJcbiAgICBdO1xyXG4gICAgdGhpcy5lZmZNYXNzID1cclxuICAgICAgTTEgKyBkb3QodGhpcy5KTVswXSwgdGhpcy5KWzFdKSArIE0yICsgZG90KHRoaXMuSk1bM10sIHRoaXMuSlszXSk7XHJcblxyXG4gICAgdGhpcy5yZWxhdGl2ZVZlbG9jaXR5ID0gZGlmZihcclxuICAgICAgc3VtKHRoaXMuYm9keTIudmVsb2NpdHksIGNyb3NzKHRoaXMuYm9keTIuYW5ndWxhclYsIHRoaXMucmIpKSxcclxuICAgICAgc3VtKHRoaXMuYm9keTEudmVsb2NpdHksIGNyb3NzKHRoaXMuYm9keTEuYW5ndWxhclYsIHRoaXMucmEpKVxyXG4gICAgKTtcclxuICAgIHRoaXMucmVsYXRpdmVWZWxvY2l0eU5vcm1hbFByb2plY3Rpb24gPSBkb3QodGhpcy5yZWxhdGl2ZVZlbG9jaXR5LCB0aGlzLm4pO1xyXG4gIH1cclxuICBhcHBseVJlc29sdmluZ0ltcHVsc2UobGFtYmRhKSB7XHJcbiAgICBjb25zdCBtYXhMYW1iZGEgPSBub3JtKFxyXG4gICAgICBzdW0oXHJcbiAgICAgICAgc2NhbGUodGhpcy5ib2R5MS52ZWxvY2l0eSwgdGhpcy5ib2R5MS5tYXNzKSxcclxuICAgICAgICBzY2FsZSh0aGlzLmJvZHkyLnZlbG9jaXR5LCB0aGlzLmJvZHkyLm1hc3MpXHJcbiAgICAgIClcclxuICAgICk7XHJcbiAgICBsYW1iZGEgPSBjbGFtcChsYW1iZGEsIC0wLjEsIDAuMSk7XHJcblxyXG4gICAgdGhpcy5ib2R5MS5hcHBseUltcHVsc2Uoc2NhbGUodGhpcy5KWzBdLCBsYW1iZGEpLCB0aGlzLnJhKTtcclxuICAgIHRoaXMuYm9keTIuYXBwbHlJbXB1bHNlKHNjYWxlKHRoaXMuSlsyXSwgbGFtYmRhKSwgdGhpcy5yYik7XHJcbiAgfVxyXG4gIGFwcGx5UmVzb2x2aW5nUHNldWRvSW1wdWxzZShsYW1iZGEpIHtcclxuICAgIGNvbnN0IG1heCA9IHRoaXMuZWZmTWFzcyAqIDEwO1xyXG4gICAgLy9sYW1iZGEgPSBjbGFtcChsYW1iZGEsIC0xLCAxKVxyXG4gICAgdGhpcy5ib2R5MS5hcHBseVBzZXVkb0ltcHVsc2Uoc2NhbGUodGhpcy5KWzBdLCBsYW1iZGEpLCBbMCwgMCwgMF0pO1xyXG4gICAgdGhpcy5ib2R5Mi5hcHBseVBzZXVkb0ltcHVsc2Uoc2NhbGUodGhpcy5KWzJdLCBsYW1iZGEpLCBbMCwgMCwgMF0pO1xyXG4gIH1cclxufVxyXG5leHBvcnQgeyBDb250YWN0Q29uc3RyYWludCwgQ29uc3RyYWludCwgSm9pbnQsIEZyaWN0aW9uQ29uc3RyYWludCwgUG9zaXRpb25Db25zdHJhaW50fTtcclxuIiwiaW1wb3J0IHsgQm94IH0gZnJvbSBcIi4vY29sbGlkZXJcIjtcclxuaW1wb3J0IHsgSm9pbnQgfSBmcm9tIFwiLi9jb250YWN0XCI7XHJcbmltcG9ydCB7IFJpZ2lkQm9keSB9IGZyb20gXCIuL1JpZ2lkQm9keVwiO1xyXG5pbXBvcnQge3ZlY3Rvcn0gZnJvbSAnbWF0aCdcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ocG9zID0gWzAsMCwwXSl7XHJcbiAgICBjb25zdCBib2R5ID0gbmV3IFJpZ2lkQm9keShuZXcgQm94KDEsNCwxKSlcclxuICAgIGNvbnN0IGxlZnRIYW5kID0gbmV3IFJpZ2lkQm9keShuZXcgQm94KDEsMywxKSlcclxuICAgIGNvbnN0IHJpZ2h0SGFuZCA9IG5ldyBSaWdpZEJvZHkobmV3IEJveCgxLDMsMSkpXHJcbiAgICBjb25zdCBsZWZ0TGVnID0gbmV3IFJpZ2lkQm9keShuZXcgQm94KDEsMywxKSlcclxuICAgIGNvbnN0IHJpZ2h0TGVnID0gbmV3IFJpZ2lkQm9keShuZXcgQm94KDEsMywxKSlcclxuICAgIGNvbnN0IGhlYWQgPSBuZXcgUmlnaWRCb2R5KG5ldyBCb3goMS41LDEuNSwxLjUpKVxyXG4gICAgY29uc3QgY29uc3RyYWludHMgPSBbXHJcbiAgICAgICAgbmV3IEpvaW50KFswLDIuNSwwXSwgWzAsLTEsMF0sIGJvZHksIGhlYWQsIDAuMSwgIDAuMSksXHJcbiAgICAgICAgbmV3IEpvaW50KFstMiwyLDBdLCBbMCwyLDBdLCBib2R5LCBsZWZ0SGFuZCwgMC4xLCAgMC4xKSxcclxuICAgICAgICBuZXcgSm9pbnQoWzIsMiwwXSwgWzAsMiwwXSwgYm9keSwgcmlnaHRIYW5kLCAgMC4xLCAgMC4xKSxcclxuICAgICAgICBuZXcgSm9pbnQoWzEuNywtMiwwXSwgWzAsMS41LDBdLCBib2R5LCByaWdodExlZywgMC4xLCAgMC4xKSxcclxuICAgICAgICBuZXcgSm9pbnQoWy0xLjcsLTIsMF0sIFswLDEuNSwwXSwgYm9keSwgbGVmdExlZywgMC4xLCAgMC4xMSksXHJcbiAgICBdXHJcbiAgICBib2R5LnRyYW5zbGF0ZShwb3MpXHJcbiAgIFxyXG4gICAgaGVhZC50cmFuc2xhdGUodmVjdG9yLnN1bShwb3MsIFswLDIsMF0pKVxyXG4gICAgbGVmdEhhbmQudHJhbnNsYXRlKHZlY3Rvci5zdW0ocG9zLCBbLTMsMiwwXSkpXHJcbiAgICByaWdodEhhbmQudHJhbnNsYXRlKHZlY3Rvci5zdW0ocG9zLCBbMywyLDBdKSlcclxuICAgIHJpZ2h0TGVnLnRyYW5zbGF0ZSh2ZWN0b3Iuc3VtKHBvcywgWzIsIC0yLjUsMF0pKVxyXG4gICAgbGVmdExlZy50cmFuc2xhdGUodmVjdG9yLnN1bShwb3MsIFstMiwgLTIuNSwwXSkpXHJcbiAgICBjb25zdCBib2RpZXMgPSBbYm9keSwgbGVmdEhhbmQsIHJpZ2h0SGFuZCwgcmlnaHRMZWcsIGxlZnRMZWcsIGhlYWRdXHJcbiAgICBib2RpZXMuZm9yRWFjaChiPT5iLnNldE1hc3MoMjApKVxyXG4gICAgXHJcbiAgICBcclxuICAgIHJldHVybiBbYm9kaWVzLCBjb25zdHJhaW50c11cclxufSIsImNsYXNzIEV2ZW50RW1pdHRlciB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmV2ZW50cyA9IHt9O1xyXG4gIH1cclxuICBvbihldmVudE5hbWUsIGZuKSB7XHJcbiAgICBpZiAoIXRoaXMuZXZlbnRzW2V2ZW50TmFtZV0pIHtcclxuICAgICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXSA9IFtdO1xyXG4gICAgfVxyXG4gICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXS5wdXNoKGZuKTtcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gPSB0aGlzLmV2ZW50c1tldmVudE5hbWVdLmZpbHRlcihcclxuICAgICAgICAoZXZlbnRGbikgPT4gZm4gIT09IGV2ZW50Rm5cclxuICAgICAgKTtcclxuICAgIH07XHJcbiAgfVxyXG4gIGVtaXQoZXZlbnROYW1lLCBkYXRhKSB7XHJcbiAgICBpZiAodGhpcy5ldmVudHNbZXZlbnROYW1lXSkge1xyXG4gICAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdLmZvckVhY2goKGZuKSA9PiB7XHJcbiAgICAgICAgZm4uY2FsbChudWxsLCBkYXRhKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbmV4cG9ydCB7IEV2ZW50RW1pdHRlciB9O1xyXG4iLCJpbXBvcnQgeyB2ZWN0b3IsIG0zLCBtNCB9IGZyb20gXCJtYXRoXCI7XHJcbmltcG9ydCB7IGNsaXAsIGlzSW5DbG9ja3dpc2UgfSBmcm9tIFwiLi9jbGlwcGluZ1wiO1xyXG5pbXBvcnQgeyBDb250YWN0IH0gZnJvbSBcIi4vY29udGFjdFwiO1xyXG5jb25zdCB7IGRvdCwgY3Jvc3MsIG5vcm1hbGl6ZSwgc3VtLCBkaWZmLCBsZW4sIHNjYWxlLCBpc051bGwsIG5vcm0gfSA9IHZlY3RvcjtcclxuY29uc3QgY2xpcEJpYXMgPSAwLjA1O1xyXG5jb25zdCBHSktfTUFYX0lURVJBVElPTlNfTlVNID0gNjQ7XHJcblxyXG5jb25zdCBmaW5kQ2xvc2VzdEZhY2UgPSAoY29sbGlkZXIsIG5vcm1hbCkgPT4ge1xyXG4gIGNvbnN0IG5vcm1hbHMgPSBjb2xsaWRlci5nZXROb3JtYWxzR2xvYmFsKCk7XHJcbiAgbGV0IG1pbkRvdCA9IGRvdChub3JtYWwsIG5vcm1hbHNbMF0pO1xyXG4gIGxldCBpbmRleCA9IDA7XHJcbiAgZm9yIChsZXQgaSA9IDEsIG4gPSBub3JtYWxzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgY29uc3QgX2RvdCA9IGRvdChub3JtYWxzW2ldLCBub3JtYWwpO1xyXG4gICAgaWYgKF9kb3QgPCBtaW5Eb3QpIHtcclxuICAgICAgbWluRG90ID0gX2RvdDtcclxuICAgICAgaW5kZXggPSBpO1xyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdCBmYWNlSW5kaWNlcyA9IGNvbGxpZGVyLmluZGljZXNbaW5kZXhdO1xyXG4gIGNvbnN0IG0gPSBjb2xsaWRlci5nZXRNNCgpO1xyXG4gIHJldHVybiBbXHJcbiAgICBmYWNlSW5kaWNlcy5tYXAoKGkpID0+IG00LnRyYW5zZm9ybVBvaW50KG0sIGNvbGxpZGVyLnBvaW50c1tpXSkpLFxyXG4gICAgbm9ybWFsc1tpbmRleF0sXHJcbiAgXTtcclxufTtcclxuY29uc3QgcmF5VnNQbGFuZUludGVyc2VjID0gKHBsYW5lLCBwb2ludCwgZGlyZWN0aW9uKSA9PiB7XHJcbiAgY29uc3QgW29yaWdpbiwgbm9ybWFsXSA9IHBsYW5lO1xyXG4gIGNvbnN0IF9kb3QgPSBkb3Qobm9ybWFsLCBkaXJlY3Rpb24pO1xyXG4gIGNvbnN0IGZyb21Qb2ludFRvT3JpZ2luID0gZGlmZihwb2ludCwgb3JpZ2luKTtcclxuICBjb25zdCBmYWMgPSBkb3QoZnJvbVBvaW50VG9PcmlnaW4sIG5vcm1hbCkgLyBfZG90O1xyXG4gIHJldHVybiBkaWZmKHBvaW50LCBzY2FsZShkaXJlY3Rpb24sIGZhYykpO1xyXG59O1xyXG5jb25zdCBpc1BvaW50QmVoaW5kUGxhbmUgPSAocGxhbmUsIHBvaW50LCBzaWduID0gMSkgPT4ge1xyXG4gIGNvbnN0IFtvcmlnaW4sIG5vcm1hbF0gPSBwbGFuZTtcclxuICByZXR1cm4gZG90KG5vcm1hbCwgZGlmZihwb2ludCwgb3JpZ2luKSkgKiBzaWduID4gMCAtIGNsaXBCaWFzO1xyXG59O1xyXG5jb25zdCBwb2ludE9uUGxhbmVQcm9qZWN0aW9uID0gKHBsYW5lLCBwb2ludCkgPT4ge1xyXG4gIGNvbnN0IFtvcmlnaW4sIG5vcm1hbF0gPSBwbGFuZTtcclxuICBjb25zdCBmcm9tUG9pbnRUb09yaWdpbiA9IGRpZmYocG9pbnQsIG9yaWdpbik7XHJcbiAgY29uc3QgcHJvakFsb25nTm9ybWFsID0gZG90KG5vcm1hbCwgZnJvbVBvaW50VG9PcmlnaW4pO1xyXG5cclxuICByZXR1cm4gZGlmZihwb2ludCwgc2NhbGUobm9ybWFsLCBwcm9qQWxvbmdOb3JtYWwpKTtcclxufTtcclxuY29uc3QgY2xpcFBvaW50c0JlaGluZFBsYW5lID0gKHBsYW5lLCBwb2ludHMsIHNpZ24gPSAxKSA9PiB7XHJcbiAgY29uc3QgW29yaWdpbiwgbm9ybWFsXSA9IHBsYW5lO1xyXG5cclxuICByZXR1cm4gcG9pbnRzLmZpbHRlcigocG9pbnQpID0+IGRvdChub3JtYWwsIGRpZmYocG9pbnQsIG9yaWdpbikpICogc2lnbiA+IDApO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0MkRjb29yZHNPblBsYW5lID0gKGksIGosIHBvaW50KSA9PiB7XHJcbiAgcmV0dXJuIFtkb3QoaSwgcG9pbnQpLCBkb3QoaiwgcG9pbnQpXTtcclxufTtcclxuXHJcbmNvbnN0IHN1dGhlcmxhbmRIb2RnbWFuID0gKFMsIEMpID0+IHt9O1xyXG5cclxuZnVuY3Rpb24gdXBkYXRlX3NpbXBsZXgzKGEsIGIsIGMsIGQsIHNlYXJjaF9kaXIsIHNpbXBfZGltKSB7XHJcbiAgY29uc3QgbiA9IGNyb3NzKGRpZmYodGhpcy5iLCB0aGlzLmEpLCBkaWZmKHRoaXMuYywgdGhpcy5hKSk7XHJcbiAgY29uc3QgQU8gPSBzY2FsZSh0aGlzLmEsIC0xKTtcclxuXHJcbiAgdGhpcy5zaW1wX2RpbSA9IDI7XHJcbiAgaWYgKGRvdChjcm9zcyhkaWZmKHRoaXMuYiwgdGhpcy5hKSwgbiksIEFPKSA+IDApIHtcclxuICAgIHRoaXMuYyA9IHRoaXMuYTtcclxuICAgIHRoaXMuc2VhcmNoX2RpciA9IGNyb3NzKFxyXG4gICAgICBjcm9zcyhkaWZmKHRoaXMuYiwgdGhpcy5hKSwgQU8pLFxyXG4gICAgICBkaWZmKHRoaXMuYiwgdGhpcy5hKVxyXG4gICAgKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgaWYgKGRvdChjcm9zcyhuLCBkaWZmKHRoaXMuYywgdGhpcy5hKSksIEFPKSA+IDApIHtcclxuICAgIHRoaXMuYiA9IHRoaXMuYTtcclxuICAgIHRoaXMuc2VhcmNoX2RpciA9IGNyb3NzKFxyXG4gICAgICBjcm9zcyhkaWZmKHRoaXMuYywgdGhpcy5hKSwgQU8pLFxyXG4gICAgICBkaWZmKHRoaXMuYywgdGhpcy5hKVxyXG4gICAgKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgdGhpcy5zaW1wX2RpbSA9IDM7XHJcbiAgaWYgKGRvdChuLCBBTykgPiAwKSB7XHJcbiAgICB0aGlzLmQgPSB0aGlzLmM7XHJcbiAgICB0aGlzLmMgPSB0aGlzLmI7XHJcbiAgICB0aGlzLmIgPSB0aGlzLmE7XHJcbiAgICB0aGlzLnNlYXJjaF9kaXIgPSBuO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICB0aGlzLmQgPSB0aGlzLmI7XHJcbiAgdGhpcy5iID0gdGhpcy5hO1xyXG4gIHRoaXMuc2VhcmNoX2RpciA9IHNjYWxlKG4sIC0xKTtcclxuICByZXR1cm47XHJcbn1cclxuZnVuY3Rpb24gdXBkYXRlX3NpbXBsZXg0KGEsIGIsIGMsIGQsIHNlYXJjaF9kaXIsIHNpbXBfZGltKSB7XHJcbiAgY29uc3QgQUJDID0gY3Jvc3MoZGlmZih0aGlzLmIsIHRoaXMuYSksIGRpZmYodGhpcy5jLCB0aGlzLmEpKTtcclxuICBjb25zdCBBQ0QgPSBjcm9zcyhkaWZmKHRoaXMuYywgdGhpcy5hKSwgZGlmZih0aGlzLmQsIHRoaXMuYSkpO1xyXG4gIGNvbnN0IEFEQiA9IGNyb3NzKGRpZmYodGhpcy5kLCB0aGlzLmEpLCBkaWZmKHRoaXMuYiwgdGhpcy5hKSk7XHJcbiAgY29uc3QgQU8gPSBzY2FsZSh0aGlzLmEsIC0xKTtcclxuICB0aGlzLnNpbXBfZGltID0gMztcclxuXHJcbiAgaWYgKGRvdChBQkMsIEFPKSA+IDApIHtcclxuICAgIHRoaXMuZCA9IHRoaXMuYztcclxuICAgIHRoaXMuYyA9IHRoaXMuYjtcclxuICAgIHRoaXMuYiA9IHRoaXMuYTtcclxuICAgIHRoaXMuc2VhcmNoX2RpciA9IEFCQztcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIGlmIChkb3QoQUNELCBBTykgPiAwKSB7XHJcbiAgICB0aGlzLmIgPSB0aGlzLmE7XHJcbiAgICB0aGlzLnNlYXJjaF9kaXIgPSBBQ0Q7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBpZiAoZG90KEFEQiwgQU8pID4gMCkge1xyXG4gICAgdGhpcy5jID0gdGhpcy5kO1xyXG4gICAgdGhpcy5kID0gdGhpcy5iO1xyXG4gICAgdGhpcy5iID0gdGhpcy5hO1xyXG4gICAgdGhpcy5zZWFyY2hfZGlyID0gQURCO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICByZXR1cm4gdHJ1ZTtcclxufVxyXG5mdW5jdGlvbiBnamsoYm9keTEsIGJvZHkyKSB7XHJcbiAgY29uc3QgY29sbDEgPSBib2R5MS5jb2xsaWRlcjtcclxuICBjb25zdCBjb2xsMiA9IGJvZHkyLmNvbGxpZGVyO1xyXG4gIHRoaXMuYSA9IFswLCAwLCAwXTtcclxuICB0aGlzLmIgPSBbMCwgMCwgMF07XHJcbiAgdGhpcy5jID0gWzAsIDAsIDBdO1xyXG4gIHRoaXMuZCA9IFswLCAwLCAwXTtcclxuICB0aGlzLnNlYXJjaF9kaXIgPSBbMCwgMCwgMF07XHJcbiAgdGhpcy5zaW1wX2RpbSA9IDA7XHJcblxyXG4gIHRoaXMub3JpZ2luc01hcCA9IG5ldyBNYXAoKTtcclxuXHJcbiAgbGV0IG10diA9IFswLCAwLCAwXTtcclxuXHJcbiAgdGhpcy5zZWFyY2hfZGlyID0gZGlmZihjb2xsMS5wb3MsIGNvbGwyLnBvcyk7XHJcbiAgY29uc3QgY19vcmlnaW4xID0gY29sbDEuc3VwcG9ydChzY2FsZSh0aGlzLnNlYXJjaF9kaXIsIC0xKSk7XHJcbiAgY29uc3QgY19vcmlnaW4yID0gY29sbDIuc3VwcG9ydCh0aGlzLnNlYXJjaF9kaXIpO1xyXG4gIHRoaXMuYyA9IGRpZmYoY19vcmlnaW4yLCBjX29yaWdpbjEpO1xyXG5cclxuICB0aGlzLm9yaWdpbnNNYXAuc2V0KHRoaXMuYywgW2Nfb3JpZ2luMSwgY19vcmlnaW4yXSk7XHJcblxyXG4gIHRoaXMuc2VhcmNoX2RpciA9IHNjYWxlKHRoaXMuYywgLTEpO1xyXG5cclxuICBjb25zdCBiX29yaWdpbjEgPSBjb2xsMS5zdXBwb3J0KHNjYWxlKHRoaXMuc2VhcmNoX2RpciwgLTEpKTtcclxuICBjb25zdCBiX29yaWdpbjIgPSBjb2xsMi5zdXBwb3J0KHRoaXMuc2VhcmNoX2Rpcik7XHJcbiAgdGhpcy5iID0gZGlmZihiX29yaWdpbjIsIGJfb3JpZ2luMSk7XHJcblxyXG4gIHRoaXMub3JpZ2luc01hcC5zZXQodGhpcy5iLCBbYl9vcmlnaW4xLCBiX29yaWdpbjJdKTtcclxuXHJcbiAgaWYgKGRvdCh0aGlzLmIsIHRoaXMuc2VhcmNoX2RpcikgPCAwKSB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIHRoaXMuc2VhcmNoX2RpciA9IGNyb3NzKFxyXG4gICAgY3Jvc3MoZGlmZih0aGlzLmMsIHRoaXMuYiksIHNjYWxlKHRoaXMuYiwgLTEpKSxcclxuICAgIGRpZmYodGhpcy5jLCB0aGlzLmIpXHJcbiAgKTtcclxuXHJcbiAgaWYgKGlzTnVsbCh0aGlzLnNlYXJjaF9kaXIpKSB7XHJcbiAgICB0aGlzLnNlYXJjaF9kaXIgPSBjcm9zcyhkaWZmKHRoaXMuYywgdGhpcy5iKSwgWzEsIDAsIDBdKTtcclxuXHJcbiAgICBpZiAoaXNOdWxsKHRoaXMuc2VhcmNoX2RpcikpIHtcclxuICAgICAgdGhpcy5zZWFyY2hfZGlyID0gY3Jvc3MoZGlmZih0aGlzLmMsIHRoaXMuYiksIFswLCAwLCAtMV0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdGhpcy5zaW1wX2RpbSA9IDI7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBHSktfTUFYX0lURVJBVElPTlNfTlVNOyArK2kpIHtcclxuICAgIGNvbnN0IGFfb3JpZ2luMSA9IGNvbGwxLnN1cHBvcnQoc2NhbGUodGhpcy5zZWFyY2hfZGlyLCAtMSkpO1xyXG4gICAgY29uc3QgYV9vcmlnaW4yID0gY29sbDIuc3VwcG9ydCh0aGlzLnNlYXJjaF9kaXIpO1xyXG4gICAgdGhpcy5hID0gZGlmZihhX29yaWdpbjIsIGFfb3JpZ2luMSk7XHJcblxyXG4gICAgdGhpcy5vcmlnaW5zTWFwLnNldCh0aGlzLmEsIFthX29yaWdpbjEsIGFfb3JpZ2luMl0pO1xyXG4gICAgaWYgKGRvdCh0aGlzLmEsIHRoaXMuc2VhcmNoX2RpcikgPCAwKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICB0aGlzLnNpbXBfZGltKys7XHJcbiAgICBpZiAodGhpcy5zaW1wX2RpbSA9PT0gMykge1xyXG4gICAgICB1cGRhdGVfc2ltcGxleDMuYXBwbHkodGhpcyk7XHJcbiAgICB9IGVsc2UgaWYgKHVwZGF0ZV9zaW1wbGV4NC5hcHBseSh0aGlzKSkge1xyXG4gICAgICByZXR1cm4gRVBBKHRoaXMuYSwgdGhpcy5iLCB0aGlzLmMsIHRoaXMuZCwgdGhpcy5vcmlnaW5zTWFwLCBib2R5MSwgYm9keTIpO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gbnVsbDtcclxufVxyXG5cclxuY29uc3QgYmFyaWNlbnRyaWMgPSAoZmFjZSwgcG9pbnQpID0+IHtcclxuICBsZXQgYTExID0gZmFjZVswXVswXTtcclxuICBsZXQgYTEyID0gZmFjZVsxXVswXTtcclxuICBsZXQgYTEzID0gZmFjZVsyXVswXTtcclxuICBsZXQgYjEgPSBwb2ludFswXTtcclxuICBsZXQgYTIxID0gZmFjZVswXVsxXTtcclxuICBsZXQgYTIyID0gZmFjZVsxXVsxXTtcclxuICBsZXQgYTIzID0gZmFjZVsyXVsxXTtcclxuICBsZXQgYjIgPSBwb2ludFsxXTtcclxuICBsZXQgYTMxID0gZmFjZVswXVsyXTtcclxuICBsZXQgYTMyID0gZmFjZVsxXVsyXTtcclxuICBsZXQgYTMzID0gZmFjZVsyXVsyXTtcclxuICBsZXQgYjMgPSBwb2ludFsyXTtcclxuXHJcbiAgY29uc3QgZCA9XHJcbiAgICBhMTEgKiBhMjIgKiBhMzMgK1xyXG4gICAgYTIxICogYTMyICogYTEzICtcclxuICAgIGExMiAqIGEyMyAqIGEzMSAtXHJcbiAgICBhMTMgKiBhMjIgKiBhMzEgLVxyXG4gICAgYTIxICogYTEyICogYTMzIC1cclxuICAgIGEzMiAqIGEyMyAqIGExMTtcclxuXHJcbiAgY29uc3QgZDEgPVxyXG4gICAgYjEgKiBhMjIgKiBhMzMgK1xyXG4gICAgYjIgKiBhMzIgKiBhMTMgK1xyXG4gICAgYTEyICogYTIzICogYjMgLVxyXG4gICAgYTEzICogYTIyICogYjMgLVxyXG4gICAgYjIgKiBhMTIgKiBhMzMgLVxyXG4gICAgYTMyICogYTIzICogYjE7XHJcblxyXG4gIGNvbnN0IGQyID1cclxuICAgIGExMSAqIGIyICogYTMzICtcclxuICAgIGEyMSAqIGIzICogYTEzICtcclxuICAgIGIxICogYTIzICogYTMxIC1cclxuICAgIGExMyAqIGIyICogYTMxIC1cclxuICAgIGExMSAqIGIzICogYTIzIC1cclxuICAgIGEyMSAqIGIxICogYTMzO1xyXG5cclxuICBjb25zdCBkMyA9XHJcbiAgICBhMTEgKiBhMjIgKiBiMyArXHJcbiAgICBhMjEgKiBhMzIgKiBiMSArXHJcbiAgICBhMTIgKiBiMiAqIGEzMSAtXHJcbiAgICBiMSAqIGEyMiAqIGEzMSAtXHJcbiAgICBhMjEgKiBhMTIgKiBiMyAtXHJcbiAgICBiMiAqIGEzMiAqIGExMTtcclxuXHJcbiAgcmV0dXJuIFtkMSAvIGQsIGQyIC8gZCwgZDMgLyBkXTtcclxufTtcclxuY29uc3Qgb3JpZ2luVG9GYWNlUHJvaiA9IChmYWNlKSA9PiB7XHJcbiAgY29uc3Qgbm9ybWFsID0gZmFjZVszXTtcclxuICBjb25zdCBwb2ludCA9IGZhY2VbMF07XHJcbiAgY29uc3QgYyA9IC1ub3JtYWxbMF0gKiBwb2ludFswXSAtIG5vcm1hbFsxXSAqIHBvaW50WzFdIC0gbm9ybWFsWzJdICogcG9pbnRbMl07XHJcbiAgY29uc3QgdCA9XHJcbiAgICAtYyAvXHJcbiAgICAobm9ybWFsWzBdICogbm9ybWFsWzBdICsgbm9ybWFsWzFdICogbm9ybWFsWzFdICsgbm9ybWFsWzJdICogbm9ybWFsWzJdKTtcclxuICByZXR1cm4gW3QgKiBub3JtYWxbMF0sIHQgKiBub3JtYWxbMV0sIHQgKiBub3JtYWxbMl1dO1xyXG59O1xyXG5cclxuY29uc3QgVE9MRVJBTkNFID0gMC4wMDE7XHJcbmNvbnN0IE1BWF9OVU1fRkFDRVMgPSA2NDtcclxuY29uc3QgTUFYX05VTV9MT09TRV9FREdFUyA9IDMyO1xyXG5jb25zdCBFUEFfTUFYX05VTV9JVEVSID0gNjQ7XHJcbmNvbnN0IEVQQSA9IChhLCBiLCBjLCBkLCBvcmlnaW5zTWFwLCBib2R5MSwgYm9keTIpID0+IHtcclxuICBjb25zdCBjb2xsMSA9IGJvZHkxLmNvbGxpZGVyO1xyXG4gIGNvbnN0IGNvbGwyID0gYm9keTIuY29sbGlkZXI7XHJcbiAgY29uc3QgZmFjZXMgPSBbXTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xyXG4gICAgZmFjZXNbaV0gPSBbXTtcclxuICB9XHJcblxyXG4gIGZhY2VzWzBdWzBdID0gYTtcclxuICBmYWNlc1swXVsxXSA9IGI7XHJcbiAgZmFjZXNbMF1bMl0gPSBjO1xyXG4gIGZhY2VzWzBdWzNdID0gbm9ybWFsaXplKGNyb3NzKGRpZmYoYiwgYSksIGRpZmYoYywgYSkpKTtcclxuICBmYWNlc1sxXVswXSA9IGE7XHJcbiAgZmFjZXNbMV1bMV0gPSBjO1xyXG4gIGZhY2VzWzFdWzJdID0gZDtcclxuICBmYWNlc1sxXVszXSA9IG5vcm1hbGl6ZShjcm9zcyhkaWZmKGMsIGEpLCBkaWZmKGQsIGEpKSk7XHJcbiAgZmFjZXNbMl1bMF0gPSBhO1xyXG4gIGZhY2VzWzJdWzFdID0gZDtcclxuICBmYWNlc1syXVsyXSA9IGI7XHJcbiAgZmFjZXNbMl1bM10gPSBub3JtYWxpemUoY3Jvc3MoZGlmZihkLCBhKSwgZGlmZihiLCBhKSkpO1xyXG4gIGZhY2VzWzNdWzBdID0gYjtcclxuICBmYWNlc1szXVsxXSA9IGQ7XHJcbiAgZmFjZXNbM11bMl0gPSBjO1xyXG4gIGZhY2VzWzNdWzNdID0gbm9ybWFsaXplKGNyb3NzKGRpZmYoZCwgYiksIGRpZmYoYywgYikpKTtcclxuXHJcbiAgbGV0IG51bV9mYWNlcyA9IDQ7XHJcbiAgbGV0IGNsb3Nlc3RfZmFjZSA9IG51bGw7XHJcbiAgbGV0IHNlYXJjaF9kaXI7XHJcblxyXG4gIGxldCBwO1xyXG4gIGZvciAobGV0IGl0ZXJhdGlvbiA9IDA7IGl0ZXJhdGlvbiA8IEVQQV9NQVhfTlVNX0lURVI7ICsraXRlcmF0aW9uKSB7XHJcbiAgICBsZXQgbWluX2Rpc3QgPSBkb3QoZmFjZXNbMF1bMF0sIGZhY2VzWzBdWzNdKTtcclxuXHJcbiAgICBjbG9zZXN0X2ZhY2UgPSAwO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1fZmFjZXM7ICsraSkge1xyXG4gICAgICBsZXQgZGlzdCA9IGRvdChmYWNlc1tpXVswXSwgZmFjZXNbaV1bM10pO1xyXG4gICAgICBpZiAoZGlzdCA8IG1pbl9kaXN0KSB7XHJcbiAgICAgICAgbWluX2Rpc3QgPSBkaXN0O1xyXG4gICAgICAgIGNsb3Nlc3RfZmFjZSA9IGk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHNlYXJjaF9kaXIgPSBmYWNlc1tjbG9zZXN0X2ZhY2VdWzNdO1xyXG5cclxuICAgIGNvbnN0IHBfb3JpZ2luMSA9IGNvbGwxLnN1cHBvcnQoc2NhbGUoc2VhcmNoX2RpciwgLTEpKTtcclxuICAgIGNvbnN0IHBfb3JpZ2luMiA9IGNvbGwyLnN1cHBvcnQoc2VhcmNoX2Rpcik7XHJcbiAgICBwID0gZGlmZihwX29yaWdpbjIsIHBfb3JpZ2luMSk7XHJcbiAgICBvcmlnaW5zTWFwLnNldChwLCBbcF9vcmlnaW4xLCBwX29yaWdpbjJdKTtcclxuXHJcbiAgICBpZiAoZG90KHAsIHNlYXJjaF9kaXIpIC0gbWluX2Rpc3QgPCAwLjAwMDAxKSB7XHJcbiAgICAgIGNvbnN0IGZhY2UgPSBmYWNlc1tjbG9zZXN0X2ZhY2VdO1xyXG5cclxuICAgICAgY29uc3QgcG9pbnQgPSBvcmlnaW5Ub0ZhY2VQcm9qKGZhY2UpO1xyXG5cclxuICAgICAgY29uc3QgW0FhLCBCYV0gPSBvcmlnaW5zTWFwLmdldChmYWNlWzBdKTtcclxuICAgICAgLy9jb25zdCBBYSA9IGZhY2VbMF0ub2FcclxuICAgICAgLy9jb25zdCBCYSA9IGZhY2VbMF0ub2JcclxuICAgICAgY29uc3QgW0FiLCBCYl0gPSBvcmlnaW5zTWFwLmdldChmYWNlWzFdKTtcclxuICAgICAgLy9jb25zdCBBYiA9IGZhY2VbMV0ub2FcclxuICAgICAgLy9jb25zdCBCYiA9IGZhY2VbMV0ub2JcclxuICAgICAgY29uc3QgW0FjLCBCY10gPSBvcmlnaW5zTWFwLmdldChmYWNlWzJdKTtcclxuICAgICAgLy9jb25zdCBBYyA9IGZhY2VbMl0ub2FcclxuICAgICAgLy9jb25zdCBCYyA9IGZhY2VbMl0ub2JcclxuXHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGJhcmljZW50cmljKGZhY2UsIHBvaW50KTtcclxuXHJcbiAgICAgIGlmIChpc05hTihyZXN1bHRbMF0gKyByZXN1bHRbMV0gKyByZXN1bHRbMl0pKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJubyBjb252XCIpO1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBsZXQgUEEgPSBzdW0oXHJcbiAgICAgICAgc3VtKHNjYWxlKEFhLCByZXN1bHRbMF0pLCBzY2FsZShBYiwgcmVzdWx0WzFdKSksXHJcbiAgICAgICAgc2NhbGUoQWMsIHJlc3VsdFsyXSlcclxuICAgICAgKTtcclxuICAgICAgLy9BYS5tdWx0aXBseShyZXN1bHRbMF0pLmFkZChBYi5tdWx0aXBseShyZXN1bHRbMV0pKS5hZGQoQWMubXVsdGlwbHkocmVzdWx0WzJdKSlcclxuICAgICAgbGV0IFBCID0gc3VtKFxyXG4gICAgICAgIHN1bShzY2FsZShCYSwgcmVzdWx0WzBdKSwgc2NhbGUoQmIsIHJlc3VsdFsxXSkpLFxyXG4gICAgICAgIHNjYWxlKEJjLCByZXN1bHRbMl0pXHJcbiAgICAgICk7XHJcbiAgICAgIC8vQmEubXVsdGlwbHkocmVzdWx0WzBdKS5hZGQoQmIubXVsdGlwbHkocmVzdWx0WzFdKSkuYWRkKEJjLm11bHRpcGx5KHJlc3VsdFsyXSkpXHJcblxyXG4gICAgICAvL2NvbnN0IHJhID0gUEEuc3Vic3RyYWN0KGNvbGwxLnBvcylcclxuXHJcbiAgICAgIGNvbnN0IG4gPSBub3JtYWxpemUoc2NhbGUoZmFjZVszXSwgLWRvdChwLCBzZWFyY2hfZGlyKSkpO1xyXG4gICAgICBpZiAobm9ybShuKSA8IDAuMDEpIHJldHVybiBudWxsO1xyXG4gICAgICBjb25zdCBwZW5EZXB0aCA9IC1kb3QoZGlmZihQQiwgUEEpLCBuKTtcclxuXHJcbiAgICAgIHJldHVybiB7IFBBLCBQQiwgbiwgcGVuRGVwdGggfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBsb29zZV9lZGdlcyA9IFtdO1xyXG4gICAgbGV0IG51bV9sb29zZV9lZGdlcyA9IDA7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bV9mYWNlczsgKytpKSB7XHJcbiAgICAgIGlmIChkb3QoZmFjZXNbaV1bM10sIGRpZmYocCwgZmFjZXNbaV1bMF0pKSA+IDApIHtcclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDM7IGorKykge1xyXG4gICAgICAgICAgbGV0IGN1cnJlbnRfZWRnZSA9IFtmYWNlc1tpXVtqXSwgZmFjZXNbaV1bKGogKyAxKSAlIDNdXTtcclxuICAgICAgICAgIGxldCBmb3VuZF9lZGdlID0gZmFsc2U7XHJcbiAgICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IG51bV9sb29zZV9lZGdlczsgaysrKSB7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICBsb29zZV9lZGdlc1trXVsxXSA9PT0gY3VycmVudF9lZGdlWzBdICYmXHJcbiAgICAgICAgICAgICAgbG9vc2VfZWRnZXNba11bMF0gPT09IGN1cnJlbnRfZWRnZVsxXVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICBsb29zZV9lZGdlc1trXVswXSA9IGxvb3NlX2VkZ2VzW251bV9sb29zZV9lZGdlcyAtIDFdWzBdO1xyXG4gICAgICAgICAgICAgIGxvb3NlX2VkZ2VzW2tdWzFdID0gbG9vc2VfZWRnZXNbbnVtX2xvb3NlX2VkZ2VzIC0gMV1bMV07XHJcbiAgICAgICAgICAgICAgbnVtX2xvb3NlX2VkZ2VzLS07XHJcbiAgICAgICAgICAgICAgZm91bmRfZWRnZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgayA9IG51bV9sb29zZV9lZGdlcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKCFmb3VuZF9lZGdlKSB7XHJcbiAgICAgICAgICAgIGlmIChudW1fbG9vc2VfZWRnZXMgPj0gTUFYX05VTV9MT09TRV9FREdFUykgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBsb29zZV9lZGdlc1tudW1fbG9vc2VfZWRnZXNdID0gW107XHJcbiAgICAgICAgICAgIGxvb3NlX2VkZ2VzW251bV9sb29zZV9lZGdlc11bMF0gPSBjdXJyZW50X2VkZ2VbMF07XHJcbiAgICAgICAgICAgIGxvb3NlX2VkZ2VzW251bV9sb29zZV9lZGdlc11bMV0gPSBjdXJyZW50X2VkZ2VbMV07XHJcbiAgICAgICAgICAgIG51bV9sb29zZV9lZGdlcysrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmYWNlc1tpXVswXSA9IGZhY2VzW251bV9mYWNlcyAtIDFdWzBdO1xyXG4gICAgICAgIGZhY2VzW2ldWzFdID0gZmFjZXNbbnVtX2ZhY2VzIC0gMV1bMV07XHJcbiAgICAgICAgZmFjZXNbaV1bMl0gPSBmYWNlc1tudW1fZmFjZXMgLSAxXVsyXTtcclxuICAgICAgICBmYWNlc1tpXVszXSA9IGZhY2VzW251bV9mYWNlcyAtIDFdWzNdO1xyXG4gICAgICAgIG51bV9mYWNlcy0tO1xyXG4gICAgICAgIGktLTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1fbG9vc2VfZWRnZXM7IGkrKykge1xyXG4gICAgICBpZiAobnVtX2ZhY2VzID49IE1BWF9OVU1fRkFDRVMpIGJyZWFrO1xyXG4gICAgICBmYWNlc1tudW1fZmFjZXNdID0gW107XHJcbiAgICAgIGZhY2VzW251bV9mYWNlc11bMF0gPSBsb29zZV9lZGdlc1tpXVswXTtcclxuICAgICAgZmFjZXNbbnVtX2ZhY2VzXVsxXSA9IGxvb3NlX2VkZ2VzW2ldWzFdO1xyXG4gICAgICBmYWNlc1tudW1fZmFjZXNdWzJdID0gcDtcclxuXHJcbiAgICAgIGZhY2VzW251bV9mYWNlc11bM10gPSBub3JtYWxpemUoXHJcbiAgICAgICAgY3Jvc3MoXHJcbiAgICAgICAgICBkaWZmKGxvb3NlX2VkZ2VzW2ldWzBdLCBsb29zZV9lZGdlc1tpXVsxXSksXHJcbiAgICAgICAgICBkaWZmKGxvb3NlX2VkZ2VzW2ldWzBdLCBwKVxyXG4gICAgICAgIClcclxuICAgICAgKTtcclxuXHJcbiAgICAgIGlmIChkb3QoZmFjZXNbbnVtX2ZhY2VzXVswXSwgZmFjZXNbbnVtX2ZhY2VzXVszXSkgKyAwLjAxIDwgMCkge1xyXG4gICAgICAgIGNvbnN0IHRlbXAgPSBmYWNlc1tudW1fZmFjZXNdWzBdO1xyXG4gICAgICAgIGZhY2VzW251bV9mYWNlc11bMF0gPSBmYWNlc1tudW1fZmFjZXNdWzFdO1xyXG4gICAgICAgIGZhY2VzW251bV9mYWNlc11bMV0gPSB0ZW1wO1xyXG4gICAgICAgIGZhY2VzW251bV9mYWNlc11bM10gPSBzY2FsZShmYWNlc1tudW1fZmFjZXNdWzNdLCAtMSk7XHJcbiAgICAgIH1cclxuICAgICAgbnVtX2ZhY2VzKys7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnNvbGUubG9nKFwibm8gY29udlwiKTtcclxuICByZXR1cm4gbnVsbDtcclxufTtcclxuXHJcbmNvbnN0IF9namsgPSBnamsuYmluZCh7fSk7XHJcblxyXG5jb25zdCBnZXRDb250YWN0TWFuaWZvbGQgPSAoYm9keTEsIGJvZHkyKSA9PiB7XHJcbiAgY29uc3QgY29sbDEgPSBib2R5MS5jb2xsaWRlcjtcclxuICBjb25zdCBjb2xsMiA9IGJvZHkyLmNvbGxpZGVyO1xyXG4gIGNvbnN0IGNvbnRhY3REYXRhID0gX2dqayhib2R5MSwgYm9keTIpO1xyXG4gIGlmIChjb250YWN0RGF0YSkge1xyXG4gICAgY29uc3QgeyBQQSwgUEIsIG4gfSA9IGNvbnRhY3REYXRhO1xyXG4gICAgY29uc3QgblJldmVyc2UgPSBzY2FsZShuLCAtMSk7XHJcblxyXG4gICAgY29uc3QgW2NvbnRhY3RGYWNlMSwgbm9ybWFsMV0gPSBmaW5kQ2xvc2VzdEZhY2UoY29sbDEsIG5SZXZlcnNlKTtcclxuICAgIGNvbnN0IFtjb250YWN0RmFjZTIsIG5vcm1hbDJdID0gZmluZENsb3Nlc3RGYWNlKGNvbGwyLCBuKTtcclxuICAgIGNvbnN0IHBsYW5lID0gW3NjYWxlKHN1bShQQSwgUEIpLCAwLjUpLCBuXTtcclxuICAgIGNvbnN0IHByb2plY3Rpb25zMSA9IGNvbnRhY3RGYWNlMS5tYXAoKHApID0+XHJcbiAgICAgIHBvaW50T25QbGFuZVByb2plY3Rpb24ocGxhbmUsIHApXHJcbiAgICApO1xyXG4gICAgY29uc3QgcHJvamVjdGlvbnMyID0gY29udGFjdEZhY2UyLm1hcCgocCkgPT5cclxuICAgICAgcG9pbnRPblBsYW5lUHJvamVjdGlvbihwbGFuZSwgcClcclxuICAgICk7XHJcblxyXG4gICAgY29uc3Qgb3JpZ2luID0gcGxhbmVbMF07XHJcbiAgICBjb25zdCBpID0gdmVjdG9yLm5vcm1hbGl6ZSh2ZWN0b3IuZGlmZihwbGFuZVswXSwgcHJvamVjdGlvbnMxWzFdKSk7XHJcbiAgICBjb25zdCBqID0gdmVjdG9yLmNyb3NzKHBsYW5lWzFdLCBpKTtcclxuXHJcbiAgICBsZXQgXzJkMSA9IHByb2plY3Rpb25zMS5tYXAoKHApID0+XHJcbiAgICAgIGdldDJEY29vcmRzT25QbGFuZShpLCBqLCBkaWZmKHAsIG9yaWdpbikpXHJcbiAgICApO1xyXG4gICAgbGV0IF8yZDIgPSBwcm9qZWN0aW9uczIubWFwKChwKSA9PlxyXG4gICAgICBnZXQyRGNvb3Jkc09uUGxhbmUoaSwgaiwgZGlmZihwLCBvcmlnaW4pKVxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBkaXIxID0gaXNJbkNsb2Nrd2lzZShfMmQxWzBdLCBfMmQxWzFdLCBfMmQxWzJdKTtcclxuICAgIGNvbnN0IGRpcjIgPSBpc0luQ2xvY2t3aXNlKF8yZDJbMF0sIF8yZDJbMV0sIF8yZDJbMl0pO1xyXG4gICAgaWYgKGRpcjEgPCAwKSBfMmQxID0gXzJkMS5tYXAoKF8sIGkpID0+IF8yZDEuYXQoLWkpKTtcclxuICAgIGlmIChkaXIyIDwgMCkgXzJkMiA9IF8yZDIubWFwKChfLCBpKSA9PiBfMmQyLmF0KC1pKSk7XHJcbiAgICBjb25zdCBjbGlwcGVkID0gY2xpcChfMmQxLCBfMmQyKTtcclxuICAgXHJcbiAgICBjb25zdCBfM2QgPSBjbGlwcGVkLm1hcCgocCkgPT5cclxuICAgICAgc3VtKG9yaWdpbiwgc3VtKHNjYWxlKGksIHBbMF0pLCBzY2FsZShqLCBwWzFdKSkpXHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IGZlYXR1cmVzID0gW107XHJcbiAgICBfM2QuZm9yRWFjaCgocG9pbnQpID0+IHtcclxuICAgICAgY29uc3QgUEEgPSByYXlWc1BsYW5lSW50ZXJzZWMoW2NvbnRhY3RGYWNlMVswXSwgbm9ybWFsMV0sIHBvaW50LCBuKTtcclxuICAgICAgaWYgKCFpc1BvaW50QmVoaW5kUGxhbmUocGxhbmUsIFBBLCAxKSkgcmV0dXJuO1xyXG4gICAgICBjb25zdCBQQiA9IHJheVZzUGxhbmVJbnRlcnNlYyhbY29udGFjdEZhY2UyWzBdLCBub3JtYWwyXSwgcG9pbnQsIG4pO1xyXG4gICAgICBpZiAoIWlzUG9pbnRCZWhpbmRQbGFuZShwbGFuZSwgUEIsIC0xKSkgcmV0dXJuO1xyXG5cclxuICAgICAgY29uc3QgcmIgPSBkaWZmKFBCLCBjb2xsMi5wb3MpO1xyXG4gICAgICBjb25zdCByYSA9IGRpZmYoUEEsIGNvbGwxLnBvcyk7XHJcbiAgICAgIGNvbnN0IHBlbkRlcHRoID0gLWRvdChkaWZmKFBCLCBQQSksIG4pO1xyXG4gICAgICBjb25zdCByYUxvY2FsID0gbTMudHJhbnNmb3JtUG9pbnQoY29sbDEuUm1hdHJpeEludmVyc2UsIHJhKTtcclxuICAgICAgY29uc3QgcmJMb2NhbCA9IG0zLnRyYW5zZm9ybVBvaW50KGNvbGwyLlJtYXRyaXhJbnZlcnNlLCByYik7XHJcblxyXG4gICAgICBmZWF0dXJlcy5wdXNoKHtcclxuICAgICAgICByYUxvY2FsLFxyXG4gICAgICAgIHJiTG9jYWwsXHJcbiAgICAgICAgcmEsXHJcbiAgICAgICAgcmIsXHJcbiAgICAgICAgUEEsXHJcbiAgICAgICAgUEIsXHJcbiAgICAgICAgbixcclxuICAgICAgICBwZW5EZXB0aCxcclxuICAgICAgICBib2R5MSxcclxuICAgICAgICBib2R5MixcclxuICAgICAgICBpLFxyXG4gICAgICAgIGosXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKGZlYXR1cmVzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICBjb25zdCByYiA9IGRpZmYoUEIsIGNvbGwyLnBvcyk7XHJcbiAgICAgIGNvbnN0IHJhID0gZGlmZihQQSwgY29sbDEucG9zKTtcclxuICAgICAgY29uc3QgcGVuRGVwdGggPSAtZG90KGRpZmYoUEIsIFBBKSwgbik7XHJcbiAgICAgIGNvbnN0IHJhTG9jYWwgPSBtMy50cmFuc2Zvcm1Qb2ludChjb2xsMS5SbWF0cml4SW52ZXJzZSwgcmEpO1xyXG4gICAgICBjb25zdCByYkxvY2FsID0gbTMudHJhbnNmb3JtUG9pbnQoY29sbDIuUm1hdHJpeEludmVyc2UsIHJiKTtcclxuICAgICAgZmVhdHVyZXMucHVzaCh7XHJcbiAgICAgICAgcmFMb2NhbCxcclxuICAgICAgICByYkxvY2FsLFxyXG4gICAgICAgIHJhLFxyXG4gICAgICAgIHJiLFxyXG4gICAgICAgIFBBLFxyXG4gICAgICAgIFBCLFxyXG4gICAgICAgIG4sXHJcbiAgICAgICAgcGVuRGVwdGgsXHJcbiAgICAgICAgYm9keTEsXHJcbiAgICAgICAgYm9keTIsXHJcbiAgICAgICAgaSxcclxuICAgICAgICBqLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmVhdHVyZXM7XHJcbiAgfVxyXG4gIHJldHVybiBudWxsO1xyXG59O1xyXG5cclxuZXhwb3J0IHtcclxuICBnZXRDb250YWN0TWFuaWZvbGQgYXMgZ2prLFxyXG4gIHBvaW50T25QbGFuZVByb2plY3Rpb24sXHJcbiAgY2xpcFBvaW50c0JlaGluZFBsYW5lLFxyXG4gIGdldDJEY29vcmRzT25QbGFuZSxcclxuICByYXlWc1BsYW5lSW50ZXJzZWMsXHJcbn07XHJcbiIsImltcG9ydCB7IHZlY3RvciBhcyB2ZWMgfSBmcm9tIFwibWF0aFwiO1xyXG5cclxuY29uc3QgdmVjNiA9IHtcclxuICBkb3QoYSwgYil7XHJcbiAgICByZXR1cm4gIGFbMF0gKiBiWzBdICtcclxuICAgIGFbMV0gKiBiWzFdICsgXHJcbiAgICBhWzJdICogYlsyXSArXHJcbiAgICBhWzNdICogYlszXSArXHJcbiAgICBhWzRdICogYls0XSArXHJcbiAgICBhWzVdICogYls1XVxyXG4gICAgIFxyXG4gICAgXHJcbiAgfSxcclxuICBzY2FsZShhLCBmYWMpe1xyXG4gICAgcmV0dXJuIGEubWFwKGUgPT4gZSAqIGZhYylcclxuICB9LFxyXG4gIHN1bShhLCBiKXtcclxuICAgIHJldHVybiBbXHJcbiAgICAgIGFbMF0gKyBiWzBdLFxyXG4gICAgICBhWzFdICsgYlsxXSxcclxuICAgICAgYVsyXSArIGJbMl0sXHJcbiAgICAgIGFbM10gKyBiWzNdLFxyXG4gICAgICBhWzRdICsgYls0XSxcclxuICAgICAgYVs1XSArIGJbNV1cclxuICAgIF1cclxuICB9LFxyXG4gIGZyb21WZWMzKGEsIGIpe1xyXG4gICAgcmV0dXJuIFtcclxuICAgICAgLi4uYSwgLi4uYlxyXG4gICAgXVxyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElzbGFuZCB7XHJcbiAgY29uc3RydWN0b3IoLi4uY29uc3RyYWludHMpIHtcclxuICAgIHRoaXMuY29uc3RyYWludHMgPSBbLi4uY29uc3RyYWludHNdO1xyXG4gICAgdGhpcy5zaXplID0gdGhpcy5jb25zdHJhaW50cy5sZW5ndGhcclxuICAgIFxyXG5cclxuICB9XHJcbiAgYWRkQ29uc3RyYWludCguLi5hcmdzKSB7XHJcbiAgICB0aGlzLmNvbnN0cmFpbnRzLnB1c2goLi4uYXJncyk7XHJcbiAgfVxyXG4gIGdlbmVyYXRlQm9keU1hcHBpbmcoKXtcclxuICAgIGNvbnN0IGNvbnN0cmFpbnRzID0gdGhpcy5jb25zdHJhaW50c1xyXG4gICAgY29uc3QgYm9kaWVzTWFwID0gbmV3IE1hcCgpXHJcbiAgICBjb25zdCBKbWFwID0gW11cclxuICAgIGxldCBjb3VudGVyID0gMFxyXG4gICAgY29uc3RyYWludHMuZm9yRWFjaChjPT57XHJcbiAgICAgIGxldCBib2R5SW5kZXgxID0gYm9kaWVzTWFwLmdldChjLmJvZHkxLmlkKVxyXG4gICAgICBpZihib2R5SW5kZXgxID09PSB1bmRlZmluZWQpe1xyXG4gICAgICAgIGJvZHlJbmRleDEgPSBjb3VudGVyKytcclxuICAgICAgICBib2RpZXNNYXAuc2V0KGMuYm9keTEuaWQsIGJvZHlJbmRleDEpXHJcbiAgICAgIH1cclxuICAgICAgbGV0IGJvZHlJbmRleDIgPSBib2RpZXNNYXAuZ2V0KGMuYm9keTIuaWQpXHJcbiAgICAgIGlmKGJvZHlJbmRleDIgPT09IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgYm9keUluZGV4MiA9IGNvdW50ZXIrK1xyXG4gICAgICAgIGJvZGllc01hcC5zZXQoYy5ib2R5Mi5pZCwgYm9keUluZGV4MilcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgSm1hcC5wdXNoKGJvZHlJbmRleDEsIGJvZHlJbmRleDIpXHJcbiAgICB9KSBcclxuICAgIHRoaXMuYm9kaWVzTWFwID0gYm9kaWVzTWFwXHJcbiAgICB0aGlzLkptYXAgPSBKbWFwXHJcbiAgfVxyXG4gIGdlbmVyYXRlUHNldWRvVmVsVmVjdG9yKCkge31cclxuICBnZW5lcmF0ZVN5c3RlbShkZWx0YVRpbWUpIHtcclxuICAgIGNvbnN0IG4gPSB0aGlzLmNvbnN0cmFpbnRzLmxlbmd0aDtcclxuICAgIGNvbnN0IGNvbnN0cmFpbnRzID0gdGhpcy5jb25zdHJhaW50c1xyXG4gICAgLy9BID0gSk1KKiwgSk1KKnggPSBKViArIGJcclxuICAgIHRoaXMuSk1KcCA9IG5ldyBBcnJheShuICogbik7XHJcbiAgICB0aGlzLkpNSiA9IG5ldyBBcnJheShuICogbik7XHJcbiAgICB0aGlzLkpWID0gbmV3IEFycmF5KG4pO1xyXG4gICAgdGhpcy5KcFYgPSBuZXcgQXJyYXkobik7XHJcblxyXG4gICAgLy9OdW1lcmF0aW5nIGJvZGllc1xyXG4gICAgdGhpcy5nZW5lcmF0ZUJvZHlNYXBwaW5nKClcclxuICAgIC8qZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHtcclxuICAgICAgY29uc3QgY29uc3RyYWludCA9IHRoaXMuY29uc3RyYWludHNbaV07XHJcbiAgICAgIGNvbnN0IHsgYm9keTEsIGJvZHkyLCBKIH0gPSBjb25zdHJhaW50O1xyXG4gICAgICBjb25zdCBrID0gaSAqIG47XHJcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbjsgaisrKSB7XHJcbiAgICAgICAgaWYgKGsgPT09IGopIHtcclxuICAgICAgICAgIHRoaXMuSk1KW2sgKyBqXSA9ICgpID0+IGNvbnN0cmFpbnQuZWZmTWFzcztcclxuICAgICAgICAgIHRoaXMuSk1KcFtrICsgal0gPSAoKSA9PlxyXG4gICAgICAgICAgICBjb25zdHJhaW50LmJvZHkxLmludmVyc2VNYXNzICsgY29uc3RyYWludC5ib2R5Mi5pbnZlcnNlTWFzcztcclxuICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgX2NvbnN0cmFpbnQgPSB0aGlzLmNvbnN0cmFpbnRzW2pdO1xyXG5cclxuICAgICAgICBjb25zdCBfYm9keTEgPSBfY29uc3RyYWludC5ib2R5MTtcclxuICAgICAgICBjb25zdCBfYm9keTIgPSBfY29uc3RyYWludC5ib2R5MjtcclxuXHJcbiAgICAgICAgY29uc3QgZnAxID1cclxuICAgICAgICAgIGJvZHkxID09PSBfYm9keTFcclxuICAgICAgICAgICAgPyAoKSA9PiB2ZWMuZG90KGNvbnN0cmFpbnQuSk1bMF0sIF9jb25zdHJhaW50LkpbMF0pXHJcbiAgICAgICAgICAgIDogKCkgPT4gMDtcclxuICAgICAgICBjb25zdCBmcDIgPVxyXG4gICAgICAgICAgYm9keTIgPT09IF9ib2R5MlxyXG4gICAgICAgICAgICA/ICgpID0+IHZlYy5kb3QoY29uc3RyYWludC5KTVsyXSwgX2NvbnN0cmFpbnQuSlsyXSlcclxuICAgICAgICAgICAgOiAoKSA9PiAwO1xyXG4gICAgICAgIGNvbnN0IGZwMyA9XHJcbiAgICAgICAgICBib2R5MSA9PT0gX2JvZHkyXHJcbiAgICAgICAgICAgID8gKCkgPT4gdmVjLmRvdChjb25zdHJhaW50LkpNWzBdLCBfY29uc3RyYWludC5KWzJdKVxyXG4gICAgICAgICAgICA6ICgpID0+IDA7XHJcbiAgICAgICAgY29uc3QgZnA0ID1cclxuICAgICAgICAgIGJvZHkyID09PSBfYm9keTFcclxuICAgICAgICAgICAgPyAoKSA9PiB2ZWMuZG90KGNvbnN0cmFpbnQuSk1bMl0sIF9jb25zdHJhaW50LkpbMF0pXHJcbiAgICAgICAgICAgIDogKCkgPT4gMDtcclxuICAgICAgICBjb25zdCBmMSA9XHJcbiAgICAgICAgICBib2R5MSA9PT0gX2JvZHkxXHJcbiAgICAgICAgICAgID8gKCkgPT5cclxuICAgICAgICAgICAgICAgIHZlYy5kb3QoY29uc3RyYWludC5KTVswXSwgX2NvbnN0cmFpbnQuSlswXSkgK1xyXG4gICAgICAgICAgICAgICAgdmVjLmRvdChjb25zdHJhaW50LkpNWzFdLCBfY29uc3RyYWludC5KWzFdKVxyXG4gICAgICAgICAgICA6ICgpID0+IDA7XHJcbiAgICAgICAgY29uc3QgZjIgPVxyXG4gICAgICAgICAgYm9keTIgPT09IF9ib2R5MlxyXG4gICAgICAgICAgICA/ICgpID0+XHJcbiAgICAgICAgICAgICAgICB2ZWMuZG90KGNvbnN0cmFpbnQuSk1bMl0sIF9jb25zdHJhaW50LkpbMl0pICtcclxuICAgICAgICAgICAgICAgIHZlYy5kb3QoY29uc3RyYWludC5KTVszXSwgX2NvbnN0cmFpbnQuSlszXSlcclxuICAgICAgICAgICAgOiAoKSA9PiAwO1xyXG4gICAgICAgIGNvbnN0IGYzID1cclxuICAgICAgICAgIGJvZHkxID09PSBfYm9keTJcclxuICAgICAgICAgICAgPyAoKSA9PlxyXG4gICAgICAgICAgICAgICAgdmVjLmRvdChjb25zdHJhaW50LkpNWzBdLCBfY29uc3RyYWludC5KWzJdKSArXHJcbiAgICAgICAgICAgICAgICB2ZWMuZG90KGNvbnN0cmFpbnQuSk1bMV0sIF9jb25zdHJhaW50LkpbM10pXHJcbiAgICAgICAgICAgIDogKCkgPT4gMDtcclxuICAgICAgICBjb25zdCBmNCA9XHJcbiAgICAgICAgICBib2R5MiA9PT0gX2JvZHkxXHJcbiAgICAgICAgICAgID8gKCkgPT5cclxuICAgICAgICAgICAgICAgIHZlYy5kb3QoY29uc3RyYWludC5KTVsyXSwgX2NvbnN0cmFpbnQuSlswXSkgK1xyXG4gICAgICAgICAgICAgICAgdmVjLmRvdChjb25zdHJhaW50LkpNWzNdLCBfY29uc3RyYWludC5KWzFdKVxyXG4gICAgICAgICAgICA6ICgpID0+IDA7XHJcblxyXG4gICAgICAgIHRoaXMuSk1KW2sgKyBqXSA9ICgpID0+IGYxKCkgKyBmMigpICsgZjMoKSArIGY0KCk7XHJcbiAgICAgICAgdGhpcy5KTUpwW2sgKyBqXSA9ICgpID0+IGZwMSgpICsgZnAyKCkgKyBmcDMoKSArIGZwNCgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAgIHZlYy5kb3QoSlswXSwgYm9keTEudmVsb2NpdHkpICtcclxuICAgICAgICB2ZWMuZG90KEpbMV0sIGJvZHkxLmFuZ3VsYXJWKSArXHJcbiAgICAgICAgdmVjLmRvdChKWzJdLCBib2R5Mi52ZWxvY2l0eSkgK1xyXG4gICAgICAgIHZlYy5kb3QoSlszXSwgYm9keTIuYW5ndWxhclYpO1xyXG4gICAgICB0aGlzLkpWW2ldID0gKGRlbHRhVGltZSkgPT5cclxuICAgICAgICAtY29uc3RyYWludC5yZWxhdGl2ZVZlbG9jaXR5Tm9ybWFsUHJvamVjdGlvbiArXHJcbiAgICAgICAgKE1hdGgubWF4KDAsIGNvbnN0cmFpbnQucGVuRGVwdGggLSBjb25zdHJhaW50LnRyZXNob2xkKSAvIGRlbHRhVGltZSkgKlxyXG4gICAgICAgICAgY29uc3RyYWludC5iaWFzRmFjdG9yOyAvLysgYiogMC4xMjU7XHJcblxyXG4gICAgICB0aGlzLkpwVltpXSA9ICgpID0+IC12ZWMuZG90KEpbMF0sIGJvZHkxLnBzZXVkb1ZlbG9jaXR5KSAtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWMuZG90KEpbMV0sIGJvZHkxLnBzZXVkb0FuZ3VsYXJWKSAtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWMuZG90KEpbMl0sIGJvZHkyLnBzZXVkb1ZlbG9jaXR5KSAtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlYy5kb3QoSlszXSwgYm9keTIucHNldWRvQW5ndWxhclYpIC0gY29uc3RyYWludC5iaWFzL2RlbHRhVGltZSBcclxuICAgICAgdGhpcy5KcFZbaV0gPSAoZGVsdGFUaW1lKSA9PlxyXG4gICAgICAgIChNYXRoLm1heCgwLCBjb25zdHJhaW50LnBlbkRlcHRoIC0gY29uc3RyYWludC50cmVzaG9sZCkgLyBkZWx0YVRpbWUpICpcclxuICAgICAgICBjb25zdHJhaW50LnBzZXVkb0JpYXNGYWN0b3I7XHJcbiAgICB9Ki9cclxuICB9XHJcbiAgLy9KICogVmVsXHJcbiAgXHJcbiAgc29sdmVQR1MoZGVsdGFUaW1lKXtcclxuXHJcbiAgICBcclxuICAgIGNvbnN0IHtKbWFwLCBib2RpZXNNYXAsIGNvbnN0cmFpbnRzfSA9IHRoaXNcclxuICAgIGNvbnN0IG51bUJvZGllcyA9IGJvZGllc01hcC5zaXplXHJcbiAgICBjb25zdCBuID0gY29uc3RyYWludHMubGVuZ3RoXHJcbiAgICBjb25zdCBkID0gW11cclxuICAgIGxldCBudW1JdGVyID0gMTBcclxuICAgIGNvbnN0IGxhbWJkYTAgPSBuZXcgQXJyYXkobikuZmlsbCgwKVxyXG5cclxuXHJcbiAgICAvL0JKbGFtYmRhXHJcbiAgICBcclxuICAgIGNvbnN0IEJsID0gbmV3IEFycmF5KG51bUJvZGllcykuZmlsbChbMCwwLDAsMCwwLDBdKVxyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IG47IGkrKyl7XHJcbiAgICAgIGNvbnN0IGIxID0gSm1hcFtpICogMiBdXHJcbiAgICAgIGNvbnN0IGIyID0gSm1hcFtpICogMiArIDFdIFxyXG4gICAgXHJcbiAgICAgIGNvbnN0IHggPSB2ZWM2LnNjYWxlKGNvbnN0cmFpbnRzW2ldLkJbMF0sIGxhbWJkYTBbaV0pXHJcbiAgICAgIFxyXG4gICAgICBjb25zdCB5ID0gdmVjNi5zdW0oeCwgQmxbYjFdKVxyXG4gICAgICBcclxuICAgICAgQmxbYjFdID0gdmVjNi5zdW0odmVjNi5zY2FsZShjb25zdHJhaW50c1tpXS5CWzBdLCBsYW1iZGEwW2ldKSwgQmxbYjFdKVxyXG4gICAgICBcclxuICAgICAgXHJcbiAgICAgIEJsW2IyXSA9IHZlYzYuc3VtKHZlYzYuc2NhbGUoY29uc3RyYWludHNbaV0uQlsxXSwgbGFtYmRhMFtpXSksIEJsW2IyXSlcclxuICAgIFxyXG4gICAgICBcclxuICAgIH1cclxuICBcclxuICAgIC8vUEdTXHJcbiBcclxuICAgIFxyXG4gICAgY29uc3QgbGFtYmRhID0gWy4uLmxhbWJkYTBdXHJcbiAgICBmb3IobGV0IGkgPSAwOyBpPCBuOyBpKyspe1xyXG4gICAgICBkLnB1c2goY29uc3RyYWludHNbaV0uZWZmTWFzcylcclxuICAgIH1cclxuXHJcbiAgICB3aGlsZShudW1JdGVyID4gMCl7XHJcbiAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBuOyBpKyspe1xyXG4gICAgICAgIGNvbnN0IGMgPSBjb25zdHJhaW50c1tpXVxyXG4gICAgICAgIGNvbnN0IEoxID0gWy4uLmMuSlswXSwgLi4uYy5KWzFdXVxyXG4gICAgICAgIGNvbnN0IEoyID0gWy4uLmMuSlsyXSwgLi4uYy5KWzNdXVxyXG4gICAgICAgIGNvbnN0IGIxID0gSm1hcFtpICogMiBdXHJcbiAgICAgICAgY29uc3QgYjIgPSBKbWFwW2kgKiAyICsgMV1cclxuICAgICAgIFxyXG4gICAgICAgIGxldCBkZWx0YUxhbWJkYSA9IChjLmJpYXMgLSB2ZWM2LmRvdChKMSwgQmxbYjFdKSAtIHZlYzYuZG90KEoyLCBCbFtiMl0pKSAvIGRbaV1cclxuICAgICAgICBcclxuICAgICAgICBsYW1iZGEwW2ldID0gbGFtYmRhW2ldXHJcbiAgICAgICAgbGFtYmRhW2ldID0gTWF0aC5tYXgoYy5sYW1iZGFNaW4sIE1hdGgubWluKGxhbWJkYTBbaV0gKyBkZWx0YUxhbWJkYSwgYy5sYW1iZGFNYXgpKVxyXG4gICAgICAgIFxyXG4gICAgICAgIGRlbHRhTGFtYmRhID0gbGFtYmRhW2ldIC0gbGFtYmRhMFtpXVxyXG4gICAgICAgIFxyXG4gICAgICAgIEJsW2IxXSA9IHZlYzYuc3VtKEJsW2IxXSwgdmVjNi5zY2FsZShjLkJbMF0sIGRlbHRhTGFtYmRhKSlcclxuICAgICAgICBCbFtiMl0gPSB2ZWM2LnN1bShCbFtiMl0sIHZlYzYuc2NhbGUoYy5CWzFdLCBkZWx0YUxhbWJkYSkpXHJcbiAgICAgIFxyXG4gICAgICB9XHJcbiAgICAgIG51bUl0ZXItLVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgbjsgaSsrKXtcclxuICAgICAgY29uc3RyYWludHNbaV0uYXBwbHlSZXNvbHZpbmdJbXB1bHNlKGxhbWJkYVtpXSlcclxuICAgIH1cclxuICAgIHJldHVybiBsYW1iZGFcclxuICB9XHJcbiAgZ2V0Sk1KKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuSk1KLm1hcCgoZikgPT4gZigpKTtcclxuICB9XHJcbiAgZ2V0SlYoZGVsdGFUaW1lKSB7XHJcbiAgICByZXR1cm4gdGhpcy5KVi5tYXAoKGYpID0+IGYoZGVsdGFUaW1lKSk7XHJcbiAgfVxyXG4gIGdldEpwVihkZWx0YVRpbWUpIHtcclxuICAgIHJldHVybiB0aGlzLkpwVi5tYXAoKGYpID0+IGYoZGVsdGFUaW1lKSk7XHJcbiAgfVxyXG4gIGdldEpNSnAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5KTUpwLm1hcCgoZikgPT4gZigpKTtcclxuICB9XHJcbiAgZ2V0VXBkYXRlZFZhbHVlcyhkZWx0YVRpbWUpIHtcclxuICAgIHJldHVybiBbXHJcbiAgICAgIHRoaXMuSk1KLm1hcCgoZikgPT4gZigpKSxcclxuICAgICAgdGhpcy5KVi5tYXAoKGYpID0+IGYoKSksXHJcbiAgICAgIHRoaXMuSnBWLm1hcCgoZikgPT4gZihkZWx0YVRpbWUpKSxcclxuICAgIF07XHJcbiAgfVxyXG4gIGFwcGx5UmVzb2x2aW5nSW1wdWxzZXMobGFtYmRhKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMCwgbiA9IHRoaXMuY29uc3RyYWludHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgIHRoaXMuY29uc3RyYWludHNbaV0uYXBwbHlSZXNvbHZpbmdJbXB1bHNlKGxhbWJkYVtpXSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGFwcGx5UmVzb2x2aW5nUHNldWRvSW1wdWxzZXMobGFtYmRhKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMCwgbiA9IHRoaXMuY29uc3RyYWludHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgIHRoaXMuY29uc3RyYWludHNbaV0uYXBwbHlSZXNvbHZpbmdQc2V1ZG9JbXB1bHNlKGxhbWJkYVtpXSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBtMywgdmVjdG9yIH0gZnJvbSBcIm1hdGhcIjtcclxuXHJcbmNvbnN0IHsgZGlzdGFuY2VGcm9tTGluZSwgbm9ybSwgZmluZEZ1cnRoZXN0UG9pbnQsIHN1bSwgZGlmZiwgbm9ybVNxLCBkb3QgfSA9XHJcbiAgdmVjdG9yO1xyXG5cclxuY29uc3QgcHJlYyA9IDAuMDAwNTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hbmlmb2xkIHtcclxuICBjb25zdHJ1Y3RvciguLi5jb250YWN0cykge1xyXG4gICAgdGhpcy5jb250YWN0cyA9IGNvbnRhY3RzO1xyXG4gICAgdGhpcy5rZWVwID0gdHJ1ZTtcclxuICB9XHJcbiAgdXBkYXRlKCkge1xyXG4gICAgY29uc3QgY29udGFjdHMgPSB0aGlzLmNvbnRhY3RzO1xyXG4gICAgaWYgKGNvbnRhY3RzLmxlbmd0aCA8IDIpIHtcclxuICAgICAgdGhpcy5rZWVwID0gZmFsc2U7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGZvciAobGV0IGkgPSAwLCBuID0gY29udGFjdHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGNvbnRhY3QgPSBjb250YWN0c1tpXTtcclxuICAgICAgY29uc3QgcG9zMSA9IGNvbnRhY3QuYm9keTEuY29sbGlkZXIucG9zO1xyXG4gICAgICBjb25zdCBwb3MyID0gY29udGFjdC5ib2R5Mi5jb2xsaWRlci5wb3M7XHJcbiAgICAgIGNvbnN0IF9yYSA9IG0zLnRyYW5zZm9ybVBvaW50KFxyXG4gICAgICAgIGNvbnRhY3QuYm9keTEuY29sbGlkZXIuUm1hdHJpeCxcclxuICAgICAgICBjb250YWN0LnJhTG9jYWxcclxuICAgICAgKTtcclxuICAgICAgY29uc3QgX3JiID0gbTMudHJhbnNmb3JtUG9pbnQoXHJcbiAgICAgICAgY29udGFjdC5ib2R5Mi5jb2xsaWRlci5SbWF0cml4LFxyXG4gICAgICAgIGNvbnRhY3QucmJMb2NhbFxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCBfUEEgPSBzdW0ocG9zMSwgX3JhKTtcclxuICAgICAgY29uc3QgX1BCID0gc3VtKHBvczIsIF9yYik7XHJcbiAgICAgIGNvbnN0IHJhQmlhcyA9IGRpZmYoY29udGFjdC5QQSwgX1BBKTtcclxuICAgICAgY29uc3QgcmJCaWFzID0gZGlmZihjb250YWN0LlBCLCBfUEIpO1xyXG4gICAgICAvL2NvbnRhY3QudXBkYXRlQ29udGFjdERhdGEoKVxyXG4gICAgICBpZiAobm9ybShyYUJpYXMpID4gcHJlYyB8fCBub3JtKHJiQmlhcykgPiBwcmVjKSB7XHJcbiAgICAgICAgdGhpcy5rZWVwID0gZmFsc2U7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb250YWN0LlBBID0gX1BBO1xyXG4gICAgICBjb250YWN0LlBCID0gX1BCO1xyXG4gICAgICBjb250YWN0LnJhID0gX3JhO1xyXG4gICAgICBjb250YWN0LnJiID0gX3JiO1xyXG4gICAgICBjb250YWN0LnBlbkRlcHRoID0gZG90KGNvbnRhY3QubiwgZGlmZihfUEIsIF9QQSkpO1xyXG4gICAgICBcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFRyZWUgZnJvbSBcIi4vdHJlZVwiO1xyXG5pbXBvcnQgeyB2ZWN0b3IgfSBmcm9tIFwibWF0aFwiO1xyXG5pbXBvcnQge1xyXG4gIHNvbHZlQ29sbGlzaW9uLFxyXG4gIHNvbHZlQ29udGFjdFBvc2l0aW9uRXJyLFxyXG4gIHdhcm1TdGFydCxcclxuICBzb2x2ZVBvc2l0aW9uLFxyXG59IGZyb20gXCIuL2NvbnN0cmFpbnRzXCI7XHJcbmltcG9ydCB7IGdqayB9IGZyb20gXCIuL2dqa1wiO1xyXG5cclxuaW1wb3J0IE1hbmlmb2xkIGZyb20gXCIuL21hbmlmb2xkXCI7XHJcbmltcG9ydCBJc2xhbmQgZnJvbSBcIi4vaXNsYW5kXCI7XHJcbmltcG9ydCB7IEdhdXNzU2VpZGVsIH0gZnJvbSBcIi4vR1Nzb2x2ZXJcIjtcclxuaW1wb3J0IHtcclxuICBDb25zdHJhaW50LFxyXG4gIENvbnRhY3RDb25zdHJhaW50LFxyXG4gIEZyaWN0aW9uQ29uc3RyYWludCxcclxuICBQb3NpdGlvbkNvbnN0cmFpbnQsXHJcbn0gZnJvbSBcIi4vY29udGFjdFwiO1xyXG5cclxuY29uc3Qgc2FtZUdyb3VwID0gKGJvZHkxLCBib2R5MikgPT4ge1xyXG4gIGlmICghYm9keTEuZ3JvdXApIHJldHVybjtcclxuICBpZiAoIWJvZHkyLmdyb3VwKSByZXR1cm47XHJcbiAgcmV0dXJuIGJvZHkxLmdyb3VwID09PSBib2R5Mi5ncm91cDtcclxufTtcclxuY29uc3QgcGFpckhhc2ggPSAoeCwgeSkgPT5cclxuICB4ID09PSBNYXRoLm1heCh4LCB5KSA/IHggKiB4ICsgeCArIHkgOiB5ICogeSArIHggKyB5O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2ltdWxhdGlvbiB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLm9iamVjdHMgPSBbXTtcclxuICAgIHRoaXMuYnZoID0gbmV3IFRyZWUoKTtcclxuICAgIHRoaXMuY29sbGlzaW9ucyA9IFtdO1xyXG4gICAgdGhpcy5jb25zdHJhaW50cyA9IG5ldyBNYXAoKTtcclxuICAgIHRoaXMuY29sbGlzaW9uTWFuaWZvbGRzID0gbmV3IE1hcCgpO1xyXG4gICAgdGhpcy5sYXN0SWQgPSAxO1xyXG4gIH1cclxuICBhZGRPYmplY3Qob2JqZWN0KSB7XHJcbiAgICBjb25zdCBhYWJiID0gb2JqZWN0LmdldEV4cGFuZGVkQUFCQigpO1xyXG5cclxuICAgIGNvbnN0IGxlYWYgPSB0aGlzLmJ2aC5pbnNlcnRMZWFmKGFhYmIsIG9iamVjdCk7XHJcbiAgICBvYmplY3QuQlZsaW5rID0gbGVhZjtcclxuICAgIG9iamVjdC5pZCA9IHRoaXMubGFzdElkO1xyXG4gICAgdGhpcy5sYXN0SWQrKztcclxuICAgIG9iamVjdC5vbihcInVwZGF0ZVwiLCAoKSA9PiB0aGlzLnVwZGF0ZU9iamVjdEFBQkIuY2FsbCh0aGlzLCBvYmplY3QpKTtcclxuXHJcbiAgICB0aGlzLm9iamVjdHMucHVzaChvYmplY3QpO1xyXG4gIH1cclxuICBhZGRDb25zdHJhaW50cyhjb25zdHJhaW50cywgbmFtZSkge1xyXG4gICAgY29uc3Qgc3lzdGVtID0gbmV3IElzbGFuZCguLi5jb25zdHJhaW50cyk7XHJcbiAgICBzeXN0ZW0uZ2VuZXJhdGVTeXN0ZW0oKTtcclxuICAgIGNvbnN0IHBvc2l0aW9uU3lzdGVtID0gbmV3IElzbGFuZCguLi5jb25zdHJhaW50cyk7XHJcbiAgICBwb3NpdGlvblN5c3RlbS5nZW5lcmF0ZVN5c3RlbSgpO1xyXG4gICAgdGhpcy5jb25zdHJhaW50cy5zZXQobmFtZSwgW3N5c3RlbSwgcG9zaXRpb25TeXN0ZW1dKTtcclxuICB9XHJcbiAgdXBkYXRlT2JqZWN0QUFCQihvYmplY3QpIHtcclxuICAgIGNvbnN0IG5ld0FBQkIgPSBvYmplY3QuZ2V0QUFCQigpO1xyXG5cclxuICAgIHRoaXMuYnZoLnJlbW92ZUxlYWYob2JqZWN0LkJWbGluayk7XHJcbiAgICBjb25zdCBsZWFmID0gdGhpcy5idmguaW5zZXJ0TGVhZihuZXdBQUJCLCBvYmplY3QpO1xyXG4gICAgb2JqZWN0LkJWbGluayA9IGxlYWY7XHJcbiAgfVxyXG4gIHJlbW92ZU9iamVjdChvYmplY3QpIHtcclxuICAgIHRoaXMuYnZoLnJlbW92ZUxlYWYob2JqZWN0LkJWbGluayk7XHJcbiAgICB0aGlzLm9iamVjdHMgPSB0aGlzLm9iamVjdHMuZmlsdGVyKChlbCkgPT4gZWwgPT09IG9iamVjdCk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVDb2xsaXNpb25zKCkge1xyXG4gICAgY29uc3QgeyBjb2xsaXNpb25NYW5pZm9sZHMgfSA9IHRoaXM7XHJcbiAgICBmb3IgKGNvbnN0IFtoYXNoLCBtYW5pZm9sZF0gb2YgY29sbGlzaW9uTWFuaWZvbGRzKSB7XHJcbiAgICAgIG1hbmlmb2xkLnVwZGF0ZSgpO1xyXG4gICAgICBpZiAoIW1hbmlmb2xkLmtlZXApIGNvbGxpc2lvbk1hbmlmb2xkcy5kZWxldGUoaGFzaCk7XHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCBpID0gMCwgbiA9IHRoaXMub2JqZWN0cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgY29uc3Qgb2JqZWN0ID0gdGhpcy5vYmplY3RzW2ldO1xyXG4gICAgICBpZiAob2JqZWN0LnN0YXRpYykgY29udGludWU7XHJcbiAgICAgIGNvbnN0IGNvbHMgPSB0aGlzLmJ2aC5nZXRDb2xsaXNpb25zKG9iamVjdC5CVmxpbmspO1xyXG4gICAgICBvYmplY3QuQlZsaW5rLmlzQ2hlY2tlZCA9IHRydWU7XHJcbiAgICAgIGlmIChjb2xzLmxlbmd0aCAhPSAwKVxyXG4gICAgICAgIGZvciAobGV0IGogPSAwLCBuID0gY29scy5sZW5ndGg7IGogPCBuOyBqKyspIHtcclxuICAgICAgICAgIGlmIChzYW1lR3JvdXAob2JqZWN0LCBjb2xzW2pdKSkgY29udGludWU7XHJcbiAgICAgICAgICBjb25zdCBoYXNoID0gcGFpckhhc2gob2JqZWN0LmlkLCBjb2xzW2pdLmlkKTtcclxuICAgICAgICAgIGxldCBtYW5pZm9sZCA9IHRoaXMuY29sbGlzaW9uTWFuaWZvbGRzLmdldChoYXNoKTtcclxuICAgICAgICAgIGlmIChtYW5pZm9sZCkgY29udGludWU7XHJcbiAgICAgICAgICBjb25zdCBjb250YWN0cyA9IGdqayhvYmplY3QsIGNvbHNbal0pO1xyXG5cclxuICAgICAgICAgIGlmIChjb250YWN0cykge1xyXG4gICAgICAgICAgICBtYW5pZm9sZCA9IG5ldyBNYW5pZm9sZCguLi5jb250YWN0cyk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmNvbGxpc2lvbk1hbmlmb2xkcy5zZXQoaGFzaCwgbWFuaWZvbGQpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmJ2aC5zZXRVbmNoZWNrZWQoKTtcclxuICB9XHJcbiAgdGljayhkZWx0YVRpbWUpIHtcclxuICAgIHRoaXMudXBkYXRlQ29sbGlzaW9ucygpO1xyXG4gICAgbGV0IG1hbmlmb2xkcyA9IHRoaXMuY29sbGlzaW9uTWFuaWZvbGRzO1xyXG4gICAgZm9yIChsZXQgaSA9IDAsIG4gPSB0aGlzLm9iamVjdHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgIHRoaXMub2JqZWN0c1tpXS5pbnRlZ3JhdGVGb3JjZXMoZGVsdGFUaW1lKTtcclxuICAgIH1cclxuICAgIGNvbnN0IHN5c3RlbSA9IG5ldyBJc2xhbmQoKTtcclxuICAgIGNvbnN0IGZyaWN0aW9uU3lzdGVtID0gbmV3IElzbGFuZCgpO1xyXG4gICAgY29uc3QgY29udGFjdENvbnN0cmFpbnRzID0gW107XHJcbiAgICBjb25zdCBmcmljdGlvbkNvbnN0cmFpbnRzID0gW107XHJcbiAgICBmb3IgKGxldCBba2V5LCBtYW5pZm9sZF0gb2YgbWFuaWZvbGRzKSB7XHJcbiAgICAgIGNvbnN0IHVzZVZlbG9jaXR5QmlhcyA9IG1hbmlmb2xkLmNvbnRhY3RzLmxlbmd0aCA8IDM7XHJcblxyXG4gICAgICBtYW5pZm9sZC5jb250YWN0cy5mb3JFYWNoKChjKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBib2R5MSwgYm9keTIsIHJhTG9jYWwsIHJiTG9jYWwsIHJhLCByYiwgaSwgaiwgcGVuRGVwdGgsIG4gfSA9IGM7XHJcbiAgICAgICAgY29uc3QgY29uc3RyYWludCA9IG5ldyBDb250YWN0Q29uc3RyYWludChcclxuICAgICAgICAgIGJvZHkxLFxyXG4gICAgICAgICAgYm9keTIsXHJcbiAgICAgICAgICBuLFxyXG4gICAgICAgICAgcmEsXHJcbiAgICAgICAgICByYixcclxuICAgICAgICAgIHJhTG9jYWwsXHJcbiAgICAgICAgICByYkxvY2FsLFxyXG4gICAgICAgICAgbnVsbCxcclxuICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICBwZW5EZXB0aCxcclxuICAgICAgICAgIGksXHJcbiAgICAgICAgICBqXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgY29uc3QgZkNvbnN0cmFpbnQxID0gbmV3IEZyaWN0aW9uQ29uc3RyYWludChcclxuICAgICAgICAgIGJvZHkxLFxyXG4gICAgICAgICAgYm9keTIsXHJcbiAgICAgICAgICB2ZWN0b3Iuc2NhbGUoaSwgLTEpLFxyXG4gICAgICAgICAgcmEsXHJcbiAgICAgICAgICByYixcclxuICAgICAgICAgIHJhTG9jYWwsXHJcbiAgICAgICAgICByYkxvY2FsLFxyXG4gICAgICAgICAgMCxcclxuICAgICAgICAgIC1ib2R5MS5mcmljdGlvbiAtIGJvZHkyLmZyaWN0aW9uLFxyXG4gICAgICAgICAgYm9keTEuZnJpY3Rpb24gKyBib2R5Mi5mcmljdGlvbixcclxuICAgICAgICAgIG51bGxcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IGZDb25zdHJhaW50MiA9IG5ldyBGcmljdGlvbkNvbnN0cmFpbnQoXHJcbiAgICAgICAgICBib2R5MSxcclxuICAgICAgICAgIGJvZHkyLFxyXG4gICAgICAgICAgdmVjdG9yLnNjYWxlKGosIC0xKSxcclxuICAgICAgICAgIHJhLFxyXG4gICAgICAgICAgcmIsXHJcbiAgICAgICAgICByYUxvY2FsLFxyXG4gICAgICAgICAgcmJMb2NhbCxcclxuICAgICAgICAgIDAsXHJcbiAgICAgICAgICAtYm9keTEuZnJpY3Rpb24gLSBib2R5Mi5mcmljdGlvbixcclxuICAgICAgICAgIGJvZHkxLmZyaWN0aW9uICsgYm9keTIuZnJpY3Rpb24sXHJcbiAgICAgICAgICBudWxsXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgaWYgKDEpIHtcclxuICAgICAgICAgIGNvbnN0cmFpbnQuYmlhc0ZhY3RvciA9IDAuMTI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0cmFpbnQudXBkYXRlTGVmdFBhcnQoZGVsdGFUaW1lKTtcclxuICAgICAgICBjb25zdHJhaW50LnVwZGF0ZVJpZ2h0UGFydChkZWx0YVRpbWUpO1xyXG4gICAgICAgIGZDb25zdHJhaW50MS51cGRhdGVMZWZ0UGFydChkZWx0YVRpbWUpO1xyXG4gICAgICAgIGZDb25zdHJhaW50Mi51cGRhdGVMZWZ0UGFydChkZWx0YVRpbWUpO1xyXG4gICAgICAgIGZDb25zdHJhaW50MS51cGRhdGVSaWdodFBhcnQoZGVsdGFUaW1lKTtcclxuICAgICAgICBmQ29uc3RyYWludDIudXBkYXRlUmlnaHRQYXJ0KGRlbHRhVGltZSk7XHJcbiAgICAgICAgY29udGFjdENvbnN0cmFpbnRzLnB1c2goY29uc3RyYWludCk7XHJcbiAgICAgICAgZnJpY3Rpb25Db25zdHJhaW50cy5wdXNoKGZDb25zdHJhaW50MSwgZkNvbnN0cmFpbnQyKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBzeXN0ZW0uYWRkQ29uc3RyYWludCguLi5jb250YWN0Q29uc3RyYWludHMpO1xyXG4gICAgZnJpY3Rpb25TeXN0ZW0uYWRkQ29uc3RyYWludCguLi5mcmljdGlvbkNvbnN0cmFpbnRzKTtcclxuICAgIHN5c3RlbS5nZW5lcmF0ZVN5c3RlbShkZWx0YVRpbWUpO1xyXG4gICAgY29uc3QgbGFtYmRhID0gc3lzdGVtLnNvbHZlUEdTKGRlbHRhVGltZSk7XHJcbiAgICBmb3IgKGxldCBpID0gMCwgbiA9IGxhbWJkYS5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgZnJpY3Rpb25Db25zdHJhaW50c1syICogaV0ubGFtYmRhTWluICo9IGxhbWJkYVtpXTtcclxuICAgICAgZnJpY3Rpb25Db25zdHJhaW50c1syICogaV0ubGFtYmRhTWF4ICo9IGxhbWJkYVtpXTtcclxuICAgICAgZnJpY3Rpb25Db25zdHJhaW50c1syICogaSArIDFdLmxhbWJkYU1pbiAqPSBsYW1iZGFbaV07XHJcbiAgICAgIGZyaWN0aW9uQ29uc3RyYWludHNbMiAqIGkgKyAxXS5sYW1iZGFNYXggKj0gbGFtYmRhW2ldO1xyXG4gICAgfVxyXG4gICAgZnJpY3Rpb25TeXN0ZW0uZ2VuZXJhdGVTeXN0ZW0oZGVsdGFUaW1lKTtcclxuICAgIGZyaWN0aW9uU3lzdGVtLnNvbHZlUEdTKGRlbHRhVGltZSk7XHJcbiAgICAvKiAgXHJcbiAgICBmb3IgKGNvbnN0IFtuYW1lLCBjb25zdHJhaW50c10gb2YgdGhpcy5jb25zdHJhaW50cykge1xyXG4gICAgICBjb25zdCBzeXN0ZW0gPSBjb25zdHJhaW50c1swXTtcclxuICAgICAgc3lzdGVtLmNvbnN0cmFpbnRzLmZvckVhY2goKGMpID0+IGMudXBkYXRlRXEoKSk7XHJcblxyXG4gICAgICBjb25zdCBKTUogPSBzeXN0ZW0uZ2V0Sk1KKCk7XHJcbiAgICAgIGNvbnN0IEpWID0gc3lzdGVtLmdldEpWKGRlbHRhVGltZSk7XHJcblxyXG4gICAgICBjb25zdCBsYW1iZGEgPSBHYXVzc1NlaWRlbChKTUosIEpWLCBzeXN0ZW0uY29uc3RyYWludHMubGVuZ3RoLCAxZS0xMik7XHJcblxyXG4gICAgICBzeXN0ZW0uYXBwbHlSZXNvbHZpbmdJbXB1bHNlcyhsYW1iZGEpO1xyXG4gICAgfSovXHJcbiAgICBmb3IgKGxldCBpID0gMCwgbiA9IHRoaXMub2JqZWN0cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgdGhpcy5vYmplY3RzW2ldLmludGVncmF0ZVZlbG9jaXRpZXMoZGVsdGFUaW1lKTtcclxuICAgIH1cclxuICAgIHRoaXMub2JqZWN0cy5mb3JFYWNoKChvYmplY3QpID0+IG9iamVjdC51cGRhdGVJbnZlcnNlSW5lcnRpYSgpKTtcclxuICAgIGNvbnN0IHBvc2l0aW9uU3lzdGVtID0gbmV3IElzbGFuZCgpO1xyXG4gICAgY29uc3QgcG9zaXRpb25Db25zdHJhaW50cyA9IFtdO1xyXG5cclxuICAgIGZvciAoY29uc3QgW2tleSwgbWFuaWZvbGRdIG9mIG1hbmlmb2xkcykge1xyXG4gICAgICBjb25zdCB7IGNvbnRhY3RzIH0gPSBtYW5pZm9sZDtcclxuICAgICAgaWYgKGNvbnRhY3RzLmxlbmd0aCA+IDIpIHtcclxuICAgICAgICBwb3NpdGlvbkNvbnN0cmFpbnRzLnB1c2goXHJcbiAgICAgICAgICAuLi5jb250YWN0cy5tYXAoKGMpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICAgIGJvZHkxLFxyXG4gICAgICAgICAgICAgIGJvZHkyLFxyXG4gICAgICAgICAgICAgIHJhTG9jYWwsXHJcbiAgICAgICAgICAgICAgcmJMb2NhbCxcclxuICAgICAgICAgICAgICByYSxcclxuICAgICAgICAgICAgICByYixcclxuICAgICAgICAgICAgICBpLFxyXG4gICAgICAgICAgICAgIGosXHJcbiAgICAgICAgICAgICAgcGVuRGVwdGgsXHJcbiAgICAgICAgICAgICAgbixcclxuICAgICAgICAgICAgfSA9IGM7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbnN0cmFpbnQgPSBuZXcgUG9zaXRpb25Db25zdHJhaW50KFxyXG4gICAgICAgICAgICAgIGJvZHkxLFxyXG4gICAgICAgICAgICAgIGJvZHkyLFxyXG4gICAgICAgICAgICAgIG4sXHJcbiAgICAgICAgICAgICAgcmEsXHJcbiAgICAgICAgICAgICAgcmIsXHJcbiAgICAgICAgICAgICAgcmFMb2NhbCxcclxuICAgICAgICAgICAgICByYkxvY2FsLFxyXG4gICAgICAgICAgICAgIDAuMTIsXHJcbiAgICAgICAgICAgICAgMC4wMDEsXHJcbiAgICAgICAgICAgICAgcGVuRGVwdGhcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgY29uc3RyYWludC51cGRhdGVMZWZ0UGFydChkZWx0YVRpbWUpXHJcbiAgICAgICAgICAgIGNvbnN0cmFpbnQudXBkYXRlUmlnaHRQYXJ0KGRlbHRhVGltZSlcclxuICAgICAgICAgICAgcmV0dXJuIGNvbnN0cmFpbnRcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcG9zaXRpb25TeXN0ZW0uYWRkQ29uc3RyYWludCguLi5wb3NpdGlvbkNvbnN0cmFpbnRzKVxyXG4gICAgcG9zaXRpb25TeXN0ZW0uZ2VuZXJhdGVTeXN0ZW0oZGVsdGFUaW1lKTtcclxuICAgIFxyXG4gICAgcG9zaXRpb25TeXN0ZW0uc29sdmVQR1MoZGVsdGFUaW1lKVxyXG4gICAgZm9yIChsZXQgaSA9IDAsIG4gPSB0aGlzLm9iamVjdHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgIHRoaXMub2JqZWN0c1tpXS5pbnRlZ3JhdGVQc2V1ZG9WZWxvY2l0aWVzKGRlbHRhVGltZSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLm9iamVjdHMuZm9yRWFjaCgob2JqZWN0KSA9PiBvYmplY3QudXBkYXRlSW52ZXJzZUluZXJ0aWEoKSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEFBQkIgfSBmcm9tIFwibWF0aFwiO1xyXG5jb25zdCBnZXRCb3VuZEFhYmIgPSAoYWFiYjEsIGFhYmIyKSA9PiB7XHJcbiAgaWYgKCFhYWJiMSB8fCAhYWFiYjIpIHtcclxuICAgIHJldHVybiAwO1xyXG4gIH1cclxuICBjb25zdCB4MSA9IGFhYmIxLm1pblswXSA8IGFhYmIyLm1pblswXSA/IGFhYmIxLm1pblswXSA6IGFhYmIyLm1pblswXTtcclxuICBjb25zdCB4MiA9IGFhYmIxLm1heFswXSA+IGFhYmIyLm1heFswXSA/IGFhYmIxLm1heFswXSA6IGFhYmIyLm1heFswXTtcclxuICBjb25zdCB5MSA9IGFhYmIxLm1pblsxXSA8IGFhYmIyLm1pblsxXSA/IGFhYmIxLm1pblsxXSA6IGFhYmIyLm1pblsxXTtcclxuICBjb25zdCB5MiA9IGFhYmIxLm1heFsxXSA+IGFhYmIyLm1heFsxXSA/IGFhYmIxLm1heFsxXSA6IGFhYmIyLm1heFsxXTtcclxuICBjb25zdCB6MSA9IGFhYmIxLm1pblsyXSA8IGFhYmIyLm1pblsyXSA/IGFhYmIxLm1pblsyXSA6IGFhYmIyLm1pblsyXTtcclxuICBjb25zdCB6MiA9IGFhYmIxLm1heFsyXSA+IGFhYmIyLm1heFsyXSA/IGFhYmIxLm1heFsyXSA6IGFhYmIyLm1heFsyXTtcclxuICByZXR1cm4gbmV3IEFBQkIoW3gxLCB5MSwgejFdLCBbeDIsIHkyLCB6Ml0pO1xyXG59O1xyXG5jb25zdCBpc0NvbGxpZGUgPSAoYWFiYjEsIGFhYmIyKSA9PiB7XHJcbiAgaWYgKFxyXG4gICAgYWFiYjEubWluWzBdIDw9IGFhYmIyLm1heFswXSAmJlxyXG4gICAgYWFiYjEubWF4WzBdID49IGFhYmIyLm1pblswXSAmJlxyXG4gICAgYWFiYjEubWluWzFdIDw9IGFhYmIyLm1heFsxXSAmJlxyXG4gICAgYWFiYjEubWF4WzFdID49IGFhYmIyLm1pblsxXSAmJlxyXG4gICAgYWFiYjEubWluWzJdIDw9IGFhYmIyLm1heFsyXSAmJlxyXG4gICAgYWFiYjEubWF4WzJdID49IGFhYmIyLm1pblsyXVxyXG4gICkge1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG4gIHJldHVybiBmYWxzZTtcclxufTtcclxuY29uc3QgZ2V0U2l6ZSA9IChhYWJiKSA9PiB7XHJcbiAgY29uc3QgYXJlYSA9XHJcbiAgICBNYXRoLmFicyhhYWJiLm1heFswXSAtIGFhYmIubWluWzBdKSAqXHJcbiAgICBNYXRoLmFicyhhYWJiLm1heFsxXSAtIGFhYmIubWluWzFdKSAqXHJcbiAgICBNYXRoLmFicyhhYWJiLm1heFsyXSAtIGFhYmIubWluWzJdKTtcclxuICByZXR1cm4gYXJlYTtcclxufTtcclxuY2xhc3MgTm9kZSB7XHJcbiAgY29uc3RydWN0b3IoYWFiYiwgaXNMZWFmLCBnYW1lT2JqZWN0KSB7XHJcbiAgICB0aGlzLmFhYmIgPSBhYWJiO1xyXG4gICAgdGhpcy5pc0xlYWYgPSBpc0xlYWY7XHJcbiAgICB0aGlzLnBhcmVudCA9IG51bGw7XHJcblxyXG4gICAgdGhpcy5nYW1lT2JqZWN0ID0gZ2FtZU9iamVjdDtcclxuICAgIHRoaXMuaXNDaGVja2VkID0gZmFsc2U7XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyZWUge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5yb290ID0gbnVsbDtcclxuICAgIHRoaXMubGVhZnMgPSB7fTtcclxuICAgIHRoaXMudW51c2VkSW5kZXhlcyA9IFtdO1xyXG4gIH1cclxuICBzZXRVbmNoZWNrZWQoKSB7XHJcbiAgICBjb25zdCBzdGFjayA9IFt0aGlzLnJvb3RdO1xyXG5cclxuICAgIHdoaWxlIChzdGFjay5sZW5ndGggIT0gMCkge1xyXG4gICAgICBjb25zdCBub2RlID0gc3RhY2sucG9wKCk7XHJcbiAgICAgIGlmIChub2RlLmlzTGVhZikge1xyXG4gICAgICAgIG5vZGUuaXNDaGVja2VkID0gZmFsc2U7XHJcbiAgICAgICAgY29udGludWU7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG5vZGUuY2hpbGQxKSBzdGFjay5wdXNoKG5vZGUuY2hpbGQxKTtcclxuICAgICAgaWYgKG5vZGUuY2hpbGQyKSBzdGFjay5wdXNoKG5vZGUuY2hpbGQyKTtcclxuICAgIH1cclxuICB9XHJcbiAgZ2V0QmVzdFNpYmxpbmcobGVhZikge1xyXG4gICAgbGV0IHBvdGVudGlhbCA9IHRoaXMucm9vdDtcclxuICAgIHdoaWxlICghcG90ZW50aWFsLmlzTGVhZikge1xyXG4gICAgICBjb25zdCBzaXplID0gZ2V0U2l6ZShwb3RlbnRpYWwuYWFiYik7XHJcbiAgICAgIGNvbnN0IGNvbWJpbmVkQUFCQiA9IGdldEJvdW5kQWFiYihwb3RlbnRpYWwuYWFiYiwgbGVhZi5hYWJiKTtcclxuICAgICAgY29uc3QgY29tYmluZWRTaXplID0gZ2V0U2l6ZShjb21iaW5lZEFBQkIpO1xyXG4gICAgICBsZXQgY29zdCA9IGNvbWJpbmVkU2l6ZTtcclxuICAgICAgbGV0IGluaGVyQ29zdCA9IGNvbWJpbmVkU2l6ZSAtIHNpemU7XHJcblxyXG4gICAgICBsZXQgY29zdDE7XHJcbiAgICAgIGlmIChwb3RlbnRpYWwuY2hpbGQxLmlzTGVhZikge1xyXG4gICAgICAgIGNvc3QxID0gZ2V0U2l6ZShwb3RlbnRpYWwuY2hpbGQxLmFhYmIpICsgaW5oZXJDb3N0O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvc3QxID1cclxuICAgICAgICAgIGdldFNpemUoZ2V0Qm91bmRBYWJiKGxlYWYuYWFiYiwgcG90ZW50aWFsLmNoaWxkMS5hYWJiKSkgLVxyXG4gICAgICAgICAgZ2V0U2l6ZShwb3RlbnRpYWwuY2hpbGQxLmFhYmIpICtcclxuICAgICAgICAgIGluaGVyQ29zdDtcclxuICAgICAgfVxyXG5cclxuICAgICAgbGV0IGNvc3QyO1xyXG4gICAgICBpZiAocG90ZW50aWFsLmNoaWxkMi5pc0xlYWYpIHtcclxuICAgICAgICBjb3N0MiA9IGdldFNpemUocG90ZW50aWFsLmNoaWxkMi5hYWJiKSArIGluaGVyQ29zdDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb3N0MiA9XHJcbiAgICAgICAgICBnZXRTaXplKGdldEJvdW5kQWFiYihsZWFmLmFhYmIsIHBvdGVudGlhbC5jaGlsZDIuYWFiYikpIC1cclxuICAgICAgICAgIGdldFNpemUocG90ZW50aWFsLmNoaWxkMi5hYWJiKSArXHJcbiAgICAgICAgICBpbmhlckNvc3Q7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGNvc3QgPCBjb3N0MSAmJiBjb3N0IDwgY29zdDIpIHJldHVybiBwb3RlbnRpYWw7XHJcbiAgICAgIGlmIChjb3N0MSA8IGNvc3QyKSB7XHJcbiAgICAgICAgcG90ZW50aWFsID0gcG90ZW50aWFsLmNoaWxkMTtcclxuICAgICAgfSBlbHNlIHBvdGVudGlhbCA9IHBvdGVudGlhbC5jaGlsZDI7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcG90ZW50aWFsO1xyXG4gIH1cclxuICBpbnNlcnRMZWFmKGFhYmIsIGdhbWVPYmplY3QpIHtcclxuICAgIGNvbnN0IGxlYWYgPSBuZXcgTm9kZShhYWJiLCB0cnVlLCBnYW1lT2JqZWN0KTtcclxuICAgIGlmICh0aGlzLnJvb3QgPT09IG51bGwpIHtcclxuICAgICAgdGhpcy5yb290ID0gbGVhZjtcclxuICAgICAgdGhpcy5yb290LnBhcmVudCA9IG51bGw7XHJcbiAgICAgIHJldHVybiBsZWFmO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNpYmxpbmcgPSB0aGlzLmdldEJlc3RTaWJsaW5nKGxlYWYpO1xyXG4gICAgY29uc3Qgb2xkUGFyZW50ID0gc2libGluZy5wYXJlbnQ7XHJcbiAgICBjb25zdCBuZXdQYXJlbnQgPSBuZXcgTm9kZShsZWFmLmFhYmIsIGZhbHNlKTtcclxuICAgIG5ld1BhcmVudC5wYXJlbnQgPSBvbGRQYXJlbnQ7XHJcblxyXG4gICAgbmV3UGFyZW50LmFhYmIgPSBnZXRCb3VuZEFhYmIobGVhZi5hYWJiLCBzaWJsaW5nLmFhYmIpO1xyXG5cclxuICAgIGlmIChvbGRQYXJlbnQpIHtcclxuICAgICAgaWYgKG9sZFBhcmVudC5jaGlsZDEgPT09IHNpYmxpbmcpIG9sZFBhcmVudC5jaGlsZDEgPSBuZXdQYXJlbnQ7XHJcbiAgICAgIGVsc2Ugb2xkUGFyZW50LmNoaWxkMiA9IG5ld1BhcmVudDtcclxuXHJcbiAgICAgIG5ld1BhcmVudC5jaGlsZDEgPSBzaWJsaW5nO1xyXG4gICAgICBuZXdQYXJlbnQuY2hpbGQyID0gbGVhZjtcclxuXHJcbiAgICAgIHNpYmxpbmcucGFyZW50ID0gbmV3UGFyZW50O1xyXG4gICAgICBsZWFmLnBhcmVudCA9IG5ld1BhcmVudDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG5ld1BhcmVudC5jaGlsZDEgPSBzaWJsaW5nO1xyXG4gICAgICBuZXdQYXJlbnQuY2hpbGQyID0gbGVhZjtcclxuXHJcbiAgICAgIHNpYmxpbmcucGFyZW50ID0gbmV3UGFyZW50O1xyXG4gICAgICBsZWFmLnBhcmVudCA9IG5ld1BhcmVudDtcclxuICAgICAgdGhpcy5yb290ID0gbmV3UGFyZW50O1xyXG4gICAgfVxyXG4gICAgbGV0IGluZGV4ID0gbGVhZi5wYXJlbnQ7XHJcblxyXG4gICAgd2hpbGUgKGluZGV4KSB7XHJcbiAgICAgIGluZGV4ID0gdGhpcy5yZWJhbGFuY2UoaW5kZXgpO1xyXG4gICAgICBpbmRleCA9IGluZGV4LnBhcmVudDtcclxuICAgIH1cclxuICAgIHJldHVybiBsZWFmO1xyXG4gIH1cclxuICBnZXRDb2xsaXNpb25zKGxlYWYpIHtcclxuICAgIGNvbnN0IGNvbHMgPSBbXTtcclxuICAgIGNvbnN0IGl0ZXIgPSAoX25vZGUpID0+IHtcclxuICAgICAgaWYgKCFfbm9kZSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBpZiAoX25vZGUgPT09IGxlYWYpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGlzQ29sbGlkZShsZWFmLmFhYmIsIF9ub2RlLmFhYmIpKSB7XHJcbiAgICAgICAgaWYgKF9ub2RlLmlzTGVhZiAmJiAhX25vZGUuaXNDaGVja2VkKSB7XHJcbiAgICAgICAgICBjb2xzLnB1c2goX25vZGUuZ2FtZU9iamVjdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGl0ZXIoX25vZGUuY2hpbGQxKTtcclxuICAgICAgICBpdGVyKF9ub2RlLmNoaWxkMik7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgaXRlcih0aGlzLnJvb3QpO1xyXG5cclxuICAgIHJldHVybiBjb2xzO1xyXG4gIH1cclxuICByZW1vdmVMZWFmKGxlYWYpIHtcclxuICAgIGlmIChsZWFmID09PSB0aGlzLnJvb3QpIHtcclxuICAgICAgdGhpcy5yb290ID0gbnVsbDtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3QgcGFyZW50ID0gbGVhZi5wYXJlbnQ7XHJcbiAgICBjb25zdCBncmFuZFBhcmVudCA9IHBhcmVudCA/IHBhcmVudC5wYXJlbnQgOiBudWxsO1xyXG4gICAgbGV0IHNpYmxpbmc7XHJcbiAgICBpZiAocGFyZW50LmNoaWxkMSA9PT0gbGVhZikgc2libGluZyA9IHBhcmVudC5jaGlsZDI7XHJcbiAgICBlbHNlIHNpYmxpbmcgPSBwYXJlbnQuY2hpbGQxO1xyXG5cclxuICAgIGlmIChncmFuZFBhcmVudCkge1xyXG4gICAgICBpZiAoZ3JhbmRQYXJlbnQuY2hpbGQxID09PSBwYXJlbnQpIGdyYW5kUGFyZW50LmNoaWxkMSA9IHNpYmxpbmc7XHJcbiAgICAgIGVsc2UgZ3JhbmRQYXJlbnQuY2hpbGQyID0gc2libGluZztcclxuXHJcbiAgICAgIHNpYmxpbmcucGFyZW50ID0gZ3JhbmRQYXJlbnQ7XHJcblxyXG4gICAgICBsZXQgaW5kZXggPSBncmFuZFBhcmVudDtcclxuICAgICAgd2hpbGUgKGluZGV4KSB7XHJcbiAgICAgICAgaW5kZXggPSB0aGlzLnJlYmFsYW5jZShpbmRleCk7XHJcblxyXG4gICAgICAgIGluZGV4ID0gaW5kZXgucGFyZW50O1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnJvb3QgPSBzaWJsaW5nO1xyXG4gICAgICBzaWJsaW5nLnBhcmVudCA9IG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJlYmFsYW5jZShsZWFmKSB7XHJcbiAgICBpZiAoIWxlYWYpIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBpZiAobGVhZi5pc0xlYWYgfHwgdGhpcy5nZXRIZWlnaHQobGVhZikgPCAyKSB7XHJcbiAgICAgIGxlYWYuYWFiYiA9IGdldEJvdW5kQWFiYihsZWFmLmNoaWxkMS5hYWJiLCBsZWFmLmNoaWxkMi5hYWJiKTtcclxuICAgICAgcmV0dXJuIGxlYWY7XHJcbiAgICB9XHJcbiAgICBjb25zdCBjaGlsZDEgPSBsZWFmLmNoaWxkMTtcclxuICAgIGNvbnN0IGNoaWxkMiA9IGxlYWYuY2hpbGQyO1xyXG4gICAgY29uc3QgYmFsYW5jZSA9IHRoaXMuZ2V0SGVpZ2h0KGNoaWxkMikgLSB0aGlzLmdldEhlaWdodChjaGlsZDEpO1xyXG5cclxuICAgIGlmIChiYWxhbmNlID4gMSkge1xyXG4gICAgICBjb25zdCBjaGlsZDJDaGlsZDEgPSBjaGlsZDIuY2hpbGQxO1xyXG4gICAgICBjb25zdCBjaGlsZDJDaGlsZDIgPSBjaGlsZDIuY2hpbGQyO1xyXG5cclxuICAgICAgY2hpbGQyLmNoaWxkMSA9IGxlYWY7XHJcbiAgICAgIGNoaWxkMi5wYXJlbnQgPSBsZWFmLnBhcmVudDtcclxuICAgICAgbGVhZi5wYXJlbnQgPSBjaGlsZDI7XHJcbiAgICAgIGlmIChjaGlsZDIucGFyZW50ICE9IG51bGwpIHtcclxuICAgICAgICBpZiAoY2hpbGQyLnBhcmVudC5jaGlsZDEgPT09IGxlYWYpIHtcclxuICAgICAgICAgIGNoaWxkMi5wYXJlbnQuY2hpbGQxID0gY2hpbGQyO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjaGlsZDIucGFyZW50LmNoaWxkMiA9IGNoaWxkMjtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB0aGlzLnJvb3QgPSBjaGlsZDI7XHJcbiAgICAgIGlmICh0aGlzLmdldEhlaWdodChjaGlsZDJDaGlsZDEpID4gdGhpcy5nZXRIZWlnaHQoY2hpbGQyQ2hpbGQyKSkge1xyXG4gICAgICAgIGNoaWxkMi5jaGlsZDIgPSBjaGlsZDJDaGlsZDE7XHJcbiAgICAgICAgbGVhZi5jaGlsZDIgPSBjaGlsZDJDaGlsZDI7XHJcbiAgICAgICAgY2hpbGQyQ2hpbGQyLnBhcmVudCA9IGxlYWY7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGVhZi5jaGlsZDIgPSBjaGlsZDJDaGlsZDE7XHJcbiAgICAgICAgY2hpbGQyQ2hpbGQxLnBhcmVudCA9IGxlYWY7XHJcbiAgICAgIH1cclxuICAgICAgbGVhZi5hYWJiID0gZ2V0Qm91bmRBYWJiKGxlYWYuY2hpbGQxLmFhYmIsIGxlYWYuY2hpbGQyLmFhYmIpO1xyXG4gICAgICBjaGlsZDIuYWFiYiA9IGdldEJvdW5kQWFiYihjaGlsZDIuY2hpbGQxLmFhYmIsIGNoaWxkMi5jaGlsZDIuYWFiYik7XHJcblxyXG4gICAgICByZXR1cm4gY2hpbGQyO1xyXG4gICAgfVxyXG4gICAgaWYgKGJhbGFuY2UgPCAtMSkge1xyXG4gICAgICBjb25zdCBjaGlsZDFDaGlsZDEgPSBjaGlsZDEuY2hpbGQxO1xyXG4gICAgICBjb25zdCBjaGlsZDFDaGlsZDIgPSBjaGlsZDEuY2hpbGQyO1xyXG5cclxuICAgICAgY2hpbGQxLmNoaWxkMSA9IGxlYWY7XHJcbiAgICAgIGNoaWxkMS5wYXJlbnQgPSBsZWFmLnBhcmVudDtcclxuICAgICAgbGVhZi5wYXJlbnQgPSBjaGlsZDE7XHJcblxyXG4gICAgICBpZiAoY2hpbGQxLnBhcmVudCAhPSBudWxsKSB7XHJcbiAgICAgICAgaWYgKGNoaWxkMS5wYXJlbnQuY2hpbGQxID09PSBsZWFmKSB7XHJcbiAgICAgICAgICBjaGlsZDEucGFyZW50LmNoaWxkMSA9IGNoaWxkMTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY2hpbGQxLnBhcmVudC5jaGlsZDIgPSBjaGlsZDE7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2UgdGhpcy5yb290ID0gY2hpbGQxO1xyXG4gICAgICBpZiAodGhpcy5nZXRIZWlnaHQoY2hpbGQxQ2hpbGQxKSA+IHRoaXMuZ2V0SGVpZ2h0KGNoaWxkMUNoaWxkMikpIHtcclxuICAgICAgICBjaGlsZDEuY2hpbGQyID0gY2hpbGQxQ2hpbGQxO1xyXG4gICAgICAgIGxlYWYuY2hpbGQxID0gY2hpbGQxQ2hpbGQyO1xyXG4gICAgICAgIGNoaWxkMUNoaWxkMi5wYXJlbnQgPSBsZWFmO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNoaWxkMS5jaGlsZDIgPSBjaGlsZDFDaGlsZDI7XHJcbiAgICAgICAgbGVhZi5jaGlsZDEgPSBjaGlsZDFDaGlsZDE7XHJcbiAgICAgICAgY2hpbGQxQ2hpbGQxLnBhcmVudCA9IGxlYWY7XHJcbiAgICAgIH1cclxuICAgICAgbGVhZi5hYWJiID0gZ2V0Qm91bmRBYWJiKGxlYWYuY2hpbGQxLmFhYmIsIGxlYWYuY2hpbGQyLmFhYmIpO1xyXG4gICAgICBjaGlsZDEuYWFiYiA9IGdldEJvdW5kQWFiYihjaGlsZDEuY2hpbGQxLmFhYmIsIGNoaWxkMS5jaGlsZDIuYWFiYik7XHJcblxyXG4gICAgICByZXR1cm4gY2hpbGQxO1xyXG4gICAgfVxyXG4gICAgbGVhZi5hYWJiID0gZ2V0Qm91bmRBYWJiKGxlYWYuY2hpbGQxLmFhYmIsIGxlYWYuY2hpbGQyLmFhYmIpO1xyXG4gICAgcmV0dXJuIGxlYWY7XHJcbiAgfVxyXG4gIHRvQXJyYXkoaSkge1xyXG4gICAgY29uc3QgaXRlciA9IChsZWFmLCBsZXZlbCkgPT4ge1xyXG4gICAgICBpZiAoIWxlYWYpIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgfVxyXG4gICAgICBpZiAobGVhZi5pc0xlYWYpIHJldHVybiBsZWFmLm9iamVjdExpbmsubmFtZTtcclxuICAgICAgZWxzZSByZXR1cm4gW2l0ZXIobGVhZi5jaGlsZDEpLCBpdGVyKGxlYWYuY2hpbGQyKV07XHJcbiAgICB9O1xyXG4gICAgaWYgKCFpKSBpID0gdGhpcy5yb290O1xyXG4gICAgcmV0dXJuIGl0ZXIoaSk7XHJcbiAgfVxyXG4gIGdldEhlaWdodChsZWFmKSB7XHJcbiAgICBjb25zdCBpdGVyID0gKGxlYWYsIGxldmVsKSA9PiB7XHJcbiAgICAgIGlmICghbGVhZikge1xyXG4gICAgICAgIHJldHVybiBsZXZlbDtcclxuICAgICAgfVxyXG5cclxuICAgICAgbGV0IGgxID0gaXRlcihsZWFmLmNoaWxkMSwgbGV2ZWwgKyAxKTtcclxuICAgICAgbGV0IGgyID0gaXRlcihsZWFmLmNoaWxkMiwgbGV2ZWwgKyAxKTtcclxuICAgICAgcmV0dXJuIGgxID4gaDIgPyBoMSA6IGgyO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBpdGVyKGxlYWYsIDEpO1xyXG4gIH1cclxuICBnZXROb2RlcygpIHtcclxuICAgIGNvbnN0IGl0ZXIgPSAobm9kZSwgYXJyKSA9PiB7XHJcbiAgICAgIGFyci5wdXNoKG5vZGUpO1xyXG4gICAgICBpZiAobm9kZS5jaGlsZDEpIGl0ZXIobm9kZS5jaGlsZDEsIGFycik7XHJcbiAgICAgIGlmIChub2RlLmNoaWxkMikgaXRlcihub2RlLmNoaWxkMiwgYXJyKTtcclxuICAgIH07XHJcbiAgICBjb25zdCBhID0gW107XHJcbiAgICBpdGVyKHRoaXMucm9vdCwgYSk7XHJcbiAgICByZXR1cm4gYTtcclxuICB9XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IG00LCB2ZWN0b3IgfSBmcm9tIFwibWF0aFwiO1xyXG5cclxuXHJcbmltcG9ydCB7XHJcbiAgQXJyYXlEYXRhRnJvbUdsdGYsXHJcbiAgUHJpbWl0aXZlUmVuZGVySW5mb0Zyb21BcnJheURhdGEsXHJcbiAgRW50aXR5RGF0YUZyb21HbHRmLFxyXG4gIGdldEdsQ29udGV4dCxcclxuICByZXNpemVDYW52YXNUb0Rpc3BsYXlTaXplLFxyXG4gIFByb2dyYW1JbmZvLFxyXG4gIE1lc2hSZW5kZXJlcixcclxuICBEcmF3ZXIsXHJcbiAgY3JlYXRlQm94LFxyXG4gIFByaW1pdGl2ZVJlbmRlcmVyLFxyXG4gIFRleHR1cmUsXHJcbiAgbWFrZUltZ0Zyb21TdmdYbWwsXHJcbiAgbWFrZVN0cmlwZUltZyxcclxuICBFbnRpdHksXHJcbiAgR0xURixcclxuICBHTGNvbnRleHRXcmFwcGVyLFxyXG4gIGNyZWF0ZUNvbmUsXHJcbiAgY3JlYXRlQ2lyY2xlLFxyXG4gIGRlZmF1bHRQcm9ncmFtLFxyXG59IGZyb20gXCJncmFwaGljc1wiO1xyXG5cclxuaW1wb3J0IE1vdXNlSW5wdXQgZnJvbSBcIi4vc3JjL2dhbWUvbW91c2VcIjtcclxuaW1wb3J0IEtleWxvZ2dlciBmcm9tIFwiLi9zcmMvZ2FtZS9rZXlsb2dnZXJcIjtcclxuY29uc3QgbW91c2VJbnB1dCA9IG5ldyBNb3VzZUlucHV0KClcclxuXHJcbm1vdXNlSW5wdXQubGlzdGVuKCkgXHJcbmNvbnN0IGtleUlucHV0ID0gbmV3IEtleWxvZ2dlcigpXHJcbmtleUlucHV0Lmxpc3RlbigpXHJcbmNvbnN0IGNvbnRleHQgPSBuZXcgR0xjb250ZXh0V3JhcHBlcihcImNhbnZhc1wiKTtcclxuY29uc3QgZ2wgPSBjb250ZXh0LmdldENvbnRleHQoKTtcclxuY29udGV4dC5yZXNpemVDYW52YXNUb0Rpc3BsYXlTaXplKCk7XHJcbmNvbnN0IGRyYXdlciA9IG5ldyBEcmF3ZXIoKTtcclxuZHJhd2VyLnNldENvbnRleHQoY29udGV4dCkudXBkYXRlM0RQcm9qZWN0aW9uTWF0cml4KCk7XHJcblxyXG5kZWZhdWx0UHJvZ3JhbS5zZXRDb250ZXh0KGNvbnRleHQpLmNvbXBpbGVTaGFkZXJzKCkuY3JlYXRlVW5pZm9ybVNldHRlcnMoKTtcclxuXHJcbmNvbnN0IGJveCA9IG5ldyBQcmltaXRpdmVSZW5kZXJlcihjcmVhdGVCb3goMSwgMSwgMSkpO1xyXG5cclxuY29uc3QgY2lyY2xlID0gbmV3IFByaW1pdGl2ZVJlbmRlcmVyKGNyZWF0ZUNpcmNsZSg4LCA0KSk7XHJcblxyXG5jb25zdCBwb2ludHMgPSBuZXcgUHJpbWl0aXZlUmVuZGVyZXIoe1xyXG4gIG1vZGU6IGdsLlBPSU5UUyxcclxuICBudW1FbGVtZW50czogMixcclxuICBvZmZzZXQ6IDAsXHJcbn0pO1xyXG5jb25zdCBsaW5lID0gbmV3IFByaW1pdGl2ZVJlbmRlcmVyKHtcclxuICBtb2RlOiBnbC5MSU5FUyxcclxuICBudW1FbGVtZW50czogMixcclxuICBvZmZzZXQ6IDAsXHJcbn0pO1xyXG5cclxuYm94XHJcbiAgLnNldENvbnRleHQoY29udGV4dClcclxuICAuY3JlYXRlVkFPKClcclxuICAuc2V0RHJhd2VyKGRyYXdlcilcclxuICAuc2V0UHJvZ3JhbUluZm8oZGVmYXVsdFByb2dyYW0pXHJcbiAgLmNyZWF0ZUdlb21ldHJ5QnVmZmVycygpXHJcbiAgLnNldEF0dHJpYnV0ZXMoKVxyXG4gIC5zZXRNb2RlKDIpO1xyXG5cclxuY2lyY2xlXHJcbiAgLnNldENvbnRleHQoY29udGV4dClcclxuICAuY3JlYXRlVkFPKClcclxuICAuc2V0RHJhd2VyKGRyYXdlcilcclxuICAuc2V0UHJvZ3JhbUluZm8oZGVmYXVsdFByb2dyYW0pXHJcbiAgLmNyZWF0ZUdlb21ldHJ5QnVmZmVycygpXHJcbiAgLnNldEF0dHJpYnV0ZXMoKVxyXG4gIC5zZXRNb2RlKDMpO1xyXG5cclxubGluZVxyXG4gIC5zZXRDb250ZXh0KGNvbnRleHQpXHJcbiAgLmNyZWF0ZVZBTygpXHJcbiAgLnNldERyYXdlcihkcmF3ZXIpXHJcbiAgLnNldFByb2dyYW1JbmZvKGRlZmF1bHRQcm9ncmFtKVxyXG4gIC5jcmVhdGVCdWZmZXJBdHRyaWJEYXRhKFwiYV9wb3NpdGlvblwiLCBcInZlYzNcIiwgeyBsb2NhdGlvbjogMCB9KVxyXG4gIC5zZXRPd25BdHRyaWJ1dGUoXCJhX3Bvc2l0aW9uXCIpXHJcbiAgLmJ1ZmZlckRhdGEoXCJhX3Bvc2l0aW9uXCIsIG5ldyBGbG9hdDMyQXJyYXkoWzAsIDAsIDAsIDAsIDEsIDBdKSk7XHJcblxyXG5wb2ludHNcclxuICAuc2V0Q29udGV4dChjb250ZXh0KVxyXG4gIC5jcmVhdGVWQU8oKVxyXG4gIC5zZXREcmF3ZXIoZHJhd2VyKVxyXG4gIC5zZXRQcm9ncmFtSW5mbyhkZWZhdWx0UHJvZ3JhbSlcclxuICAuY3JlYXRlQnVmZmVyQXR0cmliRGF0YShcImFfcG9zaXRpb25cIiwgXCJ2ZWMzXCIsIHsgbG9jYXRpb246IDAgfSlcclxuICAuc2V0T3duQXR0cmlidXRlKFwiYV9wb3NpdGlvblwiKVxyXG4gIC5idWZmZXJEYXRhKFwiYV9wb3NpdGlvblwiLCBuZXcgRmxvYXQzMkFycmF5KFswLCAwLCAwXSkpO1xyXG5cclxuLypcclxuY29uc3QgdW5pZm9ybXMgPSB7XHJcbiAgdV9saWdodFdvcmxkUG9zaXRpb246IFswLCAwLCAxMF0sXHJcbiAgdV9hbWJpZW50TGlnaHQ6IFsxLCAxLCAwLjMsIDAuMTFdLFxyXG4gIHVfcmV2ZXJzZUxpZ2h0RGlyZWN0aW9uOiBbMSwgMCwgMF0sXHJcbiAgdV9zaGluaW5lc3M6IDMwMCxcclxufTtcclxuKi9cclxuXHJcbmltcG9ydCBTaW11bGF0aW9uIGZyb20gXCIuL3NyYy9waHlzaWNzL3NpbXVsYXRpb25cIjtcclxuaW1wb3J0IHsgUGxheWVyLCBSaWdpZEJvZHkgfSBmcm9tIFwiLi9zcmMvcGh5c2ljcy9SaWdpZEJvZHlcIjtcclxuaW1wb3J0IHsgQm94IH0gZnJvbSBcIi4vc3JjL3BoeXNpY3MvY29sbGlkZXJcIjtcclxuaW1wb3J0IHtDb250cm9sbGFibGUsIE5vY2xpcH0gZnJvbSBcIi4vc3JjL2dhbWUvY29udHJvbGxhYmxlXCI7XHJcblxyXG5pbXBvcnQgeyBKb2ludCB9IGZyb20gXCIuL3NyYy9waHlzaWNzL2NvbnRhY3RcIjtcclxuaW1wb3J0IGNyZWF0ZVJhZ2RvbGwgZnJvbSBcIi4vc3JjL3BoeXNpY3MvY3JlYXRlUmFnZG9sbFwiO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IHNpbSA9IG5ldyBTaW11bGF0aW9uKCk7XHJcblxyXG5jb25zdCBmbG9vciA9IHsgcGh5c2ljczogbmV3IFJpZ2lkQm9keShuZXcgQm94KDEwMDAsIDYsIDEwMDApKSwgc3ByaXRlOiBib3ggfTtcclxuXHJcbmNvbnN0IGN1YmUyID0geyBwaHlzaWNzOiBuZXcgUmlnaWRCb2R5KG5ldyBCb3goMiwgMiwgMikpLCBzcHJpdGU6IGJveCB9O1xyXG5jb25zdCBjdWJlMyA9IHsgcGh5c2ljczogbmV3IFJpZ2lkQm9keShuZXcgQm94KDIsIDIsIDIpKSwgc3ByaXRlOiBib3ggfTtcclxuY29uc3QgY3ViZTQgPSB7IHBoeXNpY3M6IG5ldyBQbGF5ZXIobmV3IEJveCgyLCAyLCAyKSksIHNwcml0ZTogYm94IH07XHJcbmN1YmUyLnBoeXNpY3MudHJhbnNsYXRlKFswLCA0LjcsIDBdKTtcclxuY3ViZTQucGh5c2ljcy50cmFuc2xhdGUoWzAsIDEwLCAtNV0pO1xyXG5jdWJlMy5waHlzaWNzLnRyYW5zbGF0ZShbMCwgMywgMF0pO1xyXG4vL2N1YmUucGh5c2ljcy5yb3RhdGUoW01hdGguUEkqMC42LE1hdGguUEkqMC4zLE1hdGguUEkqMC4zXSlcclxuXHJcbmN1YmUyLnBoeXNpY3MuYWRkQWNjZWxlcmF0aW9uKFswLCAtOS44LCAwXSk7XHJcbmN1YmUzLnBoeXNpY3MuYWRkQWNjZWxlcmF0aW9uKFswLCAtOS44LCAwXSk7XHJcbmN1YmU0LnBoeXNpY3MuYWRkQWNjZWxlcmF0aW9uKFswLCAtOS44LCAwXSk7XHJcblxyXG5jdWJlMi5waHlzaWNzLnNldE1hc3MoMjApXHJcbmN1YmUzLnBoeXNpY3Muc2V0TWFzcygyMClcclxuc2ltLmFkZE9iamVjdChmbG9vci5waHlzaWNzKTtcclxuXHJcbnNpbS5hZGRPYmplY3QoY3ViZTIucGh5c2ljcyk7XHJcbnNpbS5hZGRPYmplY3QoY3ViZTMucGh5c2ljcyk7XHJcbnNpbS5hZGRPYmplY3QoY3ViZTQucGh5c2ljcyk7XHJcbmNvbnN0IG9iamVjdHMgPSBbZmxvb3IsICBjdWJlMiwgY3ViZTMsIGN1YmU0XTtcclxuXHJcblxyXG5mb3IobGV0IGkgPSAwOyBpIDwgNTsgaSsrKXtcclxuICBjb25zdCBjdWJlID0geyBwaHlzaWNzOiBuZXcgUmlnaWRCb2R5KG5ldyBCb3goMTAsIDUsIDE1KSksIHNwcml0ZTogYm94IH07XHJcbiAgY3ViZS5waHlzaWNzLnRyYW5zbGF0ZShbMTAsIDUgKiBpICsxNSAsIDBdKVxyXG4gIGN1YmUucGh5c2ljcy5zZXRNYXNzKDUpO1xyXG4gIGN1YmUucGh5c2ljcy5hZGRBY2NlbGVyYXRpb24oWzAsIC05LjgsIDBdKVxyXG4gIHNpbS5hZGRPYmplY3QoY3ViZS5waHlzaWNzKTtcclxuICBvYmplY3RzLnB1c2goY3ViZSlcclxufVxyXG5cclxuZmxvb3IucGh5c2ljcy5zZXRNYXNzKDEwMDAwMDAwMCk7XHJcblxyXG5cclxuXHJcbmZsb29yLnBoeXNpY3MudHJhbnNsYXRlKFswLCAtMywgMF0pO1xyXG4vL2Zsb29yLnBoeXNpY3Mucm90YXRlKFswLjAsMCwwXSlcclxuLy9mbG9vci5zdGF0aWMgPSB0cnVlXHJcblxyXG5jb25zdCBwbGF5ZXIgPSBuZXcgQ29udHJvbGxhYmxlKGN1YmU0LnBoeXNpY3MpXHJcblxyXG5wbGF5ZXIubGlzdGVuS2V5Ym9hcmQoa2V5SW5wdXQpXHJcbnBsYXllci5saXN0ZW5Nb3VzZShtb3VzZUlucHV0KVxyXG5cclxuXHJcbi8qXHJcbmNvbnN0IFtib2RpZXMsIGNvbnN0cmFpbnRzXSA9IGNyZWF0ZVJhZ2RvbGwoWzAsMjUsMF0pXHJcbmJvZGllcy5mb3JFYWNoKGI9PntcclxuICBiLmFkZEFjY2VsZXJhdGlvbihbMCwtOS44LDBdKVxyXG4gXHJcbiAgc2ltLmFkZE9iamVjdChiKVxyXG59KSBcclxuLy9zaW0uYWRkQ29uc3RyYWludHMoY29uc3RyYWludHMsICdyYWdkb2xsJylcclxuLy9zaW0uYWRkQ29uc3RyYWludHMoW25ldyBKb2ludChbMCwyMCwwXSwgWzAsMCwwXSxmbG9vci5waHlzaWNzLGJvZGllc1swXSwwLjEsIDAuMCldLCAnbmFtZScpXHJcbm9iamVjdHMucHVzaCguLi5ib2RpZXMubWFwKGI9PiAoe3BoeXNpY3MgOiBiLCBzcHJpdGUgOiBib3h9KSkpXHJcbiovXHJcbmxldCBsYXN0Q2FsbCA9IERhdGUubm93KCk7XHJcbmNvbnN0IGZwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZnBzXCIpO1xyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIChlKSA9PiB7aWYoZS5rZXkgPT09ICdwJylzaW0udGljaygwLjAxNSl9KVxyXG5sZXQgaSA9IDBcclxuY29uc3QgbG9vcCA9ICgpID0+IHtcclxuICBzaW0udGljaygwLjAxNSk7XHJcbiAgcGxheWVyLnRpY2soKVxyXG4gIGNvbnN0IGN1cmVudFRpbWUgPSBEYXRlLm5vdygpO1xyXG4gIGNvbnN0IGRlbHRhID0gY3VyZW50VGltZSAtIGxhc3RDYWxsO1xyXG4gIGZwcy50ZXh0Q29udGVudCA9ICgxIC8gZGVsdGEpICogMTAwMDtcclxuICBsYXN0Q2FsbCA9IGN1cmVudFRpbWU7XHJcbiAgZ2wuY2xlYXIoZ2wuQ09MT1JfQlVGRkVSX0JJVCB8IGdsLkRFUFRIX0JVRkZFUl9CSVQpO1xyXG4gIGdsLmVuYWJsZShnbC5DVUxMX0ZBQ0UpO1xyXG4gIGdsLmVuYWJsZShnbC5ERVBUSF9URVNUKTtcclxuICBcclxuICBjb25zdCBjYW1lcmFNYXRyaXggPSBwbGF5ZXIuY2FtTWF0cml4XHJcbiAgXHJcbiAgaSArPSAwLjAwMTtcclxuICBcclxuICBcclxuICBjb25zdCBtYW5pZm9sZHMgPSBzaW0uY29sbGlzaW9uTWFuaWZvbGRzLnZhbHVlcygpO1xyXG4gIFxyXG4gIGZvciAoY29uc3QgbWFuaWZvbGQgb2YgbWFuaWZvbGRzKSB7XHJcbiAgIFxyXG4gICAgXHJcbiAgICBtYW5pZm9sZC5jb250YWN0cy5mb3JFYWNoKChjb250YWN0KSA9PiB7XHJcbiAgICAgIFxyXG4gICAgICBwb2ludHNcclxuICAgICAgICAuZHJhdyh7XHJcbiAgICAgICAgICB1X21hdHJpeDogbTQudHJhbnNsYXRpb24oLi4uY29udGFjdC5QQSksXHJcbiAgICAgICAgICB1X2NvbG9yOiBbMC42LCAwLjYsIDAuMCwgMV0sXHJcbiAgICAgICAgfSwgY2FtZXJhTWF0cml4KVxyXG4gICAgICAgIC5kcmF3KHtcclxuICAgICAgICAgIHVfbWF0cml4OiBtNC50cmFuc2xhdGlvbiguLi5jb250YWN0LlBCKSxcclxuICAgICAgICAgIHVfY29sb3I6IFswLjUsIDAuMSwgMC4yLCAxXSxcclxuICAgICAgICB9LCBjYW1lcmFNYXRyaXgpO1xyXG4gICAgICAgIFxyXG5cclxuICAgICAgIFxyXG4gICAgICAgIFxyXG5cclxuICAgICAgIFxyXG5cclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgIH0pO1xyXG4gIH1cclxuICBcclxuICBvYmplY3RzLmZvckVhY2goKG9iaikgPT4ge1xyXG4gICAgY29uc3Qgc2NhbGUgPSB2ZWN0b3IuZGlmZihcclxuICAgICAgb2JqLnBoeXNpY3MuY29sbGlkZXIubWF4LFxyXG4gICAgICBvYmoucGh5c2ljcy5jb2xsaWRlci5taW5cclxuICAgICk7XHJcbiAgICBjb25zdCB1X21hdHJpeCA9IG9iai5waHlzaWNzLmNvbGxpZGVyLmdldE00KClcclxuICAgIG9iai5zcHJpdGUuZHJhdyh7IHVfY29sb3I6IFsxLCAwLCAxLCAxXSwgdV9tYXRyaXggfSwgY2FtZXJhTWF0cml4KTtcclxuICB9KTtcclxuICBcclxuICBcclxuICBjaXJjbGUuZHJhdyhcclxuICAgIHtcclxuICAgICAgdV9tYXRyaXg6IG00LnJvdGF0aW9uKE1hdGguUEkvMiwwLDApLFxyXG4gICAgICB1X2NvbG9yOiBbMSwgMC41LCAwLjEsIDFdLFxyXG4gICAgICB1X3dvcmxkVmlld1Bvc2l0aW9uOiBjYW1lcmFNYXRyaXgsXHJcbiAgICB9LFxyXG4gICAgY2FtZXJhTWF0cml4XHJcbiAgKVxyXG4gIC5kcmF3KFxyXG4gICAge1xyXG4gICAgICB1X21hdHJpeDogbTQuaWRlbnRpdHkoKSxcclxuICAgICAgdV9jb2xvcjogWzEsIDAuNSwgMC4xLCAxXSxcclxuICAgICAgdV93b3JsZFZpZXdQb3NpdGlvbjogY2FtZXJhTWF0cml4LFxyXG4gICAgfSxcclxuICAgIGNhbWVyYU1hdHJpeFxyXG4gICk7XHJcbiAgcG9pbnRzLmRyYXcoXHJcbiAgICB7XHJcbiAgICAgIHVfbWF0cml4OiBtNC5pZGVudGl0eSgpLFxyXG4gICAgICB1X2NvbG9yOiBbMCwgMC41LCAwLjEsIDFdLFxyXG4gICAgICB1X3dvcmxkVmlld1Bvc2l0aW9uOiBjYW1lcmFNYXRyaXgsXHJcbiAgICB9LFxyXG4gICAgY2FtZXJhTWF0cml4XHJcbiAgKVxyXG4gXHJcbiAgICBcclxuICBnbC52aWV3cG9ydCgwLCAwLCBnbC5jYW52YXMud2lkdGgsIGdsLmNhbnZhcy5oZWlnaHQpO1xyXG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZShsb29wKVxyXG59O1xyXG5sb29wKCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==