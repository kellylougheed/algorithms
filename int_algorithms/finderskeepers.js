function findElement(arr, func) {
  var answer;
  var cont = true;
  for (var i = 0; i < arr.length && cont === true; i++) {
    var x = arr[i];
    if (func(x) === true) {
      answer = x;
      cont = false;
    }
  }
  return answer;
}
findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });