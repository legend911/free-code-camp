function binaryAgent(str) {
  // turn string to array
  str = str.split(' ');
  
  // the binary is parsed in base 2 with parseInt()
  // String.fromCharCode() makes it a string of letters from ASCII code
  for (var i = 0; i < str.length; i++) {
    str[i] = String.fromCharCode(parseInt(str[i], 2) ); 
  }
  
  // join array
  str = str.join('');
  
  return str;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");