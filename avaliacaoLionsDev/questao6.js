const prompt = require ('prompt-sync') ();

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numeros_pares = 0;
let resultado = 0

for (let v = 0; v < numeros.length; v++) {
    if (numeros[v] % 2!== 0) {
        numeros_pares ++;
    }

if (typeof numeros === "number") {
    resultado = somar (resultado, numeros_pares)
    module.exports = somar
}else {

}
}
console.log (resultado)
console.log (`O resuldado dos números pares é ${numeros_pares}`)


//Não consegui somar só os pares 