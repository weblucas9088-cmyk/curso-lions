const prompt = require('prompt-sync') ();

let resposta
let numero=prompt (' qual numero voce quer testar')

if (numero ==0) {
console.log ("0 numero que vc digitou é zero") 

} else if (numero % 2 ==0) {
    console.log ("numero que vc digidou é par")
} else {
    console.log ("numero que vc digitou é impar")
}