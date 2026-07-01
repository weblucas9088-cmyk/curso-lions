const prompt = require ('prompt-sync') ();

let comprasOlline = {};

comprasOlline = {
    nomecliente:prompt("qual é o seu nome"),
    assinatura: prompt("qual é o tipo da sua assinatura (prime/padrao)" ),
    itensEscolhidos : []
}

comprasOlline.itensEscolhidos [0] = parseFloat(prompt ("qual é o preco do primeiro iten"))
comprasOlline.itensEscolhidos [1] = parseFloat(prompt ("qual é o preco do segundo iten"))
comprasOlline.itensEscolhidos [2] = parseFloat(prompt ("qual é o preco do terceiro iten"))

let listaDoCarrinho = (comprasOlline.itensEscolhidos [0] + comprasOlline.itensEscolhidos [1] + comprasOlline.itensEscolhidos [2])

if (listaDoCarrinho >200.00 || comprasOlline.assinatura == "prime" ) {
    console.log ("Frete Gratis")
    comprasOlline.selo = true

}else {
    comprasOlline.selo = false
    listaDoCarrinho = listaDoCarrinho + 30

}

console.log (` ${listaDoCarrinho} é o total da sua compra `)
console.log (comprasOlline)