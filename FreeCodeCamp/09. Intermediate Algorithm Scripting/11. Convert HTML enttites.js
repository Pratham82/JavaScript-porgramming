// Intermediate Algorithm Scripting: Convert HTML Entities

/*
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
*/

function convertHTML(str) {
	let html_entities = {
		"&": "&amp;",
		"<": "&lt;",
		">": "&gt;",
		'"': "&quot;",
		"'": "&apos;",
	};

	return str.replace(/([&<>\"'])/g, (m) => html_entities[m]);
}

convertHTML("Dolce & Gabbana");
console.log(convertHTML("Dolce & Gabbana"));
