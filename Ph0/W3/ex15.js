function groupAnimals(animals) {
    var doneLetters = '';
    var stehBesar = [];
    for (var i = 0; i < animals.length; i++){
        var steh = [];
        var currLetter = animals[i][0];
        if (!doneLetters.includes(currLetter)){
            doneLetters += currLetter;
            for (var j = 0; j < animals.length; j++){
                if (animals[j][0] == currLetter)
                    steh.push(animals[j]);
            }
            stehBesar.push(steh);
        }
    }
    return stehBesar.sort();
}
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]