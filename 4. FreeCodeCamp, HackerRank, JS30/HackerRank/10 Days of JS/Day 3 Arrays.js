function getSecondLargest(nums) {
	// Complete the function
	let set = new Set(nums.sort((a, b) => a - b));
	let arr = [...set];
	//return arr[arr.length - 2];
	// Alternative for same
	return arr.slice(-2)[0];
}

getSecondLargest([2, 3, 6, 6, 5]);
console.log(getSecondLargest([2, 3, 6, 6, 5]));
