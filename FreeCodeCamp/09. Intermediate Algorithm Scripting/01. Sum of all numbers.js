// Intermediate Algorithm Scripting: Sum All Numbers in a Range

/*
We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.
*/
function sumAll(arr) {
	arr.sort((a, b) => a - b);
	var start = arr[0];
	var end = arr[1];
	var sum = 0;
	for (var i = start; i <= end; i++) {
		sum += i;
	}
	return sum;
}

sumAll([4, 1]);

console.log(sumAll([4, 1])); //10
console.log(sumAll([5, 10])); //45
