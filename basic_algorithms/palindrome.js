function palindrome(str) {
  // Make string lower case and alphanumeric only
  str = str.toLowerCase();
  str = str.replace(/[^a-z0-9+]+/gi, "");
  
  // Determine the length of half the string
  var searchLength = Math.floor(str.length / 2);
  
  // Take the first half of the string and separate it
  var firstHalfArray = [""];
  for (var i = 1; i <= searchLength; i++) {
    firstHalfArray.push(str.charAt(i - 1));
  }
  var firstHalfString = array.join("");
  
  // Separate the second half of the string and put it backwards into an array, then a string
  var secondHalfArray = [""];
  if (str.length % 2 !== 0) {
    for (var j = str.length; j > searchLength + 1; j--) {
      secondHalfArray.push(str.charAt(j - 1));
    }
  } else {
    for (var k = str.length; k > searchLength; k--) {
      secondHalfArray.push(str.charAt(k - 1));
    }
  }
  var secondHalfString = secondHalfArray.join("");
  
  // To see if the two string halves are the same
  if (firstHalfString == secondHalfString) {
    return true;
  } else {
    return false;
}
}