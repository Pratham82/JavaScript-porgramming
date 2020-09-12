// Solve a Linear Equation
// Create a function that returns the value of x (the "unknown" in the equation). Each equation will be formatted like this:

// x + 6 = 12
// Examples
// solve("x + 43 = 50") ➞ 7

function solve(eq) {
	eq = eq.split(" ");
	return eval(`${eq[4]}-(${eq[1]}${eq[2]})`);
}

console.log(solve("x + 43 = 50"));
console.log(solve("x - 9 = 10"));
console.log(solve("x + 300 = 100"));
console.log(solve("x + -500 = -200"));
