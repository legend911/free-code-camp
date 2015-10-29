// This is a very weird algorithm!
function smallestCommons(arr) {
  // find largest number from "arr"
  var multipleMax = Math.max(arr[0], arr[1]);
  var multipleMin = Math.min(arr[0], arr[1]);
  
  // variables
  var loopStopStart = true;
  var multiple = multipleMax;
  var multipleBad = 0;
  //
  while (loopStopStart == true) {
    if ((multiple % arr[0] == 0) && (multiple % arr[1] == 0)) {
      for (var i = multipleMin + 1; i < multipleMax; i++) {
        if (multiple % i != 0) {
          multipleBad = 1; 
        } // checks if inner numbers are multiples
      } // loop for numbers in between the two "arr"
      
      // check if all numbers are multiples and returns
      if (multipleBad == 0) {
        loopStopStart = false;
        return multiple; 
      }
    } // checks "arr" for multiplication
    multiple += multipleMax;
    multipleBad = 0;
  } // while loop
  
  // returns 0 if "arr" is empty
  return 0;
}


smallestCommons([1, 5]);