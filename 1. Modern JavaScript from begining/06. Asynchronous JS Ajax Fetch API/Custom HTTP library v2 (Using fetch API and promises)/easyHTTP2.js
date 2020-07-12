/*
 * Easy HTTP library
 * Library for making HTTP requests
 *
 * @version 2.0.0
 * @author Prathamesh Mali
 * @license MIT
 *
 */

class EasyHTTP {
	//Make a HTTP GET request
	get(url) {
		return new Promise((resolve, reject) => {
			fetch(url)
				.then((result) => result.json())
				.then((data) => resolve(data))
				.catch((err) => reject(err));
		});
	}
	//Make a HTTP POST request
	post(url, data) {
		return new Promise((resolve, reject) => {
			// While making a POST Request we have to add in object with some info
			fetch(url, {
				method: "POST",
				headers: {
					"Content-type": "application/json",
				},
				body: JSON.stringify(data),
			})
				.then((result) => result.json())
				.then((data) => resolve(data))
				.catch((err) => reject(err));
		});
	}

	// Make an update PUT request
	put(url, data) {
		return new Promise((resolve, reject) => {
			// PUT is very similar to POST we jut have to change the method type from POST to put, so it will update the data
			fetch(url, {
				method: "PUT",
				headers: {
					"Content-type": "application/json",
				},
				body: JSON.stringify(data),
			})
				.then((result) => result.json())
				.then((data) => resolve(data))
				.catch((err) => reject(err));
		});
	}

	//Delete method
	delete(url) {
		return new Promise((resolve, reject) => {
			// PUT is very similar to POST we jut have to change the method type from POST to put, so it will update the data
			fetch(url, {
				method: "DELETE",
				headers: {
					"Content-type": "application/json",
				},
			})
				.then((result) => result.json())
				.then((data) => console.log("Resource Deleted..."))
				.catch((err) => reject(err));
		});
	}
}
