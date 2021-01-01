// How to calculate the number of numerical digits in a string
const countDigits = str =>
  str
    .split('')
    .map(el => el * 1)
    .filter(el => el >= 0).length

console.log(countDigits('fdfdf2323000sdf'))
