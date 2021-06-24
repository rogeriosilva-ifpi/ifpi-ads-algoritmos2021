const prompt = require('prompt-sync')({
    sigint: true
})

function main(){
    let prova = Number(prompt('Prova: '))
    let qtd_nadadores = Number(prompt('Nadadores: '))
    let pontos_a = 0
    let pontos_b = 0

    while (prova !== 0 || qtd_nadadores !== 0){
        for (let i = 1; i <= qtd_nadadores; i++){
            // Receber os dados de cada nadador
            console.log(`Nadador ${i}/${qtd_nadadores}:`)
            const nome = prompt('Nome: ')
            const classificacao = Number(prompt('Classificação: '))
            const tempo = Number(prompt('Tempo(s): '))
            const clube = prompt('Clube: ')

            const pontos = calcular_pontuacao(classificacao)
            
            if (clube === 'a'){
                pontos_a += pontos
            }else{
                pontos_b += pontos
            }
        }

        prova = Number(prompt('Prova: '))
        qtd_nadadores = Number(prompt('Nadadores: '))
    }

    // Apresentar resultado do campeonato
    console.log('****** NATAÇÃO ******')
    console.log('---------------------')
    console.log(`Time A: ${pontos_a} pts`)
    console.log(`Time B: ${pontos_b} pts`)

    console.log('Resultado: ---')
    if (pontos_a > pontos_b){
        console.log('Vencedor Time A')
    }else if (pontos_b > pontos_a){
        console.log('Vencedor Time B')
    }else{
        console.log('Empate')
    }
}

function calcular_pontuacao(classificacao){
    if (classificacao === 1){
        return 9
    }else if (classificacao === 2){
        return 6
    }else if (classificacao === 3){
        return 4
    }else if (classificacao === 4){
        return 3
    }else{
        return 0
    }
}

main()