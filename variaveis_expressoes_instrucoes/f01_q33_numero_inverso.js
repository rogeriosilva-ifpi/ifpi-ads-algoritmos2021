const prompt = require('prompt-sync')()

// Entrada
const numero = Number(prompt('Número de 3 digitos: '))

// Processamento
const centenas = Math.trunc(numero / 100)
const resto = numero % 100

const dezenas = Math.trunc(resto / 10)
const unidades = resto % 10

const inverso = unidades*100 + dezenas*10 + centenas

const soma = numero + inverso

// Saída
console.log(`C = ${centenas} e D = ${dezenas} e U = ${unidades}`)
console.log(`${numero} + ${inverso} = ${soma}`)

