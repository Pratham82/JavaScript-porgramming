// Functional Programming: Implement map on a Prototype

/*
1. Map is a pure function, and its output depends solely on its inputs. Plus, it takes another function as its argument.
2. Map behaves exactly like the Array.prototype.map() with a for loop or Array.prototype.forEach().
3.  A pure function is allowed to alter local variables defined within its scope, although, it's preferable to avoid that as well.
*/

/*
Write your own Array.prototype.myMap(), which should behave exactly like Array.prototype.map(). You may use a for loop or the forEach method.
*/

// The global variable
var s = [23, 65, 98, 5];

Array.prototype.myMap = function (callback) {
	var newArray = [];
	// Only change code below this line
	for (var i = 0; i < this.length; i++) {
		newArray.push(callback(this[i]));
	}
	// Only change code above this line
	return newArray;
};

var new_s = s.myMap(function (item) {
	return item * 2;
});

console.log(new_s); // [46, 130, 196, 10]
