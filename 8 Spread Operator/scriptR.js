// Rest Parameter

// contoh kasus 1
// function myFunc() {
    // return `a = ${a}, b = ${b}, myArgs = ${myArgs}`;
    // return myArgs;
    // return Array.from(arguments);
    // return [...arguments];
// }

// console.log(myFunc(1, 2, 3, 4, 5));

// contoh kasus 2
// function jumlahkan(...angka) {
// let total = 0;
// for(const a of angka) {
//     total += a;
// }
// return total;

// return angka.reduce((a, i) => a+i);
// }

// console.log(jumlahkan(1, 2, 3, 4, 5));

// contoh kasus 3
// array destructuring
// const kelompok1 = ['Randi', 'Rumzi', 'Tasya', 'Rinaldi', 'Fatwa'];
// const [ketua, wakil, ...anggota] = kelompok1;
// console.log(anggota);

// contoh kasus 4
// object destracturing
// const team = {
//     pm: 'Randi',
//     frontEnd1: 'Rumzi',
//     frontEnd2: 'Tasya',
//     backEnd: 'Rinaldi',
//     ux: 'Fatwa',
//     devOps: 'Fauzan'
// }

// const {pm, ...myTeam} = team;
// console.log(myTeam);

// contoh kasus 5
// filtering
function filterBy(type, ...values) {

    return values.filter(v => typeof v === type);

}

console.log(filterBy('boolean', 1, 2, 'Randi', false, 10, true, 'Tasya'));