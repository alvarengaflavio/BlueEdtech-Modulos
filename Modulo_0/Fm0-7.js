/*
    [[Fm0-7]] Você está na flor da idade?
	- Defina uma variável para o valor do ano do nascimento;
	- Defina uma variável para o valor do ano atual;
	- Defina uma variável que calcula o valor final da idade da pessoa;
	- Exiba uma mensagem final dizendo a idade da pessoa e a mensagem "Você está na flor da idade".
*/
var prompt = require('prompt-sync')();  // inicializar prompt

let ano_nasc = prompt("Ano de Nascimento: ");
let ano_atual = 2022;
let idade = (ano_atual - ano_nasc).toFixed(0);

console.log("Você tem " + idade + " anos!" + "\tVOCÊ ESTÁ NA FLOR DA IDADE!");
