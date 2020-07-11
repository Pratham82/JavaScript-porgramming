// Local data of users

const data = [
	{
		name: "Jack harlow",
		age: 28,
		gender: "Male",

		lookingFor: "Female",
		location: "Mumbai",
		image: "https://randomuser.me/api/portraits/men/99.jpg",
	},
	{
		name: "John Snow",
		age: 30,
		gender: "Male",
		lookingFor: "Female",
		location: "Delhi",
		image: "https://randomuser.me/api/portraits/men/65.jpg",
	},
	{
		name: "Summer Ray",
		age: 24,
		gender: "Female",
		lookingFor: "Female",
		location: "LA",
		image: "https://randomuser.me/api/portraits/women/52.jpg",
	},
	{
		name: "Frieda locks",
		age: 21,
		gender: "Female",
		lookingFor: "Male",
		location: "San Fran",
		image: "https://randomuser.me/api/portraits/women/45.jpg",
	},
];

// Creating an iterator

function profileIterators(users) {
	let index = 0;
	return {
		next: function () {
			return index < users.length
				? {
						value: users[index++],
						done: false,
				  }
				: { done: true };
		},
	};
}

const profiles = profileIterators(data);
// console.log(profiles.next());

// Go to next profile when we click next
document.querySelector(".btn").addEventListener("click", nextProfile);

function nextProfile() {
	// console.log(profiles.next().value.location);

	// Storing the value which we got from the iterator
	let currentProfile = profiles.next().value;

	// We will get the data only if the user value is in undefined
	if (currentProfile !== undefined) {
		//Adding content to the Div
		const op = `
    <ul class='list-group'>
    <li class='list-group-item'>
        Name: ${currentProfile.name}
    </li>
    <li class='list-group-item'>
        Age: ${currentProfile.age}
    </li>
    <li class='list-group-item'>
        Location: ${currentProfile.location}
    </li>
    <li class='list-group-item'>
        Preference ${currentProfile.gender} looking For ${currentProfile.lookingFor}
    </li> 
    </ul>
    `;

		//Adding list to div
		document.getElementById("profileDisplay").innerHTML = op;

		// Adding image to div
		document.getElementById("imageDisplay").innerHTML = `
    <img src='${currentProfile.image}' class='text-center'>`;
	} else {
		// Reload the page once data is completed
		window.location.reload();
	}
}
