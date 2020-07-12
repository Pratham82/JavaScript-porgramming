const secHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hrsHand = document.querySelector(".hour-hand");
//const sec1 = document.getElementById("sec").value;
const result = document.getElementById("result");

function setDate() {
	const now = new Date();
	const seconds = now.getSeconds();
	const mins = now.getMinutes();
	const hrs = now.getHours();

	// Setting degree according to the seconds
	const secondDeg = (seconds / 60) * 360 + 90;
	secHand.style.transform = `rotate(${secondDeg}deg)`;

	//setting minutes
	const minDeg = (mins / 60) * 360 + 90;
	minHand.style.transform = `rotate(${minDeg}deg)`;

	//setting hrs
	const hrDeg = (hrs / 12) * 360 + 90;
	hrsHand.style.transform = `rotate(${hrDeg}deg)`;

	// console.log(mins);
	// console.log(seconds);
	// console.log(hrs);
}

setInterval(setDate, 1000);
