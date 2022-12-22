import { m4, vec3, m3 } from "math";

import {
  ProgramInfo,
  Drawer,
  createBox,
  PrimitiveRenderer,
  GLcontextWrapper,
  createCircle,
  defaultShaders,
  pointLightShaders,
  createSphere,
  createTruncatedCone,
} from "graphics";

import MouseInput from "../src/misc/mouseInput";
import KeyInput from "../src/misc/keyInput";
const mouseInput = new MouseInput();

mouseInput.listen();
const keyInput = new KeyInput();
keyInput.listen();
const context = new GLcontextWrapper("canvas");
const gl = context.getContext();
context.resizeCanvasToDisplaySize();
const drawer = new Drawer();
drawer.setContext(context).update3DProjectionMatrix();

const defaultProgramInfo = new ProgramInfo(
  defaultShaders.vert,
  defaultShaders.frag
);
const pointLightProgramInfo = new ProgramInfo(
  pointLightShaders.vert,
  pointLightShaders.frag
);
defaultProgramInfo.setContext(context).compileShaders().createUniformSetters();
pointLightProgramInfo
  .setContext(context)
  .compileShaders()
  .createUniformSetters();
import prog from "../shader";
prog.setContext(context).compileShaders().createUniformSetters();
const box = new PrimitiveRenderer(createBox(1, 1, 1));
const panel = new PrimitiveRenderer(createBox(1,1,1))
const sphere = new PrimitiveRenderer(createSphere(1, 15, 15));
const circle = new PrimitiveRenderer(createCircle(8, 4));
const cylinder = new PrimitiveRenderer(createTruncatedCone(1, 1, 1, 8, 1));
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

import Simulation from "../src/physics/Simulation";
import { Player, RigidBody } from "../src/physics/RigidBody";
import { Box, Cylinder, Sphere } from "../src/physics/collider";
import { Controllable, Noclip } from "../src/misc/controllable";
import Ragdoll from "./Ragdoll";
import { Joint, JointPositionConstraint } from "../src/physics/constraints";

const g = 9.8;
const sim = new Simulation();

const floor = { physics: new RigidBody(new Box(1000, 6, 1000)), sprite: box};

const objects = [floor];
floor.physics.translate([0,-180,0])
floor.physics.setMass(1000000000000);

//floor.physics.translate([0, 0, 0]);
floor.physics.friction = 10
floor.physics.static = true;
floor.physics.DOF = [1, 1, 1, 0, 0, 0];
sim.addObject(floor.physics);



for(let i = 0; i < 50; i++){
  const plane = { physics: new RigidBody(new Box(2, 2, 100)), sprite: panel };
  plane.physics.translate([i*2, 10 - i*2  ,0]);
  plane.physics.setMass(200000000);
  plane.physics.rotate([0,0,-0.29]);
  plane.physics.static = true
  sim.addStaticObject(plane.physics);
  objects.push(plane);
}
for(let i = 0; i < 50; i++){
  const plane = { physics: new RigidBody(new Box(2, 2, 100)), sprite: panel };
  plane.physics.translate([160 - i*2, -80 - i * 2 ,0]);
  plane.physics.setMass(200000000);
  plane.physics.rotate([0,0,0.2]);
  plane.physics.static = true
  sim.addStaticObject(plane.physics);
  objects.push(plane);
}
const plane = { physics: new RigidBody(new Box(6, 2, 100)), sprite: panel }
plane.physics.translate([102 , -90 ,0]);
  plane.physics.setMass(200000000);
  //plane.physics.rotate([0,0,0.2]);
  plane.physics.static = true
  sim.addStaticObject(plane.physics);
  objects.push(plane);
for (let i = 0; i < 15; i++) {
  const cube = { physics: new RigidBody(new Box(3, 3, 3)), sprite: box, uniforms : {u_color : [0,0,1,1]} };
  cube.physics.translate([101, -87.5 + 3.01 * (i%3), -2.5 + (i%5) * 3]);
  cube.physics.setMass(20);
  cube.physics.addAcceleration([0, -g, 0]);
  sim.addObject(cube.physics);
  objects.push(cube);

}

for (let i = 0; i < 5; i++) {
  const { parts, constraints, positionConstraints } = new Ragdoll([10, 5 + 3.01 * i, 0]);

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


const player = new Noclip();
player.camPos = [140, -50, 5]
player.rotationY = Math.PI/2
player.rotationX = -0.1 * Math.PI/2
player.listenKeyboard(keyInput);
player.listenMouse(mouseInput);

RigidBody.setTreshold(0.005);

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
  const { translation } = m4.decompose(cameraMatrix);

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
      u_matrix: m4.identity(),
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
