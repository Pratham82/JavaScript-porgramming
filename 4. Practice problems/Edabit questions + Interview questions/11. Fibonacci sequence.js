// Give the fibonacci numbers till the given range

function fibonacciSeq(n) {
	let a1 = [0, 1];
	for (var i = 2; i < n + 1; i++) {
		a1.push(a1[i - 2] + a1[i - 1]);
	}
	return a1;
	//With recursion
	// if (n < 2) {
	// 	return n;
	// } else {
	// 	return fibonacciSeq(n - 1) + fibonacciSeq(n - 2);
	// }
}

console.log(fibonacciSeq(10));
