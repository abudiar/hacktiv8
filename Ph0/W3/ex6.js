function angkaPalindrome(num) {
    function isPalindrome(steh){
        stehDingin = '';
        stehPanas = steh.toString();
        for(var i = stehPanas.length - 1; i >= 0; i--){
            stehDingin += stehPanas[i];
        }
        if (stehDingin == stehPanas) return true;
        else return false;
    }
    
    var nextNum = num + 1;
    while (!isPalindrome(nextNum)){
        nextNum++;
    }
    return nextNum;
  }
  
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001