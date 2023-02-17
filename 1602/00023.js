// Ubah Huruf

// Diberikan function ubahHuruf(kata) yang akan menerima satu parameter berupa string. 
// Functiona akan me-return sebuah kata baru dimana setiap huruf akan digantikan dengan huruf alfabet setelahnya. 
// Contoh, huruf a akan menjadi b, c akan menjadi d, k menjadi l, dan z menjadi a.

function ubahHuruf(kata) {
  // you can only write your code here!
  let chars = kata.split(""); // memisah kata ke individual character
  for(var i = 0; i< chars.length; i++){
    // loop dan charCodenya + 1
    // charCode = index dari kata
    let n = chars[i].charCodeAt() - 'a'.charCodeAt(); // dikurangi karena ingin menyamakan dengan urutan alphabet biasa
    n = (n + 1) % 26; // ditambah 1, menggeser ke alphabet selanjutnya. Modula digunakan apabila huruf yang dimasukkan adalah z maka akan balik ke huruf a bukan ke karakter lainnya selain huruf
    chars[i]=String.fromCharCode(n + 'a'.charCodeAt()); // dibalikan menjadi karakter huruf
  }
  return chars.join("");
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu