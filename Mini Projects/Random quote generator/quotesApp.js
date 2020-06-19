var generateQuote = document.querySelector("#quotesButton");
var body = document.getElementsByTagName("BODY")[0];
var quote = document.querySelector("#result");
var author_ = document.querySelector("#author");
generateQuote.addEventListener("click", function () {
	body.style.background = getRandomColor();
});

/*
Alternative resources



326 quotes
targetUrl = `https://gist.githubusercontent.com/Pratham82/33900133b2f2fa1181701715120880dd/raw/be4bf5a715f3e2af06a844797cee21ea648f6281/quotes.json`; 

var targetUrl = `https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json`;
*/
var proxyUrl = "https://cors-anywhere.herokuapp.com/";

targetUrl = `https://type.fit/api/quotes`;
10;
const getQuotes = () => {
	return fetch(proxyUrl + targetUrl)
		.then(function (response) {
			return response.json();
		})
		.then(function (data) {
			//For typefit api
			var randomNum = Math.floor(Math.random() * 1643);
			quote.innerHTML = data[randomNum]["text"];
			author_.innerHTML = data[randomNum]["author"];

			// var randomNum = Math.floor(Math.random() * 326);
			// quote.innerHTML = data[randomNum]["quote"];
			// author_.innerHTML = data[randomNum]["author"];
			// console.log(data.length);
			// console.log(data[randomNum]["quote"], data[randomNum]["author"]);
			//console.log(data);
		});
};
generateQuote.addEventListener("click", getQuotes);

function getRandomColor() {
	var letters = "0123456789ABCDEF";
	var color = "#";
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

/*
iteration 1




fetch(proxyUrl + targetUrl)
		.then(function (response) {
			return response.json();
		})
		.then(function (data) {
			console.log(data);
		});
*/

/*

return fetch(`http://jsonplaceholder.typicode.com/posts`)
		.then((res) => res.json())
		.then((posts) => console.log(posts));
*/
