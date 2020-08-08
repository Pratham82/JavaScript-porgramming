/*
Omnipresent Value
A value is omnipresent if it exists in every subarray inside the main array.

To illustrate:

[[3, 4], [8, 3, 2], [3], [9, 3], [5, 3], [4, 3]]
 3 exists in every element inside this array, so is omnipresent.
*/

function isOmnipresent(arr, val) {
	return arr.flat().filter((value) => value == val).length >= arr.length;
}

console.log(
	isOmnipresent(
		[
			[1, 1],
			[1, 3],
			[5, 1],
			[6, 1],
		],
		1
	)
); //true

console.log(
	isOmnipresent(
		[
			[1, 1],
			[1, 3],
			[5, 1],
			[6, 1],
		],
		6
	)
); //false
