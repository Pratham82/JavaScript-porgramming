// Which Generation Are You?
// Try finding your ancestors and offspring with code.

// Create a function that takes a number x and a character y ("m" for male, "f" for female), and returns the name of an ancestor (m/f) or descendant (m/f).

// If the number is negative, return the related ancestor.
// If positive, return the related descendant.
// You are generation 0. In the case of 0 (male or female), return "me!".

// generation(2, "f") ➞ "granddaughter"

// generation(-3, "m") ➞ "great grandfather"

// generation(1, "f") ➞ "daughter"

const generation = (n, gender) => {
	family_tree_obj = {
		"-3": gender === "m" ? "great grandfather" : "great grandmother",
		"-2": gender === "m" ? "grandfather" : "grandmother",
		"-1": gender === "m" ? "father" : "mother",
		0: "me!",
		1: gender === "m" ? "son" : "daughter",
		2: gender === "m" ? "grandson" : "granddaughter",
		3: gender === "m" ? "great grandson" : "great granddaughter",
	};

	return family_tree_obj[n];
};

console.log(generation(-3, "m"));
console.log(generation(0, "m"));
