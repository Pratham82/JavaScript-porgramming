result = document.getElementById("result");
input1 = document.getElementById("input1");

const getLength = () => {
	if (input1.value.length != 0) {
		result.innerText = `${input1.value.length}`;
	} else {
		alert("Input looks empty, Please add something");
	}
};

const clearInputs = () => {
	input1.value = "";
	result.innerText = "";
};
