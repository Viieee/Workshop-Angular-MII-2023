// Mengelompokkan Hewan

// Diberikan sebuah function groupAnimals(arr) yang menerima satu parameter berupa array yang berisi string. 
// Function akan me-return array multidimensi dimana array tersebut berisikan kategori/kelompok array yang dikumpulkan sesuai dengan abjad depannya. 
// Abjad harus berurut dari a-z (jika ada). Untuk kasus ini, anggap saja semua text lowercase.

// Contoh jika animals adalah ["ayam", "kucing", "bebek", "bangau", "zebra"]

// maka akan menampilkan output: [ [ "ayam" ], [ "bebek", "bangau" ], [ "kucing ], [ "zebra" ] ]

// Urutan hewan dalam array setiap pengelompokan huruf tidak penting.

function groupAnimals(animals) {
  // you can only write your code here!
  let returnArray = [];
  let firstLetters = []
  let sortedArray = animals.sort();
  sortedArray.forEach(element => {
    // mengambil huruf pertama dari tiap element
    const firstLetter = element.charAt(0);
    let check = firstLetters.find(el => el === firstLetter);
    if(check == null){
      // jika first letter dari element belum ada, push ke array
      firstLetters.push(firstLetter);
    }
  });

  firstLetters.forEach(element=>{
    let currentLetterMatch = animals.filter(function(e,i){
      return e.charAt(0) == element;
    })
    returnArray.push(currentLetterMatch);
  })
   console.log(returnArray);
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]