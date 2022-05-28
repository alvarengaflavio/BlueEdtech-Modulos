/*
    Faça um programa que carregue uma lista com os modelos de cinco carros. 
    Carregue uma outra lista com o consumo desses carros, isto é, quantos quilômetros cada um desses carros faz com um litro de combustível. 
    Calcule e mostre:
    - O modelo do carro mais econômico;
    - Quantos litros de combustível cada um dos carros cadastrados consome para percorrer uma distância de 1000 quilômetros e quanto isto custará, 
      considerando um que a gasolina custe R$ 5,50 o litro.
*/
const prompt = require('prompt-sync')();
console.clear();

let carros = ['A', 'B', 'C', 'D', 'E'],
    consumos = [6.3, 5.3, 9.3, 8.8, 6.1],
    litros_milkm = [],
    menor = 0,
    index_economico,
    gasolina = 5.5;

for (const consumo of consumos) {
    if (consumo > menor) {
        // maior consumo = mais KM/litro = mais economico
        menor = consumo;
        index_economico = consumos.indexOf(menor);
    }
    let element = +parseFloat(1000 / consumo).toFixed(2);
    litros_milkm.push(element);
}
console.log(`O modelo ${carros[index_economico]} é o mais econômico\n`);
for (let index = 0; index < carros.length; index++) {
    console.log(
        `O modelo ${carros[index]} consome ${
            litros_milkm[index]
        } litros a cada 1000 Km - Custando [BRL] ${(
            litros_milkm[index] * gasolina
        ).toFixed(2)}`,
    );
}
console.log();
