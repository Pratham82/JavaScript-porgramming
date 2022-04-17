console.log(undefined + '5') //undefined5
console.log('undefined' + 5) //undefined5

// 2
const arr = [11, 23, 11, 56, 11, 34, 23]

const remDuplicates = arr => {
  const res = []
  const map = {}
  for (let i = 0; i < arr.length; i++) {
    // Without using includes
    if (map[arr[i]]) {
      continue
    } else {
      map[arr[i]] = true
      res.push(arr[i])
    }

    // With using includes
    // if (!res.includes(arr[i])) {
    //   res.push(arr[i])
    // }
  }
  return res
}
console.log(remDuplicates(arr))

const findSecondLargestElement = arr => {
  const secondLarget = arr.sort((a, b) => a - b)[arr.length - 2]
  return secondLarget
}

console.log(findSecondLargestElement(remDuplicates(arr)))

const fibonacciTillN = n => {
  let n1 = 0,
    n2 = 1,
    nextTerm
  let res = [n1, n2]
  for (let i = 1; i <= n; i++) {
    nextTerm = n1 + n2
    res.push(nextTerm)
    n1 = n2
    n2 = nextTerm
  }
  return res
}

console.log(fibonacciTillN(10))

const isPrime = n => {
  let c = 0
  for (let i = 0; i <= n; i++) if (n % i === 0) c++

  return c === 2
}

console.log(isPrime(11))
console.log(isPrime(13))
console.log(isPrime(15))
console.log(isPrime(2))

// Write a program to sort a numeric array by frequency of elements
let newArr = [1, 2, 5, 2, 8, 5, 6, 8, 8, 1]

const sortByFreq = arr => {
  let arrMap = {}
  arr.map(n => {
    if (!arrMap[n]) {
      arrMap[n] = 1
    } else {
      arrMap[n] += 1
    }
  })
  return Object.entries(arrMap)
    .map(([k, v]) => ({ k, v }))
    .sort((a, b) => a.v - b.v)
    .map(a => Number(a.k))
}

console.log(sortByFreq(newArr))
