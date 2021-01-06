// var angka = prompt('masukan angka :');

// if( angka == 1) {
//     alert('anda memasukan angka 1');
// } else if( angka == 2) {
//     alert('anda memasukkan angka 2');
// } else if( angka == 3) {
//     alert('anda memasukkan angka 3');
// } else {
//     alert('angka yang anda masukkan salah!');
// }

//Conotoh 1
// //mengunakan switch dalama java 

// var angka = prompt('masukan angka :');

// switch ( angka ) {
//     case '1' :
//         alert('anda memasukan angka 1');
//         break;
//     case '2' :
//         alert('anda memasukan angka 2');
//         break;
//     case '3' : 
//         alert('anda memasukan angka 3');
//         break;
//     default :
//         alert('angka yang anda masukkan salah!')
//         break;
// }

// //contoh 2
// var item = prompt('nasukkan nama makanan / minuman : \n (cth: nasi, daging, susu, hamburber, softdrink)');

// switch(item) {
//     case 'nasi' :
//         alert('makanan / minuman SEHAT!');
//         break;
//     case 'daging' :
//         alert('makanan / minuman SEHAT!');
//         break;
//     case 'susu' :
//         alert('makanana / minuman SEHAT!');
//         break; 
//     case 'hamburger' :
//         alert('makanana / minuman TIDAK SEHAT!');
//         break;
//     case 'softdrink' :
//         alert('makanana / minuman TIDAK SEHAT!');
//         break;
//     default :
//         alert('makanana / minuman yang salah!');
//         break;
// }

//CONTOH 3
var item = prompt('nasukkan nama makanan / minuman : \n (cth: nasi, daging, susu, hamburber, softdrink)');

switch(item) {
    case 'nasi' :
    case 'daging' :
    case 'susu' :
        alert('makanana / minuman SEHAT!');
        break; 
    case 'hamburger' :
    case 'softdrink' :
        alert('makanana / minuman TIDAK SEHAT!');
        break;
    default :
        alert('makanana / minuman yang salah!');
        break;
}
