//Sum of Evenly Divisible Numbers from a Range
//Create a function that takes three arguments a, b, c and returns the sum of the numbers that are evenly divided by c from the range a, b inclusive.

const evenlyDivisible = (a, b, c) => {
  let arr = [];
  for (let i = a; i <= b; i++) i % c === 0 ? arr.push(i) : "";
  return arr.reduce((prev, curr) => prev + curr, 0);
};

console.log(evenlyDivisible(1, 10, 20));
console.log(evenlyDivisible(1, 10, 2));
