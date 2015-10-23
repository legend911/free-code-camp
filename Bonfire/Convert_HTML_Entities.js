function convert(str) {
  // variables
  var speed;
  str = str.split(' ');
  
  // loop to look through each word in the "str" variable
  for (var i = 0, speed = str.length; i < speed; i++) {
    // splices and replaces the "&" entity
    if (str[i] == "&") {
      str.splice(i, 1, "&amp;");
    }
    
    // splices and replaces the "<" entity
    if (str[i] == "<") {
      str.splice(i, 1, "&lt;");
    }
    
    // splices and replaces the ">" entity
    if (str[i] == ">") {
      str.splice(i, 1, "&gt;");
    }
    
    // searches the array element for "<>" and then splices it and replaces it with the HTML entity and then joins it 
    if (str[i].indexOf('<>') != -1) {
      var splitSTR = [];
      splitSTR.splice(splitSTR.indexOf('<>'), 1, "&lt;&gt;");
      str[i] = splitSTR.join('');
    }
    
    // searches the array element for '\"' and then splices it and replaces it with the HTML entity and then joins it 
    if (str[i].indexOf('\"') != -1) {
      var splitSTR = str[i].split('');
      splitSTR.splice(splitSTR.indexOf('\"'), 1, "&quot;");
      str[i] = splitSTR.join('');
    }
    
    // searches the array element for "'" and then splices it and replaces it with the HTML entity and then joins it 
    if (str[i].indexOf("'") != -1) {
      var splitSTR = str[i].split('');
      splitSTR.splice(splitSTR.indexOf("'"), 1, "&apos;");
      str[i] = splitSTR.join('');;
    }
    
  }
  
  // joins the array back to a string
  var answer = str.join(' ');
  
  // return the answer
  return answer;
}

convert("<>");
