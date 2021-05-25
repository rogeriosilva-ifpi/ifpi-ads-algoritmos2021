const prompt = require('prompt-sync')()

function main(){
    console.log('***** Impar ou Par *****')

    const numero = Number(prompt('Número: '))

    if (eh_impar(numero)){
        console.log(`O número ${numero} é ÍMPAR`)
    }else{
        console.log(`O número ${numero} é PAR`)
    }
}

function eh_par(valor){
    return valor % 2 === 0
}

function eh_impar(valor){
    return !eh_par(valor)
}

main()