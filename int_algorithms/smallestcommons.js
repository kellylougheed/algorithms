function smallestCommons(arr) {
  // Sort from biggest to smallest
  arr.sort(function(a, b) {
    return b - a;
  });
  // Create new array that contains numbers and their range
  var range = [];
  var bigger = arr[0];
  var smaller = arr[1];
  for (var i = bigger; i >= smaller; i--) {
    range.push(i);
  }
  
  // SCM is found if the counter "t" is the same length of the array
  // (if the SCM was divisible by every element in the array)
  
  var SCM;
  var t = 0;
  var trial = 1;
  var found = false;
  
  while (found === false) {
    SCM = bigger*range[1]*trial;
    for (t = 0; t < range.length; t++) {
      if (SCM % range[t] !== 0) {
        break;
      }
    }
    if (t == range.length) {
      found = true;
    } else {
      trial++;
    }
  }
  return SCM;
}
smallestCommons([1,13]);