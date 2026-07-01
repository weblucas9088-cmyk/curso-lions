const prompt = require ('prompt-sync')();

let caixa_de_loja = [
    nome_do_operador = prompt ("Digite o nome do operador: "),
    saldo_inicial = 100,
]

let historico_de_transacoes = []

let registrar_venda = 0 
let registrar_despesa = 0

while (registrar_venda !=3) {
    console.log (` O que você deseja registrar?
    [1] - venda
    [2] - despesa
    [3] - finalizar `)
    registrar_venda = parseInt(prompt("R: "))

    switch (registrar_venda) {
        case 1:
            let valor_da_venda = parseFloat(prompt(" Qual o valor da venda? "))
            caixa_de_loja[1] += valor_da_venda
            historico_de_transacoes.push(`Venda de R$ ${valor_da_venda.toFixed(2)}`)
            break;

        case 2:
            let valor_da_despesa = parseFloat(prompt(" Qual o valor da despesa? "))
            caixa_de_loja[1] -= valor_da_despesa
            historico_de_transacoes.push(`Despesa de R$ ${valor_da_despesa.toFixed(2)}`)
            break;

        case 3:
            console.log (" Finalizando... ") 
            break;
       
default:

            console.log (" Opção inválida, tente novamente. ")
            break;
         
    }
}

console.log (` Operador: ${caixa_de_loja}`)
console.log (historico_de_transacoes)