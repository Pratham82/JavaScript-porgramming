//* Without try catch block 🐴
//myFunc2();
// The program will not continue because we are not handling
//console.log("Program doesn't continues after this error 😢");

//* With try catch block🥅
try {
	// Producing a reference error
	myFunction();
} catch (e) {
	console.log(e); // ReferenceError: myFunction is not defined at 1. try catch blocks.js:3

	//*  logging only error message
	//console.log(e.message); //myFunction is not defined

	//* logging error name (type of error)
	// console.log(e.name); //ReferenceError

	//* To check if certain kind of error is
	//console.log(e instanceof TypeError); // false
	//console.log(e instanceof ReferenceError); // true
	// Returns true if its a correct error ref or else returns false

	console.log("The function is not declared 🤷‍♀ what are you doing ?");
} finally {
	console.log("This will runs no matter what happens in try catch block 💯");
}

// Because we are writing the code which is causing error inside try block and handling it afterwards program will continue and this line will be logged
console.log("Program continues after error 😏");

//*********Producing typeError *******
console.log("\n");
try {
	// Producing a typeError
	null.myFunction();
} catch (e) {
	//console.log(e); //TypeError: Cannot read property 'myFunction' of null at 1. try catch blocks.js:34

	//*  We can format the errors
	console.log(`(${e.name}) Why are you calling function on a null 🤷‍♀`);
}

//*********Producing SyntaxError *******
console.log("\n");
try {
	// Producing a syntaxError
	eval("Hello world");
} catch (e) {
	console.log(e); //SyntaxError: Unexpected identifier
}

//*********Producing URIError *******
console.log("\n");
try {
	// Producing a URIError
	decodeURIComponent("%");
} catch (e) {
	console.log(e); //URIError: URI malformed
	// at decodeURIComponent (<anonymous>)
	// at 1. try catch blocks.js:56
}

//*********Creating our own error *******
const user = { email: "johnKed@gmail.com" };

try {
	if (!user.name) {
		throw new SyntaxError("User is not defined");
	}
} catch (e) {
	//console.log(e); // SyntaxError: User is not defined at 1. try catch blocks.js:69

	// We can formate the error
	console.log(`User Error: ${e.message}`);
}
