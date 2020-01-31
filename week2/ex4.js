var tanggal = 14; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
var bulan = 1; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
var tahun = 1998; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

if (tanggal > 0 && tanggal <= 31 &&
    bulan > 0 && bulan <= 12 &&
    tahun > 1900 && tahun <= 2200) {
    var bulanStr = "";
    switch (bulan){
        case 1: bulanStr = "Januari";
            break;
        case 2: bulanStr = "Februari";
            break;
        case 3: bulanStr = "Maret";
            break;
        case 4: bulanStr = "April";
            break;
        case 5: bulanStr = "Mei";
            break;
        case 6: bulanStr = "Juni";
            break;
        case 7: bulanStr = "Juli";
            break;
        case 8: bulanStr = "Agustus";
            break;
        case 9: bulanStr = "September";
            break;
        case 10: bulanStr = "Oktober";
            break;
        case 11: bulanStr = "Nopember";
            break;
        default: bulanStr = "Desember";
            break;
            
    }
    console.log(tanggal + " " + bulanStr + " " + tahun)
}
else {
    console.log("Tolong pilih tanggal dan bulan yg nyata, dan tahun diantara 1900 - 2200.")
}