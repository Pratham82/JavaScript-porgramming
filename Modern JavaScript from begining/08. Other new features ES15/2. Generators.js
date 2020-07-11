// Generators

/*
1. We have to give an * after function for indicating the function as generator
2.  we can yield value from it
*/

function* sayNames() {
	yield "Joe";
	yield "Tracy";
	yield "Frank";
	yield "Trode";
}

const names = sayNames();

console.log(names.next());
console.log(names.next());
console.log(names.next());

function* IDGenerator() {
	let i = 1;
	while (true) {
		yield i++;
	}
}

const id = IDGenerator();

console.log(id.next().value); //1
console.log(id.next().value); //2
console.log(id.next().value); //3
console.log(id.next().value); //4
console.log(id.next().value); //5
