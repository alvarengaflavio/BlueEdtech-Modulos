/*
    Jogo da Adivinhação
    Escreva um programa que faça o computador “pensar” em um número inteiro entre 1 e 10 e peça para o usuário tentar descobrir qual foi o número escolhido pelo computador. 
    O programa deverá escrever na tela se o usuário venceu ou perdeu
*/
const prompt = require('prompt-sync')();
console.clear();

let num_comp, num_user;
num_comp = Math.floor(Math.random() * 10 + 1);

console.log('######################################');
console.log('####   EM QUAL NÚMERO EU PENSEI   ####');
console.log('######################################\n');
console.log('Olá! Eu acabei de pensar em um número INTEIRO entre [1] e [10]');
console.log('Você consegue advinhar qual foi?\n');

while (isNaN(num_user)) {
    num_user = parseInt(prompt('Qual número eu pensei? '));
}

if (num_comp != num_user) {
    console.log(
        `\nERROU!!! Pensei no número ${num_comp}\nQue pena! Boa Sorte na próxima tentativa!!!\n`,
    );
} else {
    console.log(
        `\nNA MOSCA!!! Pensei mesmo no ${num_comp}!!!\nParabéns! Você entrou na minha Mente Artificial!!!\n\nSerá que você consegue acertar novamente???\n`,
    );
}
