/*
    Faça um Programa que leia 20 números inteiros e armazene-os num array. 
    Armazene os números pares no array PAR e os números IMPARES no array IMPAR. 
    Imprima os três vetores.
*/
const prompt = require('prompt-sync')();
console.clear();

let numeros = [],
    num_pares = [],
    num_impares = [];
let numero;

for (let i = 0; i < 20; i++) {
    do {
        numero = +parseInt(prompt(`Entre com o ${i + 1}º número: `));
    } while (isNaN(numero));
    numeros.push(numero);
    if (numero % 2 == 0) {
        num_pares.push(numero);
    } else {
        num_impares.push(numero);
    }
}
console.log(numeros, num_pares, num_impares);
