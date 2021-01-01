/*
Recursion: Reverse a String
Write a function that reverses a string. Make your function recursive.

Examples
reverse("hello") ➞ "olleh"

reverse("world") ➞ "dlrow"

reverse("a") ➞ "a"

reverse("") ➞ ""
*/

function reverse(str) {
	if (str == "") {
		return "";
	} else {
		return reverse(str.substr(1)) + str.charAt(0);
	}
}

// console.log(reverse("world")); //dlrow
console.log(reverse("hello")); //olleh
console.log(reverse("username")); //emanresu
