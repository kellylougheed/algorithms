function confirmEnding(str, target) {
  var ending = str.substr(-target.length);
  if (ending == target) {
    return true;
  } else {
    return false;
  }
}
confirmEnding("Bastian", "n");