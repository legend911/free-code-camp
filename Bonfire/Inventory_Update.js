/*
Update current inventory from the new inventory. Add new 
inventory if needed and make sure inventory is ordered.
*/

function inventory(arr1, arr2) {
    // variables
    var copyArr2 = arr2.slice(0);
    
    // check for no new updates
    if (arr2.length === 0) {
      return arr1; 
    }
    
    // check for empty current inventory
    if (arr1.length === 0) {
      // copy arrays
      arr1 = arr2.slice();
      
      // sort the array alphaetically
      for (var n = 0; n < arr1.length; n++) {
        var counter = 0;
        for (var o = 0; o < arr2.length; o++) {
          var unicode5 = arr1[n][1].charCodeAt(0);
          var unicode6 = arr2[o][1].charCodeAt(0);
          // insert alphabetically
          if (unicode5 > unicode6) {
            arr1.splice(n, 0, arr2[o]);
            arr1.splice(counter + 1, 1);
            arr2.splice(o, 1);
          } 
          
          // removes items that are the same. This time i ignored
          // the fact that I didn't check for the second character 
          // because I didn't need to.
          if (unicode5 == unicode6) {
            arr2.splice(o, 1);
            o -= 1;
          }
          
          // count times around
          counter++;
        }
      }
      return arr1;
    }
    
    // loop through arrays
    for (var i = 0; i < arr1.length; i++) {
      for (var j = 0; j < arr2.length; j++) {
        if (arr1[i][1] == arr2[j][1]) {
          // updates inventory
          arr1[i][0] += arr2[j][0]; 
          // delete matched items from a copied array
          delete copyArr2[j];
        }
      }
    }
    
    // clean up copied array
    for (var k = 0; k < copyArr2.length; k++) {
      if (copyArr2[k] == undefined) {
        copyArr2.splice(k, 1); 
        k -= 1;
      }
    }
    
    // Insert new inventory items
    for (var l = 0; l < arr1.length; l++) {
      for (var m = 0; m < copyArr2.length; m++) {
        var unicode1 = arr1[l][1].charCodeAt(0);
        var unicode2 = copyArr2[m][1].charCodeAt(0);
        // insert alphabetically
        if (unicode1 > unicode2) {
          arr1.splice(l, 0, copyArr2[m]); 
          copyArr2.splice(m, 1);
        }
         
        else if (unicode1 == unicode2) {
          var unicode3 = arr1[l][1].charCodeAt(1);
          var unicode4 = copyArr2[m][1].charCodeAt(1);
          if (unicode3 > unicode4) {
            arr1.splice(l, 0, copyArr2[m]); 
            copyArr2.splice(m, 1);
          }
        }
      }
    }
    
    if (l == arr1.length) {
      arr1.push(copyArr2[0]); 
      copyArr2.splice(m, 1);
    }
    
    // return statement
    return arr1;
}

inventory([], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]);