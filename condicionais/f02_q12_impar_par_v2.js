const prompt = require('prompt-sync')()

function main(){
    console.log('***** Impar ou Par *****')

    const numero = Number(prompt('Número: '))

    if (eh_par(numero)){
        console.log(`O número ${numero} é PAR`)
    }else{
        console.log(`O número ${numero} é ÍMPAR`)
    }
}

function eh_par(valor){
    if (valor % 2 === 0){
        return true
    }else{
        return false
    }
}

function eh_impar(valor){
    return !eh_par(valor)
}

main()