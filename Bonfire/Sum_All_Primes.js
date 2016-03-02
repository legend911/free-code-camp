function sumPrimes(num) {
  // variables to hold totoal number of primes and nonPrime number indicator
  var primeTotal = 2; // started at two since this prime number doesn't work in my loop
  var nonPrime = 0;
  
  // loop to go through all the numbers in "num"
  for (var i = 3; i <= num; i++) {
    // resets check variable to see if Prime Number
    nonPrime = 0
    
    // loop to get through all numbers and decided if they are not prime
    for (var a = 1; a <= i; a++) {
      // this takes out "1" and "i" from the equation
      if ((a != i) && (a != 1)) {
        // This checks the remainder to see if it is a nonPrime Number 
        if (i % a == 0) {
          // nonPrime number indicator
          nonPrime = 1;
          break;
        } // if statement
      } // if statement
    }// for loop (a)
    
    // check to see if "i" is a Prime
    if (nonPrime == 0) {
        // add "i" to the rest of the Primes
        primeTotal += i; 
      }
  }// for loop (i)
  
  return primeTotal;
}

sumPrimes(977);