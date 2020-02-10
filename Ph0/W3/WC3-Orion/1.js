/**
 * ===========
 * MINE TYCOON
 * ===========
 *
 * Anggap Array 2 dimensi ini adalah sebuah tambang. Row merepresentasikan lantai dari tambang tersebut (dari lantai 0 sampai lantai N kebawah)
 * Tambang ini memiliki 4 mineral yang menjadi kekayaan alam tambang tersebut yaitu:
 *
 * - copper
 * - silver
 * - gold
 * - diamond
 *
 * 'steps' adalah jumlah langkah yang dapat di capai oleh si penambang, untuk menambang di penambangan,
 * lokasi yang sudah di lewati oleh penambang, akan menjadi kosong
 *
 * Jika penambang mendapatkan salah satu dari 4 mineral di atas, maka penambang akan menyimpannya.
 * Function akan mereturn mineral yang pernah di dapatkan oleh si penambang selama menambang.
 *
 * contoh:
 * #mine
 * [
 *  ['#', 'c', 's', '#', '#', '#', '#'],
 *  ['d', '#', 'c', '#', 'd', '#', '#'],
 *  ['#', '#', '#', 'g', '#', '#', '#']
 * ]
 * #steps: 11
 *
 * maka function akan mereturn:
 *  mineral:
 *    [[2, cooper], [1, silver], [1, diamond]]
 *
 * Dan jika variable mine yang di tambang di console.log maka penampakan terakhirnya adalah seperti ini:
 *    [
 *      [' ', ' ', ' ', ' ', ' ', ' ', ' '],
 *      [' ', ' ', ' ', ' ', 'd', '#', '#'],
 *      ['#', '#', '#', 'g', '#', '#', '#']
 *    ]
 *
 * RULES:
 * - Wajib menuliskan Pseudocode!
 * - Dilarang menggunakan built-in function .reduce .filter .map .indexOf .lastIndexOf etc
 */

// Pseudocode

// FUNCTION mineTycoon(mine, steps)
// depth = LENGTH of mine
// width = LENGTH of first array in mine
// copper = 0
// silver = 0
// gold = 0
// diamond = 0
// minerals = empty array
// FOR 0 to depth
// 	FOR 0 to width
// 		IF steps > 0
// 			SWITCH mine[i][j]
// 				CASE 'c'
// 					copper++
// 				CASE 's'
// 					silver++
// 				CASE 'g'
// 					gold++
// 				CASE 'd'
// 					diamond++
// 			END
// 			mine[i][j] = ' '
// 			steps--
// 		END
// 	END
// END

// FUNCTION fillArr(amount, mineral)
// 	IF amount > 0
// 		minerals PUSH([amount, mineral])
// 	END
// END

// fillArr(copper, 'copper');
// fillArr(silver, 'silver');
// fillArr(gold, 'gold');
// fillArr(diamond, 'diamond');

// return minerals
// END


function mineTycoon(mine, steps) {
	//implementasi function disini!
	var depth = mine.length;
	var width = mine[0].length;
	var copper = 0;
	var silver = 0;
	var gold = 0;
	var diamond = 0;
	var minerals = [];
	for (var i = 0; i < depth; i++){
		for (var j = 0; j < width; j++){
			if (steps > 0){
				switch (mine[i][j]){
					case 'c':
						copper++;
						break;
					case 's':
						silver++;
						break;
					case 'g':
						gold++;
						break;
					case 'd':
						diamond++;
						break;
				}
				mine[i][j] = ' ';
				steps--;
			}
		}
	}
	
	function fillArr(amount, mineral){
		if (amount > 0){
			minerals.push([amount, mineral]);
		}
	}

	fillArr(copper, 'copper');
	fillArr(silver, 'silver');
	fillArr(gold, 'gold');
	fillArr(diamond, 'diamond');

	return minerals;
}

var mine1 = [
	['#', 'h', 's', '#', '#', '#', 'g'],
	['u', '#', 'c', '#', 'd', '#', '#'],
	['#', '#', '#', '#', '#', '#', '#']
];
console.log(mineTycoon(mine1, 10));
// [[1, copper] [1, silver] [1, gold]]

var mine2 = [
	['#', '#', '#', '#', '#', 'w', '#'],
	['r', '#', 'c', '#', 'd', '#', '#'],
	['#', 't', '#', 'c', '#', '#', '#'],
	['#', '#', 's', 'g', '#', '#', '#'],
	['#', '#', '#', '#', '#', '#', '#']
];
console.log(mineTycoon(mine2, 20));
// [[2, copper], [1, diamond]]

var mine3 = [
	['d', 'c', '#', 's', '#', 'w', '#'],
	['r', 'b', 'c', '#', '#', '#', 'g'],
	['#', 't', '#', 'c', '#', '#', '#'],
	['#', '#', 's', 'g', '#', '#', '#']
];
console.log(mineTycoon(mine3, 94));
// [ [ 3, 'copper' ], [ 2, 'silver' ], [ 2, 'gold' ], [ 1, 'diamond' ] ]