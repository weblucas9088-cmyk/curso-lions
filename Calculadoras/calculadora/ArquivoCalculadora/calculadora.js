const somar = require ("./somar.js")
const subtrair = require ("./subtrair.js")
const multiplicar = require ("./multiplicar.js")
const dividir = require ("./dividir.js")
const porcentagem = require ("./porcentagem.js")
const prompt = require ('prompt-sync') ();

let operacao = 0
let resultado = 0
let numero = 0


while ( operacao != 6) {
console.log (` Qual operação você deseja realizar?
[1] - somar
[2] - subtrair
[3] - multiplicar
[4] - dividir
[5] - porcentagem
[6] - finalizar`)
operacao = parseInt(prompt("R: "))




switch (operacao) {
    case 1:
        numero = parseFloat (prompt(" Qual número você deseja somar ao resultado "))
        if (typeof numero === "number") {
            resultado = somar (resultado, numero)
        }else {
            console.log (" Digite um número valido ")
        }
        console.log (resultado)
        break;

        case 2:
        numero = parseFloat (prompt(" Qual número você deseja subtrair ao resultado "))
        if (typeof numero === "number") {
            resultado = subtrair (resultado, numero)
        }else {
            console.log (" Digite um número valido ")
        }
        console.log (resultado)
        break;


        case 3:
            numero = parseFloat (prompt(" Qual número você deseja multiplicar ao resultado "))
            if (typeof numero === "number") {
                resultado = multiplicar (resultado, numero)
            }else {
                console.log (" Digite um número valido ")
            }
            console.log (resultado)
            break;


            case 4:
                numero = parseFloat (prompt(" Qual número você deseja dividir ao resultado "))
                if (typeof numero === "number") {
                    resultado = dividir (resultado, numero)
                }else {
                    console.log (" Digite um número valido ")
                }
                console.log (resultado)
                break;


                case 5:
                    numero = parseFloat (prompt(" Qual número você deseja fazer poncentagem ao resultado "))
                    if (typeof numero === "number") {
                        resultado = porcentagem (resultado, numero)
                    }else {
                        console.log (" Digite um número valido ")
                    }
                    console.log (resultado)
                    break;

        default:
            break;
}
}







