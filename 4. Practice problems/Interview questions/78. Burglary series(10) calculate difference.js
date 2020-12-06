//Burglary Series (10): Calculate Difference
//The insurance guy calls again and apologizes. They found another policy made by your spouse, but this one is limited to cover a particular maximum in losses (for example, 50,000€). You send a bill to your spouse for the difference you lost.
//
//Given an object of the stolen items and a limit, return the difference between the total value of those items and the limit of the policy.

const calculateDifference = (obj, limit) =>
  Object.values(obj).reduce((p, c) => p + c, 0) - limit;

console.log(calculateDifference({ "baseball bat": 20 }, 5));
