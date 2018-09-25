function groupAnimals(animals) {
  animals.sort()
  // Mengurutkan array secara ascending a-z
  var penampunganBesar = []
   // variable u/ menampung array yang lebih kecil
  var alphabetPertama = animals[0][0]
  // console.log(alphabetPertama)
  var penampunganKecil = []
  for (let i = 0; i < animals.length; i++) {
    if (animals[i][0] === alphabetPertama) {
      penampunganKecil.push(animals[i])
         /*jika nilai index 0 dari array i sama dengan nilai dari alphabetPertama maka array tersebut dimasukan 
        ke penampungan kecil yaitu variable kandang kecil   
        */ 
    } else {
      penampunganBesar.push(penampunganKecil)
      penampunganKecil = []
      alphabetPertama = animals[i][0]
      penampunganKecil.push(animals[i])
    }
    if (i === animals.length - 1) {
      penampunganBesar.push(penampunganKecil)
    }
    // console.log(penampunganKecil)
  }
  return penampunganBesar
}

// TEST CASES
// console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]