// JavaScript Algorithms and Data Structures Projects: Roman Numeral Converter
/*
Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.
*/

function convertToRoman(num) {
	let romans = {
		M: 1000,
		CM: 900,
		D: 500,
		CD: 400,
		C: 100,
		XC: 90,
		L: 50,
		XL: 40,
		X: 10,
		IX: 9,
		V: 5,
		IV: 4,
		I: 1,
	};

	let romanNum = "";

	for (var i in romans) {
		while (num >= romans[i]) {
			romanNum += i; // Add the key value of number
			num -= romans[i]; //Reduce the number from actual number
		}
	}

	return romanNum;
}

//convertToRoman(36);

console.log(convertToRoman(15)); //XV
console.log(convertToRoman(12)); //XII
console.log(convertToRoman(97)); //XCVII
console.log(convertToRoman(29)); //XXIX
