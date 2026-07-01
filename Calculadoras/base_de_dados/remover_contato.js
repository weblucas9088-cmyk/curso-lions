function remover_contato(contato, id) {
    const indice = contato.findIndex(contato => contato.id === id);

    if (indice !== -1) {
        contato.splice (indice, 1)
    }
}

export default remover_contato;