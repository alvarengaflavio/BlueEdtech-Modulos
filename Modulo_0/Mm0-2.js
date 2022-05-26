/*
    Mm0-2 Faça um script que peça um valor e mostre na tela se o valor é positivo ou negativo e implemente a funcionalidade de não aceitar o número 0.
*/
var prompt = require('prompt-sync')();                  // inicializar prompt

num = parseFloat(prompt("Entre com um Número: "));

if (num>0) {                                            // positivo
    console.log("O número " + num + " é POSITIVO!!!");
} else if (num<0){                                      // negativo
    console.log("O número " + num + " é NEGATIVO!!!")
} else {
    console.log("O número 0 (ZERO) não é válido!!!")    // ZERO não rola
}
