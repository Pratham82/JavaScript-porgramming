//Reverse String with split method and without split and without split

function reverseStr(str) {
	// With split
	//return str.split("").reverse().join("");
	let rev = "";
	for (var i = str.length - 1; i >= 0; i--) {
		rev += str[i];
	}
	return rev;
}
