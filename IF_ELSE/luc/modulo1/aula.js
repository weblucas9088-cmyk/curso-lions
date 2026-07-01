const prompt = require ('prompt-sync') ();

let criente = parseFloat (prompt(" qual a quantidade de horas estimadas "))
let pergunta1 = prompt ((" o criente é ONG ? (sim/nao ?"))

let total = criente * 45

 if (total > 5000 && pergunta1== "sim" ) {
    total = total * 0.9
    console.log ("valor final e" + total) 
 } else {
    console.log ("valor total sem desconto" + total)
 }
