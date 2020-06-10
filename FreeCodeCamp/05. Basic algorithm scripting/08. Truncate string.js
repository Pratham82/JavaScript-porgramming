// Basic Algorithm Scripting: Truncate a String

/*
Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

*/

function truncateString(str, num) {
	let new_str = str.replace(str.slice(num), "...");
	if (num >= str.length) {
		return str;
	} else {
		new_str = str.replace(str.slice(num), "...");
		return new_str;
	}
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
console.log(
	truncateString(
		"A-tisket a-tasket A green and yellow basket",
		"A-tisket a-tasket A green and yellow basket".length + 2
	)
);
// let string = "testing";
// string = "A-tisket a-tasket A green and yellow basket";

// let new_str = string.replace(string.slice(8), "...");

// console.log(new_str);
