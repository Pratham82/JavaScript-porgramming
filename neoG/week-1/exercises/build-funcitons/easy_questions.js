/*
* Question 1
Given a and b, your function should return the value of ab
Example:
Input: power(2,3) ––> Output: 8
*/

const power = (num, pow) => Math.pow(num, pow)

console.log(power(10, 2)) // 100
console.log(power(25, 2)) // 625
console.log(power(2, 3)) // 8

/*
* Question 2
Given length of a regular hexagon, your function should return area of the hexagon.
Example:
Input: areaOfHexagon(10) ––> Output: 259.80
*/

const areaOfHexagon = num =>
  (((3 * Math.sqrt(3)) / 2) * Math.pow(num, 2)).toFixed(2)

console.log(areaOfHexagon(10)) // 259.81
console.log(areaOfHexagon(30)) // 259.81

/*
* Question 3
Given a sentence, your functions should return the number of words in the sentence.
Example:
Input: noOfWords(We are neoGrammers) ––> Output: 3
*/

const noOfWords = sentence => sentence.split(' ').length
console.log(noOfWords('We are neoGrammers'))

/*
* Question 4
Given n numbers, your function should return the minimum of them all. The number of parameters won't be accepted from user.
Example:
Input: findMin(3,5) ––> Output: 3
Input: findMin(3,5,9,1) ––> Output: 1
(Hint: Lookup rest parameters in JavaScript)
*/

// ES6 way
const findMin = (...numbers) => Math.min(...numbers)

// Older JS syntax
function findMinOld() {
  return Math.min(...arguments)
}

console.log(findMin(3, 5)) // 3
console.log(findMinOld(3, 5)) // 3
console.log(findMin(3, 5, 9, 1)) // 1
console.log(findMinOld(3, 5, 9, 1)) // 1

/*
* Question 5
Given n numbers, your function should return the maximum of them all. The number of parameters won't be accepted from user.
Example:
Input: findMax(3,5) ––> Output: 5
Input: findMax(3,5,9,1) ––> Output: 9
(Hint: Lookup rest parameters in JavaScript)
*/

const findMax = (...numbers) => Math.max(...numbers)

console.log(findMax(3, 5)) // 5
console.log(findMax(3, 5, 9, 1)) // 9

/*
*  Question 6
Given three angles of a triangle, your function should return if it is a scalene, isosceles, equilateral triangle or not a triangle at all. Example:
Input: typeOfTriangle(30, 60, 90) ––> Output: Scalene Triangle
*/

const typeOfTriangle = (s1, s2, s3) => {
  let res
  if (s1 + s2 + s3 !== 180) return 'not a triangle'
  if (s1 === s2 && s2 === s3  && s1 === s3 ) {
    res = 'Equilateral triangle'
  } else if (s1 === s2 || s2 === s3 || s1 === s3) {
    res = 'Isosceles Triangle'
  } else {
    res = 'Scalene Triangle'
  }
  return res
}

console.log(typeOfTriangle(30, 60, 90))
console.log(typeOfTriangle(60, 60, 60))
console.log(typeOfTriangle(50, 50, 80 ))
