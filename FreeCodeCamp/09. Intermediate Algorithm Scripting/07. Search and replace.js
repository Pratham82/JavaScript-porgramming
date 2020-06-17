// Intermediate Algorithm Scripting: Search and Replace

/*
Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).
*/

function myReplace(str, before, after) {
	var new_After = "";
	// IF the old word starts with uppercase then make the new word's first character uppercase
	if (/^[A-Z]/.test(before)) {
		new_After = after.replace(
			after.charAt(0),
			after.charAt(0).toUpperCase()
		);
	} else {
		// If the word doest not starts with the upper case then keep the new word same.
		new_After = after;
		console.log();
	}
	// Basic replace method on the string
	var new_str = str.replace(before, new_After);
	return new_str;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

console.log(
	myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped")
);

console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));
console.log(myReplace("Let us go to the store", "store", "mall"));

var st = "ererer";
