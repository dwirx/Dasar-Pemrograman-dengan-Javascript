//tabel Penelusuran / trace table / dry-run test
var jmlAngkot = 10;
var ankotBeroprasi = 6;
var noAngkot = 1;

while (noAngkot <= ankotBeroprasi){
    console.log("Orang no." + noAngkot  + " Berjalan Dengan Baik");
noAngkot++;
};

for( noAngkot = ankotBeroprasi + 1; noAngkot <= jmlAngkot; noAngkot++){
    console.log('Angkot no ' + noAngkot + ' sedang tidak beroperasi.');
}