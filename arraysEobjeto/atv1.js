const prompt = require ('prompt-sync') ();

let listaAlunos = ["Lucas","Pedro"]

let usuario = prompt ( "dijite o nome do terceiro aluno que chegou ")

listaAlunos.push(usuario)

console.log (" os alunos de hoje sao "+ listaAlunos) 