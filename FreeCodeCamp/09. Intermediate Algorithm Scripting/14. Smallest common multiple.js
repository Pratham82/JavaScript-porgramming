// Intermediate Algorithm Scripting: Smallest Common Multiple

/*
Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.
*/

function smallestCommons(arr) {
	let gcd = (n1, n2) => {
		if (n1 == 0) return n2;
		return gcd(n2 % n1, n1);
	};

	let lcm = (n1, n2) => {
		return (n1 * n2) / gcd(n1, n2);
	};

	let [num1, num2] = arr.sort((a, b) => a - b);
	let LCM = num1;

	while (num1 < num2) {
		LCM = lcm(LCM, ++num1);
	}
	return LCM;
}

smallestCommons([1, 5]);

console.log(smallestCommons([1, 5])); // 60
console.log(smallestCommons([2, 10])); // 2520
console.log(smallestCommons([1, 13])); //360360
