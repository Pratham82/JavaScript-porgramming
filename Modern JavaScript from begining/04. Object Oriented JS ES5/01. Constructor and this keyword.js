//* this - this keyword refers to the current instance of an object

function name() {
	// In the current constructor this keyword refers to the name function scope
	console.log(this);
}

// Here this refers to the window object
console.log(this); // Window {parent: Window, opener: null, top: Window, length: 0, frames: Window, …}

const test = new name(); // When we create a new name object is instantiated
console.log(test); // returns name{} i.e a constructor

function Person() {
	this.name = "Prathamesh";
}

// Creating new reference to object
let john = new Person();
let travis = new Person();

// Both name property have same value because we hard coded it in our constructor so even if we try to instantiate with different name it will be same when declared
console.log(john); // Person {name: "Prathamesh"}
console.log(travis); // Person {name: "Prathamesh"}

// We solved the above problem by taking name as an argument with the new keyword while creating new instance of person.
function Person2(name) {
	this.name = name;
}
// So the name will be different and same to the value which is provided in the Person2 constructor

let rob = new Person2("Rob");
let sansa = new Person2("Sansa");
console.log(rob); //Person2 {name: "Rob"}
console.log(sansa); //Person2 {name: "Sansa"}

// Constructor with multiple parameters

function Info(name, dob) {
	this.name = name;
	this.birthday = new Date(dob);
	// Adding function to the constructor
	this.getAge = () => {
		let diff = Date.now() - this.birthday.getTime();
		let ageDate = new Date(diff);
		return Math.abs(ageDate.getFullYear() - 1970);
	};
}

let drake = new Info("Drake", "12-9-1997");
//console.log(drake);

console.log(drake);
console.log(drake.name);
console.log(drake.getAge());

// My function for getting current age
dob = "12-9-1997";
let getAge = () => {
	let currentYear = new Date().getFullYear();
	let birthYear = new Date(dob).getFullYear();
	return `Your age is ${currentYear - birthYear} years`;
};
console.log(getAge(dob));
