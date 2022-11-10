export default  {
    dot(a, b){
      return  a[0] * b[0] +
      a[1] * b[1] + 
      a[2] * b[2] +
      a[3] * b[3] +
      a[4] * b[4] +
      a[5] * b[5]
       
      
    },
    scale(a, fac){
      return a.map(e => e * fac)
    },
    sum(a, b){
      return [
        a[0] + b[0],
        a[1] + b[1],
        a[2] + b[2],
        a[3] + b[3],
        a[4] + b[4],
        a[5] + b[5]
      ]
    },
    fromVec3(a, b){
      return [
        ...a, ...b
      ]
    }
  
  }