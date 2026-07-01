const prompt = require ('prompt-sync') ();

let total = 0
let lista_precos = [100, 200, 300, 400, 500];

for (let i = 0 ; i < lista_precos.length; i++ ) {
    total = total + lista_precos [i]
}

let media = total /5 
console.log (` A media foi ${media}`)
