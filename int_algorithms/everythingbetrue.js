function truthCheck(collection, pre) {
  var answer = true;
  for (var i = 0; i < collection.length; i++) {
    var x = collection[i][pre];
    if (Boolean(x) !== true) {
      answer = false;
      return answer;
    }
  }
  return answer;
}
truthCheck([{"single": "yes"}], "single");