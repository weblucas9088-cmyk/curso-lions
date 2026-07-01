const prompt = require ('prompt-sync') ();

let vendas = parseFloat (prompt("qual é o valor total de vendas que você realizou no mes"))

if (20000.00 >= vendas ) {
    console.log (` sua comissão é de 5% sobre o valor total: ${vendas * 1.05}`) 
} else {
    console.log (` Calcule o valor da comissão ${vendas * 1.02}`)
}