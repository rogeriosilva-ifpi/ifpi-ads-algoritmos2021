const prompt = require('prompt-sync')()

function main(){
    const nome = prompt('Qual seu nome: ')
    const qtd = Number(prompt('Vezes? '))
    
    //  estado inicial; condição de contin.; convergencia dados
    for (let i = 1; i <= qtd; i++){ 

        if (i === 100){ // break: interrompe completamente a for/while
            break
        }

        if (i % 13 === 0){ // continue: cancela só a iteracao atual
            continue 
        }

        // 3. Trabalho
        console.log(`${i}: Olá ${nome} tudo bem?!`)
    }

    console.log('Fim.')
} 

main()