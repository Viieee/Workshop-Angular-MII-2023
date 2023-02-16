// Perkalian Unik

// Diberikan sebuah function perkalianUnik(arr) yang menerima satu parameter berupa array yang berisikan angka. 
// Function akan me-return array baru yang mengandung angka yang setiap nilainya merupakan hasil kali angka lain yang bukan angka itu sendiri. 
// Contoh, jika arr adalah [1, 2, 3, 4, 5], maka function akan mereturn [120, 60, 40, 30, 24], karena 120 adalah 2 * 3 * 4 * 5, 60 adalah 1 * 3 * 4 * 5, 40 adalah 1 * 2 * 4 * 5, dan seterusnya.

function perkalianUnik(arr) {
  // you can only write your code here!
  let resultArray = []; // buat array baru untuk nampung hasil akhir
  arr.forEach(function(element, index){
    let newArray = arr.filter(function(e, i){
       // filter array berdasarkan index
       // kembalikan element array yang indexnya tidak sama
      return i != index;
    })
    let total = 1; // total awal
    for(let j = 0; j < newArray.length; j++){
      // total dikali element yang sedang diiterasi
      total *= newArray[j];
    }
    // push ke array result
    resultArray.push(total);
  });
  return resultArray;
}

// TEST CASES
console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]