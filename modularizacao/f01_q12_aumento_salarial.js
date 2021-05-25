const prompt = require('prompt-sync')()


function main(){
    console.log('### Aumento Salarial ####')

    // entrada
    // const entrada = prompt('Salário Atual (R$): ')
    const salario_atual = Number(prompt('Salário Atual (R$): '))
    const aumento_percentual = Number(prompt('Aumento (%): '))

    // processamento
    const aumento = calcular_percentual(salario_atual, aumento_percentual)
    const salario_novo = salario_atual + aumento

    const desconto_previdencia = calcular_percentual(salario_novo, 11)

    // saída
    console.log('Novo salário R$: ', salario_novo.toFixed(2))
    console.log('Seu desconto da previdencia agora é R$', desconto_previdencia.toFixed(2))
}

function calcular_percentual(valor, percentual){
    const incremento = valor * (percentual/100)
    return incremento
}

main()