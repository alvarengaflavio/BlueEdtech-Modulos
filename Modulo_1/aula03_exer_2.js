/*
    Faça um programa para a leitura de quatro notas parciais de um aluno. 
    O programa deve calcular a média alcançada por aluno e apresentar:
    -   A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
    -   A mensagem "Em recuperação", se a média for entre cinco e sete;
    -   A mensagem "Reprovado", se a média for menor que cinco.
*/
const prompt = require('prompt-sync')();
console.clear();

let notas = [];
let soma = 0;
let num_notas = 4;

for (let nota = 0; nota < num_notas; nota++) {
    let element;
    // lendo notas
    while (isNaN(element)) {
        element = parseFloat(prompt(`Entre com a ${nota + 1}ª nota: `));
    }
    notas.push(element);
    soma += notas[nota];
}

let media = (soma / notas.length).toFixed(2);
// let media = (notas.reduce((a, b) => a + b, 0) / notas.length).toFixed(2); // melhor solução pro futuro

if (media >= 7.0) {
    console.log(`\nMédia Final: ${media}\tSituação: APROVADO\n\n`);
} else if (media >= 5.0) {
    console.log(`\nMédia Final: ${media}\tSituação: RECUPERAÇÃO\n\n`);
} else {
    console.log(`\nMédia Final: ${media}\tSituação: REPROVADO\n\n`);
}
