/*
    Faça um programa em que o usuário escolha a quantidade de alunos a serem cadastrados e peça o nome e nota de cada um. 
    Armazene as informações em duas listas separadas e no final imprima o nome e a nota correspondente de cada aluno, e a média total da notas
*/
const prompt = require('prompt-sync')();
console.clear();

let alunos = [],
    notas = [];
let media_notas, n_alunos;

do {
    n_alunos = +parseInt(+prompt('A turma contém quantos alunos? '));
} while (isNaN(n_alunos) && n_alunos > 0);

for (let i = 0; i < n_alunos; i++) {
    let nome, nota;
    do {
        nome = prompt(`Nome ${i + 1}º Aluno: `)
            .trim()
            .toLowerCase();
        nome = nome.charAt(0).toUpperCase() + nome.slice(1);
        if (nome.length < 4) {
            console.log(`\nNome deve conter mais de 3 caracteres\n`);
        }
    } while (nome.length < 4);

    do {
        nota = +parseFloat(+prompt(`Nota do ${i + 1}º Aluno: `)).toFixed(2);
        if (isNaN(nota) || nota < 0) {
            console.log(`\nNota deve ser um número não negativo\n`);
            nota = -1;
        }
    } while (nota < 0);
    alunos.push(nome);
    notas.push(nota);
    console.log(`${i + 1}º Aluno registrado\n`);
}

media_notas = +parseFloat(
    notas.reduce((a, b) => a + b, 0) / notas.length,
).toFixed(2);

console.log('ALUNO\t\tNOTA');
for (let i = 0; i < n_alunos; i++) {
    console.log(`${alunos[i]}\t\t${notas[i]}`);
}
console.log(`\nMédia da Turma ${media_notas}\n`);
