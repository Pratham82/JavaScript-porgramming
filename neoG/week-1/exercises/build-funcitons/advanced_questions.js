/*
* Question 1
Given Write a function which generates a secret code from a given string, by shifting characters of alphabet by N places. Example:
Input: encodeString("neogcamp", 2) ––> Output: pgqiecor
Explanation: 2 represents shifting alphabets by 2 places. a –> c, b –> d, c –> e and so on.
*/
console.log('z'.charCodeAt())
console.log(''.charAt())
const encodeString = (str, shift) => {
  newStr = ''
  for (c of str)
    newStr += String.fromCharCode(
      c.charCodeAt() + shift <= 122
        ? c.charCodeAt() + shift
        : c.charCodeAt() + shift - 26
    )
  return newStr
}

console.log(encodeString('neogcamp', 2))
console.log(encodeString('zen', 2))

/*
* Question 2
Given a sentence, return a sentence with first letter of all words as capital.
Example:
Input: toSentenceCase('we are neoGrammers') ––> Output: We Are NeoGrammers
*/
const toSentenceCase = sentence =>
  sentence
    .trim()
    .split(' ')
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(' ')
console.log(toSentenceCase('   we are neoGrammers   '))

/*
* Question 3
Given an array of numbers, your function should return an array in the ascending order.
Example:
Input: sortArray([100,83,32,9,45,61]) ––> Output: [9,32,45,61,83,100]
*/
const sortArray = arr => arr.sort((a, b) => a - b)

console.log(sortArray([100, 83, 32, 9, 45, 61]))
console.log(sortArray([1, 102, 100, 102, 83, 32, 9, 45, 61]))

/*
* Question 4
Given a sentence, your function should reverse the order of characters in each word, keeping same sequence of words.
Example:
Input: reverseCharactersOfWord('we are neoGrammers') –––> Output: ew era sremmarGoen
*/

const reverseCharactersOfWord = sentence =>
  sentence
    .split(' ')
    .map(word => word.split('').reverse().join(''))
    .join(' ')

console.log(reverseCharactersOfWord('we are neoGrammers'))
