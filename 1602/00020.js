// Angka Prima

// Diberikan sebuah function angkaPrima(angka) yang menerima satu parameter berupa angka. 
// Function akan me-return true jika angka tersebut adalah bilangan prima. Jika tidak, return false.

function angkaPrima(angka) {
  // you can only write your code here!\
  let isPrime = true;
  if(angka == 1){
    // 1 bukan bilangan prima
    isPrime = false;
    return isPrime;
  }

  for(let i = 2; i < angka ; i++){
    if(angka % i == 0){
      // jika angka bisa dibagi dengan angka sebelumnya = bukan prima
      isPrime = false;
    }
  }
  return isPrime;
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false