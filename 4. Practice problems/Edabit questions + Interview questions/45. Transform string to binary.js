// Transforming Words into Binary Strings
// Write a function that transforms all letters from [a, m] to 0 and letters from [n, z] to 1 in a string.

// Examples
// convertBinary("house") ➞ "01110"

// convertBinary("excLAIM") ➞ "0100000"

const convertBinary = (str) =>
	str.replace(/[a-m]/gi, "0").replace(/[m-z]/gi, "1");

console.log(convertBinary("house"));
