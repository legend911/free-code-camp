function translate(str) {
  // variables
  var firstLetters;
  
  // split the string into an array for use with loop
  var splitSTR = str.split('');
  
  // if first character is a vowel add "ay" to it and return
  if ((splitSTR[0] == "a") || (splitSTR[0] == "e") || (splitSTR[0] == "i") || (splitSTR[0] == "o") || (splitSTR[0] == "u")) {
    // split the string an array
    str = str.split('');
    
    // push the word into the end of the array
    str.push("way");
    
    // make the array a string
    var finalVowelSTR = str.join('');
    return finalVowelSTR;
  }
  
  // find all the first consonants of the array
  for (var i = 0; i < splitSTR.length; i++) {
    // check the character to see if it is a vowel
    if ((splitSTR[i] == "a") || (splitSTR[i] == "e") || (splitSTR[i] == "i") || (splitSTR[i] == "o") || (splitSTR[i] == "u")) {

      // pull out the list of consonants in the beginning
      firstLetters = str.substr(0, i);
      
      // remove the consonants from the beginning of the string
      str = str.replace(firstLetters, "");
      
      // make the string an array
      str = str.split('');
      
      break;
    }
    
    
  }
  
  // place the consonants at the end of the original string
  str.push(firstLetters);
  // add "ay" to the end
  str.push("ay");
  
  // make the array a string
  var finalSTR = str.join('');
  
 return finalSTR;
}

translate("algorithm");
