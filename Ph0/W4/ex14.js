function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    var esTeh = [];
    for (var i in arrPenumpang){
        var receipt = {};
        receipt.penumpang = arrPenumpang[i][0];
        receipt.naikDari = arrPenumpang[i][1];
        receipt.tujuan = arrPenumpang[i][2];
        var st = 0;
        var end = 0;
        for (var j in rute){
            if(rute[j] == receipt.naikDari) st = j;
            if(rute[j] == receipt.tujuan) end = j;
        }
        receipt.bayar = Math.abs(end - st) * 2000;
        esTeh.push(receipt);
    }
    return esTeh;
  }
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]