// instantiating object of EasyHTTP class
const http = new EasyHTTP();

//* GET  Method
// Get users in synchronous w
// const users = http.get(`https://jsonplaceholder.typicode.com/users`);
// console.log(users);

// getting data asynchronously

let outputDiv = document.querySelector(".output");
let table = document.querySelector("#table1");

// logging data into console
http.get(`https://jsonplaceholder.typicode.com/users`)
	.then((data) => console.log(data))
	.catch((err) => console.log(err));

// Injecting data into DOM
http.get(`https://jsonplaceholder.typicode.com/users`)
	.then((data) => {
		tableOp = "";
		data.map(
			(user) =>
				(tableOp += `<tr>
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.username}</td>
            <td><a href="${user.email}">${user.email}</a></td>
			</tr>`)
		);
		// op = "";
		//outputDiv.innerHTML = op;
		//`<li style='font-size:18px'>Id: ${user.id} Name: ${user.name} UserName: ${user.username} Email: ${user.email}</li>`
		table.innerHTML += tableOp;
		// console.log(tableOp);
	})
	.catch((err) => console.log(err));

//* POST method

//creating user data for posting
const userData = {
	name: "Dex Luther",
	username: "dex@luth7445",
	email: "dexLuther232@gmail.com",
};

http.post(`https://jsonplaceholder.typicode.com/users`, userData)
	.then((data) => console.log(data))
	.catch((err) => console.log(err));

/*
Output: 
{name: "Dex Luther", username: "dex@luth7445", email: "dexLuther232@gmail.com", id: 11}

email: "dexLuther232@gmail.com"
id: 11
name: "Dex Luther"
username: "dex@luth7445"
__proto__: Object

*/

//* PUT Request for updating the data

// http.put(`https://jsonplaceholder.typicode.com/users/2`, userData)
// 	.then((data) => console.log(data))
// 	.catch((err) => console.log(err));

/*
Output: 
{name: "Dex Luther", username: "dex@luth7445", email: "dexLuther232@gmail.com", id: 2}

email: "dexLuther232@gmail.com"
id: 2
name: "Dex Luther"
username: "dex@luth7445"
__proto__: Object

*/

http.delete(`https://jsonplaceholder.typicode.com/users/2`)
	.then((data) => console.log(data))
	.catch((err) => console.log(err));

/*
Output:
 Resource Deleted...
*/
