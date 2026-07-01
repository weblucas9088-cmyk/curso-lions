const prompt = require ('prompt-sync') ();

let carga;
let caixa = 0
let cargaTotal = 0

do{
    carga = parseFloat(prompt(" qual é o peso da caixa?: "))
    if (cargaTotal + carga <= 1000) {
        cargaTotal = cargaTotal + carga
        caixa ++
    }else {
        break
    }
}while (cargaTotal <= 1000)

console.log (" carga maxima atingida ")
console.log (cargaTotal)
console.log (caixa)
console.table