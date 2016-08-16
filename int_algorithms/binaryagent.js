function binaryAgent(str) {
  var translation = "";
  var letters = str.split(" ");
  for (var i = 0; i < letters.length; i++) {
    var currentLetter = letters[i];
    var charCode = 0;
    for (var j = 0; j < 8; j++) {
      if (currentLetter.charCodeAt(j) == 49) { // If the current character is 1
        switch(j) {
          case 0:
            charCode += 1;
            break;
          case 1:
            charCode += 2;
            break;
          case 2:
            charCode += 4;
            break;
          case 3:
            charCode += 8;
            break;
          case 4:
            charCode += 16;
            break;
          case 5:
            charCode += 32;
            break;
          case 6:
            charCode += 64;
            break;
          case 7:
            charCode += 128;
            break;
        }
      }
    }
    currentLetter = String.fromCharCode(charCode);
    translation += currentLetter;
    charCode = 0;
  }
  return translation;
}
binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");