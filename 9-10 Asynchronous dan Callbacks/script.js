// Callback
// Synchronous Callback
// function halo(nama) {
//     alert(`Halo, ${nama}`);
// }

// function tampilkanPesan(callback) {
//     const nama = prompt('Masukkan Nama : ');
//     callback(nama);
// }

// tampilkanPesan(nama => alert(`Halo, ${nama}`));

// Contoh 2
// const mhs = [
//     {
//         "nama": "Randi Febriadi",
//         "nobp": "18101152620064",
//         "email": "randifebriadi@gmail.com",
//         "jurusan": "Sistem Komputer",
//         "idDosenWali": 1
//     },
//     {
//         "nama": "Tasya Aryati Sakinah",
//         "nobp": "18101152620001",
//         "email": "tasyaaryati@gmail.com",
//         "jurusan": "Psikologi",
//         "idDosenWali": 2
//     },
//     {
//         "nama": "Rumzi Rahman",
//         "nobp": "18101152620011",
//         "email": "rumzirahman0@gmail.com",
//         "jurusan": "Teknik Elektro",
//         "idDosenWali": 2
//     }
// ];

// console.log('mulai');
// mhs.forEach(m => {
//     for(let i = 0; i < 10000000; i++) {
//         let date = new Date();
//     }
//     console.log(m.nama)
// });
// console.log('selesai');

// Asynchronous Callback
// function getDataMahasiswa(url, success, error) {
//     let xhr = new XMLHttpRequest();

//     xhr.onreadystatechange = function() {
//         if(xhr.readyState === 4) {
//             if(xhr.status === 200) {
//                 success(xhr.response);
//             } else if(xhr.status === 404) {
//                 error();
//             }
//         }
//     }
//     xhr.open('get', url);
//     xhr.send();
// }
// console.log('mulai');
// getDataMahasiswa('data/mahasiswa.json', result => {
//     const mhs = JSON.parse(result);
//     mhs.forEach(m => console.log(m.nama))
// }, () => {

// });
// console.log('selesai');

// JQuery
console.log('mulai');
$.ajax({
    url: 'data/mahasiswa.json',
    success: (mhs) => {
        mhs.forEach( m => console.log(m.nama));
    },
    error: (e) => {
        console.log(e.responseText);
    }
});
console.log('selesai');