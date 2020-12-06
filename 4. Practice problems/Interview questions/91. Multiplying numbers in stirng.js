/*
Multiplying Numbers in a String

Given a string of numbers separated by a comma and space, return the product of the numbers.
Examples

multiplyNums("2, 3") ➞ 6

multiplyNums("1, 2, 3, 4") ➞ 24
*/
const multiplyNums = str =>
  str
    .split(',')
    .map(v => Number(v))
    .reduce((a, b) => a * b)

console.log(multiplyNums('2, 3'))
