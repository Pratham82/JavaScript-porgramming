// Basic Algorithm Scripting: Chunky Monkey
/*
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
*/

function chunkArrayInGroups(arr, size) {
	let new_arr = [];
	for (var i = 0; i < arr.length; i += size) {
		new_arr.push(arr.slice(i, i + size));
		continue;
	}
	return new_arr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
/*
OP: [["a", "b"], ["c", "d"]]
*/
