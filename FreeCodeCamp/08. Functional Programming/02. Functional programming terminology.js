// Functional Programming: Understand Functional Programming Terminology

/*
1. Callbacks are the functions that are slipped or passed into another function to decide the invocation of that function. 

2. Functions that can be assigned to a variable, passed into another function, or returned from another function just like any other normal value, are called first class functions.In JavaScript, all functions are first class functions.

3. The functions that take a function as an argument, or return a function as a return value are called higher order functions.

4. When the functions are passed in to another function or returned from another function, then those functions which gets passed in or returned can be called a lambda.
*/

/*
Prepare 27 cups of green tea and 13 cups of black tea and store them in tea4GreenTeamFCC and tea4BlackTeamFCC variables, respectively. Note that the getTea function has been modified so it now takes a function as the first argument.
*/

// Function that returns a string representing a cup of green tea
const prepareGreenTea = () => "greenTea";

// Function that returns a string representing a cup of black tea
const prepareBlackTea = () => "blackTea";

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea = (prepareTea, numOfCups) => {
	const teaCups = [];

	for (let cups = 1; cups <= numOfCups; cups += 1) {
		const teaCup = prepareTea();
		teaCups.push(teaCup);
	}
	return teaCups;
};

// Only change code below this line
const tea4GreenTeamFCC = getTea(prepareGreenTea, 27);
const tea4BlackTeamFCC = getTea(prepareBlackTea, 13);
// Only change code above this line

console.log(tea4GreenTeamFCC, tea4BlackTeamFCC);

console.log(prepareBlackTea());
