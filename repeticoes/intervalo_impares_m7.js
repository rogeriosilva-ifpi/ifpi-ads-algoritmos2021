const prompt = require('prompt-sync')()

function main() {
    const inicio = Number(prompt('Início: '))
    const fim = Number(prompt('Fim: '))

    let atual = inicio

    while (atual <= fim){
        // Trabalho
        if (atual % 2 !== 0 && atual % 7 === 0){
            console.log(atual)    
        }

        atual = atual + 1
    }
}

main()