// Object Oriented Programming: Understand Own Properties

/*
Add the own properties of canary to the array ownProps.
*/

function Bird(name) {
	this.name = name;
	this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];
// Only change code below this line
for (var prop in canary) {
	if (canary.hasOwnProperty(prop)) {
		ownProps.push(prop); //Adding property name
		//ownProps.push(canary[prop]); Adding value of property
	}
}

console.log(ownProps);
