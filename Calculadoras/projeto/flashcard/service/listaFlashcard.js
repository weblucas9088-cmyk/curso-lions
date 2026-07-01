import baralho from "../dados/baralho.js";
import flashcard from "../dados/flashcard.js";

function listaFlashcard() {

if (flashcard.length === 0) {
    console.log ( "Nenhum flashcard disponível." )
    return;
}
        console.log ( "Flashcards disponíveis:" )
        flashcard.forEach (flashcard => {
            console.log ( `ID: ${flashcard.id}, Pergunta: ${flashcard.pergunta}, Resposta: ${flashcard.resposta},` )
        })  
    } 

 


 export default listaFlashcard;