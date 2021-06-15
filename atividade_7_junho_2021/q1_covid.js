const prompt = require('prompt-sync')()

function main(){ 
    // Inicializações e Entrada
    const media_14dias = Number(prompt('Média 14 dias: '))
    const media_hoje = Number(prompt('Média hoje: '))

    // Processamento
    const variacao_numerica = media_hoje - media_14dias
    const variacao_percentual = (variacao_numerica / media_14dias) * 100
    const classificacao = classificar_variacao(variacao_percentual)

    // Saída
    console.log('**** COVID *****')
    console.log(`Variação Numérica: ${variacao_numerica}`)
    console.log(`Variação: ${variacao_percentual.toFixed(1)}%`)
    console.log(`Classificação: ${classificacao}`)
}

// Task 1
function classificar_variacao(variacao){   
    if (variacao > 15){
        return 'Em Alta'
    }else if (variacao < -15){
        return 'Em Baixa'
    }else{
        return 'Em Estabilidade'
    }
}

main()