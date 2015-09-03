function largestOfFour(arr) {
  // initialize answer array
  var newArray = [];
  
  // start loop of first level array
  for (var i = 0; i < arr.length; i++) {
    // initialize max value for inner arrays
    var max = 0;
    // start loop of second level array
    for (var a = 0; a < arr[i].length; a++) {
      // if the current number in the second level array is greater than current 
      // max then it is the new max for that second level array
      if (arr[i][a] > max) {
        // new max is created
        max = arr[i][a]
      }
    }
    // push the max for the second level array to the new array
    newArray.push(max);
  }
  
  return newArray;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);