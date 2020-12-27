// Find factorial of a given number

const findFact = n => (n <= 1 ? 1 : n * findFact(n - 1))

// Normal method
const factNormie = n => {
  fact = 1
  for (let i = 1; i <= n; i++) {
    fact *= i
  }
  return fact
}

console.log(findFact(5))
console.log(factNormie(5))
