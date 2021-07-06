function contem_repetidos(vetor){
    let elemento
    let contador
    for (let i = 0; i < vetor.length; i++){
        elemento = vetor[i]
        contador = contar_elemento(vetor, elemento)

        if (contador > 1){
            return true
        }
    }

    return false
}

function contar_elemento(vetor, elemento){
    let contador = 0
    for (let i = 0; i < vetor.length; i++){
        if (elemento === vetor[i]){
            contador++
        }
    }

    return contador
}

module.exports = {
    contem_repetidos
}