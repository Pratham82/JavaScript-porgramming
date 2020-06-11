// Basic Algorithm Scripting: Slice and Splice

/*
You are given two arrays and an index.

Use the array methods slice and splice to copy each element of the first array into the second array, in order.

Begin inserting elements at index n of the second array.

Return the resulting array. The input arrays should remain the same after the function runs.
*/

function frankenSplice(arr1, arr2, n) {
	let new_arr = arr2.slice();
	new_arr.splice(n, 0, ...arr1);
	return new_arr;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
//OP :[4, 1, 2, 3, 5, 6]
