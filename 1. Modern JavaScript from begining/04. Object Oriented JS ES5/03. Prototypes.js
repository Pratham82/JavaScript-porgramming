/* 
* Prototypes:

Uses:
* Prototypes allow you to easily define methods to all instances of a particular object.

* The beauty is that the method is applied to the prototype, so it is only stored in the memory once, but every instance of the object has access to it.

* The Object.prototype is on the top of the prototype inheritance chain

* The JavaScript prototype property allows you to add new properties to object constructors

* The JavaScript prototype property also allows you to add new methods to objects constructors

* Each object in JS have prototype and each prototype is an object itself

* All objects inherit their properties and methods from prototype

* When we are dealing with object literals we are inheriting from prototype called Object.prototype

* When we are dealing with objects which are created through constructors then it will come from ConstructorName.prototype. Eg. object created from Person constructor we will use Person.prototype.

* Prototype chaining: When we go up from a constructor prototype to the Object.prototype.

*/

function Person(firstName, lastName, dob) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.birthday = new Date(dob);
}

// Rather than adding the getAge function in the object we can add it to the Person's prototype property.
// Now the getAge function will added to all the instances of Person

Person.prototype.getAge = function () {
	const diff = Date.now() - this.birthday.getTime();
	const currentAge = new Date(diff);
	return Math.abs(currentAge.getFullYear() - 1970);
};

Person.prototype.getFullName = function () {
	return `${this.firstName} ${this.lastName}`;
};

// Modifying object using prototypes
Person.prototype.getsMarried = function (newLastName) {
	this.lastName = newLastName;
};

// Creating instances
let bob = new Person("Bob", "Dylan", "12-31-1959");
let john = new Person("John", "Lennon", "Dec 25 1955");
let jane = new Person("Jane", "Doe", "Dec 25 1985");

console.log(bob.firstName);
console.log(bob.lastName);
console.log(bob.birthday);
console.log(bob.getAge());

console.log(john.firstName);
console.log(bob);
console.log(john);

// Accessing prototypes
console.log(bob.getFullName());
console.log(john.getFullName());

// Manipulating objects
console.log(jane);
console.log(jane.getFullName());

// Now the lastName is changed from Doe to White
jane.getsMarried("White");
console.log(jane);
console.log(jane.getFullName());

// Accessing Object.prototype methods
console.log(jane.hasOwnProperty("firstName")); // true
console.log(jane.hasOwnProperty("middleName")); // false

console.log(jane.hasOwnProperty("getAge()")); // false because the getAge function is not part of Person object it is attached to Object.prototype
