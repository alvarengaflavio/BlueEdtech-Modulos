/*
    Faça um programa que leia um nome de usuário e a sua senha e não aceite a senha igual ao nome do usuário, 
    mostrando uma mensagem de erro e voltando a pedir as informações.
*/
const prompt = require('prompt-sync')();
console.clear();

let user_name, user_password;

do {
    user_name = prompt('Nome de Usuário: ').trim();
    user_password = prompt('Senha: ').trim();

    if (user_name.toLowerCase() == user_password.toLowerCase()) {
        console.log(`\n\tERRO - Usuário e Senha devem ser diferentes\n`);
    } else if (user_name && user_password) {
        console.log(`\n\tUsuário ${user_name} registrado com sucesso!\n`);
        break;
    } else {
        console.log(`\n\tERRO - Campo Usuário ou Senha não preenchido\n`);
    }
} while (true);
