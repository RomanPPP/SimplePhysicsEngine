import { m4, vector } from "math";

const cPos = [0, 0, 5];
const cRot = [0, 0, 0];
const controls = {
  ArrowDown: () => (cRot[0] -= 0.1),
  ArrowUp: () => (cRot[0] += 0.1),
  ArrowLeft: () => (cRot[1] += 0.1),
  ArrowRight: () => (cRot[1] -= 0.1),
  w: () => {
    const delta = m4.transformPoint(
      m4.xRotate(m4.yRotation(cRot[1]), cRot[0]),
      [0, 0, -1]
    );
    cPos[0] += delta[0];
    cPos[1] += delta[1];
    cPos[2] += delta[2];
  },
  s: () => {
    const delta = m4.transformPoint(
      m4.xRotate(m4.yRotation(cRot[1]), cRot[0]),
      [0, 0, 1]
    );
    cPos[0] += delta[0];
    cPos[1] += delta[1];
    cPos[2] += delta[2];
  },
  a: () => {
    const delta = m4.transformPoint(
      m4.xRotate(m4.yRotation(cRot[1]), cRot[0]),
      [-1, 0, 0]
    );
    cPos[0] += delta[0];
    cPos[1] += delta[1];
    cPos[2] += delta[2];
  },
  d: () => {
    const delta = m4.transformPoint(
      m4.xRotate(m4.yRotation(cRot[1]), cRot[0]),
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
let cameraMatrix = m4.translation(...cPos);
cameraMatrix = m4.yRotate(cameraMatrix, cRot[1]);
cameraMatrix = m4.xRotate(cameraMatrix, cRot[0]);

import {
  ArrayDataFromGltf,
  PrimitiveRenderInfoFromArrayData,
  EntityDataFromGltf,
  getGlContext,
  resizeCanvasToDisplaySize,
  ProgramInfo,
  MeshRenderer,
  Drawer,
  createBox,
  PrimitiveRenderer,
  Texture,
  makeImgFromSvgXml,
  makeStripeImg,
  Entity,
  GLTF,
  GLcontextWrapper,
  createCone,
  createCircle,
  defaultProgram,
} from "graphics";

const context = new GLcontextWrapper("canvas");
const gl = context.getContext();
context.resizeCanvasToDisplaySize();
const drawer = new Drawer();
drawer.setContext(context).update3DProjectionMatrix();

defaultProgram.setContext(context).compileShaders().createUniformSetters();

const box = new PrimitiveRenderer(createBox(1, 1, 1));

const circle = new PrimitiveRenderer(createCircle(5, 10));

const points = new PrimitiveRenderer({
  mode: gl.POINTS,
  numElements: 2,
  offset: 0,
});
const line = new PrimitiveRenderer({
  mode: gl.LINES,
  numElements: 2,
  offset: 0,
});

box
  .setContext(context)
  .createVAO()
  .setDrawer(drawer)
  .setProgramInfo(defaultProgram)
  .createGeometryBuffers()
  .setAttributes()
  .setMode(2);

circle
  .setContext(context)
  .createVAO()
  .setDrawer(drawer)
  .setProgramInfo(defaultProgram)
  .createGeometryBuffers()
  .setAttributes()
  .setMode(3);

line
  .setContext(context)
  .createVAO()
  .setDrawer(drawer)
  .setProgramInfo(defaultProgram)
  .createBufferAttribData("a_position", "vec3", { location: 0 })
  .setOwnAttribute("a_position")
  .bufferData("a_position", new Float32Array([0, 0, 0, 1, 2, 0]));

points
  .setContext(context)
  .createVAO()
  .setDrawer(drawer)
  .setProgramInfo(defaultProgram)
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

import Simulation from "./src/simulation";
import { Physics } from "./src/physics";
import { Box } from "./src/collider";

const sim = new Simulation();

const floor = { physics: new Physics(new Box(100, 2, 100)), sprite: box };
const cube = { physics: new Physics(new Box(5, 5, 5)), sprite: box };
const cube2 = { physics: new Physics(new Box(5, 5, 5)), sprite: box };
cube.physics.translate([0, 5, 0]);
cube2.physics.translate([0, 10, 0]);
//cube.physics.rotate([Math.PI/4,Math.PI/4,Math.PI/4])
cube.physics.addAcceleration([0, -9.8, 0]);

cube2.physics.addAcceleration([0, -9.8, 0]);

sim.addObject(floor.physics);
sim.addObject(cube.physics);
sim.addObject(cube2.physics);

floor.physics.setMass(1000000000);

const objects = [floor, cube, cube2];

floor.physics.translate([0, -2, 0]);
//floor.physics.rotate([0.0,0,0])

//document.addEventListener('click', sim.tick.bind(sim, 0.015))
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

  cameraMatrix = m4.translation(...cPos);
  cameraMatrix = m4.yRotate(cameraMatrix, cRot[1]);
  cameraMatrix = m4.xRotate(cameraMatrix, cRot[0]);
  i += 0.001;

  const manifolds = sim.collisionManifolds.values();
  for (const manifold of manifolds) {
    manifold.contacts.forEach((contact) => {
      points
        .draw({
          u_matrix: m4.translation(...contact.PA),
          u_color: [0, 1, 0, 1],
        }, cameraMatrix)
        .draw({
          u_matrix: m4.translation(...contact.PB),
          u_color: [1, 1, 0, 1],
        }, cameraMatrix);
    });
  }

  objects.forEach((obj) => {
    const scale = vector.diff(
      obj.physics.collider.max,
      obj.physics.collider.min
    );
    const u_matrix = m4.scale(obj.physics.collider.getM4(), ...scale);
    obj.sprite.draw({ u_color: [1, 0, 1, 1], u_matrix }, cameraMatrix);
  });

  circle.draw(
    {
      u_matrix: m4.translation(0, 0, 0),
      u_color: [1, 0.5, 0.1, 1],
      u_worldViewPosition: cameraMatrix,
    },
    cameraMatrix
  );

  line.draw(
    {
      u_matrix: m4.translation(0, 0, 0),
      u_color: [1, 0, 1, 1],
      u_worldViewPosition: cameraMatrix,
    },
    cameraMatrix
  );

  gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
  requestAnimationFrame(loop);
};
loop();
