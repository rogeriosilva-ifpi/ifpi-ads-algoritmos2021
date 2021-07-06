const { contem_repetidos } = require('./vetor_utils')

const prompt = require('prompt-sync')()

function main(){
    const n = Number(prompt('Quantos elementos: '))

    const vetor_a = Array(n)

    for (let i = 0; i < n; i++){
        vetor_a[i] = Number(prompt(`Elemento ${i}: `))
    }

    if (contem_repetidos(vetor_a)){
        console.log('Há elementos repetidos')
    }else{
        console.log('Não há elementos repetidos')
    }

}



main()