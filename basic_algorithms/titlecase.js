function titleCase(str) {
  // Make string array of words
  var array = str.split(" ");
  // For each word, make first letter uppercase
  for (var i = 0; i < array.length; i++) {
    var word = array[i];
    var letterArray = word.split("");
    var firstLetter = letterArray[0];
    firstLetter = firstLetter.toUpperCase();
    letterArray[0] = firstLetter;
    // Make all subsequent letters lowercase
    for (var j = 1; j < letterArray.length; j++) {
      var thisLetter = letterArray[j];
      thisLetter = thisLetter.toLowerCase();
      letterArray[j] = thisLetter; 
    }
    // Turn letters back into string
    var newWord = letterArray.toString();
    newWord = newWord.replace(/,/g, ""); // Removes commas
    array[i] = newWord;
  }
  str = array.toString();
  str = str.replace(/,/g, " "); // Replaces commas with spaces
  return str;
}
titleCase("i'M a little tea pot");