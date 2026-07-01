import promptSync from "prompt-sync"
const prompt = promptSync()

function remover (lista) {
    let remover = (prompt(" Qual número você quer remover?: "))

    if (!isNaN (remover)) {
        lista.pop (remover)
    }else {
        console.log (" Digite um número não uma letra: ")
    }
}

export default remover