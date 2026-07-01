const prompt = require('prompt-sync')();

function triagemChamado(nivel) {
    switch (nivel) {
        case 1:
            return "Atendimento Básico";
        case 2:
            return "Equipe Especializada";
        case 3:
            return "Gestão de Crise";
        default:
            return "Criticidade inválida";
    }
}


let filaDeAtendimento = [];

let criticidade = parseInt(prompt("Digite a criticidade do problema (1, 2 ou 3): "));

let setor = triagemChamado(criticidade);


if (setor !== "Criticidade inválida") {
    filaDeAtendimento.push(setor);
} else {
    console.log("Valor inválido! Tente novamente.");
}


console.log("Fila de Atendimento:", filaDeAtendimento);
