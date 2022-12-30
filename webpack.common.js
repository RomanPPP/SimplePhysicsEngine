const path = require('path')
module.exports = {
  entry:{
    main : {
      import : './ragdollDemo/index.js',
      filename : './main.js'
    },
    car : {
      import : './carDemo/index.js',
      filename : './car.js'
    },
    boxes : {
      import : './boxes/index.js',
      filename : './boxes.js'
    },
    boxesRagdoll : {
      import : './boxesRagdoll/index.js',
      filename : './boxesRagdoll.js'
    },
    chainBoxes : {
      import : './chainBoxes/index.js',
      filename : './chainBoxes.js'
    },
    shapes : {
      import : './shapes/index.js',
      filename : './shapes.js'
    }
  },
  
  module : {
    rules: [
      {
        test : /\.glsl/,
        type : 'asset/source'
      }
    ]
  }
};