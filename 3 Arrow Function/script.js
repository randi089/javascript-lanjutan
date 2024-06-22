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
const tampilNama = () => `Hello World!`;
console.log(tampilNama());