// Regular Expressions: Specify Exact Number of Matches

/*
To specify a certain number of patterns, just have that one number between the curly brackets.
Example
to match only the word "hah" with the letter a 3 times, your regex would be /ha{3}h/.

let A4 = "haaaah";
let A3 = "haaah";
let multipleHA = /ha{3}h/;
multipleHA.test(A4); // Returns false
multipleHA.test(A3); // Returns true
*/

// Change the regex timRegex to match the word "Timber" only when it has four letter m's.




let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; // Change this line
let result = timRegex.test(timStr);

console.log(result);