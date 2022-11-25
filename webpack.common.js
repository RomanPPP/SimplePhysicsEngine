const path = require('path')
module.exports = {
  entry:{
    main : {
      import : './index.js',
      filename : './main.js'
    },
    car : {
      import : './car.js',
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