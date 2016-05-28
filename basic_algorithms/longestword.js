function findLongestWord(str) {
  var array = str.split(" ");
  var longest = 0;
  for (var i = array.length; i > 0; i--) {
    var word = array[i - 1];
    if (word.length > longest) {
      longest = word.length;
    }
  }
  return longest;
}
findLongestWord("The quick brown fox jumped over the lazy dog");