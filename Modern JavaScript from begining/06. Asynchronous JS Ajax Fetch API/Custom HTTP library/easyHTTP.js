function easyHTTP(http) {
	this.http = new XMLHttpRequest();
}

// Make an HTTP Get request
easyHTTP.prototype.get = function (url, callback) {
	this.http.open("GET", url, true);

	/*
    * In this onload function we will get an error:
     easyHTTP.js:11 Uncaught TypeError: Cannot read property 'status' of undefined at XMLHttpRequest.http.onload (easyHTTP.js:11)
     
     because 'this' keyword is inside a onload function and referring to itself rather than referring to http

     For solving the issue we can store 'this' in another variable('self') which will hold the value of 'this'. SO it will pertains to current scope
     */

	let self = this;
	this.http.onload = function () {
		if (self.http.status === 200) {
			// console.log(self.http.responseText);
			// return self.http.responseText;
			callback(null, self.http.responseText);
		} else {
			// In case if the status is 200 we can pass in the error response
			callback("Error: " + self.http.status);
		}
	};

	this.http.send();
};

// Make an HTTP POST request

easyHTTP.prototype.post = function (url, data, callback) {
	this.http.open("POST", url, open);

	//We have to set our header
	this.http.setRequestHeader("Content-type", "application/json");

	let self = this;
	this.http.onload = function () {
		// new post will have an ID of 101
		callback(null, self.http.responseText);
	};

	this.http.send(JSON.stringify(data));
};

// Make an HTTP PUT request
easyHTTP.prototype.put = function (url, data, callback) {
	this.http.open("PUT", url, open);

	//We have to set our header
	this.http.setRequestHeader("Content-type", "application/json");

	let self = this;
	this.http.onload = function () {
		// new post will have an ID of 1
		callback(null, self.http.responseText);
	};

	this.http.send(JSON.stringify(data));
};

// Make an HTTP DELETE request

easyHTTP.prototype.delete = function (url, callback) {
	this.http.open("DELETE", url, open);

	let self = this;
	this.http.onload = function () {
		if (self.http.status === 200) {
			callback(null, "Post has been deleted 💩");
		} else {
			// In case if the status is 200 we can pass in the error response
			callback("Error: " + self.http.status);
		}
	};

	this.http.send();
};
