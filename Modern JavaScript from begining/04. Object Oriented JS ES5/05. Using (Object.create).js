// Creating Objects in alternative way

// Creating prototypes in parent object. And we different properties with different prototype functions

// This is prototype object and it has one prototype methods
const personPrototype = {
	greeting: function () {
		return `Hi ${this.firstName} 👋`;
	},
	getFullName: function () {
		return `${this.firstName} ${this.lastName}`;
	},
	getsMarried: function (newLastName = "LastName(new)") {
		this.lastName = newLastName;
		return `Modified name: ${this.firstName} ${this.lastName}`;
	},
};

let john = Object.create(personPrototype); // Now th greeting method is added into john's __proto__ object and we can use that method
john.firstName = "John";
john.lastName = "Snow";
john.age = 25;

console.log(john); //{firstName: "John", lastName: "Snow", age: 25}
console.log(john.firstName); // John
console.log(john.lastName); // Snow
console.log(john.greeting()); // Hi John 👋
console.log(john.getFullName()); // John snow
console.log(john.getsMarried("Smith")); //Modified name: John Smith

// Another ways of creating object

// We are passing the second parameter as object and adding the properties in it the values should be passed inside object again with value as key and actual value as value
let rob = Object.create(personPrototype, {
	firstName: { value: "Rob" },
	lastName: { value: "Stark" },
	age: { value: 30 },
});

// The rob object has all the methods form personPrototype
console.log(rob); //{firstName: "Rob", lastName: "Stark", age: 30}
console.log(rob.firstName); //Rob
console.log(rob.lastName); //Stark
console.log(rob.getFullName()); //Rob Stark
console.log(rob.greeting()); //Hi Rob 👋
