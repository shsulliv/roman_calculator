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
  var result = compressions
    .reduce((prev, curr) => prev.replace(curr.compressed, curr.uncompressed), numeral1 + numeral2)
    .split('')
    .sort(compare)
    .join('');

  return primitives.concat(compressions).reduce(function(prev, curr) {
    return prev.replace(curr.uncompressed, curr.compressed);
  }, result);
}

module.exports = calculator;
