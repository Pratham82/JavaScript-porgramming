// ----- Function Programming -------

// ----- Immutability --------
//1. Take an object with you mother's name and your age, now create an obj fro your sibling by age difference
const famAge = { name: 'Kate', age: 24 }
const siblingAge = { ...famAge, age: famAge.age - 12 }

console.log(siblingAge)
console.log(famAge)

//2. Take an array with 5 colors, create another array by adding two more colors to it

const colors = ['red', 'green', 'blue', 'yellow', 'orange']
const newColors = [...colors, 'pink', 'black']
console.log(newColors)

// ----- Pure functions --------

//3. Write a function birthday to take a person's name and age in an object and increase age
const birthday = (name, age) => ({ name, age: age + 1 })
console.log(birthday('Joe', 22))

// ----- HOF --------

//4. Write a function which can tell whether a number is less than 10 or not supply this function to Array.filter to get an array with no 10 in it

const arr = [11, 44, 553, 11, 10, 46, 6, 7]
const checkIfNumberIsLessThan10 = n => n <= 10
const newArr = arr.filter(checkIfNumberIsLessThan10)
console.log(newArr)

// Do both question using two different functions and then supplying it to map and reduce
// 5. Given an array of number return an object for each item
const returnObj = n => ({ [n]: n })
const newArr2 = arr.map(returnObj)
console.log(newArr2)

// 6. Given an array of numbers calculate the sum
const sumRed = (acc, curr) => acc + curr
const reduceFn = arr => arr.reduce(sumRed, 0)
console.log(reduceFn([10, 10, 10]))

// 7. Write your own reduce using for loop
const customReduce = (arr, acc) => {
  for (let i = 0; i < arr.length; i++) {
    acc += arr[i]
  }
  return acc
}

console.log(customReduce([10, 20, 10], 0))

// -------- Homework Questions -----------
// 8. Find the sum of all odd numbers
// 9. const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const numbers = [1, 2, 3, 4]
const isOdd = n => n % 2 !== 0
const sumAllOdd = arr =>
  arr.reduce((acc, curr) => (isOdd(curr) ? acc + curr : acc), 0)

console.log(sumAllOdd(numbers))

// 10. Find the sum of all numbers at odd indices
const sumAllIndexes = arr =>
  arr.reduce((acc, curr, i) => (isOdd(i) ? acc + curr : acc), 0)

console.log(sumAllIndexes(numbers))

// 11. Find the biggest number in an array
const findHighestNumber = arr => {
  let high = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > high) {
      high = arr[i]
    }
  }
  return high
}

const findHighestReduce = arr =>
  arr.reduce((acc, curr) => {
    if (curr > acc) {
      acc = curr
    }
    return acc
  }, 0)

console.log(findHighestNumber([1, 2, 22, 3, 88, 0, 9, 44]))
console.log(findHighestReduce([1, 2, 22, 3, 88, 0, 9, 44]))

// 12. Find the numbers divisible by 10
const arr_1 = [20, 40, 48, 10, 78]
const divisibleBy10 = n => n % 10 === 0
const findDivisibleBy10 = arr => arr.filter(divisibleBy10)
console.log(findDivisibleBy10(arr_1))

// 13. Return an array of numbers where odd numbers are incremented by one and even number are decremented by on

// const arr = [11, 44, 553, 11, 10, 46, 6, 7] =>
const filterOddEven = arr => arr.map(val => (isOdd(val) ? ++val : --val))
console.log(filterOddEven(arr))

// 14. Return an object with sum of all odd numbers and even number separately
const arr_t = [1, 2, 3, 4, 5]
const sumOddEven = arr =>
  arr.reduce(
    (acc, curr) =>
      isOdd(curr)
        ? { ...acc, odd: acc.odd + curr }
        : { ...acc, even: acc.even + curr },
    { odd: 0, even: 0 }
  )
console.log(sumOddEven(arr_t))

//  Given an array of strings, find the number of strings with similar number of characters

// 15. Return an array with strings which has vowels
const vowels = ['a', 'e', 'i', 'o', 'u']
const isVowel = c => vowels.includes(c)
const hasVowel = str => str.split('').some(c => isVowel(c))

console.log(hasVowel('pra'))

const filteredVowels = arr => arr.filter(hasVowel)
console.log(filteredVowels(['apple', 'rcd', 'plv', 'goat', 'mod']))

// 16. Return an array of objects with key as item dn value as number of characters in the string
const countWordLength = word => ({ [word]: word.length })
const countChars = arr => arr.map(countWordLength)
console.log(countChars(colors))

// ------- Currying --------------
// 17. create a function which takes your name and returns a function which would add your name to anything that function says

const giveYourName = name => verb => `${name} says, ${verb}`
console.log(giveYourName('joe')('run'))

// -------- The one homework ---------
// 18. Write a function compose() which can take any number of functions and return a functions which will run the given functions in order when called with an argument

const increment = n => n + 1
const decrement = n => n - 1
const square = n => n * n
const reducer = (acc, curr) => curr(acc)

const compose = (n, ...args) => args.reduce(reducer, n)
console.log(compose(4, increment, square, decrement))

const composeShort = (n, ...args) => args.reduce((acc, fn) => fn(acc), n)

console.log(composeShort(4, increment, square, decrement))

const sumNIntegers = (...fns) => fns.reduce((acc, curr) => acc + curr, 0)

console.log(sumNIntegers(10, 2, 34))

console.log('---')
// Infinite currying
// const infiniteCurry = a => b => {
//   if (b) {
//     return infiniteCurry(a + b)
//   } else {
//     return a
//   }
// }

const infiniteCurrySimple = a => b => b ? infiniteCurrySimple(a + b) : a

console.log(infiniteCurrySimple(3)(9)(10)())
