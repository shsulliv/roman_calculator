function compare(a, b) {
  var ORDER = 'MDCLXVI';
  if (a === b) {
    return 0;
  } else if (ORDER.indexOf(a) < ORDER.indexOf(b)) {
    return -1;
  } else {
    return 1;
  }
}

var compressions = [
  {
    uncompressed: 'IIII',
    compressed: 'IV'
  },
  {
    uncompressed: 'VIIII',
    compressed: 'IX'
  },
  {
    uncompressed: 'XXXX',
    compressed: 'XL'
  },
  {
    uncompressed: 'LXXXX',
    compressed: 'XC'
  },
  {
    uncompressed: 'CCCC',
    compressed: 'CD'
  },
  {
    uncompressed: 'DCCCC',
    compressed: 'CM'
  }
]

var primitives = [
  {
    uncompressed: 'IIIII',
    compressed: 'V'
  },
  {
    uncompressed: 'VV',
    compressed: 'X'
  },
  {
    uncompressed: 'XXXXX',
    compressed: 'L'
  },
  {
    uncompressed: 'LL',
    compressed: 'C'
  },
  {
    uncompressed: 'CCCCC',
    compressed: 'D'
  },
  {
    uncompressed: 'DD',
    compressed: 'M'
  }
]

function calculator(numeral1, numeral2) {
  var result = numeral1 + numeral2;

  compressions.forEach(function(c) {
    result = result.replace(c.compressed, c.uncompressed);
  });

  result = result.split('').sort(compare).join('');

  primitives.concat(compressions).forEach(function(p) {
    result = result.replace(p.uncompressed, p.compressed);
  });

  return result;

}

module.exports = calculator;
