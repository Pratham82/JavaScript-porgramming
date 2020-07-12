/*
Convert John Fitzgerald Kennedy > J.F. Kennedy
*/

var name = "John Fitzgerald Kennedy";
var splitted = name.split(" ");
var empty_arr = [];

for (var i = 0; i < splitted.length - 1; i++) {
	empty_arr.push(splitted[i].charAt(0) + ".");
}
final = empty_arr.join(" ").concat(" ", splitted[2]);
console.log(final); //J. F. Kennedy
