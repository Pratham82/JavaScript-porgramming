// Basic Algorithm Scripting: Return Largest Numbers in Arrays

/*
Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].
*/

function largestOfFour(arr) {
	var max_values = [];
	for (let i = 0; i < arr.length; i++) {
		// console.log(inArr[i]);
		let inner_arr = arr[i];
		let max_val = arr[i][0];
		for (var j = 0; j < inner_arr.length; j++) {
			if (inner_arr[j] > max_val) {
				max_val = inner_arr[j];
			}
		}
		max_values.push(max_val);
	}
	return max_values;
}

largestOfFour([
	[4, 5, 1, 3],
	[13, 27, 18, 26],
	[32, 35, 37, 39],
	[1000, 1001, 857, 1],
]);

console.log(
	largestOfFour([
		[4, 5, 1, 3],
		[13, 27, 18, 26],
		[32, 35, 37, 39],
		[1000, 1001, 857, 1],
	])
);

console.log(
	largestOfFour([
		[17, 23, 25, 12],
		[25, 7, 34, 48],
		[4, -10, 18, 21],
		[-72, -3, -17, -10],
	])
);

// var inArr = [
// 	[17, 23, 25, 12],
// 	[25, 7, 34, 48],
// 	[4, -10, 18, 21],
// 	[-72, -3, -17, -10],
// ];

// var max_values = [];
// for (let i = 0; i < inArr.length; i++) {
// 	// console.log(inArr[i]);
// 	// let arr = inArr[i];
// 	let max_val = inArr[i][0];
// 	for (var j = 0; j < inArr[i].length; j++) {
// 		if (inArr[i][j] > max_val) {
// 			max_val = inArr[i][j];
// 		}
// 	}
// 	max_values.push(max_val);
// }
// console.log("max_val: ", max_values);
