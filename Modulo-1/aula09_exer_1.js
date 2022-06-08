/*
    Faça um programa que peça 2 números e crie um array contando todos os números os números sequenciais do primeiro até o segundo, independente de ser maior ou menor.
*/
const prompt = require('prompt-sync')();
console.clear();

let num_1,
    num_2,
    sequencia = [];

while (true) {
    num_1 = parseInt(prompt(`Entre com o 1º número: `));
    if (isNaN(num_1)) console.log('\t\t\t\t\t\tInválido, entre com um número');
    else break;
}

while (true) {
    num_2 = parseInt(prompt(`Entre com o 2º número: `));
    if (isNaN(num_2)) console.log('\t\t\t\t\t\tInválido, entre com um número');
    else break;
}

if (num_2 > num_1) {
    for (let i = num_1; i < num_2 + 1; i++) {
        sequencia.push(i);
    }
} else {
    for (let i = num_1; i > num_2 - 1; i--) {
        sequencia.push(i);
    }
}
console.log('');
process.stdout.write(`Números Sequenciais: `);
for (const n of sequencia) {
    process.stdout.write(`${n} `);
}
console.log('\n');
