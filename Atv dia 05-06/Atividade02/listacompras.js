/* Na sua lista de compras do mercado, constam apenas 3 itens: arroz, batata palha e um suco de garrafa. Porém, você possui apenas uma nota de R$100 para pagar. Faça um programa no qual sejam digitados os valores dos itens e mostre na tela valor que você deve receber (troco). */

// Declaração de variáveis
let valorArroz, valorBatata, valorSuco
let dinheiroCarteira = 100
let trocoRecebido, valorTotal

// Entrada de dados
valorArroz = Number(prompt('Digite o valor do arroz: '))
valorBatata = Number(prompt('Digite o valor da batata: '))
valorSuco = Number(prompt('Digite o valor do suco: '))

// Cálculo / Lógica
valorTotal = valorArroz + valorBatata + valorSuco
trocoRecebido = dinheiroCarteira - valorTotal

// Saída de dados
alert(`Total dinheiro: R$${dinheiroCarteira}\nTotal do itens: R$${valorTotal}\nTroco: R$${trocoRecebido}`)