/*
    Faça um programa de agenda telefônica que deve ter as funções: Adicionar, Alterar, Deletar e Consultar.
	1. Ao adicionar um novo contato, ele deve criar um objeto com os atributos nome e telefone, e adicionar esse objeto à uma lista com todos os contatos.
	2. Ao alterar, ele deve receber o nome do contato a ser alterado e o novo telefone. Exiba uma mensagem de erro caso o contato não exista.
	3. Ao deletar, ele deve apagar o objeto com o nome passado.
	4. Ao consultar, ele deve receber um nome e procurar esse contato na agenda exibindo o número. Exiba uma mensagem de erro caso o contato não exista.
*/
const prompt = require('prompt-sync')();
console.clear();

class contato {
    constructor(nome, telefone) {
        this.nome = nome;
        this.telefone = telefone;
    }
}

function adicionarContato(contatos) {
    const nome = validaDados('nome');
    const telefone = validaDados('telefone');
    const _contato = new contato(nome, telefone);
    contatos.push(_contato);
    console.log(`\t\tcontato adicionado!`);
}

function alterarContato(nome, telefone, contatos) {
    for (const contato of contatos) {
        if (contato.nome === nome) {
            contato.telefone = telefone;
            return true;
        }
    }
    return false;
}

function deletarContato(nome, contatos) {
    for (let i = 0; i < contatos.length; i++) {
        if (contatos[i].nome === nome) {
            contatos.splice(i, 1);
            return true;
        }
    }
    return false;
}

function consultarContato(nome, contatos) {
    let consulta = false;
    for (const contato of contatos) {
        if (contato.nome === nome) {
            console.log(`\t${contato.nome}\t${contato.telefone}`);
            consulta = true;
        }
    }
    return consulta;
}

function validaDados(param) {
    while (true) {
        let dado = prompt(`${param.toUpperCase()}: `);
        if (param === 'nome') {
            dado = dado.trim().toLocaleLowerCase();
            if (dado.length < 3) {
                console.log(`\t\t\t${param} inválido... (string>3)`);
                continue;
            }
            dado = dado.charAt(0).toUpperCase() + dado.slice(1);
            return dado;
        } else if (param === 'telefone') {
            dado = Math.abs(parseInt(dado));
            if (isNaN(dado) || String(dado).length < 8) {
                console.log(`\t\t\t${param} inválido... (min. 8 digitos)`);
                continue;
            }
            return String(dado);
        } else if (param === 'opção') {
            dado = +parseInt(dado);
            if (isNaN(dado) || dado < 1 || dado > 5) {
                console.log(`\t\t\t${param} Opção inválida... [1-5]`);
                continue;
            }
            return dado;
        }
    }
}

function main() {
    console.log('\n\t\tAgenda Telefônica\n');
    console.log('[1] Adicionar Contato\t[2] Alterar Contato');
    console.log('[3] Deletar Contato  \t[4] Consultar Contato');
    console.log('[5] Sair\n');
    let contatos = [];

    loopPrincipal: while (true) {
        const menu = validaDados('opção');
        if (menu === 1) {
            console.log('\tADICIONANDO Novo Contato');
            adicionarContato(contatos);
        } else if (menu === 2) {
            console.log('\tAlterando Contato');
            console.log('Entre com NOME do contato e NOVO TELEFONE:');
            if (
                alterarContato(
                    validaDados('nome'),
                    validaDados('telefone'),
                    contatos,
                )
            )
                console.log('\t\t\tcontato alterado!');
            else console.log('\t\t\tcontato não encontrado!');
        } else if (menu === 3) {
            console.log('\tDELETANDO Contato');
            if (deletarContato(validaDados('nome'), contatos))
                console.log('\t\t\tcontato excluído!');
            else console.log('\t\t\tcontato não encontrado!');
        } else if (menu === 4) {
            console.log('\tCONSULTANDO Contato:');
            if (!consultarContato(validaDados('nome'), contatos))
                console.log('\t\t\tcontato não encontrado!');
        } else {
            console.log('\n\t\t\t\tSAIR');
            console.log(contatos);
            break loopPrincipal;
        }
    }
}
main();
