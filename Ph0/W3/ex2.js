function balikString(steh){
    var stehDingin = '';
    for(var i = 0; i < steh.length; i++){
        stehDingin += steh[steh.length - 1 - i];
    }
    return stehDingin;
}

console.log(balikString('hello world!'))