window.addEventListener("keydown", playSound);
function playSound(e) {
	// Getting the element of the Audio
	const audio = document.querySelector(`audio[data-key ='${e.keyCode}']`);

	// Get the element of key
	const key = document.querySelector(`.key[data-key ='${e.keyCode}']`);
	if (!audio) return;
	audio.currentTime = 0; // rewind the audio element to the start
	audio.play(); // If we play the audio element multiple times it wont play agin it will wait for 1-2 secs
	key.classList.add("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
console.log(keys);

function removeTransition(e) {
	if (e.propertyName !== "transform") return; // Skip the property if its not transform
	//console.log(e.propertyName); // transform
	// Removing the property after transition is ended
	// Here this is = current div <div data-key="68" class="key playing"> </div>
	this.classList.remove("playing");
}
