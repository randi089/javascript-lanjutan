// Desctructuring Variable / Assignment

// Destructuring Array
// const perkenalan = ['Halo', 'nama', 'saya', 'Randi'];
// const salam = perkenalan[0];
// const nama = perkenalan[3];
// const [salam, satu, dua, orang] = perkenalan;

// skipping items
// const [salam, , , orang] = perkenalan;
// console.log(salam);
// console.log(orang);

// swap items
// let a = 1;
// let b = 2;
// console.log(a);
// console.log(b);
// [a, b] = [b, a];
// console.log(a);
// console.log(b);

// return value pada function
// function coba() {
//     return [1, 2];
// }

// // const a = coba();
// const [a, b] = coba();
// console.log(a);
// console.log(b);

//Rest parameter
// const [a, ...values] = [1, 2, 3, 4, 5];
// console.log(a);
// console.log(values);

// Destructuring Object
// const mhs = {
//     nama: 'Randi Febriadi',
//     umur: 25
// };

// const {nama, umur} = mhs;
// console.log(nama);

// Assignment tanpa deklarasi object
// ({nama, umur} = {
//     nama: 'Randi Febriadi',
//     umur: 25
// });
// console.log(nama);

// Assignment ke variabel baru
// const mhs = {
//     nama: 'Randi Febriadi',
//     umur: 25
// };

// const {nama: n, umur: u} = mhs;
// console.log(n);

// Memberikan Default Value
// const mhs = {
//     nama: 'Randi Febriadi',
//     umur: 25,
//     email: 'randifebriadi@gmail.com'
// };

// const {nama, umur, email = 'email@default.com'} = mhs;
// console.log(email);

// Memberikan Default Value + assign ke variabel baru
// const mhs = {
//     nama: 'Randi Febriadi',
//     umur: 25,
//     email: 'randifebriadi@gmail.com'
// };

// const {nama: n, umur: u, email: e = 'email@default.com'} = mhs;
// console.log(e);

// Rest Parameter
// const mhs = {
//     nama: 'Randi Febriadi',
//     umur: 25,
//     email: 'randifebriadi@gmail.com'
// };

// const {nama, ...value} = mhs;
// console.log(value);

// Mengambil field pada object, setelah dikirim sebagai parameter untuk function
const mhs = {
    id: 123,
    nama: 'Randi Febriadi',
    umur: 25,
    email: 'randifebriadi@gmail.com'
};

function getIdMhs({id, nama}) {
    return id + ' ' + nama;
}

console.log(getIdMhs(mhs));