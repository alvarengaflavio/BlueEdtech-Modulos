/*
    Crie um sistema de cadastro de funcionários que deve criar um objeto novo para cada funcionário cadastrado com as informações: 
    nome, cargo e salário. Ele deve armazenar todos esses objetos em uma lista. 
    Ao final de cada cadastro ele deve perguntar se deseja cadastrar um novo funcionário e recomeçar o processo, 
    e caso não haja mais funcionários para cadastrar, ele deve chamar uma função que deve apresentar a quantidade de funcionários com cada cargo e os nomes deles. 
    (Você pode limitar as opções de cargo para facilitar.)
*/
const prompt = require('prompt-sync')();
console.clear();

class funcionario {
    constructor(nome, cargo, salario) {
        this.nome = nome;
        this.cargo = cargo;
        this.salario = salario;
    }
}

function apresentaFuncionarios(funcionarios) {
    let cargos = { Junior: [], Pleno: [], Senior: [] };
    for (const funcionario of funcionarios) {
        if (funcionario.cargo === 'Junior')
            cargos['Junior'].push(funcionario.nome);
        else if (funcionario.cargo === 'Pleno')
            cargos['Pleno'].push(funcionario.nome);
        else if (funcionario.cargo === 'Senior')
            cargos['Senior'].push(funcionario.nome);
    }
    console.log('\n\tQuadro de Funcionários por Cargo\n');
    for (const cargo of Object.entries(cargos)) {
        console.log(
            `A Empresa possui ${cargo[1].length} ${cargo[0]}:\t${cargo[1].join(
                ', ',
            )}`,
        );
    }
    console.log();
}

function validaDados(param = 'nome') {
    while (true) {
        let dado = prompt(`Qual o ${param.toUpperCase()}? `);
        if (param === 'nome' || param === 'cargo') {
            dado = dado.trim().toLocaleLowerCase();
            if (dado.length < 3) {
                console.log(`\t\t\t${param} inválido... (string>3)`);
                continue;
            }
            dado = dado.charAt(0).toUpperCase() + dado.slice(1);
        }
        if (param === 'cargo') {
            if (dado != 'Junior' && dado != 'Pleno' && dado != 'Senior') {
                console.log(
                    `\t\t\t${param} inválido... (Junior, Senior ou Pleno)`,
                );
                continue;
            }
        } else if (param === 'salario') {
            +parseFloat(dado).toFixed(2);
            if (isNaN(dado) || !(dado > 0)) {
                console.log(`\t\t\t${param} inválido... (Real > 0)`);
                continue;
            }
        }
        return dado;
    }
}

function validaMENU() {
    while (true) {
        const menu = prompt('Cadastrar Novo Funcionário? ')
            .trim()
            .toLowerCase();
        if (menu === 'n' || menu === 'nao') return false;
        else if (menu === 's' || menu === 'sim') return true;
        else console.log(`\t\t\trespondas válidas: sim, nao`);
    }
}

function main() {
    console.log('\nCadastro de Funcionários da BLUE\n');
    let funcionarios = [];

    Mainloop: while (true) {
        const nome = validaDados();
        const cargo = validaDados('cargo');
        const salario = validaDados('salario');

        const _funcio = new funcionario(nome, cargo, salario);
        funcionarios.push(_funcio);

        if (validaMENU()) continue Mainloop;
        else {
            apresentaFuncionarios(funcionarios);
            break Mainloop;
        }
    }
}
main();
