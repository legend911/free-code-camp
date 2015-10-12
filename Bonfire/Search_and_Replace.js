function myReplace(str, before, after) {
    var newStr;
    
    // remove the "before"
    for (var i = 0; i < str.length; i++) {
        if (str[i] == before) {
            str.splice(i, 1);
            newStr = str.replace(before, after);
        }
    }
    
    
    
 return newStr;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
