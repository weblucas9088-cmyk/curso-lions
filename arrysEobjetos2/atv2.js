const prompt = require ('prompt-sync') ();

let registros = {}

registros = {
    distanciaMaratona: [],
}

registros.nome = prompt("qual e o nome do atleta");
registros.peso = parseInt(prompt("qual é seu peso atual"));
registros.meta = prompt("qual e a sua meta (emagrecimento/performance)");


registros.distanciaMaratona [0] = parseFloat(prompt("qual foi a distancia percorrida na primeira maratona"))
registros.distanciaMaratona [1] = parseFloat(prompt("qual foi a distancia percorrida na segunda maratona"))
registros.distanciaMaratona [2] = parseFloat(prompt("qual foi a distancia percorrida na terceira maratona"))
registros.distanciaMaratona [3] = parseFloat(prompt("qual foi a distancia percorrida de hoje "))

let quilometragemMedia = (registros.distanciaMaratona [1] + registros.distanciaMaratona [2] + registros.distanciaMaratona [3])


if (quilometragemMedia >20 && registros.meta == "emagrecimento" ) {
    registros.peso --
    registros.selo = "meta Atingida"
}else if ( registros.meta = "performace" && registros.distanciaMaratona [3] > registros.distanciaMaratona [2] ) {
 registros.selo = "Novo recorde pessoal"
}else {
    registros.selo = "voce nao tem selo"
}

console.log (registros)
    


