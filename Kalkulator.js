const input = require('readline-sync')

console.log('PILIH METODE')
console.log('Pilih 1,2,3,4')
var Metode = input.question('1.Tambah|2.Kurang|3.Kali|4.Bagi:')

if(Metode == 1){
    var Angka1 = input.questionInt('Masukan angka Ke 1:')
    var Angka2 = input.questionInt('Masukan angka Ke 2:')
    console.log(Angka1+Angka2)
}else if(Metode == 2){
    var Angka1 = input.questionInt('Masukan angka Ke 1:')
    var Angka2 = input.questionInt('Masukan angka Ke 2:')
    console.log(Angka1-Angka2)
}else if(Metode == 3){
    var Angka1 = input.questionInt('Masukan angka Ke 1:')
    var Angka2 = input.questionInt('Masukan angka Ke 2:')
    console.log(Angka1*Angka2)
}
