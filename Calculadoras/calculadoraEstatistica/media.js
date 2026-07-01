import promptSync from "prompt-sync" 
const prompt = promptSync()

function media (lista) {
    let soma = 0
    for (let i = 0; i < lista.length; i++) {
        soma += lista[i]
    }
    let media = soma / lista.length
    console.log (` A média da sua conta foi ${media}`)

}   
export default media ;



