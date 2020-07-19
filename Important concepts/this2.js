/*
 * this:
 * this keyword allows us to reuse functions with different context, or in another words it decided which object which object should be focal(refers to) when we invoking a function or method
 
 * Rules:
 * 1. Implicit binding
 * 2. Explicit binding
 * 3. new binding
 * 4. window binding
 */

//* In the current function we don't know what name refers to until we invoke it

//* Similarly won't know what "this" keyword is until we invoked in a function

//************ Implicit binding ******************

var user = {
	name: "Prathamesh",
	age: "22",
	sayName: () => {
		return `Hi I'm ${this.name}`;
	},
};

console.log(user.age);

// Implicit binding says that when the function is invoked look to the left of the dot and that is what the this keyword references to.

// IN this case "this" keyword refers to the user object
console.log(user.sayName());

// Example 2:
var sayNameMixin = function (obj) {
	obj.sayName2 = function () {
		return this.name;
	};
};

var john = {
	name: "John",
	age: "25",
};
var bob = {
	name: "Bob",
	age: "24",
};

sayNameMixin(john);
sayNameMixin(bob);

// In this example sayName2 refers to john
console.log(john.sayName2());

// In this example sayName2 refers to bob
console.log(bob.sayName2());

// Example 3
var Person = (name, age) => {
	return {
		name: name,
		age: age,
		sayName3: function () {
			return `${this.name} from Person function`;
		},
		mother: {
			name: "Sam",
			age: 35,
			sayMotherName: function () {
				// return `I'm ${this.momName} and I am ${this.name}'s mom `;
				return `I'm ${this.name} and I am ${name}'s mom`;
			},
		},
	};
};

var jim = Person("Jim", "14");
console.log(jim.sayName3());

// Here the "name" in sayMotherName function will refers to Sam and "name" refers to jim because that will be returned with the object
console.log(jim.mother.sayMotherName());

//************ Explicit Binding *************
//* Used with .call, .apply and .bind

// Here this function is available globally to any object
var sayNameGlobal = function () {
	return `My name is ${this.name}`;
};

let marshal = {
	name: "Marshal",
	age: 50,
};

// For calling sayNameGlobal on the context of marshal we can use .call property

console.log(sayNameGlobal.call(marshal)); // My name is Marshal

console.log(sayNameGlobal.call({ name: "Joe" })); // My name is Joe

//.call with multiple parameters

var sayNameGlobal2 = function (...languages) {
	return `My name is ${this.name} and these are the languages I know ${languages}`;
};

// We can directly add and array of strings
let languages = ["python", "java", "javascript"];
console.log(sayNameGlobal2.call(marshal, languages));
//Output: My name is Marshal and these are the languages I know python,java,javascript

// OR we can add each value within the parameters
console.log(
	sayNameGlobal2.call(marshal, "C++", "C", "Java", "Python", "JavaScript")
);
/*
Output:
My name is Marshal and these are the languages I know C++,C,Java,Python,JavaScript
*/

//* .apply
// We can also make use of .apply for passing array as a parameter
console.log(sayNameGlobal2.apply(marshal, languages));
/*
Output:
My name is Marshal and these are the languages I know python,java,javascript
*/

//* .bind
//* When we use .bind we get new function instead of invoking the function
console.log(sayNameGlobal2.bind(marshal, languages));
/*
Output:
ƒ (...languages) {
	return `My name is ${this.name} and these are the languages I know ${languages}`;
}
*/

//* We can store the function in another variable
let copyGlobal = sayNameGlobal2.bind(marshal, "test1", "test2", "test3");
copyGlobal = sayNameGlobal2.bind(marshal, languages);
console.log(copyGlobal());
/* 
Output:
My name is Marshal and these are the languages I know python,java,javascript

*/

//*********** new and window binding **************
//* new Binding

var Animal = function (color, name, type) {
	//* this = {} will be created when we instantiate an object with new keyword
	//* new binding rule states that when a function is invoked with the new keyword this keyword inside that function is bound to the new object being constructed
	this.color = color;
	this.name = name;
	this.type = type;
};

//* When we invoke variable with a new keyword behind the scene JS will create a new object for us and save it as (this ={}) inside Animal
let zebra = new Animal("b & W", "zeb1", "Zebra");

//* window binding
let checkAge = function () {
	"user strict";
	return `I'm ${this.age} years old`;
};

let jill = {
	age: "19",
};

console.log(checkAge.call(jill)); // I'm 19 years old

//* Try to call checkAge without any object
/*
 * We get undefined because when we try to invoke a function which involves this keyword but while invoking doesn't have anything to the left of the dot,its not using new binding and doesn't involves call, apply or bind then the "this" keyword is going to default to the window object
 */
console.log(checkAge()); // I'm undefined years old

//* If we add property age to the window object that will work
window.age = "45";
console.log(checkAge()); // I'm 45 years old

//* If we run the function with strict mode then we will get an error
//* It won't let us bind "this" keyword to bind to the window object or reference to the window object
