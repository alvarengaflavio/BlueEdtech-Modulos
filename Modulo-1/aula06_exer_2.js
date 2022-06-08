/*
    Faça um Programa que peça a idade e a altura de 5 pessoas, armazene cada informação no seu respectivo array. 
    Imprima a média de idade e de altura.
*/
const prompt = require('prompt-sync')();
console.clear();

let idade = [],
    altura = [];
let acumula_idade = 0,
    acumula_altura = 0.0;
const n = 5;

for (let i = 0; i < n; i++) {
    let element;
    do {
        element = +parseInt(prompt(`Idade da ${i + 1}ª pessoa: `));
    } while (isNaN(element));

    idade.push(element);
    acumula_idade += idade[i];

    do {
        element = +parseFloat(prompt(`Altura da ${i + 1}ª pessoa: `)).toFixed(
            2,
        );
    } while (isNaN(element));

    altura.push(element);
    acumula_altura += altura[i];
    console.log(`${i + 1}ª pessoa registrada...\n`);
}
console.log(
    `\nMédia das Idades:\t${+parseFloat(acumula_idade / n).toFixed(2)} anos`,
);
console.log(
    `Média das Alturas:\t${+parseFloat(acumula_altura / n).toFixed(2)} m`,
);
console.log();
