// desenvolver um programa para calcular o consumo de um carro 

// declaração de variáveis 
let distanciaPercorridakm
let totalCombustivelLitros
let consumoKmLitro

// entrada de dados 
distanciaPercorridakm = Number(prompt('Digite a distância percorrida (km):'))
totalCombustivelLitros = Number(prompt('Digite o total de combustível gasto (litros):'))

//  Cálculo e lógica
consumoKmLitro = (distanciaPercorridakm / totalCombustivelLitros).toFixed(2)

// Saída de dados 
alert (" Consumo de combustível " + consumoKmLitro + " Litros / Km ")