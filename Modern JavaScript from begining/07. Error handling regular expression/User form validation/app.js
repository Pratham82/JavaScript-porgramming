// Input fields will be checked dynamically

/*
The blur() method is used to remove focus from an element.

The onblur event occurs when an object loses focus.

The onblur event is most often used with form validation code
*/

// getting input fields
const fname = document.querySelector("#fname");
const lname = document.querySelector("#lname");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const zipCode = document.querySelector("#zipcode");
const btn = document.querySelector(".btn");

// Form blur event listeners
fname.addEventListener("keyup", validateFName);
lname.addEventListener("keyup", validateLName);
email.addEventListener("keyup", validateEmail);
phone.addEventListener("keyup", validatePhone);
zipCode.addEventListener("keyup", validateZipCode);

function validateFName() {
	const nameValue = fname.value;
	const lastNameValue = lname.value;
	let re = /^[a-z]{2,10}$/i;
	if (!re.test(nameValue)) {
		fname.className = "is-invalid form-control";
	} else {
		//name.classList.add("is-valid");
		fname.className = "form-control is-valid";
	}
	// console.log(re.test(nameValue));
}
function validateLName() {
	const lastNameValue = lname.value;
	let re = /^[a-z]{2,10}$/i;
	if (!re.test(lastNameValue)) {
		lname.className = "is-invalid form-control";
	} else {
		//name.classList.add("is-valid");
		lname.className = "form-control is-valid";
	}
	// console.log(re.test(nameValue));
}

function validateEmail() {
	const emailVal = email.value;
	let re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
	if (!re.test(emailVal)) {
		email.className = "is-invalid form-control";
	} else {
		email.className = "form-control is-valid";
	}
}

function validatePhone() {
	const phoneVal = phone.value;
	let re = /^[0-9]{10}$/;
	if (!re.test(phoneVal)) {
		phone.className = "is-invalid form-control";
	} else {
		phone.className = "form-control is-valid";
	}
}

function validateZipCode() {
	const zip = zipCode.value;
	let re = /^[0-9]{6}$/;
	if (!re.test(zip)) {
		zipCode.className = "is-invalid form-control";
	} else {
		//name.classList.add("is-valid");
		zipCode.className = "form-control is-valid";
	}
}

// For removing and adding place holder value after clicked in input
document.querySelectorAll(".test").forEach((item) => {
	item.addEventListener("focus", () => {
		item.placeholder = "";
	});
	item.addEventListener("focusout", () => {
		item.placeholder = "Enter your name";
	});
});

// // Remove placeholder after we go into input
// name.addEventListener("focus", () => {
// 	name.placeholder = "";
// });
// name.addEventListener("focusout", () => {
// 	name.placeholder = "Enter your name";
// });
