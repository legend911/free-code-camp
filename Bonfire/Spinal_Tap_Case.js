/*
  I realize that i could have a situation where "_" and "uppercase letters" could be in the same string file,
  but I will deal with the complications of searching the string for those particular things. Actually I can
  do that in regex. 
*/

function spinalCase(str) {
  // replace "_" with "-"
  var re = /_/gi;
  var newstr = str.replace(re, '-');
  
  // if "_" were replaced with "-" then make everything lowercase and return it
  if (newstr != str) {
    newstr = newstr.toLowerCase();
    return newstr; 
  }
  
  //looks for lowercase followed by uppercase and adds a "-"
  var secondSTR = str.replace(/([a-z])([A-Z])/g, '$1-$2');
  
  // if lowercase and uppercase letters connected then make everything lowercase and return it
  if (secondSTR != str) {
    secondSTR = secondSTR.toLowerCase();
    return secondSTR;
  }
  
  // lowercase and split into array if other options don't happen
  str = str.toLowerCase();
  str = str.split(' ')
  
  // joins spaces with "-" and then sets it to lower case and then returns it
  for (var i = 0; i < str.length; i++) {
    
    // place a "-" before ever word except for the first one
    if (i != 0) {
      str =  str.join('-');
      str = str.toLowerCase();
      return str;
    }
  }
}

spinalCase("thisIsSpinalTap");