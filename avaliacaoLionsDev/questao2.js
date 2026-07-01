const prompt = require ('prompt-sync') ();

let lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numeros_pares = 0;

for (let s = 0; s < lista.length; s++) {
    if (lista[s] % 2 !== 0 ) {
        numeros_pares ++;
    }
}
    console.table (` A quantidade de números pares é ${numeros_pares}`)
