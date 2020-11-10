// console.log('******')
// // Contoh 1
// for( var i = 0; i < 5; i++ ) {
//     console.log('*');
// }

// // s = string
// //Contoh 2
// var s = '';
// for( var i = 0; i < 10; i++ ){
//     // s += '*'; membuat jumlah baris
//     for( var j = 0; j <= i; j++ ) {
//         s += '*';
//     }
//     s += '\n';
// }

// console.log(s);

//contoh 3
var s = '';
for( var i = 10; i > 0; i-- ){
    // s += '*'; membuat jumlah baris
    for( var j = 0; j < i; j++ ) {
        s += '*';
    }
    s += '\n';
}

console.log(s);