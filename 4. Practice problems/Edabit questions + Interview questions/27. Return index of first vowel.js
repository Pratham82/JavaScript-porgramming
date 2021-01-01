// Return the Index of the First Vowel
// Create a function that returns the index of the first vowel in a string.
// firstVowel("apple") ➞ 0

// firstVowel("hello") ➞ 1

function firstVowel(str) {
	return str.search(/[aeiou]/gi);
}

console.log(firstVowel("ppAle"));
