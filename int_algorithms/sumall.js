function sumAll(arr) {
  // To sort array by quantity
  arr.sort(function(a, b) {
    return a - b;
  });
  // To add the sum of those numbers and all numbers in between
  var answer = arr[0];
  var limit = arr[arr.length-1];
  for (var i = answer + 1; i <= limit; i++) {
    answer += i;
  }
  return answer;
}
sumAll([4, 1,]);