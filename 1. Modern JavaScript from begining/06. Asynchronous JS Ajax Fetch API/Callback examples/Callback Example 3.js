//Eg. 1
// setTimeout(() => {
// 	console.log("this function will be called back after 0 secs");
// }, 0);

// console.log("----------------------------");
// Example 1

const fn1 = function () {
	console.log(`This is function 1`);
};
const fn2 = (callback) => {
	console.log(`This is function 2`);
	callback();
};

fn2(fn1);

/*
Here we are passing fn1 as a function body and not executing that function, but we can execute that function at any point inside the fn2

fn2(fn1);

This will return: 
This is function 2
This is function 1
*/

// Example 2

console.log("Using normal functions");
let calc = function (n1, n2, op) {
	if (op === "+") {
		return n1 + n2;
	} else if (op === "-") {
		return n1 - n2;
	} else if (op === "*") {
		return n1 * n2;
	} else if (op === "/") {
		return n1 / n2;
	}
};

console.log(calc(45, 7, "+"));
console.log(calc(49, 7, "-"));
console.log(calc(7, 7, "*"));
console.log(calc(49, 7, "/"));

// If the function cal is some part of library then user need pass the number and calculation type and should get the result. so our calc function should implement all the possible functionalities

// The best way to do that we can take the functionalities outside the main function so we can make our function more abstract

const add = (n1, n2) => console.log(n1 + n2);
const multiply = (n1, n2) => console.log(n1 * n2);
const subtract = (n1, n2) => console.log(n1 - n2);
const divide = (n1, n2) => console.log(n1 / n2);

let calc2 = function (callback, n1, n2) {
	if (typeof callback === "function") {
		console.log("Using callback functions");
		callback(n1, n2);
	}
};

calc2(add, 10, 20);

// When we want to do something only once and we don't want to give that function any name then we can use an anonymous function

calc2(
	(n1, n2) => {
		console.log(n1 ** n2);
	},
	2,
	2
);

// Practical example

let myArr = [
	{ num: 8, str: " Cherry 🍒" },
	{ num: 10, str: " Banana 🍌" },
	{ num: 5, str: " Apple 🍎" },
	{ num: 20, str: " Watermelon 🍉 " },
	{ num: 14, str: " Kiwi 🥝 " },
];

// We can use the callback function for sorting an array that will make the decision how the sort is going to happen

// Sort will modify the actual array

console.log(
	myArr.sort(function (var1, var2) {
		if (var1.num < var2.num) {
			return -1;
		} else {
			return 1;
		}
	})
);

//Shorter code
console.log(myArr.sort((v1, v2) => (v1.num < v2.num ? -1 : 1)));

/*

Both versions will give the same output
Output:
[
  { num: 5, str: ' Apple 🍎' },  
  { num: 8, str: ' Cherry 🍒' }, 
  { num: 10, str: ' Banana 🍌' },
  { num: 14, str: ' Kiwi 🥝 ' },
  { num: 20, str: ' Watermelon 🍉 ' }
]

*/

console.log(myArr);
