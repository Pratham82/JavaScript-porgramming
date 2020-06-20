// JavaScript Algorithms and Data Structures Projects: Cash Register

/*
Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

See below for an example of a cash-in-drawer array:
[
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]

*/

const REGISTER_STATUS = {
	closed: "CLOSED",
	insufficientFunds: "INSUFFICIENT_FUNDS",
	open: "OPEN",
};

function checkCashRegister(price, cash, cid) {
	let cashRegister = { status: "", change: cid };
	const changeNeeded = parseFloat(cash - price).toFixed(2);
	const changeAvailable = getTotalCashRegisterChange(cid);
	console.log(changeAvailable);
	cashRegister.status = getTotalCashRegisterStatus(
		changeNeeded,
		changeAvailable
	);

	console.log(cashRegister.change);

	if (cashRegister.status === REGISTER_STATUS.insufficientFunds) {
		cashRegister.change = [];
		return cashRegister;
	}

	cashRegister.change = getCustomersChange(changeNeeded, cid);

	if (changeNeeded > getTotalCashRegisterChange(cashRegister.change)) {
		cashRegister.status = REGISTER_STATUS.insufficientFunds;
		cashRegister.change = [];
	}

	if (cashRegister.status === REGISTER_STATUS.closed) {
		cashRegister.change = [...cid];
	}

	return cashRegister;
}

function getCustomersChange(changeNeeded, changeInDrawer) {
	const change = [];
	const currencyDict = {
		PENNY: 0.01,
		NICKEL: 0.05,
		DIME: 0.1,
		QUARTER: 0.25,
		ONE: 1.0,
		FIVE: 5.0,
		TEN: 10.0,
		TWENTY: 20.0,
		"ONE HUNDRED": 100.0,
	};
	for (let i = changeInDrawer.length - 1; i >= 0; i--) {
		const coinName = changeInDrawer[i][0];
		const coinTotal = changeInDrawer[i][1];
		const coinValue = currencyDict[coinName];
		let coinAmount = (coinTotal / coinValue).toFixed(2);
		let coinsToReturn = 0;

		while (changeNeeded >= coinValue && coinAmount > 0) {
			changeNeeded -= coinValue;
			changeNeeded = changeNeeded.toFixed(2);
			coinAmount--;
			coinsToReturn++;
		}
		if (coinsToReturn > 0) {
			change.push([coinName, coinsToReturn * coinValue]);
		}
	}

	return change;
}

function getTotalCashRegisterStatus(changeNeeded, changeAvailable) {
	if (Number(changeNeeded) > Number(changeAvailable)) {
		return REGISTER_STATUS.insufficientFunds;
	}
	if (Number(changeNeeded) < Number(changeAvailable)) {
		return REGISTER_STATUS.open;
	}
	return REGISTER_STATUS.closed;
}

function getTotalCashRegisterChange(changeInDrawer) {
	let total = 0;
	for (let c of changeInDrawer) {
		let ChangeValue = c[1];
		total += ChangeValue;
	}
	return total.toFixed(2);
}

console.log(
	checkCashRegister(19.5, 20, [
		["PENNY", 1.01],
		["NICKEL", 2.05],
		["DIME", 3.1],
		["QUARTER", 4.25],
		["ONE", 90],
		["FIVE", 55],
		["TEN", 20],
		["TWENTY", 60],
		["ONE HUNDRED", 100],
	])
);
