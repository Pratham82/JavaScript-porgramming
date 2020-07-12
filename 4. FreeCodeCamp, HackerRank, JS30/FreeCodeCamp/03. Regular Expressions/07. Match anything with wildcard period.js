// Regular Expressions: Match Anything with Wildcard Period

/* 
Sometimes you won't (or don't need to) know the exact characters in your patterns. 
Thinking of all words that match, say, a misspelling would take a long time
Thinking of all words that match, say, a misspelling would take a long time

The wildcard character . will match any one character.
if you wanted to match "hug", "huh", "hut", and "hum", you can use the regex /hu./ to match all four words.

Example: 
let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
huRegex.test(humStr); // Returns true
huRegex.test(hugStr); // Returns true
*/

/*
Complete the regex unRegex so that it matches the strings "run", "sun", "fun", 
"pun", "nun", and "bun". Your regex should use the wildcard character.
*/

// '.un' signifies that any word that end with un will return true
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // Change this line
let result = unRegex.test(exampleStr);

// Example 2: return true
exampleStr = "Let's have fun with regular sun run expressions!";
result = exampleStr.match(unRegex);

console.log(result);