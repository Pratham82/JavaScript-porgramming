//Cycling Through Strings
//Given two strings, repeatedly cycle through all of the letters in the first string until it is the same length as the second string.
//
//Examples
//stringCycling("abc", "hello") ➞ "abcab"
//
//stringCycling("programming", "edabit") ➞ "progra"

const stringCycling = (a, b) => a.repeat(b.length).substring(0, b.length)

console.log(stringCycling('abc', 'hello'))
