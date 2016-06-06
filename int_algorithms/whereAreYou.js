function whereAreYou(collection, source) {
  var arr = [];
  var sourceKeys = Object.keys(source);
  var found = false;
  for (var i = 0; i < collection.length; i++) {
    for (var name in collection[i]) {
      if (source.hasOwnProperty(name) === true && collection[i][name] == source[name]) {
        for (var j = 0; j < sourceKeys.length; j++) {
          if (collection[i].hasOwnProperty(sourceKeys[j])) {
            found = true;
          } else {
            found = false;
          }
        }
      }
     }
    if (found === true) {
      arr.push(collection[i]);
    }
  }
  return arr;
}
whereAreYou([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });