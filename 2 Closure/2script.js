function init() {
    return function(nama) {
        console.log(nama);
    }
}
let panggilNama = init();
panggilNama('Randi');
panggilNama('Febriadi');