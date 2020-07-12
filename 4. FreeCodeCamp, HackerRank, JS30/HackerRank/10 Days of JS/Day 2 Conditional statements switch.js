function getLetter(s) {
	let letter;
	let first = s[0];
	// Write your code here
	switch (first) {
		case "a":
			if (
				first == "a" ||
				first == "e" ||
				first == "i" ||
				first == "o" ||
				first == "u"
			)
				letter = "A";
			break;
		case "b":
			if (
				first == "b" ||
				first == "c" ||
				first == "d" ||
				first == "f" ||
				first == "g"
			)
				letter = "B";
			break;
		case "h":
			if (
				first == "h" ||
				first == "j" ||
				first == "k" ||
				first == "l" ||
				first == "m"
			)
				letter = "C";
			break;
		default:
			letter = "D";
	}

	return letter;
}

console.log(getLetter("vwewe"));
