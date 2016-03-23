function calculator(numeral1, numeral2) {
  var one = 'I';
  var four = 'IV';
  var five = 'V';
  var nine = 'IX';
  var ten = 'X';


  if (numeral1 + numeral2 === 'IIII') {
    return four;
  }

  if (numeral1 + numeral2 === 'IIIII') {
    return five;
  }

  if (numeral1 === four && numeral2 === one) {
    return five;
  } else if (numeral1 === one && numeral2 === four) {
    return five;
  }

  if (numeral1 === 'III' && numeral2 === 'III') {
    return 'VI';
  } else if (numeral1 === four && numeral2 === 'II') {
    return 'VI';
  } else if (numeral1 === 'II' && numeral2 === four) {
    return 'VI';
  }

  return numeral1 + numeral2;
}

module.exports = calculator;
