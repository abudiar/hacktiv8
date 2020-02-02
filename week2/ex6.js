function logNum(n){
    console.log("--------------------------");
    console.log(n + ". ");
}



// 1.
logNum(1);
console.log("LOOPING PERTAMA");

var n = 2;
do {
    console.log(n + " - I love coding");
    n += 2;
} while (n <= 20);

console.log("LOOPING KEDUA");
do {
    n -= 2;
    console.log(n + " - I will become fullstack developer");
} while (n > 2);

// 2.
logNum(2);
console.log("LOOPING PERTAMA");
for(var i = 1; i <= 20; i++){
    console.log(i + " - I love coding");
}
console.log("LOOPING KEDUA");
for(var i = 20; i >= 1; i--){
    console.log(i + " - I will become fullstack developer");
}

// 3.
logNum(3);

for(var i = 1; i <= 100; i++){
    if (i % 2 == 0) console.log(i + " - GENAP");
    else console.log(i + " - GANJIL");
}

for(var i = 1; i <= 100; i += 2){
    if (i % 3 == 0) console.log(i + " - KELIPATAN 3")
}

for(var i = 1; i <= 100; i += 5){
    if (i % 6 == 0) console.log(i + " - KELIPATAN 6")
}

for(var i = 1; i <= 100; i += 9){
    if (i % 10 == 0) console.log(i + " - KELIPATAN 10")
}