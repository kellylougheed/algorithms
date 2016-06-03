function myReplace(str, before, after) {
  // To check for capitalization of first letter and capitalize if necessary
  var firstLetter = before.charAt(0);
  if (firstLetter == firstLetter.toUpperCase()) {
     var firstLetter2 = after.charAt(0);
     firstLetter2 = firstLetter2.toUpperCase();
     after = after.slice(1, after.length);
     after = firstLetter2 + after;
  }
  // To replace the old word with the new word
  var newString = str.replace(before, after);
  return newString;
}
myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");