// Type JavaScript here and click "Run Code" or press Ctrl + s
// console.log('Hello, world!');


// Challenge 1
function addTwo(num) {
  return num + 2;
}

// To check if you've completed it, uncomment these console.logs!
// console.log(addTwo(3));
// console.log(addTwo(10));


// Challenge 2
function addS(word) {
  return word + 's';
}

// uncomment these to check your work
// console.log(addS('pizza'));
// console.log(addS('bagel'));


// Challenge 3
function map(array, callback) {
  let opArray = []
  for (let i = 0; i < array.length; i++) {
    opArray.push(callback(array[i]));
  }
  return opArray;
}

console.log(map([1, 2, 3], addTwo));

function capitalize(char) {
  return char.toUpperCase();
}

// Challenge 4
function forEach(array, callback) {
  let word = ''
  for (let i = 0; i < array.length; i++) {
    word += callback(array[i])
  }
  console.log(word)
}

