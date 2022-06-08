/*
    Reajuste salarial
    As empresas @.com resolveram dar um aumento de salário aos seus colaboradores e lhe contrataram para desenvolver o programa que calculará os reajustes. 
    Faça um programa que recebe o salário de um colaborador e o reajuste segundo o seguinte critério, baseado no salário atual:
    *   Salários até R$ 280,00 (incluindo): aumento de 20%.
    *   Salários entre R$ 280,00 e R$ 700,00: aumento de 15%.
    *   Salários entre R$ 700,00 e R$ 1500,00: aumento de 10%.
    *   Salários de R$ 1500,00 em diante: aumento de 5%.
    Após o aumento ser realizado, informe na tela:
    *   O salário antes do reajuste.
    *   O percentual de aumento aplicado.
    *   O valor do aumento.
    *   O novo salário, após o aumento.
*/
const prompt = require('prompt-sync')();
console.clear();

const reajustes = [0.2, 0.15, 0.1, 0.05];
let salario_atual, salario_final, aumento_bruto, reajuste;

console.log('#####################################');
console.log('####   REAJUSTE SALARIAL @.com   ####');
console.log('#####################################\n');

while (isNaN(salario_atual)) {
    salario_atual = parseFloat(
        prompt('Entre com o Salário Atual em [BRL]: '),
    ).toFixed(2);
}

if (salario_atual < 280) {
    salario_final = (salario_atual * (1 + reajustes[0])).toFixed(2);
    reajuste = String(reajustes[0] * 100) + '%';
} else if (salario_atual < 700) {
    salario_final = (salario_atual * (1 + reajustes[1])).toFixed(2);
    reajuste = String(reajustes[1] * 100) + '%';
} else if (salario_atual < 1500) {
    salario_final = (salario_atual * (1 + reajustes[2])).toFixed(2);
    reajuste = String(reajustes[2] * 100) + '%';
} else {
    salario_final = (salario_atual * (1 + reajustes[0])).toFixed(3);
    reajuste = String(reajustes[3] * 100) + '%';
}
aumento_bruto = (salario_final - salario_atual).toFixed(2);

console.log(`Salário Atual [BRL]:\t${salario_atual}`);
console.log(`Percentual Aplicado:\t${reajuste}`);
console.log(`Aumento Bruto [BRL]:\t${aumento_bruto}`);
console.log(`Salário Final [BRL]:\t${salario_final}`);
console.log();
