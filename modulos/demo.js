const { obterTexto, obterNumero, obterInteiroPositivo } = require("./utils")

function main(){
    const nome = obterTexto('Nome: ')
    const peso = obterNumero('peso: ')
    const idade = obterInteiroPositivo('Idade: ')

    console.log(nome, peso, idade)
}

main()