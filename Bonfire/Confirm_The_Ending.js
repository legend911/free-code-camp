function end(str, target) {
  // make the string into an array on a different variable
  var myArray = str.split(" ");
  
  // if the array is longer than one I will do this special section
  if (myArray.length > 1) {
    // if the last string in this array is equal to the target return true
    if (myArray[myArray.length - 1] == target) {
      return true; 
    }
    // otherwise return false
    else {
      return false;
    }
  }
  // make variable equal to the last letter in the string
  var letter = str.substr(str.length - 1)
  // if the letter is equal to the target return true
  if (letter == target) {
    return true;
  }
  // otherwise return false
  else {
    return false;
  }
}

end('He has to give me a new name', 'name');