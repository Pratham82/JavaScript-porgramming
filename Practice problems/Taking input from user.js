//Taking input
console.log("Enter your name: \t");
const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

rl.on("line", (input) => {
	console.log(`Hi 👋 ${input} , how are you ❓`);

	rl.close();
});
