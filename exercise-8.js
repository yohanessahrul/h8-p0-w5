function hapusSimbol(str) {
    // [a-z] menampilkan alpabet
    // [0-9] menampilkan angka
    // gi = mencari dari seluruh baris tanpa menghiraukan huruf kapital
    return str.match(/[a-z,0-9]+/gi).join('');
  }
  
  // TEST CASES
  console.log(hapusSimbol('test%$4aa')); // test4aa
  console.log(hapusSimbol('devel0p3r s3j@@ati')); // devel0p3rs3jati
  console.log(hapusSimbol('ma@#k!an~')); // makan
  console.log(hapusSimbol('coding')); // coding
  console.log(hapusSimbol('1+3-5*2=100')); // 1352100