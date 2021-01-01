/*
Sum of Two Numbers in Array Equal to Given Number

Create a function that takes an array of numbers arr and a number n. Return true if the sum of any two elements is equal to the given number. Otherwise, return false.

Examples
checkSum([10, 12, 4, 7, 9, 11], 16) ➞ true

checkSum([4, 5, 6, 7, 8, 9], 13) ➞ true
*/

const checkSum = (arr, n) => {
  let val = false
  /*
  // Using for loop
  for (var i = 0; i <= arr.length; i++) {
    if (arr[i] + arr[i + 1] === n) {
      val = true
      break
    }
  }
  return val
  
  // Using Map
  arr.map((v, i, arr) => {
    if (arr[i] + arr[i + 1] === n) {
      val = true
    }
  })
  return val
  */

  // More consice
  //return arr.map((v, i, arr) => arr[i] + arr[i + 1] === n).includes(true)
  //  return val
  /*
  for (var i = 0; i <= arr.length; i++) {
    for (var j = i + 1; j <= arr.length; j++) {
      if (arr[i] + arr[j] === n) {
        val = true
        break
      }
    }
  }

  return val

  // Using nested Map
  // Iterating over the array starts form index 0
  arr.map((v1, i, array1) => {
    // Iterating over the array starts from index + 1 so it will not add itself add the next
    arr.map((v2, j, array2) => {
      // Add the value of current element into to the value of new array and check if the sum is equal to n, if it's equal to n then change the value of val to true else change back to false
      array1[i] + array2[j + 1] === n && (val = true)
    })
  })
  */

  arr.map((v1, i, array1) => {
    arr.map((v2, j, array2) => {
      array1[i] + array2[j + 1] === n && (val = true)
    })
  })
  return val
}

console.log(checkSum([10, 12, 4, 7, 9, 11], 16))
console.log(checkSum([4, 5, 6, 7, 8, 9], 13))
console.log(checkSum([0, 9, 7, 23, 19, 18, 17, 66], 39))
console.log(checkSum([0, 98, 76, 23], 174))
console.log(checkSum([10, 15, 3, 7], 17))
console.log(checkSum([10, 1, 10, 69], 20))
