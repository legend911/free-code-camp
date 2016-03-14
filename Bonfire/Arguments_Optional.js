function add(x, y) {
  // variables to check the type of x and y
  var unknown = typeof x;
  var unknown1 = typeof y;
  
  
  // checks for a string
  if ((unknown === "string") || (unknown1 === "string")) {
    return undefined;
  }
  
  // checks for numbers
  if ((unknown === "number") && (unknown1 === "number")) {
    return arguments[0] + arguments[1];
  }
  
  return function add2(y) {
    // checks for an array in y
    if (Array.isArray(y) === true) {
      return undefined;
    }
    // addition of multidimensional function using a closure
    // example - function(x)(y);
    return x + y;
  };
  
}

add(2)([3]);