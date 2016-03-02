// truncate a string if it is bigger than 
// "num" and add "..." to the end of it; otherwise, do nothing
function truncate(str, num) {
  // create variable with the length of string
  var strLength = str.length
  
  // conditional to see if string length is bigger than "num"
  if (strLength > num) {
    // new variable with first "num" characters
    var newSTR = str.slice(0, num-3)
    // concatenate "..." to the string
    newSTR += "...";
    return newSTR;
  }
  // if string is not bigger than "num" just return the string
  else {
    return str
  }
}

truncate('A-tisket a-tasket A green and yellow basket', 11);