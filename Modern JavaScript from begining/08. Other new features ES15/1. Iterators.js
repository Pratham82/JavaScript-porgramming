// Iterators

function namesIterators(namesArr) {
	let start = 0;

	return {
		next: function () {
			return start < namesArr.length
				? {
						value: namesArr[start++],
						done: false,
				  }
				: { done: true };
		},
	};
}

// Creating an array

const arrOfNames = ["Josh", "Corey", "Travis"];

// Initialize iterator and pass in names array

const names = namesIterators(arrOfNames);

/*
1. Calling it every time it will give us the element in an array as object.
2. Once all the elements are iterated over then we will get the value true.
*/
// console.log(names.next()); //{value: "Josh", done: false}
// console.log(names.next()); //{value: "Corey", done: false}
// console.log(names.next()); //{value: "Travis", done: false}
// console.log(names.next()); //{done: true}
// console.log(names.next()); //{done: true}

/*
We can also get the values from the iterator
*/

console.log(names.next().value); //Josh
console.log(names.next().value); //Corey
console.log(names.next().value); //Travis
console.log(names.next().value); //Undefined
