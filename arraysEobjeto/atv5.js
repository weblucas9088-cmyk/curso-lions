const prompt = require ('prompt-sync') ();

let estacao ={}; 
 
estacao = {
    id: "sensor 0",
    local: "laboratorio",
    temperatura: []
}
    
 estacao.temperatura [0] = parseFloat (prompt("qual é a valor da primeira temperatura da manha"))
 estacao.temperatura [1] = parseFloat (prompt("qual é a valor da segunda temperatura da tarde"))
estacao.temperatura [2] = parseFloat (prompt("qual é o valor da terceira temperatura da noite"))

let media = (estacao.temperatura [0] + estacao.temperatura [1] + estacao.temperatura[2]) / 3

if (media >35 ){
    estacao.alerta = true
    console.log (`PERIGO: Média de temperatura extrema ${media} graus detectada no ${estacao.local}!`);

} else {
    estacao.alerta = false
    console.log ("Temperaturas dentro da normalidade.");
}

console.log (estacao)