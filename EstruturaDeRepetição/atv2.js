const prompt = require('prompt-sync') ();

let calibragem = []
let temperatura = parseFloat (prompt(" qual é a temperatura atual?: ")) 

calibragem [0] = temperatura

for (let i =0; i < 4; i++) {
calibragem [i+1] = calibragem [i] +2

}

console.log (calibragem)