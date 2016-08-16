function rot13(str) {
  var translation = "";
  for (var i = 0; i < str.length; i++) {
    var char = str.charCodeAt(i);
    if (char >= 65 && char <= 90) {
      if (char < 78) {
        char = char + 13;
      } else {
        char = char - 13;
      }
    }
    translation += String.fromCharCode(char);
  }
  return translation;
}
rot13("SERR PBQR PNZC");