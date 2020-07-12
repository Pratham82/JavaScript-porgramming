// Basic JavaScript: Count Backwards With a For Loop

// Push the odd numbers from 9 through 1 to myArray using a for loop.

// Setup
var myArray = [];

// Only change code below this line
for(var i = 9; i>=1; i--){
    if(i % 2 !=0 ){
        myArray.push(i)
    }
}

console.log(myArray);