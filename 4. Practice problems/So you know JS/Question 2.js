// What will be the output of this
var a = 1,
	b = function a(x) {
		x && a(--x);
	};
alert(a);
