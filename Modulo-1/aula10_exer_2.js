/*
    Peça ao usuário para digitar vários nomes (a quantidade deve ser escolhida por ele). 
    Exiba na tela todos os nomes digitados, porém de maneira invertida (do último para o primeiro), 
    apresente também o maior e o menor nome (caso haja empate, deve mostrar todos).
*/
const prompt = require('prompt-sync')();
console.clear();

let numero_nomes,
    tamanho_maior = 0,
    tamanho_menor = 255;
let nomes = [],
    maiornome = [],
    menornome = [];

while (true) {
    numero_nomes = parseInt(prompt(`Número de Nomes: `));
    if (isNaN(numero_nomes) || numero_nomes < 1)
        console.log('\t\t\t\t\t\tInválido! entre com um inteiro positivo...');
    else break;
}

for (let i = 0; i < numero_nomes; i++) {
    let nome;
    while (true) {
        nome = prompt(`${i + 1}º Nome: `)
            .trim()
            .toLowerCase();
        nome = nome.charAt(0).toUpperCase() + nome.slice(1);
        if (nome.length < 4) {
            console.log(`\nNome deve conter mais de 3 caracteres\n`);
        } else {
            break;
        }
    }
    if (nome.length > tamanho_maior) tamanho_maior = nome.length;
    if (nome.length < tamanho_menor) tamanho_menor = nome.length;
    nomes.push(nome);
}

for (const nome of nomes) {
    if (nome.length === tamanho_maior) maiornome.push(nome);
    if (nome.length === tamanho_menor) menornome.push(nome);
}

nomes = nomes.reverse();
process.stdout.write(`\nLista de Nomes Invertida: `);
for (const nome of nomes) {
    process.stdout.write(`${nome} `);
}
process.stdout.write(`\nMaior Nome: `);
for (const nome of maiornome) {
    process.stdout.write(`${nome} `);
}
process.stdout.write(`\nMenor Nome: `);
for (const nome of menornome) {
    process.stdout.write(`${nome} `);
}
console.log(`\n`);
