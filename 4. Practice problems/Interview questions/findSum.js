// Write a function for getting a sum of multiple numbers, it won't be necessarily a specific set of numbers

function sumMultiple(...args) {
  // return Object.keys(arguments)
  //   .map(n => Number(n))
  //   .reduce((a, b) => a + b, 0)
  return args.reduce((a, b) => a + b, 0)
}

console.log(sumMultiple(1, 2, 3, 4))
