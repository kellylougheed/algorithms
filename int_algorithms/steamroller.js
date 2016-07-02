function steamrollArray(arr) {
  var newArray = [];
  function steamroller(x) {
    if (Array.isArray(x) === false) {
      newArray.push(x);
    } else if (Array.isArray(x) === true) {
      for (var j = 0; j < x.length; j++) {
        steamroller(x[j]);
      }
    }
  }
  for (var i = 0; i < arr.length; i++) {
    steamroller(arr[i]);
  }
  return newArray;
}
steamrollArray([1, [2], [3, [[4]]]]);