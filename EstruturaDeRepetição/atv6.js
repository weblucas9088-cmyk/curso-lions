const prompt = require ('prompt-sync') ();

let total = [0, 0, 0]

let valor = 0 

let carrinhos = [

    { cliente: "Lucas", produtos: [50.0, 120.5, 15.0] },
    { cliente: "Pedro", produtos: [200.0, 45.9] },
    { cliente: "Leosir", produtos: [10.0, 5.5, 32.0, 8.0] }
];

carrinhos.forEach((carrinhos,index) => {
    for (let j = 0; j <carrinhos.produtos.length; j++) {
         valor = valor + total [index] + carrinhos.produtos [j]
} 
   
});
console.log (valor)

for (let i = 0; i < carrinhos.length; i++) {
    for (let j = 0; j < carrinhos[i].produtos.length; j++) {
        total[i] += carrinhos[i].produtos[j];
    }
}

for (let i = 0; i < total.length; i++) {
    let restante = total[i];

    do {
        let pagamento = parseFloat(prompt(`Cliente ${carrinhos[i].cliente} deve ${restante}. Quanto deseja pagar? `));
        restante -= pagamento;
    } while (restante > 0);

    if (restante < 0) {
        console.log(`Troco para ${carrinhos[i].cliente}: ${-restante}`);
    }
}
    

console.table (carrinhos)
console.table (total)
console.log (valor)
