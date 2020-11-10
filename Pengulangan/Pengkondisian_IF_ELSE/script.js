// var angka = 1;
// if(angka === 1) {
//     alert('anda memasukan angka 1');
// }

// var angka = 2;
// if(angka < 5) {
//     alert(angka + ' lebih kecil dari 5');
// }

//CARA IF BIASAN
// var angka = 3;
// if(angka % 2 == 0) {
//     alert(angka + ' adalah bilangan GENAP');
// }

// if(angka % 2 == 1) {
//     alert(angka + ' adalah bilangan GANJIL');
// }

//CARA IF DAN ELSE
var angka = prompt ('masukan angka :');
if(angka % 2 == 0) {
    alert(angka + ' adalah bilangan GENAP');
} else if (angka % 2 == 1) {
    alert(angka + ' adalah bilangan GANJIL')
} else {
    alert('yang anda masukan bukan ANGKA')
}
