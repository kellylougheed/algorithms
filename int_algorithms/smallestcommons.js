function smallestCommons(arr) {
  // Sort from smallest to biggest
  arr.sort(function(a, b) {
    return a - b;
  });
  // Create new array that contains numbers and their range
  var range = [];
  var smaller = arr[0];
  var bigger = arr[1];
  for (var i = smaller; i <= bigger; i++) {
    range.push(i);
  }
  // 
  var SCM = 1;
  var foundSCM = false;
  for (var j = range.length - 1; j >= 0; j--) {
    if (foundSCM === false) {
      SCM *= range[j];
    }
    for (var k = 0; k < range.length; k++) {
      if (SCM % range[k] !== 0) {
        foundSCM = false;
        break;
      } else {
        foundSCM = true;
      }
    }
  }
  return SCM;
}
smallestCommons([1,13]);