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
/* harmony export */   "Joint": () => (/* binding */ Joint)
/* harmony export */ });
/* harmony import */ var math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! math */ "./node_modules/math/index.js");
/* harmony import */ var math__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(math__WEBPACK_IMPORTED_MODULE_0__);


const { dot, cross, normalize, diff, scale, norm, sum, normSq } = math__WEBPACK_IMPORTED_MODULE_0__.vector;

class Constraint {
  constructor({
    body1,
    body2,
    n,
    ra,
    rb,
    biasFactor = 0,
    pseudoBiasFactor = 0,
    treshold = 0.001,
  }) {
    this.biasFactor = biasFactor;
    this.n = n;
    this.J = null;
    this.invMass1 = null;
    this.JM = null;
    this.body1 = body1;
    this.body2 = body2;
    this.ra = ra;
    this.rb = rb;
    this.pseudoBiasFactor = pseudoBiasFactor;
    this.treshold = 0.0001;
  }
  updateEq() {
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
    this.effMass =
      M1 + dot(this.JM[0], this.J[1]) + M2 + dot(this.JM[3], this.J[3]);

    this.relativeVelocity = diff(
      sum(body2.velocity, cross(body2.angularV, rb)),
      sum(body1.velocity, cross(body1.angularV, ra))
    );

    this.relativeVelocityNormalProjection = dot(this.relativeVelocity, n);
  }
  applyResolvingImpulse(lambda) {}
}
const clamp = (v, min, max) => {
  if (v > min) {
    if (v < max) return v;
    else return max;
  }
  return min;
};

class ContactConstraint extends Constraint {
  constructor({
    raLocal,
    rbLocal,
    ra,
    rb,
    n,
    penDepth,
    body1,
    body2,
    i,
    j,
    biasFactor = 0,
    pseudoBiasFactor = 0,
  }) {
    super({ ra, rb, n, body1, body2, biasFactor, pseudoBiasFactor });
    this.penDepth = penDepth;
    this.initialVelProj = null;
    this.effMass = null;
    this.raLocal = raLocal;
    this.rbLocal = rbLocal;
    this.J = null;
    this.accI = 0;
    this.accFI1 = 0;
    this.accFI2 = 0;
    this.i = i;
    this.j = j;
    this.reducer = 1;
    this.relativeVelocity = null;
  }

  applyResolvingImpulse(lambda) {
    if (lambda < 0) return;
    const max = this.effMass * 10;
    //lambda = Math.min(10, lambda);
    const maxLambda = norm(
      sum(
        scale(this.body1.velocity, this.body1.mass),
        scale(this.body2.velocity, this.body2.mass)
      )
    );
    lambda = Math.min(lambda, maxLambda);
    this.body1.applyImpulse(scale(this.J[0], lambda), this.ra);
    this.body2.applyImpulse(scale(this.J[2], lambda), this.rb);
    this.applyFrictionImpulse(lambda);
  }
  applyFrictionImpulse(lambda) {
    const { ra, rb, body1, body2, i, j } = this;

    const fConstraint1 = new Constraint({
      body1,
      body2,
      n: scale(i, -1),
      ra,
      rb,
    });
    const fConstraint2 = new Constraint({
      body1,
      body2,
      n: scale(j, -1),
      ra,
      rb,
    });

    fConstraint1.updateEq();
    fConstraint2.updateEq();

    let mu = body1.friction + body1.friction;

    let fImpulse1 =
      fConstraint1.relativeVelocityNormalProjection / fConstraint1.effMass;
    fImpulse1 = clamp(fImpulse1, -lambda * mu, lambda * mu);

    let fImpulse2 =
      fConstraint2.relativeVelocityNormalProjection / fConstraint2.effMass;

    fImpulse2 = clamp(fImpulse2, -lambda * mu, lambda * mu);

    this.accFI1 += fImpulse1;
    this.accFI2 += fImpulse2;

    let fVec = sum(scale(i, fImpulse1), scale(j, fImpulse2));

    body1.applyImpulse(scale(fVec, -1), ra);
    body2.applyImpulse(fVec, rb);
  }
  applyResolvingPseudoImpulse(lambda) {
    if (lambda < 0) return;
    const max = this.effMass * 10;
    // lambda = Math.max(Math.min(100, lambda)- 0.1,0)
    this.body1.applyPseudoImpulse(scale(this.J[0], lambda), this.ra);
    this.body2.applyPseudoImpulse(scale(this.J[2], lambda), this.rb);
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


class Island {
  constructor(...constraints) {
    this.constraints = [...constraints];
    this.JMJ = null;
    this.JV = null;
    this.JpV = null;
    this.JMJp = null;
  }
  addConstraint(...args) {
    this.constraints.push(...args);
  }
  generatePseudoVelVector() {}
  generateSystem(deltaTime) {
    const n = this.constraints.length;
    //A = JMJ*, JMJ*x = JV + b
    this.JMJp = new Array(n * n);
    this.JMJ = new Array(n * n);
    this.JV = new Array(n);
    this.JpV = new Array(n);
    for (let i = 0; i < n; i++) {
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
            ? () => math__WEBPACK_IMPORTED_MODULE_0__.vector.dot(constraint.JM[0], _constraint.J[0])
            : () => 0;
        const fp2 =
          body2 === _body2
            ? () => math__WEBPACK_IMPORTED_MODULE_0__.vector.dot(constraint.JM[2], _constraint.J[2])
            : () => 0;
        const fp3 =
          body1 === _body2
            ? () => math__WEBPACK_IMPORTED_MODULE_0__.vector.dot(constraint.JM[0], _constraint.J[2])
            : () => 0;
        const fp4 =
          body2 === _body1
            ? () => math__WEBPACK_IMPORTED_MODULE_0__.vector.dot(constraint.JM[2], _constraint.J[0])
            : () => 0;
        const f1 =
          body1 === _body1
            ? () =>
                math__WEBPACK_IMPORTED_MODULE_0__.vector.dot(constraint.JM[0], _constraint.J[0]) +
                math__WEBPACK_IMPORTED_MODULE_0__.vector.dot(constraint.JM[1], _constraint.J[1])
            : () => 0;
        const f2 =
          body2 === _body2
            ? () =>
                math__WEBPACK_IMPORTED_MODULE_0__.vector.dot(constraint.JM[2], _constraint.J[2]) +
                math__WEBPACK_IMPORTED_MODULE_0__.vector.dot(constraint.JM[3], _constraint.J[3])
            : () => 0;
        const f3 =
          body1 === _body2
            ? () =>
                math__WEBPACK_IMPORTED_MODULE_0__.vector.dot(constraint.JM[0], _constraint.J[2]) +
                math__WEBPACK_IMPORTED_MODULE_0__.vector.dot(constraint.JM[1], _constraint.J[3])
            : () => 0;
        const f4 =
          body2 === _body1
            ? () =>
                math__WEBPACK_IMPORTED_MODULE_0__.vector.dot(constraint.JM[2], _constraint.J[0]) +
                math__WEBPACK_IMPORTED_MODULE_0__.vector.dot(constraint.JM[3], _constraint.J[1])
            : () => 0;

        this.JMJ[k + j] = () => f1() + f2() + f3() + f4();
        this.JMJp[k + j] = () => fp1() + fp2() + fp3() + fp4();
      }

      /*  vec.dot(J[0], body1.velocity) +
        vec.dot(J[1], body1.angularV) +
        vec.dot(J[2], body2.velocity) +
        vec.dot(J[3], body2.angularV);*/
      this.JV[i] = (deltaTime) =>
        -constraint.relativeVelocityNormalProjection * constraint.reducer +
        (Math.max(0, constraint.penDepth - constraint.treshold) / deltaTime) *
          constraint.biasFactor; //+ b* 0.125;

      /*this.JpV[i] = () => -vec.dot(J[0], body1.pseudoVelocity) -
                            vec.dot(J[1], body1.pseudoAngularV) -
                            vec.dot(J[2], body2.pseudoVelocity) -
                           vec.dot(J[3], body2.pseudoAngularV) - constraint.bias/deltaTime */
      this.JpV[i] = (deltaTime) =>
        (Math.max(0, constraint.penDepth - constraint.treshold) / deltaTime) *
        constraint.pseudoBiasFactor;
    }
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
/* harmony import */ var _constraints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constraints */ "./src/physics/constraints.js");
/* harmony import */ var _gjk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gjk */ "./src/physics/gjk.js");
/* harmony import */ var _manifold__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./manifold */ "./src/physics/manifold.js");
/* harmony import */ var _island__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./island */ "./src/physics/island.js");
/* harmony import */ var _GSsolver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./GSsolver */ "./src/physics/GSsolver.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact */ "./src/physics/contact.js");










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
    this.lastId = 0;
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
    const system = new _island__WEBPACK_IMPORTED_MODULE_4__["default"](...constraints);
    system.generateSystem();
    const positionSystem = new _island__WEBPACK_IMPORTED_MODULE_4__["default"](...constraints);
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
    const system = new _island__WEBPACK_IMPORTED_MODULE_4__["default"]();
    for (let [key, manifold] of manifolds) {
      const useVelocityBias = manifold.contacts.length < 3;
      const contacts = manifold.contacts.map((c) => {
        const constraint = new _contact__WEBPACK_IMPORTED_MODULE_6__.ContactConstraint(c);
        if (useVelocityBias) {
          constraint.biasFactor = 0.09;
        } 
        return constraint;
      });

      for (let i = 0, n = contacts.length; i < n; i++) {
        contacts[i].updateEq();
      }
      system.addConstraint(...contacts);
    }

    system.generateSystem(deltaTime);

    const lambda = (0,_GSsolver__WEBPACK_IMPORTED_MODULE_5__.GaussSeidel)(
      system.getJMJ(),
      system.getJV(deltaTime),
      system.constraints.length,
      1e-6
    );
    system.applyResolvingImpulses(lambda);

    for (const [name, constraints] of this.constraints) {
      const system = constraints[0];
      system.constraints.forEach((c) => c.updateEq());

      const JMJ = system.getJMJ();
      const JV = system.getJV(deltaTime);

      const lambda = (0,_GSsolver__WEBPACK_IMPORTED_MODULE_5__.GaussSeidel)(JMJ, JV, system.constraints.length, 1e-6);

      system.applyResolvingImpulses(lambda);
    }
    for (let i = 0, n = this.objects.length; i < n; i++) {
      this.objects[i].integrateVelocities(deltaTime);
    }

    const positionSystem = new _island__WEBPACK_IMPORTED_MODULE_4__["default"]();
    for (const [key, manifold] of manifolds) {
      const contacts = manifold.contacts.map((c) => new _contact__WEBPACK_IMPORTED_MODULE_6__.ContactConstraint(c));
      contacts.forEach((contact) => contact.updateEq());
      if (contacts.length > 2) {
        positionSystem.addConstraint(...contacts);
      }
    }
    positionSystem.generateSystem(deltaTime);
    const JMJ = positionSystem.getJMJ();
    const JpV = positionSystem.getJpV(deltaTime);
    const pLambda = (0,_GSsolver__WEBPACK_IMPORTED_MODULE_5__.GaussSeidel)(
      JMJ,
      JpV,
      positionSystem.constraints.length,
      1e-6
    );
    positionSystem.applyResolvingPseudoImpulses(pLambda, deltaTime);

    for (const [name, constraints] of this.constraints) {
      const system = constraints[1];

      system.constraints.forEach((c) => c.updateEq());

      const JMJ = system.getJMJp();
      const JpV = system.getJpV(deltaTime);

      const lambda = (0,_GSsolver__WEBPACK_IMPORTED_MODULE_5__.GaussSeidel)(JMJ, JpV, system.constraints.length, 1e-6);
      system.applyResolvingPseudoImpulses(lambda);
    }

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
cube2.physics.translate([0, 5, 0]);
cube4.physics.translate([0, 10, -5]);
cube3.physics.translate([0, 3, 0]);
//cube.physics.rotate([Math.PI*0.6,Math.PI*0.3,Math.PI*0.3])

cube2.physics.addAcceleration([0, 3, 0]);
cube3.physics.addAcceleration([0, -9.8, 0]);
cube4.physics.addAcceleration([0, -9.8, 0]);

cube2.physics.setMass(20)
cube3.physics.setMass(20)
sim.addObject(floor.physics);

sim.addObject(cube2.physics);
sim.addObject(cube3.physics);
sim.addObject(cube4.physics);
const objects = [floor,  cube2, cube3, cube4];


for(let i = 0; i < 0; i++){
  const cube = { physics: new _src_physics_RigidBody__WEBPACK_IMPORTED_MODULE_5__.RigidBody(new _src_physics_collider__WEBPACK_IMPORTED_MODULE_6__.Box(5, 5, 5)), sprite: box };
  cube.physics.translate([0, 5 * i +15 , 0])
  cube.physics.setMass(2);
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



const [bodies, constraints] = (0,_src_physics_createRagdoll__WEBPACK_IMPORTED_MODULE_9__["default"])([0,25,0])
bodies.forEach(b=>{
  b.addAcceleration([0,-9.8,0])
 
  sim.addObject(b)
}) 
//sim.addConstraints(constraints, 'ragdoll')
//sim.addConstraints([new Joint([0,20,0], [0,0,0],floor.physics,bodies[0],0.1, 0.0)], 'name')
objects.push(...bodies.map(b=> ({physics : b, sprite : box})))

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsdUJBQXVCO0FBQzVDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLG1CQUFtQjtBQUM1QztBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLGtCQUFrQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0Isc0JBQXNCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixFQUFF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QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzNLQTtBQUNBLE9BQU8sTUFBTSxFQUFFLG1CQUFPLENBQUMsbURBQVU7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7O0FBR0E7Ozs7Ozs7Ozs7O0FDcGxCQSxXQUFXLG1CQUFPLENBQUMsMkNBQU07QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1CQUFtQjs7Ozs7Ozs7Ozs7QUNqRm5CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0hpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiw2Q0FBVztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQiw4Q0FBWTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixnREFBYztBQUMvQixhQUFhLDZDQUFXLEtBQUssMkNBQVM7QUFDdEMsYUFBYSw0Q0FBVTtBQUN2QixhQUFhLDhDQUFZO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsbURBQWlCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDZDQUFXO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsZ0RBQWM7QUFDdkMseUJBQXlCLDRDQUFVLENBQUMsNENBQVU7QUFDOUM7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLDJDQUFTO0FBQzNCLHNCQUFzQiw0Q0FBVSxjQUFjLG1EQUFpQjtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDN0hlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsWUFBWSxLQUFLO0FBQ2pCO0FBQ0E7QUFDQSxVQUFVLEtBQUs7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQnVEO0FBQ3ZEO0FBQ2UseUJBQXlCLCtEQUFZO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksa0JBQWtCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLDZCQUE2QixrQkFBa0I7QUFDL0M7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBLHNCQUFzQixPQUFPO0FBQzdCO0FBQ0E7QUFDQSwwQkFBMEIsT0FBTztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUN1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1QnVCO0FBQ1o7QUFDbEMsUUFBUSxzQ0FBc0MsRUFBRSx3Q0FBTTtBQUN0RDtBQUNBO0FBQ0Esd0JBQXdCLHVEQUFZO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxzQ0FBc0M7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsa0NBQWtDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsbURBQWlCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLG1EQUFpQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzZCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEs3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLE9BQU87QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxRQUFRO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUM4RDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0ZsQjtBQUM1QztBQUNBLFFBQVEsbUJBQW1CLEVBQUUsd0NBQU07QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsNkNBQVc7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Q3pCO0FBQ0E7QUFDQSxpQkFBaUIsc0RBQVc7QUFDNUI7QUFDQSxrQkFBa0IsT0FBTztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsbUJBQW1CO0FBQ3JDLGtEQUFrRCxPQUFPO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNrRTs7Ozs7Ozs7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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLDRCQUE0QjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsT0FBTztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiw4QkFBOEI7QUFDeEQ7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGVBQWU7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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LHNEQUFXO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxPQUFPO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9LNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLHNDQUFJO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQ25TQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7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QUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiw2Q0FBVztBQUMzQjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDZDQUFXO0FBQzNCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Bocy8uL25vZGVfbW9kdWxlcy9ncmFwaGljcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9waHMvLi9ub2RlX21vZHVsZXMvZ3JhcGhpY3Mvc3JjL0J1ZmZlckF0dHJpYnV0ZS5qcyIsIndlYnBhY2s6Ly9waHMvLi9ub2RlX21vZHVsZXMvZ3JhcGhpY3Mvc3JjL0RyYXdlci5qcyIsIndlYnBhY2s6Ly9waHMvLi9ub2RlX21vZHVsZXMvZ3JhcGhpY3Mvc3JjL01lc2hSZW5kZXJlci5qcyIsIndlYnBhY2s6Ly9waHMvLi9ub2RlX21vZHVsZXMvZ3JhcGhpY3Mvc3JjL1ByaW1pdGl2ZVJlbmRlcmVyLmpzIiwid2VicGFjazovL3Bocy8uL25vZGVfbW9kdWxlcy9ncmFwaGljcy9zcmMvYXR0cmliVHlwZVByb3BzLmpzIiwid2VicGFjazovL3Bocy8uL25vZGVfbW9kdWxlcy9ncmFwaGljcy9zcmMvZW50aXR5LmpzIiwid2VicGFjazovL3Bocy8uL25vZGVfbW9kdWxlcy9ncmFwaGljcy9zcmMvZW51bXMuanMiLCJ3ZWJwYWNrOi8vcGhzLy4vbm9kZV9tb2R1bGVzL2dyYXBoaWNzL3NyYy9nbHRmVXRpbHMuanMiLCJ3ZWJwYWNrOi8vcGhzLy4vbm9kZV9tb2R1bGVzL2dyYXBoaWNzL3NyYy9wcmltaXRpdmVzLmpzIiwid2VicGFjazovL3Bocy8uL25vZGVfbW9kdWxlcy9ncmFwaGljcy9zcmMvcHJvZ3JhbUluZm8uanMiLCJ3ZWJwYWNrOi8vcGhzLy4vbm9kZV9tb2R1bGVzL2dyYXBoaWNzL3NyYy9yZW5kZXIvc2hhZGVycy9EZWZhdWx0LmpzIiwid2VicGFjazovL3Bocy8uL25vZGVfbW9kdWxlcy9ncmFwaGljcy9zcmMvcmVuZGVyL3NoYWRlcnMvTGlnaHRpbmcuanMiLCJ3ZWJwYWNrOi8vcGhzLy4vbm9kZV9tb2R1bGVzL2dyYXBoaWNzL3NyYy9yZW5kZXIvc2hhZGVycy9nbHNsLmpzIiwid2VicGFjazovL3Bocy8uL25vZGVfbW9kdWxlcy9ncmFwaGljcy9zcmMvcmVuZGVyL3NoYWRlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcGhzLy4vbm9kZV9tb2R1bGVzL2dyYXBoaWNzL3NyYy90ZXh0dXJlVXRpbHMuanMiLCJ3ZWJwYWNrOi8vcGhzLy4vbm9kZV9tb2R1bGVzL21hdGgvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcGhzLy4vbm9kZV9tb2R1bGVzL21hdGgvc3JjL2FhYmIuanMiLCJ3ZWJwYWNrOi8vcGhzLy4vbm9kZV9tb2R1bGVzL21hdGgvc3JjL20zLmpzIiwid2VicGFjazovL3Bocy8uL25vZGVfbW9kdWxlcy9tYXRoL3NyYy9tNC5qcyIsIndlYnBhY2s6Ly9waHMvLi9ub2RlX21vZHVsZXMvbWF0aC9zcmMvbm9kZS5qcyIsIndlYnBhY2s6Ly9waHMvLi9ub2RlX21vZHVsZXMvbWF0aC9zcmMvdmVjdG9yLmpzIiwid2VicGFjazovL3Bocy8uL3NyYy9nYW1lL2NvbnRyb2xsYWJsZS5qcyIsIndlYnBhY2s6Ly9waHMvLi9zcmMvZ2FtZS9rZXlsb2dnZXIuanMiLCJ3ZWJwYWNrOi8vcGhzLy4vc3JjL2dhbWUvbW91c2UuanMiLCJ3ZWJwYWNrOi8vcGhzLy4vc3JjL3BoeXNpY3MvR1Nzb2x2ZXIuanMiLCJ3ZWJwYWNrOi8vcGhzLy4vc3JjL3BoeXNpY3MvUmlnaWRCb2R5LmpzIiwid2VicGFjazovL3Bocy8uL3NyYy9waHlzaWNzL2NsaXBwaW5nLmpzIiwid2VicGFjazovL3Bocy8uL3NyYy9waHlzaWNzL2NvbGxpZGVyLmpzIiwid2VicGFjazovL3Bocy8uL3NyYy9waHlzaWNzL2NvbnN0cmFpbnRzLmpzIiwid2VicGFjazovL3Bocy8uL3NyYy9waHlzaWNzL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcGhzLy4vc3JjL3BoeXNpY3MvY3JlYXRlUmFnZG9sbC5qcyIsIndlYnBhY2s6Ly9waHMvLi9zcmMvcGh5c2ljcy9ldmVudEVtaXR0ZXIuanMiLCJ3ZWJwYWNrOi8vcGhzLy4vc3JjL3BoeXNpY3MvZ2prLmpzIiwid2VicGFjazovL3Bocy8uL3NyYy9waHlzaWNzL2lzbGFuZC5qcyIsIndlYnBhY2s6Ly9waHMvLi9zcmMvcGh5c2ljcy9tYW5pZm9sZC5qcyIsIndlYnBhY2s6Ly9waHMvLi9zcmMvcGh5c2ljcy9zaW11bGF0aW9uLmpzIiwid2VicGFjazovL3Bocy8uL3NyYy9waHlzaWNzL3RyZWUuanMiLCJ3ZWJwYWNrOi8vcGhzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Bocy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9waHMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Bocy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Bocy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Bocy8uL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJ1ZmZlckluZm8sIER5bmFtaWNCdWZmZXJJbmZvIH0gZnJvbSBcIi4vc3JjL0J1ZmZlckF0dHJpYnV0ZVwiO1xuaW1wb3J0IHtcbiAgUHJpbWl0aXZlUmVuZGVySW5mb0Zyb21BcnJheURhdGEsXG4gIEFycmF5RGF0YUZyb21HbHRmLFxuICBFbnRpdHlEYXRhRnJvbUdsdGYsXG4gIEdMVEYsXG59IGZyb20gXCIuL3NyYy9nbHRmVXRpbHNcIjtcbmltcG9ydCB7IE1lc2hSZW5kZXJlciwgU2tpbm5lZE1lc2hSZW5kZXJlciB9IGZyb20gXCIuL3NyYy9NZXNoUmVuZGVyZXJcIjtcbmltcG9ydCB7IGNyZWF0ZUJveCwgY3JlYXRlQ29uZSwgY3JlYXRlQ2lyY2xlIH0gZnJvbSBcIi4vc3JjL3ByaW1pdGl2ZXNcIjtcbmltcG9ydCBQcmltaXRpdmVSZW5kZXJlciBmcm9tIFwiLi9zcmMvUHJpbWl0aXZlUmVuZGVyZXJcIjtcbmltcG9ydCB7XG4gIGdldEdMVHlwZUZvclR5cGVkQXJyYXksXG4gIFByb2dyYW1JbmZvLFxuICBleHBhbmRlZFR5cGVkQXJyYXksXG59IGZyb20gXCIuL3NyYy9wcm9ncmFtSW5mb1wiO1xuaW1wb3J0IERyYXdlciBmcm9tIFwiLi9zcmMvRHJhd2VyXCI7XG5pbXBvcnQge1xuICBUZXh0dXJlLFxuICBtYWtlSW1nRnJvbVN2Z1htbCxcbiAgbWFrZVN0cmlwZUltZyxcbiAgc2V0VGV4dHVyZVVuaXRzLFxufSBmcm9tIFwiLi9zcmMvdGV4dHVyZVV0aWxzXCI7XG5pbXBvcnQgRW50aXR5IGZyb20gXCIuL3NyYy9lbnRpdHlcIjtcbmltcG9ydCB7IGxpZ2h0aW5nUHJvZ3JhbSwgZGVmYXVsdFByb2dyYW0gfSBmcm9tIFwiLi9zcmMvcmVuZGVyL3NoYWRlcnNcIjtcbmNsYXNzIEdMY29udGV4dFdyYXBwZXIge1xuICBjb25zdHJ1Y3RvcihjYW52YXNfaWQpIHtcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtjYW52YXNfaWR9YCk7XG4gICAgY29uc3QgZ2wgPSBjYW52YXMuZ2V0Q29udGV4dChcIndlYmdsMlwiKTtcblxuICAgIGlmICghZ2wpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIHdlYmdsIVwiKTtcbiAgICB9XG4gICAgdGhpcy5nbCA9IGdsO1xuICAgIHRoaXMudGV4dHVyZXMgPSB7fTtcbiAgICB0aGlzLnJlbmRlckNhY2hlID0ge1xuICAgICAgbGFzdFVzZWRQcm9ncmFtSW5mbzogbnVsbCxcbiAgICB9O1xuICAgIHRoaXMucHJvZ3JhbXMgPSB7fTtcbiAgfVxuICBnZXRMYXN0VXNlZFByb2dyYW1JbmZvKCkge1xuICAgIHJldHVybiB0aGlzLnJlbmRlckNhY2hlLmxhc3RVc2VkUHJvZ3JhbUluZm87XG4gIH1cbiAgc2V0TGFzdFVzZWRQcm9ncmFtKHByb2dyYW1JbmZvKSB7XG4gICAgdGhpcy5yZW5kZXJDYWNoZS5sYXN0VXNlZFByb2dyYW1JbmZvID0gcHJvZ3JhbUluZm87XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgdXNlUHJvZ3JhbUluZm8ocHJvZ3JhbUluZm8pIHtcbiAgICBpZiAocHJvZ3JhbUluZm8gIT0gdGhpcy5nZXRMYXN0VXNlZFByb2dyYW1JbmZvKCkpIHtcbiAgICAgIHRoaXMuZ2wudXNlUHJvZ3JhbShwcm9ncmFtSW5mby5wcm9ncmFtKTtcbiAgICAgIHRoaXMuc2V0TGFzdFVzZWRQcm9ncmFtKHByb2dyYW1JbmZvKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgcmVzaXplQ2FudmFzVG9EaXNwbGF5U2l6ZShtdWx0aXBsaWVyID0gMSkge1xuICAgIGNvbnN0IGNhbnZhcyA9IHRoaXMuZ2wuY2FudmFzO1xuICAgIGNvbnN0IHdpZHRoID0gKGNhbnZhcy5jbGllbnRXaWR0aCAqIG11bHRpcGxpZXIpIHwgMDtcbiAgICBjb25zdCBoZWlnaHQgPSAoY2FudmFzLmNsaWVudEhlaWdodCAqIG11bHRpcGxpZXIpIHwgMDtcblxuICAgIGNhbnZhcy53aWR0aCA9IHdpZHRoO1xuICAgIGNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgcmVzaXplQ2FudmFzKHdpZHRoLCBoZWlnaHQpIHtcbiAgICBjb25zdCBjYW52YXMgPSB0aGlzLmdsLmNhbnZhcztcbiAgICBjYW52YXMud2lkdGggPSB3aWR0aDtcbiAgICBjYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIGdldENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2w7XG4gIH1cbiAgZ2V0Q2FudmFzUmVjdCgpIHtcbiAgICByZXR1cm4gdGhpcy5nbC5jYW52YXMuZ2V0Qm91bmRpbjtcbiAgfVxuICBjcmVhdGVUZXh0dXJlKHRleHR1cmVOYW1lKSB7XG4gICAgY29uc3QgdGV4dHVyZSA9IG5ldyBUZXh0dXJlKHRoaXMuZ2wpO1xuICAgIHRoaXMudGV4dHVyZXMgPSB7IC4uLnRoaXMudGV4dHVyZXMsIFt0ZXh0dXJlTmFtZV06IHRleHR1cmUgfTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBnZXRUZXh0dXJlKHRleHR1cmVOYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMudGV4dHVyZXNbdGV4dHVyZU5hbWVdO1xuICB9XG4gIHNldFRleHR1cmVVbml0KHRleHR1cmVOYW1lLCB1bml0TnVtKSB7XG4gICAgY29uc3QgdGV4dHVyZSA9IHRoaXMuZ2V0VGV4dHVyZSh0ZXh0dXJlTmFtZSkudGV4dHVyZTtcbiAgICBzZXRUZXh0dXJlVW5pdHModGhpcy5nbCwgdGV4dHVyZSwgdW5pdE51bSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cblxuZXhwb3J0IHtcbiAgR0xURixcbiAgR0xjb250ZXh0V3JhcHBlcixcbiAgVGV4dHVyZSxcbiAgbWFrZUltZ0Zyb21TdmdYbWwsXG4gIG1ha2VTdHJpcGVJbWcsXG4gIEVudGl0eSxcbiAgUHJpbWl0aXZlUmVuZGVyZXIsXG4gIEVudGl0eURhdGFGcm9tR2x0ZixcbiAgUHJpbWl0aXZlUmVuZGVySW5mb0Zyb21BcnJheURhdGEsXG4gIEFycmF5RGF0YUZyb21HbHRmLFxuICBNZXNoUmVuZGVyZXIsXG4gIFNraW5uZWRNZXNoUmVuZGVyZXIsXG4gIGNyZWF0ZUJveCxcbiAgUHJvZ3JhbUluZm8sXG4gIERyYXdlcixcbiAgY3JlYXRlQ29uZSxcbiAgY3JlYXRlQ2lyY2xlLFxuICBsaWdodGluZ1Byb2dyYW0sXG4gIGRlZmF1bHRQcm9ncmFtLFxufTtcbiIsImltcG9ydCB7IGdldEdMVHlwZUZvclR5cGVkQXJyYXkgfSBmcm9tIFwiLi9wcm9ncmFtSW5mb1wiO1xuaW1wb3J0IHsgVFlQRURfQVJSQVlTIH0gZnJvbSBcIi4vZW51bXNcIjtcbmNvbnN0IGNyZWF0ZUluZGljZXNCdWZmZXIgPSAoZ2wsIGluZGljZXMpID0+IHtcbiAgY29uc3QgYnVmZmVyID0gZ2wuY3JlYXRlQnVmZmVyKCk7XG4gIGdsLmJpbmRCdWZmZXIoZ2wuRUxFTUVOVF9BUlJBWV9CVUZGRVIsIGJ1ZmZlcik7XG4gIGdsLmJ1ZmZlckRhdGEoZ2wuRUxFTUVOVF9BUlJBWV9CVUZGRVIsIGluZGljZXMsIGdsLlNUQVRJQ19EUkFXKTtcbiAgcmV0dXJuIGJ1ZmZlcjtcbn07XG5jb25zdCBmbG9hdEF0dHJpYlNldHRlciA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgbnVtQ29tcG9uZW50cyxcbiAgICB0eXBlLFxuICAgIGxvY2F0aW9uLFxuICAgIG51bUF0dHJpYnV0ZXMsXG4gICAgc3RyaWRlLFxuICAgIG9mZnNldCxcbiAgICBidWZmZXIsXG4gICAgZ2wsXG4gICAgZGl2aXNvcixcbiAgfSA9IHByb3BzO1xuXG4gIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCBidWZmZXIpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG51bUF0dHJpYnV0ZXM7IGkrKykge1xuICAgIGNvbnN0IF9vZmZzZXQgPSBudW1Db21wb25lbnRzICogaSAqIFRZUEVEX0FSUkFZU1t0eXBlXS5CWVRFU19QRVJfRUxFTUVOVDtcbiAgICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheShsb2NhdGlvbiArIGkpO1xuICAgIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIoXG4gICAgICBsb2NhdGlvbiArIGksXG4gICAgICBudW1Db21wb25lbnRzLFxuICAgICAgdHlwZSxcbiAgICAgIGZhbHNlLFxuICAgICAgc3RyaWRlLFxuICAgICAgb2Zmc2V0ICsgX29mZnNldFxuICAgICk7XG5cbiAgICBpZiAoZGl2aXNvcikgZ2wudmVydGV4QXR0cmliRGl2aXNvcihsb2NhdGlvbiArIGksIGRpdmlzb3IpO1xuICB9XG59O1xuY29uc3QgaW50QXR0cmliU2V0dGVyID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBudW1Db21wb25lbnRzLFxuICAgIHR5cGUsXG4gICAgbG9jYXRpb24sXG4gICAgbnVtQXR0cmlidXRlcyxcbiAgICBzdHJpZGUsXG4gICAgb2Zmc2V0LFxuICAgIGJ1ZmZlcixcbiAgICBnbCxcbiAgICBkaXZpc29yLFxuICB9ID0gcHJvcHM7XG4gIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCBidWZmZXIpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG51bUF0dHJpYnV0ZXM7IGkrKykge1xuICAgIGNvbnN0IF9vZmZzZXQgPSBudW1Db21wb25lbnRzICogaSAqIFRZUEVEX0FSUkFZU1t0eXBlXS5CWVRFU19QRVJfRUxFTUVOVDtcbiAgICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheShsb2NhdGlvbiArIGkpO1xuICAgIGdsLnZlcnRleEF0dHJpYklQb2ludGVyKFxuICAgICAgbG9jYXRpb24gKyBpLFxuICAgICAgbnVtQ29tcG9uZW50cyxcbiAgICAgIHR5cGUsXG4gICAgICBmYWxzZSxcbiAgICAgIHN0cmlkZSxcbiAgICAgIG9mZnNldCArIF9vZmZzZXRcbiAgICApO1xuICAgIGlmIChkaXZpc29yKSBnbC52ZXJ0ZXhBdHRyaWJEaXZpc29yKGxvY2F0aW9uICsgaSwgZGl2aXNvcik7XG4gIH1cbn07XG5jb25zdCBhdHRyaWJUeXBlTWFwID0ge307XG5hdHRyaWJUeXBlTWFwWzB4MTQwMF0gPSBpbnRBdHRyaWJTZXR0ZXI7XG5hdHRyaWJUeXBlTWFwWzB4MTQwNl0gPSBmbG9hdEF0dHJpYlNldHRlcjtcbmF0dHJpYlR5cGVNYXBbMHgxNDAxXSA9IGludEF0dHJpYlNldHRlcjtcbmF0dHJpYlR5cGVNYXBbMHgxNDA0XSA9IGludEF0dHJpYlNldHRlcjtcbmF0dHJpYlR5cGVNYXBbMHgxNDA1XSA9IGludEF0dHJpYlNldHRlcjtcbmF0dHJpYlR5cGVNYXBbMHgxNDAyXSA9IGludEF0dHJpYlNldHRlcjtcbmF0dHJpYlR5cGVNYXBbMHgxNDAzXSA9IGludEF0dHJpYlNldHRlcjtcblxuY29uc3Qgc2V0QXR0cmlidXRlcyA9IChnbCwgYnVmZmVySW5mbywgZGl2aXNvcikgPT4ge1xuICBjb25zdCB7IHR5cGUgfSA9IGJ1ZmZlckluZm87XG4gIGNvbnN0IHNldHRlciA9IGF0dHJpYlR5cGVNYXBbdHlwZV07XG4gIHNldHRlcihidWZmZXJJbmZvLCBkaXZpc29yKTtcbn07XG5jbGFzcyBCdWZmZXJDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IoZ2wsIHRhcmdldCA9IDB4ODg5Mikge1xuICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xuICAgIHRoaXMuYnVmZmVyID0gZ2wuY3JlYXRlQnVmZmVyKCk7XG4gICAgdGhpcy5nbCA9IGdsO1xuICAgIHRoaXMuYnVmZmVyRGF0YSA9IChkYXRhLCBieXRlTGVuZ3RoLCB1c2FnZSA9IGdsLlNUQVRJQ19EUkFXKSA9PiB7XG4gICAgICBnbC5iaW5kQnVmZmVyKHRhcmdldCwgdGhpcy5idWZmZXIpO1xuICAgICAgZ2wuYnVmZmVyRGF0YSh0YXJnZXQsIGRhdGEgfHwgYnl0ZUxlbmd0aCwgdXNhZ2UpO1xuICAgIH07XG4gICAgdGhpcy5idWZmZXJTdWJEYXRhID0gKGRhdGEsIG9mZnNldCA9IDApID0+IHtcbiAgICAgIGdsLmJpbmRCdWZmZXIodGFyZ2V0LCB0aGlzLmJ1ZmZlcik7XG4gICAgICBnbC5idWZmZXJTdWJEYXRhKHRhcmdldCwgb2Zmc2V0LCBkYXRhKTtcbiAgICB9O1xuICB9XG59XG5jbGFzcyBBdHRyaWJ1dGVTZXR0ZXIge1xuICBjb25zdHJ1Y3RvcihpbmZvKSB7XG4gICAgdGhpcy5zdHJpZGUgPSBpbmZvLnN0cmlkZSB8fCAwO1xuICAgIHRoaXMubnVtQ29tcG9uZW50cyA9IGluZm8ubnVtQ29tcG9uZW50cztcbiAgICB0aGlzLm51bUF0dHJpYnV0ZXMgPSBpbmZvLm51bUF0dHJpYnV0ZXMgfHwgMTtcbiAgICB0aGlzLm9mZnNldCA9IGluZm8ub2Zmc2V0IHx8IDA7XG4gICAgdGhpcy50eXBlID0gaW5mby50eXBlO1xuICAgIHRoaXMubG9jYXRpb24gPSBpbmZvLmxvY2F0aW9uO1xuICB9XG4gIHNldEF0dHJpYnV0ZShidWZmZXJDb250cm9sbGVyLCBkaXZpc29yKSB7XG4gICAgY29uc3QgeyB0eXBlIH0gPSB0aGlzO1xuICAgIGNvbnN0IHNldHRlciA9IGF0dHJpYlR5cGVNYXBbdHlwZV07XG4gICAgc2V0dGVyKHRoaXMsIGJ1ZmZlckNvbnRyb2xsZXIsIGRpdmlzb3IpO1xuICB9XG59XG5jbGFzcyBCdWZmZXJBdHRyaWJ1dGUge1xuICBjb25zdHJ1Y3RvcihnbCwgaW5mbykge1xuICAgIHRoaXMuZ2wgPSBnbDtcbiAgICB0aGlzLmJ1ZmZlciA9IGdsLmNyZWF0ZUJ1ZmZlcigpO1xuICAgIHRoaXMuc3RyaWRlID0gaW5mby5zdHJpZGUgfHwgMDtcbiAgICB0aGlzLm51bUNvbXBvbmVudHMgPSBpbmZvLm51bUNvbXBvbmVudHM7XG4gICAgdGhpcy5udW1BdHRyaWJ1dGVzID0gaW5mby5udW1BdHRyaWJ1dGVzIHx8IDE7XG4gICAgdGhpcy5vZmZzZXQgPSBpbmZvLm9mZnNldCB8fCAwO1xuICAgIHRoaXMudHlwZSA9IGluZm8udHlwZTtcbiAgICB0aGlzLmxvY2F0aW9uID0gaW5mby5sb2NhdGlvbjtcbiAgICB0aGlzLmRpdmlzb3IgPSBpbmZvLmRpdmlzb3I7XG4gIH1cbiAgc2V0QXR0cmlidXRlKCkge1xuICAgIGNvbnN0IHsgdHlwZSwgZ2wgfSA9IHRoaXM7XG4gICAgY29uc3Qgc2V0dGVyID0gYXR0cmliVHlwZU1hcFt0eXBlXTtcbiAgICBzZXR0ZXIodGhpcyk7XG4gIH1cbiAgYnVmZmVyRGF0YShkYXRhLCBieXRlTGVuZ3RoLCB1c2FnZSA9IDB4ODhlNCkge1xuICAgIGNvbnN0IHsgZ2wsIGJ1ZmZlciB9ID0gdGhpcztcbiAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgYnVmZmVyKTtcbiAgICBnbC5idWZmZXJEYXRhKGdsLkFSUkFZX0JVRkZFUiwgZGF0YSB8fCBieXRlTGVuZ3RoLCB1c2FnZSk7XG4gIH1cbiAgYnVmZmVyU3ViRGF0YShkYXRhLCBvZmZzZXQgPSAwKSB7XG4gICAgY29uc3QgeyBnbCwgYnVmZmVyIH0gPSB0aGlzO1xuICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCBidWZmZXIpO1xuICAgIGdsLmJ1ZmZlclN1YkRhdGEoZ2wuQVJSQVlfQlVGRkVSLCBvZmZzZXQsIGRhdGEpO1xuICB9XG59XG5cbmV4cG9ydCB7XG4gIEJ1ZmZlckF0dHJpYnV0ZSxcbiAgY3JlYXRlSW5kaWNlc0J1ZmZlcixcbiAgQXR0cmlidXRlU2V0dGVyLFxuICBCdWZmZXJDb250cm9sbGVyLFxufTtcbiIsImltcG9ydCB7IG00IH0gZnJvbSBcIm1hdGhcIjtcblxuY29uc3QgZGVnVG9SYWQgPSAoZCkgPT4gKGQgKiBNYXRoLlBJKSAvIDE4MDtcblxuY29uc3QgZmllbGRPZlZpZXdSYWRpYW5zID0gZGVnVG9SYWQoOTApO1xuXG5jbGFzcyBEcmF3ZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBudWxsO1xuICAgIHRoaXMucHJvamVjdGlvbk1hdHJpeCA9IG51bGw7XG4gICAgdGhpcy5maWVsZE9mVmlld1JhZGlhbnMgPSBkZWdUb1JhZCg5MCk7XG4gIH1cbiAgc2V0Q29udGV4dChnbENvbnRleHRXcmFwcGVyKSB7XG4gICAgdGhpcy5jb250ZXh0ID0gZ2xDb250ZXh0V3JhcHBlcjtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBzZXRGaWVsZE9mVmlldyhhbmdsZSkge1xuICAgIHRoaXMuZmllbGRPZlZpZXdSYWRpYW5zID0gZGVnVG9SYWQoYW5nbGUpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIHVwZGF0ZTNEUHJvamVjdGlvbk1hdHJpeCh6TmVhciA9IDAuMDEsIHpGYXIgPSAyMDAwKSB7XG4gICAgY29uc3QgeyBnbCB9ID0gdGhpcy5jb250ZXh0O1xuICAgIGNvbnN0IGFzcGVjdCA9IGdsLmNhbnZhcy5jbGllbnRXaWR0aCAvIGdsLmNhbnZhcy5jbGllbnRIZWlnaHQ7XG4gICAgdGhpcy5wcm9qZWN0aW9uTWF0cml4ID0gbTQucGVyc3BlY3RpdmUoXG4gICAgICBmaWVsZE9mVmlld1JhZGlhbnMsXG4gICAgICBhc3BlY3QsXG4gICAgICB6TmVhcixcbiAgICAgIHpGYXJcbiAgICApO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZ2V0Vmlld1Byb2plY3Rpb25NYXRyaXgoY2FtZXJhTWF0cml4KSB7XG4gICAgY29uc3QgeyBwcm9qZWN0aW9uTWF0cml4IH0gPSB0aGlzO1xuICAgIGNvbnN0IHsgZ2wgfSA9IHRoaXMuY29udGV4dDtcbiAgICBjb25zdCB2aWV3TWF0cml4ID0gbTQuaW52ZXJzZShjYW1lcmFNYXRyaXgpO1xuICAgIHJldHVybiBtNC5tdWx0aXBseShwcm9qZWN0aW9uTWF0cml4LCB2aWV3TWF0cml4KTtcbiAgfVxuICBkcmF3KHJlbmRlckluZm8sIHVuaWZvcm1zLCBjYW1lcmFNYXRyaXgpIHtcbiAgICBjb25zdCB2aWV3UHJvamVjdGlvbk1hdHJpeCA9IHRoaXMuZ2V0Vmlld1Byb2plY3Rpb25NYXRyaXgoY2FtZXJhTWF0cml4KTtcbiAgICBjb25zdCB7XG4gICAgICB2YW8sXG4gICAgICBtb2RlLFxuICAgICAgb2Zmc2V0LFxuICAgICAgbnVtRWxlbWVudHMsXG4gICAgICBpbmRpY2VzLFxuICAgICAgY29tcG9uZW50VHlwZSxcbiAgICAgIHByb2dyYW1JbmZvLFxuICAgIH0gPSByZW5kZXJJbmZvO1xuICAgIGNvbnN0IHsgZ2wgfSA9IHRoaXMuY29udGV4dDtcblxuICAgIGNvbnN0IHdvcmxkVmlld1Byb2plY3Rpb24gPSBtNC5tdWx0aXBseShcbiAgICAgIHZpZXdQcm9qZWN0aW9uTWF0cml4LFxuICAgICAgdW5pZm9ybXMudV9tYXRyaXhcbiAgICApO1xuICAgIGNvbnN0IHdvcmxkTWF0cml4ID0gdW5pZm9ybXMudV9tYXRyaXg7XG4gICAgdGhpcy5jb250ZXh0LnVzZVByb2dyYW1JbmZvKHByb2dyYW1JbmZvKTtcbiAgICB0aGlzLmNvbnRleHRcbiAgICAgIC5nZXRMYXN0VXNlZFByb2dyYW1JbmZvKClcbiAgICAgIC5zZXRVbmlmb3Jtcyh7IC4uLnVuaWZvcm1zLCB3b3JsZE1hdHJpeCwgd29ybGRWaWV3UHJvamVjdGlvbiB9KTtcbiAgICBpZiAodmFvKSBnbC5iaW5kVmVydGV4QXJyYXkodmFvKTtcbiAgICBpZiAoIWluZGljZXMpIHtcbiAgICAgIGdsLmRyYXdBcnJheXMobW9kZSwgb2Zmc2V0LCBudW1FbGVtZW50cyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGdsLmRyYXdFbGVtZW50cyhtb2RlLCBudW1FbGVtZW50cywgY29tcG9uZW50VHlwZSwgb2Zmc2V0KTtcbiAgfVxuICBkcmF3SW5zdGFuY2VkKHJlbmRlckluZm8sIHVuaWZvcm1zLCBjYW1lcmFNYXRyaXgsIG51bUluc3RhbmNlcykge1xuICAgIGNvbnN0IHZpZXdQcm9qZWN0aW9uTWF0cml4ID0gdGhpcy5nZXRWaWV3UHJvamVjdGlvbk1hdHJpeChjYW1lcmFNYXRyaXgpO1xuICAgIGNvbnN0IHsgZ2wgfSA9IHRoaXMuY29udGV4dDtcbiAgICBjb25zdCB7IHZhbywgbW9kZSwgb2Zmc2V0LCBudW1FbGVtZW50cywgaW5kaWNlcywgcHJvZ3JhbUluZm8gfSA9IHJlbmRlckluZm87XG4gICAgY29uc3Qgd29ybGRWaWV3UHJvamVjdGlvbiA9IG00Lm11bHRpcGx5KFxuICAgICAgdmlld1Byb2plY3Rpb25NYXRyaXgsXG4gICAgICB1bmlmb3Jtcy51X21hdHJpeFxuICAgICk7XG4gICAgY29uc3Qgd29ybGRNYXRyaXggPSB1bmlmb3Jtcy51X21hdHJpeDtcbiAgICB0aGlzLmNvbnRleHQudXNlUHJvZ3JhbUluZm8ocHJvZ3JhbUluZm8pO1xuICAgIHRoaXMuY29udGV4dFxuICAgICAgLmdldExhc3RVc2VkUHJvZ3JhbUluZm8oKVxuICAgICAgLnNldFVuaWZvcm1zKHsgLi4udW5pZm9ybXMsIHdvcmxkTWF0cml4LCB3b3JsZFZpZXdQcm9qZWN0aW9uIH0pO1xuICAgIGdsLmJpbmRWZXJ0ZXhBcnJheSh2YW8pO1xuICAgIGlmICghaW5kaWNlcykge1xuICAgICAgZ2wuZHJhd0FycmF5c0luc3RhbmNlZChtb2RlLCBvZmZzZXQsIG51bUVsZW1lbnRzLCBudW1JbnN0YW5jZXMpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBnbC5kcmF3RWxlbWVudHNJbnN0YW5jZWQoXG4gICAgICBtb2RlLFxuICAgICAgbnVtRWxlbWVudHMsXG4gICAgICBnbC5VTlNJR05FRF9TSE9SVCxcbiAgICAgIG9mZnNldCxcbiAgICAgIG51bUluc3RhbmNlc1xuICAgICk7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IERyYXdlcjtcbiIsImltcG9ydCBnZXRBdHRyaWJ1dGVQcm9wc0J5VHlwZSBmcm9tIFwiLi9hdHRyaWJUeXBlUHJvcHNcIjtcbmltcG9ydCBhdHRyaWJUeXBlUHJvcHMgZnJvbSBcIi4vYXR0cmliVHlwZVByb3BzXCI7XG5pbXBvcnQgeyBCdWZmZXJBdHRyaWJ1dGUgfSBmcm9tIFwiLi9CdWZmZXJBdHRyaWJ1dGVcIjtcbmNsYXNzIE1lc2hSZW5kZXJlciB7XG4gIGNvbnN0cnVjdG9yKHsgcHJpbWl0aXZlcywgbmFtZSB9KSB7XG4gICAgdGhpcy5wcmltaXRpdmVzID0gcHJpbWl0aXZlcztcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuY29udGV4dCA9IG51bGw7XG4gICAgdGhpcy5idWZmZXJzID0ge307XG4gIH1cbiAgc2V0Q29udGV4dChnbENvbnRleHRXcmFwcGVyKSB7XG4gICAgdGhpcy5jb250ZXh0ID0gZ2xDb250ZXh0V3JhcHBlcjtcbiAgICBmb3IgKGxldCBpID0gMCwgbiA9IHRoaXMucHJpbWl0aXZlcy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgIHRoaXMucHJpbWl0aXZlc1tpXS5zZXRDb250ZXh0KGdsQ29udGV4dFdyYXBwZXIpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBzZXRQcm9ncmFtSW5mbyhwcm9ncmFtSW5mbykge1xuICAgIGZvciAobGV0IGkgPSAwLCBuID0gdGhpcy5wcmltaXRpdmVzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgdGhpcy5wcmltaXRpdmVzW2ldLnNldFByb2dyYW1JbmZvKHByb2dyYW1JbmZvKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgc2V0RHJhd2VyKGRyYXdlcikge1xuICAgIGZvciAobGV0IGkgPSAwLCBuID0gdGhpcy5wcmltaXRpdmVzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgdGhpcy5wcmltaXRpdmVzW2ldLnNldERyYXdlcihkcmF3ZXIpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBkcmF3KHVuaWZvcm1zLCBjYW1lcmFNYXRyaXgpIHtcbiAgICBmb3IgKGxldCBpID0gMCwgbiA9IHRoaXMucHJpbWl0aXZlcy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgIHRoaXMucHJpbWl0aXZlc1tpXS5kcmF3KHVuaWZvcm1zLCBjYW1lcmFNYXRyaXgpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBkcmF3SW5zdGFuY2VkKHVuaWZvcm1zLCBjYW1lcmFNYXRyaXgsIG51bUluc3RhbmNlcykge1xuICAgIGZvciAobGV0IGkgPSAwLCBuID0gdGhpcy5wcmltaXRpdmVzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgdGhpcy5wcmltaXRpdmVzW2ldLmRyYXdJbnN0YW5jZWQodW5pZm9ybXMsIGNhbWVyYU1hdHJpeCwgbnVtSW5zdGFuY2VzKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgY3JlYXRlUHJpbWl0aXZlQnVmZmVycygpIHtcbiAgICB0aGlzLnByaW1pdGl2ZXMuZm9yRWFjaCgocHJpbWl0aXZlKSA9PiBwcmltaXRpdmUuY3JlYXRlR2VvbWV0cnlCdWZmZXJzKCkpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIGNyZWF0ZUJ1ZmZlckF0dHJpYkRhdGEobmFtZSwgdHlwZSwgcGFyYW1zKSB7XG4gICAgY29uc3QgeyBnbCB9ID0gdGhpcy5jb250ZXh0O1xuICAgIGNvbnN0IGF0dHJpYlByb3BzID0gZ2V0QXR0cmlidXRlUHJvcHNCeVR5cGUodHlwZSk7XG4gICAgY29uc3QgYXR0cmlidXRlUHJvcHMgPSB7IC4uLmF0dHJpYlByb3BzLCAuLi5wYXJhbXMgfTtcbiAgICBjb25zdCBidWZmZXJBdHRyaWJEYXRhID0gbmV3IEJ1ZmZlckF0dHJpYnV0ZShnbCwgYXR0cmlidXRlUHJvcHMpO1xuICAgIHRoaXMuYnVmZmVycyA9IHsgLi4udGhpcy5idWZmZXJzLCBbbmFtZV06IGJ1ZmZlckF0dHJpYkRhdGEgfTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBidWZmZXJEYXRhKGJ1ZmZlck5hbWUsIGRhdGEsIGJ5dGVMZW5ndGgpIHtcbiAgICBjb25zdCBidWZmZXJBdHRyaWJ1dGVEZXNjcmlwdG9yID0gdGhpcy5idWZmZXJzW2J1ZmZlck5hbWVdO1xuXG4gICAgYnVmZmVyQXR0cmlidXRlRGVzY3JpcHRvci5idWZmZXJEYXRhKGRhdGEsIGJ5dGVMZW5ndGgpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIGJ1ZmZlclN1YkRhdGEoYnVmZmVyTmFtZSwgZGF0YSwgb2Zmc2V0KSB7XG4gICAgY29uc3QgYnVmZmVyQXR0cmlidXRlRGVzY3JpcHRvciA9IHRoaXMuYnVmZmVyc1tidWZmZXJOYW1lXTtcbiAgICBidWZmZXJBdHRyaWJ1dGVEZXNjcmlwdG9yLmJ1ZmZlclN1YkRhdGEoZGF0YSwgYnl0ZUxlbmd0aCwgb2Zmc2V0KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBzZXRBdHRyaWJ1dGUobmFtZSkge1xuICAgIGNvbnN0IGJ1ZmZlckF0dHJpYkRhdGEgPSB0aGlzLmJ1ZmZlcnNbbmFtZV07XG4gICAgdGhpcy5wcmltaXRpdmVzLmZvckVhY2goKHByaW1pdGl2ZSkgPT5cbiAgICAgIHByaW1pdGl2ZS5zZXRBdHRyaWJ1dGUoYnVmZmVyQXR0cmliRGF0YSlcbiAgICApO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIHNldFByaW1pdGl2ZUF0dHJpYnV0ZXMoKSB7XG4gICAgZm9yIChsZXQgaSA9IDAsIG4gPSB0aGlzLnByaW1pdGl2ZXMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICB0aGlzLnByaW1pdGl2ZXNbaV0uc2V0QXR0cmlidXRlcygpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuY2xhc3MgU2tpbm5lZE1lc2hSZW5kZXJlciB7XG4gIGNvbnN0cnVjdG9yKHByaW1pdGl2ZXMsIHNraW4pIHtcbiAgICB0aGlzLnByaW1pdGl2ZXMgPSBwcmltaXRpdmVzO1xuICAgIHRoaXMuc2tpbiA9IHNraW47XG4gIH1cbiAgZHJhdyh1bmlmb3JtcywgY2FtZXJhTWF0cml4KSB7XG4gICAgdGhpcy5za2luLnVwZGF0ZSh1bmlmb3Jtcy51X21hdHJpeCk7XG4gICAgY29uc3QgX3VuaWZvcm1zID0ge1xuICAgICAgdV9qb2ludFRleHR1cmU6IHRoaXMuc2tpbi5qb2ludFRleHR1cmUsXG4gICAgICB1X251bUpvaW50czogdGhpcy5za2luLmpvaW50cy5sZW5ndGgsXG4gICAgICAuLi51bmlmb3JtcyxcbiAgICB9O1xuICAgIGZvciAobGV0IGkgPSAwLCBuID0gdGhpcy5wcmltaXRpdmVzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgdGhpcy5wcmltaXRpdmVzW2ldLmRyYXcoX3VuaWZvcm1zLCBjYW1lcmFNYXRyaXgpO1xuICAgIH1cbiAgfVxufVxuZXhwb3J0IHsgTWVzaFJlbmRlcmVyLCBTa2lubmVkTWVzaFJlbmRlcmVyIH07XG4iLCJpbXBvcnQge1xuICBjcmVhdGVJbmRpY2VzQnVmZmVyLFxuICBCdWZmZXJBdHRyaWJ1dGUsXG4gIER5bmFtaWNCdWZmZXJBdHRyaWJEZXNjcmlwdG9yLFxuICBCdWZmZXJDb250cm9sbGVyLFxuICBBdHRyaWJ1dGVTZXR0ZXIsXG59IGZyb20gXCIuL0J1ZmZlckF0dHJpYnV0ZVwiO1xuaW1wb3J0IHsgRUxFTUVOVF9TSVpFIH0gZnJvbSBcIi4vZW51bXNcIjtcbmltcG9ydCB7IGdldEdMVHlwZUZvclR5cGVkQXJyYXkgfSBmcm9tIFwiLi9wcm9ncmFtSW5mb1wiO1xuaW1wb3J0IGdldEF0dHJpYnV0ZVByb3BzQnlUeXBlIGZyb20gXCIuL2F0dHJpYlR5cGVQcm9wc1wiO1xuXG5jbGFzcyBQcmltaXRpdmVSZW5kZXJlciB7XG4gIGNvbnN0cnVjdG9yKGFycmF5RGF0YSkge1xuICAgIHRoaXMuYnVmZmVycyA9IHt9O1xuICAgIHRoaXMucHJvZ3JhbUluZm8gPSBudWxsO1xuICAgIHRoaXMuY29udGV4dCA9IG51bGw7XG4gICAgdGhpcy5kcmF3ZXIgPSBudWxsO1xuICAgIHRoaXMubW9kZSA9IG51bGw7XG4gICAgdGhpcy5vZmZzZXQgPSBudWxsO1xuICAgIHRoaXMubnVtRWxlbWVudHMgPSBudWxsO1xuICAgIHRoaXMudmFvID0gbnVsbDtcbiAgICB0aGlzLmNvbXBvbmVudFR5cGUgPSBudWxsO1xuICAgIHRoaXMuYXJyYXlEYXRhID0gYXJyYXlEYXRhO1xuICAgIGNvbnN0IHtjb21wb25lbnRUeXBlLCBudW1FbGVtZW50cywgbW9kZSB9ID0gYXJyYXlEYXRhO1xuICAgIHRoaXMubnVtRWxlbWVudHMgPSBudW1FbGVtZW50cztcbiAgICB0aGlzLm1vZGUgPSBtb2RlO1xuICAgIHRoaXMuY29tcG9uZW50VHlwZSA9IGNvbXBvbmVudFR5cGUgfHwgNTEyMztcbiAgfVxuICBzZXRDb250ZXh0KGdsQ29udGV4dFdyYXBwZXIpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBnbENvbnRleHRXcmFwcGVyO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIGNyZWF0ZVZBTygpIHtcbiAgICBpZiAodGhpcy52YW8pIHJldHVybjtcbiAgICB0aGlzLnZhbyA9IHRoaXMuY29udGV4dC5nbC5jcmVhdGVWZXJ0ZXhBcnJheSgpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIHNldE1vZGUobW9kZSl7XG4gICAgdGhpcy5tb2RlID0gbW9kZVxuICAgIHJldHVybiB0aGlzXG4gIH1cbiAgY3JlYXRlR2VvbWV0cnlCdWZmZXJzKCkge1xuICAgIGNvbnN0IHsgYXJyYXlEYXRhIH0gPSB0aGlzO1xuICAgIGNvbnN0IHsgZ2wgfSA9IHRoaXMuY29udGV4dDtcbiAgICBjb25zdCB7IGF0dHJpYnV0ZXMsIGluZGljZXMsIGNvbXBvbmVudFR5cGUsIG51bUVsZW1lbnRzLCBtb2RlIH0gPSBhcnJheURhdGE7XG4gICBcblxuICAgIGlmIChhdHRyaWJ1dGVzKSB7XG4gICAgICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKChhdHRyaWJ1dGVOYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICBzdHJpZGUsXG4gICAgICAgICAgdHlwZSxcbiAgICAgICAgICBvZmZzZXQsXG4gICAgICAgICAgbG9jYXRpb24sXG4gICAgICAgICAgbnVtQ29tcG9uZW50cyxcbiAgICAgICAgICBudW1BdHRyaWJ1dGVzLFxuICAgICAgICAgIGRhdGEsXG4gICAgICAgICAgc2l6ZSxcbiAgICAgICAgfSA9IGF0dHJpYnV0ZXNbYXR0cmlidXRlTmFtZV07XG4gICAgICAgIGNvbnN0IGJ1ZmZlckF0dHJpYnV0ZURlc2NyaXB0b3IgPSBuZXcgQnVmZmVyQXR0cmlidXRlKGdsLCB7XG4gICAgICAgICAgc3RyaWRlLFxuICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgb2Zmc2V0LFxuICAgICAgICAgIGxvY2F0aW9uLFxuICAgICAgICAgIG51bUF0dHJpYnV0ZXMsXG4gICAgICAgICAgbnVtQ29tcG9uZW50cyxcbiAgICAgICAgICBzaXplLFxuICAgICAgICB9KTtcbiAgICAgICAgYnVmZmVyQXR0cmlidXRlRGVzY3JpcHRvci5idWZmZXJEYXRhKGRhdGEpO1xuICAgICAgICB0aGlzLmJ1ZmZlcnMgPSB7XG4gICAgICAgICAgLi4udGhpcy5idWZmZXJzLFxuICAgICAgICAgIFthdHRyaWJ1dGVOYW1lXTogYnVmZmVyQXR0cmlidXRlRGVzY3JpcHRvcixcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoaW5kaWNlcykge1xuICAgICAgY29uc3QgaW5kaWNlc0J1ZmZlciA9IGdsLmNyZWF0ZUJ1ZmZlcigpO1xuICAgICAgZ2wuYmluZEJ1ZmZlcihnbC5FTEVNRU5UX0FSUkFZX0JVRkZFUiwgaW5kaWNlc0J1ZmZlcik7XG4gICAgICBnbC5idWZmZXJEYXRhKGdsLkVMRU1FTlRfQVJSQVlfQlVGRkVSLCBpbmRpY2VzLCBnbC5TVEFUSUNfRFJBVyk7XG4gICAgICB0aGlzLmluZGljZXMgPSBpbmRpY2VzQnVmZmVyO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBzZXRBdHRyaWJ1dGVzKCkge1xuICAgIGNvbnN0IHsgZ2wgfSA9IHRoaXMuY29udGV4dDtcblxuICAgIGdsLmJpbmRWZXJ0ZXhBcnJheSh0aGlzLnZhbyk7XG4gICAgZm9yIChjb25zdCBhdHRyaWIgaW4gdGhpcy5idWZmZXJzKSB7XG4gICAgICBjb25zdCBidWZmZXJBdHRyaWJ1dGVEZXNjcmlwdG9yID0gdGhpcy5idWZmZXJzW2F0dHJpYl07XG4gICAgICBidWZmZXJBdHRyaWJ1dGVEZXNjcmlwdG9yLnNldEF0dHJpYnV0ZSgpO1xuICAgIH1cbiAgICBnbC5iaW5kQnVmZmVyKGdsLkVMRU1FTlRfQVJSQVlfQlVGRkVSLCB0aGlzLmluZGljZXMpO1xuICAgIGdsLmJpbmRWZXJ0ZXhBcnJheShudWxsKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIHNldERyYXdlcihkcmF3ZXIpIHtcbiAgICB0aGlzLmRyYXdlciA9IGRyYXdlcjtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBzZXRQcm9ncmFtSW5mbyhwcm9ncmFtSW5mbykge1xuICAgIHRoaXMucHJvZ3JhbUluZm8gPSBwcm9ncmFtSW5mbztcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBjcmVhdGVCdWZmZXJBdHRyaWJEYXRhKG5hbWUsIHR5cGUsIHBhcmFtcykge1xuICAgIGNvbnN0IHsgZ2wgfSA9IHRoaXMuY29udGV4dDtcbiAgICBjb25zdCBhdHRyaWJQcm9wcyA9IGdldEF0dHJpYnV0ZVByb3BzQnlUeXBlKHR5cGUpO1xuICAgIGNvbnN0IGF0dHJpYnV0ZVByb3BzID0geyAuLi5hdHRyaWJQcm9wcywgLi4ucGFyYW1zIH07XG4gICAgY29uc3QgYnVmZmVyQXR0cmliRGF0YSA9IG5ldyBCdWZmZXJBdHRyaWJ1dGUoZ2wsIGF0dHJpYnV0ZVByb3BzKTtcbiAgICB0aGlzLmJ1ZmZlcnMgPSB7IC4uLnRoaXMuYnVmZmVycywgW25hbWVdOiBidWZmZXJBdHRyaWJEYXRhIH07XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgc2V0QnVmZmVyQXR0cmliRGF0YShuYW1lLCBidWZmZXJBdHRyaWJEYXRhKSB7XG4gICAgdGhpcy5idWZmZXJzID0geyAuLi50aGlzLmJ1ZmZlcnMsIFtuYW1lXTogYnVmZmVyQXR0cmliRGF0YSB9O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIHNldE93bkF0dHJpYnV0ZShuYW1lLCBkaXZpc29yKSB7XG4gICAgY29uc3QgeyBnbCB9ID0gdGhpcy5jb250ZXh0O1xuICAgIGNvbnN0IGJ1ZmZlckF0dHJpYkRhdGEgPSB0aGlzLmJ1ZmZlcnNbbmFtZV07XG4gICAgZ2wuYmluZFZlcnRleEFycmF5KHRoaXMudmFvKTtcbiAgICBidWZmZXJBdHRyaWJEYXRhLnNldEF0dHJpYnV0ZShkaXZpc29yKTtcbiAgICBnbC5iaW5kVmVydGV4QXJyYXkobnVsbCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgc2V0QXR0cmlidXRlKGJ1ZmZlckF0dHJpYkRhdGEpIHtcbiAgICBjb25zdCB7IGdsIH0gPSB0aGlzLmNvbnRleHQ7XG4gICAgZ2wuYmluZFZlcnRleEFycmF5KHRoaXMudmFvKTtcbiAgICBidWZmZXJBdHRyaWJEYXRhLnNldEF0dHJpYnV0ZSgpO1xuICAgIGdsLmJpbmRWZXJ0ZXhBcnJheShudWxsKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBidWZmZXJEYXRhKGJ1ZmZlck5hbWUsIGRhdGEsIGJ5dGVMZW5ndGgsIHVzYWdlKSB7XG4gICAgY29uc3QgYnVmZmVyQXR0cmliRGF0YSA9IHRoaXMuYnVmZmVyc1tidWZmZXJOYW1lXTtcbiAgICBidWZmZXJBdHRyaWJEYXRhLmJ1ZmZlckRhdGEoZGF0YSwgYnl0ZUxlbmd0aCwgdXNhZ2UpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIGJ1ZmZlclN1YkRhdGEoYnVmZmVyTmFtZSwgZGF0YSwgb2Zmc2V0KSB7XG4gICAgY29uc3QgYnVmZmVyRGVzYyA9IHRoaXMuYnVmZmVyc1tidWZmZXJOYW1lXTtcbiAgICBidWZmZXJEZXNjLmJ1ZmZlclN1YkRhdGEoZGF0YSwgb2Zmc2V0KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBkcmF3KHVuaWZvcm1zLCBjYW1lcmFNYXRyaXgpIHtcbiAgICB0aGlzLmRyYXdlci5kcmF3KHRoaXMsIHVuaWZvcm1zLCBjYW1lcmFNYXRyaXgpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIGRyYXdJbnN0YW5jZWQodW5pZm9ybXMsIGNhbWVyYU1hdHJpeCwgbnVtSW5zdGFuY2VzKSB7XG4gICAgdGhpcy5kcmF3ZXIuZHJhd0luc3RhbmNlZCh0aGlzLCB1bmlmb3JtcywgY2FtZXJhTWF0cml4LCBudW1JbnN0YW5jZXMpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByaW1pdGl2ZVJlbmRlcmVyO1xuIiwiY29uc3QgcHJvcHMgPSB7XG4gIG1hdDQ6IHtcbiAgICBzdHJpZGU6IDY0LFxuICAgIGJ5dGVMZW5ndGg6IDY0LFxuICAgIHR5cGU6IDB4MTQwNixcbiAgICBudW1BdHRyaWJ1dGVzOiA0LFxuICAgIG51bUNvbXBvbmVudHM6IDQsXG4gIH0sXG4gIHZlYzM6IHtcbiAgICBudW1Db21wb25lbnRzOiAzLFxuICAgIHR5cGU6IDB4MTQwNixcbiAgICBudW1BdHRyaWJ1dGVzOiAxLFxuICB9LFxufTtcbmNvbnN0IGdldEF0dHJpYnV0ZVByb3BzQnlUeXBlID0gKHR5cGUpID0+IHByb3BzW3R5cGVdO1xuZXhwb3J0IGRlZmF1bHQgZ2V0QXR0cmlidXRlUHJvcHNCeVR5cGU7XG4iLCJpbXBvcnQgeyBOb2RlLCBUUlMgfSBmcm9tIFwibWF0aFwiO1xuXG5jbGFzcyBFbnRpdHkgZXh0ZW5kcyBOb2RlIHtcbiAgc3RhdGljIG1ha2VFbnRpdHkoZW50aXR5RGVzY3JpcHRpb24sIHJvb3ROb2RlTmR4KSB7XG4gICAgY29uc3QgeyBub2RlcywgbWVzaGVzIH0gPSBlbnRpdHlEZXNjcmlwdGlvbjtcbiAgICBjb25zdCByb290Tm9kZSA9IG5vZGVzW3Jvb3ROb2RlTmR4XTtcbiAgICBjb25zdCBtYWtlTm9kZSA9IChub2RlRGVzY3JpcHRpb24sIG5keCkgPT4ge1xuICAgICAgY29uc3QgdHJzID0gbmV3IFRSUyhcbiAgICAgICAgbm9kZURlc2NyaXB0aW9uLnRyYW5zbGF0aW9uIHx8IFswLCAwLCAwXSxcbiAgICAgICAgbm9kZURlc2NyaXB0aW9uLnJvdGF0aW9uIHx8IFswLCAwLCAwLCAwXSxcbiAgICAgICAgbm9kZURlc2NyaXB0aW9uLnNjYWxlIHx8IFsxLCAxLCAxXVxuICAgICAgKTtcbiAgICAgIGNvbnN0IG5vZGUgPSBuZXcgRW50aXR5KG5vZGVEZXNjcmlwdGlvbi5uYW1lLCB0cnMsIG5keCk7XG4gICAgICBpZiAobm9kZURlc2NyaXB0aW9uLm1lc2ggIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIG5vZGUucmVuZGVyZXIgPSBtZXNoZXNbbm9kZURlc2NyaXB0aW9uLm1lc2hdO1xuICAgICAgfVxuICAgICAgaWYgKG5vZGVEZXNjcmlwdGlvbi5jaGlsZHJlbikge1xuICAgICAgICBub2RlRGVzY3JpcHRpb24uY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGROZHgpID0+IHtcbiAgICAgICAgICBjb25zdCBjaGlsZCA9IG1ha2VOb2RlKG5vZGVzW2NoaWxkTmR4XSwgY2hpbGROZHgpO1xuICAgICAgICAgIGNoaWxkLnNldFBhcmVudChub2RlKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbm9kZTtcbiAgICB9O1xuICAgIHJldHVybiBtYWtlTm9kZShyb290Tm9kZSwgcm9vdE5vZGVOZHgpO1xuICB9XG4gIGNvbnN0cnVjdG9yKG5hbWUsIHRycywgbmR4KSB7XG4gICAgc3VwZXIobmFtZSwgdHJzKTtcbiAgICB0aGlzLm5keCA9IG5keDtcbiAgICB0aGlzLnBoeXNpY3MgPSBudWxsO1xuICAgIHRoaXMuc2tpbk5keCA9IG51bGw7XG4gICAgdGhpcy5vYmplY3RzVG9EcmF3ID0gW107XG4gICAgdGhpcy5yZW5kZXJlciA9IG51bGw7XG4gIH1cbiAgdXBkYXRlT2JqZWN0c1RvRHJhdygpIHtcbiAgICBjb25zdCBxdWV1ZSA9IFt0aGlzXTtcbiAgICB3aGlsZSAocXVldWUubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3Qgbm9kZSA9IHF1ZXVlLnBvcCgpO1xuICAgICAgY29uc29sZS5sb2cobm9kZSk7XG4gICAgICBpZiAobm9kZS5yZW5kZXJlcikgdGhpcy5vYmplY3RzVG9EcmF3LnB1c2gobm9kZSk7XG4gICAgICBpZiAobm9kZS5jaGlsZHJlbikgcXVldWUucHVzaCguLi5ub2RlLmNoaWxkcmVuKTtcbiAgICB9XG4gIH1cbiAgdHJhdmVyc2UoZm4pIHtcbiAgICBmbih0aGlzKTtcbiAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiBjaGlsZC50cmF2ZXJzZShmbikpO1xuICB9XG4gIGZpbmQobmR4KSB7XG4gICAgbGV0IHJlc3VsdCA9IG51bGw7XG4gICAgY29uc3QgaXRlciA9IChub2RlcykgPT4ge1xuICAgICAgZm9yIChsZXQgbm9kZSBvZiBub2Rlcykge1xuICAgICAgICBpZiAobm9kZS5uZHggPT09IG5keCkgcmVzdWx0ID0gbm9kZTtcbiAgICAgICAgZWxzZSBpdGVyKG5vZGUuY2hpbGRyZW4pO1xuICAgICAgfVxuICAgIH07XG4gICAgaXRlcihbdGhpc10pO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgZmluZEJ5TmFtZShuYW1lKSB7XG4gICAgbGV0IHJlc3VsdCA9IG51bGw7XG4gICAgY29uc3QgaXRlciA9IChub2RlcykgPT4ge1xuICAgICAgZm9yIChsZXQgbm9kZSBvZiBub2Rlcykge1xuICAgICAgICBpZiAobm9kZS5uYW1lID09PSBuYW1lKSByZXN1bHQgPSBub2RlO1xuICAgICAgICBlbHNlIGl0ZXIobm9kZS5jaGlsZHJlbik7XG4gICAgICB9XG4gICAgfTtcbiAgICBpdGVyKFt0aGlzXSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICByZW5kZXIodW5pZm9ybXMsIGNhbWVyYU1hdHJpeCkge1xuICAgIHRoaXMub2JqZWN0c1RvRHJhdy5mb3JFYWNoKChvYmplY3QpID0+IHtcbiAgICAgIG9iamVjdC5yZW5kZXJlci5kcmF3KFxuICAgICAgICB7IC4uLnVuaWZvcm1zLCB1X21hdHJpeDogb2JqZWN0LndvcmxkTWF0cml4IH0sXG4gICAgICAgIGNhbWVyYU1hdHJpeFxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFbnRpdHk7XG4iLCJjb25zdCBUWVBFRF9BUlJBWVMgPSB7XG4gICAgJzUxMjAnOiBJbnQ4QXJyYXksICAgIFxuICAgICc1MTIxJzogVWludDhBcnJheSwgICBcbiAgICAnNTEyMic6IEludDE2QXJyYXksICAgXG4gICAgJzUxMjMnOiBVaW50MTZBcnJheSwgIFxuICAgICc1MTI0JzogSW50MzJBcnJheSwgICBcbiAgICAnNTEyNSc6IFVpbnQzMkFycmF5LCAgXG4gICAgJzUxMjYnOiBGbG9hdDMyQXJyYXksIFxufVxuY29uc3QgTlVNX0NPTVBPTkVOVFMgPSB7XG4gICAgJ1NDQUxBUicgOiAxLFxuICAgICdWRUMyJyA6IDIsXG4gICAgJ1ZFQzMnIDogMyxcbiAgICAnVkVDNCcgOiA0LFxuICAgICdNQVQyJzogNCxcbiAgJ01BVDMnOiA5LFxuICAnTUFUNCc6IDE2LFxufVxuY29uc3QgTE9DQVRJT05TID0ge1xuICAgICdQT1NJVElPTicgOiAwLFxuICAgICdOT1JNQUwnIDogMSxcbiAgICAnV0VJR0hUU18wJyA6IDIsXG4gICAgJ0pPSU5UU18wJyA6IDMsXG4gICAgJ1RFWENPT1JEXzAnIDogNCxcbn1cbmNvbnN0IEVMRU1FTlRfU0laRSA9IHtcbiAgICAweDE0MDYgOiA0XG59XG5leHBvcnQge1xuICAgIExPQ0FUSU9OUywgTlVNX0NPTVBPTkVOVFMsIFRZUEVEX0FSUkFZUywgRUxFTUVOVF9TSVpFXG59IiwiaW1wb3J0IFByaW1pdGl2ZVJlbmRlcmVyIGZyb20gXCIuL1ByaW1pdGl2ZVJlbmRlcmVyXCI7XG5pbXBvcnQgeyBNZXNoUmVuZGVyZXIgfSBmcm9tIFwiLi9NZXNoUmVuZGVyZXJcIjtcbmltcG9ydCB7IEF0dHJpYnV0ZVNldHRlciwgQnVmZmVyQ29udHJvbGxlciB9IGZyb20gXCIuL0J1ZmZlckF0dHJpYnV0ZVwiO1xuaW1wb3J0IHsgTlVNX0NPTVBPTkVOVFMsIFRZUEVEX0FSUkFZUywgTE9DQVRJT05TIH0gZnJvbSBcIi4vZW51bXNcIjtcblxuY29uc3QgQXJyYXlEYXRhRnJvbUdsdGYgPSAoZ2x0ZiwgYnVmZmVycykgPT4ge1xuICBjb25zdCB7IGJ1ZmZlclZpZXdzLCBhY2Nlc3NvcnMsIG1lc2hlcywgbm9kZXMgfSA9IGdsdGY7XG4gIGNvbnN0IGF0dHJpYkRhdGFGcm9tQWNjZXNzb3IgPSAoYWNjZXNzb3IpID0+IHtcbiAgICBjb25zdCBidWZmZXJWaWV3ID0gYnVmZmVyVmlld3NbYWNjZXNzb3IuYnVmZmVyVmlld107XG4gICAgY29uc3QgeyBjb3VudCwgY29tcG9uZW50VHlwZSwgdHlwZSB9ID0gYWNjZXNzb3I7XG4gICAgY29uc3QgYnl0ZU9mZnNldCA9IGFjY2Vzc29yLmJ5dGVPZmZzZXQgfHwgMDtcbiAgICBjb25zdCB7IGJ5dGVMZW5ndGgsIHRhcmdldCB9ID0gYnVmZmVyVmlldztcbiAgICBjb25zdCBzdHJpZGUgPSBidWZmZXJWaWV3LmJ5dGVTdHJpZGUgfHwgMDtcbiAgICBjb25zdCBidWZmZXJWaWV3Qnl0ZU9mZnNldCA9IGJ1ZmZlclZpZXcuYnl0ZU9mZnNldCB8fCAwO1xuICAgIGNvbnN0IGJ1ZmZlciA9IGJ1ZmZlcnNbYnVmZmVyVmlldy5idWZmZXJdO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGRhdGE6IG5ldyBVaW50OEFycmF5KGJ1ZmZlciwgYnVmZmVyVmlld0J5dGVPZmZzZXQsIGJ5dGVMZW5ndGgpLFxuICAgICAgbnVtQ29tcG9uZW50czogTlVNX0NPTVBPTkVOVFNbdHlwZV0sXG4gICAgICBzdHJpZGUsXG4gICAgICBieXRlTGVuZ3RoLFxuICAgICAgbG9jYXRpb246IG51bGwsXG4gICAgICBjb3VudCxcbiAgICAgIHR5cGU6IGNvbXBvbmVudFR5cGUsXG4gICAgICBvZmZzZXQ6IGJ5dGVPZmZzZXQgfHwgMCxcbiAgICAgIGNvbXBvbmVudFR5cGU6IGFjY2Vzc29yLmNvbXBvbmVudFR5cGUsXG4gICAgfTtcbiAgfTtcbiAgY29uc3QgX21lc2hlcyA9IG1lc2hlcy5tYXAoKG1lc2gpID0+ICh7XG4gICAgcHJpbWl0aXZlczogbWVzaC5wcmltaXRpdmVzLm1hcCgoX3ByaW1pdGl2ZSkgPT4ge1xuICAgICAgY29uc3QgcHJpbWl0aXZlID0ge1xuICAgICAgICBhdHRyaWJ1dGVzOiB7fSxcbiAgICAgICAgbW9kZTogX3ByaW1pdGl2ZS5tb2RlLFxuICAgICAgfTtcbiAgICAgIGlmIChfcHJpbWl0aXZlLmhhc093blByb3BlcnR5KFwiaW5kaWNlc1wiKSkge1xuICAgICAgICBjb25zdCBpbmRpY2VzSW5mbyA9IGF0dHJpYkRhdGFGcm9tQWNjZXNzb3IoXG4gICAgICAgICAgYWNjZXNzb3JzW19wcmltaXRpdmUuaW5kaWNlc11cbiAgICAgICAgKTtcbiAgICAgICAgcHJpbWl0aXZlLmluZGljZXMgPSBpbmRpY2VzSW5mby5kYXRhO1xuICAgICAgICBwcmltaXRpdmUubnVtRWxlbWVudHMgPSBpbmRpY2VzSW5mby5jb3VudDtcbiAgICAgICAgcHJpbWl0aXZlLmNvbXBvbmVudFR5cGUgPSBpbmRpY2VzSW5mby5jb21wb25lbnRUeXBlO1xuICAgICAgfVxuICAgICAgT2JqZWN0LmtleXMoX3ByaW1pdGl2ZS5hdHRyaWJ1dGVzKS5mb3JFYWNoKChhdHRyaWJOYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IGF0dHJpYnV0ZSA9IF9wcmltaXRpdmUuYXR0cmlidXRlc1thdHRyaWJOYW1lXTtcbiAgICAgICAgcHJpbWl0aXZlLmF0dHJpYnV0ZXNbYXR0cmliTmFtZV0gPSBhdHRyaWJEYXRhRnJvbUFjY2Vzc29yKFxuICAgICAgICAgIGFjY2Vzc29yc1thdHRyaWJ1dGVdXG4gICAgICAgICk7XG4gICAgICAgIC8vaWYoYXR0cmliTmFtZSA9PT0gJ0pPSU5UU18wJykgX3ByaW1pdGl2ZS5hdHRyaWJ1dGVzW2F0dHJpYk5hbWVdLmRhdGEgPSBuZXcgVWludDMyQXJyYXkoX3ByaW1pdGl2ZS5hdHRyaWJ1dGVzW2F0dHJpYk5hbWVdLmRhdGEpXG4gICAgICAgIHByaW1pdGl2ZS5hdHRyaWJ1dGVzW2F0dHJpYk5hbWVdLmxvY2F0aW9uID0gTE9DQVRJT05TW2F0dHJpYk5hbWVdO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gcHJpbWl0aXZlO1xuICAgIH0pLFxuICAgIG5hbWU6IG1lc2gubmFtZSxcbiAgfSkpO1xuXG4gIHJldHVybiBfbWVzaGVzLm1hcCgobWVzaCkgPT4ge1xuICAgIGNvbnN0IHByaW1pdGl2ZXMgPSBtZXNoLnByaW1pdGl2ZXMubWFwKFxuICAgICAgKHByaW1pdGl2ZSkgPT4gbmV3IFByaW1pdGl2ZVJlbmRlcmVyKHByaW1pdGl2ZSlcbiAgICApO1xuICAgIGNvbnN0IG5hbWUgPSBtZXNoLm5hbWU7XG5cbiAgICByZXR1cm4gbmV3IE1lc2hSZW5kZXJlcih7IHByaW1pdGl2ZXMsIG5hbWUgfSk7XG4gIH0pO1xufTtcblxuY29uc3QgUHJpbWl0aXZlUmVuZGVySW5mb0Zyb21BcnJheURhdGEgPSAobWVzaGVzKSA9PlxuICBtZXNoZXMubWFwKChtZXNoKSA9PiB7XG4gICAgY29uc3QgcHJpbWl0aXZlcyA9IG1lc2gucHJpbWl0aXZlcy5tYXAoXG4gICAgICAocHJpbWl0aXZlKSA9PiBuZXcgUHJpbWl0aXZlUmVuZGVyZXIocHJpbWl0aXZlKVxuICAgICk7XG4gICAgY29uc3QgbmFtZSA9IG1lc2gubmFtZTtcbiAgICByZXR1cm4gbmV3IE1lc2hSZW5kZXJlcih7IG5hbWUsIHByaW1pdGl2ZXMgfSk7XG4gIH0pO1xuXG5jb25zdCBFbnRpdHlEYXRhRnJvbUdsdGYgPSAoZ2x0ZiwgYnVmZmVycykgPT5cbiAgUHJpbWl0aXZlUmVuZGVySW5mb0Zyb21BcnJheURhdGEoQXJyYXlEYXRhRnJvbUdsdGYoZ2x0ZiwgYnVmZmVycykpO1xuXG5jbGFzcyBHTFRGIHtcbiAgY29uc3RydWN0b3IoZ2x0ZiwgYmluYXJ5QnVmZmVycykge1xuICAgIGNvbnN0IHsgbm9kZXMsIG1lc2hlcywgc2tpbnMgfSA9IGdsdGY7XG4gICAgdGhpcy5ub2RlcyA9IG5vZGVzO1xuICAgIHRoaXMubWVzaGVzID0gQXJyYXlEYXRhRnJvbUdsdGYoZ2x0ZiwgYmluYXJ5QnVmZmVycyk7XG4gIH1cbn1cbmV4cG9ydCB7XG4gIEFycmF5RGF0YUZyb21HbHRmLFxuICBQcmltaXRpdmVSZW5kZXJJbmZvRnJvbUFycmF5RGF0YSxcbiAgRW50aXR5RGF0YUZyb21HbHRmLFxuICBHTFRGLFxufTtcbiIsImltcG9ydCB7IGV4cGFuZGVkVHlwZWRBcnJheSB9IGZyb20gXCIuL3Byb2dyYW1JbmZvLmpzXCI7XG5pbXBvcnQgeyBjcm9zcywgZGlmZiwgbm9ybWFsaXplIH0gZnJvbSBcIm1hdGgvc3JjL3ZlY3Rvci5qc1wiO1xuY29uc3QgbGluZWRCb3hJbmRpY2VzID0gbmV3IFVpbnQxNkFycmF5KFtcbiAgMCxcbiAgMSxcbiAgMSxcbiAgMixcbiAgMixcbiAgMyxcbiAgMyxcbiAgMCwgLy8gZnJvbnRcbiAgMCxcbiAgNSxcbiAgNSxcbiAgNCxcbiAgNCxcbiAgMSxcbiAgMSxcbiAgMCwgLy9ib3R0b21cbiAgMCxcbiAgNCxcbiAgNCxcbiAgNyxcbiAgNyxcbiAgMyxcbiAgMyxcbiAgMCwgLy9sZWZ0XG4gIDEsXG4gIDIsXG4gIDIsXG4gIDYsXG4gIDYsXG4gIDUsXG4gIDUsXG4gIDEsIC8vcmlnaHRcbiAgNCxcbiAgNSxcbiAgNSxcbiAgNixcbiAgNixcbiAgNyxcbiAgNyxcbiAgNCwgLy8gYmFja1xuICAyLFxuICA3LFxuICA3LFxuICAzLFxuICAzLFxuICA2LFxuICA2LFxuICAyLCAvLyB0b3Bcbl0pO1xuXG5jb25zdCBDVUJFX0ZBQ0VfSU5ESUNFUyA9IFtcbiAgWzMsIDcsIDUsIDFdLCAvLyByaWdodFxuICBbNiwgMiwgMCwgNF0sIC8vIGxlZnRcbiAgWzYsIDcsIDMsIDJdLCAvLyA/P1xuICBbMCwgMSwgNSwgNF0sIC8vID8/XG4gIFs3LCA2LCA0LCA1XSwgLy8gZnJvbnRcbiAgWzIsIDMsIDEsIDBdLCAvLyBiYWNrXG5dO1xuXG5mdW5jdGlvbiBjcmVhdGVCb3goX2EgPSAxLCBfYiA9IDEsIF9jID0gMSkge1xuICBjb25zdCBhID0gX2EgLyAyLFxuICAgIGIgPSBfYiAvIDIsXG4gICAgYyA9IF9jIC8gMjtcbiAgY29uc3QgY29ybmVyVmVydGljZXMgPSBbXG4gICAgWy1hLCAtYiwgLWNdLFxuICAgIFsrYSwgLWIsIC1jXSxcbiAgICBbLWEsICtiLCAtY10sXG4gICAgWythLCArYiwgLWNdLFxuICAgIFstYSwgLWIsICtjXSxcbiAgICBbK2EsIC1iLCArY10sXG4gICAgWy1hLCArYiwgK2NdLFxuICAgIFsrYSwgK2IsICtjXSxcbiAgXTtcblxuICBjb25zdCBmYWNlTm9ybWFscyA9IFtcbiAgICBbKzEsICswLCArMF0sXG4gICAgWy0xLCArMCwgKzBdLFxuICAgIFsrMCwgKzEsICswXSxcbiAgICBbKzAsIC0xLCArMF0sXG4gICAgWyswLCArMCwgKzFdLFxuICAgIFsrMCwgKzAsIC0xXSxcbiAgXTtcblxuICBjb25zdCB1dkNvb3JkcyA9IFtcbiAgICBbMSwgMF0sXG4gICAgWzAsIDBdLFxuICAgIFswLCAxXSxcbiAgICBbMSwgMV0sXG4gIF07XG4gIGNvbnN0IG51bVZlcnRpY2VzID0gNiAqIDQ7XG4gIGNvbnN0IHBvc2l0aW9ucyA9IGV4cGFuZGVkVHlwZWRBcnJheShuZXcgRmxvYXQzMkFycmF5KG51bVZlcnRpY2VzICogMykpO1xuICBjb25zdCBub3JtYWxzID0gZXhwYW5kZWRUeXBlZEFycmF5KG5ldyBGbG9hdDMyQXJyYXkobnVtVmVydGljZXMgKiAzKSk7XG4gIC8vY29uc3QgdGV4Q29vcmRzID0gd2ViZ2xVdGlscy5jcmVhdGVBdWdtZW50ZWRUeXBlZEFycmF5KDIgLCBudW1WZXJ0aWNlcyk7XG4gIGNvbnN0IGluZGljZXMgPSBleHBhbmRlZFR5cGVkQXJyYXkobmV3IFVpbnQxNkFycmF5KDYgKiAyICogMykpO1xuXG4gIGZvciAobGV0IGYgPSAwOyBmIDwgNjsgKytmKSB7XG4gICAgY29uc3QgZmFjZUluZGljZXMgPSBDVUJFX0ZBQ0VfSU5ESUNFU1tmXTtcbiAgICBmb3IgKGxldCB2ID0gMDsgdiA8IDQ7ICsrdikge1xuICAgICAgY29uc3QgcG9zaXRpb24gPSBjb3JuZXJWZXJ0aWNlc1tmYWNlSW5kaWNlc1t2XV07XG4gICAgICBjb25zdCBub3JtYWwgPSBmYWNlTm9ybWFsc1tmXTtcbiAgICAgIHBvc2l0aW9ucy5wdXNoKHBvc2l0aW9uKTtcbiAgICAgIG5vcm1hbHMucHVzaChub3JtYWwpO1xuICAgIH1cblxuICAgIGNvbnN0IG9mZnNldCA9IDQgKiBmO1xuICAgIGluZGljZXMucHVzaChvZmZzZXQgKyAwLCBvZmZzZXQgKyAxLCBvZmZzZXQgKyAyKTtcbiAgICBpbmRpY2VzLnB1c2gob2Zmc2V0ICsgMCwgb2Zmc2V0ICsgMiwgb2Zmc2V0ICsgMyk7XG4gIH1cbiAgY29uc3QgbGVuID0gcG9zaXRpb25zLmJ5dGVMZW5ndGg7XG4gIGNvbnN0IHRleGNvb3JkID0gbmV3IEZsb2F0MzJBcnJheShbXG4gICAgLy8gRnJvbnRcbiAgICAwLjAsIDAuMCwgMS4wLCAwLjAsIDEuMCwgMS4wLCAwLjAsIDEuMCxcbiAgICAvLyBCYWNrXG4gICAgMC4wLCAwLjAsIDEuMCwgMC4wLCAxLjAsIDEuMCwgMC4wLCAxLjAsXG4gICAgLy8gVG9wXG4gICAgMC4wLCAwLjAsIDEuMCwgMC4wLCAxLjAsIDEuMCwgMC4wLCAxLjAsXG4gICAgLy8gQm90dG9tXG4gICAgMC4wLCAwLjAsIDEuMCwgMC4wLCAxLjAsIDEuMCwgMC4wLCAxLjAsXG4gICAgLy8gUmlnaHRcbiAgICAwLjAsIDAuMCwgMS4wLCAwLjAsIDEuMCwgMS4wLCAwLjAsIDEuMCxcbiAgICAvLyBMZWZ0XG4gICAgMC4wLCAwLjAsIDEuMCwgMC4wLCAxLjAsIDEuMCwgMC4wLCAxLjAsXG4gIF0pO1xuXG4gIGNvbnN0IEFycmF5RGF0YSA9IHtcbiAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICBOT1JNQUw6IHtcbiAgICAgICAgZGF0YTogbm9ybWFscyxcbiAgICAgICAgY291bnQ6IDYgKiA0ICogMyxcbiAgICAgICAgbG9jYXRpb246IDEsXG4gICAgICAgIGJ5dGVMZW5ndGg6IG5vcm1hbHMuYnl0ZUxlbmd0aCxcbiAgICAgICAgc3RyaWRlOiAwLFxuICAgICAgICBvZmZzZXQ6IDAsXG4gICAgICAgIG51bUNvbXBvbmVudHM6IDMsXG4gICAgICAgIHR5cGU6IDUxMjYsXG4gICAgICB9LFxuICAgICAgUE9TSVRJT046IHtcbiAgICAgICAgZGF0YTogcG9zaXRpb25zLFxuICAgICAgICBjb3VudDogNiAqIDQgKiAzLFxuICAgICAgICBsb2NhdGlvbjogMCxcbiAgICAgICAgYnl0ZUxlbmd0aDogcG9zaXRpb25zLmJ5dGVMZW5ndGgsXG4gICAgICAgIHN0cmlkZTogMCxcbiAgICAgICAgb2Zmc2V0OiAwLFxuICAgICAgICBudW1Db21wb25lbnRzOiAzLFxuICAgICAgICB0eXBlOiA1MTI2LFxuICAgICAgfSxcbiAgICAgIFRFWENPT1JEXzA6IHtcbiAgICAgICAgZGF0YTogdGV4Y29vcmQsXG4gICAgICAgIGNvdW50OiA0OCxcbiAgICAgICAgdHlwZTogNTEyNixcbiAgICAgICAgb2Zmc2V0OiAwLFxuICAgICAgICBzdHJpZGU6IDAsXG4gICAgICAgIGJ5dGVMZW5ndGg6IHRleGNvb3JkLmJ5dGVMZW5ndGgsXG4gICAgICAgIGxvY2F0aW9uOiA0LFxuICAgICAgICBudW1Db21wb25lbnRzOiAyLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGluZGljZXM6IGluZGljZXMsXG4gICAgbnVtRWxlbWVudHM6IGluZGljZXMubGVuZ3RoLFxuICAgIGNvbXBvbmVudFR5cGU6IDUxMjMsXG4gICAgbW9kZTogNCxcbiAgfTtcbiAgcmV0dXJuIEFycmF5RGF0YTtcbiAgLypyZXR1cm4ge1xuICAgICAgICAgIGdsdGYgOiB7XG4gICAgICAgICAgICBhY2Nlc3NvcnMgOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYnVmZmVyVmlldyA6IDAsXG4gICAgICAgICAgICAgICAgYnl0ZU9mZnNldCA6IDAsXG4gICAgICAgICAgICAgICAgY291bnQgOjcyLFxuICAgICAgICAgICAgICAgIGNvbXBvbmVudFR5cGUgOiA1MTI2LFxuICAgICAgICAgICAgICAgIHR5cGUgOiAnVkVDMydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGJ1ZmZlclZpZXcgOiAxLFxuICAgICAgICAgICAgICBieXRlT2Zmc2V0IDogMCxcbiAgICAgICAgICAgICAgY291bnQgOiA3MixcbiAgICAgICAgICAgICAgY29tcG9uZW50VHlwZSA6IDUxMjYsXG4gICAgICAgICAgICAgIHR5cGUgOiAnVkVDMydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGJ1ZmZlclZpZXcgOiAyLFxuICAgICAgICAgICAgICBieXRlT2Zmc2V0IDogMCxcbiAgICAgICAgICAgICAgY291bnQgOiAzNixcbiAgICAgICAgICAgICAgY29tcG9uZW50VHlwZSA6IDUxMjMsXG4gICAgICAgICAgICAgIHR5cGUgOiAnU0NBTEFSJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYnVmZmVyVmlldyA6IDMsXG4gICAgICAgICAgICAgIGJ5dGVPZmZzZXQgOiAwLFxuICAgICAgICAgICAgICBjb3VudCA6IDQ4LFxuICAgICAgICAgICAgICBjb21wb25lbnRUeXBlIDogNTEyNixcbiAgICAgICAgICAgICAgdHlwZSA6ICdWRUMyJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICBidWZmZXJWaWV3cyA6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGJ1ZmZlciA6IDAsXG4gICAgICAgICAgICAgICAgYnl0ZUxlbmd0aCA6IHBvc2l0aW9ucy5ieXRlTGVuZ3RoLFxuICAgICAgICAgICAgICAgIGJ5dGVPZmZzZXQgOiAwXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBidWZmZXIgOiAxLFxuICAgICAgICAgICAgICAgIGJ5dGVMZW5ndGggOiBub3JtYWxzLmJ5dGVMZW5ndGgsXG4gICAgICAgICAgICAgICAgYnl0ZU9mZnNldCA6IDBcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGJ1ZmZlciA6IDIsXG4gICAgICAgICAgICAgICAgYnl0ZUxlbmd0aCA6IGluZGljZXMuYnl0ZUxlbmd0aCxcbiAgICAgICAgICAgICAgICBieXRlT2Zmc2V0IDogMFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYnVmZmVyIDogMyxcbiAgICAgICAgICAgICAgICBieXRlTGVuZ3RoIDogdGV4Y29vcmQuYnl0ZUxlbmd0aCxcbiAgICAgICAgICAgICAgICBieXRlT2Zmc2V0IDogMFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgIG1lc2hlcyA6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZSA6ICdDdWJlJyxcbiAgICAgICAgICAgICAgcHJpbWl0aXZlcyA6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzIDoge1xuICAgICAgICAgICAgICAgICAgICBOT1JNQUwgOiAxLFxuICAgICAgICAgICAgICAgICAgICBQT1NJVElPTiA6IDAsXG4gICAgICAgICAgICAgICAgICAgIFRFWENPT1JEXzAgOiAzXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgaW5kaWNlcyA6IDIsXG4gICAgICAgICAgICAgICAgICBtb2RlIDogNFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgbm9kZXMgOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWUgOiBcIkN1YmVcIixcbiAgICAgICAgICAgICAgbWVzaCA6IDAsXG4gICAgICAgICAgICAgIGNoaWxkcmVuIDogWzFdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lIDogJ0N1YmUyJyxcbiAgICAgICAgICAgICAgbWVzaCA6IDAsXG4gICAgICAgICAgICAgIHRyYW5zbGF0aW9uIDogWzEsMSwxXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgYmluYXJ5QnVmZmVycyA6IFtcbiAgICAgICAgICBwb3NpdGlvbnMuYnVmZmVyLCBub3JtYWxzLmJ1ZmZlciwgaW5kaWNlcy5idWZmZXIsIHRleGNvb3JkLmJ1ZmZlclxuICAgICAgICBdXG4gICAgICB9OyovXG59XG5cbmNvbnN0IGNyZWF0ZUNvbmUgPSAocmFkaXVzID0gMiwgaGVpZ2h0ID0gMiwgbnVtQ29ybmVycyA9IDQpID0+IHtcbiAgY29uc3QgdmVydGljZXMgPSBbMCwgLWhlaWdodCAvIDIsIDBdO1xuICBjb25zdCBub3JtYWxzID0gW107XG4gIGNvbnN0IGluZGljZXMgPSBbXTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IG51bUNvcm5lcnMgKyAxOyBpKyspIHtcbiAgICBjb25zdCBhbmdsZSA9ICgyICogaSAqIE1hdGguUEkpIC8gbnVtQ29ybmVycztcbiAgICBjb25zdCB4ID0gTWF0aC5jb3MoYW5nbGUpICogcmFkaXVzO1xuICAgIGNvbnN0IHogPSBNYXRoLnNpbihhbmdsZSkgKiByYWRpdXM7XG4gICAgY29uc3QgeSA9IC1oZWlnaHQgLyAyO1xuICAgIHZlcnRpY2VzLnB1c2goeCwgLWhlaWdodCAvIDIsIHopO1xuICAgIG5vcm1hbHMucHVzaCgwLCAtMSwgMCk7XG4gIH1cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1Db3JuZXJzOyBpKyspIHtcbiAgICBpbmRpY2VzLnB1c2goMCwgaSArIDEsIGkgKyAyKTtcbiAgfVxuICAvL3ZlcnRpY2VzLnB1c2godmVydGljZXNbMV0sIC1oZWlnaHQvMiwgdmVydGljZXNbM10pXG4gIGNvbnN0IG4gPSB2ZXJ0aWNlcy5sZW5ndGggLyAzO1xuICBjb25zdCBzdHJpZGUgPSAzO1xuICBjb25zdCBzdGFydCA9IG47XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1Db3JuZXJzICsgMjsgaSsrKSB7XG4gICAgY29uc3QgYW5nbGUgPSAoMiAqIGkgKiBNYXRoLlBJKSAvIG51bUNvcm5lcnM7XG4gICAgY29uc3QgeCA9IE1hdGguY29zKGFuZ2xlKSAqIHJhZGl1cztcbiAgICBjb25zdCB6ID0gTWF0aC5zaW4oYW5nbGUpICogcmFkaXVzO1xuICAgIGNvbnN0IHkgPSAtaGVpZ2h0IC8gMjtcbiAgICBjb25zdCBhID0gW3ZlcnRpY2VzW2kgKiAzXSwgdmVydGljZXNbaSAqIDMgKyAxXSwgdmVydGljZXNbaSAqIDMgKyAyXV07XG4gICAgY29uc3QgYiA9IFt2ZXJ0aWNlc1tpICogMyArIDNdLCB2ZXJ0aWNlc1tpICogMyArIDRdLCB2ZXJ0aWNlc1tpICogMyArIDVdXTtcbiAgICBjb25zdCBjID0gWzAsIGhlaWdodCAvIDIsIDBdO1xuICAgIGluZGljZXMucHVzaChcbiAgICAgIHN0YXJ0ICsgaSAqIHN0cmlkZSArIDIsXG4gICAgICBzdGFydCArIGkgKiBzdHJpZGUgKyAxLFxuICAgICAgc3RhcnQgKyBpICogc3RyaWRlICsgM1xuICAgICk7XG4gICAgdmVydGljZXMucHVzaCguLi5jLCAuLi5hLCAuLi5iKTtcbiAgICBjb25zdCBub3JtYWwgPSBub3JtYWxpemUoY3Jvc3MoZGlmZihiLCBjKSwgZGlmZihhLCBjKSkpO1xuICAgIG5vcm1hbHMucHVzaCguLi5ub3JtYWwsIC4uLm5vcm1hbCwgLi4ubm9ybWFsKTtcbiAgfVxuXG4gIGNvbnN0IF9ub3JtYWwgPSBuZXcgRmxvYXQzMkFycmF5KG5vcm1hbHMpO1xuICBjb25zdCBfcG9zaXRpb24gPSBuZXcgRmxvYXQzMkFycmF5KHZlcnRpY2VzKTtcbiAgY29uc3QgX2luZGljZXMgPSBuZXcgVWludDE2QXJyYXkoaW5kaWNlcyk7XG4gIGNvbnN0IEFycmF5RGF0YSA9IHtcbiAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICBQT1NJVElPTjoge1xuICAgICAgICBsb2NhdGlvbjogMCxcbiAgICAgICAgY291bnQ6IHZlcnRpY2VzLmxlbmd0aCxcbiAgICAgICAgb2Zmc2V0OiAwLFxuICAgICAgICBzdHJpZGU6IDAsXG4gICAgICAgIG51bUNvbXBvbmVudHM6IDMsXG4gICAgICAgIHR5cGU6IDUxMjYsXG4gICAgICAgIGRhdGE6IF9wb3NpdGlvbixcbiAgICAgICAgYnl0ZUxlbmd0aDogX3Bvc2l0aW9uLmJ5dGVMZW5ndGgsXG4gICAgICB9LFxuICAgICAgTk9STUFMOiB7XG4gICAgICAgIGxvY2F0aW9uOiAxLFxuICAgICAgICBjb3VudDogbm9ybWFscy5sZW5ndGgsXG4gICAgICAgIG51bUNvbXBvbmVudHM6IDMsXG4gICAgICAgIG9mZnNldDogMCxcbiAgICAgICAgc3RyaWRlOiAwLFxuICAgICAgICB0eXBlOiA1MTI2LFxuICAgICAgICBkYXRhOiBfbm9ybWFsLFxuICAgICAgICBieXRlTGVuZ3RoOiBfbm9ybWFsLmJ5dGVMZW5ndGgsXG4gICAgICB9LFxuICAgIH0sXG4gICAgY29tcG9uZW50VHlwZTogNTEyMyxcbiAgICBpbmRpY2VzOiBfaW5kaWNlcyxcbiAgICBudW1FbGVtZW50czogaW5kaWNlcy5sZW5ndGgsXG4gICAgbW9kZTogNCxcbiAgfTtcbiAgcmV0dXJuIEFycmF5RGF0YTtcbn07XG5cbmNvbnN0IGNyZWF0ZUNpcmNsZSA9IChyYWRpdXMsIG51bUNvcm5lcnMpID0+IHtcbiAgY29uc3QgdmVydGljZXMgPSBbMCwgMCwgMF07XG4gIGNvbnN0IG5vcm1hbHMgPSBbXTtcbiAgY29uc3QgaW5kaWNlcyA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtQ29ybmVycyArIDE7IGkrKykge1xuICAgIGNvbnN0IGFuZ2xlID0gKDIgKiBpICogTWF0aC5QSSkgLyBudW1Db3JuZXJzO1xuICAgIGNvbnN0IHggPSBNYXRoLmNvcyhhbmdsZSkgKiByYWRpdXM7XG4gICAgY29uc3QgeiA9IE1hdGguc2luKGFuZ2xlKSAqIHJhZGl1cztcbiAgIFxuICAgIHZlcnRpY2VzLnB1c2goeCwgMCwgeik7XG4gICAgbm9ybWFscy5wdXNoKDAsIDEsIDApO1xuICB9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtQ29ybmVyczsgaSsrKSB7XG4gICAgaW5kaWNlcy5wdXNoKDAsIGkgKyAxLCBpICsgMik7XG4gIH1cblxuICBjb25zdCBfbm9ybWFsID0gbmV3IEZsb2F0MzJBcnJheShub3JtYWxzKTtcbiAgY29uc3QgX3Bvc2l0aW9uID0gbmV3IEZsb2F0MzJBcnJheSh2ZXJ0aWNlcyk7XG4gIGNvbnN0IF9pbmRpY2VzID0gbmV3IFVpbnQxNkFycmF5KGluZGljZXMpO1xuXG4gIGNvbnN0IEFycmF5RGF0YSA9IHtcbiAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICBQT1NJVElPTjoge1xuICAgICAgICBsb2NhdGlvbjogMCxcbiAgICAgICAgY291bnQ6IHZlcnRpY2VzLmxlbmd0aCxcbiAgICAgICAgb2Zmc2V0OiAwLFxuICAgICAgICBzdHJpZGU6IDAsXG4gICAgICAgIG51bUNvbXBvbmVudHM6IDMsXG4gICAgICAgIHR5cGU6IDUxMjYsXG4gICAgICAgIGRhdGE6IF9wb3NpdGlvbixcbiAgICAgICAgYnl0ZUxlbmd0aDogX3Bvc2l0aW9uLmJ5dGVMZW5ndGgsXG4gICAgICB9LFxuICAgICAgTk9STUFMOiB7XG4gICAgICAgIGxvY2F0aW9uOiAxLFxuICAgICAgICBjb3VudDogbm9ybWFscy5sZW5ndGgsXG4gICAgICAgIG51bUNvbXBvbmVudHM6IDMsXG4gICAgICAgIG9mZnNldDogMCxcbiAgICAgICAgc3RyaWRlOiAwLFxuICAgICAgICB0eXBlOiA1MTI2LFxuICAgICAgICBkYXRhOiBfbm9ybWFsLFxuICAgICAgICBieXRlTGVuZ3RoOiBfbm9ybWFsLmJ5dGVMZW5ndGgsXG4gICAgICB9LFxuICAgIH0sXG4gICAgY29tcG9uZW50VHlwZTogNTEyMyxcbiAgICBpbmRpY2VzOiBfaW5kaWNlcyxcbiAgICBudW1FbGVtZW50czogaW5kaWNlcy5sZW5ndGgsXG4gICAgbW9kZTogNCxcbiAgfTtcbiAgcmV0dXJuIEFycmF5RGF0YTtcbn07XG5cbmV4cG9ydCB7IGNyZWF0ZUJveCwgY3JlYXRlQ29uZSwgY3JlYXRlQ2lyY2xlfTtcbiIsImZ1bmN0aW9uIGdldEdMVHlwZUZvclR5cGVkQXJyYXkoZ2wsIHR5cGVkQXJyYXkpIHtcbiAgaWYgKHR5cGVkQXJyYXkgaW5zdGFuY2VvZiBJbnQ4QXJyYXkpIHtcbiAgICByZXR1cm4gZ2wuQllURTtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gIGlmICh0eXBlZEFycmF5IGluc3RhbmNlb2YgVWludDhBcnJheSkge1xuICAgIHJldHVybiBnbC5VTlNJR05FRF9CWVRFO1xuICB9IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgaWYgKHR5cGVkQXJyYXkgaW5zdGFuY2VvZiBVaW50OENsYW1wZWRBcnJheSkge1xuICAgIHJldHVybiBnbC5VTlNJR05FRF9CWVRFO1xuICB9IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgaWYgKHR5cGVkQXJyYXkgaW5zdGFuY2VvZiBJbnQxNkFycmF5KSB7XG4gICAgcmV0dXJuIGdsLlNIT1JUO1xuICB9IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgaWYgKHR5cGVkQXJyYXkgaW5zdGFuY2VvZiBVaW50MTZBcnJheSkge1xuICAgIHJldHVybiBnbC5VTlNJR05FRF9TSE9SVDtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gIGlmICh0eXBlZEFycmF5IGluc3RhbmNlb2YgSW50MzJBcnJheSkge1xuICAgIHJldHVybiBnbC5JTlQ7XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICBpZiAodHlwZWRBcnJheSBpbnN0YW5jZW9mIFVpbnQzMkFycmF5KSB7XG4gICAgcmV0dXJuIGdsLlVOU0lHTkVEX0lOVDtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gIGlmICh0eXBlZEFycmF5IGluc3RhbmNlb2YgRmxvYXQzMkFycmF5KSB7XG4gICAgcmV0dXJuIGdsLkZMT0FUO1xuICB9IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgcmV0dXJuIGZhbHNlO1xufVxuZnVuY3Rpb24gZXhwYW5kZWRUeXBlZEFycmF5KGFycmF5KSB7XG4gIGxldCBjdXJzb3IgPSAwO1xuICBhcnJheS5wdXNoID0gZnVuY3Rpb24gKCkge1xuICAgIGZvciAobGV0IGlpID0gMDsgaWkgPCBhcmd1bWVudHMubGVuZ3RoOyArK2lpKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IGFyZ3VtZW50c1tpaV07XG5cbiAgICAgIGlmIChcbiAgICAgICAgdmFsdWUgaW5zdGFuY2VvZiBBcnJheSB8fFxuICAgICAgICAodmFsdWUuYnVmZmVyICYmIHZhbHVlLmJ1ZmZlciBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKVxuICAgICAgKSB7XG4gICAgICAgIGZvciAobGV0IGpqID0gMDsgamogPCB2YWx1ZS5sZW5ndGg7ICsramopIHtcbiAgICAgICAgICBhcnJheVtjdXJzb3IrK10gPSB2YWx1ZVtqal07XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFycmF5W2N1cnNvcisrXSA9IHZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gYXJyYXk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVVuaWZvcm1TZXR0ZXJzKGdsLCBwcm9ncmFtKSB7XG4gIGNvbnN0IGNyZWF0ZVRleHR1cmVTZXR0ZXIgPSAocHJvZ3JhbSwgdW5pZm9ybUluZm8pID0+IHtcbiAgICBjb25zdCBsb2NhdGlvbiA9IGdsLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCB1bmlmb3JtSW5mby5uYW1lKTtcblxuICAgIHJldHVybiAodGV4QmxvY2tOdW0pID0+IHtcbiAgICAgIGdsLnVuaWZvcm0xaShsb2NhdGlvbiwgdGV4QmxvY2tOdW0pO1xuICAgIH07XG4gIH07XG4gIGZ1bmN0aW9uIGNyZWF0ZVVuaWZvcm1TZXR0ZXIocHJvZ3JhbSwgdW5pZm9ybUluZm8pIHtcbiAgICBjb25zdCBsb2NhdGlvbiA9IGdsLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCB1bmlmb3JtSW5mby5uYW1lKTtcblxuICAgIGNvbnN0IHR5cGUgPSB1bmlmb3JtSW5mby50eXBlO1xuXG4gICAgY29uc3QgaXNBcnJheSA9XG4gICAgICB1bmlmb3JtSW5mby5zaXplID4gMSAmJiB1bmlmb3JtSW5mby5uYW1lLnN1YnN0cigtMykgPT09IFwiWzBdXCI7XG5cbiAgICBpZiAodHlwZSA9PT0gZ2wuRkxPQVQgJiYgaXNBcnJheSkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIGdsLnVuaWZvcm0xZnYobG9jYXRpb24sIHYpO1xuICAgICAgfTtcbiAgICB9XG4gICAgaWYgKHR5cGUgPT09IGdsLkZMT0FUKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgZ2wudW5pZm9ybTFmKGxvY2F0aW9uLCB2KTtcbiAgICAgIH07XG4gICAgfVxuICAgIGlmICh0eXBlID09PSBnbC5GTE9BVF9WRUMyKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgZ2wudW5pZm9ybTJmdihsb2NhdGlvbiwgdik7XG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAodHlwZSA9PT0gZ2wuRkxPQVRfVkVDMykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIGdsLnVuaWZvcm0zZnYobG9jYXRpb24sIHYpO1xuICAgICAgfTtcbiAgICB9XG4gICAgaWYgKHR5cGUgPT09IGdsLkZMT0FUX1ZFQzQpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgICAgICBnbC51bmlmb3JtNGZ2KGxvY2F0aW9uLCB2KTtcbiAgICAgIH07XG4gICAgfVxuICAgIGlmICh0eXBlID09PSBnbC5JTlQgJiYgaXNBcnJheSkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIGdsLnVuaWZvcm0xaXYobG9jYXRpb24sIHYpO1xuICAgICAgfTtcbiAgICB9XG4gICAgaWYgKHR5cGUgPT09IGdsLklOVCkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIGdsLnVuaWZvcm0xaShsb2NhdGlvbiwgdik7XG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAodHlwZSA9PT0gZ2wuSU5UX1ZFQzIpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgICAgICBnbC51bmlmb3JtMml2KGxvY2F0aW9uLCB2KTtcbiAgICAgIH07XG4gICAgfVxuICAgIGlmICh0eXBlID09PSBnbC5JTlRfVkVDMykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIGdsLnVuaWZvcm0zaXYobG9jYXRpb24sIHYpO1xuICAgICAgfTtcbiAgICB9XG4gICAgaWYgKHR5cGUgPT09IGdsLklOVF9WRUM0KSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgZ2wudW5pZm9ybTRpdihsb2NhdGlvbiwgdik7XG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAodHlwZSA9PT0gZ2wuQk9PTCkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIGdsLnVuaWZvcm0xaXYobG9jYXRpb24sIHYpO1xuICAgICAgfTtcbiAgICB9XG4gICAgaWYgKHR5cGUgPT09IGdsLkJPT0xfVkVDMikge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIGdsLnVuaWZvcm0yaXYobG9jYXRpb24sIHYpO1xuICAgICAgfTtcbiAgICB9XG4gICAgaWYgKHR5cGUgPT09IGdsLkJPT0xfVkVDMykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIGdsLnVuaWZvcm0zaXYobG9jYXRpb24sIHYpO1xuICAgICAgfTtcbiAgICB9XG4gICAgaWYgKHR5cGUgPT09IGdsLkJPT0xfVkVDNCkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIGdsLnVuaWZvcm00aXYobG9jYXRpb24sIHYpO1xuICAgICAgfTtcbiAgICB9XG4gICAgaWYgKHR5cGUgPT09IGdsLkZMT0FUX01BVDIpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgICAgICBnbC51bmlmb3JtTWF0cml4MmZ2KGxvY2F0aW9uLCBmYWxzZSwgdik7XG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAodHlwZSA9PT0gZ2wuRkxPQVRfTUFUMykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIGdsLnVuaWZvcm1NYXRyaXgzZnYobG9jYXRpb24sIGZhbHNlLCB2KTtcbiAgICAgIH07XG4gICAgfVxuICAgIGlmICh0eXBlID09PSBnbC5GTE9BVF9NQVQ0KSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgZ2wudW5pZm9ybU1hdHJpeDRmdihsb2NhdGlvbiwgZmFsc2UsIHYpO1xuICAgICAgfTtcbiAgICB9XG4gIH1cbiAgY29uc3QgdW5pZm9ybVNldHRlcnMgPSB7fTtcbiAgY29uc3QgdGV4dHVyZVNldHRlcnMgPSB7fTtcbiAgY29uc3QgbnVtVW5pZm9ybXMgPSBnbC5nZXRQcm9ncmFtUGFyYW1ldGVyKHByb2dyYW0sIGdsLkFDVElWRV9VTklGT1JNUyk7XG5cbiAgZm9yIChsZXQgaWkgPSAwOyBpaSA8IG51bVVuaWZvcm1zOyArK2lpKSB7XG4gICAgY29uc3QgdW5pZm9ybUluZm8gPSBnbC5nZXRBY3RpdmVVbmlmb3JtKHByb2dyYW0sIGlpKTtcbiAgICBpZiAoIXVuaWZvcm1JbmZvKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgbGV0IG5hbWUgPSB1bmlmb3JtSW5mby5uYW1lO1xuICAgIGlmICh1bmlmb3JtSW5mby50eXBlID09PSBnbC5TQU1QTEVSXzJEKSB7XG4gICAgICB0ZXh0dXJlU2V0dGVyc1tuYW1lXSA9IGNyZWF0ZVRleHR1cmVTZXR0ZXIocHJvZ3JhbSwgdW5pZm9ybUluZm8pO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKG5hbWUuc3Vic3RyKC0zKSA9PT0gXCJbMF1cIikge1xuICAgICAgbmFtZSA9IG5hbWUuc3Vic3RyKDAsIG5hbWUubGVuZ3RoIC0gMyk7XG4gICAgfVxuICAgIGlmICh1bmlmb3JtSW5mby5zaXplID4gMSkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB1bmlmb3JtSW5mby5zaXplOyBpKyspIHtcbiAgICAgICAgY29uc3Qgb2JqID0ge1xuICAgICAgICAgIHNpemU6IHVuaWZvcm1JbmZvLnNpemUsXG4gICAgICAgICAgdHlwZTogdW5pZm9ybUluZm8udHlwZSxcbiAgICAgICAgICBuYW1lOiBuYW1lICsgYFske2l9XWAsXG4gICAgICAgIH07XG4gICAgICAgIHVuaWZvcm1TZXR0ZXJzW25hbWUgKyBgWyR7aX1dYF0gPSBjcmVhdGVVbmlmb3JtU2V0dGVyKHByb2dyYW0sIG9iaik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHNldHRlciA9IGNyZWF0ZVVuaWZvcm1TZXR0ZXIocHJvZ3JhbSwgdW5pZm9ybUluZm8pO1xuICAgICAgdW5pZm9ybVNldHRlcnNbbmFtZV0gPSBzZXR0ZXI7XG4gICAgfVxuICB9XG4gIHJldHVybiB7IHVuaWZvcm1TZXR0ZXJzLCB0ZXh0dXJlU2V0dGVycyB9O1xufVxuXG5jbGFzcyBQcm9ncmFtSW5mbyB7XG4gIGNvbnN0cnVjdG9yKHZzLCBmcykge1xuICAgIHRoaXMudnMgPSB2cztcbiAgICB0aGlzLmZzID0gZnM7XG4gICAgdGhpcy5WQU8gPSBudWxsO1xuICAgIHRoaXMudW5pZm9ybVNldHRlcnMgPSBudWxsO1xuICAgIHRoaXMudmVydGV4U2hhZGVyID0gbnVsbDtcbiAgICB0aGlzLmZyYWdtZW50U2hhZGVyID0gbnVsbDtcbiAgICB0aGlzLnByb2dyYW0gPSBudWxsO1xuICAgIHRoaXMuZ2wgPSBudWxsO1xuICB9XG4gIHNldENvbnRleHQoZ2xDb250ZXh0V3JhcHBlcikge1xuICAgIHRoaXMuY29udGV4dCA9IGdsQ29udGV4dFdyYXBwZXI7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgY3JlYXRlVW5pZm9ybVNldHRlcnMoKSB7XG4gICAgY29uc3QgeyBnbCB9ID0gdGhpcy5jb250ZXh0O1xuICAgIGNvbnN0IHsgdW5pZm9ybVNldHRlcnMsIHRleHR1cmVTZXR0ZXJzIH0gPSBjcmVhdGVVbmlmb3JtU2V0dGVycyhcbiAgICAgIGdsLFxuICAgICAgdGhpcy5wcm9ncmFtXG4gICAgKTtcbiAgICB0aGlzLnRleHR1cmVTZXR0ZXJzID0gdGV4dHVyZVNldHRlcnM7XG4gICAgdGhpcy51bmlmb3JtU2V0dGVycyA9IHVuaWZvcm1TZXR0ZXJzO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIGNvbXBpbGVTaGFkZXJzKCkge1xuICAgIGNvbnN0IHsgZ2wgfSA9IHRoaXMuY29udGV4dDtcbiAgICB0aGlzLnZlcnRleFNoYWRlciA9IGdsLmNyZWF0ZVNoYWRlcihnbC5WRVJURVhfU0hBREVSKTtcbiAgICBnbC5zaGFkZXJTb3VyY2UodGhpcy52ZXJ0ZXhTaGFkZXIsIHRoaXMudnMpO1xuICAgIGdsLmNvbXBpbGVTaGFkZXIodGhpcy52ZXJ0ZXhTaGFkZXIpO1xuICAgIGlmICghZ2wuZ2V0U2hhZGVyUGFyYW1ldGVyKHRoaXMudmVydGV4U2hhZGVyLCBnbC5DT01QSUxFX1NUQVRVUykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihnbC5nZXRTaGFkZXJJbmZvTG9nKHRoaXMudmVydGV4U2hhZGVyKSk7XG4gICAgfVxuXG4gICAgdGhpcy5mcmFnbWVudFNoYWRlciA9IGdsLmNyZWF0ZVNoYWRlcihnbC5GUkFHTUVOVF9TSEFERVIpO1xuICAgIGdsLnNoYWRlclNvdXJjZSh0aGlzLmZyYWdtZW50U2hhZGVyLCB0aGlzLmZzKTtcbiAgICBnbC5jb21waWxlU2hhZGVyKHRoaXMuZnJhZ21lbnRTaGFkZXIpO1xuICAgIGlmICghZ2wuZ2V0U2hhZGVyUGFyYW1ldGVyKHRoaXMuZnJhZ21lbnRTaGFkZXIsIGdsLkNPTVBJTEVfU1RBVFVTKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGdsLmdldFNoYWRlckluZm9Mb2codGhpcy5mcmFnbWVudFNoYWRlcikpO1xuICAgIH1cblxuICAgIHRoaXMucHJvZ3JhbSA9IGdsLmNyZWF0ZVByb2dyYW0oKTtcbiAgICBnbC5hdHRhY2hTaGFkZXIodGhpcy5wcm9ncmFtLCB0aGlzLnZlcnRleFNoYWRlcik7XG4gICAgZ2wuYXR0YWNoU2hhZGVyKHRoaXMucHJvZ3JhbSwgdGhpcy5mcmFnbWVudFNoYWRlcik7XG4gICAgZ2wubGlua1Byb2dyYW0odGhpcy5wcm9ncmFtKTtcbiAgICBpZiAoIWdsLmdldFByb2dyYW1QYXJhbWV0ZXIodGhpcy5wcm9ncmFtLCBnbC5MSU5LX1NUQVRVUykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihnbC5nZXRQcm9ncmFtSW5mb0xvZyh0aGlzLnByb2dyYW0pKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgc2V0VW5pZm9ybXModW5pZm9ybXMpIHtcbiAgICB0aGlzLmNvbnRleHQudXNlUHJvZ3JhbUluZm8odGhpcyk7XG4gICAgT2JqZWN0LmtleXModW5pZm9ybXMpLmZvckVhY2goKG5hbWUpID0+IHtcbiAgICAgIGNvbnN0IHNldHRlciA9IHRoaXMudW5pZm9ybVNldHRlcnNbbmFtZV07XG4gICAgICBpZiAoc2V0dGVyKSBzZXR0ZXIodW5pZm9ybXNbbmFtZV0pO1xuICAgIH0pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIHNldFRleHR1cmVVbmlmb3JtVW5pdChuYW1lLCB1bml0KSB7XG4gICAgdGhpcy5jb250ZXh0LnVzZVByb2dyYW1JbmZvKHRoaXMpO1xuICAgIGNvbnN0IHNldHRlciA9IHRoaXMudGV4dHVyZVNldHRlcnNbbmFtZV07XG4gICAgaWYgKHNldHRlcikgc2V0dGVyKHVuaXQpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG5cbmV4cG9ydCB7IGV4cGFuZGVkVHlwZWRBcnJheSwgUHJvZ3JhbUluZm8sIGdldEdMVHlwZUZvclR5cGVkQXJyYXkgfTtcbiIsImltcG9ydCBnbHNsIGZyb20gXCIuL2dsc2xcIjtcbmltcG9ydCB7IFByb2dyYW1JbmZvIH0gZnJvbSBcIi4uLy4uL3Byb2dyYW1JbmZvXCI7XG5jb25zdCB2ZXJ0ID0gZ2xzbGAjdmVyc2lvbiAzMDAgZXNcblxucHJlY2lzaW9uIGhpZ2hwIGZsb2F0O1xuXG51bmlmb3JtIG1hdDQgd29ybGRWaWV3UHJvamVjdGlvbjtcblxuXG5sYXlvdXQobG9jYXRpb24gPSAwKSBpbiB2ZWM0IGFfcG9zaXRpb247XG52b2lkIG1haW4oKSB7XG4gIGdsX1Bvc2l0aW9uID0gd29ybGRWaWV3UHJvamVjdGlvbiAqIGFfcG9zaXRpb247XG4gIGdsX1BvaW50U2l6ZSA9IDEwLjA7XG59YDtcbmNvbnN0IGZyYWcgPSBnbHNsYCN2ZXJzaW9uIDMwMCBlc1xucHJlY2lzaW9uIGhpZ2hwIGZsb2F0O1xuIFxuXG5cbnVuaWZvcm0gdmVjNCB1X2NvbG9yO1xub3V0IHZlYzQgb3V0Q29sb3I7XG52b2lkIG1haW4oKSB7XG4gIFxuICBcbiAgb3V0Q29sb3IgPSB1X2NvbG9yO1xuIFxuICBcbiAgXG59XG5gO1xuZXhwb3J0IGRlZmF1bHQgbmV3IFByb2dyYW1JbmZvKHZlcnQsIGZyYWcpO1xuIiwiXG5pbXBvcnQgZ2xzbCBmcm9tIFwiLi9nbHNsXCJcbmltcG9ydCB7IFByb2dyYW1JbmZvIH0gZnJvbSBcIi4uLy4uL3Byb2dyYW1JbmZvXCJcbmNvbnN0IHZlcnQgPSBnbHNsYCN2ZXJzaW9uIDMwMCBlc1xuIFxubGF5b3V0KGxvY2F0aW9uID0gMCkgaW4gdmVjNCBhX3Bvc2l0aW9uO1xubGF5b3V0KGxvY2F0aW9uID0gMSkgaW4gdmVjMyBhX25vcm1hbDtcblxubGF5b3V0KGxvY2F0aW9uID0gNCkgaW4gdmVjMiBhX3RleGNvb3JkO1xubGF5b3V0KGxvY2F0aW9uID0gNSkgaW4gbWF0NCBpX21hdHJpeDtcblxudW5pZm9ybSBtYXQ0IHdvcmxkTWF0cml4O1xudW5pZm9ybSBtYXQ0IHdvcmxkVmlld1Byb2plY3Rpb247XG51bmlmb3JtIHZlYzMgdV9saWdodFdvcmxkUG9zaXRpb247XG51bmlmb3JtIHZlYzMgdV92aWV3V29ybGRQb3NpdGlvbjtcblxub3V0IHZlYzMgdl9ub3JtYWw7XG5vdXQgdmVjMiB2X3RleGNvb3JkO1xub3V0IHZlYzMgdl9zdXJmYWNlVG9MaWdodDtcbm91dCB2ZWMzIHZfc3VyZmFjZVRvVmlldztcblxudm9pZCBtYWluKCkge1xuXG4gICAgdmVjMyBzdXJmYWNlV29ybGRQb3NpdGlvbiA9ICh3b3JsZE1hdHJpeCAqIGFfcG9zaXRpb24pLnh5ejtcbiAgICB2X3N1cmZhY2VUb0xpZ2h0ID0gdV9saWdodFdvcmxkUG9zaXRpb24gLSBzdXJmYWNlV29ybGRQb3NpdGlvbjtcblxuICAgIHZlYzQgcG9zID0gICB3b3JsZFZpZXdQcm9qZWN0aW9uICogYV9wb3NpdGlvbiAgO1xuICAgIGdsX1Bvc2l0aW9uID0gcG9zO1xuXG4gICAgdl90ZXhjb29yZCA9IGFfdGV4Y29vcmQ7XG4gICAgdl9ub3JtYWwgPSBtYXQzKCAgIHdvcmxkTWF0cml4ICkgKiBhX25vcm1hbDtcbiAgICB2X3N1cmZhY2VUb1ZpZXcgPSB1X3ZpZXdXb3JsZFBvc2l0aW9uIC0gc3VyZmFjZVdvcmxkUG9zaXRpb247XG4gICAgICBcbn1gXG5jb25zdCBmcmFnID0gZ2xzbGAjdmVyc2lvbiAzMDAgZXNcbnByZWNpc2lvbiBoaWdocCBmbG9hdDtcbiBcblxuaW4gdmVjMiB2X3RleGNvb3JkO1xuXG5pbiB2ZWMzIHZfbm9ybWFsO1xuaW4gdmVjMyB2X3N1cmZhY2VUb1ZpZXc7XG5pbiB2ZWMzIHZfc3VyZmFjZVRvTGlnaHQ7XG5cblxuLy91bmlmb3JtIHNhbXBsZXIyRCB1X3RleHR1cmUxO1xudW5pZm9ybSBmbG9hdCB1X3NoaW5pbmVzcztcbnVuaWZvcm0gdmVjNCB1X2NvbG9yO1xudW5pZm9ybSB2ZWM0IHVfYW1iaWVudExpZ2h0O1xub3V0IHZlYzQgb3V0Q29sb3I7XG5cblxudm9pZCBtYWluKCkge1xuICBcbiAgdmVjMyBzdXJmYWNlVG9MaWdodERpcmVjdGlvbiA9IG5vcm1hbGl6ZSh2X3N1cmZhY2VUb0xpZ2h0KTtcbiAgdmVjMyBzdXJmYWNlVG9WaWV3RGlyZWN0aW9uID0gbm9ybWFsaXplKHZfc3VyZmFjZVRvVmlldyk7XG4gIHZlYzMgaGFsZlZlY3RvciA9IG5vcm1hbGl6ZShzdXJmYWNlVG9MaWdodERpcmVjdGlvbiArIHN1cmZhY2VUb1ZpZXdEaXJlY3Rpb24pO1xuXG4gIHZlYzMgbm9ybWFsID0gbm9ybWFsaXplKHZfbm9ybWFsKTtcbiAgZmxvYXQgbGlnaHQgPSBkb3Qodl9ub3JtYWwsIHN1cmZhY2VUb0xpZ2h0RGlyZWN0aW9uKTtcbiAgZmxvYXQgc3BlY3VsYXIgPSAwLjA7XG4gIGlmIChsaWdodCA+IDAuMCkge1xuICAgIHNwZWN1bGFyID0gcG93KGRvdChub3JtYWwsIGhhbGZWZWN0b3IpLCB1X3NoaW5pbmVzcyk7XG4gIH1cblxuICBvdXRDb2xvciA9ICB1X2NvbG9yO1xuICBvdXRDb2xvci5yZ2IgKj0gbGlnaHQ7XG4gIG91dENvbG9yLnJnYiArPSB1X2FtYmllbnRMaWdodC5yZ2IgKjAuMztcbiAgXG59XG5gXG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBQcm9ncmFtSW5mbyh2ZXJ0LCBmcmFnKSIsImNvbnN0IGdsc2wgPSB4ID0+IHhcbmV4cG9ydCBkZWZhdWx0IGdsc2wiLCJpbXBvcnQgZGVmYXVsdFByb2dyYW0gZnJvbSBcIi4vRGVmYXVsdFwiO1xuaW1wb3J0IGxpZ2h0aW5nUHJvZ3JhbSBmcm9tIFwiLi9MaWdodGluZ1wiO1xuXG5leHBvcnQge2RlZmF1bHRQcm9ncmFtLCBsaWdodGluZ1Byb2dyYW19IiwiY29uc3Qgc2V0Q2FudmFzU2l6ZSA9IChjdHgsIHdpZHRoLCBoZWlnaHQpID0+IHtcbiAgY3R4LmNhbnZhcy53aWR0aCA9IHdpZHRoO1xuICBjdHguY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbn07XG5cbmNvbnN0IG1ha2VUZXh0dXJlID0gKGdsLCBjdHgpID0+IHtcbiAgY29uc3QgdGV4ID0gZ2wuY3JlYXRlVGV4dHVyZSgpO1xuICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCB0ZXgpO1xuXG4gIGdsLnRleEltYWdlMkQoXG4gICAgZ2wuVEVYVFVSRV8yRCxcbiAgICAwLFxuICAgIGdsLlJHQkEsXG4gICAgZ2wuUkdCQSxcbiAgICBnbC5VTlNJR05FRF9CWVRFLFxuICAgIGN0eC5jYW52YXNcbiAgKTtcbiAgcmV0dXJuIHRleDtcbn07XG5jb25zdCBtYWtlU3RyaXBlVGV4dHVyZSA9IChnbCwgb3B0aW9ucykgPT4ge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgdmFyIHdpZHRoID0gb3B0aW9ucy53aWR0aCB8fCA0O1xuICB2YXIgaGVpZ2h0ID0gb3B0aW9ucy5oZWlnaHQgfHwgNDtcbiAgdmFyIGNvbG9yMSA9IG9wdGlvbnMuY29sb3IxIHx8IFwicmdiYSgxLDAsMCwwLjEpXCI7XG4gIHZhciBjb2xvcjIgPSBvcHRpb25zLmNvbG9yMiB8fCBcInJnYmEoMSwxLDEsMC41KVwiO1xuICBjb25zdCBjdHggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpLmdldENvbnRleHQoXCIyZFwiKTtcbiAgc2V0Q2FudmFzU2l6ZShjdHgsIHdpZHRoLCBoZWlnaHQpO1xuXG4gIGN0eC5maWxsU3R5bGUgPSBjb2xvcjE7XG4gIGN0eC5maWxsUmVjdCgwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcbiAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yMjtcbiAgY3R4LmZpbGxSZWN0KDAsIDAsIHdpZHRoLCBoZWlnaHQgLyAyKTtcblxuICByZXR1cm4gbWFrZVRleHR1cmUoZ2wsIGN0eCk7XG59O1xuY29uc3QgbWFrZVN0cmlwZUltZyA9IChvcHRpb25zKSA9PiB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICB2YXIgd2lkdGggPSBvcHRpb25zLndpZHRoIHx8IDQ7XG4gIHZhciBoZWlnaHQgPSBvcHRpb25zLmhlaWdodCB8fCA0O1xuICB2YXIgY29sb3IxID0gb3B0aW9ucy5jb2xvcjEgfHwgXCJyZ2JhKDEsMCwwLDAuNSlcIjtcbiAgdmFyIGNvbG9yMiA9IG9wdGlvbnMuY29sb3IyIHx8IFwicmdiYSgwLDAsMSwxKVwiO1xuICBjb25zdCBjdHggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpLmdldENvbnRleHQoXCIyZFwiKTtcbiAgc2V0Q2FudmFzU2l6ZShjdHgsIHdpZHRoLCBoZWlnaHQpO1xuXG4gIGN0eC5maWxsU3R5bGUgPSBjb2xvcjE7XG4gIGN0eC5maWxsUmVjdCgwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcbiAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yMjtcbiAgY3R4LmZpbGxSZWN0KDAsIDAsIHdpZHRoLCBoZWlnaHQgLyAyKTtcblxuICByZXR1cm4gY3R4LmNhbnZhcztcbn07XG5jb25zdCBtYWtlSW1nRnJvbVN2Z1htbCA9ICh4bWwsIG9wdGlvbnMgPSB7fSkgPT4ge1xuICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICB2YXIgc3ZnNjQgPSBidG9hKHhtbCk7XG4gIHZhciBiNjRTdGFydCA9IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxcIjtcbiAgdmFyIGltYWdlNjQgPSBiNjRTdGFydCArIHN2ZzY0O1xuICBpbWcuc3JjID0gaW1hZ2U2NDtcblxuICBjb25zdCB3aWR0aCA9IG9wdGlvbnMud2lkdGggfHwgMTAwO1xuICBjb25zdCBoZWlnaHQgPSBvcHRpb25zLmhlaWdodCB8fCAxMDA7XG4gIGNvbnN0IHggPSBvcHRpb25zLnggfHwgMTtcbiAgY29uc3QgeSA9IG9wdGlvbnMueSB8fCA1MDtcblxuICBjb25zdCBjdHggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpLmdldENvbnRleHQoXCIyZFwiKTtcbiAgc2V0Q2FudmFzU2l6ZShjdHgsIHdpZHRoLCBoZWlnaHQpO1xuXG4gIGN0eC5kcmF3SW1hZ2UoaW1nLCB4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcbiAgY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgwLDAsMCwxKVwiO1xuICBjdHguZmlsbFJlY3QoMCwgMCwgd2lkdGgsIGhlaWdodCk7XG4gIHJldHVybiBjdHguaW1nO1xufTtcbmNvbnN0IHNldFRleHR1cmVVbml0cyA9IChnbCwgdGV4dHVyZSwgdW5pdE51bSkgPT4ge1xuICBnbC5hY3RpdmVUZXh0dXJlKGdsLlRFWFRVUkUwICsgdW5pdE51bSk7XG4gIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIHRleHR1cmUpO1xufTtcblxuY2xhc3MgVGV4dHVyZSB7XG4gIHN0YXRpYyBtYWtlSW1nRnJvbVN2Z1htbCA9IG1ha2VJbWdGcm9tU3ZnWG1sO1xuICBjb25zdHJ1Y3RvcihnbCkge1xuICAgIHRoaXMudGV4dHVyZSA9IGdsLmNyZWF0ZVRleHR1cmUoKTtcbiAgICB0aGlzLmZyb21JbWFnZSA9IChpbWFnZSkgPT4ge1xuICAgICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgdGhpcy50ZXh0dXJlKTtcbiAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9XUkFQX1MsIGdsLkNMQU1QX1RPX0VER0UpO1xuICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX1dSQVBfVCwgZ2wuQ0xBTVBfVE9fRURHRSk7XG4gICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfTUlOX0ZJTFRFUiwgZ2wuTkVBUkVTVCk7XG4gICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfTUFHX0ZJTFRFUiwgZ2wuTkVBUkVTVCk7XG4gICAgICBnbC50ZXhJbWFnZTJEKFxuICAgICAgICBnbC5URVhUVVJFXzJELFxuICAgICAgICAwLFxuICAgICAgICBnbC5SR0JBLFxuICAgICAgICBnbC5SR0JBLFxuICAgICAgICBnbC5VTlNJR05FRF9CWVRFLFxuICAgICAgICBpbWFnZVxuICAgICAgKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgdGhpcy5nZXRUZXh0dXJlID0gKCkgPT4gdGhpcy50ZXh0dXJlO1xuICB9XG59XG5leHBvcnQgeyBtYWtlSW1nRnJvbVN2Z1htbCwgbWFrZVN0cmlwZUltZywgVGV4dHVyZSwgc2V0VGV4dHVyZVVuaXRzIH07XG4iLCJjb25zdCBBQUJCID0gcmVxdWlyZSgnLi9zcmMvYWFiYicpXG5jb25zdCBtMyA9IHJlcXVpcmUoJy4vc3JjL20zJylcbmNvbnN0IG00ID0gcmVxdWlyZSgnLi9zcmMvbTQnKVxuY29uc3Qge05vZGUgLCBUUlN9PSByZXF1aXJlKCcuL3NyYy9ub2RlJylcbmNvbnN0IHZlY3RvciA9IHJlcXVpcmUoJy4vc3JjL3ZlY3RvcicpXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIEFBQkIsIG0zLCBtNCwgTm9kZSwgVFJTLCB2ZWN0b3Jcbn0iLCJjbGFzcyBBQUJCe1xuICAgIGNvbnN0cnVjdG9yKG1pbiwgbWF4KXtcbiAgICAgICAgdGhpcy5taW4gPSBtaW5cbiAgICAgICAgdGhpcy5tYXggPSBtYXhcbiAgICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IEFBQkIiLCJjb25zdCBtMyA9IHtcbiAgICBtdWx0aXBseSA6IGZ1bmN0aW9uKGIsIGEpIHtcbiAgICAgICAgdmFyIGEwMCA9IGFbMCAqIDMgKyAwXTtcbiAgICAgICAgdmFyIGEwMSA9IGFbMCAqIDMgKyAxXTtcbiAgICAgICAgdmFyIGEwMiA9IGFbMCAqIDMgKyAyXTtcbiAgICAgICAgdmFyIGExMCA9IGFbMSAqIDMgKyAwXTtcbiAgICAgICAgdmFyIGExMSA9IGFbMSAqIDMgKyAxXTtcbiAgICAgICAgdmFyIGExMiA9IGFbMSAqIDMgKyAyXTtcbiAgICAgICAgdmFyIGEyMCA9IGFbMiAqIDMgKyAwXTtcbiAgICAgICAgdmFyIGEyMSA9IGFbMiAqIDMgKyAxXTtcbiAgICAgICAgdmFyIGEyMiA9IGFbMiAqIDMgKyAyXTtcbiAgICAgICAgdmFyIGIwMCA9IGJbMCAqIDMgKyAwXTtcbiAgICAgICAgdmFyIGIwMSA9IGJbMCAqIDMgKyAxXTtcbiAgICAgICAgdmFyIGIwMiA9IGJbMCAqIDMgKyAyXTtcbiAgICAgICAgdmFyIGIxMCA9IGJbMSAqIDMgKyAwXTtcbiAgICAgICAgdmFyIGIxMSA9IGJbMSAqIDMgKyAxXTtcbiAgICAgICAgdmFyIGIxMiA9IGJbMSAqIDMgKyAyXTtcbiAgICAgICAgdmFyIGIyMCA9IGJbMiAqIDMgKyAwXTtcbiAgICAgICAgdmFyIGIyMSA9IGJbMiAqIDMgKyAxXTtcbiAgICAgICAgdmFyIGIyMiA9IGJbMiAqIDMgKyAyXTtcbiAgICBcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICBiMDAgKiBhMDAgKyBiMDEgKiBhMTAgKyBiMDIgKiBhMjAsXG4gICAgICAgICAgYjAwICogYTAxICsgYjAxICogYTExICsgYjAyICogYTIxLFxuICAgICAgICAgIGIwMCAqIGEwMiArIGIwMSAqIGExMiArIGIwMiAqIGEyMixcbiAgICAgICAgICBiMTAgKiBhMDAgKyBiMTEgKiBhMTAgKyBiMTIgKiBhMjAsXG4gICAgICAgICAgYjEwICogYTAxICsgYjExICogYTExICsgYjEyICogYTIxLFxuICAgICAgICAgIGIxMCAqIGEwMiArIGIxMSAqIGExMiArIGIxMiAqIGEyMixcbiAgICAgICAgICBiMjAgKiBhMDAgKyBiMjEgKiBhMTAgKyBiMjIgKiBhMjAsXG4gICAgICAgICAgYjIwICogYTAxICsgYjIxICogYTExICsgYjIyICogYTIxLFxuICAgICAgICAgIGIyMCAqIGEwMiArIGIyMSAqIGExMiArIGIyMiAqIGEyMixcbiAgICAgICAgXTtcbiAgICAgIH0sXG4gICAgICB4Um90YXRpb246IGZ1bmN0aW9uKGFuZ2xlSW5SYWRpYW5zKSB7XG4gICAgICAgIHZhciBjID0gTWF0aC5jb3MoYW5nbGVJblJhZGlhbnMpO1xuICAgICAgICB2YXIgcyA9IE1hdGguc2luKGFuZ2xlSW5SYWRpYW5zKTtcbiAgICAgXG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgMSwgMCwgMCwgXG4gICAgICAgICAgMCwgYywgcywgXG4gICAgICAgICAgMCwgLXMsIGNcbiAgICAgICAgXTtcbiAgICAgIH0sXG4gICAgIFxuICAgICAgeVJvdGF0aW9uOiBmdW5jdGlvbihhbmdsZUluUmFkaWFucykge1xuICAgICAgICB2YXIgYyA9IE1hdGguY29zKGFuZ2xlSW5SYWRpYW5zKTtcbiAgICAgICAgdmFyIHMgPSBNYXRoLnNpbihhbmdsZUluUmFkaWFucyk7XG4gICAgIFxuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgIGMsIDAsIC1zLCBcbiAgICAgICAgICAwLCAxLCAwLCBcbiAgICAgICAgICBzLCAwLCBjXG4gICAgICAgIF07XG4gICAgICB9LFxuICAgICBcbiAgICAgIHpSb3RhdGlvbjogZnVuY3Rpb24oYW5nbGVJblJhZGlhbnMpIHtcbiAgICAgICAgdmFyIGMgPSBNYXRoLmNvcyhhbmdsZUluUmFkaWFucyk7XG4gICAgICAgIHZhciBzID0gTWF0aC5zaW4oYW5nbGVJblJhZGlhbnMpO1xuICAgICBcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgYywgcywgMCwgXG4gICAgICAgICAgLXMsIGMsIDAsXG4gICAgICAgICAgIDAsIDAsIDFcbiAgICAgICAgXTtcbiAgICAgIH0sXG4gICAgICBtM1RvbTQgOiBmdW5jdGlvbihtKXtcbiAgICAgICAgY29uc3QgZHN0ID0gbmV3IEZsb2F0MzJBcnJheSgxNilcbiAgICAgICAgZHN0WyAwXSA9IG1bMF1cbiAgICAgICAgZHN0WyAxXSA9IG1bMV1cbiAgICAgICAgZHN0WyAyXSA9IG1bMl1cbiAgICAgICAgZHN0WyAzXSA9IDBcbiAgICAgICAgZHN0WyA0XSA9IG1bM11cbiAgICAgICAgZHN0WyA1XSA9IG1bNF1cbiAgICAgICAgZHN0WyA2XSA9IG1bNV1cbiAgICAgICAgZHN0WyA3XSA9IDBcbiAgICAgICAgZHN0WyA4XSA9IG1bNl1cbiAgICAgICAgZHN0WyA5XSA9IG1bN11cbiAgICAgICAgZHN0WzEwXSA9IG1bOF1cbiAgICAgICAgZHN0WzExXSA9IDBcbiAgICAgICAgZHN0WzEyXSA9IDBcbiAgICAgICAgZHN0WzEzXSA9IDBcbiAgICAgICAgZHN0WzE0XSA9IDBcbiAgICAgICAgZHN0WzE1XSA9IDFcbiAgICAgICAgcmV0dXJuIGRzdFxuICAgICAgfSxcbiAgICAgIHhSb3RhdGU6IGZ1bmN0aW9uKG0sIGFuZ2xlSW5SYWRpYW5zKSB7XG4gICAgICAgIHJldHVybiBtMy5tdWx0aXBseShtLCBtMy54Um90YXRpb24oYW5nbGVJblJhZGlhbnMpKTtcbiAgICAgIH0sXG4gICAgIFxuICAgICAgeVJvdGF0ZTogZnVuY3Rpb24obSwgYW5nbGVJblJhZGlhbnMpIHtcbiAgICAgICAgcmV0dXJuIG0zLm11bHRpcGx5KG0sIG0zLnlSb3RhdGlvbihhbmdsZUluUmFkaWFucykpO1xuICAgICAgfSxcbiAgICAgXG4gICAgICB6Um90YXRlOiBmdW5jdGlvbihtLCBhbmdsZUluUmFkaWFucykge1xuICAgICAgICByZXR1cm4gbTMubXVsdGlwbHkobSwgbTMuelJvdGF0aW9uKGFuZ2xlSW5SYWRpYW5zKSk7XG4gICAgICB9LFxuICAgICAgdHJhbnNmb3JtUG9pbnQgOiBmdW5jdGlvbihtLCB2LCBkc3QpIHtcbiAgICAgICAgZHN0ID0gZHN0IHx8IG5ldyBGbG9hdDMyQXJyYXkoMyk7XG4gICAgICAgIHZhciB2MCA9IHZbMF07XG4gICAgICAgIHZhciB2MSA9IHZbMV07XG4gICAgICAgIHZhciB2MiA9IHZbMl07XG4gICAgICAgIFxuICAgIFxuICAgICAgICBkc3RbMF0gPSAodjAgKiBtWzAgKiAzICsgMF0gKyB2MSAqIG1bMSAqIDMgKyAwXSArIHYyICogbVsyICogMyArIDBdICApIFxuICAgICAgICBkc3RbMV0gPSAodjAgKiBtWzAgKiAzICsgMV0gKyB2MSAqIG1bMSAqIDMgKyAxXSArIHYyICogbVsyICogMyArIDFdICApIFxuICAgICAgICBkc3RbMl0gPSAodjAgKiBtWzAgKiAzICsgMl0gKyB2MSAqIG1bMSAqIDMgKyAyXSArIHYyICogbVsyICogMyArIDJdICkgXG4gICAgXG4gICAgICAgIHJldHVybiBkc3Q7XG4gICAgICB9LFxuICAgICAgaWRlbnRpdHkgOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAxLCAwLCAwLFxuICAgICAgICAgIDAsIDEsIDAsXG4gICAgICAgICAgMCwgMCwgMSxcbiAgICAgICAgXTtcbiAgICAgIH0sXG4gICAgICB0cmFuc3Bvc2UgOiBmdW5jdGlvbihtKXtcbiAgICAgICAgIFxuICAgICAgICAgIGRzdCA9IG5ldyBGbG9hdDMyQXJyYXkoOSlcbiAgICAgICAgICBkc3RbMF0gPSBtWzBdXG4gICAgICAgICAgZHN0WzFdID0gbVszXVxuICAgICAgICAgIGRzdFsyXSA9IG1bNl1cbiAgICAgICAgICBkc3RbM10gPSBtWzFdXG4gICAgICAgICAgZHN0WzRdID0gbVs0XVxuICAgICAgICAgIGRzdFs1XSA9IG1bN11cbiAgICAgICAgICBkc3RbNl0gPSBtWzJdXG4gICAgICAgICAgZHN0WzddID0gbVs1XVxuICAgICAgICAgIGRzdFs4XSA9IG1bOF1cbiAgICAgICAgICByZXR1cm4gZHN0XG4gICAgICB9LFxuICAgICAgc2NhbGluZyA6IGZ1bmN0aW9uKHN4LHN5LHN6KXtcbiAgICAgICAgcmV0dXJuIG5ldyBGbG9hdDMyQXJyYXkoW1xuICAgICAgICAgICAgICAgICAgICBzeCwgMCwgMCxcbiAgICAgICAgICAgICAgICAgICAgMCwgc3ksIDAsXG4gICAgICAgICAgICAgICAgICAgIDAsICAwLCBzelxuICAgICAgICAgICAgICBdKVxuICAgICAgfSxcbiAgICAgIHNjYWxlIDogZnVuY3Rpb24obSwgc3gsc3ksc3ope1xuICAgICAgICByZXR1cm4gbTMubXVsdGlwbHkobSwgbTMuc2NhbGluZyhzeCwgc3ksIHN6KSlcbiAgICAgIH0sXG4gICAgICAvKlxuICAgICAgMCAxIDJcbiAgICAgIDMgNCA1XG4gICAgICA2IDcgOFxuICAgICAgKi9cbiAgICAgIGludmVyc2UgOiBmdW5jdGlvbihtKXtcbiAgICAgICBjb25zdCBkZXQgPSBtWzBdICogbVs0XSAqIG1bOF0gKyBcbiAgICAgICAgICAgICAgICAgICBtWzJdICogbVszXSAqIG1bN10gK1xuICAgICAgICAgICAgICAgICAgIG1bMV0gKiBtWzVdICogbVs2XSAtXG4gICAgICAgICAgICAgICAgICAgbVsyXSAqIG1bNF0gKiBtWzZdIC1cbiAgICAgICAgICAgICAgICAgICBtWzBdICogbVs1XSAqIG1bN10gLVxuICAgICAgICAgICAgICAgICAgIG1bOF0gKiBtWzNdICogbVsyXSBcbiAgICAgICAgY29uc3QgZHN0ID0gbmV3IEZsb2F0MzJBcnJheSg5KVxuICAgICAgICBkc3RbMF0gPSAobVs0XSAqIG1bOF0gLSBtWzddICogbVs1XSkgLyBkZXRcbiAgICAgICAgZHN0WzFdID0gKG1bM10gKiBtWzhdIC0gbVs2XSAqIG1bNV0pIC8gZGV0XG4gICAgICAgIGRzdFsyXSA9IChtWzNdICogbVs3XSAtIG1bNl0gKiBtWzRdKSAvIGRldFxuICAgICAgICBkc3RbM10gPSAobVsxXSAqIG1bOF0gLSBtWzJdICogbVs3XSkgLyBkZXRcbiAgICAgICAgZHN0WzRdID0gKG1bMF0gKiBtWzhdIC0gbVsyXSAqIG1bNl0pIC8gZGV0XG4gICAgICAgIGRzdFs1XSA9IChtWzBdICogbVs3XSAtIG1bMV0gKiBtWzZdKSAvIGRldFxuICAgICAgICBkc3RbNl0gPSAobVsxXSAqIG1bNV0gLSBtWzJdICogbVs0XSkgLyBkZXRcbiAgICAgICAgZHN0WzddID0gKG1bMF0gKiBtWzVdIC0gbVsyXSAqIG1bM10pIC8gZGV0XG4gICAgICAgIGRzdFs4XSA9IChtWzBdICogbVs0XSAtIG1bMV0gKiBtWzRdKSAvIGRldFxuICAgICAgICBcbiAgICAgIH0sXG4gICAgICB0b1N0cmluZyhtKXtcbiAgICAgICAgcmV0dXJuIG0ucmVkdWNlKChhY2MsZWwsaWR4KSA9PiAoaWR4KSAlIDMgPT09IDAgPyBhY2MgKz0gJ1xcbicgKyBlbCA6IGFjYyArPSAnICcgKyBlbCApXG4gICAgICB9LFxuICAgICAgZG90KHYxLHYyKXtcbiAgICAgICAgcmV0dXJuIHYxWzBdKnYyWzBdICsgdjFbMV0qdjJbMV0gKyB2MVsyXSAqIHYyWzJdXG4gICAgICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IG0zIiwiY29uc3QgTWF0VHlwZSA9IEZsb2F0MzJBcnJheTtcbmNvbnN0IHtub3JtfSA9IHJlcXVpcmUoJy4vdmVjdG9yJylcbmNvbnN0IG00ID0ge1xuICBtdWx0aXBseTogZnVuY3Rpb24gKGEsIGIsIGRzdCkge1xuICAgIGRzdCA9IGRzdCB8fCBuZXcgTWF0VHlwZSgxNik7XG4gICAgdmFyIGEwMCA9IGFbMCAqIDQgKyAwXTtcbiAgICB2YXIgYTAxID0gYVswICogNCArIDFdO1xuICAgIHZhciBhMDIgPSBhWzAgKiA0ICsgMl07XG4gICAgdmFyIGEwMyA9IGFbMCAqIDQgKyAzXTtcbiAgICB2YXIgYTEwID0gYVsxICogNCArIDBdO1xuICAgIHZhciBhMTEgPSBhWzEgKiA0ICsgMV07XG4gICAgdmFyIGExMiA9IGFbMSAqIDQgKyAyXTtcbiAgICB2YXIgYTEzID0gYVsxICogNCArIDNdO1xuICAgIHZhciBhMjAgPSBhWzIgKiA0ICsgMF07XG4gICAgdmFyIGEyMSA9IGFbMiAqIDQgKyAxXTtcbiAgICB2YXIgYTIyID0gYVsyICogNCArIDJdO1xuICAgIHZhciBhMjMgPSBhWzIgKiA0ICsgM107XG4gICAgdmFyIGEzMCA9IGFbMyAqIDQgKyAwXTtcbiAgICB2YXIgYTMxID0gYVszICogNCArIDFdO1xuICAgIHZhciBhMzIgPSBhWzMgKiA0ICsgMl07XG4gICAgdmFyIGEzMyA9IGFbMyAqIDQgKyAzXTtcbiAgICB2YXIgYjAwID0gYlswICogNCArIDBdO1xuICAgIHZhciBiMDEgPSBiWzAgKiA0ICsgMV07XG4gICAgdmFyIGIwMiA9IGJbMCAqIDQgKyAyXTtcbiAgICB2YXIgYjAzID0gYlswICogNCArIDNdO1xuICAgIHZhciBiMTAgPSBiWzEgKiA0ICsgMF07XG4gICAgdmFyIGIxMSA9IGJbMSAqIDQgKyAxXTtcbiAgICB2YXIgYjEyID0gYlsxICogNCArIDJdO1xuICAgIHZhciBiMTMgPSBiWzEgKiA0ICsgM107XG4gICAgdmFyIGIyMCA9IGJbMiAqIDQgKyAwXTtcbiAgICB2YXIgYjIxID0gYlsyICogNCArIDFdO1xuICAgIHZhciBiMjIgPSBiWzIgKiA0ICsgMl07XG4gICAgdmFyIGIyMyA9IGJbMiAqIDQgKyAzXTtcbiAgICB2YXIgYjMwID0gYlszICogNCArIDBdO1xuICAgIHZhciBiMzEgPSBiWzMgKiA0ICsgMV07XG4gICAgdmFyIGIzMiA9IGJbMyAqIDQgKyAyXTtcbiAgICB2YXIgYjMzID0gYlszICogNCArIDNdO1xuICAgIGRzdFswXSA9IGIwMCAqIGEwMCArIGIwMSAqIGExMCArIGIwMiAqIGEyMCArIGIwMyAqIGEzMDtcbiAgICBkc3RbMV0gPSBiMDAgKiBhMDEgKyBiMDEgKiBhMTEgKyBiMDIgKiBhMjEgKyBiMDMgKiBhMzE7XG4gICAgZHN0WzJdID0gYjAwICogYTAyICsgYjAxICogYTEyICsgYjAyICogYTIyICsgYjAzICogYTMyO1xuICAgIGRzdFszXSA9IGIwMCAqIGEwMyArIGIwMSAqIGExMyArIGIwMiAqIGEyMyArIGIwMyAqIGEzMztcbiAgICBkc3RbNF0gPSBiMTAgKiBhMDAgKyBiMTEgKiBhMTAgKyBiMTIgKiBhMjAgKyBiMTMgKiBhMzA7XG4gICAgZHN0WzVdID0gYjEwICogYTAxICsgYjExICogYTExICsgYjEyICogYTIxICsgYjEzICogYTMxO1xuICAgIGRzdFs2XSA9IGIxMCAqIGEwMiArIGIxMSAqIGExMiArIGIxMiAqIGEyMiArIGIxMyAqIGEzMjtcbiAgICBkc3RbN10gPSBiMTAgKiBhMDMgKyBiMTEgKiBhMTMgKyBiMTIgKiBhMjMgKyBiMTMgKiBhMzM7XG4gICAgZHN0WzhdID0gYjIwICogYTAwICsgYjIxICogYTEwICsgYjIyICogYTIwICsgYjIzICogYTMwO1xuICAgIGRzdFs5XSA9IGIyMCAqIGEwMSArIGIyMSAqIGExMSArIGIyMiAqIGEyMSArIGIyMyAqIGEzMTtcbiAgICBkc3RbMTBdID0gYjIwICogYTAyICsgYjIxICogYTEyICsgYjIyICogYTIyICsgYjIzICogYTMyO1xuICAgIGRzdFsxMV0gPSBiMjAgKiBhMDMgKyBiMjEgKiBhMTMgKyBiMjIgKiBhMjMgKyBiMjMgKiBhMzM7XG4gICAgZHN0WzEyXSA9IGIzMCAqIGEwMCArIGIzMSAqIGExMCArIGIzMiAqIGEyMCArIGIzMyAqIGEzMDtcbiAgICBkc3RbMTNdID0gYjMwICogYTAxICsgYjMxICogYTExICsgYjMyICogYTIxICsgYjMzICogYTMxO1xuICAgIGRzdFsxNF0gPSBiMzAgKiBhMDIgKyBiMzEgKiBhMTIgKyBiMzIgKiBhMjIgKyBiMzMgKiBhMzI7XG4gICAgZHN0WzE1XSA9IGIzMCAqIGEwMyArIGIzMSAqIGExMyArIGIzMiAqIGEyMyArIGIzMyAqIGEzMztcbiAgICByZXR1cm4gZHN0O1xuICB9LFxuXG4gIHRyYW5zbGF0aW9uOiBmdW5jdGlvbiAodHgsIHR5LCB0eikge1xuICAgIHJldHVybiBbMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgdHgsIHR5LCB0eiwgMV07XG4gIH0sXG5cbiAgeFJvdGF0aW9uOiBmdW5jdGlvbiAoYW5nbGVJblJhZGlhbnMpIHtcbiAgICB2YXIgYyA9IE1hdGguY29zKGFuZ2xlSW5SYWRpYW5zKTtcbiAgICB2YXIgcyA9IE1hdGguc2luKGFuZ2xlSW5SYWRpYW5zKTtcblxuICAgIHJldHVybiBbMSwgMCwgMCwgMCwgMCwgYywgcywgMCwgMCwgLXMsIGMsIDAsIDAsIDAsIDAsIDFdO1xuICB9LFxuXG4gIHlSb3RhdGlvbjogZnVuY3Rpb24gKGFuZ2xlSW5SYWRpYW5zKSB7XG4gICAgdmFyIGMgPSBNYXRoLmNvcyhhbmdsZUluUmFkaWFucyk7XG4gICAgdmFyIHMgPSBNYXRoLnNpbihhbmdsZUluUmFkaWFucyk7XG5cbiAgICByZXR1cm4gW2MsIDAsIC1zLCAwLCAwLCAxLCAwLCAwLCBzLCAwLCBjLCAwLCAwLCAwLCAwLCAxXTtcbiAgfSxcblxuICB6Um90YXRpb246IGZ1bmN0aW9uIChhbmdsZUluUmFkaWFucykge1xuICAgIHZhciBjID0gTWF0aC5jb3MoYW5nbGVJblJhZGlhbnMpO1xuICAgIHZhciBzID0gTWF0aC5zaW4oYW5nbGVJblJhZGlhbnMpO1xuXG4gICAgcmV0dXJuIFtjLCBzLCAwLCAwLCAtcywgYywgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMV07XG4gIH0sXG5cbiAgc2NhbGluZzogZnVuY3Rpb24gKHN4LCBzeSwgc3opIHtcbiAgICByZXR1cm4gW3N4LCAwLCAwLCAwLCAwLCBzeSwgMCwgMCwgMCwgMCwgc3osIDAsIDAsIDAsIDAsIDFdO1xuICB9LFxuICB0cmFuc2xhdGU6IGZ1bmN0aW9uIChtLCB0eCwgdHksIHR6KSB7XG4gICAgcmV0dXJuIG00Lm11bHRpcGx5KG0sIG00LnRyYW5zbGF0aW9uKHR4LCB0eSwgdHopKTtcbiAgfSxcblxuICB4Um90YXRlOiBmdW5jdGlvbiAobSwgYW5nbGVJblJhZGlhbnMpIHtcbiAgICByZXR1cm4gbTQubXVsdGlwbHkobSwgbTQueFJvdGF0aW9uKGFuZ2xlSW5SYWRpYW5zKSk7XG4gIH0sXG5cbiAgeVJvdGF0ZTogZnVuY3Rpb24gKG0sIGFuZ2xlSW5SYWRpYW5zKSB7XG4gICAgcmV0dXJuIG00Lm11bHRpcGx5KG0sIG00LnlSb3RhdGlvbihhbmdsZUluUmFkaWFucykpO1xuICB9LFxuXG4gIHpSb3RhdGU6IGZ1bmN0aW9uIChtLCBhbmdsZUluUmFkaWFucykge1xuICAgIHJldHVybiBtNC5tdWx0aXBseShtLCBtNC56Um90YXRpb24oYW5nbGVJblJhZGlhbnMpKTtcbiAgfSxcblxuICBzY2FsZTogZnVuY3Rpb24gKG0sIHN4LCBzeSwgc3opIHtcbiAgICByZXR1cm4gbTQubXVsdGlwbHkobSwgbTQuc2NhbGluZyhzeCwgc3ksIHN6KSk7XG4gIH0sXG4gIG1ha2VPcnQ6IGZ1bmN0aW9uICh2KSB7XG4gICAgY29uc3QgbyA9IFswLCAwLCAwXTtcbiAgICBjb25zdCBub3JtID0gTWF0aC5zcXJ0KHZbMF0gKiB2WzBdICsgdlsxXSAqIHZbMV0gKyB2WzJdICogdlsyXSk7XG4gICAgb1swXSA9IHZbMF0gLyBub3JtO1xuICAgIG9bMV0gPSB2WzFdIC8gbm9ybTtcbiAgICBvWzJdID0gdlsyXSAvIG5vcm07XG4gICAgcmV0dXJuIG87XG4gIH0sXG4gIHByb2plY3Rpb246IGZ1bmN0aW9uICh3aWR0aCwgaGVpZ2h0LCBkZXB0aCkge1xuICAgIC8vINCt0YLQsCDQvNCw0YLRgNC40YbQsCDQv9C10YDQtdCy0L7RgNCw0YfQuNCy0LDQtdGCIFksINGH0YLQvtCx0YsgMCDQsdGL0Lsg0L3QsNCy0LXRgNGF0YNcbiAgICByZXR1cm4gW1xuICAgICAgMiAvIHdpZHRoLFxuICAgICAgMCxcbiAgICAgIDAsXG4gICAgICAwLFxuICAgICAgMCxcbiAgICAgIC0yIC8gaGVpZ2h0LFxuICAgICAgMCxcbiAgICAgIDAsXG4gICAgICAwLFxuICAgICAgMCxcbiAgICAgIDIgLyBkZXB0aCxcbiAgICAgIDAsXG4gICAgICAtMSxcbiAgICAgIDEsXG4gICAgICAwLFxuICAgICAgMSxcbiAgICBdO1xuICB9LFxuICBwZXJzcGVjdGl2ZTogZnVuY3Rpb24gKGZpZWxkT2ZWaWV3SW5SYWRpYW5zLCBhc3BlY3QsIG5lYXIsIGZhcikge1xuICAgIHZhciBmID0gTWF0aC50YW4oTWF0aC5QSSAqIDAuNSAtIDAuNSAqIGZpZWxkT2ZWaWV3SW5SYWRpYW5zKTtcbiAgICB2YXIgcmFuZ2VJbnYgPSAxLjAgLyAobmVhciAtIGZhcik7XG5cbiAgICByZXR1cm4gW1xuICAgICAgZiAvIGFzcGVjdCxcbiAgICAgIDAsXG4gICAgICAwLFxuICAgICAgMCxcbiAgICAgIDAsXG4gICAgICBmLFxuICAgICAgMCxcbiAgICAgIDAsXG4gICAgICAwLFxuICAgICAgMCxcbiAgICAgIChuZWFyICsgZmFyKSAqIHJhbmdlSW52LFxuICAgICAgLTEsXG4gICAgICAwLFxuICAgICAgMCxcbiAgICAgIG5lYXIgKiBmYXIgKiByYW5nZUludiAqIDIsXG4gICAgICAwLFxuICAgIF07XG4gIH0sXG4gIGludmVyc2U6IGZ1bmN0aW9uIChtKSB7XG4gICAgdmFyIG0wMCA9IG1bMCAqIDQgKyAwXTtcbiAgICB2YXIgbTAxID0gbVswICogNCArIDFdO1xuICAgIHZhciBtMDIgPSBtWzAgKiA0ICsgMl07XG4gICAgdmFyIG0wMyA9IG1bMCAqIDQgKyAzXTtcbiAgICB2YXIgbTEwID0gbVsxICogNCArIDBdO1xuICAgIHZhciBtMTEgPSBtWzEgKiA0ICsgMV07XG4gICAgdmFyIG0xMiA9IG1bMSAqIDQgKyAyXTtcbiAgICB2YXIgbTEzID0gbVsxICogNCArIDNdO1xuICAgIHZhciBtMjAgPSBtWzIgKiA0ICsgMF07XG4gICAgdmFyIG0yMSA9IG1bMiAqIDQgKyAxXTtcbiAgICB2YXIgbTIyID0gbVsyICogNCArIDJdO1xuICAgIHZhciBtMjMgPSBtWzIgKiA0ICsgM107XG4gICAgdmFyIG0zMCA9IG1bMyAqIDQgKyAwXTtcbiAgICB2YXIgbTMxID0gbVszICogNCArIDFdO1xuICAgIHZhciBtMzIgPSBtWzMgKiA0ICsgMl07XG4gICAgdmFyIG0zMyA9IG1bMyAqIDQgKyAzXTtcbiAgICB2YXIgdG1wXzAgPSBtMjIgKiBtMzM7XG4gICAgdmFyIHRtcF8xID0gbTMyICogbTIzO1xuICAgIHZhciB0bXBfMiA9IG0xMiAqIG0zMztcbiAgICB2YXIgdG1wXzMgPSBtMzIgKiBtMTM7XG4gICAgdmFyIHRtcF80ID0gbTEyICogbTIzO1xuICAgIHZhciB0bXBfNSA9IG0yMiAqIG0xMztcbiAgICB2YXIgdG1wXzYgPSBtMDIgKiBtMzM7XG4gICAgdmFyIHRtcF83ID0gbTMyICogbTAzO1xuICAgIHZhciB0bXBfOCA9IG0wMiAqIG0yMztcbiAgICB2YXIgdG1wXzkgPSBtMjIgKiBtMDM7XG4gICAgdmFyIHRtcF8xMCA9IG0wMiAqIG0xMztcbiAgICB2YXIgdG1wXzExID0gbTEyICogbTAzO1xuICAgIHZhciB0bXBfMTIgPSBtMjAgKiBtMzE7XG4gICAgdmFyIHRtcF8xMyA9IG0zMCAqIG0yMTtcbiAgICB2YXIgdG1wXzE0ID0gbTEwICogbTMxO1xuICAgIHZhciB0bXBfMTUgPSBtMzAgKiBtMTE7XG4gICAgdmFyIHRtcF8xNiA9IG0xMCAqIG0yMTtcbiAgICB2YXIgdG1wXzE3ID0gbTIwICogbTExO1xuICAgIHZhciB0bXBfMTggPSBtMDAgKiBtMzE7XG4gICAgdmFyIHRtcF8xOSA9IG0zMCAqIG0wMTtcbiAgICB2YXIgdG1wXzIwID0gbTAwICogbTIxO1xuICAgIHZhciB0bXBfMjEgPSBtMjAgKiBtMDE7XG4gICAgdmFyIHRtcF8yMiA9IG0wMCAqIG0xMTtcbiAgICB2YXIgdG1wXzIzID0gbTEwICogbTAxO1xuXG4gICAgdmFyIHQwID1cbiAgICAgIHRtcF8wICogbTExICtcbiAgICAgIHRtcF8zICogbTIxICtcbiAgICAgIHRtcF80ICogbTMxIC1cbiAgICAgICh0bXBfMSAqIG0xMSArIHRtcF8yICogbTIxICsgdG1wXzUgKiBtMzEpO1xuICAgIHZhciB0MSA9XG4gICAgICB0bXBfMSAqIG0wMSArXG4gICAgICB0bXBfNiAqIG0yMSArXG4gICAgICB0bXBfOSAqIG0zMSAtXG4gICAgICAodG1wXzAgKiBtMDEgKyB0bXBfNyAqIG0yMSArIHRtcF84ICogbTMxKTtcbiAgICB2YXIgdDIgPVxuICAgICAgdG1wXzIgKiBtMDEgK1xuICAgICAgdG1wXzcgKiBtMTEgK1xuICAgICAgdG1wXzEwICogbTMxIC1cbiAgICAgICh0bXBfMyAqIG0wMSArIHRtcF82ICogbTExICsgdG1wXzExICogbTMxKTtcbiAgICB2YXIgdDMgPVxuICAgICAgdG1wXzUgKiBtMDEgK1xuICAgICAgdG1wXzggKiBtMTEgK1xuICAgICAgdG1wXzExICogbTIxIC1cbiAgICAgICh0bXBfNCAqIG0wMSArIHRtcF85ICogbTExICsgdG1wXzEwICogbTIxKTtcblxuICAgIHZhciBkID0gMS4wIC8gKG0wMCAqIHQwICsgbTEwICogdDEgKyBtMjAgKiB0MiArIG0zMCAqIHQzKTtcblxuICAgIHJldHVybiBbXG4gICAgICBkICogdDAsXG4gICAgICBkICogdDEsXG4gICAgICBkICogdDIsXG4gICAgICBkICogdDMsXG4gICAgICBkICpcbiAgICAgICAgKHRtcF8xICogbTEwICtcbiAgICAgICAgICB0bXBfMiAqIG0yMCArXG4gICAgICAgICAgdG1wXzUgKiBtMzAgLVxuICAgICAgICAgICh0bXBfMCAqIG0xMCArIHRtcF8zICogbTIwICsgdG1wXzQgKiBtMzApKSxcbiAgICAgIGQgKlxuICAgICAgICAodG1wXzAgKiBtMDAgK1xuICAgICAgICAgIHRtcF83ICogbTIwICtcbiAgICAgICAgICB0bXBfOCAqIG0zMCAtXG4gICAgICAgICAgKHRtcF8xICogbTAwICsgdG1wXzYgKiBtMjAgKyB0bXBfOSAqIG0zMCkpLFxuICAgICAgZCAqXG4gICAgICAgICh0bXBfMyAqIG0wMCArXG4gICAgICAgICAgdG1wXzYgKiBtMTAgK1xuICAgICAgICAgIHRtcF8xMSAqIG0zMCAtXG4gICAgICAgICAgKHRtcF8yICogbTAwICsgdG1wXzcgKiBtMTAgKyB0bXBfMTAgKiBtMzApKSxcbiAgICAgIGQgKlxuICAgICAgICAodG1wXzQgKiBtMDAgK1xuICAgICAgICAgIHRtcF85ICogbTEwICtcbiAgICAgICAgICB0bXBfMTAgKiBtMjAgLVxuICAgICAgICAgICh0bXBfNSAqIG0wMCArIHRtcF84ICogbTEwICsgdG1wXzExICogbTIwKSksXG4gICAgICBkICpcbiAgICAgICAgKHRtcF8xMiAqIG0xMyArXG4gICAgICAgICAgdG1wXzE1ICogbTIzICtcbiAgICAgICAgICB0bXBfMTYgKiBtMzMgLVxuICAgICAgICAgICh0bXBfMTMgKiBtMTMgKyB0bXBfMTQgKiBtMjMgKyB0bXBfMTcgKiBtMzMpKSxcbiAgICAgIGQgKlxuICAgICAgICAodG1wXzEzICogbTAzICtcbiAgICAgICAgICB0bXBfMTggKiBtMjMgK1xuICAgICAgICAgIHRtcF8yMSAqIG0zMyAtXG4gICAgICAgICAgKHRtcF8xMiAqIG0wMyArIHRtcF8xOSAqIG0yMyArIHRtcF8yMCAqIG0zMykpLFxuICAgICAgZCAqXG4gICAgICAgICh0bXBfMTQgKiBtMDMgK1xuICAgICAgICAgIHRtcF8xOSAqIG0xMyArXG4gICAgICAgICAgdG1wXzIyICogbTMzIC1cbiAgICAgICAgICAodG1wXzE1ICogbTAzICsgdG1wXzE4ICogbTEzICsgdG1wXzIzICogbTMzKSksXG4gICAgICBkICpcbiAgICAgICAgKHRtcF8xNyAqIG0wMyArXG4gICAgICAgICAgdG1wXzIwICogbTEzICtcbiAgICAgICAgICB0bXBfMjMgKiBtMjMgLVxuICAgICAgICAgICh0bXBfMTYgKiBtMDMgKyB0bXBfMjEgKiBtMTMgKyB0bXBfMjIgKiBtMjMpKSxcbiAgICAgIGQgKlxuICAgICAgICAodG1wXzE0ICogbTIyICtcbiAgICAgICAgICB0bXBfMTcgKiBtMzIgK1xuICAgICAgICAgIHRtcF8xMyAqIG0xMiAtXG4gICAgICAgICAgKHRtcF8xNiAqIG0zMiArIHRtcF8xMiAqIG0xMiArIHRtcF8xNSAqIG0yMikpLFxuICAgICAgZCAqXG4gICAgICAgICh0bXBfMjAgKiBtMzIgK1xuICAgICAgICAgIHRtcF8xMiAqIG0wMiArXG4gICAgICAgICAgdG1wXzE5ICogbTIyIC1cbiAgICAgICAgICAodG1wXzE4ICogbTIyICsgdG1wXzIxICogbTMyICsgdG1wXzEzICogbTAyKSksXG4gICAgICBkICpcbiAgICAgICAgKHRtcF8xOCAqIG0xMiArXG4gICAgICAgICAgdG1wXzIzICogbTMyICtcbiAgICAgICAgICB0bXBfMTUgKiBtMDIgLVxuICAgICAgICAgICh0bXBfMjIgKiBtMzIgKyB0bXBfMTQgKiBtMDIgKyB0bXBfMTkgKiBtMTIpKSxcbiAgICAgIGQgKlxuICAgICAgICAodG1wXzIyICogbTIyICtcbiAgICAgICAgICB0bXBfMTYgKiBtMDIgK1xuICAgICAgICAgIHRtcF8yMSAqIG0xMiAtXG4gICAgICAgICAgKHRtcF8yMCAqIG0xMiArIHRtcF8yMyAqIG0yMiArIHRtcF8xNyAqIG0wMikpLFxuICAgIF07XG4gIH0sXG4gIGxvb2tBdDogZnVuY3Rpb24gKGNhbWVyYVBvc2l0aW9uLCB0YXJnZXQsIHVwKSB7XG4gICAgdmFyIHpBeGlzID0gbm9ybWFsaXplKHN1YnRyYWN0VmVjdG9ycyhjYW1lcmFQb3NpdGlvbiwgdGFyZ2V0KSk7XG4gICAgdmFyIHhBeGlzID0gbm9ybWFsaXplKGNyb3NzKHVwLCB6QXhpcykpO1xuICAgIHZhciB5QXhpcyA9IG5vcm1hbGl6ZShjcm9zcyh6QXhpcywgeEF4aXMpKTtcblxuICAgIHJldHVybiBbXG4gICAgICB4QXhpc1swXSxcbiAgICAgIHhBeGlzWzFdLFxuICAgICAgeEF4aXNbMl0sXG4gICAgICAwLFxuICAgICAgeUF4aXNbMF0sXG4gICAgICB5QXhpc1sxXSxcbiAgICAgIHlBeGlzWzJdLFxuICAgICAgMCxcbiAgICAgIHpBeGlzWzBdLFxuICAgICAgekF4aXNbMV0sXG4gICAgICB6QXhpc1syXSxcbiAgICAgIDAsXG4gICAgICBjYW1lcmFQb3NpdGlvblswXSxcbiAgICAgIGNhbWVyYVBvc2l0aW9uWzFdLFxuICAgICAgY2FtZXJhUG9zaXRpb25bMl0sXG4gICAgICAxLFxuICAgIF07XG4gIH0sXG4gIGNvcHk6IGZ1bmN0aW9uIChzcmMpIHtcbiAgICBjb25zdCBkc3QgPSBuZXcgTWF0VHlwZSgxNik7XG5cbiAgICBkc3RbMF0gPSBzcmNbMF07XG4gICAgZHN0WzFdID0gc3JjWzFdO1xuICAgIGRzdFsyXSA9IHNyY1syXTtcbiAgICBkc3RbM10gPSBzcmNbM107XG4gICAgZHN0WzRdID0gc3JjWzRdO1xuICAgIGRzdFs1XSA9IHNyY1s1XTtcbiAgICBkc3RbNl0gPSBzcmNbNl07XG4gICAgZHN0WzddID0gc3JjWzddO1xuICAgIGRzdFs4XSA9IHNyY1s4XTtcbiAgICBkc3RbOV0gPSBzcmNbOV07XG4gICAgZHN0WzEwXSA9IHNyY1sxMF07XG4gICAgZHN0WzExXSA9IHNyY1sxMV07XG4gICAgZHN0WzEyXSA9IHNyY1sxMl07XG4gICAgZHN0WzEzXSA9IHNyY1sxM107XG4gICAgZHN0WzE0XSA9IHNyY1sxNF07XG4gICAgZHN0WzE1XSA9IHNyY1sxNV07XG5cbiAgICByZXR1cm4gZHN0O1xuICB9LFxuICB2ZWN0b3JTdW06IGZ1bmN0aW9uICh2MSwgdjIpIHtcbiAgICBjb25zdCB2ZWN0b3IgPSBbMCwgMCwgMF07XG4gICAgdmVjdG9yWzBdID0gdjFbMF0gKyB2MlswXTtcbiAgICB2ZWN0b3JbMV0gPSB2MVsxXSArIHYyWzFdO1xuICAgIHZlY3RvclsyXSA9IHYxWzJdICsgdjJbMl07XG4gICAgcmV0dXJuIHZlY3RvcjtcbiAgfSxcbiAgY3Jvc3M6IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIGFbMV0gKiBiWzJdIC0gYVsyXSAqIGJbMV0sXG4gICAgICBhWzJdICogYlswXSAtIGFbMF0gKiBiWzJdLFxuICAgICAgYVswXSAqIGJbMV0gLSBhWzFdICogYlswXSxcbiAgICBdO1xuICB9LFxuICB2ZWN0b3JTY2FsYXJQcm9kdWN0KGEsIHMpIHtcbiAgICBsZXQgdiA9IFswLCAwLCAwXTtcblxuICAgIHZbMF0gPSBhWzBdICogcztcbiAgICB2WzFdID0gYVsxXSAqIHM7XG4gICAgdlsyXSA9IGFbMl0gKiBzO1xuICAgIGlmIChpc05hTih2WzBdKSB8fCBpc05hTih2WzJdKSB8fCBpc05hTih2WzJdKSkgcmV0dXJuIFswLCAwLCAwXTtcbiAgICByZXR1cm4gdjtcbiAgfSxcblxuICBzY2FsYXJQcm9kdWN0OiBmdW5jdGlvbiAodjEsIHYyKSB7XG4gICAgbGV0IGEgPSB2MVswXSAqIHYyWzBdICsgdjFbMV0gKiB2MlsxXSArIHYxWzJdICogdjJbMl07XG5cbiAgICByZXR1cm4gYTtcbiAgfSxcbiAgZG90KHYxLCB2Mikge1xuICAgIHJldHVybiB2MVswXSAqIHYyWzBdICsgdjFbMV0gKiB2MlsxXSArIHYxWzJdICogdjJbMl07XG4gIH0sXG4gIGlzTnVsbFZlY3RvcjogZnVuY3Rpb24gKHYpIHtcbiAgICByZXR1cm4gIXZbMF0gJiYgIXZbMV0gJiYgIXZbMl07XG4gIH0sXG4gIGdldFZlY3Rvckxlbmd0aCh2KSB7XG4gICAgcmV0dXJuIE1hdGguc3FydCh2WzBdICogdlswXSArIHZbMV0gKiB2WzFdICsgdlsyXSAqIHZbMl0pO1xuICB9LFxuICB0cmFuc2Zvcm1Qb2ludDogZnVuY3Rpb24gKG0sIHYsIGRzdCkge1xuICAgIGRzdCA9IGRzdCB8fCBuZXcgTWF0VHlwZSgzKTtcbiAgICB2YXIgdjAgPSB2WzBdO1xuICAgIHZhciB2MSA9IHZbMV07XG4gICAgdmFyIHYyID0gdlsyXTtcbiAgICB2YXIgZCA9XG4gICAgICB2MCAqIG1bMCAqIDQgKyAzXSArIHYxICogbVsxICogNCArIDNdICsgdjIgKiBtWzIgKiA0ICsgM10gKyBtWzMgKiA0ICsgM107XG5cbiAgICBkc3RbMF0gPVxuICAgICAgKHYwICogbVswICogNCArIDBdICtcbiAgICAgICAgdjEgKiBtWzEgKiA0ICsgMF0gK1xuICAgICAgICB2MiAqIG1bMiAqIDQgKyAwXSArXG4gICAgICAgIG1bMyAqIDQgKyAwXSkgL1xuICAgICAgZDtcbiAgICBkc3RbMV0gPVxuICAgICAgKHYwICogbVswICogNCArIDFdICtcbiAgICAgICAgdjEgKiBtWzEgKiA0ICsgMV0gK1xuICAgICAgICB2MiAqIG1bMiAqIDQgKyAxXSArXG4gICAgICAgIG1bMyAqIDQgKyAxXSkgL1xuICAgICAgZDtcbiAgICBkc3RbMl0gPVxuICAgICAgKHYwICogbVswICogNCArIDJdICtcbiAgICAgICAgdjEgKiBtWzEgKiA0ICsgMl0gK1xuICAgICAgICB2MiAqIG1bMiAqIDQgKyAyXSArXG4gICAgICAgIG1bMyAqIDQgKyAyXSkgL1xuICAgICAgZDtcblxuICAgIHJldHVybiBkc3Q7XG4gIH0sXG4gIG5vcm1hbGl6ZTogZnVuY3Rpb24gKHYsIGRzdCkge1xuICAgIGRzdCA9IGRzdCB8fCBuZXcgTWF0VHlwZSgzKTtcbiAgICB2YXIgbGVuZ3RoID0gTWF0aC5zcXJ0KHZbMF0gKiB2WzBdICsgdlsxXSAqIHZbMV0gKyB2WzJdICogdlsyXSk7XG4gICAgLy8gbWFrZSBzdXJlIHdlIGRvbid0IGRpdmlkZSBieSAwLlxuICAgIGlmIChsZW5ndGggPiAwLjAwMDAxKSB7XG4gICAgICBkc3RbMF0gPSB2WzBdIC8gbGVuZ3RoO1xuICAgICAgZHN0WzFdID0gdlsxXSAvIGxlbmd0aDtcbiAgICAgIGRzdFsyXSA9IHZbMl0gLyBsZW5ndGg7XG4gICAgfVxuICAgIHJldHVybiBkc3Q7XG4gIH0sXG4gIGlkZW50aXR5OiBmdW5jdGlvbiAoKSB7XG4gICAgZHN0ID0gbmV3IE1hdFR5cGUoMTYpO1xuICAgIGRzdFswXSA9IDE7XG4gICAgZHN0WzFdID0gMDtcbiAgICBkc3RbMl0gPSAwO1xuICAgIGRzdFszXSA9IDA7XG4gICAgZHN0WzRdID0gMDtcbiAgICBkc3RbNV0gPSAxO1xuICAgIGRzdFs2XSA9IDA7XG4gICAgZHN0WzddID0gMDtcbiAgICBkc3RbOF0gPSAwO1xuICAgIGRzdFs5XSA9IDA7XG4gICAgZHN0WzEwXSA9IDE7XG4gICAgZHN0WzExXSA9IDA7XG4gICAgZHN0WzEyXSA9IDA7XG4gICAgZHN0WzEzXSA9IDA7XG4gICAgZHN0WzE0XSA9IDA7XG4gICAgZHN0WzE1XSA9IDE7XG5cbiAgICByZXR1cm4gZHN0O1xuICB9LFxuICBtM1RvbTQ6IGZ1bmN0aW9uIChtKSB7XG4gICAgY29uc3QgZHN0ID0gbmV3IE1hdFR5cGUoMTYpO1xuICAgIGRzdFswXSA9IG1bMF07XG4gICAgZHN0WzFdID0gbVsxXTtcbiAgICBkc3RbMl0gPSBtWzJdO1xuICAgIGRzdFszXSA9IDA7XG4gICAgZHN0WzRdID0gbVszXTtcbiAgICBkc3RbNV0gPSBtWzRdO1xuICAgIGRzdFs2XSA9IG1bNV07XG4gICAgZHN0WzddID0gMDtcbiAgICBkc3RbOF0gPSBtWzZdO1xuICAgIGRzdFs5XSA9IG1bN107XG4gICAgZHN0WzEwXSA9IG1bOF07XG4gICAgZHN0WzExXSA9IDA7XG4gICAgZHN0WzEyXSA9IDA7XG4gICAgZHN0WzEzXSA9IDA7XG4gICAgZHN0WzE0XSA9IDA7XG4gICAgZHN0WzE1XSA9IDE7XG4gICAgcmV0dXJuIGRzdDtcbiAgfSxcbiAgbTRUb20zOiBmdW5jdGlvbiAobSkge1xuICAgIGNvbnN0IGRzdCA9IG5ldyBNYXRUeXBlKDkpO1xuICAgIGRzdFswXSA9IG1bMF07XG4gICAgZHN0WzFdID0gbVsxXTtcbiAgICBkc3RbMl0gPSBtWzJdO1xuICAgIGRzdFszXSA9IG1bNF07XG4gICAgZHN0WzRdID0gbVs1XTtcbiAgICBkc3RbNV0gPSBtWzZdO1xuICAgIGRzdFs2XSA9IG1bOF07XG4gICAgZHN0WzddID0gbVs5XTtcbiAgICBkc3RbOF0gPSBtWzEwXTtcbiAgICByZXR1cm4gZHN0O1xuICB9LFxuICB0b1N0cmluZyhtKSB7XG4gICAgcmV0dXJuIG0ucmVkdWNlKChhY2MsIGVsLCBpZHgpID0+XG4gICAgICBpZHggJSA0ID09PSAwID8gKGFjYyArPSBcIlxcblwiICsgZWwpIDogKGFjYyArPSBcIiBcIiArIGVsKVxuICAgICk7XG4gIH0sXG4gIHRyYW5zcG9zZTogZnVuY3Rpb24gKG0pIHtcbiAgICByZXR1cm4gW1xuICAgICAgbVswXSxcbiAgICAgIG1bNF0sXG4gICAgICBtWzhdLFxuICAgICAgbVsxMl0sXG4gICAgICBtWzFdLFxuICAgICAgbVs1XSxcbiAgICAgIG1bOV0sXG4gICAgICBtWzEzXSxcbiAgICAgIG1bMl0sXG4gICAgICBtWzZdLFxuICAgICAgbVsxMF0sXG4gICAgICBtWzE0XSxcbiAgICAgIG1bM10sXG4gICAgICBtWzddLFxuICAgICAgbVsxMV0sXG4gICAgICBtWzE1XSxcbiAgICBdO1xuICB9LFxuICBmcm9tUXVhdGVybmlvbjogKHEpID0+IHtcbiAgICBjb25zdCBhMTEgPSAxIC0gMiAqIChxWzFdICogcVsxXSArIHFbMl0gKiBxWzJdKTtcbiAgICBjb25zdCBhMTIgPSAyICogKHFbMF0gKiBxWzFdIC0gcVsyXSAqIHFbM10pO1xuICAgIGNvbnN0IGExMyA9IDIgKiAocVswXSAqIHFbMl0gKyBxWzFdICogcVszXSk7XG4gICAgY29uc3QgYTIxID0gMiAqIChxWzBdICogcVsxXSArIHFbMl0gKiBxWzNdKTtcbiAgICBjb25zdCBhMjIgPSAxIC0gMiAqIChxWzBdICogcVswXSArIHFbMl0gKiBxWzJdKTtcbiAgICBjb25zdCBhMjMgPSAyICogKHFbMV0gKiBxWzJdIC0gcVswXSAqIHFbM10pO1xuICAgIGNvbnN0IGEzMSA9IDIgKiAocVswXSAqIHFbMl0gLSBxWzFdICogcVszXSk7XG4gICAgY29uc3QgYTMyID0gMiAqIChxWzFdICogcVsyXSArIHFbMF0gKiBxWzNdKTtcbiAgICBjb25zdCBhMzMgPSAxIC0gMiAqIChxWzBdICogcVswXSArIHFbMV0gKiBxWzFdKTtcbiAgICByZXR1cm4gW2ExMSwgYTEyLCBhMTMsIDAsIGEyMSwgYTIyLCBhMjMsIDAsIGEzMSwgYTMyLCBhMzMsIDAsIDAsIDAsIDAsIDFdO1xuICB9LFxuICByb3RhdGlvbih4LCB5LCB6KSB7XG4gICAgcmV0dXJuIHRoaXMueFJvdGF0ZSh0aGlzLnlSb3RhdGUodGhpcy56Um90YXRpb24oeiksIHkpLCB4KTtcbiAgfSxcbiAgcm90YXRpb25Gcm9tTm9ybWFsKG4pIHtcbiAgICByZXR1cm4gdGhpcy5yb3RhdGlvbihNYXRoLmFjb3MoblsxXSksIE1hdGguYWNvcyhuWzJdKSwgTWF0aC5hY29zKG5bMF0pKTtcbiAgfSxcbiAgZGV0ZXJtaW5hdGUobSkge1xuICAgIHZhciBtMDAgPSBtWzAgKiA0ICsgMF07XG4gICAgdmFyIG0wMSA9IG1bMCAqIDQgKyAxXTtcbiAgICB2YXIgbTAyID0gbVswICogNCArIDJdO1xuICAgIHZhciBtMDMgPSBtWzAgKiA0ICsgM107XG4gICAgdmFyIG0xMCA9IG1bMSAqIDQgKyAwXTtcbiAgICB2YXIgbTExID0gbVsxICogNCArIDFdO1xuICAgIHZhciBtMTIgPSBtWzEgKiA0ICsgMl07XG4gICAgdmFyIG0xMyA9IG1bMSAqIDQgKyAzXTtcbiAgICB2YXIgbTIwID0gbVsyICogNCArIDBdO1xuICAgIHZhciBtMjEgPSBtWzIgKiA0ICsgMV07XG4gICAgdmFyIG0yMiA9IG1bMiAqIDQgKyAyXTtcbiAgICB2YXIgbTIzID0gbVsyICogNCArIDNdO1xuICAgIHZhciBtMzAgPSBtWzMgKiA0ICsgMF07XG4gICAgdmFyIG0zMSA9IG1bMyAqIDQgKyAxXTtcbiAgICB2YXIgbTMyID0gbVszICogNCArIDJdO1xuICAgIHZhciBtMzMgPSBtWzMgKiA0ICsgM107XG4gICAgdmFyIHRtcF8wICA9IG0yMiAqIG0zMztcbiAgICB2YXIgdG1wXzEgID0gbTMyICogbTIzO1xuICAgIHZhciB0bXBfMiAgPSBtMTIgKiBtMzM7XG4gICAgdmFyIHRtcF8zICA9IG0zMiAqIG0xMztcbiAgICB2YXIgdG1wXzQgID0gbTEyICogbTIzO1xuICAgIHZhciB0bXBfNSAgPSBtMjIgKiBtMTM7XG4gICAgdmFyIHRtcF82ICA9IG0wMiAqIG0zMztcbiAgICB2YXIgdG1wXzcgID0gbTMyICogbTAzO1xuICAgIHZhciB0bXBfOCAgPSBtMDIgKiBtMjM7XG4gICAgdmFyIHRtcF85ICA9IG0yMiAqIG0wMztcbiAgICB2YXIgdG1wXzEwID0gbTAyICogbTEzO1xuICAgIHZhciB0bXBfMTEgPSBtMTIgKiBtMDM7XG5cbiAgICB2YXIgdDAgPSAodG1wXzAgKiBtMTEgKyB0bXBfMyAqIG0yMSArIHRtcF80ICogbTMxKSAtXG4gICAgICAgICh0bXBfMSAqIG0xMSArIHRtcF8yICogbTIxICsgdG1wXzUgKiBtMzEpO1xuICAgIHZhciB0MSA9ICh0bXBfMSAqIG0wMSArIHRtcF82ICogbTIxICsgdG1wXzkgKiBtMzEpIC1cbiAgICAgICAgKHRtcF8wICogbTAxICsgdG1wXzcgKiBtMjEgKyB0bXBfOCAqIG0zMSk7XG4gICAgdmFyIHQyID0gKHRtcF8yICogbTAxICsgdG1wXzcgKiBtMTEgKyB0bXBfMTAgKiBtMzEpIC1cbiAgICAgICAgKHRtcF8zICogbTAxICsgdG1wXzYgKiBtMTEgKyB0bXBfMTEgKiBtMzEpO1xuICAgIHZhciB0MyA9ICh0bXBfNSAqIG0wMSArIHRtcF84ICogbTExICsgdG1wXzExICogbTIxKSAtXG4gICAgICAgICh0bXBfNCAqIG0wMSArIHRtcF85ICogbTExICsgdG1wXzEwICogbTIxKTtcblxuICAgIHJldHVybiAxLjAgLyAobTAwICogdDAgKyBtMTAgKiB0MSArIG0yMCAqIHQyICsgbTMwICogdDMpO1xuICB9LFxuICBcbiAgZGVjb21wb3NlKG1hdCkge1xuICAgIGxldCBzeCA9IG5vcm0obWF0LnNsaWNlKDAsIDMpKTtcbiAgICBjb25zdCBzeSA9IG5vcm0obWF0LnNsaWNlKDQsIDcpKTtcbiAgICBjb25zdCBzeiA9IG5vcm0obWF0LnNsaWNlKDgsIDExKSk7XG5cbiAgICBcbiAgICBjb25zdCBkZXQgPSB0aGlzLmRldGVybWluYXRlKG1hdCk7XG4gICAgaWYgKGRldCA8IDApIHtcbiAgICAgIHN4ID0gLXN4O1xuICAgIH1cbiAgICBjb25zdCB0cmFuc2xhdGlvbiA9IFtdXG4gICAgY29uc3Qgc2NhbGUgPSBbXVxuICAgIGNvbnN0IFJtYXRyaXggPSBbLi4ubWF0XVxuICAgIHRyYW5zbGF0aW9uWzBdID0gbWF0WzEyXTtcbiAgICB0cmFuc2xhdGlvblsxXSA9IG1hdFsxM107XG4gICAgdHJhbnNsYXRpb25bMl0gPSBtYXRbMTRdO1xuXG5cbiAgICBcblxuICAgIGNvbnN0IGludlNYID0gMSAvIHN4O1xuICAgIGNvbnN0IGludlNZID0gMSAvIHN5O1xuICAgIGNvbnN0IGludlNaID0gMSAvIHN6O1xuXG4gICAgUm1hdHJpeFswXSAqPSBpbnZTWDtcbiAgICBSbWF0cml4WzFdICo9IGludlNYO1xuICAgIFJtYXRyaXhbMl0gKj0gaW52U1g7XG5cbiAgICBSbWF0cml4WzRdICo9IGludlNZO1xuICAgIFJtYXRyaXhbNV0gKj0gaW52U1k7XG4gICAgUm1hdHJpeFs2XSAqPSBpbnZTWTtcblxuICAgIFJtYXRyaXhbOF0gKj0gaW52U1o7XG4gICAgUm1hdHJpeFs5XSAqPSBpbnZTWjtcbiAgICBSbWF0cml4WzEwXSAqPSBpbnZTWjtcblxuXG5cbiAgICBzY2FsZVswXSA9IHN4O1xuICAgIHNjYWxlWzFdID0gc3k7XG4gICAgc2NhbGVbMl0gPSBzejtcbiAgICByZXR1cm4ge3RyYW5zbGF0aW9uLCBSbWF0cml4LCBzY2FsZSB9XG4gIH1cbn07XG5cblxubW9kdWxlLmV4cG9ydHMgPSBtNDtcbiIsImNvbnN0IG00ID0gcmVxdWlyZShcIi4vbTRcIik7XG5jbGFzcyBUUlMge1xuICBjb25zdHJ1Y3Rvcih0cmFuc2xhdGlvbiwgcm90YXRpb24sIHNjYWxlKSB7XG4gICAgdGhpcy50cmFuc2xhdGlvbiA9IHRyYW5zbGF0aW9uO1xuICAgIHRoaXMucm90YXRpb24gPSByb3RhdGlvbjtcbiAgICB0aGlzLnNjYWxlID0gc2NhbGU7XG4gIH1cbiAgZ2V0TWF0cml4KG0pIHtcbiAgICBsZXQgZHN0ID0gbSB8fCBtNC5pZGVudGl0eSgpO1xuICAgIHZhciB0ID0gdGhpcy50cmFuc2xhdGlvbjtcbiAgICB2YXIgciA9IHRoaXMucm90YXRpb247XG4gICAgdmFyIHMgPSB0aGlzLnNjYWxlO1xuICAgIGNvbnN0IHNpbiA9IE1hdGguc2luKHJbM10gLyAyKTtcbiAgICBjb25zdCBjb3MgPSBNYXRoLmNvcyhyWzNdIC8gMik7XG4gICAgZHN0ID0gbTQudHJhbnNsYXRlKGRzdCwgdFswXSwgdFsxXSwgdFsyXSk7XG5cbiAgICBkc3QgPSBtNC5tdWx0aXBseShkc3QsIG00LmZyb21RdWF0ZXJuaW9uKHIpKTtcblxuICAgIGRzdCA9IG00LnNjYWxlKGRzdCwgc1swXSwgc1sxXSwgc1syXSk7XG4gICAgcmV0dXJuIGRzdDtcbiAgfVxuICBnZXRSTWF0cml4KCkge1xuICAgIGxldCBkc3QgPSBtNC5pZGVudGl0eSgpO1xuICAgIHZhciByID0gdGhpcy5yb3RhdGlvbjtcbiAgICBkc3QgPSBtNC54Um90YXRlKGRzdCwgclswXSk7XG4gICAgZHN0ID0gbTQueVJvdGF0ZShkc3QsIHJbMV0pO1xuICAgIGRzdCA9IG00LnpSb3RhdGUoZHN0LCByWzJdKTtcbiAgICByZXR1cm4gZHN0O1xuICB9XG4gIGdldFRSbWF0cml4KCkge1xuICAgIGNvbnN0IHQgPSB0aGlzLnRyYW5zbGF0aW9uO1xuICAgIGNvbnN0IHIgPSB0aGlzLnJvdGF0aW9uO1xuXG4gICAgbGV0IG0gPSBtNC50cmFuc2xhdGlvbiggdFswXSwgdFsxXSwgdFsyXSk7XG5cbiAgICBtID0gbTQueFJvdGF0ZShtLCByWzBdKTtcbiAgICBtID0gbTQueVJvdGF0ZShtLCByWzFdKTtcbiAgICBtID0gbTQuelJvdGF0ZShtLCByWzJdKTtcbiAgICByZXR1cm4gbVxuICB9XG59XG5jbGFzcyBOb2RlIHtcbiAgY29uc3RydWN0b3IobmFtZSwgdHJzID0gbmV3IFRSUygpKSB7XG4gICAgdGhpcy53b3JsZE1hdHJpeCA9IG00LmlkZW50aXR5KCk7XG4gICAgdGhpcy5wYXJlbnQgPSBudWxsO1xuICAgIHRoaXMuY2hpbGRyZW4gPSBbXTtcbiAgICB0aGlzLnRycyA9IHRycztcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMucGFydHMgPSBbXTtcbiAgfVxuICBzZXRQYXJlbnQocGFyZW50KSB7XG4gICAgaWYgKHRoaXMucGFyZW50KSB7XG4gICAgICBjb25zdCBuZHggPSB0aGlzLnBhcmVudC5jaGlsZHJlbi5pbmRleE9mKHRoaXMpO1xuICAgICAgaWYgKG5keCA+PSAwKSB7XG4gICAgICAgIHRoaXMucGFyZW50LmNoaWxkcmVuLnNwbGljZShuZHgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAocGFyZW50KSB7XG4gICAgICBwYXJlbnQuY2hpbGRyZW4ucHVzaCh0aGlzKTtcbiAgICB9XG4gICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gIH1cbiAgdXBkYXRlV29ybGRNYXRyaXgocGFyZW50V29ybGRNYXRyaXgpIHtcbiAgICBsZXQgbWF0cml4ID0gdGhpcy50cnMuZ2V0TWF0cml4KCk7XG4gICAgaWYgKHBhcmVudFdvcmxkTWF0cml4KSB7XG4gICAgICBtYXRyaXggPSBtNC5tdWx0aXBseShwYXJlbnRXb3JsZE1hdHJpeCwgbWF0cml4KTtcbiAgICB9XG4gICAgdGhpcy53b3JsZE1hdHJpeCA9IG1hdHJpeDtcbiAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICBjaGlsZC51cGRhdGVXb3JsZE1hdHJpeChtYXRyaXgpO1xuICAgIH0pO1xuICB9XG4gIHVwZGF0ZVBhcnRzTGlzdCgpIHtcbiAgICBjb25zdCBpdGVyID0gKG5vZGUsIGFycikgPT4ge1xuICAgICAgYXJyLnB1c2gobm9kZSk7XG4gICAgICBub2RlLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiBpdGVyKGNoaWxkLCBhcnIpKTtcbiAgICB9O1xuICAgIGl0ZXIodGhpcywgdGhpcy5wYXJ0cyk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7IE5vZGUsIFRSUyB9O1xuIiwiY29uc3QgZG90ID0gKGEsIGIpID0+IGFbMF0gKiBiWzBdICsgYVsxXSAqIGJbMV0gKyBhWzJdICogYlsyXVxuY29uc3QgY3Jvc3MgPSAoYSwgYikgPT4ge1xuICAgIGNvbnN0IHJlcyA9IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhWzFdICogYlsyXSAtIGJbMV0gKiBhWzJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFbMl0gKiBiWzBdIC0gYlsyXSAqIGFbMF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYVswXSAqIGJbMV0gLSBiWzBdICogYVsxXSAgICBcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgIGlmKGlzTmFOdmVjKGEpIHx8IGlzTmFOdmVjKGIpKXtcbiAgICAgICAgY29uc29sZS5sb2coYSwgYilcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdhcmdzIGlzIE5hTiA6ICwnKVxuICAgIH1cbiAgICByZXR1cm4gcmVzXG59ICAgICAgICAgIFxuY29uc3Qgc2NhbGUgPSAoYSwgc2NhbGFyKSA9PiBbYVswXSAqIHNjYWxhciwgYVsxXSAqIHNjYWxhciwgYVsyXSAqIHNjYWxhcl1cbmNvbnN0IHN1bSA9IChhLCBiKSA9PiBbYVswXSArIGJbMF0sIGFbMV0gKyBiWzFdLCBhWzJdICsgYlsyXV1cbmNvbnN0IGRpZmYgPSAoYSwgYikgPT4gW2FbMF0gLSBiWzBdLCBhWzFdIC0gYlsxXSwgYVsyXSAtIGJbMl1dXG5jb25zdCBub3JtID0gYSA9PiBNYXRoLnNxcnQoYVswXSAqIGFbMF0gKyBhWzFdICogYVsxXSArIGFbMl0gKiBhWzJdKVxuY29uc3Qgbm9ybVNxID0gYSA9PiBhWzBdICogYVswXSArIGFbMV0gKiBhWzFdICsgYVsyXSAqIGFbMl1cbmNvbnN0IG5vcm1hbGl6ZSA9IGEgPT4ge1xuICAgIGNvbnN0IGxlbmd0aCA9IG5vcm0oYSlcbiAgICBpZihsZW5ndGggPT09IDApIHJldHVybiBhXG4gICAgcmV0dXJuIFthWzBdIC8gbGVuZ3RoLCBhWzFdIC8gbGVuZ3RoLCBhWzJdIC8gbGVuZ3RoXVxufVxuY29uc3QgaXNOdWxsID0gYSA9PiBhWzBdKmFbMF0gKyBhWzFdICogYVsxXSArIGFbMl0gKiBhWzJdID09PSAwXG5cbmNvbnN0IGlzRXF1YWwgPSAoYSwgYikgPT4gYVswXSA9PSBiWzBdICYmIGFbMV0gPT0gYlsxXSAmJiBhWzJdID09IGJbMl1cbmNvbnN0IGNoa1YgPSAodikgPT57XG4gICAgaWYoaXNOYU52ZWModikpe1xuICAgICAgICBjb25zb2xlLmxvZyh2KVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05hTiBWZWMnKVxuICAgIH1cbn1cblxuY29uc3QgZmluZEZ1cnRoZXN0UG9pbnQgPSAoYSxiLGMpID0+IHtcbiAgICBjb25zdCBBQiA9IG5vcm1TcShkaWZmKGEsIGIpKVxuICAgIGNvbnN0IEFDID0gbm9ybVNxKGRpZmYoYSwgYykpXG4gICAgY29uc3QgQkMgPSBub3JtU3EoZGlmZihjLCBiKSlcbiAgICBpZihBQiA8IEFDKXtcbiAgICAgICAgaWYoQUIgPCBCQykgcmV0dXJuIGNcbiAgICAgICAgcmV0dXJuIGJcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgICAgaWYoQUMgPCBCQykgcmV0dXJuIGJcbiAgICAgICAgZWxzZSByZXR1cm4gYVxuICAgIH1cbn1cbmNvbnN0IGRpc3RhbmNlRnJvbUxpbmUgPSAoYSxiLGMpID0+e1xuICAgIGNvbnN0IGFjID0gZGlmZihjLCBhKVxuICAgIGNvbnN0IGFiID0gZGlmZihiLCBhKVxuICAgIGNvbnN0IGsgPSBkb3QoYWIsYWMpIC8gbm9ybVNxKGFiKVxuICAgIGNvbnN0IGggPSBzdW0oYSwgc2NhbGUoYWIsIGspKVxuICAgIHJldHVybiBub3JtU3EoZGlmZihjLCBoKSlcbn1cblxuXG5jb25zdCBpc05hTnZlYyA9IHYgPT4gaXNOYU4odlswXSArIHZbMV0gKyB2WzJdKSB8fCAodlswXSArIHZbMV0gKyB2WzJdID09PSBJbmZpbml0eSkgfHwgKHZbMF0gKyB2WzFdICsgdlsyXSA9PT0gLUluZmluaXR5KVxuY29uc3QgX2RvdCA9IChhLCBiKSA9PntcbiAgICBpZihpc05hTnZlYyhhKSB8fCBpc05hTnZlYyhiKSl7XG4gICAgICAgIGNvbnNvbGUubG9nKGEsIGIpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignYXJncyBpcyBOYU4gOiAsJylcbiAgICB9XG4gICAgcmV0dXJuIGRvdChhLCBiKVxufVxuY29uc3QgX2Nyb3NzID0gKGEsIGIpID0+e1xuICAgIGlmKGlzTmFOdmVjKGEpIHx8IGlzTmFOdmVjKGIpKXtcbiAgICAgICAgY29uc29sZS5sb2coYSwgYilcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdhcmdzIGlzIE5hTiA6ICwnKVxuICAgIH1cbiAgICBjb25zdCByZXMgPSBjcm9zcyhhLCBiKSAgXG4gICAgaWYoaXNOYU52ZWMocmVzKSl7XG4gICAgICAgIGNvbnNvbGUubG9nKGEsIGIpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignZ2V0IE5hTiA6ICwnKVxuICAgIH1cbiAgICByZXR1cm4gcmVzIFxufVxuY29uc3QgX3N1bSA9IChhLCBiKSA9PntcbiAgICBpZihpc05hTnZlYyhhKSB8fCBpc05hTnZlYyhiKSl7XG4gICAgICAgIGNvbnNvbGUubG9nKGEsIGIpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignYXJncyBpcyBOYU4gOiAsJylcbiAgICB9XG4gICAgY29uc3QgcmVzID0gc3VtKGEsIGIpICBcbiAgICBpZihpc05hTnZlYyhyZXMpKXtcbiAgICAgICAgY29uc29sZS5sb2coYSwgYilcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdnZXQgTmFOIDogLCcpXG4gICAgfVxuICAgIHJldHVybiByZXMgXG59XG5jb25zdCBfZGlmZiA9IChhLCBiKSA9PntcbiAgICBpZihpc05hTnZlYyhhKSB8fCBpc05hTnZlYyhiKSl7XG4gICAgICAgIGNvbnNvbGUubG9nKGEsIGIpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignYXJncyBpcyBOYU4gOiAsJylcbiAgICB9XG4gICAgY29uc3QgcmVzID0gZGlmZihhLCBiKSAgXG4gICAgaWYoaXNOYU52ZWMocmVzKSl7XG4gICAgICAgIGNvbnNvbGUubG9nKGEsIGIpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignZ2V0IE5hTiA6ICwnKVxuICAgIH1cbiAgICByZXR1cm4gcmVzICAgIFxufVxuY29uc3QgX3NjYWxlID0gKGEsIHNjYWxhcikgPT57XG4gICAgaWYoaXNOYU52ZWMoYSkgfHwgaXNOYU4oc2NhbGFyKSl7XG4gICAgICAgIGNvbnNvbGUubG9nKGEsIHNjYWxhcilcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdhcmdzIGlzIE5hTiA6ICwnKVxuICAgIH1cbiAgICBjb25zdCByZXMgPSBzY2FsZShhLCBzY2FsYXIpICBcbiAgICBpZihpc05hTnZlYyhyZXMpKXtcbiAgICAgICAgY29uc29sZS5sb2coYSwgc2NhbGFyKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2dldCBOYU4gOiAsJylcbiAgICB9XG4gICAgcmV0dXJuIHJlcyBcbn1cbmNvbnN0IF9ub3JtYWxpemUgPSBhID0+e1xuICAgIGlmKGlzTmFOdmVjKGEpKXtcbiAgICAgICAgY29uc29sZS5sb2coYSlcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdhcmdzIGlzIE5hTiA6ICwnKVxuICAgIH1cbiAgICBjb25zdCByZXMgPSBub3JtYWxpemUoYSkgIFxuICAgIGlmKGlzTmFOdmVjKHJlcykpe1xuICAgICAgICBjb25zb2xlLmxvZyhhKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2dldCBOYU4gOiAsJylcbiAgICB9XG4gICAgcmV0dXJuIHJlcyBcbn1cbm1vZHVsZS5leHBvcnRzID0ge2Noa1YsIGRvdCA6IF9kb3QsIGNyb3NzIDogX2Nyb3NzLCBzY2FsZSA6IF9zY2FsZSwgc3VtIDogX3N1bSwgZGlmZiA6IF9kaWZmLCBub3JtYWxpemUgOiBfbm9ybWFsaXplLCBub3JtLCBub3JtU3EsIGlzTnVsbCwgZmluZEZ1cnRoZXN0UG9pbnQsIGRpc3RhbmNlRnJvbUxpbmUsIGlzRXF1YWx9IiwiaW1wb3J0IHttMywgdmVjdG9yLCBtNH0gZnJvbSAnbWF0aCdcclxuY29uc3QgS0VZUyA9IHtcclxuICAgICd3JyA6ICdtb3ZlRm9yd2FyZCcsXHJcbiAgICAncycgOiAnbW92ZUJhY2t3YXJkJyxcclxuICAgICdhJyA6ICdtb3ZlTGVmdCcsXHJcbiAgICAnZCcgOiAnbW92ZVJpZ2h0J1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRyb2xsYWJsZXtcclxuICAgIGNvbnN0cnVjdG9yKHJpZ2lkQm9keSl7XHJcblxyXG4gICAgICAgIHRoaXMucmlnaWRCb2R5ID0gcmlnaWRCb2R5XHJcbiAgICAgICAgdGhpcy5rZXlJbnB1dCA9IG51bGxcclxuICAgICAgICB0aGlzLm1vdXNlSW5wdXQgPSBudWxsXHJcbiAgICAgICAgdGhpcy5yb3RhdGlvblggPSAwXHJcbiAgICAgICAgdGhpcy5yb3RhdGlvblkgPSAwXHJcbiAgICAgICAgdGhpcy5kZWx0YVJZID0gMFxyXG4gICAgICAgIHRoaXMuY2FtUG9zID0gWzAsMCwxMF1cclxuICAgICAgICB0aGlzLmNhbVJvdCA9IG0zLmlkZW50aXR5KClcclxuICAgIH1cclxuICAgIGxpc3Rlbk1vdXNlKG1vdXNlSW5wdXQpe1xyXG4gICAgICAgIHRoaXMubW91c2VJbnB1dCA9IG1vdXNlSW5wdXRcclxuICAgICAgICBtb3VzZUlucHV0Lm9uKCdtb3ZlJywgKFtkZWx0YVgsIGRlbHRhWV0pPT57XHJcbiAgICAgICAgICAgIHRoaXMucm90YXRpb25ZIC09IGRlbHRhWCAqIDAuMDA1O1xyXG4gICAgICAgICAgICB0aGlzLnJvdGF0aW9uWCAtPSBkZWx0YVkgKiAwLjAwNTtcclxuICAgICAgICAgICAgdGhpcy5yb3RhdGlvblggPSBNYXRoLm1heCgtTWF0aC5QSS8yLCBNYXRoLm1pbihNYXRoLlBJLzIsIHRoaXMucm90YXRpb25YKSlcclxuICAgICAgICAgICAgdGhpcy5kZWx0YVJZID0gZGVsdGFYICogMC4wMDU7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBsaXN0ZW5LZXlib2FyZChrZXlJbnB1dCl7XHJcbiAgICAgICAgdGhpcy5rZXlJbnB1dCA9IGtleUlucHV0XHJcbiAgICB9XHJcbiAgICB0aWNrKCl7XHJcblxyXG4gICAgICAgIGZvcihjb25zdCBrZXkgb2YgdGhpcy5rZXlJbnB1dC5rZXlzKXtcclxuICAgICAgICAgICAgY29uc3QgYWN0aW9uTmFtZSA9IEtFWVNba2V5XVxyXG4gICAgICAgICAgICBpZihhY3Rpb25OYW1lKXtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFjdGlvbiA9IHRoaXNbYWN0aW9uTmFtZV0uYmluZCh0aGlzKVxyXG4gICAgICAgICAgICAgICAgYWN0aW9uKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgbSA9IG0zLnlSb3RhdGlvbih0aGlzLnJvdGF0aW9uWSlcclxuICAgICAgICB0aGlzLnJpZ2lkQm9keS5yb3RhdGUoWzAsIC10aGlzLmRlbHRhUlksMF0pXHJcbiAgICAgICAgdGhpcy5kZWx0YVJZID0gMFxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHBvcyA9IFsuLi50aGlzLnJpZ2lkQm9keS5jb2xsaWRlci5wb3NdXHJcbiAgICAgICAgbGV0IF9tID0gbTQudHJhbnNsYXRpb24ocG9zWzBdLCBwb3NbMV0rMywgcG9zWzJdKVxyXG4gICAgICAgIF9tID0gbTQubXVsdGlwbHkoX20sIG00Lm0zVG9tNCh0aGlzLnJpZ2lkQm9keS5jb2xsaWRlci5SbWF0cml4KSlcclxuICAgICAgICBfbSA9IG00LnhSb3RhdGUoX20sIHRoaXMucm90YXRpb25YKVxyXG4gICAgICAgIF9tID0gbTQudHJhbnNsYXRlKF9tLCAuLi50aGlzLmNhbVBvcylcclxuICAgICAgICB0aGlzLmNhbU1hdHJpeCA9IF9tXHJcbiAgICAgXHJcbiAgICB9XHJcbiAgICBtb3ZlKGRpcil7XHJcbiAgICAgICAgY29uc3QgbSA9IHRoaXMucmlnaWRCb2R5LmNvbGxpZGVyLlJtYXRyaXhcclxuICAgICAgICB0aGlzLnJpZ2lkQm9keS5hcHBseUltcHVsc2UobTMudHJhbnNmb3JtUG9pbnQobSwgZGlyKSwgWzAsMCwwXSlcclxuICAgIH1cclxuICAgIG1vdmVGb3J3YXJkKCl7XHJcbiAgICAgICAgdGhpcy5tb3ZlKFswLDAsIC0xXSlcclxuICAgIH1cclxuICAgIG1vdmVCYWNrd2FyZCgpe1xyXG4gICAgICAgIHRoaXMubW92ZShbMCwwLCAxXSlcclxuICAgIH1cclxuICAgIG1vdmVMZWZ0KCl7XHJcbiAgICAgICAgdGhpcy5tb3ZlKFstMSwwLCAwXSlcclxuICAgIH1cclxuICAgIG1vdmVSaWdodCgpe1xyXG4gICAgICAgIHRoaXMubW92ZShbMSwwLCAwXSlcclxuICAgIH1cclxufVxyXG5jbGFzcyBOb2NsaXB7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHRoaXMua2V5SW5wdXQgPSBudWxsXHJcbiAgICAgICAgdGhpcy5tb3VzZUlucHV0ID0gbnVsbFxyXG4gICAgICAgIHRoaXMucm90YXRpb25YID0gMFxyXG4gICAgICAgIHRoaXMucm90YXRpb25ZID0gMFxyXG4gICAgICAgIHRoaXMuZGVsdGFSWSA9IDBcclxuICAgICAgICB0aGlzLmNhbVBvcyA9IFswLDAsMTBdXHJcbiAgICAgICAgdGhpcy5jYW1Sb3QgPSBtMy5pZGVudGl0eSgpXHJcbiAgICB9XHJcbiAgICBsaXN0ZW5Nb3VzZShtb3VzZUlucHV0KXtcclxuICAgICAgICB0aGlzLm1vdXNlSW5wdXQgPSBtb3VzZUlucHV0XHJcbiAgICAgICAgbW91c2VJbnB1dC5vbignbW92ZScsIChbZGVsdGFYLCBkZWx0YVldKT0+e1xyXG4gICAgICAgICAgICB0aGlzLnJvdGF0aW9uWSAtPSBkZWx0YVggKiAwLjAwNTtcclxuICAgICAgICAgICAgdGhpcy5yb3RhdGlvblggLT0gZGVsdGFZICogMC4wMDU7XHJcbiAgICAgICAgICAgIHRoaXMucm90YXRpb25YID0gTWF0aC5tYXgoLU1hdGguUEkvMiwgTWF0aC5taW4oTWF0aC5QSS8yLCB0aGlzLnJvdGF0aW9uWCkpXHJcbiAgICAgICAgICAgIHRoaXMuZGVsdGFSWSA9IGRlbHRhWCAqIDAuMDA1O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgbGlzdGVuS2V5Ym9hcmQoa2V5SW5wdXQpe1xyXG4gICAgICAgIHRoaXMua2V5SW5wdXQgPSBrZXlJbnB1dFxyXG4gICAgfVxyXG4gICAgdGljaygpe1xyXG5cclxuICAgICAgICBmb3IoY29uc3Qga2V5IG9mIHRoaXMua2V5SW5wdXQua2V5cyl7XHJcbiAgICAgICAgICAgIGNvbnN0IGFjdGlvbk5hbWUgPSBLRVlTW2tleV1cclxuICAgICAgICAgICAgaWYoYWN0aW9uTmFtZSl7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhY3Rpb24gPSB0aGlzW2FjdGlvbk5hbWVdLmJpbmQodGhpcylcclxuICAgICAgICAgICAgICAgIGFjdGlvbigpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuY2FtTWF0cml4ID0gbTQudHJhbnNsYXRpb24oLi4udGhpcy5jYW1Qb3MpXHJcbiAgICAgICAgdGhpcy5jYW1NYXRyaXggPSBtNC54Um90YXRlKG00LnlSb3RhdGUodGhpcy5jYW1NYXRyaXgsIHRoaXMucm90YXRpb25ZKSwgdGhpcy5yb3RhdGlvblgpXHJcbiAgICAgXHJcbiAgICB9XHJcbiAgICBtb3ZlKGRpcil7XHJcbiAgICAgICAgY29uc3QgbSA9IG00Lm00VG9tMyh0aGlzLmNhbU1hdHJpeClcclxuICAgICAgICB0aGlzLmNhbVBvcyA9IHZlY3Rvci5zdW0odGhpcy5jYW1Qb3MsIG0zLnRyYW5zZm9ybVBvaW50KG0sIGRpcikpXHJcbiAgICB9XHJcbiAgICBtb3ZlRm9yd2FyZCgpe1xyXG4gICAgICAgIHRoaXMubW92ZShbMCwwLCAtMV0pXHJcbiAgICB9XHJcbiAgICBtb3ZlQmFja3dhcmQoKXtcclxuICAgICAgICB0aGlzLm1vdmUoWzAsMCwgMV0pXHJcbiAgICB9XHJcbiAgICBtb3ZlTGVmdCgpe1xyXG4gICAgICAgIHRoaXMubW92ZShbLTEsMCwgMF0pXHJcbiAgICB9XHJcbiAgICBtb3ZlUmlnaHQoKXtcclxuICAgICAgICB0aGlzLm1vdmUoWzEsMCwgMF0pXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IHtOb2NsaXAsIENvbnRyb2xsYWJsZX0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBLZXlsb2dnZXIge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5rZXlzID0gbmV3IFNldCgpO1xyXG4gIH1cclxuICBsb2dEb3duKHsga2V5IH0pIHtcclxuICAgIHRoaXMua2V5cy5hZGQoa2V5KTtcclxuICB9XHJcbiAgbG9nVXAoeyBrZXkgfSkge1xyXG4gICAgdGhpcy5rZXlzLmRlbGV0ZShrZXkpO1xyXG4gIH1cclxuICBsaXN0ZW4oKSB7XHJcbiAgICBjb25zdCBsb2dEb3duID0gdGhpcy5sb2dEb3duLmJpbmQodGhpcyk7XHJcbiAgICBjb25zdCBsb2dVcCA9IHRoaXMubG9nVXAuYmluZCh0aGlzKTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGxvZ0Rvd24pO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGxvZ1VwKTtcclxuICAgIHRoaXMudW5zdWJzaWNyaWJlID0gKCkgPT4ge1xyXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBsb2dEb3duKTtcclxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGxvZ1VwKTtcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gXCIuLi9waHlzaWNzL2V2ZW50RW1pdHRlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW91c2VJbnB1dCBleHRlbmRzIEV2ZW50RW1pdHRlciB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5sYXN0WCA9IDA7XHJcbiAgICB0aGlzLmxhc3RZID0gMDtcclxuICAgIHRoaXMuZW5hYmxlID0gZmFsc2U7XHJcbiAgfVxyXG4gIGxvZ01vdmUoeyBvZmZzZXRYLCBvZmZzZXRZIH0pIHtcclxuICAgIGNvbnN0IGRlbHRhWCA9IG9mZnNldFggLSB0aGlzLmxhc3RYO1xyXG4gICAgdGhpcy5sYXN0WCA9IG9mZnNldFg7XHJcbiAgICBjb25zdCBkZWx0YVkgPSBvZmZzZXRZIC0gdGhpcy5sYXN0WTtcclxuICAgIHRoaXMubGFzdFkgPSBvZmZzZXRZO1xyXG4gICAgdGhpcy5lbWl0KFwibW92ZVwiLCBbZGVsdGFYLCBkZWx0YVldKTtcclxuICB9XHJcbiAgbGlzdGVuKCkge1xyXG4gICAgY29uc3QgbG9nTW92ZSA9IHRoaXMubG9nTW92ZS5iaW5kKHRoaXMpO1xyXG4gICAgY29uc3QgXyA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIGlmICh0aGlzLmVuYWJsZSkgbG9nTW92ZShlKTtcclxuICAgIH0uYmluZCh0aGlzKTtcclxuICAgIGNvbnN0IGRvd24gPSBmdW5jdGlvbiAoeyBvZmZzZXRYLCBvZmZzZXRZIH0pIHtcclxuICAgICAgdGhpcy5sYXN0WCA9IG9mZnNldFg7XHJcbiAgICAgIHRoaXMubGFzdFkgPSBvZmZzZXRZO1xyXG4gICAgICB0aGlzLmVuYWJsZSA9IHRydWU7XHJcbiAgICB9LmJpbmQodGhpcyk7XHJcbiAgICBjb25zdCB1cCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgdGhpcy5lbmFibGUgPSBmYWxzZTtcclxuICAgIH0uYmluZCh0aGlzKTtcclxuXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIF8pO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBkb3duKTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIHVwKTtcclxuICAgIHRoaXMudW5zdWJzY3JpYmUgPSAoKSA9PiB7XHJcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgXyk7XHJcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgZG93bik7XHJcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIHVwKTtcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiIsImxldCBkaXN0U3EgPSAoeCwgeSkgPT4ge1xyXG4gIHJldHVybiB4Lm1hcCgoZSwgaSkgPT4gZSAtIHlbaV0pLnJlZHVjZSgoYWNjLCBlKSA9PiAoYWNjICs9IGUgKiogMiksIDApO1xyXG59O1xyXG5cclxuY29uc3QgR2F1c3NTZWlkZWwgPSAoQSwgYiwgbiwgZXBzKSA9PiB7XHJcbiAgbGV0IHggPSBuZXcgQXJyYXkobikuZmlsbCgwKTtcclxuICBsZXQgY29udiA9IGZhbHNlLFxyXG4gICAgbWF4SXRlciA9IDY0O1xyXG4gIGxldCB4X25ldyA9IFtdO1xyXG4gIHdoaWxlICghY29udiAmJiBtYXhJdGVyID4gMCkge1xyXG4gICAgbWF4SXRlci0tO1xyXG4gICAgeF9uZXcgPSBbLi4ueF07XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xyXG4gICAgICBsZXQgcyA9IDA7XHJcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgaTsgaisrKSB7XHJcbiAgICAgICAgcyArPSBBW2kgKiBuICsgal0gKiB4X25ld1tqXTtcclxuICAgICAgfVxyXG4gICAgICBmb3IgKGxldCBqID0gaSArIDE7IGogPCBuOyBqKyspIHtcclxuICAgICAgICBzICs9IEFbaSAqIG4gKyBqXSAqIHhbal07XHJcbiAgICAgIH1cclxuICAgICAgeF9uZXdbaV0gPSAoYltpXSAtIHMpIC8gQVtpICogbiArIGldO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnYgPSBkaXN0U3EoeCwgeF9uZXcpIDwgZXBzO1xyXG4gICAgeCA9IFsuLi54X25ld107XHJcbiAgfVxyXG4gIHJldHVybiB4X25ldztcclxufTtcclxuZXhwb3J0IHsgR2F1c3NTZWlkZWwgfTtcclxuIiwiaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSBcIi4vZXZlbnRFbWl0dGVyXCI7XHJcbmltcG9ydCB7IG0zLCB2ZWN0b3IgfSBmcm9tIFwibWF0aFwiO1xyXG5jb25zdCB7IGNyb3NzLCBzY2FsZSwgbm9ybSwgc3VtLCBkaWZmLCBjaGtWIH0gPSB2ZWN0b3I7XHJcbmNvbnN0IHByZWMgPSAwLjAwMDE7XHJcbmNvbnN0IHN0b3BUcmVzaG9sZCA9IDAuMDA1O1xyXG5jbGFzcyBSaWdpZEJvZHkgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xyXG4gIGNvbnN0cnVjdG9yKGNvbGxpZGVyKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5zdGF0aWMgPSBmYWxzZTtcclxuICAgIHRoaXMuY29sbGlkZXIgPSBjb2xsaWRlcjtcclxuICAgIHRoaXMubWFzcyA9IDE7XHJcbiAgICB0aGlzLmludmVyc2VNYXNzID0gMSAvIHRoaXMubWFzcztcclxuICAgIHRoaXMudmVsb2NpdHkgPSBbMCwgMCwgMF07XHJcbiAgICB0aGlzLnBzZXVkb1ZlbG9jaXR5ID0gWzAsIDAsIDBdO1xyXG4gICAgdGhpcy5wc2V1ZG9Bbmd1bGFyViA9IFswLCAwLCAwXTtcclxuICAgIHRoaXMuYWNjZWxlcmF0aW9uID0gWzAsIDAsIDBdO1xyXG4gICAgdGhpcy5hbmd1bGFyViA9IFswLCAwLCAwXTtcclxuICAgIHRoaXMuaW52ZXJzZUluZXJ0aWEgPSBjb2xsaWRlci5nZXRJbnZlcnNlSW5lcnRpYVRlbnNvcih0aGlzLm1hc3MpO1xyXG4gICAgdGhpcy5pZCA9IDE7XHJcbiAgICB0aGlzLmZyaWN0aW9uID0gMC41O1xyXG4gICAgdGhpcy5CVmxpbms7XHJcbiAgICB0aGlzLm9sZFZlbG9jaXR5ID0gbnVsbFxyXG4gICAgdGhpcy5ncm91cCA9IG51bGxcclxuICB9XHJcbiAgaW50ZWdyYXRlKGR0KSB7XHJcbiAgICBjb25zdCB7IGFjY2VsZXJhdGlvbiwgdmVsb2NpdHksIHRyYW5zbGF0aW9uIH0gPSB0aGlzO1xyXG5cclxuICAgIHRoaXMudHJhbnNsYXRlKHNjYWxlKHRoaXMudmVsb2NpdHksIGR0KSk7XHJcbiAgICBjb25zdCByb3RhdGlvbiA9IHNjYWxlKHRoaXMuYW5ndWxhclYsIGR0ICk7XHJcbiAgICBpZiAobm9ybShyb3RhdGlvbikgPiBzdG9wVHJlc2hvbGQpIHRoaXMucm90YXRlKHJvdGF0aW9uKTtcclxuICAgIGxldCBkZWx0YVNwZWVkID0gc2NhbGUodGhpcy5hY2NlbGVyYXRpb24sIGR0KTtcclxuICAgIHRoaXMudmVsb2NpdHkgPSBzdW0odGhpcy52ZWxvY2l0eSwgZGVsdGFTcGVlZCk7XHJcbiAgfVxyXG4gIGludGVncmF0ZVJLNChkdCl7XHJcbiAgICBjb25zdCB7YWNjZWxlcmF0aW9uLCB2ZWxvY2l0eSwgYW5ndWxhclZ9ID0gdGhpc1xyXG4gICAgXHJcblxyXG4gICAgY29uc3QgX3RyYW5zbGF0aW9uID0gc2NhbGUoc3VtKHZlbG9jaXR5LCBzY2FsZShhY2NlbGVyYXRpb24sIDIvMyAqIGR0KSksIGR0KVxyXG4gICAgY29uc3QgX3JvdGF0aW9uID0gc2NhbGUoYW5ndWxhclYsIGR0KVxyXG4gICAgY29uc3QgZGVsdGFWZWxvY2l0eSAgPSBzY2FsZShhY2NlbGVyYXRpb24sIGR0KVxyXG5cclxuICAgIGlmIChub3JtKF90cmFuc2xhdGlvbikgPiBzdG9wVHJlc2hvbGQpIHRoaXMudHJhbnNsYXRlKF90cmFuc2xhdGlvbik7XHJcbiAgICBcclxuICAgIGlmIChub3JtKF9yb3RhdGlvbikgPiBzdG9wVHJlc2hvbGQpIHRoaXMucm90YXRlKF9yb3RhdGlvbik7XHJcbiAgICB0aGlzLnZlbG9jaXR5ID0gc3VtKHZlbG9jaXR5LCBkZWx0YVZlbG9jaXR5KVxyXG4gIH1cclxuICBpbnRlZ3JhdGVQc2V1ZG9WZWxvY2l0aWVzKGR0KSB7XHJcbiAgICBjb25zdCB0cmFuc2xhdGlvbiA9IHNjYWxlKHRoaXMucHNldWRvVmVsb2NpdHksIGR0KTtcclxuXHJcbiAgICBjb25zdCByb3RhdGlvbiA9IHNjYWxlKHRoaXMucHNldWRvQW5ndWxhclYsIGR0ICk7XHJcbiAgICBpZiAobm9ybSh0cmFuc2xhdGlvbikgPiBzdG9wVHJlc2hvbGQpIHRoaXMudHJhbnNsYXRlKHRyYW5zbGF0aW9uKTtcclxuXHJcbiAgICBpZiAobm9ybShyb3RhdGlvbikgPiBzdG9wVHJlc2hvbGQpIHRoaXMucm90YXRlKHJvdGF0aW9uKTtcclxuXHJcbiAgICB0aGlzLnBzZXVkb1ZlbG9jaXR5ID0gWzAsIDAsIDBdO1xyXG4gICAgdGhpcy5wc2V1ZG9Bbmd1bGFyViA9IFswLCAwLCAwXTtcclxuICB9XHJcbiAgYWRkUHNldWRvVmVsb2NpdHkodikge1xyXG4gICAgdGhpcy5wc2V1ZG9WZWxvY2l0eSA9IHN1bSh0aGlzLnBzZXVkb1ZlbG9jaXR5LCB2KTtcclxuICB9XHJcbiAgYWRkUHNldWRvQW5ndWxhclYodikge1xyXG4gICAgdGhpcy5wc2V1ZG9Bbmd1bGFyViA9IHN1bSh0aGlzLnBzZXVkb0FuZ3VsYXJWLCB2KTtcclxuICB9XHJcbiAgaW50ZWdyYXRlVmVsb2NpdGllcyhkdCkge1xyXG4gICAgY29uc3QgdHJhbnNsYXRpb24gPSBzY2FsZSh0aGlzLnZlbG9jaXR5ICwgZHQpO1xyXG4gICAgaWYgKG5vcm0odHJhbnNsYXRpb24pID4gc3RvcFRyZXNob2xkKSB0aGlzLnRyYW5zbGF0ZSh0cmFuc2xhdGlvbik7XHJcbiAgICBjb25zdCByb3RhdGlvbiA9IHNjYWxlKHRoaXMuYW5ndWxhclYsIGR0ICk7XHJcbiAgICBpZiAobm9ybSh0cmFuc2xhdGlvbikgPiBzdG9wVHJlc2hvbGQpIHRoaXMucm90YXRlKHJvdGF0aW9uKTtcclxuICB9XHJcbiAgaW50ZWdyYXRlRm9yY2VzKGR0KSB7XHJcbiAgICBsZXQgZGVsdGFTcGVlZCA9IHNjYWxlKHRoaXMuYWNjZWxlcmF0aW9uLCBkdCk7XHJcbiAgICB0aGlzLmludFZlbG9jaXR5ID0gc3VtKHRoaXMudmVsb2NpdHksc2NhbGUodGhpcy5hY2NlbGVyYXRpb24sIDMvMyAqZHQpKVxyXG4gICAgdGhpcy52ZWxvY2l0eSA9IHN1bSh0aGlzLnZlbG9jaXR5LCBkZWx0YVNwZWVkKTtcclxuICB9XHJcbiAgdXBkYXRlSW52ZXJzZUluZXJ0aWEoKSB7XHJcbiAgICB0aGlzLmludmVyc2VJbmVydGlhID0gdGhpcy5jb2xsaWRlci5nZXRJbnZlcnNlSW5lcnRpYVRlbnNvcih0aGlzLm1hc3MpO1xyXG4gIH1cclxuICBnZXRJdGVuc29yKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuY29sbGlkZXIuZ2V0SW52ZXJzZUluZXJ0aWFUZW5zb3IodGhpcy5tYXNzKTtcclxuICB9XHJcbiAgc2V0TWFzcyhtYXNzKSB7XHJcbiAgICB0aGlzLm1hc3MgPSBtYXNzO1xyXG4gICAgdGhpcy5pbnZlcnNlTWFzcyA9IDEgLyB0aGlzLm1hc3M7XHJcbiAgfVxyXG4gIHRyYW5zbGF0ZSh0cmFuc2xhdGlvbikge1xyXG4gICAgdGhpcy5jb2xsaWRlci50cmFuc2xhdGUodHJhbnNsYXRpb24pO1xyXG5cclxuICAgIHRoaXMuZW1pdChcInVwZGF0ZVwiKTtcclxuICB9XHJcbiAgcm90YXRlKHJvdGF0aW9uKSB7XHJcbiAgICB0aGlzLmNvbGxpZGVyLnJvdGF0ZShyb3RhdGlvbik7XHJcblxyXG4gICAgdGhpcy5lbWl0KFwidXBkYXRlXCIpO1xyXG4gIH1cclxuXHJcbiAgYXBwbHlJbXB1bHNlKGltcHVsc2UsIHBvaW50KSB7XHJcbiAgICB0aGlzLnZlbG9jaXR5ID0gc3VtKHRoaXMudmVsb2NpdHksIHNjYWxlKGltcHVsc2UsIHRoaXMuaW52ZXJzZU1hc3MpKTtcclxuICAgIGNvbnN0IGFuZ3VsYXJJbXB1bHNlID0gbTMudHJhbnNmb3JtUG9pbnQoXHJcbiAgICAgIHRoaXMuaW52ZXJzZUluZXJ0aWEsXHJcbiAgICAgIGNyb3NzKHBvaW50LCBpbXB1bHNlKVxyXG4gICAgKTtcclxuICAgIHRoaXMuYW5ndWxhclYgPSBzdW0odGhpcy5hbmd1bGFyViwgYW5ndWxhckltcHVsc2UpO1xyXG4gIH1cclxuICBhcHBseVBzZXVkb0ltcHVsc2UoaW1wdWxzZSwgcG9pbnQpIHtcclxuICAgIHRoaXMucHNldWRvVmVsb2NpdHkgPSBzdW0oXHJcbiAgICAgIHRoaXMucHNldWRvVmVsb2NpdHksXHJcbiAgICAgIHNjYWxlKGltcHVsc2UsIHRoaXMuaW52ZXJzZU1hc3MpXHJcbiAgICApO1xyXG4gICAgY29uc3QgYW5ndWxhckltcHVsc2UgPSBtMy50cmFuc2Zvcm1Qb2ludChcclxuICAgICAgdGhpcy5pbnZlcnNlSW5lcnRpYSxcclxuICAgICAgY3Jvc3MocG9pbnQsIGltcHVsc2UpXHJcbiAgICApO1xyXG4gICAgdGhpcy5wc2V1ZG9Bbmd1bGFyViA9IHN1bSh0aGlzLnBzZXVkb0FuZ3VsYXJWLCBhbmd1bGFySW1wdWxzZSk7XHJcbiAgfVxyXG4gIGFkZFZlbG9jaXR5KHYpIHtcclxuICAgIGNoa1Yodik7XHJcbiAgICBpZiAodGhpcy5zdGF0aWMpIHJldHVybjtcclxuICAgIHRoaXMudmVsb2NpdHkgPSBzdW0odGhpcy52ZWxvY2l0eSwgdik7XHJcbiAgfVxyXG4gIGFkZEFuZ3VsYXJWKHYpIHtcclxuICAgIGNoa1Yodik7XHJcbiAgICBpZiAodGhpcy5zdGF0aWMpIHJldHVybjtcclxuICAgIHRoaXMuYW5ndWxhclYgPSBzdW0odGhpcy5hbmd1bGFyViwgdik7XHJcbiAgfVxyXG4gIGFkZEFjY2VsZXJhdGlvbih2KSB7XHJcbiAgICB0aGlzLmFjY2VsZXJhdGlvbiA9IHN1bSh0aGlzLmFjY2VsZXJhdGlvbiwgdik7XHJcbiAgfVxyXG4gIGdldEV4cGFuZGVkQUFCQigpIHtcclxuICAgIGNvbnN0IGFhYmIgPSB0aGlzLmNvbGxpZGVyLmdldEFBQkIoKTtcclxuICAgIGNvbnN0IHZlbG9jaXR5ID0gdGhpcy52ZWxvY2l0eTtcclxuICAgIGNvbnN0IHRyID0gW3ByZWMsIHByZWMsIHByZWNdO1xyXG4gICAgYWFiYi5taW4gPSBkaWZmKGFhYmIubWluLCB0cik7XHJcbiAgICBhYWJiLm1heCA9IHN1bShhYWJiLm1heCwgdHIpO1xyXG5cclxuICAgIC8qaWYodmVsb2NpdHlbMF0gPiAxMCkgYWFiYi5tYXhbMF0gKz0gdmVsb2NpdHlbMF1cclxuICAgICAgaWYodmVsb2NpdHlbMV0gPiAxMCkgYWFiYi5tYXhbMV0gKz0gdmVsb2NpdHlbMV1cclxuICAgICAgaWYodmVsb2NpdHlbMl0gPiAxMCkgYWFiYi5tYXhbMl0gKz0gdmVsb2NpdHlbMl1cclxuICAgICAgaWYodmVsb2NpdHlbMF0gPCAtMTApIGFhYmIubWluWzBdICs9IHZlbG9jaXR5WzBdXHJcbiAgICAgIGlmKHZlbG9jaXR5WzFdIDwgLTEwKSBhYWJiLm1pblsxXSArPSB2ZWxvY2l0eVsxXVxyXG4gICAgICBpZih2ZWxvY2l0eVsyXSA8IC0xMCkgYWFiYi5taW5bMl0gKz0gdmVsb2NpdHlbMl0qL1xyXG4gICAgcmV0dXJuIGFhYmI7XHJcbiAgfVxyXG4gIGdldEFBQkIoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jb2xsaWRlci5nZXRBQUJCKCk7XHJcbiAgfVxyXG59XHJcblxyXG5jbGFzcyBQbGF5ZXIgZXh0ZW5kcyBSaWdpZEJvZHkge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcclxuICAgIHRoaXMuZnJpY3Rpb24gPSAwLjA7XHJcbiAgfVxyXG4gIGFwcGx5SW1wdWxzZShpbXB1bHNlLCBwb2ludCkge1xyXG4gICAgdGhpcy52ZWxvY2l0eSA9IHN1bSh0aGlzLnZlbG9jaXR5LCBzY2FsZShpbXB1bHNlLCB0aGlzLmludmVyc2VNYXNzKSk7XHJcbiAgfVxyXG4gIGFwcGx5UHNldWRvSW1wdWxzZShpbXB1bHNlKSB7XHJcbiAgICB0aGlzLnBzZXVkb1ZlbG9jaXR5ID0gc3VtKFxyXG4gICAgICB0aGlzLnBzZXVkb1ZlbG9jaXR5LFxyXG4gICAgICBzY2FsZShpbXB1bHNlLCB0aGlzLmludmVyc2VNYXNzKVxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuZXhwb3J0IHsgUmlnaWRCb2R5LCBQbGF5ZXIgfTtcclxuIiwiY29uc3QgaXNJbnNpZGUgPSAocDEsIHAyLCBxKSA9PiB7XHJcbiAgY29uc3QgUiA9IChwMlswXSAtIHAxWzBdKSAqIChxWzFdIC0gcDFbMV0pIC0gKHAyWzFdIC0gcDFbMV0pICogKHFbMF0gLSBwMVswXSk7XHJcbiAgcmV0dXJuIFIgPD0gMCArIDAuMDAxO1xyXG59O1xyXG5cclxuY29uc3QgZG90ID0gKGEsIGIpID0+IGFbMF0gKiBiWzBdICsgYVsxXSAqIGJbMV07XHJcblxyXG5jb25zdCBpc0luQ2xvY2t3aXNlID0gKHAxLCBwMiwgcDMpID0+IHtcclxuICBjb25zdCBkZXQgPVxyXG4gICAgcDJbMF0gKiBwM1sxXSArXHJcbiAgICBwM1swXSAqIHAxWzFdICtcclxuICAgIHAxWzBdICogcDJbMV0gLVxyXG4gICAgcDFbMF0gKiBwMVsxXSAtXHJcbiAgICBwM1swXSAqIHAyWzFdIC1cclxuICAgIHAxWzBdICogcDNbMV07XHJcblxyXG4gIGlmKGRldCA8IDApIHJldHVybiAxXHJcbiAgcmV0dXJuIC0xXHJcbn07XHJcblxyXG5jb25zdCBjb21wdXRlSW50ZXJzZWN0aW9uID0gKHAxLCBwMiwgcDMsIHA0KSA9PiB7XHJcbiAgaWYgKHAyWzBdIC0gcDFbMF0gPT09IDApIHtcclxuICAgIGNvbnN0IHggPSBwMVswXTtcclxuXHJcbiAgICBjb25zdCBtMiA9IChwNFsxXSAtIHAzWzFdKSAvIChwNFswXSAtIHAzWzBdKTtcclxuICAgIGNvbnN0IGIyID0gcDNbMV0gLSBtMiAqIHAzWzBdO1xyXG5cclxuICAgIGNvbnN0IHkgPSBtMiAqIHggKyBiMjtcclxuICAgIHJldHVybiBbeCwgeV07XHJcbiAgfVxyXG4gIGlmIChwNFswXSAtIHAzWzBdID09PSAwKSB7XHJcbiAgICBjb25zdCB4ID0gcDNbMF07XHJcblxyXG4gICAgY29uc3QgbTEgPSAocDJbMV0gLSBwMVsxXSkgLyAocDJbMF0gLSBwMVswXSk7XHJcbiAgICBjb25zdCBiMSA9IHAxWzFdIC0gbTEgKiBwMVswXTtcclxuXHJcbiAgICBjb25zdCB5ID0gbTEgKiB4ICsgYjE7XHJcblxyXG4gICAgcmV0dXJuIFt4LCB5XTtcclxuICB9XHJcbiAgY29uc3QgbTEgPSAocDJbMV0gLSBwMVsxXSkgLyAocDJbMF0gLSBwMVswXSk7XHJcbiAgY29uc3QgYjEgPSBwMVsxXSAtIG0xICogcDFbMF07XHJcblxyXG4gIGNvbnN0IG0yID0gKHA0WzFdIC0gcDNbMV0pIC8gKHA0WzBdIC0gcDNbMF0pO1xyXG4gIGNvbnN0IGIyID0gcDNbMV0gLSBtMiAqIHAzWzBdO1xyXG5cclxuICBjb25zdCB4ID0gKGIyIC0gYjEpIC8gKG0xIC0gbTIpO1xyXG5cclxuICBjb25zdCB5ID0gbTEgKiB4ICsgYjE7XHJcblxyXG4gIHJldHVybiBbeCwgeV07XHJcbn07XHJcblxyXG5jb25zdCBjbGlwID0gKEEsIEIpID0+IHtcclxuICBsZXQgcmVzdWx0ID0gWy4uLkFdO1xyXG5cclxuICBmb3IgKGxldCBpID0gMCwgbiA9IEIubGVuZ3RoOyBpIDwgbjsgaSArKykge1xyXG4gICAgY29uc3QgbmV4dCA9IFsuLi5yZXN1bHRdO1xyXG4gICAgcmVzdWx0ID0gW107XHJcbiAgICBjb25zdCBhRWRnZTEgPSBCLmF0KChpIC0gMSkgKTtcclxuICAgIGNvbnN0IGFFZGdlMiA9IEIuYXQoaSApO1xyXG5cclxuICAgIGZvciAobGV0IGogPSAwLCBfbiA9IG5leHQubGVuZ3RoOyBqIDwgX247IGorKykge1xyXG4gICAgICBjb25zdCBiRWRnZTEgPSBuZXh0LmF0KChqIC0gMSkpO1xyXG4gICAgICBjb25zdCBiRWRnZTIgPSBuZXh0LmF0KGogKTtcclxuXHJcbiAgICAgIGlmIChpc0luc2lkZShhRWRnZTEsIGFFZGdlMiwgYkVkZ2UyKSkge1xyXG4gICAgICAgIGlmICghaXNJbnNpZGUoYUVkZ2UxLCBhRWRnZTIsIGJFZGdlMSkpIHtcclxuICAgICAgICAgIGNvbnN0IGludGVyc2VjdGlvbiA9IGNvbXB1dGVJbnRlcnNlY3Rpb24oXHJcbiAgICAgICAgICAgIGJFZGdlMSxcclxuICAgICAgICAgICAgYkVkZ2UyLFxyXG4gICAgICAgICAgICBhRWRnZTEsXHJcbiAgICAgICAgICAgIGFFZGdlMlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIHJlc3VsdC5wdXNoKGludGVyc2VjdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlc3VsdC5wdXNoKGJFZGdlMik7XHJcbiAgICAgICAgY29udGludWU7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGlzSW5zaWRlKGFFZGdlMSwgYUVkZ2UyLCBiRWRnZTEpKSB7XHJcbiAgICAgICAgY29uc3QgaW50ZXJzZWN0aW9uID0gY29tcHV0ZUludGVyc2VjdGlvbihcclxuICAgICAgICAgIGJFZGdlMSxcclxuICAgICAgICAgIGJFZGdlMixcclxuICAgICAgICAgIGFFZGdlMSxcclxuICAgICAgICAgIGFFZGdlMlxyXG4gICAgICAgICk7XHJcbiAgICAgICAgcmVzdWx0LnB1c2goaW50ZXJzZWN0aW9uKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG5cclxuZXhwb3J0IHsgaXNJbnNpZGUsIGNvbXB1dGVJbnRlcnNlY3Rpb24sIGNsaXAsIGlzSW5DbG9ja3dpc2UgfTtcclxuIiwiaW1wb3J0IHsgdmVjdG9yLCBtNCwgbTMsIEFBQkIgfSBmcm9tIFwibWF0aFwiO1xyXG5cclxuY29uc3QgeyBzY2FsZSwgc3VtLCBkaWZmIH0gPSB2ZWN0b3I7XHJcblxyXG5jb25zdCB4QXhpcyA9IFsxLCAwLCAwXTtcclxuY29uc3QgeUF4aXMgPSBbMCwgMSwgMF07XHJcbmNvbnN0IHpBeGlzID0gWzAsIDAsIDFdO1xyXG5jb25zdCB4QXhpc05lZ2F0aXZlID0gc2NhbGUoeEF4aXMsIC0xKTtcclxuY29uc3QgeUF4aXNOZWdhdGl2ZSA9IHNjYWxlKHlBeGlzLCAtMSk7XHJcbmNvbnN0IHpBeGlzTmVnYXRpdmUgPSBzY2FsZSh6QXhpcywgLTEpO1xyXG5cclxuY2xhc3MgQ29sbGlkZXIge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5SbWF0cml4ID0gbTMuaWRlbnRpdHkoKTtcclxuICAgIHRoaXMucG9zID0gW107XHJcbiAgICB0aGlzLnNjYWxlID0gWzEsIDEsIDFdO1xyXG4gICAgdGhpcy5SUyA9IG0zLmlkZW50aXR5KCk7XHJcbiAgICB0aGlzLlJTaW52ZXJzZSA9IG0zLmlkZW50aXR5KCk7XHJcbiAgICB0aGlzLnBvcyA9IFswLCAwLCAwXTtcclxuICB9XHJcbiAgdHJhbnNsYXRlKHYpIHtcclxuICAgIHRoaXMucG9zID0gc3VtKHRoaXMucG9zLCB2KTtcclxuICB9XHJcbiAgcm90YXRlKHYpIHtcclxuICAgIHRoaXMuUlNtYXRyaXggPSBtMy54Um90YXRlKHRoaXMuUlNtYXRyaXgsIHZbMF0pO1xyXG4gICAgdGhpcy5SU21hdHJpeCA9IG0zLnlSb3RhdGUodGhpcy5SU21hdHJpeCwgdlsxXSk7XHJcbiAgICB0aGlzLlJTbWF0cml4ID0gbTMuelJvdGF0ZSh0aGlzLlJTbWF0cml4LCB2WzJdKTtcclxuICAgIHRoaXMuUm1hdHJpeEludmVyc2UgPSBtMy50cmFuc3Bvc2UodGhpcy5SU21hdHJpeCk7XHJcbiAgfVxyXG4gIGdldEFBQkIoKSB7XHJcbiAgICBjb25zdCBtYXhYID0gdGhpcy5zdXBwb3J0KHhBeGlzKVswXTtcclxuICAgIGNvbnN0IG1heFkgPSB0aGlzLnN1cHBvcnQoeUF4aXMpWzFdO1xyXG4gICAgY29uc3QgbWF4WiA9IHRoaXMuc3VwcG9ydCh6QXhpcylbMl07XHJcblxyXG4gICAgY29uc3QgbWluWCA9IHRoaXMuc3VwcG9ydCh4QXhpc05lZ2F0aXZlKVswXTtcclxuICAgIGNvbnN0IG1pblkgPSB0aGlzLnN1cHBvcnQoeUF4aXNOZWdhdGl2ZSlbMV07XHJcbiAgICBjb25zdCBtaW5aID0gdGhpcy5zdXBwb3J0KHpBeGlzTmVnYXRpdmUpWzJdO1xyXG4gICAgcmV0dXJuIG5ldyBBQUJCKFttaW5YLCBtaW5ZLCBtaW5aXSwgW21heFgsIG1heFksIG1heFpdKTtcclxuICB9XHJcbiAgc2V0UlNNYXQzKG0pIHtcclxuICAgIHRoaXMuUlNtYXRyaXggPSBtO1xyXG4gICAgdGhpcy5SU21hdHJpeEludmVyc2UgPSBtMy50cmFuc3Bvc2UobSk7XHJcbiAgfVxyXG4gIHNldFRSU01hdDQobSkge1xyXG4gICAgdGhpcy5SU21hdHJpeCA9IG00Lm00VG9tMyhtKTtcclxuICAgIHRoaXMucG9zWzBdID0gbVsxMl07XHJcbiAgICB0aGlzLnBvc1sxXSA9IG1bMTNdO1xyXG4gICAgdGhpcy5wb3NbMl0gPSBtWzE0XTtcclxuICB9XHJcbiAgZ2V0VFJTTWF0NCgpIHtcclxuICAgIGNvbnN0IG0gPSBtNC5tM1RvbTQodGhpcy5SU21hdHJpeCk7XHJcbiAgICBtWzEyXSA9IHRoaXMucG9zWzBdO1xyXG4gICAgbVsxM10gPSB0aGlzLnBvc1sxXTtcclxuICAgIG1bMTRdID0gdGhpcy5wb3NbMl07XHJcbiAgICBtWzE1XSA9IDE7XHJcbiAgICByZXR1cm4gbTtcclxuICB9XHJcbiAgbG9jYWxUb0dsb2JhbCh2KSB7XHJcbiAgICBsZXQgZ2xvYmFsID0gbTMudHJhbnNmb3JtUG9pbnQodGhpcy5SU21hdHJpeCwgdik7XHJcbiAgICByZXR1cm4gc3VtKHRoaXMucG9zLCBnbG9iYWwpO1xyXG4gIH1cclxufVxyXG5cclxuY2xhc3MgQm94IHtcclxuICBjb25zdHJ1Y3RvcihhID0gMSwgYiA9IDEsIGMgPSAxKSB7XHJcbiAgICB0aGlzLm1pbiA9IFstYSAvIDIsIC1iIC8gMiwgLWMgLyAyXTtcclxuICAgIHRoaXMubWF4ID0gW2EgLyAyLCBiIC8gMiwgYyAvIDJdO1xyXG4gICAgdGhpcy5SbWF0cml4ID0gbTMuaWRlbnRpdHkoKTtcclxuICAgIHRoaXMuUm1hdHJpeEludmVyc2UgPSBtMy5pZGVudGl0eSgpO1xyXG4gICAgdGhpcy5SUyA9IG0zLmlkZW50aXR5KCk7XHJcbiAgICB0aGlzLlRSUyA9IG00LmlkZW50aXR5KClcclxuICAgIHRoaXMucG9zID0gWzAsIDAsIDBdO1xyXG4gICAgdGhpcy5wb2ludHMgPSBbXHJcbiAgICAgIFstMS8yLCAtMS8yLCAtMS8yXSxcclxuICAgICAgWzEvMiwgLTEvMiwgLTEvMl0sXHJcbiAgICAgIFsxLzIsIC0xLzIsIDEvMl0sXHJcbiAgICAgIFstMS8yLCAtMS8yLCAxLzJdLFxyXG4gICAgICBbLTEvMiwgMS8yLCAtMS8yXSxcclxuICAgICAgWzEvMiwgMS8yLCAtMS8yXSxcclxuICAgICAgWzEvMiwgMS8yLCAxLzJdLFxyXG4gICAgICBbLTEvMiwgMS8yLCAxLzJdLFxyXG4gICAgXTtcclxuICAgIHRoaXMuaW5kaWNlcyA9IFtcclxuICAgICAgWzAsIDQsIDUsIDFdLCAvLyAtelxyXG4gICAgICBbMywgNywgNiwgMl0sIC8vICt6XHJcbiAgICAgIFswLCAxLCAyLCAzXSwgLy8gLXlcclxuICAgICAgWzQsIDUsIDYsIDddLCAvLyAreVxyXG4gICAgICBbMCwgMywgNywgNF0sIC8vIC14XHJcbiAgICAgIFsxLCAyLCA2LCA1XSwgLy8gK3hcclxuICAgIF07XHJcbiAgICB0aGlzLm5vcm1hbHMgPSBbXHJcbiAgICAgIFswLCAwLCAtMV0sXHJcbiAgICAgIFswLCAwLCAxXSxcclxuICAgICAgWzAsIC0xLCAwXSxcclxuICAgICAgWzAsIDEsIDBdLFxyXG4gICAgICBbLTEsIDAsIDBdLFxyXG4gICAgICBbMSwgMCwgMF0sXHJcbiAgICBdO1xyXG4gIH1cclxuICBzZXRTY2FsZShzY2FsZSl7XHJcbiAgICBjb25zdCBbYSwgYiwgY10gPSBzY2FsZVxyXG4gICAgdGhpcy5taW4gPSBbLWEgLyAyLCAtYiAvIDIsIC1jIC8gMl07XHJcbiAgICB0aGlzLm1heCA9IFthIC8gMiwgYiAvIDIsIGMgLyAyXTtcclxuICB9XHJcbiAgc2V0VHJhbnNsYXRpb24odHJhbnNsYXRpb24pe1xyXG4gICAgXHJcbiAgICB0aGlzLnBvcyA9Wy4uLnRyYW5zbGF0aW9uXVxyXG4gICAgY29uc29sZS5sb2codGhpcy5wb3MpXHJcbiAgfVxyXG4gIGdldE5vcm1hbHNHbG9iYWwoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5ub3JtYWxzLm1hcCgobikgPT4gbTMudHJhbnNmb3JtUG9pbnQodGhpcy5SbWF0cml4LCBuKSk7XHJcbiAgfVxyXG4gIGdldEFBQkIoKSB7XHJcbiAgICBjb25zdCBtYXhYID0gdGhpcy5zdXBwb3J0KHhBeGlzKVswXTtcclxuICAgIGNvbnN0IG1heFkgPSB0aGlzLnN1cHBvcnQoeUF4aXMpWzFdO1xyXG4gICAgY29uc3QgbWF4WiA9IHRoaXMuc3VwcG9ydCh6QXhpcylbMl07XHJcblxyXG4gICAgY29uc3QgbWluWCA9IHRoaXMuc3VwcG9ydCh4QXhpc05lZ2F0aXZlKVswXTtcclxuICAgIGNvbnN0IG1pblkgPSB0aGlzLnN1cHBvcnQoeUF4aXNOZWdhdGl2ZSlbMV07XHJcbiAgICBjb25zdCBtaW5aID0gdGhpcy5zdXBwb3J0KHpBeGlzTmVnYXRpdmUpWzJdO1xyXG4gICAgcmV0dXJuIG5ldyBBQUJCKFttaW5YLCBtaW5ZLCBtaW5aXSwgW21heFgsIG1heFksIG1heFpdKTtcclxuICB9XHJcbiAgdHJhbnNsYXRlKHQpIHtcclxuICAgIHRoaXMucG9zID0gc3VtKHRoaXMucG9zLCB0KTtcclxuICB9XHJcbiAgcm90YXRlKHIpIHtcclxuICAgIHRoaXMuUm1hdHJpeCA9IG0zLnhSb3RhdGUodGhpcy5SbWF0cml4LCByWzBdKTtcclxuICAgIHRoaXMuUm1hdHJpeCA9IG0zLnlSb3RhdGUodGhpcy5SbWF0cml4LCByWzFdKTtcclxuICAgIHRoaXMuUm1hdHJpeCA9IG0zLnpSb3RhdGUodGhpcy5SbWF0cml4LCByWzJdKTtcclxuXHJcbiAgICB0aGlzLlJtYXRyaXhJbnZlcnNlID0gbTMudHJhbnNwb3NlKHRoaXMuUm1hdHJpeCk7XHJcbiAgfVxyXG4gIHNldFJtYXRyaXgobWF0cml4KSB7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLlJtYXRyaXgpXHJcbiAgICB0aGlzLlJtYXRyaXggPSBbLi4ubWF0cml4XTtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuUm1hdHJpeClcclxuICAgIHRoaXMuUm1hdHJpeEludmVyc2UgPSBtMy50cmFuc3Bvc2UobWF0cml4KTtcclxuICB9XHJcbiAgc2V0VFJNYXRyaXgobSl7XHJcbiAgICBjb25zdCBybSA9IG00Lm00VG9tMyhtKVxyXG4gICAgdGhpcy5zZXRSbWF0cml4KG0pXHJcbiAgICBjb25zdCBwb3MgPSBbbVsxMl0sIG1bMTNdLCBtWzE0XV1cclxuICAgIHRoaXMudHJhbnNsYXRlKHBvcylcclxuICB9XHJcbiAgc2V0VFJTKG0pe1xyXG4gICAgY29uc3Qge3RyYW5zbGF0aW9uLCBSbWF0cml4LCBzY2FsZSB9ID0gbTQuZGVjb21wb3NlKG0pXHJcbiAgICB0aGlzLnNldFRyYW5zbGF0aW9uKHRyYW5zbGF0aW9uKVxyXG4gICAgdGhpcy5zZXRSbWF0cml4KG00Lm00VG9tMyhSbWF0cml4KSlcclxuICAgIHRoaXMuc2V0U2NhbGUoc2NhbGUpXHJcbiAgICBjb25zb2xlLmxvZyh0cmFuc2xhdGlvbiwgUm1hdHJpeCwgc2NhbGUgKVxyXG4gIH1cclxuICBzdXBwb3J0KGRpcikge1xyXG4gICAgY29uc3QgX2RpciA9IG0zLnRyYW5zZm9ybVBvaW50KHRoaXMuUm1hdHJpeEludmVyc2UsIGRpcik7XHJcblxyXG4gICAgY29uc3QgcmVzID0gWzAsIDAsIDBdO1xyXG5cclxuICAgIHJlc1swXSA9IF9kaXJbMF0gPiAwID8gdGhpcy5tYXhbMF0gOiB0aGlzLm1pblswXTtcclxuICAgIHJlc1sxXSA9IF9kaXJbMV0gPiAwID8gdGhpcy5tYXhbMV0gOiB0aGlzLm1pblsxXTtcclxuICAgIHJlc1syXSA9IF9kaXJbMl0gPiAwID8gdGhpcy5tYXhbMl0gOiB0aGlzLm1pblsyXTtcclxuXHJcbiAgICBjb25zdCBzdXAgPSBtMy50cmFuc2Zvcm1Qb2ludCh0aGlzLlJtYXRyaXgsIHJlcyk7XHJcblxyXG4gICAgcmV0dXJuIHN1bShzdXAsIHRoaXMucG9zKTtcclxuICB9XHJcbiAgZ2V0SW52ZXJzZUluZXJ0aWFUZW5zb3IobWFzcykge1xyXG4gICAgY29uc3QgaTEgPVxyXG4gICAgICAobWFzcyAvIDEyKSAqICh0aGlzLm1heFsxXSAqIHRoaXMubWF4WzFdICsgdGhpcy5tYXhbMl0gKiB0aGlzLm1heFsyXSk7XHJcbiAgICBjb25zdCBpMiA9XHJcbiAgICAgIChtYXNzIC8gMTIpICogKHRoaXMubWF4WzBdICogdGhpcy5tYXhbMF0gKyB0aGlzLm1heFsyXSAqIHRoaXMubWF4WzJdKTtcclxuICAgIGNvbnN0IGkzID1cclxuICAgICAgKG1hc3MgLyAxMikgKiAodGhpcy5tYXhbMF0gKiB0aGlzLm1heFswXSArIHRoaXMubWF4WzFdICogdGhpcy5tYXhbMV0pO1xyXG5cclxuICAgIGNvbnN0IG0gPSBuZXcgRmxvYXQzMkFycmF5KFsxIC8gaTEsIDAsIDAsIDAsIDEgLyBpMiwgMCwgMCwgMCwgMSAvIGkzXSk7XHJcblxyXG4gICAgcmV0dXJuIG0zLm11bHRpcGx5KG0zLm11bHRpcGx5KHRoaXMuUm1hdHJpeCwgbSksIHRoaXMuUm1hdHJpeEludmVyc2UpO1xyXG4gIH1cclxuICBnZXRNNCgpIHtcclxuICAgIGNvbnN0IG0gPSBtNC5tM1RvbTQodGhpcy5SbWF0cml4KTtcclxuICAgIG1bMTJdID0gdGhpcy5wb3NbMF07XHJcbiAgICBtWzEzXSA9IHRoaXMucG9zWzFdO1xyXG4gICAgbVsxNF0gPSB0aGlzLnBvc1syXTtcclxuICAgIG1bMTVdID0gMTtcclxuICAgIGNvbnN0IHNjYWxlID0gZGlmZih0aGlzLm1heCwgdGhpcy5taW4pXHJcbiAgICByZXR1cm4gbTQuc2NhbGUobSwgLi4uc2NhbGUpXHJcbiAgfVxyXG4gIFxyXG4gIGxvY2FsVG9HbG9iYWwodikge1xyXG4gICAgbGV0IGdsb2JhbCA9IG0zLnRyYW5zZm9ybVBvaW50KHRoaXMuUm1hdHJpeCwgdik7XHJcbiAgICByZXR1cm4gc3VtKHRoaXMucG9zLCBnbG9iYWwpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHsgQm94IH07XHJcbiIsImltcG9ydCB7IHZlY3RvciwgbTMgfSBmcm9tIFwibWF0aFwiO1xyXG5pbXBvcnQgeyBHYXVzc1NlaWRlbCB9IGZyb20gXCIuL0dTc29sdmVyXCI7XHJcblxyXG5jb25zdCB7IHN1bSwgZGlmZiwgc2NhbGUsIGNyb3NzLCBkb3QsIG5vcm1hbGl6ZSwgbm9ybSwgbm9ybVNxIH0gPSB2ZWN0b3I7XHJcblxyXG5jb25zdCB0b2wgPSAwLjAxO1xyXG5jb25zdCB0b2wyID0gMC4wMDAwMTtcclxuY29uc3QgbnVtSXRlcmF0aW9ucyA9IDE7XHJcbmNvbnN0IG51bVBvc0l0ZXJhdGlvbnMgPSAxO1xyXG5cclxuY29uc3QgY2xhbXAgPSAodiwgbWluLCBtYXgpID0+IHtcclxuICBpZiAodiA+IG1pbikge1xyXG4gICAgaWYgKHYgPCBtYXgpIHJldHVybiB2O1xyXG4gICAgZWxzZSByZXR1cm4gbWF4O1xyXG4gIH1cclxuICByZXR1cm4gbWluO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0TWFuaWZvbGRTeXN0ZW0gPSAobWFuaWZvbGQpID0+IHtcclxuICBjb25zdCBib2R5MSA9IG1hbmlmb2xkLmJvZHkxO1xyXG4gIGNvbnN0IGJvZHkyID0gbWFuaWZvbGQuYm9keTI7XHJcblxyXG4gIGNvbnN0IE0xID0gYm9keTEuaW52ZXJzZU1hc3M7XHJcbiAgY29uc3QgSTEgPSBib2R5MS5pbnZlcnNlSW5lcnRpYTtcclxuICBjb25zdCBNMiA9IGJvZHkyLmludmVyc2VNYXNzO1xyXG4gIGNvbnN0IEkyID0gYm9keTIuaW52ZXJzZUluZXJ0aWE7XHJcbiAgY29uc3QgY29udGFjdHMgPSBtYW5pZm9sZC5jb250YWN0cztcclxuICBsZXQgbiA9IGNvbnRhY3RzLmxlbmd0aDtcclxuICBsZXQgQSA9IFtdO1xyXG4gIGNvbnN0IEpWID0gW107XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHtcclxuICAgIGNvbnN0IHJvd051bSA9IGkgKiBuO1xyXG4gICAgY29uc3QgSk0gPSBbXHJcbiAgICAgIHNjYWxlKGNvbnRhY3RzW2ldLkpbMF0sIE0xKSxcclxuICAgICAgbTMudHJhbnNmb3JtUG9pbnQoSTEsIGNvbnRhY3RzW2ldLkpbMV0pLFxyXG4gICAgICBzY2FsZShjb250YWN0c1tpXS5KWzJdLCBNMiksXHJcbiAgICAgIG0zLnRyYW5zZm9ybVBvaW50KEkyLCBjb250YWN0c1tpXS5KWzNdKSxcclxuICAgIF07XHJcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IG47IGorKykge1xyXG4gICAgICBpZiAoaSA9PT0gaikge1xyXG4gICAgICAgIEFbcm93TnVtICsgal0gPSBjb250YWN0c1tpXS5lZmZNYXNzO1xyXG4gICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICB9XHJcbiAgICAgIEFbcm93TnVtICsgal0gPVxyXG4gICAgICAgIGRvdChKTVswXSwgY29udGFjdHNbal0uSlswXSkgK1xyXG4gICAgICAgIGRvdChKTVsxXSwgY29udGFjdHNbal0uSlsxXSkgK1xyXG4gICAgICAgIGRvdChKTVsyXSwgY29udGFjdHNbal0uSlsyXSkgK1xyXG4gICAgICAgIGRvdChKTVszXSwgY29udGFjdHNbal0uSlszXSk7XHJcbiAgICB9XHJcbiAgICBKVi5wdXNoKFxyXG4gICAgICAtZG90KGNvbnRhY3RzW2ldLkpbMF0sIGJvZHkxLnZlbG9jaXR5KSAtXHJcbiAgICAgICAgZG90KGNvbnRhY3RzW2ldLkpbMV0sIGJvZHkxLmFuZ3VsYXJWKSAtXHJcbiAgICAgICAgZG90KGNvbnRhY3RzW2ldLkpbMl0sIGJvZHkyLnZlbG9jaXR5KSAtXHJcbiAgICAgICAgZG90KGNvbnRhY3RzW2ldLkpbM10sIGJvZHkyLmFuZ3VsYXJWKVxyXG4gICAgKTtcclxuICB9XHJcbiAgcmV0dXJuIHsgQSwgSlYgfTtcclxufTtcclxuY29uc3QgYmxvY2tTb2x2ZXIgPSAobWFuaWZvbGQsIGRlbHRhVGltZSkgPT4ge1xyXG4gIGNvbnN0IGJvZHkxID0gbWFuaWZvbGQuYm9keTE7XHJcbiAgY29uc3QgYm9keTIgPSBtYW5pZm9sZC5ib2R5MjtcclxuXHJcbiAgY29uc3QgY29udGFjdHMgPSBtYW5pZm9sZC5jb250YWN0cztcclxuICBsZXQgbiA9IGNvbnRhY3RzLmxlbmd0aDtcclxuXHJcbiAgY29uc3QgeyBBLCBKViB9ID0gZ2V0TWFuaWZvbGRTeXN0ZW0obWFuaWZvbGQpO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAvLyBKVltpXSArPSBNYXRoLm1heCgwLGNvbnRhY3RzW2ldLnBlbkRlcHRoLXRvbCkvZGVsdGFUaW1lICogMC4yNVxyXG4gIH1cclxuICBjb25zdCBsYW1iZGEgPSBHYXVzc1NlaWRlbChBLCBKViwgbiwgMC4wMDAwMDEpO1xyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xyXG4gICAgYm9keTEuYXBwbHlJbXB1bHNlKHNjYWxlKGNvbnRhY3RzW2ldLkpbMF0sIGxhbWJkYVtpXSksIGNvbnRhY3RzW2ldLnJhKTtcclxuICAgIGJvZHkyLmFwcGx5SW1wdWxzZShzY2FsZShjb250YWN0c1tpXS5KWzJdLCBsYW1iZGFbaV0pLCBjb250YWN0c1tpXS5yYik7XHJcbiAgfVxyXG4gIHJldHVybiBsYW1iZGE7XHJcbn07XHJcbmNvbnN0IGZyaWN0aW9uU29sdmVyID0gKGNvbnRhY3QsIGxhbWJkYSwgYm9keTEsIGJvZHkyKSA9PiB7XHJcbiAgY29udGFjdC5yZWxWZWxvY2l0eSA9IHN1bShib2R5Mi52ZWxvY2l0eSwgY3Jvc3MoYm9keTIuYW5ndWxhclYsIGNvbnRhY3QucmIpKTtcclxuICBjb250YWN0LnJlbFZlbG9jaXR5ID0gZGlmZihjb250YWN0LnJlbFZlbG9jaXR5LCBib2R5MS52ZWxvY2l0eSk7XHJcbiAgY29udGFjdC5yZWxWZWxvY2l0eSA9IGRpZmYoXHJcbiAgICBjb250YWN0LnJlbFZlbG9jaXR5LFxyXG4gICAgY3Jvc3MoYm9keTEuYW5ndWxhclYsIGNvbnRhY3QucmEpXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgbXUgPSBib2R5MS5mcmljdGlvbiArIGJvZHkxLmZyaWN0aW9uO1xyXG4gIGxldCBmSW1wdWxzZTEgPSAtZG90KGNvbnRhY3QucmVsVmVsb2NpdHksIGNvbnRhY3QuZkRpcjEpIC8gY29udGFjdC5mRWZmTWFzczE7XHJcbiAgZkltcHVsc2UxID0gY2xhbXAoZkltcHVsc2UxLCAtbGFtYmRhICogbXUsIGxhbWJkYSAqIG11KTtcclxuXHJcbiAgbGV0IGZJbXB1bHNlMiA9IC1kb3QoY29udGFjdC5yZWxWZWxvY2l0eSwgY29udGFjdC5mRGlyMikgLyBjb250YWN0LmZFZmZNYXNzMjtcclxuICBmSW1wdWxzZTIgPSBjbGFtcChmSW1wdWxzZTIsIC1sYW1iZGEgKiBtdSwgbGFtYmRhICogbXUpO1xyXG5cclxuICBjb250YWN0LmFjY0ZJMSArPSBmSW1wdWxzZTE7XHJcbiAgY29udGFjdC5hY2NGSTIgKz0gZkltcHVsc2UyO1xyXG5cclxuICBsZXQgZlZlYyA9IHN1bShcclxuICAgIHNjYWxlKGNvbnRhY3QuZkRpcjEsIGZJbXB1bHNlMSksXHJcbiAgICBzY2FsZShjb250YWN0LmZEaXIyLCBmSW1wdWxzZTIpXHJcbiAgKTtcclxuXHJcbiAgYm9keTEuYXBwbHlJbXB1bHNlKHNjYWxlKGZWZWMsIC0xKSwgY29udGFjdC5yYSk7XHJcbiAgYm9keTIuYXBwbHlJbXB1bHNlKGZWZWMsIGNvbnRhY3QucmIpO1xyXG59O1xyXG5mdW5jdGlvbiBzb2x2ZUNvbGxpc2lvbihtYW5pZm9sZCwgZGVsdGFUaW1lKSB7XHJcbiAgY29uc3QgYm9keTEgPSBtYW5pZm9sZC5ib2R5MTtcclxuICBjb25zdCBib2R5MiA9IG1hbmlmb2xkLmJvZHkyO1xyXG4gIGNvbnN0IGNvbnRhY3RzID0gbWFuaWZvbGQuY29udGFjdHM7XHJcbiAgaWYgKGNvbnRhY3RzLmxlbmd0aCA+IDEpIHtcclxuICAgIGNvbnN0IGxhbWJkYSA9IGJsb2NrU29sdmVyKG1hbmlmb2xkLCBkZWx0YVRpbWUpO1xyXG4gICAgY29uc3QgbiA9IGxhbWJkYS5sZW5ndGg7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xyXG4gICAgICBmcmljdGlvblNvbHZlcihjb250YWN0c1tpXSwgbGFtYmRhW2ldLCBib2R5MSwgYm9keTIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICBmb3IgKGxldCBqID0gMDsgaiA8IG51bUl0ZXJhdGlvbnM7IGorKykge1xyXG4gICAgZm9yIChsZXQgaSA9IDAsIG4gPSBtYW5pZm9sZC5jb250YWN0cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgY29uc3QgY29udGFjdCA9IG1hbmlmb2xkLmNvbnRhY3RzW2ldO1xyXG4gICAgICBjb25zdCBrMiA9IGNvbnRhY3QuZWZmTWFzcztcclxuXHJcbiAgICAgIGlmIChjb250YWN0LnBlbkRlcHRoIDw9IDApIHJldHVybjtcclxuXHJcbiAgICAgIGNvbnRhY3QucmVsVmVsb2NpdHkgPSBzdW0oXHJcbiAgICAgICAgYm9keTIudmVsb2NpdHksXHJcbiAgICAgICAgY3Jvc3MoYm9keTIuYW5ndWxhclYsIGNvbnRhY3QucmIpXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnRhY3QucmVsVmVsb2NpdHkgPSBkaWZmKGNvbnRhY3QucmVsVmVsb2NpdHksIGJvZHkxLnZlbG9jaXR5KTtcclxuICAgICAgY29udGFjdC5yZWxWZWxvY2l0eSA9IGRpZmYoXHJcbiAgICAgICAgY29udGFjdC5yZWxWZWxvY2l0eSxcclxuICAgICAgICBjcm9zcyhib2R5MS5hbmd1bGFyViwgY29udGFjdC5yYSlcclxuICAgICAgKTtcclxuICAgICAgY29uc3QgVmMgPSBkb3QoY29udGFjdC5yZWxWZWxvY2l0eSwgY29udGFjdC5uKTtcclxuICAgICAgY29uc3QgcmVzdGl0dXRpb24gPSBNYXRoLm1heChWYyAtIHRvbDIsIDApICogMC4xO1xyXG4gICAgICBsZXQgYiA9IChNYXRoLm1heCgwLCBjb250YWN0LnBlbkRlcHRoIC0gdG9sKSAvIGRlbHRhVGltZSkgKiAwLjI1O1xyXG5cclxuICAgICAgbGV0IGxhbWJkYSA9IC1WYyAvIGNvbnRhY3QuZWZmTWFzcztcclxuICAgICAgbGV0IG9sZEFjYyA9IGNvbnRhY3QuYWNjSTtcclxuICAgICAgY29udGFjdC5hY2NJICs9IGxhbWJkYTtcclxuICAgICAgaWYgKGNvbnRhY3QuYWNjSSA8IDApIGNvbnRhY3QuYWNjSSA9IDA7XHJcbiAgICAgIGxhbWJkYSA9IGNvbnRhY3QuYWNjSSAtIG9sZEFjYztcclxuXHJcbiAgICAgIGJvZHkxLmFwcGx5SW1wdWxzZShzY2FsZShjb250YWN0Lm4sIC1sYW1iZGEpLCBjb250YWN0LnJhKTtcclxuICAgICAgYm9keTIuYXBwbHlJbXB1bHNlKHNjYWxlKGNvbnRhY3QubiwgbGFtYmRhKSwgY29udGFjdC5yYik7XHJcbiAgICAgIGZyaWN0aW9uU29sdmVyKGNvbnRhY3QsIGxhbWJkYSwgYm9keTEsIGJvZHkyKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IHNvbHZlQ29uc3RyYWludCA9IChjb25zdHJhaW50LCBkZWx0YVRpbWUpID0+IHtcclxuICBjb25zdCByYSA9IGNvbnN0cmFpbnQuYm9keTEuY29sbGlkZXIubG9jYWxUb0dsb2JhbChjb25zdHJhaW50LnJhKTtcclxuICBjb25zdCByYiA9IGNvbnN0cmFpbnQuYm9keTIuY29sbGlkZXIubG9jYWxUb0dsb2JhbChjb25zdHJhaW50LnJiKTtcclxuICBjb25zdCBuID0gY29uc3RyYWludC5uO1xyXG5cclxuICBpZiAoY29uc3RyYWludC5kaXN0IDwgMC4wMSkgcmV0dXJuO1xyXG4gIGNvbnN0IG5vcm1hbCA9IHNjYWxlKGNvbnN0cmFpbnQubiwgMSAvIGNvbnN0cmFpbnQuZGlzdCk7XHJcbiAgbGV0IHYxID0gc3VtKFxyXG4gICAgY29uc3RyYWludC5ib2R5MS52ZWxvY2l0eSxcclxuICAgIGNyb3NzKGNvbnN0cmFpbnQuYm9keTEuYW5ndWxhclYsIGNvbnN0cmFpbnQucmEpXHJcbiAgKTtcclxuICBsZXQgdjIgPSBzdW0oXHJcbiAgICBjb25zdHJhaW50LmJvZHkyLnZlbG9jaXR5LFxyXG4gICAgY3Jvc3MoY29uc3RyYWludC5ib2R5Mi5hbmd1bGFyViwgY29uc3RyYWludC5yYilcclxuICApO1xyXG4gIGxldCByZWxWZWxvY2l0eSA9IGRpZmYodjIsIHYxKTtcclxuXHJcbiAgY29uc3QgVmMgPSBkb3QocmVsVmVsb2NpdHksIG5vcm1hbCk7XHJcbiAgbGV0IGIgPSAoY29uc3RyYWludC5kaXN0IC8gZGVsdGFUaW1lKSAqIDAuMjtcclxuICBjb25zdCBzb2Z0bmVzcyA9IDI7XHJcbiAgbGV0IGxhbWJkYSA9IC1WYyAvIGNvbnN0cmFpbnQuZWZmTWFzcztcclxuXHJcbiAgY29uc3RyYWludC5ib2R5MS5hcHBseUltcHVsc2Uoc2NhbGUobm9ybWFsLCAtbGFtYmRhKSwgY29uc3RyYWludC5yYSk7XHJcbiAgY29uc3RyYWludC5ib2R5Mi5hcHBseUltcHVsc2Uoc2NhbGUobm9ybWFsLCBsYW1iZGEpLCBjb25zdHJhaW50LnJiKTtcclxufTtcclxuXHJcbmNvbnN0IHNvbHZlUG9zaXRpb24gPSAoY29uc3RyYWludCwgZGVsdGFUaW1lKSA9PiB7XHJcbiAgaWYgKGNvbnN0cmFpbnQuZGlzdCA8IDAuMDEpIHJldHVybjtcclxuICBjb25zdCBub3JtYWwgPSBzY2FsZShjb25zdHJhaW50Lm4sIDEgLyBjb25zdHJhaW50LmRpc3QpO1xyXG4gIGxldCB2MSA9IHN1bShcclxuICAgIGNvbnN0cmFpbnQuYm9keTEucHNldWRvVmVsb2NpdHksXHJcbiAgICBjcm9zcyhjb25zdHJhaW50LmJvZHkxLnBzZXVkb0FuZ3VsYXJWLCBjb25zdHJhaW50LnJhKVxyXG4gICk7XHJcbiAgbGV0IHYyID0gc3VtKFxyXG4gICAgY29uc3RyYWludC5ib2R5Mi5wc2V1ZG9WZWxvY2l0eSxcclxuICAgIGNyb3NzKGNvbnN0cmFpbnQuYm9keTIucHNldWRvQW5ndWxhclYsIGNvbnN0cmFpbnQucmIpXHJcbiAgKTtcclxuICBsZXQgcmVsVmVsb2NpdHkgPSBkaWZmKFxyXG4gICAgY29uc3RyYWludC5ib2R5Mi5wc2V1ZG9WZWxvY2l0eSxcclxuICAgIGNvbnN0cmFpbnQuYm9keTEucHNldWRvVmVsb2NpdHlcclxuICApO1xyXG5cclxuICBjb25zdCBWYyA9IGRvdChyZWxWZWxvY2l0eSwgbm9ybWFsKTtcclxuXHJcbiAgbGV0IGIgPSBNYXRoLm1heCgwLCBjb25zdHJhaW50LmRpc3QgLyBkZWx0YVRpbWUgLSAwLjAxKTtcclxuICBjb25zdCBzb2Z0bmVzcyA9IDI7XHJcbiAgbGV0IGxhbWJkYSA9XHJcbiAgICAoYiAtIFZjKSAvIChjb25zdHJhaW50LmJvZHkxLmludmVyc2VNYXNzICsgY29uc3RyYWludC5ib2R5Mi5pbnZlcnNlTWFzcyk7XHJcblxyXG4gIGlmIChNYXRoLmFicyhsYW1iZGEpIDwgMC4xKSByZXR1cm47XHJcblxyXG4gIGNvbnN0cmFpbnQuYm9keTEuYXBwbHlQc2V1ZG9JbXB1bHNlKHNjYWxlKG5vcm1hbCwgLWxhbWJkYSksIFswLCAwLCAwXSk7XHJcbiAgY29uc3RyYWludC5ib2R5Mi5hcHBseVBzZXVkb0ltcHVsc2Uoc2NhbGUobm9ybWFsLCBsYW1iZGEpLCBbMCwgMCwgMF0pO1xyXG59O1xyXG5cclxuY29uc3Qgc29sdmVDb250YWN0UG9zaXRpb25FcnIgPSAoY29udGFjdCwgZGVsdGFUaW1lLCBuKSA9PiB7XHJcbiAgaWYgKGNvbnRhY3QucGVuRGVwdGggPCAwLjAxKSByZXR1cm47XHJcblxyXG4gIGxldCB2MSA9IHN1bShcclxuICAgIGNvbnRhY3QuYm9keTEucHNldWRvVmVsb2NpdHksXHJcbiAgICBjcm9zcyhjb250YWN0LmJvZHkxLnBzZXVkb0FuZ3VsYXJWLCBjb250YWN0LnJhKVxyXG4gICk7XHJcbiAgbGV0IHYyID0gc3VtKFxyXG4gICAgY29udGFjdC5ib2R5Mi5wc2V1ZG9WZWxvY2l0eSxcclxuICAgIGNyb3NzKGNvbnRhY3QuYm9keTIucHNldWRvQW5ndWxhclYsIGNvbnRhY3QucmIpXHJcbiAgKTtcclxuICBsZXQgcmVsVmVsb2NpdHkgPSBkaWZmKHYyLCB2MSk7XHJcblxyXG4gIGNvbnN0IFZjID0gZG90KHJlbFZlbG9jaXR5LCBjb250YWN0Lm4pO1xyXG4gIC8vaWYoVmMgPCAwKXJldHVyblxyXG5cclxuICBsZXQgYiA9IGNvbnRhY3QucGVuRGVwdGggLyBkZWx0YVRpbWUgLyBuO1xyXG4gIC8vaWYoVmMgPj0gYikgcmV0dXJuXHJcbiAgbGV0IGxhbWJkYSA9XHJcbiAgICAoYiAtIFZjKSAvIChjb250YWN0LmJvZHkxLmludmVyc2VNYXNzICsgY29udGFjdC5ib2R5Mi5pbnZlcnNlTWFzcyk7XHJcblxyXG4gIGNvbnRhY3QucGVuRGVwdGggPSAwO1xyXG5cclxuICAvL2lmKE1hdGguYWJzKGxhbWJkYSkgPCAwLjEpcmV0dXJuXHJcblxyXG4gIGNvbnRhY3QuYm9keTEuYXBwbHlQc2V1ZG9JbXB1bHNlKHNjYWxlKGNvbnRhY3QubiwgLWxhbWJkYSksIFswLCAwLCAwXSk7XHJcbiAgY29udGFjdC5ib2R5Mi5hcHBseVBzZXVkb0ltcHVsc2Uoc2NhbGUoY29udGFjdC5uLCBsYW1iZGEpLCBbMCwgMCwgMF0pO1xyXG59O1xyXG5leHBvcnQgeyBzb2x2ZUNvbGxpc2lvbiwgc29sdmVQb3NpdGlvbiwgc29sdmVDb250YWN0UG9zaXRpb25FcnIgfTtcclxuIiwiaW1wb3J0IHsgdmVjdG9yLCBtMyB9IGZyb20gXCJtYXRoXCI7XHJcblxyXG5jb25zdCB7IGRvdCwgY3Jvc3MsIG5vcm1hbGl6ZSwgZGlmZiwgc2NhbGUsIG5vcm0sIHN1bSwgbm9ybVNxIH0gPSB2ZWN0b3I7XHJcblxyXG5jbGFzcyBDb25zdHJhaW50IHtcclxuICBjb25zdHJ1Y3Rvcih7XHJcbiAgICBib2R5MSxcclxuICAgIGJvZHkyLFxyXG4gICAgbixcclxuICAgIHJhLFxyXG4gICAgcmIsXHJcbiAgICBiaWFzRmFjdG9yID0gMCxcclxuICAgIHBzZXVkb0JpYXNGYWN0b3IgPSAwLFxyXG4gICAgdHJlc2hvbGQgPSAwLjAwMSxcclxuICB9KSB7XHJcbiAgICB0aGlzLmJpYXNGYWN0b3IgPSBiaWFzRmFjdG9yO1xyXG4gICAgdGhpcy5uID0gbjtcclxuICAgIHRoaXMuSiA9IG51bGw7XHJcbiAgICB0aGlzLmludk1hc3MxID0gbnVsbDtcclxuICAgIHRoaXMuSk0gPSBudWxsO1xyXG4gICAgdGhpcy5ib2R5MSA9IGJvZHkxO1xyXG4gICAgdGhpcy5ib2R5MiA9IGJvZHkyO1xyXG4gICAgdGhpcy5yYSA9IHJhO1xyXG4gICAgdGhpcy5yYiA9IHJiO1xyXG4gICAgdGhpcy5wc2V1ZG9CaWFzRmFjdG9yID0gcHNldWRvQmlhc0ZhY3RvcjtcclxuICAgIHRoaXMudHJlc2hvbGQgPSAwLjAwMDE7XHJcbiAgfVxyXG4gIHVwZGF0ZUVxKCkge1xyXG4gICAgY29uc3QgeyBib2R5MSwgYm9keTIsIG4sIHJhLCByYiB9ID0gdGhpcztcclxuICAgIHRoaXMuSiA9IFtzY2FsZShuLCAtMSksIGNyb3NzKG4sIHJhKSwgbiwgY3Jvc3MocmIsIG4pXTtcclxuXHJcbiAgICBjb25zdCBJMSA9IGJvZHkxLmludmVyc2VJbmVydGlhO1xyXG4gICAgY29uc3QgSTIgPSBib2R5Mi5pbnZlcnNlSW5lcnRpYTtcclxuICAgIGxldCBNMSA9IGJvZHkxLmludmVyc2VNYXNzO1xyXG4gICAgbGV0IE0yID0gYm9keTIuaW52ZXJzZU1hc3M7XHJcbiAgICB0aGlzLkpNID0gW1xyXG4gICAgICBzY2FsZSh0aGlzLkpbMF0sIE0xKSxcclxuICAgICAgbTMudHJhbnNmb3JtUG9pbnQoSTEsIHRoaXMuSlsxXSksXHJcbiAgICAgIHNjYWxlKHRoaXMuSlsyXSwgTTIpLFxyXG4gICAgICBtMy50cmFuc2Zvcm1Qb2ludChJMiwgdGhpcy5KWzNdKSxcclxuICAgIF07XHJcblxyXG4gICAgaWYoYm9keTEuc3RhdGljKSB7XHJcbiAgICAgIHRoaXMuSk1bMF0gPSBbMCwwLDBdXHJcbiAgICAgIHRoaXMuSk1bMV0gPSBbMCwwLDBdXHJcbiAgICAgIHRoaXMuSlswXSA9IFswLDAsMF1cclxuICAgICAgdGhpcy5KWzFdID0gWzAsMCwwXVxyXG4gICAgICBcclxuICAgIH1cclxuICAgIGlmKGJvZHkxLnN0YXRpYykge1xyXG4gICAgICB0aGlzLkpNWzJdID0gWzAsMCwwXVxyXG4gICAgICB0aGlzLkpNWzNdID0gWzAsMCwwXVxyXG4gICAgICB0aGlzLkpbMl0gPSBbMCwwLDBdXHJcbiAgICAgIHRoaXMuSlszXSA9IFswLDAsMF1cclxuICAgICAgXHJcbiAgICB9XHJcbiAgICB0aGlzLmVmZk1hc3MgPVxyXG4gICAgICBNMSArIGRvdCh0aGlzLkpNWzBdLCB0aGlzLkpbMV0pICsgTTIgKyBkb3QodGhpcy5KTVszXSwgdGhpcy5KWzNdKTtcclxuXHJcbiAgICB0aGlzLnJlbGF0aXZlVmVsb2NpdHkgPSBkaWZmKFxyXG4gICAgICBzdW0oYm9keTIudmVsb2NpdHksIGNyb3NzKGJvZHkyLmFuZ3VsYXJWLCByYikpLFxyXG4gICAgICBzdW0oYm9keTEudmVsb2NpdHksIGNyb3NzKGJvZHkxLmFuZ3VsYXJWLCByYSkpXHJcbiAgICApO1xyXG5cclxuICAgIHRoaXMucmVsYXRpdmVWZWxvY2l0eU5vcm1hbFByb2plY3Rpb24gPSBkb3QodGhpcy5yZWxhdGl2ZVZlbG9jaXR5LCBuKTtcclxuICB9XHJcbiAgYXBwbHlSZXNvbHZpbmdJbXB1bHNlKGxhbWJkYSkge31cclxufVxyXG5jb25zdCBjbGFtcCA9ICh2LCBtaW4sIG1heCkgPT4ge1xyXG4gIGlmICh2ID4gbWluKSB7XHJcbiAgICBpZiAodiA8IG1heCkgcmV0dXJuIHY7XHJcbiAgICBlbHNlIHJldHVybiBtYXg7XHJcbiAgfVxyXG4gIHJldHVybiBtaW47XHJcbn07XHJcblxyXG5jbGFzcyBDb250YWN0Q29uc3RyYWludCBleHRlbmRzIENvbnN0cmFpbnQge1xyXG4gIGNvbnN0cnVjdG9yKHtcclxuICAgIHJhTG9jYWwsXHJcbiAgICByYkxvY2FsLFxyXG4gICAgcmEsXHJcbiAgICByYixcclxuICAgIG4sXHJcbiAgICBwZW5EZXB0aCxcclxuICAgIGJvZHkxLFxyXG4gICAgYm9keTIsXHJcbiAgICBpLFxyXG4gICAgaixcclxuICAgIGJpYXNGYWN0b3IgPSAwLFxyXG4gICAgcHNldWRvQmlhc0ZhY3RvciA9IDAsXHJcbiAgfSkge1xyXG4gICAgc3VwZXIoeyByYSwgcmIsIG4sIGJvZHkxLCBib2R5MiwgYmlhc0ZhY3RvciwgcHNldWRvQmlhc0ZhY3RvciB9KTtcclxuICAgIHRoaXMucGVuRGVwdGggPSBwZW5EZXB0aDtcclxuICAgIHRoaXMuaW5pdGlhbFZlbFByb2ogPSBudWxsO1xyXG4gICAgdGhpcy5lZmZNYXNzID0gbnVsbDtcclxuICAgIHRoaXMucmFMb2NhbCA9IHJhTG9jYWw7XHJcbiAgICB0aGlzLnJiTG9jYWwgPSByYkxvY2FsO1xyXG4gICAgdGhpcy5KID0gbnVsbDtcclxuICAgIHRoaXMuYWNjSSA9IDA7XHJcbiAgICB0aGlzLmFjY0ZJMSA9IDA7XHJcbiAgICB0aGlzLmFjY0ZJMiA9IDA7XHJcbiAgICB0aGlzLmkgPSBpO1xyXG4gICAgdGhpcy5qID0gajtcclxuICAgIHRoaXMucmVkdWNlciA9IDE7XHJcbiAgICB0aGlzLnJlbGF0aXZlVmVsb2NpdHkgPSBudWxsO1xyXG4gIH1cclxuXHJcbiAgYXBwbHlSZXNvbHZpbmdJbXB1bHNlKGxhbWJkYSkge1xyXG4gICAgaWYgKGxhbWJkYSA8IDApIHJldHVybjtcclxuICAgIGNvbnN0IG1heCA9IHRoaXMuZWZmTWFzcyAqIDEwO1xyXG4gICAgLy9sYW1iZGEgPSBNYXRoLm1pbigxMCwgbGFtYmRhKTtcclxuICAgIGNvbnN0IG1heExhbWJkYSA9IG5vcm0oXHJcbiAgICAgIHN1bShcclxuICAgICAgICBzY2FsZSh0aGlzLmJvZHkxLnZlbG9jaXR5LCB0aGlzLmJvZHkxLm1hc3MpLFxyXG4gICAgICAgIHNjYWxlKHRoaXMuYm9keTIudmVsb2NpdHksIHRoaXMuYm9keTIubWFzcylcclxuICAgICAgKVxyXG4gICAgKTtcclxuICAgIGxhbWJkYSA9IE1hdGgubWluKGxhbWJkYSwgbWF4TGFtYmRhKTtcclxuICAgIHRoaXMuYm9keTEuYXBwbHlJbXB1bHNlKHNjYWxlKHRoaXMuSlswXSwgbGFtYmRhKSwgdGhpcy5yYSk7XHJcbiAgICB0aGlzLmJvZHkyLmFwcGx5SW1wdWxzZShzY2FsZSh0aGlzLkpbMl0sIGxhbWJkYSksIHRoaXMucmIpO1xyXG4gICAgdGhpcy5hcHBseUZyaWN0aW9uSW1wdWxzZShsYW1iZGEpO1xyXG4gIH1cclxuICBhcHBseUZyaWN0aW9uSW1wdWxzZShsYW1iZGEpIHtcclxuICAgIGNvbnN0IHsgcmEsIHJiLCBib2R5MSwgYm9keTIsIGksIGogfSA9IHRoaXM7XHJcblxyXG4gICAgY29uc3QgZkNvbnN0cmFpbnQxID0gbmV3IENvbnN0cmFpbnQoe1xyXG4gICAgICBib2R5MSxcclxuICAgICAgYm9keTIsXHJcbiAgICAgIG46IHNjYWxlKGksIC0xKSxcclxuICAgICAgcmEsXHJcbiAgICAgIHJiLFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBmQ29uc3RyYWludDIgPSBuZXcgQ29uc3RyYWludCh7XHJcbiAgICAgIGJvZHkxLFxyXG4gICAgICBib2R5MixcclxuICAgICAgbjogc2NhbGUoaiwgLTEpLFxyXG4gICAgICByYSxcclxuICAgICAgcmIsXHJcbiAgICB9KTtcclxuXHJcbiAgICBmQ29uc3RyYWludDEudXBkYXRlRXEoKTtcclxuICAgIGZDb25zdHJhaW50Mi51cGRhdGVFcSgpO1xyXG5cclxuICAgIGxldCBtdSA9IGJvZHkxLmZyaWN0aW9uICsgYm9keTEuZnJpY3Rpb247XHJcblxyXG4gICAgbGV0IGZJbXB1bHNlMSA9XHJcbiAgICAgIGZDb25zdHJhaW50MS5yZWxhdGl2ZVZlbG9jaXR5Tm9ybWFsUHJvamVjdGlvbiAvIGZDb25zdHJhaW50MS5lZmZNYXNzO1xyXG4gICAgZkltcHVsc2UxID0gY2xhbXAoZkltcHVsc2UxLCAtbGFtYmRhICogbXUsIGxhbWJkYSAqIG11KTtcclxuXHJcbiAgICBsZXQgZkltcHVsc2UyID1cclxuICAgICAgZkNvbnN0cmFpbnQyLnJlbGF0aXZlVmVsb2NpdHlOb3JtYWxQcm9qZWN0aW9uIC8gZkNvbnN0cmFpbnQyLmVmZk1hc3M7XHJcblxyXG4gICAgZkltcHVsc2UyID0gY2xhbXAoZkltcHVsc2UyLCAtbGFtYmRhICogbXUsIGxhbWJkYSAqIG11KTtcclxuXHJcbiAgICB0aGlzLmFjY0ZJMSArPSBmSW1wdWxzZTE7XHJcbiAgICB0aGlzLmFjY0ZJMiArPSBmSW1wdWxzZTI7XHJcblxyXG4gICAgbGV0IGZWZWMgPSBzdW0oc2NhbGUoaSwgZkltcHVsc2UxKSwgc2NhbGUoaiwgZkltcHVsc2UyKSk7XHJcblxyXG4gICAgYm9keTEuYXBwbHlJbXB1bHNlKHNjYWxlKGZWZWMsIC0xKSwgcmEpO1xyXG4gICAgYm9keTIuYXBwbHlJbXB1bHNlKGZWZWMsIHJiKTtcclxuICB9XHJcbiAgYXBwbHlSZXNvbHZpbmdQc2V1ZG9JbXB1bHNlKGxhbWJkYSkge1xyXG4gICAgaWYgKGxhbWJkYSA8IDApIHJldHVybjtcclxuICAgIGNvbnN0IG1heCA9IHRoaXMuZWZmTWFzcyAqIDEwO1xyXG4gICAgLy8gbGFtYmRhID0gTWF0aC5tYXgoTWF0aC5taW4oMTAwLCBsYW1iZGEpLSAwLjEsMClcclxuICAgIHRoaXMuYm9keTEuYXBwbHlQc2V1ZG9JbXB1bHNlKHNjYWxlKHRoaXMuSlswXSwgbGFtYmRhKSwgdGhpcy5yYSk7XHJcbiAgICB0aGlzLmJvZHkyLmFwcGx5UHNldWRvSW1wdWxzZShzY2FsZSh0aGlzLkpbMl0sIGxhbWJkYSksIHRoaXMucmIpO1xyXG4gIH1cclxufVxyXG5cclxuY2xhc3MgSm9pbnQgZXh0ZW5kcyBDb25zdHJhaW50IHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIGxvY2FsUmEsXHJcbiAgICBsb2NhbFJiLFxyXG4gICAgYm9keTEsXHJcbiAgICBib2R5MixcclxuICAgIGJpYXNGYWN0b3IgPSAwLFxyXG4gICAgcHNldWRvQmlhc0ZhY3RvciA9IDBcclxuICApIHtcclxuICAgIHN1cGVyKHsgYm9keTEsIGJvZHkyLCBiaWFzRmFjdG9yLCBwc2V1ZG9CaWFzRmFjdG9yIH0pO1xyXG4gICAgdGhpcy5sb2NhbFJhID0gbG9jYWxSYTtcclxuICAgIHRoaXMubG9jYWxSYiA9IGxvY2FsUmI7XHJcbiAgICB0aGlzLlBBID0gdGhpcy5ib2R5MS5jb2xsaWRlci5sb2NhbFRvR2xvYmFsKHRoaXMubG9jYWxSYSk7XHJcbiAgICB0aGlzLlBCID0gdGhpcy5ib2R5Mi5jb2xsaWRlci5sb2NhbFRvR2xvYmFsKHRoaXMubG9jYWxSYik7XHJcbiAgICB0aGlzLnRyZXNob2xkID0gMC4wMDE7XHJcbiAgICB0aGlzLnJlZHVjZXIgPSAwLjU7XHJcbiAgICB0aGlzLm1heEltcHVsc2UgPSAwLjc7XHJcbiAgfVxyXG4gIHVwZGF0ZUVxKCkge1xyXG4gICAgdGhpcy5QQSA9IHRoaXMuYm9keTEuY29sbGlkZXIubG9jYWxUb0dsb2JhbCh0aGlzLmxvY2FsUmEpO1xyXG4gICAgdGhpcy5QQiA9IHRoaXMuYm9keTIuY29sbGlkZXIubG9jYWxUb0dsb2JhbCh0aGlzLmxvY2FsUmIpO1xyXG4gICAgY29uc3QgZGlyID0gZGlmZih0aGlzLlBBLCB0aGlzLlBCKTtcclxuICAgIHRoaXMubiA9IG5vcm1hbGl6ZShkaXIpO1xyXG5cclxuICAgIHRoaXMucmEgPSBkaWZmKHRoaXMuUEEsIHRoaXMuYm9keTEuY29sbGlkZXIucG9zKTtcclxuICAgIHRoaXMucmIgPSBkaWZmKHRoaXMuUEIsIHRoaXMuYm9keTIuY29sbGlkZXIucG9zKTtcclxuICAgIHRoaXMucGVuRGVwdGggPSBub3JtKGRpcik7XHJcblxyXG4gICAgdGhpcy5KID0gW1xyXG4gICAgICBzY2FsZSh0aGlzLm4sIC0xKSxcclxuICAgICAgY3Jvc3ModGhpcy5uLCB0aGlzLnJhKSxcclxuICAgICAgc2NhbGUodGhpcy5uLCAxKSxcclxuICAgICAgY3Jvc3ModGhpcy5yYiwgdGhpcy5uKSxcclxuICAgIF07XHJcbiAgICBjb25zdCBJMSA9IHRoaXMuYm9keTEuaW52ZXJzZUluZXJ0aWE7XHJcbiAgICBjb25zdCBJMiA9IHRoaXMuYm9keTIuaW52ZXJzZUluZXJ0aWE7XHJcbiAgICBjb25zdCBNMSA9IHRoaXMuYm9keTEuaW52ZXJzZU1hc3M7XHJcbiAgICBjb25zdCBNMiA9IHRoaXMuYm9keTIuaW52ZXJzZU1hc3M7XHJcbiAgICB0aGlzLkpNID0gW1xyXG4gICAgICBzY2FsZSh0aGlzLkpbMF0sIE0xKSxcclxuICAgICAgbTMudHJhbnNmb3JtUG9pbnQoSTEsIHRoaXMuSlsxXSksXHJcbiAgICAgIHNjYWxlKHRoaXMuSlsyXSwgTTIpLFxyXG4gICAgICBtMy50cmFuc2Zvcm1Qb2ludChJMiwgdGhpcy5KWzNdKSxcclxuICAgIF07XHJcbiAgICB0aGlzLmVmZk1hc3MgPVxyXG4gICAgICBNMSArIGRvdCh0aGlzLkpNWzBdLCB0aGlzLkpbMV0pICsgTTIgKyBkb3QodGhpcy5KTVszXSwgdGhpcy5KWzNdKTtcclxuXHJcbiAgICB0aGlzLnJlbGF0aXZlVmVsb2NpdHkgPSBkaWZmKFxyXG4gICAgICBzdW0odGhpcy5ib2R5Mi52ZWxvY2l0eSwgY3Jvc3ModGhpcy5ib2R5Mi5hbmd1bGFyViwgdGhpcy5yYikpLFxyXG4gICAgICBzdW0odGhpcy5ib2R5MS52ZWxvY2l0eSwgY3Jvc3ModGhpcy5ib2R5MS5hbmd1bGFyViwgdGhpcy5yYSkpXHJcbiAgICApO1xyXG4gICAgdGhpcy5yZWxhdGl2ZVZlbG9jaXR5Tm9ybWFsUHJvamVjdGlvbiA9IGRvdCh0aGlzLnJlbGF0aXZlVmVsb2NpdHksIHRoaXMubik7XHJcbiAgfVxyXG4gIGFwcGx5UmVzb2x2aW5nSW1wdWxzZShsYW1iZGEpIHtcclxuICAgIGNvbnN0IG1heExhbWJkYSA9IG5vcm0oXHJcbiAgICAgIHN1bShcclxuICAgICAgICBzY2FsZSh0aGlzLmJvZHkxLnZlbG9jaXR5LCB0aGlzLmJvZHkxLm1hc3MpLFxyXG4gICAgICAgIHNjYWxlKHRoaXMuYm9keTIudmVsb2NpdHksIHRoaXMuYm9keTIubWFzcylcclxuICAgICAgKVxyXG4gICAgKTtcclxuICAgIGxhbWJkYSA9IGNsYW1wKGxhbWJkYSwgLTAuMSwgMC4xKTtcclxuXHJcbiAgICB0aGlzLmJvZHkxLmFwcGx5SW1wdWxzZShzY2FsZSh0aGlzLkpbMF0sIGxhbWJkYSksIHRoaXMucmEpO1xyXG4gICAgdGhpcy5ib2R5Mi5hcHBseUltcHVsc2Uoc2NhbGUodGhpcy5KWzJdLCBsYW1iZGEpLCB0aGlzLnJiKTtcclxuICB9XHJcbiAgYXBwbHlSZXNvbHZpbmdQc2V1ZG9JbXB1bHNlKGxhbWJkYSkge1xyXG4gICAgY29uc3QgbWF4ID0gdGhpcy5lZmZNYXNzICogMTA7XHJcbiAgICAvL2xhbWJkYSA9IGNsYW1wKGxhbWJkYSwgLTEsIDEpXHJcbiAgICB0aGlzLmJvZHkxLmFwcGx5UHNldWRvSW1wdWxzZShzY2FsZSh0aGlzLkpbMF0sIGxhbWJkYSksIFswLCAwLCAwXSk7XHJcbiAgICB0aGlzLmJvZHkyLmFwcGx5UHNldWRvSW1wdWxzZShzY2FsZSh0aGlzLkpbMl0sIGxhbWJkYSksIFswLCAwLCAwXSk7XHJcbiAgfVxyXG59XHJcbmV4cG9ydCB7IENvbnRhY3RDb25zdHJhaW50LCBDb25zdHJhaW50LCBKb2ludCB9O1xyXG4iLCJpbXBvcnQgeyBCb3ggfSBmcm9tIFwiLi9jb2xsaWRlclwiO1xyXG5pbXBvcnQgeyBKb2ludCB9IGZyb20gXCIuL2NvbnRhY3RcIjtcclxuaW1wb3J0IHsgUmlnaWRCb2R5IH0gZnJvbSBcIi4vUmlnaWRCb2R5XCI7XHJcbmltcG9ydCB7dmVjdG9yfSBmcm9tICdtYXRoJ1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihwb3MgPSBbMCwwLDBdKXtcclxuICAgIGNvbnN0IGJvZHkgPSBuZXcgUmlnaWRCb2R5KG5ldyBCb3goMSw0LDEpKVxyXG4gICAgY29uc3QgbGVmdEhhbmQgPSBuZXcgUmlnaWRCb2R5KG5ldyBCb3goMSwzLDEpKVxyXG4gICAgY29uc3QgcmlnaHRIYW5kID0gbmV3IFJpZ2lkQm9keShuZXcgQm94KDEsMywxKSlcclxuICAgIGNvbnN0IGxlZnRMZWcgPSBuZXcgUmlnaWRCb2R5KG5ldyBCb3goMSwzLDEpKVxyXG4gICAgY29uc3QgcmlnaHRMZWcgPSBuZXcgUmlnaWRCb2R5KG5ldyBCb3goMSwzLDEpKVxyXG4gICAgY29uc3QgaGVhZCA9IG5ldyBSaWdpZEJvZHkobmV3IEJveCgxLjUsMS41LDEuNSkpXHJcbiAgICBjb25zdCBjb25zdHJhaW50cyA9IFtcclxuICAgICAgICBuZXcgSm9pbnQoWzAsMi41LDBdLCBbMCwtMSwwXSwgYm9keSwgaGVhZCwgMC4xLCAgMC4xKSxcclxuICAgICAgICBuZXcgSm9pbnQoWy0yLDIsMF0sIFswLDIsMF0sIGJvZHksIGxlZnRIYW5kLCAwLjEsICAwLjEpLFxyXG4gICAgICAgIG5ldyBKb2ludChbMiwyLDBdLCBbMCwyLDBdLCBib2R5LCByaWdodEhhbmQsICAwLjEsICAwLjEpLFxyXG4gICAgICAgIG5ldyBKb2ludChbMS43LC0yLDBdLCBbMCwxLjUsMF0sIGJvZHksIHJpZ2h0TGVnLCAwLjEsICAwLjEpLFxyXG4gICAgICAgIG5ldyBKb2ludChbLTEuNywtMiwwXSwgWzAsMS41LDBdLCBib2R5LCBsZWZ0TGVnLCAwLjEsICAwLjExKSxcclxuICAgIF1cclxuICAgIGJvZHkudHJhbnNsYXRlKHBvcylcclxuICAgXHJcbiAgICBoZWFkLnRyYW5zbGF0ZSh2ZWN0b3Iuc3VtKHBvcywgWzAsMiwwXSkpXHJcbiAgICBsZWZ0SGFuZC50cmFuc2xhdGUodmVjdG9yLnN1bShwb3MsIFstMywyLDBdKSlcclxuICAgIHJpZ2h0SGFuZC50cmFuc2xhdGUodmVjdG9yLnN1bShwb3MsIFszLDIsMF0pKVxyXG4gICAgcmlnaHRMZWcudHJhbnNsYXRlKHZlY3Rvci5zdW0ocG9zLCBbMiwgLTIuNSwwXSkpXHJcbiAgICBsZWZ0TGVnLnRyYW5zbGF0ZSh2ZWN0b3Iuc3VtKHBvcywgWy0yLCAtMi41LDBdKSlcclxuICAgIGNvbnN0IGJvZGllcyA9IFtib2R5LCBsZWZ0SGFuZCwgcmlnaHRIYW5kLCByaWdodExlZywgbGVmdExlZywgaGVhZF1cclxuICAgIGJvZGllcy5mb3JFYWNoKGI9PmIuc2V0TWFzcygyMCkpXHJcbiAgICBcclxuICAgIFxyXG4gICAgcmV0dXJuIFtib2RpZXMsIGNvbnN0cmFpbnRzXVxyXG59IiwiY2xhc3MgRXZlbnRFbWl0dGVyIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuZXZlbnRzID0ge307XHJcbiAgfVxyXG4gIG9uKGV2ZW50TmFtZSwgZm4pIHtcclxuICAgIGlmICghdGhpcy5ldmVudHNbZXZlbnROYW1lXSkge1xyXG4gICAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdID0gW107XHJcbiAgICB9XHJcbiAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdLnB1c2goZm4pO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXSA9IHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0uZmlsdGVyKFxyXG4gICAgICAgIChldmVudEZuKSA9PiBmbiAhPT0gZXZlbnRGblxyXG4gICAgICApO1xyXG4gICAgfTtcclxuICB9XHJcbiAgZW1pdChldmVudE5hbWUsIGRhdGEpIHtcclxuICAgIGlmICh0aGlzLmV2ZW50c1tldmVudE5hbWVdKSB7XHJcbiAgICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0uZm9yRWFjaCgoZm4pID0+IHtcclxuICAgICAgICBmbi5jYWxsKG51bGwsIGRhdGEpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuZXhwb3J0IHsgRXZlbnRFbWl0dGVyIH07XHJcbiIsImltcG9ydCB7IHZlY3RvciwgbTMsIG00IH0gZnJvbSBcIm1hdGhcIjtcclxuaW1wb3J0IHsgY2xpcCwgaXNJbkNsb2Nrd2lzZSB9IGZyb20gXCIuL2NsaXBwaW5nXCI7XHJcbmltcG9ydCB7IENvbnRhY3QgfSBmcm9tIFwiLi9jb250YWN0XCI7XHJcbmNvbnN0IHsgZG90LCBjcm9zcywgbm9ybWFsaXplLCBzdW0sIGRpZmYsIGxlbiwgc2NhbGUsIGlzTnVsbCwgbm9ybSB9ID0gdmVjdG9yO1xyXG5jb25zdCBjbGlwQmlhcyA9IDAuMDU7XHJcbmNvbnN0IEdKS19NQVhfSVRFUkFUSU9OU19OVU0gPSA2NDtcclxuXHJcbmNvbnN0IGZpbmRDbG9zZXN0RmFjZSA9IChjb2xsaWRlciwgbm9ybWFsKSA9PiB7XHJcbiAgY29uc3Qgbm9ybWFscyA9IGNvbGxpZGVyLmdldE5vcm1hbHNHbG9iYWwoKTtcclxuICBsZXQgbWluRG90ID0gZG90KG5vcm1hbCwgbm9ybWFsc1swXSk7XHJcbiAgbGV0IGluZGV4ID0gMDtcclxuICBmb3IgKGxldCBpID0gMSwgbiA9IG5vcm1hbHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICBjb25zdCBfZG90ID0gZG90KG5vcm1hbHNbaV0sIG5vcm1hbCk7XHJcbiAgICBpZiAoX2RvdCA8IG1pbkRvdCkge1xyXG4gICAgICBtaW5Eb3QgPSBfZG90O1xyXG4gICAgICBpbmRleCA9IGk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0IGZhY2VJbmRpY2VzID0gY29sbGlkZXIuaW5kaWNlc1tpbmRleF07XHJcbiAgY29uc3QgbSA9IGNvbGxpZGVyLmdldE00KCk7XHJcbiAgcmV0dXJuIFtcclxuICAgIGZhY2VJbmRpY2VzLm1hcCgoaSkgPT4gbTQudHJhbnNmb3JtUG9pbnQobSwgY29sbGlkZXIucG9pbnRzW2ldKSksXHJcbiAgICBub3JtYWxzW2luZGV4XSxcclxuICBdO1xyXG59O1xyXG5jb25zdCByYXlWc1BsYW5lSW50ZXJzZWMgPSAocGxhbmUsIHBvaW50LCBkaXJlY3Rpb24pID0+IHtcclxuICBjb25zdCBbb3JpZ2luLCBub3JtYWxdID0gcGxhbmU7XHJcbiAgY29uc3QgX2RvdCA9IGRvdChub3JtYWwsIGRpcmVjdGlvbik7XHJcbiAgY29uc3QgZnJvbVBvaW50VG9PcmlnaW4gPSBkaWZmKHBvaW50LCBvcmlnaW4pO1xyXG4gIGNvbnN0IGZhYyA9IGRvdChmcm9tUG9pbnRUb09yaWdpbiwgbm9ybWFsKSAvIF9kb3Q7XHJcbiAgcmV0dXJuIGRpZmYocG9pbnQsIHNjYWxlKGRpcmVjdGlvbiwgZmFjKSk7XHJcbn07XHJcbmNvbnN0IGlzUG9pbnRCZWhpbmRQbGFuZSA9IChwbGFuZSwgcG9pbnQsIHNpZ24gPSAxKSA9PiB7XHJcbiAgY29uc3QgW29yaWdpbiwgbm9ybWFsXSA9IHBsYW5lO1xyXG4gIHJldHVybiBkb3Qobm9ybWFsLCBkaWZmKHBvaW50LCBvcmlnaW4pKSAqIHNpZ24gPiAwIC0gY2xpcEJpYXM7XHJcbn07XHJcbmNvbnN0IHBvaW50T25QbGFuZVByb2plY3Rpb24gPSAocGxhbmUsIHBvaW50KSA9PiB7XHJcbiAgY29uc3QgW29yaWdpbiwgbm9ybWFsXSA9IHBsYW5lO1xyXG4gIGNvbnN0IGZyb21Qb2ludFRvT3JpZ2luID0gZGlmZihwb2ludCwgb3JpZ2luKTtcclxuICBjb25zdCBwcm9qQWxvbmdOb3JtYWwgPSBkb3Qobm9ybWFsLCBmcm9tUG9pbnRUb09yaWdpbik7XHJcblxyXG4gIHJldHVybiBkaWZmKHBvaW50LCBzY2FsZShub3JtYWwsIHByb2pBbG9uZ05vcm1hbCkpO1xyXG59O1xyXG5jb25zdCBjbGlwUG9pbnRzQmVoaW5kUGxhbmUgPSAocGxhbmUsIHBvaW50cywgc2lnbiA9IDEpID0+IHtcclxuICBjb25zdCBbb3JpZ2luLCBub3JtYWxdID0gcGxhbmU7XHJcblxyXG4gIHJldHVybiBwb2ludHMuZmlsdGVyKChwb2ludCkgPT4gZG90KG5vcm1hbCwgZGlmZihwb2ludCwgb3JpZ2luKSkgKiBzaWduID4gMCk7XHJcbn07XHJcblxyXG5jb25zdCBnZXQyRGNvb3Jkc09uUGxhbmUgPSAoaSwgaiwgcG9pbnQpID0+IHtcclxuICByZXR1cm4gW2RvdChpLCBwb2ludCksIGRvdChqLCBwb2ludCldO1xyXG59O1xyXG5cclxuY29uc3Qgc3V0aGVybGFuZEhvZGdtYW4gPSAoUywgQykgPT4ge307XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVfc2ltcGxleDMoYSwgYiwgYywgZCwgc2VhcmNoX2Rpciwgc2ltcF9kaW0pIHtcclxuICBjb25zdCBuID0gY3Jvc3MoZGlmZih0aGlzLmIsIHRoaXMuYSksIGRpZmYodGhpcy5jLCB0aGlzLmEpKTtcclxuICBjb25zdCBBTyA9IHNjYWxlKHRoaXMuYSwgLTEpO1xyXG5cclxuICB0aGlzLnNpbXBfZGltID0gMjtcclxuICBpZiAoZG90KGNyb3NzKGRpZmYodGhpcy5iLCB0aGlzLmEpLCBuKSwgQU8pID4gMCkge1xyXG4gICAgdGhpcy5jID0gdGhpcy5hO1xyXG4gICAgdGhpcy5zZWFyY2hfZGlyID0gY3Jvc3MoXHJcbiAgICAgIGNyb3NzKGRpZmYodGhpcy5iLCB0aGlzLmEpLCBBTyksXHJcbiAgICAgIGRpZmYodGhpcy5iLCB0aGlzLmEpXHJcbiAgICApO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICBpZiAoZG90KGNyb3NzKG4sIGRpZmYodGhpcy5jLCB0aGlzLmEpKSwgQU8pID4gMCkge1xyXG4gICAgdGhpcy5iID0gdGhpcy5hO1xyXG4gICAgdGhpcy5zZWFyY2hfZGlyID0gY3Jvc3MoXHJcbiAgICAgIGNyb3NzKGRpZmYodGhpcy5jLCB0aGlzLmEpLCBBTyksXHJcbiAgICAgIGRpZmYodGhpcy5jLCB0aGlzLmEpXHJcbiAgICApO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICB0aGlzLnNpbXBfZGltID0gMztcclxuICBpZiAoZG90KG4sIEFPKSA+IDApIHtcclxuICAgIHRoaXMuZCA9IHRoaXMuYztcclxuICAgIHRoaXMuYyA9IHRoaXMuYjtcclxuICAgIHRoaXMuYiA9IHRoaXMuYTtcclxuICAgIHRoaXMuc2VhcmNoX2RpciA9IG47XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIHRoaXMuZCA9IHRoaXMuYjtcclxuICB0aGlzLmIgPSB0aGlzLmE7XHJcbiAgdGhpcy5zZWFyY2hfZGlyID0gc2NhbGUobiwgLTEpO1xyXG4gIHJldHVybjtcclxufVxyXG5mdW5jdGlvbiB1cGRhdGVfc2ltcGxleDQoYSwgYiwgYywgZCwgc2VhcmNoX2Rpciwgc2ltcF9kaW0pIHtcclxuICBjb25zdCBBQkMgPSBjcm9zcyhkaWZmKHRoaXMuYiwgdGhpcy5hKSwgZGlmZih0aGlzLmMsIHRoaXMuYSkpO1xyXG4gIGNvbnN0IEFDRCA9IGNyb3NzKGRpZmYodGhpcy5jLCB0aGlzLmEpLCBkaWZmKHRoaXMuZCwgdGhpcy5hKSk7XHJcbiAgY29uc3QgQURCID0gY3Jvc3MoZGlmZih0aGlzLmQsIHRoaXMuYSksIGRpZmYodGhpcy5iLCB0aGlzLmEpKTtcclxuICBjb25zdCBBTyA9IHNjYWxlKHRoaXMuYSwgLTEpO1xyXG4gIHRoaXMuc2ltcF9kaW0gPSAzO1xyXG5cclxuICBpZiAoZG90KEFCQywgQU8pID4gMCkge1xyXG4gICAgdGhpcy5kID0gdGhpcy5jO1xyXG4gICAgdGhpcy5jID0gdGhpcy5iO1xyXG4gICAgdGhpcy5iID0gdGhpcy5hO1xyXG4gICAgdGhpcy5zZWFyY2hfZGlyID0gQUJDO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgaWYgKGRvdChBQ0QsIEFPKSA+IDApIHtcclxuICAgIHRoaXMuYiA9IHRoaXMuYTtcclxuICAgIHRoaXMuc2VhcmNoX2RpciA9IEFDRDtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIGlmIChkb3QoQURCLCBBTykgPiAwKSB7XHJcbiAgICB0aGlzLmMgPSB0aGlzLmQ7XHJcbiAgICB0aGlzLmQgPSB0aGlzLmI7XHJcbiAgICB0aGlzLmIgPSB0aGlzLmE7XHJcbiAgICB0aGlzLnNlYXJjaF9kaXIgPSBBREI7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIHJldHVybiB0cnVlO1xyXG59XHJcbmZ1bmN0aW9uIGdqayhib2R5MSwgYm9keTIpIHtcclxuICBjb25zdCBjb2xsMSA9IGJvZHkxLmNvbGxpZGVyO1xyXG4gIGNvbnN0IGNvbGwyID0gYm9keTIuY29sbGlkZXI7XHJcbiAgdGhpcy5hID0gWzAsIDAsIDBdO1xyXG4gIHRoaXMuYiA9IFswLCAwLCAwXTtcclxuICB0aGlzLmMgPSBbMCwgMCwgMF07XHJcbiAgdGhpcy5kID0gWzAsIDAsIDBdO1xyXG4gIHRoaXMuc2VhcmNoX2RpciA9IFswLCAwLCAwXTtcclxuICB0aGlzLnNpbXBfZGltID0gMDtcclxuXHJcbiAgdGhpcy5vcmlnaW5zTWFwID0gbmV3IE1hcCgpO1xyXG5cclxuICBsZXQgbXR2ID0gWzAsIDAsIDBdO1xyXG5cclxuICB0aGlzLnNlYXJjaF9kaXIgPSBkaWZmKGNvbGwxLnBvcywgY29sbDIucG9zKTtcclxuICBjb25zdCBjX29yaWdpbjEgPSBjb2xsMS5zdXBwb3J0KHNjYWxlKHRoaXMuc2VhcmNoX2RpciwgLTEpKTtcclxuICBjb25zdCBjX29yaWdpbjIgPSBjb2xsMi5zdXBwb3J0KHRoaXMuc2VhcmNoX2Rpcik7XHJcbiAgdGhpcy5jID0gZGlmZihjX29yaWdpbjIsIGNfb3JpZ2luMSk7XHJcblxyXG4gIHRoaXMub3JpZ2luc01hcC5zZXQodGhpcy5jLCBbY19vcmlnaW4xLCBjX29yaWdpbjJdKTtcclxuXHJcbiAgdGhpcy5zZWFyY2hfZGlyID0gc2NhbGUodGhpcy5jLCAtMSk7XHJcblxyXG4gIGNvbnN0IGJfb3JpZ2luMSA9IGNvbGwxLnN1cHBvcnQoc2NhbGUodGhpcy5zZWFyY2hfZGlyLCAtMSkpO1xyXG4gIGNvbnN0IGJfb3JpZ2luMiA9IGNvbGwyLnN1cHBvcnQodGhpcy5zZWFyY2hfZGlyKTtcclxuICB0aGlzLmIgPSBkaWZmKGJfb3JpZ2luMiwgYl9vcmlnaW4xKTtcclxuXHJcbiAgdGhpcy5vcmlnaW5zTWFwLnNldCh0aGlzLmIsIFtiX29yaWdpbjEsIGJfb3JpZ2luMl0pO1xyXG5cclxuICBpZiAoZG90KHRoaXMuYiwgdGhpcy5zZWFyY2hfZGlyKSA8IDApIHtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgdGhpcy5zZWFyY2hfZGlyID0gY3Jvc3MoXHJcbiAgICBjcm9zcyhkaWZmKHRoaXMuYywgdGhpcy5iKSwgc2NhbGUodGhpcy5iLCAtMSkpLFxyXG4gICAgZGlmZih0aGlzLmMsIHRoaXMuYilcclxuICApO1xyXG5cclxuICBpZiAoaXNOdWxsKHRoaXMuc2VhcmNoX2RpcikpIHtcclxuICAgIHRoaXMuc2VhcmNoX2RpciA9IGNyb3NzKGRpZmYodGhpcy5jLCB0aGlzLmIpLCBbMSwgMCwgMF0pO1xyXG5cclxuICAgIGlmIChpc051bGwodGhpcy5zZWFyY2hfZGlyKSkge1xyXG4gICAgICB0aGlzLnNlYXJjaF9kaXIgPSBjcm9zcyhkaWZmKHRoaXMuYywgdGhpcy5iKSwgWzAsIDAsIC0xXSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB0aGlzLnNpbXBfZGltID0gMjtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IEdKS19NQVhfSVRFUkFUSU9OU19OVU07ICsraSkge1xyXG4gICAgY29uc3QgYV9vcmlnaW4xID0gY29sbDEuc3VwcG9ydChzY2FsZSh0aGlzLnNlYXJjaF9kaXIsIC0xKSk7XHJcbiAgICBjb25zdCBhX29yaWdpbjIgPSBjb2xsMi5zdXBwb3J0KHRoaXMuc2VhcmNoX2Rpcik7XHJcbiAgICB0aGlzLmEgPSBkaWZmKGFfb3JpZ2luMiwgYV9vcmlnaW4xKTtcclxuXHJcbiAgICB0aGlzLm9yaWdpbnNNYXAuc2V0KHRoaXMuYSwgW2Ffb3JpZ2luMSwgYV9vcmlnaW4yXSk7XHJcbiAgICBpZiAoZG90KHRoaXMuYSwgdGhpcy5zZWFyY2hfZGlyKSA8IDApIHJldHVybiBudWxsO1xyXG5cclxuICAgIHRoaXMuc2ltcF9kaW0rKztcclxuICAgIGlmICh0aGlzLnNpbXBfZGltID09PSAzKSB7XHJcbiAgICAgIHVwZGF0ZV9zaW1wbGV4My5hcHBseSh0aGlzKTtcclxuICAgIH0gZWxzZSBpZiAodXBkYXRlX3NpbXBsZXg0LmFwcGx5KHRoaXMpKSB7XHJcbiAgICAgIHJldHVybiBFUEEodGhpcy5hLCB0aGlzLmIsIHRoaXMuYywgdGhpcy5kLCB0aGlzLm9yaWdpbnNNYXAsIGJvZHkxLCBib2R5Mik7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBudWxsO1xyXG59XHJcblxyXG5jb25zdCBiYXJpY2VudHJpYyA9IChmYWNlLCBwb2ludCkgPT4ge1xyXG4gIGxldCBhMTEgPSBmYWNlWzBdWzBdO1xyXG4gIGxldCBhMTIgPSBmYWNlWzFdWzBdO1xyXG4gIGxldCBhMTMgPSBmYWNlWzJdWzBdO1xyXG4gIGxldCBiMSA9IHBvaW50WzBdO1xyXG4gIGxldCBhMjEgPSBmYWNlWzBdWzFdO1xyXG4gIGxldCBhMjIgPSBmYWNlWzFdWzFdO1xyXG4gIGxldCBhMjMgPSBmYWNlWzJdWzFdO1xyXG4gIGxldCBiMiA9IHBvaW50WzFdO1xyXG4gIGxldCBhMzEgPSBmYWNlWzBdWzJdO1xyXG4gIGxldCBhMzIgPSBmYWNlWzFdWzJdO1xyXG4gIGxldCBhMzMgPSBmYWNlWzJdWzJdO1xyXG4gIGxldCBiMyA9IHBvaW50WzJdO1xyXG5cclxuICBjb25zdCBkID1cclxuICAgIGExMSAqIGEyMiAqIGEzMyArXHJcbiAgICBhMjEgKiBhMzIgKiBhMTMgK1xyXG4gICAgYTEyICogYTIzICogYTMxIC1cclxuICAgIGExMyAqIGEyMiAqIGEzMSAtXHJcbiAgICBhMjEgKiBhMTIgKiBhMzMgLVxyXG4gICAgYTMyICogYTIzICogYTExO1xyXG5cclxuICBjb25zdCBkMSA9XHJcbiAgICBiMSAqIGEyMiAqIGEzMyArXHJcbiAgICBiMiAqIGEzMiAqIGExMyArXHJcbiAgICBhMTIgKiBhMjMgKiBiMyAtXHJcbiAgICBhMTMgKiBhMjIgKiBiMyAtXHJcbiAgICBiMiAqIGExMiAqIGEzMyAtXHJcbiAgICBhMzIgKiBhMjMgKiBiMTtcclxuXHJcbiAgY29uc3QgZDIgPVxyXG4gICAgYTExICogYjIgKiBhMzMgK1xyXG4gICAgYTIxICogYjMgKiBhMTMgK1xyXG4gICAgYjEgKiBhMjMgKiBhMzEgLVxyXG4gICAgYTEzICogYjIgKiBhMzEgLVxyXG4gICAgYTExICogYjMgKiBhMjMgLVxyXG4gICAgYTIxICogYjEgKiBhMzM7XHJcblxyXG4gIGNvbnN0IGQzID1cclxuICAgIGExMSAqIGEyMiAqIGIzICtcclxuICAgIGEyMSAqIGEzMiAqIGIxICtcclxuICAgIGExMiAqIGIyICogYTMxIC1cclxuICAgIGIxICogYTIyICogYTMxIC1cclxuICAgIGEyMSAqIGExMiAqIGIzIC1cclxuICAgIGIyICogYTMyICogYTExO1xyXG5cclxuICByZXR1cm4gW2QxIC8gZCwgZDIgLyBkLCBkMyAvIGRdO1xyXG59O1xyXG5jb25zdCBvcmlnaW5Ub0ZhY2VQcm9qID0gKGZhY2UpID0+IHtcclxuICBjb25zdCBub3JtYWwgPSBmYWNlWzNdO1xyXG4gIGNvbnN0IHBvaW50ID0gZmFjZVswXTtcclxuICBjb25zdCBjID0gLW5vcm1hbFswXSAqIHBvaW50WzBdIC0gbm9ybWFsWzFdICogcG9pbnRbMV0gLSBub3JtYWxbMl0gKiBwb2ludFsyXTtcclxuICBjb25zdCB0ID1cclxuICAgIC1jIC9cclxuICAgIChub3JtYWxbMF0gKiBub3JtYWxbMF0gKyBub3JtYWxbMV0gKiBub3JtYWxbMV0gKyBub3JtYWxbMl0gKiBub3JtYWxbMl0pO1xyXG4gIHJldHVybiBbdCAqIG5vcm1hbFswXSwgdCAqIG5vcm1hbFsxXSwgdCAqIG5vcm1hbFsyXV07XHJcbn07XHJcblxyXG5jb25zdCBUT0xFUkFOQ0UgPSAwLjAwMTtcclxuY29uc3QgTUFYX05VTV9GQUNFUyA9IDY0O1xyXG5jb25zdCBNQVhfTlVNX0xPT1NFX0VER0VTID0gMzI7XHJcbmNvbnN0IEVQQV9NQVhfTlVNX0lURVIgPSA2NDtcclxuY29uc3QgRVBBID0gKGEsIGIsIGMsIGQsIG9yaWdpbnNNYXAsIGJvZHkxLCBib2R5MikgPT4ge1xyXG4gIGNvbnN0IGNvbGwxID0gYm9keTEuY29sbGlkZXI7XHJcbiAgY29uc3QgY29sbDIgPSBib2R5Mi5jb2xsaWRlcjtcclxuICBjb25zdCBmYWNlcyA9IFtdO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XHJcbiAgICBmYWNlc1tpXSA9IFtdO1xyXG4gIH1cclxuXHJcbiAgZmFjZXNbMF1bMF0gPSBhO1xyXG4gIGZhY2VzWzBdWzFdID0gYjtcclxuICBmYWNlc1swXVsyXSA9IGM7XHJcbiAgZmFjZXNbMF1bM10gPSBub3JtYWxpemUoY3Jvc3MoZGlmZihiLCBhKSwgZGlmZihjLCBhKSkpO1xyXG4gIGZhY2VzWzFdWzBdID0gYTtcclxuICBmYWNlc1sxXVsxXSA9IGM7XHJcbiAgZmFjZXNbMV1bMl0gPSBkO1xyXG4gIGZhY2VzWzFdWzNdID0gbm9ybWFsaXplKGNyb3NzKGRpZmYoYywgYSksIGRpZmYoZCwgYSkpKTtcclxuICBmYWNlc1syXVswXSA9IGE7XHJcbiAgZmFjZXNbMl1bMV0gPSBkO1xyXG4gIGZhY2VzWzJdWzJdID0gYjtcclxuICBmYWNlc1syXVszXSA9IG5vcm1hbGl6ZShjcm9zcyhkaWZmKGQsIGEpLCBkaWZmKGIsIGEpKSk7XHJcbiAgZmFjZXNbM11bMF0gPSBiO1xyXG4gIGZhY2VzWzNdWzFdID0gZDtcclxuICBmYWNlc1szXVsyXSA9IGM7XHJcbiAgZmFjZXNbM11bM10gPSBub3JtYWxpemUoY3Jvc3MoZGlmZihkLCBiKSwgZGlmZihjLCBiKSkpO1xyXG5cclxuICBsZXQgbnVtX2ZhY2VzID0gNDtcclxuICBsZXQgY2xvc2VzdF9mYWNlID0gbnVsbDtcclxuICBsZXQgc2VhcmNoX2RpcjtcclxuXHJcbiAgbGV0IHA7XHJcbiAgZm9yIChsZXQgaXRlcmF0aW9uID0gMDsgaXRlcmF0aW9uIDwgRVBBX01BWF9OVU1fSVRFUjsgKytpdGVyYXRpb24pIHtcclxuICAgIGxldCBtaW5fZGlzdCA9IGRvdChmYWNlc1swXVswXSwgZmFjZXNbMF1bM10pO1xyXG5cclxuICAgIGNsb3Nlc3RfZmFjZSA9IDA7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bV9mYWNlczsgKytpKSB7XHJcbiAgICAgIGxldCBkaXN0ID0gZG90KGZhY2VzW2ldWzBdLCBmYWNlc1tpXVszXSk7XHJcbiAgICAgIGlmIChkaXN0IDwgbWluX2Rpc3QpIHtcclxuICAgICAgICBtaW5fZGlzdCA9IGRpc3Q7XHJcbiAgICAgICAgY2xvc2VzdF9mYWNlID0gaTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2VhcmNoX2RpciA9IGZhY2VzW2Nsb3Nlc3RfZmFjZV1bM107XHJcblxyXG4gICAgY29uc3QgcF9vcmlnaW4xID0gY29sbDEuc3VwcG9ydChzY2FsZShzZWFyY2hfZGlyLCAtMSkpO1xyXG4gICAgY29uc3QgcF9vcmlnaW4yID0gY29sbDIuc3VwcG9ydChzZWFyY2hfZGlyKTtcclxuICAgIHAgPSBkaWZmKHBfb3JpZ2luMiwgcF9vcmlnaW4xKTtcclxuICAgIG9yaWdpbnNNYXAuc2V0KHAsIFtwX29yaWdpbjEsIHBfb3JpZ2luMl0pO1xyXG5cclxuICAgIGlmIChkb3QocCwgc2VhcmNoX2RpcikgLSBtaW5fZGlzdCA8IDAuMDAwMDEpIHtcclxuICAgICAgY29uc3QgZmFjZSA9IGZhY2VzW2Nsb3Nlc3RfZmFjZV07XHJcblxyXG4gICAgICBjb25zdCBwb2ludCA9IG9yaWdpblRvRmFjZVByb2ooZmFjZSk7XHJcblxyXG4gICAgICBjb25zdCBbQWEsIEJhXSA9IG9yaWdpbnNNYXAuZ2V0KGZhY2VbMF0pO1xyXG4gICAgICAvL2NvbnN0IEFhID0gZmFjZVswXS5vYVxyXG4gICAgICAvL2NvbnN0IEJhID0gZmFjZVswXS5vYlxyXG4gICAgICBjb25zdCBbQWIsIEJiXSA9IG9yaWdpbnNNYXAuZ2V0KGZhY2VbMV0pO1xyXG4gICAgICAvL2NvbnN0IEFiID0gZmFjZVsxXS5vYVxyXG4gICAgICAvL2NvbnN0IEJiID0gZmFjZVsxXS5vYlxyXG4gICAgICBjb25zdCBbQWMsIEJjXSA9IG9yaWdpbnNNYXAuZ2V0KGZhY2VbMl0pO1xyXG4gICAgICAvL2NvbnN0IEFjID0gZmFjZVsyXS5vYVxyXG4gICAgICAvL2NvbnN0IEJjID0gZmFjZVsyXS5vYlxyXG5cclxuICAgICAgY29uc3QgcmVzdWx0ID0gYmFyaWNlbnRyaWMoZmFjZSwgcG9pbnQpO1xyXG5cclxuICAgICAgaWYgKGlzTmFOKHJlc3VsdFswXSArIHJlc3VsdFsxXSArIHJlc3VsdFsyXSkpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIm5vIGNvbnZcIik7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxldCBQQSA9IHN1bShcclxuICAgICAgICBzdW0oc2NhbGUoQWEsIHJlc3VsdFswXSksIHNjYWxlKEFiLCByZXN1bHRbMV0pKSxcclxuICAgICAgICBzY2FsZShBYywgcmVzdWx0WzJdKVxyXG4gICAgICApO1xyXG4gICAgICAvL0FhLm11bHRpcGx5KHJlc3VsdFswXSkuYWRkKEFiLm11bHRpcGx5KHJlc3VsdFsxXSkpLmFkZChBYy5tdWx0aXBseShyZXN1bHRbMl0pKVxyXG4gICAgICBsZXQgUEIgPSBzdW0oXHJcbiAgICAgICAgc3VtKHNjYWxlKEJhLCByZXN1bHRbMF0pLCBzY2FsZShCYiwgcmVzdWx0WzFdKSksXHJcbiAgICAgICAgc2NhbGUoQmMsIHJlc3VsdFsyXSlcclxuICAgICAgKTtcclxuICAgICAgLy9CYS5tdWx0aXBseShyZXN1bHRbMF0pLmFkZChCYi5tdWx0aXBseShyZXN1bHRbMV0pKS5hZGQoQmMubXVsdGlwbHkocmVzdWx0WzJdKSlcclxuXHJcbiAgICAgIC8vY29uc3QgcmEgPSBQQS5zdWJzdHJhY3QoY29sbDEucG9zKVxyXG5cclxuICAgICAgY29uc3QgbiA9IG5vcm1hbGl6ZShzY2FsZShmYWNlWzNdLCAtZG90KHAsIHNlYXJjaF9kaXIpKSk7XHJcbiAgICAgIGlmIChub3JtKG4pIDwgMC4wMSkgcmV0dXJuIG51bGw7XHJcbiAgICAgIGNvbnN0IHBlbkRlcHRoID0gLWRvdChkaWZmKFBCLCBQQSksIG4pO1xyXG5cclxuICAgICAgcmV0dXJuIHsgUEEsIFBCLCBuLCBwZW5EZXB0aCB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGxvb3NlX2VkZ2VzID0gW107XHJcbiAgICBsZXQgbnVtX2xvb3NlX2VkZ2VzID0gMDtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtX2ZhY2VzOyArK2kpIHtcclxuICAgICAgaWYgKGRvdChmYWNlc1tpXVszXSwgZGlmZihwLCBmYWNlc1tpXVswXSkpID4gMCkge1xyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMzsgaisrKSB7XHJcbiAgICAgICAgICBsZXQgY3VycmVudF9lZGdlID0gW2ZhY2VzW2ldW2pdLCBmYWNlc1tpXVsoaiArIDEpICUgM11dO1xyXG4gICAgICAgICAgbGV0IGZvdW5kX2VkZ2UgPSBmYWxzZTtcclxuICAgICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgbnVtX2xvb3NlX2VkZ2VzOyBrKyspIHtcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgIGxvb3NlX2VkZ2VzW2tdWzFdID09PSBjdXJyZW50X2VkZ2VbMF0gJiZcclxuICAgICAgICAgICAgICBsb29zZV9lZGdlc1trXVswXSA9PT0gY3VycmVudF9lZGdlWzFdXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgIGxvb3NlX2VkZ2VzW2tdWzBdID0gbG9vc2VfZWRnZXNbbnVtX2xvb3NlX2VkZ2VzIC0gMV1bMF07XHJcbiAgICAgICAgICAgICAgbG9vc2VfZWRnZXNba11bMV0gPSBsb29zZV9lZGdlc1tudW1fbG9vc2VfZWRnZXMgLSAxXVsxXTtcclxuICAgICAgICAgICAgICBudW1fbG9vc2VfZWRnZXMtLTtcclxuICAgICAgICAgICAgICBmb3VuZF9lZGdlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICBrID0gbnVtX2xvb3NlX2VkZ2VzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoIWZvdW5kX2VkZ2UpIHtcclxuICAgICAgICAgICAgaWYgKG51bV9sb29zZV9lZGdlcyA+PSBNQVhfTlVNX0xPT1NFX0VER0VTKSBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGxvb3NlX2VkZ2VzW251bV9sb29zZV9lZGdlc10gPSBbXTtcclxuICAgICAgICAgICAgbG9vc2VfZWRnZXNbbnVtX2xvb3NlX2VkZ2VzXVswXSA9IGN1cnJlbnRfZWRnZVswXTtcclxuICAgICAgICAgICAgbG9vc2VfZWRnZXNbbnVtX2xvb3NlX2VkZ2VzXVsxXSA9IGN1cnJlbnRfZWRnZVsxXTtcclxuICAgICAgICAgICAgbnVtX2xvb3NlX2VkZ2VzKys7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZhY2VzW2ldWzBdID0gZmFjZXNbbnVtX2ZhY2VzIC0gMV1bMF07XHJcbiAgICAgICAgZmFjZXNbaV1bMV0gPSBmYWNlc1tudW1fZmFjZXMgLSAxXVsxXTtcclxuICAgICAgICBmYWNlc1tpXVsyXSA9IGZhY2VzW251bV9mYWNlcyAtIDFdWzJdO1xyXG4gICAgICAgIGZhY2VzW2ldWzNdID0gZmFjZXNbbnVtX2ZhY2VzIC0gMV1bM107XHJcbiAgICAgICAgbnVtX2ZhY2VzLS07XHJcbiAgICAgICAgaS0tO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bV9sb29zZV9lZGdlczsgaSsrKSB7XHJcbiAgICAgIGlmIChudW1fZmFjZXMgPj0gTUFYX05VTV9GQUNFUykgYnJlYWs7XHJcbiAgICAgIGZhY2VzW251bV9mYWNlc10gPSBbXTtcclxuICAgICAgZmFjZXNbbnVtX2ZhY2VzXVswXSA9IGxvb3NlX2VkZ2VzW2ldWzBdO1xyXG4gICAgICBmYWNlc1tudW1fZmFjZXNdWzFdID0gbG9vc2VfZWRnZXNbaV1bMV07XHJcbiAgICAgIGZhY2VzW251bV9mYWNlc11bMl0gPSBwO1xyXG5cclxuICAgICAgZmFjZXNbbnVtX2ZhY2VzXVszXSA9IG5vcm1hbGl6ZShcclxuICAgICAgICBjcm9zcyhcclxuICAgICAgICAgIGRpZmYobG9vc2VfZWRnZXNbaV1bMF0sIGxvb3NlX2VkZ2VzW2ldWzFdKSxcclxuICAgICAgICAgIGRpZmYobG9vc2VfZWRnZXNbaV1bMF0sIHApXHJcbiAgICAgICAgKVxyXG4gICAgICApO1xyXG5cclxuICAgICAgaWYgKGRvdChmYWNlc1tudW1fZmFjZXNdWzBdLCBmYWNlc1tudW1fZmFjZXNdWzNdKSArIDAuMDEgPCAwKSB7XHJcbiAgICAgICAgY29uc3QgdGVtcCA9IGZhY2VzW251bV9mYWNlc11bMF07XHJcbiAgICAgICAgZmFjZXNbbnVtX2ZhY2VzXVswXSA9IGZhY2VzW251bV9mYWNlc11bMV07XHJcbiAgICAgICAgZmFjZXNbbnVtX2ZhY2VzXVsxXSA9IHRlbXA7XHJcbiAgICAgICAgZmFjZXNbbnVtX2ZhY2VzXVszXSA9IHNjYWxlKGZhY2VzW251bV9mYWNlc11bM10sIC0xKTtcclxuICAgICAgfVxyXG4gICAgICBudW1fZmFjZXMrKztcclxuICAgIH1cclxuICB9XHJcbiAgY29uc29sZS5sb2coXCJubyBjb252XCIpO1xyXG4gIHJldHVybiBudWxsO1xyXG59O1xyXG5cclxuY29uc3QgX2dqayA9IGdqay5iaW5kKHt9KTtcclxuXHJcbmNvbnN0IGdldENvbnRhY3RNYW5pZm9sZCA9IChib2R5MSwgYm9keTIpID0+IHtcclxuICBjb25zdCBjb2xsMSA9IGJvZHkxLmNvbGxpZGVyO1xyXG4gIGNvbnN0IGNvbGwyID0gYm9keTIuY29sbGlkZXI7XHJcbiAgY29uc3QgY29udGFjdERhdGEgPSBfZ2prKGJvZHkxLCBib2R5Mik7XHJcbiAgaWYgKGNvbnRhY3REYXRhKSB7XHJcbiAgICBjb25zdCB7IFBBLCBQQiwgbiB9ID0gY29udGFjdERhdGE7XHJcbiAgICBjb25zdCBuUmV2ZXJzZSA9IHNjYWxlKG4sIC0xKTtcclxuXHJcbiAgICBjb25zdCBbY29udGFjdEZhY2UxLCBub3JtYWwxXSA9IGZpbmRDbG9zZXN0RmFjZShjb2xsMSwgblJldmVyc2UpO1xyXG4gICAgY29uc3QgW2NvbnRhY3RGYWNlMiwgbm9ybWFsMl0gPSBmaW5kQ2xvc2VzdEZhY2UoY29sbDIsIG4pO1xyXG4gICAgY29uc3QgcGxhbmUgPSBbc2NhbGUoc3VtKFBBLCBQQiksIDAuNSksIG5dO1xyXG4gICAgY29uc3QgcHJvamVjdGlvbnMxID0gY29udGFjdEZhY2UxLm1hcCgocCkgPT5cclxuICAgICAgcG9pbnRPblBsYW5lUHJvamVjdGlvbihwbGFuZSwgcClcclxuICAgICk7XHJcbiAgICBjb25zdCBwcm9qZWN0aW9uczIgPSBjb250YWN0RmFjZTIubWFwKChwKSA9PlxyXG4gICAgICBwb2ludE9uUGxhbmVQcm9qZWN0aW9uKHBsYW5lLCBwKVxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBvcmlnaW4gPSBwbGFuZVswXTtcclxuICAgIGNvbnN0IGkgPSB2ZWN0b3Iubm9ybWFsaXplKHZlY3Rvci5kaWZmKHBsYW5lWzBdLCBwcm9qZWN0aW9uczFbMV0pKTtcclxuICAgIGNvbnN0IGogPSB2ZWN0b3IuY3Jvc3MocGxhbmVbMV0sIGkpO1xyXG5cclxuICAgIGxldCBfMmQxID0gcHJvamVjdGlvbnMxLm1hcCgocCkgPT5cclxuICAgICAgZ2V0MkRjb29yZHNPblBsYW5lKGksIGosIGRpZmYocCwgb3JpZ2luKSlcclxuICAgICk7XHJcbiAgICBsZXQgXzJkMiA9IHByb2plY3Rpb25zMi5tYXAoKHApID0+XHJcbiAgICAgIGdldDJEY29vcmRzT25QbGFuZShpLCBqLCBkaWZmKHAsIG9yaWdpbikpXHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IGRpcjEgPSBpc0luQ2xvY2t3aXNlKF8yZDFbMF0sIF8yZDFbMV0sIF8yZDFbMl0pO1xyXG4gICAgY29uc3QgZGlyMiA9IGlzSW5DbG9ja3dpc2UoXzJkMlswXSwgXzJkMlsxXSwgXzJkMlsyXSk7XHJcbiAgICBpZiAoZGlyMSA8IDApIF8yZDEgPSBfMmQxLm1hcCgoXywgaSkgPT4gXzJkMS5hdCgtaSkpO1xyXG4gICAgaWYgKGRpcjIgPCAwKSBfMmQyID0gXzJkMi5tYXAoKF8sIGkpID0+IF8yZDIuYXQoLWkpKTtcclxuICAgIGNvbnN0IGNsaXBwZWQgPSBjbGlwKF8yZDEsIF8yZDIpO1xyXG4gICBcclxuICAgIGNvbnN0IF8zZCA9IGNsaXBwZWQubWFwKChwKSA9PlxyXG4gICAgICBzdW0ob3JpZ2luLCBzdW0oc2NhbGUoaSwgcFswXSksIHNjYWxlKGosIHBbMV0pKSlcclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgZmVhdHVyZXMgPSBbXTtcclxuICAgIF8zZC5mb3JFYWNoKChwb2ludCkgPT4ge1xyXG4gICAgICBjb25zdCBQQSA9IHJheVZzUGxhbmVJbnRlcnNlYyhbY29udGFjdEZhY2UxWzBdLCBub3JtYWwxXSwgcG9pbnQsIG4pO1xyXG4gICAgICBpZiAoIWlzUG9pbnRCZWhpbmRQbGFuZShwbGFuZSwgUEEsIDEpKSByZXR1cm47XHJcbiAgICAgIGNvbnN0IFBCID0gcmF5VnNQbGFuZUludGVyc2VjKFtjb250YWN0RmFjZTJbMF0sIG5vcm1hbDJdLCBwb2ludCwgbik7XHJcbiAgICAgIGlmICghaXNQb2ludEJlaGluZFBsYW5lKHBsYW5lLCBQQiwgLTEpKSByZXR1cm47XHJcblxyXG4gICAgICBjb25zdCByYiA9IGRpZmYoUEIsIGNvbGwyLnBvcyk7XHJcbiAgICAgIGNvbnN0IHJhID0gZGlmZihQQSwgY29sbDEucG9zKTtcclxuICAgICAgY29uc3QgcGVuRGVwdGggPSAtZG90KGRpZmYoUEIsIFBBKSwgbik7XHJcbiAgICAgIGNvbnN0IHJhTG9jYWwgPSBtMy50cmFuc2Zvcm1Qb2ludChjb2xsMS5SbWF0cml4SW52ZXJzZSwgcmEpO1xyXG4gICAgICBjb25zdCByYkxvY2FsID0gbTMudHJhbnNmb3JtUG9pbnQoY29sbDIuUm1hdHJpeEludmVyc2UsIHJiKTtcclxuXHJcbiAgICAgIGZlYXR1cmVzLnB1c2goe1xyXG4gICAgICAgIHJhTG9jYWwsXHJcbiAgICAgICAgcmJMb2NhbCxcclxuICAgICAgICByYSxcclxuICAgICAgICByYixcclxuICAgICAgICBQQSxcclxuICAgICAgICBQQixcclxuICAgICAgICBuLFxyXG4gICAgICAgIHBlbkRlcHRoLFxyXG4gICAgICAgIGJvZHkxLFxyXG4gICAgICAgIGJvZHkyLFxyXG4gICAgICAgIGksXHJcbiAgICAgICAgaixcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoZmVhdHVyZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIGNvbnN0IHJiID0gZGlmZihQQiwgY29sbDIucG9zKTtcclxuICAgICAgY29uc3QgcmEgPSBkaWZmKFBBLCBjb2xsMS5wb3MpO1xyXG4gICAgICBjb25zdCBwZW5EZXB0aCA9IC1kb3QoZGlmZihQQiwgUEEpLCBuKTtcclxuICAgICAgY29uc3QgcmFMb2NhbCA9IG0zLnRyYW5zZm9ybVBvaW50KGNvbGwxLlJtYXRyaXhJbnZlcnNlLCByYSk7XHJcbiAgICAgIGNvbnN0IHJiTG9jYWwgPSBtMy50cmFuc2Zvcm1Qb2ludChjb2xsMi5SbWF0cml4SW52ZXJzZSwgcmIpO1xyXG4gICAgICBmZWF0dXJlcy5wdXNoKHtcclxuICAgICAgICByYUxvY2FsLFxyXG4gICAgICAgIHJiTG9jYWwsXHJcbiAgICAgICAgcmEsXHJcbiAgICAgICAgcmIsXHJcbiAgICAgICAgUEEsXHJcbiAgICAgICAgUEIsXHJcbiAgICAgICAgbixcclxuICAgICAgICBwZW5EZXB0aCxcclxuICAgICAgICBib2R5MSxcclxuICAgICAgICBib2R5MixcclxuICAgICAgICBpLFxyXG4gICAgICAgIGosXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmZWF0dXJlcztcclxuICB9XHJcbiAgcmV0dXJuIG51bGw7XHJcbn07XHJcblxyXG5leHBvcnQge1xyXG4gIGdldENvbnRhY3RNYW5pZm9sZCBhcyBnamssXHJcbiAgcG9pbnRPblBsYW5lUHJvamVjdGlvbixcclxuICBjbGlwUG9pbnRzQmVoaW5kUGxhbmUsXHJcbiAgZ2V0MkRjb29yZHNPblBsYW5lLFxyXG4gIHJheVZzUGxhbmVJbnRlcnNlYyxcclxufTtcclxuIiwiaW1wb3J0IHsgdmVjdG9yIGFzIHZlYyB9IGZyb20gXCJtYXRoXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJc2xhbmQge1xyXG4gIGNvbnN0cnVjdG9yKC4uLmNvbnN0cmFpbnRzKSB7XHJcbiAgICB0aGlzLmNvbnN0cmFpbnRzID0gWy4uLmNvbnN0cmFpbnRzXTtcclxuICAgIHRoaXMuSk1KID0gbnVsbDtcclxuICAgIHRoaXMuSlYgPSBudWxsO1xyXG4gICAgdGhpcy5KcFYgPSBudWxsO1xyXG4gICAgdGhpcy5KTUpwID0gbnVsbDtcclxuICB9XHJcbiAgYWRkQ29uc3RyYWludCguLi5hcmdzKSB7XHJcbiAgICB0aGlzLmNvbnN0cmFpbnRzLnB1c2goLi4uYXJncyk7XHJcbiAgfVxyXG4gIGdlbmVyYXRlUHNldWRvVmVsVmVjdG9yKCkge31cclxuICBnZW5lcmF0ZVN5c3RlbShkZWx0YVRpbWUpIHtcclxuICAgIGNvbnN0IG4gPSB0aGlzLmNvbnN0cmFpbnRzLmxlbmd0aDtcclxuICAgIC8vQSA9IEpNSiosIEpNSip4ID0gSlYgKyBiXHJcbiAgICB0aGlzLkpNSnAgPSBuZXcgQXJyYXkobiAqIG4pO1xyXG4gICAgdGhpcy5KTUogPSBuZXcgQXJyYXkobiAqIG4pO1xyXG4gICAgdGhpcy5KViA9IG5ldyBBcnJheShuKTtcclxuICAgIHRoaXMuSnBWID0gbmV3IEFycmF5KG4pO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHtcclxuICAgICAgY29uc3QgY29uc3RyYWludCA9IHRoaXMuY29uc3RyYWludHNbaV07XHJcbiAgICAgIGNvbnN0IHsgYm9keTEsIGJvZHkyLCBKIH0gPSBjb25zdHJhaW50O1xyXG4gICAgICBjb25zdCBrID0gaSAqIG47XHJcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbjsgaisrKSB7XHJcbiAgICAgICAgaWYgKGsgPT09IGopIHtcclxuICAgICAgICAgIHRoaXMuSk1KW2sgKyBqXSA9ICgpID0+IGNvbnN0cmFpbnQuZWZmTWFzcztcclxuICAgICAgICAgIHRoaXMuSk1KcFtrICsgal0gPSAoKSA9PlxyXG4gICAgICAgICAgICBjb25zdHJhaW50LmJvZHkxLmludmVyc2VNYXNzICsgY29uc3RyYWludC5ib2R5Mi5pbnZlcnNlTWFzcztcclxuICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgX2NvbnN0cmFpbnQgPSB0aGlzLmNvbnN0cmFpbnRzW2pdO1xyXG5cclxuICAgICAgICBjb25zdCBfYm9keTEgPSBfY29uc3RyYWludC5ib2R5MTtcclxuICAgICAgICBjb25zdCBfYm9keTIgPSBfY29uc3RyYWludC5ib2R5MjtcclxuXHJcbiAgICAgICAgY29uc3QgZnAxID1cclxuICAgICAgICAgIGJvZHkxID09PSBfYm9keTFcclxuICAgICAgICAgICAgPyAoKSA9PiB2ZWMuZG90KGNvbnN0cmFpbnQuSk1bMF0sIF9jb25zdHJhaW50LkpbMF0pXHJcbiAgICAgICAgICAgIDogKCkgPT4gMDtcclxuICAgICAgICBjb25zdCBmcDIgPVxyXG4gICAgICAgICAgYm9keTIgPT09IF9ib2R5MlxyXG4gICAgICAgICAgICA/ICgpID0+IHZlYy5kb3QoY29uc3RyYWludC5KTVsyXSwgX2NvbnN0cmFpbnQuSlsyXSlcclxuICAgICAgICAgICAgOiAoKSA9PiAwO1xyXG4gICAgICAgIGNvbnN0IGZwMyA9XHJcbiAgICAgICAgICBib2R5MSA9PT0gX2JvZHkyXHJcbiAgICAgICAgICAgID8gKCkgPT4gdmVjLmRvdChjb25zdHJhaW50LkpNWzBdLCBfY29uc3RyYWludC5KWzJdKVxyXG4gICAgICAgICAgICA6ICgpID0+IDA7XHJcbiAgICAgICAgY29uc3QgZnA0ID1cclxuICAgICAgICAgIGJvZHkyID09PSBfYm9keTFcclxuICAgICAgICAgICAgPyAoKSA9PiB2ZWMuZG90KGNvbnN0cmFpbnQuSk1bMl0sIF9jb25zdHJhaW50LkpbMF0pXHJcbiAgICAgICAgICAgIDogKCkgPT4gMDtcclxuICAgICAgICBjb25zdCBmMSA9XHJcbiAgICAgICAgICBib2R5MSA9PT0gX2JvZHkxXHJcbiAgICAgICAgICAgID8gKCkgPT5cclxuICAgICAgICAgICAgICAgIHZlYy5kb3QoY29uc3RyYWludC5KTVswXSwgX2NvbnN0cmFpbnQuSlswXSkgK1xyXG4gICAgICAgICAgICAgICAgdmVjLmRvdChjb25zdHJhaW50LkpNWzFdLCBfY29uc3RyYWludC5KWzFdKVxyXG4gICAgICAgICAgICA6ICgpID0+IDA7XHJcbiAgICAgICAgY29uc3QgZjIgPVxyXG4gICAgICAgICAgYm9keTIgPT09IF9ib2R5MlxyXG4gICAgICAgICAgICA/ICgpID0+XHJcbiAgICAgICAgICAgICAgICB2ZWMuZG90KGNvbnN0cmFpbnQuSk1bMl0sIF9jb25zdHJhaW50LkpbMl0pICtcclxuICAgICAgICAgICAgICAgIHZlYy5kb3QoY29uc3RyYWludC5KTVszXSwgX2NvbnN0cmFpbnQuSlszXSlcclxuICAgICAgICAgICAgOiAoKSA9PiAwO1xyXG4gICAgICAgIGNvbnN0IGYzID1cclxuICAgICAgICAgIGJvZHkxID09PSBfYm9keTJcclxuICAgICAgICAgICAgPyAoKSA9PlxyXG4gICAgICAgICAgICAgICAgdmVjLmRvdChjb25zdHJhaW50LkpNWzBdLCBfY29uc3RyYWludC5KWzJdKSArXHJcbiAgICAgICAgICAgICAgICB2ZWMuZG90KGNvbnN0cmFpbnQuSk1bMV0sIF9jb25zdHJhaW50LkpbM10pXHJcbiAgICAgICAgICAgIDogKCkgPT4gMDtcclxuICAgICAgICBjb25zdCBmNCA9XHJcbiAgICAgICAgICBib2R5MiA9PT0gX2JvZHkxXHJcbiAgICAgICAgICAgID8gKCkgPT5cclxuICAgICAgICAgICAgICAgIHZlYy5kb3QoY29uc3RyYWludC5KTVsyXSwgX2NvbnN0cmFpbnQuSlswXSkgK1xyXG4gICAgICAgICAgICAgICAgdmVjLmRvdChjb25zdHJhaW50LkpNWzNdLCBfY29uc3RyYWludC5KWzFdKVxyXG4gICAgICAgICAgICA6ICgpID0+IDA7XHJcblxyXG4gICAgICAgIHRoaXMuSk1KW2sgKyBqXSA9ICgpID0+IGYxKCkgKyBmMigpICsgZjMoKSArIGY0KCk7XHJcbiAgICAgICAgdGhpcy5KTUpwW2sgKyBqXSA9ICgpID0+IGZwMSgpICsgZnAyKCkgKyBmcDMoKSArIGZwNCgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvKiAgdmVjLmRvdChKWzBdLCBib2R5MS52ZWxvY2l0eSkgK1xyXG4gICAgICAgIHZlYy5kb3QoSlsxXSwgYm9keTEuYW5ndWxhclYpICtcclxuICAgICAgICB2ZWMuZG90KEpbMl0sIGJvZHkyLnZlbG9jaXR5KSArXHJcbiAgICAgICAgdmVjLmRvdChKWzNdLCBib2R5Mi5hbmd1bGFyVik7Ki9cclxuICAgICAgdGhpcy5KVltpXSA9IChkZWx0YVRpbWUpID0+XHJcbiAgICAgICAgLWNvbnN0cmFpbnQucmVsYXRpdmVWZWxvY2l0eU5vcm1hbFByb2plY3Rpb24gKiBjb25zdHJhaW50LnJlZHVjZXIgK1xyXG4gICAgICAgIChNYXRoLm1heCgwLCBjb25zdHJhaW50LnBlbkRlcHRoIC0gY29uc3RyYWludC50cmVzaG9sZCkgLyBkZWx0YVRpbWUpICpcclxuICAgICAgICAgIGNvbnN0cmFpbnQuYmlhc0ZhY3RvcjsgLy8rIGIqIDAuMTI1O1xyXG5cclxuICAgICAgLyp0aGlzLkpwVltpXSA9ICgpID0+IC12ZWMuZG90KEpbMF0sIGJvZHkxLnBzZXVkb1ZlbG9jaXR5KSAtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWMuZG90KEpbMV0sIGJvZHkxLnBzZXVkb0FuZ3VsYXJWKSAtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWMuZG90KEpbMl0sIGJvZHkyLnBzZXVkb1ZlbG9jaXR5KSAtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlYy5kb3QoSlszXSwgYm9keTIucHNldWRvQW5ndWxhclYpIC0gY29uc3RyYWludC5iaWFzL2RlbHRhVGltZSAqL1xyXG4gICAgICB0aGlzLkpwVltpXSA9IChkZWx0YVRpbWUpID0+XHJcbiAgICAgICAgKE1hdGgubWF4KDAsIGNvbnN0cmFpbnQucGVuRGVwdGggLSBjb25zdHJhaW50LnRyZXNob2xkKSAvIGRlbHRhVGltZSkgKlxyXG4gICAgICAgIGNvbnN0cmFpbnQucHNldWRvQmlhc0ZhY3RvcjtcclxuICAgIH1cclxuICB9XHJcbiAgZ2V0Sk1KKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuSk1KLm1hcCgoZikgPT4gZigpKTtcclxuICB9XHJcbiAgZ2V0SlYoZGVsdGFUaW1lKSB7XHJcbiAgICByZXR1cm4gdGhpcy5KVi5tYXAoKGYpID0+IGYoZGVsdGFUaW1lKSk7XHJcbiAgfVxyXG4gIGdldEpwVihkZWx0YVRpbWUpIHtcclxuICAgIHJldHVybiB0aGlzLkpwVi5tYXAoKGYpID0+IGYoZGVsdGFUaW1lKSk7XHJcbiAgfVxyXG4gIGdldEpNSnAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5KTUpwLm1hcCgoZikgPT4gZigpKTtcclxuICB9XHJcbiAgZ2V0VXBkYXRlZFZhbHVlcyhkZWx0YVRpbWUpIHtcclxuICAgIHJldHVybiBbXHJcbiAgICAgIHRoaXMuSk1KLm1hcCgoZikgPT4gZigpKSxcclxuICAgICAgdGhpcy5KVi5tYXAoKGYpID0+IGYoKSksXHJcbiAgICAgIHRoaXMuSnBWLm1hcCgoZikgPT4gZihkZWx0YVRpbWUpKSxcclxuICAgIF07XHJcbiAgfVxyXG4gIGFwcGx5UmVzb2x2aW5nSW1wdWxzZXMobGFtYmRhKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMCwgbiA9IHRoaXMuY29uc3RyYWludHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgIHRoaXMuY29uc3RyYWludHNbaV0uYXBwbHlSZXNvbHZpbmdJbXB1bHNlKGxhbWJkYVtpXSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGFwcGx5UmVzb2x2aW5nUHNldWRvSW1wdWxzZXMobGFtYmRhKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMCwgbiA9IHRoaXMuY29uc3RyYWludHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgIHRoaXMuY29uc3RyYWludHNbaV0uYXBwbHlSZXNvbHZpbmdQc2V1ZG9JbXB1bHNlKGxhbWJkYVtpXSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IG0zLCB2ZWN0b3IgfSBmcm9tIFwibWF0aFwiO1xyXG5cclxuY29uc3QgeyBkaXN0YW5jZUZyb21MaW5lLCBub3JtLCBmaW5kRnVydGhlc3RQb2ludCwgc3VtLCBkaWZmLCBub3JtU3EsIGRvdCB9ID1cclxuICB2ZWN0b3I7XHJcblxyXG5jb25zdCBwcmVjID0gMC4wMDA1O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFuaWZvbGQge1xyXG4gIGNvbnN0cnVjdG9yKC4uLmNvbnRhY3RzKSB7XHJcbiAgICB0aGlzLmNvbnRhY3RzID0gY29udGFjdHM7XHJcbiAgICB0aGlzLmtlZXAgPSB0cnVlO1xyXG4gIH1cclxuICB1cGRhdGUoKSB7XHJcbiAgICBjb25zdCBjb250YWN0cyA9IHRoaXMuY29udGFjdHM7XHJcbiAgICBpZiAoY29udGFjdHMubGVuZ3RoIDwgMikge1xyXG4gICAgICB0aGlzLmtlZXAgPSBmYWxzZTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgZm9yIChsZXQgaSA9IDAsIG4gPSBjb250YWN0cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgY29uc3QgY29udGFjdCA9IGNvbnRhY3RzW2ldO1xyXG4gICAgICBjb25zdCBwb3MxID0gY29udGFjdC5ib2R5MS5jb2xsaWRlci5wb3M7XHJcbiAgICAgIGNvbnN0IHBvczIgPSBjb250YWN0LmJvZHkyLmNvbGxpZGVyLnBvcztcclxuICAgICAgY29uc3QgX3JhID0gbTMudHJhbnNmb3JtUG9pbnQoXHJcbiAgICAgICAgY29udGFjdC5ib2R5MS5jb2xsaWRlci5SbWF0cml4LFxyXG4gICAgICAgIGNvbnRhY3QucmFMb2NhbFxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCBfcmIgPSBtMy50cmFuc2Zvcm1Qb2ludChcclxuICAgICAgICBjb250YWN0LmJvZHkyLmNvbGxpZGVyLlJtYXRyaXgsXHJcbiAgICAgICAgY29udGFjdC5yYkxvY2FsXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IF9QQSA9IHN1bShwb3MxLCBfcmEpO1xyXG4gICAgICBjb25zdCBfUEIgPSBzdW0ocG9zMiwgX3JiKTtcclxuICAgICAgY29uc3QgcmFCaWFzID0gZGlmZihjb250YWN0LlBBLCBfUEEpO1xyXG4gICAgICBjb25zdCByYkJpYXMgPSBkaWZmKGNvbnRhY3QuUEIsIF9QQik7XHJcbiAgICAgIC8vY29udGFjdC51cGRhdGVDb250YWN0RGF0YSgpXHJcbiAgICAgIGlmIChub3JtKHJhQmlhcykgPiBwcmVjIHx8IG5vcm0ocmJCaWFzKSA+IHByZWMpIHtcclxuICAgICAgICB0aGlzLmtlZXAgPSBmYWxzZTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnRhY3QuUEEgPSBfUEE7XHJcbiAgICAgIGNvbnRhY3QuUEIgPSBfUEI7XHJcbiAgICAgIGNvbnRhY3QucmEgPSBfcmE7XHJcbiAgICAgIGNvbnRhY3QucmIgPSBfcmI7XHJcbiAgICAgIGNvbnRhY3QucGVuRGVwdGggPSBkb3QoY29udGFjdC5uLCBkaWZmKF9QQiwgX1BBKSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBUcmVlIGZyb20gXCIuL3RyZWVcIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgc29sdmVDb2xsaXNpb24sXHJcbiAgc29sdmVDb250YWN0UG9zaXRpb25FcnIsXHJcbiAgd2FybVN0YXJ0LFxyXG4gIHNvbHZlUG9zaXRpb24sXHJcbn0gZnJvbSBcIi4vY29uc3RyYWludHNcIjtcclxuaW1wb3J0IHsgZ2prIH0gZnJvbSBcIi4vZ2prXCI7XHJcblxyXG5pbXBvcnQgTWFuaWZvbGQgZnJvbSBcIi4vbWFuaWZvbGRcIjtcclxuaW1wb3J0IElzbGFuZCBmcm9tIFwiLi9pc2xhbmRcIjtcclxuaW1wb3J0IHsgR2F1c3NTZWlkZWwgfSBmcm9tIFwiLi9HU3NvbHZlclwiO1xyXG5pbXBvcnQgeyBDb250YWN0Q29uc3RyYWludCB9IGZyb20gXCIuL2NvbnRhY3RcIjtcclxuXHJcbmNvbnN0IHNhbWVHcm91cCA9IChib2R5MSwgYm9keTIpID0+IHtcclxuICBpZiAoIWJvZHkxLmdyb3VwKSByZXR1cm47XHJcbiAgaWYgKCFib2R5Mi5ncm91cCkgcmV0dXJuO1xyXG4gIHJldHVybiBib2R5MS5ncm91cCA9PT0gYm9keTIuZ3JvdXA7XHJcbn07XHJcbmNvbnN0IHBhaXJIYXNoID0gKHgsIHkpID0+XHJcbiAgeCA9PT0gTWF0aC5tYXgoeCwgeSkgPyB4ICogeCArIHggKyB5IDogeSAqIHkgKyB4ICsgeTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpbXVsYXRpb24ge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5vYmplY3RzID0gW107XHJcbiAgICB0aGlzLmJ2aCA9IG5ldyBUcmVlKCk7XHJcbiAgICB0aGlzLmNvbGxpc2lvbnMgPSBbXTtcclxuICAgIHRoaXMuY29uc3RyYWludHMgPSBuZXcgTWFwKCk7XHJcbiAgICB0aGlzLmNvbGxpc2lvbk1hbmlmb2xkcyA9IG5ldyBNYXAoKTtcclxuICAgIHRoaXMubGFzdElkID0gMDtcclxuICB9XHJcbiAgYWRkT2JqZWN0KG9iamVjdCkge1xyXG4gICAgY29uc3QgYWFiYiA9IG9iamVjdC5nZXRFeHBhbmRlZEFBQkIoKTtcclxuXHJcbiAgICBjb25zdCBsZWFmID0gdGhpcy5idmguaW5zZXJ0TGVhZihhYWJiLCBvYmplY3QpO1xyXG4gICAgb2JqZWN0LkJWbGluayA9IGxlYWY7XHJcbiAgICBvYmplY3QuaWQgPSB0aGlzLmxhc3RJZDtcclxuICAgIHRoaXMubGFzdElkKys7XHJcbiAgICBvYmplY3Qub24oXCJ1cGRhdGVcIiwgKCkgPT4gdGhpcy51cGRhdGVPYmplY3RBQUJCLmNhbGwodGhpcywgb2JqZWN0KSk7XHJcblxyXG4gICAgdGhpcy5vYmplY3RzLnB1c2gob2JqZWN0KTtcclxuICB9XHJcbiAgYWRkQ29uc3RyYWludHMoY29uc3RyYWludHMsIG5hbWUpIHtcclxuICAgIGNvbnN0IHN5c3RlbSA9IG5ldyBJc2xhbmQoLi4uY29uc3RyYWludHMpO1xyXG4gICAgc3lzdGVtLmdlbmVyYXRlU3lzdGVtKCk7XHJcbiAgICBjb25zdCBwb3NpdGlvblN5c3RlbSA9IG5ldyBJc2xhbmQoLi4uY29uc3RyYWludHMpO1xyXG4gICAgcG9zaXRpb25TeXN0ZW0uZ2VuZXJhdGVTeXN0ZW0oKTtcclxuICAgIHRoaXMuY29uc3RyYWludHMuc2V0KG5hbWUsIFtzeXN0ZW0sIHBvc2l0aW9uU3lzdGVtXSk7XHJcbiAgfVxyXG4gIHVwZGF0ZU9iamVjdEFBQkIob2JqZWN0KSB7XHJcbiAgICBjb25zdCBuZXdBQUJCID0gb2JqZWN0LmdldEFBQkIoKTtcclxuXHJcbiAgICB0aGlzLmJ2aC5yZW1vdmVMZWFmKG9iamVjdC5CVmxpbmspO1xyXG4gICAgY29uc3QgbGVhZiA9IHRoaXMuYnZoLmluc2VydExlYWYobmV3QUFCQiwgb2JqZWN0KTtcclxuICAgIG9iamVjdC5CVmxpbmsgPSBsZWFmO1xyXG4gIH1cclxuICByZW1vdmVPYmplY3Qob2JqZWN0KSB7XHJcbiAgICB0aGlzLmJ2aC5yZW1vdmVMZWFmKG9iamVjdC5CVmxpbmspO1xyXG4gICAgdGhpcy5vYmplY3RzID0gdGhpcy5vYmplY3RzLmZpbHRlcigoZWwpID0+IGVsID09PSBvYmplY3QpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlQ29sbGlzaW9ucygpIHtcclxuICAgIGNvbnN0IHsgY29sbGlzaW9uTWFuaWZvbGRzIH0gPSB0aGlzO1xyXG4gICAgZm9yIChjb25zdCBbaGFzaCwgbWFuaWZvbGRdIG9mIGNvbGxpc2lvbk1hbmlmb2xkcykge1xyXG4gICAgICBtYW5pZm9sZC51cGRhdGUoKTtcclxuICAgICAgaWYgKCFtYW5pZm9sZC5rZWVwKSBjb2xsaXNpb25NYW5pZm9sZHMuZGVsZXRlKGhhc2gpO1xyXG4gICAgfVxyXG4gICAgZm9yIChsZXQgaSA9IDAsIG4gPSB0aGlzLm9iamVjdHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IG9iamVjdCA9IHRoaXMub2JqZWN0c1tpXTtcclxuICAgICAgaWYgKG9iamVjdC5zdGF0aWMpIGNvbnRpbnVlO1xyXG4gICAgICBjb25zdCBjb2xzID0gdGhpcy5idmguZ2V0Q29sbGlzaW9ucyhvYmplY3QuQlZsaW5rKTtcclxuICAgICAgb2JqZWN0LkJWbGluay5pc0NoZWNrZWQgPSB0cnVlO1xyXG4gICAgICBpZiAoY29scy5sZW5ndGggIT0gMClcclxuICAgICAgICBmb3IgKGxldCBqID0gMCwgbiA9IGNvbHMubGVuZ3RoOyBqIDwgbjsgaisrKSB7XHJcbiAgICAgICAgICBpZiAoc2FtZUdyb3VwKG9iamVjdCwgY29sc1tqXSkpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgY29uc3QgaGFzaCA9IHBhaXJIYXNoKG9iamVjdC5pZCwgY29sc1tqXS5pZCk7XHJcbiAgICAgICAgICBsZXQgbWFuaWZvbGQgPSB0aGlzLmNvbGxpc2lvbk1hbmlmb2xkcy5nZXQoaGFzaCk7XHJcbiAgICAgICAgICBpZiAobWFuaWZvbGQpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgY29uc3QgY29udGFjdHMgPSBnamsob2JqZWN0LCBjb2xzW2pdKTtcclxuXHJcbiAgICAgICAgICBpZiAoY29udGFjdHMpIHtcclxuICAgICAgICAgICAgbWFuaWZvbGQgPSBuZXcgTWFuaWZvbGQoLi4uY29udGFjdHMpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jb2xsaXNpb25NYW5pZm9sZHMuc2V0KGhhc2gsIG1hbmlmb2xkKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5idmguc2V0VW5jaGVja2VkKCk7XHJcbiAgfVxyXG4gIHRpY2soZGVsdGFUaW1lKSB7XHJcbiAgICB0aGlzLnVwZGF0ZUNvbGxpc2lvbnMoKTtcclxuICAgIGxldCBtYW5pZm9sZHMgPSB0aGlzLmNvbGxpc2lvbk1hbmlmb2xkcztcclxuICAgIGZvciAobGV0IGkgPSAwLCBuID0gdGhpcy5vYmplY3RzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICB0aGlzLm9iamVjdHNbaV0uaW50ZWdyYXRlRm9yY2VzKGRlbHRhVGltZSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBzeXN0ZW0gPSBuZXcgSXNsYW5kKCk7XHJcbiAgICBmb3IgKGxldCBba2V5LCBtYW5pZm9sZF0gb2YgbWFuaWZvbGRzKSB7XHJcbiAgICAgIGNvbnN0IHVzZVZlbG9jaXR5QmlhcyA9IG1hbmlmb2xkLmNvbnRhY3RzLmxlbmd0aCA8IDM7XHJcbiAgICAgIGNvbnN0IGNvbnRhY3RzID0gbWFuaWZvbGQuY29udGFjdHMubWFwKChjKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY29uc3RyYWludCA9IG5ldyBDb250YWN0Q29uc3RyYWludChjKTtcclxuICAgICAgICBpZiAodXNlVmVsb2NpdHlCaWFzKSB7XHJcbiAgICAgICAgICBjb25zdHJhaW50LmJpYXNGYWN0b3IgPSAwLjA5O1xyXG4gICAgICAgIH0gXHJcbiAgICAgICAgcmV0dXJuIGNvbnN0cmFpbnQ7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgZm9yIChsZXQgaSA9IDAsIG4gPSBjb250YWN0cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICBjb250YWN0c1tpXS51cGRhdGVFcSgpO1xyXG4gICAgICB9XHJcbiAgICAgIHN5c3RlbS5hZGRDb25zdHJhaW50KC4uLmNvbnRhY3RzKTtcclxuICAgIH1cclxuXHJcbiAgICBzeXN0ZW0uZ2VuZXJhdGVTeXN0ZW0oZGVsdGFUaW1lKTtcclxuXHJcbiAgICBjb25zdCBsYW1iZGEgPSBHYXVzc1NlaWRlbChcclxuICAgICAgc3lzdGVtLmdldEpNSigpLFxyXG4gICAgICBzeXN0ZW0uZ2V0SlYoZGVsdGFUaW1lKSxcclxuICAgICAgc3lzdGVtLmNvbnN0cmFpbnRzLmxlbmd0aCxcclxuICAgICAgMWUtNlxyXG4gICAgKTtcclxuICAgIHN5c3RlbS5hcHBseVJlc29sdmluZ0ltcHVsc2VzKGxhbWJkYSk7XHJcblxyXG4gICAgZm9yIChjb25zdCBbbmFtZSwgY29uc3RyYWludHNdIG9mIHRoaXMuY29uc3RyYWludHMpIHtcclxuICAgICAgY29uc3Qgc3lzdGVtID0gY29uc3RyYWludHNbMF07XHJcbiAgICAgIHN5c3RlbS5jb25zdHJhaW50cy5mb3JFYWNoKChjKSA9PiBjLnVwZGF0ZUVxKCkpO1xyXG5cclxuICAgICAgY29uc3QgSk1KID0gc3lzdGVtLmdldEpNSigpO1xyXG4gICAgICBjb25zdCBKViA9IHN5c3RlbS5nZXRKVihkZWx0YVRpbWUpO1xyXG5cclxuICAgICAgY29uc3QgbGFtYmRhID0gR2F1c3NTZWlkZWwoSk1KLCBKViwgc3lzdGVtLmNvbnN0cmFpbnRzLmxlbmd0aCwgMWUtNik7XHJcblxyXG4gICAgICBzeXN0ZW0uYXBwbHlSZXNvbHZpbmdJbXB1bHNlcyhsYW1iZGEpO1xyXG4gICAgfVxyXG4gICAgZm9yIChsZXQgaSA9IDAsIG4gPSB0aGlzLm9iamVjdHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgIHRoaXMub2JqZWN0c1tpXS5pbnRlZ3JhdGVWZWxvY2l0aWVzKGRlbHRhVGltZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcG9zaXRpb25TeXN0ZW0gPSBuZXcgSXNsYW5kKCk7XHJcbiAgICBmb3IgKGNvbnN0IFtrZXksIG1hbmlmb2xkXSBvZiBtYW5pZm9sZHMpIHtcclxuICAgICAgY29uc3QgY29udGFjdHMgPSBtYW5pZm9sZC5jb250YWN0cy5tYXAoKGMpID0+IG5ldyBDb250YWN0Q29uc3RyYWludChjKSk7XHJcbiAgICAgIGNvbnRhY3RzLmZvckVhY2goKGNvbnRhY3QpID0+IGNvbnRhY3QudXBkYXRlRXEoKSk7XHJcbiAgICAgIGlmIChjb250YWN0cy5sZW5ndGggPiAyKSB7XHJcbiAgICAgICAgcG9zaXRpb25TeXN0ZW0uYWRkQ29uc3RyYWludCguLi5jb250YWN0cyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHBvc2l0aW9uU3lzdGVtLmdlbmVyYXRlU3lzdGVtKGRlbHRhVGltZSk7XHJcbiAgICBjb25zdCBKTUogPSBwb3NpdGlvblN5c3RlbS5nZXRKTUooKTtcclxuICAgIGNvbnN0IEpwViA9IHBvc2l0aW9uU3lzdGVtLmdldEpwVihkZWx0YVRpbWUpO1xyXG4gICAgY29uc3QgcExhbWJkYSA9IEdhdXNzU2VpZGVsKFxyXG4gICAgICBKTUosXHJcbiAgICAgIEpwVixcclxuICAgICAgcG9zaXRpb25TeXN0ZW0uY29uc3RyYWludHMubGVuZ3RoLFxyXG4gICAgICAxZS02XHJcbiAgICApO1xyXG4gICAgcG9zaXRpb25TeXN0ZW0uYXBwbHlSZXNvbHZpbmdQc2V1ZG9JbXB1bHNlcyhwTGFtYmRhLCBkZWx0YVRpbWUpO1xyXG5cclxuICAgIGZvciAoY29uc3QgW25hbWUsIGNvbnN0cmFpbnRzXSBvZiB0aGlzLmNvbnN0cmFpbnRzKSB7XHJcbiAgICAgIGNvbnN0IHN5c3RlbSA9IGNvbnN0cmFpbnRzWzFdO1xyXG5cclxuICAgICAgc3lzdGVtLmNvbnN0cmFpbnRzLmZvckVhY2goKGMpID0+IGMudXBkYXRlRXEoKSk7XHJcblxyXG4gICAgICBjb25zdCBKTUogPSBzeXN0ZW0uZ2V0Sk1KcCgpO1xyXG4gICAgICBjb25zdCBKcFYgPSBzeXN0ZW0uZ2V0SnBWKGRlbHRhVGltZSk7XHJcblxyXG4gICAgICBjb25zdCBsYW1iZGEgPSBHYXVzc1NlaWRlbChKTUosIEpwViwgc3lzdGVtLmNvbnN0cmFpbnRzLmxlbmd0aCwgMWUtNik7XHJcbiAgICAgIHN5c3RlbS5hcHBseVJlc29sdmluZ1BzZXVkb0ltcHVsc2VzKGxhbWJkYSk7XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDAsIG4gPSB0aGlzLm9iamVjdHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgIHRoaXMub2JqZWN0c1tpXS5pbnRlZ3JhdGVQc2V1ZG9WZWxvY2l0aWVzKGRlbHRhVGltZSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLm9iamVjdHMuZm9yRWFjaCgob2JqZWN0KSA9PiBvYmplY3QudXBkYXRlSW52ZXJzZUluZXJ0aWEoKSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEFBQkIgfSBmcm9tIFwibWF0aFwiO1xyXG5jb25zdCBnZXRCb3VuZEFhYmIgPSAoYWFiYjEsIGFhYmIyKSA9PiB7XHJcbiAgaWYgKCFhYWJiMSB8fCAhYWFiYjIpIHtcclxuICAgIHJldHVybiAwO1xyXG4gIH1cclxuICBjb25zdCB4MSA9IGFhYmIxLm1pblswXSA8IGFhYmIyLm1pblswXSA/IGFhYmIxLm1pblswXSA6IGFhYmIyLm1pblswXTtcclxuICBjb25zdCB4MiA9IGFhYmIxLm1heFswXSA+IGFhYmIyLm1heFswXSA/IGFhYmIxLm1heFswXSA6IGFhYmIyLm1heFswXTtcclxuICBjb25zdCB5MSA9IGFhYmIxLm1pblsxXSA8IGFhYmIyLm1pblsxXSA/IGFhYmIxLm1pblsxXSA6IGFhYmIyLm1pblsxXTtcclxuICBjb25zdCB5MiA9IGFhYmIxLm1heFsxXSA+IGFhYmIyLm1heFsxXSA/IGFhYmIxLm1heFsxXSA6IGFhYmIyLm1heFsxXTtcclxuICBjb25zdCB6MSA9IGFhYmIxLm1pblsyXSA8IGFhYmIyLm1pblsyXSA/IGFhYmIxLm1pblsyXSA6IGFhYmIyLm1pblsyXTtcclxuICBjb25zdCB6MiA9IGFhYmIxLm1heFsyXSA+IGFhYmIyLm1heFsyXSA/IGFhYmIxLm1heFsyXSA6IGFhYmIyLm1heFsyXTtcclxuICByZXR1cm4gbmV3IEFBQkIoW3gxLCB5MSwgejFdLCBbeDIsIHkyLCB6Ml0pO1xyXG59O1xyXG5jb25zdCBpc0NvbGxpZGUgPSAoYWFiYjEsIGFhYmIyKSA9PiB7XHJcbiAgaWYgKFxyXG4gICAgYWFiYjEubWluWzBdIDw9IGFhYmIyLm1heFswXSAmJlxyXG4gICAgYWFiYjEubWF4WzBdID49IGFhYmIyLm1pblswXSAmJlxyXG4gICAgYWFiYjEubWluWzFdIDw9IGFhYmIyLm1heFsxXSAmJlxyXG4gICAgYWFiYjEubWF4WzFdID49IGFhYmIyLm1pblsxXSAmJlxyXG4gICAgYWFiYjEubWluWzJdIDw9IGFhYmIyLm1heFsyXSAmJlxyXG4gICAgYWFiYjEubWF4WzJdID49IGFhYmIyLm1pblsyXVxyXG4gICkge1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG4gIHJldHVybiBmYWxzZTtcclxufTtcclxuY29uc3QgZ2V0U2l6ZSA9IChhYWJiKSA9PiB7XHJcbiAgY29uc3QgYXJlYSA9XHJcbiAgICBNYXRoLmFicyhhYWJiLm1heFswXSAtIGFhYmIubWluWzBdKSAqXHJcbiAgICBNYXRoLmFicyhhYWJiLm1heFsxXSAtIGFhYmIubWluWzFdKSAqXHJcbiAgICBNYXRoLmFicyhhYWJiLm1heFsyXSAtIGFhYmIubWluWzJdKTtcclxuICByZXR1cm4gYXJlYTtcclxufTtcclxuY2xhc3MgTm9kZSB7XHJcbiAgY29uc3RydWN0b3IoYWFiYiwgaXNMZWFmLCBnYW1lT2JqZWN0KSB7XHJcbiAgICB0aGlzLmFhYmIgPSBhYWJiO1xyXG4gICAgdGhpcy5pc0xlYWYgPSBpc0xlYWY7XHJcbiAgICB0aGlzLnBhcmVudCA9IG51bGw7XHJcblxyXG4gICAgdGhpcy5nYW1lT2JqZWN0ID0gZ2FtZU9iamVjdDtcclxuICAgIHRoaXMuaXNDaGVja2VkID0gZmFsc2U7XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyZWUge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5yb290ID0gbnVsbDtcclxuICAgIHRoaXMubGVhZnMgPSB7fTtcclxuICAgIHRoaXMudW51c2VkSW5kZXhlcyA9IFtdO1xyXG4gIH1cclxuICBzZXRVbmNoZWNrZWQoKSB7XHJcbiAgICBjb25zdCBzdGFjayA9IFt0aGlzLnJvb3RdO1xyXG5cclxuICAgIHdoaWxlIChzdGFjay5sZW5ndGggIT0gMCkge1xyXG4gICAgICBjb25zdCBub2RlID0gc3RhY2sucG9wKCk7XHJcbiAgICAgIGlmIChub2RlLmlzTGVhZikge1xyXG4gICAgICAgIG5vZGUuaXNDaGVja2VkID0gZmFsc2U7XHJcbiAgICAgICAgY29udGludWU7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG5vZGUuY2hpbGQxKSBzdGFjay5wdXNoKG5vZGUuY2hpbGQxKTtcclxuICAgICAgaWYgKG5vZGUuY2hpbGQyKSBzdGFjay5wdXNoKG5vZGUuY2hpbGQyKTtcclxuICAgIH1cclxuICB9XHJcbiAgZ2V0QmVzdFNpYmxpbmcobGVhZikge1xyXG4gICAgbGV0IHBvdGVudGlhbCA9IHRoaXMucm9vdDtcclxuICAgIHdoaWxlICghcG90ZW50aWFsLmlzTGVhZikge1xyXG4gICAgICBjb25zdCBzaXplID0gZ2V0U2l6ZShwb3RlbnRpYWwuYWFiYik7XHJcbiAgICAgIGNvbnN0IGNvbWJpbmVkQUFCQiA9IGdldEJvdW5kQWFiYihwb3RlbnRpYWwuYWFiYiwgbGVhZi5hYWJiKTtcclxuICAgICAgY29uc3QgY29tYmluZWRTaXplID0gZ2V0U2l6ZShjb21iaW5lZEFBQkIpO1xyXG4gICAgICBsZXQgY29zdCA9IGNvbWJpbmVkU2l6ZTtcclxuICAgICAgbGV0IGluaGVyQ29zdCA9IGNvbWJpbmVkU2l6ZSAtIHNpemU7XHJcblxyXG4gICAgICBsZXQgY29zdDE7XHJcbiAgICAgIGlmIChwb3RlbnRpYWwuY2hpbGQxLmlzTGVhZikge1xyXG4gICAgICAgIGNvc3QxID0gZ2V0U2l6ZShwb3RlbnRpYWwuY2hpbGQxLmFhYmIpICsgaW5oZXJDb3N0O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvc3QxID1cclxuICAgICAgICAgIGdldFNpemUoZ2V0Qm91bmRBYWJiKGxlYWYuYWFiYiwgcG90ZW50aWFsLmNoaWxkMS5hYWJiKSkgLVxyXG4gICAgICAgICAgZ2V0U2l6ZShwb3RlbnRpYWwuY2hpbGQxLmFhYmIpICtcclxuICAgICAgICAgIGluaGVyQ29zdDtcclxuICAgICAgfVxyXG5cclxuICAgICAgbGV0IGNvc3QyO1xyXG4gICAgICBpZiAocG90ZW50aWFsLmNoaWxkMi5pc0xlYWYpIHtcclxuICAgICAgICBjb3N0MiA9IGdldFNpemUocG90ZW50aWFsLmNoaWxkMi5hYWJiKSArIGluaGVyQ29zdDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb3N0MiA9XHJcbiAgICAgICAgICBnZXRTaXplKGdldEJvdW5kQWFiYihsZWFmLmFhYmIsIHBvdGVudGlhbC5jaGlsZDIuYWFiYikpIC1cclxuICAgICAgICAgIGdldFNpemUocG90ZW50aWFsLmNoaWxkMi5hYWJiKSArXHJcbiAgICAgICAgICBpbmhlckNvc3Q7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGNvc3QgPCBjb3N0MSAmJiBjb3N0IDwgY29zdDIpIHJldHVybiBwb3RlbnRpYWw7XHJcbiAgICAgIGlmIChjb3N0MSA8IGNvc3QyKSB7XHJcbiAgICAgICAgcG90ZW50aWFsID0gcG90ZW50aWFsLmNoaWxkMTtcclxuICAgICAgfSBlbHNlIHBvdGVudGlhbCA9IHBvdGVudGlhbC5jaGlsZDI7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcG90ZW50aWFsO1xyXG4gIH1cclxuICBpbnNlcnRMZWFmKGFhYmIsIGdhbWVPYmplY3QpIHtcclxuICAgIGNvbnN0IGxlYWYgPSBuZXcgTm9kZShhYWJiLCB0cnVlLCBnYW1lT2JqZWN0KTtcclxuICAgIGlmICh0aGlzLnJvb3QgPT09IG51bGwpIHtcclxuICAgICAgdGhpcy5yb290ID0gbGVhZjtcclxuICAgICAgdGhpcy5yb290LnBhcmVudCA9IG51bGw7XHJcbiAgICAgIHJldHVybiBsZWFmO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNpYmxpbmcgPSB0aGlzLmdldEJlc3RTaWJsaW5nKGxlYWYpO1xyXG4gICAgY29uc3Qgb2xkUGFyZW50ID0gc2libGluZy5wYXJlbnQ7XHJcbiAgICBjb25zdCBuZXdQYXJlbnQgPSBuZXcgTm9kZShsZWFmLmFhYmIsIGZhbHNlKTtcclxuICAgIG5ld1BhcmVudC5wYXJlbnQgPSBvbGRQYXJlbnQ7XHJcblxyXG4gICAgbmV3UGFyZW50LmFhYmIgPSBnZXRCb3VuZEFhYmIobGVhZi5hYWJiLCBzaWJsaW5nLmFhYmIpO1xyXG5cclxuICAgIGlmIChvbGRQYXJlbnQpIHtcclxuICAgICAgaWYgKG9sZFBhcmVudC5jaGlsZDEgPT09IHNpYmxpbmcpIG9sZFBhcmVudC5jaGlsZDEgPSBuZXdQYXJlbnQ7XHJcbiAgICAgIGVsc2Ugb2xkUGFyZW50LmNoaWxkMiA9IG5ld1BhcmVudDtcclxuXHJcbiAgICAgIG5ld1BhcmVudC5jaGlsZDEgPSBzaWJsaW5nO1xyXG4gICAgICBuZXdQYXJlbnQuY2hpbGQyID0gbGVhZjtcclxuXHJcbiAgICAgIHNpYmxpbmcucGFyZW50ID0gbmV3UGFyZW50O1xyXG4gICAgICBsZWFmLnBhcmVudCA9IG5ld1BhcmVudDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG5ld1BhcmVudC5jaGlsZDEgPSBzaWJsaW5nO1xyXG4gICAgICBuZXdQYXJlbnQuY2hpbGQyID0gbGVhZjtcclxuXHJcbiAgICAgIHNpYmxpbmcucGFyZW50ID0gbmV3UGFyZW50O1xyXG4gICAgICBsZWFmLnBhcmVudCA9IG5ld1BhcmVudDtcclxuICAgICAgdGhpcy5yb290ID0gbmV3UGFyZW50O1xyXG4gICAgfVxyXG4gICAgbGV0IGluZGV4ID0gbGVhZi5wYXJlbnQ7XHJcblxyXG4gICAgd2hpbGUgKGluZGV4KSB7XHJcbiAgICAgIGluZGV4ID0gdGhpcy5yZWJhbGFuY2UoaW5kZXgpO1xyXG4gICAgICBpbmRleCA9IGluZGV4LnBhcmVudDtcclxuICAgIH1cclxuICAgIHJldHVybiBsZWFmO1xyXG4gIH1cclxuICBnZXRDb2xsaXNpb25zKGxlYWYpIHtcclxuICAgIGNvbnN0IGNvbHMgPSBbXTtcclxuICAgIGNvbnN0IGl0ZXIgPSAoX25vZGUpID0+IHtcclxuICAgICAgaWYgKCFfbm9kZSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBpZiAoX25vZGUgPT09IGxlYWYpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGlzQ29sbGlkZShsZWFmLmFhYmIsIF9ub2RlLmFhYmIpKSB7XHJcbiAgICAgICAgaWYgKF9ub2RlLmlzTGVhZiAmJiAhX25vZGUuaXNDaGVja2VkKSB7XHJcbiAgICAgICAgICBjb2xzLnB1c2goX25vZGUuZ2FtZU9iamVjdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGl0ZXIoX25vZGUuY2hpbGQxKTtcclxuICAgICAgICBpdGVyKF9ub2RlLmNoaWxkMik7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgaXRlcih0aGlzLnJvb3QpO1xyXG5cclxuICAgIHJldHVybiBjb2xzO1xyXG4gIH1cclxuICByZW1vdmVMZWFmKGxlYWYpIHtcclxuICAgIGlmIChsZWFmID09PSB0aGlzLnJvb3QpIHtcclxuICAgICAgdGhpcy5yb290ID0gbnVsbDtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3QgcGFyZW50ID0gbGVhZi5wYXJlbnQ7XHJcbiAgICBjb25zdCBncmFuZFBhcmVudCA9IHBhcmVudCA/IHBhcmVudC5wYXJlbnQgOiBudWxsO1xyXG4gICAgbGV0IHNpYmxpbmc7XHJcbiAgICBpZiAocGFyZW50LmNoaWxkMSA9PT0gbGVhZikgc2libGluZyA9IHBhcmVudC5jaGlsZDI7XHJcbiAgICBlbHNlIHNpYmxpbmcgPSBwYXJlbnQuY2hpbGQxO1xyXG5cclxuICAgIGlmIChncmFuZFBhcmVudCkge1xyXG4gICAgICBpZiAoZ3JhbmRQYXJlbnQuY2hpbGQxID09PSBwYXJlbnQpIGdyYW5kUGFyZW50LmNoaWxkMSA9IHNpYmxpbmc7XHJcbiAgICAgIGVsc2UgZ3JhbmRQYXJlbnQuY2hpbGQyID0gc2libGluZztcclxuXHJcbiAgICAgIHNpYmxpbmcucGFyZW50ID0gZ3JhbmRQYXJlbnQ7XHJcblxyXG4gICAgICBsZXQgaW5kZXggPSBncmFuZFBhcmVudDtcclxuICAgICAgd2hpbGUgKGluZGV4KSB7XHJcbiAgICAgICAgaW5kZXggPSB0aGlzLnJlYmFsYW5jZShpbmRleCk7XHJcblxyXG4gICAgICAgIGluZGV4ID0gaW5kZXgucGFyZW50O1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnJvb3QgPSBzaWJsaW5nO1xyXG4gICAgICBzaWJsaW5nLnBhcmVudCA9IG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJlYmFsYW5jZShsZWFmKSB7XHJcbiAgICBpZiAoIWxlYWYpIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBpZiAobGVhZi5pc0xlYWYgfHwgdGhpcy5nZXRIZWlnaHQobGVhZikgPCAyKSB7XHJcbiAgICAgIGxlYWYuYWFiYiA9IGdldEJvdW5kQWFiYihsZWFmLmNoaWxkMS5hYWJiLCBsZWFmLmNoaWxkMi5hYWJiKTtcclxuICAgICAgcmV0dXJuIGxlYWY7XHJcbiAgICB9XHJcbiAgICBjb25zdCBjaGlsZDEgPSBsZWFmLmNoaWxkMTtcclxuICAgIGNvbnN0IGNoaWxkMiA9IGxlYWYuY2hpbGQyO1xyXG4gICAgY29uc3QgYmFsYW5jZSA9IHRoaXMuZ2V0SGVpZ2h0KGNoaWxkMikgLSB0aGlzLmdldEhlaWdodChjaGlsZDEpO1xyXG5cclxuICAgIGlmIChiYWxhbmNlID4gMSkge1xyXG4gICAgICBjb25zdCBjaGlsZDJDaGlsZDEgPSBjaGlsZDIuY2hpbGQxO1xyXG4gICAgICBjb25zdCBjaGlsZDJDaGlsZDIgPSBjaGlsZDIuY2hpbGQyO1xyXG5cclxuICAgICAgY2hpbGQyLmNoaWxkMSA9IGxlYWY7XHJcbiAgICAgIGNoaWxkMi5wYXJlbnQgPSBsZWFmLnBhcmVudDtcclxuICAgICAgbGVhZi5wYXJlbnQgPSBjaGlsZDI7XHJcbiAgICAgIGlmIChjaGlsZDIucGFyZW50ICE9IG51bGwpIHtcclxuICAgICAgICBpZiAoY2hpbGQyLnBhcmVudC5jaGlsZDEgPT09IGxlYWYpIHtcclxuICAgICAgICAgIGNoaWxkMi5wYXJlbnQuY2hpbGQxID0gY2hpbGQyO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjaGlsZDIucGFyZW50LmNoaWxkMiA9IGNoaWxkMjtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB0aGlzLnJvb3QgPSBjaGlsZDI7XHJcbiAgICAgIGlmICh0aGlzLmdldEhlaWdodChjaGlsZDJDaGlsZDEpID4gdGhpcy5nZXRIZWlnaHQoY2hpbGQyQ2hpbGQyKSkge1xyXG4gICAgICAgIGNoaWxkMi5jaGlsZDIgPSBjaGlsZDJDaGlsZDE7XHJcbiAgICAgICAgbGVhZi5jaGlsZDIgPSBjaGlsZDJDaGlsZDI7XHJcbiAgICAgICAgY2hpbGQyQ2hpbGQyLnBhcmVudCA9IGxlYWY7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGVhZi5jaGlsZDIgPSBjaGlsZDJDaGlsZDE7XHJcbiAgICAgICAgY2hpbGQyQ2hpbGQxLnBhcmVudCA9IGxlYWY7XHJcbiAgICAgIH1cclxuICAgICAgbGVhZi5hYWJiID0gZ2V0Qm91bmRBYWJiKGxlYWYuY2hpbGQxLmFhYmIsIGxlYWYuY2hpbGQyLmFhYmIpO1xyXG4gICAgICBjaGlsZDIuYWFiYiA9IGdldEJvdW5kQWFiYihjaGlsZDIuY2hpbGQxLmFhYmIsIGNoaWxkMi5jaGlsZDIuYWFiYik7XHJcblxyXG4gICAgICByZXR1cm4gY2hpbGQyO1xyXG4gICAgfVxyXG4gICAgaWYgKGJhbGFuY2UgPCAtMSkge1xyXG4gICAgICBjb25zdCBjaGlsZDFDaGlsZDEgPSBjaGlsZDEuY2hpbGQxO1xyXG4gICAgICBjb25zdCBjaGlsZDFDaGlsZDIgPSBjaGlsZDEuY2hpbGQyO1xyXG5cclxuICAgICAgY2hpbGQxLmNoaWxkMSA9IGxlYWY7XHJcbiAgICAgIGNoaWxkMS5wYXJlbnQgPSBsZWFmLnBhcmVudDtcclxuICAgICAgbGVhZi5wYXJlbnQgPSBjaGlsZDE7XHJcblxyXG4gICAgICBpZiAoY2hpbGQxLnBhcmVudCAhPSBudWxsKSB7XHJcbiAgICAgICAgaWYgKGNoaWxkMS5wYXJlbnQuY2hpbGQxID09PSBsZWFmKSB7XHJcbiAgICAgICAgICBjaGlsZDEucGFyZW50LmNoaWxkMSA9IGNoaWxkMTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY2hpbGQxLnBhcmVudC5jaGlsZDIgPSBjaGlsZDE7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2UgdGhpcy5yb290ID0gY2hpbGQxO1xyXG4gICAgICBpZiAodGhpcy5nZXRIZWlnaHQoY2hpbGQxQ2hpbGQxKSA+IHRoaXMuZ2V0SGVpZ2h0KGNoaWxkMUNoaWxkMikpIHtcclxuICAgICAgICBjaGlsZDEuY2hpbGQyID0gY2hpbGQxQ2hpbGQxO1xyXG4gICAgICAgIGxlYWYuY2hpbGQxID0gY2hpbGQxQ2hpbGQyO1xyXG4gICAgICAgIGNoaWxkMUNoaWxkMi5wYXJlbnQgPSBsZWFmO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNoaWxkMS5jaGlsZDIgPSBjaGlsZDFDaGlsZDI7XHJcbiAgICAgICAgbGVhZi5jaGlsZDEgPSBjaGlsZDFDaGlsZDE7XHJcbiAgICAgICAgY2hpbGQxQ2hpbGQxLnBhcmVudCA9IGxlYWY7XHJcbiAgICAgIH1cclxuICAgICAgbGVhZi5hYWJiID0gZ2V0Qm91bmRBYWJiKGxlYWYuY2hpbGQxLmFhYmIsIGxlYWYuY2hpbGQyLmFhYmIpO1xyXG4gICAgICBjaGlsZDEuYWFiYiA9IGdldEJvdW5kQWFiYihjaGlsZDEuY2hpbGQxLmFhYmIsIGNoaWxkMS5jaGlsZDIuYWFiYik7XHJcblxyXG4gICAgICByZXR1cm4gY2hpbGQxO1xyXG4gICAgfVxyXG4gICAgbGVhZi5hYWJiID0gZ2V0Qm91bmRBYWJiKGxlYWYuY2hpbGQxLmFhYmIsIGxlYWYuY2hpbGQyLmFhYmIpO1xyXG4gICAgcmV0dXJuIGxlYWY7XHJcbiAgfVxyXG4gIHRvQXJyYXkoaSkge1xyXG4gICAgY29uc3QgaXRlciA9IChsZWFmLCBsZXZlbCkgPT4ge1xyXG4gICAgICBpZiAoIWxlYWYpIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgfVxyXG4gICAgICBpZiAobGVhZi5pc0xlYWYpIHJldHVybiBsZWFmLm9iamVjdExpbmsubmFtZTtcclxuICAgICAgZWxzZSByZXR1cm4gW2l0ZXIobGVhZi5jaGlsZDEpLCBpdGVyKGxlYWYuY2hpbGQyKV07XHJcbiAgICB9O1xyXG4gICAgaWYgKCFpKSBpID0gdGhpcy5yb290O1xyXG4gICAgcmV0dXJuIGl0ZXIoaSk7XHJcbiAgfVxyXG4gIGdldEhlaWdodChsZWFmKSB7XHJcbiAgICBjb25zdCBpdGVyID0gKGxlYWYsIGxldmVsKSA9PiB7XHJcbiAgICAgIGlmICghbGVhZikge1xyXG4gICAgICAgIHJldHVybiBsZXZlbDtcclxuICAgICAgfVxyXG5cclxuICAgICAgbGV0IGgxID0gaXRlcihsZWFmLmNoaWxkMSwgbGV2ZWwgKyAxKTtcclxuICAgICAgbGV0IGgyID0gaXRlcihsZWFmLmNoaWxkMiwgbGV2ZWwgKyAxKTtcclxuICAgICAgcmV0dXJuIGgxID4gaDIgPyBoMSA6IGgyO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBpdGVyKGxlYWYsIDEpO1xyXG4gIH1cclxuICBnZXROb2RlcygpIHtcclxuICAgIGNvbnN0IGl0ZXIgPSAobm9kZSwgYXJyKSA9PiB7XHJcbiAgICAgIGFyci5wdXNoKG5vZGUpO1xyXG4gICAgICBpZiAobm9kZS5jaGlsZDEpIGl0ZXIobm9kZS5jaGlsZDEsIGFycik7XHJcbiAgICAgIGlmIChub2RlLmNoaWxkMikgaXRlcihub2RlLmNoaWxkMiwgYXJyKTtcclxuICAgIH07XHJcbiAgICBjb25zdCBhID0gW107XHJcbiAgICBpdGVyKHRoaXMucm9vdCwgYSk7XHJcbiAgICByZXR1cm4gYTtcclxuICB9XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IG00LCB2ZWN0b3IgfSBmcm9tIFwibWF0aFwiO1xyXG5cclxuXHJcbmltcG9ydCB7XHJcbiAgQXJyYXlEYXRhRnJvbUdsdGYsXHJcbiAgUHJpbWl0aXZlUmVuZGVySW5mb0Zyb21BcnJheURhdGEsXHJcbiAgRW50aXR5RGF0YUZyb21HbHRmLFxyXG4gIGdldEdsQ29udGV4dCxcclxuICByZXNpemVDYW52YXNUb0Rpc3BsYXlTaXplLFxyXG4gIFByb2dyYW1JbmZvLFxyXG4gIE1lc2hSZW5kZXJlcixcclxuICBEcmF3ZXIsXHJcbiAgY3JlYXRlQm94LFxyXG4gIFByaW1pdGl2ZVJlbmRlcmVyLFxyXG4gIFRleHR1cmUsXHJcbiAgbWFrZUltZ0Zyb21TdmdYbWwsXHJcbiAgbWFrZVN0cmlwZUltZyxcclxuICBFbnRpdHksXHJcbiAgR0xURixcclxuICBHTGNvbnRleHRXcmFwcGVyLFxyXG4gIGNyZWF0ZUNvbmUsXHJcbiAgY3JlYXRlQ2lyY2xlLFxyXG4gIGRlZmF1bHRQcm9ncmFtLFxyXG59IGZyb20gXCJncmFwaGljc1wiO1xyXG5cclxuaW1wb3J0IE1vdXNlSW5wdXQgZnJvbSBcIi4vc3JjL2dhbWUvbW91c2VcIjtcclxuaW1wb3J0IEtleWxvZ2dlciBmcm9tIFwiLi9zcmMvZ2FtZS9rZXlsb2dnZXJcIjtcclxuY29uc3QgbW91c2VJbnB1dCA9IG5ldyBNb3VzZUlucHV0KClcclxuXHJcbm1vdXNlSW5wdXQubGlzdGVuKCkgXHJcbmNvbnN0IGtleUlucHV0ID0gbmV3IEtleWxvZ2dlcigpXHJcbmtleUlucHV0Lmxpc3RlbigpXHJcbmNvbnN0IGNvbnRleHQgPSBuZXcgR0xjb250ZXh0V3JhcHBlcihcImNhbnZhc1wiKTtcclxuY29uc3QgZ2wgPSBjb250ZXh0LmdldENvbnRleHQoKTtcclxuY29udGV4dC5yZXNpemVDYW52YXNUb0Rpc3BsYXlTaXplKCk7XHJcbmNvbnN0IGRyYXdlciA9IG5ldyBEcmF3ZXIoKTtcclxuZHJhd2VyLnNldENvbnRleHQoY29udGV4dCkudXBkYXRlM0RQcm9qZWN0aW9uTWF0cml4KCk7XHJcblxyXG5kZWZhdWx0UHJvZ3JhbS5zZXRDb250ZXh0KGNvbnRleHQpLmNvbXBpbGVTaGFkZXJzKCkuY3JlYXRlVW5pZm9ybVNldHRlcnMoKTtcclxuXHJcbmNvbnN0IGJveCA9IG5ldyBQcmltaXRpdmVSZW5kZXJlcihjcmVhdGVCb3goMSwgMSwgMSkpO1xyXG5cclxuY29uc3QgY2lyY2xlID0gbmV3IFByaW1pdGl2ZVJlbmRlcmVyKGNyZWF0ZUNpcmNsZSg4LCA0KSk7XHJcblxyXG5jb25zdCBwb2ludHMgPSBuZXcgUHJpbWl0aXZlUmVuZGVyZXIoe1xyXG4gIG1vZGU6IGdsLlBPSU5UUyxcclxuICBudW1FbGVtZW50czogMixcclxuICBvZmZzZXQ6IDAsXHJcbn0pO1xyXG5jb25zdCBsaW5lID0gbmV3IFByaW1pdGl2ZVJlbmRlcmVyKHtcclxuICBtb2RlOiBnbC5MSU5FUyxcclxuICBudW1FbGVtZW50czogMixcclxuICBvZmZzZXQ6IDAsXHJcbn0pO1xyXG5cclxuYm94XHJcbiAgLnNldENvbnRleHQoY29udGV4dClcclxuICAuY3JlYXRlVkFPKClcclxuICAuc2V0RHJhd2VyKGRyYXdlcilcclxuICAuc2V0UHJvZ3JhbUluZm8oZGVmYXVsdFByb2dyYW0pXHJcbiAgLmNyZWF0ZUdlb21ldHJ5QnVmZmVycygpXHJcbiAgLnNldEF0dHJpYnV0ZXMoKVxyXG4gIC5zZXRNb2RlKDIpO1xyXG5cclxuY2lyY2xlXHJcbiAgLnNldENvbnRleHQoY29udGV4dClcclxuICAuY3JlYXRlVkFPKClcclxuICAuc2V0RHJhd2VyKGRyYXdlcilcclxuICAuc2V0UHJvZ3JhbUluZm8oZGVmYXVsdFByb2dyYW0pXHJcbiAgLmNyZWF0ZUdlb21ldHJ5QnVmZmVycygpXHJcbiAgLnNldEF0dHJpYnV0ZXMoKVxyXG4gIC5zZXRNb2RlKDMpO1xyXG5cclxubGluZVxyXG4gIC5zZXRDb250ZXh0KGNvbnRleHQpXHJcbiAgLmNyZWF0ZVZBTygpXHJcbiAgLnNldERyYXdlcihkcmF3ZXIpXHJcbiAgLnNldFByb2dyYW1JbmZvKGRlZmF1bHRQcm9ncmFtKVxyXG4gIC5jcmVhdGVCdWZmZXJBdHRyaWJEYXRhKFwiYV9wb3NpdGlvblwiLCBcInZlYzNcIiwgeyBsb2NhdGlvbjogMCB9KVxyXG4gIC5zZXRPd25BdHRyaWJ1dGUoXCJhX3Bvc2l0aW9uXCIpXHJcbiAgLmJ1ZmZlckRhdGEoXCJhX3Bvc2l0aW9uXCIsIG5ldyBGbG9hdDMyQXJyYXkoWzAsIDAsIDAsIDAsIDEsIDBdKSk7XHJcblxyXG5wb2ludHNcclxuICAuc2V0Q29udGV4dChjb250ZXh0KVxyXG4gIC5jcmVhdGVWQU8oKVxyXG4gIC5zZXREcmF3ZXIoZHJhd2VyKVxyXG4gIC5zZXRQcm9ncmFtSW5mbyhkZWZhdWx0UHJvZ3JhbSlcclxuICAuY3JlYXRlQnVmZmVyQXR0cmliRGF0YShcImFfcG9zaXRpb25cIiwgXCJ2ZWMzXCIsIHsgbG9jYXRpb246IDAgfSlcclxuICAuc2V0T3duQXR0cmlidXRlKFwiYV9wb3NpdGlvblwiKVxyXG4gIC5idWZmZXJEYXRhKFwiYV9wb3NpdGlvblwiLCBuZXcgRmxvYXQzMkFycmF5KFswLCAwLCAwXSkpO1xyXG5cclxuLypcclxuY29uc3QgdW5pZm9ybXMgPSB7XHJcbiAgdV9saWdodFdvcmxkUG9zaXRpb246IFswLCAwLCAxMF0sXHJcbiAgdV9hbWJpZW50TGlnaHQ6IFsxLCAxLCAwLjMsIDAuMTFdLFxyXG4gIHVfcmV2ZXJzZUxpZ2h0RGlyZWN0aW9uOiBbMSwgMCwgMF0sXHJcbiAgdV9zaGluaW5lc3M6IDMwMCxcclxufTtcclxuKi9cclxuXHJcbmltcG9ydCBTaW11bGF0aW9uIGZyb20gXCIuL3NyYy9waHlzaWNzL3NpbXVsYXRpb25cIjtcclxuaW1wb3J0IHsgUGxheWVyLCBSaWdpZEJvZHkgfSBmcm9tIFwiLi9zcmMvcGh5c2ljcy9SaWdpZEJvZHlcIjtcclxuaW1wb3J0IHsgQm94IH0gZnJvbSBcIi4vc3JjL3BoeXNpY3MvY29sbGlkZXJcIjtcclxuaW1wb3J0IHtDb250cm9sbGFibGUsIE5vY2xpcH0gZnJvbSBcIi4vc3JjL2dhbWUvY29udHJvbGxhYmxlXCI7XHJcblxyXG5pbXBvcnQgeyBKb2ludCB9IGZyb20gXCIuL3NyYy9waHlzaWNzL2NvbnRhY3RcIjtcclxuaW1wb3J0IGNyZWF0ZVJhZ2RvbGwgZnJvbSBcIi4vc3JjL3BoeXNpY3MvY3JlYXRlUmFnZG9sbFwiO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IHNpbSA9IG5ldyBTaW11bGF0aW9uKCk7XHJcblxyXG5jb25zdCBmbG9vciA9IHsgcGh5c2ljczogbmV3IFJpZ2lkQm9keShuZXcgQm94KDEwMDAsIDYsIDEwMDApKSwgc3ByaXRlOiBib3ggfTtcclxuXHJcbmNvbnN0IGN1YmUyID0geyBwaHlzaWNzOiBuZXcgUmlnaWRCb2R5KG5ldyBCb3goMiwgMiwgMikpLCBzcHJpdGU6IGJveCB9O1xyXG5jb25zdCBjdWJlMyA9IHsgcGh5c2ljczogbmV3IFJpZ2lkQm9keShuZXcgQm94KDIsIDIsIDIpKSwgc3ByaXRlOiBib3ggfTtcclxuY29uc3QgY3ViZTQgPSB7IHBoeXNpY3M6IG5ldyBQbGF5ZXIobmV3IEJveCgyLCAyLCAyKSksIHNwcml0ZTogYm94IH07XHJcbmN1YmUyLnBoeXNpY3MudHJhbnNsYXRlKFswLCA1LCAwXSk7XHJcbmN1YmU0LnBoeXNpY3MudHJhbnNsYXRlKFswLCAxMCwgLTVdKTtcclxuY3ViZTMucGh5c2ljcy50cmFuc2xhdGUoWzAsIDMsIDBdKTtcclxuLy9jdWJlLnBoeXNpY3Mucm90YXRlKFtNYXRoLlBJKjAuNixNYXRoLlBJKjAuMyxNYXRoLlBJKjAuM10pXHJcblxyXG5jdWJlMi5waHlzaWNzLmFkZEFjY2VsZXJhdGlvbihbMCwgMywgMF0pO1xyXG5jdWJlMy5waHlzaWNzLmFkZEFjY2VsZXJhdGlvbihbMCwgLTkuOCwgMF0pO1xyXG5jdWJlNC5waHlzaWNzLmFkZEFjY2VsZXJhdGlvbihbMCwgLTkuOCwgMF0pO1xyXG5cclxuY3ViZTIucGh5c2ljcy5zZXRNYXNzKDIwKVxyXG5jdWJlMy5waHlzaWNzLnNldE1hc3MoMjApXHJcbnNpbS5hZGRPYmplY3QoZmxvb3IucGh5c2ljcyk7XHJcblxyXG5zaW0uYWRkT2JqZWN0KGN1YmUyLnBoeXNpY3MpO1xyXG5zaW0uYWRkT2JqZWN0KGN1YmUzLnBoeXNpY3MpO1xyXG5zaW0uYWRkT2JqZWN0KGN1YmU0LnBoeXNpY3MpO1xyXG5jb25zdCBvYmplY3RzID0gW2Zsb29yLCAgY3ViZTIsIGN1YmUzLCBjdWJlNF07XHJcblxyXG5cclxuZm9yKGxldCBpID0gMDsgaSA8IDA7IGkrKyl7XHJcbiAgY29uc3QgY3ViZSA9IHsgcGh5c2ljczogbmV3IFJpZ2lkQm9keShuZXcgQm94KDUsIDUsIDUpKSwgc3ByaXRlOiBib3ggfTtcclxuICBjdWJlLnBoeXNpY3MudHJhbnNsYXRlKFswLCA1ICogaSArMTUgLCAwXSlcclxuICBjdWJlLnBoeXNpY3Muc2V0TWFzcygyKTtcclxuICBjdWJlLnBoeXNpY3MuYWRkQWNjZWxlcmF0aW9uKFswLCAtOS44LCAwXSlcclxuICBzaW0uYWRkT2JqZWN0KGN1YmUucGh5c2ljcyk7XHJcbiAgb2JqZWN0cy5wdXNoKGN1YmUpXHJcbn1cclxuXHJcbmZsb29yLnBoeXNpY3Muc2V0TWFzcygxMDAwMDAwMDApO1xyXG5cclxuXHJcblxyXG5mbG9vci5waHlzaWNzLnRyYW5zbGF0ZShbMCwgLTMsIDBdKTtcclxuLy9mbG9vci5waHlzaWNzLnJvdGF0ZShbMC4wLDAsMF0pXHJcbi8vZmxvb3Iuc3RhdGljID0gdHJ1ZVxyXG5cclxuY29uc3QgcGxheWVyID0gbmV3IENvbnRyb2xsYWJsZShjdWJlNC5waHlzaWNzKVxyXG5cclxucGxheWVyLmxpc3RlbktleWJvYXJkKGtleUlucHV0KVxyXG5wbGF5ZXIubGlzdGVuTW91c2UobW91c2VJbnB1dClcclxuXHJcblxyXG5cclxuY29uc3QgW2JvZGllcywgY29uc3RyYWludHNdID0gY3JlYXRlUmFnZG9sbChbMCwyNSwwXSlcclxuYm9kaWVzLmZvckVhY2goYj0+e1xyXG4gIGIuYWRkQWNjZWxlcmF0aW9uKFswLC05LjgsMF0pXHJcbiBcclxuICBzaW0uYWRkT2JqZWN0KGIpXHJcbn0pIFxyXG4vL3NpbS5hZGRDb25zdHJhaW50cyhjb25zdHJhaW50cywgJ3JhZ2RvbGwnKVxyXG4vL3NpbS5hZGRDb25zdHJhaW50cyhbbmV3IEpvaW50KFswLDIwLDBdLCBbMCwwLDBdLGZsb29yLnBoeXNpY3MsYm9kaWVzWzBdLDAuMSwgMC4wKV0sICduYW1lJylcclxub2JqZWN0cy5wdXNoKC4uLmJvZGllcy5tYXAoYj0+ICh7cGh5c2ljcyA6IGIsIHNwcml0ZSA6IGJveH0pKSlcclxuXHJcbmxldCBsYXN0Q2FsbCA9IERhdGUubm93KCk7XHJcbmNvbnN0IGZwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZnBzXCIpO1xyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIChlKSA9PiB7aWYoZS5rZXkgPT09ICdwJylzaW0udGljaygwLjAxNSl9KVxyXG5sZXQgaSA9IDBcclxuY29uc3QgbG9vcCA9ICgpID0+IHtcclxuICBzaW0udGljaygwLjAxNSk7XHJcbiAgcGxheWVyLnRpY2soKVxyXG4gIGNvbnN0IGN1cmVudFRpbWUgPSBEYXRlLm5vdygpO1xyXG4gIGNvbnN0IGRlbHRhID0gY3VyZW50VGltZSAtIGxhc3RDYWxsO1xyXG4gIGZwcy50ZXh0Q29udGVudCA9ICgxIC8gZGVsdGEpICogMTAwMDtcclxuICBsYXN0Q2FsbCA9IGN1cmVudFRpbWU7XHJcbiAgZ2wuY2xlYXIoZ2wuQ09MT1JfQlVGRkVSX0JJVCB8IGdsLkRFUFRIX0JVRkZFUl9CSVQpO1xyXG4gIGdsLmVuYWJsZShnbC5DVUxMX0ZBQ0UpO1xyXG4gIGdsLmVuYWJsZShnbC5ERVBUSF9URVNUKTtcclxuICBcclxuICBjb25zdCBjYW1lcmFNYXRyaXggPSBwbGF5ZXIuY2FtTWF0cml4XHJcbiAgXHJcbiAgaSArPSAwLjAwMTtcclxuICBcclxuICBcclxuICBjb25zdCBtYW5pZm9sZHMgPSBzaW0uY29sbGlzaW9uTWFuaWZvbGRzLnZhbHVlcygpO1xyXG4gIFxyXG4gIGZvciAoY29uc3QgbWFuaWZvbGQgb2YgbWFuaWZvbGRzKSB7XHJcbiAgIFxyXG4gICAgXHJcbiAgICBtYW5pZm9sZC5jb250YWN0cy5mb3JFYWNoKChjb250YWN0KSA9PiB7XHJcbiAgICAgIFxyXG4gICAgICBwb2ludHNcclxuICAgICAgICAuZHJhdyh7XHJcbiAgICAgICAgICB1X21hdHJpeDogbTQudHJhbnNsYXRpb24oLi4uY29udGFjdC5QQSksXHJcbiAgICAgICAgICB1X2NvbG9yOiBbMC42LCAwLjYsIDAuMCwgMV0sXHJcbiAgICAgICAgfSwgY2FtZXJhTWF0cml4KVxyXG4gICAgICAgIC5kcmF3KHtcclxuICAgICAgICAgIHVfbWF0cml4OiBtNC50cmFuc2xhdGlvbiguLi5jb250YWN0LlBCKSxcclxuICAgICAgICAgIHVfY29sb3I6IFswLjUsIDAuMSwgMC4yLCAxXSxcclxuICAgICAgICB9LCBjYW1lcmFNYXRyaXgpO1xyXG4gICAgICAgIFxyXG5cclxuICAgICAgIFxyXG4gICAgICAgIFxyXG5cclxuICAgICAgIFxyXG5cclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgIH0pO1xyXG4gIH1cclxuICBcclxuICBvYmplY3RzLmZvckVhY2goKG9iaikgPT4ge1xyXG4gICAgY29uc3Qgc2NhbGUgPSB2ZWN0b3IuZGlmZihcclxuICAgICAgb2JqLnBoeXNpY3MuY29sbGlkZXIubWF4LFxyXG4gICAgICBvYmoucGh5c2ljcy5jb2xsaWRlci5taW5cclxuICAgICk7XHJcbiAgICBjb25zdCB1X21hdHJpeCA9IG9iai5waHlzaWNzLmNvbGxpZGVyLmdldE00KClcclxuICAgIG9iai5zcHJpdGUuZHJhdyh7IHVfY29sb3I6IFsxLCAwLCAxLCAxXSwgdV9tYXRyaXggfSwgY2FtZXJhTWF0cml4KTtcclxuICB9KTtcclxuICBcclxuICBcclxuICBjaXJjbGUuZHJhdyhcclxuICAgIHtcclxuICAgICAgdV9tYXRyaXg6IG00LnJvdGF0aW9uKE1hdGguUEkvMiwwLDApLFxyXG4gICAgICB1X2NvbG9yOiBbMSwgMC41LCAwLjEsIDFdLFxyXG4gICAgICB1X3dvcmxkVmlld1Bvc2l0aW9uOiBjYW1lcmFNYXRyaXgsXHJcbiAgICB9LFxyXG4gICAgY2FtZXJhTWF0cml4XHJcbiAgKVxyXG4gIC5kcmF3KFxyXG4gICAge1xyXG4gICAgICB1X21hdHJpeDogbTQuaWRlbnRpdHkoKSxcclxuICAgICAgdV9jb2xvcjogWzEsIDAuNSwgMC4xLCAxXSxcclxuICAgICAgdV93b3JsZFZpZXdQb3NpdGlvbjogY2FtZXJhTWF0cml4LFxyXG4gICAgfSxcclxuICAgIGNhbWVyYU1hdHJpeFxyXG4gICk7XHJcbiAgcG9pbnRzLmRyYXcoXHJcbiAgICB7XHJcbiAgICAgIHVfbWF0cml4OiBtNC5pZGVudGl0eSgpLFxyXG4gICAgICB1X2NvbG9yOiBbMCwgMC41LCAwLjEsIDFdLFxyXG4gICAgICB1X3dvcmxkVmlld1Bvc2l0aW9uOiBjYW1lcmFNYXRyaXgsXHJcbiAgICB9LFxyXG4gICAgY2FtZXJhTWF0cml4XHJcbiAgKVxyXG4gXHJcbiAgICBcclxuICBnbC52aWV3cG9ydCgwLCAwLCBnbC5jYW52YXMud2lkdGgsIGdsLmNhbnZhcy5oZWlnaHQpO1xyXG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZShsb29wKVxyXG59O1xyXG5sb29wKCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==