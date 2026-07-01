import flashcards from "../dados/flashcard.js";
import baralho from "../dados/baralho.js";

import PromptSync from "prompt-sync";
const prompt = PromptSync();

function listaPbaralho() {
    if (flashcards == baralho) {
        console.log(" Lista de flashcards do baralho: ");
        for (let i = 0; i < flashcards.length; i++) {
            console.log(`Flashcard ${i + 1}: ${flashcards[i].pergunta}`);
        }
    }

}
export default listaPbaralho;