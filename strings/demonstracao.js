const prompt = require('prompt-sync')()

function main(){
    const frase = prompt('Frase: ')
    const caractere = prompt('Letra: ')

    let contador = 0

    for (let i = 0; i < frase.length; i++){
        // process.stdout.write(`${frase[i]} \b`)

        if (frase[i] === caractere){
            contador = contador + 1
        }
        
    }

    console.log(`Foram encontradas ${contador} ocorrências de "${caractere}"`)

}

main()