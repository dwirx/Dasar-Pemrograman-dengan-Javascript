// menangkap pilihan player
var p = prompt('pilih : gajah, semut, orang');

//menangkap pilihan computer
//membangkitkan bilangan random
var comp = Math.random();
//console.log(comp); contoh
if ( comp < 0.34 ) {
    comp = 'gajah';
}  else if(comp >= 0.34 && comp < 0.67) {
    comp = 'orang';
} else {
    comp = 'semut';
}
console.log(comp);
//menentukan rules

//menampilkan hasilya