/*

array syntax:
* arr.reduce(callback, initialValue)

* Reducer comes with some terminology such as reducer and accumulator. 

* The accumulator is the value that we end with and the reducer is what action we will perform in order get to one value.
* Reduce will return one value and one value only hence the name is reduce

*/

// Example using for loop: 👎

let value = 0;
const arr = [5, 10, 15];

for (let i = 0; i < arr.length; i++) {
	value += arr[i];
}

console.log(value); //30

// This is how the reduce method works under the hood
// * Example using reduce 👍
// The previous example worked fine but we can do this with reduce instead which will save us from mutating our value variable

// The below example will also output 30 but will not mutate our value variable (which) we have now called initialValue

/*This is our initials = value i.e the starting point  */
const initialValue = 0;

/*numbers array */
const numbers = [5, 10, 15];

/*reducer method that takes in the accumulator and next item */
const reducer = (accumulator, item) => {
	console.log(`accumulator: ${accumulator}, item: ${item}`);
	return accumulator + item;
};

/*
* reducer function internal working

accumulator: 0, item: 5
accumulator: 5, item: 10
accumulator: 15, item: 15

1. The reduce method is called 3 times because there are 3 values in our array. 
2. The accumulator starts at 0 which is our initial value that we passed to reduce.
3. On each call of the function item is added to accumulator. The final call to method has the accumulator value of 15 and item is 15 15+15 gives 30 which is final value.
4. Reducer method returns the accumulator plus item
*/

/* We give the reduce method our reducer  function and our initial value*/
const total = numbers.reduce(reducer, initialValue);
console.log(total); // 30
