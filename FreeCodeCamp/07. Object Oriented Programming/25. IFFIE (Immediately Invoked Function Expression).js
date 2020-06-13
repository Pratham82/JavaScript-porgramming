// Object Oriented Programming: Understand the Immediately Invoked Function Expression (IIFE)

/*
A common pattern in JavaScript is to execute a function as soon as it is declared:

Example:
(function () {
  console.log("Chirp, chirp!");
})(); 
1. this is an anonymous function expression that executes right away
2. Outputs "Chirp, chirp!" immediately

1. The function has no name and is not stored in a variable. 
2. The two parentheses () at the end of the function expression cause it to be immediately executed or invoked.
3. This pattern is known as an immediately invoked function expression or IIFE.
*/

/*
Rewrite the function makeNest and remove its call so instead it's an anonymous immediately invoked function expression (IIFE).
*/

function makeNest() {
	console.log("A cozy nest is ready");
}

makeNest();

// IFFIE conversion
(() => console.log("A cozy nest is ready"))();
