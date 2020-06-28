// Classes in ES6

class Person {
	constructor(firstName, lastName, dob) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.birthDay = new Date(dob);
	}
	// We can directly add the methods in prototype without writing .prototype
	//Normal methods
	greeting() {
		return `Hi ${this.firstName} ${this.lastName} 👋`;
	}
	getAge() {
		let diff = Date.now() - this.birthDay.getTime();
		let CurrentAge = new Date(diff);
		return Math.abs(CurrentAge.getFullYear() - 1970);
	}
	getsMarried(newLastName = "New") {
		this.lastName = newLastName;
		return `New Name: ${this.firstName} ${this.lastName}`;
	}

	/*
    Static methods
	1. Similar to static method is java
	2. We can use this method without instantiating an object
    3. It works like a standalone method
    */

	static getSquare(num) {
		return num ** 2;
	}
}

let mic = new Person("Michael", "jackson", "10-10-1995");
console.log(mic); //Person {firstName: "Michael", lastName: "jackson", age: 45}
/*
 * This mic object also have _proto__ object in it same as before. and it has constructor person
 * It works similar to ES5.
 * The main difference is the way we declare it in form of classes and constructor. Not changing the way how it works in underlying engine or language
 * That's why it is called syntactic sugar. because it gives us more convenient syntax
 */
console.log(mic.greeting()); //Hi Michael jackson 👋
console.log(mic.getAge()); //24
console.log(mic.getsMarried("Johnson")); //New Name: Michael Johnson

// Calling static method
//console.log(mic.getSquare(4)); // We get an error because this function is not part of this instance
// We have to use ClassName.static method name
console.log(Person.getSquare(12)); //144
