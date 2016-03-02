function diff(arr1, arr2) {
  // initialize array to hold the answers
  var filteredArray = [];
  
  // Loop of first array  
  for (var i = 0; i <= arr2.length; i++) {
    // initialize variable to capture copies
    var count = 0;
    
    // loop of second array
    for (var g = 0; g <= arr1.length; g++) {
      
      // compare each value of the first array with each of the second
      if (arr1[g] == arr2[i]) {
        // add one to signify a match
        count += 1;
      }
    
    }
    // if no matches you have an answer!
    if (count == 0) {
        // push the answer to the array
        filteredArray.push(arr2[i]);
      }
    
  }
  
  // This is the same as above except with the array's flipped so
  // the matching will show that a value is not in the other array
  for (var i = 0; i <= arr1.length; i++) {
    var count = 0;
    for (var g = 0; g <= arr2.length; g++) {
      
      
      if (arr1[i] == arr2[g]) {
        count += 1;
      }
    
    }
    if (count == 0) {
        filteredArray.push(arr1[i]);
      }
    
  }
    
    return filteredArray;
}
  

var x = diff(['diorite', 'andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'], ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']);