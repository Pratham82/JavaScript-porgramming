function arrRev(arr) {
	let len = getLengthNatively(arr);
	let op = "";
	for (var i = len - 1; i >= 0; i--) {
		op += arr[i] + " ";
	}
	console.log(op);
}

function getLengthNatively(s) {
	l = 0;
	while (s[l] !== undefined) {
		l++;
	}
	return l;
}

// arrRev([2, 4, 5, 6, 7]);
arrRev([2, 4, 5]); //5 4 2

arrRev([33, 46, 7, 8, 8, 9, 97]); //97 9 8 8 7 46 33

arrRev([65, 8, 9, 5, 24, 11, 22, 66, 33]); //33 66 22 11 24 5 9 8 65
