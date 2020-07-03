const http = new easyHTTP();

//* GET Request
// const post = http.get(`https://jsonplaceholder.typicode.com/posts`);

// console.log(post); //  undefined

// In this example we are calling data synchronously, the data is returned before it was actually added

// For solving this issue we can use async

// We are taking the response from the get method and logging it out
// If we are not able to fetch data from server we can also get that value from get function
http.get(`https://jsonplaceholder.typicode.com/posts/`, function (
	err,
	response
) {
	if (err) {
		console.log(err);
	} else {
		console.log(response);
	}
});

//* This is how many of the third party libraries works for fetching data

//* POST Request, Creating a post i.e (data)
// Create data
const data = {
	firstName: "Prathamesh",
	lastName: "Mali",
	body: "testing ",
};

http.post(`https://jsonplaceholder.typicode.com/posts`, data, function (
	err,
	post
) {
	if (err) {
		console.log(err);
	} else {
		console.log(post);
	}
});

/*
Output
{
  "firstName": "Prathamesh",
  "lastName": "Mali",
  "body": "testing ",
  "id": 101
}

id was added by the API
*/

//* PUT request (updating)
// For updating the data we can pass the value after posts/{value}
http.put(`https://jsonplaceholder.typicode.com/posts/82`, data, function (
	err,
	post
) {
	if (err) {
		console.log(err);
	} else {
		console.log(post);
	}
});

/*

Output: 
{
  "firstName": "Prathamesh",
  "lastName": "Mali",
  "body": "testing ",
  "id": 1
}

id is updated it 1 now , previously it was 101
*/

//* DELETE

// http.delete(`https://jsonplaceholder.typicode.com/posts/82`, function (
// 	err,
// 	response
// ) {
// 	if (err) {
// 		console.log(err);
// 	} else {
// 		console.log(response);
// 	}
// });
