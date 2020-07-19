let value = 10;
value = undefined;

function checkTruthyOrFalsy(val) {
	// If the value is truthy it will return "This is truthy value" if its not then it will return "This is falsy value"

	if (val) {
		return "This is truthy";
	} else {
		return "This is Falsy";
	}

	// Using ternary operator
	// return val ? "This is truthy" : "This is falsy";
}

console.log(checkTruthyOrFalsy(value));

//* Truthy values: Any number be it positive or negative except 0 will return true

//* Falsy values:
/*
 * 1. false
 * 2. "" (empty string)
 * 3. null
 * 4. undefined
 * 5. NaN
 
 */

//* Usage of truthy and falsy values

//* Ued when we are checking for a value

//* We can check if the user is logged in or not
//Truthy
currentUser = "prathamesh";

//Falsy
currentUser = null;

if (currentUser) {
	console.log("User logged in");
} else {
	console.log("User is not logged in");
}
