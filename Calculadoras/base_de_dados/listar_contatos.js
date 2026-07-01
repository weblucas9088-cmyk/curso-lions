function listar_contatos (contato) {
    if (contato.length === 0) {
        console.log( "Nenhum contato cadastrado." )
        return
    }


contato.forEach(contato => {
    console.log(`\nID: ${contato.id}`);
    console.log(`\nNome: ${contato.nome}`);
    console.log(`\nEmail: ${contato.email}`);
    console.log(`\nTelefone: ${contato.telefones.join(" | ")}`);
    })
}

export default listar_contatos