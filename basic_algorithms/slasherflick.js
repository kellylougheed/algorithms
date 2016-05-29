function slasher(arr, howMany) {
  arr = arr.splice(howMany, arr.length);
  return arr;
}
slasher([1, 2, 3], 2);