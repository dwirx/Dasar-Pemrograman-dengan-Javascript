//tabel Penelusuran / trace table / dry-run test
var jmlAngkot = 10;
var angkotBeroprasi = 6;

// || = or
// && = and
// ! = not

for(var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {

    if( noAngkot <= 6) {
        console.log('Angkot No. ' + noAngkot + ' beroprasi dengan baik.');
    } else if (noAngkot === 8 || noAngkot ===10 ) {
        console.log('Angkot No. ' + noAngkot + ' sedang lembur');
    } else {
        console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi.');
    }

}