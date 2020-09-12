// Burglary Series (01): Calculate Total Losses
// You just returned home to find your mansion has been robbed! Given an object of the stolen items, return the total amount of the burglary (number). If nothing was robbed, return the string "Lucky you!".

// Examples
// const stolenItems = {
//   tv: 30,
//   skate: 20,
//   stereo: 50,
// } ➞ 100

const calculateLosses = (obj) =>
	Object.values(obj).length > 0
		? Object.values(obj).reduce(
				(val1, val2) => Number(val1) + Number(val2),
				[]
		  )
		: "Lucky you!";

console.log(
	calculateLosses({
		tv: 30,
		skate: 20,
		stereo: 50,
	})
);
console.log(calculateLosses({}));
