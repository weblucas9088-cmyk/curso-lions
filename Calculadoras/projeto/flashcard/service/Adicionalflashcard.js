import PromptSync from "prompt-sync";
import flashcard from "../dados/flashcard.js";
const prompt = PromptSync();

function Adicionalflashcard() {

    let novoflashcard = {
         id : flashcard.length + 1,
         pergunta : prompt (" Pergunta do flashcard: "  ),
         resposta : prompt (" Resposta do flashcard: "  ),
         idBaralho : prompt (" Id do baralho: "  ),
    }
     
    flashcard.push(novoflashcard) 
    
        console.log ( " Flashcard adicionado com sucesso! " )
    
}

export default Adicionalflashcard;