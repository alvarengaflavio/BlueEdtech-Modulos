/*
    Dm0-1 Faça um programa, que receba as dimensões de um terreno retangular (largura e comprimento) e mostre a área do terreno:        
*/
var prompt = require('prompt-sync')(); 

console.log("######################################");
console.log("### CALCULADORA DE AREA DE TERRENO ###");
console.log("######################################\n");

let largura = parseFloat(prompt("LARGURA do Terreno [METROS]: ")).toFixed(2);
let comprimento = parseFloat(prompt("COMPRIMENTO do Terreno [METROS]: ")).toFixed(2);

console.log("\n### CALCULANDO DIMENSÕES DO TERRENO ###\n");

let area = (largura * comprimento).toFixed(2);

console.log("A ÁREA do Terreno Informado é: " + area + " m²\n");
