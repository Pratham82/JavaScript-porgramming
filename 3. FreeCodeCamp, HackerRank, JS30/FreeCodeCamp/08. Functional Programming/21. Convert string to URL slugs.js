// Functional Programming: Apply Functional Programming to Convert Strings to URL Slugs

/*
Fill in the urlSlug function so it converts a string title and returns the hyphenated version for the URL. You can use any of the methods covered in this section, and don't use replace. Here are the requirements:

The input is a string with spaces and title-cased words

The output is a string with the spaces between words replaced by a hyphen (-)

The output should be all lower-cased letters

The output should not have any spaces
*/

// The global variable
var globalTitle = "Winter Is Coming";

// Only change code below this line
function urlSlug(title) {
	var n = title.split(/\W/);
	var EmptyArr = [];
	n.map((i) => {
		if (i != "") {
			EmptyArr.push(i);
		}
	});

	var new_title = EmptyArr.join("-").toLocaleLowerCase();
	return new_title;

	// var new_title = title.toLowerCase().split(" ").join("-");
	// return new_title;
}
// Only change code above this line
console.log(urlSlug(globalTitle));
