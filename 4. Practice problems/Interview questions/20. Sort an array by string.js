// Sort an Array by String Length
// Create a function that takes an array of strings and return an array, sorted from shortest to longest.

const sortByLength = (arr) => arr.sort((a, b) => a.length - b.length);

console.log(sortByLength(["Google", "Apple", "Microsoft"]));
console.log(sortByLength(["Leonardo", "Michelangelo", "Raphael", "Donatello"]));

const highLow = (str) => {
	let arr = str.split(" ").map((val) => parseInt(val));
	return `${Math.max(...arr)} ${Math.min(...arr)}`;
};

console.log(highLow("1 2 3 4 5"));
