import promptSync from "prompt-sync"
const prompt = promptSync()

function adicional(lista) {
    let adicionar = parseFloat (prompt(" Qual número você quer adicional na lista?: "))

    if (!isNaN (adicionar) ){
         lista.push (adicionar) 
    }else {
        console.log (" Digite um número não letra: ")
    }
}

export default adicional
