const input = require('prompt-sync')()

// Entrada
const x1 = Number(input('X1: '))
const y1 = Number(input('Y1: '))
const x2 = Number(input('X2: '))
const y2 = Number(input('Y2: '))

// Processamento
const parcial = Math.pow((x2 - x1), 2) + Math.pow((y2-y1),2)
const distancia = Math.sqrt(parcial)

// Saída
console.log('Distância entre os pontos: ', distancia)