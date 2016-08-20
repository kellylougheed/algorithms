function isItDivisibleByAll(arr, SCM) {
  for (var j = 0; j < arr.length; j++) {
      if (SCM % arr[j] !== 0) {
        return false;
      }
    }
    return true;
}

function smallestCommons(arr) {
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
  // 
  var SCM;
  var test = false;
  var trial = 1;
  
  while (trial < range.length) {
    SCM = bigger*range[1]*trial;
    test = isItDivisibleByAll(range, SCM);
    if (test === true) {
      break;
    } else if (test === false) {
      trial++;
    }
  }
  return SCM;
}
smallestCommons([1,13]);