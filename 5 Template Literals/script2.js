// 1. HTML Fragments
// const mhs = {
//     nama: 'Randi Febriadi',
//     umur: 25,
//     nobp: 18101152620064,
//     email: 'randifebriadi@gmail.com'
// };

// const el = `<div class="mhs">
//     <h2>${mhs.nama}</h2>
//     <span class="nobp">${mhs.nobp}</span>
// </div>`;

// 2. Looping
// const mhs = [
//     {
//         nama: 'Randi Febriadi',
//         email: 'randifebriadi@gmail.com'
//     },
//     {
//         nama: 'Tasya Aryati Sakinah',
//         email: 'tasyaaryati@gmail.com'
//     },
//     {
//         nama: 'Rumzi Rahman',
//         email: 'rumzirahman0@gmail.com'
//     }
// ];

// const el = `<div class="mhs">
//     ${mhs.map(m => `<ul>
//             <li>${m.nama}</li>
//             <li>${m.email}</li>
//         </ul>`).join('')}
// </div>`;

// 3. Conditionals
// ternary
// const lagu = {
//     judul: 'Tetap Dalam Jiwa',
//     penyanyi: 'Isyana Sarasvati',
//     feat: 'Rayi Putra'
// }

// const el = `<div class="lagu">
//     <ul>
//         <li>${lagu.penyanyi}</li>
//         <li>${lagu.judul} ${lagu.feat ? `(feat. ${lagu.feat})` : ''}</li>
//     </ul>
// </div>`;

// 4. Nested
// HTML Fragment bersarang
const mhs = {
    nama: 'Randi Febriadi',
    semester: 5,
    mataKuliah: [
        'Pemograman C++',
        'Virtual Private Network',
        'Analisis Kontrol Sistem',
        'Pendidikan Karakter'
    ]
};

function cetakMataKuliah(mataKuliah) {
    return `
        <ol>
            ${mataKuliah.map(mk => `
                    <li>${mk}</li>
                `).join('')}
        </ol>
    `;
}

const el = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <span class="semester">${mhs.semester}</span>
    <h4>Mata Kuliah</h4>
    ${cetakMataKuliah(mhs.mataKuliah)}
</div>`;

document.body.innerHTML = el;