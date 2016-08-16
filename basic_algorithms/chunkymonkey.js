function chunkArrayInGroups(arr, size) {
  var newArray = [];
  var timesToRepeat = Math.floor(arr.length / size);
  if (arr.length % size !== 0) {
    timesToRepeat++;
  }
  for (timesToRepeat; timesToRepeat > 0; timesToRepeat--) {
    newArray.push(arr.slice(0, size));
    arr = arr.slice(size, arr.length);
  }
  return newArray;
}
chunkArrayInGroups(["a", "b", "c", "d", "e"], 2);