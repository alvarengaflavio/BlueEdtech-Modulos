/*
    Mm0-3 Faça um programa que peça dois números, imprima o maior deles ou imprima "Números iguais" se os números forem iguais
*/
var prompt = require('prompt-sync')(); // inicializar prompt

num1 = parseFloat(prompt('Entre com o PRIMEIRO número: '));
num2 = parseFloat(prompt('Entre com SEGUNDO número: '));

if (num1 > num2) {
    // número 1 maior
    console.log(
        'O primeiro número ' + num1 + ' é MAIOR que o segundo número ' + num2,
    );
} else if (num2 > num1) {
    // número 2 maior
    console.log(
        'O segundo número ' + num2 + ' é MAIOR que o primeiro número ' + num1,
    );
} else {
    console.log('Os DOIS números são IGUAIS.\t\t' + num1 + ' = ' + num2); // iguais
}
