// Metacharacter Symbols
/^h/i; // Must start with
/ world$/i; // Must ends with
/^hello$/i; // Must begin and end with
/h.llo/i; // Matches any ONE character
/h*llo/i; // Matches any character 0 or more times
/gre?a?y/i; // Optional character
/gre?a?y\?/i; // Escape character

let re;

//RegEX literals
re = /hello/;
re = /hello/i;

//-----------------------------------------------------------

//* Meta character symbol
re = /^h/i;
//*(^w) Must starts with h

/*
* True values:
"Hello", "Hell World", "Hi"

* False values:
"ello", "trello", "gello"

*/

//-----------------------------------------------------------

re = /d$/i;
//*(w$) Must ends with d

/*
* True values:
"Hellod", "Hell World", "Hid"

* False values:
"ello", "trello", "gello"
*/

re = /^Hello$/i;
//* (^word) Must begins with and ends with checks exact pattern

/*
* True values:
"Hello", "hello"

* False values
"Hellow", "0Hello"
*/

//-----------------------------------------------------------

re = /^H.llo$/i;
//* (^w.rd$)  Matches any one character alphabet/symbol
/*
* True values:
hdllo, hkllo,h1llo, h5llo

* False values:
"h34llo", "hffllo"
*/

//-----------------------------------------------------------

re = /H*llo/i;
//* (w*rd) Matches zero or more character alphabet/symbol or empty space
/*
* True values:
"Hgddfdfddllo", "Hgddfdfddfddllo", "Hllo" 

* False values
"dsfdfllo" , "hdfgfgo"

*/
//-----------------------------------------------------------

re = /gre?a?y/i;

/*
* True values:
"grey", "gray","grAy", "grEy", "GrAy", "gRAy", "GrEY"

* False values:
'grty', "geay", "grsy"

*/

//-----------------------------------------------------------
//* Escape characters

// Meta character as literal values in pattern
// We want '?' as the literal character in our pattern, but it is meta char that's why we have to use escape character before it to make ? an literal char
re = /gre?a?y\?/i; //

//-----------------------------------------------------------

// String to match
// const str = "Hello world";
// const str = "Hdllo";
// const str = "Hgddfdfddllo";
// const str = "grey";
const str = "GrAy?";

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
