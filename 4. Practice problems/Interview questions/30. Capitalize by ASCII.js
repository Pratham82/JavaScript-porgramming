// Capitalize by ASCII
// Create a function that takes a string as input and capitalizes a letter if its ASCII code is even and returns its lower case version if its ASCII code is odd.

// Examples
// asciiCapitalize("to be or not to be!") ➞ "To Be oR NoT To Be!"

// asciiCapitalize("THE LITTLE MERMAID") ➞ "THe LiTTLe meRmaiD"

const asciiCapitalize = (str) =>
	str
		.split("")
		.map((val) =>
			val.charCodeAt() % 2 == 0 ? val.toUpperCase() : val.toLowerCase()
		)
		.join("");

console.log(asciiCapitalize("to be or not to be!"));
