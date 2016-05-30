function getIndexToIns(arr, num) {
  // To sort array by quantity
  arr.sort(function(a, b) {
    return a - b;
  });
  // To find the number's place
  var place = arr.length;
  var found = false;
  for (var i = 0; i < arr.length && found === false; i++) {
    if (num === arr[i]) {
      place = i;
      found = true;
    } else if (num < arr[i]) {
      place = i;
      found = true;
    }
  }
  return place;
}
getIndexToIns([1, 3, 3, 20], 5);