// Intermediate Algorithm Scripting: Missing letters

/*
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.
*/

function fearNotLetter(str) {
	let missingWord;
	for (var i = 0; i < str.length - 1; i++) {
		var pos1 = str.charCodeAt(i);
		var pos2 = str.charCodeAt(i + 1);

		if (pos2 - pos1 !== 1) {
			missingWord = String.fromCharCode(pos1 + 1);
			break;
		}
	}
	return missingWord;
}

console.log(fearNotLetter("abce"));
console.log(fearNotLetter("abce"));
console.log(fearNotLetter("abcdefghjklmno"));
