const prompt = require('prompt-sync')()

function main(){
    const num1 = Number(prompt('Número 1: '))
    const num2 = Number(prompt('Número 2: '))
    const num3 = Number(prompt('Número 3: '))
    const num4 = Number(prompt('Número 4: '))
    const num5 = Number(prompt('Número 5: '))

    let maior = num1
    let menor = num1

    if (num2 > maior){
        maior = num2
    }else if (num2 < menor){
        menor = num2
    }

    if (num3 > maior){
        maior = num3
    }else if (num3 < menor) {
        menor = num3
    }

    if (num4 < menor){
        menor = num4
    }else if(num4 > maior){
        maior = num4
    }

    if (num5 > maior){
        maior = num5
    }else if (num5 < menor){
        menor = num5
    }

    console.log('Menor valor: ', menor)
    console.log('Maior valor: ', maior)
}

main()
