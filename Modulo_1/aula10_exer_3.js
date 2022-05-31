/*
    Faça um programa que peça ao usuário digitar a população e a taxa de crescimento populacional de 2 países A e B, 
    sendo que a população do país A deve ser menor que a de B, e a taxa de crescimento de A seja maior. 
    Faça um programa que calcule e escreva o número de anos necessários para que a população do país A ultrapasse ou iguale a população do país B, mantidas as taxas de crescimento.
*/
const prompt = require('prompt-sync')();
console.clear();

let conta_anos = 0;
let pais_a = [],
    pais_b = [];

// Pais A
while (true) {
    let populacao = parseInt(prompt(`População do País A: `));
    if (isNaN(populacao) || populacao < 1)
        console.log('\t\t\t\t\t\tPopulação deve ser iteiro positivo...');
    else {
        pais_a.push(populacao);
        break;
    }
}
while (true) {
    let taxa_cres = parseFloat(prompt(`Taxa de Crescimento País A [%]: `));
    if (isNaN(taxa_cres) || taxa_cres < 1)
        console.log('\t\t\t\t\t\tTaxa deve ser positiva e > 1%...');
    else {
        pais_a.push(1 + taxa_cres / 100);
        break;
    }
}

// Pais B
while (true) {
    let populacao = parseInt(prompt(`População do País B: `));
    if (isNaN(populacao) || populacao <= pais_a[0])
        console.log('\t\t\t\t\t\tPopulação deve ser MAIOR que a do País A...');
    else {
        pais_b.push(populacao);
        break;
    }
}
while (true) {
    let taxa_cres = parseFloat(prompt(`Taxa de Crescimento País B [%]: `));
    if (isNaN(taxa_cres) || 1 + taxa_cres / 100 >= pais_a[1])
        console.log('\t\t\t\t\t\tTaxa deve ser MENOR que a do País A...');
    else {
        pais_b.push(1 + taxa_cres / 100);
        break;
    }
}
//console.log(pais_a, pais_b);

while (true) {
    conta_anos++;
    pais_a[0] *= pais_a[1];
    pais_b[0] *= pais_b[1];

    if (!(pais_a[0] < pais_b[0])) break;
}
//console.log(pais_a, pais_b);
console.log(`\nPopulação A alcança B em ${conta_anos} anos.`);
console.log();
