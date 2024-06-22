// function init() {
//     return function(nama) {
//         console.log(nama);
//     }
// }
// let panggilNama = init();
// panggilNama('Randi');
// panggilNama('Febriadi');

// function ucapkanSalam(waktu) {
//     return function(nama) {
//         console.log(`Halo ${nama}, selamat ${waktu}, semoga harimu menyenangkan!`);
//     }
// }

// let selamatPagi = ucapkanSalam('Pagi');
// let selamatSiang = ucapkanSalam('Siang');
// let selamatMalam = ucapkanSalam('Malam');

// console.dir(selamatMalam('Randif'));

// selamatPagi('Randi');
// selamatMalam('Febriadi');

let add = (function() {
    let counter = 0;
    return function() {
    return ++counter;
}
})();

counter = 10;
counter = 100;

console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());