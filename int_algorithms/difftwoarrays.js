function diffArray(arr1, arr2) {
  var newArr = [];
  var x = -1;
  for (var i = 0; i < arr1.length; i++) {
    x = arr2.indexOf(arr1[i]);
    if (x == -1) {
      newArr.push(arr1[i]);
    }
  }
  for (var j = 0; j < arr2.length; j++) {
    x = arr1.indexOf(arr2[j]);
    if (x == -1) {
      newArr.push(arr2[j]);
    }
  }
  return newArr;
}
diffArray([1, 2, 3, 5, 8], [1, 2, 3, 4, 5]);