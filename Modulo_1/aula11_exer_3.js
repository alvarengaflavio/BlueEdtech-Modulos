/*
    Escreva uma função para conversão de temperatura. 
    Ela deve receber 2 argumentos: um número e um caracter 'C', 'F' ou 'K', indicando que a temperatura está em Celsius, Fahrenheit ou Kelvin. 
    A função deve exibir a temperatura nas 3 escalas e perguntar qual valor quer retornar.
*/
const prompt = require('prompt-sync')();
console.clear();

function converteTemp(_temp, _escala) {
    let cfk_temp = [0, 0, 0];
    if (_escala === 'c') {
        cfk_temp[0] = _temp;
        cfk_temp[1] = (cfk_temp[0] * 9) / 5 + 32;
        cfk_temp[2] = cfk_temp[0] + 273.15;
    }
    if (_escala === 'f') {
        cfk_temp[0] = ((_temp - 32) * 5) / 9;
        cfk_temp[1] = _temp;
        cfk_temp[2] = ((_temp - 32) * 5) / 9 + 273.15;
    }
    if (_escala === 'k') {
        cfk_temp[0] = _temp - 272.15;
        cfk_temp[1] = (_temp - 273.15 * 9) / 5 + 32;
        cfk_temp[2] = _temp;
    }
    console.log(`\n[1] Celsius:\t${cfk_temp[0].toFixed(2)}`);
    console.log(`[2] Fahrenheit:\t${cfk_temp[1].toFixed(2)}`);
    console.log(`[3] Kelvin:\t${cfk_temp[2].toFixed(2)}`);
    while (true) {
        const menu = parseInt(prompt(`Receber em qual Unidade? `));
        if (isNaN(menu) || menu < 1 || menu > 3)
            console.log('\t\t\t\t\t\tOpção inválida...');
        else {
            return +cfk_temp[menu - 1].toFixed(2);
        }
    }
}

const temp1 = [38.3, 'c'];
const temp2 = [125.0, 'f'];
const temp3 = [250.5, 'k'];

console.log(converteTemp(...temp1));
console.log(converteTemp(...temp2));
console.log(converteTemp(...temp3));
console.log();
