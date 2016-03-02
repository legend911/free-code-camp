function sym(args) {
  // variables
  var answer = [null];
  var counter = 0;
  var uniqueArray = [];
  
  // Find how many arguments there are
  for (var i = 0; i < arguments.length; i++) {
    // remove duplicate numbers for each argument array
    uniqueArray = arguments[i].filter(function(elem, pos,arr) {
      return arr.indexOf(elem) == pos;
    });
    arguments[i] = uniqueArray;
    // loop through the each argument array
    for (var a = 0; a < arguments[i].length; a++) {
      // compare with array elements with answer
      counter = 0;
      for (var b = 0; b < answer.length; b++) {
        if (arguments[i][a] == answer[b]) {
          counter += 1; 
          answer.splice(b, 1);
          b -= 1;
        }
      }
      // check to see if counter is 0 and push to array
      if (counter === 0) {
        answer.push(arguments[i][a]); 
      }
    }
  }
  // remove null from the answer
  answer.splice(0, 1);
  
  // return the answer
  return answer;
}


sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]);