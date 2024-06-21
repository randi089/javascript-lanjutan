// Cara untuk membuat Object pada javascript
// 1. Object literal
// PROBLEM: tidak efektif untuk object yang banyak.
// let mahasiswa1 = {
//     nama: 'Randi Febriadi',
//     energi: 10,
//     makan: function(porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`);
//     }
// };

// let mahasiswa2 = {
//     nama: 'Tasya Aryati Sakinah',
//     energi: 20,
//     makan: function(porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`);
//     }
// };

// 2. Function Declaration
// const objmahasiswa = {
//     makan: function(porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`);
//     },
//     main: function(jam) {
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, selamat bermain!`);
//     },
//     tidur: function(jam) {
//         this.energi += jam*2;
//         console.log(`Halo ${this.nama}, selamat tidur!`);
//     }
// }

// function Mahasiswa(nama, energi) {
//     let mahasiswa = Object.create(objmahasiswa);
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;

//     return mahasiswa;
// }

// let randi = Mahasiswa('Randi', 10);
// let tasya = Mahasiswa('Tasya', 20);

// function Mahasiswa(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;
// }

// Mahasiswa.prototype.makan = function (porsi) {
//     this.energi += porsi;
//     return `Halo ${this.nama}, selamat makan!`;
// }

// Mahasiswa.prototype.main = function (jam) {
//     this.energi -= jam;
//     return `Halo ${this.nama}, selamat bermain!`;
// }

// Mahasiswa.prototype.tidur = function (jam) {
//     this.energi += jam*2;
//     return `Halo ${this.nama}, selamat tidur!`;
// }

// let randi = new Mahasiswa('Randi', 10);

// versi Class
class Mahasiswa {
    constructor(nama, energi) {
        this.nama = nama;
        this.energi = energi;
    }

    makan(porsi) {
        this.energi += porsi;
        return `Halo ${this.nama}, selamat makan!`;
    }
    
    main(jam) {
        this.energi -= jam;
        return `Halo ${this.nama}, selamat bermain!`;
    }
    
    tidur(jam) {
        this.energi += jam*2;
        return `Halo ${this.nama}, selamat tidur!`;
    }    
}

let randi = new Mahasiswa('Randi', 10);
let tasya = new Mahasiswa('Tasya', 20);

// 3. Constructor Function
// keyword new
// function Mahasiswa(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;
//     this.makan = function(porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`);
//     };
//     this.main = function(jam) {
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, selamat bermain!`);
//     };
// }

// let randi = new Mahasiswa('Randi', 10);

// 4. Object.create