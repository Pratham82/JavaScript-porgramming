// *Burglary Series (08): Remove an Entry
//* Your spouse tells you that one of the items on the list wasn't stolen, it is in your castle in Transilvania. Given an object of the stolen items and an item name, return a copy without that item on the list.

// Examples
//* removeEntry({ piano: 300, tv: 100, skate:50 }, "skate" ) ➞
//* { piano: 300, tv: 100 }

//* removeEntry({ mirror: 500, painting: 1 },"mirror") ➞ { painting: 1 }

const removeEntry = (obj, itemName) =>
	Object.fromEntries(
		Object.entries(Object.assign({}, obj)).filter(
			(val) => val[0] !== itemName
		)
	);

console.log(removeEntry({ piano: "random", tv: 100, skate: 50 }, "skate"));
//* Output:
//* { piano: 'random', tv: 100 }
