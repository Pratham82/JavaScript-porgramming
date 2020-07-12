document.querySelector("#getJokes").addEventListener("click", getJokesOnline);

function getJokesOnline(e) {
	const numOfJokes = document.querySelector('input[type="number"]').value;
	console.log(numOfJokes);

	xhr = new XMLHttpRequest();

	xhr.open("GET", `http://api.icndb.com/jokes/random/${numOfJokes}`, true);
	if (numOfJokes == 0) {
		showAlert("Add number of jokes !!", "error");
	} else {
		xhr.onload = function () {
			const jokes = JSON.parse(this.responseText);
			const jokesDiv = document.querySelector(".jokes");

			if (this.status === 200) {
				console.log(jokes.value);
				let op = "";

				// We will check the status from API and only iterating through it if the status is success
				if (jokes.type === "success") {
					// The jokes are stored in value array that's why I', iterating over the array and getting the jokes from that element
					// The joke actually inside the object's joke property because of that we are using i.joke
					jokes.value.map((i) => (op += `<li>${i.joke}</li>`));

					// Adding jokes to div
					jokesDiv.innerHTML = op;
				} else {
					// If there is an error we will add this li element to our ul
					op += "<li>Something went wrong</li>";
					jokesDiv.innerHTML = op;
				}
			}
		};
	}

	xhr.send();
	e.preventDefault();
}

function showAlert(message, className) {
	// Create a div element
	const div = document.createElement("div");

	// Add className to the div
	div.className = `${className}`;
	// centering the text
	div.style.color = "red";
	div.style.fontSize = "18px";

	// Add text inside our div
	div.appendChild(document.createTextNode(message));

	// Add the div inside our main page
	// get parent
	const container = document.querySelector(".container");

	//get form
	const form = document.querySelector("form");

	// Add our alert div before form
	container.insertBefore(div, form);

	// Remove div after 3 secs
	setTimeout(function () {
		document.querySelector(".error").remove();
	}, 2000);
}
