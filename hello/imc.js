/*
Aqui no medioasd
adasdas
*/

// IMC = peso(kg) / quadrado da altura(m)
const prompt = require('prompt-sync')()

// Entrada
const peso = Number(prompt('Qual seu peso(kg): ')) // com duas casa dec.
const altura = Number(prompt('Qual sua altura(m): '))

// Processamento
const imc = peso / (altura*altura)

// Saída
console.log('Seu IMC é', imc)