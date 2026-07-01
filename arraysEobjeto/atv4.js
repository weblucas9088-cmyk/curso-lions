const prompt = require ('prompt-sync') ();

let filaProjetos = []

let objeto = {}
filaProjetos[0] = objeto
objeto.EmpresaCriente = prompt ("dijete o nome de uma empresa:")
objeto.valor = parseFloat (prompt("dijite o valor ganho em reais"))

let pengunta0 = prompt (("O projeto possui prazo de entrega urgente? (sim/nao)"))

if (pengunta0 == "sim" && objeto.valor >3000) {
    filaProjetos[0].valor = filaProjetos[0].valor*1.15
}
console.log(filaProjetos[0])


