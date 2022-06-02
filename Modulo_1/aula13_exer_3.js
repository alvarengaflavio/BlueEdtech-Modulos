/*
    Implementando o exercício anterior, escreva uma função que deve calcular um aumento de salário baseado no cargo. 
    Ela deve receber como argumento o cargo que receberá o aumento, e a taxa que ele irá aumentar. 
    Após isso, aplique esse aumento à todos os funcionários daquele cargo e exiba o valor dos novos salários.
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

function reajusteSalarial(cargo, taxa, funcionarios) {
    console.log(`Aplicando reajuste de ${taxa}% para o cargo ${cargo}`);
    const reajuste = taxa * 0.01 + 1;
    for (const funcionario of funcionarios) {
        if (funcionario.cargo === cargo) funcionario.salario *= reajuste;
    }
}

function imprimeSalarios(cargo, funcionarios) {
    console.log(`\nExibindo Salários do Nível ${cargo}`);
    for (const funcionario of funcionarios) {
        if (funcionario.cargo === cargo)
            console.log(
                `${funcionario.nome}\t${funcionario.salario.toFixed(2)}`,
            );
    }
    console.log();
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
            dado = +parseFloat(dado).toFixed(2);
            if (isNaN(dado) || !(dado > 0)) {
                console.log(`\t\t\t${param} inválido... (Real > 0)`);
                continue;
            }
        } else if (param === 'reajuste') {
            dado = +parseFloat(dado).toFixed(2);
            if (isNaN(dado)) {
                console.log(`\t\t\t${param} inválido... (número %)`);
                continue;
            }
        }
        return dado;
    }
}

function validaMENU(opcao = 'Funcionário') {
    while (true) {
        const menu = prompt(`Novo ${opcao}? `).trim().toLowerCase();
        if (menu === 'n' || menu === 'nao') return false;
        else if (menu === 's' || menu === 'sim') return true;
        else console.log(`\t\t\trespondas válidas: sim, nao`);
    }
}

function main() {
    console.log('\nCadastro de Funcionários\n');
    let funcionarios = [];

    loopDeCadastro: while (true) {
        const nome = validaDados();
        const cargo = validaDados('cargo');
        const salario = validaDados('salario');

        const _funcio = new funcionario(nome, cargo, salario);
        funcionarios.push(_funcio);

        if (validaMENU()) continue loopDeCadastro;
        else {
            apresentaFuncionarios(funcionarios);
            break loopDeCadastro;
        }
    }
    console.log('\tReajuste Salarial por Cargo\n');
    loopDeAumento: while (true) {
        if (validaMENU(`Reajuste Salarial`)) {
            const cargo = validaDados('cargo');
            const reajuste = validaDados('reajuste');
            reajusteSalarial(cargo, reajuste, funcionarios);
            imprimeSalarios(cargo, funcionarios);
        } else {
            apresentaFuncionarios(funcionarios);
            break loopDeAumento;
        }
    }
}
main();
