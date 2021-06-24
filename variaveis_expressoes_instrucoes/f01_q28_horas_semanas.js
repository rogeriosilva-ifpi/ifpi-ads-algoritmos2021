const entrada = require('prompt-sync')()

// Entrada
const horas = Number(entrada('Horas: '))

// Processamento
// const horas_semana = 7 * 24
const qtd_semanas = Math.trunc(horas / 168)

const sobras_horas = horas % horas_semana

const qtd_dias = Math.trunc(sobras_horas / 24)
const qtd_horas = sobras_horas % 24

// Saída
console.log('Semanas:', qtd_semanas)
console.log('Dias:', qtd_dias)
console.log('Horas:', qtd_horas)