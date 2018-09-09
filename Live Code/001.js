/**

Buatlah sebuah ALGORITMA/PSEUDOCODE untuk kasus berikut:

Seorang anak memiliki uang sejumlah Rp.X (jumlah uang fleksibel)
Dia akan mengunjungi sebuah toko mainan dan akan membeli mainan yang diinginkannya.
Anak ini hanya akan membeli satu mainan saja dan akan membeli harga mainan paling mahal dari uang yang dimilikinya.

Berikut beberapa mainan dan harga yang ada pada daftar anak tersebut:
 - Rubik 3x3 => Rp35.000
 - Tamiya Mini 4wd => Rp185.000
 - Robot Star Wars => Rp350.000

Tampilkan mainan apa yang bisa dibeli oleh anak tersebut dan berapa jumlah kembaliannya.
Jika uang anak tidak mencukupi satupun dari permainan tersebut, maka tampilkan "Nabung lagi ya, dek!"

**/

// YOUR ALGORITMA OR PSEUDOCODE HERE

1. Simpan 'uang' dengan nilai apapun //buat var
2. Simpan 'Rubik3x3' dengan nilai 35000
3. Simpan 'Tamiya4wd' dengan nilai 185000
4. Simpan 'RobotSW' dengan nilai 350000
5. Simpan 'sisa' dengan nilai 0
6. Cek Jika 'uang' lebih besar dari 'RobotSW' atau 'uang' sama dengan nilai 'RobotSW' masuk ke step 5a jika tidak maka ke step 6
    6a Maka tampilkan "Selamat uang kamu mencukupi untuk beli Robot ini."
    6b 'uang' sama dengan 'sisa'
7. Tampilkan "Nabung lagi ya, dek!"
8. Tampilkan "Sisa Kembali anda" +(uang-sisa)