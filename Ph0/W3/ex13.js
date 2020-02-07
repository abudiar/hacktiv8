function targetTerdekat(arr) {
    var iO = 0;
    var iX = Number.POSITIVE_INFINITY;
    var steh = false;
    for (var i = 0; i < arr.length; i++){
        if (arr[i] == 'o') iO = i;
    }
    for (var i = 0; i < arr.length; i++){
        if (arr[i] == 'x') {
            steh = true;
            if (Math.abs(iO - i) < Math.abs(iO - iX)) iX = i;
        }
    }
    if (steh) return (Math.abs(iO - iX))
    else return 0;
}
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2