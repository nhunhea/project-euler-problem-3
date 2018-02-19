function largestPrimeFactor(num) {
  var primes = [];
  for (i = 1; i <= num; i++) {
    if (num % i == 0) {
      if (isPrime(i) == true) {
        primes.push(i);
        num /= i;
      }
    }
  }
  return Math.max.apply(null, primes);
}
const isPrime = num => {
  var isPrime = true;
  for (let i = 2, s = Math.sqrt(num); i <= s; i++)
    if (num % i == 0) return false;
  return num !== 1;
};

module.exports = largestPrimeFactor;

