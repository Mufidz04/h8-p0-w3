var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
// function dataHandling2() {
//     input.splice(1, 2 , "Roman Alamsyah Elsharawy" , "Provinsi Bandar Lampung");
//     input.splice(4, 5 , "Pria", "SMA Internasional Metro");
//     console.log(input)
// }
// dataHandling2(input);

var bulan = input[3].split('/') // [3]? Karena array bulan terdapat di 3
/*
Menghasilkan [ '21' , '05' , '1989']
*/
// switch(bulan[1]){
//     // Bulan[1] ? Karena hasil dari split array bulan di 1
//     case '01': 
//       bulan = 'Januari'
//       break;
//     case '02':
//       bulan = 'Februari'
//       break;
//     case '03':
//       bulan = 'Maret'
//       break;
//     case '04':
//       bulan = 'April'
//       break;
//     case '05':
//       bulan = 'Mei'
//       break;
//     case '06':
//       bulan = 'Juni'
//       break;
//     case '07':
//       bulan = 'Juli'
//       break;
//     case '08':
//       bulan = 'Agustus'
//       break;
//     case '09':
//       bulan = 'September'
//       break;
//     case '10':
//       bulan = 'Oktober'
//       break;
//     case '11':
//       bulan = 'November'
//       break;
//     case '12':
//       bulan = 'Desember'
//       break;
//     default:
//       bulan = 'Bulan tidak tersedia'
//       break;
//   }
// console.log(bulan)

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

var arr = [ '21' , '05' , '1989']
arr.sort(function(a, b){return b-a});
console.log(arr)

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

var formatTanggal = [ '21' , '05' , '1989']
console.log(formatTanggal.join('-'))

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

console.log(input[1].slice(0, 15))
/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */