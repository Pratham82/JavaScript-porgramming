/*
Questions

*/
const arr = [11, 23, 11, 56, 11, 34, 23]
const remoDuplicates = arr => {
  let newArr = []
  arr.map(n => !newArr.includes(n) && newArr.push(n))
  return newArr
}
const remoDuplicatesWithoutPredfined = arr => {
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    if (!newArr.includes(arr[i])) newArr.push(arr[i])
  }
  return newArr
}

const removingDuplicatesUsingHashMap = arr => {
  const res = []
  const map = {}

  for (let i = 0; i < arr.length; i++) {
    // if (!map[arr[i]]) {
    //   res.push(arr[i]);
    //   map[arr[i]] = true;
    // } else continue;
    if (map[arr[i]]) {
      continue
    } else {
      res.push(arr[i])
      map[arr[i]] = true
    }
  }
  return res
}

console.log(remoDuplicates(arr))
console.log(removingDuplicatesUsingHashMap(arr))

const findSecondLargestElement = arr => {
  const secondLarget = arr.sort((a, b) => a - b)[arr.length - 2]
  return secondLarget
}

console.log(findSecondLargestElement(remoDuplicates(arr)))

const hashMapDup = arr => {
  // create array and dict
  // loop over array
  // check if the number present in the dict if present continue else add the number to dict

  const res = []
  const dict = {}

  for (let i = 0; i < arr.length; i++) {
    if (dict[arr[i]]) continue
    else {
      res.push(arr[i])
      dict[arr[i]] = true
    }
  }
  return res
}

console.log('tes')

console.log(hashMapDup([1, 1, 2]))

// Fibonacci series till N
const fibo = n => {
  // let arr = [0,1]
  let next
  let n1 = 0
  let n2 = 1
  for (let i = 1; i <= n; i++) {
    console.log(n1)
    next = n1 + n2
    n1 = n2
    n2 = next
  }
}

const fnFibo = number => {
  let n1 = 0,
    n2 = 1,
    nextTerm

  console.log('Fibonacci Series:')

  for (let i = 1; i <= number; i++) {
    console.log(n1)
    nextTerm = n1 + n2
    n1 = n2
    n2 = nextTerm
  }
}

// console.log(fibo(10));
// console.log(fnFibo(10));

// fib
const fib2 = n => {
  let a = [0, 1],
    next
  let new1 = []
  console.log('fib')
  for (let i = 1; i <= n; i++) {
    console.log(a[0])
    next = a[0] + a[1]
    a[0] = a[1]
    a[1] = next
  }
}

// console.log(fib2(10));

let a = 10
// let a =  20

let newArr = [1, 2, 5, 2, 8, 5, 6, 8, 8, 1]
const sortByFreq = arr => {
  let map = {}
  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]]) {
      map[arr[i]]++
    } else {
      map[arr[i]] = 1
    }
  }

  return Object.entries(map)
    .map(([k, v]) => ({ k, v }))
    .sort((a, b) => a.v - b.v)
    .map(a => a.k)
  // return map;
}

console.log(sortByFreq(newArr))

const isPrime = n => {
  let check = 0
  for (let i = 0; i <= n; i++) {
    if (n % i === 0) check++

    check === 2
    return 'prime'
  }
}

// what happens in browser

// In request how do we identify if we have to render html in browser

// Event capturing and bubbling

// What is defer in JS

// What is difference between async and defer

// How to stop the dom elements from rendering (using stop propagation)

// Differences between var, let and const

// What is use of strict in JS

// What will be the output of the following code

/**

console.log(1)
setTimeout(() => console.log(2), 2000)
console.log(4)
setTimeout(() => console.log(3), 0)

1,4,3,2
 */

// How do we handle multiple states in react(using useReducer)
// Even if the child component's data is not changing, the child component is getting  rendered again ana again, How can we improve the performance in this case (Pure components, it will no rerender if the props are same)

// What is useMemo

// Difference between flexbox and grid
// What is min width and max width

// Position absolute and relative

// Var, let const diff
/*
console.log(something) // undefined
var something = 100
console.log(something) // Cannot access 'something' before initialization
let something = 100
console.log(something) // Cannot access 'something' before initialization
const something = 100
*/

// ****** Coding questions
// Modify the array to add nam and age in the details key
const items = [
  { id: 1, name: 'foo', age: 20 },
  { id: 2, name: 'bar', age: 22 },
]
const addDetails = arr =>
  arr.map(({ id, name, age }) => ({ id, details: { name, age } }))
console.log(addDetails(items))
// console.log(addDetails(items))

// Push the zeros to last of array and the order of other elements should be same
const arrays = [1, 2, 3, 0, 0, 999, 9]

console.log('res')
const pushZeroesDef = arr =>
  arr.filter(a => a !== 0).concat(arr.filter(a => a === 0))
console.log(pushZeroesDef(arrays))

const pushZeroes = arr => {
  let c = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[c++] = arr[i]
      console.log(arr[i])
    }
  }
  while (c < arr.length) {
    arr[c++] = 0
  }
  return arr
}
console.log(pushZeroes(arrays))
const pushZeroes2 = arr => {
  let res = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      res.push(arr[i])
    }
  }
  for (let i = 0; i <= arr.length - res.length; i++) {
    res.push(0)
  }
  return res
}
console.log(pushZeroes2(arrays))
// const pushZeroes = arr => {
//   let res = []
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== 0) {
//       res.push(arr[i])
//     }
//   }
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == 0) {
//       res.push(arr[i])
//     }
//   }

//   return res
// }
