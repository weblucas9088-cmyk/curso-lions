const prompt = require ('prompt-sync') ();

let custo = parseFloat(prompt("qual é o custo de producao"))
let venda = parseFloat(prompt("qual é o valor de venda desse mesmo lote"))

let lucro = venda - custo

console.log (` lucro, ${lucro}`)

if (lucro >500) {
    console.log ("margem de lucro saudavel:" + lucro)

} else {
    console.log (" Margem de lucro perigosamente baixa ")
}



    
