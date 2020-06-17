// Intermediate Algorithm Scripting: Sorted Union

/*
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.
*/

function uniteUnique(arr) {
	var fin_arr = [];
	var new_arr = Object.values(arguments);
	for (var i in new_arr) {
		for (var j in new_arr[i]) {
			// console.log(new_arr[i][j]);
			if (fin_arr.includes(new_arr[i][j])) {
				continue;
			} else {
				fin_arr.push(new_arr[i][j]);
			}
		}
	}
	return fin_arr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
console.log(uniteUnique([1, 2, 3], [5, 2, 1]));
console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]));
