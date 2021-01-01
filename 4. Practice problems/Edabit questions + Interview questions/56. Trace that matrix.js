// Trace That Matrix
// Given a square matrix (i.e. same number of rows as columns), its trace is the sum of the entries in the main diagonal (i.e. the diagonal line from the top left to the bottom right).

// As an example, for:

// [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ]
// ... the trace is 1 + 5 + 9 = 15.

// Write a function that takes a square matrix and computes its trace.

// Examples
// trace([
//   [1, 4],
//   [4, 1]
// ]) ➞ 2

// // 1 + 1 = 2

const trace = (arr) => {
	// let sum = 0;
	// for (let i = 0; i < arr.length; i++) {
	// 	sum += arr[i][i];
	// }
	// return sum;
	return arr.reduce((acc, curr, i) => acc + curr[i], 0);
};

console.log(
	trace([
		[1, 4],
		[4, 1],
	])
);

console.log(
	trace([
		[1, 2, 3],
		[4, 5, 6],
		[7, 8, 9],
	])
);
