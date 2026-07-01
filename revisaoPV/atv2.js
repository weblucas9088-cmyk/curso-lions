const prompt = require ('prompt-sync') ();

let lista = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let numeros_impar = 0;

for (let s = 0; s < lista.length; s++) {
    if (lista[s] % 2 !== 0 ) {
        numeros_impar ++;
    }
}
    console.table (` A quantidade de números impar é ${numeros_impar}`)
