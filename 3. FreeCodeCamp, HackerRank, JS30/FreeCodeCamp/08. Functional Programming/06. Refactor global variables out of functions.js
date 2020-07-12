// Functional Programming: Refactor Global Variables Out of Functions

/*
Principles for functional programming: 
1) Don't alter a variable or object - create new variables and objects and return them if need be from a function.

2) Declare function arguments - any computation inside a function depends only on the arguments, and not on any global object or variable.
*/

/*
Rewrite the code so the global array bookList is not changed inside either function. The add function should add the given bookName to the end of the array passed to it and return a new array (list). The remove function should remove the given bookName from the array passed to it.
*/

// The global variable
var bookList = [
	"The Hound of the Baskervilles",
	"On The Electrodynamics of Moving Bodies",
	"Philosophiæ Naturalis Principia Mathematica",
	"Disquisitiones Arithmeticae",
];

// Change code below this line
function add(localBookList, bookName) {
	let newBookList = localBookList.slice(); //This will create a new copy of a entered bookList
	newBookList.push(bookName); // Now we are modifying out newly created copy so that our global array is not changed
	return newBookList;

	// Change code above this line
}

// Change code below this line
function remove(localBookList, bookName) {
	let newBookList = localBookList.slice(); //This will create a new copy of a entered bookList
	var book_index = localBookList.indexOf(bookName);
	if (book_index >= 0) {
		newBookList.splice(book_index, 1);
		return newBookList;

		// Change code above this line
	}
}

var newBookList = add(bookList, "A Brief History of Time");
var newerBookList = remove(bookList, "On The Electrodynamics of Moving Bodies");
var newestBookList = remove(
	add(bookList, "A Brief History of Time"),
	"On The Electrodynamics of Moving Bodies"
);

console.log(bookList);
console.log(newBookList);
console.log(newerBookList);
