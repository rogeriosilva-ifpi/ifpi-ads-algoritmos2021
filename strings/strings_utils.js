
function codigoASCII(caractere){
    return caractere.charCodeAt(0)
}

function deASCIIparaCaractere(codigo){
    return String.fromCharCode(codigo)
}

function deslocarNaTabelaASCII(caractere, pos){
    const codigo = codigoASCII(caractere)
    const novo_codigo = codigo + pos
    const novo_caractere = deASCIIparaCaractere(novo_codigo)

    return novo_caractere
}

function eh_letra(caractere){
    const codigo = codigoASCII(caractere)

    return ((codigo >= 65 && codigo <= 90) || (codigo >= 97 && codigo <= 122))
       
}

function inverter_texto(texto){
    let nova_mensagem = ''
    for (let i = texto.length - 1; i >= 0; i--){
        nova_mensagem += texto[i]
    }

    return nova_mensagem
}

module.exports = {
    eh_letra, deslocarNaTabelaASCII, inverter_texto
}