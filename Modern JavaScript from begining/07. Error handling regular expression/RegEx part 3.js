//***************** Character sets matching ********************

// Brackets [] - Character Sets
/gr[ae]y/i; // Must be an a or e
/[GF]ray/i; // Must be a G or F
/[^GF]ray/i; // Match anything except a G or F
/[A-Z]ray/; // Match any uppercase letter
/[a-z]ray/; // Match any lowercase letter
/[A-Za-z]ray/; // Match any  letter
/[0-9][0-9]ray/; // Match any digit

// Braces {} - Quantifiers
/Hel{2}o/i; // Must occur exactly {m} amount of times
/Hel{2,4}o/i; // Must occur exactly {m} amount of times
/Hel{2,}o/i; // Must occur at least {m} times

// Paretheses () - Grouping
/^([0-9]x){3}$/;

let re;

//-----------------------------------------------------------

//********** Char sets: [] Brackets ***********

//* 1. [ae] character seys
re = /gr[ae]y/i;
//* [ae]: pattern must contain either a || e

/*
* True values:
"gray", "Grey", "gReY",  "GrEy?", "gRAY?"

* False values:
"Grsy?", "gRty?", "gello", "gRdy?"

*/
//-----------------------------------------------------------

// * 2. Start of the pattern
re = /[GF]rey\?/i;
//*[GF]: pattern must contain either g, G, F or f at the start

/*
* True values:
"fray", "Grey", "gReY",  "FrEy?", "fRAY?"

* False values:
"drsy?", "XRty?", "sello", "ERdy?"

*/
//-----------------------------------------------------------

//* 3. Match anything except the chars
re = /[^GF]rey\?/i;
//*[GF]: pattern must does not contain either g, G, F or f at the start

/*
* True values:
"drsy?", "XRty?", "sello", "ERdy?"


* False values:
"fray", "Grey", "gReY",  "FrEy?", "fRAY?"
*/
//-----------------------------------------------------------

//* 4.  Match only uppercase letters.
re = /[A-Z]rey\?/;
//*[A-Z]: pattern must contains characters between a-z and it should be uppercase

/*
* True values:
"Fray", "Xrey", "PReY",  "FrEy?", "DRAY?"


* False values:
"drsy?", "xRty?", "sello", "xRdy?"
*/
//-----------------------------------------------------------

//* 5. Match only lowercase letters.
re = /[a-z]rey\?/;
//*[a-z]: pattern must contains characters between a-z and it should be lowercase

/*
* True values:
"drsy?", "XRty?", "sello", "xRdy?"

* False values:
"Fray", "Xrey", "PReY",  "FrEy?", "DRAY?"


*/
//-----------------------------------------------------------

//* 6. Match letters with given range, regardless iof their cases
re = /[A-Za-z]rey\?/;
//*[A-Za-z]: pattern must contain letter between a-z and case does not matter

/*
* True values:
"drsy?", "XRty?", "sello", "xRdy?", "33Srey?"

* False values:
"1ray", "-rey", "+ReY",  "$rEy?", "!RAY?", "g+++rey?", g/#rey?"


*/

//-----------------------------------------------------------

//* 7. Match number ranges
re = /[0-9]rey\?/;
//*[0-9]: pattern must contain numbers between 0-9

/*

* True values:
"1ray", "-rey", "+ReY",  "4rEy?", "6RAY?", "dsf7rey?", sdf56rey?", "sdfd9rey?"

* False values:
"drsy?", "XRty?", "sello", "xRdy?", "33Srey?"

*/
//-----------------------------------------------------------

//************* Quantifiers: Braces{} ******************

//* 1. Must occur exactly {n} amount of times

//* Match letter 'l' and must occur given number of times
re = /Hel{2}o/;
//*[Hel{2}o]: pattern must contain 2 'l's

/*
* True values:
"Hello", "Hellodf","Hellodfdfd" "Hellods?"

* False values:
"Helaslodfdfd", "-rey", "+ReY",  "$rEy?", "!RAY?", "g+++rey?", g/#rey?"


*/
//-----------------------------------------------------------

//* 2. Must occur exactly between {n,m} amount of times

//* Match letter 'l' and must occur exactly between 2-4 times
re = /Hel{2,4}o/;
//*[Hel{2,4}o]: pattern must contain 2,3 or 4 'l's

/*
* True values:
"Hello", "Helllo","Hellllo" 

* False values:
"Helaslodfdfd", "-rey", "+ReY",  "$rEy?", "!RAY?", "g+++rey?", g/#rey?"


*/
//-----------------------------------------------------------

//* 3. Must occur exactly {n,} or more times, we can set lower bound.

//* Match letter 'l' and must occur exactly between 2-4 times
re = /Hel{2,}o/;
//*[Hel{2,4}o]: pattern must contain 2,3 or 4 'l's

/*
* True values:
"Hello", "Hellodf","Hellodfdfd"

* False values:
"Helaslodfdfd", "Helow", 


*/
//-----------------------------------------------------------

//* 4. Must occur exactly {n,} or more times, we can set lower bound.

//* Match letter 'l' and must occur exactly between 2-4 times
re = /Hel{2,}o/;
//*[Hel{2,4}o]: pattern must contain 2,3 or 4 'l's

/*
* True values:
"Hello", "Hellodf","Hellodfdfd"

* False values:
"Helaslodfdfd", "Helow", 


*/
//-----------------------------------------------------------

//************* Grouping: Parenthesis{() ******************

//* Group multiple character sets

//* 1. Match pattern any 1 number along with letter x must occur 3 times
re = /^([0-9]x){3}$/;
//*[Hel{2}o]: pattern must contain 2 'l's

/*
* True values:
"2x2x2x", "5x5x5x","8x8x8x", 

* False values:
"81x81x81x5x", "3x3x3x3x", "9x9x9x9x"


*/
//-----------------------------------------------------------

// String to match
//const str = "sdfd9rey?";

// For checking quantifiers
//const str = "Helllllo";

// For checking grouping
const str = "9x9x9x9x";

// Logging the result
const result = re.exec(str);

console.log(result);

function reTest(re, str) {
	if (re.test(str)) {
		console.log(`${str} matched ${re.source} `);
	} else {
		console.log(`${str} does NOT matched ${re.source} `);
	}
}

reTest(re, str);
