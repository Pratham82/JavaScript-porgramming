// Basic Algorithm Scripting: Convert Celsius to Fahrenheit

/*
You are given a variable celsius representing a temperature in Celsius. Use the variable fahrenheit already defined and assign it the Fahrenheit temperature equivalent to the given Celsius temperature. Use the algorithm mentioned above to help convert the Celsius temperature to Fahrenheit.
*/


function convertToF(celsius) {
  let fahrenheit = celsius *9/5 +32;
  return fahrenheit;
}

convertToF(30);

console.log(convertToF(30));