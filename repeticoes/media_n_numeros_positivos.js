const prompt = require('prompt-sync')()

function main() {
    //Estado anterior
    let numero = Number(prompt('Número: '))
    let somatorio = 0
    let quantidade = 0

    // Condição de continuidade
    while (numero >= 0){
        // Trabalho:
        somatorio = somatorio + numero
        quantidade = quantidade + 1

        // convergencia dos dados/estado
        numero = Number(prompt('Número: '))
    }

    // Média
    if (quantidade > 0){
        const media = somatorio / quantidade
        console.log(`Você digitou ${quantidade} números - média = ${media.toFixed(1)}`)
    }else{
        console.log('Você não digitou valores válidos')
    }

    console.log('Fim..')
}

main()