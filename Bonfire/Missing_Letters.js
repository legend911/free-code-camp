function fearNotLetter(str) {
    var ascii = '';
    
    // loop to get the unicode for the letters in "str"
    for (var i = 0; i < str.length; i++) {
        ascii += str.charCodeAt(i) + ' ';
    }
    
    // split the "ascii" variable into an array
    ascii = ascii.split(' ');
    
    // remove the black array element
    ascii.splice(ascii.length - 1);
    
    // loop to through the unicode array
    for (var a = 1; a < ascii.length; a++) {
        // check to see if their is a gap in unicode numbers
        if ((ascii[a] -  ascii[a - 1])  > 1) {
            // finds the missing unicode number and makes it a letter
            var answer = String.fromCharCode(ascii[a] - 1); 
            // returns the missing letter
            return answer;
        } 
    }
  // if no gaps are found you return undefined 
  return undefined;
}

fearNotLetter("abce");