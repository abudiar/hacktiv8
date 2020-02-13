function changeMe(arr) {
    for (i in arr){
        var esTeh = {
            firstName: 'Invalid First Name',
            lastName: 'Invalid Last Name',
            gender: 'Invalid Gender',
            age: 'Invalid Birth Year'
        }
        for (var j = 0; j < arr[i].length; j++){
            switch(j){
                case 0: 
                    esTeh.firstName = arr[i][0];
                    break;
                case 1:
                    esTeh.lastName = arr[i][1];
                    break;
                case 2:
                    esTeh.gender = arr[i][2];
                    break;
                case 3:
                    if (arr[i][3] <= 2020) esTeh.age = 2020 - arr[i][3];
                    break;
            }
        }

        console.log(`${Number(i)+1}. ${esTeh.firstName} ${esTeh.lastName}`)
        console.log(esTeh);
    }
}
  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 37 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  changeMe([]); // ""