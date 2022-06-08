/*
    Faça um programa que, dado uma lista de N números 
    (o usuário deve determinar a quantidade de números a serem entrados e entrar cada um deles) 
    determine o menor valor, o maior valor e a soma dos valores.
*/
const prompt = require('prompt-sync')();
console.clear();

let quantidade,
    menor = 0,
    maior = 0,
    soma = 0,
    numeros = [];

while (true) {
    quantidade = parseInt(prompt(`A lista de quantos números? `));
    if (isNaN(quantidade) || quantidade < 1)
        console.log('\t\t\t\t\t\tInválido, entre com um Inteiro positivo');
    else break;
}
for (let i = 0; i < quantidade; i++) {
    let numero;
    while (true) {
        numero = +parseFloat(prompt(`${i + 1}º número: `));
        if (isNaN(numero))
            console.log('\t\t\t\t\t\tInválido, entre com um número');
        else break;
    }
    numeros.push(numero);
    soma += numero;
    if (menor > numero) menor = numero;
    if (maior < numero) maior = numero;
}
console.log(`\nNúmeros: ${numeros}`);
console.log(`Maior Número:\t${maior}`);
console.log(`Menor Número:\t${menor}`);
console.log(`Soma dos Nºs:\t${soma}\n`);
