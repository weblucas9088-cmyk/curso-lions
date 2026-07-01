const prompt = require ('prompt-sync') ();

let sistema = {
valorItenCardapio : 0,
total : 0 
}
 

let cliente

do {
    sistema.valorItenCardapio = parseFloat(prompt (" qual é o valor do item?: "))
    sistema.total = sistema.total + sistema.valorItenCardapio
   cliente =  prompt(" deseja adicional algo a mais (sim/não)?: ")
} while (cliente == "sim");


console.log (sistema.total)



