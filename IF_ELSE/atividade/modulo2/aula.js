const prompt = require ('prompt-sync') ();

let salarioliquido = parseInt (prompt ("Qual é o seu salarioliquido ?"))

let valorparcela  = parseInt (prompt ("Qual é o valor da parcela"))

let restrição = prompt ("O cliente possui restrição no nome? (sim/nao)")

if ( valorparcela >30 ) {
    console.log ("Crédito Aprovado!")
} else {
    console.log ("Crédito Negado: Parcela acima do limite ou restrição no CPF")
}
 

    

    


