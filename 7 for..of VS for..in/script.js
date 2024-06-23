// for..of
// const mhs = ['Randi', 'Tasya', 'Rumzi'];
// let mhsf='';
// for (let i = 0; i < mhs.length; i++) {
//     if (mhs.length - i == 2) {
//         mhsf += mhs[i]+' dan ';
//     } else {
//         mhsf += mhs[i]+' ';
//     }
// }
// console.log(mhsf);

// mhs.forEach(m => console.log(m));

// for(const m of mhs) {
//     console.log(m);
// }

// String
// const nama = 'Randi';
// for( const n of nama) {
//     console.log(n);
// }

// const mhs = ['Randi', 'Tasya', 'Rumzi'];
// mhs.forEach((m, i) => {
//     console.log(`${m} adalah mahasiswa ke-${i+1}`)
// });

// for(const [i, m] of mhs.entries()) {
//     console.log(`${m} adalah mahasiswa ke-${i+1}`)
// }

// Nodelist
// const nama = document.querySelectorAll('.nama');

// for( const n of nama) {
//         console.log(n.innerHTML);
// }

// arguments
// function jumlahkanAngka() {
//     let jumlah = 0;
//     for( const a of arguments ) {
//         jumlah += a;
//     }
//     return jumlah;

    // return Array.from(arguments).reduce((a, i) => a+i);
// }

// console.log(jumlahkanAngka(1, 2, 3, 4, 5));

// for..in
const mhs = {
    nama: 'Randi',
    umur: 25,
    email: 'randifebriadi@gmail.com'
}

for(m in mhs) {
    console.log(mhs[m]);
}