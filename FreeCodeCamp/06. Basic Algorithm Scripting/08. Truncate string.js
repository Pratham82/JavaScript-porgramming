// Basic Algorithm Scripting: Truncate a String

/*
Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

*/

function truncateString(str, num) {
	let new_str;
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
