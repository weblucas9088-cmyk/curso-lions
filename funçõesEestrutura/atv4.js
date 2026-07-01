const prompt = require ('prompt-sync') ();

let media = 0
let avaliarTemperaturas = [
    temperatura1 = parseFloat (prompt ('Digite a temperatura 1: ')),
    temperatura2 = parseFloat (prompt ('Digite a temperatura 2: ')),
    temperatura3 = parseFloat (prompt ('Digite a temperatura 3: ')),
]

function calcularMedia (temperaturas) {
    let soma = 0;
    for (let i = 0; i < temperaturas.length; i++) {
        soma += temperaturas[i];
    }
    return (soma / temperaturas.length);
}

media = calcularMedia (avaliarTemperaturas)

if (media > 30) {
    console.log (" Alerta de calor! A média das temperaturas é: " + media.toFixed(2))

}else {
    console.log (" Clima estavél A média das temperaturas é: " + media.toFixed(2))

}


console.table (avaliarTemperaturas)