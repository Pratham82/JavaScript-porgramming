//Basic JavaScript: Practice comparing different values

// Note
// In JavaScript, you can determine the type of a variable or a value with the typeof operator,
// typeof 3   // returns 'number'

// The compareEquality function in the editor compares two values using the equality operator. Modify the function so that it returns "Equal" only when the values are strictly equal.

// Setup
function compareEquality(a, b) {
    if (a === b) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  compareEquality(10, "10");
  