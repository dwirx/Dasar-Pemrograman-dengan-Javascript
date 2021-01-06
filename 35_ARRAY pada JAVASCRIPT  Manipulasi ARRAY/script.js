//Manipusali Array

//! 1. Menambah isi array

//? Contoh 1
// var arr = ["a",1,true];
// console.log(arr[1]);

//? Contoh 2
// var arr = [];
// arr[0] = "Hendra";
// arr[1] = "Bangun";
// arr[2] = "widya";
// arr[3] = "novi";

// console.log(arr);

//! 2. Menghapus isi array
// var arr = ["Hendra","Bangun","Dwi"];
// arr[1] = undefined;
// console.log(arr);

//! 3. Menampilkan isi array
// var arr = ["Hendra","Bangun","Dwi"];

// for (var i = 0; i < 3; i++) {
//   console.log(arr[i]);
// }

// for (var i = 0; i < 3; i++) {
//   console.log('Mahasiswa ke-' + i + ' : ' + arr[i]);
// }

//dimulai dari 1
// for (var i = 0; i < 3; i++) {
//   console.log('Mahasiswa ke-' + (i+1) + ' : ' + arr[i]);
// }

//element di dentutkan onleh javascript
// for (var i = 0; i < arr.length; i++) {
//   console.log('Mahasiswa ke-' + (i+1) + ' : ' + arr[i]);
// }

//! Method pada array
var arr = ['Hendra','wahyu','Widi'];
//? 1.join
// console.log(arr.join(' - '));

//? 2. Push & pop / menambah atau menghapus
// arr.push('Hafidz','Nanda');
// arr.pop();
// console.log(arr.join(' - '));

//? 3. unshift & shift
// arr.unshift('Roby');
arr.shift();
console.log(arr.join(' - '));