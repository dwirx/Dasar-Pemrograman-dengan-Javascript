// function tambah(a,b) {
//     return a + b;
// }
// var a = parseInt(prompt('Masukan nilai 1 : '));
// var b = parseInt(prompt('Masukan nilai 2 : '));
// var hasil =tambah(a,b);
// console.log(hasil);

//MEMASUKAN ARGUMEN BERBASISKAN EKSPRESI
// function tambah(a,b) {
//     return a + b;
// }
// var a = parseInt(prompt('Masukan nilai 1 : '));
// var b = parseInt(prompt('Masukan nilai 2 : '));
// var hasil =tambah(a*2,b*2);
// console.log(hasil);

//MEMASUKAN ARGUMENNYA FUNSION JUGA
function tambah(a,b) {
    return a + b;
}

function kali(a,b) {
    return a * b;
}

var hasil = kali(tambah(1,2), tambah(3,4));
console.log(hasil);