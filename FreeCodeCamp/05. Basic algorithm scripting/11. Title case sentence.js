// Basic Algorithm Scripting: Title Case a Sentence

/*
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
*/

function titleCase(str) {
	// let str_arr = str.split(" ");
	let new_str = str.toLowerCase();
	let final_str;
	final_str = new_str.replace(/(^|\s)\S/g, (c) => c.toUpperCase());
	return final_str;
}

titleCase("I'm a little tea pot");

console.log(titleCase("I'm a little tea pot"));
// OP: I'm A Little Tea Pot
