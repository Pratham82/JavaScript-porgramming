// Dashed Vowels
// Create a function that takes a string and returns dashes on the left and right side of every vowel (a e i o u).

// Examples
// dashed("Edabit") ➞ "-E-d-a-b-i-t"

// dashed("Carpe Diem") ➞ "C-a-rp-e- D-i--e-m"

const dashed = (str) =>
	str
		.split("")
		.map((val) =>
			val == "a" ||
			val == "e" ||
			val == "i" ||
			val == "o" ||
			val == "u" ||
			val == "A" ||
			val == "E" ||
			val == "I" ||
			val == "O" ||
			val == "U"
				? `-${val}-`
				: val
		)
		.join("");

console.log(dashed("Edabit"));
