const primeChecker = n => {
  let check = 0
  for (let i = 1; i <= n; i++) {
    if (n % i == 0) {
      check++
    }
  }
  return check == 2
}

console.log(primeChecker(19))

for (let i = 1; i <= 100; i++) {
  if (primeChecker(i)) {
    console.log(i)
  }
}

let a = 5
let b = 3
