/*
    Remove all falsey values from an array.
    Falsey values in javascript are false, 
    null, 0, "", undefined, and NaN.
*/

function falsy(value) {
  if (value == false) {
  }
  if (value == '') {
  }
  if (value == null) {
  }
  if (value == 0) {
  }
  if (value == undefined) {
  }
  if (value == isNaN) {
  }
  else {
    return value
  }
}

function bouncer(arr) {
  // This makes every value in "arr" run through the "falsy" function
  // If it returns a value it is put in a new array. 
  arr = arr.filter(falsy);
  return arr;
}

bouncer([7, 'ate', '', false, 9]);