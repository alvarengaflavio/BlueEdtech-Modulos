/*
    Faça um programa que solicite o total gasto pelo cliente de uma loja, imprima as opções de pagamento com os valores totais, 
    solicite a opção desejada e imprima o valor total das prestações (se houverem). 
    Ao final ele deve retornar o valor total da opção escolhida, guardar em uma lista e recomeçar a operação perguntando o valor total gasto pelo próximo cliente. 
    Quando o valor informado for 0, significa que não há mais clientes, então ele chamar uma nova função que vai mostrar quantas compras foram feitas em cada opção, 
    e a soma do valor total de todas elas.
	1. Opção: a vista com 10% de desconto
	2. Opção: em duas vezes (preço da etiqueta)
	3. Opção: de 3 até 10 vezes com 3% de juros ao mês (somente para compras acima de R$ 100,00).
*/
const prompt = require('prompt-sync')();
console.clear();

let balanco = { Opção_1: 0, Opção_2: 0, Opção_3: 0, Total: 0 };

function numVendas() {
    return balanco['Opção_1'] + balanco['Opção_2'] + balanco['Opção_3'];
}

function opcoesPagamento(compra, pagamentos) {
    console.log('\nFORMAS DE PAGMENTO');
    console.log(`[1] À vista (10% de desconto):\t${pagamentos[0]}`);
    console.log(`[2] 2 vezes (s juros) de:\t${(pagamentos[1] / 2).toFixed(2)}`);
    for (let i = 2; i < pagamentos.length; i++) {
        console.log(
            `[${i + 1}] ${i + 1} vezes (3%/mês) de:\t${(
                pagamentos[i] /
                (i + 1)
            ).toFixed(2)}`,
        );
    }
    while (true) {
        const menu = parseInt(prompt(`Qual Opção de pagamento? `));
        if (isNaN(menu) || menu < 1 || menu > 10)
            console.log('\t\t\t\t\t\tOpção Inválida... [1-10]');
        else if (menu > 2 && !(compra > 100)) {
            console.log('\t\t\t\tDisponível para compras acima de R$ 100,00');
        } else {
            return menu;
        }
    }
}

function calculaPagamento(compra) {
    let pagamentos = [+(compra * 0.9).toFixed(2), compra];
    for (let i = 3; i < 11; i++) {
        pagamentos.push(+(compra * 1.03 ** i).toFixed(2));
    }
    const opcao = opcoesPagamento(compra, pagamentos);
    console.log();
    if (opcao === 1) {
        balanco['Opção_1'] += 1;
        balanco['Total'] += pagamentos[opcao - 1];
    } else if (opcao === 2) {
        balanco['Opção_2'] += 1;
        balanco['Total'] += pagamentos[opcao - 1];
    } else {
        balanco['Opção_3'] += 1;
        balanco['Total'] += pagamentos[opcao - 1];
    }
}

function valorCompra() {
    while (true) {
        const custo = +parseFloat(
            prompt(`Valor ${numVendas() + 1}ª compra: `),
        ).toFixed(2);
        if (isNaN(custo) || custo < 0) {
            console.log('\t\t\t\t\t\tValor da Compra deve ser positivo...');
            console.log('\t\t\t\t\t\tValor ZERO para SAIR0...');
        } else {
            return custo;
        }
    }
}

// main()
while (true) {
    compra = valorCompra();
    if (compra) calculaPagamento(compra);
    else {
        console.log(balanco);
        break;
    }
}
