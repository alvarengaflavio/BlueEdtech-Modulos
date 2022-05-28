/*
    Faça um programa que peça um número e imprima toda a tabuada dele do 1 ao 10.
*/
const prompt = require('prompt-sync')();
console.clear();

let numero;

while (true) {
    numero = +parseInt(prompt('Calcular o Fatorial de qual número? '));
    if (isNaN(numero)) {
        console.log('\nEntre com um número Inteiro\n');
    } else {
        break;
    }
}

for (let index = 0; index < 10; index++) {
    console.log(`${index + 1} x ${numero} = ${(index + 1) * numero}`);
}
console.log();
