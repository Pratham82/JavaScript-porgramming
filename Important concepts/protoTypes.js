// Prototypes in JS
const array = [11, 12, 13, 14, 10]

// sum
const sum = arr => {
  let op = 0
  for (let i = 0; i < arr.length; i++) {
    op += arr[i]
  }
  return op
}

const sum2 = arr => arr.reduce((a, b) => a + b)

// average
const avg = arr => {
  let op = 0
  for (let i = 0; i < arr.length; i++) {
    op += arr[i]
  }
  return op / arr.length
}

const avg2 = arr => arr.reduce((a, b) => a + b) / arr.length

// max
const max = arr => {
  let max = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]
    }
  }
  return max
}

const max2 = ar

// min
const min = arr => {
  let min = arr[0]
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i]
    }
  }
  return min
}

console.log(sum(array))
console.log(avg(array))
console.log(max(array))
console.log(min(array))

// Passing function as an argument
const calc = (arr, operation) => {
  return operation(arr)
}

// console.log(calc(array, sum))
// console.log(avg(array, sum))

// Creating polyfills
Array.prototype.sum = function () {
  let op = 0
  for (let i = 0; i < this.length; i++) {
    op += this[i]
  }
  return op
  // return this.reduce((a, b) => a + b)
}

console.log(array.sum())

Array.prototype.calculate = function (operation) {
  return operation(this)
}

console.log(array.calculate(sum))
console.log(sum2(array))
console.log(avg2(array))
