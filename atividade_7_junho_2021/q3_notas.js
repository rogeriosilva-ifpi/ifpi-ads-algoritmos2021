const prompt = require('prompt-sync')()

function main(){
    // Entrada e Inicializaçoes
    let situacao_pos_pf = ''
    let media_pos_pf = 0
    const avaliacao1 = Number(prompt('Avaliação 1: '))
    const avaliacao2 = Number(prompt('Avaliação 2: '))
    const atividades = Number(prompt('Atividades: '))

    // Processamento
    const media_semestral = calcular_media_semestral(avaliacao1, avaliacao2, atividades)
    const situacao_aluno = verificar_situacao_aluno(media_semestral)

    if (situacao_aluno === 'EM PROVA FINAL'){
        console.log('O Aluno final em Prova Final')
        const nota_prova_final = Number(prompt('Nota Prova Final: '))
        media_pos_pf = (media_semestral + nota_prova_final) / 2

        if (media_pos_pf >= 6){
            situacao_pos_pf = 'Aprovado Pós-PF'
        }else{
            situacao_pos_pf = 'Reprovado Pós-PF'
        }
    }

    // Saída
    console.log('***** IFPI - Notas *****')
    console.log(`Média Semestral: ${media_semestral.toFixed(1)}`)
    console.log(`Situação do Aluno: ${situacao_aluno}`)
    if (situacao_aluno === 'EM PROVA FINAL'){
        console.log('---- Dados Prova Final ----')
        console.log('Média Pós-PF:', media_pos_pf.toFixed(1))
        console.log('Situação Pós-PF:', situacao_pos_pf)
    }
}

function calcular_media_semestral(av1, av2, atv){
   const media = (av1*2 + av2*3 + atv*1) / (2 + 3 + 1) 
   return media
}

function verificar_situacao_aluno(media){
    if (media >= 7){
        return 'APROVADO'
    }else if (media < 4){
        return 'REPROVADO'
    }else{
        return 'EM PROVA FINAL'
    }
}

main()