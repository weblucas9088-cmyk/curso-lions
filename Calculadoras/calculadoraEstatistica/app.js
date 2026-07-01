import promptSync from "prompt-sync"
const prompt = promptSync()

import lista from "./lista.js"
import adicional from "./adicional.js"
import remover from "./remover.js"
import media from "./media.js"
import mediana from "./mediana.js"


let operacao = 0
let numeros = 0 
let amarzenar = 0

while (operacao != 5) {
    console.log (`Qual você deseja escolher?
[1] - adicional
[2] - remover
[3] - mediana
[4] - media
[5] - finalizar`)
operacao = parseInt (prompt("R: "))

switch (operacao) {
    case 1: 
        adicional (lista) 
        console.table
        break;

    case 2:
        remover (lista)
        console.table
        break;
        
    case 3:
       amarzenar = mediana (lista)
        console.table    
        console.log (` A mediana da sua conta foi ${amarzenar}`)
        break;
        
    case 4: media (lista)    
       console.table
        break;
    default:
}
}

console.table (lista)
