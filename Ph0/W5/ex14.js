function changeVocals(str) {
    var temp = ""
    for (var i in str) {
        var x = str[i];
        if (x == 'a' || x == 'i' || x == 'u' || x == 'e' || x == 'o' || x == 'A' || x == 'I' || x == 'U' || x == 'E' || x == 'O')
            temp += String.fromCharCode(str.charCodeAt(i) + 1)
        else temp += str[i]
    }
    return temp
}

function reverseWord(str) {
    var temp = ""
    for (var i = str.length - 1; i >= 0; i--) {
        temp += str[i];
    }
    return temp;
}

function setLowerUpperCase(str) {
    var temp = ""
    for (var i in str) {
        if (str[i] >= "A" && str[i] <= "Z")
            temp += String.fromCharCode(str.charCodeAt(i) + 32)
        else if (str[i] >= "a" && str[i] <= "z")
            temp += str[i] = String.fromCharCode(str.charCodeAt(i) - 32)
        else
            temp += str[i]
    }
    return temp;
}

function removeSpaces(str) {
    var temp = "";
    for (var i in str)
        if (str[i] != " ")
            temp += str[i]
    return temp;
}

function passwordGenerator(name) {
    if (name.length < 5)
        return 'Minimal karakter yang diinputkan adalah 5 karakter'
    return removeSpaces(setLowerUpperCase(reverseWord(changeVocals(name))))
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'