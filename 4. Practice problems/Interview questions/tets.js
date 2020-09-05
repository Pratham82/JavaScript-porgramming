function removeProperty(obj, prop) {
	if (obj.hasOwnProperty(prop)) {
		delete obj.prop;
		return true;
	} else {
		return false;
	}
}

console.log(removeProperty({ test: 1 }, "test"));
console.log(removeProperty({ test2: 1 }, "test"));
console.log(removeProperty({ new1: 1 }, "new1"));
console.log(removeProperty({ new1: 1 }, "new"));
