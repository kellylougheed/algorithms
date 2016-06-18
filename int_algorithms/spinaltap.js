function spinalCase(str) {
  // To account for CamelCase: if letter is uppercase but preceded by a lowercase letter, add a dash beforehand
  for (var i = 1; i < str.length; i++) {
    if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90 && str.charCodeAt(i - 1) >= 97 && str.charCodeAt(i - 1) <= 122) {
      str = str.slice(0, i) + "-" + str.slice(i, str.length);
    }
  }
  str = str.toLowerCase();
  // If character is not alphanumeric, change to dash
  str = str.replace(/[^a-z0-9]/gi, "-");
  return str;
}
spinalCase('thisIsSpinalTap');