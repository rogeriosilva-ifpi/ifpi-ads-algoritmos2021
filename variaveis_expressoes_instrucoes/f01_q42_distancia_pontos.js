const prompt = require('prompt-sync')()

// Entrada
const x1 = Number(prompt('x1 : '))
const x2 = Number(prompt('y1 : '))
const y1 = Number(prompt('x2 : '))
const y2 = Number(prompt('y2 : '))

// Processamento
const a = (x2 - x1) * (x2 - x1)
const b = (y2 - y1) * (y2 - y1)
// const a = Math.pow((x2 - x1), 2) 

const ditancia = Math.sqrt(a + b)

// Saída
console.log('A distancia é', distancia)