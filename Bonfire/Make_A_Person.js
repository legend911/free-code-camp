var Person = function(firstAndLast) {
  //split the name
  var splitName = firstAndLast.split(' ');
  
  this.getFullName = function() {
    return firstAndLast;
  };
  
  this.getFirstName = function() {
    var splitName = firstAndLast.split(' ');
    return splitName[0];
  };
  
  this.getLastName = function() {
    var splitName = firstAndLast.split(' ');
    return splitName[1];
  };
  
  // set information
  this.setFullName = function(firstAndLast2) {
    firstAndLast = firstAndLast2;
    return firstAndLast;
  };
  
  this.setFirstName = function(first) {
    splitName[0] = first;
    var newSplit = splitName.join(' ');
    firstAndLast = newSplit;
    return firstAndLast;
  };
  
  this.setLastName = function(last) {
    splitName[1] = last;
    var newSplit2 = splitName.join(' ');
    firstAndLast = newSplit2;
    return firstAndLast;
  };
  
};

var bob = new Person('Bob Ross');
bob.getFullName();