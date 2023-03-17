import { m4 } from "romanpppmath";
import {
  createBox,
  GLcontextWrapper,
  pointLightShaders,
  defaultShaders,
  createSphere

} from "romanpppgraphics";

import FreeCam from "./src/misc/FreeCam";
import KeyInput from "./src/misc/keyInput";
import MouseInput from "./src/misc/mouseInput";
const mouseInput = new MouseInput();
mouseInput.listen();
const keyInput = new KeyInput();
keyInput.listen();

const player = new FreeCam();

player.listenKeyboard(keyInput);
player.listenMouse(mouseInput);
player.camPos = [0, 5, 15];

const gl = (document.getElementById("canvas") as HTMLCanvasElement).getContext(
  "webgl2"
) as WebGL2RenderingContext;
const context = new GLcontextWrapper(gl);

const { PrimitiveRenderer, Drawer, ProgramInfo } = context;

context.resizeCanvasToDisplaySize();
const drawer = new Drawer();
drawer.projectionMatrix = Drawer.create3dProjectionMatrix(
  1,
  2000,
  gl.canvas.width,
  gl.canvas.height
);

const pointLightProgramInfo = new ProgramInfo(
  pointLightShaders.vert,
  pointLightShaders.frag
);
pointLightProgramInfo.compileShaders().createUniformSetters();

const defaultProgramInfo = new ProgramInfo(
  defaultShaders.vert,
  defaultShaders.frag
);
defaultProgramInfo.compileShaders().createUniformSetters();
const cube = PrimitiveRenderer.fromArrayData(createBox(1, 1, 1));
const sphere = PrimitiveRenderer.fromArrayData(createSphere(1,10,10))
const point = new PrimitiveRenderer();

cube
  .createVAO()
  .setDrawer(drawer)
  .setProgramInfo(pointLightProgramInfo)
  .setMode(2);
sphere
  .createVAO()
  .setDrawer(drawer)
  .setProgramInfo(pointLightProgramInfo)
  .setMode(2);
point
  .createVAO()
  .setDrawer(drawer)
  .setProgramInfo(defaultProgramInfo)
  .createBufferAttribData({
    attribName: "a_position",
    location: 0,
    attributeType: WebGL2RenderingContext.FLOAT_VEC3,
    numComponents: 3,
  })
  .setAttributes()
  .bufferData(
    "a_position",
    new Float32Array([1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1])
  )
  .setMode(3)
  .setNumElements(5);

const uniforms = {
  u_lightWorldPosition: [30, 50, 30],
  u_ambientLight: [1, 1, 0.3, 0.11],
  u_reverseLightDirection: [1, 0, 0],
  u_shininess: 300,
};



import { RigidBody } from "./src/physics/RigidBody";

import Simulation from "./src/physics/Simulation";

import { Box, Sphere } from "./src/physics/Collider";
import IRigidBody from "./src/physics/models/IRigidBody";
import IPrimitiveRenderer from "romanpppgraphics/lib/models/IPrimitiveRenderer";

const sim = new Simulation();
const body = new RigidBody(new Box(5, 5, 5));

const floor = new RigidBody(new Box(100,5,100))

floor.setMass(99999999999)
floor.static = true

floor.translate([0,-2.5,0])


interface objectToDraw {
  physics : RigidBody
  sprite :  IPrimitiveRenderer
  uniforms : {[key : string] : Iterable<number>}
}

let objectsToDraw : objectToDraw[] = [
  
];


objectsToDraw.push(
  {
    physics : floor,
    sprite: cube,
    uniforms: {
      
      u_color: [1, 1, 0, 1],
    },
  }
);

body.addAcceleration([0,-9,0])
body.translate([0,5,0])
body.addAngularV([1,1,1])

sim.addObject(floor)

for (let i = 0; i < 15; i++) {
  const box = { physics: new RigidBody(new Box(3, 3, 3)), sprite: cube, uniforms : {u_color : [0,0,1,1]} };
  box.physics.translate([-2.5 + (i%5) * 3,  1 + 3.01 * (i%3), -30]);
  box.physics.setMass(2);
  box.physics.addAcceleration([0, -9, 0]);
  sim.addObject(box.physics);
  objectsToDraw.push(box);

}

const box = { physics: new RigidBody(new Sphere(5)), sprite: sphere, uniforms : {u_color : [0,0,1,1]} };
  box.physics.translate([0,5,0]);
  box.physics.setMass(2);
  box.physics.addAcceleration([0, -9, 0]);
  box.physics.addVelocity([0,0,-30])
  box.physics.addAngularV([1,1,1])
  sim.addObject(box.physics);
  objectsToDraw.push(box);


let lastCall = Date.now();
const fps = document.querySelector("#fps") as HTMLElement;
const time = document.querySelector("#time") as HTMLElement;
const numIter = 1;
const startTime = Date.now();
const loop = () => {
  player.tick();
  sim.tick(0.015)
  const curentTime = Date.now();
  const delta = curentTime - lastCall;
  const totalTime = curentTime - startTime;
  fps.textContent = Number((1 / delta) * 1000).toString();
  time.textContent = Number(totalTime / 1000).toString();
  lastCall = curentTime;
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
  gl.enable(gl.CULL_FACE);
  gl.enable(gl.DEPTH_TEST);

  const cameraMatrix = player.camMatrix;
  const { translation } = m4.decompose(cameraMatrix);
  const u_viewWorldPosition = translation;
  objectsToDraw.forEach((obj) => {
    obj.sprite.draw(
      {
        ...uniforms,
        u_matrix : obj.physics.collider.getM4(),
        u_viewWorldPosition,
        ...obj.uniforms,
      },
      cameraMatrix
    );
  });
  point.draw(
    {
      ...uniforms,
      u_matrix: m4.scaling(6, 6, 6),
      u_color: [0, 0, 0, 1],
      u_viewWorldPosition,
    },
    cameraMatrix
  );
  point.draw(
    {
      ...uniforms,
      u_matrix: m4.scale(
        m4.zRotate(m4.yRotation(Math.PI), -Math.PI / 2),
        6,
        6,
        6
      ),
      u_color: [1, 0.1, 1, 1],
      u_viewWorldPosition,
    },
    cameraMatrix
  );

  for (const [id, manifold] of sim.collisionManifolds) {
    manifold.contacts.forEach((contact) => {
      point
        .draw(
          {
            u_matrix: m4.translation(...contact.PA),
            u_color: [0.6, 0.6, 0.0, 1],
            ...uniforms,
            u_viewWorldPosition
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
