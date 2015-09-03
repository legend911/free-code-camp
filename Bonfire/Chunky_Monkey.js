/*
  splits an array (first argument) into groups the 
  length of size (second argument) and returns them 
  as a multidimensional array.
*/
function chunk(arr, size) {
  // initialize final variable
  var finalArr = [];
  
  // create variable to hold length of array
  var x = arr.length;
  
  // conditional to check the array can be split
  if (x > size) {
    // loop structure for "size"
    for (var i = 0; i < x; i++) {
      // push sliced arrays into another array
       finalArr.push(arr.slice(i, i + size));
       // increment i by "size"
       i += size - 1
    }
  }
  // if the array is too small to split according to "size"
  // just return the array
  else {
    return arr; 
  }
  return finalArr;
}

chunk([0, 1, 2, 3, 4, 5], 2);
chunk([0, 1, 2, 3, 4, 5], 4);
chunk([0, 1, 2, 3, 4, 5], 3)