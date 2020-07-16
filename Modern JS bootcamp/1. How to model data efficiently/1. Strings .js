/*
* String 
1. Each character in string has a corresponding index
2. Every string has property called length
*/

let string1 = "hello";

console.log(string1.length); //5

let str2 = "lololoolol";
console.log(str2.length); //10

let str3 = "           . "; //Space is also counted as a character
console.log(str3.length); //13

let str4 = ""; // No character returns zero length
console.log(str4.length); //0

// Access specific index from the string

let song = "Hold me down";
console.log(song[0]); //"H"

// This will give the length of the string
console.log(song.length); //12

// But when we try to access the same index we wil get undefined,
//because the string has length of twelve and actual indices will be length -1 i.e 11
// length will be always 1 value greater than the indices of string
console.log(song[12]);

// To access the last character we can use the last character
console.log(song[11]); //"n"

// For accessing the last character we can also use length - 1 or literal length -1
console.log(song[12 - 1]); // "n" or
console.log(song[song.length - 1]); //"n"

// We cannot modify strings they are immutable, we have to create new string and variable

song[0] = "T";

console.log(song); // "Hold me down"

// for changing string we have to use new string and new variable

let song2 = "T" + song.slice(1); // Slice will work similarly as it works in an array
// IN this case we are getting the string from index 1 to end
console.log(song2); // Told me down
