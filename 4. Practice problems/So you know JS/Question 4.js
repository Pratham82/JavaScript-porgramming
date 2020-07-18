// What will be the output of this

function b(x, y, a) {
	arguments[2] = 10;
	alert(a);
}
b(1, 2, 3);
