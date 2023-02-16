// Target Terdekat

// Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter. 
// Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat. 
// Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2. Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.

function targetTerdekat(arr) {
  // you can only write your code here!
  // cek jarak dengan menggunakan index
  let indexO;
  let indexesX=[]; // array untuk menampung list index dari x
  arr.forEach((element, index) => {
    if(element === "o"){
      indexO = index; // assign posisi index dari o
    }
    if(element === "x"){
      indexesX.push(index); // push index x ke array
    }
  });
  if(indexesX.length == 0){
    return 0; // jika x tidak ada, return 0
  }
  for(let i = 0; i < indexesX.length; i++){
    if(indexO < indexesX[i]){
      // jika posisi index dari O lebih kecil dari index dari x yang sedang diiterasi, posisi index x - posisi index o
      return indexesX[i]-indexO;
    }
    if(indexO > indexesX[indexesX.length-1] ){
      // jika posisi index dari O lebih besar dari index terakhir dari x yang ada di array
      return indexO-indexesX[indexesX.length-1];
    }

    // jika kedua kondisi diatas tidak terpenuhi akan moveon ke iterasi selanjutnya
  }
  
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2