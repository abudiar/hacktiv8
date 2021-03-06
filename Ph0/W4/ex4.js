function cariModus(arr) {
    var count = 0;
    var esTeh = 0;
    var prevAmt = 0;
    var prevAmtCount = 1;
    for (i in arr){
        var amt = 0;
        for (j in arr){
            if(arr[j] == arr[i]) {
                amt++
                if (amt == prevAmt) prevAmtCount++;
                else prevAmtCount = 1;
                prevAmt = amt;
            }
        }
        if (amt == arr.length || prevAmtCount == arr.length) return -1;
        if (amt > count){
            esTeh = arr[i];
            count = amt;
        }
    }
    return esTeh;
}
  
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1