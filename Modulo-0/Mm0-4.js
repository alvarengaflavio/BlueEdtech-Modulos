/*
    [[Mm0-4]] Crie um programa em Portugol que peça a nota do aluno, que deve ser um `real` entre 0.00 e 10.0
	* Se a nota for menor que 6.0, deve exibir a nota F
	* Se a nota for de 6.0 até 7.0, deve exibir a nota D
	* Se a nota for entre 7.0 e 8.0, deve exibir a nota C
	* Se a nota for entre 8.0 e 9.0, deve exibir a nota B
	* Por fim, se for entre 9.0 e 10.0, deve exibir um belo de um A
*/
var prompt = require('prompt-sync')();                                                  // inicializar prompt

nota = parseFloat(prompt("Nota do Aluno [0.0,10.0]: ")).toFixed(1);                     // Recebe a nota, converte em float e fixa em 1 casa decimal

if (0.00 <= nota && nota <= 10.0) {
    if (nota < 6.0) {                                                                       // menor que 6.0 --> Nota F
        console.log("Nota F");
    } else if (nota < 7.0){                                                                 // de 6.0 até 7.0 -> Nota D
        console.log("Nota D");
    } else if (nota < 8.0){                                                                 // de 7.0 até 8.0 -> Nota C 
        console.log("Nota C");                 
    } else if (nota < 9.0){                                                                 // de 8.0 até 9.0 -> Nota B 
        console.log("Nota B");                 
    } else {                                                                                // de 9.0 até 10.0 > Nota A
        console.log("Nota A"); 
    } 
} else {
    console.log("\nO Valor " + nota + " é uma NOTA INVÁLIDA!!!");
    console.log("Por favor, insira com um Valor Númerico entre: [0.00] e [10.0]\n");
}
