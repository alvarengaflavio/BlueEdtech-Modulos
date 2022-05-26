/*
    Faça um Programa que peça dois números e imprima o maior deles, e informe caso eles sejam iguais
*/
const prompt = require('prompt-sync')();
console.clear();

let num_1 = parseFloat(prompt('\nEntre com o PRIMEIRO Número: '));
let num_2 = parseFloat(prompt('Entre com o SEGUNDO Número: '));

if (num_1 > num_2) {
    console.log(
        `\nO PRIMEIRO número é MAIOR que o SEGUNDO.\t${num_1} > ${num_2}`,
    );
} else if (num_2 > num_1) {
    console.log(
        `\nO SEGUNDO número é MAIOR que o PRIMEIRO.\t${num_2} > ${num_1}`,
    );
} else {
    console.log(`\nAMBOS os números são IGUAIS.\t\t${num_1} = ${num_2}`);
}
console.log();
