// Function Expresion
// const tampilNama = function(nama) {
//     return `Halo, ${nama}`;
// }
// console.log(tampilNama('Randi'));

// Arrow Function 1 parameter
// const tampilNama = (nama) => {
//     return `Halo, ${nama}`;
// }
// console.log(tampilNama('Tasya Aryati Sakinah'));

// Arrow Function 2 parameter atau lebih harus pakai kurung
// const tampilNama = (nama, waktu) => {
//     return `Selamat ${waktu}, ${nama}`;
// }
// console.log(tampilNama('Randi', 'Pagi'));

// Arrow Function 1 parameter bisa tanpa kurung dan 1 argument bisa tanpa kurung kurawal dan tanpa return
// implisit return
// const tampilNama = nama => `Halo, ${nama}`;
// console.log(tampilNama('Tasya Aryati Sakinah'));

// Arrow Function tanpa parameter harus menggunakan kurung
// const tampilNama = () => `Hello World!`;
// console.log(tampilNama());

// let mahasiswa = ['Randi Febriadi', 'Tasya Aryati Sakinah', 'Rumzi Rahman'];

// Function Expression
// let jumlahHuruf = mahasiswa.map(function(nama) {
//     return nama.length;
// });

// console.log(jumlahHuruf);

// Arrow Function
// let jumlahHuruf = mahasiswa.map(nama => nama.length);

// console.log(jumlahHuruf);

// // return object
// let jumlahHuruf = mahasiswa.map(nama => ({nama, jmlHuruf: nama.length}));
// console.table(jumlahHuruf);

// Konsep this pada Arrow Function
// Constructor Function
// const Mahasiswa = function() {
//     this.nama = 'Randi';
//     this.umur = 25;
//     this.sayHello = function() {
//         console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
//     }
// }

// const randi = new Mahasiswa();

// Arrow Function
const Mahasiswa = function() {
    this.nama = 'Randi';
    this.umur = 25;
    this.sayHello = () => {
        console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
    };
}

const randi = new Mahasiswa();