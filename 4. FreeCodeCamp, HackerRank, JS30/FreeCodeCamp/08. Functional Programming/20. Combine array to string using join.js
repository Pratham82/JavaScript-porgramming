// Functional Programming: Combine an Array into a String Using the join Method

/*
1. The join method is used to join the elements of an array together to create a string. 
2. It takes an argument for the delimiter that is used to separate the array elements in the string.
*/

/*
Use the join method (among others) inside the sentensify function to make a sentence from the words in the string str. The function should return a string. For example, "I-like-Star-Wars" would be converted to "I like Star Wars". For this challenge, do not use the replace method.
*/

function sentensify(str) {
	// Only change code below this line
	var new_str = str.split(/\W/);
	return new_str.join(" ");
	// Only change code above this line
}
sentensify("May-the-force-be-with-you");

console.log(sentensify("May-the-force-be-with-you")); //May the force be with you
