/*
Transform into an Array with No Duplicates
A set is a collection of unique items. A set can be formed from an array from removing all duplicate items.

[1, 3, 3, 5, 5, 5]
// original array

[1, 3, 5]
// original array transformed into a set
*/

function set(arr) {
	return [...new Set(arr)];
}

console.log(set([1, 3, 3, 5, 5]));
