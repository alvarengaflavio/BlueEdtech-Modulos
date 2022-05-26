/*
    Dm0-3 Jogo da adivinhação: Escreva um programa que faça o computador “pensar” em um número inteiro entre 0 e 10 
    e peça para o usuário tentar descobrir qual foi o número escolhido pelo computador. 
    O programa deverá escrever na tela se o usuário venceu ou perdeu.
*/
var prompt = require('prompt-sync')();

const num_rnd = Math.floor(Math.random() * 11);

console.log("######################################");
console.log("####   EM QUAL NÚMERO EU PENSEI   ####");
console.log("######################################\n");

console.log("\nOlá! Eu acabei de pensar em um número INTEIRO entre [0] e [10]");
console.log("Você consegue advinhar qual foi?\n");

let num_usr = parseInt(prompt("Em qual número eu pensei? "));

if (num_rnd != num_usr) {
    console.log("\nERROU!!!\nQue pena! Boa Sorte na próxima tentativa!!!\n");
} else {
    console.log("\nNA MOSCA!!!\nParabéns! Você entrou na minha mente artificial!!!\nSerá que você consegue acertar novamente???\n");
}
console.log(num_rnd, num_usr);