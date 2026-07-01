const prompt = require ('prompt-sync') ();

let cotas = parseFloat (prompt("quantidade de cota "))
let  redimento = parseFloat (prompt("qual foi redimento do mes "))

let ValorRecebido = (cotas * redimento)

console.log (` valorRecebido, ${ ValorRecebido }`)

if (ValorRecebido >100) {
    console.log (` voce ja tem saldo o suficiente reinvestir: ${ ValorRecebido }`)
}else {
    console.log ("acumule mais para reinvestir")
}

   