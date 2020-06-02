// Basic JavaScript: Iterate Odd Numbers With a For Loop

// Push the odd numbers from 1 through 9 to myArray using a for loop.

// Setup
var myArray = [];

// Only change code below this line

for(var i = 0; i<=9; i++){
    if( i % 2 != 0 ){
        myArray.push(i)
    }
}

console.log(myArray);