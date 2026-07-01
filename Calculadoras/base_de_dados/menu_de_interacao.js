import PromptSync from "prompt-sync";
const prompt = PromptSync();

import contato from "./contato.js"
import listar_contatos from "./listar_contatos.js"
import adicional_contato from "./adicional_contato.js"
import remover_contato from "./remover_contato.js"
import atualizar_contato from "./atualizar_contato.js"

function menu_de_interacao() {
    console.log ( "n------ Menu de Interação ---" )
    console.log ( " 1 - Listar contatos (READ) " )
    console.log ( " 2 - Adicionar contato (CREATE) " )
    console.log ( " 3 - atualizar contato (UPDATE) " )
    console.log ( " 4 - Remover contato (DELETE) " )
    console.log ( " 5 - Sair " )
}

while (opcao != "5") {
    menu_de_interacao ()
    opcao = prompt ( "Digite a opção desejada: " )

    switch (opcao) {
    case '1': 
       listar_contatos (contato) 
    break;

    case '2':
        let telefones = []
        let nome = prompt ( "Nome: " )
        let email = prompt ( "Email: " )
    
        let addMais = "s"
        while (addMais.toLowerCase() === "s") {
            telefones.push (prompt(" Telefone: ") )
            addMais = prompt ( "Deseja adicionar mais um telefone? (s/n): " )
        }
        
        let novoContato = { nome, email, telefones }

        const adicionou = adicional_contato (contato, novoContato)
        if (adicionou) {
            console.log ( "Contato adicionado com sucesso!" )
        }
        break;

    case '3':
        let idAtualizar = parseInt ( prompt ( "Digite o ID do contato que deseja atualizar: " ) )

        let novosDados = {
            nome: prompt ( "Novo nome: " ),
            email: prompt ( "Novo email: " ),
            telefones: []
        }

        let atualizaTel = prompt ( "Deseja atualizar os telefones? (s/n): " )
        if (atualizaTel.toLowerCase () === 's' ) {
            let editMais = 's'
            while (editMais.toLowerCase() === 's') {
                novosDados.telefones.push ( prompt ( "Novo telefone: " ) )
                editMais = prompt ( "Deseja adicionar mais um telefone? (s/n): " )
            }
        }
        const atualizou = atualizar_contato (contato, idAtualizar, novosDados)

        if (atualizou) {
            console.log ( "Contato atualizado com sucesso!" )
        }
        break;

        case 4: 
        let idRemover = parseInt ( prompt ( "Digite o ID do contato que deseja remover: " ) )
        let confirmar = prompt ( "Tem certeza que deseja remover este contato? (s/n): " )

        if (confirmar.toLowerCase() === 's') {
           remover_contato (contato, idRemover)
           console.log ( "Contato removido com sucesso!" )
            }else {
                console.log ( "Remoção cancelada." )
            }
            break;

        case 5:
            console.log ( "Saindo do programa. Até mais!" )
            break;
        default:
            console.log ( "Opção inválida. Por favor, tente novamente." )
            break;
        }
}    
