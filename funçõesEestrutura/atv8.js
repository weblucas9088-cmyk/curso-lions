const prompt = require('prompt-sync')();

let servidor = {
    Espaco_total_GB: parseFloat(prompt('Digite o espaço total do servidor em GB: ')),
    Espaco_ocupado_GB: parseFloat(prompt('Digite o espaço ocupado do servidor em GB: '))
}

function calcularUso(ocupado, total) {
    let percentual = (ocupado / total) * 100;
    return percentual;
}

function Salvar(ocupado, total) {
    return ocupado <= total;
}

let uso = calcularUso(servidor.Espaco_ocupado_GB, servidor.Espaco_total_GB);
let status = Salvar(servidor.Espaco_ocupado_GB, servidor.Espaco_total_GB);

console.log(`Uso do servidor: ${uso.toFixed(2)}%`);

if (status) {
    console.log("Ainda há espaço disponível ");
} else {
    console.log("Servidor cheio ");
}