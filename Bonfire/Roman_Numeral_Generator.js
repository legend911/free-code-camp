function convert(num) {
  var I = 1;
  var V = 5;
  var X = 10;
  var L = 50;
  var C = 100;
  var D = 500;
  var M = 1000;
  
  if (M < num) {
      
  }
  
  if (D < num) {
      
  } 
  
  if (C < num) {
      
  }
  
  if (L < num) {
      
  }
  
  if (X < num) {
    var roman = '';
    while (X < num) {
        num -= X;
        roman += "X";
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
  
  if (V < num) {
    var roman = '';
    if (num == 9) {
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
  
  if (I < num) {
      
  }
  
  
}

convert(9);