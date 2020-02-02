var n = 1;
function logNum(){
    console.log("--------------------------");
    console.log(n + ". ");
    n++;
}

// 1.
logNum();
function balikKata(kata) {
    var kebalik = "";
    for (var i = kata.length - 1; i >= 0; i--){
        kebalik += kata[i];
    }
    return kebalik;
  }
  
  // TEST CASES
  console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
  console.log(balikKata('John Doe')); // eoD nhoJ
  console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
  console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
  console.log(balikKata('Super')); // repuS