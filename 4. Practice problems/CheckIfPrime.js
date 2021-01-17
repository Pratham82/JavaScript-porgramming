// Check if the Entered number is prime print Prime if its a prime number and vice versa

const checkPrime = (n) => {
  check = 0
  for (let i = 1; i <= n; i++) {
    if (n % i == 0) check++
  }

  check > 2
    ? console.log(`${n} is not a Prime number`)
    : check == 2
    ? console.log(`${n} is a Prime number`)
    : 0
}

checkPrime(16)
