const prompt = require('prompt-sync')();

let login = "lucas08092011"
let tentativas = 5

do {
    login = (prompt("Digite o login: "))
    if (login === "lucas08092011") {
        console.log("Login bem-sucedido!");
        break;
    } else {
        tentativas--;
        console.log(`Login incorreto. Você tem ${tentativas} tentativas restantes.`);
    }if (tentativas === 0) {
        console.log("Conta broqueada");
        break;
    }
}while (tentativas != login)

console.log (tentativas)