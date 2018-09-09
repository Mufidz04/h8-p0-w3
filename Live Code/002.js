// Competencies: Mathematical Operation and Conditionals
/*
===============
Restaurant Visitation
===============
Instruksi
=========
Seseorang pengunjung bar direpresentasikan oleh JavaScript dengan memiliki variable name, age, dan money.
Ia masuk ke sebuah restaurant untuk makan, namun restaurant memiliki kondisi sebagai berikut:

Step 1. Jika name dari si pengunjung kosong, tampilkan di console "Anda tidak boleh masuk!" dan program selesai.
Jika name tidak kosong, lanjut ke step ke 2.

Step 2. Jika age dari si pengunjung dibawah 55 tahun, maka ia dapat memesan steak.
Jika pengunjung memiliki usia 55 tahun ke atas ia boleh memesan steak dan mendapatkan diskon sebesar 30%

Step 3. Steak memiliki harga 300000

Jika money / uang yand pengunjung miliki tidak mencukupi, maka tampilkan
di-console "Uang tidak cukup. Anda harus pulang". Jika uang cukup, tampilkan
"Anda bisa pesan steak. Sisa uang anda: [...]", dan ganti [...] dengan sisa uang yang telah dikurangi oleh harga steak dan diskon jika ada.

Ketentuan
=========
Diberikan variable name, age, dan money. Dipersilahkan mengganti nilai dari 3 variable tersebut,
sesuai data type yang cocok, namun dilarang mengganti nama variable.
*/

// SKELETON CODE (Code Sample)

var name = 'Faza'; // silakan berikan nilai bebas
var age = 53 ; // silakan berikan nilai bebas
var money = 100000; // silakan berikan nilai bebas

// Buat code disini
if (name === '') {
    console.log("Anda tidak boleh masuk!");
} else {
    console.log( "Silahkan Masuk!");   
}
if (age <= 55) {
    console.log( "Silahakan Memesan Steak Anda seharga Rp.300.000");
    var steak = 300000
} else {
    var steak = 300000 * 0.7
    console.log( "Selamat anda mendapatkan diskon sebesar 30% untuk memesan steak");
}
if (money <= steak) {
    console.log( "Uang tidak cukup. Anda harus pulang");   
} else {
    console.log( "Sisa uang anda:" + (money-steak) );
}