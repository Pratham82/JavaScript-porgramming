// beginner - intermediate
// Find sum of an array and display the output . Example [10,4,5,2,5,6,9].
const arraySum = arr => arr.reduce((a, b) => a + b, 0)
console.log(arraySum([10, 4, 5, 2, 5, 6, 9])) // 41
console.log(arraySum([10, 10, 10])) // 30

// Find average of an array and display the output.
const arrayAvg = arr => arr.reduce((a, b) => a + b, 0) / arr.length
console.log(arrayAvg([10, 11, 12])) // 11
console.log(arrayAvg([10, 14, 15])) // 13

// Find maximum and minimum of an array.
const arrayMax = arr => {
  let max = 0
  for (let i = 0; i < arr.length; i++) if (arr[i] > max) max = arr[i]
  return max
}

console.log(arrayMax([10, 4, 5, 2, 5, 6, 9])) // 10
console.log(arrayMax([10, 4, 5, 12, 5, 6, 9])) // 12

// Find Median and Mode of an array.
const arrayMean = arr => arr.reduce((a, b) => a + b, 0) / arr.length
console.log(arrayMean([10, 14, 15])) // 13

const arrayMedian = arr => arr[Math.floor(arr.length / 2)]
// arr.sort((a, b) => a - b)
console.log(arrayMedian([10, 4, 15, 23, 11, 20, 23])) // 13

// Mode : Most repeating term

// Find sum of two arrays.
// [3,5,2,9,4] = 3+5+2+9+4 = 23
// [6,2,8,1,3] = 6+2+8+1+3 = 20
// Final Output : 20+23 = 43
const sumOfTwoArrays = (arr1, arr2) => arraySum(arr1) + arraySum(arr2)
console.log(sumOfTwoArrays([3, 5, 2, 9, 4], [6, 2, 8, 1, 3]))

// Find number of consonants and vowels in a string.
const consonantVowelCounter = str => {
  const counter = {
    consonants: 0,
    vowels: 0,
  }

  const vowels = ['a', 'e', 'i', 'o', 'u']

  str
    .split('')
    .map(c =>
      vowels.includes(c.toLowerCase()) ? counter.vowels++ : counter.consonants++
    )

  // const advCounter = str.split('').map()

  return counter
}

console.log(consonantVowelCounter('anime'))

// Shift an array by X to right.
// Example [1,2,3,4,5] after shifting to right [5,1,2,3,4]

// const arrayShift = arr  => {
//   let newArr = []
//   arr.map((val,i, arr) =>  i   )
//   return newArr
// }

// console.log(
// arrayShift([1,2,3,4,5])
// )
