// 2.1 EXECUTION CONTEXT, HOISTING & SCOPE

// var nama = 'Randi';
// console.log(nama);

// creation phase pada Global Context
// nama var = undefined
// nama function = fn()
// hoisting
// window = global object
// this = window

// execution phase

// console.log(SayHello());

// var nama = 'Randi';
// var umur = 25;

// function SayHello() {
//     return `Halo, nama saya ${nama}, umur ${umur} tahun`;
// }

// function membuat local Execution Context
// yang di dalamnya terdapat creation dan execution phase
// window
// arguments
// hoisting

// var nama = 'Randi Febriadi';
// var username = '@randi_febriadi1';

// function cetakURL(username) {
//     var instagramURL = 'http://instagram.com/';
//     return instagramURL + username;
// }

// console.log(cetakURL(username));

// function a() {
//     console.log('ini a');

//     function b() {
//         console.log('ini b');

//         function c() {
//             console.log('ini c');
//         }
//         c();
//     }
//     b();
// }

// a();

function satu() {
    var nama = 'Randi';
    console.log(nama);
}

function dua() {
    console.log(nama);
}

console.log(nama);
var nama = 'Tasya';
satu();
dua('Rumzi');
console.log(nama);