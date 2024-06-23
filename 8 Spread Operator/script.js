// Spread Operator

// memecah iterables menjadi single element
// const mhs = ['Randi', 'Tasya', 'Rumzi'];
// console.log(...mhs[0]);

// Menggabungkan 2 array
// const mhs = ['Randi', 'Tasya', 'Rumzi'];
// const dosen = ['Rinaldi', 'Fatwa', 'Fauzan'];
// const orang = [...mhs, 'Tito', ...dosen];
// const orang = mhs.concat(dosen);
// console.log(orang);

// meng-copy array
// const mhs = ['Randi', 'Tasya', 'Rumzi'];
// const mhs1 = mhs;
// mhs1[0] = 'Taufiq';
// const mhs1 = [...mhs];
// mhs1[0] = 'Taufiq';
// console.log(mhs1);
// console.log(mhs);

// Contoh kasus menggunakan DOM
// menggunakan for
// const li = document.querySelectorAll('li');
// const mhs = [];
// for (let i = 0; i < li.length; i++) {
//     mhs.push(li[i].textContent);
// }
// console.log(mhs);

// menggunakan map
// const mhs = [...li].map(l => l.textContent);
// console.log(mhs);

// Contoh kasus membesarkan text per huruf
const nama = document.querySelector('.nama');
const huruf = [...nama.textContent].map(h => `<span>${h}</span>`).join('');
nama.innerHTML = huruf;