// Functional Programming: Use the map Method to Extract Data from an Array

/*
1. The map method iterates over each item in an array and returns a new array containing the results of calling the callback function on each element. It does this without mutating the original array.
2. 
*/

/*
The watchList array holds objects with information on several movies. Use map on watchList to assign a new array of objects with only title and rating keys to the ratings variable. The code in the editor currently uses a for loop to do this, so you should replace the loop functionality with your map expression.
*/

// The global variable
var watchList = [
	{
		Title: "Inception",
		Year: "2010",
		Rated: "PG-13",
		Released: "16 Jul 2010",
		Runtime: "148 min",
		Genre: "Action, Adventure, Crime",
		Director: "Christopher Nolan",
		Writer: "Christopher Nolan",
		Actors:
			"Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
		Plot:
			"A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
		Language: "English, Japanese, French",
		Country: "USA, UK",
		Awards: "Won 4 Oscars. Another 143 wins & 198 nominations.",
		Poster:
			"http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
		Metascore: "74",
		imdbRating: "8.8",
		imdbVotes: "1,446,708",
		imdbID: "tt1375666",
		Type: "movie",
		Response: "True",
	},
	{
		Title: "Interstellar",
		Year: "2014",
		Rated: "PG-13",
		Released: "07 Nov 2014",
		Runtime: "169 min",
		Genre: "Adventure, Drama, Sci-Fi",
		Director: "Christopher Nolan",
		Writer: "Jonathan Nolan, Christopher Nolan",
		Actors:
			"Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
		Plot:
			"A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
		Language: "English",
		Country: "USA, UK",
		Awards: "Won 1 Oscar. Another 39 wins & 132 nominations.",
		Poster:
			"http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
		Metascore: "74",
		imdbRating: "8.6",
		imdbVotes: "910,366",
		imdbID: "tt0816692",
		Type: "movie",
		Response: "True",
	},
	{
		Title: "The Dark Knight",
		Year: "2008",
		Rated: "PG-13",
		Released: "18 Jul 2008",
		Runtime: "152 min",
		Genre: "Action, Adventure, Crime",
		Director: "Christopher Nolan",
		Writer:
			"Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
		Actors: "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
		Plot:
			"When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
		Language: "English, Mandarin",
		Country: "USA, UK",
		Awards: "Won 2 Oscars. Another 146 wins & 142 nominations.",
		Poster:
			"http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
		Metascore: "82",
		imdbRating: "9.0",
		imdbVotes: "1,652,832",
		imdbID: "tt0468569",
		Type: "movie",
		Response: "True",
	},
	{
		Title: "Batman Begins",
		Year: "2005",
		Rated: "PG-13",
		Released: "15 Jun 2005",
		Runtime: "140 min",
		Genre: "Action, Adventure",
		Director: "Christopher Nolan",
		Writer:
			"Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
		Actors: "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
		Plot:
			"After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
		Language: "English, Urdu, Mandarin",
		Country: "USA, UK",
		Awards: "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
		Poster:
			"http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
		Metascore: "70",
		imdbRating: "8.3",
		imdbVotes: "972,584",
		imdbID: "tt0372784",
		Type: "movie",
		Response: "True",
	},
	{
		Title: "Avatar",
		Year: "2009",
		Rated: "PG-13",
		Released: "18 Dec 2009",
		Runtime: "162 min",
		Genre: "Action, Adventure, Fantasy",
		Director: "James Cameron",
		Writer: "James Cameron",
		Actors: "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
		Plot:
			"A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
		Language: "English, Spanish",
		Country: "USA, UK",
		Awards: "Won 3 Oscars. Another 80 wins & 121 nominations.",
		Poster:
			"http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
		Metascore: "83",
		imdbRating: "7.9",
		imdbVotes: "876,575",
		imdbID: "tt0499549",
		Type: "movie",
		Response: "True",
	},
];

// Only change code below this line

/*
/// Extract values from the array
var new_ = watchList.map((i) => ratings.push(i.Title, i.imdbRating));
OP: 
["Inception","8.8","Interstellar","8.6","The Dark Knight","9.0","Batman Begins","8.3","Avatar","7.9"] 
*/

var ratings = [];
var new_ = watchList.map((i) =>
	ratings.push("title: " + i.Title, "rating:" + i.imdbRating)
);
/*
OP:
["title: Inception","rating:8.8","title: Interstellar","rating:8.6","title: The Dark Knight","rating:9.0","title: Batman Begins","rating:8.3","title: Avatar","rating:7.9"]
*/

// Only change code above this line

console.log(JSON.stringify(ratings));

//------------------------------------------------------------------------------
// My Practice for map function
const books = [{ name: "test 1" }, { name: "test 2" }, { name: "test 3" }];

let names = books.map((i) => i.name + " new ");
console.log(names);

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let square = (i) => i ** 2;

//Applying map function
/*Method 1
In this method nums is the array and square is the function which will be applied on every element of nums and store the values in numsSquare*/
let numsSquare = nums.map((i) => square(i));

/*Method 2
The difference from first method is we haven't passed i, map functions automatically passes the value of i in square*/
numsSquare = nums.map(square);

console.log(numsSquare);
