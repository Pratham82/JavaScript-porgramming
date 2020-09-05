// Video Length in Seconds
// You are given the length of a video in minutes. The format is mm:ss (e.g.: "02:54"). Create a function that takes the video length and return it in seconds.

// Examples
// minutesToSeconds("01:00") ➞ 60

const minutesToSeconds = (time) => {
	let arr = time.split(":").map((val) => parseInt(val));
	return arr[1] < 60 && arr[0] * 60 + arr[1];
};

console.log(minutesToSeconds("01:00"));

console.log(minutesToSeconds("13:56"));
console.log(minutesToSeconds("10:60"));
console.log(minutesToSeconds("132:271"));
