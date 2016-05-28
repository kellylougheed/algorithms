function palindrome(str) {
  // To make string lower case and alphanumeric only
  str = str.toLowerCase();
  str = str.replace(/[^a-z0-9+]+/gi, "");
  
  // To determine the length of half the string
  var searchLength = Math.floor(str.length / 2);
  
  // To take the first half of the string and separate it
  var array = [""];
  for (var i = 1; i <= searchLength; i++) {
    array.push(str.charAt(i - 1));
  }
  var halfString = array.join("");
  
  // To separate the second half of the string and put it backwards into an array, then a string
  var array2 = [""];
  if (str.length % 2 !== 0) {
    for (var j = str.length; j > searchLength + 1; j--) {
      array2.push(str.charAt(j - 1));
    }
  } else {
    for (var k = str.length; k > searchLength; k--) {
      array2.push(str.charAt(k - 1));
    }
  }
  var halfString2 = array2.join("");
  
  // To see if the two string halves are the same
  if (halfString == halfString2) {
    return true;
  } else {
    return false;
}
}