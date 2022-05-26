var prompt = require('prompt-sync')();

let menu = prompt("[0] - Para Cadastrar Nome\n[1] - Para Cadastrar Idade\nOpção: ");

if (menu==0) {
    let nome = prompt("Nome Completo: ")
    console.log("Nome Cadastrado!")
} else if (menu==1) {
    let idade = prompt("Idade: ")
    console.log("Idade Cadastrada!")
} else {
    console.log("Opção Inválida! Tente entrar com 0 ou 1!\ "+menu)
}

