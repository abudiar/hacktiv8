function digitPerkalianMinimum(angka) {
    var num = 0;
    var esTeh = Number.POSITIVE_INFINITY;
    for (var i = 1; i <= angka; i++){
        if (angka % i == 0){
            num = angka / i;
            let length = String(num).length + String(i).length;
            if (length < esTeh) esTeh = length;
        }
    }
    return esTeh;
}
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2