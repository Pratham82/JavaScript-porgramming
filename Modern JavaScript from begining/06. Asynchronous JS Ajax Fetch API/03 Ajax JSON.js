document.getElementById("button1").addEventListener("click", getCustomer);
document.getElementById("button2").addEventListener("click", getCustomers);

function getCustomer(e) {
	const xhr = new XMLHttpRequest();

	xhr.open("GET", "Customer.json", true);

	xhr.onload = function () {
		if (this.status === 200) {
			let response = JSON.parse(this.responseText);
			console.log(response.id);
			console.log(response.name);
			console.log(response.company);
			console.log(response.phone);
			let customerDiv = document.querySelector(".customer");
			let op = `<ul style='font-size:20px'>
                <li>Customer ID: ${response.id}</li>
                <li>Customer Name: ${response.name}</li>
                <li>Company Name: ${response.company}</li>
                <li>Customer ID: ${response.id}</li></>
            </ul>`;
			customerDiv.innerHTML = op;
			console.log(customerDiv);
		}
	};

	xhr.send();
}

function getCustomers() {
	const customersDiv = document.querySelector(".customers");

	xhr = new XMLHttpRequest();

	xhr.open("GET", "Customers.json", true);

	xhr.onload = function () {
		const response = this.responseText;
		if (this.status === 200) {
			// First we are converting the JSON response to JS object which is an array
			let jsObj = JSON.parse(response);

			// Taking empty string for adding our document
			let op = "";

			// Now we are iterate over the array pf object and add the details of customers to its appropriate value
			jsObj.map(
				(i) =>
					(op += `<ul style='font-size:20px' >
				<li>Customer ID: ${i.id}</li>
                <li>Customer Name: ${i.name}</li>
                <li>Company Name: ${i.company}</li>
				</ul>`)
			);
			//This will be the structure of HTML with the values
			console.log(op);
			/*
			Output:
			<ul style='font-size:20px' >
				<li>Customer ID: 1</li>
                <li>Customer Name: John Snow</li>
                <li>Company Name: MakeMyTrip</li>
				</ul><ul style='font-size:20px' >
				<li>Customer ID: 2</li>
                <li>Customer Name: Rob Stark</li>
                <li>Company Name: Google</li>
				</ul><ul style='font-size:20px' >
				<li>Customer ID: 3</li>
                <li>Customer Name: Benny Floyd</li>
                <li>Company Name: Amazon</li>
				</ul>
			*/

			// We are adding the OP document to out HTML div
			customersDiv.innerHTML = op;
		}
	};

	xhr.send();
}
