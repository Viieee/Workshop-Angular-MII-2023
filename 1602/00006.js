// Konversi Menit

// Diberikan sebuah function konversiMenit(menit) yang menerima satu parameter berupa angka yang merupakan ukuran waktu dalam menit. 
// Function akan me-return string waktu dalam format jam:menit berdasarkan menit tersebut. Contoh, jika menit adalah 63, maka function akan me-return "1:03".

function konversiMenit(menit) {
  // you can only write your code here!
  if(menit < 60){
    // bila dibawah 60, langung direturn dengan format 0:[argumen]
    return `0:${menit}`
  }else{
    // bila diatas 60
    // menit didapat dengan membagi parameter dengan 60 lalu digunakan Math.floor untuk membulatkan
    let minutes = Math.floor(menit/60);
    // detik didapat dari sisaan menit/60, dapat menggunakan modulo
    let seconds = menit % 60;

    // detail
    if(seconds < 10){
      // bila sisa seconds dibawah 10 akan mereturn [menit]:0[detik]
      return `${minutes}:0${seconds}`;
    }
    else{
      // bila sisa seconds diatas 10 akan mereturn [menit]:[detik]
      return `${minutes}:${seconds}`;
    }
  }
}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00