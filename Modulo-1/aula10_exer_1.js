/*
    Faça um programa que peça um número inteiro e determine se ele é ou não um número primo. 
    Um número primo é aquele que é divisível somente por ele mesmo e por 1.
*/
const prompt = require('prompt-sync')();
console.clear();

let numero;

/*
    Se n não é primo, ele pode ser fatorado em dois fatores (a * b = n) => a e b não podem ser ambos maiores que sqrt(n)
    Pois o produto a * b seria maior que sqrt(n) * sqrt(n) = n
    Ou seja, fatorando n, pelo menos um fator deve ser menor ou igual a sqrt(n)
*/
function isPrime(num) {
    var sqrtnum = Math.floor(Math.sqrt(num));
    var prime = num != 1 && num != 0;
    for (var i = 2; i < sqrtnum + 1; i++) {
        if (num % i == 0) {
            prime = false;
            break;
        }
    }
    return prime;
}

console.log(`##########\tApurador de Números Primos\t##########\n`);
while (true) {
    numero = Math.abs(parseInt(prompt(`Número Natural: `)));
    if (isNaN(numero))
        console.log('\t\t\t\t\t\tInválido! entre com um número Natural...');
    else break;
}

if (isPrime(numero)) {
    console.log(`\nO número ${numero} É Primo\n`);
} else {
    console.log(`\nO número ${numero} NÃO é Primo\n`);
}
