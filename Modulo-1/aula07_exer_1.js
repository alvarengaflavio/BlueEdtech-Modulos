/*
    Faça um programa que peça um número inteiro e crie arrays com:
    - Todos os números pares de 0 ao número escolhido;
    - Todos os números ímpares do 0 ao número escolhido.
*/
const prompt = require('prompt-sync')();
console.clear();

let numero,
    pares = [],
    impares = [];

while (true) {
    numero = +parseInt(prompt('Entre com um Nº Inteiro: '));
    if (isNaN(numero)) {
        console.log('\nA entrada deve ser um NÚMERO inteiro\n');
    } else {
        break;
    }
}

if (numero > 0) {
    for (let index = 0; index < numero; index++) {
        if (index % 2 == 0) {
            pares.push(index);
        } else {
            impares.push(index);
        }
    }
} else if (numero < 0) {
    for (let index = 0; index > numero; index--) {
        if (index % 2 == 0) {
            pares.push(index);
        } else {
            impares.push(index);
        }
    }
} else {
    pares.push(0);
}
console.log(`Números entre 0 e ${numero}`);
console.log(`Pares\t${pares}`);
console.log(`Impares\t${impares}\n`);
