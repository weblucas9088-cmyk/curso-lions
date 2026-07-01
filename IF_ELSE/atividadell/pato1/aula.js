const prompt = require ('prompt-sync') ();

let valororiginal = parseFloat (prompt( "valor original do condomínio " ))

let diasdeatraso = parseInt (prompt( "quantidade de dias de atraso " ))

let vencimento = prompt( "O vencimento original caiu em um feriado ou final de semana? (sim/nao) ")

if (diasdeatraso >= 1.00 && vencimento== "nao") {
    valororiginal = (valororiginal * 1.02) + diasdeatraso 
}
    console.log (`o valor total e ${valororiginal} `)

