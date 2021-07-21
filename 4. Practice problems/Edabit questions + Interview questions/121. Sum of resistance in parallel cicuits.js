// If two or more resistors are connected in parallel, the overall resistance of the circuit reduces. It is possible to calculate the total resistance of a parallel circuit by using this formula:

// Create a function that takes an array of parallel resistance values, and calculates the total resistance of the circuit.

// Example
// parallelResistance([6, 3, 6]) ➞ 1.5

// 1/RTotal = 1/6 + 1/3 + 1/6
// 1/RTotal = 2/3
// RTotal = 3/2 = 1.5

const parallelResistance = (arr) =>
  Number((1 / arr.map((val) => 1 / val).reduce((a, b) => a + b)).toFixed(1))

console.log((166.66666666666666).toFixed(2))

console.log(parallelResistance([6, 3, 6]))
console.log(parallelResistance([6, 3]))
console.log(parallelResistance([10, 20, 10]))
console.log(parallelResistance([500, 500, 500]))
