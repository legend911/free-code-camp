function boo(bool) {
  // variables to make a boolean object that stores the boolean value
  var x = new Boolean(false);
  var y = new Boolean(true);
  
  // The number one is true since it is being converted by javascript
  // TUsing "===" will calculate the real equality and not try to guess
  if (bool === 1) {
    return false;
  }
  
  // check if "bool" is equal to true or false
  if ((x == bool) || (y == bool)) {
     return true;
  }
  
  // if not true or false return false
  else {
    return false; 
  }
}

boo(true);