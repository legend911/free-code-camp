/*
You will be provided with an initial array (the 
first argument in the destroyer function), followed 
by one or more arguments. Remove all elements from 
the initial array that are of the same value as 
these arguments.
*/

// function that checks whether my arguments are in the array
function remove (element, index) {
  // initialize the return variable since I can't have it 
  // resetting itself because I have more than one argument 
  // to test againsts    
  var returned = true;
  // start loop size of arguments to compare against
  for (var a = 0; a < match.length; a++) {
    // compare value in array to argument
    if (element == match[a]) {
       // return "false" inside of the "filter" object will 
       // make it remove "element" from the array
       returned = false;
    }
  }
  // returns true to keep element or false to remove it
  return returned;
}

// initialize variable to hold my comparison arguments
var match = [];

// main function
function destroyer(arr) {
  // created loop to put comparison arguments into an array 
  // for use in the filter method
  for (var i = 1; i < arguments.length; i++) {
    // puts the arguments in the new array
    match.push(arguments[i]); 
  }
  // filter object that will inspect put each array value through the method "remove"
  var newArr = arr.filter(remove);
  return newArr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);