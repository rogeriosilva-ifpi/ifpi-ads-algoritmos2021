const prompt = require('prompt-sync')();

const inicio = 1
const final = Number(prompt('Deseja somar até quanto? '))

const somatorio = (inicio + final) * (final / 2)

console.log('O somatório é: ', somatorio)