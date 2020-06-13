// Object Oriented Programming: Add Methods After Inheritance

/*
1. A constructor function that inherits its prototype object from a supertype constructor function can still have its own methods in addition to inherited methods.
*/

/*
Add all necessary code so the Dog object inherits from Animal and the Dog's prototype constructor is set to Dog. Then add a bark() method to the Dog object so that beagle can both eat() and bark(). The bark() method should print "Woof!" to the console.
*/

function Animal() {}
Animal.prototype.eat = function () {
	console.log("nom nom nom");
};

function Dog() {}

// Only change code below this line

//Setting prototype to animal so our Dog can access eat method
Dog.prototype = Object.create(Animal.prototype);

//Reassigning the constructor to Dog
Dog.prototype.constructor = Dog;

// Adding new method to Dog

Dog.prototype.bark = () => console.log("Woof!");

// Only change code above this line

let beagle = new Dog();
console.log(beagle.constructor);
console.log(beagle.eat());
console.log(beagle.bark());
