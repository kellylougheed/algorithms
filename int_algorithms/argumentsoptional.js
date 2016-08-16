function addTogether() {
  var answer = 0;
  // If there is one valid number
  if (arguments.length === 1 && typeof arguments[0] === "number") {
    // Call the returned function with a single argument
    var x = arguments[0];
    return function(y) {
      if (typeof y === "number") {
        return x + y;
      } else {
        return undefined;
      }
    };
  } else if (typeof arguments[0] !== "number") {
    return undefined;
  } else if (arguments.length > 1) { // If there are two numbers
    // Check if first two values are numbers
    for (var i = 0; i < 2; i++) {
      if (typeof arguments[i] !== "number") {
        return undefined;
      }
    }
    answer = arguments[0] + arguments[1]; // Add two valid numbers
  }
  return answer;
}
addTogether(2);