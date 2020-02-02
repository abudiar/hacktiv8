var n = 1;
function logNum(){
    console.log("--------------------------");
    console.log(n + ". ");
    n++;
}

// 1.
logNum();
function xo(str) {
    var x = 0;
    var o = 0;
    for (var i = 0; i < str.length; i++) {
        if(str[i] === 'x') x++;
        if(str[i] === 'o') o++;
    }
    if(x == o) return true;
    else return false;
  }
  
  // TEST CASES
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true