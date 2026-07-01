const prompt = require ('prompt-sync') ();

let salarios = [2500, 3200, 4100, 5000, 6200] 

for (let i = 0; i < salarios.length; i++) {

    salarios [i] = (salarios [i] * 1.10).toFixed(2);
}
console.table (salarios)





