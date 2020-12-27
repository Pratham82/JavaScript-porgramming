/*
Check If It's a Title String
Check if a string is a title string or not. A title string is one which has all the words in the string start with a upper case letter.

Examples
checkTitle("A Mind Boggling Achievement") ➞ true

checkTitle("A Simple Java Script Program!") ➞ true

checkTitle("Water is transparent") ➞ false
  */

const checkTitle = t =>
  t
    .split(' ')
    .map(word => word[0] === word[0].toUpperCase())
    .every(el => el === true)

console.log(checkTitle('A Simple Java Script Program!'))
