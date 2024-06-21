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

function Mahasiswa(nama, energi) {
    // let mahasiswa = Object.create(objmahasiswa);
    // let mahasiswa ={};
    // let this = Object.create(Mahasiswa.prototype);
    
    this.nama = nama;
    this.energi = energi;

    // return mahasiswa;
    // return this;
}

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