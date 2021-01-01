// Valid Zip Code
// Zip codes consist of 5 consecutive digits. Given a string, write a function to determine whether the input is a valid zip code. A valid zip code is as follows:

// Must only contain numbers (no non-digits allowed).
// Must not contain any spaces.
// Must not be greater than 5 digits in length.
// Examples
// isValid("59001") ➞ true

// isValid("853a7") ➞ false

// isValid("732 32") ➞ false

const isValid = (zip) => {
	// return /^\d{5}$/.test(zip);
	return /^\d{5}$/.test(zip);
};

console.log(isValid("732 32"));
console.log(isValid("853a7"));
console.log(isValid("73232"));
