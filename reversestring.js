function reverseString(str) {
  var length = str.length;
  var array = [""];
  for (var i = 0; i < length; i++) {
    array.push(str.charAt(i));
  }
  array.reverse();
  str = array.join("");
  return str;
}
reverseString("hello");