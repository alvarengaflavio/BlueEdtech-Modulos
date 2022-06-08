/*
    Faça um programa, com uma função que necessite de três argumentos: dois números e um sinal de operador matemático (+, -, * ou /). 
    Ela deve fazer o cálculo indicado pelo operador usando os dois número passados.
*/
const prompt = require('prompt-sync')();
console.clear();

function operaNumeros(n1, n2, operador) {
    if (operador === '+') return n1 + n2;
    if (operador === '-') return n1 - n2;
    if (operador === '*') return n1 * n2;
    if (operador === '/' && n2 != 0) return n1 / n2;
    return 'O denominador não pode ser ZERO';
}

function lerNumeros() {
    let nums = [0, 0];
    for (let i = 0; i < 2; i++) {
        while (true) {
            nums[i] = parseFloat(prompt(`Entre com o ${i + 1}º número: `));
            if (isNaN(nums[i]))
                console.log('\t\t\t\t\t\tDeve ser um número...');
            else {
                break;
            }
        }
    }
    return nums;
}

function lerMenu() {
    while (true) {
        let num_menu = parseInt(prompt(`O que deseja fazer? `));
        if (isNaN(num_menu) || num_menu < 1 || num_menu > 6)
            console.log('\t\t\t\t\t\tOpção inválida...');
        else {
            return num_menu;
        }
    }
}

console.log('Entre com dois números para realizarmos operações');
let numeros = lerNumeros();
loopMenu: while (true) {
    console.log();
    console.log('[1] SOMAR n1 + n2\t[2] SUBTRAIR n1 - n2');
    console.log('[3] MULTIPLICAR n1*n2\t[4] DIVIDIR n1/n2');
    console.log('[5] REDEFINIR n1 e n2\t[6] SAIR\n');
    const menu = lerMenu();

    switch (menu) {
        case 1:
            const soma = operaNumeros(...numeros, '+');
            console.log(`\nA Soma: ${numeros[0]} + ${numeros[1]} = ${soma}\n`);
            break;

        case 2:
            const subt = operaNumeros(...numeros, '-');
            console.log(
                `\nA Subtração: ${numeros[0]} - ${numeros[1]} = ${subt}\n`,
            );
            break;

        case 3:
            const mult = operaNumeros(...numeros, '*');
            console.log(
                `\nA Multiplicação: ${numeros[0]} * ${numeros[1]} = ${mult}\n`,
            );
            break;

        case 4:
            const div = operaNumeros(...numeros, '/');
            console.log(
                `\nA Divisão: ${numeros[0]} / ${numeros[1]} = ${div}\n`,
            );
            break;

        case 5:
            numeros = lerNumeros();
            console.log(`\nNúmeros Redefinidos\n`);
            break;

        case 6:
            console.log('\nFIM\n');
            break loopMenu;

        default:
            console.log(`\nOpção ${menu} inválida\n`);
            break;
    }
}
