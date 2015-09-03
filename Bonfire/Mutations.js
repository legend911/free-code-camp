/*
  Return true if the string in the 
  first element of the array contains 
  all of the letters of the string in 
  the second element of the array.
*/
function mutation(arr) {
  var count = 0;
  var newArr = [];
  var arr1 = arr[0].toLowerCase();
  var arr2 = arr[1].toLowerCase();
  newArr.push(arr1);
  newArr.push(arr2);
 
  for(var i = 0; i < newArr[1].length; i++) {
    var x = newArr[1][i];
    for(var y = 0; y < newArr[0].length; y++) { 
      if (newArr[0][y] == x) {
        count++; 
      }
    }
  }
  if (count >= newArr[1].length) {
    return true;
  }
  else {
    return false;
  }
}

mutation(['hello', 'hey']);