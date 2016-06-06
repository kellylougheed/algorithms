function pairElement(str) {
  var arr = str.split("");
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == "A") {
      newArr.push(["A", "T"]);
    } else if (arr[i] == "T") {
      newArr.push(["T", "A"]);
    } else if (arr[i] == "C") {
      newArr.push(["C", "G"]);
    } else if (arr [i] == "G") {
      newArr.push(["G", "C"]);
    }
  }
  return newArr;
}
pairElement("GCG");