// Make a Circle with OOP
// Your task is to create a Circle constructor that creates a circle with a radius provided by an argument. The circles constructed must have two getters getArea() (PIr^2) and getPerimeter() (2PI*r) which give both respective areas and perimeter (circumference).

// For help with this class, I have provided you with a Rectangle constructor which you can use as a base example.

// Examples
// let circy = new Circle(11);
// circy.getArea();

// Should return 380.132711084365

class Rectangle {
	constructor(sideA, sideB) {
		this.sideA = sideA;
		this.sideB = sideB;
	}
	getArea() {
		return this.sideA * this.sideB;
	}
	getPerimeter() {
		return (this.sideA + this.sideB) * 2;
	}
}

class Circle {
	constructor(radius) {
		this.radius = radius;
	}

	getArea() {
		return Math.PI * this.radius ** 2;
	}

	getPerimeter() {
		return 2 * Math.PI * this.radius;
	}
}

// unquote and use run to test these cases
let q = new Circle(4.44);
console.log(q.getArea());
console.log(q.getPerimeter());
