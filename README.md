# -LT-30_Label

Label adalah mekanisme yang digunakan dalam JavaScript untuk memberikan nama pada perulangan atau pernyataan lainnya. Label digunakan untuk mengidentifikasi perulangan atau pernyataan yang spesifik yang ingin Anda kontrol. Label dapat digunakan bersama dengan perintah `"break"` dan `"continue"` untuk mengontrol alur logika dari perulangan Anda.

Label didefinisikan dengan menambahkan nama yang Anda inginkan di depan perulangan atau pernyataan yang ingin Anda beri label, diikuti dengan titik dua(:). Sebagai contoh:

    label1: for (var i = 0; i < 5; i++) {
      console.log(i);
    }

Dalam contoh di atas, kita menambahkan label `"label1"` pada perulangan `"for"` yang berisi perintah console.log(i). Anda juga dapat menggunakan label dengan perintah `"break"` dan `"continue"` untuk mengontrol perulangan yang spesifik. Sebagai contoh:

    label1: for (var i = 0; i < 5; i++) {
      for (var j = 0; j < 5; j++) {
        if (i === 3) {
          break label1;
        }
        console.log(i, j);
      }
    }

Dalam contoh di atas, kita menggunakan label `"label1"` untuk mengidentifikasi perulangan `"for"` yang ingin kita hentikan ketika kondisi i===3 terpenuhi.

Secara keseluruhan, label adalah mekanisme yang sangat berguna dalam pemrograman JavaScript yang dapat digunakan untuk mengontrol alur logika dari perulangan Anda. Namun, Anda harus menggunakannya dengan hati-hati untuk menghindari kesalahan atau kode yang sulit dibaca.

Selain itu, label juga dapat digunakan dengan pernyataan `"switch"` dalam JavaScript. Pernyataan "switch" digunakan untuk mengevaluasi suatu ekspresi dan mengeksekusi blok kode yang sesuai dengan kondisi yang ditentukan. Sebagai contoh:

    switch (x) {
      case 0:
        // code block
        break;
      case 1:
        // code block
        break;
      default:
        // code block
    }

Dalam contoh di atas, kita menggunakan label pada kondisi `"case"` dalam pernyataan `"switch"` dan digunakan dalam perintah `"break"` untuk menghentikan eksekusi pada kondisi yang ditentukan.

Secara keseluruhan, label adalah mekanisme yang sangat berguna dalam pemrograman JavaScript yang dapat digunakan untuk mengontrol alur logika dari perulangan, pernyataan `"switch"` dan mengidentifikasi perulangan atau pernyataan yang spesifik yang ingin Anda kontrol. Namun, Anda harus menggunakannya dengan hati-hati untuk menghindari kesalahan atau kode yang sulit dibaca.
