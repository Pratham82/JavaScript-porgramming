let get2ndLargest = (arr) => {
	//First convert sort the array and convert array to set
	let set = new Set(arr.sort((a, b) => a - b));

	// Converting set to array and
	let arr2 = [...set];

	//returning 2nd last element which will be the 2nd largest value in array
	return arr2.slice(-2)[0];
};

get2ndLargest([45, 45, 4, 8, 69, 74]);
console.log(get2ndLargest([45, 45, 4, 8, 69, 74]));

let arr1 = [45, 45, 4, 8, 69, 74, 45];
let new1 = [...new Set(arr1)];
console.log(new1);
