const prompt = require('prompt-sync')()

function main(){
    const angulo1 = Number(prompt('Angulo 1: '))
    const angulo2 = Number(prompt('Angulo 2: '))
    const angulo3 = Number(prompt('Angulo 3: '))

    if (eh_triangulo(angulo1, angulo2, angulo3)){
        console.log('É um triângulo')

        const tipo = tipo_triangulo(angulo1, angulo2, angulo3)
        console.log(tipo)
    }else{
        console.log('Não é um triângulo')
    }
}

function eh_triangulo(ang1, ang2, ang3){
    const soma = ang1 + ang2 + ang3

    return soma === 180
}

function tipo_triangulo(ang1, ang2, ang3){
    if (ang1 < 90 && ang2 < 90 && ang3 < 90) {
        return 'É Acutângulo'
    }else if (ang1 === 90 || ang2 === 90 || ang3 === 90){
        return 'É Retângulo'
    }else if (ang1 > 90 || ang2 > 90 || ang3 > 90){
        return 'É Obtusângulo'
    }
}

main()