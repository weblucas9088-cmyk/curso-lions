const prompt = require('prompt-sync') ();

let imigratorio = {}

let ficha = {}
ficha.nome = prompt(" qual é o seu nome?: ")
ficha.nacionalidade = prompt(" qual o pais de origem?: ")
ficha.trabalho = prompt(" voce veio a trabalho?: ")

let passaporte = prompt(" o senhor trouxe passaporte?: ")
let visto = prompt(" o semhor tem o visto?: ")
let vacina = prompt(" o senhor ja esta vacinado?: ")

let documentos = [passaporte, visto, vacina]

if (ficha.trabalho == " sim ") {
    ficha.trabalho = true
}else {
    ficha.trabalho = false
}

if (ficha.nacionalidade != " Brasil ") {
    if (visto == " sim " && vacina == " sim ") {
    ficha.entradaPermitido = true
    }else {
        ficha.entradaPermitido = false
    } 
}else {
    if (passaporte == " sim ") {
        ficha.entradaPermitido = true
    }else {
        ficha.entradaPermitido = false
    }
}    
imigratorio.ficha = ficha
imigratorio.documentos = documentos

console.log (imigratorio)
