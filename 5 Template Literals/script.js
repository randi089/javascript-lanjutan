// Template Literals / Template String
// const nama = 'Randi';
// const umur = 25;
// console.log(`Halo, nama saya ${nama}, dan saya ${umur} tahun.`);
// console.log('Halo, nama saya ' + nama + ', dan saya ' + umur + ' tahun.');

// Embedded Expressions
// console.log(`${1 + 1}`);
// console.log(`${alert('halo!')}`);
// const x = 11;
// console.log(`${(x % 2 == 0) ? 'genap' : 'ganjil'}`);

// HTML Fragments
const mhs = {
    nama: 'Randi Febriadi',
    umur: 25,
    nobp: 18101152620064,
    email: 'randifebriadi@gmail.com'
};

const el = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <span class="nobp">${mhs.nobp}</span>
</div>`;

console.log(el);