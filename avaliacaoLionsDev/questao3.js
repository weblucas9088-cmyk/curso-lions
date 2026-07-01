const prompt = require ('prompt-sync') ();

let lista_numeros = [900, 340, 290, 750, 394, 100, 210];

for (let i = 0; i < lista_numeros.length; i++) {
    console.log(lista_numeros[i]);
}
console.log ("O menor número é: " + Math.min(...lista_numeros));

