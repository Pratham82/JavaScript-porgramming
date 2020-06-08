// Basic Data Structures: Copy Array Items Using slice()

/* slice(), rather than modifying an array, copies, or extracts, a given number 
of elements to a new array, leaving the array it is called upon untouched.     
* slice() takes only 2 parameters  
* the first is the index(begin extraction), second isindex (stop extraction)(extraction will occur up to, but not including the element at this index)

Example
let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];

let todaysWeather = weatherConditions.slice(1, 3);
/// todaysWeather equals ['snow', 'sleet'];
/// weatherConditions still equals ['rain', 'snow', 'sleet', 'hail', 'clear']
*/

/*
We have defined a function, forecast, that takes an array as an argument. Modify the function using slice() to extract information from the argument array and return a new array that contains the elements 'warm' and 'sunny'.
*/

function forecast(arr) {
    // Only change code below this line
    arr = arr.slice(2,4)
    return arr;
}
  
// Only change code above this line
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));
  