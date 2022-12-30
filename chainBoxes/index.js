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
  .setProgramInfo(pointLightProgramInfo)
  .createGeometryBuffers()
  .setAttributes()
  .setMode(4);
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
  .setMode(4);
sphere
  .setContext(context)
  .createVAO()
  .setDrawer(drawer)
  .setProgramInfo(defaultProgramInfo)
  .createGeometryBuffers()
  .setAttributes()
  .setMode(4);
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
  u_lightWorldPosition: [2, 50, -30],
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

const floor = { physics: new RigidBody(new Box(1000, 6, 1000)), sprite: box, uniforms : {u_color : [1,0,0,1]}};

const objects = [floor];
floor.physics.translate([0,-3.5,0])
floor.physics.setMass(1000000000000);

//floor.physics.translate([0, 0, 0]);
floor.physics.friction = 10
//floor.physics.static = true;
floor.physics.DOF = [1, 1, 1, 1, 1, 1];
sim.addObject(floor.physics);

const joint = { physics: new RigidBody(new Box(1, 1, 1)), sprite: box, uniforms : {u_color : [1,0,0,1]}};
joint.physics.group = 'chain'
//joint.physics.static = true;
joint.physics.DOF = [1, 1, 1, 1, 1, 1];
joint.physics.setMass(100000)
sim.addObject(joint.physics);
joint.physics.translate([0,20,0])
objects.push(joint)
const constraints = []
const posConstraints = []
for(let i = 0; i <2; i++){
  const segment = { physics: new RigidBody(new Box(2, 2, 9)), sprite: box, uniforms : {u_color : [0,0,0,1]}};
  segment.physics.group = 'chain'
  sim.addObject(segment.physics);
  if(i == 0){
    const {physics} = joint
    segment.physics.translate([0,20,-4.51])
    segment.physics.addAcceleration([0,-g,0])
    segment.physics.setMass(25)
    constraints.push(new Joint(segment.physics, physics, [0,0,4.5], [0,0,0],0.1))
   // posConstraints.push(new JointPositionConstraint(segment.physics, physics, [0,0,-1.3], [0,0,0],0.1))
    sim.addObject(segment.physics)
    objects.push(segment)
    continue
  }
  const {physics} = objects.at(-1)
  segment.physics.translate([0,20,-2.5 -2.55*i])
  segment.physics.addAcceleration([0,-g,0])
  segment.physics.addVelocity([0,-0.5,0])
  segment.physics.setMass(25)
  constraints.push(new Joint(segment.physics, physics, [0,0,4.5], [0,0,-3.5],0.1))
  //posConstraints.push(new JointPositionConstraint(segment.physics, physics, [0,0,-1.3], [0,0,1.3],0.1))
  sim.addObject(segment.physics)
  objects.push(segment)
}
sim.addConstraints(constraints, 'chain')
sim.addPositionConstraints(posConstraints, 'chain')
for (let i = 0; i < 15; i++) {
    const cube = { physics: new RigidBody(new Box(3, 3, 3)), sprite: box, uniforms : {u_color : [0,0,1,1]} };
    cube.physics.translate([-2.5 + (i%5) * 3,  1 + 3.01 * (i%3), 0]);
    cube.physics.setMass(2);
    cube.physics.addAcceleration([0, -g, 0]);
    sim.addObject(cube.physics);
    objects.push(cube);
  
  }

  

const player = new Noclip();


player.listenKeyboard(keyInput);
player.listenMouse(mouseInput);
player.camPos = [-9,15,-15]
player.rotationY = -Math.PI*0.8
player.rotationX = -0.1 * Math.PI/2
RigidBody.setTreshold(0.0001);

let lastCall = Date.now();
const fps = document.querySelector("#fps");
const time = document.querySelector("#time");
const numIter = 1
const startTime = Date.now()
const loop = () => {
  
  for(let i = 0; i < numIter; i++)sim.tick(0.016/numIter);
  player.tick();
  const curentTime = Date.now();
  const delta = curentTime - lastCall;
  const totalTime = curentTime - startTime
  fps.textContent = (1 / delta) * 1000;
  time.textContent = totalTime/1000
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
