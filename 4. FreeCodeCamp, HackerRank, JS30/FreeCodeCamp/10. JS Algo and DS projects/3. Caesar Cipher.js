// JavaScript Algorithms and Data Structures Projects: Caesars Cipher
/*

*/

function rot13(str) {
	return str.replace(/[A-Z]/g, (l) =>
		String.fromCharCode((l.charCodeAt(0) % 26) + 65)
	);
}

rot13("SERR PBQR PNZC");
console.log(rot13("SERR PBQR PNZC")); //FREE CODE CAMP
// console.log(ne);
console.log(rot13("SERR CVMMN!")); //FREE PIZZA!
