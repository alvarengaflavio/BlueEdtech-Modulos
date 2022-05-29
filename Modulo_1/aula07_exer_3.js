/*
    Faça um programa que sorteie 20 números de 0 a 100, armazene todos em um array e imprima em ordem crescente.
*/
const prompt = require('prompt-sync')();
console.clear();

let qtd_num = 20,
    num_range = 100,
    numeros = [];

for (let i = 0; i < qtd_num; i++) {
    let numero = Math.floor(Math.random() * (num_range + 1));
    while (numeros.indexOf(numero) != -1) {
        numero = Math.floor(Math.random() * (num_range + 1));
    }
    numeros.push(numero);
}
numeros.sort((a, b) => a - b);
console.log(numeros);
