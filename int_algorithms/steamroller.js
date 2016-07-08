function steamrollArray(arr) {
  var newArray = [];
  function steamroller(val) {
    if (Array.isArray(val) === false) {
      newArray.push(val);
    } else if (Array.isArray(val) === true) {
      for (var j = 0; j < val.length; j++) {
        steamroller(val[j]);
      }
    }
  }
  for (var i = 0; i < arr.length; i++) {
    steamroller(arr[i]);
  }
  return newArray;
}
steamrollArray([1, [2], [3, [[4]]]]);