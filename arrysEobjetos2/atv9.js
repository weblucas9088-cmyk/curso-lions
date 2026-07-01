const prompt = require('prompt-sync') ();


let registroDeleitura = {}
registroDeleitura.nome = prompt(" qual é o seu nome?: ")
registroDeleitura.pontosDeLeitura = 10


let historicoDias = [
    objeto1 = {
    data : "08/09/2011",
    paginasLidas: 10
},
objeto2 = {
    data : "09/07/2020",
    paginasLidas : 5
},
]
let objeto3 = {
    data : prompt(" que dia voce leu?: "),
    paginasLidas : parseInt(prompt(" quantas paginas voce leu?: "))
}

if (objeto3.paginasLidas >50 && registroDeleitura.pontosDeLeitura*2 ) {
    objeto3.data = objeto3.data + " - Super Leitor! "
}else {
    objeto3.paginasLidas < 10 - registroDeleitura.pontosDeLeitura
}

historicoDias [2] = objeto3 

console.log (historicoDias)