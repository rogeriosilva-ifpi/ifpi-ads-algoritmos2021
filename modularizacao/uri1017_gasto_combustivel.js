const prompt = require('prompt-sync')()

function calcular_consumo_viagem(tempo, velocidade){
    const distancia = tempo * velocidade
    const consumo = distancia / 12

    return consumo
}

function principal(){
    console.log('##### Consumo Veículo #####')   

    // entrada
    const tempo = Number(prompt('Tempo (h): '))
    const velocidade = Number(prompt('Velocidade (km/h): '))

    // processamento
    const consumo = calcular_consumo_viagem(tempo, velocidade)

    // saída
    console.log(consumo.toFixed(3))
}

principal()