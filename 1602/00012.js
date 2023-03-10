// Pasangan Angka Terbesar

// Diberikan sebuah function pasanganTerbesar(angka) yang menerima 1 parameter berupa angka. 
// Function akan menentukan pasangan dua digit angka mana yang paling besar dan me-return angka tersebut. 
// Contoh, jika angka adalah 183928, maka function akan me-return 92, pasangan dua digit angka yang paling besar diantara yang lainnya.

function pasanganTerbesar(num) {
  // you can only write your code here!
  // buat array baru yang isinya gabungan dari angka yang bersebelahan dari argumen
  let arr = [];
  for(let i = 0; i <= String(num).length - 1;i++){
    if(String(num)[i+1]!=null){
      arr.push(`${String(num)[i]}${String(num)[i+1]}`)
    }
  }
  // untuk mengambil yang terbesar dari element dalam array digunakan operator spread
  // operator spread akan mengeluarkan seluruh elemen pada sebuah array dan disajikan secara standalone
  return Math.max(...arr);
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99