/*
Instruksi
=========
Buatlah sebuah function bernama drawLadder yang menerima satu parameter bernama row.
Function tidak perlu mengembalikan nilai (tidak perlu ada return).

Contoh 1
--------
input: 3
x
xo
x

Contoh 2
--------
input: 6
tampilan:
x
xo
xox
xox
xo
x

*/
function drawLadder(row) {
  // your code here
    var tampung = ''
    for(var i=0; i<row ; i++){
      tampung += "*"
      console.log(tampung)
    }
  }
  drawLadder(3)