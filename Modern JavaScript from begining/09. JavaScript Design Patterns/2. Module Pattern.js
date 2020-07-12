/*
* Module pattern/ Reveling module pattern

1. ES2015 introduced actual modules in JS meaning that we can use separate files to export modules which are just custom pieces of code and import them into a new file.

2. However this is still not supported in browsers.

3. You'll have to use a compiler like Babel along with a module loader like web pack for that to work

4. module pattern that allows us to break up parts of our code into self-contained modules with private properties and methods or private variables and functions.
*/

// Basic structure
(function () {
	// Declare private variables /functions

	return {
		// Declare public variables /functions
	};
})();

// Standard module pattern
const UIController = (function () {
	//* We can access any variables that we put inside the function
	//* Both of these variables are private we cannot access them outside of the function
	//* The variables we return will be public, and anyone can access them

	//***** Private *****
	let text = "New text here 👍 Using module pattern ";

	const changeText = function () {
		const el = document.querySelector("#testing-el");
		el.textContent = text;
	};

	//***** Public *****
	return {
		callChangeText: () => {
			changeText();
			console.log(text);
		},
	};
})();

//* Directly accessing the private variables:
//* It will not work because the variables scope is limited to the function
// console.log(UIController.text); //undefined
// console.log(UIController.changeText()); // Uncaught TypeError: UIController.changeText is not a function

//* For accessing both of them we will return those variable inside an object then we can access those private variables and functions

console.log(UIController.callChangeText()); // This will change the DOM's text content
// Logged: New text here 👍 Using module pattern

// Revealing module pattern
//* Very Similar to module pattern, instead of returning our own public function, you basically map an object literal to private functions that you want ot reveal, thats why its called revealing pattern.

// Revealing module pattern
const ItemController = (function () {
	// This can be thought of as our state
	// underscore in the start of the variable is convention for declaring private variables.
	let data = [];

	// Private methods
	function add(item) {
		data.push(item);
		console.log("Item added..");
	}

	function get(id) {
		return data.find((item) => {
			return item.id === id;
		});
	}

	// We will use object literals for logging private methods and variables
	// If we don't pass the functions as the object literals then we cannot access those functions, those functions will get private.
	return {
		addPub: add,
		getPub: get,
	};
})();

// Adding items
ItemController.addPub({ id: 1, type: "Flowers 💮" }); //Item added..
ItemController.addPub({ id: 2, type: "Package 📦" }); //Item added..
ItemController.addPub({ id: 3, type: "Christmas tree 🎄" }); //Item added..

// Accessing added items
console.log(ItemController.getPub(1)); //{id: 1, type: "Flowers 💮"}
console.log(ItemController.getPub(2)); //{id: 2, type: "Package 📦"}
console.log(ItemController.getPub(3)); //{id: 3, type: "Christmas tree 🎄"}
