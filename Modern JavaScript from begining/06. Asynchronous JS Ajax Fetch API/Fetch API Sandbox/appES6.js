//* All

/*
* Fetch API: It is a newer standard for dealing with HTTP requests. W cna do the same things which can we do with Ajax and XHR

* window object has fetch method built in
*/

//* Get text button
document.querySelector("#button-1").addEventListener("click", getText);

// Whatever we want to fetch will we go into fetch() it can return data from local files or urls

let text = "";
// Fetch returns promises
function getText() {
	fetch("data.txt")
		.then((res) => res.text())
		.then((data) => {
			document.querySelector(
				".output"
			).innerHTML = `<p style="font-size:20px"><b>Data from data.txt: </b></p><p style="font-size:20px">${data}</p>`;
		})
		.catch((err) => console.log(err));
}

//console.log(res);
//Output:
//Response {type: "basic", url: "http://127.0.0.1:5500/Modern%20JavaScript%20from%2…Ajax%20Fetch%20API/Fetch%20API%20Sandbox/data.txt", redirected: false, status: 200, ok: true, …}
// Here our data is in text format thats why we are using .text() method
//console.log(res.text());
// Promise {<pending>}
//

//* Get JSON

document.querySelector("#button-2").addEventListener("click", getJSON);

function getJSON() {
	fetch("posts.json")
		.then((res) => res.json())
		.then((data) => {
			// this will return the json object
			let op = "";
			data.map(
				(i) =>
					(op += `<li style="font-size:20px">Title: ${i.title} Body: ${i.body}</li>`)
			);
			document.querySelector(".output").innerHTML = op;
		})
		.catch(function (err) {
			console.log(err);
		});
}

//* Get data from external API
document.querySelector("#button-3").addEventListener("click", getExternalAPI);

function getExternalAPI() {
	fetch("https://api.github.com/users")
		.then((result) => result.json())
		.then((data) => {
			op = "";
			console.log(data);
			data.map(
				(user) =>
					(op += `<li style="font-size:20px">ID: ${user.id} Username: ${user.login} <a href="${user.url}">url</a> </li> `)
			);

			document.querySelector(".output").innerHTML = op;
		})
		.catch((err) => console.log(err));
}

/*
 * Steps for fetching:
 * 1. Enter the URL in fetch
 * 2. In first .then() return the result.type() type can be text, json etc. which is part of resolved promise
 * 3. In next .then() return data which will be our actual data
 * 4. In the catch() function write the function when the promise got rejected due to any error
 */
