// Object Oriented Programming: Use Prototype Properties to Reduce Duplicate Code

/*
1. Properties in the prototype are shared among ALL instances of objects. 
2. This will reduce the duplication between multiple instances
3. Since all instances automatically have the properties on the prototype, think of a prototype as a "recipe" for creating objects.
4. Nearly every object in JavaScript has a prototype property which is part of the constructor function that created it.
*/

function Dog(name) {
	this.name = name;
}
Dog.prototype.numLegs = 2;

// Only change code above this line
let beagle = new Dog("Snoopy");

console.log(beagle);
