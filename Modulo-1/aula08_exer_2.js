/*
    Escreva um programa que peça um número e escreva o fatorial dele. 
    Exemplo 6! = 6 x 5 x 4 x 3 x 2 x 1 = 720
*/
const prompt = require('prompt-sync')();
console.clear();

let numero,
    fatorial = 1;

while (true) {
    numero = +parseInt(prompt('Calcular o Fatorial de qual número? '));
    if (isNaN(numero) || numero < 0) {
        console.log('\nEntre com um número Inteiro não negativo\n');
    } else {
        break;
    }
}

for (let index = numero; index > 0; index--) {
    fatorial *= index;
}
console.log(`\n\t${numero}! = ${fatorial}`);
console.log();
