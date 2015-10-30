/*
The Free Code Camp test gave tips to use "shift()" and "arguments" to solve the problem
but this can be doing easily with "filter()""
*/

function drop(arr, func) {
  // filter
  var filtered = arr.filter(func);
  
  return filtered;
}

drop([1, 2, 3, 4], function(n) {return n > 5;});