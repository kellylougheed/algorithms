function dropElements(arr, func) {
  var cont = true;
  var length = arr.length;
  for (var i = 0; i < length && cont === true; i++) {
    var x = arr[0];
    if (func(x) === false) {
      arr.shift();
    } else if (func(x) === true) {
      cont = false;
    }
  }
  return arr;
}
dropElements([1, 2, 3, 4], function(n) {return n >= 3;});