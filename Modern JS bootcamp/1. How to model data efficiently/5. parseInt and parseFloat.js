/*
 * parseInt and parseFloat method converts the given variable to integer and float point respectively
 */

let num1 = "45";
let num2 = "45.65";
let num3 = "48Thi8sYfg";
let num4 = "ThisYfg48";
let num5 = "This48Yfg";
let num6 = "  98  ";

console.log(parseInt(num1)); //45
console.log(parseInt(num2)); //45

//* If the number is inside the string and its at the starting of the string then and only then parseInt converts the string to number
//*
console.log(parseInt(num3)); //48

console.log(parseInt(num4)); //NaN
console.log(parseInt(num5)); //NaN

//* If the stating of the string is space it ignores the spaces and still converts the string to number
console.log(parseInt(num6)); //98

console.log(parseFloat(num1)); //45
console.log(parseFloat(num2)); //45.65
console.log(parseFloat(num3)); //48
console.log(parseFloat(num4)); //NaN
console.log(parseFloat(num5)); //NaN
console.log(parseFloat(num6)); //98
