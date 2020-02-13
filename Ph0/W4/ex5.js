function ubahHuruf(kata) {
    var esTeh = '';
    for (i in kata){
        esTeh += String.fromCharCode((kata.charCodeAt(i) + 1));
    }
    return esTeh;
}
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu