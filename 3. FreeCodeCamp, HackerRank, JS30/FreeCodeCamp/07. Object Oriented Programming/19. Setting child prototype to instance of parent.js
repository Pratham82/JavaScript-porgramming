//Object Oriented Programming: Set the Child's Prototype to an Instance of the Parent
/*
set the prototype of the subtype (or child)—in this case, Bird—to be an instance of Animal.

Bird.prototype = Object.create(Animal.prototype);
Remember that the prototype is like the "recipe" for creating an object. 
In a way, the recipe for Bird now includes all the key "ingredients" from Animal.

let duck = new Bird("Donald");
duck.eat(); // prints "nom nom nom"

duck inherits all of Animal's properties, including the eat method.
*/

function Animal() {}

Animal.prototype = {
	constructor: Animal,
	eat: function () {
		console.log("nom nom nom");
	},
};

function Dog() {}

// Only change code below this line

Dog.prototype = Object.create(Animal.prototype);

let beagle = new Dog();

console.log(beagle);
/*
Dog {}
    __proto__: Animal
    __proto__:
        constructor: ƒ Animal()
        eat: ƒ ()
        __proto__: Object

*/

console.log(beagle.eat()); // OP: nom nom nom
