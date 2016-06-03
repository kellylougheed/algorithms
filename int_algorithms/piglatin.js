function translatePigLatin(str) {
  var arr = str.split(" ");
  function isVowel(char) {
    char.toLowerCase();
    if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u") {
      return true;
    }
  }
  for (var i = 0; i < arr.length; i++) {
    var pigLatin = arr[i];
    var firstLetter = pigLatin.charAt(0);
    if (isVowel(firstLetter) === true) {
      pigLatin = pigLatin + "way";
    } else if (isVowel(pigLatin.charAt(1)) === true) {
      pigLatin = pigLatin.slice(1);
      pigLatin += firstLetter + "ay";
    } else {
      var cluster = pigLatin.charAt(0) + pigLatin.charAt(1);
      pigLatin = pigLatin.slice(2);
      pigLatin += cluster + "ay";
    } 
    arr[i] = pigLatin;
  }
  str = arr.join(" ");
  return str;
}
translatePigLatin("consonant");