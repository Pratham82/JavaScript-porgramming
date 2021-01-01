// Printer Levels
// Given an object of how many more pages each ink color can print, output the maximum number of pages the printer can print before any of the colors run out.

// Examples
// inkLevels({
//   "cyan": 23,
//   "magenta": 12,
//   "yellow": 10
// }) ➞ 10

// const inkLevels = (inks) => Object.values(inks);

const inkLevels = (inks) => Math.min(...Object.values(inks));

console.log(
	inkLevels({
		cyan: 23,
		magenta: 12,
		yellow: 10,
	})
);
