const prompt = require('prompt-sync')()

function main(){
    const numero = Number(prompt('Número: '))

    let resultado = numero / 2
    let contador = 1

    while (resultado >= 1){
        resultado = resultado / 2
        contador++
    }

    console.log('Último resultado', resultado)
    console.log('Qtd divisões:', contador)
}

main()