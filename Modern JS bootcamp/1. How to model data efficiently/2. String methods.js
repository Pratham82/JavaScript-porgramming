/*
* String methods
1. Searching within a string
2. Replacing parts of a string
3. Changing case (uppercase/lowercase)
*/

let str1 = "testing is underrated";

//* Cases
console.log(str1.toUpperCase());
console.log(str1.toLowerCase());

//* trim (Removes the leading and trailing white space from the string)
let str2 = "      this is a beautiful day🙂   ";

console.log(str2.trim()); //this is a beautiful day🙂

// We can chain multiple methods on the string
console.log(str2.trim().toUpperCase()); // THIS IS A BEAUTIFUL DAY🙂

//* indexOf: return the index of character or substring which is appeared in the string
//* It is also case sensitive so we have to be specific
let tvSeries = "BreakingBad";

console.log(tvSeries.indexOf("Breaking")); // 0
console.log(tvSeries.indexOf("Bad")); // 8

// If we pass alphabet then it will return the first occurrence of the string
console.log(tvSeries.indexOf("k")); // 4
console.log(tvSeries.indexOf("B")); // 0

//* If the substring or character is not present in the string then we will get -1
//* -1 is the representation of not found

console.log(tvSeries.indexOf("Friends")); //-1
console.log(tvSeries.indexOf("X")); //-1

//* slice: gives us the part of the string

let str3 = "CheeseCake";
console.log(str3.slice(2)); // "eeseCake"

//* slice doest not alter the original string
console.log(str3); // "CheeseCake"

//* we can use it to store in another variable

console.log(str3.indexOf("Cake")); //6

// here we are slicing the str3 from the the index 6 which will give us 'Cake' and then concatenating to "Chocolate"
let cake2 = "Chocolate" + str3.slice(6);

// We can also combine indexOf with slice
let cake2_ = "Chocolate" + str3.slice(str3.indexOf("Cake"));
console.log(cake2);

// If the provided index is not present in the string we will get an empty string
console.log(str3.slice(15)); //""

//* We can pass multiple parameters inside the slice method

let str4 = "EdEddEddy";

//* For getting the work Edd inside str4 we can pass the exact indexes
//* Slice method will start from the given starting index and slice it before the last index
//* last index is not inclusive in the slice method
let e = str4.slice(2, 5);
console.log(e);

//* replace
//* Replace the substring or character with provide string/ char, but only first occurrence will bre changed, other occurrences will remain unchanged
let str5 = "This is the best day of my life!!";

console.log(str5.replace("best", "worst")); //"This is the worst day of my life!!"
let str6 = "Ha Ha Ha Ha";

console.log(str6.replace("Ha", "Hee")); //"Hee Ha Ha Ha"

//* For changing all occurrences we have to use RegEx
//* Her g refers to global and works for every occurrence
console.log(str6.replace(/Ha/g, "Hee")); //Hee Hee Hee Hee
