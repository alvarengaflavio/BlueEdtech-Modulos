/*
    Faça um programa que peça o nome de usuário e a senha de um usuário. A senha deve ter no mínimo 8 caracteres, pelo menos um número e um caracter especial.
*/
const prompt = require('prompt-sync')();
console.clear();

const login = prompt('Crie seu Usuário: ');
var strongRegex = new RegExp(
    '^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})',
);

let senha = prompt('Crie sua Senha: ');
while (true) {
    if (strongRegex.test(senha)) {
        console.log(`\t\t\t\t\t\tsenha cadastrada...\n`);
        break;
    } else {
        console.log(
            '\nA senha deve conter: 8+ caracteres, 1+ número e 1+ caractere especial\n',
        );
        senha = prompt('Crie sua Senha: ');
    }
}
/*
    var strongRegex = new RegExp('^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})');
    ^               // A string de senha inicia aqui
    (?=.*[a-z])     // A string deve conter pelo menos 1 caractere alfabético lowercase
    (?=.*[A-Z])     // A string deve conter pelo menos 1 caractere alfabético uppercase
    (?=.*[0-9])     // A string deve conter pelo menos 1 caractere numérico
    ?=.*[!@#$%^&*])	// A string deve conter pelo menos 1 caractrere especial, exluindo carateres reservados do RegEx para evitar conflito
    (?=.{8,})       // A String deve conter 8 caracteres ou mais
*/
