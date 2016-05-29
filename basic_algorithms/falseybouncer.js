function bouncer(arr) {
  function removeFalse(val) {
    if (val !== false) {
      return val;
    }
  }
  arr = arr.filter(removeFalse);
  return arr;
}
bouncer([7, "ate", "", false, 9]);