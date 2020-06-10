// Basic Algorithm Scripting: Repeat a String Repeat a String

/*
Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.
*/

function repeatStringNumTimes(str, num) {
	let new_str = "";
	if (num > 0) {
		for (var i = 0; i < num; i++) {
			new_str += str;
		}
		return new_str;
	} else {
		return new_str;
	}
}

repeatStringNumTimes("*", 3);
