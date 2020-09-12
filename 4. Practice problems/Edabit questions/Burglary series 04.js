// Burglary Series (04): Add its Name
// "What about Brutus, is he gone?" asks your spouse. Brutus is right in front of you but you never liked him and iguanas can easily disappear...

// Given an object of the stolen items, add the name of the pet and a value and return the object with his name on it.

// Examples
// {} ➞ {Brutus: 300}

// {piano: 200} ➞ {piano: 200, Brutus: 400}

function addName(obj, name, value) {
	let newObj = obj;
	newObj[name] = value;
	return newObj;
}

console.log(addName({ piano: 500 }, "Brutus", 400));
console.log(addName({}, "Brutus", 300));
console.log(addName({ piano: 500, stereo: 300 }, "Caligula", 440));
