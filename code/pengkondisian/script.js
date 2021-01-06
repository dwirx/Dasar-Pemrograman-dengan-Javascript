// console.log('******')
// // Contoh 1
// for( var i = 0; i < 5; i++ ) {
//     console.log('*');
// }

// // s = string
// //Contoh 2 dari atas ke bawah
// var s = '';
// for( var i = 0; i < 10; i++ ){
//     // s += '*'; membuat jumlah baris
//     for( var j = 0; j <= i; j++ ) {
//         s += '*';
//     }
//     s += '\n';
// }

// console.log(s);

// //contoh 3 dari bawah ke atas
// var s = '';
// for( var i = 10; i > 0; i-- ){
//     // s += '*'; membuat jumlah baris
//     for( var j = 0; j < i; j++ ) {
//         s += '*';
//     }
//     s += '\n';
// }

// console.log(s);

// //contoh 4 
// var s = '';
// for (var i = 7; i >= 1; i--) {
//   var s = "";
//   for (var j = i; j <= 7; j++) {
//   s += "*";
//      }
//  console.log(s);
// }

// var a = '';
// var n = 5;
// var m = (n-1); 
// for(i=1; i <= n; i++)
// {
//     a = a.trim();
//     a = ' '.repeat(m) + a + (i > 1 ? ' ' : '') + '*';
//     console.log(a);
//     m--;
// }
    

var s ='';
for (var i = 10; i > 0; i--) {
    for (var j = 0; j < i; j++) {
        s += '*';
    }
    s += '\n'; 
}
console.log(s);