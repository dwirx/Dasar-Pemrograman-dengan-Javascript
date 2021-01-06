//? 6. forEach : tidak bisa mengembalikan array
// var angka = [1,2,3,4,5,6,7,8];
// var nama = ['Hendra', 'Bangun', 'Dwi'];
//!contoh1
// for( var i = 0; i < angka.length; i++) {
//     console.log(angka[i]);
// }

//!contoh2
//function ekspresion
// angka.forEach(function(e){
//     console.log(e);
// })

//!contoh3
//function ekspresion
// var cetak = function(e) {
//     console.log(e);
// };
// angka.forEach(cetak);

//!contoh4
// nama.forEach(function(e, i){
//     console.log('Mahasiswa ke-' + i + ' adalah : ' + e);
// })

//? 7. map : mengembalikan array
// var angka = [1,2,5,3,6,7,8,4];
// var angka2 = angka.map(function(e){
//     return e * 2;
// });
// console.log(angka2.join(' - '));

//? 8.sort : untuk mengurutkan suatu array
//!contoh1
// var angka = [1,2,5,3,6,7,8,4];
// console.log(angka.join(' - ')); //belum di urutkan
// angka.sort();
// console.log(angka.join(' - ')); //sudah di urutkan

//!contoh2
var angka = [1,2,10,5,3,20,6,7,8,4];
angka.sort(function(a,b) {
    return a-b;
});
console.log(angka.join(' - ')); //sudah di urutkan
