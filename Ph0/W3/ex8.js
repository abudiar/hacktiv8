function pasanganTerbesar(num) {
    var largest = 0;
    var strNum = num.toString();
    for(var i = 0; i < strNum.length - 1; i++){
        if (parseInt(strNum[i] + strNum[i+1]) > largest){
            largest = parseInt(strNum[i] + strNum[i+1]);
        }
    }
    return largest;
}
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99