const prompt = require ('prompt-sync') ();

let distancia =parseInt(prompt( "qual a distancia kilometro" ))

let cliente =parseInt (prompt ( " A entrega e considerada de risco ou urgente (sim/nao) "))

let taxafixa =parseFloat (prompt(20.00))

let frete =parseFloat (prompt (taxafixa+1.50*distancia))


if (distancia >100 || cliente== 'sim') {
    console.log (` taxa de R$15.00 aplicada: ${frete+15.00} `)
}else {
    console.log (` valor final ficou como ${frete}`)
}
