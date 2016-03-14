/*
  Return the remaining elements of an 
  array after chopping off n elements 
  from the head.
*/
function slasher(arr, howMany) {
  // use slice return equal to and after "howMany"
  return arr.slice(howMany);
}

slasher([1, 2, 3], 2);