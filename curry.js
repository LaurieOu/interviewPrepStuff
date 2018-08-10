const curry = (f) => {
  return function currify() {
      const args = Array.prototype.slice.call(arguments);
      if(args.length === f.length){
        return f(...args);
      } else {
        return currify.bind(null, ...args)
      }
  }
}


var sumFour = curry(function(w, x, y, z) {
  return w + x + y + z;
});

const f1 = sumFour(10);
console.log(f1(2,3,5));

// resources:
// https://medium.com/@juliomatcom/an-elegant-and-simple-curry-f-implementation-in-javascript-cf36252cff4c
//https://medium.com/@jschapir/today-i-learned-curry-implementation-with-es6-35bb2229e230
