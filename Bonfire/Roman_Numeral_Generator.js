// program to change numbers into roman numerals

function convert(num) {
  var I = 1;
  var V = 5;
  var X = 10;
  var L = 50;
  var C = 100;
  var D = 500;
  var M = 1000;
  
  // not completed to shorten program
  if (M <= num) {
      
  }
  
  // not completed to shorten program
  if (D <= num) {
      
  } 
  
  // not completed to shorten program
  if (C <= num) {
      
  }
  
  // not completed to shorten program
  if (L <= num) {
      
  }
  
  // calculates roman numbers below 50
  if (X <= num) {
    var roman = '';
    while (X < num) {
        num -= X;
        roman += "X";
    }
    
    if (num == X-1) {
        roman += "IX" 
        return roman;
    }
    
    while (V < num) {
        num -= V;
        roman += "V";
    }
    
    while (I <= num) {
        num -= I;
        roman += "I";
    }
    
    return roman;
  }
  
  // calculates roman numbers below 10
  if (V <= num) {
    var roman = '';
    if (num == X-1) {
        roman += "IX" 
        return roman;
    }
      
    while (V <= num) {
        num -= V;
        roman += "V";
    }
    
    while (I <= num) {
        num -= I;
        roman += "I";
    }
    
    return roman;
      
  }
  
  
  // calculates roman numbers below 5
  if (I < num) {
      while (I <= num) {
        num -= I;
        roman += "I";
    }
  }
  
  
}

convert(29);