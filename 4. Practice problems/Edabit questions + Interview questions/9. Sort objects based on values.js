/*

---------------------
Drink Sorting
You will be given an array of drinks, with each drink being an object with two properties: name and price. Create a function that has the drinks array as an argument and return the drinks object sorted by price in ascending order.

Assume that the following array of drink objects needs to be sorted:

drinks = [
  {name: "lemonade", price: 50},
  {name: "lime", price: 10}
]
*/

function sortDrinkByPrice(drinks) {
	// let arr = ;
	return Object.values(drinks).sort((p1, p2) => p1.price - p2.price);
}

drinks = [
	{ name: "lemonade", price: 50 },
	{ name: "lime", price: 10 },
];
console.log(sortDrinkByPrice(drinks));
