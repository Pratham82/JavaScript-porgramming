const colors = ['red', 'green', 'blue', 'yellow', 'orange']
const add2Colors = colors => [...colors, 'pink', 'maroon']

console.log(add2Colors(colors))

const increaseAge = person => ({ ...person, age: person.age + 1 })

console.log(increaseAge({ name: 'joe', age: 21 }))

const checkIfNumberIsLessThan10 = n => (n >= 10 ? n : 0)

const arr = [11, 44, 553, 11, 10, 46, 6, 7]
// const newArr = arr => arr.map(val => checkIfNumberIsLessThan10(val))
const newArr = arr.filter(checkIfNumberIsLessThan10)

console.log(newArr)

// increment each no. by 2 in arr
// method 1
const inc2 = arr => arr.map(val => val + 2)
console.log(inc2(arr))

// method 2
const incrementBy2 = n => n + 2
console.log(arr.map(incrementBy2))

/*
1. write a reduce function using for loop
*/

// Write a function to find the sum  of all odd numbers in an array
const arr2 = [1, 3, 5, 2, 22, 11, 9]

const oddSum = arr =>
  // arr.reduce((acc, val) => (val % 2 !== 0 ? (acc += val) : acc), 0)
  arr.reduce((acc, val) => (val % 2 === 0 ? acc : acc + val), 0)
console.log(oddSum(arr2))

// Given an array return an object with sum of odd and even numbers

// my implementation
const oddEven = arr =>
  arr.reduce(
    (acc, val) =>
      val % 2 === 0
        ? { ...acc, even: acc.even + val }
        : { ...acc, odd: acc.odd + val },
    { odd: 0, even: 0 }
  )

console.log(oddEven(arr2))

// tanay's implementation
const oddEvenReducer = (obj, num) =>
  num % 2 === 0
    ? { ...obj, even: obj.even + num }
    : { ...obj, odd: obj.odd + num }

const oddEvenAcc = { odd: 0, even: 0 }

console.log(arr2.reduce(oddEvenReducer, oddEvenAcc))

const countLength = arr =>
  arr.map(item => ({
    [item]: item.length,
  }))
console.log(countLength(colors, 'colors'))

const names = ['tanay', 'tanvi', 'kishan', 'prerana']

console.log(countLength(names, 'name'))

// create a function which takes your name and returns a function which would add your name to anything that function says

const giveYourName = name => verb => `${name} says, ${verb}`
console.log(giveYourName('joe')('run'))

const timeStamp = task => user =>
  `${task} performed by ${user} at ${new Date()}`

console.log(timeStamp('clenup')('Prathamesh'))

// write a function to log usename and userId

const logUName = text => `message: ${text} userName: pratham82`
const logUId = text => `${text} userId: 1109`

const op = logUId(logUName('text1'))
// const op = logUId(logUName('text1'))
const composeUnameId = msg => logUId(logUName(msg))
console.log(op)
console.log(composeUnameId('testing'))
