function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var newArray = arr;
  
  
  for (var i = 0; i < arr.length; i++) {
    var name = arr[i].name;
    var avgAlt = arr[i].avgAlt;
    var piSquared = Math.PI * 2;
    var innerSquare = Math.pow((avgAlt + earthRadius), 3) / GM;
    
    var orbitalPeriod = piSquared * Math.sqrt(innerSquare, 2)
    orbitalPeriod = Math.round(orbitalPeriod);
    
    // Change the JSON
    newArray[i].name = name;
    newArray[i].orbitalPeriod = newArray[i].avgAlt;
    delete newArray[i].avgAlt;
    newArray[i].orbitalPeriod = orbitalPeriod;
  }
  
  return newArray;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
