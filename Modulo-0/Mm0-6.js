/*
    Mm0-6 Crie um programa onde o usuário possa digitar vários valores numéricos e cadastre-os em uma lista. 
    Caso o número já esteja lá dentro, ele não será adicionado. 
    No final, serão exibidos todos os valores únicos digitados, em ordem crescente.
*/
var prompt = require('prompt-sync')(); 

let numeros = [];
let cont = parseInt(0);
const menu = ['s', 'S', 'q', 'Q'];
console.log("\n---======######  Entre com Valores para Serem Inseridos em uma Lista Organizada Única ######======---");
console.log("\t\t\t\tDigite [S]air ou [Q]uit para sair\n");

while (true) {
    num = prompt("Valor "+ (cont + 1) + " : ");
    if (!numeros.includes(num)) {
        if (menu.includes(String(num[0]))) {
            console.log("\nSaindo...\nFinalizando a Lista...\n");
            break;
        } else {
            numeros.push(num);
            cont++;
            console.log(cont + "º número adicionado -> " + num);    
        }
    } else {
        console.log("Elemento Repetido!");    
    }
}
numeros.sort((a, b) => a - b);
console.log("A Lista contém " + cont + " valor(es) único(s)");
console.log("Exibindo Valores em Ordem Crescente: " + numeros.join(" "));
console.log("");
