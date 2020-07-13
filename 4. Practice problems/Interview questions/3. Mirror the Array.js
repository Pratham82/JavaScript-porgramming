/*
Mirror Array
Given an array, transform that array into a mirror.

Examples
mirror([0, 2, 4, 6]) ➞ [0, 2, 4, 6, 4, 2, 0]

mirror([1, 2, 3, 4, 5]) ➞ [1, 2, 3, 4, 5, 4, 3, 2, 1]

mirror([3, 5, 6, 7, 8]) ➞ [3, 5, 6, 7, 8, 7, 6, 5, 3]
Notes
Do not repeat the last item of the given array.
*/

function mirror(arr) {
	// Method 1
	// let newArr = arr.slice();
	// let rev = arr.reverse();
	// newArr.push(rev.slice(1));
	// return newArr.flat();

	// Method 2
	return [...arr, ...arr.reverse().slice(1)];
}

console.log(mirror([0, 2, 4, 6])); // [0, 2, 4, 6, 4, 2, 0]

console.log(mirror([1, 2, 3, 4, 5])); // [1, 2, 3, 4, 5, 4, 3, 2, 1]

console.log(mirror([3, 5, 6, 7, 8])); //[3, 5, 6, 7, 8, 7, 6, 5, 3]
