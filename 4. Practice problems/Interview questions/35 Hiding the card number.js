// Hiding the Card Number
// Write a function that takes a credit card number and only displays the last four characters. The rest of the card number must be replaced by ************.

// Examples
// cardHide("1234123456785678") ➞ "************5678"

const cardHide = (card) =>
	card.split("").slice(0, -4).join("").replace(/[0-9]/g, "*") +
	card.split("").slice(-4).join("");

console.log(cardHide("1234123456785678"));
console.log(cardHide("35123413355523"));

console.log("35123413355523");
console.log("************5678".length);
console.log("**********5523".length);
