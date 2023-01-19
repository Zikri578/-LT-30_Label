// melakukan perulangan menggunakan continue

// membuat function yang bernama bilangan
function ganjil() {
    // membuat variabel result untuk melakukan input data menggunakan prompt
    let result = prompt('Masukkan Bilangan : ');

    // membuat label bernamaa loopk
    loopk:
    // 
    for (let ganjil = 0; ganjil <= result; ganjil++) {
        // membuat label bernama loopl 
        loop:
        // apabila sisa dibagi 2 menjadi 0 maka 
        if (ganjil % 2 == 0) {
            // di skip kemudian melanjutkan angka selanjutnya
            continue;
        }
        // menampilkan pesan di web sampai batas angka yang ditentukan
        console.log(`${ganjil} adalah bilangan ganjil`);
    }
}

// membuat function yang bernama bilangan
function genap() {
    // membuat variabel result untuk melakukan input data menggunakan prompt
    let number = prompt('Masukkan Angka : ');

    // membuat label bernamaa loopq
    loopq:
    // 
    for (let genap = 0; genap <= number; genap++) { // membuat label bernama loopl 
        // membuat label bernama loopr
        loopr:
        // apabila sisa bagi menjadi 1 maka
        if (genap % 2 == 0) {
            // akan menampilkan pesan di web sampai batas angka yang ditentukan
            console.log(`${genap} adalah bilangan genap`);
        }
        // akan di skip kemudian melanjutkan angka selanjutnya
        continue;
    }
}

