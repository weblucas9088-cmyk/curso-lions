const prompt = require ('prompt-sync') ();

let NivelDoCargo = prompt(" qual é o seu nivel de cargo?: ")
let SálarioAtual = parseFloat (prompt(" qual oe o seu sálario atual?: "))


const EstruturaDeSeleção = (NivelDoCargo, SálarioAtual) =>{
    switch(NivelDoCargo){
        case "Estagiario":
            return SálarioAtual * 1.10
            break
        case "Junior":
            return  SálarioAtual * 1.15
        case "Pleno":
             return SálarioAtual * 1.20
            break
         default: 
            return SálarioAtual
            break
    }
}

SálarioAtual = EstruturaDeSeleção (NivelDoCargo, SálarioAtual)

console.log (SálarioAtual)
console.log (NivelDoCargo)




