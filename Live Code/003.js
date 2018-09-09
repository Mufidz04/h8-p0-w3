// Competencies: Loopings
/*
=================
Odd Series
=================
Instruksi
=========
Buatlah sebuah proses pengecekan dengan menggunakan looping (boleh dengan while atau for).
Disediakan variabel max, dimana akan menampilkan deret ganjil dari terbesar ke kecil hingga mencapai angka 1.
Tampilkan deret ganjil sejumlah nilai max.

contoh 1 (max = 4)
31
31
31
31

contoh 2 (max = 5)
531
531
531
531
531

contoh 3 (max = 10)
97531
97531
97531
97531
97531
97531
97531
97531
97531
97531

Ketentuan
=========
Wajib menggunakan looping!
*/

// SKELETON CODE (Code Sample)
// var max = 4; // isi dengan nilai max!
var max = 4
var baris = ''

for (var i = 1; i <= max; i++) {
    if (i % 2 !== 0) {
        baris = i + baris
        //for (var j =1; j<= max; j++) {
        //}
    }
}
for (var j = 1; j <= max; j++) {
    console.log(baris)
}