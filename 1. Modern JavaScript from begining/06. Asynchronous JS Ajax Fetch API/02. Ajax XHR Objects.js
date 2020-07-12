document.querySelector("#button").addEventListener("click", loadData);

function loadData() {
	// creat a XHR object
	const xhr = new XMLHttpRequest();

	//Open
	/*
    1. 1st parameter is the method that we want 
    2. 2nd parameter is the files that we are targeting 
    3 .We are passing true because we want our function to be asynchronous
    4.  Get method will reads  the info from the given target
    */
	xhr.open("GET", "data.txt", true);

	console.log("READY STATE 🌐:", xhr.readyState); //READY STATE 🌐: 1

	//Optional - method used for spinners/loaders
	xhr.onprogress = function () {
		console.log("READY STATE 🌐:", xhr.readyState); //READY STATE 🌐: 3
	};

	// this function will check the response
	xhr.onload = function () {
		// check status (200 means ok)
		console.log("READY STATE 🌐:", xhr.readyState); //READY STATE 🌐: 4
		if (this.status === 200) {
			//responseText is the data inside the file
			console.log(this.responseText);
			document.querySelector(
				"#output"
			).innerHTML = `<h2>${this.responseText}</h2>`;
		}
	};

	// // Older way for doing the same
	// xhr.onreadystatechange = function () {
	// 	console.log("READY STATE 🌐:", xhr.readyState); // State 2,3,4 will be done in here
	// 	if (this.status === 200 && this.readyState === 4) {
	// 		console.log(this.responseText);
	// 	}
	// };

	//We have to send the response in the end

	//for errors
	xhr.onerror = function () {
		console.log("💩 error occurred");
	};

	xhr.send();
}

/*
Ready state values
0: request not initialized
1: server connection established
2: request received 
3: processing request
4: request finished and response is ready
*/
