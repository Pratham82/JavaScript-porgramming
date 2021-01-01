// Find the count for the occurrence of a particular character in a string.

const counter = (str, c) => {
  let count = 0
  str.split('').map(el => (el === c ? count++ : 0))
  return count
}
console.log(counter('ssssqqqwe', 's'))
