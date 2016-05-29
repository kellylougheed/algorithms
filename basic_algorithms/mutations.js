function mutation(arr) {
  var string1 = arr[0].toLowerCase();
  var string2 = arr[1].toLowerCase();
  var exist = -1;
  for (var i = 0; i < string2.length; i++) {
    var searchLetter = string2.charAt(i);
    exist = string1.indexOf(searchLetter);
    if (exist === -1) {
      break;
    }
  }
  if (exist === -1) {
    return false;
  } else {
    return true;
  }
}
mutation(["hello", "hey"]);