/*
    Leia um valor inteiro X. Em seguida mostre os ímpares de 1 até X, um valor por linha, inclusive o X, se for o caso. Use o laço FOR.
*/
const prompt = require('prompt-sync')();
console.clear();

let numero;

while (true) {
    numero = parseInt(prompt(`Número Inteiro: `));
    if (isNaN(numero))
        console.log('\t\t\t\t\t\tInválido, entre com um número Inteiro');
    else break;
}

console.log(`Impares de ${1} a ${numero}:`);
if (numero > 0) {
    for (let i = 1; i < numero + 1; i++) {
        if (i % 2 != 0) console.log(`${i}`);
    }
} else {
    for (let i = 1; i > numero - 1; i--) {
        if (i % 2 != 0) console.log(`${i}`);
    }
}
console.log();
