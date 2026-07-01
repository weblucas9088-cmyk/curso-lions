const prompt = require ('prompt-sync') ();

let RH = parseInt (prompt("valor ganho por hora normal"))

let horaextra = parseInt (prompt("quantas horas extras você fez este mes"))

let normalCLT = (RH*1.5*horaextra)

console.log (` valor a receber de horas extras este mes e ${normalCLT}`)