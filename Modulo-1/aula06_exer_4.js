/*
    Faça um programa que simule um lançamento de dados. 
    Lance o dado 100 vezes e armazene os resultados em um array. 
    Depois, mostre quantas vezes cada valor foi conseguido.
*/
const prompt = require('prompt-sync')();
console.clear();

let dados = [],
    resultados = [0, 0, 0, 0, 0, 0];

for (let i = 0; i < 100; i++) {
    const element = +Math.floor(Math.random() * 6) + 1;
    dados.push(element);
    resultados[element - 1] += 1;
}

console.log('Frequência dos resultados\n');
for (let i = 0; i < resultados.length; i++) {
    console.log(`Número ${i + 1}:\t${resultados[i]} rolagens`);
}
console.log();
