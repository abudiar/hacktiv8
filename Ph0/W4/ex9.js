function checkAB(num) {
    var arr = num.split('')
    var esTeh = false;
    for (i in arr){
        for (var j = arr.length - 1; j > i; j--){
            if ((arr[i] == 'a' && arr[j] == 'b') || (arr[j] == 'a' && arr[i] == 'b')) {
                if (j - i == 4) esTeh = true;
            }
        }
    }
    return esTeh;
}
  
  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false