//***************** Shorthand character classes ********************

// Shorthand Character Classes
/\w/; // Word character - alphanumeric or _
/\w+/; // + = one or more
/\W/; // Non-Word character
/\d/; // Match any digit
/\d+/; // Match any digit 0 or more times
/\D/; // Match any Non-digit
/\s/; // Match whitespace char
/\S/; // Match non-whitespace char
/Hell\b/i; // Word boundary

// Assertions
/x(?=y)/; // Match x only if followed by y
/x(?!y)/; // Match x only if NOT followed by y

let re;

//-----------------------------------------------------------

//* 1. Word character: alphanumeric and an underscore

re = /\w/;
//*[w]: pattern must contains alphanumeric characters or number

//-----------------------------------------------------------

//* 2.  Word character: alphanumeric and an underscore (one or more times)

re = /\w+/;
//*[w+]: pattern must contains one or more alphanumeric characters or number

/*
* True values:
"gray", "Grey", "gReY",  "GrEy?", "gRAY?"

* False values:
"#", "?", "@@", "?^^&*"
*/

//-----------------------------------------------------------

//* 3. Non word character

re = /\W/;
//*[W]: pattern should contains one or more alphanumeric characters or number
/*
* True values:
"#", "?", "@@", "?^^&*", "  ", "     "

* False values:
"gray", "Grey", "gReY", "errr333", "sdf34"

*/

//-----------------------------------------------------------

//* 4. Match any digits

re = /\d/;
re = /\d+/; // one or more times
//*[W]: pattern should contains one or more alphanumeric characters or number
/*
* True values:
"8", "4556", "54", "s565d", "dfdf34", " 3434ffb"

* False values:
"sdf*&", "#%&dsf", "gResdfdsfY", "dfsdf", ""

*/

//-----------------------------------------------------------

//* 5. Match any non digits

re = /\D/;
//* [D]: pattern should not contain digits
/*
* True values:
"ddf", "sdfd345", "df@#$", "dsf34&*"

* False values:
"34", "75", "4520", "dfsdf", ""

*/

//-----------------------------------------------------------

//* 6. Match white space character

re = /\s/;
//* [D]: pattern should not contain digits
/*
* True values:
"hi ther", " fgh", "     how  are you", "dsf34&*"

* False values:
"34", "75", "4520", "dfsdf", ""

*/

//-----------------------------------------------------------

//* 7. Match any non white spaced characters

re = /\S/;
//* [D]: pattern should not contain digits
/*
* True values:
"34", "75", "4520", "dfsdf", ""

* False values:
"", "   ", "     ", " "


*/

//-----------------------------------------------------------

//* 8. Adding word boundary

// Her wanted only find match with exact word hello for finding the exact match we will use word boundary after the pattern.

// String used: str = "Hello world, what the hell"
re = /hell/gi; // index found at 0
re = /hell\b/gi; // index found at 22

//-----------------------------------------------------------

//* 9. Assertions

re = /x(?=y)/; // Match x only if followed by y
//re = /x(?!y)/; // Match x only if NOT followed by y

//-----------------------------------------------------------

// String to match

// For checking grouping
//const str = "";

// For word boundary
//const str = "Hello world, what the hell";

// For assertions
const str = "aaaaxyb";

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
