const prompt = require('prompt-sync') ();

let registro = {}
registro.nome = prompt(" qual é o seu nome? ")
registro.ValorPremium = 30

registro.quantidade = parseFloat(prompt(" quantos lanches voce vai querer? "))


registro.ingredientesExtras = []
registro.ingredientesExtras [0] = prompt(" qual o primeiro ingrediente extra: ")
registro.ingredientesExtras [1] = prompt(" qual o segundo ingrediente extra ")

registro.valorExtra = []
registro.valorExtra [0] = parseFloat(prompt(" O valor do seu primeiro ingrediente e: "))
registro.valorExtra [1] = parseFloat(prompt(" o valor do segundo igrediente e: "))

registro.total = (registro.ValorPremium + registro.valorExtra[0] + registro.valorExtra[1] * registro.quantidade)

if (registro.quantidade >2) {
    registro.total = registro.total - (registro.total * 0.20)
    console.log (" disconto de 20% aplicado ")
}else {
    console.log (" compra realizada com sucesso! ")
}
console.log (registro)