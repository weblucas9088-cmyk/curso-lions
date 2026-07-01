const prompt = require ('prompt-sync') ();


let codigo = 0

function atualizarEntrega(codigo) {

}

switch (codigo) {
    case "P":
        entrega.status = " Pendente de Envio "
        break
    case "E":
        entrega.status = " Em Rota de Entrega"
        break
    case  "C":
        entrega.status = " Cancelado "
        break
    default:
        break    
}

let entrega = {
    id: "37209587",
    status: ""
}

console.log (" Qual a código do status da entrega [P] - Pendente de Envio [E] - Em Rota de entrega [C] - Cancelado = Status invalido ");

let encomenda = {
    id : parseFloat (prompt (" Digite o ID da encomenda: ")),
    codigo : prompt (" Digite o código do status atual: "),
}

