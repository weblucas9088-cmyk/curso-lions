function adicional_contato (contato, novo_contato) {
    let emailExiste = false
    for (let i = 0; i < contato.length; i++) {
        if (contato[i].email === novo_contato.email) {
            emailExiste = true
            break
        }
    }


if (emailExiste) {
    console.log( " Erro: este e-mail já está cadastrado." )
    return
}

if (contato.length > 0 ) {
    let ultimoContato = contato[contato.length - 1]
    novo_contato.id = ultimoContato.id + 1
}else {
    novo_contato.id = 1
}

contato.push (novo_contato)
      return
}

export default adicional_contato