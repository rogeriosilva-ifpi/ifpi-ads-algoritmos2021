const prompt = require('prompt-sync')()

function main(){
    console.log('***** Impar ou Par *****')

    const numero = Number(prompt('Número: '))

    if (numero % 2 === 0){
        console.log(`O número ${numero} é PAR`)
    }else{
        console.log(`O número ${numero} é ÍMPAR`)
    }
}

main()