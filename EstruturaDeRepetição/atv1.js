const prompt = require ('prompt-sync') ();

let cofre = 1908
let senha = 0

do{
senha = parseFloat(prompt(" digite a senha: "))
if (senha == cofre) {
    console.log (" Cofre liberado com sucesso ")
}else {
    console.log (" Acesso negado: Senha incorreta ")
}
}while(senha != cofre ) 