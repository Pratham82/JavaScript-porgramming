// Object Oriented Programming: Create a Method on an Object

/*
Using the dog object, give it a method called sayLegs. The method should return the sentence "This dog has 4 legs."

*/

let dog = {
	name: "Spot",
	numLegs: 4,
	sayLegs: () => "This dog has 4 legs.",
};

dog.sayLegs();

console.log(dog.sayLegs()); // OP: This dog has 4 legs
