function uniteUnique(arr) {
  var newArr = [];
  for (var i = 0; i < arguments.length; i++) {
    var thisArr = arguments[i];
    for (var j = 0; j < thisArr.length; j++) {
      var x = thisArr[j];
      var exist = false;
      for (var k = 0; k < newArr.length; k++) {
        if (x == newArr[k]) {
          exist = true;
        }
      }
      if (exist === false) {
        newArr.push(x);
      }
    }
  }
  return newArr;
}
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);