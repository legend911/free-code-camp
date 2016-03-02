function titleCase(str) {
  // seperate code into an iterable array
  str = str.toLowerCase();
  var myArray = str.split(" ");
  
  // Loop structure equal to the amount of words
  for ( var i = 0; i < myArray.length; i++ ) {
    // First letter in word is saved in a variable
    var j = myArray[i].charAt(0).toUpperCase();
    // Word in array is replaced with capitalized letter plus the
    // rest of the letters (1:).
    myArray[i] = j + myArray[i].substr(1);
 
  }
  // return string by joining the arrays
  return myArray.join(" ");
}

titleCase("I'm a little tea pot");