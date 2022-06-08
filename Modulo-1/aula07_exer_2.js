/*
    Crie um programa em que o usuário escolha a quantidade de notas serem entradas e depois peça e armazene essa quantidade de notas em um array. 
    Ao final imprima a quantidade de alunos APROVADOS (nota >= 7), EM RECUPERAÇÃO (entre 5 e 7) e REPROVADOS (abaixo de 5).
*/
const prompt = require('prompt-sync')();
console.clear();

let notas = [],
    alunos,
    aprovados = 0,
    recuperandos = 0,
    reprovados = 0;

while (true) {
    alunos = +parseInt(prompt('A turma contém quantos Alunos? '));
    if (isNaN(alunos) || alunos < 1) {
        console.log('\nA entrada deve ser um NÚMERO inteiro positivo\n');
    } else {
        break;
    }
}

for (let aluno = 0; aluno < alunos; aluno++) {
    let nota;
    while (true) {
        nota = +parseFloat(prompt(`Nota do ${aluno + 1}º Aluno: `)).toFixed(2);
        if (isNaN(nota) || nota < 0) {
            console.log('\nA entrada deve ser um NÚMERO não negativo\n');
        } else if (nota > 10) {
            console.log('\nA entrada não pode ser maior que 10.00\n');
        } else {
            break;
        }
    }
    notas.push(nota);
}

for (const nota of notas) {
    if (nota < 5) {
        reprovados++;
    } else if (nota < 7) {
        recuperandos++;
    } else {
        aprovados++;
    }
}

console.log('\nAlunos por Situação:');
console.log(`Aprovados:\t${aprovados}`);
console.log(`Recuperação:\t${recuperandos}`);
console.log(`Reprovados:\t${reprovados}`);
console.log(notas);
