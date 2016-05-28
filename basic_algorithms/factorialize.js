function factorialize(num) {
  var answer = 1;
  for (var i = num; i > 1; i--) {
    answer *= i;
  }
  num = answer;
  return num;
}
factorialize(5);