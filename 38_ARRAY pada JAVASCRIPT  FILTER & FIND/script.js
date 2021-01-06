//? 9.filter
//filter :mengembalikan banyak niali
// var angka = [1,2,10,5,3,20,6,7,8,4];
// var angka2 = angka.filter(function(x) {
//     return x > 5;
// });
// console.log(angka2.join(' - '));

//find : tidak menampilkan nilai banyak .mengembalikan satu nilai
var angka = [1,2,10,5,20,6,7,8,4];
var angka2 = angka.find(function(x) {
    return x > 5;
});
console.log(angka2);
