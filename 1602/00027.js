// Tukar Besar Kecil

// Diberikan function tukarBesarKecil(kalimat) yang menerima satu parameter berupa string. 
// Function akan me-return string tersebut dengan menukar karakter yang uppercase menjadi lowercase, dan sebaliknya. Spasi dan simbol diabaikan.

function tukarBesarKecil(kalimat) {
  // you can only write your code here!
  let chars = kalimat.split(""); // plit kalimat menjadi karakter, array.
  for(let i = 0; i < chars.length; i++){
    // loop isi array
    if(chars[i] == chars[i].toUpperCase()){
      // jika karakter uppercase, buat lowercase
      chars[i] = chars[i].toLowerCase();
    }
    else{
      // jika karakter lowercase, buat uppercase
      chars[i] = chars[i].toUpperCase();
    }
  }
  return chars.join(""); // buat jadi string lagi
}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"