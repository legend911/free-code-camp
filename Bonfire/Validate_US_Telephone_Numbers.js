function telephoneCheck(str) {
  // variables
  var reg = /\D/;
  
  // Check if format is valid
  var test = str;
  test = test.split("");
  for (var i = 0; i < test.length; i++) {
    if (test[i - 1] == '-' && test[i] == '1') {
      return false;
    }
    
    if (test[i - 4] != '(' && test[i] == ')') {
      return false; 
    }
    
    if (test[i - 4] == '(' && test[i] != ')') {
      return false; 
    }
  }
  
  
  // Check that numbers are valid 
  str = str.split(reg);
  str = str.join("");
  str = str.split("");
  
  // check for country code
  if (str[0] == 1) {
    if (str.length == 11) {
      return true; 
    }
  }
    
  if (str.length == 10) {
    return true; 
  }
  
  else {
    return false; 
  }
}



telephoneCheck("(555)-555-5555");