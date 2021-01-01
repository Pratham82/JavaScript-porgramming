/*
Repeating Letters N Times
Create a function that repeats each character in a string n times.

Examples
repeat("mice", 5) ➞ "mmmmmiiiiiccccceeeee"

repeat("hello", 3) ➞ "hhheeellllllooo"

repeat("stop", 1) ➞ "stop"

*/

function repeat(str, n) {
	return str
		.split("")
		.map((i) => i.repeat(n))
		.join("");
}

console.log(repeat("hello", 3)); //hhheeellllllooo

console.log(repeat("mice", 5)); //mmmmmiiiiiccccceeeee

console.log(repeat("hi", 2)); //hhii;

console.log(repeat("123", 3)); //hhii;
