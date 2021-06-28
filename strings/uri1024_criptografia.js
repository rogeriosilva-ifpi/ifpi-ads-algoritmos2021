const { eh_letra, deslocarNaTabelaASCII, inverter_texto } = require("./strings_utils")
const { obterTexto, obterNumero } = require("./utils")

function main(){

    const qtd = obterNumero('Qtd: ')

    for (let i = 0; i < qtd; i++){
        const mensagem = obterTexto('Mensagem: ')

        const mensagem_etapa1 = deslocarLetras(mensagem)
        const mensagem_etapa2 = inverter_texto(mensagem_etapa1)
        const mensagem_etapa3 = deslocar_segunda_metade(mensagem_etapa2)

        // console.log(mensagem_etapa1)
        // console.log(mensagem_etapa2)
        console.log(mensagem_etapa3)
    }

}

function deslocarLetras(mensagem){
    let nova_mensagem = ''
    
    for (caractere of mensagem){
        if (eh_letra(caractere)){
            const caractere_deslocado = deslocarNaTabelaASCII(caractere, 3)
            nova_mensagem += caractere_deslocado
        }else{
            nova_mensagem += caractere
        }
    }

    return nova_mensagem
}

function deslocar_segunda_metade(mensagem){
    const metade = Math.trunc(mensagem.length / 2)
    let nova_mensagem = ''
    
    for (let i = 0; i < mensagem.length; i++){
        if (i < metade){
            nova_mensagem += mensagem[i]
        }else{
            nova_mensagem += deslocarNaTabelaASCII(mensagem[i], -1)
        }
    }

    return nova_mensagem
}

main()