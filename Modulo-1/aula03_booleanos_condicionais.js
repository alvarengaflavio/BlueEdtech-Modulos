const prompt = require('prompt-sync')();
console.clear();

let nome = 'Vacilo da Silva';
let cidade = 'Jabatuba dos Guaradapes';
let idade = 97;

console.log(`Meu nome é ${nome} e eu sou de ${cidade}`); //crase permite ${} para inserir variáveis no meio das strings
console.log(`Eu tenho ${idade} anos.`);
console.log();

nome = 'Giorgian Daniel De Arrascaeta Benedetti';
cidade = 'Nuevo Berlín';
idade = 27;

console.log(`Meu nome é ${nome} e eu sou de ${cidade}`); //crase permite ${} para inserir variáveis no meio das strings
console.log(`Eu tenho ${idade} anos.`);

console.log();
console.log(typeof nome);
console.log(typeof cidade);
console.log(typeof idade);

// BOOLEANOS
const verdadeiro = true;
const falso = false;

console.log(verdadeiro, falso);
console.log(typeof verdadeiro);
console.log(typeof falso);

console.log();
