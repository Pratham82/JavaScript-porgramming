// Basic Algorithm Scripting: Where do I Belong

/*
Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).
*/
function getIndexToIns(arr, num) {
	for (var i = 0; i < arr.length; i++) {
		for (var j = i + 1; j < arr.length; j++) {
			if (arr[i] > arr[j]) {
				var temp = 0;
				temp = arr[i];
				arr[i] = arr[j];
				arr[j] = temp;
			}
		}
	}
	let val = 0;
	for (var k = 0; k < arr.length; k++) {
		if (num > arr[k]) {
			val++;
			//val = arr.indexOf(arr[k]) + 1;one test case not passing
		}
	}
	return val;
}

console.log(getIndexToIns([5, 3, 20, 3], 5));
console.log(getIndexToIns([10, 20, 30, 40, 50], 30));
console.log(getIndexToIns([2, 5, 10], 15));
