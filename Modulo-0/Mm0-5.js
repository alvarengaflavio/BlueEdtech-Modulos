/*
    Mm0-5 Reajuste salarial: As empresas @.com resolveram dar um aumento de salário aos seus colaboradores e lhe contrataram para desenvolver o programa que calculará os reajustes.
    Faça um programa que recebe o salário de um colaborador e o reajuste segundo o seguinte critério, baseado no salário atual:
    salários até R$ 280,00 (incluindo) : aumento de 20%
    salários entre R$ 280,00 e R$ 700,00 : aumento de 15%
    salários entre R$ 700,00 e R$ 1500,00 : aumento de 10%
    salários de R$ 1500,00 em diante : aumento de 5%
    Após o aumento ser realizado, informe na tela:
    o salário antes do reajuste;
    o percentual de aumento aplicado;
    o valor do aumento;
    o novo salário, após o aumento
*/
var prompt = require('prompt-sync')();                                                          // inicializar prompt

const aumento = [0.2, 0.15, 0.1, 0.05];                                                         // Lista com 4 aumentos possíveis 20%, 15%, 10% e 5%
let pr = parseInt(0);                                                                           // pr irá guardar o índice do percentual de reajuste 
let sal_ini = parseFloat(prompt("Salário Inicial em Reais BRL:  R$ ")).toFixed(2);              // Recebe salario inicial em float + fixo 2 casas decimais
let sal_fin = 0.00;                                                                             // Declara a variável salário final

if (0.00 <= sal_ini && sal_ini <= 999999999.99) {                                               // salário positivo e menor do que 999_999_999.99
    if (sal_ini < 280.00) {                                                                     // se salario inicial até 280,00
        sal_fin = (sal_ini * (aumento[pr] + 1)).toFixed(2);                                     // -> reajuste de 20%
    } else if (sal_ini < 700.0){                                                                // se salario inicial até 700,00
        pr = parseInt(1);                                                                       // setta pr índice 1
        sal_fin = (sal_ini * (aumento[pr] + 1)).toFixed(2);                                     // -> reajuste de 15%
    } else if (sal_ini < 1500.0){                                                               // se salario inicial até 1500,00 
        pr = parseInt(2);                                                                       // setta pr índice 2
        sal_fin = (sal_ini * (aumento[pr] + 1)).toFixed(2);                                     // -> reajuste de 10%
    } else {                                                                                    // se de 1500,00 para cima
        pr = parseInt(3);                                                                       // setta pr índice 3
        sal_fin = (sal_ini * (aumento[pr] + 1)).toFixed(2);                                     // -> reajuste de 05%
    }
    console.log("\nSalário Inicial:\tR$ " + sal_ini);
    console.log("Percentual de Reajuste:\t   " + aumento[pr]*100 +"%");
    console.log("Valor do Aumento:\tR$ " + (sal_fin - sal_ini).toFixed(2)); 
    console.log("Valor do Novo Salário:\tR$ " + sal_fin);
    console.log("");
} else {
    console.log("\nO Valor " + sal_ini + " é um Salário INVÁLIDO!!!");
    console.log("Por favor, insira com um Valor Númerico POSITIVO e menor do que BILHÕES!!!\n");
}