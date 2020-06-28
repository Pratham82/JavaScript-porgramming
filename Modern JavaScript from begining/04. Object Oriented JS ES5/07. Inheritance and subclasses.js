class Person {
	constructor(firstName, lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
	}

	greeting() {
		return `Hi there ${this.firstName} ${this.lastName} 👋`;
	}
}

let ross = new Person("Ross", "Geller");
console.log(ross); //Person {firstName: "Ross", lastName: "Geller"}

// Inheritance

class Customer extends Person {
	// The firstName and lastName property will be inherited from Person's constructor
	// And we can pass the default parameter for any property, If while instantiating user haven't provided membership it will be set as Standard
	constructor(firstName, lastName, phone, membership = "Standard") {
		/* When we instantiate a customer since its extending a person constructor we want to call person constructor. We can do that with super keyword */
		super(firstName, lastName);
		// Anything which is unique to Customer class is defined without super keyword
		this.phone = phone;
		this.membership = membership;
	}

	// Customer specific methods
	static getMemberShipCost() {
		return 600;
	}
}

// All the instances of Customer will have __proto__ of Person and constructor Customer

let johnny = new Customer("Johnny", "Depp", "845-554-4514"); // Person {firstName: "Ross", lastName: "Geller"}

console.log(johnny); //Customer {firstName: "Johnny", lastName: "Depp", phone: "845-554-4514", membership: "Standard"}
console.log(johnny.firstName); //Johnny
console.log(johnny.lastName); //Depp
console.log(johnny.phone); //845-554-4514
console.log(johnny.membership); //Standard

let jeff = new Customer("Jeff", "Witteck", "484-665-1545", "Premium");
console.log(jeff); //Customer {firstName: "Jeff", lastName: "Witteck", phone: "484-665-1545", membership: "Premium"}

// Accessing functions which are extended from Person class
console.log(johnny.greeting()); //Hi there Johnny Depp 👋

// Accessing static method from Customer
console.log(Customer.getMemberShipCost()); //600
