var n = 1;
function logNum(){
    console.log("--------------------------");
    console.log(n + ". ");
    n++;
}

// 1.
logNum();

function shoutOut(){
    return "Hello Function!";
}
console.log(shoutOut()) // Menampilkan "Halo Function!" di console

// 2.
logNum();

function calculateMultiply(n1, n2){
    return n1 * n2;
}

var num1 = 5;
var num2 = 6;

var hasilPerkalian = calculateMultiply(num1,num2);
console.log(hasilPerkalian); // Menampilkan angka 30

// 2.
logNum();

function processSentence(nm, ag, ad, hb){
    return `Name saya ${nm}, umur saya ${ag} tahun, alamat saya ${ad}, dan saya punya hobby yaitu ${hb}!`
}

var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";

var fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence); // Menampilkan "Nama saya Agus, umur saya 30 tahun, alamat saya di Jln. Malioboro, Yogjakarta, dan saya punya hobby yaitu gaming!"
