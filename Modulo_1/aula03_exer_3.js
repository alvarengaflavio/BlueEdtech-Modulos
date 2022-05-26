/*
    Faça um programa que leia um número, e informe se ele é par ou impar
*/
const prompt = require('prompt-sync')();
console.clear();

let num_1 = Math.floor(+prompt('\nEntre com um Número inteiro: '));

if (num_1 % 2 == 0) {
    console.log(`\nO NÚMERO ${num_1} é PAR!!!`);
} else {
    console.log(`\nO NÚMERO ${num_1} é IMPAR!!!`);
}
console.log(num_1 % 2);
console.log();
