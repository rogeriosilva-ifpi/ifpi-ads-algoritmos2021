const prompt = require('prompt-sync')()

function obterTexto(descricao){
    return prompt(descricao)
}

function obterNumero(descricao){
    return Number(obterTexto(descricao))
}

function obterInteiro(descricao){
    return Math.trunc(obterNumero(descricao))
}

function obterInteiroPositivo(descricao){
    let numero = obterInteiro(descricao)

    while (numero < 1){
        numero = obterInteiro('Valor inválido,' + descricao)
    }

    return numero
}
// CommonJS
module.exports = {
    obterTexto, obterNumero, obterInteiro, obterInteiroPositivo
}