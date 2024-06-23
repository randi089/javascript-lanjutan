// Destructuring

// Contoh kasus 1
// function penjumlahanPerkalian(a, b) {
//     return [a+b, a*b];
// }

// const jumlah = penjumlahanPerkalian(1, 2)[0];
// const kali = penjumlahanPerkalian(1, 2)[1];

// const [jumlah, kali] = penjumlahanPerkalian(1, 2);

// console.log(`${jumlah} ${kali}`);

// Contoh kasus 2
// function kalkulasi(a, b) {
//     return [a+b, a-b, a*b, a/b];
// }

// const [tambah, kurang, kali, bagi = 'tidak ada'] = kalkulasi(2,3);
// console.log(bagi);

// const [tambah, ...values] = kalkulasi(4, 2);
// values.map( i => console.log(i) );

// Contoh kasus 3
// function kalkulasi(a, b) {
//     return {
//         tambah: a+b,
//         kurang: a-b,
//         kali: a*b,
//         bagi: a/b
//     };
// }

// const {kurang, bagi, tambah, kali} = kalkulasi(4, 2);
// console.log(kurang);

// Contoh kasus 4
// Destructuring function arguments
const mhs1 = {
    nama: 'Randi Febriadi',
    umur: 25,
    email: 'randifebriadi@gmail.com',
    nilai: {
        tugas: 80,
        uts: 85,
        uas: 75
    }
};

// function cetakMhs(mhs) {
//     return `Halo, nama saya ${mhs.nama}, saya berumur ${mhs.umur} tahun.`;
// }
// console.log(cetakMhs(mhs1));

function cetakMhs({nama, umur, nilai: {tugas, uts, uas}}) {
    return `Halo, nama saya ${nama}, saya berumur ${umur} tahun, dan nilai uas saya adalah ${uas}`;
}

console.log(cetakMhs(mhs1));