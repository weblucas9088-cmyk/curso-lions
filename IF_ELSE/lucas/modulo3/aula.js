const prompt =require ('prompt-sync') ();

let nota1 = parseFloat(prompt("Qual a nota da primeira atividade"))

let nota2 = parseFloat(prompt("Qual a nota da segunda atividade"))

let media = (nota1 + nota2) /2

console.log (`media, ${media}`)