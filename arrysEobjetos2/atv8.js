const prompt = require ('prompt-sync') ();


let ingressosVips = {}
ingressosVips.nomeEmpresa = prompt(" qual é o nome da empresa?: ")
ingressosVips.orçamentoTotal = parseFloat(prompt(" qual é o orçamento total da noite?: "))
ingressosVips.openBarFechado = false

let promotor = {}
promotor.nomeBebida1 = prompt(" qual é o nome da primeira bebida?: ")
promotor.nomeBebida2 = prompt(" qual é o nome da segunda bebida?: ")
promotor.valorBebida1 = parseFloat(prompt(" qual é o valor da primeira bebida?: "))
promotor.valorBebida2 = parseFloat(prompt(" qual é o valor da segunda bebida?: "))
promotor.valorTotal = promotor.valorBebida1 + promotor.valorBebida2 

ingressosVips.orçamentoTotal = ingressosVips.orçamentoTotal - promotor.valorTotal

if (ingressosVips.orçamentoTotal < 0 ) {
ingressosVips.openBarFechado = true 
ingressosVips.multaExcedente = 500

}
console.log (ingressosVips)
console.log (promotor)