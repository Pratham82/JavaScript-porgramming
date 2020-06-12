// Object Oriented Programming: Change the Prototype to a New Object

/*
A more efficient way is to set the prototype to a new object that already contains the properties.
*/

function Dog(name) {
	this.name = name;
}

Dog.prototype = {
	numLegs: 2,
	eat: () => "Dog is eating",
	describe: () => `I am ${name}, and I am a Dog`,
};

console.log(Dog.prototype.numLegs);
console.log(Dog.prototype.eat());
console.log(Dog.prototype.describe());
