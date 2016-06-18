function sumPrimes(num) {
  var sum = 0;
  // Function to determine if a number is prime: trial division by all numbers from square root of number to 2. Function stops once number is determined not to be prime.
  function isPrime(x) {
    var prime = true;
    for (var i = Math.floor(Math.sqrt(x)); i > 1 && prime === true; i--) {
      if (x % i === 0) {
        prime = false;
      }
    }
    // Assigns one as not prime
    if (x == 1) {
      prime = false;
    }
    if (prime === true) {
      return true;
    } else {
      return false;
    }
  }
  // Sum all prime numbers less than or equal to to the variable num
  for (var j = 1; j <= num; j++) {
    if (isPrime(j) === true) {
      sum += j;
    }
  } 
  return sum;
}
sumPrimes(10);