const prompt = require('prompt-sync')()

function main(){
    const nome = prompt('Qual seu nome: ')
    // 1. Estado anterior
    let quantidade = 0

    // 2. condição de continuidade/parada
    while (quantidade < 100){ 
        // 3. Trabalho
        console.log(`${quantidade}: Olá ${nome} tudo bem?!`)
        
        // 4. Convergência dos Dados
        quantidade = quantidade + 1
    }

    console.log('Fim.')
} 

main()