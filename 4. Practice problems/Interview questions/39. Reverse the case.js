// Reverse the Case
// Given a string, create a function to reverse the case. All lower-cased letters should be upper-cased, and vice versa.

// Examples
// reverseCase("Happy Birthday") ➞ "hAPPY bIRTHDAY"

const reverseCase = (str) =>
	str
		.split("")
		.map((c) => (c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()))
		.join("");

console.log(reverseCase("sPoNtAnEoUs"));
