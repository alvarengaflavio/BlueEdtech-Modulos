/*
    [[Mm0-1]] Faça um programa que pergunte ao usuário um número e valide se o numero é par ou impar:
	* Crie uma variável para receber o valor, com conversão para inteiro
	* Para um número ser par, a divisão dele por 2 tem que dar resto 0
*/
var prompt = require('prompt-sync')();  // inicializar prompt

num = parseInt(prompt("Entre com um Número: "));

if (num%2==0) {         // par
    console.log("O número " + num + " é PAR!!!");
} else {                // impar
    console.log("O número " + num + " é IMPAR!!!")
}
