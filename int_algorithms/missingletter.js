function fearNotLetter(str) {
  var missingLetter;
  var found = false;
  for (var i = 0; i < (str.length - 1); i++) {
    if (str.charCodeAt(i + 1) - str.charCodeAt(i) != 1 && found === false) {
      missingLetter = String.fromCharCode(str.charCodeAt(i) + 1);
      found = true;
    }
  }
  return missingLetter;
}
fearNotLetter("abce");