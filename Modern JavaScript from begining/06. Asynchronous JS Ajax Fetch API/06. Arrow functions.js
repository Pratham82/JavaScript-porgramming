const sayHello = function () {
	console.log("Hello 😄 from normal function");
};

sayHello();

// Converting above function into arrow function

// const sayHelloArrow = () => {
// 	console.log("Hello 😄 form an arrow 🏹 function");
// };

// // Function body with one line can be written in one line
// const sayHelloArrow = () => console.log("Hello 😄 form an arrow 🏹 function");

// If we want to return something we can just write without return keyword it automatically assumes that we want to return this line
const sayHelloArrow = () => "Hello 😄 form an arrow 🏹 function";

console.log(sayHelloArrow());

// If we want to return an object literal then we have to wrap the function body around braces

const arrowObj = () => ({
	user: "User 101",
});

console.log(arrowObj());

// Arrow function with parameters

// We don't have to use parenthesis around parameters  if there is only one parameter
const arrowWithParameters = (firstName) => console.log(`Hi 👋 ${firstName}`);

arrowWithParameters("Prathamesh");

const arrowWith2Parameters = (firstName, lastName) =>
	console.log(`Hi 👋 ${firstName} ${lastName}`);

arrowWith2Parameters("Prathamesh", "Mali");

// Arrow functions as callbacks

const users = ["Jake", "Rob", "John", "Blake"];

// Using normal functions
const namLengths = users.map(function (name) {
	return name.length;
});

console.log(namLengths);

// Using arrow function
const namLengthsArrow = users.map((name) => {
	return name.length;
});
console.log(namLengthsArrow);

// Using arrow function with one line

const namLengthsArrow2 = users.map((name) => name.length);

console.log(namLengthsArrow2);
