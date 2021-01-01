//Even or Odd Number of Factors
//Create a function that returns "even" if a number has an even number of factors and "odd" if a number has an odd number of factors.

const factorGroup = (n) => (Math.sqrt(n) % 1 === 0 ? "odd" : "even");

console.log(factorGroup(33));
console.log(factorGroup(57));
console.log(factorGroup(18));
console.log(factorGroup(1));
console.log(factorGroup(16));
