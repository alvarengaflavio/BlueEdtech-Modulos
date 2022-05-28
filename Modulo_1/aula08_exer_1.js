/*
    Peça ao usuário uma quantidade de linhas e e outra de colunas, 
    e imprima essas informações na forma de uma tabela como no exemplo de 3 linhas e 4 colunas:
    [ 0, 1, 2, 3 ]
    [ 1, 2, 3, 4 ]
    [ 2, 3, 4, 5 ]
*/
const prompt = require('prompt-sync')();
console.clear();
console.log();

let linhas,
    colunas,
    matriz = [];

while (true) {
    linhas = +parseInt(prompt('Nº de Linhas: '));
    if (isNaN(linhas) || linhas < 1) {
        console.log('\nO nº de linhas deve ser um inteiro positivo\n');
    } else {
        break;
    }
}
while (true) {
    colunas = +parseInt(prompt('Nº de Colunas: '));
    if (isNaN(colunas) || colunas < 1) {
        console.log('\nO nº de colunas deve ser um inteiro positivo\n');
    } else {
        break;
    }
}

for (let linha = 0; linha < linhas; linha++) {
    let element = [];
    for (let coluna = 0; coluna < colunas; coluna++) {
        element.push(linha + coluna);
    }
    matriz.push(element);
}

for (const vetor of matriz) {
    console.log(vetor);
}
