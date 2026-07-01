const prompt = require ('prompt-sync') ();

let atual = parseFloat (prompt("Qual a quantidade de produto no estoque"))

let minima = parseFloat (prompt("E a quantidade de seguranca"))

let valorminimo = ( atual - minima ) * -1

if (atual < minima ) {
    console.log ( `Alerta: Estoque baixo! É necessário solicitar a compra de ${valorminimo} unidades ` )
}else {
    console.log ( "Estoque regularizado ")
}


