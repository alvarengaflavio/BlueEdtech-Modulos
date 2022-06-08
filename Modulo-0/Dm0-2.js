/*
    Dm0-2 Faça um programa que vai receber como parâmetro o ano de nascimento de uma pessoa, 
    retornando um valor literal indicando se uma pessoa tem voto NEGADO, OPCIONAL ou OBRIGATÓRIO nas eleições:
*/
var prompt = require('prompt-sync')(); 

console.log("#######################################");
console.log("####  JUSTIÇA ELEITORAL DO BRASIL  ####");
console.log("#######################################\n");

let ano_atual = new Date().getFullYear();
let ano_nasci = parseInt(prompt("Digite o Ano de Nascimento: "));

idade = parseInt(ano_atual - ano_nasci);

if (idade < 16) {
    console.log("\n  " + idade + " ANOS\tVOTO NEGATO");
} else if (idade < 18 || idade > 59) {
    console.log("\n  " + idade + " ANOS\tVOTO OPCIONAL");
} else {
    console.log("\n  " + idade + " ANOS\tVOTO OBRIGATÓRIO");
}
console.log("");