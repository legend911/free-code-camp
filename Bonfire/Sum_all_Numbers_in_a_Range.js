function sumAll(arr) {
  // get the max value in array
  var a = Math.max(arr[0], arr[1]);
  // get the min value in array
  var b = Math.min(arr[0], arr[1]);
  // initialize in between value variable
  var c = 0
  
  // loop to find values between the max and min
  for (var i = b + 1; i < a; i++) {
    c += i;
  }
  
  // return sum of all numbers in array
  return a + b + c
}

sumAll([1, 4]);