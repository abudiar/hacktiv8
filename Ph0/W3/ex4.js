function dataHandling2(steh){
    steh.splice(1,2,"Roman Alamsyah Elsharawy","Provinsi Bandar Lampung");
    steh.splice(4,1,"Pria","SMA Internasional Metro")
    console.log(steh);
    var date = steh[3].split('/');
    switch(parseInt(date[1])){
        case 1:
            console.log("January")
            break;
        case 2:
            console.log("February")
            break;
        case 3:
            console.log("March")
            break;
        case 4:
            console.log("April")
            break;
        case 5:
            console.log("May")
            break;
        case 6:
            console.log("June")
            break;
        case 7:
            console.log("July")
            break;
        case 8:
            console.log("August")
            break;
        case 9:
            console.log("September")
            break;
        case 10:
            console.log("October")
            break;
        case 11:
            console.log("November")
            break;
        default:
            console.log("December")
            break;
    }
    console.log(date.sort(function(a, b){return b-a}))
    console.log(steh[3].split('/').join('-'));
    if(typeof steh[1] == 'string') console.log(steh[1].slice(0,14))
}

var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input);