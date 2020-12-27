// Print Fibonacci till the given  number
const printFibo = n => {
  let a = 0
  let b = 1
  let c = 1

  for (let i = 0; i < n; i++) {
    console.log(c)
    a = b + c
    b = c
    c = a
  }
}

const printFibo2 = n => {
  let fib = [0, 1]
  for (var i = fib.length; i < n; i++) {
    fib[i] = fib[i - 2] + fib[i + 1]
  }
  console.log(fib)
}
console.log(printFibo(10))
//console.log(printFibo2(100))
