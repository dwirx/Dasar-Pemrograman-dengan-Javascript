//Membuat Object
// Object Literal
let mhs1 = {
    nama: "Hendra Bangun",
    nrp: "122321412323",
    email: "Hendra@gmail.com",
    Jurusan: "Teknik Informatika"
}

let mhs2 = {
    nama: "Dimas",
    nrp: "213213213",
    email: "dimas@gmail.com",
    Jurusan: "Teknik Informatika"
}

//?Function Declarations
function buatObjectMahasiswa(nama, nrp, email, jurusan) {
    let mhs = {};
    mhs.nama = nama;
    mhs.nrp = nrp;
    mhs.nrp = email;
    mhs.jurusan = jurusan;
    return mhs;
}

var mhs3 = buatObjectMahasiswa('Wahyu', '213214125214', 'wahyu@gmail.com', 'Teknik Informatika')

var mhs4 = buatObjectMahasiswa('nanda', '12321312', 'nanda@gmail.com', 'Teknik Informatika')


//? Constructor
function Mahasiswa(nama, nrp, email, jurusan) {
    // var this = {};
    this.nama = nama;
    this.nrp = nrp;
    this.email = email;
    this.jurusan = jurusan;
    // return this;
}

var mhs4 = new Mahasiswa('Bagus', '12321341', 'bagus@gmail.com', 'Teknik Mesin');