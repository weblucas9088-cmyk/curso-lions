const prompt = require('prompt-sync') ();

let pressao = parseFloat(prompt(" digite o primeiro valor: "))
let temperatura = parseFloat(prompt(" dijite o segundo valor: "))
let gasolina = parseFloat(prompt(" digite o terceiro valor: "))

let turbina = {}
turbina.lado = ("esquerda")
turbina.status = ("desligado")

turbina.lista = [temperatura, pressao, gasolina]

if (pressao >50 && temperatura >20 && temperatura <90 && gasolina >20) {
    turbina.status = ("ligado")
}else {
    turbina.status = ("falha critica")
    turbina.bloqueioAtivado = true
}
console.log (turbina)