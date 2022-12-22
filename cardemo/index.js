import { m4, vec3 } from "math";

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
  .setMode(gl.TRIANGLES);
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

import Simulation from "../src/physics/Simulation";
import { Player, RigidBody } from "../src/physics/RigidBody";
import { Box, Cylinder, Sphere } from "../src/physics/collider";
import { Controllable, Noclip } from "../src/misc/controllable";
import Car from "./car";
import CarController from "./carController";
import {
  Joint,
  JointPositionConstraint,
  RotationalConstraint,
} from "../src/physics/constraints";

const g = 9.8;
const sim = new Simulation();
RigidBody.setTreshold(0.0005)
const floor = { physics: new RigidBody(new Box(1000, 6, 1000)), sprite: box };

floor.physics.translate([0, -5, 0]);

floor.physics.setMass(10000000000);
//floor.physics.DOF = [0,0,0,0,0,0]
floor.physics.static = true;

sim.addObject(floor.physics);

const objects = [floor];

const player = new Noclip();

//player.listenKeyboard(keyInput);
//player.listenMouse(mouseInput);

const desc = {
  cabinXYZ: [1, 1, 3],
  radius: 0.5,
  wide: 0.5,
  axises: [
    {
      rotatable: true,
      //drive: true,
      vector: [1, 0, 0],
      position: [0.5, -0.3, 1],
    },
    {
      rotatable: true,
      //drive: true,
      vector: [-1, 0, 0],
      position: [-0.5, -0.3, 1],
    },

    {
      friction: 2,
      drive: true,
      handBrake: true,
      vector: [1, 0, 0],
      position: [0.5, -0.3, -1],
    },
    {
      friction: 2,
      drive: true,
      handBrake: true,
      vector: [-1, 0, 0],
      position: [-0.5, -0.3, -1],
    },
  ],
};

const car = new Car(desc,[0,2,0],1);
const controller = new CarController(car);
controller.listenKeyboard(keyInput);
controller.listenMouse(mouseInput);

const cabin = { physics: car.cabin, sprite: box };
sim.addObject(cabin.physics);
objects.push(cabin);

car.wheels.forEach(({ wheel }) => {
  const _wheel = { physics: wheel, sprite: cylinder };
  sim.addObject(wheel);
  wheel.addAcceleration([0, -g, 0]);

  objects.push(_wheel);
});
sim.addConstraints(car.getConstraints(), "car1");
sim.addPositionConstraints(car.getPositionConstraints(), "car1");
car.cabin.addAcceleration([0, -g, 0]);


const car2 = new Car(desc, [0,0,-3],2);

sim.addObject(car2.cabin);
objects.push({ physics: car2.cabin, sprite: box });

car2.wheels.forEach(({ wheel }) => {
  const _wheel = { physics: wheel, sprite: cylinder };
  sim.addObject(wheel);
  wheel.addAcceleration([0, -g, 0]);

  objects.push(_wheel);
});
sim.addConstraints(car2.getConstraints(), "car2");
sim.addPositionConstraints(car2.getPositionConstraints(), "car2");
car2.cabin.addAcceleration([0, -g, 0]);
car2.cabin.translate([0, 0, -10]);

let lastCall = Date.now();
const fps = document.querySelector("#fps");
let i = 0;

for (let i = 0; i < 3; i++) {
  const cube = { physics: new RigidBody(new Box(3, 3, 3)), sprite: box };
  cube.physics.translate([10, 2 * i, i * 0.1]);
  cube.physics.setMass(20);
  cube.physics.addAcceleration([0, -g, 0]);
  sim.addObject(cube.physics);
  objects.push(cube);
}

const cube1 = { physics: new RigidBody(new Box(10, 2, 20)), sprite: box };
const cube2 = { physics: new RigidBody(new Box(10, 2, 20)), sprite: box };

cube1.physics.translate([20, 2, -35]);
cube2.physics.translate([20, 2, 10]);

cube2.physics.rotate([0.5, 0, 0]);
cube1.physics.rotate([-0.5, 0, 0]);
cube1.physics.static = true;
cube2.physics.static = true;
cube2.physics.setMass(100000000000);
cube1.physics.setMass(100000000000);
cube1.physics.group = "chain";
cube2.physics.group = "chain";

sim.addObject(cube1.physics);
sim.addObject(cube2.physics);
cube1.physics.friction = 10;
cube2.physics.friction = 10;
objects.push(cube1, cube2);

const chain = [];
const _chain = [];
for (let i = 0; i < 5; i++) {
  const cube = { physics: new RigidBody(new Box(6, 6, 2)), sprite: box };
  cube.physics.translate([20, 5, i * 5 - 25]);
  //cube.physics.setMass(5);
  cube.physics.addAcceleration([0, -g, 0]);
  //cube.physics.friction = 2;
  cube.physics.group = "chain";
  _chain.push(cube.physics);
  if (i > 0) {
    const c = [
      new Joint(
        cube.physics,
        objects.at(-1).physics,
        [3, -3, 0],
        [3, 3, 0],
        0.1
      ),
      new Joint(
        cube.physics,
        objects.at(-1).physics,
        [-3, -3, 0],
        [-3, 3, 0],
        0.1
      ),
    ];
    chain.push(...c);

    // cube.physics.static = true
  }

  sim.addObject(cube.physics);
  objects.push(cube);
}
sim.addConstraints(
  [
    new Joint(cube1.physics, _chain[0], [3, 0, 9], [3, -3, 0], 0.1),
    new Joint(cube1.physics, _chain[0], [-3, 0, 9], [-3, -3, 0], 0.1),
    new Joint(cube2.physics, _chain.at(-1), [3, 0, -9], [3, 3, 0], 0.1),
    new Joint(cube2.physics, _chain.at(-1), [-3, 0, -9], [-3, 3, 0], 0.1),
  ],
  "cjain"
);

sim.addConstraints(chain, "chain");

const dt = 0.01666;
const numIterations = 2;

const loop = () => {
  for (let j = 0; j < numIterations; j++) {
    sim.tick(dt / numIterations);
    //player.tick();
    car.tick(dt / numIterations);
  }
  controller.tick();

  i += 0.01;
  const curentTime = Date.now();
  const delta = curentTime - lastCall;
  fps.textContent = (1 / delta) * 1000;
  lastCall = curentTime;
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
  gl.enable(gl.CULL_FACE);
  gl.enable(gl.DEPTH_TEST);

  const cameraMatrix = controller.getCameraMatrix();
  const { translation } = m4.decompose(cameraMatrix);

  objects.forEach((obj) => {
    const u_matrix = obj.physics.collider.getM4();

    const u_viewWorldPosition = translation;
    obj.sprite.draw(
      { ...uniforms, u_matrix, u_viewWorldPosition, u_color: [1, 0.5, 0.1, 1] },
      cameraMatrix
    );
  });

 
 

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
