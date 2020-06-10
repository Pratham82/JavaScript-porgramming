// Basic Algorithm Scripting: Find the Longest Word in a String

/*
Return the length of the longest word in the provided sentence.

Your response should be a number.
*/

function findLongestWordLength(str) {
	let String_sp = str.split(" ");
	let max_count = 0;
	for (var i = 0; i < String_sp.length; i++) {
		if (String_sp[i].length > max_count) {
			max_count = String_sp[i].length;
		}
	}
	return max_count;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
console.log(
	"findLongestWordLength:",
	findLongestWordLength("The quick brown fox jumped over the lazy dog")
);

// String = "The quick brown fox jumped over the lazy dog";
// let String_sp = String.split(" ");
// let max_count = 0;
// for (var i = 0; i < String_sp.length; i++) {
// 	if (String_sp[i].length > max_count) {
// 		max_count = String_sp[i].length;
// 	}
// }

// console.log(max_count);
