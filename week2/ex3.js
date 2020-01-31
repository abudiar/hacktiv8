var nama = "Bruhh";
var peran = "Tabib";

if (!nama) {
    console.log("Nama harus diisi!");
}
else {
    if (!peran) {
        console.log("Halo " + nama + ", pilih peranmu untuk memulai game!")
    }
    else if (peran === "Ksatria"){
        console.log("Halo " + nama + ", kamu dapat menyerang dengan senjatamu!")
    }
    else if (peran === "Tabib"){
        console.log("Halo " + nama + ", kamu akan membantu temanmu yang terluka.")
    }
    else if (peran === "Penyihir"){
        console.log("Halo " + nama + ", ciptakan keajaiban yang membantu kemenanganmu!")
    }
    else {
        console.log("Halo " + nama + ", hanya bisa pilih diantara Ksatria, Tabib, atau Penyihir.")
    }
}