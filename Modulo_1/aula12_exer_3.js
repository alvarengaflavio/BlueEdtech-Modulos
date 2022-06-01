/*
    Faça um programa que tenha uma função chamada `area()`, que receba as dimensões de um terreno retangular (largura e comprimento) e mostre a área do terreno.
*/
function area(a = 1, b = 1) {
    console.log(`${(a * b).toFixed(2)} m²`);
    return a * b;
}

area(51, 30);
area(100.2, 60.5);
area(33, 15.314);
