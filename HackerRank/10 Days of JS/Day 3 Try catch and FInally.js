function reverseString(s) {
	try {
		let arr = s.split("");
		let rev = arr.reverse().join("");
		console.log(rev);
	} catch {
		console.log("s.split is not a function");
		console.log(s);
	}
}

reverseString("1234");
reverseString(Number(1234));
