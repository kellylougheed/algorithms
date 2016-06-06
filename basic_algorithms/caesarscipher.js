function rot13(str) {
  var answer = "";
  for (var i = 0; i < str.length; i++) {
    var char = str.charCodeAt(i);
    if (char >= 65 && char <= 90) {
      if (char < 78) {
        char = char + 13;
      } else {
        char = char - 13;
      }
    }
    answer += String.fromCharCode(char);
  }
  return answer;
}
rot13("SERR PBQR PNZC");