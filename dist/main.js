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
/***/ ((module) => {

const MatType = Float32Array;
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
    return this.zRotate(this.yRotate(this.xRotation(x), y), z);
  },
  rotationFromNormal(n) {
    return this.rotation(Math.acos(n[1]), Math.acos(n[2]), Math.acos(n[0]));
  },
};
function makeZToWMatrix(fudgeFactor) {
  return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, fudgeFactor, 0, 0, 0, 1];
}
function cross(a, b) {
  return [
    a[1] * b[2] - a[2] * b[1],
    a[2] * b[0] - a[0] * b[2],
    a[0] * b[1] - a[1] * b[0],
  ];
}
function subtractVectors(a, b) {
  return [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
}

module.exports = m4;


/***/ }),

/***/ "./node_modules/math/src/node.js":
/*!***************************************!*\
  !*** ./node_modules/math/src/node.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const m4 = __webpack_require__(/*! ./m4 */ "./node_modules/math/src/m4.js")
class TRS{
    constructor(translation, rotation, scale){
        this.translation = translation
        this.rotation = rotation
        this.scale = scale
    }
    getMatrix(m) {

        let dst = m || m4.identity();
        var t = this.translation;
        var r = this.rotation;
        var s = this.scale;
        const sin = Math.sin(r[3] / 2)
        const cos = Math.cos(r[3] / 2)
        dst = m4.translate(dst,t[0], t[1], t[2]);

        dst = m4.multiply(dst, m4.fromQuaternion(r))
        
        dst = m4.scale(dst, s[0], s[1], s[2]);
        return dst;
      };
    getRMatrix(){
        let dst = m4.identity();
        var r = this.rotation;
        dst = m4.xRotate(dst, r[0]);
        dst = m4.yRotate(dst, r[1]);
        dst = m4.zRotate(dst, r[2]);
        return dst
    }
}
class Node{
    constructor( name, trs = new TRS()){
        this.worldMatrix = m4.identity()
        this.parent = null
        this.children = []
        this.trs = trs
        this.name = name
        this.parts = []
    }
    setParent(parent){
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
    updateWorldMatrix(parentWorldMatrix){
        let matrix = this.trs.getMatrix()
        if (parentWorldMatrix) {
          matrix = m4.multiply(parentWorldMatrix, matrix)
        }
        this.worldMatrix = matrix
        this.children.forEach((child) => {
          child.updateWorldMatrix(matrix);
        })
    }
    updatePartsList(){
        const iter = (node,arr) => {
            arr.push(node)
            node.children.forEach(child => iter(child,arr))
        }
        iter(this, this.parts)
    }
}


module.exports = {Node, TRS}

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

/***/ "./src/GSsolver.js":
/*!*************************!*\
  !*** ./src/GSsolver.js ***!
  \*************************/
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

/***/ "./src/collider.js":
/*!*************************!*\
  !*** ./src/collider.js ***!
  \*************************/
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
    this.Rmatrix = matrix;
    this.RmatrixInverse = math__WEBPACK_IMPORTED_MODULE_0__.m3.transpose(matrix);
  }
  support(dir) {
    const _dir = math__WEBPACK_IMPORTED_MODULE_0__.m3.transformPoint(this.RmatrixInverse, dir);

    const res = [0, 0, 0];

    res[0] = _dir[0] > 0 ? this.max[0] : this.min[0];
    res[1] = _dir[1] > 0 ? this.max[1] : this.min[1];
    res[2] = _dir[2] > 0 ? this.max[2] : this.min[2];

    const sup = math__WEBPACK_IMPORTED_MODULE_0__.m4.transformPoint(this.getM4(), res);

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

    return math__WEBPACK_IMPORTED_MODULE_0__.m3.multiply(math__WEBPACK_IMPORTED_MODULE_0__.m3.multiply(this.Rmatrix, m), this.RmatrixInverse);
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
}




/***/ }),

/***/ "./src/constraints.js":
/*!****************************!*\
  !*** ./src/constraints.js ***!
  \****************************/
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
/* harmony import */ var _GSsolver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GSsolver */ "./src/GSsolver.js");



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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Constraint": () => (/* binding */ Constraint),
/* harmony export */   "Contact": () => (/* binding */ Contact),
/* harmony export */   "Joint": () => (/* binding */ Joint)
/* harmony export */ });
/* harmony import */ var math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! math */ "./node_modules/math/index.js");
/* harmony import */ var math__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(math__WEBPACK_IMPORTED_MODULE_0__);


const { dot, cross, normalize, diff, scale, norm, sum } = math__WEBPACK_IMPORTED_MODULE_0__.vector;

class Constraint {
  constructor(body1, body2) {
    this.bias = null;
    this.n = null;
    this.J = null;
    this.invMass1 = null;
    this.JM = null;
    this.body1 = body1;
    this.body2 = body2;
    this.ra = null;
    this.rb = null;
  }
  updateEq() {}
  applyResolvingImpulse(lambda) {}
}
const clamp = (v, min, max) => {
  if (v > min) {
    if (v < max) return v;
    else return max;
  }
  return min;
};

const frictionSolver = (contact, lambda, body1, body2) => {
  contact.relVelocity = sum(body2.velocity, cross(body2.angularV, contact.rb));
  contact.relVelocity = diff(contact.relVelocity, body1.velocity);
  contact.relVelocity = diff(
    contact.relVelocity,
    cross(body1.angularV, contact.ra)
  );

  const mu = (body1.friction + body1.friction);
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
class Contact extends Constraint {
  constructor(raLocal, rbLocal, n, body1, body2) {
    super(body1, body2);
    this.ra = null;
    this.rb = null;
    this.PA = null;
    this.PB = null;
    this.n = n;
    this.penDepth = null;
    this.initialVelProj = null;
    this.effMass = null;
    this.raLocal = raLocal;
    this.rbLocal = rbLocal;
    this.J = null;
    this.accI = 0;
    this.accFI1 = 0;
    this.accFI2 = 0;
    try {
      if (dot(this.n, [1, 0, 0]) < 0.5) {
        this.fDir1 = cross(this.n, [1, 0, 0]);
      } else {
        this.fDir1 = cross(this.n, [0, 0, 1]);
      }
      this.fDir2 = normalize(cross(this.fDir1, this.n));
      this.fDir1 = normalize(this.fDir1);
    } catch (err) {
      console.log(this.n);
      throw new Error();
    }
  }
  _J() {
    return [
      scale(this.n, -1),
      cross(this.n, this.ra),
      this.n,
      cross(this.rb, this.n),
    ];
  }
  updateContactData() {
    const col1 = this.body1.collider;
    const col2 = this.body2.collider;
    const PA = sum(col1.pos, math__WEBPACK_IMPORTED_MODULE_0__.m3.transformPoint(col1.Rmatrix, this.raLocal));
    const PB = sum(col2.pos, math__WEBPACK_IMPORTED_MODULE_0__.m3.transformPoint(col2.Rmatrix, this.rbLocal));

    this.ra = diff(PA, col1.pos);
    this.rb = diff(PB, col2.pos);
    this.penDepth = -dot(diff(PB, PA), this.n);
  }
  updateEq() {
    this.updateContactData();
    this.J = [
      scale(this.n, -1),
      cross(this.n, this.ra),
      this.n,
      cross(this.rb, this.n),
    ];
    const I1 = this.body1.getItensor();
    const I2 = this.body2.getItensor();
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
    const tJ1 = [
      this.fDir1,
      cross(this.fDir1, this.ra),
      scale(this.fDir1, -1),
      cross(this.rb, this.fDir1),
    ];
    this.fEffMass1 =
      this.body1.inverseMass +
      math__WEBPACK_IMPORTED_MODULE_0__.m3.dot(math__WEBPACK_IMPORTED_MODULE_0__.m3.transformPoint(this.body1.inverseInertia, tJ1[1]), tJ1[1]) +
      this.body2.inverseMass +
      math__WEBPACK_IMPORTED_MODULE_0__.m3.dot(math__WEBPACK_IMPORTED_MODULE_0__.m3.transformPoint(this.body2.inverseInertia, tJ1[3]), tJ1[3]);
    const tJ2 = [
      scale(this.fDir2, -1),
      cross(this.fDir2, this.ra),
      this.fDir2,
      cross(this.fDir2, this.rb),
    ];
    this.fEffMass2 =
      this.body1.inverseMass +
      math__WEBPACK_IMPORTED_MODULE_0__.m3.dot(math__WEBPACK_IMPORTED_MODULE_0__.m3.transformPoint(this.body1.inverseInertia, tJ2[1]), tJ2[1]) +
      this.body2.inverseMass +
      math__WEBPACK_IMPORTED_MODULE_0__.m3.dot(math__WEBPACK_IMPORTED_MODULE_0__.m3.transformPoint(this.body2.inverseInertia, tJ2[3]), tJ2[3]);
    this.bias = this.penDepth;
  }
  applyResolvingImpulse(lambda) {
    if (lambda < 0) return;

    this.body1.applyImpulse(scale(this.J[0], lambda), this.ra);
    this.body2.applyImpulse(scale(this.J[2], lambda), this.rb);
    frictionSolver(this, lambda, this.body1, this.body2)
  }
  applyResolvingPseudoImpulse(lambda) {
    if (lambda < 0) return;
    lambda = Math.min(10, lambda);
    this.body1.applyPseudoImpulse(scale(this.J[0], lambda), this.ra);
    this.body2.applyPseudoImpulse(scale(this.J[2], lambda), this.rb);
  }
  generateFrictionConstraints() {
    let fDir1, fDir2;

    if (dot(this.n, [1, 0, 0]) < 0.5) {
      fDir1 = cross(this.n, [1, 0, 0]);
    } else {
      fDir1 = cross(this.n, [0, 0, 1]);
    }
    fDir2 = normalize(cross(fDir1, this.n));
    fDir1 = normalize(fDir1);

    return [
      new FrictionConstraint(fDir1, this.ra, this.rb, this.body1, this.body2),
      new FrictionConstraint(fDir2, this.ra, this.rb, this.body1, this.body2),
    ];
  }
}
class FrictionConstraint extends Constraint {
  constructor(fDir, ra, rb, body1, body2) {
    super(body1, body2);
    this.fDir = fDir;
    this.ra = ra;
    this.rb = rb;
  }
  updateEq() {
    this.J = [
      this.fDir,
      cross(this.fDir, this.ra),
      scale(this.fDir, -1),
      cross(this.rb, this.fDir),
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
  }
}
class Joint extends Constraint {
  constructor(localRa, localRb, body1, body2) {
    super(body1, body2);
    this.localRa = localRa;
    this.localRb = localRb;
    this.PA = this.body1.collider.localToGlobal(this.localRa);
    this.PB = this.body2.collider.localToGlobal(this.localRb);
  }
  updateEq() {
    this.PA = this.body1.collider.localToGlobal(this.localRa);
    this.PB = this.body2.collider.localToGlobal(this.localRb);
    this.n = diff(this.PA, this.PB);
    this.ra = diff(this.PA, this.body1.collider.pos);
    this.rb = diff(this.PB, this.body2.collider.pos);
    this.dist = norm(this.n);
    this.J = [
      scale(this.n, 1 / this.dist),
      scale(cross(this.n, this.ra), 1 / this.dist),
      scale(this.n, -1 / this.dist),
      scale(cross(this.rb, this.n), 1 / this.dist),
    ];
    const I1 = this.body1.inverseInertia;
    const I2 = this.body2.inverseInertia;
    const M1 = this.body1.inverseMass;
    const M2 = this.body2.inverseMass;
    this.effMass =
      M1 +
      dot(math__WEBPACK_IMPORTED_MODULE_0__.m3.transformPoint(I1, this.J[1]), this.J[1]) +
      M2 +
      dot(math__WEBPACK_IMPORTED_MODULE_0__.m3.transformPoint(I2, this.J[3]), this.J[3]);
  }
}



/***/ }),

/***/ "./src/eventEmitter.js":
/*!*****************************!*\
  !*** ./src/eventEmitter.js ***!
  \*****************************/
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

/***/ "./src/gjk.js":
/*!********************!*\
  !*** ./src/gjk.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clipPointsBehindPlane": () => (/* binding */ clipPointsBehindPlane),
/* harmony export */   "get2DcoordsOnPlane": () => (/* binding */ get2DcoordsOnPlane),
/* harmony export */   "gjk": () => (/* binding */ _gjk),
/* harmony export */   "pointOnPlaneProjection": () => (/* binding */ pointOnPlaneProjection)
/* harmony export */ });
/* harmony import */ var math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! math */ "./node_modules/math/index.js");
/* harmony import */ var math__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(math__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact */ "./src/contact.js");


const { dot, cross, normalize, sum, diff, len, scale, isNull, norm } = math__WEBPACK_IMPORTED_MODULE_0__.vector;

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
  return faceIndices.map((i) => math__WEBPACK_IMPORTED_MODULE_0__.m4.transformPoint(m, collider.points[i]));
};

const pointOnPlaneProjection = (plane, point) =>{
  
  const [origin, normal] = plane
  const fromPointToOrigin = diff(point, origin)
  const projAlongNormal = dot(normal, fromPointToOrigin)

  return diff(point, scale(normal, projAlongNormal))
}
const clipPointsBehindPlane = (plane, points) =>{
  const [origin, normal] = plane

  return points.filter( point => dot(normal, diff(point, origin)) > 0)
}

const get2DcoordsOnPlane = (i,j, point) =>{
  
  return [dot(i, point), dot(j, point)]
}


const sutherlandHodgman = (S, C) =>{
  
} 



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
  return null
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

      const rb = diff(PB, coll2.pos);
      const ra = diff(PA, coll1.pos);
      const raLocal = math__WEBPACK_IMPORTED_MODULE_0__.m3.transformPoint(coll1.RmatrixInverse, ra);
      const rbLocal = math__WEBPACK_IMPORTED_MODULE_0__.m3.transformPoint(coll2.RmatrixInverse, rb);
      const n = normalize(scale(face[3], -dot(p, search_dir)));
      if (norm(n) < 0.01) return null;
      const penDepth = -dot(diff(PB, PA), n);
      const contactFace1 = findClosestFace(coll1, scale(n, -1));
      const contactFace2 = findClosestFace(coll2, n);
      const contact = new _contact__WEBPACK_IMPORTED_MODULE_1__.Contact(raLocal, rbLocal, n, body1, body2);
      contact.PA = PA;
      contact.PB = PB;
      contact.rb = rb;
      contact.ra = ra;
      contact.penDepth = penDepth;
      contact.contactFace1 = contactFace1;
      contact.contactFace2 = contactFace2;
      const plane = [scale(sum(PA, PB), 0.5), normalize(diff(PB, PA))]
      contact.plane = plane
      return contact;
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
        temp = faces[num_faces][0];
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
const _gjk = (...args) => gjk.bind({})(...args)



/***/ }),

/***/ "./src/island.js":
/*!***********************!*\
  !*** ./src/island.js ***!
  \***********************/
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
      const { body1, body2, JM, J } = constraint;
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
        const _J = _constraint.J;
        const fp1 = body1 === _body1 ? () => math__WEBPACK_IMPORTED_MODULE_0__.vector.dot(JM[0], _J[0]) : () => 0;
        const fp2 = body2 === _body2 ? () => math__WEBPACK_IMPORTED_MODULE_0__.vector.dot(JM[2], _J[2]) : () => 0;
        const fp3 = body1 === _body2 ? () => math__WEBPACK_IMPORTED_MODULE_0__.vector.dot(JM[0], _J[2]) : () => 0;
        const fp4 = body2 === _body1 ? () => math__WEBPACK_IMPORTED_MODULE_0__.vector.dot(JM[2], _J[0]) : () => 0;
        const f1 =
          body1 === _body1
            ? () => math__WEBPACK_IMPORTED_MODULE_0__.vector.dot(JM[0], _J[0]) + math__WEBPACK_IMPORTED_MODULE_0__.vector.dot(JM[1], _J[1])
            : () => 0;
        const f2 =
          body2 === _body2
            ? () => math__WEBPACK_IMPORTED_MODULE_0__.vector.dot(JM[2], _J[2]) + math__WEBPACK_IMPORTED_MODULE_0__.vector.dot(JM[3], _J[3])
            : () => 0;
        const f3 =
          body1 === _body2
            ? () => math__WEBPACK_IMPORTED_MODULE_0__.vector.dot(JM[0], _J[2]) + math__WEBPACK_IMPORTED_MODULE_0__.vector.dot(JM[1], _J[3])
            : () => 0;
        const f4 =
          body2 === _body1
            ? () => math__WEBPACK_IMPORTED_MODULE_0__.vector.dot(JM[2], _J[0]) + math__WEBPACK_IMPORTED_MODULE_0__.vector.dot(JM[3], _J[1])
            : () => 0;
        this.JMJ[k + j] = () => f1() + f2() + f3() + f4();
        this.JMJp[k + j] = () => fp1() + fp2() + fp3() + fp4();
      }
      let b = Math.max(0, constraint.bias - 0.01) / deltaTime;
      const rv =
        math__WEBPACK_IMPORTED_MODULE_0__.vector.dot(J[0], body1.velocity) +
        math__WEBPACK_IMPORTED_MODULE_0__.vector.dot(J[1], body1.angularV) +
        math__WEBPACK_IMPORTED_MODULE_0__.vector.dot(J[2], body2.velocity) +
        math__WEBPACK_IMPORTED_MODULE_0__.vector.dot(J[3], body2.angularV);
      this.JV[i] = () => -rv //+ b * 0.015;

      /*this.JpV[i] = () => -vec.dot(J[0], body1.pseudoVelocity) -
                            vec.dot(J[1], body1.pseudoAngularV) -
                            vec.dot(J[2], body2.pseudoVelocity) -
                           vec.dot(J[3], body2.pseudoAngularV) - constraint.bias/deltaTime */
      this.JpV[i] = () => -rv + b 
    }
  }
  getJMJ() {
    return this.JMJ.map((f) => f());
  }
  getJv() {
    return this.JV.map((f) => f());
  }
  getJpV() {
    return this.JpV.map((f) => f());
  }
  getJMJp() {
    return this.JMJp.map((f) => f());
  }
  getUpdatedValues() {
    return [
      this.JMJ.map((f) => f()),
      this.JV.map((f) => f()),
      this.JpV.map((f) => f()),
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

/***/ "./src/manifold.js":
/*!*************************!*\
  !*** ./src/manifold.js ***!
  \*************************/
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

const prec = 0.005;
const prec2 = 0.05;
class Manifold {
  constructor(body1, body2) {
    this.contacts = [];
    this.body1 = body1;
    this.body2 = body2;
    this.warm = 0;
  }
  addContact(contact) {
    let isFarEnough = true;
    const contacts = this.contacts;

    for (let i = 0, n = contacts.length; i < n; i++) {
      const biasA = diff(contacts[i].PA, contact.PA);
      const biasB = diff(contacts[i].PB, contact.PB);
      if (norm(biasA) < prec2 && norm(biasB) < prec2) {
        isFarEnough = false;
        //contact.accI = contacts[i].accI
        contacts[i] = contact;
      }
    }
    if (isFarEnough) {
      contacts.push(contact);
    }
  }
  update() {
    this.warm++;
    let i, j, n;
    const contacts = this.contacts;
    const pos1 = this.body1.collider.pos;
    const pos2 = this.body2.collider.pos;
    for (i = 0, j = 0, n = contacts.length; i < n; i++) {
      const contact = contacts[i];

      const newPA = sum(
        pos1,
        math__WEBPACK_IMPORTED_MODULE_0__.m3.transformPoint(this.body1.collider.Rmatrix, contact.raLocal)
      );
      const newPB = sum(
        pos2,
        math__WEBPACK_IMPORTED_MODULE_0__.m3.transformPoint(this.body2.collider.Rmatrix, contact.rbLocal)
      );
      const raBias = diff(contact.PA, newPA);
      const rbBias = diff(contact.PB, newPB);
      const penDepth = -dot(diff(newPB, newPA), contact.n);

      if (norm(raBias) < prec2 && norm(rbBias) < prec2 && penDepth > 0) {
        //contact.raLocal = m3.transformPoint(this.body1.collider.RmatrixInverse,contact.ra)
        //contact.rbLocal = m3.transformPoint(this.body2.collider.RmatrixInverse,contact.rb)

        contacts[j] = contacts[i];

        j++;
      }
    }

    while (j < contacts.length) {
      contacts.pop();
    }
    if (contacts.length > 2) this.warm++;
    if (contacts.length < 3) this.warm = 0;
    if (contacts.length > 4) {
      let deepest = null;
      let maxDeep = 0;
      for (i = 0, n = contacts.length; i < n; i++) {
        if (normSq(contacts[i].n) >= maxDeep) {
          maxDeep = normSq(contacts[i].n);
          deepest = contacts[i];
        }
      }
      let furthest = null;
      let maxDistance = 0;
      for (i = 0, n = contacts.length; i < n; i++) {
        let dist = normSq(diff(contacts[i].PA, deepest.PA));
        if (dist >= maxDistance) {
          maxDistance = dist;
          furthest = contacts[i];
        }
      }
      let furthest2 = null;
      maxDistance = 0;
      for (i = 0, n = contacts.length; i < n; i++) {
        let dist = distanceFromLine(furthest.PA, deepest.PA, contacts[i].PA);

        if (dist >= maxDistance) {
          maxDistance = dist;
          furthest2 = contacts[i];
        }
      }

      let furthest3 = null;
      maxDistance = 0;

      const oppositeTodiagonal = findFurthestPoint(
        deepest.PA,
        furthest.PA,
        furthest2.PA
      );

      for (i = 0, n = contacts.length; i < n; i++) {
        let dist = normSq(diff(oppositeTodiagonal, contacts[i].PA));

        if (dist >= maxDistance) {
          maxDistance = dist;
          furthest3 = contacts[i];
        }
      }

      contacts[0] = deepest;
      contacts[1] = furthest;
      contacts[2] = furthest2;
      contacts[3] = furthest3;

      while (contacts.length > 4) contacts.pop();
    }
  }
}


/***/ }),

/***/ "./src/physics.js":
/*!************************!*\
  !*** ./src/physics.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Physics": () => (/* binding */ Physics),
/* harmony export */   "Player": () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _eventEmitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eventEmitter */ "./src/eventEmitter.js");
/* harmony import */ var math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! math */ "./node_modules/math/index.js");
/* harmony import */ var math__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(math__WEBPACK_IMPORTED_MODULE_1__);


const { cross, scale, norm, sum, diff, chkV } = math__WEBPACK_IMPORTED_MODULE_1__.vector;
const prec = 0.01;
const stopTreshold = 0.001;
class Physics extends _eventEmitter__WEBPACK_IMPORTED_MODULE_0__.EventEmitter {
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
    this.friction = 0.1;
    this.BVlink;
  }
  integrate(dt) {
    const { acceleration, velocity, translation } = this;

    this.translate(scale(this.velocity, dt));
    const rotation = scale(this.angularV, dt * 0.5);
    if (norm(rotation) > stopTreshold) this.rotate(rotation);
    let deltaSpeed = scale(this.acceleration, dt);
    this.velocity = sum(this.velocity, deltaSpeed);
  }
  integratePseudoVelocities(dt) {
    const translation = scale(this.pseudoVelocity, dt);

    const rotation = scale(this.pseudoAngularV, dt * 0.5);
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
    const translation = scale(this.velocity, dt);
    if (norm(translation) > stopTreshold) this.translate(translation);
    const rotation = scale(this.angularV, dt * 0.5);
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
    this.velocity = sum(this.velocity, scale(impulse, this.inverseMass));
    const angularImpulse = math__WEBPACK_IMPORTED_MODULE_1__.m3.transformPoint(
      this.getItensor(),
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
      this.getItensor(),
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

class Player extends Physics {
  constructor() {
    super(...arguments);
    this.friction = 10;
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

/***/ "./src/simulation.js":
/*!***************************!*\
  !*** ./src/simulation.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Simulation)
/* harmony export */ });
/* harmony import */ var _tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tree */ "./src/tree.js");
/* harmony import */ var _constraints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constraints */ "./src/constraints.js");
/* harmony import */ var _gjk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gjk */ "./src/gjk.js");
/* harmony import */ var _manifold__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./manifold */ "./src/manifold.js");
/* harmony import */ var _island__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./island */ "./src/island.js");
/* harmony import */ var _GSsolver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./GSsolver */ "./src/GSsolver.js");








const prec = 0.3;
const pairHash = (x, y) =>
  x === Math.max(x, y) ? x * x + x + y : y * y + x + y;

class Simulation {
  constructor() {
    this.objects = [];
    this.bvh = new _tree__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this.collisions = [];
    this.constrains = [];
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
    const manifolds = this.collisionManifolds.values();

    for (let i = 0, n = this.objects.length; i < n; i++) {
      const object = this.objects[i];
      if (object.static) continue;
      const cols = this.bvh.getCollisions(object.BVlink);
      object.BVlink.isChecked = true;
      if (cols.length != 0)
        for (let j = 0, n = cols.length; j < n; j++) {
          const hash = pairHash(object.id, cols[j].id);
          let manifold = this.collisionManifolds.get(hash);
          //if(manifold && manifold.contacts.length > 4) continue
          const contact = (0,_gjk__WEBPACK_IMPORTED_MODULE_2__.gjk)(object, cols[j]);

          if (!contact) {
            if (manifold) this.collisionManifolds.delete(hash);
            continue;
          }

          if (!manifold) {
            manifold = new _manifold__WEBPACK_IMPORTED_MODULE_3__["default"](object, cols[j]);
            manifold.contacts = [contact];

            this.collisionManifolds.set(hash, manifold);
          } else manifold.addContact(contact);
        }
    }

    this.bvh.setUnchecked();
  }
  tick(deltaTime) {
    this.updateCollisions();
    let manifolds = this.collisionManifolds.values();
    for (let manifold of manifolds) manifold.update();
/*  
    manifolds = this.collisionManifolds.values();

   
    const system = new Island();
    for (let manifold of manifolds) {
      const contacts = manifold.contacts;
      for (let i = 0, n = contacts.length; i < n; i++) {
        contacts[i].updateEq();
      }
      system.addConstraint(...contacts);
    }

    system.generateSystem(deltaTime);

    for (let i = 0, n = this.objects.length; i < n; i++) {
      this.objects[i].integrateForces(deltaTime);
    }

    const [_JMJ, _JV, _JpV] = system.getUpdatedValues();
    const lambda = GaussSeidel(_JMJ, _JV, system.constraints.length, 1e-7);
    system.applyResolvingImpulses(lambda);

    for (let i = 0, n = this.objects.length; i < n; i++) {
      this.objects[i].integrateVelocities(deltaTime);
    }

    manifolds = this.collisionManifolds.values();
    const positionSystem = new Island();
    for (const manifold of manifolds) {
      const { contacts } = manifold;
      contacts.forEach((contact) => contact.updateEq());
      if (contacts.length > 2) {
        
        positionSystem.addConstraint(...contacts);
      }
    }
    positionSystem.generateSystem(deltaTime);
    const JMJ = positionSystem.getJMJ();
    const JpV = positionSystem.getJpV();
    const pLambda = GaussSeidel(
      JMJ,
      JpV,
      positionSystem.constraints.length,
      1e-7
    );
    positionSystem.applyResolvingPseudoImpulses(pLambda, deltaTime);

    for (let i = 0, n = this.objects.length; i < n; i++) {
      this.objects[i].integratePseudoVelocities(deltaTime);
    }*/
    //for(let i = 0; i<4; i++
    
  }
}


/***/ }),

/***/ "./src/tree.js":
/*!*********************!*\
  !*** ./src/tree.js ***!
  \*********************/
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
/* harmony import */ var _src_simulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/simulation */ "./src/simulation.js");
/* harmony import */ var _src_physics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/physics */ "./src/physics.js");
/* harmony import */ var _src_collider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/collider */ "./src/collider.js");
/* harmony import */ var _src_gjk__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/gjk */ "./src/gjk.js");


const cPos = [0, 0, 5];
const cRot = [0, 0, 0];
const controls = {
  ArrowDown: () => (cRot[0] -= 0.1),
  ArrowUp: () => (cRot[0] += 0.1),
  ArrowLeft: () => (cRot[1] += 0.1),
  ArrowRight: () => (cRot[1] -= 0.1),
  w: () => {
    const delta = math__WEBPACK_IMPORTED_MODULE_0__.m4.transformPoint(
      math__WEBPACK_IMPORTED_MODULE_0__.m4.xRotate(math__WEBPACK_IMPORTED_MODULE_0__.m4.yRotation(cRot[1]), cRot[0]),
      [0, 0, -1]
    );
    cPos[0] += delta[0];
    cPos[1] += delta[1];
    cPos[2] += delta[2];
  },
  s: () => {
    const delta = math__WEBPACK_IMPORTED_MODULE_0__.m4.transformPoint(
      math__WEBPACK_IMPORTED_MODULE_0__.m4.xRotate(math__WEBPACK_IMPORTED_MODULE_0__.m4.yRotation(cRot[1]), cRot[0]),
      [0, 0, 1]
    );
    cPos[0] += delta[0];
    cPos[1] += delta[1];
    cPos[2] += delta[2];
  },
  a: () => {
    const delta = math__WEBPACK_IMPORTED_MODULE_0__.m4.transformPoint(
      math__WEBPACK_IMPORTED_MODULE_0__.m4.xRotate(math__WEBPACK_IMPORTED_MODULE_0__.m4.yRotation(cRot[1]), cRot[0]),
      [-1, 0, 0]
    );
    cPos[0] += delta[0];
    cPos[1] += delta[1];
    cPos[2] += delta[2];
  },
  d: () => {
    const delta = math__WEBPACK_IMPORTED_MODULE_0__.m4.transformPoint(
      math__WEBPACK_IMPORTED_MODULE_0__.m4.xRotate(math__WEBPACK_IMPORTED_MODULE_0__.m4.yRotation(cRot[1]), cRot[0]),
      [1, 0, 0]
    );
    cPos[0] += delta[0];
    cPos[1] += delta[1];
    cPos[2] += delta[2];
  },
};
const mouseControls = {
  lastX: 0,
  lastY: 0,
  mousemove: function (e) {
    const deltaX = e.offsetX - this.lastX;
    this.lastX = e.offsetX;
    const deltaY = e.offsetY - this.lastY;
    this.lastY = e.offsetY;

    cRot[1] -= deltaX * 0.005;
    cRot[0] -= deltaY * 0.005;
  },
};
document.onkeydown = (e) => {
  if (!controls[e.key]) return;
  controls[e.key]();
};
document.onmousedown = (e) => {
  mouseControls.lastY = e.offsetY;
  mouseControls.lastX = e.offsetX;
  document.onmousemove = mouseControls.mousemove.bind(mouseControls);
  document.onmouseup = () => {
    document.onmousemove = null;
  };
};
let cameraMatrix = math__WEBPACK_IMPORTED_MODULE_0__.m4.translation(...cPos);
cameraMatrix = math__WEBPACK_IMPORTED_MODULE_0__.m4.yRotate(cameraMatrix, cRot[1]);
cameraMatrix = math__WEBPACK_IMPORTED_MODULE_0__.m4.xRotate(cameraMatrix, cRot[0]);



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






const sim = new _src_simulation__WEBPACK_IMPORTED_MODULE_2__["default"]();

const floor = { physics: new _src_physics__WEBPACK_IMPORTED_MODULE_3__.Physics(new _src_collider__WEBPACK_IMPORTED_MODULE_4__.Box(100, 6, 100)), sprite: box };
const cube = { physics: new _src_physics__WEBPACK_IMPORTED_MODULE_3__.Physics(new _src_collider__WEBPACK_IMPORTED_MODULE_4__.Box(5, 5, 5)), sprite: box };
const cube2 = { physics: new _src_physics__WEBPACK_IMPORTED_MODULE_3__.Physics(new _src_collider__WEBPACK_IMPORTED_MODULE_4__.Box(5, 5, 5)), sprite: box };
cube.physics.translate([0, 1, 0]);
cube2.physics.translate([0, 10, 0]);
cube.physics.rotate([Math.PI/4,Math.PI/4,Math.PI/4])
cube.physics.addAcceleration([0, -9.8, 0]);

cube2.physics.addAcceleration([0, -9.8, 0]);

sim.addObject(floor.physics);
sim.addObject(cube.physics);
//sim.addObject(cube2.physics);

floor.physics.setMass(1000000000);

const objects = [floor, cube];
console.log(Math.acos(-1))
floor.physics.translate([0, -3, 0]);
//floor.physics.rotate([0.0,0,0])



const p = [[5,5,-5], [-5,-5,3]]
const plane = [[0,0,0], [0,0,1]] 





const projections = p.map(point => (0,_src_gjk__WEBPACK_IMPORTED_MODULE_5__.pointOnPlaneProjection)(plane, point))

const _i = math__WEBPACK_IMPORTED_MODULE_0__.vector.normalize(math__WEBPACK_IMPORTED_MODULE_0__.vector.diff(projections[0], plane[0]))
const _j = math__WEBPACK_IMPORTED_MODULE_0__.vector.normalize(math__WEBPACK_IMPORTED_MODULE_0__.vector.cross(plane[1], _i))

console.log(_i, _j, math__WEBPACK_IMPORTED_MODULE_0__.vector.dot(_i, _j))
const _2d = projections.map(p => (0,_src_gjk__WEBPACK_IMPORTED_MODULE_5__.get2DcoordsOnPlane)(_i, _j, p))
console.log(_2d)
let lastCall = Date.now();
const fps = document.querySelector("#fps");
let i = 0;
const loop = () => {
  sim.tick(0.015);

  const curentTime = Date.now();
  const delta = curentTime - lastCall;
  fps.textContent = (1 / delta) * 1000;
  lastCall = curentTime;
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
  gl.enable(gl.CULL_FACE);
  gl.enable(gl.DEPTH_TEST);

  cameraMatrix = math__WEBPACK_IMPORTED_MODULE_0__.m4.translation(...cPos);
  cameraMatrix = math__WEBPACK_IMPORTED_MODULE_0__.m4.yRotate(cameraMatrix, cRot[1]);
  cameraMatrix = math__WEBPACK_IMPORTED_MODULE_0__.m4.xRotate(cameraMatrix, cRot[0]);
  i += 0.001;
  
  
  const manifolds = sim.collisionManifolds.values();
  for (const manifold of manifolds) {
    manifold.contacts.forEach((contact) => {
      const {contactFace1, contactFace2, plane} = contact
      points
        .draw({
          u_matrix: math__WEBPACK_IMPORTED_MODULE_0__.m4.translation(...contact.PA),
          u_color: [0, 1, 0, 1],
        }, cameraMatrix)
        .draw({
          u_matrix: math__WEBPACK_IMPORTED_MODULE_0__.m4.translation(...contact.PB),
          u_color: [1, 1, 0, 1],
        }, cameraMatrix)
        .draw({
          u_matrix: math__WEBPACK_IMPORTED_MODULE_0__.m4.translation(...contact.plane[0]),
          u_color: [0.1, 0.1, 0.2, 1],
        }, cameraMatrix)
        .draw({
          u_matrix: math__WEBPACK_IMPORTED_MODULE_0__.m4.translation(...math__WEBPACK_IMPORTED_MODULE_0__.vector.sum(contact.plane[0], contact.plane[1])),
          u_color: [0.1, 0.1, 0.2, 1],
        }, cameraMatrix);
        
        /*([...contactFace1, ...contactFace2]).forEach(p =>{
          
          points.draw({
            u_matrix: m4.translation(...p),
            u_color: [0.0, 0.5, 0.5, 1],
          }, cameraMatrix)
        })

        const _cliped = [...clipPointsBehindPlane(plane, contactFace1), ...clipPointsBehindPlane(plane, contactFace2)]
        _cliped.forEach(p =>{
          
          points.draw({
            u_matrix: m4.translation(...p),
            u_color: [0.5, 0.5, 0.5, 1],
          }, cameraMatrix)
        })*/

        
        
    });
  }
  
  objects.forEach((obj) => {
    const scale = math__WEBPACK_IMPORTED_MODULE_0__.vector.diff(
      obj.physics.collider.max,
      obj.physics.collider.min
    );
    const u_matrix = math__WEBPACK_IMPORTED_MODULE_0__.m4.scale(obj.physics.collider.getM4(), ...scale);
    obj.sprite.draw({ u_color: [1, 0, 1, 1], u_matrix }, cameraMatrix);
  });
  
  p.forEach(p => points.draw({u_matrix : math__WEBPACK_IMPORTED_MODULE_0__.m4.translation(...p), u_color : [1,0,0,1]}, cameraMatrix))
  projections.forEach(p => points.draw({u_matrix : math__WEBPACK_IMPORTED_MODULE_0__.m4.translation(...p), u_color : [1,1,0,1]}, cameraMatrix))
  _2d.forEach(_p => points.draw({u_matrix : math__WEBPACK_IMPORTED_MODULE_0__.m4.translation(_p[0],0,_p[1]), u_color : [0,1,0,1]}, cameraMatrix));
  ([_i, _j]).forEach(_p => points.draw({u_matrix : math__WEBPACK_IMPORTED_MODULE_0__.m4.translation(..._p), u_color : [0,0,0,1]}, cameraMatrix))
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
  );
  /*line.draw(
    {
      u_matrix: m4.rotation(...vector.diff([0,-1,0], [1,0,0])),
      u_color: [1, 0, 1, 1],
      u_worldViewPosition: cameraMatrix,
    },
    cameraMatrix
  );*/

  gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
  requestAnimationFrame(loop)
};
loop();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsdUJBQXVCO0FBQzVDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLG1CQUFtQjtBQUM1QztBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLGtCQUFrQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0Isc0JBQXNCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixFQUFF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QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzNLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FDemdCQSxXQUFXLG1CQUFPLENBQUMsMkNBQU07QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxrQkFBa0I7Ozs7Ozs7Ozs7QUN6RWxCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUN3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCYztBQUNGO0FBQ3BDLFFBQVEsNkRBQTZELEVBQUUsd0NBQU07QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsT0FBTztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLG1EQUFpQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQiw0QkFBNEI7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLE9BQU87QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsOEJBQThCO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixlQUFlO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUNuU0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNB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Q0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Bocy8uL25vZGVfbW9kdWxlcy9ncmFwaGljcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9waHMvLi9ub2RlX21vZHVsZXMvZ3JhcGhpY3Mvc3JjL0J1ZmZlckF0dHJpYnV0ZS5qcyIsIndlYnBhY2s6Ly9waHMvLi9ub2RlX21vZHVsZXMvZ3JhcGhpY3Mvc3JjL0RyYXdlci5qcyIsIndlYnBhY2s6Ly9waHMvLi9ub2RlX21vZHVsZXMvZ3JhcGhpY3Mvc3JjL01lc2hSZW5kZXJlci5qcyIsIndlYnBhY2s6Ly9waHMvLi9ub2RlX21vZHVsZXMvZ3JhcGhpY3Mvc3JjL1ByaW1pdGl2ZVJlbmRlcmVyLmpzIiwid2VicGFjazovL3Bocy8uL25vZGVfbW9kdWxlcy9ncmFwaGljcy9zcmMvYXR0cmliVHlwZVByb3BzLmpzIiwid2VicGFjazovL3Bocy8uL25vZGVfbW9kdWxlcy9ncmFwaGljcy9zcmMvZW50aXR5LmpzIiwid2VicGFjazovL3Bocy8uL25vZGVfbW9kdWxlcy9ncmFwaGljcy9zcmMvZW51bXMuanMiLCJ3ZWJwYWNrOi8vcGhzLy4vbm9kZV9tb2R1bGVzL2dyYXBoaWNzL3NyYy9nbHRmVXRpbHMuanMiLCJ3ZWJwYWNrOi8vcGhzLy4vbm9kZV9tb2R1bGVzL2dyYXBoaWNzL3NyYy9wcmltaXRpdmVzLmpzIiwid2VicGFjazovL3Bocy8uL25vZGVfbW9kdWxlcy9ncmFwaGljcy9zcmMvcHJvZ3JhbUluZm8uanMiLCJ3ZWJwYWNrOi8vcGhzLy4vbm9kZV9tb2R1bGVzL2dyYXBoaWNzL3NyYy9yZW5kZXIvc2hhZGVycy9EZWZhdWx0LmpzIiwid2VicGFjazovL3Bocy8uL25vZGVfbW9kdWxlcy9ncmFwaGljcy9zcmMvcmVuZGVyL3NoYWRlcnMvTGlnaHRpbmcuanMiLCJ3ZWJwYWNrOi8vcGhzLy4vbm9kZV9tb2R1bGVzL2dyYXBoaWNzL3NyYy9yZW5kZXIvc2hhZGVycy9nbHNsLmpzIiwid2VicGFjazovL3Bocy8uL25vZGVfbW9kdWxlcy9ncmFwaGljcy9zcmMvcmVuZGVyL3NoYWRlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcGhzLy4vbm9kZV9tb2R1bGVzL2dyYXBoaWNzL3NyYy90ZXh0dXJlVXRpbHMuanMiLCJ3ZWJwYWNrOi8vcGhzLy4vbm9kZV9tb2R1bGVzL21hdGgvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcGhzLy4vbm9kZV9tb2R1bGVzL21hdGgvc3JjL2FhYmIuanMiLCJ3ZWJwYWNrOi8vcGhzLy4vbm9kZV9tb2R1bGVzL21hdGgvc3JjL20zLmpzIiwid2VicGFjazovL3Bocy8uL25vZGVfbW9kdWxlcy9tYXRoL3NyYy9tNC5qcyIsIndlYnBhY2s6Ly9waHMvLi9ub2RlX21vZHVsZXMvbWF0aC9zcmMvbm9kZS5qcyIsIndlYnBhY2s6Ly9waHMvLi9ub2RlX21vZHVsZXMvbWF0aC9zcmMvdmVjdG9yLmpzIiwid2VicGFjazovL3Bocy8uL3NyYy9HU3NvbHZlci5qcyIsIndlYnBhY2s6Ly9waHMvLi9zcmMvY29sbGlkZXIuanMiLCJ3ZWJwYWNrOi8vcGhzLy4vc3JjL2NvbnN0cmFpbnRzLmpzIiwid2VicGFjazovL3Bocy8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Bocy8uL3NyYy9ldmVudEVtaXR0ZXIuanMiLCJ3ZWJwYWNrOi8vcGhzLy4vc3JjL2dqay5qcyIsIndlYnBhY2s6Ly9waHMvLi9zcmMvaXNsYW5kLmpzIiwid2VicGFjazovL3Bocy8uL3NyYy9tYW5pZm9sZC5qcyIsIndlYnBhY2s6Ly9waHMvLi9zcmMvcGh5c2ljcy5qcyIsIndlYnBhY2s6Ly9waHMvLi9zcmMvc2ltdWxhdGlvbi5qcyIsIndlYnBhY2s6Ly9waHMvLi9zcmMvdHJlZS5qcyIsIndlYnBhY2s6Ly9waHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcGhzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Bocy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcGhzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcGhzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcGhzLy4vaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnVmZmVySW5mbywgRHluYW1pY0J1ZmZlckluZm8gfSBmcm9tIFwiLi9zcmMvQnVmZmVyQXR0cmlidXRlXCI7XG5pbXBvcnQge1xuICBQcmltaXRpdmVSZW5kZXJJbmZvRnJvbUFycmF5RGF0YSxcbiAgQXJyYXlEYXRhRnJvbUdsdGYsXG4gIEVudGl0eURhdGFGcm9tR2x0ZixcbiAgR0xURixcbn0gZnJvbSBcIi4vc3JjL2dsdGZVdGlsc1wiO1xuaW1wb3J0IHsgTWVzaFJlbmRlcmVyLCBTa2lubmVkTWVzaFJlbmRlcmVyIH0gZnJvbSBcIi4vc3JjL01lc2hSZW5kZXJlclwiO1xuaW1wb3J0IHsgY3JlYXRlQm94LCBjcmVhdGVDb25lLCBjcmVhdGVDaXJjbGUgfSBmcm9tIFwiLi9zcmMvcHJpbWl0aXZlc1wiO1xuaW1wb3J0IFByaW1pdGl2ZVJlbmRlcmVyIGZyb20gXCIuL3NyYy9QcmltaXRpdmVSZW5kZXJlclwiO1xuaW1wb3J0IHtcbiAgZ2V0R0xUeXBlRm9yVHlwZWRBcnJheSxcbiAgUHJvZ3JhbUluZm8sXG4gIGV4cGFuZGVkVHlwZWRBcnJheSxcbn0gZnJvbSBcIi4vc3JjL3Byb2dyYW1JbmZvXCI7XG5pbXBvcnQgRHJhd2VyIGZyb20gXCIuL3NyYy9EcmF3ZXJcIjtcbmltcG9ydCB7XG4gIFRleHR1cmUsXG4gIG1ha2VJbWdGcm9tU3ZnWG1sLFxuICBtYWtlU3RyaXBlSW1nLFxuICBzZXRUZXh0dXJlVW5pdHMsXG59IGZyb20gXCIuL3NyYy90ZXh0dXJlVXRpbHNcIjtcbmltcG9ydCBFbnRpdHkgZnJvbSBcIi4vc3JjL2VudGl0eVwiO1xuaW1wb3J0IHsgbGlnaHRpbmdQcm9ncmFtLCBkZWZhdWx0UHJvZ3JhbSB9IGZyb20gXCIuL3NyYy9yZW5kZXIvc2hhZGVyc1wiO1xuY2xhc3MgR0xjb250ZXh0V3JhcHBlciB7XG4gIGNvbnN0cnVjdG9yKGNhbnZhc19pZCkge1xuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2NhbnZhc19pZH1gKTtcbiAgICBjb25zdCBnbCA9IGNhbnZhcy5nZXRDb250ZXh0KFwid2ViZ2wyXCIpO1xuXG4gICAgaWYgKCFnbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gd2ViZ2whXCIpO1xuICAgIH1cbiAgICB0aGlzLmdsID0gZ2w7XG4gICAgdGhpcy50ZXh0dXJlcyA9IHt9O1xuICAgIHRoaXMucmVuZGVyQ2FjaGUgPSB7XG4gICAgICBsYXN0VXNlZFByb2dyYW1JbmZvOiBudWxsLFxuICAgIH07XG4gICAgdGhpcy5wcm9ncmFtcyA9IHt9O1xuICB9XG4gIGdldExhc3RVc2VkUHJvZ3JhbUluZm8oKSB7XG4gICAgcmV0dXJuIHRoaXMucmVuZGVyQ2FjaGUubGFzdFVzZWRQcm9ncmFtSW5mbztcbiAgfVxuICBzZXRMYXN0VXNlZFByb2dyYW0ocHJvZ3JhbUluZm8pIHtcbiAgICB0aGlzLnJlbmRlckNhY2hlLmxhc3RVc2VkUHJvZ3JhbUluZm8gPSBwcm9ncmFtSW5mbztcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICB1c2VQcm9ncmFtSW5mbyhwcm9ncmFtSW5mbykge1xuICAgIGlmIChwcm9ncmFtSW5mbyAhPSB0aGlzLmdldExhc3RVc2VkUHJvZ3JhbUluZm8oKSkge1xuICAgICAgdGhpcy5nbC51c2VQcm9ncmFtKHByb2dyYW1JbmZvLnByb2dyYW0pO1xuICAgICAgdGhpcy5zZXRMYXN0VXNlZFByb2dyYW0ocHJvZ3JhbUluZm8pO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICByZXNpemVDYW52YXNUb0Rpc3BsYXlTaXplKG11bHRpcGxpZXIgPSAxKSB7XG4gICAgY29uc3QgY2FudmFzID0gdGhpcy5nbC5jYW52YXM7XG4gICAgY29uc3Qgd2lkdGggPSAoY2FudmFzLmNsaWVudFdpZHRoICogbXVsdGlwbGllcikgfCAwO1xuICAgIGNvbnN0IGhlaWdodCA9IChjYW52YXMuY2xpZW50SGVpZ2h0ICogbXVsdGlwbGllcikgfCAwO1xuXG4gICAgY2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICByZXNpemVDYW52YXMod2lkdGgsIGhlaWdodCkge1xuICAgIGNvbnN0IGNhbnZhcyA9IHRoaXMuZ2wuY2FudmFzO1xuICAgIGNhbnZhcy53aWR0aCA9IHdpZHRoO1xuICAgIGNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgZ2V0Q29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5nbDtcbiAgfVxuICBnZXRDYW52YXNSZWN0KCkge1xuICAgIHJldHVybiB0aGlzLmdsLmNhbnZhcy5nZXRCb3VuZGluO1xuICB9XG4gIGNyZWF0ZVRleHR1cmUodGV4dHVyZU5hbWUpIHtcbiAgICBjb25zdCB0ZXh0dXJlID0gbmV3IFRleHR1cmUodGhpcy5nbCk7XG4gICAgdGhpcy50ZXh0dXJlcyA9IHsgLi4udGhpcy50ZXh0dXJlcywgW3RleHR1cmVOYW1lXTogdGV4dHVyZSB9O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIGdldFRleHR1cmUodGV4dHVyZU5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy50ZXh0dXJlc1t0ZXh0dXJlTmFtZV07XG4gIH1cbiAgc2V0VGV4dHVyZVVuaXQodGV4dHVyZU5hbWUsIHVuaXROdW0pIHtcbiAgICBjb25zdCB0ZXh0dXJlID0gdGhpcy5nZXRUZXh0dXJlKHRleHR1cmVOYW1lKS50ZXh0dXJlO1xuICAgIHNldFRleHR1cmVVbml0cyh0aGlzLmdsLCB0ZXh0dXJlLCB1bml0TnVtKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuXG5leHBvcnQge1xuICBHTFRGLFxuICBHTGNvbnRleHRXcmFwcGVyLFxuICBUZXh0dXJlLFxuICBtYWtlSW1nRnJvbVN2Z1htbCxcbiAgbWFrZVN0cmlwZUltZyxcbiAgRW50aXR5LFxuICBQcmltaXRpdmVSZW5kZXJlcixcbiAgRW50aXR5RGF0YUZyb21HbHRmLFxuICBQcmltaXRpdmVSZW5kZXJJbmZvRnJvbUFycmF5RGF0YSxcbiAgQXJyYXlEYXRhRnJvbUdsdGYsXG4gIE1lc2hSZW5kZXJlcixcbiAgU2tpbm5lZE1lc2hSZW5kZXJlcixcbiAgY3JlYXRlQm94LFxuICBQcm9ncmFtSW5mbyxcbiAgRHJhd2VyLFxuICBjcmVhdGVDb25lLFxuICBjcmVhdGVDaXJjbGUsXG4gIGxpZ2h0aW5nUHJvZ3JhbSxcbiAgZGVmYXVsdFByb2dyYW0sXG59O1xuIiwiaW1wb3J0IHsgZ2V0R0xUeXBlRm9yVHlwZWRBcnJheSB9IGZyb20gXCIuL3Byb2dyYW1JbmZvXCI7XG5pbXBvcnQgeyBUWVBFRF9BUlJBWVMgfSBmcm9tIFwiLi9lbnVtc1wiO1xuY29uc3QgY3JlYXRlSW5kaWNlc0J1ZmZlciA9IChnbCwgaW5kaWNlcykgPT4ge1xuICBjb25zdCBidWZmZXIgPSBnbC5jcmVhdGVCdWZmZXIoKTtcbiAgZ2wuYmluZEJ1ZmZlcihnbC5FTEVNRU5UX0FSUkFZX0JVRkZFUiwgYnVmZmVyKTtcbiAgZ2wuYnVmZmVyRGF0YShnbC5FTEVNRU5UX0FSUkFZX0JVRkZFUiwgaW5kaWNlcywgZ2wuU1RBVElDX0RSQVcpO1xuICByZXR1cm4gYnVmZmVyO1xufTtcbmNvbnN0IGZsb2F0QXR0cmliU2V0dGVyID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBudW1Db21wb25lbnRzLFxuICAgIHR5cGUsXG4gICAgbG9jYXRpb24sXG4gICAgbnVtQXR0cmlidXRlcyxcbiAgICBzdHJpZGUsXG4gICAgb2Zmc2V0LFxuICAgIGJ1ZmZlcixcbiAgICBnbCxcbiAgICBkaXZpc29yLFxuICB9ID0gcHJvcHM7XG5cbiAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIGJ1ZmZlcik7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtQXR0cmlidXRlczsgaSsrKSB7XG4gICAgY29uc3QgX29mZnNldCA9IG51bUNvbXBvbmVudHMgKiBpICogVFlQRURfQVJSQVlTW3R5cGVdLkJZVEVTX1BFUl9FTEVNRU5UO1xuICAgIGdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KGxvY2F0aW9uICsgaSk7XG4gICAgZ2wudmVydGV4QXR0cmliUG9pbnRlcihcbiAgICAgIGxvY2F0aW9uICsgaSxcbiAgICAgIG51bUNvbXBvbmVudHMsXG4gICAgICB0eXBlLFxuICAgICAgZmFsc2UsXG4gICAgICBzdHJpZGUsXG4gICAgICBvZmZzZXQgKyBfb2Zmc2V0XG4gICAgKTtcblxuICAgIGlmIChkaXZpc29yKSBnbC52ZXJ0ZXhBdHRyaWJEaXZpc29yKGxvY2F0aW9uICsgaSwgZGl2aXNvcik7XG4gIH1cbn07XG5jb25zdCBpbnRBdHRyaWJTZXR0ZXIgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIG51bUNvbXBvbmVudHMsXG4gICAgdHlwZSxcbiAgICBsb2NhdGlvbixcbiAgICBudW1BdHRyaWJ1dGVzLFxuICAgIHN0cmlkZSxcbiAgICBvZmZzZXQsXG4gICAgYnVmZmVyLFxuICAgIGdsLFxuICAgIGRpdmlzb3IsXG4gIH0gPSBwcm9wcztcbiAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIGJ1ZmZlcik7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtQXR0cmlidXRlczsgaSsrKSB7XG4gICAgY29uc3QgX29mZnNldCA9IG51bUNvbXBvbmVudHMgKiBpICogVFlQRURfQVJSQVlTW3R5cGVdLkJZVEVTX1BFUl9FTEVNRU5UO1xuICAgIGdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KGxvY2F0aW9uICsgaSk7XG4gICAgZ2wudmVydGV4QXR0cmliSVBvaW50ZXIoXG4gICAgICBsb2NhdGlvbiArIGksXG4gICAgICBudW1Db21wb25lbnRzLFxuICAgICAgdHlwZSxcbiAgICAgIGZhbHNlLFxuICAgICAgc3RyaWRlLFxuICAgICAgb2Zmc2V0ICsgX29mZnNldFxuICAgICk7XG4gICAgaWYgKGRpdmlzb3IpIGdsLnZlcnRleEF0dHJpYkRpdmlzb3IobG9jYXRpb24gKyBpLCBkaXZpc29yKTtcbiAgfVxufTtcbmNvbnN0IGF0dHJpYlR5cGVNYXAgPSB7fTtcbmF0dHJpYlR5cGVNYXBbMHgxNDAwXSA9IGludEF0dHJpYlNldHRlcjtcbmF0dHJpYlR5cGVNYXBbMHgxNDA2XSA9IGZsb2F0QXR0cmliU2V0dGVyO1xuYXR0cmliVHlwZU1hcFsweDE0MDFdID0gaW50QXR0cmliU2V0dGVyO1xuYXR0cmliVHlwZU1hcFsweDE0MDRdID0gaW50QXR0cmliU2V0dGVyO1xuYXR0cmliVHlwZU1hcFsweDE0MDVdID0gaW50QXR0cmliU2V0dGVyO1xuYXR0cmliVHlwZU1hcFsweDE0MDJdID0gaW50QXR0cmliU2V0dGVyO1xuYXR0cmliVHlwZU1hcFsweDE0MDNdID0gaW50QXR0cmliU2V0dGVyO1xuXG5jb25zdCBzZXRBdHRyaWJ1dGVzID0gKGdsLCBidWZmZXJJbmZvLCBkaXZpc29yKSA9PiB7XG4gIGNvbnN0IHsgdHlwZSB9ID0gYnVmZmVySW5mbztcbiAgY29uc3Qgc2V0dGVyID0gYXR0cmliVHlwZU1hcFt0eXBlXTtcbiAgc2V0dGVyKGJ1ZmZlckluZm8sIGRpdmlzb3IpO1xufTtcbmNsYXNzIEJ1ZmZlckNvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvcihnbCwgdGFyZ2V0ID0gMHg4ODkyKSB7XG4gICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XG4gICAgdGhpcy5idWZmZXIgPSBnbC5jcmVhdGVCdWZmZXIoKTtcbiAgICB0aGlzLmdsID0gZ2w7XG4gICAgdGhpcy5idWZmZXJEYXRhID0gKGRhdGEsIGJ5dGVMZW5ndGgsIHVzYWdlID0gZ2wuU1RBVElDX0RSQVcpID0+IHtcbiAgICAgIGdsLmJpbmRCdWZmZXIodGFyZ2V0LCB0aGlzLmJ1ZmZlcik7XG4gICAgICBnbC5idWZmZXJEYXRhKHRhcmdldCwgZGF0YSB8fCBieXRlTGVuZ3RoLCB1c2FnZSk7XG4gICAgfTtcbiAgICB0aGlzLmJ1ZmZlclN1YkRhdGEgPSAoZGF0YSwgb2Zmc2V0ID0gMCkgPT4ge1xuICAgICAgZ2wuYmluZEJ1ZmZlcih0YXJnZXQsIHRoaXMuYnVmZmVyKTtcbiAgICAgIGdsLmJ1ZmZlclN1YkRhdGEodGFyZ2V0LCBvZmZzZXQsIGRhdGEpO1xuICAgIH07XG4gIH1cbn1cbmNsYXNzIEF0dHJpYnV0ZVNldHRlciB7XG4gIGNvbnN0cnVjdG9yKGluZm8pIHtcbiAgICB0aGlzLnN0cmlkZSA9IGluZm8uc3RyaWRlIHx8IDA7XG4gICAgdGhpcy5udW1Db21wb25lbnRzID0gaW5mby5udW1Db21wb25lbnRzO1xuICAgIHRoaXMubnVtQXR0cmlidXRlcyA9IGluZm8ubnVtQXR0cmlidXRlcyB8fCAxO1xuICAgIHRoaXMub2Zmc2V0ID0gaW5mby5vZmZzZXQgfHwgMDtcbiAgICB0aGlzLnR5cGUgPSBpbmZvLnR5cGU7XG4gICAgdGhpcy5sb2NhdGlvbiA9IGluZm8ubG9jYXRpb247XG4gIH1cbiAgc2V0QXR0cmlidXRlKGJ1ZmZlckNvbnRyb2xsZXIsIGRpdmlzb3IpIHtcbiAgICBjb25zdCB7IHR5cGUgfSA9IHRoaXM7XG4gICAgY29uc3Qgc2V0dGVyID0gYXR0cmliVHlwZU1hcFt0eXBlXTtcbiAgICBzZXR0ZXIodGhpcywgYnVmZmVyQ29udHJvbGxlciwgZGl2aXNvcik7XG4gIH1cbn1cbmNsYXNzIEJ1ZmZlckF0dHJpYnV0ZSB7XG4gIGNvbnN0cnVjdG9yKGdsLCBpbmZvKSB7XG4gICAgdGhpcy5nbCA9IGdsO1xuICAgIHRoaXMuYnVmZmVyID0gZ2wuY3JlYXRlQnVmZmVyKCk7XG4gICAgdGhpcy5zdHJpZGUgPSBpbmZvLnN0cmlkZSB8fCAwO1xuICAgIHRoaXMubnVtQ29tcG9uZW50cyA9IGluZm8ubnVtQ29tcG9uZW50cztcbiAgICB0aGlzLm51bUF0dHJpYnV0ZXMgPSBpbmZvLm51bUF0dHJpYnV0ZXMgfHwgMTtcbiAgICB0aGlzLm9mZnNldCA9IGluZm8ub2Zmc2V0IHx8IDA7XG4gICAgdGhpcy50eXBlID0gaW5mby50eXBlO1xuICAgIHRoaXMubG9jYXRpb24gPSBpbmZvLmxvY2F0aW9uO1xuICAgIHRoaXMuZGl2aXNvciA9IGluZm8uZGl2aXNvcjtcbiAgfVxuICBzZXRBdHRyaWJ1dGUoKSB7XG4gICAgY29uc3QgeyB0eXBlLCBnbCB9ID0gdGhpcztcbiAgICBjb25zdCBzZXR0ZXIgPSBhdHRyaWJUeXBlTWFwW3R5cGVdO1xuICAgIHNldHRlcih0aGlzKTtcbiAgfVxuICBidWZmZXJEYXRhKGRhdGEsIGJ5dGVMZW5ndGgsIHVzYWdlID0gMHg4OGU0KSB7XG4gICAgY29uc3QgeyBnbCwgYnVmZmVyIH0gPSB0aGlzO1xuICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCBidWZmZXIpO1xuICAgIGdsLmJ1ZmZlckRhdGEoZ2wuQVJSQVlfQlVGRkVSLCBkYXRhIHx8IGJ5dGVMZW5ndGgsIHVzYWdlKTtcbiAgfVxuICBidWZmZXJTdWJEYXRhKGRhdGEsIG9mZnNldCA9IDApIHtcbiAgICBjb25zdCB7IGdsLCBidWZmZXIgfSA9IHRoaXM7XG4gICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIGJ1ZmZlcik7XG4gICAgZ2wuYnVmZmVyU3ViRGF0YShnbC5BUlJBWV9CVUZGRVIsIG9mZnNldCwgZGF0YSk7XG4gIH1cbn1cblxuZXhwb3J0IHtcbiAgQnVmZmVyQXR0cmlidXRlLFxuICBjcmVhdGVJbmRpY2VzQnVmZmVyLFxuICBBdHRyaWJ1dGVTZXR0ZXIsXG4gIEJ1ZmZlckNvbnRyb2xsZXIsXG59O1xuIiwiaW1wb3J0IHsgbTQgfSBmcm9tIFwibWF0aFwiO1xuXG5jb25zdCBkZWdUb1JhZCA9IChkKSA9PiAoZCAqIE1hdGguUEkpIC8gMTgwO1xuXG5jb25zdCBmaWVsZE9mVmlld1JhZGlhbnMgPSBkZWdUb1JhZCg5MCk7XG5cbmNsYXNzIERyYXdlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuY29udGV4dCA9IG51bGw7XG4gICAgdGhpcy5wcm9qZWN0aW9uTWF0cml4ID0gbnVsbDtcbiAgICB0aGlzLmZpZWxkT2ZWaWV3UmFkaWFucyA9IGRlZ1RvUmFkKDkwKTtcbiAgfVxuICBzZXRDb250ZXh0KGdsQ29udGV4dFdyYXBwZXIpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBnbENvbnRleHRXcmFwcGVyO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIHNldEZpZWxkT2ZWaWV3KGFuZ2xlKSB7XG4gICAgdGhpcy5maWVsZE9mVmlld1JhZGlhbnMgPSBkZWdUb1JhZChhbmdsZSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgdXBkYXRlM0RQcm9qZWN0aW9uTWF0cml4KHpOZWFyID0gMC4wMSwgekZhciA9IDIwMDApIHtcbiAgICBjb25zdCB7IGdsIH0gPSB0aGlzLmNvbnRleHQ7XG4gICAgY29uc3QgYXNwZWN0ID0gZ2wuY2FudmFzLmNsaWVudFdpZHRoIC8gZ2wuY2FudmFzLmNsaWVudEhlaWdodDtcbiAgICB0aGlzLnByb2plY3Rpb25NYXRyaXggPSBtNC5wZXJzcGVjdGl2ZShcbiAgICAgIGZpZWxkT2ZWaWV3UmFkaWFucyxcbiAgICAgIGFzcGVjdCxcbiAgICAgIHpOZWFyLFxuICAgICAgekZhclxuICAgICk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBnZXRWaWV3UHJvamVjdGlvbk1hdHJpeChjYW1lcmFNYXRyaXgpIHtcbiAgICBjb25zdCB7IHByb2plY3Rpb25NYXRyaXggfSA9IHRoaXM7XG4gICAgY29uc3QgeyBnbCB9ID0gdGhpcy5jb250ZXh0O1xuICAgIGNvbnN0IHZpZXdNYXRyaXggPSBtNC5pbnZlcnNlKGNhbWVyYU1hdHJpeCk7XG4gICAgcmV0dXJuIG00Lm11bHRpcGx5KHByb2plY3Rpb25NYXRyaXgsIHZpZXdNYXRyaXgpO1xuICB9XG4gIGRyYXcocmVuZGVySW5mbywgdW5pZm9ybXMsIGNhbWVyYU1hdHJpeCkge1xuICAgIGNvbnN0IHZpZXdQcm9qZWN0aW9uTWF0cml4ID0gdGhpcy5nZXRWaWV3UHJvamVjdGlvbk1hdHJpeChjYW1lcmFNYXRyaXgpO1xuICAgIGNvbnN0IHtcbiAgICAgIHZhbyxcbiAgICAgIG1vZGUsXG4gICAgICBvZmZzZXQsXG4gICAgICBudW1FbGVtZW50cyxcbiAgICAgIGluZGljZXMsXG4gICAgICBjb21wb25lbnRUeXBlLFxuICAgICAgcHJvZ3JhbUluZm8sXG4gICAgfSA9IHJlbmRlckluZm87XG4gICAgY29uc3QgeyBnbCB9ID0gdGhpcy5jb250ZXh0O1xuXG4gICAgY29uc3Qgd29ybGRWaWV3UHJvamVjdGlvbiA9IG00Lm11bHRpcGx5KFxuICAgICAgdmlld1Byb2plY3Rpb25NYXRyaXgsXG4gICAgICB1bmlmb3Jtcy51X21hdHJpeFxuICAgICk7XG4gICAgY29uc3Qgd29ybGRNYXRyaXggPSB1bmlmb3Jtcy51X21hdHJpeDtcbiAgICB0aGlzLmNvbnRleHQudXNlUHJvZ3JhbUluZm8ocHJvZ3JhbUluZm8pO1xuICAgIHRoaXMuY29udGV4dFxuICAgICAgLmdldExhc3RVc2VkUHJvZ3JhbUluZm8oKVxuICAgICAgLnNldFVuaWZvcm1zKHsgLi4udW5pZm9ybXMsIHdvcmxkTWF0cml4LCB3b3JsZFZpZXdQcm9qZWN0aW9uIH0pO1xuICAgIGlmICh2YW8pIGdsLmJpbmRWZXJ0ZXhBcnJheSh2YW8pO1xuICAgIGlmICghaW5kaWNlcykge1xuICAgICAgZ2wuZHJhd0FycmF5cyhtb2RlLCBvZmZzZXQsIG51bUVsZW1lbnRzKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZ2wuZHJhd0VsZW1lbnRzKG1vZGUsIG51bUVsZW1lbnRzLCBjb21wb25lbnRUeXBlLCBvZmZzZXQpO1xuICB9XG4gIGRyYXdJbnN0YW5jZWQocmVuZGVySW5mbywgdW5pZm9ybXMsIGNhbWVyYU1hdHJpeCwgbnVtSW5zdGFuY2VzKSB7XG4gICAgY29uc3Qgdmlld1Byb2plY3Rpb25NYXRyaXggPSB0aGlzLmdldFZpZXdQcm9qZWN0aW9uTWF0cml4KGNhbWVyYU1hdHJpeCk7XG4gICAgY29uc3QgeyBnbCB9ID0gdGhpcy5jb250ZXh0O1xuICAgIGNvbnN0IHsgdmFvLCBtb2RlLCBvZmZzZXQsIG51bUVsZW1lbnRzLCBpbmRpY2VzLCBwcm9ncmFtSW5mbyB9ID0gcmVuZGVySW5mbztcbiAgICBjb25zdCB3b3JsZFZpZXdQcm9qZWN0aW9uID0gbTQubXVsdGlwbHkoXG4gICAgICB2aWV3UHJvamVjdGlvbk1hdHJpeCxcbiAgICAgIHVuaWZvcm1zLnVfbWF0cml4XG4gICAgKTtcbiAgICBjb25zdCB3b3JsZE1hdHJpeCA9IHVuaWZvcm1zLnVfbWF0cml4O1xuICAgIHRoaXMuY29udGV4dC51c2VQcm9ncmFtSW5mbyhwcm9ncmFtSW5mbyk7XG4gICAgdGhpcy5jb250ZXh0XG4gICAgICAuZ2V0TGFzdFVzZWRQcm9ncmFtSW5mbygpXG4gICAgICAuc2V0VW5pZm9ybXMoeyAuLi51bmlmb3Jtcywgd29ybGRNYXRyaXgsIHdvcmxkVmlld1Byb2plY3Rpb24gfSk7XG4gICAgZ2wuYmluZFZlcnRleEFycmF5KHZhbyk7XG4gICAgaWYgKCFpbmRpY2VzKSB7XG4gICAgICBnbC5kcmF3QXJyYXlzSW5zdGFuY2VkKG1vZGUsIG9mZnNldCwgbnVtRWxlbWVudHMsIG51bUluc3RhbmNlcyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGdsLmRyYXdFbGVtZW50c0luc3RhbmNlZChcbiAgICAgIG1vZGUsXG4gICAgICBudW1FbGVtZW50cyxcbiAgICAgIGdsLlVOU0lHTkVEX1NIT1JULFxuICAgICAgb2Zmc2V0LFxuICAgICAgbnVtSW5zdGFuY2VzXG4gICAgKTtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgRHJhd2VyO1xuIiwiaW1wb3J0IGdldEF0dHJpYnV0ZVByb3BzQnlUeXBlIGZyb20gXCIuL2F0dHJpYlR5cGVQcm9wc1wiO1xuaW1wb3J0IGF0dHJpYlR5cGVQcm9wcyBmcm9tIFwiLi9hdHRyaWJUeXBlUHJvcHNcIjtcbmltcG9ydCB7IEJ1ZmZlckF0dHJpYnV0ZSB9IGZyb20gXCIuL0J1ZmZlckF0dHJpYnV0ZVwiO1xuY2xhc3MgTWVzaFJlbmRlcmVyIHtcbiAgY29uc3RydWN0b3IoeyBwcmltaXRpdmVzLCBuYW1lIH0pIHtcbiAgICB0aGlzLnByaW1pdGl2ZXMgPSBwcmltaXRpdmVzO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5jb250ZXh0ID0gbnVsbDtcbiAgICB0aGlzLmJ1ZmZlcnMgPSB7fTtcbiAgfVxuICBzZXRDb250ZXh0KGdsQ29udGV4dFdyYXBwZXIpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBnbENvbnRleHRXcmFwcGVyO1xuICAgIGZvciAobGV0IGkgPSAwLCBuID0gdGhpcy5wcmltaXRpdmVzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgdGhpcy5wcmltaXRpdmVzW2ldLnNldENvbnRleHQoZ2xDb250ZXh0V3JhcHBlcik7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIHNldFByb2dyYW1JbmZvKHByb2dyYW1JbmZvKSB7XG4gICAgZm9yIChsZXQgaSA9IDAsIG4gPSB0aGlzLnByaW1pdGl2ZXMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICB0aGlzLnByaW1pdGl2ZXNbaV0uc2V0UHJvZ3JhbUluZm8ocHJvZ3JhbUluZm8pO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBzZXREcmF3ZXIoZHJhd2VyKSB7XG4gICAgZm9yIChsZXQgaSA9IDAsIG4gPSB0aGlzLnByaW1pdGl2ZXMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICB0aGlzLnByaW1pdGl2ZXNbaV0uc2V0RHJhd2VyKGRyYXdlcik7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIGRyYXcodW5pZm9ybXMsIGNhbWVyYU1hdHJpeCkge1xuICAgIGZvciAobGV0IGkgPSAwLCBuID0gdGhpcy5wcmltaXRpdmVzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgdGhpcy5wcmltaXRpdmVzW2ldLmRyYXcodW5pZm9ybXMsIGNhbWVyYU1hdHJpeCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIGRyYXdJbnN0YW5jZWQodW5pZm9ybXMsIGNhbWVyYU1hdHJpeCwgbnVtSW5zdGFuY2VzKSB7XG4gICAgZm9yIChsZXQgaSA9IDAsIG4gPSB0aGlzLnByaW1pdGl2ZXMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICB0aGlzLnByaW1pdGl2ZXNbaV0uZHJhd0luc3RhbmNlZCh1bmlmb3JtcywgY2FtZXJhTWF0cml4LCBudW1JbnN0YW5jZXMpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBjcmVhdGVQcmltaXRpdmVCdWZmZXJzKCkge1xuICAgIHRoaXMucHJpbWl0aXZlcy5mb3JFYWNoKChwcmltaXRpdmUpID0+IHByaW1pdGl2ZS5jcmVhdGVHZW9tZXRyeUJ1ZmZlcnMoKSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgY3JlYXRlQnVmZmVyQXR0cmliRGF0YShuYW1lLCB0eXBlLCBwYXJhbXMpIHtcbiAgICBjb25zdCB7IGdsIH0gPSB0aGlzLmNvbnRleHQ7XG4gICAgY29uc3QgYXR0cmliUHJvcHMgPSBnZXRBdHRyaWJ1dGVQcm9wc0J5VHlwZSh0eXBlKTtcbiAgICBjb25zdCBhdHRyaWJ1dGVQcm9wcyA9IHsgLi4uYXR0cmliUHJvcHMsIC4uLnBhcmFtcyB9O1xuICAgIGNvbnN0IGJ1ZmZlckF0dHJpYkRhdGEgPSBuZXcgQnVmZmVyQXR0cmlidXRlKGdsLCBhdHRyaWJ1dGVQcm9wcyk7XG4gICAgdGhpcy5idWZmZXJzID0geyAuLi50aGlzLmJ1ZmZlcnMsIFtuYW1lXTogYnVmZmVyQXR0cmliRGF0YSB9O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIGJ1ZmZlckRhdGEoYnVmZmVyTmFtZSwgZGF0YSwgYnl0ZUxlbmd0aCkge1xuICAgIGNvbnN0IGJ1ZmZlckF0dHJpYnV0ZURlc2NyaXB0b3IgPSB0aGlzLmJ1ZmZlcnNbYnVmZmVyTmFtZV07XG5cbiAgICBidWZmZXJBdHRyaWJ1dGVEZXNjcmlwdG9yLmJ1ZmZlckRhdGEoZGF0YSwgYnl0ZUxlbmd0aCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgYnVmZmVyU3ViRGF0YShidWZmZXJOYW1lLCBkYXRhLCBvZmZzZXQpIHtcbiAgICBjb25zdCBidWZmZXJBdHRyaWJ1dGVEZXNjcmlwdG9yID0gdGhpcy5idWZmZXJzW2J1ZmZlck5hbWVdO1xuICAgIGJ1ZmZlckF0dHJpYnV0ZURlc2NyaXB0b3IuYnVmZmVyU3ViRGF0YShkYXRhLCBieXRlTGVuZ3RoLCBvZmZzZXQpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIHNldEF0dHJpYnV0ZShuYW1lKSB7XG4gICAgY29uc3QgYnVmZmVyQXR0cmliRGF0YSA9IHRoaXMuYnVmZmVyc1tuYW1lXTtcbiAgICB0aGlzLnByaW1pdGl2ZXMuZm9yRWFjaCgocHJpbWl0aXZlKSA9PlxuICAgICAgcHJpbWl0aXZlLnNldEF0dHJpYnV0ZShidWZmZXJBdHRyaWJEYXRhKVxuICAgICk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgc2V0UHJpbWl0aXZlQXR0cmlidXRlcygpIHtcbiAgICBmb3IgKGxldCBpID0gMCwgbiA9IHRoaXMucHJpbWl0aXZlcy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgIHRoaXMucHJpbWl0aXZlc1tpXS5zZXRBdHRyaWJ1dGVzKCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG5jbGFzcyBTa2lubmVkTWVzaFJlbmRlcmVyIHtcbiAgY29uc3RydWN0b3IocHJpbWl0aXZlcywgc2tpbikge1xuICAgIHRoaXMucHJpbWl0aXZlcyA9IHByaW1pdGl2ZXM7XG4gICAgdGhpcy5za2luID0gc2tpbjtcbiAgfVxuICBkcmF3KHVuaWZvcm1zLCBjYW1lcmFNYXRyaXgpIHtcbiAgICB0aGlzLnNraW4udXBkYXRlKHVuaWZvcm1zLnVfbWF0cml4KTtcbiAgICBjb25zdCBfdW5pZm9ybXMgPSB7XG4gICAgICB1X2pvaW50VGV4dHVyZTogdGhpcy5za2luLmpvaW50VGV4dHVyZSxcbiAgICAgIHVfbnVtSm9pbnRzOiB0aGlzLnNraW4uam9pbnRzLmxlbmd0aCxcbiAgICAgIC4uLnVuaWZvcm1zLFxuICAgIH07XG4gICAgZm9yIChsZXQgaSA9IDAsIG4gPSB0aGlzLnByaW1pdGl2ZXMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICB0aGlzLnByaW1pdGl2ZXNbaV0uZHJhdyhfdW5pZm9ybXMsIGNhbWVyYU1hdHJpeCk7XG4gICAgfVxuICB9XG59XG5leHBvcnQgeyBNZXNoUmVuZGVyZXIsIFNraW5uZWRNZXNoUmVuZGVyZXIgfTtcbiIsImltcG9ydCB7XG4gIGNyZWF0ZUluZGljZXNCdWZmZXIsXG4gIEJ1ZmZlckF0dHJpYnV0ZSxcbiAgRHluYW1pY0J1ZmZlckF0dHJpYkRlc2NyaXB0b3IsXG4gIEJ1ZmZlckNvbnRyb2xsZXIsXG4gIEF0dHJpYnV0ZVNldHRlcixcbn0gZnJvbSBcIi4vQnVmZmVyQXR0cmlidXRlXCI7XG5pbXBvcnQgeyBFTEVNRU5UX1NJWkUgfSBmcm9tIFwiLi9lbnVtc1wiO1xuaW1wb3J0IHsgZ2V0R0xUeXBlRm9yVHlwZWRBcnJheSB9IGZyb20gXCIuL3Byb2dyYW1JbmZvXCI7XG5pbXBvcnQgZ2V0QXR0cmlidXRlUHJvcHNCeVR5cGUgZnJvbSBcIi4vYXR0cmliVHlwZVByb3BzXCI7XG5cbmNsYXNzIFByaW1pdGl2ZVJlbmRlcmVyIHtcbiAgY29uc3RydWN0b3IoYXJyYXlEYXRhKSB7XG4gICAgdGhpcy5idWZmZXJzID0ge307XG4gICAgdGhpcy5wcm9ncmFtSW5mbyA9IG51bGw7XG4gICAgdGhpcy5jb250ZXh0ID0gbnVsbDtcbiAgICB0aGlzLmRyYXdlciA9IG51bGw7XG4gICAgdGhpcy5tb2RlID0gbnVsbDtcbiAgICB0aGlzLm9mZnNldCA9IG51bGw7XG4gICAgdGhpcy5udW1FbGVtZW50cyA9IG51bGw7XG4gICAgdGhpcy52YW8gPSBudWxsO1xuICAgIHRoaXMuY29tcG9uZW50VHlwZSA9IG51bGw7XG4gICAgdGhpcy5hcnJheURhdGEgPSBhcnJheURhdGE7XG4gICAgY29uc3Qge2NvbXBvbmVudFR5cGUsIG51bUVsZW1lbnRzLCBtb2RlIH0gPSBhcnJheURhdGE7XG4gICAgdGhpcy5udW1FbGVtZW50cyA9IG51bUVsZW1lbnRzO1xuICAgIHRoaXMubW9kZSA9IG1vZGU7XG4gICAgdGhpcy5jb21wb25lbnRUeXBlID0gY29tcG9uZW50VHlwZSB8fCA1MTIzO1xuICB9XG4gIHNldENvbnRleHQoZ2xDb250ZXh0V3JhcHBlcikge1xuICAgIHRoaXMuY29udGV4dCA9IGdsQ29udGV4dFdyYXBwZXI7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgY3JlYXRlVkFPKCkge1xuICAgIGlmICh0aGlzLnZhbykgcmV0dXJuO1xuICAgIHRoaXMudmFvID0gdGhpcy5jb250ZXh0LmdsLmNyZWF0ZVZlcnRleEFycmF5KCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgc2V0TW9kZShtb2RlKXtcbiAgICB0aGlzLm1vZGUgPSBtb2RlXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuICBjcmVhdGVHZW9tZXRyeUJ1ZmZlcnMoKSB7XG4gICAgY29uc3QgeyBhcnJheURhdGEgfSA9IHRoaXM7XG4gICAgY29uc3QgeyBnbCB9ID0gdGhpcy5jb250ZXh0O1xuICAgIGNvbnN0IHsgYXR0cmlidXRlcywgaW5kaWNlcywgY29tcG9uZW50VHlwZSwgbnVtRWxlbWVudHMsIG1vZGUgfSA9IGFycmF5RGF0YTtcbiAgIFxuXG4gICAgaWYgKGF0dHJpYnV0ZXMpIHtcbiAgICAgIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goKGF0dHJpYnV0ZU5hbWUpID0+IHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgIHN0cmlkZSxcbiAgICAgICAgICB0eXBlLFxuICAgICAgICAgIG9mZnNldCxcbiAgICAgICAgICBsb2NhdGlvbixcbiAgICAgICAgICBudW1Db21wb25lbnRzLFxuICAgICAgICAgIG51bUF0dHJpYnV0ZXMsXG4gICAgICAgICAgZGF0YSxcbiAgICAgICAgICBzaXplLFxuICAgICAgICB9ID0gYXR0cmlidXRlc1thdHRyaWJ1dGVOYW1lXTtcbiAgICAgICAgY29uc3QgYnVmZmVyQXR0cmlidXRlRGVzY3JpcHRvciA9IG5ldyBCdWZmZXJBdHRyaWJ1dGUoZ2wsIHtcbiAgICAgICAgICBzdHJpZGUsXG4gICAgICAgICAgdHlwZSxcbiAgICAgICAgICBvZmZzZXQsXG4gICAgICAgICAgbG9jYXRpb24sXG4gICAgICAgICAgbnVtQXR0cmlidXRlcyxcbiAgICAgICAgICBudW1Db21wb25lbnRzLFxuICAgICAgICAgIHNpemUsXG4gICAgICAgIH0pO1xuICAgICAgICBidWZmZXJBdHRyaWJ1dGVEZXNjcmlwdG9yLmJ1ZmZlckRhdGEoZGF0YSk7XG4gICAgICAgIHRoaXMuYnVmZmVycyA9IHtcbiAgICAgICAgICAuLi50aGlzLmJ1ZmZlcnMsXG4gICAgICAgICAgW2F0dHJpYnV0ZU5hbWVdOiBidWZmZXJBdHRyaWJ1dGVEZXNjcmlwdG9yLFxuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChpbmRpY2VzKSB7XG4gICAgICBjb25zdCBpbmRpY2VzQnVmZmVyID0gZ2wuY3JlYXRlQnVmZmVyKCk7XG4gICAgICBnbC5iaW5kQnVmZmVyKGdsLkVMRU1FTlRfQVJSQVlfQlVGRkVSLCBpbmRpY2VzQnVmZmVyKTtcbiAgICAgIGdsLmJ1ZmZlckRhdGEoZ2wuRUxFTUVOVF9BUlJBWV9CVUZGRVIsIGluZGljZXMsIGdsLlNUQVRJQ19EUkFXKTtcbiAgICAgIHRoaXMuaW5kaWNlcyA9IGluZGljZXNCdWZmZXI7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIHNldEF0dHJpYnV0ZXMoKSB7XG4gICAgY29uc3QgeyBnbCB9ID0gdGhpcy5jb250ZXh0O1xuXG4gICAgZ2wuYmluZFZlcnRleEFycmF5KHRoaXMudmFvKTtcbiAgICBmb3IgKGNvbnN0IGF0dHJpYiBpbiB0aGlzLmJ1ZmZlcnMpIHtcbiAgICAgIGNvbnN0IGJ1ZmZlckF0dHJpYnV0ZURlc2NyaXB0b3IgPSB0aGlzLmJ1ZmZlcnNbYXR0cmliXTtcbiAgICAgIGJ1ZmZlckF0dHJpYnV0ZURlc2NyaXB0b3Iuc2V0QXR0cmlidXRlKCk7XG4gICAgfVxuICAgIGdsLmJpbmRCdWZmZXIoZ2wuRUxFTUVOVF9BUlJBWV9CVUZGRVIsIHRoaXMuaW5kaWNlcyk7XG4gICAgZ2wuYmluZFZlcnRleEFycmF5KG51bGwpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgc2V0RHJhd2VyKGRyYXdlcikge1xuICAgIHRoaXMuZHJhd2VyID0gZHJhd2VyO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIHNldFByb2dyYW1JbmZvKHByb2dyYW1JbmZvKSB7XG4gICAgdGhpcy5wcm9ncmFtSW5mbyA9IHByb2dyYW1JbmZvO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIGNyZWF0ZUJ1ZmZlckF0dHJpYkRhdGEobmFtZSwgdHlwZSwgcGFyYW1zKSB7XG4gICAgY29uc3QgeyBnbCB9ID0gdGhpcy5jb250ZXh0O1xuICAgIGNvbnN0IGF0dHJpYlByb3BzID0gZ2V0QXR0cmlidXRlUHJvcHNCeVR5cGUodHlwZSk7XG4gICAgY29uc3QgYXR0cmlidXRlUHJvcHMgPSB7IC4uLmF0dHJpYlByb3BzLCAuLi5wYXJhbXMgfTtcbiAgICBjb25zdCBidWZmZXJBdHRyaWJEYXRhID0gbmV3IEJ1ZmZlckF0dHJpYnV0ZShnbCwgYXR0cmlidXRlUHJvcHMpO1xuICAgIHRoaXMuYnVmZmVycyA9IHsgLi4udGhpcy5idWZmZXJzLCBbbmFtZV06IGJ1ZmZlckF0dHJpYkRhdGEgfTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBzZXRCdWZmZXJBdHRyaWJEYXRhKG5hbWUsIGJ1ZmZlckF0dHJpYkRhdGEpIHtcbiAgICB0aGlzLmJ1ZmZlcnMgPSB7IC4uLnRoaXMuYnVmZmVycywgW25hbWVdOiBidWZmZXJBdHRyaWJEYXRhIH07XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgc2V0T3duQXR0cmlidXRlKG5hbWUsIGRpdmlzb3IpIHtcbiAgICBjb25zdCB7IGdsIH0gPSB0aGlzLmNvbnRleHQ7XG4gICAgY29uc3QgYnVmZmVyQXR0cmliRGF0YSA9IHRoaXMuYnVmZmVyc1tuYW1lXTtcbiAgICBnbC5iaW5kVmVydGV4QXJyYXkodGhpcy52YW8pO1xuICAgIGJ1ZmZlckF0dHJpYkRhdGEuc2V0QXR0cmlidXRlKGRpdmlzb3IpO1xuICAgIGdsLmJpbmRWZXJ0ZXhBcnJheShudWxsKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBzZXRBdHRyaWJ1dGUoYnVmZmVyQXR0cmliRGF0YSkge1xuICAgIGNvbnN0IHsgZ2wgfSA9IHRoaXMuY29udGV4dDtcbiAgICBnbC5iaW5kVmVydGV4QXJyYXkodGhpcy52YW8pO1xuICAgIGJ1ZmZlckF0dHJpYkRhdGEuc2V0QXR0cmlidXRlKCk7XG4gICAgZ2wuYmluZFZlcnRleEFycmF5KG51bGwpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIGJ1ZmZlckRhdGEoYnVmZmVyTmFtZSwgZGF0YSwgYnl0ZUxlbmd0aCwgdXNhZ2UpIHtcbiAgICBjb25zdCBidWZmZXJBdHRyaWJEYXRhID0gdGhpcy5idWZmZXJzW2J1ZmZlck5hbWVdO1xuICAgIGJ1ZmZlckF0dHJpYkRhdGEuYnVmZmVyRGF0YShkYXRhLCBieXRlTGVuZ3RoLCB1c2FnZSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgYnVmZmVyU3ViRGF0YShidWZmZXJOYW1lLCBkYXRhLCBvZmZzZXQpIHtcbiAgICBjb25zdCBidWZmZXJEZXNjID0gdGhpcy5idWZmZXJzW2J1ZmZlck5hbWVdO1xuICAgIGJ1ZmZlckRlc2MuYnVmZmVyU3ViRGF0YShkYXRhLCBvZmZzZXQpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIGRyYXcodW5pZm9ybXMsIGNhbWVyYU1hdHJpeCkge1xuICAgIHRoaXMuZHJhd2VyLmRyYXcodGhpcywgdW5pZm9ybXMsIGNhbWVyYU1hdHJpeCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgZHJhd0luc3RhbmNlZCh1bmlmb3JtcywgY2FtZXJhTWF0cml4LCBudW1JbnN0YW5jZXMpIHtcbiAgICB0aGlzLmRyYXdlci5kcmF3SW5zdGFuY2VkKHRoaXMsIHVuaWZvcm1zLCBjYW1lcmFNYXRyaXgsIG51bUluc3RhbmNlcyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJpbWl0aXZlUmVuZGVyZXI7XG4iLCJjb25zdCBwcm9wcyA9IHtcbiAgbWF0NDoge1xuICAgIHN0cmlkZTogNjQsXG4gICAgYnl0ZUxlbmd0aDogNjQsXG4gICAgdHlwZTogMHgxNDA2LFxuICAgIG51bUF0dHJpYnV0ZXM6IDQsXG4gICAgbnVtQ29tcG9uZW50czogNCxcbiAgfSxcbiAgdmVjMzoge1xuICAgIG51bUNvbXBvbmVudHM6IDMsXG4gICAgdHlwZTogMHgxNDA2LFxuICAgIG51bUF0dHJpYnV0ZXM6IDEsXG4gIH0sXG59O1xuY29uc3QgZ2V0QXR0cmlidXRlUHJvcHNCeVR5cGUgPSAodHlwZSkgPT4gcHJvcHNbdHlwZV07XG5leHBvcnQgZGVmYXVsdCBnZXRBdHRyaWJ1dGVQcm9wc0J5VHlwZTtcbiIsImltcG9ydCB7IE5vZGUsIFRSUyB9IGZyb20gXCJtYXRoXCI7XG5cbmNsYXNzIEVudGl0eSBleHRlbmRzIE5vZGUge1xuICBzdGF0aWMgbWFrZUVudGl0eShlbnRpdHlEZXNjcmlwdGlvbiwgcm9vdE5vZGVOZHgpIHtcbiAgICBjb25zdCB7IG5vZGVzLCBtZXNoZXMgfSA9IGVudGl0eURlc2NyaXB0aW9uO1xuICAgIGNvbnN0IHJvb3ROb2RlID0gbm9kZXNbcm9vdE5vZGVOZHhdO1xuICAgIGNvbnN0IG1ha2VOb2RlID0gKG5vZGVEZXNjcmlwdGlvbiwgbmR4KSA9PiB7XG4gICAgICBjb25zdCB0cnMgPSBuZXcgVFJTKFxuICAgICAgICBub2RlRGVzY3JpcHRpb24udHJhbnNsYXRpb24gfHwgWzAsIDAsIDBdLFxuICAgICAgICBub2RlRGVzY3JpcHRpb24ucm90YXRpb24gfHwgWzAsIDAsIDAsIDBdLFxuICAgICAgICBub2RlRGVzY3JpcHRpb24uc2NhbGUgfHwgWzEsIDEsIDFdXG4gICAgICApO1xuICAgICAgY29uc3Qgbm9kZSA9IG5ldyBFbnRpdHkobm9kZURlc2NyaXB0aW9uLm5hbWUsIHRycywgbmR4KTtcbiAgICAgIGlmIChub2RlRGVzY3JpcHRpb24ubWVzaCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgbm9kZS5yZW5kZXJlciA9IG1lc2hlc1tub2RlRGVzY3JpcHRpb24ubWVzaF07XG4gICAgICB9XG4gICAgICBpZiAobm9kZURlc2NyaXB0aW9uLmNoaWxkcmVuKSB7XG4gICAgICAgIG5vZGVEZXNjcmlwdGlvbi5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZE5keCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGNoaWxkID0gbWFrZU5vZGUobm9kZXNbY2hpbGROZHhdLCBjaGlsZE5keCk7XG4gICAgICAgICAgY2hpbGQuc2V0UGFyZW50KG5vZGUpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBub2RlO1xuICAgIH07XG4gICAgcmV0dXJuIG1ha2VOb2RlKHJvb3ROb2RlLCByb290Tm9kZU5keCk7XG4gIH1cbiAgY29uc3RydWN0b3IobmFtZSwgdHJzLCBuZHgpIHtcbiAgICBzdXBlcihuYW1lLCB0cnMpO1xuICAgIHRoaXMubmR4ID0gbmR4O1xuICAgIHRoaXMucGh5c2ljcyA9IG51bGw7XG4gICAgdGhpcy5za2luTmR4ID0gbnVsbDtcbiAgICB0aGlzLm9iamVjdHNUb0RyYXcgPSBbXTtcbiAgICB0aGlzLnJlbmRlcmVyID0gbnVsbDtcbiAgfVxuICB1cGRhdGVPYmplY3RzVG9EcmF3KCkge1xuICAgIGNvbnN0IHF1ZXVlID0gW3RoaXNdO1xuICAgIHdoaWxlIChxdWV1ZS5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBub2RlID0gcXVldWUucG9wKCk7XG4gICAgICBjb25zb2xlLmxvZyhub2RlKTtcbiAgICAgIGlmIChub2RlLnJlbmRlcmVyKSB0aGlzLm9iamVjdHNUb0RyYXcucHVzaChub2RlKTtcbiAgICAgIGlmIChub2RlLmNoaWxkcmVuKSBxdWV1ZS5wdXNoKC4uLm5vZGUuY2hpbGRyZW4pO1xuICAgIH1cbiAgfVxuICB0cmF2ZXJzZShmbikge1xuICAgIGZuKHRoaXMpO1xuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IGNoaWxkLnRyYXZlcnNlKGZuKSk7XG4gIH1cbiAgZmluZChuZHgpIHtcbiAgICBsZXQgcmVzdWx0ID0gbnVsbDtcbiAgICBjb25zdCBpdGVyID0gKG5vZGVzKSA9PiB7XG4gICAgICBmb3IgKGxldCBub2RlIG9mIG5vZGVzKSB7XG4gICAgICAgIGlmIChub2RlLm5keCA9PT0gbmR4KSByZXN1bHQgPSBub2RlO1xuICAgICAgICBlbHNlIGl0ZXIobm9kZS5jaGlsZHJlbik7XG4gICAgICB9XG4gICAgfTtcbiAgICBpdGVyKFt0aGlzXSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICBmaW5kQnlOYW1lKG5hbWUpIHtcbiAgICBsZXQgcmVzdWx0ID0gbnVsbDtcbiAgICBjb25zdCBpdGVyID0gKG5vZGVzKSA9PiB7XG4gICAgICBmb3IgKGxldCBub2RlIG9mIG5vZGVzKSB7XG4gICAgICAgIGlmIChub2RlLm5hbWUgPT09IG5hbWUpIHJlc3VsdCA9IG5vZGU7XG4gICAgICAgIGVsc2UgaXRlcihub2RlLmNoaWxkcmVuKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGl0ZXIoW3RoaXNdKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIHJlbmRlcih1bmlmb3JtcywgY2FtZXJhTWF0cml4KSB7XG4gICAgdGhpcy5vYmplY3RzVG9EcmF3LmZvckVhY2goKG9iamVjdCkgPT4ge1xuICAgICAgb2JqZWN0LnJlbmRlcmVyLmRyYXcoXG4gICAgICAgIHsgLi4udW5pZm9ybXMsIHVfbWF0cml4OiBvYmplY3Qud29ybGRNYXRyaXggfSxcbiAgICAgICAgY2FtZXJhTWF0cml4XG4gICAgICApO1xuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVudGl0eTtcbiIsImNvbnN0IFRZUEVEX0FSUkFZUyA9IHtcbiAgICAnNTEyMCc6IEludDhBcnJheSwgICAgXG4gICAgJzUxMjEnOiBVaW50OEFycmF5LCAgIFxuICAgICc1MTIyJzogSW50MTZBcnJheSwgICBcbiAgICAnNTEyMyc6IFVpbnQxNkFycmF5LCAgXG4gICAgJzUxMjQnOiBJbnQzMkFycmF5LCAgIFxuICAgICc1MTI1JzogVWludDMyQXJyYXksICBcbiAgICAnNTEyNic6IEZsb2F0MzJBcnJheSwgXG59XG5jb25zdCBOVU1fQ09NUE9ORU5UUyA9IHtcbiAgICAnU0NBTEFSJyA6IDEsXG4gICAgJ1ZFQzInIDogMixcbiAgICAnVkVDMycgOiAzLFxuICAgICdWRUM0JyA6IDQsXG4gICAgJ01BVDInOiA0LFxuICAnTUFUMyc6IDksXG4gICdNQVQ0JzogMTYsXG59XG5jb25zdCBMT0NBVElPTlMgPSB7XG4gICAgJ1BPU0lUSU9OJyA6IDAsXG4gICAgJ05PUk1BTCcgOiAxLFxuICAgICdXRUlHSFRTXzAnIDogMixcbiAgICAnSk9JTlRTXzAnIDogMyxcbiAgICAnVEVYQ09PUkRfMCcgOiA0LFxufVxuY29uc3QgRUxFTUVOVF9TSVpFID0ge1xuICAgIDB4MTQwNiA6IDRcbn1cbmV4cG9ydCB7XG4gICAgTE9DQVRJT05TLCBOVU1fQ09NUE9ORU5UUywgVFlQRURfQVJSQVlTLCBFTEVNRU5UX1NJWkVcbn0iLCJpbXBvcnQgUHJpbWl0aXZlUmVuZGVyZXIgZnJvbSBcIi4vUHJpbWl0aXZlUmVuZGVyZXJcIjtcbmltcG9ydCB7IE1lc2hSZW5kZXJlciB9IGZyb20gXCIuL01lc2hSZW5kZXJlclwiO1xuaW1wb3J0IHsgQXR0cmlidXRlU2V0dGVyLCBCdWZmZXJDb250cm9sbGVyIH0gZnJvbSBcIi4vQnVmZmVyQXR0cmlidXRlXCI7XG5pbXBvcnQgeyBOVU1fQ09NUE9ORU5UUywgVFlQRURfQVJSQVlTLCBMT0NBVElPTlMgfSBmcm9tIFwiLi9lbnVtc1wiO1xuXG5jb25zdCBBcnJheURhdGFGcm9tR2x0ZiA9IChnbHRmLCBidWZmZXJzKSA9PiB7XG4gIGNvbnN0IHsgYnVmZmVyVmlld3MsIGFjY2Vzc29ycywgbWVzaGVzLCBub2RlcyB9ID0gZ2x0ZjtcbiAgY29uc3QgYXR0cmliRGF0YUZyb21BY2Nlc3NvciA9IChhY2Nlc3NvcikgPT4ge1xuICAgIGNvbnN0IGJ1ZmZlclZpZXcgPSBidWZmZXJWaWV3c1thY2Nlc3Nvci5idWZmZXJWaWV3XTtcbiAgICBjb25zdCB7IGNvdW50LCBjb21wb25lbnRUeXBlLCB0eXBlIH0gPSBhY2Nlc3NvcjtcbiAgICBjb25zdCBieXRlT2Zmc2V0ID0gYWNjZXNzb3IuYnl0ZU9mZnNldCB8fCAwO1xuICAgIGNvbnN0IHsgYnl0ZUxlbmd0aCwgdGFyZ2V0IH0gPSBidWZmZXJWaWV3O1xuICAgIGNvbnN0IHN0cmlkZSA9IGJ1ZmZlclZpZXcuYnl0ZVN0cmlkZSB8fCAwO1xuICAgIGNvbnN0IGJ1ZmZlclZpZXdCeXRlT2Zmc2V0ID0gYnVmZmVyVmlldy5ieXRlT2Zmc2V0IHx8IDA7XG4gICAgY29uc3QgYnVmZmVyID0gYnVmZmVyc1tidWZmZXJWaWV3LmJ1ZmZlcl07XG5cbiAgICByZXR1cm4ge1xuICAgICAgZGF0YTogbmV3IFVpbnQ4QXJyYXkoYnVmZmVyLCBidWZmZXJWaWV3Qnl0ZU9mZnNldCwgYnl0ZUxlbmd0aCksXG4gICAgICBudW1Db21wb25lbnRzOiBOVU1fQ09NUE9ORU5UU1t0eXBlXSxcbiAgICAgIHN0cmlkZSxcbiAgICAgIGJ5dGVMZW5ndGgsXG4gICAgICBsb2NhdGlvbjogbnVsbCxcbiAgICAgIGNvdW50LFxuICAgICAgdHlwZTogY29tcG9uZW50VHlwZSxcbiAgICAgIG9mZnNldDogYnl0ZU9mZnNldCB8fCAwLFxuICAgICAgY29tcG9uZW50VHlwZTogYWNjZXNzb3IuY29tcG9uZW50VHlwZSxcbiAgICB9O1xuICB9O1xuICBjb25zdCBfbWVzaGVzID0gbWVzaGVzLm1hcCgobWVzaCkgPT4gKHtcbiAgICBwcmltaXRpdmVzOiBtZXNoLnByaW1pdGl2ZXMubWFwKChfcHJpbWl0aXZlKSA9PiB7XG4gICAgICBjb25zdCBwcmltaXRpdmUgPSB7XG4gICAgICAgIGF0dHJpYnV0ZXM6IHt9LFxuICAgICAgICBtb2RlOiBfcHJpbWl0aXZlLm1vZGUsXG4gICAgICB9O1xuICAgICAgaWYgKF9wcmltaXRpdmUuaGFzT3duUHJvcGVydHkoXCJpbmRpY2VzXCIpKSB7XG4gICAgICAgIGNvbnN0IGluZGljZXNJbmZvID0gYXR0cmliRGF0YUZyb21BY2Nlc3NvcihcbiAgICAgICAgICBhY2Nlc3NvcnNbX3ByaW1pdGl2ZS5pbmRpY2VzXVxuICAgICAgICApO1xuICAgICAgICBwcmltaXRpdmUuaW5kaWNlcyA9IGluZGljZXNJbmZvLmRhdGE7XG4gICAgICAgIHByaW1pdGl2ZS5udW1FbGVtZW50cyA9IGluZGljZXNJbmZvLmNvdW50O1xuICAgICAgICBwcmltaXRpdmUuY29tcG9uZW50VHlwZSA9IGluZGljZXNJbmZvLmNvbXBvbmVudFR5cGU7XG4gICAgICB9XG4gICAgICBPYmplY3Qua2V5cyhfcHJpbWl0aXZlLmF0dHJpYnV0ZXMpLmZvckVhY2goKGF0dHJpYk5hbWUpID0+IHtcbiAgICAgICAgY29uc3QgYXR0cmlidXRlID0gX3ByaW1pdGl2ZS5hdHRyaWJ1dGVzW2F0dHJpYk5hbWVdO1xuICAgICAgICBwcmltaXRpdmUuYXR0cmlidXRlc1thdHRyaWJOYW1lXSA9IGF0dHJpYkRhdGFGcm9tQWNjZXNzb3IoXG4gICAgICAgICAgYWNjZXNzb3JzW2F0dHJpYnV0ZV1cbiAgICAgICAgKTtcbiAgICAgICAgLy9pZihhdHRyaWJOYW1lID09PSAnSk9JTlRTXzAnKSBfcHJpbWl0aXZlLmF0dHJpYnV0ZXNbYXR0cmliTmFtZV0uZGF0YSA9IG5ldyBVaW50MzJBcnJheShfcHJpbWl0aXZlLmF0dHJpYnV0ZXNbYXR0cmliTmFtZV0uZGF0YSlcbiAgICAgICAgcHJpbWl0aXZlLmF0dHJpYnV0ZXNbYXR0cmliTmFtZV0ubG9jYXRpb24gPSBMT0NBVElPTlNbYXR0cmliTmFtZV07XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBwcmltaXRpdmU7XG4gICAgfSksXG4gICAgbmFtZTogbWVzaC5uYW1lLFxuICB9KSk7XG5cbiAgcmV0dXJuIF9tZXNoZXMubWFwKChtZXNoKSA9PiB7XG4gICAgY29uc3QgcHJpbWl0aXZlcyA9IG1lc2gucHJpbWl0aXZlcy5tYXAoXG4gICAgICAocHJpbWl0aXZlKSA9PiBuZXcgUHJpbWl0aXZlUmVuZGVyZXIocHJpbWl0aXZlKVxuICAgICk7XG4gICAgY29uc3QgbmFtZSA9IG1lc2gubmFtZTtcblxuICAgIHJldHVybiBuZXcgTWVzaFJlbmRlcmVyKHsgcHJpbWl0aXZlcywgbmFtZSB9KTtcbiAgfSk7XG59O1xuXG5jb25zdCBQcmltaXRpdmVSZW5kZXJJbmZvRnJvbUFycmF5RGF0YSA9IChtZXNoZXMpID0+XG4gIG1lc2hlcy5tYXAoKG1lc2gpID0+IHtcbiAgICBjb25zdCBwcmltaXRpdmVzID0gbWVzaC5wcmltaXRpdmVzLm1hcChcbiAgICAgIChwcmltaXRpdmUpID0+IG5ldyBQcmltaXRpdmVSZW5kZXJlcihwcmltaXRpdmUpXG4gICAgKTtcbiAgICBjb25zdCBuYW1lID0gbWVzaC5uYW1lO1xuICAgIHJldHVybiBuZXcgTWVzaFJlbmRlcmVyKHsgbmFtZSwgcHJpbWl0aXZlcyB9KTtcbiAgfSk7XG5cbmNvbnN0IEVudGl0eURhdGFGcm9tR2x0ZiA9IChnbHRmLCBidWZmZXJzKSA9PlxuICBQcmltaXRpdmVSZW5kZXJJbmZvRnJvbUFycmF5RGF0YShBcnJheURhdGFGcm9tR2x0ZihnbHRmLCBidWZmZXJzKSk7XG5cbmNsYXNzIEdMVEYge1xuICBjb25zdHJ1Y3RvcihnbHRmLCBiaW5hcnlCdWZmZXJzKSB7XG4gICAgY29uc3QgeyBub2RlcywgbWVzaGVzLCBza2lucyB9ID0gZ2x0ZjtcbiAgICB0aGlzLm5vZGVzID0gbm9kZXM7XG4gICAgdGhpcy5tZXNoZXMgPSBBcnJheURhdGFGcm9tR2x0ZihnbHRmLCBiaW5hcnlCdWZmZXJzKTtcbiAgfVxufVxuZXhwb3J0IHtcbiAgQXJyYXlEYXRhRnJvbUdsdGYsXG4gIFByaW1pdGl2ZVJlbmRlckluZm9Gcm9tQXJyYXlEYXRhLFxuICBFbnRpdHlEYXRhRnJvbUdsdGYsXG4gIEdMVEYsXG59O1xuIiwiaW1wb3J0IHsgZXhwYW5kZWRUeXBlZEFycmF5IH0gZnJvbSBcIi4vcHJvZ3JhbUluZm8uanNcIjtcbmltcG9ydCB7IGNyb3NzLCBkaWZmLCBub3JtYWxpemUgfSBmcm9tIFwibWF0aC9zcmMvdmVjdG9yLmpzXCI7XG5jb25zdCBsaW5lZEJveEluZGljZXMgPSBuZXcgVWludDE2QXJyYXkoW1xuICAwLFxuICAxLFxuICAxLFxuICAyLFxuICAyLFxuICAzLFxuICAzLFxuICAwLCAvLyBmcm9udFxuICAwLFxuICA1LFxuICA1LFxuICA0LFxuICA0LFxuICAxLFxuICAxLFxuICAwLCAvL2JvdHRvbVxuICAwLFxuICA0LFxuICA0LFxuICA3LFxuICA3LFxuICAzLFxuICAzLFxuICAwLCAvL2xlZnRcbiAgMSxcbiAgMixcbiAgMixcbiAgNixcbiAgNixcbiAgNSxcbiAgNSxcbiAgMSwgLy9yaWdodFxuICA0LFxuICA1LFxuICA1LFxuICA2LFxuICA2LFxuICA3LFxuICA3LFxuICA0LCAvLyBiYWNrXG4gIDIsXG4gIDcsXG4gIDcsXG4gIDMsXG4gIDMsXG4gIDYsXG4gIDYsXG4gIDIsIC8vIHRvcFxuXSk7XG5cbmNvbnN0IENVQkVfRkFDRV9JTkRJQ0VTID0gW1xuICBbMywgNywgNSwgMV0sIC8vIHJpZ2h0XG4gIFs2LCAyLCAwLCA0XSwgLy8gbGVmdFxuICBbNiwgNywgMywgMl0sIC8vID8/XG4gIFswLCAxLCA1LCA0XSwgLy8gPz9cbiAgWzcsIDYsIDQsIDVdLCAvLyBmcm9udFxuICBbMiwgMywgMSwgMF0sIC8vIGJhY2tcbl07XG5cbmZ1bmN0aW9uIGNyZWF0ZUJveChfYSA9IDEsIF9iID0gMSwgX2MgPSAxKSB7XG4gIGNvbnN0IGEgPSBfYSAvIDIsXG4gICAgYiA9IF9iIC8gMixcbiAgICBjID0gX2MgLyAyO1xuICBjb25zdCBjb3JuZXJWZXJ0aWNlcyA9IFtcbiAgICBbLWEsIC1iLCAtY10sXG4gICAgWythLCAtYiwgLWNdLFxuICAgIFstYSwgK2IsIC1jXSxcbiAgICBbK2EsICtiLCAtY10sXG4gICAgWy1hLCAtYiwgK2NdLFxuICAgIFsrYSwgLWIsICtjXSxcbiAgICBbLWEsICtiLCArY10sXG4gICAgWythLCArYiwgK2NdLFxuICBdO1xuXG4gIGNvbnN0IGZhY2VOb3JtYWxzID0gW1xuICAgIFsrMSwgKzAsICswXSxcbiAgICBbLTEsICswLCArMF0sXG4gICAgWyswLCArMSwgKzBdLFxuICAgIFsrMCwgLTEsICswXSxcbiAgICBbKzAsICswLCArMV0sXG4gICAgWyswLCArMCwgLTFdLFxuICBdO1xuXG4gIGNvbnN0IHV2Q29vcmRzID0gW1xuICAgIFsxLCAwXSxcbiAgICBbMCwgMF0sXG4gICAgWzAsIDFdLFxuICAgIFsxLCAxXSxcbiAgXTtcbiAgY29uc3QgbnVtVmVydGljZXMgPSA2ICogNDtcbiAgY29uc3QgcG9zaXRpb25zID0gZXhwYW5kZWRUeXBlZEFycmF5KG5ldyBGbG9hdDMyQXJyYXkobnVtVmVydGljZXMgKiAzKSk7XG4gIGNvbnN0IG5vcm1hbHMgPSBleHBhbmRlZFR5cGVkQXJyYXkobmV3IEZsb2F0MzJBcnJheShudW1WZXJ0aWNlcyAqIDMpKTtcbiAgLy9jb25zdCB0ZXhDb29yZHMgPSB3ZWJnbFV0aWxzLmNyZWF0ZUF1Z21lbnRlZFR5cGVkQXJyYXkoMiAsIG51bVZlcnRpY2VzKTtcbiAgY29uc3QgaW5kaWNlcyA9IGV4cGFuZGVkVHlwZWRBcnJheShuZXcgVWludDE2QXJyYXkoNiAqIDIgKiAzKSk7XG5cbiAgZm9yIChsZXQgZiA9IDA7IGYgPCA2OyArK2YpIHtcbiAgICBjb25zdCBmYWNlSW5kaWNlcyA9IENVQkVfRkFDRV9JTkRJQ0VTW2ZdO1xuICAgIGZvciAobGV0IHYgPSAwOyB2IDwgNDsgKyt2KSB7XG4gICAgICBjb25zdCBwb3NpdGlvbiA9IGNvcm5lclZlcnRpY2VzW2ZhY2VJbmRpY2VzW3ZdXTtcbiAgICAgIGNvbnN0IG5vcm1hbCA9IGZhY2VOb3JtYWxzW2ZdO1xuICAgICAgcG9zaXRpb25zLnB1c2gocG9zaXRpb24pO1xuICAgICAgbm9ybWFscy5wdXNoKG5vcm1hbCk7XG4gICAgfVxuXG4gICAgY29uc3Qgb2Zmc2V0ID0gNCAqIGY7XG4gICAgaW5kaWNlcy5wdXNoKG9mZnNldCArIDAsIG9mZnNldCArIDEsIG9mZnNldCArIDIpO1xuICAgIGluZGljZXMucHVzaChvZmZzZXQgKyAwLCBvZmZzZXQgKyAyLCBvZmZzZXQgKyAzKTtcbiAgfVxuICBjb25zdCBsZW4gPSBwb3NpdGlvbnMuYnl0ZUxlbmd0aDtcbiAgY29uc3QgdGV4Y29vcmQgPSBuZXcgRmxvYXQzMkFycmF5KFtcbiAgICAvLyBGcm9udFxuICAgIDAuMCwgMC4wLCAxLjAsIDAuMCwgMS4wLCAxLjAsIDAuMCwgMS4wLFxuICAgIC8vIEJhY2tcbiAgICAwLjAsIDAuMCwgMS4wLCAwLjAsIDEuMCwgMS4wLCAwLjAsIDEuMCxcbiAgICAvLyBUb3BcbiAgICAwLjAsIDAuMCwgMS4wLCAwLjAsIDEuMCwgMS4wLCAwLjAsIDEuMCxcbiAgICAvLyBCb3R0b21cbiAgICAwLjAsIDAuMCwgMS4wLCAwLjAsIDEuMCwgMS4wLCAwLjAsIDEuMCxcbiAgICAvLyBSaWdodFxuICAgIDAuMCwgMC4wLCAxLjAsIDAuMCwgMS4wLCAxLjAsIDAuMCwgMS4wLFxuICAgIC8vIExlZnRcbiAgICAwLjAsIDAuMCwgMS4wLCAwLjAsIDEuMCwgMS4wLCAwLjAsIDEuMCxcbiAgXSk7XG5cbiAgY29uc3QgQXJyYXlEYXRhID0ge1xuICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgIE5PUk1BTDoge1xuICAgICAgICBkYXRhOiBub3JtYWxzLFxuICAgICAgICBjb3VudDogNiAqIDQgKiAzLFxuICAgICAgICBsb2NhdGlvbjogMSxcbiAgICAgICAgYnl0ZUxlbmd0aDogbm9ybWFscy5ieXRlTGVuZ3RoLFxuICAgICAgICBzdHJpZGU6IDAsXG4gICAgICAgIG9mZnNldDogMCxcbiAgICAgICAgbnVtQ29tcG9uZW50czogMyxcbiAgICAgICAgdHlwZTogNTEyNixcbiAgICAgIH0sXG4gICAgICBQT1NJVElPTjoge1xuICAgICAgICBkYXRhOiBwb3NpdGlvbnMsXG4gICAgICAgIGNvdW50OiA2ICogNCAqIDMsXG4gICAgICAgIGxvY2F0aW9uOiAwLFxuICAgICAgICBieXRlTGVuZ3RoOiBwb3NpdGlvbnMuYnl0ZUxlbmd0aCxcbiAgICAgICAgc3RyaWRlOiAwLFxuICAgICAgICBvZmZzZXQ6IDAsXG4gICAgICAgIG51bUNvbXBvbmVudHM6IDMsXG4gICAgICAgIHR5cGU6IDUxMjYsXG4gICAgICB9LFxuICAgICAgVEVYQ09PUkRfMDoge1xuICAgICAgICBkYXRhOiB0ZXhjb29yZCxcbiAgICAgICAgY291bnQ6IDQ4LFxuICAgICAgICB0eXBlOiA1MTI2LFxuICAgICAgICBvZmZzZXQ6IDAsXG4gICAgICAgIHN0cmlkZTogMCxcbiAgICAgICAgYnl0ZUxlbmd0aDogdGV4Y29vcmQuYnl0ZUxlbmd0aCxcbiAgICAgICAgbG9jYXRpb246IDQsXG4gICAgICAgIG51bUNvbXBvbmVudHM6IDIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgaW5kaWNlczogaW5kaWNlcyxcbiAgICBudW1FbGVtZW50czogaW5kaWNlcy5sZW5ndGgsXG4gICAgY29tcG9uZW50VHlwZTogNTEyMyxcbiAgICBtb2RlOiA0LFxuICB9O1xuICByZXR1cm4gQXJyYXlEYXRhO1xuICAvKnJldHVybiB7XG4gICAgICAgICAgZ2x0ZiA6IHtcbiAgICAgICAgICAgIGFjY2Vzc29ycyA6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBidWZmZXJWaWV3IDogMCxcbiAgICAgICAgICAgICAgICBieXRlT2Zmc2V0IDogMCxcbiAgICAgICAgICAgICAgICBjb3VudCA6NzIsXG4gICAgICAgICAgICAgICAgY29tcG9uZW50VHlwZSA6IDUxMjYsXG4gICAgICAgICAgICAgICAgdHlwZSA6ICdWRUMzJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYnVmZmVyVmlldyA6IDEsXG4gICAgICAgICAgICAgIGJ5dGVPZmZzZXQgOiAwLFxuICAgICAgICAgICAgICBjb3VudCA6IDcyLFxuICAgICAgICAgICAgICBjb21wb25lbnRUeXBlIDogNTEyNixcbiAgICAgICAgICAgICAgdHlwZSA6ICdWRUMzJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYnVmZmVyVmlldyA6IDIsXG4gICAgICAgICAgICAgIGJ5dGVPZmZzZXQgOiAwLFxuICAgICAgICAgICAgICBjb3VudCA6IDM2LFxuICAgICAgICAgICAgICBjb21wb25lbnRUeXBlIDogNTEyMyxcbiAgICAgICAgICAgICAgdHlwZSA6ICdTQ0FMQVInXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBidWZmZXJWaWV3IDogMyxcbiAgICAgICAgICAgICAgYnl0ZU9mZnNldCA6IDAsXG4gICAgICAgICAgICAgIGNvdW50IDogNDgsXG4gICAgICAgICAgICAgIGNvbXBvbmVudFR5cGUgOiA1MTI2LFxuICAgICAgICAgICAgICB0eXBlIDogJ1ZFQzInXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgIGJ1ZmZlclZpZXdzIDogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYnVmZmVyIDogMCxcbiAgICAgICAgICAgICAgICBieXRlTGVuZ3RoIDogcG9zaXRpb25zLmJ5dGVMZW5ndGgsXG4gICAgICAgICAgICAgICAgYnl0ZU9mZnNldCA6IDBcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGJ1ZmZlciA6IDEsXG4gICAgICAgICAgICAgICAgYnl0ZUxlbmd0aCA6IG5vcm1hbHMuYnl0ZUxlbmd0aCxcbiAgICAgICAgICAgICAgICBieXRlT2Zmc2V0IDogMFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYnVmZmVyIDogMixcbiAgICAgICAgICAgICAgICBieXRlTGVuZ3RoIDogaW5kaWNlcy5ieXRlTGVuZ3RoLFxuICAgICAgICAgICAgICAgIGJ5dGVPZmZzZXQgOiAwXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBidWZmZXIgOiAzLFxuICAgICAgICAgICAgICAgIGJ5dGVMZW5ndGggOiB0ZXhjb29yZC5ieXRlTGVuZ3RoLFxuICAgICAgICAgICAgICAgIGJ5dGVPZmZzZXQgOiAwXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgbWVzaGVzIDogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lIDogJ0N1YmUnLFxuICAgICAgICAgICAgICBwcmltaXRpdmVzIDogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXMgOiB7XG4gICAgICAgICAgICAgICAgICAgIE5PUk1BTCA6IDEsXG4gICAgICAgICAgICAgICAgICAgIFBPU0lUSU9OIDogMCxcbiAgICAgICAgICAgICAgICAgICAgVEVYQ09PUkRfMCA6IDNcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBpbmRpY2VzIDogMixcbiAgICAgICAgICAgICAgICAgIG1vZGUgOiA0XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXSxcbiAgICAgICAgICBub2RlcyA6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZSA6IFwiQ3ViZVwiLFxuICAgICAgICAgICAgICBtZXNoIDogMCxcbiAgICAgICAgICAgICAgY2hpbGRyZW4gOiBbMV1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWUgOiAnQ3ViZTInLFxuICAgICAgICAgICAgICBtZXNoIDogMCxcbiAgICAgICAgICAgICAgdHJhbnNsYXRpb24gOiBbMSwxLDFdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBiaW5hcnlCdWZmZXJzIDogW1xuICAgICAgICAgIHBvc2l0aW9ucy5idWZmZXIsIG5vcm1hbHMuYnVmZmVyLCBpbmRpY2VzLmJ1ZmZlciwgdGV4Y29vcmQuYnVmZmVyXG4gICAgICAgIF1cbiAgICAgIH07Ki9cbn1cblxuY29uc3QgY3JlYXRlQ29uZSA9IChyYWRpdXMgPSAyLCBoZWlnaHQgPSAyLCBudW1Db3JuZXJzID0gNCkgPT4ge1xuICBjb25zdCB2ZXJ0aWNlcyA9IFswLCAtaGVpZ2h0IC8gMiwgMF07XG4gIGNvbnN0IG5vcm1hbHMgPSBbXTtcbiAgY29uc3QgaW5kaWNlcyA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtQ29ybmVycyArIDE7IGkrKykge1xuICAgIGNvbnN0IGFuZ2xlID0gKDIgKiBpICogTWF0aC5QSSkgLyBudW1Db3JuZXJzO1xuICAgIGNvbnN0IHggPSBNYXRoLmNvcyhhbmdsZSkgKiByYWRpdXM7XG4gICAgY29uc3QgeiA9IE1hdGguc2luKGFuZ2xlKSAqIHJhZGl1cztcbiAgICBjb25zdCB5ID0gLWhlaWdodCAvIDI7XG4gICAgdmVydGljZXMucHVzaCh4LCAtaGVpZ2h0IC8gMiwgeik7XG4gICAgbm9ybWFscy5wdXNoKDAsIC0xLCAwKTtcbiAgfVxuICBmb3IgKGxldCBpID0gMDsgaSA8IG51bUNvcm5lcnM7IGkrKykge1xuICAgIGluZGljZXMucHVzaCgwLCBpICsgMSwgaSArIDIpO1xuICB9XG4gIC8vdmVydGljZXMucHVzaCh2ZXJ0aWNlc1sxXSwgLWhlaWdodC8yLCB2ZXJ0aWNlc1szXSlcbiAgY29uc3QgbiA9IHZlcnRpY2VzLmxlbmd0aCAvIDM7XG4gIGNvbnN0IHN0cmlkZSA9IDM7XG4gIGNvbnN0IHN0YXJ0ID0gbjtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IG51bUNvcm5lcnMgKyAyOyBpKyspIHtcbiAgICBjb25zdCBhbmdsZSA9ICgyICogaSAqIE1hdGguUEkpIC8gbnVtQ29ybmVycztcbiAgICBjb25zdCB4ID0gTWF0aC5jb3MoYW5nbGUpICogcmFkaXVzO1xuICAgIGNvbnN0IHogPSBNYXRoLnNpbihhbmdsZSkgKiByYWRpdXM7XG4gICAgY29uc3QgeSA9IC1oZWlnaHQgLyAyO1xuICAgIGNvbnN0IGEgPSBbdmVydGljZXNbaSAqIDNdLCB2ZXJ0aWNlc1tpICogMyArIDFdLCB2ZXJ0aWNlc1tpICogMyArIDJdXTtcbiAgICBjb25zdCBiID0gW3ZlcnRpY2VzW2kgKiAzICsgM10sIHZlcnRpY2VzW2kgKiAzICsgNF0sIHZlcnRpY2VzW2kgKiAzICsgNV1dO1xuICAgIGNvbnN0IGMgPSBbMCwgaGVpZ2h0IC8gMiwgMF07XG4gICAgaW5kaWNlcy5wdXNoKFxuICAgICAgc3RhcnQgKyBpICogc3RyaWRlICsgMixcbiAgICAgIHN0YXJ0ICsgaSAqIHN0cmlkZSArIDEsXG4gICAgICBzdGFydCArIGkgKiBzdHJpZGUgKyAzXG4gICAgKTtcbiAgICB2ZXJ0aWNlcy5wdXNoKC4uLmMsIC4uLmEsIC4uLmIpO1xuICAgIGNvbnN0IG5vcm1hbCA9IG5vcm1hbGl6ZShjcm9zcyhkaWZmKGIsIGMpLCBkaWZmKGEsIGMpKSk7XG4gICAgbm9ybWFscy5wdXNoKC4uLm5vcm1hbCwgLi4ubm9ybWFsLCAuLi5ub3JtYWwpO1xuICB9XG5cbiAgY29uc3QgX25vcm1hbCA9IG5ldyBGbG9hdDMyQXJyYXkobm9ybWFscyk7XG4gIGNvbnN0IF9wb3NpdGlvbiA9IG5ldyBGbG9hdDMyQXJyYXkodmVydGljZXMpO1xuICBjb25zdCBfaW5kaWNlcyA9IG5ldyBVaW50MTZBcnJheShpbmRpY2VzKTtcbiAgY29uc3QgQXJyYXlEYXRhID0ge1xuICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgIFBPU0lUSU9OOiB7XG4gICAgICAgIGxvY2F0aW9uOiAwLFxuICAgICAgICBjb3VudDogdmVydGljZXMubGVuZ3RoLFxuICAgICAgICBvZmZzZXQ6IDAsXG4gICAgICAgIHN0cmlkZTogMCxcbiAgICAgICAgbnVtQ29tcG9uZW50czogMyxcbiAgICAgICAgdHlwZTogNTEyNixcbiAgICAgICAgZGF0YTogX3Bvc2l0aW9uLFxuICAgICAgICBieXRlTGVuZ3RoOiBfcG9zaXRpb24uYnl0ZUxlbmd0aCxcbiAgICAgIH0sXG4gICAgICBOT1JNQUw6IHtcbiAgICAgICAgbG9jYXRpb246IDEsXG4gICAgICAgIGNvdW50OiBub3JtYWxzLmxlbmd0aCxcbiAgICAgICAgbnVtQ29tcG9uZW50czogMyxcbiAgICAgICAgb2Zmc2V0OiAwLFxuICAgICAgICBzdHJpZGU6IDAsXG4gICAgICAgIHR5cGU6IDUxMjYsXG4gICAgICAgIGRhdGE6IF9ub3JtYWwsXG4gICAgICAgIGJ5dGVMZW5ndGg6IF9ub3JtYWwuYnl0ZUxlbmd0aCxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBjb21wb25lbnRUeXBlOiA1MTIzLFxuICAgIGluZGljZXM6IF9pbmRpY2VzLFxuICAgIG51bUVsZW1lbnRzOiBpbmRpY2VzLmxlbmd0aCxcbiAgICBtb2RlOiA0LFxuICB9O1xuICByZXR1cm4gQXJyYXlEYXRhO1xufTtcblxuY29uc3QgY3JlYXRlQ2lyY2xlID0gKHJhZGl1cywgbnVtQ29ybmVycykgPT4ge1xuICBjb25zdCB2ZXJ0aWNlcyA9IFswLCAwLCAwXTtcbiAgY29uc3Qgbm9ybWFscyA9IFtdO1xuICBjb25zdCBpbmRpY2VzID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1Db3JuZXJzICsgMTsgaSsrKSB7XG4gICAgY29uc3QgYW5nbGUgPSAoMiAqIGkgKiBNYXRoLlBJKSAvIG51bUNvcm5lcnM7XG4gICAgY29uc3QgeCA9IE1hdGguY29zKGFuZ2xlKSAqIHJhZGl1cztcbiAgICBjb25zdCB6ID0gTWF0aC5zaW4oYW5nbGUpICogcmFkaXVzO1xuICAgXG4gICAgdmVydGljZXMucHVzaCh4LCAwLCB6KTtcbiAgICBub3JtYWxzLnB1c2goMCwgMSwgMCk7XG4gIH1cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1Db3JuZXJzOyBpKyspIHtcbiAgICBpbmRpY2VzLnB1c2goMCwgaSArIDEsIGkgKyAyKTtcbiAgfVxuXG4gIGNvbnN0IF9ub3JtYWwgPSBuZXcgRmxvYXQzMkFycmF5KG5vcm1hbHMpO1xuICBjb25zdCBfcG9zaXRpb24gPSBuZXcgRmxvYXQzMkFycmF5KHZlcnRpY2VzKTtcbiAgY29uc3QgX2luZGljZXMgPSBuZXcgVWludDE2QXJyYXkoaW5kaWNlcyk7XG5cbiAgY29uc3QgQXJyYXlEYXRhID0ge1xuICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgIFBPU0lUSU9OOiB7XG4gICAgICAgIGxvY2F0aW9uOiAwLFxuICAgICAgICBjb3VudDogdmVydGljZXMubGVuZ3RoLFxuICAgICAgICBvZmZzZXQ6IDAsXG4gICAgICAgIHN0cmlkZTogMCxcbiAgICAgICAgbnVtQ29tcG9uZW50czogMyxcbiAgICAgICAgdHlwZTogNTEyNixcbiAgICAgICAgZGF0YTogX3Bvc2l0aW9uLFxuICAgICAgICBieXRlTGVuZ3RoOiBfcG9zaXRpb24uYnl0ZUxlbmd0aCxcbiAgICAgIH0sXG4gICAgICBOT1JNQUw6IHtcbiAgICAgICAgbG9jYXRpb246IDEsXG4gICAgICAgIGNvdW50OiBub3JtYWxzLmxlbmd0aCxcbiAgICAgICAgbnVtQ29tcG9uZW50czogMyxcbiAgICAgICAgb2Zmc2V0OiAwLFxuICAgICAgICBzdHJpZGU6IDAsXG4gICAgICAgIHR5cGU6IDUxMjYsXG4gICAgICAgIGRhdGE6IF9ub3JtYWwsXG4gICAgICAgIGJ5dGVMZW5ndGg6IF9ub3JtYWwuYnl0ZUxlbmd0aCxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBjb21wb25lbnRUeXBlOiA1MTIzLFxuICAgIGluZGljZXM6IF9pbmRpY2VzLFxuICAgIG51bUVsZW1lbnRzOiBpbmRpY2VzLmxlbmd0aCxcbiAgICBtb2RlOiA0LFxuICB9O1xuICByZXR1cm4gQXJyYXlEYXRhO1xufTtcblxuZXhwb3J0IHsgY3JlYXRlQm94LCBjcmVhdGVDb25lLCBjcmVhdGVDaXJjbGV9O1xuIiwiZnVuY3Rpb24gZ2V0R0xUeXBlRm9yVHlwZWRBcnJheShnbCwgdHlwZWRBcnJheSkge1xuICBpZiAodHlwZWRBcnJheSBpbnN0YW5jZW9mIEludDhBcnJheSkge1xuICAgIHJldHVybiBnbC5CWVRFO1xuICB9IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgaWYgKHR5cGVkQXJyYXkgaW5zdGFuY2VvZiBVaW50OEFycmF5KSB7XG4gICAgcmV0dXJuIGdsLlVOU0lHTkVEX0JZVEU7XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICBpZiAodHlwZWRBcnJheSBpbnN0YW5jZW9mIFVpbnQ4Q2xhbXBlZEFycmF5KSB7XG4gICAgcmV0dXJuIGdsLlVOU0lHTkVEX0JZVEU7XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICBpZiAodHlwZWRBcnJheSBpbnN0YW5jZW9mIEludDE2QXJyYXkpIHtcbiAgICByZXR1cm4gZ2wuU0hPUlQ7XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICBpZiAodHlwZWRBcnJheSBpbnN0YW5jZW9mIFVpbnQxNkFycmF5KSB7XG4gICAgcmV0dXJuIGdsLlVOU0lHTkVEX1NIT1JUO1xuICB9IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgaWYgKHR5cGVkQXJyYXkgaW5zdGFuY2VvZiBJbnQzMkFycmF5KSB7XG4gICAgcmV0dXJuIGdsLklOVDtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gIGlmICh0eXBlZEFycmF5IGluc3RhbmNlb2YgVWludDMyQXJyYXkpIHtcbiAgICByZXR1cm4gZ2wuVU5TSUdORURfSU5UO1xuICB9IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgaWYgKHR5cGVkQXJyYXkgaW5zdGFuY2VvZiBGbG9hdDMyQXJyYXkpIHtcbiAgICByZXR1cm4gZ2wuRkxPQVQ7XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICByZXR1cm4gZmFsc2U7XG59XG5mdW5jdGlvbiBleHBhbmRlZFR5cGVkQXJyYXkoYXJyYXkpIHtcbiAgbGV0IGN1cnNvciA9IDA7XG4gIGFycmF5LnB1c2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgZm9yIChsZXQgaWkgPSAwOyBpaSA8IGFyZ3VtZW50cy5sZW5ndGg7ICsraWkpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gYXJndW1lbnRzW2lpXTtcblxuICAgICAgaWYgKFxuICAgICAgICB2YWx1ZSBpbnN0YW5jZW9mIEFycmF5IHx8XG4gICAgICAgICh2YWx1ZS5idWZmZXIgJiYgdmFsdWUuYnVmZmVyIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpXG4gICAgICApIHtcbiAgICAgICAgZm9yIChsZXQgamogPSAwOyBqaiA8IHZhbHVlLmxlbmd0aDsgKytqaikge1xuICAgICAgICAgIGFycmF5W2N1cnNvcisrXSA9IHZhbHVlW2pqXTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXJyYXlbY3Vyc29yKytdID0gdmFsdWU7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBhcnJheTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVW5pZm9ybVNldHRlcnMoZ2wsIHByb2dyYW0pIHtcbiAgY29uc3QgY3JlYXRlVGV4dHVyZVNldHRlciA9IChwcm9ncmFtLCB1bmlmb3JtSW5mbykgPT4ge1xuICAgIGNvbnN0IGxvY2F0aW9uID0gZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIHVuaWZvcm1JbmZvLm5hbWUpO1xuXG4gICAgcmV0dXJuICh0ZXhCbG9ja051bSkgPT4ge1xuICAgICAgZ2wudW5pZm9ybTFpKGxvY2F0aW9uLCB0ZXhCbG9ja051bSk7XG4gICAgfTtcbiAgfTtcbiAgZnVuY3Rpb24gY3JlYXRlVW5pZm9ybVNldHRlcihwcm9ncmFtLCB1bmlmb3JtSW5mbykge1xuICAgIGNvbnN0IGxvY2F0aW9uID0gZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIHVuaWZvcm1JbmZvLm5hbWUpO1xuXG4gICAgY29uc3QgdHlwZSA9IHVuaWZvcm1JbmZvLnR5cGU7XG5cbiAgICBjb25zdCBpc0FycmF5ID1cbiAgICAgIHVuaWZvcm1JbmZvLnNpemUgPiAxICYmIHVuaWZvcm1JbmZvLm5hbWUuc3Vic3RyKC0zKSA9PT0gXCJbMF1cIjtcblxuICAgIGlmICh0eXBlID09PSBnbC5GTE9BVCAmJiBpc0FycmF5KSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgZ2wudW5pZm9ybTFmdihsb2NhdGlvbiwgdik7XG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAodHlwZSA9PT0gZ2wuRkxPQVQpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgICAgICBnbC51bmlmb3JtMWYobG9jYXRpb24sIHYpO1xuICAgICAgfTtcbiAgICB9XG4gICAgaWYgKHR5cGUgPT09IGdsLkZMT0FUX1ZFQzIpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgICAgICBnbC51bmlmb3JtMmZ2KGxvY2F0aW9uLCB2KTtcbiAgICAgIH07XG4gICAgfVxuICAgIGlmICh0eXBlID09PSBnbC5GTE9BVF9WRUMzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgZ2wudW5pZm9ybTNmdihsb2NhdGlvbiwgdik7XG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAodHlwZSA9PT0gZ2wuRkxPQVRfVkVDNCkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIGdsLnVuaWZvcm00ZnYobG9jYXRpb24sIHYpO1xuICAgICAgfTtcbiAgICB9XG4gICAgaWYgKHR5cGUgPT09IGdsLklOVCAmJiBpc0FycmF5KSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgZ2wudW5pZm9ybTFpdihsb2NhdGlvbiwgdik7XG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAodHlwZSA9PT0gZ2wuSU5UKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgZ2wudW5pZm9ybTFpKGxvY2F0aW9uLCB2KTtcbiAgICAgIH07XG4gICAgfVxuICAgIGlmICh0eXBlID09PSBnbC5JTlRfVkVDMikge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIGdsLnVuaWZvcm0yaXYobG9jYXRpb24sIHYpO1xuICAgICAgfTtcbiAgICB9XG4gICAgaWYgKHR5cGUgPT09IGdsLklOVF9WRUMzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgZ2wudW5pZm9ybTNpdihsb2NhdGlvbiwgdik7XG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAodHlwZSA9PT0gZ2wuSU5UX1ZFQzQpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgICAgICBnbC51bmlmb3JtNGl2KGxvY2F0aW9uLCB2KTtcbiAgICAgIH07XG4gICAgfVxuICAgIGlmICh0eXBlID09PSBnbC5CT09MKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgZ2wudW5pZm9ybTFpdihsb2NhdGlvbiwgdik7XG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAodHlwZSA9PT0gZ2wuQk9PTF9WRUMyKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgZ2wudW5pZm9ybTJpdihsb2NhdGlvbiwgdik7XG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAodHlwZSA9PT0gZ2wuQk9PTF9WRUMzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgZ2wudW5pZm9ybTNpdihsb2NhdGlvbiwgdik7XG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAodHlwZSA9PT0gZ2wuQk9PTF9WRUM0KSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgZ2wudW5pZm9ybTRpdihsb2NhdGlvbiwgdik7XG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAodHlwZSA9PT0gZ2wuRkxPQVRfTUFUMikge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIGdsLnVuaWZvcm1NYXRyaXgyZnYobG9jYXRpb24sIGZhbHNlLCB2KTtcbiAgICAgIH07XG4gICAgfVxuICAgIGlmICh0eXBlID09PSBnbC5GTE9BVF9NQVQzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgZ2wudW5pZm9ybU1hdHJpeDNmdihsb2NhdGlvbiwgZmFsc2UsIHYpO1xuICAgICAgfTtcbiAgICB9XG4gICAgaWYgKHR5cGUgPT09IGdsLkZMT0FUX01BVDQpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgICAgICBnbC51bmlmb3JtTWF0cml4NGZ2KGxvY2F0aW9uLCBmYWxzZSwgdik7XG4gICAgICB9O1xuICAgIH1cbiAgfVxuICBjb25zdCB1bmlmb3JtU2V0dGVycyA9IHt9O1xuICBjb25zdCB0ZXh0dXJlU2V0dGVycyA9IHt9O1xuICBjb25zdCBudW1Vbmlmb3JtcyA9IGdsLmdldFByb2dyYW1QYXJhbWV0ZXIocHJvZ3JhbSwgZ2wuQUNUSVZFX1VOSUZPUk1TKTtcblxuICBmb3IgKGxldCBpaSA9IDA7IGlpIDwgbnVtVW5pZm9ybXM7ICsraWkpIHtcbiAgICBjb25zdCB1bmlmb3JtSW5mbyA9IGdsLmdldEFjdGl2ZVVuaWZvcm0ocHJvZ3JhbSwgaWkpO1xuICAgIGlmICghdW5pZm9ybUluZm8pIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBsZXQgbmFtZSA9IHVuaWZvcm1JbmZvLm5hbWU7XG4gICAgaWYgKHVuaWZvcm1JbmZvLnR5cGUgPT09IGdsLlNBTVBMRVJfMkQpIHtcbiAgICAgIHRleHR1cmVTZXR0ZXJzW25hbWVdID0gY3JlYXRlVGV4dHVyZVNldHRlcihwcm9ncmFtLCB1bmlmb3JtSW5mbyk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAobmFtZS5zdWJzdHIoLTMpID09PSBcIlswXVwiKSB7XG4gICAgICBuYW1lID0gbmFtZS5zdWJzdHIoMCwgbmFtZS5sZW5ndGggLSAzKTtcbiAgICB9XG4gICAgaWYgKHVuaWZvcm1JbmZvLnNpemUgPiAxKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHVuaWZvcm1JbmZvLnNpemU7IGkrKykge1xuICAgICAgICBjb25zdCBvYmogPSB7XG4gICAgICAgICAgc2l6ZTogdW5pZm9ybUluZm8uc2l6ZSxcbiAgICAgICAgICB0eXBlOiB1bmlmb3JtSW5mby50eXBlLFxuICAgICAgICAgIG5hbWU6IG5hbWUgKyBgWyR7aX1dYCxcbiAgICAgICAgfTtcbiAgICAgICAgdW5pZm9ybVNldHRlcnNbbmFtZSArIGBbJHtpfV1gXSA9IGNyZWF0ZVVuaWZvcm1TZXR0ZXIocHJvZ3JhbSwgb2JqKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc2V0dGVyID0gY3JlYXRlVW5pZm9ybVNldHRlcihwcm9ncmFtLCB1bmlmb3JtSW5mbyk7XG4gICAgICB1bmlmb3JtU2V0dGVyc1tuYW1lXSA9IHNldHRlcjtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHsgdW5pZm9ybVNldHRlcnMsIHRleHR1cmVTZXR0ZXJzIH07XG59XG5cbmNsYXNzIFByb2dyYW1JbmZvIHtcbiAgY29uc3RydWN0b3IodnMsIGZzKSB7XG4gICAgdGhpcy52cyA9IHZzO1xuICAgIHRoaXMuZnMgPSBmcztcbiAgICB0aGlzLlZBTyA9IG51bGw7XG4gICAgdGhpcy51bmlmb3JtU2V0dGVycyA9IG51bGw7XG4gICAgdGhpcy52ZXJ0ZXhTaGFkZXIgPSBudWxsO1xuICAgIHRoaXMuZnJhZ21lbnRTaGFkZXIgPSBudWxsO1xuICAgIHRoaXMucHJvZ3JhbSA9IG51bGw7XG4gICAgdGhpcy5nbCA9IG51bGw7XG4gIH1cbiAgc2V0Q29udGV4dChnbENvbnRleHRXcmFwcGVyKSB7XG4gICAgdGhpcy5jb250ZXh0ID0gZ2xDb250ZXh0V3JhcHBlcjtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBjcmVhdGVVbmlmb3JtU2V0dGVycygpIHtcbiAgICBjb25zdCB7IGdsIH0gPSB0aGlzLmNvbnRleHQ7XG4gICAgY29uc3QgeyB1bmlmb3JtU2V0dGVycywgdGV4dHVyZVNldHRlcnMgfSA9IGNyZWF0ZVVuaWZvcm1TZXR0ZXJzKFxuICAgICAgZ2wsXG4gICAgICB0aGlzLnByb2dyYW1cbiAgICApO1xuICAgIHRoaXMudGV4dHVyZVNldHRlcnMgPSB0ZXh0dXJlU2V0dGVycztcbiAgICB0aGlzLnVuaWZvcm1TZXR0ZXJzID0gdW5pZm9ybVNldHRlcnM7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgY29tcGlsZVNoYWRlcnMoKSB7XG4gICAgY29uc3QgeyBnbCB9ID0gdGhpcy5jb250ZXh0O1xuICAgIHRoaXMudmVydGV4U2hhZGVyID0gZ2wuY3JlYXRlU2hhZGVyKGdsLlZFUlRFWF9TSEFERVIpO1xuICAgIGdsLnNoYWRlclNvdXJjZSh0aGlzLnZlcnRleFNoYWRlciwgdGhpcy52cyk7XG4gICAgZ2wuY29tcGlsZVNoYWRlcih0aGlzLnZlcnRleFNoYWRlcik7XG4gICAgaWYgKCFnbC5nZXRTaGFkZXJQYXJhbWV0ZXIodGhpcy52ZXJ0ZXhTaGFkZXIsIGdsLkNPTVBJTEVfU1RBVFVTKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGdsLmdldFNoYWRlckluZm9Mb2codGhpcy52ZXJ0ZXhTaGFkZXIpKTtcbiAgICB9XG5cbiAgICB0aGlzLmZyYWdtZW50U2hhZGVyID0gZ2wuY3JlYXRlU2hhZGVyKGdsLkZSQUdNRU5UX1NIQURFUik7XG4gICAgZ2wuc2hhZGVyU291cmNlKHRoaXMuZnJhZ21lbnRTaGFkZXIsIHRoaXMuZnMpO1xuICAgIGdsLmNvbXBpbGVTaGFkZXIodGhpcy5mcmFnbWVudFNoYWRlcik7XG4gICAgaWYgKCFnbC5nZXRTaGFkZXJQYXJhbWV0ZXIodGhpcy5mcmFnbWVudFNoYWRlciwgZ2wuQ09NUElMRV9TVEFUVVMpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoZ2wuZ2V0U2hhZGVySW5mb0xvZyh0aGlzLmZyYWdtZW50U2hhZGVyKSk7XG4gICAgfVxuXG4gICAgdGhpcy5wcm9ncmFtID0gZ2wuY3JlYXRlUHJvZ3JhbSgpO1xuICAgIGdsLmF0dGFjaFNoYWRlcih0aGlzLnByb2dyYW0sIHRoaXMudmVydGV4U2hhZGVyKTtcbiAgICBnbC5hdHRhY2hTaGFkZXIodGhpcy5wcm9ncmFtLCB0aGlzLmZyYWdtZW50U2hhZGVyKTtcbiAgICBnbC5saW5rUHJvZ3JhbSh0aGlzLnByb2dyYW0pO1xuICAgIGlmICghZ2wuZ2V0UHJvZ3JhbVBhcmFtZXRlcih0aGlzLnByb2dyYW0sIGdsLkxJTktfU1RBVFVTKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGdsLmdldFByb2dyYW1JbmZvTG9nKHRoaXMucHJvZ3JhbSkpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBzZXRVbmlmb3Jtcyh1bmlmb3Jtcykge1xuICAgIHRoaXMuY29udGV4dC51c2VQcm9ncmFtSW5mbyh0aGlzKTtcbiAgICBPYmplY3Qua2V5cyh1bmlmb3JtcykuZm9yRWFjaCgobmFtZSkgPT4ge1xuICAgICAgY29uc3Qgc2V0dGVyID0gdGhpcy51bmlmb3JtU2V0dGVyc1tuYW1lXTtcbiAgICAgIGlmIChzZXR0ZXIpIHNldHRlcih1bmlmb3Jtc1tuYW1lXSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgc2V0VGV4dHVyZVVuaWZvcm1Vbml0KG5hbWUsIHVuaXQpIHtcbiAgICB0aGlzLmNvbnRleHQudXNlUHJvZ3JhbUluZm8odGhpcyk7XG4gICAgY29uc3Qgc2V0dGVyID0gdGhpcy50ZXh0dXJlU2V0dGVyc1tuYW1lXTtcbiAgICBpZiAoc2V0dGVyKSBzZXR0ZXIodW5pdCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cblxuZXhwb3J0IHsgZXhwYW5kZWRUeXBlZEFycmF5LCBQcm9ncmFtSW5mbywgZ2V0R0xUeXBlRm9yVHlwZWRBcnJheSB9O1xuIiwiaW1wb3J0IGdsc2wgZnJvbSBcIi4vZ2xzbFwiO1xuaW1wb3J0IHsgUHJvZ3JhbUluZm8gfSBmcm9tIFwiLi4vLi4vcHJvZ3JhbUluZm9cIjtcbmNvbnN0IHZlcnQgPSBnbHNsYCN2ZXJzaW9uIDMwMCBlc1xuXG5wcmVjaXNpb24gaGlnaHAgZmxvYXQ7XG5cbnVuaWZvcm0gbWF0NCB3b3JsZFZpZXdQcm9qZWN0aW9uO1xuXG5cbmxheW91dChsb2NhdGlvbiA9IDApIGluIHZlYzQgYV9wb3NpdGlvbjtcbnZvaWQgbWFpbigpIHtcbiAgZ2xfUG9zaXRpb24gPSB3b3JsZFZpZXdQcm9qZWN0aW9uICogYV9wb3NpdGlvbjtcbiAgZ2xfUG9pbnRTaXplID0gMTAuMDtcbn1gO1xuY29uc3QgZnJhZyA9IGdsc2xgI3ZlcnNpb24gMzAwIGVzXG5wcmVjaXNpb24gaGlnaHAgZmxvYXQ7XG4gXG5cblxudW5pZm9ybSB2ZWM0IHVfY29sb3I7XG5vdXQgdmVjNCBvdXRDb2xvcjtcbnZvaWQgbWFpbigpIHtcbiAgXG4gIFxuICBvdXRDb2xvciA9IHVfY29sb3I7XG4gXG4gIFxuICBcbn1cbmA7XG5leHBvcnQgZGVmYXVsdCBuZXcgUHJvZ3JhbUluZm8odmVydCwgZnJhZyk7XG4iLCJcbmltcG9ydCBnbHNsIGZyb20gXCIuL2dsc2xcIlxuaW1wb3J0IHsgUHJvZ3JhbUluZm8gfSBmcm9tIFwiLi4vLi4vcHJvZ3JhbUluZm9cIlxuY29uc3QgdmVydCA9IGdsc2xgI3ZlcnNpb24gMzAwIGVzXG4gXG5sYXlvdXQobG9jYXRpb24gPSAwKSBpbiB2ZWM0IGFfcG9zaXRpb247XG5sYXlvdXQobG9jYXRpb24gPSAxKSBpbiB2ZWMzIGFfbm9ybWFsO1xuXG5sYXlvdXQobG9jYXRpb24gPSA0KSBpbiB2ZWMyIGFfdGV4Y29vcmQ7XG5sYXlvdXQobG9jYXRpb24gPSA1KSBpbiBtYXQ0IGlfbWF0cml4O1xuXG51bmlmb3JtIG1hdDQgd29ybGRNYXRyaXg7XG51bmlmb3JtIG1hdDQgd29ybGRWaWV3UHJvamVjdGlvbjtcbnVuaWZvcm0gdmVjMyB1X2xpZ2h0V29ybGRQb3NpdGlvbjtcbnVuaWZvcm0gdmVjMyB1X3ZpZXdXb3JsZFBvc2l0aW9uO1xuXG5vdXQgdmVjMyB2X25vcm1hbDtcbm91dCB2ZWMyIHZfdGV4Y29vcmQ7XG5vdXQgdmVjMyB2X3N1cmZhY2VUb0xpZ2h0O1xub3V0IHZlYzMgdl9zdXJmYWNlVG9WaWV3O1xuXG52b2lkIG1haW4oKSB7XG5cbiAgICB2ZWMzIHN1cmZhY2VXb3JsZFBvc2l0aW9uID0gKHdvcmxkTWF0cml4ICogYV9wb3NpdGlvbikueHl6O1xuICAgIHZfc3VyZmFjZVRvTGlnaHQgPSB1X2xpZ2h0V29ybGRQb3NpdGlvbiAtIHN1cmZhY2VXb3JsZFBvc2l0aW9uO1xuXG4gICAgdmVjNCBwb3MgPSAgIHdvcmxkVmlld1Byb2plY3Rpb24gKiBhX3Bvc2l0aW9uICA7XG4gICAgZ2xfUG9zaXRpb24gPSBwb3M7XG5cbiAgICB2X3RleGNvb3JkID0gYV90ZXhjb29yZDtcbiAgICB2X25vcm1hbCA9IG1hdDMoICAgd29ybGRNYXRyaXggKSAqIGFfbm9ybWFsO1xuICAgIHZfc3VyZmFjZVRvVmlldyA9IHVfdmlld1dvcmxkUG9zaXRpb24gLSBzdXJmYWNlV29ybGRQb3NpdGlvbjtcbiAgICAgIFxufWBcbmNvbnN0IGZyYWcgPSBnbHNsYCN2ZXJzaW9uIDMwMCBlc1xucHJlY2lzaW9uIGhpZ2hwIGZsb2F0O1xuIFxuXG5pbiB2ZWMyIHZfdGV4Y29vcmQ7XG5cbmluIHZlYzMgdl9ub3JtYWw7XG5pbiB2ZWMzIHZfc3VyZmFjZVRvVmlldztcbmluIHZlYzMgdl9zdXJmYWNlVG9MaWdodDtcblxuXG4vL3VuaWZvcm0gc2FtcGxlcjJEIHVfdGV4dHVyZTE7XG51bmlmb3JtIGZsb2F0IHVfc2hpbmluZXNzO1xudW5pZm9ybSB2ZWM0IHVfY29sb3I7XG51bmlmb3JtIHZlYzQgdV9hbWJpZW50TGlnaHQ7XG5vdXQgdmVjNCBvdXRDb2xvcjtcblxuXG52b2lkIG1haW4oKSB7XG4gIFxuICB2ZWMzIHN1cmZhY2VUb0xpZ2h0RGlyZWN0aW9uID0gbm9ybWFsaXplKHZfc3VyZmFjZVRvTGlnaHQpO1xuICB2ZWMzIHN1cmZhY2VUb1ZpZXdEaXJlY3Rpb24gPSBub3JtYWxpemUodl9zdXJmYWNlVG9WaWV3KTtcbiAgdmVjMyBoYWxmVmVjdG9yID0gbm9ybWFsaXplKHN1cmZhY2VUb0xpZ2h0RGlyZWN0aW9uICsgc3VyZmFjZVRvVmlld0RpcmVjdGlvbik7XG5cbiAgdmVjMyBub3JtYWwgPSBub3JtYWxpemUodl9ub3JtYWwpO1xuICBmbG9hdCBsaWdodCA9IGRvdCh2X25vcm1hbCwgc3VyZmFjZVRvTGlnaHREaXJlY3Rpb24pO1xuICBmbG9hdCBzcGVjdWxhciA9IDAuMDtcbiAgaWYgKGxpZ2h0ID4gMC4wKSB7XG4gICAgc3BlY3VsYXIgPSBwb3coZG90KG5vcm1hbCwgaGFsZlZlY3RvciksIHVfc2hpbmluZXNzKTtcbiAgfVxuXG4gIG91dENvbG9yID0gIHVfY29sb3I7XG4gIG91dENvbG9yLnJnYiAqPSBsaWdodDtcbiAgb3V0Q29sb3IucmdiICs9IHVfYW1iaWVudExpZ2h0LnJnYiAqMC4zO1xuICBcbn1cbmBcblxuZXhwb3J0IGRlZmF1bHQgbmV3IFByb2dyYW1JbmZvKHZlcnQsIGZyYWcpIiwiY29uc3QgZ2xzbCA9IHggPT4geFxuZXhwb3J0IGRlZmF1bHQgZ2xzbCIsImltcG9ydCBkZWZhdWx0UHJvZ3JhbSBmcm9tIFwiLi9EZWZhdWx0XCI7XG5pbXBvcnQgbGlnaHRpbmdQcm9ncmFtIGZyb20gXCIuL0xpZ2h0aW5nXCI7XG5cbmV4cG9ydCB7ZGVmYXVsdFByb2dyYW0sIGxpZ2h0aW5nUHJvZ3JhbX0iLCJjb25zdCBzZXRDYW52YXNTaXplID0gKGN0eCwgd2lkdGgsIGhlaWdodCkgPT4ge1xuICBjdHguY2FudmFzLndpZHRoID0gd2lkdGg7XG4gIGN0eC5jYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xufTtcblxuY29uc3QgbWFrZVRleHR1cmUgPSAoZ2wsIGN0eCkgPT4ge1xuICBjb25zdCB0ZXggPSBnbC5jcmVhdGVUZXh0dXJlKCk7XG4gIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIHRleCk7XG5cbiAgZ2wudGV4SW1hZ2UyRChcbiAgICBnbC5URVhUVVJFXzJELFxuICAgIDAsXG4gICAgZ2wuUkdCQSxcbiAgICBnbC5SR0JBLFxuICAgIGdsLlVOU0lHTkVEX0JZVEUsXG4gICAgY3R4LmNhbnZhc1xuICApO1xuICByZXR1cm4gdGV4O1xufTtcbmNvbnN0IG1ha2VTdHJpcGVUZXh0dXJlID0gKGdsLCBvcHRpb25zKSA9PiB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICB2YXIgd2lkdGggPSBvcHRpb25zLndpZHRoIHx8IDQ7XG4gIHZhciBoZWlnaHQgPSBvcHRpb25zLmhlaWdodCB8fCA0O1xuICB2YXIgY29sb3IxID0gb3B0aW9ucy5jb2xvcjEgfHwgXCJyZ2JhKDEsMCwwLDAuMSlcIjtcbiAgdmFyIGNvbG9yMiA9IG9wdGlvbnMuY29sb3IyIHx8IFwicmdiYSgxLDEsMSwwLjUpXCI7XG4gIGNvbnN0IGN0eCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIikuZ2V0Q29udGV4dChcIjJkXCIpO1xuICBzZXRDYW52YXNTaXplKGN0eCwgd2lkdGgsIGhlaWdodCk7XG5cbiAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yMTtcbiAgY3R4LmZpbGxSZWN0KDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xuICBjdHguZmlsbFN0eWxlID0gY29sb3IyO1xuICBjdHguZmlsbFJlY3QoMCwgMCwgd2lkdGgsIGhlaWdodCAvIDIpO1xuXG4gIHJldHVybiBtYWtlVGV4dHVyZShnbCwgY3R4KTtcbn07XG5jb25zdCBtYWtlU3RyaXBlSW1nID0gKG9wdGlvbnMpID0+IHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHZhciB3aWR0aCA9IG9wdGlvbnMud2lkdGggfHwgNDtcbiAgdmFyIGhlaWdodCA9IG9wdGlvbnMuaGVpZ2h0IHx8IDQ7XG4gIHZhciBjb2xvcjEgPSBvcHRpb25zLmNvbG9yMSB8fCBcInJnYmEoMSwwLDAsMC41KVwiO1xuICB2YXIgY29sb3IyID0gb3B0aW9ucy5jb2xvcjIgfHwgXCJyZ2JhKDAsMCwxLDEpXCI7XG4gIGNvbnN0IGN0eCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIikuZ2V0Q29udGV4dChcIjJkXCIpO1xuICBzZXRDYW52YXNTaXplKGN0eCwgd2lkdGgsIGhlaWdodCk7XG5cbiAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yMTtcbiAgY3R4LmZpbGxSZWN0KDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xuICBjdHguZmlsbFN0eWxlID0gY29sb3IyO1xuICBjdHguZmlsbFJlY3QoMCwgMCwgd2lkdGgsIGhlaWdodCAvIDIpO1xuXG4gIHJldHVybiBjdHguY2FudmFzO1xufTtcbmNvbnN0IG1ha2VJbWdGcm9tU3ZnWG1sID0gKHhtbCwgb3B0aW9ucyA9IHt9KSA9PiB7XG4gIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIHZhciBzdmc2NCA9IGJ0b2EoeG1sKTtcbiAgdmFyIGI2NFN0YXJ0ID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFwiO1xuICB2YXIgaW1hZ2U2NCA9IGI2NFN0YXJ0ICsgc3ZnNjQ7XG4gIGltZy5zcmMgPSBpbWFnZTY0O1xuXG4gIGNvbnN0IHdpZHRoID0gb3B0aW9ucy53aWR0aCB8fCAxMDA7XG4gIGNvbnN0IGhlaWdodCA9IG9wdGlvbnMuaGVpZ2h0IHx8IDEwMDtcbiAgY29uc3QgeCA9IG9wdGlvbnMueCB8fCAxO1xuICBjb25zdCB5ID0gb3B0aW9ucy55IHx8IDUwO1xuXG4gIGNvbnN0IGN0eCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIikuZ2V0Q29udGV4dChcIjJkXCIpO1xuICBzZXRDYW52YXNTaXplKGN0eCwgd2lkdGgsIGhlaWdodCk7XG5cbiAgY3R4LmRyYXdJbWFnZShpbWcsIHgsIHksIHdpZHRoLCBoZWlnaHQpO1xuICBjdHguZmlsbFN0eWxlID0gXCJyZ2JhKDAsMCwwLDEpXCI7XG4gIGN0eC5maWxsUmVjdCgwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcbiAgcmV0dXJuIGN0eC5pbWc7XG59O1xuY29uc3Qgc2V0VGV4dHVyZVVuaXRzID0gKGdsLCB0ZXh0dXJlLCB1bml0TnVtKSA9PiB7XG4gIGdsLmFjdGl2ZVRleHR1cmUoZ2wuVEVYVFVSRTAgKyB1bml0TnVtKTtcbiAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgdGV4dHVyZSk7XG59O1xuXG5jbGFzcyBUZXh0dXJlIHtcbiAgc3RhdGljIG1ha2VJbWdGcm9tU3ZnWG1sID0gbWFrZUltZ0Zyb21TdmdYbWw7XG4gIGNvbnN0cnVjdG9yKGdsKSB7XG4gICAgdGhpcy50ZXh0dXJlID0gZ2wuY3JlYXRlVGV4dHVyZSgpO1xuICAgIHRoaXMuZnJvbUltYWdlID0gKGltYWdlKSA9PiB7XG4gICAgICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCB0aGlzLnRleHR1cmUpO1xuICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX1dSQVBfUywgZ2wuQ0xBTVBfVE9fRURHRSk7XG4gICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfV1JBUF9ULCBnbC5DTEFNUF9UT19FREdFKTtcbiAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9NSU5fRklMVEVSLCBnbC5ORUFSRVNUKTtcbiAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9NQUdfRklMVEVSLCBnbC5ORUFSRVNUKTtcbiAgICAgIGdsLnRleEltYWdlMkQoXG4gICAgICAgIGdsLlRFWFRVUkVfMkQsXG4gICAgICAgIDAsXG4gICAgICAgIGdsLlJHQkEsXG4gICAgICAgIGdsLlJHQkEsXG4gICAgICAgIGdsLlVOU0lHTkVEX0JZVEUsXG4gICAgICAgIGltYWdlXG4gICAgICApO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICB0aGlzLmdldFRleHR1cmUgPSAoKSA9PiB0aGlzLnRleHR1cmU7XG4gIH1cbn1cbmV4cG9ydCB7IG1ha2VJbWdGcm9tU3ZnWG1sLCBtYWtlU3RyaXBlSW1nLCBUZXh0dXJlLCBzZXRUZXh0dXJlVW5pdHMgfTtcbiIsImNvbnN0IEFBQkIgPSByZXF1aXJlKCcuL3NyYy9hYWJiJylcbmNvbnN0IG0zID0gcmVxdWlyZSgnLi9zcmMvbTMnKVxuY29uc3QgbTQgPSByZXF1aXJlKCcuL3NyYy9tNCcpXG5jb25zdCB7Tm9kZSAsIFRSU309IHJlcXVpcmUoJy4vc3JjL25vZGUnKVxuY29uc3QgdmVjdG9yID0gcmVxdWlyZSgnLi9zcmMvdmVjdG9yJylcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgQUFCQiwgbTMsIG00LCBOb2RlLCBUUlMsIHZlY3RvclxufSIsImNsYXNzIEFBQkJ7XG4gICAgY29uc3RydWN0b3IobWluLCBtYXgpe1xuICAgICAgICB0aGlzLm1pbiA9IG1pblxuICAgICAgICB0aGlzLm1heCA9IG1heFxuICAgIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gQUFCQiIsImNvbnN0IG0zID0ge1xuICAgIG11bHRpcGx5IDogZnVuY3Rpb24oYiwgYSkge1xuICAgICAgICB2YXIgYTAwID0gYVswICogMyArIDBdO1xuICAgICAgICB2YXIgYTAxID0gYVswICogMyArIDFdO1xuICAgICAgICB2YXIgYTAyID0gYVswICogMyArIDJdO1xuICAgICAgICB2YXIgYTEwID0gYVsxICogMyArIDBdO1xuICAgICAgICB2YXIgYTExID0gYVsxICogMyArIDFdO1xuICAgICAgICB2YXIgYTEyID0gYVsxICogMyArIDJdO1xuICAgICAgICB2YXIgYTIwID0gYVsyICogMyArIDBdO1xuICAgICAgICB2YXIgYTIxID0gYVsyICogMyArIDFdO1xuICAgICAgICB2YXIgYTIyID0gYVsyICogMyArIDJdO1xuICAgICAgICB2YXIgYjAwID0gYlswICogMyArIDBdO1xuICAgICAgICB2YXIgYjAxID0gYlswICogMyArIDFdO1xuICAgICAgICB2YXIgYjAyID0gYlswICogMyArIDJdO1xuICAgICAgICB2YXIgYjEwID0gYlsxICogMyArIDBdO1xuICAgICAgICB2YXIgYjExID0gYlsxICogMyArIDFdO1xuICAgICAgICB2YXIgYjEyID0gYlsxICogMyArIDJdO1xuICAgICAgICB2YXIgYjIwID0gYlsyICogMyArIDBdO1xuICAgICAgICB2YXIgYjIxID0gYlsyICogMyArIDFdO1xuICAgICAgICB2YXIgYjIyID0gYlsyICogMyArIDJdO1xuICAgIFxuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgIGIwMCAqIGEwMCArIGIwMSAqIGExMCArIGIwMiAqIGEyMCxcbiAgICAgICAgICBiMDAgKiBhMDEgKyBiMDEgKiBhMTEgKyBiMDIgKiBhMjEsXG4gICAgICAgICAgYjAwICogYTAyICsgYjAxICogYTEyICsgYjAyICogYTIyLFxuICAgICAgICAgIGIxMCAqIGEwMCArIGIxMSAqIGExMCArIGIxMiAqIGEyMCxcbiAgICAgICAgICBiMTAgKiBhMDEgKyBiMTEgKiBhMTEgKyBiMTIgKiBhMjEsXG4gICAgICAgICAgYjEwICogYTAyICsgYjExICogYTEyICsgYjEyICogYTIyLFxuICAgICAgICAgIGIyMCAqIGEwMCArIGIyMSAqIGExMCArIGIyMiAqIGEyMCxcbiAgICAgICAgICBiMjAgKiBhMDEgKyBiMjEgKiBhMTEgKyBiMjIgKiBhMjEsXG4gICAgICAgICAgYjIwICogYTAyICsgYjIxICogYTEyICsgYjIyICogYTIyLFxuICAgICAgICBdO1xuICAgICAgfSxcbiAgICAgIHhSb3RhdGlvbjogZnVuY3Rpb24oYW5nbGVJblJhZGlhbnMpIHtcbiAgICAgICAgdmFyIGMgPSBNYXRoLmNvcyhhbmdsZUluUmFkaWFucyk7XG4gICAgICAgIHZhciBzID0gTWF0aC5zaW4oYW5nbGVJblJhZGlhbnMpO1xuICAgICBcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAxLCAwLCAwLCBcbiAgICAgICAgICAwLCBjLCBzLCBcbiAgICAgICAgICAwLCAtcywgY1xuICAgICAgICBdO1xuICAgICAgfSxcbiAgICAgXG4gICAgICB5Um90YXRpb246IGZ1bmN0aW9uKGFuZ2xlSW5SYWRpYW5zKSB7XG4gICAgICAgIHZhciBjID0gTWF0aC5jb3MoYW5nbGVJblJhZGlhbnMpO1xuICAgICAgICB2YXIgcyA9IE1hdGguc2luKGFuZ2xlSW5SYWRpYW5zKTtcbiAgICAgXG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgYywgMCwgLXMsIFxuICAgICAgICAgIDAsIDEsIDAsIFxuICAgICAgICAgIHMsIDAsIGNcbiAgICAgICAgXTtcbiAgICAgIH0sXG4gICAgIFxuICAgICAgelJvdGF0aW9uOiBmdW5jdGlvbihhbmdsZUluUmFkaWFucykge1xuICAgICAgICB2YXIgYyA9IE1hdGguY29zKGFuZ2xlSW5SYWRpYW5zKTtcbiAgICAgICAgdmFyIHMgPSBNYXRoLnNpbihhbmdsZUluUmFkaWFucyk7XG4gICAgIFxuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICBjLCBzLCAwLCBcbiAgICAgICAgICAtcywgYywgMCxcbiAgICAgICAgICAgMCwgMCwgMVxuICAgICAgICBdO1xuICAgICAgfSxcbiAgICAgIG0zVG9tNCA6IGZ1bmN0aW9uKG0pe1xuICAgICAgICBjb25zdCBkc3QgPSBuZXcgRmxvYXQzMkFycmF5KDE2KVxuICAgICAgICBkc3RbIDBdID0gbVswXVxuICAgICAgICBkc3RbIDFdID0gbVsxXVxuICAgICAgICBkc3RbIDJdID0gbVsyXVxuICAgICAgICBkc3RbIDNdID0gMFxuICAgICAgICBkc3RbIDRdID0gbVszXVxuICAgICAgICBkc3RbIDVdID0gbVs0XVxuICAgICAgICBkc3RbIDZdID0gbVs1XVxuICAgICAgICBkc3RbIDddID0gMFxuICAgICAgICBkc3RbIDhdID0gbVs2XVxuICAgICAgICBkc3RbIDldID0gbVs3XVxuICAgICAgICBkc3RbMTBdID0gbVs4XVxuICAgICAgICBkc3RbMTFdID0gMFxuICAgICAgICBkc3RbMTJdID0gMFxuICAgICAgICBkc3RbMTNdID0gMFxuICAgICAgICBkc3RbMTRdID0gMFxuICAgICAgICBkc3RbMTVdID0gMVxuICAgICAgICByZXR1cm4gZHN0XG4gICAgICB9LFxuICAgICAgeFJvdGF0ZTogZnVuY3Rpb24obSwgYW5nbGVJblJhZGlhbnMpIHtcbiAgICAgICAgcmV0dXJuIG0zLm11bHRpcGx5KG0sIG0zLnhSb3RhdGlvbihhbmdsZUluUmFkaWFucykpO1xuICAgICAgfSxcbiAgICAgXG4gICAgICB5Um90YXRlOiBmdW5jdGlvbihtLCBhbmdsZUluUmFkaWFucykge1xuICAgICAgICByZXR1cm4gbTMubXVsdGlwbHkobSwgbTMueVJvdGF0aW9uKGFuZ2xlSW5SYWRpYW5zKSk7XG4gICAgICB9LFxuICAgICBcbiAgICAgIHpSb3RhdGU6IGZ1bmN0aW9uKG0sIGFuZ2xlSW5SYWRpYW5zKSB7XG4gICAgICAgIHJldHVybiBtMy5tdWx0aXBseShtLCBtMy56Um90YXRpb24oYW5nbGVJblJhZGlhbnMpKTtcbiAgICAgIH0sXG4gICAgICB0cmFuc2Zvcm1Qb2ludCA6IGZ1bmN0aW9uKG0sIHYsIGRzdCkge1xuICAgICAgICBkc3QgPSBkc3QgfHwgbmV3IEZsb2F0MzJBcnJheSgzKTtcbiAgICAgICAgdmFyIHYwID0gdlswXTtcbiAgICAgICAgdmFyIHYxID0gdlsxXTtcbiAgICAgICAgdmFyIHYyID0gdlsyXTtcbiAgICAgICAgXG4gICAgXG4gICAgICAgIGRzdFswXSA9ICh2MCAqIG1bMCAqIDMgKyAwXSArIHYxICogbVsxICogMyArIDBdICsgdjIgKiBtWzIgKiAzICsgMF0gICkgXG4gICAgICAgIGRzdFsxXSA9ICh2MCAqIG1bMCAqIDMgKyAxXSArIHYxICogbVsxICogMyArIDFdICsgdjIgKiBtWzIgKiAzICsgMV0gICkgXG4gICAgICAgIGRzdFsyXSA9ICh2MCAqIG1bMCAqIDMgKyAyXSArIHYxICogbVsxICogMyArIDJdICsgdjIgKiBtWzIgKiAzICsgMl0gKSBcbiAgICBcbiAgICAgICAgcmV0dXJuIGRzdDtcbiAgICAgIH0sXG4gICAgICBpZGVudGl0eSA6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgIDEsIDAsIDAsXG4gICAgICAgICAgMCwgMSwgMCxcbiAgICAgICAgICAwLCAwLCAxLFxuICAgICAgICBdO1xuICAgICAgfSxcbiAgICAgIHRyYW5zcG9zZSA6IGZ1bmN0aW9uKG0pe1xuICAgICAgICAgXG4gICAgICAgICAgZHN0ID0gbmV3IEZsb2F0MzJBcnJheSg5KVxuICAgICAgICAgIGRzdFswXSA9IG1bMF1cbiAgICAgICAgICBkc3RbMV0gPSBtWzNdXG4gICAgICAgICAgZHN0WzJdID0gbVs2XVxuICAgICAgICAgIGRzdFszXSA9IG1bMV1cbiAgICAgICAgICBkc3RbNF0gPSBtWzRdXG4gICAgICAgICAgZHN0WzVdID0gbVs3XVxuICAgICAgICAgIGRzdFs2XSA9IG1bMl1cbiAgICAgICAgICBkc3RbN10gPSBtWzVdXG4gICAgICAgICAgZHN0WzhdID0gbVs4XVxuICAgICAgICAgIHJldHVybiBkc3RcbiAgICAgIH0sXG4gICAgICBzY2FsaW5nIDogZnVuY3Rpb24oc3gsc3ksc3ope1xuICAgICAgICByZXR1cm4gbmV3IEZsb2F0MzJBcnJheShbXG4gICAgICAgICAgICAgICAgICAgIHN4LCAwLCAwLFxuICAgICAgICAgICAgICAgICAgICAwLCBzeSwgMCxcbiAgICAgICAgICAgICAgICAgICAgMCwgIDAsIHN6XG4gICAgICAgICAgICAgIF0pXG4gICAgICB9LFxuICAgICAgc2NhbGUgOiBmdW5jdGlvbihtLCBzeCxzeSxzeil7XG4gICAgICAgIHJldHVybiBtMy5tdWx0aXBseShtLCBtMy5zY2FsaW5nKHN4LCBzeSwgc3opKVxuICAgICAgfSxcbiAgICAgIC8qXG4gICAgICAwIDEgMlxuICAgICAgMyA0IDVcbiAgICAgIDYgNyA4XG4gICAgICAqL1xuICAgICAgaW52ZXJzZSA6IGZ1bmN0aW9uKG0pe1xuICAgICAgIGNvbnN0IGRldCA9IG1bMF0gKiBtWzRdICogbVs4XSArIFxuICAgICAgICAgICAgICAgICAgIG1bMl0gKiBtWzNdICogbVs3XSArXG4gICAgICAgICAgICAgICAgICAgbVsxXSAqIG1bNV0gKiBtWzZdIC1cbiAgICAgICAgICAgICAgICAgICBtWzJdICogbVs0XSAqIG1bNl0gLVxuICAgICAgICAgICAgICAgICAgIG1bMF0gKiBtWzVdICogbVs3XSAtXG4gICAgICAgICAgICAgICAgICAgbVs4XSAqIG1bM10gKiBtWzJdIFxuICAgICAgICBjb25zdCBkc3QgPSBuZXcgRmxvYXQzMkFycmF5KDkpXG4gICAgICAgIGRzdFswXSA9IChtWzRdICogbVs4XSAtIG1bN10gKiBtWzVdKSAvIGRldFxuICAgICAgICBkc3RbMV0gPSAobVszXSAqIG1bOF0gLSBtWzZdICogbVs1XSkgLyBkZXRcbiAgICAgICAgZHN0WzJdID0gKG1bM10gKiBtWzddIC0gbVs2XSAqIG1bNF0pIC8gZGV0XG4gICAgICAgIGRzdFszXSA9IChtWzFdICogbVs4XSAtIG1bMl0gKiBtWzddKSAvIGRldFxuICAgICAgICBkc3RbNF0gPSAobVswXSAqIG1bOF0gLSBtWzJdICogbVs2XSkgLyBkZXRcbiAgICAgICAgZHN0WzVdID0gKG1bMF0gKiBtWzddIC0gbVsxXSAqIG1bNl0pIC8gZGV0XG4gICAgICAgIGRzdFs2XSA9IChtWzFdICogbVs1XSAtIG1bMl0gKiBtWzRdKSAvIGRldFxuICAgICAgICBkc3RbN10gPSAobVswXSAqIG1bNV0gLSBtWzJdICogbVszXSkgLyBkZXRcbiAgICAgICAgZHN0WzhdID0gKG1bMF0gKiBtWzRdIC0gbVsxXSAqIG1bNF0pIC8gZGV0XG4gICAgICAgIFxuICAgICAgfSxcbiAgICAgIHRvU3RyaW5nKG0pe1xuICAgICAgICByZXR1cm4gbS5yZWR1Y2UoKGFjYyxlbCxpZHgpID0+IChpZHgpICUgMyA9PT0gMCA/IGFjYyArPSAnXFxuJyArIGVsIDogYWNjICs9ICcgJyArIGVsIClcbiAgICAgIH0sXG4gICAgICBkb3QodjEsdjIpe1xuICAgICAgICByZXR1cm4gdjFbMF0qdjJbMF0gKyB2MVsxXSp2MlsxXSArIHYxWzJdICogdjJbMl1cbiAgICAgIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gbTMiLCJjb25zdCBNYXRUeXBlID0gRmxvYXQzMkFycmF5O1xuY29uc3QgbTQgPSB7XG4gIG11bHRpcGx5OiBmdW5jdGlvbiAoYSwgYiwgZHN0KSB7XG4gICAgZHN0ID0gZHN0IHx8IG5ldyBNYXRUeXBlKDE2KTtcbiAgICB2YXIgYTAwID0gYVswICogNCArIDBdO1xuICAgIHZhciBhMDEgPSBhWzAgKiA0ICsgMV07XG4gICAgdmFyIGEwMiA9IGFbMCAqIDQgKyAyXTtcbiAgICB2YXIgYTAzID0gYVswICogNCArIDNdO1xuICAgIHZhciBhMTAgPSBhWzEgKiA0ICsgMF07XG4gICAgdmFyIGExMSA9IGFbMSAqIDQgKyAxXTtcbiAgICB2YXIgYTEyID0gYVsxICogNCArIDJdO1xuICAgIHZhciBhMTMgPSBhWzEgKiA0ICsgM107XG4gICAgdmFyIGEyMCA9IGFbMiAqIDQgKyAwXTtcbiAgICB2YXIgYTIxID0gYVsyICogNCArIDFdO1xuICAgIHZhciBhMjIgPSBhWzIgKiA0ICsgMl07XG4gICAgdmFyIGEyMyA9IGFbMiAqIDQgKyAzXTtcbiAgICB2YXIgYTMwID0gYVszICogNCArIDBdO1xuICAgIHZhciBhMzEgPSBhWzMgKiA0ICsgMV07XG4gICAgdmFyIGEzMiA9IGFbMyAqIDQgKyAyXTtcbiAgICB2YXIgYTMzID0gYVszICogNCArIDNdO1xuICAgIHZhciBiMDAgPSBiWzAgKiA0ICsgMF07XG4gICAgdmFyIGIwMSA9IGJbMCAqIDQgKyAxXTtcbiAgICB2YXIgYjAyID0gYlswICogNCArIDJdO1xuICAgIHZhciBiMDMgPSBiWzAgKiA0ICsgM107XG4gICAgdmFyIGIxMCA9IGJbMSAqIDQgKyAwXTtcbiAgICB2YXIgYjExID0gYlsxICogNCArIDFdO1xuICAgIHZhciBiMTIgPSBiWzEgKiA0ICsgMl07XG4gICAgdmFyIGIxMyA9IGJbMSAqIDQgKyAzXTtcbiAgICB2YXIgYjIwID0gYlsyICogNCArIDBdO1xuICAgIHZhciBiMjEgPSBiWzIgKiA0ICsgMV07XG4gICAgdmFyIGIyMiA9IGJbMiAqIDQgKyAyXTtcbiAgICB2YXIgYjIzID0gYlsyICogNCArIDNdO1xuICAgIHZhciBiMzAgPSBiWzMgKiA0ICsgMF07XG4gICAgdmFyIGIzMSA9IGJbMyAqIDQgKyAxXTtcbiAgICB2YXIgYjMyID0gYlszICogNCArIDJdO1xuICAgIHZhciBiMzMgPSBiWzMgKiA0ICsgM107XG4gICAgZHN0WzBdID0gYjAwICogYTAwICsgYjAxICogYTEwICsgYjAyICogYTIwICsgYjAzICogYTMwO1xuICAgIGRzdFsxXSA9IGIwMCAqIGEwMSArIGIwMSAqIGExMSArIGIwMiAqIGEyMSArIGIwMyAqIGEzMTtcbiAgICBkc3RbMl0gPSBiMDAgKiBhMDIgKyBiMDEgKiBhMTIgKyBiMDIgKiBhMjIgKyBiMDMgKiBhMzI7XG4gICAgZHN0WzNdID0gYjAwICogYTAzICsgYjAxICogYTEzICsgYjAyICogYTIzICsgYjAzICogYTMzO1xuICAgIGRzdFs0XSA9IGIxMCAqIGEwMCArIGIxMSAqIGExMCArIGIxMiAqIGEyMCArIGIxMyAqIGEzMDtcbiAgICBkc3RbNV0gPSBiMTAgKiBhMDEgKyBiMTEgKiBhMTEgKyBiMTIgKiBhMjEgKyBiMTMgKiBhMzE7XG4gICAgZHN0WzZdID0gYjEwICogYTAyICsgYjExICogYTEyICsgYjEyICogYTIyICsgYjEzICogYTMyO1xuICAgIGRzdFs3XSA9IGIxMCAqIGEwMyArIGIxMSAqIGExMyArIGIxMiAqIGEyMyArIGIxMyAqIGEzMztcbiAgICBkc3RbOF0gPSBiMjAgKiBhMDAgKyBiMjEgKiBhMTAgKyBiMjIgKiBhMjAgKyBiMjMgKiBhMzA7XG4gICAgZHN0WzldID0gYjIwICogYTAxICsgYjIxICogYTExICsgYjIyICogYTIxICsgYjIzICogYTMxO1xuICAgIGRzdFsxMF0gPSBiMjAgKiBhMDIgKyBiMjEgKiBhMTIgKyBiMjIgKiBhMjIgKyBiMjMgKiBhMzI7XG4gICAgZHN0WzExXSA9IGIyMCAqIGEwMyArIGIyMSAqIGExMyArIGIyMiAqIGEyMyArIGIyMyAqIGEzMztcbiAgICBkc3RbMTJdID0gYjMwICogYTAwICsgYjMxICogYTEwICsgYjMyICogYTIwICsgYjMzICogYTMwO1xuICAgIGRzdFsxM10gPSBiMzAgKiBhMDEgKyBiMzEgKiBhMTEgKyBiMzIgKiBhMjEgKyBiMzMgKiBhMzE7XG4gICAgZHN0WzE0XSA9IGIzMCAqIGEwMiArIGIzMSAqIGExMiArIGIzMiAqIGEyMiArIGIzMyAqIGEzMjtcbiAgICBkc3RbMTVdID0gYjMwICogYTAzICsgYjMxICogYTEzICsgYjMyICogYTIzICsgYjMzICogYTMzO1xuICAgIHJldHVybiBkc3Q7XG4gIH0sXG5cbiAgdHJhbnNsYXRpb246IGZ1bmN0aW9uICh0eCwgdHksIHR6KSB7XG4gICAgcmV0dXJuIFsxLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCB0eCwgdHksIHR6LCAxXTtcbiAgfSxcblxuICB4Um90YXRpb246IGZ1bmN0aW9uIChhbmdsZUluUmFkaWFucykge1xuICAgIHZhciBjID0gTWF0aC5jb3MoYW5nbGVJblJhZGlhbnMpO1xuICAgIHZhciBzID0gTWF0aC5zaW4oYW5nbGVJblJhZGlhbnMpO1xuXG4gICAgcmV0dXJuIFsxLCAwLCAwLCAwLCAwLCBjLCBzLCAwLCAwLCAtcywgYywgMCwgMCwgMCwgMCwgMV07XG4gIH0sXG5cbiAgeVJvdGF0aW9uOiBmdW5jdGlvbiAoYW5nbGVJblJhZGlhbnMpIHtcbiAgICB2YXIgYyA9IE1hdGguY29zKGFuZ2xlSW5SYWRpYW5zKTtcbiAgICB2YXIgcyA9IE1hdGguc2luKGFuZ2xlSW5SYWRpYW5zKTtcblxuICAgIHJldHVybiBbYywgMCwgLXMsIDAsIDAsIDEsIDAsIDAsIHMsIDAsIGMsIDAsIDAsIDAsIDAsIDFdO1xuICB9LFxuXG4gIHpSb3RhdGlvbjogZnVuY3Rpb24gKGFuZ2xlSW5SYWRpYW5zKSB7XG4gICAgdmFyIGMgPSBNYXRoLmNvcyhhbmdsZUluUmFkaWFucyk7XG4gICAgdmFyIHMgPSBNYXRoLnNpbihhbmdsZUluUmFkaWFucyk7XG5cbiAgICByZXR1cm4gW2MsIHMsIDAsIDAsIC1zLCBjLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAxXTtcbiAgfSxcblxuICBzY2FsaW5nOiBmdW5jdGlvbiAoc3gsIHN5LCBzeikge1xuICAgIHJldHVybiBbc3gsIDAsIDAsIDAsIDAsIHN5LCAwLCAwLCAwLCAwLCBzeiwgMCwgMCwgMCwgMCwgMV07XG4gIH0sXG4gIHRyYW5zbGF0ZTogZnVuY3Rpb24gKG0sIHR4LCB0eSwgdHopIHtcbiAgICByZXR1cm4gbTQubXVsdGlwbHkobSwgbTQudHJhbnNsYXRpb24odHgsIHR5LCB0eikpO1xuICB9LFxuXG4gIHhSb3RhdGU6IGZ1bmN0aW9uIChtLCBhbmdsZUluUmFkaWFucykge1xuICAgIHJldHVybiBtNC5tdWx0aXBseShtLCBtNC54Um90YXRpb24oYW5nbGVJblJhZGlhbnMpKTtcbiAgfSxcblxuICB5Um90YXRlOiBmdW5jdGlvbiAobSwgYW5nbGVJblJhZGlhbnMpIHtcbiAgICByZXR1cm4gbTQubXVsdGlwbHkobSwgbTQueVJvdGF0aW9uKGFuZ2xlSW5SYWRpYW5zKSk7XG4gIH0sXG5cbiAgelJvdGF0ZTogZnVuY3Rpb24gKG0sIGFuZ2xlSW5SYWRpYW5zKSB7XG4gICAgcmV0dXJuIG00Lm11bHRpcGx5KG0sIG00LnpSb3RhdGlvbihhbmdsZUluUmFkaWFucykpO1xuICB9LFxuXG4gIHNjYWxlOiBmdW5jdGlvbiAobSwgc3gsIHN5LCBzeikge1xuICAgIHJldHVybiBtNC5tdWx0aXBseShtLCBtNC5zY2FsaW5nKHN4LCBzeSwgc3opKTtcbiAgfSxcbiAgbWFrZU9ydDogZnVuY3Rpb24gKHYpIHtcbiAgICBjb25zdCBvID0gWzAsIDAsIDBdO1xuICAgIGNvbnN0IG5vcm0gPSBNYXRoLnNxcnQodlswXSAqIHZbMF0gKyB2WzFdICogdlsxXSArIHZbMl0gKiB2WzJdKTtcbiAgICBvWzBdID0gdlswXSAvIG5vcm07XG4gICAgb1sxXSA9IHZbMV0gLyBub3JtO1xuICAgIG9bMl0gPSB2WzJdIC8gbm9ybTtcbiAgICByZXR1cm4gbztcbiAgfSxcbiAgcHJvamVjdGlvbjogZnVuY3Rpb24gKHdpZHRoLCBoZWlnaHQsIGRlcHRoKSB7XG4gICAgLy8g0K3RgtCwINC80LDRgtGA0LjRhtCwINC/0LXRgNC10LLQvtGA0LDRh9C40LLQsNC10YIgWSwg0YfRgtC+0LHRiyAwINCx0YvQuyDQvdCw0LLQtdGA0YXRg1xuICAgIHJldHVybiBbXG4gICAgICAyIC8gd2lkdGgsXG4gICAgICAwLFxuICAgICAgMCxcbiAgICAgIDAsXG4gICAgICAwLFxuICAgICAgLTIgLyBoZWlnaHQsXG4gICAgICAwLFxuICAgICAgMCxcbiAgICAgIDAsXG4gICAgICAwLFxuICAgICAgMiAvIGRlcHRoLFxuICAgICAgMCxcbiAgICAgIC0xLFxuICAgICAgMSxcbiAgICAgIDAsXG4gICAgICAxLFxuICAgIF07XG4gIH0sXG4gIHBlcnNwZWN0aXZlOiBmdW5jdGlvbiAoZmllbGRPZlZpZXdJblJhZGlhbnMsIGFzcGVjdCwgbmVhciwgZmFyKSB7XG4gICAgdmFyIGYgPSBNYXRoLnRhbihNYXRoLlBJICogMC41IC0gMC41ICogZmllbGRPZlZpZXdJblJhZGlhbnMpO1xuICAgIHZhciByYW5nZUludiA9IDEuMCAvIChuZWFyIC0gZmFyKTtcblxuICAgIHJldHVybiBbXG4gICAgICBmIC8gYXNwZWN0LFxuICAgICAgMCxcbiAgICAgIDAsXG4gICAgICAwLFxuICAgICAgMCxcbiAgICAgIGYsXG4gICAgICAwLFxuICAgICAgMCxcbiAgICAgIDAsXG4gICAgICAwLFxuICAgICAgKG5lYXIgKyBmYXIpICogcmFuZ2VJbnYsXG4gICAgICAtMSxcbiAgICAgIDAsXG4gICAgICAwLFxuICAgICAgbmVhciAqIGZhciAqIHJhbmdlSW52ICogMixcbiAgICAgIDAsXG4gICAgXTtcbiAgfSxcbiAgaW52ZXJzZTogZnVuY3Rpb24gKG0pIHtcbiAgICB2YXIgbTAwID0gbVswICogNCArIDBdO1xuICAgIHZhciBtMDEgPSBtWzAgKiA0ICsgMV07XG4gICAgdmFyIG0wMiA9IG1bMCAqIDQgKyAyXTtcbiAgICB2YXIgbTAzID0gbVswICogNCArIDNdO1xuICAgIHZhciBtMTAgPSBtWzEgKiA0ICsgMF07XG4gICAgdmFyIG0xMSA9IG1bMSAqIDQgKyAxXTtcbiAgICB2YXIgbTEyID0gbVsxICogNCArIDJdO1xuICAgIHZhciBtMTMgPSBtWzEgKiA0ICsgM107XG4gICAgdmFyIG0yMCA9IG1bMiAqIDQgKyAwXTtcbiAgICB2YXIgbTIxID0gbVsyICogNCArIDFdO1xuICAgIHZhciBtMjIgPSBtWzIgKiA0ICsgMl07XG4gICAgdmFyIG0yMyA9IG1bMiAqIDQgKyAzXTtcbiAgICB2YXIgbTMwID0gbVszICogNCArIDBdO1xuICAgIHZhciBtMzEgPSBtWzMgKiA0ICsgMV07XG4gICAgdmFyIG0zMiA9IG1bMyAqIDQgKyAyXTtcbiAgICB2YXIgbTMzID0gbVszICogNCArIDNdO1xuICAgIHZhciB0bXBfMCA9IG0yMiAqIG0zMztcbiAgICB2YXIgdG1wXzEgPSBtMzIgKiBtMjM7XG4gICAgdmFyIHRtcF8yID0gbTEyICogbTMzO1xuICAgIHZhciB0bXBfMyA9IG0zMiAqIG0xMztcbiAgICB2YXIgdG1wXzQgPSBtMTIgKiBtMjM7XG4gICAgdmFyIHRtcF81ID0gbTIyICogbTEzO1xuICAgIHZhciB0bXBfNiA9IG0wMiAqIG0zMztcbiAgICB2YXIgdG1wXzcgPSBtMzIgKiBtMDM7XG4gICAgdmFyIHRtcF84ID0gbTAyICogbTIzO1xuICAgIHZhciB0bXBfOSA9IG0yMiAqIG0wMztcbiAgICB2YXIgdG1wXzEwID0gbTAyICogbTEzO1xuICAgIHZhciB0bXBfMTEgPSBtMTIgKiBtMDM7XG4gICAgdmFyIHRtcF8xMiA9IG0yMCAqIG0zMTtcbiAgICB2YXIgdG1wXzEzID0gbTMwICogbTIxO1xuICAgIHZhciB0bXBfMTQgPSBtMTAgKiBtMzE7XG4gICAgdmFyIHRtcF8xNSA9IG0zMCAqIG0xMTtcbiAgICB2YXIgdG1wXzE2ID0gbTEwICogbTIxO1xuICAgIHZhciB0bXBfMTcgPSBtMjAgKiBtMTE7XG4gICAgdmFyIHRtcF8xOCA9IG0wMCAqIG0zMTtcbiAgICB2YXIgdG1wXzE5ID0gbTMwICogbTAxO1xuICAgIHZhciB0bXBfMjAgPSBtMDAgKiBtMjE7XG4gICAgdmFyIHRtcF8yMSA9IG0yMCAqIG0wMTtcbiAgICB2YXIgdG1wXzIyID0gbTAwICogbTExO1xuICAgIHZhciB0bXBfMjMgPSBtMTAgKiBtMDE7XG5cbiAgICB2YXIgdDAgPVxuICAgICAgdG1wXzAgKiBtMTEgK1xuICAgICAgdG1wXzMgKiBtMjEgK1xuICAgICAgdG1wXzQgKiBtMzEgLVxuICAgICAgKHRtcF8xICogbTExICsgdG1wXzIgKiBtMjEgKyB0bXBfNSAqIG0zMSk7XG4gICAgdmFyIHQxID1cbiAgICAgIHRtcF8xICogbTAxICtcbiAgICAgIHRtcF82ICogbTIxICtcbiAgICAgIHRtcF85ICogbTMxIC1cbiAgICAgICh0bXBfMCAqIG0wMSArIHRtcF83ICogbTIxICsgdG1wXzggKiBtMzEpO1xuICAgIHZhciB0MiA9XG4gICAgICB0bXBfMiAqIG0wMSArXG4gICAgICB0bXBfNyAqIG0xMSArXG4gICAgICB0bXBfMTAgKiBtMzEgLVxuICAgICAgKHRtcF8zICogbTAxICsgdG1wXzYgKiBtMTEgKyB0bXBfMTEgKiBtMzEpO1xuICAgIHZhciB0MyA9XG4gICAgICB0bXBfNSAqIG0wMSArXG4gICAgICB0bXBfOCAqIG0xMSArXG4gICAgICB0bXBfMTEgKiBtMjEgLVxuICAgICAgKHRtcF80ICogbTAxICsgdG1wXzkgKiBtMTEgKyB0bXBfMTAgKiBtMjEpO1xuXG4gICAgdmFyIGQgPSAxLjAgLyAobTAwICogdDAgKyBtMTAgKiB0MSArIG0yMCAqIHQyICsgbTMwICogdDMpO1xuXG4gICAgcmV0dXJuIFtcbiAgICAgIGQgKiB0MCxcbiAgICAgIGQgKiB0MSxcbiAgICAgIGQgKiB0MixcbiAgICAgIGQgKiB0MyxcbiAgICAgIGQgKlxuICAgICAgICAodG1wXzEgKiBtMTAgK1xuICAgICAgICAgIHRtcF8yICogbTIwICtcbiAgICAgICAgICB0bXBfNSAqIG0zMCAtXG4gICAgICAgICAgKHRtcF8wICogbTEwICsgdG1wXzMgKiBtMjAgKyB0bXBfNCAqIG0zMCkpLFxuICAgICAgZCAqXG4gICAgICAgICh0bXBfMCAqIG0wMCArXG4gICAgICAgICAgdG1wXzcgKiBtMjAgK1xuICAgICAgICAgIHRtcF84ICogbTMwIC1cbiAgICAgICAgICAodG1wXzEgKiBtMDAgKyB0bXBfNiAqIG0yMCArIHRtcF85ICogbTMwKSksXG4gICAgICBkICpcbiAgICAgICAgKHRtcF8zICogbTAwICtcbiAgICAgICAgICB0bXBfNiAqIG0xMCArXG4gICAgICAgICAgdG1wXzExICogbTMwIC1cbiAgICAgICAgICAodG1wXzIgKiBtMDAgKyB0bXBfNyAqIG0xMCArIHRtcF8xMCAqIG0zMCkpLFxuICAgICAgZCAqXG4gICAgICAgICh0bXBfNCAqIG0wMCArXG4gICAgICAgICAgdG1wXzkgKiBtMTAgK1xuICAgICAgICAgIHRtcF8xMCAqIG0yMCAtXG4gICAgICAgICAgKHRtcF81ICogbTAwICsgdG1wXzggKiBtMTAgKyB0bXBfMTEgKiBtMjApKSxcbiAgICAgIGQgKlxuICAgICAgICAodG1wXzEyICogbTEzICtcbiAgICAgICAgICB0bXBfMTUgKiBtMjMgK1xuICAgICAgICAgIHRtcF8xNiAqIG0zMyAtXG4gICAgICAgICAgKHRtcF8xMyAqIG0xMyArIHRtcF8xNCAqIG0yMyArIHRtcF8xNyAqIG0zMykpLFxuICAgICAgZCAqXG4gICAgICAgICh0bXBfMTMgKiBtMDMgK1xuICAgICAgICAgIHRtcF8xOCAqIG0yMyArXG4gICAgICAgICAgdG1wXzIxICogbTMzIC1cbiAgICAgICAgICAodG1wXzEyICogbTAzICsgdG1wXzE5ICogbTIzICsgdG1wXzIwICogbTMzKSksXG4gICAgICBkICpcbiAgICAgICAgKHRtcF8xNCAqIG0wMyArXG4gICAgICAgICAgdG1wXzE5ICogbTEzICtcbiAgICAgICAgICB0bXBfMjIgKiBtMzMgLVxuICAgICAgICAgICh0bXBfMTUgKiBtMDMgKyB0bXBfMTggKiBtMTMgKyB0bXBfMjMgKiBtMzMpKSxcbiAgICAgIGQgKlxuICAgICAgICAodG1wXzE3ICogbTAzICtcbiAgICAgICAgICB0bXBfMjAgKiBtMTMgK1xuICAgICAgICAgIHRtcF8yMyAqIG0yMyAtXG4gICAgICAgICAgKHRtcF8xNiAqIG0wMyArIHRtcF8yMSAqIG0xMyArIHRtcF8yMiAqIG0yMykpLFxuICAgICAgZCAqXG4gICAgICAgICh0bXBfMTQgKiBtMjIgK1xuICAgICAgICAgIHRtcF8xNyAqIG0zMiArXG4gICAgICAgICAgdG1wXzEzICogbTEyIC1cbiAgICAgICAgICAodG1wXzE2ICogbTMyICsgdG1wXzEyICogbTEyICsgdG1wXzE1ICogbTIyKSksXG4gICAgICBkICpcbiAgICAgICAgKHRtcF8yMCAqIG0zMiArXG4gICAgICAgICAgdG1wXzEyICogbTAyICtcbiAgICAgICAgICB0bXBfMTkgKiBtMjIgLVxuICAgICAgICAgICh0bXBfMTggKiBtMjIgKyB0bXBfMjEgKiBtMzIgKyB0bXBfMTMgKiBtMDIpKSxcbiAgICAgIGQgKlxuICAgICAgICAodG1wXzE4ICogbTEyICtcbiAgICAgICAgICB0bXBfMjMgKiBtMzIgK1xuICAgICAgICAgIHRtcF8xNSAqIG0wMiAtXG4gICAgICAgICAgKHRtcF8yMiAqIG0zMiArIHRtcF8xNCAqIG0wMiArIHRtcF8xOSAqIG0xMikpLFxuICAgICAgZCAqXG4gICAgICAgICh0bXBfMjIgKiBtMjIgK1xuICAgICAgICAgIHRtcF8xNiAqIG0wMiArXG4gICAgICAgICAgdG1wXzIxICogbTEyIC1cbiAgICAgICAgICAodG1wXzIwICogbTEyICsgdG1wXzIzICogbTIyICsgdG1wXzE3ICogbTAyKSksXG4gICAgXTtcbiAgfSxcbiAgbG9va0F0OiBmdW5jdGlvbiAoY2FtZXJhUG9zaXRpb24sIHRhcmdldCwgdXApIHtcbiAgICB2YXIgekF4aXMgPSBub3JtYWxpemUoc3VidHJhY3RWZWN0b3JzKGNhbWVyYVBvc2l0aW9uLCB0YXJnZXQpKTtcbiAgICB2YXIgeEF4aXMgPSBub3JtYWxpemUoY3Jvc3ModXAsIHpBeGlzKSk7XG4gICAgdmFyIHlBeGlzID0gbm9ybWFsaXplKGNyb3NzKHpBeGlzLCB4QXhpcykpO1xuXG4gICAgcmV0dXJuIFtcbiAgICAgIHhBeGlzWzBdLFxuICAgICAgeEF4aXNbMV0sXG4gICAgICB4QXhpc1syXSxcbiAgICAgIDAsXG4gICAgICB5QXhpc1swXSxcbiAgICAgIHlBeGlzWzFdLFxuICAgICAgeUF4aXNbMl0sXG4gICAgICAwLFxuICAgICAgekF4aXNbMF0sXG4gICAgICB6QXhpc1sxXSxcbiAgICAgIHpBeGlzWzJdLFxuICAgICAgMCxcbiAgICAgIGNhbWVyYVBvc2l0aW9uWzBdLFxuICAgICAgY2FtZXJhUG9zaXRpb25bMV0sXG4gICAgICBjYW1lcmFQb3NpdGlvblsyXSxcbiAgICAgIDEsXG4gICAgXTtcbiAgfSxcbiAgY29weTogZnVuY3Rpb24gKHNyYykge1xuICAgIGNvbnN0IGRzdCA9IG5ldyBNYXRUeXBlKDE2KTtcblxuICAgIGRzdFswXSA9IHNyY1swXTtcbiAgICBkc3RbMV0gPSBzcmNbMV07XG4gICAgZHN0WzJdID0gc3JjWzJdO1xuICAgIGRzdFszXSA9IHNyY1szXTtcbiAgICBkc3RbNF0gPSBzcmNbNF07XG4gICAgZHN0WzVdID0gc3JjWzVdO1xuICAgIGRzdFs2XSA9IHNyY1s2XTtcbiAgICBkc3RbN10gPSBzcmNbN107XG4gICAgZHN0WzhdID0gc3JjWzhdO1xuICAgIGRzdFs5XSA9IHNyY1s5XTtcbiAgICBkc3RbMTBdID0gc3JjWzEwXTtcbiAgICBkc3RbMTFdID0gc3JjWzExXTtcbiAgICBkc3RbMTJdID0gc3JjWzEyXTtcbiAgICBkc3RbMTNdID0gc3JjWzEzXTtcbiAgICBkc3RbMTRdID0gc3JjWzE0XTtcbiAgICBkc3RbMTVdID0gc3JjWzE1XTtcblxuICAgIHJldHVybiBkc3Q7XG4gIH0sXG4gIHZlY3RvclN1bTogZnVuY3Rpb24gKHYxLCB2Mikge1xuICAgIGNvbnN0IHZlY3RvciA9IFswLCAwLCAwXTtcbiAgICB2ZWN0b3JbMF0gPSB2MVswXSArIHYyWzBdO1xuICAgIHZlY3RvclsxXSA9IHYxWzFdICsgdjJbMV07XG4gICAgdmVjdG9yWzJdID0gdjFbMl0gKyB2MlsyXTtcbiAgICByZXR1cm4gdmVjdG9yO1xuICB9LFxuICBjcm9zczogZnVuY3Rpb24gKGEsIGIpIHtcbiAgICByZXR1cm4gW1xuICAgICAgYVsxXSAqIGJbMl0gLSBhWzJdICogYlsxXSxcbiAgICAgIGFbMl0gKiBiWzBdIC0gYVswXSAqIGJbMl0sXG4gICAgICBhWzBdICogYlsxXSAtIGFbMV0gKiBiWzBdLFxuICAgIF07XG4gIH0sXG4gIHZlY3RvclNjYWxhclByb2R1Y3QoYSwgcykge1xuICAgIGxldCB2ID0gWzAsIDAsIDBdO1xuXG4gICAgdlswXSA9IGFbMF0gKiBzO1xuICAgIHZbMV0gPSBhWzFdICogcztcbiAgICB2WzJdID0gYVsyXSAqIHM7XG4gICAgaWYgKGlzTmFOKHZbMF0pIHx8IGlzTmFOKHZbMl0pIHx8IGlzTmFOKHZbMl0pKSByZXR1cm4gWzAsIDAsIDBdO1xuICAgIHJldHVybiB2O1xuICB9LFxuXG4gIHNjYWxhclByb2R1Y3Q6IGZ1bmN0aW9uICh2MSwgdjIpIHtcbiAgICBsZXQgYSA9IHYxWzBdICogdjJbMF0gKyB2MVsxXSAqIHYyWzFdICsgdjFbMl0gKiB2MlsyXTtcblxuICAgIHJldHVybiBhO1xuICB9LFxuICBkb3QodjEsIHYyKSB7XG4gICAgcmV0dXJuIHYxWzBdICogdjJbMF0gKyB2MVsxXSAqIHYyWzFdICsgdjFbMl0gKiB2MlsyXTtcbiAgfSxcbiAgaXNOdWxsVmVjdG9yOiBmdW5jdGlvbiAodikge1xuICAgIHJldHVybiAhdlswXSAmJiAhdlsxXSAmJiAhdlsyXTtcbiAgfSxcbiAgZ2V0VmVjdG9yTGVuZ3RoKHYpIHtcbiAgICByZXR1cm4gTWF0aC5zcXJ0KHZbMF0gKiB2WzBdICsgdlsxXSAqIHZbMV0gKyB2WzJdICogdlsyXSk7XG4gIH0sXG4gIHRyYW5zZm9ybVBvaW50OiBmdW5jdGlvbiAobSwgdiwgZHN0KSB7XG4gICAgZHN0ID0gZHN0IHx8IG5ldyBNYXRUeXBlKDMpO1xuICAgIHZhciB2MCA9IHZbMF07XG4gICAgdmFyIHYxID0gdlsxXTtcbiAgICB2YXIgdjIgPSB2WzJdO1xuICAgIHZhciBkID1cbiAgICAgIHYwICogbVswICogNCArIDNdICsgdjEgKiBtWzEgKiA0ICsgM10gKyB2MiAqIG1bMiAqIDQgKyAzXSArIG1bMyAqIDQgKyAzXTtcblxuICAgIGRzdFswXSA9XG4gICAgICAodjAgKiBtWzAgKiA0ICsgMF0gK1xuICAgICAgICB2MSAqIG1bMSAqIDQgKyAwXSArXG4gICAgICAgIHYyICogbVsyICogNCArIDBdICtcbiAgICAgICAgbVszICogNCArIDBdKSAvXG4gICAgICBkO1xuICAgIGRzdFsxXSA9XG4gICAgICAodjAgKiBtWzAgKiA0ICsgMV0gK1xuICAgICAgICB2MSAqIG1bMSAqIDQgKyAxXSArXG4gICAgICAgIHYyICogbVsyICogNCArIDFdICtcbiAgICAgICAgbVszICogNCArIDFdKSAvXG4gICAgICBkO1xuICAgIGRzdFsyXSA9XG4gICAgICAodjAgKiBtWzAgKiA0ICsgMl0gK1xuICAgICAgICB2MSAqIG1bMSAqIDQgKyAyXSArXG4gICAgICAgIHYyICogbVsyICogNCArIDJdICtcbiAgICAgICAgbVszICogNCArIDJdKSAvXG4gICAgICBkO1xuXG4gICAgcmV0dXJuIGRzdDtcbiAgfSxcbiAgbm9ybWFsaXplOiBmdW5jdGlvbiAodiwgZHN0KSB7XG4gICAgZHN0ID0gZHN0IHx8IG5ldyBNYXRUeXBlKDMpO1xuICAgIHZhciBsZW5ndGggPSBNYXRoLnNxcnQodlswXSAqIHZbMF0gKyB2WzFdICogdlsxXSArIHZbMl0gKiB2WzJdKTtcbiAgICAvLyBtYWtlIHN1cmUgd2UgZG9uJ3QgZGl2aWRlIGJ5IDAuXG4gICAgaWYgKGxlbmd0aCA+IDAuMDAwMDEpIHtcbiAgICAgIGRzdFswXSA9IHZbMF0gLyBsZW5ndGg7XG4gICAgICBkc3RbMV0gPSB2WzFdIC8gbGVuZ3RoO1xuICAgICAgZHN0WzJdID0gdlsyXSAvIGxlbmd0aDtcbiAgICB9XG4gICAgcmV0dXJuIGRzdDtcbiAgfSxcbiAgaWRlbnRpdHk6IGZ1bmN0aW9uICgpIHtcbiAgICBkc3QgPSBuZXcgTWF0VHlwZSgxNik7XG4gICAgZHN0WzBdID0gMTtcbiAgICBkc3RbMV0gPSAwO1xuICAgIGRzdFsyXSA9IDA7XG4gICAgZHN0WzNdID0gMDtcbiAgICBkc3RbNF0gPSAwO1xuICAgIGRzdFs1XSA9IDE7XG4gICAgZHN0WzZdID0gMDtcbiAgICBkc3RbN10gPSAwO1xuICAgIGRzdFs4XSA9IDA7XG4gICAgZHN0WzldID0gMDtcbiAgICBkc3RbMTBdID0gMTtcbiAgICBkc3RbMTFdID0gMDtcbiAgICBkc3RbMTJdID0gMDtcbiAgICBkc3RbMTNdID0gMDtcbiAgICBkc3RbMTRdID0gMDtcbiAgICBkc3RbMTVdID0gMTtcblxuICAgIHJldHVybiBkc3Q7XG4gIH0sXG4gIG0zVG9tNDogZnVuY3Rpb24gKG0pIHtcbiAgICBjb25zdCBkc3QgPSBuZXcgTWF0VHlwZSgxNik7XG4gICAgZHN0WzBdID0gbVswXTtcbiAgICBkc3RbMV0gPSBtWzFdO1xuICAgIGRzdFsyXSA9IG1bMl07XG4gICAgZHN0WzNdID0gMDtcbiAgICBkc3RbNF0gPSBtWzNdO1xuICAgIGRzdFs1XSA9IG1bNF07XG4gICAgZHN0WzZdID0gbVs1XTtcbiAgICBkc3RbN10gPSAwO1xuICAgIGRzdFs4XSA9IG1bNl07XG4gICAgZHN0WzldID0gbVs3XTtcbiAgICBkc3RbMTBdID0gbVs4XTtcbiAgICBkc3RbMTFdID0gMDtcbiAgICBkc3RbMTJdID0gMDtcbiAgICBkc3RbMTNdID0gMDtcbiAgICBkc3RbMTRdID0gMDtcbiAgICBkc3RbMTVdID0gMTtcbiAgICByZXR1cm4gZHN0O1xuICB9LFxuICBtNFRvbTM6IGZ1bmN0aW9uIChtKSB7XG4gICAgY29uc3QgZHN0ID0gbmV3IE1hdFR5cGUoOSk7XG4gICAgZHN0WzBdID0gbVswXTtcbiAgICBkc3RbMV0gPSBtWzFdO1xuICAgIGRzdFsyXSA9IG1bMl07XG4gICAgZHN0WzNdID0gbVs0XTtcbiAgICBkc3RbNF0gPSBtWzVdO1xuICAgIGRzdFs1XSA9IG1bNl07XG4gICAgZHN0WzZdID0gbVs4XTtcbiAgICBkc3RbN10gPSBtWzldO1xuICAgIGRzdFs4XSA9IG1bMTBdO1xuICAgIHJldHVybiBkc3Q7XG4gIH0sXG4gIHRvU3RyaW5nKG0pIHtcbiAgICByZXR1cm4gbS5yZWR1Y2UoKGFjYywgZWwsIGlkeCkgPT5cbiAgICAgIGlkeCAlIDQgPT09IDAgPyAoYWNjICs9IFwiXFxuXCIgKyBlbCkgOiAoYWNjICs9IFwiIFwiICsgZWwpXG4gICAgKTtcbiAgfSxcbiAgdHJhbnNwb3NlOiBmdW5jdGlvbiAobSkge1xuICAgIHJldHVybiBbXG4gICAgICBtWzBdLFxuICAgICAgbVs0XSxcbiAgICAgIG1bOF0sXG4gICAgICBtWzEyXSxcbiAgICAgIG1bMV0sXG4gICAgICBtWzVdLFxuICAgICAgbVs5XSxcbiAgICAgIG1bMTNdLFxuICAgICAgbVsyXSxcbiAgICAgIG1bNl0sXG4gICAgICBtWzEwXSxcbiAgICAgIG1bMTRdLFxuICAgICAgbVszXSxcbiAgICAgIG1bN10sXG4gICAgICBtWzExXSxcbiAgICAgIG1bMTVdLFxuICAgIF07XG4gIH0sXG4gIGZyb21RdWF0ZXJuaW9uOiAocSkgPT4ge1xuICAgIGNvbnN0IGExMSA9IDEgLSAyICogKHFbMV0gKiBxWzFdICsgcVsyXSAqIHFbMl0pO1xuICAgIGNvbnN0IGExMiA9IDIgKiAocVswXSAqIHFbMV0gLSBxWzJdICogcVszXSk7XG4gICAgY29uc3QgYTEzID0gMiAqIChxWzBdICogcVsyXSArIHFbMV0gKiBxWzNdKTtcbiAgICBjb25zdCBhMjEgPSAyICogKHFbMF0gKiBxWzFdICsgcVsyXSAqIHFbM10pO1xuICAgIGNvbnN0IGEyMiA9IDEgLSAyICogKHFbMF0gKiBxWzBdICsgcVsyXSAqIHFbMl0pO1xuICAgIGNvbnN0IGEyMyA9IDIgKiAocVsxXSAqIHFbMl0gLSBxWzBdICogcVszXSk7XG4gICAgY29uc3QgYTMxID0gMiAqIChxWzBdICogcVsyXSAtIHFbMV0gKiBxWzNdKTtcbiAgICBjb25zdCBhMzIgPSAyICogKHFbMV0gKiBxWzJdICsgcVswXSAqIHFbM10pO1xuICAgIGNvbnN0IGEzMyA9IDEgLSAyICogKHFbMF0gKiBxWzBdICsgcVsxXSAqIHFbMV0pO1xuICAgIHJldHVybiBbYTExLCBhMTIsIGExMywgMCwgYTIxLCBhMjIsIGEyMywgMCwgYTMxLCBhMzIsIGEzMywgMCwgMCwgMCwgMCwgMV07XG4gIH0sXG4gIHJvdGF0aW9uKHgsIHksIHopIHtcbiAgICByZXR1cm4gdGhpcy56Um90YXRlKHRoaXMueVJvdGF0ZSh0aGlzLnhSb3RhdGlvbih4KSwgeSksIHopO1xuICB9LFxuICByb3RhdGlvbkZyb21Ob3JtYWwobikge1xuICAgIHJldHVybiB0aGlzLnJvdGF0aW9uKE1hdGguYWNvcyhuWzFdKSwgTWF0aC5hY29zKG5bMl0pLCBNYXRoLmFjb3MoblswXSkpO1xuICB9LFxufTtcbmZ1bmN0aW9uIG1ha2VaVG9XTWF0cml4KGZ1ZGdlRmFjdG9yKSB7XG4gIHJldHVybiBbMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSwgZnVkZ2VGYWN0b3IsIDAsIDAsIDAsIDFdO1xufVxuZnVuY3Rpb24gY3Jvc3MoYSwgYikge1xuICByZXR1cm4gW1xuICAgIGFbMV0gKiBiWzJdIC0gYVsyXSAqIGJbMV0sXG4gICAgYVsyXSAqIGJbMF0gLSBhWzBdICogYlsyXSxcbiAgICBhWzBdICogYlsxXSAtIGFbMV0gKiBiWzBdLFxuICBdO1xufVxuZnVuY3Rpb24gc3VidHJhY3RWZWN0b3JzKGEsIGIpIHtcbiAgcmV0dXJuIFthWzBdIC0gYlswXSwgYVsxXSAtIGJbMV0sIGFbMl0gLSBiWzJdXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtNDtcbiIsIlxuY29uc3QgbTQgPSByZXF1aXJlKCcuL200JylcbmNsYXNzIFRSU3tcbiAgICBjb25zdHJ1Y3Rvcih0cmFuc2xhdGlvbiwgcm90YXRpb24sIHNjYWxlKXtcbiAgICAgICAgdGhpcy50cmFuc2xhdGlvbiA9IHRyYW5zbGF0aW9uXG4gICAgICAgIHRoaXMucm90YXRpb24gPSByb3RhdGlvblxuICAgICAgICB0aGlzLnNjYWxlID0gc2NhbGVcbiAgICB9XG4gICAgZ2V0TWF0cml4KG0pIHtcblxuICAgICAgICBsZXQgZHN0ID0gbSB8fCBtNC5pZGVudGl0eSgpO1xuICAgICAgICB2YXIgdCA9IHRoaXMudHJhbnNsYXRpb247XG4gICAgICAgIHZhciByID0gdGhpcy5yb3RhdGlvbjtcbiAgICAgICAgdmFyIHMgPSB0aGlzLnNjYWxlO1xuICAgICAgICBjb25zdCBzaW4gPSBNYXRoLnNpbihyWzNdIC8gMilcbiAgICAgICAgY29uc3QgY29zID0gTWF0aC5jb3MoclszXSAvIDIpXG4gICAgICAgIGRzdCA9IG00LnRyYW5zbGF0ZShkc3QsdFswXSwgdFsxXSwgdFsyXSk7XG5cbiAgICAgICAgZHN0ID0gbTQubXVsdGlwbHkoZHN0LCBtNC5mcm9tUXVhdGVybmlvbihyKSlcbiAgICAgICAgXG4gICAgICAgIGRzdCA9IG00LnNjYWxlKGRzdCwgc1swXSwgc1sxXSwgc1syXSk7XG4gICAgICAgIHJldHVybiBkc3Q7XG4gICAgICB9O1xuICAgIGdldFJNYXRyaXgoKXtcbiAgICAgICAgbGV0IGRzdCA9IG00LmlkZW50aXR5KCk7XG4gICAgICAgIHZhciByID0gdGhpcy5yb3RhdGlvbjtcbiAgICAgICAgZHN0ID0gbTQueFJvdGF0ZShkc3QsIHJbMF0pO1xuICAgICAgICBkc3QgPSBtNC55Um90YXRlKGRzdCwgclsxXSk7XG4gICAgICAgIGRzdCA9IG00LnpSb3RhdGUoZHN0LCByWzJdKTtcbiAgICAgICAgcmV0dXJuIGRzdFxuICAgIH1cbn1cbmNsYXNzIE5vZGV7XG4gICAgY29uc3RydWN0b3IoIG5hbWUsIHRycyA9IG5ldyBUUlMoKSl7XG4gICAgICAgIHRoaXMud29ybGRNYXRyaXggPSBtNC5pZGVudGl0eSgpXG4gICAgICAgIHRoaXMucGFyZW50ID0gbnVsbFxuICAgICAgICB0aGlzLmNoaWxkcmVuID0gW11cbiAgICAgICAgdGhpcy50cnMgPSB0cnNcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZVxuICAgICAgICB0aGlzLnBhcnRzID0gW11cbiAgICB9XG4gICAgc2V0UGFyZW50KHBhcmVudCl7XG4gICAgICAgIGlmICh0aGlzLnBhcmVudCkge1xuICAgICAgICAgICAgY29uc3QgbmR4ID0gdGhpcy5wYXJlbnQuY2hpbGRyZW4uaW5kZXhPZih0aGlzKTtcbiAgICAgICAgICAgIGlmIChuZHggPj0gMCkge1xuICAgICAgICAgICAgICB0aGlzLnBhcmVudC5jaGlsZHJlbi5zcGxpY2UobmR4LCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHBhcmVudCkge1xuICAgICAgICAgICAgcGFyZW50LmNoaWxkcmVuLnB1c2godGhpcyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICAgIH1cbiAgICB1cGRhdGVXb3JsZE1hdHJpeChwYXJlbnRXb3JsZE1hdHJpeCl7XG4gICAgICAgIGxldCBtYXRyaXggPSB0aGlzLnRycy5nZXRNYXRyaXgoKVxuICAgICAgICBpZiAocGFyZW50V29ybGRNYXRyaXgpIHtcbiAgICAgICAgICBtYXRyaXggPSBtNC5tdWx0aXBseShwYXJlbnRXb3JsZE1hdHJpeCwgbWF0cml4KVxuICAgICAgICB9XG4gICAgICAgIHRoaXMud29ybGRNYXRyaXggPSBtYXRyaXhcbiAgICAgICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgICAgIGNoaWxkLnVwZGF0ZVdvcmxkTWF0cml4KG1hdHJpeCk7XG4gICAgICAgIH0pXG4gICAgfVxuICAgIHVwZGF0ZVBhcnRzTGlzdCgpe1xuICAgICAgICBjb25zdCBpdGVyID0gKG5vZGUsYXJyKSA9PiB7XG4gICAgICAgICAgICBhcnIucHVzaChub2RlKVxuICAgICAgICAgICAgbm9kZS5jaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IGl0ZXIoY2hpbGQsYXJyKSlcbiAgICAgICAgfVxuICAgICAgICBpdGVyKHRoaXMsIHRoaXMucGFydHMpXG4gICAgfVxufVxuXG5cbm1vZHVsZS5leHBvcnRzID0ge05vZGUsIFRSU30iLCJjb25zdCBkb3QgPSAoYSwgYikgPT4gYVswXSAqIGJbMF0gKyBhWzFdICogYlsxXSArIGFbMl0gKiBiWzJdXG5jb25zdCBjcm9zcyA9IChhLCBiKSA9PiB7XG4gICAgY29uc3QgcmVzID0gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFbMV0gKiBiWzJdIC0gYlsxXSAqIGFbMl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYVsyXSAqIGJbMF0gLSBiWzJdICogYVswXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhWzBdICogYlsxXSAtIGJbMF0gKiBhWzFdICAgIFxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgaWYoaXNOYU52ZWMoYSkgfHwgaXNOYU52ZWMoYikpe1xuICAgICAgICBjb25zb2xlLmxvZyhhLCBiKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2FyZ3MgaXMgTmFOIDogLCcpXG4gICAgfVxuICAgIHJldHVybiByZXNcbn0gICAgICAgICAgXG5jb25zdCBzY2FsZSA9IChhLCBzY2FsYXIpID0+IFthWzBdICogc2NhbGFyLCBhWzFdICogc2NhbGFyLCBhWzJdICogc2NhbGFyXVxuY29uc3Qgc3VtID0gKGEsIGIpID0+IFthWzBdICsgYlswXSwgYVsxXSArIGJbMV0sIGFbMl0gKyBiWzJdXVxuY29uc3QgZGlmZiA9IChhLCBiKSA9PiBbYVswXSAtIGJbMF0sIGFbMV0gLSBiWzFdLCBhWzJdIC0gYlsyXV1cbmNvbnN0IG5vcm0gPSBhID0+IE1hdGguc3FydChhWzBdICogYVswXSArIGFbMV0gKiBhWzFdICsgYVsyXSAqIGFbMl0pXG5jb25zdCBub3JtU3EgPSBhID0+IGFbMF0gKiBhWzBdICsgYVsxXSAqIGFbMV0gKyBhWzJdICogYVsyXVxuY29uc3Qgbm9ybWFsaXplID0gYSA9PiB7XG4gICAgY29uc3QgbGVuZ3RoID0gbm9ybShhKVxuICAgIGlmKGxlbmd0aCA9PT0gMCkgcmV0dXJuIGFcbiAgICByZXR1cm4gW2FbMF0gLyBsZW5ndGgsIGFbMV0gLyBsZW5ndGgsIGFbMl0gLyBsZW5ndGhdXG59XG5jb25zdCBpc051bGwgPSBhID0+IGFbMF0qYVswXSArIGFbMV0gKiBhWzFdICsgYVsyXSAqIGFbMl0gPT09IDBcblxuY29uc3QgaXNFcXVhbCA9IChhLCBiKSA9PiBhWzBdID09IGJbMF0gJiYgYVsxXSA9PSBiWzFdICYmIGFbMl0gPT0gYlsyXVxuY29uc3QgY2hrViA9ICh2KSA9PntcbiAgICBpZihpc05hTnZlYyh2KSl7XG4gICAgICAgIGNvbnNvbGUubG9nKHYpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTmFOIFZlYycpXG4gICAgfVxufVxuXG5jb25zdCBmaW5kRnVydGhlc3RQb2ludCA9IChhLGIsYykgPT4ge1xuICAgIGNvbnN0IEFCID0gbm9ybVNxKGRpZmYoYSwgYikpXG4gICAgY29uc3QgQUMgPSBub3JtU3EoZGlmZihhLCBjKSlcbiAgICBjb25zdCBCQyA9IG5vcm1TcShkaWZmKGMsIGIpKVxuICAgIGlmKEFCIDwgQUMpe1xuICAgICAgICBpZihBQiA8IEJDKSByZXR1cm4gY1xuICAgICAgICByZXR1cm4gYlxuICAgIH1cbiAgICBlbHNle1xuICAgICAgICBpZihBQyA8IEJDKSByZXR1cm4gYlxuICAgICAgICBlbHNlIHJldHVybiBhXG4gICAgfVxufVxuY29uc3QgZGlzdGFuY2VGcm9tTGluZSA9IChhLGIsYykgPT57XG4gICAgY29uc3QgYWMgPSBkaWZmKGMsIGEpXG4gICAgY29uc3QgYWIgPSBkaWZmKGIsIGEpXG4gICAgY29uc3QgayA9IGRvdChhYixhYykgLyBub3JtU3EoYWIpXG4gICAgY29uc3QgaCA9IHN1bShhLCBzY2FsZShhYiwgaykpXG4gICAgcmV0dXJuIG5vcm1TcShkaWZmKGMsIGgpKVxufVxuXG5cbmNvbnN0IGlzTmFOdmVjID0gdiA9PiBpc05hTih2WzBdICsgdlsxXSArIHZbMl0pIHx8ICh2WzBdICsgdlsxXSArIHZbMl0gPT09IEluZmluaXR5KSB8fCAodlswXSArIHZbMV0gKyB2WzJdID09PSAtSW5maW5pdHkpXG5jb25zdCBfZG90ID0gKGEsIGIpID0+e1xuICAgIGlmKGlzTmFOdmVjKGEpIHx8IGlzTmFOdmVjKGIpKXtcbiAgICAgICAgY29uc29sZS5sb2coYSwgYilcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdhcmdzIGlzIE5hTiA6ICwnKVxuICAgIH1cbiAgICByZXR1cm4gZG90KGEsIGIpXG59XG5jb25zdCBfY3Jvc3MgPSAoYSwgYikgPT57XG4gICAgaWYoaXNOYU52ZWMoYSkgfHwgaXNOYU52ZWMoYikpe1xuICAgICAgICBjb25zb2xlLmxvZyhhLCBiKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2FyZ3MgaXMgTmFOIDogLCcpXG4gICAgfVxuICAgIGNvbnN0IHJlcyA9IGNyb3NzKGEsIGIpICBcbiAgICBpZihpc05hTnZlYyhyZXMpKXtcbiAgICAgICAgY29uc29sZS5sb2coYSwgYilcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdnZXQgTmFOIDogLCcpXG4gICAgfVxuICAgIHJldHVybiByZXMgXG59XG5jb25zdCBfc3VtID0gKGEsIGIpID0+e1xuICAgIGlmKGlzTmFOdmVjKGEpIHx8IGlzTmFOdmVjKGIpKXtcbiAgICAgICAgY29uc29sZS5sb2coYSwgYilcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdhcmdzIGlzIE5hTiA6ICwnKVxuICAgIH1cbiAgICBjb25zdCByZXMgPSBzdW0oYSwgYikgIFxuICAgIGlmKGlzTmFOdmVjKHJlcykpe1xuICAgICAgICBjb25zb2xlLmxvZyhhLCBiKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2dldCBOYU4gOiAsJylcbiAgICB9XG4gICAgcmV0dXJuIHJlcyBcbn1cbmNvbnN0IF9kaWZmID0gKGEsIGIpID0+e1xuICAgIGlmKGlzTmFOdmVjKGEpIHx8IGlzTmFOdmVjKGIpKXtcbiAgICAgICAgY29uc29sZS5sb2coYSwgYilcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdhcmdzIGlzIE5hTiA6ICwnKVxuICAgIH1cbiAgICBjb25zdCByZXMgPSBkaWZmKGEsIGIpICBcbiAgICBpZihpc05hTnZlYyhyZXMpKXtcbiAgICAgICAgY29uc29sZS5sb2coYSwgYilcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdnZXQgTmFOIDogLCcpXG4gICAgfVxuICAgIHJldHVybiByZXMgICAgXG59XG5jb25zdCBfc2NhbGUgPSAoYSwgc2NhbGFyKSA9PntcbiAgICBpZihpc05hTnZlYyhhKSB8fCBpc05hTihzY2FsYXIpKXtcbiAgICAgICAgY29uc29sZS5sb2coYSwgc2NhbGFyKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2FyZ3MgaXMgTmFOIDogLCcpXG4gICAgfVxuICAgIGNvbnN0IHJlcyA9IHNjYWxlKGEsIHNjYWxhcikgIFxuICAgIGlmKGlzTmFOdmVjKHJlcykpe1xuICAgICAgICBjb25zb2xlLmxvZyhhLCBzY2FsYXIpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignZ2V0IE5hTiA6ICwnKVxuICAgIH1cbiAgICByZXR1cm4gcmVzIFxufVxuY29uc3QgX25vcm1hbGl6ZSA9IGEgPT57XG4gICAgaWYoaXNOYU52ZWMoYSkpe1xuICAgICAgICBjb25zb2xlLmxvZyhhKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2FyZ3MgaXMgTmFOIDogLCcpXG4gICAgfVxuICAgIGNvbnN0IHJlcyA9IG5vcm1hbGl6ZShhKSAgXG4gICAgaWYoaXNOYU52ZWMocmVzKSl7XG4gICAgICAgIGNvbnNvbGUubG9nKGEpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignZ2V0IE5hTiA6ICwnKVxuICAgIH1cbiAgICByZXR1cm4gcmVzIFxufVxubW9kdWxlLmV4cG9ydHMgPSB7Y2hrViwgZG90IDogX2RvdCwgY3Jvc3MgOiBfY3Jvc3MsIHNjYWxlIDogX3NjYWxlLCBzdW0gOiBfc3VtLCBkaWZmIDogX2RpZmYsIG5vcm1hbGl6ZSA6IF9ub3JtYWxpemUsIG5vcm0sIG5vcm1TcSwgaXNOdWxsLCBmaW5kRnVydGhlc3RQb2ludCwgZGlzdGFuY2VGcm9tTGluZSwgaXNFcXVhbH0iLCJsZXQgZGlzdFNxID0gKHgsIHkpID0+IHtcclxuICByZXR1cm4geC5tYXAoKGUsIGkpID0+IGUgLSB5W2ldKS5yZWR1Y2UoKGFjYywgZSkgPT4gKGFjYyArPSBlICoqIDIpLCAwKTtcclxufTtcclxuXHJcbmNvbnN0IEdhdXNzU2VpZGVsID0gKEEsIGIsIG4sIGVwcykgPT4ge1xyXG4gIGxldCB4ID0gbmV3IEFycmF5KG4pLmZpbGwoMCk7XHJcbiAgbGV0IGNvbnYgPSBmYWxzZSxcclxuICAgIG1heEl0ZXIgPSA2NDtcclxuICBsZXQgeF9uZXcgPSBbXTtcclxuICB3aGlsZSAoIWNvbnYgJiYgbWF4SXRlciA+IDApIHtcclxuICAgIG1heEl0ZXItLTtcclxuICAgIHhfbmV3ID0gWy4uLnhdO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHtcclxuICAgICAgbGV0IHMgPSAwO1xyXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGk7IGorKykge1xyXG4gICAgICAgIHMgKz0gQVtpICogbiArIGpdICogeF9uZXdbal07XHJcbiAgICAgIH1cclxuICAgICAgZm9yIChsZXQgaiA9IGkgKyAxOyBqIDwgbjsgaisrKSB7XHJcbiAgICAgICAgcyArPSBBW2kgKiBuICsgal0gKiB4W2pdO1xyXG4gICAgICB9XHJcbiAgICAgIHhfbmV3W2ldID0gKGJbaV0gLSBzKSAvIEFbaSAqIG4gKyBpXTtcclxuICAgIH1cclxuXHJcbiAgICBjb252ID0gZGlzdFNxKHgsIHhfbmV3KSA8IGVwcztcclxuICAgIHggPSBbLi4ueF9uZXddO1xyXG4gIH1cclxuICByZXR1cm4geF9uZXc7XHJcbn07XHJcbmV4cG9ydCB7IEdhdXNzU2VpZGVsIH07XHJcbiIsImltcG9ydCB7IHZlY3RvciwgbTQsIG0zLCBBQUJCIH0gZnJvbSBcIm1hdGhcIjtcclxuXHJcbmNvbnN0IHsgc2NhbGUsIHN1bSwgZGlmZiB9ID0gdmVjdG9yO1xyXG5cclxuY29uc3QgeEF4aXMgPSBbMSwgMCwgMF07XHJcbmNvbnN0IHlBeGlzID0gWzAsIDEsIDBdO1xyXG5jb25zdCB6QXhpcyA9IFswLCAwLCAxXTtcclxuY29uc3QgeEF4aXNOZWdhdGl2ZSA9IHNjYWxlKHhBeGlzLCAtMSk7XHJcbmNvbnN0IHlBeGlzTmVnYXRpdmUgPSBzY2FsZSh5QXhpcywgLTEpO1xyXG5jb25zdCB6QXhpc05lZ2F0aXZlID0gc2NhbGUoekF4aXMsIC0xKTtcclxuXHJcbmNsYXNzIENvbGxpZGVyIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuUm1hdHJpeCA9IG0zLmlkZW50aXR5KCk7XHJcbiAgICB0aGlzLnBvcyA9IFtdO1xyXG4gICAgdGhpcy5zY2FsZSA9IFsxLCAxLCAxXTtcclxuICAgIHRoaXMuUlMgPSBtMy5pZGVudGl0eSgpO1xyXG4gICAgdGhpcy5SU2ludmVyc2UgPSBtMy5pZGVudGl0eSgpO1xyXG4gICAgdGhpcy5wb3MgPSBbMCwgMCwgMF07XHJcbiAgfVxyXG4gIHRyYW5zbGF0ZSh2KSB7XHJcbiAgICB0aGlzLnBvcyA9IHN1bSh0aGlzLnBvcywgdik7XHJcbiAgfVxyXG4gIHJvdGF0ZSh2KSB7XHJcbiAgICB0aGlzLlJTbWF0cml4ID0gbTMueFJvdGF0ZSh0aGlzLlJTbWF0cml4LCB2WzBdKTtcclxuICAgIHRoaXMuUlNtYXRyaXggPSBtMy55Um90YXRlKHRoaXMuUlNtYXRyaXgsIHZbMV0pO1xyXG4gICAgdGhpcy5SU21hdHJpeCA9IG0zLnpSb3RhdGUodGhpcy5SU21hdHJpeCwgdlsyXSk7XHJcbiAgICB0aGlzLlJtYXRyaXhJbnZlcnNlID0gbTMudHJhbnNwb3NlKHRoaXMuUlNtYXRyaXgpO1xyXG4gIH1cclxuICBnZXRBQUJCKCkge1xyXG4gICAgY29uc3QgbWF4WCA9IHRoaXMuc3VwcG9ydCh4QXhpcylbMF07XHJcbiAgICBjb25zdCBtYXhZID0gdGhpcy5zdXBwb3J0KHlBeGlzKVsxXTtcclxuICAgIGNvbnN0IG1heFogPSB0aGlzLnN1cHBvcnQoekF4aXMpWzJdO1xyXG5cclxuICAgIGNvbnN0IG1pblggPSB0aGlzLnN1cHBvcnQoeEF4aXNOZWdhdGl2ZSlbMF07XHJcbiAgICBjb25zdCBtaW5ZID0gdGhpcy5zdXBwb3J0KHlBeGlzTmVnYXRpdmUpWzFdO1xyXG4gICAgY29uc3QgbWluWiA9IHRoaXMuc3VwcG9ydCh6QXhpc05lZ2F0aXZlKVsyXTtcclxuICAgIHJldHVybiBuZXcgQUFCQihbbWluWCwgbWluWSwgbWluWl0sIFttYXhYLCBtYXhZLCBtYXhaXSk7XHJcbiAgfVxyXG4gIHNldFJTTWF0MyhtKSB7XHJcbiAgICB0aGlzLlJTbWF0cml4ID0gbTtcclxuICAgIHRoaXMuUlNtYXRyaXhJbnZlcnNlID0gbTMudHJhbnNwb3NlKG0pO1xyXG4gIH1cclxuICBzZXRUUlNNYXQ0KG0pIHtcclxuICAgIHRoaXMuUlNtYXRyaXggPSBtNC5tNFRvbTMobSk7XHJcbiAgICB0aGlzLnBvc1swXSA9IG1bMTJdO1xyXG4gICAgdGhpcy5wb3NbMV0gPSBtWzEzXTtcclxuICAgIHRoaXMucG9zWzJdID0gbVsxNF07XHJcbiAgfVxyXG4gIGdldFRSU01hdDQoKSB7XHJcbiAgICBjb25zdCBtID0gbTQubTNUb200KHRoaXMuUlNtYXRyaXgpO1xyXG4gICAgbVsxMl0gPSB0aGlzLnBvc1swXTtcclxuICAgIG1bMTNdID0gdGhpcy5wb3NbMV07XHJcbiAgICBtWzE0XSA9IHRoaXMucG9zWzJdO1xyXG4gICAgbVsxNV0gPSAxO1xyXG4gICAgcmV0dXJuIG07XHJcbiAgfVxyXG4gIGxvY2FsVG9HbG9iYWwodikge1xyXG4gICAgbGV0IGdsb2JhbCA9IG0zLnRyYW5zZm9ybVBvaW50KHRoaXMuUlNtYXRyaXgsIHYpO1xyXG4gICAgcmV0dXJuIHN1bSh0aGlzLnBvcywgZ2xvYmFsKTtcclxuICB9XHJcbn1cclxuXHJcbmNsYXNzIEJveCB7XHJcbiAgY29uc3RydWN0b3IoYSA9IDEsIGIgPSAxLCBjID0gMSkge1xyXG4gICAgdGhpcy5taW4gPSBbLWEgLyAyLCAtYiAvIDIsIC1jIC8gMl07XHJcbiAgICB0aGlzLm1heCA9IFthIC8gMiwgYiAvIDIsIGMgLyAyXTtcclxuICAgIHRoaXMuUm1hdHJpeCA9IG0zLmlkZW50aXR5KCk7XHJcbiAgICB0aGlzLlJtYXRyaXhJbnZlcnNlID0gbTMuaWRlbnRpdHkoKTtcclxuICAgIHRoaXMuUlMgPSBtMy5pZGVudGl0eSgpO1xyXG4gICAgdGhpcy5wb3MgPSBbMCwgMCwgMF07XHJcbiAgICB0aGlzLnBvaW50cyA9IFtcclxuICAgICAgWy1hLzIsIC1iLzIsIC1jLzJdLFxyXG4gICAgICBbYS8yLCAtYi8yLCAtYy8yXSxcclxuICAgICAgW2EvMiwgYi8yLCAtYy8yXSxcclxuICAgICAgWy1hLzIsIGIvMiwgLWMvMl0sXHJcbiAgICAgIFstYS8yLCAtYi8yLCBjLzJdLFxyXG4gICAgICBbYS8yLCAtYi8yLCBjLzJdLFxyXG4gICAgICBbYS8yLCBiLzIsIGMvMl0sXHJcbiAgICAgIFstYS8yLCBiLzIsIGMvMl0sXHJcbiAgICBdO1xyXG4gICAgdGhpcy5pbmRpY2VzID0gW1xyXG4gICAgICBbMywgMiwgMSwgMF0sIC8vIC16XHJcbiAgICAgIFs0LCA1LCA2LCA3XSwgLy8gK3pcclxuICAgICAgWzUsIDQsIDAsIDFdLCAvLyAteVxyXG4gICAgICBbMiwgMywgNywgNl0sIC8vICt5XHJcbiAgICAgIFswLCA0LCA3LCAzXSwgLy8gLXhcclxuICAgICAgWzEsIDIsIDYsIDVdLCAvLyAreFxyXG4gICAgXTtcclxuICAgIHRoaXMubm9ybWFscyA9IFtcclxuICAgICAgWzAsIDAsIC0xXSxcclxuICAgICAgWzAsIDAsIDFdLFxyXG4gICAgICBbMCwgLTEsIDBdLFxyXG4gICAgICBbMCwgMSwgMF0sXHJcbiAgICAgIFstMSwgMCwgMF0sXHJcbiAgICAgIFsxLCAwLCAwXSxcclxuICAgIF07XHJcbiAgfVxyXG4gIGdldE5vcm1hbHNHbG9iYWwoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5ub3JtYWxzLm1hcCgobikgPT4gbTMudHJhbnNmb3JtUG9pbnQodGhpcy5SbWF0cml4LCBuKSk7XHJcbiAgfVxyXG4gIGdldEFBQkIoKSB7XHJcbiAgICBjb25zdCBtYXhYID0gdGhpcy5zdXBwb3J0KHhBeGlzKVswXTtcclxuICAgIGNvbnN0IG1heFkgPSB0aGlzLnN1cHBvcnQoeUF4aXMpWzFdO1xyXG4gICAgY29uc3QgbWF4WiA9IHRoaXMuc3VwcG9ydCh6QXhpcylbMl07XHJcblxyXG4gICAgY29uc3QgbWluWCA9IHRoaXMuc3VwcG9ydCh4QXhpc05lZ2F0aXZlKVswXTtcclxuICAgIGNvbnN0IG1pblkgPSB0aGlzLnN1cHBvcnQoeUF4aXNOZWdhdGl2ZSlbMV07XHJcbiAgICBjb25zdCBtaW5aID0gdGhpcy5zdXBwb3J0KHpBeGlzTmVnYXRpdmUpWzJdO1xyXG4gICAgcmV0dXJuIG5ldyBBQUJCKFttaW5YLCBtaW5ZLCBtaW5aXSwgW21heFgsIG1heFksIG1heFpdKTtcclxuICB9XHJcbiAgdHJhbnNsYXRlKHQpIHtcclxuICAgIHRoaXMucG9zID0gc3VtKHRoaXMucG9zLCB0KTtcclxuICB9XHJcbiAgcm90YXRlKHIpIHtcclxuICAgIHRoaXMuUm1hdHJpeCA9IG0zLnhSb3RhdGUodGhpcy5SbWF0cml4LCByWzBdKTtcclxuICAgIHRoaXMuUm1hdHJpeCA9IG0zLnlSb3RhdGUodGhpcy5SbWF0cml4LCByWzFdKTtcclxuICAgIHRoaXMuUm1hdHJpeCA9IG0zLnpSb3RhdGUodGhpcy5SbWF0cml4LCByWzJdKTtcclxuXHJcbiAgICB0aGlzLlJtYXRyaXhJbnZlcnNlID0gbTMudHJhbnNwb3NlKHRoaXMuUm1hdHJpeCk7XHJcbiAgfVxyXG4gIHNldFJtYXRyaXgobWF0cml4KSB7XHJcbiAgICB0aGlzLlJtYXRyaXggPSBtYXRyaXg7XHJcbiAgICB0aGlzLlJtYXRyaXhJbnZlcnNlID0gbTMudHJhbnNwb3NlKG1hdHJpeCk7XHJcbiAgfVxyXG4gIHN1cHBvcnQoZGlyKSB7XHJcbiAgICBjb25zdCBfZGlyID0gbTMudHJhbnNmb3JtUG9pbnQodGhpcy5SbWF0cml4SW52ZXJzZSwgZGlyKTtcclxuXHJcbiAgICBjb25zdCByZXMgPSBbMCwgMCwgMF07XHJcblxyXG4gICAgcmVzWzBdID0gX2RpclswXSA+IDAgPyB0aGlzLm1heFswXSA6IHRoaXMubWluWzBdO1xyXG4gICAgcmVzWzFdID0gX2RpclsxXSA+IDAgPyB0aGlzLm1heFsxXSA6IHRoaXMubWluWzFdO1xyXG4gICAgcmVzWzJdID0gX2RpclsyXSA+IDAgPyB0aGlzLm1heFsyXSA6IHRoaXMubWluWzJdO1xyXG5cclxuICAgIGNvbnN0IHN1cCA9IG00LnRyYW5zZm9ybVBvaW50KHRoaXMuZ2V0TTQoKSwgcmVzKTtcclxuXHJcbiAgICByZXR1cm4gc3VwO1xyXG4gIH1cclxuICBnZXRJbnZlcnNlSW5lcnRpYVRlbnNvcihtYXNzKSB7XHJcbiAgICBjb25zdCBpMSA9XHJcbiAgICAgIChtYXNzIC8gMTIpICogKHRoaXMubWF4WzFdICogdGhpcy5tYXhbMV0gKyB0aGlzLm1heFsyXSAqIHRoaXMubWF4WzJdKTtcclxuICAgIGNvbnN0IGkyID1cclxuICAgICAgKG1hc3MgLyAxMikgKiAodGhpcy5tYXhbMF0gKiB0aGlzLm1heFswXSArIHRoaXMubWF4WzJdICogdGhpcy5tYXhbMl0pO1xyXG4gICAgY29uc3QgaTMgPVxyXG4gICAgICAobWFzcyAvIDEyKSAqICh0aGlzLm1heFswXSAqIHRoaXMubWF4WzBdICsgdGhpcy5tYXhbMV0gKiB0aGlzLm1heFsxXSk7XHJcblxyXG4gICAgY29uc3QgbSA9IG5ldyBGbG9hdDMyQXJyYXkoWzEgLyBpMSwgMCwgMCwgMCwgMSAvIGkyLCAwLCAwLCAwLCAxIC8gaTNdKTtcclxuXHJcbiAgICByZXR1cm4gbTMubXVsdGlwbHkobTMubXVsdGlwbHkodGhpcy5SbWF0cml4LCBtKSwgdGhpcy5SbWF0cml4SW52ZXJzZSk7XHJcbiAgfVxyXG4gIGdldE00KCkge1xyXG4gICAgY29uc3QgbSA9IG00Lm0zVG9tNCh0aGlzLlJtYXRyaXgpO1xyXG4gICAgbVsxMl0gPSB0aGlzLnBvc1swXTtcclxuICAgIG1bMTNdID0gdGhpcy5wb3NbMV07XHJcbiAgICBtWzE0XSA9IHRoaXMucG9zWzJdO1xyXG4gICAgbVsxNV0gPSAxO1xyXG4gICAgcmV0dXJuIG07XHJcbiAgfVxyXG4gIGxvY2FsVG9HbG9iYWwodikge1xyXG4gICAgbGV0IGdsb2JhbCA9IG0zLnRyYW5zZm9ybVBvaW50KHRoaXMuUm1hdHJpeCwgdik7XHJcbiAgICByZXR1cm4gc3VtKHRoaXMucG9zLCBnbG9iYWwpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHsgQm94IH07XHJcbiIsImltcG9ydCB7IHZlY3RvciwgbTMgfSBmcm9tIFwibWF0aFwiO1xyXG5pbXBvcnQgeyBHYXVzc1NlaWRlbCB9IGZyb20gXCIuL0dTc29sdmVyXCI7XHJcblxyXG5jb25zdCB7IHN1bSwgZGlmZiwgc2NhbGUsIGNyb3NzLCBkb3QsIG5vcm1hbGl6ZSwgbm9ybSwgbm9ybVNxIH0gPSB2ZWN0b3I7XHJcblxyXG5jb25zdCB0b2wgPSAwLjAxO1xyXG5jb25zdCB0b2wyID0gMC4wMDAwMTtcclxuY29uc3QgbnVtSXRlcmF0aW9ucyA9IDE7XHJcbmNvbnN0IG51bVBvc0l0ZXJhdGlvbnMgPSAxO1xyXG5cclxuY29uc3QgY2xhbXAgPSAodiwgbWluLCBtYXgpID0+IHtcclxuICBpZiAodiA+IG1pbikge1xyXG4gICAgaWYgKHYgPCBtYXgpIHJldHVybiB2O1xyXG4gICAgZWxzZSByZXR1cm4gbWF4O1xyXG4gIH1cclxuICByZXR1cm4gbWluO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0TWFuaWZvbGRTeXN0ZW0gPSAobWFuaWZvbGQpID0+IHtcclxuICBjb25zdCBib2R5MSA9IG1hbmlmb2xkLmJvZHkxO1xyXG4gIGNvbnN0IGJvZHkyID0gbWFuaWZvbGQuYm9keTI7XHJcblxyXG4gIGNvbnN0IE0xID0gYm9keTEuaW52ZXJzZU1hc3M7XHJcbiAgY29uc3QgSTEgPSBib2R5MS5pbnZlcnNlSW5lcnRpYTtcclxuICBjb25zdCBNMiA9IGJvZHkyLmludmVyc2VNYXNzO1xyXG4gIGNvbnN0IEkyID0gYm9keTIuaW52ZXJzZUluZXJ0aWE7XHJcbiAgY29uc3QgY29udGFjdHMgPSBtYW5pZm9sZC5jb250YWN0cztcclxuICBsZXQgbiA9IGNvbnRhY3RzLmxlbmd0aDtcclxuICBsZXQgQSA9IFtdO1xyXG4gIGNvbnN0IEpWID0gW107XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHtcclxuICAgIGNvbnN0IHJvd051bSA9IGkgKiBuO1xyXG4gICAgY29uc3QgSk0gPSBbXHJcbiAgICAgIHNjYWxlKGNvbnRhY3RzW2ldLkpbMF0sIE0xKSxcclxuICAgICAgbTMudHJhbnNmb3JtUG9pbnQoSTEsIGNvbnRhY3RzW2ldLkpbMV0pLFxyXG4gICAgICBzY2FsZShjb250YWN0c1tpXS5KWzJdLCBNMiksXHJcbiAgICAgIG0zLnRyYW5zZm9ybVBvaW50KEkyLCBjb250YWN0c1tpXS5KWzNdKSxcclxuICAgIF07XHJcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IG47IGorKykge1xyXG4gICAgICBpZiAoaSA9PT0gaikge1xyXG4gICAgICAgIEFbcm93TnVtICsgal0gPSBjb250YWN0c1tpXS5lZmZNYXNzO1xyXG4gICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICB9XHJcbiAgICAgIEFbcm93TnVtICsgal0gPVxyXG4gICAgICAgIGRvdChKTVswXSwgY29udGFjdHNbal0uSlswXSkgK1xyXG4gICAgICAgIGRvdChKTVsxXSwgY29udGFjdHNbal0uSlsxXSkgK1xyXG4gICAgICAgIGRvdChKTVsyXSwgY29udGFjdHNbal0uSlsyXSkgK1xyXG4gICAgICAgIGRvdChKTVszXSwgY29udGFjdHNbal0uSlszXSk7XHJcbiAgICB9XHJcbiAgICBKVi5wdXNoKFxyXG4gICAgICAtZG90KGNvbnRhY3RzW2ldLkpbMF0sIGJvZHkxLnZlbG9jaXR5KSAtXHJcbiAgICAgICAgZG90KGNvbnRhY3RzW2ldLkpbMV0sIGJvZHkxLmFuZ3VsYXJWKSAtXHJcbiAgICAgICAgZG90KGNvbnRhY3RzW2ldLkpbMl0sIGJvZHkyLnZlbG9jaXR5KSAtXHJcbiAgICAgICAgZG90KGNvbnRhY3RzW2ldLkpbM10sIGJvZHkyLmFuZ3VsYXJWKVxyXG4gICAgKTtcclxuICB9XHJcbiAgcmV0dXJuIHsgQSwgSlYgfTtcclxufTtcclxuY29uc3QgYmxvY2tTb2x2ZXIgPSAobWFuaWZvbGQsIGRlbHRhVGltZSkgPT4ge1xyXG4gIGNvbnN0IGJvZHkxID0gbWFuaWZvbGQuYm9keTE7XHJcbiAgY29uc3QgYm9keTIgPSBtYW5pZm9sZC5ib2R5MjtcclxuXHJcbiAgY29uc3QgY29udGFjdHMgPSBtYW5pZm9sZC5jb250YWN0cztcclxuICBsZXQgbiA9IGNvbnRhY3RzLmxlbmd0aDtcclxuXHJcbiAgY29uc3QgeyBBLCBKViB9ID0gZ2V0TWFuaWZvbGRTeXN0ZW0obWFuaWZvbGQpO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAvLyBKVltpXSArPSBNYXRoLm1heCgwLGNvbnRhY3RzW2ldLnBlbkRlcHRoLXRvbCkvZGVsdGFUaW1lICogMC4yNVxyXG4gIH1cclxuICBjb25zdCBsYW1iZGEgPSBHYXVzc1NlaWRlbChBLCBKViwgbiwgMC4wMDAwMDEpO1xyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xyXG4gICAgYm9keTEuYXBwbHlJbXB1bHNlKHNjYWxlKGNvbnRhY3RzW2ldLkpbMF0sIGxhbWJkYVtpXSksIGNvbnRhY3RzW2ldLnJhKTtcclxuICAgIGJvZHkyLmFwcGx5SW1wdWxzZShzY2FsZShjb250YWN0c1tpXS5KWzJdLCBsYW1iZGFbaV0pLCBjb250YWN0c1tpXS5yYik7XHJcbiAgfVxyXG4gIHJldHVybiBsYW1iZGE7XHJcbn07XHJcbmNvbnN0IGZyaWN0aW9uU29sdmVyID0gKGNvbnRhY3QsIGxhbWJkYSwgYm9keTEsIGJvZHkyKSA9PiB7XHJcbiAgY29udGFjdC5yZWxWZWxvY2l0eSA9IHN1bShib2R5Mi52ZWxvY2l0eSwgY3Jvc3MoYm9keTIuYW5ndWxhclYsIGNvbnRhY3QucmIpKTtcclxuICBjb250YWN0LnJlbFZlbG9jaXR5ID0gZGlmZihjb250YWN0LnJlbFZlbG9jaXR5LCBib2R5MS52ZWxvY2l0eSk7XHJcbiAgY29udGFjdC5yZWxWZWxvY2l0eSA9IGRpZmYoXHJcbiAgICBjb250YWN0LnJlbFZlbG9jaXR5LFxyXG4gICAgY3Jvc3MoYm9keTEuYW5ndWxhclYsIGNvbnRhY3QucmEpXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgbXUgPSBib2R5MS5mcmljdGlvbiArIGJvZHkxLmZyaWN0aW9uO1xyXG4gIGxldCBmSW1wdWxzZTEgPSAtZG90KGNvbnRhY3QucmVsVmVsb2NpdHksIGNvbnRhY3QuZkRpcjEpIC8gY29udGFjdC5mRWZmTWFzczE7XHJcbiAgZkltcHVsc2UxID0gY2xhbXAoZkltcHVsc2UxLCAtbGFtYmRhICogbXUsIGxhbWJkYSAqIG11KTtcclxuXHJcbiAgbGV0IGZJbXB1bHNlMiA9IC1kb3QoY29udGFjdC5yZWxWZWxvY2l0eSwgY29udGFjdC5mRGlyMikgLyBjb250YWN0LmZFZmZNYXNzMjtcclxuICBmSW1wdWxzZTIgPSBjbGFtcChmSW1wdWxzZTIsIC1sYW1iZGEgKiBtdSwgbGFtYmRhICogbXUpO1xyXG5cclxuICBjb250YWN0LmFjY0ZJMSArPSBmSW1wdWxzZTE7XHJcbiAgY29udGFjdC5hY2NGSTIgKz0gZkltcHVsc2UyO1xyXG5cclxuICBsZXQgZlZlYyA9IHN1bShcclxuICAgIHNjYWxlKGNvbnRhY3QuZkRpcjEsIGZJbXB1bHNlMSksXHJcbiAgICBzY2FsZShjb250YWN0LmZEaXIyLCBmSW1wdWxzZTIpXHJcbiAgKTtcclxuXHJcbiAgYm9keTEuYXBwbHlJbXB1bHNlKHNjYWxlKGZWZWMsIC0xKSwgY29udGFjdC5yYSk7XHJcbiAgYm9keTIuYXBwbHlJbXB1bHNlKGZWZWMsIGNvbnRhY3QucmIpO1xyXG59O1xyXG5mdW5jdGlvbiBzb2x2ZUNvbGxpc2lvbihtYW5pZm9sZCwgZGVsdGFUaW1lKSB7XHJcbiAgY29uc3QgYm9keTEgPSBtYW5pZm9sZC5ib2R5MTtcclxuICBjb25zdCBib2R5MiA9IG1hbmlmb2xkLmJvZHkyO1xyXG4gIGNvbnN0IGNvbnRhY3RzID0gbWFuaWZvbGQuY29udGFjdHM7XHJcbiAgaWYgKGNvbnRhY3RzLmxlbmd0aCA+IDEpIHtcclxuICAgIGNvbnN0IGxhbWJkYSA9IGJsb2NrU29sdmVyKG1hbmlmb2xkLCBkZWx0YVRpbWUpO1xyXG4gICAgY29uc3QgbiA9IGxhbWJkYS5sZW5ndGg7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xyXG4gICAgICBmcmljdGlvblNvbHZlcihjb250YWN0c1tpXSwgbGFtYmRhW2ldLCBib2R5MSwgYm9keTIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICBmb3IgKGxldCBqID0gMDsgaiA8IG51bUl0ZXJhdGlvbnM7IGorKykge1xyXG4gICAgZm9yIChsZXQgaSA9IDAsIG4gPSBtYW5pZm9sZC5jb250YWN0cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgY29uc3QgY29udGFjdCA9IG1hbmlmb2xkLmNvbnRhY3RzW2ldO1xyXG4gICAgICBjb25zdCBrMiA9IGNvbnRhY3QuZWZmTWFzcztcclxuXHJcbiAgICAgIGlmIChjb250YWN0LnBlbkRlcHRoIDw9IDApIHJldHVybjtcclxuXHJcbiAgICAgIGNvbnRhY3QucmVsVmVsb2NpdHkgPSBzdW0oXHJcbiAgICAgICAgYm9keTIudmVsb2NpdHksXHJcbiAgICAgICAgY3Jvc3MoYm9keTIuYW5ndWxhclYsIGNvbnRhY3QucmIpXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnRhY3QucmVsVmVsb2NpdHkgPSBkaWZmKGNvbnRhY3QucmVsVmVsb2NpdHksIGJvZHkxLnZlbG9jaXR5KTtcclxuICAgICAgY29udGFjdC5yZWxWZWxvY2l0eSA9IGRpZmYoXHJcbiAgICAgICAgY29udGFjdC5yZWxWZWxvY2l0eSxcclxuICAgICAgICBjcm9zcyhib2R5MS5hbmd1bGFyViwgY29udGFjdC5yYSlcclxuICAgICAgKTtcclxuICAgICAgY29uc3QgVmMgPSBkb3QoY29udGFjdC5yZWxWZWxvY2l0eSwgY29udGFjdC5uKTtcclxuICAgICAgY29uc3QgcmVzdGl0dXRpb24gPSBNYXRoLm1heChWYyAtIHRvbDIsIDApICogMC4xO1xyXG4gICAgICBsZXQgYiA9IChNYXRoLm1heCgwLCBjb250YWN0LnBlbkRlcHRoIC0gdG9sKSAvIGRlbHRhVGltZSkgKiAwLjI1O1xyXG5cclxuICAgICAgbGV0IGxhbWJkYSA9IC1WYyAvIGNvbnRhY3QuZWZmTWFzcztcclxuICAgICAgbGV0IG9sZEFjYyA9IGNvbnRhY3QuYWNjSTtcclxuICAgICAgY29udGFjdC5hY2NJICs9IGxhbWJkYTtcclxuICAgICAgaWYgKGNvbnRhY3QuYWNjSSA8IDApIGNvbnRhY3QuYWNjSSA9IDA7XHJcbiAgICAgIGxhbWJkYSA9IGNvbnRhY3QuYWNjSSAtIG9sZEFjYztcclxuXHJcbiAgICAgIGJvZHkxLmFwcGx5SW1wdWxzZShzY2FsZShjb250YWN0Lm4sIC1sYW1iZGEpLCBjb250YWN0LnJhKTtcclxuICAgICAgYm9keTIuYXBwbHlJbXB1bHNlKHNjYWxlKGNvbnRhY3QubiwgbGFtYmRhKSwgY29udGFjdC5yYik7XHJcbiAgICAgIGZyaWN0aW9uU29sdmVyKGNvbnRhY3QsIGxhbWJkYSwgYm9keTEsIGJvZHkyKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IHNvbHZlQ29uc3RyYWludCA9IChjb25zdHJhaW50LCBkZWx0YVRpbWUpID0+IHtcclxuICBjb25zdCByYSA9IGNvbnN0cmFpbnQuYm9keTEuY29sbGlkZXIubG9jYWxUb0dsb2JhbChjb25zdHJhaW50LnJhKTtcclxuICBjb25zdCByYiA9IGNvbnN0cmFpbnQuYm9keTIuY29sbGlkZXIubG9jYWxUb0dsb2JhbChjb25zdHJhaW50LnJiKTtcclxuICBjb25zdCBuID0gY29uc3RyYWludC5uO1xyXG5cclxuICBpZiAoY29uc3RyYWludC5kaXN0IDwgMC4wMSkgcmV0dXJuO1xyXG4gIGNvbnN0IG5vcm1hbCA9IHNjYWxlKGNvbnN0cmFpbnQubiwgMSAvIGNvbnN0cmFpbnQuZGlzdCk7XHJcbiAgbGV0IHYxID0gc3VtKFxyXG4gICAgY29uc3RyYWludC5ib2R5MS52ZWxvY2l0eSxcclxuICAgIGNyb3NzKGNvbnN0cmFpbnQuYm9keTEuYW5ndWxhclYsIGNvbnN0cmFpbnQucmEpXHJcbiAgKTtcclxuICBsZXQgdjIgPSBzdW0oXHJcbiAgICBjb25zdHJhaW50LmJvZHkyLnZlbG9jaXR5LFxyXG4gICAgY3Jvc3MoY29uc3RyYWludC5ib2R5Mi5hbmd1bGFyViwgY29uc3RyYWludC5yYilcclxuICApO1xyXG4gIGxldCByZWxWZWxvY2l0eSA9IGRpZmYodjIsIHYxKTtcclxuXHJcbiAgY29uc3QgVmMgPSBkb3QocmVsVmVsb2NpdHksIG5vcm1hbCk7XHJcbiAgbGV0IGIgPSAoY29uc3RyYWludC5kaXN0IC8gZGVsdGFUaW1lKSAqIDAuMjtcclxuICBjb25zdCBzb2Z0bmVzcyA9IDI7XHJcbiAgbGV0IGxhbWJkYSA9IC1WYyAvIGNvbnN0cmFpbnQuZWZmTWFzcztcclxuXHJcbiAgY29uc3RyYWludC5ib2R5MS5hcHBseUltcHVsc2Uoc2NhbGUobm9ybWFsLCAtbGFtYmRhKSwgY29uc3RyYWludC5yYSk7XHJcbiAgY29uc3RyYWludC5ib2R5Mi5hcHBseUltcHVsc2Uoc2NhbGUobm9ybWFsLCBsYW1iZGEpLCBjb25zdHJhaW50LnJiKTtcclxufTtcclxuXHJcbmNvbnN0IHNvbHZlUG9zaXRpb24gPSAoY29uc3RyYWludCwgZGVsdGFUaW1lKSA9PiB7XHJcbiAgaWYgKGNvbnN0cmFpbnQuZGlzdCA8IDAuMDEpIHJldHVybjtcclxuICBjb25zdCBub3JtYWwgPSBzY2FsZShjb25zdHJhaW50Lm4sIDEgLyBjb25zdHJhaW50LmRpc3QpO1xyXG4gIGxldCB2MSA9IHN1bShcclxuICAgIGNvbnN0cmFpbnQuYm9keTEucHNldWRvVmVsb2NpdHksXHJcbiAgICBjcm9zcyhjb25zdHJhaW50LmJvZHkxLnBzZXVkb0FuZ3VsYXJWLCBjb25zdHJhaW50LnJhKVxyXG4gICk7XHJcbiAgbGV0IHYyID0gc3VtKFxyXG4gICAgY29uc3RyYWludC5ib2R5Mi5wc2V1ZG9WZWxvY2l0eSxcclxuICAgIGNyb3NzKGNvbnN0cmFpbnQuYm9keTIucHNldWRvQW5ndWxhclYsIGNvbnN0cmFpbnQucmIpXHJcbiAgKTtcclxuICBsZXQgcmVsVmVsb2NpdHkgPSBkaWZmKFxyXG4gICAgY29uc3RyYWludC5ib2R5Mi5wc2V1ZG9WZWxvY2l0eSxcclxuICAgIGNvbnN0cmFpbnQuYm9keTEucHNldWRvVmVsb2NpdHlcclxuICApO1xyXG5cclxuICBjb25zdCBWYyA9IGRvdChyZWxWZWxvY2l0eSwgbm9ybWFsKTtcclxuXHJcbiAgbGV0IGIgPSBNYXRoLm1heCgwLCBjb25zdHJhaW50LmRpc3QgLyBkZWx0YVRpbWUgLSAwLjAxKTtcclxuICBjb25zdCBzb2Z0bmVzcyA9IDI7XHJcbiAgbGV0IGxhbWJkYSA9XHJcbiAgICAoYiAtIFZjKSAvIChjb25zdHJhaW50LmJvZHkxLmludmVyc2VNYXNzICsgY29uc3RyYWludC5ib2R5Mi5pbnZlcnNlTWFzcyk7XHJcblxyXG4gIGlmIChNYXRoLmFicyhsYW1iZGEpIDwgMC4xKSByZXR1cm47XHJcblxyXG4gIGNvbnN0cmFpbnQuYm9keTEuYXBwbHlQc2V1ZG9JbXB1bHNlKHNjYWxlKG5vcm1hbCwgLWxhbWJkYSksIFswLCAwLCAwXSk7XHJcbiAgY29uc3RyYWludC5ib2R5Mi5hcHBseVBzZXVkb0ltcHVsc2Uoc2NhbGUobm9ybWFsLCBsYW1iZGEpLCBbMCwgMCwgMF0pO1xyXG59O1xyXG5cclxuY29uc3Qgc29sdmVDb250YWN0UG9zaXRpb25FcnIgPSAoY29udGFjdCwgZGVsdGFUaW1lLCBuKSA9PiB7XHJcbiAgaWYgKGNvbnRhY3QucGVuRGVwdGggPCAwLjAxKSByZXR1cm47XHJcblxyXG4gIGxldCB2MSA9IHN1bShcclxuICAgIGNvbnRhY3QuYm9keTEucHNldWRvVmVsb2NpdHksXHJcbiAgICBjcm9zcyhjb250YWN0LmJvZHkxLnBzZXVkb0FuZ3VsYXJWLCBjb250YWN0LnJhKVxyXG4gICk7XHJcbiAgbGV0IHYyID0gc3VtKFxyXG4gICAgY29udGFjdC5ib2R5Mi5wc2V1ZG9WZWxvY2l0eSxcclxuICAgIGNyb3NzKGNvbnRhY3QuYm9keTIucHNldWRvQW5ndWxhclYsIGNvbnRhY3QucmIpXHJcbiAgKTtcclxuICBsZXQgcmVsVmVsb2NpdHkgPSBkaWZmKHYyLCB2MSk7XHJcblxyXG4gIGNvbnN0IFZjID0gZG90KHJlbFZlbG9jaXR5LCBjb250YWN0Lm4pO1xyXG4gIC8vaWYoVmMgPCAwKXJldHVyblxyXG5cclxuICBsZXQgYiA9IGNvbnRhY3QucGVuRGVwdGggLyBkZWx0YVRpbWUgLyBuO1xyXG4gIC8vaWYoVmMgPj0gYikgcmV0dXJuXHJcbiAgbGV0IGxhbWJkYSA9XHJcbiAgICAoYiAtIFZjKSAvIChjb250YWN0LmJvZHkxLmludmVyc2VNYXNzICsgY29udGFjdC5ib2R5Mi5pbnZlcnNlTWFzcyk7XHJcblxyXG4gIGNvbnRhY3QucGVuRGVwdGggPSAwO1xyXG5cclxuICAvL2lmKE1hdGguYWJzKGxhbWJkYSkgPCAwLjEpcmV0dXJuXHJcblxyXG4gIGNvbnRhY3QuYm9keTEuYXBwbHlQc2V1ZG9JbXB1bHNlKHNjYWxlKGNvbnRhY3QubiwgLWxhbWJkYSksIFswLCAwLCAwXSk7XHJcbiAgY29udGFjdC5ib2R5Mi5hcHBseVBzZXVkb0ltcHVsc2Uoc2NhbGUoY29udGFjdC5uLCBsYW1iZGEpLCBbMCwgMCwgMF0pO1xyXG59O1xyXG5leHBvcnQgeyBzb2x2ZUNvbGxpc2lvbiwgc29sdmVQb3NpdGlvbiwgc29sdmVDb250YWN0UG9zaXRpb25FcnIgfTtcclxuIiwiaW1wb3J0IHsgdmVjdG9yLCBtMyB9IGZyb20gXCJtYXRoXCI7XHJcblxyXG5jb25zdCB7IGRvdCwgY3Jvc3MsIG5vcm1hbGl6ZSwgZGlmZiwgc2NhbGUsIG5vcm0sIHN1bSB9ID0gdmVjdG9yO1xyXG5cclxuY2xhc3MgQ29uc3RyYWludCB7XHJcbiAgY29uc3RydWN0b3IoYm9keTEsIGJvZHkyKSB7XHJcbiAgICB0aGlzLmJpYXMgPSBudWxsO1xyXG4gICAgdGhpcy5uID0gbnVsbDtcclxuICAgIHRoaXMuSiA9IG51bGw7XHJcbiAgICB0aGlzLmludk1hc3MxID0gbnVsbDtcclxuICAgIHRoaXMuSk0gPSBudWxsO1xyXG4gICAgdGhpcy5ib2R5MSA9IGJvZHkxO1xyXG4gICAgdGhpcy5ib2R5MiA9IGJvZHkyO1xyXG4gICAgdGhpcy5yYSA9IG51bGw7XHJcbiAgICB0aGlzLnJiID0gbnVsbDtcclxuICB9XHJcbiAgdXBkYXRlRXEoKSB7fVxyXG4gIGFwcGx5UmVzb2x2aW5nSW1wdWxzZShsYW1iZGEpIHt9XHJcbn1cclxuY29uc3QgY2xhbXAgPSAodiwgbWluLCBtYXgpID0+IHtcclxuICBpZiAodiA+IG1pbikge1xyXG4gICAgaWYgKHYgPCBtYXgpIHJldHVybiB2O1xyXG4gICAgZWxzZSByZXR1cm4gbWF4O1xyXG4gIH1cclxuICByZXR1cm4gbWluO1xyXG59O1xyXG5cclxuY29uc3QgZnJpY3Rpb25Tb2x2ZXIgPSAoY29udGFjdCwgbGFtYmRhLCBib2R5MSwgYm9keTIpID0+IHtcclxuICBjb250YWN0LnJlbFZlbG9jaXR5ID0gc3VtKGJvZHkyLnZlbG9jaXR5LCBjcm9zcyhib2R5Mi5hbmd1bGFyViwgY29udGFjdC5yYikpO1xyXG4gIGNvbnRhY3QucmVsVmVsb2NpdHkgPSBkaWZmKGNvbnRhY3QucmVsVmVsb2NpdHksIGJvZHkxLnZlbG9jaXR5KTtcclxuICBjb250YWN0LnJlbFZlbG9jaXR5ID0gZGlmZihcclxuICAgIGNvbnRhY3QucmVsVmVsb2NpdHksXHJcbiAgICBjcm9zcyhib2R5MS5hbmd1bGFyViwgY29udGFjdC5yYSlcclxuICApO1xyXG5cclxuICBjb25zdCBtdSA9IChib2R5MS5mcmljdGlvbiArIGJvZHkxLmZyaWN0aW9uKTtcclxuICBsZXQgZkltcHVsc2UxID0gLWRvdChjb250YWN0LnJlbFZlbG9jaXR5LCBjb250YWN0LmZEaXIxKSAvIGNvbnRhY3QuZkVmZk1hc3MxO1xyXG4gIGZJbXB1bHNlMSA9IGNsYW1wKGZJbXB1bHNlMSwgLWxhbWJkYSAqIG11LCBsYW1iZGEgKiBtdSk7XHJcblxyXG4gIGxldCBmSW1wdWxzZTIgPSAtZG90KGNvbnRhY3QucmVsVmVsb2NpdHksIGNvbnRhY3QuZkRpcjIpIC8gY29udGFjdC5mRWZmTWFzczI7XHJcbiAgZkltcHVsc2UyID0gY2xhbXAoZkltcHVsc2UyLCAtbGFtYmRhICogbXUsIGxhbWJkYSAqIG11KTtcclxuXHJcbiAgY29udGFjdC5hY2NGSTEgKz0gZkltcHVsc2UxO1xyXG4gIGNvbnRhY3QuYWNjRkkyICs9IGZJbXB1bHNlMjtcclxuXHJcbiAgbGV0IGZWZWMgPSBzdW0oXHJcbiAgICBzY2FsZShjb250YWN0LmZEaXIxLCBmSW1wdWxzZTEpLFxyXG4gICAgc2NhbGUoY29udGFjdC5mRGlyMiwgZkltcHVsc2UyKVxyXG4gICk7XHJcblxyXG4gIGJvZHkxLmFwcGx5SW1wdWxzZShzY2FsZShmVmVjLCAtMSksIGNvbnRhY3QucmEpO1xyXG4gIGJvZHkyLmFwcGx5SW1wdWxzZShmVmVjLCBjb250YWN0LnJiKTtcclxufTtcclxuY2xhc3MgQ29udGFjdCBleHRlbmRzIENvbnN0cmFpbnQge1xyXG4gIGNvbnN0cnVjdG9yKHJhTG9jYWwsIHJiTG9jYWwsIG4sIGJvZHkxLCBib2R5Mikge1xyXG4gICAgc3VwZXIoYm9keTEsIGJvZHkyKTtcclxuICAgIHRoaXMucmEgPSBudWxsO1xyXG4gICAgdGhpcy5yYiA9IG51bGw7XHJcbiAgICB0aGlzLlBBID0gbnVsbDtcclxuICAgIHRoaXMuUEIgPSBudWxsO1xyXG4gICAgdGhpcy5uID0gbjtcclxuICAgIHRoaXMucGVuRGVwdGggPSBudWxsO1xyXG4gICAgdGhpcy5pbml0aWFsVmVsUHJvaiA9IG51bGw7XHJcbiAgICB0aGlzLmVmZk1hc3MgPSBudWxsO1xyXG4gICAgdGhpcy5yYUxvY2FsID0gcmFMb2NhbDtcclxuICAgIHRoaXMucmJMb2NhbCA9IHJiTG9jYWw7XHJcbiAgICB0aGlzLkogPSBudWxsO1xyXG4gICAgdGhpcy5hY2NJID0gMDtcclxuICAgIHRoaXMuYWNjRkkxID0gMDtcclxuICAgIHRoaXMuYWNjRkkyID0gMDtcclxuICAgIHRyeSB7XHJcbiAgICAgIGlmIChkb3QodGhpcy5uLCBbMSwgMCwgMF0pIDwgMC41KSB7XHJcbiAgICAgICAgdGhpcy5mRGlyMSA9IGNyb3NzKHRoaXMubiwgWzEsIDAsIDBdKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmZEaXIxID0gY3Jvc3ModGhpcy5uLCBbMCwgMCwgMV0pO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuZkRpcjIgPSBub3JtYWxpemUoY3Jvc3ModGhpcy5mRGlyMSwgdGhpcy5uKSk7XHJcbiAgICAgIHRoaXMuZkRpcjEgPSBub3JtYWxpemUodGhpcy5mRGlyMSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5sb2codGhpcy5uKTtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIF9KKCkge1xyXG4gICAgcmV0dXJuIFtcclxuICAgICAgc2NhbGUodGhpcy5uLCAtMSksXHJcbiAgICAgIGNyb3NzKHRoaXMubiwgdGhpcy5yYSksXHJcbiAgICAgIHRoaXMubixcclxuICAgICAgY3Jvc3ModGhpcy5yYiwgdGhpcy5uKSxcclxuICAgIF07XHJcbiAgfVxyXG4gIHVwZGF0ZUNvbnRhY3REYXRhKCkge1xyXG4gICAgY29uc3QgY29sMSA9IHRoaXMuYm9keTEuY29sbGlkZXI7XHJcbiAgICBjb25zdCBjb2wyID0gdGhpcy5ib2R5Mi5jb2xsaWRlcjtcclxuICAgIGNvbnN0IFBBID0gc3VtKGNvbDEucG9zLCBtMy50cmFuc2Zvcm1Qb2ludChjb2wxLlJtYXRyaXgsIHRoaXMucmFMb2NhbCkpO1xyXG4gICAgY29uc3QgUEIgPSBzdW0oY29sMi5wb3MsIG0zLnRyYW5zZm9ybVBvaW50KGNvbDIuUm1hdHJpeCwgdGhpcy5yYkxvY2FsKSk7XHJcblxyXG4gICAgdGhpcy5yYSA9IGRpZmYoUEEsIGNvbDEucG9zKTtcclxuICAgIHRoaXMucmIgPSBkaWZmKFBCLCBjb2wyLnBvcyk7XHJcbiAgICB0aGlzLnBlbkRlcHRoID0gLWRvdChkaWZmKFBCLCBQQSksIHRoaXMubik7XHJcbiAgfVxyXG4gIHVwZGF0ZUVxKCkge1xyXG4gICAgdGhpcy51cGRhdGVDb250YWN0RGF0YSgpO1xyXG4gICAgdGhpcy5KID0gW1xyXG4gICAgICBzY2FsZSh0aGlzLm4sIC0xKSxcclxuICAgICAgY3Jvc3ModGhpcy5uLCB0aGlzLnJhKSxcclxuICAgICAgdGhpcy5uLFxyXG4gICAgICBjcm9zcyh0aGlzLnJiLCB0aGlzLm4pLFxyXG4gICAgXTtcclxuICAgIGNvbnN0IEkxID0gdGhpcy5ib2R5MS5nZXRJdGVuc29yKCk7XHJcbiAgICBjb25zdCBJMiA9IHRoaXMuYm9keTIuZ2V0SXRlbnNvcigpO1xyXG4gICAgY29uc3QgTTEgPSB0aGlzLmJvZHkxLmludmVyc2VNYXNzO1xyXG4gICAgY29uc3QgTTIgPSB0aGlzLmJvZHkyLmludmVyc2VNYXNzO1xyXG4gICAgdGhpcy5KTSA9IFtcclxuICAgICAgc2NhbGUodGhpcy5KWzBdLCBNMSksXHJcbiAgICAgIG0zLnRyYW5zZm9ybVBvaW50KEkxLCB0aGlzLkpbMV0pLFxyXG4gICAgICBzY2FsZSh0aGlzLkpbMl0sIE0yKSxcclxuICAgICAgbTMudHJhbnNmb3JtUG9pbnQoSTIsIHRoaXMuSlszXSksXHJcbiAgICBdO1xyXG4gICAgdGhpcy5lZmZNYXNzID1cclxuICAgICAgTTEgKyBkb3QodGhpcy5KTVswXSwgdGhpcy5KWzFdKSArIE0yICsgZG90KHRoaXMuSk1bM10sIHRoaXMuSlszXSk7XHJcbiAgICBjb25zdCB0SjEgPSBbXHJcbiAgICAgIHRoaXMuZkRpcjEsXHJcbiAgICAgIGNyb3NzKHRoaXMuZkRpcjEsIHRoaXMucmEpLFxyXG4gICAgICBzY2FsZSh0aGlzLmZEaXIxLCAtMSksXHJcbiAgICAgIGNyb3NzKHRoaXMucmIsIHRoaXMuZkRpcjEpLFxyXG4gICAgXTtcclxuICAgIHRoaXMuZkVmZk1hc3MxID1cclxuICAgICAgdGhpcy5ib2R5MS5pbnZlcnNlTWFzcyArXHJcbiAgICAgIG0zLmRvdChtMy50cmFuc2Zvcm1Qb2ludCh0aGlzLmJvZHkxLmludmVyc2VJbmVydGlhLCB0SjFbMV0pLCB0SjFbMV0pICtcclxuICAgICAgdGhpcy5ib2R5Mi5pbnZlcnNlTWFzcyArXHJcbiAgICAgIG0zLmRvdChtMy50cmFuc2Zvcm1Qb2ludCh0aGlzLmJvZHkyLmludmVyc2VJbmVydGlhLCB0SjFbM10pLCB0SjFbM10pO1xyXG4gICAgY29uc3QgdEoyID0gW1xyXG4gICAgICBzY2FsZSh0aGlzLmZEaXIyLCAtMSksXHJcbiAgICAgIGNyb3NzKHRoaXMuZkRpcjIsIHRoaXMucmEpLFxyXG4gICAgICB0aGlzLmZEaXIyLFxyXG4gICAgICBjcm9zcyh0aGlzLmZEaXIyLCB0aGlzLnJiKSxcclxuICAgIF07XHJcbiAgICB0aGlzLmZFZmZNYXNzMiA9XHJcbiAgICAgIHRoaXMuYm9keTEuaW52ZXJzZU1hc3MgK1xyXG4gICAgICBtMy5kb3QobTMudHJhbnNmb3JtUG9pbnQodGhpcy5ib2R5MS5pbnZlcnNlSW5lcnRpYSwgdEoyWzFdKSwgdEoyWzFdKSArXHJcbiAgICAgIHRoaXMuYm9keTIuaW52ZXJzZU1hc3MgK1xyXG4gICAgICBtMy5kb3QobTMudHJhbnNmb3JtUG9pbnQodGhpcy5ib2R5Mi5pbnZlcnNlSW5lcnRpYSwgdEoyWzNdKSwgdEoyWzNdKTtcclxuICAgIHRoaXMuYmlhcyA9IHRoaXMucGVuRGVwdGg7XHJcbiAgfVxyXG4gIGFwcGx5UmVzb2x2aW5nSW1wdWxzZShsYW1iZGEpIHtcclxuICAgIGlmIChsYW1iZGEgPCAwKSByZXR1cm47XHJcblxyXG4gICAgdGhpcy5ib2R5MS5hcHBseUltcHVsc2Uoc2NhbGUodGhpcy5KWzBdLCBsYW1iZGEpLCB0aGlzLnJhKTtcclxuICAgIHRoaXMuYm9keTIuYXBwbHlJbXB1bHNlKHNjYWxlKHRoaXMuSlsyXSwgbGFtYmRhKSwgdGhpcy5yYik7XHJcbiAgICBmcmljdGlvblNvbHZlcih0aGlzLCBsYW1iZGEsIHRoaXMuYm9keTEsIHRoaXMuYm9keTIpXHJcbiAgfVxyXG4gIGFwcGx5UmVzb2x2aW5nUHNldWRvSW1wdWxzZShsYW1iZGEpIHtcclxuICAgIGlmIChsYW1iZGEgPCAwKSByZXR1cm47XHJcbiAgICBsYW1iZGEgPSBNYXRoLm1pbigxMCwgbGFtYmRhKTtcclxuICAgIHRoaXMuYm9keTEuYXBwbHlQc2V1ZG9JbXB1bHNlKHNjYWxlKHRoaXMuSlswXSwgbGFtYmRhKSwgdGhpcy5yYSk7XHJcbiAgICB0aGlzLmJvZHkyLmFwcGx5UHNldWRvSW1wdWxzZShzY2FsZSh0aGlzLkpbMl0sIGxhbWJkYSksIHRoaXMucmIpO1xyXG4gIH1cclxuICBnZW5lcmF0ZUZyaWN0aW9uQ29uc3RyYWludHMoKSB7XHJcbiAgICBsZXQgZkRpcjEsIGZEaXIyO1xyXG5cclxuICAgIGlmIChkb3QodGhpcy5uLCBbMSwgMCwgMF0pIDwgMC41KSB7XHJcbiAgICAgIGZEaXIxID0gY3Jvc3ModGhpcy5uLCBbMSwgMCwgMF0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZkRpcjEgPSBjcm9zcyh0aGlzLm4sIFswLCAwLCAxXSk7XHJcbiAgICB9XHJcbiAgICBmRGlyMiA9IG5vcm1hbGl6ZShjcm9zcyhmRGlyMSwgdGhpcy5uKSk7XHJcbiAgICBmRGlyMSA9IG5vcm1hbGl6ZShmRGlyMSk7XHJcblxyXG4gICAgcmV0dXJuIFtcclxuICAgICAgbmV3IEZyaWN0aW9uQ29uc3RyYWludChmRGlyMSwgdGhpcy5yYSwgdGhpcy5yYiwgdGhpcy5ib2R5MSwgdGhpcy5ib2R5MiksXHJcbiAgICAgIG5ldyBGcmljdGlvbkNvbnN0cmFpbnQoZkRpcjIsIHRoaXMucmEsIHRoaXMucmIsIHRoaXMuYm9keTEsIHRoaXMuYm9keTIpLFxyXG4gICAgXTtcclxuICB9XHJcbn1cclxuY2xhc3MgRnJpY3Rpb25Db25zdHJhaW50IGV4dGVuZHMgQ29uc3RyYWludCB7XHJcbiAgY29uc3RydWN0b3IoZkRpciwgcmEsIHJiLCBib2R5MSwgYm9keTIpIHtcclxuICAgIHN1cGVyKGJvZHkxLCBib2R5Mik7XHJcbiAgICB0aGlzLmZEaXIgPSBmRGlyO1xyXG4gICAgdGhpcy5yYSA9IHJhO1xyXG4gICAgdGhpcy5yYiA9IHJiO1xyXG4gIH1cclxuICB1cGRhdGVFcSgpIHtcclxuICAgIHRoaXMuSiA9IFtcclxuICAgICAgdGhpcy5mRGlyLFxyXG4gICAgICBjcm9zcyh0aGlzLmZEaXIsIHRoaXMucmEpLFxyXG4gICAgICBzY2FsZSh0aGlzLmZEaXIsIC0xKSxcclxuICAgICAgY3Jvc3ModGhpcy5yYiwgdGhpcy5mRGlyKSxcclxuICAgIF07XHJcbiAgICBjb25zdCBJMSA9IHRoaXMuYm9keTEuaW52ZXJzZUluZXJ0aWE7XHJcbiAgICBjb25zdCBJMiA9IHRoaXMuYm9keTIuaW52ZXJzZUluZXJ0aWE7XHJcbiAgICBjb25zdCBNMSA9IHRoaXMuYm9keTEuaW52ZXJzZU1hc3M7XHJcbiAgICBjb25zdCBNMiA9IHRoaXMuYm9keTIuaW52ZXJzZU1hc3M7XHJcbiAgICB0aGlzLkpNID0gW1xyXG4gICAgICBzY2FsZSh0aGlzLkpbMF0sIE0xKSxcclxuICAgICAgbTMudHJhbnNmb3JtUG9pbnQoSTEsIHRoaXMuSlsxXSksXHJcbiAgICAgIHNjYWxlKHRoaXMuSlsyXSwgTTIpLFxyXG4gICAgICBtMy50cmFuc2Zvcm1Qb2ludChJMiwgdGhpcy5KWzNdKSxcclxuICAgIF07XHJcbiAgICB0aGlzLmVmZk1hc3MgPVxyXG4gICAgICBNMSArIGRvdCh0aGlzLkpNWzBdLCB0aGlzLkpbMV0pICsgTTIgKyBkb3QodGhpcy5KTVszXSwgdGhpcy5KWzNdKTtcclxuICB9XHJcbn1cclxuY2xhc3MgSm9pbnQgZXh0ZW5kcyBDb25zdHJhaW50IHtcclxuICBjb25zdHJ1Y3Rvcihsb2NhbFJhLCBsb2NhbFJiLCBib2R5MSwgYm9keTIpIHtcclxuICAgIHN1cGVyKGJvZHkxLCBib2R5Mik7XHJcbiAgICB0aGlzLmxvY2FsUmEgPSBsb2NhbFJhO1xyXG4gICAgdGhpcy5sb2NhbFJiID0gbG9jYWxSYjtcclxuICAgIHRoaXMuUEEgPSB0aGlzLmJvZHkxLmNvbGxpZGVyLmxvY2FsVG9HbG9iYWwodGhpcy5sb2NhbFJhKTtcclxuICAgIHRoaXMuUEIgPSB0aGlzLmJvZHkyLmNvbGxpZGVyLmxvY2FsVG9HbG9iYWwodGhpcy5sb2NhbFJiKTtcclxuICB9XHJcbiAgdXBkYXRlRXEoKSB7XHJcbiAgICB0aGlzLlBBID0gdGhpcy5ib2R5MS5jb2xsaWRlci5sb2NhbFRvR2xvYmFsKHRoaXMubG9jYWxSYSk7XHJcbiAgICB0aGlzLlBCID0gdGhpcy5ib2R5Mi5jb2xsaWRlci5sb2NhbFRvR2xvYmFsKHRoaXMubG9jYWxSYik7XHJcbiAgICB0aGlzLm4gPSBkaWZmKHRoaXMuUEEsIHRoaXMuUEIpO1xyXG4gICAgdGhpcy5yYSA9IGRpZmYodGhpcy5QQSwgdGhpcy5ib2R5MS5jb2xsaWRlci5wb3MpO1xyXG4gICAgdGhpcy5yYiA9IGRpZmYodGhpcy5QQiwgdGhpcy5ib2R5Mi5jb2xsaWRlci5wb3MpO1xyXG4gICAgdGhpcy5kaXN0ID0gbm9ybSh0aGlzLm4pO1xyXG4gICAgdGhpcy5KID0gW1xyXG4gICAgICBzY2FsZSh0aGlzLm4sIDEgLyB0aGlzLmRpc3QpLFxyXG4gICAgICBzY2FsZShjcm9zcyh0aGlzLm4sIHRoaXMucmEpLCAxIC8gdGhpcy5kaXN0KSxcclxuICAgICAgc2NhbGUodGhpcy5uLCAtMSAvIHRoaXMuZGlzdCksXHJcbiAgICAgIHNjYWxlKGNyb3NzKHRoaXMucmIsIHRoaXMubiksIDEgLyB0aGlzLmRpc3QpLFxyXG4gICAgXTtcclxuICAgIGNvbnN0IEkxID0gdGhpcy5ib2R5MS5pbnZlcnNlSW5lcnRpYTtcclxuICAgIGNvbnN0IEkyID0gdGhpcy5ib2R5Mi5pbnZlcnNlSW5lcnRpYTtcclxuICAgIGNvbnN0IE0xID0gdGhpcy5ib2R5MS5pbnZlcnNlTWFzcztcclxuICAgIGNvbnN0IE0yID0gdGhpcy5ib2R5Mi5pbnZlcnNlTWFzcztcclxuICAgIHRoaXMuZWZmTWFzcyA9XHJcbiAgICAgIE0xICtcclxuICAgICAgZG90KG0zLnRyYW5zZm9ybVBvaW50KEkxLCB0aGlzLkpbMV0pLCB0aGlzLkpbMV0pICtcclxuICAgICAgTTIgK1xyXG4gICAgICBkb3QobTMudHJhbnNmb3JtUG9pbnQoSTIsIHRoaXMuSlszXSksIHRoaXMuSlszXSk7XHJcbiAgfVxyXG59XHJcbmV4cG9ydCB7IENvbnRhY3QsIENvbnN0cmFpbnQsIEpvaW50IH07XHJcbiIsImNsYXNzIEV2ZW50RW1pdHRlciB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmV2ZW50cyA9IHt9O1xyXG4gIH1cclxuICBvbihldmVudE5hbWUsIGZuKSB7XHJcbiAgICBpZiAoIXRoaXMuZXZlbnRzW2V2ZW50TmFtZV0pIHtcclxuICAgICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXSA9IFtdO1xyXG4gICAgfVxyXG4gICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXS5wdXNoKGZuKTtcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gPSB0aGlzLmV2ZW50c1tldmVudE5hbWVdLmZpbHRlcihcclxuICAgICAgICAoZXZlbnRGbikgPT4gZm4gIT09IGV2ZW50Rm5cclxuICAgICAgKTtcclxuICAgIH07XHJcbiAgfVxyXG4gIGVtaXQoZXZlbnROYW1lLCBkYXRhKSB7XHJcbiAgICBpZiAodGhpcy5ldmVudHNbZXZlbnROYW1lXSkge1xyXG4gICAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdLmZvckVhY2goKGZuKSA9PiB7XHJcbiAgICAgICAgZm4uY2FsbChudWxsLCBkYXRhKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbmV4cG9ydCB7IEV2ZW50RW1pdHRlciB9O1xyXG4iLCJpbXBvcnQgeyB2ZWN0b3IsIG0zLCBtNCB9IGZyb20gXCJtYXRoXCI7XHJcbmltcG9ydCB7IENvbnRhY3QgfSBmcm9tIFwiLi9jb250YWN0XCI7XHJcbmNvbnN0IHsgZG90LCBjcm9zcywgbm9ybWFsaXplLCBzdW0sIGRpZmYsIGxlbiwgc2NhbGUsIGlzTnVsbCwgbm9ybSB9ID0gdmVjdG9yO1xyXG5cclxuY29uc3QgR0pLX01BWF9JVEVSQVRJT05TX05VTSA9IDY0O1xyXG5cclxuY29uc3QgZmluZENsb3Nlc3RGYWNlID0gKGNvbGxpZGVyLCBub3JtYWwpID0+IHtcclxuICBjb25zdCBub3JtYWxzID0gY29sbGlkZXIuZ2V0Tm9ybWFsc0dsb2JhbCgpO1xyXG4gIGxldCBtaW5Eb3QgPSBkb3Qobm9ybWFsLCBub3JtYWxzWzBdKTtcclxuICBsZXQgaW5kZXggPSAwO1xyXG4gIGZvciAobGV0IGkgPSAxLCBuID0gbm9ybWFscy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgIGNvbnN0IF9kb3QgPSBkb3Qobm9ybWFsc1tpXSwgbm9ybWFsKTtcclxuICAgIGlmIChfZG90IDwgbWluRG90KSB7XHJcbiAgICAgIG1pbkRvdCA9IF9kb3Q7XHJcbiAgICAgIGluZGV4ID0gaTtcclxuICAgIH1cclxuICB9XHJcbiAgY29uc3QgZmFjZUluZGljZXMgPSBjb2xsaWRlci5pbmRpY2VzW2luZGV4XTtcclxuICBjb25zdCBtID0gY29sbGlkZXIuZ2V0TTQoKTtcclxuICByZXR1cm4gZmFjZUluZGljZXMubWFwKChpKSA9PiBtNC50cmFuc2Zvcm1Qb2ludChtLCBjb2xsaWRlci5wb2ludHNbaV0pKTtcclxufTtcclxuXHJcbmNvbnN0IHBvaW50T25QbGFuZVByb2plY3Rpb24gPSAocGxhbmUsIHBvaW50KSA9PntcclxuICBcclxuICBjb25zdCBbb3JpZ2luLCBub3JtYWxdID0gcGxhbmVcclxuICBjb25zdCBmcm9tUG9pbnRUb09yaWdpbiA9IGRpZmYocG9pbnQsIG9yaWdpbilcclxuICBjb25zdCBwcm9qQWxvbmdOb3JtYWwgPSBkb3Qobm9ybWFsLCBmcm9tUG9pbnRUb09yaWdpbilcclxuXHJcbiAgcmV0dXJuIGRpZmYocG9pbnQsIHNjYWxlKG5vcm1hbCwgcHJvakFsb25nTm9ybWFsKSlcclxufVxyXG5jb25zdCBjbGlwUG9pbnRzQmVoaW5kUGxhbmUgPSAocGxhbmUsIHBvaW50cykgPT57XHJcbiAgY29uc3QgW29yaWdpbiwgbm9ybWFsXSA9IHBsYW5lXHJcblxyXG4gIHJldHVybiBwb2ludHMuZmlsdGVyKCBwb2ludCA9PiBkb3Qobm9ybWFsLCBkaWZmKHBvaW50LCBvcmlnaW4pKSA+IDApXHJcbn1cclxuXHJcbmNvbnN0IGdldDJEY29vcmRzT25QbGFuZSA9IChpLGosIHBvaW50KSA9PntcclxuICBcclxuICByZXR1cm4gW2RvdChpLCBwb2ludCksIGRvdChqLCBwb2ludCldXHJcbn1cclxuXHJcblxyXG5jb25zdCBzdXRoZXJsYW5kSG9kZ21hbiA9IChTLCBDKSA9PntcclxuICBcclxufSBcclxuXHJcblxyXG5cclxuZnVuY3Rpb24gdXBkYXRlX3NpbXBsZXgzKGEsIGIsIGMsIGQsIHNlYXJjaF9kaXIsIHNpbXBfZGltKSB7XHJcbiAgY29uc3QgbiA9IGNyb3NzKGRpZmYodGhpcy5iLCB0aGlzLmEpLCBkaWZmKHRoaXMuYywgdGhpcy5hKSk7XHJcbiAgY29uc3QgQU8gPSBzY2FsZSh0aGlzLmEsIC0xKTtcclxuXHJcbiAgdGhpcy5zaW1wX2RpbSA9IDI7XHJcbiAgaWYgKGRvdChjcm9zcyhkaWZmKHRoaXMuYiwgdGhpcy5hKSwgbiksIEFPKSA+IDApIHtcclxuICAgIHRoaXMuYyA9IHRoaXMuYTtcclxuICAgIHRoaXMuc2VhcmNoX2RpciA9IGNyb3NzKFxyXG4gICAgICBjcm9zcyhkaWZmKHRoaXMuYiwgdGhpcy5hKSwgQU8pLFxyXG4gICAgICBkaWZmKHRoaXMuYiwgdGhpcy5hKVxyXG4gICAgKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgaWYgKGRvdChjcm9zcyhuLCBkaWZmKHRoaXMuYywgdGhpcy5hKSksIEFPKSA+IDApIHtcclxuICAgIHRoaXMuYiA9IHRoaXMuYTtcclxuICAgIHRoaXMuc2VhcmNoX2RpciA9IGNyb3NzKFxyXG4gICAgICBjcm9zcyhkaWZmKHRoaXMuYywgdGhpcy5hKSwgQU8pLFxyXG4gICAgICBkaWZmKHRoaXMuYywgdGhpcy5hKVxyXG4gICAgKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgdGhpcy5zaW1wX2RpbSA9IDM7XHJcbiAgaWYgKGRvdChuLCBBTykgPiAwKSB7XHJcbiAgICB0aGlzLmQgPSB0aGlzLmM7XHJcbiAgICB0aGlzLmMgPSB0aGlzLmI7XHJcbiAgICB0aGlzLmIgPSB0aGlzLmE7XHJcbiAgICB0aGlzLnNlYXJjaF9kaXIgPSBuO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICB0aGlzLmQgPSB0aGlzLmI7XHJcbiAgdGhpcy5iID0gdGhpcy5hO1xyXG4gIHRoaXMuc2VhcmNoX2RpciA9IHNjYWxlKG4sIC0xKTtcclxuICByZXR1cm47XHJcbn1cclxuZnVuY3Rpb24gdXBkYXRlX3NpbXBsZXg0KGEsIGIsIGMsIGQsIHNlYXJjaF9kaXIsIHNpbXBfZGltKSB7XHJcbiAgY29uc3QgQUJDID0gY3Jvc3MoZGlmZih0aGlzLmIsIHRoaXMuYSksIGRpZmYodGhpcy5jLCB0aGlzLmEpKTtcclxuICBjb25zdCBBQ0QgPSBjcm9zcyhkaWZmKHRoaXMuYywgdGhpcy5hKSwgZGlmZih0aGlzLmQsIHRoaXMuYSkpO1xyXG4gIGNvbnN0IEFEQiA9IGNyb3NzKGRpZmYodGhpcy5kLCB0aGlzLmEpLCBkaWZmKHRoaXMuYiwgdGhpcy5hKSk7XHJcbiAgY29uc3QgQU8gPSBzY2FsZSh0aGlzLmEsIC0xKTtcclxuICB0aGlzLnNpbXBfZGltID0gMztcclxuXHJcbiAgaWYgKGRvdChBQkMsIEFPKSA+IDApIHtcclxuICAgIHRoaXMuZCA9IHRoaXMuYztcclxuICAgIHRoaXMuYyA9IHRoaXMuYjtcclxuICAgIHRoaXMuYiA9IHRoaXMuYTtcclxuICAgIHRoaXMuc2VhcmNoX2RpciA9IEFCQztcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIGlmIChkb3QoQUNELCBBTykgPiAwKSB7XHJcbiAgICB0aGlzLmIgPSB0aGlzLmE7XHJcbiAgICB0aGlzLnNlYXJjaF9kaXIgPSBBQ0Q7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBpZiAoZG90KEFEQiwgQU8pID4gMCkge1xyXG4gICAgdGhpcy5jID0gdGhpcy5kO1xyXG4gICAgdGhpcy5kID0gdGhpcy5iO1xyXG4gICAgdGhpcy5iID0gdGhpcy5hO1xyXG4gICAgdGhpcy5zZWFyY2hfZGlyID0gQURCO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICByZXR1cm4gdHJ1ZTtcclxufVxyXG5mdW5jdGlvbiBnamsoYm9keTEsIGJvZHkyKSB7XHJcbiAgY29uc3QgY29sbDEgPSBib2R5MS5jb2xsaWRlcjtcclxuICBjb25zdCBjb2xsMiA9IGJvZHkyLmNvbGxpZGVyO1xyXG4gIHRoaXMuYSA9IFswLCAwLCAwXTtcclxuICB0aGlzLmIgPSBbMCwgMCwgMF07XHJcbiAgdGhpcy5jID0gWzAsIDAsIDBdO1xyXG4gIHRoaXMuZCA9IFswLCAwLCAwXTtcclxuICB0aGlzLnNlYXJjaF9kaXIgPSBbMCwgMCwgMF07XHJcbiAgdGhpcy5zaW1wX2RpbSA9IDA7XHJcblxyXG4gIHRoaXMub3JpZ2luc01hcCA9IG5ldyBNYXAoKTtcclxuXHJcbiAgbGV0IG10diA9IFswLCAwLCAwXTtcclxuXHJcbiAgdGhpcy5zZWFyY2hfZGlyID0gZGlmZihjb2xsMS5wb3MsIGNvbGwyLnBvcyk7XHJcbiAgY29uc3QgY19vcmlnaW4xID0gY29sbDEuc3VwcG9ydChzY2FsZSh0aGlzLnNlYXJjaF9kaXIsIC0xKSk7XHJcbiAgY29uc3QgY19vcmlnaW4yID0gY29sbDIuc3VwcG9ydCh0aGlzLnNlYXJjaF9kaXIpO1xyXG4gIHRoaXMuYyA9IGRpZmYoY19vcmlnaW4yLCBjX29yaWdpbjEpO1xyXG5cclxuICB0aGlzLm9yaWdpbnNNYXAuc2V0KHRoaXMuYywgW2Nfb3JpZ2luMSwgY19vcmlnaW4yXSk7XHJcblxyXG4gIHRoaXMuc2VhcmNoX2RpciA9IHNjYWxlKHRoaXMuYywgLTEpO1xyXG5cclxuICBjb25zdCBiX29yaWdpbjEgPSBjb2xsMS5zdXBwb3J0KHNjYWxlKHRoaXMuc2VhcmNoX2RpciwgLTEpKTtcclxuICBjb25zdCBiX29yaWdpbjIgPSBjb2xsMi5zdXBwb3J0KHRoaXMuc2VhcmNoX2Rpcik7XHJcbiAgdGhpcy5iID0gZGlmZihiX29yaWdpbjIsIGJfb3JpZ2luMSk7XHJcblxyXG4gIHRoaXMub3JpZ2luc01hcC5zZXQodGhpcy5iLCBbYl9vcmlnaW4xLCBiX29yaWdpbjJdKTtcclxuXHJcbiAgaWYgKGRvdCh0aGlzLmIsIHRoaXMuc2VhcmNoX2RpcikgPCAwKSB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIHRoaXMuc2VhcmNoX2RpciA9IGNyb3NzKFxyXG4gICAgY3Jvc3MoZGlmZih0aGlzLmMsIHRoaXMuYiksIHNjYWxlKHRoaXMuYiwgLTEpKSxcclxuICAgIGRpZmYodGhpcy5jLCB0aGlzLmIpXHJcbiAgKTtcclxuXHJcbiAgaWYgKGlzTnVsbCh0aGlzLnNlYXJjaF9kaXIpKSB7XHJcbiAgICB0aGlzLnNlYXJjaF9kaXIgPSBjcm9zcyhkaWZmKHRoaXMuYywgdGhpcy5iKSwgWzEsIDAsIDBdKTtcclxuXHJcbiAgICBpZiAoaXNOdWxsKHRoaXMuc2VhcmNoX2RpcikpIHtcclxuICAgICAgdGhpcy5zZWFyY2hfZGlyID0gY3Jvc3MoZGlmZih0aGlzLmMsIHRoaXMuYiksIFswLCAwLCAtMV0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdGhpcy5zaW1wX2RpbSA9IDI7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBHSktfTUFYX0lURVJBVElPTlNfTlVNOyArK2kpIHtcclxuICAgIGNvbnN0IGFfb3JpZ2luMSA9IGNvbGwxLnN1cHBvcnQoc2NhbGUodGhpcy5zZWFyY2hfZGlyLCAtMSkpO1xyXG4gICAgY29uc3QgYV9vcmlnaW4yID0gY29sbDIuc3VwcG9ydCh0aGlzLnNlYXJjaF9kaXIpO1xyXG4gICAgdGhpcy5hID0gZGlmZihhX29yaWdpbjIsIGFfb3JpZ2luMSk7XHJcblxyXG4gICAgdGhpcy5vcmlnaW5zTWFwLnNldCh0aGlzLmEsIFthX29yaWdpbjEsIGFfb3JpZ2luMl0pO1xyXG4gICAgaWYgKGRvdCh0aGlzLmEsIHRoaXMuc2VhcmNoX2RpcikgPCAwKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICB0aGlzLnNpbXBfZGltKys7XHJcbiAgICBpZiAodGhpcy5zaW1wX2RpbSA9PT0gMykge1xyXG4gICAgICB1cGRhdGVfc2ltcGxleDMuYXBwbHkodGhpcyk7XHJcbiAgICB9IGVsc2UgaWYgKHVwZGF0ZV9zaW1wbGV4NC5hcHBseSh0aGlzKSkge1xyXG4gICAgICByZXR1cm4gRVBBKHRoaXMuYSwgdGhpcy5iLCB0aGlzLmMsIHRoaXMuZCwgdGhpcy5vcmlnaW5zTWFwLCBib2R5MSwgYm9keTIpO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gbnVsbFxyXG59XHJcblxyXG5jb25zdCBiYXJpY2VudHJpYyA9IChmYWNlLCBwb2ludCkgPT4ge1xyXG4gIGxldCBhMTEgPSBmYWNlWzBdWzBdO1xyXG4gIGxldCBhMTIgPSBmYWNlWzFdWzBdO1xyXG4gIGxldCBhMTMgPSBmYWNlWzJdWzBdO1xyXG4gIGxldCBiMSA9IHBvaW50WzBdO1xyXG4gIGxldCBhMjEgPSBmYWNlWzBdWzFdO1xyXG4gIGxldCBhMjIgPSBmYWNlWzFdWzFdO1xyXG4gIGxldCBhMjMgPSBmYWNlWzJdWzFdO1xyXG4gIGxldCBiMiA9IHBvaW50WzFdO1xyXG4gIGxldCBhMzEgPSBmYWNlWzBdWzJdO1xyXG4gIGxldCBhMzIgPSBmYWNlWzFdWzJdO1xyXG4gIGxldCBhMzMgPSBmYWNlWzJdWzJdO1xyXG4gIGxldCBiMyA9IHBvaW50WzJdO1xyXG5cclxuICBjb25zdCBkID1cclxuICAgIGExMSAqIGEyMiAqIGEzMyArXHJcbiAgICBhMjEgKiBhMzIgKiBhMTMgK1xyXG4gICAgYTEyICogYTIzICogYTMxIC1cclxuICAgIGExMyAqIGEyMiAqIGEzMSAtXHJcbiAgICBhMjEgKiBhMTIgKiBhMzMgLVxyXG4gICAgYTMyICogYTIzICogYTExO1xyXG5cclxuICBjb25zdCBkMSA9XHJcbiAgICBiMSAqIGEyMiAqIGEzMyArXHJcbiAgICBiMiAqIGEzMiAqIGExMyArXHJcbiAgICBhMTIgKiBhMjMgKiBiMyAtXHJcbiAgICBhMTMgKiBhMjIgKiBiMyAtXHJcbiAgICBiMiAqIGExMiAqIGEzMyAtXHJcbiAgICBhMzIgKiBhMjMgKiBiMTtcclxuXHJcbiAgY29uc3QgZDIgPVxyXG4gICAgYTExICogYjIgKiBhMzMgK1xyXG4gICAgYTIxICogYjMgKiBhMTMgK1xyXG4gICAgYjEgKiBhMjMgKiBhMzEgLVxyXG4gICAgYTEzICogYjIgKiBhMzEgLVxyXG4gICAgYTExICogYjMgKiBhMjMgLVxyXG4gICAgYTIxICogYjEgKiBhMzM7XHJcblxyXG4gIGNvbnN0IGQzID1cclxuICAgIGExMSAqIGEyMiAqIGIzICtcclxuICAgIGEyMSAqIGEzMiAqIGIxICtcclxuICAgIGExMiAqIGIyICogYTMxIC1cclxuICAgIGIxICogYTIyICogYTMxIC1cclxuICAgIGEyMSAqIGExMiAqIGIzIC1cclxuICAgIGIyICogYTMyICogYTExO1xyXG5cclxuICByZXR1cm4gW2QxIC8gZCwgZDIgLyBkLCBkMyAvIGRdO1xyXG59O1xyXG5jb25zdCBvcmlnaW5Ub0ZhY2VQcm9qID0gKGZhY2UpID0+IHtcclxuICBjb25zdCBub3JtYWwgPSBmYWNlWzNdO1xyXG4gIGNvbnN0IHBvaW50ID0gZmFjZVswXTtcclxuICBjb25zdCBjID0gLW5vcm1hbFswXSAqIHBvaW50WzBdIC0gbm9ybWFsWzFdICogcG9pbnRbMV0gLSBub3JtYWxbMl0gKiBwb2ludFsyXTtcclxuICBjb25zdCB0ID1cclxuICAgIC1jIC9cclxuICAgIChub3JtYWxbMF0gKiBub3JtYWxbMF0gKyBub3JtYWxbMV0gKiBub3JtYWxbMV0gKyBub3JtYWxbMl0gKiBub3JtYWxbMl0pO1xyXG4gIHJldHVybiBbdCAqIG5vcm1hbFswXSwgdCAqIG5vcm1hbFsxXSwgdCAqIG5vcm1hbFsyXV07XHJcbn07XHJcblxyXG5jb25zdCBUT0xFUkFOQ0UgPSAwLjAwMTtcclxuY29uc3QgTUFYX05VTV9GQUNFUyA9IDY0O1xyXG5jb25zdCBNQVhfTlVNX0xPT1NFX0VER0VTID0gMzI7XHJcbmNvbnN0IEVQQV9NQVhfTlVNX0lURVIgPSA2NDtcclxuY29uc3QgRVBBID0gKGEsIGIsIGMsIGQsIG9yaWdpbnNNYXAsIGJvZHkxLCBib2R5MikgPT4ge1xyXG4gIGNvbnN0IGNvbGwxID0gYm9keTEuY29sbGlkZXI7XHJcbiAgY29uc3QgY29sbDIgPSBib2R5Mi5jb2xsaWRlcjtcclxuICBjb25zdCBmYWNlcyA9IFtdO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XHJcbiAgICBmYWNlc1tpXSA9IFtdO1xyXG4gIH1cclxuXHJcbiAgZmFjZXNbMF1bMF0gPSBhO1xyXG4gIGZhY2VzWzBdWzFdID0gYjtcclxuICBmYWNlc1swXVsyXSA9IGM7XHJcbiAgZmFjZXNbMF1bM10gPSBub3JtYWxpemUoY3Jvc3MoZGlmZihiLCBhKSwgZGlmZihjLCBhKSkpO1xyXG4gIGZhY2VzWzFdWzBdID0gYTtcclxuICBmYWNlc1sxXVsxXSA9IGM7XHJcbiAgZmFjZXNbMV1bMl0gPSBkO1xyXG4gIGZhY2VzWzFdWzNdID0gbm9ybWFsaXplKGNyb3NzKGRpZmYoYywgYSksIGRpZmYoZCwgYSkpKTtcclxuICBmYWNlc1syXVswXSA9IGE7XHJcbiAgZmFjZXNbMl1bMV0gPSBkO1xyXG4gIGZhY2VzWzJdWzJdID0gYjtcclxuICBmYWNlc1syXVszXSA9IG5vcm1hbGl6ZShjcm9zcyhkaWZmKGQsIGEpLCBkaWZmKGIsIGEpKSk7XHJcbiAgZmFjZXNbM11bMF0gPSBiO1xyXG4gIGZhY2VzWzNdWzFdID0gZDtcclxuICBmYWNlc1szXVsyXSA9IGM7XHJcbiAgZmFjZXNbM11bM10gPSBub3JtYWxpemUoY3Jvc3MoZGlmZihkLCBiKSwgZGlmZihjLCBiKSkpO1xyXG5cclxuICBsZXQgbnVtX2ZhY2VzID0gNDtcclxuICBsZXQgY2xvc2VzdF9mYWNlID0gbnVsbDtcclxuICBsZXQgc2VhcmNoX2RpcjtcclxuXHJcbiAgbGV0IHA7XHJcbiAgZm9yIChsZXQgaXRlcmF0aW9uID0gMDsgaXRlcmF0aW9uIDwgRVBBX01BWF9OVU1fSVRFUjsgKytpdGVyYXRpb24pIHtcclxuICAgIGxldCBtaW5fZGlzdCA9IGRvdChmYWNlc1swXVswXSwgZmFjZXNbMF1bM10pO1xyXG5cclxuICAgIGNsb3Nlc3RfZmFjZSA9IDA7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bV9mYWNlczsgKytpKSB7XHJcbiAgICAgIGxldCBkaXN0ID0gZG90KGZhY2VzW2ldWzBdLCBmYWNlc1tpXVszXSk7XHJcbiAgICAgIGlmIChkaXN0IDwgbWluX2Rpc3QpIHtcclxuICAgICAgICBtaW5fZGlzdCA9IGRpc3Q7XHJcbiAgICAgICAgY2xvc2VzdF9mYWNlID0gaTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2VhcmNoX2RpciA9IGZhY2VzW2Nsb3Nlc3RfZmFjZV1bM107XHJcblxyXG4gICAgY29uc3QgcF9vcmlnaW4xID0gY29sbDEuc3VwcG9ydChzY2FsZShzZWFyY2hfZGlyLCAtMSkpO1xyXG4gICAgY29uc3QgcF9vcmlnaW4yID0gY29sbDIuc3VwcG9ydChzZWFyY2hfZGlyKTtcclxuICAgIHAgPSBkaWZmKHBfb3JpZ2luMiwgcF9vcmlnaW4xKTtcclxuICAgIG9yaWdpbnNNYXAuc2V0KHAsIFtwX29yaWdpbjEsIHBfb3JpZ2luMl0pO1xyXG5cclxuICAgIGlmIChkb3QocCwgc2VhcmNoX2RpcikgLSBtaW5fZGlzdCA8IDAuMDAwMDEpIHtcclxuICAgICAgY29uc3QgZmFjZSA9IGZhY2VzW2Nsb3Nlc3RfZmFjZV07XHJcblxyXG4gICAgICBjb25zdCBwb2ludCA9IG9yaWdpblRvRmFjZVByb2ooZmFjZSk7XHJcblxyXG4gICAgICBjb25zdCBbQWEsIEJhXSA9IG9yaWdpbnNNYXAuZ2V0KGZhY2VbMF0pO1xyXG4gICAgICAvL2NvbnN0IEFhID0gZmFjZVswXS5vYVxyXG4gICAgICAvL2NvbnN0IEJhID0gZmFjZVswXS5vYlxyXG4gICAgICBjb25zdCBbQWIsIEJiXSA9IG9yaWdpbnNNYXAuZ2V0KGZhY2VbMV0pO1xyXG4gICAgICAvL2NvbnN0IEFiID0gZmFjZVsxXS5vYVxyXG4gICAgICAvL2NvbnN0IEJiID0gZmFjZVsxXS5vYlxyXG4gICAgICBjb25zdCBbQWMsIEJjXSA9IG9yaWdpbnNNYXAuZ2V0KGZhY2VbMl0pO1xyXG4gICAgICAvL2NvbnN0IEFjID0gZmFjZVsyXS5vYVxyXG4gICAgICAvL2NvbnN0IEJjID0gZmFjZVsyXS5vYlxyXG5cclxuICAgICAgY29uc3QgcmVzdWx0ID0gYmFyaWNlbnRyaWMoZmFjZSwgcG9pbnQpO1xyXG5cclxuICAgICAgaWYgKGlzTmFOKHJlc3VsdFswXSArIHJlc3VsdFsxXSArIHJlc3VsdFsyXSkpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIm5vIGNvbnZcIik7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxldCBQQSA9IHN1bShcclxuICAgICAgICBzdW0oc2NhbGUoQWEsIHJlc3VsdFswXSksIHNjYWxlKEFiLCByZXN1bHRbMV0pKSxcclxuICAgICAgICBzY2FsZShBYywgcmVzdWx0WzJdKVxyXG4gICAgICApO1xyXG4gICAgICAvL0FhLm11bHRpcGx5KHJlc3VsdFswXSkuYWRkKEFiLm11bHRpcGx5KHJlc3VsdFsxXSkpLmFkZChBYy5tdWx0aXBseShyZXN1bHRbMl0pKVxyXG4gICAgICBsZXQgUEIgPSBzdW0oXHJcbiAgICAgICAgc3VtKHNjYWxlKEJhLCByZXN1bHRbMF0pLCBzY2FsZShCYiwgcmVzdWx0WzFdKSksXHJcbiAgICAgICAgc2NhbGUoQmMsIHJlc3VsdFsyXSlcclxuICAgICAgKTtcclxuICAgICAgLy9CYS5tdWx0aXBseShyZXN1bHRbMF0pLmFkZChCYi5tdWx0aXBseShyZXN1bHRbMV0pKS5hZGQoQmMubXVsdGlwbHkocmVzdWx0WzJdKSlcclxuXHJcbiAgICAgIC8vY29uc3QgcmEgPSBQQS5zdWJzdHJhY3QoY29sbDEucG9zKVxyXG5cclxuICAgICAgY29uc3QgcmIgPSBkaWZmKFBCLCBjb2xsMi5wb3MpO1xyXG4gICAgICBjb25zdCByYSA9IGRpZmYoUEEsIGNvbGwxLnBvcyk7XHJcbiAgICAgIGNvbnN0IHJhTG9jYWwgPSBtMy50cmFuc2Zvcm1Qb2ludChjb2xsMS5SbWF0cml4SW52ZXJzZSwgcmEpO1xyXG4gICAgICBjb25zdCByYkxvY2FsID0gbTMudHJhbnNmb3JtUG9pbnQoY29sbDIuUm1hdHJpeEludmVyc2UsIHJiKTtcclxuICAgICAgY29uc3QgbiA9IG5vcm1hbGl6ZShzY2FsZShmYWNlWzNdLCAtZG90KHAsIHNlYXJjaF9kaXIpKSk7XHJcbiAgICAgIGlmIChub3JtKG4pIDwgMC4wMSkgcmV0dXJuIG51bGw7XHJcbiAgICAgIGNvbnN0IHBlbkRlcHRoID0gLWRvdChkaWZmKFBCLCBQQSksIG4pO1xyXG4gICAgICBjb25zdCBjb250YWN0RmFjZTEgPSBmaW5kQ2xvc2VzdEZhY2UoY29sbDEsIHNjYWxlKG4sIC0xKSk7XHJcbiAgICAgIGNvbnN0IGNvbnRhY3RGYWNlMiA9IGZpbmRDbG9zZXN0RmFjZShjb2xsMiwgbik7XHJcbiAgICAgIGNvbnN0IGNvbnRhY3QgPSBuZXcgQ29udGFjdChyYUxvY2FsLCByYkxvY2FsLCBuLCBib2R5MSwgYm9keTIpO1xyXG4gICAgICBjb250YWN0LlBBID0gUEE7XHJcbiAgICAgIGNvbnRhY3QuUEIgPSBQQjtcclxuICAgICAgY29udGFjdC5yYiA9IHJiO1xyXG4gICAgICBjb250YWN0LnJhID0gcmE7XHJcbiAgICAgIGNvbnRhY3QucGVuRGVwdGggPSBwZW5EZXB0aDtcclxuICAgICAgY29udGFjdC5jb250YWN0RmFjZTEgPSBjb250YWN0RmFjZTE7XHJcbiAgICAgIGNvbnRhY3QuY29udGFjdEZhY2UyID0gY29udGFjdEZhY2UyO1xyXG4gICAgICBjb25zdCBwbGFuZSA9IFtzY2FsZShzdW0oUEEsIFBCKSwgMC41KSwgbm9ybWFsaXplKGRpZmYoUEIsIFBBKSldXHJcbiAgICAgIGNvbnRhY3QucGxhbmUgPSBwbGFuZVxyXG4gICAgICByZXR1cm4gY29udGFjdDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBsb29zZV9lZGdlcyA9IFtdO1xyXG4gICAgbGV0IG51bV9sb29zZV9lZGdlcyA9IDA7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bV9mYWNlczsgKytpKSB7XHJcbiAgICAgIGlmIChkb3QoZmFjZXNbaV1bM10sIGRpZmYocCwgZmFjZXNbaV1bMF0pKSA+IDApIHtcclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDM7IGorKykge1xyXG4gICAgICAgICAgbGV0IGN1cnJlbnRfZWRnZSA9IFtmYWNlc1tpXVtqXSwgZmFjZXNbaV1bKGogKyAxKSAlIDNdXTtcclxuICAgICAgICAgIGxldCBmb3VuZF9lZGdlID0gZmFsc2U7XHJcbiAgICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IG51bV9sb29zZV9lZGdlczsgaysrKSB7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICBsb29zZV9lZGdlc1trXVsxXSA9PT0gY3VycmVudF9lZGdlWzBdICYmXHJcbiAgICAgICAgICAgICAgbG9vc2VfZWRnZXNba11bMF0gPT09IGN1cnJlbnRfZWRnZVsxXVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICBsb29zZV9lZGdlc1trXVswXSA9IGxvb3NlX2VkZ2VzW251bV9sb29zZV9lZGdlcyAtIDFdWzBdO1xyXG4gICAgICAgICAgICAgIGxvb3NlX2VkZ2VzW2tdWzFdID0gbG9vc2VfZWRnZXNbbnVtX2xvb3NlX2VkZ2VzIC0gMV1bMV07XHJcbiAgICAgICAgICAgICAgbnVtX2xvb3NlX2VkZ2VzLS07XHJcbiAgICAgICAgICAgICAgZm91bmRfZWRnZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgayA9IG51bV9sb29zZV9lZGdlcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKCFmb3VuZF9lZGdlKSB7XHJcbiAgICAgICAgICAgIGlmIChudW1fbG9vc2VfZWRnZXMgPj0gTUFYX05VTV9MT09TRV9FREdFUykgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBsb29zZV9lZGdlc1tudW1fbG9vc2VfZWRnZXNdID0gW107XHJcbiAgICAgICAgICAgIGxvb3NlX2VkZ2VzW251bV9sb29zZV9lZGdlc11bMF0gPSBjdXJyZW50X2VkZ2VbMF07XHJcbiAgICAgICAgICAgIGxvb3NlX2VkZ2VzW251bV9sb29zZV9lZGdlc11bMV0gPSBjdXJyZW50X2VkZ2VbMV07XHJcbiAgICAgICAgICAgIG51bV9sb29zZV9lZGdlcysrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmYWNlc1tpXVswXSA9IGZhY2VzW251bV9mYWNlcyAtIDFdWzBdO1xyXG4gICAgICAgIGZhY2VzW2ldWzFdID0gZmFjZXNbbnVtX2ZhY2VzIC0gMV1bMV07XHJcbiAgICAgICAgZmFjZXNbaV1bMl0gPSBmYWNlc1tudW1fZmFjZXMgLSAxXVsyXTtcclxuICAgICAgICBmYWNlc1tpXVszXSA9IGZhY2VzW251bV9mYWNlcyAtIDFdWzNdO1xyXG4gICAgICAgIG51bV9mYWNlcy0tO1xyXG4gICAgICAgIGktLTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1fbG9vc2VfZWRnZXM7IGkrKykge1xyXG4gICAgICBpZiAobnVtX2ZhY2VzID49IE1BWF9OVU1fRkFDRVMpIGJyZWFrO1xyXG4gICAgICBmYWNlc1tudW1fZmFjZXNdID0gW107XHJcbiAgICAgIGZhY2VzW251bV9mYWNlc11bMF0gPSBsb29zZV9lZGdlc1tpXVswXTtcclxuICAgICAgZmFjZXNbbnVtX2ZhY2VzXVsxXSA9IGxvb3NlX2VkZ2VzW2ldWzFdO1xyXG4gICAgICBmYWNlc1tudW1fZmFjZXNdWzJdID0gcDtcclxuXHJcbiAgICAgIGZhY2VzW251bV9mYWNlc11bM10gPSBub3JtYWxpemUoXHJcbiAgICAgICAgY3Jvc3MoXHJcbiAgICAgICAgICBkaWZmKGxvb3NlX2VkZ2VzW2ldWzBdLCBsb29zZV9lZGdlc1tpXVsxXSksXHJcbiAgICAgICAgICBkaWZmKGxvb3NlX2VkZ2VzW2ldWzBdLCBwKVxyXG4gICAgICAgIClcclxuICAgICAgKTtcclxuXHJcbiAgICAgIGlmIChkb3QoZmFjZXNbbnVtX2ZhY2VzXVswXSwgZmFjZXNbbnVtX2ZhY2VzXVszXSkgKyAwLjAxIDwgMCkge1xyXG4gICAgICAgIHRlbXAgPSBmYWNlc1tudW1fZmFjZXNdWzBdO1xyXG4gICAgICAgIGZhY2VzW251bV9mYWNlc11bMF0gPSBmYWNlc1tudW1fZmFjZXNdWzFdO1xyXG4gICAgICAgIGZhY2VzW251bV9mYWNlc11bMV0gPSB0ZW1wO1xyXG4gICAgICAgIGZhY2VzW251bV9mYWNlc11bM10gPSBzY2FsZShmYWNlc1tudW1fZmFjZXNdWzNdLCAtMSk7XHJcbiAgICAgIH1cclxuICAgICAgbnVtX2ZhY2VzKys7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnNvbGUubG9nKFwibm8gY29udlwiKTtcclxuICByZXR1cm4gbnVsbDtcclxufTtcclxuY29uc3QgX2dqayA9ICguLi5hcmdzKSA9PiBnamsuYmluZCh7fSkoLi4uYXJncylcclxuZXhwb3J0IHsgX2dqayBhcyBnamssIHBvaW50T25QbGFuZVByb2plY3Rpb24sIGNsaXBQb2ludHNCZWhpbmRQbGFuZSwgZ2V0MkRjb29yZHNPblBsYW5lfTtcclxuIiwiaW1wb3J0IHsgdmVjdG9yIGFzIHZlYyB9IGZyb20gXCJtYXRoXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJc2xhbmQge1xyXG4gIGNvbnN0cnVjdG9yKC4uLmNvbnN0cmFpbnRzKSB7XHJcbiAgICB0aGlzLmNvbnN0cmFpbnRzID0gWy4uLmNvbnN0cmFpbnRzXTtcclxuICAgIHRoaXMuSk1KID0gbnVsbDtcclxuICAgIHRoaXMuSlYgPSBudWxsO1xyXG4gICAgdGhpcy5KcFYgPSBudWxsO1xyXG4gICAgdGhpcy5KTUpwID0gbnVsbDtcclxuICB9XHJcbiAgYWRkQ29uc3RyYWludCguLi5hcmdzKSB7XHJcbiAgICB0aGlzLmNvbnN0cmFpbnRzLnB1c2goLi4uYXJncyk7XHJcbiAgfVxyXG4gIGdlbmVyYXRlUHNldWRvVmVsVmVjdG9yKCkge31cclxuICBnZW5lcmF0ZVN5c3RlbShkZWx0YVRpbWUpIHtcclxuICAgIGNvbnN0IG4gPSB0aGlzLmNvbnN0cmFpbnRzLmxlbmd0aDtcclxuICAgIC8vQSA9IEpNSiosIEpNSip4ID0gSlYgKyBiXHJcbiAgICB0aGlzLkpNSnAgPSBuZXcgQXJyYXkobiAqIG4pO1xyXG4gICAgdGhpcy5KTUogPSBuZXcgQXJyYXkobiAqIG4pO1xyXG4gICAgdGhpcy5KViA9IG5ldyBBcnJheShuKTtcclxuICAgIHRoaXMuSnBWID0gbmV3IEFycmF5KG4pO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHtcclxuICAgICAgY29uc3QgY29uc3RyYWludCA9IHRoaXMuY29uc3RyYWludHNbaV07XHJcbiAgICAgIGNvbnN0IHsgYm9keTEsIGJvZHkyLCBKTSwgSiB9ID0gY29uc3RyYWludDtcclxuICAgICAgY29uc3QgayA9IGkgKiBuO1xyXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG47IGorKykge1xyXG4gICAgICAgIGlmIChrID09PSBqKSB7XHJcbiAgICAgICAgICB0aGlzLkpNSltrICsgal0gPSAoKSA9PiBjb25zdHJhaW50LmVmZk1hc3M7XHJcbiAgICAgICAgICB0aGlzLkpNSnBbayArIGpdID0gKCkgPT5cclxuICAgICAgICAgICAgY29uc3RyYWludC5ib2R5MS5pbnZlcnNlTWFzcyArIGNvbnN0cmFpbnQuYm9keTIuaW52ZXJzZU1hc3M7XHJcbiAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IF9jb25zdHJhaW50ID0gdGhpcy5jb25zdHJhaW50c1tqXTtcclxuXHJcbiAgICAgICAgY29uc3QgX2JvZHkxID0gX2NvbnN0cmFpbnQuYm9keTE7XHJcbiAgICAgICAgY29uc3QgX2JvZHkyID0gX2NvbnN0cmFpbnQuYm9keTI7XHJcbiAgICAgICAgY29uc3QgX0ogPSBfY29uc3RyYWludC5KO1xyXG4gICAgICAgIGNvbnN0IGZwMSA9IGJvZHkxID09PSBfYm9keTEgPyAoKSA9PiB2ZWMuZG90KEpNWzBdLCBfSlswXSkgOiAoKSA9PiAwO1xyXG4gICAgICAgIGNvbnN0IGZwMiA9IGJvZHkyID09PSBfYm9keTIgPyAoKSA9PiB2ZWMuZG90KEpNWzJdLCBfSlsyXSkgOiAoKSA9PiAwO1xyXG4gICAgICAgIGNvbnN0IGZwMyA9IGJvZHkxID09PSBfYm9keTIgPyAoKSA9PiB2ZWMuZG90KEpNWzBdLCBfSlsyXSkgOiAoKSA9PiAwO1xyXG4gICAgICAgIGNvbnN0IGZwNCA9IGJvZHkyID09PSBfYm9keTEgPyAoKSA9PiB2ZWMuZG90KEpNWzJdLCBfSlswXSkgOiAoKSA9PiAwO1xyXG4gICAgICAgIGNvbnN0IGYxID1cclxuICAgICAgICAgIGJvZHkxID09PSBfYm9keTFcclxuICAgICAgICAgICAgPyAoKSA9PiB2ZWMuZG90KEpNWzBdLCBfSlswXSkgKyB2ZWMuZG90KEpNWzFdLCBfSlsxXSlcclxuICAgICAgICAgICAgOiAoKSA9PiAwO1xyXG4gICAgICAgIGNvbnN0IGYyID1cclxuICAgICAgICAgIGJvZHkyID09PSBfYm9keTJcclxuICAgICAgICAgICAgPyAoKSA9PiB2ZWMuZG90KEpNWzJdLCBfSlsyXSkgKyB2ZWMuZG90KEpNWzNdLCBfSlszXSlcclxuICAgICAgICAgICAgOiAoKSA9PiAwO1xyXG4gICAgICAgIGNvbnN0IGYzID1cclxuICAgICAgICAgIGJvZHkxID09PSBfYm9keTJcclxuICAgICAgICAgICAgPyAoKSA9PiB2ZWMuZG90KEpNWzBdLCBfSlsyXSkgKyB2ZWMuZG90KEpNWzFdLCBfSlszXSlcclxuICAgICAgICAgICAgOiAoKSA9PiAwO1xyXG4gICAgICAgIGNvbnN0IGY0ID1cclxuICAgICAgICAgIGJvZHkyID09PSBfYm9keTFcclxuICAgICAgICAgICAgPyAoKSA9PiB2ZWMuZG90KEpNWzJdLCBfSlswXSkgKyB2ZWMuZG90KEpNWzNdLCBfSlsxXSlcclxuICAgICAgICAgICAgOiAoKSA9PiAwO1xyXG4gICAgICAgIHRoaXMuSk1KW2sgKyBqXSA9ICgpID0+IGYxKCkgKyBmMigpICsgZjMoKSArIGY0KCk7XHJcbiAgICAgICAgdGhpcy5KTUpwW2sgKyBqXSA9ICgpID0+IGZwMSgpICsgZnAyKCkgKyBmcDMoKSArIGZwNCgpO1xyXG4gICAgICB9XHJcbiAgICAgIGxldCBiID0gTWF0aC5tYXgoMCwgY29uc3RyYWludC5iaWFzIC0gMC4wMSkgLyBkZWx0YVRpbWU7XHJcbiAgICAgIGNvbnN0IHJ2ID1cclxuICAgICAgICB2ZWMuZG90KEpbMF0sIGJvZHkxLnZlbG9jaXR5KSArXHJcbiAgICAgICAgdmVjLmRvdChKWzFdLCBib2R5MS5hbmd1bGFyVikgK1xyXG4gICAgICAgIHZlYy5kb3QoSlsyXSwgYm9keTIudmVsb2NpdHkpICtcclxuICAgICAgICB2ZWMuZG90KEpbM10sIGJvZHkyLmFuZ3VsYXJWKTtcclxuICAgICAgdGhpcy5KVltpXSA9ICgpID0+IC1ydiAvLysgYiAqIDAuMDE1O1xyXG5cclxuICAgICAgLyp0aGlzLkpwVltpXSA9ICgpID0+IC12ZWMuZG90KEpbMF0sIGJvZHkxLnBzZXVkb1ZlbG9jaXR5KSAtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWMuZG90KEpbMV0sIGJvZHkxLnBzZXVkb0FuZ3VsYXJWKSAtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWMuZG90KEpbMl0sIGJvZHkyLnBzZXVkb1ZlbG9jaXR5KSAtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlYy5kb3QoSlszXSwgYm9keTIucHNldWRvQW5ndWxhclYpIC0gY29uc3RyYWludC5iaWFzL2RlbHRhVGltZSAqL1xyXG4gICAgICB0aGlzLkpwVltpXSA9ICgpID0+IC1ydiArIGIgXHJcbiAgICB9XHJcbiAgfVxyXG4gIGdldEpNSigpIHtcclxuICAgIHJldHVybiB0aGlzLkpNSi5tYXAoKGYpID0+IGYoKSk7XHJcbiAgfVxyXG4gIGdldEp2KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuSlYubWFwKChmKSA9PiBmKCkpO1xyXG4gIH1cclxuICBnZXRKcFYoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5KcFYubWFwKChmKSA9PiBmKCkpO1xyXG4gIH1cclxuICBnZXRKTUpwKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuSk1KcC5tYXAoKGYpID0+IGYoKSk7XHJcbiAgfVxyXG4gIGdldFVwZGF0ZWRWYWx1ZXMoKSB7XHJcbiAgICByZXR1cm4gW1xyXG4gICAgICB0aGlzLkpNSi5tYXAoKGYpID0+IGYoKSksXHJcbiAgICAgIHRoaXMuSlYubWFwKChmKSA9PiBmKCkpLFxyXG4gICAgICB0aGlzLkpwVi5tYXAoKGYpID0+IGYoKSksXHJcbiAgICBdO1xyXG4gIH1cclxuICBhcHBseVJlc29sdmluZ0ltcHVsc2VzKGxhbWJkYSkge1xyXG4gICAgZm9yIChsZXQgaSA9IDAsIG4gPSB0aGlzLmNvbnN0cmFpbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICB0aGlzLmNvbnN0cmFpbnRzW2ldLmFwcGx5UmVzb2x2aW5nSW1wdWxzZShsYW1iZGFbaV0pO1xyXG4gICAgfVxyXG4gIH1cclxuICBhcHBseVJlc29sdmluZ1BzZXVkb0ltcHVsc2VzKGxhbWJkYSkge1xyXG4gICAgZm9yIChsZXQgaSA9IDAsIG4gPSB0aGlzLmNvbnN0cmFpbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICB0aGlzLmNvbnN0cmFpbnRzW2ldLmFwcGx5UmVzb2x2aW5nUHNldWRvSW1wdWxzZShsYW1iZGFbaV0pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBtMywgdmVjdG9yIH0gZnJvbSBcIm1hdGhcIjtcclxuXHJcbmNvbnN0IHsgZGlzdGFuY2VGcm9tTGluZSwgbm9ybSwgZmluZEZ1cnRoZXN0UG9pbnQsIHN1bSwgZGlmZiwgbm9ybVNxLCBkb3QgfSA9XHJcbiAgdmVjdG9yO1xyXG5cclxuY29uc3QgcHJlYyA9IDAuMDA1O1xyXG5jb25zdCBwcmVjMiA9IDAuMDU7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hbmlmb2xkIHtcclxuICBjb25zdHJ1Y3Rvcihib2R5MSwgYm9keTIpIHtcclxuICAgIHRoaXMuY29udGFjdHMgPSBbXTtcclxuICAgIHRoaXMuYm9keTEgPSBib2R5MTtcclxuICAgIHRoaXMuYm9keTIgPSBib2R5MjtcclxuICAgIHRoaXMud2FybSA9IDA7XHJcbiAgfVxyXG4gIGFkZENvbnRhY3QoY29udGFjdCkge1xyXG4gICAgbGV0IGlzRmFyRW5vdWdoID0gdHJ1ZTtcclxuICAgIGNvbnN0IGNvbnRhY3RzID0gdGhpcy5jb250YWN0cztcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMCwgbiA9IGNvbnRhY3RzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICBjb25zdCBiaWFzQSA9IGRpZmYoY29udGFjdHNbaV0uUEEsIGNvbnRhY3QuUEEpO1xyXG4gICAgICBjb25zdCBiaWFzQiA9IGRpZmYoY29udGFjdHNbaV0uUEIsIGNvbnRhY3QuUEIpO1xyXG4gICAgICBpZiAobm9ybShiaWFzQSkgPCBwcmVjMiAmJiBub3JtKGJpYXNCKSA8IHByZWMyKSB7XHJcbiAgICAgICAgaXNGYXJFbm91Z2ggPSBmYWxzZTtcclxuICAgICAgICAvL2NvbnRhY3QuYWNjSSA9IGNvbnRhY3RzW2ldLmFjY0lcclxuICAgICAgICBjb250YWN0c1tpXSA9IGNvbnRhY3Q7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChpc0ZhckVub3VnaCkge1xyXG4gICAgICBjb250YWN0cy5wdXNoKGNvbnRhY3QpO1xyXG4gICAgfVxyXG4gIH1cclxuICB1cGRhdGUoKSB7XHJcbiAgICB0aGlzLndhcm0rKztcclxuICAgIGxldCBpLCBqLCBuO1xyXG4gICAgY29uc3QgY29udGFjdHMgPSB0aGlzLmNvbnRhY3RzO1xyXG4gICAgY29uc3QgcG9zMSA9IHRoaXMuYm9keTEuY29sbGlkZXIucG9zO1xyXG4gICAgY29uc3QgcG9zMiA9IHRoaXMuYm9keTIuY29sbGlkZXIucG9zO1xyXG4gICAgZm9yIChpID0gMCwgaiA9IDAsIG4gPSBjb250YWN0cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgY29uc3QgY29udGFjdCA9IGNvbnRhY3RzW2ldO1xyXG5cclxuICAgICAgY29uc3QgbmV3UEEgPSBzdW0oXHJcbiAgICAgICAgcG9zMSxcclxuICAgICAgICBtMy50cmFuc2Zvcm1Qb2ludCh0aGlzLmJvZHkxLmNvbGxpZGVyLlJtYXRyaXgsIGNvbnRhY3QucmFMb2NhbClcclxuICAgICAgKTtcclxuICAgICAgY29uc3QgbmV3UEIgPSBzdW0oXHJcbiAgICAgICAgcG9zMixcclxuICAgICAgICBtMy50cmFuc2Zvcm1Qb2ludCh0aGlzLmJvZHkyLmNvbGxpZGVyLlJtYXRyaXgsIGNvbnRhY3QucmJMb2NhbClcclxuICAgICAgKTtcclxuICAgICAgY29uc3QgcmFCaWFzID0gZGlmZihjb250YWN0LlBBLCBuZXdQQSk7XHJcbiAgICAgIGNvbnN0IHJiQmlhcyA9IGRpZmYoY29udGFjdC5QQiwgbmV3UEIpO1xyXG4gICAgICBjb25zdCBwZW5EZXB0aCA9IC1kb3QoZGlmZihuZXdQQiwgbmV3UEEpLCBjb250YWN0Lm4pO1xyXG5cclxuICAgICAgaWYgKG5vcm0ocmFCaWFzKSA8IHByZWMyICYmIG5vcm0ocmJCaWFzKSA8IHByZWMyICYmIHBlbkRlcHRoID4gMCkge1xyXG4gICAgICAgIC8vY29udGFjdC5yYUxvY2FsID0gbTMudHJhbnNmb3JtUG9pbnQodGhpcy5ib2R5MS5jb2xsaWRlci5SbWF0cml4SW52ZXJzZSxjb250YWN0LnJhKVxyXG4gICAgICAgIC8vY29udGFjdC5yYkxvY2FsID0gbTMudHJhbnNmb3JtUG9pbnQodGhpcy5ib2R5Mi5jb2xsaWRlci5SbWF0cml4SW52ZXJzZSxjb250YWN0LnJiKVxyXG5cclxuICAgICAgICBjb250YWN0c1tqXSA9IGNvbnRhY3RzW2ldO1xyXG5cclxuICAgICAgICBqKys7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB3aGlsZSAoaiA8IGNvbnRhY3RzLmxlbmd0aCkge1xyXG4gICAgICBjb250YWN0cy5wb3AoKTtcclxuICAgIH1cclxuICAgIGlmIChjb250YWN0cy5sZW5ndGggPiAyKSB0aGlzLndhcm0rKztcclxuICAgIGlmIChjb250YWN0cy5sZW5ndGggPCAzKSB0aGlzLndhcm0gPSAwO1xyXG4gICAgaWYgKGNvbnRhY3RzLmxlbmd0aCA+IDQpIHtcclxuICAgICAgbGV0IGRlZXBlc3QgPSBudWxsO1xyXG4gICAgICBsZXQgbWF4RGVlcCA9IDA7XHJcbiAgICAgIGZvciAoaSA9IDAsIG4gPSBjb250YWN0cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICBpZiAobm9ybVNxKGNvbnRhY3RzW2ldLm4pID49IG1heERlZXApIHtcclxuICAgICAgICAgIG1heERlZXAgPSBub3JtU3EoY29udGFjdHNbaV0ubik7XHJcbiAgICAgICAgICBkZWVwZXN0ID0gY29udGFjdHNbaV07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGxldCBmdXJ0aGVzdCA9IG51bGw7XHJcbiAgICAgIGxldCBtYXhEaXN0YW5jZSA9IDA7XHJcbiAgICAgIGZvciAoaSA9IDAsIG4gPSBjb250YWN0cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICBsZXQgZGlzdCA9IG5vcm1TcShkaWZmKGNvbnRhY3RzW2ldLlBBLCBkZWVwZXN0LlBBKSk7XHJcbiAgICAgICAgaWYgKGRpc3QgPj0gbWF4RGlzdGFuY2UpIHtcclxuICAgICAgICAgIG1heERpc3RhbmNlID0gZGlzdDtcclxuICAgICAgICAgIGZ1cnRoZXN0ID0gY29udGFjdHNbaV07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGxldCBmdXJ0aGVzdDIgPSBudWxsO1xyXG4gICAgICBtYXhEaXN0YW5jZSA9IDA7XHJcbiAgICAgIGZvciAoaSA9IDAsIG4gPSBjb250YWN0cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICBsZXQgZGlzdCA9IGRpc3RhbmNlRnJvbUxpbmUoZnVydGhlc3QuUEEsIGRlZXBlc3QuUEEsIGNvbnRhY3RzW2ldLlBBKTtcclxuXHJcbiAgICAgICAgaWYgKGRpc3QgPj0gbWF4RGlzdGFuY2UpIHtcclxuICAgICAgICAgIG1heERpc3RhbmNlID0gZGlzdDtcclxuICAgICAgICAgIGZ1cnRoZXN0MiA9IGNvbnRhY3RzW2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgbGV0IGZ1cnRoZXN0MyA9IG51bGw7XHJcbiAgICAgIG1heERpc3RhbmNlID0gMDtcclxuXHJcbiAgICAgIGNvbnN0IG9wcG9zaXRlVG9kaWFnb25hbCA9IGZpbmRGdXJ0aGVzdFBvaW50KFxyXG4gICAgICAgIGRlZXBlc3QuUEEsXHJcbiAgICAgICAgZnVydGhlc3QuUEEsXHJcbiAgICAgICAgZnVydGhlc3QyLlBBXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBmb3IgKGkgPSAwLCBuID0gY29udGFjdHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgbGV0IGRpc3QgPSBub3JtU3EoZGlmZihvcHBvc2l0ZVRvZGlhZ29uYWwsIGNvbnRhY3RzW2ldLlBBKSk7XHJcblxyXG4gICAgICAgIGlmIChkaXN0ID49IG1heERpc3RhbmNlKSB7XHJcbiAgICAgICAgICBtYXhEaXN0YW5jZSA9IGRpc3Q7XHJcbiAgICAgICAgICBmdXJ0aGVzdDMgPSBjb250YWN0c1tpXTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnRhY3RzWzBdID0gZGVlcGVzdDtcclxuICAgICAgY29udGFjdHNbMV0gPSBmdXJ0aGVzdDtcclxuICAgICAgY29udGFjdHNbMl0gPSBmdXJ0aGVzdDI7XHJcbiAgICAgIGNvbnRhY3RzWzNdID0gZnVydGhlc3QzO1xyXG5cclxuICAgICAgd2hpbGUgKGNvbnRhY3RzLmxlbmd0aCA+IDQpIGNvbnRhY3RzLnBvcCgpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tIFwiLi9ldmVudEVtaXR0ZXJcIjtcclxuaW1wb3J0IHsgbTMsIHZlY3RvciwgQUFCQiB9IGZyb20gXCJtYXRoXCI7XHJcbmNvbnN0IHsgY3Jvc3MsIHNjYWxlLCBub3JtLCBzdW0sIGRpZmYsIGNoa1YgfSA9IHZlY3RvcjtcclxuY29uc3QgcHJlYyA9IDAuMDE7XHJcbmNvbnN0IHN0b3BUcmVzaG9sZCA9IDAuMDAxO1xyXG5jbGFzcyBQaHlzaWNzIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcclxuICBjb25zdHJ1Y3Rvcihjb2xsaWRlcikge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuc3RhdGljID0gZmFsc2U7XHJcbiAgICB0aGlzLmNvbGxpZGVyID0gY29sbGlkZXI7XHJcbiAgICB0aGlzLm1hc3MgPSAxO1xyXG4gICAgdGhpcy5pbnZlcnNlTWFzcyA9IDEgLyB0aGlzLm1hc3M7XHJcbiAgICB0aGlzLnZlbG9jaXR5ID0gWzAsIDAsIDBdO1xyXG4gICAgdGhpcy5wc2V1ZG9WZWxvY2l0eSA9IFswLCAwLCAwXTtcclxuICAgIHRoaXMucHNldWRvQW5ndWxhclYgPSBbMCwgMCwgMF07XHJcbiAgICB0aGlzLmFjY2VsZXJhdGlvbiA9IFswLCAwLCAwXTtcclxuICAgIHRoaXMuYW5ndWxhclYgPSBbMCwgMCwgMF07XHJcbiAgICB0aGlzLmludmVyc2VJbmVydGlhID0gY29sbGlkZXIuZ2V0SW52ZXJzZUluZXJ0aWFUZW5zb3IodGhpcy5tYXNzKTtcclxuICAgIHRoaXMuaWQgPSAxO1xyXG4gICAgdGhpcy5mcmljdGlvbiA9IDAuMTtcclxuICAgIHRoaXMuQlZsaW5rO1xyXG4gIH1cclxuICBpbnRlZ3JhdGUoZHQpIHtcclxuICAgIGNvbnN0IHsgYWNjZWxlcmF0aW9uLCB2ZWxvY2l0eSwgdHJhbnNsYXRpb24gfSA9IHRoaXM7XHJcblxyXG4gICAgdGhpcy50cmFuc2xhdGUoc2NhbGUodGhpcy52ZWxvY2l0eSwgZHQpKTtcclxuICAgIGNvbnN0IHJvdGF0aW9uID0gc2NhbGUodGhpcy5hbmd1bGFyViwgZHQgKiAwLjUpO1xyXG4gICAgaWYgKG5vcm0ocm90YXRpb24pID4gc3RvcFRyZXNob2xkKSB0aGlzLnJvdGF0ZShyb3RhdGlvbik7XHJcbiAgICBsZXQgZGVsdGFTcGVlZCA9IHNjYWxlKHRoaXMuYWNjZWxlcmF0aW9uLCBkdCk7XHJcbiAgICB0aGlzLnZlbG9jaXR5ID0gc3VtKHRoaXMudmVsb2NpdHksIGRlbHRhU3BlZWQpO1xyXG4gIH1cclxuICBpbnRlZ3JhdGVQc2V1ZG9WZWxvY2l0aWVzKGR0KSB7XHJcbiAgICBjb25zdCB0cmFuc2xhdGlvbiA9IHNjYWxlKHRoaXMucHNldWRvVmVsb2NpdHksIGR0KTtcclxuXHJcbiAgICBjb25zdCByb3RhdGlvbiA9IHNjYWxlKHRoaXMucHNldWRvQW5ndWxhclYsIGR0ICogMC41KTtcclxuICAgIGlmIChub3JtKHRyYW5zbGF0aW9uKSA+IHN0b3BUcmVzaG9sZCkgdGhpcy50cmFuc2xhdGUodHJhbnNsYXRpb24pO1xyXG5cclxuICAgIGlmIChub3JtKHJvdGF0aW9uKSA+IHN0b3BUcmVzaG9sZCkgdGhpcy5yb3RhdGUocm90YXRpb24pO1xyXG5cclxuICAgIHRoaXMucHNldWRvVmVsb2NpdHkgPSBbMCwgMCwgMF07XHJcbiAgICB0aGlzLnBzZXVkb0FuZ3VsYXJWID0gWzAsIDAsIDBdO1xyXG4gIH1cclxuICBhZGRQc2V1ZG9WZWxvY2l0eSh2KSB7XHJcbiAgICB0aGlzLnBzZXVkb1ZlbG9jaXR5ID0gc3VtKHRoaXMucHNldWRvVmVsb2NpdHksIHYpO1xyXG4gIH1cclxuICBhZGRQc2V1ZG9Bbmd1bGFyVih2KSB7XHJcbiAgICB0aGlzLnBzZXVkb0FuZ3VsYXJWID0gc3VtKHRoaXMucHNldWRvQW5ndWxhclYsIHYpO1xyXG4gIH1cclxuICBpbnRlZ3JhdGVWZWxvY2l0aWVzKGR0KSB7XHJcbiAgICBjb25zdCB0cmFuc2xhdGlvbiA9IHNjYWxlKHRoaXMudmVsb2NpdHksIGR0KTtcclxuICAgIGlmIChub3JtKHRyYW5zbGF0aW9uKSA+IHN0b3BUcmVzaG9sZCkgdGhpcy50cmFuc2xhdGUodHJhbnNsYXRpb24pO1xyXG4gICAgY29uc3Qgcm90YXRpb24gPSBzY2FsZSh0aGlzLmFuZ3VsYXJWLCBkdCAqIDAuNSk7XHJcbiAgICBpZiAobm9ybSh0cmFuc2xhdGlvbikgPiBzdG9wVHJlc2hvbGQpIHRoaXMucm90YXRlKHJvdGF0aW9uKTtcclxuICB9XHJcbiAgaW50ZWdyYXRlRm9yY2VzKGR0KSB7XHJcbiAgICBsZXQgZGVsdGFTcGVlZCA9IHNjYWxlKHRoaXMuYWNjZWxlcmF0aW9uLCBkdCk7XHJcbiAgICB0aGlzLnZlbG9jaXR5ID0gc3VtKHRoaXMudmVsb2NpdHksIGRlbHRhU3BlZWQpO1xyXG4gIH1cclxuICB1cGRhdGVJbnZlcnNlSW5lcnRpYSgpIHtcclxuICAgIHRoaXMuaW52ZXJzZUluZXJ0aWEgPSB0aGlzLmNvbGxpZGVyLmdldEludmVyc2VJbmVydGlhVGVuc29yKHRoaXMubWFzcyk7XHJcbiAgfVxyXG4gIGdldEl0ZW5zb3IoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jb2xsaWRlci5nZXRJbnZlcnNlSW5lcnRpYVRlbnNvcih0aGlzLm1hc3MpO1xyXG4gIH1cclxuICBzZXRNYXNzKG1hc3MpIHtcclxuICAgIHRoaXMubWFzcyA9IG1hc3M7XHJcbiAgICB0aGlzLmludmVyc2VNYXNzID0gMSAvIHRoaXMubWFzcztcclxuICB9XHJcbiAgdHJhbnNsYXRlKHRyYW5zbGF0aW9uKSB7XHJcbiAgICB0aGlzLmNvbGxpZGVyLnRyYW5zbGF0ZSh0cmFuc2xhdGlvbik7XHJcblxyXG4gICAgdGhpcy5lbWl0KFwidXBkYXRlXCIpO1xyXG4gIH1cclxuICByb3RhdGUocm90YXRpb24pIHtcclxuICAgIHRoaXMuY29sbGlkZXIucm90YXRlKHJvdGF0aW9uKTtcclxuXHJcbiAgICB0aGlzLmVtaXQoXCJ1cGRhdGVcIik7XHJcbiAgfVxyXG4gIGFwcGx5SW1wdWxzZShpbXB1bHNlLCBwb2ludCkge1xyXG4gICAgdGhpcy52ZWxvY2l0eSA9IHN1bSh0aGlzLnZlbG9jaXR5LCBzY2FsZShpbXB1bHNlLCB0aGlzLmludmVyc2VNYXNzKSk7XHJcbiAgICBjb25zdCBhbmd1bGFySW1wdWxzZSA9IG0zLnRyYW5zZm9ybVBvaW50KFxyXG4gICAgICB0aGlzLmdldEl0ZW5zb3IoKSxcclxuICAgICAgY3Jvc3MocG9pbnQsIGltcHVsc2UpXHJcbiAgICApO1xyXG4gICAgdGhpcy5hbmd1bGFyViA9IHN1bSh0aGlzLmFuZ3VsYXJWLCBhbmd1bGFySW1wdWxzZSk7XHJcbiAgfVxyXG4gIGFwcGx5UHNldWRvSW1wdWxzZShpbXB1bHNlLCBwb2ludCkge1xyXG4gICAgdGhpcy5wc2V1ZG9WZWxvY2l0eSA9IHN1bShcclxuICAgICAgdGhpcy5wc2V1ZG9WZWxvY2l0eSxcclxuICAgICAgc2NhbGUoaW1wdWxzZSwgdGhpcy5pbnZlcnNlTWFzcylcclxuICAgICk7XHJcbiAgICBjb25zdCBhbmd1bGFySW1wdWxzZSA9IG0zLnRyYW5zZm9ybVBvaW50KFxyXG4gICAgICB0aGlzLmdldEl0ZW5zb3IoKSxcclxuICAgICAgY3Jvc3MocG9pbnQsIGltcHVsc2UpXHJcbiAgICApO1xyXG4gICAgdGhpcy5wc2V1ZG9Bbmd1bGFyViA9IHN1bSh0aGlzLnBzZXVkb0FuZ3VsYXJWLCBhbmd1bGFySW1wdWxzZSk7XHJcbiAgfVxyXG4gIGFkZFZlbG9jaXR5KHYpIHtcclxuICAgIGNoa1Yodik7XHJcbiAgICBpZiAodGhpcy5zdGF0aWMpIHJldHVybjtcclxuICAgIHRoaXMudmVsb2NpdHkgPSBzdW0odGhpcy52ZWxvY2l0eSwgdik7XHJcbiAgfVxyXG4gIGFkZEFuZ3VsYXJWKHYpIHtcclxuICAgIGNoa1Yodik7XHJcbiAgICBpZiAodGhpcy5zdGF0aWMpIHJldHVybjtcclxuICAgIHRoaXMuYW5ndWxhclYgPSBzdW0odGhpcy5hbmd1bGFyViwgdik7XHJcbiAgfVxyXG4gIGFkZEFjY2VsZXJhdGlvbih2KSB7XHJcbiAgICB0aGlzLmFjY2VsZXJhdGlvbiA9IHN1bSh0aGlzLmFjY2VsZXJhdGlvbiwgdik7XHJcbiAgfVxyXG4gIGdldEV4cGFuZGVkQUFCQigpIHtcclxuICAgIGNvbnN0IGFhYmIgPSB0aGlzLmNvbGxpZGVyLmdldEFBQkIoKTtcclxuICAgIGNvbnN0IHZlbG9jaXR5ID0gdGhpcy52ZWxvY2l0eTtcclxuICAgIGNvbnN0IHRyID0gW3ByZWMsIHByZWMsIHByZWNdO1xyXG4gICAgYWFiYi5taW4gPSBkaWZmKGFhYmIubWluLCB0cik7XHJcbiAgICBhYWJiLm1heCA9IHN1bShhYWJiLm1heCwgdHIpO1xyXG5cclxuICAgIC8qaWYodmVsb2NpdHlbMF0gPiAxMCkgYWFiYi5tYXhbMF0gKz0gdmVsb2NpdHlbMF1cclxuICAgICAgaWYodmVsb2NpdHlbMV0gPiAxMCkgYWFiYi5tYXhbMV0gKz0gdmVsb2NpdHlbMV1cclxuICAgICAgaWYodmVsb2NpdHlbMl0gPiAxMCkgYWFiYi5tYXhbMl0gKz0gdmVsb2NpdHlbMl1cclxuICAgICAgaWYodmVsb2NpdHlbMF0gPCAtMTApIGFhYmIubWluWzBdICs9IHZlbG9jaXR5WzBdXHJcbiAgICAgIGlmKHZlbG9jaXR5WzFdIDwgLTEwKSBhYWJiLm1pblsxXSArPSB2ZWxvY2l0eVsxXVxyXG4gICAgICBpZih2ZWxvY2l0eVsyXSA8IC0xMCkgYWFiYi5taW5bMl0gKz0gdmVsb2NpdHlbMl0qL1xyXG4gICAgcmV0dXJuIGFhYmI7XHJcbiAgfVxyXG4gIGdldEFBQkIoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jb2xsaWRlci5nZXRBQUJCKCk7XHJcbiAgfVxyXG59XHJcblxyXG5jbGFzcyBQbGF5ZXIgZXh0ZW5kcyBQaHlzaWNzIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XHJcbiAgICB0aGlzLmZyaWN0aW9uID0gMTA7XHJcbiAgfVxyXG4gIGFwcGx5SW1wdWxzZShpbXB1bHNlLCBwb2ludCkge1xyXG4gICAgdGhpcy52ZWxvY2l0eSA9IHN1bSh0aGlzLnZlbG9jaXR5LCBzY2FsZShpbXB1bHNlLCB0aGlzLmludmVyc2VNYXNzKSk7XHJcbiAgfVxyXG4gIGFwcGx5UHNldWRvSW1wdWxzZShpbXB1bHNlKSB7XHJcbiAgICB0aGlzLnBzZXVkb1ZlbG9jaXR5ID0gc3VtKFxyXG4gICAgICB0aGlzLnBzZXVkb1ZlbG9jaXR5LFxyXG4gICAgICBzY2FsZShpbXB1bHNlLCB0aGlzLmludmVyc2VNYXNzKVxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuZXhwb3J0IHsgUGh5c2ljcywgUGxheWVyIH07XHJcbiIsImltcG9ydCBUcmVlIGZyb20gXCIuL3RyZWVcIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgc29sdmVDb2xsaXNpb24sXHJcbiAgc29sdmVDb250YWN0UG9zaXRpb25FcnIsXHJcbiAgd2FybVN0YXJ0LFxyXG4gIHNvbHZlUG9zaXRpb24sXHJcbn0gZnJvbSBcIi4vY29uc3RyYWludHNcIjtcclxuaW1wb3J0IHtnamt9IGZyb20gXCIuL2dqa1wiO1xyXG5cclxuaW1wb3J0IE1hbmlmb2xkIGZyb20gXCIuL21hbmlmb2xkXCI7XHJcbmltcG9ydCBJc2xhbmQgZnJvbSBcIi4vaXNsYW5kXCI7XHJcbmltcG9ydCB7IEdhdXNzU2VpZGVsIH0gZnJvbSBcIi4vR1Nzb2x2ZXJcIjtcclxuY29uc3QgcHJlYyA9IDAuMztcclxuY29uc3QgcGFpckhhc2ggPSAoeCwgeSkgPT5cclxuICB4ID09PSBNYXRoLm1heCh4LCB5KSA/IHggKiB4ICsgeCArIHkgOiB5ICogeSArIHggKyB5O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2ltdWxhdGlvbiB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLm9iamVjdHMgPSBbXTtcclxuICAgIHRoaXMuYnZoID0gbmV3IFRyZWUoKTtcclxuICAgIHRoaXMuY29sbGlzaW9ucyA9IFtdO1xyXG4gICAgdGhpcy5jb25zdHJhaW5zID0gW107XHJcbiAgICB0aGlzLmNvbGxpc2lvbk1hbmlmb2xkcyA9IG5ldyBNYXAoKTtcclxuICAgIHRoaXMubGFzdElkID0gMDtcclxuICB9XHJcbiAgYWRkT2JqZWN0KG9iamVjdCkge1xyXG4gICAgY29uc3QgYWFiYiA9IG9iamVjdC5nZXRFeHBhbmRlZEFBQkIoKTtcclxuXHJcbiAgICBjb25zdCBsZWFmID0gdGhpcy5idmguaW5zZXJ0TGVhZihhYWJiLCBvYmplY3QpO1xyXG4gICAgb2JqZWN0LkJWbGluayA9IGxlYWY7XHJcbiAgICBvYmplY3QuaWQgPSB0aGlzLmxhc3RJZDtcclxuICAgIHRoaXMubGFzdElkKys7XHJcbiAgICBvYmplY3Qub24oXCJ1cGRhdGVcIiwgKCkgPT4gdGhpcy51cGRhdGVPYmplY3RBQUJCLmNhbGwodGhpcywgb2JqZWN0KSk7XHJcblxyXG4gICAgdGhpcy5vYmplY3RzLnB1c2gob2JqZWN0KTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZU9iamVjdEFBQkIob2JqZWN0KSB7XHJcbiAgICBjb25zdCBuZXdBQUJCID0gb2JqZWN0LmdldEFBQkIoKTtcclxuXHJcbiAgICB0aGlzLmJ2aC5yZW1vdmVMZWFmKG9iamVjdC5CVmxpbmspO1xyXG4gICAgY29uc3QgbGVhZiA9IHRoaXMuYnZoLmluc2VydExlYWYobmV3QUFCQiwgb2JqZWN0KTtcclxuICAgIG9iamVjdC5CVmxpbmsgPSBsZWFmO1xyXG4gIH1cclxuICByZW1vdmVPYmplY3Qob2JqZWN0KSB7XHJcbiAgICB0aGlzLmJ2aC5yZW1vdmVMZWFmKG9iamVjdC5CVmxpbmspO1xyXG4gICAgdGhpcy5vYmplY3RzID0gdGhpcy5vYmplY3RzLmZpbHRlcigoZWwpID0+IGVsID09PSBvYmplY3QpO1xyXG4gIH1cclxuICB1cGRhdGVDb2xsaXNpb25zKCkge1xyXG4gICAgY29uc3QgbWFuaWZvbGRzID0gdGhpcy5jb2xsaXNpb25NYW5pZm9sZHMudmFsdWVzKCk7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDAsIG4gPSB0aGlzLm9iamVjdHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IG9iamVjdCA9IHRoaXMub2JqZWN0c1tpXTtcclxuICAgICAgaWYgKG9iamVjdC5zdGF0aWMpIGNvbnRpbnVlO1xyXG4gICAgICBjb25zdCBjb2xzID0gdGhpcy5idmguZ2V0Q29sbGlzaW9ucyhvYmplY3QuQlZsaW5rKTtcclxuICAgICAgb2JqZWN0LkJWbGluay5pc0NoZWNrZWQgPSB0cnVlO1xyXG4gICAgICBpZiAoY29scy5sZW5ndGggIT0gMClcclxuICAgICAgICBmb3IgKGxldCBqID0gMCwgbiA9IGNvbHMubGVuZ3RoOyBqIDwgbjsgaisrKSB7XHJcbiAgICAgICAgICBjb25zdCBoYXNoID0gcGFpckhhc2gob2JqZWN0LmlkLCBjb2xzW2pdLmlkKTtcclxuICAgICAgICAgIGxldCBtYW5pZm9sZCA9IHRoaXMuY29sbGlzaW9uTWFuaWZvbGRzLmdldChoYXNoKTtcclxuICAgICAgICAgIC8vaWYobWFuaWZvbGQgJiYgbWFuaWZvbGQuY29udGFjdHMubGVuZ3RoID4gNCkgY29udGludWVcclxuICAgICAgICAgIGNvbnN0IGNvbnRhY3QgPSBnamsob2JqZWN0LCBjb2xzW2pdKTtcclxuXHJcbiAgICAgICAgICBpZiAoIWNvbnRhY3QpIHtcclxuICAgICAgICAgICAgaWYgKG1hbmlmb2xkKSB0aGlzLmNvbGxpc2lvbk1hbmlmb2xkcy5kZWxldGUoaGFzaCk7XHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGlmICghbWFuaWZvbGQpIHtcclxuICAgICAgICAgICAgbWFuaWZvbGQgPSBuZXcgTWFuaWZvbGQob2JqZWN0LCBjb2xzW2pdKTtcclxuICAgICAgICAgICAgbWFuaWZvbGQuY29udGFjdHMgPSBbY29udGFjdF07XHJcblxyXG4gICAgICAgICAgICB0aGlzLmNvbGxpc2lvbk1hbmlmb2xkcy5zZXQoaGFzaCwgbWFuaWZvbGQpO1xyXG4gICAgICAgICAgfSBlbHNlIG1hbmlmb2xkLmFkZENvbnRhY3QoY29udGFjdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuYnZoLnNldFVuY2hlY2tlZCgpO1xyXG4gIH1cclxuICB0aWNrKGRlbHRhVGltZSkge1xyXG4gICAgdGhpcy51cGRhdGVDb2xsaXNpb25zKCk7XHJcbiAgICBsZXQgbWFuaWZvbGRzID0gdGhpcy5jb2xsaXNpb25NYW5pZm9sZHMudmFsdWVzKCk7XHJcbiAgICBmb3IgKGxldCBtYW5pZm9sZCBvZiBtYW5pZm9sZHMpIG1hbmlmb2xkLnVwZGF0ZSgpO1xyXG4vKiAgXHJcbiAgICBtYW5pZm9sZHMgPSB0aGlzLmNvbGxpc2lvbk1hbmlmb2xkcy52YWx1ZXMoKTtcclxuXHJcbiAgIFxyXG4gICAgY29uc3Qgc3lzdGVtID0gbmV3IElzbGFuZCgpO1xyXG4gICAgZm9yIChsZXQgbWFuaWZvbGQgb2YgbWFuaWZvbGRzKSB7XHJcbiAgICAgIGNvbnN0IGNvbnRhY3RzID0gbWFuaWZvbGQuY29udGFjdHM7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwLCBuID0gY29udGFjdHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgY29udGFjdHNbaV0udXBkYXRlRXEoKTtcclxuICAgICAgfVxyXG4gICAgICBzeXN0ZW0uYWRkQ29uc3RyYWludCguLi5jb250YWN0cyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3lzdGVtLmdlbmVyYXRlU3lzdGVtKGRlbHRhVGltZSk7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDAsIG4gPSB0aGlzLm9iamVjdHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgIHRoaXMub2JqZWN0c1tpXS5pbnRlZ3JhdGVGb3JjZXMoZGVsdGFUaW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBbX0pNSiwgX0pWLCBfSnBWXSA9IHN5c3RlbS5nZXRVcGRhdGVkVmFsdWVzKCk7XHJcbiAgICBjb25zdCBsYW1iZGEgPSBHYXVzc1NlaWRlbChfSk1KLCBfSlYsIHN5c3RlbS5jb25zdHJhaW50cy5sZW5ndGgsIDFlLTcpO1xyXG4gICAgc3lzdGVtLmFwcGx5UmVzb2x2aW5nSW1wdWxzZXMobGFtYmRhKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMCwgbiA9IHRoaXMub2JqZWN0cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgdGhpcy5vYmplY3RzW2ldLmludGVncmF0ZVZlbG9jaXRpZXMoZGVsdGFUaW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBtYW5pZm9sZHMgPSB0aGlzLmNvbGxpc2lvbk1hbmlmb2xkcy52YWx1ZXMoKTtcclxuICAgIGNvbnN0IHBvc2l0aW9uU3lzdGVtID0gbmV3IElzbGFuZCgpO1xyXG4gICAgZm9yIChjb25zdCBtYW5pZm9sZCBvZiBtYW5pZm9sZHMpIHtcclxuICAgICAgY29uc3QgeyBjb250YWN0cyB9ID0gbWFuaWZvbGQ7XHJcbiAgICAgIGNvbnRhY3RzLmZvckVhY2goKGNvbnRhY3QpID0+IGNvbnRhY3QudXBkYXRlRXEoKSk7XHJcbiAgICAgIGlmIChjb250YWN0cy5sZW5ndGggPiAyKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcG9zaXRpb25TeXN0ZW0uYWRkQ29uc3RyYWludCguLi5jb250YWN0cyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHBvc2l0aW9uU3lzdGVtLmdlbmVyYXRlU3lzdGVtKGRlbHRhVGltZSk7XHJcbiAgICBjb25zdCBKTUogPSBwb3NpdGlvblN5c3RlbS5nZXRKTUooKTtcclxuICAgIGNvbnN0IEpwViA9IHBvc2l0aW9uU3lzdGVtLmdldEpwVigpO1xyXG4gICAgY29uc3QgcExhbWJkYSA9IEdhdXNzU2VpZGVsKFxyXG4gICAgICBKTUosXHJcbiAgICAgIEpwVixcclxuICAgICAgcG9zaXRpb25TeXN0ZW0uY29uc3RyYWludHMubGVuZ3RoLFxyXG4gICAgICAxZS03XHJcbiAgICApO1xyXG4gICAgcG9zaXRpb25TeXN0ZW0uYXBwbHlSZXNvbHZpbmdQc2V1ZG9JbXB1bHNlcyhwTGFtYmRhLCBkZWx0YVRpbWUpO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwLCBuID0gdGhpcy5vYmplY3RzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICB0aGlzLm9iamVjdHNbaV0uaW50ZWdyYXRlUHNldWRvVmVsb2NpdGllcyhkZWx0YVRpbWUpO1xyXG4gICAgfSovXHJcbiAgICAvL2ZvcihsZXQgaSA9IDA7IGk8NDsgaSsrXHJcbiAgICBcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQUFCQiB9IGZyb20gXCJtYXRoXCI7XHJcbmNvbnN0IGdldEJvdW5kQWFiYiA9IChhYWJiMSwgYWFiYjIpID0+IHtcclxuICBpZiAoIWFhYmIxIHx8ICFhYWJiMikge1xyXG4gICAgcmV0dXJuIDA7XHJcbiAgfVxyXG4gIGNvbnN0IHgxID0gYWFiYjEubWluWzBdIDwgYWFiYjIubWluWzBdID8gYWFiYjEubWluWzBdIDogYWFiYjIubWluWzBdO1xyXG4gIGNvbnN0IHgyID0gYWFiYjEubWF4WzBdID4gYWFiYjIubWF4WzBdID8gYWFiYjEubWF4WzBdIDogYWFiYjIubWF4WzBdO1xyXG4gIGNvbnN0IHkxID0gYWFiYjEubWluWzFdIDwgYWFiYjIubWluWzFdID8gYWFiYjEubWluWzFdIDogYWFiYjIubWluWzFdO1xyXG4gIGNvbnN0IHkyID0gYWFiYjEubWF4WzFdID4gYWFiYjIubWF4WzFdID8gYWFiYjEubWF4WzFdIDogYWFiYjIubWF4WzFdO1xyXG4gIGNvbnN0IHoxID0gYWFiYjEubWluWzJdIDwgYWFiYjIubWluWzJdID8gYWFiYjEubWluWzJdIDogYWFiYjIubWluWzJdO1xyXG4gIGNvbnN0IHoyID0gYWFiYjEubWF4WzJdID4gYWFiYjIubWF4WzJdID8gYWFiYjEubWF4WzJdIDogYWFiYjIubWF4WzJdO1xyXG4gIHJldHVybiBuZXcgQUFCQihbeDEsIHkxLCB6MV0sIFt4MiwgeTIsIHoyXSk7XHJcbn07XHJcbmNvbnN0IGlzQ29sbGlkZSA9IChhYWJiMSwgYWFiYjIpID0+IHtcclxuICBpZiAoXHJcbiAgICBhYWJiMS5taW5bMF0gPD0gYWFiYjIubWF4WzBdICYmXHJcbiAgICBhYWJiMS5tYXhbMF0gPj0gYWFiYjIubWluWzBdICYmXHJcbiAgICBhYWJiMS5taW5bMV0gPD0gYWFiYjIubWF4WzFdICYmXHJcbiAgICBhYWJiMS5tYXhbMV0gPj0gYWFiYjIubWluWzFdICYmXHJcbiAgICBhYWJiMS5taW5bMl0gPD0gYWFiYjIubWF4WzJdICYmXHJcbiAgICBhYWJiMS5tYXhbMl0gPj0gYWFiYjIubWluWzJdXHJcbiAgKSB7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbiAgcmV0dXJuIGZhbHNlO1xyXG59O1xyXG5jb25zdCBnZXRTaXplID0gKGFhYmIpID0+IHtcclxuICBjb25zdCBhcmVhID1cclxuICAgIE1hdGguYWJzKGFhYmIubWF4WzBdIC0gYWFiYi5taW5bMF0pICpcclxuICAgIE1hdGguYWJzKGFhYmIubWF4WzFdIC0gYWFiYi5taW5bMV0pICpcclxuICAgIE1hdGguYWJzKGFhYmIubWF4WzJdIC0gYWFiYi5taW5bMl0pO1xyXG4gIHJldHVybiBhcmVhO1xyXG59O1xyXG5jbGFzcyBOb2RlIHtcclxuICBjb25zdHJ1Y3RvcihhYWJiLCBpc0xlYWYsIGdhbWVPYmplY3QpIHtcclxuICAgIHRoaXMuYWFiYiA9IGFhYmI7XHJcbiAgICB0aGlzLmlzTGVhZiA9IGlzTGVhZjtcclxuICAgIHRoaXMucGFyZW50ID0gbnVsbDtcclxuXHJcbiAgICB0aGlzLmdhbWVPYmplY3QgPSBnYW1lT2JqZWN0O1xyXG4gICAgdGhpcy5pc0NoZWNrZWQgPSBmYWxzZTtcclxuICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJlZSB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnJvb3QgPSBudWxsO1xyXG4gICAgdGhpcy5sZWFmcyA9IHt9O1xyXG4gICAgdGhpcy51bnVzZWRJbmRleGVzID0gW107XHJcbiAgfVxyXG4gIHNldFVuY2hlY2tlZCgpIHtcclxuICAgIGNvbnN0IHN0YWNrID0gW3RoaXMucm9vdF07XHJcblxyXG4gICAgd2hpbGUgKHN0YWNrLmxlbmd0aCAhPSAwKSB7XHJcbiAgICAgIGNvbnN0IG5vZGUgPSBzdGFjay5wb3AoKTtcclxuICAgICAgaWYgKG5vZGUuaXNMZWFmKSB7XHJcbiAgICAgICAgbm9kZS5pc0NoZWNrZWQgPSBmYWxzZTtcclxuICAgICAgICBjb250aW51ZTtcclxuICAgICAgfVxyXG4gICAgICBpZiAobm9kZS5jaGlsZDEpIHN0YWNrLnB1c2gobm9kZS5jaGlsZDEpO1xyXG4gICAgICBpZiAobm9kZS5jaGlsZDIpIHN0YWNrLnB1c2gobm9kZS5jaGlsZDIpO1xyXG4gICAgfVxyXG4gIH1cclxuICBnZXRCZXN0U2libGluZyhsZWFmKSB7XHJcbiAgICBsZXQgcG90ZW50aWFsID0gdGhpcy5yb290O1xyXG4gICAgd2hpbGUgKCFwb3RlbnRpYWwuaXNMZWFmKSB7XHJcbiAgICAgIGNvbnN0IHNpemUgPSBnZXRTaXplKHBvdGVudGlhbC5hYWJiKTtcclxuICAgICAgY29uc3QgY29tYmluZWRBQUJCID0gZ2V0Qm91bmRBYWJiKHBvdGVudGlhbC5hYWJiLCBsZWFmLmFhYmIpO1xyXG4gICAgICBjb25zdCBjb21iaW5lZFNpemUgPSBnZXRTaXplKGNvbWJpbmVkQUFCQik7XHJcbiAgICAgIGxldCBjb3N0ID0gY29tYmluZWRTaXplO1xyXG4gICAgICBsZXQgaW5oZXJDb3N0ID0gY29tYmluZWRTaXplIC0gc2l6ZTtcclxuXHJcbiAgICAgIGxldCBjb3N0MTtcclxuICAgICAgaWYgKHBvdGVudGlhbC5jaGlsZDEuaXNMZWFmKSB7XHJcbiAgICAgICAgY29zdDEgPSBnZXRTaXplKHBvdGVudGlhbC5jaGlsZDEuYWFiYikgKyBpbmhlckNvc3Q7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29zdDEgPVxyXG4gICAgICAgICAgZ2V0U2l6ZShnZXRCb3VuZEFhYmIobGVhZi5hYWJiLCBwb3RlbnRpYWwuY2hpbGQxLmFhYmIpKSAtXHJcbiAgICAgICAgICBnZXRTaXplKHBvdGVudGlhbC5jaGlsZDEuYWFiYikgK1xyXG4gICAgICAgICAgaW5oZXJDb3N0O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBsZXQgY29zdDI7XHJcbiAgICAgIGlmIChwb3RlbnRpYWwuY2hpbGQyLmlzTGVhZikge1xyXG4gICAgICAgIGNvc3QyID0gZ2V0U2l6ZShwb3RlbnRpYWwuY2hpbGQyLmFhYmIpICsgaW5oZXJDb3N0O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvc3QyID1cclxuICAgICAgICAgIGdldFNpemUoZ2V0Qm91bmRBYWJiKGxlYWYuYWFiYiwgcG90ZW50aWFsLmNoaWxkMi5hYWJiKSkgLVxyXG4gICAgICAgICAgZ2V0U2l6ZShwb3RlbnRpYWwuY2hpbGQyLmFhYmIpICtcclxuICAgICAgICAgIGluaGVyQ29zdDtcclxuICAgICAgfVxyXG4gICAgICBpZiAoY29zdCA8IGNvc3QxICYmIGNvc3QgPCBjb3N0MikgcmV0dXJuIHBvdGVudGlhbDtcclxuICAgICAgaWYgKGNvc3QxIDwgY29zdDIpIHtcclxuICAgICAgICBwb3RlbnRpYWwgPSBwb3RlbnRpYWwuY2hpbGQxO1xyXG4gICAgICB9IGVsc2UgcG90ZW50aWFsID0gcG90ZW50aWFsLmNoaWxkMjtcclxuICAgIH1cclxuICAgIHJldHVybiBwb3RlbnRpYWw7XHJcbiAgfVxyXG4gIGluc2VydExlYWYoYWFiYiwgZ2FtZU9iamVjdCkge1xyXG4gICAgY29uc3QgbGVhZiA9IG5ldyBOb2RlKGFhYmIsIHRydWUsIGdhbWVPYmplY3QpO1xyXG4gICAgaWYgKHRoaXMucm9vdCA9PT0gbnVsbCkge1xyXG4gICAgICB0aGlzLnJvb3QgPSBsZWFmO1xyXG4gICAgICB0aGlzLnJvb3QucGFyZW50ID0gbnVsbDtcclxuICAgICAgcmV0dXJuIGxlYWY7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2libGluZyA9IHRoaXMuZ2V0QmVzdFNpYmxpbmcobGVhZik7XHJcbiAgICBjb25zdCBvbGRQYXJlbnQgPSBzaWJsaW5nLnBhcmVudDtcclxuICAgIGNvbnN0IG5ld1BhcmVudCA9IG5ldyBOb2RlKGxlYWYuYWFiYiwgZmFsc2UpO1xyXG4gICAgbmV3UGFyZW50LnBhcmVudCA9IG9sZFBhcmVudDtcclxuXHJcbiAgICBuZXdQYXJlbnQuYWFiYiA9IGdldEJvdW5kQWFiYihsZWFmLmFhYmIsIHNpYmxpbmcuYWFiYik7XHJcblxyXG4gICAgaWYgKG9sZFBhcmVudCkge1xyXG4gICAgICBpZiAob2xkUGFyZW50LmNoaWxkMSA9PT0gc2libGluZykgb2xkUGFyZW50LmNoaWxkMSA9IG5ld1BhcmVudDtcclxuICAgICAgZWxzZSBvbGRQYXJlbnQuY2hpbGQyID0gbmV3UGFyZW50O1xyXG5cclxuICAgICAgbmV3UGFyZW50LmNoaWxkMSA9IHNpYmxpbmc7XHJcbiAgICAgIG5ld1BhcmVudC5jaGlsZDIgPSBsZWFmO1xyXG5cclxuICAgICAgc2libGluZy5wYXJlbnQgPSBuZXdQYXJlbnQ7XHJcbiAgICAgIGxlYWYucGFyZW50ID0gbmV3UGFyZW50O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbmV3UGFyZW50LmNoaWxkMSA9IHNpYmxpbmc7XHJcbiAgICAgIG5ld1BhcmVudC5jaGlsZDIgPSBsZWFmO1xyXG5cclxuICAgICAgc2libGluZy5wYXJlbnQgPSBuZXdQYXJlbnQ7XHJcbiAgICAgIGxlYWYucGFyZW50ID0gbmV3UGFyZW50O1xyXG4gICAgICB0aGlzLnJvb3QgPSBuZXdQYXJlbnQ7XHJcbiAgICB9XHJcbiAgICBsZXQgaW5kZXggPSBsZWFmLnBhcmVudDtcclxuXHJcbiAgICB3aGlsZSAoaW5kZXgpIHtcclxuICAgICAgaW5kZXggPSB0aGlzLnJlYmFsYW5jZShpbmRleCk7XHJcbiAgICAgIGluZGV4ID0gaW5kZXgucGFyZW50O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGxlYWY7XHJcbiAgfVxyXG4gIGdldENvbGxpc2lvbnMobGVhZikge1xyXG4gICAgY29uc3QgY29scyA9IFtdO1xyXG4gICAgY29uc3QgaXRlciA9IChfbm9kZSkgPT4ge1xyXG4gICAgICBpZiAoIV9ub2RlKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChfbm9kZSA9PT0gbGVhZikge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBpZiAoaXNDb2xsaWRlKGxlYWYuYWFiYiwgX25vZGUuYWFiYikpIHtcclxuICAgICAgICBpZiAoX25vZGUuaXNMZWFmICYmICFfbm9kZS5pc0NoZWNrZWQpIHtcclxuICAgICAgICAgIGNvbHMucHVzaChfbm9kZS5nYW1lT2JqZWN0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaXRlcihfbm9kZS5jaGlsZDEpO1xyXG4gICAgICAgIGl0ZXIoX25vZGUuY2hpbGQyKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBpdGVyKHRoaXMucm9vdCk7XHJcblxyXG4gICAgcmV0dXJuIGNvbHM7XHJcbiAgfVxyXG4gIHJlbW92ZUxlYWYobGVhZikge1xyXG4gICAgaWYgKGxlYWYgPT09IHRoaXMucm9vdCkge1xyXG4gICAgICB0aGlzLnJvb3QgPSBudWxsO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBwYXJlbnQgPSBsZWFmLnBhcmVudDtcclxuICAgIGNvbnN0IGdyYW5kUGFyZW50ID0gcGFyZW50ID8gcGFyZW50LnBhcmVudCA6IG51bGw7XHJcbiAgICBsZXQgc2libGluZztcclxuICAgIGlmIChwYXJlbnQuY2hpbGQxID09PSBsZWFmKSBzaWJsaW5nID0gcGFyZW50LmNoaWxkMjtcclxuICAgIGVsc2Ugc2libGluZyA9IHBhcmVudC5jaGlsZDE7XHJcblxyXG4gICAgaWYgKGdyYW5kUGFyZW50KSB7XHJcbiAgICAgIGlmIChncmFuZFBhcmVudC5jaGlsZDEgPT09IHBhcmVudCkgZ3JhbmRQYXJlbnQuY2hpbGQxID0gc2libGluZztcclxuICAgICAgZWxzZSBncmFuZFBhcmVudC5jaGlsZDIgPSBzaWJsaW5nO1xyXG5cclxuICAgICAgc2libGluZy5wYXJlbnQgPSBncmFuZFBhcmVudDtcclxuXHJcbiAgICAgIGxldCBpbmRleCA9IGdyYW5kUGFyZW50O1xyXG4gICAgICB3aGlsZSAoaW5kZXgpIHtcclxuICAgICAgICBpbmRleCA9IHRoaXMucmViYWxhbmNlKGluZGV4KTtcclxuXHJcbiAgICAgICAgaW5kZXggPSBpbmRleC5wYXJlbnQ7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucm9vdCA9IHNpYmxpbmc7XHJcbiAgICAgIHNpYmxpbmcucGFyZW50ID0gbnVsbDtcclxuICAgIH1cclxuICB9XHJcbiAgcmViYWxhbmNlKGxlYWYpIHtcclxuICAgIGlmICghbGVhZikge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGlmIChsZWFmLmlzTGVhZiB8fCB0aGlzLmdldEhlaWdodChsZWFmKSA8IDIpIHtcclxuICAgICAgbGVhZi5hYWJiID0gZ2V0Qm91bmRBYWJiKGxlYWYuY2hpbGQxLmFhYmIsIGxlYWYuY2hpbGQyLmFhYmIpO1xyXG4gICAgICByZXR1cm4gbGVhZjtcclxuICAgIH1cclxuICAgIGNvbnN0IGNoaWxkMSA9IGxlYWYuY2hpbGQxO1xyXG4gICAgY29uc3QgY2hpbGQyID0gbGVhZi5jaGlsZDI7XHJcbiAgICBjb25zdCBiYWxhbmNlID0gdGhpcy5nZXRIZWlnaHQoY2hpbGQyKSAtIHRoaXMuZ2V0SGVpZ2h0KGNoaWxkMSk7XHJcblxyXG4gICAgaWYgKGJhbGFuY2UgPiAxKSB7XHJcbiAgICAgIGNvbnN0IGNoaWxkMkNoaWxkMSA9IGNoaWxkMi5jaGlsZDE7XHJcbiAgICAgIGNvbnN0IGNoaWxkMkNoaWxkMiA9IGNoaWxkMi5jaGlsZDI7XHJcblxyXG4gICAgICBjaGlsZDIuY2hpbGQxID0gbGVhZjtcclxuICAgICAgY2hpbGQyLnBhcmVudCA9IGxlYWYucGFyZW50O1xyXG4gICAgICBsZWFmLnBhcmVudCA9IGNoaWxkMjtcclxuICAgICAgaWYgKGNoaWxkMi5wYXJlbnQgIT0gbnVsbCkge1xyXG4gICAgICAgIGlmIChjaGlsZDIucGFyZW50LmNoaWxkMSA9PT0gbGVhZikge1xyXG4gICAgICAgICAgY2hpbGQyLnBhcmVudC5jaGlsZDEgPSBjaGlsZDI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNoaWxkMi5wYXJlbnQuY2hpbGQyID0gY2hpbGQyO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHRoaXMucm9vdCA9IGNoaWxkMjtcclxuICAgICAgaWYgKHRoaXMuZ2V0SGVpZ2h0KGNoaWxkMkNoaWxkMSkgPiB0aGlzLmdldEhlaWdodChjaGlsZDJDaGlsZDIpKSB7XHJcbiAgICAgICAgY2hpbGQyLmNoaWxkMiA9IGNoaWxkMkNoaWxkMTtcclxuICAgICAgICBsZWFmLmNoaWxkMiA9IGNoaWxkMkNoaWxkMjtcclxuICAgICAgICBjaGlsZDJDaGlsZDIucGFyZW50ID0gbGVhZjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBsZWFmLmNoaWxkMiA9IGNoaWxkMkNoaWxkMTtcclxuICAgICAgICBjaGlsZDJDaGlsZDEucGFyZW50ID0gbGVhZjtcclxuICAgICAgfVxyXG4gICAgICBsZWFmLmFhYmIgPSBnZXRCb3VuZEFhYmIobGVhZi5jaGlsZDEuYWFiYiwgbGVhZi5jaGlsZDIuYWFiYik7XHJcbiAgICAgIGNoaWxkMi5hYWJiID0gZ2V0Qm91bmRBYWJiKGNoaWxkMi5jaGlsZDEuYWFiYiwgY2hpbGQyLmNoaWxkMi5hYWJiKTtcclxuXHJcbiAgICAgIHJldHVybiBjaGlsZDI7XHJcbiAgICB9XHJcbiAgICBpZiAoYmFsYW5jZSA8IC0xKSB7XHJcbiAgICAgIGNvbnN0IGNoaWxkMUNoaWxkMSA9IGNoaWxkMS5jaGlsZDE7XHJcbiAgICAgIGNvbnN0IGNoaWxkMUNoaWxkMiA9IGNoaWxkMS5jaGlsZDI7XHJcblxyXG4gICAgICBjaGlsZDEuY2hpbGQxID0gbGVhZjtcclxuICAgICAgY2hpbGQxLnBhcmVudCA9IGxlYWYucGFyZW50O1xyXG4gICAgICBsZWFmLnBhcmVudCA9IGNoaWxkMTtcclxuXHJcbiAgICAgIGlmIChjaGlsZDEucGFyZW50ICE9IG51bGwpIHtcclxuICAgICAgICBpZiAoY2hpbGQxLnBhcmVudC5jaGlsZDEgPT09IGxlYWYpIHtcclxuICAgICAgICAgIGNoaWxkMS5wYXJlbnQuY2hpbGQxID0gY2hpbGQxO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjaGlsZDEucGFyZW50LmNoaWxkMiA9IGNoaWxkMTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB0aGlzLnJvb3QgPSBjaGlsZDE7XHJcbiAgICAgIGlmICh0aGlzLmdldEhlaWdodChjaGlsZDFDaGlsZDEpID4gdGhpcy5nZXRIZWlnaHQoY2hpbGQxQ2hpbGQyKSkge1xyXG4gICAgICAgIGNoaWxkMS5jaGlsZDIgPSBjaGlsZDFDaGlsZDE7XHJcbiAgICAgICAgbGVhZi5jaGlsZDEgPSBjaGlsZDFDaGlsZDI7XHJcbiAgICAgICAgY2hpbGQxQ2hpbGQyLnBhcmVudCA9IGxlYWY7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY2hpbGQxLmNoaWxkMiA9IGNoaWxkMUNoaWxkMjtcclxuICAgICAgICBsZWFmLmNoaWxkMSA9IGNoaWxkMUNoaWxkMTtcclxuICAgICAgICBjaGlsZDFDaGlsZDEucGFyZW50ID0gbGVhZjtcclxuICAgICAgfVxyXG4gICAgICBsZWFmLmFhYmIgPSBnZXRCb3VuZEFhYmIobGVhZi5jaGlsZDEuYWFiYiwgbGVhZi5jaGlsZDIuYWFiYik7XHJcbiAgICAgIGNoaWxkMS5hYWJiID0gZ2V0Qm91bmRBYWJiKGNoaWxkMS5jaGlsZDEuYWFiYiwgY2hpbGQxLmNoaWxkMi5hYWJiKTtcclxuXHJcbiAgICAgIHJldHVybiBjaGlsZDE7XHJcbiAgICB9XHJcbiAgICBsZWFmLmFhYmIgPSBnZXRCb3VuZEFhYmIobGVhZi5jaGlsZDEuYWFiYiwgbGVhZi5jaGlsZDIuYWFiYik7XHJcbiAgICByZXR1cm4gbGVhZjtcclxuICB9XHJcbiAgdG9BcnJheShpKSB7XHJcbiAgICBjb25zdCBpdGVyID0gKGxlYWYsIGxldmVsKSA9PiB7XHJcbiAgICAgIGlmICghbGVhZikge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChsZWFmLmlzTGVhZikgcmV0dXJuIGxlYWYub2JqZWN0TGluay5uYW1lO1xyXG4gICAgICBlbHNlIHJldHVybiBbaXRlcihsZWFmLmNoaWxkMSksIGl0ZXIobGVhZi5jaGlsZDIpXTtcclxuICAgIH07XHJcbiAgICBpZiAoIWkpIGkgPSB0aGlzLnJvb3Q7XHJcbiAgICByZXR1cm4gaXRlcihpKTtcclxuICB9XHJcbiAgZ2V0SGVpZ2h0KGxlYWYpIHtcclxuICAgIGNvbnN0IGl0ZXIgPSAobGVhZiwgbGV2ZWwpID0+IHtcclxuICAgICAgaWYgKCFsZWFmKSB7XHJcbiAgICAgICAgcmV0dXJuIGxldmVsO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBsZXQgaDEgPSBpdGVyKGxlYWYuY2hpbGQxLCBsZXZlbCArIDEpO1xyXG4gICAgICBsZXQgaDIgPSBpdGVyKGxlYWYuY2hpbGQyLCBsZXZlbCArIDEpO1xyXG4gICAgICByZXR1cm4gaDEgPiBoMiA/IGgxIDogaDI7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGl0ZXIobGVhZiwgMSk7XHJcbiAgfVxyXG4gIGdldE5vZGVzKCkge1xyXG4gICAgY29uc3QgaXRlciA9IChub2RlLCBhcnIpID0+IHtcclxuICAgICAgYXJyLnB1c2gobm9kZSk7XHJcbiAgICAgIGlmIChub2RlLmNoaWxkMSkgaXRlcihub2RlLmNoaWxkMSwgYXJyKTtcclxuICAgICAgaWYgKG5vZGUuY2hpbGQyKSBpdGVyKG5vZGUuY2hpbGQyLCBhcnIpO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGEgPSBbXTtcclxuICAgIGl0ZXIodGhpcy5yb290LCBhKTtcclxuICAgIHJldHVybiBhO1xyXG4gIH1cclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgbTQsIHZlY3RvciB9IGZyb20gXCJtYXRoXCI7XHJcblxyXG5jb25zdCBjUG9zID0gWzAsIDAsIDVdO1xyXG5jb25zdCBjUm90ID0gWzAsIDAsIDBdO1xyXG5jb25zdCBjb250cm9scyA9IHtcclxuICBBcnJvd0Rvd246ICgpID0+IChjUm90WzBdIC09IDAuMSksXHJcbiAgQXJyb3dVcDogKCkgPT4gKGNSb3RbMF0gKz0gMC4xKSxcclxuICBBcnJvd0xlZnQ6ICgpID0+IChjUm90WzFdICs9IDAuMSksXHJcbiAgQXJyb3dSaWdodDogKCkgPT4gKGNSb3RbMV0gLT0gMC4xKSxcclxuICB3OiAoKSA9PiB7XHJcbiAgICBjb25zdCBkZWx0YSA9IG00LnRyYW5zZm9ybVBvaW50KFxyXG4gICAgICBtNC54Um90YXRlKG00LnlSb3RhdGlvbihjUm90WzFdKSwgY1JvdFswXSksXHJcbiAgICAgIFswLCAwLCAtMV1cclxuICAgICk7XHJcbiAgICBjUG9zWzBdICs9IGRlbHRhWzBdO1xyXG4gICAgY1Bvc1sxXSArPSBkZWx0YVsxXTtcclxuICAgIGNQb3NbMl0gKz0gZGVsdGFbMl07XHJcbiAgfSxcclxuICBzOiAoKSA9PiB7XHJcbiAgICBjb25zdCBkZWx0YSA9IG00LnRyYW5zZm9ybVBvaW50KFxyXG4gICAgICBtNC54Um90YXRlKG00LnlSb3RhdGlvbihjUm90WzFdKSwgY1JvdFswXSksXHJcbiAgICAgIFswLCAwLCAxXVxyXG4gICAgKTtcclxuICAgIGNQb3NbMF0gKz0gZGVsdGFbMF07XHJcbiAgICBjUG9zWzFdICs9IGRlbHRhWzFdO1xyXG4gICAgY1Bvc1syXSArPSBkZWx0YVsyXTtcclxuICB9LFxyXG4gIGE6ICgpID0+IHtcclxuICAgIGNvbnN0IGRlbHRhID0gbTQudHJhbnNmb3JtUG9pbnQoXHJcbiAgICAgIG00LnhSb3RhdGUobTQueVJvdGF0aW9uKGNSb3RbMV0pLCBjUm90WzBdKSxcclxuICAgICAgWy0xLCAwLCAwXVxyXG4gICAgKTtcclxuICAgIGNQb3NbMF0gKz0gZGVsdGFbMF07XHJcbiAgICBjUG9zWzFdICs9IGRlbHRhWzFdO1xyXG4gICAgY1Bvc1syXSArPSBkZWx0YVsyXTtcclxuICB9LFxyXG4gIGQ6ICgpID0+IHtcclxuICAgIGNvbnN0IGRlbHRhID0gbTQudHJhbnNmb3JtUG9pbnQoXHJcbiAgICAgIG00LnhSb3RhdGUobTQueVJvdGF0aW9uKGNSb3RbMV0pLCBjUm90WzBdKSxcclxuICAgICAgWzEsIDAsIDBdXHJcbiAgICApO1xyXG4gICAgY1Bvc1swXSArPSBkZWx0YVswXTtcclxuICAgIGNQb3NbMV0gKz0gZGVsdGFbMV07XHJcbiAgICBjUG9zWzJdICs9IGRlbHRhWzJdO1xyXG4gIH0sXHJcbn07XHJcbmNvbnN0IG1vdXNlQ29udHJvbHMgPSB7XHJcbiAgbGFzdFg6IDAsXHJcbiAgbGFzdFk6IDAsXHJcbiAgbW91c2Vtb3ZlOiBmdW5jdGlvbiAoZSkge1xyXG4gICAgY29uc3QgZGVsdGFYID0gZS5vZmZzZXRYIC0gdGhpcy5sYXN0WDtcclxuICAgIHRoaXMubGFzdFggPSBlLm9mZnNldFg7XHJcbiAgICBjb25zdCBkZWx0YVkgPSBlLm9mZnNldFkgLSB0aGlzLmxhc3RZO1xyXG4gICAgdGhpcy5sYXN0WSA9IGUub2Zmc2V0WTtcclxuXHJcbiAgICBjUm90WzFdIC09IGRlbHRhWCAqIDAuMDA1O1xyXG4gICAgY1JvdFswXSAtPSBkZWx0YVkgKiAwLjAwNTtcclxuICB9LFxyXG59O1xyXG5kb2N1bWVudC5vbmtleWRvd24gPSAoZSkgPT4ge1xyXG4gIGlmICghY29udHJvbHNbZS5rZXldKSByZXR1cm47XHJcbiAgY29udHJvbHNbZS5rZXldKCk7XHJcbn07XHJcbmRvY3VtZW50Lm9ubW91c2Vkb3duID0gKGUpID0+IHtcclxuICBtb3VzZUNvbnRyb2xzLmxhc3RZID0gZS5vZmZzZXRZO1xyXG4gIG1vdXNlQ29udHJvbHMubGFzdFggPSBlLm9mZnNldFg7XHJcbiAgZG9jdW1lbnQub25tb3VzZW1vdmUgPSBtb3VzZUNvbnRyb2xzLm1vdXNlbW92ZS5iaW5kKG1vdXNlQ29udHJvbHMpO1xyXG4gIGRvY3VtZW50Lm9ubW91c2V1cCA9ICgpID0+IHtcclxuICAgIGRvY3VtZW50Lm9ubW91c2Vtb3ZlID0gbnVsbDtcclxuICB9O1xyXG59O1xyXG5sZXQgY2FtZXJhTWF0cml4ID0gbTQudHJhbnNsYXRpb24oLi4uY1Bvcyk7XHJcbmNhbWVyYU1hdHJpeCA9IG00LnlSb3RhdGUoY2FtZXJhTWF0cml4LCBjUm90WzFdKTtcclxuY2FtZXJhTWF0cml4ID0gbTQueFJvdGF0ZShjYW1lcmFNYXRyaXgsIGNSb3RbMF0pO1xyXG5cclxuaW1wb3J0IHtcclxuICBBcnJheURhdGFGcm9tR2x0ZixcclxuICBQcmltaXRpdmVSZW5kZXJJbmZvRnJvbUFycmF5RGF0YSxcclxuICBFbnRpdHlEYXRhRnJvbUdsdGYsXHJcbiAgZ2V0R2xDb250ZXh0LFxyXG4gIHJlc2l6ZUNhbnZhc1RvRGlzcGxheVNpemUsXHJcbiAgUHJvZ3JhbUluZm8sXHJcbiAgTWVzaFJlbmRlcmVyLFxyXG4gIERyYXdlcixcclxuICBjcmVhdGVCb3gsXHJcbiAgUHJpbWl0aXZlUmVuZGVyZXIsXHJcbiAgVGV4dHVyZSxcclxuICBtYWtlSW1nRnJvbVN2Z1htbCxcclxuICBtYWtlU3RyaXBlSW1nLFxyXG4gIEVudGl0eSxcclxuICBHTFRGLFxyXG4gIEdMY29udGV4dFdyYXBwZXIsXHJcbiAgY3JlYXRlQ29uZSxcclxuICBjcmVhdGVDaXJjbGUsXHJcbiAgZGVmYXVsdFByb2dyYW0sXHJcbn0gZnJvbSBcImdyYXBoaWNzXCI7XHJcblxyXG5jb25zdCBjb250ZXh0ID0gbmV3IEdMY29udGV4dFdyYXBwZXIoXCJjYW52YXNcIik7XHJcbmNvbnN0IGdsID0gY29udGV4dC5nZXRDb250ZXh0KCk7XHJcbmNvbnRleHQucmVzaXplQ2FudmFzVG9EaXNwbGF5U2l6ZSgpO1xyXG5jb25zdCBkcmF3ZXIgPSBuZXcgRHJhd2VyKCk7XHJcbmRyYXdlci5zZXRDb250ZXh0KGNvbnRleHQpLnVwZGF0ZTNEUHJvamVjdGlvbk1hdHJpeCgpO1xyXG5cclxuZGVmYXVsdFByb2dyYW0uc2V0Q29udGV4dChjb250ZXh0KS5jb21waWxlU2hhZGVycygpLmNyZWF0ZVVuaWZvcm1TZXR0ZXJzKCk7XHJcblxyXG5jb25zdCBib3ggPSBuZXcgUHJpbWl0aXZlUmVuZGVyZXIoY3JlYXRlQm94KDEsIDEsIDEpKTtcclxuXHJcbmNvbnN0IGNpcmNsZSA9IG5ldyBQcmltaXRpdmVSZW5kZXJlcihjcmVhdGVDaXJjbGUoOCwgNCkpO1xyXG5cclxuY29uc3QgcG9pbnRzID0gbmV3IFByaW1pdGl2ZVJlbmRlcmVyKHtcclxuICBtb2RlOiBnbC5QT0lOVFMsXHJcbiAgbnVtRWxlbWVudHM6IDIsXHJcbiAgb2Zmc2V0OiAwLFxyXG59KTtcclxuY29uc3QgbGluZSA9IG5ldyBQcmltaXRpdmVSZW5kZXJlcih7XHJcbiAgbW9kZTogZ2wuTElORVMsXHJcbiAgbnVtRWxlbWVudHM6IDIsXHJcbiAgb2Zmc2V0OiAwLFxyXG59KTtcclxuXHJcbmJveFxyXG4gIC5zZXRDb250ZXh0KGNvbnRleHQpXHJcbiAgLmNyZWF0ZVZBTygpXHJcbiAgLnNldERyYXdlcihkcmF3ZXIpXHJcbiAgLnNldFByb2dyYW1JbmZvKGRlZmF1bHRQcm9ncmFtKVxyXG4gIC5jcmVhdGVHZW9tZXRyeUJ1ZmZlcnMoKVxyXG4gIC5zZXRBdHRyaWJ1dGVzKClcclxuICAuc2V0TW9kZSgyKTtcclxuXHJcbmNpcmNsZVxyXG4gIC5zZXRDb250ZXh0KGNvbnRleHQpXHJcbiAgLmNyZWF0ZVZBTygpXHJcbiAgLnNldERyYXdlcihkcmF3ZXIpXHJcbiAgLnNldFByb2dyYW1JbmZvKGRlZmF1bHRQcm9ncmFtKVxyXG4gIC5jcmVhdGVHZW9tZXRyeUJ1ZmZlcnMoKVxyXG4gIC5zZXRBdHRyaWJ1dGVzKClcclxuICAuc2V0TW9kZSgzKTtcclxuXHJcbmxpbmVcclxuICAuc2V0Q29udGV4dChjb250ZXh0KVxyXG4gIC5jcmVhdGVWQU8oKVxyXG4gIC5zZXREcmF3ZXIoZHJhd2VyKVxyXG4gIC5zZXRQcm9ncmFtSW5mbyhkZWZhdWx0UHJvZ3JhbSlcclxuICAuY3JlYXRlQnVmZmVyQXR0cmliRGF0YShcImFfcG9zaXRpb25cIiwgXCJ2ZWMzXCIsIHsgbG9jYXRpb246IDAgfSlcclxuICAuc2V0T3duQXR0cmlidXRlKFwiYV9wb3NpdGlvblwiKVxyXG4gIC5idWZmZXJEYXRhKFwiYV9wb3NpdGlvblwiLCBuZXcgRmxvYXQzMkFycmF5KFswLCAwLCAwLCAwLCAxLCAwXSkpO1xyXG5cclxucG9pbnRzXHJcbiAgLnNldENvbnRleHQoY29udGV4dClcclxuICAuY3JlYXRlVkFPKClcclxuICAuc2V0RHJhd2VyKGRyYXdlcilcclxuICAuc2V0UHJvZ3JhbUluZm8oZGVmYXVsdFByb2dyYW0pXHJcbiAgLmNyZWF0ZUJ1ZmZlckF0dHJpYkRhdGEoXCJhX3Bvc2l0aW9uXCIsIFwidmVjM1wiLCB7IGxvY2F0aW9uOiAwIH0pXHJcbiAgLnNldE93bkF0dHJpYnV0ZShcImFfcG9zaXRpb25cIilcclxuICAuYnVmZmVyRGF0YShcImFfcG9zaXRpb25cIiwgbmV3IEZsb2F0MzJBcnJheShbMCwgMCwgMF0pKTtcclxuXHJcbi8qXHJcbmNvbnN0IHVuaWZvcm1zID0ge1xyXG4gIHVfbGlnaHRXb3JsZFBvc2l0aW9uOiBbMCwgMCwgMTBdLFxyXG4gIHVfYW1iaWVudExpZ2h0OiBbMSwgMSwgMC4zLCAwLjExXSxcclxuICB1X3JldmVyc2VMaWdodERpcmVjdGlvbjogWzEsIDAsIDBdLFxyXG4gIHVfc2hpbmluZXNzOiAzMDAsXHJcbn07XHJcbiovXHJcblxyXG5pbXBvcnQgU2ltdWxhdGlvbiBmcm9tIFwiLi9zcmMvc2ltdWxhdGlvblwiO1xyXG5pbXBvcnQgeyBQaHlzaWNzIH0gZnJvbSBcIi4vc3JjL3BoeXNpY3NcIjtcclxuaW1wb3J0IHsgQm94IH0gZnJvbSBcIi4vc3JjL2NvbGxpZGVyXCI7XHJcbmltcG9ydCB7IGNsaXBQb2ludHNCZWhpbmRQbGFuZSwgZ2V0MkRjb29yZHNPblBsYW5lLCBwb2ludE9uUGxhbmVQcm9qZWN0aW9uIH0gZnJvbSBcIi4vc3JjL2dqa1wiO1xyXG5cclxuY29uc3Qgc2ltID0gbmV3IFNpbXVsYXRpb24oKTtcclxuXHJcbmNvbnN0IGZsb29yID0geyBwaHlzaWNzOiBuZXcgUGh5c2ljcyhuZXcgQm94KDEwMCwgNiwgMTAwKSksIHNwcml0ZTogYm94IH07XHJcbmNvbnN0IGN1YmUgPSB7IHBoeXNpY3M6IG5ldyBQaHlzaWNzKG5ldyBCb3goNSwgNSwgNSkpLCBzcHJpdGU6IGJveCB9O1xyXG5jb25zdCBjdWJlMiA9IHsgcGh5c2ljczogbmV3IFBoeXNpY3MobmV3IEJveCg1LCA1LCA1KSksIHNwcml0ZTogYm94IH07XHJcbmN1YmUucGh5c2ljcy50cmFuc2xhdGUoWzAsIDEsIDBdKTtcclxuY3ViZTIucGh5c2ljcy50cmFuc2xhdGUoWzAsIDEwLCAwXSk7XHJcbmN1YmUucGh5c2ljcy5yb3RhdGUoW01hdGguUEkvNCxNYXRoLlBJLzQsTWF0aC5QSS80XSlcclxuY3ViZS5waHlzaWNzLmFkZEFjY2VsZXJhdGlvbihbMCwgLTkuOCwgMF0pO1xyXG5cclxuY3ViZTIucGh5c2ljcy5hZGRBY2NlbGVyYXRpb24oWzAsIC05LjgsIDBdKTtcclxuXHJcbnNpbS5hZGRPYmplY3QoZmxvb3IucGh5c2ljcyk7XHJcbnNpbS5hZGRPYmplY3QoY3ViZS5waHlzaWNzKTtcclxuLy9zaW0uYWRkT2JqZWN0KGN1YmUyLnBoeXNpY3MpO1xyXG5cclxuZmxvb3IucGh5c2ljcy5zZXRNYXNzKDEwMDAwMDAwMDApO1xyXG5cclxuY29uc3Qgb2JqZWN0cyA9IFtmbG9vciwgY3ViZV07XHJcbmNvbnNvbGUubG9nKE1hdGguYWNvcygtMSkpXHJcbmZsb29yLnBoeXNpY3MudHJhbnNsYXRlKFswLCAtMywgMF0pO1xyXG4vL2Zsb29yLnBoeXNpY3Mucm90YXRlKFswLjAsMCwwXSlcclxuXHJcblxyXG5cclxuY29uc3QgcCA9IFtbNSw1LC01XSwgWy01LC01LDNdXVxyXG5jb25zdCBwbGFuZSA9IFtbMCwwLDBdLCBbMCwwLDFdXSBcclxuXHJcblxyXG5cclxuXHJcblxyXG5jb25zdCBwcm9qZWN0aW9ucyA9IHAubWFwKHBvaW50ID0+IHBvaW50T25QbGFuZVByb2plY3Rpb24ocGxhbmUsIHBvaW50KSlcclxuXHJcbmNvbnN0IF9pID0gdmVjdG9yLm5vcm1hbGl6ZSh2ZWN0b3IuZGlmZihwcm9qZWN0aW9uc1swXSwgcGxhbmVbMF0pKVxyXG5jb25zdCBfaiA9IHZlY3Rvci5ub3JtYWxpemUodmVjdG9yLmNyb3NzKHBsYW5lWzFdLCBfaSkpXHJcblxyXG5jb25zb2xlLmxvZyhfaSwgX2osIHZlY3Rvci5kb3QoX2ksIF9qKSlcclxuY29uc3QgXzJkID0gcHJvamVjdGlvbnMubWFwKHAgPT4gZ2V0MkRjb29yZHNPblBsYW5lKF9pLCBfaiwgcCkpXHJcbmNvbnNvbGUubG9nKF8yZClcclxubGV0IGxhc3RDYWxsID0gRGF0ZS5ub3coKTtcclxuY29uc3QgZnBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmcHNcIik7XHJcbmxldCBpID0gMDtcclxuY29uc3QgbG9vcCA9ICgpID0+IHtcclxuICBzaW0udGljaygwLjAxNSk7XHJcblxyXG4gIGNvbnN0IGN1cmVudFRpbWUgPSBEYXRlLm5vdygpO1xyXG4gIGNvbnN0IGRlbHRhID0gY3VyZW50VGltZSAtIGxhc3RDYWxsO1xyXG4gIGZwcy50ZXh0Q29udGVudCA9ICgxIC8gZGVsdGEpICogMTAwMDtcclxuICBsYXN0Q2FsbCA9IGN1cmVudFRpbWU7XHJcbiAgZ2wuY2xlYXIoZ2wuQ09MT1JfQlVGRkVSX0JJVCB8IGdsLkRFUFRIX0JVRkZFUl9CSVQpO1xyXG4gIGdsLmVuYWJsZShnbC5DVUxMX0ZBQ0UpO1xyXG4gIGdsLmVuYWJsZShnbC5ERVBUSF9URVNUKTtcclxuXHJcbiAgY2FtZXJhTWF0cml4ID0gbTQudHJhbnNsYXRpb24oLi4uY1Bvcyk7XHJcbiAgY2FtZXJhTWF0cml4ID0gbTQueVJvdGF0ZShjYW1lcmFNYXRyaXgsIGNSb3RbMV0pO1xyXG4gIGNhbWVyYU1hdHJpeCA9IG00LnhSb3RhdGUoY2FtZXJhTWF0cml4LCBjUm90WzBdKTtcclxuICBpICs9IDAuMDAxO1xyXG4gIFxyXG4gIFxyXG4gIGNvbnN0IG1hbmlmb2xkcyA9IHNpbS5jb2xsaXNpb25NYW5pZm9sZHMudmFsdWVzKCk7XHJcbiAgZm9yIChjb25zdCBtYW5pZm9sZCBvZiBtYW5pZm9sZHMpIHtcclxuICAgIG1hbmlmb2xkLmNvbnRhY3RzLmZvckVhY2goKGNvbnRhY3QpID0+IHtcclxuICAgICAgY29uc3Qge2NvbnRhY3RGYWNlMSwgY29udGFjdEZhY2UyLCBwbGFuZX0gPSBjb250YWN0XHJcbiAgICAgIHBvaW50c1xyXG4gICAgICAgIC5kcmF3KHtcclxuICAgICAgICAgIHVfbWF0cml4OiBtNC50cmFuc2xhdGlvbiguLi5jb250YWN0LlBBKSxcclxuICAgICAgICAgIHVfY29sb3I6IFswLCAxLCAwLCAxXSxcclxuICAgICAgICB9LCBjYW1lcmFNYXRyaXgpXHJcbiAgICAgICAgLmRyYXcoe1xyXG4gICAgICAgICAgdV9tYXRyaXg6IG00LnRyYW5zbGF0aW9uKC4uLmNvbnRhY3QuUEIpLFxyXG4gICAgICAgICAgdV9jb2xvcjogWzEsIDEsIDAsIDFdLFxyXG4gICAgICAgIH0sIGNhbWVyYU1hdHJpeClcclxuICAgICAgICAuZHJhdyh7XHJcbiAgICAgICAgICB1X21hdHJpeDogbTQudHJhbnNsYXRpb24oLi4uY29udGFjdC5wbGFuZVswXSksXHJcbiAgICAgICAgICB1X2NvbG9yOiBbMC4xLCAwLjEsIDAuMiwgMV0sXHJcbiAgICAgICAgfSwgY2FtZXJhTWF0cml4KVxyXG4gICAgICAgIC5kcmF3KHtcclxuICAgICAgICAgIHVfbWF0cml4OiBtNC50cmFuc2xhdGlvbiguLi52ZWN0b3Iuc3VtKGNvbnRhY3QucGxhbmVbMF0sIGNvbnRhY3QucGxhbmVbMV0pKSxcclxuICAgICAgICAgIHVfY29sb3I6IFswLjEsIDAuMSwgMC4yLCAxXSxcclxuICAgICAgICB9LCBjYW1lcmFNYXRyaXgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8qKFsuLi5jb250YWN0RmFjZTEsIC4uLmNvbnRhY3RGYWNlMl0pLmZvckVhY2gocCA9PntcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgcG9pbnRzLmRyYXcoe1xyXG4gICAgICAgICAgICB1X21hdHJpeDogbTQudHJhbnNsYXRpb24oLi4ucCksXHJcbiAgICAgICAgICAgIHVfY29sb3I6IFswLjAsIDAuNSwgMC41LCAxXSxcclxuICAgICAgICAgIH0sIGNhbWVyYU1hdHJpeClcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBjb25zdCBfY2xpcGVkID0gWy4uLmNsaXBQb2ludHNCZWhpbmRQbGFuZShwbGFuZSwgY29udGFjdEZhY2UxKSwgLi4uY2xpcFBvaW50c0JlaGluZFBsYW5lKHBsYW5lLCBjb250YWN0RmFjZTIpXVxyXG4gICAgICAgIF9jbGlwZWQuZm9yRWFjaChwID0+e1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBwb2ludHMuZHJhdyh7XHJcbiAgICAgICAgICAgIHVfbWF0cml4OiBtNC50cmFuc2xhdGlvbiguLi5wKSxcclxuICAgICAgICAgICAgdV9jb2xvcjogWzAuNSwgMC41LCAwLjUsIDFdLFxyXG4gICAgICAgICAgfSwgY2FtZXJhTWF0cml4KVxyXG4gICAgICAgIH0pKi9cclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICB9KTtcclxuICB9XHJcbiAgXHJcbiAgb2JqZWN0cy5mb3JFYWNoKChvYmopID0+IHtcclxuICAgIGNvbnN0IHNjYWxlID0gdmVjdG9yLmRpZmYoXHJcbiAgICAgIG9iai5waHlzaWNzLmNvbGxpZGVyLm1heCxcclxuICAgICAgb2JqLnBoeXNpY3MuY29sbGlkZXIubWluXHJcbiAgICApO1xyXG4gICAgY29uc3QgdV9tYXRyaXggPSBtNC5zY2FsZShvYmoucGh5c2ljcy5jb2xsaWRlci5nZXRNNCgpLCAuLi5zY2FsZSk7XHJcbiAgICBvYmouc3ByaXRlLmRyYXcoeyB1X2NvbG9yOiBbMSwgMCwgMSwgMV0sIHVfbWF0cml4IH0sIGNhbWVyYU1hdHJpeCk7XHJcbiAgfSk7XHJcbiAgXHJcbiAgcC5mb3JFYWNoKHAgPT4gcG9pbnRzLmRyYXcoe3VfbWF0cml4IDogbTQudHJhbnNsYXRpb24oLi4ucCksIHVfY29sb3IgOiBbMSwwLDAsMV19LCBjYW1lcmFNYXRyaXgpKVxyXG4gIHByb2plY3Rpb25zLmZvckVhY2gocCA9PiBwb2ludHMuZHJhdyh7dV9tYXRyaXggOiBtNC50cmFuc2xhdGlvbiguLi5wKSwgdV9jb2xvciA6IFsxLDEsMCwxXX0sIGNhbWVyYU1hdHJpeCkpXHJcbiAgXzJkLmZvckVhY2goX3AgPT4gcG9pbnRzLmRyYXcoe3VfbWF0cml4IDogbTQudHJhbnNsYXRpb24oX3BbMF0sMCxfcFsxXSksIHVfY29sb3IgOiBbMCwxLDAsMV19LCBjYW1lcmFNYXRyaXgpKTtcclxuICAoW19pLCBfal0pLmZvckVhY2goX3AgPT4gcG9pbnRzLmRyYXcoe3VfbWF0cml4IDogbTQudHJhbnNsYXRpb24oLi4uX3ApLCB1X2NvbG9yIDogWzAsMCwwLDFdfSwgY2FtZXJhTWF0cml4KSlcclxuICBjaXJjbGUuZHJhdyhcclxuICAgIHtcclxuICAgICAgdV9tYXRyaXg6IG00LnJvdGF0aW9uKE1hdGguUEkvMiwwLDApLFxyXG4gICAgICB1X2NvbG9yOiBbMSwgMC41LCAwLjEsIDFdLFxyXG4gICAgICB1X3dvcmxkVmlld1Bvc2l0aW9uOiBjYW1lcmFNYXRyaXgsXHJcbiAgICB9LFxyXG4gICAgY2FtZXJhTWF0cml4XHJcbiAgKVxyXG4gIC5kcmF3KFxyXG4gICAge1xyXG4gICAgICB1X21hdHJpeDogbTQuaWRlbnRpdHkoKSxcclxuICAgICAgdV9jb2xvcjogWzEsIDAuNSwgMC4xLCAxXSxcclxuICAgICAgdV93b3JsZFZpZXdQb3NpdGlvbjogY2FtZXJhTWF0cml4LFxyXG4gICAgfSxcclxuICAgIGNhbWVyYU1hdHJpeFxyXG4gICk7XHJcbiAgcG9pbnRzLmRyYXcoXHJcbiAgICB7XHJcbiAgICAgIHVfbWF0cml4OiBtNC5pZGVudGl0eSgpLFxyXG4gICAgICB1X2NvbG9yOiBbMCwgMC41LCAwLjEsIDFdLFxyXG4gICAgICB1X3dvcmxkVmlld1Bvc2l0aW9uOiBjYW1lcmFNYXRyaXgsXHJcbiAgICB9LFxyXG4gICAgY2FtZXJhTWF0cml4XHJcbiAgKTtcclxuICAvKmxpbmUuZHJhdyhcclxuICAgIHtcclxuICAgICAgdV9tYXRyaXg6IG00LnJvdGF0aW9uKC4uLnZlY3Rvci5kaWZmKFswLC0xLDBdLCBbMSwwLDBdKSksXHJcbiAgICAgIHVfY29sb3I6IFsxLCAwLCAxLCAxXSxcclxuICAgICAgdV93b3JsZFZpZXdQb3NpdGlvbjogY2FtZXJhTWF0cml4LFxyXG4gICAgfSxcclxuICAgIGNhbWVyYU1hdHJpeFxyXG4gICk7Ki9cclxuXHJcbiAgZ2wudmlld3BvcnQoMCwgMCwgZ2wuY2FudmFzLndpZHRoLCBnbC5jYW52YXMuaGVpZ2h0KTtcclxuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUobG9vcClcclxufTtcclxubG9vcCgpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=