const prompt = require('prompt-sync') ();

let resposta1 = "sim"
let resposta2 = "nao"
let respostau = prompt (" voce gosta de cafe, sim ou nao ")

if (respostau ==resposta1) {
    console.log ('entao vou trazer um pra voce')
} else if (respostau ==resposta2) {
    console.log ("entao vou trazer um cha")
} else { 
    console.log (" nao entendi ")
}



