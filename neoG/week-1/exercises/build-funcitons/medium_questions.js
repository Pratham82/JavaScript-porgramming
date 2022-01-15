/*
* Question 1
Given an array, your function should return the length of the array.
Example:
Input: arrayLength([1,5,3,7,8]) ––> Output: 5
*/
const arrayLength = arr => arr.length
console.log(arrayLength([1, 5, 3, 7, 8]))

/*
* Question 2
Given an array and an item, your function should return the index at which the item is present.
Example:
Input: indexOf([1,6,3,5,8,9], 3) ––> Output: 2
*/

// * predefined method
// const indexOf = (arr, num) => arr.indexOf(num)
// console.log(indexOf([1, 6, 3, 5, 8, 9], 3))

// * my implementation
const indexOf = (arr, num) => {
  for (let i = 0; i < arr.length; i++) if (arr[i] === num) return i
}
console.log(indexOf([1, 6, 3, 5, 8, 9], 3))

/*
* Question 3
Given an array and two numbers, your function should replace all entries of first number in an array with the second number.
Example:
Input: replace([1,5,3,5,6,8], 5, 10) ––> Output: [1,10,3,10,6,8]
*/

const replace = (arr, oldNum, newNum) =>
  arr.map(val => (val === oldNum ? newNum : val))

// const replaceOld = (arr, oldNum, newNum) => {
//   let resArr = []
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === oldNum) {
//       resArr.push(newNum)
//     } else {
//       resArr.push(arr[i])
//     }
//   }
//   return resArr
// }
console.log(replace([1, 5, 3, 5, 6, 8], 5, 10))
console.log([1, 5, 3, 5, 6, 8].map(val => val))
// console.log(replaceOld([1, 5, 3, 5, 6, 8], 5, 10))

/*
* Question 4
Given two arrays, your function should return single merged array.
Example:
Input: mergeArray([1,3,5], [2,4,6]) ––> Output: [1,3,5,2,4,6]
*/
const mergeArray = (arr1, arr2) => [...arr1, ...arr2]
console.log(mergeArray([1, 3, 5], [2, 4, 6]))

/*
* Question 5
Given a string and an index, your function should return the character present at that index in the string.
Example:
Input: charAt("neoGcamp", 4) ––> Output: c
*/
const charAt = (str, i) => str[i]
const charAt2 = (str, i) => str.charAt(i)
console.log(charAt('neoGcamp', 4))
console.log(charAt2('neoGcampe', 4))

/*
* Question 6
Given two dates, your function should return which one comes before the other.
Example:
Input: minDate('02/05/2021', '24/01/2021') ––> Output: 24/01/2021
*/
const convertToDate = str => new Date(str)
const minDate = (date1, date2) => (date1 > date2 ? date2 : date1)

// console.log(minDate('02/05/2021', '24/01/2021'))
console.log(minDate('01/24/2021', '02/05/2021'))
