function chunkArrayInGroups(arr, size) {
  var newArray = [];
  var repeat = Math.floor(arr.length / size);
  if (arr.length % size !== 0) {
    repeat++;
  }
  for (repeat; repeat > 0; repeat--) {
    newArray.push(arr.slice(0, size));
    arr = arr.slice(size, arr.length);
  }
  arr = newArray;
  return arr;
}
chunkArrayInGroups(["a", "b", "c", "d", "e"], 2);