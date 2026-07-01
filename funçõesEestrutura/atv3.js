const prompt = require ("prompt-sync") ();

let compra = {
    nome : prompt(" Qual é o seu nome?: ")
}


let opcao = parseInt (prompt(" escolha uma dessas opções: Fone = 1, Teclado = 2 e Mouse = 3: "))

switch (opcao) {
    case 1:
        compra.nomeproduto = " Fone = 1 " 
        compra.precoFixo = 100
        break
    case 2:
        compra.nomeproduto = " Teclado = 2 "
        compra.precoFixo = 200
        break
    case 3:
        compra.nomeproduto = " Mouse = 3 "
        compra.precoFixo = 50
        break
    default:
        compra.nomeproduto = " Desconhecido"
        compra.precoFixo = 0
        break;

    
}
 
console.table (compra)
