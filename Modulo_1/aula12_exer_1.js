/*
    Treino: Crie uma função que dado dois valores (passados como parâmetros) mostre no `console` a soma, subtração, multiplicação e divisão desses valores.
*/
function operacoes(n1, n2) {
    console.log(n1 + n2);
    console.log(n1 - n2);
    console.log(n1 * n2);
    if (n2) console.log(n1 / n2);
}

operacoes(8, 4);
console.log();
operacoes(3.14, 2.71);
console.log();
operacoes(2, 0);
console.log();
operacoes(23, 8.13);
console.log();
