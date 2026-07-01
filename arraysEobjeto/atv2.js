const prompt = require ('prompt-sync') ();

let estoqueTamanhos = [8, 15, 20]

let usuarioP = Number (prompt("quantas camisetas do tamanho P foram vendida hoje?"))

estoqueTamanhos[0]=(estoqueTamanhos[0] - usuarioP)

console.log ("O restante de camisetas foi de " + estoqueTamanhos[0])

if ( estoqueTamanhos[0]< 5 ) {
    console.log ("Estoquede luvas tamanho P está crítico!")
} else {
    console.log (`Estoque atualizado. Quantidade restante do tamanho P ${estoqueTamanhos}`)
}

