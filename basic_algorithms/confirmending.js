function confirmEnding(str, target) {
  var end = str.substr(-target.length);
  if (end == target) {
    return true;
  } else {
    return false;
  }
}
confirmEnding("Bastian", "n");