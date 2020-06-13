// Object Oriented Programming: Inherit Behaviors from a Supertype

/*
Example:
function Animal() { }
Animal.prototype.eat = function() {
  console.log("nom nom nom");
};

let animal = Object.create(Animal.prototype);

1. Object.create(obj) creates a new object, and sets obj as the new object's prototype
2. By setting the prototype of animal to be Animal's prototype, you are effectively giving the animal instance the same "recipe" as any other instance of Animal

animal.eat(); // prints "nom nom nom"
animal instanceof Animal; // => true
*/

/*
Use Object.create to make two instances of Animal named duck and beagle.
*/

function Animal() {}

Animal.prototype = {
	constructor: Animal,
	eat: function () {
		console.log("nom nom nom");
	},
};

// Only change code below this line

let duck = Object.create(Animal.prototype); // Change this line
let beagle = Object.create(Animal.prototype); // Change this line

console.log(duck.eat());
console.log(beagle.eat());
