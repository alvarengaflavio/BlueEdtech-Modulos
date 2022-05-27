/*
    Faça um programa que peça um número par, e repita a execução caso o número digitado seja ímpar.
*/
const prompt = require('prompt-sync')();
console.clear();

let num;

do {
    if (!isNaN(num)) {
        console.log('ÍMPAR');
    }
    num = +parseInt(prompt('Entre com um Número: '));
} while (num % 2 != 0);
console.log('PAR\n');
