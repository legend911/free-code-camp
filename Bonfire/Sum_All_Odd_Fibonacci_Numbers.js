function sumFibs(num) {
  // Variables
  var firstFib = 0;
  var secondFib = 1;
  // current fibonacci output
  var currentFib = 1;
  var total = firstFib;
  // While statement to check for odd numbers
  while (currentFib <= num) {
    if (currentFib % 2 != 0) {
      // Update the total number of odd numbers added together
      total += secondFib;
    }
    
    //result of adding last 2 fibonacci numbers
    currentFib = firstFib + secondFib;
    
    // last 2 fibonacci numbers
    secondFib += firstFib;
    firstFib = secondFib - firstFib;
  }
  
  return total;
}
  
sumFibs(4);