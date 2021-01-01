// All About Anonymous Functions: Adding Suffixes
// Write a function that returns an anonymous function, which transforms its input by adding a particular suffix at the end.

// Examples
// add_ly = add_suffix("ly")

// add_ly("hopeless") ➞ "hopelessly"
// add_ly("total") ➞"totally"

// function add_suffix(suffix) {
// 	return () => y + suffix;
// } //

const add_suffix = (suffix) => (word) => word + suffix;
