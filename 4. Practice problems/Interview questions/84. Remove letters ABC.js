//Remove the Letters ABC
//Create a function that will remove the letters "a", "b" and "c" from the given string and return the modified version. If the given string does not contain "a", "b", or "c", return null.

const removeABC = (str) =>
  /a|b|c/gi.test(str) ? str.replace(/a|b|c/gi, "") : null;

console.log(removeABC("This might be a bit hard"));
console.log(removeABC("Hello world"));
