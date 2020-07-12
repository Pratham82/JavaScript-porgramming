/* 
n kids are sitting in a circle
k toys are available to distribute 
i position to stat from 
*/

const getTheLastPosition = (kids, toys, startPosition) =>
	(toys % kids) + startPosition - 1 || kids;

console.log(getTheLastPosition(2, 2, 1));
