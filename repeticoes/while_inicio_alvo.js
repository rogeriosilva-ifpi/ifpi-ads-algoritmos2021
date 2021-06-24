const prompt = require('prompt-sync')()

function main(){
    const nome = prompt('Qual seu nome: ')
    // 1. Estado anterior
    let atual = 5
    const alvo = 10
    const passo = 1

    // 2. condição de continuidade/parada
    while (atual < alvo){ 
        // 3. Trabalho
        console.log(`${atual}: Olá ${nome} tudo bem?!`)
        
        // 4. Convergência dos Dados
        atual = atual + passo
        // atual++
    }

    console.log('Fim.')
} 

main()