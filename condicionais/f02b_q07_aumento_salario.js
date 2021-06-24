const prompt = require('prompt-sync')()

function main(){
    const salario_atual = Number(prompt('Salário atual:'))

    const percentual = calcular_percentual_aumento(salario_atual)

    const aumento = salario_atual * (percentual/100)
    const novo_salario = salario_atual + aumento

    console.log('Salário Original R$', salario_atual.toFixed(2))
    console.log('Percentual aumento (%)', percentual)
    console.log('Aumento R$', aumento.toFixed(2))
    console.log('Novo Salário', novo_salario.toFixed(2))
}

function calcular_percentual_aumento(valor){
    if (valor <= 280){
        return 20
    }else if (valor <= 700){
        return 15
    }else if (valor <= 1500){
        return 10
    }else{
        return 5
    }
}

main()