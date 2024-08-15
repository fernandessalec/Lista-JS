/* Criar um programa que receba o nome, idade e endereço de uma pessoa e mostre na tela esses dados. */

// Declaração de variáveis
let nomePessoa
let idadePessoa
let enderecoPessoa

// Entrada de dados
nomePessoa = prompt('Digite o seu nome: ')
idadePessoa = Number(prompt('Digite a sua idade: '))
enderecoPessoa = prompt('Digite o seu endereço: ')

// Saída de dados
// alert('Nome: ' + nomePessoa)
// alert('Idade: ' + idadePessoa)
// alert('Endreço: ' + enderecoPessoa)

// alert('Nome: ' + nomePessoa + '\nIdade: ' + idadePessoa + '\nEndereço: ' + enderecoPessoa)
alert(`Nome: ${nomePessoa} \nIdade: ${idadePessoa} \nEndereço: ${enderecoPessoa}`)