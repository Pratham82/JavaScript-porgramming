/*
Prefixes vs. Suffixes
Create two functions: isPrefix(word, prefix-) and isSuffix(word, -suffix).

isPrefix should return true if it begins with the prefix argument.
isSuffix should return true if it ends with the suffix argument.
Otherwise return false.

Examples
isPrefix("automation", "auto-") ➞ true

*/
function isPrefix(word, prefix) {
	// return prefix.slice(0, -1);
	return word.startsWith(prefix.slice(0, -1));
}

function isSuffix(word, suffix) {
	return word.endsWith(suffix.slice(1));
}

console.log(isPrefix("automation", "auto-")); //true
console.log(isSuffix("arachnophobia", "-phobia")); //true
console.log(isPrefix("retrospect", "sub-")); //fasle
