function largest(num) {
  var x;

  for (i = 2; i <= num; i++) {
    if (num % i == 0) {
      while (num % i == 0) num /= i;
      x = i;
    }
  }
  return x;
}

// console.log(largest(600851475143));
module.exports = largest;