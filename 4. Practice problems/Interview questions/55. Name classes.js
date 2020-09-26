// Name Classes
// Write a class called Name and create the following attributes given a first name and last name (as fname and lname):

// An attribute called fullname which returns the first and last names.
// A attribute called initials which returns the first letters of the first and last name. Put a . between the two letters.
// Remember to allow the attributes fname and lname to be accessed individually as well.

// Examples
// a1 = new Name("john", "SMITH")
// a1.fname ➞ "John"

// a1.lname ➞ "Smith"

// a1.fullname ➞ "John Smith"

// a1.initials ➞ "J.S"

class Name {
	constructor(fname, lname) {
		this.fname = fname[0].toUpperCase() + fname.slice(1).toLowerCase();
		this.lname = lname[0].toUpperCase() + lname.slice(1).toLowerCase();
		this.fullname = `${
			this.fname[0].toUpperCase() + this.fname.slice(1).toLowerCase()
		} ${this.lname[0].toUpperCase() + this.lname.slice(1).toLowerCase()}`;
		this.initials = `${this.fname[0].toUpperCase()}.${this.lname[0].toUpperCase()}`;
	}
}

a1 = new Name("john", "SMITH");

console.log(a1.fname);
console.log(a1.fullname);
console.log(a1.initials);

a2 = new Name("sARah", "fRolliE");
console.log(a2.fname);
