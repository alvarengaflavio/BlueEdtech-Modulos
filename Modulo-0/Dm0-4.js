/*
    Dm0-4 Caixa eletrônico: Faça um Programa para um caixa eletrônico. 
    O programa deverá perguntar ao usuário a valor do saque e depois informar quantas notas de cada valor serão fornecidas. 
    As notas disponíveis serão as de 1, 5, 10, 50 e 100 reais. O valor mínimo é de 10 reais e o máximo de 600 reais. 
    O programa não deve se preocupar com a quantidade de notas existentes na máquina.
    Exemplo 1: Para sacar a quantia de 256 reais, o programa fornece duas notas de 100, uma nota de 50, uma nota de 5 e uma nota de 1;
    Exemplo 2: Para sacar a quantia de 399 reais, o programa fornece três notas de 100, uma nota de 50, quatro notas de 10, uma nota de 5 e quatro notas de 1
*/
var prompt = require('prompt-sync')();

console.log('#######################################');
console.log('####   CAIXA ELETRÔNICO BLU-BANK   ####');
console.log('#######################################\n');

console.log('\nNotas disponíveis R$:  [1], [5], [10], [50], [100]');
console.log(
    '\nOpção [SAQUE] selecionada.\nSaque Mínimo: R$[10,00]\nSaque Máximo: R$[600,00]\n',
);

const notas_maquina = [100, 50, 10, 5, 1];
let notas_saque = [];
let saque = parseInt(prompt('Valor do Saque em BRL: '));
const valor = saque;

if (saque >= 10 && saque <= 600) {
    for (let i = 0; i < notas_maquina.length; i++) {
        const element = parseInt(notas_maquina[i]);
        const num_n = parseInt(saque / element);
        notas_saque.push(num_n);
        saque = saque - num_n * element;
        // console.log(saque, notas_saque);
    }

    for (let i = 0; i < notas_maquina.length; i++) {
        const element = notas_saque[i];
        if (element != 0) {
            console.log(
                'Sacada(s) ' +
                    element +
                    ' nota(s) de ' +
                    notas_maquina[i] +
                    ' reais [BRL]',
            );
        }
    }

    console.log(
        '\nSaque de ' +
            notas_saque.reduce((a, b) => a + b, 0) +
            ' notas, totalizando R$ ' +
            valor.toFixed(2),
    );
    console.log('\nObrigado e volte sempre!!!\n\n');

    console.log(
        '\nSaque de ' +
            notas_saque.reduce((a, b) => a + b, 0) +
            ' notas, totalizando R$ ' +
            valor.toFixed(2),
    );
    console.log('\nObrigado e volte sempre!!!\n\n');
} else {
    console.log('\nValor de SAQUE INVÁLIDO!!!\nTente Novamente...\n\n');
}
