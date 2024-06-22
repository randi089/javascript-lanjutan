function init() {
    let nama = 'Randi';
    function tampilNama() {
        console.log(nama);
    }
    return tampilNama;
}
let panggilNama = init();
panggilNama();