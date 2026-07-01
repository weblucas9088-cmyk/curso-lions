const prompt = require ('prompt-sync') ();
let paciente = {}

paciente.nome = prompt  ("fale o nome do seu cachorro")
paciente.raça = prompt  ("qual a raca do seu cachorro")
paciente.idade = parseInt (prompt("qual a idade do cachorro"))

if (paciente.idade >= 8 ) {
 
 console.log (`O paciente ${paciente.nome} já é sênior e precisa de exames de rotina`)
    
}else {
    console.log ("Paciente na faixa de idade regular.")
}

console.log (paciente)