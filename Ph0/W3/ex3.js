function dataHandling(steh){
    for(var i = 0; i < steh.length; i++){
        for(var j = 0; j < steh[i].length; j++){
            switch(j){
                case 0:
                    console.log(`Nomor ID: ${steh[i][j]}`);
                    break;
                case 1:
                    console.log(`Nama Lengkap: ${steh[i][j]}`);
                    break;
                case 2:
                    console.log(`TTL: ${steh[i][j]} ${steh[i][j+1]}`);
                    break;
                case 4:
                    console.log(`Hobi: ${steh[i][j]}`);
                    break;
                default:
                    break;
            }
        }
        console.log('');
    }
}
var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]
dataHandling(input);