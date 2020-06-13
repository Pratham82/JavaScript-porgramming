// Object Oriented Programming: Understand the Constructor Property

/*
let duck = new Bird();
let beagle = new Dog();

console.log(duck.constructor === Bird);  //prints true
console.log(beagle.constructor === Dog);  //prints true

1. the constructor property is a reference to the constructor function that created the instance.
2. The advantage of the constructor property is that it's possible to check for this property to find out what kind of object it is

function joinBirdFraternity(candidate) {
  if (candidate.constructor === Bird) {
    return true;
  } else {
    return false;
  }
}

*/

/*
Write a joinDogFraternity function that takes a candidate parameter and, using the constructor property, return true if the candidate is a Dog, otherwise return false.
*/

function Dog(name) {
	this.name = name;
}
function Cat(name) {
	this.name = name;
}

// Only change code below this line
function joinDogFraternity(candidate) {
	if (candidate.constructor === Dog) {
		return true;
	} else {
		return false;
	}
}

let dog1 = new Dog("lex");
let cat1 = new Cat("drew");

console.log(joinDogFraternity(dog1)); // Returns true
console.log(joinDogFraternity(cat1)); // Returns false
