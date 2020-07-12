// Intermediate Algorithm Scripting: Pig Latin

/*
Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add "ay" to it.

- If a word begins with a vowel, just add "way" at the end.

Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.
*/

function translatePigLatin(str) {
	// FIrst expression states that the word which starts with vowels then add the
	// Second expression checks if the word stating with the consonant and moves the consonants to the end and add ay to it
	return str
		.replace(/^[aeiou]\w*/, "$&way")
		.replace(/(^[^aeiou]+)(\w*)/, "$2$1ay");
}

console.log(translatePigLatin("consonant")); //onsonantcay
console.log(translatePigLatin("california")); //aliforniacay
console.log(translatePigLatin("algorithm")); //algorithmway
console.log(translatePigLatin("glove")); //algorithmway
