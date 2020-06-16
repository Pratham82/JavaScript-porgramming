// Intermediate Algorithm Scripting: Spinal Tap Case

/*
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
*/

function spinalCase(str) {
	var new_str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
	var joined = new_str
		.toLowerCase()
		.split(/(?:_| )+/)
		.join("-");
	return joined;
}

console.log(spinalCase("This Is Spinal Tap")); //OP: this-is-spinal-tap
console.log(spinalCase("The_Andy_Griffith_Show")); //OP: the-andy-griffith-show
