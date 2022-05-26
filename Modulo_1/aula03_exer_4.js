/*
    Faça um programa que leia 2 valores inteiros (A e B). 
    Após, o programa deve mostrar uma mensagem "Sao Multiplos" ou "Nao sao Multiplos", indicando se os valores lidos são múltiplos entre si.
*/
const prompt = require('prompt-sync')();
console.clear();

let a, b;

while (isNaN(a)) {
    a = Math.floor(prompt('Entre com o 1º número INTEIRO: '));
}
while (isNaN(b)) {
    b = Math.floor(prompt('Entre com o 2º número INTEIRO: '));
}

if (a == 0 || b == 0) {
    console.log(`\nSão Múltiplos!\n${a} e ${b} são múltiplos entre si.`);
} else if (a % b == 0) {
    console.log(`\nSão Múltiplos!\n${a} e ${b} são múltiplos entre si.`);
} else if (b % a == 0) {
    console.log(`\nSão Múltiplos!\n${a} e ${b} são múltiplos entre si.`);
} else {
    console.log(
        `\nNão são Múltiplos!\n${a} e ${b} não são múltiplos entre si.`,
    );
}
console.log();
