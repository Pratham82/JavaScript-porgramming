const arr = [11, 23, 11, 56, 11, 34, 23]

const removeDuplicates = arr => {
  let res = []
  let map = {}
  for (let i = 0; i < arr.length; i++) {
    if (!map[arr[i]]) {
      map[arr[i]] = true
      res.push(arr[i])
    }
    else
      continue
  }
  return res
}

console.log(removeDuplicates(arr))

const fibTillN = n => {
  let n1 = 0, n2 = 1
  let res = [n1, n2]
  let nextTerm
  for (let i = 1; i <= n; i++) {
    nextTerm = n1 + n2
    res.push(nextTerm)
    n1 = n2
    n2 = nextTerm
  }
  return res
}


console.log(fibTillN(10))

let newArr = [1, 2, 5, 2, 8, 5, 6, 8, 8, 1]
const sortArrayByFrequevy = arr => {
  const dict = {}
  for (let i = 0; i < arr.length; i++) {
    if (dict[arr[i]])
      dict[arr[i]] += 1
    else
      dict[arr[i]] = 1
  }

  return Object.entries(dict).
    map(([k, v]) => ({ k, v }))
    .sort((a, b) => a.v - b.v)
    .map(n => Number(n.k))
}

console.log(sortArrayByFrequevy(newArr))

const findPrime = n => {
  if (n <= 1)
    return 'Not Prime'

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0)
      return 'Not Prime'
  }

  return 'Prime'
}

console.log(findPrime(20))
console.log(findPrime(13))

