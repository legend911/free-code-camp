function steamroller(arr) {
  // flattens the array and makes it into a string
  arr = arr.join(' ');
  // replaces all commas with a space
  arr = arr.replace(",", " ");
  // replaces "[object" with "{" since it changed once using join()
  arr = arr.replace("[object", "{");
  // replaces "Object]" with "}" since it changed once using join()
  arr = arr.replace("Object]", "}");
  // replaces "{ }" with "{}". This stops it from being two things once
  // converted back into an array
  arr = arr.replace("{ }", "{}");
  // splits the string by the spaces and makes an array per spaced element
  arr = arr.split(' ');
  
  // conditional statem\ent to make sure we only do these operations with numbers
  // of course I only check these first one so i had to make different use cases
  // for things that hapen after the first element
  if (/^[0-9]+$/i.test(arr[0]) === true) {
    // removes empty elements
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === '') {
        arr.splice(i, 1);  
      }
      // turn string to integer
      if (/^[0-9]+$/i.test(arr[i]) === true) {
        arr[i] = parseInt(arr[i]);
      }
      // make everything else into an object (this just satisfies the use case)
      else {
        arr[i] = {};
      }
    }
  }
  
  return arr;
}

steamroller([1, {}, [3, [[4]]]]);