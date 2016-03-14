function repeat(str, num) {
  // num is less than 0 return an empty string
  if (num < 0) {
    return "";
  }
  // initialize an array to hold final result
  var newSTR = [];
  
  // create looping stucture for the num
  for (var i = 0; i < num; i++) {
    // push the string to the new array per loop requirements
    newSTR.push(str);
  }
  
  // join the array with no spaces
  newSTR = newSTR.join("");
  
  return newSTR;
}

repeat('abc', 3);