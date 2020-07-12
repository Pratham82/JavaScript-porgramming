// Object Oriented Programming: Verify an Object's Constructor with instanceof

/*
1. Anytime a constructor function creates a new object, that object is said to be an instance of its constructor.
2. JavaScript gives a convenient way to verify this with the instanceof operator.
3. instanceof allows you to compare an object to a constructor, returning true or false based on whether or not that object was created with the constructor
*/

/*
Create a new instance of the House constructor, calling it myHouse and passing a number of bedrooms. Then, use instanceof to verify that it is an instance of House.
*/

function House(numBedrooms) {
	this.numBedrooms = numBedrooms;
}

// Only change code below this line

let myHouse = new House(3);

console.log(myHouse instanceof House);
