/*
  Make a function that looks through an array (first argument) 
  and returns an array of all objects that have equivalent 
  property and value pair (second argument).
*/
function where(collection, source) {
  // iniitialize final array
  var arr = [];
  // puts keys into an array so I call them and get the value
  var sourceKey = Object.keys(source);
  // start loop to check for keys and value pairing in the "collection"
  for (var i = 0; i < collection.length; i++) {
    // initialize variables for use in loops and counting 
    var name = '';
    var name1 = 0;
    var count = 0;
    
    // "name" will output "a" in this case because it is looking at an object
    for (name in source) {
      // "name1" will output 1 in this case because it is looking at an array with numbers in it
      for (var name1 in sourceKey) {
        // checks the "collection" in first object for "a" property
        if (collection[i].hasOwnProperty(name)) {
          // checks the "collection" and "source" in first object for values "1 and 2"
          if (collection[i][sourceKey[name1]] == source[name]) {
            // update count
            count ++;
            // compares count with length of the source to make sure the "collection" has both keys and values
            if (count == sourceKey.length) {
              // push the "collection object to the new array"
              arr.push(collection[i]);
            }
          }
        }
      }
    }
  }
  return arr;
}

where([{ 'a': 1, 'b': 2 }, { 'a': 1 }, { 'a': 1, 'b': 2, 'c': 2 }], { 'a': 1, 'b': 2 })

where([{ 'a': 1, 'b': 2 }, { 'a': 1 }, { 'a': 1, 'b': 2, 'c': 2 }], { 'a': 1, 'b': 2 })