function pairwise(arr, arg) {
  // variables
  var total = 0;
  // needed to add something to the used array so that I could start
  // the check process.
  var used = [null];
  
  // test all numbers
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
      // stops you from evaluating the same array element
      if (i != j) {
        // checks to see if elements add up to "arg"
        if (arr[i] + arr[j] == arg) {
          // checks for used elements
          for (var k = 0; k < used.length; k++) {
            if ((i == used[k]) || (j == used[k])) {
              break;
            }
            // checks to see if we look at all the used elements and 
            // then adds current elements to the used list and to the 
            // total
            else if (k == used.length - 1) {
              total += i + j;
              used.push(i);
              used.push(j);
            }
          }
        }
      }
    }
  }
  
  return total;
}

pairwise([0, 0, 0, 0, 1, 1], 1)