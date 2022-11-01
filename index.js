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
  defaultProgram,
} from "graphics";

import MouseInput from "./src/game/mouse";
import Keylogger from "./src/game/keylogger";
const mouseInput = new MouseInput()

mouseInput.listen() 
const keyInput = new Keylogger()
keyInput.listen()
const context = new GLcontextWrapper("canvas");
const gl = context.getContext();
context.resizeCanvasToDisplaySize();
const drawer = new Drawer();
drawer.setContext(context).update3DProjectionMatrix();

defaultProgram.setContext(context).compileShaders().createUniformSetters();

const box = new PrimitiveRenderer(createBox(1, 1, 1));

const circle = new PrimitiveRenderer(createCircle(8, 4));

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
  .bufferData("a_position", new Float32Array([0, 0, 0, 0, 1, 0]));

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

import Simulation from "./src/physics/simulation";
import { Player, RigidBody } from "./src/physics/RigidBody";
import { Box } from "./src/physics/collider";
import {Controllable, Noclip} from "./src/game/controllable";

import { Joint } from "./src/physics/contact";
import createRagdoll from "./src/physics/createRagdoll";





const sim = new Simulation();

const floor = { physics: new RigidBody(new Box(1000, 6, 1000)), sprite: box };

const cube2 = { physics: new RigidBody(new Box(2, 2, 2)), sprite: box };
const cube3 = { physics: new RigidBody(new Box(2, 2, 2)), sprite: box };
const cube4 = { physics: new Player(new Box(2, 2, 2)), sprite: box };
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


for(let i = 0; i < 0; i++){
  const cube = { physics: new RigidBody(new Box(10, 5, 15)), sprite: box };
  cube.physics.translate([10, 5 * i +15 , 0])
  cube.physics.setMass(20);
  cube.physics.addAcceleration([0, -9.8, 0])
  sim.addObject(cube.physics);
  objects.push(cube)
}

floor.physics.setMass(100000000);



floor.physics.translate([0, -3, 0]);
//floor.physics.rotate([0.0,0,0])
//floor.static = true

const player = new Controllable(cube4.physics)

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
          u_matrix: m4.translation(...contact.PA),
          u_color: [0.6, 0.6, 0.0, 1],
        }, cameraMatrix)
        .draw({
          u_matrix: m4.translation(...contact.PB),
          u_color: [0.5, 0.1, 0.2, 1],
        }, cameraMatrix);
        

       
        

       

        
        
    });
  }
  
  objects.forEach((obj) => {
    const scale = vector.diff(
      obj.physics.collider.max,
      obj.physics.collider.min
    );
    const u_matrix = obj.physics.collider.getM4()
    obj.sprite.draw({ u_color: [1, 0, 1, 1], u_matrix }, cameraMatrix);
  });
  
  
  circle.draw(
    {
      u_matrix: m4.rotation(Math.PI/2,0,0),
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
  )
 
    
  gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
  requestAnimationFrame(loop)
};
loop();
