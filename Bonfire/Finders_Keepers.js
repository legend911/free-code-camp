function find(arr, func) {
  // checks each element in an array against a function and 
  // returns only true statements
  var filtered = arr.filter(func);
  
  // returns only the first element
  return filtered[0];
}

find([1, 2, 3, 4], function(num){ return num % 2 === 0; });