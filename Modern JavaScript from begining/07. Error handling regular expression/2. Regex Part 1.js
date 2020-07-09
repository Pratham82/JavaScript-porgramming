//* Regular Expressions Part - 1

/*
1. Regular expression is used to describe a pattern of characters 
2. Used for pattern matching or pattern searching
3. Used for validation or pulling things out of body of text(For eg. email address, phone numbers )

RegEx methods
* regEx.exec(string) : returns matching pattern, index, input
* regEx.test(String) : returns if pattern is present or not


String methods
* string.match(regEx) : returns an aErray with all matches
* string.search(regEx) : returns starting index of first match
* string.replace(regEx): returns a new string with all or some matches of patterns replaced


*/

// Functions for evaluating regEX
// let regEx;
let regEx = /hello/;

console.log(regEx); // /hello/
console.log(regEx.source); // hello

// * (exec): Returns the result in an array or null

// The input will be passed as parameter
let result = regEx.exec("Hi there hello 👋 ");

console.log("------exec-------");

console.log(result);
// ["hello", index: 9, input: "Hi there hello 👋 ", groups: undefined]

let result2 = regEx.exec("Hi there thellos 👋 ");

console.log(result2);
// It doesn't matter if there is any other character before or after our pattern it will find the pattern the array of characters and returns an array
//["hello", index: 10, input: "Hi there thellos 👋 ", groups: undefined]

let result3 = regEx.exec("Hi there ello 👋 ");
// If there is no match found we will get null as output

console.log(result3); //null

//*** Getting specific values from result
console.log(result);
console.log(result[0]); // hello (Returns first match)
console.log(result.index); //9 (Returns where the match is occurred)
console.log(result.input); //Hi there hello 👋 (Returns the input)

//*** (test): Returns true or false if there is a match in the passed string
console.log("-----test------");

/*
i: (case insensitive) It checks if the pattern is there and ignores uppercase or lowercase
g: (global search) It search for entire paragraph/word each and every occurrence
*/
let regEx2 = /hello/i;

const testResult = regEx2.test("Hello world 👋");
const testResult2 = regEx2.test("Gello world 👋");

console.log(testResult); // true
console.log(testResult2); // false

//*** match() - Returns result array or null
console.log("-----match-----");

let regEx3 = /hello/gi;
let string = "hi hello hello what's up with 2 hellos ";
let string2 = "hi mellow gello what's up with no hellos ";
let matchResult = string.match(regEx3);
let matchResult2 = string2.match(regEx3);

console.log(matchResult); //["hello", "hello", "hello"]
console.log(matchResult2); //["hello"]

//*** search(): returns the index of the first match if there is no match then returns -1

console.log("-----search-----");

let regEx4 = /hello/gi;

let string3 = "What are you up to today? hey hello Im talking to you";
let searchResult = string3.search(regEx4);
console.log(searchResult); //30

console.log("-----replace-----");
let re1 = /hello/gi;
const str = "hi hello, how are you, hey hello 😠 I'm talking to you";
let res = str.replace(re1, "gello");
console.log(res);
