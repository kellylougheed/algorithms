function repeatStringNumTimes(str, num) {
  var newString = "";
  for (num; num > 0; num--) {
    newString += str;
  }
  return newString;
}
repeatStringNumTimes("abc", 3);