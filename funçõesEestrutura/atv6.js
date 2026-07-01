const prompt = require('prompt-sync')();

let total = 0
let Pontuacao = [
    primeira_Partida = parseInt (prompt("Digite a pontuação da primeira partida: ")),
    segunda_Partida = parseInt (prompt("Digite a pontuação da segunda partida: ")),
    tenceira_Partida = parseInt (prompt("Digite a pontuação da tenceira partida: "))

]

if ( total > 200 || tenceira_Partida > 90 ) {
    console.log (" Veterano")
}else {
    console.log (" Iniciante")
}

Pontuacao = Pontuacao.reduce((total, pontuacao) => total + pontuacao, 0)

console.table (Pontuacao)