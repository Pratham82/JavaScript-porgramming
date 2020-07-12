let fact = (num) => {
	let factorial = 1;
	for (var i = 1; i <= num; i++) {
		factorial *= i;
	}
	return factorial;
};

console.log(fact(5));
//result.innerText = `${input1.value.length}`;
