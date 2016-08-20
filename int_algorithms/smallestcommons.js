function findPrimeFactors(n) {
  // http://www.geeksforgeeks.org/print-all-prime-factors-of-a-given-number/
  primeFactors = [];
  // 1) While n is divisible by 2, print 2 and divide n by 2.
  if (n % 2 === 0) {
    primeFactors.push(2);
    while (n % 2 === 0) {
      n /= 2;
    }
  }
  // 2) After step 1, n must be odd. Now start a loop from i = 3 to square root of n.
  // While i divides n, print i and divide n by i, increment i by 2 and continue.
  for (var l = 3; l <= Math.sqrt(n); l = l+2) {
    while (n % l === 0) {
      primeFactors.push(l);
      n = n/l;
    }
  }
  // If n is a prime number and is greater than 2,
  // then n will not become 1 by above two steps. So print n if it is greater than 2.
  if (n > 2) {
    primeFactors.push(n);
  }
  return primeFactors;
}

function smallestCommons(arr) {
  var SCM = 1;
  // Sort from smallest to biggest
  arr.sort(function(a, b) {
    return a - b;
  });
  // Create new array that contains numbers and their range
  var range = [];
  var smaller = arr[0];
  var bigger = arr[1];
  for (var i = bigger; i >= smaller; i--) {
    range.push(i);
  }
  // Find all prime factors for numbers in the range
  var allPrimeFactors = [];
  for (var k = 0; k < range.length; k++) {
    var thesePrimeFactors = findPrimeFactors(k);
    allPrimeFactors = allPrimeFactors.concat(thesePrimeFactors);
  }
  // Multiply all the prime factors
  for (var m = 0; m < allPrimeFactors.length; m++) {
    SCM *= allPrimeFactors[m];
  }
  return SCM;
}
smallestCommons([1,13]);