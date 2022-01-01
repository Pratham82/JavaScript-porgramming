// In this example the sumTwo is acting as callback function, because it is being passed in operation function as a parameter
function sumTwo(n) {
  return n + 2
}

function operation(arithmetic, num) {
  return arithmetic(num)
}

console.log(operation(sumTwo, 10))

function fn1() {
  return 'hello'
}

function l2(l1) {
  return l1()
}

console.log(l2(fn1))
