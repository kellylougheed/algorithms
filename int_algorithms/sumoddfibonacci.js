function sumFibs(num) {
  var seq = [1, 1];
  var answer = 1;
  function isOdd(x) {
    if (x % 2 == 1) {
      return true;
    } else {
      return false;
    }
  }
  for (var i = 1; seq[i] <= num; i++) {
    if (isOdd(seq[i]) === true) {
      answer += seq[i];
    }
    seq.push(seq[i] + seq[i - 1]);
  }
  return answer;
}
sumFibs(4);