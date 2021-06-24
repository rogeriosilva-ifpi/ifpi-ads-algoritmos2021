const prompt = require('prompt-sync')()

/**
 * 1. Faça a criptografia de uma frase digitada pelo usuário. 
 * Na criptografia, a frase deverá ser invertida e as
 * consoantes deverão ser substituídas pelo caractere #.
 */
function main(){
    const frase = prompt('Frase: ')

    let frase_invertida = inverter_texto(frase)

    console.log(frase_invertida)
    
    const frase_final = substituir_consoantes_por(frase_invertida, '*')

    console.log(frase_final)
}

function substituir_consoantes_por(frase, substituto){
    let nova_frase = ''
    let caractere = ''
    for (let i = 0; i < frase.length; i++){
        caractere = frase[i]
        if (eh_consoante(caractere)){
            nova_frase = nova_frase + substituto
        }else{
            nova_frase = nova_frase + caractere
        }
    }
    return nova_frase
}

function inverter_texto(frase){
    let nova_frase = ''
    for (let i = frase.length - 1; i >= 0; i--){
        nova_frase = nova_frase + frase[i]
    }
    return nova_frase
}

function eh_consoante(caractere){
    if (eh_letra(caractere) && !eh_vogal(caractere)){
        return true
    }else{
        return false
    }
}

function eh_letra(caractere){
    const codigo = caractere.charCodeAt(0)
    if ((codigo >= 65 && codigo <= 90) || (codigo >= 97 && codigo <= 122)){
        return true
    }else{
        return false
    }
}

function eh_vogal(caractere){
    if (eh_letra(caractere)){
        const codigo = caractere.charCodeAt(0)
        if (codigo === 65 || codigo === 97 || codigo === 69 || codigo === 101 || codigo === 73 || codigo === 105 || codigo === 79 || codigo === 111 || codigo === 85 || codigo === 117){
            return true
        }else{
            return false
        }
    }else{
        return false
    }
}

main()