function largestPrimeFactor() {
  num=eval(form.num.value)
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
  form.result.value= eval(largestPrimeFactor);
}
const isPrime = num => {
  var isPrime = true;
  for (let i = 2, s = Math.sqrt(num); i <= s; i++)
    if (num % i == 0) return false;
  return num !== 1;
}



function tambah() {
  cek(); //panggil function cek
  a=eval(form.angka1.value); //mengisi variabel a dengan isi dari input name angka1
  b=eval(form.angka2.value); //mengisi variabel b dengan isi dari input name angka2
  c=a+b //menjumlahkan kedua variabel
  form.total.value = c; //memberikan hasil penjumlahan ke input name total
  }
