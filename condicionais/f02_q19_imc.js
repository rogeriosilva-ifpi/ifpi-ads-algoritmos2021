const prompt = require('prompt-sync')()

function main(){
    const peso = Number(prompt('Peso (kg): '))
    const altura = Number(prompt('Altura (m): '))

    const imc = peso / (altura * altura)
    
    let categoria

    if (imc < 25){
        categoria = 'Peso normal.'
    }else if (imc <= 30){
        categoria = 'Obesidade'
    }else{
        categoria = 'Obesidade mórbida'
    }

    console.log('Seu IMC:', imc.toFixed(1))
    console.log('Categoria: ', categoria)
}

main()