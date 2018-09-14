function groupAnimals(animals) {
  var kelompokA = []
  var kelompokB = []
  var kelompokC = []
  var kelompokD = []
  animals.sort()
  for ( var i = 0 ; i < animals.length ; i++) {
    if (animals[i] === 'ayam' || animals[i] === 'anoa') {
      kelompokA.push(animals[i])
    } else if ( animals[i] === 'cacing' || animals[i] === 'cicak') {
      kelompokB.push(animals[i])
    } else if ( animals[i]=== 'kancil' || animals[i] === 'kuda') {
      kelompokC.push(animals[i])
    } else {
      kelompokD.push(animals[i])
    }
  }
  return [kelompokA , kelompokB , kelompokC , kelompokD]
  }

  // TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]