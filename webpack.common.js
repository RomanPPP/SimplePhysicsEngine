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