// Number Palindrome

// Diberikan sebuah function angkaPalindrome(angka) yang menerima satu parameter angka. 
// Function akan me-return angka selanjutnya yang mengandung nilai angka palindrome. 
// Contoh, jika angka adalah 27, maka function akan me-return nilai 33 karena angka 33 adalah angka palindrom. 
// Jika angka dari awal sudah merupakan palindrome, maka function harus mencari angka selanjutnya yang palindrome. 
// Contoh, jika angka adalah 8, walaupun dia sudah palindrome, harus mencari angka selanjutnya yang palindrome, yaitu 9.

function angkaPalindrome(num) {
  // you can only write your code here!

  // kalau num dibawah 2 digit
  if (String(num).length < 2) {
    if(num === 9){
      // kalau num = 9, karena saat ditambah 1 hasilnya 10 (bukan palindrom) maka hasilnya harus 11
      for (var i = num + 1; ; i++) {
        // dibandingkan dengan angka balikannya
        // loop ini akan berhenti ketika bertemu palindromnya
        var reversed = "";
        for (var j = String(i).length - 1; j >= 0; j--) {
          // dibalik angkanya
          reversed += String(i)[j];
        }
        if (String(i) === reversed) {
          // cek bila palindrom, loop berhenti.
          return i;
        }
      }
    }
    // selain angka 9, langsung direturn karena num + 1 = palindrom
    return num + 1;
  }

  // kalau num 2 digit/lebih
  for (var i = num + 1; ; i++) {
    // dibandingkan dengan angka balikannya
    // loop ini akan berhenti ketika bertemu palindromnya
    var reversed = "";
    for (var j = String(i).length - 1; j >= 0; j--) {
      // dibalik angkanya
      reversed += String(i)[j];
    }
    if (String(i) === reversed) {
      // cek bila palindrom, loop berhenti.
      return i;
    }
  }
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001