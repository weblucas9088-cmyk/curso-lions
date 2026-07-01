const prompt = require ('prompt-sync') ();

let lista_numeros = [123, 309, 836, 321, 365, 918];

for (let i = 0; i < lista_numeros.length; i++) {
    console.log(lista_numeros[i]);
}
console.log ("O menor número é: " + Math.min(...lista_numeros));