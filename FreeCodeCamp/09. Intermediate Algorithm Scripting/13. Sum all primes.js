// Intermediate Algorithm Scripting: Sum All Primes

/*
A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.
*/

function sumPrimes(num) {
	var prime = (n) => {
		var count = 0;
		for (var i = 0; i <= n; i++) {
			if (n % i == 0) {
				count += 1;
			}
		}
		if (count === 2) {
			return true;
		} else {
			return false;
		}
	};

	sum_primes = 0;
	for (var i = 0; i <= num; i++) {
		if (prime(i)) {
			sum_primes += i;
		}
	}
	return sum_primes;
}

console.log(sumPrimes(10)); //17
console.log(sumPrimes(977)); //73156
