/*
* Factory Pattern

1. Factory pattern also called the factory method in javascript which is a way of creating an interface for creating objects 

2. But we can let subclasses define which classes to instantiate and factory methods are often used in applications to manage and maintain and manipulate collections of objects that are different.

3. But at the same time have many common characteristics

4. Let's say some kind of paid membership application or web site where your members may have different types but still have the same properties and methods.

*/

function memberFactory() {
	this.createMember = function (userName, subType) {
		let member;

		// depending on the subtype we will instantiate new object of that subclass
		if (subType == "standard") {
			member = new standardMemberShip(userName);
		} else if (subType == "premium") {
			member = new premiumMemberShip(userName);
		} else if (subType == "VIP") {
			member = new vipMembership(userName);
		}

		member.subType = subType;

		member.define = function () {
			console.log(
				`Username: ${this.userName}, MemberShip: ${this.subType} : cost ${this.cost}`
			);
		};

		return member;
	};
}

// Creating subclasses

const standardMemberShip = function (userName) {
	this.userName = userName;
	this.cost = "$50";
};
const premiumMemberShip = function (userName) {
	this.userName = userName;
	this.cost = "$100";
};
const vipMembership = function (userName) {
	this.userName = userName;
	this.cost = "$200";
};

const members = [];

const factory = new memberFactory();

members.push(factory.createMember("Jake", "standard"));
members.push(factory.createMember("Joe", "premium"));
members.push(factory.createMember("Brian", "VIP"));
members.push(factory.createMember("Brock", "standard"));

console.log(members);
/*
 [standardMemberShip, premiumMemberShip, vipMembership, standardMemberShip]
*/

// Iterating over members
let mArr = members.map((user) => user.define());

/*
Username: Jake, MemberShip: standard : cost $50
Username: Joe, MemberShip: premium : cost $100
Username: Brian, MemberShip: VIP : cost $200
Username: Brian, MemberShip: VIP : cost $200
*/
