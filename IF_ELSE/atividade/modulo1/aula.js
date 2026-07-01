const prompt = require ('prompt-sync') ();

let distânciaPercorrida = (prompt ("dijite a quantidade de km"))
let quantidadeDeCombustívelConsumido = (prompt ("dijite a quantidade de combustivel usado"))

let litros = (distânciaPercorrida * quantidadeDeCombustívelConsumido)

if ( litros <10 ) {
     console.log ("Alerta: Veículo consumindo muito combustível. Necessário agendar revisão mecânica.")
}else {
    console.log ("Consumo dentro do padrão operacional.")
}