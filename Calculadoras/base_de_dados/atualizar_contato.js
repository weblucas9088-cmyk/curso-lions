function atualizar_contato(contato, id, novosDados) {
    const indice = contato.findIndex(contato => contato.id === id);

    if (indice === -1) {
        console.log(" Erro: Contato não encontrado! ");
        return false;
    }

    if (novosDados.email) {
        let emailEmUso = false
        for (let i = 0; i < contato.length; i++) {
           let contatoAtual = contato[i]
        
    if (contatoAtual.email === novosDados.email && contatoAtual.id !== id) {
        emailEmUso = true
        break;
} 
        }
    
if (emailEmUso) {
    console.log(" Erro: O e-mail já está em uso por outro usuario! ")
    return false
}
    }

contato[indice].nome = novosDados.nome || contato[indice].nome
contato[indice].email = novosDados.email || contato[indice].email

if (novosDados.telefones.length > 0) {
    contato[indice].telefones = novosDados.telefones
    }

    return true
}

export default atualizar_contato