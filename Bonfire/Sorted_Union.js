function unite(arr1, arr2, arr3, arr4) {
  // variables
  var flattened;
  var answer = [];
  
  // flatten the multiple (four) arrays into one array
  // I know there is a way to make me not have to add a number for each array
  flattened = [arr1, arr2, arr3, arr4].reduce(function(a, b) {
    return a.concat(b); 
  }, []);
  
  // loop for the flattened array
  for (var i = 0; i < flattened.length; i++) {
    // count reset for duplicates
    var count = 0;
    // loop for the answer array
    for (var a = 0; a < answer.length; a++) {
      // conditional statement to see if the answer is equal to the flattened
      if (answer[a] == flattened[i]) {
        // up the count to provide to show that their was a duplicate
        count += 1;
        // continue going through the loop to test all answer array objects
        continue;
      }
    }
    // if their are no duplicates and it is number push it to the answer array
    if ((count == 0) && (isNaN(flattened[i]) == false)) {
      answer.push(flattened[i]);
    }
  }
  return answer;
}

unite([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]);