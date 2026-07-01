function subtrair (resultado, numero2) {
    if (resultado == 0) {
        let numeroNegativo = parseFloat (prompt(" digite quanto você quer diminuir ")) 

    return numero2 - numeroNegativo
}else {
    return resultado - numero2
}
}

module.exports = subtrair