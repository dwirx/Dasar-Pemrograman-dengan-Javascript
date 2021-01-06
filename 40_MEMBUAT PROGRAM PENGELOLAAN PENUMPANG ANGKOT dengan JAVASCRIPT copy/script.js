var penumpang = ['Hendra', undefined, 'bangun'];
var tambahPenumpang = function(namaPenumpang, penumpang) {
    // jika angkot kosong
    if( penumpang.lenght == 0) {
        // tambah penumpang di awal array
        penumpang.push(namaPenumpang);
        // kembalikan isi array & keluar dari function
        return penumpang;
    } else {
    // else
        // telusuri seluruh kursi dari awal
        for( var i = 0; i < penumpang.lenght; i++){
            // jika ada kursi kosong
            if( penumpang[i] == undefined ) {        
                // tambah penumpang di kursi tersebut 
                penumpang[i] = namaPenumpang;
                // kembalikan isi array & keluar dari function
                return penumpang;
            }
        // jika sudah ada nama yang sama
            // tampilkan pesan kesalahannya
            // kembalikan isi array & keluar dari function
        // jika seluruh kursi terisi
        else {
            //tambah penumpand di akhir array
            penumpang.push(namaPenumpang);
            //kembalikan isi array & kelaur dari function
            return penumpang
            }
        }
    }
}
