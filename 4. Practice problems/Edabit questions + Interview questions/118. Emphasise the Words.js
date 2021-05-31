//Emphasise the Words
//Create a function that returns a capitalized version of the string passed. The first letter of each word in the string should be capitalized while the rest of each word should be lowercase.
//
//Examples
//emphasise("hello world") ➞ "Hello World"
//
//emphasise("GOOD MORNING") ➞ "Good Morning"
//
//emphasise("99 red balloons!") ➞ "99 Red Balloons!"

const emphasise = (str) =>
  str.length
    ? str
        .split(' ')
        .map((val) => val.toLowerCase())
        .map((val) => val[0].toUpperCase() + val.slice(1))
        .join(' ')
    : str

console.log(emphasise('hello world'))
console.log(emphasise(''))
