function convertToRoman(num) {
  num = Math.floor(num);
  var number = num.toString();
  var romanNumeral = "";
  // To convert the thousand's place
  if (number.length == 4) {
    for (var i = number.charAt(0); i > 0; i--) {
      romanNumeral += "M";
    }
  }
  // To convert the hundred's place
  if (number.length >= 3) {
    var x = number.charAt(number.length - 3);
    if (x >= 5) {
      if (x == 9) {
        romanNumeral += "CM";
      } else {
        romanNumeral += "D"; 
        if (x > 5) {
          for (x; x > 5; x--) {
            romanNumeral += "C";
          }
        }
      } 
    } else if (x == 4) {
      romanNumeral += "CD";
    } else if (x < 4) {
      for (x; x > 0; x--) {
        romanNumeral += "C";
      }
    }
  }
  // To convert the ten's place
  if (number.length >= 2) {
    var y = number.charAt(number.length - 2);
    if (y >= 5) {
      if (y == 9) {
        romanNumeral += "XC";
      } else {
        romanNumeral += "L";
        if (y > 5) {
          for (y; y > 5; y--) {
            romanNumeral += "X";
          }
        }
      }
    } else if (y == 4) {
      romanNumeral += "XL";
    } else if (y < 4) {
      for (y; y > 0; y--) {
        romanNumeral += "X";
      }
    }
  }
  // To convert the one's place
  var z = number.charAt(number.length - 1);
  if (z >= 5) {
    if (z == 9) {
      romanNumeral += "IX";
    } else {
      romanNumeral += "V"; 
      if (z > 5) {
        for (z; z > 5; z--) {
          romanNumeral += "I";
        }
      }
    } 
  } else if (z == 4) {
    romanNumeral += "IV";
  } else if (z < 4) {
    for (z; z > 0; z--) {
      romanNumeral += "I";
    }
  }
 return romanNumeral;
}
convertToRoman(469);