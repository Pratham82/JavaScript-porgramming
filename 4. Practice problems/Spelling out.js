const spelling = (str) =>
	str.split("").map((val, i, arr) => str.slice(0, i + 1));

console.log(spelling("bee"));
