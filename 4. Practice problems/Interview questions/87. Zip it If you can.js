/*
Zip It, If You Can?

Given an array of women and an array of men, either:

    Return "sizes don't match" if the two arrays have different sizes.
    If the sizes match, return an array of pairs, with the first woman paired with the first man, second woman paired with the second man, etc.

Examples

zipIt(["Elise", "Mary"], ["John", "Rick"])
 ➞ [["Elise", "John"], ["Mary", "Rick"]]
 */

const zipIt = (w, m) =>
  w.length === m.length ? w.map((v, i) => [v, m[i]]) : "sizes don't match"

console.log(zipIt(['Elise', 'Mary'], ['John', 'Rick']))
console.log(zipIt(['Ana', 'Amy', 'Lisa'], ['Bob', 'Josh']))
