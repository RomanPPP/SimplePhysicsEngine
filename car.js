import { m4, vector } from "math";

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
  defaultShaders,
  pointLightShaders,
  createSphere,
  createTruncatedCone,
} from "graphics";

import MouseInput from "./src/misc/mouseInput";
import KeyInput from "./src/misc/keyInput";
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
import prog from "./shader";
prog.setContext(context).compileShaders().createUniformSetters();
const box = new PrimitiveRenderer(createBox(1, 1, 1));
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
  u_lightWorldPosition: [1000, 11, 1000],
  u_ambientLight: [1, 1, 0.3, 0.11],
  u_reverseLightDirection: [1, 0, 0],
  u_shininess: 300,
};

import Simulation from "./src/physics/simulation";
import { Player, RigidBody } from "./src/physics/RigidBody";
import { Box, Cylinder, Sphere } from "./src/physics/collider";
import { Controllable, Noclip } from "./src/misc/controllable";

import {
  Joint,
  JointPositionConstraint,
  RotationalConstraint,
} from "./src/physics/constraints";

const g = 9.8;
const sim = new Simulation();

const floor = { physics: new RigidBody(new Box(1000, 6, 1000)), sprite: box };

const wheel = {
  physics: new RigidBody(new Cylinder(2, 2, 2)),
  sprite: cylinder,
};
const cube = {
  physics: new RigidBody(new Box(1, 1, 2)),
  sprite: box,
};
const cube4 = {
  physics: new RigidBody(new Box(1, 1, 2)),
  sprite: box,
};
floor.physics.translate([0, -5, 0]);

floor.physics.setMass(100000000);
//floor.physics.DOF = [0,0,0,0,0,0]
floor.physics.static = true;

sim.addObject(wheel.physics);

sim.addObject(cube.physics);

sim.addObject(floor.physics);

const wheel1 = {
  physics: new RigidBody(new Cylinder(1, 1, 0.5)),
  sprite: cylinder,
};
const wheel2 = {
  physics: new RigidBody(new Cylinder(1, 1, 0.5)),
  sprite: cylinder,
};

const wheel3 = {
  physics: new RigidBody(new Cylinder(1, 1, 0.5)),
  sprite: cylinder,
};
const wheel4 = {
  physics: new RigidBody(new Cylinder(1, 1, 0.5)),
  sprite: cylinder,
};
wheel1.physics.addAcceleration([0, -2*g, 0]);
wheel2.physics.addAcceleration([0, -2*g, 0]);
wheel3.physics.addAcceleration([0, -2*g, 0]);
wheel4.physics.addAcceleration([0, -2*g, 0]);
sim.addObject(cube4.physics);
sim.addObject(wheel1.physics);
sim.addObject(wheel2.physics);
sim.addObject(wheel3.physics);
sim.addObject(wheel4.physics);

const jointConstr = [
  new Joint(cube4.physics, wheel1.physics, [2, -0.5, 2], [0, -0.5, 0], 0.2),
  new Joint(cube4.physics, wheel1.physics, [1, -0.5, 2], [0, 0.5, 0], 0.2),
  new Joint(cube4.physics, wheel2.physics, [-2, -0.5, 2], [0, 0.5, 0], 0.2),
  new Joint(cube4.physics, wheel2.physics, [-1, -0.5, 2], [0, -0.5, 0], 0.2),

  new Joint(cube4.physics, wheel3.physics, [2, -0.5, -2], [0, -0.5, 0], 0.2),
  new Joint(cube4.physics, wheel3.physics, [1, -0.5, -2], [0, 0.5, 0], 0.2),
  new Joint(cube4.physics, wheel4.physics, [-2, -0.5, -2], [0, 0.5, 0], 0.2),
  new Joint(cube4.physics, wheel4.physics, [-1, -0.5, -2], [0, -0.5, 0], 0.2),
]

sim.addConstraints(jointConstr, 'ww');
const posConstr = [
  new JointPositionConstraint(cube4.physics, wheel1.physics, [2, -0.5, 2], [0, -0.5, 0], 0.2),
  new JointPositionConstraint(cube4.physics, wheel1.physics, [1, -0.5, 2], [0, 0.5, 0], 0.2),
  new JointPositionConstraint(cube4.physics, wheel2.physics, [-2, -0.5, 2], [0, 0.5, 0], 0.2),
  new JointPositionConstraint(cube4.physics, wheel2.physics, [-1, -0.5, 2], [0, -0.5, 0], 0.2),

  new JointPositionConstraint(cube4.physics, wheel3.physics, [2, -0.5, -2], [0, -0.5, 0], 0.2),
  new JointPositionConstraint(cube4.physics, wheel3.physics, [1, -0.5, -2], [0, 0.5, 0], 0.2),
  new JointPositionConstraint(cube4.physics, wheel4.physics, [-2, -0.5, -2], [0, 0.5, 0], 0.2),
  new JointPositionConstraint(cube4.physics, wheel4.physics, [-1, -0.5, -2], [0, -0.5, 0], 0.2),

]
sim.addPositionConstraints(posConstr, 'ww');


const w1Joint = jointConstr[0]
const w1PJoint = posConstr[0]
const w2Joint = jointConstr[2]
const w2PJoint = posConstr[2]

let wheelRotation = Math.PI/2

const rotateWheels = (angle) =>{
  const x = Math.cos(angle)
  const z = Math.sin(angle)

  w1Joint.raLocal = [1 + x, -0.5, 2+z]
  w1PJoint.raLocal = [1 + x, -0.5, 2+z]
  w2Joint.raLocal = [-1 -x, -0.5, 2-z]
  w2PJoint.raLocal = [-1 -x, -0.5, 2-z]
}
cube4.physics.group = 2
wheel1.physics.group = 2
wheel2.physics.group = 2
wheel3.physics.group = 2
wheel4.physics.group = 2
const objects = [wheel, cube, floor, cube4, wheel1, wheel2, wheel3, wheel4];

cube.physics.group = 2;
wheel.physics.group = 2;
wheel.physics.rotate([Math.PI/2,0,0])
//cube.physics.rotate([1,5,2])

cube.physics.addAcceleration([0, -g, 0])
wheel.physics.addAcceleration([0,-g,0])
cube4.physics.addAcceleration([0,0,1])
const player = new Noclip();

player.listenKeyboard(keyInput);
player.listenMouse(mouseInput);
floor.physics.friction = 20
wheel.physics.friction = 20
let lastCall = Date.now();
const fps = document.querySelector("#fps");
let i = 0
const loop = () => {
  sim.tick(0.01666);
  player.tick();
  rotateWheels(wheelRotation*0.3*Math.sin(i))
  i+=0.01
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
    obj.sprite.draw(
      { ...uniforms, u_matrix, u_viewWorldPosition, u_color: [1, 0.5, 0.1, 1] },
      cameraMatrix
    );
  });

  circle
    .draw(
      {
        u_matrix: m4.rotation(Math.PI / 2, 0, 0),
        u_color: [1, 0.5, 0.1, 1],
        u_worldViewPosition: cameraMatrix,
      },
      cameraMatrix
    )
    .draw(
      {
        u_matrix: m4.identity(),
        u_color: [1, 0.5, 0.1, 1],
        u_worldViewPosition: cameraMatrix,
      },
      cameraMatrix
    );
  points.draw(
    {
      u_matrix: m4.identity(),
      u_color: [0, 0.5, 0.1, 1],
      u_worldViewPosition: cameraMatrix,
    },
    cameraMatrix
  );

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

  gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
  requestAnimationFrame(loop);
};
loop();
