import test from 'ava';
import calculator from '../index';

// Write a program that calculates roman numerals,
// taking Roman numerals as inputs, and print the output as
// correct Roman numerals.

test('The calculator adds two Roman numerals together', t => {
  t.is(calculator('I', 'I'), 'II');
});

test('The calculator returns the numeral "four" correctly', t => {
  t.is(calculator('III', 'I'), 'IV');
});

test('The calculator returns the numeral "five" correctly', t => {
  t.is(calculator('III', 'II'), 'V');
  t.is(calculator('IV', 'I'), 'V');
  t.is(calculator('I', 'IV'), 'V');
});

test('The calculator returns the numeral "six" correctly', t => {
  t.is(calculator('V', 'I'), 'VI');
  t.is(calculator('III', 'III'), 'VI');
  t.is(calculator('IV', 'II'), 'VI');
  t.is(calculator('II', 'IV'), 'VI');
});

test('The calculator returns the numeral "fifty" correctly', t => {
  t.is(calculator('XX', 'XXX'), 'L');
});

test('The calculator returns numerals over "fifty" correctly', t => {
  t.is(calculator('CCCLXIX', 'DCCCXLV'), 'MCCXIV');
  t.is(calculator('CXLVII', 'MCV'), 'MCCLII');
});
