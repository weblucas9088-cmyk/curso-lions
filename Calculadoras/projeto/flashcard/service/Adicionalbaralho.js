import PromptSync from "prompt-sync";
import baralho from "../dados/baralho.js";
const prompt = PromptSync();


function AdicionalAbaralho() {
    let novoBaralho = {
         id : baralho.length + 1,
        titulo : prompt ("Digite o título do baralho: ")
    }
    baralho.push(novoBaralho) 
    
}

export default AdicionalAbaralho;