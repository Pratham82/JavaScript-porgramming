//Regular Expressions: Match a Literal String with Different Possibilities
    
// 

/*
You can search for multiple patterns using the alternation or OR operator: |.
You can do this by adding more patterns with more OR operators separating them, like /yes|no|maybe/.
*/

// Complete the regex petRegex to match the pets "dog", "cat", "bird", or "fish".



let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Change this line
let result = petRegex.test(petString);
