// Object Oriented Programming: Use an IIFE to Create a Module

/*
Create a module named funModule to wrap the two mixins isCuteMixin and singMixin. funModule should return an object.
*/
let isCuteMixin = function (obj) {
	obj.isCute = function () {
		return true;
	};
};
let singMixin = function (obj) {
	obj.sing = function () {
		console.log("Singing to an awesome tune");
	};
};

// COnverting module to an IFFIE

let funModule = (function () {
	return {
		isCuteMixin: function (obj) {
			obj.isCute = function () {
				return true;
			};
		},
		singMixin: function (obj) {
			obj.sing = function () {
				console.log("Singing to an awesome tune");
			};
		},
	};
})();

// Using arrow functions

let funModuleArrow = (() => {
	return {
		isCuteMixin: (obj) => (obj.isCute = () => true),
		singMixin: (obj) =>
			(obj.sing = () => console.log("Singing to an awesome tune")),
	};
})();

console.log(funModule);
console.log(funModuleArrow);
