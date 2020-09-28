//* Chaining 3 promises together

let getWood = () => new Promise((res, rej) => res("Got the wood 🌴"));
let buildBoat = () => new Promise((res, rej) => res("Built a boat ⛵"));
let sailTheOcean = () => new Promise((res, rej) => res("Sailed the ocean 🌊"));

//* Resolved promises
//* each Promise returns another Promise, making chaining then statements convenient.
getWood()
	.then(() => buildBoat())
	.then(() => sailTheOcean())
	.then(() => console.log("The sailor returns 🌊"));

//* you can even remove arrow function and make the code look even more compact. JavaScript can now treat a function as a return value.
getWood()
	.then(buildBoat())
	.then(sailTheOcean())
	.then(console.log("The sailor returns 🌊"));
