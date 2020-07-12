// Object Oriented Programming: Iterate Over All Properties

/*
Own properties and prototype properties. Own properties are defined directly on the object instance itself. And prototype properties are defined on the prototype

Example:
function Bird(name) {
  this.name = name;  //own property
}

Bird.prototype.numLegs = 2; // prototype property

let duck = new Bird("Donald");
*/

/*
Add all of the own properties of beagle to the array ownProps. Add all of the prototype properties of Dog to the array prototypeProps.
*/

function Dog(name) {
	this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

// Only change code below this line

for (var prop in beagle) {
	if (beagle.hasOwnProperty(prop)) {
		ownProps.push(prop);
		console.log(prop);
	} else {
		prototypeProps.push(prop);
	}
}

console.log(ownProps);
console.log(prototypeProps);
