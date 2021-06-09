//Even or Odd: Which is Greater?

//Examples
//evenOrOdd("22471") ➞ "Even and Odd are the same"
//
//evenOrOdd("213613") ➞ "Even and Odd are the same"
//
//evenOrOdd("23456") ➞ "Even is greater than Odd"

const evenOrOdd =  str =>{
	let evens = str.split("").map(val => Number(val)).filter(val => val  %2 === 0).reduce((a,b) => a+b)
	let odds = str.split("").map(val => Number(val)).filter(val => val  %2 != 0).reduce((a,b) => a+b)
	return odds > evens ? 'Odd is greater than Even' : evens > odds ? "Even is greater than Odd": "Even and Odd are the same"
}

console.log(evenOrOdd("22471"))


