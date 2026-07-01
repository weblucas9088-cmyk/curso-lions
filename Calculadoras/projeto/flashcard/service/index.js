
import PromptSync from "prompt-sync";
const prompt = PromptSync();

import listaBaralho from "./listaBaralho.js";
import listaFlashcard from "./listaFlashcard.js";
import listaPbaralho from "./listaPbaralho.js";
import AdicionalAbaralho from "./Adicionalbaralho.js";
import Adicionalflashcard from "./Adicionalflashcard.js";


function menu_de_interacao() {
    console.log ( "n------ Menu de Interação ---" )
    console.log ( " 1 - adicional baralho (CREATE) " )
    console.log ( " 2 - adicional flashcard (CREATE) " )
    console.log ( " 3 - listar baralhos (READ) " )
    console.log ( " 4 - listar flashcard (READ) " )
    console.log ( " 5 - listar por baralho (READ)" )
    console.log ( " 6 - atualizar baralho (UPDATE) " )
    console.log ( " 7 - atualizar flashcard (UPDATE) " )    
    console.log ( " 8 - deletar baralho (DELETE) " )
    console.log ( " 9 - deletar flashcard (DELETE) " )
    console.log ( " 10 - buscar por pengunta (READ) " )
    console.log ( " 11 - buscar por baralho (READ) " )
    console.log ( " 12 - sair " )
}

let opcao = 0

while (opcao != "12") {
    menu_de_interacao ()
    opcao = prompt ( "Digite a opção desejada: " )

    switch (opcao) {
        case "1":
        AdicionalAbaralho()

            break;
        case "2":
        Adicionalflashcard()

            break;
        case "3":
        listaBaralho()

            break
        case "4":   
        listaFlashcard() 

            break;
        case "5":

        listaPbaralho()
            break;
        case "6":
        
            break;
        case "7":

            break;
        case "8":

            break;
        case "9":

            break;
        case "10":

            break;
        case "11":

            break;
        case "12":

            break;
            
        default:
            
            break;
            
    }
}
