function findLongestWord(str) {
  var array = str.split(" ");
  var longestWordLength = 0;
  for (var i = array.length; i > 0; i--) {
    var word = array[i - 1];
    if (word.length > longestWordLength) {
      longestWordLength = word.length;
    }
  }
  return longestWordLength;
}
findLongestWord("The quick brown fox jumped over the lazy dog");