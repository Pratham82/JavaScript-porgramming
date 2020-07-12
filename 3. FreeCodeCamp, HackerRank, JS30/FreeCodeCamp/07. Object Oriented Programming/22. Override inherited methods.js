// Object Oriented Programming: Override Inherited Methods

/*
1. It's possible to override an inherited method. 
2. It's done the same way - by adding a method to ChildObject.prototype using the same method name as the one to override.

Example:
function Animal() { }
Animal.prototype.eat = function() {
  return "nom nom nom";
};
function Bird() { }

///Inherit all methods from Animal
Bird.prototype = Object.create(Animal.prototype);

/// Bird.eat() overrides Animal.eat()
Bird.prototype.eat = function() {
  return "peck peck peck";
};

How does scope of method works?
---------------------------------
If you have an instance let duck = new Bird(); and you call duck.eat(), this is how JavaScript looks for the method on duck’s prototype chain:

duck => Is eat() defined here? No.
Bird => Is eat() defined here? => Yes. Execute it and stop searching.
Animal => eat() is also defined, but JavaScript stopped searching before reaching this level.
Object => JavaScript stopped searching before reaching this level.
*/

/*
Override the fly() method for Penguin so that it returns "Alas, this is a flightless bird."
*/

function Bird() {}

Bird.prototype.fly = function () {
	return "I am flying!";
};

function Penguin() {}
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

// Only change code below this line
Penguin.prototype.fly = () => "Alas, this is a flightless bird.";
// Only change code above this line

let penguin = new Penguin();
console.log(penguin.fly());
