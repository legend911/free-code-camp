function every(collection, pre) {
  // variables
  var counter = 0;
  
  // loop for all options
  for (var i = 0; i < collection.length; i++) {
    // User's Sex
    if (pre == "sex") {
      if ((collection[i].sex == "male") || (collection[i].sex == "female")) {
        counter++;
      }
    }
  
    // User's Age
    if (pre == "age") {
      if (collection[i].age > 0) {
        counter++;
      }
    }
    
    // User's Boat Access
    if (pre == "onBoat") {
      if ((collection[i].onBoat === true) || (collection[i].onBoat === false)) {
        counter++;
      }
    }
    
    if (pre == "single") {
      if ((collection[i].single === "yes") || (collection[i].single === "no")) {
        counter++;
      }
    }
  
  }
  
  // make sure to check by the amount of user's
  if (counter == collection.length) {
    return true;
  }
  
  else {
    return false;
  }
  
}

every([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete"}, {"name": "FastFoward", "onBoat": true}], "onBoat");