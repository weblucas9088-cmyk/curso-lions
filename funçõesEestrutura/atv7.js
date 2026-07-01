const prompt = require ('prompt-sync') ();

const Casa_canbio = (total, moeda) => {

switch (moeda) {
    case 1:
        let totalDolar = total / 5
        console.log(`A moeda foi convertida com sucesso ! BRL ${totalDolar.toFixed(2)}`);
        break;
    case 2:
        let totalEuro = total / 6
        console.log(` A moeda foi convertida com sucesso! EUR ${totalEuro.toFixed(2)}`);
        break;
    case 3:
        let totalLibra = total / 7
        console.log(`A moeda foi convertida com sucesso! GBP ${totalLibra.toFixed(2)}`);
        break;
    default:
        console.log(" Opção inválida! ");
        break;
}
}

let totalReais = Number (prompt(" Quntos reais vc deseja converter?: " ));

    let moeda = parseInt(prompt(" Para qual moeda vc deseja converter? 1- Dolar, 2- Euro, 3- Libra: "));
    Casa_canbio (totalReais, moeda)



