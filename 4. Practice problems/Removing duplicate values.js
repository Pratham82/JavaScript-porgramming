let UniqueValues = (arr) => {
	// Method 1
	// let UniqueArr = [...new Set(arr)];
	// return UniqueArr;
	// Method 2
	return (UniqueArr = [...new Set(arr)]);
};

let arr1 = [45, 45, 4, 8, 69, 74, 45];

console.log(UniqueValues(arr1));
