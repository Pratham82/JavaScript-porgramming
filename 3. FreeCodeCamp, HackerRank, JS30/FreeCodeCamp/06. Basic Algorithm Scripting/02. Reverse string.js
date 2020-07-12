// Basic Algorithm Scripting: Reverse a String

//  Reverse the provided string.

function reverseString(str) {
	var RevString = "";
	for (var i = str.length - 1; i >= 0; i--) {
		RevString += str[i];
	}
	return RevString;
}

reverseString("hello");
console.log(reverseString("hello"));
