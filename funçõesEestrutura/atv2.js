const prompt = require ('prompt-sync') ();

let Validacao = {}

Validacao.nome = prompt(" qual é o seu nome?: ")
Validacao.codigo = parseFloat(prompt(" qual é o codigo do seu cracha?: "))

const oloko = (nome, codigo) =>{
    if (nome.length >5 && codigo > 1000) {
     return true   
    }else {
        return false
    }
}    

let acesso = oloko (Validacao.nome,Validacao.codigo)

if (acesso == true) {
    console.log (" acesso concedido ")
}else {
    console.log (" acesso negado ")
}
