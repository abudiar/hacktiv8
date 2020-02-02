var n = 1;
function logNum(){
    console.log("--------------------------");
    console.log(n + ". ");
    n++;
}

// 1.
logNum();
var rows1 = 5;

for (var i = 0; i < rows1; i++) console.log("*");

// 2.
logNum();
var rows2 = 5;
for (var i = 0; i < rows2; i++){
    var line = "";
    for (var j = 0; j < rows2; j++) line += "*";
    console.log(line);
}

// 3.
logNum();
var rows2 = 5;
for (var i = 0; i < rows2; i++){
    var line = "";
    for (var j = 0; j <= i ; j++) line += "*";
    console.log(line);
}
