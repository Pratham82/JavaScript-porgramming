// Basic JavaScript: Generate Random Whole Numbers with JavaScript

// Use this technique to generate and return a random whole number between 0 and 9.


var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

function randomWholeNum() {

  // Only change code below this line
  
  return Math.floor((Math.random()*10)+0);
}

randomWholeNum();