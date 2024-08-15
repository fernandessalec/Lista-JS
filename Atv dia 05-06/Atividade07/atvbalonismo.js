/* Um festival de balonismo oferece passeios de balão. 
Para cada 5 minutos de voo, são necessários 10m³ (metros cúbicos) de gás, sendo que o metro cúbico de gás custa R$15 reais.
No balão cabem no máximo 4 pessoas. O cálculo do valor do passeio é feito somando o valor gasto em gás, mais uma taxa de R$20 reais por pessoa.
Criar um programa que pergunte quantas pessoas vão no passeio e o tempo de passeio. Mostrar na tela o total cobrado pelo passeio.*/

let relMinutos = 5
let relGas = 10
let consumoGasMinuto
let valorMetroGas = 15
let taxaPessoa = 20
let quantidadePessoas
let tempoPasseio
let totalGasPasseio
let valorTotalgas
let valorTotaltaxas
let valorFinal

// Cálculo / Lógica
consumoGasMinuto = relGas / relMinutos 

// Entrada de dados 
quantidadePessoas = Number(prompt(" Quantas pessoas (máximo 4) no passeio? "))
tempoPasseio = Number(prompt(" Quanto tempo (minutos) de passeio? "))

// Cáculo / Lógica
totalGasPasseio = tempoPasseio * consumoGasMinuto
valorTotalgas = tempoPasseio * valorMetroGas
valorTotaltaxas = quantidadePessoas * taxaPessoa
valorFinal = valorTotalgas + valorTotaltaxas

// Saída de dados 
alert(" Valor Gás: R$ " + valorTotalgas + "\nValor Taxas: R$ " + valorTotaltaxas + 
"\nTotal Passeio: R$ " + valorFinal)