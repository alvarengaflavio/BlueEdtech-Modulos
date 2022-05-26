/*
    [[Fm0-8]] Conversor de moedas: Crie um programa que solicite um valor em real ao usuário e converta esse valor, para:
	- DOLAR
	- EURO
	- LIBRA ESTERLINA
	- DÓLAR CANADENSE
	- PESO ARGENTINO
	- PESO CHILENO
Para esse exercício você precisará realizar uma pesquisa para saber a cotação de cada moeda em real. Mostrar o resultado no formato U$9999.99
*/
var prompt = require('prompt-sync')();  // inicializar prompt

console.log("###########\tCONVERSOR DE MOEDAS\t###########")
let brl = prompt("Entre com valor em Reais: R$ ");

let dolar = (brl/4.95).toFixed(2);
let libra = (brl/6.18).toFixed(2);
let cad = (brl/3.86).toFixed(2);
let ars = (brl/0.042).toFixed(2);
let clp = (brl/0.0058).toFixed(2);

console.log(" ")
console.log("Dólar (USD):\tU$ " + dolar)
console.log("Libra (GBP):\t £ " + libra)
console.log("Dolar (CAN):\tC$ " + cad)
console.log("Peso  (ARG):\t $ " + ars)
console.log("Peso  (CHI):\t $ " + clp)
console.log(" ")

