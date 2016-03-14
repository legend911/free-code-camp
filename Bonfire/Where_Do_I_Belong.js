/*
    Return the lowest index at which a value (second argument) 
    should be inserted into a sorted array (first argument).
*/
function compareNumbers(a, b) {
  return a - b;
}

function where(arr, num) {
  // push "num" into "arr"
  arr.push(num);
  // run sort on array
  arr = arr.sort(compareNumbers);
  // initialize variable to hold return value
  var g = 0;
  // for loop to find where the "num" is in the array
  for (var i = 0; i < arr.length; i++) {
    // conditional for comparison of value
    if (arr[i] == num) {
      // make g = to array location
      return g = i; 
    }
  }
}

where([10, 20, 30, 40, 50], 30);