/*
    Jogo da adivinhação
    Escreva um programa que faça o computador “pensar” em um número inteiro entre 0 e 10
    Peça para o usuário tentar descobrir qual foi o número escolhido pelo computador. 
    O programa deve ser repetir até o usuário acertar o número, e a cada palpite deve dizer se o número é maior ou menor que o palpite. 
    No final dele deve escrever na tela que o usuário encontrou o número, e mostrar a quantidade de palpites que foi necessária.
*/
const prompt = require('prompt-sync')();
console.clear();

let num_comp, num_user;
let conta_palpites = 0;
num_comp = Math.floor(Math.random() * 11);

console.log('######################################');
console.log('####   EM QUAL NÚMERO EU PENSEI   ####');
console.log('######################################');
console.log('Olá! Eu acabei de pensar em um número INTEIRO entre [0:10]');
console.log('Você consegue advinhar qual foi?\n');

do {
    do {
        num_user = +parseInt(prompt('Qual número eu pensei? '));
    } while (isNaN(num_user));
    conta_palpites++;
    if (num_comp > num_user) {
        console.log(`Não... meu número é MAIOR`);
    } else if (num_comp < num_user) {
        console.log(`Não... meu número é MENOR`);
    } else {
        console.log(`\nExatamente! Foi o número ${num_comp}!`);
        console.log(
            `Você entrou na minha mente artificial com ${conta_palpites} tentativa(s)!`,
        );
        console.log(`\nNa próxima você não terá tanta Sorte...`);
    }
} while (num_comp != num_user);
console.log();
