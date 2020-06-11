// Basic Algorithm Scripting: Falsy Bouncer

/*
Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
*/

function bouncer(arr) {
	let arr_new = [];
	for (var i = 0; i < arr.length; i++) {
		if (arr[i]) {
			arr_new.push(arr[i]);
		}
	}
	return arr_new;
}

bouncer([7, "ate", "", false, 9]);

console.log(bouncer([7, "ate", "", false, 9]));
