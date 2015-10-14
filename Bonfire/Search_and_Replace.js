function myReplace(str, before, after) {
    str = str.split(" ");
    var testBefore = before.charAt(0).toUpperCase() + before.slice(1);
    if (before == testBefore) {
      after = after.charAt(0).toUpperCase() + after.slice(1); 
    }
    var newStr = "";
    // remove the "before"
    for (var i = 0; i < str.length; i++) {
        if (str[i] == before) {
            str.splice(i, 1, after);
            // newStr = str.replace(before, after);
        }
    }
     
    newStr = str.join(' ');
    
 return newStr;
}

myReplace("He is Sleeping on the couch", "Sleeping", "sitting")