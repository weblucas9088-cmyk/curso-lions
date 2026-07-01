const prompt = require ('prompt-sync') ();

let mentor1 = {
    nome: "Lucas",
    areaDeAtuacao: "engenharia de sofware"
}
let mentor2 = {
    nome: "Pedro",
    areaDeAtuacao: "psicologia"
}

let programa = {
    nomecoordenodaor : prompt( " qual é seu nome " ),
    limitevagas : parseInt(prompt( " qual é o limite de vagas " )),
    areaDosAlunos : prompt(" qual é a area dos alunos "),
    mentores : [mentor1,mentor2]
}
let mentor3 = {
    nome: prompt( " qual é o seu nome " ),
    areaDeAtuacao:prompt( " qual é a sua area de atuacao " )
}

let numeromentores = programa.mentores.length


if ( programa.limitevagas > numeromentores && mentor3.areaDeAtuacao == programa.areaDosAlunos ) {
    programa.mentores [2] = mentor3
    console.log (programa)
}else {
    programa.status = "bloqueado para inscrisoes"
    console.log (programa)
}








