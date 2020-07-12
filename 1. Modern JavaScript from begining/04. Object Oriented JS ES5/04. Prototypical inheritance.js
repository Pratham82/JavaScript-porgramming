// Person constructor
function Person(firstName, lastName) {
	this.firstName = firstName;
	this.lastName = lastName;
}

// Prototypes
Person.prototype.greeting = function () {
	return `Hi there 👋 ${this.firstName}!!`;
};

let joe = new Person("Joe", "Hash");
console.log(joe);
console.log(joe.greeting());

// Customer constructor
function Customer(firstName, lastName, phoneNumber, membership) {
	// Call is the function allows us to call another function from somewhere else in the current context
	// The parameters which are passing in constructor should be same if we are inheriting those properties
	Person.call(this, firstName, lastName);

	this.phoneNumber = phoneNumber;
	this.membership = membership;
}

//* Inheriting prototypes from another Objects
// Now we can access all the function from Person's prototype
// But the problem is when we check the prot pseudo selector inside the customer it will be Person
Customer.prototype = Object.create(Person.prototype);

//* For returning the Customer proto object as customer we can do following
Customer.prototype.constructor = Customer;

let hank = new Customer("Hank", "Smith", "9885-745-524", "Premium");
console.log(hank);

//* Overwriting greeting method in Customer
// Now the greeting function in Customer.prototype is modified
Customer.prototype.greeting = function () {
	return `Welcome 😄 to Horizon  ${this.firstName}, How may I assist you ❓`;
};

console.log(hank.greeting());

//* But the Person's greeting method is not modified it remains unchanged
console.log(joe.greeting());
