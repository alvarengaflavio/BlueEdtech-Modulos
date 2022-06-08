const prompt = require("prompt-sync")();
console.clear();

// comentando só de zueira
// múltiplas linhas se comenta apertando CTRL + /
// DOIDERA!!!

console.log('Olá Mundo!');
console.log('');

let nome = prompt('Nome: ');

do {
    idade = parseInt(prompt('Idade: '));
} while (isNaN(idade));

do {
    cpf = parseInt(prompt('CPF: '));
} while (isNaN(cpf));


console.log('Nome: ', nome);
console.log('Idade: ', idade);
console.log('CPF: ', cpf);

a = "2";
b = -2;

console.log(a+b);