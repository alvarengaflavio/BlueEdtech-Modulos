/*
    Faça um programa que leia e valide as seguintes informações:
        1. Nome: maior que 3 caracteres;
        2. Idade: entre 0 e 150;
        3. Salário: maior que zero;
        4. Estado Civil: 's', 'c', 'v', 'd';
*/
const prompt = require('prompt-sync')();
console.clear();

let nome, idade, salario, estado_civil;

do {
    nome = prompt('Nome: ').trim().toLowerCase();
    nome = nome.charAt(0).toUpperCase() + nome.slice(1);
    if (nome.length < 4) {
        console.log(`\nNome deve conter mais de 3 caracteres\n`);
    }
} while (nome.length < 4);

do {
    idade = Math.floor(+prompt('Idade: '));
    if (isNaN(idade)) {
        console.log(`\nIdade deve conter números inteiros\n`);
        idade = 0;
    }
} while (idade < 1 || idade > 149);

do {
    salario = +parseFloat(+prompt('Salário [BRL]: ')).toFixed(2);
    if (isNaN(salario)) {
        console.log(`\nSalário deve ser um número positivo\n`);
        salario = 0;
    }
} while (!(salario > 0));

do {
    estado_civil = prompt('Estado Civil: ').trim().toLowerCase();
    if (
        estado_civil == 's' ||
        estado_civil == 'c' ||
        estado_civil == 'v' ||
        estado_civil == 'd'
    ) {
        break;
    }
    console.log(`\nO Estado Civil deve ser s, c, v ou d\n`);
} while (true);

console.log(nome, idade, salario, estado_civil);
console.log();
