/*
* Mediator pattern
1. It is another behavioral pattern like the observer.

2. It's called the Mediator pattern and the idea is to have a mediator which is basically an interface for communicating with what are called colleagues which are just mediated objects.

3. Examples: chatroom
*/

// User function

const User = function (name) {
	this.name = name;
	this.chatroom = null;
};

User.prototype = {
	// Send will take the message sent by the user, directed for the user
	send: function (message, to) {
		// 'this' pertains to current user
		this.chatroom.send(message, this, to);
	},
	receive: function (message, from) {
		console.log(`${from.name} to ${this.name}: ${message}`);
	},
};

// User chatroom
const Chatroom = function () {
	let users = {}; // list of users

	return {
		// We will pass in the current user in the users object and set the chatroom to current user
		register: function (user) {
			users[user.name] = user;
			user.chatroom = this;
		},
		send: function (message, from, to) {
			// Single user
			if (to) {
				to.receive(message, from);
			} else {
				//Message to everyone
				for (key in users) {
					// If the sender is same to the user we will ignore user
					if (users[key] !== from) {
						users[key].receive(message, from);
					}
				}
			}
		},
	};
};

const jake = new User("Jake");
const john = new User("John");
const javier = new User("Javier");
const dex = new User("Dex");

const chatroom = new Chatroom();

chatroom.register(jake);
chatroom.register(john);
chatroom.register(javier);
chatroom.register(dex);

jake.send("Hi john 💇", john);
dex.send("Hello 😄", javier);

// Message to everyone
javier.send("how are you everyone ❓");
//console.log(User);
